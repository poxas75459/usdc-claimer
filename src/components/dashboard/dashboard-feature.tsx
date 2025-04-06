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
    "4GDW8qa7aMM8zKMW5yXFGBHRu7QG6xCvmwq4kucvjaqyLsGNmMSqnQdBtrouRrSN2PLzPskvrsdi8VKo6QHV3kdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qMEqaKFeEMpNkA1AsTjzDXcPJCYBfm75pPN9HLzEc5yvuPT5vBcRqDY9vS7FyxbpjRTpNbLRkySE3sfZjqBGiB1",
  "key1": "478NF4Zt8TwKwbEuUewQEnUgBSfBSXW1miLQDpQp3Fxnrn5HHNy5MnCe3qAZE3fo9wm5ogJypzPuUTKdHB3da7gH",
  "key2": "5AaxtaYqfFbNgeUyryksJjc1Rgk2C792KVXyxYTRSFtv5wdxJ6UqFKSEpmnwnRskou8yuRnRLGnTH9AJLLUboukq",
  "key3": "4FVSD8JfZ9jRrk6Qfhx4fTE3b1UUjauoTkeaesZJN1Adb6xVx2JpQByUdtcrUCNRDrYhPe8yrUFzg5tUqHvJSrG6",
  "key4": "4odrcnYFTwuZALJ2GezrXSWKjgfcTmWEBaQo4J2X7BJvEojM46WPRwEa42qS16Tp8ZSKWapx548p6CTHz81S7DLw",
  "key5": "42MbDkgsfd4RtdGZD2BGrPmqLRVKHVG3oLbdsgaBCF6vkWjeGUY7ouJ9wVomfEQPhbQ9Et23a2iAGZoGdyKd9Pnj",
  "key6": "yF9NX5E9jvtHYXBuPWBRK2FLhNaEUPYJX6QBe2LSMGQ9P1ypJXHG58PF63EniEu6Mf14v3ynMdSvUMqVxuq497L",
  "key7": "3eSTkGjvsXztQfaBA7GcMnJvE8mFAYKePZbN8NeenuJkvHu1Djoq7JUoEfaGSJcrLHHVXtcZB8yJb8dwc2ccXthN",
  "key8": "5DjT1DspGECQQ37iZ6cMCi1TKfFW6zMmfKoHeFA97NAT3pc2f4uJYhxSMaKrs8VPwEw23minpXzjwS2Dk36QF2T3",
  "key9": "22WXXL3ATR1FFGENEvKMxskKd4DLncdLPJVucgiJCxMH51ZA4bCjyNT4qVXjY6CzLTFo3Bf4B98d3gmWSymSJK9B",
  "key10": "KiGzCuRFCuT13CecdQJStzZje6A6dEAeBYHQ82WEfLReVueRkuBMZkGRTzy9TGQA2TaE3Kr3gqfogGqgUoymJCG",
  "key11": "2PMfj2qrFeP4JXftFSr9Vxwr8d6QePnJ6KQCyFXkndfi7nRrsnP5foyfbXWNRNrSem3xLCcYeuwaYB3GGbgb4s96",
  "key12": "38NTwukAyNAGCDQu5ssHrcTSqeQz5ahnJhS6i5qpDMYEbLNQMVy5cG8pnGtg5aT29CpHwXbBFCoWNNSezgRqjG9g",
  "key13": "Zob9BpJAnvQD3VsqJbPqQ1Tb3YDU8BQxnsUuWgVoj8QffpaT426anSfJLBHPf8BsdxX4GRj1DmjLtAAuLG9UEG7",
  "key14": "3k85P94pRSuehXmi8gQQudnJPx7uHApiiaBQKwaqUEjc9Lg9Z9KK6N1DAMDzB9ZLWqpSVZyf9e4xTre8biUDcbLi",
  "key15": "4cKCbkv1g9JQuxKZ7mbiV3dCb54kfPib9ZwWZAwoyBiRdutCSRiPMK4XrLdygpFywFkhdytAc23Ba4kRV2v25P54",
  "key16": "5u728pXUGLrDit4vzQSFCT2ZNSXEtDvVUGe1d4aJaLWNmfbeWPH7sh74JYhRuCQkf15i5QJVaPdq1M7YWmgreGuo",
  "key17": "5XGTHyXhPxkSLKLsjZ6SjQvFWB12TkXNJMKaLGZZDbkhPD6Mcibz2yMDWamfbWg2zVH24gLBuESLRSw7VuwGHbth",
  "key18": "3M6zCk77vpL4qVfKzJRbZz53Kqruv3qKNePmuDZMGhRYmQHrLEvbidFwEybNsDGShML79RmGsEBtAQ42MkJ8MNjj",
  "key19": "f3vrJJz9zXXJCWfEHVsQ27TznoZ8HaoSsvemEcJ2L6r8dGsXrhsVgSMouPsWCvYi2x66EJttWjZU4mgrzvNfuQF",
  "key20": "KBREKtCAfvMaLumFXHpEWN4tgZ1xuYELYGuEHEV2kwBSLAtnCiy5nPbBP6MeCrDH1jVvxHrAtBhzGLfy4Medi3u",
  "key21": "WzbiDG2UGUg8NCyvms3G557yodaQ4vakNb3THy9pdPiLUjkbohbtF53yN6RbMGuKVkXJ7xnC2juubcUqUSHH2Mw",
  "key22": "3fmg7B3Hzraw2n2DwtYzcgzsUApmwhBhz6SszJDRVDVYfpoWGKzCVGcfQjMc2WmkufCCxTi84E1VzeBLGwhPdymK",
  "key23": "LT8YEWpKC2Zg9jHuEDNkbTaxgbQYxdh3uwiTDZqJwpS2JnrZtNgWFNgpQoL8A8Ltr6T8mQ17CPS5ULK6AVt79Da",
  "key24": "3d2V1rRDVWa19aGgK5AZCTpgtNFYBuoA61oxZGnxntMaa4vEso6UmjzQm2r2TBg6whYAH27g2z1sSsmKHYcHXpUQ",
  "key25": "V9YKkLV7SukEcNSZYntHBkBdjwiYxZM751gAF8fYtJ2UWcZUmeSMjpCHmjgL763JqEThk6GUgrMjoajhPMPzequ",
  "key26": "jebUAMAEoUdZdjHyRqgoR8VA9EBhP5NLMnVZaUcJqnQ29U4vaH2AgN8nxvWoStJAfHL4MKRXZXyd4BYFBwQ7Num",
  "key27": "i1PJoUPWJVUBqoQTKhQVzm2rKGLKpmtNxh8zyY6WxvS1193HtJaD57XzjmXQfvNWbs6Zipqdz5SobLfqUq6Z6TZ",
  "key28": "5WQ9EbMDShNp1R7hYSUEcRGFE74TZ6f8TeLkKavrLHZU6c1cugZyy8dw1KGYAAHqcPa3bGKAX5Mxi6btcGSVHkZW",
  "key29": "4wGtox1HrZ4BUuYknzQuacVtQ3djJHbAZmFMGThnwSTt9micJ2sFhyRHqwoxzqKocmhMYM15bqz4cK2sATRDGZVp",
  "key30": "3tvAn5jCD9cfdjpVrMCzsTQQr4ZfNqXgU7cU8Rza4fauiyx2VKesvdr7ELoVFBW85ZP9vwQygja5FEveD2WyZE9y",
  "key31": "3eYTd59EdPPkEJ54i8Eq7FebV5phYneqvE9HaAWQhQYZkkfffx3PjPDQ7vaSRPfNK9KcCfH6ZMvvBtDPgxM7cNZJ",
  "key32": "61XUQ1Vp9GHFmKiXbttWoyFRDd61DsBvkJuCob3n8W3VNz6zrqpPMjMXXowrf9daQ3jP4wT4iVe7xd2qHx3jH6R3",
  "key33": "4EnQ27nUcb4bx6qrWrUXXw1ykFntt3QrckCZTVxgLjnU1FcZUFGNSTSSh97uFdaurAbDMmsPrKTwBBFSHYaALd8X",
  "key34": "2DtNoJryvBi3U2ALLn23yS2VcK1dMx7DqtE61R9gEGPzqVkxd5yAFyEewDAhpWKMsvuJkK6Nit7LnD4hxTVTXDRT",
  "key35": "4u7FVkf78vHyhjRKDA4Wuy65dXNzCpDhjmgikFPcTR8Kd2xcEDnjc9unJdYG6xKAHWJYuGkEDsyTdNnmVfjTfpLx",
  "key36": "2ZpDV1wxMk9NdFryveTBQEByS6y5TgkgAU93xxeNdANNDbnsuU5cyquAkSVMFnVUNmcRk1Lijb3QmRdsmxEhko52",
  "key37": "3mkk3aXi6e4t7SYvDAHKQCyWXcekpzfD1vmPuux2mA1wSCicY8cBs5tHsDBjsxzHGhw4u2s37h9myBMaM89kvyYm",
  "key38": "2Wgq7ZPxxZYXuCDpP8tgFuAks2BrTRxUrUvdp2fT42o9TG5BQdxouU88xkLxojW1UXdmYu55W2tCVTkTQA3cSp69",
  "key39": "YLEVkPFFNvtH9wyEBsTeKQSqSiTeSKVbBeydPU9meKceN5Ehvk1Axhm6t7oNKj78iLXZZcAZMrUgJ4Z4kaDCaeQ",
  "key40": "PsNCB3CqLqdLtiYfTw8JzNQDVcZ7qrt5CHSj7FiNZ3ci2x7sPyP26HMfqErKs7HXweZdu9Tvj22bzxQNV91J4LC",
  "key41": "24CidesYgg3D8U9DvHTF9eWEA2qxgRA92u5YvrEHmYv2vkBAD8nTSC6Bb47jxY22nAJy8nyv2qDEdWSpfFEUzyWx",
  "key42": "29aPxVUCxNTe5715pLQUBJGA6CzJQnQ5t4TTFCZ4WE3gPUpAz5oKv9BABCAnybbQjFq7F7fS4qfnbjPAeEHT3Dcb"
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
