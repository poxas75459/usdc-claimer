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
    "5SyVGJk3APUPnzjDWFhBiH8VTWd2qeNrpyCZnu42oP8CUYsESYUxi2yFRP1M1664U4XrGQUgCxRgyLSHRE7pAMh9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VH3xLsGhAyu8zFfc515kcff31nWXaSqrvP2JuyPAHPu67b9SYaNjZZKCRPmfgY3v2R81vudZ9kPtJbUVuDtkKMP",
  "key1": "39kGA5PtcxYBz144WoUKbM9WhgzZwEinbkVR4qAYaSdSvziHSeRf7hDjTx1L651nWxbR2CTFL52pnsjKQNTXvDAx",
  "key2": "4Srjzo6qW45cWfF1kcMDCnpaPZFHNVMdmpXeyqfVBtJduhVfmfgNLzoCQg1t9RSC7Saf188QBASifXj1NUVmnNGz",
  "key3": "3Fdi8DEJ1HrUGayuFEUT8GegAHPnuud7aYAxwQ9pdpsr8D2vYGMuvayaqNUssLb7fcc2zgho32p1F5b6M53K4SX5",
  "key4": "26WPpNvQxiQ8P3SUkXiyiqBPM7YdssCzQNvPUSqjEYvMXbhXztPknXcRUatULdtijQKtL6iYXNbrKSDWznh5DLtc",
  "key5": "sbJ4afMq1fLtKTddNAr7FiXn311vZpBp5b4mBAHnHqY3yAQZSR3vh166dXBd28rvR7xFRVcpq9PiMMfoQFVAGK7",
  "key6": "3xKw4HmFngChwJzbApVD3t4fu2GL9rb8iPn7UXDSa2qD5D2prhXLtFxK72FiFSZ6bL5PUt9STsbNquBXg3C3s6sF",
  "key7": "5qfASksGLHSkLh98RWPT4rZzVq4UjskW5xkMT5RTtPrFKgw2SeCY9WfdSv9tg611FbwXb7zQpzVVEZvJhAfpit2h",
  "key8": "fEtDNx6VJ7wAyLK7ojdfSAeJ3BZhgYxvnSrM4hxXRkHRN7t3zfzvSTBvVmBMQ4u2yKmT3yz6x2XLWNv4tghc8Ka",
  "key9": "2kQyzDXtvE28vxJCK1JPcMSHChDqRnKQbk5ue1zNWRGA99NbCqLkAubWK5L7R5Krstvud3FHft2bZnMd8qqaav3W",
  "key10": "shgiJ2R3gfvPXGt2mVxmp858Bwfggy333nqyatX2N9LBWi4cbPo2UH94pGXykwSwKqMZJZoZkHFcvLvXHuSv3t2",
  "key11": "5rUhweEkVqDc8BkDtioDYrnjpCEEN5wj6hYu6qmQP35CY99yV4aZ93a8jfKKVbzDRGNGg9piaM4HVo4TvWS81AXo",
  "key12": "2xBcRimg3H7377RcV3iX4kUMwCRGpuLzUBiPcEcP79GcaeuXLP4G6FnrN7v7w2j7Nby7cGaFMrcXkAwsJ4Cp5RBt",
  "key13": "5iBW5jCZB2tABTRA7qedhSMsxBKtcLwRGT5Pmpd2fa1ihSUsFr2Q6hcFxuPxyJaAm51H83rYPZAsVasVE4JjXf1Q",
  "key14": "5M5FDNz8vybmN5sSQ8zyFqtDqeFvb4H9iqzLgSv5WYVazpPJDA6EoB3agxf5qcSm2cRTwdzSxCKYRyGfqhbwTch",
  "key15": "5s9WPkfGK3utP5AFLVm8DziF1BWbXPUruhb94Hj4N5V9tS5hDkMTVBQ2aARqdNhHcB5Y4997CoU8ph2FKdkoDFWx",
  "key16": "56PRyNrB5MxbjuLJBhchBUmXPjt6kh5Udfm49JmYL45RHEB3wciJue57n2oUD1oxbU9y6EsN35YLqbP8ZdXRhyp1",
  "key17": "4k5gDmFpwK7ZbShmzwzfTGKoikVCttcMQEG6jwPygVskgAYDaNj7tyS6tHd4qYLVZNNZoxH4NyjPKVLVw8pEDb99",
  "key18": "4A9ajkSwW8DCWma7MXXMRkFxD8JAp2Q9MV9Z8tRevsbR6X3p37Wy1hmADPj5jjDj3zJ9WLqKMNRn1uCv18HtLGaR",
  "key19": "2DL6SAbVzZmG6H6VM81dTyvHR2zxqVwe8YonajRnX44zihBnGNhdnZ8cAjk9svRQJAxbytaeF5k6RMeAxo4sqfdf",
  "key20": "5yD1gZhPvUFKoNgJCadALe9PBjQNJTNWDwkg2eaGAq5yeprmaf2aDg3noMHtYsrqYiR8VgKzxztP964mgQGsgmMn",
  "key21": "qDeypXU8HU5As3TVtHtFCTzayPUJRHvKj8eMqxzLNmgJntMrJHf9LWtYARUw7N4jrCHGHaS8ub4h124epgyjEDd",
  "key22": "2Z4BZdxgvADB5HsrMMZ7SQ9UHVvVLLGu2zyzfEL4c6GMkPwMHj493nCTcjfRSzymnZgvrijaED7yMQuFcopH7dRx",
  "key23": "4fs7fNty1dwkppkWpHfABMbNnYxjrD5Ejka9ztuZHxMoLvmC8nGvgxaBfmEPQKK1JdtLGHfDK73kLYf57JRZFLsS",
  "key24": "39UXHR74Va3djayo1FzeH2mV6T8HVAADgzNom4MP5oxqKBbph7em7S9WXXLhn8gsXRAJUfwjQVx3UM4CTuQVC3Ba",
  "key25": "4MSPpwohD6hzqi9wLzrdLS6iTHxqv3ueUHCSmkxZH3Ry8M6v8yzuqivN6ntnuaPFUyxU6XaqgK4oCoieF9Uugh54",
  "key26": "3JM2jBjTFFoYR7SrzPHfhXDGMmNGa2q1tqVn8rEayKrR2TpB5tLwPp26k7zjVin5Yt6ZatCudex6iXh8FrtEGosK",
  "key27": "4ysWf6jUcntNW3pNoEQcvi9hVsTEuFvxpMqbgLqrSreAeF6h2NYt8TGSeqNeiSMc99SLJ59vRRGCuoPSj1mC3i4v",
  "key28": "8mTtM4zcLKh628JrNiQtVK86ticVVrqmCWXpjtjwKvA2GhLU6tVVhyViD7RCNGWvMR9e1Upb9wA5cnTmtmN9Nf1"
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
