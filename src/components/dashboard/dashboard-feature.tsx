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
    "3YzRjA14byT6a9q8gSoCPWMFaFsofxArr3teymphPkiCiUBeJm5DG8buyUw4HhGECEMAS1buZHM6r7iZ8bmu1SgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kF9AhhjCUEtPwrXfVN6eoud8LNB54Z273THcy6DpNmHQAf15oiga8vG5c9qtVkwCUWSKPsJb3hSebPLNiQnSB9K",
  "key1": "4XfTjLFJuPuERo8rQ8PtTSvwZpXJYipgktys93QDv2Y5wFcSw6AEtRag8KmtKPuyyuc4PQxaa8YniQKEzCcVf7pk",
  "key2": "2ouNgEvf9jGgvzqK7zKxNjByvJ1qqgjoKNRzwuRAyiKpKcZRHHrbDfDRMc2RdyoUKu9uZTss78oSixxC4dZoahYF",
  "key3": "MCbu7zp2MQVFEpMJ2mMpfRuSYUAu4hvQ19mMiEWQUPLD98siYo7UJwLHaEeaksZq92WSkM9n33EdkdetFy2yiZU",
  "key4": "51cG99ewZTnbn4wYM4kcW4Z2SQ7QgHJhZgQcDpb79prBKrq47DUkkSnmPfszD2jBU9qGqn7hqiCnbK14LLrH1uJC",
  "key5": "38YLVmWDXmWMQGaUA7Hco25nkXdNMMy6BM3pW4ePqk9g5snPZVVs5sjRN5dxGN28XivokmVfCJHNP9TfE18NFPzc",
  "key6": "uismm6dBxYpKE9oYzxnSNPWLk8UwV3cuu76srGbVTgQhrPT3jX2Eeab6ZGJuKK1zzy6Wiq6Dw5uWmLJ2QnBonDU",
  "key7": "j3Wuv7FTqqkC5DQyHrVRjJMZsMwouAtEdFRF4AMrzWha96SWi86GDFrhK5dHFwhbHVbWMqAojtZfCw8PGumFMg6",
  "key8": "3fova3mvn4Yqaahzbq7wmMiLxzZTdAigywbKYYN8hbFko37mkXvjwQ4e2fuXHyCJhzwkFsVcFdR41wnhXQVN4KzM",
  "key9": "5v8HUhyz1eWZw15i2dmpn4fL3iWP7FpUkwTAyseBBE2FuVsFD6EXhYujM6PgnGuzimDayF6N1h7NDaqEQ7MEFJm6",
  "key10": "4jAGJ8NPWzM8SXVXVkr1W3xuqHyjBW5jqXEHdKFMbvymEf69XChVfJdSL7tg2W8P4HvjwHDyme4UDZqq4iz5qT8f",
  "key11": "t8uFEKam2f9nwS9NShWeZqY5J5YqGSpu4CWUwKPDk8m3MENyPFDELjZNpUKKi8MLbdg3D3haU9eNZikAUebrxz7",
  "key12": "5pFADNVZiKvf54MquUeE5ggxcXUC95a7Z26KN4QhXcnhgNmCVpk55hmYC8vLJGNT9Wstm2EWQM1G7YBB6oLUvJGx",
  "key13": "5vfa9tKcFnAgkqVHaxL4VZW81sVqVyXXYhgVXwvEMrfU1Kio1k2r3qoPokjPDy1kdef4m5SvSLYUYontb4P4ypGu",
  "key14": "5wh2DAWa8SXrrCTyLb94LFcgnYFPMqs2krLJ8TpjhjkHWrESF9qcfdTf2TxviQYjL8GbT6APEsHNg8wwaR8YFR48",
  "key15": "2X9eVhpJdKXqnQJKhB9DtDaFgA5t2y2F6WybNVeiuEyajEjYftn6rcX967wA2PNJu18WT7qepL12hZECFJkNR6LX",
  "key16": "3NvSqL96DE7XQUHEFk9em6VpefNWq8TVS64AcCqcdU2Joi6tyqxiF3SvqTXhVXtugDbWoprA6os7d7dFuXrgPk8u",
  "key17": "4SjGszkJeFh7crWAXS6GWZeqeDFajW2xrmjBEedmW2d1syit8H2far6rvLq3GJXPmxw6QKZ2oXed5XF8Q1PFA6in",
  "key18": "2ojxjRakQeVnEZChnjBZQhxNr926XJzL1dp9iUMmukrusRp6iYJ5G2JLpxfmtnwMQenr7QTNhsjMBUeyERRbPSsm",
  "key19": "2X9by7z96efTnwemwGJnu4HMUCZWmRHFs1mWYPJqDogor5VdiVD1CiAu9xrWte9Wq7877ZXBsY6LP5S15gwQBK7J",
  "key20": "3qrtRTUP2qKTPWBTKtEHSpHUzD9YLtpjVAuDygPeFfvP6Xo7qd2qTUAb8Zcb2DHAU4MFKDrvjXFBnRYr11ScAqmK",
  "key21": "4oPNarVx5pXMXEt39jK2WYvEeAx12F1XKfc6WZeCVwtSzkYTwvbC6mr9Efz7tsNkanb2twvtqyBzgCa37cbsSTnd",
  "key22": "2UdrvuapfgvasJHaagRM3CGpZmhF2G2znEmYuTqvmGjmQZpxSFE66iQtxC4MfXVxwvd7Teh2ckvAxc1xiAqZuUH6",
  "key23": "3kA5XwiXQoULXS5dRgex4ZNpi78XvwJnTgGSYYmfQJ4qMtdtjz2na8H4239MvYKxczWYaPeyqRja8d5VjM4bvZhz",
  "key24": "27F7yNzwobTxLXsuqL13imhn7rBfRmTJhC9r2GWzKnuK2Y1VzKiwJgUFbny64CvSsY1C279ponkpYqzFBYzgBrYw",
  "key25": "4ymcJmz5KtsECxKsrgD4Sm7XzhiDuZxCQZhMeSGvKCEd8pFkZGYjA2GJz5w4GbJDqCozD2EA99rz9i2RVHhVBd3p",
  "key26": "4yNDhWxuu5Ck5XatTTWS66UMgW2KL1vVnZ9GUMrkdSoPzNEzC3oXjyNbvaDbG1UbEXFSBB2VZRg68WexesRiwdWH",
  "key27": "4zjNjB8n82aKwu61NirwGbKVXuM6juvQ2Qk6RfAmuaWvF5hHRKe8SVGBJ4zoMGyJS4iuAXLZz4QegM5bDQSf3Yjc",
  "key28": "3iNtY37WGaDYB9S38X9X5dmqLQ1HXbNFenZM1bAagbM998PVBEQpqKXVTKMLcowo65RqJPvyiPUAdGRSVpNmrgYC",
  "key29": "hgThv3PreN4qsJ9REXGdDuy9kDZaETiRWmgihgoqsWYAUTMcwnmRHUbeBX1aNVeZqFTEq3LXobDUWzXs8SLtG8V",
  "key30": "4SuBS1EcXaTPVEAGG8yd8QKeP7auuqUx69MvaWAjDz71cPvYcc7es8mKpRatoN4rW7USDrzTLmXjaKkvUycS1ZKV",
  "key31": "26RtvWWpUxGUheKWMnRcxFWdqLjD4462S7qwCqaTmLhHwNwQPoASvYukB2sZFGkjfgqfnt4kJQPMdjcZ4S6egUNT",
  "key32": "5TDWWmf1tDKJLcZ1WAmk8UVzd8jHZwvn7ervn44gRejiDf892tM8QhGRrUsqzjcdswbrD2YnC6ogPsNfKnqugm9s",
  "key33": "4xwaoRbDMxesyPGuUUb3hUzG7kHDNfZw5qrrUVsJxLvup1oqoiUbx7Z4HU9pXdqb2zAgWaSdhqDbMoTXGXTae5Zz",
  "key34": "3N8HWTCaK49bjcUrCnfbuAo2bJKH7fiCwRjJeLdk738k2LVQjM4WvGqr9JAVv34hcvsDi4e9AK5oaPyttCVSEijt",
  "key35": "39Vicy1d88NbV5DHHq5iVc8cJCtrCshbyY9UCWMpAqiro7boo9ULT14oKuSMF1zrz3z1T4L4P3xvn2xFxw7GmUkn",
  "key36": "5nPtQ5RZrpKHu3nEzp2v8MbhszKbhtLQk61i7mUPxTX1M9gTGqib9mNYA2eYfETkEHsZX6suyejGYeowqnJYxGa5",
  "key37": "5hy2o3pMCqZXxzoGPCtC7VmtYzQMm7GBTU5h8qX9Po16NWUEVY9KVnc3So7YRzGVd4HH3s2FiMankQsYXzB4Jz2J"
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
