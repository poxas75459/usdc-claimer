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
    "4pyF6bKjvcrLFuTpgYnkNpeL3gYKyWPcwCVjf3nCxAKLypnBLcX1KNVYWJA28Ec4wo4dg2CfBPuVqSf8Uabxzm4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oqDk9kaaZeEAqmBXV1nEuhVbHJMeTumLwVHeqT8qEzaSrnsZHPaw3yUAwzHPRVcdTB3iijAybCk2epLqDRNgS48",
  "key1": "4RTQe9EHKNfQDmiSXrYePPQieJjqsgBb9jMGwiYnSnc2UmbUN5M86SDWRSMttvD4j8G8vDwavSzBdYt4CUKUwZBD",
  "key2": "67ed7jW3GVJS5V5HJs6sR1c9ef8heotVX7uCCb9C93Ki6TUhH1DwtcA1CTnT1s2uJXVDvHLj64GeRCNZpt4Rktum",
  "key3": "zqETPe9nKrrzzpdGzbAPSWRuQq3rsGyz82weLYnKxA7NsFpx2eUyzqsjig8WkrqarixZHjA7kx1cGDA6cC9Rx6z",
  "key4": "25U44X2zEcmob5n7EzRvGrsuDFWJdBK9dLjjS84FBLgrHou4S8nrMKZiABmTk4Aa2vRzZdGDnQ8DUugA61KNg975",
  "key5": "5dwxgQSyv8CdWgECrV5eqY4cfZfVkFtBQz7AgvHxDWSiMwwH3B6qvZqbSFzbzgGHBfeS8S5FMF4meYBfZZgnSJev",
  "key6": "5t5JQKdVNptcJPH1i1yZfrZSgYvBK2KNgXeqGjQTCWAvD2wBkaq1ZwZD3oVYGS9H2iavCv3STneYCqusGwYR9LvZ",
  "key7": "FvTATXsjWKdws4Gzxn9HDT31dpW2GBUMnPaTsquEuZ4MH1P7XNWeoi1Gzu2ThMznNCEKEcqba8v9Y6NPP9k43WC",
  "key8": "yuUa8Jf6FC2Zzi4hPWQ9SsDus9SX31wBAoyZ6VzJUQ5hdzQV26fZPevybp5gQWx1DiVM2ux1z4n5NEjUy5E5RuL",
  "key9": "58v4t5RRQkqn5hu8z73KajKFWh5x5FCBgV5ZjL2mPsMeLn1bhoDAdik9kdUirouhWMXQSZ5r9c4WyLWz5f5HE1R2",
  "key10": "3E7bPUPU87iDhyZSYopc3Bwhv7SvGJ5DpZC6kmt2rLQJuAu2kyWhfjo8vEZxnGovEzJXLAhAQQYdvYvpGyi2raEL",
  "key11": "MPnvxFh8a3SMkwW3dXQSh1CCpAAsmfXQkEjM8aS6YLYYAec4R31sWRz498znJJiQPX1uHq92THr4PHNeuc1mnfr",
  "key12": "5gtES5g7ju4moXw9Qfh1HXPjx1s1pykYccMMozfZaTuA3BvjLL3XMMUMnugAb85MpChkH6MpLhAqVH3TJgC2eXKG",
  "key13": "5tahHo9h5VqWBxXYSRMMuJXnvc7PfS65HQCH46DY2zDFCnPkUBrt1gGe8bnV7TMZSdVXsB7ov1swvuY8x5PSohge",
  "key14": "54K3Dwo4A7Py4pSJMwtzxKFHizxM2Foz3iGgiEzUrbhfgKjk5ubPHeAqGXWRYEpkzMdBgDunBWFJuJgw9ktK3RQs",
  "key15": "3j9huChHdnAx4SQ6Zxeq2ULMtRkXvfWmitDmo4bAepVgnbPLdox6Mog1PVS1rpJCjqdpyhxyqzAaVvH1P9VbdHL1",
  "key16": "375TZ9JKdeBKAxjoQp8oYxa3esZymBpamoS1VWLPd8ASjGhgQbbKhEtapUuKd4VmNu65WRgU8SP7zaFU7WapwBxH",
  "key17": "5zDiLqDx3r18AjbXE5XVHrgTgCCEx2G9G691Muw2jMbnunQ28jRwcXAJQ8gvUDbuoPkf9LnKXGbqLfgfvGCyQgrx",
  "key18": "3dE3dtNdEBxb6ssirpsoNJ98GW6G1kHg2QsgmTCKhDnfM33wJNZFwvR15NH8M3SuUhHsP2ecB8UKukyucAJMcoeu",
  "key19": "3xJTxP1xvQoQ9twAyfegneuidgmJjqJ15PAEfvMFnnbTTsGf9BQUtpQTwqJnb69xbGXYb5MGJTiZv5n5YDU1YK4n",
  "key20": "3MTxNqYuGpHrg13k8PkAniaTawNNqwyXc1pxoKyrTTgNfeq86wRonriBhfx9K8f6GZRrUXYB1vuWQbnS6EDJxTVG",
  "key21": "2ETCRJv6xrGRvE5MBa18QJebDSQhZsXF3rJfAk7GN3UbDnaPiJKaHp12g5vmrpT3wTsa4AzXhf6DnWqmAXJ4wx7x",
  "key22": "7o5hFjCVXCwYJUfXJMVucMbwF7efhuGRLLmxutajiyKv1PAjragGy2SgZkSjkNh5e9x9vrFCTFjqTEytoN33cFN",
  "key23": "TVQpHC6xgjtjXwa8e5vEy6We4XZgf7wT6kUHreUSxuDWyVqqpTbJ11vS2dX44NJr7mFvxx6vAivAnQMfJePgVyT",
  "key24": "5gWqbBhvPMXbbqiJ8J9ir3GgTXsJq3rCWDKTiGC1fLbrd7732XVB6X79vi2YnNC9vJszHE48WU87Akn4sShTSLyz",
  "key25": "5hQ475xH4FXYbGE6pkLsJmWqgSibtF6exVY9pHkF51VNV1kW7Xib6yXQp5bLGF3pv2428rKvfp5kiuMSFKLYqny1",
  "key26": "2J1Ftg8RCvwRpNS5RGCmxYruwaQNvC3WBp49A5rsx7Vw8LR9Y9fx9sPvLxcCbYxcvxKR6K6V82o9qdio8sYcybP",
  "key27": "5JxNb5Wb8uxVZrQGCEcqnvosAenCUzscrJ9Tc7QuXCo1X714SjbdWBrRi3KZkRKbvacTTDtcdLYh8EYu97qskGGe",
  "key28": "3THTNwvnfTVTxAdA54WibgT99SXCe6GmnqvcPUL8WbRZy2AeisPmRB1wa8oid9LMLe1vMse9oFjemJULCTtMhKs5",
  "key29": "5ZUcXCm46UmVVfpHUzr6UxiNVViczVoXtVVpEDDrBUjaUcjtkX2B6EyzJnz2MQ9KPinhZzmEyjgXbFSg3pNZKJZk",
  "key30": "54FVTaTuAPW5RvyGjGWBGNroRyvswur5RFv5ihSmtRgFRt3uHoz52kTtMLi6EKwbrauBLGg1PAZ3Kz7GjLCGcVHU",
  "key31": "Z2siM9TNGqaGusCGFGhZCgWojxNPKwJk1cs3vLmyVT3poMDc7dJB7B3B5gKzecSuhJ69QomppMKNA1DL5epctcv",
  "key32": "2RRWuubw2WjebdX3s3tfw91Y3L3pJP26sCTVM3cK7dkqHzbHR85dQbfrXcbtFnfkabKgtcTmF3s7T8MFqUJZNkBa",
  "key33": "2KtBowUrnSKnqnaYeBHgiBvhPuu8hk5XKsVhZmUvP4XiSxbzzLR4BoDSDr4z6fLgHboWt6WMCsNR5AagoNZDzuya",
  "key34": "5tJbxyBKWbfJMniicAYgkeprevM7WABRAUx1YVrcmHwZpyWuZfAhqKS3mekiry8beQs1PQjFCq55BEVoEEoKzdXU",
  "key35": "qA25B2kpoTVQSAvu2PPa28FnnwjreSyxtKzFEBSn7CvGyRc2WzHPXPhD1UKihD8eJHs6xGctea3L5QcLYaiVF3k",
  "key36": "4TT49VAo5harP1KAg3LLmHc84Ki5g6KUtQJk7AqnTNmKM4LpNvCLJYKskQQRzSCP1c1YyhwwQTuFEPboAaVQKM9u",
  "key37": "2VDyNdzDdx4vGnCp7fmjU1SXZHL3ySC3CA2bAT7HuJkFGUAD2Y7jhrhihr2puPKdceYvQB9i6Er9byYb3N2ftXk8",
  "key38": "2zRoDifKpfSVMKjBDScnW698d9wLLJUYJ4fhw7SS53FwD8YyoL6EuAbYZncQBSARAyceogmuo8wwR4Kwsz7s8mST",
  "key39": "5o9iRPpr1gn96Un129rQHBue7iPPZh9jSev8YKXe5maCkRRm75eJ3whEfbz2s3879aKNNzSiCWPM217iCKLKsynQ",
  "key40": "2QD8GA4no5SZfrWQ1XWyeASYP3THxeGeYiSjZJd1Mbgt7MRNxu73fUVTSM1Aay18sDXKpnDksnfVXSvDB8fyPVzG",
  "key41": "3XDJdmNxvMtNAxRqYVDjCeiFrJhiqstKSV5Cv9PLkC7Pzv9mzHTG9tkYGmG1iuZnGckDeb6XUKh7rXojYWqeFiZn",
  "key42": "5uXMhSHYig8QWVEF2huWRzqhAUyvDLKvNSBnWNiii1MJC5Emdh91wKmD2SewgRAGNufqf2bVHYU6d28DnYYhGdbQ",
  "key43": "Bfe6GhBpq9KxdswpMJKS8xCwic3Jo1gtet5Ri5YMuiWsUzxoNaxhNmJMrTyukCmKxe3PH8LzckvymJQymdGyMAi",
  "key44": "2RcEoXbDAvQgCgNcamrDKwixPP8SEeQFfeTpUztFMrTPyBxtV36YpTa9xmJsVJzY4BBgujDT3RzEEGWQE5Y5zYsp",
  "key45": "4xvftmQVFrLubUFw2nbX4KQbaWqopEoEJwATreg8WcZg4X52hjUzPSThgsf8qU5qZJhbP1rxUaQ4aGGJcxJrYpCG",
  "key46": "5sUFaGsqXUkWW6rUg39Lzf19SjVXVqP3Ahb7jNpzXViUwfomM1skXXaghxeMGubDr7py3iuDK7A21mQdT5wugaVe",
  "key47": "5r1qtdQkvGzGmTN2LcMHBszaYA5jxwTXiFDNvEDWw5Zieg7RH6TKk2wgoPPK1yinR8CVmqRXKfXurg1TgcXUqEs3"
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
