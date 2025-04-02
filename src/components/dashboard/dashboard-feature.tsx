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
    "3dJsYQJ4HbJQCcfVrJuUWzKvDXg25ybUsa9QLNrwbsm5KCPrEjdwrCSk5ZsUk3ZNW9rymgH4xjVTtge4JUxsne8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uRzk7gQwM91cdtXYFJ2NMFmsowQdEQF13y9cLbvYYLXVtx8R7iGvNjmuFt1EFRvioSaAgZ9uLzao1n5dxFEkZJv",
  "key1": "3yHoMrr9yG6TvWq14ibBwi289h6STXhaJk25ngTVuxDpZATDVjxNcGu7VnZJ7GM8bH5gZeGrRWUMhqgEQbagi9Vb",
  "key2": "2De2PigQ5kFq7yi2uwrMGGdTwXovXs9AmbNfzxshvjM17fKffvUPMqoHmrqGN2x21hSGFRvDauL2KGnPdp58G5qK",
  "key3": "3q6YC3eySojBM8AGFw1nX4Dk1837hcNUM3T4s91uaKkJkjTjN8Z5PaghjqrqMn9xaJNcfFhC18rhFzLpno98etoP",
  "key4": "brXRcSpchxXUFvVNDB7LCrBoAoEoUnefHbmtp7tbGj6wte6pQKkB8Wxqb3GYyGE6MZn6yWiS2FkaUWEdpFMZ5yR",
  "key5": "5YB8WT1AvTRHg3BqAUfyHwVeahj1khrpaFLiatsSXXjh1FpQrJs3iy21ko8xwheN57GJiBCDuS2y352FznRAGzX7",
  "key6": "3d1BKsPCWoKojiaef5UqN15Nq7FAbBzKZ8fyb6NXYhuEyT2TGvDABiXCCxoSyACkW8F3xY85xkEyLYYDbnaGs8cx",
  "key7": "54dRorKLbaDNBbmnNRKGmhygSKnk7Ua48BoRkSw1qCdFPTszBvErnaepASQLpAsQC2zTGDfrxm7sHPmgoz5r1GcN",
  "key8": "3sJFhA1e43jHVK18S92kDiuvEme76cBLFWNcT7CdCJr4oW1GX9mccX8VoWkwQAQBUojVtutv9iF8PviedQ61EwxS",
  "key9": "5pjFqNpKZz9Vh7j8aDfk1cwzWxtwuNPCAM5SZWAQFvMJ6o4tt7nKX6hELuW4G9vMwp7kfUW8D8LMuXycDv9jGLCZ",
  "key10": "ipR5AmYcTcdQNYaXDKTHWaMWbP8zz6wLPCqdqeUGQ69Gu2tYjn4htjUGT7knbWBfTaQFgHfZDBrzxTYsywn8Xkk",
  "key11": "5PVmnXqbgmux27fP9hwYtLLPmW3GHF8N47KDFgFjHYZzrvRhXwFhscngKeF5THneBGBEc4hNeVN8dkpqJz2n2PJe",
  "key12": "2tU1Vb2nuungzNx9coxd15UcW252aLfnP2rT6G79KXkcwchKVD2hakM3VPVyH3t1pnKMaUDTVs7Rs3EEL3yVjCnX",
  "key13": "39NKA7uma6c9NNCY6scsa7UoP8aVqSTKWF33GESGbQGZdBjiJGA2cTpAiqaTVcp49f7uDq2spmQUCnR8NRDM3Jtf",
  "key14": "5BzZFEx6DMyjAGrkjHFezPYvo7i7tmbZ4MrvMLvRft1KSQzDD67LVL42tLWizpgTh5LFzSLS4nfdxu3AroVG9YM7",
  "key15": "2YbrDbXYkBBRfQudqpvpNhq1oYw9aehr34QDm4K9Wp4GE64ipeebCLZSZD8JGxL3YrQZ4EGq5XX1SoC1jZfbxzZy",
  "key16": "59PspNwKczVugBsFjksJzNYReNj2VAeYt2kfP423WWmkocdw5MHK4d6PcJpPZGH92UF6Riv5z2pKcSE1v2KqmwJe",
  "key17": "2exDXABCooPEFCFF1DdHb3FSsdXJ6AZH5yQ6FfDqW5ZiqBehBeyuUJWJPRB3iyWxPA626JWCCtz8wxPL1HT8jy1z",
  "key18": "5Dg2b2efpJrWuHeiLyihrJf81D8GATjrwRVuSg8U1VNuBCa8QGP33oowfNFE3f7MK6vfUXgKX4cEC8DEAFpvQpRM",
  "key19": "3r2csKVpUDgqFC1z8QwjE5MgVG7nDGysLZMmh1NUB7vfYUYhouCi8W3B1P9jbWAYJfrg9XpfJFEKWYbmGpm6YUE3",
  "key20": "386rYbGCkHqwdzMsSWt613VQYLHMD2vsJzc6gMieQ6Sxi2AC584Gud6cLKEVT9bAQVHtMimDgfPwgivASJLCvKcq",
  "key21": "4tpbQsxkmP5y5QtMZZL9tB4BCY63XAnbkApoQn5wJZFfG86G8wmvgG5g4yp4mkFKR3ZMiaJ5jrxfgdp8tBZfSVMq",
  "key22": "b38bmWbdKhq132JCBEXpu4eXdGMAqbZY6fH5n54N8JX49Pi8NTHFSEqMEjDDwY4kLQ2cZGnAb7ks8AaFSsMSjkq",
  "key23": "3VJ4QMmPar1KgPsGijU8ZrFojEkc1biz2NxNq4TMQQm1tSsW4X7vEWC9yaCrfgEp8bQMBuw4QBC7VKdGGdhHM8aG",
  "key24": "21DduN4jWsATEfXihmPws1TWd9TWdWQ9vzjNYKoH4x2RWY44nFYcPJhmASbKj4mBfE5Kzg3wvc5PVegGLhVjsCWn",
  "key25": "XwtKqMPoqsuJqh9AVaf6ju8mH8DRunPuE3oNUSdaRYbYHNJ8KeritXY9CrNSs52u9Urd6eLEb59NtRcupkL3EWF",
  "key26": "R3Y6PFdWDtfSNdMLKLSG2A8eKPse3D6Nxc9NLzRBCfxJp95aXzqdeeeJNgBEUUXG5jpCr9G9cbDjBKQU1Ag9JEb",
  "key27": "2pVd8W5Fq3WKWjq9fkhULbHDb1PRPknpCKT63ubdnrfnqQRKRMQCFTorgLSzD96qM4c3eX6yNyTRVedkB43ZG4jo",
  "key28": "4L6vNzP2JB5pSX6dW7sCT8ApewNPbVuGi9NtAECVdpA11z8rTiRG6E8SW82riLvQ3SB1xLigg1gpCjywKyfN2kuq",
  "key29": "5TY4D5CUWDVwGx1m3FzBzUu9jbJRrX2eNLjEvmTYUb4Ryai23Dn4CPrmnR7oi1AiPdAKbzLwxXYy825Lw7m7E6Nq",
  "key30": "2Bm87Qkct3WxrGf4dUJrJG1hukrfBKutxdv4TcbNBe8uuhnNVdY648GmmomJ2tczTkZmwVQYnuwmH59xweLtifN7",
  "key31": "2vMYZ8Cfydaw6kXVWCSFPETxJi58EH3x3WSR5Jw2qu1ZzM9uq2faWtpHP6pA1DBWYBWbYpDEGCxNBSevw7xadVAe",
  "key32": "3hz1CWK92owE3bcYhvK8nm8nPoR2yTsXnitmQSwYoWKLkJAm2wqXY1xLWCT59bSQpQfUUyDguPjTuZ8LADQxpXRG",
  "key33": "2xHTAe4M5xqpMVuAbzsCcTkwAZN1RumxSEr4XsXGw1uoE5pdK32b642U8M5EJRr16gEAvgf1RSpRwdRdjX8R9was",
  "key34": "3QeXSx532Q35C9JShjBEG7cJDSRidaYZuitQpzQwbYEbwsTcWPGvjTCJESQBy25T9L5amrS8t9JzjjFbjiQ12nqp",
  "key35": "4MN7aHb63qmKHPixWYbZffKgQGu6YtKpUf5yR3h9zzzGzWGCUhvgaVGRiKtqL4pNNvuK68r4wqL747y8zy6mqKCQ"
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
