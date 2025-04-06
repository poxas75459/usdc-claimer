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
    "h9ier2m33JW6LWSWbDuKM9EXkUd4quWSzRhYucuedjJr5DJEK5EuVcuN2HPGM596PdiyuaegQPtmJUdsGHgHdVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55jfWNBMcbtRM1G3WMfZvpWCYzwXDh5ba5Na8okjx8XmZ3hXzga916H3hWbshuA9RGTRBBJ67fjPjThWTMAgK9DN",
  "key1": "zHLNnZ9qWg4JVDBb1R4AKABe5QG4WRFeRYfjtkXgPb4jMKz4AtGsqMMPkjAV8jD1EkrKJieGPTjBAhSxqf7ttN1",
  "key2": "5rpkAyqFKd3hkrun3GdLn7xUKa5u1tSJVW9EHK6i6iuJ3XbW99d4nJPaxrhFJyA3xhrzKbCf4sRwE4BMMXTwK52J",
  "key3": "2awJvqyXw2uEieYFanae5WCLjtokTXp1zLXEenZUHHahXtwwNDV9QFNaWtGboWdCbWMf5SwsVn3MBy9Qh1g3US8j",
  "key4": "4hS7rJeZRcFr3rTUFxoJj1MRsMqWbJ6WqvekdNYLe4YZJR88urnLgCgbMidHPmaEDgFutMaJYASUU4sQaowuUASP",
  "key5": "3fYRJXDPxsbS1juzcadtZYzn7JNpALqLQYW8mMkKJrNrSJzP99RrkhFqPfLtjeD3537N56iUtPGf5onBCESRfJU3",
  "key6": "2hoZ9Cn2VMznsG7k2ZKQt6UcmzXTP8WjJbQX28Ec68juUGsvNJqvQbywYhvymHjARqsKq2t4tadQZ8Ekf8h5NoQi",
  "key7": "5GM8MJn78qRXCQuAG933QQXF3zxKkFUEvGahSGA1nRRaKkdSexjTVorRVaj1u7dMUWM4ToDGsAUfPp7EH8e3uH9B",
  "key8": "CsEq4a1jE68cVyBLcTUdrvqXHCXqNqQoiPmgxE9H92Qw92HS1rR5KKAP86JZefUWf9rBQjhivC9qFSbATZNWuuK",
  "key9": "496UCwu5QUNqPgwnXkFpTX3AGHDSJ3YbJJkd5a9AbLyr27rQRgzvBDw3sfbSEaubsF4PN5wMdxx9z6iAZ8pFTZmz",
  "key10": "5cYuR9bVN9GFjHfMvsRKZxv4eUezG2sii5tHL3EXq4jdvVSER18cewjYFM1nrvCPwXNVLFGMoibUpBWqWZvbzU8T",
  "key11": "2bJX3ZY7iue6P5goC5LaxcgoKcmhATFw2qNbAj9jNXWoLdgaPygZqM2WefDtbXE4BMpZRmTRhzrfFkeQQAjMRipN",
  "key12": "2LGADBLmh2cqnXQ8EEQM1SJBNXt4WJ4iDWNUaEj86q3s1YbPMZpwwV546JRJkAdz6L6BdjwLNHrfQXxFJyzMGhAs",
  "key13": "2kiUs1B6QhANRFYXusiwjVMjz54H5ZT77vsAi7SSz3tBx8DPTmTJbjusKzaRrBrEG6NmmozvGyDvhARTdK6AYQvT",
  "key14": "2Kymva23feaQmbZ3VpcjBigPKdSAkoHca7JuzEBUWeeQ5A4prTiiopqDaXSUewejbp1t7XFate44SBjgaWPL59sR",
  "key15": "2Ajf99iL641yxGQgFjCpG9ubeNEJoZJ7ehBwGSpYA7dECWTSAKbRxL9cuj7BCrtydW3nUWDtFcMbRT6X9xueCxhd",
  "key16": "2xdZ9zmSkub5oKG9A177WTVrfP4c2kdmyhHA3ayDC3bkwCaztfdF9mhUVgawVXRoWzH8tbKwhqYLVgQ7gmGfSW14",
  "key17": "bEw4dPpSna4DeCvjnZH4Si1RdFCatmQTKgmYGtNk7jDtLEvnt9vXqYvA7gqRnuHpmYC67D6DPLiija5CKiRDnnb",
  "key18": "4tZeYrZiC8DAz7SqUf5zWRQ2htnStEJAo5nXRGtv6G6eYqZC92x8y4TzJyQ7WvjidiKesnXsMv9S9rBmRgnqi9Zk",
  "key19": "tc8rWUHrZxvYtu8ginVnS9wjLsqQp5UE6HWvyxQzTsxNj6K2qGtVMBim1dYyPDKgFSSsBNFDW6Svb4pix2KHhvC",
  "key20": "srDR1DmdZ9xKAZnGrtFSrTCB4Mk1m1zAWvKahE68hr2Upe7DfvfDAAyxPKszjwaALx5siYKRjYcqMGErjLX6S9r",
  "key21": "2Ndxn8Z9278M4CwNBsLsnR4SX54cCM6EtSMheRDkWXisqcbbQtZHvRCFRNEecu9QbfjoHyge5HDvy2xzwGMuaWan",
  "key22": "2sP9Kqw1TZ3SZNJgNpzSCMrgsdQXU1U1867efip2sGmoMLgGnKxjUUsFeize7YhA9Dv6Sjspyo1teTRmL5aQxFGz",
  "key23": "2a7wTzu1AC1UKERGbHsbHKayTa2jyvp5JkJizJkstBpAAXij2ZC1t11y12NW986rtdpT4T8hET8iuWqRyDmShubj",
  "key24": "3Kkux6bNUXotRczgRMfwDXRX2sKruAVzFECb7Xi7CRgp5D3Jv91GGRuLGqe46WvN6kx5jXzbuCJkx71ek21GJwnA"
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
