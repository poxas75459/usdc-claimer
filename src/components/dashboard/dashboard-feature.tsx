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
    "gDCFGxHrbVuvjgpgPnnHkdqzjQF4LDXKBHWYAXA6LjkPoFphvxna3tZDLZ6C6Qt62qxm6enjodCKH3kDqTZWTGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5weueoD6PLGzUv49NLDdc6xhiykvStPKo96TGRdgUueN92CG3YJpUm6vYpyatubhjJha9EZxCUPA5zMpbKvmwSyk",
  "key1": "5kZT4t4gmYA2Agxq78noRsA2iWNUQJX3psY3Jx5QY9VSYukBcahyKgb3QhbDYRTEcMwFb225aHe6oggMXb4FdeAG",
  "key2": "AUhnc5ueMbjsN5nGHHw5DKZ74vCpaomNVH8aQJvJyBVPa8iNiXvEFToZTrJm18mrJqRiCLEH15KxdiB6fporgWh",
  "key3": "44VbqYcGJ1iGEFyEKr5gFLPcPwXvtzKg9aoQbvtPBPL2MeWiCgMDrYMDsvpTbX3qcZBQetKET5Z881JMxxuQ8oR8",
  "key4": "5Q5cfnXbjnUvLeAJJpQpEDrsf1ALiMEZcHEnEF9DXWtjvL3C5vfQUdPrEAzLDFJnPJeefTrRBiHFndnUo1ppSjEd",
  "key5": "3sZ1rzwuvVMW87ABgmwVMUzZFdpQVAUoqpKctaaXjbnZZBww3xmwFAHq8NEU7X3PcV44myWQj3BzN4vDijd7Ant7",
  "key6": "37npYoNAx1fpkgaLkoxg2AvM29soWyAJWZHT4Qhbt5FTLFU2HVsTzDm1DnTxYJWZCD3NBJfMPTFywnWymYTMHBVE",
  "key7": "KzvaVUeQRjZKdz2uiHshTY9QN4DKi9nU2X6WhDv8CgQnE5e7UY2z5HhKW2pRQzz5t1Pau7m6zXNrYhSmawcVZ9d",
  "key8": "5F9d2pfdnteiEdstjVB76Aijn8kRdbtWSHjAcQ4MsJCHqZVS2qSW6w9vsPBe6pwrFz8mSuHwb5g2iGqJdE3Qiy2j",
  "key9": "PkC1Pu8QQkTfdiM5LhGiJbQ2g5v6KYXL1TCKzdi1WDWyBXpMc6i8Wqjm5dwcNaXxeWyH5QnQDvh1ndvkpqf72Ng",
  "key10": "rLaaw6bJCgKUByCQ5u8u7cCwP6nRWb3VHKRreNYHstYqt3ALiM6sd5aSZnydNwT4dfZCPBjvsM6LyGkAymiay8E",
  "key11": "5S1Bzj3XX5DUWbfv3aMAsWZ5JFDK1vasP5XoTx3KEGxVs4AtcG8cR51EveBUvtXhffpCt3Y81LV7N8mNCV8LxZ4w",
  "key12": "3KpqHwGJRtsiBcMJ9ynntjo87X3jKYqkfrCukMR3gR8mzyKrksjqZehBTUzx2dgxC5FUS7XoW29YiQYapXgBfkSx",
  "key13": "45qt7LU8kPoYCoszYpokDCfgohftF3ePTFQJN5TgZwgunKEsdEieWkx38HpefW3bRbgHX4AyYtToCThbgUKbH4KF",
  "key14": "BZzNpxKa1k4Zpir8yEFMdbH1dU2a4UxM9LZdfwUYSe12d5tjXY4CQBaLP73siov5St44fS82jt1RkwSHYw6eDrx",
  "key15": "3y84f9WcMpyzGiSWL9FTryS8bk1pJQ8NgcVr6A7QoYvb8zZT39NRncXfzZ6eeUiPAvSyZZpTfBVEtxtwik8w6w6u",
  "key16": "XbMDgWW8bWJcXNoUN6L3BWYhL4Zn6Rqnzn5hd8bPyGBcw82uGVUxkJmuge5BrkAnaQGQQ12hPaDRDK4Hbde8F7k",
  "key17": "3TxMadP8gvHGrMZdFhvPpjzy4tQD2HfJkK4Bdi9EHNywh4aYUU5LwdKZrg4HM8oUzgoYhJzpibuh3vLqguW22UKb",
  "key18": "4DNvqS8BvYfdCBuuZ5j3mrtvbqW12Wj1aW1NQ6n14BDrte8kqEw56dHftf1eXfuJekuVvX3YtVZ81eDjPSu7EiEv",
  "key19": "3Fih3u3pFcXb9dRAG7BxPkdgmc4gRDu3VUEPs3HAteqTvXyDUQQXZKsd8Fm3f5beszuLBTLGoRAKUkz4ZdoQN7jV",
  "key20": "583XRW3n6p8oqytudCPfAQZt5LQnZWymDs9pgbg2uoMPqqjZip9Fy8bWsF9pcWcJbFPUTtCG66VKZ97zKEnkMAxQ",
  "key21": "4UHsD1YS2SeNpaJwkHKBv7r7t7MX1TRc27QjPTPQ5r3T4wAsa3ZH7VNKXcqSkTBNJkKCp3VhTWNCXV3ezFrAEMs6",
  "key22": "3hvYFaGFavcgutsXaNDY6C74eveVwgiNE37rTT33fpk2MVa4YTkE5B34nXcwdbjC167nCRiisKDhKrCtG9Ew59AF",
  "key23": "m8xgQHGdk6Pfuy5uqRc8Qw1oqUTLZegWrPgPN5zqU3FSXYUDqDBJ7mqAoq5eKSW5oDTkT9iGUSMuvugjswrK27o",
  "key24": "3KDTrkjcw5HyTEYuXjHNoq3pJegrqoLyGpB15EFi1TD76jeKEiBp3uo91epuHueJZpgCjpJ7kjcUZx8NhN9Y4RQ1",
  "key25": "52gJHLm3EKiuSfMgtXfhbVdbgzpBZtea17NCJmSM7tQ1dr7S6mU4n8TYRDMKMcQ9RSRYVrkAh1cvMExZe4mxDh24",
  "key26": "TyCu81HBNz3qeWU9LaeoKjfKVpnAVNMUYn9a5wk9speyMxBHnk5EGJCF6nAERyMjzKVH3UKLSct51GEJ4TDhxmj",
  "key27": "QEZZL5QvfDrEebvb8Ry1gxiUbv4PoUBCUSp9ehbndzthdEPnTekgECTWbcahFehbU4UJpXcoBWitN39KHXGqykF",
  "key28": "3h7QKcdfpD6yu15WnPF3k3akQ8seHVKHytkD9YTEzRGGzxKGXJCg81FS9Mf2zRPzXsAB3BSQaEZHEESgapjY84GT",
  "key29": "vkCBvjD3p9t8tD3P2tU1oTM287Shz2vGGhEeS8UunRMdNzpPviLMSrzgPz1SSh6uNTNaWCJB8oqL6EECXKvtUmh",
  "key30": "4B5P1gHzRd5AgTzmvipiUGcBHJUU6L8kqQvFsZqCXAZytdVQE3T9jan93o223Z1r4H94BhhkRXTmEWRNAbDznwP3",
  "key31": "2yAGCH3yX2z5UBUTJLHzeNt5DkxvSXz5anDKqggc9oLgyAvj2rpWPJdirqrFvmBSSJiyjAT6tM1YqVJmoDfgY9k8",
  "key32": "tEx3AGAiyHhXXwbT44KcW1joib9JZHtaX1nVpWxpdgvLNBZBQvrfdKSAcFQ8kcT2Q51RpfJsrFWD6HRPUCSZqXt",
  "key33": "5hbDyxrUv5aVWNpmqGrfytC8Q5Fyh4auFdJ9bSJwSXKvGfb2W7MHLsULjBDmYEc9f1cSXZKRaoBsxaxfR5nqmYLC",
  "key34": "3e2kDmq2MzxTfHE3ZQbL4n5hGHbqiRHB8tn9ezeWXYfArnSEpx5xawMac7b7PC1TN4D5Pc7ybYcVTtWAc4wZNkaK",
  "key35": "7ZinN7TB7afXeHF5gYjphVRa7J5D63ghExWtudroaPfF5fiKQ7QNqVo4VAZR6jkTnyN1WwfDQCBGC4VhapaUdv6",
  "key36": "5uSdfMdykPXx2TMh4V8vqbEH7CgVLBpAhTmj54EMLR2RxVZnLLU42qYKnRKKzuWXxbaNRiNhJhzDDp478mfyu281",
  "key37": "5eaT8FXas33buFAYfvdYnpjAiRwiLdnHkZpqmEpC5PubGqCP8hSqs71icNTFEj4UiL3Z1yG5iDCTGMvyGCs2xyfR"
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
