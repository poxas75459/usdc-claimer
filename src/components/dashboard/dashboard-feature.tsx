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
    "FPubeeJ15y2ta4QptNq5BFuN9aYohTomRDgYatjfrtRTouWJipK78vHuaLhHkEYu43hJSEnsAwtBhf6HJwHYQ5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eDekJosePocdyBKyeSNpv94fprYQrUiRtY3iVpghuTCtgmiFMRHsAmepCGPrHBp9ZB7NhRxVhPHFfeLge5zJy5D",
  "key1": "3ZVzRdhAXNqaP6LEohQ7z4qHaMkK3XzqF2gyEBsCdwEYLduEYvfx5x8NVXUhmrRf93evpy8mLFhGYEChRobM5jUk",
  "key2": "2BqgiyF6YCZyL2uHgVSCWH17MNhdtgU3aYJ1mxApGa36gMbm1gqYJDHESXec2snY73D5r9ucb2UBtLbxJz2YJ6E3",
  "key3": "5QVgKnotzfZHtXS5bsGo2T5om2ta9cy6FKiB1xsPLz6xryFK5rETmNbdP782Z8897o5o2VRLCztsodcesULG7Z2o",
  "key4": "3UAuYEf8fkLbbZefRNzNghVR4eKzxuCf1Zf7rstGiyZ2AcxVr9bFYJKT5AKveCXte4NUvdwsDeAeFkUf3dZELvDG",
  "key5": "19TFvthx1Brye3tDfz4MCNs4Lf2yT7bnQAZRAQsUGj6xxJqNiNqkCSNni6qMQQDRfFgoBc8AWGzMhzejMhKuut3",
  "key6": "62TUYTqtCvUYJjaVGyyDVaJepiaWoEUFFkLBcXfAnbbwhMHFmJBXmj6RXm62zv6jKndAAhEJBCMa9qmPxcYNvd1D",
  "key7": "4hwquN2EYDzyBoukyrof4z4n7GrA1KWX3khxTG1b8WnMAnkFjVSaH7DiDLaqSjsjtpA3Dyjnsf3rG94J9vJcak4H",
  "key8": "4qJzoHU84BXmrDmDFUUj6HnYw7A7839Ef34aS8RcdjwfdFwojq9rCGBbaBhGinqmQNfjyQJAakSBSHKPwqmLunFs",
  "key9": "FfJcWqmjs8vmGkShnMzDFNP4CM8ztZBBkYCy3nzJcHKTLBusyAkX7A4oMQVKtm6owXmY2CedMBQxS88HD9Ktc7e",
  "key10": "3MHj2dHit5c6JWZ7QuQDAyruasN2N9W2yDok3LyCQhyjbyscBAF1FefTvVzLdG497aH3QDhvHZ4p8J1NwAWWJxT9",
  "key11": "EgwWq24aswY6kw1R3dG1qcRbNWxvoHPgfmPG21cisiEidHjGmThL4fdYSg3avgUXWLRqhCB1GjRDeyn2PPKLVML",
  "key12": "4SK59CXTzzYP9VT2dPpqjk878tYHE8HEe8qgCW1xs5zwmT1BJ8ZvdE2AotAxvtrRrynUVTXRvkMsQg25KxEputbG",
  "key13": "367cEaMVEbGV918jZMUESokgZH7sfbJ5JdR9eALMT1k4rha19Zo31aQt2f827PiVoxrS7MWuZcRBUNWUQs7EhjXh",
  "key14": "RSkdKtfCcpSYGF6V3QKV9amHaU1KwZUA2LxZAUfmh54fWJbWHoYhQQQCaCvQHA3FS9RfVTTN1df3h8kLZmTdhWo",
  "key15": "32jbVJugYFbu8Z4N3TgtLEtQvDCcyKkL3i2yyGWoGRqVH9USbCt8RLraY2FGa4D3fHmuqjCunqisLta1gfFnRjPh",
  "key16": "2azT7XYdMCe546UEqW8KVYfnMqQYLn1FroHLoKGZpjBTwRXjpdAoRRuS4QWHjdEkdVus6mDtej6kX6SoBzhjzm38",
  "key17": "5Vm3Q63n3fhxW19JveQu6aWxpnceYFf6cbFpUKS1qY8p8wnADpuZ9f48Cz6cAfQH9qspn8SpF8xye9KQXRmZXVjr",
  "key18": "tn6W1JtLzY4mkw9WjP7x6YvAtqXj9FfbdZU1cKAPjRZTsu9SKhCBRUoo2G7Pc1Szs2igM6k57e43x3JAJLnoVJZ",
  "key19": "4oUVdQrqU4zWUQhbFS1acWgF5TxuZ7DLXUrLwRhDdbwkkpmnvtkMpXuqxpz2M7NEzZmYMvuok2CdbBxWxMJacrWE",
  "key20": "34ypfVuWVWLSiqddGJgA9gQx1ERt5axGTpPYDrSLFbxDLCQa4M1vkGa9AfBA7aKfJAtLAa5ZzXg6u5VScKq6Kmho",
  "key21": "4q39zXonBp5783KT2kR37Z5GGXx4vwTcb7MimaQ6BsAqTadN2zFE2kvyitCfeXp9BocxkfALpEYBRf1zzVJ2Z3kj",
  "key22": "2J7oQ9oDusruCoLSvQp9JVRHCsBPbek5rQjVT9V6JR2R1gLAgYYUiEbWKtb7aRUe8iYTxD7x2KAZGeXDXmQvYEXM",
  "key23": "38ambFsvQr4igpXytHhiwEvAYUHfVHtatLwM8GWjHRPgdRB9yi1Qp9HDUmb5Bd5fAGgmYhy1D5sFGrwjH2yqyVVR",
  "key24": "4awQ2bTXanuaWrDejSaHQDPsY15mg7HFySgsGrRwN1bRcUAeE6hQiFjFx75iLXeikQUSSnGXAwyp6ToKVc5cvwgd",
  "key25": "3a1GdL9QMor6sCwc5UYwU2weKRiSPb61FvnsLT49csM3Zh33evnzJDE3eyDgeGrDAVuYVLonDucWmeRSpMzwqomv",
  "key26": "5SrochQyFQVkiVSzPiPaM2HUdQpgdUDyV3X3rXjkU2HCx5tyhaWNKCuPJ5Bbe618pGGWt9HqKzu5TvxtcqjojDEC",
  "key27": "4239hG63jMiJpMH2NPWWaqkEMXrjuB75nqt6gMyeEeNijB9jBr11pjQipmdrZ4vXqJwjveB8pRKgxtDy8UMrS2G2",
  "key28": "5dzzF1b3ptD1Lvzt2qFjhpoQYSBKm52K85QYqbYYBMLP68eDnJEztBAGBy8LZo5fHHfrYHLDDGrYhSNUNuudCJ1m",
  "key29": "74bHmg8FSkSMiWDs4yaDrEX4WoqCecdBoysKu78BbUy455hd7GzdwXDLxPQ9GZBwV2XB7NpuQEnSy5nn1rtungG"
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
