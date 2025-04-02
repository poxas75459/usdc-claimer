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
    "67jdXffCwku748SZPyZwAiPQP9xSwN5XYZvouJzxMJmQeHMijuyXgkzSLkYPnU7QgRr2qW5KuMRBrRGXD48GhwmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AQnb8qSbgYQ9yiTQEzLD6uziYCNq8vappvoVNZL4Zk2t4vUofnPYbMSHdPJyG5m2UfoL5G7esJNiZs3vfTanhmJ",
  "key1": "3NKwRs6Qwp785UzzP9KPQ33yh63tovmRUqHwSXXEmF7zEswUdfVMrUteJEapUZzmgAbkudq3WYZQ8VxKX8W1vxxa",
  "key2": "4Tad9gaAYmCbvVn7q33A8irusHqCp1g6FKfXioSt5SqcZ8U62V7NmadKLm1C8GYexAXGxJ8uCBCwuBcaNJ4BKwZo",
  "key3": "3HsAcY9QR5vUtqV6MKM29RaLUmgiTAoskLJjpeBfARnvBhfNX9D57BwLCokNirrdDq1igfbzBz3tVeo46PCRZKxA",
  "key4": "5erGBUbLUsFCeHYN3jVisMLZDJBhyoADPidDLSDgH65ry167RtoGrV5fr2nWhp5Bxm59TFUScoxwVPx2cDdWrVnH",
  "key5": "5qrWawUy9c26pfGp7bieaZ8y5YAYjpxJC1x1Jz7bs4VH6QkQJNjS9NA6rcew8Mm1CHZoWPE3ErLggn9L7aSUpMUm",
  "key6": "yy4Ca1ffnAqAtHwQC66ysgx8Jjy8KPapcAhUSmJnxfu46qvW1oo1mwGTZkLVXFcSaf9mzq6BSi7254n3zdFfpmw",
  "key7": "Suh9CKWB4dHwtjziL3sUPv1oxeD7znNW41qKKodqQWa5vDWdnVAgnjb4PdPHhhfBF6BdrhtAdDyJxxAFjMxPs7y",
  "key8": "4BRDhoFk9D1nXWKS1888tiCSbzTeivharhe2ACtPdjj8kru5jZ1mTnkhLqfGFoFDH976Mqf7miQteVTGREzGGVVD",
  "key9": "DKsAtNFog3JSwFRM8wjz8SxaLNAjREdMmmho4pwzim4paRrGsCnxapUex24X948XK7QygbfdNwm9H1qzt99iq3o",
  "key10": "WRNVzhx6BQ2XtqR2bWdNsf3mrBUNDS9Gsfoty8J4xkuyiL2kVUZbi1DLXBSzEzV1dHqtUGLkGMrm3sDNysDNhhk",
  "key11": "4hEXJRZGjK3gbciRw2ucNWrpsSFcz2eDZA2UGMWe37tLGAA6n6SvFEvA3BiYFRB8eui4fwc2c2aXR43etQvQ5L9V",
  "key12": "39YCdD4AZTbsRmnnow8cjXzKpmoYRUMgpRJQH9buWpafmmakEZswNnyDNxNYiQchmPFmx7jA1AGn4abWASjdg3Ev",
  "key13": "5rPG5dYEdAg6Pzw7x6N6gRccGZmPgByazdDAjSrxs2Lumgi9CLKNJAQdJ58SRjDfaGKgc7ag3StaMVr5yAs8ZQJ9",
  "key14": "PHWrr976zwS8XnbPZ4Kg5iRtDsZ9D9a6Vy6TK1BvTkNRe7rqKx5TiiYfuA8A5sPuFt1ti4jNuEQh4mFzbDkQ4Sm",
  "key15": "5xGHgJ2EPKZ2JWqGhAP5BSrVSqy6PChyByqotXRPcVLK7TdJkwAxW6HDdPrCAgWyQdgf28RJN5qdBnTNUsNuZshE",
  "key16": "31zfB4TfVAaY9hMDKNf68oGMnJLz8wo9Fio4y5CS5p8UM2yFg6obmgpA3qPcAGhcXJQmUUrtVepKhNSRno9aUaqf",
  "key17": "27bMD5zmyDGmgFL2TZJP4vKs8b5omNeunVX8JNgWf9K7ZaF1EqaaDCN3Kq2zvNty3BivEPSHLqzKrAPVCdBEnW4M",
  "key18": "3geYWrZGVvikMdtVjvUFssKtWJACgEdXAxj4ATvu3sZU2k5yjAQ2AHFebYLvntJUycHcpkAhe3CHA1Gy85dLhPXY",
  "key19": "2xqLHFnM4TDkLAXdvcA2MESzD1vqsSDbaCcMvqoaoFCaZXJS4psnu655cfndPqBKVDV48xMXrbJCc6tC6PqG8czT",
  "key20": "2ye13MnkPAeM6SLwqzrfNAsYLoNR88j5jsT5J3YYfQ9PdsaDVefgAdwv8SFAEgdzNDpzSs8e123RRU5oBvMAKM73",
  "key21": "4idBGttkWkjncBDEqsZq77dD2M4LKcKz5CyAhZbnGpu3okeRUxbDQyv5FdEAreHohQXfem74YpLtKBhYoLTRLTeL",
  "key22": "3SJiU6NPLMPkNk1EFCi1e8oW6WckQdz8SXEEC5gMwihhiSrK67U5epvEJoVrYeiYVtj1eHeNpTwnKmQwc9n9UG21",
  "key23": "wqiUXmpFHJMXisdovHcQvpLF2q8auJ2SbikmjXeBs9aZ6pr6tfec7uaWnoAyiyLpb98GKGyHoFc4ZmVa9uaD3Br",
  "key24": "2Xe4qfYLPuTYhnpt3Fx97Wf5HYGseAgrvFaJAntPvERkpFph7SwW1fMF1sSFJbAz3kNAhsCKwA5LSHYL2EGyyJkD",
  "key25": "4PVk7f9XsAxx59sL1rwMbSNzb7fzDdtjrTuPXFpQEyyc5X34ScT647p18iGs3pxWsBnnPPv6mG5ZF2SAjzUjNrkJ",
  "key26": "64sXyMbX6mJMRiNs5FdvUxrXMbktGEfL1PNsJev8Pv6iXAB2z7r7C1rQtu6Tq3TLKMw7avKSHUbP7Ryj1Bz5f7jH",
  "key27": "2srsohRmWLAr1PCTpinZ5A8SKGsQ9EM1b2vfqYANDsz3hRiapxZHgGypCKeiNX1rzPuyNJUs4f3YpaSZGfYJUky5",
  "key28": "2yRX7fi7iHGnT5EZ8V4fL6ASEfqCECxrG4MihMZ7NTNqErvKhrBPnjy3xJhBaGPepNz68EffFewYaPfXmzgVvVve",
  "key29": "2pXmhnQZty2gs1K2r4Lo8v1wVfT8i1FEmxMXZXu3rPYegnbJABsCPWSxVDzuCRXZtTdtVt9w5fa6vgKzaRsoPEfe",
  "key30": "5k9fg6Y6XenxcnepweAv3vz3ffo7Q96zXK4u5XFCwCoEu8EBXzThExYtZFuWmiJEGCBgyYhD1kjd788uZjQ6hMPN",
  "key31": "7HrR1gkTa3cwwnYc3mNYHcgJqtaWUivhNPzArU17ogWcmf1wsqwiEs3FLApFLXsk4TnhZfJGqVNayj9D1NkMerP",
  "key32": "3bDYwpq2arBFyxYfU7X1k6Fn4fU7qdc1umShjG51Y1BQHJZDPG3wQAedzeBrqTbYbDkRTwDrcVo6N8j1zHxgEzTF",
  "key33": "3VfmGm71uZ4tnAvhBPwVcpknC91QVQHb4R8E99ZnjCLqTY81iYk5SRgtsh18vmLtA9GBUVYwJgYryfpHFj22T5jA",
  "key34": "5evxFj2XL8hgbcWv9iCrbUsELEYYZ6qgvX4KaCZWY9uKthrYkmYcJNZn4JwwSgcrc5HizFDw49kXNWozP1BaJTHB",
  "key35": "3ryzjvpkWuLfhBTBjeaBiVQgTy81sXbGAUGCGJQxcwugEi8Z8avp8TXfh9anr3dMSMqHVT9x1R4YXjAEB54K7Voo"
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
