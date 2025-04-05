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
    "2QR5ABL5eJZW23N4Qb83UZ5PNov8eb3w4obTMD5Ta2Ez4GYrBMx75z2HL8gvzh9rYXX5JcyEgqzD8Gd3MRvjrdcF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T21PhT1kBzpX1ZGGMFBg9bVJghRqco5p9eyBoNhT8kEMAstMYgqDDpAkLfxLa6dnoGq772LY7NiZqAMiMVwrhfv",
  "key1": "4mqdaYDL1trm4dX5nARXANszckuQcMH5XKRUKY5ejQ5aLhSSATYSQXCj6EEebq1XtaKGh3kn5G8wuzfKW17ykWn",
  "key2": "3vJddfMu5REXDVq21BcHxDPrmjdfHUXPBrDuwJMvZTYaBxvZtXeLSPtaz7FZfJMP5UhXDaxeHF6qRMBzTHpz7zwf",
  "key3": "2tFBsDNzmkpjjkwy4WRkKeswwEiZvkHeDccedbBHrEtnUBCg1uNEJuW2phALGuWCzWTdjyxXWgKhSHsaBR6uRqsz",
  "key4": "XC2u4wPWANdpfKNjA9fw3SmS6iaz2Hdd57DBqZY2ersduFiKrJsK6sXDXQy1p8NXYUgc5paqduDKgSw51wdiamb",
  "key5": "5fXbKxtqs4j8HiHeUmrFrSTXEM9qQhqRPvafng1h1hVwyMxjev9JRb6LHkA32MwT5Qxgv6MSFbyuXgTsKi7ad8j",
  "key6": "3aNDALrA2Ngpm1PUKcc7dBUCYdhYmd9dWpF6rRdnkGu8cM6vX7KLaJR55sWX1iisDDkpdQyy7nVyA5ZNuMR2BHvi",
  "key7": "5AxvjR1bwrCZFjorMED6HJ23L68jg1XT7SJbECg2ncL7caDgY6zVCvbBKRxEDRY18rASZgLwr9rLnmN6CNGACYKq",
  "key8": "5kp1pZZzW2PW4SyjL2hUibtQ2Jh3SNBFxAV3MPDACYPJTfLr9taCbNpBjhWzkDwSP7c2RXr4S9DYnh33HURLeiup",
  "key9": "2TegGSsHwFkAfeqpVtnd3dA2e4LnWdRDi4pRszfCdNrPJvBZYDF4GA6KMrc4Z9AUFaX5RAcXydYbEFUSuMBdU7m1",
  "key10": "4Ud1fFt3yQahz7Bi7BYHG1KcjXA3bfY3aVtqbZFt6FcJkcKZiwrgW1QDM3G9nCDZLCXFq6iMmQK3qgxoCCdRAJSR",
  "key11": "23LtDCL1yTgLDcTuC8ym1phu4S8ZzZ2kxFwm9TwgYpven1rdVn8xnKrTtXkaf7xvpFVTf4hSNRksKCaSwXw34jNd",
  "key12": "wRtzhYcP1WgVhoHXDS4KjLzFGsRSVGzNopCfjRU7JP7X8A7d1ckA9B9BuaEzo81Mi9UV1TwRq3PELSUsY7wM34P",
  "key13": "5DjzB9aWKbBekvrggm88WbKWB7XFLGwZh8q8325ijAcTKH6vXegZ12YXz9s5sQi2jzkCiW6tUZHzqsT7iJLEtj4Z",
  "key14": "2smy3cXY7MziuLgbHSs58AbpzEn1jWKARPUzkxzVMExrgyFUrAt9Z9QVdtvjrXfEdmKDVr9jevgzSgyA1o2RSPg8",
  "key15": "4KfKxs48gcqqUZUzLuWFP3aSrdhLsfFUTC4LncwnGbpskzHTrk9vRA7ocGPjQAocugc5Y894chYqY34VHGAQWncc",
  "key16": "3W8zSCY6ZEqPBZZyJNbd56GecLjQnm49UTPW4fzgFGZ3qwHEPiFVfbnex8EoXStRJvNbGnYX8QyJjRiLwoQMhDCX",
  "key17": "4tSwtQsjjay2suc736G89fUcQv5yr2UCsQT8TA754BzTUZeZum3PcnHmyQ3BRMgH2c15i5PsF9VtXxzwG4Niv5HX",
  "key18": "4dV4XzFSxygT19JYbAJVuSc4V2ez4o1B5bD4ykM3MLqBx1su8JqRPZwoa4JCpotmJQVo3fy4SuPQMgiTTNuxtxr7",
  "key19": "57791U14WunFw66DWdSSqkayUhZTQ7F9nZz18T5bk3P1hequg9Li3BJPMKW8Hfc7TsTDBT3HNQGLLdGcAjAdMrwG",
  "key20": "3fJLqiRfbyc6oRKjGBvD2E8eD6c4x2ioWNzACdDy4z6SzSRH46eeSeP8PYr3TBK5CBdW22SuedDbeVFxLBV9611f",
  "key21": "52EcLJ3pdux6oW9UpcfL6iTFXrhSM6aAxKkWfFX9okhxZxnmxbAda6xgZuLRfhY5iNHQFg1ViXKpkqz7krPrz5k2",
  "key22": "d3CgQZk6NtymihE4AGxXskXq3P65Cei1ByinPindVNjMGBAHf78YuiCAZgCSsgurxuJ9cK8foe2uoJ8kDGPW8d2",
  "key23": "5F8A1bKLmmfUC1suepGBPUxZdeMx2uZJufecoHKoiCkqQpDZAeuvBx7H6K9R9CNf6yFxyeqTNHZFksQr8WCVVGsU",
  "key24": "F9Nz9LWwridTw3a7QazTJw4McsDfg5xthRXacK8uxrRd472mp4K3ePfGiZAqT6vF2x7ePG6uxAJofRXebTcckZh",
  "key25": "4aeJnPH9otBgWhkTZ1HeJXVB8rJVVB6zm7uTQyuZgMHJTrWqk8tuK7FVhUdFWvvLzX2BouiQMCnArRqJHBh1FaN3",
  "key26": "4kFfSkAKKYtsM4FN6YaUcMaUFEnxXVbWsfU3VQpZazPNSuZUE1zYaHudhiZsPRpN7AxPATpLZaoHtEpAGhATQkst",
  "key27": "hNUxbGduahetJwqb7CpcvEfxXULpGP51W5sDUeaNxrvpTyCbgCNZjfpJvk5HmMR3zBHovFp5M9dAR5VbkLZiSDR",
  "key28": "5DA8Lb5ZSvhRQwhN28CU1xKNbS4gDD8cw3Aqv6oP5i6W8iRteNvnyMmQQnq5dHxHKwk2w62wGjkNtThGfxu8qTjm",
  "key29": "4GHoy1rBSQQXMb4dJRsk1LvKGEr1Z59ds2CMp2SEK1DzdkxSwpKNgGqrw77EPp6BRMKPySuX5ZWBtPNAHSkEHMcz",
  "key30": "3ShnfqqRZN5qEhbuaQUJJKm6Y6d7yqxnbHRcS7XFisLAs5ekjUvCTo1Vyfn7UQGvMqwNcrskrEvtNHuec66yexMG",
  "key31": "47YgrPRjVM5d9EXdrUVSyhyTG1rQQ9cyCJ1fxFuQmR6zDw667Yotxt2yFwYBKSgip4LngEofqfe4Zry6bhDNxkF3",
  "key32": "sSQxpQHrwgE7SSdBtW52wuqmuo4gvcgp9Y4K67ay2aWsBLUkNcoVNcuiMJxjiFeL5K2JtJHNAX1KG7GEgqtULQR",
  "key33": "4TqYFFg9bE3sJkfFu4NwUsbVVuKbwZUBFPssMvkPWxY5RYXQk2RkTS3WMBNeuvQiWFrGt59KdoKDVZm7aU3MFSD7",
  "key34": "2MJz5BLhgnst7HzAY6637wrYzDRrzDc2DMaXfv3wX6V6YhyJguWCWJ6GD9K1XFHxKMLGTesNCHkjARkbcbR3xfgL",
  "key35": "2wtv9BKD9RZREZA6uuh7ujnwQfhk7SNChj8n65J11HttqZbjijSsi8zcye9TS1gF7XbVM3AxiZfP4ekoddXCyui6",
  "key36": "4d2s9kGirRLc57jcm5b9iLeu8VQVEZrSu7sExBM4k1a3egoy91Ww3uzkySJ2wrAnmfXNFtQN8LmTpzVhm2E9Vrxg",
  "key37": "4cJq3a4zNr2k7dUuMSm3ubDzq2Ny24rGvkhxKyxJdKjuf2m8jJxf94p8t1v8dcSUjwSJXhV7Y7fqXJUwu5gfo96G"
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
