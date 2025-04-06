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
    "31z38wmEx7FjgH28VxaUxKeH3Sh1Brb643CaSCPfmTt4FFx4ZCboEGmFaF7B9JCHVTPnBePwMeQiwupwNRjwUSzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Zt3ryE1g5sr1PN24JgFLuycCgkrgbA88xc26YDSsDPHdMWgi9RGuLBBGwcc7hKJ8nHT8WR86TFMc7Z6XaaPayT",
  "key1": "4j31kwwedTr3z2TPfu7sZLpG5Z9eZdxzARgUnWGfsB9Hoj2e82cMYWs1S21q4qJZ4W4ARPVra5hkgJcFJQCV1Nr",
  "key2": "3TNsyEZWtM57gVJmXLK527vuggJkXuVcTthV3kfV5qvVawh54E27zEZyVs3yjeaYr4hf72PJCWLWW5iT65Fg8f9F",
  "key3": "32r5d7AEXpQH6ZjBdK3waVUkZjEZh8drfrrzkiDs9GvvtxhedBhkhKDQH1P8hW2oWB4sEst7MjN8CwPjrqwX5h7S",
  "key4": "3CfwHKJgVAtzYEtbyn1CKde9SPvNVTLMrxQpSBVfdXc9HsVSi6C1bVYv13CiESFEcdiSex2XeJ9Z7DHeHYoy6G1K",
  "key5": "Tf6C2J2HprWhebhnXpx3wVFUgPLmWYcWGoU1k2QCkfUoGc7p9DX7Jx1WJCjpQASk5H2qtwX3NTBudN7b6ZNhDXs",
  "key6": "3fMkNEZtDeQzeYSgU7khmRmSpVLVpSy76VQw9GrtJSwZiizxAm4g2Lew1xGMdnu8WHgCYToTgnjmoXJRnf7GxiUV",
  "key7": "5ZUPqRXMn2JVuSpo7q5ZRZkcj4Li28ty6jckL1gUbZT1a9Qtvi8fXRNnNqMGwk958nTV11MgCxSncZjUb7wUurbW",
  "key8": "53xWSVssgHaQ1WZeoCuuZTF7nHu2qJX6H6HPGewWCkp8GmLdcW7vSnvY1Qc4gn4TeGHLWfg7kHuX8S2NEUM8JgTK",
  "key9": "2PRBv5oWSq1UaswZ1BvEP2HNwJxg4FfAL9fYMAUBKESoEcYcPjcKreTkKvg9Gx7agG4Xrbjrg1UokTJBaWtWgtxh",
  "key10": "5vNLWWtsktjtSybGH313R3wrs2U5C26Td4Ss6f7ZSW98wdymrwAWgVau65PLaKk8JiSNfYym6EcoRjbpzKBqq994",
  "key11": "3Z7xMExSNgKzv5cBWME5a3jFBPk8eJ69nPc4x46Qxn9zmJDP5CZMsndYrns2NLgx24BvaCNT1YcYvJG2ocsU11Up",
  "key12": "3Nxkz9FMiCBGZ1fZ22MABS427MFgRW6nzcNnyWFK13zo4SptN5iwd66xBivn3AXsY5NriraGa9gpB7KHbX3DTwYs",
  "key13": "LKAQ68AkmrC3hqZq1RWWCzL4HXP3vcnzrVaGuwFNqXzZaabWqvTEQeDWipJPJMm3HYztGdp2k46ck8XBRNTQ3gn",
  "key14": "5herxWpFpJ8q1ME8j1iVVR8MbnhcJ589yTAse4QoSfukBUs8pj7vAZyk8KknVVdahx1uuFjUh6YiRpXkogKAirGH",
  "key15": "2s7ijYjKyVgq1RykZbMMEuPSMiaUE7QeEZ8zRw17ZZaXcbAqbHPCq8dYXYg5v4LiP4vVnsaDAwtdTbP1KvZyLLMy",
  "key16": "31H4LBZ3XAeXTC14syVchhKgJkyPwLM3UMnbHK8E7Lc8y7ygzr1EFsitQc2fXWFt6kGH9LTB9WMzAQ7UedSKH4Vr",
  "key17": "28iQvvNwCHz8XTwYo2amKdhzq8HmeocThwbDgiTkb85g3s6uNPCqZHpJZZpsh3X3dtyE1zqn3XzZ8xSjLR7KBSSj",
  "key18": "3Rw9gHGcqPkj7Nm83TWhiweNwWcGyZSUQcEP8vCGsYLDUqniyQ7zyfDn8qcvSpqhyRaWfxqPqZmK88kpQTcKp8a5",
  "key19": "4h6VzLLDsnefEiAThrybGbkW7m8fbgYSeA4w5xw7aKi2Z3q1mWmRaMd3J5PHjseP6xkqyRkZZfaFrTUpgW71fWi9",
  "key20": "2s78qYCvgomq3XHzbAu148Phi5R2qK6iyPVswMfbWnCNT2WiFR2YBfLo2vfYAzEgpPn3f6h52b8J8mm7trdpYfa5",
  "key21": "57HnUoeoE685Wdcf74f1T86W9HvJUVWjaHLtS4Fo2xuxANuzQfY6NjUb1vT5emJJprEBZWHNM7C23rgLRQo7ekaq",
  "key22": "4V5pM7SfGzLsdLd6mqBHJVNzumvCvG6Zj2QNWd3tc3TesQ8zD4544JbK4GHtMRSCehMkGbnYQ4K33ZtVN9ZMZS9o",
  "key23": "c3xBjB6sG8eLfh7dWGwWYM9VfMG37YB33QGhQdzvU3DmTbpwkHhSTiS4W2xMz6PGMmJsk65VyYRH6BBECxhVCEx",
  "key24": "58TGdBr2RBg7FFHyCQQnKmmzK81AhFcmHGpFSePr3y2Ba8wCvhCqXnuCHHuHQzopAzQsUnRHpkHiGCSV9wHx5mqT",
  "key25": "2YaoKSyczWB3JJM9WmqYYmcRQT9bZyp8cx31h6W128QB9BNGb3EAKoKUKxu6G3RQ8WFSJSGnxZDhS4fxaHUyUux",
  "key26": "4pb97rJNwbjqEqXfmRgrf7ophVoF2TaDJhZ8DV1ZWfDHYjUrM6oAwpMgF6kx8mZGp9BGw5VkGcX21r6iahzpvmAp",
  "key27": "3WX29o66fcBbMnXobUcUMcbzvCc8hEtUnd7NbnMpkmjG1guqMb8Ur5TjjxDdhdWKKq2YaUGxz1tfpV5ssrWkeSxp",
  "key28": "2NCGrCTMFWDtiYqgSeDCdpKjXoX3AsBcBmEWCup7vQMKTuaQ77q9CiHNh5YAfqiLyvTtd4NB5pXMFYLwr6d1XwKd",
  "key29": "3Hs8BN33efS6rZCCG4R9wvBiFgGVv16KqZ6tESErWq2gVms5cqdHRb4L2ZLfRs1VojtiRg8HmemGkqhRgfKbmno5",
  "key30": "4quKVrkKoxL34KTYq3tqcDn27Gb1PVf417oFGd73k55cyYzso7swgBTmFuQHZ8UnP9QHRS3AetuzTaDy3HueUtvh",
  "key31": "gNmJmYAKAdUBrzT6JNGDHjodqsVwHv33MSEydjpogWATXf7TpAyLDTEhPTSHkX38kDkVV2JtBs4JndZP65gBb31",
  "key32": "41TRB4eKb7XjzQACnQzXPBsiNNy5E4jkF5wKELkm15vQyPvaeYGJF58xVSfMykoN6QNm6TwZcyYpnyLAzqvVmTFq",
  "key33": "5LXm2ieqUj5CWhe1LnyEAq6UByT1hsFy5P89TpLPcBksho31ZdqsrPt9eHBZQQFaVMYDqpJ9TMXJDFmtjjxGWZmD",
  "key34": "5wLS7HL2huCdzRJrxmyeecxey47EWSnRyEXUYY385etvTfzdVyjWUgLwMa7n8qgYR6LPpncXLAgspV4X4wRhXcsk",
  "key35": "4KxBbw6xpgEbwWgGEFSjS3n9kVgyf2tRfuBJf8ykFbsb8xLBUYjciaSw3inh2684Hphzr37cn3RG1UoLDzy4jcJX",
  "key36": "5bRmBXhoJbDCMzUQXK2vafvYzCqkyU8CFF2JdFqm4u67wugrUGcz3A4zmEdXoMjEdfajfxprfDqNqnEoNutmJTJ9",
  "key37": "57Ln95juW6Covp5jqfrJQAeRNn3oH5nS2xdxs15HGruXxwXENtYx8cjWH9osvoNrUbWvh5BHbv8oCi1gqej1uNKY",
  "key38": "4rX2Ag5iF1hYX6rkZXhsePFZkePKUJiPU5e9dwjeBAJvSjK3RJQdjqmkGdLFoAGbZRtE8sLeoxGZRJkRid5phG9w",
  "key39": "2f1owpPft2Bx23z8M1oJM3DMbzLnF2vxxFSvpVj1cPZhPXPyHySAt8EsnTNf67EEPgZScxHvhxqMFJondiXdppzJ",
  "key40": "4DSaoqJ9eVufX7ZUAHtRrttywMKUMZNn5cQrrHBWHMWbYbo6o6Se69m5rVAfwHeWrDv4wGZP3NE5SJQBXsTsWsFb",
  "key41": "5qinRom63tbjNem2b3Y1zyv8k4xPRi6gzdA3cXYWNiRhCafARcpY7bv8R3XPG9KyfCfwZzXQGLevQaFkFhaxAPjL",
  "key42": "37PYaJpGmNEuCFRV3Dad43uqg15cVpJzzx4mbPkEkiLuyUFsv93RVVEFZgj41qJvqDHUEq68zBbMnf2xm92zkBb1"
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
