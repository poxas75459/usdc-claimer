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
    "5ANUfH1ngfB2Tz3pW3eZxgKya8gKNaLQ7UwSthzjYnw1fWJ1YdEjATucAkukWPVrYDTpovHBpDHfsmBpJfxaPrkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LJZdP6dKZSZs712AMv6PQdcJ6jaMmURTc6SwaWTPRBi2ACeR7oJxp79wY1GEFRVirVFpZLqZ41Nwt7PHdG3Qx1v",
  "key1": "4peBr5oSEU4Ja1PjJ6kXqDTP1UhAaZW8J7qSFnYE1zGFshXWqtZqQK5nv5EzoF9UqdKMy5aARufxZttb3LUD86ag",
  "key2": "z7We8XToYjwoM2ra36pHCHvdKvdLz9SRHvGYkhFMmPypBWjv3ZajUSmUdpEVhpzZCU6ChTJuuzQpujTzJw9jtAg",
  "key3": "2s7aL26enuxb4KhnBVtLPGHGN6WLtWtF3D6Y2BJiEsWnGCqHXe1Yr2FhXBnu1gNvTpsRT84Kej7UgzEcy99p53qx",
  "key4": "TWKpptFpXxrHhG2y1E5utgLa7w99itYDwiky1u37tWpVchTTtbiCp28LHgnDf917rwiUnyqrNZ9877YBLCFPU7F",
  "key5": "3rEPWSFiw36wutPPErEqvkbMkQsFxXWdCuJMhmn5UwsVPq6T66tgCZMoCTnhncJmNoV2GxKbGrYtdTYzjZF8gZCq",
  "key6": "4v5XqEvxR3JYj7d3vLpE1wz6DorbJXf8VFT4MQxFLXfVtaYJfVuBprmE4ez4FZy4mnPmLXjUum6KJsDMiXh5PKtx",
  "key7": "1kh6RjirM3xZswsYSvd4acBNx4FJNuMc9XoRhFpRYb7gJmpGPhuZdKkpky485txgo82vk8KBCmwidpiMptmuniu",
  "key8": "2REvYJNShLwFREy7eF4dW7YU6AUKJxtJHLkN169ZEbK3tYCcwjBid1M9CfDmYR99yiXCMPH27TTJ6cPD4wNm4nRq",
  "key9": "2bFJN3ZBWcAv6JEbmpWVfqkHBuPM5pHrYjKX51pGndSrHnaugPrpFEznFPmtohqX9HSdx2ejKGSkq8xXa3yfy7eo",
  "key10": "33JUoJdksDhtJwJZYeAMPcNraCQhFxVW5oYCEJKa6PUWN9hWuM1PAkPqqaEJE2nPMAL2LWx1NvsFBeF46oWNRbG6",
  "key11": "53NKVNYJBUwckc9xfbCoQiTsQ8gUyr6RLTzEfkRLwdnBGiNvX6hmxvo9s4b25iKPgeH9UvyAmLJQdqzVUfU6Mo8H",
  "key12": "2k1Z7vNWw4sQg57iE1QTcezyJ3Encno4emfLvN5ZVSRDCChNWGXZzYswCZyL1nbm5jwPGLFjT4bX9rqtd8doDhzt",
  "key13": "2c4ukW46T7LSqQBcS6gNavL3ejz5YuZmrGQFGgpvnL6macUg79GR6NZZAs9BvNaC9kcWvBVtCvK1BcMEBFsjkdSC",
  "key14": "rk65VWP7Rid4GNo6cqemkCk3WJKVoggsNf2R11JRBVnCm5Zw5v7AsftgbPQjKc7tmAYtDnqm6bNw9fNe6wLJpri",
  "key15": "3SaeFsjeQ17xfjKHT2VcLurnpABi85i8ARy7h2sqDPmMdp8aZpakGks98v2ga9kPxQXt8PKj9aHRfcUJaL7rP5Ze",
  "key16": "3HBcZarYH989PWM2RDY31QraaucDoEvYtfbkr24fC97frabijpV1Qb6mCtVxkHXPne13iMCfiNxKYrRNLHDHnUXM",
  "key17": "5WWm5d7nzMJPHB5uKw7phHy61E17HzoPJMVLQF8dntsunZSCYW3hbDaac36ptChLkjZe5WQ1H3EaWcHpMgYwe14y",
  "key18": "nxdGfhrAdC3pWLfw5gRiQkL6jFkWBaisf6zRPSozMdVGWTBfXfzK4dCyMHBQGKsoNdNmLE3JTYqcUdLCA4NUpZE",
  "key19": "3mSgc1YA3ETJRF8pf8ZK8FdyAKaic1kJMaqf3HEKvp667J5HvqZBAcc9ZH6vDAyWB2AEPuiSYFBrGQSkF59gBmW8",
  "key20": "5sWgKsVvjukKVVQjFcNci4ykmUgX7qsjEymckpa5EfpAzSqyEoW8mHPR8BevEpPSP77hvGBkADCJyzMJyM7D4xbB",
  "key21": "2zRm6RTpYDx9mZBA2CaeyLT93SPZnmoZX4WNRNz7UNRNYtmvBp3uVNLqUhZdyAYT6AMvmj31ySbusKKT48AciKVc",
  "key22": "BGmM9bpBwYttTwP8UstBGw2FWJNShthBaYF7HDR3KAnfnhwvk8vvgoH1TDvRzpExFQkaZGC9sVnxsYt238d6M3q",
  "key23": "3gm17hpwP1dVQnHVbWZaQYLs1Rh6M4hbfRXTwDWwTZDXr1fCXHc9UaH82sTcKxRVj5tyA1htrRFQAqWpLWmz4NCg",
  "key24": "57Kt7dbr24g5VrfKx9t7D9bYSwpWUfBhGQS8gqkReJau74GMAmYvwVc7UajntM7QxtbthLTZzGehPZJQkySEpQRP",
  "key25": "8Wqr9cRU135D1HiVfixdDC33MqDM8sZrFq6rjMcXzPpka3zcNb9bwfNQZCcB79uVpwGna9gzZ59mPs1ycGc3K89",
  "key26": "3niyVnSG9gj9jKoMF4vbxpwz2VaLmXmiTKfHtYozb9gdXvXFvVH5UU3LYF48iWahKqryeLa2tVBLUz1hBSpXUsYn",
  "key27": "46s1BJq3Pt2AqTpYQx7sDbEvdrTCAvagZM3wkxyyjDNsNme9CYZQK2TAQevVJd2PyrRUB7qFRsorW6SyargPLQDg",
  "key28": "C5QzA71iH8h3hGAeiU8JGy15u2X7kDy1MyXvVkSkRCMbbu4UHf6NxM25y32R7pyu98FwGPxzC1XiSVtLEPNxUKu",
  "key29": "2HEidL4jEtu4naNH9CQtrvBPrMxTmH9z1BZ3KHgXZndZoNKFxMPwRmD2u5M5yNYwLRM2NZ9Jo6Viuwy3btHexLW8",
  "key30": "5a9oURA8bchfxtUvbKW24fC1LkP7m1qWFxs5iHFPc8xYgpo5vvnC6aAejfB3NH7QqmJNRB8CqeJvkysJJYkhved8",
  "key31": "28HwJ7zaPPSgGTj5D7L2mDRCpEbHSLrNNQ7MUP5S5fkAUvpmJSVkDDQtTxYUYLKaJdCwXgrkHjiWvMY9WQvCBgen",
  "key32": "29RAanY48JRTQuNKZudrh5qYzB3fNpobNhvrzsyh9xwEnbhBppsKMZpCR2SuubV1ZyQDLmdCudgCAJDHLTnnuwQY",
  "key33": "4U7FF696jCBweSxQUkjK5daHrup7sq5inKCrXXwRVoyrVmRjRRQKaDMbzHU9V7Tdd1GDrfRJiUpxVKT4pfFdYzFy"
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
