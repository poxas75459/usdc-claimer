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
    "4aRr9XYt6bsZc3vdddGV2hFZeqWGFB4UpASAsd5D2LQMgXUH7Gky4RBW7EsXPcrvGjpQ6wFvAQoCqZPjKRK6ZeqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TZbzHgB7MctVSJ7PRkfkayeQHah8PagZCjHVTxWWkqaVvbxPkDNg61VERqKmcZTgepC5o5mcKd5y3DT22dk1pXa",
  "key1": "GqCRUzuRmeghnSyMgpYiDG5YUNCkmCjWtekZzM9hbGGSxusvo5zM1v4aqXkK9uqfxKpfErSKakbAjPxcQr6Q3zj",
  "key2": "33Tw8zvXVLsNX5R1oZt39hAiyMB826PPYhMr8fZmzTtmBwAkECKcB2oU27aGmspLXLDqMn8qYmWGidAsWNgV3mNc",
  "key3": "29tm22HtEJXNqkwdUbtkXEqGVH4jkGwE54dvxQwfYXsbNfbAxnG3xWEYe7WFERBpqZ3s9t8gr2xTUC1vHV8X1nDS",
  "key4": "2CrYxWpN6Na1gFu8Hvy6nNnVmQPDZaZzEMDa7zbMNT9G5kTg7hS7DDJcPAw7nZuJf9H3wmoRDBh4X8dQK54vLWCY",
  "key5": "5pkHfCthenJ3ExXhDEh1tygMxZyVZFB18YU6eQhcAgq6we8RMxtLtxzeyoLEBjaoCUGwGfUxipPTGNeWuibGvVFY",
  "key6": "5HyXe3VsVQsaPNcyWTyPzEXYusypNxxoQNinJDAooQLz2QDmqKTmBNDhjc3rDCJeYZXtAu5DHYvXJJ9tBg672MRj",
  "key7": "4rCjWUsVygaxzAoLg7VWAGGCcaafmiPANLRzbVsj2tLqtnr5jEyfFAcbLRemaxgkAkfxWm1E9RgKYX2YezDAE31R",
  "key8": "2LWnNqVDewLt9ZZsLfy4ANAVfbTQ6W54s5CEtSe9TsRNf7KEHeg1psjRh2tgyGaqJM7HYNUmPTnt5gNvQZDa1qWa",
  "key9": "51eofqaFypbHrgvFf5V9Y5emKBkU1EuwTjJ5DJswzM2TiweozYdUJUEzEy7uzvt1FQFSqBCa23o3xDvoK1F9ViX4",
  "key10": "38WozTtMhHhza53kLYK9zcLxpXbMNdra5p1QooYYhZniHMc1m5gHrNhpT1RNsHvzQuwT9Lab6tvWdLdSHyGsAfdc",
  "key11": "5MdnDfUTmvaKYmCLQk6AHCv9VJeMNT4BtBqpvVyUPmUssjRpvqapxBH9P4i6Vcxn3eudDCg8QvQ6F2mj367NVeGX",
  "key12": "3VPdesqwSB2RwVB4Bz6kZ5Z4n4nCu76TkxD1Rva7e7wionByMhqfrGstUqzu4jU5EBZLKtTAaa3k4Sq4iX3ubgL1",
  "key13": "67iPZXDNTHuBdj6vQ6Pnm87CeAiXbh9p2zR8HDNQ6UTGgqe8LCmPouGySB8GSGpFhFSSaeCeyysQ3Ymu3JwxP2VD",
  "key14": "4mZfKnFgZdiwXtbQM7wDnJsek8jLbWsDTxEbBDsdXqQBydFwC6DKBG91Ka54akfShYorgdYd7PBYJDKB539vt7rD",
  "key15": "531Z6vf5ktGW4uyMbCVHNKcjUq1C4XT2gucQwkhXggw9eWJNkVGoZBNJ78aNyWu6QqYPE2djZYzmyG4CuK8XZX4h",
  "key16": "36q3AYJAgpZt7zrDG3JKg3SwoFpgoEwESToDP9PxXeWmE4xrsWqYBeTMcJ2otbFQuYWknNvppB3V7UY1Zrq8sjhB",
  "key17": "fZ5VnTjkUHAgpgMHgdpni5xcXU1jzuLt3hC7NtKySnJvvwGMrfZpUK2WYYSKBYxTzvkb6pg8ttQZT4DCN7MDrPC",
  "key18": "5uTBN41KRdZHzxurdG6hFYKXjiUuYjpE36oStintc2sVL8dm3H2UT9Zab6XgJVqEFR5e298SyA7vvo8PFNrDkzxQ",
  "key19": "3eyumG8goUKebjHzsag2T6AEVH8HcAeQ4BMzykBZz6sTe7CyN6NUcyWicmCK9tX8xn8fQmv5FaWk5Cq4qZ6c3W2n",
  "key20": "bY2gBRDTE87rC3Zv1HZVK68BqkpJhmjpHySXSyGEbH5CnfKcfW4Ri98iRGwX1F8svV1xojgQ5T9BoLj8k7BxosK",
  "key21": "54xHWjndHhNHuodqea4pdCYLpNgYgTiEZwrb3oSGy7c7t3PCMnd3d3E2vQNM68wsCu9QmXfTQ9p2vZsYVrtEvefJ",
  "key22": "hQ1FYYb1p2rCPccL6cm94nu9UQ9U18Ppm3t7TzpnpKUdg7oZ7sFTuHEsbRDQNM3d4cm2p2RJSAU1qGjXGeRoGeL",
  "key23": "EGSbRkfChA44MhusPHTofw1KoZ25dY19QZyknkzWpfnaNuxRuimafVcNShJNGEegfvwsY7VMM45kbjehwFdG32R",
  "key24": "3Lx7MyM9o3tssR1L6mUgLg3hWgRFdTLxNY2WXENemfsJCJK1dPRWqQzfa7zoEmmujCcfcEnoFUngLVNFgjw7rUtd",
  "key25": "4FzoKZeTEwbSfhjTxS6BhfgKbDcXviFH54ZNzSUZ6DefeH374ojnVpJb8ujvxcGfURmASfYqqx8dXvdszLy9cRyj",
  "key26": "kHCr21RtH4xRBJTn9TQcxUMiDR9gj2Ly9NisVbcTc2FnJDD1mEZmZ6kZQ7VrosBrwFKCVMG7Dyppk8WiFnC4b1H",
  "key27": "Wd46XDz2sEXiCMcPct7iXGdmbAUg4N44UGQK62ge546tR38z7cfAfrx9CeAvTWCQ6RL4CTqCvCyypxDC6hf7oCq",
  "key28": "2fPFyqwe95K57LQ14bAJVL7UmHn76kSdCPJG8gTztyathymQchAptSW18BAgbobfZxQXwRzys4ijyVMnmN1TdojX",
  "key29": "2ZPduiuudnnhtGDoBqSMwx3YFgNkiuC8ESzQogfaoyYQ33SaSW7Kkx46ZrtDVteJq8fDRWghnZGcwRkLeZMZnKDk",
  "key30": "49PCvx3w1G8icUdpNmWsdY7awnxDC8xQd71qqVBdYxXtBVh1YfmgiKpjprDMuRvaFpUpZbJu3VG85To27dU9HFYd",
  "key31": "3K3BcYehB8VK1VascHXG9yot7QPE6wuLD77JXWkTwRwk1vZoFsvjQoGac9jnaGgyPhmk95yffJrgt4svz7VC9uUn",
  "key32": "2q3kyjptXMn8a9HLfGcvRU7VE1HaS4bL11qh3vU5hGCRt6bke92jNgEnQTTtRVgP2Vjnt8sLf5YfrCwiPkEcz8eE",
  "key33": "2AwEXqGk38umjk8De5c2fBrUBpYXQmtxJ4EoHV1YyNRnHaieKX3K63hSKicVGqSqwgHXnNkgNtdyMDd4E9xWZaB8",
  "key34": "2s2XWV62WDo6Xd2DsxnigUZ8P4TVfXyHewynJXBMT7DgHnHYMSCbqYnNPsPWsJNgpqhhJGGUyfJyG8ffuAX44XuH",
  "key35": "22dkxPAEZ54trQZt6wDmmJL7NNyGbwwmqHA2kwSB7cgBjcVRNVnKL5P82dduyCuFwhXbRpZC4Wf5fk4nSUuAAWmK",
  "key36": "5E2kCMwW4cUVHVT49XsfnqPxtypjP1MuhTQarq1rLSKnY446FfUMx4yaqvz5vpa65duxsoViasfroJAogi4DRrvE",
  "key37": "2tR94JcsLaEwDKWyeLE9kTqdMSbQdZ18mfKdmbiZwQKduD6NbMtUKZ8P1UoKSqVN9zxaUZJ7f1ybHn9w25hu547p",
  "key38": "4Zj5pr8Wz2ze3JPWj42dkESXGPw3oMe6hApKai3QCSdAaNAuZp386pqTqsJmiJ2mJHYtLzb6CbN1YWXpTJ8ppawp",
  "key39": "2KVpz5mwnKXL8KKPGSXocxoYgS2PbQdeWpjj9mGTan5ujJEQyeDLUsbD6qXDupnbdTZYZSnv9wXxt9hd4JBuDFJW",
  "key40": "5EwoKfwxPRv4SWEhtqcxUKforAApEkZE9iGusmhkMGXChAk2zwXRJUS4akiDdLYRHJzJcxsT86U35DPMNpM5CMs9",
  "key41": "4o8V3bA1eji2gKD6b33DMd5SndMhaAVguZR663qMcQHidBNBhNNutekG1TqEjoiWJH1KhzyoWcDHc7mr6eRQ5aA6",
  "key42": "4Q1Lot7RpicMCsjTkNiGpN3Pq3d97QxdQYrtFQc2SF6Uj3aTcN9WYCbkqLsHAheDpQUsE8mrFvUr2N9vNqkM9Uag",
  "key43": "2DL3nddopFrDMgnUiKgvYdbh2rX6MgN3UpctkmNCPR99m9SxmHSk4UhkasbxUnxFKUuR1sBZPX6xzQfmH7mjC8YF"
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
