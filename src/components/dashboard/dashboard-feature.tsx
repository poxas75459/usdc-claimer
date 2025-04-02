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
    "3KnchPy7a5HSud6RvdaTweN66sF2N6RkchkN1aSu3gM4kyZ73pf1UnYYfjLLQXvGBh3uxkcAqWG8K9PwkkydjBv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LXfXRz6ajZtPssorM5KJYSFqjtuAF9Z9ttbrqWmfJVXPHcyLLtWjDgckzg8117zAg6E67WLhLUnM2AfLxrYVZtf",
  "key1": "5cNao2diKTq5EAKDEpz5HciW5Zr86DYNVyr8bqTBumEu3SkACddpdn9s2WghQCWZmJWvGTvrEwmLwTpmRRxYKDn5",
  "key2": "4a79PJTdua6rz7U1zfECzBkpCkAXgGAeqMUS5De7PQQfghKqppQfZHv2ogx9TgBWcMSwea82fCZV8nZ5gJadVyuG",
  "key3": "5RQNpr6i9MVHq314N9uACcEzQVFBHuJBKgjEvsyAzpAxxXSZh8GDg9ojzhQNny5zrjj5Mqz7PvgEQHoLYTt6FeQ8",
  "key4": "4F4iAT7EBevhFQM7BPEyhgpYrLpXZBHcEXtnoW3v4N77TMQX9AsU6tLbbas5UWJpouSSjggJLZrit999F2hJRPtW",
  "key5": "22Y3edA9kGb7d3hmFG7uab2DEwngMfcDjUYoaMgNCZb9LpfZ431RFMJHKexV6ka13gCUr8B1zAKkYhahhzPgcWiv",
  "key6": "3huHVr9KLcPbTnmSrybsn7HKhCNX7Z3YmiGdmrcENcYZis3THQniwXtpXNRbyjxieFMMcpfKmkaw1ivURhLRLAwm",
  "key7": "4sGxmGw8TCgwBse9LAsN7eUN3RP5bj4H8KgaJmtZdERYM7utSWHWiQfvRhWx7B7mjXSgkNVgVmWWmzccQEz4JuRx",
  "key8": "3bYApZuYJ68iBpB9B2dpFavzRFna5BduHQ8qqA6gJGUgxSErAoe1qa4dUBSbVobKbSkhVMVMMfJvXXcv9cb9Kip8",
  "key9": "5uKJGrAT2kLFjRXwrC7tjbLSY2NWTgToGBRFNGYWUck3WVazWcBXjjkfyhr58aBrTw8F8wo837HqZRqGzCFZYAJ1",
  "key10": "3YwbyUvbrfobnv7rqUxMzBBXqYLWN71foFvTw256FFzfvuQFx1ZJtXCPy74C8jC7MEPAFozfW67vsTz1EZdyhjnX",
  "key11": "4EwgBE8ryUhG54n2je9Q2mpoYvzF5iwd4vgHgkShmnJwbXqmwewfdDhBEFtdDjuKtZnacB7ykVCxp5TU4nHRSxnG",
  "key12": "3DYMKAyoFp39eqQxweiNDJGf3CpYq8i8xMvxdHb3b6ShFm8bjuE5Vxxb5rfcQJzLyxz7rQeod2Frc9noujYcR2uw",
  "key13": "3BgqvD7GY44iVES2a6dxRV9LCTF9uRC5L5AS5RwzqsgeCVzmLb492xtUUZu77FCryezDei1GVczB5ch1HD8osqCQ",
  "key14": "27gkVRa1v5iQma3Ne2qoqqqCXAMn1HyTUeiBxE7AE8UjuptAZKvDCAeaPFSAbLTWKYKepatTWv7MxbuWFrS2CW19",
  "key15": "5LZCc3iGhRbkgfWx1yhdbbvKqmemrudJyCz7UhVrhZdjaLT4Tfr1WSqjs34jV1yhAJNW7E1GcBswEBJWDE8NMXrM",
  "key16": "b9vvFwxh6YVGAin4sPCH4khr8p9JGGELNbyjsnq4KxrXEMLWQYVWeFsoKaZ5P46DzEMYdMRxGE5phw9kaRwz7g2",
  "key17": "3WkmDxZrAGuzXbBXBqSb6euSYsKaozi58L1HdyasZfeX3ArcsB8Banfs99pWD5Jdj6dkJaoRfYESpmL9ryRedyrV",
  "key18": "5ii2qLGnELjZ4uH6tpiDGA1ZprvgAnz1eLcxXawDJE9ATwM37BkU25fCLQgRjdamQHU8tvsVgLGeXtAE1yenUX1",
  "key19": "5jSTrpqagfmZkPoFdiDyQofgHFm2jGmkc4kefFKB9XTHLxMcp6EEK1WP237giEkQzi2QbcjiXvGceFwHvpeaWrEW",
  "key20": "2iYYrbSS4Jccg1TEctDjFNt8g9uNpNsq2UCoHnC2EdZNJsrdenN5WYAabWq73xCZXBH8RucFAKrC7gcgBEf8e97E",
  "key21": "2uPGypxbr8QH85h7X2Nt4ks5z1MDU8Bfr2st1ijLZjUUYy7VZfuQGqEedhdf812Pxj8Xxb9id8keGjxkZBSPqGuU",
  "key22": "44socVixkKyhPKy8D3A9ANbqdPETS5XvG3FNUWe4CPcoFGUi8pcbZxrnwUUCm7aJuvfchXhSzTuzUDvuqLJugZ2y",
  "key23": "ppqfzDCkKfNwMM3hekj1JqJc2wR5XaYpXKTDp8bASeEpG69qqxNKLjDepDFb8wQVJTU8RUTgZVEKW7urKSYw1ir",
  "key24": "2jdwRx37pxPQ6trjJwCE9bvGH6wUNoUe2kTBGBATHrN81misWTwgNER22ajCYXck5dLJNueTxHCSSxFkZfeduHr9",
  "key25": "5CVTUUbEMyQSCPR4H7EkfvDsdkRHR1ZMVKam67ed2kMMTzyi2VKjsVN1MjNi4StTqEPWPwmebhv56o1HUGsn3iRh",
  "key26": "5MbD6E3qwJMdpnRQ8e767nRsrChmnAP2HjZnmbkpGeNrQA2QMfFUNYe9sYJrCutSdN788PbBaXEauJQhr4uEoNrp",
  "key27": "2SMYSenhdsDB7wEbK8VGdStLRKLMbCRdvcVsrt1HhYqMnhpcDd6v9obyVUWcecmUvVM1ar5oJPC3bv5T2QDbdtmb",
  "key28": "5LDs3Af1S5ojGLE5xpqWuqPLV4ske7DPrZ9QXVnyoxVkJwYxPnSVgayFZ2i7kGR37smvpMxTwnX2nzV85LYdrnoE",
  "key29": "3wWwLpiLebSRQQbyuVHkiVKKtTqKNtx8c5MFQRD2NsaP2yN2CJt3WwLUVP9wZ8q8tar76er34zpmdsimTK4d24WL",
  "key30": "2ePhWfT1GG9Xsdgsh7urkyC1viyD3ZFQej99fU8ZzfVdhTcP3428AeT2svpu1gi8gjqA8m34V6kGPpzGwEd143g"
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
