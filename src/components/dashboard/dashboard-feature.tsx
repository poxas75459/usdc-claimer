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
    "yWwSZVPJfBd9yJa7e7jmUDZJaj13jXPig7HQG32ijSF8QAJZzzPUupbZC1KNryroqEYWa4ZmKsLztLLoZgYyYRq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ktBzrFeSmMZhq7cu8rzovvJeJKpaUsL2C67CEyQbr3o9J5YvSoZNcffZBwt3kYz4niwxC9RM9HiGHnA9NyL7yFT",
  "key1": "4LXJV4QDktib2z5YXigrwLtkQEizcaSkWUZ3bGibyQsEGas1x5bYckPCVUinNeVm6f8PDBhtmmVLMN5JaeK37moc",
  "key2": "5EkF5BMSU7wy6eUXpSnfLLc1cottzTKuxLZjaTTCJqq8vcet2F7R8D9A1qwB5AkfZGcdbhhLUXKKuL7cK6Ghh9NB",
  "key3": "5k2xvH6v9yzyATFmWgG5jQeMGJcE3xnQLNHiuDC9kdGVFKMLoYs8YBAiWH9cgFvxNeARpjr7ZSDp7DanJPsSGSmN",
  "key4": "41F4XCRnHLYCgfVhk2ocnpEwgjkxp2rbZ5WGWTEFzmvtQkQeZ9zTcTs4axxwyh6Z8V6q8LVLFcTfSa2yWBXu18Wn",
  "key5": "4sVEVadBz5yvRewwkqEA6Hshrxqnk3rLM8a2Qq1PUUSttZEqthoXT1i5uc4yaoh14rNnBqQ5yTtR7JYHG3dJwASu",
  "key6": "2Xm8pPwS2vm6VfQZFXVcyhKR1F7xxTztZmWRtLnZWoauhoVDYKC5MgzfF7SvQqcLyfZoELX5ZPxx1nrd5LthbwAi",
  "key7": "5Gv24VjrDMkPhd3bLzud2wRNTR4m8PQQsUSfdy1wUBRdj8tqFAq5TBKAzKf8k7Eu5758iLQcp9w5Mfs23YCuK386",
  "key8": "3KQkEAJrGNx9EgJ1PqtNxTAQ4weKF6SWbAcATvdoaoNYS7rn5WavCNAQLdXUAZrrVcqUivd6vmg92GhQTTjqnP8e",
  "key9": "41khRgB6djM2p9zBqtzm1dLJD8YQzKXZm2K58FUhmJqumD4Bq9JrrQpbadDeUiVa1mGBxzpRvfFbRvomJkVSTS2q",
  "key10": "5SYKupfG79kF3ErfouGhpEe1yAuw4rD5Wsj1DJtFtAZZL9ZDHohbUC2GoAwRLLG4bhYfXGHTyt1NapqZrKAS2fe5",
  "key11": "3TcqUVVFn3vERo6miTCC1yJ1nejiwH8eeXa74fogphdzsxRpyjbdh1EhrrMz8HhCHi3Eu3Dr7oeGaBc7zRkeni8J",
  "key12": "4m9yJzbsWvXqM1RZU9y9nGdySUWRDDmgWdZHkmeN2Af3wcc5Xk9sAnt8xbLc4z3AxMY1XvdxyPaKwLA6roYpAUFT",
  "key13": "3SZ2p5PP3SkKN85MkfAyv7iFnUvMbZJHxXweD8SZCemiFMpLypUBXbkcaFQLQGBQDpLG8SmSFQ1cE9gacopSsNfp",
  "key14": "64m5ji2RKeBWjEswdz4XrzP6enMTgyq63UHmrT6S9HnMST6ttv7bo7Ym99vVkdFda6qfkGXXtYUeSma4H4KC7Zvg",
  "key15": "4V6AjcACpymvZGLEXoF79cmQvWmqPDFMU6v1kKZtf2TcdSEwTJThvUyqSS3KVM9v6kMGiLjXp3qzgZrgsLceWUnL",
  "key16": "nFgCKws27H1ZUn6fFYAU7d4j5Ej9eRRxuvA4L31fvDFo7Ce2aFCyreLdAsQhcifbRA2hPqSL5bdv3q55sZQpQqL",
  "key17": "3bKqoU2whaQ9UHVZW2sSdrkbZhGr8AjnrCPinhmqawxAxPREgsQp8Aow9zxFMAEw2Er4fSNdnqacyVLbE5YjcSt8",
  "key18": "5PrFNwJs4BHZfrQ7oGgwoSzL8zwTnVx9P1QxMxWCmTHdkV2F5RCZVFmYSF5viSWbdKEaEvyuvCnZmwCyNjrBzLCo",
  "key19": "5QP269GGKWzrQNjKRLUPpwZ2iYcmeswrHu67Xje7XVJdHJZxJkEtP3XmqdFHCdVMcQkAMhsaTjYYCGjfrxS1UENZ",
  "key20": "Yw5d8fMUkRPUt9m3M5fGn6t4a15Tqr4n1ciQyMC8YzPgsBGAE6S96HYhfoELTrA7PTMgx2F5NdLjxARXkYr2prr",
  "key21": "2msB99eXSatHdoKnFzVUoYb4kgCazwsRmTnp7WrsSLwbMHwuVuvvzkYdg8QJSUGFUH5rjZqHFJqxj49LRhsgD5ou",
  "key22": "ofHMpqQAmByKK9zWdNdof8xA9JQFiVfpPsBKuH15qpejp7z1KerSQhyQ8S2aQvTGcGZgzgjrtib7aT4sLjjXUoF",
  "key23": "4xFVMtP9onzVy9V1aJg2owV9WVpSt2piwygf9EmcFnYWu68HXz3yMdcCf8VNUzy5KJYYmYxshiaGJ5Ckdr2hFTkG",
  "key24": "2GoQsyzcucYrpCGERfitm8BJxwCiLNsPMw5dfy5cdAtGcNCygCWM7pa3DUgyh5NkmVhUTMdeQCrk2ZZ1Ld43vTUP",
  "key25": "2G9SRDYrUYGjgApGgVKmeeh4U9JT4FgsjuW88uJdqVbcb4MBMqVWwH7itjqRxvLMq6njuM7kiab4CaCbkPc5wNqs",
  "key26": "2WGSRueyYikfjXwqJdkUgJhmLn54eurfYMRCTmejBGo6876LGiEoSgXj2rNapi31gHWhCRUEY1k5nuwh9CgU8Eej",
  "key27": "3Uq5N815xcZZ5NbGftUpcg59Y16F72MgE9YZh8gWcxQUu8h1bE38MfkaosxTjFHDSMF9Z3QZo9ENTAKvGzA2hUMi",
  "key28": "5w2WGZSg7TQdqdMsbvLmiSJugzNRcWbC8j7RAFY44nnv4F9swu3wiSkgw2SJcQLyePAmy1VvdqnuPrEUgopDn9PF",
  "key29": "5kxysb9m6yS6LueSevai2ZFtGmCeH2j1YU2rwdn4iNAA2bfP77KbCPzHKbHAiWQYw8PTpY25FMbHG6srxe1wPJT5",
  "key30": "33bkhggBmv6uJVuGxB1ehkfbkYuMAVZCbMW1zTVJV4Ud28wSZVQxF4nR8nT7ShnL1SfGn6h2jYhbZmgebuvCujEP",
  "key31": "52RMB7mV2MV37fmEdyuC6dEX6FUQwK1p3z74LffNJZYzPd4ZeLSApwTybzBSGSdcSmppwdG2JV2vEbBoudLUARRk",
  "key32": "XkL799qXotNvvkoJHfCgWUKJoUPg8K7gBfMf2fq5Qu4BB6aELgzJDUYGAzLNAqZXKWfLjTZqvTvvBRGrkAYbrTV",
  "key33": "ibze9PbkZtbba3SoasRVU8zVrUPzFTVt4VRdHCGtYL5J7DcuqEQL631qgUvtnkrsZM54cLQdSWcgQaWrKipCs2n",
  "key34": "2bXPVoRY4gi5raFprVJFagch62VEPAQN5sazbnwU57xgxq4F2aBtGDUwCmhNeMWEPxhXZ37Xy6sxKD4s9YRmBPhs",
  "key35": "q57NeUEqGV7gP1taZnmiT6faCmuK4aZdEMvWUo6XwbVKRTH4cMsTLoreK5cqf3zrHEtVDTvrdK5zhPpAoQe4rVm",
  "key36": "2NSqs5zQdKrQfFpfAW6iHEnJgumyMdarbBAg9vhdHiFfyWQxaKtAKLkLETuUXgvwaQXMncXnLFt9tvzbHmf7jy4X",
  "key37": "4R9qUy7jbL9CX9ihjeVevu4UYypQCMFVQcGhYbCg3sdXJxgmZURN2daixutiCRYHQDdq2CK93ewdh8xBqXhp69aa",
  "key38": "2t3rLdFxcJujWSAAXdMa9cFJKZVnPL5GdpreuE3aEfu2AXihb7LH2jxNdeQtt3zBxLxHXCjRj1GVdfCdmrWghagC",
  "key39": "3J3AUi5qXtPcVnuo7AWxBxqxdP8thu6rnf38j274M167V6Moonis6CB4DPGbip82dBZbjP3ycrmhDLVW1GM6BYXN",
  "key40": "5uj9P9tyQ9PygwuqdWRFgwtKBnZyVi1xHo2g9NCRQW2pjuM8UGis9kcbrJfih7ryefLhtHjoWeH21adpnaWCvNc1",
  "key41": "48HYeSEq1VFcryQTqQxwFbNdYt8PeM8Arv69YHD7poHTg8FtTYfsYRPL3TmM5rytyRJMj92yAU8pq6MwLp9i56yz",
  "key42": "5uH3MfDGzMzZnW8XCwVQhP5UmSLBMcFQeyiseS9rvqQa6JaMUdgL72gBf41RV5VHVtUHAVkHGbd66TbyE4E1PwJF",
  "key43": "5EcevizHdxihgB17JfQJYg61Zte3y1Yus9RHBQpbwwC6TJdb5J1yYpxMHZdDFGAoqscXwrQ8LAu2rHyAU2JPdSr8",
  "key44": "2TQVhz6nhCdNidF82wxEHFdmFssGesDBTX5yQwKLcQ6SLwZzoZByrcGQqguekfKzbhD9v2TvSSPuo1h6bRtiwnmg",
  "key45": "5G3NXK4VdsFJV6ibiwrjcghFttuq1BwMKxZWTxFptSnkq25u1TRf6cWgsWziaR4yKwLJzoTSHizERjJ6MkYFQAKm",
  "key46": "2kU9e3HqpriJSor4aNviKrQPF6Lst4jF83C2Zn9vv8Vr3qvYPQTrK1CntPjPHsqzoGaRqVWe63RetPQuUDkgDSbi",
  "key47": "3MQxwxnYXJTGNxkQzb6zNTYCZkaxUHWcbL7cUE43k9TjVimVAD5Y1T2yzJYrEqq6hiPgpH7nv2ShX2sFstarkHzt",
  "key48": "2GZH93NB8s1ua7vtbUbVZtmVoqHNZGSKJyaoegNyUXFr5j9SGKNFyfQJ44Bqr6Px9XTQ9HUpV4qvf2fLaMPkuzu8",
  "key49": "rESTFBUVraEUSxn78Fxd5kCZFfoqqYocd6NQ17XWLbuGFuLGt2JeUiKu6dLgo7HJiEMLv9hPzgvLzgs9PVJBEop"
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
