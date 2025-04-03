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
    "2zcpofsp4DZPfAgVJmgACVMK2SASEjkSeZA5JGicGk2qMqmPkEwQUoksvLuXCRsZin1mAftK7W9SapkNc2NLG1qu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xqDyg2LyqKABmmFC4hCWq8bAfMXQMM2vwYgVBMAjqe5JdHLTPQby5CHVaWuTXZSv7rDVRKgJWjZ59xMLmQACeNP",
  "key1": "5BHp6jZQtskeYTZZrkPTbxoAN3AEgDsKkvEmn7Q8vfx86Wc2fCVjoRH5E9jqn6argM9CJXv7XdEq3UXQqGkSwDnC",
  "key2": "35nSCsZvUqFhQLBr5EHKN65cRCFyQSvmBdnvBCZMKpqFdnpjW6PNrhHf87ZLA28AuGeSXNsUexBQtKmF3sTcTeBc",
  "key3": "5c9xc9A1Q6GFSN75edPvmbKRUBNSoFfpSEcXYuMiHwWbWR2Zy2PqhDQ425Jm2YXrcKSxnMSajiTwKD8pzjGgcg9i",
  "key4": "3qdktKL4mH2CSahzgpmEJEQdAEhkJEZnuGXGdv4eKSofC1y9n7DGGJYFVTeLGdWUs5GcspcviEKU1qKfqnLaQw7h",
  "key5": "3x5NkvNS9EpAi6Gw2uxQiscJfNCYLv83e7iB12HXwzD11qBYfPC3t6aG7UxUMbHXyu5d8AtYZRifqrxTTfvvuDvY",
  "key6": "3qhgFKUomykeCFTTBRmG6risjyMfgEVWr7SBfo75aphnb3zH4LFsW8rJtWYVahAAbZK2cdrQCHKvX5vD6ueQQFz6",
  "key7": "fj8TfhWuAdE1qPoZxuxyFgRnjbNyoMgykVeEpBMTT3aDr9K38VnEuKj8uMMMr5Nx3CJT83CAmWtj482g3kpK8nQ",
  "key8": "rBazH6jiqRaWgJPZKbgS2kbaK4wpgLze37pqhArpD8kiaMQqrp7m94Rh6hiCoNUYhbq1Bd5MACmiqxHvaVBzcbf",
  "key9": "26wnBMEifhhgyz7TdKpnRj5TPXAmceyhWsWDYs9FnCG1pCjt6h8NqbW5zSrYiafJn4BGEXpv36uqFudXJKSFxecQ",
  "key10": "B3RT6muR4iW3WQ1frwfgFio89E5XnQYbukdUTBJYN1VFoYyadkLGhPsB2fi1m7BiK55QYRHxcTR2Ljm5mni9z9G",
  "key11": "61N3AQuccZXQyChB1EiaYzyDzMN1AE6iFtxi6HBvq2Kiuy6aYWDkWvU5C6FHvdjGpPfr7YdAmUc3mdt2syghSkeJ",
  "key12": "5Vv2T5K8NUqasWt5xbGZ1gU4cwFcADNUVdhts9V7MjZmoqgACLvZFhGKQgZpSTqQTFahJa4mmdRpwovMZvSKc5yq",
  "key13": "KVn6qgPQ5X7m4sRaY6ATp5ssCBA6rKhMnVzqEyhXjmmuegQTgUng8p7ZGpRpYUCmJLCR1xD772pgbCkuigmYujg",
  "key14": "65vDXxbhG9U1HMzmNBrV7DYHeXBKLyx7ugZwbaYtjFaLiH8hNf8Brg9VYMXurEhFkwYBtBjrXACmm5hWYqpALaQo",
  "key15": "s9wjmKo1NRuA4mhZD5YXxCryrL3uRCg5UX4qLmfJXxfHKdMJojwMtTjdFivyradE1FGafA8TV8NxvvgTzjLjoHu",
  "key16": "4ry1k3NMAANGFFCZzBWh7ZeaCtGEY3kMRrxmfPkx74e7aGcUq9aqnPBcYroSU3dKTPMcLZXAjw4LwUbmH91dLE32",
  "key17": "4CiEFkQN2AgK7ufjceA1Dos8gAT7895rgsw3H21uEbSEymEoA13GtYJSXbKiCkvPieb993zXjfvE4kfw5wF75KaX",
  "key18": "2NVL57ZojVELNEhCokRwEvVMYtEagiynDTuJD5Uwah8fASFkAaXY746r4emvA2JZMhrbJTLVVPDJNSBAAJnLg4oo",
  "key19": "5QfzqVaFuNetyqf9zMJtwutnYXLQ4yQR9LG8L8ZV6ox1LdwnfUy1izwHTfFkkbCu8yccoCLigWd3SyXKZ3DEDxLb",
  "key20": "5B6auDuLmEvVPQqVbEnh6SDuZ9hMNgTPnh7N8CHGvQQHgDfa21vwSbohbAya1wF2VoaaiMt1oA1PLBFK2oX875ij",
  "key21": "F3kSHkaeQtNwkTaVkJkbZgCajykwcQEF1hJgKESs7AmY7GDubPiuMiDiwvfd9fsSbJZJty34zfZ6wzuTvXgJSJj",
  "key22": "2UHw77REnnGU1jwGfkFznjPRkhznwcdBeLp5cc9PRXqmxxSz4jYf151rvFNkV71UomdyyTuap121Cj1JGMED5sD2",
  "key23": "4SucnCWMdVxiVBELvwX5Kj3KyfzZZPhzcA58G1wSwgDXyHYFJnNnYjnhwrHWREpJboWtSsmk33SrkAEaAKByDpBZ",
  "key24": "2efXapJvUz5XAC747yiguEs7stAGMZiXmANyyRHxrpGKw5CvFJP2d5HfBmGAbeo7nj13DDRP8dvS7Jhea7kzRkQn",
  "key25": "3S4Tof5juZfaa4Lh2Pqm1AvWzXD5go35uVf9vAg269HZgEzocRStuLVT6jbxJrYAeR5GCLYodf4eiGqTP6iCzbgx",
  "key26": "3d2zjLhACLsRbisMe5SovsHVKPqSbMN53kHgrrLNVdkzL6c4fjeYwTQSxHkgiaNzRnvhbjn5QPNz9R7Tn8XM46bY",
  "key27": "5hqXaxkpZMceMikZXpoWbyhRkZP9rjsonPLEvpgcBEDVyp9puY32YF5Cg1cHLe3jzJxuCCAjuBE6Mr2Vu81rQbyz",
  "key28": "4w2WJqhG9oemBzunAFJKZ7YkZycyvPNtMRYjkYmURkyquTtdSLLr84kQankirw9zZdMXDJxXEXGMQmgtrZYsXxXa",
  "key29": "2c4UWq1PUBjNVh2QPcJpoMFzJnhqWBcePzb88EQ7ThSXNqDpXtGkaUhoexraPp9WQ21BL5QoGNHH33cUawa1jrZd",
  "key30": "1ncUyZqnUUKjefC9Znoe5sXAjF9LPfduWTSZNuPxJxFgQV8twj9x6Q34zLKKPQ6Q1eY7SS69Ri7kuGJq6DmQRPc",
  "key31": "4L6QX5qhKEnZZAq2Sw24gnziM1odcmLMt1AExuZKkyrEC4NpwVmRCPuoAdkLNeo5wEJwJQNqKzL6SWDK9L4AZQGZ",
  "key32": "57wecgvkBM1tcz8SwahnDyvkYmCzE8tV7LzdRxWozFEQwcXCSuD8mPmU43C79LfZSoHucaSmeARmCYqVMzXqAaTB",
  "key33": "43BwNC56QBSv5Jg6mFTVjcApVpKu97iRKUAgwwtvJfe5Ff1MZR1TVZSvotLTCyiK3dHdpdCmDDSRPMGJcB7S6vqe"
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
