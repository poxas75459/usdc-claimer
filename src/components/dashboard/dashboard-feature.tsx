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
    "3wcTDWzUpcy9Mejoi7bo46nj6C4zPhJ6xa5PdzRkGWbkH6RwBC4nisLrhyyrtVMqgp5X12f8t7fFuFpi78jhYfJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23d3JpKSnywhf7kT6odsiBc1eHaN7ounhWcDndjetSELxTDyz54XdxaN8QS6b2J2uhpqFuq8TM1m1ZTQuSU68RPF",
  "key1": "5H4JPHoV8JHRtFL33iSgwrw71oRwRT1z4oRTsYPx7PUUTRewA9zcmBX8HUMD96LJ26BYjvU5NUVsmbawuN7CUUSj",
  "key2": "4bMWGDmo86b9H8uwcJrdgo5CBvNjhcoxsadWmfsgJvaxszk2P49DQvkucLSW3NG4yAuvKGHz2d56iKMvdaFzSpAR",
  "key3": "H1ocZa6cGioNAwPCU4uLERShCuoXBq8cyjyD9CJGu1Js7wa2htPRdC9HfCajTEwJN2rcKaTFQciu7hY3fw4oaZ2",
  "key4": "3FKVjE7XLcvt5UWkbUTvDu5WBzMg6PSMcBWwN6jX53Gt6BvCJiebwamc4ieGdjzGx7TLnNXxmwvFKd4WJaaS9yZo",
  "key5": "2uj95mMooiLwoHEBN3BuNrU3GomXcbzUDTPWn3B6Sa7Dd8XHzgmf6WPGEEtoZi9i9qworaVgmWUQ92LAhvv37WrE",
  "key6": "3PSC628YML144QokmS7dmT3HqQDRrNujXgXL4DZLNvG1VegKZXVPoJTNrCP9o9dtfK4eiAKvtRKyPHiVMzmBe3vd",
  "key7": "2oozk3DTMGWiaP3oHxdoVQiFRDityuPbP7F15t7jVQUKyxd8YsHkhH59WDSAVD1zSGtr7wB16EaPpFweEQcvyNfM",
  "key8": "422HxzwDPWUwTcvEWCfQ9DqR1cGtxmFBEdYzQHEK1nG7evKL7rfGoQsuSuKipaFUtChcswwC53VN83MfdGV6ajb9",
  "key9": "XMc5qgbP9ok1Tvre6M8R9k1urd9BqDWHpEgEP8ch1A4LMe7hd7NspiFhgcDY1ELtAv7qJVCJTESN5ia3BmqpWMZ",
  "key10": "513siPE9zhwCHQ4sn4s3GReFnWMgKgKn9DLajfs5Y9vRCsDgQmU6ZyxqSBkkS4dmy7DG3tdjvbpenQK7fTiigDwd",
  "key11": "4ra1T5dgHHZPAH9efdA2d8LNw7ajXdceLdRDxW5KLPVdZe5dWeo7mCRRE2zNYeRQ7j1ST98UZUJphR4CZ6pW42Z5",
  "key12": "5VGQqyCM7ULyVKgeaPHGqp2rDqpYPXZ6w1LagQo55F6TbA2yXb4NrZvF1xNgobXsLjaqPxWk34F6BAUPRv6GsHVE",
  "key13": "TEMuYuUvRjgLmAqYgPVtVdr1ExmH9riyp4CRDgFMcMbPvWLNvqujnhwa9JHxu6FRYTFo7CrPwQcmUrr6UoThkuT",
  "key14": "45mVHYvAzkrNPMAjff6rJoyQogh8KoiBpRAcQXESiM7gyxokojvB8xAEMgSVVnxuA9u6Wqvbq9Zvf4XGEdzqUDEx",
  "key15": "tjGxAcTU3pSm3wRJz28FkPfffVhv6RdNSBr3AEsvyfquxrpk4rJKqR7TaoU8giZFo1nHx7G4ZrvZGXX3dUt8pMn",
  "key16": "129RxhUKNGkENEbYvoypp4DNDZHHUQ1JENDxU5vH3prniCFxkmxAQmr5Vxrpsu3fezywqhGL7oRe86irYViVW64w",
  "key17": "2ekAL5c1UseDAkhXr5gMA3L9YWSSPu8d9kFvW4Ew2oC6iQTjB1GWWEFRp3FQGaLN9z1dPwRCNB5ewZQVT17SNGMX",
  "key18": "3ZTQQ4buquHhCWsSWUSFirjjQjyQEeE7h1GxsaY5g5MHv2fFCst6LaA17xocuxzZ4AAnQUTHHT4DJFe3VbSxv4u7",
  "key19": "zhrjJdfrJCoJtuHsiWpRqkSuo1RHT73dK2mtFKGtPbJXXdzsb2cceAu1sbbkrNG6ih1TJKmH8JzVBHqPPweBNJw",
  "key20": "RfSt9ZhoQDo49SbPmNcHVjJYCrNBBqEMHXNLDk3VNPjLUjsTYkoRvivgo4bRfKUmNak2X392Yks2EpUUgtp9rt6",
  "key21": "2qwdsHkgmjSnbe9KyZTgSfr19vUgrWj6Y1CFzFJxqUyF5dcaQAckWaUpM5tLQKCf58miGXNUsdZUMzuXeB2EDa8n",
  "key22": "3XD4nyejBfsJqDFygufqioxyc5y5RApTdUUrMMTarLJ1wWTGwZTYYzufTGkvVLGBX3cm2tcoAcBM9p2dhFpvrN3r",
  "key23": "426Z2MiUTBDMAG79jAZamtySSRhLvXXAvH2eRDM6yeXDnwqZZu5gMh4HevVmbAFHk5axZzyrghnpJ91CJp17cJPt",
  "key24": "2it88Wqq8xdUK6jbbXxBhHLhaywQSftjXK3PQtjQXp8mcikswx2ShvFRXXMSe9HpFRkmYN6FDj8Rp5CyUE8368BN",
  "key25": "4Qk7hoePCh7xWXa1UvpCrH8D6Bc6oNC2UkXtftPHSW9ErsnKSrrxDukd1mCBm8ZPf4XQ4YLzovydAs9xJGfAPxB9",
  "key26": "3maJmTgDXypguCg5E5LpVrXHbR5U83piBxdDfmcLvkoeaS47rmg8DWrPrTLrZT4Uhv5AQ2i4YSr7CsyXbHd9fDaY",
  "key27": "4sZ3vx4CWFtFy7Zd6qY25VNPom5QuVcXQjNnxcdszxtpvX8e4FPSfo9BNey4sJkbd8U3Eas7g2LHKDEi9ba2a5Ue",
  "key28": "5kqRtqPEQRhCV59iQ62RYWgJUDEyqJaVeyvPKGBYifQ7fmRgyPQHD38dsENBu4MzGHXBaS7brDY348PrKzdwpouk",
  "key29": "5y2GnKM94aiF19N9AuhqHeCooHcMjtkVxfRnm6VT4onq7BwESKg9DBPnShiFUpMKvKkpZ9wGkqLQwRne1oDVaEPt",
  "key30": "5rzcPCtS5UiLLvarSxNLcLjCs6bGZ2dAr9T8sawrAFJku5Dbshwme9xKahTfMGGKs7LJZsfPFb3ZqNKagduUATbn",
  "key31": "44B92yCPwLCp8rLTRsBFyxdxwuUxNBgtkgu5FQ5F11xU5eJEuVCPmSXUgKNyscp3ZX4E2rE3cgAJEAxUpdnMLCe3",
  "key32": "5DMuPrtgJnsd2uEHuDSsupMGxHUebFMzhiEAg4kdMwZZFhLo2tdVYA1VafCWEesPdpPd4TijmC1RhAL9kFEHpVbS",
  "key33": "5TuRWdmi8GKsDjSQsiV748Tp2KKvYvwoHPjCGpgffXpyhhKSKfB9EtBgVQFWcXfYkiBdH3U7DmD1bD9wmoY4Yz6p",
  "key34": "3PXGVmDnv25aCGAXravjVcynFM8MN6MCSvaf6JfwfH9kr5StojLMnFJBQEEPgJ7hj3gQqAuP9hGHFdMrutDG6cZC",
  "key35": "3CjCvHAupsyC3o99ZrygB48KDe8LsuAErJnsWfp239UMGG35RjxoQvD4oHxEkdrz2qKydPgqKrMW6fD2uzrXVX7g",
  "key36": "3aHXuTT2pVHEQ6B1qhNbjip4Y6dv1Sa7zwDWxCuRoMwg5GcGBEHoupdeR6d97E6ZryedW5nfFS9fT4GDyiAoqhAJ",
  "key37": "NZY1Ksdd9RT1DDJSeSmoqt8nzVG954PRX29cRvGsJGecigJhaGSwUbbSMgbrgUYVuStqr3FcWZydJKKCuMCPN98",
  "key38": "4Nn2ZvtzCZ5zhBoWGpdC3DpvpojtP3YfEVtoaBgDQ5q6onfLU3K9CEAHS7Vpby8YMQhrq5HiKeTFHNZ9qHFucvdY",
  "key39": "25DrExEtvSC5xLGZJFXSymCnTWvarxnUxRd5H2umfr928oBa7g7wXXuFnMcTTcNUeDDRrmgLiUXz892fryx1RjaQ",
  "key40": "DmzzMFyDT2kcybnJzVkqUSsuW1yqsomB4VTuNbucVp7KPULE1tAoEFiX8yU5casqRrnEKttA51jhEbf9JGP1Wdj",
  "key41": "5LTcqaHbqKUu8YLGL4tMzmxKSuoH4VPZBPpqiJntVC2RaaC7sYkYS1PHPbVRAbPe3ZJJchkZWiVD5iRXtbebSVZh",
  "key42": "2mAMGjAJiUy1XTyJapBirakj23QwZ99HkQ8FdGDi77UaSzcuPrYinJdFpotrWwwRXZXhgHavoUYJLPMnwvNPMf9",
  "key43": "2fBA8PCMu1fy5xXCdya5nxL1iza5GPmKrSrtm9jeedVqQKqjPm7XUux2tKtSQzvMriqLrenBZsSgYYXjzKae1nRN",
  "key44": "3LesJo94VRYgWP7K77AqnQAZNqX5yfhZiaFGFrYLtebH4oFchewkYBi8AG1ebAyoqDRj4CMNSEiJuFXiFbMN4E7y",
  "key45": "2UP2ScL9FXPLgGsNYYhT7kGwpr1quebL297Xnwf8K2QmpzhCPUnUvBQsEgixEuna67ZrpyDoH3Vom4xLmMF3jRNV",
  "key46": "jpGSfF5EVsqoCy5wrNU5fxUZW87BiuefdyzSZ44L1ovhRavdRoWMs2ndGQZxTgU7PZU7YUGnu2d99MfTah55vYS",
  "key47": "5RpAxmTkqSXr6PDWTHQdrsgrCaY4jgtc3UdRvU8KLRBUmbK3uhHetE2Jigr2jbEKCvcK6eow2aawkEUHRYcV9MLb",
  "key48": "44Wv2mSSwGdTUXFUCXH7diepbsaWhUK1Ft67nsjVZgrgAsDG4Ep6kLYQMMgYaeMXecV9WqKxRboU5xwu2Baesspg",
  "key49": "544fN3D3r5SdfhyHiAXexHYZZvKAZwK4kWwcxptJAiPDQzo1YqdzTRcR9EwDF1PrJ8bySsBYXCtNqNFkRz5RaxG8"
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
