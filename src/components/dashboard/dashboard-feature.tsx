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
    "4VGNBSBvzzTgc4KJ7V6wTTdHG5hRqEqPo4kQSKKU4uZAvARhzTScERSb5Rd5VjVDy1onSSzDB4MTdg9Ay9p8SsCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8FUgfMLgwHiB5AjUzwzUyisgegtjFGNe4A43wP2BNkZ3mvqoa3dtTjNsFEMnud5ugMref3yGyvZjjW73zpEtAzv",
  "key1": "3bnx1T29WpQj6ZvzGMqUQ82fWSiQoxratVv572u86Lc6pFQ7f86VmamNQmaX8M4Q8nvPaSDLnSeorMi3FxEsKKWw",
  "key2": "5DSrDvj3zLA9KN58D6cHzDRumzdF3tYz14imjHFDHMqEusjEN71MiZEbQSEQiHkFFDsPRrtHFQoab88JuQpuNvNK",
  "key3": "4ctYfc1Dnn65SeWmqSAyYUJTbQaUqPeVVe5TW8MCpdvzXkdR7BqbHBaidAteDvv6by8ugFPEchnUh2wfSSonaqhq",
  "key4": "EdWN41GRYvVjDe12kZzWR2ZCX3j7HapbosfrqXCoQ7pHPXwABW6gKrMUaNBFHNooZXZZcXUwVGEqF8CUuCTkUyK",
  "key5": "36b6VXEYcJN2r938PyxvKz1h6JSpWcmEVmqLtruAGZdL7frtpEsvU3PABEj115vrxHaoo2W3QVcZpptxUCqw7CHs",
  "key6": "4deNcFRb5yNMbecpY5DhqFUYgGJXonWRmnDuxSmjv9PxHz8wVQEimpk4jPhXVH1gefDV9tSWczGc9gyc1Hd7Z1HV",
  "key7": "2LwbM9xB2yGPiDQzNZRNnuiHKsXXjG1MihBcDteYeQZjyHtdWMNzpjWnMcCzABbTmugKSsMjdkozYY4YDC4D2o5u",
  "key8": "3hMZ1ZYA4m9q1jjyLYCJp5Uz2EkfVYJXnPAuBKwEn9dTW8SkcUigG2MmxmdtDg6QnEaxjvWjY2gQMgZ2zoQ1APm6",
  "key9": "2NoFHoSkgjp1idtA2JVvKWcU6xeNj8uXQMe9bYyTyuAa2VEhdYq8appgpWZgdWxFwzP9V1CfBEe3QBPRBWGdna61",
  "key10": "5AcPWriVG28sXLzqduENCF9VAuoGUdL7RZ3p7Txmjvvkm6FVFh4w4FZD7gBUfee9amZ4ubdwkPr5qLq2REo51CaR",
  "key11": "ksuRtZw7xauMG9f82uepJ1PLiRDa2GW8Bm6peTmpYPwm28BF3aa5AcH59328xxxqZPLteqqu7WkjE3Lx7Fw2N2j",
  "key12": "2xaMjFpTUmZMyBWkn1ymhuWezgMVLTujyYv7Q2GH4n4TY6nUyX59D27n4FKLwrQfPfPbkVySg6dzxWiwPDtaczHH",
  "key13": "3WpEPJff1J6Sb6dHwVckUKXBz4koe1XDFRCxwSXvcSW3JyNHfFgox32SmsuCudbqhudaCx5bGQUf84gsfQQTKBrj",
  "key14": "3syUF9qYiPWLt5iSPycVQbijhCWoRvaxZrv4xRkTWrbQXmvAXx8gYpmc2EVnG2LoGQsuhfc1v2a3qUZeC6quaiiZ",
  "key15": "3RZSibb2Edbk4bQx9wDJZxx5cQQ8u1DsmR5jLDd95kV936U54rF14n7fQiMbcteJmigfaZEP7k85xMeDEoUvifEm",
  "key16": "4nt3F4HpBw9yYtFTM6AdzNDNQBNPqXesNh1PyN6gQ8hWFNrM6eHdGTstMkQ1dbVxNtjc8wCk2tVzVKo2sWpyU79Y",
  "key17": "5tfWpvQ7dSPqotwrEU647Qk5rcNpm4H7RkubeYnnuSbR3LcXM6g2QbvsSyeDtKjgghvo8rQPrH3w3W7KVainJ3Jk",
  "key18": "4YSQxe5To8y46Fh1dTcxTrzdkSoxDfLQiRDGSpdDgQycKX9GVZ9t66KpPzwYGzfyQ3cPQPpHXfthYJStqbz8SWHz",
  "key19": "4auGevVgV2Sb6iSkcTWCEn8e7QegwhyvP4wMzz6bPtwgkYHWUKbPeRiNzcQmGhPP3SMfx2yc9UN5acvYfBf5Df8M",
  "key20": "anwLbFEsrGM8ZaUqtGWQtiYcmdRXEY3rc8Am6RJV7ojWFZvE618pNQYSUTfAqx5gVjmBNtrUJ4EH6XjnQgbwZwc",
  "key21": "9f9HuBHPqxgy8HUskwVqTYssKYYQRxvEZXw4oNuDPdEeXrZaLZe9NbCNKQ9KGfF6u1iPw4JH98wYXtSuZtpurhC",
  "key22": "BKkE4fKe9n6Ao6vqtu89TifuP6NHYRHANcqtZo3Bw9mxeS8UXSiNRud1QA2BPDe1k1T7rG4UUqJedxGNdhB2RxM",
  "key23": "3csuudVLUUZmb4VaNL7D3yq4x3jycisb9sCUsGVbit299jXYC6kEnTctYq7Y2yb3RrVfVxGQM7iGwtwQ6S8Tjjuu",
  "key24": "2RtDE41UxRRSXfuiAwEXH36Yd4ewT2fQXrWjPtwSAMB77CycBEzhmihwKzmVQCT7DSGyBaznkG4BxXQV841NpWVm",
  "key25": "3u57Z3C4y6fTFAwdNBPLc8MLqwfpTP5h59x4N3daEtWGmwN3bn9ErZpnGziqVxUq936hxWtAAgLyGscxPMLa1Hnw",
  "key26": "NEfJHifZF1iZfowUwJZFfJJ9jcx3PDPUTTmVtmBq3sSAvZzwFFvvUgvmA1vTXwKqUeVxA9PEUcEwCUhve3AqJ74",
  "key27": "5N6ETQDikoS5MsK98aXmQwFhjh6XQekqh3HUeFxfACnnb9iuLaxB6BLBqbxYz9jeqGhs4YRJQiajvczPWpWcVHRG",
  "key28": "2761nUs1Gapn1vwPYVJ3oxyASCN4CNv3M7V4iDCzmLGSafwFq6kVZfvkAcu82a1kmxDEDt5FCbfxH9oPsaKgzgaB",
  "key29": "3NLzxyvDnBL2U7Bbvm3CHwj6qWJyTqcDnMTKePhzU5685X4MdXZazrsHpUFWZtFnqHeuEfcARMF9og2wvPUyPRV5",
  "key30": "2WoaHWkkQoyVfnQ7mJzMVw1v5HYFk5jFoRyWjzA6sTb3QACVv6p89cZToMY3rDqCARxDfL93EpWX2fDuqbfy8Z7",
  "key31": "3mzNZHrDPSVtGdmFQo2A4hrV77XNeT5X96qDdofVsMZqpjgLUovdCddt661YGp6uK1k3jaXSWGcKbmptS7CGbbEX",
  "key32": "5qeLd1ccoK9hqYsdjLBgrjNcTQLT4bDqvsaTTA4Rg8B3JNiBJgBZqgUUEh6ZvUqpgpx3EBwcXX41Y2iLDtiVYPpf",
  "key33": "4WXzJUVjzywx4trMfLYG6oYbao7s74fTcdFVAgkWVsjHw59tSiqc5CmAXrtaScDFdyeynqFLqAG9A47UmD7i6Mjc",
  "key34": "42jPL8VAdccBfkKcEjP5gAgYA9Sj3eC3j14bhtvcT9U9wg5YceBQoGzeBMcGkZ4xm7uB4XMxJGM7mdoFCPMjAYyT",
  "key35": "646hfPh7uPUaHpFYRQYSbZW7qMWjdEb2VobQxAQaYCRK5ukbjMG2pUwxiLfxxy4MDyVTv7qEEQjbCXyHcrhTeS88",
  "key36": "4oHeghcEmrbYsRaSJgwHo9SHgz1mirQTsHML84kNL17SbojdwJc9PJSwAz7DJmbZbpHpDxjhtAHL8rDMLcsHaZpW",
  "key37": "4K9b99WoC2mF1TNZKWziGArVrJAs2tvEishP8y65DA4UY9YUrc5DqCwzmBtQe3W6rKxVjY3X7itNEGp6X3Hptqby",
  "key38": "n7xucpYmtWXubgVnmYcxhg5xPMirEcSJNQLtQfLMUSUTWD1YNyUDjDDqSeq4ox3FsDULhSG1XbscLBPJH1KYMVQ",
  "key39": "2oNrwKaSPcevyppqUDNmWWf7KCwUecp6yjq6Vc1dj8gxCJasWkzSpKnbimRoLQAtWQbSkgBLBrH3QjnKS43BPaio",
  "key40": "5PqDSnxq869ZoprVyhkW7fEEungfng9jrXqN5iyCo9qkcyyP2999pgTX2NdPpC85Bc37RVGeCCQUcZR5hmKWGFak",
  "key41": "2DPCa98WVsqWm4gQV3qob6SN2BQjRYgrAu1nAihbYFTG8DqayDQir7Sp6JoXYAZjq54xuyhxQ2QLPJKts1nARzbT",
  "key42": "3S2BzJQshWKGdsvWhQtTKQfDunVU3xzhTtF87miZMwcpPmJ1Znk24BirmmGVqfGGtY1TyLZWCnmHBiPTDcqYLnPG",
  "key43": "4a5rSRfT8fx7JTTwj7Jg9Ad7iKk5DGhvHi2Rh1Hmt4zCLHBWW6nesSPzRKzUNyN53TG1Z6g2PNjLp47a87J7dMXj",
  "key44": "2JoyN6QZPQVgv5f5NbBegdQAv77KFLzjKJEhnADABzcV3gUjkU9Ye8W8irGMcUHNwWVV21AUJiVnStG7tVgjHVst",
  "key45": "6EfE67NRaVP3oSM2rNPBtNmMMJnuZGJr729eYNwhaNj9JocACvTtuV3frBtvvBAQZaSWe4CHvEshN5gn2iFJ7YB",
  "key46": "2yS373qDFBkfNsgwThEeamwk6zv4jrxWii9ymV91z8EJ4SCjv6tkVm9Q6D8yut1an5W6NwLcrR3SqgAr6JtKtqqn",
  "key47": "mXbxRGn9p1aSspdVUvrquvRtykHWdbHaMYgyBQ58krkgt4PxLgnYBBUqSeoLYi2LTYvqFfXyPfLVCfzoTRYLFmC"
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
