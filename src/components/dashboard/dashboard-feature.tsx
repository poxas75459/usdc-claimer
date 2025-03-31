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
    "3R5DgtnHM1jWLZAufi7FzfXfYJE3pzWwRvtTJGoYoDZHndSAMGDQtYkZvj8FrjUjBJMkhfgEeVrrjX4tVcefxpsh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "627H51TSGFQBBj9Wcy5QWGp5tzLpkw1qwEnVsrNwgK6pKyCEmgRh9SjPV6F3VoQnFTZKQ6u4gN4DtLQPATFokN8A",
  "key1": "4vDVXetA3hy94hPXhnrSVmmFxvLRWHh7rDTjYgEsiKHo71j7pAqsg4rzYVcMeujy7nezdYQaAADG1NEVx8QG1Mpf",
  "key2": "2AgaVQqM6A32gJJhUDzXT4KD3HS6AaJ5fbKZSMd1c4FWJrWJgirZekmhFpKhArediCuSHhMW1Yvf9sE47Va3F7np",
  "key3": "574ehuZzFge7xjLeKQAo3SCJf85gLfw74x3Z6KYmJRzLK3S55yWwtJHKmiFMURNPuxppg1c2V9kt4FUgZNwbNHVF",
  "key4": "2EaFavGZfAuwBoRFKR8N4g17L7ixiAL9QjzfH1HSUSC368ZVmJnEfziU638YU6iGq9hJYBTQtdd2DNmwXh9UWbt1",
  "key5": "2qnG4sHXN4HULFJbKRSmaukRFxDPr8MTJFQFXEvdrsVohiqRABELXS65BVFvbexiRZzuwFHyoRudJLsinDwdPJLP",
  "key6": "23G9m7bDLQbsPTyUcfFcs9y5xiTDsYJ4gK9dTtwScdyz4afVwLttZ7M5D4UL5dJJ6cnvNGFSk4UyYvDysCUHxW18",
  "key7": "3memr4YZ2gG1h7Xy3SqQ62DjYraWxgzuwJvT8QK7Nw3FnF5WTq8EhzCczSAE45Gg3RyscZDaKGCukP6qmeoyP4nf",
  "key8": "4McTd1zMPh6JsKopXqHr1yyJQK4gqHCiVa7d4gaaeP7seSmhzQ4PKtHk4uDdyBXUnzF6atcZdQMEp2Yi1LfC9w8r",
  "key9": "HuPcRRAibG7ZEupkWK8xEPsRyjPXBiqAMGRKPbb84KXzSigYPB6bMfexd1vRu4eDLNkYxbu3evJzuSVntHtiNHu",
  "key10": "J3u4XvA2VFN5htsvK9r7gWa6CbFXN1DvxvrcgKLdQjTnEqNYj86qzbEgaXn7vXT5oGkCzzuBhaS1iGCAKXoZGVQ",
  "key11": "4TTPHB8fhfUGaYtCGyRWF8gzTRF24JHbxT4VDQGgyqw93tdiXcGP1BNJPxdb2ZccSRvrHMSmpmgd8gcrXfURzrDY",
  "key12": "3nviTa9AfKeA5CMa4H6WtnVZGsJEpbzNqKXWeRHrFF1iqahEUnwnBbpx7SLrQCvFbEidfnyJJqSmRGXpHURhvKfU",
  "key13": "5Mp72CSngf39KixQjAQoiXGqynZ7qSL8qXA65XpxD351xnQ43uM2jCBbiV1k5Lw1mWaoxL6eMabdRhit7BUEci35",
  "key14": "5pv724VV3ErJwLdEkuYdDBKL89wwnCN8Lq4HmxbGU6pH5APQWsEXPVsiuqtHuKHdjZoNHECWWpYLrgaySQ7dcB31",
  "key15": "2qNDJRCHzpYMfY31Fp29AwdC6i6w3Qb6hediimWLALT6RubHTX7to8DNhCF5dudSmtFgCQfQJzSC98kJqfR1ZLH1",
  "key16": "57D4QZ6SczncrrCrKy2McWF8aj8rvmD4xL9arNj78TL99e5LDufDAnC1cSucA6Jdc5Cu6TUUQR6gVGY2e7i7NPCW",
  "key17": "3bmwyaejtqWJNAswijXTJYWwNYNEW5mwbHFMtC3pcvxaY13N6P8qXmdqoeQ8YLgCEcMckpFyYvQx65hDHbLH6eV7",
  "key18": "65qKvvuRKipmegbgex4ReQtWvWQZcRwYZs63VNHYQvRJygU1d2s9HB9ccjBs2h5kDkjFJHGXtfDahQHCuTpDAXpC",
  "key19": "2ipQiRBqYwLVieMyJcpDYgQe768FrnDXeVZmNrzjJ12jQKTj1czHTjAxrfyX5hFqLxj6b69JbbdXTCbkBJpTcdtx",
  "key20": "2mwd7nvgVMPa6BEvYMh8Hj9cj983DB1dJ7PvsaMCgo18894DtPi7FGFaVyr98HCQhb711uqYN6b6Fig475s757sw",
  "key21": "Fu2qRSaZq439VfVJbTWUknS5KEXqPnaLjFDBPT7H95mjpNwMFuyxq5FyXMj3qEqhJqgfS5NiB8VPN1TkjwgSeZE",
  "key22": "59Hq1HnKB5rTKmwCe6nE2sv54uc9sWjQgJv6gL2czHXyvUapcrn2EyUkmvYANtjHeCrsz4UsaBenpdbhHUquEhZn",
  "key23": "3dKq2U6pVivPjN9oktdwE8YU4zD8cwA5b4u2T1LkL713huD15HUp3QouXFujtwjVKvTWRZyDnPRD1LZNBPZWhE4",
  "key24": "2vKBzp1eBZEbyhgq5VoKKCQuZ6bPmzm7q24vFCNSTwhBFJFc8jxTe1VJ9W1pLewkN3KD7scvWXmk87eruWxAAzpU",
  "key25": "3EgG2vDZ3H5G9ygBXMGWFZNmxSevVbntRnZib1UasRihUX9cDX8Dbv6kSAFYuVNHkeStpmQumqChVq7ffHfo57NM",
  "key26": "5Z1xhQPoypo1NiKk3p12Xju5BUofbAM4dsvQsXnexCF94sMu1NdbZBjrKSRmasUspLphCNGXDbKBEpAb5DB5smF7",
  "key27": "2L2MDtaRyN6VDfwU6QJ5BDDMidNBf4FQqVAMkns1Gajsckqiwz5gAaJ38X6irzWXmFdKdJUAaJgeXrfT5oddR2jm",
  "key28": "2tkdxKTCfP5TwebKxtfAryASavip4YaEDSULfjeQwDNSPUdrKPJCW2CfHqACShvNAy7b5xN8bLHnrVBquZxaSKuV",
  "key29": "4iAvsjdFTFnqinmFjY1xub7tAqHsTYjQpXoig1Ugp8ZNmWnZreLR7euUyYWNdMcq8ifFWuDJV2xfmj2DZbuV7TzK",
  "key30": "2R9zkWDQNuUEcMTNzaWws6cGeaYrThKQQvyT3ojXLAXcMXKkfYhH6w63hKte9kJPCpJbqqNVDjdWoeapkHfmrHKj",
  "key31": "4dUXrrXhCCt1jX65oQzQ1X7yAogsv1jMEzh6RaxUW1v9tzRXMKsUdaLpGqCK41QXTyCXx27mTR3FbbDYznfKvAnE",
  "key32": "5WE3bkxkycQ6AYBXhRu3r5XczB8NcUgtswKcbpSkj4GAarALeACqJTkzqzUT5iXoR9hBc4dLh2BJCJhbSSvYrkNe",
  "key33": "3hZZ68uQHZqp4357vw1EE2pSSKZ7aaDuJuXeY7gygDW73QsSzaTUrrwztpkw2dPKgqNnUYVMg3b15FLSnEsub1Ju"
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
