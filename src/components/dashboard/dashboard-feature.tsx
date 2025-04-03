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
    "34gcGM6PsRNd1yKro4tTwsVjfcon539Z2HUM2dxZ75XpGZrjBjdEMQ2wi5CA3ns59h9Z2cnSnuDqQyh1dRcq5vrG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LNDuPK9V2ECGfBPvYLbMkXh7x7xvsw3fDfJWAQjirMex4nUzvsGRMF5sBsh75kMsFeNnVSnrJ8CQj424LCwxpPr",
  "key1": "54MJnPtjn9FznhvM5q2uYgHtgzDuGN3eeiFG9R2aVGPL5pAyk8qR2tszj3jKsoC3sEhhJpp3Y9Z6b1Sd383hujA6",
  "key2": "5tHh4Qt1mUBtHe67QtXrtLfp8gV1R6u2qwBcV2UwWn5tqL5QSgXW5cjkjXwc9LazDsnb6Zd1wYhVQNXZTR9eMAbQ",
  "key3": "2StECUc4WDfAUjR3fWQQFjV9Pw4kZdQeiAcU8aoXUXiBa7feauzoZvuMY98NB3qfTY68aybgSYGnpiJnWAN1akgi",
  "key4": "SuHEdwkHVf6GcM3JSrpepG1LfZunuMxBunVkeSYD3GFTW5mwMwKraYctfGt75tndM6QEuA3paDDMEjeKiWY6d2D",
  "key5": "ETA4DXVd7u93TWB5bBmyEQ52kbFuj5oWrKwThw6pMGwX15TK7gwLeJ7ES5PhfKBo7V2m5Ca3pZ6wfWKQLkfnXo5",
  "key6": "iXeUR1R1DXsB33RqJ5EQp2SZd6pFxZSih16Srz69izVTJddSNeXFEmUtdtzGgxbXkWALKjWkm17TAnktDkTsxh5",
  "key7": "MduBtW2HjXWh2MPJb5EW2cZd58PobCWdZX9UoW2it4ykNtvf1PyQDc9oaMz4tuDzCFNRLeqfojaFsp3Lg1NZ5C5",
  "key8": "4w6n8Pdw61C3o6LiqeLBYg3uwxDba3wD3TofE5fdwTC5RW2YTBKoDAZfdxKvx7d7wMV8hu1qXpGzEmmJVY6KNMaV",
  "key9": "5YmEQ7Q8YPUHx6GLuF1LpZ8ZSfbmXcUcpn2K9JKr1FFEvzMSJCiDDecMMdAfi4dro7nDA1ZGVcGjSN267xw7AwJj",
  "key10": "4r6tJmyRdFv4QHAFAxCrawtEeKVDBebwQwqN1sPSx6DdFDDMv7BVeQ5Qm4rsByJM8DVx5NwGqtZ1nZw7fFFKnPgi",
  "key11": "2hhvcwcnGAqS3ZDsBgn8cTJeeEbYUXdKwRiFXFWAT4i7Qwv4VeMopKQzxcpKRNzWNmLzN7oQS15Tz7JFNxnwo8Sv",
  "key12": "zCiZt6EaUCCEGVob7w8vJMZaR1bPVEhBLJev3NSURCHdHwTEcA1KTqH1nvkNRb8gPZHS5KBkxxQh5P3wbf7oes5",
  "key13": "2V4xQvEcukjAT9uw2QqA9fedHKZAtVwsAApthHsvgxA9WvhQxcJJy7q6xRiVdzKHWdbEG4JQRWE9hgA86Wpfuq25",
  "key14": "4zj55tGz2FZL62szbBCY5Sjete9jZFRamzR4zxBMbffQibKUqv8rnGggNfXL4sLB46aScR2g2pV6433CaGwRdcc8",
  "key15": "2mqh25QSF5N1t9aQbmDefo258dKke9F9wY62CbJNAUVp5qnC2z8rgMWqNTbG718GS7DHUFPEh2k4nhGrPGuejnRP",
  "key16": "67KY8jgmdqknHmttB7CVnvZSU97XthfE9V49ZLabaL1uUhnfQB57s9uQWgG5t4Cq2VFtrNY9a1wukoKsX8mAU5mG",
  "key17": "5qvgC2mNwP5irevRY5y3tobMC1YaeJqSJDD24KyMoxXmZ3J54iUgeH7XHM8XPUc5hrNPX29qfJBghZmAhyC2RAt8",
  "key18": "WvFGdzsRqRWccGHdnSqmoUbTUjFEvoKgUWP1kRwnNXky6eSK3gyc9KnYDuqbD49G7UPL61n43FZXGtnGkZYSfXV",
  "key19": "3HVWRb4eQZssvJ4LMgqk8W4Tx2zMMT6iQ9mPU5CuuSptiMdwN1yvW3C5Egjgfzo35NDoxBK3U7SKiUpLqKvt3TKy",
  "key20": "5ve2MGMD6JcemSPRuusgcLRvXWmHHZqjYv9KV3Zy5CFerAXs62SuQ1h23C5QwjPWb7JXNMTjaKTmL21hVAgoqcg1",
  "key21": "4ze3docpbws1cFRuEgPksUDVE2a9b5MZYvqdbc9Bgi5rjCkfJ7AxfiGG5hRte7Aq4obKf9TYdXPADStQkBkSEWDR",
  "key22": "4TvXqmopwgmx1SPebYGM4ZwYaaQ6voGthXSmmQsTn3ENVZcZF7W7Q5tNWMadhwSNNYbcKBjpYrdadNUzVvww6iGE",
  "key23": "t5twh7aPfyy41ApRYbpKdYiErpLeemMgxcY67pzvVs9ie4oRh6exGhvUo7gFsgknYpph1oPtRRwtYz8JTtLEG1K",
  "key24": "3Niz22BdsBGc8sLJe4eqmNkQsb7r75q68hDnuh4pKhmuTGxWSDFkmA5oCBym9VuS7ByhdzVTvyCmQ1KCXNYS1eDH",
  "key25": "XP4bVH1A8tjU9dvtGn56E1bnr5zgHsa1gR9H46sKiKdCN3Tw4p36YCMH51mcxe5eFvbZjH7geQsEAV5SehRxiWs",
  "key26": "3A3AEJBrZNUJ2hBwekpZe4dK862conYkDE2hNGckx9HfXaKb65BW8Re3tm6e3JstjHLknF2WhD8FJsVHzZ5ZTLWf",
  "key27": "28J1z8BTat6JHEwkUBmTKSxnyag6hvKwAJnDrWRgRihxMimHpTbQ4MkzuKeRYvbBxVS4HjQQjv4efWGJPCn5CeGG",
  "key28": "q87qA85A5h1PpbuQBwaNGpFpQV5UdB6ojGXpGaJRh8VW2Qb2EuzmxhKc4VtMZ4KLEGbi666TCxefyq6fUCUQVK6",
  "key29": "Uk68HvjaGqMaLY9mE3cp8ko1WLjibdndw1V4o7ES9qZ8RXpQ3kynxa7Vg4JhAUW5LXRZj7ijmwXJvXAb1RQ5Uxe",
  "key30": "A5sS8A5wgi8ibdzcQTMt54mZAuqyDrCm9wNbbDZbcQXhnwCsGYPTAh646cgYN7ZP3uivNZBMjxBViKhFTChqQgn",
  "key31": "2iJu5QX62H559qtRdkJ7XaizLE2Wa8oxoYzVpGrs7Hmpx1u5ATe1e6kHmBWPiSqeXsrQmRyNyAdRrMZTd3fbjgVC",
  "key32": "4KBJpnQCmFrv2AYeqDvuva5bWYbixzb4xLeYs6do1y4FinYCkLxQp2PpjvT1jufcYiSLR628hr5nvUHCBQLZ1wrK"
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
