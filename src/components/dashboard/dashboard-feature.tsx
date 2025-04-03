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
    "L8kVwYvh5bB7k5G1ZYeDx1FFgYVWpx9qdvQigPqfVxhKNwAX7Sy5iZDCgW7mF4Ds33oDM4ni3WWW8FGu7CyojMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44qeVKdWdECjpBpUv4BaCRCKP5hkeTvvmpRM47qf3rDEcgehwZH7FSGngqit8XAj2rfa7mFy1G6qot24RMA8DaUb",
  "key1": "5L9xwhA3r1rk4Gen1VEVkyKHiNLE8oQ3maCc1ouG2EKQ2tteZQFakieEeRxgssZUWsgEtmKLxHtQbgQheLck3gy4",
  "key2": "3VAZ1C6EMfMTCJfUF2VknPYszrbjiwPSi8a7pfd2PtwA51QDok29VgqQY4PPd2wQTgC4Qt6Un9PDLB8cmKv5TSRY",
  "key3": "4mVqXqtxdvRrh4uENBDfiuH12tySQTpB34Hqh5hHHUCA48v1G5ZSoTHYPRFUwUTVx2ogDcZGnKU3CmAKxv15esy3",
  "key4": "4vGEG1ZyGrLkC5D94eF5K3YZZkdkzKPQf3vAbqURd27uWXUdhjMUA4LPSkz3jQ6s4TscESJqYoaVD3t5nZEcNwgr",
  "key5": "4G5Q5bx7tsNFZs5oKrK3R716LmDLxb8xdh7mVQopxXvBvFonGrPpSk5pH1UJh93kRNWxKvqLa8JuKkkqKkKJWNQP",
  "key6": "34tCG8L3dcxpE1AJr5xgXdPVPxFcQE8v9rZH6yhtUK1mB5W8jUSx3P6KEF9zBMs3ApFCYJkAdZ9JUpuSa5XnSfPj",
  "key7": "2a6o6ybZetYYrgH3UWPGNbt98s9h63EHEMPoYoLWUpBE7qpp3VsM3tA2EUwcd7EqwLAYTKYDZB5b53AEJKqYBTC1",
  "key8": "35N4T6sNe63qaP1XeYzafNPBgE2Fm23JywCn79vnxmofFvht3TT2SuZ9jwVLHTmD1DPGsGSJ4Qw9E4MeL32ECzyD",
  "key9": "4qQk7E8eMQZn9gpL165PHVeHiKRCc8vCkA4LebDKzPWvQwH6msq3vqXKCifJ4bXPk56c98VCUUCYNPpNcL2qKVEN",
  "key10": "354YTFN2AGuz4tsWn2Exjq3iX4W37Vmx3P9opasMh8RvBxJBN4NczxdWAxfydA4H5Ryxjj5txXMQ7xGTpesEncKT",
  "key11": "VC6Yb2BGiMH2xfmQXhBQ4Mu2xMZGVwAJBET8JEsvmEJDkkvosPPuMqfV1oeX3hg3xVRyAweMVuYYBxjj6wRrn3v",
  "key12": "vbrYZwn3WM51rV6LStdhA6T9175nh3UKqgVeP2c3iCWEB8MarpTtyUaMSbEX8gzVhB1p1pqHUPcEbuB72LaMBPn",
  "key13": "2x6T9Df1HePKvzVPwZFGF4ABkP6rthSUrJwQVxyfzZyCfu36ANuzkfC8FoYbJMgcZCEUfzTuRfjVwAhvpj23krxE",
  "key14": "33Yz4sCMAY91u8RfBUC3dB6sRrnx4eVtiDwRV197iFMYDpxPUQJ7Gq1AT9XKkRM7B365aAF7c5csmUm2rG1ykoU8",
  "key15": "5CuZGa2s2D5aLs3FpH1L3rAhxcWMSc4QeZvcazBHzqpnC37qr7Ssywz6oXSkJUBZdv4j4TKcj9HAEADJPrNsEsNH",
  "key16": "4MDVS85fcyoX2h8YRrQsmaBRwZtQvcHbCDdzGvrqAdeBUa3hxq1mySt56ckj6LXGfXGPRRsLvihg715yKBwGb5zL",
  "key17": "2fMXqxVsXeWTB5EdPbLRuwCgDxN9VQmF4xav4u15yrYTTjYznnVtfQwNzEmvrktFbKHmKU1tsXUVSoM8yWGFhT4z",
  "key18": "4nHZ7x5bepQ7SXU4nntoNED9htmQ5Pr6Gx4wQTECCv6fq3Tgq8Tdf4ceFdenyMXPcCA5pzcRDquKSH34MvYcabAJ",
  "key19": "2XfWPBQPnkQt8uboyz7rpHekm2oYpVsrFG924aJTMEqZapp14h9u7YrXEecQJhq5Uds9egsWZxT63eUx6cLMG86G",
  "key20": "2aD9eR6CNWbL6xKfmty68c4s9R6sShDo7wkFXQawxbvMNJUEnvEhNjR3VZNDaygf1gEhEaaFJpWiQCvwf1qEcBF9",
  "key21": "2n259sr6rb9W9zX6ndwwbpSeZG4G8SgrVyRGdmVBAMyJdmsquLbJhVxZvJQSHzFsqXwmWrip2Qb2RHrgoLCaYX6C",
  "key22": "4nV7wRKE4X4evowVkrFBGtPLiQZcxXy3pVSBYP5qozEuBJ6pukAUPBNqv4RfKgft4xge2fS7iHRGackkrYhCiQNw",
  "key23": "4t9GsiqPLfWTD43XyiLWD6mVpnwiv3kUrvJHM4Zz3xRXP9ZMxUcyKxTuBzbUK7XFcjfqZ8mMc6pqMszZaL8FChhq",
  "key24": "9fkVFGKymYtMuunBDgKPY8M9ee1boYTisk1RDie3wjmrFecTJLQDNDeEJ4mvo8pD2U8Vyiyto9GT7cEbh5BZi9s",
  "key25": "4J6GxNsxq5Wo6BZP3Br5yph9VPsPyNfBMSrFhkgaA3wFogwSFXaHCenPfiaCCw8nW2miBXVfe3KWyZ7aseSH42Zi",
  "key26": "1wiLnaDdf2fiGUGHnEAdDuPQzfp5nGHFDSL8CzzKc3cThP7ekXL9SD4LFna5dCP75H7z18d6m7apR82qqUPjnfD",
  "key27": "5YL85AKxgF7ZbWcKdEv1BexRPoVpQR3gtZzin2VeZ8TyTuS9FLp1TmEcNgN4eG4QaMUfj9VQPbWdGAPzTSuUqF6b",
  "key28": "25ETXYa4sUsrCeuWhP3uJb9GtMedVox32GHWiB4Xqw6soQQAb2YWz9f1tZGCsxFRGZWeJhkxPRquD6Pq7qKFJiQS",
  "key29": "4rJV9u7wFdN7a34WVM3CVp39wDRA859umVSv5TT6GfZbYf7vXM2SG1Yiumkz5oXtncs5wUT8xbFfsTY2gMLTMGQh",
  "key30": "2hu2uz1NW64QKMsywVoHpv2aadfuQcxnhPis7AGniX3CVUz8st74TeRRkeYNQufyZDRhg6iQxbXPA2hH6yYEDw8F",
  "key31": "4oF2KcgKamRSjWEfitdFXRgwVjBbA7a4aavcf54y5PgJTL5GSaFFPXrsVBWWfDpHiQnCG6XmGEL3vd6mTSGhHrFu",
  "key32": "3JtasRxdtDtKmfT15Pu56zPBUg6pjEF5hYnimAJMaAZq2J46wFVQ8zYhBkXLHikpf7eNadAYkBJWJr9Vyb2WXwzV",
  "key33": "54FD6Rv6LfbB9vFhZuDxWBXy8fVLNdUekDd7UzVU92FkHHimYcBpGVMgRmKeyfQEDd4Yzg7fiNQYhZgT5mKekGAL",
  "key34": "3pto68ddyCyJjjA6byKASWUPchozpLq6ecHbJg8UAryS4nFvmWJN6J846S7L4LgL89W55SjhGcE2r7gReZ2BPMgx",
  "key35": "hRehrncdTfAcubUbsZFUQhMz9HgN8UQQ3ti6k6ccYexkB2FtmHBu4iehuWn1JT6iuNCcQ89echFNJNSCssSYjdr",
  "key36": "3uDBuh82LS1CKtqsGq6vbPh7opmdgfaubq6iC6uNUnFrepGB8BsvDcpP2PbgYJWmozKybc8fgPWgPUqfArpVi3Z6",
  "key37": "25LqhcZPAK76T6TMmMJebAL1TjqC1KUmSvd235fsQgE22SBEafLcxwkykGoZcJeEW9KB2HsnrnrGdARXMr39y4To",
  "key38": "4yYFj6FFWKk1jaVdEHZVd5VtzXs5Y4tWQ5pe8xfB4neiKmDBWzgRVJj2ATRx96FWLuBKZ1SCEadbboUVXNnj42HW",
  "key39": "2k7dMHXBGC6xiv1qGqWXGEg5RqNo3n1joQUfNdtqFRBTsW9HPcSPgxUzZRD3rwL4DNQFCfr8UgoNFHYKRn1rMxtY",
  "key40": "2fMAcVEcZMCH5wMKfdJsGJhbvkkSgc7j83kGh3TwynnsqC4XfK3UgbtqVk7hMxyrNdrsazSpc1QyCGCXn4zTmxhe",
  "key41": "539wKQ4PkSswDtfNog9uLMipf7jtb911miCi3uHjzgLFZJ5AWfBpJUHbw28TF5SvXwaCu9DNujtM79c6dWJe4xdB",
  "key42": "3CXdVBhiP2sYT1snha9ycUEiEYo2D1quzfHZXxSHAxcgkq8mjiT7GrjuJdUurR3mtdGnKmBz4zRtKUCN4AFaT91Q",
  "key43": "3JpVqtCyfofuVQykytbnZjrsZZwEDLGKq2Cc6qsZ6jszB1opacxvsFQy8B8FKSYsU85Y7z6Y2n1XnD1VCsNSjKkL",
  "key44": "5VuwLWMmjP2uLqUCwVTWZoYGZesf3mCJ88npynLve6e4YVe9P4bASRhNydgVfWbxBP8sAQVVQRkxvH1oebQFo5Vd",
  "key45": "5Rijt5VkAWUh2WWTQcAxmJVSPM27Jp1Vs2Y2xN73Dp7wyhZb7P6zUAyLGmTVCvKJ5sTSbmxvzThtcKc86eirF6hx",
  "key46": "2ozTWhkC5CXXaJoNDjqGgmsrUY9LciYgabwRVPFoCnEDaiax1NnwBQspqrwoN8589H5qyYgWwBe1pcjgJzwyd5fV"
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
