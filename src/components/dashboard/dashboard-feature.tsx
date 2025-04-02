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
    "5UpwhpetDHUqvm9YF92WdWB68bD8HGJbW1uE379jNKthecpXrJVBBJFZxc9BefkU1meKzG6iw9cAHqqxQbmQVu3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ce6PqsF2RiJHEH8wb5efnxdVizaAzXoLta2bJsxPKYuwzX7MoGp52GG36n1X4pG4A3gZiyeu7GeXQYYtCJGtnHf",
  "key1": "VZxu8fWAMmVody8rWHjdv7Me6gE58d4q45p1sS5BMVXT3V2WYPMQGWKuCjojAx4Q8o4aWaExkQVQf8CFkhtu86F",
  "key2": "GfQTBZSv2MwKxUFv9v9Eg7s1f2gDZdGsoHXRP81fChsaqFHvYgrXWvBg97C2CiHFPeGP58BCbn9FVuxg4Aybcc4",
  "key3": "qVH8TMRG9vC83ZSv4S2z8cGkuyasx8eDPborqALgRULvtooRqJJifHGowe7NsZHitrBQfnjSEFSjxT4aVAMS29C",
  "key4": "KPmomYuJFZq3qvH7LNbwinxAT1GCvjRQ6P19RXCp5jAg38viR4KFVLLFQWeMVqHeoG3MQuxivyNGon1YiQjGQYn",
  "key5": "JaaK3N9GeHrxfgVykGdpu2fwSMjUPcuVzkQoYn8HVADRJdMHemLC5TfeUc9AF2iyVG3wSfhEPA2x1weSoKa9PLD",
  "key6": "5Q8J1d38qT1zJ7gTeqeVMiQkRLbx8BttzWo6mm8YyGyjHpaAsWF4skjr2a6bNpP4FRGiU4fiwE33HWXcDRJQkwC5",
  "key7": "57umbWA5ohyV8iUwNKqeJbNvHBNZuP18duJapEQjehgcrbyKuz3gYvqATXVN56J5ugLVnDEabNJfJmWmTe5BbR2Z",
  "key8": "M3uzqr7R828QHg83sjsoKecTJ7zsRWezBGD7JcqgiZdU6SJFUwLnnKL6c77p8TGdQXUhNUsJbLv5dh3fCcG19tE",
  "key9": "3j1RiytxrGrbW3XMCdWk7LgUgdXFr5ct5A4VkriELU7RSxKRCUi3HNK6Qmdry5nNHBKPZTHxjDw2M33wfZhyKv81",
  "key10": "3W3BZGdqmxqMJPSGzFoaPEb8SzXwwo9SJTZf6Ho8QRW83PbzWNpjYLtSfghG66y35BhB7jTvrC6hqhB9VsbuAC9e",
  "key11": "4NyJvxAsfnWrk7V9GVue5VqPMhiPiNk8souCa26ko9Dzw7yBJFS3fWGNKdBwARiw1Ycn68yFMvksEaYGSjrHCtKJ",
  "key12": "5TgtjeTWQnMhFfhLeWqThYTTahZ9HkXcLD8vwgf1rSK6o2SUsdB9y9iZgmU7D7icbeFzW3XSwVdWFx7MYdkyTsKn",
  "key13": "4Gkb1LccaZ9ms6HByTRHijwAkqe8bcnNhVdBEnofJoyxxfAFCLXudq7ny9xD4xHc9A1uL9Wj9Y5PqT5DTRf3NEWu",
  "key14": "4gQ4udkB9Ed5RfVcMXf4qRPwo8gGA3GGaDWSU8RwLna4pxhJjWNBsms1GMSCQ7UzUquzCUCMM95xwoGRwKKvXq94",
  "key15": "YiTxt7rNJqXekmNahSQiQxTK3gSCWx9cHAjnXDyne3tjhQYcukyCEY42UKicttBd4Rz1zsi23GQhBPFCytfnhAe",
  "key16": "2pfr6jrh2Uxg5redk9yo69LsAt4jmPV5S293AMoBaQKxujCpLrcv6aCG8nDcYwKHwrS7aV8W4Ecka4VmdQrKbmQF",
  "key17": "2Hmq6fkuQDeg8eTrcnEhbxccH13UVTB2Uq6zY2pgPrWbXH1AtkCFxTcUuJ4nkdwEFzCYWDDeB3nmXzGZ3ckB7FL7",
  "key18": "2V2Gn6HV6RntBsMoR9Gf2ozELpwHBGX3MWGVEdtwjaqzLT9BPR53FSDt1UaNUSP66HPaa2ETmmZYtgkcd1WG5U5Q",
  "key19": "3hfBQXBiyi9VFoWz4DcdiP6iRGeP83Dh4rvxYEuQZWxxw7srLRgXKqdwUUVmH7iU4j8CXFTVNF434SehMiW5Wksi",
  "key20": "2b3Ld3tvKLauPca6jPAvKQgW7c7e7sipT6yUKXkbmDtKhXyV4rbD4GCZnHk74d9DWkwefYpCYvDBgTDbbksELL4r",
  "key21": "M4qowSMf56Mqvmzg6Td8LJ2bANecsinGTfGwTNdXmJaD92GfbbpTP1hbb8VJUYEAuGh1CrY7KwJyHvwfpgWR7oF",
  "key22": "4KSTnMJTdh1ARtHTB3GKufnWQXa9TNT1Gc7yNpvtUowg7T4eAdZN8UkxR8QFNbNMXkokQvQyaPYi7e9Qx5eMmzhb",
  "key23": "62tToFTJQLdaU1TemPjD4tJDACaYZySKhomboZaXeszgjmQqTtRGDDFUS5SnLGsd5Pd4PMKNX2jswiJwKznNbtfB",
  "key24": "5yB5514LLvryncKWGHDqaE88Jh2S6SiRAkvnJP2PHw3XLX7cSDmU6KcT9fnRFdXXsyzeas1H9RNRRm9c5fxAfVQY",
  "key25": "4vBG9YWBeRwL6MA2w3RWCuKrmLUztnR3crsKKJUbE7bm6xXZworxgrN6ASxF9cfdcuYecbBLKM26JYTou2xDEuKx",
  "key26": "5MkvvSNG7y6AUnERfdVj2EKnPuRGxrAsw7Tsy2ps8hqRZN94vgbFXYvuECYRUH3XePRZWrhsmDD4T7AXE9KWg3Tt",
  "key27": "mXT78TRjjAQS2Adyvs8eDTcqx83q6cJ1aAJfmFB5usVvLGPV8KVfsq3Qm1KFBFDkqhNT5kshTGJTFGR3rN1fc2N",
  "key28": "5DMgc5FC5ZFFUsrPwC5HEPwCuPB6FFwLFgudLrkJ9jkvECx73xPTY2tNU7eTU6ZAcus1hGXywQoxdskvLE8ZfUFy",
  "key29": "2FjpspvHJuUadrsXSiatsq9YhqQ7nQ6n3rYi6QRhJ7YbwbeUWbrp5KchGPw2WTAMNwwSuuWcSvVGTLpM26m1odMD",
  "key30": "5dcaekG7JnuLbi8xE64e7VATv9upH9rY3pZQvZUWRB1tJME6aPnUtJ5TxXsC3hQ4A8qfdkcEt2NkbXGXLN2eJvMN",
  "key31": "5CoE7X9qeyv4eCaKtUtkrpix5v7aG9TQHU61wTx2d75RssXLn7EMFbZsA71MZCYGmhCKGYfmMvrH2GunqBoExkGa",
  "key32": "4PNAc3dr9RNMe28UtW4r8Q5F97cEJDQi8beNCwi4ee5rA3zK6573tFg7GtyDsU3FHooaxnJ7oGENU5qatcHtYube",
  "key33": "28nhVKPXY4N1iPYrxP1V3VoaGwoFj6ZRynwh7YGqsRo1mYkc41xjk6xsztK95yZDKu65GHuUC7nTYE5dRvMRZYw1",
  "key34": "5aU5L79yVP72aiyr1yBVCNhHQEW7MzvwwgwgiyMJE6nqUR49iY46hX5eLnzuoL1rBr6wSENNKpLuih5jPS9bN35e",
  "key35": "2JYMuXKgqW71SUXp6aak6BvmczmAzEvaZyeYtkN1vMwbGjnfViVTyY92w6Udh74LjUSz7SzrcqtiKuunAhvycyHe",
  "key36": "2Q42pHehD1YqQjJCfweoZPFBDenuA4omF6zKxZjkVcQMY2udZb63jt5pyFbV85vnJT5ynBWu5z128P1bedmG8VTh",
  "key37": "5McPSwPNotocDdfGCFDmEFhTmDstpRzknshF6miDVQ8GPLTwpwzgce4jC1dHUA6NZ6fwD4BeBWtXK3quoKwaWXzu",
  "key38": "KgDiLTDhw6HgVHzwtdqUPwXVm6cAFCoPonfsj9Y9hnBL77TmmtUCRviJN6B1tL3hTK4RWNjeFESWtZXJhaNU3Gb",
  "key39": "2yWtwDx2pSLGHqAA5KzbrWKE2af42v5RxUqX2PkXRp4vVbtnu4oeohn87gdH9ejY3wHKW3KTyyGmHc3RBqbGpG7H",
  "key40": "42Ho3wTgcWDWWqmoUqVsH2F6GGDjH8G7q3AY6TTTAQkJ9HQjWV8z3JvJBGEq5TqCLX9oUfByZAM1Q4gJEUQKft7X",
  "key41": "3Kes4hb8g87rfLjayimsy6f1NtgAybqBS17WemJjEKFmHd2k18TYKAASej4FS8uvVxXtzYTsaRDBLA1tchtELJUS",
  "key42": "3VQEGLtNtNQQpcVMVswtjwyCsgX37222kvvcqepzRCJ8J4nfiEGotn2RXNKtzF83vnECnk1oHmS62EuWLdQ17v4q",
  "key43": "4KGuFAksRcqYT5q5zMVTbjZ4DSCSGL397o57qxrrcxyhNhko1hqKRpy5QTY4yPwKQLUygHNm1nCC3vdHYj19HnfY"
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
