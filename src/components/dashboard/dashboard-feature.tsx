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
    "4JV1LWaow6R9oo8z3fdQ92Mn3RqbBf84LRdxS98bmsHxMTz6W5JqWCfigWMT82FvPZrvREnJsS5pDqphZaJQ2sUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BNKHcrqBgo1xizqPvrUxRWbjsfDtTjG4x4fPZaWWMA2CjQU6UgbtUaeEx8ZAjv18dyaEz83rXAfgKiWQfjnYriy",
  "key1": "2RZm1u7DfzFft1HvyWyYrBauLyB6fxj8o7iJPDrEWkoNrV4bt4bsaEQkv6PjdEVkdrupELcATdneRj1AaH2nxPLY",
  "key2": "zSA4WT3B8q2PVxCquoHbrNC9Yv2P12dwuidaqrEsEokxM7BAUYjoZPvXHh337RMURQLP2jySEo4QoPJobuqEjd9",
  "key3": "5ZRtsgqYo8xWNiWiieQ9EHmjhMH5YS1i5BDkhcuSpwK9SZeiK6jx5BQ3TSawekEcmEbAf4GT6UWrVt8QKwbaMYh",
  "key4": "4AeYFyJBHbkxjCYrxqMstLNeNeKWrqyA1Ww85rR53jZVAVy3xGpz3WUTXhbJX4tqKaguhExt61KHXnYJiKhosdDt",
  "key5": "2roktXavTNDydAYkhxBPgWYnYynSWG46cPKsmVzsPtm2eDAhvqGE2BMqruZkqz3vkeZJnXLd5qkhiKvYhq9D2Sa5",
  "key6": "4FeWRzATaArZSh6SWSCmzwNxxLb6dir3623boS5cNuqRHsQoHApYTzYidqugS2qgMVqxiKSZyUoGcrPSWKES3GJd",
  "key7": "61ptmKntr2rEdi9mRPyJBQ2Rnaia5Km4oUajKZWQDgy6rWEv3TE12Q9wdeTRzBHbeZrSNRSu1mBscT3wTSzYz628",
  "key8": "51hvTguxqoxeYTd3ykCmh7XXzviTFZKnGToEpM7UCNyP7UNz712kciQkAQoY285334PPuRdRh8okEN9szmTfasQc",
  "key9": "4vsZKE2TgZwSjtqFE3JPfqkDZ9EkyXj89AoKs63UWU18o4R3Nb9xaHNnfWTm7i7WWE7Ye3J66ybJP7LmutMmBLHF",
  "key10": "3RCEVodmBad9FNe9GSAvW2hdRa9JxtNxPnrgoKQyphHL8oZvvsFT4HJqwsLEcbUiLLP9Ka3XdbUgM4GsZifYdS2G",
  "key11": "3tNxLN7Pu8F2nFmwxxd6uKGYf4ss5bhYY4cZHgPoUgUMuFP5BiogoCWjLU4CfQPcdSMqBhzgdn6J8h7rYyV8gf3w",
  "key12": "2WfLdD5gYk6PX2ZxwDefNAbzvXFWNrCMWsFTkrkvhqbzdV33nfASkmfda8scXHqLQCcDGu2RK6ru3gUrWcT26kgA",
  "key13": "3CaYAhe1qbDY3qFfUnXzyV2VPXtWpA6ndL8NSBE9VK66iURcB9YZAEjwsdGhXiL6cn5qBAKE4jKfyZCVgCtLLQHq",
  "key14": "5ZZiRrTJjmUgHREL9y1g61KM5uHypkDF7ssX3pn7PHX2B7DXiP5rTfJjPUmAfYLxTsCuRKnmMx6tn8QeC5RNpxhu",
  "key15": "4H9znyjw9Y1BQVN3UnVqYs6aEWRZFoaw81zLMKiFWBE8Vjhk27mb4jTswReisF6qTzZoKFp2zBKrA9VX1ZZCmkxk",
  "key16": "zXARhHnECwtCeAAPbMbAGkXRpJAH6X2D9BPYTWRhpAdVVUHq9UCauK3njcHmnP1k26cg32vaQpNnuN7jXUKtZEW",
  "key17": "krbC4MBopjKxB6UwdrdAAnrf48rSgHca9Dy6RKprtmeU6tTdGj9RnZZB2SmCUnGA7TmzCL6VbCpjGDLnMKLtszb",
  "key18": "5mziM8LxM1kCTahc6MpneMPAmrkzNb4tmZu3fXgGTsv1B3u4nYqpiBYpBXmC3UbYGtUD5kurmocV9iSEWDab61zQ",
  "key19": "3oJ7yNxjtY68wGk2VvPRo8Luvb4ahyXTa1eYukjkVZLDrahRjA97nKVWncpfPTPfADhZGjGHhnkV1bxjR8zsVaVJ",
  "key20": "9pqDVsSgE5m5aBi9VbyQCVoprHF6HBZ7Svg71yzz83HKGhL1jEbPqjaKVyZGqggBpHJ8cJ9F98qvdva4qNjbwCX",
  "key21": "5mcgxAH1DETLG6PwFwECkirQxJLzW8UyV8NVa5UubF6nBiHeSCGgAejJ9QqJnYmsJuB4THTPBxmDHjP9cahQMQDH",
  "key22": "7YvySoUAshctAG55KNz8SSfGSjPjRhtYp2cPyUwoGrhZ1fHLPs9wjHStGcsNgzt32yDUP8sX8MXn1UGeYyzfiw8",
  "key23": "toJjQqcJynetE7qiwAGgyDtFkFPVdE1JCVe1JT91pthZPBB1hp7CxP78KWsSB8ekg8xbMCrbTiPiaxoXb6k64HK",
  "key24": "2ZGHnpVAkZ3MfuD2smP4XrNCKwgEKYiMq51jUquSnXbFaPCkT3nvawCYN9nnc72JyTJbLxaARZhkQpS7nk4ey1Y",
  "key25": "ZLgsmQFNP183zTi8X1VKPHqjJp2BrjpojQkvm1uHpjNLW3gnxZ3dJLswTmys7ekum789uLVTrQ2Z4NbV9NxFv9T",
  "key26": "57rY4nyDiHL8u9hLEb77LK8YxnaVCxdjb2oCZLvjD5wK53dTpTy7J8fFWA4CzvEWivv9EPv2yGq1t56tcjHovFUD",
  "key27": "3fvrgLBxtXWJMZ2oP1LakZnubK2APLdM7XKitSUjNmsS6uQE7CcbSg58DH4emP8E33NJ9mK7PPQRHtTeKM776S6F",
  "key28": "53jgdgNHKSSzeY4zESW4fiFpJQX4ce4zHBMEDQm6c5arUpAJvU7eYPYT6nWicertvmttPrHjjUGrN4n7ex7NN71G",
  "key29": "5FhVWDFP2mjNrQDu1FBrQD2aQBjmHdaXRpWX6BxX7aEyFKRseeLgRifsymnuTwdMHdJemTicUxMpDaxRiYV8CQ98",
  "key30": "apDnPkcR8bERMJfGnjbWpuNq3Mv98NwQyGyqy4oc2z8SADmSbPF3peMFGP4RUb2y1PLztLz9edJEiteGGAmdX12"
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
