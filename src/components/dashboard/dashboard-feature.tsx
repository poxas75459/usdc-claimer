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
    "4b73KraULN1gAVXxiTUXHp1UdhgLvLQEun7g4HKfpFPudBKbujZBPNTYheMpKWRiuuB2VM47M21y7EqdLetVi4oa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eFqLe5WkLt7HyBySL23UjFv57Ze9aPoHNvvn3ByDfcqarVXutXK2XdFV92QMDP3fdMGBbHPBYgXWZ4HTnuJqwp7",
  "key1": "5ESXkPNbpzWdCfijHHNHm7pD8Hikfb8scn7Upgemng83GE9aFvZQw2Jquu5FaxG2heZuUHpdnFhQQ6cTCw5bk3KT",
  "key2": "3Pto5Ja1cVFqaUJrskqDfczDTCsaynt4dRbmwae8bRh52oBqP813w5ToogF9swMu6jkATqDf4W5zjUtG1UqWLP7o",
  "key3": "5yVcEKtYTp7sVJ6uXoDY4XuPEXtoxKkYMxpzJHfFiyQZNCXSU1Wow33UeH7kjuoXhNUPiNK2L1QMjvYJiba7nyxv",
  "key4": "5dpgk1yQSEqnjz3sFzpqScnVU7gPQucsmncBWMV7Y23GRWiZibvDgoKxzHCJGscFRXoBrbh9C4nMytpsEmfNiJY6",
  "key5": "56iFJZdhw3gx8sELFdMhjRyR4XyunafeQB8tLTNZSfewaX8Mt5qqxiHavFv3UmTP6UpxDWCQ8b1ffUrymzJ6YNyJ",
  "key6": "63xCZzLFpZQm2rmcEjAwB8bBJPixQm5bFh2WyZLAUxpaJ3RL4fjBgvF4hCzWCwyJ8YXFt1WRLkWVcYUBZXwabZfb",
  "key7": "3X15Jvrw3RsmCGRwpL4qYayHwmP6KkcAeC5iYTFm5uNJRuzoLnu2yvMKtkfUo1a4z1WTR7JWUbDJiZ2ySFngZND4",
  "key8": "VSWJAWjYAYA7kfavpexCz57gCUN1eB8AhknChN6iCEanKzDKCokp81Q3qeRiXk3XYKiqGXf1HB63tbm7fzbLZcP",
  "key9": "5YEoJWtrCJS154XvzDtWEwEz9nE6RF7mGK3FZiGbm1W5v2R5qffjvVSTLvTVZ29brrBJyLMmVqcfoYAWTxKHpFMh",
  "key10": "5dr1PZQRo2W5abVh6S7aWHc1E7zL1DJcnZRcD284aavAqKtZC3M6zVtVurCU3fULj4unK6Fpe6rKqPsUUEyrBJd5",
  "key11": "2Mv8xwBWrQdGMrETMVZBJAxdjhktfjbcEaBZKakV8r4EbeoiKDPdih3H44X4k9odUdtGKWttq3xzeyzx3TiyKwEP",
  "key12": "2NUYLo3KJjTeVF1RM8YmKMNm7JBMyqM9UK9bPiKyNtgP2tS3nkJcYcjATTqDv64KXcQuYWtFJJauofQBv1C75CQS",
  "key13": "37ScjHYN41kY12XQ2bq2gttj1dA5wmPAZRGKH1bgLmNcswUKaebpQkLBs9e3Vk9aH7TPFKQ1KmSKVqUHTWmMH24q",
  "key14": "2rWjWSnmWsDKsDyAqMGGJg91nhLHS7GM1M5bBebqpF5NVHxi551Wn7mWhTPWpu92cQkx8SuydshmqSaFrJbxkYvS",
  "key15": "2Gk1KjkjF5Z6gMY8kcuakxeC7xybHqUjUkaQE5kF7Bvvq6ABeW3VzhW4RcBwkxhR3vUgZd7t1jP1GRz5XJqiET9N",
  "key16": "XcNvrvmuJ3hHyAStgiHA2KUwhWYuDsYUNG3aa8JK8YUi2kwZ3Sug5YsPCT9F1trfitGa4Vcmhy81mePJNSPKaDe",
  "key17": "6JZVeg8E8yQ5TiiVFzUMp2g7G8kRRjq5k7pY2wrsRrRZ2eihRNDNHAchcicMHA5pCsUDgpTfbZram9fTF8Fniv1",
  "key18": "4uHCyfJH2Z3kUetMwJCGCaoRThz7WVeQSXpuKe3ZWsGDvpk9AYynZGNhwXRk2uudwoVC1AdppMDFpe1ZtmNNr8kb",
  "key19": "xoLpwN37H3i37G9djH6xLgEHnp9YTz2P5Dz86PwxoiqCou3h4tnKB65Gq8TeskzH7csa9boDRzRr1LYkAut6R2X",
  "key20": "3GpjLjMyFmNXvbPJmUG1FznnJjm5CAiyGrHhTioHAodzKW5inCRsHoRDKGKz4AUQfPwLeeBmXsUsQdAr8WX6MYwU",
  "key21": "4a6hQCxhZUHXy2f1cN7fGSh8CAdo4iygiHvRW1E9SuBUN5nfVvAAbatrdgbj6oW1aXHZihyRu6XmbHtGfS8hQTHp",
  "key22": "3S8RfuE2vkzVqc1985gpiFkke2cVN1TCBAVcj38ZbTc4DK8LojuckS6ngnSKDR9B9PEHybrPkz19REcNJejNJEMY",
  "key23": "5ozNQt34jGYqX9yzjzndueqr78Co4LjTrj9Doj8Y4NZQcnQ38mXtx5mq98f4oPYCnCqfb83UfMVxvvsuzo7CNrJw",
  "key24": "5FFgBx3HcUZCcHeNknfuxS7eDL9xx1UKswQZKonHNAXUa3TPUgpVKswKQQYMN3zxoinmPj5HZsN4zzbugsNcTPP8",
  "key25": "3u4AWeigzAxWWLRExd2BB9HC4modxqWe6nuLGH7WMxBXsjAexCbZ1WYUAyKepK9ogiiiJMtS6gdoVB1sSV53yvZV",
  "key26": "4jdk46dsnuA9Xq1Czmr81QbnDyq4cFdmFZdZf4PayecqNFYmbJUCCF3KGnYjLxcmhJmC6xfM8QjhGHFhJMsCKZwz",
  "key27": "4zBuzFaU46LC7ZiKTaDPigXxhhgArpe6GnJnPvM7h2YPgi8bRP6S1v6RJVxmgo6bQX6EqmRFfAJx3uwtBAbwLnyT",
  "key28": "4Y6Cr3Gq4PgoUh3gFqJZEJuKQ9dgH18wNSoqfVkbcFV86LHqag3kL5iyYbwhy9pEF5YW8wabtkHWKvowu8fqMo4y",
  "key29": "5gB6tgWwS2mb5JLvDGBDXsVmmRzrpY8DEhV2Tu31G9nQL5anHGMRWy4iRPnNRgeFzWkSvEAHAi3vKHign8VyYHAh",
  "key30": "4b5fUn5PCgbdsGX586Qoc7yPdpiZD3N29EMGiNc2zTAGaFTK8yJ8FTrnqni6a1trdsPzgRD9rPFNf7a8ke2Gu2MZ",
  "key31": "47owwrbUVQ6gGYTNKPy16RHCkEuRdmdbgrmTqmEVS6DkXUFCoYweXeYYwG2z6ZgAhmxTBRho4iNeRG7jyF7VqsMA",
  "key32": "4p4UVcfqYZEpjosAb7aGdRX3ef3qpV2uNDUUPNKW6kY3ZALwr2c9FStKtBMYRMNxJbgpQycPTzL218GbHg7KsXyG",
  "key33": "5jRs41H1nDd4DprjYL29FMHm17DKSVH1KYRdsWbXLQq9EfmpWQdjpioVToDJ4aHZb6wU18KDAd6PMtBrLWE5fXnv",
  "key34": "3z5S2p8njm8CQvgZSY2CNXwsnB9WmEMCDFUtUQd3w9aa7HANW6H75nZVSXo98aLh6jgRisNCyMCBSVKRWrutrb6r",
  "key35": "3P6EjQb1AYkLpde4wErQiosxQy9DBMKKZ3pWkyXtTirbkiLVEMPUmyBUMbJ5FTg7ELVkzuZTx9rExmJw3osdcvbG",
  "key36": "4ihE5nW8aALUTHYESoEeXV18JkvTgyJbH8863H9ACjQay4mVXRk1McfxZ62TRFkkzkU3LSRVD6pyaaYUhAKFVogn",
  "key37": "3AEvbqZdSW7eemUq2WtCZdn6f1NgCaycHYgGPZGZvtZkLaU5BjjpiQaHxjdKBJm7GuwbCXv82bmSxTEbqZmc8wVt",
  "key38": "tAFjrmcT27NVpNDFtAX8a1U9RbuAkuANX63VmWM5QjnT7QQtFwv3KmCocoWseecV7gsTs8dV85nbynfMZTuKR8G",
  "key39": "AnkEGu2DjT6EyNmxJJHGbSgqdVPsYbR1y6GZSyr3yLa4EkwQKjPiXBeohXt6AK5DangSc1jA4eNCBQNZ4mSYWNB",
  "key40": "3fEp9JFD8qNkEUzFSU4G7Ldx6dh1nee5yNXKMm8yhuVmFMsUUsmoJZkqSyZzrKFDHz5S7fDJdnbFEANVyPgsMGHV",
  "key41": "HoCQAgBp2x5Pj1eN7CXY12nCCf7fQT5QsRStvQpJoARTKpLdKZS74wfuzSpbnSz1CrRgjUYaeYQbEr4HbcS6NEN",
  "key42": "x3MUBgW2SQkzJXmZYwTaGpk76MYsbyV5gwEermT1prctrvE3fv5T5fcgiyBYapzSShQCgzp7WKKUub2LXh6QPpQ",
  "key43": "2iyUut1QBLePx3fgpRjaw73KXs6gRsWk68a5ooSYkSFLjEGeWWtcpjFq59DWRfesyK8F4qxQ7L4kkwcZfe6qQduv",
  "key44": "2NgScQ64Z88VQV1reBYkj19rHTmDjb1Bz4Jb67oWSyEFJ4UAAqKrgJhX7EeMgLYR5t9xuWRk7PJF7UyEkorbYvDx"
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
