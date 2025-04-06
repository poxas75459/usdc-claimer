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
    "2MH5hsUsgvD7A4RaD4druQhpvnBFMabtUQzY827J4CQ4RqYSEQW21Es79u8Ekqd1xoFpA9hNsD6ETGvY9amB7QDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NyjZx3Y8eT1u1vbAyoVx9Z2QNykgq8mYMn6LekHJaTFjV4B9zB3SE7ZqK9G8fSVTNsXyW7XoDZbbqYmg2FTXp2E",
  "key1": "5SfotFogVTSqTYA4jdqbpQHkxwLowuextTX5vbNyEsWPNwZ7JxP7PAkQyd88JXaaQ8wmohvh3eemR1BHPSSe1pio",
  "key2": "3BceKQsq1rt62uNkDCB9w5ZrbMAGsdPYQHABC7Q2oKvf7JaeYrfzUbzrQML7dZZfmXHdn6CPbym21c4BKuLaj1ib",
  "key3": "29SppBjVxdhK721xU9Gx32YUbrV9JcR6pkxsmmniJk9mxD43k5ooHsW34YN9YHZqNwC9BQ27xQ8NCWccs7DHHJTP",
  "key4": "2iWJksXyUTAYKYRLCptwozJDumzNmGJTCAk19yPJqZF9DrS6j2WB5oRZSWFPex8mNnVhf99NEF6NhetS9dhtz9ua",
  "key5": "3VM2MFgnGp64AubqvbUra22WmuHBL1AemHXJZfTcpJB1x3Wyrw6DjPvgRnDqvfhooff5mCAtbrRs8WgojETYkvXT",
  "key6": "3uS4CqqHBjNbJFpQ72FMo8em8eJmxxt8uE3fH5AJnNUitXRABAFJcXbMY2NjujQsCPWEP8mtuBTdsb6QwMsobaS7",
  "key7": "3wSGkPYJCSTbWwAokub5Z7j2iNPmt9YUQy24FGqiR7gieqixDpjken2EonbKctr7vXkMvuV3cYVDd7rrzqt2iPgJ",
  "key8": "3R97E5VGbCbaWgTUeD5unhQKFChKZ8iXrL1Me5pmpACEq7vyP9JagddLXDKRD2VJzUmcntqCDRmhuu6QG741SFay",
  "key9": "4WjJaQKrLVYXCiQCmJ8RDMaNFJpfz5B47Kp75h3gVW54Sa6Ue6AViydTH3F7dBaR53kxiQ9A5SigjiPnaDTpTP7r",
  "key10": "3w5HD3R6ApTvh3necq7v8vcFKf5SRckm5tUn4zM6Z3md5kHVL9Kvcv2DVW44yjSfS3Q1UWgvMXLseiDBMpvjPiM9",
  "key11": "21Lpby3PbDdRdEfgzQ5WwjjVxrQtCXzkGAAXcV6n4p1KjxqKMP9E9J9XfqnqCTECYxfhon6VpeQnUEnjoHdEL6j3",
  "key12": "5KxhQNvNTJZuBMSCCicCFzNdfYEbSrKzmRYii9rZMEC2kcPu4nAomdnvpkt3zpcatTkCiTQLScmYw41zZcp8BDiA",
  "key13": "5eVXdEQNw627xjZqtGQR9UCFn3Bx8uRH2VSZufegmw6VC2zyeNx7RDpr2uhyaFY26yrcTucnmn451q6TWEXUnQYb",
  "key14": "4reNyHa6VjihpwDvk2coYrBpUfcBp8y8Gq1e9NyBRbUttiwybRjMjdXYEQRRv9b8LJu2F4mQFbL1Vu33P5wb2U98",
  "key15": "2qLJ6MoyJWnJ7Hsm8sn7rUdNygaZLefioeU77HY3SnZRoF9R9H5mByerDAofszbiMM6ty8YTFAN12LQ43rPVgwdU",
  "key16": "3e4St26KvqBzWw2rvBsYpScUrCvdMmyNwetnVfVq1ZbyCBDaHGVEskVKonTpQXkGKjoTUnfRBMNCrE5vZbe22pbQ",
  "key17": "2J7Z1j8NvPFvUykn8XbeEvyjUSE9amQSp6PZnh9CTc7Ui9M1EWVHSME89myoGTnELA1pJUkuPpMNnbRdph7Mtr3r",
  "key18": "jaHDHWQ5gyCumJiTnU825zGqTfhaBLQDGEhpKxWrmuxy8kG85ZMGfaivPuJuhmWFAkehT471T4WRCeMd19A51uK",
  "key19": "EaiqhaE8MgbbtbrQ1ha1pQtoKyGLhNC9JnTyeipsVaaPXBp5G8cnXgbBNtTfvcSfSW1gFbqhjDLQbvndW5VKSbJ",
  "key20": "3oNwEzJeEAi9gecz7LThH9cMDvMcDTcBnSedDoCyhNo7fUu1KtDLvbe6KPycHznqtjq73EYk7xx9rMx83FPsURq2",
  "key21": "2isxbg6dcz33p3345ZXWqkTeLMamrcxc1gvpcwVn42gzvhDDV2pLsG8BcfyzBKY3No7VJN7a6XBbijFdKt69sRka",
  "key22": "5oad3MnyMRJVMdHGHzViCaurTb8EntNWyWYhXqhEkV82mMocLCD4a8TSNYDrG8NjCA4LXzr3sVyXkzxjGS7SndhQ",
  "key23": "4iKZ7DbS53e5914gS1E8PADLnnUbeaQc7iN5RJZBU4Nu68y8DhXXPk6VYHT1cNfZvy6AQtM2kwTuQN5QS3rUmhWc",
  "key24": "65DYHWymwXNp4C7aySGy6q34w1e7YXvvyxoRsARZvXKrMFn2rmc4LGPzfCk5EtpfLm7eDPLEct3uGTnGKUdWDafS",
  "key25": "3Nsxwb5yppgDae54vWqo4ByH88josMbGxbEcytWTUFoLnAiSjw15zVJUDXQ7xGi9wEZ6aMjPW3w9Qc5tTmSJBy2u",
  "key26": "3p4pQCSeGE2uqnJbFaQZWPq3AnXCZ2cDzKfoJ22H314iiiXyMYnzey49srkKJx8i5GVknsZW18DhAZoq4NpzHbbf",
  "key27": "2xR7tVgQzEz8EnoEGcnruRb1CxCmWUKCF2PdK4hHqbmzMqaFhc1bYqCNoi64o3f6HPwovJ5Sh6ZfZdfhnxiUNdfm",
  "key28": "2bn11yHmfQ5hxegqtaQRfBcfzcLKRo9JrHGBAPDkzNmcqEjuyVFh1GP9aPUkqP34puc6H6iKTnUMU1cDJqunS8QL",
  "key29": "3qVP2g2PJPcLauQhZGoE4Rvw4JWcuf8JQwjjK6nGDp59cNrFBdduvc4ZXnV5p1MiuiuKfsdYFHCS3oRyvwmNJmnH",
  "key30": "2M2zfGMf5Nw7hiEKr6oLKoTVVKBXHYK2Ni7xEhDuX42ukC4MDUNqUL79JsaxW1gCpJgHNj5hLNAKATLq4KymfMPY",
  "key31": "5rbFHNLEv29mXqjw9ktuPtxJwVvjbbDpQ2g8bbG9YJanZUVqcYpGtD4mbgWnQj7K2Xq88F6W4Q1oUmn3DnSrwCma",
  "key32": "mBL2aqwhtFkQHBbK66sYkQrazuoUUpL7K5BwYrAkd9hmTFC1aB5iNt7riUnDdBeNSRXvTGY5K4GBf5x51FV9NbX",
  "key33": "uKQ4tKYRyAU1iNVS5DLq5sDHfR7x1xeEAoXkXMVoMR6SdYdGRt3UC4pi9e5zVGHnmfCkJw4vQovjtR1ynXTGybc",
  "key34": "62hSVp5xXRzcwRYzhDPumBkpUaFpADDpUfpoG6eX1T7EeV7WcqoqtzqePbqn1mmcywQrZc3mKippcSggsJs9kbUA",
  "key35": "22r8duW5b5QvTxnqUrAAzweHysLajYnZ5eSrGcrTZgUj2caDBTY2KFn8sKas5DjKCr3cig3J6KVurt7hfBqwYduK",
  "key36": "3BivKVMxeWVizLLSaB3RtVWPDRoWFcNRhDoeZv63buaLNjsxSb68ewCb4rkBJadNdAeBT8iyV9dyKMMKEMNEDLot",
  "key37": "3eLddMJ9YG1KhSeYMq4225RU2gMxjw3zy9srY9EE6f3UFDb6FkEjGr6gdFd7ZcN9Y7RsnNZLH8m59YRgatbNH89F",
  "key38": "3fm95NFaCWVsVDvbNisN5axM5L1NGSNv7mkrgEqBu2oG1KLFa8S16Btp55ksSyvAbGQ7ZTbL38Ggdk2U7zZf1AsB"
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
