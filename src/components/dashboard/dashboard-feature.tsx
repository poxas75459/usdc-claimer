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
    "3sVZF6oV2Z8HsKf8knUvuD6AtXB7b6kn8QyBUt8gUUhkBzKME5TuddZN5m7XwKeodDzXErxAytgjKzGmNCqKDfQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MdwVacPB1YCxCZydCpqQPH9XhfResD6MEBiL3xFeoS9vqg8VUHAjx2vWZcNrvQk7vnv4eK2MseQCh4zdjCBXtca",
  "key1": "5cw3pCNie8uWgECN6TXHCHkTArMcRPwN4RbfBg1PSynJULrYtu67M3hL12n84CYLfgNDc62jd4sUULE7L6jLeZk7",
  "key2": "45P8YVHjK3vw89iuyLAPEnA7hCkpYhvsdbkwFZUGjbQ6ji9BjsBT7W56eHZkKsKo6KPJkh5K85DYqknr2YbBHBc1",
  "key3": "4RF5Amt3Xg9A1fH8yGqnPbLZtJJLUdcfJvSoGwNoDgQoSRyckHZCQN3U1tut6fDARo49aBs4LU6eynjUb85XdfrJ",
  "key4": "4FJ7udfXFKe8tQHuontvRJ29RtFtBEzCQpbaAPs9tGutv4y2teGgNAChMH58e71JanTJSFvFh6fyzcyrrMrMN9mv",
  "key5": "jbSmrydiaGcyzz6ow7Rp7cmXaENha2J4MB8UwQVFgVYcHDuofXY5m2qUYkeYXezRsf9cN6jP2tpLAS8HPsLCP7a",
  "key6": "5bH7HtNgtWGKzafvRkNLcFPceSH2oj4NF8PQyD4ooGhiTPmZTxN2xaiEqvtcm33A6Xo2ERfRN11bWmkAkaWo9XxU",
  "key7": "59zR5hSPchFBBR7NkRjWbU2LeARFzxTB7JibqpbTZjoVgQzP7kGVwAz6HL6mHP7Y4yFY8dnviq1xhmmF7AeC8Fps",
  "key8": "PN5x57Qo5e8uukK7N5inY7yKXtKojBiUrgQTTH6Ua6LXG2ZbCARb5UXzE5GEJjsh327TvamjLBTxxdxH3o1aHUi",
  "key9": "3f13cmhBJNyYjRb7ypC835uu959DVRUp46hoQG9RM6GMoA1uQEdbt6A61XHfoMNto2oEBZbq1PApj72ViBGEkLFV",
  "key10": "2Gkr1SiFKzncMmA7d2TEZq2vk9s3o9W3qmjUfWn3uG8tDp7rSjPYuofn94onFB6dDb76uFp5b11HXb6BHgG4JT9U",
  "key11": "43ZvAD91RLqtSaEBmhssApYReWcUwdegiptre8SBzyMFo73d4746x6UFsW6X8A8NmzdRWLbWZ1v5u7L916sWzMK",
  "key12": "5PhiYNZjqYGWkn3WBGpEuTzix891HSupcGtKeVHbKLdWb7et3sWY8NFa9YXWaxjxBYZe9Yt7sAEMQetiYR7NxnCj",
  "key13": "3XDTNKZTqRFpcQueZvrVdh2x8psUBGMFZUCjHSydf3ovU8jM72FjRPYEeSASD9dAH68dQQGwrnsJu1A7A8JhqvPm",
  "key14": "5gHRftQ7ycJurKMsbHuoUDgyhALS1zW5xDhQc6NWPA3CecG3m3xyYmPespfroZHfrsaGwEZMUBrXQzg8a8Xfe7tn",
  "key15": "cUumvBBk9V2EhPazVKxCFG4aTyqqmDJLzBs8jRB9LX12Y8mkf6csTdG87njWXutz2ijZAd84yZKegjvNS6z3NQ6",
  "key16": "2kVyoTBEUtHHZZWHk9omwE6y38hrAwNSDdh1ZeXWPgHGGMkZuZA8QZMSDQXczJacYXhCZSLtuErev3vNuAWKdHSR",
  "key17": "5Foyy7Sm4gtodMccf3diW8SNqdHTZ23t23R4xM1qDhTw3Wvn1Rg3dxpwU4wcffqqGUVgBiBovETK343kioWmX6YW",
  "key18": "NHuNaFBLK1sQ6NAPC5frUJSnJgppkvvTRwGuEsH4cj4FwQDZFsRcZSKTiXBMTHRgiGLFDuEVDQYtdqK4QJhxdcS",
  "key19": "5NV6o3DoRgA9ToSg7AF6bkqtzaHsHPYiZvGpefWNigErDaBJ1KvcYXqpmbwTEHARAGYo5Ey2CsXPNFd61k42AyTm",
  "key20": "45d8jDfpvTyL85tEf7dMohaFAMZA4VAqr5YuW1VtZaV2epfAdqEnMWUXZo1gjhC3cR3N2TPksPxF1qDSQubRCqPu",
  "key21": "3dxm22NGsa9rWp36NUFc3simzFXMYWTVkxHn9kYdzNZLPwt1mUQKSxw3BkUu7MaDo4AJY4tdifhvv7cHSZWQcDq",
  "key22": "dhj7vsU3BstvbN76Srw9jVFM72r2x2LjTvtHULJ8iVQJYscsvsA1XsRzEBYTGA9jBVooyvayLf6L8L93WCcjS4q",
  "key23": "PSMh56CG1gNGQH35mFucugRFb8zheyY8eZyPkC51Ek5sFUts8TtJ5eEYfiFVqLwWnjyPiw7bVcRmGz63hJ6LnHq",
  "key24": "4cCDZhdhwMHeyCBB4Zzedta6PWeRoBJk4v6MPfPB8WydXgbnxypEhrwgTosRMJZmNTJjDQeJrguzDCi4cXSJxS4K",
  "key25": "VTWVY3b1WPoQV8jPSsVuLdfp9SVQPhwjpPQUTmUBTgKuUqPbfpvfCpPoxdhbZNYA4raQLYSMZG6ve15yUdcsM4Z",
  "key26": "4N2VZ6PqLtVeuPSASvoy2YXTd6AUSzHSBvpJ7dMmY6FfUM2AJvLWpDKuWkp4zraMuQs24Y669i2vbZBhdcApSyTP",
  "key27": "4hXQYz6XyoqSoVDMuahtdZ9HH6BaYfQuDtGhfc6Uciew9QLo84qungRgowK7dLC9Y6229k2364iZT6UbfbpdSz1E",
  "key28": "2GEzNgxoj6mdUQHQZpuX1VfmFaXr5r4xzp4jr1RATdVhURLUYRyFYnEGk9b28T3Y9N2XQaRxhd28cm64bH9p2YBz",
  "key29": "51FajY2LssbKjSGheYqaw2maW71d6gC33BFuk1PzDAZgEmyV49k6LeYqFcaELaoztUv2p4CyZCCV73o52YtusgP8",
  "key30": "3CqB3hkeyqo1M7vafnp4yoKUjAyDUPkdgEhCM5Xn5BwvfVfmfq8tgQ28Xburm78bsD1iSryFy4E5jyuiCCNZQ5LY",
  "key31": "2mGmDtdyUfYPnXdeHCT5GrwAKDopcbA7UkBPViViGSPrMeLqSyEo9xAHbVaaBMLYmJQXPJWHdrpYnU4TxD3uU6Wo",
  "key32": "4wdudxMkZpg2Ybdrj6uTFv8G1bbLvUNxXjGdi6mGotUcaPbo3LZDWbCkPcLNPixVa14CNBBwy5n77Gx6AMrEPNt",
  "key33": "4Ut25CaNQQp6ud5GjwatpWVD1TLCimZCzhkrSQYPw3K2LEtjxuxru5HKm1KYY3pu1Zife8zWSC5ReZFfoYMC9SZu",
  "key34": "5f87NLAPVuqu6hswTESYrZSTx371GkGVNZXYVVZAzEoXiHRAG1LLUdj9U1CWXHGz3FfbpTQRP4gQBDPqWJug1Eyi",
  "key35": "85Sr2kiXdMtFThWLDF66fUDryuvX4k5X4LBdLAWwnj9WouHYg9qvhacfgvYoB91dewFFwsXykCYgYBZDp5CbrkC",
  "key36": "2D8PuptbKtvPRi12tSHy9Gj1sjjjHUY9v9f5JY9UQgEbhZVCDcnoRfXDQrHSuTQYPrw9gFNBpbfLCF72Lfm8nsoU",
  "key37": "47cTmHdcLT1TTtNcghqa52aTWHYNN3GVkmYx1KW3kf1TVzLWSGocUwVi64ZFqA9pW44QdhUS1gzzFeW2yVao6wqL",
  "key38": "5Yte5p2tCkLGxYRjtbNvtAz53k3KjdZFbLZNFXpKR4opuhNS8B6vQ8CUMiAWT7ab18KhFY3za9STmgk3Fnh4uN8X",
  "key39": "56wRcenzcj5h1dmH2NQEGdUMgRRnw4gwec3wNpmoz7VoBz8TUNed8zc9qmDhjYkSKvPBEaZmtTvSJ8yvCbgMhHXp",
  "key40": "3Rui7sZb1cVeoqWGiDTbQjfLVAjni1T2YrytfffxgNJ5t8ArMzf15wr2KFRayQFGtUVoNnZ1JJYZQox5dGZ1fmuj",
  "key41": "2ub7gpRDXbdrKS4XVdNW8rLYXDAwDbpktwpJHzRAJweR5Zqe5NTCZzzmWCb22HoDbamemHbrsZnGpR7MZJpnrXN7",
  "key42": "4zCoaqzzsqe3bPFRvsj7TPbJC6ng1iYMoX6FqEAcHKniKKGomsgkEHei3iBjS6aZkot5ap2xDEgax2bGiW8ydQnr",
  "key43": "2CScwTuhLFj5GgVN5FAifJCTRYXpeSsj19nsvYD943iLmYNcogjC1x8RGLPssLWA72T2a4F51AFg9ccAZ7ZTbgXW",
  "key44": "4ky1feRngwfzwxhx7kLbJf6T3o4RXRG2MAgtuXB2ge8XFy4p6dQdFMzEvonHtZw2CrByByeT4ZDzzvYqihGoKk2n",
  "key45": "3Z6xWHpFMzQbVkjY9vcqGvPsPpTaBB6Ygc2fHzAAD81XUDxTRP8LHH4zBkmYQhiWeZMALkaCsaXsyBdRL4taBWMm",
  "key46": "63K7k2PYkCu5GcX6dKFW2Bb3T58Bt5FE2nTLNB79XQqPuywo8dygVQ6Suyu9SrkrtEyJHvJ3MegBPGgF6PkBM1JB",
  "key47": "37bBe4H7MEZabx8oeK1K8raJCZjBzAchU3aJ6y3smXuoEmdmnrHwAHWJVErAz32QnyaFLLsgTDXQ11HZzNUpg4Gu"
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
