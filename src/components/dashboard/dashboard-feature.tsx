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
    "5EtJUEWx9L1zd26gPc3dXp83nTH3nCasEEdc5T36FQxGMH6sC535UNBxQxEAi55ovAZ1buMFzWpNb1uehRsSyRf1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63vSkuxF9SyRS1F6LSjXj3nNo2FuiXHYrL2zhtSW9HPoQXdNv2auaUUxuhkrJTBXFbQKM4dsNwPiZfxKP84LwsLE",
  "key1": "3By2NUpawaq3zWCs66Vi3VojpoLe4tPkxya4GqiWbGm6SnCzsaS1dJm9DT9emM7ALXKnBZwFEFR1w96BHvsnbS9X",
  "key2": "2wfJamyrfj6JEDUf1yks4uJRSqcWZFAPQvqHNbydEdEK9AgPFTPez3NK78sbiaiCwmUfx7d7LYCxPU85qrkKGCHJ",
  "key3": "4X1bnmYN24yXj2aqnnYjiQEQzMDcpg4yJV3DHgjTvWb8dHbBXaBzXqm4XxiRgPQ7ZGWsTaWvZMyxwGqja5gHHGZ4",
  "key4": "ekvCVNvpBLcgUXSbNaJE61sTNXzVMXkEN2JJdgoN1p3WS7LKbyq3VqDZ87LXJqzHQrNk8e1iWiFJfbBK3qfY1EY",
  "key5": "23bcQ9vH47EKrzpwkh3hg5iXRjJLyUi6P4YGUGZwB3grVqpcDscx6ZLpSVqnz3ePF8md2F846qY9wmpKPwjotLU4",
  "key6": "2pbm8Gt6yM982HBcCsr2hJAkZjNByyUEjsqGTcxQjXNQheeFZqbzp8S2SJNMw2JjMUBRX5JuuiQygghTiGYD5ycE",
  "key7": "5dTgmDvGh9XfSyCj4dipxw72uSexUyK75As6P9gHb6D1ZLfuDSm4433PiJQtZVLe5VdtC37nwoEXmseQWa1xEy99",
  "key8": "3qGXuerNV1dWHebZWbZtnpfWnmcq8ZayiWxUjAuuQm2ZWgwsnEcQoDGKNkYSK4Km4pemKAJKhJm5q7Cby1rCj7T4",
  "key9": "59T9Tkykr3uWqNeV2BfNWbgqqymVFCHBdqzMwoQpfLv3h7BJj5MBbZZ9dAcCu8hS6FjXNGUJq9CUr44xA7yxZk56",
  "key10": "2LDXmgG7VjNE1a6B48cnqLfV2hjswurM7tyDNxpoDUvNbbNFRFq9y7hSV7FgtZh9CCSV6dZnUWSFt8qnJxuekvf6",
  "key11": "4MzuC84SG3ZjA5hgdNKLFdvxiqTVjk2RE8Z7nEGioi5H1427Ndhnarhf8hLKDh6R7ngnvGR8FKTknErd9859uB9K",
  "key12": "BiiApbiB9E5pyd1fAzFn8Pr3ETEkUXLtPq5G2rUhKdhgkADgKX7BYuQ7AaKGAkk5ukrxEtEsYLjXGTWjA6LSuRS",
  "key13": "QpvHuR7BzDgZYHJNpnxXhMHLnNoLpSUnakATaveBH5EfozWaxd4G1cAE29RKWkm1ZUjQcHqugZEzDoteGGih8xA",
  "key14": "qQRa8SGAhMcRw1xYBYrqEKJeJAVS5LYMe3ML4wntkdwaGHpeTTyFmnRUBcWpuQzcxd9z5KXL1gLULK7syGN5n5K",
  "key15": "3tuTuXhkr8i5CCUjYqGrjMHFGuF9znnUfBZDYgbsADHzkKrWiFuzjeEXsqup4cYWKpkwtFDbhzN2dBUquqrm8eWx",
  "key16": "4M9iZUPvM6RUD67jpKZHVpGQM1F9VfdiAMhPxmsr6EX3p4v4VDa4yoZhGkrtqWHauTLELyu85gorQdWuoMDyatcL",
  "key17": "2pC1pke3wKhkjdqqSdKBMV9WXQqvd8McpSnyNcpSDsjQccp2bf9ZrDMGK5wYcvjrUNe86Y6etHNgU6sKeonfK9pi",
  "key18": "kAPPtJH27ycLUrVU6Ys8FkC2SmDtwqMMicVwxDjWaGcJ2ZbHgaoA2KDb6dcXqAF4KRTPio8LgsBvCdgn4zBZryj",
  "key19": "3Ps67eHuMhBU9Y7wWucqCmDd3UP2LRLx5kyQUKXrg4grum6vjQNu88b4fXqt7qrvGBTawNHE2ZUdPEudDFLFZ3X5",
  "key20": "47bj4QManCvQki5SkhuhM7k1zkKWZNaD7ruLV6dX5REum6pqLuWaRvLjSWDSYrEL7PaoVhpDLSCgU3BZR96npiwy",
  "key21": "42msDAT2u6yXHTkHApJoKBq7UpP3ZAmkxKQo4FffCCfosDm9sHH7sm7JXGSZcYT9eUB55ca7Uzd96nAXrSzogQg5",
  "key22": "2YhEtYhy6h4E2NiUiTm4hbw2JWdFmgPLhvdT3akbpWEZNSZYt4yWMKMApCEr4zdQD51Hpj6eJPjqXqgyqnNC5yQC",
  "key23": "2iESmYEAPE1TgFzJcAGXmCyjDkQJpPdHYspi2PLeyRzxvEhCWAYwUV8tdUyTa36sKuq4BtAoPp5x7LnMdkjyoXZj",
  "key24": "B1jTHK4NPJVX5cCxPMET18a2ekoU46VczYq3rYXyF1DzJuZxr3bxobhoD4bf1jr9BoELaT1oYkEmEvhfsLrmxFL",
  "key25": "5UL91MkaU7nh9nyAcYgYX3UH6P3eM7YtGixggY62aTL5NeZ2nAXcU5WkunpKp5SzwmJTKRN5tujjpuukVGLnsMno",
  "key26": "4U66N9GxXFSKz11cRYWosxspTeE5wuZfV7g2CF42qTqE95rKCLWyD45RfLiqqeUVUBrsugN6fkHEY9JwPnUFZY9F",
  "key27": "59C23BopLFXHgqcro7fHBAME6QAPdrXW9ihitGPHGQzEpfoheJHiqiEsSZcr3b1EifrCN5uLMpfdjsuXKv4kqWqR",
  "key28": "42cSGep8M7ftNeD1tnKcwaV9mi5aDpPmdQ6Y2dP9vqbiY26o6hQDmQzfDxiVH9rasXnnpGZ39ZnGz6X9KndvNfhk",
  "key29": "38jncz6qwBy2GncaEvHZnpdPebvuFvPxiequjWfrCuUpY1tVTNkke7V8pBbmAFaiAesumzUw48RMmBYDx8C8U1nV",
  "key30": "4N1BiWFGbhMxbPh6neBteWAx72GFMBwVdZtFoL3L3Fqp7KnVD3ejiMx5QX1k5Xhbp1c8UH7Uieb4LQbPE3DuCWVB",
  "key31": "4zjibMEPRtoBxeKk3JtSh7Be2WwVAmg2Ad8tUYDugcYMXmsaxQG7JchFncr5ZhURU84UCuXmLLz89SJGjVzffVHD",
  "key32": "3ETsn4mGCrVaNrTEhGRgoUpmu76V2rBaSA5SxzfvRRgFAsAtvo8YoCHMyMvzgdGuxkPQx9JqrCP2Va23SRZCKCti",
  "key33": "JgHdAdnCKDPp4CjomKiwZZU7L7a3gfY1si7uTkFpUMNEi7doqjhgKmdTk1KwpT4AJjynjYMMgUDjkBctmJufLsa",
  "key34": "2ZDtB1xnDxS9xcYgv6BBNtUo5fcmDM82uHqc32GgWdRb9pKpzGqH9cnYLxhA9pT3EcFuoZj1aBX15zd1rRGcHEG8",
  "key35": "mq3mvtJcGjWcJDLRno5dUQwtkygnXG8xSB2dH3JNm7cdf3UUxPTXi89bVpuC2RhgeJFDC8eve8iTJsJ2h4Qqvy2",
  "key36": "5ZL8u6UDDWrCPTvHgkbnLZfjsjntmtYtaDtbveNwfbqwGgJu5gQV5u99xV7txKHtEJM9HVgh1XJcSEHm6kqJgDJV",
  "key37": "3pfTKB86N4ay7maqQ6eETaJtFBqYPrhjFySewiDmQQ1ZLykCnkJiKBKHv1mawVDTqF9uKPeMVNwoMt6MDgRXuuRL",
  "key38": "23A531myyfYCJw5e4XpWgad7ir5TLXn8oqUFHbmmaZH9KGaYEKjPWe1yWLYNTZVQnitj35DRjbtkfCZpEMkxuaxA",
  "key39": "368gkbDrRTqNVQEEbpo9bdWKiuA3uNt1E8JfECzVhbLwtX9vQzXGnmvtbtpTcUVrqBCeCRb6pz3Gji9cmerrejwd"
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
