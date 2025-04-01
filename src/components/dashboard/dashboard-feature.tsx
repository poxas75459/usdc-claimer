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
    "5gkktDQ5LNrkUy1CokqRP3XCDhr2KE8D5E1gZ4m9CaUpi2F71jhbkv29d7ypKAAyttStszHVZQWT9NmwxMfCJHvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rRnaTzMSj8vgDeoAShwEEHKcJmGs1bqDsX6v9GbcTF7nho8wWT4Xv2TMXExW45ndM1N86xN8SBBYD6EYV1cRta9",
  "key1": "kuJkTSppULpJqpwQaJ3Zm6XYHkWktaZN5GrcJRarV4GGLxg54jmQ1dGMXurobMUUjsvEWgMPzj5NycYwPxwPHaA",
  "key2": "tPRmkTg94UcBBSVQob84FEfhCP23rp5yezc566cFitiVanNVymhLnU1XrkaAVRjCu4BguwzyvMUZvrUsMeLmXmM",
  "key3": "4efwPeCB1Wgjuf2cDoRswLGRiKzyvEqNrZFWp14hdTBSxpYEZvYj5Qpr2TNd1kXbVrjDpSeR9q8nrt4iSUUUzXS4",
  "key4": "4XsrXAoFDmGuheD2djkYvLUL2E6YpfVpSDnWnhPXRueusYQ7tGzqFtRsCexiRDvSPMVgX9iJuYMPnWKvQxuGEe3w",
  "key5": "4CTrGoFaE8DF4zv7sNtK7TFyXkn1nVfE7QFrScyMQN5bn2zf7dpsZT8NrGwtbfrsyU3L6zT89vS64BLA3TcrBXYE",
  "key6": "5GYHvjTUuEmD62UtMUGFiotKmTSEM8CvqmE7z83DWGZoFB1g3HpAmY6cG9ivTXyiNjHLKzijU3Q9F6e2BAZ7Pgyn",
  "key7": "sWFD7FeRBrBqFVv5L8zVrJSJoMmji9GhM7dEaeMDz6pkSVqQLAWbyk4rxEhryNzjwTowTG8kZovqw38bUrJE6Qh",
  "key8": "3urQjXcMLUGpv7ToZ5imbTrE3cRk9jC7bwrQizh8UQ91Ap3EjRsnMrVoaEGyGjhQoNLKZN5dNHQPd4gRBLbjwJu",
  "key9": "2Jhi2cKm81HGiz8PBE6ug1bmJseewH7MQmuXk1THnLAXf6fQ1i8QwNkV2uSni2QJsCXjZuHTtD6V3FvZkU6H2wNP",
  "key10": "7ixnjN2pteBEJQTBkwbCAK88Anko9dXxGkkmq7aWygts7Q9AJXtoFmSczSh43y1mpMuDAffbcVBbLXGrtM87pDn",
  "key11": "3vgLipPPf5QATkLXh8HwSVsJpqyDRV69oy44iZD1oPpDTsLq3aXXfxNXgRsUrp99TjScvXZY5RJWcFJ7YQKmxspZ",
  "key12": "Sw9RWyHvkcpYCfufztgxK4HqStG2LP5yppNf4xVP8adTHtQzUGQ8QxHh6nvfMqqP9fynDUaqJfJj8M1Ft29zZpk",
  "key13": "2qS8DxXzCYikkvZSY5GxAkfPsZyDXPUk9YCmhFK47G8ZCxRVwcKX82r7BhzCvKBnVLw9XSRYYyB2VbLhcW5mZhW3",
  "key14": "ehb1aLjUGhiNtD3nEBaFGMQMBgqsm5MYrUiBvF9gEiUGBdneadVmj6sycLdsDaHcVcLSifrpAgWk957fqHXaY8u",
  "key15": "2NpqGvZb1hQPZF3Qpj93YKr8menQBRbYsBc271gQwZM5KQwm13rjYwXr9LGus24xdsPuRc5dg5XTntcfb1eYZmH8",
  "key16": "5K6PqN9z7Q1M6DMyEBKyfuAYWtVpbiVadQFvwLLRLMnej8t62YasUYRsgpqgpEpCUkatTqTr8tkRnHSVZEoprqjK",
  "key17": "5kSu82LAhRcdiAAvQCAxzvRLxxmik47oxopv1jq2M9okS9f8ZW3Zgdn2uv8quwHzuBdnLxiE68gRg28ak8H3j6ZY",
  "key18": "4YX5q9cjWWwzXzntfeYaQnECJAi9oNNtUhL1R6hTeGfhQSjRvyk5qJKDY6gHnzVdJZfpW7r5sZhaDQhhwcBX6rrx",
  "key19": "2wCABTBr65Nx3aqGfPUMjUznLeWs7uYvrWruNvH7NxXyEfGEcNdMexoxCqJrZSpJ6PJCW5SrhVGbJUpjJSEcVXy6",
  "key20": "thvU9b6KEQcGB5AtKVvdEpYb1Mq34E97BB7jdgARsXr5FYcPfAQ36zkxbdeFrYQfdguUUf9f7EEvcKP56LvFwDs",
  "key21": "62GDfFmBGuMoPRWdDBV81aeKkUcYntLubBxYy6GjU8KZHXpe4BcYv6BxtCsutHEZbhxG1NeJeZgaTLw5UCS7VdWn",
  "key22": "2dGqKAfEUbsdy5jCMn2n8naRMaDbbuYfS4cBGKHg4pGB3K4jWa7J8iceWXA4hRkxHZaxKnnRsiSv1WrWuMYqXcBP",
  "key23": "2TE8FqYGzL1gtuNWCfPvrGoL6wfBtfvpbpY27Bj3Ak4gVfnoQTCJPM2v2UL4u8zu6rTB3gQ9PumeuV6vuVDSmgbm",
  "key24": "sp25YUfFoAy6c3gGktw7u2VjFy9JiC9CCKjboFk5X42ar7zgmYBCdHJpvL9zDC1zPmKYsXZTbuQSzLqvxcgPBm8",
  "key25": "iJU8eXYwXYCoeJetXSuq5KXZq6WVfqB3v5NUFMsy1hAW4ZtZxweqp7aou5PDfCLA5t3hAVYHepksnqWMTWNfR6h",
  "key26": "53tvHjYMUYczsJ7uJdVWddFXKDFEEG5otD5U23MXNXXSmGPs1z1kZy65in4U3DQdXM9RoTyvrGGNWh44Rahjneeh",
  "key27": "5fcETkqVG558FjLi6BAUVt8mKnuKYvWmCAe7YbwrKLLt53mMZNxpsm5sSkDNPdZpFLTcDVf49p9hnNus5m4y8JW3",
  "key28": "2NiShf2JoLvRJo9VVHHmhsN3iKBcZpvv6YLPYovuugPZWrM15jHXD3ScBjxcN6P395jMDECC8Xjt1KD69V5PRgGv",
  "key29": "26XaL5e27vJFE6Cc9m7rVaEbLnHvRqGJW3wvzdV51GBeDqMpGsC6afttKvkvAJMG48oC5WfKhkaFfwT13fxLc1Qf",
  "key30": "2X9YmP1ucBAGFMduafuwBbQzdSNLZfuHwBy153GV9NaAaEgdvzjGLYMqs6pNruFSaF1ocqfbfUhqgZQmTz79YLBs",
  "key31": "2bs1qWSHBHTgqeSoTGPKJmqSPkcfp4oy3oqikPRpxVsDxHbmB4ERvNZ7U3aHJxFQLUZDRpbEftBYGnsP6zeKLzDt"
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
