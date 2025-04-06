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
    "3R2GcuM7AgsvAEmvGGv4gRe923DqiU88ykJkKEqiWvk2XxZSra44xBHjXZRw8xnEA67BksYiZ5SZTHNQ7AAK9Jcf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4scdtzStMHiBCtx8mkv92dwjb5dZyqJmDRL64Akab8TbhvsK1pSpmaaDQ3PYfdMSLxancKKkfuJbdsxuqA4UzGHs",
  "key1": "2BRhMLF4HdzPhrnViuCGzgb5saghQziYmNiiG3pS1pTDg6CUMMVu9WTkjw3Gq2EZQxr1yWHnyTTxQ26qD8Bzi2kF",
  "key2": "3X5qiNsk7oEt8FGDZEj163ixhnmuJ6VNbXgTSQikQfGs4MoFKcxYQtKcwmE9A4ySMAUoP8dNJuTJZqmbHaHxmHFR",
  "key3": "2WysMYkyEGesGq7Wt57vHmFE8gnaz4YWy9R2EQjC9WpnjKSaHQG8eTZAXrqBmU7z1c1R8Pxc65CVB3yUy6iz456a",
  "key4": "xWxAz2EbBRSxCKjWN62VQZSx9TXbRQYD4LSMpiEf6RXrzna3C1TUQPsVPKTa9RVVtBfdMjgPDo1tS2qQyjo5q8c",
  "key5": "3GEQ9d488cgbdPKY2g6rrYgg7ajzuRXFTXjCDh3cLXjh1aKrgZGPC1nDEmPtgr2xFJFCbw8YS6xtSt5vpnHiPtib",
  "key6": "5Pf1UUN98B6PESehh9r2u3dgVpjHUAzKTxFBMH6gEADHxEW1RnmiiUZsWzb4a4H4SwtJPNsGGaWNzh9GTrNv5Sgt",
  "key7": "4UWtij8EFD6EL26mmCNUy3cyrr5FCc82VPbjiP3xd35Rie1NUpLbCKgoYjxPaaSGLiQxiC4FGJXCy7oXWip8zCoD",
  "key8": "2PVBv7wfLA49ZrXSt5nojASfY3LUcGsQQBBXZweT43bLrLFcp8ZtgLjj9rWLvt4dfgmfm6Bxno6xLeKFhCJW2udY",
  "key9": "xeMXGiHd4AeQTWPn2xzyJTCnKg8JeKxLSvHNeXxYuu9D8BQ9pXzaZfKy1pw7YTR2rxveXa9L51K5nb3cNS5KSc7",
  "key10": "2eXf9nRoS34nS4C4BT1dcax6YuoVjtadBpfL4fpngPMDKaqqJYSz6vUj2xAp3686ucCpPfV9FGxidTuhJ3dsp1c8",
  "key11": "57ywMmTSjgATinUexujUPVWznaWFBfW6M6t2fPUNnoKA7eoFi9f2Jbt3uMwouStywp8tG1Z9F3ZXMbFxYkzUy8Zi",
  "key12": "3kwTGmtqzACHq5gjGHjcJWyn9Y5RoZRrbN7GbchrtF8iMAYT9wwxLMhYvgXEiaVcZCKfvNcURFEdhmAtHz8GDqr1",
  "key13": "5cqqc3WF58yp371n6Qg1bFjhXLXLvPjHoE4GS98r9Ttuwe4DuHuycfHYhmsg2cN9sjGaTfqeDT47gEjkVDVc55cv",
  "key14": "5MCvk3DiTk8RPL6x1Xb4QpjpmS6yG6SxHs6URVNdhHeByF9txD9YjcewH2YfbLuQFfvsjrTbiGnNHQ2pkkBmkVhG",
  "key15": "2kYU1THHjPZKDNqWBvmX3UiERpgBey8QRUyynPK1w33VmMbVtbVee6496gjNM2Ndw1Kxf4cvgPQrT851F9gmQwrK",
  "key16": "5C1KbwWvwrZC9fhkPg147UvTGAVJxS6b2JdfNcNnYMyK3AzspfR6FcKzizjiB4dnFJBuJZiwWztcJDoFabX7gNkM",
  "key17": "66mNxjDSQSL1uwHpCGgwgLTkoburQC3WANEvcxY4J7oQw3j6jjmVZvBismmWJ5ZSAMucEo6J7aqsptJ54HmN8vPX",
  "key18": "5ULNWt4xPWdjc7XxoghSrJjpkVy11sXeN2fHK1uR6nsVWFY7raPGYxeNjbfM9i4j27KwvE6QrBBCFKgC9y8EghLR",
  "key19": "4uvJYz4PQezARCSZEMJjo96Wku2CjkLbn3UzrBzMGwNRZbQEGnsvLtMGRgL2D15caVqN1EeQZjMVTPrNeRDw2wka",
  "key20": "4S84QSYRUd6re2zDbt4bijECzcyswBuWtkF8Qu7n5vp7w2iMbJnBohmLRLtKf4UDmq3tUWttZ1QUyWLuXmrHBA1",
  "key21": "4YRgc6HFBUZx7F3xsCZndDCxibLsJfzz4jUixAYoiem4qBYgPrdgTHF3uQjraXhS8qyXRcSo5SNJyeXbzMXeiADz",
  "key22": "5hT93TkNH7czaS7tZwfFRdQ7YntSrJJrVNRnxxVVetaZDD5FsQF3nbJPyjEZ28YPy9TVoxFRCPKXVN5pRA4PoNCm",
  "key23": "uPRKwhvn1T8GSrUE9ArwBCXNkaYtAN4rz6cyS1nLc1vmqVzhu79McK2oNjn8ijhdPkQFxHuS64BCPKquqtxD1n7",
  "key24": "iKqQpyoDa7PW597gty1EyR54DjBz7asyczLpnTeExec6HSUWTGgTu2mMvRx7vq54WyEXB96beh1d1jkj1t8tFZR",
  "key25": "4oxsuL7eZBg7VzA2EiEi6QHyNHa2jmzF8hdzNmwVCWQSPH8YLmwv4QR2gxBaojR1oc5gCNU4BTijsrpAXH3fQbQd",
  "key26": "NbGo5QKDVZCFWDc36H6zJdbLhGRQFDNtdBV1oq5E5NYBpyJpyC6iX7ht4PiB4eWrkME6QNrtQScQ3qhDchSKbD3",
  "key27": "4PxCH3JjpdqBhFR2LpwoHrhZM2cATjjAwDFawDt5YM7DbyjJTcvcSCWqkLC7qJoz39M9HVXitD8DYDZTyNBdGYmT",
  "key28": "2E8qs3VXCWneVPWGbAhkhXCJ683qbuZ3nYa3F7Ria4hFa7PaYevzaSfLbvHx7XFy3h4A2Wc2DgbNJVjAqxM9tFjM",
  "key29": "61VfxFnKQHYU5ZgsKFFMkDnP9rwR25or7YnT2RqFCJGoMaTtuJdScTvcsco6u6DaSEQFnc2Z84BDdvVqq5NPENCB",
  "key30": "2Kn93TBB4rGwbmcV7gXMcyNADoJnXqsBLJWzLgWt4qSKuzBakts8FsonwASRLskTYoWHFojradGKFUxLGr4YvRPJ",
  "key31": "c1WQC4KujUBD7xVuiUCKvUjtcX11FxF5NxNPtLXpW74PyuedkR56KGjXTbLNnUUG9791gVJwn6tFHkCvLUxaWcj",
  "key32": "4FGPqDwiYy3xVjr1QXmHccAebyBRTQyBheu7gVPxWzURSk1kgPJDtmhVa1dxUn3eEM8Rzsyu1GuDwWJvFuVqAtXz",
  "key33": "czWXe5maFVvdbcDBJT5CrjeDnQFfN7AACvtQKarnCQWwDyEpjoGJMyoCeZzoR4hakDsxDmYYzNwhPLWzrW6GVTH",
  "key34": "7LT1VcqmtmN3QMFjSCK8ykNsnaExQixeLcbEhEtJsckvbB3A1nfp8ip4Kqvt6CXKkX352EsXuHsTx7NiV41zcQ7",
  "key35": "4KvDZA2hF9adwW18qcYp8i63nqhB4pbZ5xagdhnALLtkHqwgqjmM9hxytTvJxxsdGkaCh2ysKSKE8pFZZjqmY8Ly",
  "key36": "oR2BNpJY585EqKEYpHkMc8kaeGvpRhuWadAVaLCJpdRXkkxrawf91ZdJSBM9MpAQ9Lm68hFu3trQhcE5HVXgHan",
  "key37": "5TZRfwa2ft363Ybayb8Uhr66ch6gVWkJ1AG8hLcLrypQGfY5b4Xwuieg2WSJ6dJP42Hv9wypD5V5sR8LKEVqJgUb",
  "key38": "w2B8DDWi3xASYozdZCJDS4Puin4c8w85CWdKPbfHGWPcLszTPjHX26WstmhPLthPDEtQWzoH3u8HCDfQkWFHp29",
  "key39": "3sBgPHNdPZhv6beHevn8uiNZTNcGxX1QFi4toMw4d328st8YHqMhCQHuEE8LSEiZBUypwc2WkVA7YtYh67qeUJyx",
  "key40": "57YXjoVxtK2rEbmMjGkVhusLi3GSgEt84cYDFDXkix24iG2jbM9U8u8JCa3iPYQNe9d3cEx6m8488YQT9QaQVVDk"
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
