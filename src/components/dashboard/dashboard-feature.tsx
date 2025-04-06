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
    "3Hq1iDYFW4q8z2GKFyy7YRGZ9zHPw2fB6i78nBuVdM5jEanQeHsSyBVu5H9tHQeVCcQwJq2tTHfTCHWDahbz3sWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wWrSgDYjjCmaxQDpNR48akifwVS2ugTC9pH1AQ65KPKmprJxPywwdVpnGye8hhGDvjRr9KYijPjPErYjThMvszd",
  "key1": "47vkwYTTXadfhrSEwGWsJEHhwxKemr57nT9W36GY8dHkXbBuq5sPzA1bqdnwwafFiJdV4FdmuvKo3Zv7muNL6JE3",
  "key2": "5JuYMqouze6egFJYHXdWFNHZ14DgqJJm4SYvXeQEyZmDJUv4eUhhzs5vSXskAMfM6yJewL6LyzoVhRPKFf8MHD8A",
  "key3": "3aDE3Dg7CbGEBDchCB8mqWTKXjXbimfCTvikJM7jpBiVpaQzYP2UNEJwTDoqrNTcqpFY4BVBapAgRBZ5FRkcpTBm",
  "key4": "3dJid39x2JUUTK6nY8xUCadRoKyX4rQaN9mUUEhV2XHXLUPgy27piYA9GgSxtjhwFkrsxF3MZaEeJa4KtCDrQ1ib",
  "key5": "469TzpFmEXpMrPwgTyz2GCHT39Y4teq8c2UeTFNs8fd4uMezKsHTAMFkVZNweKo7CiN4nM6jwgsQMDaVA3Ycgp4D",
  "key6": "2ZuiHhqNdorjEEuRmiTxxM4Foour48QfjWnjtQaXgDS18txwexeKc4zHfCBFrvw5LCUxX91q98und3BWruiX8Mxt",
  "key7": "NUwHGKhpBpyMH6WQwaNBnVEfLuUUMZXRJWgH6wqWz2oM2rpjpA2yXPE8AAukQjNRj5LZedqK911WCqaHPjFxk53",
  "key8": "67SoMMajonYHfQQ8y4rSeHjm3p4wk4d2nTz5PPHfQS37hufTKpVEASmgHWG8CBkPZbozdcC1xkDRTJyqN6wmyyFf",
  "key9": "3RsxSP4aRFLptE9uVN3FjsCG2tPreKnYRBizvd5tJJBmiZZ2k5PYjPXH4yybUvvCWJ6adoVC8ndgqYYA7w5MK3iX",
  "key10": "Ge1HjPq9LKavaTcuriWWaTPqktFG66Wj6uw4a5oWzxNeDkCJa5G3RX1o6c1MFrAbVQvT3kMNMU2yJteKpcWUcFw",
  "key11": "WdrC7ST4cQ5r16wCZLMJej8UjDFiC8vPXSAagvj8RqeshPNrdRU2EszLJmYgfmuktBCHxQHvgDNfca6BqXrQXwK",
  "key12": "2dJjk33Vi55YWt9wqSMctKUEKLA7xZqaPuRSpxE3WBaoaCLWKW5fAmA7LtdbcvgW48QtW7MnHqWJCdyw7FhEJNMo",
  "key13": "5HzAmdCqWKcxLcrXeXBWJRvMVdaibzdtBvLT9hecR6bZGXCQEiEjvCLtTJq1SSHLpC4xwxDAYLvJPqjKQaHzipoT",
  "key14": "643z3vGVDVoAaP1hMiV5kF7orJku5wmRKxfbU1xtJ5EGyZdU3cfEbz7xKvGvG1wXKQmSfegTuhVwSMkQNyc3EN5g",
  "key15": "3fhhXUxaX82ZGfhdqmZfFeyeyYwUWKJ7ZdzLyRTbFVnT4af95Tumg5CZwPiqmn1oPm7f6qH9VE1iSNuyiXPakzaH",
  "key16": "5wT1GVyhKp1eWquXdednJoCqY7tENApnoRwvtd2tzzPAMzpzLfm4W8McWkDJhjAia4C4S5gBmxuD9Zp4NjHL5SPJ",
  "key17": "2YCGFueGusAtPdfeJMtniN25ZA84jHhMqPnfFfriGBT3neKKeRdyXjskvwa1KXRc2RANGiHJAQsnhxj2WBDfiowu",
  "key18": "2cFweGG3tTSpdhiadUEzisSSegSpEJB5M2MgoKn5icz6msbaDNeV2GMKwkCJkWMZTvrjukSTJugYARfvHCDk245m",
  "key19": "5sZhsv8MSxF5WgJbxAnWPStJikgDwwWRKNjd8ybCSx3fU5GLz1dSgu3wKgqTrZ5vK9SdiMzgfQf4rH7smCZf91gw",
  "key20": "14PfwhCWXJVXu13XP5HGZi7WCJfZL318GkLo2DHDxVweuMWfJgbLmEPdjLkLEerTPLxZxbQ9VXszfEdzPato8VV",
  "key21": "5js4CWj9YG5Jci3t8ofZqMptPwywXD1oiVtAovN6hY9rviZ1mp13CFQ5pF33wdQwepVuNoM5CptMRLeHutS4tq2a",
  "key22": "4c9XVhjaPKLUUHcCFNHkzsczbFkKo56xqm2VAeueWiZZJeYHVxbPauie5YDCVbFoHLfVQKTUYVQw4VfSUmHRX3or",
  "key23": "39J4KUGSLBJZE7pCCHww1k6T2cbVVUZD4BoFFnQDnmbNa8zrztyPWbHdN8SwzdewQX55hC8DCmLdJSqe7ri1WegS",
  "key24": "3PSR11RnaVqEQyi8NZpHDr5epZvuN5SqNUZGARSPBoZTEYYxxCmnJzgxEQnR2SJMybHx44omLzVq1PDKRtCzCz2y",
  "key25": "37gBMTgXJVJWDFTgpKcqXDqjjHL1r1csxc8crPUi9uzr5TZVw1TpsDDyV4v55ZqcBqaFYiQ4tgC93KBatGRQjpso",
  "key26": "Beu9A4xdNaTG7WF3J9ZPEPv3SmCJaBFKbLXAhdEz3p4sw98fedikuzMksy4dvx7H1z9bUzsusF7BfzL2S81zLUd",
  "key27": "5LrX45MF9soe9fQzAPsED7wyVVFKd8B4vaoPWpXxkhk3xRQfaTfighwdfKHQ5K2q4BhDzh3YX9zsVNgfaXyJhUxj",
  "key28": "3tLgjy8VRqMbgVPuP6NpAzpAceiwaTWrtEKx9moAck8D7DTjTd7XuehnF21ffZjBNoLCFzWkSrPFeYv669JwHZNC",
  "key29": "2WCXaBE8dJZEKKnsRPDH1VJzFqyCMTuNa9yrFQQwyfvYnhbdeDooEPTgdwtyUqeUvJgmxqV3FNEbqQbvGr5KVZgw",
  "key30": "oqc7SGX1yAiz4R4iWyTSpTixcJzSY1n9Q3ahHXfxL5y2KXtsvDrywBqUzuCxn8gj7wcZNdNH7GKccKapDXypQ4k",
  "key31": "3o7h3yf6WbuW4in8uQSbDazP8nnhVSBMT2QYZQJetq4y6tMyxpSfrQtZu4XFnPfjM3T5cWH4t2YvXTWPp6LyH4Nm",
  "key32": "d1AbkFkjUkYN2XuzGqQCYK7j2PEtL1SvX6JA4NseF2PUmNeTfmDT9Qdud6hiCjQgrNeyvpCCFydWpRZ281CDJ4L",
  "key33": "3EhGH9YbWCQnhVsezhakW5RFMbCy4bwggF7jDCWJ8Ktzj4ZmVCs21rB12W9neTs5mmGHwX1pYKXXTQKQWq6wrQVq",
  "key34": "3aw43DDX6UaqZDqDW67iWyF1fpVknhsjx8MPVEu5XBMsQ7g1czJuNYJrxWhSsW3QV7RK2C174B8Cba2gtNHk43FP",
  "key35": "XY44bqJonAPxaWS9g225GCP91ScyYaKL2L32oj6ABD4tJAz2Z2o91mVo78pRsZm5VvGD6ZPnmZFSwVxAvLnKB6v",
  "key36": "2wLEMsGiLkaJwnG8HxuXQsPJVm6SiDg7dLoChKC8ERbeNo7VK4kDduLbNtwojxoz6MNzF4GXmFMeswLZ6RJDYBa8",
  "key37": "2qnP4gkyJx3RSquAK2hoeWh9HAzc5xTHNEjjidJ48d6tzYVZnJSGSFpCxf2d4DkePCS7msJxXxEka31zL5tCftR5"
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
