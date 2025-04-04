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
    "3tes2F7bVnPx631v6Je49jK7BUQZYg2KDn5X35swftkT4tBm79GsgZ1JDD1tFoQVkHbbozR4uoxXPPe7bwRnm5L3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KH52tqwcpTq6xGP9aL1esEJ5RVDUAdmes1KWmq55xtEApMnrdDot9vCNsqM8QPbVJuypH63K4kExX1HFAQgdGkR",
  "key1": "2apLjHSs4PbptBBj6T6R9JF6KMiiPnBnpGU5cB1zycMXcwPvvfbxnYBpsxGRwtiToANjNn2852SA1wNifbeZHxMz",
  "key2": "UyBZhHTAiDBwsJ6Xi6p1vJ7aAQoR3ciYRBHrn3zEkKBvW6f3Y33MqLJVTeXiHLwn7eT6x8AZ1tHFEGMCzxfthCV",
  "key3": "63bW81AxQGnzWJmQmj3VT8JHmPFJQRAjNZssGxSbAX4kgntf85wiUVAeEAxEikTFag5S1y2b4zyweWG1o1vp2H2w",
  "key4": "5FYHpDBsXaeM4BAcmhQVjmCJsJYkCzSgVFHrAzYwhi83pz7jp6PSMWaC3DZvGGjZS2gEp1WCoR2HnveR6FMq2MeJ",
  "key5": "5u68uqAAtbXauiRCb8YGHdxLBtU6WHoSbSAS4a7txm7eETS8wRwEzgaa3wS1BZro46Dfn9xEZJ3wmfq3cx3yNBRQ",
  "key6": "66As44mbGahcowEhUPoYKsmviFadE5TJvziQwHzqvVVz9efC7Yd2WnLaG3ECkvUMDXr61ZgA16RboeASUzr6euic",
  "key7": "44gAGTWyJkmybgZjqGpABVRqfrG3J2wLJJ4SzZDP8TDdEJR7NGFAqeEbPL88dybPkCLdB6DumbWutpLfxwxCBGM6",
  "key8": "q58tvzPtL972sAjcw9PuBJWVqSFoiE9s7ZpaMwG1UQGRX2PXjnCn1EuWGgNn35iG5cfNWXpRawXr81cq1evfYkf",
  "key9": "41MdLgXDCAj6M5tc4EgT3ig5CkCKWQHv4KHr4BrYkvcad5x3xhhHsy2xBDnVXWPaNqkPusYnkmEsGUASPzGrWVFs",
  "key10": "57G7tbpokhX8utwTn3kuxTXYL3TGRGn8DM3fqjV2vhVGjcF2pzjkA8omgZJxaErNZrb3ikgpLqkhduLdTggDPjiS",
  "key11": "66A8mL4U9cR677FmyQVGLJpVj2gYDkpkDgqcTzrocskhAgkvZKDsiTvCE5ddMMXWBRJ8PxR4qetc2Xvs8skx2fMf",
  "key12": "3dG6qnsYR1F947afbrQhfbtdwgjpFubrsi1ot3zizLWH4xrwbQ3BPuy3soWy1iEwHEQKMrQ9mHhBff9PG1PXiFUY",
  "key13": "5ocTjyNnzkRbz21gEtX5rxVd5iZWydR1UZrGYvHCHxpzAHoDembyTh6s7CEKU5QPj4SgP3WGW5TbjEK9bW3YksgZ",
  "key14": "4tuYhHkrhzV1uEwep4cHLSdnWfAiqr7Ee4dqXbbSg8FQ1vTMiTv99C5FGkxoEhiAi79R4B37Xu5wVcy8bDweYXcc",
  "key15": "3VxwHwvVqRKpGBuvxcDYxY13hkQKA2XL8xjXU2mFqgrfWUZnfC67rKR3p7VgovW13UsXpPLhDz2jfaikoXQFNPga",
  "key16": "3r12AsTB6TXigebBo9sWTrkQpEpvYQGcUWcfRKvady6oQNgRvXw9cbtebifcRBpcxbkux7nDPhUQnV9EghoP8bqg",
  "key17": "zg7Z48vawYufH49prwzBP4C1BMY3qH9rA4LwWBcNeTvp2bbbapKnf4JJRMneNKsZZjveFvqSbxqiGnkKPPofxW6",
  "key18": "3GjGGyLpWc39bTaokUHd4CTN5DCc7xqfJEKHf3rYQp5Vz6utJkvz1uY6HGhmjoGAtUW9UxZYr1y7BS9oWGcwxXnr",
  "key19": "2PNx2ZaHpwYKBw6U3fBqQcH7QgSW9qT3oyS4n6fXqmBp9DVh6Ddzxrcb7KSaNNkVifBcY9fmAW7StgB4PUqtxG8R",
  "key20": "3Hduouaz7jZ4K3wsPpsGsjyPTYewsqkTqWB71MTLPEo8XfuuRc5fFQnrp9sH8xyREJfbw7VD4FaouGEcgw1Uegtc",
  "key21": "57dPmBLygMczBMagXRLqqLGtd3XqzBEDdomPTBmiG8ApQo2Zn9w1fGr1aZECKY3HGhrz2kwhBUwXsugvJMaXwz6f",
  "key22": "43RqMmLrWiCRxwtjpQ5puwnQ1nKLo3eaTN4z5hg1Hq3JEjfEAqSmsfNwi7fnQjRcNUVQt2yzuUBvs5hhmZtr1tGf",
  "key23": "3xdEnsdzfCY7aMeW8mkQJFMRqAehW8mxMdCnCWQ3h2GWYRQwH82iseYZhvSzdBPfB4N5xxTnKQCGzosg79VvwvPC",
  "key24": "2in1a4oNv7JGuj3nEBMTW1AsB8amq65C4yMUWRrrBTtEJ67ef42BLwmqzgVwDbweaoyBpGY2N3ScXwifrwvuYdYK",
  "key25": "5JbwgoaNgCuqLspxxqmDe1tFQQ6bMHvqasy76BgMTpchNjuaYwPocjWQmpBWNeKWrXEKfmDn62Y68xMFgTZZyjUB",
  "key26": "2pW1WjjayGfWyGpHmGqPTN1BMt9YK9YbBwgyHFwUqydHxMCEyZHdM9LJq7ncyvYuVRW9knS3Gwhc6zz9DM1PyDHj",
  "key27": "36Mzfb1cYd2Xyd3Zhj7Qv3P9KMu7NsKmBbW159XcgHtMkYv58DiFYJfqBV538xdrEyz3EQZ1EmPv1wQDf1s9nDWw",
  "key28": "GZfgqqPFG2yJdbY3JNCsfCuoFgQHWWZZ9Z96jWmJvLjFHonbFctGyc46ARxB4QhgRQK7xLGUEBKkFZRHG2RBMWR",
  "key29": "4C9mR1g4nzy96nCa1apyBVxEiqUNorzZzVgJn2XPsLFer4DnkAjTPtkNog23WHvk9cvZqrh3kLfXY34u8xkDjy21",
  "key30": "5Es6aypSXHNXWUUhuRdvgru67uXbpuuMRsQzZPYkmpNHgWyQ2yVRc2tpdHn7VCzHdJtsLAhZDAoBcsS2Y3wvEkgZ",
  "key31": "35suvDLY5TddkRLf3XkM31moMr8ynzu4GAAxLeAnWQgofoc7ob3LWdxdr9jECHo9NPH6LE2d3RmbAAXArBmpNXMv",
  "key32": "bv8jdLXBaWmmA6wx5fzUMR3yaNzNbWF9FZmsCHd1GT5HJ4mo343ozMJHhcD4Xp2c8R2WKT9fhTHxs27MitVZva2",
  "key33": "3i5nkWn68jccTgf4UxRXmQnnbFsimbUyCToCUTx5ApkLC6CiPsBNUbZtm3EsDPU5Jr7p1SYa47ssead6tCeHsVj1",
  "key34": "2GEzFm2roUnA7n7UpD5wfgM9XWKKREb7oyxnFBJ7v5i8n4iHgZM2A1PBJmgTax3xPoP7uK9gpQTesiw2GmWzu1hV"
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
