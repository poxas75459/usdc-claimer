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
    "5kD4DhXt31qCRp4uM6GEiYMjQ8sHYYhDdEEcVBZUKfq4ywqd4gd9t9fPnzu1xpsRJTTwqAyMhQZiNZrsJvo8P3nu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SKktYCEmbw7zQvxuEYWXqsdvcWT7wfRbQybpmujLkDy7dH4EWyByrkX6YEHrDe25Fn56qHsvrGVTS77jdLDCvsB",
  "key1": "5RbgUpDsL6xL68GznmiY3R9wgBk7brMFZQQjVXDjZsK5vrC3ekanftLf6yk6YE5itUTyNq3Ag8uAxUYPxnB5a4rA",
  "key2": "vA8gbk8uSVbn5uTiJmRDxtHWsZXJxoL45Me2bnXWUPC6jw2WrWrLxRoAjWgNxPYF4BjfqrYMxQ6m1inW8hJxaYc",
  "key3": "231uGL6oUN96HL5brxNMxht9pXHjw5TdWnZPEQ5jApXNeznDEEF4i4e3iRKG9u7cFSH9GMWoKEevjAA1JmoRcjGW",
  "key4": "5w7y783MHo8dWyJLSv3PJcYWgArD4hXz3LVcFYyghTHVphUP9osdt9T5yLAc8LfUcexVbQw38bSYYvTv9Wy77zXt",
  "key5": "4KW7u3KMrRcqmP21r2jGab5FJrrJ71sm6UBzHbBsDPZaGTdKEPXRbqkDq3ADDSzDKgtZrUA4N2ssFMv3MYDq5BSt",
  "key6": "5eGLht7mQPqiEZBUJf14DvEQn2Rdb6AkNLgGj1r9LXmbJPgbvJnTkY3A7E8bEAJy8Yyvbwt5G6Kx54dEVPRfKDtW",
  "key7": "3E2BCJfcuof1tyHArxhmqndsdqUFXQsq6zCbiupHpP8h53z8aw8vNERKbt5YuL8bw1ESBRDwpMhHi1KZWoxwPeFE",
  "key8": "5tjH753VzoGxGDMQeCwMgRcNPRDKJnxs87uEGEfQfsqBaRiZL53uW5ACtaTJKJcnnAFcabhHse76uJGCSTgRopEc",
  "key9": "3xWrZNBvBG2RenpN2aas8gmBnDV3bmJt5efr6XmaaMkbDUd6RqWQkiWshu9R5sLgtnkmr8hYxnwV1hri7BBmmYuL",
  "key10": "4A86WZ97Xdvkgzy5Dfrcj8UsAN1p5vnvLc1E5EEWg5SiEhLonzuthpQ22ZY4VbKcPBPeambFbSKdsYPZSG1xz12y",
  "key11": "2kDz3yXMvfnjwMJGhMZGcHhWJjVDawcepAu3xTq67bQZrTppGrqpqcaXpSSi8v1xgBGYs53ynYPTyBQhb6KecgKC",
  "key12": "2Bx3vtjqhkomzVcyi5UnUFjB3f47xw6Rb2NNjdVM8WkvGHQiv9rRYY8vpYSE5aC7euwve31zDAQXTYQHfMTpWXky",
  "key13": "2NpzCty1zS7Dk3KqadEoCyWVQmBdZSVjaDw7bEwPai5wgynDufWBXnxh6Z5pSgjznrsWPWenPefYNUCB2L7gRDzd",
  "key14": "36jf7pCaJ3hSeWkQDswyADoM93Fi7jJ3CPU3Dp5KQzEEMBJuyxr1Q64czCriKhSeJtoM1Zs6N8tZBcqxXJJSsgjE",
  "key15": "BqrWB1q19djJLi3TifE28toi9mpWV2FGiyBeBwodCCG7HbPoKXnzouqTa9nNFaGHftqu5c8sg3SWDDy8qubkZZn",
  "key16": "sKyAj5xDeAKp554CDpDDBc6BVCxZq7KM13iemcLWkDtzo5NrnSiF4tPQxpqvoPXX3NQAA13nCXx2fFyHNgrp2rd",
  "key17": "5mUdLsGWWP2NE35ThD8SRviauPkxhwN6tsXqJNfodYC4iJGCCxj6g6gQp6FC41J6FKfJVMPybyAcYnfVV7Kc42AR",
  "key18": "4d1Kvb4FaKNjFnyrPoMNghHvM2DHHghszSawpLfJam1nPWWqgNPED25Fjk3tX2BjkgwSjzHkYhkNiLjF3eTVqpRj",
  "key19": "2KvTVrSmmQm6ZqSorkHeRawKYMqFS33zx6zrfhR9vMofqkZ5XvtpSm7kaBaPWAhv5VS8eZodtdbDSneswTNso7tL",
  "key20": "3KEP9AN5xyTkgwzTtc5tcT28UjPkwqt7JvMqXfkP2VecbqR7xkocJ49xmZRFu86eFUTDQinziyUYvWGGSucBV6bE",
  "key21": "3k9MEkKS9Y5VHwpMENEfrFhh5Jgkze3wz7jutgrBC6n3BYYXApKc7GqNTGRiEJo7c7ZqMGA9Drj5R8pmHSPBJHde",
  "key22": "284UaJm3eUpwR9Mf2DmYUKXkVCyFj8167kuAcBiwq9fWhxHuDdaLMCAJRjVqbZYnovwkQSTiun1ZAQgpv7zayfGu",
  "key23": "2HAjhLWtDFfPA3j4MXkcwUBSFZ6ZgUSfwuHTVkrnoDxj3nquKa9AnbNM3A9k7ShmUndrkj7qd83BfGdu4gyW3zVv",
  "key24": "3bbrQBLi8eZYsRStwWBHjr4comtkQcfbAoNBjr5M9omgSNhrbhCk4cCac86eHwr5tfyJpPawZnBkNtmzeUDX79BN",
  "key25": "4g63r1JFYpBg4HH61YHiRqVri78dupKVpQXWk1Sa844wWZP6ebb64oqontbn1GqSqh2nxVM9bqvbaSYNJZvYNh9T",
  "key26": "XCUMaJAa2tfwHzZCtb2B8LZ5rMdpq7LV4UJxnk5bgdkkmuohReNDSVNQkeojC9NW2VYuMRLvQYweYpdmNwvisyR",
  "key27": "SXKiunL3ukdoTfx6toq3qPwUBxJvSVzCTpPSEiFgGFcYHjHr4KwoGvZ6cg4W6JP9N3w3sRaPf2F5Zx3np8venMZ",
  "key28": "4RGEC7vvU3HzyWTh7XnJVJE7tFqpVET7hsGNdowUTbn63UbQfBMkN45GhepjKAsH9d1XpyEgxjEfFGGGcyEjGhLW",
  "key29": "2gFudJait93VJnsi8aCP8j3jpVC3qsC8VsitScC1MH1Y9GNx6pbbtnzNN9VWbyDqWKrbaHaSYksLjSk1Uv1uQu5X",
  "key30": "3Sd9Lv7DUUrTJhvjPd1x1bhPyGNfVAWUoYxzYkppG61LT9h3tX59UhoVuki8g7KzkiWGTYUfcMkHqF7ume2tNGtJ",
  "key31": "2Uqs6aqbZfiSM6o4tQTz7jk4Y5FWPendqFJ6nvEmCjSbZF2X5KAwC2zwLLZxbqbPC5N7rjLJhhBGSBMqpEWaDWgi",
  "key32": "3JuBoPUUWm9h6WC8qmq6cei74bDjyr3tKPdftc1KTGA3DDfiE7worSVuWjYD9MVKt1mXpULX1s5cbcVDxgmSKyNh",
  "key33": "1mdRSdxeSK9gPr4UsPEAqbYpHTGbkLboseEAQ1xrYciiuJru9KdvDB7iLDXT6rhauFm3NMA2VFU6TRaoeokVrWA",
  "key34": "3Er4snbviTaF4r141bZtzisTBqqoXYT6HVrYvVCuPFMdxdFw3s4hSXZHtsBFEHq8RW7iQRNbj4MmovfkH3Kiv3Nx",
  "key35": "52kc1E8zTGMsZm2eqZ4J51h1FM9V5PkSEwgrcktzWn7Kdxf7EjsBiPvRkfu6nrBbDarjuvDBjxFQSuV5kabxKZcF",
  "key36": "8mJJj9Dcfg7jFMbGSVenmgBLuYogEhpA6iJjyVkHPLHu5W7oNQAXVQsC9surVqtdNVoJGe4t8z7otLjvNzuH3eR",
  "key37": "5rU3KKZHTH3iGa95VzU98AZNeHBXHX5XZJo9bAkQdZpgJRX1wGaW3mwPjDhBDrCxY3kmdfMzoLkMru8MSsX76uNr",
  "key38": "2TdHUZixazMTjstFEe71GEHJpuvJqKroQToawnHfG3sTJAzqUkepZWgWyZK5r4JHy63LwkkLuSpAgzDB5NLoroSn"
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
