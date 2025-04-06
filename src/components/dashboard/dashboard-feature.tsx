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
    "5tshemjWMkc8E6zASfjjaR2hKSip5KZmdwKBUVyEwPkjXZv7oAN19kxBdcApQoTzTQbg51tjDievdTCo2imcMgvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m3pAYpaEMKHx1amWLQntQTSLi3wzs3iVBfHuDpvJ1oDQcFDsHF1c6FPQbbLEmfuVe4TvwrnfSXFJuEV8KgFdRYT",
  "key1": "3jzJctVK3EGdDweLM898KsjW49wp9y6wTzxf7Zyeo97VGTCaueFmmLXcF8R1uP6cvdZx16xCfFzXoxXq3RJAmhTX",
  "key2": "4kYhGJpAQhv2veoxs7TE2VYkz9CoAvd8VBA9eyB113pjtFZ6j5UczxPjcEFYY6termoPxoGQBHyqdbLeh3auyrj3",
  "key3": "365Q6jwbPKDeX4b3rj41BXGacPhoN6Kq2XEMt4KxA4fKP1vVdvxHmLNhwFL3a5LJtmFLNnd4yR9DxjeTfe2mKZPz",
  "key4": "5XWfqMzj9pbzk894iktRzN2yK7xMycmx2vhNukoDRWPBudL5TvQVZzxePspfdEob8UcbtgBDZuD9sUCHhADVToFJ",
  "key5": "5PjoCcgiTk328mBEUMx7YPWMTdCY2C3CGK5MEHRkpWcrf53aRTK71wUsi4bsuyeQ5yaWEtmR7X3v6MeqVNZsXQp6",
  "key6": "4E7zNQ3xzbgzMMxXz5aYLT1jzsXc7KBQDkrXbUSmLnVgkAcxHmY4sxF9Mo9FZhbwLiJmhmPnzFc2S27Z3Gn3Jkm4",
  "key7": "3iSw4g4KjChpjsDsPfdSeZ4wC6pr18ZLAqxdqvp5LPUcHsVyEakpvhwWRKvrj2KXJK898Cm2Fyo9wKUi3v1EBMBZ",
  "key8": "ghiGBBwVhi6nLcVkCr9HwSBd5MNYoM3LrJp5Pjq4ABnnr9ajog117DZ15cPHGPTVKRe2sN6CyoED7q9K2H5bkWS",
  "key9": "5qqrNs6pRc94cqsQGr6f12z8zisKNqebAYWRbouxHhnYCED4y65ywudKNs5Pm6UxtKMk4NCu2XPYRnxLdGHjy7uF",
  "key10": "61mtmjifH1NQkc6d7Z9LZDfwE9XSxTMrhLS4zpWZa87kAwn42vpxpJwixHtV8Dn1VfTcWbanbUsg8cZdproNZU6X",
  "key11": "4CbzKgBwJST3i9csDDFkX8Y1kP7iWTH8iMqHv3zcjfT9JsVMdjDyHJB6xqnCRG73iLGYiD7o3LpGFDk3yHW86Z4v",
  "key12": "3SvcpkzDnHMuDKftp1qRk7tzoxY1bJuVXDBgamawvfLXxfNk7aP1ZvfN5jAoP1pdw9gCoc6yUP6MJeu6RAQDjHqg",
  "key13": "48beF7AQtckittpQBtKxPy5S5M9a8ZXtXzdsjBChW75awZLKufniXFj7eV4cpQbP1bARtTuh66pDCvCxpG9PsMFv",
  "key14": "2HjJbfcR3ahHvNvNje7Vz4BYFkkFhLPsbY8PKVJ6ry86PJsbeuqdgvowEwspg5D6acBoCWRL1HE4qWnCm7Zt5vph",
  "key15": "W5uHAHSjhLo8zVXKtib3yvDp2T3n9Djo7GDYGa4ZqgPDdZziFo956ibEtxkG2kyNu73MPJn1ZSo5qvm6Fd16Q1B",
  "key16": "4MifvybwnMkuXLRsDsUtuUPmRduavciijCqB4QfBBmFmTykbR2W89EZgFy1R6sqakvMLUzncBTRP3T8zaTZwR3qM",
  "key17": "4zaggpGZWKoQ6cNevpkeAgrkLTTiUT3ferRnwmvDkXhXtY9HPPCXF9cC8g7WgEAKdtsfT78Wmxr9RMVzKKnhqKuM",
  "key18": "5QmNa9MZQLpAfb49JpdAABH34h1nu8xtqZrGAUCoWPWXmKKNRvZ5kcz2aPK5hM5BVjC3mPrbUzTrs5oDmkLEefHb",
  "key19": "2SaNacu9WVUeNayyv2mgEgQwP1rPMUH6FUG6J5w8MzvYt6gVsgsQezhPt16WAiESZyp2hhAt2Mak5hBcC5faxZN7",
  "key20": "3PU79Dsb4qQnJJHE71o3wtCGcVq3zxfzmbS2Ar246AZg64Kg7NYVaVko5NpXwq8LLBqkagEvwYHzzHBrs191kWQZ",
  "key21": "4nHRVBZp4aBYwynSH4kHnUShKhe1QQa844jichcWqsdwH4SJwH2GPeupPzTsfYLHdXFVa1WyMjVUa8quW3N3HXYi",
  "key22": "46dZAmvW6Bjvk4eXu36mVXY9bt7mh7ZUD7vKuZnifKWKwGgshEAdhnZCQFXgiAop4mc2zrsRRZFm24uvhgwpRYTS",
  "key23": "2w5fUCPzgYTDtZfKCCG7qbHmHwUrBbZjj9r3qrWmQKczu6HKtkiE6SFdUncEm1uG4zVRZ1evGoSyixjfw9DGJaAb",
  "key24": "2yzTZ36kwdwYr49CV5QATpDzVdYW6mzXide5BvTZ9MqGgwtTekumoigFDZefYBoP6w8DPFjrZoh86oAMKa2RLfMg",
  "key25": "59odL67WvwZPmQj7QUtNhGFmwTVHg2U3eebuE3q1U88gibwWBegXh2g6GtgV7xjJW5rfwhs6QGG6aVhTm3skDDCW",
  "key26": "JyHHt7e78DdG1m6fY9PN7R8B6er2JmbjqRGZ93jTXqypTQuUPbDpHru5rGWVGbcHxEeYdymcbSdQuX88jRyYXV6"
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
