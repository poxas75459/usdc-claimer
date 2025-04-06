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
    "5o4cCmeW1xzk7bGJiSgiTgFptrtcyE4vxuw22iDrybSswNxM7dTnYj6zjnUU6EhbwwwmHYk7Jqphnbncuzt8YfRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iy511w4xUxGw31Yg4Uwcg926zuTKjsi42VpW4NwiyM3EPpaF7Bh8qhNeRwW3w35MPUbYuCqq6RcmpYe2fnebzWN",
  "key1": "3jQKTM1STUbDPDoAnWrHUYg96h2pNRbjUa57HugHdSUxxghsaSL4KVDFqjuLoQ4XerAHWEEuQ9N9mpyU2e1CjnCJ",
  "key2": "4aPmN43ZrobTt2sjuaPyaJHboKtf7bPArUkTmQJPuphbgday1NDH3PvgwpPngfHYECofK5MaeKcU5vHQWgu7mGwe",
  "key3": "9rxEBsNjJGGq7JQRTJ2b6ofDsnQSuTXnMpPKoeJwvR5DwBW6cTqzjVBHaDgSjwDvXcomohtHxSox2rMZvgT2Lnh",
  "key4": "siuk6cNG9A4aKUW48bToZob4YoQ7h92Mpw7Gz9xGAttzD6mXUzERW77iwy84eSrfhj6yJLzpqu5VPJXHtqUPJzh",
  "key5": "3Ja36VJHMiaMtjtSgknMLgAYy9KRVxqcGnUuqXiqH3Widcmj67xZ3QNi7T2sCvMztHdmH9UBsgcUSqUZno9iVnNi",
  "key6": "2nD7H7STyZ9ZWpXJvRBFKfwhQBgjH8kav4jvhGZso9nYzjoiyqmn2rAg1T2j6ZxX3UrYmBEkdqD3MfDzSWSgawm4",
  "key7": "Dp9LyLZMJGwSmLyXNwLjKjhzP51GhKmeVMQE588CHPoDJMfWepXs6FpCeXHgMRfgSkcdaV1365CKDHFNpL427Ms",
  "key8": "Q9bvQwSRYDeMcS645wSskSDomyuwZURnG85yHa2YWDS2Gp1xUtGou1atcbxSzhac1U3y3jZfUBnLwVwcKMR5LpW",
  "key9": "2Y4tcJfUm2en82pKeJnjmAA5M6ZB6tMX65GhG53Si8Y9AMJw6dXu9Em2TpoqbwJhACiRW1Mo6Vf8tZ2z9Wbn2tB6",
  "key10": "2bq41H768chiRdbUZRiAeJjXFC7RwaHjMTugupbBEWBt5gR8LbynXEMAysHkhojyMLjENsHFyubiQZbJkWPsNKvL",
  "key11": "xPPwc5kcux19c7ivm3LhKgoLqE2UKMtSQBHbmtWehXQKqFqTXL4cwcXCd34sxe26tpQEATvu1s3s9ezwddQ2BKM",
  "key12": "4NwuUZbF6L8vw5Bj9h7HH3DnD7Ps6c1G78dhX9pWUEh1UAkh1Mgi32aXnndLYZNDMbkABTLMLHE4X61dAX9mGjsA",
  "key13": "3yhdj5aEfA5SXVXN4ZyLAmoWoSN1hNm7WVPkTXUcqLmErh9cbTcmDBffVkYZzRf3Zwi9U71bjtJsscR7bRmyNZc3",
  "key14": "3ZfpFvTiVxBwQzyRwuVbwKAZrUxsLBMcJHAAvVSFBttuwiEHfqbW9QsXugRtTpx9rW2MzHad7bnbWJEoQPa9ZBXL",
  "key15": "5wNdb58fSmWbM9MApNe89SK5wSzYH1K3zLfdJ3FV8NSeHJdkgNFuDDQwH5e5EpWo3SeWnLYCVQSsTLCqH7tWRSky",
  "key16": "21WvAB2bxk4w7adJrdAdNd3uhpTGXsBc2CCJBAj8SxwZygnnzZGtyYBKn6m4KUk8Ume4XG26Hz3Qh1w62XinFfet",
  "key17": "4b8wBJxi3zvEri3Wo4WQaMGmUm6HdGLWmaSM5oEsy1exDNPe1ZKgbsN1mzP7ypMpZE1s1A6JWbYorQzuBY71PUck",
  "key18": "4bYVx6U8evztxt3dfEcKkRp5WHwDARVbYmF5L51Kvp6tEnmoAPMyYhTPyFUsPwoQKcnUnGma7jt7a7BExWt9gsHV",
  "key19": "HfvUD3HkEd5pk8ZiGXze6siKR6aHLymVq83Y37wcCymmVntTN6ieAx65iTZLw6zfTZZThtzd9XPTjVV2mjsbrST",
  "key20": "4mGswGDEyYR52QK3muwB2tMWYLh2kptRh5qZVQfmvZAs9C5e7CLTLyzA7XKdDrGYLAwgVVo4iYEvD8veaHvnpbx7",
  "key21": "6127nfgKumPMZ5N8Ypg3qschFiJ3Fnrz3y1mCcY72YYJ7EyCdFWkxx1RWBNmZHo2jwRBsQhxfLJPkzBm6ftJ272v",
  "key22": "4d9swah2nsTBcfGHi21NAwcFSgMTMBPa21go4tyRWkBckUnjFPgvmr2k7UCDG4HzXDiT3c49Ec9irCJwCSytnrJJ",
  "key23": "4uMLW8d8KP85UyqNy5BvF1YQ8ak3xtmuwF44uzFUFShKkNe1685UnSR6mcinq3DjgcLcB733ru16Uq9w5BwKXBtB",
  "key24": "3HHMSpfHbWULW24rUa3MmAJRiEg4vUhFcvmXBRw4YgEiEMtA8SnKrwmSCfc3oJVWbPehELuCmoiJt21yqt2FiHU5",
  "key25": "3iE3Z9VVFrjNLAMNfRMnZun5qScrxxjFzLzr6q4ZydR2T4ESWG1iZokHiP5DTBzHmPfRGWmM5icMqErM2eHSPJiL",
  "key26": "osGAceV4HdzRxovAg27mDyFaG3oJkNyym5XGQRFFEUYYviMroJ5PAzPwBDwuuk7DZq7YeDyQ2tLNH2kXJmz2W7N",
  "key27": "2vtdTeLx2SECQkfjt6tc9v4cop7sh7noyn942Njgy5ee6feuNeVTQh7n8UtjwLPc6MACL1Bt6Qb7Ft1AiwdUJP58",
  "key28": "hKDzqrnTCTP2fscXbyUPL36FGRi1WmEpo2kcXfC4fAdrMRPASJFQ66xWkmD36igNY9N7qqdmSA7JdfRi7eZH2Ja",
  "key29": "3cj9AfJdHdu2tm6VEzT6dFyNaKGek5u5UAN8Q3Cbbh53vhcAid67QR8KWyGwzkb3Xs1tPePphDgUNje5XtC7ohCk",
  "key30": "2nB6D2L2cK3cqyxPU2x6yeLyKokj6CY119AqNX5iUVtwnFrdBNm5v1Ub3DGq7R7s5ovo2oN4VJUywTEReSSFGtfw",
  "key31": "2HCjJXVaR7tX6c9Qfk6SqV4zkqTRDLnkWUCLRzUCtBFTbd48faJDs15P2uGppUEc74HP81cNTUNukJLBsbt3w5Zw",
  "key32": "3v2rPDHa1NVEL14x6aiK9VAoc9Sertm8TNL6jMEqVP4qUYb8idFkN22Di7pf9kGqnMFrr2GiQTyxwbcUfZBDiK42",
  "key33": "21KDezaTKBsi15sPiN4X82GNKZEg591XvHZcx5GWyCvy18CFYSf4Gfio2NCvAPbq9upumJrwF5ph7i64GCGYDbMX"
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
