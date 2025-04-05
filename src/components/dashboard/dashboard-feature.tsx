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
    "5XiDKGyjJPQt8iHVzbk8NjxpdFSjdZU88wHZTQiwayjaY65wxnzJU6CZnkzdvUwEbgZCu3zG4v56xKzoyDhjySmc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tNsTVk9m6b4a7iogUnyovzswwSmNc3hW4f7p7k8pqveNApqGB7k1kzBVtLvPSTjWzxDfZEeVov1RdpZ7ywrccr6",
  "key1": "5pkJVAvQKgqqjV39JYCRv2ba9JQSZf4R3jEkYiVPTcWJstGnZ9v6B6aD1aK9odwjGpYxChgrUFHzYGYPahXyNyun",
  "key2": "656r2jJXrQYb2nn4BjLhZzd37xnEJu4uQkXyZ1gmgWGwV1AXYpFhBFXWVQVCSdwjkxtHJmHg25Wrem84WtRPHwyY",
  "key3": "v5zdX78Fsnk2LErDytDaTnvesrxKY2TyP8fDrh1vDBN2qLM9BFq9ekQRMGUWQMZZY5TftRKBJ56bqCSoFq9V26d",
  "key4": "5KfRWM133m9uyePF23VdHe7nVDyXHTZSVfybmD9FfPWbc6bZ7RqSgTaXsEbXc4wYSNnn4gVhLVTpGwBZuRMhxcod",
  "key5": "3EwvbtGbjppxJ4W8siUWqq3fGU7AR9R7MZTpvRUGrHcLjqWPDQ7aGTb8ZWE19evvy9mF7h5C825NQkAcvyUmFKrG",
  "key6": "Pr4zj7SNqsFtbCSP9UjCFrfMofhWmAaw5kuk68dc9K3fp4cesRGXxeB2AcCkq4mt4bX6qSaGvNMHHtTrPiWqD5V",
  "key7": "sSjXg3WSv9xiiah3PABfVWLkm9CWvf6FU18nYrPheYHQ4YnJsCf3ANDLoPsaTpTu2bQpCbsDT2C4weMHKBL7qRE",
  "key8": "42LJ8xLxgYaaFfibW7QoesK8x2qGkv8hu9Xet8potQuW5Movqrw2uGAWdouPuf1xYEfuc2KT18d53ADxy4a6CHgC",
  "key9": "62KpsC8y2e5EdKtUK6W1Y7VB5FE3UC3mmDBipbrAYAQiYctxY7o2Wx2Xzwdm1dWWreoZ7PC4aaF9Y8kwNUnY6NX8",
  "key10": "3zMehWYWfh4XjZU3RSkSxQJAMV24yyE4uHSwRraLBHE4SpfigHzXXvtCTfxYat63jRPJamtLsKntNYFXG5ziAgqw",
  "key11": "5qt5wQrNNUL1XPZAL1eao3pdsKdwCbeJREUEJRzAE4q5csE8u8YDy1JvHEcAYypWKsK57XenALTi2hCKWvYjSW6U",
  "key12": "2d8VdmCfufxjBUEanKgDiZSWws4XuXmGKX8Fm3WJab4ij3ZcTqdCK9K7hcwFt69K1f7BmsJifudpHGwAp7n58XUo",
  "key13": "3Acy6KDf7cMztQ9YE8iB2Kdp6xSshGZZE9KuqSKxLXFVah6TbgtqqqAQBtDuoGjyvVzfLMgPuXGGHFXNbsY377K3",
  "key14": "3PP2yCq1nVa9ViLd7Pvt7PAfNRWV8HLQyqobfwCAkkkqWQRBqWzL7xHDxHWuqYyPN2K7yeAGQNa5vrjC2ZEbsLZJ",
  "key15": "mERxUJqgUD44NGke7KNKHYEnVTXQRjsH78f4afo5DdS614eQJpSDmLCvJ4xmDkkab9p3dc2TPiyB2mxxUoBwrLC",
  "key16": "2SDsZyKXFfSQGbo7BRpeZn9TMZSSR4EkCL35M5rNqwQ2ERRQejUD7SsW1eTi8XsHzeuhxZGGirhrELbTcDJFVM29",
  "key17": "51TbLRaHT91c2Zo3kssiXT57LxK3m6cc691MpkmpKj5mAUSSEqdQ7G2YGfydSCauppez9uEpsMzuEx6t89NxPaC6",
  "key18": "mxTv3877ZqTDmgEnxfhVVkbvbNJv7dXZDaGbndRMM4ok7PthHp9oLLe1GGc5bTxAJSJEXDL9E3gDad3ZknyZMU1",
  "key19": "5GNe4AL5KSNidkF8VPWEftiP16oksD236sjiUAffVXrEbaFCXukyuLmx2mVUdFrTjZd7FVYFNd3Rf5xLFpUgUZsz",
  "key20": "GZkvrMT4yjXjicgAXZYPCeXsmJyXrFHfzihtX5RQmnNRs1SaNGvNbWrCx36TmAdne6f778YTqx89rZfSvFyiX58",
  "key21": "47yEZMEsri3keA9noniSAsd2Vj9bigFNb39NgFtZVNc6ZuUUeZjjCJv41e2L27dHmo3La58V6jzaBMnT9Bo49Wwg",
  "key22": "xSCw5pcYNy8XnBbGMQWpKbYB26uS8YdhLiNZS8o1V8QAUZe24pG76n6vPxtFPDpng9Mq79c6v3oGAQTyoJg8iV9",
  "key23": "iPw3To5fVgZWPdd2kfX3DEADqGofyVwsU5sVUcgiN6kuPPzz5Fa8hgtRnqmUHd8weasoef9qmeBfzcv7VDFpoVE",
  "key24": "4vrV91sxkNHht9Hdvz9addjKYwUd3uPfunjFeCBUHX7LgHFdhPe8yaMYZEqTqRoeRsqdHHQcTpj48Kb39W1z4oJ1",
  "key25": "sJdYaoUNnov1RzUMghzMkMJMTWztabF5BrL3Tb2tmXrqtkrvn6Un7ghkrJiHYExxZ8eLV3BB1MqUbiXGcmW34Wc",
  "key26": "5GVWYRpfUAzBze4e4ij6YidBcmxfwMgwKTJhCTU9ai2txs1EQT1E4CdEtdQwwNJeNkjXwggi73Lgef4GmXXXKGM5",
  "key27": "5QMPSyd3KNy21JA7nDhPgKESt1gtDx2Ga5kfAhuAWwHAPTeLVNMhDaZUQWx3DywC8ZKvmrsXq3CndsYo7TQCvAHY",
  "key28": "3p2DNMdY9bDenE3efzoNHTru8SxMadce47mAP3oEmUXnKk8NsQrhc9TtA4N1yZADRa48YLoftDRwYpBrZ1VKGvH2",
  "key29": "UBQs9zyYqPjHAisZKo6zR88XBjEKRU6WMkhrr26L7gcLwTYqijASaULAGqU9i1n7zJ2PtGobmMWK7KXujsVqN5m",
  "key30": "3y9yigJ5tJMzQ61dLErXgFFtiCikCm9yuqE2bSsh7AZgMKKEjJNuNZaqsaXVZGAaLd6rQ8WHhrx9X7uB7RkQA1F",
  "key31": "5E3JfwjhLi691wmLYUT2RsEX6cSs4GMd6aoDkVRvdRzo4uq9EQBttvXZokUpNXKfiMXxtez9FPqU3t6aGuZUjt4k",
  "key32": "X1AahaAkYihAp14yhsaNZvy8sVSsnPDJMEZZbehVgyHjPHDfwQYxKfn5VWZwLYQGK5kHhfEk6SubtSdXcvDWKMF",
  "key33": "2qAQuDGT3tJJ72ZkgUXqx9UZituvsjNHHUjrjNTTqHvEmjfwAHnbozpFHFk4oXXYHvnghrL2mmZUFZGfKkQvTzqF",
  "key34": "x411n7u9ymxjhQX3LwGufTS7WTaqjs8f13VqByfrZnkHTXzQNc27Bzg7cos39DwmJaRCncV5HeU6CMxW7nKgo6i",
  "key35": "48cnKDjQejtvR7VaZxRoHe5xkfm5U1ibQQV3XcsvoVex4mCxDpTacXwqYYYUg5Wq15s5MSU68S3R7sovZBApiMEB",
  "key36": "SX2VsVQsvMUNyFmu7n2nWfwo9Sqr4KwHF39JqkAcu2muTZnMF3FrUCoEsJFXSHD3WZX3SsUVvfvu2Y9h9yJ4X3E",
  "key37": "8Z7ZQY2WBwV5tbCnkqrZi9UqQWX2w1wmck3JZNhPXCVj7Q3PzE4J7dKmkNuoBz9cqEXBZ9eV3JnsG8erD3LsCvJ",
  "key38": "3kiGKgDx18kBLVE4z8mgtCJLRyLY4a1dqwieM1i1DVp2RrpVScZDx3r44FjUYyaHLLT86qxrpdtcnSoKQJwb7FeD",
  "key39": "Sm8gv7pjQ8H4bqYYgYS5SKHD4UdRxRoHcoPfQ7iypWPNrXXCoVbpd2KXfD81uCn3GtHcmrba4bKCjy2kgbeRpzQ",
  "key40": "NUM5dsZvLzCVtdqf3EJnzk4s5SrhXxzPjzMqQnpYUEDhLmc187H4HzHHTfxQcMsAGL5mXWJ4vF5zriqxNKkZNrS",
  "key41": "26hKYJeXS14uMAzrcSjh7Gx9ogEatfCv51g1DRodsfuq5REV4VUy6Lj5aAhzdLEU9JgonQq92szEdCx45sTkmF54",
  "key42": "3c7j8ew36QEhYTp3YTCebVUUbC1efVHFdXskzpR16TSMi1E5vjQU23QWLomCnYvwve9xV26sNAFYcS9LQj9ckjf4",
  "key43": "2GGm6kvD2bJKj13dngA6WHx9EDWthmziDXcmfwxd1v4EQ82wnLMjmtXCEQ8ZoLFrvs85x4i1rFWHjVyDop5p8nyG",
  "key44": "RgH7LsvjpccL5nzntzpc2n7eM85ATiwL2dX1qVga8kVnZZP9ZQFnz13rLYyv4Ye3v4djdPMr4t45hLhQb8KnKrv",
  "key45": "5xNUVnBDg8kgz6FQZA48pZ4CvRXndDphfZAnudZB87Jq6pzXZEUEjzpLmJxp2TaacmkreqDhrj7uUPrToGuaQmMG",
  "key46": "2V8FQvoBDPJHdty8HSHbxgkk32LWv6zpytYSmjFGVFg87HP9L6S2DpeLSaKHTEmvwUqKdiYk6dREkXBS4CA5XFRN"
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
