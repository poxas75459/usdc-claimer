/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "PUu13ATZRAUmDi5DZqVzL7pnir1FKDEedqMVpjpoGEm6mtcstNeCveQK53ogE7iBFR2wbZrGwVwnmqNGfiR4Y3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qUn6UPgUacr9SWtniorheYbwBSxyoNfEc3gnjh5zn4XYRw7PboZ3RbDaZkxWGxe8bCyHGjkPS2bEpo8pajcAhHN",
  "key1": "d1LkQgD2V8KNKsEzyAp9hjxyScQmnBCn9oppXSdWyz8GHZrwcvtCN1VvHAyKTVFSe51ShxATadhchq1TjNZz18g",
  "key2": "kRYBQgZREj9YrdU1938sc1WnHvGJdDJR5sqLyrJYLC8z7AYscGwK3ZXMuPyF49rDz1JjPPZQi9rcKD4xEMLqx2J",
  "key3": "469JxWinHbFiXzivjLd5rFnFocVyCrFyN7jZAJW6AGvEWdNQ3k9L5RgSqYQYcp16W4VBen2bwiJrQyrrdb6m9YUM",
  "key4": "5sE6es8JJAQW5FGc9MYvu8dhJG1vc594rZ6XerUeyhRrfnNGa7Y3yQuqTkVPQEBb4PYW6aSQA4ZRDDvGfBkMoVfj",
  "key5": "5Zcq6bpS21AtMnfwhprzzRzJZvBntyZ9ywQJJvhPx9dgayFro2xCcHfVKdpfoUCVaBGSnozt7jAyqSMPWfC2247r",
  "key6": "3kDW9FCrZnktFJRV6LuH5nMCdXQhCPtHAxMndBvPiBfu7FZKwWzUwbeWBJipRLiKqm5w3eDSW15kshBqYRdcKWh4",
  "key7": "5hXNeDZTL87ZjAt3LBsvzpmVDrXjGJLBQFCqaXrGzZStzf9aAvCSZWxWroYtc5LTumRzdQg8hYvijZdHM59TnDVb",
  "key8": "6CjLZHczvuD5ZF2iskKa3dNeyaZvEagzewvjq6vpK8M7VeA13bPJ1vVE3DEG6hs9SqW7waA6vR5Kx4RoLhTh1Mv",
  "key9": "4knTB4n9b4Gs7dMq1PiqVozzyhAad531nuG4AFZfTtXcDzq77dcLivK51rQbC88D5W5wXmmCrMgTwqQWMANHSzwN",
  "key10": "4g1mUHZoPU8jgTrBMwGrBYdH8a4DK6r3ovN9kMiKpTU7JNUdChmzwctJqnNFr9WfLwqJjPjaX12ZfX9xRVCDbiSv",
  "key11": "3TYpsKL97RX5Czgr5WzWBJswZ63KTaVZKUa96DBKhZgmRZZNXdwLVoSGarBq4BFm7Mq66xZr3VinW4ASD1CBpMA",
  "key12": "2y1sWBiCTuMD9E64gEF1GaSj17BbPaxacxHDSNfxF1hC3cHCNBMU6EuCvuEeR5fD53c78kg9nKygJvrMzftKiwqF",
  "key13": "5mJob3C9MRt1BYLVM5K6JD9qWQhmN59hCo9QnVVY5SHzZUKZscr915gsV3gtPWjjqLyPKfYnf2Hn5Qw2nwPmtvDQ",
  "key14": "TG6dHTUjVnKUKN7tMoevg3Jeq3V8u3XaYDr5hjPP73H4GJ91QQemjjq4Z28kGM85X1obtNDWW9V6G8az8wNAFeB",
  "key15": "2mK7phgEf6VzZ9nhjaxNND2aKvy8hGutSUB42zZFBhP2bBEjc2epE3HrnVGqTxBdzr66Xrfn4vDGXnWRV8kURxXV",
  "key16": "4rsUcV2TVW1EdSEMzRZEVuLrP3oKsSosTWYuKNBWbvJuXiGPgHX6yFNq1bd52Y57bEafr8nRs24He6xjZKSseBpV",
  "key17": "Zu4tegd1unAxmRrQ7KqLVpUyWZgH6nbLsut9R1VU7S65yJuTbyHgU1Na35D4p3RgZEWQG2Diik9misDQZ4ejqHc",
  "key18": "3YkNXuif1pzjJ4U6ViTUuVqUXRJAEUM6UFw97cYYsFYkWBdgCXNdTPfPm46miTmRxoLtKHq8mLFy4tzdLeGetFTg",
  "key19": "5RJDgahKRbozMn35zp6sLMGe6n2yodRoBUp5LeGVx78REgcxu8mVzkk6hMrBFRjapCCGkoZvdVWADCt1j5dftETB",
  "key20": "3myqptATJe45yzPcYKmLgCY1KqKRmY2iMeZsNEjupxCxeZvd2xS1w1Lb8LwzVrDxxCGD3VFdzciKBSmDYR3SyZPw",
  "key21": "mk64bPNU3cuZ9XzkRPKrxFFkWjhhY84Xve9txYhbG5ZsQRBFGiW8Fqc32oWAmTampAU3ofHwVDiHSpfA9AhfiEF",
  "key22": "42LuFzTRrA7VYCig8geY1fABLhGwFef32kWk1x92Nasvh4vpdTarGnhACS94AeBzexoi6jcMS1QHWhD8gaxmL6CD",
  "key23": "2wdtzEd8aCVCkwZkJYd4DBiJvgk462UQH4yfS5eAGVoAknZsjBfu7xe3QWhZnCssiTdTyJRYGpWVTPRa5ZsCn9ew",
  "key24": "4MrYJQZPZE2yKQdKrmJ2eaxYyUnQrBVzoKv9faBJgW5JpFwSNDHdnQHP2Uzkh4NZXk3ZXrP5LgrADGgJcqsQg4xD",
  "key25": "5Vbs7gWFd2CskCVUNEt5b3Hur8oPfnMka3xCAKgNh1HFSPg9N23AFd8ZGd2zqLctmzDkB98NT3nj8T84QhZ6uzFc",
  "key26": "5UDhWzLVGexhafBpfxePozecwEckuZEkFRbEmAf5bNPURv7S3TDaDYPMntKxGHmBxdC8RM2T7cLui5HeJSsmX66T",
  "key27": "4enSb8mqT6ZKADVb1Hy5qKsjKvvbo39ToHDzYSites1T3kc36QCXzZ1vT2uTypsFmeFTs9ifNhHcU8pgLMh9co9c",
  "key28": "DcwrFotmG1UrMcoXkmWSb98c3AeewbjT1dr9Jedqsp1FW9gJyqUGSncYsAgx8a5yArQqdi7Rnkh8pRKwLdmSfsQ",
  "key29": "Jjiegbu7oNxMsrLwZjXWCzKwp1grtgjADP22R3KyYkqidNfzL82EgTY2vpHoj8M5o6p6WWf1TkRazfoUAhmgHXq",
  "key30": "2BEzo5t6UYmMw492TzPAPHkHZQwzhGYog97r6AA2orz9NREEjQ6Yr518sexrdbUJzoQev6UbKrF5dosM3rpSZ6be",
  "key31": "4hfBpQtEBafbfteHapoujXeF8aKnHZvabwS41V5byYsvTLq3NWYWxktnDegdbfbnFzUKbYrKxxg76Eq1d8iNLU7i"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
