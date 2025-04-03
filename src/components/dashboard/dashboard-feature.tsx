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
    "4f4KdWKREuuV283ugxC6kgmtU4hnXgnKkA7u2BEmLqBa5VdnFrZEvCgSrz5KByBRHPgThz62jysEfLvNG5Gbjpt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xFRyDHbLGdkgQm345MfiiapDcrUg1Gta34EjhfCkVnwEYaAmcFkxQZBah4XcAWFuABVP6wfc2reZvp56nRDvc5r",
  "key1": "5arKrDhHXAXuQVHAAfjP2DeKN8JPqZQFQT4R7XvKr51enY7rZbbchx9yf8wxyyAACfi67ATHrF3ca1KpDYhF5pfw",
  "key2": "nk36iax2wQi3EsXBKpu6VwUoazZy7erNm2jnKWj1Up6FzMErkhzcPW3N8P4oPvC6DDu33THmX4hjgt9CoUvBnG5",
  "key3": "3FfDktxyCCc2ttCjGGdG7zKdiPp7htYoq3ZBdQ7LAdYhxcADxuaGBpHgLNaKbCtW1AfxkqKrK6c1cXtAei72pzJE",
  "key4": "4L5pvFRsJ3z5ijzM7PC3UFZh15ZgYpFbDcNPuc3xqP6bKcL13uPVMbSUuK4fKVRAQmxfVzGzjEges8CMfWbFmDm4",
  "key5": "3sQie1CCYLxHbr5JUccdDEzSXRGBHRHTXnxc5PDghZHcjriv2VTtm2HkH5xxydXYh8Uh6ojpGAMfwkLxrxXhXnvB",
  "key6": "3v81D1CdVZ6A1xXpS6DtcrN91o84E2KQJbyESmxkz25Ln4PsbJmiTktL7n2WqXpvCG6tJDY3LgaoP8oZ1gNpj4Ng",
  "key7": "4qXFiQYs3RkWeWNw8ycjpvoynBwyPMbdtrk1rqu6g8T36HQ54s3m4gSL9z11yrMzt36Fw8QLahGU9m5Njfaejzng",
  "key8": "3MZToFnLXthnse8mvqKJFfa1toBHpYxAg8RXpq6gbtCTzKt1Pww9KwEJ97bMFid3Es6cToKDuD1fr8X75PbHpRMZ",
  "key9": "52TYJ3DcGkoE2gQNbg9Vp7YR6ZjNQPng9AN2uSAoP71XxH2YdYC73WvEZDRFEnfHMsUSepqCUPJ391z7mnWUzig5",
  "key10": "fiPAjaviE8PK3ZoRgjNjixf2q2H7UYuJQSKPaDM8ctDU7cWXdDG6p5TzVsEobTNj9nkUVKVok4gwf1pcFQzU8P5",
  "key11": "2iRkCkeSZqUsup3hmujjRYMFvacSLbNaxrRFYZSkFaPCGVFKbNsw1iyW3QLguRCja3AJsebPh5LWwPE4LFSugKiY",
  "key12": "jpVdQfTu6ucpyBAuDm9HCXg7v6KKPhi6ZiSX2hNwgYVS7NvoaUThvnMmgDqbtCh8VZG3KSsq8Jjj38UAarnoiQ2",
  "key13": "2u68A9t2S2L3QdVdBw462BhmJ4MRGYDatN1nHkH2D9Rjv1nb5yaQLsFMgso1EHaWz3G1F9JWKnGuVXrWBR9UNsjW",
  "key14": "4DVH9fmWp8GtYeqxqbzco1jvtkXPBdpnLyXvYR6kw4XLJRkTYc4a48GiTFjrq2QKcFQS46C2CYquSJ3C7ju7qaby",
  "key15": "3k6DHrXziENAWB2Hn8UG1mk8rkQAA9aGJGpAwC4Ty2tvy6iu4VXh5EDRtcECsEHHTequt3XPEaUXejFRDSmdbrdJ",
  "key16": "2ryqQtxkfJ1CJgqq9TikFgNDFktnGpBvSAJS63jRP2ahENyKj8GrXFbUuEKokLagJzsibXjdf3xsXCroimunpX9P",
  "key17": "XDTWwYWnNjAPrAWA9mE5AD2AoXmgnYhnbeaEFUpwEeec1LiorAe3vU8wNznzsFMkwzyCpYBrMBfRR3mqTHQSvSP",
  "key18": "3fyaN41mDDXUCvWcfQe3J4DrcspBpZKuVn52SVfaaFE34kRBEaTTZ9MgwsDYSuKDnec12Ks5EVjDPS66QLSUE6Lf",
  "key19": "4uqbJjhamF1KXSgLqFy6Y6Gse417kSSwA6uW4nmB6doeGJ43h5rKrQ9b4dkkjZAgbzCxtiHbPPTv2KXu4VAQZubN",
  "key20": "yJDHU1aZLLGLdw1s3DzyE9ud9xx14Qa8fXKMexiLWfuz9rz3UHebkgakmrDQadx8xxa47iS2gm21mfp3fnwwBJW",
  "key21": "3Ye9maH2v7MovYG8Ey1sy4p8XEPc5iLPYeKGBpXbb6enz1rxLC9MmecPfq9sG8tsrKctZVgqh6umYzzGNxg2aNeg",
  "key22": "5DkbiQY99A4Wz2ec3V7VGuyxk7p3JceGE71GkAXSo36Jpd3KoNbzZShHw6PfBzPgMK4AkXzyGTBp1GAwN6pt16sN",
  "key23": "3duZfhPTyTLVeNyE8AvwUADhs5BrFp8yg8jpF7rSWRytwFwPu4FXCkVnGDJS12cVAsNAK7FLiLiMXKTkNW75M89V",
  "key24": "3iYK7D6sFNyV7dVLbRiJajX2qxWfuAA6EuxnCm9b8HAd8dN9Kwiot9UqJi3wCYtHBAsWrphget3FyoizWniRFAj2",
  "key25": "2nZxyUZEhmDNMhCnjqHGudqGnZkyqBnfdiNbLhsqVcZv7RHX27XU6TTvA8bDp4SiTQpcCbGLstKY4CWjto17iynV",
  "key26": "3FVV7F1oLYd9igzXbGeTiMoaext3k54acEzaEuJxFcX6HgGU3HZci2ArpMCbKx59M9sF1CtsjAiBsimBKrkdypgn",
  "key27": "3EoYx1TQSLeQnoAC3dHP4ufARr3E6y5vgiUnf7Z1tdG32SSRHBt5X2kvWuybS9LL1QJCiiSozaD1B7MzZvYR1hX2",
  "key28": "5wnyFg9dKEP62hod9q9CrEMkCyUnFh9ebGhiddoQb792rsU83t9PLKZmqk8DFm3agPPxP7qhJf74ezzijLx2Hzgq",
  "key29": "4T4RrmQicrk3QAogUZGyzp1u5vjQMTx3rLwQjJb52SJpLLHcukWjnd3LHwRfim2iq1A8bpEdJEPCrQYisRy4AcL4",
  "key30": "TNN8E3JfgsizCSVBtWE86LDaiDvC2nUywNJe8YUsZg82xqyP2fuKSGZDt6hLYk9pyypXqpyRREutNfhRnxVPM3N"
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
