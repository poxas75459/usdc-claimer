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
    "d8u9yo1htP4WLKJ1szED3LgjXHj7EzYwEWErSZEqnZpSqGX3Uug7HzXQGvcJStxq21FTXsTp2WvbS22xxU8sUM2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WiAWAj3KoF5WpRfYWp34fWkd6FZQzGg2B4cA1VZKepCKFH7AbWT84rf871a8byUbBQu1jA6pBZBdqgJMt2Hrsj8",
  "key1": "5Z8jySUpXidLweF6dcpFY3iiQWzxv3FPEUbNfNXJoKuFQNiVJjtZ2GT2WPyz4youxhFqkPEoz8FkZMAsGHfp6Q84",
  "key2": "tjkkUBPoeSYDEw3TMBjnkpzaMu7gZvBNSWrFDLVREpsA4AjBSGmX2DyiDgtX5LEkb5qX6pUpjWnzLqUpM2zyQZv",
  "key3": "53bcbeCnMi7jm8zTo9EghMVfyfHAo56ExZttgugSZebWKS5pE5VJVHK8vYpM3CsG87JSwfeAaPMo8E1t8BJEfeJe",
  "key4": "4687jLGQ2tXD6Ew3b8gGpVgHRnPhLvCd9AGaKysVBSSXH4wRdBP9skVaAFbsp6Yn6ZupjDRFurzZU7e5LSTndd68",
  "key5": "63oQ2FvMwq2xVLshNGQZSZ94XQqCAPMmDPhdkDm24jaVuDKY5NE5acERLKEJsLeoXQmhb95fd3eYKMqnnhzHr1fN",
  "key6": "2fBFJfi6hhTeitphkihFgYxo8ornUJDagqhaeAfNnMk6C6SrvVzAhysGqwV9zPAYUdWDJN78jijpJHQkCPMhqRFx",
  "key7": "pqVGXGj2h3CbPZqSKqbScE4V16haWMpxGBPVKy4X6p73JjDvMdyF5vU9MzXZBBd9Pm3wecGUNAXGDWhTTvMvTU2",
  "key8": "5gpfrmZqcHVLxYk8qAPTrDERUd37MCVo2GHdjqX3uR7nQuSXuUNegDK2QZfUcNwsDa8QsYyVeXaLNPoHdkBpB6C6",
  "key9": "3kAb3ZdviaJbt8ZifekuMWvViJ8vWUXf5aR6LVKuxwSWPW9GWGd8xdcCBtw6yZLGMcvANDJUp27HFCujFncQux9k",
  "key10": "3bYh4HPkVUsCfNHVorb9goHJAVN8TGPMAxNLc9s8waGSZDgGwJmUfQiY3p1CwMXNqEWKMCKXBL1aNGMMygmXByQs",
  "key11": "2Tbm3itVhkDuz76TmMcYZ5PsKjstxda6skhUq2xMUuHeCgGpcam7ys5HJ6Ydv4J1f2uDnZNNBb8EWiwfVCLyp8FV",
  "key12": "iiFYiP86Bg6h3V9ZRbbLC45dbZNqTZKDUN1ndoEzbh7qN6V9hiL5XshgZjMBfi8izhixmwvivbxnEHfSz72ovRo",
  "key13": "64tDs5hs7WQf3EvSkSHhgCC6igjbExRuePDotLqG7Bt12ZvWZD7UC4FWXGyQmPaX94hcDZJPDLmG1gTDpBhFvpDa",
  "key14": "3vZQm3czR4xr68Ksse8W4vNjdjRtqizWNM9GpLSmjAWaoPvf53w41rTCP3HEmY69fuhaG7o8riFNLopNA5JA5Y3d",
  "key15": "dgixtn2yuyfnvEysGPgrm6gqHhEnCuHXfFvmuqtfdsog7ELeGjwixaRa2QBKDsRFVx26qCVUtmm8z5Mzre2CZoG",
  "key16": "3KNN3zjWrq4RH3hA5Sd1vQrX5zaVhgfUqqtXHByCCEDZXdWcr6dm9cTGwdbxewHDzq4xUQRK92MpV5Bc7JNUEpcJ",
  "key17": "5rBeV58Go6wSRy8MBhRwbS8zoaT5vGHTyvKzsTTuPtt3CQTFTbYtqdEYG8xweutrvcvkn3bt4HxYKjDNrQuhtqid",
  "key18": "2ddToTLaWyCt4GJzVoLLLvDwNjGHiLJReXzh2wAqZFkrvyipGhX7jWozAJyXTv9s3nZzE5KkF7knP8jYaTGih2gX",
  "key19": "2hUGKto3ePNtbDahJ22goZbZX8urCktTixmAR2xypVEoYoYCr8bv8NiTZ6yJYezujs3J2aEPRakXBewcYYQ3vdAq",
  "key20": "4PgsddGNCAuKFDxgVTQMHgAzKS8mtxbQksxpJZqNtLsbA2VC6YHrz8RKxdYz49rcwUNd4UyykgrNqDArFphAjexT",
  "key21": "h3mkUiQyPEaVPZg8QuUodowqTCqRRrSJFDVgnCG7SNMD1nR6z1AaZA83sSdhXGKa59BB94FKrcsHBjNc7jt33CX",
  "key22": "ZvhpxGGBnE5NUcpBekmxzpQe6F1aErNS78peXhqXdGRv6xQkzqcRGERjDUZW7mQihk8QwuyWXbp4ZAZJNEuCATs",
  "key23": "W3wmFKwaUGch2tVDasF5uKN8QZDXYQRkEFiyyjrVLqw6NwCjnmhVZcGjZN8RFPQuEV3LeLT8R6mzWheQotU7iCd",
  "key24": "5taddv1mk4mFL3LRQQRQ9HP8ZU6PKoqeN4QABRKp9MJkdxJWM1Xs8yDnafbG1psk8u4b3PRQqZzaAYNYfjb9ZHKC",
  "key25": "J6dayfCZEgJRnmGmCiTM94d9qRjDi4beLtCX6tBZFgsoH9mHDXeXsTFa1pWRGde1NwLZveSc7AJ8iN98Y2tewLw",
  "key26": "5at6pMzGEynTrAh9hkFHBx8Pg4bBpTanWBPXph8gT2UyJfPui1htmCgjfLMPTycTLEVtFqUa7LpXJxJpgSTRmRcp",
  "key27": "GYaRXeiu71wRnQj8ccG8NM5PwZEFTdr5ghEM1m1MutDM2VXmTG4xBAPDv83Z56xvxRGLRvn9MMA8NNSU7wWkDR4",
  "key28": "3aBKcjKzVSXyP3kGmELsLEcPHdhyxThQRWUrHFLY9cBDeYqXhXUMmBTYwimRZ7R2x6VBo5C69x4htoh7JHoX6FHj",
  "key29": "2gPkU85SqYxBH67BFzLPAeC1gAfdJb1aQsty6ivhFF3KhdEMhsy4tBZyqJnSFq6aPKa9Cctw7fQVeRTS2xspEVrC",
  "key30": "4E1H2mAHJsxuhoWN9pWTxcFU6Ra3mafH9AX1ADnLPwDYLkHTZ2D29F4i9iXhPwBRoULyy3PxBn8fXbbAGgPL6Vmb",
  "key31": "2FyXKbca5vcaK9n1auSYrrkXQQ2Lpag3atNEYxssanwSk5Mqmnw6Yd5D6zeG2f8atpBEC8yAB8fGDizUWjjaW9kZ",
  "key32": "4DsYjzEHTAH5dW2D6b7sSWyE2UZXqGrKReatgoB67f8MwjTuKhQnowLsdQ9EdiKuy6wfMhNj9uUjUrsorsCnQpTp",
  "key33": "nHR9C1mQfx2vhBkMCrqDDiPfEjeoxHuoRkbuwJTu5fhnHJjzFEqsfYaJ3689k7EphxsWzs7acR3RFAYimq6G9dt",
  "key34": "9bD28rAnS4LtoMXB2vQmq8hz61jfspKDNMpKtrvFfYa9D6HRBNBAkrFDtdReuqxvApdVp2nthBnjXrEH4EX8Z88",
  "key35": "6py5Whgj3TnMJhx2dB4RHwXc34ufoS8ozNkJ5nrbJiSN9KDuu4kZdcRDdtt6HV42R1oW3y9sxJ8pTALPSTFbkqo",
  "key36": "47MG3V8h9y9x6eEinaZnEBMkUpei9aqNmCcqHRwAGWA4Dq6d3pSRi6SHEu8JTzGaz3aMutavy9LiLq9X3Fu3vFn4",
  "key37": "3GZGWmUaYhAWbo2E6QYxNeM4jE8qSDpVUs8xqMNFRakaisAdjGEHLMup1WNKMvZEuwrCkNx7Kbc6fh1piwHBFsb7",
  "key38": "25fDWEywJgfm9V1x7SAwj63KwReHeixH1zTx5AS1C1i1qhTMctEoWJ7wevf26DzZyVCT4fGxBUon8Y6pwaTJ6gYs",
  "key39": "uQngW6TUqzi4yZPVsWkpQNXGFAZmzNix35CYZeRFd5g2YDXKcmTMFuPRkhva6hpBWobaNeWnfzbYZfi4w3yEr2j",
  "key40": "wGsjns4tukgme7pv7BsQpDrHyDdHQKyfSXyWHmRCrnnNjR8mxAKr9sz12CHc7kbCMXemJAPMiCHfrsW3FKpSXgH",
  "key41": "5iABYis5qE2SeGpT4D2TSTmmp5BbcLHdcxfhN917z8SB1RqKJjXDg6dSnhEKyg9ZET8QMDVg3v9as939zpfjfFQ5",
  "key42": "3Z2r1S4jTVvVhL7GKst4TK6cWPAAEmMNf6N2zPqujnDeXwtbYyMRfs9Nv2XAEBRFgZc179nugE41xSC9gZRuLzoM",
  "key43": "3Yr1TxLM6DaDVd77AFjwWhr9UN3LE5C9P3PRU6GqHG6irWmJV4U2aRa4kfX2i8y3GNCNKuXBtMfeK97r48YvFohg",
  "key44": "5BektbHsx7x7xwzcUZPJgae9dVSrdojAsoXVTTqbnWNi82DGg3Sh3MDTez76zb2SdBsn7aYC1HkNJBvC5vUpFin1",
  "key45": "63s6wnCMfhTUSUQQSUFGudrUXvMkXsnYuCKJSFYgHAHrPGwAJjA7aJ29NzwB4szK4W47UCQMVXvtn5k6ui7jWQk6",
  "key46": "4uiWyaM6TyduD1ABNgm6BUFJ9rcpunpah7EyBEsH43cMr7S823zSwA6SSR3S45n7ctEX9GfZ7SMRRLTwJM4fosjP",
  "key47": "2pQStWpHARq2g4YvSqdVoZqpzSon4kY92zaMvqAGKuCa2fCVaTYBCQeMMFVp9nGQ2P6ufvBUP5GiKs42eMi7CVj9",
  "key48": "3ftAUxsR9ujTBDyDnM2bjcopJvhDka9wB6GhekELqQhPJzkthLxSK1mp5Mw75ZyXFhom932c5YPkyNBwnzSzcE3e",
  "key49": "4KkmibJUAa1Q6PG8Q8QaZJF5gfyUgFM6qesv13bgqcRC1KPBMWDa2nzeu8uu7MXhRZFZCjBx2vFfBc4RTrx17Rrk"
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
