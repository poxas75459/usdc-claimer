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
    "5NMr89z5h67fsTvAdYw3R61ZMtpe3uuhfsNRgVFy45GBbBt3Pfh9MzCexpup3NKrktrf7HNRz7XizqhgUaZS5wMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gf7mC3XrzdhvVqUQzUUbsBR13CBJkJ1TLUDM9vLG1FgkrBatcoLMzVpaS2ujqnxjpdJne63aFVjM4f28aEiBLay",
  "key1": "34ta6Q3SrWDDu3MGRK4zjLJa2UtXVQqt5Gpz3a8xirQEexXHcNb6QayPsrztrnr9uPzGvSWm1LYpfvXAc28cGmhs",
  "key2": "5PtRRLnAcS9jbmZdRg6zCUY9kHBr6ia272NgLt8dFf7t8WzvGwhH13uqoBnCxuBdfX4fkQTJvbeabYWbqzsQDsiN",
  "key3": "2EcPRjfEGkqPiidcmmwxWiba3knwkrANe8ZBjBCfT5hzZbHFoJC3XjMBrGi9D66BjdP1H25XnbBER1xfxhhjDgNm",
  "key4": "4g8vUtPJjnK6dgTpf5LSBnDjcepy4PTTyRdRgaUTHeymEYtJLeYg8X81rDXz9ruL18dod38PVoLVakEyQKe2hUe4",
  "key5": "5fc79ZDXghmaMQZj8zBP6TPdnaP1B2HAJCuN7wkCqoEuqPB4XLXLeuoKtnuhocqU1gCm8cEmpoiFekrWx3q9ZLyT",
  "key6": "2g6de5LDsbmERUmumbPupLCnsHbvNRp8ZZG5Zk34WzG6eUzYzNYqMBDZTDb8BvLTvZuHyd51gk8zWGvWhL4P1eGG",
  "key7": "4tiHSH1NozMFCvM63c5Z55nYDonrAQ6D5kd6Heby1RdDdFyijk8SxNqW8yNo2zSMAaSXySG5MQBFhBf8W5HgnFcn",
  "key8": "3LG3LtN21u8WaxtxgtGeiAyfx5esUGjJhdP9r2z8vN6d1i7EQzwFN27EdVdpeQbbgX6W2fyfZYvVvty4DGApYFee",
  "key9": "4e6gjeDUo7f2vEJEfkJpX65nvFthnTQT4yjzM4mo8pQmFeowspwy41K8uPn3niUGFcbSqyJngmaJtHw9YNXNfjCq",
  "key10": "4fFh4ExWGMGrDwgcq8ztktjedqRSLHTJiHviyw6UKUai6ALzc2vw5gMZaKUSksmX6MtTHxYQVqvx3GwVMktFGEkF",
  "key11": "2D9MJ4pkbBkb5WV2dsnjDiH9Lj8VjFwUKbjwVmdYdy2TfT3JdXGqJyuPywFwboJSafuwnorE9pNvZNoJ3sYzSepm",
  "key12": "5474JzPnZRpbpz1zgRzhfAtUgDrHRgqWmSxwqmwnC1v82tKdnbjbQoJpfmAAefXa37Ui4ABxgkk4nWdz1WQAMcQD",
  "key13": "2W7JLounfE1QqfQysYMwfwgwkB4AmikfvHKM2Y767GksRQVEK9Gha4UnNJ8aWM3ETvYL4ohnmiCrtbRQjXmaxmtW",
  "key14": "4bBERGFB6xcLEwjJ3gPvTnwePSw1crgxWRq35CRc98VBWyyuC5Tme7WHkwWqeBNSyPX66pNXv2TXwMrW9apTPnbU",
  "key15": "4nmQcCEWF9RdqF2KBtuWc2JWw36yZVuLgjMW877aQYuw3SRJDXYS3ThQMLLHypV7QRM8hXKPGPtpPu5rxWENeVFt",
  "key16": "2gR33fMtXuPNNphTGMQpTGyqNqNp9kCaXBXC9voLGho7SFLKsfHpfYfe61fmkDJomYabFtTyirmmXo7iF7fA6G4G",
  "key17": "a1hvAZJuYNQH5aLmcaJa6agMRY7NaVtuCfdV51csHEs7xMMSiDfa5XnYDGncGFN8cJbey6WNnCriFL1z6ivAd8f",
  "key18": "4XhoAhPdTxppUAUiVKWnAc1s8rvoJpP9UeCjji7YJBnG4jqLiMj4GPKHmdMvBWAVqn9KYLPcFvPFxNAxzGPyzvrL",
  "key19": "5N928xxBLjKyNZaqriLAVWWFANQeWXP8ASymigmYpR7bhYspUjCcuK4xXK5X4ZkTQ2NbcRUkz74XsRyAUNpWesNm",
  "key20": "2ZKCeiHSEkwPanWPcWQuXbieSGJ4k3wUk8ncFq7h2vxBkfKKiPLVu6cYoLbdmGMP7qCpbAXTKQBBmXZNZZ96FzpS",
  "key21": "2FHF8fWafQrDyHuyq3KgAKug21kbZcWxVb5VkSS8rgTGTzQsr2UXPNdSu3N9BtCHF3EhakF37GbbyMjse5wC8DqP",
  "key22": "296wcB1h3kse4JfmqmUHKAog4M13b6Uw4p25Q4RNh3AVo2Bj4EzN5h8tBaV41VotpNb6oNKjhbfx1VDNkDPnAGiy",
  "key23": "3gayqCTUbpKUDpCksRTp67eevrADaKFTyc6mDE25P99qMqnLrMH8u8acgLzbZ1NGmDsENMcCyE4ie9ai7qGCgoak",
  "key24": "3XM9aLMV3i2htGb3fuv7Yo5ovLk3vq8YFtK9pLmWHLbASzgKwXgWWYybewbsAwmJSx6SywQc57zfMWnnoW1PsCoJ",
  "key25": "2miWzyBkevCywTgDLv7TVpQZEpJaJUt77pdA38qWicSL67Qxt5jNc6H9FDfLXKBBhzWiiEcG9QB8CpKww2p7DBUs",
  "key26": "ctAW5BfQiGYScG8v4qkgskugADirC6aS7KzuK8AAnt76LNJnmP1THJkSAKLyd2qMPoJsXvvLeGj731j43aoTDEq",
  "key27": "2qtMcsJJnzyKuvGk7v6e4dkTMCNZvHZBMHLwjFogvPU5q1PXZGyQkyFgCjmXqufmLSQadEWN36one41UhU9iGRcB",
  "key28": "4EGCor9hb8uz4Hwbvo6Ypwt9tQnBsCpiydk8cQztMA3F6LKcRJZM6jZGaJko2PLzRcdiP6qCkaiaWUcnEK5cPwqE",
  "key29": "4o7XQ29AbzjMRysk3DkrELNiXBrTwpzQLkKnaY3ndtmKByqnuPZV1DkZLRrVMdrXE9rxBjXAL2k4HzhgAmPVNMPj",
  "key30": "3oj6XuWGzGpQQGKdiqSN5Dzt4fQiVJno4KT1kcSTyk4aLRryreiejEYA7zmCxeqUcWXhfhsj79GQaZnfbhw2njZ",
  "key31": "dYA2GPqLT97JGYddmpw8MUfzSUGAeiggzGDGLLjbG774zaVf7ugDijDuTS71iAfVqeonufRiJzh3Kp73KyD5NyQ",
  "key32": "18BSBcntzGsj1iKLvsvv7cT4qsHU41CVgQXDsgWwdyQvR57zimSktemMQV6SCSmhvahJDoSSjNBANW2jRpkpLCj",
  "key33": "3TyJSL8LM2HGjzU3SMh4sM6RWYQDpiw6w4Cvo881F198T4gW1z4at1hPf5k62cFBK1EDQPxY8ph9v7RosxqW3BC",
  "key34": "3xmRmkPxXvabv959y7xHWDQFUJuw5R3gctHcA9DnnGJH49CisRvc7WMatNHZ2eoDumC2uHk4cBiFwqDR6GTrGyXk"
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
