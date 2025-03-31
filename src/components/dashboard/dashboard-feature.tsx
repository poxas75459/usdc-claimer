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
    "65NeqbdbNHAnj1tbow9PsZBo99uhoPAYii5C15BDKRzDFM4s8LdPx4z5ry7tgWvcsS5rWwmDajUKRbGjosohPjwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hZqdDKvZDkmo2fiUXWoYEzo4SvGWvurJHhYDnwSuHGykQqNp24SR4b4YJyDs4K3U8aqkUQgBCg2En4ndbU4x6bT",
  "key1": "3NNraAmPRfC1bXxrNPAjt8UyKHFZKQAgAeRNywj5FD93RS1uqSJbwQ519tuuMF5pA7TSXVspKc1DLTeG1BvD8LmP",
  "key2": "2NVSmw89pmghuBABxr5NCJ1RSKrg7fxaVKW2x6dLYjnTtLzuTWfNy5uRH9FwVwrotee7tBuxVmZ7c6dHNrxVUUiJ",
  "key3": "HU9JLwbvaTtmBPbK3kESYoddgBPGsD82eKc91camCAK9LYBaNhbLaRtbWg3Xyb3baAvHtNnR1znxCFCCf14Zwud",
  "key4": "ycJkeKRk18CcYC16ohVyj6GzAfrN1rCTBubDnE9QFo7kEL3uC9aQFP5GDFYotCkJvVhS8ebx2A7JvjRHzebTYZ5",
  "key5": "3AWerY8tij9mdU5qYjBCh7Ghw387z4TiWAxhPCu7u2ub34WPKdtYts3vDTviS1ZoM8s7XygmvZyFLyCDbWrLeUB6",
  "key6": "4ykkHpmRWVjaFgEMGiV16PkrCMLEF3UUnqajRU3SsSuNKXJrSZoqfF3H3YdN9LJqV3iZNDj1B7E2yyH5iLVQDmtz",
  "key7": "5TdBVVr3GdkmTLK2ALxCnoncTcatpiy1AKbMbXcvHSiQiU3C6T8xhvHat19PW9LSqyb6gncXBPNCVKZDPwVWyx8v",
  "key8": "4jKpD37wRAzaSnsoAq7wb25KXRqZcGmCGY5ZA6TNNUWrPuiYXxPyheEcRMZsub5K4o4s2XUDkGJPmxNWwhjzTXnM",
  "key9": "4ojGE5v1jBwN9cKXGgbb63uRJkQ16vdCdcFHzSJ3QGS5Xh2QsyEK7VD5AtAXxBRXwfx6aVnrBeP5c3nwQFwWvW64",
  "key10": "4EbVjXVDUCDWKkvYdAHSsX6ofPKpowFFC1QGRQYtegpzuW1BXx8HpkqWHVzKPHW2MGLbCNSffFyiF1Yq847TbeYP",
  "key11": "3HZqiwHgCK4HiVRsshK2GesbMazHuD6MjPdmssv6i4VpB2BAgFRVb24MGtxJuhiV8RhujNbaPK3jbHnJy4fZVzfo",
  "key12": "9itNybWreZDU8GiLQJaH6bjojirtofkvxqc669rNW4DAm4cJdG6hnnZiLVtEAL5GeC1KALUTMiUgVzRWa1mKRok",
  "key13": "4Bt6F8HuY42R3Xm4eacWEKYbQHdAqufJkiM11z217HaYVGSHh5LRLfLaZg1qQq7nGGuGUMXW26Du68UVsoaKK7he",
  "key14": "59o7b6CjpRKPtcKnhWSSYK9NyCyxvEXSSXJ8Gh5NJhVEXpQrmKwx4Fvjx2UEJNurN3MF9pNKs7frjLMhCsiJzCqz",
  "key15": "3EGnmMHb6BmxeMcKPNZjPZdXQXWMeQkghkkaFqtynKPNDFNr8einPohjfn7ckmC1sPMTLBwgbFAcMcfgeK96m2yJ",
  "key16": "2B4Ah9wjeCs9TecYwMHv1kXu8H24i87zgon3AKMvPqKpaozLj2594AC3GeVWfEEKfyhWWS6e1YvDVz6fokFRnuKY",
  "key17": "41ivQveyPsWqt9h6czcyebjaj2HLSBLSSx6z9z2rwm9g6gv1jzLEjENbcwCHMbJXdHiJT6KH8mvPfPUroHy2u9zo",
  "key18": "4ZY6FgFE4cLU4SiBypZ6nS8gzgqqBBSSxNHB2qJERQJCP6FiCr4SkZVvkH2VsZy9HeAYXFkFUiPDYEHLNHdwuPiB",
  "key19": "57P36FusiABB3w4cmQtuDBHkVGAERtu26RbHxSZAzxFQBLeXA9U7suGTSCUgVC9fipvQKLfpHvJA7eKDDKLsqbkA",
  "key20": "4Srnkdfpy4pF7XLdQimEqifwQusdQAoWUWR6h5c5YcekBW69kQdBnf5qbq2FZZ4vBsYY5rdtnMjCDd72Vn9JMx43",
  "key21": "5CL9Uuux7pURHTp93uJ9vBtWhf1JgB4WZwXjnrnzTdVsKZgxbMQ1xPaFuHX24Wf5v4ngF7gvEZjYSngwdUyFqUDZ",
  "key22": "49hryaL9UNCA7U1a4SSmMLtgfTrtkixe8rF4kJTc8zh2FpftNNexcEcsmCC6sYrXD9EbT16TnPeRHjUF9nYehGNG",
  "key23": "4LCpNbERoZDLto8PXHBCmUHn9V6gysnSdnerHjf5MGjY5wFQhF9yfmPvmSBccH2E7JPJzhmFxQCewzAfjDQw1m9t",
  "key24": "3Uynk7G98C6jRjuwaZYPqwUE5zfZpw3HFnXtcTrM2dcsZVSYhNyqi96rr5oaGzkfuzefgTsQ458TGiQgBuQ19n6k",
  "key25": "2McBti7dxtWhVyeN14jDWiX1w9QBhRAs7UJTpQpTa7KYxx1huaekNrgWpZgwFDc93UyAeDjy92FLaBwUMUsiytGH",
  "key26": "58y1pwyaboquvQyFi1kbEXYBKDjTX6niSx4XbLDbW8zKDA6LHKx8sKRNLHByme83FhmSovbf91YabwqvsYkN3CGD",
  "key27": "2SoBkU4FnhAnXzVrJxw6rmFux7mTEN5f3U1XRppABVEa6LzYbeSFALva7C1FJZ5EkZKLWvUNurjKSB5YdxFEth9H",
  "key28": "553onZUmytgE4dJKZr9ACaxJWJMsdnsCHX8YNmNFL97jX7jEMyv3MbHgsE1B8p4hyb65zWS46vUPvBQktTSH2Uxs",
  "key29": "yo1n1QTVoKiKsZPwkQqqkuDCotnoPr5qw4BWMxTpEq9TNiV3TntfcDNmzakxPPdGXyEu9myusteSDVNm5wfXNPQ",
  "key30": "5u9bLC1d1yMq3QE2G7qqQgfjDtZboz6HvGDGZVz2u3uYnFmxdKHQDqfpFE1osk4NLKpC3VGx1Crr3t2SDZS9fAcZ",
  "key31": "2Hn9aRYSyUqoLkB916B99NVvRNSdatdsXcAGkUetWSjRsND7V2F4YH4FLSFexpPe11HwYzjsVyNxSgYrZhpggVaF",
  "key32": "SE8511SDH38ZKYDK6eJpCU3N1SSLA8hHxAFb2QunDCWUcQ2SScXKpuqrwPQChaNk8tRcfFVJbNHpJfwhhg67bct"
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
