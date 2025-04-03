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
    "5ZggKicMiHD8gBbMpazgYh6VXSma4ubp26rdf9WSTcFRrSJraXexYVQoSBauNZK4P9ufkrewH2hZoGNiTCV5ftAW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55hsEhLkoqTLw9AGJGgqb1bXu49EsaHy4QbjR9wCQs5sCC4PBa6J4B3wxWnZcfXSn4buQhrsD5ATkEK8xAXWGGPR",
  "key1": "5BYKFtZMWaegc3aevYDXhAfSCK4M69UmKFYzVQASUoVxmnYJaTW4xfAH8oaPMnAMLVAoKPJckm4EoLrKyQ8745L",
  "key2": "3WX3fre6iEB91ruzH7Dc6GzvC1GZw5n8XtTCYHZey8KTn8Sog9ExvU1xxRoiiCvZf6v6FCGjZ89Tcm3wgRaktaLR",
  "key3": "5GcwrRzXYYixewXLFnZd8RAt8ULZiZx625ierjP19cJosYYtmeghoUsxbyKkWihTHefsebjZ2GJcHxXEQUMpVBzd",
  "key4": "2QWPrDR91FV3aYok9uGSb3PRbRNSuVq8GoFzMrjm4xnnvBS8WNB5x94kah7RnZNMpB8eeEzfm8Re7JpdQZqsBVnw",
  "key5": "4pqmYKGDWBZXDsCbPNJ51xPJSLir7bTXmsTFapiGHozXJmaRhCagk6ZkfsLd1WYcjUyy7YTCkhFwbWBtaSYfWVtC",
  "key6": "5j94WJMdME6uuK4S35CVKfJy1HPrFKqiFaP15CmeZGRCX5MptnMv1Fja7xt3N2fJ2gKDqxLLFVL6N3QLk25LBt1R",
  "key7": "2k57x5Px45GGxYVqkMGndaovvEPFrrttr92zkrwSqSpn7toprg5KHw7n23zPeLq276czWtHEyHn5GcUSbRAhb7pA",
  "key8": "3DWzsTqtKgunTBL6ujc6dJQ8R3YeMBK4vW2XoJos3VGWKdPJ6LEdZVJE2MtEE4m3eBCaqajVJ2hSB5atTXvVXsS8",
  "key9": "5kSAv8fnj5Dqt3iNTk4jm4co4LY2i4LpAL4ee6VwPeSGLrn2v7SWPe13YufLPewFM8fmArcH7524fJTPJ9Z5GTu8",
  "key10": "31nDLZRyhYRaj1iXDCucruh7NrqrTgx9CJkuo23dY3L5tPLTNuNagv9CEA6eah6KSsZkedHxBy5VR8VSsmRmtHwi",
  "key11": "Rhz7EdkZM2pTyiKZXPVvGtsdJjUqcKWjVMrt9QqgjPKdjKb4TzMgfG59jTL6Yzj4mcM5vcgacY1Fw4BsCCBzUTs",
  "key12": "3meCuHt2QNzhQ8VFeZSDGjtMaHgpjhJBTo7GZUyyQmJm4XBdhzX4CMEECWyXDYUkoA3dcEARBpRuhoe4ztkXrygn",
  "key13": "2H4aMw514ggy2SYFXNRzguvCapqBQLCKfsHzXgudAny7cwPhdr8T85UWEkmJ9XY1ehWxMAJkA3bTZYCeQLLo9aFW",
  "key14": "4rJeWXtgixf4XVVkotUduY3GCqKixwqs5Vfxhj9eiDYQLehwhmrU88XDRWY99L4ShXNDaXL6HGmgnmuQWJSc77QY",
  "key15": "5ZS79xW6xZEepJCAVJWvgJWpNPNZHjQRvdzeFdMm1mGyWFQVKUywqkfcRcGUBs41rstigp4pLjpxztcGqJabGPpo",
  "key16": "123MKtUZqS4MCUaLpPPmo4Bq8iK5Pq7M1HmQnyTad7XP1hdBTiUbuz7puA36tBWNBmRgr7emJqVfghMri4a1HdGu",
  "key17": "29Tn97pscZgRhFnZSCBNmyqA2zmJFBBeTyMYmhTaRsYtQrbTybqitJs9wL8LuhNMSRMo6yWfN6DAooMD9LVXSsun",
  "key18": "2MyKRgYezFmTyQCEphAg532TsTB1os8vFKPCnY5BE51AnB7FJMcRH8KRgE4zsJMTvw5k89ngQb8mt3h1VtwgXLdb",
  "key19": "2c1Efx3MdqdHpKx75gq8FhrrVYAkSDzatJ6KmgvB2LWfguRYMpZmDZJvwjz6SwY7BCry6nRvHJ3f2ku5eptAcWGH",
  "key20": "5158PZWtrFYHSisYGp6pN2hhWDHmoD2XnKnZWg4Sb3gKZyNanx7t9ZC6ReCNmjmsfj5sk8ZLh35mWNAJfoLnRGY5",
  "key21": "3F8ywbfGNfktmWRrsDzGZYWX9w6DmgWUYPToURVUjt1SfCT1daMYkZTsJV34QPESJkNbxVjFGDVBK9N4QxjVWBL6",
  "key22": "5dJNC3kC16zKxMtPtStKtfbNwNZNTzLEiznFbqJT7UoNGwHv5AMLjykaw6PT2dWNRrFGESm1jecciuByYJZ3pNws",
  "key23": "4rYwc1D82QTKfFoGQSqALnD5E3JUHYH6CxYEdGLGTzmzKRvUdZwhrTWgoE8bMPphj73QC3XPsEEUjcGRg3AsdiQ3",
  "key24": "w34Y8YEjo3oCMGvAbTWbM2qjNS3eaTR5KSfvVYYivT1RUxQHK62ftfEpqz2qXdT2neG473wN2KvbG7g1YR3pU1T",
  "key25": "2B6aUqijTCHpDfGpt4yjEj1EjmALJxM5pTJdF72HBEd1wzHYMg81hMNiK4t1i8q7B7gRbNJnUs9wgoBMddw9omoz",
  "key26": "23paNgk8WebyeWXgcJfH6qiedDnV4budGRGYz3Gu9JAXm3FMqGeuvU9cJk7UCF3UaV8SAFpxD5pM4suTgzJqeAHT",
  "key27": "2PNtH8QqeDHo7N1gvKGaqCUeCX9YNDqriM3Pa9Gqew6bvZ5LxSDi1dGfooDGrWDko7uEbtB1DRke72Lpd45txHFK",
  "key28": "5WDPWHCCz4fpBZH8o5fYPWsuJHrrpfx4CbR5wChowPG1FF2MXqWGsZyUPANNoaS5cCxC8EdXhtrqEVFivR4jBLEa",
  "key29": "5acy1AhQi7oEG3zGqMhHBnCNefHoG77J5wEytasuLC7WHmhZiYTYDMHSZucBBpw9cfafkFLdCNqaX1JzKCwJbWkg",
  "key30": "4sCkXa9YShXBNnYduJFJ1ggmDh7m1m8wS3Lb6VGLtWHMicinwif92RDGqLTuVTqQuDMcfNSS9K8Yp1SyqRtA3Q9Y",
  "key31": "3ZXLVtu2xouRzxYRp68zgAnCc4GstCsMoiGY8aADgM1c9FrrtHEGqYKiR5yVQFDyBvtUBF972a8u6J1a2gX81Tcp",
  "key32": "2TRUVPZovtUfi2UxrjSZZGvT6WNzyTbWhqAsq6iRp5dwv1nEEjzFxdhMcrqqyx5P7bkqMazNE1G5v4tycPCaiurU",
  "key33": "o77kwoQCUaWoVha5RU6aSBeXrBE8Gch3UdMcLXwN3KsSdCbcTuHUhtciQDA4C9eNzaazjjEfPSajVs94iZVJxHa"
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
