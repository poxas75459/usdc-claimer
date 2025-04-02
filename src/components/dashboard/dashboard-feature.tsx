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
    "29o3HChZzM4gTVcy3rvGFcuSNYdpDHHUjVGsmf3yVemgaHBX1c7dM2XLZ6z2nUGzWr3jU1i7JkyNkvsTnZ75mbDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Gq93EgrJFZDtqYJvEiG73zinJ7SdZumpqp2W9ZS2eZQ783SfbFQ6zbnnKyXez6bcmwapJYMMEpk8U6vkW26T1F",
  "key1": "2FDM4qVaHfGzBUA99kx26KL6FEe8oMwVnQw3tqfKVAvXW5g1TESCo7xrNN8SzPC7dEYTrKZU5m7UKHhAZKnTS3Yz",
  "key2": "4AUNqz4gbdQ5DTQumz4GNfA6HCKMTxKnZk6C2dUGWTAndHSnNYPbaGQKJ8YX3qPFFCTrE72P1mV9uAoM4Ho761mm",
  "key3": "5SXEw4E6CDGws55zJr7myXbiASoeGSDQZn3VxEVkYXaPAy37MZQJSjmqfF7jtrBxf7dQdR7RVEYhYbmfVe6ZNiP3",
  "key4": "62T511pRwrC63THRbkviJQs9gnrCXv8iE8VmH9Ugyoy6fP7LWUkfEVJ6SoCdNditdVrfWS7QcukvnWsHBM89tAmB",
  "key5": "3pnU63kFm19UTE5EoBUdPhcgP9p2uenj2fEoMXSsXYud6Wdv5xg7HErJDXpAVxRaK2SJJRPvv63m698S32DSJ2rS",
  "key6": "64Xdtqd56nxuLsbFuRfaS5PJ4822W79hKH2L3BMVJVsrv51SeT2hF7F4kToiyM5L2wdN9xH1VjJ2JvHkph7rNYME",
  "key7": "WqjBZmCRc3gB2C6ijvJYtvtX84y5adYTvMMx6N2fsQct8HczpyNrj2a9wqLJdNwLBim9prs4sqAZMLbFoXXfhT7",
  "key8": "et6qSd6wi6Ref5DzjBuuVDMUeeBn7TsXR1zD83xCZMY5nyvgY2ohupxhRVytyAN7Dmvdr9961nBa2jpiatigwkw",
  "key9": "4Sm3kSddhCgE34nLvKLWYL7MmTq62q8adWbr1DsfqjeK6gw3HZpqCCCh7fyXS1h1Wccmkfv9XxVeE1ZnUi9sp3LB",
  "key10": "439Ft53Y7xDWLt8pTGWFrppJP4bcC2zgn2BktLiAiiHHn1L1EC58UgWhf4a3BQYv7iSUdC1asKjGXFwNqT1ebjkA",
  "key11": "2L2R6zseiCVgdfQPGJ8hjNdWSidXX58Btb7F2QMBdAc2b5eGqHqv1T15fmvyQpxLbkwgAyM4Q8UTrRNb3cs1RfdX",
  "key12": "4x1L3wha41ChFUMP6geVAaHyaynk6kp7xfTvQa2cfGwh7u9u7NG2HWNDtcnQR3gBPho7AtDg9ucj1i3ULJZ4gX4r",
  "key13": "32RxSjCouYHPKBhdz41wDaLwK1XENrJ1cAxHaLkqeW9N9sYv2VoqgekhPFmTzkf9FX4LXTk3NgQQELVNXhs7Tats",
  "key14": "2WiuVWHibWTZ8wrCEzfcEbnTKd6nhww8zVAYFZJtJDqmfekMeg8qBGrAf1gR1G6iwug1JsMHzvZ2dSvEgN6ZL5yL",
  "key15": "2ay8diEbT4rwjHAKfNDcLZ4cV3W7ThgC9QQzacaMB2tXtcQERMEnzQzdFRBcMGYMvwpr42PhPEPjd7BkyMwJ1Vaz",
  "key16": "66HkkKbVu1HZXMTaqD3o6fqxMu5v5EWFWWWXRSt1otNVM7JT9UgtmRtn1bzPHP9C5GKPcqC699mGb59ih4W1UwVX",
  "key17": "37JFU25BpMohDeNM1JMF7KuCUHbvDBFSuUBPPumAikLNEkuu4dKkEe1a21ffBYVxb9FaSnUpSndaDLbqFLiR4Uq7",
  "key18": "3SZqhGzGCDVRxmABgYjBDFoegemvYZqW5xGhSKM3848DAJcQoq9UDFeJBiSQQPG1UJuQxf2yXDgjvvSgboYgA6mk",
  "key19": "5thNPH9j44bFyLHn5Cf6SQLnwzJsyXGNkJnKrSjxRanyWbgFHGRtuXytAWgNoQQyTcyccoQbHC7B6nhDstenPYgN",
  "key20": "3X9F7kLm7moenNqjnJQP4JVw3S9BqYsaLAfyhEnY1JdD1n3NHHmgsTSBT1Rf8t4252ti8ACHegch29cxj9NwRn5s",
  "key21": "4fxbre7zd7tgYjZcLWrYtaV1N47XnVjaMVCiuNtMbWbCeg6zcXC4v1gqcX1W3xEgD84zCbkAndx6NdKEoYnqdhnS",
  "key22": "53QfhpGytcj8S285DtLc7gEwP4Hyet9kfV6YJ9w8A3W5vHsff6N4fTJLcRNTQFpKqG3Gb3wfGjLPCG5UNA1maDTv",
  "key23": "5LvsypgiC5y1FTLHGLnjcriuGVeJLWXjgSuQTdBwoeUtZYvnfeXZcuLQ2iBBDvbfwAsoJrP85ot2mEaWnovFQXoj",
  "key24": "2iUUYNtZg1QL9uHiMnQKpJqtFzzwWuvJ1by9vnRrEGsvDtWNyo7vmPcAX8dmtyh5GzZiMzDPVdV2oNZ3vn2oygbM",
  "key25": "52WmD3rPPrRTMnzDNwfw7UpKbERZobPKPtcJnArfU9Ldop1CaPNPuLcj1rcjoidevA1K5FE1vzrfYtATzBKRirZZ",
  "key26": "2fw4Qg6cbMRrsMkdMHjF8x63P2nYi6UqAbRj9sJC32vCYWoE8Xu58k3ZD97qHjVLdEoJXFPfxzZUq2MkiRZLmuz8",
  "key27": "4oqTU8jauzTfUEuv2848p4BJG6P7p4oaiXv77LGwY5pgxDvkdXwDsF9UaFbiiCsnQ1vkozjBqXKcP9jrUVW99mxF",
  "key28": "66TDA7NxJEmYgz12z6Mb9nTqtqwWt9Z4xxe1j4UBHsajGXiPUhiZUPmnDz5xzwCKstPwSPPtRWWtKWQYLXnnpvJb",
  "key29": "2dJZbX8FgNqyZLx7pybxev8nSBvmdX44gqKeSCh5oKJvpBGoLW49J9SnRBuuJD2S6WNjb5dXAmrrQRWCorpG3NBJ",
  "key30": "5gdbHcwbwiFuMUyi89AGTYdWgDLbFV5UQ9jdbXtSFtG7J3jNFhSV1R1trP52xEYH4UX2ybQ4aKm87qojKdWQyruN",
  "key31": "3Tw3HGQfwmRJdymd54CmaGnB6cEBKsjGAD8hJxDfDeXAwpLjkYsTcsXSHwGcYuPQa4sYt4AiBJgqgXQ7mBcAVvrh",
  "key32": "LAzJfUziF25JKjpV4SHXu4b3FgBehd5tAezJp4hovKNCnGpwwUAVWNsW49K5FeFnjddMRZEfLrqheFKcqY33eGz",
  "key33": "2SgBerSsRXXfybiTGPeaBBispf68vDruPeQ98LEkofhzqdzpsju2Z9t1Y2o9vmEFtajWvJDz18XkvPaUg39TBcoe",
  "key34": "2vZfqkipr5vfEutWF7Yrojqsrp1YnLn3MYADsA8tdBUZkRcv48vDEoJiHjDwEqSX4Cd2it4ua7hCcdnt2TCy6ff3",
  "key35": "4NG36dA9HEHctUmbEJvFuhmDsvGvmii51uJoDDvrNEih66QPEynrxJLSw1xutbZW9jzg35UVmATUj2XyN8xjrDn4",
  "key36": "Kkvaf2VmiM8jNVgZqEqq7G1FWWKAQE5u1eDr4cpkCTPvShjdy1gCJtMgdGKKCVqWY4bd9DeExYhdFKAQEgF7vp3",
  "key37": "hWdVrqootuJMp688johc5xkTHgB8KFw5caXdiFFkkjzcXPgPprEjkgKMDa28upRA8kzaghJXSSrKAET85MAv35o",
  "key38": "5PG9F7ZDD1eNzDjfgh9wDJrwtWgy42LKauKjNvAWb71GnxWCzZgNo1hu3wjRq9XPFV5mQnrc6vzT3Rnk7gpV2CEy",
  "key39": "4dtb1hj8WGmajVrMVn75ZSk8G62g7Wt7FLHENQKsXWaictiTQcnsSNPpbqhWqoLG7cqMuorThLMh8EPd5ADYZZUS",
  "key40": "5BZjiNzPY3kxDVwqrYb44Jxnh1Z1V8cXzpZQMosLiY8zm14wttUiji57CAEJEPUw9sX6q2G1ChHm6CbiAaQoin7T",
  "key41": "2WqEG84Wf7Qj77M9Mu9m2UeudydgX7TipixRotqxJtwrdro54MU5juSsiNPGNe3kmT2VmfHG8145HvCYWvqJNcxC",
  "key42": "3AG4D5EquxhtiWxmuFPm78a3tiUxDgGjgm1Tj81Va8wg4u9bu41ZMqt4eJHbZNJgQGCkbyuPNkZxoD494DU7yemw",
  "key43": "22k1ze3AazVjDPhgFvbaEn1vSKCCicu4kuywiioPqvqRssGkTas9hrfKDNMbXyfN1zkYVDEumvbDDXZH4aUXSrRm"
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
