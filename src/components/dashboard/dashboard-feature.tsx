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
    "617fKCtwLw2LG15zcv8PMwayBYy5iKjnARrWLk6ef7v9Dp4PBYqMBT7e6LPBNJJkArAdE9JKEjJDfRayUSio956K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sHCv7HDoZGXUD7bn13H9gqR1tMRBhmXJjZiDoyCKV9g9t6YLdxebLTeDVTapfsSnmvjufd7XTeY1vEcgo1YzpLj",
  "key1": "48pTfwYeU9D2zGfkmgmtmYmNK3to7PHugT8XDabBvNdj8qfvnxrjXGTqWxy3gXX7kopgvJsSDi21CmsAV5dYrQp",
  "key2": "pyiqFQvmbjBU3SzgedUd4NicLzqtY5dLyToka1bxeJVajmnvxtwgBfnAFC6EADf5hqe8AqCnFpcVHFQj3zGhHj6",
  "key3": "4fTVpsAdk5GL56PRyYbS9cqVWSsxMib9726PyFea32qLMCtKJBUzSJt1hv3Yr4aN15wc96QNaE8drXKyJnVTVQcP",
  "key4": "3SfWbzrReaAcBWqvmWzWP1GgjhvdRfFmmwWRxCKyKHavmy7V1dEDkJgvCM1wwgjqBpmJum8fpDPJ2cntLD7EvBws",
  "key5": "4S1ZrRU8dzaPNgt38Tkih6pLCcPXaGxzoBKQC4k3EWQMCnL6Q73FDB1wknysy4JKGLfwMbzuxEKHAjWNrL2VML1n",
  "key6": "3TmVtSNFEWVWza4N5iFgVQcKML7Awc4xEFe7HMrDNouoLS8fCrxjbSrBcVkwZQDovE2zY897oPGwkkD4v56Nh7zB",
  "key7": "2mVnwRFKHg3DFDp374xZyKhaovq7NLJ2AdWmxpJNPfxPiEARAGyLgp67HwL3s8FrKoYtResk6cF5fsBbKLsGPsRG",
  "key8": "ren1stGxJUKChsz43zygBGQJi2ZaxH35marDVogN1XcvkAbJcdwaFtN44u6dYtKDGYAWJaibTaCf4cCJ3WPsb7M",
  "key9": "63b4jzViUkgaRsvoVdRuL1xUXWMkZet2aPeZH8QPVsccCkTkVPQvXudVs7aeyUokutwb1te1MVYgdwT2EetTNKnD",
  "key10": "3Y7mdRwntwCmxCGF5Rz67X2RnJMEKGMisbi424rLpwB9gj9L94jnrFLgUKQtbwaCH7paEjsNXVqiaZeZvU1fLH9i",
  "key11": "4wagGNAzWtaSZ6CCMnxq4t13xY7uab4uNPPqYAB4AvWSFkeD8TzEvsPQc8un9k36qMzm9L9EqUjXzyVhhmLEfMzw",
  "key12": "58FNWk9knCkjhvg4LTBZHvPqzKThmY2QsRM3rbupuC9Ynvr7bPNtTochTW7UGZe15KHqSG5c7pMJ8F9QzzCGi1Gh",
  "key13": "4EGTFPPWN47QDsBwdWHBqLvqFSnCDpT5c5YeFeZqT5UEuL9g41DMgMS3Vj2UPS7eWKWh49cX8k4PPfhLkMbi8WYQ",
  "key14": "2x6py8KPtZjP8b7UZS9nb9GUoZS9RP5SEnAupQ3Xd1kYj2A3T27VFHF9Mn6Gpf2DLt4oKhhehXBSNBL6rkQVY4Yp",
  "key15": "3y1CXJGneEi4S5Dqhnmj5oVLvFF1h9Hdug6HRjfvsjQRLt2Yod3ywfwjbkBaWmKKTz2Basm1s9GUYB4rjnhbDiXL",
  "key16": "oCGPcRgix2MDGZLsinRMj3SrWKhxCKjL6MVxNSMHoyq7m2VUP13priNjjtBpW5CiNby5xkcqFn9cCReK3hScUTe",
  "key17": "47XKTmmCuiUw2r74CxsmMbuhxLmdoX54Q9GprsHQuGRh5KUEzRUZtPZoCPem7MPktgmn6CarvjwrSyWtczxeMrz9",
  "key18": "3Px5e48PEhTL1JYCV2w8nu3HjAUmwtDRMkJ9neRxPUrAasP3J2uX2pzxDzA2JrBuGcxXkQTCeoZstRVXpVopfw9j",
  "key19": "3XLrCnvzXdgHyWxJZ8jacgd6DEF3t2EZAnNQVGhRzvSG3c1TZjfQLQcG87bo1vDrMdpo4LNoEw1nXZSY89ibsog4",
  "key20": "5JpDQK86T9TESyr2TQhC13MNvgcHuXcgJxVwH7pMhMXjgzFRhjw1ris7dPU77KZM352WMZr6EDbJ43mHSykDZHm1",
  "key21": "4Wsv61jK9cp5RfaoDQkkMft3ZykDTBNMq1LDyZF3Xa8d1dbSXSjWndueoquWoLZ7NNDb1K45RUycBBB7Yh9vWWWZ",
  "key22": "4x2Gns3aDMpTyD3wN18oeq2gN1PPXRzUvME3DfoyN1qin2C5frvnJLWnhSDVtU6xB4nm1jni3sw8vk1YUXLsHXZt",
  "key23": "4rq6EgJvUXcyJ8mQY9vT6Znn6W94NcqkDcJF4Lq9NBF9cQihtDA3So7L2eaGyqYavYqGjf7tt3Xmcei5i8tH25Jp",
  "key24": "5E4QjbGMUWEhqAGeaRVFEssyzDgv5QutKxkfdNMBgvaSxJ5Nxs8JYoH1VZbpCZDhbAJMqWkHm1tJTYkuU4qp6dx4",
  "key25": "29Sdhk3QC2NGV5GTZ2MLFhDufpAhWzg8Ccbq3LdxJd1cChJP3GG9rBPhMeAFcUiwRzqQppM8Z73bTWJESrdTreH2",
  "key26": "4Jyz92jUC8tC2826punK2qtcMv3kMw6TLD2ckNAhQzu8kyEDWbRw3gNZERixcsTcLmHvdwVg1difYdsqTYT3E7YW",
  "key27": "4h7Bp19HvvtXeqtdDb5n3b6BMqxKgbbhgundoLTvzyLE8w527XVyr75EziAYoPgd7zerHVACKYa6e1JaRcYWQtBd",
  "key28": "WPXfyRLUSwQDtiGiC3A8AzYU2vwhssGpvQX6BG83yGm2R5R75vro3FnfPmV68ygr9vvk2A8CNE3zv1SyF5BVNvh",
  "key29": "2rMMJx1ybsQmDn9cstx6GMX4QX3RwwaXZ2kg9B9mvXbtD7mQ9JMVWBwbg3ruALWnsg8jnAdShqkzt8hW6g2fakA",
  "key30": "4mhwvWRzF4Vq6XuC9nfJ9KbbY4ZVc3Nx6jVQwju39vYZb18Wf5F2TVUUopmGkX4gmmfqGkQR5jtPK9ZavEoCH8Lw",
  "key31": "21dkmJbmfihM8bjpMwDbCdDe6uZCzpiZCQcVNEosucF4BekuMVJFizagz9qx2u2jgSuDpDr1uRRGBw167K3RBNPv",
  "key32": "2332DVMRpCVBGY6JGTiq8VDz2cf75VgumwbJekSi3dp7TD4cBHCWnMqmDgqv92Fmu3ZhcYNqDoMYykMUDJgC52tL",
  "key33": "5PcfvEGZkfcZJED18HsCvkUaXNiCZcfeZb1rXwcR3MmTTMru545S9XeZy8PgySuuceqBXrtaMDmzsk1By2RdpZjy"
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
