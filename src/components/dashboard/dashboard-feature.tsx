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
    "5H15jfZxoY3JwQTPF2FBieBcLxoyTd7QmEWRDkas14cQTdhokYMJpMB4tr9tq1RGTfo22ATnrGyfZu8R8BSYpNdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NbSV819c4vRtpg7JbYxB87uqEpiACtSyjE77Lg54gpFRLH9hRFWM8eqE9dbpevxJH4QXX3vdQdqbfDjKsBTgFqL",
  "key1": "HAe8Qe1hAybcJsoTGiBxDw2PxqgmP3pmg8LJkNhmy1CpN2HZTFjDGkSmxv2z1yK8XboddU61CpiyhjVUEkH8tmQ",
  "key2": "5cx2HT3MmtqBHSRFLEvmYo2jBmZjcsjCbbUP5XZQeLXA81UwWD3e5mKS1LhzTNW6ernyQmSqpoRFsPKp3QhStav1",
  "key3": "pWwjPE6dKB3aU61ATj9fkA269HjF6sZv5YQ1LLxi9dk4p8rKVLRKo8W3Stkj9zVwT2c98KR9HxfbNZLZf9t4s7U",
  "key4": "2CSSso8LJ9ozGs9qDMAHae851hJFb8nYvJVu5xhX3XwDFvM1hy4y86GFZdxR91ksRAY4JeM7mmk1GhLt7VRyNfWM",
  "key5": "2tn7Vdci7QJyavBhkiVuoygFTkdcLewyNqz8ZS16byWUZzxQxrwzYs849hA5nHKnA5MUeshae4YmQH1rUwk5z6aY",
  "key6": "48WSWihBNCAe795LRBnBTsShiaB6pyaSdTNztKMF3tvvqvwNhFU5FZsbvBmBza5vptN27zMECSsY4k7xj4rPuJ7T",
  "key7": "5EVHCcnGk1bpFWSKa6Arc4e4FAh67dJAgaj2eemgUpEdZfxPrwKNSmBjwdqxorSVhiQ9EdrAZmBs3XUS3mThfZKs",
  "key8": "5CoLB8AXU9k6xx27tkbQpqiKY354ugUKStBqGaQm147ZrjkRPhMMdDyFNvM7cAQWeXAg9uUUurnY2vtdNxYnurzv",
  "key9": "37y8R8qKdXQ2DqZj4xrnsJtaviKRaFHn59he1KsZskyA1yrVsrR9sSux3Qem1CRQerwxcb3FL1p7XXvVktatyCve",
  "key10": "43ihs8XcgbWx1B1eNXZPYi3X77oR3WQ6FuabB1BTtsbowK4bddjb4ayKMcSaUXQuTEErACBsvSGSy4o29gudx8Q4",
  "key11": "1CpnfvKJmhZYs5qUcHmXJ5tYMNsFYnqRkbotV7NwLX6BT525LC3PnrvTmvUWB9Y58jPHiaLkS1NxL6j6r8BNPmd",
  "key12": "2ScLMh9EtdSu6GK96Aq3JYxyXHUpbgKJYsBFMQDTuyaueKYZPLvAsvWcMtDquEmXAXvK5kAdNHoksHn6skEP1Dzb",
  "key13": "4uYsQXPciyQvR6HFs3feqGX5Ztj1iW1LpkzZSuCKVA5SwmCnTPfoskcMctLuuqfkszmtiSF3HkvAjovo5DSBks8f",
  "key14": "3d13s1bbq6PrXzxgpPiTqbUYPzMPANiZWQrLBbRPvY5zp6Z8ki6fq4XbwxXDWrXDdEQDLaQVtJad3ZzcXSJS4Fgs",
  "key15": "ZRJR8zSLH7CuGTXeQs9eFTSVcDqLijHayFALCqKAmvaLqyCuYkCAJTr9zxuwfvoWeMAoYr9TuE3x8Hhm7TXbxt2",
  "key16": "52jN3wi9SqBxt3JBqqMZ9kJ3nfbneTmrBXBAuWiHAArqeVdYvjBdkeG4wWt2kBsuE16e9p28NVZoHKxq2YNQuSJw",
  "key17": "3zrMyvk2sSAxVpzZJApnyB1HVETVzQYMnqR395SnaWSnpb2es1TQGk4NcYQauAHe6GCCw9CC6jhCAWKCoy7ZL3A4",
  "key18": "4RgwnXv1scKrshcP1bmni4RVQ1EcuvZxY7FtR4PTUMDYoGTWQC4u4Wue8WjohiaoLKyq7Dud5YBEXxi21M3nMved",
  "key19": "2bdTimByfi31P1XfhbfhtZAFQssAAeohKZDRZkoHs4qwZgDi1qUNz2m6FZnqY9f7cvBv3WTsZLYxkgJNZhNkghQU",
  "key20": "2TeK8LbMxFdADifKDS2dVkdrqcHDVg6CPnQsfsZxnEez7vW3Gq6JYkVvrtVs6zhbN4DzCei59JY5PpiN5P39gY75",
  "key21": "KepS7VnLsTdvVqLu6vwWP5tyhvyxWod3NNctThDs7yQpk2yiN2eqpmozVfQBetsFjm9sPMC1roVUGohiPa771F3",
  "key22": "3cdUraYyjURYUmNXbi1YwgNDG6NZWTF8McUH3tntzijP6uGvWLtPziCDb4niuitTUS8VeQU7nr6g2BAw7FFyxHiq",
  "key23": "5SjicvYggebxhTRz5888h9XJyuKjvHLRFy96tCibN3Cgp8NcMcL4NuG7rmFx56Fw4zbyzU79B3czzwfDbQFpXbox",
  "key24": "4Rkjfja4x7bQryHp9yyaKV37MYb1Paoe6JvyDAhH8tB5o2TGJgq4eGYcvqihGvcCTkxa6JjQ48edFCoo8nPfA4is",
  "key25": "2N3iL51EYGJm2nPJiM4Se68CTmkWT2zMoxRjuBKWjRkDS22tjM9FigS3YYT7x8Aguiu3JUibghAqSQ3GHTEhGo2n",
  "key26": "31UCgTsVTQ4bjxCVfuxPcsdJfShenF8Y1D67yc9jmzRYTnmKPTeNFu1wY4W8JVmqLNJASgVi3xCv6Y1AP51GvRgo",
  "key27": "5we3PqJ1axeiRybDVsbsF9cCu7SfnjuU7eQ7MoZvGUBv65dr8MrzhejKZg8CUmBo6Tuq3qD7o5n2k8tYADCwV5X6",
  "key28": "2G95CgLLU4uBrMXYKV17GNSrf6q4gdWoHPRP9h9Ns2dteuRCGgGbagV3jRtXjf1yABuJVyRpqkPJYtug1rBZPGGg",
  "key29": "CWc5nrKQSvPc2NwhzLNeAPc9Lhxqsq9QvS5r8mjYNREpjBTRqmJfBmdb2hrC8xwzSEpeZE15CnNNt8iRyoxxgoZ",
  "key30": "VNf7aQBbMFDCsAbTGcKMC3dpRZRGqeGbetApvFnN547DBJYqVU2uN1JHe5LRGU5rjrP4jNRKhtY23vhQ49bxYV4",
  "key31": "3L6J9bpM7KbjogzjbUcnDHQkYPpQevqd1kJ9gvYnPSYgkfV31MZtViVaL4N5YEZKiRqW2nDBV5aTNYmuNyvoxmxb",
  "key32": "4ESsDKEdVPcm122AoaqFsd9KQQ4kEvg4uv6RcvEtVWV8RSzS8wf5CyQDQS5HQNz9SAwQLuF4zWBFPC861TyB7mGy",
  "key33": "jmrHewR2MZN9bn2rSfeRVnTndDyeyQbikFxTtgwWwiJud1U1zATYDXvYQNsduWMvWYdk5kqGAbd1U8RspzyaaZx",
  "key34": "4SC8ZUhvWmWqRgDDv7apUqpRzoQnZhyQ9fUL5tvo2rrS6XTsWSKDHyMmvweei6fntmvG6nvbeQ1VKaTthssPL8yB",
  "key35": "3r6tPRYpdTiQbREzA9DUELbE25kNkVcw46ymX71BPUsQuwEbVPhQt4WyszMRKLnkchVcSXY1sELW3yxcRZRFbZrW",
  "key36": "41aurb2515v426tYpjNESRXGMUrdLTnvJzxshQtERSBRtbcYfHKQFzZYW3dVKLJL3xMrA4AwUzm2F7b6vrGFEC7a"
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
