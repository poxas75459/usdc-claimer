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
    "3HW4LnZqR73xgEmvou9kidLk96NT8VZqT69jXWJBFGt1AtcZ3zDYQigUFeFkGx8TXY1Q72NK52mv5cv2FnQ5HA3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yLCoPy1UfYgALAn5kmbswPV7MxEtAaC2fVcoeCNwvXNtmAUqUMUExakNX2nC285fW44bRZWojNwi1ThC7trfFDX",
  "key1": "oa7wzneBa7aFW4CSmzgXu2rUmFAY84N2HcYaPXq1poNMBoPTMXuwT6ubguPa8nJwMvyr84fBuc9wXxRp5PYBgqy",
  "key2": "jTJPqd4ko4HxwrYDooD9L2m2XG6K8oh1LbgGC3gsJzqjKUvnojUpcBbvqPyb2qdV3oYQV2hDDXRmX1jF25X8ikH",
  "key3": "5VZb9SsAUWsVrueSvAmkQob4WnDmaxDKi74zX4y2LTBWJ54SiQpHXBvcGyjJqTScmZQZfwjskA2kFKD81hkuYjj1",
  "key4": "vGe4HhVRtCNNxK3jqusTVPAefNZUSPSDtBWno4fdCHwo554dWq4G7C2xUy5neUoAaWPKfFuFLWtoXNYnWk5viuW",
  "key5": "2hBEbxreCttURJvmX53zojGce8Tman3gru75baED15PMWozHsh4xkydPz8V42jtZhqv8D39dRyzZAhAgHnGDcN5P",
  "key6": "EjRaR22U3yp8vWfyXSqcRtgbPxRUXwxYJm5DS6qVNohc1H7RuoCZsXgYes3rqaH5mEPUrDygPZRPx3F8PJVMsPJ",
  "key7": "5foW8wFTfD4YExehDjRx2PJrHtU8FAxVtW8gpg9MhAgVLq4wF1XQT1Bfvvtxmsn1iCrWkkssebnxMDyg9jJcMzLa",
  "key8": "3w765Kx46PfZcHDK7mamYLRcuy4WZUwXViqE1bJrbeoJBgaLCCKFTYmTBYWE739GpESDwNGyAEKoPmt4cpVzSTz7",
  "key9": "4ous1vWcvm4SSko4tUpsWWc28rAgJdBXzFv2EMTiyU2DKYDAqaVR3PgwDdwf7trjP24d62RcdR6hLFwm5UM4JwZp",
  "key10": "FuY8URSDDkqTcoqXAck2HK1yZ3kdmjCkeUcx763Cwaa6Zq6KvGPWU8zWBpF35E1b8WLmsV4rmpj6CZ67rDLGVGi",
  "key11": "5NM1wg8FtyQLPe8uWwxqp6QCsARF537omcCaErq3cffBt7praukjYAAPWRQdnVN4zohSVC5XK21pNxWCQ5bKMtJE",
  "key12": "THdbD9h2GcEqC9jj54PmfXNyyCNEvoRBuRkxgfwVnG6iaoMXw11KimYhr4XgqQvj6gD1NBqAbJu3LKC1MpWYcNs",
  "key13": "5ivpu4TnmFEHtzDq45sCwT6fLj8EqU8UooA2qe35jbebDfRj9k3W6ECWLT2C57vBVHA1csBG71BLxVD3wjZjPRtX",
  "key14": "3f79WUj1LrU31xTWtzZqVPafhdQgjm58ZZVEKupAPkFfEdqr65XjVfk29s8s4ZLScFE5bPb64x4FegK613YDtxbQ",
  "key15": "4cRH2GRxBsppn1PNANYTw9AWAacykaX5z3aZbLm1jrM54xaFwVEB1xzntmXGe6A94stw2qxmFRRHvK4dAhWg4vbh",
  "key16": "4fdLw2rWguXCkGNmTo8xqoZQY9aXhxCN84KFYDshzvcnW5Thb4AUEvYyTswBZGRG8jzsT2Q3eLMyCM65hTsEcsLi",
  "key17": "2TaXnP2VShQ6YhEUgfszj82W28So4EMpr3iNgTysA8ETKZNfTX4Jo781c5gwp4Y6bJ2PkAHjRVKkpPD4M3mKCacr",
  "key18": "61Hw4dfAc2sYipnwAk4D5w876PGtLWUZVpnpZpNyi6rJTr4U23HCTWVdatRgzKf3a22dGbYQ9MZicGLHDpcJXteY",
  "key19": "3TCg7GVXtSEcgBkQVv3QjfvDPgbtamQWXFrK8NEZHUcj7fLkEHfKxEPnNrmv88wsCj2YauJLGbbjp472uxame1CH",
  "key20": "5uEhc63wfo2r29Y1QBzw3FZfqwBdcaWJhmQ9cW6gJgKWZbt7nNWEFVS6t8yHCTfvYJYAkwjw9HLkNbDPHq9ZzMT5",
  "key21": "3ixceEaVKvKrgNUGh3Bp2AswfEFuCnQCGHG3VhPVzZ6uLfrmBbX9AUbMPkkAMAnNW38UHNvL6kfNfGU314ZyKYBP",
  "key22": "4go1ukZJtF8LFhmqnsRisSHYuAnVEKz9PRuHM3weH4BTwH5bAF1AVvdSS2Wd9ZkLuVPt29AYBATSy9pLGmFusqUq",
  "key23": "3DWz53iAqjPEdKnhrZ4KLPXMbiAdVa7GKjkFdiPviD1zpSRv9ggD7NwScZavBuBhrYvykwF1Aq5SPBs5ddY7pqcM",
  "key24": "2W4N6ZQp39iVwFWDTWth4PuwiHCnhRhLFj8VfuRikp9mfMU5r9EqNxV8iYuiVL1uW5pnYrJGN46h2XsJchcDQbAm",
  "key25": "4VUpyDaQ3hqBrVopaVnvuuqA9X4MyMU1joE76oFWGM23UPR8HCtMHUe34yBVdzyvFAZP8CRfoCMbeZPSQwkVywFb",
  "key26": "5ERCaBa6zBfJGhMYTUNJwHobNwJcnHuD8zQr1vdnrnmoeL7iwqe9jwzY7wnYxVRzA5jyvbGuarqQ98T6Au8W3KYL",
  "key27": "MsazMtwghUTByB24XwufP1q4fFqShsA5MCePuCFMqimV7qB1B9dZoccWyiNGHrp7ivGVV7hPryo5GKDH3iJuTgv",
  "key28": "5Q1jZmXhKzq5JdDmWtXtfYCf8AioEV6J2L7g8p6VozSf8YHVsSynQnAn12vF7R2hQJopTVzmQ2qbRu3wJtuy8H5e",
  "key29": "5AxdVaiS25XUSo4KvynPVVVP9LRczAvQwScpcfeSGnr8xBqjWKagrdLMbEJahDaQutoPP1k5nstNLvgSfRHVUmi4",
  "key30": "5ocQFBeAZc4moQyRX4RBucYURmEj2FoYPAk4dauEZWhjeBKzmUPz93Bqs5VwoareEvDTCgzEKAWpz9JHUcQ29WCS",
  "key31": "4SZQ2nL17fSSpmBS7zKZdTprGLYtyTcc2dLKNs2ZydT4rFD7wNRrng663aq2xctp3SLMAKcM32W51bDXv6j79F13",
  "key32": "1CRxReQjvjhbm5kGFGetR48m8aKdt9KLTy4vtNT5K5LRXBarAVjdo8bLEbPzq1F4PXTsNzL9DhZvuM36XcT18Tw",
  "key33": "6XJmiWZRWDMR7DyueMYs7D7L6UKo27qwgnWZxMDt9zF29Uc58kxi2FSpKq12Qy1bXaWqzcRSaKTqi8eZZptQbs1",
  "key34": "2qYaSDjvEoFfZMJokUzhWy556NFkVAnNccsGhdRvMMMPf45odnYQWbnoWmevV1h7C8UMFjyg2146rsMXSqsiKzrD",
  "key35": "5bcbMKL645WbfB5GzvQBtcmh92x8qfFaEe3LrTef4sPexHUCgMFUGsH8uuuKdc5uXGyh4k6r6581U7qEPWPDeGu8",
  "key36": "5wQxbQ7EzPiXoFCQAwEqeWiYpEYGtBzPEtxbZESv6inZwEgwTR1gVeFMDgXKHrz1JDcizQSS4FV83yTSM572ot6u",
  "key37": "2pyiLW9L4i5jstMDeesZjF9TpjXYeSUNwnUCaWy5JsKsu2MWD3vKGSe9K1aj4actyfHiC1fR4TMwDgHR5cbvPqNY",
  "key38": "3GLV8YgGU4VSSbhr68jiPfeywn2qmYbF7xBfCpf1bVPsDcUf8FAtKGeq8r1HXsmTh2CzVazEwqBCfKHyZuktVqhD",
  "key39": "3X3MuxuNJSHppBXxic2HWrXxpYe6WPNpYVvaScvLsJd9q6MB97qnk5ycGFuAiPcrT5VZsryGF9T8JHcGaUURCxhG",
  "key40": "3G6PU2Sk4fEdvpZ3iwpc27DUhznGAGQJfN9q978G2Nujbk8fV9h3KvrMen9XKXcUWS6vygt64Vw4am8BXuWhMSD5",
  "key41": "HeR24Goaxgo9krK2U24HY7SVLU7qvrNQWTiVN8SBTpwMCNcDB7hsfH3RdE38ntJYPxvTR5e4NgjVtR3GVznt4g1",
  "key42": "4kRCJAExJ6CpYhYHVCt6juBnykddQnnhmVjZ2vsxjKh15k9DPodoLBtyQV35orTnsSgn2Xvcz4LPUpt8zxZk2iRr",
  "key43": "2cjjVx9CdcwBgrtWQrHWtW8JYB3SV8MRQgzo7PErCu1djcexkBL6ixJgbPyKkgGMtymquRB1KdtktsXMu74g6fn1",
  "key44": "5wWBWgKboshTgvW2XMLWLVYCznLnGU7WqbXfmWPmSuGzfmx5csrE9GWXBJFRskXqB5ZNQe8TgMJ8JfcHBLU6uJXe",
  "key45": "56kKMzmUkmPxNawBWtkmrP2GBysd4swF8WAt1ppJxncdB46NYyPDMurqDZmUcGQ4aUS9TpLChWCxMDFCePpRCJrQ",
  "key46": "ZShtSeJJJ8kUvqLWG4a2XXHZEDWg8mNPotWu27FWwNACRzrP4JoPvZXwNg41iA9L4fgELbSgmayy1GAWjj6hy9W",
  "key47": "4ft5AB2aLVs5NBfSeNcd8qnMspZMTzvNqZPey5KUuaMoWhGZ2eu7w9AFm8ZLssyKDSjvuW2hw43QELpbD62pY3mh"
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
