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
    "PzNVbKoSmGPoVKYorYVaDzcJokEETsjxkV97G6eVjr35bGEcbpEiH4bzns8hc459qbd2S7CseqUdrpkbHPcimXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fySDC65yTkK1dQUVseNh7VMY3DLFMfXFadGZa1evFMsakeLNBVpozAbNp9x5QfDKEUtWVzcCZgDTYFyogtUSbhC",
  "key1": "5Hq9xbBM4crXXZqVfap4VoPAW9v6qMZ6xkvBFjdxSuuFy4ufUgYUEVpoEHG59vAjzCzWqV6mDgMFpW4bxEw35739",
  "key2": "2vWvGA9vQjXbkhTbP79c7CdP3EUKmN3GhaqRaYncvNEgz5LC78zjdnJHKrWXGaSDWPNyCqhpStsSLd5UTpJVXuo6",
  "key3": "3gsPyYCT4KkDfHWjBS9m2u2b4UU2Wbd4WW2woQHtC3urgPXL9bJ4GzgdEqUdhcszD4PDw3nZ3oz2pQJFQREhGv84",
  "key4": "8TnGCGjBBtx7TRBXgGvCJNeF6WHaNpR2F9spnLhKdF9KhnCGv88GhPbQ4xsAojEosDZxbZ6vApA9yfaELwDrvjN",
  "key5": "4JJwf17DXN5L172M9S8ygiJf5ayGa5HDVifrQX6SwPCY8U8vgMVAzNtAT36A7MfP51PaUPgZR8zJGXdtHP7g7gT5",
  "key6": "4u72QhKNseBiQzffYQM8sJ5epnbWeAirwZFb3E7kZccgCNeLH3vYn8WPJRV6vRYNbVabWgWDszYMSSJu5EP5rJYK",
  "key7": "5HjeLQTFgym5G5Dvgj9SqKkc9St8wuk6VqRKU7kjr16wKp1xN3aqSdcY71bfq1oUq3rEXUb27LiLsibKi1GbB54A",
  "key8": "3ZExuS6KXykqgd65sXw24APpszE1ntxhLPjKTDnzr9rphGQzAbWKrCi2zkzU6ps5E7KKYK3RMbbQWJJje1WTTjr",
  "key9": "Jf8CxpukpQWGAzX1DFp513Lr6Z2xPuzUpK22r3iXA3gyndJJz1o1VSwX1WLUYZraQxqDhpgRCKgAG7EwLh6FuVv",
  "key10": "81imnFV5nZdtsmqbkSAj1zktaaV5dCxt2SnA7Fnud4WChykaLwkDeRF2bvVmBBjJUVCXSViCB5oT94qjfuS6Und",
  "key11": "4Wj1pX1XKXTjATNWwpz8Hiu8hewePNEr7apHCtZiVfMw7GYibhVdUcKNc4HFBQpNDPjtv6wCJUvBDMGQWGhbvr3P",
  "key12": "44iGL5qtzzjDmwcFxATGavpFYxwBDJanSo1FqER7zHryfCqjAebDoDu1FWTDuP2nzTqhc2Qx2AezXxxc3qMJ6e5f",
  "key13": "2KQAFh35QvUqaKkAg1A9m6Sf84n7z2YnPc5WjkSHec3b7x4ZaJxs8gyZTXscsJ4HSmkT1sSLx86hxryqR7CQp7Dr",
  "key14": "5CrhSrNFC7zDakSCP36Hohcrte4y9mLuFQCnVndfdow5yrUEzHxF1DSRdj73s7zBbNM2ywYR7j9HtB8r4pCdtUWy",
  "key15": "2koeS82naHYckh5Lonnj4RUMrXKrM4r3nHSrgRdptQhQLs5XRKWRH21dhXoNLJQbUMa58QLVmuJ78V6uTXQwbgGG",
  "key16": "3jRVz3A4rBRf8tUWRmRFuYeRXtn7ZsLWCbwB5M3dZ8rut7YHDgrrZkMDgFqGioZzxN2kQXzJDTgmMzcYg7d2xTh7",
  "key17": "2NiG8xYNxbs6ojgZZ6UMruXPPT3gpb3qaQbppDpv1ifMzLNpQz8fTfymbmXMuJjtfhABumoEHGUcH4Mw9PKiqp3W",
  "key18": "tANfMV5qQRtBGosZJ5RFFaQ2axJ9CRu23yuMnPXmhCLH2dhB3FLKxAHssEUaEbQySnRzUttqmsvVj8ANgBMzzqc",
  "key19": "3eygxFYGWyWU4hGwc5T1zMeiXMK9ATLYZ5i6eFsgiZ8xjjYcD8AFTMvccBUJ3bmmjTrtGhskzrZfF6YQNHe8irBp",
  "key20": "2UXYUAnwEnbYUXiAG1P3iVsv9iwE71DrDB4AnzyYjx4HoizQKQE76acxBsMUSR5QAACjoKWrDQbuTXrJ8j6KoBtV",
  "key21": "2u5zc8Exo8RgkLDdWFmna2bcgGD8PsLFa4DEXfEhDR8diZ6JGZsAQ53oqXe1zgUigHk6TNYXZKNwUvTwNyrxHdM3",
  "key22": "3vcN3JUcmiU1EgEvmaj1SuD4pWkkMJWb6DobxPMQaXne64UUCybjSwkQUK16MQf1HAfbR51HtdDoyURV4mKUgqEM",
  "key23": "mHVgqCphb4vCYfdn2GxzRWM199Vcw2NpEehArJxntWAgtzkZPx6wqL3pMt9mPuRm8BmweByvrYi8QsseHx5W4ra",
  "key24": "EMQfPUrxDA4B7GTj4xa19rq6pDndGXFey7pu5iGntxPmTzbWJfL6KH3CGwwrC3v5m17EPVq9stRHTVPU6i1hhVG",
  "key25": "4ycxEVB5bTSGyPeYnLhXGX7VDvcY2Lan9ZZRQCATPqhjhNMvnf7v59k1e1DE5xRLxLDHRSrDtf6MDfy45rnL7JLx",
  "key26": "3ox5Dd8MzRiN5QnMFujPEToSeemHGipPV7iPYYR6ngadpMYovbTsggMUzu8yobJTnVANhw2PNQ7FmNpNqRcbwPpa",
  "key27": "4NBZfgR7Ayd8UmYipXHQP9sAjb46EFNmMscm37Nm4etQAt7QzS5fEMaYcCRujVqPaSNaagVsBDeZtQ5TEAFsCT86",
  "key28": "5XkfNhe7qgj3gZWMgTdQZGGPc2QwcF8EKoJyCpGoc1ELMARKdMHRD87mRMDyyRqSiXLWQxigAqkrhFWLffYnJwPV",
  "key29": "3FZ7LMtxaMVxYxa5ERrSmWc4jbVw8gPQwqTkYhbrUjZgbTmaNkTzsJLmAqN3tLT4mCWRSXTTvupHTcDLDEHTYbSe",
  "key30": "4fCLHuoVfJAKwwc3dVeoMRxhMDjW5Jn21wNhqpGjnDSfLB9t7psRgVoMBiQK5jGGCKy1yXxVBv7T8sapnvdDndFi",
  "key31": "2JQYQcXMqAwiAr8KwP8b7JkrsRMMcV97dUmcZwkRu84bKaGfniBKkERnYCBD8qeeCM2TY4ii4vuLUgCqqR96tLVy",
  "key32": "4TMKrHBVD3fjqYukHpahTPpiEbzSA15ju3FM4Z1M7APzWZt31XiA6NkHR3iyLooDjfYNKSFWEFBWMVCaFb8zoSAc",
  "key33": "4Cx7RS2Su7o88gPiiBVjVq1NanVK7CrtpqxJfEPih8eAC1tzDWnLJw4KRNfgud4sHcafaUYo7oYUj51eEqvd3ZuB",
  "key34": "3vvSvtbR7d4yRfJtw5RF1jVBYrE1jPtLsmivd3SqExwg5PMAZeoWpvW3JKoGKTtn14rKD16tSKtFfZsWY3656TQp",
  "key35": "3RSUHUMHfqnQY99ZrxWsai5kvocpn8eKiyiE23AGQKd6TJjdg2Z4r8MBUzmzWDitGv1gLLPdyxy5x2MJ3MjXS8Ju"
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
