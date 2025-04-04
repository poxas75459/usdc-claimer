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
    "3ZtfvKB6eSmbQjP59gXViVNFTkhrNgLyo2XPgAdBSVRdd7Pc8qa91NRszokBXrG61jpMqRVS11m9SdCkbTgQjFBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PDBHPLGh1JvyujncTWKdYgU1Rb4ChpnkvoVnCzx1VkriPVjBAyFiTqP9vmokeosuWTF5kCQa7reEyrMvEQEzhXy",
  "key1": "cP2MUgTjBB2EPivWra94nKbtDjirqqYvCFRKmWDEytc6pSLGwyxEwsYNRz1CUAuewuboSHSMQDy2LQurihTmskc",
  "key2": "4ZL7CX8f7hRdSgbNZV8sdAj2jVKvJUXBfUCL8uUEnSHdWgtUie7U9L8j2gsUkrPt1mMwhGgTEe5JaSsTQTZ3rRBH",
  "key3": "2aKa4DKVjojawfJxgZNcxNPn8bHsBnAZGpNbeZ7tpoD6cyfcoDuyhShTbCbx5xftX57NKoVVUxYb6hk7e928JP3w",
  "key4": "MXy4FwEszmjDiBSDrdTQQ4iGVXP2Vt1jTfi9jXjv7k84Ty56vrPGo4caPZR4KYHVP4hH14L87L4FM3A3vJoUms3",
  "key5": "2ZiM3o8kvJ8SGe682LvDTArsJCf4fY95dFEi4DWFnuehHpsH2DyKQ2ar9ZCKrozzqGi8A78GZkhaF7FWteXrHcgy",
  "key6": "3d2K91dSBUt2ezDcnosE6uaoHswPF1nW5bVri683ESM99ZiaRzfqwVhRjcXJzNBerjhmkM3XoNoJQKcAtLZWb5G5",
  "key7": "2TSiRGUzZPtC5WKuCgqN2syb3MyZkyFNFmMQNWghSMfL8PHTP88jLrgNVeCW4dT62iJdXcFV4ktt1ZtuQtmQuSDy",
  "key8": "67X2qgUsVsf69SCuoPRoTrULP6uGxq43yr6yGY4UNqqW8ac4yBQw3fqTo9MZx5etiFUCGf8wQsMunFXzijb9v6m1",
  "key9": "23SbtreHDugkzsaJpCfqNQ3TmwSVRjZHRnCoeh7dhiNwTTkpjUqB7YWBBFjdipPpnikvtKuJ6c4tZeKLtCqUgK6B",
  "key10": "4bfSscBtjGvcYDgqBGKrKnDJ1Tx6R4eDa8DfKegrkpXWQqo5CapNwDzvWUuoCzTgjLfafHJ23kYx5DEbhaNAgsaH",
  "key11": "4XYKztyqiuNMghzuDHC9HcBYhqZoy8orQqFqnssRtQzF8pBQtJUv4eDeAxKN2WWvK3RUdK7Yo9gt4rC2LK9kBUek",
  "key12": "5bmFJ9hoofL9nnEmiNMwRC8BuCgRmkVevCyoiKBgL3JmWdh7RyG3Eieoaz1c8e8DP5Lx58J6wLZdE6YwH75hHrnv",
  "key13": "47wwUxdEqjBGo6orhfmEBzCxfw4MJL6bSSREMd6JR7rX5gHj1Xg6p4WsQjk8cnzniBGNqGL9rnQJLN6x4RMUgsTW",
  "key14": "3YuTwyTGvPawk4qD41ojVj3Wrkg1rdaoBC6vRkMXDvaebr9iJMawFSR4oHjeFzM1acuyjEJ2bcNWGjmid7fXQfkm",
  "key15": "mCd85Xm8ZCUg2uURdAnAShyN2NgXqVYCyZkQhuj5Zxtdf65tnWzGPk8FhVebZ3s7sbBkDLcNwgbYZKxz7M65aYB",
  "key16": "3NTKVTR4v1bq7H23F9K28t4EJfsWEDhJMaAiCCScXjaQMEQuR1X5FNPtGBWsLgGpE4SHeAa4Df1C3q2xq1diwFT8",
  "key17": "2NtkXFS3VWkDkuG6oLXTDUPfyU7kYcKg7exGBUPJFjYsLVSJGMpUBezJErvhPz4DKsQWan3AuWKpt6rUBnL5uG79",
  "key18": "4gMmaZULoAQ14YALEyoaR8gdTV3mBMimujH38eT8ogf1k8wqVaZS18ysHtnxzHPfufEczGhNnzij4o94ySGaz2Wo",
  "key19": "4VUzJhhGxu4p9pi5MjKnvAEJueFxLfg2Sdn5Ry6o6ZhqFXhj4WTh4LhSCFsCtEX378tXBbBwPKVvG4UAWF8eWz1q",
  "key20": "45WQkoaYbCcVZLUGBMrxw4zgwYRfr8dZmnwXTE15cyVpMW6n7eRQBgDT6EESM3VFGSYXdFpGs6Qwb8vUNeRffcp9",
  "key21": "42fFYpTkbJoC5RtnFr6aVycfKNpwn6v79r1oYqbKRvmxnvVsRb23EzmqwTytwvDFX9RHY4RRehzYY7sBXCFP8Gmt",
  "key22": "5NC4nPruMYYf34YaGBgbWogxDvHqd6RfWZuQLK17GKgMhZwFvnuYzkMhNwna7BC8TmkP1UJ4vaJtt1McU4jq1s37",
  "key23": "781siKeR3PYm7zpqpDQYEj6MZZL7ZgihBzxm3vhj6tbL3BsYgdx4A7UAVsGFiJvx6a4nZF2kmQmzrPMFjjWpxTv",
  "key24": "3vvX1HFPQyPPtYezjTiZkHMqftbWCcUAKV6C73Z4PxQrtKvjQKxmtnxhJdz1jugnmmdEpeaNw7jrBSqCkHsmDXKW",
  "key25": "2voQxk5UV4tNq57cqeN9m9tadGmksmaNvEg59BsrWmz7UErsagFJi7vLBgzLxC2azHBXv3crKfcjHYnqAkWwPTAA",
  "key26": "3EakWHCt9RkRY6BwPEqkDkjL41rvaVTssuudndzLgtbFdxmgvMXpx9oeBfmQM9bMome5yXpRRXitgBDG1f9drB7y",
  "key27": "4st74UGQQb99gRiJQHDwQbaiHygp1CTrPFNMjfLPT2cGREy3ZyWpYLXQNgRuihGFvCWDXNmdXMnCfxynXkCxMreu",
  "key28": "56dETsuFKt3FTtyxPZxBgJxZNzcmn6DT6eScr5GEvna4NGHgTBN8VQK7JrHSKXmHaWA4UF3SDzgUSixRV71MVqXh",
  "key29": "3NHni7fE4sMgRfnYTxWU65efPgUZAWrR5bbvvhiJLrPDMyLYCWKXabSUHMFfBBTUMcKDAvveWFQn2xrNpQecncyf",
  "key30": "AU4JtubbVnW57iNjRwj75sTLeQ43NgkSM9WY7iGD5puPFiSk5Jr119SnxGod2fUnvRrSZDNaydiLvPi99bQNWiU",
  "key31": "2yHx3vxdyc1H65BDYmHwfdx8TNafSB5ZjvK89eG3d3uUaGSv6qquX79rUReNMZDoCyFz8pePXT3UG2JtPkv54cqk",
  "key32": "5CshSPcVxV2WQq2Ljx1Q2dEfmVgm5WCCXS8KqqFK6nF3Kdbd6nMjQFPyYDqNc2v7GbRj4NxkQftBYR4brUjcLW5f",
  "key33": "5BhDzYnNVv5MXxaSrNR8R1gBLFHYMo3odq415KUmBue6WTkwx22wJUi8M8fyvYF5J5xSfrVhtLNUMivE4Mb5F4ad",
  "key34": "2d8QHbcBvRUnSWFb7tUGaNGyM4dNJjLiQeZTEsrwjGpnZj6arZkZantzQnsSvUKVDBd9YMFYztUeRMAosS2UxnfE",
  "key35": "2gXFWDpjvcvdtKfPYR6M3NkC7a4htF6aDdxr3Xj6yveMZtKng73SnQjhmGbmKVK5jrym6RenP4yUx9g3BEaLu7cb",
  "key36": "2q8spctPmGUkwrx1NZgym7nndjyBCfpHbeEJpFBoiSNbLKVjAfGvXPDyKgX9q7Y6MNfCpDE7d3eBzc2cz5ynWwQa",
  "key37": "5Q8H3a4r9Jf69v94aPyyw4XaB9j4xiyGmnfbhAVQ7sQVxyCZWsD4BMtXHsR4AzwRa7Ugt9cTGurhfjLgqn13E4q8",
  "key38": "5567cpsq1mh9Bc5JQ5xoQkbRvGVHpio8RqpPT9pKPXYvdyNAvkGHS3isEWau3wjhKqvqueESws1hRkQCCmD6V1Pe"
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
