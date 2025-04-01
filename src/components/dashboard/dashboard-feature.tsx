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
    "3Gug1cUC6TkLdsgo39XPo63MWzGh1nBkcWdFiDXBu8r42hxpcsvx5JYHmuzY9nuZswmCzaJrBPwLg3qG7DKxFUk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ijeFExZWrQyzAdkDx5KZPSMpFR9wzhaWxqBUgWdJxwkm2sgEW1t6djv7HHo43Ct2473oJvRcWJ2Qu1Fc4gtbpJ3",
  "key1": "52bQLqc89hLuxuWxnMxM9UCtwwLdBGFBtq5DfTthKEuouy7Ubw6ZYSiXb3G9BmCtBUh3gJfvcmpUb99BUcjGmrKa",
  "key2": "YX9BXLiVwdewC9tRFH64t5Mgijfb52f6CEqCpAZYuUMPkoMuvg6wowZBhwPv9bCCAAAnnh2zEsutBxuLtZy5jtm",
  "key3": "37DkkndsoSG3UoA1BQ2SYayUhP9Y4anvQFFdSe8hLFxKfeDzrKWpBd5Fe53UAk2jL76PecdGH8b4dydPFtNKUM5S",
  "key4": "4sbCyYYvDTXXQefbT2aLqNtVEj76BhgUNXTmMdykuYP9nDpREXASVa3DGtUUKKYAaDPWmgHJqDgKt3SNnguwucVn",
  "key5": "44b7ZLkYeHLcSBug1SnPYqjaaC5Dym4dvfPHjWj5U4qXf6Nqm99gKNCiosPrrN8ZTm53NLsn2vLGaVsBckhvhwbi",
  "key6": "5uFmXnpPFRqgYsk4JHAdCANYiP9qHBMWk6wFJ7hajrMzzkQshB3KbYws9u9jdcZwR2x7onkm5RAGrEug8we4dPe6",
  "key7": "61k57E3MJs3VUgUgP3eNM5usvEuoGzcUwL3oxirJVgw7baV7gjWthHRgjyM46krYwcrXiHvg3iiknUYaak7dBBu5",
  "key8": "5NHf53NpTosC6nQSLuksYzTmT7uyFWDatRCDr3Vo5JKMyCvDGauKR4tfgudGAWXHUD1XHdsZc5iMpJLBAtL1rzjC",
  "key9": "3JtSbtNu4bvueVL72mZMHYDnX5X3WwgT2kQyV6HrRmYeuKRpqpuDM8d4FRaZvxfWxjVgva9EBhwABuRrTjQyQ8Jw",
  "key10": "61qJbfFM9UN8HFQKM18DjbxL2MwJoVFoqvwrFLmqB4ov6neW8eddiJv6gojyVcwvvEfV4vHaSUY3kpbKvrDTjAQL",
  "key11": "2r6trAix6ksPLvzvPq2YyKD1X7GsHiG8PCDzTcFkEZYUF2sTmTLo5f217zDfiCXrPxAbYhXLWCMcoF6Mw14kruvD",
  "key12": "qmD3x67kdD4FsKeeMEh3JFx7kj25SuM4FA2QYAYwfhyurusknGjTz3MR4jtjtxpb6sh5b5UREXzqkKFBB59pUkd",
  "key13": "aN9kiMP9duTYRTR7HMUdVUJoTtqJHzFfPZpmEAYS6tWzTVCyDTFPxEhWXidYnvrsmHMvKxh6LGgmvKnFESiueQe",
  "key14": "5EVWi1KP6A2A75JH8wuS5YfFTmnitSxPWcwjiRtMqYYJ4NiRiGuXow2jYapeAdduWzBTXDCkD38SjMBWcqeyuhuD",
  "key15": "4cA3euFSEBgDyoXc9avQeXg1RRMLS9xjbuuFaEhNZ9aqCDrYmjvBGiTLqERPMgJJNuvoPiLgJGWjeAM47zJrCrC1",
  "key16": "5BzoXXUQ5uAP7t4EY2mVwQjuAP6Nsa8wJryudRiPqbzpLd1j79cmuQgRjM4ZezcnujCDFzFhRx8KrNSTLxNYS7iQ",
  "key17": "5tU1ztV2GJ819KauX4jLqYSMZBiGveUktgUp94vV8pgCvYa9wSzuMwNy7vYqoX8EYujnJhCr3oDURe5ALFcDXEj6",
  "key18": "59i3WwqDQ7AvebedSMCxqXYjKqEEGqsjSoUd4xTiaDLA4aHyCLAG4REPuZsq7PoqxaMv1ZPEsopTvwr9hnqdDiZv",
  "key19": "5Lsyaxpo4kTgAgXtTYuKKje8UtPFWgicH42Xiwr3i7LEewYFHLsbu2yieocTk7ozpy4y1XMpe9WCeSoT6Do2nmwm",
  "key20": "4NJnoCjif99EbbyF2svB2WyCwH5CzTc66dWcz2aNHBTcoTSK1eFZDZQhgCU8T3cEh8YjhDVq7bdamTqRBQshMNn5",
  "key21": "4Pyn4Lq1rrr4MKscwgccW2M2WNig5Yn8b4hT7GGn4Fiu4oDKafXEkgCwYiS9aQq5QtQCK6CCRMSkNBWCqRnnNMM1",
  "key22": "7yU8pXVtzXiUsHzjXiG2CXmcp4r2fMYmFimWJcA59LAbiM2BsfHdfZpa7SzERwAcAPLDz1RsSDUrZpxwq9orajt",
  "key23": "dT9wUB3gCUxrVMb9uYFnMrG1vw8vWHNqjtBX5HpjSBFcd2nFU34oFkFf6Amb2KgJBYwT2xnaZs2q2MSJGeN76sh",
  "key24": "2SaSusPzVruCAFTKDAnknhSAW5YCbyYxsF6zEor3qSaKRHeCUspejZF6vY4nhyaf1CjhFg5Ur1CD4gidnqnDsLrT",
  "key25": "r7PF3XjzUPjPnGbJZBkFcrDr1ohJJVUC2svtjy4cTGSXzDBBgiHR3QjYEezyx6yi9Vt2in25uhJMSsKvrPBsU5j",
  "key26": "3EaG95RKPRiBNrC8BSchD7qpB4Y3N5mv3xGj2sgKirNjWXzqiNTFBEL79J3TwUxfJByEaZbd11q9ssK9giG2CMji",
  "key27": "3Czg8EkiwYj8b5rosKNptYArEVVYdSqupu24xUWgP2rT4qrcrebfD7Jeu7boH3ePbgaCwMa7oepjHpUyURkMud7Y",
  "key28": "4hLqwWMui3hHachNrPTzroNtH7WRt7CsdQYdVfbYfk6qeyMuv2rBQjWMsryi369KhctLYXMKjJiGmyk3y5pRWGzC"
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
