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
    "5uBADxjcqRguaMv28njV4SkUMERrPQ1AhtxAVfRH2y6rZ18nMPKqtkATfgHJyspPxF1LnqFPqdn2XiowrBJg3HCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28g97v2s1eh4PHs54cHNy33quJGmfuHbUzZbRhT1Jw1WcsDzf9P5r69SZBNZM7LVQVpovxAUriTSzgc8HndTWyaF",
  "key1": "5hAb7cYWZr3cvEuKeQm63dg8w6ZCxh8nnp6GmUu64H1ssi88mTy8R279HEd2QH5TUPvTUH1mipweGGc5ga3MvqZn",
  "key2": "493CUGF1ksCPFQM5ALbinNgsJJu1YQck4So344Zo1VuJynGxLTBHGLSQHYvcFHYF887AqNChVNQHKSfwD2vfWAje",
  "key3": "2e1ffTNKu2pHVhJ3gx9v5ZExXjyu7hk7MLM6L8fTa3U2L4eGBCrAzPcBCwsg3EC37H4LJAc8U634McFZDBxyL1V5",
  "key4": "4ymwgnCqd1kmQJeunWz1tGrndJirnXfnyqc3qMh1g6gfHj8CNqeni4AFb2nn1kjQCarYeEXaFA5BtUVSPNoTGmhs",
  "key5": "51MdUPNQneAVzHJQBh5FpDpmd1tosAS32tANY4KBWRdW8jVDm6jc98tE2UGekAbwemGaovFWA6T7GPrZEKZ1zwJM",
  "key6": "3Mo6nk1YkcNwjiZVxEdGSvneP1fZhCy4FBXuWCcdvS7BZ7KVRjQKx1tJ3Jfo1v7m8yHLoVAWhN5JwoRYKbL7uV9s",
  "key7": "56jyLHUG6mzpwQqtAFrerRXZYeCmQzbwYTgfcebwmJMts8WtEPJLxm94vrtgXAQyo9jrqWKhp3YfMXh9rU3CExDP",
  "key8": "5EXGUvVn2ApKXmv8rny84B2FwSyQBG4F61GFxNAWS7t6Ec9RSacf3aMYzfS7zWGhg3AofWDSHDqr3acLb2duNFwF",
  "key9": "4E5ayEJ8mhPtEnSGgJ2QzzGtydm6BCftST6t3mzTYzYuMCcFy1XFnmu6Sb7YQzWMnfoa2ksUhQQmJX5eV11V1tcM",
  "key10": "2cQUKngncet4BKgfAA3VNDioaQdYuKnNtYMLqscJGpKFBBpPG77sjruWEdAzSX7mSgfnc6L2yPvSGSyCaXdyLiqF",
  "key11": "33Z4t4Fc4gfCvDV6vLooMT6eMsNFNHeeuxVSqTm4LRYyUgbQwUUbRRMkMeuSt2xwNDfynq34Yht8zbeTwghdQjnN",
  "key12": "3xmNyGXk8fDZofKXgwiKH8Fu54z8WRRQPW3VWEuPW6nvW9Zyfmg9oWSyhRVH9CNDoqfjiDAaZrDFJNgEEow7D3Vc",
  "key13": "54cXDQLwL5ktSj8A9Mz22N4iuaecHKeDCEHpvc1J9mAD9f3wKpWuLDUMSD4HERc5azbMaghG357KuZJuVipf22YK",
  "key14": "AL7ZJ7FRQ1wQ4Tgq3wj7BQZGxhLHt6QNiXPKacWEbdiM6tHXkXMS1Lsto9zeVb8GPgyKCPtEEbZyvfeEkyEwA1r",
  "key15": "5sbvSFdGG7GciJzsweVPyqRZjqRT8kgEokeKYEaYENFE425nXzY9tauBj3jaSHsmcCGs7mFtWW5kVojmhXxrvtzf",
  "key16": "5hPr5crwjQs5TU5Hq2zQZHvAHHMWMkRhzzLAC9xJsnUeegreAYvL4C6os9RDkPZ3jErodXmqKzNUhAV4eD3VEdje",
  "key17": "HKdvQ8c617XNpLHh4WVncxATrTi6SzBdByayKnVGYcuo88JbAdEVXpHXDzSiVVdzWEw8ZGEdGXsRrpk8qagZqiA",
  "key18": "5wUprqGPMJFvyy5WFqypM3BYHjqVehaU3iBKT6ws6RBz5V2TA2HzrrjcGwbxzMwRUuTo46CiNhJsnK5mXw5B19yk",
  "key19": "5REGSDJ2qWyNZrsYHPwhcg3ku6PX5BRF2ShsAyA2Y2khfgWAb1Gf6Pyhe9R9Wy5uZqvmSTyBiQ1MdcLnTLtmYmL9",
  "key20": "2JQPSEqzFm8ckisPZT4zPaesbGztYqzryH2hgD5kv3b8gJyVwQmcY43BjeZXzw7sqiGmdaXWa1xMZbnHp5xYSRGk",
  "key21": "5V9sdaNXBh8jPfjbK1yjNTAUnt8o5L5RGPE9wjVtDMg35F1yQF1VVNiSuJ2uAJCSvTKNebznhbMotoNkbKKMBrnA",
  "key22": "5egABucwftH7FrGn92df6Ga7Qkk1sVaBq7mCBeKRPsVPptXgC1KEyEpE11PqDwvV3jGMqJ1yPkt2QdtpFD2mpe9M",
  "key23": "3zf3fxxBgkM2qF1ks6nJVzjEPW5qWcx72QxDdT4H5H6nsiT8qf36D5PLmvQnrwUNMX1k3ML4eh6gwZtXgiDaqYYP",
  "key24": "XBxMSJCYtSp22m4yMA7uRnt6nBHmmSeGs4Us2aV8ToPyQWrBPqsUxwFW8wFysQQKSF83GgRzS2PEkhP4TopMdqx",
  "key25": "22AsY4SwHBo9ATZoa2VS21mttBKWripuYvyMxMTtbzYDFC9HTSw3yoo6QfhKPBbxxqFbijNyfDXH2xXWb5dVWPDh",
  "key26": "5qTbbS1nEAeVG1K75uPUvJ5cVzeGFqAtJ4CxPn4Qg3KLmHWmRKQ6rfRHHkBiyTJpPuSLP3sGq7ZZMbGTSTsXUspo",
  "key27": "SERA2xD5gs1iscd4AMzjkH6DyhHvK4hmNz2amjZxtD4G8QRexTrEUteYXCfceNyptcJfHB99pU3HdnLPk4F8oPw",
  "key28": "3n8nYWgAjdJagDbqokzZ9oFCds3nYoZfX9pRUGcnwAW191VZaC5suMLzW1ew9p7Vjr1jobTbJZsPdyN5ahyFmQ3n",
  "key29": "2upob8q8h6JTxDPLWyQAuuSQnycus5Czg7qP6YqAhycTWhboeHiTZGmTDzejDC6opx5AAM1ZEsS3hXEAeQR2DQgW",
  "key30": "3cgsfpuyZ9jSsEcf6iMvPNGNkLHBCBJBAH7J77U3463FYHrGhEREWufhwfAugMheqJTY8VrJ4mEzesLXpmfCcF3i",
  "key31": "25tGzZmQHGnfxRDJrAKamcoe9wqnQc6MFJB5BMewAoX7CFwqZQVQgt39bWBxvLGSypuDRr9NE4345twBEyuVcnR5",
  "key32": "NSKYR3kWiCjJR4h2bJAMV4rKw1XrU6pqD2jrQ9qhPnsGgvfTALwwGhDSsYgmiXvupKRt2g1GJvTQAzeYeSGwTaf",
  "key33": "Kcr8a3Z2sG5jBB5Wd517LWGJgh81f8NGJB4kUukJGo5VvDpsUjpZCRFxgHePK6ZJg57VqdRV3365WSLNBT7L2mk",
  "key34": "26wA78ocL8exSnqiDkMCAEGXpU2VmCfnmtieTQNhQMx1c7yhXJShucKaCsE2F9E4gipHEeHyn8UHYg61ZCHXYfoc",
  "key35": "28WQF1e5bcZaUmnc13ZFvimdfrn4XdoHWQAV2BLxcBi8RLqtSHA6N7ie84jNaxom9xsvdPfAizeFhu1atih48ut5",
  "key36": "4t3AFRGbVQwyQb5HWpAjppDEcFtoUF5bjNyiwYCLicMWjjXA1jCx7t4jF5Dfhc8GjQeUj3mU5upsHyRSXt4R4B1h",
  "key37": "5FukDawje2pbyfsUEzfxiwJz9eaN1jnvUWX48a9pSdqVSXg5FQ7rSA2v6g2QDLssWhtdVwSRPydMgGM5LAWdByCJ",
  "key38": "6y9rkpA6wJNmB7XiSbpaH33uRQtHMXMvhQRfegJtcDpKiBnCsv84di4En4Cu1xucWaacHzhvKs3YaTHJqNH9gaC",
  "key39": "2W3KkZjEPtfEk2gyEEwLGRzb7jGBaijDfsv9W3oZ9bCo6GKDyem1vHKLrJXvVPLzowUDjFzUxUQLbh3T7bknVu3w",
  "key40": "4LPtcaU7vppYa7XX7WLkdgmLqJ4sg6M49DxJhnHmQHaXQHQ6RiccdFVifg1peTLgmz9EzwbsZ1iWLU9xfAcHzuT4",
  "key41": "5rBTGihUoEr8NcHvQh2YPfqfgQezQY1BC9mhRKVJptFvuqkYEBCDqxnwSf4yE5z5sDS7MxsXYvAKAhYau1MZfK1w",
  "key42": "2bYdAxCQg4CoAtifdvkMX1vr5p65zV2k36PhtEA2bWF3EmzDJBfFk5Vf4kA3zcMnMnaG3aVt2RhpqFmCapxKdy8W",
  "key43": "4AqMnbTvTSEsUEZEPa1xAM2mJjUZDzpR8E3nSejg2Mdqo2BSQ6RtbbRMv7ft4WyGNUv56ZifcCSxmFn4vBwz9zva",
  "key44": "4r1Sp94umKLwz7SxgKRVFVEv6GSZUtZBXyTZJVoZMsFgX66rMyEfRzF91zHqer5seQqgQTsKSB6znrutQygUMLkm",
  "key45": "2vwEMGEYHcppbFU4aLR9uZ8kEHTQEk2DazPVMfWKdpr2fCG2LXFeF8yDTnfXtngTtZTmUHsWKMXvR8a6MEdsrQM9",
  "key46": "2aPYgUwVQzVdVn9pi1cJk83qF857WWr6hMN1VQf7TgCgxcVWBtnJweiTjx9SSFscTzTG7DGYLSdkXQKgbeNzy7Vr",
  "key47": "4i6hhGwvTjA2sMHRe6wU1i25gqnH4SsnVzkiF8eRX2aFGaGvbmnNthiLEHAZhpuYfrk3aAfSmGfYYmnzMGExTEdi"
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
