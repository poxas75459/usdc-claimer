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
    "5G71YEboSHTJU8ieLyyBb5DBN6ikKUUFC4hanMK9zUKRfw7bYUMdWQLY9L4VvVtvK8tZ4V23J3ymQVi34hGG9vDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eEXHz2TusxJ4qKMvX5obhVWUgXsYg2XDZUowihtUC89kKzaiiLQNAEpYMr5yKTW1wnZiztBr8uLJTKeiUfjgztk",
  "key1": "4HwegBdK5fQRHUyNYBvki1hpZQv33GBhxTNhk22a3npviSYtVSKRPHULiKuYbGpGevtUE5gcDUDiGQ61A3ZxvsEg",
  "key2": "5uTWehQ8HvgH3cgzTLcUkfqng6DBfP1ohRPajMNabhQtME7LAMgFQwaZSHmzLN9NvMVAEhv6tiQQxCZnXk1PrqAb",
  "key3": "TvmMvo4spkqRYiKGkp7QaqP3tgc9B2nk9pjtGfRzrjQYTHpxffojGLuvvNVuttF8SibvxLfZQtDuYCQ2vvwHSqB",
  "key4": "3SDi1haGWVREMiS6qhUp6FGenEAi6Kjh62J8UKpfj99FjuPefwGtR8HWEWG5S6U1qt3ru1wbHAnmZB2rRQD6XFi6",
  "key5": "5CcDLRnt2aVcgaJkK5akZB8qjZxqABUJyasvmLRTjbexaGWFJrYP5gwyJMvhEXvJyzSrhiRwAbbQjUacKi7nB4h7",
  "key6": "3FheQw7Y5fqDgninLvtfB6iN5PbhNGpiQJJwWCaEgJJa12NzAv2aqQVMgre8yrUszz96fwb7YxDuo5TmvYZWzsRJ",
  "key7": "26vsWDerMQ52xRpagwZ4gytUTYhjza1zR8LPCNxfG56zjyKEKdiFbpY27q2KyMJMQVcvWjXfdCc5obfv5EvSzfnX",
  "key8": "3muDU7c6cb16RLy33AZ1T8v7eNjvq54SW4gREqquKnTQP1bKjNtH471CPfvn9Kw3x8NhrrtchV1YFdkEDtJwv3YZ",
  "key9": "2o1nnfdfsV5Y6hj9UMs3FMxuje2wDH4zQbgoHuuw2NFiSYLRxjits8pGpR2BzozoKC38SybyF5Y34qPpBHy5jb2X",
  "key10": "qbBLqPRJAXv2bqiFSh9fSS9uS6VQSD1uxmjNXXfJLzBRuKvj9joQGuSZAkoaLWYpDrzs61L9NV71UnmKJovHAZf",
  "key11": "4ZF5xKrGnDT8PQyvQYPA1UfiJyo1cQSzT2pEXSZrPfJm11pSBZY8tBihx7B1pLXoqZdytaW1TALWNTReQNdp5ne4",
  "key12": "2VKiVFh7DtCK5PXpvFExJG9reY7bSD8bD2eBot5N34cE7qXxJNYxGZ1AHEKjvKJK6ukN9hCqp3ER2yWoG1ZMh19C",
  "key13": "5nQxERjN3PGdCmW9nFj8hHYnSpBCeZx5MDuLppPAmdVfe6s4DPDCoDQC4JLCRfp9onBMETPQKdcbiBNKa2N2AQTS",
  "key14": "5Gfr42Q9rLquvTLPapQf9kbUPE5WdQX4jkmFe4j6QsXgqqVMVs4SNprnXKW724x14YdpQfULJvb2pbpA51T9LN3V",
  "key15": "2TgeAeCE9sRypjcSFqX5VDPNEgE2XW4yGGcGjgzVXv8AumYM5DMi3gAu5t3JBNGTokd4rv7Xoa6d14Q58ApRFANz",
  "key16": "4NftqEBsq3xN8fc9S5mJ8QXCith5Tr5PMrjYsGM1qTJTKatByoqVirkHCEKduQrJGYs5ZVZhg1FzvzWukacLcbq4",
  "key17": "33s3Jgbas6oLEGcabNi6feBMbHVWFHRgX96M5sWRU9LTPyDWueEnqjcJs2xWM6TEsj5tGYPN6VupaKMX7199Gspx",
  "key18": "5ZX98mCDq6aX1uEzsrMuw3qvgGTRFj2KKVxUiCd2yCqY6oC6saez7V4BU5yvew2a12xvLHTJ1pncjeC6VtnnfNwd",
  "key19": "5EcJeG8zgzeYHqLuXqSVF96L2AhgeDDAivYfkGu8WeJZGMnNAo4yuH7pMnqiL2kza1DAuWXmQVSQsuvB6HFXH34P",
  "key20": "21kEpoaKjFW3WCxEVtCV6RVYhtBuNJ1YccteNwZWbSrjAzcMCyjABSSvGKrFVcAov2FNF8FcjY7hwJwWDEmK2y1s",
  "key21": "2kd58BQovU9Qm5ngFCNMmb4xbhWSGtPiRBFpFWsaBQVNxHxAKUDCDAGpi5Fxzen76QN5drWNLMvJHUjToobkRuzN",
  "key22": "wMmhC1m3vuCamQkYmFQp5n9knfzkjZYyBdmwRDd5ENKrNzezkb8JiUm2FwWeC2BAYLL4s8WyteDvDkNqiYrrZVD",
  "key23": "sRqNoCNqxkUzQarnbZk7u6Wj8N9j3HXynAJUG7tKbPhfkUGynh3ietRsCx7W7tuXPv4pEQDd3FmzbgteyNigULo",
  "key24": "3wJekmN2KZC9qcomR5CHTnM4VoFTJjUaQzcSMxpbgGpLZnLu4CAbhfUXfcwYePHc3Jt3KYCaZiozuv8J8mLQbZpR",
  "key25": "2xjwsBt3TzGyacJEiwdPc82X3KYUhZ1YNS4eJqUrh6S8kF5PzVkcBsmcxnsZVf9SMx1QWRzuW2NhWsgYfaaBREBr",
  "key26": "Z9taK8k62PyaoNVuP4bvLmZoo4cA1nErUBcCt584Gp8yGsme5ps2HKm5gZozrSZvG8isvr8ZAtHhFgcMMtCDvLo",
  "key27": "27dM55v1oZw1jUHxkPEgyBSXDZdYotzNZHc3JecZw69ZfFyfsXPw6ypWzZT7CSSFVkuDrBsskTcJkuGHKbW5FNrr",
  "key28": "4vprXCVgqp8KaKqZMiQsGSqeb2utHdCiCR7CVnMs3YFLiFDQ4E5gLNPKjsrwsA8vqMoKJjxfuTbTDVDhXBRe3eEi",
  "key29": "VFxbSTnohz4adSXLhxagYEuj9aaSY2QA6D1BG6Y9SQyBwxKbbuHxuqqDq2z8NTswmnVuhRTUpHJxyFGm6jhe3Ey",
  "key30": "54zna9WFYgKnh2mGGvMhYZbYvMqHPTCT2XJwDsHaQp8CaNN95R52q8aNTWRqV87NLpnAN5p18mWG1BMvFu72eg8s",
  "key31": "2CupJvy6tunb1o3FuEpDe5dTpjEEBfu9H5EdnEmmFtLJLuPimWVhXRGzWnUGGUcqHNRCv5NTPS1CBszQFRCiLm9h",
  "key32": "u8MUMk39YkSmdbtgHmukwkffdp1M7mLA62pvBcQ5egZWzxkNrmjLEt6Tyt3NvxxNhs73wenNgti71dukfxVexvR",
  "key33": "ZwMiDA6wcQ9tSgGFf7tMKUSKaAkMMWzi5LdUXqhn7GMPkdfyh2ULnD7brkaLRAm5KpskUbjxCWAT1JHecELLNDv",
  "key34": "5cHMWUe4NdSJauE6G8bHjAYp7qFHDXuJGbgbi3iRk1KuQmk3wP4EmeLq3kwjAdXxrHoE1CYii765MGNjvskFeDra",
  "key35": "21iCFcJrhBUJ8m5YGHtipuqd2k48oVULkxeJu46HPcqYuihZnBQP3R6BUitGCezMbgVERA36kccSxS9swZKdwaMn",
  "key36": "5BbsWRm2dWZJ2ygZFYMn8AqAqWKxQ3eS2JLrn3hvCGefHVxAWmcBEtRfyJUDQ6UQ9CzTZPTGXAPwdwJ5ZCsyrFQf",
  "key37": "5bwz5n1cN1LfyKEb3tSQAaki3xrhnpQMci3cuEAdL7ccGF5jtwGCN1ToQitaWZJq78RuhyUJRwHoqMXriFMEtHKo",
  "key38": "57phQ8EchZz7q1toLP7jShxtkN19PXZaSsKwXWLRT4br731BhhVJLdXMbMhWDPfB53ZBJREXCXWSL1x7NGQETaeY",
  "key39": "4H79C1jaFbVxcj6anZ95VorzaHXQzPwkw8P4DpeoJjkrF6eujueLWWpwLLR6CvEPuZhVn434iAAmAfn5BgYCn4KM",
  "key40": "4dzYpGGswTwSbhdSEaexwbPqP444TdvvGUDbQpQ2ocVc6dKazxwSs6CjQdXGxmRLNXnX9WW2NXchMia23DJMu7CZ",
  "key41": "5hxWjxNG8QckCe2Vq81B947Q9eufdb1HHe55hdarK5CwzYoq2ajhZhmU12zpBuUYCVY7SXS42chN2cJt3Mtxje3p"
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
