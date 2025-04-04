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
    "sZY1ZPZitMgCC1hzRiyPiz1iSAwEj3ksAgk4TDX4h79ArEMG6thrrwGHALyLKBYS9WJrmBTn3BPzwrTSxuyUtHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zr812V7oe3R6dUJxZdUmaEL8Cuka7wD5igCH6QcSLsQjjpwniEeuDtZfuBGHrASSzWfn2WCpVGJXdma36x4oQAu",
  "key1": "5qzYEoXZBHHPqG7Spgs9JKCYWXKEKtv1PocK9zb5HbLe5ziX6ovU81VCCtKb9hKaAWt7wG9cMn5yEqjsHGvG5PRr",
  "key2": "3ShNwn3E7H9mmWb116zDdnSv3vEawEmJgSxM57WzwswjGtucpAKM7txWpS4EmazKRQPTBE2hw4sUcoryGatVzuCF",
  "key3": "jhR8qfVFVrrc8P2jixsvrJRYbLCvomE58SB6GbJun5vHridt5s6kTNnA5oFngudFRRWZx7PSo3Zxa7LThXR3ALQ",
  "key4": "5k8UfR1cyfgsy3CfSatB3RCUtiKbA5yQp8WtXBX4HFexnvEaSG3BivLpKFxsM2ZAxa3h5uznHtdGpUi9sqpbgEnq",
  "key5": "4kJAZzfaMxvo4cd24KT3ugbbLQ7mV4os3KND2nPLGxznBke1o5vNfErtcdHKPUmYsrHTja2HNemiwSxmx4hdVMc4",
  "key6": "dBX3c5Jm4AZt3z9RpG2bKprYLdaKUaxCL6eYHWFrvtJf4zoW93JcCcJYmLK3fKjbeLBVkXeVe8BeWDmHZUE4p3Q",
  "key7": "4gR2zFm5zRXeV13cyG5KvEcQ81nAf1Zc9tDoeS7qPfAvBcAFja7VdyRaaVXbsc4qWADZJSLSNz7LTSvN7KYn7rCV",
  "key8": "2S2iC43bRi8Byqhd8yECEYnGPbasXv1KyR9P4CgSVMHYt3xFJvTzakajpXgssWzDTgvJxF17KSM7JdGeucS3ouni",
  "key9": "2dLKHYzhrLjBeA4pL1ySeGhqUXjJUZ8E9UyixZReznUJko6SsPhpm5eYH8JAhtJi28u7t9HazyYxbzhchSJrKMBS",
  "key10": "36KyDZzfimdm8Bf9CMtoCdNGaPcsyo6FiC8jod1aBFdL93uzGzZXs6h2fDdpKtZtRAttB9YNysk8HTcZMq4uBdwU",
  "key11": "3s3ttFb5ed9E4ktRx3ZqX97t3GJR1WZVLfejMjrhvvMXYq54vEQjtTBwrV2q17phonu3pG5tcSB12GMS3dKzg8TB",
  "key12": "38WVaTJD2L7SRVnG2kDvyywRbVb7Gd9G7n2FrTW4LJmUEBcLEtqvZnVJmzLYbvJ7Gjp5kEqMuiHAN66PVwbshvCK",
  "key13": "2krbyNh6FqtgQkpiVBFKPMEwq7CFVFpFcaZMcr8MAUDCgahse2Xivn6XAKeGJcuR8DAEDAY8V51zbutE4WZyBhNX",
  "key14": "4FEebxrDRXQaruTM53131orDDx9qnrQMR9BGdjat8ESfsanzH5HU7pipfeUQF1nNiDEx1XmZYe8o84EBmFKwr4HC",
  "key15": "3SHWwAWmtEMsDWjrAHNp4GZfjs97eXif6RpJPu7Tkc822EG9EWkibWa8yN7hXcc3LWxk1U4hdNMv3tMnJtz4tLyT",
  "key16": "zKNsXPUFm8kjYCnCHiBCvJRdUWrTjRWbfgjSh3TK6Hvh5gdqwbMrUBUk2qFp7vdPvNbgXHtHbAAspQz3zKnk7g3",
  "key17": "5yzMziFnNFsnEiBpiPVSQ4Qa3JYRdFdZfJXfigAN9fWUwui8ZHnPHjZtAji8RahKCGGPWHYfftb4AFcAgwbSWBjk",
  "key18": "3oyNCMCvWziJ8QGKZJDDgwtYAJ8hnMkFw77JzhVvyuMtt3Q2ZmVb7iMFL7JMXZEz3widYttUDYjhi6pWPdQHMr1b",
  "key19": "4sAWDaNgYm2BrHqL29zapMoCsYXKrjGPfQkiPTcqG2f7p9abyfiKJUhKisQLHijKvvhzb231vBSEd8aLFa24gu9W",
  "key20": "2B979dbprvAdnxekoTzSUAVK4jvJrMDiatHtiNEtVTswgfCcsJGn6cU4v3uwnjK8oNmJsSNnjyRKTw2GtH7P6nRE",
  "key21": "2D3z8wtGubEUF6DcA6SmYZfgqBmYjCJrEeQ6WktyPpLRQ8bWxNCGkYbFFFh1i7Q4JEAPsmfe6YjryKsWoVaRJ9T2",
  "key22": "2eP7iLVft1bDmiAVuKxHAFtRwUEWWa2EKbPkBapgmtb6vQxHDzZvVc3oFxovncvtsv9a6CpXujRtHYeAnQDWbYSG",
  "key23": "4Djsb1QsdBmVHbePp3x1oAVogxJSZTQVYNNNrd9HUaNhNhHVjGYoEHvxn1vxnd9PrUXg2ZCTgnPhrQ5C9VTDTbRp",
  "key24": "52JJyivU61DDh4USyXkB1aarBuBU7W6Gg73EouTAXe7Mc3qsRiFjmxaAAspUCGVZ2daMowaMu8oaGaWy6ALVMaD7",
  "key25": "5zp2WyB99pDwXSvUneFGEGgLNvUNFP11eH5tDQZPGMB61rGLMw6PMuoBTWptqbPZnvPwrgUS8ArfMuYns46aStF4"
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
