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
    "NhwKf3JzDNm6TRC4Yb3R7ZvLqqQXj7qMbWSw18wnAUEkpGnSrvqorttCQyhptFHmtz7VbFATnAD8NQ1BXzdhsTy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E4B1eD1FJ7e7z4ndxNzWe7J9nvpcLi5JBJk9F2GgLbRVzkZ6AEts8y67BN912oLLZXTFVPhVyCiPvSUXWCSDraY",
  "key1": "3DZVkRSs15rqX4B8qhez2YjMF3dB8px1k2MrK1q3tJcxcoZaBohPy8KS25UTaM9GJRrtoEWx1hAZh16XZH9fVXgF",
  "key2": "4PmnZH2vVUMHs2WrduHSLaDniMcCiy7VT1WGsoZqBvAfMZzc6hVdtSxfPGLGKAGMW9Mo4hD7vnBrarM7RX3vnE7J",
  "key3": "4U7dEACbX471GnGmMW9xDzjip3AHcsfVYTL1MP5xH4CT3CKvzKTUh8ug11ziDPooHrUjqJw5f74vTcT9j5EMpFir",
  "key4": "5H2GcjcxsgnnQnj6GW1c4ossScLjjYe7Ak5t7zZ17WMzW4wvAAEVDENRr9u9fNdfpMr98spGGXH4gHvtTk7NUbFt",
  "key5": "4rkcw8GcdNaw8Yoaxv3nWZUbsrBaHsnvY9C61HBuH49TwoQbrQK2oon6bBGbitozKcHnyEMtzrmpH6jBtvDWd6Zs",
  "key6": "2Y79HWjFv7nEPoWAkyYNQNqxRZn17cR1TdVBCT56p9nJytaY2UkaPVEDsFfiTMyJRMdtidhTj1c6sspxPMTG368T",
  "key7": "5T34y4FVQdjAHhiyRsH29PFXbgxwwbKQ7w4N4ViHfGMFs2aWRcJR95tDwApHLKW7MhP9jYVeAfgHQBrURfeLnT6d",
  "key8": "5X2HZs9T8qh8DZzsyVs9xStMGrrgYGxsqXm1prTB14XhpECc3ZaPwoQGkaQoPVi6Q6pkpow2vMWt9ixUxZaTPqxx",
  "key9": "5UBpqLi4KNvBoHWErjcoxpY6i9d4DiNUHMgfGMhvVwvnRtXyHhRMy9q4v1y8c2eLuFpgiNtxNKsNGTqh5yWC3bMg",
  "key10": "5TN5srEVFZycNyenGivEp97DBuEkvsDQ3Sd3shwXU5xLEFXwPPNvkgESTGQzwpmE4CHFsjg6mU95ZnpRy9uaeupM",
  "key11": "5b9AstsA9iXC56y6rPErifEkoYTWhnKiJ4KHzbNEcPBULS2c8cE2493CEtUuEeDsokqCQ5BQ1JdUvvNCYbY9XqVA",
  "key12": "2wMipNUznxcjUtz7JoprYGu7uSpz7JrcTFYL8Lp33TDCpvr8m6YLn3o2kDadQ5QdYfMB2M7gpQz8AAEwX5Z1a2vx",
  "key13": "2oFvXf6iL5d5AFahEdHrpbcJEUAE6QHw2UuFKE8mfjd4ymdwEzTjfPaPhSkvPKyx8j1WNjDWbYzJMkscB5iqjhC2",
  "key14": "4TByYfKeusxkvvJjNajuHnoQ9T9MxJLdqBkJxWaiRMr52zt9MZpgqgWYPrNPMNeaoLWSxLnnhfsXSKAgXPxLfLHa",
  "key15": "2fzWRMAUmLGFcrSJzBEDRwoaL32JC77GBfrcKYicDd8zfJAYUico3PbKkpuPfJAcAoEFq3EhoscJGfhkhVg7dkoX",
  "key16": "oU3UoaE2J41tVJJdNdgULUGbKFWbh7ndRJZGqz4Vg8ERHpdHiw764Tus592Th6ZoQ7NrAykucHZjn1F7BSGwDLD",
  "key17": "3hRACps2a7DaHyKnCLszVgS3ohDpfMg4iKLckkHbiGExBnVMLmNGSZTMMqrajbu7QH7N2FWZn2hhvXLy5rpg8AhT",
  "key18": "7zC1ZakYS46xbv2LsaLJ16cVMd2XNb6Pyre2gmpGLvkxBUw67RxghsafgCmCqR5Z3BuCBr9pRpV6SyMWjUpe9pL",
  "key19": "JRUUPoDQEGTXgvcLoVGeKPL3mjiECYCxvcdvQz2HLy9eXV9hFLrmRRSsN259hERBp436TCqVfBxXVKeQLETrnGE",
  "key20": "HbQ4sbB4phNCw4AnfyQYGh9WtdSXxqaHrDSHqzrWJ17ovu37mKJ45pcKpBfGqh8UwfrRn5TKPU6pPkRTaiCkTAN",
  "key21": "XT3HY5AfrRgQKqwXMRMNjPPWukKTNDfFK8Tk5ic4hVtj1v69iZbE7NhseDpEDSZtDehrXBryUVxZVfMNM89nzUC",
  "key22": "4zKWzWCkpjBwh4SucHwm6HaSbN2gEj2UHQgKu5Wd3k4N6cqxDAuP5LCZfMQBtiz7sgnpT27y682YAyeysxQrzVWC",
  "key23": "3rXQ3k9b2Lykb1By8HTiMosCn9h9ZD8d3VELgY2rV5Jbdq5HHEtpbuw1ixq4FPrLLeDnmkAgZdJHkhQUDpZcibok",
  "key24": "VGTRsdyxQjXZFz8pVTSNxSqNZFWdsfGGk7m8cJfdmQjiKVX8PXnHVsV7gk5QzSWSTP92aoJaSqMk1v7z5NXpTxq",
  "key25": "4U7Jmn9RRQDwHPw2PnWyt1aDS5sB7ovkyVQRjzpEq2K2jiARyGYaRSWv3mXh7VhFEDMTNhoYtrRChW7psH3hgri5",
  "key26": "9ScqLGSZWCB6vgf2iZFPKLk9a8xMEFeGguReiU6fuVQ2RSLDMs1vh6evKL6kVqWEWAkf4MqLvG4BjAmSmaC5sNh",
  "key27": "5HUUwkXivsoikiHWJFg278mc7BKkDygkiCc2Wh68AL4QABWyxompYf5W5oiGNcMD7Lrp49BjjwR5tHL4XrLpdYRx",
  "key28": "2Msd8rXVvcWkrswBw2QtzMZxt84r63kKeoPLH8fJG9NTfuMuputsrgr7YojEbhxH3Yb2fFkQkByb4i7deGDrBFtM",
  "key29": "4XFzSKZMkVyLW9zk7Qbr5eE2jTWycRHTiEZcsoMF6r5QstUdmxBvf81s3xsnrb3G3wyHmPxHsNxTZdXeRgHdk1Tj",
  "key30": "5mqx42CepVzCBcTby9XCPoP4TzhJskvAZthKe4L9xwZPK5kG2Ev46MTvdyduxvkTwGh8S9UymXuzisiqGnoR8msh",
  "key31": "3CF1rNYFEnjvtirVx8SEwVZykCH7sQX1ToCtD9pbXJBJDabtdMy437ki4vrVa11LxCkAsui1qHfU8vWqTQLqM8Ri",
  "key32": "3UoHgC1Z4DjJJx7WhWSVWGq98kgbL9DJsKndUnBKhCa2rCSa5kFjSXmrUuaCzv6aZG77cBPR9nPYyFmvcGv19cFe",
  "key33": "KXF1QMVS3BipCusS3sKHhFiRqQLkTG8s8YydUtM3L8wsGTsoRzB3Dv28vRxcCrmKDRGyKseFy3T9YWRMe9LG67V",
  "key34": "2izXQexcFnjAzSAeD2z5TbfV31FexRQtLVo6Le14tuhx8AA9dEDHPDV3a1V3P3dK3pgmm9rWe4wGR9XpeMU4fJEq",
  "key35": "4aV3B9Q1XL9pt8oxNCdebnyxat21AURETPbxxVa2askBYifr9fnjbWtmQqLW8vinDnRX7n9LpdzVrkzFZhHhEUjk",
  "key36": "hx3PpeenueqLgnBDXYW4WW6PbJWjGZUkqeMdntwVAvfDPADfKii466iPYcxzmt61iysHQTaQAnMv4yz6UXRSEgN",
  "key37": "5kciVfi8kaDdMsHE4ohXYMTByX1kxtuz4drVLTmxDWKq4Nj97RaxCaqXSiwanHPAVKJM1BFvEFm3De23W1KNWGFh",
  "key38": "dQz5Bqq55HvDrjrQXDVYnoKYyc7e9oN7K5G7nHfSEUAsYssWpXSUAshpAWdQebZGdwoxhmv5Az61YUcvv1jNYTA"
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
