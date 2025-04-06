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
    "55QAZwbLkPMaDZfUVVKJCHjMJ5ojZRteksse6w9QNFN4vVX5AiGEQa1UtZUwwy4qXSdQLA5rcCKDVCDh3NuqBK1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yWd42JxBtVPZcsHUmPxns778jPhUngveFJXHfAtuvzVvwUZNu8biYnoZwvEvzcUGjWG4zNYf8brJ4SVjnG3tDBX",
  "key1": "4ae9e8nYG6kYhcRe68wjNumExkQ5EqpRWu6TsJXG1ZJQHdmRibtjDRu1i5WhnXmEonqvG5tSUbos4ycHTHKcmTJA",
  "key2": "3wdZfjogB9pJtJc9VEKdM7udqFjSR4M44wYPm24SJnNbiEJBbGkguZuDPcrBCi8FPsU4ea4TyhQpur8BpWeRggD2",
  "key3": "2k9XvRYfwpqqgk2uAty8KLmh7dxNvJZecJM6mGqDmgMpKoT4LjMr7nXvbsS8UVaRYjeR31w4JyxuSUJhqfBZdBma",
  "key4": "xHpX287tK3n1NYKMYQ7xPi7ViVFeWeyyods1KAsxuMvsCL9cWFn96fKKNWDVENEBXoQC9avkD5rvX3oZYMoBLzq",
  "key5": "4GuQWnn3tnMyiWj2oDoDJXPFh3ZMKgU2FW2zdYCFoDe1Y1QJE9M1jVT4PEiVAKGMDfMWUYSdVoXDs2tx6FNRFyt4",
  "key6": "2y4HuiShV5Cz8mviPu2AfLtiR5J8nw8ga1jx6SdTeGbgCrDnHGCMpGqGgUS6iBMqMhtVN8Fyq17zA1wfZve9UVr3",
  "key7": "276gX1qSiLnDRJxgViNygYWTRfwWtwrFFtHfBbxDndKAoU6w3iH2GSXW2CvmjUaUdMywiHibjbACLACnjgWPYJgd",
  "key8": "3vs3hPZLLAaoQWpKToU5NtWjhudBvgPNADkZkuXx6gQSneDXfpQ5wi2WKUTykWvfWzT6Ghjqy6vJXezrM2Lt5WnV",
  "key9": "3aSStkrtpg7vcsAisZcKybMKcCJLEsWwkwQLTXqrFiX7m26NWkMd4GdFum3qx9MZaw6qATMWFA4FxFy5rTtBSGKB",
  "key10": "5XGbdKeXoBV6HxFhv3XU4ff4DVLUknHG637nNQyyQWFFP1frrTbbXDFEMQCu3g5uV7Dh1WdFL3eHta8pJeD3nErU",
  "key11": "23Y8MS2BiuyWfqMuFQUKbKxF9ETACaXFuL6grzzcTrbaFuLAMrjKua8pMhSAaf1p3MdJcDmR6coiwLqN7JiX2t7r",
  "key12": "2cHb84FTPGpiG8JankxnWBHgpDtihfUKfa4YHLwfZFSnZ6GPuBRV21dvNhroJVjyTXeteqGfNUW9ADW4sM3wZaep",
  "key13": "2oS1xshjvgwK8459xShVgGHoEVumhCRfWrUDrmDd1MZWYMueLXs2LzhR1YcvKnLmGMeR5jxiPCjKenNFjT7RnEeE",
  "key14": "4R6U2QU3uPKHjkWB1FtShTNymDhEtnUHYX1D39rRaQ86fLhqLd9pJ1hP7W4QTGpQGHVUa6doGqRjrtwARUJEfUkW",
  "key15": "5NCY93BwCEM72w4JWoQ7qGrQ6aYRa6ZKZcKeHyrxPHJuYXqEdB2c46VMTHLNJSXCbTWp4P8cgJJeq27MUw9dFi24",
  "key16": "32vy69Fr4LG3qiAuyY28yY9vC1iZYQ7KYaTUKPGDhjz8pvpXJHiZGpgvohvHLnMJptPKML8L5TxtvsAxwHonivKX",
  "key17": "5aF7tL3jgn8rDxnCv3K19eQUpD2Y9BMXBn1PmRghT6CCV67ZzxAvHkGGHG9dvYYuu3yRTeDSQNZUjpcExgEwFDcC",
  "key18": "2mBnmGjHhwu9GbYBwaT59RAxrcLwSNZ6Ph5r9PZEwwdQRWHrrD9f5Vi6uds1ZP2SfDZxYX5TE1b8g7Jt64BwhTG6",
  "key19": "7kn5g2LGKSrEhkxdRZqXzCP9dA4jS9vusoNE1zB635qJ1EaRYdCmQJSqJjN9ww7nFJa8K9j9kMCwSkvuXZgyRes",
  "key20": "47zhjdypBYhYdqCdXt46vz6NiFBVV5V8iZskuectWovLTTb4jK5Lag1xCWYAWqtG8XbVDE1AB34JPM6ypfGcj3iJ",
  "key21": "2PSYUcnFBvGq3e4yvRE3EeJgZ9saQUimxbmq42ESzDnPo2yWnGA6iDwbE3ob4v3KD27ALSPEYkTnsDmXBQoxfAG8",
  "key22": "5kuNMcGqX1YympxoF6QiqegsB5aW9nr1JsmKRgzQf5w7FHZCWfV4pisuTuQo14ivpD9D2b1bkVaMtankmhEextDa",
  "key23": "2SrWSEczP8HCBbTgVZuWW1LLPRNfiXsusF8DwaDbtvc3eJpvbVWNFo4c1GVwS9iyTzqjZUunsZEKN2rHq58bkZ5U",
  "key24": "4tHX4FYnHhdYk89kG5fAVU46pNQRWxAfguaypW41J6Kw39MW4XdZLAEuu3UWz4Phu53cyET2z2dEiFN6j2oLSLT6",
  "key25": "WLd3sXRmCRvtYY2tufz8E44H3NsNrEC2gQ5K7wZHYJmHhTwyvmFzPofK8KZppMuY2tuzbFwbuUMGbX2eA6Xycq6",
  "key26": "4ZyZr2FzHDUaumpDu1pieaHd4EjohQX8CVBwLQaT3s9ByyJgG1dTxq3EhE3Ge7aswbTNWQddYGJUVZ9Fo2EeWEzd",
  "key27": "5ZM87va5LTRsXH9KPBPMXvJDCAPnETvzs7BBstNH8cWmxpGPuNtjSZs8RTT3G117oWwNzqus86ZFAZdWa8tFikhA",
  "key28": "26fEYzwdfzcUE27bT3mXRb4d9V4FgBrfRF6ENLPnN1gFtmZoZ5sK1X3bbLm3waZGKhfjcaFpdgYfGQxTRionDK3L",
  "key29": "4FUmQUaTKHbtU4K7uEj4jbKbyYCwiMdEK9eoS9PTsPwbSN78Hwg3X18Z5B9yxkimwhrXGH5i8FYYh7nrs5a77gM8",
  "key30": "5pNWzPW3oNTTsy6xSMG9REygCNJRDzt6GS6HdTAbGiEUDUMSvXXoAL1A8NnLP1X7VsV7UVuwcV3fKUBLXcwWUAvB",
  "key31": "25knyrB1HUbYghf5wbAxGc5o9RjtLxHxZcXgA9WC5ZYcBWN3yzmQTX6w437t92hQEVhcszcgjjdwVZJEuEUAxgde",
  "key32": "3dBpLC4xxJyr3jyNskAX9hqmMritWYGW54wXXSit68qKzKsR2WmDP5NxCHfQ76KZ92i8GuGXU8Ve4kTxhVkKsoT5",
  "key33": "47K55qP2tpNkFRDWTkRLe6aWgn6pAvv7xCXqYSPD6Fwa1U4iWdZnk1PKUqqb5FJziai8BPiEakJA3xrRSDga5Lsd",
  "key34": "5Xq3ksHvDG5BMDNR3ckVPPyHqMQ87wgfGRN5Bz9Yjmggu4TkrkoZi525SVr2sjo9qqCaQGE1HzmofvpW9MJ2UqQW",
  "key35": "4e21gmgS7CMXYpZU1WNVZ89Qqg6Jedft5KHC5NqFvyJAD5wV6u3PhUkZePV57Uiwn2MX4LVzhizXiU6u4ZtRiQPh",
  "key36": "4sPGBbndRsXugJyDkHdMU6JrVM9jRqjRbuXJmZPJ3jhKfy9rRevnyW5syGFJcT4q8hFYdozQftNCEht4zF9ph6WY",
  "key37": "HZQKWCzXD66zQ5N3XHwEVn3jwQeux2xzA8Y7t49aCPttvqtPRT9Bcodhb569bkjpCgCyvrwpW8THj7p8nYMHD84",
  "key38": "2rKHhbZ4aPssbpsomqqqmA5LoMDEK8n6ScBQhimBx78H9j4u5FUVqhF1yqqr7RwJ7NvdFFwvHjj3vpv1VWPkFpM1",
  "key39": "5PRpQPNZG3metYTtmQJU4ftWmkMtNosGK6qb91AUQn9ai4v617jifmyJnwZCHD4337T7cz7dtjHEPHtVR48XNwB9",
  "key40": "2La2oSWBA8CjTQnhYMvoazmby8cQzgG1ZHmDajxR41nZBjchQ1QFT6tsVxQXVe6ErLvarNArj5WZk19H8a7xRzew",
  "key41": "5QfLPW5UTjwDffjsogxM1y9kGRSr2MGAwDjmeuH3C7Ri1Zj7QaNjDbKioTsznMf7tEVKBxYQ5a9DCjdf1N8hQcbn",
  "key42": "p1gThQgz5Mxi5RvUFaw4eqGYmkT1pMT7gS7Jmj4pNvD4RwcnzfueeJwRUhQhyaX3U5KiPqVKY8sUKUe1K2BQ9Ri",
  "key43": "4fwXVHeeUucWWhHLbN7zsjBXKL2QpUzxBiQa3LyTwNjikJpV874Wt8t6eFtXhduiPMsv2wPbkKFoiDnyprYuvsBe",
  "key44": "57K115zo33fPbXkSKn3DJReC8LAuBwSTYEnDW4u8Ke31L3KyXpFaFUy7fh2Cjt2T7VZPxfPDHmseqx5Az9fn8LR4",
  "key45": "5RaRiodF3GuSTqrjeobdJWw7fivZ3eDXMyhResNfJPq9dnYwtTF3NwAghNeTX73rxAqQcnvZVnvGxFv3gtKnN4ak",
  "key46": "zZNQGvViVBGXnkq3aYpohwh5BfLrwz3h8DaJxUkwwd9y4AF9X3x76DiFbMxDU6DyuVMzDRFAPEvxb6tKbfjN3TB"
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
