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
    "bBgT9cA5tHX6L6m2Ekb5zTAyc7N2g3X9mZsXKUVJ5W9Q3YACneSQokUJJmxR7HbGj1yA4KkPyPn6ZmQbXNmLV8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58KQEEo64dn1nvfhrR4rk2pA8PaJcYW2b5BvCx5zMq4m5857Wt4jBHAQm2JEWyr5gfgQGwiAzccnFCBeWn6ocw3x",
  "key1": "3qkq4FrU6Z2RzMjXzZJYNfxY3cdM7mg1kNZer6MWUhzTkfKPJcWTyZKvPC7GrfN3VWeu3QXVdas5UtsLZUBocNVi",
  "key2": "5NSU8sHVsgqwua6fsfFEAARumpQMaRYWmDMz5qW4V4yC7LT5dkrPecWG71o8fcXs7zURRDG1WgcwCP3r1tPkZeR9",
  "key3": "2fT2hzkJWsDpLsDWVTbWVD9xhtCHKncAjb6oaXu3dUpry7iBj9nuMndRgWzhx9SFbX6CY1x7Rbm1ytRuTtZUTD5K",
  "key4": "3NcChZmtdTMUkGh8zhHsrUvjtHwupck7PiT7hw8gxSae8Vs2nEcCSnxLahzqcBmvJN2ndPP5vpQBsTAXiBc6HDJC",
  "key5": "2xMxGm223NC1KsWAEWaPYNuwwSV7DjnxJNS3HC5JbXy6eHdMCPhePZR8F3G8US1SdAzw4ZFkv79JEDJS5maP4LQy",
  "key6": "52Ww9ukLHNg475Brsihie6tvoJZ6GQqwahQ244x9YYBnG5k9JUdLdVsYAKtrQifGnHZjpWkV9xMwQ3vNMYt7Hqep",
  "key7": "3dFsyuYZpGaff4YaEqAD3X84X925SZ4zwSdnK8VEsKGgPwAs67urVyadsjp2TeiHCUU33gLLSSUnatr18cpS8Bbt",
  "key8": "2wv886imjdNFgC9nDip3HAYDmhCscfXC1isRaVrU21Qd5CPX1Pz9x3dcgR6FoFuwfvRRer9G4seB5Yv3inBhQeem",
  "key9": "4YAU4Mb1zYxVnBweVwFAuydZeh6vC6A6kwCMctSS95dUDf1bLoydU1M1K2DvNkDjFgVYyYcMMyMGsnRrSBTWq74g",
  "key10": "3HWyo1GASg6xN18qKK5KZLZVuSSqeF7hfpA7yzauPW2wbEUCE7ryvQXoFEB2DcwYwLSkwFRx2a3UmFLMLqGUiJGV",
  "key11": "2mXhPUhGB6ybgpnpCQxQBcwg5CefpV9F2qicQLEkdeMPQp8B7H12ok5fxaqNJSe7oUGspTS4XDe6Jrzf1aUpAPBJ",
  "key12": "5KQjiFaWUA5jWjcdv8sWSzLa1y4vAc3PJ5F1jmBDz4invJ5shqFL9BsN3PxptCpvr7iZvUxcAaEd2r8yXT78wnN1",
  "key13": "5WJNvdqr5wx5UA3f3qp3NZnu5dzDWBRXmfXj44RbyZoFkjEeEaytMXCgzk2BQgsudfDFCB7sgHvDoVjjjBRR4gbF",
  "key14": "5KKSvktXxGMKHRxVqxgxDC52mWsDfMjjyUfGNWr1TiJyNXXFFn7ADLbi86frsP7DfJ2XjLenEgpVDo2FpK9WTH77",
  "key15": "jReoW1JQqMbDfmvoZE6H2r7SwL7YVLCK99AEX717rHeJeQmLD22cFS1Tn9n5FsaAVHUAomggqeZ7fLveHfkkRrV",
  "key16": "4xo7mpNDD8RdVLLQVsxxQ7hYHGyJGFEYZbE4LsVVxjzUhadmQcrNjYhXibosA5JA4TgZ6KFWys1ucYGZsVEZ9Vvq",
  "key17": "5wY5HTFPMPdoUQWto4Un7qV8N2TkRUtvDN15GLkEi4yLi4SY5MqQ7q7urdqvvEgxajFMkQYr9LxDn7omkz91q6Vj",
  "key18": "2w6HTQUh4AiikRNA5pzfb7LSAdBM8rZiiihrHziudeqfyzaVFfFghrwoMEvvyegMZvPs8Bxe5YAcx3gwESPqzP31",
  "key19": "4wge6ryn55HDKRqBjnMKfrJk82HrZMSyVt3tk3wdN4JuWi9VpyqQzq8K6nFWYh8ioXxNVK811xG3GVZnuwi8rb4X",
  "key20": "4kCJJMv5UVVQ5vR1U3mw6GdtaaiNRKgQzitVkAuQwSQX7BqkHN6vCDMFNnQSESZrgawZTifaNRybDAHRDvh7W5Ky",
  "key21": "5zgnw3nPSyiCLNiFgerApSjQnLSFhoX3tmJ7FXVTSNbYeqGAWwmCtxxSUULMfjw5zKwoE5TpMfhUYo581VwL7eVi",
  "key22": "4DeU7n5gGCjH1bezLW7Fw8CLEEPW3DCn1W6HEfexMJe8tH3FzXK6j3zYtiCVtpVNEbhKArscUfRL7647bUL1bCnp",
  "key23": "5w3zpdeYTDLDDpRkkQU3m8JGk8skaAoa2GrAyj5457z4ijUE6yZeT7FiPkBvy6LRcZHKmP5hkkbRwp7dhyJbUdk9",
  "key24": "49EKm76NgBbxjXz4eTeG2FtYmo137PVTy2gJP2KF1XgaN72Y42HetNbDgeg7rHJ2AVrXnFhrwnCr5u9qGy5AgzhS",
  "key25": "4VfKddFvuV54T7hDsXPMwkvWXQrTJSALKsgwX6TQtjTnvkCvaUyTXS8MZ2GcXQjpKzNhtT5fHxX4wBz87gF9BiDS",
  "key26": "4CjsM4wxrKGeMaRoT5hx8dk5z4Vq68mebBuG5BCK2VjRT6WuxMApYqKSYDeu7rLkmdVds7P487fov84rek2AQA79",
  "key27": "XDfeUMruaUKE7nb8m6ZzNeGpCHeEdeG8WsWWgQfwjzDkWvNTYQX8RGMik7mf2C1bFgsAksmaZLWyhBtaoGv6Uby",
  "key28": "5SSJaK1fPWuxRs9Fo1DDjWnjGAnycz9bkMPqi5AKPyPbWNfb8Lfi3EsbJBvgSZGoexjK9inpchjZP4cMJBugEtu1",
  "key29": "2rcN7k4xWf9jif7W3vv9GpXYCxnjTZDm72qufy8KGCFumgckH2f7joaWBQk8ShbbYuNBUFF4eyX7ebxQ9E8EBM5t",
  "key30": "5TZnYGjfotV8e6N5TbbSD9ZJgkmq4dmpk6g9gJ81cr49SYmp8PMsPzm7bXUGvAU8AqxaHAxFcVPxZcvzhjekPmwZ",
  "key31": "4rjH9Gw1dwTdSH1Jfyw4ATggGNboJ96d6o7wxzHxWzRRpLfHdUYtmViTVSNESM5XgbTBjczZRfHgda2Dd1UH1MDk",
  "key32": "qkzyoxTNGtD4YZW3jDys1y3PNrvaMKx5oQ3jGzgsshbvEQzeyez3sW6wyxtTq75RjbgQfKSYTVuJFcyq87FenCv",
  "key33": "4osRMoS3ZxSvHwdXPtfkSfKVe2jsk3guLRkn3rqUMj7q74Nz4iyZVS5hfe5tzhN6juCn9FuP826bHFe7SUioSXjM"
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
