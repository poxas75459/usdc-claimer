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
    "2vn1TmerN27XidMKryoPTd13yhYrgLi2hN7jrNr19vWo1dBX9BvQckKSNWsfqnyu1MAJfSP7TwLXi34KYYSWZq65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e6mSDPovcSRgY9BwNaPry1VU8XjyeES7EPgoxiviV79csX1Pyud1RXuYjfrouethoSHwVth2vvijtJyQ89JRfWG",
  "key1": "gUpuSPnwHJsMHxe2sVb5SLDPWsKqTAE6kQEau6J5XKmFv9ApdacjHKi3yVUSBDaqP5h3N11XXNcW8Rfy4NqEZaE",
  "key2": "3wacYpouSJW2m1qXQWRqiFf6rmvrTcVTiXhznhPFc9YUw6Qoq9X58XEc9gLP9FWgX6k4jumXrmrjMMsr8Y1m34T4",
  "key3": "Y47kkiJvpYZvVAqYbP1brPSBx772QFA4vZrhK9X4Up8bN23mAZXbbo7A9cyrRtgzJiDWSLML71giH7ZN5v92QEQ",
  "key4": "2LGEVJFKaDmTmdbwugMf9nn2jMU5zEJGgUNV9YtwQVNmZg47aXxRVBAXdMjTc4DTNvwiMZhXbPQRGKMFsMbUCefo",
  "key5": "4mHt69QU23pUL84BzCRDCH42qrmkPETnA545v4bVAhjPND8W26RajoammdzDezxSoLKcLsYT62WrnMmZA6bifhnt",
  "key6": "2tiGmL5LQ51FhmwRptPYCmYAuSjeGVWFtcJvSPwxtVkDJ3RcLGwwgbA4HdQhpuckYBYfkdssrSXVqdQ4DC4KXEp7",
  "key7": "JKAvyccL6pcYWPAyZCAN5WLCjACr3siZP1tqLjSown6sqk78tz8tTGoMfaF67zuvfb4VPn5yvMbkKFYf4D23t7g",
  "key8": "3i9FV1VEaWARn4Hk9x8J73i1uowkbySdExCu3Qn4gedZfzYe6imQL73AkUHKXHLK5GM8w6HfDb9ZXpsjWFTvDPp7",
  "key9": "3V3RP9znJ46fvKhHXe7c84A66x33y3jkptGNXGXXAEKzcJeB4hMWCLRFker87TmtNcSJmAhyo1H2Jj2oY6Bud3nc",
  "key10": "2XeXa7bhGc4ESPp2ciMVR1KsQLh6R35F2njPpqUATbKiLCLMV21gaoiZmgF7dcBqBVwtLGT8PAQgg9rhvmGDNmgi",
  "key11": "3A5YryEjHAVvKHUn9JXHV5TYjCagc2UbzHXmA4YDgaCK8fezefPhrz5up9MpxaimZeP4sfygFfJRZvoi4UKPASNZ",
  "key12": "3GZk6pXTjzFjFDkooSMuQy6KUv9e947AJLPkUgACzY1WnzKZ3XyUSg2xeK9vVHLdpfGiPgJ1xsA45g3MuBrqfqBp",
  "key13": "2VFi8X1hDhSwuzGpS97x9jDrU4oJYSfH5gdsunjDCFhYDrzfpnYUAUdvHKG83uZdp8YWU2Srw7CT4uJ8Gb3UoXkZ",
  "key14": "4Ti9LeN3FG9Fj6NWjj6LDT2i68KFof3URi43dwvFnSnLHSm1bA3VWbCkUiRZPF8bmcHqT3mdgbddgu1eLEVBdpCf",
  "key15": "JC4RnjFdfqnsqUtziSCjwKpff2MkKCDXrhYeU4EnmUU3gBxqaQbD7t8RckChCVWPaMj649nBKfQSEC4M4o8orxH",
  "key16": "mzyTao8efvS6mATiDCX3mMjCvsobM77GJmS19EYsn2zgoVnJ68wLXJpyyntmDaJt6MYUs7yXhM3E5ZyYoQvCJUT",
  "key17": "43YFgmPEeBq74vHcZuoDGRsKXYLAA5XQvCwN1FpjT18AWrTx1ZN4nrhExEVqatXPRTQ5H3tTN4m6N2mQSMaLgeyN",
  "key18": "3jDnM2YF1oxfncho1yYCjYsS8prZVo4ScbPESHTQjH227qwMXpAQ5FzsKriS6kzXnZdhP2YCfQRdqYLNYp2coAb9",
  "key19": "5cXZnqFXTG6xCmRvd5DYh7dLhkzWEKdMr2frXT2q4C9Zg4cQiYhhaFLfAYENWD8yigWpxDwnZsPDCPWJDNaApcFt",
  "key20": "4MkCF1HXEmZkwDhimwmVHhXUJUGqfmDWcViNrUm4jYRnaYeRadaGhQpqKvDtwDtpwqWaNXqQizUgTfgZYMaKePVA",
  "key21": "4rJCvwArE1517hieoze3shTZ9aRL4Z1EhB1hVSqzagHcX46PdKsoiFRZQk9gjMSqRDXb66jF9MqNG9k36dqW8BxH",
  "key22": "5Kyu8BydJZk4ygonNhifPXmea5FXPgTbZ2cPPScEveheTwXq7m4obie8SLniU9WU1MMmJ5kCz8if3v8AgkLfjafK",
  "key23": "3RszKosgWe3QbkybNuFSkvQGqQUU78WijodLy3E1epVLW1EpEGcYGGHCPQ2bP3XnXb8f2EbYpv46YRNTJgpmgT9D",
  "key24": "3q3k1ChRyHMnrH7uJp5LtZKPeNM4ffJFAHq4ts2ZV8enEjmnyCMWstnKHokZincyzXcw2X5EN2zEjvG3nUkZVsUh",
  "key25": "2F8ik1CNMufrzsNqjVyfsNFhFTw454DputaBLrw4qJkcZtyTEmi49qCtUQA4yz3QiCU9xLyN8K4EkWxg6GEv8NFe",
  "key26": "3SRzu16QYrwy5C5AWx7vetTg3nCAuNsUuFe8swJhkN5iaNesrfudJZeyTsQ3ygH66n8nnALViDbgwMSHfzUX9Xu2",
  "key27": "4ZHP4oevLPJf7PeKaiE42874f3jT2KqcuRHjkv4yVWJF1o99xjZ1fYvaYE2CVEuShH7bf89G2G9paRzLurAp9PVX",
  "key28": "2ZpbR1CwioitTtEa1UG4MzB1tgmaCYfBGSomQnba9ZgW8TJVfh9QQ1tcB1TJhLzT6m67R3Zs5pxLscmjDDsYzN3h",
  "key29": "35wXDVKonXTV9Kx5iFvGTY5EDpG37RciEBv6SW962SRWUB7wect4vUuCw1sgsWRUaXkk3Fz4m3M485Dc936pzkEv",
  "key30": "UvL2JWXi76YEctqLYfiA8kxnajgLZnX4atLqNreiVedznhAGr5scaiEVMS7gJX7fLdDVAJ2emuGTQHwjcqUKP3m",
  "key31": "mdGDauyncSkaa4NDWnyHwRP2fTfsx5D8iSaF7vtszodrpobWdDNjGojT7De61JmfnjrZFY4mejGyZfGCzEPSENY",
  "key32": "5xokGRxBK4Ndo8xhxWvZ4vPZLGicMiirQbrLuBLwDvZj7UivFdGpypfN2kqv1SmAneePT566ScGU67KN2HcVZLri",
  "key33": "XbDRftU92yJ46YPx2b742MnBg6xVqY93Q3DJ1YKUiY1fKAZ1yAdVdpo6pTeJhfiRMFkFRX5SML4JYwccL2mWNHw",
  "key34": "3e4Sk7DfVu6AxKSHFrhLJ2QJvuYzNq9CZFngXHnTjZzhtbscTbtcLi377eGGCuRZYrUX51WuY5nCCx3PQdyUGtUQ",
  "key35": "3AFQbGCfo7h1w6447tMx4ijz2ZtYGDvXvPuJqX4rL7AWWP4ZjG4b4JzemwFxaV7dV1DgyM3gjw8g2kBjygJLwm3x",
  "key36": "3gyBETy77kCnTpzjRYhs63v4a6UqwGY9cT3bGnJNPmpiEDjDLKWbuS2ze4icKrBozzHEiceYxVoBpLNPb7uA71Er",
  "key37": "4oKCEr5NtxwTnLhFHYz9r1gPL7No3yyhMrC9ES2hgoj1zkQreva8aPZTBa6XbXjhSfoY1XtBqJKdM1FA5teSXfWv",
  "key38": "2kbD4VjFFgQv3KAYaxN5gnoU5gVCWLo9NfHhb1htbmkHWHryCEVdjR8opDdkk6d9MacaZeQPMwRrHKJDnNB2m8NM",
  "key39": "xmR8X6hVkFPLs4KuZFKe4zkDTfUQfs82ouYrbJG16vgPbeNaM3hUCCGvdREnoa5dcT93y66UNBMXaX84Lbu8qft",
  "key40": "kDQJRcCpFxg9wgULgxnnrc68Amt74Rg1soPGLxB5Dzk9dMbxy2u2DtfmYFSjBPaipzAuyTypJPixkJgmpavzi1T",
  "key41": "3kmqsNiqSMP8uJmZHUg6bfkBSD14BwPVvT6qcz6prUSUGCi3FwSokBvzDDJV9J4YGntFdD4sbmzc1GSJeW58sV9e",
  "key42": "3UtPS6DqWNTFLnEh8o69gjjQnDy2Yo4F7uS3xWwApz9yfWTy1Q2w9Ai158vmdyeAHc4A4hXeuqc8wUNe8PE4Wu2T"
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
