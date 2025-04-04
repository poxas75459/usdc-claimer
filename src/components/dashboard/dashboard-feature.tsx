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
    "7Lv5L8w1oywGfEPvDptiYhP4R7D8TPsQVFwpdLWFWw6NG9XG2iUMkhMdL9GAePSLBb3bKXG89uVL4uR7fE8TeTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k1YkRb8sTfBiaX57G7LQkZ1pdPFLSVBKhnBa75APzsWmzfUo8SaRFVEVhp5JrRvpsjmCWwMRnHDqfDPSKXDcRLc",
  "key1": "5fQmRa5HNiEDokEpgBBs8iVRGnFkHdu6fkFWp2A2mRpiSS93bEvajoNAkEZT2kzEHqVSvUM4herozwr7YLrf1TUs",
  "key2": "2mvPefJrniFMoiNvCwjJuBUhsc77KYe569gzGYdvpFFZg6rXfwMMgkaRwrigpCDUASp5Dg9zWbdbPHUZScd9GPrv",
  "key3": "41vhA13ir1U1HUTqQGDZCfZaDqCd6xoFSmjoKUj6Jr5Fv5YykJYXmpSbdLiHuTerkybgmTWEM8XYJ2nqRsrYXT18",
  "key4": "4DA5hMuaWLPnTweiKz4eQj6VA8Nyv6XeguyRak3SD9j3Xd8iQann769db28pwKPoAxdUZMTibPtavBYyzcdffEPX",
  "key5": "576a5HETdajH2D7njQB744duH4hbvhejJgfCkZP2ez84fwSyFMJTby4w68SzNcehLgXiZux2djD5U39iAZZ5ENPx",
  "key6": "3rjaNiNYfZEmkAhVkgwoSwYZLP5KtMAcmvSZNmZfoi6cyhwmxoXP2CXMLiH9x3hF8GiRCQ6odH2Gyj1YEzZ3QYxu",
  "key7": "5YvvdzAzk1xLSkF8hsK5qdeuw2iELySFAate6HWKA9Q1Er2CjCvMYuRwhUQCi6aV99xba4Af8jWD7hrZwDzzBc62",
  "key8": "4RNbvF3kv2Vi3upWFdGS66qZX2NKSSomTozKWzVtg9nBok66GXAjfwLauWGb5Bs9dNC5JZLtb8UrkEKJQM9wCWBp",
  "key9": "2dw7Mx76xsnfvKvXp1RuifnL2LtHwfQY6qoZz6VZ7Zn3MgvHwSn72QJEHcjGudo1JyjtMPekjw7xtsshTcj1eKnF",
  "key10": "5YrvUc1yDLVR871hCmd5EHcZ3qxEqUzzroVPn6xarkVHLZxM7J2WKKhLNm2EMAqJQtrD3SmNwzeNuWbifCBXHtou",
  "key11": "3qv5zXDSgLYS8NzfSnH2yYavAWgQ4Un77NvujyJkSXUUEK6J64jWLKGjAaQPEH56WaAbVh3KFGFiNBmowCmJezkQ",
  "key12": "4uKsCFFA3XfLhssVAmx4TuABQXLuTQ2JqwawKFwXjANLkpZZRda73FfWjrz61twmdGH54cNLYBLLXk4n8LdpEyXw",
  "key13": "3u45WSoSHs8ArxxzWUcYMUaBcUj4SoQ9JytZQ7FWnthyqVZW2EASjyKCUfdLgmhdqFN9GmzEo9ZpbUknAB9y3rtM",
  "key14": "8yz7Dw6AhCcfE6unmEtJ9Thm9EdsoP1kMVBrLyvJr1Z1Fn8yB9Mvbt36svySAyw82qhVD56Uex5yKPMwXx2BXhE",
  "key15": "5dJ5rhTEzAC9B9nbZN7AUDnXF8gqJivrrfDTmxguchBTuL45BCBXtviLNh8To9YzWT5UnbEsHvs4EoKyByM7wNBb",
  "key16": "2nzJrqqm3ZngJmDxyMgZJH8a8eqWTDCfSLJi1q9Z7aNfMrSwRW2zmwaewCqKdghH6CpsTCGnDUu23h3T2xAUFZ75",
  "key17": "54VyAP43TL5Z8Fq9WRrRL3hdEPaA1ZadNKENm6V3tYsooUEaewnonLokmg5XN58MA5qMD7Uj9APLdXwFDkMepZAk",
  "key18": "2TDR7zHnqBGvooCjEffbYUm3ZGcepQ9PSgu1iUMhypSNCVwCHbLHDqPxwZdzosnWdRhsj8gmJ3TFqmJAt6Jstig7",
  "key19": "44JVyq7htvzGxdWTuDV6jMx5f2qGS7rc95NtQef3ZvYGpZdD7vPpzgGkJKWacc8WMgmiqZyYjFTpRqtdL3wGcFUd",
  "key20": "4yUSwjao9H9ZbKN5xKRdaUYu3rCqWsp7vTNQ56QA1YyCNsEgZP3frd1xTSYVU8E7XTo3MSgvPURSA4vxUMTn4PRE",
  "key21": "4xsXM9NztrFJoprHnkaUzriWWH2ZK2KnkQyAABbj4tWk7NucKRp3xx9g9T11UR86TVndzLXe2AYMsbY9w8uZLKqY",
  "key22": "4JV5PzHmXXUE7yQK2BoSRf8zcKJkgqB6Qc3o8mBZWMXmBzb35Y8LnwTr8JPuvkZikxzm1yH47Cfc5T9NkJb8Lawz",
  "key23": "2bCfMfpNsTQxXwZ4MEcYBp6SCY3qrAPGeKA6ZMzHPaDXmfLAfK7FncuahqRrxJQQx17qUmPJeEXWgM78jit6YkH8",
  "key24": "3Z6ymBANRHekVvCuGkiwF9Dq92WM526goEHDEgEwE4DMPFQbMvNofRao4iumASGqCHUK7Wy27a6ySKLxsJMUJrot",
  "key25": "4npCE7oyR15JyB6LCvKopoUtB3Tvd1qbFy8AxegHst96bZnTSoY1DskZqT8QRgRXeGQC4RCX6jTWe4Ek6ge1QJLr",
  "key26": "3KCwKhBLFzXDDKAZemrNUzQ7EVoyViFKcSvgxWFcuPYPf97VzMoCQEVEGcJRpFZpPBrNHbHbgqkDQw7FdtsyFMDK",
  "key27": "5JDqMmxmRgtaujpJLphdHiYaNpzZtKCijo3pw1tcatM6fHrtCRdxcPUfpypkBbor5vJzYzKRUG8XYk6k4Ca42aG1",
  "key28": "2CQS3HZF39C8oxAXc5A21PMho5wvbwm6vxDAiGkqhpgpLB74XJFaiUk8U74Pm9ks6w4PeSfid7EANAr7cF3HSa9i",
  "key29": "31ZQwMXUn5SM5Y8jFVtsvZRrLGCtiTP1qhtzB9GjKe1kXqPixrsiBxgsVgRCzgxbCuc5gnp77yteLjtUwV3AixHx",
  "key30": "5cJ9mMyQNxGxFcZmqQVRNdgGFp3cDX2KyRnjsomYSUFLSCrrGkVF4euYjLwHGgBrPe28WLYRWyMYFKov3WhXbdzs",
  "key31": "4Ya7uQosX7uBxfuecY8DrEwfbrctig7VuSkGFZk9uAmqawdcw3yCXFeBmTtqZg4YTDTNrknuG2awi5YicVLKMJb6",
  "key32": "4XbpqbkfNxqufj2d5WUrVj6HmaVj4vXkGT5HF9z48fdp8xRXopD1pXEJ92nHoWHfKc9WTicahbsm71GUS5jreWeA",
  "key33": "2i2LMGVM3JirufUuCMcHVzqiJQ7ZCCPz6TfFkZf2cKq9G6ZvLZQcaFEjJMUtZKyXqgQXxpqAiRWQ9Fm3btXumvhZ",
  "key34": "3NW3mNY2QNnYeFL98sNHZcYTM9qA7EUvf4TXwVDc6mWvDbF2wJkRFc3r2qNkVaEnMpKuiTBojRKKzyQFDbTbPeZm",
  "key35": "4etga8Tv9U54TuY4mkvKbKbqm2aXEttoVKPmpfwnAZ7MKzYbfE2uQHBfT8FUtHxFtUAEE1fJoPzWxta2SGTe41AD",
  "key36": "55HpdxrdvFBeBDpEYzsv1sYWsbPjRNQuu8u7UewjDy81rMXwJQDhZHKghMvWtsYPhHYK7mgnZzW14Ghx7bGHmH2Q",
  "key37": "2E7LZCkVd2YwuZJE2PcuHDiK5CWJnJzLAqxzNcCYCLwpCvUXUvphAxiPEfmrsG5DpXg8MBtS5Y71wAmrD5WSponn",
  "key38": "4NkcAxneanj1DFWu7JStsJ7qi4KcYSLJvYoCG36fFamDnmXKaD6L81KBgfZx8rAARs9gbzPm2Cy5rnYqRNg4t2Tm",
  "key39": "3w9y4VKepHMkSeC4hAo6UuFNbhUudxMm7pZYSURurmQPmyzxe34dJzo6opVrEZSh3QmvCmWH9GNyEp1N9baQVkGX",
  "key40": "R8TkRf3gmdDX4mseAPoMphsUptPxSs9B4Wr3AjYCiV2BxYxBa4o1en3UszNpu4xJmpPVi3Q5S33s17nsCmWddZ9",
  "key41": "3sj3RiP98uVdi7PkFTm2A3KTB2QmnYMywVnqNJXFRBcV958CPU17jgquNEZxcwPX9r9jQfaqBNaJqpoDyqqY8UNf",
  "key42": "56RwsSAT5MUGNAtzpmvtyHiJoVCCEJD5UQ9MYkY8znx79GaHb82WjRYkrvE4zHRQ3twwRZZ1pdTZuX5o8VwjCdAG",
  "key43": "4QE9bohmCgb3AAbEwKrhJNbEKjbCGddSucGKy3gvmPLMHWN5cSm8fQuC4FG8BNNFkN1rVeFhQRTvSwaHSnhF2K6b",
  "key44": "4dS7MWSaXzEZs22kbM5d9KTgQogC4HvMPTTXe9gP4B7nZBwxyukgkF9pHP5FLmcJs8TmGFTbrf5XGA2NoP9rfZuQ",
  "key45": "5jfUZ7yhQu5TmtXkSHAhY1wGwJ8taAkYerf11RXTYTj2BujPb9A3EqB5W3476Uk6XgXZVCC9PEBwtTCtMkhkGQFh"
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
