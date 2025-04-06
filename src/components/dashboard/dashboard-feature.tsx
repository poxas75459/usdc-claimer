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
    "3v1JqQNA5t6E45NSBazrWpbCdRJGZMCSjP5UAQDJL4PoV6reLgGHER7zxf59PUmQETE1Ubb6sJRVyyxSz1WRAShd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ga6iT1w8RDR9VKPqe57yfRrPj67XBztqmytyEBUTuyv9jSnpJ5RgDLhHpMkCrBGYYogeQYJyzH4ioNsuLqDZ2oY",
  "key1": "2KQJJMT3RctjbBf4LTwAa8V6YF9m3kWHUKAEhCwTGp5BZk93M4PDjmzZydAsfB88itNMB4fLykk5BFAd6DX7YEKR",
  "key2": "3SQg5XzD8CYtNwUYRgnA7j4JwHz1QN9xz8i3Ga7qNASPz8bzcpx93P7UCwU93jTDKrShkFMrQY958fBjokitGpLv",
  "key3": "j3hW8ssJkkjvrPDeiduXjYvSXx6FCpGdjyuFTe7a1NehA43owmHMAqkKbtWT8m7d9FFvwYLXf7x7EKPeUzCNpDB",
  "key4": "2nXFXE2aEhyGdqqFn5i59r76frd8SLnehKVdyjYi8TGU5R6NUavPYtx87Y7NfitLcKcAQhxFWMR7tznmd6toBP8P",
  "key5": "5bK71MfYESAFdg7Z2ZWcDHUTuWhdrYxxRpxGRfPAkLjCLQB6xHGePq2npfcxkEXdHoTMj4ZSmc4TdxJ8US1w2JdG",
  "key6": "2cRz1KcAGtjtGsEZvmxr4NDuPhJs6NLErPs8azfSdVafeMg59tv2bVJvFkzoP2RWaZLaDWJxJduNKqNc4L8rAdtt",
  "key7": "5d4qQzF7S4YZemu47tuJ7FeSeuSvZMTeoczZ1a5w66MYNfVo32hjXuq6JDVf9jwPGUJicRgSGNKuXJqLx2pexjjD",
  "key8": "2ZwFgRzZVXK9WaArW1JuwzsNh5DazjKA8Khc6E4LkFebsj36Zq96y1414CqXCvstYjnpAjt6uLfk1hyEK2Phvys2",
  "key9": "2oACcxmu8fBo2C2qcHDdLsbgJt5NTpeUPqB7QV9Q5FnZxjZYENrA9187AJEjMen7cu1adGxsK37qUV4mkEeftV2",
  "key10": "5akMD6iqxiJHFA6hmRYYCuLRwVXSWgPDHr3Uf1tiesAaxXuVpdis5cWBA6UGzfpmD7tTGLSjmztzEaQbLZomLGDN",
  "key11": "4xZ9VKJbh6gtZ5661wCNnYmMfjiVTN54zo2pQGAfWJbNS9h9SbR2y5StokcWfEzhHgScUWZRoWorMniBZj5bUXVK",
  "key12": "6337pSxH4v3SbmmZfmepaiTrqRngqYYLmzxGvuxrBVvfS4caf5rFfYwRnoMZXBejKSZUqQ8NrCgrjcN2mQgoCJqz",
  "key13": "2bVbsYXMnEXeRqewsupNqYusXTrqr54bwojcMQq3QDWhjV4zCbXmJXvAnchtLzY78TDkxyCG1FMtUZv5nyvSWWg3",
  "key14": "3xQCsmAwSxjmkZm25zzmb2NdBQNRJAZzSRYFaFs42H4w1XLHwCHY96NUwRMNjgHpCLt6pHYUk3dGpW2AG7233bQE",
  "key15": "3iraaFEkqi3ibbZVe5MxMgxFgnep6iWGH5ySRPwnVtDHWjQt6dm5hX9oddcEE4HQSJdyXsMxNPcc4UBU7o2HowKr",
  "key16": "35tU4MR86gW3EjQb7tgnvyA3egbfzKdKSrsqb8Z6Bjp5wQwmuaQS7gvRnXE2VZroTUPfik44cyuBRbAT8RrMoSbE",
  "key17": "4Lz7WYdPsp5pJwkNxL1ZhX9S7TfwW58Vjp7icthVxK8TweFd6k4YgvqeQtYDNYRgZ9NL2cKFdk26vVzp8vFdQiCN",
  "key18": "279PES6dL3go7nLBySGxaae2DuqLg6bgVQ4vDwidh4i1sHAEgsckWy7ejYp1coGpWJtweXTUPzwPbvCXjBYm6u3G",
  "key19": "2t8BoZr7fHHmqmQPiWY2i88nGuoNFxdz5Fkqx1P4PMsC1JRxsShsDDMw8qhF4tTXNY1Fbn1MBQ3YUk9ZHmUDL4xT",
  "key20": "4PmjRTYDXF52Dkns8kqJD9icr3cszHbyZNZwmuFfh1tiJ3Bv92NMk3AaMmPvReNr1EaYhmFUfkK8ZJN3RaiMUb1U",
  "key21": "2695cLy5cinQJADu81LPeiLZQ935Y6YagQiXbHy7GPMF6K7a75KX1juYczHTukcTX1vcjBG5Xxav18XZvZe4P47p",
  "key22": "25qut2EG6D9wFfGrsSJGbJoDqdySxhiTzczcp8KvofFJJsL4tcsX2UXkr8a6qiWuYYfY4HaRGBdFnFY3GdDBcYed",
  "key23": "dxE2hxvpbuUG4c8UyDEyts4yBvnR3pLv145s4pJUbcAADaSwdBaNsCCVmBvN8DMc7FbJ48DZDVnB41cCscpJDQt",
  "key24": "4GMiD3A48nWCbqn2oHx6UaHwumjnshbJDUWWP6oRfCzx9L1bQnipmYZsBSRQXAfNKUbPjSTwwPwUAxSrgibfTaz7",
  "key25": "3W6G1U3BN5Raxh252zpU6u36NvwjCrYwo9G7XbiJ372AUDCrSo4qo7pLPXJRyYVHjGV4qK8v27JLoJmg7cNpUFxG",
  "key26": "3VVK8e4h3USWAY6UUoLbgDKG5vSMZb9rdxtukHGSreXweH3n1yGhonnZNfTi6qKwvSCT3gpZSn52JrwY9jAXVFFd",
  "key27": "3YjMXrKwduaeFQpoQ1VZSNmKiKKsgh15jiTm11biBZPzhkw6EYTEyJShWQ5GWN1KM1jTEiMN9m7fTBzVRwyVQvpv",
  "key28": "2tgMefMcyHBXYMHfkPdgVwfocxXcBiCiu9VGrdDexefqpyDDUoFnXUWbV9Tc8BgsmUE5iHixeivFsD78h7t1LCYd",
  "key29": "AoE1p9NMXvK5XyEy8voCohiJLX9iGqeeAUZAUDQhb6FHKgN85HoYvFxAPY4zCxc4Qp9wMJ7thFj4ZiFD4PKKq7x",
  "key30": "2xAMRq3tq2LDF99NpKPDCUikLnoNLoA5Ex3j13PNurg54LHVV9VTJEdD9o1u53JTaX8tLk7ueLSUiqLBrEbriAmi",
  "key31": "57qheCfdzMmKXR8vsgCcDZqvT9jKsmZHR1jua8zzb6WNGSUvCvTsTM3Ytv4QcWSG6N7MER1YopneCMYD5ezw9Tkq"
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
