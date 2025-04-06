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
    "2cZnvzj2T78uk9qDyPAZbZmPzXmXGQCrEGgJxNjJcPrW3UHDdQRsYBe4guBKd4TdQntzDHVEV329LAt1gxdEcW6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QPhHgjuMGWyHHxixEznRRQX16N5GUvXQdn5iQRDRwnYnGCR1KY8USwCStjVHTznprFfRvzQeMsJAHSUwkywyTTR",
  "key1": "5kUJWTC9JCNSaHNHutP3GPP3hafpLkP8fKR9P8C1StKQPtTjwpMg6qsogcVMieJr3YzKkQjLKHCvF5p8E4mZ4mwS",
  "key2": "4yhzmmuBMzAVqT9NFqs8LCDwKQE2j5zAuVuYxD1ThrcxeRnsdczPpxSPajVJL6ihMV6vQSzyBRDA7XRKB6D8kjoC",
  "key3": "5Hj7xgAo6dDcHYUxKpjxgj3u8QVjoTvy5LDvEwCFQvWoe4RLjYcHtkJniLQ3epETXif49zvsBQDiPQj4qGi3YmVY",
  "key4": "2vRQc4qCipo1K6QnKNhBs22XkxwGGoDPfN6PiqgUWY76zAQDQcK8rCoDJdiNi3X61KYCrxP6Lf69qnpMkLxjvA41",
  "key5": "4bSdN7Ln18r7ZqiN635EZLQpNWMWZfYpt2WxCVqM6XQNQqgqJfbPEwE1NqQEEswJkpkyp5A5Yxh3uAMNpoxi9nEz",
  "key6": "4qfxykxbLWHBsbmbNTxhqPe9t1Qi757yG8MSpXzCo6ZxU8FJ1ho2yTCBovrya8PJsEd1iWsZb15ox2xXVLfuCpuV",
  "key7": "5cjUJ1pxjEu5WK23Mnj38ttZhijZmSCneSCh3adrQQtikBufXoKwnGttedxipPWGsvSfPXSnXmHRsvS3A2wLnkQL",
  "key8": "3ffXLRM7TyMWGbWc3uAxYUu8f5umfvFA8wt9GSiWxfNvoJNGNwmWarJrGFUMAaNgeUUb6Qd8TNu4UFgnsRqo5nMM",
  "key9": "4MoUWNA7sWouECyULjAftYGAeYcsAZtKD36NK63Kt7qXuXasdFRQem3PTzrj5oLs2EsTTrY8MZeP4SiCtmvNEsYo",
  "key10": "41SPhgRqDPU8owjzoYHrfNUg573ZidDw3AyZrHdEeb86mpnTRAQTxffHYMPui3KRmvUpVgdtABGmCVFd4Dods5wJ",
  "key11": "YEP8w8BizHqAhyxFXy37wCiwWazsJxyJYsgCstMAFAWrj9frP68Egsjxct9bPkPopWvSVY4kJCuxFWBzErF6qeV",
  "key12": "5grZLSTrd8ZuCjcMAfDvnK7PsHpMHwM9ukGsU2DYk9QFdYmPYqToxyJ4fmBJ2afJpRA1MzAwFQ4M2izoBeVapvRj",
  "key13": "42jaJdWNbELxjrvAzGaMuRyAsLEbkHBBZKrYe9vc8zYCbcQ59c36e338B8HGjY3NQMqgQ28bsFEwRgC69FgPAPph",
  "key14": "36ZXbH55qnXvkN3TaFiC8kQ5HBdWy3AsRBdUQSt3kSAZ5QbxfhECSUJjinhCkcR6Aw3R5fMVfSgHLfqyde46QmEK",
  "key15": "3cTjTCUbMCErAdQmeKP5WaCpNHfSGgQg81gspTtHz6xKeU6jE5y96qq6SJZbY7eHy9VhMyVdKPBn1yyHur1YUAWX",
  "key16": "3A9zYg7AXczGGBxi3vUtt744WKcQVNM96B1ewZr3NREGLgD9XzqkuYuH4gXDBbC7di4YrExU72f6XyjXQVkbm1Fc",
  "key17": "4fvDxykqFZt4QDyXotU71PDZ5euYcwRmV4ZCaUKcs7wLunazQGQptgo4BAkCi8YbDyvhad9JNjKn3956aRyj31H6",
  "key18": "5nEiwrr6bBaP7SyJ3Vu67DcxexBQ2Zw5qfkRNfSyRrHL9PhWjBST66fZT13PShrY4BDRFzPEFmwJ7NKVdQsm6BqL",
  "key19": "5hPAExxboDEhsyuB2HDiZKiHyzGWtr2zGrRHx1c95MpFpzHK8tkmwAjfAzDXHf1A9hpPKBonNWD6K24kweRNsqCj",
  "key20": "3KvyxbTcKp14rqwWg7uMyBw2bne6U6XY4qSq3qy6XvbXCWC6dvhaSXfTyh3eftiHazxUjEdzfAceP2Tnnk39iQJv",
  "key21": "48rfSZkMNJMmS8DECj9HdpU6DGXE9mvseVDjkZLarhYcEc9tEvPupy3c1CZzrBHxwP7X4BBJg9Bcu2Ss4RE9Nkzs",
  "key22": "2pt5LrajAq2UxwH94C6RedjccjdyHB4fwJkbJuiV1Eo4WNCH6qUja9UDKk2byjT4A2VEJ4X3XjbzZYhutiEyQMNn",
  "key23": "441hu6xFNet8wSiAhmLBtoNn2PciFLBxtJb4deoQx3joYo5Z8yjLFnuy6uG82twTHLwwdbGLwms1WJMpDYLM3N2h",
  "key24": "5pFR5G4iE35GnAeXgK9M9SyUb5JSpi17w8v8wnAZcEt8RsGev3sSJis8hDXQxpEaAC9gnRGoXTKgWYSEUbWQNJV3",
  "key25": "2S1QKZ9Kcx17QV2T5vX1FWAh1FvGaKzCipc6pCs1bJ8UxpHf7PUnJLc8S64k5MUtpMGHV9jgMD45KTjFP9NRpZtd",
  "key26": "59zBUJGJxfQqWTjVMjyrZ8uwCGuWkank16gZ4ciewTeacn7pXzANC1xctHbTFQ6SPLtN5bTdZA9HeumXsDWSRxo5",
  "key27": "5EtbcPkie5Q3qUsue44pKA6SJ7JBENcrMqL9zddNHPPne3D1Ym71pvipSjNvvaYZCRr9w7eJWX1SXw651eZAtGXY",
  "key28": "5SRfcVMdAJB4tRJcAtLfxHSNJT6tzAzYVRzNgLWMGZJ54YwThPNmgKi62MEGazENW8TEoxU8Mm7Sz4dbcGMaFBYR",
  "key29": "5AsjFaBLFsGRsHXvtqgfwitpJ172P1kdq4bbiw2SSJsmtpQT6poEdgsf6hpBuwx6eNfzByniRnYsFizMTvj4SL9Q",
  "key30": "5MEaTB7mMpKCEV6SYejbEZu8z3hZUb4edVEKfUwsRnUYpFXCUDg9MGZkCJXMhfEM3kQuCqeRLZvvEJyFCoWauuE7",
  "key31": "5zoUdtSzVfnqaukUUQpqV48vrAw5X48D31eANjiSHwh5xdRK6mJnskEefsh2Rb7sNoSFq83NkqX7jFGDwMT3SxXe",
  "key32": "pFrjPCmCEcbUhcyCTJRzVwcfufQF76p4QX1MUXBp6Ah786uhg39RiU7T5CwsyWGre87d1gxTish3T1QHpfyAnga",
  "key33": "64g916SA2xXjbXifFqRZ5YraWrKhjK6ANTMPhMVuB2veAHoHXb7tzRY2QnvB7hFXFiFLJYNiVhHA3pmWRpnQCyvA"
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
