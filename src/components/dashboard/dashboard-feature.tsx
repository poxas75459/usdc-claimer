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
    "qhMhv1sjRmP5oZTgXnGRbDoxVimXzhz1E1qeidDvrpTujmQgKApDLiDkmde16C2mWQjRRNYxK9X9XhdrPywL2ij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "immEstStgR8CPGRFYnR7AHzmBYcVoFUX4TQGqRwquu5THhyQMqN9whw12tKQtfqnPWvR7magcAWxNnTFCAp1eyy",
  "key1": "d8dN8MQhHzxLxWUesRzwGaiP969FcBz7NL1Xhs6RuKvPmcUt3c5LGWVHwubXunEQMo86amQEaKxmBL9Qin2w6Mg",
  "key2": "2Xy8kF2sYXsqHEzRyzKYMxqjnb83gNNmL1qTSdiHaWFSAaUEScCKid9imcHPpdiWy66inM5kykD5TxT3E2k5D4j5",
  "key3": "8rKkCURCGVuFgGiEUfQ26XTsbQ8sjGNamh3UqsvFwXkAW5obsYmsjUzL6EJdJN4s57YYBP1TK88y8iQHeS3Go2w",
  "key4": "5n5TqmcZ65HV7EeKqBGfSPUZdX9EeDxmH7KL8ps2Ao7fsE4KVsSdgk7X6gaqsPmzwAXW6ap8H2eF4vauTfkw3Gbd",
  "key5": "2ECYqmjfDgrr1urSuSxZaYDRftw2EzBEEWcU8CGzPMpVokwT5xxLgwrHbjkvaddhinTGbr49rpXPgoo3ATEn8eXo",
  "key6": "5LeZuKb2AcourY3w3eMLH5UEkbyGME8SW2HnfiwYk2exmAqDBCavhcdPwAYGGYipyoEPqXQ1XAzv7W4HophNnkLf",
  "key7": "5RHQLgCZR79TxCMeeinE5xDScnpsvAzTMNUVgcNHb48hpStNuNSHSwYZ7sS9Wn6T1PcRCYJTnabAzaMY7QwwL76V",
  "key8": "4LCF5HQQoqJxwp3mxo9WgpyWaA4SUXnY7bewUhnfAtQ6tUY9Rfsxz9WPs7nfk2v9yzJH6d7USG8eFdedSRhaqAh1",
  "key9": "2oq1y11CrpdWLM6nr75KuikzqKmawhtLoC1GbZLb9v2AeWyVNRcG3H7EWDjFRRbGBLamVNCsWeRmREbz3kvgiJBN",
  "key10": "3ir1nDCHd8L3SCsniv4zybu7pz8Lik484zPvQhg9E7jcbxRsisZpjQwu84comLvki35F4ZnroSxmoUhPtusQNETm",
  "key11": "3PiL4WhCZp496QZgfoSH6NgFo4RykzJe53Z89YWk7s1hrw6G9Eg3GuwB3JqcYkZxFXhGVT7n2XetCn9DZVi9exm9",
  "key12": "xPzYetnPnMcigeiPKn1EPEiiEXURzGw4JQ7Rk3aCUVDA9VrbQK1DHFeVGvDyuzSDQGjsfwRMnypzXK3gwRBrehS",
  "key13": "5Pa6UornjrL7cEJPMwZ5AUDubb13ypTt1sft99x31f1ZGJYopSJXTHoE4rLQTYaAAppZqUsyKwnS9guYbuyTosqH",
  "key14": "36gUAcdYxqxAbQu8kQYsPoh1Ldxr4dh6wzzB2QzGtW2UdoDs1faEyLsKh36forQ7WdewTiURRUwhdtT6xnL4f8ZV",
  "key15": "3fAwRMK8RsqHEM9DcQJRYysvfQ48SWtC3BUrLbEwZpwQKzaGMFnxcNhVEc6XBN1SoLQ7XtDrYfWJFou8LxHXQDuV",
  "key16": "2taDFPRHHdEf8JGmuSpKQUbAtESrzLtQJ7qowVrkVkpdDse5DGnXtt84XduJPojwAXFvBbqupdNPLfmUxWXG3cpT",
  "key17": "558s6x3FQfhi8cL1PZG8zp9pNSAke5jagEyCU3eAAySDRu4upux6FP3F6oTzJauvD5Z4GF37nP5s8ZbQaDk3wN25",
  "key18": "3q8W9Rjqoerxg5z6TZ9X3foBCeCKYxvSRqL9o9WfZvAYAQSytZUWNxgAu8rPu4ffWCoipQe76B6GmYLePwX4VMav",
  "key19": "3VgNaUaMmvsHWMHEZSmZZFrJ1EArvM1WGGpx7XU1qb8TuswUdx8RQeQM7x5APCErVWR3Z2s9Ju3yMbXeVuiBKXV5",
  "key20": "4reJGNy27CDBanCkFw5wHo9SXcxXoZmPZokGQ8xBRRUKWxNF1QAw37fWVn6SDz7XhV1EKcTbJDX6Vmr61PVykc7",
  "key21": "GsDHpfn3MLmBYuzRQSsQVi9TQ77gqvS5BcCCCZBXPCWoBkiiEdgWT7X5nLxgmzFxYCWVxPp1rd6CULfeE16YDAS",
  "key22": "APbXEftEcAhbpY26yCnw3cg8fJiojGYsBrRHmD8Y13yTwgpPEB6tSki6R3bgGea9YvLVYMq4WicZyBG33QB9Qng",
  "key23": "2XubiqVgLo5UJt96e2htDCZVU6ujhDypj6sfWSiGzbb9Te4NrNBAS3fyT49ozSzNr4jWQX6GUpFUUrhmb6VFU3SJ",
  "key24": "3CqDF2xnQBbcb7S7w74by4S4cyV5ShMK9EaKAzrrGWq3bq4dJBYTRZrLYSVXQGE91UmKnzDvkpGejdFgpNTJKcm2",
  "key25": "4ntMtKTPFNbHuKUMmwL9PGm5Q2HXWKp69dx7rN4boRPJPadaJpY7Wk7eHSpKsT3Gu3HXnZrCMU4kqcpQ2PJpGfRy",
  "key26": "2McPEuTV7UGR7LMqo624Uub3cbezdwczi2imPNUHfYnF7hGoYSmXVTuRqm6MYPj1hiVC92u7S6QDF3EKtoVBEXQG",
  "key27": "4yvp2bz9fdgQZ4E2dxrYQFHmj3YYhuYHtbTJtcfRsNX42f6N1oPo2vveiBnRWRpozrZWXXh2jKFkUwo9Pq44fe5k",
  "key28": "CE5vVXzPDpaqFAPQVCveQZDRdYbRxgjPTfsqHZkCkgr5gpqNnmbKG2Si3YYCCdyUFSHuTybGaZnFQ8VrjwCEjiC",
  "key29": "44N9d6K8xcWbhdoeQANyWo45jLeGYbhqiLoiRGj5CDFovfk3fQ88RLJJugxB72Y7cL9YLpyhFKUMXKH8YRW8RJvf",
  "key30": "5DY6fBpyJifcodQ7W84L2dQ4a5ruLDgiiAHeY8nwAy2xAjyC56YrE6fVYeApBX9ULFwHQnNyTDYwgnxjBs9coaCC",
  "key31": "gAL7FH9WFvY9uQaCqVFfymevFc4F2Khfm23qyx6oU1qEzP8EEVEa9t6vv4jRv6XKnpzgCUhTG9hZdbZ7QFaw7sA",
  "key32": "3sZRcg2pKy4GHbLehYv1Bn3ZWfMyzU2GDFmYHDNZ9gUWNdKjJj7W3vwLa3aN9mWipZkPuhWxBRxbfSq3313TYQwc",
  "key33": "4GCYXMSupV64Cavta6kbKHQDwqpL8pUpsFrCRJXSCvU12LVpGv6bYS5KN682UWdCwPNLMhd3bsDbCN3CpjwuPLiM",
  "key34": "iKUdEngTK6SVFbk1n8hK7dXFbdnGaCS9yQs5YodP7FqBUsyt6c3nuNoKZitqC6AKB28Mn6oRxKQ3sDfsZvbXV5t",
  "key35": "25mRpajZKtFrcWxS5B9yhR1tn3K2824LDZg1wj8Sfo85DHFXDz32dfboSo3h372iszbQ4H3AUL57aZembcffauER",
  "key36": "QkBM5p18aMFnNV48TE3pyLnMwj1nh3V5SeKczNQrVcS1DvwBaw5oUAKxDMNXqjL5uwmCGrMCjduQNKnDtqETaza",
  "key37": "2ZSNnSV8jiPR6nYDgXJ1trhL7wkcidKshzqLMNDbaHMdLdBRNTvasdKKFzfTX6p2coDHUALcR3FVAtzc6oX8uYLh",
  "key38": "3szY5AEb81AJPeCUw58YeL1nMfsQSW4UooWkJjWyjJHn154tjNWLJKMqvLJoNN3UBDzaN5qQEvot1nv1ezr6z2tQ",
  "key39": "2tcrVGsxj6VDuRxpq6tuVCEieVggP9zfTQdVVzEvK7Bfn9K94bnTLh5GCgsDn7Gjm8ADUR7i3vG9HJiRESz9Bw8o",
  "key40": "2g4KwEta6CWxSxo5LTM2YMFEqbDbWZZj62JG6XieQDZsZTKTqrH9aVSYUWHe5SLAq2e6Yff2jUYzSAd2eukJMp9j",
  "key41": "rfRMen4u8uyuT8KyJdZ7a9bamYa27VtM5BnpujsJK6JQno1RqqNz1prYE2VdDiwxugRHaYCD7BJ4S9ak85riVsC",
  "key42": "25fRXTXB9Tz2V2yYz9viTpKTRZui8N6smK5FMo1m1LhADnJp4ku39o8Dd6YexfwWRDjTokrRaqZcFavKFaMFjyFj",
  "key43": "2qP5g3k5Aw3rPNDJXnfPkLB6643Uiddk88dxtCpz5KXSA2kPFuXPihJJYWchfQtByXhWyDXTYHtfJyr3qSCcs9K"
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
