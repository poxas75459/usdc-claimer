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
    "5KWsY2nZdiVDdq7YRcG9LeGUSi8QJJcLPirsnJg33bDE9Vq9tRc8rUuJuqzpq844jsC21GNsspyXKLUPVA7c55ta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W9RNWRWeKVfsyWMfzPiLD7sb8exhMLRcRjcN8GgvL1tA7yKM2tBhyXkFNFS7wSnX986wmkqW8vUXxEPJ35KWT1r",
  "key1": "5xs4YjTWphy1WerN7C8rmpV6VUUGCk6yopTcEsYV2tXvwJMLUYfTTpX5PPNfYXLS2VXRgv1ZNEfCLomkv2r2dHYC",
  "key2": "2dZNfWqE2TRkPZ5UCWW35KvGT6ocgxoXLYxregrX5ZEjarPbMzyq8DEU7NXocYgXBwKHhieb5nq7JDPzhhCYzbHt",
  "key3": "4ibxr8y8k71vNagmGDwUxeSYN5xSgAPh6QPwyiz8L2LiMt1cXpVwiPDsZPqHs7ybf5UB8uFaw353pk97hoKpQp1L",
  "key4": "66dKdyezHXXupfvLkS2Ze71s3S2VBh5R2HDZzqy1kdE6Q7ELskHch7Wfmm1qYmSKfaxE3SLBvki33FRgyVXqXLXA",
  "key5": "RuWN5wVVmkE7vpWpCyvG7ZV7HrTMSfJZVF3PC5EvtuKfowvq3ZtCZGt9Xq9DrDUWfMdTCsivbsn8vXaz6gPk1rB",
  "key6": "59kk9vPPHEkuymHw4TAPzdk5C8jKaRGJkCKz8a7T2rjETQ7FqHqdQsCN6RtkrkHiKzqdPUi2H21pV29koMGmdzBd",
  "key7": "pqo2s9yz6BWmviSYmb2hzbRUax4gtBHmEuMAGbXDw3SV7jqoB46wZNzgsVZUwd3gpXw4Y1xzXdbkjRWH9LA8zPM",
  "key8": "2ahC3A5GvaknPBDFZHrRUvd3MU9b3oBfirPFbCe73p4oRm1BhXn21cvVmKhhhJspSsEnzFGVYmo4jDwx8ATCSfsw",
  "key9": "3qjomqRCF8DzN99TZnvZgYSpoYiKHkPAccwuSdGWcETVUkEf37UNhqaiRRLVFGxnqGZ2rKfNesoEHo8Dv4ZaaJ6Q",
  "key10": "3MXiFEJ6PLjYcTbFfRJfKRdBUiZkXe9v32qF2qsACLGxLWB4wpmxAkx8QtC9ZHE9vzus5Q43ch9AAYq7ctqnva8T",
  "key11": "FjtvhixaejjVwaQpLFQRFax3bX6QQ5xsVzA6os8piGH6HXmnXkHAhzoAbBBVUqCYPVua45b8GiexNsk81Ks1c6i",
  "key12": "4DUY7ihqqPPWPzZfAzzZ6NdLMWkdpi3MFPX1k49jfhbKRbgCmsTB4hD8Cqzw4dcRF3Sg9uyb6EEeVnedwWfguPKe",
  "key13": "5VJuGUwwyyJcNo7TzEoU4q79i2vaKY7opW2UwjEmqbYWoaVWUJhWrSiQN4dKZvFQcjM8ULthRUGi1tVNRXbXhYA6",
  "key14": "4PXHf1hJZN5Kgqbpfwj3d4zKKQWsVvMjXSrEG7cCZEtbJ627UQY7whjYxAG4mCwVaEzNc3v6uV14QAR3Cp7kjCY5",
  "key15": "2emg76mchVHZYp8TTfi5MJZhH76ewNdG43G7xRzKMwKSPKXEjivPtVF7qf6Hga1hQXjGPuRMWc7cvGDReHjZZh9s",
  "key16": "4b5vFRXqegaVrmfrWXDTjqa1Va7kgkNDjhjyuvzBMk4zpeWq4FddbCpKKkrvoW7A71CTofCsfxRKnavEGiT9hBXK",
  "key17": "2xcLw7T8gqwuyoZvybcfbe4bTox22F9q9kTcyWCyRpQuusimys4HNF5VntmcP4kdr88BjRtKdqCuXXubLHb872M8",
  "key18": "5aDLir7xBNUaDqnFAMRsXHLn3MGkRneXxJcRHiie75FRV8CUbAazgfjqW9geKu7yccHFZxnMjp6kGhc1dU5G99NA",
  "key19": "3TjbTE124nHXmUE9FwJTag4xvrd83uw6Fm2GsFG9TPfgsTw1bpYEwffTeP1DsWr7iPLgKRhsHngGTk6Bd5i9jwhV",
  "key20": "o6WqCaZRnp3aNz9TknGFimZ74VqqJftZRh5NKwGGSb2ots6g7ZW1J7fFbuzawFdquMqw5RnAyd9guQckkfydqMr",
  "key21": "5jQEtFVoqcPS7qY7zXWYcJRkSaRxZNtsawXKzDPFEuFHKbKYdv4hDi9qGR2TFphyVgXh2tjSJVzQ6retQoWgYGsK",
  "key22": "3imgwjTg1Psz51zj1ZGTpSSqbjXdJQRaGYXC6gZsBex6ALNtU5XaRSKAMHnG22zykx4MNfXw9v12sgcBPbHF683o",
  "key23": "34CVG4bmoDoJBnU9397MCUdTc4VTFwJqmaPgacUu45fWXwwiWfQqHsxom6hpXw9fT6bgqcQf6YQwfYUEwYDsv9bD",
  "key24": "3WHsr5XTusLozfFFotbFMhCy5AjXNnYwZcuJ5LT9y73t9TUoJquNY7XFEhdNFfmMaZM5DnZonHFWs2GWXjNbZkcX",
  "key25": "4oeeNfGeiUKV9f8vFc26npumSiQ5s8ApGmqf9VdMeWUwDqVeNs5UmRYqKcGSbwqUvAze2bzwy233sTHSnyoDmh4h",
  "key26": "5SRBxkEBiRV1b1ZXGdniVfZYs9Ei6EMUaJ4KFSyGqhTNnT3d4LERKuESoshYVaNnUfov3BgSNVTjoVTVEreKxsiM",
  "key27": "5ZTaVzHjy1RKSmKQRjr3nS5Ew8JTMjcjiipAK8eyFdiubN5ryDbKUD3yAbZe1RJjDryAdxgMsxrkhch1xvXTSJgE",
  "key28": "66bVArzurfzFHpH8ycxjQWruXoRzoGbCyLy4JbmBxS1Qug6Zhc2uL9Mmfasb4UedJ9HFsEza1u5bQG8xo7ygyfqx",
  "key29": "3zCgyMpukuexzmaCMmi2oCTDWnTFJuNDkq81JdR9hfWq98pQS5RQUkse9QjbAQ6kJP3RMG6UQdATF1kY34svXiLP",
  "key30": "HkkUjqH8HrtvvsqRvzxEtW7uM4TJrNgfiiwbG5cWpi1a1CBTBTwm3W3wseTqvm8BMgcYeNARnUDj3AWxUtf1gRa",
  "key31": "29XpkqU5JHmJ5yPd4xSo1oq1eNmV29J1Z7WQEa8XeazaHAmhrboWZ2QfqUGqBQXzJNPvwboYTcnCnFbys49F2ow7",
  "key32": "4w8R2cuYGZ5ayc6Xt3onsdf3efLwDq1i1vxg2RDY4d4XVHivevezKsZvQsQs8eB3phKe4seph1MLg7YiwsthFLGw",
  "key33": "4sCmrJYn2xZU1dtT4yR2XAqAkdPdMs96zEjsF4e5Exsqs6NtdBVRPy8VuNSqtemP4HFmhtr5rKWW6Rk2ATtJq9c3",
  "key34": "5BZwq2hXvyKLR5ZS1kSyuFxfDB3U46bYhFhu95o8R57P7iGW6EW4vKYMuK9L7Qa4nL7henosKCfFJnKeACWxiqTZ"
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
