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
    "4gXkeKWLsCtiYkkMZbbMSbG2KvUbxrbFqiK6rPhH3cDGQaxrVX5kBo1bYs1XAaE815bSdUj22gXTQMU8SfbhZHtR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bxtL2eRdy7sqMWtdXMM4TayY5wfSsHXyrGNV6PKCkvQnDmzLrR5ZNfAqVpeRZAN3QVdU75dPmnEX3h8yWTaEPNN",
  "key1": "BkMyJ1NAKFWsUet4rVdhjFhQWFciSEDwJUoCG61NYVrYaMeL7LWh7twWnu8T5A33xUbzu4F48HVJY5B5oCe7YxG",
  "key2": "21cUrKZ2cwp6HuWYSVQx5CndSa6xW1REaG891Lpi3Jxe9hZqM6Zrcqtk4LCPF4uqyBcisHD2s2HJd38ovNmH2aCi",
  "key3": "3Dbm3cdP6j1deHSjCRrcKUxCnUd9Lt5bgJWGsKPZrfUbfQFhTgZjyBHHm2NH8j6BMX6PyX1E7mpbdq9wkWkrHXTQ",
  "key4": "3Jw4EVyaQLByHgyxqfKz6MDWvpKTXmjcvFdnVs7wN8e5PvzXwE7THzTfa1MFWGxbZu5CT4FyLAy6TKRRBjsEZct7",
  "key5": "5cx8GSB8iTeC7pe3zQe1j9Li1SbW9T6AzNPuu4hLZh9RzuP11rupqNXgC25iNxjZ7irmqeMKX19V5NaJDCMQgGAt",
  "key6": "35eVCTP8kcNMKJsnxrKnAugLET3KAaJsRTVzJKWgF2NuJS1VUAxdsegyAdtF9pnjW7XdpNfELSRxY1wrLQyZ7BAP",
  "key7": "cYRvo6j49fRFeq45gsxCveiKz3UzwF1Ro8Nkzztioyuur7mbSq8f72B4X5aXFwtMM46DFWDGuWFctdiXCybuWBr",
  "key8": "ujfBYjt4GxT6PL4EFu58R6Hp984skgEoH1si7ttfCdVc25BsU1St9sUKAkH1M62NtinY23cpUu4rEsKECUguxpi",
  "key9": "4VhaJKuu1yRQUFFP3QtGYGzvpD24NLutYauqWaeuYUrtxjRbCRS9CarGS22upkAZqoRUR3Lz9pSnhJQZ3bs5ytnz",
  "key10": "2kfith3gx2tym1uq5u67BXfZ6DzfwRHYR3kEMYryy6NXL8CgqNUkL5Du1r6YuFUY8Ht3HS6J4gA13vU5kfAtfn4Z",
  "key11": "3yJjhcVSGw3opHR3scmcGBHcxWR5oVA34uE7AM5GGXeV9EQMCMytYh6ULMB5N6Mpy5UnDTuyiYfJ1GLU8Bfcty7L",
  "key12": "2rkKe6T4XARcUuVfVUhFyrLKxJw7NgCbHULuq1Uy6Bbh3ZuuDVxiNTShcMb25RfEDZDdiHbxE9NkvARuEh3yyTcp",
  "key13": "2eGutJeP65XzNtD7fz2MHMX2CnonVkZaRDmPV5RjC8Ygf61319shsrrvMxP1cYXyRR7G66MJZUNmmkgVtfNt3nVy",
  "key14": "ZF4GjXjfuxc8mqXq4AfPZWSNudXUp3tHsdDjnYPqeFX9xtjaQJBPy32i73kE8X6PhcNNUSzKthwZbRqyCQhG97p",
  "key15": "2rVtbhyF8KC9dCPoi8JvSs6EsiMG5yoWCEqxFxPAWfB2Zjf6VU9NDyZNp2nNVKMvsSiz38891eK7KYBtMoVoY1XV",
  "key16": "jhCKU5P3SLrJztuwWCXZP7L8BQqD9MhF6GsEqX6AYVgF2FCMsRxTR4LNAb1AGSwA7UqLG6EmcnFZAp3cGh8szcd",
  "key17": "45UURCadjHMLanpqAhbkRn9iqioeJmrtxcGBonM8kCge6faWQfnyEWSmhj7cG5hwmpeQC7KmykJZNoPFwGgPZ6Aa",
  "key18": "2ugaByw5exkhBgkhoPvLMEmi1YCkdX62r7j1VKB5K7bf7MTrX6ciMM5d2iRU4smEdXyEQAx3zpttbtgEAF6kGbN5",
  "key19": "3qGST6XVGzYjQzHgEEvVctZUGxw43hzvbK86R9xNbaVgj4MarF1PheAsQ7upZSeAFmMKyCHdpvVvoBpHF2K5vvrx",
  "key20": "35TWvzTbngHAuCFQfEJbH1tdRK72SYnNrBeYZxCZfPi1u9B3qmKpJkRuJ9pyFMQ3dvif5tkhZpJzh25UgMWnHPse",
  "key21": "2bYWR3CLJ7mig8GXkba8nNv49E63fr4rwZzvizQstWMqERWfxf4PUwLXRNmY47qA3VrVFzjxsEAAUrPv4CmcrwhF",
  "key22": "2dMKzsZdpeNtwMXzznZCbXsnhc53JvH2Yd5XFBYYihgmXJxMwjidWMDe74Ko7ujAtWRemGMQjg9RMJFdTxejnYv2",
  "key23": "shrH1hZuSGEMwt9bZ4idvWs2AqUEoLAb1e8K4McehGT4bR1HMoZ1R2jSbTVcYigtvXHEPp4TQWyDx9Cn6HozXHB",
  "key24": "5y9vESoqkx3LxkatocWQKB5hcF6mJpYfLqiN7WjU3rrZ2dhEB7TPjtuLAz7NRYiJQmBqL2zufXEu6ZhqifvTnKnL",
  "key25": "c5azquGMsH5y1KGrWHPaErADncMqPrhE2tokRDhvYpdTaym3nL5fsWom8Mz3HudQmi1r4mCRmn4YVt8AUzAu9kR",
  "key26": "k6pdxrQwD7Hj9zm5kQqSaiTZsrp4yawht8YGgVjPHaz69eEetNaa2YMM7qp95FKSArDwwLmTU5s9NCG8cUVFEvG",
  "key27": "2jGSDLpFcaRbtP5Ej6gA4p6FmPseAqTyTTjVbM4usZfHuhTCBP57yzmMZSAZHufKuceUWB6x4vJqAgchwtZcwnoR",
  "key28": "2cKbwM3cjKXqQFqgAA3K98hFbSq1NERFcNhy59S3xf2VGejidLN6Uyvf4YSif4P9SL5iYK8Y7aavrg8Sn2Yt7v6w",
  "key29": "54u4cmqwvwGf59fLvzQqpszAFMMbwjLagGmdzADxcc4c1YGU1ruUbCek4wJTK4F3ccTsqXZyKejZYcmpUJbXpEG9",
  "key30": "2nSu5z3cvzXyx2dBUzqMNJ2i9BBa5iVeSwgGsQ2LpaDVv22XKMzYhrp1qP6qG6f6TXj2Lp38Y7gJHbAn7mftUoBJ",
  "key31": "4sZ5wekVePDA5a5L3N6nsWyDy43dkkhcV5cB7H2z4NfqQLT1CL48gBTrXgyTRHrvu7QsUW6h5JJvG3ZwmoxYy8cd",
  "key32": "3cW1y5KAcNarE3sXRHQ3PJUM2wR3WnSmfnEFxoMbG2LiFgsBdLtj2G9eWycbfbxFbVppiFPZtJ9j6j2FugyQUTfT",
  "key33": "5f26it12ZafdkzzsiaAL5Knv3KKaewkSZZWf57xExr4fC5XKChvX2ecGLq3J3tnL9rkvXn2qeUSRtfwYh2uxzrw7",
  "key34": "59kLrhb35ZVegEFxquKk1ztZTKpDHFpqVdVrkZqPQGdXLS9yWoXgjguWK9TXmyoyHBESyuDQDaD1KvCL1T9XZAbm",
  "key35": "4AGVQezgsMCZEhK17eCGTSeYSETNicY7TbdZHKM9xuHHofxMgnZ5KHh77LCQJvX9JQofah14rdbnS5jVrhUkj9GK"
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
