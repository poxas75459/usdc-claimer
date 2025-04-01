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
    "zATeattTFsDMcXwB5gwDBNFg4zpthykbY6U25YJZaZLvL4hE9ravLZfar58WnnguKLw3Zm999ZR9FW7APkHf5bQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35D2QYaULu2tvf93kyoFJFuJ74KrkfqGSSNSqGqp6Nui2oDScHCn5Kfk1oj1nERdoud1daiZwBwUXPiZqUXGTc3m",
  "key1": "5Ptact3Y4xsU61SxMzXDBjqo3Ee7DHJPEcJzEUMU2nSpWhHyMajkPLhwsdTusxCvY9NoroLYD1c5fSniKNpgJJnw",
  "key2": "4AJuebUQnqbMqo9Hvo9NPAZX6S9iEqcGq2ib3wRSucCb69LabC94zRfuM7GCWxEwnaZ912YV4VxMep9DFuxHHpjd",
  "key3": "3hDhDirT1sZFoV4TdpMhny7jVKTWmbdvfhR6Wut1Cqujk6xZXmq5kaPxZvKFHuqRho5QnNwhWrEAULAiJsXnYUQo",
  "key4": "37BzjpgHhLZzZBdKXiXX9ET5FM3M87e5J5Ps6FsDDkARWRbBJEZgE2X6khc4kfVb2q5gpXFYx5Thvz7Y9ZpFwYKv",
  "key5": "uZZdgLeGA9rMZDgqg1ziKP1EUrJ2aZrMqXyeyb863UaCKGrVVwBWT9wAX7HD9tfZcaotnWj76uhNdox9HYArwYD",
  "key6": "4yB4mgXPUmAbxSPnJe1P3ifCWY9iS7GYG3b3r93EemndGHQm8h1KHRaEMGoWZqF2k5SX5GMyff4S9fGfLBR1kx6g",
  "key7": "4btxEYHAUgVkugYBtM4H4BzMehpbjfdBdkFW6scQ8xBf3spt6S3zNzM578antMnVmLTaNjguydP8YpT4XQZoKsTw",
  "key8": "22t4L4N1wR48Z7Y5rfpwqjtUd6jqYK9c2q4d34LqfVSoFY39uJRKyL5ne1HgD8C43VCPij2Ceu6bTTmAKPa2qjkF",
  "key9": "49e7LnjpCLG5RVbcE9qpAbTGbdGuqkY239FBkBKnGV4ZR14eL6aem11x8N48z6oK5XvFbMsLqZP3AhYSvQYk9sbY",
  "key10": "3SFS6ic5P9DEoWQ2H4vqf7nnvn9FtB4bPYwGVbNDvvzFHL34XbM3DZxBxkaqJhDQvLVyCK7XMEEnnkW9xPufr55j",
  "key11": "5GQrfK3f1KEXHLPxfigjmz87SbZEohqY5bt5rgt8LHj2gRrAmsZdXR2JQPjwBLHjxSrPRr4vu42py7vdDnapLkyF",
  "key12": "3XVGrD7zsCwd49kVgFjFnxAvMZLQEKDP1Q1PYrQ2HYzbLijJQveGVmqGY2jvmDuCvKKrgqAfWNMQkryvpkoZ9Y1N",
  "key13": "3pfENnzmKPAdpGaXypdpiQoA7aLFuPQ1AxVYJ5g5LeQKvVkJxRNTXNPcWN2Hsm1hMqSASTX5dVTwxYB1Y2x1yEaL",
  "key14": "4MY1aQY37Z3tbz4eXxy4hmgm2gh4M7GzbVe1Cxw714QG9Bdc3HCoQK7ND3CqhkNdan6jiwznKHUPu4uNkY52zva2",
  "key15": "4R5cTy4Ejrgx95tPXtPSBhXWYKqSVjD6MLCrUcRJswfxeLtiCUhhTifnqTa4iEMrRmz1j9LPDuTGwzP5fTYqUDpL",
  "key16": "2SFR3HiRBdXZNybChKNqVSguL5GchNM1kwMfWu1rZQ4yn4H3YJpcw5Vu13MnFA2LnXaCpMBirfJjZrgQXPbMJcES",
  "key17": "5JDum3k76M7baWi6cntWcoNyXmeyAK8kFUi9goqDuCKU31K3e8arVjhQ95F5quQyBvYpTJyHvECnwMPpkwNrQpXg",
  "key18": "4AvxqFXR34VR4tRkTZqXu3rfqHj4okMzaUwgrozvh8kUtB6rqtFcvHXbtrWdBevSWeZy5T1aMmdzJitaqbqjpttb",
  "key19": "5BLXUk9D65kvEz3NtcfTTJcCkxhvp7QeQcLfwMg8MUrXYgHxttNQi58zn7KngV8nEpcohfHSXAhyArohnVwK81e",
  "key20": "2xurpFeAQao24EANbQbfnGoQiDqDzNfWU3s5Dd47Y4BbWtQ2kcBxB1qrQx2Q8qu71mQ8v2RdRUWtaqmQnDqd9axX",
  "key21": "4goCfGmogmPJKGmdCrdngW1Nu9nRHMNqhjE6P4sh1xw8L3QyytDe2iVdCbbrryhtb2aDjX6CJKM9qh98pVGY65e2",
  "key22": "nXfxu8Piddy5zMkxU3nXGvwMUbQWRnWWKpRcimQMVES9v5YKSbQFJDWEt44RL1CVS9KnRRoKFoNUU2LazX8wpkx",
  "key23": "5Q5g2hQ4maoo9kNwPqBo4sf8qpkdGRhGpif5vCPB6SPsFtHy5ZSMPi27HDaK6TxcLbycTdCwJSJT5zYY2NnLu8XQ",
  "key24": "4nJENPDtosSH9HJ9kMnN8f37jAmz7EYx6E1JKkpW6wPjb1s2vEiG6hz4aDBwriWfPq8YujHBsSBNg2wLyeDNgPxx",
  "key25": "2mdw3UmW5TZvcokjB5owYgjctTpfz56QW76TWYuxhdWfcQDQYJHqaPfgyXgcCQK7vzSAT5v71fLT8F38TemY4GeQ",
  "key26": "4BbU68PPrUQZLJ8gSkfR7CbEZK3HifWyZaRRspbmyqtKoLpVnyD8JyFJDeHBRLJ1CtDp3GoF97Qj6cawcTFc1ZVR",
  "key27": "37D9zeeBVmKvUqhHRSf792uJUTARCCQk8wh54g9Dr7Gnn4M93JBRKC4EvqbGga7z9Men523hCrA9xXBWMnfGU3Hu",
  "key28": "6mZY3YUXUbjYH9Ja1DisT5wwPecpbWbSV3EkYQT4vcNDwSuxwG6bgQRYwm7Gm4gruhCcheSTryMmGLrPpuXZS9W",
  "key29": "2cktpPgKVZnpYki79FYyLqJpUwA8fpErTQJrAhE8HuRFumpBbmiHV3YMFJte744FjTzUTaBvMuF3rZUhoKBQxp6m",
  "key30": "ZnP5YYd5e5YBpWtqdSQ5GeRd2f9qAWB1aAQjCDi94Ebq3n1qH7Ai2oSp1aGyndXap5Rjpe3XXRaM9EuqSLnbgAn",
  "key31": "Y9X3iLUh3a6nYwUGsEKy2ZUiPabfEx2BL57WXZvHAyDc4YAVk87NTwaaVVmKDqc7W4e22k6uZRt6NHVpENWqRbg",
  "key32": "SUi25NFAf43xEBZocBDmU4yu4Ry5bmJS6orEfovfRBJC1wFGLaux45sYZfLhmDwvUPfEeen3r7RAApirTTifFi4",
  "key33": "4s5wBZKM5oQFXzr8GCsExNwegp4d6C89n3xncTr27jhowRduxzmei3C8LoCueQibm9CDypk5HnrrfbquyDN7mA3J",
  "key34": "4sTC2Cka16qbFRSvADyyrsvRmjdKxtB7E3kAKJByxa9JVFryUdPmKkKCP4psJsPfNxq3ceCdpQ1kk5Y53P94ZC5P",
  "key35": "54FcCoRbSQwwxeLWFWncUoUFmsa7qciSo5dqQnNYasRbe7QwXB7z3KmJKExkv7TKbFq8nYkw3YrgNJ4iG3FGWydV",
  "key36": "2GniuKHnLJcjRuAxJnNZ5zMpUzSKbxCeT9SdU2v9AZQ5vWmPdu17VEepWDuNzPLmysmPpmJoB9bmKawv6LkiiXTj",
  "key37": "4JiDPyCD9FgY8MyJ4nWtMEt3YJhUNzhcTcJgVGFcGhrSRQZARS3G3jPXtqT6TLk1g7J6UKtsrCEKxg4pVEmJrGgS",
  "key38": "3kVh3JQDUuQuu6CqG6VzWZqsNC1JyJUP8xn6MqNfcjgrBgUS9QqbDye2iCTNnUK2U3bJpUyDvy7iSsSMfiHzr9rK",
  "key39": "V7PdXoAoeHYJpuA6xUNHin73hdBJA2z9pD4KMSLC5xaanWvDyYsawRkbFLGodPnJZWsmEw5pR5Fir9fVCPjrZLb",
  "key40": "3QKPw5vZVijCf8rS6KVapTnbwWuL4fyVEgYo4kBznAU2ADyH2sRLvdJSuFzLCtqqpdYPBEFwFgHVAyr2V6k3ooHC"
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
