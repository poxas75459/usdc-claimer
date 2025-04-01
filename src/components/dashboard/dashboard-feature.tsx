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
    "3j7NgxqsmR8U1kPKhXaGfGBSBx31iWMb1CoqLRkvNpKgCZ6MyyyDyUtRqgQWy5u6iMCdRE8oRhiMixY1JVFkhXKp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28LDYDnitXnSnQHHAVhdMsA1VJZpU6CNXRcyJyfr8ydNV5NYHeWHs7deCfRiABav2gfn1ZZMuoo3C8ZPUxB4fzdV",
  "key1": "2JbbZQzHBmE5SEDpTGeeu8sZksNsFN3V89dwZW9jXqUcEgoipnNYMscsTXh3FsJypMNqYvmGkuFU5HCHeyqAUdJe",
  "key2": "XtkrVRfpDAEuVc2ymxW3WiAfkg11XutDk36mct7BQcvFVdvvzf7VG2ThBbFX39wVFqj8CYus4tP4V7JoTUAtosG",
  "key3": "5NCdZX2d6EDSEJEbnV1xeqUW5u2fXmxBUAVRdP1TDiCJyWBqVBGautXPzC1x1dXiWfxDeTy2wysZSqWP4pH6b2AB",
  "key4": "25AybVgt7dCnUHkz5ygTDy1qKoXTvD2bQAJxhM7YH4Ye2dGi9CaE7AaXg6zr9hcUd1ejorjpS6acJLZ7F3VMTkV8",
  "key5": "3ymxm1voGQMzi3dQvDL63jCp65eEn7Rscid1fEgrbpNoxhKpkeQPyhVYsNEm6TsY415QM35GXSK7HE2QP7wtao7p",
  "key6": "2GpigMiYv28daqwF4DgZf6P4bihvi6njfTcoKWWhxKk1gSYUf2kwdmmmgE5cuEQVfV8uy45tCDCdsyYy1HTqg9rE",
  "key7": "7TafjGNPvkNGnXU4gN6VLcDocrceB4t1y866YpR2u7NVvQZSZPM4HaCm8ZfVhoGEsa3CQA7TJUUUb8Wco8EWAkV",
  "key8": "cTho4YnN36fiQC6R4tkF3FZ38KAMU99DptdBhh4T5pfuAgepLvQ6hdCQ1ejzZqXkHH5NqDWy2uZhJjgBMhi2bse",
  "key9": "4v19pnoup91aUnAhntxkNMED5EJkLMKK1mT4MGfVWMcJxoMfURpNmAKZ7gD5ctbxn2bGuuV9ZvMowCsaKkAZiPxA",
  "key10": "jn5hHw3v4hALr3MC482HtkqRWMmjnYEfvo2nhVEX4bgPT2HZkdq1iraVYpi9V4KXBRVfyAdG6MGLXiq4okwU4ft",
  "key11": "2mddEJ6nDV6rh6FeY36p5iTzXQLM8vKZ5mEhLAU7YPvYHR7dUi1KcC8DjuKdnEjgeVahWu4Hi8gRBKEPa9bsF3od",
  "key12": "4JWDRd2XqhLZf2V1EYTE2qEDNwFiTp8rCeJk3Lu2Nki56AsgvANd3X1zaCxXQvj5hcwXvCwX4DEkYWsT6XUfsCgd",
  "key13": "5Zb6ZDnwCVFaqPAQ8Aw6ccctm9iUgPzbv8HGs7q3SPHRJhbZGnbwVJwAbn9aJsn3ymiNtNqNNKB2jaY8979jdbf9",
  "key14": "FsDQAj9qK6qXELZ5p6gbTdrzhyD7EkkgpVa9XsbXQNbCHUR9aTuQxJv2XSDAD11MX444ghLiS4fcEkCBriCAgo3",
  "key15": "33f9cHGX3Dfc3oc45LArkgCnbfQtwyTuwUJ3CUk8ho2msC6Wu1WnbtjviMkreLLAKpJD4Zk11A49EnGUeULJj7Ag",
  "key16": "qfLxc3pxoxPPqtejbdYtNATfNaPxhjVUnMP8tPuKwCGjoBy9pBbh8yKymPQsws4nQDJDiwxZCz9MQS8n4xdasAz",
  "key17": "2QGXa88wmaTZ7zX8pK18SSqf4r8YyXDHMUn7bBF6tRUcBQdRwbb2MoET2TiLZATDCjkKqnwWG5yrwNSyeDkUv3BM",
  "key18": "64QVPB6832Ea4miuqzYJvEEjcKq6bGR5mH64wQ2xkpoLh5zTDR34omF1tax4oC2JPNu72gyEq5GNwN2RVh6CQeGD",
  "key19": "4AijGMPiqu6bHi5XM6CbM6Cz1psH3k5NKpKUrnMRAaV6e3A5wB9GmRb3EKWpgH6ERqqv4BEYwzgN61ck6VJQ4BQx",
  "key20": "3ZBhxySX4wQrf5DoeyuLYnndDR3AZBBV9bsfURWPB26EPRkT1qtVKBDvRRXsxayG6VvpuJ96yRJLjpe4cvrhbjbB",
  "key21": "2g5g1A55YoF7FPhyJL5HTQ7MSfDnbRXcQ1R2JAmMesvEvJFwJKxmKeU2TtWDtMMTCCtqJtJ8gPLMYZLDXdraLDx8",
  "key22": "4LJRdwLC4qfZyjkyY1ewTgdaorDP4bzbWAbXeAB2yGQPjrNexhzcEEajmzuhYrt8LcLKKqvq2ZXMRK5qBsDB5ACp",
  "key23": "317cdztaz7hDbPttY5vBYNSD2dQ2UUfx53Fy7d2mSGDiwzwxtWgXTaF1w2kmCkVwxvXrtEq4YcMenjKri2CktMjD",
  "key24": "4RgyYUbeCpk913PxLYwn3zemhMVwedriGMBSKEPCeSzGKG1Js1ReuRdtL38n6562TFhPQpqTqpWAKBaxmv5gsGhg",
  "key25": "5Wy7sxBz1Gk8EhoRiHe9xfMyPps7Tvb37HcgHxZmrXSFxZfQYsfRQD1m46WwXP4N7cMEePUuq3jn5gbUkk865kki",
  "key26": "2t3gDjW7hea1xLwDGciwn8BJBZubz1AWp9aHUQXyg3Dowe4MFWLG3xTQQuUpa628ieFAT5Fv69feCCpGfz51xaNL",
  "key27": "4vHJXrNpL8FZHWpidGBAeMGg7LQdnw28DLf8kTuS19kFd4f7MuBjrqV8uKCr42eazwj6WAhBj9nnmgknXj7HcNj4",
  "key28": "4aQvwL31eHuFSAeEc6v9vQy82aAf6WiNhWAJ4YyUQaWtfgKpaBn2LxrjDRnosVTtSZSuD5f5oqybPRJdWSMYZRU3",
  "key29": "RxPeNKgBf2aryEWNsVGRp3qdxE8DZtx1iZy4Vffbv8i6sc7Q1EUGzowF5CFJD2jdoxYdetXNk9wwDv9N2Rwore4",
  "key30": "2PN42Pcyk1dFTSPgM4pBeVw7o1bCwu5ZqNutBySDzmezT1d1N5vBiFYZgMqUVhUS5a7DxTMSqUVrohATNyVob92G",
  "key31": "5DurE5YHnoWzSg2dNskZgcHir5bTX9PqQVoakBhW4DJ8hHMzP699muw4wLUkseGQNGb8cgfLabZ2TpT62Qth7GPX",
  "key32": "5MCBxbUPdSvRK7tyxPdwfhQJ71RE59gP4fBonFFKhchw4BdRZKmfLQ5NcZBAzLjWr3FLUEv2A28xE1V1Xrifon7r",
  "key33": "5gFpL8kT32L59sR1N9s8XKSLgHyBGPHEnTWXBHEfDsnzo6GMEe9Aa7gejFmvDkUaSCU1CGP2YBvY1VbHHUXEjNnE",
  "key34": "XXKtpF7uHsyoP4ecxFHjDE5a19SYrHWkHePwvaM4gmKxixJfq7ZPSo7UXirY9bMQPCWeKYY7eD3X4EixMRyFWoS",
  "key35": "32kVeN1ULVrcYkvAmWoQrK5hHWkqSj57qE4QkyJaS9gzfXdthi1n3my3hkNettyHwH19huX5W6dmhcPYv5ngAQKs",
  "key36": "4GevUmZmUuU9AdKcA52643k8pHWzepwknvWKj9BT8ZnoygEEgqhCzL7VDUjEVsmpEZwvDGTVGhdFFFXgMUBDTuAe",
  "key37": "2wWwbGzURx6tReY9YmdzkKSAkB75BsN43HuJoFvroAYgrb9enVJEwHynELkEDocvRoXKo1ifsUGxeGAC44CMbwyf",
  "key38": "5dEikw4ZR8fHSqaX6Lp56tj6xvybMdag11M1HRNreVkhUyc1YSKgo5mYTLtb79xEhnjFfarxLE61pec2MkcaHTBS"
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
