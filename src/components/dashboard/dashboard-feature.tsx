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
    "oLtJSsACanHyLvxKRMczhrekdjbKEt88w6A2Ez9XcAtvNRAPqYNVRswgDd4zBtT5HVossjnzU8vJqVRHhGm94VS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HQ4MWdh3Hjaz2Ska5kCxYav7X6Lg58b9w2myLryUmpSYeYn1HEVqndLEvxMKQpkKgHkJh7XUiZTLVBDMUxwr7SD",
  "key1": "4JhHDCyCh4948v2kzZX8rmc3pynuT7wn7HCcAkXEqrdzVxEmyEdDxQZVhKvEeyJBtyK76asF9XvfY3MpzQw49R7z",
  "key2": "5q5hWZq29CBDdJ6QoYqvpkiFPnouF8Nb8BAWb3WvG8ABVvz99S3w7rTYzeezXT32pn9yCTzGessRMBKtQtb1AiP7",
  "key3": "3A2VtgXoEUxRuhPdPTPsLgDnoptHxZ7b1shGsTB15C2KmywocYmqBwi1kCa9SkNirHC7qXTFYX1KrRHhR5tih1GK",
  "key4": "4B2KmXHHnsTdr9hMs4fWixteGLdo5XqPPBHTpDrAngRQHuLHiBu4o2mGAndteLmHDJq3qNxRaDnLuuD3VVYReUwx",
  "key5": "2JMP2Xk7o1bYsVqpFSLkoMbGB3YadVAqt6dyjRMQ7JYaE4g3GwGx5VkBsfqQqHbDPuYs52RsySMHZgwzMZoS3c4o",
  "key6": "3Hx6sUK9MWGD8pfDSACsPWMPaoNZ8kWQ4d1ZPQkKUwQRRrRLEozpb1Y8Y5x8tBNi1SyAGWzC9qYG6WuahVAMHNLQ",
  "key7": "SKFS3vc2RnSTPwocUZC28AScGRzv2Lh1CWm5TNiyHRLRUSBsJQeUCrrxRt7DhmUb3Jkc4TeVQoX4yer7ucho87F",
  "key8": "ZJDbWtVzC4Dx9WWrT2gDaAMyPLEcJdm8LRqyxUPpVtpVi6g8Rmh5EiZHM9UTRPsZg9Qq9oE12SYuKxs3aau23tU",
  "key9": "5mu1Q35nyaHRqkdsWXvDoHQcY6F8xiPnurUVjqVtEjLZ3XthQPrFe5FLrLW1Uy6KZTASetUeqXdHrSD2dboXSphA",
  "key10": "aXBnDVxMqMqJWXEtFoGHZw8ikHdNabdwk1bA8nMQREZHTyvvQMVcQQs3CHCeREScYtMrAeUGTEpDB7iD7ivbiXY",
  "key11": "r3irMnwKQiwWcp3Z4wgX3WVEfrB5HuCvSsg2fGjKMedYWDXLeUG4vnhU4yQxGyxLV9TytGPDkvkG2YUsJzYnHes",
  "key12": "3hP5Kqr2ZDcs4LtqN8x9Misevriear1qBKACvKee5c7Tvmkkn2tRx4exKxgakD3Y3SaqhVeyLoKT9fedoeB7gJ2x",
  "key13": "2pmoCKzn23VsGDuxXwSpxTZHPF6HcKrfuwMev9n2yVY98TTnYkM4XbzKyJvGzz7DqL1i9wNPzoZJt3M2gTrUWj2y",
  "key14": "29J5RZwJy33YW5TpsoK25mfktixhZQTsy4jQtFgahJ5SuYuiWQwodKfiZMRPGYbhc6z2dwfsXLTVotPoZtqLjB4M",
  "key15": "565Qb8kSht4UpCY4zovvj3xq6FMQnaT2vx3fRWtRSuajJZvUPx9hBaS1BnSwnZf5g8NjojzrukwJmHjo47WAg64D",
  "key16": "2x7zAKFHBYFx9qGe8JiQ5BqFkNqT7uJdw6Sjj9tKnBxrbTuAwZ4nqMi8c5V1AJXZbX7NdjPhm1tNBRJDgRjjGnQm",
  "key17": "47Zt2nhtvWTcVCsZ6titPqLMFxx3xwzirNRjPaWeQSCYjfrcDoZ5nLyg3Nv2icjvac2z7EuazGfok4NSmYPVXFzG",
  "key18": "43Jtpq2GzxsES4KJBrWL9oDyFwyWZ4tMXct7VZxCgnvoJ6ER9qR5BBRwwUGyqw5QEFZMb4QREE5h3XyU16Aw2g1J",
  "key19": "25kCUoq7bNPJ1if9tUzmwVmaMXshKwuDXQx8fPQCqBLpHGuJbo5Nj3evnMaRQ9HcDdFkT229fHRV8JywjfYddmaX",
  "key20": "5TPKBkbWc6ckPPQx5kJsR3Vf7ifFdDemzmMUizZG565ghNkzfdwUAziQ8djhtuCyh9sMVd7G5Hny66H5QUypkFhw",
  "key21": "5zgr9SiXMCFagfaYz7dXx7n8bozGbPWeddMBKU5WR5D3Ns3Wa6hBe8mpAycP2WL54TTxqL3KykL54oBM7QdBhUz",
  "key22": "3TNToaXgEmGdPHcCFjbCMhMBy3cU7286Vf9WLeCGZEjtscYEdPj319NkhqR997K3J4NPhG7y7Zzo5q3Ace9F3fch",
  "key23": "2pxb5pA8g2dp4xmrStaxoXqFyLpaqoCMBKEYrqXKGoqQcRtDpHzWZH1ZW5T7fKqiNRyA7LXrq1mG5tgHo6ZJVKfX",
  "key24": "5RX1Z5v32EEp6mYfv8GeHZ6Y1YkcoeoLVf4nmh2CVCJMx3Mj7xb74KXudHHxTjgPGYBWPzhU36z3Jkfdbw6HrYt2",
  "key25": "qcdHmDoKVehK1MTf2XLruxwU7wusQnYUPpzcCr4wCuPjx2bV6AEWuvTANV7xFSsBqv9Sfod7GFxwAXEj528rAAf",
  "key26": "oCcFwcmX6Mu4hbteBipGxyDZpPHw7WSX8hE8P8ZYjoMV9odFyCjJTVa2ipuvdqvSFesbMHSztnxx8MXsR6AJRSU",
  "key27": "2h4M1CgJzn9AC6iFUWpFKCsuHgvQacgxo6EbxAu7JkCMwgM7XEQomTB8yc6BSvbwgT7BXJTYCKc26L1tktZe2Z2w",
  "key28": "3YMWs9E7tRk3i8uvAbQJSeA6hKU8ZtrjwLi2ExfvYQU8Bfy5GM6C3FJqLiReqrgqTMv1gFSabFMFsaiW84R3Jcv5",
  "key29": "2RyEVTZ8EDLkZ1iAra8cb49wMivmPKW2p1XxV6a6Mskcbq1ssQPJj89PwR4gmXyv59TPagwz1mBT9rS8XWYjZGDh",
  "key30": "35ZqKNMww79JmuGnLefsJhhGBDEfXKHYuxxzL7zFhrDggXa5HcCrnvwLH3JAFw43oFVjztNovob8wcW2YZcwazAk",
  "key31": "4HBcW8GQ8sU81ntGBFsbg2ZVwznKBgrp23C7zFJ8Pmz7B51LyBPa6FvmBU6Pi9LfL86UzRGZ6NFr7b6HWKcmjfwJ",
  "key32": "35BT8hVrd1fcee9ZmYLmbRYyADN2hszf3CPK3VaJAiBE8Gk6u1kD1axttdTGGFv98WyoGcdPDWVjQaCh31rLBZD8",
  "key33": "5coCstQpwAEs33MM79ahcefzbprm8VNZzoXbDvLWC3SYGiR4pm4VegGUwnaYuG18kZH2dJ2SoxKP5VxTPZfoK81K",
  "key34": "4ary6TuBfNfU1UzV13dFPAWorFzzkA5BoKew8xCCBjbiMpHoiWfsgArBoVjvZw9tU59pkkMu7ea4ggXbcBBK3BDo",
  "key35": "3h4LNbyp3eyNjvfDWfqB4FgwZAuXSr3yaK5Afr3K4wTa4QNgonHx9nujVGCgJnDbNgong5MoY9uoNxVbMGtAd2bu",
  "key36": "2ueqMWz9MEyDMd4qZVvvt3hZ8VY177zMgAcP4XUTjmDnQVYDshBncQYwfGFbKsVWJzGjbB9xWLdYFDWV1fFStPxB",
  "key37": "3q675w97xDcEWDWcC3YF4rKDZtRWZQAesPSaA6LieprcRPLSwmsWc8XQvYqDmJK9RXBgfa5ytdQxKSrGB2UbutCk",
  "key38": "66r5RbSNjH7LbshYb5fpjDnPZcLuycTYEpBsZmHDebhrSFeU2VLUjWeY2BD8Bq1d5GSguED5JHeAZgHSbbXHCXHb",
  "key39": "khMJY7GfCcNkG6w4ywKSwW7CCqcRYbHYFykKjdScHEbkVciWb9CpB4pD5PdoTtrEUMUADwAoD4o9izjxCb87Agi"
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
