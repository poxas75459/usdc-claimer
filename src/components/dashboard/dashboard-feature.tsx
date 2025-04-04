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
    "5eHxbdJVro5HdJnfzqwmtQKNnMo41cc53kXBeY9RRKwTkNCxYLvzfs7pzVWVx63eKzkwSYJY2VKszMg7wvERbAHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YvWT3TcNZva4hcZqACZFw3tf4QDfFF458m7REDHQJAfDswCsyLeWpCxi9S71X8otzzvpDQx1L9Sjr2iDa9fyYNW",
  "key1": "3ZSPAscSB4X31YuJ6geSqfhAhmest1TNo6na2Avux4YguihauB9wpjnpov21wjpZbYeyFcsK4t9Vzm1sx4RUqHbQ",
  "key2": "4rrCrmTUzFonowMW9PV2Mjr39PmJvRwp6rHfvgrgrQsTbtwxdi3gjtEkD8nj1EVHVtTnvHH5ohL8NSvtRRouoxpT",
  "key3": "5QBB92uFsYjMBzmVdYz9if9SfuNPvX6RBMzmpiFC2yD3yBzSbkLKsbbdeFnYVide9aTSwCBLd1yEXATFoZzZT3E1",
  "key4": "57oCB1SGoiUhKyNvsC8gJua6fjgmKYs45U97Ubqg8f9SfaUp5Sk35aor6YeqgJX76kT2g7PH46mXe7wVNLaKZDk8",
  "key5": "2vBrHHWHs9YSjdaJR4RdRknBdhLVjBFiKMmiT7om39vgeL2PaZqf5VJupPSfjK4vUZWLDAaJ5A3x1RFRBWDuw3CB",
  "key6": "GZs3GuNe9MQTjh6F1P3adTExXRL9uwap4JsNzxocNUqtAAXCM5cnN12QAbJXqn7DNMBAirrE87piQovQkpS43QY",
  "key7": "gQfWrr7e8YSZH5Do26DxX2MiNZGZYVZA2YkZiy1jMyLXmdPx4qq4JyKYQnv8xjugSjqwSNSGBmcCo9V9ZewANM9",
  "key8": "4uoFjiwadPDeToarxgKR8SswURv29C2Qx79wr6MGmvvLJnem53Msk51grawhWmFh145opScUAq8JEPpwmqZt1Wzx",
  "key9": "5NmZVwa8SNJa2y1x2XDDWX6mV2sF2SFGnjqrkELcb4sZ6LN6Bh4Btt9FC5TmkMvuTrHQQ6NWWnReWuJSKeR1Hov8",
  "key10": "5qL1RSUSw3Q1pDFUtBvWjC4d71Uyj2qZDfvV5ehvPiHFgS8KmADoyLk3MhcqBemyV2ysoXoXA8SdhHd7Uxchjeqc",
  "key11": "3438v7RS4cN4LTV6gA86QBmh88v4RSFWam5jzm6kGvfMJA4ZV64Fr6hpTCh4mVzQZgYhX3wnJb7NE9GA37F428nL",
  "key12": "21gUNdYTYkqvhRPLhR8tswSrvJF5X8FyCqmLGixfYdbGXBWJvhJuvPk8ZJ5pH8ukN5io4C249WBtGouUV1iGsAra",
  "key13": "2azCKJF6KM9VN7RDk888TThWJFVZSYsedz25PxqBgXEGLSZU31A9dqCjUYioH1YYtQ1QZoWooF1zr1tLphf1CtKm",
  "key14": "385PtrJNG2aNgB1b5SGPZGXxbabebJpcM3UpqiyFMx985PviUiRzZFEfzMzqKmHx91sFgNNFqjzVNjcyUq22Kenm",
  "key15": "4nT7WdDizcMyQqcfoSayVuJZ8HcUr4xNQS1aHpGVpVZM3bBNaDX9UZ1peyQhCV6WRBh6dF3GohzsT9VEjAMcYckK",
  "key16": "5CBV2A2BSPWeRCvHKcmD3st1B9eLt8j1eT7KNxGBMHE8c73MWfJHU8xXXkWQdoMEbhpeFRpBXbdLk1byVgonZf8a",
  "key17": "2Wm6dxWGE9DBGc1PPAoWfMjgXU2yvXdw21Bts3KViWbdZxshh3ioEKHtCzL2Gip7HyjkALrsUUfe5izUtxNkVpNo",
  "key18": "5dxVrVqMvZpjPCeMENeXs2zPUjSKk3bc2AVm8TNcCmokdLoKrNm9WcPNtuzTaezqfgRasbfC3WwHSUhLfUjG6qXm",
  "key19": "2ixMtuTkmK1pEv1gyBSe7UNkGCWVazUSDTN1wshgwRTJw3Bb4ZevMnHL4K1HsBSxxRWhQZJgeRWXvGJPntaTsvc3",
  "key20": "4bvgMWBpcJKib4p7NfiaFcwUo4iu6fapsQKMTY3B3xe1NzZbsCENoSGbSpy6sQmqaMoEg7Sjvg68uSBvhesQsyKr",
  "key21": "5CevTL1PKqRHauU7henN8FvUcmbfZNv5BSDyQMrhtzz7KD56eHdL5uR2T1GvwUz7uj3eqG9CsrvMPoEX2JRUS9Fo",
  "key22": "3oXTazAcwNGiXQW9VrLmM3EEJayGiMuoKXijXeYwKP9DMwsHs56gbFj14XT1f2n4p8aR1NPMDoxwdyJd5gCNs5Mp",
  "key23": "51hVALyEvkMypsxJDSgWroMiuUzfaA5MiyP2jHQe9sBXFcMTAXbkJ45AXhzM9N37F7ch528PVL4sVZD32EDhg7Ss",
  "key24": "27fQbGyEqp7pprk7yRwWufgNsmjEVnbgNxEHuewVdA85BohFCw41MtBoF9vP3QMJ8k4cxjCS2shLhHV2aJ5FeRuH"
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
