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
    "U6RfK96MQtZ5M517x47M8cQuvp62yDygvJycR5M3wmkHiFzL5mh7h9Tpe2F1vwzD9sgN2hA3TggbhzdgRaXAVA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sox2wPNim338HH2PPnkbs6Zzpn8s3e8smzubhCbXr6msnx98KoLkvJuyFXC6CPMQe9X2rtnSniPiFVvAC9GdccS",
  "key1": "3LbcFWJULemfyQx9EptJ6bHgnBXixoXW8sGZ5hyY9Sd7xkRKgq27M7qHttzwvMHoJNE9KYz96v7Ue6w9MCi8Cn6H",
  "key2": "39vRANACBJAfBUh6qmduUyQiHdoCyVf4mQZCL5xdDuWThL7AzZMPd7k8pciSGDBm6Sp1t2s9NRzTzyim89tboU2D",
  "key3": "2tfFUjDrcEcadXhMS1mWpjPBpU8XyGTxBEXjuNLw2p51i75cqNokzNEceGL92Drek5nV8nnnSKFYZDM2NpDc2vis",
  "key4": "E65PzAj95bj38YDakH5f4Eh3sQ7y6etVY5P8EcMHSzowHvVVWUsBM2yoeEWg3J52hLitvgVs51XjXJ19KKVA3nF",
  "key5": "2gpeSiT5gQf7GyqBeo8jgmzjAFEwUhX4rZn8THGpRBTBu53K6EHbfqKVYQRbE1p7LRzG3u5br6J2iL2NnTVMgi8H",
  "key6": "98A9meczx4oncZwzhs5gQeqc7ixcsxUGVDZro6CDMriKDWDoFJs6EG79HXrVzL6nvQBjVU5HhvCcHP5LZxX85ZB",
  "key7": "67CxSvmKEvG11uP7Fib2ve3JGBqEkeNor9hu3arhXAzLXYVA9EUUnuFuHgYFCT5N2KtCoTAVdcKoVqUKktGYe931",
  "key8": "53kpSynzWsbBC9rehEDLo82j4LbtRTocxbL66Xhod7gJ64UHrqRxqBagAizuWoLZQVJAt4LVybfFB5BK7cqB4z4k",
  "key9": "3WJiLgUDCcLQx955XxFeZcdLuwPjxnSuV8JAAQi5kgro5J8aFDQL6nQSMkAMJN2imHk9adUkCGw12WQVTZHm6kSx",
  "key10": "2PAMmUuMzTezKYbDTkcgKu9D61ZVxzmdmZdqqngXbRda1FrKfBxMy571GhFKyHnByR4buAMFub2UXoDCpw8qf8Po",
  "key11": "4WowyAw28AMNnwNkE6BA3DCUBwvg74xbiKbe4cpsAJq46gt96GSEwSqKXS1B83Y2x2xv47VsW2dVwEUwuAUcWezi",
  "key12": "3umSFTDbwKAEmunxzo3Spv4dym3i91EAb8dByZsXNcSaSjEM7uzB9NbjngWbUMy2Cd9atPuH8iwSGMg6znfMtYiC",
  "key13": "3FBmTLNYvWWCjaCKcmA9QmZ5nkcGWT71SaDc1JA5d55eo2aVzWGEMwDpX86vPgPRHbcqQzGdBoopzhPWwY5ep2aL",
  "key14": "4viqqvEvFqevaBR2iveaPRjLC23ZVMDZ8WBrqmP7sNJgSZumZ8aGxweR8fWoTzHpFnqLSyBLAdhEbYUUAjZBHbWr",
  "key15": "4Rn37fdEghjHW94Pbx5cTNG3nc6ba9sWnjuFD7vmew4u1poTALWQH6o1SBEn8MAYZjRYjVe98pw3k8t5rfAbY8Eb",
  "key16": "3YkLrfYNz4bpxsVDiY5c9HA5A7sjSyxifGKCWo7HfYhr7G6C6yziwp3ZkNeNZxBiiZ37QmyizgX5Hp3Ssj8XT2aR",
  "key17": "5VfDLuHKisXfaq57LZMguJ9zX3yTFMdLn1xi8YQMAGh7uXG26ZxH1UFvaJfcwwHNznRgFLH9BQwpif34pdkahbS6",
  "key18": "5BAcBcZVuzbTc9fN5qZLCzneUkfBqpGy3HoFr3BSzZmj3iQDdTvxYyetMrGowoamFzyxrhqv424QK5ST4AhJvuwQ",
  "key19": "Pjptiyy1C3z3mc7qnuSVQ5ftRyYfJbYgaAtFX9L6EWhVawYtFQvmtPn9iJvqfhJrH4auCp1UZe92onRyhKKGdNa",
  "key20": "W24dg5Muy6dbsMf8CrUysDieWVh524YdhrB7DgD6Tov2wMphFiFAQUAHaWBEU3RJHiSpLayTXCNbS2oFNsJVGRU",
  "key21": "4GM6Gw7htNiGu71vdtDERm68x7ekD3Sm3jXW3ydBvA5d38CC4kjBA7gDTZhmthZHNaexEh8Ettp8ipcvuvwqwviJ",
  "key22": "5QYyt5wSpmWEJNZKRMTJ2ZHRd4bG124U5K8bYyBpdhgVqqCX7dLDVVDcv1NN73dqGEjiyYBTcApK4neCsWtu3AmM",
  "key23": "qisC2t5xYjU617zq8RBEGhAmZAy4HGCAnKfNo2cRdaRyXhA9Kt1XP4AYRdjkpFP12P6ALa8dcvok8pfNTGE3Eyo",
  "key24": "3GZabs4rseiRv5UxYVsFsk2zUwvagVAuN9LSbvkr5ndA9nbJzPXmBV8EN2diQmtt5SvfUgtJDgQnS62tdKZwpji7",
  "key25": "agMDfYwq64esJX9NUR5mEpT7Zwpw1iHLt6BNUkEKuWQEasastfCFcEBRpCrM16vtTCwrkSwndQS1Z8izXekAJd2",
  "key26": "5R82gDmgfZEQyZ9FzZEg94Zs21w8yHvkSJXFTiBA3rxFEzV83YvoFnW2d5JV9mzEHivrASqGGYUUMEBGort3cBUy",
  "key27": "2rneHccpTyZLak8wm3HYUvMzmVP2vYrYqZV3AWjGT3vYRyjoZ8hsuJgNo5nQqBniTGgyvFNN57zK8URQfRkwHvEg",
  "key28": "4Cai2vc4zxhHejH9SGQCt4T2HdWcCVBYN8D5AASKk3oDLB5WiNT6CcTWJiMVbSQ6bqxfUuthpEPGykEsRqhjmTZA",
  "key29": "2MgyBL98nY5q3jqYDsfF2ZcwkNHdnng9Q8wKjgNxXwaeVxBYWm8gatvazjn31uzfYpLDQRAM1azpi49yzk2ZvaMa",
  "key30": "ecbc2Tts4KMNBgf2zQc8hcGHtithRnjx6SqzSNB6d68jbMbR5wEozhnVGxJ2Fv3aPd6e7QFvNNrae9jfbNxx4K2",
  "key31": "2fYZrpf7bYipurWXbcPpmDzdXnQAWt4UvKEGKYbUD39dPzS8eSBq8zPYiebdSBgEQ9nnNwJdLgTLx9duxP852UvU",
  "key32": "2X99qAcnTzvNyFLdkP1s1qSnTHY2i495tPLDEgBuX5725vwmp139pDn8H92yMyUB3dzachFysSi37d4NurKojmP9",
  "key33": "2zgfAFpw4EhDU3kC6ThzAqYm44gtps45sottBZBydT8U6qcFdEr6V4Hfhy71Yh4FxYKFH8pYPEKgc1JzDMjcYLbs",
  "key34": "4iRZFZBdqq5k2u15KJL4PjxKNh65XWscDE6cvDzmdLqKvGt4paU8HYGnqtvMMRH9RBTbnQPJPX3sksxbNcPmpKeG",
  "key35": "2GrFBRdJsyQumgwFeUYxEqCTXjVY4nQBN5QuK3QDaxHSkNp2GcxKZJFMtxvatS5kLHgMLWu2kstTN3h8oP13ymiF",
  "key36": "5RiK8PLoUFwWxqMyXVTHPY5udZEdLLAavQSexhf6gEk2WFfbVxSzpdeRbcTWhVGpXYvD3akSAff6FGA4utcyKgZE",
  "key37": "4gH5Ymga4hPMwppzjkE2f5Jbjm4uYc97R5vaYpHf7XtDYq2o5YB5ZdbvrZD1GmdRfeXvXQ8HujPNaFRu2XRwQaJU",
  "key38": "guys1v3Ye4tLFT42geAA2fiejZrmyk48bbv1EQEDZXkXqotACuAG8RU5AgiQR58QFb5N8w8MGSLqELGHiezUEEA",
  "key39": "299v6sw6FP44dCN9HcuuV1WzXGF8kwyfmtP3RtvY5JkB3MNEvEn964C3EU8eeTWwpHfiprsHFcvBnLsHoP7fDt2G",
  "key40": "2sNLi7QkbM72FkAo414GhGsgzaGD8GxbsUBr5EKKKvwPkg7MBVXWgF849mxVrdPWQjk6faRAWskoXQ9bUovvpkK4",
  "key41": "37rKEkPhZLzwVfZZsA91m679rssHNgsSJufECX5vfJeSQ8Rhi5iCkU1wAQd8ex14FBarxXYDWjPnA9K6Ecq5paX9",
  "key42": "3ky8vC6LFEAF5HrQtJdX1Pk8ux2WozpUNcmdLiFYWhu67ZSdCHxZHfUmWHwTr7UFmeq9vXHTk9cbh46HqcqyQVc5",
  "key43": "Axrqk84miHeWCHHEGFKMyaw2xw6qrFZxi9zcAtbNh38S2kCLsfZaiWUVuUPPXBYEuQRMN18dbd27p3xg7Adn2SG",
  "key44": "2bhxQsgowHDSVCiEKVvZspX4pSB5XJdR3cGv4W1CqFWg1tnALBHfCuYEcpzatQF8bToyXQfkRfHeJvFaJ2ychq1W",
  "key45": "5hCZoDQPRDo1bikwrccHkcvSpgP8QfA1hattb8GNTWJ3g1f1HUcpqSAGLsLSmJaiSgRMXj5LAw9yNvkFKZx3wCmK",
  "key46": "2vYfSJdw5cDk5Yez7KnuC2UNqhVVteX3BPxWDQY3Gj1SDVRBfBXx8MNLZVnsMtRM9rg8Jfgee1EWGpYho1CAvmCs",
  "key47": "kLSzJsHUFWKcquhtTeviEipkAGPweE6obPGyfcBJR9fvUwjuGefm8inxkkLuQjN4owkTcL7KBbT5SmZnJesz7Vu",
  "key48": "5Don4Ws3ZCwXA3eHbJ6GMTCqhJmRVCyAUDRCp9W4UHboXNqvZ15p8Qfb2wZk7ZfaYRJbhV5pYgpJ52ox71V9T1aq"
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
