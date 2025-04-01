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
    "Umt3bzBUm5GCW62e62mq9s71Jybqr9HX3ut3YYUyNXcmNWFfBmztY3Bc7HJKNXtdYUTxNsSrqcc5ms112B8ogrs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JgR5GT2YmMQ5CPRQBCafRoVrMuopLLjtmab7B2g5sCdzhXBxWWAMRnBBivAZqYRrks1TroqNankHcTXiYuJne36",
  "key1": "3833FhFGZZTdoJZx2E9wTEKgV8tnB1dYGAy2ZEZYuicFbWFcQbjJgPhnp8U864zzQLZT4QSg9mfH1M24yRRwV7Te",
  "key2": "4AmLd7bA9jsAa7bvXAqkkuh9BuskPT8dzwUPyHxj3mg9GEmPoNSbVeJ1VxzxkTdT5xFp5FdPN4o9ta7ewJSE8Wgt",
  "key3": "61eiJvQ2c3kNy7R2o7A6Hp5qz13nEU49VN9VAyjVwNT5Q9mnfHNNR7u5TF4pbPgNMgs73TUCuNA1GiL4ppYeSyaH",
  "key4": "5HqNYfJuSMEYDmgW2euiUX2wHfadc3vExvvRS65pqijm31Czo56RFn3zgJkrwMKWeah3uDNwsD2hSa5cxvLjtnc5",
  "key5": "2tofVVGXVEDAnSzJPhrqDB2B9kQgmphonBmbN3pWqrQ9inCNCC9hE4Bpuh3eTvrnwPoCBw7JU98PVYGa9j2xwUni",
  "key6": "61kgSBFzGGURScSvsG9XzPKN4Jq8GFLDCexxfGhmUsThh4vKMtA7TqWCA9eH688ERqtsVrqKxx88jaqyCNnMtvyN",
  "key7": "57mBUgVyuzyuKGHutBtZZr2bU7Go1Y3NsUF6rNRxDmvdeKh8qiWXJ9xcFWPnobBRsvtbXUSPmKuJ3ihaaGDhduCE",
  "key8": "4DnL8auJxwGPDs7xfopdDqRb6wUtX138vwW2GiVrekTAbxkHffgSsyJbLHMbHoBhkw5FdrC47dgKo4yuZ4U5jhYD",
  "key9": "2Do77NV5MxHLGD11MAQmMSv7Lp3y3sWFW3WoJHfg9zwjvrBVhp3VP5r5QXZ3Yn5R2bCuA7rgHbCi3hB7annrgRTq",
  "key10": "4o5TYBy24rSo3B7CvYcYxZBuQiCiESVG1u37X3n2ns7GiqyJCpQugRejw3FMEBLP5crCdDEYJbq1QyuSuvthNVro",
  "key11": "5suXsgahPJXukoDsXfzPq9jw3z7NmifygTU7VzKuZmxPT8gyVPEKZbkadkdwNToJ7k9DT83g6DRCTu8uq5RGjpD4",
  "key12": "4BMybnuhPqfng9aaKRjTwqTPX47ZHk4Ry3gD26heTnksVAsmhmvhtTmyQCRQdF2MpPiTfCXEYp6gsJm98Vq5N1m5",
  "key13": "4mBQvYab3R7y6LWuKxEwUX17uhNKyRHiRePgtJnhUKuNaK52gZyDxZYvDFVf88N8o8orTuEThAMZRcP9ak2Kg3Cx",
  "key14": "47XDKZCK1UNK9Y6iijnXn3NNrZhnbfs7WS6NuLcZvMRpmFepTMA2pLGfbEXG5eZoBYeai1ZYFpzP8HMZUcjSfZnZ",
  "key15": "3AvT8HM3CXs1bbHqakMZBzeqFHzosV2xgy22uhntCEjvY6nP5kpYBs8FbQwtZXdHPTxDiVtL8qeELrZdn1zC7Xoj",
  "key16": "5AidFhUJy8DPjWRZnJgE1aKHKi4ZHhHNAB6TAGJ4L5KraDW58bi94b3ZBivKzswX6WVRvqyzgTw3u8D3QjQKyZGg",
  "key17": "5YK6t7LwVHaLy4hCrs4PfEvakm1LRAu6BPDVaouTasT9zehHqHfPd5P8WUw8NjMdQFWDsgfQLd1FYZBaggn7vrJk",
  "key18": "5moUe4AaDfE9d2E4FaCgJ1qA3d5e2rjYFPpxPU2CqqksoyVYqKBopFpSh1iUJ64Q2dkU6SmCTu1toUqGgZCNtAAZ",
  "key19": "2XpKgzWeLLPSa3HRPQhYUoJyyK48YvDz1yB8m13UPB6TWPHidBRmavieP9XsmPZkF2wLmGGjXw8E7P4yFBzu7AM4",
  "key20": "5rU2F8xEJTTqMatMXXf2XDiNAR4MFj7TjCcRE4Ne8GXiDULjJyNq9PoFpeWTK2WZsYXMTVhz1Y9EPftzsea7FDNx",
  "key21": "52YC9zf9piUTRX8fkiSTMQqF2nznL7PanBpVa4uahdfYPVcUQ2UHbmvGDXsgUko68mm2YN6Cui3Hqk5xbX9WRNwc",
  "key22": "5wFKJMcdLtxdR613b7RJyhn8hfDrJRR5cStbADoBAxTpSjYc2J39qKrDe1M4y3vYffj2RPSCZUKcgHjSePVtYjNV",
  "key23": "38REd48W367i5bH2PKSMrz3vV6wtT2owVsBgSiE4UP9GJB8DHZb4R9ADHDvBFxTZgoz1fq3N2858pHjrqVw1PXco",
  "key24": "4q8NaanjoGyKLN8fr7qef7nbjasBLufnt7GzPgaLt93xE8pxsKBGydij5nz44tSvdS8Jb1zPeWzVNN7bnj6Kkacd",
  "key25": "3qXokrZiH4da12DqhqzkLSsf2zRwuFZczmZ8F1bkbvhTEq7fQGPWPm8tAZYn8KegHZUL8Yrg1bhF3wRSstFbqrWn",
  "key26": "57EVhQBG5GnAZGZFToMoE5MaERqqMu4cgV5DEcBnZWmR228R4PDi9fLS8dwvPEUhy1wGWBbYKBVupN42sXfmqhFC",
  "key27": "2GfFL4raFHTCYdcRCV2kux9crt49nvHTadbyYcqcnVr4i1ax24mxcbnVGvQatTzAd6LSuR1ZWFTQqcLjjjDFjaj9",
  "key28": "4zBrSRvvdWAyjFcDpZJHoEBvwfPwAKZqbHu4gyEimVPTayLb9gHtZYyAMXoW5eYAAMWj1Na1zuNk2Cu8v7KxRT5M",
  "key29": "FdejfiWKT24LofbyeckwEEbLXmKjkQyDkUkHY8Lb2yKQ57HiBVLBMZuXjnwwZAc7HNYtiKDsA1bKqQzaWxmHw1o"
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
