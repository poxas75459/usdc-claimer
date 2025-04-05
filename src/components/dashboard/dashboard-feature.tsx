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
    "5XghGfffcpWjN8G9iHahQ3muYkPWwTdeB2tSSZ2CNMJfqPGVuQ667B4PbNFG1X7fwfv42FjfVns7Z5mUDQK2QbSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mJ5CfWuKgvkkCBA1JuLZw7KNwjyHH15VgaeLkWz2eSVivoKa9nriLsTZyusigTNA7zCn8DUjy19RWXRr9bEpz6B",
  "key1": "358Sqvut2R7Rm8ZCRsfGY4Ek9us89MEF16ouSJpLWogd6Zda9VAjgdALWiqpjxKonDnrM2SLojRvQgfLvCEaQrf",
  "key2": "3HnzZEo6JL6GwhPJcTfzyveVXeQQ9NDstBGhcrrSL8h5WKWve9SyarfN16ZF4C2dUqiF86DjeZPxqCnaFRKG3raD",
  "key3": "2QqkQr9oHf49Zc5XMSVH6mXNeJy6XQecFXMHnVGSGQka1jQkVGt5JK4UquhfvVmL1QQ3RvzR7tZbwbhNXyCPT6XW",
  "key4": "dkviMXGPmBi6HyWbshVsQSsS3CrzbKAf4Uns5Ff9o37zrLN3ePw5GcwzqoTbY8adM1rNQxusi6AANHnVJZmtmjq",
  "key5": "5sooGR9nYWV6seKqMQmpGtfUxY6D8Z7Sh4o76rUYVzUSazdkhQq8YpgNvPX5jq9HC6e1o1xpeSTdhfCjscdxxHdA",
  "key6": "5wecpxsXuYpbytLZaB1jS5vHz8VU4dgNGMYrMwhYJYFzMREbHdCeYpYGrbCptSqemV8moswA6ChzVG9un8trsDaz",
  "key7": "5tqdhDorqVztac7jJVSWXjjb4rGKuMiPDSHXcmJMJ2gjvw48reEqkv1YE5VJkhQKBTzQB9BvgKec5tr5YM92TfJv",
  "key8": "2BKV5RiToe5aVpYnLrXQN4j8osL4hzMNSKBGw5ez8ebTtzyQWqTQbut9o7ztXUvzoz1JGCzT1GfzvbFRukgrWMzs",
  "key9": "34Cdw1TuBBEuMbwCF3fLXXWsbXyrvXbck53qRKxdmCWgojuySeRw9noKMiDGXe3t445brFUDKyDWSeer7E9b4YFz",
  "key10": "3u3mii4E7ZBPRoHGKECgKNnDggBs2UfQfxWrqGQubENd2YyAx2Vg7PytFeZQ76rsKzZNpmRnErPhrXH676kghVA8",
  "key11": "515GWhEwQ2S8pPMRRYz9q5P7WMQSBET1R3nb94NrnJoFZpwGsQa2aTLwNos7tMh89PaSJCUhkRr8f8K8RVpJVBLh",
  "key12": "pfuD25xW2TPC8iL6cxoYVF1fNcqmNLMNmV5msgytmyCfU6wQkc7Jv4f71zBxd8AA9kpeFMjgkxrxA47asGUQFzm",
  "key13": "3ecp4bQ87oxSbL9y7xCgN6mLKmAm88CRsyVRwbguhRtwNJAw5bwM9yVAQbuW3kZDu3u3kFhHPQPRDSfT2M25DQHL",
  "key14": "315EV3ks17ExGf1X1FaaEccySR9RKbGnzHT52oSNGpFMEdRgLRJAzV8qFJV7Hcpi29g63eJfrPZnL7ADdKYVDR8C",
  "key15": "5GDBg5KjprZ5ZxN4YZ2F9R7vjqRSQamGsPLPgBcAKDd8CtuRgU6pQb8p4k5A2b4vy7bdntuWqCUbJV6s1sPDdTPW",
  "key16": "28uPP1h9TYEbEXgKR6JuBkTsm7xYpspLtbb5knkPccSjpDsu1bCtjmRTe5mxrs8JDefX6LybhA7ZV77zHL9n5Cuu",
  "key17": "iQGBHAx17r34UuPATteFFavjDHJwqJCwNduURAh2PpAQE7ZdSh9xHm6iDqgUtPUEdmmWvsnHfJqQomVLzmKQH3Z",
  "key18": "5N8nYTFdDfYeBC8mWe5cFUa6VRiSswiwfRSGZBgrkGMMS9jYwTetQ9QKDuSRB8Ny9gmGC8gHJVL4a4mKtkWCh32U",
  "key19": "5YN9KPg3XtWmWqRvE7ibyGZU9H7UMNXyoKom3dquvMzjjYYnmmLE4UzfjZWZfHG4aXmHnDsZ5CUCPZprgRvsnMMe",
  "key20": "5wpJUrMpKLGhKYSuSMpeuDyTVg29oA74caVUMGA4c1bi8HEaW9zcRBamRcAKA8Gc1cUdc8NP6xffZqPCKJ6fKbKd",
  "key21": "hh7SKFyo75f3yYK5N9BrDU1P5jrE7BTB4GPx2tCdjpY937GL55rDXsQoJaTrmif7E4BiHGSKhmjVNbcHhMhcqhB",
  "key22": "5y4FoZBe5YXHzti2GMYbEh15CtERd9VDPujkKQMURswaqbZV4xvTiYGenvv8pDDWj75T3hF97gfSnwDcBfmR7WwV",
  "key23": "4CbrkzHEvABstF4voGHgbrQeDYZnjRdDBdcEwPFqbiQyuSLkQHxcK5QfmxMh9izoexH6GR9iTXWqAGEZLf4fcLDz",
  "key24": "3b7d51T2iGGehkejWMvwBWzXB8jwyCNjhrYrnmyiHGszTBBfcwbW5A6Cy2zJ8ad6KY2JrHn1m1GRnAYutCujFtLv",
  "key25": "2u5PUCZLj8vSfHCujvQ58YydvuwXPbBnti4AQzPhLSQP8uH8CrwwKJMJ2QQBgBrTvS6pHgG6njopFKRmuwgphj7C",
  "key26": "47YefXBK69f7BQvNRG1PJsJkVfGB3MJriEudmjunKKSwvceuJcMbCruVT168aSmAsTSVUzkrMjH6nGCPs8ypvtTU",
  "key27": "2g8n16wJHqUKADVf4nW3QbVVYGypC2rBQ3gRYto3npXndGfHuoMAqDozjMEeBwHmDqmjRw9YZBCSkXVRQJwqqnCy",
  "key28": "53BF4YaNieuzjskU1Kc741iRazxDWm2xgvayPXpTK6kTi4Z1mdZAVcya9hH2iJjCxjfugiwNouP5C9fd1CXVnPXY",
  "key29": "33kEcmVsmw1fe9CBkJx2sjRVnsPuECHPBPcyPTUWuwHH3ut5H5f8gTgBcsYxs5SEn8Sp1pb47BY5nN8SY98gLHww",
  "key30": "5xVtmg118tZQJnrkw1bSgbZXyxTp1zgT9YLAdu5qmEV5KAX44sc9PzLFxYukvNxn37jUdoFk2amhCBuMtpR7dBzw",
  "key31": "2bx2ydxTZw9oycjZeYtinndXMQfUMYmtY3mPAq8H4hfCb5MzCJiCyJATXt1ZTXpFVRHT5FNab4nGeWbi5tnaKeGJ",
  "key32": "5rxiu4uCZ9MC2skRnHt1wBvF7j1s3b3Aq9XLttUVocneScUriepX7nxDRFzoo2At9TpGB3fbRX1drLuhSc942Vje",
  "key33": "2cfaLfCMWPwrLD7xw9W4rqaFf1dwWRmKWBTNzzAaskbu8PD5XnN1LE4N8LKz91PWTwJmV8iYffvRuTR6EuyWrpWD",
  "key34": "2ZdqMgtSKdUPSu9Rrg2KRfW9RLYryPxZbwVLy6Dy8yqdnTn7JNBWGXzFfrz2zz5MSdNLSD7kMvdTTreTRX2wMC6z",
  "key35": "42zNGZMmw1YUwW9qbUL745gNxvVQ4UqeNN37rrbuo1bYJTNFoWzF2yeRZJdQdh8NU9QC8BxdWAHy9nWULSPFGTyn",
  "key36": "47ADtkN864mzzgNYfHNhRznxVSzRgVKxk4qjdeVkAWK47RHMHtukVzXdnJmQsnusxjmyuUsH19wsnVgkpwDVMs7u",
  "key37": "5WQkJmtwEw5j9KkZnwKvyWZdDE6EXi3bRQEBbnvD1WfpFuipoPQNcnpxhUSv7AMd4DvVVrAM2F8tNFi2fWzvpCQs",
  "key38": "5QvTkoStBAGWcnVsjz1JuN4AiT29iKXYrYPT6A7ZHEiap3CrggR3TMbQAozpUJCGR1L8g6wnXqmj1NBCHXMF6dCr",
  "key39": "67c3uFfPuUWNY6qcBSwV1nftxLpcCG4o5thkbmujqzywQnfSYeYZ8Xu7ukMpYM5m8rZg1jFCq27qJY5y7rLsgcaJ",
  "key40": "2xKpXYMXTgPxWcECfk3TMo32fitXoWV4X3q1NzTq4NmmCvPio1oPSEoaDR7wkpdHNjWgo4xFtNvZaQExp9dK8SCm",
  "key41": "8gDpStYqLa7tDtes7VCUyocYWc4AjgrzT7PitfzAUNRHGXsz1kPEPDNkoBeHKNY4A4DaV94coofhav1nWwrJL1u",
  "key42": "5jHgBUkHoXDzCniBdfbR6xdAVf33SLdwY1bgWrtd6vBva1dnWJmwosEfd2GSXP461zRX636bnVTZPk5VQHJgM2Xz",
  "key43": "4MbS4gFKJrooym5RZ8Scu3J2z2j1QFsQJJzKDpw4oGpXJf6apyvi2kBVkZ68q66f5FRDskF2Cqgoeinf1Tc5iRMg",
  "key44": "sWS5148FsyKuDMAidx6ogxnu4iqqcUsQ91vgz3LpmjxRh5T9Vmd5zJWwPb2AyZXQaHTvpcRN6xQTppGnPN9sawa",
  "key45": "35zgJAAmj5diFAsmuRygmBAZ6hW968u9rNq2gMgCFT7vzwrSPhycRSB9JUExjDoeGcfYGu4Qs3Tep5CGyuQ224TQ",
  "key46": "3rjasDe12CyYm7bDyKyNPYinzZRr9gfcRuoca8w3iQf5aaj8tKBpSodDNeJzRubSGf88qmatjuPRjkHoQagbVjSx"
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
