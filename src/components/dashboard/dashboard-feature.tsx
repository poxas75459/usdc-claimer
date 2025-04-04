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
    "iu9LWf67wu1SZAxWtYPz5UNC7UwFA9auqNYezCLTpqRZCHDWU1WrUa7KvmiCUqDQqVUsw1SAukssm94bJ1fMfrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jJhkoGuYfTb5iBoHF86bQmte8jZEVYin99rLcgUjMa9LND9p4Ft3jk6yphVwskXpVroAYVEKGoFCZCSdtwDAV8a",
  "key1": "4CrXaBcgnY8jEXnW7cERxLAYdTq24sYT7u2KaisXoLJEazLavg1DGYWjjsELwYxPm5kMe4u5DFaCzq2euo3hwrQQ",
  "key2": "4MNyxx3dbYHFCGjiFzQBaHzW1Dosj52JDsimrh9Y477dU5umS5pfExJSrXbnQdGqtHYLYMUq7ZgoGYCYtgBnftH9",
  "key3": "2yN2JkiMW9rohJcaT4gXT7pJKnGTAnty2SDwAK4HUtjCrLych43SMWUkdPNCzqVLXLYfhT5bw9Nwck8atDt49fPj",
  "key4": "3TjKFbdTFQG3usvqr7bbHBZpzGeT5vGNDxM689QPnUNaEKfrECVseLrqPi2ZmcMSqzKRmbS5LfGXThzH4MMrGsCr",
  "key5": "3L2G4JapwvcoApx4U72mvVjYvM1ub5skDsyMH8sbixai8zzTbzC6SBk2MHdjr7BeHJpiiF2xTpwDzDVZpyuVyboU",
  "key6": "4ugHi1k383j2i5beLxH5KaYehnEoMPgCS6DL8ujMTEjTXsRKd9CfxzqgioT3kdoD6L189b2pRvSrzTWa6t6Ndfeq",
  "key7": "7pvSrThMQS65qdzYE98dCVvnRQzUVwB1v5LLTULMzv4uCRe8j4DPN2syc7Zv9qAFN9e3p1Wyc2zL1BcHWcC2oeX",
  "key8": "ZyBCA136mn8VBTbrRxsE36j6ccWiAX5PXt4Qwg7ZZ9YTtV3ZMB9vcdZwQenZ6JtrxXLccTnaPJYZDuh4cTwxvTt",
  "key9": "4HvTihUL6VcF67um2RkaDHna5JDPoxDqrtkPmLiwWcnumbJV1pNGdjJm4SjFsGj8XL9ZAmeUAAg48573GD7onvwV",
  "key10": "4krZ37R4KTkrF2yLrvvFPir8mQK1QWLcUzptXxzNYPaE4RFyLzuHLQBECuvmDdtSJjk1LbakP4dF2MbMSg3XoMyw",
  "key11": "TVgr1QTRspwTMVV35opQREek4okiTq8mJUapJZExLGMkbvEDoxDnrm66EDzwD3CPPs51m7hz5aq7iY25S5ereJK",
  "key12": "GUqi2bWtJViYT9zFA4Zvm7ksH59T71Y3HCkx5bzdJmuryp74VgPM3QRENjbA3Bw4rYQc2N9XdQYKAUUyyypnR5h",
  "key13": "56pMA5gbKQffrnG71y8aYG3wkDtJUDy8TpyAAqFrwZ6j5m8XygBYPB8UF5ubpRyC2djGmGqWDKdrdXfmHVKr6fQE",
  "key14": "2ak6VwexapwKLkxu3d8gCikG7ag3Csp2Ckn91Bx3QmA9Aap1Bw9NaE6dU5uLHPKSEUcXQJxQTKiiv5c1Qn9jXaAS",
  "key15": "51izwc6WfQhzs9zSZt5BpksJaJyRpJ3etHRd4GAwz2W1vmvZLUwVjL46sTPU4yy54K6AwacviZTq6FjSrVBLs4TA",
  "key16": "42sXAkCv7hdcH2Ed4YrYwudpgkdP2gt4FPpoVJQfYcMx83jowbWaKd5H5ezCD73Wt4dvuNUci6uefpxuShRBvwbW",
  "key17": "4tCM6Agm7hi48AgGUZAkcm9JbqCH735ngkeRFuxZWahtCMFTkrLprdVTRqNQQh5D72U62DVLg98oN1gvT1x74drY",
  "key18": "r6vTfEnUPTtnW9MzUZHwQE7eJYWyg3AokqrvexdPihtEhdGsYA1aSQmuGvaHQxGbp2ecGCsw155cdtxtPvbUmS9",
  "key19": "2gjxn5T2yjPHkQzGM2VuJwBsWBA9du696GFzqwC2YB85A4KzvDrsaz5dmpAmDiEfNUg3kTck7R5nAPTTXGfW9XkF",
  "key20": "3LUiugEprHsXaEnxNSfG8899UeoABhNfWYksFMLqyhMMJJGodjTFaKopNDpidiJZE8Sok1qy3cHoyqggPSivM9Bq",
  "key21": "3eTkDArEAVhRJLcceFHFKddo3j16c9wTRPXAgCMTgMUaFANuAuog3e3U9twi8wyNEo58UiKdbVpEXB5kkuiSEp9j",
  "key22": "cvLnp7ro8Fi4id9HMq4v4wqu9eqFxm633qLBU67kKDsG7Eq5QV1CWhmz3Rn6jy9DXKTeE4Jtnbgac4RSzUG5L6d",
  "key23": "2Qd6gXThYEATYEu5qHTZp2UjbzX723mRyDQvEzgoHk6gPgmUeDvnAAWYBTgznwfAHuC2nEqobFiwatkJw6GeU983",
  "key24": "eoLddCTECmup659FKfbkwDiZkG1soGXWpcvVz5A3rvxSDoQp61pxAKE6PBpBWgY5NS8DNAjCjRRydyZ8rohn3HX",
  "key25": "3D9UHX2jMSQF6RJAkpv35XEC8E9sA36BynwWoWE2cYxXZgQKZTo7heRqJCD4GJqqhLZASt5nu8u7zbPffmpMmXqw",
  "key26": "55dcpBAzocRpWmGCVDNMx4c3HyfdY6D2Rm8wyjoDf6omyDizyeGGwrSQhN8NpSXd88toHVCdmydpDYd4S82uKZfy",
  "key27": "2ssLUgbfp4mL3BHthA2vRrR5y66axbJ9jVCoW1vhHbfXH8rzcEsiwbS7gv56ndstbwrAYxUzDzX6RymiXi979oMK",
  "key28": "22NhRa4EUxQLNRqLLC9wyhdyFZmHjQmha6kjtVK4BZhXmKrrpjrVns8jASJEqA2B6ykvFSbowVsfTT4yHsCZqWFT",
  "key29": "6ZRoA3owJtWN7S8TNUhqToURf2H51YNtr54obMWAFyJ2ukPanhbJusWwkvpzgHArotb9CZtkWCUhhs2cHLj9Lbn",
  "key30": "66kKT4BkApBcr5EcCMRRLEVj9kHctZw8Ym6oeb3uRDF5uXRaUqM7eAKnwEQGGAXWmpTcGksft3njvVmbRW4otr7P",
  "key31": "2E8DbtF5LPbMBLmpXtix2MkWXZNG3TXA1oCUtxHf7RhupT5zDxHdaTsfNYU934hDQ4vwFxaaBjwm7yJHBLH7Lu7Q",
  "key32": "2bxiPXKGHnudb9ZBepzuqHbtiEkdUH2dHoWBpf9gVnrLM91U4cNdgXpuZGLL3hCdEFzE4PV1DtTWwT2DvP4GW4fC",
  "key33": "T2MT8eqhXzM8khvG797tFto7vRNdffRJyC64aPpD83SrUuDgnR5FJPGwYSoqvatgmtRHWMTPyReAUhXk3UNgXyE",
  "key34": "34uUKsq62R1ucsmHPcAqHaFJjUs1E24ieRAP7MMLXqQGrPpMfdj7qbJ7FKmJriiGuxzYG5gDFhN9aVKetjWVdBgf",
  "key35": "2cme5bcdTQt126yAZRm4RLCTapDewMZWYH6M1Xwy2tVjmLvPXMrwF21yfVLW4pib7hCg73krohY8gZwgNrLnZWJy",
  "key36": "5JqkzZEwQh2EhFucu3BTJ9mRrjCc8rS7xT3PaDEXr2npoU6YYagCYg6zqwEL4hbXt9FCYXUZuo2FGBEu7v6Pp1aT",
  "key37": "54UmeK9KmBXaewgSk6qix5j1BoaB9S3RAPkmMJ3QtBL3BfTBg9dd1PsxnvgH6amYjugy1Gc7esDLG5Pj84SyazYB"
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
