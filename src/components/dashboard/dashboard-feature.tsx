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
    "67D5SmMUR3UzHMw8JdxeQKXtW78EJKtr7UvwBqyrQzyXDX55oScqTcNxTNottpzbSk21DH84Byi8XuCbDJTzW8bt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CUU849CZxys7pA3kMVHchZFLehDathpxw3jTy4rZu7w3GQWzLfYJ4SnVE9LJ5w4Pa48AyTbneodEDdsXhPPreNh",
  "key1": "5RnVLaewZ2RAiygydVsoSwcSEjYtdstb6q5375TrAiHzHwgxxuPhYksiVQFm9tBaMBeaeXxUykKhxjKCAnogD2Pe",
  "key2": "2ABhQhPWgLP4PvFNeH8r3tQ7aVuRAiQ3S5Bu6HnnxrLucxifh5BtpyQnaPwQCQRLStGE8CXKTLUc9xspow4GiiLM",
  "key3": "2RErnEiDewhJfQXmfCkXGfzJKJNkZesqTHReRhLQnZdo4skgBKZCEyu8DcShZ7Ti63nvNHkxUR1Jh88DhkuK1B1p",
  "key4": "55yWzsTsNie7WKQbSpaM7ZS1JSfwTmxwmgtPZxR9VhnLhMVChdK466uV3NUyptH1FhMHeguiuetHXb7b5sTMZ4a4",
  "key5": "2tFBfp74R32FdhcsZvWyLcHBKJfvPeC16XnmQ9h4jViwKgtA57rYYexGUVXMhxKB4TvzKh3mj24qkBZL1iV3ER4a",
  "key6": "2eYvdkiR4MceV3UcCgjoFcCtVtxfWRaoVjtu5cW3DHSofzxBmKKK1oZjuVLT51hnBKkqY63cJDECbBmFdqjZMTRg",
  "key7": "5qp3Mf7nRhmEoYyeYoL6i5UtoqJa3R35DKhVpmvf3tqLbHAZxiKTnGjTcaoLA2dn5vRWKSoiBPbeV9tUaJnTMFLJ",
  "key8": "2yRGxMzH4NBNquHtnvYTHcN5f3J8Mc7RpQkHrsPZe4wXJhDfZVEc8NACLpU1TR39bZPWwJ5KpQ9XgipbqMyMp8td",
  "key9": "2i1bD7PAY5bUhBTFVzE7MuYGw8FsBYJ2V2rLPpQNtWGRk1XkkWoKYr9FD4rbQZiT8VbpxpwUvNAmzy6SS9NDdogS",
  "key10": "4Sn2Qgm837XgnDCfo3LSFcRRrgn28xQXmBM74KLGZAZRUCF27M9gAc1inUrftoeZwwBTZrwVq94D1q3tUQCa4Wvj",
  "key11": "3JCu3jzzUaqYQNzkZGBLsnTfz2zauom5vsCf9FhrbJeUCZGGwuxY6CcpC7QwbpaXVJi7u1673xVPGTUdAQXCmJYX",
  "key12": "5CjxPLfr3Cc1b4Nm23HbvgvZ6Z512EBssba1sjj8NgNCFrVvcovupDGNGkg9GEe1gpCBKmh7fm42cdYBdxx2GeT",
  "key13": "3MDB3FXhf6rxMuELcJga2nWKkRPx85ZgLk9RoqLsyiJJFy18jHSH3gXBMokqXo3GzLFdXzaUrhUcqFivN5dZqADF",
  "key14": "5mfJSqvRn9htKHa8F6DNN2XUnNcB6LT5rTXRDAVGtEvnXV4GdUfSUjpBTn3KeQFQTbMtWrEQEihCc8evSQUrUY9a",
  "key15": "5Si4GwxtYYmvHsM7tVRpGnoV5WFVPPJmYoGonSci1GK5NdMtVkEYv7RsbAhekcAgV5SVKrF2UMcomDVHo3JRiVjK",
  "key16": "4qZRiFjccCjwshmbWAZkbHxNk5ooaXgpgSSzeo5yJbBH5Jv459r6C4SSqm2pbrMgg9dD3XrXT3seGGtCstre3xiz",
  "key17": "3As5EEKFTH4bQaVFWhPzp3wLNLc6T5uJFs9TF1CJ9v9KSdGfcPBnwqpK3adf2kVt3b3GoaBkg5EMYaF1rERAh7By",
  "key18": "3g1PAH9Ge77wtjHnqU7zRzNxAnj3vDbpXTJjjuCVx3qx1nYUYiue4FZL8bfbo7mjEJKXEe5z1MDGtJYif4W7LZ2Y",
  "key19": "4SNSgR7KWV9LnTdeNHtGDNptneonR1bfrPSoi9rwehaDsfDdPjR1SBiPbPWBRAQdnpnoAV8VthgG6DhKSxBmcGno",
  "key20": "5EcjpfeoA5C2uAftoD2h1wNmzCYhFv54jn813uiSVLrYGW1d26m2hk7W3ZbpNpgKeuLhnffVcSdwTFdd2oAaAqrd",
  "key21": "4z3bZGSZq9L9GZACn7W1RjfWXAyJKQF6GeBXbpAyggRgjU4y2C69tsmb1QWJsKpfbbYbRZLwVndY9pTcDLxgbwKP",
  "key22": "GNbLAyKmGq4JGGcaSFQzCM3Xow7y2jp6sTTa3QAYdnsfa4H4weZrks99fepxy3zYu9eYRgSazD2L13XwqJL6HNM",
  "key23": "5yuuasNYA179sFzrxKFBd3doHKpSJ9qaJpCiZrK4P57av2pbjS144dDbdA5NAR5jYGVUJfbaQ1Y8bhkfXRu7XDe4",
  "key24": "5G7th4SqzR8Z1uXG1dDdF8oqxkcgfyKt8J5M8V3bDhbGz68wABGbi8srRJmphTWjmDpPEfGXQReh6Ly1MYKEYyCf"
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
