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
    "jJqjfQxQJpCRzvHGdBFbvnwZdTy2WxSXCkZwfWbDyHu6Rr7TrB9fpPjHg8g4fj48v8YmrtjSTPhFbAHiZEGkt3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59pzVGXS2V5S1zw3d1dfLXg7ooxCCQTwwBekMqZUAxzfDTcKgjBbL2u7rpvTMhNRAGEYj3xkJMZeYTxjboMmutYs",
  "key1": "4uxjs83x5U7cHh3YyHffLWrDC2s4abHw7Jjt4kAHd9yt7jdVUT4DZvEy9rUpZYR6db7rRtRhLsWeh144yFkFuWhf",
  "key2": "3gjhKeVwh4EqiEzqNVjnHKdsacTSz9J2XaMeWMoyUkAz7Ht39PfLtqdQwjvkaRQgYe6NQWMRVXRdjZV1ftBDjD6J",
  "key3": "dJTZqtauR5aFKSPKwBVn374Z7zNyL7UGof6qPtnDX6ieUrcHwm4a8fX75DisdGeFDpL6bfYpTxkMxd2wQNdWmtm",
  "key4": "2Kzy1qLKtqpvEAQw5rfKSYVUJDw59cQrwfj9NANJoX8rJgos32Nsrsdc9UHFoZ2FaKtWqDuneFWxXqjeZvBGzPVK",
  "key5": "RtgsnZJek2D9JZP9KFLpkFofNh1yUJ4KKT3hdcsbdJfSb8VZdCdk2MKSCyYLjZENQnAbjv7jfm93zMbQi5AxAnC",
  "key6": "264UUbWnKYh2z8QdysK7jcx9ubVohc1A6WXJ8SsQuLQBQzhXn9LfpM7UQQNCDQUD9L8DW9vpaw2LRx2ZTCKNTvgC",
  "key7": "k52st46AA21voJ5FBMPhMSpeLWaDXiejE2vtPAsJ65hY8Q7XwJ5wF5z6isktzNhHMoDkwRiTMWVjzLTeYr2PzSN",
  "key8": "tVupUPGpgJpGmKpG4R4M9xg6xAF5yMgoUGXnFp8c8wrXYEJ39og3EfPKAcGwJe6n4cxSsx267jBiG6kQoHzRnyg",
  "key9": "fmjjHSJY6bNkYv7TyRZ3NE9vqgXBmx1N4Jav6bKANG6FUwDq8uTzHsjyCVogMLBcJsdsANhf6krD7CApkLDQfJn",
  "key10": "2c2W3VcRJuCd5zLfGLiNKAQJ66aaD2VHSZBCmweFwD7iWqQdwP3nx8zeiANewfHCrJXS3Qy4xtMJ2ZtDW24nCM9d",
  "key11": "4nkx88xBh1zsSSMi9bek3HCbxtCuD1PzbWpqYy8qydPCKRZj2rvWtV2gEkNJE2AWcvVoaeU6N5YBozKPbvw5jgbJ",
  "key12": "4VqvUPsqziwnCHNEW7a5ep6WK661FpaZx2M3LQxvZEnSGAswBKxvMp1sKZ3taF9Ti1STqdsdk1DZFNiFhibaUCb2",
  "key13": "5z2brwm877cyo3BBChc1sggTn6HpWeinu2Dm2bmMkNu9B4EFi1Vj6AxjvK3WL8d5ikx7dYDMGa1MHm2MfDvnD3Uo",
  "key14": "5Z6isiFULcnTpirMDSR2U2XutuiwTaK5fDq17UgoZSjqCku3cnpVuE1dKYy53v9xRBTk86pVHMUvetafHhGFZN3U",
  "key15": "262idXdhV93TFgxT7H9d7wudpAf3MMNc9BE5cPSZcqj9wPL8HscUP4sddF8Y2j8gY9sN8Zpi6hbFpmAW4UzUMwWa",
  "key16": "2oFD9nbAtSYz7tKpRwgyKgun6k7CNa8FnN7theVWkACKFVJPh175KdMZ98YNiiBcwNpAAA2MHu1vV1faqWBhnKp7",
  "key17": "2tmWVM9sT9SjR3TqY2y1xfUL6Nk1Xyc7RtxEmmjaTGW8cnsYGHpwGZAgSYGMecMbMvejYSvdFzYMS1jFipCuksCu",
  "key18": "4YoQvX5HDJps8opsnqBmHniNZT8T2iHChRZGxyv2m3V8QaohWjEQ7UfiPmYH5sjEhBnf4DfTE11zSh6TZWGpgkkZ",
  "key19": "4kHSnsgpNkgKFqAHuWDVRAhmimmk61DvuFhVeLDzHMrf5xqt3WkFyAofZRGCAedMF4mokE7nmRng26G5WvAwgCJS",
  "key20": "WQp1YHGUestGp5ZFFSNdTHUpJMPqmZVVGGR59BKTeHZGvMFAimrHMiTuWcpNahdXKSnFF6w8a2yLSFpeKYAphDz",
  "key21": "2fsJ94QZHPHWBXHdvULAXHTUdaMydUP2md31oZw5jzZC5so2VtJD7w33jGVALN4oMDuCuCyAShWxA3wYS5qBkvQT",
  "key22": "5fNd4WEf9B5j6KojNcN3uUfAWRKrUbZsNe9QH3dWQqS4b2niB1wr9gfNDwTNXdJ6rJ3bwFZLZ4qzHwnsiXWUTvU7",
  "key23": "5wYDLAL3c1U8dbBJ9WbBS5oysZVzW1VAWLTjVrKJAqteYybY7EwmMENzCZGKbWmAWQEhrJNhZJgqPFZf89P9fYxF",
  "key24": "2tq6bD44SoCHXeBJez26wtgVC4NgskvQxifnbeMoEdj9MgL8sYsVtBUtsxhKUzUzMpNZ6UHA5zZX4e8fPeXERhgH"
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
