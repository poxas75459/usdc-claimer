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
    "sWKVdEZBq1ybg3Dgbuy4kaaiK1hGhbUz2uDeAnsCpei4HhV9Kk8csjqfQXRtuZfAPVn6Dm5bKgrXB6mausg6DFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53VzAf8fkjPHFWH25mYHRcRVKcriMwNEq8MFAekBbwFaXKRG6zpZSayj8AeCDYsffXvu1p2UWTHuxGodLAGtW6dz",
  "key1": "gmMgLEUmx11Dt9Z66Uz9r4QKxCC3zEPCQa15c7zt2t7yggXnpDmdHP5FHET4sxEDakGMfWsEjXzytD49ZZUtHSm",
  "key2": "2T3MDeTkCR6ZQFL95gvzqNa3aQCraKue5AqoA7Mr4jAwmYNp55gunFyXmhddTbsapGQFhJFMY6gMQ7PiAA8gvAEn",
  "key3": "3Thr5yb7RHk8bU7dxLU71FjcRtsyfUXyFBtPyRx6yEr8cvzdY9Q1z47Qp6rj9dbkmnkttZZDTnXciX6iRXn6RpWo",
  "key4": "23BFSEuKC9AbgBj53k9nT6zV3FfBqDb7UJ5JL4HKgy7oRkeNLH6iN8yeSCmvfetUzL7pTiJ4QPNqihK6yh4sLRba",
  "key5": "4VF9SR4kwtWPMYUG7xPuT19RJzqVj6wKuDsorwjRn5k9pRHy4viozwMFG59m72yUwndMbSZNc17vWoYKR5fvoggv",
  "key6": "3wT11w4UXCiJ1Mjsc59gVwiVqyvMgiESLW9NpS3vw3x6Sy8by7gGcqBsjLhStBRiCXKNvhC3hF125nC8v9LmKiU5",
  "key7": "5CmGS6cadapUEzV3JHTUvT45vL9exgtJpwEMZ4QaHtztDCfetiGLBaV3BhYfKx1UTzz158AV8qh4wCyCfNP9vHDu",
  "key8": "3PxR1zAHgvDFwvD2EmVD1exHQBtbtYdVwMosayukqnHXBzeGWnXuR9QHUip4bfd8icpAntKXgjgPFkzsUQ9uifBk",
  "key9": "5abJiGrgW9eUHhhvF24DjCLX9qbj2NCYiDhYUPNXbivgaKjckgNMAAu8dtPD8SUp6DNS1ZySk9eAW4GkYgxpUm58",
  "key10": "3Yo87ksaHJFXgB9CLQQAdXW74xH7Tn7Aof6vwuEWqZEPQ95cdve3579YKJfDFptoy385xH3qV8P3KsR1g268VyDy",
  "key11": "KiGgkJkPw3oskyNoM6R9b9NUgATngGgcS3Dzm7t1aNzcNmo1BC4wVXptDQW1w625n32auaYeCnKgy99bCw8cMLM",
  "key12": "3hAcjfWGnurCgRBDscGP93XfbK8amSos5Pssooy8Q5rwA2nNCJAuDoVDYQrwGDJvUHUwL9yfccXbY6p9wqBmzrXg",
  "key13": "55xxUVEvoV1XZ6PnpSFwZZs2mrS8RiWNRBt7sJ22ChR8MBuKTYPHS7G7WEWMYp1hopkrmAM7j1KLAn8ezKKE9fkA",
  "key14": "5BPSqwPd6WDKUC7AZLfVNkPcPkWBxhMGMo1DonFqLS6EW7XMp527hbdDwUMcAqWECuWS1P8HqUFoGFLRMnY3tc9q",
  "key15": "3NjkH7YzwygqyX9uQ4gbhrMKaaniXtRjkMuPBoeMR9ibKFGrQBEF7959iKbVa5KxQLz2Bg91nbPTwjzK8RTAEx4m",
  "key16": "3p4tBNpHrCgcSxjc1ES4ArFmscjNFZVCSKq2Dv5urkh9YbAhn5eW9ZNgSCQovgWWXrKGVUVSRtF9oGEBA1h1CdKp",
  "key17": "5tLRXm3r6spRPk4Qoeg5NfFjhpJCB694aeN76h9qsVDyQ2qSwfCi7hZCmhHLMuUq9JAVXgabgV9XKdZyHU7xfZuC",
  "key18": "5vUv4mspzjWqbWW7RV3aqGFxRV5hxvkhHjv2PcXQdX9hB61ChQejvp9aAm8CLTDLXiy2dji2Q2KQGrojJUmnFWjz",
  "key19": "4eaPQUppZtjzcs7u2gBK6z2tc4aQccArNufuv6Aoju1P5mtezNCFxcJQKru9H278fVwpBmTVFybePffH59ZXRkZB",
  "key20": "3T6mRFtQP3Gesz2Mnk8RK4WfgMyYafrcncZqh2e9RZVAjxUJSLGP3W55gB1ewSmc59jj1snumeH9DzB9kmfx8uhY",
  "key21": "2Wd1BAPtyN41emUXDVNGHeQDxjkAg5VtAGcd8mDVCPBjppdwzr66JdstYWhxChsYcfyCgGmHWjkSaguW6GfhYG4M",
  "key22": "52RqzkTXKVpxUxorUjGpDt1vdXUrTgfgR9R1BMzGCUQqpPQ9Ufom9rSRbdYxhCzDXpeJBhf4e2EztFYZFNcRf1He",
  "key23": "4fCP2B3ovGWSsX2Yt25E6B6CpM1yboYCNU4gfEDrEPM8GP9vTmjRRLRfZEJ2Z7jCRNHH9jP5DZ7SCHpaHD99q7Zj",
  "key24": "5gMwPSX2S3J6DA5kuWJQoNC6nDfhDcw1F6hpe4EZ8DEyDduotm7T4upkJCjM4MVzChKBZCPzTRpDssGrwbADFqVo",
  "key25": "34TmRTQtZ4K1eQD4fRPUgvHUMYye7bHWnDEYcB97CdN5VGwCN7bGrPka3Kn9LckHHVswysEqAXsKfY6mHkxNdai7",
  "key26": "zBDBBMDbkUwMD4R11kDM3pr2WWMWdUoMV3PK58sBxCLhhxqHTLiArYWZFZYqE1ysswyny67fQ5qTZKwC6fbCcZM",
  "key27": "528v89v6bhqZGfizTxpxovuzSooAf4fqxTa1uqBwV6FGuTA6pvkV9dnUtfk232mxyjVAqsbwFmRzF7TFtr94xnas",
  "key28": "3J912ucw6XV5DMwTPNAqhSATcDyeuR5TDY9JQ2qt2ukRZr2MgDw6PxK4WYj3FQAn6cFHzKjQpuNTHgJ11fzEZYJ9",
  "key29": "2Aa8xk6AC2KEJm3uYgtNQk3YJnD98T3yH6qQ56G2EPs4BXA5GnBU9x8rJ3UWSNVbfPDPgixHyAZj8UcnnUYF4ZPK",
  "key30": "5pvBVoXzYNsg7bYdT9JcQtP18CJQRWZYm4vXodFPrzi7uvAGQcwZTt6L5DkLXcUawPJB6MxGjaxmce9WeK415dew",
  "key31": "2L4SSgxpexzdEEbpYcoj3a82ZeLjwvDThGBereots2HnoQZ44KxZJGDTB2zxsKptXi8HAB1EWVo9pHVbw8dUAVvm",
  "key32": "5kCNwmznDuuKvGJTAwsyRHrwWEfPiURkp8DRG6MGMppguUaSacQ5pvsJvVFDeTzgZKRtPgBfXWJQTtxXqcsUbHs8",
  "key33": "62t7CFtCD3He6UpfuQVxj5aBbVp1xceZyts9NzxrrKm5MgiUorg958kBDDgS5RukCpVBjhXeYiq6XJYYCfufgoKq",
  "key34": "4nxwRRU76sSaMQQ6uxZdi1eidpDdBjqyuinzfaHWJCBHAXC2DUWcDM7rz5HeoX1jq6acbWGQwRbUje9AYvo833LW",
  "key35": "3wHxsknH5b7UBHUNwg9f218qCtEMdZnFZhif3iDeBtqHhEAFwnt7ims4XQUJUTEyb6eDZrshj5gbw5qZwx32RhQB",
  "key36": "2cKzv8azF2BcVa4koLwg66uTg73Yoc2p6F3V6gHscmAC8KGCmzEHuiwcxfQvkcdmkmo2kdJ1ni9DpoKdmS9LaHiU",
  "key37": "2NMs5TR3E6MFWvkAQEXNV3Cr2L8wCKdno7nE2w9EWPhy9bhftEcYUd7eVzwjQSe3oybCjXm9z5vf2UckRWzX6zax",
  "key38": "4Mwh4UnzzRV2u1RmEyuaqkAQY85auqUTUKBbHrFWF42S7PUF6M8WrTbsGrkbbzP68ud6uJxMKp2GHWenUvmhmpGi",
  "key39": "5fn9jFrzGbE7WqpcjnSgtWwH6rrx2N5yAgwRPaPxB5uNQiECdMqs3e38aV1BK9ymbrFptgTuNJKcCvtGcnZzkPAL",
  "key40": "3rbUcMo5WewV8woyaCKHjKCh6bwZqhPZaTxtbKhWonGJUEqVK4u3YJgDkRrCEq88Nazk66fqAD66jEEzFPAgiKFR",
  "key41": "3RPojFCqp391ZBqTzszVYSYrwWs6sun2zQJpNFCtC8JyrLdTnPt3uaFuYZwqg3A5Wjin3fY1X53n6m84FoxnwSw7",
  "key42": "27PZzpdYa72idsY3jEfKsBwdn4QHBQhrSGB9PF2sKARg75sJEJEFg7qJtHyqLNM3RfU3PEn2NS9Sg4zBfMyP4cKi",
  "key43": "5JQDf2sViuxZf8rHMAGs5UeVLdcMobj645T72s4eZhNDwWQNci9vgC2MTxg8qZ8MTDh6hS7UGXuoKk1cipJBhSx5",
  "key44": "JYygmXE8CHCc2u8b6KYTUK7z6sbKLXyH6ErbaL6S9mM77dv1gmGgpBMpzWBqoVigBdZsKy4H4g5eUuzZw7cK8BF",
  "key45": "5HqqzVChzrQdsfxVzeRM3FhBWiyPjFARCka1RDWupjsLEhhqugYg3Vde5V5tbFj34Qv59EqdrT8nNUumCH8GX45",
  "key46": "2qHEs9o3nENhGJ46w1EtHjbLX8o5FqYNGfRa7A7FTEmzBtju2cxUdevDaNsUwxR8vcxHvxHnro74Haf5i9CBUqt1"
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
