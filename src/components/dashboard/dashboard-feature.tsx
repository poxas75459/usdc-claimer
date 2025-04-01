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
    "WpaiXkfVcbAhfq51KpuCxWHRPTPvdDkNrWXJ1kuULWotywdDMQodozKJmBrGQzKzhiduuyHzXZn2Kw6UZSWsbxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VRZgTqLYa3Saowh2ayU8AVa9xSb3GysDLcpHVJNbEaxCPgYjQDShsWs29vMHzYuZkd8eonDg5D731JLFiniSCQk",
  "key1": "5KV9VG18UpJetKYP6pP9uobCdKQX6FxCuXzqaucay5DZWeDkdmBYuksRfWhyhFLEA2gNqk5K96sfDKNC1BWrLiF8",
  "key2": "2MXN939b1dPjWZmauaKFGrfU7WaSLcVa7gY8dhdpxHGTf7jiiruPvW6FAZkvavJyMjhCLbeKwdikodasRww2qqDr",
  "key3": "3BWyPF6BjiTsMSB5JHFysh3Zs9cdW9zEwHytWiTxVnuNrAe1Bbjq9mzMr5346xfSvNpGWgVo4eKntb1GRfyTRGFX",
  "key4": "27K6uXr723PoMQikMZeX9LVKcnnYzK2pmPLckwrg7NWC2yN8Tfp3xA1DubsJvHg5uyt1CSCdzMrgXgZfoNskDcju",
  "key5": "2w2NcwpVNDDMMTEviC7LGNQYkLC3rkoguysDcxp8EJPMJgR8wnJMkBJvjke42FhjqkSDWWJpCUjK8dEED91Yw9A5",
  "key6": "4gx2bVV4UNhGjv45y5HuwSaqWoa5dbkNcM4DeE4YJ9MGaXqGk4Lk7FAHT2CHb8upnXLyZETannUZajCLcXTnYua2",
  "key7": "4DYvfbAyrZ4xc5VQ4iim6niXneh8c2cfohKBcyXkX5yt9KG5AeZrux6551nUvKJHEUt9cG6MCQ773G3st9GiXXzw",
  "key8": "53s961mareeyPByHR6NVWjbgyJJBk32Rd1BFkdbhFkcQDFp7g6pDiFMfxAALiAhWM1v9dbGdA1ufANNAj9VhU2hi",
  "key9": "5cM5tFimLDTogGrt8y4yANGpFfZJ56NXLZAf5WenGRdLHAcNegKCHCv1ao8qVWEZyaipqp4HKurZ2JA6TZdky9Tr",
  "key10": "B3dCR1cMXvWmZiAgh6Jxw891DriRcdwf4XqMAJnE12cyka8vSxgPHKmnDPEZMX24KuhFS8wKzCfbqNdmP97wwYZ",
  "key11": "rmx6WGcF1T3zG1YUQSSw5jfoYXNNfcSz346JLsiHmLZXkaLqqyesCKuVpy8T9Nw8U4NEWwuinT2BQo4nUfhMKGP",
  "key12": "3tJDptoJCNL6ybAdiANQeo38aFRcPcwnK7Y4bAEkmfJQrHeNhH3w1k4JEY1Bej6d4vYbtrCaJe5MCUtuKdCAaLTi",
  "key13": "vFku9zkNhwHWuSC9SdHTBfu7ixpqGmYeC8epYfyFanbWQZ6j6BXfp1GYz5kZVpQ8CQpPBLsJgb2rpgYEZpkGqJ1",
  "key14": "2sAPNai1nrz4ANPKPxWfUG2nDveMKqCmFEYM1fBxebgX9hEYXpXuUBJq2kg3ZukTkCueaCcVSesC32MC67Cny3VH",
  "key15": "48qw6o5TDHUkaxzEQ4T8Nf2gfMq9uaQsmVbuAwM1iXupoaY53Fp8x7wMkXijdcxFzTVQZtbYKrPdg1J87YJLHCTn",
  "key16": "XF64bEDvoGtUhgwNbK4wHYqJRkVNZSFsmW99kDcnYp97uFobbW3FdZaFoe7uYHsghC9CAqagmn3KePBmbLvrAhP",
  "key17": "4N7UmnnitiZq9xifK58AyEaDMjscLJEZY4qh5iMTija6nxiCK8Y9iPww7khbcEfwi5vofmrgATiijJVvMNfGyxie",
  "key18": "2uBQCXY4BNgYU8gSRzVjPxo9APiZ59ALuUMtYbTLw9SMH4GknhSNDeFUvzzTSYgw4FeAEeEX62QCtY9uy1GnHYSS",
  "key19": "4eL8itLR315ShPJSKgTabdC67B6EHeKJM5nMhSKCUocuXZTCvbnny55tHAsZ4MKk1S6LKccHFR4aCKFfy2KHBJLu",
  "key20": "3TigviszhWuJCXCVTdA61oS1SAXAzQu2KLTSin2UmwN3fqsVwZkNfpai5kCTTbE4DdEb7WKWZ71md8V4a34hEF1Q",
  "key21": "2RfbUMH5yteRZYikxShFwS2XL1UQbEJamubGdTyhfrZ9Gw1hwSN3edqiPy3QMGnqmyCZDyrisMbthniQAmifXPqi",
  "key22": "43FmmQDNdcH7R9AMDUNpKz8YFtAe7cYMuP72vzS8PoWLU2aUM55kjhECAUW6hnQDJLmTVNVkpcVc135vTxUC5arj",
  "key23": "5aEpJJXk8CuaYiq6CeiC6KXewMckkkM5vkE4XqeyVfSo9KTFN3o9gjC25bkT83qgjrMz4Gyjwq4vJ2YpT2h533iu",
  "key24": "NWY8FXxcKk6qV46ievPnMuja2Ufnh3H3Av8vtmTTRqxQq5jr4MhJN8vRJJuG86EGULAhEZ9xTqdwjbas1U14AeZ",
  "key25": "3d7jYwDwcRbfNYDEU7FxCqkMZmTbbcVHrdEMnWzUhqMJg9QwqcXoWAZDq8NDJDoHWuwzseGcKoq1uSF8ZsGCuD36",
  "key26": "63QqfqLaFbRHmZNbLqyTgY1AarKj3vppA9W3kuv5KKShfepJV6pB3pSdRAeQ649zzazqCVvRpTZLUF4GBZbqrmdm",
  "key27": "Xm1YSr1cbvpVEjSTm352253PjC2TuUghVGfcozay5ucdsiW5w7ZzwxN9ZRAdrtPUwAfVowZXjB8rhXH4FeaT8gs",
  "key28": "3MihfLLMrgG3vDKWzAeZY5FqDULVkGxcu1vN5tx1mRLj4F2X1uhTvmc1avG4osU8bVm6vBJVrVPCHyaCkrvdMjZU",
  "key29": "cY2LwqpTA9WsXNeA9B5WzDCQSWcntYpHJCRyp3vA9zBWST2AumsAg6FUSFddA94ELvHotamHrPzhumFsQQPkwXw",
  "key30": "25xjzD5ksEwMXfzGPeGxSc1Tgko7xLgoCuPY4umkHFRFfqNUedPTXyHrDwtP3XgofhTW6sHyjxbmPuUN544izbXT",
  "key31": "4Ee1XE7pjwJbagbJzSKgvP6k4bkDbENDY6CJjvHxncTJ5nvDbPfdYt1npmbCHWhtvr4pBKVFF5s35v5kVP1nE6Jv",
  "key32": "3NsFub1n2KLFXdWTA3i2JGyfHWu7jmrptkjM4RuTphX3ag1aCQabUhaDCzcSY3k33RwAQFJHfr5mixzCNpMkp4tN",
  "key33": "5tnAq9HiuBEfKypxPswHVADdibk73hrCrwrTLZrCm8hbrCdV92yFeJYrHR51NAeUAki1ikLwApxXFWyB9HGkM8v6",
  "key34": "5TsrmyvjnY3PCsCwrs8gAek1b8Xuaa9KmuqGWVcxVr4HaqiuKLzGMtxXnfQpECZBcGAVggMs163vB5Pf4igv5zDa",
  "key35": "2k1Ex91gVVkJdFLrkS7h5G6BkN77jnKFXbnXLQVR26ektSGfLTAP8N1GWbky11gBKGoexqFk8tKfinFmaEYzwvEX",
  "key36": "iTxd1urV67FzmvjkwpG5oMQ8TWiw64Ke8ju1SGEdsSZGsfeRkccztf1BvWVXERNSptMu7VnmRZUdcsnNf6pp5JP",
  "key37": "6QsyguuA33Hbyh7AXn7nwZ6sAzQSaTWzM3cZpZrDJyiDvYbfBi1FJ4DTFVmV3A5avaXjmQUxqTCCCxyNGZ6pMv7",
  "key38": "4covjnz5GN7Bb2VGtQMui8XQSaGwjUnitt8mpKwzdvxFjbHXxD9oneJzk9YZ7qSG5fZDEybWxZWAKd4vdTDaWvBy",
  "key39": "Jhj2W9i1YiV6jXKzN4eFjxSHW1LGFCE4nBtw9N9bxKT32b1YBkb4AcSyWR3GUZFYFvqe63nzZPTFiGFTmGduvzF",
  "key40": "5WhJ5nGwZMc7ewS62RjBKfZsuHSv7AVBHgorNrRiTAsqJnwf4Mw68PPAtSuxpPRih3f7ciVLQwiTebMhqf9ccewB",
  "key41": "3bwKyaWrn3qb197na76bsmLz27QYLKvYqtxjW2kFR2TjL1tk4PQjDPrZhrpgiwaeE5F3ikKXWJVdq1Wc816VqnFU",
  "key42": "4bGqg9WJ27BK5keMxDa95tTmCNrCL9TE2ewrpadojAGG2HXACSWduWQiUnCkeKCefyF6eKHAA2R8hHvZyp5BUg8Z",
  "key43": "4mMwt8deiJfKtNTid2wmn68TCkMAZP2KPJEJbV2xSrcu1MdCH59i2JKUPmMCFLj7yYAPfgtc9nuphXsDwKbhQbka",
  "key44": "7vn4E6VtwV9NYAmxz6SGtnqo9RAE4kabeGXbnL8f8dEEteghga6CCdk6hkVX67y6Zd9w1gAsmPmQaTLPFUpWif8",
  "key45": "4EfkkkvxxNxvDq2KxU5zSChLdC7R1wyDzczPfH9tXNXaYyBhgoYHQ3G1a17kRrpmCd89uDub7p8VLyePDRXhDtjz"
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
