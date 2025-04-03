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
    "2rDbJZaLmbeaiBro1TrJ2RFQ4i2nDYiojXP8dZyRbZGkj5iKtNEaPzMydDMhz6ue8n7ozu5FoYUUXD3d3KWuoHgt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zZEWj4pBfRUh8FczqHLg6q1rgLLJb58Te5zjD3ZJQEXhNJg8Sr4yqVTYbTSXKCbzikgWmnx8jg4ejtmKL5WbMtW",
  "key1": "CNepgXPbmkdySmsPk6S3HDuyezeR5L7L5xb7haT2R3betaCg1fmwzGEokUHhXDEexr4cdSa7QzLX9mwwPB82tvz",
  "key2": "cHjFSzbX4G1qENbn8nACZ46bVPvGFV6CcMkN5vFoXDArE8j8c9FkVGFQqPbZAYAnQEAZZy36YpfjjZwr44xePCD",
  "key3": "5Q8zBzej97Vd7N48iwnEkiehro5vs2LfvDaDkNjUYWDEruhfeN9LxgHrM5Y3sniwE6dztrjN1Zor9EpkinxLzoKn",
  "key4": "4iP8ph7nXbqgdq3ayEX1XxWsYoWrtvXKz94UFEEDrUhZ1BssiHD9na8KjdxnNAQEW482AHHiKKgjaXsdGmiXS84s",
  "key5": "dyBmQRsBHor8ob8Rx4uvNQKGfjf58yeYnCbbJ2C9QRY8ASfE6Ak5wXtFzieG8Sn5UZJubknjXS26H1crByBW2jV",
  "key6": "2W9o4gRiZXt9Ea6nLZq1GPnNWLEPXQjycBe7zFLGah2grjvYge9V6CbqETawWwtoew1A7DprBHcCUtzmDv2TXZMu",
  "key7": "ut8B3n7pLqacq5qZoKJdzxzbunkMmjjaonWfgGwHcXTgnyvpLddNY4SbaHDJ1YvH8dtEPRab6Yvj2bx6zZ9o3x1",
  "key8": "5XfY71d1v9fAGVfT9Y83bg5BSiv9X4uBoHmgNsWhRgDq2L3YaVnbiX8MZs2pXbKxGz9MHSHXSjy711nUSuPMgKVN",
  "key9": "2cMxL2kmTWXVVPdB788ESvfucuUNavRTBQmBigVif2amrppubUJUruywHsHQWAtCgwmkA246BjVCsfBKB3a8hR2w",
  "key10": "4UafzySfYEFjKHCtm79oBy11T1iX1MgqkjhqrvbEcQx7FyPJ9jxM3bJSWJdPggUF6FxVXbKHXeH832derq9CHDmL",
  "key11": "33WtrDR1bWExq3dcBUwj1Pu6YYAkQDsVixAqJaTwBqUh2BRUyVNiuPhTDRWf78yaRExHuv32cCLkBmt2n7XVzm5D",
  "key12": "2saUSWhJKH8DhYm2F2k7eaoDuMrzzuwyGzAq5G8qFDz9u1yfRM9rPKd5ii8SAP53tJHvo2LXAqPxHAHRoU2UVwzp",
  "key13": "5jQfZ1xY59eWmRFZ3zLui15Jqsi6kDEMmpLNnJDrAu5zrpYR5YswhVg2AepBmGJdtDiVvox4w6odsKyW44F5bwMJ",
  "key14": "5PT9viGYUPTGEHG1QDVVQvhzkWaBp4UenLT4y2Kni3jDC23WbCQUDW7PJhohPvbcha45CMoMQHuPD7jZVsugEJkw",
  "key15": "2r1p2cLkdyqEXD61Tg1825YSFtyj7QegLQH6H9QxgNb4d5KZMeVDLAn3JZWYfhQaKgB7tD7hfVKmLVARqTkMBePg",
  "key16": "5Z2Yf4KnRUFj5GuZycaWRF1iqkJ282xWR1aCqqUjqTREhuMFsDm615jRW1kPmyHA3E5npYXrAvvzB9zuEuRvWSR9",
  "key17": "gr53eDUFjToXtRUPP4DDaydSPbfsezGHsFGTt3aDhVqJDHhCTDzZBgkkbBdsi4diS4bfjUurxaF7hqMP9JS9vW6",
  "key18": "5bUkBYrEsxB8A2ijuViDUd8VmbjUXySTN8xee6C8jqaAErf5fNW8j5G9Ri3KJZ5coFxrmsMuix42PC5YHUVQg3Dq",
  "key19": "3rc6LsDvdrsyMUZqJ2Bf557Y7kssJv7s8wZtimB1MXGcapGatXQKAmBMjqCk8Lmobfw1Z7dmWBjozTKnrEwyTEBb",
  "key20": "z9qYtDxriFL4jtaWWHinCQhj5HpmzXQL9FwdZQxPHfPT2egngRoAgaQKXQFS8UtcoTJ1bFQbS7NUi1P6bFQKFfP",
  "key21": "5Dpr4boYmufRptLhgGxumzFWDopyvaGmnnJFvevZjsPz8j38RAszu6k2Py5LUu51wVSntiASx31CwfYm38odjDMd",
  "key22": "2U1uK8xBynAWAsPoLtKX4haSGWJb178wCgi9DM8Sco7KfjR1KDqp4kLTFiEthpbiWiykfULuxy1A1VBBBJJJRtb5",
  "key23": "4qQAdaSaCbqeo5Exjdw5xMyeqHaQ2FoMKstWDKAFZHxUiKYk2UfaYFv8u4mYEJvRcA6nwffvSyGFvfR1uC5NxJNA",
  "key24": "52JLmAPmAVLcDgeizKtG78x4wZMN4n7Vys75oYR6Y8k6RkSsaujqtsvApk1KGUsG2DbS5mt4qSZeK5Q5oaUpfrfD",
  "key25": "4VV24it4h2PDAQY1JmVEARVgojgzBS7Ui3UkMZoA1o4GtZq4rripWJ397EyyGUCzgq8rJzPzUuLpeXHu23RySmL9",
  "key26": "28SLWXhLXy49HwpBDQCym8QhsVQKJKHfdKYe4dG5X8UjFXM3Xi9BFSnDLaAzD9HXzPPRZboyS5DeM482rUd2Vv2o",
  "key27": "3KU6aXSg16Ln9zfJ4QN8NawVrK9bfasDtKFoq8SgymdUVxeXnwmCk9ageFCwUEPrU1ZnDUfY4n6UEFXLojKDS6sC",
  "key28": "5fnXKambgmuyBYiroAHgh1tfChfyjFZGdC5fMPeHSoXf69Tm3YjDbgPcmKLVoh7FHPBSqdz6wqJ4K45NP5NLknkB",
  "key29": "3pXjbiCZ57ZiyP19M9DkkLyg3TqSV74xFVzJ6EsFCpL3jKmcQkvd9bKF2qZ29qtDJtEvsoTLxDu4XPX3Xjr3f3Lb",
  "key30": "3atrw4DG5CdhfrxFdZEYeJaAv8ufUkswPFv1Sio6imNVefKcY6VrxdMkHXgydZcBPV7yxCSTJszvncxPe7oM97qD",
  "key31": "26YMuD35XZekwfpGEUesXY3MNMMqaW8ftQEYeBC9QzLsRfPMqqYsesGkCNsGF44om2mPFQQhwtWVExPFmKhwfvta",
  "key32": "5GFuDKLTDRtmZaAu9FjJD5Lwa7148UB19zPqkfx9jex7MuEoCmrjE6vKu3p3qMUfpTqtMihqSY7FPMmo9YyvNf4X",
  "key33": "2YUd2UQoTJLjTs7D3U4SYwpxwnWuYg8Vo7MnLaUHqKsBoYV6yrfpZbAKdVnhE4Qj42gioRi61beVimdzTpQD13Zm",
  "key34": "2khbg5qR4KZKJoj32gQD23bwipKPJvo6TQBv4YhJnorpT63FMcYPYPPsTx9Q43tN52re4MDxq7dW2SqNmmYsrutP",
  "key35": "66H4j7LkD47ESGMWK2Cw9uus9iVheGxi2ZwYTAxirXsVbaQfBd29243cVSVfuHQMnB6WZNsWrVNNX7h2gFcvfm6P",
  "key36": "XHZcgeVbiM46iJDQgutzyTDMNhVtd6t5v8n1xpU7wCDWKg26jDPhQMy8u9gYZaMqGTTW4tNiLwaspA3WN6dZSfv",
  "key37": "4Lt7JMMBbe9pBriNtUPk5G2LVz2VakffUhp4zecA8CiA7QQJTLQHzgkvoeD7KT3w1HasNm9Tk7scDcBZyPEj6EJ1",
  "key38": "5kAGTw5VUMmKMkQg6pn381eGCbvpYCnEbPURYmjHYeUKvAXszNjUJ2S74hc7ZA9oAmJv9obizykpXTCzz2X6a5Ur",
  "key39": "e5MauJfwHxzC6HDgmrTpEnSbRdVE1Z4viyqWGxFmAtEGR3ALQQyviHgWctz7c4T8fwbVF8Y9Uffg7HttXfTHGVA",
  "key40": "5wZ3YCjcoyVppxG3taDPfD2bLka2xbgYAyZKvzmHFbMLCmXELjn2avdWQxkX3E6XNvwLcdtJbtVWgUsvMsZzqN46",
  "key41": "5wPApiNKfGxgYpuoGxBL6UXWFVDBukW7eoP5EPobtsB5FjbFvUBJMism8Gqe8NaXZeTvvtdDPp9FHKPEFJtrhjTV",
  "key42": "63KnyA9FaJETLQkxFnqi3wju8ZokrzmeJp531ULzvoRkrxTKvoUtxbKN5X1eYes1EgDVdHppd9CqJzYwAYXKwfHR",
  "key43": "42GE7eMZs2gmenBLszxVVzTezWju6Vf3Fy3pQsgqXnG71M8M4J6cwJU8PUs6V6hCT1S93Qxh6s7HmyjWzSXWR7ZE"
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
