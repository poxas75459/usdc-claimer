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
    "fd6rhx5s1t94veoc7FeUnwSRfaB8c2DnVc1XQdzUCJiJYKJFDdb1AYMFNbTd4VJSC5H5aheV7uhUbrQQkq1ycn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51ibE2y4w8h5ugrJ5GedKuoutSWhG9yrkX582qkroEQfsShHJESXwknQFtG482vQsjdBxsF95wyPJERZ4i8Mngo8",
  "key1": "5YfjTsBGJahGdjVVjbLVX4kbeeZVjEVXwGmAQNQAnLPaXcFbnBNR3YUEcVFpD8qoGp9TysUhQRZqYVJmpP7bsxmB",
  "key2": "4ycdbTVDpWk7hvfZn8LXbvh5QJEpS5i82hjhGGyJEix19rAm9UMSQG6SZYKNbwCCAw6sjJybUZoQ6kMVb4ioijyM",
  "key3": "64ncPS86ZD46XCh6fZiNh2jNbQsRnkPVWUxRdB2J8f95XYS4wZG3ZMWdfxKm8E65Azrb5NFRX4VQHyyGdaTFcDmf",
  "key4": "rx59oe3fLY4atGiCEgkmcD7fjVghgCBPQymaLGADA99hKRR5U2qU6PPBaCodfzXiVgut6KZmb6z15UaVq2dvLuS",
  "key5": "5oKisAYxeCmHvDY4E17Z5qktpDZBH47WjepMgNvZAwXDo4tViovNvRrPfrMStvXVrn2QWVqofVoGVTKbqCNLthy8",
  "key6": "3onEb71VHAPeoKK7trEEihLjRtBFTPS4q6SjrUzC9uj9v5tAKobxLjyNy5ypJdauY6eaNDSn1xjPdfva3eLreuLn",
  "key7": "5FWVWk9XcPDTxzr9pMRGLLJTctzbCGfeZ7JUvMDA29WFW2P3F4eTJu8L82GKq3TkH4xUkW612uF3htiMpj6u2tbL",
  "key8": "4juT7t2Mz1oNaLE98aqso2kx9LoWHubQtDYakXXGNTm1UqPDEBH3eJAiquD5L362c6SBCZgvb86jAk6VeZbhEDT2",
  "key9": "4sbEAp7Grx4EZUp5vZK9o4HReA1nHNGF8iqLJLzbX79SQhMm3rQErJwVkBHM7kr2qAkP8C4EPSprR7ZKiS45MoLV",
  "key10": "Z592EdJSfNT4G7Co8n92TBCW9diQquwYtFhr9APLhkVXm4q3wadygXXHiWUVPsBQKsNqQe8ZWCfC1BFEyv32gGD",
  "key11": "4n8Fi5ZUu2BqWxSMzVhbNSJvgvvjNsRL5BAps6fAiq57FLLAA8WhPMimVMQ7dmXaGJ7uLCv4yEWRgbkLuUNvrNb4",
  "key12": "2F419D4PGPQjRF8ayfDBeA5JWoXyBg9Gm6k9Zo2NFHky1wN7kidKJgk4DKdYEnhYqt8d7pvNP6T8ReGNYtBdf2SY",
  "key13": "4Sqo9rQCvmabHpsnz3NNMq4JuEPx8YUA6XhefraTjtaKqS99qkLfiXaHd6xHgS3cufADnW5UQ5kt3zHdG2j58nCb",
  "key14": "4edFyN7gVCWerpwuJxeajpLUMZH9yJqw2qvzLRnpiLUnxo6QBpk9xVgXU6AkGRC7T82KBCjSTbofhLgVQZfphi9T",
  "key15": "qRB9jqgssZoRcEqvNuuQ2KnuqLnb5aXmhKQ7C4Cw43KatKxAV6h9dCyBWhWFd93hwRK74pKd1b4r9GnxN79E2Mi",
  "key16": "3wx1wwwLkDe9zdoiUn8eCus1777hL8NkjpKvXRboSqA1HzyYgnJeypMTv8W25f4paXA6Xv72MQ3fGNGGUJW4HBQc",
  "key17": "5xXXkCFnfeKsPehEh3ZUsqk5sq8zUqpqXoRrQNp1wopBLsgAciUx886QvRpSkNh6SALPukbiTw99JwjjrkvCpxd1",
  "key18": "4L3yKgKfEDqFvSfmGQ3rzNheDEtuYxgezd9p5BipUiz4RrniNrQJH48Xf4o4c6PXsuNq4uBzuFvNjBUPPdF7kE2u",
  "key19": "4P9fcoiHdTV29cb9PWDb8WY6CU4sduAi9iSJsnXJgMUKugo1Y7ZkueHjqeqQGN8i2RA512iiYeZokhzQKGC9GY2z",
  "key20": "3pPJV8dMbQoQ6jwQ9sgrd4HgnW1MWMQUNwtXXBqX5yuL5Cqoi7wFXwstjeL85kmN8FAaYoFYYub4xU9rAaWFnkb4",
  "key21": "aA5DgvhgeH4nPwpLy5mq3NPfVkiUEfn5tzu5ZEWKRztn98T1FNoTLTuLFTgGtNH1ozmZcXTKyNC5bYm6hfVGxgr",
  "key22": "66iQ9iEHgD1A5vKp8kLvJKx4e2BPXJ6aRX1Fsxu1qL6mfcn54C9Gj6KdsdbWLrVe4STocbfWYijwsC8iqLyvxo8h",
  "key23": "3PGQ5uG4oB1RZj2He5bQCywbbFJwTn39Fqw5zTAvdvJkYB5q9aN55yRaAyN3iHxkK4Zq4FmuCsnqg4vrGCx1P3ss",
  "key24": "3H6kfvJSv825s3ZzVW731h8jn154f9Ap3DnZuBMgVAi6qLjpqWMBuZPGZCg8NCwGwFTdFb39ibB5xnxNoH1gpttG",
  "key25": "96g1fmNbVqnZUTbApwH7zNcRbX1qhwnoRJiVH3mrxEUp1MJ9uMg21wECSuvAXLi9vcNKKN8MJfXenoM7AkhQPAA",
  "key26": "iDYZrXU5ruDQ5qaL1cGFnuPnyKRbNNqMQFwLg2zR5K3Wg8LzYUqEozCAR3aAhGrJ81RM9t1X1TLcBYhnXmoyRhc",
  "key27": "2wKAg3uoSpiyaFmgovcnibk8Qi5xt59rs6jYaeWkDEjTDKYZGZpUxntcUsgq6cZctmEPK78Rkrbw2FMkCmvSy4em",
  "key28": "jyynUC5VcsF4g8eSzb1sD2w7uxMgnfz9W9b6umUNHVGFKYbhro7mFaZVpw75rxfvY1GHuP6DLXjcPDzo82wugKL",
  "key29": "aUHUaTfnBpx7osK8MrnCw9mnHJbYLuX7TmrTViPymdJ8bko4NvbVJGR2oUBmZHxjc7cKeQnDBHXQuTVhiyrabTz",
  "key30": "4PHvzcX5s7kz9XLep1TQQiSs2UKVv54WDtWmCT7ogSADRibfKfaNek6qYinsttJ1T9r9TEjyyhvUcDn73GTjcXAv",
  "key31": "5kooQE1xhi9RtTgjeLgqrX8wW8NuicE9JXboW71qNcqZqB5HJUN8dwE8b8XkaCo7FpNZsAScc6V5qGqJ3L8HyhUc",
  "key32": "Jga1Q8n9tHfpkFWNxAta7fk9QfpRQRiT1b4djdbHxrj2NAthvgJW6PYWZaZbi3Ep25YTxLJFxMom6QkvuEzDJ33",
  "key33": "35i4umUUpGTjx3QHUSwTBn3nJ8nLyYyAeS1ivMdXkLqX5C8e63sSesUnEeLmGQfd3tEknSJ3NzuNTBC84LP5a1ne",
  "key34": "57MhTwpwR1UJxFCjSPtjmNKhNusTGHnnksYocGw6f7xxkknJXaQuQoFHZY25DxttVABx6vHJ5ceC9WUADqpXvpf1",
  "key35": "hDV7nhxUMeBmsUVNvMPnKe6HrZhX135iRZTbNJqM7AAb2GJBBp5fZ57pdB9Wuqs2vGbuCfTus11FAg3FoK5ngvE",
  "key36": "2otom3PUBPA3QXJ3w9sD73rEY2Vu3bjCBcTsEiJYsJd3DzCgDMCAtArukC8qsP9PQSaRpZzJamcVpFHrfoy9pt3G",
  "key37": "i6XoWpmVYSFNnVf2GeAtizmpC1P52DcK8owBt6EHrWiypunW7ZxpSSjDebdhpFqRT4dxkgjVwniq5rQrVJZhBhe",
  "key38": "3PDdF8qsiLFJHFk1vbSP7M7ALhtFXD5rczH54hoofrNrMFca4Tc992KWiiA5VjtqnGtbXLK8ffQibxeqP5AysQzv",
  "key39": "5dAFotCtZr6JC1EPg9CyJkyntTg95wt34XPVRg3rJ1hHYRwi62QCW4yWcSKSJVAy7C46hwxCYM1ya1vit8tdHg7q",
  "key40": "3dyG9kzDB7LLptuNZMb34n8PCa7fTi33X9MKUsRsJkzh862ZYN8ZWZtAH8u4oZqQ2b2x4gQZmJWJpkod27KBkS4t",
  "key41": "2ttW3AQ7m2iJmFNcAcc49cEtPgxHhtdwU53q31kftqtifbZLChnGtWML1fRyjsb7ZoZsCAUkq6riDsoSxxJK3qB9",
  "key42": "3zo2b3Bz1MgEYs6s1HHWst2fsvihX1bdrHqzKPCNgQQbFDswbH1k36stsyCE5tD2nkLMfZABvu7rHWg5FrDrjMi1"
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
