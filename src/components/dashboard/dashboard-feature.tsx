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
    "5AHrW6mxvLX1d3mjaLaiBnLSAo7PYnffneJzqPx7ZyqH1mfXxS2Qx2FEoWJgyHnUsJ3yESWEiarKoXfKES5mL1jh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c5mXq7xsVCQjmtA1D8o9SiQAfZ1LoNbAhYR8G4Bz9dLPPCtLQmtQy9EWdYzndjqXfeQ1fvYSbkVsf9hhakFwdgA",
  "key1": "5w9ptQKruWqqM5MSXkXWbp6B7eM1RzMdG62CgAenhfKoN4qkNLZAUsQB4cgbwY6zeKvYnzDHZJeKtgRhhEWaUYrt",
  "key2": "3ioevWXB4mQV2fdwAYuaLVzbvqaXDWEaxx7D6v87FxrsafH5MMX8ThAa7HAZXp4djXzt5HM1MSB2Vjbw8r5mfteh",
  "key3": "3u4irruekY78GAp44ZtcLqVuHaxLiDogxMi4hzcEyjcUyrtDT29uWTP2KUkUtRhrRLTMZPsZEE2suEv6zZRc6ngR",
  "key4": "5eGHK2W3eoHqzmvkireTWkR8uBpAW51asLwacXAZHK5SoB8kdNgtcPZW7t1jKBsMXsGXg2HkGfmz15KentaDy85H",
  "key5": "Qj4BRhXW3T7ZXHubV7uDthRkZBjpDLaHo2s5tnfsAf2pmUgfj289CxsQUyTwKjyDyjG3MzdNWkSz2p3TFZg2mKQ",
  "key6": "3m8CanmAyyUNYiDzoCqc5MSCFTz4U2ak2tVJbf8cFyFRjLkivLz9QzPS6uy3x7WxpQqRi4LTfS2HMEKyX7TUxjQX",
  "key7": "fggJoNGFcohnKsYxeu19SDP3tFHVq4oW56hRjEDoA8Uy3k6X6YhaQxArhGNxgJnzSv1PsgHUreCTAsxdqQ9F4JS",
  "key8": "32zLJ2xxfFv8GM1pAdknw4JXCfZ6ShAhAoSjrGXMXKRtzJZN3mXzF8CsKy4eM6i9a83rUbbn3rSonKYBxSmtKoFG",
  "key9": "HNkqoj6tQkRM9aprRhgTcGMDvH16hJehYCrcZ5LAjLydd2fhz5UTX4MpH1tbZEG8n64huCJsZAZbw21m2brcpy8",
  "key10": "4senDHtjG2gx9XJL12LrcDgSN8FvUjP47xrtao7e4SxiBs13DeKLyYtuVpUpE9QVboKbs4VGb2vrJxJ7H3gif7fp",
  "key11": "TyPfg29rY1bv69DRHQNpQ2vmTZPivGowT99nP9EChMHLDELowvFfxrpFPea1XA9fD3G8JxiFa3Jyi86SHXGKivY",
  "key12": "67Xjm9E7vUU4AW6jXVLZNcCbPqXX2u7nYUzWJyK1aEYezxhgvB6RBWXUaNdv3KSxWD5yWqMnkDwe6dpg3JqTM9Dv",
  "key13": "627nQytiNQ3rDhnT6sUaGAZv7enKVNHPRaGFjKfhSzkfoCjNP231dMtbz6rAcRtqZzq2RqxvNNEUBko3wXg3Cir6",
  "key14": "86YkLRKjQWrP7emVfVEYgb8cix8ehiQMpKu5CAKXjSYuiZ7HR49M2C4s73WHvw4xWMPJ8i1eWmivw9LYMpjYLjg",
  "key15": "buADwqkYsrceQ7vWZzCaTHRt9kikXys2gs5cBvP7KsDA1poHvPWdGrcGaFvzXVbSyTByjep49h3CmyFxWnsnBEF",
  "key16": "e5fSGmujBmsB4qFEMxcEBJP8RHhTkWt87zgZx8xQa6cRfUgoJzTAYLx4iHcaWe5YJUszqBqZBA7Wx9Lm96nVqLp",
  "key17": "nNzZQsVsvdZ8GnAp1RmPR8jpyNhBnPC2qkeZwbP3N1CZf6r8TULN5KAjSXL6JqruAgKMvpLEvr6kBx5rdWVuE42",
  "key18": "5S3EuPRDMxA4t3uu6sEkxvFnwydBsPa6KxgGA9ADzQwRLB4SXsrv8aY7CXJXdU4PjuQBXH9FcRmGQ5JcvxbAnLqr",
  "key19": "3atYtC1iEpG66XmLFtaipCdcH2JJV7XhcnPVqw7HfSfAsXWaUH7SPX5vSjVxDFD5AkxsYpUQMxmMqhK2vVEP36KQ",
  "key20": "RLR5M9bQCvWnxjogEKRcjxfxT9zA87MZZagRDno6XBi7Xan6VALwBYh8Gp7a5PykFkm4tAcggCo8WStpEpcYUyB",
  "key21": "2pfw9zYxmJEQ4PshW8U9Ei1ENmkQP6Pfeiv1VyewYu5JAz7reNYbxzA42K1jxN51GdnWTYMA42cTmDbfF5tBz2ty",
  "key22": "4iHZj2QpN3GsgvvdR842NcxVaWasEXfW18kKYTTiZFS3pdespQWn65RCBgD3gEMu918qGFKWde1zsdLXoSa7GV9U",
  "key23": "3ZVVnKpor68b5rKoiGTxA4v93Hv9w6p6AZ8JUsHTQnhpZuHrqtnWuwpVfBjNXrXHvBaBz4uEXBUF5uj7HCubSCVb",
  "key24": "R6rGpJCSpyjNDcc7YjQ4nZgNAAwqJWnuUGYAF8vAJ55wkR2F7JeCgtuJuj2E9qK42yyMcGSw6pHc2fHnifuD4HY",
  "key25": "jQ5wgLjSGbVkYMSyzFRLxkQzydEHpmcuq9J7XyMB3kvPfrtFSd559hGcJaPdE28fzMsS6mvNtBw1QxNSch5jVCY",
  "key26": "46xZvXRi4sXe1aAFkR2qzm13b2qjg141Akei9Lr7AzJkWdAjAY2UCHMY9EoJK7J8izYXSqasi4kfSty1ko6oJdeA",
  "key27": "2RhXgwu8nZ6opEjyGRrE4yrzRjrUgaj2Vh5yG6vPFTXoMwCNd9JhapaWJkeVovLbhWGXkPgwXcVYAvhxfdeRcovQ",
  "key28": "4bA2H1oRhN9MUqcTy1EKgizDDp5gSMFLkNx7GkUcGKMeFNMxkUmcboS1vjY291ktQsP1UeKCj1ZSK3JGGFG19QZw",
  "key29": "4rfLYsU7chHmndLrujjtPN2QNupfVovh5rbgAEM4n7ToUK7tqNrFDsB1FzvKsSjwPDec924eB1v8TXDo4QEvAgQ3",
  "key30": "3tnVtrYby19rLS46yDh2nkiFAgXULXyozndBZ571xUquSAgRaSm6JjBjvGSXP5obZtzb5aWifMoHPz7MQdQfoMPX",
  "key31": "2N7jA93d4mDaMC92N93RkjzCUCsZGMMSmRJAuUbNxMgJXhUdDzA12sb4ir8BxGSfMpYPXSCnsWQJ3QoUBpC14371",
  "key32": "2JW19ZjK8cG3xA2ptpcFSKZDUsmbgeamDR38pf7TGT7ejzUBvc45kipNzEaRjbmCGk4yRJwpwaGRKKXKitLmQPg2",
  "key33": "5Urk6gX9X8DaMhGh8yND6s2MYasKksFEjwLSSBHY3boRiK3WUkLLPhfABAH4H2z1qvqepxxvEhbrJFnnre1eX3k6",
  "key34": "5N9knWmBqno2WiHBLXAymsqW7g28KGNdwbjEksFwyyC4EzkhQKW9RAT4tiXiB56KxEsGYGd2zjPuti6DwYRM6P1y",
  "key35": "2aRVJzhrVyFyhN2e4AkPYR9o5A6GHVmxghk6vfR58CyecEKX1m8ZSd6e4kZ5HZZGc8SW8az19QFWLkUShf2z3maQ",
  "key36": "3HeCVe3AaJ2gwKzsR7yDfn4e1EmHdgRYQfJeGBtxC5korboeGZbh5XKS4KYWHsfpdsXYzBFqvLND3yy5dwvGDLai",
  "key37": "2ePtmACd1qpKaA1anYFS38eJNgosKRDF4HByZd1V7QdE4mxqNjN6xP6LEFXY8RsJyBvpmSVFTFNXctSG1xdqDgyd",
  "key38": "U27uRVepVsAwMirT3R8cRquUy1ge34PzntJqGEB4T7C7Pwekg856KQRY2cHgtxKXTPbywDzcezv6WRoQCSJWyJ3",
  "key39": "4ehj6RmVuZC2VA3y9W3aSXMFPs2Wn3EzkvYK5xjcsLkETA8V3v1qTtVxXH5GxGvUTq3L5UTjKATJxyigbiy6CDh9"
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
