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
    "8aA9XtAqooatejcgdmvf9hharruo9XsxBR1F9S2dfGHQsrfAGg9Vfn2QP6YtrfkyztDRNA225nQNoi4h9XtMd6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m3N1GwZkNNgrTfhoFQ9ZZQBnFryEctYcEjo9uJNoLNNdnHz1urxsNCXzD3xG6gxT9EhqKjcZ5N3cKSG8kERGuUk",
  "key1": "22MyfvXVYWz8cXRNPDRsEKQkzw5uBnin8BYaZnccTEX5R3pXKg6M9pdYd3AZB4kR8vJLpP6GahV3uw2RaGnz4VMX",
  "key2": "43Xyv94tnEF2mKVXSDY6HAntKx3o68qgHpSdiNsP3vEJSWwF5msM8Zkd8CE25i15jNTDLVvxvZi5hvd5uDchPSjG",
  "key3": "4tUvgFrSoi2KptxczAGHYVx3t8tFx617vk4TwRGdoHe8Piz8Pipd7NpNF7nDNZGFp5as6UwYQDSiXmpX89XdnmAX",
  "key4": "2dLsjAKpCbPgxxp2vp5Z6np7pKMi3h97xZCPSkRgzVE2Q3fDrBfYNBqKd2aGkQ8hj9bz4M93rJGRs9gPRjAwQNgu",
  "key5": "23M9BNtHb3jrCir354P9GD4aPF7bxyBd2TQo8UhVzoqWgqJVaevoRXq5t5pqoBVrgrJTsVw2eZ2SiZH1FjQZzTJ3",
  "key6": "2eSYGqU7EiWCYMgXpswWNNfJBuBw39NG4vyXoZU2EUvm8V3oU4SkxRaUsdrAUdCLC6qtgdQpYw7yHGGpyZnYkqWz",
  "key7": "3R9LAqcKCMDLhM4huzWuhiJwNG8miNdDR3Qn2JhX6EUWAgCaYCMVQBr8UbFf2rLEcgW1evDMXNWHfxWrCj7tXEWV",
  "key8": "3V77xhbThhTfdszqJMmdVh45SJdt8ijUwuWoKMr26kCFThaFiVokM8CNSq6VmSNPrqJJkAMqgebjGWTWLgb4hLVZ",
  "key9": "4D64Qt7xW6ws9dSZsrjYRKH5ug9Agz6zizkMi45xcxdibEyna9wnissqUQRqxcNmLTGpuXZY6GT3D65xbgucbQTL",
  "key10": "5HYYp4GSuZHcGkHkGAMzVmpzRwP7CdNfDRjZvepJa8a5bFtLtwpbw6bRYe1KiVdELQd2oHhnWQdfpCCjcp6goYkG",
  "key11": "2rddu15zp19ZXajmmiLcnc5XN7fDuRU2abeqQLW8jx8PEEmSFPM2Z5JpBds2kuC3wrkM4hYW5v5nNTSwzvBnSmvX",
  "key12": "48HsE35ThUq5bKtrGKFQrnGCweakL7BqqWzawkEtgP4QQj9yBkP3qV9TAwUbLEtmExCtGqnAvs2TVZjWyGTqYmeP",
  "key13": "5nFALB3G7q28Fy4K8HCJgbbGn9i2t7yHZjjut723tRQWH5ZzcGX7s5iBSsDosP5gndtHX2hzSBQwqaSszGFP7P2s",
  "key14": "2UVJBvR8DhaKBnqf2CC3u7wFSFDtnvqPNGMS9S6yyDS1gJy7qMwyvLoHV5E4hviKB8wViciENvchtq4ePiYEqEuF",
  "key15": "2DDt66sSxBJEN6XG2y4MSv6qvjbXAQtRk2ofA4VMzkubqeSRZUVxMxr2H9TPBYgr7NBi7n4fbCukz5DiPGoE8AFE",
  "key16": "2iHdXdpeCuxRCE5pPg2dZKaNGk5chnbrfW9w9ZQFy22nm9eZLJ1bG1tsZskiMRHrhpFxJmMs7hLmiNoULVCk24Fa",
  "key17": "3XDJWB4h5Dt1sLqQckepzDrPpGaS4KbBxrvDf4QPKcNM4e9csHvN9nnhE4kDEtJHJvDQguQCWG2dG31kTCRNXji3",
  "key18": "5XzuTA8uEooYQxh8VnKt7qZriLWaYyxxZnZ15Q1QWA4ghWaPJhYyr3CDtaoMFNo7H1e6Gt1aHdKs3bPSfKDXxynH",
  "key19": "DPnt4FTUyhpbDbiBpwDDG3HGaGt5cFiwzxnr95YJhYSHMQGogYo5yuWr2gSjSpBTQeDkUDV3UKfUUj8QRECHJHK",
  "key20": "3PWrxbWKhBh3WUPDNFpEctjB9SxwRFWjKHQfW91P6Y7f8LyLjePhswGN8TmpermTqeLgHLNPFD4BCkNpg1djh5J2",
  "key21": "4CPYRHF4Bc69E1V8p9TJdNftk4pqmCXm1cUkkukPWw6Jk8wwVF6yMNZtUg52X2D8K7nYP6oYYcswwgfX218fquKt",
  "key22": "2dHCbYmt8ABqEvNB7Q6Bj1Fy18fBjSUsbp4dAFpa58Zwe7WeeM7FRsaGmk9QNhBWrjoe6d3xp1xbRj3jZdfRN5s8",
  "key23": "3om8VYMxsALRCSNPmQoPtU6ELQVDA5zM5fJm2LAzmocfKLtdyWpZxxLajW2popEBPuku5mnJpCkh2fmdYjRf3ZQ3",
  "key24": "PfWiUpjtPJQsZyUTX5bNByPmpPc3rTCJXCT8LZG733khH7z1TYaiefyzQa5x68HHoAuM6L9adyST1TRZw6ojFB2",
  "key25": "4mRfz3kqRXSauNPJHJJCmpbGZASWmPGg3GTmsGhSTxikeyX7EFbfG2m6PUCqz3hvCbmBWPyJiDtduAPstxS8reYL",
  "key26": "4Jek9HqQzgcQ2r1iwaACULpEHYxX5kjL3nNdcW1L1n1AiynaGquFWvJ7kwbmBywEKyFVyhdR55eYKYCCyV1v4T8j",
  "key27": "55f4eK1FGkNGPwYtDc8uxZx491eRTUtS9yNmAZLFds2fykMCwHo38FUS77TNL221PQhvcAmCLjGwftad8ZDHZHG2",
  "key28": "3iiF7ibcQg4e6MCPGnFK3Vo9Za3JGhfT8DqfgYumAo6qLqktd9MXtYfjXnDQhKYpbAd8YWtrXC7kWReRXarc6sPC",
  "key29": "2E82KgtL5cf5ziiuVBaUhrFHi1yn8E2ovFD6PPC6evhHpsqgvNDuiqUbehzhLu37GyPnJoXi3eZV5MTYAc6Rt248"
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
