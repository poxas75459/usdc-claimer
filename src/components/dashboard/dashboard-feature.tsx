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
    "2ikRQjXXnS9XJvGv6QAzHkSoK1odYx63cVsoPcSqp1GBPBVZWqgGyckTETMjzSGQw6xqsd1wxMeFrpDQPR8pggzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dhT9zqEJQS8iDeGA7mJcX796wyKKtbgxumUFFyjeLs8dZgWg3fRfwr6A292Jhx5JLacmAKWXAoFzR4rgXUvDtoZ",
  "key1": "5hUdkEjo9j5vsPJ7m5dd4j1oaqcQaLT1pMVu3c6GYksA3fG1oBq8QCMcY1f35KkF7eQbkNZBFEg5rfsTx3DPqCuS",
  "key2": "2Xw3MyQRrtMPL8oEgZjAgficHSqqGqnABjAYdXJJDDNcmAUzCCV9UcbbMEkgrx6Pn5wZy62C4LZd3gSwBJYCsCXB",
  "key3": "2y6KmTUx1bcEGYVLJPzziRa4Y2wbsfaxH4esG2ZUumDN6M4mX9PnykQmEaTqNJtaV4EBQD7AJ5FryY3QqitwjD7N",
  "key4": "d4kkteg5okwLDcsVaninrZai3pQBjT1G3ZWHs5NQfAyfvoUeG76Q6nTB9ZR8enKAmQMLfqB5tVhLj4RWgV5kinx",
  "key5": "3c2YSXDsoCP3PR33Ep8eg4wbDemeph4tjZLqNw5uSNmahGQqAWF9Nroj8ebA1ygviyTpeFA7QnSFTJuepqGY4jJd",
  "key6": "1DBSpzwMbpNnxiahipamaizU8bWt1DrJhNJAPdtLdJiGa2pv69KgZq4D8f3Kf1gcck6p4Zvq553LANgMdVefeKt",
  "key7": "5yYNUW5G7YnYHTjzche9rWKY3aQnT8MwU5N4TKdEM5d8n4w2x3oAbyyyo59fEaCCDGidmA2cMqKSmMpuk9pmLVT3",
  "key8": "Qw8jxdjxPPBsaEVsZkLMcuQDCkhLQPfa1sGzbEd27gJ67H6Qnh5xVQckyuDLp1Kkm7QExQpqsAs4bevJjFjEF9s",
  "key9": "2EEP58asqdYzRSGMUYYu93jXR94KNktXEfbzRQUAeJ9Rk72v9cNQSUDBtwqpRtiTZCbcksxYwEVXh8UKKsfrk5yn",
  "key10": "2RLSdNcRDw8m4Tymjz7QkraRVPakwX3d4tji8hnLXfSiRDZSzAYnqf84SeAhRWi3YGctEGFTGRHuDU4zwv4wfZbR",
  "key11": "2Pw1Rn6rVpykT3q5tK63xY8M1WTDxfksTDiaMWMY1Fc4uC53qGeaL6LH4xPuLGd4fN1A4LyXyqXxGVFBFV4oVScr",
  "key12": "2MXw1MWZZQ7c1Q3pzrHFQBBBwSA35dHy3sWJLaYN3GBUw9b2vbNyuRv1YKV5HwqrPGEdy78MqxdQuvZJdknEMgqD",
  "key13": "53p9z5rPpTf95qx1Y4ys9MCxzyqaRP6CXLfGSUiV34wPZ4pyvaGRzSfa9tHAyazptEZ7sTUQepMkXwAqesfno5yb",
  "key14": "tssbnzvyFaQJWx5z7w776mG3N8ab4NWC25rLvRqPU8f4R1aDfSKBUH6q8ZJwiJR5cQ4W5eW3bG2R4sYx7vQYaa2",
  "key15": "63f1pkfijxDc8ABg73uxENWH6jHvY91vrUwWhajdHADg2cJ6tz6Hkyg5qFZyvYWKsFq9kV3Cq41b4H2gxmng7dcJ",
  "key16": "37WcpFhJKEYWCV7rK6dtkLHvjtDSgVgKUXqitx48oc8cYfzxbwHHYk3qpTB8PpCYwZKGdc3jjyWp6Vfs9Xq5Mjvg",
  "key17": "5gNvZLDbGeZvPjNoJ5rRcNCJuS5fxbBCdb8eUXUtbXeRm4GcGZModZuowqHBVp2ucYVNVmaZYhx5mHpPW4X6emFh",
  "key18": "3cR8S1i12DBmc6VsMgAvR4NpYdvBDWJYvvvwRJfsLcG9DXZjiNJ874kV773wrxfdAvPTePLfqWt5LPHXpXUr79Ee",
  "key19": "2HeswQkQDekUZFvDLDcq7vbYeFLT4XtxqXPPkvjmg11bsnQpXsKTX9KpEMrzqvSSGxC3nFWPz2wXRZhTkCAQuoxT",
  "key20": "2riqJj12KKw6NoKaLHerMbdBBLcgjkC4icmQko6PeujcUiDq7MMHJUvbpdnkWomkT9pTQ2gLS2TzxrXfqk4oNWFt",
  "key21": "26tkgeU34mF5v9uue2HLXJq3cPQkpKpiQvX8ihULEPMJrkMuvatnPAvkeCvCHFRYDWRYVofDM9Gvsbt6f6rHSkSx",
  "key22": "584U2qCC4vNv29yeVE4dToNC2edZX8Bn5Yj6MRDGUucXQ25ZnF5gzdXD7HxSGubwfPuFfkoxWAY7fWc6F77pfeio",
  "key23": "4MbgGuD6uzuTdc5oXXB7aH7znwvm6ZxW6Fp29nj1tXWxhqei4QiGg7quwmoHrajkfBK7LTnepUJ3WZGzbQYXwHVr",
  "key24": "5wwwcVAT1CC1imKPuLUDNYzVJ6CESQgyqV9RKYSDKmGXoevazRHuvDX3AYMdwfyL2vUstouuCJ6pLJTVKA4wUFk2",
  "key25": "JTembGvfYi2XSUbKrKqAVvQzmb1LhrRU2yMQv91fPYj9GZcV7fpUNKojqZz6kVGNP6q35Njt2tDZyDu2KFGjd9S",
  "key26": "44rry1iyAH8SzXuoEvoefRFht5CG9CiNYLULQqUZq1XbkLzs8gGEszJZf6JuocjwKA7ptHaPnTxqQvMHskXxNivK",
  "key27": "4wgC5vVvny26yocineb5SPU9m8Yzmg1z6V3PBqbzU1AzMc8CDmjGEYy5MS9hM4x3v7pHUjr6GsrjkvKYYGJMwE7E",
  "key28": "45KUoK3nBZnmmTete13rox6fff4MMcUNgQ6cAd1Ma1KbZWY17Qt8gjSrb19BmioTrmVWvJ1J6vWmYjPW5ezKXSbn",
  "key29": "3GzGXvATjFy3xREL25ji714YDm2URKSuz1BEyP844XSqL8vCkfsf4YqqAAHVWVctxjEHtH5MdNMChy6XMMWQarnW",
  "key30": "2hRFw7jhU5msjN5kp2dgSE85YRQtepoZLtqBtaH4BbnyyoAVRR25etXtJb6hfEYGWi9mxgt4SWHME4RcxVpbQEPB",
  "key31": "4ZUsXWVk7hHCNC29pNKpAJiucnTAfdHsXvVho2pbPhWeLis4X7G6cqoff35cn4CXAAM4Ce6P5hAEEB6DE5WhwtFw",
  "key32": "2EFkbw1EM7qzRkTPpQ6uwf1A91G3UoewoEXhXJZoqq9TBzYV7kergNtXuox73txMZbgWuhE4wxdqmdNkBcKfNhrv",
  "key33": "45PQoG3pt3DwFi6CzXnsqDXURcSYMCqnmgbuPoBLvLsbagWmujerveTCfKbPNrRSWfV2T9ZG9h2ZBCYn2rgCSwdi",
  "key34": "2ZhYdBBXyfn7vU3vMtS1vxqaL7PJC7MWWU2Z8eP1tpfQa4vSsnxcnpbUGpFHuWSErPtskUhvAFfPjNn3VuDC61jW",
  "key35": "5GcwyW5deDdnV4fCYwN9RX1wwfH6tLbA2Hjxrs6uhs8HeYUpdXdfVFdwsVK14T8s7sNBaeEiDDbXcxZiscvFRvRV",
  "key36": "68wZfbdXcT4hGg1gR7cnCycuntNfmXMBTvACx2cduQ1PxXbvrzFpv3XGdMNnCv1PUEcKVBuK9toByPHNWYGYYGu",
  "key37": "9udPVk7oPKdxm4dx9Bf8jWZVdvZcmgHozTaFmQaJQEZDGYW8cTBc6EdcUjUNpTBoVFYQEZvzrECdksCHjHNPxWX"
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
