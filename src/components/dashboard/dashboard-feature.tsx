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
    "2rBabrgiVLcSTp1TGVrvFWNWe4rcr8QNwfgdVyPrqVwP4rTipDsUtEXSsYVpyAnACMVPhzCzahN4VftJvyUPgkaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3obAFKwArUspBfVSer7FFV7VwWdShj19tUxSPwqxrGHBroQ1irFxSiZT7uqoKuXfjWxLRnoSWqNtQqqe2sNDZhX",
  "key1": "5jFa725j6sjzQEiCGqrFf9hfrbNqFWcdnvu6rWU1LrYVSeuPT3RJ3ugCS4735BnBBvpbbbGzvFtaUhGNR99ZPcca",
  "key2": "46hNpyRfTWjZKEWGLG7BHZxgPJDhmrid7qtcbtBW7vwnRens65cgUkk39Ga2swjNgRGzXzE517GcGsGSgK2857BX",
  "key3": "NqreoWV5nc81cvbGTaPykYsazTHKsAaFi6kzRhb8jf9vEBPLhfekbL3ktUA4dE7CTXrF14buTNxMtLnYs9vhjAv",
  "key4": "4XB5PuYbusfkyPtS4S3d1iRgTU565JMRXvkKtuxCf2cB1Y3ETXkjyXRWW49hUcr2kkcQLjEQEJtMWvxLdRpYYVGg",
  "key5": "CU7wqDauPEPzQT9URcPsAkN5DzgcZpcWbfz9sFAKQ5c85zSBARyR6DfmPgKYa3GvVC9DvDvCjDfHB6Dqx4svhDB",
  "key6": "226Fi4ZAc5GSpGXoVP1PU1zo4bZ4kE9cBa9XgMcmThu8WJANfNsWy7Sku1orpTzC78rMTUDa1ykAAC6uypQTFANF",
  "key7": "2dQ7wdCRZxpyeh11vqp2G4Ac25s3khJV6m17nVoyerQA8wV8BU3XDjV8429nZa8TwtUciPRZmW5ZhbDwrM9Nmk1T",
  "key8": "4ywmJBooCLyPohFCWjuuAMUWY3dCoMAxkyKXGtrJRqXV646kDwxdNUDiYUHcoefVBjfDsVxvospnuMWLhMkvr7kS",
  "key9": "65SNuDHSJwmjhgcGGEAKs6uZHbSsXZwwTRdg6egkXBMRiYPFtpMYipMJ8SqwPDUe4NeUdJMM3GYAVyiC46y9Cy4T",
  "key10": "2r3hr2pxWgd8YXH7zEwn37JM2bnYizoQhBZuRhnkcjr6NsV2V2iBi4KthHFUi4wA4VgE7JQ1ngPSpgQhTAw7cj4",
  "key11": "5PJYXd4DDjDWg5dscGg5M6jyRGmMEHi3RNPQJBhxaVFmkzQrZSy29YpXRaF6r1hAQhogZFLY2GcWUMVdoB7rExVK",
  "key12": "4YzmcjatSemrVTdunrHBpNFvUFNsFP7HyubuQaD9mN15Phzh1K1CeF8EZpwehqqsQSEFLvqWVBmeWmvneghAzst3",
  "key13": "2wrQarwSDnBcxv43usjSgkmtWVHNfrmyibH4dQ3E2usrRvxKFD4t8LoXTLhLoZxtDZX8huMihsfR9cuSd4NDPxUf",
  "key14": "XHM5WY7qD2sYJfmQVDc8V519oiGFPoBhWxAWg1ScxRgoNmVQtNKGbzn9ahVjmwkXXdjDBK2i7uUFBXg33wb3Acr",
  "key15": "5sFqf3cZVcR4jRqtwXpEAMnhYtRnh2QDG2rMxEoJbC7Nf1rv7C8bQUA9dkLGwQa1xQVsWXb4VmTozx7Q97UGCxf2",
  "key16": "3AV4fTbV78bdwGYC4bFAjyGHYCN1DuuQcqtSoTtNZticX6rQk3FLkNY17UGpjrJC2imRjLJcgVG57QHH4176pj8T",
  "key17": "3hpH5ef8i39AiXXCtjJQ38CUH6ku2Mm4NLiAa24cnhBVWwumRsYdw2wczDY244w38Hxovu2bDW7JF5ek7mmPonnr",
  "key18": "3WEeE9DtP8f7KEwKuwKzvtEwFcAKFDSLfgo3q2esoPS4Qh5pt2cjfwZTpAjajud6qWhCM5KtC5dhYnbp69PHwRVM",
  "key19": "dNtipD6vckGLT1m5REPPc7MtGhnJ7hjGnH7q1M3ovTG8JewyD9KTaZenvk3XaZtaRQzrdTNZw6oe6zukbaPV22o",
  "key20": "43nwu9brQj6gK4yxmJfDa7naFgpXsDDYXsVKMSamRYzTABTgSBgNatazYTrotjdoT2Zwvym1E1T9G2MfjQ8STfca",
  "key21": "2zkCDuypUxemJMdjzqyzXmKb7q5KSrbzFTrJJCo7iKZM7b7nv35vTNL4xhzkKAqupLUyx1RX7w5exYURjv3vh14h",
  "key22": "4mSDJVaMn37Z2LpybwHhLa3FNYYGBb4Da8ZEVtZRTK7mExSGoRdvdKd472MWGJKTpbGN9VShjW55nAV49B19WnZJ",
  "key23": "2Gk19XAsa3r8fgVbjsT6SGeMLJixuLg7mSPJgHn88hbPYs286tNoHD1ZgzYH4ASowDx9hoqdqbLz9t6PMi3zaNCV",
  "key24": "Ydsx96BZMShJfo4AQLMVG4FsY9PGS5sxkoQm4ZGy131ycbGrXZ1a5Vwvu4EPa7eHb1jQJ4vaUNe2cwTmCdYaP2W",
  "key25": "4TmN9Po1aoc3zL3f8Z7TX3XnuY7yjNWv8Dxz7ghJsaf4h3kWepVq2x4kZ5ZEAtvi7xUpD94wC6cwBigh78G389Ya",
  "key26": "4VRPziHKhYzkDrHnQcoY3HYzvq5YkxUbENo6aGQeoiqEbZv372u9BRUMKqenernsxgHDe233fy8M2oyB1qYq92Hg",
  "key27": "4LfnfJzuSQPb6Uk59kL9WjSMMfbgkSroec4zkbAi8ZHvSgeyyGLBruGnQfiJo9ifYEJo6pw6NxhL8NvBFN1awyFo",
  "key28": "28LAxRdyRvtxNvQMu5jqz5NRo5YnV39fzucCKWNMDDgCP2iHiZdzvaqX7Vot61mCArChXxYedU4rn8uy55b4GKfm",
  "key29": "1CGoyJBakrngGxbEEgAmWwEjcSqag9zfTc9X39P8kUKpSjc5C7pmDhF6XQB4S8nath7DRGEhiD13iBMAzkQ6zUe",
  "key30": "3JquZhhmKJUZWVBqDpe1ksiQFL77cRNqehaDL9s6BsziPt3yMBEDZDkYpv8faQuYodbgi2Pek4w8XeWdpNVQDXC7",
  "key31": "2VaMGWWZhRbGQA2ZVbhE1Yh5GyfP8sJXR8YqkRdcaLu8Qjpcc9gbT1RnFnbwJxMeHRcbPGdLXZYMmH5TBfBdHkVa",
  "key32": "pU7o5z2wSCyw9sZf41WWvzoZtHHtH4dux8UcuxjY3gg78wRBecxJ6L1YJppYbFMe7mCfDaDKjJTgCyx8GYb1oXi",
  "key33": "2mhqCw9dGpjpTMqaGbregremQqTS6VpaXxA3noig65LkM29KL9DH6zetzzydxbfbpjWwq22nMiPQipivn25htv8S",
  "key34": "3dFUEZSVhnr5VckGXeToDouJm9NGVLVNLWUypxhMGQV3ZFAn6XshgmEDG5Jun9VwGnHx4GbkXo5ZC6H5B5vFULX9",
  "key35": "3nDsPskJ6YmiAvPPbt67r9TUZvGrVerT4ptETaY6Z18nexUo1e3Dq6irUmrVefVc3CqsKF47krmSzFaZANbdPucj",
  "key36": "5t8EoJD6aE7QS54v3rhzup1WKpij9JZJzxifzCDgduCzSeyiq2XnxW5etZud6n6CcqMbehpJhUQtt33u2tr37X3F",
  "key37": "2yE1Mq8ptuiRYC43zz2UsdcDyYSASJWNMn4PjjMpgeatNLp9XNKcmf5P7RtV73Jsn13NuuLsdKnN4ByZL8hYwhCJ",
  "key38": "5sDiNeKAbuugTDHmytAUevecrLLRCg8BcP6ED4kWxjAf2pwyQ5sJwNvgNsvhYBGBFZnkZtw5zsZ9H9JwHVswbxhR",
  "key39": "4NA3SyzhvTuxqKPAR9QB6djHDLa7u4FQmn3kY4Afxa8Z6BNr5wGdk863H1RH8TuKTFHMEEoBPYKwkSxc4aQh9iEQ",
  "key40": "34tRjjxtLc8b3uDBYDTNsuwz5MieLDaWJ1uuFTuHw1ay18L7S3PNgXugxLkD7XPREyxF8b5psecbay3Bp3Mj5wzM",
  "key41": "3YZtGiJjUBZZY2AmK4mE8rGFd3SgAxnTgeqeqVBgk8qQQ5DoY8krfCEn5fYRmgRmdb5YcW4s8mv45YBXYJmV8Day"
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
