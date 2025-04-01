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
    "4hTzqBNDAW9udqgGsFKHU235LEyY1J2em6CzxnaVWEFPFELD3YDbbUjKQP1UgHanFNSyhyWqzy5pafXP5XTxZCZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54PDJdjWeiELbGmabMkXCAZjSKzYwt7BMywp3zmx7CnNHDaTRWJk42WgdeUWumNTUAu5wL3QQrPYriXM8gDYkAra",
  "key1": "5ijX48ZwrEtBPRYrkUKHFvs3rKBDfhiziQzV9v7K4oxf9J5PN3kuLpQ82g2GcNVmra4U4pLv1v1LcmGmTGvqjX4S",
  "key2": "2bDiJMUq4q9qWHvi2XZMmvSEfiLy1AmbALJuxQrUMq1Z2aSyV4xgRqLyGrYjjjprP9995k9WiC1mvL6kqh6dW7ZH",
  "key3": "3gCzxFY1vfoocLg8AySABXzPnbdRyYHSUv2BG8uNmUFZUaMFXdcRNkmfSRDDUDHWyf47bCfTPTz5QCAaiF9gLKhe",
  "key4": "2Nw2Y4nTdzisV2nTMA1xqw4ECCvpBqfVB4HiME2RL2rxnmiMu287z6q3hm7XV3srCMHsSaPa7jcLAC4MHBC4H9kG",
  "key5": "QiZzjfwzpCLRTVdikouzYAd3CLy8PuLCtkfLqBjptMnTYYFUoWpk9D23iFkA9N5fUsR68LrZkuX2msRsPnkMhQy",
  "key6": "Y2zaZkvcHVFTmUo5ThrvucKfqwRtzP98v4dqzDWshQyPCDvFzACsMPUvwcprF8gVsYpvC5tEs4poU2T62iNvek8",
  "key7": "42at8kWV2agFkTKwZQWANLd6WYAn7X6WMGBbJ7xEKXY5RhHFZ25a2ZykeC1b1aGQvx53wBQPfE2xKX93pPZEXq9h",
  "key8": "4zfP2yYPnWk5kANSb9LScZWJWy9Abswx9qVXbr1r7zNt3mq3TFuf5ZQU8cA6w9AH5dn9iu2U4jvQyE9ZWaxJ64XU",
  "key9": "3XwQf92PdN2UWEbLQ1do3G6XgDt1gnYtty2sLJKD35fdniuMymaFdMFBRBDF7TZ9X84hiwthKigQRPpwPbuyLTwZ",
  "key10": "62XzrvKspSRNHpKzbkJvzush8f236ueCy5ic7ypWCEBwjiHkgbPqGXLi5pxRGbWJWipopJKYRFjcpXsUjmtoeWDq",
  "key11": "yRssVT8iPqah1vkBEZYnqwKjyZ2C7LBXEYwrW7mAkumnAURHmfnz6B7WmDtybyTqkZiAQwvKyFNUmpAwAkJpKdK",
  "key12": "5gVjZXPhVLz922uA4U2BdhT6BzmGMck232ZgrJurSupZmg1ehkRsJ9FeLChqXu5sKkAwjQL3PYZJbGQR9Fe1Vs9e",
  "key13": "3fogBYcAz5Nzb1niS2qMfLCxmv8LeCBNVJvNNWcaBnKJGzSMmy2fN2srkxeew4bkCPhDzyfezCPDV9LPB42BArEG",
  "key14": "aproCCKqwDrppFy8yKnZBArf814FVytcr4RqW5Xbhftz8kX3bN25ZpF9fKWvidGXzcvkSkoBgb9DYhEcPmoFmFg",
  "key15": "3MmmvN7S9cnwq2AA7n87CMot2kK8YhVnU4hoqr3eE1tCAxyDT2wDCgQawoN7hYxkBi98KBat3SA721qBNc1UuhMd",
  "key16": "4XMDr3EdLZMopw585BXVZNEMSSj2hYQaaY2Dcvj9t322TQBBQDxYs3rmndbU68CVfzTbUjG9x2u57HmRGcAC3PLn",
  "key17": "2KhXj1rgiCLDye6xG5QCJEraWmysxuNeffMQ7SAVAQaotngXoVT22C25UjWm4H2nSCAJMLQx5pSpxAXNgLKswk7V",
  "key18": "3qo2hbigv5UxXbyEfPon5P7MSJtjL1qwpWKRkLGsr6K4mhcT6uiN9rcRuzws9YbZidDxhcLh8x3wtSaNpM6Xba9U",
  "key19": "4XBoDDA71Y4RZHzYmgd94gMNppz7ny5tnUiMx3Ai8f35UEQafbnw1xJu2w1habNnGkh4oo59dGVCHyaTTGsRatQP",
  "key20": "2coVfVY2rkQF7jwa7zz8MAenu2tggdJxzkic2sppdf7f3Nh2m1zRnjDdKV9PNzZhGg4x86mB2Ni6woi17W2DWf2w",
  "key21": "S3y1Jzx5o28y8H8q5L56TM8G8w1LSvdb6CaPnp53UQM8Q6cf2UE5hJydEEkNB5R4q3FYLEmZmUH9NVTWCEkEu8b",
  "key22": "2KADbGte9sdBzgJHaHXPV6XWatn2wtEgVbtbjry3rPrACBZiCYfJnrzk8gUzbPuoDg9zfbYSRgGLPyuSUsTydoRS",
  "key23": "5U7Y9UgM4V7bnoUNHUHR2JUby9nc24kH1Rcse4RDJPtvN4So64A15mNJvBqDNi7retU7MXC5UsVSKgZ6A5S1csym",
  "key24": "5eLwcU58Ly4ENQwXSKhzTFJPuFno6xuVXykgKrH5RxTqfgh8bZM5pggMyNg8c7AVSdnfDVi7v63L3HYpGyx6g1tM",
  "key25": "4ywGMNXWGMXasPwTMRnyhps4SXQXWYHkYfcTpwfMxB1y1pGKnkL5we4UiHaAtZxnuRsjo1m8QivCW8LevsZaaGHM",
  "key26": "2fC497Q5QjWmLmTNWckRF4xZ6mrc4thyH19A4EQHm6dHPZy6SAqX3CAi8CF4V4UMqyq6SC8VZc4ALqH55qBc1txY",
  "key27": "2LaLR3bsK7TmT7vG3niF8hYBGGTdHsbtuYjJAHG1bsSxnWZ96fhZvZA7ZwkDCrbou9BYgn1iJu47QpWToDLW5Uyj",
  "key28": "2Wo82XKsxJAZPNYzWBMCUafScBz9WKdBt5VsbswxY8GLrpn8GGijK4kbqEKB7W8LoTsX9MNzEQe7ZcsLjZZZBoQU",
  "key29": "2wwwwskhWC3hYutEbUVCroUqDS5t1pzoBX4Xs9xKzgU6hPGs4pkKTtX1MpEukmZPu1GiceY8WZf8JPtc6igthapH",
  "key30": "B9rRMm5jemvCt4Yb5YdWPS4RYimN9tAsnxwvpbXNNv5mWJ1VqvdC7miu5nv5Ckd3HSsBjhaU7d3w7QbjDPBoMfA",
  "key31": "3iHtApRQ3ARWgS1sDwY2e1Z7iZmZHsAPC5P3kig3Vtqr2wYXqPRWoUcq7UnHZuDTnKHWTnVfEzmVyEtWGymKDAHd",
  "key32": "oDQ2r2cEuvX9nXxdjWmSj12YiTUGNUeEkHDCCeXjc9e14PzRLvgLo9Ryc7zxHMiU9W5X1Rk9TdrjuHvjsnsyHJ5",
  "key33": "2WaYovNWnaSe7V7bK7rwUmbo7cZAYCM6AbqXYeTn6AeePeqmpev32N5usgQZe2m9obCAxzDPgR2bb8s1rTYfvqYg",
  "key34": "3rwnvvkZCjHrbkM9tfhTBrbvWS8XTuNj7qZfhj4YH7NRTp8fmtTt1u6aRTYma3JGYwwuc6NC6Ye4smpWjf9jMWPZ",
  "key35": "2LxuAHm6Qbu5mtivwsuMx3PbU6HEFN5PTcnTY8K1Egg9KbKgePc4TpXZYkGr4wQFhKXaQcua6VUtjYotDTLS9YVm",
  "key36": "4cD3GwEY5vAiMyAA5ucaFqG4SyanqLXu4thhfw2vvC8zu14jcm7SUU5t26xRVqmuv7w5j9PBGph67RBtY7dy2gjm",
  "key37": "44bi7ziqxDZAMgHBbAaY21wgkKxqgefirJRtfLYQXoJcoox6hMQM9w97csbwBdRBqpNkhvLP1RUHLgopta8JAgyK",
  "key38": "2mSEdmfMF93Qo4HYsn1ErszU7ufrVPkmHLHEJAJRtgxMcHYKK5rCQgztMWSJDTVehJHJ51XDZfnxE5rXFytqTT65",
  "key39": "2XrktgkNAStiMo1aeT3yTYdB4pTcHxFBypYyc4di8f8cSZ5eSg9xZ9anASuMuWFSjiNMyKDgRfiYcm9pmMnBDwbb",
  "key40": "3sN9b4z9Qk1QbH34cAUMJGm8fH8f2TuTDvS6VEaHJjtsMoxfmbP9P5YRpizrJSmB2mDqnbafw6eJiMMrxipkhoVh",
  "key41": "4LUjHadaaAjUhXTdMGKJPcTQjRkp8BBd61NkJWczcJsEDWp4UQPMGSgyv6XPMokQ1EGcnrj6Jo5jzmqfdoRY6TBu",
  "key42": "4RiSRiscepb4aYCyrUnKKwg9YPiBSDjWJPYppYo7HhaVL6M9BMHGU2P2VC21jrseHqKb1Wi4qJKfRSgeJ6oEJXER",
  "key43": "3qtD2GnVj7KqsyR9TynycEy6tKNuYvBe7rGpiisaMqHiLbUUTL2Y4iHSmvdrNAnb4sU616icSDcJ8Hy2YP8h44QM",
  "key44": "3MokcZGv5Jn1AHvJD4UPc7PTNHth3Tpt3XhMQLktj1tmfPwL1rUHvtKtxWT1r37RH7MHKiPqXTtVkyPYHvBNFeV9"
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
