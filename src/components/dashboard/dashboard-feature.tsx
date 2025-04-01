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
    "5z4LhJG9MXfYHUz544uS3jfevk2FyzEFHCigfFmfWjCLSiwAbK9y13i2KvVysbNoumRN5pYkB8TsfH4e466Bzkj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GUkZfSMpWbV8SWF9hCpFw59Kvun4Pm4KnSngxVivqKT5hh96si9MjTFr94Pqs1s5dpt643TDBRK7u8Fc8aqhPZn",
  "key1": "2MqE9ZbJ64vrLkKBVfffDPayRPVnCbCSTNvosUY69RK9smZCSxtAtGNeTyHUtQWMmmhZZiDDhEmzd6Jgx8nxibUB",
  "key2": "3T3GvvHQuNSnTpiPP6Rsg3tMXbrFuYX1CqXek8yoptgvGhZjGjCQ7SqhhVEMhYyTPstcPL5G3P76C8o1zSE3TzHc",
  "key3": "49hEiXSYhfoC29Zin9Suz75FkLgo7YTiWZUWK2ze4vfYxwUXWLZ21NHdDe24VBBWEdWrCKLZKf1LbAXWbLNr9XjT",
  "key4": "66nf7mPMBhudx7zcetUioGr3gWaQZQk6HwdiMNtTSTQbQJgQtChavbhgkea3eRWGnrnq1Z3k57SXZed8vzbVWgqF",
  "key5": "5RJQEYLR55Ze1KSd25k6AtiuHkELWSkc7kuz8iUhUjAFJqQCQMronBiZchgxpPUN7BQG8mMkEUMeqH5c3d39y6Uj",
  "key6": "5bwaJzdppWj8TeKh2RvpCCQ2Zp4zcofUpyyXDB1fPiUyKqihwCXcmaxTCHiGWfSSpkEnmZteWaWn6ASUtYJLge5f",
  "key7": "4thHugB3jecSvjNcK9s1vKS18m4MdVxRTX2GpcuxB46gbKijCCZuwVq3rnt2R3a4SUPHc3qH8A7ohXrDHiTummQF",
  "key8": "bzV7qq7iMEk7jdYWyfyu2RVUVRUCt4SmtmjMFEbfsL4saxsrqs63k3Wf1oyMREAsWAvVBwivihXqFCq9aYTbpn2",
  "key9": "27foNjV2UnSBArra6JYCFkQBWh9yxcsDYdBQXtoQPrDeAGZWge6pwWanX3y5fuPwT5DqEzaJ5s6jntqKKrQNoJCX",
  "key10": "2rGD6gnmbSdzqX5EX3ASkYnacMZSYQYfbD1vsD5HswwKMrcg3WEdKVkW1g6YCEDerxzwpstLgJTCL31CMy8iBvMD",
  "key11": "2uFW5UVYMWYRUbEBRjYqtuNs6eRE7i6hpdDkTF4paL1UCAuSvqaiRpSChBVerukBhYTFR4Q7CaSWJnRvX7UXGXQk",
  "key12": "BUqTGS1vPqvbz3JGuRArVeC98MM4uq262SbBmcmnyhx2Xukoh3RUp8DnS3EUrqK91d2USwrKJnXEwCfva22mZip",
  "key13": "3LAjob9tYerSQ7dhrxQj6MURvbUXNSZRyf1Pmz3dqk336opjpTih8tD3wrs5V62ckbL4tPo5DQ4Ra4CYDSuFcVFz",
  "key14": "34ebKMsYLZtJoNYBY5uxU9iEj2Lv9ojTmDEZZzj6YwxQ7ZT8Y35oqVoNQ8QheqqnvM1Ey4Nf4NMGKthsWf15pRfZ",
  "key15": "25gsfnHQnhRoxpWX1jnsUkrahNefCYpTb3qTdcyyMXeQpTBZmtnADYpFewE69p5KF5qwF3pzctMVkE17HA8n62oZ",
  "key16": "3P4ya5TKNA1GE3yPFUQfLMkmC1bJAoQKpJuNRpiApbT8zyu9W5cBvrERnSJfwMGSCbxGf3JYczeHeTQbxTpCcgTE",
  "key17": "3puS3y8iHbmJp1JxzJci3jji4apwqzMvJMQUNuvurGB26QBscT3JrHXBiD4qqtXyY93ov2vZUganznBhBXmbVZRZ",
  "key18": "5MVaE2mJn6g5ffqXNBqmeYiGkXzkNgyJxymCJiZgGG9fjFo1AzXRyGjn7jhroW8Uz6xMMbyP7BA9t6mndu8ds2BV",
  "key19": "4o9YP7GguLAFdJ5nF6EFdR7Ga7o2ZZP2zpjHqJbm5BXn67cEip9L8qCRhsEGov6uBsXERQNcbCftzt8HFbv9mpP",
  "key20": "2AitxUugSfTzBbHdLosyrV6pqJUTTwRhfUjQZrZpxrdLGXo73dSUSDm12R1yfx7QriRNHAP8ikL5vqACf8MVaY2M",
  "key21": "62Uizztdkx5TxqkMDSnVq278FdvMZa7MK15DMxG5kYruT3GAY9eUEBqiRDZymK13A1buG8gNgDk4f8jRcTtorZA9",
  "key22": "3kW6whykUeM5BstaupZGHcbVpMhkvNQtraAQRA4UfE71N2tqEaAzjsDh16mKp7Yw1sCyHcUndtbqqbBTNAjr45ZC",
  "key23": "4X3fo9tmMcwbCq1pa4vkdntyDyxQVvnppLRSbuBD2uG7XQ1N9JoVd4a5TrB6n7UPFxpGMvu6SV8wYCb8bX5E89gy",
  "key24": "36G7a8eAbzYKtYPfCmExaKuKtqMPdffVeXo5943RGcWLR3JwvkrXXQfDjD3KPoRV7W9hSpvX1b73JQTFrk7PuRhs",
  "key25": "9UkYbyk98LWASHJJFPoKwCT3EBqwunba8JDULDi9L1E3RUThYQhAoZ8ZRK8sw5Uj2WdLgYkNgZzLY951civv2GF",
  "key26": "2ZtApqDB2p8ofXvGnVrovmtLzwFkvpTZx1gbDyUo6TV3tKXSjjrnTJhy5hjgfgP7xz1MvPLfTGL1k11iFTBeA5tT",
  "key27": "5ytUNQyzXqYDzMVvopE1uarvJMWNxodSQfy2ugTijZKti2EcFtjbMjPAJku5zgdmgikfWekffj6vKeAjvEktPMLc",
  "key28": "3bGxLEZdJJrFxs7M2hF6myjt7Z2uZKpaZRnzY3dMJzCedj34TF6p4hJAjKyPJV33Mk31GSnwLhr45CV9Tq5mMV6U",
  "key29": "4ZbGEC2cW1fdY3STvzPY3uPKSQTwrNzTLWLLo3T4Tn2dFGraEcHmcjk5ryUC5XsPP3AMCFg1idswj7VjB7XYA2Cd",
  "key30": "3hszV6VZ4mSD7EFXywqicjDYTf2UBLE1C1ex187mAGYNHuFsckjqybiAouWMuaBLGsEXVEbV2khw1YcoLvXdRMFF",
  "key31": "596DTKyKs8vt3Vx2WjSWgEDdum8JRMWw3SLVb5oDme3b1WqmF6pgwExJpWwWcNMED11k1gMeAArhUmzQf6w8zpoD",
  "key32": "57B8enNkrxXnEKVAZwvy2v1tNzHqa5dsmDoiFHHn6wgYJ3qJ8j4aUqAb5TKdv7zEfePhBEQguKgEWThvVj3xgiVG",
  "key33": "4bcBiHiGoNgpTiaswEhCRmA8hCe5am9jbA3qiyRx2z7BHG7o86YLJVvhTWo2ZAR8ovdW5i633qvEesMKTJcvzWGK",
  "key34": "25qEDBLS1uGYVBTkDrX9W4Xqu9idGU1uZyZdM9JbztehzURqDWGyiwZNVuunZ44v3k5VbqhNH9U2di9dvmQusArY",
  "key35": "5W3eWdfgEMuXePprdyFY6HhXPHYBx8q6fwK4LYSFPr2AUmgHiBgrpxsB1VMtFPUTwzbSRGLc5DyBkWPFMu1JHrai",
  "key36": "2snbb4ghxwgb8G6Hup3T35ZNkHQoZiQXhET6tk6GJoc2VBcxph6ZMCdY6CPS28vczdD8fxtjfdJHakgAJuPejLA1",
  "key37": "2xY2GG1gSosEEfwF2ckVFM57h5iH7k1PEzJ6b5oApVa8MJvGqAqWWQ4WUES4NsX62y3YXgWK1NNQtvcjYfVg44wf",
  "key38": "22QtAiT3w8DSZShnbyYoQ9KhSd7WUNuGuduBBdjkEbEi1WtNsZRkWZQDPYZ1HnfF1F4WN6t1tK2j1GQ8tNRJecEu",
  "key39": "43dk4qrb1hLavUKQt8FohcHMBvNVuQwaxQAn9cXbnsWGi7WLxAh3Cfesw77eDGFSYNLbmAZzkQKeWruGxMGYQoUH",
  "key40": "4NBVM394KRk53GvcAQ9nJLnsK8jEAfvwEPXEo9BfDqpivq4WEukCf5Z948pEJu26UFjxvxEm8Tzr1zBvANurYA5T",
  "key41": "4mAcDiUEKZao6qSubRXQjPGoAWvkhxCWcaBYxejoqtxYzNEZMC1ese9nHTBUmZ941fhfR5rv7qxbfGK76G6dzP5s",
  "key42": "2wdKFUR1P8muDzC8b7WTo3TKqjn1Uk8uenHKLtzwXdRugige8HqWuqjMFtog2JSQwL6V4RZEBt5efJMMMLqYCuuo",
  "key43": "R173tcxmQHTDRqzjVsmt9vj5KeiZ8FmG1sao9PSvtCT9VksVERWanqpxhSCyV5PyC6tSbbMuPthCzfYiYXBnCmh"
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
