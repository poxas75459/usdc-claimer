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
    "5YfeEYEWn4X5mhgSK6FAjmR91UKjAm2DfBFJa7WErBXMDt1hGoeEyQG2fWdt6WbBWHE7jVbfp2wwFPpk3YLSdETe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o3pQUGHc4ZDmpYfQMuaoXMLFt68wNcF5yuyCsbgGmUB4mKNw1AahLhtxNQC9uMHe349uGxoEmvfE6MkpLRjR48u",
  "key1": "3DfNe5QrvjGJf7XqZeyHUs9iRq3BPBQgqP7Nhh5EFnMop9w39uaaBQn93pyFnLPb3Hrt9aJVciXHKZQwchod2JNL",
  "key2": "3hpDFosw8pQrEuY2ZjcJuQKFcaXUh6urSW9hr2Kyo6LgFmXTQbMhCTbGk1vQvqPs4sg7YqgdrN8QCKjaDhWcTvS8",
  "key3": "64nyGfSKAsS5JZwrFV1d5g2fnvyK626eD2eYbNZsYDL4aNoFCB8QGKvuMuEwdFnxsZZXda5q2A3Dhhu3MJy4gP6",
  "key4": "5ZYMrsLmmzW6htaVxDTAwTsn1w33xHeLfBkEfDwDLVmdHHtTwc3SHS9DMTFgWx7bEKCYk994QB8LLHfZLX9axyb8",
  "key5": "5Y8qGaR6WdrAcevCiVxFtJmsdVptAmZs4FHRuimJAPhs7jkZiWF3tbnFiJLiXvFkVHK7Sf8TKm7aP7Y9PbnQt9EJ",
  "key6": "678YJQZr6WW4Yhjn4W5MHU4wsoFP8ZHGzuN9CbvLC4PVX7C4nbujmLi5ZJC667kTHxRW4c7jK153cdnuwWvB9CWH",
  "key7": "4KRzGRPGvNsFnyjQpv5UmktmnigeYPcTYtTNAZZfQtsgDrZMRNgzTWonAzM8Uo2WQAAnfSTNYbUDJ6ryTMqSweZo",
  "key8": "3qDNGsmdsWUCbizYT9nEfsuAYkgN8jgT9sSPPrrs7SmN5MEekDm8fPA6w2PzLmZgW3fw8Vu3tZM537iZthi4vrSK",
  "key9": "3FujJ5T2x2MUKW1DZUbmtzkZ2YAmtzahgNDFmznGw8xFtpjD8tswnGktarvj1LnWSm72iU1TjDJmKiAYPSoMRBAq",
  "key10": "4VSHbtgLfQ7WG8pxn1EKZykrNYTRe8QacpqiGCaRuzdNdcMAGfmgLV2wpgfrbbZPMemjXmPPDkriG1Pr35edirsn",
  "key11": "4n92zU6e8Nwm3jn8LC1Q2g9oCdi6wLMdRwxJoG48akdVB4F1My2HcYjpd96mf3y1jFKT2YpasDPKQr9qLTDgEykA",
  "key12": "4AhLKfMEiM37G2H2vPUpFFVM45PabB1cTzPGJWA8eVLLMEXvmJTCo1vffohBEHThsbRL7GyB9s4q5Y9Db4UZXjAG",
  "key13": "2YBQyGae2g6S6qb4UXWuEQLDLC2i7tBjFouMLnqJD6ndiWRvNrGEnEdoPFPZz2FiiAWnQ1bwmeRvkKGqHGzFXtn5",
  "key14": "3aExYpbDzhc1uYTyhdvkhAzRtPho3vhJL3SknarfLXocC17RqvMbdKFYz2S6kKtdLtgXEBZsQFUasZN9x8MF4Tt9",
  "key15": "3pShz2VWFVd3CZCFyV3YVyawjvoxbtv61Fumq3TXNm8NRJdqdB8QEJfVgt7Tzp4B7wvSdubHP4odrEjohAKTg26R",
  "key16": "5x3oYJgM7ECseB6w2gCUk9vS6j8aDcgQzP5Syn5BxUNekAqfvgHY5zJaAHt9EDWsa1bezWrWmUXS4igy6TXqKkcx",
  "key17": "2reVB9aHgopNyt5FKmY6i1BEcY5YkB5MSyBhF24LvtFrV5ja4jMvcz6Njc6ohS329TckU8srmt8Q3RBogJQH5M1j",
  "key18": "NXqKkPwFkJvx6c3GEZGJQgnx3HKHvCwK4LQfycXjQG4yTqFz4gvTcxDPC4ghXSx1iNc3K3UXmjmunrcLiJLukgR",
  "key19": "ELkzCmSxzVRJTVt5TkocMV9y3a3y3TPvnZdxmT646t3NL8d74DFU8HuP2vWMZLwQentu6DZhncVsr8bZBiwp7KR",
  "key20": "2XkVvvdQihZEvLjcVCsF22GLmYgQJej2MX557vDgSeNbQxBPgeF7ba8gRRCun2JorCbjuawwPB18MK7DauN4pwrV",
  "key21": "pwQFkurKajiXdZsk2J1HwoyAvQ6qiecKaLQD1ZP1g5tSH9kuXY1BA7MMvtsn6VenkbFCQ9PN4c35sX4D8YtVhp9",
  "key22": "2uPLGfFxjfP7PUkbUEe6LrrgAoJmPudJkYLcbpdC3ybHtcyudwQXLe3q37eRrTbremSXAYdWGgV7BaGhEoQVvgEd",
  "key23": "g3LH2dn9uHbCFqQy2PmPLA72Mx67Y6sDxZmpJvj5wGw8NR4WJ8XuE3cQq5xWA6ZtgQkXcwEo7HHJnUBL3WesGh2",
  "key24": "2b3jYXTCE1PnRNv6F6EBZ9y7oFH8Widj5DPe9bYoSffu5MCS654gFqiFDA6ADdH86SyxbRnfE2Mz1zsofzccfkYg",
  "key25": "4RMwD3MAAtAyt9ZeJtDhfuWY5jz7jRM42ozZU1F8WVJJrGFfRkBtDfd8ZnEhL7fmoDXvaiHocuKivETwg1PYpqvc",
  "key26": "Q5kFBePQoFWo4g1VU7MhPbWEq8PMrbweYXrCLEmyYvgzpJ8A5LGV235KQBd9oYtCrWSSjuygQT3Q3SrKidyUDgu",
  "key27": "2Ujpnc9UpcV9UhPu1GJDeTioR3JcZFYJGWHAzXSBrA3HfJ2oXbTN4wEFKHhA4wJ7U6UjayJqrcBuaLS3ji1nL8fZ",
  "key28": "5hZ9erJVmtjt6K6Pxgovwj2fqFwbKfTh2tL56gdRAUnRcFmCLckA96BHSaQaFvNMeVok3eEY6NA73kF6B27CvkaH",
  "key29": "3pdMfqkWU5jPeeG3P1CWJcoquADraKGMHZXh3SC6SYGLyeHyc8msr9PvZiyVUH8AuTk6omSAtTggQhbtNNXjzcHg"
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
