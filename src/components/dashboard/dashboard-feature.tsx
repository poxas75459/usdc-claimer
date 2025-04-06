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
    "2zVWtUEHpczC5txuce1EfT4sy5SpXSWF25MbJSRn3vfC6QmzgkKnzpTiNrg9RnrNJ3scuY6gxQXx4oeJuz9WJZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MmgYQ2W7GE1m1ZQAewxRigireXspoDtUGA1azZaCLdsEqJtkMtfFMngbx2AuVvGPSCR8naJU9uQmBxKbsSz5M78",
  "key1": "5ZGscxbT8nMTmE2mCW8HHagEZcdDtM32eJEFfX1kHLBzcerE5MTHNqzMUpBcagoZy2EfU8QaHE7NVgJvXd6Fze3",
  "key2": "5LhaHVLovfrebVpVr5J3rxUMEsGiqjfAbNgkDWGXpbWKutu89wVdokrHvQVf6miAv1Xq1zG5RqVMHwJZG8LDW3kv",
  "key3": "4sHCLbMDxLmqenUy6QrCgxUsSxKzcBn1YZshiFFZJUC7Efe2C2q1KmzjKFQAkwAtHhkDbycK8kVAxAjXF5KamxpX",
  "key4": "4XZn8wE5piEJuQA2m83KMVVvHgquKtUkWvTMx5QsLYM4zoNXDk9ZDWYwPJqB2qZMshdF9ch5r8HB3ppZnqmQM1PA",
  "key5": "4ndKoQbja1x4ywbimZV8gxFtHtU8GXrYaUiF7K1RSXywrxRPvje47Gyc5ZgQ2sq2SweximSVFu2EK6GDCu8eMnra",
  "key6": "4nirC4mRKZ2em6CT7jkFcwkEbBKjvdF95KgTaeL2UjNqzwCugxwqLvPDGkcnTf2iGkWdWPk7zf2Hn6HJ7x9qZZZP",
  "key7": "2CVCNjuppNjFcJewr7N5WsuU7ZAnUWQCxVgLA8ETK4w3kSqVcCQx2yo36rwTCxbWEQqEqaLEquKYZAz8Z5yAHG2s",
  "key8": "AfmiffMLpubAuLcFhGHRRiZ8XqVCHHw6Me7yq1fXPBjKmyh7r8QSPM62BDtHmvAd8Yop3nvTnSrjrMzKWcQmBfT",
  "key9": "2UtwhToTWf4TQTcUtPfxjdLPRGEh6fxugZhM5tECKLU66mTom4264puXmUj882EbPPtdFp8mgTZSpK6BWFcjBZBY",
  "key10": "S784ou5KujFjuibr3ZkW47DWM4JEqCC3WoNGTk8Nvef48Mnhf3ZK9XDWLRWs3RASCVEsgVrfS7weUxbEggKcFd3",
  "key11": "2GL2Q3DoTDmB3Dcg5Rv4keABCVc2gpJEB9a4NrEW2eMipixqdxzzZ14BA1F76jBuGqVintZivYYWZLBRJptyLGnN",
  "key12": "4wLU8ZNEqJ5yqrgD5qKo13oLvJQntm86w7N3raNginp2WSYbHGHmw4i1wKxhw6A9jmciMuXxY21nuFRkkBVfs8M6",
  "key13": "2F6wJvLtyj6VsquM4kKkSoks9WGhrH3z1ETCS7zL1nSTfCFqVSwbUVk6zx1g53Lmt6J2JYagPn3oEoRkMa6eamYf",
  "key14": "5UozizDmuUzSqiLCFNphKswxVs1f5LrQexrfomrKUrS39FcUmQ5zHxVfTEvX1u8jjDWoRQxhcgxbpnNRUrg113fn",
  "key15": "hjJUaQU5imE1Fo1XbZSEgSwvDNcCYaBhuti5v6Ho2a5RXrdPwaudzGS5ozWAZbazVsbJqXak4tcHn4Z3p5MbWYw",
  "key16": "5faBuQt7jkMKdQDaUC2oVyggJ8JJAqBxBRWFDs8Rdkp7STJTjgCb3mXKCV2f7BViHeazDNbtUfgW9NNoVMoVDgq5",
  "key17": "5U138VVPmjZrs9fM2sdyo3SbNEetwVXGtrPJQHmZx6Tj2vhDwjEijdzWMyA5Jz8QM3QhD595g6PN7dsmpwxKcA6p",
  "key18": "5LJWZLeSXPA5rWd5pUfCLQHTSPsE52pZBUtETeWsvEyCWc3htVjrSgzJZAxj5kbahD18bwJPxoQug69yj5ZaGrx3",
  "key19": "4DRXWfcUEybFzLoER4i97c7k1vfmyTbHsuNBLaJLsuxGScWzQLBnS7QpE6ihpgtrXQHrfw91tLAAitjrL4KM1ndP",
  "key20": "3EBc2izsAuqcSC929LMPiXqzEfzfhHWqHZVqMN9Py7DEi6PszT5Rz2GNZvjF8UFeQ8KUd59LyBZk2RAdjVm5BUxE",
  "key21": "2fwpzZTaQRkP7kvyxMf47bLb37Mgx53yhgEpxmQp5BpJH8degKWiTXGMGUAyBNnCKqP43LxWyiWWja6fS79L7P89",
  "key22": "44supW4jgw8a46SpRpa6yaPHzrkEGJpb74gdGeAYbaamTANNbWWZskwYzvYzbAvtw5u6vfaaeXi84S2pcUzTTCmT",
  "key23": "5fKfRXB7DdnWstyHhTgPyXKptMUoMit4D9g4mqPsrJTX5nzcvFPFuyviELawrsMJrq6uvXTE5XWNxa76j5eMTpR6",
  "key24": "38cSyBTwwJNaNCz5yk2VzwgGjuGZwWLSHfdqeCCcxBQCPwrGR3mUaMvwA56yQ43xsg81xCXbNNfHuchkbQBbYQbv",
  "key25": "5GCw1p1EouRx5kJKq6wAiSyoQPga9a4KzRqBrZ9WMjqwY5rkpqtZMWB8wrERviGjbqTq54oLakWSnTwFmDivvyn5",
  "key26": "5yZykNpADj3epyiypodxzkt5iMbnu5AsbP5M4bRABMACtNiRCfSyS4hsdsAG9uvvnmpX5HoBHGuBjgJiHVtVufEW",
  "key27": "624hKiXZ3qyNUJ7i9WEU6tTqeDadjwW1Ps5zSQJS97Aiyo4yKN7zxGYEw46MNf72TPHFDfYsB9eNAQ9zi8aZq3RZ",
  "key28": "51ebhSokV7dRLDNkoM1yvUZYPzXfzfWTgh4DfofhJh92b9Dg7eaCM15jU9F9tu3dk15dpoVJti5XJhdJuESZstBm",
  "key29": "4xhqU3rCMKwRDbbajdPuiYt2bZKDHhLjLd7FPLWz4J34FSVqyrepQ3T9DeVdWTULyiBmXFR36Y1c1U7zR2nkbb5F",
  "key30": "3pUGukmsvE2ZRbmSmQgkv2mumUGBCK1oAwbqoGxe69mPbzKzziDfYi47ZzXvtYLSRNRQnzBJmZp7uMdZjEussSui",
  "key31": "45E6cwN7Li831NGjQJGKCcDwE5QXnQiVH597jQrqvZvbGvSrMApYmFv3VSdDRSeNw3ZGE51X6mUuZ8ghkTSRh7TL"
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
