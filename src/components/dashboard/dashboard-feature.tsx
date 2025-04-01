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
    "43efPGz3hsAes9WMUFfZ6FArrXKffnaPcmsATTfiJtVenyUAqDv2Xv6gFr612kr1qATZAKBGpJUCjCjri4ctpxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xqP1tFkEMvB8DfeSK1abJtrqMh4baDRkxUWg2RxXR678D8zsV2Nemb4aQpTEDhKiWkPXATXdrJcfLuZT4D1Wg4T",
  "key1": "3ZysM7vSjYpDNobNAHTDVKwZ92qnA8KDT7dGKD54qcGQNgn2oA41XSzbdZgKV5fYncXDn1uPLT7mRhnJ1sjihm3J",
  "key2": "5k8rcL7tBJBi3nPZGDRjKvs9scudoKNz6szigvkbahaKxChBxb5LQHsUQyKzWBU2XtMeaJkvf7uNhKdhkzC1ejh3",
  "key3": "26h4rA96owNUnacCJHhvD1XigQ2No1WmtyMmuXGcBbDXKi5yTxvAHVbykL85bb62E9fVxRvG8bc54i5JsXKBc9qD",
  "key4": "HsusZZo43XPrWYn1gJCbSFMKX2EYhdxE4DRPLpLbzEKzwRqzdVyAz8TtNdVe1sNLbAL2dU2NybZitww2DHEKDBV",
  "key5": "4cw93HnhrNS9MEVWkH4WvcjhBCUSAYPo1aov8hZsPLasFdBak2mNfvUHCo9xghtTzq3YTGAmfYS67st1UzHfvDE5",
  "key6": "3KyUnZjc1nj3REGG11q943GeZrExBxgN2KmkKjzb8FShe6tzyZHefLiqEkDZNzPP8cjAJMT6nNqEz9ZoxSdnewLu",
  "key7": "bTJNbgE6cKKqdjuv2PhdxzmGqpc3mStKbCsJazoyuufPpmbG91EnCvtZwuR6wWoZFwKQzFh9e96qCx4nng2Gaen",
  "key8": "3RWNkeYLr6YSDtNuJDGmJxobVETfdaMfiqptCRZWuFmCJ4JNvXZJJrzaDHYELLxCEUhbAGrsUjKABAui567y5vzN",
  "key9": "21txJBL4Gjz5CvN1saeuxu6sD8243txHX5TJZt6vNbRe24hHZFSifu4J1WTqDR4waCqSUGBLAivSRDTxVHSvmNDd",
  "key10": "r6zXFP7WY4hEsxDkC6V1YX3xijkdsoDCYH52MJ7LXhbZdnyf9FXLqjF2HAu3xCY4Ewag5QA7f18242cPfRXgiqw",
  "key11": "3MWjFfi1s8zMSVnxBhBpqNm32854va2coUostXmknPSj7M5EKPYtdpmT7iXXNiuEPzQKdYXjCuL8x8J7Q7etJUtW",
  "key12": "4JKxaE8empgBecVMgAZ4C5rmqFBjJUcZsBAMysEZnPwQYDpS7ucXQ7DQMtoDmapDUqFcmxSMSu8zg8K7D71rDyk2",
  "key13": "3pcRuvCira1dGdp7UuUFpYWtcemhXHKNGCo3FC2dnsDM7c2sHfZCTqYZkpEYNqyrH4WC29qsBbGB6jLqkAx6yR1D",
  "key14": "5HoDrxJAnoWdMYJ4PoVHgVqmuAVxWjhJwTH4DUuk5LxTqGohtNo7thk1qhvVJBtNeNBmc2eg7JGbg8akNuV4tqrS",
  "key15": "4bhgJYYGsPJRSg1kvZFUwYa95ToWGFcvEQ65SSJwRF17B36RTEw7E1waWAdCYV5SzqHQSN4XPED6mrdnq2M7Qf5r",
  "key16": "5XFcu162EkNKreLohfmC9mgkiNWVZFQnnUSCDFr36Xc4yJwpE7Afva8kECwg2e39k3MmCFe5LpyEKL3jHFPrWd6e",
  "key17": "3gTeu1L3mSDfFcgbtqxEyuMAoTYUaB9vnt9peYbQrYXEWc3Kfm8z8yRDCfSgGocTMHtbKcPhNF2T1Wu6aDRLHD4j",
  "key18": "5ZLwwYGbMziiLB7n5SavChskesvUFS3Dii3uUDEwaghekQ1JDDeo1aMd4pdm1KCsA5Spdoik3pYRxh5eB9zPVDBD",
  "key19": "5qRLb2SFWbm3LVN7VWe46iBU1t8NBbTXwHVpnxpoWtm9NBZ6EELsQVD7DLNESofkzRfGCKANgfn4b8gkwv8KcSkx",
  "key20": "3qjqyi34mnCNH21c7iWL5QbAHhPb39J2WYGPFSndXnWSqqYfLhdZbQPBRaxdE4m4qus8JRCAGY76eSdtWUQJsycp",
  "key21": "3dPPuhxkhd31pijF7oL1qVfqaXLPSKYHgapBMS1ac2UpERmFKRgCZATp3rAwMoEqesYdduUA6HSms3kxhkpztSom",
  "key22": "2wU6cPV2TraZkm9WoU1iUfnyJTMuTuHXBQXb63b3BHWzVttAJ1Dpnz8yrgffArHmcZiPH1VrTiyEhadiZmUBvn6S",
  "key23": "5CKByUPsPfuxVrw2BZtNGoTZp31PZaTXYevJNWDtfXndbhjrBroGMVQperk3Vkmm796iDwAuterj8kSDhC4L4MGj",
  "key24": "g6zNitYwhQDz7NAuLz4DNbneHXFf2zM1RNPvQcLfz54bi5T8K6XEfNfXzKpWY5qPcqi4XFTsiPtQzbW9YJCsZ4Y",
  "key25": "57u6wisWDNGAcHKmL6cLXxMcxQ34xqziA7QUdq2SqkTaEihCHBM2PH3FwE21xutrXuk9fMYiBLDiccUhx1xjmFxr",
  "key26": "4eT8kHeC6eqdWVajSK3sBzewYvLZf5hMhG7XwjzF7cyiUiKU6qpq4VpcNAP8aZxYn6BnqxW5Lehtd8V847VuZh9f",
  "key27": "3GB8Y2qXftQGG15vMT8ZwzamHcLBG2piUDmzupwpqK1F7fuSJgLi4YZuYTQ8d3Zov29R7hCU7UNovhMLFRTZpwyK",
  "key28": "YV5Cx1VubY9H1EV1hMa4iVgTSTSbrrxRs1VTghXUVZCmTkoNCsxd1zknnmyAdKojQA1i5XRM2kzF6gGLQqmnyjN",
  "key29": "AXJfnb4VP7ttcwRK7XmaiFGMK2jDGxFtamkQ9iHFkbxs7NbFv8KHgynxTSgcjE5DuwVFWYHuih8w5LB3K8Mibau",
  "key30": "oHg53LQ1fMr4TfQXWS3V7xRngJf4MDJ8FcKUchXHDHkx4htASVQ6N53E23ZqfUJbzbqxQ9hAy2QsTDbB7QqeYMB",
  "key31": "3wsZxjSgBcbMPzuosYKPnB8SR28BZx749cSB8jvCGQo8HuTFUomYcFs9SxmeUxLrmxH5FYEF1FMpFzR87LGMuKBk",
  "key32": "QdYHFxzhy47mPA3AiF15p8P6bEu1ASfkcpuwuvoXKZceJbX3JUmyMmapuCQtT6rKEy5pB4YWAZzxJnB2Sv14KjT",
  "key33": "hNBBGVNFzpy9CyPoA4bSCxHipWTguiLqPxsuZeZFmHHMfaMqWPKrWfWDKjrGmeggK4nuda6FssDEhScpFYup9v2",
  "key34": "M7y2e337DpfkDU6dYWpQz84NKLzFfYRjr6dNFgjCC17Zn3hZj6VCwbYzND9WwwBgYNTQAkNeBYWmKTdebgJvrSd",
  "key35": "3xTXRnwgU74NkS34CMb3mo6T4bV7yDAnhgn3RT9oJqwuotFCwiqPAU8WtWfXnNXMkyLvgvbnn6tM6iGQUgADMSgp",
  "key36": "4QAzS8UmRVmrojVztbMDPPoir6w6QapyvKjBuQQkPdANr12Wz2xkkR1oM4UfrBYiY8fF3wNnM5vXi493PyjekfeH",
  "key37": "3LrVt5W9jYqFbY1bDLcaez6h71kpzXLpLvRmo4WmALARefCkfPmwrG9GQQ34Xf2u23GYdAFSVghXNii2TPp3vT1V",
  "key38": "WfBEftHQ7QToJiZ6o2mSWH5khw2MMaeCg2qM91k4wFdYWJYWsdbGbBYmDraCMnevubmPbK5rN48a3Et7YRAy1fX",
  "key39": "34RkXDi3ANscoX1WLBsL9JEpaXFWWwSJuSZyjj9ZLdMrvR14knWtWJb2tF4vJKwhxjwukXvgbp8JqyhtVHE1XaHn",
  "key40": "4HHzRY6zUpuRay1V4tSWQvDcbZL7qNjgGzmieFaZ97S54DFwqeUY3VB9AFeJNuC82D9mXwwo6rZUd6WJNk512PzD",
  "key41": "5dbjU8ysiDijT7t5jnpZVmXDBeeudo6ZiguPmzwkpj2HZibyW4vKJph4mNW7A5k4Hs9S9GF7sNhEchvb4Hka4AYk",
  "key42": "eFgx4eTxhcnYMbGfpQHxSQmUaMxep9viod2nLpC33n9Nq3Lrtbad3h4HtoNSksS4xK62RtXqkWkenEBGLFgPTEd",
  "key43": "5Tu3LpsM6nrxxJKsU7TXTDsWjs1r1pWCkByFeARZRWx3vGjB52JzUmUvZ73idQ1gnN3QZcxrypRHeosvwr8dAAau",
  "key44": "5FaZfjt98GGzBUpmEuZgSRPyfZ1kH2uqtZPB1nWArou5C6E2iUv3R8eqdZEWPBU2YycgMZRk1n4aZbFZcXCw2JWy"
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
