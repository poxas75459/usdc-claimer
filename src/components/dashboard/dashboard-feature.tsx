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
    "2d7fg87LicoYgpXWSHtFdYAStsaUy2GFLcvGzeELpeuPUGUfwukLw3iGfSh52m23i4gJqQnaJBaueLLxUGzNDYB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L83XXiebtHLztGAzrM5rszKorVVJ7uyG2Gx3itgP6ycUsCpFWXgox1qmSqeVbnEV57n9Cm4NimobVncYFVMYKAY",
  "key1": "2AvVZiX7K7HrX9jtLLhHsFKhSt1SrcbnJKwMLeGeVifAWAbD4XXseKpbyy8NXphr7A7ADVUdkoe9r24Qz4dqpwPm",
  "key2": "5rE1YG4WK2fdg7xYjfP3ifEYghuuhstYTZi7RygZe9jHNqpjWfA1EqMeCQmmrbgxjJAAvZ3rHsfsM3Y1VmQHUEXg",
  "key3": "1GkXc173p9fpjvfKWoDuuxS97fH8bNeMf8aXJqdYjSJKCn7U6a7mSqXKz388Hjvu55DZb9uUAPVDZxyqv7maAj4",
  "key4": "49SNAC5L8Tk3psDKYRUoqLcCBTHKdfLnVCvZhCaNYHjiNB8F7ypUpszdk8hh7Tp3Xi1Nu7uqDENwqg9f6cttZqv8",
  "key5": "2DnrTBub4x47s2sbkF1Hx1oLwQ4kWAYdeE5QMiV8JaLtEU6wriiS2Lf68n2esJ9wdrWgk1qrT8Vkc7ux4HMxYMvD",
  "key6": "qMTagUqqv3AcrdLP6n6nJ727tRNvuyU2DsoyhY23ZRZKJEMzgXyW7Gc24cR9smJ2tshDkZ4Ao1CfgKtvpDCvgu9",
  "key7": "5JKBm96jSXaBL4NXp8jV7ZxrcmZJNGY5yQaLFNXWW9TUHvYdGzz8x3m3APh3fuDxnK18JKwSp35ZqZqSAvSEPLFs",
  "key8": "55Hm61R9WmQBz7jCkG5hvj97eeGy9FusTMgfYvbPLirxosCfK3V7cDxF5UX2zCVmEK9c2sU3hxVzwUnhZbRxemBa",
  "key9": "RsSb9XRP3ZKxAUUrnKk5eFyb89GVtnTM2fWKscZrRsWn8CVoCEMW9uByk6gVVoGSYGK6bEUeMeoX2vKxmAhTjr9",
  "key10": "223n66EuqU6V9CGTtqCvQP91RGKvruZ5waaB2YJQnNqh7qX7mKWdvX5UyCehkXTt29XDGojXi9MVEGRtPcg22k6L",
  "key11": "3XV8e9SpcBVUruEFvE6dFucwARQ8mKKhfTJnvPe9JT85TK1zRWfybyRjFLpfWPcY91SR4tAMk5GLys7ER45NyCvZ",
  "key12": "38ZkP5sxGPZed2A51bFo6qL1iqzsDG2JcvhScEUu4BP5uXTxZ9tdhSYKnzoRzvmZxNbBYij5XHKv1T4rEyerad7R",
  "key13": "3btuF5mvQgk8i4E5sr4rUuF8zta5qqYJNCkXwmrjrCb3mjSmvGfQ7PPmSeYwMyzGgnqQeKq17M5Y8KPFtdkTW6Me",
  "key14": "4sfirGQ5coqRy1uLYYZtXzjRYuUqn8BgqGKCNRyBqob6qfe3Z5PBSr37XkyQEy3hLtPccsWrFxmDRBeLz7p7xf9d",
  "key15": "2M95c6FCQ6DPfSuMoTSTmKEa1q94Y3GT4Eg9EZWrXC8PSPfJxtbL484mZFYcYQvg3dKNtLWN1vkJ1bem7BczmMkf",
  "key16": "hNYNbBqsz9CXnLwNTLzd3iBEPTi5KHy2iicd4Sy7Fd9JoiskHpL6dJosE2HbGcZ2arBhtE8RkaNPh9AzNvRfuEU",
  "key17": "67nV2Wyndi3nPmqBmPAw4DawJK2ZqdSdwc85j4QRGEoYHKe1CatLBqDH9YrCs1ny8dc5FetyJ3VCsWZkUDR6DmFH",
  "key18": "rL6sPqYFCUZjBhUZYzGTpPgo9MQQMx43DkGUJE6R588YKWijqUWotwNvVFzGSWDbtyYMhyAKiyvnV8VczA3pEko",
  "key19": "RvSy8qgMwQoY6yr7YTu7bwtgD4xMf6RZUhuwyk43DkGi6wYNRKv9dcmCEef5WbAsxxogLFXAXyJv4t7crnuxUfn",
  "key20": "2sPau3XCUjWjzqmUBsWJ5ET3iMiWjAZxmkPrxyouHUQKG5Vi5P46RDZZY1Pb3v1i41YZr4G14iFMjpPiDnBVdCtQ",
  "key21": "3mmbtYaRrpEJvygNAuUJFQbY6bTkCYuhUaibToXyikxh5HcbePnE9qxLsoZAFRkzuMP5LSXuJcY2p19jUAxthtCS",
  "key22": "5WiWdWt6QkR4CQxYK7TMhzV3gFwCxH1s3hyTevxKaqBjckB5oyppkD2La28mjtAT1UtQyE6EYKRo5wnf9RbHNov2",
  "key23": "3f55WSTRxsg3iysDM7XqAW5N6yUYFFFkgk6xd8VFDgB1WXZ4R7ypZatHwFFxTEqs2qqjrt1JN464bNo7pKkUrQ7c",
  "key24": "WcUwFUZQPRz8jwXM3PHUqsS3M25SBftJJMW9YzvztekySoq3ep2jcf7mrhLoWczL87NVrgkmVqjEzqyqRDK3h9s",
  "key25": "4a1oGSoBdFDVKVoFsojru8XD5qiXmuFS7RjqHsLjc5UBk82Ew1MifCvSCoLbeu46SzvW83s9HX1T3xWMW9ohysf7",
  "key26": "291K3qSGesWvWv7J2k6wpugKAQHiV5zxiCFMGmA7xR9p3ZSjASJ2CcH43dSoke1gMBYse4F6avtipuLxsoXxgDpk",
  "key27": "5bWi9DhPcVyHnrw3G6FRYpnSLRz6Ndia8DEmLmkFd6goe1LcHjY9Aq4fM3CzreQEvmtWQaQaRAgFCnEfCW5an7rG"
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
