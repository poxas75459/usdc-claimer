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
    "3SaSKc2pFYbMcnDTPcfFG1FnFMFK9KQWN8uGuBbVkxUfEYjVpn5PYtESXmragLPbkus9WF2FYCGvkXdPs7u1GzvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BhXxARKuQe1Ep1bpVcj5btt3TfP7hJ8APCsgUUZQBjdQnmZDxP8kstMiTQLqPECCfjZdwRbj4BDcwiiJW1YEAzr",
  "key1": "2bVaY6YBuDX4xFywJkhCXoukBfAcaErmPDRAyyS8rSoQRWxmySgo2Rwug1zqipvS5Tc1T9JxU8HkPsFbyLQFyKL3",
  "key2": "uHq2ipGbMj15TfwaXj9gt2YTP83iEmAsBMzU27LS9TrYZftkWbqaqFxC2hiC3HPfdT6WnAjJFv5JzxEUfs54Dvs",
  "key3": "4k4KhDMFqtemh5kxT1pWyBjZq6hMx83vQCZBJeDLxAX4R2RjbCk4KDQFFYhtvu951tbXcqpWiCFENuEGMMNuxWHv",
  "key4": "2JFuTQXrQhKEfGNVfy6LGHmi3BGaXTaNagyQpS883Zjq7ppsg5p5SMtTiFSQW7zMYMBVZSoeQCnvCju5j4Rq3v3N",
  "key5": "4bdDE2qBmG42K48kka2B9NbszVMvwRzqBN1kqjmQLdXLV6NLgcASjnYyUaKp7VFjaeQGwjgJYqTkgbxQgRd48o1f",
  "key6": "5p6qrBLTmXXafByKPGYqobnFuEUZrryXg3qdZZ3ce1gUhuupy18sfik8Uk2b6uVKeezNYM9e4PA9Lu2e8DzG45eV",
  "key7": "szTzxXA5F1NuA4L8m6JyWqEbQJtEoTgh3opyhThYgJeQWKGiS833rRDb3Tur83cTc7iJZ3jkKrr32C1TDHUeALz",
  "key8": "5qpmmSJgZJ4eYCTbhm8Jivao8AByqMNEupC7iC1B2pejpb2iwqqddSMCEorGpbbSvN9Fa7yZtnsbSHVU96M2FhQW",
  "key9": "4jYWbaoH9ZMwuLZPgA47kPZCA1ow1NyVijB7rZj7yBTDnFWZSVMpkgT5FK2G5PfckwntE75ATWD4dhpQZw6jwSQu",
  "key10": "5NkEWTLv67PUjkwWFEWBPDo88iwVFpbguUcq9nL8bEYxscf7ipjPYBpDmjHnBVjCA5h2NknirFS9tUfwGDh7P46d",
  "key11": "2de7dUxVxmbCfsnxegas6yvyaT8iWU1GirthDqBq1kXkLCHGLhxXb5LpEqosH2BduUPar5Uc1ceHRxGCAqUq1Tzj",
  "key12": "2JQWFRU2HAvvCxD1hH3oGKK5ToVewFPxu7mdJ7WJGKhq834i8iXLhTjDfXm1d3r1QHa3WN7ejEZpVTdNAxLFrSxP",
  "key13": "m7KUfGpao2yzZJsuKdvYw9brzGdNrdD4hD8bWdBLa9KDuKuybQAiwjp7WgvWCCmn9enwtaEY8wUGt12omU1ZSCR",
  "key14": "4n7f56dtcNoM6aXGFPbC77jS253pGtyrLKX6ZFFtnBVYiF4xQVGDx5kLb1cYavwaX5gcdzNzCxTVaTt5jzvEE8Di",
  "key15": "2JfW9Y86LbDV11wQSJzGzYEnN2zbZbddAHNKraCzhKND4stwDfGYQBdcR1z13xc37iaymYdzYqvu2u2XeXwJVBVv",
  "key16": "3ag3cT2nG8euMemj5wSumLtiZRdTWrYKgQTh1BgqNwTutwB4xMo5zVkJUKXc1eiT7y5G1kRjyDBYAnkpJ8Lq49mj",
  "key17": "4pb2LqEToZKuLyCi5XhPhC1avmcyrXid97R1ZF92CQcF7t9erUvwTXgHUHvwm2H8MUY4YjzytK3tu8HtJs5EgfDT",
  "key18": "HmFMcK1rUiovWisJy5uvooiH6G95LUTyQyupr1rEik4JTm5jraCEL7Ef4QWSVRLouNPquLZ4tttrqbtr9grREZk",
  "key19": "2BLdQmTyjpsiWbsPJx9K1241Y7f9w1gMPr6deA1dCgrRuXnpVbdNHWFFbd63YkGcThde6VwYDdUMXhkT8rSpkTy5",
  "key20": "34u4z76QoCfv6af8G6ZD6JuddXgmVR1pZH1wRWEXAEodPzk9YKG2qtDo7gH2qVXcccWQziNvRZ48qc71WBmBoQit",
  "key21": "4VftVajJ53XgRDcSecqJRn8UxGxrgoMWA8QUeMXDfpVoS5WPXsxFoNxrZBWEoRjXdvH7FTCpDczbMjMwkjgbGWMQ",
  "key22": "46zJE9QedPZKB18zAWjZG7FJ29PWs5SukqtwUtgZj8pLgPdyhnKDLewrF2BxE63Z9LxeJwd1jbHmFRqKhNojWYUa",
  "key23": "28khMGyiEkCgkSJfp8gxfYz8UJAh4nWu1oAZ3ecYFG9wkztnJnWASTaNNPhT2M7cfi9boD2ZZYqE1obbE1UyFfB3",
  "key24": "5rKSrYeRYK5GWQuupiWyiqSHk4Jo1hpQ8XyKZLbBCMuKXh1LAgcvfoCbGzXtU8CuRexfpocRRukYdG98MBfvM7Tg",
  "key25": "4wu4UQpLxz5vf99pt9tJRYRZTQGYY31mphPZvGa4SxCCimMfxt42xRBZzc1zrazZAFmV4N5vDhSZtk3UXJ3CY7Ez",
  "key26": "4sXUtUkw4KW9ChsN6vWBYR4NiJfK45gaqkYwSFju2MJrpncT39JqzRPdNeNxrYgeAvtwBRyHZxtnhw8QDbtRZ4Xv",
  "key27": "arL6xNvknwx2PpfrVLqfHCmxMoxqrkRk7XjhYcUUh2FGK8zyBZYwzK1Pxa8HaZZS8es3FUiNEZAu7prePzgRvvj",
  "key28": "5GWXPvDCZvExyYsLwF3iUmj2UAgeF7zWHpPsYfJT917RwQXJFXZ4r3ZaSRP93ciP7n21mPRA8LpqqyW4CNKhb9hi",
  "key29": "58KsbxvoAfoMPSNDT52U8X2mEBuudTsmr6YRTDRryi2A2tNxFEKJYQbEvsdA24EWT6HGan8wFx2XMmZzbRrkUFz3",
  "key30": "4UgxFU4uMB8JyTjXQSe8rvccfcNTPPkZRPdBq72Pgbm8eMnYiJn2Vou5ErnVRx8RRxkXnpP7EjWWEgxLQT2xai7v",
  "key31": "32a4A1TFpds1n5ybE46gymnXfnD1yCdTAVLKH4coR3EQYxRkcoMbX2FvFgALd95TtPfEfw18LJJQRy2tPzRqPFH9",
  "key32": "3dx7Lj3r8CqXSjJMuggxA96QY9KMwR4GmbP83H4UFWNDBxPc5f3BxYaQYYuQPyNa31RWBDgDZKS5E72E4oH7v5Ey",
  "key33": "2EJfYPPvEDei1P9KjVfBfQBvBmBXPVZx6iKznWXE1MBRmC1a4vmYCrPSWCT38xxfbvEp2Vd3BrxFBCUoaBk7Cyhj",
  "key34": "2viSMtM4TedLUwTvDsW3hVNKvb89yXBqVZVv6oHkcQ5SbHU2e7dT8KZWbgW4P71jw2debcGUEAvPRegwB1KBRiC9",
  "key35": "3UxCG8fA6nFurGez5Htof3qh68vyXKPDJWgHAaCMDbXGskYQvqovyUXXoGBHhW2VGzEY3TbD95Czk62QYiaGYzAZ",
  "key36": "27HXmVKtGgU2fDvWyzd1DfwWAMNramTnCANsMXBDnZJcQmCiWiSkZMPhcfFaewPGiySySJTf754vAky6DAyvaBpT",
  "key37": "uReMfouYDKvmrSFLtULrN6J2EskcZfXPZZq41WZzZW26a7YWmFamv5gETogYAKdpC7aN9cdfA1dvS8345NJFg8D",
  "key38": "sGidKAm8yaRpZ9qcLPY3dqcb43J9QMxHJkWDUSzKGHrg63r6FSe1YZACBARLcmHeYss83WXcS5NdjeDgqjSGsaZ",
  "key39": "Bsyjj3g3KmC3B9jXZqWjRCrmRaFNnhNqMoQYQFS2LApEcEp7mQF418jFfQDLpYAfHKMGD7xX6NKr15qaNnQMe3v",
  "key40": "w9WNUwZxMH2ZtBPbwv9VaYKrzpfh4m7euRc7aYGWGe6PK4mioYaynMSVCTNpF7tjzPwBcSbS8pKo42V2YQ4nBc1",
  "key41": "3oHwF69HJ5DNx4U8HhG5SgYNQCTidNEXFTSiu3jKcr71JUCsVS13Lu6Fgs5ue7g5P7YB8vFR6CwFNu9peB5Nk91H",
  "key42": "4RLxNchMNVHayBzLduCgBFLmv1qhxzddFEfYNTCKqzGLfMQ9EJGEdHq7VZTRk8vGQMy62aNVsyaQZsKoK9AeAVbq",
  "key43": "2R5qqsuD7t1Lq1MW4HMK35GrLJTepjeGFTYnv8utcgKBL7rnqPub9ARK3BiXLsnTyvbk8LbTKcqZ7g1HUxkq3AU"
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
