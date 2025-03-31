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
    "w2SGBkpTgz276oJQDe6AkTxZLL4AWjtjgPigHBuTKnwreH8f18Y9eAk6JhWmYVAVPh8udtVSqdQG6m5b8quHGXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hzzb5kBPEhK5iMvuzMeFdypPAiGevHuWgHtfzEb4SPWmHnwUA8sCyJH4fwmwUpTuF9X83fqmrm2q7Yu7bH4Ej1g",
  "key1": "2zjP22YHfSRbR5tr5aCTMFRCSsp9VuM1v9Xb5eo7y9vqvoiSY8LF38MQCSVvvcHTBscrPBqMMx8nT7kpDSSfVHwX",
  "key2": "3dkTbse2tj8LaTRS2PfoPgPcG2C8YXnj863ShYSNPU3jNSfLSQueBVCXQuuUX7eNynKxUm8Qy6ssS3tzRhmZgVxV",
  "key3": "4A9M1k7cnaMw41bQuz4XCpjBSgybBMqWX9m9A7yRxCPzstRnMdB83YMEMWCCzezzZDuYmKC1AJg7dtziUaHMBM7d",
  "key4": "2yteKyFmiSgy12eWiLttm3Knbq1ZjA317eEVVZFFFkShp57hEuHKpHYGy9FkHX4hqWVNnt99w7JCDXNseJeNgKKW",
  "key5": "3DwbRyyCv5aYg62gpWQZoCQkge91dLKaa7SUYtf8k99Uunr9yNtTfsrFuxPuYYAe6HEbYw7FU9o1RZN7yqnDXR48",
  "key6": "N7HdbkZyQLLCvPyH3Rn8vDWaDWMcruSKuBmttm1Ya25mfT5cq3YeY2o5xxqgEctWdgUU5Vz27RiQkAXRgy1T1m3",
  "key7": "528hcf5QwtBqJ3Sgdi5feLAUbqUPSfUNgnYniJLa1ichnxSyVXm9Q2mfeBGxs9irLkZBMH6N7L1mCXWje6YbC8dW",
  "key8": "3TfSELC6cEHM8twNHkqnVVqR2ze56edvZ2A4YzfN2Y3QndyuCNC6vDyXqdN5KXicectbM5owGFuuTGwzeZe4JwCx",
  "key9": "36xVVV1NA3fr8hgyWwwxWm8aFP8osRgVgf3S9Xi1XokDhYDskcP4itEuByFnw5hn4aBVhdRo6RSgJYceHHDJx9L3",
  "key10": "3ibH4sTtbYusYUi2mxF8QKDuxRzkHk94yW2wAQBbobAt7wchzBvPEuK31T7rKpjFUZXtzMmrwvQQWKDK5JLhCjBN",
  "key11": "5h1RAV3dENRnMiWix4PtXjWv3M6EksRn8trV7ovhGJHKApRyyf3DhpfY8VxNPKgsBNkPLmYdyvJvmRoY4AF891xZ",
  "key12": "3qgNhx5WvByCLQLUb4MxB6gUF6usrMw89UZH7Rp859xxo6xMzsum3CmEh7TPYzo9vypX2odp3Gg54WAZ2PagCJsB",
  "key13": "2EwUj9tBw7Csfe5G3CXkf7KJaCiNBzmHAFeBx4MaRYHKWk7PBS9ZNoQ7cYUYnQCqpKNmfLPyF55aoCWq2bkrwdrV",
  "key14": "2ompS3ba1vfxDvgvpKW7W4isWn1fpuJigVw3ni2ifqc5HoDxUi1gCmnMh3N8nSg2iBV1oUdV9pctp5WGETmdCdcq",
  "key15": "5xWSmpaiNaVLjZkHSckaf3BGJEnc7e7i9dRojfd4bMLmKS4ZzGQTvRxqF3UMHnteZBTZEJkkCkmRYWciRcaBCm9j",
  "key16": "3cLdpmqdrLbpX9x636zjJcrLsyxY9j8uL95Ntq3YjuFk8GWSsUmqx6YnbYECRdeCmmzsErxfiC7NSdWnJ2fJiiHn",
  "key17": "N7gkAbSeJ1w1mGbTXKQ1zcCo3W5PpsvA2MyUPBe2EPFP39Vvpupj1T5KD29cqzrNqUKqac66kq3q7Sb43D8wbq5",
  "key18": "2YYLGBb6YvTKW5GSPss2fQhEHfexgJ8KN4d6LEoA4RWhsiwAr6o6MtsZFnk8QhZoL8shb8Gkzx4jyj6A8PN5Y4cV",
  "key19": "FdAfUwLurW6UznigeEdBu3tmFJ9BSyJ2bd9JFANPaxP1kdzGayQsLXdHhPYYbMipxLmU8cbnxq8eoMyU85aRrsc",
  "key20": "4Wa2HAzVk3xsqVPjPSAeF8d2LVTuTF5Hgt2ZLkfe7JfNRCjjGp9C2y3G7jXC8b2zfYS5V7aHxZEVqZd1Qma2foLK",
  "key21": "398TE2HngTwkygs9AKfSWf2g4hwzLenb9pLiDvmH9RhENaGSDD6fhzQutQJFeStFtEFyBC4CEd8kvQhqesMzBuBB",
  "key22": "3W7vrCWUeiowA6uvFfd7gtmR1Ehpm2KDo5gGw1aJQhWAWYcDLtFZ5VwBvrBMEjqqqF3emTBKdkU69LBc4Jign3UA",
  "key23": "3edqW9TNhq2Hphd6zGHwW5tY657ga4VXsbLggzJVsF5gqaL7oSPs9MxUx5tjxEXX5GrTMP2xJjH8M9dSjNVUChzY",
  "key24": "4r6eGHMnkWcxuu3kNdSb4YBEQjsBP3SefQLn4CEyV3mmnARWQqGYDHMGSLZHWPyiRGsSZmzgSg1y4NLngh9MK9Qi",
  "key25": "58aJNZWxmp4iiJHyYYgM65Bu4trV8oJvVjF7RKbL7fih4kZSjnSEe9qSsThWhvYowd8ZT1VuNk3ftByAq9NG562w",
  "key26": "3KD7XPpdpRWEwimBBHHeHXvB3jZam1Hs5mpL5KLHwFxRXJfu3hGqhPg9jak1E7KMd8Ts7YESorHgHerHKeiDmVsN",
  "key27": "2L7SLw5XPzTdUeuoZCjsG9dsGj9YLkm4KUL6iXkYHyoAgWbVrGyFwd3ZY4Wn7MhLkXLxPLjqnVW5o8SExgChHixU",
  "key28": "3axgXrK3QxAsJEK43pCRYwYLbyq9o5McmgtTumLrFWthnstKCdenWCRkRX3N4PdmLpEGA7iiquvii1WnkhZbEMpk",
  "key29": "2icWK3vQp2um1aGPkzqYzGx4cTWpXyFnNgpCgsNsTpzTigGdWUCXijsZ37NmNuXoNVsyiNNSeS7nC6xzhFSU2ahf",
  "key30": "3ZnXRvFjayLh5v3jBzeaVL6dXhBuP7LF9AtRBkLXnyRPmbSp5u9FEchUvGn3cCR3ACxHtc6KLRndPpn6FVu9XAV8",
  "key31": "5HLcspsybwBoJFBa4Zz5jipnqxVrEqxFkPQhyh35Z8LjutdiBb19gdesEoW6USu88W6hJQWDNWfBDbsJGi44juUR",
  "key32": "3QUb3nnMTZfysyAX6bw7zR3vZtSX8H1tWP2ktXLodtCezZGaogxwQz4DDDadFd6Me5gBX73DAVfw9Lw7jjMrWKft",
  "key33": "5gQA6tpucaFCYf9QoaF5N68SfPAvYcE4L2TTMHHpughLWSPEsB71x8JMfxXkHQcQ1Pt5X3V3WAVmC2xpWsbaWGKr",
  "key34": "5rEjqJWmqKsXX3pvypvijzfWn4YmzNzEqkLeoDFkfZtRZuYo9wybM7GSgSvZavypG2UffEKFmFwcchmfwejeT4GA",
  "key35": "SPh1Gvc4vpEJrejmQX8e245XEhBhKiotf2H8x5dHgzQYVE5yLB7tRL3rYfUehz8JQJ94LKH8r2zGBY9uHe7xpCU",
  "key36": "EKbUUKJG9qFJBj3ZvAwogEntsRfgqWdhs3hjpKevfSVfwMgmsoTe113ASZS8GLnNZ5dd1q7iQUBDeajBav485KT",
  "key37": "2vTpkSXDfRjM6vU7QHPE4ZDkMcAbpu7MkCmAJYd8emRG74fQKznRPe1qTfGCbrqk2dS2zkt98qphzwFiXagNz5vy"
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
