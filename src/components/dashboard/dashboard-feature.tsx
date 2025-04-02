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
    "4KgLsrkTWTjcXUStANz8t3NmS9a3YBqXZVi6bTVmUo7Bz3tgtQpakY81uQtYndqxC8JvaCSSV1kUKasYMJ5ZtYL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ABivz6fD84MxssKzjVzG7xPCm8UirD3TPVw3pKsd1xp2aoAThkYuCXcHMTQrRKF9wHWiQLwfAfXjHnoWF2PBigw",
  "key1": "2qTdWcQSwbSekmrckVniSYmrFRKHjTPuXB2QVKjY4iygG5ZXq7MS3QaNPE9gVDfeP7K2qfEgJVwRKwDd2FRDUiCf",
  "key2": "5YvX9vpPxonSZrSVCBQ61zrafhFkgYZFiSYf53kHY4m2are5NGoGm4vCcYCHTjkP2x3ATX2XcV2nH8vwqBf599Pp",
  "key3": "2Y54eTaFLcmmyZqKqRmrEUG5RWYEmU2n4K9MUoVHzYwq3DEmKDyWs8bVjvh2CwgQYtukEhQooAv4GRbGpeony6SK",
  "key4": "3P8X4vJ86gQqtKRCdoAoXf2ycxVhjsj2Ht44DbSCzkeEdhtLC8HtHnPzQKqxxZiteiksfqDptGTKevZPTx6RT21P",
  "key5": "4JsGFpRobrMjecC5CN2fFskot5KeHZhE5KCtYE3fLtgFuhDUv4NPAC2qdL7LcyzgEhsPop5w2jmkTsfrne6mBT2M",
  "key6": "2k46ghJLMNXGxJwTNQghveaZVGH47fSAArsABUeN7bmrM8npzs7EobtRVGVeJ4zPcVyYRTj6wEgmMLaXwqkj2npG",
  "key7": "2LE6QZh68DSnwpDkpmgoADsRu2VCbysETnGCKLUveyULGc2xKz8wwYDncs2M1sV3VFJKobxMgDsBbFpkGZa52aDx",
  "key8": "2P1BjmnXN2Q2vmEumyeYDdazaCAwW9zBAHwAZg68iVXRhnbJBcH9uHcBCDpHawFaKBdE4xuX54UCJXfLLkiXJiLn",
  "key9": "p6C3WEZrUXSSU6N4eNuXvcVAt4z37qsRdca8yq9KLx7s66fvGZ587xCuEjHKfA1RV4XEtAMFuB1gHGdQ7ZtXELC",
  "key10": "43hzD8p4enPZGJFMvQfMYvSkGQEd8aaXdsSdzn89VNSNC14euKnT2fhzsZFiLjdvarPRxN6fBRJL2GiHbaKswfGQ",
  "key11": "3TquHAuv5cynDJcVjWo5VCsZMjL5fdrwLmC5HLRCofvb98AFnaodGgzQ9UCXjvjcH5SCaUKeFnoUpZajs3qC9pqa",
  "key12": "6Hwx9HSb36vny11DpqKDNhRKoTedBELgkZwYS9UtzQYYZ4QNEbxCPGHNaktWZztShJpHr4YWCq8A6DsUBxYyPYv",
  "key13": "4VqBQ6dqSPsLEDPPSxfAnPVovZd29PKRJy8awCtvP18YaBG2fXnhsqBgPfv4kTi5TjnUxBviSJRxs62FJzm81heR",
  "key14": "5vcZbPy9kKSS1d1YDC8eSvHeCMeZMt3YhT6PB6DYqKvR6q4tv8HsyqJJf2AWWkChFH3jTpeoqgsLExbFt5YGYEHQ",
  "key15": "27XW2Q96UzhYn6RtUcCzxCGTe6iLCBdHyZQZdTW2ApUhPSgTsjNzDM2j8qbqytAJTwQHoNGNPbe94poJNv5fbd6c",
  "key16": "33B9xjoLRmnbxZELHgCkLvUSxR8mCzGAQfTLUCQftkDM4rQ1WizDJKg7bFwoNyx8EPMA4HNnEx3UxdjZJGjCi4F7",
  "key17": "5jWW7XhwrjJJUCTZTNkiKNRD261JaQCEk2ZrRJAGs32unpyg2oaFYzPxicFWYit7jF2tnHGJXYYVC9xLsVYXSfii",
  "key18": "35mh75E8kssHjXjzsNUzHg5f1wq2EsS4oCTWeUH6DLW24QGgHrFtPNugCJTWid4FtpJBh6xjisZzBv5rg2Ko2ifd",
  "key19": "58S4sxs7hWsEQzuDzKPrrrpip583WzWfbLbUBka5GtonLDNVA4kqzqhZ9pia1UemqfspFpFebxqDgPKXcYYbFUug",
  "key20": "EbS1BCYxsKHr9AEeACyn942JHzXq6XkrJAR271upkPUnmXvs98ap5vqhGoeQv3f9mCVktqeegYyNfb69bvqo6wC",
  "key21": "3ZBXw5YGzGNDWayZksf9cUX7PazHa9HKR2o6n4jFsPjQNkT1iNuovB4FRLD8MNG1XQU9pNgUibjDhLYXSsXoQdBC",
  "key22": "3gQCxGne1uRPtGLBoDfgTETowQTJPcV33wWr2tcM5gLdbZ1ktcFxUew8YLSh7yKuFfVrzETbCXCRA3FH5hvZnMrs",
  "key23": "7bzqWSF86SVM1xn4YmFe9kZbh5w33JnKUwXYrmZ9dtugPZ5DbDxo9hsPoGqG86qtYZnxLEAY8ds84sEuoxaVNRX",
  "key24": "1AT3g2x7giNxrDvqkKLmn9UUsewNvRdpNist5YtBH6dfig2w61kWJtevPemqr6r48LZszf472fzoSr9hJw4bwo3",
  "key25": "4cD6DXGgbhcGkwqYwqTQqkTwPdGwfTYdpLLcrgVkn6LCaKhi8FzDza8tdLi7HzvdgAYAuCC5MzimEWjoGS16QRCA",
  "key26": "4HdnJJAJxcXJZ3YvU7i4H7qgLRwJgzuaBT9KUW5uRpPX26zdoKrWJLJnY7kRXnHcdE37wbsYHE6SZEaJJKFZGtP2",
  "key27": "2ZYEw1asVV2UPfHgXS9NciRxtA6buDW9TcBnkHxUG9Kz9tq6vf6WfxmxygMFReqv23hT6KW5DC87Vw9g1qGM2rDc",
  "key28": "2sojok7QvZqWkX62wJjiuD3gJVSmetRUtfbnoSWayWZJ3khYgabsVhP8X6yPea639UKhktS1PF6mAGoSLudZsSey",
  "key29": "YhDKtrBNwhw9a6CzHPvZSRMxodNntWFL6Abxm6b6otQ95tDxw9BzVLMJGRqoQTzoDi3CkGaBwjS8UZdHMANBuUE"
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
