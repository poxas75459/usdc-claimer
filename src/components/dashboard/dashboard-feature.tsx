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
    "4eiqTnBDxKbTouHyoFwgazy55C6akaQDntFXEPRnGapFEMzyTfvV7qFHYDd3vXJmY6rT1JtJ85oh74JvQApKCipC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jJM93CdyTPV9wDw9sWuRqTSzgwLZTQTD9L3ngTNWLxKUG3VUi4pQhZooQPUcCHtEtGEzaCXXc1FJaUhT6KJb5aQ",
  "key1": "5Q4Pzgnz7yn1x26yoN3Mt7x8MjzToteBUq5Ueocnn3MRApzFbKarjtL2JbrTPSB9DEKaiSAszTv2Q7RAhdwChK4v",
  "key2": "585edq9W8QFX4RSdym6xpRSKUbrQZCuMoxtWEghxoYgwtSnTh1bN5v65sgx41evmS1xX73nnjk68nJgjXpoPqWdV",
  "key3": "4zEgQTECHN2rJFYHJ3paf6K7kqjaU5H11ZAEbjPjt9MuXcBDEGkQrUTo3romYPEWHmSpPt4BptXYZEvP7sSBv45D",
  "key4": "63JNbhjvnDU9qFWQG9uH74TvqzS7u2S4CCLB1pd8t3fXJddc4FH7oMMrjxLSBLpp38BP8XiuDfRBFRS7Ws5aoJFB",
  "key5": "4jWSd57uh5wcARPbayztKuwPrhNUcveEpb8bNRyX2zkokLm18EGQMRgNo4ZXCrSq46fpjfNsnsmY4escyhDrJX7U",
  "key6": "4o1JJ6VTSgahSLdrRDmPat1Bdaw665Ecyze5tk3Tq5s4QyCTtQmsrSvY4PG6PsnqShT6Tzn7kAezHqj4N7cvYcPG",
  "key7": "4xo1JnmicXJd7TCvGuTEcna5UeCyrxdkL3abSP1CnzhiTksqWxgLPa9bQg8vL1KGFrmTCw18urtpjaLx8CeQSMKM",
  "key8": "9gpVi74LLBnRmPwp478aRurgFPCApKhpJzBKN5jNKF6VaucxwBQqCH3tBLMuqrFbC1ys83W4PEBjpcAUDA3cNJt",
  "key9": "399Cz9wWy5fHqSBHVmWAVz6x9G4gytu8sYPU5bKWWmvKMJUG2RN22jRvdRWy5t2dAhA1yzjUU1NqKcMXtFFCzn6Z",
  "key10": "4myEDXtiN8hXkb1a7jLvzpyLUuVLgkLN6RbZNxHLTxHGpK2d4QJNkoonNzNuLFVWDyUWJHXN1PUVThiF1M6jgsGV",
  "key11": "HiLRRGMVvWvqWhspNcmF7TU859dZtt3FwtboyZiYdHy2Za5Y5asQe1b1PV2VyiGWiEAuc4NysAzLQLkYqhF36KV",
  "key12": "DsjwSv9TDoNUQETopX523DnSaqBhrgDoGuHcCqh3u7KG33V2xXYYwNYvxmhA2DHteQxSzN8JMtH3yRZK5yUdvsq",
  "key13": "4HNo4rHitbgMU7c6ZFGSqDWZr2DaE83W7d7vgCgWkzhPq6PswzJiuipehBQfQCNWmUhwA2HwNJcR6kFMcpKT1tH4",
  "key14": "4dHFpgnE9NRBLS1BxdfRm6PHZZ3cG5HvC9XZp5wDaBF7EouFYtqkEUku6925HP5wZ7XDi2x2fa3KkMG8KwYMLLcG",
  "key15": "2qSBMVJwBmqupuNankFBYcSYk2iHBJNbjFvpPxA3tkeniFrsDDYMVoFf3dvUgakhrnQMeeUFY99JqKUuqiUR39bu",
  "key16": "27XwPJBvYwAVgM94wJVaDuaFfi2FsbhVutMZMsDygVi6DKStxYG6w4YaAN3EcvuhNBEuN5yKrnupvtmRwJ2NjxAe",
  "key17": "52tToCvGpFqtsrStwbfEuBttEvWU3CbiQZM1KdnE3GNm2rbwkg2tfPPz3MFXEPhrbci8MiF6MejcRyyTKMBM8t2N",
  "key18": "45zXaMwbS51bdoTpAEz2K8Ea4gfJM9qdBdJ6FHS3yQ8ZxbyDmb1RqFSVx2XhcMCf83Jy91jiHunLWrUvPiFLkahp",
  "key19": "2HtLYF2QfAALESsFfqF13wSho5wyHcW9X4WQG8BBy69BgYTi54Wwc9crcamgtB4KFYEeLTQ6uSA2SXStgcQVw6rR",
  "key20": "HGUyReM6Z9b2TWbhZg78WaHGzaDSiQYMX1Y3FPDCW5vEXNPzQDdVL3cdGZVzGSupuu1K3XCtuicDEkXwctzHbZg",
  "key21": "59taYHNPWDqALRrAaTQR4332wdd1CTMTz8CMJi6nzeABkTtfHwhNDgDy76tNsqxyaJqzvb6KUBDZAgyuvQfNTZ7H",
  "key22": "5qcwKJkmDJ6fadXUcLkoA9KZn1ee2chgPzG1xurT2edcvdjTxSKFsuCeKoFvYLW2E4EZVGXLdGrD4C7ZS13BtjAW",
  "key23": "4zqu2A62Nh6Hp9PgXa4L3Ra6u8MziFXfxEytbNCaD4nus8H9HebB2uxv6Mzc8eBSDpuJKRKkR7Nad2y7zkYwGg3p",
  "key24": "4CGPF5S6Vtc2XGKHrsxteKzsyNjNES5PiWmYRLCqEtNmbE1gcxghfABtaCuSVsAJxgv6rvTffRAdZbJcJ4UBpH6Z",
  "key25": "2gNHdV4gMG5v8k7zEkuLBBRXTAXpD53dhKi7d7whsCyQGzxqEWu9PDMD1qU6ABGMyEd6djNJKSfAAZAAUtA36HQU",
  "key26": "XRCPwyKpuKQcZt4oTGacMU8jfmhgiq3J4PMCtNucXGr6QrhiHZx4oeU388PRtH3TEMHSQMvdVqLCYmLArT9xwQm",
  "key27": "yCsj3zDB5KqZcQiXTQpEeGkmdcysfHsztWSNqAjJxjZ2QzDZ3Ag3dPxVgJNw6cB8xKmE4KBSdCcLx3PjUfyADpV",
  "key28": "5n5H3XaSQh3Q3Dj4ht7pttKh6DW3dyU4aMgXB7PmHq8EhzW5UYA7CGGkyFZeRRS8szb77UYuDCPb76YcSJKH5i4D",
  "key29": "3P3s4gVx2QQJG9QRVEmakDiG7o1cEYphfXd2TvwR8eryr4Ah8J8fUJbX5b2WL3rVT9sb2LVT2C98AaPFsBGpH4MW",
  "key30": "bHbjea99gKT7J2BM6deSL5ryA2UcTX6kXDWqpuziPpU1z1jbWRuVurYsUqR4EH3yj2mD5srhNh9tzzTqL7ixmrw",
  "key31": "4MZBNm7TAgQkGw1uVDDnzBk6f1waugFsQfhbYqMgsMBbLyWyRU518rihPLCh3xt4kuz1m14Kcty9LZyw4UVKjaST",
  "key32": "5D6ioZxQRfAqgH1M56q8tTMeqT2BAVyqq51r1tPAHhpQU6Lwh98MqvsWt5yLoUqMGFd4TyYMsXj8TKUgGiyrtYzs",
  "key33": "5PYPSDsyXXPxM2UHZg6HjEon8WQt29JAUo66ePiQRqtt5EeTZNWwRFNvLezHiAWn9Z9gpwkSsnumXfKeKhHzejXr",
  "key34": "34bXdQvaXb1MSSYwpu2ToVEQAahydwVcjmWNXreKCkc87ABu2iPVQgXQf47S2iFmcTXhKXUhpFBXoq8iVF4NW99k",
  "key35": "3wgpZGvwyL1xsvo8HyFoW7EzS6t3UEgdc78nes48WHiLdRLXf3rdNTmD629mp5fTaa3qDfnYr4e67CkFKpxtbyrV",
  "key36": "4QPGYh9hPAqW2Ai6oSpZoWDcYXVX1S4wcSgz9B3PhzQ4U9wqaXmKwN3r37sMqcozDKtkT48dxwFoJCk167SuD1t",
  "key37": "3Ms7hKUCoEkfKj7wKvnNDLt48ScxuWtMFww9PpZL3khQFCJbtASWB2vMMXg1KTn8ZGU235MHHAXjwdqfuYSFUVbm",
  "key38": "2jhsiMhF36a4jxDGRP4CpZMm49FJDEbqUtbe2eUpihvS4Z8zH55BcY66h9hVSkivuuDVfg89VJWHMbxt3z7wpuxq",
  "key39": "2BupppV7nZh8aZAUaLXbDumGDdnMNgnGHu83tT5oZnidZ6qLjfGqVszfhatwwtUbFgRckoV3uztXqfni9cGt6CmM",
  "key40": "JyUF7Xcnp4fS1CZYcgaavQrxaLtmZ9umW2XAUy1F1boA9Uk7Jg3tSWhk6SNCMQGZrgbFrmRDe9t6XZ2sManN2Vo"
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
