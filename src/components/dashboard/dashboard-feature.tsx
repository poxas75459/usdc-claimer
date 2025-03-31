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
    "647sbVJPRSNzPw2GeqbBXphBzV7bjoUc9pG9wNe1ydr5JUtxC82vsCxkKGyczkNKjm6JX4a3F3Ko5XBUrzQjeuXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1hog5ywz1y5L9njTk1hiZzFXuik4PA8uUSZBPSb4dSLULPLyqGhHGxUCakZ9GQvmP7JavuC1mWaci4TQfDoSx28",
  "key1": "PWTexr7F2MxA7qC8utsoF9bKuHHDguGuU7SzT4pdmBWjdtBGod2DeS4W3UDz9o5U1rGNG7x3bcpXi9dqf7PVQYs",
  "key2": "BeehUmdUL3BRmX8JcRz51KrRdo5Fo4m3CZ8XjtbcciPUSLAnPHGpt1B2R693rPKERXrJ6oYCTTQvNE1rvYvUMhX",
  "key3": "5uwGUhmZ9PGmWTmB87scWCKu6hTVMRM8w6VH9aHdzBvmyn4t2gmAPBESdGgTuQ8U6PQKzrVu4GcRq4Z85N6cYdTD",
  "key4": "5cXSTGvoXpf6F3W9Bthp7unmoinKQqfJ8spmiJJfCZCjBFDarm6yzkZoj3kUy5WBHGCddzapbsNnMi8AApSULMy3",
  "key5": "3tJjrLAR2GZvq6uRK3cVUWVc9FQpaSoQ5KMRsV1S1K8iQutMMdnLqjjZ8yfrk65BHfZmdAJMAvsKzgcVzYNzmrJz",
  "key6": "5Y6KR7M7uUXNGcgnW6phWm8BgCbTAy53BfKHWvPWyEf9X4PPWvf9rCRh7YYiuX3G6LkZJgQcaQdz1h1tYKgYhKbR",
  "key7": "51bffsbvVsTH1pAKA2ce6tjo5jDN1BnJSYjTCiAWpfcHVK4MVzV9aqqM3e5B6GYY26y5ZpzizShL4eTJcZyLT13W",
  "key8": "3gxxEoj5ZS5sR8dji7CYVThPMRE6eRdLav16HxJ9AyxLwEe4NKFWx62SSXmHoG9HV25Rj4VWj4rLiqXEMs278FbL",
  "key9": "3CiUFKoYE8SW8mnSmM4DDbVLxTQsNiSo5KT8zkTUvvMxjkUCgKsjKSjD3q5MKbUn6r1vkfJpintBhuAtknChVgct",
  "key10": "ZJCEEUEMZA8xmMGzgBo6cpeChXnPjpgimahHS8D9tFTNxgJrk6ce55NGD1ybBUtXrqdVhDiKUZLEHFZzj7vxmZh",
  "key11": "4YQPGrVenHY4qMGUregq79WZXKh2naSn6x2Rz181EuzktuwHJAUaexuHuXXjbLR7zsJ9EJw24oJGkhtheAfT83CD",
  "key12": "4zv79Hzeeyt9YoQmymUjyLu2iwAfBdspkjNvqNr3EyP9aDRiKe9FYFsPpdvBPeK8oh6Go88LyMH3PEkhVvVEFAPu",
  "key13": "58GEBNNCGQG2TULGt6aSSrZt6skQ6ig4Q7p3H4nwJPz1kHJV4qEvk1puGkNGVyw2txRmqu2BNvC2QtywH9aqEop7",
  "key14": "585G3jz9SpRfmpENYfSPpehZSadHD39gCH29tnVx7SgfdyAzRcPa6aLZj1pWZvJChrtH8stomCFxcUZbsfcJHtmx",
  "key15": "2Naa1GmmKrBpzLgLb2ZZTn924R6KBXXoEfje5UnTD3nWa66cYFTY8YH5tyu6Nvy8s1YcedTW15u6gdNJJ7GntaVG",
  "key16": "49xe7hQnfLdeHsFuCbT8tmTkX1p8ck5Jg9weAtrkAtfbbzJWps5pGQjwtzm3Ap8kYGyahjqRBxpDGjdxwucPpHwk",
  "key17": "3hc5HyjtmHjX5vdaXmvfKjo4FLX7p8NebgMowh5K6i2yNgbtuTLor3gEJq2ewGZ3xeNwmMTtQfBAV74LUNmqev4h",
  "key18": "3upsgMvu1xSak5HGRQD3YaF6T3FR9viUrhtJHuuz6S74AiKPW497psUUmtnv2SJz7oh9VF9YUs9N3FgbVs5baj6g",
  "key19": "45MYs52SWy8S1T5jguALbXiNHPfX28F2K6UBjQem9maTV9pRRKEkXhdeTmwDbNhDS8Ri75mNSvTgWzVtNSwbc7Yd",
  "key20": "5mFqmD6dJdhv3wAUaYxCbFe1kDJzuuZiz287E2sDs3GHUJJTJgVj7nfVVFvhCF3uwnjBRsNRr5bDtC2QceWSqM73",
  "key21": "2XyviCwfRjzSwMzeCGVWs2VDWdx3t5risUsmNx8F5NrNomrSTmHWL7yAt84vqHFBRGKsNgWkph4FbZhkmp6oXidJ",
  "key22": "24EM8ShRFVX3kvtWPTDs6PUZJB2H8Uq23C47AgN5s81rzFcyftYVnVC5Sbbj9DzuQvvntEqUZHi7Vu79gGVsWUUj",
  "key23": "T3DUwK9FPw4uT9VtXKw8CEN2p4bVVSyzYP6CPKrDgrRTkcd7oBYzCW5nJedBZXpk3Basfy3aYXk9YUU1HTgCjuK",
  "key24": "37t3nKxnSdf4TEeiqr8XQd175o4Ek5zxLh4jXwvHMTdSTAwJMp1ehDFoer8W7PXn9fvDbLZtAraZdpDXFyExAr5Y",
  "key25": "24JotejfJLtD1TqZaDGLabq6oVYfkLR88Jom7HsPLqiUboxifYXxPiYU2QG4mXCPTN996cumcM6mZ2pD8uhR2q8d",
  "key26": "3qYU7fwWgjueF9e7jykMcwP5uYfcnsRqz7KTvTbQfX7gqgfmAEs6HUEb7BW8fhdJiqnXscpd2ovkAWB9CoWPJ3w"
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
