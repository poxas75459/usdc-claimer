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
    "3AVsKXR54gBdxZtWggHLhjf3nvcY7ChP7VhbT2KqiduxNdk3CC89RZ7EJZcS4pa8M3JY92vmp67GfJXxkeiuJbtm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X2QMNcCPfuPf9ruRYZ5zKxZPU9CJSKyPb8DaSmKnM5qDnvA4XRdTH5GBDEgQ9GrWMPNfYQUsSmLdf8np6YdmLDa",
  "key1": "4YVpwnSqE4fNcvK9EnQ7sSZjmZhujpNwKzzz87vgF7agHYrArUCCeMZ79MUhWWGasBoWCgwPbXQqAb2iGngo4X82",
  "key2": "26Ba8vPMK9fpDj5oW1ouMuoTKimaceWFjXbuiPNHrrUNh7V6heWaJRr2yZ32KHuFAdGuzkmD1bYXjFk16jMJRmdn",
  "key3": "5RyWMXHhNT9rgUxqxEvbwom5AbQAqM3d8hndfAkKPom5KpqpjXAAX4LxWUHGaborqMB1W1JF68j64vFSnR7cL2bA",
  "key4": "GdYcfmsEnCtgMekJDfR47599QuGo7i5soUviCS2vLupEcQqZPAXvkpBh362irSPfRG5pH43JtDTSf3JEoHoNWFZ",
  "key5": "4wUAhQGxuqRjwbwS3QSVyGjMzsK1nqn2aHrJiBVTkyzWh8cceudcY1fd9v4TiukqbCN5SGRqAHxh7x6iEumJiQWL",
  "key6": "5KU38veMbgNcfow3emqAErRQyRTNbugzyMU9QzarY91ihw4fJdREEoyeniF6uecHaXRgRHZL18zBnjBVfJi33gk6",
  "key7": "4GGnBqSA42k1pr9DTgsFvb3HzJFfyEhzeUuszm5tvHtqMJ5ahps3kzvYinuAns93UC4ZGnmh38XPKZ2Hh1mQ7pvg",
  "key8": "26U6j6GYC8JdNtW8P9uMzT253Vi7qF1sw3QLWF2FpPfPVeo8Da3faRQgqBcJkJa7XH5PTn7EG264UF61cxC5YzAP",
  "key9": "4m63S6mD4ob88cywhgjY2dpx4pfPtDjGVd8aeiFLXQE6cn9hqXHeDk8VCowg5iLQBm6rPyPfXvbUHxf4bbtd5UTB",
  "key10": "4LG3Hct9kcojLSfMpauZYr17j7QgdNCWtejfptn532sroBB5RKkk6Arpih27W6dcgKvMyYjL2n99x35LaGCytHxc",
  "key11": "3LjPrmWmDVog7WUnVY7WLSdpSMcwhxH55d7ods54dwLBGx3PCasJur7J32cCKTZfhixMPCmUctkR22WsSfVLEQx6",
  "key12": "yNj5Pb3QESaEEVmiBqoiwNorr1PbBLhgpaRFQcFi8rGQANjVykuFLmHmAMoTGpxRHUnWWefQ9XcprYNPii95iVd",
  "key13": "4HrYU2ctiEJhTA57ofhb9jQjFUGeiRuSTyveWmHeh83vEvDwcnzw94AAFcEpv48g5WmwMtnYSDL3xZ64YWJ1cQMh",
  "key14": "517wqQi4nnB6DujeKCVAUCuQZQK1aSHiFtzYfDUAHLiDDy8SyZxwmzChbbCzxNBhQv92YZWeL7jLVe1wT7M2zr9Q",
  "key15": "5QJVrQdnpJCKXyqno6CxwNV5BxQgupLptgAL7g45Ys28YjGyqNJeSQbWJNvRmg3C5bC9gao6aKQQMvXRK6PQTsF1",
  "key16": "4EgC3xWLe7ggWPY2UjamUEXAQcxrz5CHgvffWkFAnSg3aSU4G55hSqPmxEswhDaNtC4RYNkXTGUsnyNcfdn5VXNi",
  "key17": "uJ8yizTEFMpZMUKS75TkbrQFyijV2bmErRCAuXqyY66mDAPxEJzMJB1sfQmqG8tVEsj3Uz9ffacNZhxRLWgBb1s",
  "key18": "4WcdpCpo9fkAymkj1wkrudGC1PJPFZkPqMerMyj7vukaghYjMdDbJdQg4B932xsNpWg88FAuAoRPaJ3U5VKzWj6v",
  "key19": "26fqoxjrYbQfGpWHPaLCQqjMy5NY2wQZbmpZuR9kEM9z8GVbt1VyzxvvDJH5mVjv8Y8whwX4d7GuFFBjE2nhUBrR",
  "key20": "5NBBnzqmTYtd6gH2sHENLdueTYQPPKDPf4f3fNTGmuBgdo2uUryySepBacTe77GtxKDBkYkxjdPqtYroWE8yKTb7",
  "key21": "4LwKyfcQggktVBiMFmjgU8ZHCkKk4miU73HwYP2i2vf1vjckin69L2hJLJUgKBesR39NABajkzAe1YSjyniSkvQF",
  "key22": "3LtLP6UVqa7AUMA182NpipLa5CKq4cipdFpaBNL4hwdkB8sin1TUEQiYYweAxode8bDrJJdqdDTcvLMGhM7wJ1kn",
  "key23": "2f1ktYRjCx6k675LM9AGyuMGEMRQGTBWEX1LAz6Vn98q1Eywc95AodpoYNiejQRiuSduCEE9Jd8KCwhMK2CPjfVr",
  "key24": "4etmDsF2heg7Q88KCEtZ6UmLZ33GreDJFjhQZuPXRy3tgNB8FH7ZtECPAceYtn5aRcLCVFGQX8SgeKftwAsHnMyC",
  "key25": "B5RusNfATN4SMDdfQvACdAZoeaiBvS4kj4DTbJthqgs2RNxexa4HEcvVY4hnv2q1E2PnLTTNfr4He2MYAgokpoK",
  "key26": "M8SvoUAHdaR21hq1ntzVRKqhzt8zgeSCowB1jM7ee3bFUpd4yYh8n71dajGyGHnCvbsLusbXsfm7EkVemJem1D1",
  "key27": "3JX8k4c2uzDvyVXtc26gpfNVY4vK3gHYrWmQ2VyhUZoacZqF6iDcyxDSpiomM24vHGn2y7dT5G2hkTWvJojb9Grv",
  "key28": "5Dg3nykD2VdpuKftbkeQtbZmrsJvuDCfawVwecTJQ5xDUHUNwXptPJnLHF4Ai4Ja6rwU3RHuHRSVpw5rXoM59rpt",
  "key29": "3BkS6kyRnHpXo2WEYbq1p8hKVhBReL1CTXbNTPm3nDS5PdU8ny8prS7buvqcHZpdefRRQssvyS7ahMt9LfabYkPS",
  "key30": "vzaE3sThyKrMYFCw6pPCegfov8Zh6WDrt3C6EiqrQE8Z461ptnns6s9z3WajSHKjnof8iGkXQGFYFhWM8BcTy7o",
  "key31": "4AUSg8a5HcEbzp5qP3GstiGaxkcDzpUFxnHyespLUFa4v4zAf2EYWSNTnjdQXaLRp5yDnu27GGRfdEMtdxkVXwgT",
  "key32": "4fBP5zgSDzWDMbU4E8QTeL91FK2Grj5caoHQdHmwyJucggVt8n8oXNKhBruowU8pt4ZvfYQBUpdR3fbZNE69N7DL",
  "key33": "4pQyB8jUwbUZ8btCHMDTMn3LEmcacigRgczyWYdwtLHDrARoFj32KVf1t1VPE3G1FESuUBzTXrNRiZwLbyq42i6o",
  "key34": "vwJGJWhUk2PSHgJ5UHFfvqMEFibngFomSojNFvWxDPZz7Z7nTaLCJhpWMZDXD2Xssv2b5KXEda3WXYUEm5peShJ",
  "key35": "4sFWsu9JdbAbCujMeJEv9FWMRbBUHhR8UXyp3HzxxXr8bZtE18Poz7dfdNJyByqppcAnZQmCKgnyowxZ4TfRxwiB",
  "key36": "3QErkKJvn8gXV6bUTfRmTZu6XcmbKFG2AYCjQfbSJwLiRb183jThg9oiTFq63aKKJxQgHJuTN3JMYXPUTZNngCxL",
  "key37": "3d7kbc2wSt38WENApVwSSCZfwmYsCz5kfNLrEkUx6Dh3DXY5SmG6XhWL6GNL5DqNJpSVDciZheiy6ztsHZKoSdyW",
  "key38": "5xDcH7SZuGXnv1gEidno8kEJxFGHiZfbokL9xoUcfsZYsHuMcVzzmpe6b4ndeFXAz78WiUR5ABA2jEJQg1UuEYN3",
  "key39": "2FsKVx3h7S5ddN5B4rxXBuHxbz5EkCiexaD7YroSUUXDiz84DAoQkKqARWpyJxMH6VYBeyadsvaYRqiHiXzN6b8t",
  "key40": "48Fwt3fGiwShMiyj3GjPZ2B1HjyutwW8rHAn6JZty71aVE1qibVeuDNihZYtprKLE86mMUhPZgVncwWyH45X9yG1",
  "key41": "5mie4deREZQ5Sh3txwtF7iisvMhCz6PZS6zPPDguQGoB97N6ubo2cnL4QNyAQJkrezWZASzuBNcwbvRoN4iCu8Wy",
  "key42": "5E6eKhPVutvEv8CSrhYSY3XQivuwanXz4QJzyQGNPXT2b5SJEthwx5v2siKrZVKkQFMwpr1CnMCuksjhGtSuJDuG",
  "key43": "KQmycPo6zD2DLXKGJpGeDAWJUmPEdPkttLZmUB6HTom5JA7kr9ySswYV5qzcs3u57txXJpT1ZyiuQuRo2K58Rmp",
  "key44": "2b24y6StAyKPMUKazCBzKRABd6FsF5UJf5mvj7TufpxNmUuJQQJPZu6J6js3TTrqPPQmbzdb4dmAxaCLbhGNbm1z",
  "key45": "VKtYd27JtP7bcB9fNVuLPkzG9rm8WuniSiESrv3kK2BKsDkQvmZgkX37WGC8ZGLRjP9R3VPuYujJkaoxFDFhADm",
  "key46": "5VhyZFzhxnaHPUmz27k2mBaScCQtoSHZAbbJ285cTigWzHyRjMvuft8dTa1M9EFXUrkA6iUVp82eBn3ZgZAvA3jc"
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
