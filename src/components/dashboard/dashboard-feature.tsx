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
    "2RmJtPijBkHLh1QAWAWF37LE7UdeCM1b57TKhxEnMPiW8QkYXQQHUjqmUFUerZaGHEo8javS9sVyp5JNbT1JHYW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9tK7qsguWULbPrdGFiXRgFScTx1Jd4uyHmaAtFf3ybbgjCNTQrjDbdFnsRZnBW3NHUVXbv7oFQSUQs9wWxC1tdM",
  "key1": "4cD2ovk5sUKxvn5HPqcEc17Q2wVzfgQ9iWiB4ior4wSeR1a4ofdVpc1AfAWzPPPPghEtJ2oaLyfLiVrMwMuGyVuD",
  "key2": "5RUHqqJtkEeB1fEUFYwCLaRYxvD7jZ3pCjhuastsX3zwW6PZeKq7X2LQvbdGQpdhvzn6T7bbhZhUsMs2oJRAFwYw",
  "key3": "f1riyyecJHciD8acC13ENUAqT89kTQApmshLRoCLaXTfLAhj3Zgrcca5432SFfPQdNLxohXZkrSLsGASLf5Evpg",
  "key4": "44t6EV79KhZUFzM1j14ytw3j5oVT3UKcqSvzYTtPG5j5WWgRyTMnWYkPPsgbKBwYTq3MkyuxGXQQKkhE1p1ZU4kR",
  "key5": "4Asf5eDfsvQGQRBPamDKaf5nCcTHJ2sNQHTHgR3LwZUbQHffBguMeYMEYyJ8yMzKEd4uSGfoN8hdZ7MW8ByY4DXH",
  "key6": "2pDjC9gM8yw4eTPiDn5JiEEWsqTDbJzG4S6e27b8Zw4GEV9tJTeLRjoDtemyVyKnbJZoRGAa42GxEN9KzJbcmL6n",
  "key7": "4QVTFVRtQfeiPV7zjxsRUixKzjPsMcn3E3bShHnew1A1PCRKCYHifvp9qk4Vkd638CQc7HhcLSk6eQxRYQ7FaZXQ",
  "key8": "4XeA3LQYpUuaPp81Xih5bkAWTWwQfgs4YH8zMW6a6faNxyvM2ARdRMFbos1VDSmHq1om97f5BQdjQ7hC68bsKTfu",
  "key9": "3RpQKJzXje5g61uWxrmVLSQLEnZr7fY9GCpmBHzniVbDBN44VZ4DiAV1vv5XSkXNWACXqdPQUgdUr4VebpHRF1wN",
  "key10": "4Ly7owVEFJoTP3kFPQrYXy3RHy2L1h8Khvy4uX3KaaUQNeBiizifdJ8329P7tR4AZvsCY3Q1aiQJcRB5DtjdLnYG",
  "key11": "2dw5iYf23AjVU3HXEG141ximPjwcEpyRcpVs5mYGxXSkNmjzL72zhwwY9EfJAW86w97jfkVtttGSoBZ8EPjSVjQn",
  "key12": "3Se4QdbjVuxZwYgNkGg3RL4AXPYVz9VePJoyoP3MDAAZYTxc6pCtwtu2DCamFBsMMcnqpioJ9Nr8tkbZ3XuPCTiW",
  "key13": "5rE6ViNiT7oCpvucVj1Bw7LvgPyY1bacTsbyjMwPiJWECKXmcPRLCsJZfRxVph8s7F8BtMHst5T4czQNMpVgcU5A",
  "key14": "3ijkD8HzEzRT7gPtsweRbXFZJYRwkDZgw4QRoCjUkYigTZatynho4Z14EAJD81h8VcX8HM1WQXrNUAfyWD8xVWp8",
  "key15": "xQp4jErGgxXuMBzUKNVhn9wRmRcWPhKmyGduadg83tca2ACqotS4B1sCvuEXnSmSmHt8CUYQ2CTcD7xnBwmRXWF",
  "key16": "3FXHn2GTp6tBDUZJSEYBVuT3rtRRxeCYKNkh4sx5zhgnktTVa2KXdAkJ5rcL3i4wghrPfUwtCxnP1MxFJz6AGrXk",
  "key17": "3MWDXjv3sqhKpVxCfSq74HosRyQMTSsVeNjnBQXfErnsHaktzynpfFvrcB1TGpxrTTmhd18x424W9gkyrRVamWB6",
  "key18": "3ccZAVZayM2tPLRfcCACK7B3mLGCz4EN4iztS7pQQwzPDUrq6sdyQn6nZ6694GFk2nusdd2jmdEM9pLQyV9P7Q3V",
  "key19": "4D7dYME96NdhC29hRzWfHDNaVmtDKbJhRd77DWF7sFBuJ1eztHRfnveuyFxyZRjL3ZXjvj1F1SFXJCDtLviSrqDB",
  "key20": "5Bjr4gGXnAhgCoGwJXCooPQ1TnRpQq7oXBHTPonbaNvT1tVLyYradrSp8kuTJsNDSErdh3JqQ6wUi16vwZTfsJTJ",
  "key21": "4qYBLBcVb8a61RkagBsjzDpmnrgGfEtHzQYwZMysZ62K7LU2m4VHoid5fAvdDmt8EnZkU51pKwrz6KuVHPZVzHt3",
  "key22": "5aPRLtv8qYAgcjV8HGP9hWyfLcr5twuj297itgG2XBxB46X1z7EXXPtFA2PdXFkNqjqje8i2FLRQJhFucNtAeSJt",
  "key23": "27sx2FXxpSX5tJZmV3X6zpkN7Gongo3ZTEXpMktPd7bpRMiwPPQ1hPsJRx2PnX94S6Ru2obd31NETRcyFLVnPD1C",
  "key24": "358JQZLuP8WH1WruYQy8w8DX3ohDEB3zJwNtfxty3dG3CCH3nHXJ25iSvACCTC6v2uDr2YhwcwwdBdrsDBgyV8m",
  "key25": "xvUt6TztJFqF8jzHuFqft6qWhdza8L7dnjdGQPNqCSLYQq9MGynMsiiEZMK3w4c2gjdUaCQYC5BdyoCUtXSD5Yp",
  "key26": "5H3f1EUvsHszc8qbv1RCixiP67QnmMBS4WsHUHcTuwFmdY3qSKkuryK3VJsevAmW8NSBqfDPBF4k21MMXYh5YF3F",
  "key27": "3sPp1o3P4o3tfrjoc2RuzmM6Xp7pdkZzQSebRUc8o6SxVN7PKehYw636Ax5EMt7THoLW77XqAfFS1e8mNL1dNgUF",
  "key28": "4mCyYpJecr145wDsBGiPNkCK89rQ3UXHQvfKv3qnXKDjUnxebjSYvdwprHpbFMn8ysra3Y91fZ9RSZdponpaoWWm",
  "key29": "5k3QHLFkHa6CkiaMXRFtiq3BYtgEtDKpHaG2Q7Yw3EGhXhmsqy9cFaKWbSkCdFoZUhkQQCbVxmZvv5L47VmNqA8L",
  "key30": "2qBZBGuqaPy9SbwYgQYBAoF2WLTdTkpVrwjEdFwemwTqQwXMTdK6o8GC9CwS8K7n1sJs6oMwDGnUND9DaKctKGfM",
  "key31": "34wij2aUeXyaN5bX3FJW7jWwDHoqtjJuifSbw4mjZj1TSKjAa9zKuAV5UHZ4DXfRHqLTdpxfhfobD1J1pMPkUcNd",
  "key32": "2EQEJ5EcU1CNMakjZwHjkTHiqpsdS58fauTXERm8yYSGEnLGxGHhLGjAJwRaJsHk6ZtmoGaU2G5EkuLSYrRvrqPJ",
  "key33": "3uvaUYfwBZTa7SxQYp3xjgiLBDJ9fXiHLkJxCiEMc2A2BuUVeZEDEiyb4QWEcpRiHT7UjDbrGEyiexmBufxJfkym",
  "key34": "N77prg7MYWPhC3ZUNwPH4hZR44HdCiiC7LFbKbWH7zPdZxc1Tued8T1uhRYwZfDY7E8ChrKVndjHwrsK3qhoHzP",
  "key35": "63LeT2K4v6xdrqxU7Xz7VACzLp6RouHcxRXTdw4VAfmP1JeG91Qw9tKDrcfqu6KNxdfUVwdKiRZ9y4rrRLy7jEk2",
  "key36": "45xvR1Q1Mm29vMf9KugEtL4F6FnPHLHnokQNRtuLH67gp682oyfxeFscyUtqn9Xjmu49FxPvkCsNiQm82ha5PFX9",
  "key37": "1Ha3TxYXZ9VFvrbXLVPES6xFQpaLrSBvZsRXKme1trgsQt88Ubp1bcbw7fdcrvYSnRSWUVvj7oA7ncEKqZUqeJq",
  "key38": "2dM3GnRM4Yz6ccnvh92aDchfKgxffY8LCgercTtBgNxUyiJUgSMoHxZ4gWz7kTA4uhzbzRQrsm9Zq1aChKcBFbhS"
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
