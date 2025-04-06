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
    "5NqAvL3zTAcjunswbyMfUmvYwZQrvKMQDLx7zT71wn7CnB5ZhZ7wNTusvBysjT4bmndkc1XncuVAktoGPMmy6o8G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LQebmZCbTkbBXKKSkPmDTdBSQYxn26VAgfGHRNcxDc7yY4B4YgSwXep5W7yKquBtKyYBPpSaUtst2qzCPzpvms7",
  "key1": "4Czghv8bydyRLFZrNj5yjV4ceDkUraTVk647p5DRHv7sPVFMvHf5e8hSy3W4tLCf8BfqKLLdR8CkvevDG3ZYnLSo",
  "key2": "3qTWRF2N95XJqyCuyAucFPDtFm8VVHzx97TbeNtLurt7yPAVDCp7NZJM1oAM4KBvtuxAVGiASBZDMGNDp3MMtF7Z",
  "key3": "5Qv88ViDaXRZF6bXcZzjh53PbtS2x5pHVnKAvcMy63s3NFpbJ959q8YKeapee5amyoXdE2gGKcjKANW8mMXuYZtN",
  "key4": "3GJsZuHaUs8QsLtMUXnwUok8We1uh66F21uc9U3bTfYnZLR5x8wZXRkWx2GdqJBvFyoF8nEbH4JgMycHEq6SpRdY",
  "key5": "3MrBYXm1RNjjuasKBkR3pQhiRfiHMDpCr8xqR4gWUiKi9vdAf6uwV5SoacPeBfnmRrnJj2zWH6Tba9JYe1PSw34x",
  "key6": "34gWi6Ndvsb8A3Bri6ZGv5fsgh3Qun2Mqu7iZ9NbeRETYUuaa59juUxhKbxUcmDU9WkNghwwUL77JLmfryqvQx9B",
  "key7": "4wPQeGJidbePQHMasMTtMWiXv5WogUT9MdEbYZBzPbfzx12oUSq48wJapHwr2fwXDc5qxUiJmJAax8uSy7ZniR87",
  "key8": "4x1RB6tb6oYiqz6XfYXMTfcLhcseWF8Zsgh7RzKYrzeSawfiUp5t7WJXKVP1tNKWc1b58vNpRA9GfSx8aDwqz9Hk",
  "key9": "ToLPkKRk6jFLsem3Njh1mE9ddqgQr1MtoD31tVAjNvwdgJ6Cath6zg1MU5ktSdVaZq5hCU8Fxejw6DaHdiCWFmm",
  "key10": "2arUTq8LdMmK3MQzXTVo9VM75cfn1Y76BvKnbFtdX5YnWF66D1nZAfzQkdDgJuXg57EFJBH5ziJ22EvvtC9K54zi",
  "key11": "47An1KZdkQ3FJcqrB8pQJvJ47KoVYnra7UY8bVpaMGkcfxALHJUPpLDwnn31A5jBCBzMTUvYm3tJT8zh1hEbu4UD",
  "key12": "5mX2VutgSWdKfzuiu4uMngVeKsiwv96Wz4FrN1ahGJScJWyBAQ2jsJf29pCyko6cY3B4ScdcUJb3djpDJqUhPrfz",
  "key13": "Wru3qvEAWbGD4btRCBzgxypFKaFjGkodT3jsrAgh55pUhRNK93LhX4ex6jAGFtFnci1yVTD6BkmKAd3bAenQRtx",
  "key14": "4MED67eWtfak6G4mjLPT5M7qo5kthDGCwVzuMSvg42wJWiq8q6Qj8HizfbVbG48LYFHsw1wcQgc45qiu9UhqsgQK",
  "key15": "2x9MwxmGVqCum8RDCU9J7HbBwHinhe8zDgZQQCbbHeoQcutrMk9PkTnkfwuqaCkQATEoqZXD3fMVEtzDUzfy7peC",
  "key16": "5MKUk7mxp3ALKe6dYDBuQowNDfchNAJn3SpBzcWS74uCNXjxvF9b7vrREggi4djkyqV1EfEJV8qs4Fd5X9KCJPD",
  "key17": "3DwfTFMJGquHxzBoFXNxanF9FvvEdfjUQ4yjBvjycmUwALzprfEdeS1pogda9A6txEnZhHiQcDRRb8SaEgvj6R17",
  "key18": "5dgsQqNtN9q3srMdZM7fe1Gim4F2e8Zptcmf6LvmBNTS1MLzdoFcTX28vLrGVeQistSG2fAM4uwaYqY3Au2h8i9G",
  "key19": "3qe7Vex2hsmgsT6fvWi9mKArkKVXMVcan955eWVgTzzMJ3tSzu6bxJs8ScuNcGh7Bd135Q75jzMiUGs2WwdW3tni",
  "key20": "QLt9KqB5AS5FRWKZhnARkZyeMtPdeURRpZkmTTvKoarucawbDbFjuFCwVYuocPcmHq1HuBk6q6KH5k4ggAi5hkn",
  "key21": "5Kezq61yTCVu4g3zyrFNJfhmnQA7NvGniYyTstR3QiBAn9a5mmERUB6UwN4mNf5WQV6HEhc3AdP4arAficWDugiX",
  "key22": "3vp7M5aXczN9pNM2aD8xwwP4jSCjhqUSFr8MrP8y46UUnJMDm3yqup1NjovzrRZZtKCcUce3cHrGYNkoMN8xHwMC",
  "key23": "5DegrhZGke27qQVDV6hWSyvfQ22jctmhSW74Mt6mr5yqz5UKJwyvhtvCueDhGhY1e7NdcaKb3h3cKnbKqBzEwQD9",
  "key24": "J2o5B5dPdHb6jgiQEhWNTRtQjxWnhkAmFxHqVAJZUSuoFXWTb1mqRsyXvkxRNcXQh8eiTzXh8DUw21HHQ9WenUT",
  "key25": "3weo5JiDQaV7HNpYCid5oAP9Yooxst18GY6kjpvUA79TjdEFYA3dY7SeDwG8ZedmUiyHCSHZdBFusp5j15L497Df",
  "key26": "5RyBQexZp49CN5Dhr9nKRoFgZPA4ELY83BFRur6KRWk47WEBYfCM25zhUPMV9SXxP5NpQvaGZk8zGapRkiq3CdN9",
  "key27": "5CYZ8TUHCD8K6hxAConuM4GaCn9hXhZN8ATp1A2G7FasSXgt5oLn4EzkDqk2VyjqYyEbA7WpDfrsLnUh5KnALXC2",
  "key28": "ZNdUDfqCCu9xRYg4XQqYgYnUt4V3cA9o8ttCgYb2KbE14AKmqNcga2QPpeiQi31pL5gVTq8WpikiR4Tc2ZXmEAM",
  "key29": "3tjjLKkzEy4mn51XmKdF7ZXfHdfxa2ghmXyxBG38thCW64GB1ABtwUc4UX4cNHFyVBwTuWftrCtL5qjsq8Sx5QPh",
  "key30": "5XTnMZ2htjEe6xAvZprQBoZQHGpszHS8AzfUVo1LZFEa3aM4QHs154ugQwbdKrMiUHFYXXfLFSM45BErUwz4HYjt",
  "key31": "uyipbasFdvgLCjuq95QWzbFxtwqAgLQFibT3sYL2ZFPtUDhDCC1VPsAzG4hf8qQDoR8HeSrpoJcn22J3g8P7grM",
  "key32": "3n2S693uZrNwqLPzK68FonJkZg4ryD7FDj5Qbjqk9Aiyi7kNEE4i1yhPR9nr182U6UMbbLJ9kmAS1gVy1kSN2GDV",
  "key33": "FkTyUakJZzHcYCjiruTTF17ixeaqqrDABeVv3SyrYa3YCZKX2nWBkqrcQSrNxPcn7ZF7Gmc2aMRch6EuJNzTogN",
  "key34": "5MTjqqr25RitLXfMLc4LJaaD8T3fDQJXQRkjnEVZ4t9cFuAn3jFuocjCE6af6VHfsHmYt5qLPS3wDXJJDLhJDRGB",
  "key35": "4WHbSx2CrizhcM1ZvzAebVXfpgQaevQApnUXSrq6tyGpmo2hznL1SDVUi9gBY8f4z1FiPdn9ahaBTQMuUQd9JzJ5",
  "key36": "3zjZKBR3RnCNvQrcxAjezrV1AMkHQCWC2ovjQgRMhNJVcxoFvo1BTiZRR5zcUQN7YHzQqkN1wXdcBzZENJWHqyXZ",
  "key37": "4f7C1QDyPVyVcT21eQpKhwMHwEA7QaUjsaLBsKQv9QL7ewKEGiEpCSbYT5CXwhXxtpeRkHW2RMya6zDPzmm6H7nE",
  "key38": "2Mn7X4c2cyiKtvipFxqSgv1uFNpDgp84u7w5quUsv1y5f7M4Ai1UKVA14ooSYEkYfRZaxu9bPW78DmwingkgUBP3",
  "key39": "G8CemqMUKsaS8r8F324XsGsy6vavsEPw1EWxw5m2MXL4zBqmYJii9AR83nELrann6ToL7TaKkNGh6woD1wg5CPV",
  "key40": "67UZ6MrbDB4pXhGwfWTgysn5tPrHWtMCWnrh2fuzaa2nhiCdo8fx49V3WnLDua9k5mhJu1kmu6gDBB7QspgHxDNB",
  "key41": "4FdtusbH1p4dcQem8smYLsHpMzvUcarqpBWiZoVmnpe2TSGv8rJqf9KKeAhKDf7beJvR6kMRVedUzKXb4XJNqEwt",
  "key42": "4pFHxL2D4U7tbKY33JXPoQHdfEhDyDZVteqx7MjwJP9jhaMqsG1RzdV5szaGFtYYYBK4zjAsq6TQHL349K6unzRC",
  "key43": "25feWJad4TN2dGL5dMYrKzXszacNkHiaC5NLL9BQhF7iRK9PWvwhfphbkTE9EAAfVfWq97q3YPGegVeV7NkkayxT"
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
