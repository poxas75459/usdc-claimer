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
    "5hpqZDAwknSAASAyWzffyfnbu6Z6dsn3JccjCVsiob4txu5AVJ2eVD2FRKz2hj6tXXeS4KShjGDfmtbPm3gzwXza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t4w7epJqtvJSgSkpEM2KRPz8eJuuifXibmPrMuWcqXu2thpySvo2XRyDdP4ftey2eZWYUFFZ4TzYfePbtBppeqL",
  "key1": "4MUB4sEH4Hnew1YKWf9m4FuBKKU6ho25hNeZUTKBLuhbEU1QGukhqq8oh6WagRZKfXystueV84MzWkzs8FrwGiKM",
  "key2": "5XY5q4qKiQSsYqoCHkAyYoKyh55YCQAf45mM9Uh1uRsxB31f2Hxvn5Tj5M5KdB6jq3tGtLi2X7grGAPRUXwcZ8xe",
  "key3": "5aa8n28kVdvhS1GawpZTg2Trxn9tWAzX8KfDpWeYYGP89oHMaJhRJFvwWuZL7Biy8jQpozY9VGEn8p8z3mbtu7KF",
  "key4": "MumqpZ35q3DCXBsR1BPH5RTRKXT8utdWv2ufappJRL8YezKpSih7FndHvzKwxxzzJM93NeVUXUqjsamETVgV1sD",
  "key5": "3uJo456KyUFTRkF5p464iDSVE79MARSMroCR1EQuGXd5YvFwqwtJAAcwRpjrm9v3fkTNQzoVSkLYRzNkmsZrdrfA",
  "key6": "3wKQkSxNcMbh4AtKdHntXijgUS5uo1Yt1kzF4bhn9B3LvPujiZtRqxLuECZLuTgb78VLjqYaMeDUuoprUhUdZAuJ",
  "key7": "5VHbzzTxzwuCbEBZ4m82rvnGBq6ohJVioJxRJrXydNjgpZ2EeNVxXmKaqYT6bLs9x31BSE6eAqPnE6yzXGennNyf",
  "key8": "3VBxbg88iZxsrndFnd2S5E6m78HRhaQASEFWhWzDfT1Lm4nBFX4rWLTRtT9C3RSfF66uhLfrZYrExGrycq9rAwsD",
  "key9": "2eNo6WveDJDZE8ZtkTugjgk15t8eTd9AQSB65hVVu6dxjG2aLDuXz7up46dKE4URyo949C1899itJnLFnaRaVvW5",
  "key10": "5PPjvjs7cDsaTBqWTzSBrwj3iM71igMn6GDgysgBK741jRu8u5ZC8jn2hQUheMPbFXfnB8MhdLS4wmQA1ZnvM7Xd",
  "key11": "3bz4uH3oDGxa2iAnw3z6jykVCLLQZMN6DVLkGCqt4FthRPDrtkZESqH7xevXpFGYm8ef5X4Qs1h7XYY4uzejJ2RL",
  "key12": "LvDwvF85agUHUakviQQvjEzy5CQ3gWqXEYcukyik7Nubt2U4HGpnU1RXh6LpdsN4uN3N9ewyQdpZrjaW4c9qXCp",
  "key13": "kq8VhS2LvPN2UVtVEf8phCgL1n4SwD4YZFThcZi3s8cGSyPeTFiUkVpG9ftJgJfMZ3vWFFtW596G6e4eUcurUgp",
  "key14": "4c4qGydJ6q3ni38cbyZKfbdmKukFGxArLYpoj4yQAh7C78ft9yeyQ4gcpQMocbNN4vUPHboNTQygVYTU9RtZ58XH",
  "key15": "37jbu45k878bPgsRijGUZx6TxnK2yimVJCm5QVPMfhaN2Z1LTYB1eMdmhabhXtNmqmndv2Ff2cVtzGCanXWVZztE",
  "key16": "5Qq8mGdCLyWijrLCoBvErmyz76SuCN3vfq96TCWPhFwB6xRCHJ7Xe6Fu18hW5oTQb16bSBYk6aKPk2dRUW1oendF",
  "key17": "wzqT7Z7KDD3tdGDFZSLEuqvgKMuV3EAsp115J2e4ZSrGjZ2nqrqKfnLpmsizZBQ2cPue4AJ8STwbbmeYCZ6NWHW",
  "key18": "5geuLdHG967bqZXQF5BfWhsTpHAfbdTeceXGCdXVz1Y4SJhpHHFECeU8hGFToN334g12YRraqWFHsg8hmwHM2972",
  "key19": "5X47YaJJriXBmPCCyjHCVyg1NTtECHbBFdoaiHVaqsR6fHVGbgb8vMjdmaJqFHHnVBV8t4Bznos9VfP6gEnUs7EG",
  "key20": "58c3DMGV9qhcG3vz8qkmncsFCjQqUBTQPWLsJE83zQKva56SwjYnhmRWCCvXga7EaMsqBwGNxkuVbfjSvBHJMvnj",
  "key21": "tfyc2ZBK26LaXMFYuTt8RaH5HLo9mPPmHDMRnzpuiaZ9puBzrWq9LSqzTtUf8aChBxEwGaKGSvkPp2m1aRzXBE2",
  "key22": "5dsytPPYJS78Jsk6J3UMyVUdDGMp9JxJuCELGMfA5qShsZMYJ2W5j2iyzAyRj2fQTktB5qt2txcd864j74A5SkgD",
  "key23": "4SosFKfbcarsweaRpoTxWYg9TcQb7GL8cAiP7UUCRUXDQhHcDTTdKreTb1Cf58VBW5kG43s4J9n7C8r4PVQ9tGGP",
  "key24": "2pQA6xErrGXQhdEq885QyKvwFxfSJKhH22oqNPa9XzCGiJNACxFxDxUbA49DYf1Zj46DbKTbJh7GScr4mo17ubwz",
  "key25": "4ja6py7mQkGLLshBp57KCfkyRRYU35Xb3rjDmYHdAWSjmPer3KYfvBSV69MEXSCPhgBFZoW6dXSfJNz5gURWmpKB",
  "key26": "5f8EXFjCukCRcyPabcCat1vYcHSs7T4G9PpcBDpv1LK3Fxod4Gkv2ZqzhvsMQYHZsx9hUXw7ugmbtLqo898W8CyZ",
  "key27": "48SoRpvmZ36DRqjJu2qJxUWi5h8yeU9h4M6jYPKBYJ5B5G868bAQT1AzPLNiDNsjsQYWtqEPTuo4brcM1ugeLu6t",
  "key28": "BugYsfYX6W4riotkvs639jxJKsWZ7pPY4eJm2PpfHjeJ2K7jmDeMhNMnrFB7ymqM4Y7VYUujue7p3opwMoxQrJX",
  "key29": "5SJnXTSVuQKvqA9mF3PLVcwYKrFBEuW9hF623qTLohjUXcYEBZkc9hSoyPb3MaW8XM5PpZbVq8ochyUXcveMGjn9",
  "key30": "2qwBZoBxig1MyiwQCx8iXeRCSTWCeqS3cetidmeZ3GcBysE7APe5YV2o7J7amzQwk5V6ZTdF14XUmqD4zc8bW6eh",
  "key31": "5Hzk7QaFZapWsUKiRvgRVvx1mFq9J7nabqY6KejnL5zUkpBTynQRq7MQmZSD6S7BfXNTijywFoXKioiz4gA817df",
  "key32": "4kpsuWGsYdv4gAqfm6dzYbt5BfBuSM58xc5zDaqzqPijpcMsYdjS58pRcdjrzvSEifKPciMJs2qT7feyhS6Q2gpv",
  "key33": "4REA4bJvKvK8i2kV1SfCgPLn4e76YTTcqB3aEdNorLXWEJ2h9PuJKDnBgExTf9Duufn3PFY8jYHeeYbBY3ppjJct",
  "key34": "UQDmVpT9JrWkkWtMuvndu9h1HFF1f5Vn32XEXvnge9uDvQcDcyUncrigsDCsf2Sc9PcJ4qgksyB1XUj3EyV2pwQ",
  "key35": "2yb66qvu6YVhBCr74q91hAvEDV1A5KfsCDYphDoBpmWg1jNTSd9T6pRGXj1N2pd48iJdVJPzKzrCE3RnXXzDgv2e",
  "key36": "4FkGps5QxEFni5PUyrNWwgapwq2TnEnDNiDTkpuRVKkQtPUZmeSNyJHr7s56yUd1z3AXCaqpMczmbitfnkEZyKVc",
  "key37": "3X9zrnfFwDUdvxGZJh9kvbDUnFKbEuBYGAyjrWaneKMEhMMLrUvA2stacbVbycB6mVSq2SSVKHcLVWA6T6oAiQ2R",
  "key38": "2u4QfRUkmGm9j9EowAWq23hBzjXcCKUg2PmYrMDSmmqEhw5aatZNCuuv6F9mzPbRpjinEyqQhK3ex51vT7L2B4CV",
  "key39": "5UCcBYEFRpLMzdKdKP5CqkEvNnZcysiRHRXBZQH32JrumGb8hPDhe1EtG1fBWYJjbj2Kxhu3yV6zbR2d7ZwpozoA",
  "key40": "2uUgQhLNMYzA5ob43CX4xFEwnZkyvGR8XeLMvSyGQWqeW4xXvfJWFRNsMa6Zn1JbvJvkxXThnetuw5LCaQDVv4hN",
  "key41": "4mhE997dea4ze13AUoNPmXbhYfpdSkNCXUkRubT8orinUp88Av5zRei39G7TMRrm79TsuXjMXMBRg479TziF6oH2",
  "key42": "2J4msnKeSBUzXRZvAkNcsGdWXgiPSQQtZTNy9ZT78nUT6Wa56VJ3QnYCFS2DfHM99Y2C5dk56rvnFHHEBaUN2FCf",
  "key43": "3qmG5UDBfpJen7n4o2jy9QvzfPQVQjJNb6YPQ9DCPCCeXd2zjfh4M5w15NW2VZXSHoDvvxpLXLeAYCYHVYpy85Gr"
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
