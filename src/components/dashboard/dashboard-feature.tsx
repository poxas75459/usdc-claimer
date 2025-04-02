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
    "5zJmUDArhGqi9hoskHpc3GsbmN1J4jhk7Xzqbj1FoiWWyyZk6cBBQ1bFuxoE28eSrUvFNe1RC15gEEVkx3d14mma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bZsKm1HkUZsz1MjEwqMhnPsM6kFGSeXpfy1AGuSwwyGhVVCy7ccURtKacATfLdth8AvwCZB2A32bUgiLcWsrwfE",
  "key1": "4ji4gpvPug1QrXrakW6vKanX3Rp7733PZweumvKR7mEpBFLNj2c62DJRucwSQoJkZ3chxRAajWkjoxCb4so5GMQQ",
  "key2": "44cdycYm5W5bagSZtrSPjnW44R7R7W8k7WMT4L3fSbGPHHKxwYiQAeJYBfWRvH5sEmzsSErkN2WKCMSNja9GyCsZ",
  "key3": "7EYJjVsnMyCwwJu7ZuTuJLbw7HYpidF9sVEffwApLAtH2MMaJZAkiNCoBetX2rjexZvDguV3Ucq98MwvKUcKq3U",
  "key4": "2yQ9FZjECCzmVndzGrdoKKX8EkCZbkeNnumvVumkf5uZ9veroLznUjHmx8ddUs2v5Q5S8MuAPPm3dJcx21kckRJv",
  "key5": "3moYddzSWyupZfeL8zohSYSYv89ssbbFYCWQnMJhw74VhFXM2JpWxvE12iDJmH4nnwjVZExpJfDLztgAVC9smFaB",
  "key6": "mFjg2ZUYnwPa9y2MnNTx91i3zbTrjJn5qi4jRb63uQBNJMkBEPudUCcpSXXUKk3QYdZzzzDbHoDb1Wcs3Fz7F8f",
  "key7": "YVNJbHSxx7sYqm7uwuxN7fPRnnBf7ywFHjEVyaXyUbeA2wZL9xYhT58MKEAYfs8RW5RUNidzF48EfoNKTccSkza",
  "key8": "3aW1udpZugdXCYNqKzFA5fBF7qTrzdonfrfbRjbVLoBpRYLMNFWdacGBHTP2aD3ZXVpxuDyKgL8cPcUYWT8CVC99",
  "key9": "5PMrTrGmmo58m9AsnGuq5jctkgsDZERsc7wz6QCuDsay2Q4e1gkoRY6R5gpCi5jkFhGJ1HPvTjcbKBVTrgiPKpcg",
  "key10": "4hG5hiAGSrW9URCHUiTC4XYBqaHn1C91Aea2j59Cd9CxvZnqwuMm4LdncaUmBAk6kc369za3XjLacZswjrUPHwjj",
  "key11": "NBSX77x4WjLdzUJzpewRR1UQKS9Sxr1zS99QoHpnHyePREWVMQBdrJEpPGCo3AcUzCDo1Pc2FvEy2ey81PLHyaX",
  "key12": "XksndiJhKCshzvgJEk7sBq9wE8sRaJaXqCPCn5TpwWLhS3vBr2AWTtGWzTYBVJKp264tVtEsAV5xGscQxS5WUEL",
  "key13": "5cDsDdk8vgWxcd5X48krKcvLzBDTMTvimt2VqkqVDeKvUqkRkyjYy77qqDrCgSnut7TK1ocPU4XkbgjXZ9dV4Xfv",
  "key14": "3pmyz6mAhXmSoxPX8v2guAJXsQMjcti1b2QD4mtBxp2Y9rKDaoQK42zu4MKWw8TssxczeuN6ysn9dP1wS595RF5x",
  "key15": "NRxdKSDm6687Qsy6sq4iXsiY2apCisL6AHbwDvwPcyoPgMAJa3CFZM2yEha8yJeVFNWsuzKMaUrwBnY9orSH1hz",
  "key16": "5uczY2ZLEAks9a44i6wNz9pLACioEkoK4szVXM4hP39inAygffAHvCiEXe14dZk4sALXVjbD7CPsxHakUFuZNrqK",
  "key17": "4QqFtnUgRxht9NS2EWUBwPAHBp3W29jijf1cyULQrsVC8zacqAQbCoXA3mD7fBb5bMij5CZQfYVrVHn5CrqLQkR",
  "key18": "4zjNYmUy47V8CmqY6B2Bmboe55LBVM2NAS89gQt8gLLkNcCoy9HPh6Tk8ZnGKhnURM3EWRSZJWaBasAS4SCQizkR",
  "key19": "2a2YgokTUyZuVrYYGZ4ih4fv3XUAZqzwWCEM5c2dB8haezVfacFbkYnjSvCDnqpAnGZjs7hBT9H67fTR7Ujz9sri",
  "key20": "31HfVXdCMKHvp69Fg1RR5948X6FTLyUypm4jQPRCYDw465fQr4xurVXBWni1knBzc3P7rsqJLp9qgnB5tcPWfm9L",
  "key21": "32hr7xr1bs6mtwnW9Tpc8eaTqRf1Z1Fy6TtaFRPhwcz8AMd8kKbNU8tr9q7eU4drjhonwZUjkmFQJXuifZ9Ngi61",
  "key22": "2SeC1bdVeAyr8NhQCJZYHV8wFA68M6yYn5HtJxdrQdJqRqNa8Mjkd46KC3Xk3DYdPVw1wSo17uUQzy2CBKMuJu7Q",
  "key23": "5qKJhvPtxBtEXSJ6iC8dvBZNcLjAtbNTRX67KR2YjuMcz71ndtqeSpwuLCGecfFtHENHs1SKqKW8bkL4yX2KbLhN",
  "key24": "3L3BF14SdvcbsG9d8x8WVKC6KwFcdBrjTy71g8zocg9t7u8Q9RidYei9hFeKsMm9qAfcpkxUKx56xARedAJ9z8Ja",
  "key25": "5Q7SpyGYNJCCRq2pXJ6E4rB5xrd5Ssxi3iUMV6WQuGoffENY8KyCMtm9K9kEsA88NMRNM7aF3aZYkx6JoSthZnnE",
  "key26": "4Eti1KRcE636KqGwzSWGLMAkBhtmLwBezKzgFbJcC7FqbGKwJKh3NSgifSEfFRS4uc95CWM3NDvbK9m31TwgXY5q",
  "key27": "2zRRpgg9Aurisv74CeBnJjp4Pw8PjyAKwMnVa8MGGXTtdXbDXWXWEug3mbSGrpGx56GEDTWf763a6BcciXRy3rya",
  "key28": "22PkDD3hhr453iwrwBSACpb89pcFjunt3V3M3u4zpJ5mJR1LmStSWtowRg6WTbzDCkNDeUCWewQccbcYCqnXXrHC",
  "key29": "2wZEEzATuzDMuDNcPmDfC5V4q9s2HAXrfPEJ5NTzSHHYfnKmvY9xg6QLnVtWZCgpfvTByd93iarAKQcuga2Fqrhd"
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
