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
    "Vf5kVtYoADaygCPG3mj24QdvSSuGwrMsZB73v1hDCjDTJeqxgw6H7ufGHSkAcVJNUYXMDqYfWB8sub3pyCdnc3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2raWdq7Dt917Qad9A6UC1ju1chK7D8ynD3Kaz8vp9J9nDZdbKf17QczKK9gHtKQHkvszgr5toP4Qm1N5G5BNJMQV",
  "key1": "5ky2HMjs8LhZJ7d9RgRGMLrBy6F4Ac9SXmiurCg7QcSEDkdG58XRZdAAPiWeewqx5PWrL6iwyrvm192K1ckgCRkV",
  "key2": "snk2FRiSKPymD6HMEHDGEJoupjqX92HBHRYE8CfcoB6XHDWQ6tTNdVPUWr82iEWywF9r14gDSoq41Z1Bqxxt1cM",
  "key3": "2uHubcMUf9qkvDeab9R9QHKXBSPoTtd2D7eKeW7qFvSXF85A2bq9AhG8FnXysR5noA2FBoyzxskgxhshrB6jJfFb",
  "key4": "ZgoouCk8J5mJ4DwBeRXHAtB5xBnFUcXjggL9es4HNYnbxLHRPb4EjcbaccpWLNprBU4vku9tBZZoY5TWqr6ZFwd",
  "key5": "2PMwjQzgM9P3oFSBBk6rrbrXcFaPaM6rBvWu5KLMVgq4jLyYnzubbgMz7smXEAN2f2FEUwewwE7DJBis7Fqc5BeA",
  "key6": "22ViWbeAf14Bv8DaNkFQV85s4xSKrfdypjsSRvkJX39h4c4ikwQhCZ1AjG3ET6quFPKLMggBbDmefsXQC65WvVu1",
  "key7": "41j68J1dc69JTQYQ3uVN8gMw5rfwpxA2yg5qYmw7LTZgXfDBzLQY1UKaQ76URr21nwNCem9k69M6h9hDucSAt62A",
  "key8": "3vyo7Hz6yU43ZwDNGUnhqeKfqHZSfG9GneP1Zq56Po3Lt67fC5wikfXa2oKYxtoYsm1LUfN6PP4reqoKay54C5AD",
  "key9": "3aoPQnX2u1NYF9KdXiJqH5Cb6ds2dXXPaWftZjiPSCVdLKYkXYzg9WJqUVQfFuQZ9HJWQ3iHGUyTkt34p8wffNCT",
  "key10": "4PesXDVwa3JN3o3N4c328BbkTNeVUqMVsVxM1zFNtkDNg4Z7LDNYyFSKVJ5isARH9JtwTdpfHuJCw7MqkQtgkD5c",
  "key11": "3xmHqQ3DYhTt5zVWYp6eP3Psv8ARQ7EC2kt4iD5MWKAxnwK8SY6gSkkcQqGhvTSK9zzGC2N7Bvc1aUSiWRG3MMu1",
  "key12": "2HEFz7BV3uNFzTf8q3BcrvXJ615cGYvxEnhvHiwy7k3TMnK52E8QFqFmun8BqPXznBNb8g62AnYMx44JUHFCugW6",
  "key13": "4jBJsjH7iCqvQ4joHBC9RzKRsw8szbCgbZF4byQHEDh5NYqVr85c2oSWgHC2fEVoTLLWLS9kfdobma56hWuNNXhj",
  "key14": "4fTrk8WPAPfaNokBDPWRHw7pCdLDtBrRaoJ3kYZQvN4GUH6fWmbCgMMwzyvddw1iK4Q9eJm8Maer6j8Fm2KvnPvJ",
  "key15": "4J8uVxu5eBvgG8KdBF7wgUWBunvZ16MQBXFbWwU4DDrKKsjEyGuzB2uBBB31m98nuG4Cc9FLoP11JajHvadjrkRA",
  "key16": "14EYHRcEimaCvShkKXeqxJzJKryXLkNFYTCC5PUZEAFDyKkDQM7Sv21CyrnuYPwqvtaVyGtMewdiyi9Dj8kseCF",
  "key17": "5uMF1GfZ4ndawRogXgxx3ScigmqpkT925ZTFrUBkVhbFYoqZAbevPf85a7EGAy6vjoi8YtzoAj63i9k6AWuE3ZAG",
  "key18": "2oRbX8FZh8sDYv6LtpjgFmfysybHkPFBxcT6SJaLNrrirsXW5KEjPLxPxjHhkYaNNBmB4zBuzhAs5QbWFLnwkKAW",
  "key19": "4d3NgKL7cZNRKzom45ALcHwnCWpbpSFKAMgCVekaBPC68r7WTFuJuk1uEvkinMLCRDz14tLd1V352nrryaiiogTs",
  "key20": "uTq2vQyDLcvHAwDRaTrU3KxQicszrpKPPF4yPtQr6UB8tsiGKF2jcZpuurKJf8vk26VM3WShdF5WCY2momvDvby",
  "key21": "2mpSGKYz84kyUUna6MvexqknYKW4hHCWhVaNVRy7rNkN4e6tejTJcK1nx2uJpU1gURFA2G6n4W2CyMSwWGGBHUYX",
  "key22": "26yEvwG2NXP4JmRj3oSdnAbyeK9QdSpn7FTvShzVEoW9hH2n1qX4DVG7NPX9Zw19eXLq6PdN1DPfXranzq3qpwqp",
  "key23": "3RAMqaqxxcm2MiyLbCXZso7sLFPfdu5RsHxvGBEG6y9bA7vtgBGRAWZNVMyCeYqjAaVhaDRCUAur2PsirTv9T6gm",
  "key24": "57YVwJFqohLbm2mNJcDq76ZHbo9tJ3SE9Nza4sHYaxSu97EBu9H5cDNzTgJiRmATQ37BwTfqeE1GL8HNzX1hYLD9",
  "key25": "5ui4tRcnPnXM7g4q2SgqZwBi4XJ3AvwAowF9pFszbaU3mVsr9H1DzbfjVjAdVUbXBxgFHJxXWaRgqVZ78chQKgfs",
  "key26": "2eaHLi5y7psGvYRB3PZgc3S3xEptvvdCfZoHEveUHdD92ZsFfAYBG3X3RJeMGmcPXjmjcDk12oHcbScw8tw1YCHS",
  "key27": "4xx1MPFtTW5CMvJSi3EKFetpLUPF2D8ogdK9Qb3ZQJpwZHff83RikdRzRG8NNvM6gn16LF4AqeinMMknd2d5EVUn",
  "key28": "2joHjhLrtEDJvR8BrW7uaYczPv8F4r2fXgmj82R9pnWSD1zpyEqpB7epP1QvpEkpXER4zFUVDLYor2ScgqZwyu1J",
  "key29": "3zkUHoBoa1FeW6Ejkhn4b2sWhubiEqCtMGVoXiiYBaYRF8Fs7c2EXqZCd6zuBKm8T871cnwsDwL3mbAw8B9SAT7d",
  "key30": "KffQ6Un1D44FPtCuSutEFGPDzHGWJnQzxX1shEPiitvvmheaR86DZ1mdXANWCkN4UMKxZKorzRTDJbNBBeryYYH",
  "key31": "5XZSWBMrrCBhKvLc59Wy6RYKHZexausANhadCm6vf8g5AJpQ1ntWaNPeHQEQD52HAqijciump9f72LVg4hsAhhCB",
  "key32": "2uarP4pkY4uLcpR3XgUM9SCe95ZmoczJF6Gkivmo6NiTF871Q2h9V8A27GoPrTyJY3sbN2FDuBJaDeEpWjXm9kKd",
  "key33": "2MrekbfPaz78eHGyEWwcpMsgmETL93ZQ6qWGGvc5JZGQADWqSeSJeHFvK9od8hrgkWXmmhFCYr1wCf7qMeRQJmRq"
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
