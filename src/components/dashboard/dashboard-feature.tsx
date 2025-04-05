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
    "3QwBRuZ96Ao8Rh4pJ1tiqzZTG5MtPqg9GEwM567w34Js1UJXfbeicFvA8pDFyD5dFLXeRswx5TmprWLtLM6kcNxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LD7AGrM33ARNpZghnbi6huvH2GAPfX3wW9eX2zXdpaszcK7dgKrG8VcvzFszHijz14JYimBiyjZqqMrhQ23BJuT",
  "key1": "5gdPzRmmwuGbNa1v5TEV1xuCcQV53sipxEwUARcTbyrXFpmCA4jMz8jSe2GfvbLMRLAs1GRU4mFYdYDUZZKob41J",
  "key2": "3bvhP2Ts7zd25sHuUh83K7uBn6HM1kELbUUe7FV2sHi1FAgmdZSZ3WqooZ1mV4ZMcDRyMMpKGDSjyHMQC7YPBfLa",
  "key3": "5wCNc6mD7smeW5pUJsqHTSrQacE1kzmYUDZBiw1ARZHNHrgUkuYn9znj4AksUjo8M7nxYJexa8axJzmD2aBof75N",
  "key4": "5hWEytwuDCrNzpqh8aF8DAHz7hwHYcMFDhECm3FrwrsKu9GvrwHzZB1gJ8swVnUFi8Qin3MmYgGfUVitEi7GXB3u",
  "key5": "3QihB4fb3NbcMUiNdps4akYwpyxRfFyn4izNJabtVhTcxLsbjWj91N7H8NKWUcTH9JeaaVJSEXLPbo16nu7g7H5D",
  "key6": "3HYC4agPKSUC7UJW82DcY7hqtUCkCXoYV7uoE3q8PLxmL9Y95LvRRxe9XJJjtdQcZjbPmBDw9D2Wmw29FcP6rZx",
  "key7": "qMoauKnK2CKNSYwKGxGdBGYD1WEy4kNrJLEWNMmB9JFpVyGPx54qkC7jYQRwFYhRMU33pjvdWJLZhcGDJRtpjnV",
  "key8": "3FF9LNMwXnxWbB8MMAr6ZbYatxrmfDfYrkGdXwBXGY4omCwzG96xbV2yNPJVATSqTKNnZzcQPsrRW5eEyQDE4z4k",
  "key9": "5tNBnjnyJ8W7LZs3e4wtb4o2c2sm6cQo9yDz7oqbzTBFdJSMs9aoXK3QNcybNN9ZzvYGrLjFVvHm36PEYn4bGFNr",
  "key10": "2oxgWh8JqN3o4HRGKsws7Q3pgbQy5d6jvj1ydw12puRX5F6EzFaopQNRseHZiGmE1Wu2udaAFBgJkKLC7DNQ7zM6",
  "key11": "4yT4cPJyijn6op9mQtxR5yKEjaW854nJeEjc8sQAcASK5L4GE7fb4EHRcoWBsVzFHiPf2vPQoVEVakHc26kkncon",
  "key12": "2oR2w1G6e1umho7NbxuUbyDYmaTi55z4KdLjyN5tJYcL1QLYKYeqWHBVSERPPatQ9X8S4ji1xvPnBU6hYUz4gwYT",
  "key13": "3sXm66m3EyzRkLEXS2QmAGpKWawpKy1qhbDkZRDrpy9H1E2NcLCK54JFsY6GhVYiEBTbW2begdRmkVtaZdpVWenm",
  "key14": "3KsXJmab8BXfhkaW6Qd8c3XFUhVUe1E2fuaVNHaDKm2HmvEDHCxEQQdpDYV7UxWRs1yBNhK9DJBsYNbJVd4x9ZtY",
  "key15": "4QThdphks8TNZP4Ru3R7x8NjsQofqtkxgUhGvj3wvpWUZdyWtiCJeECCzJZFcT5YXa7vCzjp8AHFbvVHfetfnx8c",
  "key16": "3RqanuuLEz8F5ky9mGrmLn3tT9wKjtd3DFALvorc3SNgSBU7UcDtpt2DA1gDWzJAv8BpnZSiimKDwMKkZrT17dEF",
  "key17": "5BxteKi3Jt4v4vb8Kg7iCWypQonhjEMVBpnb94UoXWeEHgiadYs6UH4ENXAXhZ1rgdrCtGZ7XiPK8XrLfpXTuYAU",
  "key18": "42KJNufzm4xfYSn9yNzMFsFX7EJL6UgSAcTLndKZGNGJDrM5WgccLzfcFubRTKaVzB4VdgeVsSCJXXZobMbHhJA3",
  "key19": "3hYFmZKBDLefqv1uEMQeRaWKgmHnjSKJJGNpTUcqrr8J4tz9bbYfa36MSNCbUPMsPBKrALFvDBTAEatMGsH15ewr",
  "key20": "5x48tpfuwH8JZprmAsdUuB5zZqKLWpQQXShJgq746e1EVwmWPiDP8s6ykzEykE5r232gMaGkQXZ1dzJ1f4d8Ri22",
  "key21": "617igvH1ejfcCxAwuLuPY2FQDHqSGe1ihvTboMRkhwUaMs72MMyMGo4qWq3UrzDG8mNkMkMk14cVUGDQvkcnnFWL",
  "key22": "5GF7ysiWLjCcdHHxwcuLnybx2pJUsxXYSstGxtW2DJo6AhKBFrb2Va1UXMHqUMhReCC9EBNH5N1NQTpueTJYxXVA",
  "key23": "5QRjyuLEXgwN5Kicomds6LySnPx9Kd5sxeMHtQoYKvn941S1gfZsFafGKCZYwFbiRSR2tw61uBjm1nSS8CGLgtU3",
  "key24": "4DPLfFANvBxswSJq7hE7yv8geob58p8pEQscZFyqf6bWs7ssBEWuD2jYsekzYtmPZdjUE7dyk5cG8JsRNcrPib21",
  "key25": "3GLD8TzUz1wntoiTByiHEtn3FrFKqvUBHeYmpP4BuWAZ4eyiBsyPiNBUqZS9T3agzP11HCbnffFGEJJEqaQjKe7U",
  "key26": "toRHYhXJn3cE56MyNZ6TMUzYzP5stHJsZfjmKYFqtgYi78t1qsiXu5eeKprmzeD2U1G15tsCxpYQXRS6kYXe4jV",
  "key27": "2YfbeSPnxk27XrGvxf9iDTGyqhd8xisdTmbuQMcBCMa2yhH6Gbd71exv5cnmycNszGaA9HLcW8WHLJUXEfest43g"
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
