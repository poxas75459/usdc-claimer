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
    "35EjuFGcp5Jk78mJ62yuHe1dMsX4Zv8MmGhURsV3PdSUfaxDpA9sgwvdvRrdLuUL2cAH8tnacb64CW4RZCG6h9JZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jRdxJrwM3zxMWazmWsyeQ9Cv3CwF7d7C69FaBrrYpdXvFGDj9dEXfAL5A7Sh4joCuF92emLRUHV9NXuatTGdCC4",
  "key1": "39djJFEobrwA1jWii8mwyB3EXuMuXcfuqAPcNvXcBUK6GD1NQo1PWzhBnR8ETvSRJS1148nW5ek4qHr26wSKJDwb",
  "key2": "3QFT2dKF64r5eY6KapcZm3BbqTZZnXpobJnodtFkNoAPhNPHRhMeBtUiJ3pnHgaLtniVs9s249kvsqEyaqm5mAY3",
  "key3": "55oQq19WFVUEvuBb3AR2ZBo9GfMDeZqr4pJ6FBK4XjRYjameeHK9ycKuiH3Gi32y9RczSJvfomecP8FgxfrAZCW3",
  "key4": "5uvAqZGNDJvPNvs8abzccJxfV3xceJPCf7WhJxPFujXxN7Ynfk9bMRQXxjeN6MCZ7qzsHjz9WJNZzwCHi6b53PXH",
  "key5": "3Hu5PRxhpUgFN755z76SeHMqAug8BYN8mRueBvsbkk9nnUdj71mgAFHkxim2P83wVZNNvdgzvV1nkjBkimLhiGcx",
  "key6": "3HYyne8BM7t58ZNDCPgaq5XC1QE6UnG4VPYzeX4MvAyXEMAumTEHqAf18ouTakbEt144wBvjpjYxjxMk5huvnEhk",
  "key7": "2hr5LaeXAu2LMLSdchUuAKsV4YfHcAZCpr1Gknrg7GdrAHJT9CcrJT8ShQWFhGbbj3zbQ8m8u3FAxu5gQc6dpti4",
  "key8": "NMa1AZBorzs6Xf6tnMLtRc5pJ2DQGDYLyKzUmeRNUYYaPHq3WgMbxzmgM8BWKfr8PVXXpgbLKrsmnTezhv9RCkn",
  "key9": "61gXzN1wraCoJhWRY6UvXN1Q1mFeV54FJ4UwS8NCQAE8XpTGQVZaz2Dijsa7m7a54qLvy2Nb1jaYy3g52NcoYykG",
  "key10": "21M9oxiN4hRiBzM5M6vhwtra6km1QHyujKKFASsLhCEfcpY1SkN4Pv6vMznRuRVdMEW4ajh3b2v135YsNvo8dv1a",
  "key11": "26UYiiUHKVL4Wma71cL3ZDuoFEoz4Ayap7BTeXYAsDQj44h12nDW3dTQD5Y22xjtGjapvkeaJ244kbM8LM3ht5Uw",
  "key12": "GF6NhiQykt6k5yTYcA3Xww6nXS7gsatJXUM8ohW4hmqwi3RX48vjohzoXUn5ffdewMcWN2ZWhn1s9VXHJiGziff",
  "key13": "4zmTUifQMVTF6tFdKvNFq7FvMwLkrUWva7r4LowKCVftP9RAkKh38SP12QLZx4AbJE8fAZ4rEnJ8idKi9UbE9R9R",
  "key14": "2uLmKxCFb35JY85qbK7yzhRjRhEYffH2WwtRXixRe8gi5BDyGNmPGMcMtp6K5Qb9sWShq26ye7bmZsMw5UAxQC8F",
  "key15": "21iCvUtbHHJYreszhqGddjsfLJPJCeiuBdbBUayPRYV9MEFU2TU6whLNqWmggq2TzpTVsnGiqRJvc61uHLx6tCkh",
  "key16": "DsrEybfbFfZ537r9gFpNUYsbpwSg4fJqnnYBLVK4S61peTwDeunhja6bRiLApbJgFaSjkqtGhcTn8Aw9xekYXhB",
  "key17": "5WmMSMVLEn6AQ9fQL3Tekc72huTJu8KCacDxreghRkqAMYdRp8YWbLaV5UfLZTWdsJ2eC8C35Fj5UEGjV2LewPRG",
  "key18": "3AmbC4EUU8gvSfLrbuFgbG8r4jt61LnCLu2sbizpf55jYQ5j9iuzFVcbi6KGLfLMT9u5789WYjroAYBE2Ck3FqYb",
  "key19": "5KHFH5qX2xgqqn6sq1tyBqaqffasWrcHe987Yys25LkXJxMsBBwXUzgcW6wEpYrVAkKqcYtgGmG4zBd2ioYqkkj",
  "key20": "4LthWPbPoXd8oZhV6CG87nFs1ozo7QyScayz2rr63pGuPGNUxsgvqu55nxSZVeDYCr5Eb3bPDds4oWX1mfoGBmTX",
  "key21": "YEv5cpYnM6rspq2NtSEECahofShYkyvovgYaYabRR5DRsoWacPX4AUBgaa7Wdw1DgK9qTrZAnta6B5uZMAgJhyY",
  "key22": "5A3v3Rm51WQiqMXmA5ac4duPEKey3ZNYaTZchv216ZPwFUyZLCmq2g66QZQKd9UdXS9fcMUo1xiSdVECyvZmyN3h",
  "key23": "4cTGLaUnWaBwdyJTAQwxfk2TYvUa6TxbgGTgTPxnYL6CzySyB7ShcdRcTHw27MRM7mgDHigf3iwh4X9tv4fG8s9x",
  "key24": "Dmypgok5vQubWvBRBGHztW9bXD59frmEUg36xU3aHtx7wou21oFrVVWUzQG1DX9bWpuoJgbzEjC4Tx8f5nv5hcy",
  "key25": "5wYqDtSQ34nAaHkCcsX1C48R9io83h2JUuE8ci22yr5cQP8frRPic6GfCwmWJs2MiYgJwzEW7DQBLvKSemijSoTu",
  "key26": "3zmtzzZa9Dqoua2ZbRDAQYi3ygMtmFw1UHDQ38VJ8kNHsBjVPK9uCouFEzXsxY16gUHczTfoq4c5SVwA1gsTJxen",
  "key27": "5uNwYSnDnefJYsbbKaG2qDFEuRNaujeHpx267gPtnCbPdDRdXK381W8ZGmP2PVfwuWHwuFjCdGCWiAc3kpSKWStK",
  "key28": "4DnrK9Adm4o9xfkFbXvTQC6uF7JH6zGSnoSqfXfQNicMwH8h9NYchHjtLbTv48pZHFbrt1wYLZCJz17yyYx3KdFq",
  "key29": "61uDWtCKXyaikq5Bb35AeRqrBcBpr6H3NRVnMDLmsvGTnq9Ngx7vZ3PCTxurXh58hA8Tm1TcgV3tXUWeg7U7XKfr",
  "key30": "5cn1NzMciiZ1RY2vs2JpyrqqMGLvHuV62V8bCEqK8ewQfw7zk7YyobwYpmrNWVsJhg1qKC6wEwJHmNrAq8vfRs5x",
  "key31": "2z6WBGZyLZJ7FufQqCVUUoTGTuz23JXmNwXWQnKWTTpt6gXkNQWrFA6jAWTLABYQvyfK4Ffg1EYCKf1UkSHpJ8mA",
  "key32": "4ivLzus9gkqKYMRJv4UTZQbxdtJbNYyjMCQCgMUQcAN8TLic7fBfJZXKP7WnLeFkPDeEqNsnE6dvnLAqqUcmh81x",
  "key33": "RsFyP8vajv8AoGZBbNDPCrMSqZEHxJyfP2ETqrudsUeeudgzcgwic5hmaA7uAQJryXk3jtGyrk7U1peKW3DAots",
  "key34": "5NtWVvc6h39nbDvtqcvNCepkGFvBcUvY9EZNmRWgtTEYhdfe7UZ8wCej4e7nPxF3wG7FTPfuh48YF4t7Ry2utbRf",
  "key35": "5sXcM6sEL6MaewdWxFRdoV4PLYM2Th7P49aanX8Lqj8Mj7zehyjePe9kC6jDZ34UxdbyAshduBUNan3ZpfufByyV",
  "key36": "4bhPBD1h4asahEUmY1GWxsVKxrhENAFy2A523qSXyVTrKMebXf9tmfx8Bwi9YKhpqfTur1fgWQ8bJKrWBYn7YrTM",
  "key37": "3Ds5PDdWb9WF5R18wCHeNbewfCKsHZC9QpAfLWKEawZ4ijoAFYXWXTndUnBgg2EYEFdvEnLeHJ29Sjr66ap9LR8f",
  "key38": "291CBUdtYycRQEqtb5Qg2wyoGKNBwCW94By2ef7yN3KLg5ECLRL2L5n4xH1a1UyT7neHHE1geDRvVKzF4HPuejVx",
  "key39": "611wpS8dcQxTSHzHG1Hbi6R83vMPFaxsw3mAbGXBjsEQTQ39nyP9hEBksTiLFYUcz8M1tSpzSer19QADhkqUxWmT",
  "key40": "3wztDHTVzaU1AvGfYzhPwzafbDM1yvXVbtkeYxQ2rP3BQfnUyuwsZ17pM8uAqrjLikVwknDHZoJKsYps3jDnncpC",
  "key41": "5ySM7xJL96Zzz1VMBScUCzroQydm3uzCxj9R1xSAaa2QaWR2ZQF3TYWpiQbWHNEBzwEDgtSUsNDa7g5GNriVm22T",
  "key42": "KCx9ZBqoNRAEE55wzYJ1sbm31pccSjkij2fmsGLYnurF1iMBMTgQsR6j1fqHgFp4CEpAFd5aNo2piffRSL3cGF2"
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
