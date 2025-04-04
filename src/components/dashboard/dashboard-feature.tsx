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
    "56xuywZEYEW5sstsydKVeGkHRusYZVhnv5Uj8BMyTMooaLYnsVTqbwoGTjV52RDEChzxuGjHkBfWPKFW48nuwopQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pZ3nisEzKtgMApPq4NzDVi8EQDPowoTsyzQ1c2f6vwkmB4ZEmT8sNKMat487qWCj76rm4uNX4CVqQidF7fHupei",
  "key1": "4Gw7KnkyF7eVWoWxNBMXwXhqzLTCJePmvXzY9UUTzUDX9wSNQJDWeQM1jW1U4Ftfk5KeAvuRSNTh1WeKqdy2dQe2",
  "key2": "2jetSVfn3SKJkfnFBS5ZbuMfYNSdEVKdJbDnvNJuS8xFK5CgXwsdgZiYpaRjBexUffGno5LAtUiT7uLFKmAJnaAs",
  "key3": "3ESNYCgzoBNt4m5pbXyiieh4mxsQ7rfgqVeCnEnEUUyQ8uj2PhUGPWMkvjR6h4EfppaurQMBZf2i467jc9ppz4TF",
  "key4": "3m6C4DbF5NeFime5iW7GR8tbp8PUjtJS6Hev8zemsrY5V3Wy1Gud1hTkSKBWHaw5JhiLYeJ8Agf5K9NFKBe4rSG1",
  "key5": "XjpBjiKXxHand91UJuH8JuwFvoEvRnEV6a5e4qTtCCe5As2pV1bpkzE7WBaHb3QXmvJbMhFbfCVeX6KgfpchYA3",
  "key6": "iZyKwtGGAy9x5A6Lc6s2P1atERePZgZDpnumotqDmfepD1LPaftPzwxNn8WLDPybx7s4d81JAyEuRNaFRgwNn2D",
  "key7": "5wJR9guLQBb5YG73jBNH6PyL77zXQNamqzjmikZk7Y8Sggc4Y4CyQhQJgKQgFo6ME9A1TaEUV2scdPkJyGSPcf9Y",
  "key8": "MXCGE6zJgLaN5koVGHEbUW4vw7t4rcJXUKfLRXGFUSsue3NRK4CznJcFCBxdfHj1nc4H2gtSfjQcYZycj6D4gTA",
  "key9": "67ooSba1McuQckAQBJrErPHfNiRv5oPXCs9wKzpay8ucCDd6PuL1x5LuHj5YALv3yPjmVeAuup8cRXxUnJ6Ymkch",
  "key10": "xRbH93iKkSf9UAqbKtJp9S149TcDf86xeZsLXcP2G64KcVDhwG4f1MHffDjQMJET6VZrKjuWJTqHvW1Me9kzQG3",
  "key11": "FmynKqq1Vw3wXoT2VxPXxh9Pn3P4bJFqjQkHsoj1CSK5oz8GWPbqT2c1dVpNKczvcSxySZCQAd3kkYqnTTgH5KJ",
  "key12": "2mmWQUjz5WbXwSVeYsSZE6va5kPBr6upL7p571JBZrMcA4nyfVnGqYwd3DABxrtW8ccZWtDXjpJEWj6cVK5usuFE",
  "key13": "5Aqt1kad2fVDQZ8X5hWgeTb7mkHiJdhi23DNEQSeHSXzAyBU5zFoTJeBKYikcrE2aXkPaCwfVG3HQpYgsuWqF4Dv",
  "key14": "4nqDg1JLWrz15YMnNcVEdgbfqtrq2edxSVKHaa4zdM6WsPoYD9r5dCSb2uws4LtAdayp3AoAT7pa5cNK38KMHxT2",
  "key15": "5cHYJngPV7C4mohj4AgEdQGB39QfVj6644e2P2TsTa83dmFDPCuiXFDTD4jgnRncCHuwYBnSyoP2UYdmNFvwyjhn",
  "key16": "2hS2sfkLZFBCvb4TdQgHpsW8uGYx2Sw8VgDoZgWXHBi5mf3CWHSpNvpcZQkdKm8M7X56jq9HNAuawqJTZwQ38prn",
  "key17": "2B8NQSuLffQ2Wn4rz5CLzjEuUdnBRhSzHe8uYPZrLeU8BTXNrEx2fgzrXFbqaUsZV5qWZyEmLR6yVSGJDk99QgwJ",
  "key18": "3fqgt5S4dL974gX1kcXVwSt38Twyc7AZnZfrsLj23XcQW2Fwm9rRsnCRfaMNCWs29YKJCm3yMeRreJ7e7QPkRs6N",
  "key19": "2zRyc4k4gANU5LgRtnf2CuNdveCUipQspMWV1BbYz4U3F8kwCWPJs1Xn4o5s8NsJPvpG9p6DDWG4ty99VJNZZ7Kv",
  "key20": "3AfVp5jRWaQgCHhrvrcSk1FdsCYGCbeMuJdWfeuCJEyL4nMx82natVwZZNfASwRZ9EDKizyk8xenVG6MrtCxbbBw",
  "key21": "514se72Kz5Z7yf6ZbrdtBjQmjMSRCm6x6GaC39X7Pbm9mZPtd5PS1sAfuydzY64R8HA2ziaPYcSTBRcN8mgPMHeh",
  "key22": "4VnaEk4A8qhjEnGnC31pc9SVAKaMAQ21SdiQXRrwPRieiUceCj168b87kE2WmjZazGgAVfzLa879bGAEQxPrYRsG",
  "key23": "3ekQAk5e8sEUKKYP55bjZStPqCFRu9DJDqfbQBrL5thyozC5Vkr5KRishdYLbEW3S58otD9GGx9iZ1jCuNrXAiju",
  "key24": "2UjmGmdx48c3bf4mP5rpqNA6Erfdo2J4CD9j2WhAL5tBC2GRfKJMGn3w7WndkAcaRzSEJgX65WeHqsdie4NYncQK",
  "key25": "3846NY6pKwdqSkrLXWmgFVEfUY8KNWoJw98rGQzYMeyPZsteJe1ShUo4wepwRX5W9akPqUnfLPwT7ruzktHpuqQs",
  "key26": "3pNKtdsMXmoftFvXTAanbDWsAqrBKaHgJKHKCSTkcKRAoKZXtxsiekVm2cdPyuzYb7bUa5GygALCftdDCko22LGc",
  "key27": "2zcu6Q8SS5g6tuY1fdQEUJT9qPWqRAey7t5kCZvpEEw1chyDjWeU3RAS75TZTLibToDDtgWx3gkUuZEm8JoY5T3D",
  "key28": "3tU4twBjLVw5n5ugbAvRXjZmMC7TqjBcTCiTfFdTuHxXyN5XuXn74H1fHzS4AwpZP5bKJWBLLYDVWrJsgT7yquH8",
  "key29": "7Fo25nqq6NHYB7UBaLXhKZUyq12qXsMuUtfeT1ELKxEwZzAFs5npN42fPBZsr2RDHqvqmhtEazK6R4nnzSKYEJx",
  "key30": "DP4CAA7eMnhLcfXHuBCBG8nghrz1cdBxdaCNwGrjn5QQoFHh7EfF9VBFxJBNCeQ6J7T7xZSEc7L6ZYo8oauqeJ1",
  "key31": "QE2wGBaBHauhmCNDqEimG9Qg1EqoE2DwpvUNZ2rhJq8MtzMtnjA6givnZ3GtQJiKPMbtpR5acoF3rQy2dkhecCc",
  "key32": "65LGjRG13tyP8ga57juyDbfPK9jxvzuZDPEmE2EpAPZFQCZNdxkZf9VFcj2PV9Vchyh3ejZMkrnQ5MHCNCjBvJTe",
  "key33": "4qpUB4bHeusMhkdTRWE52acnMnXq63FS9VyKoRVbR48Y2yan2qK31ACcpgDG3VQF1eLrSCoKb1nvGGR4hUqMtyCU",
  "key34": "4hdwrNHst8N2bM5hTHsNowcGxbn63sguHHyBGuJSzGPQcviuxivuQRVwg4R251URqqo71xRfKhUpSTSZF3gKmJpe",
  "key35": "2m5rYYTaW43gLBFL8xz3emGgnWGMqsbvzzewDZqtaJiQ66wajm37aWmG1ctpVCsArk8JaQwxKFMyFDJvjzSQf5Uu",
  "key36": "3u5RPYz7KLazfJGCo4gtu6qDsAQLKBV66xGS41qg2obHKFy9megcKHk6YtQwzzRAFxH8MmfaLfTqpBExyk7qpGFC",
  "key37": "29YYuJrrzrwbcHrnyGeD3dLfDcrrPhe3yx44GKpxh3X8md69DjfCCaYZqCrTzWKns9L5A5NHoXGAmeHNG1fyDJSW",
  "key38": "32G6AziS1P36owp1s3Vp3Vp8VNBLvcc8DRgBVUMFgnS3raVCGCGyWfbfna6aNqQTiXXHjZ7BL6cmfQCq7qwTbREU",
  "key39": "KiQNFi2WtzCKiRYkLTHA9hAiwDszfrCXrwEauVCXLPG3mPWznuvcsY1ZEgwk6DuEnVUBd9rL1QQBEoc1bZgBCCh",
  "key40": "2bRNHEvM6T77GY3mVfCipYU5T33pyW4tVCf9G7Gjdo8ETAkk2bUeFACcSagQQ4XvoAFLwM4JL7fMigSLBXWyPgoc",
  "key41": "MzQECQiiodR8zJffSEg63d4hrhexMhwZkbMuFESxiDJoDsMjVden6HPJpmDAupgdp7XqLiRSzwYJNFCLeR7CceJ"
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
