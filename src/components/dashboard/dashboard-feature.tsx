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
    "5kt7GNWPz5yvfnWhXYyPeHQhHJdGCjK9fw5sKAQenhZYsUUKD4KyG5ebkwmUqFVeqbEGp52oyhRe8Gknfy56xdgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KUe5QgesUdcF2LbFjZfPQkeaLvgT6hn485iajJZufTdoceY1igzNPExK5KUia3WVBPusEyfWThkSsSvpSVwV44m",
  "key1": "82WdTfZFQ9x3ehHP1gCJActBZ3C4Hmv9DByoRsDUfrrsG8EfPpr3gWS9hqF5fiZFSrJjTgRsZz2QwGNqT7kjbcr",
  "key2": "4WR2c1JNJx4KqWJzCxFpAXyK4cvCtXeVN42mDTkgd3E3PrZ7EX7vzWB3Pm5vWbKuVZ2tLb1dYZsMFzfNEXeghDuW",
  "key3": "24K93ERWsrtb9Yjwxp9epSvMFtDSgXHnLZHUZyXzjc3ix7yiS8RZwTH2H6VUwxMbSdMwDnrcLeGBi2pEQ7mr4GeU",
  "key4": "4cv8rpvdZCfiswbWhTK6K5U7vfjy5xruuenxCEVV4giHP9XPCUjP8xzdn1ms4rF2hJnes5MTzX8jvhk3knQ58fJZ",
  "key5": "3ieaJPPA3WQawm1q4pzLxc84C6WXW44PEnccfhaaysr11Z3WVnjfqnD9WuDMzXfcMMWXcqFCBEMcqES4BVSz5Y3q",
  "key6": "gwGAWfmKwVTnYSg3U44A4zRyatsdneFSz7Umq47x1gWmpQ4yz2UGXgqHYvHqxFkaBrCmdmzMH3PUiEcqqBDu3ws",
  "key7": "2yUG2wXNNCVCp3siiFzBaoqXCQXVftKoUX6Da5Yw7J2srmbPTEceVvFAZZrB4bH7MjDwX2W23taWB3TsQZhp4YFK",
  "key8": "5yDLi7VsJRGHuizUL345TczEyjLyz5UkBBNsY2VqA5KLXgWYimAZdY2mn8oR6FZrnCnxKAEDDYuSQFavawqs8g3c",
  "key9": "mwy18mhPt91RSzyguYiWsUZmQ5Ey8D4mgXWZgx2d66F8hTYE9Q6iUtFMsMw2w1RH4WihYhAeyhDDfaeBqzEEyyP",
  "key10": "3ycSeqM2Pqoa2GPigNnHb8oY6kwLdyVSXKjpZ72irYpwGE7PczpRDH6RquL9vYFPZj2ka8Ems8RPYkRQCCrVK524",
  "key11": "5RwK8cSN1LmfP2JDHVLdcWk1nTkq444ffhna4zJiB5G3N6eAotTkPtGgim4dPFG39BsqjjZgnEgry5fEKB7pfT4",
  "key12": "FpcPm5xcS9NfiFsSk5xgcebzBdtAott5yjjiqRXknrFnb9se3Vd1RcJGojjLex5w8cf1TnZYupdxqTQZrZubc5W",
  "key13": "4D5Wm3PPfAE94vscLMD7XVo4HUMXvUuDMw6huURmdFw95m2KgbjnngRHh3vDdgD8G9qeEqXSWxR8aja273z25cyf",
  "key14": "4GYkJBnSSK8orYvKwBY24qKNGUFcBpMKJv9DSSjjgjvfUd1DimT7czJw5hzejbUC4FSiXqUqAgphe8ADE4T2TvzS",
  "key15": "5YaHyPWCYHBbkcRNTwsbpgLhCNuEkAHbqfHJUPaycxvRsKRfRizdVVLmhqx6EV44aR8RFstjfz2VyVJiiHd27apT",
  "key16": "2nokyKhP1qHYn1Gw4ufQcELTdDeFWXGruF9P6PAn3jByfSYPi8WZUeUisKzKYuY8sBGDBp8nsZMFQoMCFAbpAvkb",
  "key17": "4GGwH4A6y41fsMuuC73bonZRHrRus65v5RhvY17kB9ub4Xu2f1QTKPR5JZGbkAjheYWQ7vpqS4pa5nGq6tNkGhSs",
  "key18": "mXYn8MDsum5R7H75HDVSVqVuv47xv2rfyWqSVdemk6riEHkRrKUR8KRGhqaMaHcj1qkAtueFEoG9Qp1bBUNtzcc",
  "key19": "1Y6DKMpajkaor6u3NgUgbTdEC7sJkv92HE6Z5U72jKH1H8yM3TTnR8PiA18DK5548kDmo5SpQNMc2NFYMbuZiQ9",
  "key20": "My3u5rcVkiBWmjxy1itg6WPmbGNvj8MXyvRkcpKdf9giDxXi13xB8W6VmmT2QWSu2JRzM1ihz2yvk7xHtfzBMdo",
  "key21": "NXiTAoVEmkFqCA1kpSkvG2GeStKRr79ecBbem4EXdDtEECzG5XYbdgzYkcEUzjRyFrGezJv6eVvS6CiXm2CxAy1",
  "key22": "4fpm9zu8syCihkkuq4qW5RYyqdwhZZfZJEp4uSF7D59P41pePzj5SXuHdQdcL4yL3Q8N2V9vKHFvCbRqDjRWH5AR",
  "key23": "43JasDaHXfQTPWeWHSYqJVHYePhviMJdKk1Lry7yP2Ndnz9gGCJM8BPGWnnyc1t55wznaCRGofGRX1P1jM4EYXU2",
  "key24": "ku4DvLdzSzh2eW2oG9mybm1DukaaNmDW1ZmuadNFjYdowKM2uBYLbpKxJGUMWMASZBcrs2319wnA3cJDi8xZTcF",
  "key25": "31JKzx1dRGa7zA7DMdhCuTQXrSccBoyp7QRxrAuMcnoEJ8tP5JC2gXU68x3Wx5YgPYqb5MpeYuK5Jk9q7M3hn2uV",
  "key26": "28YzoRvAmMBFugTN96nbj36AtYQ8ZCM3HjVk1hde9UcE9StAFZyU9st5e5kvBrL6WWFpoZfdH5RMRS4HVkZrRnez",
  "key27": "3ufyU7escqLUP82L6dA87giwTJtjjruG5RMH1d764NRqf3V67YzopSKjCXumiF59PfyJkexEtGR9CahBnchWDkPR",
  "key28": "HYKNHKUcR9ub7MjesVqHAEpFpjoMaYZnftFhHNqGpfLNwa68XXc8Q9sYSuv9UPaqr4hZUrLftwpxv7XWWQFm4uX",
  "key29": "3SzMJDwDoaR8TDhgjoZkxe7d2mjXb2rZcfseemPQM2bFADcxdEfR1DmYS2Psexg7meKtofCoyeirAJr9uttEYaLF",
  "key30": "2xQyxJhJnggDcTQDvmu3KGFRxv5fzojstaUMYztAgDq5y6jmkFpod22woudv4Q69ESdU9dJUJuFUxpQNHV9pVNmx",
  "key31": "3H6TnJx4dvGQ8r34S8rU6thHigitBRe4bpNwtDMQm1kSEB6kKY6AyEaDeKhcJUAYr6hgkukwv3HwCk8Q3aGhZDN4",
  "key32": "4cxx756X7BBuHS5kHeyjz4CCzpC2Ru2Yt9DhULyCWda4BL8KqrUBqUy8RtSjoXASRHaPo6xzuzECZVxWKUfkairJ",
  "key33": "3a9GWXygZMKPRZTsgdF2FV7kSixACq23oMcGFsUos3vzUEPy5W2VYvQ1YFqNGQ9S4c3ixp134VdL8YmidgeUYXft",
  "key34": "4KYygHnAqVjkxL8Bq5wJcZcReuU3SVLhEdhVD8thLBgkjfXSioCAxZJZZCdPz7SecZ9wBGwFwVJc5qnN9aBVqcxj",
  "key35": "5uKLN7Zuo9BZCL7QhSCj1rzBRKF37AuxgnvkckxosPLzX1uszFyUfUzYdzbWRAyfwNBLrFivfQVvAxgUqHqPAB5q",
  "key36": "34z8W5tv1aLHs2zHR2XfHwBztXAwoQBTapuV3srDdSzER4nVPLDTVeWrPyuBrAaBBbb4q28NvbDgqEDaTX5c6e72",
  "key37": "2snuEJiuBZMVxQmUtYMHdUARXRsJrPeda26Rd7bWVuMfFoSeNxcTtK7T4mpoQBgKER3jmT17pPeay9oJQv7efaZq",
  "key38": "4rBRriWpqJnQRpqcDhpwF39BUia3p2stuGsW7egRRqufDFifcew7VENsexDhzY7KPxvjd53bRoNCzsh8RzRjbpHs",
  "key39": "5C6RMshQNCMQMYn52dtQnX683Uco8nkfJMNX2hLrHL2EGi7dm18qXWm8imB3k7wVQoJ5L63GWvBW1bi49Mz4dzqh",
  "key40": "hLRFabydLzLbpMJUivSNAbMSm4TMBNg3T2NLAPkMZ3SKSos8jWnK2wFurMSAvHgruVvAmjg1jxBnKVPxwooYqYC",
  "key41": "tk7XyejPixQPL9ecXjaB7C5ZXsEub9JgsTYbPCHPrJRg5YZTuu6XK4ppgejF9tNg9RZtZ6APLuCHheAmrnVFdG6"
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
