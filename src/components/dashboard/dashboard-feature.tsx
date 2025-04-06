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
    "2HmjD8HPBmoWeaUx8Wiwct6YXrPhazszT9tc3pryjCnfE8a441zS42eu7ewfCGkBiUgnqd1dLwi55rtM157JdWbi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cmJUwW96o4kR9rsy9bWrZPACrD7fiJ1sSqETKJ41g1Aj5yatYPUYsdR85MBsRvy5c5QrdGEXe8yr39sBG5b4N72",
  "key1": "5haa6cfbg5v2pSFMmdcM6jPWR7CAePSVguEHxsHLCQxLsLWMZQ76DnbQ9fa31PTeL5z3KHXniTBAK93jVJnFCY1d",
  "key2": "4QHbNrLYRpwNVjPuDK2qkpQD52bmQ3ZZ3tutrf5dqd5DZF6DuTBU3PhnjdQQK9GmzWhNQ3kvEJVQK4rKgzR5vaPj",
  "key3": "5YbWbUNcKYTiH12qNCW1H7NuTLPr4zrB8vgKB1JEhAE92M18T67A4PKUDPozZEBDsz6jdgV1AnyFcryauGNHBhkV",
  "key4": "2q1oMpKbQAAoqCu96XjqcpGhth7xDnKKZyfMWdoh1VYuGvb3EicVBLyrTWKdh6RKbD9e3zByVRUmCRHjEJx9sFyk",
  "key5": "Ph22C4wufyZwW6VnjTXHX9g5jfP5CJoKBb3Zf8xSD1sqymSDkDR2J95eNJVBtv6qvGgJxhbQpXb12nqX6vYJUTR",
  "key6": "RTSQ444TVbpxpQ2j6i5kVnFQCSiUiVx8QM5L8V4Czq7SgzPsMsfzZnxi3hpEuW1M5S9YFemgef9TrXi6N85TMmm",
  "key7": "64zGbSahYEtxn1dzmyZo7VnbrT7xHGERinCrXTyphvy7D72AAmZQNjLMtkF5aRu4pxP66vZoJMQat3JAzSMeU2B5",
  "key8": "gKi2aZcML8jqGGWqkMLhe8HG8ZsCVuFMvfZosBqkKGh199n1bMsiyqvi6uM4wzXx1vVvWb4HjVVCjxGC5pfFZCb",
  "key9": "56fQjqxTMKtiCqscWPZmghVTzW84pD3akBExCBKrnUCopK7HPF2JZLxjq1XJFRJ5TEoaUKCBissVZ4YLgkWX3WW",
  "key10": "25TX3VswoAZ7YHphy7KTRmeTkoiWKt4q74KwRzzZma3gu91xm8bPjCjcTLwodGvaDbhjdjxdMP3WHM555NzK9sf3",
  "key11": "5VoEwgjPS8uBNTXuzxQsAdx1bBEGmJLdKseT1G4nsmmjquo59TRMkr3yFtyN774N3D5R2vnJrh9peuA1oHab6HkL",
  "key12": "4spVci3riJQC8goz6LDZfZsjxRD2SwuWmSjtrCfFr2DNxMedrhK5EKNFqqyLdzYZy3UJGM3TyzFPXEnPsc8Bnojb",
  "key13": "2CBpaFTJoic1Ppfm2YmgELJzhH2ZqDMLi8HvzSCSqg49Nxa382VbJ7EMMV6t9J3jEru4mDJs6ehXTetw4m7Hu6QL",
  "key14": "4NMzbzaRgd3GguKL6KQ35s3xRZNwqJU1FEPbGcrQuQyoXp5mGah1HPd8uDgpYSEpJTvKG3YGwaGTftZTZKZx3AQ3",
  "key15": "5ASJDGPJArTEpp1MNSRL4ACs7Xc12o55bjYPzkuvkqhg5tvsTjKtMEJgry4o2meF98UxwLFnHsKEp9B1ex4uDxm",
  "key16": "4iPja8aE5BRQo3bVDWuBAfGzxqLjH57XSnimTHVHUr6knpPMPF5T3XS1MZWVMW2nx7xKLXi5KtR5WyewkYGBceP5",
  "key17": "4ggMEx62bHA719ThrMmir5JR1oKu2Xj614aKgEVTqVFnKWKhBZAhuKDKHp6g2hPcDE3rSEeARhYNaY3UiUSSxRjh",
  "key18": "Q8Y1pdX2xRTEE62sNnugM7thZ1kuKkxto4Jisyn4qdnLtiFGy9wxGPXHTpA8fLRSL2M1QwsyeyxSD6T4FgKQBnT",
  "key19": "3o17A11YjUZxB4qMiyAJ7df6vGpKYSGD3PYUF9eiG7kw36rsPMksewBQmYAnu1eyFtAic9HBkDbKiEcGUZBXjfh7",
  "key20": "3kQLG1kYeqwzSdGrSt5te7QJGEk8F8cxX9mMC3TsWMcKeuAaX7uxenRavqPfdXQ5au2rL8pf2Ne4yjtJ4QemJpEF",
  "key21": "HtMMafqSushDUEw6p6DbKUmr6hWBaECoBYpa7JgKALtojeqBzGCqRpSovizi7B7uo5kgoCk1JYNtGHjjZchyd3g",
  "key22": "5qMViZ6hYncMD7VH83jzm144K7VyZdnkG8QsFEry4Pc5ppahUF3q8Graxp54s7Dn2nhp3sqYgCFxBCoox8fLGD1B",
  "key23": "4xcooSYkDxDhHrFukdiBKtzuHUwTZf5TbWvHCDLaRKk8x7LoWFnzoF6VS88f2Fqqj17GcuAxBDC7JXji97WEcWw4",
  "key24": "3qaXYZNzz2pgm6xotK1E5VyLYuzoPUSgTzrH2FvHiw2bEXSMbXuHfMAL4RpqqSSoYEBiX6Ngm4PF2ydzKijPKoRb",
  "key25": "rWqYMq5eCWgykp3BKZS9qEzG1THtGNkNPoyZ78dAtTeDdxhxzm4ByRqdKQUj165owFGwxWZxHezFeY7G9joNHYe",
  "key26": "51DvkGp4ZZCtnu4nFDgmi5JayvhaBzZ3jKgW9xKAYKpLka2ocXTLtnrPmUTAEWPT5SgqCouZE5geod5jKGqBHzQW",
  "key27": "XF9m7w9f56QSr1FvcBs5od6thvS8mvezgvnnRiwh5DBhR9GWB1SDg3jJhoKbZk3MZGF1iJ1BHWTbRbtq1Adrc1s",
  "key28": "5sYo3pvuTRAv97R22wf1o7SRJmNsBKsw99pu651n4f2PbQNKgnVB17PtWwAaGXE4YpCjTyTpMfyjdY4s91Cu84Cg"
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
