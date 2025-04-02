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
    "4xZyaZ11PrVxRu5Zz19BJQ2tTnW4ejHuVjz1K2tQ1rdNdCQxfWFoDoEo8BJV11rNV7ruQKTumMVp1n9ZcVa6WUJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U7JEyMm2TjpVkCxKQZ3k8qUd35i3P5A5t917CSCudFXZtuiCu1NQb8vYAfP9g64Ded1XNBf8UCdYwjUXt3JN4yH",
  "key1": "2NkYC3JRpxpvou4xyv79he3o61WbZ1aKVfQih3sMurDdaqCmMiTKa7TxUHsKiXfJb4kvNykRqTfHH9cMCxuasAoU",
  "key2": "284YZtSKgwYPw3XMshRXNqRjm77oyUGqqwwqZokokTB1GuceD1auJbDLqV4Ei15FX6t7NvUAAnaX3ZXGYzzXmxRa",
  "key3": "4CDSH1UNpkxZvJi1YXHySoMPqFm2pY5qP2a5GUFkwvsJyT7K1uoEfAjA5aExDYWkoiu5QC5khE9ua4STASvGwf3P",
  "key4": "3HCcvjHqhZBKn4oytigLxXnU3fj6VCwkQKeDnuY6FYnnSLwXB8aqNgg51WxfCauDtNW5xAyMCNPwrkse64PM2YKM",
  "key5": "5n7gknqpQN5GfbtA92Zw8ymqaHCR5NsWjVRgSrtoCHq19ra9yG4tdoZFEshZbTSgmVC9k3Jowowp1ACqKniWuwY9",
  "key6": "3g9HQ4dmh9DYVMucsgkWnDkAn5QNKZXRdreSVBrzCP8ZsWJ5kkAyYz6ouzCHmpr1KeBkzigpScwrrcdFXSiTukGY",
  "key7": "49Bbi5ZVkBJ9G2EJwoaMm96LNPHJ86DYP5qUY9nUmZDrbxMHhnzm7ssP6pQuf4aVbi5dua7Dqp6yvuKbeCt9gLV6",
  "key8": "vQzbft9rMAJ7XcPCC51xJd7fPsnPRpVxGTeMBYGG3yyaJPnc19tKwrX2iUtrmEkGAkdB2qjtfvhGJnp8b2cXpYv",
  "key9": "Bs3BN37MtdGJWhHCGBWZ6oLrf4QVFP3ayeD3cG2Pm6Xqk4bCjMSn2WpuUFftNvAnwokA2nYr3BvGPnrGDdLxP71",
  "key10": "4KeZaMPD531zASrnNZsEwfA9o2qgNBgYNMm4fPwVEoAAYXP1EHqaPgeCbGm8mnnN3cwEyHAbx4qxRq6yWb2fRyo",
  "key11": "4u7HEqM9CFjauHhytCKnqT89fqVrT3UTZmPvUhsWPqxQTdE58KGr7mddqS6PGqDszPkPEQzqcyYY4i6qM7hFqrGR",
  "key12": "3JEStcdrd2A3eSjFZ3v3BAxUeHmM24HwjD5CmvXW2aTe74XMaVV1fCKzqaBqpmSFzQacABWErE6TP3PsBgjXrdub",
  "key13": "5s4jyiSmKqzyiFsXwYDX46Vo8BEsDznS4t1EqrKqrxunbaNGHp9fZbynmMzC8cWNqjV72z64334s2PBi8gFDbq5r",
  "key14": "44hgSmin6E8Cf1MPWiTQUcEstppv6bpaFtbwMdzAE3oqd3beQAeJuR4RZTAL5ZSGjPzSmsZ1Z2nJnVWAvzpyVsds",
  "key15": "2pPPNfTbPMLJU6QQktZ3Sq2vDJxSh5ecfAzeCzQ4P13VmgLrMz4kB11XeroTJBTHdrfovJrYtawtbH97WtqCxmiu",
  "key16": "29HQy5MCQChCxYnThdSWKcpwPDkrWSv2QE9F4ETrQ6zuaGcQ7JWNtHcqxCiPgsZjPEEy5RRfHsv6ZKjp3PGrkdT6",
  "key17": "4e1iVzTkx6eYMSpG5LwiAz81zgNN1meSzV6kf36J3CyrPuKwSnrrxp6v8HRLLGNkmiu13uuwh2hAsp5VNbZQyr97",
  "key18": "2Ew4zHgQuJKMDo74AhE2WcfUPR6ZAauGLEWxGs5K8hRAKwNojUw7pTt3ZsaboBHHtMuSGGBCoydQEZsEYmkv5RSH",
  "key19": "47j1YHHkdDK2tCdKS9TyV3cnEaKfjbkHoKEgJoDKY1FAnKAirnutcmsDgVQMoEnqNcJ3jTLXJ1TScxuuW7vsd8hp",
  "key20": "63JTy1o8QS7WN6jaSVApZUTiWKZRBoXqL1Yx6EV7jxoPAp9mE3aLJTqAJBgiib2jg8KEMQpzsD3K4wSvembYuzPg",
  "key21": "2zdiLGkFzKeD4aGrqCNwtwwBpoCH2qRnuqoAye1ke6nZih9CjgdekU54cKi4pjuR1e5BqTqcWcYXPJacCX18Kn4j",
  "key22": "yerarNp5CJFtowDu17qpF5opu3UyCYx2vj5GaWJWJfSiCFQEiJbPQJG9sYbScjju454MHiinrPtjn6fr3Bzp6aL",
  "key23": "2LL8EN8QkwTvFNr6DSDZqNFEomnC2BwR5qDPkbtZShVEr6vHiTuAuCznYDRG7qMG4odXa6WTPpb6d2CuzRnqc9HB",
  "key24": "3hH8XjtW7hvgMteWHYZU3WmRGPrkh7JyU92GV3hs4zshvHdCf8db6tH35KXsEDDozRGj8e6RHLPQPsejhhVoRDgY",
  "key25": "5GaYTWZGJHCYhBB5N9toT96ymc3vyeZr21J7qAvra2ZzjZX8bqfwTWF8EgdGu4SKmSqwnHZqcDaU9dWd8oU3uY1a",
  "key26": "4UBpv1QY9Gd6uWdkGtcKqz3mEcE6j5P8Gtng4iVAbFGjDFGjtEyeBL6bmVUk8veCiB47HWBHJ1KMFF1eywJ1w4sg",
  "key27": "3BSUjnMjzMLu7mdThdWwZ7qsKExU4GDMJjpYwpuaASXVvTKF9wrBwJ2oDR3zFtTHXTw58PVe5F9wVWVLEiF5DKjk",
  "key28": "2ato31VBKdJ25uC5GoDSXLQZG8WkPuN5pSJFu3cHZG8xJ6qTNvJHuFvHhzDCZeuiYQSkm1kmTNVr17pHiQpyR64C",
  "key29": "5FTcdJRtVpjkMLYZjGDrwaADB8fhmicdFY6inkYWQv36STWAeGCX69xAQx7Np9QCjuwAvwAPUPoYCEGtx4AZwAhK"
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
