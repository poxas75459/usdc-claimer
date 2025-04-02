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
    "4FjPFooyXAX9JLumMCehaqgg9x1SuqsGqaLWuFmTRHkYEz9qgiYeM11S6GTUFEwjbCJEYD5VjJvj9R5HMDkVTeNS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41ADbQ3V5pY3GV45dYJLMjdt768D32CBfYNiX1jzSoT4jWkGCgxxf2uKJJ7EGQNfaZXqEHdqricGPnqDzowgsyH7",
  "key1": "3EfdThdrCWmypuqM3AJC8rMVgLqukLKvJdFEzehPR652ww48BZMRWPGHDkszpWoYmWXntHmhwccvVhTYsByooumf",
  "key2": "3ACz8EHBEW7ALbJrnVQt5TA31eWdnXXAWKJ1VrNeEcYnxMud1NNgCikHLaC4H6qfWyNTE2kipJSUt8imrxvScfEu",
  "key3": "2zZWW8siGvZ6Xt5cYy8Fd32Bs3zAa487HFr9t8pa6AefSc55pC9ZP6mAzDgXc8BBzxWtWWMJJPUYhx1dUMyfGTuy",
  "key4": "7ur9H6yGtN2jRF4LpxtDoH89ftrJFqdFfCTQwtNKNNr28W9yNbDe6TDHjeKe8kP6xXpMwRsnGp93FxzJGj7THs5",
  "key5": "jN6h4JimjQqBiemqoGTxfdFnFd2YHhcWfg2d6tUzs5N6y8TYsAjpGzQRwXCgLftrNgF8NGMZL7a6might59zgf9",
  "key6": "59jmfQ7SxUbYFBPVMkV3y9dT56GYCsePWL2PjdBt6dg4GVnXUyxDTg84jSYh5B9dchLq13Ekqc8Egd8RZRWER4LE",
  "key7": "4iSXXuL56LDDq9V9mSMZmhZWFjGMNAFDDcsGtmGeCkoKPS6oderPtTX6psuXhd6uAGcdBEAEUo1R7DJtLVWVvtN5",
  "key8": "4KWqhsFCncAe25HR41NHcUqHDbLWh67qXwRR6tctMCytkEsE3ZLq8e1QAstxsiNcpvPES6gBUUcNYJ51nPfngW9t",
  "key9": "3NhbAonAxP4r2U3NfmiGCVCanbqeD92KP58iQ44s3F3ettpat7MdBxDABR2PHAzHdfB8qEmSR7Kr9W2hRFmGYouu",
  "key10": "3CrGqnNKoqtVS3sVrqQdKtLtDe9Qft41Ky39uXkwtByrGSARhdR9XfmRj3L6ifD2hxKomeifdj1n4bdZWsLZuoqA",
  "key11": "61DtGTmiD9dHeMMY6iRMyH3AsA9SwayQJFJZACCFv9qWHqzYGze7Z8sZoEn1TWFtUSrdfLuek2sKzG6Ai7LfJXso",
  "key12": "2qevCXYMKpU6vfhJfm9SbZeS2S7M4DsyFrRmdF2EspGk3yogmJxHdK2ZhZ4AExkuJDBwrodVC61awgiNNh9nvMHi",
  "key13": "2SdLdFDvRVYtiosyiVPnPC25dFAL5Lqk8wD3UhHmf4K33CGZ3pjxEgRQrVuFdjqJPJNkFVzZ5ZBvjhXvjg8wWiMV",
  "key14": "2aj2ri1u5BCSuV6zJRDiSTKs1sM2ARUWTaRXx35NmTi28NEMSfT8m2GGdfm1TEgFaNvpWH6DJ68tVrG3j14rQe37",
  "key15": "65jkXm6QHLuTaE8Suk6x3fvkpwN8THiQTGJof7RqoHvuk2CZxUBGs62JCEJaCiPU3YUypYn7dhjs1UVsR5iz5s5i",
  "key16": "5XvQUVyxE8i64n8pVFsi3tkuzjjvKpXfyac6NPG6bvfqUsNGsYF6JHUnQw7AYiVfPN9XYsbtERhNHdxtgykp3skK",
  "key17": "27nBUjZVvWRqTBPQHC3PgPjm8Tfba9bvBJaxdAPg5R1NP2CfoBbLfFooC3yTYrNXVybWPfzRzGgNvkKdhu4dKY9L",
  "key18": "3YLMgxytXwRwTNdaUgGToP71KwSLNrj69jRPz4uzFz2NdiZ68E8FAnN5TdbPTP7acLVYqtFvZXcrnKsF2A5EiB4J",
  "key19": "4avjrn6mCzWpatrqx84Shu1bAXAD3HoNoQ3ww2PG2g6fyX4gs9Qihem2ZMRJ2VJtH3QcjEuBdcwuxQXJpxFe1vaV",
  "key20": "2TFNE48r3U7v3p2tFXLVN1CfBUGpB9kZ62spNseLK7btr5nzPv4rhVMZ3XzsvDobXeGau1sCrg2BQFobaQgq6X9f",
  "key21": "3gV5QMctzxnNR4T6L3pSiUyxPTBxdky2yaqdywtXqgQHKSjxvw7rGbdcZXHMSMg96DWPJVdUnvcBrkp6jCvqMtxp",
  "key22": "24QnKxkodU5pAAsAiyghkJVT9mSYtPfqta1cFkKgSAkPFzyNFCJEufj65tdcmVE6Qvu7p29MUY9p6rvw6aD7SXQZ",
  "key23": "3ZMejDs4xV5B2PBgiHnwYWyLx7FwSaCbKH2NeV7pa5mNCHaJFyfuz7phADg3Jpnv2atfLfxrdQDArrPEKh9QbDmi",
  "key24": "5P384x4JGHGG8ENen5sG7mSTvSuZiXjTkmVn2yHe5JXHRS27Rd6g5wxanBxxZRXKtMXmpNwEzwjg9HDv6XpWcWZ1",
  "key25": "e9p3mg1mF2EHPEk6oLVXKxma9HAirJNVa5Tj76BTDxV6Uwu5CDdBttjQrxpzrw6ArqZzU5jc3hvvosZ6xYD71cF",
  "key26": "26NhJWywbMoNCaTnRr7RgBBcUFZjghHHwafJjTk8EBUeu7xhnCNPvDRtrXo4AypS5SXWZ884kFofegpR3HvpC8cb",
  "key27": "3p67rCqQG5E1tBb5gT8yYnoiDorkA4kFzujAQdLHdQXbMCmdPi939ReVFzNwgRjXURvSstH3hnuzd4aJSZZ12KdP",
  "key28": "5q8xXucLRKEYc1wTd6EUBq831BPo6pjYS7n4REZKwSgVBVrsNFcNGz5E67tn2BZiLjkUh7UncvZ8AhqV1v7cdzA8"
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
