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
    "2VwBkRDGvgr5vRE5SkfhEnr5vPBg6mu2xPvnC5ASSJzyJJDuCMbhRCWMr5SZ1skotSzTPbdv768G3aire8i6JdzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z5qZqanePAc9DwFCzWvaHPK7pK32ZZ6quM2xsoS27zx58jpoqg8AiXFYg3B1g7dASYFz9Vnr3iH85nuhBLN4DRz",
  "key1": "5kep83fDm7ktc4Bju7d76fUhzV8qp7HWMuW59uMckbP4THq2GyrbeYLGHZKCBVVrKEKn51cQ4a1AwUHWVFTiqF7U",
  "key2": "5GRXwDp6sVKJoCg45P9YCo5VFhm4XZVZhDeFiJiUZXavR14wXktQJmSa4LjXekNobjznQhA1eV9U8r7jxr25wmN6",
  "key3": "5We6xQpCNizif7e2fdcG5t5eair2NUwzHmSU7zM94nrn25Yp17ybGJHSYZdvbh4BtppFepfuCAqsHK3DGvsMRx9Z",
  "key4": "4WJ9SrZXzAo3FZz5tDa9T4ynko3g1osr7qEE6bToAYM3dCDC2WHzqUhmbAhQJWC5RhZhWU8LtE7JCyoGqyRti9CQ",
  "key5": "4dD783LX2gjNCfbKidbcC6TfH8qo2Av8knU45BUWf9A7sZreXwHpDSaWdk6Dwm72Qo2PaCgKo8vpxhC3PnQPYbnN",
  "key6": "3iQP31VDtdHQD1M6aDuiZkLMjTRDUkpuTKPXNgqtjgkKqenRGmKi3iWGaL2xgaSWB5m6q2eyP5vjEne8m4kYDBFe",
  "key7": "4u4BAGjkaW7Fs43CpsHNUWoGViRyiwp9UxDGf6SeDfG1tJDcPqJJkryVzc2Wsjc5qHUx4ZfhqJvD6wwrYug2KGpB",
  "key8": "5Hc7jZ4tx1EbdFmbmfGi2D2HfHzDw9kSiaCV5NnTJdV8VFgwSYRGugGExdi8bSK2kyDMyxxwhdoo278T9e5TgHiW",
  "key9": "eqTFiAgxWHiMSnqA3ZSpqsZG23WF7QorZzfCWdm4rMUESuUvA7ohcedHDL3Q5WT7D5HJAVyN8ESc6pgdtNpQKec",
  "key10": "iT9vSSzL92e3UCyNH6yvZJ5mXkXyD9JL6C97xp9fn7zD6JLazNFPogsEf2nT6uf4VjtjZHaX8izPdE4uo9mgrY8",
  "key11": "8WftrKvj11ULY2WAQDcGpM3wsUhGevXmGZUs4FmqcS14afdQ968hbW5M1UcnnUKaQSGbRoqsp8QiPuvty8mz23o",
  "key12": "5zqjw8PFJvCWfMU1xbJ3nsqYoZ9cuhfeKTzADMfRL9iF7SzCWjp1w2LraFZeUViQTog6xpLZjjb3H9T52TzbXScx",
  "key13": "C2QCEZiAsf2FDHGHZtKaBJy9fBNiF6RXDBuLG9BRNQT8HUd3NcT7n1Ga34KRVu84LbWBZGD6LGWDGUJmTTcjmX7",
  "key14": "3kiWSGeZF82cpVwNPEF2e782hSVMKWLpkeKtXprM4zAJQMb6nnsGoxqouBRdgge6xQG6C4XRKynwfPvNegJ7q13n",
  "key15": "4RALicEp2w7wzpGBcwbQtA7L2p4wCwZNUx9JvWB5MkJyzppjDWj6C9XQkkGZpfssVg33BPEM6KMWQTpn3Kdh1N7a",
  "key16": "2uiB8wSE571CiHDjuQ1ePQ8VVJpVLPriefSq2ET7acjGDdhvGqs1JWCx96mxDwKikpZ7QNmu4td4q4V4tYwK9yqk",
  "key17": "5wRBdy3dFvNZ7dJ3ZABnoPcW4Gq1XCrg552U1YBR7qZyXZ5PJGRJxQ9aoXsC8UnuLD3VNjLfKtiD4ATL517x8Sry",
  "key18": "3rtWzT6YMsPEHepsZTJf9beqNVv35HgjkGef88Ycx4HPxBymggdAt9PmsFBnLgN4sBhJrobpP2S5k7eCDZ2xBNzq",
  "key19": "5PpmqctmBiesmPvKuDTSSnDVN8ejDixP7h12FhrmsEUJknaaZGeqD48w5rFk3r4GYXGuMPwATZCSMkJJEiaPMVoF",
  "key20": "wM77fxLG7kWjJ3pi4qhkntbZibre3P1etfP4Det3Q86yBBoaT5TD9jFYJDYifskdrm2mMJtKtGUS4RUGTTx23BZ",
  "key21": "3dYUBRVQYRz5iTv6p8Xs2VimZhaJoyZcdpcQy3od8Doda69YQq3v6tdEUtkdSebvNTyxDoaiTrc8KisE1p3UsDDC",
  "key22": "5xP4kRGwZ3MQKMvHd9EtKanPSLgEUbBaCxMxGurnmkTtU5tWMpJ6Vmfe2ZEk8FaFG373E2gT3LagE4kfYXETJnoA",
  "key23": "unafZUzBLu4nb5JwG1X61DVpJMokBKG3YJpLwwaBxJLpnPf5Tz6h8PeRSGttYuJMih3HfimbABwGqcpneYbNBjQ",
  "key24": "5y2X2xmFABTSDDNdpN58vE2Sp1bqDdJEzmLpHb9vdu8gwab8zqpSSCmQ4dmPoSnxc794YHUU9UXAkjKuqRHhchZ5",
  "key25": "3qRJkQLEXEKxAnXUdsao4jtXNLAJwK3cq18Fbnk3koz261MFyFA9tk2KiM9K44xiqc1jXv6huV5WywGf9hqfWy6f",
  "key26": "5ifU9fYN5SUrG6gmzj4GymdB4bEj9e6NUrjdmoFwW2hjsZmyhXRAdXSspD5wHG5FLH596AGbXR8DVbd6vj23XQTC",
  "key27": "5jwc4Jd4nHPV5Z3obkcEfuwTAnyax74DEkPrgyVSUyPGaA9EHAjd7gfUiV2t8Jpz9Qhw7YTxFquhbsFPQx8WXroo",
  "key28": "2CVCyPDaVWNE7fY5aiErYgpdZg5s7GB7TbzE11dXX7mruwMKVeLJWNY5ZjP2q5Fmm5Thv1BhPv6cErRXeAqyV4WZ",
  "key29": "5cv4shfvyGavMDG1BKSqXEjHTkxPn252UEREZcd2ZFGJVipVZwKQukAQyPyCLZBSsgjeLz666BuKPGjgrMiWppmE",
  "key30": "3PuRiN4KntVjeP8yuCBn6ycdnFUdXsnUS5pZp5kFmJb431ALo5ebHrGgc6pKd9K44CjwXbtqSPHLKvnCKNkcxum7",
  "key31": "4johHqzPsg1fUkRHJhqTi1RoEyekeiRmkDtYN6A3XXrFEaug39AZq2SAAftgeFSxpeodmr8pB1UW1LJ7PxwJJ5gA",
  "key32": "4b4DwPm5BtJ5zzjjEsoGVyEu3QVTQTSiwBM9CSibJ9YCVjMFK1zgYspmdoQncNUz4wu4J8ALKj9jmSsFB2hHyvpL"
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
