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
    "ao8mUJ1cLGKr6M7UwTgKAVCuBnbQggKRDSDbDoqqjgUqc2fsWKpfnCLE6wbgJ9RM6QnEFTuVnayzT3TWCPFLys8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RfJZgiDWDV8SzamS2BaggaWkWyTMaptpQRyJRbxPXKHdsDX8vcr9wnECJWUp6KpuFbiu13F7yDzAtfKLCdvmyVS",
  "key1": "38R6BdmATx78jgPSGiwQsCm544vxwYH6kdXWdkJuQG761UJdZhb8JgGmKguETnrW3GMAJk6WrJdXdb1k1ZJVD5ko",
  "key2": "2JDXnPnti8SJDNucJvp7T7NZe2zVMoWM5cfMnD4PhuU2UchpJu77naeZG6piR3u5rhveD6VJn4SWk7R2YppaTbw2",
  "key3": "4LeM5em9RAK4YUDbtW4uGke5omxrKWiJR9RwRSGMwEXkBNEUtdYP67J1nJeVzmyYuisHFpyVbzeJpXrspbxh3A6J",
  "key4": "5vrMnopnyxj6Bb2KnzT8nLJK4yDQMYx8EbUuDHGUJCbzPR5ArEGN5viWQT1Pgb6PNvRNB9pXCWrki4UyT7nsZp5v",
  "key5": "awtutfd26c9yfG3C4rgWoXcXtxWYJuBAGi5boHNZWyBkbcAjGj7m3LmWsv5CapQ71y5skf4SnqjzpQF8fdyUR93",
  "key6": "3vB4pH2WvfHbAz19aALPYbrKCmMmwGXeSTDtQc6AHebcw3u8A3joTyCuBAVWmGGYzz5WFvjgST9Poet3jZArjx1V",
  "key7": "3GHxdySuVjf2hiV2UK28PrPBvRXnYiWsUpAzVFsJgtZPbcbBU3fvJsLFVT5Vz6AdW48gnBwqTasXZaVucqfBf35j",
  "key8": "26zphoAkNar2WB2HBnTE4yM44DrPt1RRSyALR26bpjBDkfznhcTGSf6kepYDmr15ZnSeBw6bud93xmdBkGnbjqVG",
  "key9": "3v3pCJ7j55zNQXm21P5gkKFTx3BScxymXyiXcebF2SVkYzmSibvU451LdsqGERpUGoj8YyGR7AqmCnhgv68rKSjs",
  "key10": "4uWrs3ecLKvG4kfUjY1uZsgkAKDZYtibh4iTCrG1X4CQUiNyLQ7ANmCgeYnDtacTcfkdBwAtuQ1wcckbRF2V24bv",
  "key11": "56X4ULaRubbrCEa52LvtLr42z4KAygiEq76vGkd5vfKPEeGnPU4sScx935nt8gsu3XypM5TjJpU4YugT7tHDhxfp",
  "key12": "3La551RAPKdriJtR2tmUyMZYxXAVk1osWdnYATFgaFTXsEfgDDUtEceKAd3gMpsR28NUuMurpfuaU9KrHh6UoEpV",
  "key13": "4wGBujeEUZoP6VfykdpTbJzysmizVNv5RV9D8v4fh9fuPiNDniZ4DvuUTmoQtUN9gWRM2JrDiwsuPNEDuvDU4S8m",
  "key14": "2GvegAT1LRajWyy7vL22BUZFkVNt5JGwPbunN7Ce9asA7ibUMhJ4SCoe7r9kbbruPX1S7hy7sUcJYRxvaPQEfV5D",
  "key15": "4qbHuwzUFEDEpHxLtrNXKHaFmxgAUNnFSsMDRRvCQg4886wsAvJrBNVutRXjdtQfzxr57N4KyKeBDQLK9YWVe6Md",
  "key16": "2XCiBusYBPvnZDS61PapeAhoqS4iMnHZshMQoehAYAAfbozNmC51X1Xyivr4kMvR2q3Tj3gPWc2We7sf2UJP427W",
  "key17": "2ZsiKvZtV1ZUM7H4VqyuhoBs9b3SjkUSM5iSrRMXTgpN4H7K5MoHfEamNXE3KNVs3T9QZNpPHrSDBWD5W7fJJZXD",
  "key18": "CVE4Lfr7QVinjKdpio5MoY1uy3Kd3oQ9chFLLczuF31tQuFG3wKDGsYA131uktFHeCWhfUWdp7aDMaErAWJdWBh",
  "key19": "4dkm2hnskkVLZRqrsvWC9jXLVoFgzossrBSPN74XcC9dsVD89X4HcutTECQuuZ4zcAmXPd4JPhtKpTKtHbAka54P",
  "key20": "4djWbNhe8JE42aRHoWoiZ72LihpxYBomiZDRwLFgRZb7UvBCajvA8G1vcvaa4eC3inHjBBhM9h5UMC6hAwi37wD3",
  "key21": "3eXUmHtzEDa5dJaSw1yM9rHQ8E85Bd8k8kewditFhADqejdLcx5JUnnsEgftPuUdug43DAJ66Zc9TNqVvGoPrs5Y",
  "key22": "hDgmfePVqtRDtZRvvQxmvdv8i4A2ihVd6X7DU71jzX3fhpkCzpW66y8BoSB831A3C12yYgAGTXKyNQFF9FJYKRB",
  "key23": "5zYYebskp1wgLXQMAXNHC4swUzSqUWiM4Jm9nJamdCfHAVPVpTJkjXuJQLb9zyxBBnqHrAW6FkeZmJ6UNaJxHgvo",
  "key24": "4YzwuhFiypUxbEGF6pYwKZAXwpYHHQqbpmCREH2B5ZKGj8VY1J67APevXm88mHNm9EYUVzgv2Xb3mpQW5ddHPVHk",
  "key25": "55GRJTsuYUSxCV3w4eBGNb75SEGhbSdxFZecJ3YarBBEYQdMoKuH4KogvLJN5sV6uWmyFh26w5QMMeMiPAHy8Je",
  "key26": "5F1Ai6GAPRDLFmREajd6Siv3YaXumP6XSm1nKb4QC1APESpPCbSQsmJkxnb7WAfqCfo1qAhG5jA2pEnZHd379wv5",
  "key27": "62soNpiMdAGe835ysDSTAtwmxhEiVPcK7j5E2b9FWmsWBSZGBxYJVGUcq1JLKdY4MdJFaduMK61qrVwVqxv9371b",
  "key28": "4Hy4KZtFRoHSqb8wFQPvcrdY7nKJ6TJLL2t4bojMV7L7Mz8VSjzHBzwJ18gnrpLZypD4rxZCGD59BWqBUHjSmvn6",
  "key29": "3iaa5RPvrFyYz57XWz5QV6WYSDLqpYkigcPj72QVvAuAiKVBNhXGgxdCErgHsUA2m9s93rnLeX92UeQUzanHWhec",
  "key30": "9uABNHfyd6XjfqmrwiEGR6tFfAFo5fywwgYkFgSJHrgE1M87S2udiRLojQUAeYeq5sfdYrTjTVW5Q94ZP47Dgcm",
  "key31": "WgnRhRd9Jdkr9d65ktAuXbp2aLjGc71B5pipdyNqu42BxyhK5ZAbq6gwR7uutpCgJtTcmchEnphQqmJKBQVKvFL",
  "key32": "4qLaeWwk8D9WJDf53zKKdg4bpKpdaw95MXwkFCLo7fQSGxck6KcHHaz6vy2zGRaiyCNMjxNcu3cocpUAmYkMQ1ME"
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
