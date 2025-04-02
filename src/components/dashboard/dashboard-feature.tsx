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
    "555dJhdNs6p5SXFH31HFricBz4rsEhh1AAvz8mudG8AuDMLPRvWaPnVnCrAQ5tJEnLLuc3WU6KssFz4kS6KcXJ6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wr4HactdnDhjQhw2EagbJjSpByZx9hysih5Re5LXf6JMA6pHbn2eZ2WTchabzQKBm6Dz4fmfBKXQA9XMRYrQyJC",
  "key1": "446X7gnMTEXzNugv5z5gnegpqNQJdQvpey81dDVWhGTw5D4AJhzC3FhbzxUwvUd4ejjTwGC29fYsxrA7PkwDMh3a",
  "key2": "2Cn1KcRhq6Z8c5DceLLJnWZiLdET6kAgTvWSpuNYeC4M5yMUN8DQzwExtvbq1msDYdWV4wamrrvFWyJT6ixZCyjX",
  "key3": "2g7g3V1jKbkAvpDWM3tk7rJmVKAWwnLhdTeCuQ3YoNZjj4RMRft9fK86sa85DYJMCsyDeg6Lv9a6LJVDZhjhhDEe",
  "key4": "CgXeNh59JZ2XNws3M5NGvsN3hquBW778BKHB4nWP8Wk6yR8tNtGGgHaRpJZ5qHsLiqQBqTQUH4DBmKbtBqaanvF",
  "key5": "1cUjtNB3xsc3KHubMqYwbgPJSvMyYwHQGmwT5LTbeJnBeBPeWVEQgheoFQonGt4pFbrRTpMdEZACpbRZGt7acnL",
  "key6": "2iJ3LxCDnXfL2ZYHE8zkvCkKXqz1hX1E7AmYvj9S5Mzvi9wE6DKgS7UAFkLmEtmWcXXieF2rY8jkEqZzrxCyeUHU",
  "key7": "3m8voXS3qefPdJy5S1guBhg6GMDgn4ks7RPx3kbrnjHFz6eBGCzBaaN4RW4m79rPydNGGWGPrGAYhLaG6SBzZrJX",
  "key8": "4qSQyZuFmdmNbemeeEzdYSY2QbZa1pamjH8rh2UvbibqLL5wBCQzmRu3vpQhmeK7VKXFbWsyAfVBz6g9Wwxe8hkE",
  "key9": "2FJPmoGWJnHfX9q2hx4MAr9pUis9S2bWWKXfrbETcKcqJBV3op3tHERrfvWd6fzK1JKRPYGxjUHTG9zmwLorRwNq",
  "key10": "4FFgdq62nrGfc3A1iqM26cfUuCNzmFYpxeAVHUFWpHVoU5vf7kE5PjCX2RWifQYMBBh99THA8yfCu86JXfhJMQeB",
  "key11": "3WUXBkYiwqK1xbegWLmzhLGCp6XidBUj48NK6FXTXn6B2GAdWdyJxHzMG2X1wZbhmuYiy1mnj1WrAWqcBKzQRs1o",
  "key12": "2TtDiahmRKJ2A5SR9pkugasSiK1QrntvoithPaEuxfpc2XU5nqcVdX494GtScroKJw4DBiMr7vZGeUghYpz7Zomh",
  "key13": "58GNYcreAKh3YQvhiWNGhD5W6Mk31xrQXUBpN6mBgRavpkboaPgGPuMnRDzfLDrV5DCdBzdPTxv8JpEv7CyoACtH",
  "key14": "3PeJNN4ruLihaWGkkuFk55rWE9e8nmkXHFc89DSrrVttBTsAsb7k3xvD5frryxNwirNrTNksGnGjLpqdiX6wYR8w",
  "key15": "5Pi6jhHbYgHRpGRLpA8ZfmN11XgBSansDtGvmueFXJhQsgFkNx5hrcxAq2D7HTFZCeoWBd9QYW24xXrs5bEoH7zE",
  "key16": "2ErADUZ4SC5CpQrqyoguspWTYkicM7XWxS9uu8GGQ3jVywDzeWzj9KkzjfHnHqMbhjdn8t4knXKDPstmkFbTs89y",
  "key17": "4URrPZ37MMkU7SaX3cB19BzbM7n5FMszEGRrZxpTq4YMbAQA4qMsC4RG1nDyeyisQuDsK5zEGownzLE91DejhW41",
  "key18": "2nqUdxHukDaHyaLCXqqrLjznrDuGSqjY5a7hz2X4nrkdFRG8Fi5V9dNVEkH6nu5Qf4H3tydxBFFABwXVrkzB6eCJ",
  "key19": "645DtmjumaEwGsugj6tZXrJHyLzcXUbDeV1F3YzagSCq5DndAFT2cykNXLTKPuhSCkYSC9YXdSLodpms56qHvp97",
  "key20": "48FvkHm3oq8yB52SYqyzR7MGr11ZznSPPfwDGXkiawj6zqpMeQA1J7ZNWoCvroCY6vxfdpSCTwmsSmjPanAN1sVA",
  "key21": "36MWF3MX67Vmmmf6mJrTbpJSKviYU8VxCWWfGbXjdyL84MJKztxEwBjD1i8PBVzuhoHs441k7RmX14YvaVBV4jci",
  "key22": "3FPqXRjGJ7SpYgjo7qYWxfD5qdcJE1kBA9s34vCxscyinxEFmpM5eGNWXhqc6fPcCC4A1B836JVpTgXaziHfWZvT",
  "key23": "2YU5NUs7VP273aAzXp8vytBv5VjTkjiR3mYxwDE8t36Ag5yZTrQkSgfbBGuXz8gYeGsrLucM37DdHiAi6rfT5yma",
  "key24": "PbYPVXt4X2GykHwe6beuQ8wM3bufteHZ7YcRw7q6Sok6qVvYNUPmVnUxT47Jyv5r1s8BF2V2hofAuwRfMzfxP2q",
  "key25": "5c5oYzFZBwMygTakMns7Guoq2hRLw4uUDrGAyxZGPs3oX4VNoHsg6t6KLPj25kcki9KdddwwsMX4hTWUcSJdgjzf",
  "key26": "5pzHyAJsafbvE79fEjkBGA6vkeDzHh5oyo6gsfiVGeKoAj2JsxkNqhYFBqX8Dvr2ujU2XjZt4Hwvcwr7YdXQ55zP",
  "key27": "daduNU3JTct7xrQGbtud9XU6yEeFmnWuWLZLPfvBTbXmGA8q2gXhKLrc1fAwn5Jp7aAQRJaYDAf1ynP8frk4s3i",
  "key28": "GASbuUdN12bLLoKmJ6C58sKSggvCGtv8qzF1zzhDErPkrAqargvzXh25AjQ9J2Yds9RyZ6dLiSGwTyS12dSYvhd",
  "key29": "5p8JdSpL7xm4sAAg8k8B24VUmWG2CFnMAfeBpV5VqMh6QEHYpNofR7qJzmvbogqhwVhyopyLsPQxJV5VeMdw2QHR",
  "key30": "5KzbHRwwDc84WsHJHR3LwLAKPpVXumj95ARp5KsBGzE9BXJbgSLvAJtTNQbfo5xxyqKSLSGMf58Z2LyTcNRxBa5U",
  "key31": "tS4L615W6FbPFy3fvX3YdAfB3SFcuLbDa4DfGuVjWofQFb5BGwcCWNd3dmnPp3HJiZCHgZkbuGrcoj96jresGGW",
  "key32": "4H1mFeYkx8qXifWEu3VxXNisYAMXGLdJDasdLfzwvRKKDoxTHgDhuo7GrSXSHDKgpDbzpyECzwtfGeJHnje7ZmuT"
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
