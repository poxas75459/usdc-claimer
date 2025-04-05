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
    "2QzCyxaDUeeARNgFkCxhd27gn67mvB7oEwXFiECQu5P1KDRhzhao9eE3U2fwqxvhTaQAgPMH7d9tw1wU9haF77gQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HYHHhcZ6DbNZw3VERjMT3rufEzCk7eRtYr95unAuLD75C2HpG4hM2fb6gDNFVokGWavo7Q54Wk4LJGvdBuT25fL",
  "key1": "2Z9Ub1nPPoZ1jS7THVbCHSqL2WTcxjiRBKcqS1x59CF53EtsSDaWRnGeAQFKKEVp9pTAGD7cyEiXZ3MfsYJTSYb1",
  "key2": "2ozUBVhQihfJY8bq3TuhQjwLviBtQmDLkiSvdgeDxnF5avWK39JNQtTDcLNKY2eiES6y9LYrPZ1M2bNYj2CTpixa",
  "key3": "3iMzZiz5JNoXGjve74amrfv2qDGosUbgTZSU9KD5uAvFoLGLDhhhEmNrujRMoULnU7uXuMKptFPhLk5ihKkpsHCe",
  "key4": "yjeocvzKvAnKsQqG1wbnbK3cym2yEddiLWYYJRFWC1p3eSDRqdSQxtAD474jRc3oPgQcD2mRghNxTDRPh1rUgkq",
  "key5": "ZJ4qZ8ZwERB1Fq2KakPy9MWybURftAeWSiY4AhTR7penjbo7mUM2nfhtEEfJHdVnSum1BUoqZtxtLfkLLcuQMzY",
  "key6": "5fdzTr5S26Em5kMyJ76XabFQJ9XSBtYFjHRiqWyoKiTTSWNGYJgoNxRqAdmw2hdzCwwNoGth8BdTKnKJwFDxKiTH",
  "key7": "CsmHqCLCZV2vFwqFYcqc7E7kJUjj2jzk898V36BgW78qfV9atsrpG1A4qEkNZ7iddehR7Z3qjj1qaj6Fdey4AXW",
  "key8": "3768EKDPgyn3Z9wuhcjR9gzqLxTbmgzrveEs68mfU5RHeqiQx5xZLMNCxzwSP6WoLqsox7BPLm2CGpndARf6jVnK",
  "key9": "V2KhnV4pFqNsupFXJdV4N61Hmh9tsjPV6Sh1iuKBrMDpsvT5nJHcMj2Q19DZJHYDQre721Xnf4yQywTajPXxMzn",
  "key10": "zxNpPyANcA7kaCadQZii5T6qWmCekj1QAEcJJZVaEV9nZ6EvijPX24Yy7x7sWTQexqPBJaBjZtq71vxBYSUGLNy",
  "key11": "2DoEhcmU17trQpk62Jq6yEgFRdxN6Dt9587eLTcj3gxyDNok8ykXXnBb4o5gxvbvZx2qsFZRqygEBH2qu9oDaBoC",
  "key12": "4Sp6pvZXXCiddx1ALEZ1eEjdduLU1V8pjfHaovn1P5qRxyiqRAYs7Qvu82XjceeC33YoVYQ4EMn9JUhYan2zFwt9",
  "key13": "2H7p3AWYFyVd932fGaJA5T2TEgkZ3KgGuKjeCKMG5VmqpWaBJhYuJbD3KJ2RZ5rsLjVf38hB837HRfYE1XfrZXeo",
  "key14": "e6Yr7FU6T57nhE2ZTDckCDNRXSdmVKejjGCmNd9XooSt2CyDcs86k927wKwYky8nzuVQ8oiamCYHVBvWqU1K9QV",
  "key15": "trKGdjiKsM3EMfXeXeysSo2eaFu4GCHXpAdrZavipuSG3Mk328m1YAVvicYeunf6MaLhHUxy6BvwWFkFvvbXmmo",
  "key16": "pzRwWVXrCcSvs29CxZ8ncgxV9ynbBJCoNZpgWB9MNcMzwsL68qV35hjocN6HZ6FU4vWg9a8noyE7csmrGhDUbx4",
  "key17": "2ApyH86ho7vSGgBsm6VidWW8DW4AKETFhtePwe74KYZEHN1RwG511h1DNBFakHsi9MqeEFhChv3jbLBPn1XBfbF8",
  "key18": "mGqxJ1rbLwnGGBQJ5wYoeNTxrH4WLHEJPqehgDRnfJaLy4S6dn9AMEyuYx4heaCmmHT9jivhLxbfxLAoRAiX5eE",
  "key19": "4C8iVfCvUrbkKjEwydwdCzYMhFiR9jP8ay1y1pD4DaTvYJ8v76rJNFNok7mp8vxbwEVdtHj74AGLmnXbgqL4HsUE",
  "key20": "3rdHN38q9YPiE8C6xn5LvbphzPy3iwjf9yek1ZbqeLuLHP2fguCFLr6BkMUTwUZq1d4RiZjhJ81Eg2wwMsuXoGeq",
  "key21": "3hAdry5QBWaLNiHw3RpMXthUkaspYHwHzx8K827QxPy3Jwn8sbheWi6j8RUUbLhizUjTi4knLvKAEqu7SHfAKrMJ",
  "key22": "66JwBk9fdoSjY3o5wSPfpYEXGRVt7ZW7zja6sqD5Mvs1awXLMh6daD1GvsSRxdM7ZUHXYuGPrsXMYoPQGxjRtqTP",
  "key23": "3GseofKccYA5UzU3W9fJnnsutBm7HP9GcrwKMgqACSVY3txVFuAAUcEKT44fpHY9SSsG195MruKchRGPGyKAZKu4",
  "key24": "4SYNFdSYoy37A6DyiazXuWxSLaovpRB5ETeJVACHxuyc4d4Lg7iXz525hbEetwT2EQAdsAFm77tJJAUoJ6q2nKjJ",
  "key25": "x2NqAxBcouLkbshHogN9iE3gEE2DWpzPNTGZuGLiykhn3MPkwZUWP2Rmpz2X4VSDYeNFrr7NtAkGUamTGFMGAXf",
  "key26": "FU7G9G8c2Hpz3R3vvYoqTdnb9CSc6ZiNFoZd5tGfTo1KFBU6sKQ1KumADj7RCfdrPcM9HcEUVb1wvXrDbvz21ed",
  "key27": "4e5KrwZ1dhQdXu1R5bNRKnRLg8R33Wz7GGwLWkCd6b5cxfTWzLYomy7LumgyECJUs4uQA6Fka8APN9ELzAj1oNzm",
  "key28": "2fyqpGyE8anhCktjiXu5uUH9xF7ivAsWzy93gstRwM3RLkVY1ka42otwQHXWtxsXFSgrSK6tGzndi9C7xJpo89xE",
  "key29": "2Ebx6fJvDdGPwk6GDR2qUE27SJmmhMs3fkizZGah5fpqrAN64pFPCYHtxiu5gEuct3vkemFmTF2eEC7gP2pqk4qJ",
  "key30": "494gyVrzS8VZD533gn5j7LYNcBj8FYC1FpLpknJbvSpomvZCNzxy5zpKmsaHWhu9C9nBcdV6D9tuHq1vQ8Ha3Lsr",
  "key31": "5yhTRbhfB8qTxmjXfzUcVvpQcJYqaYyggT2DZHyt8mvmDZ5ShxWnGeCmMKL6oqoTEgZSYYRoTL8hkatK7HAbPesN",
  "key32": "hKsGHuq3xvjYR5uKNNTGyraRx1X99kPMH3W4QPotGyaR1mgV9mFmrxcT6Pmo3FFUfZrJpv5vkBSFU2jdHCZzQU1",
  "key33": "42Pwrc8e4ncfPQeSpDxZ9uaCKE2TRMwyjYGCrE4xK6orkWod7GrAHqUP9qGFSjt74GF1rBKk1UtXr6Cs3sgnxc16",
  "key34": "2cb3wnS8yvPiLKPYfigjDQsziRCcNCeG9KkXDqyso3C7J2RX7ojYjGeV8MNE4kf1PWdgokS4BVNtiYD8i72nzL4s",
  "key35": "5zDAERHwG34MyuGRMMNnw2aE97NYxZEJ43Qf44WogNiPtd7QsH2jvHqqCJ2JY1ZQ91cPccPqjFcuAWv6n4QY1S3k",
  "key36": "5Rkbzr1aATry9NoSZUxhrmbqGAzs28xQm2p1Wo6rxgc5CTWffHyMPVUfxgAPK48sTg7xscCvLQwgxCmArWnpSaYG",
  "key37": "4et596oUw41azFFBmKpuPwdzeTVFe8siFJvctnfyuzNSJZdPoos1Zs9DQRXkPaNTZTUupiyF4sBSfg9WXm75t8x",
  "key38": "5JfsQtKYfYEYjVMSsLuuKeqZ1jUiG8vtDhRbVVnka8xWsnY5RtiSKZDhAekyYoPFoigqFXKD5BQE9h3cVRVc7HUz"
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
