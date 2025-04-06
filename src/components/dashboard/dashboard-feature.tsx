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
    "4PLVPdTzcAsekZVbfMVJ9kEhU9i2otsjb8unMoQ3QKjQe7WtvECvAkD3T3UCUtL83Gc6d5Q46ter63hhgXwmeZhv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yYQUZVL3ndWN52Yi9MSdQcMWrxRF8UqLuhpiQcVFYPogHtG18sTZefiytg4PzAwySC2cUKfEhtUaEBZ3tKvbCaw",
  "key1": "4KLX3jVRJMn5pKeyZQwgCsejkQxYoTw6WRgXKYBHn7vRUs8EUQviZVbvZ4Jy9QLUaegJeFgpCgYsbBNWBVmaLXQH",
  "key2": "4MDs5nuWkmmRkwKpq1tT55FKz6vGpGXde3gatBhNV9hGvEeRXLjxddCeQYDTmm83KutjUM6j389xFHtaPxFRfgWN",
  "key3": "NnSCKCLdxkVmACpBDc6uCX2vCgpLnK4ifCjZ2diXZdcmD1rXditTYWLRVwHo6X1UvE8UXwtUuX1Bh3BLUX4vEGN",
  "key4": "FdKYG6wTuSG311CMYjCKRdp8dXtbngNbee2GZsiQxqzknca8TrgZDj5MwhhXP9Udox3m4ffPTRzhuxuLwNSMt14",
  "key5": "3Qi4RWmNX2B2jjrAJATivREdSv97VaS7VBLt8oo1AMLE7vRpKspzq7ikLinf2kUa7yeyfYHsHRd3uvqJL3eCWaD4",
  "key6": "3wtaV5XDQoHbQYUhETGvHf5H6ARG6BoAgS7t5rawxHkctH7Uy1mbkrmdZWEBfmcXh6ehnKWXRdK4wAKKPQ4cxQKa",
  "key7": "6T2eYviTHhwAz3SJjgzrd9iAbUFUNdqJhGjDqgXWcNZpcNBwKyxSL5zgN6VFEs5PyR744CFoi4YSxVcq8opF8LS",
  "key8": "FXiro3Lhf8SaYTjWWeDtpbKPLxPrzeN8cYSa2SM3y4G2d9nzfDH8VygaDTqNWic9zULx3YbbLhXR7XF64zSzLTw",
  "key9": "4nYLBexTXLwQ6Jwt7aH6Zz12gHkFmQVDuDNyXDNwZTpFihkctNwqVuBUNXHnbEcSBudsN5MSCSwJE3TMc2PZSBpH",
  "key10": "2kqZ61TFR5Db8MTS9e3W6ALWNNssUnZTAreTd4JzT5nf9KTJFQA8jKboizqB5nhs5VaHZRPGdx9d1mPQAQUBQuaU",
  "key11": "3Wf628EDWsQjfbZ3LPUp9t6xoHNM2V3cesdBvCHPSjJXe1reyjdM6RbzBJoct6tFQbGcextgQcyH4e3hkr3vkdDS",
  "key12": "54VUVf9BeYZGZxFihUz9TGgyWH5oVcQeC9cNrJTScC8U5ogUwTNT4RBEa7aATTHU27iSK17FRvxA8h9rcQu2yzsQ",
  "key13": "quo4q5Axevdqvz4FPiyL7pahPmoveoLyAwNMTvZkgBG7bNcj3YFFuSoc8xQtvdeYTwSoe8k7QVF9Mzn2WaxUkCm",
  "key14": "51RQLh2FgZDiY2BSYgiL5fk6dpBjrW1vP1M5QxJvHAsvVumUcqWzDaQK5X7Wa2tH8gHuEXc13nUUN3926LRm9Yu6",
  "key15": "UrWtGrUMXzkQB4EfGfYowHXYyevdKesR9LixEhzn6xC4JrzepDyo4rDoVpVSgJx3XX5gausXfXKkmR2j4qe3Fua",
  "key16": "33gpRhFWwsUcpQgRurxLFjaq7pRHwpgCm3EFfuiiU5b6eocAHegYsc74HqqpT5H5r3Zcufck1K8aLm6fcTjfwrPV",
  "key17": "2rJmHYYuD2wtjFDVkBcLkHPLiM8qatxHby3Z87fsELkonrAJz691sUCGxv9kBtAfAQFPqiNvtGLFctKDf8iJyy4W",
  "key18": "5LPa5Rb59tUtR671m9dgMcjUBak7yjnw5PZdCMkfNwgQVh9kMjM24y436ogfgkJoVzFHLbe9TZS9JviLGonp1r9m",
  "key19": "AH1888bM5Wt1grxCtQkUeaW9sK1doiwjXM1GtjLnGAuduS48zkmmZYn7op1zokK3Cqv1kmspgGNgKxRi6HcKo27",
  "key20": "3g9xsxB3aSGGBmf6ptcEBLksgJgRCxpVprSKVS56eGCpYdsgUFKQQ6EN4L3araKYLzT2SeRE9t6uz7g3ujXBV6zh",
  "key21": "4w7C3PpF3Eh8vARr1S9Ari8P8NbEHnR5nEtewntvj5SyHrfEM4zHSVQJZy8jzbRu8sdFq6hLaPxXZ1QriLNWYzE5",
  "key22": "afKvErnVKLEUfjHBAhDuPiwSiuvTNaVCJzx2pc2p1XNkmyXCd2futfQW93TzRcnsQqNdZ28HhxVCL2nwxZzHS1N",
  "key23": "64M3ib8tcN7hwXDqoyVsMQvpTHdFqepxjgL52XYQYgB5oZZKreBhYM42hbTfG7vthJGQVRoxkENq3QGhrnffW47H",
  "key24": "4ZY5UxiNDB2BxB7uQuyZ8TDGicn3nBFDyRUwSYc6wtfq7M6dUEi6tr36qwJkiKwDoNgsZAKXuuGVEXsJKWysHUmX",
  "key25": "4pbJQAmqMGdfjGm9TozBmjhu19948YrW7njysYtaJhU8HbC4fuNjpxyDZW81ESzt4f1bjmvpa7rYuatwzqGfn9Wa",
  "key26": "gP4dXNjrviP6QVq3kWRadNM2mrQ4CTBgMgWV5M9zcVdNce1SERed6S7PqnPQFzE2PMhTroYJh6J87HpnhijuAte",
  "key27": "3DYCGV2hXhtdipfnXn7QqANYuDNq77aeq82R98oQB5xnspJZLPBoCEeqokVX2rZZAY1GpeD8JC4u7R4qmWL4Chha",
  "key28": "45KRtJHUTLbTGDioZq6QjeJ7E67MhUTMHMW5EWYVGvYrBdjeTNZBfp1uPFk5jrFay2B69QzpYrdPwsLkPTZYzpjs",
  "key29": "3PU4t8rWxwWoEbZ9YNVFoBnJ9k8L26UREq93cYuKDESSFYDNtw2PN9vQ4QRjkuLpgETrtzdTC4hn5NcH1aJJ5Rur",
  "key30": "3XAcNTbUNrb3j2iUPWZSViboe5fJN48jwin1LSqjpoxVsLv7LDBoVRWH7R2oyTDaZLPLYG6si82cKYUoNELNmAcX",
  "key31": "kAwu8zjNE9M6ANiXQqGjwJiC7DUPdxav8ehXmC1WUWWqPSoThHrADeUprmtSMkaY5aJnbCXnQKbX4qFtgx77Xwh",
  "key32": "4Be7chSiJ9gaHQkKbhiyCSRxospETTWRibiKYewGuwSPmvzePmzmCPvBuVEQVFnawvysgXFqaaygBHy6SBcgQHe3",
  "key33": "2aVYr4nVoA8LdcXFbf7gyzHzVQ73T3ySzuKUVwBPmn1nsRcTYvxBvET6eQXMggbFrVmwXkEuyF3uAkbtTBFhb5Ud",
  "key34": "2BdxuGPs6UHsPip2Yp5k2fwCVHoPjHQSGi5ZWbWvFJbREDVmwBKDGQq4irjPziGEo5E75S2Srf2biKoNAA6jsJjg",
  "key35": "4Qxo4PWRt4vBivh88rUyhEaUUqGF1g2Q75nHwbATSTWRre2Ye5DZdF9LwU3eMRUXcScoC2yP6kAwcKhGoTE7bMmS",
  "key36": "ECHWmsY5Y7Quv98BpyT73z9uNmnJ4PN1ztiV6m3PVNNLh3VDPi98FiLmjX1WF1GkZLFFZNGGcRBfSBCoGL7fNC8",
  "key37": "5GEDKTDwHjb3NmQ8TxkqkuPaAYToSiw6422hr7nAp8xkeEETDAqj3HRNB5eLUtEFgCdydQuqytaxA21pza5MpaBj",
  "key38": "5n9azbK78fb96X3NL7ZHtWp8maUXo5P93CvESSVNV1XsqgT99uBMu3BWeJxJo7ajBhPUB3DG2ZSMksswLMZTr3df",
  "key39": "3w4ifKVJ9GeHP2n3thMjESwfm9aPoufn3dhYFpcPBQ4dFy4DnAR2PuN4yMUTeEpMqcrmGvRxZwmKPiBsgeA1ndZT",
  "key40": "5H3K8ZKJWusTvFYJpyDyqKCyFktr2vzTSYk5DbYSkTjMMk7StEdsCAF5jieNNfi3pBqfjYo51DmhnKtuLHNAwZqL",
  "key41": "vFzz1MViM2VYepEfDnFoG246s3YvwWVwfDVYVoAyghaXkFYGRRVx7ZASzDntQte8SP1zAbTWymxCZtSh1Goyujw",
  "key42": "nasQGU6A8f7TQg5y7kXSnkaF5Ptn5oBjJzkBcvdnEaTT5hmzyzrqk1NQzv7EuzyFWB3NU5dU7s9UnSbtHFGev3p",
  "key43": "8PkeV8eQKq7bbkdizspzk7ccgMjjoVJQjCPAXXEN4SXpsg77UTRnmh95j6DjMpVjCkqKFALjM2HGGdicK89cTsZ",
  "key44": "5UQZUMaf8QWw5i4fPUYwv2TKcEJPf86xFkhm2G6MJpe5uEKZMA8tYJS3DFqmA51cM3M74w4dvWUZfKHHb7XDyUgZ",
  "key45": "4kdPpRv9DHvDeBDQxPiq4fhYRbt1PG4Y2C7a6BppJeAHgpLEatY7b3p8DxMPhtmkAmWtsXhVbWBM46sbdGSCbJ7R",
  "key46": "5q4d9EkH3akkFyzcC5ZThMNqS6SiqF8MTHMzfusFYxKGocZD3oaE699j9DyZzytn3wee81n7n1YRgnc4rg8N7bLG",
  "key47": "3wDHEnWmJrcyT5eSQ54AA2d3PR6Ht3M4LU7oka9aJxzhhtee4QyBCT7T2CGhD9u15V1Eyku1DdGxJQTut34WuLPj",
  "key48": "5oqDSBDZFMfmWjQoYSB3qYWgPWr9KCMJEFM3gw2FW6oJT4sMRHqwjwRfe7BZ2K1MKWXCWWdeujkC41d8Fr3SsVK7"
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
