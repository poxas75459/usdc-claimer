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
    "iEWGhGqEEAKm4PwujBu8shn1qcBsoeKjYyXogkD6e9Y64MnneHBAs5xe86JbMQe3Zx1yySsUoQ5mwzPg43jGmhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35iKJ1K4o7cUTDY4MBUHiRx51eLr8zEg2WbBBR4LtjYMddF24GGpPcA8HZzoBoZuSi78cgrAzND862BDxMpJ4vo5",
  "key1": "3hkoXuBSnwdKi8pSuyQLyqPGyRvGqCP1oeKJaKSu77usZoh6MGXVc7HaCkyoJ4YkjVXSx9JpFYzviVpRPHKuS5x8",
  "key2": "5Z3oStfK3mm3Ze2PEGxXs9NxxyFsT53EcJ7aVeM2BvZnxgHFaBza5oS58MGT8QPRXDHZVpVkqWmJcFVmikdfZRr8",
  "key3": "S5rWn3k8TK5wCsYMV9QjJ1rYnZShq4b9cPxiFM75EoBY2LanTWiFqU8C2dCuezVCRMPgt78yN4UE3aGCJzSZS2k",
  "key4": "3NHnB5PD496UrbgaNEtY6vrm2xVN14bTBXbjsxa8V2reowwg3ezBzXWa5C24rrR72RhLtG8v3mq3WUEKV7fHkk8c",
  "key5": "5F6JhJz1DoLu2M5vRv3kdp241NTKvAQ4vf4ygiV1Rw3DVzQ169FJauw59r6SXqoooDi4szhSPCMxbpUDypFDBkrb",
  "key6": "5NVgTveeHvktFaXgp7btKhjJ7iMaTsQ2R7dKBPquXpBaT3KFHT9Y9qR3JhHy7s65v6UhBKkU7VBahFbPCpzt2Ajp",
  "key7": "5osbVuhUV1q5kEvZMx7g43jwxEaPVzikiGaPxpwrXtnXEPQncWqWyGwgT1qUTPaqS28xDxHedh7SGHz6ctf5LHNM",
  "key8": "5UWbYKgXHjMn2CNvXy3QeYBF6PTidujQtai1uYBXCgzya4CTgAwoJC2wPgmEb8j1m5zqzT8sqw6J2VfQn9bgKL35",
  "key9": "5EKG88fQS8tJ15xohcbcZGErMC4Tg4GUXk9b4VCtyeQt5BmbDQJdsNnwZVDW86eHBRfkNUv4gCXjMcvGKA96cUE3",
  "key10": "2g5MGDwCUtBuETSAYCSSakHbhAVAUTL2zjkEwC53MNPnK4htPKiych1HDEpHdvvc8KqmSBDfwTVjxkiFP6cB3D6z",
  "key11": "4cQPTtz3KgqeYLjmuP4XCFnJFeqvVAuwPhhEneyak1HGCqBNyGPL2ct4Z9skfAf6yrecBTtgKpFpPhVTGuZgGK88",
  "key12": "4AvuocgDSY67j3yVzA4sJ9cyxPSM6eAX7yEv8VRT6ary2t25VvbwLQ9E9s2GiBbWx8JpyN77Vt8WknwcAzsqgxAA",
  "key13": "4yM2ZEjpuHurMiC9yDepCQVJKP5jEaY7kb3c71PRStEfY72LidhvBBvAF1isX6D2cpGe91zSSAYZtjoK4TYkBRYw",
  "key14": "3hgUWvUB5Wzo7JcxqQA1XTxb5Pftti3GLgyVrENqo3yueE3Vvr3R9UoFbKarTyKwUpGbte2v5zZFpTPQFnhrM5Vq",
  "key15": "3aaT7rXe3Lx1h7LM9DDkCAUzjsE9GDZR7WTdH1pSuJ2tAmgfDobw3FPLMwHxbi3iMd2BP6pae8uVj3tNPRcnwNuy",
  "key16": "3Rs5m7kjsrfc8Rdr9KEuoQkNWfceJkvadqX6amNKAQcuuhCrTyrAbDNQircZehM2noau1eNK3zJ5QwcWpy1kkRwc",
  "key17": "3JrM5PA5Rn1SDpST2mi864qn1CUeiUD1PqEJbXCMmg5qw532hg4EdUo3qFWtnHXdWzzXvMbnE59JZAF72HeXxx6X",
  "key18": "2JocPpH1MstMtMGzXYVVZL8iCXi4wjCkMzz2yw1jFMLwvAGiiVvpbscpiSp11RzG6URyTuBdY223jE3H7Utchp6x",
  "key19": "47CUpFLz3z11FUqxW5Pb2mVZ3NzvBDDGj6CYH1JxtNS6hA3pB9Pt8diLgPF5F5LvLSfYcBzLRGSAJHryBpUCX2d2",
  "key20": "3epKBjekiP5LXszctpyKJhBwuoieYj6iZokeY2ynewURoYtgqeH7uk3i9R3581e8uZiXiYswt1sZXXctNysfAC92",
  "key21": "2GQSgMBQrcoG2dH8ihw4tMrbh7Wq1tjjZkX293HsN8v7tysvPbDMXx8WK2m3qQj2VznVMmThQBT1DPNmcPoNGUPs",
  "key22": "4SKqCYSsNLYQm3YbqDzdtMEZmQhGw3mFEenFpsaCEB3QZfmjMmzGJMNihrb28kKAkpHHbpSXagFAS3mKECVN7q6m",
  "key23": "4qhpDMhMXfDWAKSWsT4yEwzGb9EREZkMmNmPRMEK9UNa8dy2SG6LiEvkTQ9eX1u69Qm85z7ziU757Ls6vNLRtPHF",
  "key24": "2L3Y8W8YLwNGD6Xu6fRr4e4x1881job4c6w6kGJopmaqmeockeiyqrz7Juy59mPSBopYUefwNyK3SRN15fjqMvat",
  "key25": "4xTWbfGeXGMBX2GXo1rTM3dwk78KNENTqCNEwHZMAaYsdistcXS8q7MYeqqKKPhE9KoBEc5STM1U1pGTDy7Pr9rd",
  "key26": "2s7z5gxv5X4Bm6GPPxGaCs7eaPH6rp4cLqvavhRQhD7CAzYTjj2qonc9nzgZPRuV4cvy7yW8Gq2dgNcp7BQEERfT",
  "key27": "AxwZ3coyCFYhnEVSsWzYdsuBpF1o8H34QvMJUfDjMmTHvYX4Mygk3kgJ91tyydhpET6X7vMU8GsLmq2JGFNfss8",
  "key28": "3oRTGgJKAZo2DJeAo4GT4UQHFoBABjU3G9ygP6LR45HLHFanoPsYEeHFGY4MyxHWWtdiF1UFVit7GR76F9jwWBc2",
  "key29": "4TWR94iy15BS8ERdeARYeCjva6rVZLDX9TrhNXc4VnuDXU1eaD4Y4u5K4c7SbabpzLyf6armApkVmc7kAy9JQA4T",
  "key30": "4f8sZoamYi3yYgcA5NJNNeZNfu7hJc1vvdGBTwApTzyLkBtFjZZeztKiT6A1vMp26nHG9eCoKaksDDnjTy7jYNDD",
  "key31": "5CToFRThFST31hw9jT5PMnUzQNRe6dJyM7kCrnGeivehtH7ysifmakebzQbRMfgs5f3cHwkMvXKhmszMATT99ocS",
  "key32": "bWJ54KnmaVPFQe3jMQoW75qPYQ5ybc2Hwuh7MxJTPoUfs6ZVWTwvMaX5G1tmEpa9Xinb5SGPG8buWbkNKZFDo5B",
  "key33": "2cGfZzZTAr4TfA5MfSVpSUZGJ1EGv1mKqgAvSp5JrUvi5RagKLgNjc2yQGBoKrNUtFRyyvCRUUyXGUbjhPagbSHx",
  "key34": "46kg3Ko27yLLdEr8Egbt6wwU4SzSbcztNVoZUDYG7MtgayjbAND3NVG7YXvm5ZDjERW88wKPnqBhwVtFwaKvxKaK",
  "key35": "3fezpx4D1e34jYhLcVh7ynT4wtcBvwQu3jFAdHgH2QcBTwgjjrnrucqz2DkSLnk6XpWF3p7gcrpfEozjgpXePKtr",
  "key36": "4fqYKzgXzjJzdCHZYzx7aJ7AUVwGNVgJe5wBLvEiHorgmC3s5dSJ14yRjBE7qQYk8uYjxw3LZpKkdZFUUPfnZyMy",
  "key37": "kYaVz1gMt9m9yTveURgRujPPrKJTe8YgZYtoSb69yf4iVywg1UkiQBFf64rA19QRJ3cEzr417T8xiLiLJRSVbx3",
  "key38": "5qJkFSYAK1vgGGZ3HZ3ReRGv9onwSSUDJHCUaKxUEq1G9cr6AbxS47NCuMifVmvTbAm9hvVvWaYN3U3JpEBiuipY",
  "key39": "2spuBABWStP2XcoS4tNMN8EKMdwtMAzCFhrUDbqS8rQ1UPnXyYd6z5KWfPwpzcjCivz4a6wn28HgqMghWVoaUrMP",
  "key40": "2jYLA1aBCMEBcq97JSUvmLD9S2MxLdPfUNgmWeG5XBKTTDJnokwvEX5CkeNefNZzfQYbyA7VJKcVE4Pzqf1oiy84",
  "key41": "9tbK5KRd52rKCY4f9zn3uAY6FJ1ccecfNwG33hd9RTm9mhB9VGLh3qsEbpDS5bTYtcYPmQoRnGeyt16AVT5PaWW",
  "key42": "3BffPYmsJHFnLo5CgcakdEo4MMZN91HPL4fNM5zbt2BTx9rcCad5vxLaFg11eZNrVdEctU9fUn48mrDfH8ohviZL",
  "key43": "2SB4aSXXB5Pq43y4h3QYuVpgCpCDJh87D7waDsX9c3VfYQqpz4JDPoMnhRnAvnDFQcRZsRfxWuyhBHdqVw4bugvW",
  "key44": "h82ZgKbBMZUoSBF3e3Us3aWPmdFZEFRtzQeHEGWamypSjFJRmcVR3oCxGMnBXQMXtgs4AMD9QdwzQj6Wvyr7x15",
  "key45": "8FejozoWyrBRXLrf48D4LSv31tM6PdYTPC7k8GSvxXeiRX3JXu11DuHTFUhg62vvBvVkdo5zYXrQrTVDBAcF3xG"
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
