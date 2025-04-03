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
    "67YAhKjLeA5JPnibhr7gJCmNnf6P5Tvwh8WmUzP5PM62oADWn3iqQFHe3MUxwjpHCfTfHrPsy3FqysQn5RmW7chf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44NhrvtMAfDeEtWteLZg3t2Rg4UTFr6L2gU6w7wjzA9yVPCWwm7W82wjm2mDwtrjkemLxXtf77gXcxavSUYEL9EE",
  "key1": "31X2pVx4JaVYb3ZSvawvcSqhuXTQa4KRrkeQtvugoer2ka8m4iw3azKSjDDXPihWSkSyNuFHVyDsHPutiH65W5A5",
  "key2": "4vQ1j8iiQ35Ma5NgPU7gLZ8KYVzjiKbmtbke9raHGuQynfuavYKhqHtnvJfA5ozwH2DMohsPzBdReNjm7pGoVSt",
  "key3": "3qD8sXAucxEkVkUdG8ncdLB8dTdV8oKjBDswXQ3c8MTAHKMgxmS924hHh3wo772HUGbprwR1QMwT5Hvziop6t4fX",
  "key4": "38PgBtADvET5XDW1wWRFUrtxCqV15NxXTsjXnhioJFLvSJLgXDTw4yFsbZL9aVLuh4povbVogtAT2AffAzCBfs9v",
  "key5": "4337LqtiG1DFh3ca1D28W1yc3wYsvY26zx3TGRUzNcUQqQRGrsPAjZ33VmgbmEH7BAtuEZWjwsS4yn8fJRYKVVAX",
  "key6": "EVmguEr6pfhDRAMWsW6oNVc3UzhM5p96sZRaWX3f6pxt6PW3KF3fWidjeZt1E5ajrytvV7AvtkjWyZ8xpx4VHZ8",
  "key7": "4vxpWJz4pVFgJmWkVHQ6ZhUap3Qd4sdQBgVGwQUvJfDdvKKZAnb4KymRbaovEh6L27jXzmDszXNpmLivriZrb8XQ",
  "key8": "zjn9VFyqPdHkt6vBDgXEpa8R5FJgZir4Wt1qYcEgSWwdzNvhxZQ1k1amuGWWRDeV8KxV1HYXDM1K2MRa328xkw7",
  "key9": "43BHtLNrVdDNbk3XV6mSW6M4fhbCTdQto4Ryt54DNi1x569iw4h6anxFPwqYjxbaDjicgrrFHUvDQ5vTobERm9aS",
  "key10": "3g6dbWzDVeP4zU5R5gMsUcKcb32eGWCF9CGCA87gTSJmDoGiAfRMaYLFWnbrM59Uyj9hT9FyYUrk8QX931ucZxBw",
  "key11": "5C3AS8BHQabe2KU8y4hVyCrrtGnapRbtzSp7tobiMjaTVoqkjBQaCrnc5tYWzLfL4UbxQG4Ev3X8iqoJM23gTX2n",
  "key12": "STHKFS41ck9Rc2ak6cfj1JECGzmyKuT9KLzzvLoqtnhMGqWc4t7z6r3nGb9XZjaQXASaXW6bLMvbELRgoESSuXh",
  "key13": "4Q1ikbB92ydidyLbi2wYmpHytKYwqyDZFQSoo3b2U9ZkxXxZEuFtm68YmZX2TV7YbH295iYPrR9mGL1oXEZXWZZ",
  "key14": "87UE8P2ufHvVdZ6ZuLqz9VQf2VchSRMAmxzYbHzPDALtdZy4hi9DDTcjUYooAkEew6S5jx5EgdDx5MvYby2oi7p",
  "key15": "XQ2SAkGcMgEh4xMbceh1o6cskAHCtMvVNFoPAzQubvAweSGPW7wniLzcsuASECWybuS8cY66ZZc1ayjkkbCYcE8",
  "key16": "3AFzDiywAE7gXN4fx97SEHhhckV3tsNCzcpKv6waQoS5qdnr9nwsx4nJTfDixTCL31E5k8vLoeysygZmy7rno2Yx",
  "key17": "wGq6DHxGjJYu3GaRKshwkWk8v6SvTjwFLZHPQC9yX8y6z2D2Gov4Ukxc7P6Gnmf5WCmuYFcUWTHRKsGBjTSMdkT",
  "key18": "5VbuZENxaoc23dok4RxpY3Dt8wT22n82Tu6qe9z8FADqmSwkAsxouMZuR6hyFqeJoKqfafQaEnnA3Yw8h83ubMny",
  "key19": "3AaCRoPER5Em5C8BK1zhaG2ScghtMmrKAg1HpSHK7wNugEv7JguM1wUFnmgRbWGbY9FDDxSrZqQw9aUAPEcULFh2",
  "key20": "2x2w9ew5GGdLTXBMuaR3iWNV2s2i3u7bqBPRHZrDGatoj63JJjCDSJcgQvWfN5LXfJYMJehdCPLLwfsroRKxQQpq",
  "key21": "AAzuG4SLFCNoiwFV2uhNV4tTMwS8bVBN3y79y2utmmZ1YuUbBooiV8XXZsWyjRHREhTZ6ta1XrtoUArQAbqfTMe",
  "key22": "2PzrRKFU6pm22cEfAAaa93pkKbreBwCoiYd9WFRFCTxHMeGLQdvtNmXhg5874vUC9xRSiceuZV22EgP1aztyNEbM",
  "key23": "2oj5sQaRKVWuFKXLLbf1k2NggZXMeGpRoK7RC5NXQb76mnGioPx5wsKHNMpPjn6YNSr5joCSGSfqNcf8seqTzwtr",
  "key24": "3xpzwYT2ffJi2wnNQ6Q1ZvzCoMNsHTQrnrtFpzx2FSE6jBxm3dG9CgyF9rN2AksobZe1PD5LacX5g7GV3842Ewyh",
  "key25": "SQCyRJN35XH9HYz9N1ES2pByAkyUm73KQwLNoC3oY837pEutH16AKBiCQG8wY6LP9GuZwYUWTbqLqKnPZmUrFec",
  "key26": "5m3rVbANqh5N1xj6aANqd5JNCgtZrazRTsB8r4bX1mrNdE2Yx81Az27QrrdYNHYv3z3RJSv6ahhzSVhg9C3ezrty",
  "key27": "5H6tU6KCZoUUEaKea32YPDgKQrH9NyHxENn5Y2zmdTCUCWV5UUXn1257QH1i64gHrYpYeZ5ZExgyZD8RLocyRuRQ",
  "key28": "bYBF5MYy5q4WLSLRQANDc5kCPwbP7cX12pQUn1VfP2Ed6TZv2YkxekR7F3DovvM5JgautsHRGm4FPLa46M8pKtb",
  "key29": "4MMNqFgdJbtHdxwkbuAK6kh65Mqnp3n2mjmPss96R9gSuHkwnrZphCcrCgkLihZDtGbLQ2wWjCQo4RnAgtLYVuF6",
  "key30": "5qf5hfsjZVzhFaYf94vXg26Z2tAUbKjHUGTZ8BeWmrRuLqLFjwepEG5XZbnLAYJBAWobkDiajxJzHSZXkfgqNrzZ",
  "key31": "37AThrpUaKh2pacbSvgm6cJEe1XWd9zFtv4ZvvJTpQZ6Dp3L8yyK6UHvupGbHfwtRATj5HEz6WdzEUvftYYEiqNN",
  "key32": "gD5y4RCnemVGEaBwYB7jQYBbBcDT7byL7neGTc8wZZM88FHKqBquU7wWsxeZgAs3FampJke2VzxgpqhLTfnMugQ",
  "key33": "5pCufj8WSMirXk8CCgbnbywxcqFAkfr7ar7doGKg9JWQSd2C7J8F8w25i9YDMY2bdHQjzwDQVyLN4sLNa3kXmM4B",
  "key34": "4ASnAaPEpMFKoAeSaLaKdy55u6wZP6M2cWxfhDjfHSTpRBSSpNbwZ8vfsHa6mvMCNMn5D8NMgYfPMuHDuqm478Mk",
  "key35": "jz53JVVVghFLKGzVjLKsAYvmk8UspdGz1mpFhChCwAZCy8fex2hNjtYAFq3MLL8ynwEkfKHjea14HtdGi22bUHE",
  "key36": "2BwfrQiq2BDfbUTCU5wN8mPym1pR3QYcHBjvhkwvcAEuhGGmLMewktQCa8SxQj7Ehg6tCFhnuJnfXTCRDwEkEqyk",
  "key37": "5KJj3wwGrDiEWJ9JvGYvthyBw53ytarTNGv5sug5HiW1kofdbr1a3K21F5gB4ANRgKqVtGkJgYa1gHPJbXJ1UG59",
  "key38": "2zhgcSw4og129avKAmZqPSGHhUPTooAHn3NdjgwGUFn25KoSanB1jRX5AWev7deFM7MbRBWkb7tbZCpd1EGpJZdy",
  "key39": "3YvZQiQ7dNqBVdRJ8rQbVDBvtQxNyGoYyK7NePwMbucSHy8dhNajMN6yMHG7FTapp1FZ838RgRNSWvyA5Qtmqo5w",
  "key40": "5bFcH5fFRtwXcBV5BD5XY5fGGjRRQQ7ySt1AbWNWUuYkaubQjxK8nAysP6dEphDjNoAwf9mxsy5nqw79Jh18p8wy"
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
