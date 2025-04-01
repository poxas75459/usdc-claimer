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
    "2KgZFJZB78aD1tQfnGunk9QyLrPXKMigBwdmWzLUYhfMRuTRrqcE6y8Pa9uHJNXQQex41WGqBrme2Fp7YC6wwt9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BCPHacqnEFAirDXp9GrgyG9eoqokpMtEqVP2mtvz1FTq4VKpX2YiPCDHdgT4DoK6Ct1hEhE5Qsfvk9UzTakhWJF",
  "key1": "3oGWVtYV4WkrqVkqyh7Ea3yPNpnCmvty62xTxr9mpz5vY859FyHJUwcxN47kcYnuiEszmp7fVWm3MqeTmxnpWdWu",
  "key2": "3Jf6j88oFLq97ShXmfbBEdvEChvc2bQASEZbRDjZUkckymKQhBAAnbkCUYxboTfEJX57K1LR7CgHzWn2xZg1Q3mC",
  "key3": "ddZNmHWevjwuhvQd1CaV451gvXzGcUDWsknZkGTrDH3txZbmcPG4L6cJTKGUDrzy6bfKwMXFDvxvmNBtQ2bDSYj",
  "key4": "4DUTAcbnnbGaN5KxLNa45WSdx5ASzsFPc4FXbtjEDvhpgqv2hrskoLrt6MDXR9oRwSb2AF5sLiXtxoAEHK7TJEwF",
  "key5": "5RNSWKFowWNjgzwkFsLmFyiedy9QD3MPr9S9tLVeraQgV7FPnqkU83i9TZsiQ7n5H621Jx6YK8yWBcViaHbWMVjQ",
  "key6": "NQUFcyHb7H5Zrui44SfJ5W7PyQhbz91wZxeLGo5mkkoYcPNjM3VPJ61KYJ6b85yN61MycqBJ7wuraEfo8xL2CKP",
  "key7": "2LE1X3XdKB4wiEbXMGPbed1KqrVn6aj6fNdTr9joQYC8r4yv1gdcp6CEYLNCLT8SL1nqo9Wd2dErbxvy8kA2qGMh",
  "key8": "5r7H4PuVcdTAtG7dKcYUJB7pkG2h8s4jLXQ2TrVC2Cn57pWqu9C4mkN5aV5otth97p8ZzoyRwc4HCAVHj4KBJpU1",
  "key9": "4Z1NkKkK8DcHxs62HoJyA23sSmKs9GurkN8qGBFPGxTKmyz9DdrqxNpvTxL3vVDVVLuRXvfj3bbrsMQWBo9qsKz2",
  "key10": "4diqzP8L2mTswzpKshbXraY4YaX89LFNC33AEMvHFV9rhG7NYBVfrbfFo3poRZK6zyShfFZvaFDEyq7LsyXZRsB8",
  "key11": "3ybsiUdCTRFzbZr6MoFYS88ZQipm7YdBNoZGpiDkkNymri9XySJ86pETtVZpwpLLoBeGazL1Ve8Chps9WndZB6xH",
  "key12": "4uLoKT82SpNwcaRhkkgDibgcMdtXpgxGuEmgQDrjZVFva5UeQ1F9yaBRqZwHKE2B7SfJAdaB6yo2vkuVS7p1Ymmt",
  "key13": "459152hHd7tDAtwwujotPg7ZZo8NchYGA4XVn3bzMJTnkX8qVe5jZgBZSdMKRN547Rx2ixDPK6vuLc6heQZ8MQ6B",
  "key14": "VmDj41ocvNhTjCep8GhNSYaQTcWvWY6Ta5raJNjQJijGKTthA6vwbLXJro9j9PQtsy1ZDVuLTqpNCKpjvpxHCRj",
  "key15": "5oUXUG2WpgwQNonFPbJaE2HDx5GBVgL4WDdamMuyS6BGgfRmMttzM84VFYYjuwkkuKm1duw9PEbfaW1s68todFym",
  "key16": "3kfLMr8msQtZci8HxZU85jDTf9Qng8wHZydLqm1cNsw8WqQrbQRS1VqFDnwWQFCcUi6fNnUrjdHetE73RPxYSru4",
  "key17": "2XMvMDsKnjDrFQLGS7LvEcTQNNAabweUkkFuQcfEeZrNdzJLDTgwZDW1o8kFM2Uz3YzhrSodYePxBpMXG2qRokH",
  "key18": "4GvVHJf8MqMHHCteMCu57yV9WZPV1P4a27n4Pxub8BsDPKEEWtS8aC3Hp4e7kjmFYnD1rVSeqLQW4D6sFSZqzKYb",
  "key19": "2AdLNGbSrd8q9CsSqpjxHbLoXQBpq7sCbtLBXnWa6Mz82bY64KYGS6eianhHap5hYFUGqo1btJruv7trX7e8PpKf",
  "key20": "45E3AfL4Q26tfZsH6pTB84UXcdqsQD7BZmXh99GVWePfAV6Wj1JZdNEE1wwzfkmMcnpgYoKjkFhU7Mdwf46n5HZ4",
  "key21": "zqtRAxksNBb451YbREfGbTWSo8NUVe1BZ88K2WwXktuuVjtpjtszHsALDZdnArUBuQdbfcu6EK8XyzpbNJuvLhA",
  "key22": "4XoUbpss8X5Nxafv9LB6EwKkVAVKbPXXgNsyaxtW8EPLDRoPR6EfLhbJ7hQ2rNHBHWf5GdomrDe3byTFxWCdFN29",
  "key23": "4EWHprsvoKvgdXkzsBjccENNdrvdmdiqyGisGmVK7U13B3vsKbY6xvRdJjHeUEUYGmzhmLTT3oXDyrtSQcqCZA4H",
  "key24": "m6oCmVJRiDHSbA8gnto53gdaMZi6PqY852F4tmGdQCMXgLnAP3SnZ88M7fuS7JQz1e7AXEccojv7mAzmwuAQSA5",
  "key25": "2sznneLAXxsCUX3NjinzeCE297w8AREKgXT7jGdcNHKP88ci1tzadfGua2UW7ELJv51uj72dM6gY7qEDspkvNqiu",
  "key26": "54XGFmxWM1LH5mk4yW33aZEsbUUySUHR1J9xYVSaDj9UfzuV9Nv9FZBmGYykx9oY2tcuTZqTivKAtDq8GUo8SKBQ",
  "key27": "4Wh7BgcFjacoAof4nFAR2kNeFe6vxCbJgyC7fmaFSWAW2KjKRKn3wq1AmF7KyxuC66hTZDCz7AAZtRRjPUXU9LTF",
  "key28": "5oCTy8VXvKW7PR3d86kGg9mWFgzXNaMcZ45KkVvXnorcugQhWo1mzirsumFRzXwz72m7WAooHEbXDCApGJ4bE22K",
  "key29": "49FxgRncSjRcXZATjq57RJT4TEJsGuaM13SfCt8abrNhZuiMBWWQD6NqZJRxXeX4gb4tn2A7dd6dAoe18Kgnn8Jy",
  "key30": "2yhPL5wPUAtQPdgvUvEa5UMhHG2Jcgo4YJvZgbL2mPy2zEio2rcWTFVPdMWBR8T9hyoXN4K2YCSNzdRYQQw1Nrex",
  "key31": "66PmT1uZh9JJDofbpeUkKQiCDzdcX2tkpvmpvJ4vBnWyxgKYpPj353dQTx5ZCwkGJGP1oUPj1v6pnFnNi2vDXD56",
  "key32": "6333Vz5E2X1ik1R8qjJBE1WFBqStriKp6NnZprQ5sCLAf2AR5WpaHmMm8bXcovyppfaTUmNYnJjDF3qtAVfhQS7f",
  "key33": "4fEgeLU3x5BQHQYGbsTSbtptAqfySDGGZusMZZ2wcYoqN6ygBpVYeoTWBFm4s61ETBa6CShJgrCmw2jVwARnDAgL",
  "key34": "4KftsJohsmYyxYaSC7E4K67SSuqKKXrwgEHSdVaHF85ZVB4P4mWtA3FEyAza1ZLQTY1c9PkABn91fMtxizwCdv8f"
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
