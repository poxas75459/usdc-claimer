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
    "2Z8x6uzx1uAZLZFKER4QG8PXXiHsZRQ7xSb2jHhzE2omXCAkgjmmgRNFUojT3BKMXChj5tNcPtgbQK6eKbtBY7QV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "595sMUFi5iwPKdax9p7edfJYmFJj5DTx58H4YeYUH5QMNXLsJN9VKBTNhTxvkkyiW5VttfUtcpBVncNh5YfGkxqo",
  "key1": "3ZbubteJ4PStf6fdnEjKKLPd1Ep4wymMKfNtSktu68da1fqqcigP5KKwSQddiQgGkZgeqCVAEJb8qCdwtZsgvA4C",
  "key2": "3EZoH6H6ZjZYJEkXdpE1RQfVrPyHWPJuS26cZ4emUfQh3JYj5ujEHvjpDEGxERwDMFpneNvz86nSTdRBpZdR5pdD",
  "key3": "5btxLv2WMbdq3Sw3idJgHmxR2Vjo4FVcQM8JFAjw8D9m6WPK9LKTDt9Vr4K8JJ15ChPvfykBJyGnqBiBytQT7pzm",
  "key4": "4GkUskre5jFnLjw72AZL84jBqhSS35gosZBnqXaH6ZHYt1ss8kQ16G89xKJvmA8i21bMLn38Wq25kikhH9wsRWQM",
  "key5": "4NA6qnrBtQAkoge42T1PQw6Wa6e1XLuU8vaSKqHVE2iJeGJeHVdoBqPNgFYhn2zsoF2FTXcZt2zwMRDbJjMmhs5y",
  "key6": "67njJxonEx4nvyduxoxK3N7hfzcp3BE5JZGzr7wgxSM3RLRa9TogcqHcRSwY1a51gK5aCYnGXhabD4PJrtQMi2Tw",
  "key7": "PSYGGdPMeTxiFwwTJtSEv7qTAq6jbNLM77KHA74X39Kx5m3X7FtN66XQ6EzeyqnrviK5GaMogamJiTcqYitR79Q",
  "key8": "5ZN35231UVS6MmgwazK7b6BcQFzabpemX9UMuJrvxJgr73VY9xYTrCgRdpH2VwRiXE1UsAGqsjuhdtZAXy7V9Zd4",
  "key9": "5zaBYg5adbA9EzuZYsQabUsYMJUv95cyDUq8e616tZEW3tKRK1RsGXzedJUAMDgpVZv2BA4AhTySCq8wXye9vtRD",
  "key10": "229ZZMLpj5UfWnWEFAcJ3GDCeVehwLwBBYBYHjUkGZPmgnFnNkDYJVnFjc6a47sCrzAtiBP6eK7WjB8oP64TAN83",
  "key11": "5GxnBmKUXEXkRbePcv3o1tfT3vak3QP8XSK7V5ipdyYNNZVbnUFjCyEhz39EZFxmPCGX2tWQAiMXAkv3V97iGnLT",
  "key12": "bwUsy7q7JvSJLMBjxnSfajVHyj23TUjewGXih5pmyJuByu4M3bFFgYnGZASxwTyJrg1hNotEJZTkWeEiUKGTd9i",
  "key13": "3dxwnc6NBFygb9aBNhzcNaZXdy8ppNgQmJgQ1GRfd5QFYVVELsjCeryMYYr4wDNhtJeKem6y13aL2xxpu6NMPojV",
  "key14": "4z4iv2LHvVjo3coNsQoE8ZYL3hVKHFwo2Dv5njoEgTQMHg9hwR7jRvRBRmRKmMTjSq5Z6FEfmiCcoPe49QZY1vPy",
  "key15": "4M5fY26sufob5SPmLcRZTShdvWL1iFfNM6ipiTGqK1pe6AftuA4wkNzmRSbmUQXPNkUduPNmEZaR8hR8ebXS4ftE",
  "key16": "2SZ6m9q1MP5Ai65nk2zBUEdgBwZvtdcuahwFqfcx4REcLeP3MMpsihHrwTavQReg8F9GiBYNNAuCnYaVjwqLGmgW",
  "key17": "3vHKiBtB5DegqX7YNRjUiAS9njBmEHd3FBv1kzaeoAC6PToT7FhyHBHaRwBUpwypKM8i5igJ9EnYhifmxYppoEQc",
  "key18": "3tkGmirv7KohgQdKWbXFSWDESASxqcd45FRfkQyq45wgfQC99kiLUhFe42LhNwwoKPRVeeTMKGbjKxLZLu6P8YR4",
  "key19": "3nPpQaW4q96iqx7k18xjkzFY52tLMGR1yH8wWFpct1qFfbV8nyj3ppDKHrdMm6UmcdfvGQ1MPNUBrdRcWSfLx6w5",
  "key20": "kWEmaaPvoGZQeYThtJ88Lcd4EK5Kz2TVPUHQqMSA8JEhm9YF2CXLR84hK6rvn8AH8FBdjbbca9kXQZNUFkjmvUD",
  "key21": "33kjcPLMPdnPrxAyyk1pMyck56xwY6AqtMcs9qnRo5WzaQjNraUAHmZbXFHXzQoWEc8uz9QwhK3pJhMVfQfMcyzo",
  "key22": "3gs83MjRLBMAoao67iPMyxYe3wz6G5atcXez5gDhYMg9HWeYxThyiVwQbgt7PM1nWsdmrdNUY7UiaHo5sAPWi4F6",
  "key23": "2tosXmHYV45RMf5c6NsMsPmH16nSPqZAmrhjLkAe696J1D1gXdvkpuuRhxSJugd56yUgRd2gwXa44bUEQeCbwtgr",
  "key24": "31Fuzsdk1ocpgmsMxWDsFAMvGcn3Kt6NhuSXmdL3CgurCtujSUdMTyZFTKjMgPaMP5JSWvrFtqCcL5NGCbBqrDFD",
  "key25": "5VVDp9odc2d5roUyXEg5htPJszW7Njceac3szs9vBQNQtnQig7GTRJxjhKk3pZ8v5szPm81LWjpRQ3BBQEkpWcCj",
  "key26": "2X5BfgDWF2L9u22Fvom4JXaYWGSL2p6eHu1B5EVi2XLFEgSQihhYR3d3aZQEui4daQ7rnLyUdc4UWvL5ATXeWcVq",
  "key27": "2cmkpDdPKksrzVEFzP3LD3vCgmykMShrvgW41ZDtBvYXQCAF5eG9Jf2g42oBpCZtfD2rdGDPYeoHkswRaJr4N5dm",
  "key28": "4LUgjemDYL5oLVWxwH3zYyfQbjKcfjfeLG6sAFhVBtDZaAGndKAQxAM9CKT4e54YGVZUitQnC1XgmZetL6M3G7hw",
  "key29": "2avpRLg76TPriosyKS5CYUdaCepiJC3dDY7wobXHLS2LFgrkuwcWB7MDEbunTxVzJXLpuEsyDw2syP9N7gu8r8cq",
  "key30": "33QtBYybuDG4e3TEWXrYWQJtgRSonUkNhwpxRhPsKP8dVYXLNF8WnAFP4HahUeXqRyQpCRmoUXAzkiFJYmo28SRV",
  "key31": "EfHCiZTw1c1W2x9W1985uCsyQtP5ia9GULns4HbarVp79fxKfrqh9C6pVusKfZhPEyz5vWxWCotBsZQy4coLnS6",
  "key32": "3Rb72mawtEwEpmHUDDP3vFLKZZjBtW4aWpfAUgNN8J6LMxJjjar9yJcunsThSJtPoPA799mBFwu61Wz86bQWne8r",
  "key33": "4ESPQ9dbtQJgiabA8E5diEGsxa2AgbBQBSKb4Hq3A3wGqiTamc7ehUbQfjtyK1LejVhBFuS6Jxp2rSLNrg8vaGin",
  "key34": "T7nm6sAuSFQV7UH79AgeZ2VkiyyzxmmQfUdKYCS8cFZPTeGxZnAqPLftJ5nf7vgUMAmr3GC4QsTFGMsnEx56A8h",
  "key35": "2338SHEVkvyRzADCexaUXXRFrT4DtqVrjBmbMzA9jazn53duYyvDMh4v9t15XeA7drGYdrP8N5ywLLgvH85upKUj",
  "key36": "5Q6p1T3Q9fiyJubHt2SpJcQXyfegKPovWL6ifBYaSVGEEvCRtWDmZkG58Ce3RgzJMzF5VVoJG8UU4LiwXcAQiZXd",
  "key37": "5GwKNWJcT1ogjjgDbJyMB4S8UhPthDhj5chxs8Kn4w5JCgXPTn3tnXdvycjKS2wJen3J67f5o6TdoAYcQKcmGdPj",
  "key38": "yxFeQT6JtBJJnkXDCCgy8SubbxV1GtHhunD1Yq2Ytd6PdCZdnoks6gJk1cmPFbeSh4o4tKA4XYhGMvjpJ5569sk",
  "key39": "FUayPfvzNwDxPJeSxKP6smu9kSRN4Fy9zgB2J3HPUxFtggQ6p4fEHVxZ4RUDuSDnbaDqXoNZpCVE3Dovg73mf6d",
  "key40": "5reFxPjcsLhpU9UK1k1h1QAMCyNJobH1KbQxM2xPsdCmMbQSCvNYVDMdE48uk9nztAML6UiXiU6pPZfR8BwfFM3h",
  "key41": "2NQqK4r8tvcNYzy1U6gN5EPsQbX17m5wiqm4MDAcWTiBN24mWmWaDd8sBzNvHUk4qToMjgKazw4wUwN5bPWhppA1",
  "key42": "43rxkEKmoqSDoqhAfgPsXsVxrrn7igNuc73wuoRjGcr1syWGY7wRnQDMafC99ZHkqdUyxgjUz9s5irkEEbw6z6bU",
  "key43": "4jRxkbooNkNgAwFqrJGfx6QgmWPFxy2kAKiWaqo1hZi6eNyzwRPTCKHmhQTQf48Zm7HTDNtFe1ujLsftse3SRko1"
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
