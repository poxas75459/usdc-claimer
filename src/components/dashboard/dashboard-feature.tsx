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
    "2arvj6qPmDwXmtNMFfHaNX5x2g8bw7ttCu3XiLvjagW4Q5h59pVWr9T7dBvf96tBgfoqsRLSAXSaowst8cSSmarg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vg67ukatjozKeHtpG43YqCkZQa1MndPCveEqrGa55nVHw6qSe7EMJVWNjiWi1C7aPbMVcBakpGd5qByRgFVQri4",
  "key1": "47g1ztngsgHVtFUZSnPmHoHYeDBkFLXXG8aXCE1vv3UVKQ7VdCVY89k6TVkgHud7bjQpkuZwEYDPi8N6rjUdgTNo",
  "key2": "3vN3dXwJRQHw5e41F8t7xEVf6jWNthbf8eZnsuzLWueuHQmiXmBoCjJbXuxRpvvSEAsuuXvyXKJns6srnhY9x7NM",
  "key3": "PbAwAyFu6j9uavPiUjH8jUwBLgLQ7oZJP1r39JPfu2raae82Kp3D8yDRAiKvLcfuf373aT3S1vmLXcYuawZeP2F",
  "key4": "4hbBoWrJCuqGwJtntfJn4qvTr9spRLmBB1D71s1mBgwt3sM3sM8WUWWimfhRuH4mok5irRF4JozgL63Gf1goiPBv",
  "key5": "4iNT6znMa2PfQtyvf26frsicSkpZUNg59PjvbFJpEzEUD3Ba7wK2bFszX5FrE3xdcrqiyQsoso3eB1DpxQSnyfR8",
  "key6": "4NqPo7ZZVAsnyQn9P3ZbPQiMiJynLxxPnWEtR8ngQcyEMPNvwPbPpsmekiz88tcFGw3RPNLNRiU5XPSdJRjVYCEA",
  "key7": "4ADNyLsSRxteykeRsJGgJczE4fRapBbeeVg3eHxkn93j9LP6Ln8RoVjPBxZ4YXPwymHh692V6ob4jE7V94JhoEn3",
  "key8": "5L96i2yM31C69JFioRFdLsgakprGrLpSwPwFVDknsS9KmbTJdF5ovHfUbg63BfdWT96Co2f6P4zymViB2BGa5Djt",
  "key9": "5ujEP4NJK3b5AnBSTy9jj12rmGocwyK57Jy9Jg4EQzUb6gGpJUJCJhcKbrmLBYfq7vEqWoiiGqgFQnsmZASuASL5",
  "key10": "3WhsRKtFo9S4xqpTFm7JxF2BxkFXKGKeX4xeqAnfBcyCYXB5WRUqL5ZFrFVA54C8BHbNCrbZTvm4NTjEodWzxdaD",
  "key11": "5aZvvGyymrmhK5W6LhYTeoEc823FPX8NHDUF7k77CwgkHSAnhzaj43ohh9jyq3GziDAoq3YtRw1GQzBpJ5zakUaV",
  "key12": "qMuTsgdtsneSGYgwAeHwaSrKkShcXgwrR27i2mS5VxiNyr8qGz95k1NYSLnKvyt18c5AGc2fKQUk9QgguEC8PsB",
  "key13": "3Tm48wEu5sNFUKV9BTm8o96Mz2yX1XPb14dSsfyLNRG1BhM5p74NnoSiWUCZWoBu1BBAFwKoZ7SYzdfVEyTJJwET",
  "key14": "5sFHdZpXDLD2GXQJtM3sdX35nVk5k7rivbgqLhkj5j5AD4tRgKZtLvatezk6NPuPMzQEeke7rqDzQ3NX4S8mojh9",
  "key15": "4L94HUQigmEmBVURoFQ5ZG8Y8ZqQwDJXoVWUTvKFtx8uqZoTZLTeSt3LcHAwkWDjWcSDqbc8LkZVUAzspzH4GvWs",
  "key16": "4cdwdEhhzm1tZtrezEbmeuzxLiNAZMbguaMhRFZpJsKPJ3bdJDnAqXrJ3snbKg41ncrAouPXUoX7DYLoZQHGPbtc",
  "key17": "2fngTUfcCZwgy66mXn82bBjj46iNk3dwKXvSHHH9GFaX292uhYR2oH8UcKVp4U7JNBLgi9VKTrn1v8gSjG9eJc9i",
  "key18": "2rEoi9dtfVgVeqgy4dyQNY3htPugdG3zNDDyuPWCUifeFg3UfqiJMW14qMJGGxRzKApguvEGSc2uN7YCmpxRGS5C",
  "key19": "2ZPuSPYFW9tnQk7AmNQfz1BLrffEjPULHQx9oXaNpDhr2zLNyZf3bgaufDVYyC5BKYGigCLqQsgd7Z6NAgxZC1qz",
  "key20": "38x1wdS4vVhvBmVEAnVA35GVY4HxKU5KmazFGrX7w6r8mTtkDtBX63bCsnQUETo5u7ziuXjYP2Aw1tzhVbzDDu7D",
  "key21": "3KtXzVgAt5TTowoEba24LecvHn9ncc3BD4yKh7ioEKPExq7k4WUaSqoRJgB4P96YrzreCQrqEYUNmkpQm2PkGFQh",
  "key22": "4kiesXVihDdnsHsWELrThBcnZ3JaXieFpgzZ34bWVrkvVoNM3d9MMYj9tMgf2rakXhKPtzK87uwK2P3MJR96zRwE",
  "key23": "yBmjgFfB39bUy1gHhPYBB276MUBJGGRxj6sVfCFrtWK7JbdugxCtMaeQW2PQ46RrMiiLucFmYwF7HFVMHrH73jr",
  "key24": "3qdbNZ7Gzk91juE6uXSMF2nPt79XbwEpj7RuuzBdAzX9jYBZ5juSW3X4Y3XGrP2tW43ixLV23VFyJbySqf4pfVUw",
  "key25": "57zeYz1mQCfjZHjBAJFY1X57yxKtksa5QYWWMtaQDnTZURAPgE416iH29ABrHZcEiouqaYivxwdbJ8pL5HrDqEfP",
  "key26": "2FmMfr6y2W2893i1VtC56LVZrXbPRRNheAsS8Xht5FiSgtciCVuDcbaEJi6EdZ56EnehBjqBVhRovjzsNzL9cMzS",
  "key27": "4GwGvYcg8kt46cpH5horZf2ozgrD2z6jYM9TRV5Q463tXeyZNxyWS5mQ8RfFpM3SJXJsbA6ya64aMfxW5Yj2JZdT",
  "key28": "3sh5XtcbSNRYf3AXXN8mcR94i5Sfg22jDp9EbvyzW4CbE6yetRzJTuzgS12icF2eBwzNCW736YkNMbz5Ww5wxRjT",
  "key29": "Kn6HBisPeirdwRMqCMdX16uYq3KnZDEr6PtTwGPRNDkv1K6iUZaroiPxzqTTEAmgqUYuuCH9zTXfSAPwosFUVfW",
  "key30": "376qz7Jfq8sMvHWkVhLuESiZksZj55TS1L8Ao5zgn3jFfsQs6x3ucqDmehHXG334FYSBzYbrYHUJtiUnsEYE24CL",
  "key31": "3t7P1PqG4gaMwSr3JnMjgiSJZNEmkXCtgtaGYYNAYcGm3H6yA2oKtEwuCwD23JdqtRBz3ZRxUYBJNkVW4NUVKfbS"
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
