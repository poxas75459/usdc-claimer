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
    "2gecaJcrDnkivGXNrvHQVmsMfbBXc4qTqrS8cci4TDs5vA8yYfCycUhsJ516kt46C8GYMVZtzKDZr6uTZsKGLyVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ERZtKKubB88xDJ2BBQUNAqyHDUPiYDEDRDyLY74BhLofnekJosXADjhrHBs4knmFC4aUPuyFE1T1u9xmxA1iN9K",
  "key1": "4yhJQt1X3KXahA9xxYifmPwscXuLmZVNwDTutJVqq4VNLGihG8Njg5cgpavMXpZnShPam6XdBg2TiTLTExvTDF4q",
  "key2": "4Uq9KuksbE1tnRMhFd79uZAzHtYRT2upwReLvkLf8MNdJfhDCQ3kNBFQifBYPkg4h2qP1iKpQX7me7NAi7jiKxi",
  "key3": "5ZWvjkkkMCMSyiDDKvGYvhecnuMpxHgy85MzWMvXvKjneC1pDwBoBur6vNAGWrWr9oj2ea418NEkjp3j392y2io8",
  "key4": "5a3yBVN6XFJbxBwEe4ZSLu5cmVDNdNQPrEz4h4E7xaWzV1rvw4uPxkFhgU4jbg1rP5Tp5SMmCoAAoQvYncdzSwEP",
  "key5": "5xBbFh1Pav2ihwrRUspmUMcCZg58zdXfuP9zHLq8268QVvrnAN5kHBVzDhCqRTryvZZxtT7s4CwQpc7D1kxT2PDm",
  "key6": "4utUd9xHFj3komQGcytgmcXKX45WM4wUXnJPjtgcBoexk1hUnEDovsPwn5a39CdT8zYyEPDgweBXqnYDgnGMptbC",
  "key7": "r7e65texA2wfXNEGkxVr91194Cs3gXAgg2TVDJaFmjVPdU58AbxXHN2czL8YR1kNPzNLfJKWR78XXsN3T1rcSuu",
  "key8": "i8bQLtJwFu9mJC5BvARWgZK3LUCGhLD8JHyisnjW89DRpJm5ngMYSvjT9Bc1JjFAdLApHfeKBupqC3gt4uLAo7Q",
  "key9": "2r2HVmedHBVYGCygcrAt75EhJ9aVY6xZAAziqAhhKDP5nbEMRjeLkVRucFGq3Pr9UjQ9MqBjZNVpCFbV4E9Afuhp",
  "key10": "29Lf2RdYCzmgo4qkRkSa2YujrEbVhFEGpPBUb8GV9Yrvmbke7tBqcjNfbRxK5Smpv74iELpZG999DBjJkKfRgzMH",
  "key11": "3T9bQzY9RXAb1GTEYLr1fH7RQKwVxq6E9bzBvK4SRTpLPzQ4DQjCvJq1qazJ2xpqnNx4EH42BzwV2QouPazZJwji",
  "key12": "31VbrtheeHT8Twc9mn1MLdytQvk6RzWXUfhEhNCjWJpnVkSUZHfFb715DNVFnFJKfS4mSxG8g5CEci5h7Bve5eeQ",
  "key13": "5TDbYkExBoNxZYrBGMiynrisFbfq1NV4L8y537ypo14BwnXfBacSmFnWxmmweJuQyxxuREqXPx97GGunqpyT3rS9",
  "key14": "45wrjk3EGkqJxbrVKE5or9irWiZsTibTiDEq4VSVeTYQ21g1Gr7NZ6m8tn7AEis7z27LkiLfK1aG9wmCokcsPcZ3",
  "key15": "4UfEDoMmUTuKqKfcq8TgDaqVcET58FYpkWnAJbdSJ6B4o1xbJ89h4gqV7F9M72SLvrk7Nb6UoN1id77MA9ivM2yM",
  "key16": "5cBFziXBMbpNNQZf5xstmPQDNkWhwL5WCyZEntuPNbc1HgQ6T8hjfFWSh6czJfzdox5vRMXTfTdY8DpWfc9QbXHC",
  "key17": "5nqXSrewcqYH33kM92yYXJ11XzpcREo52zRT78StgfG8mt5CqJhcQnejb8us1HZTeBASzvTRXgNHQWtrQ7Wr1BiH",
  "key18": "2uv1U4DKDX9GFJZc35FBtu2wiY31F39rjeSdd8uZUkVCAvpW7GuYswDzvjX71i8xsRHczpBxsD1SWGoS756UmbZE",
  "key19": "rF1vRbxXwsBRQiATAmzqHJnVcTBsH1bQRWjgA3TLhGimnKG2Jd88TXfDvZGJdHMQvKg4ffLp6cD9T9zmYHbHqcU",
  "key20": "sKCX8tR15RASgu4CtEq69TNQVzVsJx1m4kH6Ev9gQUgpDewgUL7WRXWCNNgSojGqpB1ZwrTj3JGCy9PdKZ6LaNq",
  "key21": "5Ai4XNmTzVy9wRLo9hhcF3jKXN5QH1qXdtmgkZU7RKrPq6d83rfhZG592EftsEz2r3A5ywgHNGwMX6eRhGzu1qoP",
  "key22": "5KTpD11e2F1PNQahcTFtiQyg2t9cTfEQJxW4dH7hd276hXa9VzM27857ZqLaRVJDsh2qLx5ZTp4JX7ZzwVP6SWzQ",
  "key23": "1N8vaNGx4SnXwqupHAYMh9BaWbKr1uVe754jg9DHghtbwrvPmqFppDrNPzdsRpUevQodjdba4396KkVQMeQKZvW",
  "key24": "2DGhdWje8YrYdeRKdvasrRmcabCX1EepozcT7Vih4PMwWDDcJbmDryZ2JDNdjPx8DkV8iRY9hA8vL4Akttc8MJGh",
  "key25": "5hnXjcTKxVzFf3rR7zJNcXZuJPNNY5cztTM8xK69s14i4ewp4RJr7gQNmVGAdgwu7Q85AgQqbbZhCChJzLwXcoiP",
  "key26": "269WvFRwKxu4UP82gCLag7bSEq8deajTPqNbC5sQA1VStRaHc25kX2Gsz7vXnMxrvBnJ6mqJUpqe7VXELRYnC5qn",
  "key27": "43nYqVb6jtXyDXmtNbGuT9MuDmPCwqgjWNjyPHTN5kBQoZEKXs7QC8mzqiUj16Qns3pwxpZ3SMYwWAbi2imhpVF3",
  "key28": "3F6mFdnghipo8TsgwsddYkRqYupSeYWh6SALBoXg9uVBtdrVFKg39dUhEKUJAZs3xrUX7j4FLD6cPcgc36swtJ2y",
  "key29": "6474htZcjst1TJUACeAJfVpRrKQetH44ppv26GHPbEoBGAEqPX8WVLHSNLGkZQ3q8VuawTvPSf25PXguht4DBemr",
  "key30": "5Pq8uhyMKZ1eDfSRZFQxpY76MUN8FhmiQPhAoZWmcR8Ko6ZFUmoUNCN4aSq6g2QBNutSReiSfukE4hkHnywQxADd",
  "key31": "2CZ4Tf6jQ5JAKNFbzhBfWP3Fw8j4oE56VvT1m88WHqTXeCneD9sKnyFzeu6moaDBawScVL6yN4etXXZncuSzv8mW",
  "key32": "KPDy5KWq1sc265GBWhB9mcWVp5LYFvshfZihHxZW5AEFmtqvwsJuWd25toZL4EvbB7BSd91AogeFQ9BgPqEifRY",
  "key33": "dFbuo4e4aKgFCksU9ayZmHZb29QPWteddynK8cq211b9Y2emcuExbCVCe4GCgJo3EU6s3xUPYLzbjH4W5RaFHfc"
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
