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
    "2W64FTn4981t76T9RS6BshzK4Kx4mbPC8xUVvDWVCuH4c13SdDdcQSDeZGbqSUvDLEyrBpgsSmSruy9HYJjaHxmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mQwfhBehUX8cEYze1bWtMvKWjjeBee4hxyXLoqvMJcLTczHG8vhueZ4VQPAFmg4xxbGeWSVusSvAtyfa9JHGHvY",
  "key1": "5Fsvb4HGY7nDAt2sBt7haL7FbR79seUQK1eGV8wK6o5szgvpGMFQcML51n6rJoZxezQCfjFgLFbTcW2mV85TqDET",
  "key2": "3W3VoQ5uhU5aPbY1RBrvG3vWgoyxqGxwBTfNhFrgcM4h3pQKCyZzEwK3Ki25Z8KtktsxooqNUXX93ZnrSWABVo5H",
  "key3": "NmTRZtbNXGRAAk8VwdMHSJEMBHHGoDuDGBdps2ffknoZFEHLhX6oQagtZtCN5XJuFZ93gNUoBfYdbSiikmwjpvj",
  "key4": "3Dr2WfNfNHqAT7qDN7rJmHkDuXgwj2BP5m2B6ZEmxi8VAcdB6DwyWodnVEexb5fYW3K6Ng1JmRADWTtVgPn2Spk4",
  "key5": "3exetNRtibeKC7YCJnzwaCti2GxGNXH1sF3TYbKzkgowioKEAvgZHfkguSpVeaYMhUzKMzXoRLcuznfscMe3rHuE",
  "key6": "67jsLUJ1kYFgZpU16NWd5Tb2VAZ9AwPJTntcMqsbXoG5pWSnrBaZSshoKmwHjh4SRcaNwqPN5fjuXNXLy4eniZiQ",
  "key7": "XfNoe5TgQZLHmQJzYoc5YU9UqgfBqdAefeihLcNEjkyLLz9B9T2MRiiRAxmSYSr85KupHzippPvBeh6Fu7rkvGg",
  "key8": "5u8wZ9LUzxjh6dZA2Ysd1AyzzUdCFk6qvKu2Xw1E7JqTgpkiNzcnWUshu68AmhUEjvKndXQWnETsWL8Xep1WApRP",
  "key9": "4u4r1Ru6dKB23qfnXcc2hCQodi67sEd4mzPMeQfzGMhwyH1sr22FjGDq8UnTD3rqWUjgnPCBwEU9tFn1ubqGNXMK",
  "key10": "2S7pzB2iPQ4YR56iFQwTbMU9aykAnDVEQQuor2qo1ZhiG3iwuWiuN7vawSLb2n76gLhxp9Yrr6Qtrmk3EexAxXko",
  "key11": "5EiW7joE2v2HAJwa6ydwJTxopDEyH2jLFopLpSYbg7GyoTgn3RkbXMaxbHiQeJGgwq5eB8BUDhfynk8BiUfNNkVR",
  "key12": "hciA2UUZGbJ6ZoQSWBzqWffa5S52PBbxN7jjXGc3rkpyRHgLYdCEB1hN5K4doYMsdLviy7fXW3SXMH6fUcgZ7ud",
  "key13": "2HAxhQPyJnYoyRH5dwXc2mYxSk473VqPBWzTzikyqvNRNL76GUNXzLytqfyd8JjG12hSW2jh8Cf7uqaNTHVoZTEF",
  "key14": "4gGcH1vg1EvyzJAv7sZGNYw8LQrzjDDpHAeJka2i1oLpkmcCm7fUVr4iwVgJQTEeFPjUht9G1iEzwPJod1fx6aBq",
  "key15": "5tVJHHWRmFfAFJ2uncfDUxzzVTDkqhMkLJw1E54sf2EQjujWh3MHGevqTRpotFA76vk9hQWtE5nFqiczGNjbWKie",
  "key16": "4JmVMAsgC4Rc1ddHviukpRT3P8xE1ePBTXqvbMptjjtHFE2tu91X8QUb1nm6CzF7Utk5FVqyAF3gMNijR7thifJH",
  "key17": "555Kcjeg4kVYAvdKEQZuYt2YjLdFhntpodpFXRJxEE8hWeRyTGgETZtsdcQf2rgHneoLkELu1YMTGfGC3TtYvj1f",
  "key18": "aFCRowtBYa4kTduwtdAiDGqApcihLRsY8BzYTAC6r4PXjoFZ7x8pKvpaRVmf7ADcUbT5wwWM4Nb5r9nQQYum5SB",
  "key19": "Jr9nn868gk4KH7muNADZuzh3Mxt6VagLBR4KE5NVzt1i97xW1TA4Hhm914rcABesSyhLwWmx5eHBMZgh2QP1Lxa",
  "key20": "3iBSi4U1ksJSfk854atRp7ihVmwPGrExM2x5K3M44rHbe5MrtJuJ4UaxCRiDfZG4nsz1N8BsRjpVskC1X7cRtfB6",
  "key21": "2N6JH9MBtq9Maf665YDuNaNxZBYDhx8FxzV2kuwdi9TFxoJWCmTCi3xjfzzHnXauki3iRyZohYAyJSW6PGpeKk57",
  "key22": "fKvNZp6BRm4JSRrufCnQERd4AyFbBCUGqgQ39o135gSPvxXs37NE1MrTpCsfBoWUa9GtyijvQNy98d5RJpEf91b",
  "key23": "3DYpNBZ8Y6EieVCiEK2EQQxMu7bLHeEHuFsjZNTvVi5cPJKFYQ1gQ3YHy4nVQvDmYmymeGe46fUsUV4pzfPUTwbc",
  "key24": "2bWSDarDzoo1UvMHM3FkxGAVCrXRt6cst7X3eNBJxoYa7g6M9w7U1naw3WBJjCFNojbxdMHFrruRQsabkLvvD6uM",
  "key25": "5NDDs9TG22wVfMuo4Tu5GooFvmkfm5uDv6DWapQGU5EJCgJ5tMFCpEndyavGDTCdvBVzNDLEtxjyrthqdXyqiGJF",
  "key26": "4LyTNuS2DatJPkxRM2Wz6guzbSXGWDtFutYeRkJiHS4hX9rGxJ5K85ENDpWt6G7QGaqJXC7MzTTteXX293SadmVn"
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
