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
    "Yy1yqQo7FvwKmk22AJHnEjjt5BvQN1GmvZg9kKYZnTjPsmnZRViFwdiJQC4mRFxTVsB8aKpAqxyWfDaG36P847h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QBSSJUZnWKNfG8KMoHKTeBacFhAP7VaK3JMqcio6Tbec69bMbchE7qvmQcog5VD2jkm1Ld2yZv6hBE8r77RhyBb",
  "key1": "44yChPWZvU5Ta9tUHonrnCXcCvb1y5uny1sYovur8xqEe7oJFPRfnyDUc7eAMce3rXkj2jvwipMpMqbXArqFMV42",
  "key2": "3FbVGkq7ssKSNKzJ3RdKynsZmDBYHUV7wZGmV3qMaQ7S5hXN9ZvgrRuNHGuLRcDv4UtBrCBw14C8iFfiS9PLc7ie",
  "key3": "39JfNboChcBkLb7BbnxwPo6bA8AoVajen44W31nb1oKfsihPQtrHzYvKi8JV79AGQCmTSy5wAzCS7uJJQ2ZKRQLX",
  "key4": "qPghEEQF7BWsnQHfV5taLHpHekeLb7YZb6iph9Jrnm6Ls8Q2p1HJ4YYuyCXVAXA3FNy8EL2aKsxhPBUTZ5iKfPN",
  "key5": "38sp1ABzBABRN5o6yMKihayUzrh2Kig3UmwrPKSzDzhZhLZ3qib5fGjFTAMZtsVccvctJtcVZhSYy4Lf1TnGMyRE",
  "key6": "4GAAosZihf9FARWPoUmV2chsGrao3wL51nHThj8cCzXN2HPzca2Rz2frg3F7VAhMr4P7CL8XAVrqt9t3N4rLvcuv",
  "key7": "2G9TnKVTbx9Atgxa1GoaZuzqBb4fT3ZvbDWovK7i1a61avUpKXJdVjYp89TpXDN8EABeNFt2gFtG2tretTmCiURg",
  "key8": "4qARRau3H6ACsjmgFVgZrZ5yifKEMwwRFxFvpnvoikaUvrNGf26wByEHGtV33hHrZFk8UftVrHA7MCFoYM8ZKNG",
  "key9": "g3gJxg4MoFiv3GdrLwpM4uoN2YvCwwdJehFhHe24XrCtSV8WYscFQ1mvPqKECVbLXVTyqWcWHsYim5roRR218wp",
  "key10": "2zvcaP8iCEVzAaDD8iaTWPmL2JKXvuLwLv3Js11pjF9kZhmLDqfTPRUDDMbNP36tjUC1k8N8Kk5zKdV9kERgfBTV",
  "key11": "5d1cPSaBgPo33CbN1tQz8NbAceAb8c6R9E7xwhJKMaYJoGg37Q1CRHRUD13Y6vq4qVfjgqzDBKHgQEi15G23G25y",
  "key12": "cbF4yka4eNjkq6rDuMZs8jZqVGSq8b2BTU642yA5G4oEF5P8EzeeHXj1UFNGw1VuUmPfLCMgRZ7r7479hQHm8nV",
  "key13": "2R1nSkuWUskzZ3UbSe45FZ1DCkSMt6hTZsZXDKdweAbuMvw4gxyXqmUhq4jNEGjeYtZdnEwbJVZ7YMohNCMKCZvc",
  "key14": "BM5dGupEx6gB4nNw4tteDhY7AXbAjRtoio2L4Fj5L9dkk5uPmfh4nSUYzxbbutczy18BBqYmtgDiD4zFma79Yoe",
  "key15": "5j4xPhfzyzSp7GEaDsQaVWHQGjwVAyvXMLrHtwGdWRQ6gjZyUaLoiJfKZ1yfiwaPmNGBegF8j5FMJkjTJCoVPQZV",
  "key16": "3dN9rxhpLhJcsNBFCY8ARZyV8oLrzHpywkHAeAoBTYoRk8JbcmKALiPyN7U3V5xSGWm9zub6DQtafc3p528eNZyB",
  "key17": "4h4NXrwLoqYmZMm9Cw41ByfHAyyBVympgoi3bDG4XpA4HotqmRHT55svwRExwvsFv2mLww4MLJCswhFvxjUNzZyB",
  "key18": "3XfRbrwn3iC9F2ybLFighD6GhHZGsRuijhgsHU8kFp1VJ8XT8u8tctz3UmdFjryXGzuYrzeAoHJVDpFC3qmAHvrx",
  "key19": "3ofwe4bAej8dfZrDBYbr1er2J5yuDGHFiJGTMJgGLhWXpCr1msUjS7WDecWentPCDUhsB2bAtj9C5ECAYXpueEsR",
  "key20": "2xukn6PidojV1QHGPEo7M2tFdGHxNK45UxK5Qst2kDb6sFm8iaURUrDGhxRXRM5YYDeR4ZrkGnGNN7QoEDqBrFkV",
  "key21": "2Qwug1yF77K7qyYqZhoC3TKT9FwBm3QmDMgV39aAeiBmPU8xMyq7XpzAk7atQHzzwEfzdmtLagezQ9EuN8YVNfJa",
  "key22": "5gohNCDPD191s5Nsg8dmZkpfLQKpf1v6QC4gNmZDWS2txavFTMEY3ii5xc8YcSHNQpkjLjtNsyHjBzCVTwGNwUK9",
  "key23": "4qmed5G9NRKBsDK945anKVgD35dxEEm5qxD7GtNqScwnVJtL9jAo5cqpah71i8y9nfw7ZS6tw1AiT28vbcAQxruj",
  "key24": "31jXbLy39nWpPVhvD22y55tZSkbBTKnYJ5d2Wsq61k8saWyu2QrhHCoNgiERwQE3UEScvc2mKUXXfzFhofVWHgtu",
  "key25": "5Vxr5PrytfbJLKEpobeP4yrkG6BEsDv2fFQSQATnVQaeZeJmNaFbdxZ9K5x8xHwaFmuKfD8kv5cYUYdvXZ69ydwD",
  "key26": "4Qr5pCxMibcQnZESbND6aRbWFLw3KnpMfyMobwCZ1RiibXRSdYNEEzfcZJQmewp2soTD1mfyHXB7wfHg9SF4HNAa",
  "key27": "2TxF9Ko2VjCPyyGa6Zi6V3YM2MaAa7TLRDXMr8xH59HJts9X1epDxr7vjbA8XfhWZfTB5ETe7vJ76Qwn2YHyPkzJ",
  "key28": "3yvpNeVvQk2NNzrEL1gUcvjVULgm9dvpaqKxXftzQuHK2wB2NZGyd1X1cTreyzdhJwiWWKHUt9HBHQGfV54mnceT",
  "key29": "2UXPXjwi48ju4oJaFR4RZSr5eiXEB2tiRDSXQtLnvFkFWgkjnumMD5cb4nJpth3tZXrnCfMaFwixXXR5V4r9mEfy",
  "key30": "3mM6o4VraKgbT13UzqpS1ufHCaFLAr8i4wsXkks77Cpq34Bd2ob37Kqd5DfY8KumDXnu5CzLAP2ynhwaLs2m6seB",
  "key31": "7nKf8SRWnAYfUGWTiurrYqeuryNJ5pw6RMofQjgMTUCmWCsCiwd2671VbZSY7jjDxyJKAGeTqfwcKBrgxh75DzE",
  "key32": "2PsQfJAJtYCx8zwt7QsGF2kvxpHC2RcUAK7L87VDaWbBDZ5CSScGVpewrqn5HnNKmYKhXAcsfgMBzvvDT3gBSoKw",
  "key33": "2CP4NTkiy19oz6ZfJrtvD5QSXEu9iHm4pczRTCk6rvsvR7NNQpqiPCnZafLC8ch1vF1oXzpJxmhHNafUkctnVKNF",
  "key34": "4Ma8jQmTH42z9vyPcnT5M2XGyjEkzLqFoLh2Fjov13gYufJuadEfGExqa9HuLMR3AkcwZgQK7NgCTFtN8MUuSiHD",
  "key35": "9pzieJ8ap9GLqz55LPDrLnJhkHx6QzYoqGw7xj1min1KTuDfVLTBi6VjGstEXgCW1WvtvRbSR9HLmkcHZbKzAty",
  "key36": "yKn1SMg6M4C3trStJb5qpe5vhhMSBCbkMHo4pDfmV1CPbNFB75gaKcskuLvTMQ1bo9kP9cj7frSFtnbkVcwvDXb",
  "key37": "6Mj5CNbXq8wZvnP4ev1un28XS8xwymvYV4Vz59sn93wK3NpbbfyzJidViLnPUcvfx3fJQ9S3dYGbFokKsvSbkVM"
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
