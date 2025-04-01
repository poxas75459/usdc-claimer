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
    "4pJkmQ8KwWLTzXXk4nmRzx5VrutwCVr7TJT3rGdFynsW6b2ub4LFQcEeR5gaX5BZueKSvJHZMDGhWf7UX8fVM4k7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vsmx4cdF8gYLWEWxvkQVNdwFU82Mcox5QxERD588rCBnR57vkNgpjuYHpJP35oGCxkUtMYjXMDMFYUMurusMNor",
  "key1": "4LMu5deMLUXJicgMKajQ4MNwkxLEgHMxdiBGD5ooaUxaKHZinPk4xTVP6XkhVBxbVCzPKgMS3rqnnwEo8HXfZKRL",
  "key2": "5YxkzAmgrMhYD9vcWen1ofWu9ExVQKmVfSMA8meL2b7HfHvQ67CC1KX1NXr46Th7qFHF8SktC3rUAAx1fyJ73oHZ",
  "key3": "Rxgut63K7x1EhvgA94ZZvRBGVBkDfJWAcwYzEwAWYtLQTpJrECuj5x1F3be2d6umJ7ayrwjAeGBWgDcLZqqdorP",
  "key4": "55nPXB6wj4Ye2aNgz3CWYRtEe6nWHn5roMinNgbT528eLxDM6ynXqVRH8Yev7ivMv4Dsq7gSVKKKkFgGETvJrbzn",
  "key5": "5JFDqL2Wz12FKGjn7FbnfunH434cc9StYhn3QL9xaPUhK34TKprP8FH5q6mGjoPN3EDJV7nnDFG7eTwj4Y9bA7SH",
  "key6": "63myxXse9RFkzz6XMnTursMbcKsf4gvLCBNRf88T2FVPG6Ci27gDCRD4JQ2oE5x2L5E2ysc995KRGmH1Z3xPQcnp",
  "key7": "53aupJF4AMYxeJAgNSZ9H4ykA9PBzo3pkNQN9tfc8XvgkuuvPQnwHPXgvo8kKzpjEpiUdFB8j4xzDXHyM1uZeSoe",
  "key8": "3XdCJzwPt7pkRBncziiY6WA15Lap7fSL8Gzz8w24bBAgVSgki6nZw424vmCEmpEm11aHw7jBSRHmmrsagMEHWMgh",
  "key9": "4EgcMg43Y1fPVhjLETYSjYHjCuakmscfMyr7C8WnRHdVNC7zh29h8vHPrCnQq1qRZWZEzEmNU5Mt23VHQcyA9LQu",
  "key10": "58iRvjaL1fGtU5SggcHH1mc8yYgV9yFvwWuQ82uscfZKpsgtuVtEiBjnuCsDBVpaAqb25CXwBSGXYoVhJc2vxZWh",
  "key11": "53BjmcAmH2bBzxDVH1okvNYxCMHcnnmnEPNbiQ5TDyAbVtYftzDQB27cFXvS1wrMqBRTn8yUcfQY3NopzDnz6gdp",
  "key12": "5QzHpftydRg9cH5iGyQvWpfkeBoJeoTkb1BLzVBNyFzkReuD9qyFgQRQyUoeiaEw7MQKPkZ5QuWMGKmTMZ2wUDEh",
  "key13": "2tHjxK8ogogKKiS2hF5Uc9VW7H6ovDy7KmRmQ8ALWqWEweCWY6KWLVkeQU11Epcm7xdPToxtG5P9vXhiUs8NdkG5",
  "key14": "iYgoevZL8xkwGp1AGbjZDWFapWxHjeGM1YD9c1eJ6dgcdW1Lg2cxdwNBQysPNwexdRfYxHQ7gG8TT1HfQjXjkpR",
  "key15": "5xVt526uQKRYMCJgJgsGg1YcPHGJX7xpAscycPvHtJ5i4gzv4jaXdBQHf4XJX6C4iAAh33fSQ9bE9cvWTZnxrTbk",
  "key16": "4gdRQntSyRKYC95d17aL8tLjeMFxGGKAvSUg4V8zn7yiN1PNkHMJazFpLQGTFjzFZSWgugSF23nVdDcwnJvEYDnN",
  "key17": "57MuoG6EswQBALU5oqcrEtEFUNVfLRZcGaXFoWLfwaVCRBVL8pJvJMD8nRPwyFMBrftZzTMWou13MuJ1M9jvanSd",
  "key18": "F39zdYK7m7jPRy1Z1nRHNm6TvKEqmBBsu9gzxnqkgLit9z4RB3CHgM5YxbYH8FiAb2CGep2k3EgXkZsbCinsJBZ",
  "key19": "2rFqwR8YHTFhGDzyDrFNu72o3Sdk2JEP4AzzKKSSwRVR5JqPsy5e9Ffjy4JzGgyT8SGKf5XSrh6nZF5BR9Sa9yB1",
  "key20": "3Ry3Res8rsZh1TDVSuZfbmV7CT8VafEGCva8LMKdSBysAuBTivUrKk4jowRREnyLrwqoX3wbTLUvnByd2njEzXf4",
  "key21": "7v6sgXQ1bgxzWRkUuiWV5PEXqdcgrWrwEDNx4xvtcVjxaSveZS8P39kmsFbGV8Y6xGMGBZCynSAwdLYWc4nmEKK",
  "key22": "59yJYcyetakurw4Tx7ioM9Ka5NgvbjrpUNJUjp2g8ieJhT6GoLMng3R6ZjkhsnbPnjxakNmeLa2YigAs7KmU3DNA",
  "key23": "5ZwBMmy16SWR4Lpuh1VJN6Qx4DdwpdbWM2ETtDugSucLTbvBa9EknUuw1BMuYRrGMBSjf5y67eHZ4bAF426gwynJ",
  "key24": "54pP5Egg5SJbZUsmPs78LNZyW5z63uKKfsK4ZRCN8MaPKPEU2ZBpoNrW7BZWnKXV5Xf5wNrxiEF9LQXQ5N7sLe8c",
  "key25": "wuyvtTXuG78Rf9yvzCnWra1Kzw7SfqBBhkuFquqYZBHm9pxQdiJuTimWg4mbhedzxUtsQwuWqsirjuveyzaGhZ9",
  "key26": "5aDTLrBZ6xw9VBQDP4kKQ2eqwJFHmxuEP756Kixy7Uar2n4jPBYXg3M26mELrZ2nvo3uD6kiVXuEB3Ch52FwmfQA",
  "key27": "36L34m7idryfreHGTUGHSSD2QQKH84XoBT5R9UTh6xwQSUPrGADnH9vhezAxBn4HEiepJ2uYoda73FT1f1ZiSvCX",
  "key28": "28MoPf5bQp4cftteR9vV1haauWE9QAUGc71Y4gDJBUwsvJhpMzhon7iJ1dj3evMPjysKzrCWC96gaK4zRq6SdZbG",
  "key29": "67rL2Z8oEehaSnFXF2z2q6xH1kgs5BNPWZrcTdkGU63TaMjyXjukHs9WM7xhj3A9sk3sC397zohsBD57pXVBKhH6",
  "key30": "3xZQJYmA4m8DdxLmrou3jtKSt7LxVGgpUv36HSuV1uGNEzrYRDfcF4ur7DiNaS14CXtfdemkFbmjLjLJP5M8kEbG",
  "key31": "4YXSLDwZQdyRnUuTVMzQ4TSCcc56Y15C4o9UcqMTRoYxccZgNiT2NG7rfouYdBxKMamHybjWzxqUzxTa59aEPHxZ",
  "key32": "roBsppZdJ3ZPVY6HSox9fceQpbdfuqV1iovRANSXZA63hWBwf8dEnZvuzEWGSPTjT6mbBPG7ZtPJSUuBKNfNhjV",
  "key33": "5D4pA4BX7wqNFQFsYm85SPucfv1xdh68n6tVw4JTeEWEkNToRpi94Ky5hRYxDt4i8HUDiR3hRDRLBgfdSA2NmEp7",
  "key34": "3AG4kNR13bcRJuB2B9KHQr8ysJefpmEVYUYnnqGsyUxcwvMt6W11WE21seEbguq7jqGnUTPNx9JPYomJmMFv2Bwi",
  "key35": "gNuKNG6U7hspXs4xsjbsFYNq544FRXNhWMrBo1uFpA1Ao9vKyRKvfT7PmK6etxxuL9egJXtuXqw2EDFQoaARPdh",
  "key36": "TZ4ekZsqsKkhntuyzDdnafS4vdQhPU8Q24Y2chNenpUipgZetdydzfeK4vmBNosbsLUUzHnbzKvMRa49AvUZXED",
  "key37": "5BsFVYYbtSh1G7yvsgmJPPrdVYCdBkTWgj5MTCr5ChqaKFAJhYTddjJfAan2grkGEP1AV65WMCmbHfuNNosnyNYV",
  "key38": "4MAPiLmfKBkCDAzpKdZGabYuEDkps3wdznApxfjDTxJ5h53MAiA3EbSJu1qdjBXaywTzBeTd7sKELoVPcQeEzRUz"
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
