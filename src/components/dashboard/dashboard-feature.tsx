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
    "5UPTuZZUB11Ws7ZM2iGhXkRKRMEDCFvK3hFZ4UWQtShXXgVUjgiDVS1KehkpnqDdMQQKubngiagP3xAYj4VYX5pB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B8RCAa5d5KatqVvXfm51fAxNtrD4M8waa2LEAYvm2nzBUjC8vHRxtRWqvtpXCWbuPS39yhSkJXA5qr8voMhtGPY",
  "key1": "5ThSEbUxjeYSjZMB1DmhSZHQTQkNqNmwSxFY5nf1R6YDPZvYZ9yt9qanPCgMx1mhtsat7oist5Jsa17CcWau8ePm",
  "key2": "3bJxSbago8LXYFwHuaEabCfkLj7N8c1M9xLu2hoZY3cQVDDmGRkYjvaHkTGrrbzP9fHzYqffrGkpbDFrxEe977EL",
  "key3": "3eHmW6YxL1TgfANem9GQi6KMAC9ZHzQHimi2Wc9shkPo4etgVcMQbwwgufxKgokbf8rqRoBHvXmwHoG2htf8CYWc",
  "key4": "3KHjsuBcAecL9BwRWmDEJdk3sdCfcJVK8oYGJH5p2x8ttND9JhAWEXji4XrTQGWnmWo7FFKNsViFnKxdA6P7Rnn",
  "key5": "29Ji4ztxM3BKd5VaYdED2FesuwPyu8YQ76QGqB51UgrQ85iUPuLppPLE8Q6PvK7dHBcqtKmPtHFPVgmHZJgpHBim",
  "key6": "2xpkRfCj4iq9kFzCj3DNSPh2mt3LXcCgVWQovH1x1ZZRubA2scdwwYXvLPfhWP4SPFYd4oXQi1ySx9JTxLpFGMwh",
  "key7": "5NURUopnzBYyeqh9Tb1qkc2TDbCjktzGio1fQpnPJnvwp6or78348parb6DmnNrfd8u9jtVPQsneNpi9UqfbTSsh",
  "key8": "3HdaoDoKKA1vVz9NBasRmeJ9f8Yb7sf9dVStcSuJGCGGoR2PZb4faQK3dG7pLN9bK9XdhwWXdShPovyZQevPn6np",
  "key9": "23Cc5rrEhangfMfQ5gZ4kYaXdtpkEtvMyyYkeZirag57ZZDRZPk264wxjJNsN8N1F9RTh3bGsTYp7QzdcuLH4gxD",
  "key10": "21cACHKiYoH1HanpiqDpscVWbGAqEjXDibm2gmoUTvtu7RFqTjgL1wam2jhHGB6mMakwRKfKvpFm8pg93cumE5o1",
  "key11": "496757Kiv1dSwDbRxruNWxSKoBMeGCzmimbTaWBs39z18hHU1J6GkAHeQnyWhzQvz2J1hGNGkLGCs8C6qqqWJQJo",
  "key12": "2aX8NHrCvEDJ9zcQacDs1mcP9PezyUpspcsxW1aaB1U9ADYqS4UFCVCrhJ2oaT7XKCigzyMgY5TCcQWF6rGc1zrf",
  "key13": "5ZUw54fAtiEBUJdHQXmhEJ8QyQVMSEgvXzbLCLaDbX2qGZRLsNNB4bKrmR3jQrLZfBRD7Kin4DeZw29YNgsRHFSp",
  "key14": "HbXym4bzvGtPPUxSrJvwRs9YEQKR973puykZ2C7QQFkNTC79AhPNv2y71g8uqNtvvdbwszTy5YfWAL3Gg7GEBFA",
  "key15": "4WGvW5UeLCzcXfYp8taCSJoXDKE1zJeKdDJYf8Lhk1MVetE1XjpnAvxpEmjPufmtMNZxYCoFP58sU5TnJ9vefVU4",
  "key16": "3wwp3e3Q1Nm6k4vEzEB88jUJcH36UQpMzY6nZ2W7GtDKTZi4x436dswZBvxj2B5h6Pqaufo1af2y3fVCPPKuVu5w",
  "key17": "4P63f8wPGbWfqPbQtAqZDdVE4xiKN2KZQ1sgT68fERgsqTxz1sYJMnV64AVj9XcCXPk5bVh498hgQbMjVptoLFbU",
  "key18": "qxiLS7QAGBaBmUtnpBcz7jdiVi7B2E4gXh1ru9u7vMwsjaPdzkcZG8FKKVKkyHpQZDWo5mEqH9cCM69icHh9Jfw",
  "key19": "5gwkjmgch3rvg2gd8PkdqJzk82MuESTAVx3a93Fvq7phg3KGipXMPy1uf8Jyoz18JCSTznfQuvjouoW5rnQLyEC4",
  "key20": "2xg6a8HVxzahVTyAohbZ5phe77jYHwy7BkBgRPcjF7SH7oGiTbxhgFuv2JAwRhsHTp7rMent71q4r4VxkP1iAMPk",
  "key21": "3x3xwqBGUnAQGv4TLjM34JNXjZ6tpQepkgpSR1UHNFjX65LbWP8Tc7GW6B6ukydhi1yp1AhuTDDHx76S4iBYTnKP",
  "key22": "SPBGBQa9TGQ5vjvofSUyDx5zaWaJkQirxosMQVzJAciKyutByegScPasc4FuqndSAMHLGYZjPxjk6VNf8BBRjQV",
  "key23": "2ZQDHsJfCdbeMgoptkDYs6r1dxqpo3wvd8uaYo2raEK3qNBm3iSXSdguCPRJAfdqAorFhcD4qxXtYe4WcPUoC7Nn",
  "key24": "5M8YkZMg6TS3DacSeaDr8s7qGTusM7dfJ6FWR8fgHttdXeAWKTXAeFRu8WM5pK5jNcqxXrXHYhY3GfFZu8jGVu4E",
  "key25": "2qAS9thK4ZdWNKzGVzMXndzAaFK9yBSGPabXgRXRjAH8CEKH5BVZkxpofNrMgTip9a9of8jjK2f8aeZxeUu3hdDp",
  "key26": "62DYQgThDnjPWDdVUUuAeRV1C6wuzimDpvLGNN5oKpgAneNpBa4woHDCwRsyhJQUmfgCD8xcdQpvUj3wToschMvE",
  "key27": "5bBzg3zFD1SSgXBegDxpifGYKj2cmvRiFYTkFFt2cEpwiUPzY8RJX7oXAVvG3RkUCWszJrJ3AgkM4whEWBwvihAo",
  "key28": "NcHXkJXqTKXrU9x4UxXioxZMYvEEWNZQsxkeNtkBe14zvD64ZWtacpyHRnCXSUYdDFpoLHrS1zQnJ4g6fsjwG7c",
  "key29": "59qBcoEpgBacQ5zgJrKcPJR5a2oER8CzyZ4Mq2DH1efDgU71ezCAgckMJyoMV6bBaxesKtTuWxrueN5EFX5s29u2"
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
