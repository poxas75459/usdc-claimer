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
    "5HDyRuYAfkyhZFJX1m2sno84CoNNKhUxjyBzxtTKSbawjxYJV2arDLxdsGWQge7vA9LmJG218dcpcRW5WAV4w4aX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H9vv29XqDqMFydwn3z7i7f5arAqYoZ8o6gHui13Ky5khmKiaxouqJa5LF51UremwEWQtDJbaM4QEzYnRVGsunJj",
  "key1": "29ZQ3TNKQoTNZEdwYrhG8FVtwFNmW8oj13NPdCA6dzuir4nv4nyi4KLwF1dpr6BKTxBPj2w4SBBY3nL3P9mLua5P",
  "key2": "4JFk2aZ2EmziMpkoG5yCUn13d15UXNJqBhsszxwAM4RfhAUUAJJ4wV9RtVDKHmyXSKdHWVUkPrCTJNj6GS15D4i",
  "key3": "2CJAh6SyWKjRSBpCi58kTLBUFFHwzWW8KM511ckNyCpToB1aPciehER7fsFYc67HWEMvqttNFAJAhXMooqKqQ4so",
  "key4": "CzBpVt5CpXASPuj6AvyXPG84hz4X8BDnn63VkrNJcz1siCUMkUMw4rgNxpGu8mvSFGRJ5wKnwzdb4KhCjhP6mnm",
  "key5": "XHeZ2rftJfi5K8JkZ7R2byb2ytp34rRPE6LchrDJVv7tc5SVpGc18d6VamDjknC8amXZrxvE2pUx6DaUtYrdFkN",
  "key6": "2DmyZLm5DUagvtUr8GZiGnMnDtFnGfC1LQGfhbnJvWdGQ7KZU62hX38FktdUaJpkoYASWsFHBELrw3Q6b5dCb2si",
  "key7": "xWBwrfQm5pP5zRwRVNs6FpiuQUqLf9wrFUpdvynchp3g22AA9BWhMXBWq65RA7nZezsFVKX8hmQqk285wpoTUJq",
  "key8": "4wAvL6tdeSe7SdsvAMPpAey8qrHiGNGJoGrtkjj9ZAaYznuAHNsxmBxba841zYkXrNf6EuZrK7gnCrKhZTNsaAzG",
  "key9": "4uMqTjidYFxLKApfu1CT2grAVWQUfWWxcj7fKv1858YSsTMbs7RbAuCbVJA8yNtPp7Dbu7Dq7YwerLnrrAMRrPTA",
  "key10": "3wFg6WGS5GyarMqnsSrpuXdKo76GCfpSS5evqz9bLuuv77DBMaF8Guq4vMC4Y9aVVqT46Bzwm2h7XeY3Vbw2Mb6n",
  "key11": "44KAY2eh8RzukjuagYJ5pxzsQEUHfR9HUXm4k8ymLtv9icMcK2FyfKbDtNjMzz6RAR2UKsLcYy8NyPJKEaKRNACj",
  "key12": "3Q3Wd6EAtFTq1hG4JNYYmbgwSrPKyNLRfZ7cfnSPycG6qrYGgEpfZtbcsmfbrHgE7rSCZ4sWPL8hDYgHMj8sMFKo",
  "key13": "4pH4zpWewH4QKNwiqnbLqo6UtpVTQ9S58eekwQQMN7nKbJxbN5nuR7FEQTaCVmJ8pXscBztrQUzzZM8BqUJ7YoP6",
  "key14": "5o5d2TWCHqpy7jc8YLJLwsSEMCSCf9XShgVcBEYkb5CW8XeTjHFqkCzv6WysSz9MJRoFbpc4zvctwLUs5GpKfemZ",
  "key15": "3Tjekw7VW1GCmsur6jkKkBNEQmnrm6LS52BxmfaYJkcrWzVdnyPc8TVd1tchDHHTjviVxVE34ydxUMXWLzoh7uj8",
  "key16": "2NGDRjfov49rpDeGoChHQLGbZ4YkPrJafYb8bmgqagJaZkWZEfQi18sTfuk3k5wSVfCvCWhKKpSkKZauUTaXaXcr",
  "key17": "3iL2hfrTW8mhkt8AYRvmAD85QMhvYBqr3e6VWzptMK8nDtKoQZpG8cueXMeZz1BUBH8DXhGw3Pa8jhDfiBN8Fka",
  "key18": "2Rdp6EXiGY1wERfnbU4kUXp6YauxFDUJ1dbiU2so6sVkNPGYgfpXiwq9L2YsQp2BjY2QXqPhWELpVbwb8fHmgYXz",
  "key19": "5HJV4xrn28wDuH3V4KCA8Sn1Kb9rnM5T4eJvUUSvjCcDLdMXotNjCQG2YtcrSbk4Q9Z1SN9x8sSFQWHV28fzn7zd",
  "key20": "3Hwv8Y97HAnS4EQoDUzgAbAnAoaQ6wDEKjxz26q7r5VS5ZBDL7wZ8sDNwfdSJCQr55pnASxAKnwdvm2NVBohmdac",
  "key21": "5vHH2SuJ5DJrSjU8wHWWbsXxKqquEnXFD3fSWvVJWnrxoXv8SL8xMvEJBMfAthYiELtJ16dhvGB7szDz9tYtsgs",
  "key22": "3oYG1Z6y6gT1nn95HbH8hbEGaWjSpy6drYauBP2rYEy7QchAg6XZw8QmrF1jfM9RqDyfUBbWEQRpmRzcBBb221V5",
  "key23": "4YekwJJ5cU8Z1wtMwbCFJiaQBxFYz9GvFdDmxKCzxxcXk6uWS3SfzmWUeSFEjKRNfpYPdecqxfUYhQYGzkPUuYju",
  "key24": "2znMaZjMA2AYxUrWNxyani1pZ7Xd6qFJkxHYgKJcfHX3JQLwXYjSoZvuWdEJ6WuLWFeVn9xqLdngSHNByTy9r82i",
  "key25": "5ZcgpRVe1o72yHVvvs79m9L5KxiN861zcyVoim3hVy7AhRDFtybZsfjTcfAMoSzLqyeECSfiWY8Bp8qQqpJL2ypj",
  "key26": "dVUNvihFPHrsaq7aBR7ifR67HswM9S4xpAEB8XsX1vigs93iAXLwitBbNxzmpqhMZzA2pDHS4AwQxyaRN5RnKLJ"
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
