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
    "121T2xphU7xD7rbWAuqYSwvdyizFzxpumTedwNajPy6FmiaMM9YBt3Ao7HhDRs1eky17Ftd1sf1mTs6S7gCXAX7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aK7Zx64CgZD9UreENoQPymRbLWMH3wmtN7bkQj6452cz9wJwYSvz9urm2TSrEG1mGs8MsZ2adQSogmKhhQrUzj6",
  "key1": "4dHtKPeqk1ZXzcnSj2Xnb45H5x6g6musysajJq8VU18BriDju83XibquqPYXnv75Hvr5cwutjzs2WpZTZSfchfUH",
  "key2": "3yhQSsRq92TckhAzpbMcrwsRPzznaiiCC7ynDhDEG45F6fxpk2BHxiZYoEZN6FmhhRZCu7vQFUg9y4do1RFcdbht",
  "key3": "41Jf7uBheb4XK4MvBWRgrFDnoxidxKHVw6CAUBeb1eeYxuSPXf1RKjVxmsEtm3AC435VaZzvnXTguZ3diXP2fjE6",
  "key4": "4i7jXRdUjeMYUirMuoZbmtXxHnScXLRECnztH3FBFd64hnq3FRvm6KgE24bGm7JbpVZeisGYBCy1GmFKc5Z3Km4y",
  "key5": "65htfatf93nSJjukBpTHt8FSRBwxcYYpDWGcsmhh45CXUYiLaubqKgQxVnikMdNBbHx9Y1ossWhFaibm4jH8Z73x",
  "key6": "2usdpd4njpmV7Hza1spJHH4D2d4A7Tr966z8axZB9iKdjnzHVcmbte2kn5xmvKSJZznacNvTtVPaQNr4rfpMgmiu",
  "key7": "3CuTZRieQ4xGwVYXAcNLraiuTk5tPgYZNXbjWUDhGV8yYtZnJeyFwpYmV68XqRhHi5jLgwFVp24QY362e9sqpsWh",
  "key8": "3qvdpS56Q1kTy1zyHJkLE5eoqu3P67opec4vRbrYAZGnHBdSfS577teLGR6ici47fwsizVp93ab9qAHvvESCaqQL",
  "key9": "5mZNDBr77nVEhYuZC58T5AnESsTLLjAak4zX9hLQBznoz2Tz1zZDXCAM1VPPYPWbYmFbikLthQPXxYTzDryqbBod",
  "key10": "2YPMFndBnHVkXm58aDZxsgKrF8XSEmTcTXXGv4X7X9QMFjcNFDSGSpmpXEYwTuEa4yHa5tCQUyizL1R2PedYYEKb",
  "key11": "5bMLcG9iZUeo2FYuwibRpcdoctzGcYp8XTMRMedSnoVYBq5i61qxPYfYGYPEsrpHPxkybCqULMx1vUVApLTRx55S",
  "key12": "3Xh8H4bbwoLX6TdBtTgEeyr4opW6sHHdycLkvpQ3dVmFtLMWFciCVx8zd5CF67gXnrjGvBb4Rk51A4CMGRfcCM8s",
  "key13": "KyXcHWXBbcjpMafbSq3eeLdgF9vsMs2sgxD4o14t31oHvVEdksvgVWVMXt5cmkTUgbwFMN6ZApU2SPiK6Edfknb",
  "key14": "32wJAtxvFJUw2Q33UkYnBKeY1x5MPjcrxnjNfJWui58crvWCtBSgdAJaNSefKMkRik7ujeHxv13KnowcdHzoES8d",
  "key15": "26e5R1mx767q4RC1RGADNa9khDP5AeJcmRn2Gv1mSUHMQ5rRtMaFDLaeUjk7sUDWqBdSKGQD7dBV7JpLLPE8GDHj",
  "key16": "3tKz4TATKqrDmgSBzA1prWTXSp4cYpcyEQWkPUuBT9xK9Fi7agWNCycJJK7V9WPecEqDFpG88Rki6Xk9xKTL5g9n",
  "key17": "2PxmeGyB6BphBCdAC6uDcso35nxe8no9BGca6ijG9cxqxJcwXcwAzAzBfiVSqDw8KTxzqUyRbbDDvAa3NjnDWmGK",
  "key18": "5zBGjjY4EWFPSy6LG8b8VuWAj3G6zgZFJcvzGVw4aqyapPLAsBtNU4DLpSATFqfRDbAUT6AxfhoskDdwGepqwjFW",
  "key19": "3kpaPeyiUoyWj4pCm6SZFLbe4uLSwe52cNnoQghwYT4NPerTdmJJQAKM3sJDNGSEVvekK666A3fD3rNZGfjXRZBK",
  "key20": "3kFc593gADbCRDniqhgxKoiWMTpxPWFeaUepwLXtXFu69gmLRmTQJtwRK6CLZJF253HwZcnmz7VQTM2h2cBqrtXi",
  "key21": "t4DErNNBgzYeENVNNm1ifs7LbGY8LPPb5cQHb2kUxJnh5LhwJHY1CRqJWBCHXehA1V4nETxQ2QN2unNEsWyQnec",
  "key22": "2U8tFz4HvaAsXukKfmqDcatSuRprhcyJeEMavxh5WnJErs8muGkfPuoiJ6kYpJ9ZpybNvNQAYN4qP5pFAsUHYT82",
  "key23": "3keBWwvRPSWsfLpUVnAvGxsdzQ4xKJkgi1BRRezNKZbFufMVGLnEMXASemuckkzs3ajF94oy3dPowJwqSBWSYgJz",
  "key24": "ey8m33z4k8UEvQjs5i9CikL8ps4jytbHRZqu8kVERn3AtXmoV4zCM7riLtGSyFD8mzAKq5AQfgL8Bmnf2DhVec9",
  "key25": "59zDfhxL6AKQViNAi8EGQ2rDEQ5nCcKYiy9w3FNAwNDQPAHcrm8fT1BKLGqTwQMT7i7X5NtvroyCzkMLJdzNQDer",
  "key26": "3sWs953NEGnPJfePeriRbLg7QucaGwpDgCysFU6aENnCHxCkz4qowsSew6Gqj3vEY9KNrwkTgfQuPNAWytPtyaju",
  "key27": "UvNhwCJVhFBKsewEWSMFkaiamBfnGVE3dzdwMRuxQKVUJAT7mwuAkrGkypFpzpp2z5k7RHZiLE7MML4ZW6QoLmG",
  "key28": "479YVhrncrPLvz6qG1AXcPf41pLpmx55VwkxyWNWfPzKUK3bzrg8T8rXxU2n3fLBR9YFpfndge2YgKSTinKWYGpk",
  "key29": "QgtqpmcYDz9LRiC4F7sbt3qLTBfeJ94Wc9EFsGZRGEzS78WU85smV8vBNmqwadJbUiiT8f4dmhonCZVyrP4PeZE",
  "key30": "5q77iLm87VF8Eicf4fqcM2Nyj735tLQF4zLn4vNZ5dRz8EMTuWh9zesUH2Wgjxh32QHFCEqcs3QvNnKBo3Ye88an",
  "key31": "64Rh5dntVQDMtYS7VY2wCcFCkUdZabcuY4qNk9Cwho21uPEEUqeQwWn6DeHMi4rBRnBE8eJ7mM5rnJrndh5tj5uE",
  "key32": "bMYjREKZdehG4EfAAZMpsRZk3vyDYgaiH11kG2yLCRWKRTBjXDZFX5q283XrfbeXwtdz5xvS5wbt4J9CTbQxdyz",
  "key33": "526SXFGECPdarHiEDoP44mVx3rME3YjyVZVW4o56QDg42yLr53HbZWq7f5AS2QfadKViwrr1kYAq2ovoiZgCieFy",
  "key34": "4iEiRjrUGtnjALkg47aQQUxTRMBRgdznwsP2siLYb5Tu9nKE2jzvTq2nByPshqHw1KZLLHJLV73tjKjFvwjCQ8V2",
  "key35": "65J9oNRrSvJ7ZwwH1Y9v9KBSakXGU9sqvFpvNuxUGQodT4SdEDrty7WQKMUU8KNZ9kSVa76XoMvPgown98bX66UX",
  "key36": "31UbtVmYmJv4hY9P91K6rqzr5GNqgPZsPTfQdd3nXuEFCLYgdB3Lvw2QGg22P3fSGWEntSNhV8GRaExHVK82QrNd",
  "key37": "CbkvQAx59k8A1tNi64rd9BHpZyxerhYRABiTAzXXEfdSh3Q9iZY9PQKKnYQvNn7N6U4F3vKQ98wQQxuvj2zmi6g",
  "key38": "3QdHHAMnDtRbnn4Cr49nhiTjpfTELtZpXbUfFNFA1HWUYJjRmrwMgNNAveWtEEf4Tgm3NscWQEhCY85TRm97TPFK",
  "key39": "65tGbUhrow9zbARuS7oJQs4xrf3bD3FCoQzcgYMGJLLVvATULVWWvEYTqrc57fGY7bycUNxQwtf1Ukc7jxaER7m1",
  "key40": "2AAWUBzgQrYEFTWERCjH6VqUKczSobXDfSKSpFKQpGfnJ4avRpCwTcP2yXoJMxWTcP86iQfC3ruPTw1WXkyqg1ZB",
  "key41": "CFkSWFSXTULA9KtTCYgEPggRUhvn4qmZm6BAE3URgQto4cNR9KzwUEMGeyisj66RmRcynBWskH3DG4Lw1dhNFEL",
  "key42": "5qRyz8mVKzFusFAF2id4nJuGLo3Px3JNkydA3Uf8RHuJrQjQJeavmZFvGjQbwA3kFurUD2bq5WEaAEmq3XGNZkLw",
  "key43": "vHc9r3XdLKLeEJYtr1ZAZaFg41XMz1TgCn7LaKADitPf2Dk62hTDCq2v69zryDGidxrUus3j2NySGdeyUoY867r",
  "key44": "2eebTzu2PsZWzABkVYyGfiZcGniabCCRtLeKohVoXmLfAjwY3AxP9AyWc1gVzREssh27SNbbaKP3q7MfvrfaUbgT"
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
