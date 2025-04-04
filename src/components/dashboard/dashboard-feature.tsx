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
    "4wn9hTgNGRusjbaxhLW78ndSEGKPRpmfqgwukKgKPMRd9xJEQUvSB5cNXLTTNtRXvDq2qGRrD2D2mWxx67pEMToC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YukXzgzjCgm8RmfuscejX8sLTGaS1o83xc8SC143rKvGxo5qTyE9PGWFJ6ijbeto29qa5xyc4cxzKT8WCWfpFWD",
  "key1": "3g6rVwr61KTNoqjyb1FMSojK3wBz2NFsbLkCZeMtmVTnsiPvu51Dn9HHRrk22fbRPZfzH2N5rPh7vYzYVLiTxbQw",
  "key2": "2keHwnhdT57Z8uBfpvwuBGFQhVdFpmEdfbttED51f2Chqb1RAbXuCDZKUZPRPNC7ikRTVr9sEMv14Bc4kqWCsQKX",
  "key3": "EY5HpW11tJhg8YUgB7BWkhnBmfQwehVLrDX2xfc9WkXQihbqaAKYnnJk636mbm48xWQSeFoAZLb33kAYRGXxR2T",
  "key4": "48on4npc952kdwPWQDaZZ8e2BM5rjVRRN35MEfUNEtWt2jNDFdUY2x4UA4beycZxv9JjKsVpxryk1k1Gdhs28QsL",
  "key5": "2VQffKY4C2g489xhTSXKwVaea2TnTKi9jjCQHkTUXnd5ZvQp48viipvSwVKStHT444YXzfLyuUesKCTb1rfsBUXn",
  "key6": "3cdbGtaYuJnYXEwbwHM9NbjKeuSKfcUHVX8HzZcjYV8jrSJvHu9oHZPgt831WoAP5tYXaoyigo4qWXmmDXzJSMe1",
  "key7": "5AjtNo7yrbH2hntfE1NmTQ4YJKLPayohr2pWRvADjwwTMtHxiKRmRrEDbyk4Y8ZUFxcdhuByijgDbJPSNzpvoSdM",
  "key8": "3nY4kTbkCsPKi653Yaob5jTcKwUWKuB4KuKHEYU921i7oG9poB72Jj3mp8JPLc7vmVkQQRGtMNDpD91nqdmmBZHA",
  "key9": "2x9WHKE3GLs7CpYpeSdP4kdaBLP9WXHnPYG6d4XZM6iv2dej4tBLFySMkA94qVhqcXQ7LSrU1wTez2ReTMBTbgbr",
  "key10": "38ZynSYQpYYp7aqnt85Uzw2f8ZiEky23X7nSKg4rvAi9b47XcvfMtdGtCnxpudaXaJag7JfKgFYud1oUkoUmCasg",
  "key11": "5QhpqoeJ3pdrmFkpBf4dz5UVhEiotcjmoVhx8Fno9Hu9yvNPnPqivDmx3XbPW2vMHidvgm8uUtYc1n2hVrzhuhkf",
  "key12": "5X8XxjPGatS7enzxyT2b2aPJzacCzeV7iBMQtTXcH7wMnbByrdzcEgyatjkkWx7uqfzNDCVWKXnNPaRR8aLMgM8k",
  "key13": "4iuT7hLybQqMPBojpSqtA5DzamHWFj6bsUW9d2xSpyxAbuGECVU3pVVZokJXsr2bYrBmzoV1UqB8jJHtZNnTtHYW",
  "key14": "A1cAwdvPmC4SsfqeSFqLmqciKpT1mmMHy1MzasQUpysvVaQDMLE7LTskZmU6VgEDp6vkkFoV2MpVrVQeK2tyX9h",
  "key15": "32nuE65knqbHdHCPiRbn11qZxghBdYMtGTXR527UPvkw1cKvrUbFvmA7YpaBPidzFY53G4mfaPauVXgDjdGmod7n",
  "key16": "35HQHC7YnweSdQXUst1CX8XVPmkd7p1g9QEPzcDXFTzJ2A1rFMEgDrz8eMLJfzUyE6cEdvnREZHSiM8EiF8kTjw8",
  "key17": "33a21whWPB8oPkEVoPZAKKd82Q5Fe9fDFiT8nXBGJNaKCzTu2npC3vhNdVW1ynA66egGAHN55ZkBWtgUBCRjBPsw",
  "key18": "3ypcEpL4XCSPNwEXFWoqo46sggba1UDoQNMfCgz7ZDGYUvpfwvKbJABgeK3MHs2arTQG4evzVvPKGNeb3bktmZpQ",
  "key19": "5BRb667VQnK4fXEceGv4VCoD2NEcyqGKoidDi6M4gg2vDEv5LNkxV9TdX6RybygEzQBQYBN6oJcvsNXr7TBavjnE",
  "key20": "5WuT6va8WUEmKJRu5fvuKiGH33RLRiHMa257bf8DwgWUB3YRiDdsXfcGJGAjgojiXYTGup4ekEEuGsRCjDmN9Z9j",
  "key21": "ErPmZhuuEyiwXTXoQSgM5eyKXkRDg58j59ehFndamAJTRewx5af3amqA6BkAFLWcvdUSz5BQky4pu7RA3BhvyhT",
  "key22": "35k22Ei55GU2esT2agAMjC5sDojS7pRQi1PLEGLDkxBUE3uBzUBsM7z6AEvT8BjSgifGu5pQNrMwPjYzBCWpTFr2",
  "key23": "2NBaS135fFFhJU3HvBoh1TV1CsDShtSZS9cRm58VpA4GhC9snSgN7pSQNvSiRzYQ8SJ4WxRzjCoEEzoMVYq5YRz6",
  "key24": "4efk1UeK3xigU2iN19AGtTZJi3nDQm4GCnmTfyqAQDs9BArzbPSg7Rj7fAW6MXQVZ1k4p3U6bt9VxU2ojTzyCsxk",
  "key25": "5zitPme1wPt74L33c3g7GLWz3qe54CJFjm5vr5Xn7x4HQmnoXhitANfwa14u9h3QTeLDbje99aE79PTg56MbaEqC",
  "key26": "31bYgxVFX6APLTsdEb8C9xJrYtNKb8DctoEQAUGpheusSt7VsKw1th2kkbz8XhJwerr8kETqbBhrPG9iQ258gZAQ",
  "key27": "5UNrZGyg6CNVrHSyiTs2E1tEhiSEEwMwtVHkA34Qoby95qF6FNfGnoCMFSF8bhhJWPgB4AZewcom56GaonMbSBp1",
  "key28": "2t4ZkZ4zyLS8Qo5LKkRtVh7nRJsZsYGiM2V8izDY3idcsQW59gSqNhXiKQfszNxedqCzwbhwGySJ4WkpMJatt1Pz",
  "key29": "51T9J6noH2MXJXrjyASaGYCqjoyKcpU2ZS8haddoo3SFgPuXoeDLNLAvTRWQZrYJtP2rGKwp9XcgCvweC1soCoNW",
  "key30": "2NqZA6jSMacGyB64FoysDGiLHEG3cv7jkgp7FTrvq4ap75D8vZxiEsxP3kWKNwj2J7Eso9yQ3gGXA6nxKvbV26As",
  "key31": "3Ap69uBJQmU9v8FLfaijc3R1qY62vmuWvy1u44Uuyn7FfiZPtSuw7JUT5cZ99GTQWZJt1HmtSaCgtap7heAa4cy8",
  "key32": "2sRbCmgzf1iosJZ1zZXLd3RpiuWFR89gLyMnjqh22kUuy7QpH8ZahkGhETyi5FNuHtwYkDSJpeGjCBbvUoxLUVGe",
  "key33": "3uboLmKQ77HJ2pVdTm7xXWVvztVaPSYeRcpHFDS7zbABm35Mofg4x7tC1EyRSZ5Y976NrDbD9DfJT6CVAvwabSZV",
  "key34": "3wsLyhHUXGp7jR8JaRyBehWudg7XpFuyrCdK7Z8kwkZdLBUeEpq5Mn3HcsbZLpG8aNGuFs18dZAZHNG7m1AyDA8p",
  "key35": "45TRPS9V9Dq4XYNpBFT9mobkyHx9xKmvpES9rnriXieQi17JGjtUaeuvyCM9zTsHLxwUQo3fsXuhEfTD8GBjhHb6",
  "key36": "5FtSc938NwUrviidgk3eMc3t5jtgvgAeJfXuBVK294u2vAhLPxVJaQyebV1bkwejb6PWDzYVUkLNJyHvFYaBWq22",
  "key37": "2wWCpPgTXpShjejs73uasU39zj6TpZ39koJWebviCwLncVQwRNcQKhkH1EbkZSTURMd88A8C2UuwbuNsq6RqZ4YL"
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
