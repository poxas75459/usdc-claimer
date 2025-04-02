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
    "32oUmERTWm4Ao5DYTzhQFf3Xn1H4XnsJXQg3NicMdh4Kt9e1T6xEtPDaVTcJFUn2Ec2Cxb8beQP7T88WvXyEgGxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dzsosSZhxZJtsyH4JrjCq1a9Xg1vvkBQGaFzUKECQSsA4qz7JGyLU7zMSqAzy69Eg1tNJxdYh5uAqdrt1SnwYh9",
  "key1": "5m3rsQ7TPRy7LwgPm7LfvpsHSmz2Nnp4y7aAB2kLuDZZtKS85ghznGvdz6hdbv7ee8cCR581GLmZuav4K8Pxn1PS",
  "key2": "5hDxFCmsM6qRajQZz7mS9YWHobf72GDBh62QYeCm8QYVHnP6JRZEKRG6y76RdfuZQRhtYupMsw3Bkkf4j6aQ3SA6",
  "key3": "cD7D2PfJ4KrY2nWSfUpJyKoCi2U7pwBTXVBMLXYhaut834kui4dFvYwr1HfVXD4mnAyq5b8kFm93awc4xyZKEvN",
  "key4": "4STjoXw9VbrY1j3UH6ahoxUcTbo25R2K7NJQC8kCEq871wY4AEk9E8cqusAFShaTbCXaSypHpYjMRAJLGSdqiSv4",
  "key5": "25qdcpNo8Y5bCRDQj5GCzM7wmTkuQRTrt18PPFaMHdPMbvXkBMGUs34g2LaEMb1x3tYaRXVQQSb6vz49NJVRMfpK",
  "key6": "2ALiBToqNPAdFRpZM3v3nibhc7eAmjP36MbWweMJ5PtLt6fryhZXF1aiYsbYkZ6KYs8hQxF7114sZaFLSodXrrdA",
  "key7": "2CY3kZY7Gj8aVf82T6AaGvKQ1x5xukSeUsgtvUmfbNZWNCi2VCF3TrRiUpisHxxeEp5uxuDRfmoTSCmWRybvPgWz",
  "key8": "5Jmdy44iaPpUqgodaNA7vpfEXFfqouxHxhYWtY9mkpHmVK4Kumy1SGWQfdnsJ3VhS9EutrKQCEyikwLy5sVRMZA4",
  "key9": "5q7G4wupAnjmH9YhtzMi2y1ewXC7kepPXyKhnSBNqebP8ncZCD32kjibkMUgNUSSqrVhzAA1D5Kkfi8iUWG1n7hz",
  "key10": "41HH7apzJWHznUriKHs6DppxshfRVNzWHKLTW4dhqj3igoddfTewq1M5CSGWz3Wc2TwDrPEjaWoP8P3nAAtdiTBi",
  "key11": "5aQuudUnhzBEeGGY2aDQx7X7BLbwpYFup2AvPGtog5QtGQNxnQmSBL9ghvFWUGDPDifY4FxCPog1YZPuMoHdEPQr",
  "key12": "64wQpCdmvrjJ7BCRyzHtUDDpxgN1BYZChfaBJVF7ueDbtQfhGqBmTX16xK3kxFx42WZQV9R3TR2jdB4bN1JzqVFm",
  "key13": "kzCKpaRsisBod7u2LgkskkkLhojuv4kjDF7praDig4sRgwgCzVac4VBkV4QAkD75HQLKe3BwoNJbE3HWCio2bwZ",
  "key14": "VcHQsVJ84HtqqJabnZNcYvPBAahaqajVwWzoJibAdT4bjmii2f9i7SHNCtKg5KbkrUoUg2mKWmG3GkyC4MeDCic",
  "key15": "xG2xxNunV2iYGmvxHhKKRdraxDYTwRsBH5sDYEuQupkGKfydcGXxdoDDiGRwWqu8aA5nDAx5eCH3XauCr9daG5a",
  "key16": "5M5icgymmpo59NEbdcsZ9yF27d1PHN3LYKzz2DbSNocPDx7x1c86uFXnP48WdygPN6eBP5cQutf2XqPf9SSXgjHv",
  "key17": "VMvcQGczKP2rg15x4o3R4uQWroUkNuWsFGLkURCWbYjcToaJyuNzpaKHHZAoGeGT7ESH4QCrLYR2j3BiYrWiiUP",
  "key18": "4R5AEV47aaitgEmaUvaRd5eEB4LHjbgTE8bTfrmVmu9huo5Sdst4SAw36Kdp162pqwQxugfnkXS91FTpQKuw14Y6",
  "key19": "xhiX1inHjVvFioGW2Q4k9sPQjpkqqBS3ZHTo5uGsaBV222ezqKEgj63jY6tMSaJcGrZTCboUm37f3pCQTJvGfLK",
  "key20": "4vuhosPqi6KdNwh9iRDJFQEhe4iri9u4EuYZ6ZFtVgZfaQrjSS6u5Eq8sc1GWg8HN58YAFG5sfeBUPtQ2dFyq4D5",
  "key21": "5rtyNZN3XuA1VS2h6xH5ZT92Q6g7W7yau32YezCsWk827ALRxtVaDEUoRwmbykYMEE8DQbzKaoubzoJDaGV9F5jN",
  "key22": "2V4LCZtoaDy5NQmxNWZw4uzyidagsYkY5Tw5xMWGTr2A86DMnwkTCqapN8a4UwNWK6V1t2AcPxuAa83bESCsxEGy",
  "key23": "5WYUUvDfa1z95Q6BHAUgVAkhuemor7Mh7ivZiLQoEJRwX12XTnrouRrAbYms8UBGR77jZbxuYfbsMXKgiKuxLC2M",
  "key24": "5KuDVEwj8HqvxYhks5aTatMQR2DvX3gG34Wi3kMUX8X78nLiAuBXiRC7bhm2pw93K9PDisp4RaiZTv9aM27QAJZv",
  "key25": "4bLT3BLA1fNR23goVfRdEys88g7x6RjNRtBa3Rq6T2Ha9rVnCxZhbnybE1KfCx8WWhA28YDbQbi2gmniiLQRZh2w",
  "key26": "3KoKbQXNNJvHm5LFD32KWGBM8ifySe1qoSNERqConyqBvCKenG1UB5xtvUERmQLCq7E5AzdfYehKtXyyZ3GXD36v",
  "key27": "3aNSXPtht43ApxF6zpT5L1VwttvzVhsabcaFVSnNmexidDJ6guXzJUiZiHcM7bc7MJwKzojhjWVh5ztwkykYpy8V",
  "key28": "62xj1nQu6WsTa91xuchhCpVYbgjENAuyWJQsMosaQzAxQjn95vqZ6M3pcpPFgZhsewzyFaMoNQCsR67iHAcDtu5c",
  "key29": "44ezyWjRMYZL5pWYEVQbHooFhxAxNCAdML7bp161QvByq99zk42sPpNu4myoKtsj8HGh1XDw75zV5j3VrFLhAgxn",
  "key30": "2Ps7n8BzL6xsF1grZbZt5QtMPpqeHHmV8CzENqscVH4dAbeCJaB1amUa2Zt7yen4dEaVDiR8qyrf1bhU318tnWUZ",
  "key31": "4R2DS2urcJhwbqGEAK4gJaKHKzYu8vmzDWh1tbj24xEuCoK3HUdUoCuje5jgfJMjfzXD35toDZSyG16PX3kMotuz",
  "key32": "4ouhTr48SVKaMdT3YBsUZR9px3UL2tosHR7hcKQCorw1DZkwSSC7iSBETnzePT5MbHMiCuoRMHiqYTPXY4vk1pv7",
  "key33": "5E1wXvvVNf1WKZ2VBNZsyY29hiNWmXps9LjbT8jt298jfDFFKjK1rxaJmzdKh5C7iw38UKz45rczaV9sB2VKHSHD",
  "key34": "aJTgBdWqLJAFv4fD9sNY1eP1cZXhcuz5tVR41Gkncq97EqtRKSkc64biDDsJHf9d6SoTH1ksxzXLKQEVUBNE44C",
  "key35": "5eWw4QERjMGnPeNZTBv4MXufJ13bkDxx6sFD344Ud9eJkvkoNpT2ic9YoCvHEv9ApKANrmy3ora1HAhcNkBqWPXG",
  "key36": "5FNYQBAFqwESgvUr92Zu4ZhsTrPKss2EnKAmBWPjaDWE83Q3az6UWjSJ42sgZ6grcL5oh7dyaDSi27qQL7hMvm6n"
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
