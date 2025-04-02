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
    "rxk6tPZc7uTaXbMdvtauTQdueoYVWJg2ernKXyVUBM1BUJbHRTCekwUjBSk49t7AGeWehVshnUNVBuoyDRqVakz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o5KETMNes9XrdZ5g5EykQYUSxA3fcTcwRmNJjGJg4UAmh47R9oxHf4Jm8RTpC2Nk2XZ822RaTAtbwSnQvqE6f8X",
  "key1": "EtHBrN2X17iPcQ1yzPmCwwDu9EPBJkHWYnZUUsGA5EFF5pj4vTobau7kdvFtcGKmfwxi5rumVGedB11TJbxQ8FW",
  "key2": "4B1fK4ySA2z7YMuT5Rnamt3Gwt3DTyKnf5ZVg6vKZHffK7ZPzAQS7V5Z2S2SitK6C2J1Qb2vgW38wf5HEXGFNAC3",
  "key3": "PfYitRMUjqWdkfXGegU1ezYyiac1oxLNj1UYiqMjC1AXqBunq4cm4coBkHcSmL2neyG4iJM4oAdECUaiah5qPWo",
  "key4": "4pAfjxHfmgcDFgAgn8AUbouxowYXn1zegrEPrJhgNyUQEbPZq7gctqoQmkjThmnpDUoePE8Wby3z5r7YzFVcUST6",
  "key5": "3CMgx4hE8onpdNcM8MhLG3mgYoJ6e19DnhRUq8ysL93tfvYqXdBmaTqAixXgwJprZVbXK25D5AUjDmvPBoPKxc9g",
  "key6": "4u7u52EesJEbNmrUFttYirLoAf1EEDc9MwpFGvRbPkiM6De5M4UWwgLtbsKBHa6WXznyUadrBff3f7NcG6WWgJ17",
  "key7": "5LotPQxxj4r1Y5PcnyrkCwoREBwFyWvojJdHkR2jmwgt7RGVu7VwpX2egj8Vj719Vze1qwsBUfTUNKtsTjoHk2tg",
  "key8": "4JCnAsUie9cdaEcHDNfWUf7gwgMejujk3C6U3sqVSyiHprNz4ttWd6xf4hfcx13BHiLxL3vu8XkWqL6Y8x4Fjh28",
  "key9": "3PQxRM1AzbVdDJU8u9uCXY574xuUJEKZxeTC2dmkPEZdThcttwtZBc72cGomWFaCvyLce5qqKw46Sypnw97SPg3Z",
  "key10": "3CTzbSpYRRXZSxWYuFvqJf97YU4kFgsYsjwUTMZnM9V4Z1sTD5opgnWMEEE8EETqBqfW83bndjTHKEb6wwKRyhHZ",
  "key11": "fDMmXYNCD3D3UFZfboDfj3g1WSP6TznSw4mnwC4acmy8VKPc9UzTpANtKAqxq1H5tbwuDAsVjAa1U6VMHM5pVqK",
  "key12": "4AuAHKETNyw8xM11xKikdNkoTssiNuU9VyvoMrBXc95Y62XpBaCVW4cZLNLH5RRa5ttUmdwPBgUfHBJhRN8FcMxQ",
  "key13": "5RKHWmdbqqWZZq6LAcWAB63dtRTxvvzZKqWydkX19m5MwbLiUZzoMHwJQSPm3PHQdETAJwWRqVbxzCbDfKV17YBH",
  "key14": "4k8wKABUzKdLfmiR8E2k4W9EEMtyAVQY9mMSms4njphfio4tNax22onr4cJkjyuxzbbCdeBhFbuqKR3kHq3P4LGw",
  "key15": "3zNBJApyfdnCMSiPChMp7DdH156TirKr2W4boby9b6szDYPLoP9oeZ9RJpWy4zFwK1VmLWGbBjbBsB2W2y2TtfTW",
  "key16": "B8F8YfANWTiJ8GQmJjLdDLiqNzKZXkjzvS5NoYidxE436Cvwb7umAtRAFZVnKyUvco4ZyM5CMAKPAFHiX95dEKo",
  "key17": "65ocb4JiCBqhDCvXbE4PFD7gmxwSfYWrqAuyKcxMetg6Gb4Yyb6CBjuBmZw4FyPRut5orxTyroHNyCsngnocSQbq",
  "key18": "3KjqdS9YxrESWaRHPeCzG26gmSVGC9wxVdjHHZfbrQajQQgGvsVS9YeduXJfPtwZyjEXdpTDH5qV5Ax93KeMoWTE",
  "key19": "66eHLF6CGS2ZSYR5HNfRrchufmdAmvR2eKoD6m8Q81Chbsxyz8WNjuGXBzLDrNMyvhZXM9aBxoYttTkvvFqDwyTa",
  "key20": "2o8uBwdbUb72XbGX4UAV4nzq7TAsSS99uYeSs83K3edz4w9PgpcQ8KcFGg2vdykGj8GYzXGc1iuS7RCVFeKCzvxT",
  "key21": "RQJtA5Bb9kGXT72JpbKhPPppcUK3a2DboTbK3zv3dA9q3aCcfGqKejkeFcBJH2Umc7qmmeNfAvHLyZFFnsMMBU7",
  "key22": "5L616sw4WVAr8MGJ9p4waBbHEnGtaLp4jMXcCtp7amDnZVbFmBdVpmsC6pBDm7nYNQQozM5cDvpsMLvB2rqu6jvv",
  "key23": "4bxVTVBZyfyqwdqVw2DtjxmVNkRCWwhvzTnmABFpNBBTnpvXHrHBaKmKyGPM3AYnNHfk8GJLsjGyfoBahPxXEo1t",
  "key24": "4ev92Ej8eyqp5WzkbWFTGGNatnPGhKxqg4oJT5DxesJEaiqj7oQKCbs49uDj7cPbrCwEQJUX52s2QnAg2rUon2uv",
  "key25": "3bJQ7LFmcpNAJe9YGksj5gxqqLCc1sH8xWUR5xwa4AQSvAB7H186NtMEcNBprK4Hz7JTKN7NvhdNppCyfKvhKURt",
  "key26": "3ss37wvNq9f7LQUPhwcYpzYTzkEMf2etos55gTirxSXosgd6N6i73zioNbGYKgjrjz8Uj5T7LyH2EYyf315bwUEk",
  "key27": "5TwWRDvEdsEMY2tVog5kQXrut4SvFC2h2ZcoaySWvmaQ5fx8cxQvLDyS8wS5hDf5mzF5jfPEQFTJoJuv4YPZNM7C",
  "key28": "BDz8CBsRcURDiJBMsxvHEXXnob7DU6nrLodhs7Rg52RQiukMYTRZtQsQAYqVeMsB5YjyAAnVzzmgcLsMj1aTtmt",
  "key29": "3A2NM1R4XWMAQUp9s349AAzaR4EAMszRPBPaACBCJGfN8icQqegkf6dwD5JuLa1XnWweCrpF5vVQnPsbQ3v45d61",
  "key30": "5h28P7Q7BXRitGxRo88CBHb8nDEM3QZbhZCuhQ1ZaqcZDSjUcS7NgCAunjFQ3fajrwXWHzCdF8xKFAhT9Q545GJp",
  "key31": "2sse9A58Yi8gJ1AGGTWF4TQyK3GxeCZCfnYqiceZLtpFRQcSLHEjc4FMUNCBf334dFJgJKbwXAaGgF5pysXhiCnC",
  "key32": "SS72NsL5s3ZKsySAvz421td6fUpLqPkYNMANTm3NqUvozsGCrQgfcvXCj69MN2xTbzgS9jmEafeb4JqzmGprRWd",
  "key33": "4hgLX1Xh2A7hHNRv48Q4Kwo5K9wrdHetT3xBYTu2zgARuDSk7afFzwqctGuCKHZt3KuyP6uFfaahERwW6PQgVWwS"
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
