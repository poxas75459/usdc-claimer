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
    "28eApMZeKdxFjpyX2uP7iFzs8mKCwyvZecCANkW9jEmBFymrhAAWfii6CmQixSQU6NZsHUCukYUBMqEaBBmho812"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35ExEJLiyWASB7LqHiHmdVSvtS41zVpphD5Qidu6hXBZFghpm9vNPXuT4k7yjvfaotuVm1CqXum81s1LpYf4SXpw",
  "key1": "2HTZa2nJ2yd9Zv6HB2E9PUTMpc8NPu7WsUu5zCg6iv3XFdNyU7gzMGNhqzRqLa6jKBM8TyGMuPeGUmi8ksU4rJAA",
  "key2": "4qSkrpie3o548kEoephLCbHBMj8dbE4gzcGo8ee9fgTT4xMHhHtLs8NgAoQzK5312aMei8UvZgyFHUwspKCaMwC3",
  "key3": "31t6fQeFT2ibfo2o5vnX5Wwo8ex6rfBi4AR8sRUTcjEyUZviReXvGHKhPVPBYrmvRTKUaVB9fWgaXG5SRoLG6NcX",
  "key4": "4TsB2UuU31Df8NEVCi8WVFV4U5q3HJPCjE8usX9nbtfYZcMfCRjmx851q11JXPk6a9rhyVac9Sgxszg5Us8nDAWN",
  "key5": "2PDdoobhdMYuFXFGVr4sNHYLVi8BcpFq5KUYrXY1Ron5MZivsNTGoampSzErpaB5hEw7aYMzU9s6N3Yr7vKLj8C1",
  "key6": "63q7mpv3yDEAo8Vhp4h6DQuTViekozQ4KDngMQ797mKn7T1Q1Z3kjAHFNwcfQ4moWcumznctgWG2s3qY8PFvbTeJ",
  "key7": "5FvX7AN22AGch99Yx7XFZnmGbpL9FwmKRPSSw1RtAhAjhK9hh8zJwwsaUYy1NBDuKJ4VtGkrfYoHYtrsgsP8WcNY",
  "key8": "4VfTB3GWjPrL6MAXYq2z8g6D2mWzWeHSGSr6bP4d6EdKmH5pMXoUVCStAa2TrezyjYwmDkM33MYtMpWinr95o3qj",
  "key9": "4dM3PbVJhn6AcbKvmQMVF3TxzTt6HJaVf4weLSzEMMTt9N1kaaEGZ5JGBNsryaPx3GUj5yenTxn4JuFNeBYkqFKZ",
  "key10": "3PdsSoFKiDhFNEmkgGGbDyP1Aj4NqxCaU9QqgEv3s9cvCkMLxJp9nGwoB6QDtdrDu4h8sp2xqVMgEisUvPrT1LqB",
  "key11": "2oJDA2ogWPkZGkridHuMmECaRVDJqnjxfg4WwDUMNQmQ3yiJt1YhJdB8HvgndWgqjG41XHji28fuMTmNaKKYMco6",
  "key12": "2o76EheophcgLXwKMDpXdFLGd3R9rm2RGFsdSDhB848UZ44sFHXykTF41J4HY3nykjGvWoBX5uwcq2XQpoJkfi6y",
  "key13": "2294HrXGmCXz64x6zdM54cUV52AqeCGo58V239J2cou2DwNnnKf3YUbxxtxYF4LEeTnGBTyi6TFy4HnUKZbEXwSa",
  "key14": "217AqMQc2RLGqsQZX9nRjehENQiFFbjFWVHdjKVohNwq5wAFX44Y61H9kJ6ERvCkkPLnZb5jeS8KWWHVvXxmBqxu",
  "key15": "47jd1Cmi1QiBj7afTVxZtjMdbv1CAFtN9GoHu4g7ceedRN4S7oFf2vBoS89pZtDMKfDsnfmLZP242VZofxZXhN1K",
  "key16": "5qBJokdACg2JXmmjT9uJDqdRcCwHiFBatjgtgyYoieZy5PKuZmtQCXADYbAwgZ97s8dtdnYegji9uE4xDFpspUi1",
  "key17": "5e9Eg5zbFKqHe1msud2VuGZSh62XM1S4k8LPdACxKBpgs47LL5t5raaxpzNNAfywF3sAPMmp9FZ2J7p8uhZ5YMYu",
  "key18": "qXascYLSt3pqvFec8Ttm92p27ukKP3fH7aWKKKeJCF3JhcDPJjYf1iHLZQCr46vBdUkAiFo6WfZhFX4smYkcLEk",
  "key19": "JNcuEaHvoJaEULQ23hSF6iBC455MpnTmz1ZB3GDK4ZrFyiNhhckx31WxjkQACAcDtkVVUeaycewkWShNTR29XDd",
  "key20": "5dxBopoAuT3NDnAWoWQyDdeKDxDw3ugcDi7Nq7MR48aEUcuZ2qtKqiuHcWcWV9RJ3yhxfyzud7Ya5rzZAykJhHNE",
  "key21": "47GWQfz4D3vNLgdvV84cyi3fhz75s39c8uZmNxXC1hWuKK5Q6sYfCPgQ9ne9QE9gfMUNBAaCpW3FNEhRKLSLPk2v",
  "key22": "2Sdy2iUK5vDug9KDzyRoPaQjC1ofu9ys72fuSdyHFW4c2W9x68J44uBL7KW9mioRppn9ED3rv8jS1HhNwMYqtrva",
  "key23": "2MhpQZK4J8F5B3z6GzDzG1XTRA2bHyKS3ofhX5mYC1MHk9oRF7xEQg2wQQrpZhBV1yGcAm41G4GJ1e33j2DweP6z",
  "key24": "4t7k52UeSmUU7o7KVU3dW5BLqhKroHBQR1vtovT4rsqfcCjwczKQTP3mSNcYUaZkG5RF6M3rTwasd48PGqRv5iDy",
  "key25": "5kBmvTytUiVSzwAMiWiDbHV87q79PVUjPaEV1Ax54HzaNBSke6dLGx3qb3muE9Z3evAtVubvW5x1Ptv7krNkXw9j",
  "key26": "5hfRW257JS7BqmDUNFyhh643tYZd9hyvBHZqPHtgAT1ZHWDX7xKeEDmkVUysPcDd4yFiZ4u8PA359a42WzhbzVij",
  "key27": "42RButFnFVhvu6sNEFy5U1a3BddtSEVBv6oRCi8Z281xuSxGNaFGzApNuat69ZT8v9cP8sRB7JQzPryBvinszu2w",
  "key28": "4Rm4iaGHFeJqwj9obbM8fo19v3mz1hqY15HPvd8PW1ePszhbsia6MwUt23UB38m896wU7Lgw2SRtWq43EjNNvo2N",
  "key29": "H8XX79GYxVme95NuktnPQQGnSrTkZJhbb9ut47TVkHYCuxKC6hwihpsBUQUZF1oqKTjcPqjNp47rfFkMWd6itKd",
  "key30": "abFiJnt8wCzJ2Vq547KRGTGvUsUX5HNMv8X6VjBHc91LML575NBvWGvp4NTYNT1vwZk6zPawS7KiNGrn7KNevH9"
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
