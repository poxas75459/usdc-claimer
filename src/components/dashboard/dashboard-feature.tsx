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
    "ciKYkfeScbButPbqqyNmE83YBi4TqLRCu2n2t1ETcuHFvz5Q38NXoGwafpwyFeq4z7YofjFgpV5w7NyDVHD8LiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UCZPLugiEEAeEYdtkpey65M8aWk9kYR3w8RLHaKdAbuoV5wGizieBVNxcYst79cuUQf9g5MJLiBasmGtLzCRYpo",
  "key1": "5T6rnYbaYhrpNWAvs2un2Bf9pXRYa13mzNurUtKUe5q9TbnZA46piz5fnSzpUdg5YMG5VM7VZktPi1j7rXwKRqSq",
  "key2": "4KsDdGZ9EkrKBuYDd5RscN7PXwwaU57Bxs2GaqHfiNGx7oFbzF6g8tL5gjLKh3G1tHAHfCCteGuiTAb8vgwbJjyP",
  "key3": "4jq4YNQSHEPNorprJhqRkrygtcAGsFno9WSGq7n7VcQigujbaBfWoooQ3B1Az3FAtFrVHgrvDZLhHe4456ZoCKst",
  "key4": "3zzhHskVgHDvFidtLuJxQJS5FPLcPMFTjvx7Y1h4a6SqSxSANR2w4uBjzrvJYeBUsQ76oJwh9BegnhoSTcCP22xa",
  "key5": "2QAbneAkZo9iggTca5FHvaAcB9HGNJ1CK4e4xVAJts6uEBxsQqb3scxVYwtuvEvwHhvcjFETqxauVF34q934pp4M",
  "key6": "8rGGVCo3YgiPwGMnvwmvcR4g2TEcT3TawGta6gDnrrh5H8AvKA1BPMGjBVrp7MUFs9L2jkRNroWwzftZpgKqo2U",
  "key7": "3ct13wCkhvpJV1t2xmiwgrBvB1YfM4SxTK7rCnFw1hq7a5GGkzmc3UrUh5L5AMtcunPGStk64ZFBgFbkQ4KtTHnb",
  "key8": "4iBz4GuQKSSwFL7VadDs8oHKMkVSP6huRJyBUVcQ4GWcNugfJ8GhGhZDUkezBg1ojy6PWjH3Uc4fWBpxEEgJbCHk",
  "key9": "2Ks1VNEqFWBQoWtfDf11su9Hu59SzebCyeoX9CCZT5NaLDB7sR315VCy8XEc1fhRdTiMz65egZEJ1ky6xScwuPSA",
  "key10": "5tdErHnvaa5UZcVXmbkLr1AuCAkjXgqdrmtcDdBcvfgN2tw8VE1DNr3aDJ46iyskWtweeXHxRej8Pjv1tuFSodur",
  "key11": "4tAAoDiqJcs5j96AyvXoKyn2yqhKMT4ExwP41SkAvdqpzmVmwzQTzEsuipCVJmXqnnjiPQYk8xkQ2nxKhv57porN",
  "key12": "2YkQyrKMb1oh339pF1BMVaH3xkrPqzwFiWuNHKG3fSD3Z6EWFYz7nQ5s8WsURsYzyPLd4gSPJLjJMfi8o3XV8eGj",
  "key13": "3GqjRRKMAghJnFNaFAvdGqhyUpcbDxgU4XSTqttaUQctfQG9f9BGnNzSpG9JaGciAccV6PBw2KWArw5sSzaSpTuQ",
  "key14": "45rrGEeBT6ppbUTTCWyeDkjLkaZzZNuzYrUbhTqY4Sfrmvtqkz3LRvBQjaRWWQjs5JZ3Xh6XQgk7HzSMgjjkZfoy",
  "key15": "5EpLjAsF58Bth4Yde32RhNBwK97Sm9FehggP2s4gTNn3CvBTacWLjvi4C1urBPoC6U5Gx9BVeGyPKJC6vyk342o9",
  "key16": "v3DwCTMfFb61Z2aTYdhzAhTzf2fHEj6Uzg8CDVC3UQpDHds9Uzk8Y9Pe1taG7dd1bozadgnXG4jV3Wfr8cEJVtN",
  "key17": "4fquT2SxDT7wJYmnooYoTmNAhn2u7wTNP2Kv1gouZmno4FH2CbEhTriM8k1YsPoUmccCexSWLtRZZxA8FU5uuvco",
  "key18": "3kfuK1kU9tMMB1Qyq9WXvUhHq2Shq2Jc4prnfZcd65rGtHFPuFDe9jXSpR5F2gQG3wz967GZrFr6mg4va5WhQrnq",
  "key19": "2kQbt5y2x9czuzmfwygSHHhoynNN5iX4SjWYg9yZS9Hpfnpkv1FmoBBtRdTW1VYh85otoFKpPbTDWurojs8rxZuS",
  "key20": "3tFeovKVxJGqDUdWskHgGcPH9d8mbHEcK88XXd8Xyqa5sqWfR4rrKozzcgiafaPN4CVWrzuCTQnUFAGR3xC6HkGv",
  "key21": "55HJ2pwaCM4BHRbn32ZhUfcq8ycGdaDwxWTu7EZTsq8vLaoCaG3Wp7xr7opbrmLnQLu5NxEveNw6MXerWNuWEsBW",
  "key22": "53u5S9S9aXnwDgWwXiUsXahSAw6r16wXPhcX14vBJ6PrpDw2TWpQJR51s4K7jkRp5tiGkJt6dmi49gokU8CoydVE",
  "key23": "4y8Y4brBcHabFANkrBqez12eYiqpWAsw8ATPEqbpsqHTVL3XJoG4aMsK1WjEj8gYvtUv4D5SjSNGY1QnzZLGSzBY",
  "key24": "53rs5Chu4YUo8SMidXwVbLcv7Se9bhi8yhFy67NPggWPoLbmGq1Xms5zhZYRtv27nd5pwwRPHdKuC6AWYL8ERs4V",
  "key25": "3pjiveJVX1qCFoiQFPBGv6HGghfY5Q8ic16f4Cdpz3qjp4mTJBEwBkcuGuvF5rEty6PJbSCz5cJGdzCGfHTMpEW8",
  "key26": "2Rz2qN5RYndHo6vyBSZSctJCXUTshZANuYGZG1SREQzDEn5Gd9MYH5tv5cHpgGe9Zi9H8GkdNrrACuLDxB1xEAVg",
  "key27": "66Fdb31ArXXuN96i6kVwUqhqwLZHgVX35Zc3QAf5syf6Q5hGRT2dGRLuKBa5nxJ71nDkoRdX2PEg1KYKWNPC88sc",
  "key28": "Lv2KU2BHK5iQ2KAUs6z3cmn8J646kxby5hmGpiF1WCFWbT7H1gB1Z42bxrsDcw3u9VKPeAzb3L3jMxkFY7EaBE7",
  "key29": "4Ze6mhba3WQ1gnAxsYRHoAi3GZWHXek1EuTQ7znj2b96vR8JT8TkyNLbCi2ybPRbjDEq2CxdC9i1Ztj84u5NVXQY",
  "key30": "Uf8iu4mWnbMjHWCYx7TDdiDdv5XWRsmju42J2Q1M8GHTxnLAS4HctCWRDizRTPSzqkhKSRMPLSpAHksgWQ1eobR",
  "key31": "35yzufUaBWNjMYJ9vXzJZn4QFRufWhkyonJoJstJKVCymSYR45i7t9NT8bGFzJdFBee1mufQhv1pyiKiiaB4PxAK"
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
