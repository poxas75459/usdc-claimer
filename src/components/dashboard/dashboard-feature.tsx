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
    "48qWv1TVk1qNBxdg32jFZ6WAwgFTxYKsBW3yzX6WQdx3RVrj8G6CawxcHhjycpTZgFoAVo9GzX99T3a8btXvWPSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zWTLpEzgkBJYFNb7Gne8iwtMsUpnMiicEaxxsERpSZFW76mywezMn6DMY7Zsw8jBVvsDiwD2HNEgeigXCPkGkN7",
  "key1": "5mPkijgjnDZUNpacFYCeNYs3WWs7NLbUy8jNSU8cHjpNS3wZhAnfFUUVzvDfkPx7Lb5qwxyFMZXJkW6VUCzZC5Xj",
  "key2": "bHpeS5a6V2vJeJbTXFoTkJzn9BBvRpjDXeQw6t1ZQK1A6bbMNgXrWqTWQq6x3NH35At871vTJuTxKWBEsi6UAPW",
  "key3": "gYSkabr7YUBLXyL9AZX2UyDhDf4s9H1NsN6aFcQmVH29hLk4V9B9WjGintV4EPYwxosdz8BRJUeMgXyTF7LVEvj",
  "key4": "5wKjUZ6Dv915P8dtKJfD1dHLnL8ovKm9f4rf3Q6ReUXsgrfeekJYHUFqWSC6choeBTaFf7UVtCkgrQmEzN4dMSNw",
  "key5": "KrSJTgaV87rMQapFinXkZECfVjPxDiaBxHxm2SkqigYtZ8a2ZdY57nSi72uz5LWHNUfMxrQDRa6jsgyFPbZqVLs",
  "key6": "3EWnkrryNTE8jKgTVE47CiiiH1iNMR8irvNSgE5ynUUjBJs6cMrGiVthk645BS476y13wYWzKvhTa4tmYgiyN2SL",
  "key7": "5WMdKoyV47ZmwPLqpYEY2XWbQ9XTm7qNQiZrpxv44kv3ocQ59MaE73b9MXMr2hfRNjAe3fN5TtYCo2GKWwWwGGnW",
  "key8": "2pHfbu5u5kW8th11mBjSUXBZSdhfkpqALuAbZY3Re62BSB5PN73fxwMbarjxwCaPvS1UaJVJp3tgKwscqRgdcYyc",
  "key9": "oNcgcuGyCRR3jZ9mua5HhtUCn6jEzK9vtcUcCWqqjz9NZ6Qspfsj3dH8BAXQpiSsMAxwhsqdugYuzChmYRJybLW",
  "key10": "2JtoBBWowA8sKmABnrSrY83gArkWbsk8Wh5YEMzkdsgekkRS5cvPAVgWyqX8HKTd3747aopP8RWWZjWzQfbKHgsr",
  "key11": "b1DR2bc1ASMDAsGGpPE7UPx6gbxtoWiDB5QbPN5grCe8WudnuiRJHUpja9k8utnQiNd1q1t3pwKy4PMLbFUPnB9",
  "key12": "2G6d6fDcjdwj9DXdgxVsrkWdyEBhRnaifRsyRau7jpsupjRgYxpwjnNYf8eMDfW1y5eh14zKuJWJjrPaL2Bjgfgf",
  "key13": "6tBpDcERMJXGKKKHcMhR81Xu74oEchRwa6eEiNWcqgh3QR4qUAiTZaoKqdserUzwhMzDmJ95ivwsQiznwXp65J8",
  "key14": "5AZoe89dCPRPaivqNBoRFu18d1wLZb46q9m5TqnXZmCXzuxRjn48AS93JhoFWP4f8dv4nBYBLnhK6ZYHBG6h2uS1",
  "key15": "3CjWvSV2aBVGirLpe9ZmdjnJYetZHKV3VfRb4k2siZh9S1do17dy8CWWTkTBrNNFfp5ffQpMWZzCMFysc25DTrvX",
  "key16": "NubwUKYTPA8kdY8m1ZrotG8X9tZT9YpxD7PNiyYaofbfFFtbyyUvvM73JDQcFCkShyqHvAJ4a8LXavamNWeiQL8",
  "key17": "33QYXRVM1n4UMFTFpnGykHoVHJAoSDCcZkDyNSajZdG2Pr1rgC8hEMg23ucVm9cWsXdpipKupSNkMxdQTHq3askG",
  "key18": "2LVXwtS2CJGijy52Y1T4YrFbASQ6UYKtejn8WinoceJZk8ji6EmKnJS1bSEz5Dw5sANpjihwzCBFjFCTTdTtBhsA",
  "key19": "3H2p3o5jxPZVbTVDnmpRFFYCEjxK9ZjTQ4mmJiWE7jkB8qWPWp8yegdAaveP3VnJYPbt3ZTFHunCDWpqTfNRhYrL",
  "key20": "54CJYZSRUVbJUdgUoLD6XJnV1EdiYGcGLir1PTfPQ2UW9Trd5BEJsmJReZFcdvYiiGjPtp5CsddN7Ve3XWJ7G5Zc",
  "key21": "2quqr2kEaJ8h42TY1gpk3xWi8waMHNBsT4Cw5NdemmE2UdYyXBNStrJYWzDgvSU6zntadbGRTaNnjwaSKb9gjM8n",
  "key22": "4awX3AUmxSS8cBtzKV8wE7EaaVpA6RjSQyytEb7kefSb3nG7HZRgEefA16yrEvB6NMaWJor9neLsxQSFCsDebqwX",
  "key23": "36YH72PU6LxB6hKCotXW8A6D8jxHHFLYn8iopQxkbkLyU26NpSDQxwGRVB27YcYp7uGfqRRBhZajMXAqdvr6AnZJ",
  "key24": "3WExqXHkW2t8j5D611p1VmsVK3TXd4Vok2aLgHVEoSWw5oq8nkB2hvts9DUfk8YGXiyKdxxFwuvcUwe89WgLtdVe",
  "key25": "5X3BRTwYDaf2ftqpAngCkrikSwfL81AuunQLaWtC4yaMiSsdt8Ut6dDhkK12bSBs3vcM648RmmktA5VfyR8QfMQf",
  "key26": "25xzryhACQZvGDZBPkErcATYxSaoqPK7y8GDMDyYLmCmS5U6TSpoq5F8phUS9fhm7VxwR2Z3SDJuHTLtoWJrosUh",
  "key27": "cYKeBKg7W8Tx8yzkJmfeagJLTuqDoni2PYnRnqk97kehTg9HGgJpraqtXXDxsekzrDtVfKXfGzanFuxdQEG68EJ",
  "key28": "2aYGf17RdfsoZMMHsA8tW5Anm7zzuUdjtNkY278AkArZRErLppXajmNRkpJqNDVj1ChhaEky5JtuHhM6KAHMdx8i",
  "key29": "2VqvhxThAwrR3QAScpokWP8eLafT2mzhrvYXRnN7aH3e28mN5EUnoRLybe79YB82mNW5dWPhfEHY4zzzkzRvJPvB",
  "key30": "neR9CJ4ahv2cMy1ggCC8iNRsJcfx9MAENKxCJK8q6nsGVCWr3soyabPDvQNzN2HRr4c6swnBFzefz75rcsmjGck",
  "key31": "2LP9CGxnP4adx5X4KW1TcF1kNJHSBEeXWQ5G73MnRkq2bLG2zJziUXd4D781gsEo4Pf7SBTa2KsVG8omhcZLg9rw",
  "key32": "4e7UNCgExBLSxEDdLzMtPXoYUKVu2r2z1Z6GeRizL2wheFKifef9qaX4p2JTKzNE6yk4cVcM9o3eaAykqA2Ch9X7",
  "key33": "3c6TLjFnGRfYMHFGFomp4KmfVTd4hhGR4WBHcQY9phuSeCky5XvUXL6rjudoXgPZuXSdjwVxYBtefiEwVEAX7FyA",
  "key34": "5KFGyQz7uMMsQSZVMPgmR57jHoonQhhzDUnkcxeyTfRoG6nsneSHVWCdew5PHW1FgsUKaTmfXFoHgaxGzM5Do2LF",
  "key35": "4rTdF9QqCXV3kBiXtmyQY1VVScSSBgH8jzcr2tdaW5SF7DfAfRoVaHRyqdTX1jkTr2ensbJEBZBn8LAM2meRZKKm",
  "key36": "2DxoecyNuf9hxjYd1oWt8Vm2sPzjHwjnwx4Xd519fUfwD87WgYor7RgeXqrPq8qUfvsFZafeEH5V16VjKso497ej",
  "key37": "5E8DYANU9BkmhdZQpR6t1cLtjnfNZNg4h2hr2Kn4eUjWef4Np8NSqmVJAQgBJPr9PpDAUnDorNNU8HV2VTPFKE7y",
  "key38": "pwFaSKoAoduXvN9CBzLq9Yhp1GppmNSjzHGeadb98213y2Yjy4abUGvK7UurbC98UNoxYbnJNnDtLLmPqTPGaQA",
  "key39": "3YdJweSc89AHeZ19T1de9WjigZNaqYc6BZJ1duTPFhRWbMds8CxAPEvP5hddp5jiJiG8JEdcVSSJiB8hxP4FSjic",
  "key40": "34c1xjd9xt6g8kX1PU2nYhHuTpzRd3ayDduuvTcF86njS6YXJZtn18TTJC4GHDhe1e7mGjBzCabGWh4VTNKmk6CB",
  "key41": "67eMrmy2Y2FNyJ2xh23wikGLLUgx8PkPw3ShsgSNyYm2CU2XgrpnJsX7cfUbMXwVSXK98Rd8uEodAokoj4VYu7m4",
  "key42": "rbxmmKkqWYXBqcvuMyHQFQwNY6XYkKgEbvASXmRTpRLpt3s78rYPhrAHqW1DivxFZgc2BYf7zX41qyXTgnD4JH9",
  "key43": "5MjacHtZuLEQfQD3k1dewrKf7jXus5ph5x4SQRo4hkJNxWzyaW1spoBbhkUvcmgAKe5LR37jJ7F7tv7mq7j3npkf",
  "key44": "ajwJDTHiNMExg9RdEATTMGkjs6jkh3wYzCKSBT4uyY7oUyL1LvnbeaHz7uC1iF2czUMtoemwc1b6RvFErXGdwGc",
  "key45": "3Uzpz3mB1PdimUsLZMwnsfoJ7wZGeC3rzdnSmf2CuhkQ6pFWde1T55dBjpKXsATg6Hi2De6ML6uo5W8AbpK5C8yF"
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
