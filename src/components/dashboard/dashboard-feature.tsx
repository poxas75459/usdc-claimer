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
    "2nndVspTV95XAs2iBbZBEJVepwQiaCjmzeMVPv5H8bc9jjnKZawW1voHtaWaUo8RgPrPQRhJwU3y96EkvmTbJ6QZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cQmZDA1mj9kFY3m77zZN8W1rRP4Ny56jhAg7LRMVNbDQzzXfKGXCTqguQVpz9ad2GAMrwrcPjqdKDHFKf6Ed2L3",
  "key1": "5FdEG37Sy4Jjuo1pgmkbnDPjQVoB6dEqVaayNFPSi43WynztRHDJCxZuGebkRdzigHWTLGYfZ5CZkU1aKCJoQioM",
  "key2": "5NC1gJ3WqMdwFQoEJGgqH3LGbxBk3rAvzqzVeAcqCPidVnoCbVBLGWYG9ghfBgBw6TeLfS3biq5PWjECB1Umdyb8",
  "key3": "3K64aJGLsRAf7L3tWJUX76C4TvcKAKh8GaQTqsBQ3X1SDcMLzr9ARTcrp5fHCgpsEyiRpffpRBVFaC2iCwJxUqa9",
  "key4": "31KXQK6V5Jpqp6TxRnMdULBdVPtiHKkFzmaFP4QQEbfCbYmM3tAzknvMChUAeKhjGYziMYmH4rQJnoqcRZUmtRe7",
  "key5": "5DGKm8xaoaMbmCqSnLNTFVTPsYFspJBXDNDMEeA1S9xrEj4cjzVh17y4d89CQyPCFu1BR9M7Zm7DT95HmMti7XwK",
  "key6": "3sFC1nZDZk5nvJR5rEJRYLD28FtUU6qNVVxM4BJfbtvhR2ocU3PoshBsB4Sx85qAcWXk9GVduFi4LTnwhb6xgS6P",
  "key7": "ZrVGZHVjCF1KG9XKBBJ6RTEyZfjynYwTfYnGuJc87Fw7dMHMgigyQSwejcc3u6MTBMSyiHA8BStwZockxjfsqyb",
  "key8": "3Ls3KzprnMP5Kq8bK71xatipN9hH7iTYRfpsCpkLJP1pNUte2qBvJXx5AqsoQNh7gY6mhQBgF8YboPWazprcAa5Y",
  "key9": "4YWzqsQVKR5rXA21owS9ch5iTdR2X5KhPLGLZa8nGNt7dpRAedYCgK1antYWgUfASgeMbQyqw2vU473GWqbKiKsm",
  "key10": "51QGrPMjGVzwDgRJDRxehcR3wT79tsomxa8Vm8yCXVRhcA8zb6q5mPUnKqGezphFvisZEZ3YvbNkGQ2ZDKTjZDKL",
  "key11": "67iQFfS5YQ5RpVwsAHgHupzNKbfpQXH7Kj1S1bQzvkiAW7CpGyxJKp36cpuKAcJo9wB7YnL3DBWyF68A8nGTPsr2",
  "key12": "5b5K77GGgVUKimUgFT5CBYm88oTwjFX9by7ord5LjvYVZcPTTHjGowTdottkzkFgRvoUqGJucEXmMxcE4oijHk5a",
  "key13": "47ZXkHzoJqm2a2NEjXEQUsT8adRAKADK4UkX2fq1Pe2eguttMCpfWvsXwyRdRit4Yvh8zJV3zDrwwnSm6rikhYgE",
  "key14": "3nQBQhFMenLtCwz3pX3o7xFSo3eSTc1xnsuk8NEVZYshs9xnNKcGi5w1AnMoW5gPgpxhpswdPJ4at3tjYEEhG4Qx",
  "key15": "5Ep4WHDnDFfVvidS4JuEpZm3ZRQCkJnGU42B3Z5qBd9r7tNuK39VBd5Bg9fnx8BZv5XoCc5umRDUaXtMTL7jSHor",
  "key16": "3aCtjeJS21n3XydEkeguhsWkscP7TkqTnszgRxvSBfawSUGLNfFhAQhDB3YgutcmorAVbR7WS5F4zLWbaB9maXw9",
  "key17": "3Wg2HHFwC7uszYoZcPpRu4JhyfSFakPmWH8wNQE5eJmvYrsYtG8iRcd7Kfjfn6mg6i2HuSnJTDpAqs5zuhkza9rF",
  "key18": "2JX4uPitBUU5CYKNjU8nTuvWoM3Hqo9cB3vf2UZxQw6NmZTJuuUvKx17YWHgsHJMAkExp84Bif3pmoUBDjPXXrai",
  "key19": "2QfHiYgg16SW4UpixiToggRj4aNYUcLMuYgtbjXw79i6wJVGuyLNTJMoQSeWysGYEuySfaY2NAYQSogx8PYtcHwx",
  "key20": "46vbbup5NuMthepSkiKPS4YpMRfax27eNg32zojhaze9h4vupiRYErBXsukSAJ8pkm8eUTNir7cZbatTV5WMjKpv",
  "key21": "owoxLkJHuGZXp1zbscBVAX83Y4xCJ9QJWRcQTmcUT73VN5jR3fxpUTmyqvmUdXXGKp8ZC92haMt7azwQ9wCWWNv",
  "key22": "EM1aGAYCQPVhbmihdKAWXSUAeMB4oA45JY2njoMZEGutc9DZmrh5niFvkHSkobQyLb6LqtbQk3XR9MLgm87PyDC",
  "key23": "29eVYE7b7DRzdz6vyh8edKcZjyrn7Tkgbxbe4HYsV8NxTCHmNFVMB4wTtccWRFKmQeXQqcjd9yaehVs9SdDvtHKb",
  "key24": "2Bvs6v7aM79idtfdWW4vzbJZCpDD5dn4ynuYPaC9j9VBT3z54LG1mGFGtVjrAFBEBU4WvcumMKRYnN4A2ETtS4b5",
  "key25": "5ud89ZJAVdRq43gtZBWLFh1EB1r5STbwGEfgsGVfHFB5irq5Pa7cRKj6m8rSagTiftrEJsvVraG1q4Bg38dBqgy5",
  "key26": "Q8XyfCDha8CZJ2yKgma4MqjAk7R2GoVYjtjZiQd9DJpCm6t9XVMgwLALD6zNN9Si36F6WzZ6Wger9KfeMCKqmz1",
  "key27": "4TXdMvKn2Jeia9v1nQCjsq1jhPpWnCswaxihksphypBmZvbb5BRgwVA3FFFbwFNTi4bqqS43fUdDpnyPHzYJyaXh",
  "key28": "3g9KdTPZgL3us1wvTqQ5a3oJaorMkfzHT98hxmZ1C7C7UgiTzGhwRenWPfR9hhLEnmNCEB9N2BYtzY4QsX3WB91H",
  "key29": "yV8K9d6fKz74ttL3R8i9X7kwZk7mbiDFgNv5cF9aokYrBKS2X7pZr8g5u6qksTj5oiLjMDvChx1ReYHYGmz4GQT",
  "key30": "5du5DoBPXrWtKv8XcgeR6xjtoRMJ81UcoLVfeiefZY5ZMnJwJDAN1Yb3ifuYJRPLszdCFZBHzXKVxr17C1xf6tat",
  "key31": "5VDZUUYKZGBd4DdqUR9Jza7azHJQawvpBpvT8gz3bE2YCGh3baF64BvVga1UWejFvtfurACBuBAyU5rozJt5cxsB",
  "key32": "3VG6xPm5sY5QqMggAp6TY6KtKeWTcpaqPWvFHTsQo6YsgfkeANJYkL5NLFASpVRFpJj3aFqV1j35e3WVQsn4ZRHh",
  "key33": "25S5QpafYbAwhfcfuWp9evxQrugwmwwn7TqE2Dzgmp329rCno2HGtVWhcZsbuHbxQPjQYkdqa6iB8wLN2sY3HH12",
  "key34": "3LbJX313TJ2xd5o7SYmvXwfArRgJzGta9trQ5ujRFhbv1uouEgm7s8wX45kzywmGZPao9S9NUwH1BfKb5GhxKbeB",
  "key35": "2wWdnLJejcekZFLpX88jCc2F7pSQKN355e3anHbLPZr2HYCLRFna8xeLjqRM8k86DzMtq5yKA4FWvhAjXTSY2YpK",
  "key36": "5EumFFZu5tSjFYWUrH3A7iHUBwnFGHgwRrszuU3eQRGFn6M4WJeCX5dQNY9ySKAPdHQTWXUWCRpeSVxidrUU9hux",
  "key37": "4zGVqjnUYea3y3fddacMdk6w5EPrn2XDEFAqXrcDUEGKkzcAhTBST1hsfzrj7DLrY4Zv9m5UDxMBDV2tqqsYKq61",
  "key38": "21JExS8aDSXQKxsDMGKREA348s6u1MyGw5VY2TLsYFPJXbqJRxAjZTcxxcUkTt4kGMp3BBt5RyfbeRaqStSnfejG",
  "key39": "3wyWuBvheB4WpWfCWNJ7o8LLdPFpppuoXDPXpeyJBc6RnX1VWM2HyPXiaF5bifUHQbS8nYJWRqGvtC6wf3hEPmNq",
  "key40": "2yR5nUicD2S9nn4X4TqSpf5LPCZBJUHNrSusKrxySmKjWSbMdTaAg6TXGK9KZJ4xcwL3iGLcBC3oSzBbizQCjYjK",
  "key41": "2ty4tCxa1byoFADWgpJYDy4JzTjxoE1YfPAuvtnq2bPFWJz1UJow74KdLZs225RWK6b4eMCszEu3hd3r3AjwiwD2",
  "key42": "2nCe2MutEan9KnjQsL9sVTnJVq4J2xz87H3vv8KCgwE6esGenEZAT9zJ31vNoKCNpdiRJygYbDwUcrFr1BqQMmMA",
  "key43": "5ApE665Vt6M7xYwxJ1AV47p4HDBbnV4rRNqFbmrYXQB9smLqRDjbb8Cd5rvKNGPNoJ96CuyPixUm8KnttK5XCHvd",
  "key44": "2nEHRUT6U7tVSZLWhx3Jvqhm4XRK44BJTfSRz4UuRk6EfooQfw7HFBYzAxS5icdPLFy32xmYCn32PrqTiKD9pAPt",
  "key45": "jPBzTPGJtqYSYkN5Zo7LErUdoRYsDHjXy3T6XdzwyGGgRFjUibGKHzcDaE13rmTbxCH7UTwj9CL3UaUcGv4w6LQ"
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
