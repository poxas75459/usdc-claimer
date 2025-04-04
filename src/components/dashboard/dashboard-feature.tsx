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
    "5njZPDZu4VUzAFM6x1CWjKNPmNxD7SWMw4kCtnPo9eejdCV5VDX56btdjB6Dt6GSV5hY3LSc2ZBxzBkpwUpH9YKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ayN6Kd8BvArkRh4wJtYksLQUtbDAR1JnLBxXbyKVfe1Swouu8JUC6UCR6DTYjK3m3oDprFuiEHQXPms4f9FsNy6",
  "key1": "4rJJ9DKc3AJmydyqywrtubKGdrDtrJynBbW8xmxWbMgm5q8uLjVCTisgGLVvbqnjTBwRt8z95zW27y3bcyPjSwnr",
  "key2": "5mXESUpQ5YNXc9Nr8aR9on3vqZjetRnuYHauQMKtbdQDSoFFAhK9ruY3MKMFog15w1mSiDr9D4ce4NEaxLe8zgKt",
  "key3": "4B7QvVarA4zkJjHjD35Ju15dpC48f6pzp5EBZQjAbB9AUwTS6jE6Att5NRQob9iBND8YQhRvURepJQe46zvHKqxU",
  "key4": "2cjFucyYrD7UXLqNou9QQQL4Z22MxBzjMtWJurHUwt68uG9kCNQJYmtmyHSXucox5NhfqaXwXMhCmn7veMpycT7z",
  "key5": "3dypR5pUoXHbj5dS6KdHuwqkr8hwfpJrG43TCxY7pLMmvzbrha4yAYdJiTEREtXhieHwMGBB363Hbdhx2TahNKPF",
  "key6": "2omGiPY1B4Vx1a5yFVoQKWrhHZnFwYKL5ctp2j5J3q21dRTqgeEBrQoC23Ujg9B3jCGf1P4xADD13D5MWGC4DaLe",
  "key7": "3b11p7Q1bmyMn96xknt86UWT4wM3u6qRKKf78zW4U9c4WH8TRyD2nW9UTjUBHx4kDjzgaZ6SPhZsbo1npw8CxjnR",
  "key8": "3E6NHF4rfSXo9tDUodjXZMRUEdZvktLgduJ8TLN3yGCxYkQWEBRty6rfY61XsVQ7E2aqpA344qyugAVHRX8V3CNs",
  "key9": "3Rkb5YmPRdTxfXfTfz6dLosSJPdYqvbEEAN28qzNBPkdd3VSsC1sLfYQusS9oLWMuP9UVqjrvBaB8ZipV33yMf8",
  "key10": "J8K738J3XFHtHGHrcz1moDRST7bMZZQfD7ZRQwcU7k7c5hzN4Ageig5XR84EMJ9ic5kRcGbby6iBPwYjMxNiTJ4",
  "key11": "3gxzB8KSzPwWTj7EGS6J9HTRZ3pcpwHPwczneutg1drK62u7KzHRAsQTyaXKfKF1Ckb4WUWBPhRad89vNw6dC5c5",
  "key12": "35uGpUjUTPvFR9MukAAr1XyWPvoW3pxmxh3EHGmJjg5BJ8BMbrsP27wvSeAegW2zm33fsUU6FcMaPeMR9wB875Uq",
  "key13": "5nCXpfMZ1Ni19ra9c9msRzfBMfMkY7DmW1TRvN1WAjr8wTtGPvG8LWC1NFW1nunMh9q41ui4no2kJbBmAYNArvDC",
  "key14": "5PtsCYApGSLDxob77vqQTHksGj2j4osxoSCNBvcMjN3skQQTtABzuVNbnDc8QmHmvQaFAmMD3A9Gvxq1JAvjjv1R",
  "key15": "3cDBhPPanGMk142XeT4h9J2PcMKteKGeC1obwT6YxVyXAWcKCfzZ1Uz4izyns1DF8Pch8DNFCeEa5rTrQXU5JYSm",
  "key16": "27Lxctm3MZ9BumRMc9WKYD1kknyEv2nxEfHLjqJ5cjQqsiKfhhfw2hT8FueZvrND5QcERjBxW9Az6VwijCuobzyD",
  "key17": "2pDEK5X5iH3YJTUog17u3swt4neTCT5wmbNiCJxgdiBMakctyQGWh3QuLPADVogNUpE9V3FDW4nyZw7uocDZGBeY",
  "key18": "4PbVU3kip5NdRHFU6h9w8HUHZL3x6tQ1Ypgmu33o12DmiH8apDQUtZcbkbakERv3b93xnHgWvenRsUEuUy4omZdV",
  "key19": "22Rvw2CtJoxYUeap21UN4vCD2323fdvzyjoC8VaS2SYYe5m6ZWhtoxaB22T5TK3zsC8cGiZrNJqaj3kTCNxrD7kU",
  "key20": "MyeDF6cHiogJGc8Pm5At2FvS8MPxyBSiwE8zbAyhNmVZX5Hb2eUnoR8foeadAWHAGB9bxpXm2qwUtTXUovYac4X",
  "key21": "5TUMMnAQUbVL3E2iXwPX9KVv4KYw6xycwL18Pw3c4yreujxqNnyGHqor8jxQUkzBVsY3C8BGXgd1C9Yma6QKn5HJ",
  "key22": "4Dt7AYhHUnDA1vwwgEYG1J1MUwig6sGep3fEdBuXxkWLUyiT6JYU7EaikxjwzkWxjgjJsU9dz8WJGjpRRtuuYyaT",
  "key23": "3ayEok46AW5YxXqgqjPqLUf76JyqrESG6f3GVgTFDxjxgxLVpACDo9ACBDwRMLk9EjtUXCWT51t2QRY6ZxqhUZSg",
  "key24": "3tfcest76eH5ZmMq82W4AqF8GV5GS3DQ9r29rCngPExCeEr7ubGxpQ8oKRWtgczRrZjg2tJztFE85qH3vpVkvVpw",
  "key25": "62i6oR7uEVs3izti4EnnZszefEbc1sTYNJ9SVM6VPuVFiz7xPsUnbzY5mXQ3DUYtfjDHswR2kFK8r9XvX28KcxTm",
  "key26": "2jvvSZ8vxwhAEddSwrmrLhwZGJus1UC57DtEgwsum5NJGnWcnBmXKC2yqmFps1KT2eP3xyJRAuXNY4xzYUMaCYhC",
  "key27": "4Dss1uUdEtuXd8gkegeEBjhTiBdfNi1SrXmr1LVVuGYCMVVv3cudccdXcYVgcP6RhMxefpmqBjk6QAfifsLi4843",
  "key28": "3E2ZLheDQj7QeYPfYDGU99k91U6bFUXAFSYFWwjGEfraouHAENwaR572U9HimxBJLHtKGWmydHSTCjerLJNKtRMA",
  "key29": "2das6xBrFNPmHocX2oTzRT1MeSt3Yow3zvRHuf4KHq5DeXaHZ53wxGvPG6UowJg9LkYL2umAJ1ESgRdJeBcZhXJc",
  "key30": "2tNvL3PHhGp72bmNpcG8HA1NSsSDvNZx7aP6wJmiKDpzRm4NDzdaiZdmx87oHsxiJkrfKShCBYGAcUMAf189uRzx",
  "key31": "3RmaAGKzoZ2aCJb4kQVKUqapbbY7J4fusLx8qmztaDfpnQAFRBjEnjTH5fZRtBAt4MnzesUZ5npAhgPbtWhAAGGV",
  "key32": "5vebBpdrnJJbjXZ5WrfZGohRx38aeYYuBSVnGDuopdnJoPzth9o3ej6m8qZEDBRGHuXYvte7NH9ReQL77BMtDVqB"
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
