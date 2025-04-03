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
    "3RNqpx9dXYLy6FwRv9JWn6SCYVe6UzFDkksPZHx3PMGeTbB71UtWZB6MEjuvuknSBfCLLcoGN4pqqPBeBvS2H13W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CNVTaPj4greGwR5NL97T5Jvm5BXgTAFJSKi3Tjheh84FmgB4YuDq1FWovVqV9HjckGsia4SKqC6KQHjBUp7Rius",
  "key1": "5w6yTvJhD3mHA8nNcnQL1hHqmZF6M9jL3wJKSX1bVKnaHy2DpdyauMnNLWJvBet5dJmmygwPfkEpc4NzitpG3S14",
  "key2": "3XVKzz8fod3YfoqyJQtDFbjJYH1Xrqw9KuquNaajkMdwf2YcyYpvhYbT6awaU6WRDUQ1E4AKq1y3NdmmWe8vjeFp",
  "key3": "B8cMbJVWyRQjjf3TjnnSUZt4hqm2XV9N6z2QqhqVQ2KYqjaGvAwdM7iHUDKYCHt7AbsCUND6tYNiqLQU1scP8Me",
  "key4": "3ekBqEQfkFntVk31UB879yXsQagJRXKbeKtafrAam43Nm1n4fiD2z5WCt8Uh3jgsptcs8yPan5hkeYnDSifNA8te",
  "key5": "5bnCzoWm43aT26vo7mTSa65ASyMYZQZQ15FHXfHCJQ9rY2PZrZ5hsE4h16vVJDGupZWvFK6kdJz5cFgcbzfnUP9C",
  "key6": "4WidNcMZXGXnS4E6s3xWc2LAHZCxJgTNEoRXhrjJek9ZoZDcpUTwSJDGS49skbYHTktzTvGE1qBdGCk94KgwBxeA",
  "key7": "835NLyvucQGodbWFAWpePbh46TyFat549XRsVF4gmJDxRi6PGjqvtX4LpoZ4VUFzSCV96aoLBy6u8Q6jQzUHFf3",
  "key8": "5MRWJa2p6oHkMGDSThqeoxT8EfF2U2U1Fmy7v7jJd68yAqceW4t81s8wofEHKBAkf8JuuZ8h4ynyNzD42W5ba4d2",
  "key9": "5nsDKw6xH3jcZ3grgM1TA3iYkHY1oRkH2iDbHP7UaCJsK8FWdFLQSFiRJtqe3k5AsvFtqMHvCVNEZcdFyoxHstBN",
  "key10": "2EGYULJRwUWGYnerow93wTfDx2aE2CG6kvKLw1cUVuXmbudqRnj6wFuMjZiCwo4qYey6TBL7xUCaXnxQwSMp7WiJ",
  "key11": "46zefLmGjyuXJNRWUYHAo7CaKH9DD4JEauCfWfbejRcZsnL3kcKPwvysiVvf5zKz2hDfY3TbuFfmovWNYrE6eJp1",
  "key12": "4pZKe88oRgwWnCvxwgrb5gCuSnUgNSSvau9jptFDumJCLa2bkP9Wqgi1fSvgS8FjPjhyWu14v4kbfjrTfjKBz6QD",
  "key13": "5y6sd2R6gqJ7jhxGXXDx997qtdWqDZKhyST5YUmqtZjuTk5GYugwHvbbgN9f9Xb3nkfJya85fQWjX55GhsNVVa6W",
  "key14": "2mBtYUkzbJHeUDhvX2pS4spFwbAipyimWb6VP78oPHmNiCJHcEqGHMMztTBzzWLV7FePfBxGpQgPvGU6EiDkAkSh",
  "key15": "5kWuNhbAK2NwQKWyBnA9zUsoULJQNDgAWEc8GxKV4oFiPecMYnAVC8Rirw2ZmkmQ9cPjRdhfV8nUhuLS1PC9dUbj",
  "key16": "5WLz1pGD33Qi9Ab3StvkdKNTKw712pf1nDUq1PJhn2LczcCKoxMMnVJFuLsnZTtcf1mfEnSpqcpodhVVbJNVtFwa",
  "key17": "32vYSgh6wdGpqXQmywgDoUWcChYhEnAGP1QmDD8b3nyySwamR4fCY4DNQD3Z2eXwuNbpobrAkJr2aB23GrbKsxH2",
  "key18": "KF39DDn86jDU1dwRjEP2pG32eC2eh3dwFT7NEdeUX9Vg2w92mg81tMHCzcVHqQpiz4m2gBqP1qgF5DrVvAJ5EKA",
  "key19": "4KtEYkZpK4BMe49L6KCNH93Y8MSNHidUnCvHrNNvnQXSfGtBt813aTmeDNcpMt7qqAH3EWKsUBVEvKWnfRnYm3mg",
  "key20": "3xX1vq7MrqSUt4ihDH7fweeFTmZ2dyR21VBS1oH73Lh77wkmDEwXSzJp8tvUF9qkgNKDo3cm1wVMoMe748w7dzaZ",
  "key21": "5yyWp4NVMXxibD8Q1KxHd5E1gydn31g4sxskAss9WZnyqj1Fudtxj5SUB3yTCwP2FeZTRwYrmBQ3Dh5fvviDACCC",
  "key22": "5DDjxEVczTL3cD8ihvzo1oWwGMKvCLvdfn7EYWtX8FW94BGGBMThoJBhwXtJ1oB5sp1Gi4S4BAfW7zLKkuwEm9uy",
  "key23": "5BB8zYz9C8fXYVBDHTLhq5B7kKjzZMxatDjwGpRk8nupgApegSeMce2YuFN3Axzzufi2RuJsLfKSq3PNYSkasrZP",
  "key24": "5ah1Vwm5BmiuD1qDqGzLzPBHjQSLKVkSocnQMunvRrU3S7G6HSUpG9W6HMQKXnKiCcebQYd1zUNzHwNNTC2u86LM",
  "key25": "3Ga6ERyr6D3UfNKSWbhcdKPqrioNSzDEjMEoo3iJbiVDLUk8nZcChnmSVgStYU1ii7jHpaYPpnh4fU7Hu2hTTFWY",
  "key26": "3qjwG59UfywcuziKViCqTGGis2th1mcGcjtPRr6u5vQg66smyDj1mEDLFmWdmRTVVDfn17pPvDQfMXUF1U8isjaA",
  "key27": "65YVaeqNh2F5Hzj5c58u7HFoGnuKaSZRhjQAT4H3o9zUZ5mNdLsJPqdwaxvXeY4LV1167dHipk3b6p9LF4fYyAiX",
  "key28": "2gNgnDYwHaaQPk8GM7jnPvaK6wGsqG9Q4w6VPqmPzcXn9RtoZuToWptjKKs4g2TUXvboDQW1RYRUNUz7w2UL81yF"
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
