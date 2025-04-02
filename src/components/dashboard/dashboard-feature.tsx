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
    "3ayH8tHhj1CtK1FoPbibNjm9jkxXS5Z3nHaUkfgvo5z4ujAHLTg61Letx7PPJXpPM5sdi9tf6diGmtrCrpr9Qkx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TSMs5Aodow2j9yph9Si8AyaGtcH1L37YM4qqpq4bqEyQMFrUnMaLFrDmmzxtVATB5rx5J2C9ahjKvduRUwsHi4D",
  "key1": "2pR7sPFSvKdLY9YoCxTf5ykhZxtRyJbq719Vt2gvFTzVUtRGJk2r35mGUrp7hUi5LehWgnPoNHN7w7NBjK5EZ5Lu",
  "key2": "44SYgkDMNREbpxZhBKPSydijWExTpoFR8RL52AwUq8kMB8xrBrXRKHmQyKrbh8PofcSeeTgetcN5bmH69SxnB8kd",
  "key3": "4G8q7sggGKE5FKRe6JSWqnVCC3dzb3Tquo8bLz9YrTDouULSu4LYTybSQNAEm4uz3yozDwdekhWT7Uiryz9ZwnzF",
  "key4": "5qbR4QVfNSTF9s37dFexiZRMk7TLA4UvQDVK5RFNXXryaL8YmY1SgsogEyuFXbB5mWFGMkZ9YLMTzkdLWx3zjzyp",
  "key5": "3ZvUzrVr9uP8LyrCbea8ua89QB8VSXWyvnpRvJEsYqWLGx2i6BUPw1Sjvpyqj71mWV51C4zfcaupcW6FN3QC3hc2",
  "key6": "2YABywHKRNsjrb2dMYxmXxAaiinvHb2vY3Y56bgeyCpPcCuuaE1YHFozSRtcTCX4TkbwLVuw2wHiNn3U5ZBFArjg",
  "key7": "3yfeEvS2JGFwyPaXvDdNsxPCdZCX2rTj3rtXquDeWheuZEt38o66yZ5d6NyzRdod1aBNHZkSF4j25Hp1eNAJX2jj",
  "key8": "4TENsgNko7zYR1YgvdVHxtzkXHzXWYHMUfey1rpHZ5JHxW7jZgQukSanhLmdh2sn6vr5cmuhyyUhKL4j6RB35Fwy",
  "key9": "484KBNUB8ZsPindHCHd1Gpv8uK27ZmC38X6RjJfpbaVjCGKejX2Fmtp9zUpH6qmPnMcV7zad27dtnDTqo74QToZ4",
  "key10": "4mujN12TvqcunTi1v8A64WmHQcepMCr3Rgs7Zr91cx41WwgUX6by46w2eUdgiKi2gKq9jL1fVC7YfXLM1PKf8Q5b",
  "key11": "4x31nVYNoL9fPKQ3SjrBFsMEbCwLJGJyuVmqm4B6e8TGE5wBmPAx9ejS3wC4uTvpEHGx994tMcaUxKwQv3qcz9U2",
  "key12": "22t36ZdiaZqvynJSMyznpwgbWkj1KaYhRVL7ncvKPbWheSXaUp5JuvV9B1CjZWrqmn6DLGXYPYk25guwmWPSxH1T",
  "key13": "4wRScVsaei4Y2mxfC5gzcZHTQHH1EKCAEgAFjvsbQZhZ7y4nETrAbX4FwZG2GdMEXr3PqsJRfR1RwSSHcMd6WxRX",
  "key14": "3ZMVCu5Ff4PzDXggM4Lnogkny1B5efZam6P6HN1VVL5jeGrrMkZUt1yCZuhYD5kQnN482Grj6SV272NFgPtSgSe4",
  "key15": "4haDddDXDpqKxapxin8EPHDv4te4VL4RZCw3Evnr69uJmdKkCnXnBiLRdKxWgLeBLVNGeFh9W5MgDTBL2tZp686",
  "key16": "4X1vbDfBXCZ2yRPiG5AB38VvJ9sg6VkZr5rb67WxYxra84oYriSr1dSFGxDXFeg9GT26n3BbtkuGVa3ZQgWyDK9U",
  "key17": "46KYWDifykW2Gc5J2FuTz8DhK6BEDkpTfen92RssexQ9XHsCE153b35VzYWekDq4ZET77qnWguRfA5oMnNNJUDTF",
  "key18": "3zaiudFWvQG1CDe9E5ZC6rpTVddcV6guZ7ueAkf7ZHUGmADfchnCq3sDEGF15qbLfz4ADFvoPzy69hHmnmXoudct",
  "key19": "5Lzgr2zCmpHitoqQubuPRWZfDMbtTQavRNLCehpNxaeo9a9e9hvCeqkvA1N3VqQYE8ctzVzvuz7zcA17Vuej8aGZ",
  "key20": "19Ktn9VVwYJZ3SzHuVE2TXb32Yr6x7r3z27xiSDuLPuc1nb2DZYBmGqg1vTTECpbyELsMisMdiVYuvTUE9wCigS",
  "key21": "2vugZhwD615SXHmrLWoRMsxLbGUPVgn3HnFrYGsggJLiiPdQtcawUJzh6KRwKNH88aXNVpvxM9PUED7EHHGGwXC9",
  "key22": "4vABek19MS6Nzm6o7d6ZsLTcK6HvfbznDxUJeDgmDYCiej5pNdYZ7AR6jLU2N34sixPoWyWecW6HMicyvyNqqZNL",
  "key23": "5HLVJCQ8arakZRTu2v6ebEdLmRpXfVtu7WKxVjbpzNoBra8YL3DdXGBoAkQQK5WyG5JGRZ9Ss3WNauU7hvf9cRS6",
  "key24": "4aG9A4WkTWXdi51N7c8vG2DTMFdbiLFkoH9o9yu47guaZDoaMoDPsAcJuScHZeRY2NGb1aEJq2z8m19QGBiibKgm",
  "key25": "64m9MPhVVJSAAnnMb6Ai93VtvmNf2DSwurMds4czEsXkQeLgtqk9K5D8qE3CChYhV51cPUCdFu3a4rvGSEVYBK8i",
  "key26": "3Dpu3Rd4KgCXzwgZwsMBeJ94YW8SGtjGL7kbWSXUpiBRa1aRe5AL1k8UhNFXpBb43Hx9LfLCi6Ayxa1GtAVeM6Zy",
  "key27": "5aHZZoWqS25rKMTJvcVeqyZizv297g98Qu4FCaA2R25abyLa3WBuLSoPVeZGa9v8DQdvrjn8gmUfGZXrP5UpmGc8",
  "key28": "5uEY49USvSAu4azRwPZ8CgbvFjfFZXp4JjH69vE2tt3BBrtvHU2ZUj5vyZyR825JkU1nuwj473BNohnPLL9bpEQL",
  "key29": "Vg5WGYHNmcvQPZ2ybVK61L9FT6UTJivj9VN3shQ1b5NKs4xLjMy5QGBsnwDoZbECPLyaT6xu5fFGcDHz9PkFn3H",
  "key30": "654V7fAkp3zZhw5NLbxUSz1NDVnRyNr2LrLpgmUu8EJ2Yeyeo4YJ9DXYbkW3k7TDyEiNFR77CpVS9oao9vBM9kyZ",
  "key31": "4J7aeU58kKgT1DXsAw3w6KRXEkeMLU9dkpW88oQ8eE8Drr8nJydynFy5oJMZzKd9iRXWoMYE6ZJT2BQ65sjRHzWv",
  "key32": "4htDnqR3pD5qUdZZQtcbDKDTTUuzuJf4jH1yXbiQWWhZdVWA4ntwsvfNtStmVh97YjFxQDoBmNpidZdHHcAr1rZb",
  "key33": "34eGGcAQF79Y8TnqjuxAgaWz69ontdP7FPiAsUT75QUKbgrJqsxYNU4xmGhv5RmWkZh2xMVteK2eZQrsXeKjUGbp",
  "key34": "3G36zhkrpgcHSkfcDZZbTqWMUTLt5CmQBdwRjEsGtAAQ5r1kURPj9ef3H4fudGWrUe1uTwipAb5fiZApvtpYtx7S",
  "key35": "5LtcCwRmxt97aMAcxDqWzkpbnuDG4cqNQVqQgefzBocYCd9a9d2nkR11iWoPbrXHq2S3B9McgQujop9eexsthgC3",
  "key36": "4spYeej8Na2hptCd42d9wEaQwqTQbeAjywwFfTciTnVkMYpacCDyQH9ZbShgJo1LPjpDsqoRDRTdivh6JwnuDGRE",
  "key37": "54csp48EfzAwEhmxvw6ZBHEMQqAYgAMvrRFrp1tTQYXk96XDgigCtuERCfNwWL1KN8fsfXyqVdQUTLSWZqStjSDK",
  "key38": "2qNoBVijtdK2PzV8PuZTp2qn1wnFi4fPCD35e1XsPgAnM6gLubDehzgctKdSNXM3VLL7K5SedEpVqTJg2L9e7a3x",
  "key39": "gDAtatnYcZeApZ6VK1EvHD6bEVnYcycGc6gjGLcKSzS8Ft4N65dfZsGAe72coU42WzM7GjZnqaGWSQvRdLQgee1",
  "key40": "5AdGYhLCGPfzWeFRSSPMvYJWiJm6KxaYRs6hKU2R4dWUJZFsFCx9sC9JXreXpdvzZqTvbPZHRnEGSkQHiAdMrXzp",
  "key41": "5siBhZH4M1oMHio2KdJJC2vWBSjTtTrCmmED8sfae3sPPoZmWjNjy61HhuWRnbtHLdm8LuQcA68RMpxb24V1Yaun",
  "key42": "wtv7roMsfbFLa8ZG1TtxWS5q3AAJkHddvNsJYrg84osTiUuDLZXcaQN6CoWfzn7se4xVwebGieoG4M3qYGKfc2e",
  "key43": "5WwohTY7GXcumUBLE25mAuz8bp5L2dsGbgmQfm8qcA4Ba4ThLKNxYLK66MirH5vPpte7iyze95pmssiAihZYH8Gp"
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
