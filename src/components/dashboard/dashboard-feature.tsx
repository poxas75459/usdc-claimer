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
    "2nYWS3ZnS4GnGGHU3tuPGoyKaVNXyP972tvUQqwn9V1mKVvmbN2zGYMfMVKD6FqcqSvcjWjsN929V1JxwxDjVN9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32zJ5SjtrqCL9xwxyhQsR3BokAzE8rfAykcwD7fcVWXL9ha82NMXfZCdeSpx3QvFR2gTikDGEYKTRkKXuLwNAGJK",
  "key1": "pzMG9NTegFvzJb4jJu8KHe8cu7JsUKc6aWUrfP4QiQwN7ANxw2rVxhMU5ic18AFnCQe7p8aWd7wXdeYhuGtJCRv",
  "key2": "4japz2H51h7YnN3N3M2dsm5A5G4R9r4bBUWGe8FqvmHtYCk2gTxUjkw2oNciLBA8KVyxuUBdMFHH8qxxNYCG1fV4",
  "key3": "5av296ZuzZz37Pm228trGf7hnFK18wzJukf13o4bw197Kgbg7Q9FmXMYF9N8aumEkLv9wqj5EFStgfgYAekybB7N",
  "key4": "RE1ctcAW4PBg1UVSH5Uck9a8ResSvLk8WoqrCPSSwEb8vAa85N1cQWgKTLpzYrGJGuChmp1DBZB65GffeWvRAoe",
  "key5": "2GB1UY8KrtsTj1835L76pftzBkqhiwhyQZCtfbSmxRLHYKMFrJZD2wLKc5XTRSNWx3UWMBUEuEMyJuaM4sh98zrS",
  "key6": "3swWxr6T3DpcqwXr1haBLWCBKvq74hYqkGjU8oBFaAgVN6hJ7KSsmYsPZ52qtAzUiaxiE316jmHVNbokECZ3kCgE",
  "key7": "3UhhKn98GcB31wqmBPkFGN6G8p7gGV7S4pxj4pgdTHcYFy5xRnuPqBbX68C5ZJwnvPoo1NaZADmxbL6YoeBBebDv",
  "key8": "36STbMjyjwhXZPPY2AC8x78QotY6UiqDQ5dCbkFvovfe6V47edeagxg91cnPfdKuGk16dLt691McYXbEaCqAGyiQ",
  "key9": "5xEG5CUEqUy93Zexi9nb4jfPfniWv3BsiWjBGA3w9jbwFuJwdtgpHaYqQAWSCehAN1Xrbqd6DL9vvK39xwki9FhP",
  "key10": "5oCMeCNajdjm62U93mQxVCvY7kaEApscBDj7jGC7vqFASde4ApNWuvFp9JneC9MT9wdsA3GT7nSWZHAR6Po83TM9",
  "key11": "5Giu6WmEdiTuGc4iPqpfJQJGHQxPeXR8ekH2wkjnox8MYizS4TMy7tBC58sYQx94zEoZFoABHYtNeHdQK1bKZMeu",
  "key12": "3hBXa7cdFcGUmCa7zAUqaCZcjjegFhAoDjnj7hnmHXKyJVrdTi79khXS6oZxsHhsWJthaBMLPzEmiz7rUjnWD5cL",
  "key13": "2Vh8J5Y9ADBFtaa5g9vb6tJWNRe9A4ZNfJz7Q7RwbGsfYHoVXSTjQjijpvSNHm2vgGDs1TMFLuHeqgJtbnyXfGse",
  "key14": "5Te3KEJtYy5XAadnwE9c5r5Fdw5y2dGVURFQxHRgC4QSsXaxdgqxa4cEuuq6MPabxDjd4HSPr984PhAJUcLnMYrm",
  "key15": "38icKwuotAgTVT8XddknRYKSEaGqBHw2S5RyppiXh4wuDomTPwR2vBV66qAv59sZqWfZ4D3irdAgAAbnhRKGsTJ7",
  "key16": "5ufvAq9v4irS86fBY3cSRyeWq3fhUuqG68d6n9ugnDRLu2mUMVXDjnmoVmufebBaau95D4RFQE1JPrSxDYJmhNd3",
  "key17": "DfhCDxu2DpERbcvxcSt7reWGY1W2NY29K8wnLfRiEdNPF8hkuGZJGsgEisLuBsUmzjRjueAsbjThnWi3DxwYRdy",
  "key18": "2NxDQjW7cykFUGYNtcHGewro3u55Xy4HxW8iPCnhM1M618JYnkvJRzKXEhjUoMminFUPZHYMrVKJgHheNkA4NBhR",
  "key19": "2V88m9mm5rU8au7K4f5mgnKmiKr1zR7uNPom2vz8cFKhnsvF5FuA2XajEiiSe6nqWEjaCTrqaGuiJHE6u8nYL5b4",
  "key20": "YanLKcGSHxRjmXpLriYFNL3625uebRWucWyyPWkDppY8tzkPoEetozAPRnVAVD6BXf7vQZFRVUbFdKoVpPnWpNc",
  "key21": "38DYti9ydaBnYnUe4beRDL3qPCr4TyBTpWttimei7gguvukpLdZbB97MMDXMN9s23JeqzN57voaDRvdMvHXA8MCJ",
  "key22": "33QETCgJdEiFWUkaNLA7eg4REcneqz98nLdEX4KEjTWA4QmD3osS6TCoihtM2t8SSH5EPbh9U7Z22uhRk3JXTK8T",
  "key23": "4SuLPm8dzk48gzmnHfDhdNRCg9uXFSJ9S9kYkfDqUZ9JozhhaJEVh76pnJGYcETEaPW9v1gargmXP1GB6vqcEZVh",
  "key24": "2Hqjxshpz2CeSMzcL9QmW1ET6rhuvGhcVgScFouMPpGYF5bQpg2oBb8rd4YKhd48mKdkTVLJgfs4LnfE3oyjA1oM",
  "key25": "3EYiDJf7FRxYZ2JfFgjybJ6zerSAUwSgNZMJt1XVQtmxGizaLg1xjkK4roXNMGSKgKL8JG93YFHHBde3JuXFVPPP",
  "key26": "47duJjFRhb5p5kTc6D6X2rDshBXXQon23MGVRW3eYx6tUnuzaDNsvPCiBusj6raVSHt5nALpC1Bdx29hif7fiMyG",
  "key27": "242d5ptNFgKFCpE9vD4GqAX8Ku62517o8XY9GWjn3rRxQZj1uSyArq2TdTrrjWWcqeUSiNXsHkPJVoH4JN8dHJsB",
  "key28": "4T7SFsdt8E1CVH3ofS17DuEktVSEWCM5gXxFw4Jaff8zQRrAjYrs4DEZNEza76EnkRRtq7bt2dFAztba68MamAag",
  "key29": "3C6NLWQ5Ay4qTWxgYe3fKtZdxsFZHeJJwAaJdk5WZdh1SoL8BVFjeo7r4hREbPxo48Y8xPqgLRCChTm7vSnXWsW6",
  "key30": "2zKYPyPiBG7KmM9jo6aGKRVwKfKVdrmGaa4y5S3AvGyZMJ77qdWuDq3LqyQC2jKjmsM2S77UJQAvbtoZnz6Ha4o9",
  "key31": "pL54RmzfAH7E4ppAweq6tizwYbVE3QiAd1wbWNCTZeKvX2jeJpxLguaur5dXR8eKoF7M1DePMdz39Jkex5tDbKb",
  "key32": "7qZKbxR4fRE8GkABYLPMKBy59yKsSfBKcMGYysEBoYEGsgsf2cLpQw7YdUvbRP8Vm2qApesh7qkdEVd95kysCg3",
  "key33": "3H2aHQsg7EoHqxrKJtBXYEViAX7gAZdbEnvMp4paUetyK8WBqCdqC5fuwvNDDJtF9FW8EWaXcw7mE8PRRqnQxH5H"
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
