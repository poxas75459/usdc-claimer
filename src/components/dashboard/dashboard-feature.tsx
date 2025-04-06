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
    "5WiLReMvitTcSRqe662MhKdu73YwZafYrh7JSyY3uiGqYT8F6kS5xDjq4sLMNt6T7WriiDr7SShCMi6uuMWvha48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SVhtrR8UP4NgUWmG5aqGPe7rvFBzQPsEeDedctDKv87Hn2RPT7ZuvomE5bZENjYK6xqDHpbYP94waGzt8UCwsod",
  "key1": "sYM5HpmFxbRqjZWN3fp4kcGm5PJM2b1QdC47FdsBbnheQkH2bfXXHEstf8kHjm8oqh45wbiWyAbdrXpuVVdytcK",
  "key2": "36R13Msv1M3G31LQ12A4FHfkjhHZ5U4vkvVMMgi9LYJAn5k9JQqE8oDTgamrpeZMMe435cpaziAotyh3hhtsiF6B",
  "key3": "56ZVdsCv7jh8QAW5GSkkFVLCpkD4XFwjEG7MVY8En6v4e2KqkZ7th1w6WCWsAwnSYmmLGQvRZ53yzPaiuRhfoEZo",
  "key4": "Y696CwX3BbyfjZ8EgvZogTNHZi9cdr4k1Ht1UW8HCqvFGgQSArDnZhsrQ8PKhVeUSwtMHAoVFNxWrZzmSgbEHDu",
  "key5": "5Qn6jh9sU3UubnyMeidZnppra5UQjuiaYWpGgZYBYXujayVRngYEJdXyGTvtaAcMhoW77XwfeAiTWycUo77k2SFv",
  "key6": "2EPdeBv9qA8aPUeozkiNbThnwdgqdGFRnuSeCAdthh7oAkFprw7AXrdhVbP1VacVGZPEFeUrc6CR3yeUFbmAxueQ",
  "key7": "5NT57ERXgECkKTPh5mB3AP4g7WwHoXqc1Ac3AcFNTA4QauhRd8TFvFtAPzaDPdo2U4X3bHKSwNM1CnhaQ2BTFMx7",
  "key8": "3KgtGJAmwVdX1VWJeTz91RWuC2pBKLg8GKwhXz9AnXNPfUEvcB4XGqmqaFspEjCdw1VtBfAWzqzVoqVXEzS13x2",
  "key9": "4JozhLWsBdYEcE6vdHj2r4yHF5dv173eqKeNhL7RrfC42yPHF6dXTAL6YfZoAA8jBvmZuKLphjbexSS7cBgRN6VG",
  "key10": "2yZPuuAVYp2NJwHJUG3CZHLQGZLMvPs6W3ogtv4LY3tRdbR3h4ogezvsWHb5bgPPpFXex3RjCkVWj1V3QnNwn6JZ",
  "key11": "4H3M7ppco4YD5A1c28Nppzk1vQe9VvvDN2ywP3q6xAMvAf2gbKVFjoK9W7g8hKefTHZGuYypVKS6EzrJXfvPdGjD",
  "key12": "5P7LooTM6MNoEsaGdHixbheWh28oFWuWsg9N3hzWQ881cKcQpkMpWLsb7zRMyfU6yz23wSbCPjPWxrU1cHH8ARp1",
  "key13": "5N2zzHPxn9iCEHWmAjbGoSXKqwKDiia7sTDRjm7Q6Z2VfgAqRv8txTgUXKovSKuazT4Vo9esCjkcC3zjHASMVjic",
  "key14": "zAqu7s3MiQNNKNqhwwCM15xQM7279kRukRMfaME3xiT5CG5YkuGtYJFW6xD3snGhznMziCoapjiLQejnpkd5vg4",
  "key15": "3D8fcFeGqfLHNb9Lo8ZcUPp9FtKqpcMKgkX3K7KPDFS1MSSDzJGwxBZu45oKdSLtmRR911MeqctykMXmMJugUcYi",
  "key16": "5nM5bWrb7QYWuJELUAtqSvV829RBTGfC9cF2fAXtfaa6mGo7VNWVQJsGdWTy9T8BqB5VuSAfHBfREL4ZhsCw5iMq",
  "key17": "2mq5XQveJdjrkr7zGRawbLRzS5tWkAQGJZ95jbsiVgLvHvZ4BCzDFSy4ugE2C69AmvutYACUMNc8Vsh4dh6QCaut",
  "key18": "2ktsfjSWo2cLKcUzn8KyDcCqTDzmk7AgWScURL8MDiEzzRjKUYnEwjo1Ss73GJvdqgBH4vAyxL7gz6NBVj4pvZbW",
  "key19": "3cj5CQe7AfvVDPpGdpDKL954XrgeoJcsA1EYXR22XD3Ux2d362AFBnLMGiUpWWJKJthfdkJZxU3HSvXoJzfpNbtH",
  "key20": "34VfuxSZNQ5CsAGYShE6u22tfGJSFLCVe5EkKaVfY2mqfyGQ7Yx1Ln6xyqb3MGUGVNRxmhMaRZMck3pMJyZhcjno",
  "key21": "5mrdPNhuZALBqtpRCfSgnDDJYa1dSM3PWnbGhx6rkGDeNa3r6ZLwxHU4Xn9rj9gkTcCEebXk4RnQhNxTkNxUta1P",
  "key22": "2jbutzVJ6Pqkfk2XCCzu6dai4F9t4cXyoz4tfXBavxM94vbW55QDoCQ9nSkwWkSBg8xeeVTsZh7xQpxNim3JZNDb",
  "key23": "4ZA1AQRSg5dNTZhSEHq4cVMhaf9uZfPEA94xGR7bPuW9FyEdfQJH9Xa6GQksrnnHN9VZ52dtZBPNE95FhsKdSWAN",
  "key24": "5Lmf2Rvx9NWEbVugBqbrbhAa5QCR8KnkiLeyEAtA4YtkxhYGBWFer1GLLKP7CiKpuDzvHaHjw3cYM1WpdxtPFVKQ",
  "key25": "4gzK9eMmmysFTKwGAYTmR6f6WMnhiCzimQcHeNBQuiafjXG6fkihyFxnVjLbxoUqhm2a6c8Narw7Cv4dwUJqGqQ5",
  "key26": "5tF8BSXhjjvSCAvGRZU4A1JdHtD6SkueZ8NzRV7bpdsxzkyCBmohvzNXP3CvkCszVAGJa2EPZgChrfLX9b4cAcCU",
  "key27": "d5wNJLAx1vbTd1bmnWtR1hxw4JS3YXT8udX3A3ZbMpSYw5kaVeSF5UG1TKeSQbrNWXHn6BG1DpKMAPeQR4S6wat",
  "key28": "4GYAMEWsw5pN5ZtWncM9P1pPswYbLNQgKzibptDfZokZCpM9Jn23diFXAepMwwpK9ePuVGkvbKLnRxzap87i72VZ",
  "key29": "5hEDMQFW8SZ7iVQvRYFdyijRLnF1Gxc3FywidBxNXD5DSK1vxG2EA19sPVerAt7pJHhi2MtCHonwXKE6sr1R17Sj",
  "key30": "5D21nqpDq83h9VrMoCp2K1VoxpoZJy7YQyUAsqcncss2BWx6gR7fCDwNU7n2oZb2GnE2b4FJpzqz7FaMnmpRnUfb",
  "key31": "2dnJ8tczVhgdyH9TBCn7s84dX5CPdBHkCMkF7dXemkf788hP8TmpWYSws7ySUoCEzupTveza2zvmH4gT3Q3KwGxK",
  "key32": "YjgM9rqcoysCn8oVTV9N4qLa63HyQZp4sp5wNYMFHPkv3QgktGSPFXeRSqM4aVXADVLf4TZNoQ2jgYRUmXJ7Jdi",
  "key33": "LUHnMH1VxTSSsVNCFBJk7D4QmS9xUmLfrgGkKXcfRG7PrhcJF6PuNdUmEpjcsVS3yvYAAmts3xXxeURcRT9qWJ8",
  "key34": "2UThStdg7ixHPmQQHTd3W9qW4h89erwhrwc6eVGexetKHECHpQ3E5aXhQLxtERLB8GCQxwA8r8kspiHKtibEpvMg",
  "key35": "NKLZnREcyDmwzo67UUECPQNEANuNoj1sqPNb7adj2PSD2XZnH6VQiyHzmQZXUdzEFCrg6xwbiy4ZiwAoP6GvKnW"
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
