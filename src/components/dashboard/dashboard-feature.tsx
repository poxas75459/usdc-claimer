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
    "58gTNhcEHiXHkB1B9Jru56wLCB2DTq8u24RYgnVSete89kg8QvqmmFyMusZ6d83vrLeHLZxiVtWibkKMFDG7pywe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PZ328AQ3ueNyPHYcG95euJyo1o6JxiYxEGXnKmYbVwSqxQbwsjVfA47jBJyVkJvhpwKWrVBwobnbpXPoMt7JA7R",
  "key1": "3iWHvvRivKoRRfeDpuFkRRhsLDLaacfQ8TkprZnHi7ZCzzx84pz6YzvVBHyiVTLnRc6xGnxTT4bvpd2W6ZrHxiKi",
  "key2": "27ghmeyqwRKR9sxX2ijvoienkA2v3GQvPXxzKE7JioLjahreVVLn8KYz2QUfkqzaM69KiR4rX1XgdKFMi4FNGDS9",
  "key3": "CDCTcnxRqTrk3joaNekScj12CH52sLQXcTb54iLFRmSF2TkSfG5o3eLD3mrstwyRQdV7x6itZCeDHifrHUyqkXu",
  "key4": "32MKsTqTKyrLAvCn4xtRHrrUNEBefPpM7tqKJNFQgLYmGgVJrKiU5jp454mKWjPB8sBJxUU8jQbez2QdTdLGYWty",
  "key5": "85qDzi9ezWPkGiNgjgzzthPwK7jGNr4iGrEDfkpd8vJZbQtdG1nmaScA1CnDAuWgRTgbHDhhnfzF8ssYrArDLhN",
  "key6": "2EQRyUzNs71tbAy5RihoPt2aVJYFJy5EVhoWoRWHAWYXxAuYZ2jnFrCaQ2WovTM9a99ndvu5BNWdFadeN46GS3TN",
  "key7": "55ofxusgabuphQh6tWSkTgPw3u1UUyFg48Ca1YhLKg6CkwXGCqyRR3haFw8sk63GpFT3LSj4t7Qhsr6QqXaMNSfW",
  "key8": "4aLCg4orAuxhmd2E8seSJrxENxZTyfP1s1zJTaaDLFGo1onSEufarXE4ESjNKa2jsDcoJ74iQaJQiniupQqFi8RT",
  "key9": "3rydKMo6EqjYksoLDDB9ZFk7kT5FJriifJFWrZzPHqBzXy9zq2iSfL5C6oms1x8LCVngHU4iBsSjxPQfi1hJSjdn",
  "key10": "32typPCDEBuE9YtgT1tupAu8CNQf7KW4V9KYgoWhEzu6PoGqDyTm8P1ETrjM4XkQPVF8QRiD5yLQvpbexBTLKv8Z",
  "key11": "5nL8sCvZAEnqx7xWKSiupm3SG7fGZaaWFQHX3FcAER8p4pzQuj1MpUBQi8eGVKa63WLJVz4oMH7KF5kPewNwKb6j",
  "key12": "2N2ghRxcC7xGkAHmTDafYKAJsZtT3p52ZQvxMjr3tJt9cnWqD433DPPcTPti8RYvg4whskTDP8pxitLEQJrFPb8e",
  "key13": "2BbQRMfjaoJ48AqXkwDijq6Jzmaad5kGTrxWBh5LXEoWxN5gyqZokSavorgksnyYEtiQ5vBHSe2AjiYuBdW7SFBS",
  "key14": "4eVh146RJfwdfDWAVt14jxhvzjePoUPyQ7hnLTgJxWQNxrSoCCvDs2rVjuQepjiup9u6fQv1TRo8ZQUS4fCENoH4",
  "key15": "3CNAyouKwunjTsjP9ipakqUKAAgTeHzLKssVHshEPAXb1LABQUEc44LHZrptkPAjf4rijpi7MQdUw77wE9FkcNdG",
  "key16": "3ibTQgx2E3apm39dGxpQNd8jvPYVebMrbQQpgDBfDek5J2N1SxAkZk8Y73JiZDuheAfRftq72TMa7gyQx9U1ghh9",
  "key17": "Cqh63iTDArb6daFsWYMshm8ta3YPoEuBcKrbBR8nYc5vUJr1yUvFderUW3pjPyGtqeDRWbkEGzCCi5ntm33bNns",
  "key18": "2DYhJAYvPnJJmenwzSJpTcDP6uYwMNYP6N6atneHJXnkxcRXS6ccbAXJMDrdVo7maQmv12pcN62p7hJeddcR4DUr",
  "key19": "3MJ5PY8JZusKRENoRmASgtt6dF5po3eAm7LqV5AB2mCsovABoaa8i9pQnGS8RAE1gPkzo2iUKywgkQCpFy3dd8V9",
  "key20": "2iX4A2d86dYf61DQqNaRNQ75Rqmpk9V4fybGrgqs5Bbg93vd4pSKeW7rrEP4oDXs8PgN4qtRGYvm2BHVQkU73qha",
  "key21": "gnnG8ijnCPKfDJNn63T6GKFvqpGpy7VckaMdtDnSncyrBYuTMCmaM5Q41D1R8AGJhHuynUGisZ3yHQrrZjtKDdU",
  "key22": "52G8GKSP7rL6gPaqXXSzhtNGq9c9dBXuAvmBspf3fh7ZR6t5azbYyjLYzDSzbG4uEPVWt44FyW8zCh6RH7QMafaB",
  "key23": "RUS8ibEQ5614UK44L6cp9cFshEjsMB8jyGHJbUA66zj5mQAV7gPR68b9FePrDQCQk2ZqkBaMuYqDMp3Tx8CYTJC",
  "key24": "4P2juiH5Dsmq6YctjbtordzhfZcAgMSdgJnYFc2TphPd9P31zcRgsNwgVn9fG7n1SvLUFfJ9mQD2VPtrtchSjmcK",
  "key25": "mkYoLiFSSperniZ2UomUKaU8uxWpyq6TNVu1J6uu6t3ihYU1mhKY9c9RKPw7EqaCiG223Z6L4LocJg6ehd2iPe1",
  "key26": "YwtRK79iqnAFmoYYndF2GoqqLyRVa398Hw4DjYbWDhSWnJUJ2Jc4HzC3zGzmQE1MoARKhwtBLY1x2L6PCHTqbqM",
  "key27": "5H7M9gtRvgWpk6dq8o3JYMx9mU6zJA9J8CgAAJKip2mT3JZu6xk4CDr6hRTFyBvbsjXTTX8LX4CVgr4WTkJw72MP",
  "key28": "4XprkRjBwqWbtu7N7d7dz97crDckeXcZ1dorqj6CrxptJKXa2n8zM7AXPuyv7fSkSu5nYqHx3xQTLYvXC1HX2YvW",
  "key29": "637eEbypVrmDtkXYHTF9eyj77mQ5KeX29QiDin7TwDVcN31qwqQKe39XwYqV5JLExWCdsi6JeH6XBrCqwZYjMY3e",
  "key30": "4PtGx7wUcVam5VEVaxNmCv1eVRPgpFtByZd96n8xHwmhoRD5CPEkXrrMN1nwjFSJVZgVYK3FFTryBUJanhB9fjcs",
  "key31": "VgxEzrPuUhhmoAphMJFSPFHPcq6e4jEPo3pLzCkFk74UaNNCqpusPY3hAeyyimD75qAbsQiDaMsL1a1KW56mdM6",
  "key32": "39P4oS7Y7wUW6M6bKee1rJFHCbphCCffkc38ZwyTM4oAYjzyEQ7TDByCEUeiHLGYftDP816XtB4iqMNcTa3J5rY2",
  "key33": "5sfcNQrUeZoP7d3KWzdt4DUhhpNnHw4ucPB6RUAD7apr9Uj5CyRbX6kkjJi45ASZz6HcAuousTumMtgjzLB1eo6n",
  "key34": "2ueDz2me1zBiwRrZAFrugjVijjnRVobhpYLsQLYkMVcWF9WXM4wudSojMCoCEbR263WDC2TFL16ixgRLt8fdAq8b",
  "key35": "5EvVrYkuokUcfd26P4BbmB7qxmsw2WeUeE3fBnHo7oUsouchBYPtTR4pCutZ5KruLj54rv7uqDbtDuQG1Q1FzPbz",
  "key36": "5yy4w2mHuAWJMSt7zTCcjkgPi7F43G4EYUb7XFD8uzZYGK5EbpcApcXBKip3k8JvuxvMDH7qG7KYdC5tYN1AyMdZ",
  "key37": "MjN4siohfGRCkR7yWA9hhyQu4nMLXANwReroj5FzYKxqV8nXaGjP2FrxGTZ4aoM93PXtkiNhSmQHfEReZBWfjKW",
  "key38": "35MkdBbbhzxdHXqdTcRSqs2aBBWgD1BgbaQ9qxADbXTdLK6K9i6PWeu38CCnXgKDgSfzEF81wqVFiMYA9q8ePiur"
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
