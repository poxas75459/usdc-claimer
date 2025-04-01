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
    "2L8n1hjEmRWeyzkEY9WUkNaXfeWedkdaAzcREcHR3MyKupCrmttuSKusExAskss9knrd4GsnxwfMByZjnVTKFxLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CQYQxZqzezSuKoJGJ9yEgsBEirfMuL8m92xRBi5cXecucDZmXsDf9idCUjHVd3WEd38jgJ4uEqF3DDRDmMTFJKm",
  "key1": "5kegfKPXzZX8BEFxKBdFj8URy5dKAQsAwoUTYeGHmbQhTHpqKt1WP5vbkafzP6tLKEuexwKiAJV9KwSBkTVdDdma",
  "key2": "oHs7mkZVnRH6ZbQ83qRRRMh8eySK6dzo3TUKpM75cm3obekrSNVcLZ2kBtJ7MiFv46g4CikgpxUpzt4Yi6bTqj2",
  "key3": "5YU1aNgZvRz5oUq75Ht5XgV5nibjtvAXMoLVGhafCY97zKc2MBEhVCVZhY9ochguKnrQVCHQdywwbPZYALnoJJjZ",
  "key4": "G2vCX856xqqtp3jAhRU83MyRX2KokabtbRDRL4ZVPDCoiHVtErVnJyP9eTgsAw36V6XqxMYTWG8gc3pGXRdUedg",
  "key5": "4mpCEh6u3sQ14ZSXhpMdwMrxqRSLdjvRaUUT1CBGqsTxpZ83Bi26PxdcgSf4Axe6CA1mr1xQThYgmsjy4S1N4R3C",
  "key6": "2DxhMZUF3G6XT2RMJxa3jhH5SiMBcC1ovr4TXHEzndX64bzYXcdXmpa24JQqhAzg9nFrVsv2fcTsxBu8Ya9wPXAW",
  "key7": "4vKNWixAgB8tFbLReu2eLnBADw5BT7M5ShztsJY9iiFdBte6jdzULkG6YBzVL5JEgQw2wvziCknmSZx17Hws1zB1",
  "key8": "qiteAqwWPZs39nu3jL7o4PHj3PqXuDyX4C9NkurCzUaKmRrb3mAdW9FmSvv1QxhWyw2ype36cbp8xfruYUVYyBE",
  "key9": "7SUg2Q6M4EGmkjeYbDk8WdGnMCtEVAtw9Jbt8HVoUBPfUq2JzRMp5gi6ucH4exgjGSS1Njevy75ErHFJ2iWMMzA",
  "key10": "2ew8agJdCp6763o8RT1nRkpSiCWjUo8pERhsom7f5gAkDe4g2oCQdd8YYme66f7nNbvJM5dsaPixCfYy2Fr2WxW6",
  "key11": "2qWFop4nSjjutA1LRuKctwU4YXrbxDbRLvVQBtdwtjUs2nWx7da3zHUXCZND2uXF6MLFDRpxeSU1B7FvS8atrwrz",
  "key12": "4X9NRU4xhw7CMJcXyfkubYgRdjoo9w2R1Tm6AeGsNxgHhj25fQGdcmwPsJYdWUWYSgg7UFSaf6oLQVKZaS1qkgRy",
  "key13": "4Sk1magrhd96sF8FoMau56CpETigYrsSGCAjZ2WzZyWEE7kA7e3mv4ydt8VRQMnFbqd5pyJUsxEMJ58mQhpzTQ2H",
  "key14": "2BS3dwiLLDEZtSEbRfp5HWzyAXHnyvg1csYCmwX9mzLgdLk26quGHu8n2QT5a4UooQFGqHGNb68o8M4jVKK7HTfF",
  "key15": "3JACzSaPNnQeTYvyfZjdTJXSAgxmcTcsd7svhjNmRLoaS7jMkCeextsZQvAKdnouRMGiqeaJ3JBtHFnJ7V9NYQZt",
  "key16": "4pexRr2r7SZQnMrgFyQmgrWA2s3nJexD1gp3dzFUzJRTtQ1GbEzvQFkr2i4iY36KmdWWdGZQxi6bLEAiCa2zJsQr",
  "key17": "WcQjfJYvjpXgNNrfELFjy54xwyjtRqdxBU8eVPT3x8qKqFFwPrZ7aSJy2jGEugJQcCKaebVYS4RpnXQAcxYqfE1",
  "key18": "39ewtHpNRmS5kmDvb9y4cSFvn6RpCu5adRHkPKJxnYLhrA6d9j6RPxk4jvSfMaSq96dBkEPL5wxozQpokSnwrjpo",
  "key19": "ZALBwY9RSiRqddJGYBQHRisAAVWfaMqfF9AhZnhpqvLVpstXR6DiWa2RxCcKdB1m5ufbLnae4QHQptNmYnMmJWY",
  "key20": "4GoMbTdf21Zx8vC4J6PuRJueaD9xTsgcSXruV1scLFHoKMz2AqBxYsmfeby52jXWnkU8rWVw8PR6wZghctFo5wA4",
  "key21": "VV15F5N7mSqncEw1G1SnhkfftGrmhVHa35FVqtddEH8zLyGewJMmowQsdhHtDu1FwDHkyMaoKTgKf54iX8HREWX",
  "key22": "4B62BH7shsLcARUoTZQKQZWk121m1HrguyUn8y8M2vngwaBEWSHwU9ywBhrxW33D9DwRY1vBqbTHdz5tXCQhw63U",
  "key23": "4wRRAc2Nft8e3fKk81baeUeEgfAT7oKavLQpouxnNKpBELKAeBgX2kbec42nykEWyQtBonpkeNHpZBdbxpZaAxaJ",
  "key24": "5QSamSKfPRv2sifEqcriy6y6EeRJgfteJg2aXajC3t9xTTaFo5oHFgS7jpt5Wm4seygMS3KRPVfpPnL9CKbzzJ3b",
  "key25": "2pnsJDTQVnctGgc2x9d33kyCpxjsx65cKgyinHgeBoWV3hCWtTSSZc5i6dpefTs5hKwH1vnFyCJjpn1PtQrH6iAn",
  "key26": "2YSQ2HQSB9QfffN1fz4J6nvay7XB91frqBso1XtPsDTFi1oYNFYXAHbkAt7Y28RPAc6DzTd7qttTVJFgdZ4c3daS",
  "key27": "2V5yJK2pEp5adq9hqWoSKih7sDvcxLvGcW3A342Fv7zrFuAPkhosCNA5SAqf5AJssTAhTwRW226povXcD5MJVkNr",
  "key28": "3fYWRgyeK56Xt9KRoJEmSwCBrsPWME6ouvQvkgjH6qUx6PnQMaXN1tuCQjLuUdUHaoktSvPvJ67EWBz31ZyLsJ8N",
  "key29": "4b1Ncb6HBQo3zghzKEtfe64m3Zp37mnXNwMkkj484SZCdMMbuRh3YDnYPh2DF962m34xZqBHtZpCoYLYm8s5Nwd",
  "key30": "TNXyix1BSjurpaMEW2VyeSBzfWEWMTD7ovUZHAQuG38ZHyPkFZdBwnqMzVZQCnrYE1pC5bc98pk5yu6SvVpaUmm",
  "key31": "jMuA5oGXWG8PZbEVLqEgDBeV7iHaQ9Yta6nqjcpVqiXKfcBi7XzdiqbpaUdUHTjnMwqZTUp1Y8cVeN9zsMqAdex",
  "key32": "45aKg52MDw4R1m5EVuWF9jGc9J8Fm4GS5BHc6fGuWA6okxxxJgT6JBmWVr6kAi7GEz3RvbLyNqdh2yj7es1JcTzQ",
  "key33": "5Y75gCUgVuuRYFzKrySgDh1BcqVLKnqmxe1VwGD7dZGYusgAems6UeU2kFR6XnuDAKcuoHzfvKyaFU1juXMwiYHm",
  "key34": "2kn5PEnEADUkeAmuRavNrQ4NkKao7cggrsonk7VpQbEKdRXW6RFCrYAM5r5qbKXRoV2bNBhncC72qm4ph6SUhnaq",
  "key35": "3BTZc9w2riuxeVFoxud4oMaj2L61q4BfVsjrnm8nykVk896eAg4E1EHwu5RDAJcU8dCq3MsnQPEnvR8Vrawwte9p",
  "key36": "28xWXgxSXr7mCjg6syoswnkU2T6aZMTwLN9FntKKZrZuK8hKHCdETerotemPVXwPH3ghrWDixspfNjBxpVgfG5x8",
  "key37": "23Jzn8GAjemn1wyZ5rs6HPtqpsoSaMbfLQ6neGq8fUWBJFNHxn7ZMFkkitVc9SQQytirw2QDsCGKxEcU15AahDRf",
  "key38": "33Cb6PSPjpCgE9Ur1xQpbuuRpqpKEFXwuabJ9REdepDHtd9RzzYZ3jSah32yVPyL7tpAKVJdChMXS9zA94Qe9aNf",
  "key39": "5WEd7Ub4mz6gYGTsDWMdveKVAJ6awyUWuCcz2QBxN5NXjMHSahEN8xR938ags7Xnkn1J6iyvX5Zmpix3Juu5LeSH",
  "key40": "4qEM881wHGqijNdGkUVpiJVLKgs4CTrQTnk2w1qKie9xyQk7ZeNP2ftFW6oPK75DtTye3eRhtiHHb519qs5WFA9W",
  "key41": "4a1zTXKYbCDXeNSZFEDbxoVB59AjL4bqYJvff4dSKfjTokgBnA46yLsfdLk6eS63GQPqpBXTzg9TpLURSeAL2VVT",
  "key42": "5BqefsJRBx3PyFcm2Shtu61aL7PdGUeLx4jBUYWKotemPxPakWdMFZGkCLhH5zTxMNioJgqGbXfmr6jNu3SWaH2v",
  "key43": "5GDCdzYqcG8mo523deMGcHLdKD531a56v7hWumWHS1De58my2b6tnPx5m2eNHJzuvGbMFqiZDRcCGQRsQvdWn17Y",
  "key44": "4Bh7TENie6VrTwrDP5h6k8RNa37boX3bvcvzy4bhbFPGr5kxsX1QEaVakPkHKj9DsoRKdJfd1zaZYbg9QccWLeSB",
  "key45": "2x9XuFRizNE67L2yNn4ZHN2ve29ujktaGzbAUc8FaqioeDgtgxYSNamijZXPmDTXHVjJq2MCwHu2ZR5FaHHmgFf9",
  "key46": "5sZM6vRUSZBnzzx3SJFt4e3yRzkTfqguwQX8gtwzpeeZJ4M925DcA4jqBg6ZBUm5xbpRJymQiw58qZLuwuiC8zz3",
  "key47": "5cwSEACxdtA6eJ33HboW8yMQaQPeTsLspPMRLVhVLq4yv44H6LFQwgGzdHmstqrbPDf2QDoHQYph9PHx8n9d3Cao",
  "key48": "3skWTEghUdyLCaXb5X2wkVmZSkPKoZccadKbfwuD3EuYWQcQ2CgTiRGMWSfbyAp1NMjAg4h2qb1WoFrdJSMaj432",
  "key49": "5XA1Jb6PbRVRCyihhQ4VDgt74R8EDDQxFkMr1ZHnCtjx6P5pSdrq3wv3242XL7Y5YAc5Aeh4NGt7QCoD23WkM14s"
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
