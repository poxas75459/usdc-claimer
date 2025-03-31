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
    "5BXnLNE9LfCN2511t5WD34rDkM51T7fjgDd2gczevAdq53Z3kp62rZGHS95o9U2Cq27CSziTXseWpxsgt2EufnVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KmFY4s9je7sH4fAKSyqWrnAWnXX4NjvtoFZ6oB16WcHNp13jGPfgXVHiPMorhvNAWo8e2sxUAcvDAWk3ubHMKLB",
  "key1": "5o6xFYHjwn247AfJB3kFzKmwEMeFJpHuKN4vLpPw3imAYscrStQd7Vtm2R56TUaDULT5Xjpkz8viuER3QaJo6RY7",
  "key2": "418hMUL4weXKC3p2jxt8kSgnj9h2d3my1gGyM6jwjfFMrQjhKsSyP5zoTRcuUKLLsDcuzxQc67Cz5wbPTZmyTgAy",
  "key3": "2b9PzaDGBvWMm9x4hXchCmCUUeDBZgTp6BSKCPqunNDf3S4TxHv14yHVMGrqjf7mLoKeihxn5viD4AyysqoZrNxc",
  "key4": "4mW2UkqigVhZ5pBXxgqJCfGc388JY3BETKbEuZDThAuXaiSSdyU4LaRk1811DNkHjcfnsZZAkAiebHAC419sbork",
  "key5": "3fn8rESRfbgbw4cqGZ5mi1ojm1kPY9o4pB3fosz95kFmrmwVNMdvy9HqdWwMZxnm7cg4gznXub9F6E8HYBx5Es5p",
  "key6": "4oSrPpF8M5J3FGUDFgHFD1aMeQihbSZt8jKahtB8Tq3MSc3W6uJuRWRhAKneQ3A4UuMkYsd2ZKNQWY5vCrmcv77T",
  "key7": "2LyCZ2G4x2CNTqUGNvNqMipwMPLH4Uf8VEzUsrksFDuoidJmx62aE7soryhU6SDYRWgmNzwUp2tjHmDfoe22ypdx",
  "key8": "37dyUMxgXHs29nuCRmswzXuomK678rCxpZooZtLGi8eg5z6sBoky8MEYvPKwY7E1zMC17Av2LuLYHFCgitvBpKg9",
  "key9": "5MteZzVU5iYFaVZgfiDCmaFjg8TsZ1xGTesq1DmkiMUCFQoaKBvJLZpQNSkwfHCRxnTTU9DihQ1qo54LwPJVyoPF",
  "key10": "5ehpAoz2P4VHZYXu3Ca3w8YZuBr8KVwzDoidjGLxotmgXVwEWHPaeV5NnE2Ve7ZpKQwtV1Tkz1cYtNWfpi3nfQbj",
  "key11": "3g1abMJfGNtkQyezazNmA6BWmhF6tN9pZi2k6W7QELsJHMPWS2uejsggxNzMD1vZ69KRHWLh8EpTJWAL9HCrZV3k",
  "key12": "5cvdXyKJX1AiAjKbxARcPpMje3u3EGJvxxisAHqVWHLjQc2eB78p3G9XsZ5pynGifA3ifoTKNgDYf5nSar32yCwK",
  "key13": "2id7Ti72i4w2nSGpBxZcAMDrimgaGDWnx1VKpfx1CXRuBkMNaAkcn9f3DXaJGhw72h1PdE9zZB1pUU1UXGRNLQeT",
  "key14": "QVD1YLQgekMzZuJ4stKtvqdwhuUsbWQwYdjWbKkRZDtFYc5Ri54RDAJdVTZ1fxryiMY12954F1nCLBKBG4v5gyy",
  "key15": "61BFtVS7tYZX8HankpSEPVox97DTzzaUsEGBEGtnhUTiGRxqRqWk3dpcaVfedStsj13mPUgWcQcCWzKxfFJXKefE",
  "key16": "2ALEFadKMhFY46em7ZHUbnjJ8x7jJ2V7MjcLZFJeHJKRX9vjXHeryWcMZMKZrBizaVMnThpFUccU5At4uEAoEkLb",
  "key17": "dR9DteE5ZcbXi31bqqh1wXAy79nCcMqooFWWx2XSVQpbmJ7W6D5cAiGtF8NvsYzNW6tcbn8NbtPCL95TSiAV6Rf",
  "key18": "1Lo7PZ9zybFUrSSqam5eFWLeHYk7A9MNt7PsyPjaCYDA4qvuNeyo9G5Zp6kjGamxTssAekPmWHbnKqzB4i1uW89",
  "key19": "62DVNJgjDkkssH1dadSp7Gm3C15Dh2KWquQUUXTzkLmoGt3BrrXbigFZLnQStrseHNRThZcLMsf86fn6AiY2uQAM",
  "key20": "54Z5hUffyXEYUjZqeZxjxiQeaRwkLa4Yxirxxxur5JCkCGa38m4MFZ84btGVmF1qsME1djfmp6z2abw8pLqp2wqa",
  "key21": "5YLgdc5RqrZwkVJ2FH7yJsxPn1GeuQaeueTzFLULHX1DNswZRUaKJGpxa9uYMmA241CGhVpEQidJQrnkE5wwTkVR",
  "key22": "5V4YnnjKdqkYhwb28BFXq3pq2YDVEh2CPPEoTHoKi2UFuJhNqfMk1fi8nHhfoeyp3NanWaFVPaiYuH6Q8v1WCrdg",
  "key23": "2rxxJN48zG8vWmyGqpXeV14JJooAzhhKUF7i98b2HpEzZxPyUGQKNLurxdAoTVUnbzG3BwUPiyj838cuCtSf2iHf",
  "key24": "4KchXHfVvA21sicujGEJy1ygcjtkTXRVSsncbpJZbPo95mXZQd47JGyHEfmQiczny3YcCeLmomvVc4K1jmho6zYi",
  "key25": "33S4nGCC6QHgtBZXbsBKAK7bhbUQRXftf4Tr9c6dM43GJhGxvbEEWdPP8AsFczfouiyjCZH8CmFkJGg91ecmtiPa",
  "key26": "2Qyje34P2BXQyFSzqV4te3Gtk88WSB6U2dFwuKQauBE8z74BmvYxFoVPrzcDSh5YA1Qtb4BmQmCcVSFkHQsQbKCW",
  "key27": "o5TyowkjEijmpjAVAG7k8tBgZKABNLTWh9PWbx42ziS2S4TYRHuswNyc4t4DCGG7JDJ5wtF5tWiiAPovXe8SqQm",
  "key28": "2GpLHi5xYbEBGUFEKEd2SjX8pDSo5YLYMPD9Lk82R5eBusTx1K21Mjgge8Dy4hYAVTDGmU9ZJSYMVbypgYG6j6TW",
  "key29": "5rGSoJLvFDK7hBVZ3Ynk3mukrS3XqhwKHqQvZ33pbaGhrV2wi3ZzWCSDPqauUPrFgkh1dqRdE4b7yrjv12o9frm3",
  "key30": "29d6KTewZBZAf5QvWFBPFM7nckEA7PP7CR5zx2ZWXZVXuKBMuWwMqq8Tp8FDKdmvfayewfWe7pV7M91W7P5jj5YU",
  "key31": "2Ycu4zrYVacgrnDKHpckv2yBSRasTSL6DXuRH34aotjZp9GJsoYHp9pLgKCGRfYcbAMYfpFW4P7G11Z7xCWvS9Co",
  "key32": "5cutFKV8iGKPBwtThkWuzmBpeV2S19cQ7kcQrzErTaLsMvYVPn1Z8LXx4n3eSsWg8HSo4uidBoq8MwD94Akv8NG1",
  "key33": "653X3h3GaTgRYF8piTLJ1qNsTJZ3NkBozByhQfW4EV5he4sodmahL67yi7zLJeqFGaCuaRsuJJu8QERLWd9wJfoV",
  "key34": "3hcwHcfCH37sPHwPZcanjhPYjagwYYkPm4Ejtmpr9iqaydH9FgpVA2Bi5iPAFsoNmf9da5KE8xjfNyBzUyVepvSm",
  "key35": "5ZgP3DcsRNKmNAC4V8iFprZrDG7CTZaNdTYZBrK61tfMjm8Vrm5Pr8NPJpwXkjyFhz2cUgSFvHPoLdWoohPRuESL",
  "key36": "2oC13RcdgmpMvstFbHDuCy2H5aYVsKPywKjHwnQcFNs1sPZTBRC45wKdPaZy2yuH6rfR7acm92GG3xXfPNo4Wtw1",
  "key37": "5UgFqNggTGmrZwnfBX7rssPVkQStPFkLxNi7V3P5df96t9dBBsmoQyGHMQUN5UvD1VCLcGdd4DhCmVqrH97HeJom",
  "key38": "24UiFh6BgWBo8ySQD6byqWjvPYKhvTxeQcrsR3UG6LWxYyBJ1ZvqKo1njU3bncYCBYuunoijUW1WpubX3ChewTpP",
  "key39": "2CYnAcp4gpnzsAwmBttdRpP3gu8vnWgiTP26oeLbRrh6EkhhxQsgxwNF9gpfhzadAPcNMuPrekRyQBU5vpW8F4yH",
  "key40": "vVrDYCrmoY9Cud5Uoeq5NWAJjrvBJMbQLjPexdGt2YDj6RG49x5oXUHevMDeCPYbejGPK8Yxhvd5KbgWNQUo3Ag",
  "key41": "27J3zTwJat5mShL9Kc3d7iTDMZncHtS8u5dPWE4qM9ZzVwTRBdCQiQZ11NR8na1fq4MneQChiCTdpT2FAj5R7eEe",
  "key42": "5rCgGrincKF4bZPt9c8YEZifkWFZPbY3znAbdeyvQ5KpQWNvDZ2FJnttm4qcofSPoi2nfiLHEZsDQwQqSaFc5XpP",
  "key43": "F8petpW57Ng46agvkzwaXuyTqw1C1UBE5SZSjs8GKUf2sniJ3YxdQf2hUNA7yE76X8gcHL1h1ynC2TKfbbx9NXD",
  "key44": "2tZrEx92ESQ7N46vWmpmgnCeD9vCmhiC52tAivArLyND9M7BQPS3Qt6btzsdtckFdtAjuNEoexypvXBNVaiBYLgU"
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
