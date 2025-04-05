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
    "2yFNAvrGkfd4KMjNnNirCvjs8swH94CGv99FpyfJABsQPSDv6gtiABxoBdvqoidcS5xhm92GEoRyrdgGNtkiHEQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53ViW1LMcfH3grqEw5WRBWicxQVBM94cckdbA1Twmwx2n7nE9TgHg1Qu1QtvoAEXJxwMwzENMYWjVpJu8CKtNYXD",
  "key1": "4VhEbv9ZhmiDi7y9SpDt2upyTrgW8JjvSGmjJpD62X4MVbrPj92hjJ5VAvQHXkrnT5x9D2WvHATsVHwCFmaSQdma",
  "key2": "3sTLnVEHwdz3USHdtfg443N3FejNLaEUUzksHpVgrewkbCsrYhWtcX1XWTMS8mQ9egthXRVb7Pn614qGagaAGWBz",
  "key3": "37bZ8Xj4AeDEsto1TB7wb1rQaoK667Xg41SnzNm5hvAA2CsRgjFfD5r32e26Jttj6txhPadKGW3kz3qujFMMiGGo",
  "key4": "Vtt3xpSACe2E6fscWNmodWomUHqcj9kxTNj6PXZHtsbYvq1LsYKjsQkSknEHp9S4JYLo8t5Y7vcPe8ziQEarENU",
  "key5": "4kWmnpZuNFcdvbW3Dg3zzucT5aJcdF8rkhdQCWXjUHRj7LXw7Tg7m134emkHEdujf6kt7o1MfgLwHcmqyj9f6Tk1",
  "key6": "3SpVsTHa9TDj5MzJZiuqCLZx9DmR6JsBqsLrLyGwbLvGTTvcfFG4XBSdp3BcmKD6hYNgNNdmXG22q3Y6jk9p79XE",
  "key7": "cJYkLKgd3cXuAWxepc6NXzqx3rzwedF6a7oPmAWruy8EGpULW5uhsL9PTBAj2tUPzhbmYpDcFCEZrPjVE99MVdf",
  "key8": "2Up6pRpTY9H6xDtU7nkW3j9uB9pmgueeHR3anW1pQCKExN5Kn2z5xtpNBAWvcQ1Zt4DigaoZsArxzyeZaH2ESsNS",
  "key9": "3iLRSxfdPkcgvTeTWtaJfy8KNKR7mD3UP5zLtDVbxECMiQSiq92LnPbUg6eq1U3ChbV89SPYEs91BJDSFf9PqV9u",
  "key10": "5unghZrT7cuhwc76SMZM48eL2uXyyYMjec94ghQ7Q7bvT62qEtAgLWSS4thDGBfHwXu5c3aSWNMe4HxCTT9R9tSQ",
  "key11": "3Lr5Z3SKm34owuKTpFBbecopmg5yhgujJrm5BCmxcWdvnxCsgqWh7soY3zTkuMJLUbZ9b6Z8ooqgxT7VEDBnJCga",
  "key12": "3ksvtUc5mXbF42QejyCtJ4U2BaH3k121dEeWBtNU5MvfvUy2WfPRunYfWkdHy86tP7jDZbXAxGvvWVmJkewAGSKi",
  "key13": "U5dKMEd22mT5HeZw1UKGuJms1zR22qFRjU74N8xrLyFdmuVnFyUMv7Kg2nrg6892j1AQE8LNEU26t8P4KALGYKQ",
  "key14": "4mxAmvR7N8Yj5Zjavp2VQFQDLD8suQYWEEzzVnEUuUXofjwRuQbTiebQ4M6J5kt3Rvnid3e6SrpYfNparjgbf9Sr",
  "key15": "2jqQ1WEwUWBicR9R8UxDoqnEqnvHPjQ2YVR5YN2hsNnPFiyTwFDkTMgDWe1aXfabwq1o45kETrGoLHTTtTsKNenR",
  "key16": "445wryYAYMc3SgJXAqWkHgUFvZPmbQQ8euCV4z53MLfAfwJSswbrMAhaAtrt6G2j2dZbok6JXcC7c4K15B8NrsfW",
  "key17": "4z1EA93JXvXEdcD4L3fwoLYehGkgbGqXbj5VteznCH56Vok4tWeirjGzehtFTyKrXbug4WCuZ4KeMbYwtzPw7ASw",
  "key18": "4pNu3eP8X5cEU84Nu1GVLCMePQqRmgkyo46BqHWkHHf22SXbJhwi1XTFHshK7TMgKZ5B418CpX2GY5ZBEW9JsKEZ",
  "key19": "5UwiXcoSrCN8EjD2PeFRdofkvTC2MWmrSs8WUU4bsvBU2tE8bQ1hXn9rtR5bzGap6DSznasmdfWFnYbSHTK2hfgP",
  "key20": "43eGqKuCN2GUzPnUuaP37QpHeiuJbPbu5CiSGfDwrCMzsF9Ydnvkq5Z4gxG6jDtsx5WJypZQotwmoUyiCEPpwQCG",
  "key21": "4me1W2S7TTdd58TRkThXHiSjzu7poCji31pGWdGc8tVq7PijwgvW48kVeSmPMGYiQDVszG9wJrpcSYyTBho2Xukr",
  "key22": "3DQrHWLk79sA7qjbGKfTKpFPGja86LCPMcaTzaRX5HzJD63eabus8UkS1QLKpemUCeNzZZbACPEHnF98y3QD8SHr",
  "key23": "5iqDLHveBCq3iuc5ty159pFRcoaqfufaD7bv1SxbJKArMmFRWKdzdrPxL3WvVjhaTcRepeE6YE6rNHoeJqxF5npe",
  "key24": "26n89KUL2ePbNZ7iN74MGSrmHaQB7fG4htSuEo1Fm5w1mknCzRKTp5oZoHySfneDCVdNRLYLDxxiitXmpBuVccmR",
  "key25": "3HNJaqSLzo6R8C8jxfXzHadRfCwpsBgRYTpL6guzZKb9bghLJPMxZBWyFzuqUvV6ZwqcMxftUcDKrNYApqbkk8xx",
  "key26": "ByU7BF7m1MqY4t34DV8x1Y6GEWXv9Pbqn5PLXXarNUamwpgfuNNAFGvQwSsp9gGQqQhQy2zPfZCNKufRcH6V9Xi",
  "key27": "2kPcUHYvvgsycYz3bvaMMRWqnEuUCYhmg1wru119BkxTdVairs3zWyFzCNnmSG17mMxYgE9PtXPLAsTtszFU24Qk",
  "key28": "5GANK3EWQBp2J4ePebkoTM8CghWVVRA6wzivrnq4KG2qnzjGrBL4GiwumTXiSrhUdBkeBwHkMtwZPYj5puUbokcu"
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
