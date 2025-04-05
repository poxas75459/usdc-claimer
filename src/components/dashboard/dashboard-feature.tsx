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
    "2W5hVyNjRJRy5YGZ7bbeUaxP3ujaNmSqqWYUL1XqDUYVXqN9XPAawRAREtgNC4bQdf2nFKvrMvp4APgSEtbWL5ap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U4nZzd9h8fRZWouGmTQuzeaK5p7vosDusqw1p3e4DVsvdm1z8WbRhHzRwqe89HwDSCJa3k5JWKkKiWeM7zgm6ec",
  "key1": "UtwmBLdY1pBt6pF41tFFiqx6zcRkuFwNWK6eZddbNb11C2BHvX9fxodTnS5bmnv3k1w8rHKgEexCupv2avUB1iK",
  "key2": "3mS4EePsknQz89eoPdJWDJu9oCGTDakpW1zPFmVvab5eA1ViRR4V6jgAPGzXQDiPrsRFXUQudRw6wybm9BaTECHX",
  "key3": "5dxWvZX2XRrij5UzqWxXvoSukBzTDERHLoPxpJugf4KfXhLqgZiAJGbWkBZWpHj2gLQvHCxkvpejqjZKY1xemBj8",
  "key4": "4mBebc4ihoMdZMsEtTbeiDHjr1iLUvnXWfoGsG7RMnDEWkR3A8D8uPhXBuTo3NcL8BBMRdC3pAoxvcrZYbGuVwdz",
  "key5": "5q2XsG5XnFSfsMx6Uj5YF9aq9W7GhSwhYVMxaDnF4Kr2p8heqsjdYPZCAkLjPk7ZhiojEjKLy88wRUWet8RguAXF",
  "key6": "4yx7Z7YcoJsHFC7avEvGrSp3ArdTUew1e36Q7b3Maihtfm9QJWgPQCQbos4hphtZmKZGfM76J9L3KF1tsSWAAePt",
  "key7": "3qEZPvkvc8fHFuMhff97UZNKKYQfqFLREYjUWYnzB5vVEproAm63yYaV3PdSS4SexUbSwzvtFikwzXP5YrEcWkCx",
  "key8": "2ktA1K3ttGCLSyucrvqS2QoJYodKUErDSoYGdd5NkvGht4xfoSb1F9zRhAiKCgHrp4158kxzcYzvTxFXrr1v8S6y",
  "key9": "2RjLnvLZTp5X7LDV5EkKhtFAWgT5e5U31nt6d7zH9Np4AhTeV8FPitgDqkCc33oKzHb96pVyAtZBM3yzUb7MGQhC",
  "key10": "ZgfyhTg1gUF6z2vydXkn9uwWqCx7a1vum2Aap7tSg82J4ZRzho3yT4cEWrja34uKM1Z6uSr28kcW3iL4SAX8RPG",
  "key11": "2gAwPVHMLv4zyxVKAaXzmWqBaPzqtymhjQt7WsjtxKvXGURH9JeeXPibfZvRNxo27AdGXGJcuHxF1ypSLs1Rwudm",
  "key12": "4n8nCi2QSncCyE3AL5gK4b4JHAiX6TjjP3SgQ2SG89D3Gc79qzMoeVMLjr4BBp9zYT1KhishhCzP1ktpTS6W6pCL",
  "key13": "2CVw5AArRkZMEKNEe1F4bMyhRMaAtks2dcj5wDhKKsttBmdoWGGArZJcujCDXVqj3zSqbtpV8MmX11xTcZgdprXZ",
  "key14": "2o1a2BCUrMXAPuAPnHa6AR1n1VuEChDGWH7NyrRiSiEgXfV73J2NSTpGVGBU3rPobfCRmrWJR8fewYmWDrTcngST",
  "key15": "MpNweBHfyrLaVAMv1AhQo2krzb6e1jDF8LTGdAU4wPX5bNA4CUhXqr7Wk6cWcR2G8GVAoM8vXhTqsrfwikDQXiD",
  "key16": "51txDy6Xe1ane5ECzry9E4nTbwT5wsvGtTSFkcUsvXGvtaubA73c7pia4Eevuh1FoQ9WrudvZ9tUtGFF52wVFFNs",
  "key17": "3bcM9qLux258nMbyK2eZwEwppkB3vSGJ5G1Bv4KB9c1VnGNYSNHH3Zpin1ycXiLEroJo1dc8Rmfm1gtWTmGWAQrN",
  "key18": "5ku1KBWoFMRSEuzoCEc6qyGja2AcRELapsGcwteP4DGkPWeya8SyA3uVGSraGkVMCPQ6dvG71yabcTQmWwRbfVbp",
  "key19": "2QUvWNRYdF3f5sdaGpkFMtoM367wigCAdzGDCrhGWMTtScK5GSFhGTcneWzVFmdPAjT3mEv63JHnBKZz6d2Y7oya",
  "key20": "21HBCSfYsMX9U9tCPqHypGMUUzrkRKomppSsUDcTG5JWgbV9GjCBx7DmRu52UmZxbCKgkx7mAVCyr33taoD4ZM7u",
  "key21": "486x65KtvezHU3nUqjWrN7ZZo3Vvd9uPRRcfkLg48TuPS3bV8BLeTWTuNsWjZWiTWXPEk9KNw6Pwg6dM1QjxG8BU",
  "key22": "2M2N5Tb7FqNpRhqY2RGSdKP5TAvsYRhAK4XH9uD66G2UNQ8EcAFnJzrpfzXDnTcxAjQS2mFHrXvTkMjGmuYhRGdJ",
  "key23": "61uJF5N7QyX9Uzabx5Jf6xVi1FNqp7nLu2qTnfVqKDdnjEkFSpGQhdWPPtBGtLtjTp5LWeobmqXqcUUbFwU42toy",
  "key24": "4b9KQaBRr7z7FGpEm6QW9FbnjGmTzqYpVPgUDdcPUMhJHw92iqfx6oYG5zQx3izsrobzDqxRrrMkhhGYBT6du1HB",
  "key25": "2YCsxgvPiaTJVVe2BW9Do34NsLidbo5r74nt9DqhdQZNwoNRZQvCX1VMopDYPux5CAdjKFqLBwpK1gXZGNAQ7KHa",
  "key26": "22aKAGAN7pziKPYDSrkjc8i5xgj3WTwnBtLiUZUQRzrzYgiNk46cgeWqd7R3jag8m7GWftbbz1zJcBGvapqyCPha",
  "key27": "5UAjEXcvKaJA7q7yEttfbDo46SHQc45Mbz8HZgh2FNAyEYCwWRBU8DPXxRvPvZGXgPWhuArm756HtktUeE8mjmuK",
  "key28": "xJHQNZm6amk5qpYzR8kYLkYrmAyGaTa9bEcpKM8NxPrpuw9ndPBFypRWbUhXEZuYQvp2SgCCPsVxGZn6vsazei5",
  "key29": "2p7HaaBsyRifLZP5uxEfp43dLQN385eKKtxmuTT4GDTY2vJmnv763MyJBfyVXTdWuRBdqJpTBbeEP1KjuxiwURym",
  "key30": "36hXjSwrN6jhj2yhvALH52qSKtn1PsSKZxordgJFw2b5ia3tRJyLZEjxG5BiuFUHbwBi7ZDo5W1qFLy5ig6vQeS1",
  "key31": "2eymH7ThbgpmsoKzRh5wx7t3c1KtHJzRUo7kCvDNj8R91K6zS5j5sB2DZ1bGT1YicP6UJQsKAhFtNFGeZCogq43e",
  "key32": "yorsEfrsCWFdNhTpQ7tsvZPPBXkPT7rNFefpB2KdCXc8XCRg951dtSu1bj58cq7yNrXu6Wy4xgTy3DUPeNGGpn9",
  "key33": "2zyD417T1DKGuBnsp7VkWEDNrkk2kUXuQxgG4hF7PB9P3sdogeXMiot1aK1PR4iV29tBbWVz8v1qcK2q4v7pn9ot"
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
