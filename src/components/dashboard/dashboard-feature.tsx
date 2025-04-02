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
    "4a8bC1dUpgDHmZU4YQpZPxACDi47YBACWrXaca68yX7uTW8Nf8ZAT3WYiYrLeMWaugMKKZ5ZWLtuVRE3SKdBiPYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q6wQ4MebXsFF7eWxEENRBMmb1yxSKvsH6r8SyhQxZhBYHUTiFNTQe21dUoymfSQJAzZLt36xCpcgFZ1C8fX6JQC",
  "key1": "2gGYpdo9SSo13Dq4ZFX54RYbMw4yUkEuezXUpgrfT5vMMydBGdEvJmGmwVYsEJipeMU9PR3RGnbwdTnZhxQvfywX",
  "key2": "4fBsv2ufTqjgvB7oqEoausHx9bR8HBg4zsUkBby2LVVYGPWYa5Jm42bpi4782kefExyTtez28F247KKzRh8DtfWp",
  "key3": "5yYjbzJEQB2wuyJfWCixJjtTBvpQ4p5qiM8SKiAV41VvNfMyyMb2p7gvLN4eTzYEHJxtZXhcG6scU4P9TbS3g7Uu",
  "key4": "Tn2DiCPB1qZMKhoZRShSfPZgHuwpPZPeS928rcBYMYgJoHBBiQ1LQpGgvLYuKi7xAazB6SYaVLSxvGPV8ACPJ1E",
  "key5": "4ZXC2fba49E3tq7i8UPbar1mnMzCrGLBWpGWCsk4HyqPWJywzWKSyRui7DToEM92BsA5Bq57VRPNMjufFd3B26H2",
  "key6": "LZM1KQ2JFJ4nWyCKvZKihPYmmKWgtQnqgncic2szxVLYyYzPe4EHfTtLnrR7xp6b25JmiqTMJKaPPrPu9iaWgvK",
  "key7": "5Jv5TGj2eo44LBzWxV1k2kphatPdU2dJ9JR2GaZfGGbmfhCRQppV7bQSWuR1QRYpcXshfx4J211AjJFMDigwYNqU",
  "key8": "29H35JvMcJYx1LzWUeUrV9PkMJvcjziJ4Hk7icjco4tspK6d6MKAyjqj4ac8vqher9syRPRARdL6WYRMqzrxSW2G",
  "key9": "3hXhX7Fdk8A1tewGmofbex1u5dzARN1PEixqh5QBZ8aXH2JQJTtGRTHyuS3E3DeQVvpuhVLuB6RwuxaD4JWf61Sm",
  "key10": "57bpccf5JqtNxdin8Hr8hiSGbXAca5V7ugk4TA45mHJtLByS322EHi1vF39FcojwHXkyA9sZQmDoajsBwgEGHHo9",
  "key11": "536qKneFSgqSsQH3S6m3DzWxaHmAXqWQAf5DqPZ7QnyCgfMFbiFkUL8n3Ahc3AeZZ7fmuMh1S89kp5paD3jcr6eA",
  "key12": "345FM6BZGXyRNRGG2Bpk3SbrmUhuWPYVBs4JxfmryAsT452hCWDsWA68R2TcUSUnRNSgjzRWpPhaox1rMZ7iMfHH",
  "key13": "Uyqk41Xr54QGvhVibDyQiDnukX5khNa1XgY1gBCfyMqhZW9BC5JzSSjc8HSs7AF7uWnnRYRN979tLMNBuMjZuMN",
  "key14": "uDdjwH3wx8qJXvzXL4BG3R31A9kUHiy3CNx4wqtDiiRo224ZZoNw6TWGJeX8a3uhE2DaH9gaPZ6edQDjGxEP4br",
  "key15": "3egK7sHpuHARTv4FmAxWAPBVvPUbjstH8zWuS2GHWdWsefaMuRavKLXaJbGdjem4WgPVcAbHsXs9bns6kFzNJXGR",
  "key16": "4prGpdYcX3spoHiwSJZdLSNuScerFqAE3ffQAjGf8tvFPqsKiYdWZnSEQ25d2zgEFhRDzvMBvTTphjVA5VkZx6Pt",
  "key17": "59DBj5r48kBZriGtX7fnJQgxtpWNK5L5yJMrJpNDeFj1ZYxGqooq7PxkfRvVsuC9NW7Wmb9185FMfteEsMQ3G3wF",
  "key18": "5iG7JbMpoyXmF1Rs26gQbR6YQmNuS2NeWHebUJj2Wm9TUUS6FTTbC9mSNLnTnajmGQEJ66UYUF9Z6ZF9YTTfAQNs",
  "key19": "4go3Lsp56BqKDzCSN13Cvg8ue63zh3JQ9BHgaKfmVFLzuSuSReZdvL2fKxYqG21hfXHMcTmpLanQNatcoZUMxt1q",
  "key20": "2UDN7Q7wiJczMKA1hGTgWwPhKWsmAra6xtpdWEyg7A2qJEPs5TnBjqH362CbRRBVDgKatz3WJqKXsPkHkfNzYdHr",
  "key21": "3DUfUeBaL9JN4Zoq2u7dypjJvmxvsNxHmPFjHbkv7wCgUKnmW4gt85qaZ8VbDZ17rXeAyDVaDhcsjsXowoAPAcsP",
  "key22": "5u7ipdtwXNFiKCuq4ZdjLPMzzmXTaT5q3rmk3fyi6EdF2SownnBdAKf9PqkjkFhQUp9n3VRHSsYSJv7iXZwMVLSz",
  "key23": "RAEudQDzkXMe6kiUrddfzr9kf2V4JuS4h7nn9t8C7T52bks8fY6pkC1ZDmh37TVV7TckicE4foz44Lvk4dvoM1T",
  "key24": "5Fqh24NLYbDv4M9gZBqTQb6ST7xVKNAkFtRV8uZW2dXyQBjrPj4ns8LQXESjAWxLorzoermdJSonum5MwGo5VCpv",
  "key25": "5oWicBjuu7pUTPCRE3jdt7QgdyXGcCR8EXVeV1vKoY34Ya3kpqju6zDfY7iKbD9Yg7ZAyRNvMLPmk5HxtzD21hb8"
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
