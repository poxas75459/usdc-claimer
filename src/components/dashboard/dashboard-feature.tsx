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
    "4bNWPQk21AxWFfbBeBUVGazwz6syjkzUpj7RxUSuwALS8ayThczdqFGD6t7AbLbLabjfkHBh6gFPBYcT79Jqer3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3imS1cz4ttQXSK9y1XpJBKDgj46FHZBx8virJ7F2Q4ZXR9jYuEWRuRm7Z7JFz2wy5KJk4EGsqQePVuoq8MmqBfLi",
  "key1": "5d12wz9vKTdWhNx3K16djMck5gb4AV3ARSEgH5Y49g1kkVseZGQUktvjKNybhq5a9LVYAu5tjvCa5KvfBQVWNuek",
  "key2": "4W8UD5PUkjz3Py8j5Dovt1DDGaJ6HK6Rt7p71P2H3hDwRZsieTacdPYJ3KN1vMYH8Vup4Nazi3VgDJFJyhTkPZc5",
  "key3": "3pMh23ywwQYmekjwL7agtbidQCsMcaY81vzS67AuDmQgKY6JAr7NNXUZfDxnkdhBhF8afAT1C2UFimGdMmWz6T42",
  "key4": "3vw7txz25JML5Pyp6NQnMxTYLtEzjx2ztJcAYsazDNffH8HGKm6xSxjGpfoB6vwDN8LYD41UX7PXc8QAHy6dzfTg",
  "key5": "2cMFSxrCU5bVBkNbQwoHUBYbBeYRq76W2K58pXL5CqHraQY8cbj7XcVVnXCt2Rp9tToW9ex4AfVgx1STH9bEZkBD",
  "key6": "3nRzhKgVogbSTzYfY2eqnheF4oTJUXWycesJMFeYcZ8zVKPezSquWYkRMZfbme9cw9KEDqvPHramJNX6GH6Hu8aj",
  "key7": "3pUzUrXEMBjUexKJymQE9rPQDVKBbCsHMiLg5L9KXraaDLv55Zk4vTWrWVifNgNnpAiFiwhUMVvD9vxvoVvNSGLx",
  "key8": "4395CGiiYu3GNSoXQwwZbsTCfJG72BQeBKNDo3gZRmc7LiTvr8rxMR526os1SFvseVhsuDnZPGcSD3DV2y758GWT",
  "key9": "5RSvhJXwD73CrQzycY9JRhDMtcBnD752QmkaZhG1fWphyS1ZAPZcVCMi2CmPikKTewsUsrYvHm3B5Yx8c1uXDgUS",
  "key10": "3Xs89jiopsivfAFXg6HbPMCzjvJqjeh8dN3S6ZAkC4hcUof92ixPDQLmDCCLXo4YtW47A85cLGwy5ijoBZaME3Zt",
  "key11": "2jErREL2yWY4bgJfywWGU1m41RufyAUtrrvk6ziQ8xkCxWfzp3EVvLyRGQcEB6sGLAhyKk9tnw8gLy4LnjaDwea3",
  "key12": "4WQ7THTPYjCDaijFkuy8USLYGxxwrLiDKo9EM8G8tSuu6LCZEBaBAVWsYR9249jygYJaoZyehYBcLc5oLDozbBz8",
  "key13": "44aub2ihojg1JJhemW8MWGLoRpqtraNB3eEHVCnvHzFvSuVfQ63KLUgE9keBTEwoa2yx67SeqdtVaTGwiUGukNjP",
  "key14": "5agidvNV6h28voYbY6sC5rvEW41wXpLcr6nxpLftz26fefnLVNTYGczt2QdpczJeoeqhj3cTuGheo2zKdMUtNHQh",
  "key15": "3MYaVDnZ4Zks9AH2wX7u86s8eRebd1MyiVKUDeVxwVgrfU5RWf6hLYA5nWKVayHTymugDq8THUR6ZY3owFBGx2YB",
  "key16": "5uw2oyTv34EHjwoSm4oYxGooKPJrDd5bLy4akHTYizQaMWXBYv5ELkr6hbyECotjkufNXdnrkt1FPv7ASKcHCZ1h",
  "key17": "2YtSmZM4AEHr3NjcnFEzU9XaDvzZAEF3UXqA62i85G6V6zXVunzyTjgfGAyNxx2qRmwBe12oNVzVLqTy3NuBFpuE",
  "key18": "2JDqXy98skfLJ8Z1krsR9uLyCk9cGMFnVifxCXPYpNUYYEfZQLQqGQQHBC6BRrRUeuoezscCMCzoXo3BQnnGnNvc",
  "key19": "tfpQsMVy7b3nCGejVZGuL6GBGYte1TaSY5mRvHQAgvjFi2JBWGEfrT8dekTDdwyYHYYpkfGrW2RL1xmBpvTe8a9",
  "key20": "4kZnv9cEGtJHBynGFSLY1rxz8JBmQMAGjZHogpYshPy7qSm5x2arx4WYFCWMdapQBYEzd1rzXL2jZX9xvVWsjBq1",
  "key21": "4swWfb9bmmPmMNDcaWj4iy6MeBAmpz28itKypyu8E958cBTg7PYvmTQnZcibdK7zDnwtuCHiXGfhBsiTsFtJPq8E",
  "key22": "4pgm2JJYgEdA5Kv27U3iF6LinDsUT9VshAkG85pz1XNt1gwthKXrqJzcAZtZGd5r4A3BtnByuBdXcgWDdDNziweS",
  "key23": "5TT4frvLBrUf5rQ35AKumGUrKADCCExiUH2qmhYMEcudjPPhENRUFi8jXFMcnxLx2X3yvUaRDY8nXwBrD9AXzUtT",
  "key24": "5y8cv7tmA3JaNR1VdnxzHC2NcSdxoWRSUdYtmVfJrLAEgPVfnSvUpZsurCw5kQ12aAEhAGQJ5w6srvsQQZbPg5V7",
  "key25": "qHWaRmfiquoGtWBzitQnbSuXbPD9NnAc1GrvrQzg2b54ukHXak1PSVEavQxMsodVNY2XwkwgTJ1cNYfLnEkD37Z",
  "key26": "33HtkwJ6CokCzwvFbqwrtbxt8u3fZZ6p4peGPm3dX8jCPcQqebRRQjjwBXEdefBxohBTAU2vuGxRwcC8F1JfTi4K",
  "key27": "4Bb4ZDHkFVFxVSyDBzSZx5rWrbpBw4GXxeX6rjMev4yg8ozvHojNffTfjfbBQJr3LBDspVazyS9dz132e3djAA2f",
  "key28": "5wNPRFxTzw8iTCrmQo3N62VPXjc3H6EFwp7H6DMxSSCC3mdQ6aSnS6o6g3QWAEr2wZMx2sJB9WMzDrGuEeNzA6sy",
  "key29": "2u5PZ8nh3T3eFwPb13WCLJxuD4VviJH7s57XrWduGN2RYRmV83DS1UPngZjCSs9hHwj84PhZVzwMtt2fd42GA3tv",
  "key30": "5maL5Uh7ywxmMKjH7886eiuPMzZpAUYqkgBoYxe2QmQ2GBxP7ggTtTYaviNBMHLuy8jy5Ckbr3B9KqLawwjRsrdL",
  "key31": "4uhRFbgsotu4TUnzahimg4qchSFcUCnQPHSkHkctURefNhF6qQYPmFg5AUDJ7e9vdeGkUNmYWPQWC7iUNhxTjsNv",
  "key32": "5DKeMVCwiPKZ7kVJb8LQA4v1MPTgoPHLLWviBkGGFezywhR9VgA2FE1sSNUvkYFMoG79YvcCzU3H6ZZcQRHrUKv6",
  "key33": "KQB63wCt9RjTPfq8oqP8vekpBtVusGJKrQ7ZBo3Fj2vuhpSeVojjdzndDgEzWmTpX9k3HjMQbaMSmGhPpoB2E46",
  "key34": "48Ge5ATmaLJuzHriUVi7F6hadEKfcnYEtW8nSFjBHV1KMyiyCXxcX4ACxyeH55aTnPuWFP4UwqjyWizJQjYP8SKp",
  "key35": "4yPvddEdDQX95xs3zDbh9F3cmmn7QhopFuLG4tyxBug4WVvgk3ugzzpvg3sPNcfKXaps4LWMWFdn6o5UHecGthgA",
  "key36": "2AnGNX9uP8Kb8aXji5E8gPCkn7F6Fno3zUR6Sx8TKUS194hTdvtTwpRiWQpaGYBsCHbJSkYkceAwofw4TFDkqkW7",
  "key37": "46Hw1taS9up2FkUYSa4beSATAfU87ue4PnhDJYqF5wQ2TG1Kn9bJ2GMVG92SHnYR5vuhviLCFDCLg7vg6xqNzo3B",
  "key38": "5t74YVZZGkL5o9ddtL1eAT6FfqmNVjT9GSYMYBxSxhdWGmuPCXSpg64t7BqJ6VcfRzDBf1BC75TjN97hcRCfRXvm",
  "key39": "eSPn5AHCp97AYqcvLiynojNTWRkd8vW4DwmvV4bnWBLLEiGWULiepZfBuArEwVFDXn2cxTN5tsF3aSQMAVoUJYo",
  "key40": "622ZsFWNGBwmtX2uxJJ4FfQNBg4oCsx3ZpYBKBXzKAfXwWhEMN8euoX5dqB6KJj6sVi7PFrS5oUurVEUXR9mnX4W",
  "key41": "3wCVbF9hmb5CqvEzuXkTdweqcDvnRrzQeVKnySpM2QMVdpRhoSMqojYRYXgiQL28uEpvqosrt5e7dWC7e4vaD9cD",
  "key42": "5mNSu8EWkfJHat7F6HR51t3zBFRXFu5RkWZ7xpYM4GACifzeYRudKvbXc1hhLFicdSQwoJt6TSYASRE8hiUzoFRQ",
  "key43": "3Z5ygsdQzu1tkC7zrJ4H5bBiKbHPoek45riPKdty3FLCCsZSsqBruBxcrRF5JrFwKVNqdYRxbtnhvoZnx9888dKq",
  "key44": "Kywp7EJdQsQzEyu9Ru7HJerS9jy8jUyZandAojFuoKsKHjtQMvgRHHqo6DASZhi9bo1jo39CGgT8fgXWbUQep1G",
  "key45": "43XXzxogM2rdHLzTdf3LHQFw7ApARBswUk5i67HZsMYVysLk2oBZRNcAXL6kcaWgQv2zMZSdtNr5mzBgoc6e2H9n",
  "key46": "zPakg6fJCzFHs9ngmhrAaGPnFwmeuWZ6kzmz2pE7qmF8CCebiEgzdAoG3Gom4tQsuM9XsvmQTr2J5NL4bEqpXMP",
  "key47": "K2c3fQZ7CjkTYprKwkgUSevRx7Qys4dT46EDmW9vqsMkuvx8TyBmAoFNsNtV71vuyHn61Qj7QHSdMKWCdMhT92r"
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
