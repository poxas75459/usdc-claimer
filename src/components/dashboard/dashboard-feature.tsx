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
    "2StsYaFPHBRNVDMrgVZF5mVDFv6sUj5LWqyFZv3pb1u97covmBU3JSgDuPtgdAGdamUV1HHBG4i83QQi7T6HJYz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jvNsdT4eGUGAChD3GhKStr2E4QB7xJhhMKT8AJSrxuzPC6gqbNEDjTm7aw3kGemoaxkBD8kowqxPLT7S7KwS1m1",
  "key1": "4K6z7kBqDbAo1rWVHALih5mSTrAqjnYoAvzPLne74cBr56LwFhq6FYWThyvSwRkCQEMELrqEA3hjXv5NgTtc541M",
  "key2": "4iGGAUdpzYANjarjYP4ZGW2VyP71LG7k83XXLyipbs2PhKe9dKkACQCRQvqCZe42n3XsHZwFisVCUUvbT95dcwfw",
  "key3": "5na7vLdVfSFchEzqpBkSRWw5NmrVTTnQwHnDMbZC2sRhnWN9MNQEqkycxYniXXb3qWp3jYvNdfT3m4egSfoSoK9z",
  "key4": "rD98aBknKo71RZ8v1ZvQLEJAYwyAR4HGHbESN5vWAoEtrVFLsPLzBcwMfxxR62MG4PR9wkrFY49dm5U4NuZdouZ",
  "key5": "2kExq9W3v3xkgN8u8FFD3VkVY21Lt8Krvy4UE6KtLeCdhoaQ5Qi5PPnKy4nwFg7C6oMsekcEdSWWXSXK92JMRn4y",
  "key6": "5idv1c1Af3o5C3kZJfLztyQad79yQEU8xxXCDFvgHwtH2CBHCRu51eS3W8ZFnquDnq1buv9fduLXiQZk79KVyhvn",
  "key7": "D7NRvejuN6sQsdEuESiPrLr66qAUks9kAhwLJPEnphJfwaA7tDRS9WZyMxShjwtqtGsAQbF1C7s7kETCGjaSqfw",
  "key8": "D9DnSZs2ULxj8USNEMTAEypjGDW815yMAtmirjU4k7sxH1G4YA19isgbFQjo1zddQeYCby2Mhwkdqn5e1qK6aRU",
  "key9": "2cRYsNWdCpLvBMTakGRGfd6zV1eeA4HXowKjDi7xCcMuFociXCatnwkUnB6CCizgo75vKac4NUX6EEhYYSEZabY7",
  "key10": "2wbHgtVUC8jVZjH4ePgx8GAKgZMaVgxmYEmevHf6vRYV6aTpcCpzpwi7ez2aAeiRFWWEUcHx1WkBiN2JWeyw1bJm",
  "key11": "4ME7A6RhywpZPaKAyzCZX9p2b6gVzPmoZ1rpBAWyGVkRmm2xD59UbDk1qTtTjSC7JMSMcM9h6kbpmSPBYKk9z5RZ",
  "key12": "516d7sVmmfobgB5oibHMNV3jyMuMH3hAoVD2Y1Xnfzp2dMoHGXWVobBkBW6p2a86LsQ3G9iW4NXJmTW8YhHHKGEN",
  "key13": "Pjz5CpmaUo2noyjSFSqC1qPBt3Pe4o5H3wTn8sbBzzGBA1gPWBGCWvaz67LPk93JPfKdHwJfX9VCAw4Uno16GUe",
  "key14": "mBF5AKvcqXWsfQSjHpSfbbTVKnEVyg7Yp7QisydPMkRwNbZUHRmgfMDXmhtDzCZpincQUBjpjk4ntEcScKLeHuS",
  "key15": "26iKFYewXZx2nmRiqJ4TMewFaFTh4kBTq9kKk8Q1wAqa8uT4cwv6jKiGbp1z2G2vqHWRfZ8ZfSNUxcymH82rUX1m",
  "key16": "2JepwKSfdQeJHQUHLJCGC3vbq7Y3ucbuhXYw2JT8wkMfSoKyT6DkDkYkLKjeA5ngQhMrjkZDBzVAvFcN6f9UGGqi",
  "key17": "5x5sbx4f51m7ajL2pC9SgLgvSx82KpVPLX64amP6qwfzAz6xUE3jASi45UtLQ7imHU1CuKKvwdBUAzZjH7LHL3JW",
  "key18": "2SaZzLRcFZbRRJXewwX2R8LFRmzuCeYzmZdZUqQ3Dvf2mx9uWM3QTumYvwaBhXi6EACqTFt78wedJrdZkdsDhwBU",
  "key19": "4HoUo3TAKcYqYv3FZKNoa5sCZFekCSt3qVvjwh4TaZ1MZpdMZ1dvMCGzByUqLtRTHiZnMEEdYjrXbsZPVyBAiPeL",
  "key20": "2J5uHNqzpDTqj8Rzn9Ygj5eBKDhr2bqqfWHAtbps6zJHJVti1P8MJyJB5AfdGYK9upC7r69R47VmmnzMYBjZTsTV",
  "key21": "3qYnPfhq2SK7HHB4RcsyvLtbh3bRrTrwjstfuHSceCvGXRmaUhcjfWDMutHNzSazyjjegQjHVCufVUYk9hmiGbNx",
  "key22": "MfjsuQ4nmEkDjkVYP62LvdQDkKnMDCBmeHkCCiEKb7DskQDPjwnm87N6qW6L5WgoNmRcUxfdXtYkSRmGs4KoKDS",
  "key23": "4REsdmY78RNxDMVftZ25ty1XmKEjTT2hfTPp7DoShavjRvtC6zL7FuCiR9GkSFGYQgmzFTTdb3iWikHqTQdHHs2b",
  "key24": "39BDvZ4XipaniuDh8hLDxHqpCJE9fddV8NxcLcMsZViYcLT6fQbnoTZGLoFnqKCeh892C5y8GL54gsBQRnN4JXNa",
  "key25": "47NvJbwPiEwqowEWtLSge54Zrkp5Mdinfen5it18aJxD6eoo5wBtfFPBhRWMgnFMLkZ2JRwgUJgC9zHF1DChnLos",
  "key26": "5cZ2DfnwcSbNKkAd49mNoD2ZzUA1RXEqFDnxFgBjSifyw9SbDQdCpDcD2GbG1k2hhazfoZEwq3ajukvYv5RWrBxW",
  "key27": "2LPR9YvCh2SL28WZwPMHV6EbEP7L3PYRQ89qhTs4ZDfnBUSMvos2Gb33W3GeYcgDrNxQftpZuQjuSZM6zoT1Daoh",
  "key28": "4zT6tBcmQATTiuEJHxiHFF4zo25aiLJrkWeSzr2LXtRo3UT32VQwEkoo4WePM4zzGt6LvTFQknUYMT1JSVJyu2pL",
  "key29": "2FsSfbThDBoouvktDKhKW2PnJPVQoJULciN5Y3VckCmFMi6HyHGnDw1CTaESevjR4VctjPH2NzaQrxPi8ixpx4ff",
  "key30": "52Jee9ksSpBCxLQ1LLjDeCi19cYZUQLmhbhYS6wLRRKUvivs7Qwnc6DPqjWYFJ1w6nq4dtjJ7EouRLBay9Zrv3P5",
  "key31": "5Q5DST3A7pLa1cFKihb3fmsoBGCGs5ccdZabEyjKAAckYXPQsmaVuVwAPzsFU24Lw1fBwq8A3Wuo8seWqv4RneR4",
  "key32": "5bXjeGnamPzPNLVG7kucqGCHqwuZVraiqvMmGEPp15nGoLxdADS3QyyUFwYG9MExXCAb5Knkdo91PQgULT1Th5BP",
  "key33": "26mNhFYDSaLGADeVwiFwNevr4dBF23XReUmvtvzA6pKrrPzUgq51jKiRakGxaxKT1ob1dLAeQQvVSLWP4F7cy2yx",
  "key34": "JrpTxJZNjdf1P6X5nMHs2kffvP7uazJpDrBhvErFTeQfezbEDAok9fgZMxRGuncK4ApSrtDWr5rRMGxajckbkdj",
  "key35": "2RkJP5hH8dS8B84GZNuQkXE1923cgwxncGp777D5ABNvA7CY6EPjhDyH3y8KXHem6fe2bo7gXaWXnxZa7LwLpdhC",
  "key36": "2ziP9VzVjTkCnL6yFj6fQAghXTwbNkdej5E6kPNjzAEBZT1LT5NCNEDigXAbjYRbZaSqeFSffXp9pMVFA2e8FncF",
  "key37": "xLfEDZ1qETyCZBjq38BD25wjmA6KN3nAFjRqysz91ijMVUikVabjE8WMVCqtEt81Eme16W7gXje2JYaqxssVZJq",
  "key38": "32CT4KzrjasckNQdDFeL7DDLUHA1YedRTromvR8da7PLTYkfFRLpZ8r2KEEZH4giYmFBWe76xeX2vWJ2yDR3kFG",
  "key39": "44yN5ZLQkdBMCFMx34qGQ7winTUAs2ZEV8GQv1SougWw8Z99XesbJBFFaEJhYtpSu1wCjJy5oaSjEkrdmiF9vDFi",
  "key40": "2HzBWrwxHLEMNi3uUDJ3xBNXxnhcoj5m2Nfd53E3hkNhqydwzaeH13rFYfUfhYkzJsV6xuwZScK3i9GESAvXtpiN",
  "key41": "4FtCV8omjRAezGrHys5HHPrFnGKRCECgdqqab1gP8m5Ay75psqUDqBXjtGpHUTiSbEUEJb3ZPtugnGy1ZkyMYHD8",
  "key42": "Bcxu297kurF5iP4ABfbKPARQF5tcujroJJYctoxYH1zgSNtQFi9F4HbAptVMLfkmmGEtdTCJ8ow8iH37Ryz5Tfj",
  "key43": "41hbzcXrzwGw8NqZ6bBDyBExcatf2sBDdFBqYgCrnkW4sYnp6WtdT5eMxDamvSGTrpNe19EfLnvZRbvrz87vTPJf",
  "key44": "2x88oigmz5pERxBZ7cDk2tXF6eCU9ZpgBF6AR7sZC6R75kXe2z8b1WcnC7eGfMqnWbY55javtMHEM83KkKPGFQSH"
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
