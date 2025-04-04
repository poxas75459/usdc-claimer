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
    "31qEYh42CxbZNQQCnerUnYTUbnf496wFYNxx1L8264CgNcKDT7gHh5X3qzHjrX9Ze4D1tnxzCgZun9or5rPY6wMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PNCi2kUaCiARyoTNuwEjrHekTyDxNW1s8xPVVtp9YwbFasdsy97rn2T2igKEfhybChzjvZqqqt3uGxsBC5cHw6m",
  "key1": "2RWWzayp6Ft6eTB96HhBgRmF6rifbVi23b4VivhS7AARsjRXPvA2ng7fDAAPGBhNB6PnQKzMa4LmtXwju6a7BP7E",
  "key2": "5nzR3ZU4QeTzTfZPU5G9YWRmGSGmjFiEya1C8vBhnhMpowMgKJ7VrxEBLftwz7c8Na543BWoDqAJPa3akvyxq4nr",
  "key3": "4kC4pEP6ubB7BgFYtv8RfbW9YkYXt9Di3rC3GE28LMkkZZYzgajsoCR4i3FeaRWfgc4zsNfaJ7JcovAgvC1qiJe6",
  "key4": "5ewzFsSEUwhVXY5SyUx2YeV3oADaWyYK9dF6gmMJQnGWUstz94qZKvzDgyeuhT1nMRdXxcZCNj5JuE6veQwRrhUe",
  "key5": "h67hiNjAuX3gELbsKnGN2AEBTTTiFBDVPxEvduJ65WVcGDyXbF2CXiL6titq3EedgDsup48ECDQus7J9P9reWh3",
  "key6": "2NpmNYBWFsxc3BJw3ZWfvzCA5c65ZcjA9e1bqRyzcMCt6UFYwURaFUeyE9prJQfpkFkF3G3K7RSs9z4gnnfFrLK4",
  "key7": "27PitouAH1EMWmaJwxEzDecYYNVFZk4ugUmNyQ2PRC1boGTLVmCRtyNmSiCweJtvqw5agYsApEVzgFVx7faDVvik",
  "key8": "hdpYVY2HP2d6krPWg74HkibD1c9mqWY8RMFez9H5ptzaR7CRTC5vVArVt8C4qfJA74yBxchtUmfMYXwZd4KqHbc",
  "key9": "4g7jfcFQsqPWqWtHGAovXDLXrPb3RhHFjwAmR2WwLaHqc48DkGf3vrVsfRP18zxrTN9sXxAGs6aVjsRdL2zBmUyx",
  "key10": "4nUTdnD6yhCVx3NAomrZWFZaZRo92fpeDXVjgCSfYKZxhXs43RS36eqvxz9wcZQgNJPEEhc1twGzSAvsFfjjqm9p",
  "key11": "296XZnqDtC2Tx4FRzwFzKCWypZQ9aSkhEPidpF8vwtVCGch4JK51p2YfvtEcYeqzJBoLWcceKguP3cM3GPuLdS2A",
  "key12": "k4yGiSczSeMVmSUmxb61suyVx6RuQQ9oK59SuQW2xMBMqnSNAoTjeXK8as3kR4yjPjzahDTxBuVk3MdZYHywDET",
  "key13": "n9xPZ9aD5GEPq8mTfy9cbfnsFquaNZukJ6J6k4efng27A3P41tqNRA5kM6xfH6EsiYRkwWX7tZDYXaB7zA9Q6Ze",
  "key14": "4MoUACnWkMFKGACxX1a3Qv59PsqeEA8bRQhXq1vs6fyvieozVnVGoKysFs6Za3u4rdbK7b7DcnFXgMWJ63uq7QPJ",
  "key15": "5F8QHiMHFwc2vgRPEo5pY4hE17jKxFVJLSLsVXZNMcSYTXHAsBGMQdbrJ14HYCvQ6scgCHwAx5VTNCfv7H9X4D9m",
  "key16": "2Wzrmq9ozC68mEjR1SwvsZkD3WoVCjLWB9CHbShfa88LBxtcLarApSKbiYsBcJfZpjKWEA6CaXECz6SV7hLUDLUE",
  "key17": "4sCASVBSoQ7phBETBj6rfr2wJAmKpadCLd9eCpiQZboZKKRkmUgYaaq9REpNrhwYm1CEREXjpASDoqUGCuMdxoCD",
  "key18": "5FJVZyjEHZthgtiWLFqY5T2dbMfiTAzjnT4cC5kmSDcxy3YX9N3F4nEAafuepqA9ZYbvr4E155bNcSYPmxHiwNQp",
  "key19": "4fC2xxn5YnrwQ6MNehioxBTKX8JianU2W7gLqMhtApj5gfm2JpnMLo8M3BzUBwWD65x2wTVumsTZDkbf6DfTpaNM",
  "key20": "5mgwAvehwPebxjZZEQUeCnE3A5Kb3NqpuqvVoVnLyQC656de6Lw3EYkZ9p3MEYZe19dWPUPpqUcUgE9Siiio67NN",
  "key21": "nRndwjHHEhDGtqgfdRxaXxHvdrm3siThxcKAUwnDwanWmqY1L4MDLbuiHbFvJtPwZhWZdM5WJ7JEmWoNofjizda",
  "key22": "58592DuVnmugrZtqNoaHPQEBwZ4h8sdZbRizfdLDZytUbv27VbGTXe2DMYbMwLUoAfJhMqgJjfonHomVrueNCUg9",
  "key23": "4tN8YwShhrXhXZ8DG3MoLf6WNrFs64eYhfpAuTa4iW9dybwoQzQg4LthYVjGwXmZXVRUd1N1rdejnbJbrzR9oSpQ",
  "key24": "5McUZPRLgNtnertFWPhPEnEUvFdPo8ydtssqV4q1L64iNM72kvtA8rLmmoC8H112fLGgpZ2fRSNL24SM5G2mBnvV",
  "key25": "VZsw9MgQEQu8qmzJCRdb38D5MzAZdCZt6EqVHUZWRFpy5m2wKMvbhF6jhNjND2WrgnfSs4NmfUKW4EBJvXjGRhb",
  "key26": "4USn8eiChqQo7RN9Bvc6JJwTeF6XbcQgWmDF2DhgVqf3rLtzTNmscs79hUzdkSsUGvxRCopxLdje2pnS2ozXercP",
  "key27": "2s8kpmgNmw7P4W9Bt7DFUYKzudYBTvgXgcBoSJZHdbytognFN216gAeWaaHNTGsdTvGSZqksYca2iqHpN99z4rS",
  "key28": "2frvhZVfyqF1k9CdtKCTQPU92zY4khAH3sgH8aKpeN4hEaoWe8rf2nRF8LNVjq7JDhGetSPUepwdEUemJ7sqJ4Wb",
  "key29": "ixzneY7hjVVuM28BeWQyh8StCpaU9sw14a8Cp9fZwTchq8x4rM39k4HctL63iGSwNf8peEcggM5WMuNJKzNVmHN",
  "key30": "giFHd2DaNbBfAeSipsQNvMtrpjNqnzNUuJe4pVBvQtgatwoastj9zzMH2MLawHR9XhkohyCToPA28SJXjaFUvD3",
  "key31": "4RFX7oQWCwaSAxqSisn1aJZYc4ioJdk9gi6RjY6dGQux5wgprt5BMfL5yBH2SvvVCDe7GtyPaodQbrNVhqyUZ15G"
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
