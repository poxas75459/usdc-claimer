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
    "4hhY9n39ZUJED8ANVFWo2v33Fq8BYt4BHC6S6vW8DWj82McKpTVf6pJ914CY2WDqwh5aUS4GMRwwDp83RLAKKrkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pPVzXsQs31vtNkLgoZ8FyUurxzcuebbR2fkJnBumTxrpZs1E6Mi9ARF3mWpspRkRRZ4q8N72AXtyzGcr1kW2pcU",
  "key1": "2V6YGf3xY7vzHrqJNxGoRm6GXQpDekGM6oH4pBZrvvPFfu7SSKTdakBi5zMcQAcEmVKbJAxgjTbqqKR81gHHmCgH",
  "key2": "5oE6FRnF2ZJovsPnaot5eqGPNdGMijcrbZyNjEk2QkfPFWi9wdPQLd147suikB2EGG9VAsMF41XWPhCcxrWZpQp",
  "key3": "51iwukYfAguawiwmuQVYtuKNGgBPBpDUFdWN4wZnEip4cWi7GvrHymSTaoBHfbPgJosy4ZKgfctktV44jgcQMv7v",
  "key4": "5XZVywzBwFFXYQgqT5fG4WAmtkihHKArr7M7Moszzsap6qTN7AymCtSwK8dAgQvPgFZMiXp5KWAhcckyFKwk6wxA",
  "key5": "2jEwwiLbDW1hxSSN5UykqrzcQb3L9Un4VvNzaJjT3GsiJyb5AtL3ew3LVpmNatpxYExSQzhfh47h4LRyap3RTAGo",
  "key6": "2YarMCnE2KY81VwyBzz2g4MxP4hvJ1sU488o2ch7n4ftNWH3MXjAXAYbooAr7R7pvEnHwazqnVuogUWymcUt9ihQ",
  "key7": "5YxiXMYZqCicqAhSECZB2Yy7K6EPzxpSxSyH8kca1Dj8UohCX8DRCn2jCKMXcFsAU7YcSxfx4Ht88Bds6F4sLwCT",
  "key8": "2iRYhGEWsYMZZqps4oNNgH7Y6hYGevhqY193BEqVcebVZAR9KW6s1Pf2g9swMZSqxryi4wC5s2kvRK6ZLEPQWBmq",
  "key9": "4RxADJ8WfENdypMwJVpTHoPspdB6cLQ9A2M4oiY1YRtWQTVApfSbrxEPntLcQTBHUGYHqbosfE7GfCGuQDmCwuqe",
  "key10": "5Q8RZZXAbyfdnUD3hb1PwvGz4EsEJgNUtezh35uXzDYKEXDvkjw7r2hZtT8YwpqadCAGbiaGJGxovULTvgSKyoAJ",
  "key11": "4djrkVVrAyfoJoM7C88nFHGc6rUxNAswZX1T5sTSwzvHNfgy8DRxLoVLeFTtGZ5uBq7qK4wudCxB4MDMzy9kY4T7",
  "key12": "5iT9cG12s1vKhHwZ3VV4daHiaTeUUtzm7V2bVc7dRJk3YXQyoaZqBC5w9nSZjaNmfimUwtTTGeiip77k8wXZzhZb",
  "key13": "5fugj6KbNV1c3NGqiP2xq2s5E1HzXkhmxeH5MSrbhLzo1yDddAtiqwL18YMYVQcMsWBE2sLnHdu1G8rtaCjvqHSK",
  "key14": "29MvEfTuo1DkzkDjRppRD15kR3nXhhdUyBDDsXfyuHTFjZE86SGDoxnAP1UcpE7b2tR962X2PasLEpX7jCwRMA13",
  "key15": "4bRufEZcDG2f9YVMqQZKQbPjhS3F3emkEn66X5qLvjtvUtWLSiZWxqf56mYJayMTtzmFqMjjP3DBtAfSUPHVk6h4",
  "key16": "3bFazvQfjbq2j4PhzPw226na6fihbAfmV7MrdmkXrgybrKNCd6CauXkof9CNXUb6WsyETKXfH7Cwf5VdwteeqMRL",
  "key17": "2gFKppRWPHixXQuJM8Pd4ksy7VeuHFU36PSJCYCdRKRSSWvut9L2vz9gGgQ5CEyc7EdCBZ4rJ1eXXNyMvAxAEApk",
  "key18": "Jn4eRV8YyWxWqkRhWJJ4WCYZ85yFMjg9hWpgaC8dfbG5T9iXVZLGm638SLQWu5ZHX6G5a9iSguJg8wbHZYPrj4J",
  "key19": "37zwxrDyH8F3SDLLdBVRRGdaLL8GFymepU8p45ipk54REywBhJ1Q1UAZpL4MWQzWHkuMmyZPf1WKSNzYs7hrQ6ZF",
  "key20": "2vJVRvPZ5gcmzj2jxM2c7np4VUtVW6u8TQovogYBATrZjcdMMUBvPrFw28nPUrD3sEeSQoRJo6UbEBHSYwJcXaGh",
  "key21": "3SQE5ubdRcEDpjrBaGkMjvotC6jGFdDxpYhe23f5ZcNE7RK4X75rgvDyoPF4TudZmrBL4ihh688qKi2NJNpRBNW9",
  "key22": "NpjCL6xgWs1ofQb5ncwteKCA8JboXa9MoYH6Pfg8wiWJNvMQxztJ6SLWuCCY8akVp8w7T9ckNVXqy3vXmRAeHRc",
  "key23": "3NZhACx53syFWyP7T2gxHtZtUrZEBcXSmiYD3v5JjBdFSbwsWeNYETjaacVQTWAR2G3yMHDFR3P8u2nrcJxFay6q",
  "key24": "3sHK7ceNpc4nLKRCBQvfSbKKB3tC7KhbHr1gRsPLccu5tzFWqrhQQkC5ZcJnQifmQhnLqLZtP7ys7wWHXW2xtjd5",
  "key25": "34LqSY8T56ybKaxUQffg9boaWRgKqDBXcg6mC4Fjw9XeixuVenT3rNLDaSCEe9g7jHpKHM3hXrSALK8qbqgjZK5V",
  "key26": "2tohXpEJKkZYmXpDYBUWaiRjm96JcwBzZYbdrcvE3ho17xA2m3BwGndzmxQaqtMwjbLCU1Ved78sug7ZzQhNwpCx",
  "key27": "2YKRSRX6MVsg9hPtQJj23syXqBv5MiYU8p25EBK1uHa2Ke4vG456PwRcQ7UfW3HC1N16KwwUmL8Sj6Z8NY4Z7Eov",
  "key28": "4mtnEejnctrmoS1TxTzzNRWAt6wuWCvWfstF5NJaAw7cgMvfBTyLkQ1vnn8htNsGbXvL56efPBz5qYAbjg4YdyGF",
  "key29": "tq1zLrSPJPpcFsoLQuNY74pufpNPCoafLgpsxMm58ShtbzRn3HjBpVs19T61bzbdxPMVMZEJfVFJfx1cCyRmztA",
  "key30": "4csi5MgrdWkEeMqcZkcytTQePJvKN3mFbfSxw3UCP2VbhCp8YLmHTT8sMLg1cjHYfJVzAg4PTYtnqrqNRMc2Zomz",
  "key31": "2AzeGMCZaxHxDdojgjDdPiNgZMKXqfs1P4991WBqSDnLtZVfWmqnQnMyyeFTEbdSHjknbHGK52ChzJuJkrb3RHuH"
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
