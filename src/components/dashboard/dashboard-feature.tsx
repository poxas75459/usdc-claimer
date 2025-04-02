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
    "3H6cobibM7dcs2ip3eZ4s4xBwXskhnk98X7ZuZVaGVLumsp3VsJ5nsNp6UumePbA6EERasmAeYWsYAwQA47xmqhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N7EDTNuQM6qWeLC8osRWRfYbXL1hJn9CmXi2z2t5QrYszQXWmvwSkY3criGWF7MP8SjVdEu4xJSEcmDcvhrHwkf",
  "key1": "2hQ65phUp1w7PWHfXUWEU5cfWxZEgdTeNwEiSMEepyzAAiyFyT3g79ipuFLReLUnk1fDAtN7i52cJ2Z2QbaqT8cf",
  "key2": "HLTGibxzaDok9qVvz5ztNbUc8qYZuxC52ahGJp2V6Np91AHCkSXNU5rxvY9tWuv27Q2KhsHwcYywRc9gBqfsY9S",
  "key3": "3aTjtNbAkMZaFGKuNSVoJNdzy65tYAhAf8qpSnjRu8h9wpro3h69RDK4TT8GuwNsPFFi6p2wEJHSBErTE9MvnBee",
  "key4": "4u64uEx3AxuBC8aVTFVSnwU11nqgfy7rxv5jMBMBZizafG37tmBA7sbL3SK1KuuFb74KH3WxvqGeCGUyzcZnr8Su",
  "key5": "4bu4CvfNLpJBCDPTiGB9cpXdrHR1cunfpMHcytLeqtnkGP1UXPWcjntdKVkRffn4cdBvMYEKMVkZt27pv5eLjy5U",
  "key6": "9hHdxbCZjad7XvjpcnCijoYYDsKBEk5VVfzQAghLqKE1jw3sMvsUXaCmEJ5FR9cK3Xt2QqSeNkhuSNiL21CQjTc",
  "key7": "TK4hASM5zbyg6FaKK6uAe4RxA11TmHs4cK2B8Ay7MonguHqcX4XH8AtBXy2xKvua8tkeBBrZMcKqVakfQGGUXTp",
  "key8": "5k5DeTzz2A7nPU3PFFmx7g99jYVsa4uCjbQ3KmE3GZ3C2imM9A8yBgRFghaiiYEDYFUPZi6pKgjEhtdhtBst3nEQ",
  "key9": "3ZwUsKbyAYAct2sD1f6FPqBZHJ3VhRM2rzBg9zQbAt1BWdXi31xonse1X773akvB6wjoMgmuXjy86Zc1w9KrDvvv",
  "key10": "4tbGsANe6KbM14kAo6S2cCZWtFRPin7WG3VrPBtxYPLGfMr3jvR4uco8qg6aRokJV9mL5vQ3gQcoXBjimiAfXb2E",
  "key11": "eFR163HMAFhC4ePibnGhg7ShwpPDdB6tes7PMUa1M9rtvGY5GiAjPZS18hSmyy4hpU14Lrm2drVJexHKF4Pdu4R",
  "key12": "4GXdrVMBKkeXP7yo3PanHyHdcccAPJcVqxKNnTZEMkjbZ7MKymGBgx5wwMTuAbonMgeRexubiPFikFhw5G2G7DGd",
  "key13": "4hD1U5C658VAqnyPW78D8oFjcgrycWBG1cMDDx3DPjmY7YqcpGvsF3x4ERJzG6eJbD1PpwRsrKEjsKqRWYdzMhfB",
  "key14": "3nSxTqXwcrVXXH7yUKmUByDfaMuXLgvp1jx4v4QX63X9mvM3FTe8asxC73ZYJWRw6zpwghppe6QRvWYN2vHSC6rH",
  "key15": "39Pwe5fvSLRQVHAbBc69RdgvQ9q31gqWZq6EoaHBaxJMRv2bonyNakzcjvH8mpjeepdgk96hdHEYrEyPoJDBKoRs",
  "key16": "rWLvBh1DHBgV3PQJCX1BBJp5qtp99ZxYpBhXqpBjY4suaW3CdiQyC9HrAeGGCKw5W9NWSZzyjq4NpVC63MzdgrT",
  "key17": "4PZJtpNKuvxrxTdL43TDNWKJeF2AKoa2FSBVayzqGvS17Rqfsmz4yfJNPucXAdEoKUmeA4ZwV46J7fwJMXUCJZw4",
  "key18": "5tedFxc1e9xd6DnRiZqttVpMCTsDFGTTYPibUrKHwYhJbRuF1dA2kfwLQZCwe5wDuspAjedJ414yiRVLRCujXBXj",
  "key19": "5B5LwoYBR6DWqxEBp8Zs4FCCTLWrPX9vY1wd2FkAVZoNxzHZLw92zJGdHetkrfFbEHbZXPY6dcK1q7hKR8iGZzrd",
  "key20": "48vA4d5TQGAVkiKaHBUXiHDbQDFr7ibjD9C6u4E4v7X7ApxTJegvXhPso7HEQdner9Ks8LYzghQ1W8djhmTGUWSn",
  "key21": "3FRpXZ7DFkYrVWiccMxaQoyW2X9Gq4qRWRhnKQfRtDDud6vNheLauvwFPghtAgov8wdsCXuYL3iJeKuYynK3GsMS",
  "key22": "vsdcUNvWkPogXbMSbp7jNQYQu58cByRUb3uyWAh8wK9SFvCEwPTpCXz61jYDnrDbPt4BJcbeNW75S4tspAMJft7",
  "key23": "qZj9JvNXXKyqs8vGPJqQZH7oit6LuffxZYJZ9uiTqQsBzzRZMJ2hyCSmjifMqPR7NryApV5YfssgHkWGBeBzxT7",
  "key24": "4xjty95xPo4kjMiRWi5tJckFfmQvHfard5Pj7vjnGyv4kCtevA6vEtyrUhFmNSugAbmT4fW3bqAG1vPwsTM9bUUa",
  "key25": "5tCSCdsfa8FSnV1H54uo2GAEfRGiLJWpyaPD6rXhMNS1SeomvL28dqCPvpDdZUtmAXWAiGaPsxq9rMihDxMW95Zt",
  "key26": "DqzGGNTTfUCQLP24GexdTvBdSRGPFi4BZSPKveZMRgS82AfpZT8boQKkX5B5T8hioDi9FDBSguF8UoKQBJoQLyN",
  "key27": "4sY58FZsnWcw6EXy3MpG7EhirEstRjkhLr8qCAPq8pzuNmSbbsNtMRaCduR7L3Hitxt2ZLyS64e54LkxYQCB5t6H",
  "key28": "aafFhcPeUS6B4bPLPSVBLAPv7esxpkpHQuLHxLenmrKKUubc7zXTTyhVtsFX7G56KaFbEsgcJkru2av7WHZnHYv",
  "key29": "ZJsozneTJ3qqzVxW15KthJVprMQF1BFDp3Y5bFg6ATqnS2zAArCv9z7Cm4UgbwfGBjUq4Ztd4qv6ttwHYKXP4pF",
  "key30": "BogaJrkFE8a6Wc9aFrRNEACUYD1eb9vobvrZ19b4Gdt8XXh3nhQn5obdm1SJ1UEyoYMaigme8Cd9GbC4abYYA23",
  "key31": "3v2xyhWtbCppyt5G7gbTjDUjZzSWBke5LAYu57G8sbuALSmZMyN3pASkvtbbKzDosvHBMnYRKehD1CJCURdmXoeo",
  "key32": "vCntK3JqUv83E5MRb3kG44aGaZEY1zu2ooyuHnace2aBQdn6y29ZEwj8QHKpiRuWRKxkTqP95g8kY9R3gpBBMhr",
  "key33": "3zLDEmKKq1HxitCzZrPVKHNXGBCKNKQ1pmoT4Rk8yBeQDbHS3vbyfoz2emibgfyp4Syp2QEsC1Xstdv18ytFBYJy",
  "key34": "2TqTA8VTZsLyxy3VgdsoZPG8rk2nEE4TofUNJo5yS9usywuaC5dMH7Ps6bf26on2Y1jEQ7SYBa48g6GQCivimzt8",
  "key35": "5YFsz9ckx87L4X3Ku7tjMyBKynA9DVFX6c8DUULQ66hyvhDRxyAxiH5F5kyJB9exLvTbLEELUnUrsFBdJ2WdauHF",
  "key36": "4nj7ezDQjcRMf9gXAC9B56kS1M6H5CDQkd3t4wu42SZfsrguxnGwY3YdgXe2TiLt11HKpe7ANZmbeVwygetqLuYW",
  "key37": "yY3hSoevScQkJxize3FdqDCqmyfFN3YMrQZYHJnFbAQpHgto92ag4eQeo6wzP9Gny7QCDxvGLvNEP6Mk2mqhQaV",
  "key38": "dUYVWhReX6XboZ3UJutRzZcMJqVuVpB1KF4bdexBKVNvBQ5Qvr8gnmqQDreKiPsLaMWeSaXnFMo4rWmfEfvN1FX",
  "key39": "5x6VFHNhJFccCezxkFkhb1ZAtEtYK5jKH4TRTWpxqgT3KvKzdMUFqx6rZE8mejY9iojKni5RCsr3BYMysnCELADC",
  "key40": "5QZ1rxtXqNmUZEse2gVvZSf51eMGgnRMwBRCds3MvHTX3mZCtqtuzE6NLSCXcbuv3EYctmt6TmznuS5idr7xRvZz",
  "key41": "D8Ro1b9uA5jY2Bi9BPWtZMf8o6APGqbB8eee77GFZxmfSP9Krjjm5wxQAJfYcWa1TZeDrqQ8mPivC9NKkLm6QK2",
  "key42": "55hKXiAZGYJYw4AN8WPWrRirqtiWt7rLLRm9QXsWZ9yKx96agyKwXNgcSNHbTRNMG9UfExLxFPTAWwhHSAjSeLar",
  "key43": "4CpQPe6V97Pp19SayGqc9RMtTkye4vakyLkS4ctHKiktWRFvyB4t1NgphAJxHNmGE5p5tq5FFa9ytk6bWNUaSR17"
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
