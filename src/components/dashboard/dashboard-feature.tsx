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
    "2KAxX8SeLz8WG5AYNZwn3wbajBLEJTh9JRStjesGR948DkuarZUg2qLZ6qGn5UhMLxLpeB7YoQhEmyCg9QDb2xWC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mTkYyWZ1XbcGEbe5sHZhMUjpRHQV9jV3WzLBJcchxdAodGoppYegXbpiyKGKJ7B37ZQBdUbhsN6K3zsmLyhsa9",
  "key1": "42yUyZSs6WRkTZZ5efd6cuagFeERozihdiyqsVnVUgNR3ZpMEjEbcHydfhsqbqeuq2y2asRCXsRrDB1UDqpcb4cm",
  "key2": "2J6oyLuUnhdqkQ5HxYwihkUKiMansW4u9sn9Fk8ZQNCwunXssMTAjCHT8rksQLah6kTMjz1wyxxAudpPaNbBFMrc",
  "key3": "3GiaRKokmmRKDs3WDkkdgBjDan4XkTJqYNVzRuwdjB1zQsb4HFsJa5BpcQgnKwjBi8wMSGs6PHCkopwxe7EzZ9uu",
  "key4": "z7yPcbeuVLbz7Ug63wLWCg5VBp4FDJP8y5YcScA56hCnqWdNvSvxhGppnQRrUJYy16x9xL5J6ULTN1j1LHAZZ7M",
  "key5": "ijUqk2oCDL62813obWdDjRCfXobySps17rBJ3skYHePz9KCi4a5h87BwJeutYh4WgRfLiBpCLW5ob6TMy5SWq6j",
  "key6": "32KV8JMnj7xzogFLuincdNRjJjUKDj2Ji42e2dUf6r4Vu1fC4dAkyie5JuWcfs66Z33ohtvWQVgJ4VnuRsYUd9Cw",
  "key7": "2Gb4cLcCr8j7yih6cSQmD52WZ3scgzN4k22pb41Ub55TGXUNswcKkeQqqtWNZKgHkj9L4T1eCD9WEMeWLUr4tymE",
  "key8": "3sqpYcY8DQy6FxJxFwZtVn8ABqL4fGdfGD5xbSqEMW3F5Z9S2gWNi92xP3u2BZtCrKUh2mSWPBRA1buEc7bvVz8h",
  "key9": "5iwGKxUjLN34tgEyNn9U6q9Hn8C7ry3B5C2RNDKJTWq2sZVYE74b9bn9rXwAcKgPTJRmjXYc6dtKgMQ5GMjBNPGD",
  "key10": "3ypeJx45A2Xq7tYZRYtJPuvvkB5kmGRk6cyZWNEbpA3zEU9D5VmUk7a3USXaEwqE2NAyhuhioq8rGe4sXyc2SagX",
  "key11": "21f3ud5chnxGxMKLz7ZKzeaSZQEk3MbFRyvx7uxKvULG389LDC2LcHpPCEwBPvCin98Vz6ADJGzA7C6nmstWN12o",
  "key12": "5eREe9xjSgHV1qCokpmm3C7GK2fYiA7bpJQfv8ViK5D8wKTrbYKnn66bNAEDSr7c9zhCQrD54Rhj4cKFt9y6iZky",
  "key13": "2WvvrKwnWUyBiqG41B73C6gvnHHosf53mWbkChPtGTACHStfNAXqaaarMCTNTeT12iaboh9pUxtEfZRWERtanm1E",
  "key14": "2WKzy46gghugpGSBz77fJPyw8ZFLNzaAuAm1DQPhy7oVx2FG9xtCsFBxvxryGTeB6XJXqKHUQyKsSE8c35XeXUfa",
  "key15": "3sAbWFSGtgJ52NmWLuL6CzGu1QYJKvUyLg2EydirUytnTzraJcT3W9A3z29FBE1ntANbN21zZDuZMCNsVu3DqGxf",
  "key16": "3E96tPoyQMT14KaZeu2m5F22p5XdHn8YX1Eo7tA7wkqEnAX2xiGPx7z2rwXZn6DSGtt89W7WfQc9DFtPey9PSQUs",
  "key17": "4ucpn7dv5kRkEqLJDm9EXUv13JpNqE2LNAkr4a1uvyq2k1eJzkJDHdkZ3pseCFEgQzNupdveB1dGV18bFk892hia",
  "key18": "5D5t4fjeLT5sfcCrW8XKjWuTBFGaVxffSA3gHa847vh5QV99H8eDxBSn8uWdnUMdhCTvcU5dAwzLV4Tk5iNHoECB",
  "key19": "3XakN44P7f3Z58r5xciEvX9MhFipgYaLmZq6XjMZUcyFyuRTSMZngXbNEUDc2V6R2nxiWXabSfXeRZemRbSRaNaS",
  "key20": "p9yhHy8aL5NrgBTPTfhKuhZsT17g1rorcrLYhWH3YqBVzhzDdB6HkPVErcgeFxMkpcQB4HZCouxzz2kfN9rfVFc",
  "key21": "3TSr1GRnt7A8LvtZb6C96hixf8DsX6RdVpWSsZB9t5Hktpht2ro1UWUFQeB1K6L5CAABEuYCh6gdQKaa6pZuMqd1",
  "key22": "5vKG8Q3dpf4buVyc8iATryQ2ABDQKeYGkDcXWqXC7315df7f3RQt5yme34rY2JkupfqDnrh6r1judPmFQRA97ohq",
  "key23": "4eyLb2DUNh8eYCPx1rL7xY5BmKWZjScxZK4Y73oB72Tmqj8rRAaGrqkq8FWGTFwude6b7jZAeoXH5x93pySyoder",
  "key24": "5N2CKFUaZDVzAvQwPAp1AEY4NLthEr37HeCLiP18wM6U1sFDFHgwB8TKaHHRW7794KYweDK5anGhSyuNnL8YfCuN",
  "key25": "2qsNWHnFZHfB1mPtJGcEHr39Sz2MYCa4F23g79ETPpbgU3LS14Q9Nb9pr4YUBfs2rP6eVHUvH8ugRawneDK93iYm",
  "key26": "qoUhXZewyWjnr3QbKNHW8mLpMQuYfcJBMMPxKfP3zaWhPhqaWAjhDih2M36pQWfU7kp7obmosJJVBrfbcGL14Zm",
  "key27": "3gB3MhzHbqf4jNm9rTN9BPcffgsuTmQ53P1Vam8Tit6JiWrVvSAk1AgzxSaNtTf2YSL7c89T7H7m5nuMYRrKEV71",
  "key28": "4L1w23WPqJQw2RUEBMFG6gnJ8GQBSMCqxUp5QVWZfNscMgAf779D5JhBqpquTr1gmdCNf8hGHdbUPJ899d8NpCa4"
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
