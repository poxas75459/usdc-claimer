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
    "5KLcZGX3tL2M9ztpuPNqzzZyPC65KKbgAn9nHxDGypGbbk5bpABRzzwXqCH4dnwS8JumpH4R5kj2Bgi9N55oPUQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hnLXtV428Xd7HPupC3sLSnuLKhgZLfD6jYGEg2gr17RHFjtieDf7hwJ4PDQYxFYD6dHVmucLmtVAfErhGZoMCyU",
  "key1": "5uqhHb2212TAtiAA2ko4PuBAba1dPZkZtMZWB39cbwiLSUieN44WC6D7358pzdEYRXJjJ3QUscd3U95dfPQLtkdZ",
  "key2": "4wZCfWSQe7yYpRrkEdX6v3Bc4ZAa8NstL76wsSt6YRo4jSEmsynKcg4yKG6Lae8825ZrJ7ZVBvVB2XT5136P86fc",
  "key3": "4mXhQvgbg3bF9epyVDtQn628hi9tFe3GYnQCkreeHt57fx4rUaMX2UNMwRRyvZDYSyoSt6ZXozc2Bfd2rKdvFGpf",
  "key4": "55JH48VbMwaR8PTNBVJECQnSNWidszXbA1HW9twSGjQjcpnsDBeXMWjFKsnWmuRWDAZcJprHfDxc7mY9Dstqdbh6",
  "key5": "59vcyGyNiFViQEKr5mZzc5J8WQ36ZvEQw9eoGsaevhbXZRocDpB9C15YiwhFrT6b79i6fWAQMnh747vEonWGYpxe",
  "key6": "4GvogK6SLVH5VwtE1Qjf6FN7gmFWLymzejDsq9eCF26W3qPDCnrWf4HQn6D9T9c1Wq2ua6LnfPrzDTmhhQgqQBZH",
  "key7": "5BSGZrPC2o4ShjGtqDwbi4D2TnzC49XuyYrRLsp59jgtjHwXDCz9t5YR5Y73daZrLTC3nvPkRdbJG4fhCuBxTxe6",
  "key8": "44U5vjqsYhVE4KubWAW6PDSTsRof6UosBdMZKdJ2dSNFWE9pg7qdSPG6onE6GakPfBhahV9pKtC6RWTsbczrxZEU",
  "key9": "5ZXjU3pj8SwD2jyDaaNnvooF9sdUPeiv28PAvUdCU4fB5UUXMDuXJDZL3SQ2tLiKYivNuWJ2A7XKUikPKmUYRUfx",
  "key10": "WZupMC6TW4HTqCBLXrnujM3ae5PiisDgwdfzFjNDiQGd4Ucg4gYtEBwsPHeQa5jztqCbKFVpFGf1v2kEfsxx7Na",
  "key11": "3MduhEhQu3kGN1FSjZkPDDVSnrrXmD1sew1WhbZNnKm543wmf3jBfNXSNmYLJYG8o5ZzMweyas3KAbBmApmsd6qo",
  "key12": "3tGnnoyuqKW559QHcddERBxYWgnBq7BjmW2VmbChAAAQpZ5eXVEFJXETLhm6jhZMFihLq5b1G9buDyF3j8kVjviS",
  "key13": "4Ujf5wuhNjH9qBKTTPab2nA9Ae4xC2yjCRJ8AKEvM1g4zXcwfvHtGvoS3u88Su9PmQUZk5WdLGm8ndYdJFTL3fKH",
  "key14": "3SvaEk4KKfUEqtDPYBL7tS6dS9zJTgHfdCTsNukyMRaATjT5DbNDPYcnWy2sMFPSgymogYmhCnKXWEGRwzV4QfgH",
  "key15": "34DCpcS3D1AnmDoSGwVJzJtrShqnVKhePnG8eAdTKvi5iQMZcFcZYFWGbp5VFgZeSGiJnS5NMDsyKYYGtc6934q8",
  "key16": "4qkWY6HPsxZ9BXnQW7Q4vKJXmugSVXNP2uM1VvPKpP2CFjQkRmQEGJrfiekVt8c2PGEc1pUALpNpPbNfcEsewANK",
  "key17": "32UaZoXbZ7jdUGgHLdakw3DGV8Tre73ZbyFYKhvQQnRBmmNk5vWyR5TebS5DX8RJWXCx6o2ewLTt1P9E2pdmWu53",
  "key18": "2j74yKah6eFbbDkVk1XQ1Z6hdnmUvZ1eBM7W3WS7h1wGxEGNrCCkHQXg2VtExiBrs9C3wJ2rXjfX4Gk1NJPNtJWy",
  "key19": "39Y7e5sLCyxYiHAZ3mxPcHTLQnCbXRD2ikSfsRf59qRJiu3tuiCrgtrRMUS3CgYTew9q2jEf2NyYi37rDyh1TWny",
  "key20": "46r5PQsfa8jV8Uirs7iqpRdu8yJ1obUarpkbJQsKALoBpewrkg53dUzcdvaEQbAtifr2c4ZkKEJpfhiSNjEMsLEt",
  "key21": "4jAbJwHAEJMk8KMUiZgFQ8vxbWJiKmHMdphB7kK6k51nkkTHBhqayre5CVVNm45DDo9AYkhpVMZrR6gtqvo4Vsc8",
  "key22": "fbBB8t44L3FyoGEiVecxLwuPfGzr97dRKZjmw6KuupGCNoD6KvJXYo5qyo2RgxYygsmPtkm8k3xX8q43UUYztzY",
  "key23": "3c5CSuJiFSCr8Fyh5WuxVykeZ6DcLEaNXdE3As9RhZvSqr7eyGo1RaG9ByhxVDiQokdmHJSeaQqY2XkyPxefKxS",
  "key24": "449AKJgZksRsdL8UNZk6jprhUq3zSrhd8HVJ2n46ks2doHN5RZ6KaYKCHFqSdYPED1BLtmA2nkg79U58aE5dQkVh",
  "key25": "4QSN6SUYMJoC7PLZMjQoA2UG3biKCFfY2CX9C7tELd8waa5DVy7fcSSr15V3pP7hhsNVvstAvAT7rrKFwU1iTGgb",
  "key26": "5gfRhQU3ToQoefTG98R3vG8wReZuooJmsfbmYZKBwnk2DX83mZg9GV2FMfHYgJUCq6rrJJxsVPbiN8FBcYeR9bdh",
  "key27": "5u3gA2ayB1FJAiba9yrnJwLPSGvZQZ2nGMqHsfG3KBveEmHXhhiys6S4YeazFSAgtkCQN6HnpWstCnXAunKFzSEZ",
  "key28": "3ut6QjwVqrTmF89rrzXc2jcSBGNHcszm3c22yxs25i8R3o48wtJwac5KHEUe3RVdW3DcxwirAe2EnygRcCFFjLNq",
  "key29": "4wfiNEPFW5Gvj7GfuQkdqP2bUaLw1zci35WKHPyKvGDU7d92MGT4hnX9ozhuVQLMPKykmDkmiBUjzj2rqZUXVZu9",
  "key30": "2f4LFAPRBqd8fHiUv9RGShvRFfk1McnJEFvMFUP1XmQc3o4cuhcaQF3AZNcz2saFmPGXHFTZVNUjkre3D3mcMWUf",
  "key31": "5ii5Y5WHtQHdymxJqR9TJw81G5UFYcJUHdnLQTCmzewPzxQAVcW4ca9A7DRti9gKKtvv27WKeGX9QUt72QzJNaSv",
  "key32": "5oyA2MeC6p9aqqUiuKREd1nGt9DjeG75ybcvVuPQrWfrfSN7bxx1a3bykUbcJ3u9irUfUPDhxqXjQkRFrnMUCUaH",
  "key33": "3VbBHkwxDC5fbooehPMweoh6tgdheHEMCD3AixCWHKMvKeQijvorwXr1D7Do7U8cWkGDR8cEdDBXWP7rpPecYGD3",
  "key34": "64siZhSa6oiv536UtK53xHiq69tEFNSGPKveXqDf4DwQkGgbrh3A9toshSFwsp4PEcUkmq36HJa3khnn3Wg7zTMZ",
  "key35": "26qdpjSerr42JfGGcBUeck9cy5mFBmt5UJp8KK4YS3zAP25Jmxc6bnMLSnxkJpL1n1CbAFQFM6zeJ3BZcainUYnx",
  "key36": "STPfeu3J3bFCWqAq2MqCnBaQbdZtocqPNC69ihsweXqcBy3L2xMwx2N7djk9Vzg9kvvQtC5AYqGsptPgXsUoSrg",
  "key37": "5D36cr9sXSsAqdrUsyU9EMLoizJZfrvYNXZXcVhJZq9jevtvAVAXeHMX9EWu92BTSHeTiVirz1gFBjcBbNeKCbpg",
  "key38": "2dtWRRJaWuFXYLvrhDsqS2Qem3fcwYY2rwT2o1psWY1nS4s2x4E9fenzupzQtJQfTXoejzi9LCwChtMJVBZjjqZT",
  "key39": "3FN9xoiBFApgEq4wFhAKsGCHkwKv1dhBP1tX123ZfhXCpgo4YD1XJq1uzaFkXWqzak46EwPUQrrHnBpruXg3YpqM",
  "key40": "4wyHc1AS9fxW3EyZTjARSGgHUxSd99Tb3vSmxriHn5z8TmBCStFD926Ww6GunJQr71RyDhuPzaBH746J9EHb8VhF",
  "key41": "2b7y2SL48MRL2NdV1QrA7zZdaZDPX9pr3mwioVdiH8KjQxaxpqYzVxSH4QCMKVsMBUw9CvyUXMfET3AJ68Kj7HqQ"
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
