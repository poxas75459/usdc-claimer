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
    "64wbAPzgBZATXT4JiXQoTmUc4DfcWpeh8M9wwBGq1ZwXTmBe6ArEsQYLpyLBFvJcdbD7CfKZkSCaqd7wbAH3GHmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ApUeFA8XK4YbCw2mNixf31AT2t77ucC8J7tNPCr1sq9LHCkNwA5dXGVFtd1Yse2GpDsP1KQondGPbuFgD5kgYvK",
  "key1": "4ph4WpPYFAM1XdGSWMWDUZ6cNrQE9f2WYVnJG1HNUohvL9qGdSWu7bFLjNEoMtP6zKhy7gzkiGHjqPeFpMB455gE",
  "key2": "5EzBFQgv9vLh1vUAuM6QnEnhYP1sPSZdiGCXmHGamMVX5Kx96PPgooKFFtmfVUXn5XwSfqysGc6jWVtAiqZsZzGn",
  "key3": "35V9w7k3W9nCKcfvrXubK3qvHjVTB2EP5uXvsEHjAkMVgCdCx5ZPXeRmH19cXorXtUYg87jCrsetzKtZ57cB1i5z",
  "key4": "3RXVCUczp2NMZ7iXVRFznQ7p3KYesWCjxswaSzaX1Lhn65HxMaDg8TTkmp9oiBQKWu5vto7zKkfXHcbgZyoin1VX",
  "key5": "3g8MjonhCMxpsM3TEdK1g2Z5MinN2oMyPMdRLEDQ7PaienFSwUHfBBxvYZvs8m3zte9JR5if2CggDF65oCt8WTux",
  "key6": "685MTYb8FRFWAxchZUWtsq9Ee1VDe1ed4xFLDcyDB5q2m2y3F7KE21FX1YPXFL2kz3XyRJg8SCnfYuGToto4cSp",
  "key7": "2NgfHjLU6gtEKUSCXWkWpVUZYDk4Hc1AVLobqBSzRJtBBWVoqiEeKAdiJGYwzKXgNxUWg8Wt7aMMHbTeEJRPiYJ4",
  "key8": "35aN1NV6EmhfTYTLsu7f6X45xfxxzviPa3WX1pebDT43h7Rin3snCasyyvp1Urc5G98K8oqYfYt1whtBxthQ8mWn",
  "key9": "GpXUbHfLNLBiMzA1FNDbbtmifcJd9tbehZTfAJe9DTWpdWszadi92hSgfD2gMiRdusGbV3MkyKy3LrCZK5pmm1s",
  "key10": "2ZCeEb5AZoXv6aE8oc8A6RGmcjwdfGxWbWaNgG7Mxqr6pTmjguuM2nPDb2f8f4Xa599djaDiUVc813HtT8Z83roq",
  "key11": "2Cxifr1vWkauF9FgYeWEbSUeMNaAfCHjB2d3fuHgN1YUmeAHD3ugfS9e4MuUSKwDyTajQAhEgNZWhmYEtqFixFv4",
  "key12": "2gPewt5chGDGX1MDYQ5yDu7reBuLEj8dmneRs3TLn4PHrtBJk2usqTbeKJ7va6YiAX5jQ7vXzSibDvWGdRLAChRp",
  "key13": "4hCvwSKieU9QbXui8xh9wnq9xBenPiDKy2bjADn8k2MS7yAhQorovqnWr5oLPkmdRHVDcmjCodPduYDMgXbX5CKE",
  "key14": "4p4yXW792o7NfhDJ6SFEToPvnHYd61GJn5d3KJsfe5tYnwxW4Hv3cdDkSsNwYVARAVQob5z8L9fXzXBMrEw2PfqG",
  "key15": "3b3fmCA6VQuAnKQxv4PyzGtXvqyHrarbQgf8n36CxR2kuCr9KQRBzQ5fJTCPWC2PojNPBCYrbsq6G3FKRJHmra8R",
  "key16": "4termH5HTGwZdomqEXP5ktp71rKaVm1fjwNm9xmh3YV3xpmPT17GN7aQ1tx5vZGTiz7scpWHwkZzZU1SqbgZToG2",
  "key17": "4DxAwmUf83vKevsmvfEDr1q3tvNzEyq4qW5DGa1Vnp6KxPjoAoQRvqP5fmw3NZU2aesXM86zS16tQf1ri6P6fgAv",
  "key18": "95HkHmxsRKY4ZBr7L8GKijWjiBGzA4kMhA7sR1QmtvQkpHuMP4R5FahZAqcyTjQgtpbQu1LXhERrhJxEV6Hd6PH",
  "key19": "DzgLDXyUjZGGroHDcxKVrRZDWCe6Fs46xbTTGMRCxLqpS9AGhkA9Up8R8cGoKgUFg3vsz6gmDgCYVn2Q8RXbtgC",
  "key20": "3N7AnemfuWiKUajL17QTqW9vykTzyyeaggqU9VKPrT7Lwmgfh6ZtRi6Tiawuk4Hs6JKjcoD6DU6iUNf97bDmmUbb",
  "key21": "MjYmEtMomdwsDQpYpgLoSmDPftncAnRuSEsi9ZQnTJUweoXWAQHdiRsSRw2s3m9ov4HGk6Sk28vWV9TUGCGgNYi",
  "key22": "MK9LMn5tmjVPZy7zL5DBo7bBm7JauNa9heGZnvRe9djkJwzJPE2VDmW2itwRQipc3d1SL4fo2G1znJ2X8U82PF7",
  "key23": "5BVmVDYofKgs8LAb3tKa6QX2GJ85AcBtqSVRf446opcVRd6L9DMLMyP3r7fDKvBWo2d7DMv6pJ5apiH5AsKpB3sz",
  "key24": "5weys5GSemHAbozXwWkVEiZHFxjnBinQcqWbvXPRQschW6gDnika9gio3FwKcXfqegRDtpFxpwRFqSGDb2xAhJ8X",
  "key25": "2dxApbeZh4kirso4ZJdojP62qZwgVZgs2twCmYCSEjoEAgCRxHsSu3wmzwdbWJhePKM2E8m2nYyXwDJD14sZ9Ygo",
  "key26": "3KD6p17RtpsDTeHc7PLsuTQ9MhtMBFQ1E8hPtbKKzCLfz7mWgMX9iZm5uCvzV13wfSinGztrFZsqxnS4jEvyDo5k",
  "key27": "4ai2TKamoRTHQJLgEyEe7tXGyRUKc4j3QemA6n85fLWtXHhV7j9eDf5gMVp3carF6H6tkCEQaf8rrGJ3JzCXM6t1",
  "key28": "4FP3MULRostfVHdyJs4ufpJWB93KGRPB8BRqrh4F9mruvjAdEkJ4LFXEYeNQ7mbxjY4TW8kMz2HjemkPJSvyboQ9",
  "key29": "4hTUiUYNywZUDaWhSYMAviExgJbBNEFkkYCntuwP4oqisFMShyr6PwXaXrMrsk7SRVFYeTAotCfdoRLEqmnNomQG",
  "key30": "2YrFGEnPLtLUhzyqiPugAfvy8R6xGt9qbfnjb3HecZf7xX9kqeTcrpdq6ii9LejayGRHxvRYeDLjPES2VFzEwmHo",
  "key31": "2HFLudwkdnDAasfFrVB1PvGuL6HynWJm7xSdTr3hM9jFhWYV2SdL52h3UGQ2Dy77v3YvjmJRg1SpBks7yB3mqkMr",
  "key32": "2j9zCFKNFg1pqjnBKqjzcuDRwSvd36r2rN3o5YzSJ44VtN2BEPDHDMPv1QYrT86TYiwDB3xGu26eMpefU8L3bNJj",
  "key33": "5TyX8pJNNtFEsF6crEb39V1ySLKf1ysKetUT1qomahaXTZLkkCYs8BCTNtcSQmhC9bJuDaDka7Ve5r6hDXdDdEHA",
  "key34": "2haTjafqvFMkifHkFm3LE7W9yhDUoe1xZ5hFrUD4vj32ZyQd1WHwk5WfjVsAbbhx7UvBfdKTtrbTQKBSKXF8NT6E",
  "key35": "125HXpRKzG1fMn6DfmXswM46suyoSum4jQWB3bnwkj48ufvD4cgHUXtQwPiTh4rE5NUuoTQRCoNJJ5cZh9xLdkPL",
  "key36": "5b2on94z2oj5dGYY2jhUhEmAErCJvDXFoJFCDVUFBqfzNMDJVzrPuATw8JhjtET8MjstWTVZoYnRYFVMuKErzuUf",
  "key37": "3pBw89TENW8nQYWYBKiaMxYqVdjGhNBJ6dbmabTMtF3dTTnncGGaZrW65UfvXCFFi1TcPx4biszWx2VJ7QZ5SsHh",
  "key38": "3YaWGDQ9tReXk6SWRj2tpCyAmmArrPPXcDKe2kkn9JCse1RjVWTxM9HzSqNBp9xUfxcntkU9P1rtgyk1chPj1DxP"
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
