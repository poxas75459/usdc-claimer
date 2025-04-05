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
    "SGgAYskypSwGHvhwwytUC3gGCLCqiXRSbPAsHbVhaBP4Q4XDySB2QsBaEs4TCsq7wKvLgFU24B1bSYMZxuLn2z7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cx5wvh4XTCkT3z6MUmz7gPPoqGh7cEdbe7aeGXT6Wjs49m2LhHihs1j6u9HtwkEAzjVx41qMPDyY884gyQHLMY8",
  "key1": "ChjTKYRMiqkkLZGyXdxWukKks2tWUf2jNsP45Pwzu5QQUs72Nsoh92m7xH7AUG8aATUta9ajDJYWdK8z4TjRBEy",
  "key2": "3afEU1GkfSV86K4jVMuGWzkCRqRuDBzTnDzpBj1gNYuJtZecbNdcekchj2ZuaRSkMHX5Py6eD81epPstXSeuX6kT",
  "key3": "5x9LZHMafVwS24pNHvQD5de34JsipSQwbLQvaqS7qyqSbtyXZYTwxoAyLXdFzd7RWeQUrNWrtCsJb3iBvia6vm8L",
  "key4": "4ECGyAW1Csek3ViapGHBmtpQK6t6QZ26zhKn7YAuCHk96pk4AW2bqXnhergi5gHdgSLi1p3GQMrVDiUEZwsV9XXt",
  "key5": "4YM3N1kuL9q9V7363aBJv3oVD3BMBf8WTJMYauaNLyuF7CNn3oupiMSVHDzcHbNn2zKHKpt5VMpHBnkuCqMsZeSY",
  "key6": "4U4DMVLuSTKpzMkVtgnUkUE5JLvJdCVBgEi91EbX6fuTREStThQLpDHBheDRbzkhpCKCkR3fPi1SBZaCY5Jitm5P",
  "key7": "2VXYApSfdauS7Dbi3kn1EEJ48Y3u1SLhSqyHPYsrozzYuVeexSNT9VvCSVo2EFYA4xmxnbirNsTNXi5R5XsJ8BTU",
  "key8": "2RMG21yhQnB2LJvi8jPri2dUWos5AeA5WWa3EZVheR4r8UYNNzTqbZdKufzVwCLWvghNtKzoziC2zYancrSVYe8T",
  "key9": "3YGgZkMA5nEyWaD4BJfMGP6r6TBSf8EftAxizRJijF2ESpSibvpQ2c1AcJncQTSrb6ajaUTh2XLoFNnFNcW1VX6T",
  "key10": "5NiftVTPvtspeeNhNvb1CpAuVwRZJJi6EdAcexykXvYDQePmLBnTgDC5rJC75B1w3zDQK7D5s2X9u5D4kYDaRACi",
  "key11": "4iqqu9i6dGnxXsuCYWX9Qkfhds6MG1NKj57VRWNvAbYkS3vTQJRG82L73nCycqzbbnjZ7B9LvWWzj5vVgrgJEEip",
  "key12": "3JajfaDxNAPTaKm4FJiJ35Z64ydAqQAkbyy4dnZt4wsQbGS8C3zB4piSxaHDehEUzbeLnVZ32ufCyWBLYLopNaJj",
  "key13": "jGR49WEc8cBi8rWJQVw21uC8ZAHmuVNdskyfZ2RSADgxbuWLGdnFofMWKjvbYuGSncDP5sFhEfzBkSGR4gTKGPJ",
  "key14": "4117HtaMh3e1fzy7uim3QeBXBnNH57u7TPW7NV3fxBPHmRNAZrC43wLLCU3jjeYxjcPm1aw9QQXYE7DmbYTdzFg",
  "key15": "3yXDR4yXNkBNAm2sMq6tiYrF53pQC15zeqHqyn6gfcD6YjqcjEZcmjMoNoYeWkpRhqcwAmhhVqkVVuNcLnQ5MKhW",
  "key16": "48E5E4Kgdsknb5pfpUUPrcpFy5ofYFE5BqjAo2bbUyjmeUdPACjnr5grqBnzCHuC5GzNdcU9cGuE6Fnk41rLVUfh",
  "key17": "5Y9Qi6HLjuELsRdxcP8EAJXTkHxtS8kHcds93eAdHrFYSfZttXydnQBPiPFeCf2j9CQefmhKuRzy16C2Xa9rvu1r",
  "key18": "jwGgapqTFLjT7umsbdLsJ5Evm1suxNVqcLa8nT8hyy7Uk9GkAGDV1vsbac58NsiPSTz5jtWk4gtqQEWos21EUQL",
  "key19": "ujpAsnawHwsX3C3oAPpuG9ccxFzTejWgyEnUcMjU2yUZBGH536jmvjGXxEzpQH6hWFVeJLBrHQQmpaBtRjQwLcf",
  "key20": "66WfSq8ig2VjD4metw1VqHeKugXBx1vxyxBrfEWfgVx3rdgxqCZ1d35ukM2Cb1aCSHGgzoo1kwgjiKrHYaAwJxYL",
  "key21": "3pwv8A25EwrhCBJfMD1SLPgnrHUddkWWyAW3y3MDr61Uba1yAVBXVYVyUVWWvg6QVeqt3YRpZzaMtxzxJN4xuNRV",
  "key22": "4P3Es6GYXFPwiy6AMcA6bYmn5B4BKscRuzubqkzj6qHbYp1VgJfFLhhL6SCcAzpn88rhCKdDv69tbsq7Vi43XGJ5",
  "key23": "2v81NRx3hkPa9jhxgb83jHYVgtEPGudFcbKsztzAHnGTUVw6VRrF37rSd135dQY8efSdJowctqqdEZ5XSvp5VemM",
  "key24": "4b4tNPZuH1Qhb7i4oU9Qzu5jSW74C153XyDXdQbVnArXkHLqjxL2huBJbdt3PpgQW9Q46VuqC9VgJKaXNMMZKX7v",
  "key25": "5Rt76g9U4tD82VVZvZp7FibkdkeUjv1vWXhRnGPKTa4aMjxwtdwtfCxR5jzvUaWcK6TyoU8QwW1LUJhETRgFn2mN",
  "key26": "rQ7HzJvMwCnJQwQwEqYUMB7vfz7tPBV2NAKWSXTKh8sTP2D3tEZzpwgDw3E93B6HxmU4NNHEH33pTU8YKpLkLeF",
  "key27": "46cBMf2HxsMuzuQuyFu6uhyMJdRok9GFVUtPeMbJnBDB8Z4UvACanMWABnCJgijuDix15xHkHRURqcjWUMZeSB4w",
  "key28": "3V4haE9d2UeNsWW1vjVN6bhp6GJf6NuBSJeWWDZYooL1ucuL7DgFCouGme6VHcvXBKA6TAtznASntgAbhAHHdSFc",
  "key29": "5fvvdYzqZgmc3URcpCefaDwua7udrsKkCLaoEMLRhLs6ZdXwwjWcqpAkD8x5DRLkyW3Qh3GpuxMmuRETpc9TRSfc",
  "key30": "4XrffxwQW4X9wTUs3mJVM5kwrXW1uEgBMnUHoDAhJc1CFcf45WqdmMYV5LmezpdCSrmWC2hr9QjpKxJsBZFsnAMG",
  "key31": "3TBGyBowf1aFCgfaZa9oT7wmwpehu8jSkr4TyA2dUxdxfBkdC6xDUfwA6HjZYTNnBhnnaEUPhUszyaGZCFMQ5FB7",
  "key32": "XswWz2ZLzeHb3mayZttobypzwsvf58ejqbvnEXB3YGJndvRhS22MfuhUgVtMLKj4X2CFczVX9p4SfcA3omq7hyj",
  "key33": "3pUHcUpeKDBkXbXPvcz7Jr2vobH6WPPnWe2hyNEdCUE2Hsct5u6Z2cZwc4BZPHWmVxeMmf2hZ73SyAGShSrvJDrP",
  "key34": "2Z7oB67DMH4FEfZ3LnU23aNzt2tpHiM1g6FSrzok3337Gs8hp4Xp9U2CJUnf3StqVeKYFDH9tcTZsN2BgHdgxXhT",
  "key35": "4oNieDd7qoN7mrNQckYspkFEKiMhApc79dhxAzahGuLBMZKWPYTz4C2sRk2tgxt944xeLDFEeAXMuVVVEScaHgMR",
  "key36": "4DvAQWXRwaQ1oSAMuDU23rLpbuJh1eVbF5un6FD85wTbXt5mUED8MezbDUBGuC2FVQ7uDGe2nacTFBdrBS1tJvKS",
  "key37": "W55wSQYmTbZDTDKPJe88jcXv8wEH4BZ3b5Gemi5HZ6NGD1CRQiseG4r6b3kRvrxKip4LndUd9NSqcdFQKN41sBB",
  "key38": "2oPuCimM32NhFhpzgMiYsMPmB2ZtXvjeZTvz9C7zXCacLZtuytJNHYGnGAtLpjwTB1KvXLAStw7wCjPaH87c5msN",
  "key39": "3J2DRdXzjhaPMBe81MghTxP5ugYMxtPd3H9YRLwtfbZDFQQDTmR37wR5xUeG7487nWudsNgZAj48Hd8GkHZx4746",
  "key40": "5uGaAjcLmppoFBaw5D6tKz4M5edkBXfHd4KCxdGpwvfReCGXWHh9ChatwzwKGyheas75UuoACUi9eomKgZJT63jb",
  "key41": "2VfPaynLR6o9NtM25Urz9BrcU7RxsdnPErBbf1fWiveoKjy8QAEbkkZ3f6JZEujVyhVRgtguonsrZ9kE1jEqEFCt",
  "key42": "3i7GtLYwwUUFTejc4GCcW4kJkho9mydrGNmF78mdFDfc2hMYVRo9o4yKDC9sEQYqT7jwbyxntcudKFpEq6YaTks8",
  "key43": "5Jjsk4onMbzC8MQXMB35FKkVZGtjJNboP5sBBFQ1TKb6DwbpwAXJx2h7ZvTgeqsymvAjQNAzXgnq8iMNb4AN3eHT"
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
