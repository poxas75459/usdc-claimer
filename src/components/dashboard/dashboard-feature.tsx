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
    "38PzAHHp9fQEpuYqCBxyoXQkCfBnS7dY5EbwHj4axu2RbYFj4ArCXRxVZ9H6RLPLt5Jbr8PsENAV7j1d7M9vJsNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vmpx5L94KW8GAUxxB8ZG3vSam1TSZm6Cg2qXU8GVMypx9ypqt4CZG9eozMdRfbBSUGHAEDyq8rcTcEbmEVUf2ZX",
  "key1": "3DJRnEyYAbpNess2epeLAr2GydPaCEBUHJ2PC99qcD4J7JnrgycSZivYf9axBxZBvYFznfcGibhHGfuXjrBL7MnL",
  "key2": "2YJFqTLoSXzB84oUqYEusUkZtM4C43K7bWGkGysKmbA6ASx5KJD2L6FKsBLhgRu3XNtJJMHsqnf1cAcB1v8F2AXr",
  "key3": "38Q8nbKknRFuuxqKxTynomsW69ppw9ed3khBaS9CfCZVPfdF6mmHWSNuQbBqzfEjGq7YumDWPVEwEDMiUPJn6Wcz",
  "key4": "4YExzmJYWCM4PccEWWJ1GKCQDYGgSeroiUkjoVZD4jrBt2e4QtifeVdfMbPN773ymp2XVvNXgh6AriXeweEA8syU",
  "key5": "448UsBLVjywRxsK1Zx4Y9v6qV2CjbbbcTL2F2bkmW8fLm9XZoZZhRfsyprBgdqpCApMRGTVDcsWTCXMxJn98Bfsm",
  "key6": "3svhoMfG6bw5oDHZWMY3y48isx5gv8LZiqHkLoovy2UEGzCkJjfvYhoSdeJi7pMnQyXUUwF8S829x7RZUBrMTYpR",
  "key7": "3s6ayMgxdHYUthYfbw5oKFBbsqxeXouQteRKJhdvgNGntiuJNMSknAs5e2cqP2fWhi32D6z3uzgeHZxPgUszLETy",
  "key8": "4ZB7sPXYRrpnUar4x81rGP3xCcH8ML3GSDuhQ9Vdr94U6Pxz3Gt7odvgKz9pVDbkQv5EaqGjhNtYTYeapFraGyKR",
  "key9": "3xDaWZpNFHV6xtUE6Bqwv9PcqQ7YicMifz5PPoPfxZrnZMLhvaJfnD1KU4bzN7ypJpHHDLxxzmZM7uXBk3wonJ2B",
  "key10": "26TZdPPv722otzh1xKRXoQ3fUafXT2cTFRRSaDvDGpm1YmG94NcT3XzKpniCNsx6n97BfiW3GT5M6YUCtD5YbHJi",
  "key11": "ze9Nik2c6myBAHYRB1aS9BQdpEtMSBwmNE5Z2HPjghSVKsSW9tmxp43KAxDuV9YR7arCYkVPBYu2pkNwZF4Norn",
  "key12": "4idS355AszQoDDMEGWTj3pjv7q9pKqMh3Vq9kk1VbR3nJzD3KJKkmJE2bwF8Qvo6uvUyzkw9gKPNutAR6mbWrWbH",
  "key13": "2tui82gPGpNq5d2kDyyB1AGNB5wsfcRaFTWRr6DBGdT65bU5bgyY2Dxr4w3CKE57pron3j5HRtTG1wQiscriQW1E",
  "key14": "3ZA9WuC9Ks5UGWqJJASGhx6nazu6vFJGVaynvMgkDGLNjBW9d2zanK6FhiMYmJQRFwJnFKcg2i9ebJN2nkq3wC8f",
  "key15": "4cmmmDjYUoCaGMc7d59DjYu14Hc4jS3dbzPmsWfJ4rxxkrZrDDQRihLVsZS36SosQC2ro13p7TsGZv1gXxT4jYzt",
  "key16": "sqqbYttEfihxyQGRWay8xT5c5oxf6LfqjzHr2EsnQJbCHqj57ABP4GfY1tXaaeHQDfX1YUhbLK2461aKqFHcMvq",
  "key17": "3zLKp1HE1WCX4aqyAMjGJpzMqst5TMRNwYBmN2iJhK6EEnQAZZivENDZRM33Q8aYHssN65ugq4HtT9gKdmaEHWDG",
  "key18": "22Z7VTRyoswmLPybuuBdgru6GpRFwpKXRybWNpDZ49n1JCmXL5NRUT8SyHVAi9dR8Mospte5vQCoBAggixVU58m3",
  "key19": "3sELqmngyXSUEB3h56EHSwL7gV6WCkDhmukKHt9kiMUjg7ZUQbxY7CBa9LPhHSJSv3SHztLqFYRQPXTZjFQtYkUd",
  "key20": "Bogf7paDaV2xWz79zH2ucCSqWkEu87YZB5ybCoB7ZEtWPUiZWGLPUb15MKE1Jz5B393xJ8RxRvc7y2asmknYeXE",
  "key21": "dLvf2CqZrRsnGZkbufUukpfFA3fJC3WBX3MtY9ydSyBRYPeAdJJpnJ8oXwTQDc1dXNcghsBDxzGdwU1D3o5tWJ3",
  "key22": "5DMjhoZ2pC9gnfY4wqgpWVeye34qFgRWhqKniHygJTMXf793ZPN9bQS4UV9tsKvhJdkin4iJ7NUEYYyhtMc1GPP3",
  "key23": "AaKH8cpxSXTvYoBWEFkSQY6uok2bdLrY1hAojp9XQNAfAr9D12NZ4TFWAi4942quCMopjFfv6L2m6WG6QuFRhBN",
  "key24": "pCuoykvLseBHwNymFiS5z2rcN2GTL3bF7R6nveGtnqHrZgP2mVwtHz4TEYWar8r5XdWLHkHqjwbiJpgqDqv2BwQ",
  "key25": "2sYN5xZaYKcNHu3BPxA1oSSRoiXAfBaYgHsqRpNYCTPtxCPfaLUCHZCQP4ah7FfZyA8XxwpeoDTiCov3dE14TTmM",
  "key26": "4C4tmQ2VgxNDhUhKQ5ChJW8jSaSLbcHoxXGCGqfgvTDGXjot1gdfZoLZQ9agDk1Wff36mLFLkJEnZcep5gVpYGwM",
  "key27": "p3tJeYx9AFUjCJ5m9M33YjxFj95H5GaRES29ccpgQ5qYzSVwb43P7RB9s1q7fzhV9Cp1FUj9H2uQoq9h3P99RSp",
  "key28": "3Mybh8kGVTiGDV4RcYb4EQDpchzg1BruKugxvLE73X88qXsGQKc5cadFYiQL1NBst416dfhFj9vk5Q2YU5xcp7K9",
  "key29": "2vMKrjyhp8xoqUr1bE5fg6ZmyN2J2DnGuFdHKwBHqWrduhc55DdqAohdMjPvweFVV1H9iozWGj15tWNmMNcT2Uwk",
  "key30": "3rQk9kuoVoG3Poxjvw2ELK9kvjWZsbmbHyWVq2eaVBtqf86upyjyHZKpWn4PkuQKUqn9hYRUHs7dLyihXUGpgQq",
  "key31": "5vSKfS3UbF5ycHJaB4HnRsi6yUTAkaNsLZeC2TYuNig4iRVTsZaTKABYzCg47nc4R4J8xUmBd739TYk1PVzQLFD5",
  "key32": "5JyUaxuvy1dXiCwuw8qUv48zhwLRhshmCvCrTAAi8mxGu8bgKqaigxJr5yo4vMx24BdmDkBM7CxGY39SH7ZEsB2a",
  "key33": "2VX4jfYb6qFaXP64vWWR37uPVJYV2uUyJsJky3YvfeakgC98oG8MTx76f39eZaDWWYQhHLs8NuXMUd1Qq543KaXn",
  "key34": "Bwz3CkQjmdvgRuetbjviKjyyVGX9t74xuY1BH9Ln8niQ9zPfvX36NiHX5SiXtZJekBTUTLiYnTihQ5ubxJwWvLq",
  "key35": "5A8MD1vojTeUpqHhZn8x3jtmQ4s7T5zx71jsDDH3C6bCY275eqDdovgE1JEDHjCvGH4svsimhZuDGFU3f3Zgx7PH",
  "key36": "2BLTBamZABZXpzkG6xvtSZGk4HyCLLcUxzbpWeifeSzpP9DnaE4N3kYGU1HTrv8obeeuZjbo1QL9gGiy4sAfmgrt",
  "key37": "3bzfM2tBHad9DrDjbzBnkPokqhqkN6ik54yma9cW3ZRYjXNbdy3Axr2AJGLGQceWq2B8ccU3HHUsZya4Jgx6UqyL",
  "key38": "3DCxy33ZHviux9E854ETKhmq2SeG8WAXbQHj5p66rrU43E67v6yWUZERrjtJXHaSJLGNkdY9DQGaGZMpcWzQesp4",
  "key39": "5mGUjsfuJX5zrLijUk4Jy1AsSPBpoMfLXMRipHwTt8osK83AVPRTbDmQUn5QVKdZ6Chy18zFhdxTXhMLTuCLXNVQ",
  "key40": "44VtQxvdGhrZi9tcSaw5wvPLmcSBWaWNBkn8NQyTFerMxhQRCbFrkpRScxuedyduzRQxJtrEhonTmxaXsoVaJNnL",
  "key41": "2CfnPZdxTQkTQ3iuScan2A8ZuTQdkE7XPGfP9cA98x53pP9QDQnRKJgJWTf7cMLjFDiKRWjw54hZxvuywB2UJsx5",
  "key42": "4MnSpetKyQPTYeaHinQUDfkQnrvn6YZKUFxTCv7qz2ugdqy1BpzBs2PrkoxvYgQrcc9dUujPHan2s2imUZ4pYMod",
  "key43": "4wh5DtMGM83mSqbWqU8N33u4HVrwbYPbvvgLFrp7AwVWx3mzFgYn9FRZyYz4dML5VoCMkYJgTjjYBDzzby5brkb1",
  "key44": "225oK11vb6yibtxTcBqm8u6tu6U4fVz4H1dbHz3RHPmpphJGJnkwUrhJGeThXq3pEMgwjtBBy3hYu2HjbyhFAimX",
  "key45": "4t5eXzHPb3mKMym9Jfv31phYaUma66cvUJVdfUYRi4ZD8H7fwEuJHJkAFh6JiCr33qbwkmySM9ninZUJB8fJCbd3",
  "key46": "5CmTgWogJLmGQp6e72TMQsm1oMZWrH5GgyvQ869G6ifb8vPnnBApnrjNhz6Hzp1VeqjELGCVvup6G1T6WcAPGz7s",
  "key47": "4BBcKgkmuhNvKny6GNFerUVZSLSPKSMp6WaKdFXLj5RyzGzEvG2AynbdLmSeRfhmzBiZQAhyuGzaFANCQCzcthgH"
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
