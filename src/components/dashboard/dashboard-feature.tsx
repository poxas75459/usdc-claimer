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
    "oLbuoSphXfYmzQj75Ln1DzDkekPqbma3vfU1B6ACi1xFGM4W76o1pMVrs8rTETd1ovPbUHxhi4ehJAHeRvBeKLz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4prgvoYeKCE4hf7ivSbTbSSLPfwW4zJyRGi2hW5puytjfHSr5qBrCfGuNeu8v68NHr9hjSUNwnwN1cihP75LFfEg",
  "key1": "56TWXtRb39pW7kWaRyGcxttmBCJ6pBWZ3qqiM3sBJfTcD2VFiKPdSw4bF4mrgEfjo9mNrJ3ebGeAGf5WepX8ufma",
  "key2": "C7URDJnx3SKxhntuQm6HtcE6ovQzKntsh2GkBJkVphAbu147GL6RwbjY1DD7YsybHySNvrXaEMJwtkHBt9gDf82",
  "key3": "5S2NFK13Cokzv1c6KpLcfQRjUV9XjmmDGneaucx7hVQPCJnrsQQwMqdV9gRbLCPGV6dD69i112Y8QwJgVi6ABsij",
  "key4": "5vU5dWgzH9bxv1jMzihCb7moSUpxmQBSV8L8jciN1uEkbqMAGTcHqbyvxrpcTvBR318Qtnc6RgX827HRNnuhK8Zt",
  "key5": "4WM6HJAyzpraPXzJcsVGbDJ8iquZ7duFE6CYFB5e9qfsydaQzsLQiRkAiVCzpxABDqD4RrUdk8PsTbcKcNokKXyR",
  "key6": "DK2Lk68q53zy9ms1HidS22yxgaKVV7HB8KRPMKBxLYP95E9F7ZyMEqWUXeE1woSMZDSsLU4EqEXwzzmPpqJSmPc",
  "key7": "GGaTDaBPzJih1svXZnRXQex4eFrUWjV5ZxG25opngP4QqFXRVb6wACiHYNfXo9fpNieT6ZSkn5C7vXYs9x4mP9C",
  "key8": "5AJtumHpewbAdJGH5NFzoGgCmB1MisFvw9AnDi79DxdKDMzhTz17eue48FiG6ReqGx7JUitXuDGXDTpR7yXvdFgq",
  "key9": "3iPNgHgQ75sYsqC15wkyNY14p7mMwEnZY4WGF29Y6Cne3sPbKvZyZ9vzHU32kFcQ7seUNuE7RnyDnKNNjLQdxwy8",
  "key10": "4o6SxqSQXGqh8fxNGM1p1nhF3BJAa2U3jXyTDwzry364y5tQM2d8CCnibQbYEShyrDox5Z2VApUE7ZaE1kABWjh9",
  "key11": "2gDa5ZT4XHum3R8u9GVYPY3TveeyWuJzpbvEcMTCBkLA6KYtHwEtYh3a3FjnBgU4nXcsvdbRa6uAcMt99G5Z9dpC",
  "key12": "3nHk6SSCZL2a9CzmyYYjBwxKouzXQY6kz9ciU4uBZBNoEHtU3K6j2nG1QsUxGNZU14Rk1qfQiyH6Rg1UDqhB5XjA",
  "key13": "3gkkTe622GUp6QM7BjSZsGvjuYfYq1j2faEg7p6ybc2wAj3Z5fPyQYq1JKUSRFQutpXcTwTqCAePo9Bhs4KNyQ8c",
  "key14": "3aeWuTJUvrCQfRWb7iGyViMKBmM143FUifu4ryHgPjXMjFkg2TfahEUpSjA46fES5HQ6tcE77zMK9xabJmA7kwqY",
  "key15": "3TmvYCpg1WFeanhM9DVzKzSz5X9vwmNcTWnsGUkS1YZecVN4AU4evLJcH3nykL3WS4PGRYP8nzahfC22MKBPxvR6",
  "key16": "5okwqUrRU1KX4psZccRqT3xD2ucBpWsLqcczu8TkyUiyxiCf2sEFNivFSPumhzjzZqzon7dLpAkvgfWYnFgXkk7g",
  "key17": "5bfbgEEVKTkbQiCzgiwJBfpuc7PHwg24DvzDBT5YF8XWnqe3FdJQrJy4BirC6jpoF32ctDgnjmeQYHT73FBPqow3",
  "key18": "3UzxpFXzRSDD2eD8Xyi7jki8cLp24kt49N6Fz6MhhgNcarkMFffipGSpRE5hdAu7J5P4vxtsMctatFeTEp1gRc85",
  "key19": "5YhcESTdBkdakL3wmsqcShTG2vsgio4CiPyqmcmywE664rV1FJpr9NLAxRuGSy6QndNdcznMoXjbanyeSobryj3Z",
  "key20": "Nt9Ggjr5eTBvRvpLrkhFV6FTM7cnLGRgRAuKQB7DGrRFBUFM2yHsuBvexXN7R5HVegce2ia2SwhuMZQjC9PkJtG",
  "key21": "2sfUnkwJthoA2vnkMnv2h8yAmJHSeLopGDcxacSf3FxbR33nDRkkrhWTJRpbTvdrLjuhztor81k8zARJr2zgL7an",
  "key22": "44sVbSPsYqEHngbErHSmX7Hym9FKtYfgGxF28DsRF6s4YMtPUSXFvaEoG2igxrR7wr3x9azZsiFfjiWZpGTWRbBg",
  "key23": "3AjUGDAMMkriYq7Fpfdu9iWZSFSgEn1iU9omdU47H9kZW5GL4BV4sXruB7B4wpw5mCP5ELSjVvdySCP64s3tiYLR",
  "key24": "bpTQkcGm5Mtwh29mWmomp7yBtPXkCBcu9o7DvTW6UyixiEJbm74NRLNqVB8FgoQQB6FNXnBSrBpc9D85cHpYzc2",
  "key25": "5CjSwV6PMVJM7peVVN6MxUDkwAVCfTzSD6joJkK2v1zcPD6qVc9S8VjkWjhQdnaARGY6CiFcY7sq4uJ4JKbyyDGU",
  "key26": "Fbm4GCeZfHHad3SaHPfUF1sojzrbnEvLvup9dACZtpcGG8mwwcKGyRzYwrPB4MHa9rV45Ft3TBbYxr5tE26JEyY"
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
