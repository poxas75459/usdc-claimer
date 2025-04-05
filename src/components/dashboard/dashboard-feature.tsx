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
    "4FyRRbW115gyfY4PDWxEDUYjagKE5hcjMEcNTnYUKWJQKZmi39RAX9jBcwpTwYbtRpLrfo5GsQLtYKk3pNy24hEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GWfDYFvLT86A2jzza9AvMim7Q1B6myDbydQboncm88UWkHyYejdiXLsp1kqNnxdwqMXLTuojmPea2VTehNTWfaZ",
  "key1": "5YqLhwx8aVcJRZXjZhKW2VpiEuSR9csLHLhpM6ybuD4nWRm67TLfHd9NNy1qcuQVthur7auDzkBv1CCSWfDKjj9R",
  "key2": "3bCAxPB386QwmYQqgyVboo1rzymewWiXrgnqY4bH4QuWkBDN6cupEHj5v6UgWMQeN69TaNDT3cabB4tB1m2gxVxk",
  "key3": "4P2L9AxujjmEhhqphfxFy4RxHq2iKVu12pkMUCa23oSYN2dNPrUFoLhx7wyknBcWHpzvsy8trrRzyCExVEg9bBM8",
  "key4": "5ErdgxW7e9Gz8aAzhfCbprr3w27HSiaR1yjV9qTZrrWZBqx95L75QHCgqqsvpuZSgiyCKsS6LVbRQaLfEV8ihvyF",
  "key5": "31seNnA6qRFAdFCUDEWbhNapjcuEwJ9rNeHdCDru5k2f7GXUpreCaMxJm2weTYB4qNVGhmRc7SXnWfJQxNgsJoMu",
  "key6": "27pcXjmwvvPew42VkMzirLue2vQmC4NAoDq78hwb73u67pdd4743soYC7wmsLxpG88AfAa2BKD1tSyQHKVDhtqaL",
  "key7": "56kTAM7rFm7C3MqTcvnDgCnDvSCk86MTkKMFDtSaTc4nxQ53TShawjCeN33yW32VXMfT8T8J4Degro4LUrLHCGzM",
  "key8": "3LdDYCtkEtqj4G32sVV2KH9UPHuGcDhfsrrAsUBdRzEatL3H5eWjMZJLLqVeGu66VctGPVLQjg1SvTF38f6ZRMs9",
  "key9": "5bEHHWLRSV2QQLoaavfTkX31xnAoPuUWKQiKvhnGziU5ppDNZ4nb7ijKbKb5q9cg63QfHjVhvPpuB2JmkZC7qQ1t",
  "key10": "4Z1ZScjuqnuGEp4oxViftG4EgB43BVNouMhw8KMbgC16X2FEgM3QxGzyVeVFvP7iw3ZvHYyWgSxzKvtunGj2ked1",
  "key11": "2tLbhywLdiGFbgvvp8yJCanmKXbcpxzriTewmoCkn6dLezh5gJfGiWHuUqYMrQDWeTMz8LWhDgnv1dggcLppAy1y",
  "key12": "5baU4PP3rSki6AYeuzve9hQ1x3AJwCJMePxuwXZQ6uDFKkxBxdi6BWtrF9GWtsYnEZEkBqmKoXG6NH9zHdfmAF77",
  "key13": "xPTeAnXMXhVSgb6WiFhRYwANHRgtLTQ2baREFummo6rAqw9qogi9eKwe1bDkW9o8S1jykq1iAYyWGwaPWmqfkBH",
  "key14": "T7uc9CRgdy3NB4V2jf3K8a4oQHpiEtRQqoyhahL6HxK3B6JfjDJ7tqrGm3G7VuYPCaPmq4hTNZ5xKL4zzK4KvyS",
  "key15": "LRgoAQEMpjANC9M8Ud2PKr6aekPpbse1YcBPJXYQVmnP4dhezsrjHeW5uJnHYyshVMQUGFJsUutNJc93yFrAV68",
  "key16": "5CjwyieS5HzUsPNiEQVXXHX64j2WxHdAC2p2f1gLarA8HYKQLKo5GBZ88SJu7iVZFrazduuNqMSFaT3Tnz1ufqpe",
  "key17": "2MjxRxhMT37a1vX95CijhGNgMCKREVcJz563iwthq4DftTGEvmPSMLvhxKv2GvsZ94cgC1zJ9zvetne8RcBmyhof",
  "key18": "E6odoL31vcCGRmA6JWGVyUmHUjLkNgraL1LLYHtMDrSEjkoa5pMBPbMTziSiJDZGkR1MvEpN9GhfaYdzHSuB95D",
  "key19": "3dhacYgMjSio8cZo6ckBAuEMUFkTYxbgqSspGunmJMgNUPEP4zUqQ4bUEnn6FMYijR6aBBzjSyEUsmraLncsVQnA",
  "key20": "5S47JvJSdyZX2MeKEwwum23qGgyVyTqESvPRjp8jgCnzE5jKHL9PmuMwkehxUNUbwTRTnBHLgiEHBurWkFAprdZe",
  "key21": "2TvM6wJYH8hngpSYwoJXFjczt7dmt6uxc1Qqr9jaEixauhzQ8sxtcWAjoirP5dLda9SkNjVo2iCAS6bWkLpXnCUn",
  "key22": "2y5U8sVUufNkY7354rMufj55FdePe9A4pRaVz14yxeU3u96G3SP9nrzyy8aqwBnSve4ieL1gjogr5xiuumV9Zm2Y",
  "key23": "yJpFDEdvvDRVdqVXvuTRGRGMZZQV6KczgkVvx4ZEa2CmdN4hjCSoAoVmBR1PA6S67ZebPfYU12y6VHBBt1ZWwW5",
  "key24": "XoCj3RpTKbYCt39aQpZ6bQmSMonasDyiDWntE2ZXrsFkbfNpgAZxwYHGjBQKugV9NTxoV6q3wQNKwUhu6vFdBan",
  "key25": "5qJqNMb5qpaWfieAgXDa6ojceD2Sam2fDb5a9BDRzXjD6nEAGAauqVG9x4JXzb9xcHwKk9qKtUwFBPtanJxBcKMM",
  "key26": "3oDkshxBz1PuKZyi9adbY6VGMgNWqsAuwwiniYjBswfSxf9UaN21ByLRzuhWnnZG8i4VPKmoQpQtDEUSdk6yRmp7",
  "key27": "4uMCUv4tqVEzmafwd6SUrVCZu53fkkY7g3VuuLNK8odFoxknTpaMX5KjeraSmK9HcHSb4WENYru44uEc4mdg2XB3",
  "key28": "3S2SD7dQfgJ5TzANJqNBQdJfjztdyefa2ywpXKhaZgG2FFF9rDLYpaTsJKZXLMSMr1bxz2Bsd3rb7cXq3u8E7ZJU",
  "key29": "61sxVKtdRSnkbytKjrnHruK4D6g6NHtqyR9QrZHL2gMn6tbZ2kPgtGFY7RAbWSVfLFD3uUxJeMB4ESqaEFUanQK1",
  "key30": "qow8EwZ9qpfN3T6NiWzSi5gxhrZTv4SRnmu3iJfkaMrkW1GysgrusYE5aWkYHJgmoaZsXtWy8VTsR7saxcNjy3c",
  "key31": "5nKRd6Jm1Ew42U7tzHXbXZbY6ukxAyB9CuT16wG5QQ25qkbzHUrJywDjNtkLKgzws9zJANGD3rsMRFus5Ln7U1ta"
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
