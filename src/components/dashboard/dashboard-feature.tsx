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
    "3CdDHCNQaZRctcv9WKSjjGdLmcHHm6y9WDg4MVkvKkLHjLkZmzfMyw5LoUhJkDQqon3SfLSgfJQa9CgU2NZxKy6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BcxGTAwLd116RGJhdNyjyc1gjsAMjR2Ti7pAZGwAaVG1FCcLVkQEchqcTRCfPmcqcSYJziidY52i1SAp2rRETtM",
  "key1": "2DxT9tXQFr4nqz1TnRRuF7SjrT2NMGY51XCTcrX4PJ8BkEwtFKxfiKoPVRUNAkvcYouU5CjxAu6L9Pvt3J7PwVCG",
  "key2": "49C1DokaxJkJGXbDrwnbPcqYjmQpvbu7Z1U3BY929MkXs5q7nRbEUV56CD2izbKwKssQuUU6NLezyPKKVV63tU3p",
  "key3": "26TAV78ho6NDHAcAMQqsiT8EXCybajBpNT4wE6mnGkj7j6iV7QUxDcfKuteTUuufg9Gc6yg6ink9xgBSkzDmj1km",
  "key4": "a1HWFd8wtjgyeSbRwC9EiWnFWgejRvFNxejwFD2YTXqepX2CNi3RU1fwBrQ3bfneQa9yV8be8BdoefUUF9FW3Pf",
  "key5": "3itkPjuRfUg9h6PCpZPaJA4tNq5oBN6C4xzDdKWAshZDhZvUjvWDaX65XUozb781a3tWSNtco2x1yoRuJmyqfxN1",
  "key6": "4eemDKxzbjXEE5yjYCPKB8z7SKHWW8Ua6rGCRMUBnfwmsMTZUsZKLvHm6h4qbP29tkBq8vvwPTex1rVrKVE2WgPp",
  "key7": "qboXjf1gAgF8v424rhirkPXcXjnn5P1JKfaXPY6TLPMZsXk396XrnwymDQuvv1D5JXfLRs7fiTUhNqHusawT3fD",
  "key8": "3VdaR55a94RuzmmwSgGNuY4nCBQSgsJeXS26Hg83CFRk4bt9SBpSrLiDs1S2hKkfjtoESvNJfQpzUdxCDcxRBZ4V",
  "key9": "3ZZC77KkAhPnSfp5hDMr2QVjUA9NQky1eezV9oRNUHwiFyUy49LWQruWJFN8FsXcL6gZuT2L9CEovW2L9gFtLxpX",
  "key10": "3iGqbE16j7bQGdemeiuLc2t28TotWRRBiBtDW2jCVGRwBJoebsxKxh1DsHQBcQhei3PUmoUUg3HhZRDa416bvgLe",
  "key11": "3DJgiCmExPy26Q7rP6Xm97vGLdQngZNNwGuNYv9U6rbKLW5oLsSm4iCERG1DvigNv6eWwNo4LJQEwH72FLMVBfqq",
  "key12": "tLmdinJ8aw8odXaKqyvUmfcoU5ntxPQ8NkjtDp89xs7JKA18Xspzj9rvzo2YoXREQdSM9c2k299gJNRVHpQqbWU",
  "key13": "62TiG5CiCzHnyS4XKnJKB8zoRq1Q6Mm1Uk2TTeCVcoCUmCWCgbFHyGkkLYSBYb4FouqwuXx2MvEdVqVRmoRyEMhq",
  "key14": "4AgrK3GTtFH94P2jS37LjHxnK4WDvi43AgHCwxMoMMBdzNKZFUDXuiVRBWR29Mba3FJGwxWGaj9R7j4zp8Hsiwyq",
  "key15": "7qJmt6ohhsUoKkhuCT2Wtq919Z6nU5gyu84ZrPwkwKPJzZSCH14XBqofKtLrLih2S7ucmFynzYjMgSUKn2ZANNr",
  "key16": "43onHT8p8rXqpmi3qJySSQHTp1ji7UjwZbXq1bKnFVGzqW2hrFNSpRYfC3n2xZrvoMiQ2aKVmka1VmB8WjNpNMgs",
  "key17": "4BPQeFpYX22JPuYT1NQCghu76YQpD8cUVSyVAettNHCULNEjVAMovGpQfZBfrVdAuvYxcS8CFoDrK9nznhtrDvc5",
  "key18": "aU9QrBsx6DE7xjArVUJ2SV8pmGnKsq3b31xPtYKnzM5UWpfAAXK43vKJdfXkwsRwDzTc8VkmA64qRggZfhBLmiH",
  "key19": "4iJAkDU4tnRyhYH9zmqC2MuybynTfUi5GFWY9RNKoL8kuS5qF1NRctdBQvuKvAY9HcjoX5fBhZb28H37j2e2tHuw",
  "key20": "2Ckjr78nTWudUrPtcZpPP7f7fiZh6a72HY7kqzvYokuuwGH2cXe14qVKzrBC2f1fKDRLmqhKtpCxwYMfQepeBWCn",
  "key21": "uBfdXn7fCnw65FatkSLpppFVmjyr1Tu8rHnVueysNTMMaF3FQw4DwRHpDvnYama56ykviVwMRuUJBXNDaouev7d",
  "key22": "NdJXsUE1y3TjZUetPGD9oTUxRoJMt43ARXQxRfgbifBEPEQQBpV78ZzX3G6nveMsTbaEtGMKxQPnoegYYredxcF",
  "key23": "4WktcMvo5McxZdZSo9r95fjqP31vzizUXAarpb5f3qHXYfx1kpLCxNJHA4cdVesHL1MF7GHbSas2PzdtbU2eXk4M",
  "key24": "3Qg5QKnL8ptgcCo68B2JaWA2HKFN1z22XfVNZmWYdL6mg5besLSU28E54qeAHteDURhqFPeS26f34covKSiX7qtk",
  "key25": "A1WEHc4aWote2EYqsqxNhXHkVg53DB71hMmp5qmczKYmhZiFjqSRqPDsYcsmduCvotWkBokwiTXHQbdvU2V7HfS",
  "key26": "4J9sWcDVE1enHSu6YWoAjkG8VsBfKYz9ZvT3bN92AzpAh7dSKxZMmYrdtHQ62Ni7KchtwssacZQpWyE5uaQFwuHw",
  "key27": "2wAdcm3wmhwaVj82o1oxLwjK5Zmqqcr8foLbbrpzJwtnVStqthzZ7GafAeSHSTASqHU4M5aLaF9h792LMzRnFgPr",
  "key28": "5tGrZdC9ZxLJgiBj2jFFSneT996HzVrQKWCK8xgMi6jB8xRAbJCzx3ajviEG5Dnxx1tcF4nTWnGBDGfKPxcEfjMN",
  "key29": "4xDx3fnhDYkA6NkjHd1t3FfaSQdPahdfzYy965WQVvK2xeM5pUmR8FH4eWPqzLVBeXTGCnkHwHrsb9yUzEYzQbNe",
  "key30": "4tq997LVMCDvo5VxotRAkxMsLYBGQN18canRuG2KJxhA6DGz4XB5BSJwA8snWbBpVHNZMD1vtXZDQJjc3qQTd1Gr",
  "key31": "5pexuM2ANsxhX9z5hemuL3zdwgYmgEPcCVFcK7tHMFXYWbcaqkKjciJ7w5uBo7vP8oBzs1GYvqHNnUoT4w3Zba3d",
  "key32": "owtwDP8CJZ2RMDYZ7s2obn98rELXx9bBL5MB2h8kKc6nqARSSMrUUa7stTFbv5KdrZtTSrKLaybbQp24qNSjGct",
  "key33": "3pYPfPxHxyuoZHrWvw7Q1Zz61LXVyyKTS9vaa3wwW7p36upVU7wE2a1PD4n9qEB9dUhhuWoYiyHyF4sLiYi1MtrH",
  "key34": "4a1XbX7Wy8z7GTziZ2CCmwRarPURCcA8cUgyhRNR1JSTsQBLgHKugynC8sEcEshDW7VZt6qLocBWjhhLc6TLp6i1",
  "key35": "2khqHnZYTV2hhgX6fLWAVoMb4hwD1hRAHkfWQziKGhHExJnkdaqG5NxpJdKgcQbjY3AcTJLxfNNoHGc5pMAFFsHL",
  "key36": "4CtDyBTWPyjCvB2hcCH1yDfwHgvLkHnaaz33XjuwRFc3X8NiJ6BePbc6cVLNTK8Hb9H2sH6CFbbvQp9DSh9bz5zt",
  "key37": "2xWCow7mxz2UMPZEZoo1dSBWXP7iTNsmFdR9c1jira8mW3tgeyrH2L1aAjYProRe4HjYmDugfAyNk2LiU6VhM9jT",
  "key38": "3uSopJ63TmPDrV42PZfBLPZPCqAS9jqqiD1oD31tTdegThUzG2mpnRcS8Z4gtrcWETe11KNwQhCnK2gToSsUa2PZ",
  "key39": "4eM5yPhQHYSus7Mn5ArgQSmb2uoTRPwqLSUpVfJ19TCnzTQS44xxDrHYMhT4g6M59vGjkW2ghtL4xVpLXY4s3Miw",
  "key40": "2J8uVYEeFdkHY5GN5WmYNgi4C15BjSc97ePTQy7gFrtCZhxEzDcsAvrphhopqHf8k5VDsv4UL9oZzSxfAXTbhdqS",
  "key41": "bfwVzHVD8JcbEggrTCuLih4gnLBKRgDUCHHESAoEJgnbbpvxoJ6fJyq55QRt1s9csQkgVTWTQawnYKaTrW24R2B",
  "key42": "34HZZsUcGvN9E91KTQChNRdrxHrjYrenCJAGiUNAHLwYaeduiNABAXEyKncvLbzC8YUvczzToJen3BdR5RTB44i4",
  "key43": "6JVZ2sy2Yht7a2BerG6WaLmpA681wUuDcEdbWPxy7YmtKGbUM2GkejMHqDcujaiKSvEryuxV3i9pRtLUnfCKA15",
  "key44": "gLQJyXjoWaGQWtYWPSXRM23qwB5R21GMDfBQ6YtoVXTAakdqZfwTBUD7NujQws1sHCTNKW7asG6MGkGy69feAyS",
  "key45": "3fnDQ7JxPkXhnDtBzXzfHEKNQHv6aFY9tqV1SeRjeocHuwKKjspv9iaSdLxwK5NTEL4qY3BuvCUcdGyuDjXS2WLs",
  "key46": "5xgBdNTNNPqBVxxGkTHQf6oRH4EHPBnwLoaspqNy3MQy2vBvuPi1c92m5hNNVLm26GTbsZvdo2VGbhHnge3u8ot",
  "key47": "2UDGdsxS3zGHGsv7AUDb5tf6CDb2Faj4yNVFuLVJmeom4b1UTuniEErQoBnAmYYGRZcJJReVe1THpUFhGDKxeSEM"
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
