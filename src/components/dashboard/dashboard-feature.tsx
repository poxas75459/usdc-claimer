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
    "4GuP1wxFMV5mvVzHKmUC73BjBo1wyNLkPmxPvx28zrPVS7KaTyymwdYTcveZusNDRXhexCFTEGDYseEwhMF5JT5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55chjHgs6S3qS51z7ZeNNZDCmjrqFe3hxnC8EUnPhqFzga67ab1Vx96bYB5PU6RwYfYrrCnjw1q6Migy3USRK5uV",
  "key1": "3CGjsJpqgd4haaebBQgaMUkmmLaS6Zv3sxTcoNxkAwX29LzFmGmeVhYboAwqg2TErpumfrRPDvYQ5zxoawRQWf5c",
  "key2": "5cDUwz141i6i9LZVKYdZw43xwXcX8txrJCpdWHQHtPYZ7ca7wBfbCQiRhKqkZkCWTE7xDWShLRuoH8ATLALys9Uv",
  "key3": "4YABEoBskYjoArAurNGByFy1rCLHW9ca7gWoiS1KVWL3pfGsx3Ek5TTRaQsZfHznP5Xf31xpzzoRwbQQWXNWUSbm",
  "key4": "MDz4owzM5ghA7VdBr6mMkSuHqrwdKZ6XADAuHEXAVs7oMn75bRWSCRJvYg8GM1v8wrr6XaGpvknp296xFgWgn1m",
  "key5": "3W58ByuerzgVKH2eJ4Kgsj9NZfgycUWHS9qFaGa8XL9DS7odi9yEB9P3yqitwbzicPutDSuzNgDC1pHoGKCUMUCM",
  "key6": "5hS9Gb8UvvsaWG7iVCikGehkeabYSgPBatZooqUbUttDhScpS4rRnzuAopLTfeMvQKqBGnyJHU3Aih9FPPX8Uun7",
  "key7": "2efb2i3GycJxJtwiNTRFqw4KpVjidSg1itBPtRL8qT3BGSzHtJZcheAJfdcpbzJrnpzYMnVCLfADDeu7pbhJz6Uc",
  "key8": "55aPDjxyVoDdxXQtE8EB1EBwNvGGyMuY6FST1Rfcr7av2fWmi24YKuCH9ZqmpB2tsPki5nAyMTqtbiLyNThUcDXb",
  "key9": "3oom5TSjqzNXuRNkznPkcEQftpUit5Qz4bdy627aEVu3SKpWhs447RAY55GaXYzXL7tCjJCqAx8qdAEcWGyrnfEt",
  "key10": "5qgEmmyHaKHijDjnCLUE2eAsUHiiC9rPu5wEeDyvK3UApxFDsy9PmDz3yexANMmXrPYuZiZRSpEJdrmq7vbQf8FK",
  "key11": "EoRG2RNprtGUezu9phXQA7uy5i62PH9Uebwr9DuG4YNoj3hR9yPB2CS3R28QY8JY1KXAftpqhMtHd1Ze3ybwmn8",
  "key12": "56ZKohaaNEoFdPwNZW3251TxQa7eb7yaDYhdDt8yhdkcc876u9Ws5PWUjCDvuviqEpzQtKcqLWMX5RXtvbM2AR6n",
  "key13": "rRgCGdMERGuSLA5o2HWwd4UuFgm56BeAzgD3pXKPNCybrc3DxsRXH4ejSxyvdei94x9XHxLLGRtkZkSUBpBbxgf",
  "key14": "3bJ2iQapGPDoZgLovouF8wNgNBpc8Yimp5SWShD8uLh5JXBkd81s9MmaHTjDzRQvjme25rLoPa8pePS4AqFB7Ze8",
  "key15": "2Kb38gynkw3dto3mbRWMhwJti3mzWdNnM5Dg69mACpPJid583RkWNvo5jRArfJMU8xZZpf7MYUxJHme7Nw3cJRia",
  "key16": "2sczkPLY5sDmJ2XZFTC81mRVkxzLpseddbowjiqcXQCiP53ZVUdaffuLdozxDEyfczUGf78i5iNRAfsPZpJjDViF",
  "key17": "4j5o5hPjcABZT8DKy5Vpakgahyxkqqh4v6wktbFjrvDUVxp2cxxWXcNa3ezdDPtmrhGe37Ua67TvcxhSrqVvbVcj",
  "key18": "3K52nFMis2Xhw2FWg99ZCHNkJdJctQ7ZvZFum61A9YHa1PNnVCPfUkmqZUeZdRyjChzVSDvSMvkfb4Awi3tJmn98",
  "key19": "vg2B9ZjxvfgpRGC81JjnVo67wF7W8CPNbqFEmf9HcHuK6ZuBMEEZfvGDoxCTAHATbTmV6CcrAngSsrjbMYFHc4g",
  "key20": "AoTPVw432xJjmtiDBNQJi6VGfhSnUSBgeNVWPdrdZTWRTDvBd2SZcEVn4M4roDeXWUXyxEnvZqdxxfe6K3fQGz3",
  "key21": "5SauQLFiecKf1nCN6UNqeTn3b51a2MRXYZtwSmi6qPJUrijK74rN3yDq7JDywBj25u2QGd5ebfXGGX6uibpSPM9N",
  "key22": "35YVitVy7imQbJm5MZ2diegX7o54Gojfwmnk5wxeDD91qd1YLFB7NuNY7gBn314Huyaxy4ivxALz42C6JEBYwnoQ",
  "key23": "xy3nPEosKCdNZEJWopBVyUTEHjkG6tf8wJTVnKoAogAiPjvsCHVvSJR9DBoXtoktMgViUsf8w9fCiocxQgqnseJ",
  "key24": "97d4NnrcnjTVzXXRYCxKfXA549PKjy5F51cmw5p64NTay6Ab1hYsNCjeNG8isyuwQE9fJUupJeBEnUZVnaKApd5",
  "key25": "4rLWLPEdZKBYHJnnfJ7PFaifaEst6j9GPgD4UiPFq3M43C1zihrp5z6LJ15SVcPMZvu7GBE12Yzm7BgaFA76TLrf",
  "key26": "67WuHTku6ER2UfCZYzfYS2wMbpkpxHxzJZAbA8qrsrWk7jv8qiLGJR1JQXihdQpSd9H7LHPTV27rNWiX7foRDccb",
  "key27": "2toihotCvhdoY12nGzGoXk5pGGpniWbwqc4UYhyhxEG7KE7YhafGazxGQDMBX78WL7MGp9mvYaThZPcmMbogBwuh",
  "key28": "2bPDyhgXHghomUYyXJwTm72otKiGXr1k7XMSgzmYq2UsV1sU2YEMgtQLGFETaZjrcasHaZBknors2iPWZpUar9LU",
  "key29": "2Thx6GoU8ojhgUtoC1q2N3guJ3QX55V1tpZwVorZEP4JMxsM5MECjAnuZ82VECbBLGN2TfBpqW29sJydVsM4DANv",
  "key30": "4ka6pPrhZbCFaEattm2GAguPyGmyqwv6B93ZGogeG5HvABksoFPx3Ryfo8Z9B6qRQngQbDxkHNvDXBapnd4DYKZL",
  "key31": "pejEN4Fj722WyzSzvkWbfpMwrKR1DQAgNfrwzitiXxnBTFWRMpEUKqUDd4wVmUKfGkjjydDs31f7oX6zKt3LCNZ",
  "key32": "5wFBqCBdb58CBRC4Pk2fLo6k8JqaUWSuD6CU4yoXHKj5twCCPerJib71yEefRwE5WKGsMeVJ7Nt2Sqrfh8yT3xz7",
  "key33": "3rQHkWKiEGNmFrpqYBMTXdKZU2cNATRD5Z4HX8pmMd6mCJ8LvtuD8xSeNtQZeXCfzZENo4ADC5XMdLJMzWsvpw26",
  "key34": "2jbYa8vMvQFLidXBEgrgoeDvPTyThgWphXSufR6eRu3LgNRdi3p6vSvo9NuGmSbmr8Lm1NuduZYTQWigQAnpf9ox",
  "key35": "311nq8GrTqivrmcwHqDKcwknVF3miKuRmSVrDmNtBQanstGGSU2PPKZKqAWQVTq8ABC6Ydk4TXbqURGm4U7qwwwz",
  "key36": "2a3GD5pVbPdHHfBNPbxcUiZahZRohNHazbV6BqhDuNeoJATcwGNUacmnbP65JNp7jePR2d6XV68QnR1ySnaB6Meb",
  "key37": "2PjKfhRFu1VyyLe4fXkUmsUXARxk6YSRcCiib24GoZZrUMVYKB2cahY9MWqu6zcDMFWk1w3pGwYoHnMNJna3afT5",
  "key38": "5u9YSSr5cbxvLpPmFLp8LaSJANLrZBmSUGXt9ek47K1SEnXRj98wskQASPDYJUt6C48vbBdeAH9vxg9n4ypGf3o",
  "key39": "5GJa2B7a3BM8JY4UJ7SU6zB4MinDYv2jdhBz3sNCYT8ozWreTVyPj9Kpu99hP3JFXRKVCdPuiqzYBKhvP5jJ1fMc",
  "key40": "2jco7icSuC4g17m3UKbVds1C44ppVtPQUrzw2canT6bUkwFKoSySriukJRZdaAV8M9BjdFfrQfEsghSWZuMvbSGg",
  "key41": "3p95sgqwnXHJSLTQZ3mT1fTX4ZoiW8JDCwKtBGbBdpB67BSXWYpU6e73D3P1N1sE7QiSnEwvGtpnJcLxjJCBLEJY",
  "key42": "2w9JsQhVfF8BYB86mWQtGi7kSsyYLpXpvXRVwnbGBsbeKiP2RFBoftZ19E27aosMw4EDrykXz2ehqqfUBKTak2RU",
  "key43": "5SVJNuZVX6a87HNU95MDw9ZJcJ5MrL9ByV9W85g662kqQxzKGVxk6ym2BUEfZHAZYqCD4xjegNBaFAFUw2G2pYcp",
  "key44": "3HFnFMua2V2mCzAxLtbwtLLSueaSdbs7JMEErjrg1bo4kuhZHDRkL6bk1MC1dr6g91nCXY1kpRp4B7DSW16ZhhsL",
  "key45": "5QefKPBMwjbmVczUctat4vRrgrVRKxz77S9Qu7QcbJ4p5v5K2K5piQUX5BdhnHEWnkeAUaCXBZpAQSq2inSvZjqB",
  "key46": "4ZfcZo9tZoS7ETcaYhQHuZhPaiCESLLZsY6N4xTULw2mvkmb1EA5xUUd3iP3tchqT7DiV2do67yqqAQ8ih7Wq5sV",
  "key47": "5gURocM22wm39d49zAorZByQ3qbxX7qwYUPqK1VvBxLVAt9EE6Ecsj3Qrnh1q63deCyd3WsqCjBbbKARp3bSNf2J",
  "key48": "3A93brhK3PsF7uXKjNpoUNHvBADW1Zx8racPu7RKEspzpNAEY3xSSefDScUV6W9vsBpL2qqFBxFRaZWtavEaZ7DL"
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
