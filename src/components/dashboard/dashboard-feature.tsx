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
    "57Dmw4wJPyWkAXtUQCTPR6PM9THWNzXjeXSFzgBeQ8DYfLyydSpixu3spKvVUHnqQvcDXSdJQykUZdcznyNYxUQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MAUe591GWrCWjjz5STn5Ewu8LDJjwji46JCmsBstsEUk9gtcdW2jcUoZVyDnJckQiHUf91DtQXLk1UVAqKk88tx",
  "key1": "4X2NUQDLoksbMmRQxebkTUNyzkgevougFw8kdCG7kBU2disRDzq2kGCfNXhBi5radGHnYGffw1zPe1W1B4r7ZWvK",
  "key2": "3gby3YnPMY2PCWP1oqQYQEpDYH329Ln4Q1f4gghTvPh9S2d4rNAXkRsMjyWcUt3mc5to46e189SiGy57AtGX8oaH",
  "key3": "LNacQ9uQ7NFYKVTmU8aa13EQXojsxZCoQbayfE7RWz42KnngZ3aHEDhAXvht7mRiJG2nrDHm3C9Rb25FjH64hPA",
  "key4": "2RXqdUkNeNjSy65KL19vWhToxAuEZamscZdZM3SfXrNGU3UdxSXRmQhvJNXJ5ZKcKeacrceKcjMgzZMPZtAgcGP4",
  "key5": "5N5LT3j2F2Tdf8PS6YayB9ZRhZHq4zGA84SfXbcDdDqkjogrwVxfKdYpfEvyTdzsxfvc3k1YuNYcmGVgPvMhfQv6",
  "key6": "5zzFAgzieByZrRv3319yTv7aesMjDu4oKTwUueGQid1YNaSakxtTNFVBqM6LKviMrnSTLKMm7jAD1EZtnAiyUiMP",
  "key7": "2WRQWHP2jSspB59rYues6L5QcP7CvijBw9xDCkKmHaJeYtUppRVsDjqXMGKDWsKuPVzD71QoZrtNQskWbv2GtXp1",
  "key8": "4iGhs9UaG22C56CS1o8jLLsKSJ5ZtuDAwh8fG2FT15gwWMJaBWxVEcxr7kxH7xB5uhSs2TC91FWnYfvPXof1VQ9F",
  "key9": "2eAh8Rr7UXvHzp4LGXbv4xSq3Vqitqkp6okJfSAxmMEgKwcrZVavYKZT7yPnFSFrgXoBE4nPNaQrcjW6YV9osMoA",
  "key10": "h7CdzMoLaFVji1cDzTcns8Cf1tzYWpLVLoetL1S9WSP3eZE8sNJ5cETdskDawZsG1FteM7ZT2HmC8E9zD13C8HX",
  "key11": "5yBjfCLt4dabSpZsn2TSxuKLhiiTgasxcxYhftbwZLaF7vtS7qtcm3qtEMbr5hdHqLaUDv38cGZ6zjnJeWW7E5C7",
  "key12": "49wRgdXxrMpjHCYPrdo2hZRhGnhe5xVD4o3y3PHk3mYGXoATz8Z3obKV7fi8bevYCSPz5VGtgCDtmTzoj1dnkkqp",
  "key13": "2VKedmp1aRPyCfcXyp7b3aWd3PiNiLYY8gnv9hH6ntBPrtFycfrL8jQsukPBgcxM1eNLrwJGEYcCjnGiNiYo6pqZ",
  "key14": "pWJr4Vb4DPndD74GEudQ9bGELcFeDaocy6C9D1MTwFhd4XcNMamh3MQhBCZKUVso2T87cj9mztifnmej2AzgjNr",
  "key15": "vZmTcMzkgrnyQQWqaAja9aqBXwWJvX8BjkaLgnBMGqw4xXFo8m7ESKHc5Fd3JMx3vVEvDpJwwQJEcGn1geFVoDm",
  "key16": "4Y7jeJRMwZWkrg4J6i7zxXCVHjg6eH7TzVJ2AGLLwmBLfBLdX76Fpm1K2r448MaAQ7Q75YHuhMKzJ3RN9HmHQVyB",
  "key17": "2QQJCdPrJYjVL4wkFMRGCsPMTZEEBhpvwW6BA1zyPRXfWbtVC5vDPUgwKrtNyLxwX9F7rvQHkq4eqXTVa3JN6TCD",
  "key18": "2N8k83SHRAySfPxGTh5oWcqkY1eow1wWzdjYFExnH6LVd3fgs9jJBTLW2hBXV9oFyveRR9eDtTPjw1aWhVaWK7WL",
  "key19": "2Y3RQJTceR6GNZQ2SeWVkRRkzSkxnBgfwo63bWoXwhS51gCXvAGNXFcsN8CpS5ZeFBtgV9TJLvHLk4tPY8wHGy8e",
  "key20": "4ppYxStmdB7PTpPwdLaS38rdr6PWwvkVifwYiAb4BDwT7ZK11S3E8vW81GvtMk92AkffdYgeMYE1hpivhrBVUNBo",
  "key21": "53qovkkKULKu6pKy2LKbPFfpLh8qJbRQ8o8U1oVYcVqqf93HFbwovxVqPEpNZe8L4rep5AhNMQqYYKsnj5N73wHb",
  "key22": "27hSGiFqrjyPXL6kEfniXknDpHDkDpKyVvUH9wuESNSL7pBA1uRmbVegFxh4hSSNHk8nivvb5wus41tpf6PrkPfj",
  "key23": "39EwUQrKUBn4Tei4EvXWeW9fBN5tfG1K8SEVKKYsL7D2Y7z6PpB4WvxumsBWdfUYQycC7cRkwM2arUCqdyxmipP4",
  "key24": "4qhHVzgBdDUY72RvQmvXFeM6k14F5xB8kfatiSSBeEy9gpU8n6toGf65R3nfS3HzUQiLK7oiQFKgnyCCgGN9AWWK",
  "key25": "3uBaBi5MX7K8aydNWFCS2w1KRRwhCb6qXsNhTM8nayjcfyDGwLXLxeMDEnN5z9yz6fJVqNpaYb5KrSJ38R8mR1Sv",
  "key26": "3KGFZVMDs5t51WhpkQ2CabtYJkuWMxi64jvMApgiYRwEkkC7VAjwZcHKJzgaKybWNMz3s4YJy1iV4v2zJiNbn17o",
  "key27": "4P7HBpLtKvFFMvEKWS5eRdjuitWNLZxaend7kMeSR5APWrq9erFtRa9YYZf5Kw8EqrsHnnTXhys89obyQa4FAU4N",
  "key28": "ERrLKN5vSme74yhbBQpUHz1DCJLQ4SwFMLdtQjK2DAvW4h8CfZQE414wd2iHhRtoLN6LfY2927zw5mrMqgfcusN",
  "key29": "3JrhP1nuWdGKe31JmJaaVzPxW2G7npNvqm83HaF7mesuZf1GyKZNw13y43tanF7JeMBoTz7VoTEgjQ1h99KEuqA5",
  "key30": "5RfAAJHJfT8sowNKRn98L21t2ABV4zmuAwDuW6qJHkd3F37sHHQJAuZKxyQErtAwR4s9fMfiLkrmnJKV9oECzag3",
  "key31": "5EgoJpZD85nqYwgebAoNozTqe8mVX9Aj9qNuxLTqgtmfPQSEsXpbJ91aDfXhFQCjU6LPzfFAmrkiW52W7uyFa3Gh",
  "key32": "9LPtppw7AfpN2YSEUN2UJwGpbAkwWPLj5ZvXn66aEcFjojMc4HGJZGbyWe3SsnRec3wzHTGGUp81unP7qa4VcBc",
  "key33": "2mq8kC6i2wbxdT1bu4FimdLA9r6diPUEnmZ8C37tQbk3EtDmjAJ1pnzkm2aG1tzCNYJXvUMYPvo3poxk23GY7vQb",
  "key34": "2MjQk9gxtYjYyuGgqGAFFYEMsRPAQkL27Aq9idoUiPGbYz958CfGgW9sAnfzSszUg5igPfaswm2BEKRv8n7atiU7",
  "key35": "Zrh7E5bqDSjtu9EYt7kkJzE2fuRdRy9tUwtxJRgfRH1kXiszvQRGy9bxYomyFKYhbbck2ZWFoo3jzzxDvAQWrHS",
  "key36": "2WMfumUF67r3Udk3EQcW8cH9qtnhUNeGmHihaUSioGLWMg26rgS1uTTgWKfCNqMgNVX5cQgxTQbMwYCd9xZVMXsa",
  "key37": "3tkkvcUwDsskA49AfDzLF1QGC7UWEj46sNFj3xNsox6odL3Q3z6ac8HDjjm3ruwat35bKNRkBQY3sHPCeLhK6Er5",
  "key38": "2HHyZ26wVH5sUrwbDrz592LNS4NuAiMvPemp48SpQAVgE8PrVRftswaFJg9R7SzPYMuW99XCijytkJgGQCbRZ974",
  "key39": "6utJ6UficxcAx3sq7DTttgoJJsGYzvXNZkhtVSwqH8ep9Kn25X6C9MdPRnU53nJnxjreRwTJFmnSeyeZANK9Muq",
  "key40": "yEtS8H9fFykV72U23nPUByn1twRLh94q5keu5vCFmWH2Ke6gHU652eaMC8PceuwDnj1PZVFFLUTyhzYKHeinr3C",
  "key41": "2AnodYE5k1dY1zL4XKBPwuPA1VxxPsK7uMoSyvqwWvEpTKqhbPq812eeKhqP95edKHh6gu37sx16Z9NtbTq9GD1b",
  "key42": "3rTAqitrwVhshF6NG11hAEsyK3Yew3hQyXNyfxXSuXkkgm5yN1GZmKCKCFcNYki2ZpHYiWEfZsMBndHHcSs9s2CM",
  "key43": "46oQuTVYv1dspkVh9WCWwBTPPBgezzPZk2E3xcBb9jkHyu5BmUtCJshLpEMmXwqPCZYRahK1opibaZNznKLiurHh"
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
