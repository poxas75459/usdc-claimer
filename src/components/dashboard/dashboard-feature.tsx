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
    "2VYbjtCAnVSCtyLc6dcNDX7BMawLp9efsjfuYap3TRwfnvDnskLfFRyczwT5kPM5qCSo4RnLwWLWbSk2dD25Mwhi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21JrHpWZSKxu2j5S6QvHvKn1TKXW2zyZShrzFtGBLQ3wHZHNvGatgX4E7nNk9ozhvD9ywDpg3XCtyaiSrAQppCnS",
  "key1": "587LXiQS3uphJNjyAroAm9pH3ibNQAnjXEbeRdnsaBfy4jjTPnKSLarjkMxzGyhXhDdR16hHms87UwvzmppbBoQd",
  "key2": "3zwTebwTX8DB9n3B8a1JnAArUGMvLFGgsbGsS4FyiKL2cxZaerZuPwVbzsMcQXttmsR1ZzV9vPHscUTR1MYTkRq",
  "key3": "v5nGUXjn8tGX3eEh3VgCyg9M5APGoDB2dRHryUy5YC8yAcKQEuqkrY7tJe6mNkgpKJacLW5sPtN2xSQAwyrZP5c",
  "key4": "4pdZcMEbT3751pp9jVnfpv3L4hxEmFy9EZqAfjav1jSisxXM6CqqAvRzVRWh4qVikCrF7tTayYpgsfpJ4orjD38D",
  "key5": "4tTHZLbGPEDR47McfPkKneif53V98NVvMd3u5SNBZp7qqrBHM4Qa6JtvJW6oZ6R6rNEsxqqSwNVH5jDQdk5k8iq7",
  "key6": "4hqBHrTgGf66VgeEYyBiAvHbAugJVPRXem54ffvtoSQLzjZaqKtEUDBeZrUCqC6YFEfEpDQ4ytMVtw94P9iASAwX",
  "key7": "2rPHtEqjS3kTPLKwBY3vjb94r54PNUixCiYLEstUFL25x2s6dMLWotjoL59fof5hB4r8pUwr4hASaRo2sSsbaY6z",
  "key8": "5Dt4HDHCjhqfcqb5vJRSsiQAjjXw1axe2Skiao8a2ogLVUpCVWcjMxaaeNWic1baeVCAeAGhnVndbuGG4m1PG7DM",
  "key9": "Vdg3yc72yczmRnePDhpucfBFjMUtaYecjY8Sp1kzSzGcxjbHVswkCXtotG2U2muuitCjZP1DDPWFG5MMtTAQhmi",
  "key10": "3UxGAn4k1XAPjdoZ4AnDjJy1n6kf9acJB3AYDre2PcroSHUyWdc2EkDvv1yAF9LU55sbj5a6KYUSd2cSRDfhxvtb",
  "key11": "32xmu8e5eXbbiagG4odJ5gDkUeyW4AJoZjQ2cozwPBaYXriPxiuRKkxURqyTyRXZb1CPmrNwTYU4X8bY2QqDH3us",
  "key12": "5bTasckh8oeUxfhkd4adgfJNXtiBC1PVYnCwQiRV5biKs5NMf7wCP8Gmp6uEFyXD3ohdR436Mj9ooJWc7Prj81NB",
  "key13": "3CwYudraVzLWH46a7yPxV1BsoLiMfLCa6ZzuMwtidWMZgJNQMHZGuVCzphsPkYMWE2Z6hFDJSA1H1HHPUdd1A3di",
  "key14": "2waHiNgTupgbw5wu5vUc8hzjyNQ4bbQMhE7yoR6ugwFKbKczYotW2V5SKbL4kPqGfhKHNLDhqovS4FBhdCprmtPD",
  "key15": "3VwxRnZoXWLA7JGvLjWnFfQaHE7QMVHRT1PtbiLaeJzZVfYM5a8q3deijhjMjPrzM5B4L4aKRd148rQqKMKiNV4t",
  "key16": "qk4X6KVV2G3T3ckVBy6pKm27eKi1WjtiQ9w8YxYkxGKYmtHrHrTKHH7d8GwLkHxqUFk8iEEmNYxfWBhMba2HBL8",
  "key17": "3svgxSoCwFCHM1PGeCCgLwiUqrYSkhAG3gFaVZ2ER1VnLrgGDCumYhPzcgDudga59tinHtXkWZkGMk9KkUyC6t1K",
  "key18": "4bztDD4vvR5PGPb1oLbcV1kjHfuo1HWzwWXJdtXZ5YdfipPAfEFdShqhYYsCBVpgtbMVrmnvgnG5qjgCq3egQKEq",
  "key19": "4kGaAsYysuvzfiMddrxWA7484v6ZbW5dPaaHPh8iuAuMfkLs8fjPPD22BDFAbHFAkMdkKFzqh6MCH62NPJ9Srdkv",
  "key20": "4Ket1AYvQaDkLZK5THYs935Ke6ceDN1RjuvMW6EvifVjZhspeAgS5UZB5PUmWUybya67si1M8g5MSEDHneiiugot",
  "key21": "52dHyDcGvZ9Fr6VYBSimXyUgaXwaiTiRaqKvdWJSrzZtUJuUDSE24VXDYBNYy7v9rUvRBpsL4Ss7urgmFGZSzkH6",
  "key22": "5tVSmxs7QKh9T8py38wsPvcMhQZ8WJmLC8Mbrs3TqfVb9BE6YviCxMY9t62afuEXEbsAV1KzXcmghLMBrqA18KWp",
  "key23": "5C7m3rLkFo2gsUy5suGepFCpY8T3KgaJQXMbnugZjpJPq78SRqTQ1DkuhV2qLDbLftYSCqAsRBxWSWrKvT6X9kmW",
  "key24": "4ymz1JqTfnokpd4aUBJ9oGfQQ13QX8peraxBkyaASQxvjgfsG31p9QQGmaFmT8QmQKuRwe1DBEJuhTiERsw3BAML",
  "key25": "5omJj2iSDQFieQk4938WEwFJDCdo5CMKzS7DofTVzu7mbyLCkg5YojybYE9gaDUyYHd1P6bfTLu2mhzQucspopUX",
  "key26": "2TsQkzqKw6c3G8CMypVzHryrKhyxyGERbr1DGZax4fTSL5gwvxSoh4wZjAgVWGvpxEAC2pBJGUfQ651Gyk47FHsx",
  "key27": "4wgfHfHskAc9SMH2cyn9tdDQP7UMNbu7aDBZhVtfbzdQhjejCeMY2fC56U1qfDxBwCwCBFG62NQ6X3U2msGZKKJq",
  "key28": "5F75TfCuRu4QUUwdgBhzRaX1qQ9xMVDyZED6DWoqZoNdXgtoojKKukiQxDvKe26efcUuDWq9MXyit8uyuWa6GL9d",
  "key29": "3afCUfi266MHwxUMCAGtA6pPhT2Bftt8PnvT7oUo5nN2iqaUxNae4VapVUg7cmKuWhCsvKk5WbbAzapVscNM6xZ",
  "key30": "2Quzj2gzDzRwzS8LYr4UXq2kAQp8jxhGZvMG4qcbN52Ycps6k5N49jN2Skwcp7RvywSYKsmWQvaa2SJ57aGcw3d2",
  "key31": "3a83T7TVRDoyKHefsnHH68cVBNSmUKTuPhFuCNMtduonrnLoY9FpK7uvZxzRKS1Mdw6amaMT7qqgs48nNxF1TYxg",
  "key32": "3PewXX2JxiR5JpmA4ciBTWNZUqCa4zwUJPzXJ5HD9uokGfUR2GzxQpKVCkRK488QTndP9sh7nZ14GoLfUjeUTfG2",
  "key33": "5GFfmhJWNjDL7RW1jseT7FmPxZFFfqzmZqTsj6M3RjZAFzznAdz5HatjfbHBJfz6iPiWpSzJVVx8D9tAufh4TSFh",
  "key34": "366bQkVv9C7VFQgMnvgKGSKt4wZHK62kntrJ8Ts5SzkMEVuGAk2hhwTsaUz5hinHRLSLuagQLAnM3qSBKUGqFSyF",
  "key35": "3GE8bk2GRjobJSreesiC8YzXFicGZSCYMxqu8voa4FWgAKUoHBwXwY6buwkJGWPVsgq9adEC6c64jUx9hUBhhoxy",
  "key36": "2EbPFZMC55Du9U7eb3Fj2BnsDhEasK8V1nn3c6E4SXsNczTQvgZ5KPLDSWiRMB2edib4nkaNyMXc7Fj1m9pcUDsP",
  "key37": "5KL53wzMiLkgEtriwU5a4GDko5kEdXJhSyKtxVyD9GTPB3Zh5iqY8WLD516GUvVpKUCVujs57rXfVT658CzzgXsG"
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
