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
    "3hwC59FpWcUqNzJVXtuSBidwnqRnm4j6K7aqVD1iJ3tASz2Ze7rymwMuFFJCze5hUdiXT9iYvFwMzBttYt36mxJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TtBNqtWxJdrAYmnKrRfYzGUtj5Uix3YyfHKN1TbBKPCesqZ6hoQ2xtCmxgu7Rp4Jqq8t5nd5SEvWdfV26a3pTLj",
  "key1": "3xoZLUwwdR3BhhHDoMaxy4tUypQPeizZbQkWFWMNio7Cj7C5joycDw9GuMvQxBDLTh6ELw6vr8TUsWcRt2mihWUD",
  "key2": "x77DMdL44siQprhURZ8N8qg4VzY5AF6njg8mc2fjNopMSydMRrN3ChgwFP5pZsYUrz1BCFSbuRm4FjE9ucwbwGv",
  "key3": "4Lf47UEifQ3X8EQ1ssvqwkxSndFBhBKnu4jywMpooYNVYMfYuCDb8gR2ys8Bnbv2jRhF5qi6Ekh6uXMNNzzTtskv",
  "key4": "QgnUx2457JFR1oQQv6Bj6nQ131RnYtd1hrekgnsLY5SSfAsJbhFfAp2a87GP9udfvZbUb24qbZbs96ViwrP5e2w",
  "key5": "4knh8s1E7Rg6SD7FzVVds37ig6z5zzJ9HrSPg83NiParGcCRaW5kQdHkYmH2AKtmUgAx5wh7ysAsUXibLMEKd1M2",
  "key6": "4sKRZvq1HtnZ1Sd8DmWA7ofswTYQnwFbfBgkJn3D89CfY6AgDvwfqKMWSMKVb56pCZRmN8xNhy5Vg8QF5yxAioKw",
  "key7": "5eCoKQouJHQv8uqAST4SMiSuEG429Zg9LHA829TqmuvQ6npXy9rWQ1UgNw1uBifsYMunDA8RV6KUyfMsMuGMZ81i",
  "key8": "4CowgWqjDzktJWN8TRbHDB9ugkqk4PG546aw1kKdkkyhfUJxMLUtpyMBg4mFaDpTe6ykAA8Q4M5s9vUXhPHbNZvz",
  "key9": "TxBU8A7dHkUd7dLLrsJ5ZcowscG9gKSSuj5CLATk67N6kkY2L9LoV7HPT9Srp1vcPNCi6tqYDVNqjcNfAwPKYYE",
  "key10": "4zSZbKftoT6bJr4VWfG7XyxqsPkMsrPWvSw8roftcb6p9WKp8DnAVYAqrnFgNzcwLNLNHBVZuJp5sgrJEiPWPowG",
  "key11": "622SbUnFnXqGHaXgxbMsyw4fNzSdFCLJyyy53LkUSizkGKAfbJicbp6RgcqXdkYfx3RQih9LTtYuPf5T4fioHv8v",
  "key12": "a4FYpKr2dU3eAxvL3gkNzpUomzWXiMeVmXhxZG4ZXajyYGYWNbktr8mL5Z7QfecawyUw2Ap123yDrcfK7uDwCab",
  "key13": "37U492rYkUpCf3qi5wgGww9ejfiCoFY6whEFcXb7ApnYeFr5KFuYZfnwcPJbxmKkdRCMBgvwoyvDuAhZBdUvia5u",
  "key14": "23mqim3noLm8iPvpyQTSvt5uyecQWGzu7u54FupQbRC1zX9Tu2A6ee6yaugZ2h3waEYiy2iDHTX4YANjRvu6hmZ9",
  "key15": "5t8nDgdwmNR2L7y6hNL8G3VLRxy7uqEqXPoKF2YhRf6bYMPDK3xt2Uj2i9RFEniN6EKT9S7GMb8eTuA7P9i8Rn9t",
  "key16": "3TrwYkYpzGnUv5s5JoQ1tqd6jLz1ygTjgj8RHE6M5ZHue7WzA7xoDSJTnCfQkGeM6QG21E8e7RvuPSRNpswbBXkQ",
  "key17": "61n15aMbUzG3udPCrAnEKZuD2TkR4GTUB6ndMDHbgVL8QAeDVrHDL2yjf747n5rSUJqyfZxZnMZGDdfvJMnq4CGx",
  "key18": "4x8kihRVCVuRjYWa29KAdG5wKJngzb3cqNDoaN1s6tbFRfAQzn6XXbttqN674nTC8niLt47E3Y8DG49vF7V7A74x",
  "key19": "2YkwoB5Mj6Q8vxYe5PKxacWNuzJb7RYKSEovSUALwmBDrUACiv4nZhKEH3bMho8qG5TvbTWYp9H3zTx35u3xeKH9",
  "key20": "UfRQguCcpXsWYBYmzTe3enSuftRCcwa5tNYGAq7qUP6t98Y6LCnGLfrwLrV6iE1vkZg9gpdyaiWQEWpjtpDcy4k",
  "key21": "4hGCKm8hq7KQnF5acfYiv4sSyXt8ob9E8REwJsC1DwHZYe2HKvYWPexoQJPsaXMgAAvU7iAq8oCDV3WuQPCDWDvn",
  "key22": "66GXwWqMVvKRYzqsDC8XBK4MKMUsH62jvJk2WQUfVC38Ch253xckKNmfDBiDRACDSCGhL1RiJUrY49i2qURHcVc3",
  "key23": "4FdErPzfYJF2K3GTEudt8TfRXRpzhZxDkXa7zLhmDnMh8WtHKJrsdGWhtPkmvPzmcUEwL52u4fkd2YRfRJ5qWLo5",
  "key24": "2UsLQhZfRJwRoKwWGHb73kVhHQZnJJyhe7aWYyg9oVViAMnFdidRYrbYBBLwiJYAn6k3mcsRy9gGWToMisYAFESx",
  "key25": "3yn3JKQdbRZ1mp8PD4DnxxBDKGXquaSdwGdR493xCLX3zWYifwkKMqzG3aMRV535xQPd9hrqygyUURSUgm7fqGkW",
  "key26": "3RjXUbj8xwdBseW6z4U7ArURWYqLAvNPg7jG8EevQ276X8FZBdmZ1XMaouGDsp2iCvEDgnppUABmJepq4Z9ucjok",
  "key27": "3fS3Vf7Y63nmJ1F5z229qtUMazhUPEgEaiZcFjYaU3nvRhXXiFwECeEK3pyPNx94KqsMNLT7qiH1vcWuGMzQfQkG",
  "key28": "4AZyo78D4SAx62RgyRt5pjwEmkwJLhyYsYjuVsJ6FeL3UAkfzaFqQpVUKXYG1Aht2Z1iNjyD9tnLZmXt66zBvLeG",
  "key29": "3Nn1hgNDNSPbRv1KhujVsHZUJ6Kh5qZnnEYSxbuuJ8uFHMga2cRHYR4sbHgb2GTkJqNLEbp5pFbgcLPcszUkQa8x",
  "key30": "5uCB1ZiyZqWEccaSt5JsbTNQ5Uwx7kw89uANnPHJfqytZcw9CGevSriQ2fCuGgXuQhHfwkXKECHDWcJJ8qKEpx9E",
  "key31": "59KSQxyAbrZQVAy6g9G2bpFYS9gNvLveQiAtUtZk68sWoXHjakd1Yvm9wuJqNBzujpZ7f2sUuWMAzji1U5kjTZ7H",
  "key32": "37AcMyVjrk61mKAyWnQ3xvmLH9yd9fYhUAUU8wPiKjVwKdLcpnjAfrZcbS5cJjYG9kPmDh9FAkEvSU4qwn7YvK7D",
  "key33": "3wmUnnjsgD8CvjEbAEHBthiwYHwpe4n4p6TG3rovqrnLCyzTRMQ8BNxsssY7QuwbeMEaccC3Wo2FGBT3SizDMbFb",
  "key34": "NiQT6iicbYZoD5vrmmcGGfGC1jyzRj2dBMwn3XUc4mC1KCuuzESShshU8YDCJVvncwzqQfjvnQ4m4wJcE4tjHap",
  "key35": "2JM6DS3mYVqJnuSp1GawMSMvouBXST2bYfrhWt5cexiAgqnEiLaQcEJGv84ZaTJBV7ToQg6PmmLXQUnNMZLQo1Dw",
  "key36": "2s99npRF3XEjgJkWqaWLPuZ5wPFqXuHfE9GExn5CpPyYyFrQnBugBN2ud7Fhfd77DkrpsjrtBmvsDdD497DkoZk7",
  "key37": "3Gcf77oV9ZtbZqt2j7c9Yaj5GvmSPbrgc1stBmvxrvEQMQJv6BbCAtaxNLnkMEze1nh2rnMws4t1LRzyzZWLnYbA",
  "key38": "51kb6cXz5h7MHk9JQtx5T9KZCyC2EYaZVKo9Ei3HaAZf6aU12uhDXyH2WHhpUhSz9p8uCQyLsfRFJQyQLfSPFxCH",
  "key39": "J5VwbG95xUNCVaFNAS2JLksDKmaFsB754nRg9kcTrT3xnB7MJrEAgSDj1aaxzYRSsH3Dqq2MHiJoecvZU5JSzQ3",
  "key40": "6gqXW1LwJBXufeRmz3Gm9S5D2MG9ZP87VZLS4xds72zd5npdhAeu8s885kjfdXDLFyfdVf2pKctPHgsuFEMiN83",
  "key41": "56bf3HFZdfRwJA9yXsQVpsQzHuw98FjScGKBVy3QMcoEQyT7UesYXK4CwDxeG2i9Hbs1mUiNYpxaJTiuqkPPrvm2",
  "key42": "2Z8fZcEmarJBi7G6xqA7BraCXFJBnbgAXEi9A8rsSC4jVQLfGh5Kg39KwhTEFKPzzS8RvjGsWDah4sYZsEKxTwUY"
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
