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
    "6qS9KQLTSBxZ2NKuoFbkLwJgYJ1s2pxW5ArXCLqj35jZfX6DiqZsQzodcpLEfbnSYYfUwto5RDwKiSN2itpgud1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54YA5e4vXvQSKgG7faR1zNt4DTvQNQMthRDirmYY7p12Ryh4vFDmAnCubw7rejN6TsmFzsHyMNezHc3jNuue3Hpc",
  "key1": "4dAsStYhiUVyFRJzHEqfJxZQJgh6yVtxmZxKwPa9oV33tqL4xJXMF7DNsUEHXrWEBa7X3zvxLRnQhvJKoQvnhq1B",
  "key2": "3nLrv5JLfrGu219teb9aHKZx64rR3hptUiA625m9kcnLV2xmD9wdmiQeBg3V3UfUgmTGmj9hhrbm5APhMfkFk5Lb",
  "key3": "3pm9mfs8epH9ebW7ju2havZ3zuAQ3wTW5FJrrErQLpaMhkJ4ukQ4yUbZF5ujsi4gpx6ctTCci5Y1JHBJC9RSygwZ",
  "key4": "U6NxSvreBDzrqvb8mQTxBavHahDbxcdmU13jPeCzufgWUi6435tSaF7J8T594MS55sJKbm3bwtYWMH7yCGzvhZR",
  "key5": "2btPKp8oYHBcrHpYruhryCgraoWBGy8yN7E6FzMWNZAhjhSYf8Hxwii1H1GvVE9VXrhK8KzSXHP4ejqafmog6m7V",
  "key6": "2C837qykA6sXWZb5a4gy9eg4q6uCCdVxf9wXDct132MxBJq6ZqRT6ayivyMKGLY7Y3NXZJsgjmVRJDdCqfaCaqi3",
  "key7": "2MTDGnZv6dPGojo5DjeqTvY9C2oggFh6JRVDbELAEvcBJgGdEttjM3FRvpYiAhP7R3Rc5E8ZVVkaTAR8eGqM6JoE",
  "key8": "3rxjNZFZwzEkConfzxFDwFo5orjTXraSo73KTC1EcrcjjqTDdg52MHtMmM2ztoS7gNiz6hNNurPcmtfwevb9eCwB",
  "key9": "ifGANxFuJhXdpbS7SN2fwA25opCJgoTXDbTZfUm763RYzzpgGTWhBHMRho65FfCLtc9qUDXYgH8DxS99nJnk5kD",
  "key10": "2ibGT6PeHLx6YHvZWwKtDqT4WnwUhUY6LZQmu8RTC8199jCrueVjjVcVVcHn6VXa7GAUa6w9c8fx1oBJubC9c7fT",
  "key11": "3yHdDSxJNB9Yk1jr7hKnZXh7ZYAq8nTok21b7ifVJA6ewN1JvwKSE1SsFRAqcuGn7rqSJmfuwL9k1nw35j3jLd43",
  "key12": "4sDiaoik11y1PNjPwMqBDZNtGfhAYabkb3T92CvtVndW1dFPoemx1tkf382FdsszhEFE6W4ZisR34jCAy97T1Zmp",
  "key13": "CNVUysZ63V5755DQ2NXaVGLKXFdFPJYtHanrYz4mnbqouTkeKT9Skr6Xaz4cVN3kEKoqAocxMLapMUTS36aYok1",
  "key14": "2jTVPbeKhyCSn3ZAmJVRsaf2oLi5DyB6NNJe4Q8NBBNDG84VR3DPcjNj8Sb5U12Q1SpoNtUpCuWXF6J68PGkzZ9z",
  "key15": "6iZhDdpQtydShbeUpxLi13vHmxK7nfWMSkMLsyuirnHtDEfYgUp4EijdTygQ17JqoTwssWodCgoRU665waMPdsT",
  "key16": "57gqn2c91ZcU8aJH7pAXfy9vqaxQR6GqiLrGYaD7rSXcqtbvs7qsnTiW5DcbWeUHKKE8F9gJvB5AjDt44pVZm6BV",
  "key17": "2gigydqhHN4Fdf1yLgMP3eZj4wsXxDmqJX6GeMT5ccNsgckgD1NrKzxC9ktxPWbqM23CV33JeHbpZeZnBZNSTR5f",
  "key18": "5dKnU1t4EjAx4LBi1SL3MeyvT1ExyPM4rboiquAWGX1jGcwifK9BSd7AFbixySZ4JwnnXCZKaKkrCR53Zyytrwi7",
  "key19": "5rt4dPGuvj7j56nboVxstpEfvZx2kmwuSGtVVWubWy2N3y41ci77wiWyUewCF3kR1yaxjis4DvS248iVS6YKLNP6",
  "key20": "Vh3MpATxPweFQLiGcN5gWAvvni9Vkgs9dedWXoCLPShqy2x8YN28VULEMjSJGF8qBzcZX76ohVfvkHJKNP76FVn",
  "key21": "bXqpYgqJwbs7unQGSM6breT8VcajWyt77p459niW96aodnkXU3cKMVhXHc6CsP42M1qBReDD7PNf8Aycz8bVjzf",
  "key22": "2VoAEr2NVwhrmzCkHiFGiHqqExENKxPBhc6qf7AePd29zbf2L9o85fbP9jB5m4ZCaJ5LqDxjerGCyoeZ15Xxkpbx",
  "key23": "63pqj3135JUp6P8BZMJqpXSguZJGWQWzQCqwq3CvtiyiJBGtAyvHWLTLmwTr2kSKAhXYfRkp5gr3euBkLEz85bRR",
  "key24": "4HVK8pb4YPBNQZLHR5bFivEvNHPXJgBzKbt92oTnSSgUWGFUpzqoRKRTCBP7qSk5Y8pVTbgen1gpTcmmqU3vDaUJ",
  "key25": "3TCR9pCnuED3D3MEvVtui7FLpZ88tVBGHhAusdKiVTBNKwBtHowJff2kGik5pUJzfgjSStrWmQZuJa8gBbR5ZwXX",
  "key26": "62wFqqWe8tt2kyXXPiyTwrAg5MZsB4FH4YrksV58k7eWR6DsjJXrbkQu51quLN6mrgsPhuL758Y82waozu9dJtJs",
  "key27": "Uz7KhKHfyJP6HTjNJ8vKit39z7JBZbXPwJrTqPga5fPFkvVFAPrSjN3WRj8vXx3B8etx6YspXAWDL3AQXoMm53V",
  "key28": "39jzw8A5EES2aGkmKLUa53JDhDz4wNUag6u5MVFakaZiCXiiB3nZ4exLihfr8HheaiQdpFhCe1zzaZzFTaTcL19i",
  "key29": "24pfdPDPYCH2DGNMmm2huBudkjC4tM2ex7WWhNSSRU53ioVoTPq8A2mH1G8k7WwMenRu8sT7D9khWkz1hKfRJvhW",
  "key30": "3PaUWXkQURaKFhY5gD4EubecrfWVZad1EBTL6jwGRGfecsQnYT25NwSvN9kGt8uMer4GkPKuMncskQYH8nfKEimj",
  "key31": "2zxGWcuZSbv14YTRC1jHL1RGuEeiyox6r8x69DcgXDr1WZ9v5KVDu7gqYrFJxgLqQbzXsUK8rx3hcXtVMwGqnDxk",
  "key32": "2BcdEh9sjijCyLmEa4hhD8Xr3dX9LTg9GnJzXqLwcTWErFpY1XdLm37zCgvnMzzWQtyyrboyzaDm9mzPdTvBaFRu",
  "key33": "3VgGne3jWam8wsQgWK6ssUiZEiTQ6azJaXLaXpn8qZ6qC37NJp2SoRHFX2ieWRuJPRGy5ZFhnUsekR5rtGYuhr1w",
  "key34": "48KVunhLGWqVMpEv1TvAWaBdfazhaey1KFXKisaDUkKvEmJbJPUMo1JVPq9gb52z7JcRwDYcTQDZT5MUrxzmzCcf",
  "key35": "5vKJNBPwnX93ATQ21u652MQAACGBaqwrCDAooxzEG6PKnCHM5Qca2ZnyAMSUTLgTRkRHXEcBtnbsZPc5kxPxztTR",
  "key36": "3H7StnRWVZWGStKcNMp5o6TBFvV8EGrHLufJyuYE6GxrdNnU8ZRzX2zUGMtcc8m2qvZxAGvXSMVQ3jqFxg4W6VXP",
  "key37": "4FHjhuWFvZ9pvVwDtxdbJzSuzuzmtKe3vdJtgXpupugUQ8yB7F8JavxvaaWdo7dPGCfBLLZGBgFneFCcssKDHCkQ",
  "key38": "2SS9FDKkJp8zYr4T5ZCzVEwhc46Cv9tbJdfKKSymKDkJDouC1Jtksy1oyR7sUGTZberYMMbQFZ1jWnmJmHtxiKsq"
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
