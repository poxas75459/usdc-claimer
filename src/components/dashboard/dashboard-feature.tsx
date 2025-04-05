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
    "ZWbNTtNeThMBvPN6SSgSvqCSmftovvpSXronXncCP1JHprb5VALymTR3CW4qxGM4q81MHTczTJozdnKLXMzZojS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DM3628QDumHFm1yg6Bo3xQPKhoKEw9V1xB765Mkwpj1izzYTG1cbHaQ2UwB8nvcYy3deYc6CSwdbbAHkqWUCr7M",
  "key1": "3PctTEenYHdkLZZDEohU2Y8h1oBQjPcGki47SqycjzxfCU2gNRva52q3poMaRGvc7aYxgsX6CwQAmoKWeBJWT87y",
  "key2": "5fz3GjZG8rJJF8kVCKRAKJADpzjoaES24juWSZRsmeyUBiUR4nqqkG96HxWUcnwqAmdT7dqeNbzPjbLpzxGqhGD4",
  "key3": "3Afk27QCfZLdDqKsXkXjheJCh5ts9dHhUycfNbVUrQiC6vrd2riHaFwbTexknUAGfQRBoxQr9VNABMBqVA4QMvrf",
  "key4": "3Fesuk1juHJmjr79yPdqNAaRcv8j5mVEuaLVm23Wg9z5jfu2vkiBxhs9ptxUh1tH3EeEYW8CUGtNZYCieV4HubzT",
  "key5": "5Am92dcFpF3x9XyCcXHA7TxpQWkiUK11DvUc2KKQfRriLd3TCvrTjA9nDX6zc5RXB7vC3QigQZbyQVDFyJ6KRzeF",
  "key6": "4GPk68neGPhLSx8sEHc3dggfx1Stpy3rLUB9CqgqGmbFXAJGt4TpJYs9iCehS8K9bHKPTztAsSkzc1ew9SZ9h1hF",
  "key7": "4T99eerVjCAsn1Dmm6aZBwraDQ9GZ2uJxsjCyBDHwHKik1EBovrZ3cHXb9VdEfxZFQSUn4BX2ZdVkbfXQjU3gg8P",
  "key8": "2aQCXH7jL9ofjmWgvYZf4vSqNPeC2YBSGSMz1f8QFGjKpit8q825y5sGjpb9ZiRGeMYJSDX4NSsaRmKuU7LwrSEx",
  "key9": "3hJx5p42wMk1EZom17idsZNxzw4E7YJcnMrWRXjLMbx8ubaUiqKeh4GvLmTGyCLgsUgbcU9eZpWTZi6QvcoQ1VK4",
  "key10": "5GWefPPYtsmyrcczGLpe8pNhDfzocYmDGftHyqXyvZ3HBdkcJmFtd3UssjLhfts1BdeKbxyC9We8T1arW5CxSMoC",
  "key11": "5xiPQgaoouuwvK6c58MDYmWgrt5s5sWuBp5Bi6W2fPLNGuRbovTmEbky5goRWLicc6qiFCH9aaSzDNuMeeAHCtUA",
  "key12": "4UcbxWNSqow1Fkm2q9XVa1F6BQCMNub34KiiAmxZAU4K9BSm68rYsMmN32aYyrVc6tugSSYBFFb88AagVrR5Kucr",
  "key13": "CtvzuFYzNF7SnZp1Y15SBvxf5SqMQEVUZAcMVTEcUjy8iAQviLSLG2U3ube8TAafkoPfkhmAQz6cwK9FycdEun5",
  "key14": "38VHkHpzYnQhMUJUtwp9PNRFgZhguLGRD5RETwk47SCfik4zT3C1oeX5qRHPApNhTZqawSL2R5GDr7EMVo5rHQ7K",
  "key15": "yQ4Z5jFeQ41v5q9HCFU1ebAZcMeZ7vGXKTW52D76JKpV1mnBupgFeGYU728xQ1tZNzHKujCJWDw2mrHwZBwxL6s",
  "key16": "2WgckdocCk3PXZeTLuZpe2DQG9DL3jgJLxMMh2YQ2jJrQd2vzLwBZAMwa4DQXDa7QRrA4cL7MjsmF8yCBc3TfEyr",
  "key17": "2x62z8Unz5ebLtU8p7h1nZdKvc1PkrSFxVNSKFKmqTEuCZfFNo9P4YeC8iE6i7eg2NWjGvRyAKBRn9tVisjdoqjF",
  "key18": "2gejEkHeNk8Mhfao1VydYX3jHbbDjS6N6uGYByeVrVwyQghDR1RHwWBxnZiDa5d8MSCUn5bWr624KkuJ1iCERGyL",
  "key19": "3CtZvmwt1cXubJ4VT5cYoabSWbDj6R8uohti1F57Ja9Tws75NcBL6iBCrkyFZdx9aqB1gWyq4AsNxW7fuRMw371g",
  "key20": "2KqoA3ZTFqU3TtT52WTBdiPEHms34BRGFY9hzc1bPyRZ3vonTxeFDG7yJ6tfYw63kSZKKL3QgRpFwAgRso5UUdjm",
  "key21": "mXQusWZFPDo9mnNomnQ5552NdRpmvXqDKZ4Txs3LmEQhdRTmnjxWz1A2UxTrePe7DvbbVHw1zy4xExvESHtekHR",
  "key22": "3fPLYwp167ZPrkwADcVqRqg4WqPVBVsw8jpznaftV6tVTRd4QaWyMrd2RAB3N5QiN4nM95JsvxqGg58KBYDYP3Z4",
  "key23": "3XR6iaNephcQe7cSouTepDfqRQMchYrdmpBtSFfDkRBXKnyJbCSzXsx2p2vNnbrtNHeimnoLKABk7P9j8wpfYc7f",
  "key24": "5wc3TEXU3QLLaA2zzdFrVKjbEwoY88aEoYQ45qhUgp25P4afyBJQBBgUTbBuSmtSTtXPF2A4Jo7KB5ioPXi1cpJG",
  "key25": "8VLE5H3jVtweeuFmTWN958rKDBWECdDpvi6T21qtq9rry7rUWtnRnFR3f8YmwKSNjMvMSnY2oRgV8tvsLKqXGGi",
  "key26": "2Q3HtGTokd8WkVCj1q6qUDUk9E3s1CNdsf9EdKkrKY9XXTyU3hFxSGeDs2xeqngbkW1jaKvTjUJ6PjjoTFBbSioH"
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
