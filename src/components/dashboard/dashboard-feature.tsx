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
    "5YYno8megzWdzVcKuAvt1T3BDi4HL8ALdew1pcyaAnKp6NHkFzWKe62keU5crd8p2pEzzTF45QkegMjbdk3NPyoJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m1ri1HvktEwdxAo7U6DyNhXXCy4R5URo8fdW9KivvzTbFDhjY9F5gSBf6L4HqwxZWGqwQsJxYpcF5LuL39tcCC7",
  "key1": "4HaFwbvknJA3HSnRWxF9NFbuWuLV6wcCpibt5mztkcYNTh7gMjSYmaf8gYHF5GqnZ1KfAC17Yf5b27v8mbzCDjjH",
  "key2": "3CRyNgNe5Kiqisaqk7RHvMbqXVgpYMVo2X2TEcC5zP2x1RbdRcACnbHL8BJRtE49ibMvzq5b9rQLYWPkgY3cDX8i",
  "key3": "36sKA2nycd8Z7uHYEgGfTE4TFvD2V8xDDPErrqzNUAtD1754mNCs7RPyU648XGryn31JXkNDFBNbMZGco6YSvkZ1",
  "key4": "wETzjgQKk8QGPUDUKLi6NxJJCWCeomXgD9bzzCwGuVwAmnCJa3Akx6aCcWcMXxijn78YYjQMi6BNPdysqQLLMnV",
  "key5": "5wtaWWTZq9rsfeqt7HUdifPcCSChMfRVwAB9ZbKXmPaheZYAB2Egoeeqn8vmzetCUJiC4xqEgQfdfwdXDXKoawhf",
  "key6": "2Br8ayfBHGwiNNW3HR8qFjacBJmbt2Bp8Kiek4ZEYrJoFKYuUfV9FqcS3MxX2rhQnLYCwc1pmXQ1cKJkXWL2zPmV",
  "key7": "2Spep3ZEDtJsVXbzEE9LjufpGQL2hKhei2zmhy2iWX7tEYrMiM46vLLe7e3Xg5mqrkrrXgF48bZvo7abCm6SpRGK",
  "key8": "3bA819QzwgMC3vKsLqhnJL4iuNyDNMZTmBy7e5N9JxchQSyGrp3GvTkRnyNxzYcW2zWNzfdgDPgm6u4CaR8ptA9s",
  "key9": "3gH4r1yUERYucMg6dNmhmQDeMfGfhHUQxFkRvhkMBENkvhN1KyG7X4DrtVyc3tbYqYaKcz7XstU1EChEDshPP2jg",
  "key10": "3d6BuhGW1u8siWL9TDqGcGMK97yNpYvpqJJRZRLr8JP43iezGz8vFpNa6XEfz3zgsMuDGmFnPF8RGZh2bZMDSCAF",
  "key11": "2bEM4CGrQGTwGvuAyj1xPGwJJrcGDirYUXcnWToWg9mipv4aanaSRHXsmF8DBcjVaTA8jPvbdtuHjPB9yQBhGpkD",
  "key12": "2enYvGTZvwuxNizzb4be5HXW3w7dtYH7gUCKssoThXNgMpvB9ranDpmVCJYrhxUMNj6dMfZrHBXEU3jpktSHNv2N",
  "key13": "4kvdw42hL6ug7BQsrxPsRYcZSxKRNEATLs7sNGff7itWo66rgKGgAkPZMBuAbem8jqhyWJJNhEr2nohG9dYGoqnW",
  "key14": "3YAjo7HyjNET2bTwHYkgwzk4uoPDJCHa3Qshg9UNZk8vFGhwpBpYMZf3FWhjvXqMdr8gK8EbgFPEkbZWHtRrkERB",
  "key15": "58jerCTka9meDCmKGggQxQ6jTLaZ3Lmr6Exw3JBa9VNTkzH2wN4gCryangZoo4sRQeZUdBPmK8wzGUwHFMYLTkzr",
  "key16": "4Jx99dEDf3Uk6BchyfcJ9yPFwoii2xby4fpwFEhg4KpevFizj4v3bmtGPWUvgWAwATSStj85Rd4KijDH4kor91Ft",
  "key17": "34fzDFPmDRkJn36ykghtwCRis7nJq1K6aip55MkEcx4nCmxtvcsTzSVSxcH4ZBXVn53u1FmhxZUrh52giNqFcL5b",
  "key18": "U1vbNycG4EB7Akerr2D9Z3BwiD1UBd3kBqEZ5sU5gMNw4BeximeWqhVtCoGUoZW7TR86bn7Yw1Pya9pqs9tjroH",
  "key19": "28KR4uVKyUXDtZr32pcZE1R299DJz9R4yGUSrJjsta1tdFWPiSSFf8CoiSWrzAFoWNwZeTZqc7Ma4HFSpMzz2aMd",
  "key20": "4zFwGCfK9tcodZzfUXhGYSAFNbu1BYsDnVKhtigJkQJ1P4gNUehD64PHa8b6zxZhmmKgFh1XygjPawLrRCxJ9PTv",
  "key21": "4UffH9KZzF19waQF9an4rPr6HWms8Qf9YYMim7qhDoXi2WSaumMQEDhLQBNxvJAqHXdUvfh6ySNeAUmZCf3RdFxw",
  "key22": "31CEBsDHCb7cXgoURF4NFdyuKqsZYcWzy2eiNQSuqomzNSDqbs7vQceUhnFjURVCBLLWXpxdRPqdiakXmkQ1YKML",
  "key23": "3kdtPT4uriaZJueNxqYwPFAzc3HPBsV9bkaPpq3oEJDauw8DocVhXiqwn1E7LNzWryStzmgL9cTb9aHGhguw9KFS",
  "key24": "3vxBsRTQvwUnS8b6GxJhX2ffir3CQPkFNxPEYZ6FSSAmpcufaPkwhY83dDfqK8TN9a2y8yyMmDjQmw9FkhJ9RWvB",
  "key25": "4hEFsFcFvhkJufYYbnT6iJMrSFbR39gog1TirRmy9SY3HUKszRhMxmAe5DfKaNJ4mmY3nW77FtT4tnhwjdvragrf",
  "key26": "2unbcfkbfLrprwXLSXQDp81wGvDNZ5Rt2YVStsnVuMijUn7zEmKe59J9S9AYQfzY5fkDdiiDjKYWtN61yhyg69Hn",
  "key27": "34FuNHgvbAXpTPAXYD2VCgcEAEP4uzE758oL8BJeXL1SZjDZN1eb33Ph4ohYuJSX48d7uS5KrTsKZygKkSQ26KwZ",
  "key28": "2wpDQkdo5ywMUsXmwDTzrgtzf1wSyvHa1cDQhswJmTxBRPjNmLuVcYZif3Eyr1zqTFML5CDxFbwSdc1arSqRUbMk",
  "key29": "24f55jaHRT6BHvTLC69h2KF832mfUsqrnFgTctJUPyXF98Cm1UvqA4iuttM24pmBk6pebwVWSfQCcmiNi5n7vExk",
  "key30": "4h3ccLz3Dzj3swH1cDexbkHqmjnt9Gp2eFTSyMUe5QfZmPgSbRQwKDHG59QbTaKGL5LaicvwZCNtJyUSJhnYwPE2",
  "key31": "3oVpV4ChoifLaNvvFCBV1xSkMK52RHeZMyAjWu64MQpC8GdfTWFj1hE8a9qAFpR7r3Gki5x9AxpqWH9szRWZdDDw",
  "key32": "48H7unMM3z1AM6VgWUh4UERX6uqaeNybKm4RiYPpcsVp3Xh9mfGtTji58M4JJUGaMGvo1n7gLw3zRdtoaAKigjrD",
  "key33": "35fsGu5oZ2dSsme7aYXfWTJ5Mg4nfosQv1e2ajTKfuvwy4viPgZAppEPdZMNaNnazcJgL1HaQiCwBgw379yDGC1q",
  "key34": "6jue6CythMeUJfB2YF7ztaEyqASnwLvGATFM9MpCKSL4rEprqTVrWc8qdbEi4XQWqNsJS9mRqMswn2nrNMF1NzE",
  "key35": "5fTpbKrX9h9pdtbUXP7t24FMZ9MYTDJDXKbvg5W1wCdc28U8TFdwgL8fQiPKZEraLtX7rSBLEGs4VtG2A8pF9F7e",
  "key36": "XcZE2xX5TyGXWbebY9oBLFAejwt1XeN4eQy3bTKSTseSzDBnem8jWibfW5hZYHrRXZeZaes5KFGQrXzK23KJsUJ",
  "key37": "2RVBXM8NeF9vvLwpExz1N87ESL4jazWKxzswbu5kstzYoQmq6T8e5onvWK11EWadP1GvBFBT44nNSRNvzwt1pJ5t",
  "key38": "5Ja5optKd1eN6FnC7eT1J4jJ1NWrc8ik35qmLSK68E1nsFqb5L7gaUgiupPPSDmypWnYTLKH3KVKE4TjQNQagbaU"
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
