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
    "3gHAioTfAN3g2GgRRQ416FLGVdmuAVMzkt3qCrwib8ZWLV6dDMx5PPZ6sUkEz93Y6yBohr9FpSkoNF9WUDXrgJSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AXpWGZY37ciLnPYUYVAbvmDh3VpajBq8ZY8auTiFnbQA72vu1XA6HNPt7PWuCSrmJzyjovR8MWR56gFAD3aftdB",
  "key1": "3huzBafndrzfSzodvbQytDG5fh1YQHhyFC33ME9dG8CwQRTGseDnmUcGnpuHSbAG64VdfC8CGKtpJeUBSnuvXPAm",
  "key2": "4PsRVs8wccTU2bS3svbsVtvc99NFdUu2dQDtqPCnodoutEpSTSakaX2uvHkjKpbm3nYodyD8w9h5aegvFCS6GtzW",
  "key3": "4VYyH9CYvVGfdPRgLrAg6CrXNw5mipqXFc825TUjk5YEj7dsYDNMxN7T3xMzv2hqAwb7ykvUPRkZSrbvzdoLd3wm",
  "key4": "5LCJYee5h8Q158FC8Mowqfb8k4zyqTwyay3zyP5PFTGX8RHJSQcnLiBnU2A44ayxtKM88yKyofLh5TumPK2jjCt6",
  "key5": "3hVMwyLY5phJxtZqBRQgR3MXzWVAiF14GpMtPp7RgepAx7STjkriiQagpBf8A9ydQBpcKa57QuDVEXNqKFWrr8Gs",
  "key6": "5YUPkm5SUitwsAqyx2DXmcayvpUhR1YmNbt7dYeSmU3wu157HjuXKCHGRBBG5HR2qR3FxWVpAPzSC4zfccCrgJzd",
  "key7": "4h9snfrAwU1uY1VzroNYQs2jXbqUsMZ8CEGXFqDtpvL4Er2ruyAGSYC1mPda9ZPaK4vMkQAt6jjczALEfp1SJNWR",
  "key8": "2Grm2Qpyxh1r2vYWfWa1yLPaXdNruks66hWKiEM15xKE3C4aK97fV6wRQgUvDBgmf5w4ePujC7AoMEND4vaqNnSd",
  "key9": "5qpXxKUSm7xXr7vUXPPHtWNP15E9xhUfsmNtG3JSUhpPz5tP2ddU2vg4qbtszDRkTYdboKUSmW5Cn9JojB7p7JDA",
  "key10": "nRQbj9FPgx4Sz1LCRHw6tmYMNXCExdsn8m8NdkMWu7p5K3U5sxuCrctrhzjqJ2bQ37nzw8yj5LpVqqy4N6fmb74",
  "key11": "4uBDymMWcqBjPsef3BrFn3x4e9zKnaq6zZeGpRmBXhcbMVr6mmGNefSwyPaNG2ViFpwDe9S7cxTzzL4ZYuh7QS8q",
  "key12": "2SQxNjZvb3chTd4nMFDLBtwp1Nm2spT1PCeyeJCWvHhSpHfHoFsfoHmiazt51RhTCVYDZXUkPaNF4P6cVETCNxCf",
  "key13": "4uiGmTWGiqxQ7nC8Yk3Uuh3P9PVrb3fGmZffLfbN2SyW5SU9ohUtFCJbLntFy2bKgckfZWSAPXY1ybvw5bsyA18U",
  "key14": "5mHop2ogZLjvwPVGGZiMjVHEEZhydLWuYLxaLauniXdr6Tp48J1Hypttktu3EZGStqrZ3UccWbRYtYXJpZoWmoJG",
  "key15": "3DeSzBJdGGvMWWdg5VSqwvjGamAe8DmsbyqoruGoxj4czrk5R1sYLiJPxUXNEKwYVaL1yCQX829DYZMCRKLBiuRi",
  "key16": "2LWvYQ2Z5bTXWphPRHzPT8AaqfoFzN16nh4RaHd5o47wqVL7LRGV7dYHSzoQVcYcKR2PiZRu1W3PD6fMz4HLhK1k",
  "key17": "erqRiaj1aStzDPToi2wBXvUQr4pEXUsFMb3c28ADcwAHDaf2jFsAAmWuqHX9oxg3CfJbdvG51GrtCKx2THGuCzq",
  "key18": "66REgGnhgg55VMmEyp7k8gzd3yRGhozKTRRzfhFKTiFuhXGr2EuWFFouFbhNfRiGMexM328aWVEcV21ChANpHw8U",
  "key19": "2Y7qcTVjf5kFFVq4KCi4yfQrLChQk6xpLBqJqH1PZCk6VqkJJkgZCL2pDZcruEzxra92TyHSnHxzfsrBjTWA4XdY",
  "key20": "3uXYNKhJAFCCdif8zAJ7BgsqiMkh4TxbDuWrZhs7r8SZeUsPq5x4KyjWmdidZX5V31vqQw8SNdTYu6mTkmKFbBjZ",
  "key21": "4Nts3DFj6WcqnDsGXEYXWXRvbj2FsnoLQqfxQLeDKGpBbE7wvB1MxZWuwE44twxDZoCT5g1DD8mYGLacswQLEvdN",
  "key22": "5DV1MnqfFxk681eJn3Mh3tKQmNyeJszh8E3RhJuktTME8U1PVSA3yf7YmmRC7gjSbfX6R6Crv3BsZz98jUByr9pD",
  "key23": "3TocRoruwXBdQja4q2CGWRB4omWmKZsJSjDsbQadcG94NFzULmSwmfdPsZE3fUJSvtFUz7WgpqDfUGe7k8RFCrPi",
  "key24": "4oMEzxEJDjjvwVf5WLwQpZRkYCQrHnUoqAsp6qDruvT6ASh3i6ZYoRozpUQ9ubeA84oTLLB1DzXBWfZCFN7769ip"
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
