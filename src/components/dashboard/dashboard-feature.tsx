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
    "egiqtPW5XbAQ8oQnYwaGVYSiPUmDyUwjwmEbRYy2gY5ve6ZKF6WovURN68aaf4aC9LB32rLctu5ARUV2Sixbs4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jpYB34WbCFXkAfMBe2o6jcGJTUPasXzDgDJL14Z54BFqNPntEvLBSD3uE9dpsL9YLj9RsNDEvvzJnTvXzyxbDL5",
  "key1": "2P196xNuegFqDokx6juQrAYxZ3UYmbBwq4qatj1rQGGYPMJeSGwZbBRcJqEjGbtC4FQEbVKPfRDF5A6xjoy8YmX3",
  "key2": "5yi6CZgonuqvyBxTCAQeCyvHWojABnha5D8conygqzaZFM1aGCqdUDKZhiq2Yvw4sL4xS7Yay2Hh2Ex7xV3hTo6y",
  "key3": "RvRciNpoc8vR6mjCAJ34Y2327PH2PQuXM7hxoKNBoEGh3Y1F6DshPCqPhzAodZBvSA6rcnX2mcJgtRTB5xQRpN9",
  "key4": "311Qwh8Sc9nZGm1PFjWdXkQ8gp3PwqYpCecM1pqKm1G3pcpKBimg9beg4yvLKZSrokRYDSQSAT1gvpbLnCQBZSv8",
  "key5": "2zN4eGEobsdVUyffM4uq8b9GQAR76pGMY1atNh23Dq6aAGhNJEz7ChLfyZWyybf9XqVymQxRt3XEvR728DTjFUDV",
  "key6": "5sps7VXVgRRua6HfrodzcDFrDBAupMbF6qFtP9cSLuRscCTJ19S6T2LnouqPXqt26YVxH2G69BR9BShW4pY7sNBt",
  "key7": "4cU9GXHXGn1wriGY8PL33qzjKEt2wSfWYfR3C3M5iuDnZMYgDM9ADT2vB3fGRjLkCSwPPvV8DtJHcSAQ8cDazSW5",
  "key8": "4oXUzmLNjXdDei3VaMcv1p2ppZQtSgbnzcJn6XRuP8VVQrkFyfkqRxnqRrGWThVSGA1e9ZERXCrz628hLJPe4o9b",
  "key9": "i6on6Nc5p6RhbkhqKtns9JDbg4qfBwwQaU7ViPcm4ehDFCKvJKqTYuPh9yLpVZx5evmHZGXp5qPEuq34pfLyWmx",
  "key10": "z258K7KJSzcXud7xvS1cn5Z17WgHLpwHMAZEDbUyA24owtaUWfHUofHzhnawuTZw8ygadWVpKA57D9T7fxct73z",
  "key11": "kxn2tPRevPebSAeykCFeDa9F26dZBZa8YFpUKD7oCRBWuReQ6tqJT28R9E1WgtoaApXA7JdYoeBkWNih7R7DvU5",
  "key12": "24BwjrtWQrQR6rmqchgP8zAQWjJkdiG3Dm9zSQ9tAbd4Pp278qrTAQxQid2XoFZSPh59qgH59YbjNqck2TNF4GxR",
  "key13": "jPzW8weLAoGmcg3iSt89DLmQvk29J1j5hCeVi9WXg4vcc4oK16755S39vqLgCJQEi8dGWELm5e8pqjXi4RF7EpX",
  "key14": "4GKegdSj3WYzyYxddHWvz6ZsCBYhDmRQksaUJJhytNJDRswxZoF1wZZeYcXJYXee4GVQ8yX4ggx7ZavpruJTAMDB",
  "key15": "5ouCXAjPBUgHdwaMojtohMcupYKMnD5tz1PaSpxwAwCt3M495pusUJJ411geEWuqzyrELjPRzmFmfMWLKg25Hg6u",
  "key16": "4vSTVt1G5GWLo5aQVnCvUJJHBtQqJh1Wb4CkeMenffa64P48DVjisdzj3ZWYGqnmG5F7vQpnAkdHDkwq7dfb9XNq",
  "key17": "3tkVW7DvyvqWF9SNawLS5cM5eCo9M7WKhFUUMRv169qp2NMZuPfSTgKaByTUgbmCYExhbCZhDrKE1SvWzYCKi9wc",
  "key18": "5bLkJH3SmkZC7ugxhgn52Q3TMnd3LszAxTpFZJbsiLpAUVpNVQLXGVe5nbmgggPBvMC2hGDZFGUktbuVeiMqW4H6",
  "key19": "2RVaEZrMqCaocAkRwguRD4uJ3emsUFr7ruadS9G821EDgF1Pshcxgt6Ddi2L6BP22fsmuCL2WcdciqDJ2EwHD7iX",
  "key20": "3fX2HtMjYgPavwcPY99btyEyBgpEkVzB12cv5k7owhRiw65WNxBgtFcM2esUJ2CXadWHdq34Zn8DWXaGvx1U1uNH",
  "key21": "61Dzwendgdf7Ngkqxov8UuoCWGrqh6S7jDPe1VmhX8zcE2cpYGGTh8PZTWt6SQsmHM4SdKdWmFmS3hYz4aLqs6j6",
  "key22": "2irZA2rpHvi9VPSqJSXSG9eWUCSQHuijtoWkHQ11h7RKraXU66zAminU4Y1BhMTNztrUMJ3gdFK2U9ks3TMx7zek",
  "key23": "3Sv7hG4EyMnw8ZFZAhcg7HW6ieoxfUKzaVmTMPiLA4PUeKDfLQ1pdwdVgsfctBkbWSvjhUXfTdVVgsCSihaxWDn3",
  "key24": "5qR4a7KsfSghbHkQmDTddwUUFEYGskyNkBz41hJE6wqmhnD3L6D6k6sdfiLNdGsnPWsoXvuQoWFV9AGFVtDBVaY8",
  "key25": "5ksQtq5Wm8HpN9saNp8f8PPgLz1Y6HyToQ44K7VQRPKT93Y9QTzkewaMg86EkdbemAZqwjyWQmESNPfnTLzumZWm",
  "key26": "2HPbyKJf1opzupV9QNaB1i69E3Du3JP5jzXnftfQvNUuRsaWuqPdSChXpdUcZrFq3gQV3rRSsztMGyNAH3zxKedu",
  "key27": "5NseCCX5F2hNLBvLnGNes1shYXmtXBtHifxHHKjx33Qcs5froFJvdnrPW6M2wX49P65JKrvM5WSgSsv8tYyrYkiW",
  "key28": "58rZBmhyrPhRTYBiK5tExNVXSk8QZrpC62Q82Hqttnzf7CkrdWs6poBMU7iLErwnDFJTQQFT8Uks7GY9jS9uJRHF",
  "key29": "GV1ixdjdYyEPDUNfXoYXWk19cYVCm9Rw9hkQ56AUXiGzqKNTvkofYU4c9yzvAcmPvw7wQjUTeuqX5XwTmJ4ugpZ",
  "key30": "411mnJH6efq87GC6M2s2GRQuiu8AZaQJuvf4SwesZ5B926hbpvqExUXvBjx84EQ9AhHAv8FvhFx5HH3Sxzjiw3Cy",
  "key31": "4UdAQf39VgFWqWnwPaCCHxTXc8CpYEcT4PiCudn9cBnAZcSB7fgCnn49P66pdfJ4Q88CDHnuLQjV8MsMhGn7iQMv",
  "key32": "gsyy7TVEcKz5aHav78gg5fVdLheysaUFVLm4HhXyg1psMA1F2Pk2wcwGGEPf3kvAqxmhoMHY8ss1g5hp5PxEEs7",
  "key33": "4jNGFityn8JsrxafX3GkEBzr89hzDUwLj7T6JPGbxj9VNmiGJ9TGvkRKizH7pxguE3BSmeRVPpC7a1AqgzrUMwLr",
  "key34": "2iA2RyWD1tHf1iucZ3UuA6WUkU5nPsBKsNcq6GwyH2oPeAeemwVNgWZws5X3qausmyFweEow36kPMg3YsFPjUhk",
  "key35": "5htiQzggZE29E36qN4yd6fxyAMmQgtVTcjsiJVpa8k5JbUyZsgLjRFPHBTgLNVHj2VZaqiUdW37vDVJrzHcj1yWm",
  "key36": "5mcSyNhhqL12MGrjTuLgfV8myJJR7xDKvoKVuDrzZxmetMAR1XqTfi4JmCYJn7xmJE9ohWQouS5G7qXW8QePkQee",
  "key37": "31V3miFfS2Dy1d7mxBfP7XsvEGw9a25mCePKYY8ecqStwgBavGLFqTYGbVyBks5YSH7iBMYVVrbFRV8eMiEb12WM",
  "key38": "3VqJ4mhAQ84TVy54PSJkxwXDv9d5rV8qKHNSdVVBDwgFrc2zdPvSjJR8uxm4of4FRkJRAtdTvh59ZDTKwr5svGVm",
  "key39": "4ZaCL3f84qMT6ThV9dEz4NgQVS2hih5rvihZHuJJNQSYN3fa2qjxveCDVmkwoC4pgLVyXa2HevTJseauXyFP9112",
  "key40": "2VDjJii6ARKnACogr9bcDfiSyM3fjjEVWQpqpejcssRwYR29y5EWj7BM16Eni4S9G7LakkuhjcnNwa4SUK5JgPWP",
  "key41": "2YpZGTDJo63pAFwimxJr2f2LgKS1c5u22KRWL5bgBLsGiuTaxpAHQrndthCCcRTQLUFNNFrKfyG38fZTwMeK988u"
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
