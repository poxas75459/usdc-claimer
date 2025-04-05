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
    "4f1iFy4dZHUJ2uArBe5bUDzSggTyYw5mzgCGEoid2B9pYWnhjJuSD4EafdqUjfQq22z2L8BNB2qvtAXwujDUkZkr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XZnQPe56ektErdn6JkFQ1koyUWjhE54X9yyRn4fqPokJRzFcRe5Uy3ayon8jpbDuhbgv9DGEmZFbKSwL186WfH3",
  "key1": "gEKpicNZc2BCNffwwBwiUNLrwZdY1LXrXF7Dt2RdvWKGQS7CDFgBnCDRrx5o896TdwYRbzoM2ZKSfZm5YWVPfpy",
  "key2": "4DRrUAiVrnkd83dyxVmWiGkrXzm1cBmacpM1WfHLMzn71H4qWuDEhEWygtuWc8Zw7F9LgLZV8UuG1VvHFWMsX841",
  "key3": "3ZLYCNrEWssiqmnUhWvgE3evAA7BPuPBic3heuWksDYnAoS9EmG2ng5JMe3Sq1EgtehoRghyEArNTbznVmUUWJ52",
  "key4": "3v8KVSj1rb6RpLLE4nN7m1sZCW8uYrebJDSZdfgQVY7UYbDvy16vcWuMaJjsdBTSiX8V3t4NikbrPH3CRHXaPUfM",
  "key5": "5jMDSU4ZwriKGhZFeUNJqQADan2E9xzhZcViENzQ7qVquaNZNtR1jf4XfGa1GzSMnfo9hc7SQrrDTtzLuaKcfJzT",
  "key6": "3pmqyRj1J6Vm9V8WRpy6EbnTjmjpFQuekhU81CYiQHcDH9uMwSnpbG7wdVi3giDGxJqHB6upRP3EUEfEkeFeFs5R",
  "key7": "CptQLwXxo2Xp2fpJypGCEescw6H2SnEFxLwBYJN4YrpsuHtQmy8x73eZrN2xZcqcftC6qH4o4JBM7DWYue2Wswo",
  "key8": "35EicmtNvvxDZy2c8UV3pG37cdNpV5p4TZR7hD2KWMGfxCkiP8ZSTWCksBpYiYCDXi6n5pNCs3wnaRagGzQTtd5w",
  "key9": "3iyBrB4LVL744UDwAKuw4YihfSudY6Kq4aEuEYJmZne24S5jbsukjjghPt3sW17Qwpq2XGTbkmdjm37LEwMrB4k4",
  "key10": "6118qW5Lz9dyimsZrbN25DL4Gcd1ujqkuSKcf4hve7dJnJe7gQXd33YKpPReknr5xc8gn7GddbBZwt5KFfMci5Sy",
  "key11": "4WWEv9ggYuvytRwNvEiL7cKiPYkm2GTJnp5g8TkQckct9HUVL3d8LbH2CUg68sPiEUkAbc8JjQocRk4YMSJHeqNM",
  "key12": "NqkscHrta4GoewPZU78yJfGc8zuzceZFN5iDzt4LQ5EDMLvE3wMvGcPL7xu2yrjYCMnu7LQMMHrjnxEeVHdwitE",
  "key13": "3y2LSrjWFHGayiVKaLRucpg2VMGoBaQKEzxrrSSfcd7PfxQ7PvoJw1CvJYHt1oAijt6CEB3vLypcJWcRRLRYri9g",
  "key14": "2ztz5MnR1sSzPHtRhfEd62fJ25uRu7Batdn2Bz1jyDVGcJh4x5tgA6vNuSwBrRo169srehC7Rd5c4yVmVgqKzL5B",
  "key15": "67GHvzdBnvsvpoSafv7B4Eh7rvRoK7PUAFzKDKangixMcVEamXC4pTTzaPp4MQFGFAtgKpER57bJUcsWYWh9i5rL",
  "key16": "2g4SJQotnFjhp3UKdyVdnyh8bGApRQ3vebB4tLAnEYnMga4NqYx9L5MASRFZhUAY4rJaGTBSF7JBcjZyqDgcK7ZY",
  "key17": "WGZNyeUhdqfrWMUbFN326ordbqt5E7HTSZGqHcA5EC92rawLz3f7oJwuzmyQCKzqp978zfVZodvp4GQDuziUQoa",
  "key18": "2puTGQTGPGJDbuj1srD8rdDnKXCawpWej4p5iiK9ysDCdAyGiZzueaxbfKiK1cpSwF3SNUiraxnjoxy2nkfXdZL",
  "key19": "2C5bPJYfXAVKgLdtZvJ8onGSNLJaoXymgxaDXHkVy3XEkKndeqTkHutkHRLWz8HeK9VJB1svMRTMYQoRJQZWK457",
  "key20": "3v3N12EieA3spV6XayWrPQNshCHWSCynkuoQCP7FYeC2K2KRMEZ32wfA7GUNE3GSWBcYkcbLcdvwEQGdn5q1xb4F",
  "key21": "2kr7tFEbtbBTpQk6QKCAMT9XuLgMzcWTPf4EEhFoggpgCcG3cYAGQVJwSZiYPqopKr6DWiKyv3ZexSP59BNyyXPr",
  "key22": "4ZyTS3U38cUY55w3XSv3UAzx9v51qLCZGwXcoGjeLhgyeqAFwFF8ij7NaTvNVpZwu47hhyx192ff3DqcktkCzvek",
  "key23": "4vGYXTj7suPSEzCNvLgLWfTr7nHFWSSk8Fyi4XnHZ7vvCP6inxNrs2TDJRjoB7UgnBnWpAjkFUHcZHp8WNNCyr4S",
  "key24": "3hx5dBfxiG4tC3GkTiCp6CLrJYeUZ46AD3EY1H4d3R8SbrW3rsEJmcgRKifxj4Bv2kEJkHEEmvtfNM6mbXaZ9wn6",
  "key25": "5PfAFBrTtaQXxoVmSjo21TKZFtULdsQpRokcxXXFkoFNNG1kMMeGmnFBfBHvHv81bHmVyr9NzncACkrAeq2HkhmY",
  "key26": "3eW4QNnZMGCEP14Xw7r4oGZa5pJAjogC4nKhWVvDAFeRx1SBc4eetru5Zi7Re4pcBU8hqjVzxJtrDwjYbKoxgDZ8",
  "key27": "43rE9X7THm2BXNKGVDTVkdkqMNT5E9ZDgBBAWv5NVUN1drRsod5UNHnVePajpyJ7AkiEdfXTM56BPQBHzX7g1bmE",
  "key28": "5SjM3aKMssyDRak1oxhuQGiTsyVJGUyZL7mgKfTAYpwDZsGXp2Jfh4DutWFq7RvWVgVqW5yXEYroG3cUfC836LTd",
  "key29": "3SMrXAc765JpdsHeSnPwVuztq4vWwft7yhB8eHAe379QsywoVf4G9sF64iM6CCB3pJJVckcezX6e5xmaLDT5nwYJ",
  "key30": "4VxW8kFGStAP62nn5gCAs44NyTKgAfL3SuxyGayNJk9H3EgavjKqhG27MS5p4coxaKJw5AQNRtFNcXFw63UvPDVT",
  "key31": "5pMp7Axpqr8QhkMzn5uNQqNke3zBPagCaf82idrFxLiKbZtXDtisRgkV8pRbPCnxJ2RPEykm4vX3YLoaYWJoFG4q",
  "key32": "2nysoQ6T9rHUBXxmUS2F8QfnDUvFz1VsYd1qL9KvRTyKRuxznQmReFD3K5pAdjf4DTLZiFEYiXeGtwfWVY2nBPs9",
  "key33": "5213iEJmQJP75Bft5tW36n8y2wtkYv4z5368CB6Q85UYe8QoStWvNr63XT4z5yuHaTcUG43BjtgwwjFG8mW4Vyv",
  "key34": "3MH64zAUmJzFv4D6GW2yanQhUM8cXrWeyuiy5BpVNHSwNxcY3trK93pTz7RasMcQEn75z8YqcwouJg54qcFJEgd2",
  "key35": "5FCmnK5LyPq7aHiLQzdSrx8Q51Laj6zLZr3vUs99jq46cVVVRYgq5YjEEDBj6ewaJ9sFTgMZYC5LRczVk2EBGjBM",
  "key36": "3oY5mmKy2vAtbXUHLD1ntGSMaSpmZZdqXHgMm1VaXBp6qogQA7FvEq27tB9qo7rLtaGbPCj6MGciv8xuPX9uJmCb",
  "key37": "bWy8nRu8byaW2BPK8vr23QMAv8iRy8buWNEykRc1fvxYUKAK3PD6ShbtWm6cW8AMzDfBLjfWv6TSehwEX6vACdZ",
  "key38": "2CEEVGV7VTjNvwhCEZ58LN7GbrSbh6r1xEw2GB95iPK2Et5XrsdA26GFMfGuKZfpiakAXwRGkZgA3UFMcYLu8EKs",
  "key39": "3Yeg6PgZkLb4x1K1xvzU9wtu9hscjRf1jDq1GmMoX7zDCy94oncMsq2SabbV68sAriGgJZCu7XYKy961DkCR364x",
  "key40": "4cCJR3D2FRmCj3gZDuwxHTSpdpqCoBaFzqm39uWyMUfEAuBixQXCmfKhYyezbR85aBygkbq6TtsWAx88ymVy5T2R",
  "key41": "4DfMb3muYLwUmLSxxLSrf3ZYc1MmudozL5X8aamq5CEsY8EQPwzqzx2AVa1zh1UwphhWQdMimrPS5WMV2594JAt",
  "key42": "4u5k1RKuyVNq1usmdpBs6rsjArwwT7tMgp5xfK8ikft4nq8bAxoyVtntfFXytqicAEKhrRy5nKrdR8x4rqa3VvjK",
  "key43": "29bSMGphjh56tTWbd5YVbawohPaMF75Xyhd15cj4gmJSCijTZYya7icViakxKt8tPJvJkpXnB6J2d11L41RrAwYt",
  "key44": "3tnPU4sMVoWcY4gfjg2Qu89U22Bd3YTbUe5MzwnynNyn6pppsAuzdES1mU6Y5x1bhJVJB2eyjLoD1Wn43GR3hxRy",
  "key45": "4pg9LYCVkDJWFdfaR138cujVzHQjxiQUZrPQMfuXs2ipixFmtFZbsWr8FjwJ5CzazfAmLaS2qARxiRa4Miv8MeDL",
  "key46": "v4Sytct3sn3dEg87oCemgtM5fqp7KLRkren6nGut4ooF3ZuY3h9rKy2fRrntcEDuqaCmLXt7vyWAJDrgRoSJmci",
  "key47": "48MZMP7FzesgwYhvBmufdrkNBqcyBkw11W1gMhbv1rJcFW4Bwb2YH6326WSKzT636xqLFFJ7ntC5pGRLsa6N9J2A",
  "key48": "57LPwPrJKiDWetBLJQoi7F2yc9BEdF1FzrHufVHf4kYp2ZWQzAepkDPGnp4x1WQntsqe99fsMxRvRHm8HLyofi7U"
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
