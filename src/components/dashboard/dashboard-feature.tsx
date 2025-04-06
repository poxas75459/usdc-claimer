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
    "2ZEVvspmHN1kEFrrzjeRHCktEwrrMjp4G8s9FjAmWAM6aQ7PL5GU5V9no41jRyughPBxHt57WSXzo43cGyPVWQBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xijV3ckjjqoJjsYDjn4HkXXtm5v3jQHA7NBVMQWSNncyyKSNsTSsQrV3uH1nF9hNG45x4zBswEeganPx9AtGnRa",
  "key1": "29aC42Fnhd3X9cK2duBKw93BDbN87DFh7usx1bzXWYo35HayoaVD11SxPn93pKw4HbnfX8ppPrDtNYYSrybnf4JD",
  "key2": "gxVq8JRSDMuka7zcoauYzkoUYCLueCvFCGAvJm19mLt5MbLNsmup4kViR9FneihXEaY8TcEoqyUKUgTRs8nzVXV",
  "key3": "2ik6ct91FwRxkFbPcjz8TJJCtpr58BvU8qAxC9qM1eNhvuv1mBtfmnXbtFthJ6YTzwbcHtqRZKrqFnjWSPhUXjgs",
  "key4": "3CPNtPyPZzEVzH6am2rdJXjczWprh4m9bMQb5wTQvhmwdjY7aBkv41aewXwvmiy9N2MBEXMTro4a46tnGLME222J",
  "key5": "4VMcvjsC712VPJPLggEQDZRVBHRtSsMapL5M2WrFZLV6wZPUJoxZWQ9Gw9cPEaaQtNmzDRTkwMmNgGKg546AUYnF",
  "key6": "3ZwptL9Dcjjxnrtwgpr9myiGeVzXvUvVikhrTuKSMRvczKkiNaE8WE4hZg25ihiN13mUXRdFvEwciKTecq6zYzKc",
  "key7": "48ZfPMTKu9N4oXpPBChnPfuUR1QEKMUbXuCemL4vMpmWNDT6B2HoTu78oHt9MBA6qDVEgW4g4FJ8tyNJf83KW9WR",
  "key8": "dCWVESHRQqQww3G24foGnxmHFErg1CA2nMQKE1qQaMWbh3x6XFxvRvgyXXF6P4LrFeXqYmjD8DgQsuJBkLQGFfc",
  "key9": "PxJj3nxGwYxkwW6nDR657FRDXxKKo4ibWg6Zz7UZvqHvH7kQvV1jaZ7Nehc1LALqBTM96xkFr7L2DQ76WxqZEwx",
  "key10": "2Hz5CeK5cVvFNfchTtaBa5iLw756bHA13Fd4VHx63s3ZWzjiUT2btBNXa6LzzmkEwrgipQszSvondMiRw1EtemA7",
  "key11": "5qjbsZRPspHHH5Bi2QzXLw3P3sGhAuC7UtMCQEiK36yCCtqL5TthkfNqJ4XXYURmCFyoL35keUGahhjCSpBjHjDZ",
  "key12": "5PdiLVT1JQpWcCjPhKRszNQGUiFHDHTavrWJEcQ6s6MryyYV8FRUJUGNNGSmVxVFtK7NqKEAYvBD8HNpxMs28f8j",
  "key13": "mrnCahyWzR1Eo4DW6YkqZzb5k4njqewbM1o32bHEW44ps3BgpiXGSgLa67ojBUb4UNkKDQGRQ8QuSsLrYa7nSjy",
  "key14": "3iNVuW5gnUS5M6bEbvQqjUeBPXxGWN14RMiS7WbeRvDgcsuzgzsipWFmEbDtyLjoqARCmtZmVRkctRWPuVPtQriT",
  "key15": "eWCfvpvPEEc942VQuDXmdkTzzVD7xf5H9hGFJZGhQ2QAWi2WUuDjXu3evWKb6J7mGX5KU4Fm77z5JJhRvkfpaGH",
  "key16": "4mSrPM4ipnEAmG5VFy4nkD7hYBjrSRLr76cXJ5KByKX5LEaqsdxFvBgGBSsaqLMTve9WBLH8bEntNXpQySqeckZu",
  "key17": "56FjuHJmsSB9CbhgKgEMCF4ECVvzfGFzdQuKSmx8un6YE1CcxFWGy6y8xzVkGsdS1FpZVsYwG1E5VodzW3wYAawG",
  "key18": "4SH2ssAC6iGWdvSBRP7JfKvbdrUbqpKdB9ZmJDFisLD5qgRGkv4h9SD4fzyaGkor6SBDHUBJibpda9MK7ycsUzz5",
  "key19": "2E7nQxFbC6RBeU1Da5gucWzM4YYeynBMyM5r6mXknmz8PYAuX6u9HP6hu5MgEjk2yimYerzocXJi4nhjGCF7Vuk4",
  "key20": "5sf8X42rR2EK5DKxD8Zk71bffaFx9TgWwmw3QNdLPxM6FTsmgL2VEko15QZHdQpmkN1KqTMLkFBvD51VByPTeSGM",
  "key21": "5hmFYKUSXNSvbEDDQdZgU1sEBbBy9UdaHcHGFtdi1zGbUcn8vi8xjkty7stS3kFAFLwsuuB4398Dwkzot3xeyaf9",
  "key22": "4se3nvAJ8g5utGtMSwcGu9Gy55kh6SmYz6pi2GzTkDsewK4NbhdXBtcaMpyo5BY4iduyAZwxNSD8RuwbnuzcwXH5",
  "key23": "5ByveHcU3XwGgo7PNxAxqyHiU6BsM5rVkxsJLuzU8WCUzE3zT9nXtKhzbFtycXE2gbxrVde9vFmk5gHfxVxAdkLU",
  "key24": "46RmaXZ3qMKujM47WhfdhartEfYGYhyLb7gsqP4znhgekQ5Yt9KkVKMSgrvDCcHb4LdwW9yajvMSDKV4gG8ri2vv",
  "key25": "4Vn1w72ZN59tJ42fHD6w37avU86sj5PAYwrAJvUa9Yu1N2ndsi6pgnjGLpruPVey2AaHFy8PHJjqEybiK7v1aEwD",
  "key26": "4nxso6JXq1izwdoat7Y5SofrWLxNeB7e2im5zaWfPPwmq21K2gV4i8ATf4JVVy5CW4TbBnFutTJfyfkAsq9vWDkj",
  "key27": "nzNKZpWZfFifHJhyYWVyHbr6wpNHV4N5bnRkL8PkkQ8V92upXHfbSvxKQHkTqtANyb4zC3mBNvbgsad2KowM2EB",
  "key28": "ZYin2mUY4Y4h28ydEgmBfyMHrPtoBQNqCQrmcpUUijh71T14DyTDpEEpvD5wjCMhwNsUCMPmLCWxFrFBnUFMQ53",
  "key29": "5oA7nBUz9fSek8PnjdACBombysoyc5NYtPfuQ3WVe5DtzFQMppiZYuUgBJe1ArzJK3YnvXk6kwnRdUGkCZLGMZhY",
  "key30": "3PMfJJ1dhTQ6RnFpE2uLvEF3PvzfyYSUoyMHueBXtqAS6Vis1RntsWVan63YxkhiTX9seoTH3J6Zsy11dEdRrcys",
  "key31": "3xfLoKH7EhanTq44oCbydE2xCUGwZgDFNRd8rV5mEvzDxPoVJpht81go64hjCkVU36ahKyX4tHUBPuYTDpR13NEF",
  "key32": "3X8Zysc3ZLk24K9XyXAfYbEjjEAWdLWmjzCtmeFapRj9LiP9gPq6MxotsxCLm1NFnLx6ojyGapNnQeXtctGzFQxJ",
  "key33": "5Er5zBkwA9q2ALos6zkSNpNyKyCFneT5PkJokjo1HXHjYCJM9McQqVWE53MYy68a9WAvYgaWfXvTKRncYQogMnWw",
  "key34": "5TmNcxyHbEHVtFdf5cXpqHmcbCvoJXguCEcaTDCBeBGJMDzou3nvSMcxQJPDcpNZn4vQjZXTDo4LZSLLqL5svCXZ",
  "key35": "3w1mHNoj8BYxEZy3NREvQvJcQ6UqVRURW4VmN7vM1oCQUfpDaKm9vkwAw1Qrchn4harZPpq7KdHsGDxDhkLuvAe7"
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
