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
    "5AUoPif4pocgsK32wyRc4eSMvPk3x5k5zyRxf3f2B8cGxu5c9fvcQytjiyCzHgLg8i5fjzqLAkmGfnkqBYKRqvFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aueR444zhhEDUZQhakGrYwvLbpD1Lzqf7A1e4i3bnedGDfZAKPbXzvjCzG8VxUpByYXxzBRTWN56syapmdmNpoR",
  "key1": "nDKyZiFtdz8CqkRTVce4m27fynHt23FAiRZtUky1Z1PhdHPxSuvs2mdDFnYrjJDSf5uHEvPDNjej2w6i47xWM2k",
  "key2": "3t6RX1yrD22tr6Fm4YgcSou7S5AWFK1PmiSTPVxeAqyoVjY9zLQ88EBbhJ5QAjMmthTfUD38rAouYPJwjuiXHVuA",
  "key3": "umW9ck9SYADDFZ7TEWwT9fUXBWgE4Xhs21MXZYykhXSCCbY5KPB4mrZQxeYy7J6veDc68heMJxrhHAhpPsmYj1r",
  "key4": "3CGeBRxwraVRDkfzBSRNSTmeSzwjFzbA4QjpDmerBE1FczJRJgjEzyqzN6UWhcQ8nUcRoKfBq4Tf7hm8oKM9JCqZ",
  "key5": "3j37Hm7ERRHw3nk9pNWGWRMeNRcBY4FeCo2fTiGt1ggnsZC4fog7xcheRte1HfcRJcWfAM8jLxxBAn7DTbRFX4kE",
  "key6": "7UMMmYQckBay77jr8BHn7tumaKiDBAJLfmGodEGP8CioLqJyQjg63pnEpzMBxu6jqycra8BSUgCkFeaTXpVa6UQ",
  "key7": "4qEervy7Lj9wjxDJoSEopeBd13vxhyhrgLvAosH9MsH523a79aA5PCraQEpiq4wjHMSAjp2tyec5kdYX8knt2jkj",
  "key8": "2bQnekGWKum3wmFja5DHCwmZzUpDw9K2MbZoacoKijA3pCXNvkJWxtCMGq35F9kXtWmqo4KfKDZnHop6gkTXcQ9k",
  "key9": "8K33cMpQZ51CqgkxA61E42abSWx8QkvtNwpEYJp2DqR7YmZeiGXd1frQfc4iFLZ4N1ZeJ6Q8ikb9BazVMCiAy5i",
  "key10": "3rFS2UnEcmTtqrWXFwJ5GJ3B9MZNtG2socNear29agbpVdeXWce7X3TeasLUcQgyxTACwb2SvHpWeAuy7t5iudxc",
  "key11": "5ftU1BvK7CEVYNNSoQDqMWtGvi5Ey6y19EbGGVTYU3ophWcgAr1wpgCd33jHwvW38ApGBi4qzhLn9jc5DZtXHr7W",
  "key12": "5KuigChLetGdhg2nKsnUgZSAp6rdw1ZBwzNgh5e2w3JDsyE1vw9W4EobeTXCAne6brJeKY3oibtdFxuFxHGQArDK",
  "key13": "5sEDMyccSioqR6XymVxsXKbptF7Ny1d1iA1qvbnwcmeVvLYt3mquefVGTCn5eXSeyXKwfiMsR1y29kmjM3qnFASQ",
  "key14": "2G8XKmD7JRWRKdb8MAYkTbTeqGwTmnVB777dnsZcN7oR9xfdsaba7Ha8PgC5URoRJ4MoQahJnMHQAEHYwEY9XAqk",
  "key15": "5YkYHrKrXWqJKkW9RfBPZmvq4fPxTF1vWR3GZM5UAmCWchCzEzNUjmFfAvitEfu1LtYrrydYeLLGBMMc3ER1snhp",
  "key16": "2uyjujmJ3ZunV2d7zFyJ7ZAgzDrQwcUZXNBr3mHuG9madyLtH6FoJZBVA9aB6JpsKSQnt668En4KVmNBgfqiL7YV",
  "key17": "4FLrvnB7HNvvUPdFZz1wR6UVHoFWbRPL4SuZV5XcRNeyGqfQ9hbyL2Ud1XwQ9zMvHYsReDmYv6h4yMXgMV6dfQSe",
  "key18": "5FfrcKGYKUGSpQ24RFehpW7dhNnVdcRcv9ncRAs7nKYDKPSeE7orCniRm25c2wi1KNDLRppTVgnnwykda5WW1zKe",
  "key19": "375xFZjJvL649kUB1q7oL2cK17QV2MwjgNxVi2eC3oFwngXhnvhiRuHBdzN4drvVXK7T3NzZAT7PXS2xMtWdQaAD",
  "key20": "Hmcukv1eh32DJzxS1eaQ3ADeYXDijgXTqPZ8k4bBKcHodyGXvsZnR5hbcURpy3Z9X6JAXuwyRBxGqqYYWU2uGj7",
  "key21": "3Xo4zot7Tt61YzhgdHeXacqXwNnxCx83upMrggSTSRusMiMg1RAJ1vqkRWMakubySfHoMHBirx9C2r57dwJiHsdK",
  "key22": "3Wv4EFUqMTnf9AEKEmvcBkg3JmMMEXakiGjv6BYYRiQggnT1RMn5Y6tWQ7wRxmSjDDwsohQ1gT9FVu1oPeWwT7gN",
  "key23": "3zVtfEv2hEQMJKMLmGBVcgtmkdWdimJNdw4nRLcmNejt58bXiRt6175oacRUvZ3y4wn76PCm45fhwvtWJVszWszQ",
  "key24": "3Wc8bpd3PnBcVMkdZuo1oyVs6vGR52tU13Vv2seagXFiJhV9CEdGa4reiMWJTwxuB7r2KwnepoA1GvoGFcLQuee",
  "key25": "2FYV3Ks425CkitgTAihp59uiXoxXP4pNboGkKr2wwnhAMvAVv9e24SChQMc6hLmWz4Sih1LBDhwQigDrrhkBTEF1",
  "key26": "3RFotUsUbqvWDUo1hWu7RtpJ6c7zQgGZEHaTE8ST7ztx2G6arbk882S9htwFPkhcweqjksRJi26rsfyN8uN79AzQ",
  "key27": "53CFt9wYHiT3N6mzbqQ82FUbay6K3RwKGuJqf8k5EpPPqxiKmx8yqf4gLwU6Nqo43b8ByiHtfo3zWaex4mFragfr",
  "key28": "3GT9cHMFFkAx5hvtkJf2cGMBduMybdC3rGBM4VxKF4ev8DX9M1dRcwprHchW399qBEwakyPD82R7vhQ9bmgqVvZB",
  "key29": "5qXxdPJRz69ogCm5H274PV2owfHBFxSPDu4gH5EG35BF7a54hZGMC1uXPShhgWAyJnq5mxEbFR9kpi6pTmHJADUS",
  "key30": "3Piv7BhgEjqWw2H83CPD76aH6dkAVosntsSHNePn4D9h4c6KNeGDwTxXBSDVDaEQXfJ42P1NAF5CmMFcQdZU3oUZ",
  "key31": "4ovt463DQWbALbxcAJFywQC6xjgzskQGaSZzE3Lz5318DdajtDP22z5uTuZWkgUDg5MHTWTZG6KYkwf9XTie5H4N",
  "key32": "3NesYa6ZZkzmRpbqXiTzD5XDqz3FS4evhYWqFeywkWD2hr5tY3wVJYVde6btvm9vGpTn4ryp23DSba6hiUynHhR5",
  "key33": "4xP2HYUB1B1PjDpZMtZZuHMrYRgRsNrkjxvXvPiYVKSd3tsqDcWTymVU67s9rqmErGhTc1sdcGNMGTnbMRmK46qj",
  "key34": "2X5sM7C7N2ALnu9UUBmtAqgHJ5BR9CDQvQgawiPCmXvpakmAcGth9nAhHuDHFprs4MqXZgxnZJrhrHGT6LB7VHZc",
  "key35": "2GwcpyJaVHVicEBYphD2pRm6wbCAdxicst1pAb3oPLhNm9ZoBG89w6wB8eeg4q8Pacdw4kZfHXozR52WjjL4bMSo",
  "key36": "65jYfKKMkVtK48cH8Z4baVcsERM4Rogdd3Sjh1gTfWDuvWDCHbYEAobTzxEzutC2qQD9QR6KhXZcwNuskFVwhx9q",
  "key37": "5DKEaiB1jELqGDzRLBHWexfS4PWf1LV2TKhLzXUQJhGQTJ7PL7Mq3RpuJZrEtaJGJxhsHKwFje7o3XypjrNipgiL",
  "key38": "3ExBT5QzMUf848FsaQHSXF8Y7ZF3yUTRSs8zfa8PTswss5HL9iXSSDNJuDxU6WJrPq1qKoSCkvFHLY71xD2n1Pua",
  "key39": "nKjiwYRsVsD8LJrpkwT9TYCqnbfEmUq744hyDyH2Xh1npkhqHZCiVbrfjHorJBnkQ5k2ijJtzDRSuhAErwsyTX1",
  "key40": "4aebTiNBsWC8DBvp7gZZtvnt72vKeVfEQe7kgUqBLND9A43udRbdCpNbTvLLzcyoMSbtAeCYkVgAFfRabzdoSFiG"
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
