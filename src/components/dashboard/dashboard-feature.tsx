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
    "4k3GAu1LfbrvmRb5ZqJC9zc9EUwYqNihMUWNYC8LpFywqfbgSscM8R6KyxZ4hJjbW4yHmVmCCvvp9MZynSJJkK9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FpVNznPBczhAutwbudpNmSavEaed159x91XFKAkz9ri5gePUzhVpNax2rPbWfU4WXxxbKccFoodA5tvmFCvsMaD",
  "key1": "67SQkibJymMKqVxpZiiaVwYiVrtj5uF6ePeTZCDFfjiw1ccvMC8aDwBJBA3YVnX6kSUHXNuzDMzmdMgdtdjHSWv2",
  "key2": "5s2a2N5D5UVsLgsKa9Vkoh4XNx2yhA7Q8VUvyxZdSrHtuvbuZzSrSicptfAdCnndwDJStctGDdEhErzQY6Hef7Dx",
  "key3": "Wahu387BskPo6XUWNH2wzRJtiVzrf77bupcypr3iNeTcGbRc1KquNvP1xC8cY34ZCWrMs9dfETvq824dQpafN2W",
  "key4": "3aTEcVQiBQwRLBKFDTTfsaigRuD3rmxXmBdk5tDxVbrJxhmoGcA6NtG3kT1eNnA41Qe8HarsU46sMWLwz6uqPMzz",
  "key5": "4a8cSYUYhLZtp3p5UYoZAEnjLKYkdbStEXW5gQ95x8ix11pF6YcZiiTepPtZVVcQQrTM2rEyxQkksHCS8E4PKMzz",
  "key6": "5ALdag5UWLckPUbJx8pq2mvozVN3vmUALQ3Q1cqxf5SDSPQJ38VDyacELar6dze2Vz6q8Y8NmPiE72dHQbRMj9vL",
  "key7": "4oTEWSE18ZWaBaJfrgqpaZ1zS6rfxMojmGqboojiMXM782pe7ZQpsfCpgcR236Wk91hZgYpgXZiw12tP1GnThzm7",
  "key8": "481jJaGbSCVjA3ooDn1edgYJQV7KpMRPGHZs1bSFXhJnSoABsYcCuZ5gsG9vSfm3cbREc9BsRHUkDtc4Qjw3jssf",
  "key9": "4doBewGG7a5U5jutF1VzcmUgAgWSc6s6xDUqNPXwdm97HMYG7YAxL4YRh3PGXrzYbZTi8xYdgxmzWNDpqGTjbdhv",
  "key10": "2bvyhstRugn1BSByYNpWcPyKTMdGk8XABi3rsafFaviCAbmLHQy9zux3KkuWrj4eAVTLGcjaKHG5h29DcgvvdsxK",
  "key11": "5SG2rmm7FoaUfvu7doz3Xm4u1xTa6zAFXvTqoTkrH131BK2HLgG1pooJTiddvAKSoa1JJuMXKiXiSc3Ak6aciW3T",
  "key12": "5je3LUrLopLBW1iYHFxNK6Jd3fttppfXcNsQ5yG6nqSXUAaDgVG7CcaCy9XxkTR3yY6We4uEeXixgXYFh37LpMT1",
  "key13": "3JwRgshSau4wdAatGA8uuz3Ve1QN7QMByxjSwPyBbdt7GGdqyBh13VjEy2qr4jP61CpugWsPQUQ1X8KPrmFJh39s",
  "key14": "56TsU6HbnQzziXdWR5LPsAZnhMurG9A6M3BW47tx9cDTTkWkfnzScGL9hjuS5pgimt8qBo94T9RywuUe8toSxL7d",
  "key15": "53NLnxft34nQwQSAAqna8PdsgaoVmP7edM8f5sBQCdCMsUBFDFKzoNWNGu1jMVHpKizPNLvKCjZ7hpNJGDczbSBm",
  "key16": "hnHMnguWVD4WmVpq63b8J2iN7UJAcqimb53Yt2byP657UVhDWJ1md3PX375VbM5wi6422EGkptfTdvt4UhFtMb8",
  "key17": "htCxVFCHh9EPXcZ5345Y8i8w24zEVfZuPdrjGEo3cWUYX2GoSL1TZw3r7JNsth6DuD7HvENSYtzCvDg4AnQp7kj",
  "key18": "5tFrsRnVqWJsLHVwtbN1kw2cpjRYxn1EYU9ZMJArNLXhTEGQaDHuFyLQX6sdchTcGectUQVwJ7pdCMUo4UFWHs18",
  "key19": "3tBwrCM6hr9JsVLFRLSJSYZTGSjixbQ2S6vwJHS9Eus8v3ay8QBXUyHwjWaY2ePJ49sHH1uAZ8XPFuFSQEzg6Fzp",
  "key20": "35wSVqi461gpYKTi2uPZGeP6ggpgSxhHcQppgQB6CwvbgWvAP7CoGWqz9oPQd33QCg2bP5vGoLD1uiqjk1ygkEfE",
  "key21": "66JaV8p68VsGdE9RYA46kPs8qRkK9cWHQ2k8Apwnc7SoYwMvEfWybN6dC4TBG1ffySKsFaJBucCfN8TQRs3qngZz",
  "key22": "2Tzk6W3UrLndKsYG2vt9xwH3bZ4qeAyJvqFM6xsxYtYd9NsMVrL4e2oa4kf55MPcdiVkWfFXRqPHSzsr6dyrfiEe",
  "key23": "4etVVNq4DhBvts2PP7zhhFqbiAYqA1XhtckEtR8rM9L5RijGW6XmJinjThK9Q76a7VaqJ5doCWb7S3kErnJtJ8mH",
  "key24": "4x21kvGNq8uGbVaccvb9qQdJ47FtTt9uwQcUgr2ERTntfcLVNAwdLMByQsrcNb4L6mfMCaxTa9fft1yhoBbB1LHs",
  "key25": "3U7v53A6d8kxHNWcQn6cxFsXvMqoq23q7Db8BPDwo12qTKiyJ3sautJz9hLS3VKvdiASUg9pzfYr2EnrFqn4SnAn",
  "key26": "3VTu1wm5QSSXfVmGYNk9RDmaZx5zhJGgZ5YoBWUu5ShoqPPAcPK459ifS69qKJ85LWRsdjNBdy5NmdFJ3Yys1B6t",
  "key27": "5z5ri8azER5rJdbSGMDtH4jDqSFPWEVNudCfQuCUferV6gK6V9QPyTmnrEdJeKrHjkvmccuT1NQnmyRdq34Xd6GW",
  "key28": "aCPPupwrh8F4FNBjsp5rYZzrpAdfUkyQ58c4KmYnA8AwMg9QpUfzcMiQ8FgHcjU8ezihzHEeW3NWVa1JxtfS451",
  "key29": "2q5tBUAbQDbh4M6StWzqV1B3Woac3Lvz4jEuV2upZ3yE9Jz97iP94jGYGXeCCRCfLKg3hDNt8pvSHo46A1hz1YFb",
  "key30": "2MorsAKrSYjdqKbV3hqjs8AtgBk4arK2tW5hgGyZEEc4vzKzWtLVFyvzBTh4suDRZRLsAVrEzGQVg8QtCctjpq94",
  "key31": "3pDgZkhy7NFi5JsfjM29YZXi4WLrqmAiVauLdxtJBwbdiCT7Dj5EcgrPC676ZSf3ct3TVvywJdAFc3xB2aKdZdPR",
  "key32": "3yVJCrmJxRHo6HxW562BQbJ1jRd1P29S7F3DgTFcZd9LPzuPT2vcWLxqEQt2tjaQBhktQyVU5CcNeqk7NSLD3ehp",
  "key33": "4wZVUq3JWWej46eoDovcoi1nMnSskwyEVGgWvgoYSNRLKqmwvBhfWZbox43M1hZLSr69poVmMobdKvsApfzESHvh",
  "key34": "QfZLR9L5SgJ7y1V2QPByBgXM9TFwu5X2wrByHaT4QWW2raUY29GDpHSdYeDwLeDTgMNLXBENu63AdUJodRPxw1B",
  "key35": "4ChPifWfjBpgC1MprdFFajVvEVZSDKgKZi2HhkKUj578QCn4qt2E8gpQFZdVjBXHSGnW9WhiSLyxoWyTeXBQKHck",
  "key36": "3oGdoq2eygCcAnCdtJHwjDwsqnqmX4Fb6pEtYiUk6XC8MbcNbjb9Q8pqaNd8mKdsSdYdwWFrf989eUEPubyAHaiR",
  "key37": "ihiwwMC31TbAckTc7DnTkpne9jZ8QZXPW7aQdqxDFHBxQBoZeAdWZjrgLMxMTCfPbhnukCFg4569BMTG3iXKM5x",
  "key38": "f3xd1gEGq1hzmTEnEXdCLhurWdwvoMpgQpygw7BUmefGCfnmAwnPuXoSiY2aMtBJgLZ3rdCJoHQdZpjrXpiNE38"
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
