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
    "at19VtNXiKqD8fXU5hYm7q8aEa4fu8JZiVGiY3ZU8DjygEieisRsV7JfPBgWR16RtTxYuS1QNzD4J1NvAY3iuzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CR3KVmHnajALk65xVaNEYcuTVCdgnYJpGAC1kAJXEBoXYhWptp5GQH97fJsgjXkWcEeW911dMfcMmYiCuuE7DtQ",
  "key1": "5eaaueC8eoZkH9f33TFfJnxENxZJoqins7f8PZ8PUbttSSX6EFQCt2NCuAoFY6TZ6auJP2aWAb1yX5BSeE2voLRP",
  "key2": "2EK5NcUHAydNHCTNRDByhQoa78qHPihF812FLmWJU1CrCoCXYUVCRNhjJjt5CaGbo2LmyMUgNVr3gUYEjnK7MDvt",
  "key3": "3Lk1cDu9gFhwiPTzzy4ibULytKWvbRXw4hSdaDuvQ6ixa6VujZjrMJP3CFeN6cfRgzvzsiJCCz8hTQyDH4N9eWdo",
  "key4": "WVrLpXx8qunSJPrfPHD7D9anrYtpwfGk1vxKGTPQV8tW2JSPdk4x9Fjyqk2g9Pezo2f36e9PvmvjoYzbXdFQhqG",
  "key5": "58eRGAvidtU8Nw5ajs8a2Y926KCD9Qd9vadfhkmA3Fvyr1VSTcnRsCPThWE2BEVgWB1QXKiD2b11HN9jS6Z8xNRY",
  "key6": "2GwxJGMSo9DmzTUEL2TptYTa38n2R8MuPwib2n3aMfgXqxVHNHCiBxLvL2JWbZtD8nkyoN6H3jimQf85SRoumpPP",
  "key7": "3PRkwjreb9VZBc27sg11HCVkQjKiKUfdeDkDZNKyGM9Cra6VUkZN8SYTRAT2zZ3ZWxTZHukNUuwd69sWPtVXQ72d",
  "key8": "rHK41nWTTuwM8iKoGaLroCqYMkCZVaPFse5pLmArQLKmZNAC3MfHyPBmsgs9i7H15Q3NM4S2FS2ExU3TJmiwi9h",
  "key9": "3QbRZy9p2v8vM2uKDzverAGhMM9narQoVWnBJ3THvL3kmLH11MQqyqdm9oy1586B2oG6JaXLgfLGZo7DrK5gnos1",
  "key10": "3nd8PLqhkdjUYPfaZLM8m6Zuzjp7Lp2kahNaNLZrgZYEvaXgx1x1CiVD83RYFRVfKk72RXWMJtKDRWuCznPtZmJZ",
  "key11": "3pfzG188K9AgjYVtkJzJRpxQXjFWfFioEL9fMbsQwqsaAjUKuErgVXnMybqSL5Z9KMV1Mv2WD9odCq82mfWSpQvy",
  "key12": "52p7AeCsZ6gn6EbsZCEbTSzkYfRHraedr68EHhkhS7jWMtHsfmiGkTf8gTQkAAWUZ3bW3JdkqaukgqzYX3u4dBpB",
  "key13": "4rCtULrMtgN41U6irLjYCU5qxsoBYfZWwjqM2sSgPjBgQGPUEkz9wLMg4K7nyQaGyBzmD31zjwcXeYEYjsVV2tNa",
  "key14": "419gvSqQ3PN7BarqKLiceNwbUJdzcAcD1unpQP5XQwcNMq9j3y9ayf1i9TdbTSaWDQU88VytQQvyBVVbozCz4KFi",
  "key15": "5c7VBQ2Vg3jgFGWrCamhVQyKWeKhgLJnAp3XVg24Ric7hnjDo3UfEaYTKnzYEdoik6BeByiXErBK34TckKUwJ6mN",
  "key16": "4h6bJoiK5qvPw4uuLdmSVD9UzCzp9Lu5WmfDTunA31qxYUrgo8TwDCkVvPMkFVG2Ba84AZsfuhmVnJUhjJKJK5bx",
  "key17": "5FwtWrHjFdxigq7QCMQNiNoZrr5mxG5QtF3RGUvsGRayQn5dvT1Wj31EW8eFLHA9PwHXUJxHKgdTvxqVcPraDpoh",
  "key18": "2Ud6jxXtBLiBxKVJhvD6qvnt9YvRsw7uJo52jftWbY7fmM84o2VkB9qPE18pVmBgFLj9nxiDxgiUdxLVS1yrjtSP",
  "key19": "4RkkVUD8UGyFCJeLQ9jBY4T6FtvWqNbwvwvMo8CiUmB5MhtPZ44t8DHeqmf1TdoPKhVdR3BYvz1eGpDfwbJqtK1o",
  "key20": "38NpMFEhzw9fiQ8n7WoFNevY6WWcdnrszF5yNxDmto3quLk2vMc9jTgknvWXqdnazvUUkWS3uADDtGkw7z14QkMD",
  "key21": "32tmuy7bKfkW6C8W36yj3xvAqCHqqBavAQ3q5vAr2soo8ChpVn34UUt4a4KAEt3pyZnZn4RkAomJcCsDrbrwLSim",
  "key22": "3Qm8PX81kRuWUxB7bEp1GmDXqxGwZyvfDvETJy7a9hxao1t3CEcZ7LsN5FNXfz9pjrSftPgRYq5DUAFkmVz7FDvu",
  "key23": "29udXxp8zMkDwGrhGS5n4zGcnCYZ1QprbmY9stGE2F6uQKZgYPDwtNPMVj9jdctQr2ahS9jq9KEu8FUK8NB2Db2R",
  "key24": "36cvdAreucpJ9gSzEnGJhLxaf4esKur6ZwvLKeBzAL9UPq9RZ5GaGredUqCKdSFTXds7EYMLTee3Ru7ee2oPC58j",
  "key25": "4bfZH1Za8SpXSwjVEbWvEoVaxWuvhaTCkcxxwLEKpsC2LxDfGus4cqQNsoKbarJgr6vnRMktLhHbNfXtB4PHXRcQ",
  "key26": "2XYNryRPS11789KzCecRCXTpiiHVTydxx6zpNoTKwe7j5N8GFDpFKfLWLHNZtaHqfL39SdKmbkk3e3k767Yiqjgo",
  "key27": "Xcs9J4i21F7m5N5Z4GA9aPT8UZU8M14tqd3oiEwbYGFC8TE1561DsYgoPggwEennucv6teaavYXqapMnuE9pL7M",
  "key28": "47X8cSdnsYtNPC2VdT4RT7gKCzyfFwsq6S81uDY7rKNqVZPrnooZVAbozqyqY2qPvTXJdvsdueYcJLczKDs35RW4",
  "key29": "5xcbnsqG7fT6wVA3ebNNLNbJ9n9xAoKmZqe5WHDWK1wMBWRedeuWMW8dMMLdqqLfeikrPAohbhG1cfDnLqy6C6V8",
  "key30": "2y3L116XxJptXGoDRNZh4ymogcn5Q4Rmed7DJcgH282K2kfEDnoUCzboSryWMpvx9Q5YhpDzA173PY8LGHu42kDJ",
  "key31": "4w6L7RigcEhvdKDv1SmkJWYZuX2LYq5Fn2FBERCuR478vt46UkWArNUTCSL6hkH6Fwvo6zQadNdJNRfFq5j7Gtec",
  "key32": "48Ncai2t819BN7ZL3rQi3XsM7u2VQbxzLe8ucpt89PEojkNc7jCixuA4V28UtvVTTNKQKpqu1YpgAKHCPYm5wSfh",
  "key33": "52afhZUzU6QX8b4tsPNXeB9PzLAVdQHhS1FEkGX9Rt58wbx6imLxomHPFiyAXeVB5u8NWdjD3nj5kLKZgK7WdKHE",
  "key34": "2QuQAz8gj9rvBTbJsttvWJZkw25VvmHgSaFEetPPjMprS9Zw2XowcG2U6NbqoMG8TAogYXGqAi5hr5TceBbGyoSo",
  "key35": "5NY1PmBJpkgGzASon7NF9ZfaWbwFEwQw3esvMka2zsEGv3baw9TeRwu9DFmZyMsqZmBhFfVqyPhV9W6aX4houtyF",
  "key36": "4MtqEzYHfRwuLyM2hbsmeHpkE81hcW4gL666Q96eaegjd7yVEW4kbHVk9jAAE92afefLnqttK1LqbiT2TeEqK4Ab",
  "key37": "5uduyAzWaMGVsjy9iztEHc9XtkDzTpG8E67mpbfRCgsxi6qN5PxN4XnvsrSKMtSZqmLJQjdc6pScpn9uqquEBJXS"
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
