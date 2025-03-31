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
    "4v3MB4mpfZd2vkVqh4e2AwbJBqXXLrfW974nSbcWx1HSDVrnDPM3Ksf4cxPAXPu3AAWEKELAp9g72P3hd9J3rspG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eQUSmXWU954YNcFMd3wGo5eCbjV2Hg5je7fiR25fRT3fVqg6kfopAhzJVBQ1vUSmK7YZQciYHvBUGqh1URQjKt2",
  "key1": "55FZercJ6MTBvxmUBQaUC6WRgLfo4Uaou5nu1n61FzrMmex44rRzP1VQF6XgjE48CMcDMr2E67mCtu8Ynudh8erJ",
  "key2": "R4Fme1ECF79JuEwjkTzGLgqRrN8p8gEEWFCDnYwaiFbQinjqaAQBWLGyfbFTvNuGtme2yaDUmbLyZsoHi4c7D68",
  "key3": "4A9J56x7mM4QzT6V6B9jVnN2nwdKnt1Z8WqU6atWypnZemZpSpYSs8C7EJF85SQSKYLUBG2MhKeeMsErdTaB5BVJ",
  "key4": "5nMLYsFtRFcq9XZFWAGeRHbdHdFFU2csuUK5AnP5ZAiW33LKTEzJmnHw6CYZ5jp3wr4Fdmzow1N1ujFA7hNANVb8",
  "key5": "4qW23GdQf9GGfLAzRTPdbHo5xAonCSCTnqEQN8ZPTzfGgBx3F3xFK5zqTETecy7XuW29K9nr1T7HnqibdHUZQ6Px",
  "key6": "31p7wvVeT6UHkWFnWfjZ8n2tRNSxuqdadfVmi8wofcAUBHqu2Fq45xECGH424p5edZLMr8EmbWRUfPThKVrCpa1z",
  "key7": "5BxeeJKjwL67XSVpweRruGn938zhy3n76PiksQDwcG8peaezMJCmQh2BrpBuqm4ik7UVMHXgjYUwH9A4NHpeVfEC",
  "key8": "GsC54WRU3JRKAoKJE6QBMmJVqrUJm2MPbT487rsY3NQkLkZmBucG59GtX4yEv6jBRq2Zbmmqt16Sae9s3NKzYcL",
  "key9": "4zwWs5MFuJKFNBV2WQD8FT3a8mjB8Jd5EurUqDcLLEKfyuHskxg4dTQpyvQksEgjPDi8uUBxs15hCeF2kz42DQFc",
  "key10": "2YqcXspxwksLKtt2thAGHG7FjeNUQhNaxRzypuzZ73Nvgmyrn8GJim9TuSUsxFQ8rXma8sDxdy73uFRbjJDtUVA2",
  "key11": "66HWoD7ipMUqqVHMcL8o4f3tEk4xoK1D1znnx46QF1GP9Go9wXNs1qyq236pZv7KLTaHGr2649udCsL2EA1h2DQ",
  "key12": "4ppXqFBu6t68Es7nhb4nNHtvPqDJM5XpKKo1qMYQz5eDA8yfsQMxQbXbpqZS4HcKow5kDgKvnfqC4weonXesjw7J",
  "key13": "21usWt1LWsT2oRHnLVxSNtV3YDyruzFYrZUqa6n4LfLm1mkvtTxzbvCAhFS3NtJ1mg6aKFtXti8LMD2aDwBNsnWE",
  "key14": "3VE9WPDR9KQks5omq8Ddmo3XHXDfV5h1LfNs21gMSSS48uH6T8aeuuDk4zPa3inWotBTNRbcidUwrP6PibkLTAB4",
  "key15": "5DPkwpmDfce83oWWnuaXkGyVPuiNRrvJDJJzqBMELRDL9PLsfmzu7zrcPp7iQBmBSss1sxLrchAJdLrtJyfgnZXg",
  "key16": "78JzD1RdVvF3xG4BtmStEVH4L5DPcBGsFieKDZxit1KV5P5DsDuTBb3W94bHZqbtpJi8RozFZe7m3H5sqH9qyfj",
  "key17": "L94S5AaCSwHJfqK18eoxN5JDQyMfcf3tFm7Vft7Yy2fC86kJVrHUsXsAoTJFnUEUjFnabTGMuxeDttzZxfYFKb6",
  "key18": "3VZA3cw53E3MUNWrX6RfHvJCsdnPaT79cMFq7CnnzZUSieFLd55YoeAQq52iE8etCjDaHqX8jdwqtyKmgQvW7fen",
  "key19": "4N8th3NnNfwL8VyvDdGrC3GR87FC8YTxHoB7jCXtToWSPVYeNGgfa3iCSTcsYgRaT5Ny7wRCbY3xgwPfaaHK1rLY",
  "key20": "3Fxob73nbf4zTuLVtEV2mBMfZ45t84cdSbn9ZgNmiCcUuRM9rP2Mzq29rX4rqb2Lnp8G5venUZsYP9WbVCcefxdZ",
  "key21": "5rFPBLzKdt7L387R9AeYJCD9GXuMovnLMPVFdFWw5kU9i2Utfmhz5S23DQvXRDNJLidvoHsa7TjDSqch6o5iQAqz",
  "key22": "5Gu2UKpji86KWsCqi8jsXwCWLATvVnVURBtjNeALD2UBUsqyKZoSFxzHS9HRrxHMLN6cnmaE5jfgUBer2fCMg8Jc",
  "key23": "5PRQY7Vg8br6Piz623FaukRan57jrdu7si6pRjPaf9gJQxTSnENf1ni8s6FTsDseRuHDjaPh9UU716uNUXpFXsb3",
  "key24": "5pPbQGRRsTMC49sCYPPRENUaEqfJYiMafhk6LSRW9BbfLCNxxj3aMMjEUcoViWN5Rcr5CsgVfZARL6qZ9L9zyVzt",
  "key25": "2owWH1Uj79vycRvtVJfB6vQrPkSnGmtuPGME7PmVma2fHidy78zSvwZg9GKFTRUrv36x7rPpwtZZ84dnCzCRtV9R",
  "key26": "5eFTdxMuLND9em3LKJfKRFR4GGjRxrLFXRun1movGeEmK1RN6hPhciCj5y1WtiXX6JFsgkXnNp1WoSeWAJsf7Q6E",
  "key27": "5avXAC1E8xKWB2oAHKvVBuJ7iv8sLeGsgSuqrWgEytnsqaoAwZbtKo9cHihN7nUZrrampwkoA2PV5r5Z81q15yf",
  "key28": "3ZPfCEUB5Ro4bQqY7ba1q83rwRfNC4W6CycYfi3jDx8wHBMtekU7EYsTFUS2priJ1KfeFPbRXpMMzRb7hYU9m8e",
  "key29": "5c4jVpeXCQ5QHPKxHbdfo9JED5jMKzpweDajwjPv1veN2fmkDMuEDpddne2FmrAR2x7K1FQXqZHWv3S2BKRcWFJM",
  "key30": "63hnsPC7mPou5PwjKUcQswCK5GJMSSdL93gJLho5RsA8YuCwc245qD4DJZvkm9RiyZ2nLAQRokZLQPGst1xhXLYZ"
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
