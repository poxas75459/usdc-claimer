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
    "5htJ9ehoAtNsBARgx46Qkb3u3YbbR8KiYP74X87TLbA6Qacrc4Gz395EZsmquyaGpRLvT4rRW9ZkPfd1wFtL21W4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KnZtsco31TrGn1ia9YxpX87Gy1q7YkmYXzq9h8qnmEd52v7n7dA1KeHRQWZkv8EX7M4hX2K91atw62NbtpNj6rH",
  "key1": "kRpbaWcRHfw9xjVKi7PkLSp7MUyxsjcKK4U1EeQXVGoafbdz4L7GZoS13qC2QKpTWAXWHRAUQwj2yKvzJZoP6aN",
  "key2": "5fcfqSAYVLzb1oKjdamQQiUskqSvWQsjrZRSs8aTj2JJ1op2cutikJESmysfbNhcym8TjYFX3BaVSvoJWcnuZw7D",
  "key3": "4mNnb1Jr7bm6Ayw9ypvEPkPPZ9wLMnmjHztTPgzzLa2C2jGii2aYyJHGp1jeT75Bc9FbVRjz93EiLbRNUAKem1uP",
  "key4": "5Q7WjENi5vJN46GGPP8YthcddsCtdp9yn6mX3XuGbTUUgGkV5aZVGjP6ebS9KAPhELqAhKr9YDvLzvd4DVE62fty",
  "key5": "21UE7G5zszhVrAC29vzBbonzVUPCD8ShGkr2mvSp8meWP1gzM9NhPodTptaCgHHrntPqJ39tabwXtSsoCPWBNnR9",
  "key6": "3FGUMd6mtBRAbh4sqc79ckMPGnVY1t6XqzkC3XgVSYe1KZzMMgQ143XkGMhixD48bsaGCZxWcGrsxTkqcWE8U2jK",
  "key7": "4cnRczAx3dDaf4uF2XNm3nmfqe9MGUQzpBSnva62LZvw81LttHCxu7gz2eMYuQLGY2mCeKA6DffMmbGQnZHMd1ZS",
  "key8": "fL7ScdFgina3zYjTe9BDP2CTMseN4dFcBehACoqaQHPESvJZvHxEwGVcV9GyW6UUCQbMezBzVFyxhWrnPaKV24D",
  "key9": "jewwRXV65dv8wmpWVXxENRTXNdc6oXMTU7XE27wS6owmmnqDhDktEGu4CLWTEACG4A13ZXySA7TQus5WXxMevvq",
  "key10": "5iPKGkqTR83UJU7tk2SZQfuEW1QpXvzJyTxfY7GrirjTAJHHVinqyMuc5irV3tVeuomirSrC4A7xUf1pA1NrZCxN",
  "key11": "3sxL4FVu2rR6tUx4ys1JCvfhWoDX7XZ3XDBrwxQAUj3WfhzvtPNo3WTGpZjtqFq33XoWbUxmTxekYR4AMGeuC7kn",
  "key12": "33s7DTeLEbXk3Z3J2nVu1ngNA8h5jGHxC2GWHGCbihwVPuXhwLAmfprdeg2Ai75RJnyj7Ti5zcFCCyj4ksf5braX",
  "key13": "3ennGHpvALhRaiq61qBmgpFL6fXpYdGuDcqvx7z7dHgMAQepRqNXQXr613zm5DxTwpQh3DboK9i4UtDu9dCpUi6S",
  "key14": "N3MqW2V8pjCF8jAktgJkDqqkhHzzzxWUYzpWk52G8fB8kSrXu78r44bhm5adcbMwTLWLuevBGDaNLiNzPV1znoU",
  "key15": "362VbDP5aPPVAA9g7gQBWFGTUdFFgHFYjkSKchzfd4aP6URqvR97rBjgf8Jbt7pUaH2AMjWN1jYas1CwjDsNHzWo",
  "key16": "5PNNDmo9GFPmzAKWQEEKuqj6EYWZCcGizp6XsoFy7FgSg4qMoLARuGW5GhSaWPyuyJbpCf8Njgeg4aMTkX4TryZV",
  "key17": "BZPUMNfGgnZAypLRdcneDTosMtG34hGDNSWhiKCM2N1uGcpxcnJ9bLfuGjEgY36ncitoZiMzVS7aaVoet7toVqa",
  "key18": "3aVKWpmnsqVUfHXrzpwZGUyuwGRhzk8xaVjgJx8wiEqY7znyuxNEBor3qyfNzPPK1xv5DERsvd8hxqY9RfP4YyuF",
  "key19": "4fPSsMhfQoCNjq2QKUBQixSgipPLHsqFV1HnFwLHp1WaoRpUMmZGUseHUUHionXMsCMKPbivXcaZBx7pD6Bd8RXv",
  "key20": "3W1w5KAZaLa1DVjAGGRxd4TpqMdxmx7Uz3YsqkyvBTyJ6eCGV9idyi9CZzXfdpq76McAxTYWNF1ScrzYWyCz3LXn",
  "key21": "5RHMRj3TqFsi8DDVoNt5P4inzBuVDWB6SgAq6hTSbYG3H5psRmXVANoadKX6iWhiSTjH7zAi614Wx8cNVsQ68KhX",
  "key22": "65rumdBc9Z5oa177VdbrsWXNdZkBrfzoubc1sRj7CCQdPtb7k6W2hvvWbY9pwP9nAPnaxVitkC7ZbFXjqMQszoif",
  "key23": "535bvVjYLoYHPhsBiVVHSjpFgxr6QLYpNJPBGdkrSQxap1WXDhQG8DMr824sh3XHvBB3Auu8wv4LPvVbbzzxWtPd",
  "key24": "JcJyu7x1svUJtQv1GMCoj6j972aKkX4ZPbZRLAsie9bb6bse2TZay477szXJuo6MnuT9GzGSmKmpUjCckfRbzWS",
  "key25": "2z5SDVr1XgTUF5uh9rQ1RtNRWCR2JScC1TDR8rsTzc6NMpAY3rnwkLb2wABnDWn2HnAa8V1im2siUcfSWf3bWCBr",
  "key26": "3VymUYvQTVKHn3GG4d9dyziwdy2URvju2Z5ktgJ1V7v3aGoH4FqrzVWZWwGgZG8MBz78xa5zKyYSvpH2cMd4pLJv",
  "key27": "53MfQUB4k3ZsRTfLFNNLwbtbtcyYto4BjRVGfjMhjpet5P7siJ9tWKvxpUJVU78SdahPTDfhBZ2DZb9pzuNPs7y8",
  "key28": "63vaMy9xpWxXWpPKuxTeUDZjwRrqzCXYCWUXf8gzFci11YXnatNPUG54cq9cdyTgo9qwWu62cwuTpQj1UtrniVMb",
  "key29": "3jgzmu2Hguh2ztzZRWvG9ngwEANyQDSaSGSqDmX9KVmHFKZBbTvbWZgEFHPqDvoGm2Ya9Hs39VubyvGaLS6ncHq4",
  "key30": "qoCDaq2ocj9C4iWVjeHXJDFJJuCsYvSWAWjAQn6p5Z6sazFV6wRhUgQzVV7qALGXxufUFkCcGKybsrKXuWj8XQ2",
  "key31": "4jk9tHkkqGNuVNQKPWiWge7TCTfDGxbtN2Uw94ftzGhTCLiJmT4KCQCgicztG8SFxpjK8Zusm3LWLDKJT6BX3ogo",
  "key32": "3uW4PfYjotENrrXTDADMoe35QFBoJZQHM7LPpG9w5oBNYDqrwgJwgWLfV5bfY3zkjojpQTXU1qVDekkypKCe5V4T",
  "key33": "3Pxb5Ar8eHBgznJVhFzDLYzGuDF3jJNgVUo7SrSocnmecpmH8yFBvueKto2vxS9KRhVD1Ho51xsDZJNfnUNxZA1J",
  "key34": "2EfdmbirNErcZuDAcGCwyAdKgVyds6iF8zgfoc2KnPzN2gUc9hPsi5EuZGmbpKRXmUjJ48yPjcDSUNRSSMkfEvMu",
  "key35": "3mjFQNrFg53J6Rz7kP8KUjguTsvcowvM4mGQHdzNnoezSszeELm5DLCeMX4BNz8Rh3G7MyWq1Sh1hwZx6ntunLBn",
  "key36": "4jJpy5D6sCN5q9PVoz59KPxNoo2dhUTc5iKsdupJXKqcGiffG4fWXdZ1CDdWZHMwgcUKdCCpFtWeY3M2CDaXYscm",
  "key37": "3PrnKCuCtbYEAHR1cpfM5ApkboqrbrwbgmGaLagMQ1QLsnP29kordWvLoeXkCATNdjheXDwu7t8ZSQH5dCh4FAi9",
  "key38": "4CxCeZfB65eSqCtdHqh1ybK1MPxmc23JLjrJ4UhPFy3MeGT2YiQJaDBhkfyR8FTmGBbPpzELvsChfAixcFqVwcv2",
  "key39": "5QyLXbwxanWPQRUE5RbnRfr1Qc7uKAjnw4rRwLeyH8fqeRTtybFEDfCu68WpCYy4wtjHr7DkYfFEfttmCnZqJJcH",
  "key40": "2j67MNSU8YDpC3ooUw6TRyoBB7VPZqSmfkU8KHtxwu6BuW9voMGjrDB1FRBhYXz2uQXcrVLsvwgF8uTTrwXxJBmn",
  "key41": "22xAJsNJSNTcZwSgKeng3pPVHyfDwX8hrsXA21bD8GkRr8pBDVURMEM8xXpazL5LdhiXoR4RGnqFtnnNfaDm5UqL",
  "key42": "5kYae1ws675b5rLB1hBmEjDwPi3St5SGzBVTg5uJgmMmPAsxCMjz9mA68FK2wdZDDyLGU8se7LyFvsKfFvGn7zr5",
  "key43": "2mj5FvXc5NY7LPfKBZ5exbKSzRbPyBNRwmJ8neneALEF4KAswd4SHjNr3TzyVH6R8LcLMjC7kB3dyjqAc2zVUwRC"
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
