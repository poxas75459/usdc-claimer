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
    "YSvAFxJEsN3ouVPUh43wCgodc5Zs8BtBxSf1uHKnkX6Yne3D84hr7GNtdnBYmx6XFJ3USr5P49Bui15XUpmh6xB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vcb95gc4jSR4JAxLrs1Xi6NzQYFkZzAvy6KEWxAQzong5krGMetXpFtAFjyxcmRysPV7TN7JuLyT5UwLQAEYHKq",
  "key1": "23mMBGQYLkUi62Fpss8L6HWQ6g72G6ihw86e1taUPMZPHUQrSFBNm1eptVdcq3c6uTsdUyC5d8rQ5S4DrkCnxX2X",
  "key2": "2EfcYZXNypEXw8gNovwDjCdH2k52cWCCsTs1vLV7y6pycLzn6RjHqwtUkxtb4F69jtMDKYbspihGdwo6URnQZNHX",
  "key3": "3RatLyZEeiSUvo9j5ekXCzeLe6ombE7mZYL8upbVWQEpxRuB8qSCAfi2naGCyEAkgZsrXfjTcHtrxSxzwuEKebqF",
  "key4": "5mTY5RKsH2Z2hRVwDUvFTPFN8Qj1zhGeF7aJMLfDc3s1ADy86egNExpYyo15xZrgAox2VMZpXHLAoSYKmEvahtzD",
  "key5": "4WvettTmYC7u2jxGozoSHrmhrxJn8CbGT2oCqR4E1fVGabvjUAGTt2sdrPyfZRyTJswhQHUXop6w6R81GM4F13v9",
  "key6": "edwRtdgRfe54qAsXdQUmkMVsAWpzdeD45st557fjr1yEJ3MfhsY63C5yqikupoWaiKGEyei1CxFC2o9GsWyDUCE",
  "key7": "3DrM5824uGdEsGtQqEWC9Zpt9uE22ucbAXdDGDjwyWeibu2Yrz6Z2Tn4Nmw3dhhPNRbmJSoEQMJ8L8vWxwK1EYKe",
  "key8": "4LAzDUsZ1Rs3PBjTkEHZMhmMTjEtYSXZYydyRFEbA6B8pCV3i77tg2neptg4PprhkFGjrtJ8EGq2LrkHPcZ72Qse",
  "key9": "9oFpmwKvVMzfURUpez6jZ1d4s6NTiLhSvHyCM95QZmZjEzzPT35zaL246eG6tZe9ZnM9LnBZwjJeJ3sPS8NRFXp",
  "key10": "f9AURdA331twsBnrvKvrwymdG4ZE1dcxBZ6medAXcYS2ghPPXkDsBHtsUsMdqAG1zpyPRvNo4xSwAtEyvGYpwUL",
  "key11": "3fUBzPctk2Bj5L8nDpF8b9eefH3ZCSWjUvzKGFZqpQyYe7bTE3t1XvdB56HXSwxzJCHRoJLQG5HZkZfzii8knyZR",
  "key12": "5P4teLGjQp3iEruZDvfUC8h9hR6XsFSaq8V1ipheuYy2F5ZvaJ1K2DCwATktsYEYA7zNiK2TDypzKnoeF3ass7bm",
  "key13": "nogxySQJHPtQiA7i1ffbNDA3JqhDp6vRZ4oKhHA76hLkYdCr7SpdWn93scNDTsazHZ4wwQM7opQ85a4Y12dKRhc",
  "key14": "GS5sh1qd6LvbWnFp4mAkW3imjyZ71gsqDhiB8SAShpXFAShGHv7cCq3v85pTKuy3qv3sZ5eDoqpd9QX4R4SvfNh",
  "key15": "5knxvuuUvwd3vzWxCxqmTtXnuFhLjP2FVdAjahPZsvaHspXRanWXtYxuz8Lyv86jSwa7NaJ8S8n6XUFfHAgkoU27",
  "key16": "2pNMWJf8KNSMUVxy1HzDbb6AmCY5YWkzbKyP9hRKncGMAUoqpxU4qfz6mRcBJQbArhh2wRDLtfSJE8QXFfUmZMvk",
  "key17": "3sCWZKdgoiXkevtyRePgxuAyWYrHWRqvr3omKjYNcLp5i3zUQPGHaH2NGqiD4yK29MbwXPsiW9XvSsVPkwu89jCg",
  "key18": "2a1ZouPAXNssnV4hf1LTUY8qyrLTYYjBF7mZeVfk5gC4EmDitm1psd4by1ZAMHW3Dywyzx5gtNCiyYPXog16VqsD",
  "key19": "xYH1CR6QGRBMr5vY4xbqpwWGRmoBXZMgSh8qATEPYjvxTF2fbo1e2ApJDc2pU1SatPa3cTvhGg6e3HU2zoCWAN9",
  "key20": "WbSnj6P1SyNoE4Mt8DepMqM2RTfA8htjhoZxaxYEnaC3UGEatzDaeMLix6AM1jru5UMaR7mTE6BCLLQ8HEzVCiM",
  "key21": "3QKcVP7ncB2RftqQEahTXK1ZamhXwcdhuY5PoW4j2cZdHiPLhty2SC35m9vSmQ8vaJjtz6LybsmNUYuqbiWb3u3J",
  "key22": "3aTVqqUe5PoeK6XeieFjn3AywAJ3oDCjLsyTmSyyr2pywux8UWPNDQP9dK9pHiMZkUUr2w4QjVi5EPoPcgsHeu6G",
  "key23": "2JLRKTTqfx9nJn75dM13SDAUX3hgfeujXLqdUbWJqCBWmnKYQZnDFxxoFoEUW2EA7uUfKTx1DQkrsitDNmFeKFjT",
  "key24": "3RzDyhqdN4m1ghZRPWyr4qhg9ipXE3NuNXYd7tWBGc9G1UNt27nxbpe9WJYzb9yqsvrtqjvLQKk4fDoF9xjQoRnt",
  "key25": "4854mdi1brkuHBy5P1J7sGp87Ss8FHab8MmbfVj9M7Wt2958iMmgoeNEHs42aB5CxZygMTSrKLPAbEh6e2yt48hk",
  "key26": "3YdPffEw3GFkUvGthWa5Djex4xgH87ZcY51eLtPEc8YLjd4LZNGmjqBW1q18cZJTUc8QrnkKNEjHtrrxzfjDkkMU",
  "key27": "3CbpP6oaqJ9C1BFZku8wwWQ3xqFoMemzMKikfCixpZeFaL1hquFvWna2VWD8WyXtHZyEAVzpvJRiUq55ucYbpJZM",
  "key28": "5whudS5yDnXTaZWnRzTFGSHLiLiTzTTEdecf7Pmm54k2vsfMHjhXx4usJ7arY38qYWNstzzWsjFUhPRGx6i8tjRJ",
  "key29": "3cnsDn5pnUgnURHRxYmxasLZcNXzWzxTCYo9nG3w6ou17CEsTc6LpMD4H5n99CAeefmUwP8uHTJ465VJbpd2ZpWJ",
  "key30": "7brf5C1kPPUdSWzwDzdvc9USJdZWvM3awzT2p8XXdcpUv7kUvRY2vXBjxdLZFMyvmtcsstvePiVFufWTJaRJnYN",
  "key31": "a3Q1wL27nL2wixTXUjTk1xgn2oJBMEUKovgGQtjZ9YCwDZsySKfUE46rGio9quka1hsiKGUB5J1FZDkTL3MSyRZ"
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
