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
    "51TL2rskZC16YxvsAq5wUnAxPvUVURp7FT4ewG2UGNZ44opErmkDkvaVnxJWSJaUzs4sEm4JfND1bqppsWPRiXvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PzVNp6AsZTkskhKXZLxCJAxUo7RX21PG3GwrZ7iEWpBJkNBneuFUMW9EYGgGnqQXVikMEweuvJMcF6znDehpjES",
  "key1": "3LRDGrcKV84BnGaCeJDV9a3raYufEkuj5kGpUJ2oGREv9DnesRBhsUxwnsV2mDhmZmZ7dzrY7y9gTPKMqWTAfHLi",
  "key2": "pSCwsDihSJQ1yTQoG6MuSJygxeKDjnWRp5cQJuD5gpdo9zsDJKvdpTLw8MHFouFemuDrKzKBumUpB9wSM3UNP5M",
  "key3": "2Srd8fFz4fTQuRrH7kybp8qnUTFzsSr8diT1nifpAQB6oYZdYiGGrVcsKhsWWaWjJwXq3qM3RGjKZPmYJsX5vFZ8",
  "key4": "5qxgnxxYC9PkjoBEeAFV1YJ9FgraEKXsXRGGJVL8PoUH3q4f239MPPmWNMZN4Kqx2sfhocurfdibV5hXkaQmguvN",
  "key5": "4y3mZc7ktCB2zeZRJVUmKygRiDZH2r1KTjP3W1D6XwN7qxENTPwF4frXbCB6WBkj3EVPFvsr4Q8xdQDNejs31Ztm",
  "key6": "3FGdaAmFKbjSUN84q6WMdrAdMagvQGwhtgEmjL7Nr2por3zvHpgDbqYzwUYTJUmESFn85XiEVGxKVV6STRFoCvYJ",
  "key7": "2sCAfeoeWY6FnvqtcoajR2Q5164DinFHQgYXSH8iQVarL3T1zgwusdVX1aTAUhSmAs5SaBaiZKo85hACFde1QZ42",
  "key8": "32kbqL3413QiCC6nnxGPf41jToMtwgtmESkfGTds3w7cG223uQCNx99eb7rW9hsbjpMmzmeytJPXXaghCVo9bpER",
  "key9": "bKMq34vNQWCKXEjYr9cZzb1X6kCyH8xjp42XVtJJpHygtXqujrpVjgzp3bS3rqfLoAmP5NKTV8G7NJ7JYFAbrWJ",
  "key10": "5SPqFxjMCTBEcErg1pZ4TkcYTFF1cUSrNub1fKnKFjLcWeH2183GwNWjsvumBuyojn9N95P7nGXQhFXpKorpxZ8Y",
  "key11": "4XjgKerdRgpzqezCdfqV9gLoksUeV9XcpDjDgxKVtjuvdPduTxQkUun79xMjrLah5WPQB2v6f5uVALpAwiKyFDYr",
  "key12": "8jJFMa7mp3LdQ2rpW6XuMf6m6nNs26kz5VA423HZBrfiByEN6DRWHiW3WSzC5RRGKATQ8hVUpbG8bHcKmAByjfn",
  "key13": "55MTEGJ81ciczP9hN3dXpUwjRonAXRMhMi8Gf4KrwSX8GhE6KjVwpA3z7N6ceYX6hv2j2yrEwoF5BqzDVfiLegY9",
  "key14": "ecfgh5AZZKNDHdc2ZShmSaxxue1LCP8NwfnEXsz6DAifsmuN5WMN7Y38YWpGbak6o7NN2uXQuGbRVMfHL3XzT2H",
  "key15": "56fnGmd8KDhyX6J7mXTCci7FnKXuczYXCBAs2pUbBNeybLk1g1T5XautwojACSyciVbg9BzkLUecvHwx2aFjhfP5",
  "key16": "3DRkdiCg12oTphtscsPc9L88rsnXmPv4U2DiDaTrVN6r8c6YWzVgS8YuGtVwj7Bot32KsH6QTHmQrToFTvznA96J",
  "key17": "3Dxc4utk3eR31Bt7eHPFeK5fmrRsUkpbofFrMUBgDmY5yKu5vztcnyJ3HQV89Smq48t5WNgRuSecRybSZGx6wXDm",
  "key18": "rUBdUtuehtDHN1gNYHSMb4YCEaAkvwXhHMFciPtSkF1Bex77c1sk9BTfAzsSbfETPGwnhqKug1U19Hbe2bkEdbY",
  "key19": "5N3TBeTFoLfsoAehxap7BzqSFNf63gKtMY8yiSnYsohJbafjPCGczLGMNYLs3WPBpU59nr775GYhJaweKK8n7TAn",
  "key20": "2wU7NpZGfph4d8NtMXyYHBKquaBsuKE24JkkmTqVKXQ2VX6xE9Qv8H2AdgTiSMRriMMJWuzfnKiDXk9qdGCv3q2s",
  "key21": "4KtdoCNLqKYcaybhJarq1zcGZCXUJjBVzFwtQKNk6RVDR6MuUDP3imXe7DaP7aKozztHbbAgScrxiXRn4NMpemwq",
  "key22": "4GT4DRB7wodBbgf3BuPL8JXjc1oFJueKt53XebPhpAZCWBk2YadfznEmo2ZHMjEM7YN8Ycwq1oNdD3bafn3LSB3E",
  "key23": "xzPXhHwkvXaZpwc43KnP7cX681jSNCSTGLe7VQMcBxkPE9NcPAFh8VjeJJ7xNEj9L2PnS5FvbiuweE9i9BcsiHa",
  "key24": "WZSbDtuxZcJP3omhTbqfzwX6c1KaZYp7LTf46V2SCqaeMNa8FFXiSP4bQq6Mr8iX55DTZB37hcdm2FU72d3h9AX",
  "key25": "fFa9ehDUvzhqsicN5fSn7WAYFRCuJtnaz933z5h1y7bUR1JjXq5b7ugkAfaL6JaXQ2GGMBkAeBatufGdT3urGbC",
  "key26": "3YcHUZUhusw2iryzvbgKe4wgZigBLJJT4Z2qmfKhxUha7T82K5anv6nE25LymRqHjZ8WZy3XXYPDd1r2g1oCUQZq",
  "key27": "5zFEj3Eutd8bGxftdkmnnF3yJUz7opAh6ScMg2zYgqH43dwtGUrxzpGdRW7GeSWDG6CS6rncQ4Dw18FUD761Kdds",
  "key28": "5mNLuL4geazSEpEn3SQBKNTEbEjk3SVFcJiZUBjLmibT7TMKzL51ms37z3VurYyrzVqGHYZDJRuBBxACSM9sVi6g",
  "key29": "57MoBBpiSSYMe6cip1ngCSmZA8vXDV5YRTp3YGa7rD1WJ7Qij7sfpTYNwqwvGwqp5vSW7YafJTw2o2DRKmAVZunq",
  "key30": "3kJMLpgKsJMXj2WVVao3BhHEy46a7uqMBMZYjhELMX81m1yKKwgFGXcX4g4ScLz7dsjp1zdZ8ARMPEjygA9FXiDr",
  "key31": "44fUWUV4j76yD5NW2tRLRNcVKrTTWGj7zDQyuyhdG9TbH3YELsthHqyHNQ5LWu2CJdr9RWsoiVSwbZdRV1ZNSXu2",
  "key32": "24RbRmktHbuKJ1y88khJfxHGWtgFKVfb75d3JmGcsm6phUxWtTkYBRLkRo1dGyRof6KwSFLW2xy85Gqpne1hE1EL",
  "key33": "3pmPySDh3K3hVRmzvmgegWrDZuDQfjZNj2FcQ689RG1F7vozvbWkGpEJk3UbpP1zDfL2uKkmuasPx2yacVhmc7hB",
  "key34": "22SYe69zMgXpcnBXBjUQz4wAWG9uvjUPmek333vF3wX1jsUHWsS775gyWvwA2PPrCZPdHiaytpEyC8odyyfagnag"
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
