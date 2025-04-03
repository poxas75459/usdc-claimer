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
    "2CppJjX5d5z8mJGKzLuAodvjAB39FrGcj2KVZj6FGevQ1BTHcTaY7Xht78QChi7QGiodeFDqMrcPTc5vPi3oe78C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eGBEUpWcV6KhCKJ9V7CjqQEFWnEW2AARvw5fKwUWMm27Cryoi4y1E9jmeh8EevYxq8rMH7gfwf3R6ZFaMjrkaSX",
  "key1": "3Sf5QUZympDfnfq1UmcyNXcPRnPiZgJBBjj1n5ZzGsz2fMGaT4xFDJ6ApLXU5ZSyNrHcFcJbn7ePmjE1jozwATv6",
  "key2": "3R85pFfNpC9mo9GnMCKcMC8F3fv7nKYYSfhvXuUhR7jew9gfsWdKe85uWktpmt52kk43snZKdc1jM5gd7UaheAjb",
  "key3": "2WCjwfeqNZMLNF1BFcymJbFLsTeRkVxhRqmCi7WbjbPg5VT2FiBu9BHpr1XzYmmgYxemE2Vts8AgEUF7ttfg2cH1",
  "key4": "437RvCK2CBQNjNKXgfbguXZiAvuogfMfVbYzu6tNvtD7NGy1BSjRa6gGCo7w3BkdduBASWY5BzrQMAbBpaKk4fxB",
  "key5": "5Rfqkqyefr4gGkMpDNye4ZJJhqidDTdd9581k3epHKJCuoyV7vcvp6XmUdP8oUpvxeaDXys4So1netDWmcrwcttk",
  "key6": "5HkNyF2cffLphwhW7Xxm4jUAhdXEapUmFNNboMpfWHBvWQLz6qxH4d3dgSXChQv3zqZHgHRbeqnvXxomKciFmz3q",
  "key7": "5wHDv6SwWxMhebq3GXU6mA4PC9kD5Dne3nFJkFCbHaGJYVTf6ZbjLrEKihJhMMoCDKWgwSh1ZagkE2qphq6e3jks",
  "key8": "26mWjBHNTa67gZN53G61qSzyPL8UTn5KZaXwNufy5U8M8wWEh1chHY3kFeKAHSd2YNFmTaEHx1Kak9xZXYEzib6m",
  "key9": "4yTHZdZ5m9GPMthcsoENfpDnH3w3yXsC9LjF2Chrdfs2ekVTDAULbJ1GtuwvomHfYkY28E36wEkLnNr7ZaeratPJ",
  "key10": "4SDmxxg6CQc1pKXiAQQLbxkexpEAGE9bUo4yi3hREvHA3JZZjvx7Y6DJZkDSMvqPvvtKYBCXp7gPCwbW1ivPCSmw",
  "key11": "pf5ykVNdusCYdxUmNcdN4mPJVDXRXgPxa9XeL8CTQRfXCPuDCy9PiRX5sUZPc4Nb4jw5fLVFx3JG9hUxAa6LEW2",
  "key12": "4QdCDYQCcn4sunvzk24LqE3yEoQpPy26dDNCi6ct42KFksrUjVzb1xSbTx1EGt6tsAUmH83NqXFo4h3WdUK9hMMm",
  "key13": "5xhXgmU69Zxc38U4R5zk3n3HW7L6Ry5iRijyWM19cYUhDhQufnQDSacoShGmQDyUQihMbbaJCLnRvpNTC6BJzyVn",
  "key14": "5uTqkRh49ksAvRVRfBWBLPwuHuVcB2zbJ1m4KEVZTJUxtCLejAueZDGo7WfftHp8CRxBfYPFWZgkVkLkSwmEWHGZ",
  "key15": "2sZzBYFm2xY6hqYsKvenNvuA56bQa8W8MLoo6MKWyZ4n549kSqoR5LNskmapV4makUSNgsVJmJcLmn6DEtww2rhh",
  "key16": "5kX7RARXS1j9Co3xkVFuswBhvs79SYGbX3TQuGSBbGn3msSezPFUnTUy8kNaTsYDkgEmjfzcQcs6sCUzF1sdQy1g",
  "key17": "4ZmaRsn8NHLDTMi7fnzTkPU5Mbh6MTcSY4H1HN19rSpqovZLm4oM9y96QGYTSJhPMBaQcjwutuGuhZ9bpSUnH9fc",
  "key18": "4oetGcvoc9HQN4qzwRXitikRQA3DY9VoCcwxZSbRk9dY5cdUWepo7jt6A3KQ6PG9hy7kAQSP7npkt9VZNxwkmRLZ",
  "key19": "2NqG4zLdPYqPxnKsrRxgu879gsE6s32EZhsryvR5tPe6ARo8FB6KxhB312qUgy2Ba2wguU4ydEBKpQXz47CLRokX",
  "key20": "25abFVmt5fHv8MnX72hK7LYA3f2RUhxXh8Xpc8ZrZC2f55utfhpU42yMDcT5kNhiawoAxKLZ94gcaRChcmQJQ3wU",
  "key21": "61Hw1YGzYkHj9XUKiE9HFZWHnfgjC9smU1anpbu2LoUzc3t61s25nnbDP3Qp2t44u7S27Ru7icTLENwZ1UToN3cL",
  "key22": "S18vUkZaxEsURcQt2SU8zQ5KmdTR5XGTFezBsdQdVEcKtF6zvJWXsKERXFafjBGws1wVapwN8KQjbdwCR19YmEm",
  "key23": "5H4Hut7FoisKMF9EYGukKQmhdD7d7F74s5XN1HWZSYZAKHVh4DLyZ89CvV1hsPx5hDN6QK94LP7VwPNoRQPXw1tt",
  "key24": "4g9QBa5ZngqnUSRRhMJp6468vrdDKA5aS6nVEiwMZNJ6RaKi7samWM2gwiH59xvmFo59cmjSvWz6RXVT4QNxt6Uq",
  "key25": "2Kf2SVHn4zy6JWcLGYDVqeq582GK2LR9aYu4bUma3Ssc3Qw2N54u8XyrJW1rFt1FG8TzcAMGWiCkzgbPnPdLKZR6",
  "key26": "kffiT8Nywjr5SzfK4jAiArx9JexuVqHJFpKhSEYzkiUCqTWhuQuc3MqTkFwEhDgR1idrtoAaufTGFsu8F1epUc6",
  "key27": "4eoDak15szziL2snJhbwxGGF7HfQA5yFWN3M9kk5ZP1U7Vht6r9FvvBT9fi5hJTJ8qppAhG4W9vEFRH6dCR5Ccj3",
  "key28": "5ePwASVYrKrhThrGGyALNeeqNvScjZBA4akMDeSQWvs48xRohTyYtw2xeewqx4D45TcNsEiBK6bRQa2QgFNZX423",
  "key29": "4dXCoQUfwtv1m454VcxXaqaaFQd1XG1YBv2FBGfYDnd8tRTCQyucK4ahpp6YUuqmbRKXg35jmojzaPeWY1cqXeP4",
  "key30": "4zHpxC9vCRVLza43GyHn6NMrW2oi6EpTixmetnoGurwcyg43fKTSvBj538LmoTCB6LAAAiSqAuL4BL2tmi3bS1Fd",
  "key31": "36b4XNBjrm8FZSM6k3ERCfnZw2v7JKfaCiRWq7LpCzBBjFeSLzRUnTjQHwc3BHeSCvKS2YXnDHZhTT7UPyndnSAr",
  "key32": "52LBqypzxquwkrRvbj5zaMxGFM8vJfgqYyWtz79y2ozzWk3xqWG5Cds93Kc7jv7XCHa3fd8Fg3B4dM3mapSDryt",
  "key33": "2VXKw3uK9oedrAGSQPPinHvocaXkpniCmTApXV1XhqpUzC5aQ81DTzcTiJo4AhN1Lzw41MqNJEsV8EC49Pz1jd1p",
  "key34": "4Cwqs4gnuvC4tMVY9pfst6Noajmig5EvuQxhFvZg1ceK3ivEXgTCbZfwA4vStt1wtExc1aRQtYNbZQ9EHduiooDe",
  "key35": "2yNuHMPmYcrjuq1k1x6fF3tLySvyjS4z2j2kMnb2gwwMwqcymEv92GJSU1Z1fiAQxY2FmUffHt5Jd4dkL53xLSFA",
  "key36": "318RWwwjbjLmBVPEE9EQUKyFqVxRA8k2e6W6bsUgp1HN3rq5nyyg9JGowBSp6Qfj7k5hDkD6AUmqi9tYMAk77dLY",
  "key37": "542mzXNJyV8Akk4u8882V4qpD6LzpKzbDtpNqFaoCYXKQpRkgVvubxi4aBs9RzAtTkrd2GG13yiGm1MUuyNDjfwA"
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
