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
    "2z1UZtHDZMrn3XNSe5JrukJhRLqdEYK94pdQan62iNyTSLAXVXKfBspzoKATfFr77UWbDhH9TeLEwuXSdR7Kmnid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WyTSrnns18oyeKxuEhqio5PnPHAvbtT6wurica5upDBasetcz96k8mzxrs7jGCHGKPsiYarKLGv6tRBsUvjFkpH",
  "key1": "2RjMehnL9718cHZCWkfrSMUevque1biZZdnUdadC3CHvBxcDkgPW83T32dsdgkyh1eb7mvZZWP3aLtGvpqn7L8Z5",
  "key2": "2qaVUrMy8pyzCXCYpDSX1rm6BxfBkmwpVaNXhVJtG5bnLWPjocEhMbnSzzgh3tfQB2sYYNktnkB874xzeZMpMoht",
  "key3": "3Ai7fTW91T2wmTmwexhf6Knb163yEJJPaT9W1Z7ejreft42wJRx35VEL1SMMPe6jBUKGhhn7pxQ4tQTJAThnay6",
  "key4": "5dsSpaHJwB9Yw41keXn11jtCBSr2Tg4eHpDs86C1SDiA1RQ2jd75yBKhx6AAQ3j46akhAaWd3nd41wcLWW69G16g",
  "key5": "5V7yTXzw2dpMetSvDTzrCYk994dRVeZnPvsa7JrsN8uKE7NQj1aMMS6uTTxvwc7ihRGto1nRrx7Vksh1WpAjoxnS",
  "key6": "3DwDBvcnC7Zj4Xfc75waeSsMu93pfL5oJpXo9BtGHBBWQqRdYN2XMbKiyMc6gms8qWMsV4dtoegfJKcAMxqXWopM",
  "key7": "5Urw961mBT1jWp9aovSMfYJsHQWzFSXEynFQbqUyn5Xr9T8RMm5FVds8LcsmPCeu7wu3mGbkvtGzqWr4rN6J8sEP",
  "key8": "27P3394BNZcmdTQCwpw3rQp8KYpRyWeUzsegyjHeDFX5NhbNQ6AdJTbEtaB6GGfrZqndvpj6b8VgMvJSL4ViH1Ue",
  "key9": "g9UrmKiCiXqmHJ45jDPdgfVoL569bLCGK9cNumhoxv5aCVPKpWSTuvKtJCRe11k5Jenu9DGFeFa5U2mw4VmHKuk",
  "key10": "2ryRZqt9iy6YxiGKerpZKKd8VtrTmjVP8iaZ6AW3kauSDqsB6KYVDPbaExcbfmFcFU4BkAZ6EDFEta6sxWX3LYAz",
  "key11": "6mesPENAj2TndJTSw1kBWDK1JuUMs82vXGCM2ibjGHh4gt8aVRWW2VD7LPY5P2HjCQytM943dYBWYCW8pkN3sSM",
  "key12": "23S533GYL4zoz73d3DCNMhA9H3szxS7BcyoWwnceCUvcwdbyGWkun8ihyctSw3iKrtBDZm54XZpiJ4beqNeBUs4R",
  "key13": "4XHWdybKkBN5sZ8gp7iD9XmavYxqXwBGaadFZLNPLmihBDXHwsTJLCLKcyzQP3Z1Jju5eBGBhfBFGbGuYuPEgh2J",
  "key14": "aDnuLU2CKGNQE8zbaMatuq5NE6V5KbbwbtmANyUtSfs3CnX6FduaGW6hVtb4HkBY1D47Cnp9oAmYWHBSFWr4kJM",
  "key15": "3yaAkwt44Uv9uhVtTpKmwhnjC6gvAz6j8kgcuR6ZqimUAZ1tf5kGVmaiGyyqjRpJn4ehPnpSQ3LSaTZ1tymaHVM9",
  "key16": "5YmeW3ZKhbNxNN7Cea1hGCVUk1KJPnXsDrJPRgJ5wSybwduqRZYqM72gdwKaeGehA423q3h6e763CYwMVsyyqNYz",
  "key17": "4VorRgiX2SGZbDYyayagk3vMmXa6X8bD8TvsuVcBT1gUJK9ZMtS5kY4xtnCSRFPapZNrNueC1XCBUw6rURekiuaa",
  "key18": "y3nynWsoDg5peaSwH6GHZnNSUfD8P1js84hZxJoy1xoMBmyw4tg23BewtUmcJRTPJx6rtNMpzyQzHQhf2PGNpt8",
  "key19": "5d46vw3XsVW8otBqtK5N5tFZK2mxvsmjSbNKJJgBZG89uuEUBo72iMaRxdNF5nbsaE1JVypwfPzqi3RWeYXrDtdG",
  "key20": "411VcVhYxWwt95XGy9T5DJvqMo1Z4TzXBKTm7PgBZmCXrct8TZY1CHViGTAnq4gJWyuxNQj3XFkCjErhUMT8CrQt",
  "key21": "2iYWJXuSRd4tM5g3mrV5yrsKih8NV6zQQFQhrqs5eJ78MdB5tTWyu7uHH1P7ocH3cr41uVg2pS5ejTpZytH1EDb",
  "key22": "2TtcWdyHt1pGkdwF8w4Vd7u5wHSYYsLbpmwj8TFz4g6vP99aZT1apKvgecFU1HXnjbRENrTno1GKR9jBUysPpYAm",
  "key23": "4ht5KVx6wrxqB5rivjRNxtCkDUTFeSDLb1p4qA5TNCweMfpLg3Jo8WbZpofUXvyFFgxBE9QbjxGTNciVyzaaDN77",
  "key24": "2h2nKvgBtT5zzWv71HydpTYzZdHFPDrh8zFahD878SG4dq1cS1TeHuXhogU2Ahnqdr3HibNEoktKTfaL98JC2yUi",
  "key25": "5Ce8aFdt7xLPqw59JPWwWk8m4hTuNBGHw4SmL4REaGTiCX9qgbkPHyjRqJ8vFTLu6sNqStvg9G3UNyzyL7Gdb2R",
  "key26": "4y69RiPJ8mHYdHBVmqeyj3Ri1NNxkSkCcZmQH72ssjQ9eL3FN7dQuAEfUq9NFH7DVKdhwxZHMBdcCj1cgBatkXjF",
  "key27": "4ApvZnLxL7qhE3nqVw9FzmBYa2SwHNgc3TvxxsrYhXeh9z662k2ju7CWP75mrPGRUAyYKR7nYL7fV6Ck3KPyb4MK",
  "key28": "jdyaCFanUopohLL6PpaQ6sgUn1bofbYLxGDhsNhEmoQew6Q98YXkVTdoiYFxfCvViQvzdB5QViurbQiP8VpKJVK",
  "key29": "2QSZ1T2Q7cbvAWPin8DMTWpW72R6ZfNMwXJA1sS4gscEtEQf3UaiZ4NQsqgb1mLwGsVftXh6CTdwSLdLWKqSXJYY",
  "key30": "41FeCCRn3dq34unqHpXcR4dFL1tRzAMhkF9KkBrTryEpGaj6MCngrsJAxgh2ZVn4uEzJxYdJzjwa7XkCToWj8JHM",
  "key31": "2pPy59jeeZGvK7NAKFLg4QAq13oitHhgcPv1pZ9mvFmo2XYxHqzLz2rChuftiD2qBbchfSyaSxK5XU8mqJ8bNSCb",
  "key32": "2CofLDi9G7xMKQmDVr7PVDokTLKt6Bii27Sfcp1ZK6BGFZoV453TT24w838FcY9igPcpptFZugt9DDRbQtzEzmC4",
  "key33": "51SWHTKfjMHcSg1oUFPawmbT2sKwgfNCTRvhewtsEWfuxTcX4XTARjTshAMk5TLbPVWn8CSGFvUjoxcVF6Kf4NMA",
  "key34": "uAypcsFh8zESYK2Dp6eNE2HJmVDwCJ1qsvvypmsoq4r9GtH2nPtbuLnvnNQAjM5hr2on2oMUxbJWZKQ7B4daFZw",
  "key35": "22AgSx43LV8g47Vgjex2PjtEy5EbQYHS7zL9TamPi9ra5nptCZsBXKPGCfXLMM7sTyggnsEwQuLvfEUKEvzYayiY",
  "key36": "5XEi3Nm5Dw8UoL8PjaK57z9wmHeeKDwkJiRxane7iAjs3vPRHgLx1vbk4ms9bpMdb8JdfuGZhSKSQdEt4Y5gKGCK",
  "key37": "3bcnBX97PaztbF5k9EcJq97FBeeHTJFDc9wREWRwm72ndNJPr6bR2bnmk1VimMmgLrTC1C5esvZG4GjmVnUR3DdR",
  "key38": "2zPyeXRFiqUreLX58AV1TxbKsNufwXHrrWKCdUyvyuFzqAGRDbUXH7pEYoboZKY9quqbHm9Tr8kqszFtSDKZBuvR",
  "key39": "2L6PGnqJ5w6mCBD9txEN9schCc5ca5cSLcgDrrzv5fEr8VSMpmL97fY4y6ygj5PEehJq7k76jmNSnkUtHpube3Tn",
  "key40": "4fxGnM1Pg2KZ5pSshsrahQF4s7ANo7nuoPGFvAspHGeEYqpUC2s8NwXbvc5SuYbD4CXcxiHACg3HHWQHNV1x9NBv",
  "key41": "LEBR8mMb31bMhzaE8wFkHDpAzCGbPg4cHBr11ay4U1mefLumJeh5twFzHQNtHYL371G5ctjU9g6B4MYhoSoYmzJ"
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
