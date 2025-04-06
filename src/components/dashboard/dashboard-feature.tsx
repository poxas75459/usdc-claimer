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
    "D1Dz9qngM3DgHHNrGkMWEcLC99funBSitRJ9LWuyVc4BiczPUHgax7w54RCc3DP8Qe1pXh23N6m2UwoTyLc8yVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PvXK2vxPAvo29trU36vdXTwwmiv17MrFwWktjJYUiwgYLG2PwDJAnS7mQ372Yu2sy5NR3zAcabUbSZ5YTvMjGet",
  "key1": "2jfDpYQdcTwK46Sb3HJbUyKASVcLyaUvrHUZGm2nKXNhjqCmoSVQ25QkhEXkCBeDa7ocjvKCxxfpQ5Uv6WzMPzfr",
  "key2": "XvKwQPKRaPZk5juWYSS1Mu9Ez6LkXWT5gqRypmotCBJb17uYzFTcEtYQnh5XrYs3YaK4YcyaPMssYAyUN3WFeVk",
  "key3": "3ReVj9H6kMNgmviM77BsH4CArP885b9HNff5pfkv5XPUEGPRpgSJichAGAq2u556Q7xa2Gj7P8Ey43Nr5QqqFaTt",
  "key4": "2PdRGUumXo593zh26cZ8FFUVqSd4J5J8yLyzCj1B64xS8epgVcmpwW7ebqYV71QoypmyKqiC6cVhsGgfpmK1eW8Y",
  "key5": "4b8hNwBqidhXFxRmB5VQa2MCALdYgrkyv2aeeT1T2e7o6SFw1ojzM9PMT9uxGDJwPZHq4DvARChbjS2s1HzNLwSC",
  "key6": "3gaEji1x6XTRfvULEuNWpa8z7FKLWdtzoKf6Cz9fFgtgvvzzFKw4XQ3ybnPxsS8sCrXj3ARuL5qKvf5ddUAB5tDs",
  "key7": "3VKhg4wwDxijRoozHcBvW4M88afGpHgM1KijNZySTq58vsAZUnzyyDrJnHLusrFQj9DBdy6TRgUhhwL2NtZqp5pg",
  "key8": "zx2DdJtMZbz6vHsgGG2qn8kzyPYk8aRktUhbiCiUFfWUDa7MT5TDSzqfEYfWeeQzZeiKTbeZmRnrsZweAYiMXF7",
  "key9": "39pm2hqYks2qinz7MbWYZRqEoJWCzmZtq3iHzhRqTxq7Cj7LU6BCTP1dSSJk5mBmdQW71Ye3Lces8z46D9bt5RZt",
  "key10": "5SoNSqZjrsTD6EXEpEBrXdu9fPg4LkDg8Hbri2khjpQ7FGDFW7dWwLqhryamYZnQ6EA3yqvutTZLs542EFrSRztt",
  "key11": "2iieAgT8j5moBPjxtghxi6hedMoLU5CdCuNLqBFnUbrmVWvTEEcWWFySAp4KpTegjmTV1pU66scYy6M56765cuaJ",
  "key12": "5tnyteJCYTLx8h3XJbGaxMWctHDtzzCPuxKs8NEFxRahmYFEK2kMJ6uHzYHBTm8Z1TRomesrBX8G3KesmjwUcsXg",
  "key13": "6nXwb2cAmTSAeLnKUVNNcKHysyM3FD4xEvDaeGhp1gbD9bbmjJPeGAMYeRCFzs3iX128ZUj81GzwJfC51Hoadu1",
  "key14": "5keeBMGb3VQA1Jmt66sVjbfSVKPrNepCUZRRGb9oRsBXsTS6QaPcWrr9biyYVw6oea4cm8NxXkifN8C7jM6Z622Y",
  "key15": "2sXUVKMPZqFPkC6aSTHL1XEUrprwgwhZXXwiVSJpGukiqrXg8BscbCmn2qQtRC3HfJcij96LMe3wVTBrWcCuNDJj",
  "key16": "53vfeCviM84hUs5MdGmK1sKPkS6HZX8Ly1UaJPpLyLJgwef1wJKWTa53htRxg4wek4fErwszoLi5TExmfNnTihNf",
  "key17": "42v4nE9NqThSfZnmFkoizsrGSGC9MDT56q3AcCmjcD54XehBjjkdqsZYrT4gGRja5mQpLYgoAnEr7jtZUQW4BKxR",
  "key18": "51YSrsBTRgyiUTmTmgNtLzcSnxgv8J31sHwL4Z5dRZyJGRE8n1QYhBzZZAZ4qjBQvaVQYuvoKoxgTsTXz2BtMnSK",
  "key19": "5zvUkKEbsGsKM2ksHUsH6GkLze7jJGqJgzcFozaSU8NUvWac7cGDAhPcwka1UR1vhh2SYvwuvvjfXPVeC8qWQUkb",
  "key20": "2MghvshMNFZg9w9DUKp1oVwBsXWxEqKtFNdear35tsbz5c4dg6SmvrUQtvsjVCngnJndj8rwtrRAPAafbZvqApVk",
  "key21": "vokRHiuUhvbymWbxFjRajd5nm9J4i275b5VfwNc5JKdavSKWicXCkKUJdaFhR1D8yiUpJ4xSfyiKHa4EwxMcGf8",
  "key22": "G7FCeN8hjppxHuy5PrdH5KYniYQNy1bYdUB4rErEnZX3Fk8PkC7kX7dbRJiQZD1QxZy76aW5Lra4Tfd8CdkuDAj",
  "key23": "8UyMkPpqy8mMePVZGiAni9ijYj6AS3ceS3W6ZZwxw3qVMpsE5Vsu4BhtCWqQN8A3SGu9UCAnhT3TzPkVAWYAtUJ",
  "key24": "25GpdgudsFqVifGWfxx63DsLe7gFC23rRM3rY6WUxy19QKoB9c55HnFmpYhH1YiFikXGhd1GRsjbbhTEgmLvv5f7",
  "key25": "5pAm53EusEjiMjfCodLPJ4J3Y8gD4tpoaeZpaQGBFkPC7nuytF85E7bXUD1JdbyfkfvFrWCnRGSXUbhKFRK1shUi",
  "key26": "ZXWNc2TAWVHFckCJFGTtqEN1a2fNvvNkEwmUSaaG19bwVWc9gpzKASq6SKHvDDpH8inPJgRBrrSPHTLrCtXycaC",
  "key27": "GGu7Jf2MX7pdSnp1cA7RyYrTpabgKvPYMzNvMSgsYBrjwHHNHLFx47mkJk2QMwxyUGPfwTvjRv6MUbSV7Abrfe9"
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
