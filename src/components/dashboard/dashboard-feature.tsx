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
    "5SRZxFTKEDUXbjVU16fuLcoT1MM1CLghcsyaZ48CXWxdjHrj1CanGUVr57syZVBDqzN2QQyejATkHd9SxoSDroDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hAb46GukyH4ZfDHRjzZrPYs6AW5D5Ny4sFQEgoW7h8vUE5W5m4xmh1HbEsFNBar2vj2dW54fKKD4t84qV1pq9SJ",
  "key1": "4EqLtWLyaNYy6h2gfu3169LLzjEy8S8sz4TNYmLEFC2qGubP2SYQATooWcRym8A1VFYRsThEYRKDrzcoS9bzAyZZ",
  "key2": "5sXN7Q4G7Z2tyruYZW5cjWZbboRJnGrAN3Vn4YgNn5M1CzNpsBqWCoXR4VFsKUSKwKA3DMo3DSzZ7TyG1YNxA5Nv",
  "key3": "2HHdAzSxMHRdUKLRcjqLkKEfpFGcLboxFUUJcMgikmX8Dxw3vhZNuQsBQZxeVe4F2miLSVK66fNeK1Z8aX96CHmn",
  "key4": "5ZteHNfnAjNtwhLxQtS3hhyfU2sHboiuCgiJwEQkUcxXewt66R1iqSPyVTBNBe51R97vASkkyymp5FneLESha3QL",
  "key5": "5P1CS5D7hM9wwXpiP8waVfZeuRrze5wX5YnDW1muMMZpaJBheP3R6WctWgXWMzHN1yUD4xA43q3uBvnprbpJ4r7c",
  "key6": "2iMBictG35EancMJs3u4kGs7wFnB5cgJMMyRTQ1NDqJuVdAkVnxXyLhwoA7AUE1UzeXuHUwREFUy8vpctyRW3L2Y",
  "key7": "bQxJxtg5WaXfSNN1s27BYe8jcoBREwDo4v21RUwXUQi96mpTJcoDU6gngRnrVMqQY2TawqRfHWCkoiMdkbehQAR",
  "key8": "4Cudqde2opLkArzLdsHDSrPKnvvswfyHedwWfYzpY1QVwFETKGxsEm6yAbxhUoCLVNLhrPLQ8eK7euHHwx81eAMd",
  "key9": "4diFJZm7jwpcgPxc7hoCBaA3mQ7MU8UPj5HeQovfLayvqVnQWPd8jLPgSE77hH2HtEEbkp8wr1mBZU3dDr3c2CGC",
  "key10": "3oHik3WDHTf7pRDoSC7D93PZaJ7SWnofGhMHjTtjhNkzay5AJ5YZLfrcaVTKGrwgvQmuN98MzjHNPMYCyQkL4KnS",
  "key11": "4mi3B8w8vjxA2i8gbBCKcPQ8kCLgxhBvwvomaWYTWvy7emNmnYUjuKHCCZ6ereNNwMp6Hp14mXzdNAKJG1ezSnoV",
  "key12": "5ouTftJVS9fmhShWrnS6SnPudgUaN9Qhqn2DDknQa1rHShY6GRms9VoRwX6rnEUDX1ShgyPngUutnsjwjWywmDds",
  "key13": "3eCoaCanH7EuaxW8xSh1YwpjosLMk3CjguEn1RhtgD8RDH9agnTtYY3zRwdy8fwaxtTkr1pzSqzaS6vGCjXyNy8Y",
  "key14": "zhKzhXLzEt3se32vos5o2SfhhtVv97MTSjTAJ4m5judKcygZewwyEdL6kW5977JJhAQWrWirJK3ccJcwN6DE2Zt",
  "key15": "E8pL5hNiNuzDRX9Rsbpvewr1ZBkqEXH6u5v3UXVUnHSx5z9LTLFuaJpTMavWt9zgUFDctGW1UVB8kSNNVGFtCGp",
  "key16": "2Ai1DwopryaoCGLJpLMkizEHEdwcmCGjmpKPDCLXBV2Pn4rG65iu2WQDorJAa1sDPiMtgmpjrJYhGDxaHuxcYN1R",
  "key17": "3p4BJ18QciSe1z6cuGJ4mFGm6GTfjKr2WE8ATsSBFp2nN2y5qk4Ai3vNfb7NVAaMnURjFfSN1R28jMqKZmTw9Ryp",
  "key18": "4EYsH3VHtrTuR25ouDg8XJnMrXovdz3jZCoc7VX5XH5genMA6ShPhaYsHdmunz8rp2teZ2M26jx8GemX9JXM1GY1",
  "key19": "57z3fZvemcFKfFJLX9j3SjLbkujYnrVW1d1uRXoHtxH4zvWreaNSrjfPf8ad1viqc3nN17aRacToAdEGqoqPq2AU",
  "key20": "47y1Ea5xyURUx3Qu9MfZ9TQE1aJ84HLDP4WXuU8MKYL4kuob7tRXfVto68mw1u72NaPMobjeThJPD91MtNfuNZFq",
  "key21": "27p56ZE6pPDAsgb1wmwM8jKJiTTTiK5tU4ETBfCHF8SL2ktDtMAhBGm2W4mDEQvPfdv8DhCP7Eh7KMoN4tWiRdrK",
  "key22": "53EW4uc21oFWdUvu42ZcFuXwm34Jqe9peLVsQr6XfVDxSefnVCg3uwsa5bNLXFThrNhfZvxcoTudqNXwVB9QVYHP",
  "key23": "hgdi14sp55pwYESSkFKFBeSTYLZdz72PtEemN2FZC7N7BTBTZ59zQuDSyMh3EinfAjz6SW7VT2eEzYTDg7L8vtS",
  "key24": "5znZUe6rtdo3egUuXsaLkS9pu6hhesfokGw8XTKneb1Gm1tNUCqQmVu4VVNwfcDcfZYD7dvy8pRnMMuFjHAWzePb",
  "key25": "4y3Z6exfftTMCGhPw7xJKmWFS3nRPcRSPbDwHFuLpHkkSVAkzab5CEUR4VqvXy9zLyXkZ2PthKzDU2RUeq96gQEL",
  "key26": "46pat63nYpedHN1AWiTttTp1fCkkeSvnbPN9AQJQeHy5kk8QZ487Ak5xavCms8R5LSn5J2ZZDFJGw4pUtHKebFcy",
  "key27": "5JNj1MWiXRQJSCyASNyGqnbohCK17JoktmHjM2Ma85kTXuwab8i75pWt4CwE5K9ucT6bEyNUYB8itsSjCZBQjJxP"
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
