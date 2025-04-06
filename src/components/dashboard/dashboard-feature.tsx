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
    "3R7tYot2XxzeDhaBPiL6eycpUoc9agDSbxZJHNdgdwHvKWkQNFYHCaUhtfAwgfaNgMyLDuD4TfwWfoac8A61sy7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jrBNGBbu5hj9ALpkih8Nsw2ow6NLZtW1R2q8tQPdSLjcUuNTNaARe1wNKn1rgkVmgjPscy8FsYesNPRmSbYVKzf",
  "key1": "3VA4ymNUHetZcsJ5UvkZmLQ5U7bZnVNq7EuRh9sU2VV6AjRu62dZbtvwS7jCb2n7Fnd5LzbwBpNjUkwX7MMMVSX6",
  "key2": "26V61N6z4vKVkATbqniBzRSU6BegVctJjTek4Dpq8Q2kDbcDD6cMsAsKB6XXFTjEbsphgwZCfT5isBxsc7akgMea",
  "key3": "5uvdYUiseeXzAcrPKQyaRoujRM2xjV78mpxVXG6AtZkqwRYPWuYm2e8TsYupmveagiLbuFxT65Ewz4Kc81vgQa4P",
  "key4": "35WeskCsKYHiykY6jf6DHhKMvsSoXov5kRJi9t8ad758zJMCKeneBkqXrf7EfGfjNSmxfrjMZh7d9CMoDVuxaqdC",
  "key5": "4ByMyf3bt7HXFCK8EG6thCzj666oYZUmCovChTMMX6vpxHG4Vh72ew7XvC6ZTqXSAP2MpdzosxBCZRdoc2zryrgz",
  "key6": "4fpET1k8MHp8k9nXC7Wbzuyawybi1HRhj3qMWTMTvj7fiFJYp6s3CV1ffuWpwD2o98HHGvsPyykUUoEMurCHufhK",
  "key7": "26SCuYaQi7wV4f9uwi59wpgepYdik5kQrayY4hHk6EHYHj8cSERgiVTkWPXv4XfesdL6vFuBDtvzjbvpFTg3EDKZ",
  "key8": "4uU2PL62aL1WNmtrWvjYP3jHhVQX2vv9zSsTEmuFbTyCgMckjDcxGqbmJwTR3zWNAYXAmgyQuCUzP6LX2uFrR1FR",
  "key9": "2EqjNs3N5r74Yrt4vCCi1DkdZgxKTJDcSf9p55eUcoGyxvGS9GqwEX554FLTbeHraUTexcs5CJT87Qry7YVejUqJ",
  "key10": "5o9MCeKFxL19y5EdP6hADneQxhkAEuUg1tYzL4rsSUg98tNcosrxUKn8PFcGvA3ez9REheY85XGzBkuzeEvTZroL",
  "key11": "49C6VAvDqJRCErVBNTRxb9TkbsuA4T99abGP77ymMAFCLaVsPrVeiRJYjq6VcycCwSgFLzJsULZX4ZQi5p4hNFUf",
  "key12": "3tV1Y2BoXZ7tMFj153dpLUa8NbhoLZ2j5QNoU8fXXwDjzA7tnQ5cidBhpdNAw2WZwVkhiYZYXddALabjUZt6Z4Wg",
  "key13": "5YuSJJTp45pKsAXpHYHhSDQwEBjKq6HUkKUCcAYBYdUy2joJpe8QVEDbDrTtsAgrnX7BWN2RrS3617sM8CSpHDrA",
  "key14": "29GEr6p3CnppSujBvErKaoUJwbspQH7fPxv2AdqNB9wyoZh746n4z738jEKuW8zP4StVsEnqP9KEnseZv3GS3rza",
  "key15": "3LhMKmgRvZiBdxn725e7mC9dgrFiqwaizMcPZnjiEDfJitcWQYm7mnTHBCvj49upnsrgDZY8NNfcqS9Q9oft7ueA",
  "key16": "WJek8xvyag9hwVHBjh3LUpKatG21n7DEjGfTzBgX9sNogrqAHZRbUWUM2gBM5i9cituz7Uuv6QLQYojB6RuaJsK",
  "key17": "Ao44VUUrZdh56roUMm7qzxofz3sb1UPULGQuLkUJR2Uyse3kKm27Gq5dRN7ykXQoodwuMQLFRxJSSJmcR7xKczh",
  "key18": "3JPXq2RwCP8MUxTaWWUjZnFQbSbFyeEFS5P6hA9TV3ZJk6NVKxpSihhEKTXjM5F8P5FG5r7EVgtmAseywwfzuBcq",
  "key19": "5PGhcjCdkeZj8MEFFLJHUrAoet5kqbh7s7fgvefq8a66Gyc9nLA5vVhzYyVDEvUfsEeJ2vXjDAHbUGYFN2zqEGGH",
  "key20": "32R11ksY87QH4YkCJEHFQifduBCaJrfrBrsHWMnxRXfK9ihG9Xw2aKSxoZP3LFjJXN8QiF9MHDFZmy4fV3V7n728",
  "key21": "4DqSgaunNqY7BheAp6vgR1TiL7Ergmo5eSGUZnrvgcQPTaWTToW6u6sHNjTR9S3GAorAVPUnWGNedrWcYvNrM39e",
  "key22": "5ewre1veq9xYXNtr4NpsSyGFghKNs2BLhejnmSjgdjQJQaGqpXWTy55upuVGy7Z82XHfkwhXpuPwP2kZchuM1BKu",
  "key23": "hiEPYKXiujHGnBJyCpKUgReCPGAxWU3yDKjarJs9QdKWAUnFYdm6FFRJQtAE46ovws27LPejqNxRhJFP5QL83Dw",
  "key24": "5QHCvvoiVbuXpMscukG9pKf6Jw7okGcqmakBdUM9V8z3LUZxAaKsYHYMFhAgvndmJm73hJxZjeQ1AMTfEJsyrxjH",
  "key25": "JKrsDJTZReduCUX1CAeHZBF7DkH87EWUJy5gfs69K7s8NnY3kzik5jXPXaXua4rheUUPJtNDgkxYRWFUqoTxvUh",
  "key26": "3dTZyjxcRGyKxdUnPozFCAZCB2cKGVCu9ZguSvjPc3XELdpds6vbv7bsKERgVKdcuPik1DjJzJcPqzLUj9MG2ibL",
  "key27": "3asP81MQ3oZ7uKQK1qfNwCi1et1HtThCb2F5Stiycnx96ksJjS31MHHbvdzSjcGsLBfouSSWM95ZxZP8otwpmEDC",
  "key28": "4KnZBKbmNWp8rtwHkrN63W2GGk8Sd4awY4Nsu5MgowSuWLGoj7aDaDRysgY1hNZcM4o4NzBKy6WXwLcmr43B6pGc",
  "key29": "ZLFNxq6rzr3HtTauYEELNm8YhPnfcRFRfAFrqRQ5pXa8HRjLF8ELY58UnSouKt8q24popTJTagdjYkxsA3yWKiM",
  "key30": "ikhY4YRJyEKvfGpGoeF238ARSggxSUBiHqt7MkZJXPPpjSC837df4MduqyJ6hmJiDJEzrvaGVGQxWFut1A269nt",
  "key31": "89TVF6k526qKagijzD4WmBJY8naZ6sBBt3mw6S8YePj6NLKK5eDEfEmJn2gddhxoUc9W7xG3jeNGRzQGDCeZ5ZH",
  "key32": "52qQG9V8MMBQxYS39iNCmyfcwZUAepAwYd6kxp4Q2LpCF3Q6LLLTibsXPmtY1TfSHnCr35oBzmMTcTydf6dFrCRF",
  "key33": "4LgDgW5DngwNSbtiKXP7gfGx95nBDriQhZHdP3Wq1ciJESfrAYn4Zwq42GqytnmrYuKpnN5HSkJ7n5DCjuuevj4x",
  "key34": "4EFDboastkhCrCt6XWdCtRhXFTZdCkP2YEGGfPaHHgBodv6xb4E4jAxigFyPgUjDyKjgXxiT8KRaEjzVC8BPZsof",
  "key35": "2NpmS5gAPGZTxbBj5xCfdXK1qKtuWkopzWvMT2yLAn9zrmJo1RnHoY1Yvo3V72MQW5Xao7S7hKHB3TSRhhRmmvjK",
  "key36": "47xZua9cer7h2tAbZeBB4n5d1Svt6FYnzkk4oNBX2JWCNq84BjghP2uuiDVEEqirVGK2JgVqtE5QrUaxNz7oEwB9",
  "key37": "4APvqGtKYk7YarRAiPu4oeW2v3nyeRQPgkDtSrtRHNEbE6m3v8sM5dJiKxDsLe48zVEeeiZ3oyFc2WSAeua3y4zt",
  "key38": "21iL6cQZkAi2vexwzDGkkkr9P5MTrHkQGghT4ZWkXq2RCzLHLC4Hw6jVvRyxvFfokjFYGMw4yJhr6M1QG5KzmUGF",
  "key39": "HMZM4pJZ2SWJjjrhqJXTZKvNHZZLRU9HN8bkHkzn32kWfmYYD29RryPVX1A1aMU8o7dUg4728FGiPDc8jpcsAvN",
  "key40": "3CmzYja62pKHBs65DNeY8ticvpEQcFG2STqbTkryxSsxUQSG6uA8hPzpeS8wDLYEuKMn6jntJhhozHLmFo6hkXLM",
  "key41": "381ztZswhuqhMzEjERPueyxu8h1L6Hkabq5JFnwtXQXxZkKEX6LAbswsWtWgLSq1cbjho76xstaSmW3x21q5pZyR",
  "key42": "a6iG4C4m1rLB4t2BT9ZYJbcmNU8PrbdGZ5hmkChKhVjcfDGRvU6GMwM3CfaMs7cbWgDpem8wc5VqkU9bfFWiBDu",
  "key43": "3GvZHAEi1q2ZieTx6YqsAehBitfDD8ERDsn7vqtqqyj9h5AGjY5PRRKSgLtXZ2Xx36htfywMAKY8h9y773TqX5UF"
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
