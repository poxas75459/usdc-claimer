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
    "529kR2eEakMjAsGu7XeDgRBPCGCkZPAipgRYSKJ5aajw1Eyy7TWSDk6xSFmeJSbQHATVRWhXEnmXKCL95KVq2B1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iyE85qbXihKJmsyGSLSe1ZaidmyAB1VGDsnhGx51sHYK1oUbWRbN97xPDSXXTR13AQnDC5ZWLGxyUc1SvoAGwMm",
  "key1": "5V9ycLnUxbxdFbwduZ6MZ13F76kKne2Sv43eSLo5Hk8CCcdE7dip3AuTc4XkiBFydWm4QykhQUpTVGoLtMeHDovG",
  "key2": "5UKenCbiMoRwVkWGgEfxotxAQkhyEqVGoHnBVGguNKWWyr7enPn7RY6pru22wqagzvuha4H8oodqY9NdnA71TvWr",
  "key3": "3N2LtgxsiBH3iuDaKS2qiLXwgVtQTmDXSEbXM9ZYa7qRHjUDPsqsedzM3irLDdezvtgLwctBZXhqSW2ZzwyZjDdh",
  "key4": "uhKgVm5LoWCNZT7AXoNvHahV3zZaatKDcdZFH3nLkXgV6TLRk7LjrACYRdE3nQaZpQSsAEd2ZYMeSiW8aujh9cs",
  "key5": "5h4joKECrJRnAHxcVJpus9tLSDEJBxEzfSHuwWZ2EwdwKtiFxZaDf7Xanz2kv1nAyhWidHTbmughyCMxjdicgcV5",
  "key6": "4SoXueGYS5hnms9Fkw8sFVMJWpxx46iZoG54FwAXaFDq8BWt6WtDsWiKBodqLvZhnykyNZJsWXPrDUxHv35s1Cgo",
  "key7": "4W3Qdiak55XKLEZHB4QuYrQpWctKxCLL699UYdz4UFdL1BupfcduRVtBy8i1NsZRyYNdbJPgNyBTazBGfDePZRo2",
  "key8": "5m8WxMn6MADtLtLER5j9qTpjAdChRKgHq2GkN8WYkCLRa1VfNGxQW9Cj1tzxWUnCdJCU2cq2VpL6YQy1Z8eCPEey",
  "key9": "GQxejghVM3Q41hktGmKsqbqrBmPpP7XwbqGwsAxDXReB9M5TryA5h1Cu8dcjpQ2XGXzMKtxjuqGFCayQcFLzLo1",
  "key10": "3d4eVavgwYJ7cVQvNRqEZG6gDvQ2PJwoDYqnZGygNWxXVyEuKVh33Hkut2iX2o3LQ65pN7xVpGzVX8nPLDoxFVk2",
  "key11": "3VspVZ92Gm3fNA9PgVgueLUsbEbfGjgpthhQsXNoNx58h6M3J6RyCAEeYQPjX7H5DoBn1fwpGc6iRThyEe8MqSjs",
  "key12": "4EffLXsRDVzwuSo3QHyYZbfdsbPfk8gg7PdtrHYt9PxmyENm5rCoi1V27EzCodqLcbBhMmBqMdc4AD2PmRijej4p",
  "key13": "3TLLNpdPdNYeZVr3Ecos43BTu6TGzVaod7U2pkiRf26fqwtiBUAqJsAs4n8mzhjnpwp2jpAJJFXPyUMDzkBk67f3",
  "key14": "2UiXycF9iZsYMoxQKn3z5K33LjNsZjjGw7Mvb8HKZkB1jwK9qF4ooBa3RpkDZYcey6NmhaoQKADYbFyuhHbsqeXS",
  "key15": "DydAxdXkkxWQJkmtg6FrejFsDmDogLTQUo8KsdTyzmUNkGh5Tugtd7TZyeWPmYN6KP3oqT4aGiZ3dWoNEBo1qWH",
  "key16": "4Xnt2ACvDcFez6qoKEnXvg9PKjs5cCHYaPQC8NN3oKqA8AdYF9o3Z2PTMrUk5HND5FMT6njw3mGcNsDht5Kz9djV",
  "key17": "26bb3Tmaxe74LUTpR8o4pCEwHAHEL76it88WU19YUeczDJ5Xm33NKibcxpXp4ZUmyDGiygPeTM3CUbjb1UuVhGDm",
  "key18": "5vLQfaoANL9Ndpi3xS87sjrehFCJZJ8vax6ewotScTxjxoAdC872wPFng4aFqm8emvVYwDEJeyA6AuvGXZvQfmvm",
  "key19": "5y7GkJspvrvJwZhKzCMb5AMRKzN3fNYdWsv8NkckRtMUm5X4rWj1w8tYQsvWgSqszRd8McEJcXk3nrbEDTEVyKKr",
  "key20": "dHSjSRRoXxPpRdkGrkAyi2W2Vnb2qNkKtXPW7xn7Fp98tVjdQXpPQawU2McYa5YYotryn4rMW52FM3bdhDmUqKd",
  "key21": "55ykiwwfhRcbfnswecYyawwLHydsSjLXxSpJ7hjjWNb2YiuJB2YgCinGPjZJ8eHmSy54aYpM49BxsGyuUexJX8wE",
  "key22": "61fHv7u5MKcQ4FekfETQDLd2WP2M3ugiQsuac754Y2S3FkwJ5E8UeTz7gZN5jhpqoLpYJs8wbNgv4MtzPdNF9Ncj",
  "key23": "2v3vJfEgdSUsayHDpJde5X7UmWc5LopvC742GHZTRweWnNhBkZTtG37X2FbpbwZbe3RtBMMsKB92Vf5m8VJYnACQ",
  "key24": "4PTNa1vEXdgz6djiDgTgbkirXjNDjSpYHYMKKrD26oryttBAn8mW7CjA4ixrKoXq3LKV6rVieFQEgpUWqnXsQPLG",
  "key25": "5ycyEZhoCVb3We5K3wwyLeYm96z8xycYAq78izmjXTE7DzSGuf2cv9qqnGJq3wmFR5nDMUhojYVpARhKeRKWnKy8",
  "key26": "4mv8vk5zrQv5MqDv9z4ekjrTgMYQ2jeNVqeVKXJ5UM9HfvV8wpsoM6aC24h1qgiJhvFgos43uCcWFNNEARRm9HDE",
  "key27": "3JYwyM5knRPBdbcS7fkGqLF2Kh9Q8v3QaaFrKe3NwDAMTDEoFveSZxpG8uYPwHbNxQq5FZZxpJWKH36AkKERQXVo",
  "key28": "2fYBjMKtKfcZYYx3gUPdT1o1856QHziSdTAQ8VQ8rovDthqCupu38fbV2xgcfQJCfQvND6KBEbku9V48ceJ4Vaik",
  "key29": "YsUSc8BPy3LvNWPSWn6Egjf3XDKwiZrTHrgGduXRgo8Wj7XahUZpDr92myAnr5tkTkU7WrYH4W31m7oXn5TevFt",
  "key30": "4ZFQswz5uDM8TN5H9wqobEX3uXxHhAKXmVBGYShpg2cDEAMwMee6ET993ZK2aBJkh2wagJbyBGTQthZLB9ySGiG1",
  "key31": "aBoJw9E5K7B1PiiEguNwQxD7naKifzshXcjGPhGjHUNC74CnALaAbCYGwLBveRNWxejh9gMqSfchu36y2JdNwdr",
  "key32": "3Q6Fevsurx1vFa5xgF39z1z3VXfRMkmRWAV8eCXT7VspSK9mqTCZqRdcMmevBmwioajM7Ag8kUuDaGSJ7Co3tH6j",
  "key33": "5VxHq9Dpmr8r1f23rYPB8HXfovYwZvi3KtFJCGbSBdh3nPDT8ggjhPByQfdqKZ2DJe8kHRuq9wghkC9RaN6GwSam",
  "key34": "5fz7vSm73wpPYoJrVvZXMHeeGccfzwbbQVdcqFwcNS4T7LoRMuqo7CyygPAWx8hMAaLEuLiXKYWtEK5m3eodU9ZY",
  "key35": "5JVU2FTawzK7NoaQf54XMbMXtPVjXmcdo58YDGGkUQ3ezxheL21CBdmbDSU9LrjyDpJ4SPuBzk6jh7rk9zsyYqxa",
  "key36": "LBTqgVSqgLH3GYPubLdPwLYcQ9QqGP2fqUr8RMZn5DWPj64qWuZBv8MohLXW6Cpm171hVqEfhJkASWjDrAeTfhq",
  "key37": "6Y37iysxRNtXapQrVBkqKzpT9TWHyhS8eE2PPYD4wNsTYLCAYeb4trBpEd7RyNDLNF7hhxbu6wjFc1484TNmWfB",
  "key38": "ueX79HRMs2TeaCbsLSG44ZdCfPEuR3cJUhiQbja5Yxn7hrhaQxNxhftwr2NkH795gcmRe6oLpnapGB1bxRkcCTQ",
  "key39": "PGYVpeHtNfxo9Rvbd8JFK4qqLRw3tUfN7WgJ9383DCweBvsqvKp3SXzZBhCXgVjDWTeNrb6dsxeyyewzfon5GeN",
  "key40": "4wRVStf86ZXSvwooptuDDExqpzYByBnVhVP96Ajzjcnbyqkc5me5v57AViSwMUGyMrsVQfRoTPZzk9dExwL6quTD",
  "key41": "2hPzj7GWz6n1xKLbMcrumdKChrjBDktS13TnMbFBDXQ8bEsy94on7JnRRET8x4FsswnoE26tw7nUukS8KrcrN2qz"
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
