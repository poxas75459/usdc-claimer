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
    "sWkgEyJ41ZWXLWPbtWqXNFAsBk9d44nihAHdNuyo57yCV7g9eaSh5wX3tFDoAzAHaXxQgrAst8n7FjJRqfGSVd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DucMZHRvjV7W6FWbE3y2qwNQFnahFZJgZUNPxhZiJNE3NMwt4nikesoAStvuA1xnqwZYB9xpzvWP1MaGzbqYcLh",
  "key1": "5qSzDjMtVZoTiX9TQLJUbQgJDSe1TRwZuj3qE8ARYsQAQ5ZMZNCz1nHe7x7hXSfjSa7JcX191hrLi73dMVQ1nBAy",
  "key2": "MaaxnuTjDYk7vo7SqqNn8as2Sv89gqdkrbo9K8Wvz4w7UWKDyiMtWfKGFNxdFr4MoT6vomU11wVvVB9Rdsehtsr",
  "key3": "jXDwk8hsW3dVVp4pTDkj67pJEk44L9BLDhV9vcfeRBUPWZUeBuYXroXshSNJSPZd11edKfo4fG8y26k9YjhgPvP",
  "key4": "3twPjnJ5k1K1JQVEZra2rt5V9HaMwPdmVe8MN3GekbJAvvPpi7qEEEnwQWvusD8vtDwRAyd1khSXRrhNpeRqBx3K",
  "key5": "2Ya1MgAJnMPmuy6poxZwmMXrKswXVVuA3dF3PYP8njkmmZpJTCfA4WyVAcX8FPgp64gW91x5nbiCKjBG4FWRyYtP",
  "key6": "5df1T2raJ1qWHD9AiAp5q4LDieKmybkXMmsnUzcAxwim8Fr5jY85TwaZaUVKc5hQzvipGbFpqxeK6mr6kuUZ5hB6",
  "key7": "5ZofzAgLoguTUz72rsZUg2vjpBPgL5ZKUZBa5gmjtAFatbqvY9jL8Be7Q5vpd7Jdib4nyLEQ5PfxYKFxojTNm1qN",
  "key8": "4AiDQdV15pdjLSAtBhwmpwaohticPXQF5t9noHzjJypZeRYvup7q3V8aUZqpJp84A4Rr8M21gF8xiLhf3eNH5hvv",
  "key9": "2J4AywaFWoRvxgU3nKgDFb7h9ZSxQudd7nFmrAtjXeGw6P3noogxc7nnt1BqHqgY6kHjmdXA6TsYMPNMEnEkwqxN",
  "key10": "2ECcLcabuRy3KX2AAfnypV8n8r9tgLMDJCmYa8MGa1wxHKistV5LYCP8tqMwTkyJjbSaQukeuk9ue4zNqQSLyXiY",
  "key11": "2nhPDe72VdV7w9rbmEvsiYXjU6Yr6VqLJJUqobVSGqhp5H9JZZwnkxrR2PJWi7M9AqecCE417zmv2FF8Phprzdq1",
  "key12": "45SfteTZd1WA9uyhwJsXGDA9hJfeR4rw3WNm1Q14RwmZsHFNFLcm1TvkyG12qdTCzVquWjDyrk8G1a9kfTL3FbBM",
  "key13": "5DgMU8wjmsvDKQL2Bjon1HWazY5FQeEiDgq4zGTtr4KfiUVNxVcnTpSdPUxKBGznH59avjJdXsMU6zyW2orMJzTb",
  "key14": "2NZAk9dt4amakViLFPVdbsan8XYRzKq4CdiLdeMyoQfcGcF3GvfFe6wR6D7q5Pr5gdcgjSMFDcNK7ZLVHruAGrJ5",
  "key15": "34vmiYD2Uk4qLuhyyECmRttd2KPA1G3KexSW3uiAngKYo8kgwp648eycgvoih54k3Q7LXP5ND7YjP5yXTyL3th7g",
  "key16": "3P6fQPW4oV7fDAKRx75jNW5NrGxhxdfWCoG1h5tgQCZStp4HtsymhEnPWvd7F6qf4CaPfzHWgU1QK7GSGBF2HVWU",
  "key17": "44xYt1tC8J29y4jM3joBQrGBGm5bmoc7kYyX9Q6fKRQhn2i8xPg6vW7WQP8TbZp2twyv2uFhN1vNDa5aswAMDa67",
  "key18": "4sby3oav9xhZgBh4ygcRDHLxmtKpATJQLt4PXT1ydmN5wH28iH77c8b5HPKCTv6yHLZ1QgEDeAQMin8GZe5Aj6hL",
  "key19": "4Pj43KDuSA1o6gNRVtCAJBeMxMPQvUz4dK3eqHiFpKLVGVNKFdos53qBEmucG9qaYk3zKWVSzwkvfkVLVNynTZdF",
  "key20": "2v7qUzggaJ3iLrYJJip7McpzMYkGvWsYsEZoCCkqAgnuA8NK7HG3PLTaKjfTVqVxnHmXdN4cEHdLnunJB1swYBbj",
  "key21": "5AXGt1kwDHqoaRPSSEhkuBK91J4dcev8Au7dkUFqHy6iLLdVw5jdFK1iDrwNEFLD8MTnFrHNJGSuTug5WQEa7yw6",
  "key22": "1wUVtGhqaW5hADpVS65F44m1JmJMugmbhWuGbjXnUdKwAwiPh8FuyR8j92PPn2y5ecZNhx9krKdBhwM9NPYNTN9",
  "key23": "5NDgVdF1fWfySfuyr5J3RxNhg2Spdm2u49qKxYoERw8GPqL9X5QXjmCnHmAa7zB7fA5pTgGDtK9Q8kNG9gdi1KgL",
  "key24": "48B7DerkEY4tHQffCxrSjSq8M24UFK9wptZqzeBATe4kek1wyazsZHuoQ5d79VysW8Qf3DhDZd3FteQtC2KPgq3L",
  "key25": "2tmGomffFWZNHTYmXyLZj8kR9pDBJLN27HeTGEyf6v8dJVsDZxE55HBJQ3gKNzzBjbnMY3hs6L8eTg3XszeaTyS",
  "key26": "je3mwifyA8RbMNhPfHtBw2kz9Pj79kscKEp9KKDRcJx31nquqCq6edWgum5cB4NBjTrgzSkiTrBFSfk2Xzq4jGR",
  "key27": "3UReZBBLjWSHf9HQ1pnZ9FtxWJi6HGPrF3cb9caRThMyZgGrmHcYvgTgZKjrZLBCQ8tThRxBKvD5krzBmAorCmrA",
  "key28": "2MRrDH8EcZSn9D6VAmu6sqwkvLbYMVWN1qP4w4ycMA9wswCfLf871x9TWrQgyN3FjRnT56bSKfHyjYzS7WFjnWy4",
  "key29": "39Enow2e3kn6gbsZuT1aEYgauhNB7e4NpVZ9GSKJnd3mqjdHLd3WPMBHtXGN47iR3XSdkorDY7Zs5af787ZVRBdL",
  "key30": "4Ja6hk6ddWGP8jMoKszP3CR2aYKK7UAJ1vVZPPCVHPZHsKVXu96u4f7UqAEYtUQGgd27nYDYHeUA4y57gvgLmcaS",
  "key31": "DKe7pCuDGZiWn5biJgjuywkk4XHi5RceZjpRFzP1da5xpv1u95upqTWmLxYuRGvo9irkRAYaHVBELKRtPwSoTx4"
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
