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
    "61FscGRBujhVUYKSYsXWPzhR5Jztdiq7uuPBvKcbn5ErTbEN4NEqu9AuBPR3K4ycS8oSd2Kd9uHe5LtKNTMPn5zg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w1cMu44bVR2LBWfveSf82XDQDSNUo1nthWCicVZPPoUcfAXYQPtskWAazCV5zEDHnfbgUzKMUhv2oGvkMSTkDZq",
  "key1": "52SRVQHi6aGNR7MaANwAEN3U5DgRc6wb5g9EKkCTqiQgUhnwLinYLrf1HbFUbeis1XYELL9e1J5WQ166shEi9Nzm",
  "key2": "4PWUmN4BoeXy3acUYBgEfJSeFsZPCDSvyq9BagCSJtMScRbjv7wTDoTkKM5JdXkGp9j6xZzcS4GdWr6C1ARNEJmT",
  "key3": "2bbmvFrUMiEyWH6XthY4Ywg8XGqdDvraaLLGzzWRZE6Btes6YFijeCjreFzgKpVpMmGRrXPoLsQKP8EqnKxy5aVh",
  "key4": "5vfLRyDtziLn1cs7ZVLAa1y1dYthoyQV2tYjQijd1ALYrNK8xAYj854HtUuq8y8KPSUE8NywZ1wYW9kp1bKtH4ag",
  "key5": "5M6XHwUWFGWqHU1RGGTinzHyRBM14NFoHtGGPpRenu6DCHSUaGrbeCfwVh4Sgco4DnpwRfLBkRGn8FVfcxBprrUc",
  "key6": "YiDTGEEn5YVmuhzwf8SzWay3RdAwYfLx6L5SJcSisLi5uLxEevm975PqhFX8bE7adYeYvkRqCa7B2xtRTCHFDmL",
  "key7": "4JYNHNxJU2rVWrKnMV57kYmP6movJBTLD9jZcZCrPKATc25Ra2AEngoXsNSvjvjaicEiQztga9FSXTHj2pWKfWXe",
  "key8": "55CgpFQFNAkDqfjScNcYpPXsojMD6bzYXzfL46TNnStDjhENqXSyuX33qSwLNiDw48jRTyx8emsYatCVdkSunvrZ",
  "key9": "2PFDLZxz2MV3Ht6oKPEdmn8V35H4QR4vAXGBBPrU55zEGmnkesGdmr1WMG85iFkQfZgxd5aZidxSrpaSwtMjauLC",
  "key10": "3o33eUijgrEcyABfbEmAG6uq7cZwURViqBeFwG2XnqRo2GpNf4wikAPCiJZkD9MBGbFRFYJLXYjUGgzcxJeakCgd",
  "key11": "tvaAHrfs2DBt8bnJKLQzgba8c3iRfr3kyYfJJxc37Uv9Juz1Ey6sg9fhsvCFk7Nt7GddwznpjHCMYSYNRtaetn8",
  "key12": "4Di9Kdv6tNu8k9QsD9VSgzKFrPGAm8ewCKwuYhnZ95aEbLqDZjBbVdp3fVuzD25QDXSZCRi4FJt2mB6kqpDm9KAC",
  "key13": "3X2f8vrTWwQs4jctzQUPp1uA5hUzKL9Q1xHYWrq4QjUSbZtaug7Fgj6SMoEBPCngijc82Sj7qJxEFEzmYj1jcbCT",
  "key14": "ofsjvE1ThoyXZgaQ9F6AEwKBepdUYVLamUUe1PvNMgPVqFE695AfqZxcf7U8wwJ8ycj53UfXc3ZgN94hGzNQwxV",
  "key15": "5rr8eiFkc1JDAuRnbcWL2xKfaVNwYfgT6MHGojELWLtQQbxfEFshTBLby6udqvQjq3a12sQW5pHbU3zg1AS4TYGq",
  "key16": "3Esf1CLWVxjJBo83Qwm4hYCuxKGUusPf2WSyw9hopqrErSz99heEtviPsb9Z4ZA1dT1sTfPXTf9Dv5JU3MvtnoC6",
  "key17": "5kxutbYKRFv9Z9w8HN49XKGdKehn3r1oVT9ieT6Qh4sDV53iDNndT2YyLwNd6jK3tbS4f1RnUxp7i5c1o7C11owE",
  "key18": "3oiBwHMGPG1rrKPzwwESQRYjU6Y8mCWMgZ1PMvWxtNfZx4f2KGnhicAe9mK8K2X44bs3naSzqECBB17nnLkjcqWM",
  "key19": "2NK9nebZGxg2vHptj7sf5ZKx2YZLQQwVUo3VQaWqFFyHc1YVQf3e4YkLUqQ9C2KmoLVPEx5p2jhExKs89E7ZuDjS",
  "key20": "2ovT2FeQ5ttXkC1rFH2nn2knHpqCBfeYHoexFZqqG331rcD4rh9PvvBvyzgwZn3Z5SEaVqNMWGiVPBPAf84y52ET",
  "key21": "4s2g6PWXAsdZdXc98YKmLPGqhRgH6qWohNgzbg8iJVjPWoWkLj3dq4zrLSn8cLQyUqME7FMEZEGnLPCHjPjqgckC",
  "key22": "318kKvn6sVJzRCyquNLZUKrtTdV55bWcG46jmYo3s1xxhMyysCHvuDG7FnjHHaViDXM8oAj9JLpbPsNzApZwKD21",
  "key23": "4hEWjdhjsV6JiQEnCvWFuYv727UYYvVtq3yBTU4zNMdwLzWHHQu8DJVZS96TXH8tjPZyktj4fg2sbKuGXqaSp6fk",
  "key24": "2Sv1Gf2DPbq3BEwA4o4FfJ9E4WrUisv66oFNmEEyCN9fopV6bgnV38muKHMy5Hzfd5Ng1NnH7RY7ADHRUXLQhJiP",
  "key25": "5gkVXBjGr8oF6XWSADYvdLh6x7LuHV3xCimy7MBjaLcbHvJjERCNXt2Pqfnc2QwkxU1aHzZriL1GtVzAvhxsLMz9",
  "key26": "4GqPfsgfUvhfZQaHR6sEJSzt8bjNxWCmyjFR1oJpRgZWEzdHPUFTGjcFR3JFTL9ZzJkhpL3BDm6VpgS2Hfb7jxPM",
  "key27": "yyQ6KpcXr2PkmJBvFMferQ7GUdNW1ZkfS83wAJTtS2zFj5cKYXszKNDyfiHW2ihZ2Qyi1zuhFB4rhgzpRdsjzQW",
  "key28": "3vG1ML7jZicH9i4b7B5vtjQW9fFd2NKD1LZX52ekKME8yodhcwEajvcdiYQfA6rSJ2w3Q4Qot5WPwzKuZtMZ4QD5",
  "key29": "4Qsi4rEDGtJ9sWmrBysS4ZbeX5KHiEYUpS3n12GKSjFUyKrPTNCzG5xBRxKRin44wFpj5NJMJHBvpMCQH2kv3y17",
  "key30": "5ShDyHYUQ3nMbrWT7cDhcFqW3XDdyt2nnPAHVuwv8vf3tCWAXrWf12DrxpBqbZUMw93MgbdrsNPFU54T36HWTMxZ",
  "key31": "4jKG2ypKLQrVMRyb9RWMZ7nB3hqfAMYgFT6zuU8RVVc4exQhDd1GsiTFsKF831cfX6FjkokwqeLokCJ4j7rbeRS3",
  "key32": "4HnCN4j2NDH1xp5e9yuvM19QG8g3TTERHiUcXXPiKeV9f4TYki7BNUyyNtyEX8XghRQb86ZvrYobb6Mwue6SVDVu",
  "key33": "ULCYudn4HDEQFV1xhFBq2Ksik4CEFGdt5LEH6nVuEPDLYLNSffnaTjHvJRMhipJfJrwaNGoU38y98ErZxmt4bcg",
  "key34": "22JXw1WnPsftQMfu4ecVyQLopi4YiTQWUt371f5kyh8VmxovvEUNvDFB2wyjtDvxChVeVuhKGrBCpyZTAD6mMHes",
  "key35": "QLqYhkYgn88hYGszJ1E4L9WG5hpRbCCHBoyk625v4rQZedg7u8JN4wCipLHtNaKhLgbM8tbGGxXgeBywJZhzULW",
  "key36": "41kQeU16ca5XjWg5G5BMwTqDDYr24QbYeoSAvscB6oL7Xvb97fdYirD5TPVboJgrSCQsSNordUmVpxey1DaCMaHW",
  "key37": "2yxs427tUwKQgghVxVgoH5MSL39AN7zbhwPncZVVrLLEZeW3P8pitibo2xC8bGXbjDYXkRpBgdGdTPUJbAgsU8rh",
  "key38": "5GU9zgdLS83RkHkpkHYRKVaEEVDmy737bcZFC3Zdia3zpwQM237ykUMaJoCXWxy6HS7M4YGZhFEEMg36cNq5XTPa",
  "key39": "5q6YKc38EYnuLUjN4awmMUz5Y5XDLgyPMQBMxjb4B23DZ8Ra7UrbyWogjkdACWdn1Y12qvwvt7rbXbdo22gCrZBC"
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
