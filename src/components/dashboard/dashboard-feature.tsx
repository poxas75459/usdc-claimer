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
    "rqiW6yF5BXSWcYKEu536KFfeJDqGFsoFWYZX9iNk3wCJDyTy8yrpgwuZmDDNcYouDGYuUmBrfUTFdiWjfDzZ7KV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mPEtvUZXyWiQwXe5L3euzrcKqA39tRaMCwSYK6Ha2fYuiNgMSyU671ymh3T3PtW7dmGFsb9BtfEn8DdMWV5pgFW",
  "key1": "mLeCf37c1EXaTt2nSdtsXcHbmJkHPbVo18m2BsYHEyG2VeGF4HmGGc84Y43HScw62pD6bAmQJJfzz4H7G5gRmxA",
  "key2": "3sJM3SVLehWcygPevJmXiVFrpBxw1NP5dn3DbUsQKLQdSGwGo1YdbtNqWwGn8KKYdWsyLgzhvnhnjJJJZG2eA1Rb",
  "key3": "5Uqe7NJEt8w2SkcRf5Yfvu15oikuijAsSJ9bg5EFFonymyYsT6qWsfzNEvKWGYWHx1UzpsvivqoN3kqRtqmXkfuq",
  "key4": "HQ7MQxaHaiAeZigkcAu1tf39bp5ymZJY5PF5Kwz4rLEUA4R3Z1ne17KyRXovWWireGCrJaTVBmJ85ciivo1Kb4Q",
  "key5": "4ciWQp4hG23ManpXpVpgaqVh4vxonWBVwqnCyCAechy84PKKpC5xxQ4upGa3WhgCqK4we98w2Z6uSHk3Yuz5owQ6",
  "key6": "5NVfK3CoPjgX6oaqet9xoAhhGvn78Ue4fpiLwQqgmdDcJUAVaBjaLftgXnjHa4LPcrX9bzLmxPkCFj9cPh8LDGQ9",
  "key7": "fsoVW1R2g5uYov9mBd14jmeh3wEedtnps8mScTBDu18WGuYqVXKKQGcirsqhC8Q86rdC4sHEnCDDcSuSciAbwLb",
  "key8": "6EowLiiDyHWLj1BeBwaQtdFGuJm6cuhkvJPMvSfd5Qop682e9MSDcLthuJRcJrjwXKNbDiuJ2LQdYiom93MxFqj",
  "key9": "2HtgGkmUzdqvuasoh8TuqW5boriyjxsvLdY4Hq3tEcxTu4JGktBLEos624j7bMY8zh4eDwURirBo497oZF8ZeonL",
  "key10": "4TVpkoJheXtFxtzXPh4Qthnu3K6RimMm7qdyhNLQSPx7pTZKuEDYQnE9NCwKh2rqLgz4j1sEWB5LnkgLAZj1pUTT",
  "key11": "5oo2Nko9QYGDPxATLV8aRgu5urqKPkHjWp7Ys82SmsojBYGkngiNi4bnHU6zdne15z225SwUjwfm9KPTuHennb3E",
  "key12": "5424Z6z3HLXJ9En1eNbBtGA7NxjqkJ3AMPG2Cg5UxHfPC2U1mVC19w4GiDZGCkUWXmPmPEn9hRRVwLqg6XXpR9MX",
  "key13": "3pBwetyjz1ZYVZVDL3CJXjYtjLvVHMemotvHro1tq1TKG4FemaHRtsKDHmzV2oSQ5VRy92gQXsbUVnCT8vYoqAfF",
  "key14": "49TriyLxpd7b4GsR2HbK6acQupswTQak2gYAGqu8kzeqWn2dnEQNgsrRBDmvw3nWGSk4tbDfEqEuSKak7GApiG4V",
  "key15": "3skh1UBTSW9PhmmoQV68g1nYAKmcE9SAdYxTFnmmVsPX5Gyzw8S8PaEc5NdrHVF1bjCi4VWM62GKPE71STKoXvWG",
  "key16": "376Kh91TVLMyLoNcJkBGQEXQiXZWJrCBoXx1vwmjPXyt8RffJze1PwNuR6e8tUtcZ9GjDHhMSp6Vnk4fEE32bMKw",
  "key17": "2MkrsZNDDaWu4w8VvwkMQnEvew6RFay2e4caKfmyaLqJo5jmTXWuZWNBnuC8gYfLKcrTcSoCNbYMaFVPdyiqqCZH",
  "key18": "589kzvqYTuyKhTsQbNKwr3bweFoyLWrBKmExkoLTFiFZwdHDTqeBsDn8JjSSDkYsiDP2gdQW1p9wv8jxb5eyBELJ",
  "key19": "2E8KSQSq9gpHdaPZPp5Qx8KbykeokA41yaV1tH2rXH9Znzc3fue6G2kdxQSTXX4kMXRhHKUFRZfrVyTPNvYQjMHS",
  "key20": "2YXxJ46YnvmrLJVf4U4iS2t69uQVrJCCkYwLkwVcCLTVY69qVxAFsdS6NJBpFUuQoFKGfZyBBpwXzrXs5WyghkX5",
  "key21": "67Amic3atPmS1myYQEesU3D4ks2y2SEZTJGzuGNypsiVn3QayACC14u9y4T2oE2TwYfPTuEf1kfhkz3xQCRxSuHf",
  "key22": "5hq2eszviyzUGiVfSmDvt8AUdNGZBwjwBArz25CiECH7c6rMg7V7rP64vQDMJeYAFk5rB4tVUctdLdixmePtJyNx",
  "key23": "2mZkdrUbZfn4Re3mvhaMukPKvAEMzNfNqgf4fWS5o7HKydxTHPKsCzm7gC37vbKeHh54QwWyq2NHgsW9Wnvk7HQ1",
  "key24": "4GWdvzXAU2MBiV86HNA8rcW7uYi8vip5ArxhxQueaq5C2D5Nt6NPZx1xcy8X6hYoBVsxCybzChwrLKkjyerMwgMH",
  "key25": "22EfRCsXLWgQRo9a4UH6t5nA6RYrr2V16CcDf76WnzMnEKvvx6Rv9nw5GTp1YAbmwqxfbQricaTN5AqiLj7pfYFb",
  "key26": "N67bj7T3g1ytTX9zdALEAkXRXbo8XSgnWY8g9NUH2BKAiACSFQwPyMYZp4JWQKqg8jqVfs1DdAekSYvAT3k7hvm",
  "key27": "DCNxR4gmzFCvUsfwg4PTrFoRF2j8kKRG5Go2cdZ9nBH3JNeCkZAmcCtJ6Gfx1CKXDEkGr8r1MxMj4vdE47nqbpe",
  "key28": "3pDKULfDs3nQeo33uph5rVM9PC24DepJCtk1EZPBtqsN5xjz8b983H5FxUDAe296kqaYa9sKQUcsdirX6qjuqX4t",
  "key29": "3SU8N7rnXd9L73STUiA7xrVP7MzHiry95TomfHSJHuR7UnyGX6NWccxTgu9F9pRZEcfTYp6NZy7fcyyQ7mzxLH1f",
  "key30": "5vTiEKmxcgJL4XAFmpduPYC8xgUpdQ7TDMZph7LADbW6g33KmKnBKfZQo7pJCKMLgA2d4usVug3d8o7LY7PMxFhi",
  "key31": "2FKfTCtXa39af5ug5VY27LvBrbQKyh6m6uH1e3LNMcoL5YEd4mcbSay1gvjdFap7MS3g8GPYuRyG3iX3cYHR9dvo",
  "key32": "HCMBkGZcMSv4X6bz3b2BYzXA2GkTkwiEk9aEgPkurMvZ66ACjM5V6WgDERgiPDDtx4ixWPR73P1VZDxuwM8cgQL",
  "key33": "2jfi9FYJemiKYscaFmiVXpSJtFSmhahAG3HYWy9YRZiu5THPF1yPokpF1roRKD4vocwtpAGGuT5e93Q9aSyjSFTw",
  "key34": "3UHdFCPn1GAhhoJoTzjMuJMfsyLUvj7ySx19xQrS6xTF2q1f5HiLvx7678ZctQAiKvEyr57S5DPo8PmDR4DqNCU6",
  "key35": "2fVFDd6wmRqPyXM39PjtvSMo5oRipTuGuycCgtdRy7GJT8kkotL2EX2H5GPivK1QQMnmtJRV2FCymfq7AxN654zz",
  "key36": "39CF9Ys81K8HGhoPxZ6JNeDDB4feWkTLgreuYssuJYKR692DaiqQEbRBN9Y2VMXM9wANQynXbDzDHRT99maTy16v",
  "key37": "4wrmLkUQUqAUEZpCnpzrMTRsqSMEhZGT7s1hyE1GtZubVtCsLhEBeWG9JxnHgWsDoacRyvJL2LCKijwSXD7Ac5Mz",
  "key38": "4SLgRoPTjmJZ9UpEHohiWkCYy7vqVvDTUghSyGPBcnUxrGnHgis9iSooJdAbmFrqAieGz6TsYXtuMuzVBKyWCKj6"
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
