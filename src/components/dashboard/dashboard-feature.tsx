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
    "4u2DnzwzS64aACXAdoJwCY95J94z7bD81JpQCBPtytTyBDJ9DvCoZJxsC69B1G7mB46rgWer78rmT2iJ1HLMQQk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pjn2JMx2HeJSqGuSruZZ5279Z6pCSRTEctr4sz1vdG6y6vUuDNyU8xpeBg6kiqTFhFQxHo6MCyqLEB8AJo91crA",
  "key1": "62Tx851W96xkfsFCGz2MvNp42AxgW5ugpee2FXoN3bz6vrWQBSfjLgKM7VPKVgShX3RSvbbKp2aFfssSAe9UopbH",
  "key2": "49sm7XdhzVWsb4afGsaX2Sbw7R41HBTWf7E41sfkwUtEZjGLeLwNGZ1WEXHXEvfJ54bVqgw84hBU5514wYFkaShg",
  "key3": "3VfLhrn2mrJooeBL7tz5aznzDbM6Wt1pG3ZreBG7dSDf2BQpYjM733pYUhxQKtejLgZvgFjWTdzpuKpnzRLpX8ac",
  "key4": "4Da31htAiiwVzQLwspbbw9jX7skUW2qGPPZqEJcC88h7v5XMzUAyeK1wQc5BWLhhURP4nd9hcCH4RXmuFh2SkppT",
  "key5": "2B7Sx7QT6HgY2Q9RyNvhqS7XhgSrdgbyD8ipH18U8CDkgRrWn2uLkFjwo8QHuqoeqUL1UvhetWzVtEpavuevU8jv",
  "key6": "2Nq7Qo28SVzrSTJG1wHk8w7xu1qmGQQ7GvGiCavf6fjkBE7FTsS9YEnx8s5ijV2SfZHgFioi7kFviiNj4M2FT7J2",
  "key7": "4dPFQek7d9yEJ2E3YyUCcf2dfiTodLC2X4oAF6NMejVKPPJSFj1vT9CpQUyqrWfHLJFMpTh1vDnLwFko2LTsdSTU",
  "key8": "4FiwAoPanMFS54oFVJZHk9h4HNfVsfM9cFgw6jGSxLs3VGD78kJqHYvvPV7TzM2BwaZqLJ5j6zND9K9ZUMwxqCy5",
  "key9": "VybkzUK5Qu25tshfZg1F6M2LVjHpwL3Y7GUCACojuBScXEVZSmgnsTApJkGSpcAyDZZsNcH8YfDBoKcjRoK7Z9B",
  "key10": "KUmehPGnDvTcaReMc7VratNzH5WcqoqfVEMzy8GPvA6RJb94PKQbJVWL2gv3FovX9y3f5j2otES44DtZbp3H4Tm",
  "key11": "2H3W6GDQwypJss4paECCkZnhXWhpB1h6Bbf4xKGQyf4eEuWcZkbx4GUrLDMULcZFyDJrLov63FjywaJUDKwU2BUF",
  "key12": "5Y3XEds4JhA8ZoYiAyxH7rZGKb1mbuzMkk2vsKTT6snP3vSJrrPoiaMJViNBjkfD3XuvGEpLiaCyonpSKEz2TUi9",
  "key13": "2zUC3YCZRXgcgLtBneC22rAUhzQuY3VS788rAXJHgpBDnDdjoFuAAHeZGDAM9UvVp9jRwppRkqdfNdMK8fWJk3a7",
  "key14": "677RM4ARM6MESKMT8m55qeUtpSswdXikUAACWBSZNSJpWjhA5DMhnrh1iueBxUoT3aEM9GBPYUxXwsGeQ4u3hs4f",
  "key15": "4b6Sqybyqwq3vYmqTHbtCj9TDXgshQQRumHQC3uzNAx447VQhxRKrkVHstBoyW3BTVtNHm6Yrr5xHUSW232bx9eW",
  "key16": "3xJMq4NZz7DpuPiqR8UeWbYwxpMNi2q4uQD8iNtcatLvRXr212DFPFGhovRRG2UpXuZGzr4tQLxcwFBAFtmHZsPb",
  "key17": "3eKT2MgmeLAD49tRPWQnvg9QpwZZvV3gQTtaAi7ixVuZiT3Mz3DBvNKJTi3kVfMAqyFs6VTcuAySQ5hbXERpBhU4",
  "key18": "oSXByyY3YCsjqSyWzbeGgMupFwN3necnAvJ1C18qMQ9ghSBqEin2dSFdYEc1bKGyRDNmFndW1GUVYekTFcxfZku",
  "key19": "3dR6PPSfm1SV8ZHwUYETqHueAgvfX6NZk8rm6QLmA8uMeVNKXbif9KPjqRVHPntV5vQjop6PrWees1iFskWUSnSp",
  "key20": "4H98CanCmHpLbGmdaUfGjLwPs6A6JraPuTsEib9gzEfguVN9Uh3Y3WubP3QC2CfycjyKrrh7BT1WSm56ccpTYWeP",
  "key21": "39HpGBVkHYx56kALPnTJYPWMPNt896sQcUVWLErtYCHWt6hTS28P2ciHwyiCQc9iWMeU8hT3eRa8HnLcJABqddZj",
  "key22": "4epnA9zacBdXq5iRVg7iM8jokA5mw1FiKRb8MRLagp1RBzZYioKZpY6P15BsV8i24P9AP8L6xzVLUf4Y7RKKD12k",
  "key23": "MpwXSGnjKbC84dNtc498ZY8aGdQ25x9fr1eAGiHt5NTMdFNDMeVuvXz5Z9xp8qzZfZFgXKRkDVoNNyLeXvCPMTP",
  "key24": "3uBvhTbZfvAoSc2HfuBeRTsm9xAbPwF9cXkd47ZSFwYZptx4NMhhVfePZb1TmqFiNowD3DDeYiJNtVLxfkZD51ge",
  "key25": "2Y2VR4NsTR8K5sbJQheZVr734dNncU1eqWbRbbk4t8vukwb3PUX18Dc9j42iGoHrcbBLNFXJAqvxY45SGSapbRuC",
  "key26": "2sVdYhY6VjPBnGhv22BSpVaTdDSKddbpccLmckJLyYMb6jwKAHwtvPok1jJxWrTwDmbhk7WhHqU1QACnnDR9sr32",
  "key27": "5rGuiDBM2HcnZcoyi9qwrdyMpk5Gijweq2X5gW23zZSxGT38qgwYQexdHrJ1e4XdnKqwLSqM7EEgKTZhgb4UccQA",
  "key28": "41zy1iiZb5V4WkP2MN3sCpWibCyHiMW2HNGQDbghtF3ZntQHxYFsJMmV48XSZPAoaKaxw4LsSREG1TN9CFDV1XnQ",
  "key29": "HGQ4kM6svzKzTrc6vm3GxbNsv5nWb5zvEHVCGwH2X4NhEXv4fFHNkvpEikrVgBV9MrsexPRWmicTuTmqksiRZVQ",
  "key30": "3uqSBCAaVyby8v4quLsBXzDUhP11bWdx7XmEE1hnzhYtaw1jokBRSdLB8727TgG6dnhKqKHFvMzKWif6tsJY4Atk",
  "key31": "5J6AjkGfFUFnLPK2r9iLLkePb3wt7irz23eZpNbZKwnRBbFrvNcZGzre9wdAvcWLxYBqAe5AwN4pADeYmDLYdYMy",
  "key32": "2RFv8Z6wQempcNRGg3gk3twC4QrTvyUUsxqJeToRAHvctrVhdYqD3xYnA9BPfJZphUM1dFwR2YxG5JbCuBUQ8yCj",
  "key33": "5c2waG5S8chHcxgwbGR5ZQuPobUTzZiRXksFQQ29vWwUzdQLXjipsnuYRyhyEKQwDF94FreKto7GNyAoxu2bNxQ2",
  "key34": "5zmPKb18sqHAq131mQpwuB556u9KDgSVwHFfmxEAdcLuoxqddMQgMKGtNuaBkhvyY1YiZGbhwxc6rZEsGgd2hbt5",
  "key35": "632GVhnjUThamDrGwS58ikaFEixbtm7BmcPKsxcJtSLVecaKfZ5Sg5yPtxaUXZ9CECRRwiyu6hyeL5sqrd7yqsbZ",
  "key36": "5GiU3NHWrTWmJvpfxcYmHVE9w9qQLduSS4zZjraRRKLhstBtDXpKgrtZJVNuBWMNK6LTniSyKhK7L5jSj6YUereh",
  "key37": "GsbcXBeiSeHeu5EMEFx3Cuboydd3QAADRthCkVJVsCwfgRBQgnUUNNaW29SWFtVJPdaRanr8LM8Qx9tvX8Qey8H",
  "key38": "41jmuwkdtSvyRj59z5zeqGBb5q9S4T1rqLatYiG8Byqy3nzShTvP4R3CgmtqaSXniv5XB1WQUYXFM8dEPjYDgnNK",
  "key39": "4oJDKz5ZfyRsrY5XcrHR7UW1eeLjJrMCnfuk3SuGuG9rAinpjJRUzEhYSkJMgtnsoEEtoxBXbTex1LeVf3RgAZ28",
  "key40": "Par1yhfr4EjjBMozF48wTTgyqhCqMLerW1sAiTm8MBUcQDBLJ5N8iewFMsXAc8EV3DQhktbfQjw6wBrjB6bh7tc",
  "key41": "4M82vjL42Lf6kuFtRDdzknyaUEyUZtt5ffLVM99Rejp9kqw9xkaWrnfYrydm2xWu2Qq1ouUg9fddP5Gwh8h5vUqL",
  "key42": "3Pk7Tb9HpG3vDFY28cHVDFBwxNEhJ2dbcsT5oTCnEmUMeRaUAjNTZL8QKF2efzqz6HwSWh6XYX23gGKENHEzrMnt",
  "key43": "tWmDSXUDQ2wqJuGVCktD3JEQ7vERZrNKxdtD5AwVEVgeK7xgdRBpqMHFz1H1ip68yCqdc8qE5fCSgAwB5H2oPDj",
  "key44": "3wVXt9HnL9ZY5zaFxxP954Dpkyc74KK3viGJ5oD8xPzXN4GuK8eNZ7HmjgE1TzYwbAKFVs9Tob1KBvUhdcVMmoNw",
  "key45": "5fdZwckNCQJf4TejDLFMmBv7DZDpBTzDBWVUMXVixVBzmwWUp7dBTkgh88K8TM25QfYdkbzzY3wqZMuLpPGExqRj",
  "key46": "3RMG7FJRLHEs4jfy1X9jJ8MJWFofihURCy1uGJsU7Rau5zGUjnhhsuoBMhCDFTz3JnPpRGnRQosNrsRVFvTWCTVt",
  "key47": "2Tj76ifYrUFKVSKqmh3rMDyQzMBCgFwBdTEEps5m2gJ5NgXbE9rWGiEnbYFFGMshweMRhHaiFDEs19aVJYTjwPY7",
  "key48": "2gc2Jh6z48Pmi4YLuntpuhxZFAAxXutgzEPqrfAVrUWs174d5Eu7imcR3q64xkTfP6nrfryCDAM3eB865JnBjBMQ"
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
