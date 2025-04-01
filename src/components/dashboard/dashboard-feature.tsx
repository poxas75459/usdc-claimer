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
    "3iVT1um1hkcTxmDq1AzqayAj9LK4ZMEmJF9e9AqwteGywdgcT46cQdYjkwnARvmK1u71vZxAQhYadonDU3BjtqDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mbdxWWeyauXg2jgePxj6c6GcJyd5vf7eNqub5wamp8Xt2PV2uXbyWtqiEggMGBiraeuenKZdaZGYtV5F5CBET4t",
  "key1": "jeQvMjJntZRHYptsj68qBm6M3aBMokgJyqRiMRVASn3Sc2W5vuhyfD3fXdnLfVJuUyqzb2jjhvDUgbAjmf2j9eP",
  "key2": "cjzgt6ZRLHfAhU5bP2brTyK7bWoufLvpWvZUx27ci25MJRhYmdziKQRkydCWrLkzidCV74RVDLJNLMHhppcb9h2",
  "key3": "2FnQLcjJJSJN8goTj3vhJEUsXPGSLAHTovYMcoJKLpPTmYF7asuKMJkpUwNvcYXZDUNvyfXnXDEhgn6nunAZ87Na",
  "key4": "4hNwgepg7KGXQPpZqdnBYBjEoDseunVq7gJf7wi2KJorsGYqSAokFcRofbEDisUsv3bwTJWjYrPgRTFWe2L6CE8j",
  "key5": "D2Tgnu7A9MrMtTaz8v1AHYgqAKbPWWJu94e4jxyB88rj6uR5B6BmKmcPWkvX6nNiYpuZf8ZmGXXwaeWkqTZ8xLd",
  "key6": "pSueuUqewLKs5sFZ22xdekz9zpZW5na5FqFSbqm8B8g5vvh7SEzuj7PTtYycacWiVHZaFJSG7mUBZ6Njw8kukr5",
  "key7": "4WcLoN1ip25MADa3eB7wJwLsEwdegceqSqvQ6fXvCDPLS7GgKf7GpUjkAiKv1xzr7hLvGd2euV61a4avfECiY7vx",
  "key8": "4Mefp5SnyWuMAKUQEtTy7nAF8MAB7A9ejFwYcC9dskvpu37feDDfZii5z633Wb3J3DRSwt2DCSCFp4M6SKtodwDo",
  "key9": "vqVJADpXM3yZkhypVe1QxLSNohVtiPMuK9XXoKDGi1LzTrm79xSqHJWmZd9f7k5V9Tb1ioqzQsR48GkskgmHcN1",
  "key10": "4gWkXMUjeDmTPXWSMtjg7FEWAqix65y7pK2MnMR4Pk55iRx4g1d3hV1utA3GJfP6bJ6XvKfwVYExTUAgRNASfxhd",
  "key11": "iXTPQAn6CkBxE7YNXdi8H7tYdfRJJf1215y4BywQ6b6R74T42UNcSs6UeDas3G5L5HxoGFAAjvHFo2Q2kQmUEmg",
  "key12": "3qH6SWN75bprDNmC1kQsd6eWYpif1DXF3Y6JcedXwf8WStBNWxdKtBzo8T7LZJaE2uGBturFENZxgErmdFbHmJKk",
  "key13": "2pjokzCuAf1NukqhLeXo6RzWxoVjKvtkv3Euu2PbYhbHQf4ZjKw1Fe8gWkzJ2ckcfWCJb8MroSnJDDos91DSq3PC",
  "key14": "4ANyYka1s8Fw8uLisuF22Z32Ghv4REXn25RDezqVhxnDU4zzw2LNs1cPekkYVueqXS4s37BGFov6R6Xai1CREeo1",
  "key15": "fhndCLBrrapaf4cPYPtBfkHrjN7ByF455UkcwkFMnMx7cGQRtJPJGWmf7knP34542VgVXVKJfGEe7KiQ3z62cR6",
  "key16": "izVybgQdwVc8P7qiDZ2CmN3GR5iKBJtzFpJo1yAYwX2YXq2MVc2j49Se14CLS9Yi7gQE2yjbYUEo8P2UCgymDdp",
  "key17": "5aE6h9BQyZpWEqkiPA43YTBZHpi5sgZgMXhKi2EG8kZgPUR1ArgzWyyyN1ahSAq9xA5xJuCHXi1Y3nmKdYfqDc8P",
  "key18": "wZ4rmA9QjF5GDnWbYH5NdqokqFoVbc2z2HFEqenuZXMqqW9NEsNDDoyV4wJfS3LKtp4xhkmqPDSF4qDzhUsNXTa",
  "key19": "3TgsZ6m1B932qt8yqezqcVtYimtZEbbGnbXiPB7WKLCvbUwRLmqiKPwNwLKxDjDBUDTZfWj157aca5UzW96oqE7c",
  "key20": "47AHPa4eS259BgZR6XjazZFCaPMMN13xVgaGu39JYb4ee5cVo7ZYBgVFNNgb946afknkBgdtp7EVGmBidyXi9sFk",
  "key21": "UJWudfnLZiV1LJYQ9PaPY1HxDE87Lo3Etqmtw7Mq4Y53Low6tPvgh1ruBiuJkwYF9XEPJS5opcGBc3CQkuoBrp4",
  "key22": "3omsij3d4ithZ2LHzJ9G374mQ6dDpjK2mfn6qiLaSmy8QVHUmy7gHudcM7EEVJa3Re4bdzZDxcHH4sbSa1qafdrJ",
  "key23": "3TtuSc3wYXJ62doyaj2TDJKBaJEe9PC8ViSQXUL4sPWdVXhSGfHNJ9xiCu5yfU8sApun5uA4PXsE6uhfMeM5f3eL",
  "key24": "5fdbRzaBHcVRYx1o4yq7LNbcT6ewvqM5ukpyGzC4nU546XBPiwTKVBuMhbuVUiemuk3YsT2boXVUd3NzCQ8Lz5oM",
  "key25": "4T92v1sa2K3JhYKfhqobs1RNh4KWZBCo9i2X4cYAyboZJNsKmMdwuzseCFHtDQJXLAN2Chs9zdt8sjToQRcKjs5Y",
  "key26": "4TAPqJZmRSmtHVV8FtnzaNVbrvoYmewrifwnz38wxZbzpFyodGYXktPvTJQK9yZnboZProGs793jzei5qWYuAAP9",
  "key27": "2bDqVmSwMM5wEyEoKEjBEKWm9tsDDEpm8dFGpyy8ghFikqJzoD2hmBCHraNQQ7SCzqESPwdrFmEt7Tt9PHP84gxC",
  "key28": "25CRtj6tVnCqqJ8jJs9kfWZzAeAmj8iRoymuvq1DyxV6zwo1Hx4xwT5qrwDg8m6dshGPGumDGVKhhjgxvbPcJzBe",
  "key29": "3SDicfTeECRWzmR6RqwDf7VzNxtW5W2YW6nUcqr5Q9PgfWhDg4euijzaPch2Hic7GQN8riRWqU8QfXy8evTtJDbg",
  "key30": "2XkMcsJdx1sPxnffQG1NBbXcb8sXi2G7UE3M7rNACo2jQadD9ZA2LqXe6dTD56zFuxyBE9hiSY3HSTCv874SxWrA",
  "key31": "2aiaWyef5qtw4HLN1rW3s7VPz7Eujct5xU7SKuY59NWz22UF8oyNc4vwe2bkjgvXxM9X6jHgtDBoEAXYN6B2R4vX"
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
