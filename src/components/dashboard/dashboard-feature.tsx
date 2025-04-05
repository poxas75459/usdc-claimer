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
    "nysxkc4uo76e41u5cqmxsx4JTuDsa29befraSyCzS2aCKcHe2p1GmMuG2TyyzypnLjVrNtZPThYUYN1kFvSQ84E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aKuFDc8DGnVw7tkCsdsmkZQA256YNTcyZyHCeCUJsnnHvgD2dVz6NV2RUYi2QUQJAduhJXLdsgPSPHxpiH5wYKg",
  "key1": "3jRGSh4K8FsQvAFPZfHsQxALiKZ7f6wngGGH6ea6vWLNJmShQvdJN3UYRS7mvgweCj1cGcxQfsFWjuWTnM4Uih2X",
  "key2": "3qoPd3wBZoXrzzPVsXGioHQWHHKaAp5N6WUSYvqj4787Bo6Fe27gMPPSc67KJf1nyoWyDYLxorEwEfUfQXEcnKay",
  "key3": "2oTReGQDVUTgMvtPSjDb58dtgkdds4JAocaxW4nuo26xcuRoxse5aEzKXRU1ggBGU4wYKoBtEuB4d7ktJzMLFwbA",
  "key4": "2kDqVdr6YPb5CM5Nv2PQhGidKj5nrBomQmGjnKYfcw9XcRb3cWLzgCWPTixiFSjhsZszXLD8SEmhBRPb7RBRi5rD",
  "key5": "2wwBvDPT9RJtyeQoGKdZ1W5wiiJnpNUbxthiggo56FNtDziYSV4bTwsZDyU9TDoeJsMvmH7PGPh9eLVwpxpWfN3r",
  "key6": "5hyzGVDkEDPgCdLfXZ456hiGcskzY3ZCgWUAhiETazSoMmjaYP9PejGiVqqRbxyY6DxGLFySvr3yefKBNHctEEVc",
  "key7": "4n66c9gZGmqyCsFmXCqUF9BPbe346GSCQ2T3fkyWgqm1TVAf8XNKQwwyNjcbT2VA7D8kDYPXk3PJUF1shpGsN7og",
  "key8": "4K2cTtbjLUhf7XFnENDkTbT8YnsuoL2gWkGT6wHnT3moLEFdsDq8rLUamPoD2KkhnseHwXbEx7mQZhmJMY4xtnoz",
  "key9": "5BYhYV1ggUqk8J4xpLZC6MX3drUihpgLZYTDoM4Fou2wim1mdxWN238R4wBcStcCBQvrDvK6L6xgJdD1KRnrho41",
  "key10": "3FydewLDYGLBfhw5EvVKPoHqV4XSAarVXHRFVXCuKZPFrDoM2bVXpupvG8dnbff9xXzA4ZiGxiKhjrfP1cbue4vC",
  "key11": "2cqHMhp2wX1fc3kP91Ue9pF9qpLxYmu67vA9L1E9uoKyPi7Kv8xARsh2m8wayt1ThDZyAKhsHSk5FwhcqhhJ2iq7",
  "key12": "4YALnivFrKibpKjaxUL6CtvcXRJLd899hNZwNLXZdq76ZkRa9cXMRLAiiyb6equzR6ALwqr1BUpwyLcgn6NqDVGm",
  "key13": "uKVSCDY52d2ytVSHvoZPB82fRVd3faunuAw8BkSWNUs9QGrdqsi5v2QrZR4i6N9pWVJe4FnoDc5pYE59uMp8T2m",
  "key14": "3UXNwUKGKchb47G7iQYDLLr92Bco2gu8PmNTbEu38BqRkj6QkCaNVGX5UyxA9pwcKcVzTBaYSG88cbWgqKT4qoUZ",
  "key15": "TuiTJ5qbPPk3wAv7Z1ypXSbTnodiyadgRagCSXZTdxh1zaDQNtHPd9pAJE8t3kC9EFt99WD8JHupfn6wmZapSCN",
  "key16": "2WVT88HjbpsEiqSWeGs1MamQjXCMeyBr4aQ1hz1i27LxfACc4D8HbNbQWQ1jv2GBQ757o4axjbCcfXUFNbWMCWa5",
  "key17": "33yw4vZgvTf8LSuScvHPcPN4cMdrbjMYGycAhzokftL7eFqkJBe84AmMH6cVw3aQLPbXGLhB2rdyEdTncH1GSdfZ",
  "key18": "EEbbUTVGAhgp29F4rFf84g6SY5A6x2B5gVQ4aSjHZ85CdgQEQH3QRmeAcwbwART5C3ZWYHRc888mAYDjYUFiF2u",
  "key19": "5QQAhZR6NuM8VaDJzj29C4Fq2An4shJxWmYzZXpzzSrLRhaZzj9sPA5VGsgcsGEPftXadRmiaETZCdnKL4p8knhm",
  "key20": "5VXWSwwDydtRXd9h5biUvwf1VuVM8VjZiws1x2T9t58gdJFee8LVL44rEQUZ2geXdue5TG3VbJnJksuxoMVasNWp",
  "key21": "5iiozYji6PynL5y4nu9V9EGhHp9cmW3G27XUNwEuFfT1xJtGwRzz22wCczUWH33UFP4oo8nuvtbmTzDSjxrqCNhJ",
  "key22": "53H9XRwCCoHrdv3iaiS8RizraeibAHfGtSiwRt9rpcmqsBQ2AAdEakjJtV7A7iuqgyHNYkga5zQaoHFNMT1TiTuP",
  "key23": "4ZgPEk9y9xBY6SLkxGz8WZrKGZPtk7Mbiw56JNG6zVFuTZ9Bq8STnR3XAf4nq8XH1fmqDbWCU9k38xEcrtX2cHwF",
  "key24": "4nBLhbkQZzSpEd3JEg478xmpSygzExRMb1RtKQxhqu1UFMzby79rRkd6kBtfZp5cvGsRJssf5PdQv5LNRN7FQyuJ",
  "key25": "2DSQi3yP6k33YBNzDEu5fsorTfJdxSdsjXJkrPqCxLxzfAtWc2AZUpQohuUBLFVa3c3AcuGxErZn7vHGns8HWULS",
  "key26": "372PKHidPe4mDZZW7aF2pb68rwqN6b1A7rSjFKMAnwQDPLaQggqEbfGRFLmJwR2m9Udr3ZLjon42acLZnNHirwcs",
  "key27": "2AVgSaS8JBVQApufpSwkkjLxNaBD7TqqMQLyVnWBmqLwHWoxCgUfMafz4Kxcum4RaHX5rUVvJcSsxvnrYH5xEBka",
  "key28": "2b2X7aAdNykGwhr6cYe7c4rwAX1shaMyFndgcYBFK3QCcoHjz6G8UXKgf1vwqtwsBGvRhmoxKNdLnNXk9w5DdBUr",
  "key29": "4jBMwAkFQ4XnxTpb1g2rStS9qovHTHFWW18L2cDKGwYQMRxXcdXKZCQr2DWwQUi5n8AFfhLuCmoWhxcbCW4hUoq4",
  "key30": "4kpbaft262edxSGQPoqtP778rnD6dZc6FDMeG724TWk1PYdbegcK6LzbmCiWtBjD7HX1DvXPPhHKiqpE7iJsgCfm",
  "key31": "2GqtC3sa6Zu8uL9XNVP7vWxTYbLdmNc4TYtmzjPYarh53PPwLD28h3ZVYphbfBSJZYGWsP6DtB5RDAYTUqNf6JHX",
  "key32": "5NoFK1QMmVYA4L7qWfUSwZEFRMV1BUrh8HGLHRHhLeLn6h2VrxeggxQebuuUnvzYMqaogZjTBti7oB9Te4rXv7En",
  "key33": "4cRGhTm9KvbgtHX7bB7pFaVwWgnuWkEg3PMttxjeYYEdLzLBGZixfC8qrTYF9daCvAv3zbrcCUUDVYZqa2X8L4Gu",
  "key34": "HHWZsJ7BCxtS4V9CoyuEFyzsNCELMfdBgAyTwcTj9GMBRckZJkTjRoMiHEjxYFa4HRYaBXRsU8EYtdGPAHq1yM9"
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
