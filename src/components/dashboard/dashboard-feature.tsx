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
    "4WFu9V6x9kcwS9Tp1kY4J1jVdcgdnLoPRxqjqtxUYBr345xejonRmPjtKCGBMXrdc6xsKdbtQ3GyXJfU3sx7uP7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1JH2vHTB1xi8bGhn56Vz1t9MK7TGnKRj5uot564d3yH9eZfRvNZDMbgciasTSRVt4hrGjR76UhrdYGF63e8RJdr",
  "key1": "3eoZF29braevWRKzyjE2v11tthVCmwXhLmxSizBdvVCgW8QH9aoP4YnPEPcH45gFiyfakJWZfyVAT9NU5W3C6oak",
  "key2": "3Y9otU1a76X2L3mHmeNv2Yd3zvVS5VAmkkv1wCr5vbBqyY8eAVKhqM28XSBR53q5yRGwrYGW8UUEPcCeKksNYMQx",
  "key3": "dVdHWvgcM7DfduXHvNBMq12KT3UuVs1s311rsqWjGueaw7eW2JmSh3Hp3jHR5zcxTkactsSDzdR72DKrW1T82Wu",
  "key4": "29UGfzWCisxvercuwvfBb5WNiYejvNDUuL4xySdV7swhQkSpsiWMomVoyjHK2P8Yo6Vnw1Z3w6XpWF34ny7sFio1",
  "key5": "5WZkdkCnmQvUGndihp6wpqGvtDf6uhv4PHwUuJXhpUcq8XhXMeWHpDS1frn4FFmzR8Uh3idxxSctnh7cC8aiYJc2",
  "key6": "54kmNmd2vmPzPwrVfuhduNZ1kUh5eh3y7BwxuhnAyGk1niPUchsZq1QA6oK9xWBYfZTo51qSbqMunqDJzKTQaQ42",
  "key7": "5G4vrQBpXCtSpoP9hMRNFSTKNKkcSEKqwYG8pnQpZo4M2WYHrEQFanAC51zHPvKF6GGHJvv8v63NQSjt5N4fAxjW",
  "key8": "m5pZkchAzutrEZZLqk47VChBifAjq21Z6sVqR2HWh3G7HxP6Gz97WkCNLwvkZ9JXBzD5MF3cV8rWoKow98bcWjF",
  "key9": "Dm8DEQz56U5AUfpBZuqeP7c4ACKJtYENdFFYtgcgNx9iftUELhqy8c8aM1ffvfwppHDahbYEd4avGWYV1Cd4j26",
  "key10": "36YV6UKisejSFaVqcjTLWwwdHWmkmFTZZkDXnNPVTt5h2mhvCJKAnL13BVcSParptHz3VokmGVb6Huz2ci8Eo3k1",
  "key11": "3X84pTxmK1TFWfcKrdgJf55hK5prvzRvtaCL4oHuXJHrqiip4AZrkDWRTuGNWvd7LDGwPH5fbhXcMrG6WYWGcku9",
  "key12": "2jozCt3zLGUWndNhSUdmZXfchhwNwxWg8imcn9t3xGwdnynPE1Qej1uvXvNLvqxuPQa4S891BdZSBTRJp4gEwogM",
  "key13": "3K6nQLQtwSYaStwbg8hLtT4XkAZs5eh7jewEZMg8s5Sh4d6yzoBadm1nSfx63HZPHvVxQ82BnMRWguNhtDveoLcU",
  "key14": "49E3U2cpehX3PgvSMPk9tsCbqRGMeqYYriXpoxzdeLhKprXtLpKASSphjaBbounmruUfYfWevJA1bQrrgxmesQcB",
  "key15": "3ZoN9cA7vTUcPW6TYvJQCkYWB6wYpAyPttxT5ZqaG7TeZMTKbeREA949PAUR1sCM3xXGQSvUKdygh6R2d8pkNVXX",
  "key16": "4xSFxFtMRHyotrhWsGEnQGWbMqooibTuiRXrFasaEnGD5egD99fj8WyEsY7Ctqy2wYcFjGZyWqVgnwYXv7WzqYWn",
  "key17": "1T8fvfetSEtwP3rgtF5FYjb8bjFdxcdrC1JbheiJaNGPaLBMQBZUA9Ji3pihU2GVcVrEBWZ2yqSDExnqnzZxUJS",
  "key18": "4M5VngWxN5DGKRHJDJhsitfbw1JvAJtETUh32kWzzxWfSNosN5CpUzdmcBpuBChnbn9iekXTN5HoVEJBEEFBkznU",
  "key19": "3Qm2LzXU6BNzaY1TesdbH7jNsuD85kLUZp8wwSnmWMQQjszvhAXn7rNMMNmHeKD7rSQPbhUKXEATubkEanGys3MJ",
  "key20": "NCEHEsugzGt4hkSRWvGfsH3veS8b4YB5kundLsnMEzLPxfQjHVWYir2ksGfN9h51t7GH6YTT3frJquq5uwHYkkm",
  "key21": "4sHGEnoabPGdeMDgAN84yhRi29hPfxzNcT1DJXQrys7tNPcCK6wR1mFUp1ig88T47xoSVU4LcT39KCaK9M4mVCzV",
  "key22": "277BT6NBB3jwW1qH2tSttikc28AXVp8phMzSx9gVo1ToQSjK5fe4YATiL13Mshn9KJoCXf4uvyhCD3VpucEm7TfH",
  "key23": "2JcN2RGj2bkMkQhE3T4cpW9UMwykyo5p4HVsNNQRbkJnzMZqbwuTAcXvNytf1LHvbQbEhpRQoC7Lya8uarLSWDbV",
  "key24": "2URiqAVtfrJoviDrBGevzw4kShdyc4Z2xSvGv2xWKMNJpWtc8NCoEtx5MrRhb7fsvFixvcNJURXHSkVUtbXdQvqT",
  "key25": "2iLmq4LBTsAwXqSgMKxLMFPCvE8uF4fJAhz8C79g4cTmwRWzopLvpzuHKLg7bmv4s14aCTssipMzU3yqVewBgDJL",
  "key26": "2po5xdQCe8H9nhgoeBRq6QZzFZ4RpXsZ4LFE61iferw9voce6QPGFCmCSbzk2rkMRoPdSzU43zv5PawiR5DBnbkv",
  "key27": "5wdswPvV3HQRMu4PYsEtbMJm5SYSePhkS6aF72CBqJh5oatyC1jQHaTpXbsBGzPpdX3e2D3D5xQ7NNVTnTCK66XQ",
  "key28": "3FNrEcp1CGBxKFgqC8FDDJmqzcUSokRk2aTPeEbHWF1FK2SRCkZaNwkvke4gJho6Lw7S6QLUv6jrKJybrCBYtRcd",
  "key29": "5KZ5JsJUvdDfEd5hATw5kroXUXMmu7xnh8Qkk1j3eDy9eTV1zARKkiZ4dzXTVrHJCtGihXF7Ee95Mx2xsFYJPPCS",
  "key30": "3WUbwgBmbx8fKV4ceHEf36h79jhyUJfELjwdV9EgCJwQx2btBPxJMNt99WaKFXF5Ey6PjASqj1iZzyaJ6Xrd7UQ7",
  "key31": "3XZKx5uNxQi9sDDZNRCL5jMReKXz4bhMdd85Qxr4yjKEM63AFaXcSNbAZvkpNDgYGDv1PquGijVMpee3AkQsK7cr"
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
