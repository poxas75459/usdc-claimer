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
    "2NWxAKPgPHLJpr8Vuw7i4v6BSUD4wpQPyX3dWuPzKVz9JuuWP3Rkc3LeEeTSiU4PVYzcV9ewxMSdpkTazJMCBcHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kAsf4arvU9oGpqQX4PpfAcT7Ekfgoruv7RgNVY5twJregYHcGAbJnz6W66thSMRXzqQncLw6EFtDFFW5W18SGmW",
  "key1": "5TfuhVUV9BiLfMpy2n7QGSf2dZ1iLYLh6R1TUr2J3fqtJkkv7P12CJGJXCHv7c89vwzPMfPvAfWRpsDWaP4wQRc9",
  "key2": "3x3eeU7wbvPnS6d8uNjpcAYSC8uWZsgbm6zjM98Jbfid94UhyS9wZU41ftJ5sSaGkDJzPyC7qh59RhLshCbcq6ns",
  "key3": "2k4YDtpbZ3PLjwoS2TxdKstcMT73zvQAk7WXRYSiJy8D5yoxTP3WJLDR4YaCoeHvLowyA4UiXYz2An3LaBWNGjBi",
  "key4": "qv8GSN6pxTRTp5iKYscviF2Txqs9K8YvXCaXmX1LA5dVCgnFYLUTSq3Yc2sLcRVX57t3hnfbJCxAzY8VwLNzdKm",
  "key5": "2Duj619tntdVSnL1izaGoYpRrtmd7Sva5A6c3qCVEPEkfEHhyAqhNjCNBcRjAtQSMgqSST7xWDW1aSLSKpUYke1V",
  "key6": "3KvVhGhGpNseennxikvpXGXiGFVq1WcrMNJD5RJW5aBY1VgrfWPpqYFsqGhCCXMEWEzvZX13HtDvfGBsYatPrzeX",
  "key7": "25DjubPaSL3Gj6kB7Bx3dZF1ZFDVQt9xzKEK7gQtbcpDQYorwvvmXLsHJzecQxDRogDnsg9WPZwFrAimJoX9V1Bq",
  "key8": "37fMffr4rosepfzYNhEwn5RHZ2ZWyyNKcJbmryt14Hjs12WzbZks25DJ18MNGKTptmHzf4NHLZs1g9ojn2fBEyG5",
  "key9": "4J3iir9h3YW4FfjfWeVeSaTZeaseq6pXiAhys8p8YvkKTtCKZTs7XArrZKFeRAQ346bWShVwicagR7qpu2v2Kjbu",
  "key10": "2MjXtGJdsAd6tropHjHLrdCP4m6aVvxJ89pwQiyXvf7az4BGBE2io7JhZx9Xw4WjuAQUwPFHQNgrkDHM9wX7WHrr",
  "key11": "63kNvK6G76LSk7NEw8JG7ug6UV8m6ypmXsYvv5E8yX6SoizB9G65AiMzoGZ7oCqX93RAhM8fRChnFqxKDFHm7zdJ",
  "key12": "4jfT96quHi6oKjJLQhSKSvDoZz1qNKP1nz8vhChCQpB5J5MeuavkeEGQiQbosuWRYppRcatD258m6ebxSA9WBqhq",
  "key13": "5BM1QMbAGeAw5ym6X55zZhkxS22qibMUibjyRpoXSuS68MMLqSbLWzMu6p1Kb6CCgnnFwZbTtUhn9H5ECGr1qb72",
  "key14": "3eLQfETAuUBGToApMTzxupf1DJQTQ8ceYuB6G6FUHq5Er71rrJHxsSMhXErFemKU1ad6og37WHN3fzzdF9ieDmwp",
  "key15": "51GDu1qU4oUAn1oZQnDCTMcJvcrwtyFsYnrJckPG8KXQpLA92Svs7fzLLpe1RDT91fkkiMQmQ8G3E9qWr9ZcQvB6",
  "key16": "2zJf7CwpzuYsmVCGG4igSVBB5neBBUSmsFED8YXndjrH6v3mdmF5175Q1TyqzkJsA6vaUvrsErcs2cuMLmpNsJDu",
  "key17": "2t997zYEa5huTXmAYzfZeAtD8prU1kHodjD7eSY3rwyPwNSHUZcxaAuceojPh8A9US6sTRcdz85S8RahHbPH3Psq",
  "key18": "ijVhzvtpGHUWgSgV1bAxWVrDUivZSRbQNRZAKBd2ZtKF726h2Z1kFmreNNb6jMuwe7kqs8c1buB5gvD6rb9Z8qp",
  "key19": "31pYVFReYqjywpKjJuGCBChvz6uzmxAvMx4CZh9PzUQt8BpEBM5uEkPW1FUDgAsKMHBKrV3FUnEAwiYsURpsr6zx",
  "key20": "QzM2fCdX3mNikZBKu9DN2RJpXdfwpncFoDnMjLFrRmhbR1v5he4uMiEjhmjDNVqgzZ8qiAMaLzBdtLw28GEwPYT",
  "key21": "2ALbKA2f4KCJscu6YoJzunjRPMwKcSKBTQ8dfTib5PHyg36BiSM1S5qbf2WCwYuSW2iT8FVBX3vLWyMSRDPyvCXN",
  "key22": "24K6iD1PAszMaMJ7kHuLkpVX42tXxUJzRH9FdyZV5r8oQJXTJS6ud2YA7zSHLE2rKMsN1K2Ss27hiQUam29An6iz",
  "key23": "4EGNeHX6sWcmipRxpa8LUDBhzCJjFx4kdKcLYvcSFDnJrUAcsaZ4znyGX58QHbDDgi4U7pbzCVvLe8raWdsWqjk3",
  "key24": "2B5GjidiAZA9iqPu8s9ZxFb68v3kma1dE6ZAmd9xbvfrow1ser5yeFh1FnGqj2j7KuEPw3Yt2hdh3YhnpfRyR2JF",
  "key25": "nRKxMdfMKpBnurdntRFuPSRdW9WVnJ9TegSiqDhJB9dQHJtoX91FQ8ScWCkyy2K8bd1eTY1yYhgMkc2sHFKEdED",
  "key26": "56hmLFyyqx5z1WsQfQbVHaHzQRRwPdoT2NQw7woHwgH2y2AKvUjQoPiY78AFXmbzztiygzL6jLHVNPHyBxqkfKCi",
  "key27": "3CQGPKFsLWo2KsdQPUFxvVXMjZT4s8TQSeecNXv1U4nRFBrVRGdwNh8RehostuWM4dhPyDj3R9W2ip6uWy8PXWnp",
  "key28": "2VuQ148TQZqwktEsfnndVmRzcvZqDM9Pi2og9A8f4KY12XuB58uZnZVMRAKsCGwtfvAyEYRmea7fKc8dHQo6Jdcb",
  "key29": "Se787c4Cxy81GvBxrRqwbjivumx4sbuEhNJXsojadhG7UJoQUGNyto5eguiHUyKh7LQPKAAWXgK4jELfDXmKbSc",
  "key30": "3dW4MrH4DDZtmj4YXDM6WoYYbsDPXpfL78VVcisfLMrXC7LxMGNezCZ2HQv39CMNGtwX6hXHJySZQPekyEwSfT7h",
  "key31": "5YNX62qjDpss21ap6UgNRywjUMS2akiDGhB8HJnd45UXtuyGfXBVRMSZHx6uwzqPzB7pMhYaoZFjqdH4xp282trk",
  "key32": "24Qje2LhLzL4opWp57Xi9E86XZW2FZNLLW8NWMZRoSBAGFqtpaL1PJiWcDUTrQ2D1SzMbR7hbPS5CtWr6VBJPvR2",
  "key33": "2crkr5ZGADt1kVHehFNYB9zEH5hf1DQcejMXVveLoThgY7nGfNW5sTVsG5fNTE6BZZdbnRBH5nooX7NmSJBKkoG5",
  "key34": "5k5TALzM4JYDfymRegAKQom6QnJ992NPBvnbARumjjaqAdWxa3wcToQ6L5FrYcVK1sZavGVPYLWCyGW8eoAo1wAe",
  "key35": "43pF51twL1QWGgj2hZb58n1ibgzWjEKRRcCJjA4ZwUuFpvkvx2uTieogvwRAdH9zFEUSVmv7kDtWoVG6iwp4BLSW",
  "key36": "4K26RVU3U8rjmcaiA8xSSf1SWLDpjm7VnStVk59K75SEwyS4cJ8bggi6iB6Cr32bGfL9uoS2WK1oowiTPLrVbHJY",
  "key37": "4jWpmQwuYFCyAVGKVdwjc6se7tG8QKehc8izhUtHfiuBJvHr3d7aoftvs5FVGSB2ZVFyRjv4h5JPjgocNM4vW6W9",
  "key38": "UiAYp9ARqubfmXdmxiUQDW7ujF9S67ALEcYobqAAhDcZuJJvsqUMZ81oFfTc949Xm7b6LnWQQyg542BPAznQMBk",
  "key39": "3x8KZhE8pAcTdDeSGjrPUJfQk5Wmw8h7XQDBgv52z1DH7cTMZ8TTtWoaffUK6D42SsKh6TV9oDUj6BnVVYbbrTD4",
  "key40": "3j35wqgcRPFYD9qf8nPrCKFPv5v4tsiQXdudDr4e5MfxhWjGVcM7vcG53KXXtciYw4C89Jri7F6APxYQubqRRChf",
  "key41": "5oTELCvqszygciYCshRis1di8kwK3WaJBKeyShavAJ71s1AAGEvB6BY1nsTbhsmMtHDJi1nrAFQf1W1AJfoaA2gC"
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
