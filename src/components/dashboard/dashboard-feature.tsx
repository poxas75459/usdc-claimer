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
    "358CoDQTb5nAYMoxXXTqgJe3FzxKi4u2dfvrnemMg28oox4mtVsgKeQQNKZSaSYmcKkpHHorLr2cyCM2fN9YCMbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hUmfCiswpNo4ugcrgRfnHgx5VvKZYrxNHn5e8oZ4MC476kK7hE7b5NE5fXeeH7382f3ewhGZaZ6k8nR8zMEZ3Gm",
  "key1": "5PrX9Mf2PYXP6V5iyjPux8BazHRukyhfeQgy5r5URiPt6QCvgSRGycuP4Dnd8cMc3nxQyurzGmqxs6xA5rMZLmFD",
  "key2": "mGnZPbqYPsYZNhhRGEhGhx2NMWL4b6fj3gvzFrXa3CBZzFF5MdDsbSHdbZgNxqcxkLCWrtRu4jKrwMRF3RkCBSj",
  "key3": "2tGSg97Fn16NC7FQF1Cxqxez7XiozytxrWiu9kZfARhDUTMmgXLc54sVviR5PP298VAVoz1ybS1rK6hPVSHJnHRE",
  "key4": "4e23q7UwH63obZmQyJLNrg22mJRAT6qtPHF4ihmf8VPDxMTF4CginYD8M7qfHMqCvnWs97Jjv7FT4Y4a33VSEKDs",
  "key5": "51ZLr79HzMp1CbKukAaQnzphnjF8fKRe6MBHySZqxr69TNRWWsGCC8PxhaZppdPNPtqi5bxwzXqLMeeLBUGD9xP4",
  "key6": "4uZK2tk7xWMniL63XKgLRsLUUsKnY1dtyxTN1E6XS1pSBETS2U2egzpQrGU9BknUx5VWWecBCmiBtMVhaH59mEw",
  "key7": "2RSpbdE3RX1AZPFWtm6uBiaunMZUjieMt3EtskzTwZWmU563HCUzLx7asgxTV5yfc5iLMm4VCt27XqjDmFpeEiXQ",
  "key8": "5XoVxcdL78DdW5rcZhVhGiQTo3ZZiMv99mjXbxoasuVvn949U1CACG64DWF1tn25csB7ewLrc4obfPBhu5Y4STWK",
  "key9": "3VXkdcPsVySaRg5E3JRMk5MEt25DJNrb4ReN3htUP1VcNk3DfuebE4PvgvGj91yPS1bYbsaQ5R4abj7s9JNt4k2n",
  "key10": "5YBzbSGkERvEZ8nnoprCHtAXhfvSkhScZghXTJbogd8BcT8h7RyNUpkW42in2UA44tEQcoWoYaSYTqTjAuGSz7X",
  "key11": "4cAepnfMmG7PAqtst4PrkbFxXq1DKHtW18JA53kxTCFP4Cuxz8oRN7SuLBHnUTqUhZkudTRasKZsZsNvsstXwTY",
  "key12": "67i5jYknsewiwHePBE5KAnSsWVwiSyaUVh7zCWWedeZR859PsVX4gHMMaqE6at48g1kbkhpM1Q9gcVtTovzkPrHj",
  "key13": "2mwurhE7Q93si6Wk1uaxksnsYbswLRz7wjYF3FFYWMHzYDfsG2txqA7dFaLcAovCJQh3nJzTv84hZURjNeqeQEzn",
  "key14": "5WC8gNfkxwJd3ovVv65k5Vzx5hyPXzV24UEUhx2yRaG4ocNtsFaaT9AhaPj6x6xJYEET6RffH88ywDnbkHLG4JSz",
  "key15": "5Qn3qk2Bq31zaCnisTNCShBJgh9wsxJLoK6hPu2eHTkKW2VH6BXhnX75fBteodYXRQA92gELrXaqo3B2HGDQo8LU",
  "key16": "4mJzCaYLJCDztKJ1nCfrCHcT36anHZ4neC8xw3H2q778cvs6WNzXH16vjsKgVQAFqGPd8oYMmtGkYjfYTAbj9W6n",
  "key17": "2XsnBKpvG1AY46ZXHchZePQ4QjVFfdX4nf1APjCKqgBM8ebP25FYx4CNfz5TUfNJrnp5GcyZdsmSaC2ZYbvNSifc",
  "key18": "5DDfN4T2PCorKfPmjzMk9qJVhY6v1MZqvT8vtfg8teoKHvjbyVzqm7m8zkzBtTRFX3EyStzNJG25QLqrsCEChP95",
  "key19": "2XeZZHSJLRJ55S9zA63YCRdLpjVq8fQ9iy66p97m1fEsbCfCHfyWQUuQUrFex6rZD2vSvt9gLngNEqCbH8bJjUQg",
  "key20": "owVBkWHEyRQykgwtAhPwgV9455VGs3xCKD6KB9ScDUQwXAEZuYeg1KGHYthg6WErN3otgo8CJqphtmm9etdq8ZJ",
  "key21": "BkpQU98CNzC79RPgzCvMB9mrGFc4uH6KwhwB9P8WF3J9REJMwc4Efa7zEcHobHmF1Wn8JCD2XnQ5sKG9EcTDCR3",
  "key22": "4v3iNinJdMVA8Mg9QCSM5y99r1Vpi1XNU1pMfd5zEWRsKvNS8SvUKLwULjrzQ3MQVxHbdg2bcQjgxfqyanbFe9xz",
  "key23": "4kxzLWHnfwFNTpEUmqU6Be13NJuREuqagEKCgpuapPkj7Lpu8NjNFqbHA6ZK2t7mpz1DBiAZwwPNqZvwDvLSfVBy",
  "key24": "5uqrMhVtx18JFdpJTpivyxm5MWzgv4cmEmhXKBFbhV3xpUY8e6VcaHBTuLE9mde7KCbtbghvK1nJNsvyhcweUhQo",
  "key25": "5vvLPMsHHWHHnmb3zffQ71p1QMiHpZA2mLDV6YpCxh26dZF5LbrseDfQgRnNj5KzKJj2y23PSoccgGWab81pdeCd",
  "key26": "23Qs94HGKmzg9j9Fjc31tA35yjrxwdxopNRtHx12Rh1AzFVfjyrqHTvHWBpo85rE6a9LomTNpRJVApyuXwHcY41e",
  "key27": "fro2AUJL2CsSaNiSQKvSEA7YcASMjvbt6JgAvWv2uYxCKddpbTyXZBnbomh7kDBFDjTecyczhATq2TT2aDriDfu",
  "key28": "4UzMdxzBEDBcRAPRsgctgGhh7cMotekZyKKHPjyNtZWjdS5cPXvZeYsd4tyE3AJFX65sCKrgjfdMc8bKBCjudeZJ",
  "key29": "3ppmRfzWtMmvR7q3KK58fQu4kmSa7mEkrnUra8dQviPSUs27JKEbcRhscY8QxGBzxEh1zeAhh9u1CwrG2Mw77xFG",
  "key30": "kzcrMALRCBW9pCNcoubayL85xP13YwVexbe2Vc4SPTHELcXDLf4Q4Z1BCpaeZxSXWQGPr2kUsQsEfyn8e9VSZjh",
  "key31": "4G5JeoCxbKX3KEpwuPvE7pNH17hN4B5grGR4nE89fhKjfpL6xz3KFh5Sg51XtgsbW4NGYMiq71gN4x6Ejx3XQtro",
  "key32": "5h3wVj25W7XkeeUP8eTs78qdk3wGpWdjAzAb4stAGKqwCpnheFLRnX2sLj5MP6ozdgh2e63YsQSw3gJb4hSn3TJv",
  "key33": "5SCXckXQpikFC6wvCT7KsXoZ2DArD1M3CW1orbvG6JPZxWXe9kBGuuBT4THRtw8UgYzbBNigKd6bJ9URyTHEiJKw",
  "key34": "4SUHCqwA6gxWEjB6dwKvWvFuyUhyqYG1HoaCYeTFzpmwQJgHT1gLCEAEz3ozN6iJ2bUUwrSFKKsJMJzq3TVRcfNT",
  "key35": "3VsvSRsBAQA8QyvNMv2ZSQfTnHdDr3zMAuhNDouYV1mSg1RHVbM7kRD6bpDZLdFTCTCED6oZCTgjE9kM3r2jU8zX",
  "key36": "3ufRps3KqAFdwH5zChSfBPYWaczBWRhnib14j6ytoiWgk643ppS5uCtgY4r3uZ35TKbXt7mkwZ28SEEygsgsynRw",
  "key37": "3biZAnjZ12WoR4U58ZhJNSvCERrugwrHfZJtrMHDrguVEedXj5QQELHrfzd3tEcupQNeWGwyDjYKwQaJv4vBYnfz",
  "key38": "dGDCn7xgSHBnsc7tPF2EwftkAg9J69xa3FyDFrFDhL4bjXpdFFmUbNA1EG4gXbd5DxZFKifoqA9w3kaYeVNEmv2",
  "key39": "4a9Rmx23pZcu6ZqizRZT6JvMGnTNeXzkP2bgWj3CDeWF6GsJ2d4xCMJc4nqYk2xxqPEx6ZtwAVVDKgY6xZjACdW1",
  "key40": "L3bdNaAN7iS11E5r5ohoef46iNv5AFhAug4QuZ2bpyAZPq7jpTMsza4KTEfBk3wZQq3RmUvUTzne8MA3KUZPeqi",
  "key41": "46PxUweRHebtXQoh8f2uouaRMRhXDnp2HsfZPZpaHq6sS1YidXwACNxw1rUn6JAWmypBgdWhUUh4KaskNW75xDUb",
  "key42": "3XU8NyjzbfjQeJwzqxbMSvqizFsYpp5yo87mro9t1KELauuUSSwwV9dMJM1uD6GWVXijnvkkrHNuu1L4MW1DBA1R",
  "key43": "47hwjt5g2KdRi94GCkrfax33b28z7tX6zpio5FSxhue8Xpq7RqsELCxD4XDoTZxkEiRHgd51VgBVeZFTN65aLtpk",
  "key44": "g56wEtHdPz1SA4tPxD2if7EBKNhW23gFRizBAytcta8bZo4KcYrwRVnRWCCifKQPWRY1rrJv6Awuc8cQwcTy67j",
  "key45": "4M9WMs1NGUcW3ZrNXiTCJKXwuWP5HFyLPTWqhXQvT6zLJoTHgqUamjFQXfvBqRXGBpaHr3b7USahByq5NSAm5eqb",
  "key46": "3S7VBZ5x6CTywVmczBsdZDz6aVQprR52BdifQ7xA9TvGiG2wvmrEeNGykBGJbaDEmKCNuztopaS2k3yLrTR7aHXn",
  "key47": "3kDKvVyBpY1zKpo57oXwb64jWwzvh1HTonwP1Sk8iQ6ckbbBDRFu5pCjxgRieSFVDFf78axg9cFJMVKvTBAbnfoE",
  "key48": "3Yzata91EmG3iGWm9boxY12vdvmiVhasKXu7nJk639LMecAkTyKkY9s2K2Z9ADaotMMX5iGXJwGEwtkKT2BEyEpU",
  "key49": "wtVBtogszzkAczXxeGGgbqyU9E32JppHPe3Hq21UXpwA5XEhBzjeLdPS7KXDkvjppGjXxd9zDK4EzbLMwh4tVHk"
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
