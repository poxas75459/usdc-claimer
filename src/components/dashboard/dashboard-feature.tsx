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
    "3caUL6MEkLsZTZtJG56GYXbpFfBTFisuXeqShFw76eZFwFh9bTPJgXxPog6y7ZemBdhuTqcpNnJbGk5tweyAgnbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JnLqeGiyF5Z93abqhr2A48MXoBMcmgzwENrzZtXX7LkQbJzAa4tGvkNVwtzX5PWJthC633KjGpF7f9TDG7g9w3a",
  "key1": "5RJeas9uSi64rV2n6ufzfqEU9TXnejeWU4drKkb68GV52LaD87i2FWU6GG4HszA5VRq7JjLLwyMAS1uc3fmDN1bf",
  "key2": "4ggFDuKHsNQNdz3tEN8EX6tZ1poBhLdb2L1F3e4bWNHm82BEQMLxKNUn9GpxDApnt3HFnFM34DuBjKcVjpSqsE7q",
  "key3": "4v7FSFQazuWpSfi61tUzTeoVbojL4W9534uv5NWgJMDNRgSepYwG4aNqUmodQ3NQsKvzzHmRgDoKx71V2vRrgz7n",
  "key4": "2auBHof3XjMLGSMV5S9LsGUSSzDAUmoZAdGKnu55Nv5s5iuX6FQcaKBrTkfn47irrSPmQqBMBBjt9DZKZ4ZeWNuG",
  "key5": "5kTHFNzBf5pnLyQYEEo4NUnUfZLG9F29RF3eV1a87yZEN39EEouycDpV7ihc4nWeDfUXbv5UweSRwoWjs5a9orhm",
  "key6": "4ubeqJgQTiHLuKKETGwyubTjMoFrACNwMs4q7AWWyd8QbSxp3RuBq5wXeNE6vSauJmT9KKFT9TPC9m3XnfazwzsJ",
  "key7": "4mynkyZZ2HMoJAFwYQ9mUJgktc183VadTbencnVrouqp7XyTkLjjqm6hNEUyjjTYKxFRC2hBfx61itnaw9FjiXjp",
  "key8": "4DJ8dPPfw9MrHA9jPJLPe3od9B5TsZDR7aHX9rnoq8uRMFA22ZneBY11TbyfRu3LXALeYAMLD7bmDXpWSFJ6C4Wq",
  "key9": "4WcvYz7abJNm6XTvP3iV7uoTH4UuaXEeTcD7BRM483qZEyTUVV2EDUkjkLtUECE1QL1GVx47kxV8UZMWpMNP6UkL",
  "key10": "zt3jiDnMUp9Fai4tjxpcb7R7PC5hVcdJf4uKWPzR41kEo4WNqqSEA3kpQkwkGMNLq3odTUjJJ1yByC8kpvodJiQ",
  "key11": "tcPm6gzt2djMTvKAtjC9Sxgq9uYah3PLh56u5CnmU5xWifz9v9p7NSjCKUT5iXVugt769u4yjwyrYa8iSbeGT8j",
  "key12": "5Q3joGdkDoSZjn6RkyG8Qcfw6sEEvjwLDPkwJusQRJ3adBsTjGGiFcfYJFELJp5s872rcxLZbzaKYxBWC3K5MEpK",
  "key13": "3LiBvQSLHmpQ9DWRsuiLjYB7uZE14VmNX5hwBxEzZ18YSdh4UNSaW2Y6KBmQ1J7f7k15XfcciC88KQ88MMiGTYc4",
  "key14": "3zvHCuGS1L5cdqbcRzEY6k2hB2Jk1Yhm7hLjob3dG6zw37qag3HdvaA5Lg6Zj1cpVr7haaxvXR35ECoA7pQ1oKeQ",
  "key15": "We3bqzs3eHd4TRDTetbVHBHWRfDzsVqK1qmG12BxdsqcGTKuEZXkr66EsdwtSxyZNspjusChaggsgyaC46ozT6F",
  "key16": "4Cj2yqxaE9iZXiqy5yCsWwT3Y8HQ2e2txzfm5R4XGiekisJ3SqQG5orcamwvUr6jNt6AVi35HJdHbtpsDLaVZQpH",
  "key17": "3MjYZgyWta7NqP3UMGAbCxARfMdzSBB8GBNmVWfQGqN3hH4DkofsN8A9HMFZPNLy9AJnLNGJxrXrmaDwj7KqWuPE",
  "key18": "4AjTKujMJbMGeHfMCqoiVzL1GSwwoWKrkLAVeX3RV3k8PR8vfYuugscu73KNzr6tNpKKs61cEEJxLevP4fuGRnSU",
  "key19": "2V7nuJdZGdntgQC4qJMXJdaiZ3HvjwtSjKUrAxD623ntjf7NeT8Kyy6joHcYWCsbdN3KTpggpSx5tTHZ5CqGoQkq",
  "key20": "txuS5nnRLfe2VfgBywNXfVSMnMmA73S7Bhy7e2Z4LgqCYJzMvsftYJpnvbUd54zKHqobCRJAe38NtWNMMZrZFhz",
  "key21": "3zmmKnwZVgSbNuXRsBEw4pcmco7wmdA88h2a8ZwfjbJkPvmrty6K5E1GFfEgcPQkEsKwBVhFHTnE9HMZfgPQW4zq",
  "key22": "4ZvgMxVh1D5TaBgT4hPSaZVTEsojLv7uzAPEU6FRTfEBCVgB1YB5wgNn5VcxtycW9yHiVi223tcGtrN88iyCT8ds",
  "key23": "5ziydzARxqBNicRdubmiuEthDRD69kufLamE2kjHTC5L4WKKyPV4y5P3YDVxR86LCd6ELsJjrR5w3EDpkXAAXUL5",
  "key24": "2X6ohqESZbcehRg3yWZmvxkackRjH78thpnRppYhBKMQauCkPDsmgeZ1MbMMi3uMpvaN15YZsMyqCQBNrFQGkKHM",
  "key25": "GcWjePQ3Hmdiupo1sACosa7gbyYZ6aAh1rFwmMsukzPWGjMB7TKeVGh7Avk3adRLqFnBGXY4zhuTuFonaFpXXE5",
  "key26": "5GBi9x8tLxDzMERiwjNPcRe7cLkZSSma8RW799t9XWsBBohTRdz2u51uhsBbrARxrhym7EeCbtvipWfXeF75fARG",
  "key27": "DrfHos3vjdRcsPiL7TQzApPPJk5QrjNgowGtn1Nb4zPBgQXQBP1uVHupi8wSfCAC5s314mbn8xYWQq4Lhejv1a8",
  "key28": "5AoeGaKM3VuohxZEFGcpFkAMaVfSayNeTTncCDAXncdSuyVDvphyjCt44johLG8Ja838hsLVJ3HPaRTgKQkYkWu8",
  "key29": "4RQrW245WZ1igGwKT84MZkLri18W4ePR8DCFW5wokTcNc3PgEvfexrnPrVDXjjEJdWT1GHCpmPns7pVM855TBH4Z",
  "key30": "Fmmnro7QbiooHVNV69fMdJadqxK3iETMyzcEtxwSUpMjtu9LbYdjDV6efTXtpsG3Pmzsdo8gvS4R73mVcNDPxB8",
  "key31": "2Gv1G19UhryjzAutjM6G4CdgMoMJX1g2pv3Q9WRMXyb43rwSMnvNVsR4E5UBBHnnsHWgMkeVZKVrjYEs7xzBcTcQ",
  "key32": "3Xxrhb4wDBHgNrbsi4oknVDbGJgvMs4wMKifXbzTfhUdUbNEPYHCkQXdHqHdyz1RUEGqi5V8h1habb5nwv2KtDLk",
  "key33": "Dj1yKbDokUpmMABnVtaZyCHo8uTsnYUAiN57fAZTWmx7ypZbS1vMVtMmEUgRvaxyvAUy5kkDNZLDJcGA3hvPzWr",
  "key34": "GBHPigjyyYVLXfYGLicWBjuxE1utvS3p3V6reowgmjZzCoDHjgEQMwdm3FU1vJRheV2pB4tWsh5tqEcPMMFJjeL",
  "key35": "5qUktLDmYKZHYeUdUBNaXDhjuUqvGjor3zxj73wwAZUA3TMS5GwBbaGzr5gNSXzMH385zHc7MfHz47H9Qt1vUboS",
  "key36": "4415LK31GD2kpSGnLcPnNcULkLw4qNbBQs78ygDdAbEruVVq29Up8naJuFzmNGRMn8okgf1VoQdQmP5fytGZ7MP4",
  "key37": "4GtUgSFVHR8iDvmHQ9CK4nYRF7iuw6CWduXqKiFLHa42bHPTL2urqWzYKizmuCijdQX1EnuqiaSq1Y1PhZztFD2H",
  "key38": "tLUEonpQcR9u8YaUB792vHcusPuV3AoHxq1PdwNVz9YeHg3mrJ417BjBQj1AFKheyJaSY88EARYQXbzNE7zuQbJ",
  "key39": "4XWsgG2b7NBBMvuxKB6aqPhvpwnZYp9BpBohTQEJ7w5Dundf2LJSCTrTjWE2nVex5btySqQmLHPFUMzsvNe359pz",
  "key40": "5gv1CjQQaGhfcoaUSHiqZNdHcdDr9ncsq4UUDZRVyaHVrTytWKPTTVWFQN9hA2yAijnVMvyUmLmpvCddcnYZSESe",
  "key41": "2vwSNnTtpoWJ38Yyk8r2bzqfVAVtyUv3tq1DN2L5DAeQfwwCEncKxtga3HRLJViL2YNe7kJQD1L2diihhnBiDVez",
  "key42": "4x1wvoJVktcXqgvc4p8V6QK47uQYV7U6CvnYZtFqv7pfQQgqS9DQMCvCJvQe8wnQFPca8DnqA6aKbVDtubo7C28G",
  "key43": "RvVfDDcQdgtQTd2ANynGUiV9r7YizrUHNuzqh1H1ReqY48FoTAPcu8AEEiHH1hmqspfn2CHixN1rucAiqvZBvLQ",
  "key44": "BHsz3hFEXPu2zsH8URyRFUEEvEiCHsYeCg6pyPwk3J2Dejn1TjU3JTysdW7cgWrB2nqBtpWSEMZPXkAStsrSgkS",
  "key45": "5cK6VyynRghpK7xR9mn8H7i4V9WPdhLA6WD39S3TkUAxBDAfgxj3Cn5rDCBNtJVJJPzm4RcLdEjRQcfT6GWo7kKZ",
  "key46": "FZC4AZr8w8HrknJjjj2nKDSwX57F18mTx1XCS2prLWk6z3P5bTVHoFMgnFQvYEztyLzjmVVmBhSU7RRorUm95Hx",
  "key47": "2ELqhMaV8EDwDG359jyk8W4Tfds99mR3Up4abpq3BovZwWhW6zs9Z3ipuekaxAgoiq5S47N8YM1wpJYucNJoQ7by",
  "key48": "GdeZYCXsHnqLFCn3jqs6LrfsFt2K1b55qYdVeSGBLv21RK7PYSCVZm4h6ZUr1Dfy3P1jrvSJyDGSVQnJ42fuY7u",
  "key49": "524hZmmwWtsgD9frfG382JzpoF1XW8c8eYsJ2PXDoDWmT72Tbp9UHZBxZ6Jsx1pReXewAzZQuKWXEN21p5XX1HAG"
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
