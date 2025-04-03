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
    "2vTrTQSrjMeqcjCdh7TnDko3V3D34mrYFbP3Qc7wzrKh6JjbeGduYRwB675egjDm7GvULTA5VfC66vAydQkVNZei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22WbX8w61jYHuJDe39HXRyqytnws2kaPD5uEcQPyeF7hNPmQK9HMdjjn8Um5j4TyxZusEjrBZ6FuUukye8Lt1sZq",
  "key1": "2Q9br1xL6hjs6ivrVaybetr3KJvqH12s3viuKZLvSG4DfcquoFiyHuacFKuUHvaE5bAY8hK6uYgucyULKVQmCqkB",
  "key2": "3n2MBsotnRejQ21mb5pdY83JY7zLRG3CufoV4y8d89aoMz5tQgc2iM2YkL1pUxoUF4TXPwZSjncDxLARyY7AwESe",
  "key3": "366netSsBGstHqTTbv8vjcG6583DFU8Rwbw2qT4SDjhhgkqUL8x5mGZCKHzAuSXEBVaFj5RShJcerVAEG9GRwRM7",
  "key4": "4PhK7WHZBM4nuZ4zfW2zzLn36eMAAE5i2bKEDnYA3QHJAnE4jH75omHTfcecJpkvwNsqmuN3jjQ9BQs5JZGDeX4S",
  "key5": "zqYujYNjCYjS9o9iDYFYNXzFMpQshcVBDuYEQqr8UER8nGZJBHZTysrk8QmadX1KPfNfjGaktMekdbmCqjKQGMF",
  "key6": "2zqQmJpi4d9dFqNmhbEmqo1Z31yATD9r5yZ4BkVPw963WhKReuqHNsdWj7e7S6C8FPtwMU914vdbst1Y2iAXpALn",
  "key7": "4SGig1k7yERYqWs9jffxgSx6xFQPHAKMkfadKYQQNCJd1HYnPXWLJ47XtNi1tQoq5nyiptRgXwt3bUoAPv8JpdMH",
  "key8": "ESbkKJ9d88DEci6SvCsB25MnnCGgjVBotQTuQbBi7FJrmgLgmxzSUTC8dQugbEaDCPMNGyTunfqMMMRgwg2n7Cs",
  "key9": "3K78yynb3cHv6UiAALmbjvDHgLGXeGmR7cWT9CuhqTguwBCCe1TNF8faoyEHTSkBktK2JNSVRBm7DneDrfsmT1Kf",
  "key10": "sdG3Axm5P38nmP54hoi6bKjSihFFcXYxeJMq7zCmLqyme8jojziWdVnBT6ktJFUwu7QkSYEMAp7QLWm6KGv3j6H",
  "key11": "QNGm5tnamy8ZKtQVVicgKZaDcpTSmRkKidfEjNyUdoXxJbN6bjb7FkPfy1JensLjaWz3jVJsQtP1v4KbgLS6kM5",
  "key12": "3Q66SFrdR4ymKRJNgvBS4Cu3zcnA7xPjXMQxkquQj5weAdcTtkuoryWfnppQhZJQrWPYoBSYthhz77BQyQoMgo1w",
  "key13": "3BojM1J81C1whJenGcFPdU2PT5G9JAqAC3czrUj1z69QTFPPmuVtiQuovewzEjD836abfgt3XCoPegUsfHCVsCit",
  "key14": "qMFky2bDsSHJzyu1GDMMWoYfMwQtXQuFixjaL82be99DrGMdt2AUNnTMhqjEg6wTyAwesCmTDWCrrPhCLaWcXzb",
  "key15": "2Zn6nq9HAHBrr4P1K6NSWLcSuJxboQvLjii1sMAEmvBENYgnmEqAZqd8q6FhLg4brCFi2y3XAb5kFvwmNEE9Fj6Y",
  "key16": "MSUJwdQC8E4Tyk7m3PfhAtQREW3q7VLdsLcARPB2KLP3XJHMNjb4nFJx8zcjtHvpw9nPviFUux1gN9zyRtPHnnp",
  "key17": "4GT5AZ1L3Mrq5biC7cVWUf5GRYE4xuBxH3tmtHpFxXnnyvKLAzYznEBcDrsNvudsXLEaTxLSxyacU2fEJ38udpgb",
  "key18": "4dNbtujscMg6t3mf9BichRybubvNPpTLpKHyAY5k9qyHdoiabGRCQEahjxJB4iHBM42bo7b4jNXERgg5RtZrb6oH",
  "key19": "7jLMkwT71tZTyZ8PnUejrbgpG2VYfAZP26Q3NXhRf9NuMJY9rJ8peYKvpRDbr64ZLQfBmdDp7PagSmcrT6u863z",
  "key20": "2uh87Zoy8UjoTuUzprUZ5G3ZPCn2SDcvdYtJ2JmphqLJwLKFL7MSDAvwNM4WsuTfgTM9Rwwkb9Gmwmb8XBV85J2c",
  "key21": "4DCRpzcstayuRofnZDCUdtEsBz4L5bANRxZGyuJtZuAguUdDjmwTT5w942Gy8S9xmwu2Kk81Rbb9uv4P9bHn4cgN",
  "key22": "5QNEbKsu5EwgA3N8QhHBQpW4Lw6SA66Rp3zLNAPFSezW7eJ6MU6vRQ9tPs1cbZ6VhnCovZ5mNzCvVCeEgHWCwuAC",
  "key23": "R5qMy2MeKUnG3B2bvsXhMQ2wRF65C1noFWRWNRFTJqUJcTy72dLNJNBWpWRqnCkApx26WfwrMttJpF4y595RCuo",
  "key24": "EcjmR79MQ1vV52i1R1La1cus9vkzGPF95g4ra8zojMfWW1pGt3rii8AgzuMvYLBCHkSbXLpPFPoMfMDqbAWwubr",
  "key25": "efdzZZJuxbDNnCeTbwkgyiQAJx2XtqCSyBvgXEUMKvmw1FsdouwycvzsXCLLiccQDeoNViHDNq1ZVsLpvVmGpds",
  "key26": "5rZ1R8N3bsPZjUa3jKJinsJnZHcUyLvxoZUTTJ72F4hPahuwsWSBx9shqFSbt7h5wHGiKSfrujej5PBBJkSvxsrn",
  "key27": "5vsw4oAc6qB6fAayG9NB7xEdHQgEPxWcrASgEZR8crutX7fwuac6vNWubxwSmDAaBFJuWvjPD9Lby1kiQjPku62g",
  "key28": "2PE4gpposAddZ66NXqLoyPQ1VsYZvfiwWFwSXUHe5DXH1yD1sCkqZQFhCD7gGgkpuoYTrFjD4BM47PNiTWVa93AL",
  "key29": "2fma6wZmM8sKwijQadPPATHU4m1EuPWQbT5iqaXCDYFEAdsfir53jHFcCPYTNadyFdry1CCT2FHv1Eew3NeEi4jY",
  "key30": "4yYChWDWSjuZUWry6SwkZm3oPqEHMbZCotPEmP1J2qrLjt1f9Lp24ojZX2UrkJuX645qDbSATGMqrqf7Brw6xfCb",
  "key31": "2LXnhX8bWeNZnTGtCZgnzGHuzpuqpxS5cBfPfgLGKYtHtrG2yQFXXs82FetofHEfAYecrF7Qdp2dP49ySq8kMgg",
  "key32": "5EDGVK8x67HxRHa1UWKQYSQRWUaoUWJQGYxpPTjNvvjwG4sajDFk9imF8nQP3e5tKEWg6fHNzjzT5uATCfQEpyHU",
  "key33": "AJBvLyNyyiNJ2xhZ55JZmpACWSoegZpiucsZtustevkZr847X7bHMyRcttu9cDc1dLPoFVzBU5sZwESKJ4a85ZJ",
  "key34": "5AYYuwrfXVSSjgAMdSt9xvP2QhctZBqG881KoYXaUwfPdrrDLMxu5tbFhaanP8pPKhf7nVqf47nZWb2pmmJZHbEN",
  "key35": "4bCPAeyG9cRtzwpWRW6FcWmsgnmCdwY3nz5FpYM573K3Mf6y95H7FhEQnxbosVu2oygAHJNWTDbATKQZ4t2DX6SS",
  "key36": "vJ3HFrxSGe4v9ecHLW4N4K8Vqyz2VvZs3hcXxRHRZUNmYWf24QyTEpgjkMg6wr1hX4fWNWjtL18J5psxq7E2cCY",
  "key37": "F5nViAm57UT2TTNHuwQUqupqjUCo8Ekxap2sRmWHVZrpa5koapxgYde6ChJfe7h6FLehEsTk7TwvsMu1bPFzw4B",
  "key38": "3WYQR8rtjDjPRh91Pn9voMop5wmmbtbvyewg3KLsjJfGLU1DnG5UwXEPNxT7wA1bwNBDGKc6qVg5jiDbmQxgyHyP",
  "key39": "4y7aXycvtgmXD9rG6fzZXrD85UusPMecMxj4dS33p3umiMRPu3yQe3FNfaqmLQ4mftwaJAWiSPMJbBHje7nHkp3c",
  "key40": "2cckCCxZAir7AwzLC8vyFFgj7gNCAyRzh9MDCEzYJLag2phspCm1qNonEn9mmGiGnUnPvhKtRX8wjRXosJWkY2N4",
  "key41": "3CWvPpWCk69d5LLJumDMC5G2rcwxMy5vb27EtcWfCeDcBeRcoUL6eDJhheZaAAuNuUbK66qyEntt2pPDgAAymQ5g",
  "key42": "56ED8bYi6jcfRiSbrUHbZnp9JjLWKUKjr4AA6Nip4abaa7jRY8vgWGqJcoxC78e3jB8TUB4eradRf8EKyomNsx4h"
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
