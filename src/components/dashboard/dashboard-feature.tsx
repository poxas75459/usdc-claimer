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
    "4YB7azRpFmwzZtR12jo8jqtVrxbuZjmjJcZxsRTHXLMjWPhCLD5U7iigz3Y7miYwVUzVLLH65DZReBDKzHRsjV1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T71gtJHU9imPGNM1UTQF1kNDvJ34X2oGvz4HfvbCAvp79AvputoCgnLgobAdLv1hjbAMSSKpFusTFb9k1cr411w",
  "key1": "2Aw9d5BnzjcbU8vMTKF6ZcJoaJXMQLU3WUbztvVHAX4E8mcbQeDdmHbC7EVheLYhey2LA7mcLMrkS46QDfan5dsf",
  "key2": "CqZusCPQ5UGAbxy1jTxCiXTUm2YS2aSMG3h7tRqnpHzMpAuh5X9d9mjcbF54MBdzveEUnmC7EUgdupDD7VWA11i",
  "key3": "5H452yJdeU24osgvy5Pqrd2RMZJtYRfyM9ees3oeZGVGHWEvxYf7x4ViRFwARBbQFDJNnoAhyDvXJ5GfTVzGtsj2",
  "key4": "3Q3VKogdoqWQhQm3HT8E8bq76uKWPUcSNTkzJtYbDbpmyMdbbTZFyojNarFiuvsBFKPdkhMKF8KPrg1Qj6aVqzoz",
  "key5": "5bN7q1wLfXN27eSxoWFeve49QhfiT1JXR1gJt24xvydRbrciLCfyJhR4ZD2fYKtgvBjg6Py816SZd5M44bZHr4YR",
  "key6": "5rrdhRRMcD4QFDEAVEtG64829phsfsXFB1hfVjmphUHGSZAiTxXtT5A4SmpUWmR5Dra5QWbSSM4GR75bPBdqynTN",
  "key7": "5R34cinvNWynZkJLkp1UcnL7vhNmARaBrQDCCBPm3xka5A8NpfNmRzABSWNxmmn9uR4PeiggSMtWEi9HmvNicEyj",
  "key8": "2coRVw5csujuYo6XtSG7bXsEGqQeZNfYyjoKHCiRmfx2mkWgAeSithNJ8spa76DstsMaBN6oPvEEe5ttne6uZLGx",
  "key9": "3uoAn2a1UbmWyFwPKiDsYWYmNeQ8JDMCxnU7WjTnsZ9kz1rrD7YmudsTTehGcWLsQJgUSVNg6iPTsUVN7D4RrVVG",
  "key10": "Z8C1v8NxNtiiAYsdmasvmAxzknqozxgAS5gHJ6JDdmTHYYbW8CUk4bRZ87V1ggez3xx5CvgfUGMCKxDAFDLrmPm",
  "key11": "2pvPdEYwLSDxfU4FzspQj9R2YgKEVwy7GNSXWwCTVRTeP7QC9Mi5kVzcG3CaeASPpd23v4WRKCVYc6PnWmfdVokp",
  "key12": "26PGN5DwVcQy51sCQaAN5iYTtFnDAP4YC5FRdboF3pxgnhMesbxAjn8zTLKGPBXCQJszT31TXcbSYdxXd5oW1BiL",
  "key13": "5CSLcAN6ex8p3JqJAXTqLra2D9kdLK6BZLRW7nJtVoYJq4vuQaU5CxSKQJoKQfPuNGLe3JCS6RtJKwNf6bE1pWnQ",
  "key14": "fdksppBekqqPRrTuVQLoJNDBDqXWafiXyqRYLrDQmak6NG2qigeQjhSSKDi46FHTLf96pY9G5iHp4mq7G3Tf6AU",
  "key15": "5RcmBzrnfgXHBUSqYTx74N9puBPHedcfqfpmHddFJu6hVVJWrSTFYNPVbfPmAdRBKxg7KYB53pJgFzceqU722m1Q",
  "key16": "2SZ9wor4khKGSkUG68zXpAf9k7vi4zXktfDNJYcGKZPo7Lrzj8BQVtLywpEFyZa8o2WKc4Bw9L6TtYZBKxb19RQA",
  "key17": "2wA4hwKdi15GUTEDirzkUrPp8g6bkw6pkHwaRQ7cJohPX1Kparj2LeFWVS3EcYGPu9eSa6JSBYhbW9oEUdP5dgxu",
  "key18": "oRNcyjm7R1c8cmHonWB61ssqLAF5x3dxA4SNzgMqJ7rcX7TFGj2Y2MRJuFo5GA6mZvGpxC99B2TZA7CPtQ4yEC4",
  "key19": "2fLEiWMVHKyycK5tGdWRTh6tXLD5NJaGk39dpe99Phu9Rer4vk5qz8tPskwgKwervHkphLkCQeG13AvNRhpcnLYK",
  "key20": "CTktk1G1atAqQE2tRQkD232CVHaqzMJgAeXxu8V7hrQo3J3KPZwsFkrp7ZWBrZwawciqewqTNp5YPaFskmaPhNp",
  "key21": "3GCGyYUhkxeDqHak2C9ydKuy2dJeyZHh5AniLUdZ5hC4BV4WWfg8hF1bTp9gh8iE1Zc4NPuchriChQkJQ6V9eJby",
  "key22": "2WLUotcFayHgGtTyUbR1LBfyVWFt2q6y9TZSDMWeP6fhfvUikU9iTEvHy5Xx1myR8G4EiReuscGZW5iAokJHXntw",
  "key23": "567NpiphMBVYkeU8vAdPDVqZtnvQj5wyecsZazMzb5Vu4qBs4vFuwGTTRcAio1Dx8x9k64NxSj3EZPMXaYBjXsq6",
  "key24": "4DkQKp4iNeMa2hATwSMALZN5WVfvScCQZTRH5ny2nV3vg1cYTdjsSkJvW4QG3YK1hajHoyoHTyjbPaK8wDR6Kr18",
  "key25": "5eri2DFe8tZZMdqDeZKJZzdjxAgwXpdTqFghQBGNfpk3JqXoMJ8bhwwR2LqKBsfi8mxtPrCbtQtKF4xXfaomq44P",
  "key26": "22Jf99wSDvwRe3q3L315A8NyQHgSEdUkojuyaRrFHGhDBsGsSnfXRgDZQ9jDZpZ8w3VR57VJ1Tas5amrmRu9bUHc",
  "key27": "2jp39hHyKdmZ2fy78E6HiCPdqgf8zWw6nRzUwQVY8ZbmiqzpX2MXZKXAk3ZtZujuCGpguWn7bVXC5MKFAHM39nPG",
  "key28": "2UZwV29GRDarL8DMBxf1z3aC2XXG4LMG21w853TgeCViJCPCTQTRuQ21MoERTGLAwdR5mzLJNhEbCmURQWK2kB1X",
  "key29": "34eR3JvnN7bdkmSnmbKLqksg45CTro56qRKVb4wWw8Nx61zUxz6EGnThnEUurFoy4SQDqrZNLmWwQhHDA7CpJRuH",
  "key30": "5sTnHeUZUWaVSakQAi4TSdMCtQCZMN9bjVk7YBWsjpsJARAA9vfpszYWetd8GGEAe98mooqyiuSbbtns6yVn2Zgm",
  "key31": "5iPQs2XfdDT8f6oZ2f79WbxGCFR9SuMbd9XiTemAEP3x3AZptJ6M1rkjjmLphDwQCjtX1AUzWQkBuHQxpSyysxX5"
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
