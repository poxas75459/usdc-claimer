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
    "37YnshfbxcgbExpZexoiJ9YAS7yT1dvHgQQHqVNuCwNon929Fjik5Xb9pSqmv6Ah8LEe92jyUUQEBQR7tkExGVp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vd8qecGTNJQwd3NbkmxVg29hiSP7pBnuBkKak5pfFEJ9MNcTvc9VCnzsvBirYM6BKWiGs352LbMtvkJdyzu5TBQ",
  "key1": "4Uz6rWCKY9bBTDumNzg1DiWHn7u6ekyKnVGJCztgTmwVvZUJ3xQhjYC2nZf26f3znpfm5qekMyVsoQvG8aWq2TLH",
  "key2": "44D9hUXbzKXyejaMnAAWjzdp7MeoSdyT3pDrHoTuBujscmfRsdrcmML3pUTZ4BytVbDbmEnq5SEuvvCroLqRwmVC",
  "key3": "4nFUihAj3b4YJs8QNrkCrNuhwkQkvSQUAc5nWAYwXgtm7DxC5AJD8dLN9a3nw7vXVRnLo8K1jFeb3jwJ4DeCrS1D",
  "key4": "59UjkwfbvtEqqwcjgC2DtFFzJAYPxEf5EvtwnPEVFpR4Zi6TyEAfXY5Naxnbh3Kdhhtpgmh6JpgXy4en22MtGGi1",
  "key5": "H82EWqyYDzYGybBFHzp1njJ7TLTz9WUJa4uLeWaQ3FhcCJ1fdYpBZHLBL2y7ELmjno2Htxndw34nfrXbeVA2huW",
  "key6": "3zuotoETM69Da5SzsDnoQSKH1cWDfoeM8J1RQZ37qZ7VeAGXctJEeM3iXqfXdtYQY7pZhdwZU7Xj9Wv5FyCDoEYn",
  "key7": "2SGxvjRThGEnVK7Z8TYoqeZeWkY5uCQLe9yP8zuvvAnFG8t5wZ3av68Mp2kaezqoyHT2xj82rk3mCFUYRjCedq91",
  "key8": "5uyUpmNXAfv57XySjC3FCSZ9USpCqbAwVLcFgBHnLHZ5JJabLM1Uus4hB1LFcm6qQY3PLWZoTwMki7fU8H7a3J5u",
  "key9": "5JT5morGidfQGL54m8hcrao73xZT1LkAWCZHyWLyq5yFRBwaKKQABxhECCdyebHa2tMRfmykbH1riRe1QFH5TELr",
  "key10": "2VV1tXdQznPWWCU9YnrFL8cECbDs8ezupzjo22GX66UeXiKL6LoPQRTihFcoG16JuitwMHWMezxNmnPb8o5vYzDD",
  "key11": "5bVr1JMdKaL5PxQzjChwcoWAPpXKfvQDTecktJRHKYPESKGbHsJcbstr5q64EGsWqKXEcpNicN8D3d5dqjo7WPLD",
  "key12": "MNSaLBRwrz6BadsDzL8t2UCFyKka3CUmQXxJuvVd28TtvmWnFmA4Z7vmfCNd1DvcWcGSrRTaE7e4VfwL36tJFhA",
  "key13": "4BuyhNWuwjEHv2yotNCvPmQBBnVzE1wTi1SoFbajSC9jxpFanKmbgBKSP8pfvP9Zt3X38nAEQwHZyoCod74qLHrN",
  "key14": "5fWuZvAz9sQNmp9kQeLvKhzdLT1VwDh7KgsKWZube884ouVHmKuZCuPMc1EgPiBTWahWxB4vUsaGqPRgiCkE7LuT",
  "key15": "5hxsqATx4CVXmcCS6XZdbAw5xBYWmZagnrDE464HyAwWru4AzGSQ3Cfd2s33mZgnbNe3YYW4BdCeQfnbXitFGb1B",
  "key16": "2TnAuqbSCYzoMBgtUgeYZHC8FTdevTDPx9nuJEPEq9sWgd7Lre7Y4BfZ8bEXCYiuiYuRG6vhjSUkzwkBjDsMG9mL",
  "key17": "2EmBqJFA7FrbdDsZpHf2HmFmK6cfwUgk3h8XVNrNrNtr9fxRkSEJB5F1d9i4u7XKuMABV8RRQpzyxE9MuGTE32sZ",
  "key18": "ZEL3TMFixabkvx4z5ELUUMiFtEXQ78JiM9Ryyno8GweajQHoR3gQAyYq6yciyKQoha5FncgLvX5WNo3UexkWHQz",
  "key19": "5rGJXCJgrj7wMqTz8uB1k8Q889oYpmD8oi849CK6vEcPQwjNWPBDSJo4D9yGJeNiv3bSeNpd3jin5pmT15hZEpGf",
  "key20": "3TyvgzkxshiUWheVYJR4YUU4a9f4p3uZv8qWCuHgCL4BRgwYKZTSgha7vXrRa6LmsreqTXqoTn4vANpdMTYMogv5",
  "key21": "5hygHFLXcexSvRkt5LEGY7ihn2T3wYnz5t9Cxe7ZsG1uxydMCoHTVaevYgNUFCdPX3xXPMyaFEPQermvLyPiUjzX",
  "key22": "4dM71o6qEADuFoW9LPCDTgaCvSWAQX6bDqVYmx1DkQokuMTYpwQK8wqAXSUdv5KT6HtgbQuFXwmRX6R1zAyfJT6D",
  "key23": "2PTu6u1oiDbB3U2zqiz7S59Zw1SMkvFd8syKwQWzzVyhQ3hn3a2CQ9AHtuGBHZvKPcicFtrMTuZK5V8RpJCt3gpN",
  "key24": "4sGV5rYGPaNvRzWQXpL82HdwRFVGQ3UBnMdSFnHmpXdQnrFGWuocjGvTgrZQXTw2tg9xfydmRsEwKnEoB5GxYh3w",
  "key25": "5witMS5wsa8UNo9Vmc8ySnJHTJVH9U4JZnFZKa9Cyn8R3ynooxBYhCW2Zq58Xt3unKyhKfN1Qui4a9xtRDZefHHy",
  "key26": "2txuuUkpP2vghqEzipxzgfp11MJHW9m4TYkypW9n7CTjXn6aqHW4hnuaL5LupW5XsxBo5mxnXsEp9eU3ks1uos74",
  "key27": "4iPUrCEDn8dNQ4LebNPTZL8sjJfHLgKpeaVixkqkiCCj1tGuXH27vJau3myoqWjxtHin2JN1utHk71RqfQmwt8N1",
  "key28": "QB1BePsMABGsQksCj8Lna9YMXKare7Y1NJ76KvQaK6FQjjVSqGppQyk1pwfDJZjhN9H4tJVn9F66NUjoxa5KHXJ",
  "key29": "WY1DV9d5f9SjUJRX7JDhAJ91Sx4unCyJqqpSSoxa8czYb4uqVLYPizrGJ7uFzuTjQQMoHvX2rHa1xz814e5cJ3Q",
  "key30": "3khqjy65GYnbDNpk9XcMwCGFqkoxxjyMVeXzFbQSrcupVogQ4PnPDypmXWvTthWKhc3mBEefpjpkiFs5RszabYVc",
  "key31": "2MCyt4vwussroBrKVgY3Sr2sY3GYYGRDK8asvjxzJXbFQrQwCTdCEQNZaSkPgbwEzokx7YqkS2912pDEVMAgDcjB",
  "key32": "2sn3RSWTeZsTbVF2v4LwcxRdDV6SggN8VjEERWwsQYS1USvSL35qQWuSpK6oKFXRFbeViYDiACFknFvS5fUSVuWQ",
  "key33": "digFcZUnh3kkwudCAXMUkYh63b8fQzK34vkw6u7VZw3kd38MSbZuptngVZDBho9xzMuXpqwMGoNvB8WBciG8e1W",
  "key34": "NGha6T8PU3oaK2SHs41A3rXE2xrHR5y3r223P7fysqWQmt3zTsemALy3aArx1ruUjjaCzT6SY5bhwfXmRDADYyy",
  "key35": "5CLB7XZAsE5pjS64UEP1AB6tW8BsiBJJmeDTPDm9ANht9dNDz1BmBJGYkTiRwuczxqxJvStKqcbYAyqFq4VGKRQB",
  "key36": "2svxWc6wvTsN8WssTdGe6FzqLR3SQuwHUw4gtQnDgDsio5jM7bRBTNfv5qqmdsMjGe1Hfc95evXzRYUFA37AvpdX",
  "key37": "5pUY5dYuCiLgfZyf7UaaNeN7MeSJAV6xf4j9XEmNv7uAqZCptmdHe4KFMWap6cpPrsozwxJV6ntTF1vEC1WJMryo",
  "key38": "2xoBuevPXctnQC9xCjct8ui9Bo7nc1y9sFYjSSrZbUxXD5o3rCDaEMKaG6KeA3nHak3tnGZx8Z3S4NEJwZDFwemC",
  "key39": "3Duz41hAc3FMXpALTTr97TqFL1WaajboNvDmNNbf8aeSQ11feDy8d5k3a7f8eDokbQER7iJ6JKvqgaZ6MGWusn4Y",
  "key40": "565QYXn4V9xWXo4omTErDzQStF2wTjw71zKmVj1YsWfC5dzntUZUYg8oivYyVpMMuvximZvSpHhZjrB7WgNSiGq9",
  "key41": "4hcg7q3qbAE1raSc4Vt3zPmcfNRyJbFDsBUth3V9giUzE18C3Wu8hCake4Yp9XZdS66J7Wh574iLXgCbEYxigzoe",
  "key42": "5RFo3negcuJRtNS97QK9Ad9f8nf8Cxyx4MGmzgL9qkXer3kfprHe13ctcjemunxLaH7eripur719tDA7xn1R77WW",
  "key43": "ZQR5nXr4mMRBPWDmP59tTTcj5VL2W3qJW1K3MLRGUYC5x1EA5nLhVerdkHynPBiWXBhNyK9LkFRY297te6sCGrL",
  "key44": "5Bvgjezct9Aa3H1a3naL56YVKnAWiGA3u6VYDCgca9AtvcZJ6deXc64SsF2hmqUKvb5BNv17iCrSNScZZrj4QYgV",
  "key45": "43hVHynTkZ5K4kXek4Zdp5jxt1xLiKzLZirVdiNhFY7uYysX9LfZU8QEupLhgdkqXeFUqvxjLVtur2DGuixW93Gg",
  "key46": "5z7CoFS929yBFk91MR2QDJjScumFkRRLCe34nksMwUnTGDLHN128Ryohgh3KN1ucG45kM2sMQpyqsy8FntnUcC2Q"
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
