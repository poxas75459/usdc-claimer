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
    "25TJws1qb189a4ZNYiKahmEqMx27ExbZfBFiUZuoMa2autsnkZHCkWRnG8NuRD3CidBosJ2SjmDRwn7iLrs4eZax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QEhKgjA8S361HNykQU4Zqza9nhreFxpS4V4XwojsrViJd7CgT3ZuqtUbhcMrWx9P2sZq4CYa2RQsUXf1gTTpTHk",
  "key1": "2HzdGWxy3sGcFhbeMj3rKfWDiHu9kdwzwBLHKS4XF99a2TLgYryZ9M7wiwbUj8z88oVaF6pdvetd2WjoS5wmTHBs",
  "key2": "EJqJSp548yqdRQZokCjTCGUXPqLugBuKi6bf1wucrVscdTPo56GQ4HcaxRUfgmmRHzf3TZRHCMi1tNNfLbTYHWk",
  "key3": "3FAg6yrmEevnHPsbwiQFyYeRSjxM412vqvrx4oacivuqb1ChQw5FkzgWHa6GKViZuXfzBs1gnuCHuqpSNyjN32H6",
  "key4": "MzXiB5UAakxhuGQgZCNohSZhMkfkqfa3TscyJjh5bNNt34HLHMP55RNw1Amovcw9hvRDXLMAkX6vwfWLRXJYBvW",
  "key5": "3LY3Kwka5Fo5doEw9xoC8HokebiFPpTcTfp7DwEfmpAtMabtCBjmpoJdpy8thQijiSTtriAXzcbAqtNXR8P8tWm6",
  "key6": "3eXzk48XQQaS9ArK6z1p4724r6v9sBYdp8ugM82Vn51bXTM7NUgMshSMgFLvw1gqiNLZNy84W9QJjgrvnhniDzcc",
  "key7": "EuxsWsnH8BrmWaPuTtWzaW3ppLVga7VoraoB7qdA6HXjmVTAbFJuSyiGMsLe2WGQgnajPnuvTatU1m3PYb11aV9",
  "key8": "3wgPnMAvWRieke9C2q2Q9kL1oQaXmB5YNxahjJ9fqHUhvgDredgesnyE34GMQdvj4n4iNJnQVCYbeYfH5mJN1wPv",
  "key9": "3u53fLv7dJMNp7uqpy3Fsn1J3YsL68d5yPDoYZsyLNj3jeuLGrHB7jkx6B3mL38eUUaucFV7h8hsH4Fv1rigz28U",
  "key10": "2frk7ahqQpmvt1aoa3JMJv368uAQW2XHaH8Qg6SrUxTM3ecFHvCF4eqknTPj11akJJipYXCqrrdwMs3woh5rUruE",
  "key11": "i7cd9yznBmzbv5SNZCxcNa8UcK5sGufFknnU2CZxPxF4dDUzQ1g5joZBXStQ1zvDMjSXghUHpCc7epEUJPQUrZN",
  "key12": "wSPnCH4rxGghvQuYPhSPxfwoYimddHZwDHHFHZcPV6WWrkp3m6k4pRxABG9FvTD5yZ5dCaUYxAzbcNmRdh5T86n",
  "key13": "qnpz3Bm3Rdh6RCtYkmiUL56ZY7hgAf8a2uUbzHaCkeQGF34GxpdePJV3B2SViQ5b3TRNR3Rx8bSiWLstmcw5XCk",
  "key14": "52EUvfve46pj282Cjd6pcoEq5a6pNJPXoaVz2QHqsYbgnguUzEyhb57GSmjc5371y7H8c9yghp5DfUHvDBfqgXpb",
  "key15": "2BdjWWaW2PyQqjM9KmUQAazLANfkf7dUsrpat4HCXazhqp8HnVDdiZdKXk3gfqr5zz7LmkzfTFidkdqnum6y6JUy",
  "key16": "2DL61wuDWXT45CDok5tW1q2D1RS1Gv1dc3EzJFNRzxKc7p3AjoKGFa5ai2iiWiW4as1TLe5vUh4Lx7WoNtc5bBFe",
  "key17": "3BcSYtezsWnUqMiqA8L2atCRxw3V4HptR1uS55eP9yteH12W6efa9XCjLrVHLARtZ6UbjgZENvirYbKufzMUNoym",
  "key18": "2DBfQpCdCQ95y3rrD6EfuSTTiuDnzJHkzVjnv9vKcjTYLHEwJ4ibVjsefZ8qpZSrpamssehKF8dX4MLitrKtC1tu",
  "key19": "Wn6HyLAH7XfXQLxcLxNhQxx16yRtN5s9tvZmC64sucyghHRq6t61Gy3TqaZnyHNurMCo713s7q6w8Pf9TEB26jq",
  "key20": "5p4zzCgHdque5zMzgkhusMxQ176KaBGBqd98A9rX7Wi8HHotSaGs6TQyFr4Bi6zYNeg4j3AetqFjQAWaQM5QGAxX",
  "key21": "VBqELgB4NWJECRXeVE6T9cwWt4tAqgfG5jzCqq4uKwSJR3sgZeNcLyRRccirLjrc3rG4RrVxp3L9ArvssSXSAN3",
  "key22": "4AP9Tu6H58EvzfEa1uqXytMVuxRbhSmgRfusgvU5brpNCz5maHB2eyeew4Pos7D7hG5tSLNze6DNC1dXY16ByRUy",
  "key23": "3qUMjHyqjKHFocRF54vDauuMtTzAQKf3Qs4Z8TfyzDioT9TCf1PrxVShgGNE7QtCSTFiPmdyLeCp6RYYeq2anLQS",
  "key24": "3GWzq37viLeRnHiGKaV4JtQ8zsKuq4E4J69P9Hp2Q1r2ASzNYMacWXomMYwGNktZL9gDpReCwCGQejMVZrAbEJtL",
  "key25": "385vYCsJ4dN6jwttZX5ak3yARrL5Hc7pv22zpwJjW69bYwEtxafc8L4qDvigfVtz1WaT9kJ2D5fkaCWXJwGeHkRa",
  "key26": "jvg6izn6WKGFho7MG1LGDYBjCJ6Qi4a3DBApjM8nY1E3J6Y8z8Hdvo3dPZBeqKZBeUo1VK4ARn6TTjt48HA4yg4",
  "key27": "3GA44PNbmtUVdyGorFe1RM1LHNznpm1Dgam6gBGHzvNVr2N7khms7CAwJxeiZcY1skfsnPruB2wxvaE8ecPdKPas",
  "key28": "4YadGf7VgJ4Ap9GvwShy9SHQHNS6ZPURm3pYXhjpUBwYTj8Sh2xqvpHy8XHz3AVjwdmPJRGtD2gJWxCgZ4T1dp3e",
  "key29": "64dgBVAG3gRkbwNM8K7n5hYMJmH8RVLSjUu7BwDud8NLEdQoyx23nD3YhEvsRYuEjHQb9Ytj3nqda9L3iXNmxKsv",
  "key30": "KAWaE762GQcUGdwh7C6YJ7jLwxY4CetyF9xKe2AK4xjhkvpaByfsyfQwHJMEF4vyqgH3dmQ9trEnm6f6V6RyAvq",
  "key31": "BcfjFrE3RGYikGzfP7a65ZcE4BkKkbZURQGHHfMuFvq3WuPGiTAq2TWuJZ8mSdvD5qoe7ADutczgevRTVB8ocsc",
  "key32": "5BvX7VEoaXZJSQtQtdvJjbDH7X8qzBDSdUnB2sXPSAgmGwB4PyLhc4F4PD4BfCS6fiYpjUWPvxiEbqLNoJkYGCrN",
  "key33": "3deJ5ZaHrRRdNCYWCnxPMbbrJhgKzbhjo5d6oPtsx3xxdLYm2JRqnqGVbHgd6MFg4DLfzq35PE2928wkanWkcJFm",
  "key34": "3A2Bu257SBy2b1iDsf5GQDAjhgwRjucavnX8mGpkwNdDHohPZv9dW5x7iAtbA7xvA79yGRAArLi7bDwsRX1GAqQG",
  "key35": "HSCHCFrwmc9YxbKDeFUAVSeHGovzD4KHJd5f3GrrtCvnxcbnubp5hVxJ1DhuNwf9QvXnSg3CwBfUN6yCxxxrRnS",
  "key36": "4wqNrCg9R2chTLSpxJABzFDhcSyjV8CNKJKAjggqQT57eNnhFjHPUBcTJLqT6K9etSevGCZ3iGcfVU7kyXEZQpo"
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
