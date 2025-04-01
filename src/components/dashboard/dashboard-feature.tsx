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
    "rmazxyJabtiiMDDL1fgeCkGpZKM3zNtUorE3W67cnshcz9aqEt7J3i7brGofLtCk4NjjQxNFvrKEHVWdmFxdQ65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZK7vNts7AijF7NPKpQ2dais9upP49Dm2PPqawRTT1V2CKj9FkfRznatsfvnLRqEwi4dT4KkaUAqtHrwLTxFQeeK",
  "key1": "2kg1R5c55nEhMfApLPD1EZzpWmeMzs7vgqM6Dez8j1rST6gyFruXtPQFz1k8UAfFnzuHtSk7jdLsQTx9eW5atYV4",
  "key2": "3gNrkd2goanQGJfjp6TaFeQ9q3iwn1uvcCLBNMF5ZTBXJPBi45hM27i3fMh8hGuQBmQbUwfUfBgyd5nBCyD753eN",
  "key3": "3LE1tBqk5c3hXnXZBYPFxbdmd1EUYos2J8pnqRXhDfe3hw39DYcmjLAjrfwy5w4VSeYBDQrjupyVG5Hmk1KsSq4V",
  "key4": "3EnZjWGy79k7s4ev6m8a1qywqu2wb3RCyUMbpFgQXw4Am2w42WZyFQvYh7DnrDEwesFDRfFt7QfYtoWoyjyAAX6f",
  "key5": "irDUbHbfoBCKTWyE1Z9SHB1FhEBxYSgyitd5QbmtDtU4jy2WD225YvsjwKmDYT2LH82c4gfKLqxjSDhJnNUZVyc",
  "key6": "2aSbCbdB2bGEaCoj26L2yEYpCNxgZmJMTy7ZLTXPbiVb3ruJ2zpbYLFWCMdcG473SmVcgiR8gvDXzcGmCfy4mrKR",
  "key7": "64F9P3vmfzdwUbMnfqEr5G7aN64q9RMv1yXJLXxPUbo2dbTfKioaY6ffFmUF237dRvhk2TKr8a6iYrLtTff9Fqph",
  "key8": "4CsP9vk8f7dch1WwTTnodKcs6zZEzSKgD636sESs8dXV4xpHCjmvipHbBHTq3qARDBWrXURBq7gHKpeak7BUAmv4",
  "key9": "5GqvjtD6KW75cnXXNLZNXFobUFhDahCSwdFK3gKZ312uNa1ZLyBL79dJ9cX4RNKRXDSGeTjYwjgWab7U3nZPcXW1",
  "key10": "47Yuv1Ui1o9b6W6kLdMopEPvixVXxu9fVhz5uDxQsvT4ZFMoMeCHJQQ9wc9CgJzqpG9Q2QDkWXMQUXLuYsXGGDqr",
  "key11": "2bAZKymUGnTetVyAUwCCTxJLBVCQPndzgEjVMtM6BaV1XmzW9pLuwp69mmfYrMghA12ZHxw7wgC9CL4MXDuR6BFa",
  "key12": "4Nm4vzvVsCAx6iBBctwNfksBPi8UER9fEisCwqV9RDmNcDPaS8Um4qumUr8RQFVRBa6iGq5tEMUpEs4aMNS2C2Dh",
  "key13": "5yo17TKFQkLFqYFhRHM7Rd7EDikPBjhiSrCH1vij6N9RCMzYSgCEfFouJqsuEWjg1vRksdSkt7Zh32CpEmkVjpD1",
  "key14": "4GpnmJCLWNcR7uBB5jFG2oE2pHY4nH8ExHNous5VR8SV2HW2j6aWLEvCJT1mswvDyUq5TM86A7zGZN1nLArri3pi",
  "key15": "2v5F4P1S5UiJQSz8CEry8wnt3qoai9HGApsr3c6EVaPoDJRzR6c2Q3DZdmY9Wcgs6hnAjTvXxbu2eDcmhuCc9ypB",
  "key16": "4gushS8QuNDBBEp7J26NcoQPFbXen7L9Ys8aPPTyRFKT2ZF3oD7yDFSHJZL6MBKCsMF5GjQLLgPPgAdEHJVb89ix",
  "key17": "23Xa9aeZgpdZA2nEWo6WKuKdT9sAMBZAZKfKuGZJh8DnoGCywGjG9uwvZEX32APJ5Qf89vH6pX15nd2K4Q1aSQtx",
  "key18": "oAdLQ1RwSj4Dx9A93ZLEmKR2iHZHDmhXp16xdTcrbPG1QoJ3kXYyKDVbJfEVXWjF4EK4Y6o5kpTH6mRwmxXR8xP",
  "key19": "4PwpZ1FyxXWxLDudQXot64ESFdUZnn6B16yzGBvvtqLAK2wVGULoPWmkNmBNGDLA7Dq7fd5eNoaiqp9bS1QXqR5N",
  "key20": "5BwHwG4FrLNYs1XVYvvty8uYQtg237iRG9F2jXRE8P7jwfsgzFwu31uBQz9gSqRaQk9kjzxTdp9t4HPexgV3HrVH",
  "key21": "4g9F5aoHNrEspcPRuS3GjVqX7TABFu8etBzFyussJtXFB83XefEk7FXZSJtR3qDKFazammT76d8yKDPENKgpTXny",
  "key22": "4TMFvEVM8BiTNvEVqfje37vPYxqVfvjjUdWYfrvJ7PPResszSzTyUirt6mXsVirWDG74SMtkYKkJqcJsYBzRY5MG",
  "key23": "4ca16GJdL8XJ3zuZKBPsa2yzAhb4A6X7aYeFphcXv7GQTv5RswiLRRDXjsxohSFtyJSg5iLSrRaKfDoNo6BNe49c",
  "key24": "3WQQgEFMJ5nJeA8LxcLwH1PhNk76WnaN5oYtdP2UnPYLe8PHVy8gbTrZ8mnd4MF5cNPi9Ye8H4S6Hx7Rh2ECZUs3",
  "key25": "4hjzeNoMZuFsscEzE46Fu1SrTqhj4YDhWnwAcssBgrDxiC4GgbMb1RRZrtrAbntWQ9bmd9t5wEXfprasrVsuV46L",
  "key26": "4TpqgNxtpofRQoSoQQaUysi7k9JhbX84d8Dz95bK7BG3S4zb1jrQbRhTGKdTRyUVdoUAett7pL5hRSbj2GhGJvM9",
  "key27": "52EFdLcBvJreXPpjwwwTcwE3MmsmgCjRWwJM1wWmSpRf8ygRHR1vMbTw1LBuTrLEVLtDtyHQ7fRHy1sRDUSWTEY9",
  "key28": "4jmKajk3Dghz8KzTUR6HXgCzpYHyxoZ6P7HQxQkG2WDQfXRaT6Kj887c5CuLx6jAjUYjWRFgS8jJTMzKv3neYK5h",
  "key29": "4Jj8mabMjuPrNWmgquQdon714cskxX9AKQQYa7i7krFg7kkDhhfoDsb5wXSZcx1eErwXeNeWngsa7oH1SCdMpsgt",
  "key30": "4sbW266mVfDeXJUXbWgHVJmdMHdxhr1pxZxAAX8KBiyhRUWoqGt5dCpxUKHQeJRiQRdiZYy51EitAuyT76iudC5h",
  "key31": "SksimSdzNUoA5PbCCfDR8pzSS8VYtWi5Qgf5aGEXknuojGiFLXpHfViaaCmheJY4kTg6iiBLuhL74cc82eL67gi",
  "key32": "cKdUTbSTjSwDJru7EHH6HpMneZ4uen2U8sJQzUT2nzKHKCcXZEdzXwe5RnhGJ7mUd9wYEDxaAgfrUd2hPLsPXBg",
  "key33": "62W1GGVb2NxxgN16GzYSycowtQf2bL8fo1Xjb9j6E2TE3rEUiWu8YQTu8sT4ucjaKQLTX8QkgAAW6BcQCVPbhSaw",
  "key34": "5HxppGLUCU4fVdbX9X1tgCkdsbHtj8a1vhFnS9oWxie3uZ87mJsrK7M6oap5Ca9ShwRrj2M7t4mq7rYYFKWojYoQ",
  "key35": "3xQVvPTQDJRSnBb9c1tK2pMHGW9HYtmUiSF8Ae6tRSR1PrCzHtrGT17bnmFK4Y7ghUXYDeZ6cYCbsARbpu1WtDKD"
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
