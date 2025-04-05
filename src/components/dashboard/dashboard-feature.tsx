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
    "4HsGh5BkMzBbvGHvGWGbNKtaYUftD2Ua2EgKYRdkgJVgTuPa8X2MPG1wvyKF3dKmD4hJvrKgbjMw2FZwor4fv4Qw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DdzYk3WGrspnwdhX55BL6fobJZVRDVjomiJueUsoYVcJoBcoMQvrd3rXodqgfhdWDHzyrCgdFkpiQ8gp66kxYoW",
  "key1": "avGG9kUdyQsMytSJV6GRnWPy1NrExoU4HfoRVcrRpYtd8yCLEf8ZjuUo6nTX1qGhLGHqG3nzwUXy1Cho2EZRNXs",
  "key2": "4E7bWW96ssfL2vxC4XfAsDsxMxNMgBWxVqyeb1drZNvQ8GLZQnqrZL8zjai4YLJQHNoTnFiP9D5PPY88m7b11fBz",
  "key3": "5K41HRAFvpYzWgrsM2mLpQkjYT4rvH8LLdyupGTc3GyW3LJg7E7wSxkJox7MVpNBKnLxZFx9GoCmd58gCoRSMWwo",
  "key4": "5AwRXojWAyFLMDA4jyQUDTKRMZpx5PLWJhDaJmt96CHetqTP2SgCBTFFPXARRD11VHQHoA2bNPG2Dhkr8uC51Kas",
  "key5": "gGfHrSfsQaKzHJkaj2SkFWLcQTUU8oQoyie8Lyo5FRbRN1drnsqqdKZdDCDxQGyeXG2rfXziNSvBExL6d1DnqBh",
  "key6": "4HNLCdAeeuiN5LeQFxShcnVXEVWJnBEHHY4NhmQudPhsjgqD1wHw99cMTqsPpkpe8EobucRGYGzss4F2LiBTbDnv",
  "key7": "5qtStv6nG1vuTE2PYc2Q5ewEESGCsrGtJ18ZXQAz9LrMpSbaPdCqzWXH2fxpG3HcG6vqcSujjewB2eJN7g7s5Qg4",
  "key8": "39toKM4fTFKVGCNhuDqN1KF8qhTTKMQpHujqZkRiLBmHHod7fQsjcXjRnU4BXcbZ5Z1gRvFatwcrbKWmpiaTiuh2",
  "key9": "4ZbSHCzWKDUKNoyPWTS1W9cPMytC5BcY3zChZHXP7DYNqvp8CvmqdbKJuC3Ayja8XbeewuHEFF2GvhD8E75jVQak",
  "key10": "2MWR5fas5jMU35DQEYCS7qRpTuXnhaD5GwxqvBSwWkYvLwcTBTF7GtdVJdftw8ZVrXppeFzfuDQyH9zSW7Wvnz3H",
  "key11": "4oRs9m7rrXz35wvUMebp223Fm1whRY3ta27UKZQFSTvZmu43S1D7Y8Du76uuEqGaESVZT8UbxzUMQDmDKsA1Vfn",
  "key12": "2AQzkSpnCtWPUk3v1XrttZEmbZdTKgxcGUR2kcAJnehfrZjVaG5z1rEfBixonRtSbVpd1UWKL9NvFLZsHgubtZbm",
  "key13": "4x8W6wiRE3LQDwkAYxT7MTi3y1kULVnAWM5D1uqGhoCsNDcUbNTTg1Jdu171uU3Xy6YZYA7yX4sUPWnxurRtkdSi",
  "key14": "2cjekTQckLjHS28wjjeAeseojPjdV5G8ttntszXb7L1PAEQdoh9FAaMMRacLejET16yuR3iQFVP6Lqe6UmmgNB31",
  "key15": "oKDE3JVErHDQBQMR6kGsmXtWoTkBFLvKHrHPQJvXaM7tXymmkJkyKrNZFBSee528d2VVCjBQVqiuQUyNVsVPKMd",
  "key16": "5o9tPpywi9k5Uqkddd3YbtzuTdzEURyZewNCeaReQLpaVuvv94N62KLPsnUFqKz6MVBkvvmswxEYyWVxAgYdhhQD",
  "key17": "4AFKtAjqVvyd19YmFdQ7W2KpmBDdvihEYJMTU8CmwqrqrjQ7saUqmgkcpsULpmeosAiJdJ5ZWGSEEPreRgeMs8V5",
  "key18": "3oLroLSVxQADJ97CHXuxtX6JKiav1BzqfHoNjyU93ggGrMsmoGc9CjMmJhGUeKZLTw9dC9khB5t61rGW68rXSdqu",
  "key19": "54bmis8xivMHxXGVPi7QXkGRZCrom14Kk1jWVXXHfZHYPKmDKAEaGZpSxin66hPhqzutYAAEEFeAhPtw6KUPXMwr",
  "key20": "nFikVuoXftZpS2gxNxheKppkwmdcAvFRMJiTw9D9D1CAv5s6PTYx4QMbYgYPLdNUcUMJEnuRytJW7X2HUZz6gi1",
  "key21": "4fDKGbLdSt7saAQDRHT1tWiqk4TYWH7BMHHk9HmdNSR5RUJWGMS3pGjWGsPqLBPvHNBDKhFvwbaLHXT818xu34jL",
  "key22": "5vS3ioS8kfHMKPuEMJCaJGDus8wTbGKrAG6ymDvwExJMyTCjUNT7sDBcJfUJZ5DMwbzhzddTs3xXPkMC61ib74bm",
  "key23": "gc1LChfAXqYRNxsz7sjerxph5hSmy7vUorzDKoJM8vqthuboLpDASqHGuM9NtfyUfAmj9Bj8KncY7PSTYBsuMTQ",
  "key24": "33kuFXuepTGbyqdGyGXmFRrAYq2o8yddRbGiANykigPG8y8kc1TgHJFykKXawPg4xfx5AtRbcSg5YcVHxicJ9AYU",
  "key25": "3zjSp7xwdp6F9eaTQno43Q2zQUJV82q7A8UT9cpQScPU3MS2v8q8eEXiaHGf6UJkK24M9y6gHdgeHCAiBPMczHi1",
  "key26": "51aWhoEwU3di5gckaJkky8dJpAygfCgySsBHfKvmHVFYMVUdFwfo9yMc6x2oiiJ8VWr6v7hwQAsJKnfytadj5oBc",
  "key27": "3Vvtxdq9JDHWBUesTCLXGyvXjyrNVAwheXEUEAGgwb4CAYJZEXSdwSqGn1cKb6E9frQ58muScLZ6JG9SiAntJh6d",
  "key28": "LQeP6LtvFWGCYT1jYxSWwsrEaobieAKoHLLL6haepAioZP6sYVS96g9cHbJJfoBVDBjBMuW4idgkaQE3bhyVEBw",
  "key29": "5LQ28NNeY6CGHcVknuWu8jTSU9SK1fy2Z3Au3dCYWYU3fjZgRB69a21vsi6nWZ2wMj4ME2oDGeYTRN4KA6zAZYeP",
  "key30": "5VHS2Xttrz6WHohr49x5Ytu9n8TQ9uyCS6hsvo7TeDBuxB59ydJudz1wf13rTTJe78v8Ur4sWBT2xQLCryP88hcu",
  "key31": "5w8Vik9b1vjejFEieYrSiuqLWmsqttHDHzK4Yc1tPnjeNKT3Y8AjGu6vkU8rqBYpiCJcwJStyvDV5hKug72kdfhB",
  "key32": "2Sxi9MHzrfkzeXmFifopwG4BEpu7aXdk6LH9j2RuqZUcnnsvrF1q9UUrJztXtnH6P4T5ktL5Cteh5fhzYBFeo2Zx"
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
