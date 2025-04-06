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
    "3NrR76bA3iyBChyFyXp5rMxQkPkwXH1NVrTao8NzyndzebCFkQVKAZTtajeXHk89dsJ9ZJbVHvrzrKLLBTbo3hZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24rrGUsey8xRRx8QYbZiF9t9psHLfjLgRSQofCc4VuwJQ95YN5rWGSj7oWyHJwXsQCdB73QuoGRHuUh6zABp3s5H",
  "key1": "hWPwbmwjbutmPPv7rbzyoxpSSJxZDbCrrD5wK6b87zFqhfqA1tHMqhbixuHJszUGHbG15vaofi83CVUpET3P4by",
  "key2": "3kwbCZjy5adFmdX8Jbw9QoGAoxawJmmJw9b6GndPrDPv87fiT4eDVfaAws1sfNrLmCVuHwdyLphx7ZRfJyYwb5Hb",
  "key3": "3aFu6RyKYqfpZ9GWXZC9C6uk1i8Cwii62JLGkxwTgq9e54kQyP6t5STVmBZn3NG71FnAzN51xcTTerNvDeEVffLS",
  "key4": "2ECsGGk5kSYPztMREz2kqfvAXpL1idKYVyPDq57D2iDHi5kqTJm9WW1s5V6RVx4Jr8BS2scYFALUW1Lbx8HetWC3",
  "key5": "4othuMnWvyuiAPd4AQ3weRStxAaEozhNFViZ4zvkjqbGTjYGgtYo1JotWPZK8i7kE2DpRKRVMQDFNFXEbKXW5Zub",
  "key6": "29CtaNgQx498DjTP99JqxDH1VYRoYze76PC9WR9DGqaZ6GnvfvCqQ4qHfYQjRGSZYy7z1LKv13yrE1bsbD3GzefJ",
  "key7": "34Phba1D37nPdBGqjtJT9JzuHsdrqrav7HpX7KtygqboGy3ZL5jkirryPyTbXpAbgwufJUwBq1MdeYY5edLqzDLt",
  "key8": "5WRaZaA56EgCsficFZKTmqjxgvEWxNUtBnX8uvSw7xLK1RZQawsk56PAt62w6nWRwvwRXrkqpYK9q8Es6zKy1vXm",
  "key9": "5EqsqKuDncEDY2ZHwk8cL5pMaTx3HafwGFK18o7b36ZL75xy3PEVkF7PNoRiACmAA7epT2T6K98kTZDkYK84CmNv",
  "key10": "2Y98NJ29bo16K4XtyuTcK2h2Ci6EjtpL8gvTCem191beR4Yv4EcLB63H8Goc6hAS3nguUj5JfN8mtpT5MYHMhmGq",
  "key11": "465PFo64JaRF9kbYd9oyYFA6wgeh65RFCBtG2CZp5cg1sE4ZJC1waUKJdnqLNEV8aVmrYeFvAGhkvUMFbKcoPVBF",
  "key12": "3LL2LpxwKEctacJpojzdY6Q1hQDYVVM9kugYGMusXtRif7Mb46expwVPHUT9iCQGGzLcWkiVdBguEK1m7jukGVa9",
  "key13": "5HuJwpEQ327Jd8mLYJdUtWTSJroCRZygCC1SNF5nE3BNgWdD2KmcPCY76M9r6J3bj7umwfECAqFFABdSjGYQrM6k",
  "key14": "4db6AekRLgwHcj8YJMhJKeAdAETNJVVviLNT8etkfcqcAsuDhSzu2XyiaYwrAvjVaX6StTMwLgfunx7XPv8fKJ8b",
  "key15": "3PdJiTbocN3WRF2bs9bdk5J3vhb54cS3BbjXehjZnB86smc2zDng4ZjFSweJZHkTvVQ7pQ8zoujT6X573kwfC9pw",
  "key16": "5sg8VVkmURRmNtXGaWJEJd258yYP4Yc3L5Nz5cQnKBX194vy1of8MDN7LQWpMVRVMNTMU6PpmpEZeE9iRVwjyjHH",
  "key17": "4JTQvrLjuqGo9XZRNvFM5m2CserYedzQhWbxuCWWUu5vjQ5SeZwa8mKj15LR2Euukh5bP9iQpds13TRkZF73myeW",
  "key18": "5b1bvW5EFvRj8fyJaSvmy8EzLbkeVdjmuuoBPNWx5ibaZrr7hk54K6ppj8jEhRLMmFEwMawBDZKHSuAhjfzrQfEL",
  "key19": "a6q8EKtHSyJTAXh5GxdJQuNHGNz6ybZbEkqQzuuhtta3pWtKoA87j56bUr6tU23VKfod9V835JorDyScTB65FeY",
  "key20": "2vuHc2bDzbsa8bu23LA1XdAVZdAvrinFvpuHQrjLh35knFAQhxEnCfXT7MeB7SwMRStyH28WP13jX8cR3rDJC7T2",
  "key21": "4aYFBfM9NDTZiK1YEotqvWWgBNzYzMUHEfn4cd6No3MxNnNyA6szVFkVSeBHQSvbYt9KUNgnUzQNqdaDtkzc6ZBh",
  "key22": "2iYhXr5JiE1ChJyjwFTscH9p5irsJrRYVmcwzpjcVTYmZaRUyxfYQ8DLACUciCYnqyGUZcLC29oZtDeFWPoYzZPU",
  "key23": "5GgFXX4n6CCfn2eoLRehbN2s6jRCQCasqt8j3BA9GU9eVHxuoV4x2o69a3bknUhnaFe1unXEgprvT7wTcxfwyStt",
  "key24": "3fMbAzZAqL7kuHHreFGtesiLp9JrP21WtcaC3XPxAiU1VVUHoE3Z9SPtg4F5PiVkWcsMET9uJYPPKCk5hpMTg3So",
  "key25": "HAWs24nbP7RRhdkG3XyB1V8P5rgRewi8VwdFecgcLFj33Niw5RiMfiS3NA1Sq4msUYqEakTdF4aZNNBS3RbNL7g",
  "key26": "26eVcaDxmcnykytpD7anh74U72q5rToGDgXdJ9wkvrEDGRFtDMC4yyekRsb94N6Ug2yvpmc2XLxXKnq6GXMUnUBH",
  "key27": "wKSTnAHHADE8JxWkJf6ZczjgXBzKqhynbKPnatpHL1mUNyxcrpuqmu7FR92WAKnSLApdqpoLDeHkV8eWLkH7ufy",
  "key28": "HtqYtnwoYkHT1JXvV13oWYXNGVX7DH5sfxDVdeYTaUArYXqA7jR32EQTLrnebPfUE79JaQNENqzLDnqXeEiFL95",
  "key29": "5k8Z5UL7ACfjPmsyyYaE53fUACgag6zDQWmQokVoSWi6tTvVAgDAFmB2UJy4tW1DwPnZvFz9FCTca3KPvmvftSga",
  "key30": "ZxQbfeZ6NN98RT9eWAgp44puj3hwiY5hvQ729XRfEwGWLqkuUNVQ8aUsEjzFfpbKCa2hwkSuT2Md158KC5zyuYS",
  "key31": "UfBzK3SJnGRnPqNbaZLmb9v92PTUBqNbpzZMigYAgnMJeWrSL5aXZ9j6kENgxSuHAwPDYQwKoFQaExvJWNtyYe5",
  "key32": "8aywnTAupVqbx2x9hp4eCw7PKVZD6uKGtcGT2vrTyop5Q3ZummurBz6DSk7pNRmCh1x2bE7osJiuBSKnqVacdjg",
  "key33": "3VVnvyrJJPWUqnukFi255nq5ws8fBg3QQsp1bcN5LQ6x3xWjwEVq665kzUnzoPZbZuCVHGg1oH1FWYiKSvsxCoGf",
  "key34": "rVYUkafKoq2RWMC7jm7GWmaBcQikqzeq3YGsgzDT3tL8wDMHJTwiS521GygXCcgPb7p1rEyNa6b6vyKvYUbByEu",
  "key35": "587hSvFQfUchtcN9iQvyvByxxJo9Q7Tbed7PtHnjNfGE22EYW46xkjJpRYnhN1A7pG5tVwbJsRxZJoRLjyAZBsQv",
  "key36": "4wUmHz71VLDaCA421kGjSsbQYW5BQpxz2G8yRyogEFsMi32s81GMF4Tokd7RYtDyg6ahY4fsrG3R3RR3UrGWLYGP",
  "key37": "4uKcaTenwX9p2aDiqyZuj7WwY7uWvCdCZGDqoSCWdsCBbz2rZjuwSeShhtJfKiiCjjH6pHoDQmGtBLPH6YWU1Wm2"
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
