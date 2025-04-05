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
    "5RKbnxBsGBAyA6PGwUvTMEnMDhmNk37N8VNQuuVuPZiMmWGYUEHQ7HTd5C3GA6e2PWEAg1VhnCKGkyPawVCft3BR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WZSpCMuWayJBsgqjH2Ymf4CaV5BTtG6wV9xg6tGBGfFkGP92zJtLfJK2eEcqMbwbjeDbETP3MXjQxsyHXgxXYa5",
  "key1": "2b5nSyEgmwX6HjQLMzcb5bdxpN7ZSuDtefDX5TQLF6LeEa2a3To6MjFq8FyCTgQdB8W46NjVqSumMG2U4y3zSby7",
  "key2": "2vXGGGKwbjasrboEGWJpviYSqsgCQDhTCdx5sPFPFmM3Qajua3xQnfMiV1Tqq42We56E3R3Qaujzt2hJwoNrAqYj",
  "key3": "3KjSvhFLbwpbWapCUFd52nxk5QUDTiNVcX9tkLnJ2iX7XV4agfTwUP1MmtCZA7YkvN6NrQXpxV2hRFSs2TonEPrs",
  "key4": "3EyhhU7pSRUdixqDCn6SeHFnWVbuZwCCu5Kgkx95uRJhf5RuMJ1UVby7qMpz492wjKsL5PHCLHL7yGDdAXnCSVup",
  "key5": "3EeQDvtS5jmEz6N1uWaFa7zKUjxf4drWiU8oRVhmr7YQTHwVd181wS7mN8wHhurC95BSunZpYuQYMJzusEocDrDh",
  "key6": "JzbPKXz1Jnv6ttKrMZkW85onGNpeyCUvSNFmAE8fburZT7MET1fUT3Yf36V5yoUD6NAVKath3gtPp1iRV2h4Fga",
  "key7": "LCosDAjP3KApFsn35uxB9xq8tyfgWYuhNduJfMUJLU1VVCeCk52xxevx3RwQxUXgBsckAPyBKNbPux4rQh4gqny",
  "key8": "5fZUtgS2V8tDN5vdzm9oG3QvVA2eTWu1utfqtRU5nMiNtjnSt7jRppRRczxfNsS97V9vUT2fZLBi1bG6nEfbZ1f",
  "key9": "2csd9a6N1qeApdWAptqXRsMBi4sC8yChZcPMF11atdMN4RpmwBfHkDadj85tC935nyGmSHA9fR5N47uHnc8S4nQP",
  "key10": "3Ln9TRhkQXfeWpeCXpeWAq3NAmF8nc9KZDgPNvSHAzjoAr6exQ3sTr1vu7oEJzyjkup5wqfFAiUmnCA2j1YWgqZo",
  "key11": "2NBsxoZunvScGLXotTPoLMnMVrs3iuxPdjFT8bpSKUHi8hHqaDpH6zSrRfmg1oVAyZrfn2jGj3iqvL4YDUJFUR5p",
  "key12": "2R3Nm1ARbKYVYqexraK5KZ3CeX9tUKptFuuGYkUob4vtCR6DGAqMPLeGBnyVaRu5unTSywu19HYGyjWT98f9srnS",
  "key13": "57HQGkHkinE9EnpF2J9WtVmwrg5PxS9Ec3zpuEJfEYHQXV3wgFNBnpPdSJ2ZJyaVUj7PQJM6xuhd5NnPvGpTT2j1",
  "key14": "2p3m3Ct6fjStxK7oKtYdz5HJXKKFudkEiWRSbBAWh7CwJAHFuKCtMeprvciYD2MG5s36tKekc3L6h6qem3wB13VC",
  "key15": "5PkgoCfwjqxTdAJX4dvTwEPxt5tqkPXiVBsE4dWZB8LvKhW53VV3m89Mq7PnAw3TbN5Vf3qeoZC48yvDQPXaQAzM",
  "key16": "3RFDCMCAWnVeYaghavnCzYXuGKPMoLZk97LuuSMzkHEoJE8nHS76RczyAo7SAfcovCdcqKj9oqQxLpuTS2KsMvbG",
  "key17": "5UX4NHXMumLRiVjUPp3d85AQHrANE4CCkSz1P8RNjjox2hPtmpCUvCUh9hYScFhr7XyNLUsWjj9FfHxjaHX94Mvo",
  "key18": "3FBVmRnaApDQ9qmzBoUkjb4rMerdSnQpZgUZrLnnvU9Kp9CP3oimxVEKUq71GqsoBNP4qz62CFdBAxCVqMVj2yXE",
  "key19": "61BJXGH5yfB9ZrTXAFsRmL85SP4bhmNZQKZJA9fSqb2qriGkaQkKhPR2T5TPC96PkfkAD6y3C3Mufqifx5rNE9M2",
  "key20": "2kCVUYN6x5rYjQg3MEfeehXWNZUe8qo6WoQWHLrvNbmoC5q2mrfX3o1LHSrWiGvfaaZKFcLZvpeuhGnMMUCaqNDc",
  "key21": "4xBsV8RPuyTfNv5LcVBnkHTMXWtndnCTSjbYniormTk33tsCnwq32JkJ7uwBGS12YxmnHnncwhm5kGdUyz79z7ZY",
  "key22": "5qH1MeLZ9uodUrRGNFLaXtbhVXE619JBoSarNmBvNsUdLYDhT7GdACrwwLXVCqHuYvQbuPJEB8jobPf1Bopv5jry",
  "key23": "48mW27VRyy742yTNucHJ7zNU56Lv9NitETW1gLsu8W4PQ9c9isr9vHD5t3KD7dDh6pudQx4ywtHbt7YAUekmBGZP",
  "key24": "5yRzha7VtZeYv1Md1Mte5yjmCqZmMYtbygELBWijpasZKwLyqLmfSisZa8gyqzZ3pHAqaM7QYhFyWJa1BPawCWpj",
  "key25": "4tCjV8KLkvBhVRMBMfybsTaphD2UZvowsX5ceL5J6h8dkhvUHXD3BLRo7sBsvXZWvQsDL9wiqMKCiMDDBiQf6HFv",
  "key26": "5u9QzT9AVapTBuphQQ4SxofTPH8VBZBHaENqZWLzacgU2rbkUGaEDzoYuyyuccjyjpzLisZKUVAM9WhZK93PkL7s",
  "key27": "5nUkecgkfCnNAUi2MWdv76YDbJjmo4HxtSDm7mAKHUnrG3urNXtqmcr35c1uC1u45wCsQ2E6UoBWVKYtYvxb8GLZ",
  "key28": "FJb36umnx2JqjpntbPUtvprViwECRLEUFc11ZuwKrf5D5E2jJBp75tHrBpnxmdBJjat4BHAL359Nzk1T4JfjEHf",
  "key29": "4HZfiRr7WKjAxgbdLXBJgyyNGfB7X7qbMUc6UC2kP2kka5ZhMR2MZp7VmVmWAnevLRimRw5AYUX1EoATRqYx2qik",
  "key30": "5ZxCYLggk48ZwBaaxnnnoy7c7MCuyWN5CyYFLy8orVHVKWfFq1ryjSbrMVNj5XvDfzeeEa6qc8VVvsc3mSvGdEZ1",
  "key31": "4XG9S5MGPWETz13SpPxmr4aN3cpXUjU4uD3TB6GYBg4AAtVThS4Et3LiLtE3tYgC98AxXKHZc8nKpnM4593Qg7Kk",
  "key32": "5d1xQ4MXnTXupHWG4omKC1fyuybgBXEwqjCUi94gDyxuGB8R5cwZeY1xpJM9NhXeRwmyyjVZUKwD2TuVPxxwy3E2",
  "key33": "G7sii1c1Jebe6nyeLteL4LfQM5zbrZ8ZPLzmL3M48xqKA5qu4G9athJ4XZJvJctEuos41Q8UnFspUnF3UZrRZon"
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
