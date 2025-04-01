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
    "5Xy9fzmFy8B1BSQjeVAzdbTNQC2QUQbS36RQDgz7B1Gr8PL7dCSeLUaGsfiCWQYKjvE3J2XzeX3r3qbsubRiGgnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R5bSCoQpEtE7qMCSyv3t953hw5kUQ2unPV524TmUg3si7hEoghAMX4pWGzJQ4cPoHiYP6rDtipJnNUyZFN86LJc",
  "key1": "5cjaeCMpR2JuVQtPa9RHBi1x1rHXMFZTVvdd7BWKjckkKWxzLXbMaKF5t8sMCqrBkJocF1tqMW393WwpZwj6eAJ6",
  "key2": "4Kcvw7DQ9xbMyP6yLhwSXWVkSqpEHkgu3G2gf7iVCLRVPnZJGtMWvSqSNUvtVjXfRmPu4zFFWnXyAhd4cecXiJA5",
  "key3": "QhqWKvDiSBtB9tqFCzgQpQjLTLNsj17HAVKqianD6rZt3UJRVMUWkB7fMQg812rYkmFrb2FF7pu3sfGe6ocWX9X",
  "key4": "5RGXN5wQjCeYqSQrYcQNMvuis3BiZvuiunMkpek43W5yt35DE55NevMAzxkCkohijci91VD6jDmpcQuJatQ2sFmT",
  "key5": "371uLHH49JDcxpPoDVL9iFDGGigot13GM8HgPXHgzPXpX3gs9W1twSDSvqMMw49Th1u6EDvVzFwxMKH7gyJvAtTR",
  "key6": "3zsdCXfRQCjvchV72mi1XuVefn2HZhTQunSa9HQHQTVizUxSYxib2sVrzJraLRk7APpi3hg4pyuUcEBxCABAhboJ",
  "key7": "38xUzfRfYCMABUB2MvxVywaFRNdeNEqE4uP47PvrKuneYoDYfBZ6kP8dYDx99g8VqjmEoqYKvH1MYmxdtySDdf8",
  "key8": "3n8tRyiWq4JU3hY3XhFkaoJnp7gAGyyiYcDrky3DnrCEsLo5x5zFaAY6qdXEFkLpvqGckVoBfBBVkH9RLrgMXWG9",
  "key9": "3wmzr9fAZJKnBcduc6r8qN3G9LvYBtNuKQGLi6cmoqBb5VpCUDin8NK8ssCu3q3p56z2dknLR87gaJ12TevA1793",
  "key10": "2gKcRVzsfXubG8Smm7A1y4Ht3o74Saf1rzrSdMSJ7nTpEsU7izVbSBiBewYeVSum77fh7devxQjNHBrAN4qWBpZ3",
  "key11": "2gyLjWEJqEDPnNjJKCNttEEs8NiMEXnT5GWJUYiLb9Hxz97GGvenbKcAZ8qauT545cGJ9S1VJ3iCJTGLiiKFVwYy",
  "key12": "4QtrgBepAZz1oH9sbsjabKYqiDDUr8CYUUCM4m9xw4H2JAwrvh7umJbfFUydskrvAUQtgi9XYoSyEZQja9vG5L36",
  "key13": "42tprbK7ZBwhB4x9mTfJmt2i3cT9wry5wwkKFgHPhJDptGmDbkw3Dpp5Fhp2zeqEdvGS4MufSogGnkXpepBM8nhZ",
  "key14": "4oG53yHAFhKVG1uCyFNYWJ9YwxzhhTjoNz8qB5LmEt8JGkvUWBC9EbFfNHRLBykotMmr2Ug5rJVTMqs8fuUDWix1",
  "key15": "1174ZrnFFn52JPwsWzBcxZK5wCKwAGhucZEypjmW6djWjzaaszPwB5tz3k2v8qE8ErLJ5t254e94FNXxe1iSagi",
  "key16": "3iaQw3Ry36NaiayA1enSnCgK3rurijxUKmKr5x5Ns7AWh9b5T8sHNRny6BuLUpB9qJetZeKY3qmjiAvwPm51d9fC",
  "key17": "qDpNe5pJ2h2ZzKkRHB424WAYkeWdZKrs285N5PcT85VFJS2JZa1G5et2fpvfZF3EjNLGAA8Fi8VMmxLvUc6RQdt",
  "key18": "4WpSF6HHz4DzgTNQTPstGVxk5BpT8ptsmA5Lpbba1E3iofp6uCErihqfoRae4xcyM51rNx1pCX4BAT5DK478d6Wn",
  "key19": "pJZ2VfPZ9e9aiXw8LYWsGRV2kxuehn1PqNNwZQ4VmjpbHfLg3dyF9H5wQU721preYbrbeQctLiEJD5wB7jPSPAo",
  "key20": "57fc3Ab9t53WZT1L2Az3XagPo9YpH5U7ZRJiLHZdejf9hnSSMeaWVjcqsx6terYDbc5aZ81xVe3NVJjMNvcMwY2k",
  "key21": "5Ee8xgx9dSQzmYhN9c5ZmPSVRurZJfhnZHjwYJbaehfSqQtbRcXtY6NGGZh7Jkqm2QiCVyJBKxJWLfKMTmSzfzAF",
  "key22": "5Ef5UiJus1txMh5ey7YjqvPZjB382sJLEi4otRzaAuu3FrUQA5CuUU1v6VuEXzZL2WtUKEHMTYsSbPf9KFuqhM5T",
  "key23": "4jWFHirA7pztLfd8io5aqgzkQuyzYB7eqJ6CZbAgU2vW9chwXYtttUCf5w2j7eyMro9VGdoJ2ds37ZVFwuwWtKgL",
  "key24": "2XPwdhpGwY6HtY6sUFQPnrZKN5m5BxGp4vycHU1tdVA1Et8vfTH3jbjBvzTJ4gAc8U1xP2SBoEGvDPS98zjQTTcg",
  "key25": "4pxC3uBKWqP1Z4iWADwufNZ6vQpDvVtsjPsUzs85KZjXBCpDj3UjoudzodVm6WDvqpZ3eRH3eFZnoSWTxjWVsyS8",
  "key26": "stD1WYEd9c9aLptAFWr6aaxPEYKivnt71F1XAVFAEBxdwWe1k8Tx7kmtNU2Fyrkp6qo6RuKAJgXtNKhVcakRNQC",
  "key27": "5bn35MKss5BniumvQduveQBWU4hbmjhYfPC51VQi1oBwWNm5qQgWRf4H6EmUuihbUBRPj5XGHcSXmVFs5oxtPM5G",
  "key28": "JDGbmGe7kMYUkDT7MBbe7MJ2LNaDLFjfdBTDk1CYQ8mj5Bo3WQRZ3M1TZvgKf2ebR6Rpqy44ntciHSnRXLExGAK",
  "key29": "buXvRem5AdTYKUKe4HhuY5uVFEwRaUdixDrpvoNQdrBtbVFydSkQ8RX2gsURNjfxQvHbLtyagGZusofMsFdhTXV",
  "key30": "5Boeu8EgDVBd49MormxitJVDHNGG1RUiEH8PhRJt6U9Rq9k2T1cLy1E5ak4N6vrTQh7xuvyShUwsvdKJERWLTrVc",
  "key31": "rp7XFVgcnoCzEKmgx49qd4cqJYq8ZcvyYKshEN9MuGtwtZWpBTm5VFFkH8p3Zsgxwx2RdzL4bTa5LoNE423ZEFY",
  "key32": "49mgyrNPn8U2AR9goCXBUGKJVnL9BW3KtNPruvRcwKKgJNV6gwqdY5bbznprknsPdhvSk6QqnR6QUCydodTUiVxw",
  "key33": "322WxSMKkdQbJL3oKpTk5XfMgThoDgfq5TVJ2NKpS8LKfYeXJpoWZhfFezLYn6bpr1joB7oeQjKuj1S9q9DCe1fW",
  "key34": "3iZnEEX7zWFaFkiq72LYYe8hwcugKGFPsUhRcfKJPMvsdeE6rYGdsDeSKrAq5G2qbM2myk4TaLsmbY5N78ddTYvz",
  "key35": "2jAHD7PLSqXKvo7TwMctea89ynQna3PH3qF9rjZEz3NCMPB41mgNRFeASRWAmdyzYpPzaMntPefw7sHt1MWa4Pma",
  "key36": "4D9XVtqRxbtean2YHCfBg8kC4VVTxQqNvECRJ53Fh9fKDEtHoYfSD2TMMU21WAQ8bpGLnM537EnX76U6JoWWDoA2",
  "key37": "2atJZVp9n55tJ6iSwFDNMCX92pgNjKc8G8EozWD9xL1RFfYTdZ5qUhJpwLe1njhiKMRrnXmmf8195wzjrbZqdSxQ"
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
