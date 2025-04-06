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
    "33a2F6KhjKSewFh6oPGAoX9gNEFRHrezhPWyvSQNgLeivX299XhMANRZMNwBWhN9mZB5txvf3RTuzQiPHPYNKdVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SVQhE3iERp1LBmyPj29dQYUVM3cZcpQXQ9tW88skwSXJFhhLLvLTq3LrzGADHXBMyKorKdTEjfeoJLrfyhfDXoZ",
  "key1": "2r1ATj3mUHWRMZWYtGSnvJ1d67z7CnMFRofF9DNFvqbsBX29rDYXUVirgjhvkuucEeZDtGXeQg5LaZZXMVJxX9V2",
  "key2": "5va5byYzGsiVreHocgotfLYDWtLcaW4gcscwbreTmdiivo3a546iD62itxw96DTyrfXJibH8Bq6X2876BTmvfAvs",
  "key3": "4jmxor5iwGZA8AxRGSR9vNdXD4e4PpB3cuGmEamUzRo6DqE3RvLCp7AzVMiPwC2pz61K1BpPFgNNmQkHTFMxwJs1",
  "key4": "2AZEx6ZoqCY5f6U97376KJPPZ2uVr6BymDVzA9deiyesoLXvLZBmV1QjXpuBf5FjDdj94X99TbCchzvMsiMnGf1Y",
  "key5": "z3zaLeAYPWAQbdJj9JTbvTqv5AHzzeEaHFRhRSa1fLYSE2mUQqsdW4J4AbveGEgqgL5VES3ahbndd2RCRPiZCZG",
  "key6": "4DJJch9wMNXdaHtJzyxqZHFQHLRvH7HBxuFaQy8RzmPaS2gMbqosAAjWk4U2YnzHiwFmEDCABLRjXCZeubFC8DAs",
  "key7": "dBU897Y9etEXw1pLynGPkVHArVJdQfNeWPux6qDvcTnhaNDwHrR3FLN6J4kx9zm2bADrgEJEwBBHJHrPpAuKcT5",
  "key8": "5pdZL1QnjNhrH1fffy5r4VqbGfnWFPSU8BMqVD5XkqPF2X11g78t9rzgZbV3eU7aJrQkhFvZrPRkmVbnehkcRoqX",
  "key9": "3bgxeetTfcpqkxdNzJHffhxh6sxy31QRD3rQfke2vAiRozZ1XXBNa7Rn9B1SeJ4x67gGF2rzF6fTeXB4JtVqvDfc",
  "key10": "4p6PKFJYYsnfasc17BjPxWum2xxz2RLayJoQemWV9Ks3MXZZb3igBngPvDXu1HyrVXE4H8mmE8cDcoA2mRYNgkAo",
  "key11": "oJXEYZs7iA3w4zdM7Gdt1NLgzRu7rQ8BaVxLQVG31YND5pKbgrrhRBHSHmFM9kc7eLJ11CLfpJ7feFUiucr4pi9",
  "key12": "wsTGDKfgEhEpCrwVo66nzH8ri7ZVTXcQVnJQ4GLJHGWzZUe5C3UAXYbTsDDTB9Bajzu7XHNPa2eRPvaamKMMp4y",
  "key13": "5vFxZPURHYAQ4GsVkJrmXVJ6taPFvBLy6GQ6dRC1VERZz2bJDdGrz4QwQ1x2L5xTiVYHefex3K1f3vWiXJiAjtts",
  "key14": "4mN7w2PvrR9RmGgsjwppiuKw1g9J26L9BwU413f1NAVhe9TRWaabGpqqJFfQvz4uoQxB5LiE4UaZzKRq65ZvUCm7",
  "key15": "3YGWVkVhAmSYVMuvMCxw6ELmx4ckU4kYCW62rKRUqXxgrFNxjtcQhmvsmgiU6KtmcKxvwA117Z4BkNuhEfYaSnMj",
  "key16": "3p2BYrNkkd7PUTJJMRcR5kzrvoDr5QHRhSTDggx5HQJ997Z5w8A2tQR8x27NND4YEYpR9Bj2P2bTSN2Do7RSSjmJ",
  "key17": "2WMfWmjB2mbo1bC1yTnQsQuvRDp3eGMz4ja9Ce8Fjos9xoJSo6xWASNQ2zs45zKDoXofeiWERPHyBFXWKQ767S5s",
  "key18": "46qNQyRMt8E6rNJzdHZTQXEay8iJnojfX3dnfTd9AGJ3zW74VcesUdvRjRbr7iUX48zEUdAfhuggTjjbu7Szixuj",
  "key19": "4uKcJbMpStPvmnoegPcGGcsDHD7XMgSkpHFMmXPbgCdFvbDpfJjobQiM4LAX6nZCJfLz8wqiCSU6EHeBbMQimTa5",
  "key20": "peAUF4BXqFeb6ckpykSfAf6mXaVYoTiJYcSjcNdjhzFfMyyFvTDfh5SuUYZCeaTMLKubaQ6wA9CaTKu4qd2DtyD",
  "key21": "2n83ZVu9QKLjdxsYeK8jYv79YjjQcN8gfM3Egx4LvPQ3YrKFs6hmib9DMjXpN4XZMkUMBSzMcEq63wGsqZiSqzsG",
  "key22": "3ck2c2zuzeAgeyzK42AMc3uDNHGiXZsTiowZR7g7tQwicP9Udjfy9H8iJ5EEB9hSc3dQqd65GHbrC26JAJAe8zS9",
  "key23": "5TsjJTBm6WkpJ2snworGQg58frdMzYm2nECkTd8aJHa14UfyHXEPQa4pq5mmduxXhTRALBkdkanaMk9Rr23eijA3",
  "key24": "VCeQYHSc8Q99Pwtr9cNGCkebLMFQzKfMmHL4C2FcKJkCu8TGBwP3PfpRiVZKsHCH5TfkigawSo89aeryXj5EtHZ",
  "key25": "6mTZL5jtDYxWoLWvV9r2j9Hzzf4HQJqiUYqcJS8JxPoqiF2yiGegG1MZwKsFTs9k3RqiqzFqhsHnn4kryvCrKnB",
  "key26": "56EX3zZ6eLriSMxDbYkBc3geGqMGJrCcDJUKLCixShMqJeURvAdga2eqSpoNKAJ6yt9hMoKcFpxwH69FQA6ssnzP",
  "key27": "4WsaukkgXFGFMVgoEQQJtwuHQjmkiVainLcxWwBtQ26htrQ4dSpGKLmD68JUdnEErdjtXABT7LDnLmbjFfp1f8RV",
  "key28": "2guKYdAWSSqdCTbqjnW3bfWqos2GrwEHbw2Wy6VRiw3TjgqDTXRbshKnvFiF2BLcF8si5gYMjPky8iDvmNFxeu6c",
  "key29": "WnpEjum2Lt4skkAE4jFnBUgv8YseXECZJUeMWVsRuV4c2rcY68pi4hPvyaW1DXmcv94f1Jz8ZMArXUx1rRbXpQ1",
  "key30": "4KyUuBtaFH4e2f2PtgRSe3UX6AsJM3KJRZAc64mTdKATUU7kvot7K1xprTEsjGkDb3kW8DBxjsUWdgkcjYCSzVMp",
  "key31": "3TCaD5jp8A7g3rfnExurLGFa8epGSyrZcBqs9t5F3xpsZ2d45tNbFTA1nNLFrHrAXZc53wFu2tMPAkttUCtpZ7NH",
  "key32": "ievX8WmEFvW2Wqfb9yh8bQzKWPehXrTKeYb6XjhMHdxKiHqKExNzx26zyoRnsZFPgWQNqNPWX4nGV1K8HAt4mNX",
  "key33": "22ReGYhWip27YYTeoDfGG5JwsqubSjf79Ntw9LfdcdFCvSxQy8wg4HiuwhUs5jzr9kNnqecbFgjMT7XybXULEADh",
  "key34": "2QSkdtc6x4qpZ8RLEZbnQfoiJndXTSaYgaCGEg1WaHxCLnsdNZvYPvvXupWuSdwYaExqTt9TyPizyaa7YcDg8gFr",
  "key35": "2ZRPeYMcfo1Pj3jGxcJsZTSiNqgGkQhvWdEiV2sRRfja8rZ1ix3NQBaYDRF1pEbtG9UkrirPfrX1R4P3MxSQWCmz",
  "key36": "jbXNYwpkKkgMMXSfrshbLJ9ib2fRrfFpVdmhSWT3wKRXrYjQXyXitAYupC3YzhQFbZoHLwtbV6j2ddAhCTkKRKX",
  "key37": "567YLqxtmSVL6YHnNL2npuzDzvHeogRcRjyynzCSphAq6j8CnoASJsdYo5wVGLD4CCdRtxxe5muuU5WChLdrcChq",
  "key38": "5aUp9kv7mAzA1XqzbNhsPvWHbduHyuyuXUkxpcYiJReg1JavMmVP1HVMchmQneTzSGpYWJRByRpaW8xS1GArNiMW",
  "key39": "4ua87v1dB32K6xokUrrQfrj5JWq7DWbi1EXjZvBxmgTK7dbTF2DxifeY3eg7L2ETVw4nBsdHWrj5eicTvJhgP3wr",
  "key40": "4atAGgdUKJf6TAtPY7jLRNYn2EpD6hMXkBhBmuBYpx22X8HZQ1fRDrGaSEZQn9HfEgabkBv1mA7P8FFhaA4bhXZh",
  "key41": "5DvF63QQFGLuqWP5nbVnP2bUGWiBmHMFvNM5Zr4Zm5Qs4yi7eyx8kcHWrx7Qz6aKjgjdkWKq1fQCZDtytaBsFnef",
  "key42": "53BoqL9SenrrwTPfPeosqnh28ZbqqM2g4cq6oEvtbiduGHo6VL5dHo3pFQczpKBb6YqnV21cKQKzuHKGpWymzU58",
  "key43": "6mJwEhdWSCZyasD9Vwt9RAcoWQuvFqdBWhRtSLMMCSUnaascj7n2LpHBThY5LFj7Y6NwdbutmZ3htC1t3s46i3T",
  "key44": "4BL9beLjR4eMYLL8SaVNFz3V1E8rKUAHSHjYurrmKU7Eji6fWQ3xmdW4FiEpiwMJCEEDnX3Xbr3zE2cz2Tqr5f8W",
  "key45": "4GCD2D2dn9Qn4xqe29TFkbNBmKTqG92QPEM4FudjBQ3rEi3ADsDzoffKWeLsuS8DjaR5TvaADAiuKv5DKq5YkfzR"
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
