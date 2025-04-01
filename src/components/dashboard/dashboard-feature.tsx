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
    "t1ogQSwjZ8VU5akZhqfQbCYLTYx5zeZsoUDKoQw6bbRTKHmRUkDBQwdvherwcZU27cPzZWp7uAjGQ3NysZVKQmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H6g2NCpUKCYndK1FxCSnBJXKbaZmcciB4X9E6hWZ37sdpKp33MDD69ip52iKpaZvcQHyQPrYRWmRC14ViP7deqf",
  "key1": "3jgAa2JNHMcZbnmE32dNSB9u7yb18LUSHNWRQT78azVpry2LGaz5FE96JP1jpx7RxCxP2aEdxSckb4fin9CDWs3B",
  "key2": "R8tzVeAS862w6m6gXjQzHje5YBPgP1Z943c5eSG8uGTv5bEu9Q5Pz6goDTKVbzqJH5MLpvPGhQk3CZ76YEL6L6S",
  "key3": "2JdQGrYpMibraKMpof88UfbXNHoUXdYGHJY1e3H9QDXYzmnXrS3VuKRq1uNhhTeT881PfzMRkvN8qMBKti1GUJ8K",
  "key4": "5gQmtcfypMRYqY5AKbg8KbRuHUB5N8m1LWsskoFyZ9AQCm4iuGjMkh8JLrqMkbNX3ZWX2YaZZGdjP9CcnYbyN4Wy",
  "key5": "5Y5tKgsP7kn8VYj3DFFpqSSa2HiY4hgHeBB3mtk1ExE3QxmE2KDqjCWUBS5FbTv5hmhJA8fue8teqRGDbhuM5K4D",
  "key6": "4KmCpAZ4Mho8cpGHwiWRGUbsJef98zZXJBZcAsY75rZzmgswf6NnmBDRFxio2AUer9UVhBo84XJhpthHbfrxpALh",
  "key7": "4pyE7rmFEaXG65wv3JVsqgAZGkJFqvzsV3qsbwgcq3Q5Y3zoDWyquFM3RomYJYQXFYBG64VqPRzBHVy8BTcfSQEF",
  "key8": "34xDGpbTvSbft9jaQZ185U8y7YKk2sowRb6PKhS4d6xjFgqiy6gXzRQckB862c4f69XqL1ECf5g4W5QpvzCaV1nk",
  "key9": "Y7HYgkzVWsTfbeWRgsyUXSGZehjidPssBqDycM69gnohakmuhygMnsjmfYAJnXT68tQEXyyw8TMxNzcFmg66zzz",
  "key10": "3JVbJCgef9P5Pc3ACeVVUsu1bzvDjyESxvLrWtg9ZzuUmsXoy1o3msB4DVpSESfugVWD4hcTq6fpEDcZgtDLRKb6",
  "key11": "4Fcp62CCTsHAsyyeJT3ZpPMxpFJQQAHFyBAa5iB6Pr6fkENv2Eudqi8SNHNpqMGCH5sLTJBuU5iAdBNeZJDTZZdY",
  "key12": "4gPwcYEJBhovsPEwwQPxqK1nWikmw5XDWfxQ2QURWWuzjhHqcKsH9b6eZ6VhsC7tqp6C21FXwewkgCR8r2hQRkBW",
  "key13": "2epqvVp6BA74JkBKUkoFs1YGAr4zztjZWRdotMVyUEpWMmybURR5DAkFzHGoNCkUL4pRnvPRBGva8YpGGoukV3PR",
  "key14": "5bov1cBxsLx1Ykcfv9erXXdDoTyx3uq4cW6Vexwkwepj4MS1aZ7DP5W1prD2ReUzgqAmRu31mbNiryRZFSYApKBZ",
  "key15": "4AqrzL4sWii6hmf8Hx7aczvmT5orzUqX3XQRGRCrPZsAm6PKkU2rm2a7vp616WURpRm6nTBwCUQgUyiCHFB4yhAu",
  "key16": "5KFxSjkhQxr5a9g3yuJPG8Bof1HFdfTquU4eQkuui3pzFm5Qn8M6qTx6Nme8pfxBTApTpPfCLzBjKqEw8JuLTWPd",
  "key17": "3QvJ7LUg18fbWFroeZUVbAuATTusoXGNNSiCpKVMZZjQCxtjAxp5ZWpMFx6wo1TgCNLzv2mKMY2RY8fHsXi7yz9o",
  "key18": "31Nf9kBgccjpqvZ7DUsanhxVS2eenkdAmMedc6UG9HwB3DPP9csxp3yHC5oYs9FHheq4wRVcJzjSGNqX2WRSg1j8",
  "key19": "5GYx4YS61jj2YsqJnNnRU381Sf5A76hRonosMVs7nqRLioJYQWY5xe3DftnDbK2fAKYwd1ag1ZzkVSGTcWCsX3F8",
  "key20": "4jwzY2fKEwX8uSBwYdW8rMzjWnSiVBA9MLsomzXTr7yY61yGsKHpEqrpcZiZx7tx6iWXZcnyRwgn1L2a8ynr3rPC",
  "key21": "5sF6owupKAaxQBuy27FjW4Tah5J6jc68QMkFy2gp2zeT8gyH3ji5SateVm7r6YDrc9aDswtAZHExLZgLZ5mKp7r4",
  "key22": "3HJdGUR1hFbDJVDgnMGJvSfcJtuTHdnKGYc5djPEZCz7tMaRBMgGMDdm84Ko6vsNK6RohT7MMkN9Pw9t1wSQbveM",
  "key23": "4ADAxmF6fzZbNV5AHucAZKouVQj8Np3Mj9bT1N8T22qzXFWvqyfh2rv3cz9Km9vZqrBBCscrtseFcG7HNpr3gDuZ",
  "key24": "3acgQYKvrCBneu12CR129FSrUHurW9zh6xALqr1XsrbbauLQTCGXUYQ6hYTZRz2FVjw1h4a8TL83nd41KKJFkwWG",
  "key25": "3nxqfWnXBHXEEvAGN96EmWY2anW2q59fQa2r7BwEGSdJy49vAXQgv3EzBdmU8A45JMQp6AG9CH2wLX9dTA5tQfrJ",
  "key26": "27QFEy6QdVmEPRYR66qCamxKu7QgNLfYEdqC5FxqyQpWCBP147bYhaaFmSP6ErMcNQ2byDuzsCqdiyZqaz1BsLDq",
  "key27": "3gwCHwRykavmBisMRab7PjVUCzdmZUivHCe3QfWrq7S8v1aPw9yxTQd7c3giYAr41W1hu2dZWVSRWoztu1x65JLM",
  "key28": "2PZRGRJvMNd1JRJJ3MLs5kf7po9w4v5Lm9WVkKgJeWpJXXGWJsBG2TN2HkNjC9Z7TXKD2LW6CMMK4BG6zx3WZLtR",
  "key29": "4t3uZhJnVSH6M94F5Q6HDuUuNea8eEDUhLd4b47KCLoWBSJFvZoofub6Q1kYGxhZ9ya5GgRdNgTGdU2nRVoZx3iQ",
  "key30": "2RNafR8hijwofDTd6ugpGBSd3mb4ejsUg7sLqLx2H1RDX82VicP3pRiEfHNremdK8BZ1GKni5ASZdKHsgXYSDfTc",
  "key31": "3K2pvbbY4PzncGWa4Sr94EufnPCZn2vozzxRpxaFt84uZDnFtmbpBVaWt9xgA7yherPHMQiFzMcs2H9Pq7jWRg5z",
  "key32": "5YWnx2qPkhxFkwo9V3gWn1bxa1KMBX3Z4Y8NbQqMP585oCQXaxUSrqsLhJG8U4CYm8xhL4QumGrM9hEmEc8yuEER",
  "key33": "RP1d43tJTH5Tz17a9kBmzMv9t3fZLt5LuvkVkhzwABJFFSa4dymN4SEZnDK5nzSA5Ee6oq6UVNfmeagfAzJEB1M",
  "key34": "4fSrrWmiceDJwk73UzH3BpFtgVCykP6kEwSQy5iPkZozMPmZ5eWuUxnyNXAbbuXPhQBaGoQzDT2ANNdbvVryvAXQ",
  "key35": "5Y1Q1M9akf1Sn8cjnTemBp4PsZJX51fnMDfJrfp8YCsWw9jfR4WfAiZbUHPDTMuVvHuhk57VQgWnHfqwJvdn3R9n",
  "key36": "mDf1z8SK5mr7Wsk1GsVAtj5u4W2pjUWtf9SrFLYcupSsnPSLHZzQvXtK7YmVvK4qjnTLzQJerV6dQzCdwQtavXQ",
  "key37": "2e8imB2pcKjfHhnTQgh2GcjhpjcMKB9NbHjpKXBmbpXG9BRM9S1j3CW3GMq7C7vJXa3c95WWzNbnGxanYQL1mRxq",
  "key38": "HKcEW1wuMWKJ9rGPDYGdwYyTyf1Y7pgccwEwzhciCszUtme5NydVpfKhUZrX83PbV71cQwxYPuE89AawDaAHyHR",
  "key39": "5qmFP4ejxuUtkCmSquVkvcTsx5yNQKvSQaxnSQYmHCUNzN42N8giqRJdSTp8sPNVkWqPQ76HoDakBnPDcb4jEK3L",
  "key40": "5SFssrfQqpFCgTQEz9azpBEDGuPeH9Tg4aqUZvGPenhghMaBTUUQdXn7NP3TugXhntqFKqZWGeP2qDoYR638cXjQ",
  "key41": "528qCyqc5uPE3acPpmfq9qVpgXLwUYBevzpbCpue7RpB3dqQxHde6Dri9uEktW31c5VabriVXbyGJpZHJCEVaaQ3",
  "key42": "4irAeRaT2B2Jvuxm1hToPeFVMKgRDB9EkKAJhepechVGBmFc1v2mcVQcbYPyDkTkuB8qRdhw2KCktjiKKAuwnxjX",
  "key43": "4YUHsFbbowqRHeQZn3ntEN3PBUHht84G5brfo6yz1KW2LyYvYWQBng8RhJReaeRMMj1ChtNCZNGYaXwjvu46Qk7V"
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
