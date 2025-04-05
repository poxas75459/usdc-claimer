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
    "vN6Z5cVGo4Y2SpY33MqtnYnhhGSPfcWdYBXr3bcAcxANawyQdMbwVJSUAnmZZjrp51ynhjXc6vEutNkrqJ9cvsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NiisMX38GU5UYyKGUC5cpcHPvAupDeKn2vGC4faHPxbAnV2od3JwqqDCnbX27E27SgG189Sh7jspzBzCSwqzWd9",
  "key1": "4UgpRnPuLZLftaDHe1VWXf3jrPZHBmApBqcDup8unUFiDzVP2ohqgswdJY4dhVWTcypVaFEHjNA5fYwBwF8tGeQB",
  "key2": "3dfSMgRYt2bb6gB5sL2HJemVAAB43yJfQCmgXttaPyUG1drNTGFzwGtsdzfgy4GNX18bvrTHFCnPPnRe6K62hP76",
  "key3": "4v77rigddmdGuCBwWRMjiVwzvvr7sF73vgWNfpuwRRVhMSwVTjzLDBTk2QQn9WPrRGP4RyskDbPBTr6W2fyr4SZ8",
  "key4": "3vVoCHXWzdeg5CfgvVgvAnsZMiSp1KaQ1nYiaLgPFBU22TXAzMQXuEp6byHTA9cnjpssHPvhGXR7F9e37CQZA19n",
  "key5": "52xgp4W6gXw7ZvxRk5vLhL4LZbMxWWvVaAfYY8PjC6BtkBzp75M36kEH8pgevFJsowcEMerbcyQBf77ym4Vm6iMb",
  "key6": "2QxhVPdmWnNTtKvvfBARR1H8FDYkGjN9KHhZ1vXG93DDStVsePfSamaqVHhBZUYkAcWPjjD32CyHow3GnSkjoxoW",
  "key7": "5rhB3Jnaxw43TbngX3gjLzm7arywt9WLik1YiMxjEM9rm47YEJeFCaMoSrmQqgfSfhVfZM569fGde45jHi8YgJdK",
  "key8": "wokSrbvsQny267dydBU9VBdaCyfK5iewGj9bAxcmDYqgCbZRqfiESW3WcPUCHDhwUCrLVtZNPF5dEDzcHLGhDKW",
  "key9": "Xh2YuPD51h7WFjGkAkBgnVvPCouhmH6SDKSZ4xEyJ3rjes5PheVC1orvtb6bRq2V9dhQsCDW2YZJUZqWn18kYJ6",
  "key10": "3ywnZvFLSsw5WMFHPewALJhMKUVXo339K9no9rNaRf29HsXdzkqXeQh1HzspQ7rVV9xQpuMGVgcxCrUfrz8ss2LF",
  "key11": "2Lmb1HNmuoHb6TscyxBKT188ypM7GQdFv65GxcvQ3BnJj53FuKDD6H33pnKofSaeX6hWngr4kZiD95z88Mf4LnkU",
  "key12": "5AFtUyQdwytGkUVA6UAjWAxmc9qUo75AYmH77JNefQmPkqYQnSvv6MZc8nCWuS8LWqdA1snq3EwiBEay66q1c8pF",
  "key13": "4KUycLBpLtRut6gqhX19dEafFoYcQKzxNNkx7Y2WJQYXwYsQ4RSSgHpYB9KSy5w8muXx4XNnJoMRx2gyoJE1erpZ",
  "key14": "3xQDiNGfUQ71ytDdfpgCrku3YzmcdAPaJWPY2mq71D3tuuz63t21cZuToQuZgA2w2unZcwHK3BWFsKrg7HK68Hgx",
  "key15": "31z1jVdzMy6uDB3xsPsPpDyDPXh1J3CzJVZmzQx14cgHfwEZWd3QF7aNccyweV4ydj1NnQ6S9P7YdtGW7CCtfZJg",
  "key16": "452d7MiqKxVsozC6Y51JLmCbPdfouhEmMG3AHyL8ykqfXX3FnSD6C4LVsjfJ1GXo1Tc8D6pY4Psiho437469VFCu",
  "key17": "2gxjFY4iFbFT3oCkuZcNddjnPDKqqYm1QmHYp7MShzQi2gXZJswLEoDvkNJBZhqVTGWiSnYJfgTtVAAXDJYMr1oN",
  "key18": "3fCv5mf3i6n4XYNv54Xs7kjeRgKKxJm2hdyX4QjzLnxHApx6t4TfFYiRNqSjTKHPyknemLLjBog7WFEU1gK6nCZF",
  "key19": "3KarN3Z8b1ZcyRiQTr9uCRdic36yb7jQyZfgcXXpxDd7DDZ48cAbSaaPAQ9Fu2MC8FBNytCtLACrioJmGDHVx3pZ",
  "key20": "3TLfHgdrtUkHzaJjkcjG5CSHGkCoGUTHNHjqZaVzJToTxNebXrgWsnVcyQJKfUyucyyZbrgSWsATpbZfrHU1rhiR",
  "key21": "3yX76opAKpi666rBceZFxUDTeG16b5wpwHNxTmZJ1UJADRy7EBaJGq7qokbxtqFnuzMFwHy1yrmCi1fCcyeKzUqZ",
  "key22": "4K1DVrJtNqyUeVkBYV2pVT3FtuMNfzsQXYpmgKVWpMxNr4zrW8oRBaEBs7FJFQLdxaSngA9Q2S62gaqYda52oPXR",
  "key23": "5g1cqHf36rjwDm7Z2Wg9CYgCpCiPHNn6RaoqCee39HWe4knGezd6KdQFLZ3GxFs8jdn8ijz4KSUAwhLyQrbccEXQ",
  "key24": "3PvibXMNFkYrCbyskvLEFvfaxXdUdrqR7BknNqUPL9AkxA6rWH3ESLMWkBANVUVNysWJgzKjF4KPfy5kuYStwmLD",
  "key25": "26zTK26pLbYu3iXeDGUdY6K3xQpdeAPibtB391Lh4s8QDo694b62cSw2fiPGnydNhDuA97DobspFL5bsEcEotWLW",
  "key26": "4YtiiWFRc4DieVxWgaACkkqUNXgu9SKMNBVXDzBjXMwofeSe2cVqqBHW2wYpt1UrbZafZ1VAvYqnyuCcZKDkcCVF",
  "key27": "x98GqMRNe14JJK3JeSrfyAzsom3Zoj8kkSYhXNqumk6VsD7zg6G7754kd3M2Tckpwunz61uEvpAr2vBEwNxpZPH",
  "key28": "3n33XBaJJW6Ah1dELoYWxPMHSAGWdEhpwK8ZFYFiuiSE5bku5xGjWCRcdRmyZkxtotqZ3triteUxV99qsvHL7dhd",
  "key29": "5zCXg8crSueFHpYMq89i1BicLQvrZK4UihV8aFTkzzrZ6m6pHKtkeUPrVEeF1vo1EW17YjuJbNvFH8DUpWWSx1F8",
  "key30": "55acEs1urHRBqo8xyUrYmYHgd75PL3X9YBBAsYwbBQuuHHXREoRoHKDyvLFYdD71wFztowUKqtQVVt3TyhNfKxct",
  "key31": "4z6hE3UJrw5PJ99oSVM1Fc3RkN6J4px75Wwh7LmHRx4uXtSXkf7tziP3Qj5odJpycRA8ZPK9CGTXZUGnETjBfA1K",
  "key32": "2bqHbXqst3eRjso5iDKnHKVH7LwEq5naSpDetz9pgXEDaXUB6DdSKaGBf3GC2ZUqgoQpSjeXc5H5XNG6QAZq3emG",
  "key33": "cpujwfPYSCspFEAS14sLBRMbJY6R2MvuzNouHq5kirtfggzvnpNjzhEyTM9wD13fqaMmanvCSkjT2DqiZCqWFtt",
  "key34": "2UZjpQ2K5GJej8cVBYYU6L3tBBG2gWYDmRhpWA1BHApeCQ4cnr6c1DyVzTMZ9KZqSzmCYG7Neb3hgvHR1nGN1jMN",
  "key35": "2sq3N23kNk8wuT69w5MMTgH2dvEzq3xXXVEhGK3JNRq9nrHbNxDh49UnRLFk1xFQnvA24QwdPfbBZvrGTDX3QsXV",
  "key36": "5M5X1Rkn7J7fR6WLaRZsKmGnQke7ZpXAg8rqFA1beNqM77rDDcBWAjmikicX1agUnXB215aQuAQ3TmvtzTf9Nfyr",
  "key37": "4Sxgh9VXUKrsfhqoZyYLEL7sU27bCixSpgQagcQz5X8AN7kRmy8S8RTN4kQkDpR3zPY6MdaPkM768VstQ4CqaBxP",
  "key38": "4tfRDgjQepJzouJQinda3FevHpGUfAjizLRgjpCchs7zHypmw5iPgHtJDVNxTFzyJo9hAfm2ZKtCqaqEhWpTPmqr",
  "key39": "21Kdarva1mc3x28GfRAuffFjfXd8Cax1zh1KFUWc6D5DsCQAWgqZwiBqvXBXTGvKpdf7oaRjxrewTg1gWmD213Bc"
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
