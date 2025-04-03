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
    "65ChTgdkRG3wZrQP4R49fQRv1iEEMqNfDnrzBqD1gDyxVfJro1yXtxPHGe2T3pC1s5aEVEKHSK85KjpXPgxV1MAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fGc8YLrCFaLXw8QW9saDVuzKbwozJnkXA3XciskE1hGCwa3kpcukL2fnj77TN5oHbKRzneRzVNNyiSU3TUE1gMB",
  "key1": "2cgfHFVgLW9mLZU64EvXaLo9j7xd1dDwRozeCYq1woREAXk819vTKtufhDAMD3vhNjZNdc2gJasUmqeFoNsRp2BE",
  "key2": "3F5eahAxhG2xBWZJPbK5UAvoLD6VX6RCBMgM7uD5Lqh69ZWXd5QorzcnsUYsjVWa5Ab5hqpcmHRLuaEjwXugPchZ",
  "key3": "16QHgYDDtQRKQo16y4SKVYs7egSnyLBLuiuidX5dm9rFxcRKRi86JQXzo75CJ22wpLVesYwdhFbXeVaWA82EhBa",
  "key4": "3bodDddWWK3sxJ7AefMWZEYQT473P1ctzXXm3kLJFDKARaNxSEAbHwGhb1PsfrBHkAAxXqF5ef6ePP1edCAcDG27",
  "key5": "2ZKBPn9a4hLwHTTzHP6Xyrqz4CX8Q8niuhFcst5LRGGSXwo1YNXi54ittTgwKXUk7Y57pwDG4S6pr8P1tvttyWqE",
  "key6": "3S3ouPvQMUcXx2V3qm6kmhi8hjuq8cNL7WWvTzk7Xten6vcx2XUEXhrAyVPBYgmRxTnGCTR16damkBvKfp8o9cgg",
  "key7": "2AonPjorq8F99MQRzj69CgMwEJ23xUa2A7Yvb94btdyTxWMktik6g9eakUiR7E8itnfgyq7LJEvmqa5d8TiZQwyt",
  "key8": "NYvhAU6wq6MXo6Tn7iwNn4PPLHCGcLAWTSLFqM4EXx89jSrBX3pbvF3F7m6gXWAfna9kaRKUPury7Q415uyDnJV",
  "key9": "3MgLVko1aDXEbRn3WMeKrx5ZnsojhdQgsoPDzFCGiD5q589PT9bsZBpNhZq6j34CBTDMTMp6VBFQ2v5Lai87qSPY",
  "key10": "4WnjnF83SFQbpx9YAUDCQQhz6ah4yCBG6VzrzAGprdm36PV5mbvfZi5GDrtWzSrzhEWhVTY2KJJTBQPQdjjTN1Xb",
  "key11": "4vooYYCvAW9q3JeqtmvvtnwxG1rczWa2oL5XzCRCTNEBHCBj1XU7kpqqTeF8F3vDG9GN1m7vmxFfZXcCZ7PFbvLF",
  "key12": "3Pk7AHajmAGYqY244oRmA4v7ZGRYjocQVM9X419tQn9JuiqD4cPPit6caFVpV3pqY4UTaEaCgtoHbfmJcEmsh2Sm",
  "key13": "4BGvMz11iYXXYBFyhvU2s9ipbKxVUe6KUBURT4wtCFwYaVapVt6hD8ibiSXiKaYGkiXYFAkcLKgT8aWtoeecekMM",
  "key14": "2FA42uCAYhhUc9wUW9tQxUNcPgkgsYywExERLg4WjfjMWnWLAnZTfz9Eq86DC36vC3VADZyDivQqBfum5xZuYsgk",
  "key15": "4sD1DYRB3dXc7BHCffL3eeBEtJokYcVm96xpc9F8QMBi4FRdbscv9DTZxhqULtNmyLEx4rE6U1KBuRDyzehArsFP",
  "key16": "2yWKETq5bWw2WG77EJgbzrSL1UFjfvopzPVerHY79LcK9iu2XSXiSxaUwsmP8XcXQXZu5yqZceX2z6WXPpZFJY9P",
  "key17": "5tWr5dBo8aTFFDUumRMeb8ZK13JDfqt3iKEzWxQzVfmCzuKDTn3Cwxg97vcrjQ51Mcw8tGhFywFCEX4UMENa4nW5",
  "key18": "58VvE53f63AeKBob5ozceagaD4ivMFkkSBVokZP3EwNBqtNMTd1ocCjsE5Kz8c8ZTdfywEsjqf1gsZDU12z8W4rQ",
  "key19": "3S37cB1hvnYX9EGnaY8zqzyeRzPc3aV1yb8SG42vMTrB6P2mydnTqRppCSzrKWaKSVi9wNmrKpf688Kua7iHh6VA",
  "key20": "3GNwKkBy36pBXg1p5mFAhM7pSKpKszjzJvfqHbe6eWwy9FFtUkSvjfxW9B4oR26iHkrFgpLW5J99BW7gEVF1gTbj",
  "key21": "4QgK7PRTMtcA8NoWWJu1zqQBfn2rSp7hZP3h5AjsJnqQSfStkqesEzgvM1JB6kT7qAR5jyTrh7SqzWBMwTNpva9C",
  "key22": "EmCHNagvJm9Pk46wzghbe5kkB8Ja6kcd5uFxdp8mtzFR6brce8QNyeDvrev54RSMtxDb6oyEJ7xNnpSpNoKh1R7",
  "key23": "4YioyeuQkBDReMdpSV3axwFX8JMpzj4yEyJDkak7qtBYVVK3RNeU72eNDduAH75nyuWonZbRXCVWqiHxD9fmmsid",
  "key24": "jSo4NkRxbhsm6u3ZMarZCcX3F8xtEDYQfKAAMTXwJsRp6DSbqL7mb8TzkzhobCq81wNbQYy85xicvanyXMKUKLF",
  "key25": "4jnfijWwypxZ4oEoUS9BYs5AJ24Hx83zATFsU5A5m2qzMjqXeFJ1hwos5xzKoWjNVsUCxcitCHKbDivck6HwKWak",
  "key26": "28ywnUdy2apXLKui2UjkTAPkTKL5skkmz7roTrSwH9i8RsgaXQJFbveepn4Aptq8ku1k1K7FRNfFRfgfbtfaAhGr",
  "key27": "kq8XUgZKjqBxera1e9BrUbypgrA5uTr2vJv8vguyVfafjphHdFMA43TWouhXrBc5JE11yvz6PvxEbi55ZF4GZu8",
  "key28": "3UCEUMkNwgqH2ewQf7A2V72bdGAVSF7Fz58AY8hwuBjPTZhfgGNXpYnZdTUikcguL5WBwmU68wEmDX67ai6E1D1J",
  "key29": "3H1dECK3N4a1WKutdMm1NM7S1iN9A4ytmQV4ePP6S6xsYGo8MotnpGoxLPgNHi8nd4jboqUvzRFGqDjCPpGSYQCP",
  "key30": "2uwFNBv7KT3MuqeEYGJBkq8nhV2J8xVh98AjdsifnJCKsGBdYkbHHHmASK7jkBDVscwk2Q6dHFLM9UnNNoddUGhv",
  "key31": "3wUxWAE46Fk6iUF7f4Lb3HtEnv27sk3MwbFUdpKNeXr6PibDanffdb4CjwTZz57vgBueF2yFLUKZuLTuaoDg7prs",
  "key32": "3hTEkPQqguuEidhwXFi3ZRKhJyhrnBqmgq21sYwaoHTE15eJcyVfMj6uwYp8EFADaGvDDcGtvybq3AqkSC18aCyo",
  "key33": "veMNLkfgViTAunD8YSkhfSTeHsPCruFiyNNSq6n43kWsE1zBvFavKmCT7t9KCUqjKVogZwTEbaTgygjkKgjQMHD",
  "key34": "4wfgSwzMCANDazTga8FjpsgwT2YDVhnMEYBhHXF6uBHJ2xYFtf2yj18fKv75D3WfKibPSA1QBPjkbV282XP9vcv2",
  "key35": "5CwBZTnBY9NJ4R3fyPAdVHXjGYy3FzWF6FyAgneFhLHNtAtXtMcmBtajMikzZdAyRUM3fdUktRqqukw6qrxXWqv5",
  "key36": "3rNokNgdDZAFqQX8tUwgVNkcgwspuHsTkNdyVcBHTEaK8YbbHwRxZL1pjmUcrZjccKVjay5boQ47AJYUiyKQu46k",
  "key37": "3hMJ8Vk6nF3i1h7VoE2RBfv69eSDJ93xfWLf7PjaH2uS3774uKuXqBnM6RmfZfn8YSWXdxvcnYxQjMHCtqu4PGLR",
  "key38": "3FqUDCY9ETfcWxgCN9K7i5dkfUf8faEo52P9kGrGha32aoyDGBnUM2J5soyy5YE5SUEVNRwpR4hrjox7KFghivu6",
  "key39": "4w7fJuBzNFnUkaLJjMYfae4HdZvYRSZfBQFKbnHHYg9MS43ZhPsdjEa8Ko9eZY3ifudmAxgoeSvk3rpFuwou6LY9",
  "key40": "5mLBtacBj7FcS2ao2GBodPsqyBwiWboGaZdUt1eL1TTkQB9qd5F7cegVPorJ7m4yx6aUVg9Sns4y8YfmKVSCium5",
  "key41": "NYnoq76tVYymEkzU3xWr5RTopkgNdgncueHXft9obZs3zRHjfqKu19RfzEDM547HeKDXjoeoWJcdpGyYiR9X4EW",
  "key42": "4JL6KF4YdRoxxkGFyLEZgwJMws8zjfBYv2rLSR6kHt7iAu1hVDsC3RdhMeBJTTBPBhmGar22YWpsrPhkDhjLJegC",
  "key43": "jkrjJMrsaHmEULwc8fLCa1yMYiuCXY9ycVUC6uqiPuAZ4xNqa8NxTDAXDDBfmTMw6wt7KtpAHo8Y7F97xCCSoV5",
  "key44": "2azBJrdS2KQbV5RmJqduyHmyH3gMN94cA8VvrRiFvtufKghddDFx47R1R3zoMYRb3B5f6nduSusRqkvghQkfvygM",
  "key45": "2JEA99tYdTi5aeqsEkuJkSgaGuYBnCdzQ4vUiR88YFrLeKYLzmrx9osPzzsVYyB2NSqP8LrgBKoSPjVsEErUz2kb",
  "key46": "3nsqKiSS6kt2hKVFEV7JXNMMYf3v5t2usCWP6SWH8DjjBSpiXSDsqsAb86PCVar2a2CNhCQvS72f6WJjH5xBzHu9",
  "key47": "3eP9TgpzF1CBiAfMR6jcZieg1xgoDag9krB6hhZuVhY9jXzb8cpqzTf6UQsyhpJXhHD3pZPHaoAfxCbVrzeDZkJH"
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
