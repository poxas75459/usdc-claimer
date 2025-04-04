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
    "3add2QWNPdkCpQGwNPTrhJsuMn9tCaRrgEV6RHWhP5va798Qsnm4jEEFJBYEMCKp4g1X3oCc8o1GSwk1YbZF54H5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F7a5HppXa18wedvHynERi8hDWZLCRZK4cNXRiWP3D32U7w5NZMgZmXBdS5QNCSRCTRSDT8QLTayuVUJTMYNenZE",
  "key1": "4dTQWnqnZgcu9HCUbsijbGV3171FBt85vJPmekBZXGtFjFCDPDNpnsayQRxqLh11QmsmXAuQnnDyoWXJz7HkaRVP",
  "key2": "121R5HVm6AfVTgh2vniXZzK9yoTozpdwytpNCwSmLwPswqBGG2cqD2LojAFgHWehnwCN7NjLHxDfbLaTdjsvXN35",
  "key3": "2ewvwqprAo7jV1GnSHY3N1YpxrLmYDco3iu39DoRTYc4SPFYR2w7uMrf5vZ3PCydpPfSSYneDFfKGqWBYvJ3VZd9",
  "key4": "66Rh7JUvJpPUiRpqx8FvWjBHak3CBauG4huSoAo6cjm4oeHyfoNsJisDmj52PLwsSTGCVzyKhwiPra6Lbvwh7pUT",
  "key5": "4uPj4YXwe2kKp2n74GrftNFLyXvoVaW9ehN2DeckMCYDtPuRZAAPeRHECDJWpSBJ3wrEyxYVSXqRYTG9rA8L81nr",
  "key6": "5BuevUcvFP9EHGSWrNRnXQvAwvLZczBPfxB7cjE6fTVq3GKEPgGrBBmAqpTiAAex4GRBYBfAZJS3vLhWWzCiMfrh",
  "key7": "5dxXzL5DxmTryrAHPBzxyLPY6YH43DV9j7kTHhhsJGTkiWZf69RLGq7p8iibGXx2LPs4oRJCTH9LjnzkZWkw4G8w",
  "key8": "31DTFazkY4m3SfErU2tcEUnwTJ3o3ztP6hfYqzSCBwcPsUkQVfxfs6yA9x1zfK87Y8kLPhR5CJXzdnTGWLvZQx1f",
  "key9": "4tk6xyMCiAUYeBtsVwvoRC2yGt89NH2WqZJZyCmbSQuNWbg3sYcX8aNpAjA6hUR9aRAi8dDt138ULh1jFFmY646Z",
  "key10": "4dRnw4ofY7sXLWRezoZgMuZDa2CnecjBHodabgtxhdK2iYZz1uspkmBKKQ8y464KGPjTxewBSmXFY4oSX5qxB5ju",
  "key11": "2XYuMvkx6mGcEMytxyDJFcZ776nHKHzaR1J6fnruf4ivhWSWrc9MY4AHEogdAZdNWDi3o77VsVsLbFPpGg6cpVV",
  "key12": "4FBryVywffWonB3PVjhPVyG6NRHmjKtJHREXFTqox9bKDvJApbzNnywaxLQMFKiZ8J8ReN6h7BaZN7Tedf8ZpcKR",
  "key13": "2vY4z3XjB8bKLwN5L6bCerK8eTFtv9h8GCQabp5GnbDv7Zvxv4cSwhNRpe3BGRCivoTXo8akxwvtLtSiVUACfAq2",
  "key14": "2UZw3CJaXm17wZcwrxVhiLRBZ4eTr1GvgxBAUyYqDSDSXc25Wkg3SnrCfhKSiujakJtZwgPSYkbtwrsxRqYhC9ih",
  "key15": "2Fk1oFBKNZb6CvbADTXMVA2TtE2bE4V7kYBvFGHS2j8jupz7cxeg7Hk2c1bTpSKJLoAr6qpepBUUTbnm2ymPHj3b",
  "key16": "2qqwhdwCFYZMP9JJwarzjQj5PitR4YF91AggQNuyJXuhiM9FNm8o1C5mvZU8qDWknU5sJYeBU5xirnCTEsDmS1S3",
  "key17": "4XBi12zqGLpYpnzixT4QyhGvyhARpjU3nhPPHonPzbMig141J4vSuHhYorGqqv2SLsngxYUcasW4EwtXBY8Ba7Nx",
  "key18": "2QBmQySgZkuHQPgP7xDwKUuh2vEhRQ6b8chgE6HpYanDjkAmAtgEq8UbkVdjSgr1vJvdciScgKTqgvw8vwiF3TnT",
  "key19": "2t7PUL3Mmy3T1buUMKfbcYfg41waJcqEArRZVg7JSQ1wsUws1DStyzTXWkfrKwZh4w8bQ6swjTteL8AqHWSgvuiV",
  "key20": "We3fRkgfXp9z1pTrjvfff1fLy59fZ4Vfxf17FsGrdCLeYpMz6z13gTpoCF72yHnyCckMLH7KYeN9T9zUWwygDDR",
  "key21": "u8HoFW4QUTJMGnF33CDTCDbJNrm9XxX8Nu5FK4Gj3AspcaR18kc7FBHc6PHK6SjQwYToXzKPTiBTzA1BGQYaPkD",
  "key22": "35TqUWjR69xBWPNzBEZHn4NGiY1BXbLqfC6sMwQSQJc8oyt1UQMv618nB4h5vT45xLZfriq8vfaQHhvsnNmQ8Xtk",
  "key23": "9NAXr6QGdmXcLWcTZqM3GMj3RDbhZt8HWQnyPZ5sZkVKMhSywvVkFRwD4bYCJz1GHNr29anDpFJueY66U3Mc6cf",
  "key24": "CPCDRx6aEnLXr2XtUa5zVzFkoEYoZGHeCzaVR1LH7bbgAhMf1XJdV9hqUCamQuWCe5DanAshkNq3ZDyxjfw8r4Z",
  "key25": "dNUpmH4wpHtvsLH8HbhUZjw9ZsYX7KHKuMvHvK1Nrf9e42Efmu8bJXEcBkjp3SeFdF15m3wjBM2s4DLUcQYjqyZ",
  "key26": "4LPv2M5WHRSz4nsFehh9CTRjhJ6Kj6Sk8kGck4q2SLJpdQy3UqP5nfT1swJd5irHt3BxJxHcsbRPruL1xCbiMGs8",
  "key27": "5GVvVLcv1GQrYGaYN8R3977pSkx8cq9tsGx8qzNAmH2rFPnkNsTuuoFmX2Fb2tmd8U6XnoPbrBNZPVTYUfmFZ9qp",
  "key28": "3KBbDmqUhs5LC24mb8CVen8MawtdcaGgKuL1w3z2oAwcnJc3vmzRxo3vVxPerKdqLfd4QUjcYw4tBS76Zd2uqHLU",
  "key29": "259o3c2vhfzatsNyhnLYKLrpHfmZm8eSKzjfQ4ZvrP7DPYKtHycxjTWAJUdbTFNx3BPQugBrcxm4Ma81EvPhdcqp",
  "key30": "3ZNQ4mW4oSACtpAjYiAixFonhfHKr6v3kpfqToRiWcLRyKLhQhLhDiQEazvmsoq1iZPenrnGzexejW1yFETge76t",
  "key31": "2jiDw5WKzchBuYfqv1XWG7qhfWsi9FUfbsxwVJPh1txjdFXcQePJg7NyJvdeEN64uL6NZ73waPhHbUNgk1zwMPAv",
  "key32": "3gdvuVGCz566cVfpATxi6t7JiuHQK4ScMh64vHFQdRwB7u9eRBuH1GNCBZG8h5agGJrv86CqnFVHroXc5Vo2SnTf",
  "key33": "43CJ7epWrD2hDss4YY2odEzYvhFJxfTgiFSQDLeTso7K5AwHc8FBxvovqCsPnNAfHVvnpziGorQDcZTKCxjjo7J8",
  "key34": "3jMDKPx54GzF6iapWQbgEwh8JcqgabMpWVMBkQ6efdMZkvhyd1noqAvHLo8E466vwgiVwWseNkR61jhWrD3JWtGg",
  "key35": "4neTzVHUcGpfxvdR6D82eysWJSuARMPMjvTJre6ZpKhNhpTzQbGYEoaFaFwcbBSJrXWNa22DQvtd9Ynz5ENfCApy",
  "key36": "54LdTqqwwbnb8X1yDQkpExVvgyEKKLd7rtn2JSAQF6FhuyYKH4zq15Nt3ApgLBgGyA4aW7DHvDj6zCB3ew3TitZ6",
  "key37": "5bHBjtAD3VsbWFetAb3g2A9b96fti7uVA7yRgxH2Piqui7WUqkSFfRavVv4RFhypwygbhhCXkVeTmb1SUtbQdmZC",
  "key38": "4i4prw4tE6oLv8PyyZmzXnnLNzjcbxifWyE67BjM8LEwVEMuePiSwh86hXXTsSXdyAjyi5a7BGkNcp4LqgCfw4QZ",
  "key39": "4asCaR9yWKffAi2SDpG86JXQjeAWRwkBpvUzrtBcrhUEkPoUJxJDJrUQTH8afegwmNv2pNmAmhYAiqoUATkckZt",
  "key40": "62ZkUJkjF75TqTbUsovjBZYpUgYdF9PHA5JYQZFDMEBd6g8Dvz8gsJLKaPLkjWzCDcrXNpawbg7Ua8rVYbiM4wsp",
  "key41": "4iD7E1uPtX5ZiaDgyVfPR5zmeXehWkxnGfWJWyyHvdDXA1C1MK3tECSsxQ6pfUm1vVXdvWo3VzpjD9xxYpua5Jkx",
  "key42": "2DYfk71mksC7VXdMTJqPJ445Bi5Lmng5deoxBDchWfhfdVXM8GA9nbsnM7xL22cDJ9B1eHEgwfVMa6jpFV48xM71",
  "key43": "58sp18eR8kLCc6vwcRtvg4MRxpkmGm1u23rsXBq1RrvYnxWETvJcUhWoeVeBqTKDSHFLArngUjP2W4jcX2gxzPME",
  "key44": "zqr9En8nh8zBKSUp5SGSaZQroqRUT8UWiitwigPMHcDqoLN3cgNMduyAYLLFXC4u3KLFknvYooufRxbgD2dfKdd",
  "key45": "2Zm7nnMAqDantcCP1HjC435k8jvBxnjwbBV9zKHk7FDbGi9oDrCyaiSxe7VyE1W88xwhM69ZKLJXDhoQt6AfvHrN",
  "key46": "4T3iVkcU45f39Y9iTk5BMUhuhzZ9CKBrdwQCw4VLq9anvG1Djme3WE3mMB5DSMpbxSw6wAiQkPexgBjgi2kacS3G",
  "key47": "2kSwPrpCCS15cc7qWnmeD4U9zbijMZ7oTFrey6Mb4Uh5ohYJDFr5qvjR2YwSuFRaFdt8UFVADAJGbRzHJZMceDB8"
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
