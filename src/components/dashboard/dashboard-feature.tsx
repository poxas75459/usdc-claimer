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
    "2uwtB9y9GK67ogtWUq6fxwXF3F5QPaEoU135ENFKEa4UnyF5Pu4pvYUhgbJ1RiCG4crfGGSpCiixPcp1thD2FkvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T9G9t562tBftLE4QY96YnpB3cWKUPGUYu7KY3oJ1oxziVw3uLu6tKqVKbusZsFPmdjGiAEr54gL9CBrBbiggXuK",
  "key1": "5LnjPcukY6yt4x2FB9P1E8Wboo3RhWebzACM8d4UKzpVNX88kpNomE5PRLMDeZ56Pgskzgv2q5T5PhBet5es7myk",
  "key2": "5BTimBQrXnDThdvD1eQDFdZWD5gXdnE93c97RDG7bANsqYUxECsumAxn7gU3tNdd5oBrfAGa88nKfqdCPDjc1ozt",
  "key3": "4aVQHsRBeAQvXEZYKzwwDJmEpE3agC6SxGZ5m2XZzQwkd2n8bBDarXFC3hRViQyJL1ECfrnCAR8xtmm1vb3nqdUz",
  "key4": "2bT1t3HSvTUzSLTFTvmR7fFzzzWjabSjh1FfzDPmZEC6UsM4o88sfgsahhusDHSZzY3aGhu4zGK8xGU6ajduHGZe",
  "key5": "2XQEfRpdWax9YTGaryoQdFmD5yQq3KeMwcH5K6eedpdE3FkXyaRSVPvGfH9w3BqTrDhKDHHqwXHaBWQE6PeR2tZ5",
  "key6": "5b62Lh9zN4dNsLNVx4bFakQSSm3FrzBAn1sDFfE29wc5tAq5npiEKvDMWr326dGUWmXL6JdALSf3ue2zrURq121H",
  "key7": "kx9Gf9cSSzi8AgKpEYyhWz6QXojBsFoKyoe1qKfVBGfwBiATDX2UXZHugpLim8f32dT8C27XmPrwMrnBmTFZ9sZ",
  "key8": "2tsa15xtxSCeRCeZXBhwN9HWvBcudJw8QXb76atWQNPMpDcebLAGEo3CijY9GX41zUcfj5VEMPyyt2Ji3C1C4wSt",
  "key9": "3RTE27j62gFM5zWc2gzdCWeG3zBLNLYMAuFtvFVs8XqrEgMtdwLMB4WutMU175mPqW7AHpGHDN6XYrp2zxS9Skqv",
  "key10": "4HWKbDNuHMsebAXyvNjkBcP2zjgfo6gqffeZSEFS8XexexzhuRbALeCnZ2Boaip8h34E8GGmSJ7aLFhWsCo5jYnD",
  "key11": "BATPry7BMkAydDp65992rHyXbfX3xTb7Jfiu8xyg38vwdM9XX6N2cQ3bfgPq8Lq3jCPtiSDGgYmDUBC7xaFJcBW",
  "key12": "G2QjsavQKEKcU2uXaycrN62V2dtzwep7GSwTeEjWMLeNCPdBqRM54a5nhXw5Qr4jDdZVkDirqqPEAioiDoBKzTx",
  "key13": "3VsXZmjNa9bcdcNFdjjQVQHbAQQ1vU7pzxU8GYUF7KCKM3ZnxXvQvUoHpiGmKCGn4PD1gCQhCHdibQbYqjSmxMC8",
  "key14": "4jb4k3YWG1PcSsoXAVUqdr4UmBohiR2t6TkWK1njvTfPUKBoBFzmjTh8gM3b4ofr1WZSST4PKeE1ioxSNwPz2126",
  "key15": "dLHzzfV9SAczpBLQy3uNBunZmRuGAGjciuHw8p2EtyKi8DMQSqkDGHD9nJH5XdAcJVG3sHG3h99oNLSfV1xfGKQ",
  "key16": "2pkpAv3wwaHLhD3QR2nKfnq2igvJzxmP9SfiyTVFaoWn7ZHRWY15UqSN2b8FkoZhBcY8AruKsoi7SGZzVygPo3iC",
  "key17": "9yyfgEKpGkR2uWfb34DixbhTkZE8kqn81CGe3BdhQh5Z9ZM34Sp3Fw8nxkFVXZ1cfd4yrDDV98hMHCrEfuxGa6r",
  "key18": "35KffA3KfZHNjrfWaQ7fqvF9mzQGXPq9XBBPjqrdTdhhYGRYAXwvyNFfZqzf76pLZdEwHbDjEHg2S2tRLSTTLCP3",
  "key19": "3EffZYFQCpGvvHArfFD3nMby72kBHPmqCvuEaGv1vcEQ8LT9R8gjrY36VqDsehJHLkdZVbMz8ZkMfiEbf1WvHgPA",
  "key20": "hcanjC83f2xa9hZrvJxePs6KWmny4jvWAX6MzukzRWek12vGbxhwau6pjZvYAbtoX6Z1CMWRh5jMnuxsri639Fs",
  "key21": "49p3T5RGS7BGUo3XvpzFkCNHwoRgustVkM7qTAZJdc8WkKYvmZW7S1u8wZkKvtusxhgvEpaQCKkmFna1sgLGj7ZC",
  "key22": "5nFJR7irKv4M31ZyshVT9KnrHgHdzimui1DvEs7cmHR7fZ2aK4nMLH2ZE63SUXk4dYBF298BdhL4GRuDRARA2eXc",
  "key23": "Sq6X8vVBzBVT1HzFFRModKg5iPspk71fGfsB2nJe7F7bQU4rmQxSyoYg63Cc5bbNzby6QRwKBd7qPb1iKX3xm3B",
  "key24": "Hc3D9T2Kjkn9H9y3u9qEw1TmRm5DJ5SRWsaovjZsh1aP3Goqq75dXnE8ERQWrRtUSfVT9ux5RRTTfxuKVdCJKTF",
  "key25": "5snEQCeNMT4iiz331utNmMJPXmmUm4zmQcRpRxXWta7aeuVEU3ik8rLCDUNBatT6HSmrYRse799qZ7y18rPf9Yfv",
  "key26": "3uDRrgMZC2hss3iynhaF3rcFHVAmNTGcReW9sm18gxBA5ii2i1Z7TUrvz9x2PbnqDHuJkDGsBxf86R9n7KaCvi79",
  "key27": "2P5rdVCPbLouQppDZhBn1xEGgcDn8BbTgvKh4GDGPs7j4kShi6KqXEauVP3iffjfZf4qtLswUz4dtbGckHUk8prd",
  "key28": "uKwXaDfLkVoaitS7HSVPSNz8on5dKC4fx8WR6BCAaMxXXjyiXyreMzXeGoxVZFAYzAN2CJirC1jk2yhjv9ACZhY",
  "key29": "3kSsUnDFqHG6E8g9Uv8k68pGsMQgvnRDvPWHUaFic4jnyTywjgbrcCuhSpVNeimtRzatngZ542U29rinYuMbH34y",
  "key30": "5zCmh6zgUbKbbJVjxtSEkfHigpicBSeMP11RGYG8SR6BsVSvNLvjYAizB8oVw12FVPQmaTgMwkf4w2ZtJDsXo4y2",
  "key31": "4uizS6MSPQ9JAZaReSedaucG6QJuBiDRbi4mSYnSonNRL5nqM43aRw4fcUd2eLHf5wg5pPUqttNYqWBj6sZGyPB3",
  "key32": "2XNJ39VRHPpSsQhBm27WR9abTc25td6jqpgrbPGV3HfXWKjjKehvxsyy4BBaj2SuTbuqG1EKUjp9pbNsbvSS6ceV",
  "key33": "4cUCWgXdQ7GKwC7nKagmf5BZk8qMhFGaDPTBBCiemajHAc3ASh5Vt9UZNdFS2TqDwdMU41C6vTjNTJCgSJvGXb45",
  "key34": "5Lj91ULZtFrz5QAzSdcENK8qw6iPQDVSBmQNgSJGBngK37SW48jdKMCNpFkehDxnSrdf1PJnnhpf4oe3Yq5pZSFZ",
  "key35": "2NEFZCFCFBJvv1vy9QKEcZgi3evZddqrUFfNN8iAiLBQyyxC2myiCczkxPY37zqJ4Sm5RzV69WtkAWHkpYoBR8xA",
  "key36": "2skFtHGENEfvx1vFTUAKCFCyeZb4wqLvVdhQPXarEQprFKa2CMiBGPMCg3ki1f6q3N7ouL7JrgsuiFyS8DmtXMEU",
  "key37": "5SkxbNKcA7XvdeyWfhcuNbK2krjyKEiS124rRzBtdApkYEcTHfxZSB5zHgaFLgQTcvjnE78Vu2DJ98BnrHLAHxGe"
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
