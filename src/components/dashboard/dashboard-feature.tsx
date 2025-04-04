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
    "oCp5RRk62gbcc65cPzBc6jR3YsnRiNLmCd2ARq7jkavEDnggMWNCJDLJuAWoHg1SUEMHJ5whPZo6t1rrt5f3xEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L4gXgke1KTGPndf8E5MAREYcHbzVbMerDSR7aHn9NWGRJz2dcfaScs5yhkCoWD8CeWeqADcpRyChxN3h4mijsfh",
  "key1": "5ViVyyD8H9oAGZcme6xVx4mLYkvMJbMfjy8tQg5evEHQDtQjbuQoVV3DvDmoSQEKHChmdnaz5qxfLs1bSGh3UGe",
  "key2": "3G8wsJa14uqGZDtE28RMRJKDazgDtHCcUKi39VMeCJGuR6QPiDq59TLHK1Jv5X52rGHPmTwHQrYLRn9FoWU2p9UV",
  "key3": "5BibdmdiQAtKMEt3ykxe88npyP6AmKemPsRStcXmyrgz8kd5fQ4zGTuBCHkSukuPQW1GH84rFY9HLvyyaGRTb95Y",
  "key4": "4v79nrb8W5xuzwfCcAUT1zVu1BTA7Phm3HXM9MK9cL8BuqYCkGhyQppg3YVeu4gGMe2Z7NG8JVvw5aEtteUKbTgy",
  "key5": "56923KcWrUhEGvkrMJXTenwbpHYyNNDpyi9tm5LLFPJ3gbcJSBqGjLadtcHev8W8TekHnPzHAmffXBTmXXGHLDqe",
  "key6": "38N4FphDKqx9rrXqAdDmiBFLbdiNMpABP2Nx39zA2kutqT9rigjjs9d2YxLTZDY55ENMx9oq2CeukxoSrgQu3tgD",
  "key7": "5qgZKY41iybkoxeDzaPt2RioHUViH7EbBhy5E1nFtXK7vGGAE67JgqRRprQsS5ZvMxS9ZVcNnXZ2XyUHTKr1QGgp",
  "key8": "3y3bWCiAAL63BRNgeZwEWnRi8EGL25CLJ7qAPYWyaWVQzsYGaMVxnDfdyRxvqoA8ALRmcbZsSmY2eNygdC8o5ABx",
  "key9": "2KUhmizonJkfNCVx8mDEwXVPBiMm8AaHAMGfUUxwDNrfksr3ttRsxjyMco15prk7JaTBTSdbKSuUkoNP3ot1NJqi",
  "key10": "5AiJVJ9qVmywHxQEDqYYbkCbQ4iWH1pkJkiLi59QQhFudYciywxvNZzQyrX9gpDWE6hS9UA7BNvzF19JYZw8sCD8",
  "key11": "4uoANqA77NxqJUsyupteFg6XQyAj8GxZn37SxjR3Lj897y51mxo4nJx6b1ZPfpQAytCUscyNSHsjACWid6UsGJSP",
  "key12": "4iRcH2FTGXXkTUHqf5XQnugQLiMHQ6zQ6dk3RbJjicUUaaLDtRwVrU7G6CJUfJAvKo5JMSTGV44ynovxd1THdHRd",
  "key13": "53yadQJs3QQpk6ZVSW7LjSqYEzCEeXZ5DShnUiekD1sRqaLAdQpLKfX6hEffZnYzuBEyQy6kpKCkUXXP1d2b1soD",
  "key14": "ct95iAj42rkyE1oNSZhHrr16FnHVPGi1mUyWuMsB6cvz3pH4Q3jhEdxWkb8xGo7FEdtiNL8Y3NLATVPMcUmQ6Wq",
  "key15": "5SJGAaFJT2FDTAuX2hru3wMKMXLtfUzu5ckvGJDKLDZ7MmGowqtHZZyQZGJuxMxdAQgPPSnz5DiKdMkutzxvSve2",
  "key16": "5sTyNZFPQatxgXvrRchndAcupTQrJaCW9VNu4ioXAFXb862LoJQAPuFq8ENPuyUPYi74U8wkhqE5ao2zXcW26rmY",
  "key17": "4trCosfiMuEupy7zhKqsEfMrAkCDvrVnCRGBsMs9PK4ij8FP8twz76nB8Em9gLSGBJqi1ttMKjv54beLKdksnSks",
  "key18": "57YusbcxWdyoxjWaHxUa5rPJFdJ55W28sZWHZZKkW6ef27mWuUYUfAgv5FykZuGy35yYKRWxAeBhGJnoHFgYZHFG",
  "key19": "5KQePZZ5uMcLrcRR2QjHJcZwL3jPEMGJ5nEF2cFhkPTwjSGnwn53XZFNqzqAgkPKUpbC5vCRroiBhpLRpa5xMApR",
  "key20": "4KRxKkeLmunfCj2ELCTd6eg1RNMzvEPfW5xtvwsze4H2EtAAz9YcUZmvyhnx8sA6vuL3MFmTA84V8EsfeodFFCby",
  "key21": "2zoSZ8GS2KUiVLDfjnR9F3vd4zQXCWky5XzyWg2sS1g3xYUSMQFWfsP12Ah2ZytxmnmqU2udJPv1BvQyzduiUPky",
  "key22": "4qcWtX2Qg9bBHtTV5z18yMFfQoY95FYSJs8hdYHeR3CMHoXLgfCtKo7VX4Ug7D46NnaesAvKkAMGFW2mt2xz5Ejf",
  "key23": "4qhVw5meduT7AiW5ccUnavNEdVPuajZLd8MjLESuWHFMCMDtR5vtuQ5HaF5YPC9K7E7WrY163vw4dgHKuLdZ1Uhs",
  "key24": "5po8uqiGMkPSqCHJBUaHkHBF4aWxZnP9EoxVzvtuhfx6qj7Dkks74GTviq6Cn4KsDEgNc4wFkeP4kdTUPsqL4ADf",
  "key25": "bhycKgJhnvLc8F7Hi31aK79EmYqHgtoTZXCYGLLXt73JAW6Eu1Dz2ns6NHvxhVnNzVrtJffYtAyMRiTjChKz3BY",
  "key26": "3iRdnKZcV6QMFahAz7u4FJojsd2MB62G32jm94N3yGmFuGxKFKjht1ZfzFTLv5ADqQ7VmY12WC8JJ1qwjtJaAcS5",
  "key27": "3dJbcEGv89srq9usxK8e27fFWa2snX5sgXM9ppf6YR9nDpeZ3GkQbA1BCwLykXwvPamuoXZKpjaKcMdZweHgi742",
  "key28": "3VzEYVQaoFjA79bR2NouFATqvQLhR7ZuigcCmPhL96ziFgiPxrqXdocqQpRfykTESb8sBBMLqNH8Nbzwok2kNk7z",
  "key29": "4Ky948wA42ywAXNprnGbEKhpgNdB8Nh9TS4caDR8eE5MwwgvbNHBj41rX4eA46GDHC1KTngETYRCq6q6tqMwucCo",
  "key30": "2yyo4BVPLfsK5z3Wu39HSraAhDDTAAjfKdjwySgithW3LFU2kTdGjN2nSF3s3Vc8qo486e5dyf44v3ES6f5riUrC",
  "key31": "3ythRSMip2XSbGGkawuMxHHCAxGoHsj98cxQQyG8a7ypCzJzSL6Zw1ZPr1h3t7wNpcJ5NfxejGWb6YjqxZhJHCnT",
  "key32": "j6YwMZEkh4keEp5582p7H6WYmMT528omSUuBTSVzH6t1jMjBL5F2tgyNCuXmnhAyoBjEh7Ld6FfFEeRwMy8t1oP",
  "key33": "5MqYkRPGhfdpHkbc1f27yu3oQ2MYauRPJCY1hGMMct92H3F1uup76LgZvuYXFeuPWKWBTVaTKe5bdCarhmXr9MKk",
  "key34": "N1yucmtxk8b4f8fQ48WU17pAqneHy55DqdxcAQj3kGpebcpaST57TdEq44SakU25sNptRqdH2RX7uC4DtXew7Es",
  "key35": "5wujBhwbyDMm9y1CqEpTdGnRtSbiKaD65kCHqvDcKfTnUPLRo1ZYMtKcHcBSDAYubpAFuwZyvMKTgoLGhNMYRSzL",
  "key36": "4ytgbtycK7z6DDsKbtmP3H6qVqWZnM4aojM2RbYae7ey3uNYndo7o1WvtErsjCx1MfjjmJJA94dPUbCeMeRSvude",
  "key37": "57Fwd4ED5wpuhdTsmUaym45BReyWM9H6M3ZzwTYjZzaBAj6x4hjuXxBVYTLYTQM5KiRU8tqaciRdU1wSySQnNHUr",
  "key38": "2Y7N9sUd3DtFoXAcK7FbN2fwgEcU28PL8betFwFd7mb3KwLUadxLa2dYw9vB1mY3tpgvBUua68tGaRgcA7vGYvkR",
  "key39": "5FtK3em1Ladvox8bkH7cT6s9SGFSTWZkYnHyxHAohedcUYbiTB3HgCnZ9JZm56i2c9m46Aibrt9yy29UHbspYT25",
  "key40": "6zNord7uqYJkRJvBBJKUzhZWkAUdEGKsHuHVS1sPisWnACSvYzhVZHEozCPP9HrFq41wTirJDDb89VB6zp9kV7K"
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
