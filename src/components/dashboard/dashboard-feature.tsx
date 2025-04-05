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
    "4bDA7FEu1oKPDA65827ettnGU2d6Xz8NHJpsrkun2CnjmYkfCk9kqWgnDgvVJ8Pu8UmrtkkKDo2V9puRrA3SxJtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46qq1e5e1fA9qPdd6F9rNFPA6mYjDpikFbbGCHJaJ6wRp4qCXkHN878WTek5oexxhEmKHUzh7u8eqxWu9CQUeKbJ",
  "key1": "3M8jaLxdDVS1268MEtPynA13drHVy7VDxEMGrCNLXR276YgH2nNwetHRGDStBapjtc8GJC94AdPVbP8pFJh2LAty",
  "key2": "5wDvpn7Rfaw5akn4UNiU2TFMqWVe3ofSMYragWQp1mu6if3SLyXY1rCT6AXpKRizkqhCtMaqBMe3stS8fGAyzZ3w",
  "key3": "5x7WFbw8PYw1R7q5zc38bXGWFHkrccGMck2QmqFzXusDtMrZMyQxUEmQCrSQ1LrGVFRDxnRits7PvtxbXcjhvSWU",
  "key4": "5Y6Bz3i3nGGQEmD6NzLnMsEzBMQChHk8qcfvHBs7wAVQnnE1cHgJMU8rFctwAD1LoDQbTAXCePgZUd39vPhfwszb",
  "key5": "4orHYwGM2yC19ThtHWhwpnqczFVsh28yLU84yBunpjoMhe9uRj6SEE6mEAHcYk71UGMcZTNi8RRVwgtcfw2F6Uvd",
  "key6": "4Rt2ZwgSGN6FdwLbRMFcKEhPmWgzjsLVkaacQVW8iK9MssiXTAbP5FJg2yeMUVkJJ6SgCxkC1U89nef3JMDVE8RM",
  "key7": "66hT1Gn3A79U4caYcfuiQGimK4RmG9d9c9cVKMbns9HmRjXxy7PSpHSN3FFTxeQFdnohSd5LttZUQMTySpt3rgUo",
  "key8": "srV9TSeYtzYSZDjP8V2832QL4EESzXvNASwTTQovkRZMXLdGi7bjRCnjwFrW8EFmmyyWrow25us5hfud2e5buC7",
  "key9": "3bQiqr7G1RC1cm43vhJos2KuxFxBrDaPgWriL4vTjDNQjtvVXH3SgyCTrGXFM7o9iPAcemSZgryJMCC43DXv8uKc",
  "key10": "72xaxpmCK37p9pJWSewk9S8EhtGArNwTrBsfas8WQW18TLeoghhPGxrKbrQZMYcJ1JN2ccvsnD9zeWoUcTiJFKB",
  "key11": "UeFCGCr4jm6SsjGBEQDX7xfRdqz7pxAaK5T5CqDupfXTdhjuTMR8kxvSNY2id11g4d1xvw36ZmfgWxL2dEFQ8Ur",
  "key12": "E89S4Y2fj4DKo76AeNSypTrscNAbs4WYHn2EK22SoHuyg3ZfVCd7od4B14FsFxmUkfMfbSoEASpxhy2cDv5R2bY",
  "key13": "3ucqQ9EJ3gi56FGde3Cfi2vwB63Wm79yTCvhHAAXy6dqg2d7mN4SEuYxFPVU1H3ufhE9ksaynjb8kr4CvvHrowNT",
  "key14": "3Wmoz6GQth45MXD1Q7zpXe6CPx56QRioGQjKCCGLcY1hWxayE42ioMPiLHQgywQuYdg6emXwryyhUMYvXVwKghZA",
  "key15": "4S1KYzwziNJeQM9EnS8ufrBJWbCEHjZiwMxwCjiQRf8ka3okSHQEHTxwM5f4Tp8yoTZAozeHCiz6d8yxsE7XqjDr",
  "key16": "5ZNLcU8GL1CWKiM2nYSgzKH4EAAYJiVsSTFsCEmyT57JdbTD6N41LNfuSkBYJqLJUAdKEKq5saUXLJcKZ6qUmMNW",
  "key17": "5yugfz2U7o5qCXRpYwC9GqXYF6RmviBCeoLL3X2i1eY4x3Hw8fcXdid7Ckkusv7uB7MViUCZiajuntrstmySGRqf",
  "key18": "s8BdXMpdqeL3j9NWtayhAoJaX6gj87RqD5th82sMYtRyvBYGgAPxmw4tNSRjHnVRspuyk3D9cAmX7tFrRjeR5km",
  "key19": "2edVyjAkjdVbC68DU5GxXgWRE1yHPAmguZUCg5MfqLHAnzPu97umgJofPnL7mPAzTygnFZxkYVaUcBzvUA2q9cdV",
  "key20": "5zaagwTD9HibGJPtzTi2doxXkhDYLDWY4ubtSTuJmwF95CLDqhGhu8pJ4TZAocBTR8bzoEE329okpgJcNKjAXDrs",
  "key21": "5Rhcn8JjUTbjjJe8DjcGPbjurr5q3VELeEMxv6NzTi5wakaqeCTVzjWQoywn5bPJ7ygCFvg73xZ2NdGk188GsjXm",
  "key22": "qmMNvsoQVQErNo4gLpmnip3dY9ek26pGdz3ZU2Mf1VV4QwWZ5D2RcemkypMZom5q7ZoVUrSB2WpW2xfnSh2dy2S",
  "key23": "3SMiw9C5F4b1DvnzPehEHNfQF3Dp1rvRNB75DuPVsXUu3mDTFTM25nmQboUo7bQKT3c2zxwPLW1rXFTruszLfikp",
  "key24": "2KebaHiQmBvkcdtb6JWe3UaR2WiDF6fMjZBXyPAd6rabCcE7WueKhntWGvQZ7hZEsY1UAmJU51s983ghUVkHVSmF",
  "key25": "4ECw9z6k4fGpZPRqXgV8PkGpAkKdgBisNXjwZ4dZd7qnXenm2XefZYHiBe3Di8ei4U6TXjSBfnnDfJ48D5keGvG1",
  "key26": "4Pz5hLm3137tn87PtGzrnhAw4uRzeApzSidYQWBGfVGMN3Ky1mVAbWWXkYCpcxtyjh1bt45v9ZpqxQaxqEKfNQYu",
  "key27": "5yDS9XHvU8kKnHcxUfpFzy8HVVxtLV1aBccyzkoUd8e3a9jhGuU5e7rN8paZG152iqBbrqYGHqXxrwunGq7847yJ",
  "key28": "3S9cZUgrNQGUBwdWmQHefvFNLQiVw3wo7SN1sijv1Zoge4jZsi5J73JoihUYxWYi8buTFVzxWq5Wprv22ehGMayG"
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
