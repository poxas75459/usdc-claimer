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
    "4ZZLFPqepzX38PwF4rv5A7HVbtCGPZu1oPMMn8QuZcZVeUjgCHMQf1HG5CyWi37WDKmmeeZs3cD4P5KRMNeeaNYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wmbiC2WTy2GwjFRoGLsLu6UGDbVomWCJEhAff2YLkLP17kV5crDLPgqbcsfNbM6ksjGu7wZwson66gMzVLmyJrV",
  "key1": "3gSKeohWgoTmv8FoJKM9Pg76KRfXG6eXXNmP73UUnFRh8eUSxQeprdLUmeB6QiXPnbRfMEgDYKt6jde2V1SzoaK6",
  "key2": "Q9uURPDAd4rCZfpXs2Gtr95Sb4DauvM7f8KGbFpFtPhpD3tBowmKiHHQbG8sNxtnKfpQLhCKEdwMgb7ffqFLPqW",
  "key3": "3pgziLnPsG6JNRMbB3ukms3QUcfT2a4G676KY2YDu3XNFpZiGcACSXSQyHzBiUkYNgE1Hu1x8tDDbN9UM9P6kHWE",
  "key4": "2fYcvKrLqeLJgzE8QJixu6Phe2AmW9ErCG9GZQiQdqUjgEVBAnX8byDSvwz2UMD6zXgwvR8CHTA7YukpN4vSmbMw",
  "key5": "5ogPN72LyBq6Z9jaCMC3PD3V4c6rJYT92M9J6EVFCpp64oYaYZ1dxXvp5mM5n4EKCMBaAsf8nYDNMvjM7bnbmLvU",
  "key6": "52pt2FKox2HoEjWP4PD5bfP69dB598hfSPcNut6ZZuxqnzNwLhprxHUDpa1pWMuUxC2UbKnwzjoyWYQr1CXVHMBs",
  "key7": "2Kfb6s9aKJmnUgWcyTdYmnpmUMM2hjYRwguEdqKSknpDhtVgJZGsrqscRhuERqsXpm27izNPo1awgrqSXe7uUW9h",
  "key8": "65nDoKZZAKKpLianm2VuMti3hZGwUUqTqJqB6r5DPy2skr8Sn1VyYWSuQ6j4SKeZxh9ENUvh1e2moVH58g6r7SCJ",
  "key9": "5gSnex3rZhhj2aBaSQGj1b5j6QJUvPh2PY23UFaFsEpn2WEUZGKNjPshjoNx2HFioTzxXXVkg5tcRL7dZ3u1aJ8A",
  "key10": "gSK4xKbjj58A4x6tDtgcDvADv42subcDyrkx5FKBuCytPKrqGy3nRUETyo7rQShLQSp4Ej3PYcsEVoPct9iLDhj",
  "key11": "3RE5JG1M7Be7v1s5yrsa8H7rzEfj91eiHTvSQufPGF7wxJpDYwnFRAbgn8ebeeAVmTw9hn3ayCmq6VLuj5uNkwu3",
  "key12": "3dr1Qr21w7BsmZAHtdvk8CPPhxArU25KTwBjNffchodJLMyNeHccRyS5seuAReG97TyvpP5QwiFgr1MAfbixyCdK",
  "key13": "5tcZ88QQ6UytodHZ6AAPyeuRaUCtcaMwVbw5ArmgqCfLQV5nYqDWsbQCQhRYsuwYWVWSpbtH5CLN9SZETUNxRMaH",
  "key14": "5wHeasYLWJwkmMr8535aMPqumHyp9MEvUkaQCUwC5yjAK5F7mcjMuK4z9d8gVusX5PKXYHkWKNz9BmzZuLQq4Nuu",
  "key15": "2WMGvgZfSKbYEfypHQi2TuvVMdWZU7JZfypr4cQco4Xr8oiCa2nGtc3nBBM2juN972SMCZNVsGDSmA8v7UpKPm6u",
  "key16": "5oJDsCmXicZAo3BreGGu7M9v7UgtksWZUUuQg8oyJLvbKTsSm9fQWDdzgcT65sQ77Hi1SXEDwbSQJ8okb9m824Us",
  "key17": "4BdPixHNQjXMGU7sVsCvZf118jdTXgz7DRXvBvDp82YeQCkjYL4krHqSAmCYCe6eaSLmxFg8TwzdPSXn5bJPqtpQ",
  "key18": "2zaKY8DgZTP2hrgnWTE1u3ykqiiwZSz16Nd6fwvEQjpsEQ4ZcemwF9wU1cGzG4K9RW3gYCJhKsYRLu8KnbqAioRP",
  "key19": "4fp9XjMoS4ia3Mj3ZKDf12K2czJGRrZ7ceEU6JNHmbHSqFWT6eUHjJJqGAeTeQU2MBsdbjQ4ZbwRnpNp8iaaY95i",
  "key20": "513JNguerAkaRdk7CEZosYf5iTaputugegN5GP2q2miu4q1RqDRG5VqPQdo8WFdSm2PCBgjFa3XtwafmkoZ3MGo6",
  "key21": "4HPBzMPAETRNp6L96Pwhjm1j7xFvELG1UAoAPbz5HBwEZpvMAaqKuWAw8fqLjnBkXF5LjjSimb4ijvadURdH9YXB",
  "key22": "2JgiPwDmaXfiksrfyiWuTDJozh4h5Nipn8iX6MgkVQbGEK6oPQnGt1d2GBZ7CFvJRiJPbx1qPPKdvu6W4GYsrLwK",
  "key23": "5T3PLUqx3zB6Te18TsnUA5ctkCR9QDBRM95aCfWqiFpREHk6JcTnneBodcqDQ2549kWfVSwVFAgDeNT25MYKbtwB",
  "key24": "2XFa4j2YL8w3PXZmA5gasLfUtzD64KMm11jn7guRTyBJm7V3bFGjNQ2Xc7Ztoh4LyiTK6jwoDujg6skkVzZi3cVJ",
  "key25": "5E2rwL2SjJC2wFhQzPQDk3fxi7r9b8C3DZBvmDpZWGTnPLnM4jZyMwhCrJwNYZX4YCAUzPTtQ9gviRYVHosQtWQt",
  "key26": "482QmR5yRd2YHcoHeN2jEVxzgSBnRK8fSJnxbGi8suiNfSh1qp3ph7GsTVr4Qraobi5FDEhiMSK3m9r11yFFyqzB",
  "key27": "5x354ugTX6hj3Q1QCtwV6awkMC2ayqDoyR2tS98BxNUBeNsRkdKF23aT7XS1K1dJ1eKrbBbW3tmEjkiY16KyecB9",
  "key28": "6LzXp2RPhfBNnzaTqjHK5YKTzYAwWwZAo7v8V97qirDfoztfL9qsWwPvQDJyUKe1ocWf7WFdugtYSqVqqdHgD3t",
  "key29": "3PegSQZw62yG7dXq38um1DR1imUDstRWUQW6EkfL2c5BWB3osHQqiT5wNnb1UzasPrJcv5QMaM2eAPQZoQ5Dk2LN",
  "key30": "4Vx9zFWTSG8o67n6kAgPHLo1juNGHvA5frhPJQscGetSPjua5Sh24Da3MVb1ZJKGBbqyFYa9PiRTPxpbyvHfULKA",
  "key31": "4MvY5o7ycDHNsxcr276D9c9uF9PFrc2EJ181ioQDBptFU2fMNJYYp2M3CZtrbHcs7NWwkpnrz1oCv2sfEKhNQWNC",
  "key32": "2sj9eXCgPPuwi3uCoEbgsgsGgLCgTaGZ38GRCc4znqxiNm3cSPBq3FcM7ejMvqXt6QojNfn4UogcS8JVmyinvF6e",
  "key33": "jF6T6bpT7MYtjqN5Qjb1BVdKWsNtyfQDtPctXbB93XxvTyaB8naXMpZ9JUSKP8CQpvQzHaM6Woy9nAatcz6dYGK",
  "key34": "4ZZYwr3NsaDCDhWukaZcgaPeFrkhyqSZgYY9rSposAec8SCFTPd73w8MBN46bxHn6EKeGNGHpJhEmi25JAkAvi4s",
  "key35": "3bU4xeXuRYRjAS3yBgWPZrvC2tgggq3F8UzRUj8RdRSwju9QrKLxePF6TcjwJHPuEZohrri51sSApeLgV6vpZjQF"
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
