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
    "2C25wiXN9JbRm768K1MwjCDsoXn4fPvXMEUZzwx5WT2jYsqfqtdcCrS1VKyC1wxQDbShVnGpZ4AxrHb5ngUxUdRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42JTKnQnDMtWB5XZPwngjdE7zfweHRQfEJPJRJ2snnGhHy5eectE83m1NoG1WUdXiU4ZHHUcLThYBbnYM61V7ieu",
  "key1": "5edjBRUo2JwrbzNymK9zQTeHhjanaA2jCr5wDsbYgPA8pLYL7GDyK8aVvZ9aGTp3RM8ovCdqNunJotzzBRuPVikB",
  "key2": "5AswE38oEgZnm2j7ugkM8XEES42QLyLqrHDsAiYfQhTRJEHgHEtm5itSJXo9EW7ez75sDyXDKw2W6DqfQgPysxfq",
  "key3": "4wznofPWY1p2xb7Z5hegmQr7QK7zMtyfd2GDCytDyxnJCbmyHtBec2nxBLndn66UR3j6Cdu6WGvzvrfJsN8X1bxk",
  "key4": "7bMC4JjjxAjbVsuvAisMbWcvdLe43XR31KwHtCDndaf6wGnosx1UbGYbQPEmKbfEB4vuDin3gTuAvEtixXuMm95",
  "key5": "3t8i9MZWEaxNr3cF6pfhDJaKfxM95XGMNktyRjAUzZF8F4D2ycZFFuXdyJBYaQU3YjcXvR2poeeFaiWCYyXomshy",
  "key6": "3ZtbrWhhSjX9Af15CDX4xPamX2ZrQK6GNqc3uzEXJdvcDr9vBUFzPGkgzGtyQ86VYuUGBhjb82KJxtCV4byvwTDL",
  "key7": "2j21ogVGuw5WqMVnQVZoTXpMZEtmctfLaVLm443kLot8TnmwSf5qZXJWL44ALq9DusUUVB1SfXqgivSDkSgaQbbb",
  "key8": "NGnTZqLoXqHVqhw9doHTHHReWKHffBZjTiAoUzPqDp5dTF737r8GoCfekoHSHvFsASUSbGwZoBNst3NZtyzTms6",
  "key9": "3w8ZNWJog8M4fNNeD9pcQ8NGP2zJgC3j9eeCNrfpUkgJYGJztHfFZgwhddkmkg2Thdhb8MQYeXeAqZev3gKhar87",
  "key10": "2hgRGsRWdj7Wx14BUAMDfrZNHrt9Y6fw2i2PbvBx9pQFCGuWmAT1AggepwH11vAF82KjWHsqNnGBvF7CY4XGXqPY",
  "key11": "ntLxAhsQAaxWpWvhqyBB72CjKJN5q2eMspxufMXmvddCckZNLbubAEdzvDTWzR4Wbc9NPBY1zKkUKi6j7rqshhj",
  "key12": "4STDqbb1A7V9EeKkAL6fY7wpgeJgNYy2zcQwv8MfgUTmGpPW3cYGUP5yCf1oJZ9XWpFAa2oKfuhVuB5ULgRdHqM1",
  "key13": "5TJYgHbJ3vj6XJY6bH48nwtmGGQy7uTU3pxCyJKtKnoWAbasjxsSGJo5kDNsTisBJQHmUwkhE3MDrabVv7G8wTNr",
  "key14": "4cm8Vz8VbFayW6YscqyfQGJsLp64Ug8VYTq3iuWMqsZUAgHinqvPajkjMa5BV5evi3fVh24p1riMRCu3dxTAND1A",
  "key15": "2E242gAeVnjQUQ4or4WyJM2PwiqjV4LQSqYuCgUenhJSqrjeR1bYw5Dx22Pjnzm7wisaKNw1zkuaDtYrtaXFe71G",
  "key16": "3Uc7NE6VqVnA3xPiMaJzf41c9bPuUHt1fE2rmg7XHz3BJoaDua7AMuNRdhVxv44HA7c3Xt4JukueFihYH9nHXtNC",
  "key17": "4hHvU783AV88D42HomDWyXzDKeCdR8JvB3MSmcU5u4aQiLANwTCaJNKRzMdbfEjf8SFmun2b6Reoeu3bMxikJfxK",
  "key18": "5gVdPXCQzdHQzybMHWXEodJC4P4zYUxn2nAiZungkTtb3mcTLEj1AqJY6ghqRDtkjWdWa49TnLsjmTUYRDNkCdhB",
  "key19": "2GfqAbPXurgYLgRVH6SLjUHDELMSvGf7uDc21A5WREPSyR8G5ou7GYQj25gxskb7rCSmeWzSVULnykKwNmpJQ3KY",
  "key20": "qkTW3ifY5Hzs9aom9HjaLeED7GUrm1zwGdTxKB2wfSZ3GqUSd3a8HJZ4NY7fcpwhbCY4DPgT22ESeLgc7JVwVjr",
  "key21": "3bUwbKsjBH7YY1J3Ezp4DJunXRtTQi7tLp2tSXxUEJVgXWcE17YjTQ4FyEYhBm3DxUdDYx4GYGYyuzZhEVdaaVN",
  "key22": "bKLTEvwgkv8UQQYnJkDdLFcFHc3sRqZp9nLwdDKJJmGDcj4iE48jnx1BiWCDaudwL7gRbq88op3NX4uqQC5C8Yb",
  "key23": "3LvNiHNYrBXAiZAP6ZAC8ZMjKGFBYBxK3grEKC2uHcabPAr8aVStXtARnRk3kush5aJxoAosYyYreGH9ynL9vnu9",
  "key24": "4gQTwiqBNgisp3FtNTFsQzKguVyQhCMsT6H5DyjU3tfZ3XjggDTnmiwPa1tgSVCXmLRYLSxefMRsbXMqyZtSkZih",
  "key25": "4Jz9wmDLLnRRvPJfisTBLkojkoMgbsGJnqzBNifTQKA6pWf1dPsZYetKtxVMWFTRWj84yzLKcxPp3Fq9B8AZqKD",
  "key26": "N455K8tVnYCy2qna7DEbgWqVHx4NNV4MrY8T4GwfqTqkoubZd7Gj3EKMqXf5CG3hce75i58mUhK9fUatnuiqSAC",
  "key27": "2HQz58BjEP32mPtH6Ze3dVcnCLp5XgvhcmMze5ocjgtBhexrkQCePN3QEvZh4PG8GLVJqZkRuzcXLZs2yyAVAZhj",
  "key28": "uPXQBQtniYkpNS7jdPdRJJpZVCiRV8ALYmP4CGW6ioqr5xJZ8bk8MCJR2oU7AozpswetksJjfWoFaTZ7Rz8Xprq",
  "key29": "5hPjTxxs5trVGprakASbT7g5kBp9qRZ1AjsLDf5ykzzkQuVkYY9jgXqVkYzgoYSgjFWjFpNiBdsb6bziTvjmyoqS",
  "key30": "23pydHmWP6QXC8eCnQ85n5E9fDk11MNcu1vFQnGXJBGhR4AH6bd9kwBsNSootPxvQkCWe95hPd37jG5Pt2naHoUf",
  "key31": "28UTBnAZZ39XTESm1zog1Y7c8ZpXaDqygwZzQHJUkrdXodrTKNVGLR8aoyaG9AhLf1GZygAcdwzpLQXHaRKhHENQ",
  "key32": "4yf4sg7KGW7ycXUSJCZ9t5LKkRyhU2wnSXhGJrrx3qdoEBHZ78CJ9gDrnHq9qfB4xNBBGK6h3vDBFc2yQy2Hvi9d",
  "key33": "xdKNUGpcqLvfTRgGAja56JUkNY1AhniMi9XJmkiezJrd8nGEqMQBssmgPwmqvDSrqj3kZkdSJtHaropHb8qDWPn",
  "key34": "Smo9TTEeGRzW3M4p72BcgvhGmsimPzoCnXNpDSaySHMQbJw8HgEe3vUHYuPrL9YowMwMEKBHcMB5XDgrNg38G23",
  "key35": "V6smZopkmwpbvEn6rz73BiZf277ikQVq2RfAfySwjzAhaibrxSdHaqKmiKffbMnw5fQCJ7Mv8vkorDX56vcNRCk",
  "key36": "26BC4NTBbWE2n1LVxbiy3hggbpegJ65FgGYfFhV724EmqE1N7Xe6Qfz1kAxbUB9c7fzeJFvJbCfai8U6EX4HWy8B",
  "key37": "4f44j5i21gFs2WGCVHrxjEwNXxdGmefzkzXs2r5M7px6YK7RG9hdHTeGsSp7c5MDFYAcSpHc7EKctNvDYXbjjtGH",
  "key38": "2EKXgVwAWQ55DW8cDkvhhJxK2QWMnMepYxqkybfQnpQV8uMu4eEREt3X3txnsbA4BRuFHmLJ1RsF3WB7TFwaGAVk",
  "key39": "2rRLhKAsRYMt2975cjSKmeciAG8MEaoS2ojSt9XnJaKLn6esWXCyu9qVKwPmRh6Zg2hP41edMktTPk4DgL7miihV",
  "key40": "3ZCE9xP29CNmgvVKj3VafgtPxBXA56BL63MtnRLBdFGseqjRczvJMB1AtwnmzFkACkzWmWzUgzce2UmrRkCQKDC3",
  "key41": "4Tt2G7bkSreCR8GVScg7XGzdSpYduY3ZabNQNmpXmgS3LBEDFsYbG6p5Knvxir3rc7pUvBPFJWJVGjTAjKtUwWwS",
  "key42": "5xMUeYjs3PWSMHK5gnkQrZorZjpbfioeyQvU6FNNqLeSMBevHKorVqRgu22XYxS8yS7ZJaUCH4YMr5JsHMepL7ep",
  "key43": "WFRnVbMciyWdb8CHe9VGuKgMVD5EoMWyYRbuRTCLa5HyVSVdSmoCJF4VfzfEYYWYLsKccTiztu3R22mjWh9hqmc",
  "key44": "4Z4NnQHYCnqayVSHVZTxiPUrKVg2n4mpreqTDP17fDax8CYNwmUT7cz9ze2strXvDgk5t37Tfk257WBQBv1tQbpz",
  "key45": "2ErQyU2XgDfuj26TorirvBRubasQ6X4G7F75p1yXh96bKZHFYeaSpujZEikLGPFVh9AEo6bmKnhpyWtbq3byxG1",
  "key46": "2BpjJemPndPFrbuj1vv3pw8RqSGqiwyXfHKLBFbzjz4eWGRZt4L5z8LSdx7CimWrVfay7Cibgo4xsDJQEH69d9dn",
  "key47": "duShDouS4A76w4jN6RveBmqk6Q7Vcf2ZDaiW5vPRrgP8rfnZgUJ5nEKjxrreAJ1pnBYykJB2n9DU7Bmu8oXXMok"
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
