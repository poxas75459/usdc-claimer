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
    "HdsxaVWGGZ536TctwvR73cKFobETHtjrscg6cR9tr9md6JhFuXTSgmS5zCmhVJ7t2wuXfLqAMu7rprGgH8cvpdq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fbyt9NCD2XytGjUQcsZq6U71iJ4vBc81FLDHLeQHSXA1K51LAYWxVRXHLkd4j2stcjcyNyM479NmZSLK7QS5YSV",
  "key1": "4kLv5vR3zo8dfny4uj267RgP19UyBfFjjwdkVaYKm8CgjVyarM3BwAB4wm6vaysxRaur5Mi1nyHiCstMjbBT6MnQ",
  "key2": "3LcDak6ibjSvFHuWy72inWXHsUtX5PkWCDFwH4DYkWpPhbokupF22DzH9PtQ4ob2SNgYsQdnLZspaRDb4kQVMnNR",
  "key3": "5DvCBnLz33AWSVwAqf1gHiJsrBGxWZL99pxWGda9FNrwtHNLC6cz3FiehF3gP8cVredVpkpc3UggYpF7RzYv59G3",
  "key4": "2ZT5bELiNs5N2rk3kmPpGWnwSh8DeNLsijq34gsjpxiUTJndteggZBjaqk3v96pzUs6NGQL5kizsUZHaSgkej8K5",
  "key5": "2kwvSDABtEtSPTyzkzZ1dBBDnnHM9NcWB6Rt9jFW1mx7kw1cVCHHMSsfNgkJtAZzMDNyaZSodf34WiPYxVskgyUT",
  "key6": "5HrnaGJrFQQ5CAaRTghgKEhuL1Kbj2oWZDbaZ4zYEgCrNk2kNWq7c7XnKaJKVLT7NfWZnQmNoHCYsnAxdhNDCQXt",
  "key7": "5A8pi9mfje1SiV2ahAGw3oQuGx3fs33VeXrJq9b4gb4toXhucPAMeQNBihYEjrZicUDoEpFYVsqypvY9Xu4m4t6S",
  "key8": "2xuTQrBpG2ZJftVuPv6t1irCsqiHzbx2QbkRYcJVym86rLY9JrJTsiGagBj8txLMKh2MTSecrAhk1RwwJkrJBC93",
  "key9": "5q6bKWXbBSXKBrhbfQAB2DhjmJogxF53LJFDFFHthksHUHsJ2V1dP7B6fAjKKTpNMxSYK1kRCuouH3ennCguH38n",
  "key10": "44xkALtc4d3T6WLbme1QyGd4aEwHrA9xKrX5y1Nnvsws3iwQwBy4B1BdQgWH3dRcDesm9RF1SVYsD2q8VT7Uq3SQ",
  "key11": "46sdYQDmiKXN53YfVxLA5dAvxkHqiz5Yokq9eYgJMWa27tLxDpDCzT8j2fVRBgx9oMu7Zv68YgoRzQ6am9MWfUHk",
  "key12": "ASN14ybmqPfyFfg6BbjwvUhrvyNYhuFChksqSyfjGyPKgBmssgsBUDJtdHVnqXbyVwekLWkScvYK8eiVeDDmYfm",
  "key13": "5SuaW9k4iQ3kHs4QiTMBe5xpQd2qSYfpiDRkULWznqEFf5dbN6qe86ujPQKgHihzJNcjRhSyatJy6mmLWvp76Rum",
  "key14": "2iqo2dPuB9hRMcUUf9gRpSyHz5nbkMbosTg1rc2WToizycGRqrCTEPTEZcJ8iBLaDph1zSegz3zU74fD37j5nkYe",
  "key15": "3tfG8SDw1bbQqSKv4J9WXsUVQDpbfucJE6pdAB7fu6Kze8LXf6ZvFmheYMd7djtJA5KVYWdkv6qKZ8K9jVa5RwsA",
  "key16": "3DY9P2mTWK4AtjTAJSz3fYeUCFikWZGMxSPTns8PPqPFxQ4amsKbUW9QdQset7PaTkQwJ1XQLpucBGpMnJRv6QYx",
  "key17": "dzFmZ6xArypz73QiFCA8JbcYydVjUoNeZ2p2eNY5QBXPSEXwTNNwm1Jq3N775b7WyzAWk98H5cMWbnXvarm34Ga",
  "key18": "5Xa3X7JomiZqLHF8WiiFuE9dAbgb24fX32bC1nRe3PDUU1fKsqQjaCcyYCSkaWF71gQD6Q2uRM7Qk44ztkG5yiKw",
  "key19": "BGYsQxrUNqmgkUnvXnSR42157x5ed3uzXY89joM5y7XdErMhzi8bddvL68ppu8KTqh5FViCmsFknce1iX1Nu1g1",
  "key20": "edGgjfp6YJ3dmkLmQibX7YihHVU1jCVHHzVa6DADdardF4ezWBsEsgmJhde7b5q9x9SQ2ALpKRvmHmPawCYdCPN",
  "key21": "3DMZNVtpeJ9cGdCuqzucWtWwjQ69os8GaPDZWJdv9EGgvFA9HKa2cQYWsUsQKKzJFGiqW2xDo1ERiechcdTSKFVJ",
  "key22": "3ZZTFngdpyKRN6Xe3ppqNrYnpqGGeMEtugyxT39p3oegMwJ5y6nvP84yTQJCohZ63VGoLYDqspjmwufUGR1VSN2X",
  "key23": "oRvyuUK3dtkHxV4JuSogoiKYt5ZVDRdrZHn2eD7SbFH6mFu5W9CLqa2BccSYH1rN3nMNJWe687nnEjbH9G4168U",
  "key24": "3bxiuWRoSi4cHRAvnddVi7H3asw6E71xh1Y6EPrMALY3uk6qnZ4C4NtihnHSy5dgS6JJMuoY8tW6KZPyqY84QJUr",
  "key25": "3KfViRvPutdGpQXamWLvNVkXVT4e4KgV4udAypTJAP3XyVygcukKaj1pTAysPAwzXPZZJVGB7ohE3AQTFkBpkSb2",
  "key26": "2QPT865omvk8RNsS3zm6kFNjPBtTbF7yLPxxPXvYwparVuWTcmmmXzKLGMKHjHGDMd4jmAj2xNAWaxvMz7miaB9S",
  "key27": "2bU8nUuetQgKhN6C2gAxj3xrckhkoD8kpAV28BsmuLbetxkx33iPmpjykNSodyr6CkjNjS3ffgauBJueSqctiVb4",
  "key28": "59tHgcZ9oB16o1LVaz9c6QYP3M3nAofHuA1Pk3EZndtMhNynZ8K3eHHY2YatGwTuLe6a8HyfdPznJ3qHHBxTBDPZ",
  "key29": "5GQ4opgNkHz8f5pQwP9jdY5CeVYiFuMPDEP41CCfS8qMZyJYR51z9dP1t2mshK4V3Fmqej1z9oRKTbLB9JL3xEnq",
  "key30": "3os5zuZtxJrfVEiEbep2xmh5wYqe9T4gk74qEiTPGagE3n2QXQbB5wDPdPxe3eskn1c18ULa5sb5i2WrJ6jwZpah",
  "key31": "4TtneZB75ge4unABtLb3bE8N34WmYmgvcdA68RDFKnvYxhYu4g8heojhyDUckiPYwDSXaFvxzXCyKPhk42jWwkFF",
  "key32": "6ZRhCcgfKiqQHhrwXa6y3dkqT73Zc9SHMcrHfYGurfP2nk7EbmpMdn3Xi5oVZPSevgZU16VdrWw1EhgbQD7rf1j",
  "key33": "VBbMyrq3S5rkdaYoiEwnizqGwtmYxTojrj19eWMPmMsbqAYjbFxEY5TKJhP162jVwHVapv3siPAWfeU8sX9zqR5",
  "key34": "R7zh86Vv5aCQuefLxffH7xSKwdDtbZLfGDYrteYqbAdBUWczgZ2jqP1G4s5arYBp8DBdBAs9ZXkq3dyNDhmBSnw",
  "key35": "4RvG3nnVsqQeBdgP6ecvDsKft72998wNJM2DfqwPEkegetLXqWMJqqhcaUQyRdqSJt6fSc3Z9SzTHnNjTGegR7rd",
  "key36": "u7PwuPR8xQWi1ETW7R6wupuDfLtnVW7ufpDnWFYvLPQUMfeD8JtrdLBp5SbdYbEyWqLohX8KZZ1FhBcRUbJMomC",
  "key37": "2U1sDDqzvyQveFhNFt5CvkrViZfAAn2WpdrN6kJGeiuDHdoeaeNxcQBDhDKYjKBc3AAkTrhtTsBDhsdEpL96nanT",
  "key38": "2pG7kk1mQSe98rV8sPxGY5WLKM3aN1sSUGn6MRUXPtQTj4bCMmC829MhqDcXiizGcXaMXJrZYDn1bMAHy6TCz1U",
  "key39": "3knVqgNWHGk4kPYnwYQMmfYPi43reoh8Dh5sSNukdxiLCwEGruZhz6Bry1KbcQ79QL8GVGgnJwsqFF5F3SJdrznA",
  "key40": "5AbsZhv8xiSmspWrb1AkNmG9kYqE22nWgyPCRawhqaDDA34WBPt3aCgWWsfSMLi6mSUAPivoJvQcybRn1noKdack",
  "key41": "4uELijhRUorJgPSiB4miiRYfL8FL22TKFJ8LKX99hgkJUsNH5F87GeaAjkSs2D3sFg6pNC4VYtKfwTcKMJ9HecWy",
  "key42": "39yfS9Ps3ePKfNG93UXWMrN5JQ31kejAe6A79CiqVaZHwRkDQLBDYFNJ5hAnHCx5abuwPqwb8WXUZxXEDntQ16Ye"
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
