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
    "4N9RmmR95smho7MvCnj3dVDqFSRUYTLhswS7Qvqh7BvTYzQBwC44SCLYcStUD2TumQVfZAwE1NZCsKmSDFUV8C4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yN3KtyA1jAwq2Eb53xLpYz16rpoR1qubjY6MLCX4M9zu3i5LDuQsGnvqiNDo5o8aa9HzLFasfi7VKrGEGHuU9wT",
  "key1": "ie9qiiQzAWnpmkfhAQBtDmnWpKAAwFPkLngWGcTgK65AbB6gjqZSfb2DkgB81TCark5P3j49tC2wAf4PcHrdgRx",
  "key2": "ygkAYqDHaHjfp569UX5uXzmhFXfULXwWgZ6khT4BWpDqWz9Aa94MUtHuQupoUiLjpjtgyuhG2ShfjHtwZoFR3dz",
  "key3": "2vnGJVZLgtp7XfDrbML7LWFZVpQc97PQKw8hB9KngMDArPmmezRixNMz1osee4LX64ydzpnc6X2R1eo9NCjJGT7Z",
  "key4": "4KVpF2fiXrKmXG3K9q9mQwkrs2KzD6qETt6wQeDBSQn82vymnYBCqEjwbgReoc1y7dc4fSc1RB7gmeKPBqx23eGD",
  "key5": "ier7tZcCmTqocmvp1HjCgteNk9nmEM3H6Gn38EQeLC864JCLarcxGUi4squcKqEfsUxcjjcxNyRkV2PHX5c8EP8",
  "key6": "2cmuscyiJZFMSEitojNanuvwW7MLQYFkLqRPHfD9NaB9ENWnANfi7YZLBqsc9r2QKrcd6sPBbZVvHpqUzQQ6dTDr",
  "key7": "2RejUj11cfNps573Tdi8jZSJszFaqwAQ72SyNgUJx2uRUhXgUumD83khuGz7cqY4j9N41dMnwgYLYwJNrPM7XHSz",
  "key8": "3FRghx6LJohUQqQMiAa7tZWdJsdbVSUpesW3SAM3hp92e2ujaCFVny19ntZj2Di2AJhPGLgCgAie4JiqAJ1MadSy",
  "key9": "Nre8Vz4aUgc3zaLXHELhFGbKa4YHCFJgwwabPNGrU3XN4SEYgbcHdrzmoC1pwfWD32w1cNj7YyeRDZ7Hat9dYRn",
  "key10": "2wrPjgXL5aS1J4jXabMTUKddhT9jyYPRoKRhgHDqNEUTJZT6Ehkpc626ZLhhgaAwcAeu6zdnC9foyrkmiD5x8vRr",
  "key11": "2qJKHvh1UeNjwUeV3rHhMeMCyWQ4rb5ATqjCYu4ESvNv3JX1B5LLmJUTTQcwpcVc1H1YWv8s6V1ZUifGTmfZNPnS",
  "key12": "5KsuHPxuQsgSTp3gb8X29CYsrDw6xYG5qi7n5SyCdeCDZNoRGXXBPCcnymtc8nm5H5RUR9ArgWTZJ99jMWiYQX9E",
  "key13": "3t9MxuexNxhiJ3dkDaQHqCWuiDWzSkAcBfYch7NKKERYjcPdu89LvE6x6mcxi1jrULkEcovTC7EeF4FHNssdAH1b",
  "key14": "3yHz2WVrNg4TaYu8CvURgZcqhg7cT7i4bkTRVtwxCn6TXBRs3mS2mvrcWGx7ao3PNyKAFV8rS2v5B9EwKD2cXR3a",
  "key15": "5NpiyMH7R7scXNkszZfeTKE91B12pacZhzkqLTPYw6bTQHkfjEZPWdXwZ9ho5mRLNj3zvBAEdh1sbryutQcaCDJ9",
  "key16": "3w8EvG6Dh455HfhkWkF7AEQjfS2Z9rYUqtVFg67uEBLkXVw5BquMtTZWoaQkSsCSywmsDEUtP3zLdxBpErtLXEH6",
  "key17": "5vq7KMm9RyUmBmeS9nztcHMUwf7B3TcovgJZLJPbjAJDLY571YFzbL9BNuMqUiHXr8Nze9szD1TcHqBiDuGhdXF6",
  "key18": "7NUchTVEFEbb8t64YtKL4dMSjW8LGw3KSxWDBE8HaQw4o1V4Fv3UZDSWtCSP1WJA8LTrDvZLK5AAxxn1Ad4h2Rd",
  "key19": "2TbV2Q6m9Nk9joaDg4Ct5PaL287D1gwtZXprc8KfD5VubmCk4Z23thHsU3FZb6zEuEuQz8adQwK73u9sW95cycRF",
  "key20": "568knKTQ2SYHLAdN3hQkT5oMpgR711ZXUz6f8zaitfZRGqrTxknQiXsB4C4qHVK1uyqoAGT7bquSBEgvSoQgh5kG",
  "key21": "44CHjonhBw8rBRXigy28Tesyh9ShzhMuG5QQgMVA22X5G9zN7ta6HdJWFu5cCm7wRQSkGJJ8QVyorfcAsKxmDSGK",
  "key22": "48tgHBocp7FQsDWdNEB2p7QbqdwGKqarjMASig2wppBbKVzNPgZYnLTR3RwqrA5q98WwYpfd7QonMequYBMtGH56",
  "key23": "3W1JwqrwVuoZDLfH3r7toQn87SYfhAdL4GmcSeN9gJt4yRsEWRPEsS2LkEYe3L8pN66taMxKSvS8UpDj77x8cPtK",
  "key24": "axATULi9Va3cmZUFjCR3HJxXN2VkzLNNrMXi9dhzyhnYvWnGfT9gLxrHxgFVChqJs9MBQ9Dk31QNbHg3R28xDzh"
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
