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
    "2mrVukgCe5JwzFa1HcqwiaXXrVsgdBYy4UVu3pUVTo7aA5Gxct4kRCLHkJVgA6v18h3n6VnoX3LX3Zama2gbjmLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eq4WJSPRQjeoLKSzyyKtru4JayxwgPMxtuvQZKBqAod44PAe5ZJY97g9Qp67v2LR3kN3GZPUP7P3jTUwbVjGxVa",
  "key1": "3WDvgFf1BQhxRDk7NUjmaZWB1ociTofxhqza9GH6PzbbEfEfb8TZDpQA8nnxbq4bWhzsyvw5RcGevEa3p9N8cYRy",
  "key2": "4ys59Q6yA6An6iCCGsbPgrRb6b2em3QDa9m6NHXgDsdJo18JBYqDzt9V44AkVDQjp94KA8xCth9T6efo3qcJuE2v",
  "key3": "pAm7pwQrGsyKx7y36pm1zeNDmPrHMY4ofsj6hu5sJWcEMYG4bP7UqX4xjKunFWiE7htt6mwjHuTozcx4xPrkTH1",
  "key4": "2mprY9Bsz1kKGnAoW6Az7z9QQWW4MAULeEjgvYvCbdsQTkpxmwrgQMp93W61SKuV8rkjAKZL8ZMHc1Ex7ykuW3QW",
  "key5": "5dm6KGVGDMMGbi3G2pgNChy26MajRHdQbYCFAk5xC2BzqVW6UMPFydpEHv6PtubzT6dtYHqJX7csjDpxy2FzusxF",
  "key6": "3Tj2mM7NSbU6iRdcNiMrKz9c6XGjDsMeGj4F63NmCKLJ9xLeNupbjPr3ZXK9hmRRdAVMeNKERnmbidMj7PvyBaFp",
  "key7": "66NLrSFLQPdrMEp5YLREyMMWcbZwYj9rfbYMMDji9AtZLmnqXqHiNmuxKHEV39nHnSCL3fgzTxMzC166PLc1od9T",
  "key8": "5tqcvhkvDADSSBjuU3RuQ6wF19wv5ckmHm4gzrSWcwDG7gXmqFwgfNEZ1ReqYZefa7vrRCgsFFqbDspTJ4VMiWLA",
  "key9": "5Gu4HDPtEKiapsZomMCihFdp6UUmPmySeVHAqFhWxCrw6YK7chZyZnWfQM8s67qSLfsf7yZZSvH5zmDPcRZcHHev",
  "key10": "5JZswFaQwDEp4GjsdBwFg6a7xmPLkQcVpjPqdaHLcBJLJj62eGoEbLAMpXTxZXzf2d7NnLkbKSZA7SA7N5yrD4Vs",
  "key11": "YRWg6BL8eoSg4esEbUmGHzj3r5tAd4phGmD7GaDMgxH4Fr6oAuQCco6v4sGCd6NjQY8McA9CU9oJBfwZgoDMjGH",
  "key12": "2vmmv58NkCi4NvdXMPSKCZNP8hbX4kZ7pCjvmfYM6VJt8dW16qDmGmAYwVySosWvbrqYuJ8qyyGqhcykQNZsyzW3",
  "key13": "3PvgC43SBYmHraEQf3vjYQjux2NTv5ZqBoSSCQE1HsKiV9FeZsNqve7q9bi6F2U5GogdgoF4MirXxDkZKKLor5Qe",
  "key14": "2K3cqPTQ5xWyJ6iRV5XkUHamd4yPL271cBcHoFUxsa1JJEfqJfx2RvePkRJ5PY4iLZAtVFzmdTc4KR7cyRhiHKkr",
  "key15": "646tpcko41cxde6E1nKsmXSzYT14adBrLsS7Y8jV8EMnRfkAToKB1GhSVWKVLkRHGRMYUmSoSZB8dhjVEvqNnjon",
  "key16": "25QW5B8jYwPH2uSckJki8U54gYhRd3QgCZcvRoyPTkFCZwQAxuXAttuAsoTcG37sciibTa5gkXhFBr57mbu5HHP1",
  "key17": "2U7oTjgUxJ6WXRa9i6MzTPudtWqR33eJrz6bbiyTQWQi7ioy9avoMwkgLUiKMc643otxL5r918axsxu5DiFSppVJ",
  "key18": "49VA4RHp77SMrM6ZG2nGZf6CRokzG8A7jFY9HLstUJdCCx8gFNvncKKcr4FDjpM2UMS4wJrimTnFiwvTegCH3eQW",
  "key19": "pTAzB4oT8rmgNiDnhDJ8TPXZCRN6fdYjpLK9TfSuocDPZLuDCssWbPATQWHeMXc4DdfmZczB5PDYvWgRNXN5LWJ",
  "key20": "oow9C7UMFrZG4rkHAhB6RbfW9WGpqh8RkPv1M1vediPq8YuUX19P5TqEVb1EihzCVZAouGnxHyWPZw2umDq82jH",
  "key21": "2zbQQ9Hh9kpmcK76gTdk3vJ7DJhr2Czzh4aqKSRNHWPphABRCQRVG8ZuFdD2ViVoGCwNKa7EDqAPF8gsyBGScK4E",
  "key22": "31bs3rZXNt5RxBLSU8prfW7Cd3jDKR6wj3dTZrqqVSoGnF558QNZf5CT3qKh3SzrU2fc6ocwBn6qhyJGAHXkxhnv",
  "key23": "5ZtgaSncG8TSgCeB11NdHBenZ2h2m2QzkuoYPBvPQAeriozHFnYWAHZ7y8n6SJxd8jpfnU5zUzUjrpyoyMMuZBHm",
  "key24": "M923jG1YfuFEmTtterTkfsyPQyBpueETzMwLmSnCoqHko8pjAQztJhG3zYoy8Jh9yFUC94cYtTU6bgzfuLzRUw5",
  "key25": "3QbpH9B7ENqFTQabKkQ8xKb9Hy5GnRTjUXu9KenMM6x9XrzMZeZhz6ShKFirVV6DArN4sKfBqvcHXEFVGCg43Bhp",
  "key26": "4bPDaoQKG1YERogDherkLGbzqoswJKTtAHHbjSxEdQFRZBCFSoaG4JnDYsmeLaQwn4rhjdLDh8qFd8rMRQG2qPfr",
  "key27": "35c2YZKh1QZkcWMVKvZjE2772mwFMjBjFihS9L74Xmfn6ThhwG6No4skwfZkd1T2XujMVF2EX1kRtcHcryDayaVG",
  "key28": "Hw3yB2zwuZReuM3Vcr5ybLzwP79tA5K6JDx1UfQUAT1RH7U9cCFcHVVx5N6XRKuMCZpfZEDMbVwAbeK7q13QVZQ",
  "key29": "2e1qZhzEk3tqDrviQUFmkg7FKLCdCbbrxF8Cj6bTa7kP6ri6u6ktEov2ZU7M3xbmCvetPzrBah5UhBsEbeAcakio",
  "key30": "5L8s7YtwZSAxRA96oeMQR5B6JGQRF4LJnpG9xtF4RskG2efCLuU3ATkJws4vx42r5TGcDHPZqn6F1whGMr18di5o"
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
