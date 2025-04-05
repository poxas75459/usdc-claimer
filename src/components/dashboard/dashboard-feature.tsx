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
    "34wqX54u8iGxQmjXn7K2zbqPNtxgoqR13piKRhwNgXBWHJhUXZi35ABgG7cbfjVwEXg2D5R1kL8X72uQvyE5mGdd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uxih9SSXYL3vRovrikzYyjTyczkREiyzJk5X1LFrCRJge6TrwRn1xxwM6C7ALTZZAAhbx4QrFdrNChcWYJQskEf",
  "key1": "5CNejbFBi9dQMPaqav6AbWCcstVcaPnencWPXo4BJNn42uNmb3TfbLp2hr9Ts9nrbFZLc7wUjd2h9wDvpzwsY2Um",
  "key2": "3MjkUgSkdRcDdxxzr3PkbtD27BFaWrGmAN1WFReeyKstZRwcokgvRvAhWzRznMTmZVYYtRdo4Vgekj5pkuCNWcom",
  "key3": "4LA5nsuvZJzwQ1uPUUtss2EcoirQxXHCzAGsg2DR29p9SkWZ8EynpeG3fzgumr8gpPCFdFd6qnZA4MRVZJDzZSDq",
  "key4": "5vZQC8V9Qc87fpFDgd22d1QgvA19hf5DAbiLyBankhXYwppZ2SMnAxwdZaBZWdxXmjZgLzJqmaS3hF7MjbUez8mA",
  "key5": "5a5RHV4aJv3UweW69oeGum8ZXVqsKUEpMTeDarYxqjeFBG4BaerKRo1VBXs5wzJkigWG1iLLu752rbhGtFqMK69G",
  "key6": "4e9hqY6JL3NjoEaM4TWvK9wYja6GmjGQa1BkGvqYTg9fDSiNmh4qsPdD9jowPd5yonLkwiuzG42XCT2aRApBs7Bp",
  "key7": "jgBSjJYMMZ6bDnD6yQ3iBwxvmH18regrKvHoL3kZeziwZaAHCdmu11eeTBgSA5k2Z33zJhznZTMTzzKC3bHnX3B",
  "key8": "4bhp3HDsJa2QAMGxKZLZ4DFhFupuuYMfxPr11JJe6PA8J2qs6VtP47sibn7A4eBiuFDhHQBgmZQY46cWKA2vdtf1",
  "key9": "2Rg6eD1dfDy15YMJjfZmZ12Kn8nDfPELE9KrqnRVN6gYFd9RycrKrdNihceoKi6gcmMfqVKhxRzJm9aTVsCq6oJ3",
  "key10": "2TNpPU3Z9khZiNUS8y2LZZ6f4uHm9KsXoaCr3GirqRepiCW5C5RLJLg1EGdZym4qinDU6es7sbYxuykDX82twwq6",
  "key11": "EWP6Hpz45832f6ZGQF9PmDTCsVGrEyKETSKXhDuXb4Gg7C9Q5VxSjypoRS59BGU4n3UCh5gWgxcFhEBtCoZs1TW",
  "key12": "JELzak5hUsS1T3oypmQ39W6oaQ71PTD7Ed3XKLTZvEvPjyjy71rge2FLWGkb9pUVFjd9LMYxy3XzZMGdTG8nsaJ",
  "key13": "2MCP3Q3KF5bdNtwPLtthJMkSvqPYWfZHeKLAT8yGXXnNZbJ5HMqUWm9H8tA7KdR9DY36cgxrve83HhB4WSf45m7b",
  "key14": "3rpc58HoFr1g2VtLkMfCQJ35Xw4GEgcaUEp7Hxj6Y6qvkc2rQozcxzWKNyNhYMTTC3cnZCPxiHCVRShtKpe4WTfV",
  "key15": "4T5V94d3zjiHD6W1d9TCYGJhFsMxpnjhCDXE4J7YfZLAiKwGxYwqZyyG25M3ErrM6SYKjPWT8CtcBaiEYFNdt67B",
  "key16": "2Eq158xZ49m7eybGNEPKR9nXhuJJPY6EbTfL7PH1wUVVEvsuo1Mi4mb3caTYi5kjERytGkcaAcLYCdJKF46yppZ",
  "key17": "5f5xu5ZYXXsJjw2af56f91b6E5ojETjuunCTuZ4CDrA1ysZQnrrGYAWDvUJCgLQ5toigbCJmPHzL1NdtnCSYVtK4",
  "key18": "znrubHPSFE1travfHdc38W3GUtBJaUSXSmestMqaU5Fx4mH6vU7GLMpSyHc9UxTXE5mD5FAACyugL9WUb1MJceS",
  "key19": "26pX9dbMxuL6B2toZos2F7EFuaQSA4YM48neBVsASjV1dy5ydJW9j4vC2sJyqx9WbrgCAnLNF3pSG2SJSsXeeEgZ",
  "key20": "5b6AKwGCSgVCX4yG85cVujTjZJ24M2WTw5LqtgvXFBcjpdNz7sWeQguy54M7LedN76EowmS2at2MxnSNVeaWQ4Pv",
  "key21": "3XhgFVX91MYCjZjNkQqL2Q4MJuB2b9XkRLae8jAMAxj3NSjQcxdeWVqiW3Z8w8EDUkD9cZbjNLURUqzdTxEPk5Bh",
  "key22": "4ERoFLwL1aYyie9HADtS3Uzva8eK98Fs43GT34uXPDZSArwBocn2n1AQybEDh5BpobWsB6PtcRmE31E4CUBhuvQi",
  "key23": "4ngUngQ8uvgGzVTXajkJdrFc9yY9XeELGjFruUmxvxCqDKrXaEYQS4bLxuVw9Audcsk578XJhh22cBeDCmY3SWkL",
  "key24": "3XeLB9bwxD6z6yebzQa9BzjmYBgUDozGbUBj8uThQvKAMHLgxBrBW8tC1PtdbfxLsJQRq7mbah4QAJyRtuJ1ufSb",
  "key25": "3w2rQQHF9LUmBbaCDzUg2LPrRzpLQ8xhzXAHxSkL4kkegZsjcX9ApAhLsPFBnqAkJbZzmnAixdsqPFMQQrDLVtxR",
  "key26": "4qRfaGrzYLetrP1pEVpyFgfo7PWX1EtiM6bSjnjLgS3ns2kinEbPmrRTR8AyDa4r4rsAFMap137TN4MQ7YtBfut7",
  "key27": "Dpe3Q8o6MPuDXn4pCwmA1xCvnfWvSNAiN3YWtYj4mh2VoShn47r4Godcny8SS8zy44nUL7mqJkPm4iJeGHDhp3P",
  "key28": "33CGe1bepWd3bW2Ym1b97iZYocu79vHAKscAcW7Suj5VeR6S5zjjvQy7Ruxmq3oLM6beo3VUbE3dqgUFc6dqxzCF",
  "key29": "4hcwodtEc7sLgbtuVGcMhDBtNHRpQGwochGAdTYhHv2p4eUBBhwpUePwmf8KaJvMMjHdt9pjsrWVbcozULFDVygG",
  "key30": "3HBhovvSsGMqTcm6pdEKeY1NPU5avrQqe2aSUXkipx6ujsrDi6SyFWD6xA6QMbjmbiY9crzD8sBYopxYC7MwrBEr",
  "key31": "42xJE5VjHzWMou78QkuitZKyGRL84dUEfz8zTvpSFVwJMDyM5gTEinjEWGTD4ZjkyWtJq9rboQ2jsePRL6QFwSXn",
  "key32": "53ErkApqEtmkYThwUNZs4oVAGPzVrdDvipDo445kysWdVoPwQWcVGyPPbNP9BWGysQM2kmwgkZYWbAHm6ywupYXi",
  "key33": "5YFjG1bVTtw1eo4288XhsHLoNzNG79ooyrRPwqoRnTtX7DFD3MLoMge75yuC3mR3vzFsSJPTREZEhXpweq1joK2X",
  "key34": "3cjK6RsqXQEsdMVDEZuyD9HHep1d3ELsDBAMhXNRjAyrq3pufhBr538F3CMTHanC8SZBzoLNRwk6xFzvEM75Vcm7",
  "key35": "3Hq1iqsaRELGUk9rwrSeLrkFHTj7Dt2BFTLiUBck2ErYGmmpy7oHm3Crw5GPQmjx6dXbXETkKmDjFrUA9nNnrtKH",
  "key36": "5823H2WyKsiB8HtYwzQBJDFs3zbXRkxnKLaZnyMRnjwc1a148Z2Y34biyqMDVNyycKTDRe8gexpeLr5AtSKtbaH5",
  "key37": "nPhiTjcW9SAEUyBSbmddLbFEq7W8XvysfURJAv59QgLJbe7XCJdxB5LmYpQBK3YqqaHkw4yetQ1J8jt51yzTBq1",
  "key38": "4XYXL48dPHBPwRHToUVjrF14WJBzawFj88BN843JdZUu7fXcbrjhvM7SihepoztnSk7qvc3TXusVT167wcMY4ENG"
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
