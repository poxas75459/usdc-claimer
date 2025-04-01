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
    "2CdHkHzu7mRQwA9Kq82cg8RwY1M4QiSgZstAvUXuX4AaW5TJYPAaW9mJfbQJf4xrNEMR2TG5JQTfDQURJn3BcKrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ePvnWdJ4Nb9RhozNjiTeEAedHDJbQ585TeL5Z4M7j3NWxCYRPggBowteas5yMz3xmTYEPRTswJj34NSoTQadnCv",
  "key1": "Fmn38opFpgfVdXLX5yavD7WGGdu2EETa1nPULAws6PPpYciWYimGS9F9Uqt3ZLnrzF8o1NDZrUdxSLbR9bYYoBq",
  "key2": "2HHzp7EoHwMQZ5AiPrd4ZC7yDGjdUFseTebQ6KnhwAZrKPTrJ5TewLfSudaXBLQXx3qVjeQ16ngkC8XyeFeTKrM",
  "key3": "3UbryeVtsKknFnWER67WmTsS1P4BgduSGfXEdGk92Bz7bZrG7f1JGFt5EVfhtLncEUHYCxAy8CahpycdqFYH8n6H",
  "key4": "Rx3hdYERxsdbG7ZprdV9RNwUMjbKsakuBbKUz1DcmFVX9UPdJ3jzxjiGbXoczL711P4qecXWU4eTmckueQW9qXG",
  "key5": "2C7bMULj1RxmrjVVCipKaCGa5EXYMYuZdj7K9AKmX2hn5t835mGqKQNpWdL9A5ttWApKhpveUHWsWEe5HpCsvULL",
  "key6": "5wfP6V1PuPMVJUCz1stjVt3Jk6tcqNy7SjcP21rBrnaArHoif9fg8mubWuqEqT4GjiwyJvnZDpiCDbxd2enfwPqw",
  "key7": "2xtUqNM7VDfn87oXV4R7TTDZdPvjufdbBQbBTTJk4Y643eiEtVzQ2tofPJXrF1RySarkE74BSGeS7vMrh5QA6EzH",
  "key8": "2yo6eNNjcD48cTRvBsXC9bS5Tq3eBn8usVH38WVxz1BxMEmim85dTGyYzmFeQ6tvuKb8DKWaJ5SRj8noAqkv1CaK",
  "key9": "4bSK97yhD7N3uJgXPqm3X3A93zGthvyEBWmMTZPBbLZStXsEZGrJErPK13r4SYwS3mEHGeACBBMW8yNTAYATuubF",
  "key10": "3A64EpM4ckTUYZxkZbbqwpMMgUAbcYftPFSmJ9iXK4dShy4hrQRNVEx7EHdaW8QU6D5ki4KLsdA5cSiAs8hJ3zht",
  "key11": "2WPbMyRUeWbYbq3tXPFfN9yA2eifMf2CMjMenR8c4XGfeNs6ArCSVxH33zbqZHg9UdociKvW7BdcccbWy7XgZyRQ",
  "key12": "3rrTa1TgpA3yUbMByt5i7mmtR9TRw4ecq8Ed2J7ZXWU1nWfVmn1bqVJbaWkJTXh8E7irS5FNDMDGGgYd3CNEn8Ma",
  "key13": "5XQtS99iNDwKsuRiYPNwFLHtYjymGPUzcSn5DtkGfFxk2QY6kF3i3TRuey8TznZ1pmAfEkjxyNHooFbPuqMaUCxU",
  "key14": "5MG5eAYeCyJ8a9rabzBYcqBvJHooKYSXmSyB2ozEqRWjQkmdogJyxXWdr1Luf3eCDvseNSug2ehccMBXg3GFxQ91",
  "key15": "4jKycZMim3cGzcJXMsv5659TwKa5mL2CnfsbuQgvTgXNth66sW1vvyKWP1A23ZyqYoV3RJH7x1C5WeeCSau2pq4s",
  "key16": "4TmojkZPSMaEeNaK5RhD6QSj5SeoAXBiEHEEaNLP7KqsS3CxJjk2E2WB7WdUp9c689g38opob3xHUZeXcK17AN2A",
  "key17": "2PWHVBXxoFi8sD8YSXDsJqVqJ5ky56nPrbvMn7LkEB1ZXrQTxcRCVyyiVGzqQSs92H5iMk9kMncEV2zFnGfPSqRS",
  "key18": "3ECSG4hTafA5FuYH8xbTk7dWnnp31rZQQYCaVCez2BWHvpoTuyHarW4weWQKxMNUq2Z8itoapJJoumkEM1W7seDH",
  "key19": "3DCvfa8ofLPR5tkEEtXYQpxM9AkL5awyaX4JhZVAPP2esQd8pFNzMNjk15eKTsGye9qgTjraoqPLJa3gjp8H2zaB",
  "key20": "jUuxij9x3XtZ1Z9vwzBVKhafzXfirigcfyRCjKeHFjbWgRkDtcvScCZutSWdJKh2U5n2hzinhasu4sqdfKX43nj",
  "key21": "31XdTnUzTS283MKoYkchhAQijH9EGrg6ty3FVeGyHm3m4rhwKBpcRtefn5z7H3MJR5TTL8pHKZ65yJ1ZtFbUkbwD",
  "key22": "3FJtSVG6Mb3615C9jouyqys7nY7A1zZAy4FJKLAjt8CXGkWC7VNezwcrziTJdrMZiNiVKv9Cx6D4cHarNggqPQft",
  "key23": "X8nbxaagGea8vgEi7DEHXUwakuJHqYazbfap7fdsCVrYozcCAWtKUGnTY4XofLRdhEUsc65U2VP5vsDnmPv7JLx",
  "key24": "4qRjQygrAUaDvLNwbRxGcRKmjbQWPpdzEJrsCe3qnPKcnYoqw7FvfkgSpS1vMBu4jyJvWMt59TxVXFPUKgchiiWc",
  "key25": "5j6V8ZEx4rWvRdf4WS8r14XcL2e3Vk7nfz1nHnTY2o3TJ47aW1fMKX9GjkFpDMqdKUYeBbB8RtD68rQFE2tBzjiX",
  "key26": "5eX25PmvigCktoxDHDqKr3yej8RsfnLdnjJHerp61UfVdvFv1PsmuT1rXNcaJ4frhtuy4myrbGPpdq3ubUhNPEWo",
  "key27": "2NJEyJMUxk5i9xYXTbxbxSWufxGF2BkrD22UKMwDvCbwRuSwQbbpnq5R1uRMUcbGtKhk3PE4e6S6uLXfSoPTNQ1T",
  "key28": "3Uki8Fj4Xr5AjPwiSzd6JbiY2crLSKKcP8CwCeet5QBy6S3TfeijhvdvdiddS6XVr2bnHJEfm3AepJ3QWhckemt7"
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
