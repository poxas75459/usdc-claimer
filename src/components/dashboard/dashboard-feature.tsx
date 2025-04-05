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
    "5wKATnLhtun2LnNVQLiVz37aG1jg3bB1jomq7fPovSCg1TFoieFnLdgzgE2omY3j89ZdxtJDWFefam97LnPVarF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fZ9VUM6NyRsmgz1GCE7JqJPPSPAaY8udQ5ky7bRtEc6UMAsvdsbiqygdArTC8o5ekT6VPgQnjJV1QfQ9yCzhPeP",
  "key1": "3fzerBRYj9pc6vJUxV2imY3ASWkziyovodrdpbvduKW2oY2gz7SpN7SCdf47P4Qfb5heDSYq9rSkT2pjfFbGrRBe",
  "key2": "4epMCWEqbb6YQAfipLBv58XBAT1NFaCJ48V4vDcwGmAc6DbRzNF1NXskaXF4ERapPhApAohQuAbVqCgHbgroi7Sc",
  "key3": "5BCe2CguPVeVuLuqauTTsktX7KL1d9iQM1FFnjruChqKH9Xd4tRyN2iSPhRZmmBJKp21oGAyuYDPe5SeAM5181mH",
  "key4": "4xuMxyadVooX2YGAcSXTWF4VLDEVaFFUnGsy5YFHymoEhUpFSQWt4iqSHAMJTQsYAj7SnkrjDnDmRQAga3iaBWKX",
  "key5": "2P6ZF5Yh7ELZtP5HBC7xVTfUHboiBZRZamSvgWfi2DR1Q1pNdi3bnMWUz8WHunLb1Fo8UuqsgMqhTLr35QRaKAgA",
  "key6": "27s3c3XPJyqVp5hB8vmH77AEUZJcAP4UzUwdnyRVh7pU1CX1JsutdojpZTJUv5eiU2eyMGCDoRYEwLkihNhnz6fC",
  "key7": "5BRQaRNQQhYndmGjeAFGKHURGuWW6dYDZHP1T7UtBZwrNvSSdQdjSXaYkPvi6BnUQppFBuyXkLWbn1ZZyS8tjWhi",
  "key8": "56cdSYibaCXnXEJCZxsnYqnbFEpcbn5fe4i9YCdXm4JNzpsgomYaM8SCG6ZnfFofSfJUvmkKVuAaCp65wwBK6Kh8",
  "key9": "2tE1KH63fBRuLks5wQ9PyEdHQXPDDBDZYUbvM6KZnLRpAzqBdAaf5VGDrdsw1UwVntp26yEVsPzq7LLrzA2Mrsrj",
  "key10": "5yYCBUPpqF4BWyRT8XjBzeaHFSKVkBb5y1oS2x8cjLitD6VHWkHNx9H1aQadYcu4hS3JiD54BvHdjRanpMGNMnYf",
  "key11": "281uMMxGbQEvmc5rm6DwPdnxhrC6dPZT4uU9LSUYRL4ogE1kMC1f3RGJFpSSoQVGyDLjsnkTJaoSVjJfFPvsuMrF",
  "key12": "4ABUiMYojAzXL73Vrp1Pg4eCydCt5NmeBziqBqU3s9JWJmBMdnDjpdoC6igrPfx3nYwguubnzmZ6MrFLJT96v1ym",
  "key13": "2HV2yGRsVj5XmBzycvUwZW6zucns6qmZaLJKxHJZ9oKawZfvQEsCBFwBPDY4rAd5HLkAWwPnq4pYxTcWc5YHKtW1",
  "key14": "3MjsjXYzVMVE9VnUzcjVm7DC6Me2ouGExd9cQx7K6jfMB8DmRaSDpLYebiB1znJrhQPrMAWP43xJvnYuHMzDDjLA",
  "key15": "5mMZdJfdF13MzsFPg5141mDAyceDEnqxMFWjvBxnGcnfUWsAyriUWnChwZnLG1LTH7GU3iWLn3nM5iCXjpSeQLc4",
  "key16": "222tw4eys2uvcX59BvdtkFLPHKaoTonc8wbfZ7VfSdSe6ZRBytSaxsicSpDL5s2hBoXQiHrX1a3EcNt5RRvHcCUE",
  "key17": "2AVSiupgQRq29XabzJp1Ae6XiFY5d6kKvkqE5C9thPtLSxHMkqGQ6GhbQvdaCpVAb8upGVQGJ3H2FWLLiCvpoayj",
  "key18": "3x6VC4KNNTh3z356aqWZ4wyEzHF95Ms6dM3UAm5LX5jh9emvEXmUW8fdZvQkm5bgvDAJMiWqWBGLSGBcNTBPtusg",
  "key19": "3NGqRtny1ttMgR9c6QDhpoajM9943gJKEnGpV42KASRhG84TN2dVnSjkfNv2QiwKV2GXGa2US43XLxmxoCnYANV5",
  "key20": "jk4nkrbR3BGXvhKKT93jTDhaDK9EL9e1wK92HRzxLa8hTfNeKtrUe3EVLLthY3F2mroWk4zidyb5NKvysP968Rx",
  "key21": "23LLkMhX2GYqd4geX8EhAEgprgt2ZS5EUmkJnLDs4gQexoxie8GFtQxYzPrwvewAqpYg9nHtUffLqF9TR5ruXDgY",
  "key22": "2KsKxjKigkZsHTZPi6ZdJCU2x661JbRdNVNCRPAc2egHVV9Uq2FMqNzF7m9jYLMm4Zh1zY7TnQR5HVetPjWCt4mf",
  "key23": "5on6Q9GfnbqfJr7SPL762GAYB9ZGYj4X5cLgk8h9wCbgb4Do3iocdZsjk1iWscfPfsXJZMyugnhb3a78gDBAXbWb",
  "key24": "5XjGG57YK9FY1mxucwDETZgncv4bUQgfGA3nS1M4E7fQFi86hhERutRp8aQyQMYvb3biC33Xaad55uUgJsyLVk8A",
  "key25": "33LbLR1Bw6i47N1TVjvwZ34sdkxhyWNBjixcLJe9knc7rgEXXkUUKcqiN9owbXkiSi7szoKnyiR9EugNXZU6bbjE",
  "key26": "2QDTkPjc1jZ6WDZ8hyVc8EeJQJbrnoUo14x8snB4nDypFcTwdbnxuJFTLBrb7vvTWpoD8ruQmCnaDgAiikwjcGmQ",
  "key27": "3dDKRjhZbZb2Rr622diXmjVgHBKf7SjtfNs6dfo6WD8R2iEsibAy1BvBpX1KvNDVxnytNqy35QKabP4ZrrMYpTFj",
  "key28": "F1FxtARfXUgjekuktNj8uSoJeVEXEjw46mPXU5SVP3Ve5pRbc2XQFZvWfQiwpWRZMa2KtwXm7ZpAKijDNXn8zio",
  "key29": "5EhtUxnvKSncZFzRKP6Bvuy1U3DZwMYLuDMqj1xL9d8hsmkfghiiMaeW2Q12Thiqn2XVTQosEx2swJuZ6DBV7Wdk",
  "key30": "4yqSvKiM8FUNGkFF7TpK2EPjrCZ9UwLi1noh8iasSt2FuyTmDUoVPJqxaDUsvvgEGvzHYYLNFhBzANs7KabU1xL",
  "key31": "vNCwshMmDPeP4pDFgDkSziH82xEBb8AcuoMLGGwXeakvVZB8WKM8B6vY9DvBddTwcHsVU86MmqHaF35cXXktfWA",
  "key32": "2eJtx8MqqMes9B7CSM4Zh2ZPxzMrTj9FHeanq6wzxd4XMG8Bku39XahJhaAUVNCeH5Mj7LrLMhXEn3wJLMTZryT5",
  "key33": "27gj6RnV5scdBUPvaen5bNUzprucwYyH6fX1eXmyV3joJX25c9TPMymdriABmkUqvLBFo6o5mkVc9iptp1cCKLsU",
  "key34": "23uAc92deodRC6GfzCcWzwGd8nM6hwQkZ8m7kJf43tndPwPVeTDvvZcWXvscSYhqdgN7NerwB8yrscixnZBxomf4",
  "key35": "4UPfuqqZo2smFcSrtsWb4nfdduE9VeqDQtKZuyMUb1SJTV3Yy5bMnFAjqew1WNLvQbwyws7p5mHJ9qgXfZkF7k77",
  "key36": "2USrX5BN4y3MdLFbSoUE6wHGYR1iekdBLXK7wEn1UxGUm79P4Vf8vJRk29LyiTq2GQjkCMg4bVwJRf2H7WeGprNZ",
  "key37": "VDTXxnrfPW96HkfUJH9NfpUmzP5jfBs9En1Fn4Wep9kXKacuqXXEMtfRF4dPnTnSoEzFcJpDrKLNnp5BQUz9m7Z",
  "key38": "4QxCpy4VYC8HcZZsgUsQRN7Z6mkwTifVcX6FdEGCKA8oqW7wHi9tMkQpte7MNNy33R6XLtF9FefreMjZK66cRYJR",
  "key39": "47XEHVmCMM5eRL6iaX8Yks4Zmws4Fdiqc6oKPHB7PR1h1xYrjPMGoxkjKLYBYh8gTfG7uoomcR1DyTUQi4TjAzSt",
  "key40": "62Tm1fNR1XX6mjak4D7jMpYWj9WZNNVhLND2n3wQ1PP8z4z8Rw4gzKuRVQfbrVoK9rodMyiuUDtov9Gx4cQrCtZ3",
  "key41": "5PxGMurBtVZQhnkdB7c9Q2wVpZeiky3EdRooadeQxkRXMwRTVwUo8XSLSKcgVMifWdTgfHkRWWuX663rHsVaWNPf",
  "key42": "etNWj7Xwu79uAVq9dYnEounMqNFyqZtQqGRGxBLy8F8h3ndeAHR9GN6HDpSzZRJkHw7oNWCaiUMiyBsqfEHCx1M",
  "key43": "4ZbPC1qxuNvqiqbA2Kyjp7584qdYQ13KtzvJRXwSLF1ucWGeB6NkLY8Ff1fdH2Bmkc2hJq87EajkPDGmjy334bDB"
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
