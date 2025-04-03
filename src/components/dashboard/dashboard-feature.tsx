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
    "2mm37RErUxp11oPpeMvzJGLDeCQLn4dZJ8FuJbcntb9SrDQcSeVPYBMbp9tjKXQAnaMAp3Q5WmVm9kptHMkCn7Mo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xZteRz7pdpZXHDrHbaSgaAb3x2NmMXcc9GvaR7Shm7Ddd7ERQycSDcppgdKQY541AX9Soyhn65RNwc5XLW74u1w",
  "key1": "5Ni6F5d3f5seMTzi1xLo4SwXPSXUtibuRpFJLsonvtNAUrXWKRcoqUDgHarJ4SXNZkweeM1YWusLbzvK5qFfrCY5",
  "key2": "3E5WC4wJTGFpicfV1kwE6HPhbVftDQMvxyMEzE9ZrbB8xkpFVAgfzEVXSzYFXDKNU93YRjpoteeJ2cB2bP9BN2Ax",
  "key3": "3Q4eqCh5G7iumc7DDbPtouvgc29ATShp5tCUQsmwZuiiDLb13zPdiy2vmu9C9fmDpJep5dDugLNbvzg8sba8mwNk",
  "key4": "5KVuhZyeJYX2H5DYZmu41WSFxqQf3pShUQhmBeJdYxKsBykMJxa1FDqnh2RtXgXNEFXykvqyzvwKFzTLHLgtCbdG",
  "key5": "2JhjuFaZenrXX7cr9yKZTHWkAWeuyL25fUnoY4sCxQqXX5sDkDxPuNuEC5Ha4LcH6Kgx956k6RxR8TiRJfXR4Ket",
  "key6": "5Q4yhbbCVYNjX6jKdCd463oj3Xdssta4eyf8kRMPiQmCV5rgpLgfEaR6uVYYxwRAuPmdowkpS7LgBtB7yfVDczY4",
  "key7": "5x18NQZoah8pgbVKqQ2Pz5nWk9TFvZMxtgLEmsadGBgf3rAHkrzh9yTgPZJkxsPAm5xuPD8EfHgW6AwJiaKH2caz",
  "key8": "2zaGRzggcATTbXxbJuTv98K3g343UdFivT8QVWZhbgMsLVPZMXY9hnDtexJkXrNt7mPdhZGbV21Cne5v7wC6tu6A",
  "key9": "4SRLJs3i8YZfWFAvHvrRXBqmQz1eqDUfGxZrVeTaX52Ap5sPqBrMJxrMN448cdHNwAXArm7RhuGLaJEPm5bVhmgC",
  "key10": "5GvWgrCvJxZDvfjTxQNN54S2khJCNMsKFHkCsUeMTtuRZbYTfJsaGdC8QFh14fzzkoCDUpbU3SwhfKq3eErbZ9M1",
  "key11": "2iCGBhVVtXj8ZxePAxrRifBp14Dj56ZZKMRQAKxvCn3zwRoUwT5ua1ZZTHfXX7Wimyo83eqSMvTKwJgp47yfZf54",
  "key12": "211kAWRe9FKSZVQj48AnUtDMFeQaFF4JjxoK5XDkNqcq9d56mCpqcHjt1Fbczske1iTmMF35jmbksNXZJsSoyC5w",
  "key13": "28FiXTbR3DyC3qzgyjPyuaNorMMeYrUJZfXASVeiWKCwHdm8wMTEwACEGhDgyrUFsjVx1xf7cBwXioa3SnXim4Ro",
  "key14": "23NiqBnc9WbkZZZ9f6upsFSAXAmRS8KRiWttsR5U8CENRh8FoUf5h4ysa9mA4boKbWn7zB2ZH7subG3fzgc2zNji",
  "key15": "aLxLEChEuvFSZbTQiGvsj7zZtDgnhEEkf163bR81E1XnoSGsJbZUoDfDn6xZTohaoh98VcVE7AyB3nG1H47Mn3j",
  "key16": "nuRCUnXFWBgGNV31c8BSd4eoYL96uNB3t1ejSrPRMQAzGfYLqrg14Wtjt5bYKSagyLFJK81CTW3Jc5z38krVVkz",
  "key17": "2YHE4Nbn25W5qTD1n7oKeHZQWoFZmKrfyVMPPPB3hnosoLKm6xupxMPCXpAmqznNKpRZxqM1Rmi1iHt3HcyRMg9L",
  "key18": "513TxgmMSeHFxYanmaAU8WHbZXCcefLEKhNkp3SU7pACpVEcuv7CmF3HBDynmZk6vg2UsnHHdqpz7QZZ2oubewKK",
  "key19": "eZL5UvYYhqv6y6KWWbRpjPqKi2qKC4yWSwDCmjbTBawmM8QmeYErh1vYERKNP7AL9ewvsc8sDxV34PYWyAjVscP",
  "key20": "45bAjYNuY7vmYWuignMGoc8MMniVAJ5ywE34oES6o3zLU1KS6xN9zttAMyvciSdoRb2bxWpJQTLoYJatKxg8z1sA",
  "key21": "4UiQ9i5oe4tETNthKA9hT5qn2RxS2GQgBYtUsKMQZ8Kob3632oCAFM1HbysseznuF6wijnuhtFQqSpvFShcXQ84t",
  "key22": "2yy8pWKCsD1YA8MAAoFc9j3yxW3wAhnrhEEJyyQGUF5Boe272AumRhQ6XFGjVvy6PxRaqUizeQw9rjHB6YusLavX",
  "key23": "5FyR2DirYunWMBVDDMuAFhTHqcgurMm9dBjkB4BqTn2eaQ84zcSq9TkpzQT6j7946AJ3yjLZsMYj5q4er62hzcrS",
  "key24": "4ugBxgxg5ThV3pErsvrFqcGaxw7p9iCASiNSzPRrqPdnWGBP8SES3HGx2AZieVHrh5xQuhxiJiTXiokLoLczVceN",
  "key25": "5WgVPrktFJ8kNsTwmQSv5zVJeLXE6XMmALbruqg6tyi5JUHfKqjWX37LKiuGjD2fjAsGt71tagAdNbfB4qpFRCmY",
  "key26": "VST1knuUapmUkTMNyktaRYnEgv3tkCfzg4G4iqmMcHiQW2wrrNH8R3i5TteprApQDdz6yHdQgsuSzqhZFfaM2Dr",
  "key27": "4K4tsphA6H4Kpt4pC5k3buoaxjduARS8ESMh4ghKJqkYCkBgZkdV9jdqTxFVYUYxxqkiV7SujGEg6s7kSL19M8GQ",
  "key28": "5kZHNhzDLbfEQYNcVj5LGajqASyN9Kqryv4oVfKyuCxsDnV2pzWHm6VeNi4Bha8kv7jLRpBzqeV8rGsjuZSvxqWm",
  "key29": "fn5TG6Na2pp57oaxx9AypQirPbsGnUQzwpr2WnX7Mjz4mxTpLRPHYzmjr1vCrcerrew3Njc54yX4BFz4jZWRpxC",
  "key30": "44HSMC11Q9gvMoi42c5wbUc8tAPrGxUwZTVshirDLz6veV9GumX4oNYAFmv6o2QryxxW9Z9YM7AbHNNEs8F5Pv5y",
  "key31": "4Vax7gDJ9st2HvP5aALfqmvu5MtYZW2H2Kp9o8drbEdZL1oiR6SNLUKFLYCbCfvjYmXMNA1VG3Hw7QHVnFFjCJDz",
  "key32": "4qykaSNTPmJxYG2ePFNrp5Akoyw24k6QrzQDuKsKHuggQqzj4qeezFBJ3GnQyDVqFbjuW8t596Qq7uTCmbqaFr72",
  "key33": "3TffKFkpAuqmaRBTcXXVhLi81FGEiHQ6xUXydrMNgkYL1MiEigdGCvCGwk6FMBVs3c21k1HZmf2CvucemawrFCWU",
  "key34": "2At3BPpJSqi3m6aEs9egLmwMGhZVKS1Moa2evTzrHie1Rzdx2NQTfmmnRi4rpuTxE7ZcJph6Kb7H8A6gBQYiDRMk",
  "key35": "2D5iWXkDbJgHNU8yxt1PwAZZCtFZhCztFMcNeZkSM54N6kHrF4CJrwev7JPVmNMRwcdyBa9a1R55DaTG8FyRXh6R",
  "key36": "3TTvP5Aqy4jtGmyNNA4khXps6mArmJojkSVWG9aHnReBoHX1EetJiaYq2Jtau3xrkJfjj4QUdpcLRZfKsEg4cp2b",
  "key37": "Pme2rrz2FzdS9V5eKJmjUuUpQ3AxwhKvbTMr1G6v7DEFjKN5YEeCE7Y4whh7SUtwV2jLye3SZcrKU67fcTLQ4x5",
  "key38": "54TpSvBvWAZeebLJkkKmeijnn2QP3FNNemEKvnnv7rK478S68CqwSabByL7hWRo8qyoNNnQCUBnfPipA2kdgXCpz",
  "key39": "4sQ5ffaQp8Ad7EJLM9ZLGDgoeoAHKwnSBzUCnD6BNSKT1yRyDYgMjepqnebEK13eeGxCsHSqFNGhiV1rWyjqnDtD",
  "key40": "4zSrTjfZ4RkTUNS73HD8f15vccqXUpJQWCHXyUJboNqTj2RfZ8MLmtSgbZ3joUnHXgpqETdPwFiti7dG9MWXWK9E",
  "key41": "2N6qAYQkGiWiMBS7iF8p4BWLRV7o9gKGrxrDS6oeE2jBArgDL1H5Xx3qFzENUiM3mmsaKpTujbigXwr6xmX79nMD",
  "key42": "52Znzce5HptZ7LHKqD3CsvKLrxDLv14orJDRxLuUgFjorAeWdz8pujiiu7FV3jWPhFjo4J3mBqgtsLfBLPqVyGGT",
  "key43": "4XJryGCzU5NbUv2vcWsCyv2zZbosC5PdsFtMNx4LV4CjGDZ3qT3NJ9NV7D4o6QuYP5rG3qyEA29L1tzkM9PUpt33",
  "key44": "67VSNQNzsD8tV3wBbCkexw53hj26XoKowNVMTwKQBp4MLtBohSyPTst1aSWwXo2Ds3nbNY9UgYSKgyapqsLFPEpc",
  "key45": "5xJwLBEr1s5gpkmyNsDeBghKgxMFF3BGxLGuhrgUStzRj7dvGjSq4JxQZqR53vTa3yCZDWgD4xMM1LmkbriWaK4S",
  "key46": "jQ1JcPDRm7xU7LUR27o4QUSNeQKF1P5n74TVDb1sWd27TR2TU6CGMwf8wXCoLRaAdZfF3MybQyJmcCDwhC9HSA7",
  "key47": "2d83L8RcjX4PU5Noamq9P3iVkz7LxVi6dSyP34wgYmDn38yLGPZFesSQ56GYnTTCGK2Ece4HyfguxdThDqkJKj5C"
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
