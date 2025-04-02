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
    "3Ln67kBFiJcKBGM9PPtmWjTBRD21WkTJWL6KqdC2XU5VWZYnvS9h9ok3KqHsxRJ4nj1Ef8SKfS3eQquhR36GaKTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sh1QVnAARgqb9gget2JtNYvpuHfTVUnfuBLiqARS8sCuVoBpELZ2xw4f7nPZLHRYPXAd6WK5HEpTDMu7apU9Y3a",
  "key1": "4EnePb4YJfxfEVXpucgqUbzaWAQs199Dr5h77fk2aaNsJYqAUbWcNw9kD6jHmLBsz2kciGL33r9zttntanD27nzD",
  "key2": "63FJD72pM9qmgGPTVoNBgDwpQbLFLRF2Bpt9eWLk3zSa1TWrVu93k1g3fp5uv93rwXFGsqdevJoXfzKQePNmiV4a",
  "key3": "5PGzXaKoWzNJjqpoTc4LTZWQQY2T8FDoAqReWr2es4XpJux7asS9vU5FgkvEQ1nwjSHLUHbQvF8xAes7aNcUpMVH",
  "key4": "TzMmpH3fJH7MAw8JrnBwKvyXNQKz7KRSSPvs5D3xGGyZ9WVrtt9ZfmSTPWYi5vxoydXG9MsDdy53J4ov4ZLQCfv",
  "key5": "L9YAcaa2gqu5cQkLQRjbShUU3AJiGgWgk5cZL8zM5k4XNm6pZK4iLKubm1ufuBd4atCnsNx2C1VY6H8nMb21Ydd",
  "key6": "3S4wReqLqq2ru13xSZXgzRKKrwTQjrc1zEfCbkBgAUm8NJwFFKGqm7ZuPycz4qvGMqJmQmktzycbJtbCzZhBKWcM",
  "key7": "2RJ45ErZj9HuSdU5Zgk8SicddbKW9RUTek8UbuRgNP4zARfKxdxSXhEjnxX6MXGmdHC7NW7t7vWPEPPJyS3fiCVC",
  "key8": "VsayTBMXHrQ7czSTLDH7bGTu1Yr5xwnaPEpLa2ueuwARxiva14gvBzwJyxp55jSNRUYTCDghzxoA9bjMrkK7w1A",
  "key9": "5ub1Z4E5FnzrCVRJBmejs3cuVAUADwwniXFKVKGCtHcennnyo62EwBrEfMC7NjNckorjjwpKhbSs1m7Ti9wf13BW",
  "key10": "3FD493NLArE8CFdaxwswAhjVJ1rN2Br9ZGShjjZ22LbLBqWdGsV6jywwMd63EHRmfJeXU1SYdwvo6p3CPp96qkuv",
  "key11": "NrNXWF14f8UQLLKn9NYjhYEvAA8tD1fPP61YrxrKkRP6n5EXW4y7uMygegyUbhMCDoy81uz5fYK5a41sn2mUnyA",
  "key12": "42s8DSyL9GN7Jr3Hvxtd3LwJABpx9U1WBQRBvafKJK3dW9iRFnxbL5eGbasf1UJpPzExgfPQkKAYbAa1Cb4ejU66",
  "key13": "3fpekakrUodjRz3fFgNPdLnsnfWRzqEcodhVK9MhbEy3JvamhmGrog5iNGdjjr6PwbgnTayNaQNeHQkm35h8BT5L",
  "key14": "3NRtykw6iCZ63wr1evUybtJZHfrM4Ukh2U4xJbkPGJY45K2KCYuVCmcbWxPSP9TCsykAuKCudkt35XtgPUtRfdVK",
  "key15": "5ftTDKaekRWAk5F1Vz6iQx6NoeomnoW6soz8TqoMrBVcaKHYY5YLsqQmQrrYYqFfsbNgfFMBYqs7xjLj8vNkSHec",
  "key16": "4G7kFfZwmj4uqjGGg9b4jzSNxoXbcYqhfBJRVZSrREiGUSt8qixt1YqtrA67Efgbx72TVGiTNDWHvcFHzwA9GCQE",
  "key17": "3z9N6k13nL7PZ3tu86CsV2qMLwUFZUiVMHna3nno3HaUks8UX9CMS5pgoKUCuR2R3kvd8APrS2r2rjkhyHqJvfAu",
  "key18": "32GeHz1bkejgLJ34M6VpWERXJp3Xm9tP3N4tWV2MFwc2t17kebutcYTZSjrLjvm3cQhfpjPdKbgP75qJkMfRigD6",
  "key19": "4fwhwJF9oqaQtMEVDGtcGSpekZWQiA1KiCPLippqrN7jqfQdhjJEvZDQxjKAUNrimSWYryaeSFrPXUzUmnRErPpc",
  "key20": "2otbYrSuBzEqThwtk15J9P2Vw6a1gKnM5vvSdDZJQGDrpejvnM1ru4o6kYvKqsokMS9LJY4EGG5PZW6viQ2QTRbT",
  "key21": "2pYii8L3djAFdGt24fieQKukZtLvP9XKarPaDkPxeU6NAhsfGVRMfimApZoa9qQP5juoMJv36iZLwJPGWNhSyrYF",
  "key22": "48FLuNbnCw63bLads7nbKVncHEefthRodEJrHfqxaeoVqsxvK7cetAbxCwBVHXhCVDWd8itVzxzm4Vhw9vj63J5x",
  "key23": "4bpccSQY53cY7gHYt28pfg9kdwuiDpWcmdbEsrU6DiEYkNXHb4yAxbSpvzNb8h1SMeLgtH1NfdYkd4grqTo1hbJ2",
  "key24": "E5uJVqeL8yCCuRzjoGTWYeHotdW7LpVNCYB4g72cjLDtA7mR38V3zXxKb5FRWMjayT5oxCdbJ9pMCERjLWRSNEM",
  "key25": "4AfBr5qMXe1op6HfBTbp6GFKJSHXWU6jaqbAepbNeaf4KhaJhoNaYhV5nEsmDiLp8Xpk5Rm4W9jNDnVC9eJmkyoW",
  "key26": "62WAALttpHrtWkq6acs6NdPXmxVWSR2oYQ8xauGtvXLWpjcSF8sDuX2rU5BcoyoZiVYEqkdW99Ucd1CEb9mg8Vu2",
  "key27": "46M26T24avoLYYyEw4TyWLvdvX6xP9HmWDCdYhRhhuCterDVtjZpmQiUvfaia2n3BNFH6Fc7Fxb22c1p8VunMKJP",
  "key28": "3JE6HzsWoFRye2bhe7X2ust2sUo2PS4v5CRhdaSyCLQmJL5UokaqhR56JDi1raJ8sCvq5kRN6yBoxmHskwbpNnSN",
  "key29": "2FcowJunkeLrXuBL3MTXwHCMQorW1qCRXBWtYcF9sp7zSWjm2HrXrLNkRnTM7mAhuaYRoMSPQvuvT5CkJMzqwS14",
  "key30": "5eMw9R7Lqd2ApKTD6G3yTnSsKm9yR6PRiZez32nCvVqruDyCJ1tiKrozrd8VS3so58WSp49iBoXuiXCKfEfYTUr2",
  "key31": "4PqHsqG6qLRQH85YG7JTJTCpSWLEYRexTRu9YMY3mixuP6HBkD5NW7H3M9G8BnxeAp2QsM1vMoWnSSiiQaQt2Xrh"
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
