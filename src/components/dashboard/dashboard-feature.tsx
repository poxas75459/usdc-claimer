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
    "5kie7M9u7uV1raHGpt8zmwo1s2mnKtA88JNfMmyfCKqakemi21LLUaEGB6VqubGH7vZBLPA6agbi5AKumVfdPRVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53iwMr7snqNi2PbhSdF6NXJWL6u2r3f31QVgAxkgk4GApM8271XpRQxb9JCMo57LoBsQ4oL5S4uWzDeendsMx3sy",
  "key1": "ra5gVUkt7eiw6QpYsuMaoXzPY563LFc4qNeahi1xjoN628J2PcvP5tqt85PQ3Sz3BoC9SVKVVRa1WRPbHGEbSR6",
  "key2": "o55rR1DZKVy4Qhphc7fDR2eokp9xVHSnMHWwxbAezbbgaaNpUen7S7K3xgBpocZ1VtPLi2UHgFN4XifFFKTcEwd",
  "key3": "25eF3bPWoyrsKxCTe1Uz43HLHpiYLL8REFjGvqeqgnEMdcWswtTLdG58p363RyRV9rL3GZo6o87TCp3oVhHGuPWM",
  "key4": "4znaGqfku8Qc3tZNpH4mchDuRMC8cdthpn8ZpS8VebUwZEg3ceMGScJRSje4HsjtBruEz1ymtQy4fvr1i3GzhcFi",
  "key5": "qsWaDbChqwesXQ9AN8Zn3oSJCUQu6T71iRfg6yXfqLcqhhAG6XcUahGQocH9Qy8yPQ6d4kQqKnJg69gc6zDRi66",
  "key6": "agZS84QcgKaCdQ5tExnPxjQWR3fL4oLudxfcMoyqvegZKwd3kzJLNGGxv5R1Hu6zsbwUhUbX54J4Q8BcMhPwdFw",
  "key7": "3f8FyQNbg1Nuu3DmyoLzexDJVdMSHcSo6o9ts3CiLcfeHe4PHYe5zMhA8r9qtxU3Us4v7YkdHTN8txTBJrXAkosL",
  "key8": "88KbmH4qaUgtkHvLyRrLTGm3K66rGYv7XqrPSRcDDA1KpV43KuPRT4Vkr8vAqHJdd5oi9pkpK8wb7amgYQSfMJ5",
  "key9": "Zmrc3fmo5dz5i9dUtCDNdreSX1yN8rD5rrXM4UBemyy4i9nENsSCP8KqGb6hatmMmWGzwg4SwGQsWJbCdTryzvd",
  "key10": "3AcmaCzGdgpAxbAkZqoboZzMwFvGmYF5SmUC14W9HJBZi2aPo9qcfXRAZePEMwHJmvgYCAyNKan4e5ywJvemqmo3",
  "key11": "5LSJXPDoBUvUWregjKnqLNvGoEo4xZEo9GHTMrMiuASRLzECkAGXWq4qGmHmgLT39GHmmTrtzu8aoZkxEAHZo7Wa",
  "key12": "4Pdox9QA9wcbUqLzdPF5ntAaD2pTFqqSMFyycZWoyv75hyFgQzDkzDKchyhwCkxKHpYoK7GviUQdJ62L5K3GVF8s",
  "key13": "3vMViyuHMqTAK4nar6k43QvkgtGvwbmNPYQeGzKFcCyWjVuMc7hM1EFdRk21Zf81aayepzdaXDmvYqXiaSF4vPUg",
  "key14": "5tNAsiicZ5GwPtjLHz97ibPBGKE9bRBxKxyyJbvqCPQgn2P2tHzpN7EepSjAEoMxvJd9T6ywboYJh3aXNiPs7qZM",
  "key15": "65Yhscx7kcWyMvAcV7zTR8Qsnk8oJdbSf8PiwcX4jAgmfrWYVfLfR2DtWjRHQGsp4oJNEpUtmBgNZeQVMvmqR125",
  "key16": "4dVKeAs1qoXRQVjMa6wFNmPxtEfQU1S4afCRvHUAqHZMkwND7oetw2UvTZ3rUs3MfncaeJFnkqq6EQTGsmhnZRu8",
  "key17": "MmXqEcpAcZtfyArPGSZ7M86QaJLFrfvatdLu7xrzPytZPBDN5rkUz7QWNkeHbPusZfVgmtcQrovnfMKLCjnvdFk",
  "key18": "4y7tpynWYVDctcdtXXV6MyNpeRSRHAXRGCRKuhCAs8UQAgUkVF3WhVJShz1CooK4CxQDADzgskCZRjvuz198Kyp3",
  "key19": "3fppv4mGP2XCKZrcjJFQo5JCvsriAgJdaKK8WAyXvV763zSNqyw5NjC9VSdKYxEub5eEtSbK7FhebL5JXZ6y1Pu1",
  "key20": "H99q94DswSa2kXfTntEx87DNJZZhd7dxtLAxiSNqkUTiAfSgSP9wLLabBeGEVSWjNLkt3Y8aUrjAC6gyBwJ9h1B",
  "key21": "2d3nUDRS2CndfyQJprHGRq3PhAJyjywfuq6o3otUMk8681RHDfnX1q8aE8862rH7tY4RD4CAbiaP1UD21vkEHvtM",
  "key22": "4fchvLLjJF2vnGY5dyPPiaeV9CF56edmCsdxHrzdcfFtYTmXsV5CDs8vFbXWN4ViyvcBFRAq8C24eZVJ9QZ1MDi2",
  "key23": "5sRoSVHQBtd7D3Wc1yMnNnoXXXAL615mifSisS5aFTeFxigKHxYZcqsGyxVYjEKq4kZait54F7zpSr3BzCRcs92d",
  "key24": "2hUXQ2bMFQ3RhauqjWhxqWLi4Q2aFXRrz4rMekrhr8vjtEJg4eitfdn9pbwAkwpjJx15gtR7drPqCVAFECj6oATE",
  "key25": "49ymYjYF8iSpgMdDFxY79UPjfqmiwYKw6a98FAksM8BYVV19GNuF6bcZiJtrVwafqqaHs1BwuxtFiv6jeYhXu4or",
  "key26": "3sAonTCptTiB8XFDWVHLYaigWQjLqzKnYhAmxiGWA71wm2d7V8JJZonrTzjwLTZCzPV4idnswVMbaBZpz9gVVbAf",
  "key27": "3muf2QCASw6dsGwMY9BCrGn1yBJt32s7GoneEyeqTdv7RJWSxSWhUYXJBUmPVrbDj9AVfo4Gxn3Pwd5ofddbyEk7",
  "key28": "3RM337hFRM886bxUM6RMBvARRgKC6qfMfT8M9wG5W8EBpnoi1WZRgbmyW64VnUzaJ8j6yVx7q9GrJgE2hrRYRe2F",
  "key29": "2VeuVRALYeK6EzFk3UsuHKFLUZYesAVDU1LPoLhv4nad169N7J7a8b1w5NdXwVj7QopBUJoQ9ZkjcTsiZqvtuiUs",
  "key30": "4McQ3wkcDVFcq6u7MANvvFfiiCxMkUxFiFN6vJAxbt7hebF8UHx1N4UJTyWpMZStH5qtNkREJtuYFVuuPwtHrm3b",
  "key31": "3Spi1vxnHNXBkhhdme8CEFBxGG4h119L4RQJ6AS9iCGjkQE8665HP22De9FhBseEVpDbyEL1ByMueDp2TGcwgPNj",
  "key32": "3ATcnVHxKLzJ8AT4QrRtnvUKuebiEHKcVgQ6N6R3nFyvfhNvgEisKmvM1AzioFMGQxaQUsB8Erds3YSjSnchZQMD",
  "key33": "3zu5UTeMZ3VT3DuDR8B4Qd7D2yUNTgHbcbwfandiRzhs9ReKy69mgwhQkf8yZkWyJJsmJddxyRusa96cVrdZigbt",
  "key34": "XcYEMSBjowcTA7XT1Zn5Cgzpq4QVdF85opwJ2iKQVd3vhUxezkK7dbjdhJfriuTtj3zmorVqmm8v77ENy87epxv",
  "key35": "3NjCTi4CAh9sN1V8JEQMzmig2ZctmvLcYJvKwphNb53K5u8kdyxWZNiWZn6xfZN23JyvEpdopSsPmy25UXLPn3yt",
  "key36": "4SPFUkTesLSGRkrA1q7YT45Ebhq7egzfcrDXmcEc9jjCsxWXhXMKQFrP8qf8FXL8VGE2KvsZUkMig7esNxJVZEQ8",
  "key37": "4T91iCnuLaRaMk5TDjSAkQscrzQCRwjz3phQ7CtyPxmf2a9zrhsFvXsaxQQW8v1QGnGiAcLptFoi1GJq4UGXKDss",
  "key38": "3bnkVo7qLjoyjw1u2UmCT5ecgiJHGbH6dGHErjA5aDiZHJ2idGiU2e6q3SzTz3Wmjgp9RvWR2ZzpUZP17Xwzgora"
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
