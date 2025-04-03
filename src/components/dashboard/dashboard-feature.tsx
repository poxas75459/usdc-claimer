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
    "gjm6wdjHsHxXN9woUoUyqm7YYuzhjeKbLTkoJKMirffM3fArBeqgWwNWCVJVDPDjjzfswJT6aUTgziR42b2ZZzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HcZos6cFRHZZZtvBuPgW8kWibptYq8BtzCYYJWghA5Vkr5ZarwuLV6Q8iKsQgM3TrrFN2ki83dQJMwesfCJ5VUn",
  "key1": "uvLkuY8bQhxtJJqVMguYZ7fDk4pqUzQ4kpHTp7M8FoKuAaZbBJejDUK7tHG2Up2W9CtPJJZL9rtz5MtJbxa1sAV",
  "key2": "5q9BURxK9gDQAVAGGYFAu9NTfhL838s6nvbtHatiCEoJbJSRhhB8vksLaX3BpqXa9C7vuCvsSdmDawCJXcBKnoGm",
  "key3": "4DPRi6Lkq2H5dcXr3QrjUXjZYUmoNiPZcqgCAToA7SusEhUhoByy4Kebuq3Dtw8j12fpNDxKoJLTu6XidPs3ZEMr",
  "key4": "57tTxNWVVAgXyoQbbEVxWAxMv6Lmgc1hWLAcTZmb6joZVxskuygqT5U2rwp7TBm86e3n7q4sEPFBF2CEjXRJTUEE",
  "key5": "5GxcS6UB4zUTJt23GZ97mNR488wxcKj7WJ9kR4U8DA5FHxu45FXvPnFx7FXC6mEUzCWRTe6wnvYzE2H2FqHj2mmk",
  "key6": "31CZvz2vAisGH9YaM9D8jSKkEdmcajUuzaJPXXer1SffzQoKpykZBkmVngbYKzurzXnHMHrLs6MgjhomKaAmxMz",
  "key7": "5L73M3t2HN7X2q5Gww8E4kUETrUBuz7aCmSyVefPJCBYZd3Bg2DvQ3jtSW8i4KHANfVJuApvHWqUZym9QVTQMqvi",
  "key8": "mhJQF5mUFhyRELGWA3ziE8GeyGxEQ8cwAy4WEHnHPBRtGtTX7kAjzc4ATxURBgs98G65sVnxpoSSXnJSwPzecgH",
  "key9": "3QssmGD5yCfGobuxBDnDKDAQMXEyegtxkMnb8MUtBYMEmyavBvy513W9jeNF2HtYiiResBEEaBBZo7Nnp8SNZp9L",
  "key10": "3gR4dQDex8JKo9gfrRheDByDhCsYMveGZDm2Ytzd9GwwTsyasM8XgwU6FXfDvuwUPE2dnj3VSqNbQmABNkMXro9P",
  "key11": "64exE28ra7Qw8HeTxRmr6cWofeXVo9CRGzD6jLdYn3FGFGmiFiNk8dYtV7uYkK2NgZQAWSwXJeEoapjhpQLxQgn6",
  "key12": "2SotMS33tegS79wVwbzsfMvGL6qQzVKXJiCwzLoDWBVJCg781VNj8oSB7YQB2vDR6xrz9gjoVK2cSGFGZpEjxior",
  "key13": "3bxou3872sfRKQTXugqDqNt317dPurp412BxXavpRJ86iihFnrDzYNCpXuQmieFMdSZVpbiJoug1ZzRhxujgyFaL",
  "key14": "2BiZMtaveE9n3B6AxNbj9EMbJsspzsFpAjh1ayFg3JefpKVWqCcFZJneSb4SmaTZNwrF9FrRM2P9SBz9nmZrVmDK",
  "key15": "2KvTSE1VXWbykLYrPZJbCjtko8G8dpUCSEqcw1b6SJAJtpMVmFSop61EeQfb96fjKZV371zxjHL6ccaLZMq2eGtr",
  "key16": "4sofiq5rRGpS3qQHNWm1YNkWJbezGuaSMveTA2WqTwbdiPDJgXS78GXjEkmXACwMugHnTxRBanCapdX1LZnoVdUh",
  "key17": "UgPPtCdJtwbwHgzCbHWBddhAiTCeVVU3AmKyTD5t6pPAGtk2JWw4y8wLqRPrPNJqxB6XUkL6o2bYwSd5VRNiGvr",
  "key18": "27G5U8H8h9TRz3hbVXd2xJFfpzXRTMrCfqrxxRh6YtSvpgJVCn4Jydn6Ahzi5uwCZxvvv1X38hMs23FoNN2ZXpNi",
  "key19": "4o3Cy4SLnyTNz63aUz9aUP6cKroeBbDxT49qi32mQBEqd93s892ywjEQ8bY1Kmd9hwgyJNc2m77y8QZk1Mq3tUmh",
  "key20": "3xbhws9CUpRZv3Cx3tNV5oBHfVz8iRiAJdqzfnm6sWHXGe7HiSuKg7i8qgfP8MZ5nAkAfgaHjVXDGFoDmPiRZZey",
  "key21": "4Lrh8yp67wxGqF5EUjCXkv35kLRxVoK9UjxBQHFYroJN548fWvB6wdoHuMSMmiUoF4LcovK1fSrTYkrC1ZqgnSz",
  "key22": "61QDAyDa4bHRf9UNdtZMr4cVH4LfBbGMvNBV9SQroscvwMv2asR7dmHTDQZhRqwHVw7pgLVvWganok7C7enCdsPf",
  "key23": "4XkTYkEmkCZfXGmmzgG6f9WeaQmhnJvqBs6ZKPinTCVB4He6yomaBmAgNHdju4mZSxgMS8MHi1zwUAqmpEkfiEJS",
  "key24": "2BoTbKSrZRdKJVv1B9Bn8HXPeXV14MHP4grRRCPdYtAL745BnfnHAEvHbLAgPjPdNJoQbyksoeN1wPzadPmTFVHT",
  "key25": "3YwxiMJibxX736bMRGfowBxZ7Rhor5yLR24xqVz4u96FmzEGq82Kf9YbhpC2MSNHYuhA5NeDtxa849QwLSHSPaS3",
  "key26": "3YpW2UBVz6AfQsBRWdJrCz4gcgaJPCFK2R4aio3ZT9MHN63tW8jE8EiXjd1Xta3D7UfkgbaeBpL6ozfreAmPkmkn",
  "key27": "2g6AsbezdTa9Pneqgx3J5oVVFu51mQFYyaK61aSh6KpEQbvCpPWbeE4y1uZts7UkTt7qub2LrFPH5adsFAADoiVk",
  "key28": "KE4MrCYZP6iTnky997GGTxnVhKFgm3B1Nq8q5shZV9gt4bvtMMAuDD6ENDF9GphsKcDsys8BdruQUwBi8DGdVGL",
  "key29": "4r1jZXzcF3ZiSAwVHvgoTFpn3CzsTUBD9qMTBDU2MwnAXTBYT4yyXa9DVcWyGxTgTGQRsGyyrXApVCnt6umWYWCr",
  "key30": "58BF8LAm3krjRuXATpZFe1LQ7Pp9v4zWM5wHBDy4cqVn1nKZsSFaEPQPL7KqxyqqcLmdc9nZekEhjxHxThGyAB4h"
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
