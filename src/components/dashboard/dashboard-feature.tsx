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
    "3EMH8G6WUdYPoA8bumZJu7PGD8JgJMgLQFrGij6U3hdk2GzCF1DyTidVYsqRF9BbjCQQSqt2abZdJiAFzfVF6ru8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3okkRNkrKeKfkfvAFP4p52eD2d58ebXbkxtJFNJJWoY7mdydT4tPf6B9JiZDB5PofsatBRJ6oAUbzCvx3hjDPdfA",
  "key1": "3Hw1fA1iJF8jHeTuTMMj5WBvRkAntK2et3nyNyChk2zWwWsqNaqo1iC9HKHEPBKrF68CR58pAke5848dhNao86Me",
  "key2": "4vvdWfDkJDHRA8ScMiXt2x75KYNYb3UacREDcVAJhrVpGmxwnYUNdKYqK6W1fVyfH2aJeecDiCJfSoWwRxps2gZ6",
  "key3": "2Vy5AXUNM5zP7tMQBvq2PzVabNE3JdkTkyLrpFyLKH6ABm3kyM5UHUbEFLfaULkzzwA29nivRszUKJgZ5KxvucAo",
  "key4": "59Sp5LdcGo5wHdWjB49uEjZzSkwKYFdiRqrdRQ7pMkduYMqFiEhWcnSbWt75xrKQbessuL2kLpc9U8TCC5CLADgT",
  "key5": "qo1VyYUUdUdNj6MPGrXBaDtQP7dBEiENVHkLaKqEF1KWxuXmZsbLQj2MkjcHeHZg1vZvLKMcfEfTBkY9HgsSngK",
  "key6": "28sENoAZKpJBEn31NUaQyGX2ctmGpcM7EDMwtsn7g6wEbXuvhSdhRoceUe96du4RjnsHKSSdvJcjVRiuEdDufJAu",
  "key7": "okb5eNPRenfpb69c2KMH4zebMwopiXnu7MrMbJ3agMhzinExjmLRn4MGS8fFeA1CxpLLL7sbRfyP7veSKUUPqKn",
  "key8": "5Jr3KfZrsaM4hUkSMWh67Ay7BNSySfod7psxuiZ4CbosGXh3i9M2ykgyCRC2othQLEJ8Xf8kVKU3aXFTZtcQEaMD",
  "key9": "4YENaXxGfFYNAksrzBgskPVXs3Pj7JYsYvssaFqKGsXzi4qwD9ycXckiJ4qDYrmWiKWViLsNasjVPH6VnoD5Kk3C",
  "key10": "2QQTFohsTTxKhKuDq45drLdVY7LFrHrMo4vF9orgjPxDkkdZx5kbasa9Ru38Hy6GoAwZeXADfHqJYLepAx6juynN",
  "key11": "5Xudo1FrAT5jAFxWYpdnb62BtBpop441nJPRMJUPm2chivhrejfQJiTAo7Eowfp8hC11wFguxiT1PtjZJedW476u",
  "key12": "2vLNrtmxdUPb8ivofGj7tLdqsAbSQQG4tmFcEE96f5EJnWBYB27af1RiVdHs1aisgoMpJySCL7rB3jdV3vDpet62",
  "key13": "4Ts32WswW1fZzTvJ3FKc6t9BpXvBTgKGmNuYRCYMwHeb7cnei1Ju7Uk1uGvuYd4xrLkxADiZLtE9jw8bhMnPMphE",
  "key14": "4mGUV8WicTTPRdyDcGPirzfqVPwjg8CWuK1vziQTFT1Xh9eMSeMAqmi79toZzm5v31qjQkZuPdhLuucASFg1mss1",
  "key15": "38xusg8HjAGa63WsUbyNMCQ6TTJsfEZTJygQt7M1e3ndwR6aSw32g6wUrf3Z7FeT1riGsabeicaBwb26RwQVsk57",
  "key16": "domYfNU4j5jVug8Foq57TAubqNrJAkKRmaGanqsq4bSjY6hEh43qxWRQErdMQtx2gFwniEvP4z6CtcXELC8WbJ4",
  "key17": "3RXRYnQ7MfteBCUU6M6rhcjy3ib35PgDF1tZ7dACXriHkG4rYvbueTnvK1pXUhwoZ6eMbvwN7QvBubDFGGvV9Zzs",
  "key18": "4L5L7kcfvU1gUCnYs4mnJNrxZSbUrrRjC6kz6qxMj5sRkj932MtWgRUybwr5m2J68aqxV4UtkDUMo19XnV5cMKfj",
  "key19": "fqmjXCiu73i3r1ZwbW9eZeJfzUSaxLeFo8ChXGV8ULEzKcsUhi2ZpcmrckyNRoUoAzejujDoMadATjDur23A7VJ",
  "key20": "5HMTS4Ds32wjRp3D81mJeY1GyHpanYLam6wKPGcGdtz259v4w7oACUJuc549UQu6KP9HeFgSYt7vJakfaxsdbtx3",
  "key21": "5qwDCuNxCAnR8cwYDNYUZJzfch2svneKWXHgDbGcQK4dAitfFfXPstXojtYMtMP1TS7Nbr7BZvnaXMz5HThS7s1Y",
  "key22": "27ri6fQQaXRL6t4rRouZ7GTSVgyJHGXzL9U5N11AtGqBN71xeypZeCz3iC5trCxekXoGV5NQGB8oZYKA7VnnjDVn",
  "key23": "4hy9xnqxgRuwSLGYr47vusCpTnU7RHe2miXH2WjYCAsuALUcxbyojF9188sjpJvLbtLRdgfpnsLWpgLospuEVBuD",
  "key24": "3nLYrQsyg4ThgfDbKQEza7qwMSE55vEGK3GSiGjcvWEfrqekRe47VTd24WMzZbamZPaWabtxG9ndX8usLJwaDBGR",
  "key25": "3WGwVGdoXkbgzushZEdoLStPZafEvAJergaESNstzciq2gmq5VnGf7zf6H63LTAzoEPtkMNp3eZk66ZUXV6BYCWb",
  "key26": "cMphnEVL5sz4fJnCYe7yqs8biU5EywEKNJiiNYDaKqFM55zwZgeuau1LX2exF2stFNmYz2zhQb3uNUFpc1Up6j2",
  "key27": "YNVEQh599XDotbg98Eo7Ubt3cNtAQMwra3JySwftc6fnDgcUY6n53e5e3HxgyjQ9ooyUxRGmGsBMvaj1A7XJzLn",
  "key28": "3yurKVdLdNWbJwqSwSoeBSay96mXmFpbWxht9fjeTiA5rzBv935wYCrB86mw5D5x3PhVh1WaiB5AhPezzzrTnoEf",
  "key29": "3Rs7y7tErPb71TPHZA4tQNURgaxGUhd2rZ6r13EzGVNRLoJktiKqb1aoQx7qweQZ1Hyy5nWyhbuTpko3jxAEPfa5"
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
