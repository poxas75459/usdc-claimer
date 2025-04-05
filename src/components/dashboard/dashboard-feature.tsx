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
    "52jL9Zdj7Sr9oZiMpMMSjB1zH8VsFhyd9ryQ8jLFYVcjep11b4jjVAymzAwbi59vyxk9F8L4U25WC4dCTLX4r6c1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ovjwRmbHwGbRoc1XdFcoy7AEmRduWhcPzvDX2F3tQgqajbiGUwE6CmjTnqLz4oRANd8jhWHyxbKF8gxCpKSc7QZ",
  "key1": "Yf7r73GaBwtrPQrrot1VT2vuEmj8a2qcYPUTsFmgNRraNKH7yo3mnUArP6o1gjeGFjpQ5suNWSWy9Gx4XqQCKxi",
  "key2": "42v3j5qujyd5VphH3QhF1ETgX5w9joAo2rbbXHCWmZxnmzHrzZJLpR273iETTxpTu6J7HoP7LNPoUEkR3rbfQJQP",
  "key3": "3gh5DEo66XNWVuu1eH26h3Vvsoesvr19bYQohFR4zpuVgs5yYSEBxpVkrNJhCUbPszBZTdgjpQp4v69Mq7HiFnue",
  "key4": "5nwn6kq8vNPMfGrm6ZtCuKisv1FaiPJ1dsRXJZzpkXTf7gsfWxE2hEsQBSXRvJ15YvkPBpdP9fCzeuHBuA2HLggP",
  "key5": "DznBZvJxrd9B86EUzRkZpbdz3kK7qzNnWqoxU1Q1nZfNZNrsEcjiXYo4f9bXnoyDLko427qzvtSVAXrKfF17dTo",
  "key6": "4uNJQiXy9TMsnDaMyDrdXPbAMMFXns7gvMZhtNZbtCHdER9VnKwZ7Y5aXRcZjV1n3xwZx9rpJSCbzA8eAzhh9xBh",
  "key7": "5R1donhYCVPHGoZBUubnAQL6r6xB5PP4LvvVKhRhv53gdrsksXAdJz4aXKVUi48PzGiwEWrSYniurceXSReRt1UE",
  "key8": "sb79VQ7W9XwsiXa7S1kuYdS6JrfgXT3yVH36qx7LE7pDTNbRJpaDLvwE9G3am9ZpswaXTMQUriRbjbtSjNZNF5k",
  "key9": "2tDnUQW35K6EJfYDh2FvvQsSY3sjCjVwGmMC3NtGjMuyXcVfCR892ddrZWfPMJwhyHBYDoWP33mzuFVAowhf8Cmu",
  "key10": "4VcXGnshMDbGALn4ezjzvckjgkcZPmLLARk8PUDQrkrxbD1xsaiSiUnuoonHNRhrnXmrTmRZTuruaai7NC8eEQDs",
  "key11": "4ibtDwLoNsqKnCzPn1io9uZQmwDgKEXSuZ6G8W2Z8TZhXAa6NkkA1WU4sLbenrx2xYw6G7h1ungznEfkaYqPcdL7",
  "key12": "322GLi6xDPRScQAQBKjFpHRzHGahx8mX6QT49ApGrMeuxFeFsLNe7VjtsCEzdbCahTPX9QdvgEGuGsitKpWbBgs9",
  "key13": "3qC4MLWxnBX5vRMbznEVFSGC562hRbKfLtZ3R4MNSzG47TbZZ6bZvN5QqeJ74i8NL2Qjkki8hrDBqPJCboAHmqLM",
  "key14": "2PvdE2LGkLx8y2vx23xbS8taDeB13USWK8NCZu3GPdbgiCypJ52oRFftWriKKNP2JUgRUkX6X5tEnyGqEsUqTg7t",
  "key15": "4cTfbzhnEqkGNKVge1npmB51w5ihGL6TLsyptsbWnskdexVVmK4KVcWzyPLSxHc6sbGQ8UEbqLbzhs4wQHLzMLJ3",
  "key16": "53PzxbE8m6AqTPoNwtk1ScqTpmExb6Zb8QNa4UR3ZQ7Kpqaa2JuSTL3mWitLsXTJXkLYiykyv9Y5jV5pLcfPAwXq",
  "key17": "5n8f8kUt2ihECmiTEQjknBDqttt3LvGKDQxxRHNwqXh1MvELNwDKxVwcS61fyrsGYDqqA28o4jyuapvKPpGvx7CG",
  "key18": "23Pudzfac687qLUBii5UYe89LZLyn1D8sjoiAPXhbVPGLY4fNNUkzZbgSnUnYJN41hfuC92atu3tppvAjQgzUgjj",
  "key19": "62LMKDajXXmFaZkX1F26WPr9XgRTFFQEUpT1vAGHMAtynQF23WnnVBpD5NhXCkm7YgDbkQFpakhmcbxjuave7vMf",
  "key20": "4p3AgN2R23w7ksA2zQbLsoLGuFHhEnV2yFKyth1EscUKF8W6N2mCjaZM4nreb89Yn8SaSc146TgwerjdG2bLAcgr",
  "key21": "4ifEhqGLCNTJtnyy8LWWrZyZgYbpM5CF39aNhTkhYvbxxR4h2VY6bscTVqDr6EfMfvsCHSQKX9KRTAVChJSAu8DD",
  "key22": "49yccpGTzWz7mG8vryxhMP9omfR6oEvKX8u1rpSVFNVird75YAbgQ2ZFxBkZZavscu2JKywxDWRyYoqYP2uLL88L",
  "key23": "uK7RK8mCDXsDPrZvXtrrFze8aUX8EvA5rgcfdPAyZ3tHGoxHv6n4XSHQyPwah87wpVswhmPzTjWHEdiXkTXCCRg",
  "key24": "4dxb9zWq1pNfXHExk4Hdy8WeUU8w1nNDuZtJFCQMpVifiA11RhXQyAY1Si43jfRfsUjfPViVxDVpX6Ba2HpxDVaS",
  "key25": "2ygDe8EconGYdQwJ9gfs3RrT8eozduxKTzdpVMSAbmJaZeYRQJrJ1rM7WPVjYiUrZFeRDesUpV9VhFbrWYypZGFr",
  "key26": "59u19U91ZkhE6tSRH64YemuTwomNqyXKxJWKHwUZBRgVjGQM3hLZ6wXLyb3HJ3FyzSQT4JG36EA8htHTNqXAaPKQ",
  "key27": "39KDLeqTjSmZDRhEAc32fbA6yMS2y2ngnmxLcxK4JU3kApyUskSX475zNcykFw6UzVFdLM7SyxExKeV4GrtT6uVp",
  "key28": "44pcjpKUBWLVV5XYmpjyFqaYNGB4A8vNTHFAne3rLr79CZTnVfHY8VtVbXdqzKXVjJdSmxbB6wwxgKcUYVPMFC6R",
  "key29": "5qXFRfbktBtMszkATYF9Cj3JoG1AQYXZYSP526twkjHmEdTXfrRJ2HAyGxiMBaWXXnRPPTKbfkbGKMh6ruoh12uu",
  "key30": "4Wn5WuNDdjzZk7G5Kkcq2yzi83YFAHSb5z6LarYCLc1aksH99yyB5x6Zp8Ed5GNWu86bJPeegMeVMZ3s6mE3WFMP",
  "key31": "3GJBWAHzTKo66owgKaSEG4HVZL37MkTVJzHoooBaGeRE6LRwXqYhJtEefuvuoBvWmHDyQyKwmevwrkvbhAEQZCFK",
  "key32": "xQUBzxMoa65aYgbuCx2Gba5atk3auVXUvTy5mFjF5kjkYYWKvkCgeu5qpyJA1Rk7Ze2RPmajgEo9pRJx8pXiT9g",
  "key33": "5sWRdma3FNQbYw2GcJ32nQPxCRsz4fnffDgZE2Dc6tCkd9HoE37M4ZDEvpPLRM1yzBj9TeGUn5jryQzhkr4pBcUm",
  "key34": "4znUhs4Rm7nNkb1FmpFGuTnHecjAm9n1UvLsubYq9Jf6U2TvPcZVLFndCs5fvbzdJbNoYoZ6t5TUvF52L8KBYJ1P",
  "key35": "5bSiad3dDqYAxvDrTqFZ6e5U5AzW1sf7oXhTS1c4NyQfCBBgzYp2Pw792gtCYxxCdg26p1RL1fjUyDuCgRAGcpmZ",
  "key36": "47VCBX2ntNRFYegbo3YBy1xQhQcL9gQUGmCynVvgQzoheGyBNB18L6wAxLvrR5co7a58NHF7ppUDq2Rf83wkAKoM",
  "key37": "b9P9UnsqMJyyBixU4EkUToFmv8ucipPvFvccn3g9CdWvenGXjsqdCqR87BTuZuxrg6YSkci5mXRjr5Beoy7WihE",
  "key38": "533JThgHsfx3jrSLAsxH8Ufuxb39ksB1bWdgqJj43kmxWN4JeVK3dDAQEcWpbNMcDyLHdrkNSgnhbxMGt924GNTQ",
  "key39": "YQtBq41umRpavzWUZKzXwPfpjuVT8Hw8N2uuH3h9D49CB1L2zk31WhD38Q2gkCvR8438cV9n5Zc8Zu4hsphywLU",
  "key40": "5a8q5sK8Cduvhw7UaU4E4HumYcZ7n6FFUf6K5GoKacHdv4RWkaT7w6xiuwMiFG954F8FhmUCrxBwkBk3LS4QoC8D",
  "key41": "5knoma6VJFrAAZkhReErxswHQTt2Q3EJufdckg7ungPr2UKZmPHNiVSr96suTqhBYTmqW6qgKPUQ4AiobSgTdhCS",
  "key42": "49zopQdGFWDiRzdANvmmaLQMt6qiBsrdY6kM4jV6Cd6JQeG9tH6tDjiJURYWX5pEDCLQ3dgFBM5YFmf5d4DHELYb",
  "key43": "2LjxqAmxT9yqcTX6oTBuACTkToxKmvpDBzB1eHUPNXUBfzmHs6DLkWk6Wamy1CoiAadjPrFMC6T34jHRR5LymKMo",
  "key44": "omqMBQSMhmJoZf8AfiF5UZp32Z4esd5AkdpKk4puMSzLqspS4Vgo1cEfpvSEoYWhnpken4cWCHfzXFR9eEvqiPx",
  "key45": "4dm5te4656TXMNNDYwNQVPcCzGj3B4tERsJyNbjjXxD33a49u8extihCEFKhAX874UY9ZseyLUhWmKNskX8oUq4b",
  "key46": "4Yqa5s3zdgujEFBHW9BfRwRgn5EsKhNbyWoXVUGxycK57F3EdQYoxWXt4BWMyr1M7W6sZUnfpziXD1RjEGzJKtC3",
  "key47": "qdbwkn6Xk9u3NPHtCnuBehPmR9JmazhZUX4Uag9QUwkFTD9tAxGnRiyeBXRoZxYvXADwpowSstgbCwSgBKKnJsC",
  "key48": "4TK7Uiq2xwEVv1PQn2kgpcx8YZ7Urh28hHGxwNRYxf6Y7vKyE4nyWYVrTNTLXXcVPAwyWxw9pVP7YgXUHom4nw9w",
  "key49": "5RoXA3DB51oCqjsgcncRisBcsSAjhLiumGUUaDSvL4C7FgEB4hTXveqAbEeRhzqdpyjnLqAfhVZ6K1VXN6dirS1q"
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
