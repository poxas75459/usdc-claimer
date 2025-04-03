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
    "5sA8h4bzTtLvzYun3reqAWwcsJfoytg9hZmjkM19d9eBQKUYt3MvX3ytc358jgJU5CQHJoF8SnohSgXLmZ3jb9jd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39D9z6hECvHQzGoMVJv92MzQzxGRKZSkopvbFevLhRZPN4gjn3LhDWqqHgWQnd21XsmLbCs1721RXsBDiyhhKgyw",
  "key1": "4LDSMxEMVudaEiz7MnCHzLZ66hCb3H27n4EXd4wRxb8qC5SVATYVxnm1sUaASRGPUyoshuYY5212Vukb99U85XUv",
  "key2": "4zFxNPTnBVaQaNURSQykZmB2nTUZ7KfFVvmNG48BGjQhZ6x5ECS3mQABaQ4kcp26tx3Tob5NoRQWXxj7Pvjq2oRP",
  "key3": "5NqknPuPVyAJHSovEpqv8e4DxVA1DpC1kWj9C1ogP8stzA5SCARQNLCXHGBqSkWRw8zfwVS6tuCQFkzttpsiHYvm",
  "key4": "3SZn4TUWejwZvm7tWF8BqmyXK7tMdiU9er58WCCuTysA1tv5BLUsXxXqLQGLbxyGJYSF7RKqjLztQfHmVUB2YZ4M",
  "key5": "5H9vEb3YUuPKVgiViSj2Zq5zRSQMjK1tDbAFQop3H3r1wxdAfLGnSmjFQZKXubvpJfmDBNPXpwt7zZ2H3nGif7t8",
  "key6": "3L7yyHMCv9E1PmgE3512SswuJJryu3p5AGEojUMGf7DyeTMYExmYpeNJfTqUdMLPrrmtiX5uF5P1CH1cer6ndwbt",
  "key7": "2YR888LPv5Phj5N3hEyi9ajiPGbKd1LKPDFhUFEgjPJXVfjjAm4qk9nxiBw6nFR56jXmKFDgYogfrMJ7no6VvSSL",
  "key8": "5kBYkf4KVoMBLn36QMtQiv4kPwpyUue5ZPhn4UF9QbhigmBML2TD2ayUuVQp9EHM5L9aWftp8amaMFiH3d1EovcU",
  "key9": "2tVaFbSkj7SSnmTuKGUCVqUt4r2b14ZKVDxfuHNSymb4G5d4HqSKAiuYEX6uRkp3QKEQ4aU6gRT2TuVuHUPrHxth",
  "key10": "2NSbhtXKQH42zTbRiKjHpDHsn1t5Ct5sp2QKgEaTGscF4xSEHNC4QHxYUyeGFPShbXVkXt6p1t1qKetHFPMbeUpM",
  "key11": "ZBcN8arz4BMCZ7sypL8zGNbBtkLGeSKFaFXh62zZwetAKU4pUbXZMkx2zyPhEWzCBxfgYWaYh9CfHwWzxNS1dky",
  "key12": "4wnhG17PDtqyg4nBrbCvJpEn2y8t8zkd3srdBPQGw3KwSgVS9LwZDHxCvCAYjRvMWXS2Ew6xQzBenuUN6J792enY",
  "key13": "4Vs4B5vrVwtEdviyRfi3R7dwkVSZjtsvRmVPzmSV54ABFJSPAuBNWMSyrfz69BAdLoRWpBj23KuBA82mwktPcKVm",
  "key14": "2AnTv17SGrWEmxtxCc3JjxaN4QxsGG1maZv1cNKj2WKXvr7hYYvjPP1T5DCRpyrs4XWtPa9W8Rd9hai976ea7shG",
  "key15": "3DeN7ud1u9JUoACAtB26WvjatwM3YhpBMToYhjtGBun366fSYki7VenPkpuHumtzpdvpxGkKgLsEfhsG54H83WAv",
  "key16": "3vQMYXRf9GTWsrThHydBuWh57zQv8q4YiDN1fDTDEPedxJa52cMp77eXpZCnC5CsnCEiB79uZjRSguRpUkRe1PMU",
  "key17": "38xVj8DxHZavUvJ9QMJn2hmeM4M52BQwVt7m7xNauhZ8fKrQjgrR5QyMJeSo3Srpi8H9k2Jhnb1baLnRxxgEfPxm",
  "key18": "5qgaTNnKYaZ2MbgPMHvKy8237XXXweYWXQjDAHapM42NKK2eM9esPKDBydRB5wypHjPrThdj3x6PiKzbDhpqbMao",
  "key19": "LGynJypizRaQeCUpi31ZyVp6CmTjbDLP5mEWTgZjEMJiwYUT6YJFURQ8Cgnq8igxwLFUYzKWWTikZGF6uYSCw4c",
  "key20": "5EZidAUPX8ezKawprTjS7mjWs8GJaKJy4EAcoBxnFWBsc4YJytJiWN46v7hdStNaEafpRnGsUZqBedCcFMMwZ4Kz",
  "key21": "3Y3qjcbMmAoEXYpr8fv1RqfdTueA2RRGHjvE3rDdhx7enp26HTaJL4BXyCAJ238Zj6HpiG4EjURyg2hxjQT1FDtN",
  "key22": "5j8WDpu29QbPCr4CKykZv7tCqBcJQGcYVzix7QCvhGMYHrPByq8eC8qwwbMwcfzvbaLvUUdrucdceA8MYMgmfZPj",
  "key23": "3xjdRZ9GeLXjy62SavqLh2LNYShqajDLn99anHmxV3gYNFKzxF2xZ7bjdeD2Y9aAQAuJgG7iC9jz3xuqMrHLPb1t",
  "key24": "2G1yKcPtTYaEpRxaTgB2PPiZ5nr3a3YNJkUA2wjA4cWPCZyfEHa5un97adxLVFneYKdLQehRzGX2y2Rmqb7NwMPq",
  "key25": "2GFB9BDTNBXGLxatFgwjXrdhwtSCUKp7LHWq77Jy9TrMwFrampeZQRsLVwp3WonWQ48QcAo7pfgUjGJ3AK7f4Q73",
  "key26": "2tXMDEEmj24VgxqyeU9YCXsseZ411rCMk6EFKNcU7xE9dm8MFDFynbzGPicgLguY4NwDZCK2xbuXcWvytwW99Lj2",
  "key27": "2qZ7JHi2sh55jVQBr8rXVTXTSsf3KsAU1nBEyfuqu2VoJHG5a6EpXKrhYwXvjqUxzPCVM4rencBcqSbPwkAJB2uV",
  "key28": "y5XyiREmKMxADAmPxpidbp3GXuNqp3EqTgETeMy6HvcS31djTWa4ZqGUyCKNWm5BkCpfJCRM1gATbAwHJCB7WWG",
  "key29": "3k5ELt4gwf76cE1PahKkUUeEnrQ78kUHmgP2bbDhXnXJygc8T6vPSwtq9kfCPG63DQhnGXE8WNDVD3WuAkPoQ3Ss",
  "key30": "2M27FWUj4H7fJCEPmgvuT8gnri3c16Zdf2BruSn766MeSujhkynGBFFpoo4uuD7HDMPUnc1w3BmHQoPJuyUxDfaC",
  "key31": "5ukDUZAq1Dtb9hmSFq12MVvZhuuquWE8foCReefcBxC3u49bgJUqgnS2zhdLXnEr5nPPVEu6fY49d7F6hTgQJgWz",
  "key32": "2ufWcLcTQrGuWYpiyxWbbk7DokZGgZHSB1e3iYCi6Ax5sXVCF1TUSJDkqHZWxcQ9KpvvB2CCZzSDRPHWsNh1aSN1",
  "key33": "4sFeo6zW1LnVBkaxo1ZPy9pPeYbfN6dLC55vqTkcjMYMcQW6C8A4TULHtEHZb247cgWT2mN7FGXQ77EDTpKAvWzd",
  "key34": "2atUgQpSVXWMkbdWihLJoHRQXEigYGVUqjPuB7Gd9pcE4FnHBAreEnp6WshAAZSaH15hFDcJkCapHdTA9EsyVaPc",
  "key35": "28zRY3UYLHganZotNbU6P652Ytz8YntYUjbmWhLV9EUfrkvRFW4PNzU2rWXZUdVBB2LAwn2xgsrU6KLnA4UWBqJw",
  "key36": "49eWT3TypMGNPQyEro7TRdPPLM5ETZedKUJe39yFomeGqzwTzP9oniiA5hGaDgYqfLYoTtUDZoETgqDDVxovC2qJ"
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
