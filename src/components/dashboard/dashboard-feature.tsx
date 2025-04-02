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
    "DJDFN2LkwsUYesxDUGZCd7PqyRo8mnVZJ9evZSQrRNawpbCQMKo8613CVhiTmcx9dg65aMg5NE7XQCDCJb91V4c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oYWVEH8UPHMJT34BWJy8rGST4QpNUqgLbr1TDdk656sYw4Z62uHtdM6UaASRWwc5g7EVbLrEihRWpgwPqmuAgpy",
  "key1": "owtDF3dAr9GueQAu1A917zXQefvoXKfVKt5F2UrTmW3jtche4GzfkX3w3xj4vm4vitKkuUYaqRTiTsYzCtUVYpw",
  "key2": "4GviUd6S1K9XSMDyQybD5aPYjgG18PX9W2hM1E7mNwLhiBse6SRprvuMS7Dsi6z2iqEKsk7gfS8wZuoTvJto1x8c",
  "key3": "9ZV3hwfMFpMWPedSCoU8Qed5d2sRip4T5PqDt5MGGWmVCNeAUBcoNH1KpEZTKsoEvTfDLH2Gnq5xkBChR5QpfFy",
  "key4": "4nKjbyRoBwPpcThntya72T7hVUSeuuLwBWt5hUBWnfGksp27YHCNZg7RBa1K4Zb1mqpqk1PUhfdbaDjyQNSz6TPf",
  "key5": "75vJkVuV9hCDgU6vhiGssLE21pFfuF2rSZsq7wJZZbuFYqCZvRxQu6xJuuzpocYEQTeGG3HsfBiwJUqxjR7rukQ",
  "key6": "41dswhpmSkJKp1TPm721nVvX1Uh7feAwZJf1t7rmAgktuynAeYP3aMcqqYLGBRFKqxgmKzXZcJtrKKtgj2wB2WSx",
  "key7": "5vKx9fpgA7T7CFSLQsCovpvdwx4pgjs83xNbgKWr7BgaGcTApTN4VTpn5AEwED67mrsxQEZ3qBwcjXXbAedu4LBU",
  "key8": "Ubqy3EBYojdSt1cgp6Uaq6eL8JDyGX7nS4v2wUJaTSgdRetSdJD767jeK3DiSoSxjBPWifG4oUmzi1V7rP8MWH2",
  "key9": "4n6CfimcEoUNDaUbVWkNEyVrYhBK5EsbJu9ZLQ2EW1hBenX1pXPZ2ZRsLzju1i8Zm1yLxYAyUUpbrCkZUFSMNqcj",
  "key10": "4fbXYB1cECcLYkN3MAG3z8BsGHA6sbxLg42fZV1Bno7hoEduKiK9ew17MGFD5F2guA6yf2FRdWz1RuE8vMcVES3Z",
  "key11": "41kJd4Pq1t3jGiJGpZHGnk1g33dUBDa6o5VqQ7Ek4rkfiEvPJAWyVW4B88dtTJa3w7YsF8bPFS5i1XT8fRUcoeYd",
  "key12": "2nHfUqyHpfgnoUzcnX7Cf5rpFiona1faffGem7XCqtUnvaa7bwFxQTR7t5rku2i9GY35NPMsB6uvgfC7wQeuSmEo",
  "key13": "2gHJ5j5xRpkqg6gbMBtKwXJBcJErK3qWnuApMh5Lv5qrKy4y1ywxShph9c4594hvXXjoLoUbUoQodoBqiMXKVQzv",
  "key14": "3AJg8n9cPL1hMXmsAEyJWxkQ7StFV4BbhwVb58go1icuhFR99aQ5GuVbYQRqWZGmv2RyZo5MgPTjcfeu5VJadT7C",
  "key15": "2yGKw17xr53iswmCLPFWnoALetjauPt1t8bacaVnoSeViwDHaiy4KwLjkp6R5LJJEf4z8CJes5PtMn2gjUkgaQi7",
  "key16": "2EMqcwe5mAmZsc4d7t4Gz3xKYUxibznzKAgDNaMJe89XSUcrQ6yqceDKUeH8WCzLNhM5aRStZWNkvJ13czKR3m7t",
  "key17": "2HTQgFdKSBNNqfCFXm5ZotgxjYYokwkFN7CUzF8GGJ51GBF9MsSkjKo8PrFnxvsZrLk1r4ZMYHnA3Wt7tAKAqXve",
  "key18": "b849pm12r5YuUSgqMsYc95XFh31v4Te4oA81eEWtxauCkNWVj98EXk2Nh3B71QnAjjyY4T3yxoYwxzEZ5tbhmjo",
  "key19": "2cd5pGJB8uiPkoBDpRRCU9bqnsxqHbNdXNUpDfRxjy1P4LCp96vt9vZMTJRvXhfim3tAmAYLMDwJUbU8tYsVmJZf",
  "key20": "5EEjSey8zTAGJTGxbXgz7pjFdmR69fFvnj29rQB4h2JvUPkvTBCL5WsWybc1rZP7ThU1tBb3FuYoridobFnA6P9h",
  "key21": "5KhxeWQFutobftBk13erLApA7iEsj8rEwXg3DpLGsPTfRnvW88VQoZc8vb71xgT7DVabMekQeAj6GZSXd4adxtfV",
  "key22": "5g1uyQW84zrpYuvQRLfppvdfq8qLLzbqkBQ2JyPszzGEXYiSxmP5cFBxwe5db7RmqJKHmMJL7K7ucGu4Q6YvwdWG",
  "key23": "swprHfAombZH42PqhAiMMNWkq6CuuyFPLZM6WgaQ4CDXkgvt3XRq1sD7zjQY7MrhCxLLscZWpogysGhj5yqKgH4",
  "key24": "4JBNqaM4ksvzHNb2Xxyoikh6WwCR2B78VeWbWGRDqv3BxkEU8WuFeUiZZifwjek2JyU3D6EL2LgPNpGa4EroKK5B",
  "key25": "657gKgNeg69AT5ivyNBg2u8qDBELCzUq7hFwvhD6vuXWy2nFuk93UtHAnS5itG6YQS9wFfZA4JvFqvzFcpYQcrtb",
  "key26": "AnH3vWZJE7JYZH9FCRSrBmBVFf4PaApcnw1zFrGHp4pZ6qjAyUYqB44nLpBmHw8bnT7uMZaqaCP4F3KPNYwLB9t",
  "key27": "5wkhxrEAaCVq95JWo286DQnX1z4BXmLqkd9e3cHRtqUJSWDS7erZA5nTrX3bL1oPV6snkj9FkUf6ss1eqdeb34Rk",
  "key28": "49ugiS6jTTSRqAcovyX4zgkZpYLqmeJkevwhaUudrKzbhTtfwpvpJ6xg7VKcYdqyawmp1G2tJGJPvGE7e3YfdfHf",
  "key29": "2KiocVLCM6JJU68dEJSMj3rfiszBA49rq9MxdkutYwN98qV8TQUtKdXbYxrkt6ii55EysjqdmLQaFEe9BQQcWKa2",
  "key30": "5KLS8SYYXN8iM3jPJho8iGsTeFF2kWK73NqN8JYWVoaWVf1yz5ZxiJm4ZnKtD9wCHtjGbmbwzft9YBwpkDtLapTX",
  "key31": "s2X9CxTFpJbLgRssshTv9BKcpunTQbh31phcjpmnzGxdncn1Sb7U6K8ytfyZrt7Zx1r4Xe9UW3Tuubrqo6rZUyA",
  "key32": "5bW5ckp5ybtqK4msTZy6fte8itfPFFr36WqPRTb2YPnpTkfm13muGceKMzEcD6k69HZL6TiTVMZzdFMwNiX7JBzx",
  "key33": "54fW6QTmDQaPRi6g1waHRk3TmCbCvC5dfruzFTggbm6U92jYRbPtxLamhR4Li12DGDjPsaXvhFjVHBwYjReyXFEV"
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
