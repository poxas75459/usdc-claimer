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
    "2hPnwDCzMjTqwbp6jgrAehE828NLHvBEMmrrX2TDkfHmztS5AKccWGjKT1h7YKxHB8QowKgNhLQCshhMPcRTEFA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TtQ2LP8MghuPTeS87FKseRoq7gt8KoTGBAtBu6bDyBZ9vTqbu1ExEMcbfSYcBjg597TmTcx4CoJLaruYCErwt1o",
  "key1": "5BZE9tnhVCMGbPXGG7rWm4NY3fga3VeaL6UsjXEJDkHupia3waLgzpEpT6jdq4WHDPHKhPihEyhVoiugu98Zpsu9",
  "key2": "5FAukxjijQQkHivURxzkTGukuF1hSUS4WGRBKztPgUWoiq5U3Aqov36aySMdLKfd4qr1VQk3o3AK6NKQHDv9kSzA",
  "key3": "4yyqgN6g8MNBdTaJKN9KqemEzcgwpwGz71ig8FEEWdyzR9BA3fMHddvzAyRE292MRKeZVXhisGEZbmfVDrN2gYM5",
  "key4": "5GQQ97Xa9m87gFQ3XpvQ3Z85Sd7a2Jimqqtx5XEtoqLtdNaNskCXw2QeaA5YeZ9HA4inDMDLJhayjCbKXGuvTcR1",
  "key5": "2vvizv6xP3cvDwByU9BExSqQmSbVeiD8W9xMynTkYqmAU3J1oGzRvy6xxezmrGLtQbThJ52pvBtM3oA8akJ3P8QA",
  "key6": "2nJX9YnNuZ9TMBqTNnNfREEvGDbgLWpbtM48AwKc4hvQyndSFdyMpinAPQE659zekVNxP7EUnK84JgF2q6VV2U6L",
  "key7": "4MmHdwLkxnG1q9SmioweBdzbxQohtjKA4QS7aPBdgvwgRL9t1CBhrxS4d5e7oDAqRubSnpC8uJjMxdYZdNGnLKFZ",
  "key8": "5dP9ke22sPrskJd4K2z4u3A4XRnrLJD1SvA95LRg9nBp7TxQZKU4HVkjwAbczTfBpNMR6jQLHKPfq1h1qWeGENyt",
  "key9": "4KgW7dvfRmPApQqoKHvPwjhkS4Ew2C6KQK6UvYLMig1vBZCJMbcJQA8xT1TyQKEbgpVrhNc32XX9YHyVfGuuyXwE",
  "key10": "2E1ma2AULbF6abAqzy62vuiZhJHxugtSnFZS9iy7f4dB7K6bhosAo84CqN21G7mN396q4TmEMhzYahv4gnqpoPRs",
  "key11": "4q2254dxXevKco8s1eeB5p98D16pFrKqUM3RhpbQa25M9jiRcNx7fYGTgjjqeEU3obBRxpxT7ZEhJUFk3NMDpqSL",
  "key12": "2fPrWYNNYC5yhWGgENmX9s5MJsZYdEhqPuf7dGa7tSFRnGqVrKQjiQsFPLBvoDedJ5acrBreZzx1ojbP37ZxNdZh",
  "key13": "3MNixApkBYaauxhYPwbHruyjQmodaXrXTc7LuW8kbNWodjQni1rjgTPm2zMnyCf9U9CPnuTFEbKXVK7K1YoLwEMo",
  "key14": "pGpxhSwWDo1si26v6sM8Kpxz9kBAFHg6J5Lnc6kq6V8Te6d9CAsvrdXkSAGMhgYmcuBzijuUJPPsCCsrxvtx53t",
  "key15": "5SYAFrTWuxrr9256rFFavM1Z24JA4YGNLwh5SbJRHLjFb87dtmYHgMetiU4H4hAgurs7wZGf9hdJdH9HYrKtkM8P",
  "key16": "4nVTroJHNxTuMgqWMM5QAHe6u5hFLdQ9aay24tBzvETVPJW7cDJgrCDaEKGVpXfS39xB3DkuHg15n7hgWKSAZjGZ",
  "key17": "3QLzMc1145gMwYowtVrV2g6SbxYdq2o3wz6EF23Xqf6RHAbCHRmmHH7uihSUr3adVMadyKapGnwBbLMdVH2fLRgs",
  "key18": "kr2FvbVfWcZX7JyMPPw7siQs9CaU3kdoqcjRQTCt7afsLfmBBSm1RQqoHGg3EnNRrAzyTJB9it159sKSYLiPMfA",
  "key19": "5iL5Ap2eLxMR7o65EdFnPL1uEnkMxnMu463HqA9HMP4WaFDfeUxBPDDvKwWhz2MQhNb82DPEK4Jcu1SrooDbibcn",
  "key20": "386cRe3CP2vTuxRyxy5KbroFcLvNXKkztYXny6GZAXJ6AL8cuiMtm3THwGbbFS26S4uxvyP74hQ4MJif3cYsqwco",
  "key21": "4cyEDz9NMqZJvKc7jhepNHZzUC31KZvqSoWrfXNeKhWeymUY4Kcw8G53vmsqqhgSYtqWAoQJahfhxsv7SmHDLkVA",
  "key22": "25aQ1Gc8zRLjfPjCRYnTNnBwdsWjQsq5HxG5GeYqb8tZu5PnDWDoHjVy4ZFVmBT8dfTjVNXZyecaQ2hYyNUFniWT",
  "key23": "5iNXywRZ914KyF9A6LXGdtc6pBhXGSWuz6G9x7e1ewTkn3iZWu7U5EJJRsLgbJfpMjASro7mL6P2Mst5vXGKtvPQ",
  "key24": "2dvNuYcZvxk9pL4u1c7XrGTa4B5mB3H1SjsqdKqsKLFyZBX23ESowMjtL553NqVPfVbKVNanJyjDu2eh4VjRDUqe",
  "key25": "2DJcoozhkHYxiQvosswo7w9xWLvQMgS31uJRBiBL5jj4RRF1utKBTtWcCY2S9ZnNCwPcpmTg1JKCeMhapeT86xQN",
  "key26": "41gy6BuPFQYSNX6HNeUqkgAvj9p4JvuZGkDJPLQjjuWXvvKBTXG3E8g9yV9zMCn9es2y8kjPQ3xRrSnqAap8hcao",
  "key27": "34uDJB91B6hbTwRKdib5vDc64hCcEVXoy1c2nwAfp2DmxZT1JKbrTHsDdRR4y8Mnw6VAXxNkvfVwDduj3ukt1wPL",
  "key28": "41FeLRvov41XtfGJwUfQk3CAUrpbmoofgPpxap8Jmh3j9AiC6Ypu3hucfTE4cv7jwpm3FzKunZ5yo1mQsjs3AG2Y",
  "key29": "591iJg8aAzpWZqnQmLojNe9mPMzRi3zY45KGC5VxJQ8k6ooZsdi6YvKPg691CmoYsyQJ2KnWDn7sUam9GiGLHJwh",
  "key30": "4Qp9r2ndEwKAcTwKeMcnAPhEHv3uEzJSxTA9jsnzZdZpduLgmWMgc3mq7PWAHKJTk6vbPPUVwErGvJkHHUgWxvev",
  "key31": "2c8FxsMgwCo4B8TKhGVwM6LyKDMTkNwemCPxw3EvbbmZCmtRf7hQFu4GwMStjWaXgjH6z4KxU6C4DwbMGFWyGBy1",
  "key32": "34JXgokNpcCKMmAkmJ8CW8KiPzo3RKydw5waJEiuFX9tpeuqZAxz72Hn5CS3UwSxbwCh2393hUJfv34yNSSQCkGB",
  "key33": "XCm5xV7ubig3MrwLxyZ74698WSzZQvZDABWbDMnXJ6U1hctJfRnKV3J2yfNKgvuvaKMh3Rpxdq4ZRJqStUApTH5",
  "key34": "61zcKit6F4rMUPN8KdiqJWhgcRH8wSjPTSLPPAw67uiZrEKzZPNbPGuvJhA86dtDzZC2HW5y1nufyVxPBSn7KQau",
  "key35": "4uix3ZsW8uWL6agUGwWiEQQKp2Pd4oRKeYxbfhHPHiDGGq6JjkiePe92QThv3sL7enUKme2LgUPYPa7Fe3AjJcc4",
  "key36": "S4jZoE1xWpEAVS1p1JPK9q3decP9WZRjLzHyoGD1YdBAXZmGxSL263rp2vFMWgUSSWntKE4Pq6gA6qhgafMdnm1",
  "key37": "2MsMCrY32QvCKX3Gq1DA5cwWPVdQrecHPoZ1m4m6QTVCNXPVWcBgUcJQsQEnapMc1qDyGNQCKdyVPuuAnKmgydQD",
  "key38": "5oxKVJYoviiPRkjtZbRvMMEHW3g3ivvgdwnsy3rcahD4d3HfJKrKGyeAfvWitezrQDb2tPg4eqJRtBBhjHsqJzKh",
  "key39": "FJcJ5L1FUJStmJjJYTuYq9hpV9pKMEm7E7MxM2s1pwsZ7jQ2dAKHWiPohhbPYQ8vz515qdRyA8vAcUVshumN4uL"
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
