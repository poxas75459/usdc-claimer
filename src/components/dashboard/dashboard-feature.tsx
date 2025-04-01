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
    "4uPNYSezhoE5swEifz9npQQnfddvV9C93ML6p1xd2WCxsrpEh8jyWQjptV6ymSfwVWiJswrruP7VxSN52XLErXzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bBDYDwYUJot7PPJSY5aYfRH5sV2q5SU3uTVoEqGuCrENBqZQANvrw1CMfFXDtpLtMuPS28KJbfKihXaZGxjwYyZ",
  "key1": "2LjdU8si8GZKS7naJ9ri1Wxmf5NHKJjVFVesRAurio49RL81vx4KahGcukvYQNrUjWk1Rzo3prvTjLm8jEpgs9Yj",
  "key2": "5vC3ZWHuCrmSh9yh5gkAH3vNwzkkY1iyfQSXXzuAF7CAK6b3utdNiVzTkZFpkaVyqVem1NB3ugxRViven1NuRhsk",
  "key3": "4apvqrWpDzGPGVWPKKhf65o4d1Z8wkWE1Y7uGw5w93y2JnjYNZLfzHsSUtyszMWhBvn3VCv9f5wcmCEZFQV2hZ4m",
  "key4": "3jTt39AWsr4Xc1pSB9tBmin3Y7Y4eq2f8f167jBW4sUJDhAhDTzbpfradMcSfrDMqBaPKE21XUfUV2CHXmBRCbw2",
  "key5": "4NaHjCDwDTun9irjjTS15WCwFXcAVBGjYX8mMuwVfUZGtBcoxYmbYk18oiD4oF2YVLP5weN7oUyifTUeziiLC5y6",
  "key6": "5ThD1N7yGZ8b9DwGgsgN76A76kbrdAZcroz1Xuqp4vuTrqAUZLgJwEU9ysiEPqYUzQNbZBWgg9TgWKMZ7NKWCaWi",
  "key7": "35EQiEbBoNWrRKKTa8AtPd6ZsLenbBWxGukVP2JdKEXzjXgJUefx5TtwLmZWfeaAfwbdeEK7UsagTum1WEc9jNSL",
  "key8": "LLH7KwXQWPfBrYcEVE7yQrZfLFCsneZ3iv6RtSFA3E5MUvNozhNhCFwDdAsUTG5hmTZ1rnG2bYQBeJiQAVf3m8m",
  "key9": "3fFZtgQDPT6EqX9T7KeAkWcAzb5ZcdFmgu8UuLeFAmuaPmhNp3kzJnsB3nVmwtrgNmLBYAjW7dsqwgq6g2oVuq8u",
  "key10": "2sKCXtiBf5QcsnuDJ3QakooNTiw3P1hKZibvxx17VBsRuHqRFUVP5X3MpkHiVJg3LRUpavm9p37bUUJDvD87B76z",
  "key11": "4iND8E86sXrEkkQi9Np22VBHKebXPaauGFKCo2xPgg2uTwq6vdE1aGiFjPTKFYJZgvAAfkg39TChxDGKB1s2R6Sy",
  "key12": "5Hme98fHF3KJomYV9onhcVNP1qDxagcbK5oRTjfs6zD11u5w6tZBL2vP4Tj3BLqXhTBDuQf8kA3MwLonpXKAKLpt",
  "key13": "MwLUHT722RyZPd4o5YPBqJ7yANBsDthhCcfeUpfK4sDTZzkc9efk2EF9VY3yikFBJafSvFQ6ujAJbei4P8XFN4s",
  "key14": "3V3Dz3fRcN6KEmMh2vZpFzGPxwh1MEFcyzZe5quGWjbNPQn9tHRovvPXXUhxkqav39ncDJWbvH1FzXpknCuM1YMb",
  "key15": "42ptqB18q7BPEQ2FqeBwk2AXnfLQD8kLZyT8uRLqSF5G3eeZbKJ5GCXgwY4Ghb73jySNwa1ymhse7dfkSHQCMt7T",
  "key16": "5KhTobubQpdduobXSeRrRxYHqZFSTZb3PkX1b7MgGB81RhvbsRNXe4W5HZhnkSWcavL6c3GFi3uoCn9Twe4u4Rnb",
  "key17": "2RCmNHLMDXhTak5D5abFDYKhfQzUJewtZr8NA1qm6A6rH7ufmBLwzrY3DB8WFj4HTrfYp2yuDCkC27oNE97zC6gC",
  "key18": "4YRf4LsG66t7tSZpJtnutLLAvieQLxSMjG129X4bySrvrZDAfor4NqT3rEDDEVB3aeBx2YZRqz5FmL69hCDVDeqw",
  "key19": "3HiSuaKqnCFmGa9LWeCwUDeiLkwJ326oftZVm41P391FgE5uUxX7kBVb5T1JNm6LQSMtqRxdh7pz9dozjzjEByqE",
  "key20": "2bBb6PDjrzeQk6rqvixwVFgiBDiX62yd6zuwwDkriudc933zqSyCHzhQKh7iudVPnEZbZjU7M8E6Yfbwf8HF2Qc8",
  "key21": "58BuyNxJWjWGc6CAkqLTwpq2rqvZHBVWmcePXkJTabWTV9iwGkB1MwpqthmA3fV7m21JWkEY3tZMuU2aqup7dRa",
  "key22": "5Yc6fRrne6ZTEam96SY59ZX5gTWi6B5ZadpfjjpcZCaPh7yoxq1oWyrrUVU9umkFzqeejuWYCEggF1Cxq3s9JeMD",
  "key23": "61rXgkLoCGucd4GBiqQzstc6q1wtCL5xqjsjwyRLMiT5SiRHzw7BGVmZ6hKbmfQ2NSZNYHsQYU96nYmgx3aeKa3k",
  "key24": "2jLqsrJF4F4ojz9zUFQri9fXVzKo3KcCJc4xhC141pKbLc2u2TcwKrXMn3UKQg41LnuLg4MhBr3YKh48b3bYWDPN",
  "key25": "3bhc5GzxMJNdc4QuAqoi23MgM8jY36sY38chhm5tnBWGGaJRauwEr6GrDxAiscKuskeGDVpqjpUfYHBAba4FdcCs",
  "key26": "482U1cxWhgTuqgo2j34gtuJvGT1dmETSHP9godQvdUisG9pADgG1qXknHKiWFFQiU71mzG76Y9JngfvygUrCQbCC",
  "key27": "2K34h7MzvtnHHs95dUte8fVSx5xqu151kjiHycY9JbALcQ9UY2uk2VVbeDoF65J8F2vBM8EzB3KS6PQnKzkT3FaJ",
  "key28": "4DhVu2uVYbUV8gGPS5tbmJz5zKjnAaPvxotiMLJQHyA95VGpRow3CznhLGuowfoQXcCGY8AjNfsfXYDE6wCUEMU5",
  "key29": "3DUvUZiFjFgpgchKUFfDEW7qTneJAHBbGzeHZ3nT3LrAssbFcqTXUSBiAvaifByjZzaAgYZ1Sj2z4kk78BkwmR4X",
  "key30": "5meym6h7Pqm9N5bE7qBGKidStNdjZh8XxA7EQgRQYFS59Wcbks1UUGguoLJjVpZ6H6a3p3QZLUpaYci7cEHWL2R2",
  "key31": "2ax8scGrxogj36n2cT3EnCbu9T9Ri15LtAxrJhU2N74DV144BSowXfxTXVhyuVzTbgMahHM18vveGJvYzgLZUrpW",
  "key32": "29i4W9X36tY7j6AzXShq61Sa17huXJjDzThikpXEjeHyee8XCcaKMhBJAG8RQ41fpBJBS3RZUxpgB6HYxJQw7kye",
  "key33": "3T875e1VV2XVQH7S6wMHgMqQaSFd2DRa4Zwym5rvbDexL7zHf8xqzTHmnH514KrgT7MqqkYtUUaxGobA2pUZppFd",
  "key34": "55sgu7RTjEYhct5mHpZiT4Qq58enXsRFRnyuZbpWA8iPthFR53Kp7N6Acc54MwwcjnXmwmRq2aJwGQ6YFEz7zahd",
  "key35": "2zmSt2BGH8SshoYxtYYD966AMnumF41Tv4dRSQm4NUMBRgk3tFWKWFqxLNpRKRxsiExpQqyvgAoLmoizomFEpbdG",
  "key36": "54Kd7ir8uaBtuEGkos1i5WBciuZmRhyw4q2LabavMQQUVG8mrRmdw7HYfxhbcqZrFKZqoxMxbpRZH9Sm2jLCqWzo",
  "key37": "2mZCXteSgMbE5bRoPk9bqmEvEdQvidpET5rwE5foWf8q5KMAbnaPQirkiCJH8CD9zNDf6nRfMzjPbZW3Uvyx46aP"
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
