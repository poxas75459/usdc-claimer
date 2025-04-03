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
    "3ERDYkcSZyovTM6EsqHXkYAgMvex56Qvpw5XuiERTrmtKKBQi8QhEazuv5grXboTt6vfQ1uc2FEWJcQsaqWgzESj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HBU9kShMc8D9Nxmy5mPwuAzL6x7WoriuRJXtZuXW9DdBubcRzF7znxVBc9cHBhRku7qBH6bwj51vhgEbXpKditU",
  "key1": "27BQNfYthtyVoXz2uL8GPxZTRryPPp8pNxFq6DCWmYjTiPKbydNPMnVxuW6Lva94GKY5qTwe1S9dBSo3JfkAj2H6",
  "key2": "3CQMbgE3sJD9oHd8AjuYkdFyLFRcnKE16pKVmMEvnjMgM4Q8iDrTqv7nK48EMG53TzqixWhvrRNsoTcQgq7opgpC",
  "key3": "4HJEvDHaDJqngMW1NKPvVFWBVxJPXvEs61rcacL79hroU5BXBdbfeogEBCSAZZQLZkugqeEMqwd4XsQNWWKb3gEK",
  "key4": "4vMcCBySzkMXsKkKyaGEZocKNc45RnyPQmrdcqcYJzCTtNXL4TPgxdGYHaQ87xQsAHaHjQwZZM7KxN8zN75qrMqD",
  "key5": "3ki3yaQyi1D92PLKyXgJKdpMosWx132tVE9VPciUv3nBpMAcHM6Phr4ADFU5daWbtXgGMHuxrACg6mneDZKrZU1Q",
  "key6": "4Ze1yhhWQp43FbhkY3rEF5wduG9CvKK9R7eRrGGXYPAiDoGx98tRfbKk7nqfb1giBMtYxdQk4KMj6x6P32vXGdyq",
  "key7": "55RdSwn5cRRDy7sw9152gnqNMyVnRTASX7Vs7XATDRayiFMM2G9VbUETHQghjMRbU35rZgqiwJJ4ZAHhH754uNag",
  "key8": "PquECxVHboCvRs1xVWvBbRxonhArUR5MyMgFarNbJ2tCYCp21xFxTqu3mfus56aeQYT7jXbJQnWX7PTurwLN8eL",
  "key9": "2yqSPcPSQqc3vi23T7D2t43dF6LuwzUTCw56rEkhP9UoFTmQV3BgjZinym5KfBFDQvnFbXKojsBJzgeXQFJVtrFE",
  "key10": "52W5QSucpyTbeMUDbpZW4XfJoqNWMU7MyfTarSPBCWzFHHr7iFYyosXmddopuxBcF162XaSMrw8aKMkuJgi7YsYg",
  "key11": "4ofUN3fnubKcGDcmMEfr3FD3TXLWYM7zF2LJPcjsoNNC6LvG2N7RBYNcbE1gjGHJCqCpHkPfZMQPaQi8eGuxT33e",
  "key12": "351ELaCtH1R9KVpSs44nMApR17MQDBXzeoNZJapwGgj4HU7ypTkuRHTMcX8mPBF3A9yjYU4pLXNz2cG5okSLZhHH",
  "key13": "5wKWGSt8axNYU8nEPuhFuCjFrN56pPSigWEVXfEqngM3yWgiMusZyS3PmPGqz7mytdaYie56CKUCiEi69Abxb35c",
  "key14": "Tp7nZBhYurSxoVZa5hb5a8XeR212r9zS2aHyTSbVB8ZjSN8vT7ezs8Qzm4fXmBeh3MDCzVswA76ZJpoCd5faoNH",
  "key15": "58XhcyeABerss1QsBKGCCHDfEAvPncVLQALitxnrqUzec7okasL5HX5igpEedXKovMdktZuPDn2opwnFEAFUdi43",
  "key16": "41Rp7QrbYphewN5gQWu3hR9cN1umTiup7ouZtAZ27mT5UnpAfvi44i9zgb3YGWqAs5YTtBywfBY74uqg5oqbEgUM",
  "key17": "43jKovsUWb4Yq4KFreuW218DfvtMwUiY5SeviSW9ZfwTwjvE8fhZyS4ERrXiT5MKPTMqLRBM7QgPNwNwir45NfGP",
  "key18": "3nmcPBEcktzqx6w39Xef8st4EYuQFNSy2JnsWpcusR5eSqLvkaR1UeiWM6o1zci3wuSALYkKbmu9ymvt8crm8EGX",
  "key19": "54NXWBzGSg9hEFRnmTHmLJFX7SbBiqySJ2N656ScNoiUDnZUkXUbbFw4fNtAxWQA3ym5XfhTo3HtaeKxxLdeo42o",
  "key20": "3FGkjgzaJBZhXWi5xfHT3akFE7jJAGoR51rMb6ZNqEEd9oRz92DqJ117r9Z1a5XHKVZcfbsnq2YiGwMmPTF44eHt",
  "key21": "45CSEety5Q4Y3YRMG2KnamKFD3EwcahrW4egD7iuqKjuRd7QuSJdnAHeRhSHC89WjjwF9GjSvb7hh8SeuL8AKyKT",
  "key22": "4sBkVKLVJN64ZYb9VxiPvq4C1NXGpfa8txzorj3fiAuVFDLCMG1RuNqPpikwVbCUqHLYB92UoQgP3cCZwsLQwxD2",
  "key23": "2QmBWt2Ko72PLvXNbUDm62cVUgbf6anBJ2E7XxsB8bxUuCZQcWwXLsACxomksMrmzFZSiWe8yZ65EZX717yHxk52",
  "key24": "2noPZUMTwQNkhHf7H1AYsoo2LhsJHdXJ84repmvL1hgjCatScY7hamzSMuZPKhyJ1LMcdXEwgcs8WjcUzpcANCUS",
  "key25": "YiBcFHceYSq9aCLzohFrW7z4hZvaqA84hbH8AbqVwFLdH1TmSP5xUChEkhUBQMXUp3UWNUrjMkbMboaw6g1Fxc1",
  "key26": "5F7wGSA2vn3jHYhhRxQSnNwEWQqvSPPHMqgZBqFgTjCA1j2RjXvhPvBTX5Uyx3dwhCG3kqP8MRAi8Pgc3q468opt",
  "key27": "45HaTkMuMJRr9cvDYnJDAaPhU54AXpM27eygvz5sGp1fEv659UGHczKXQtAJ1YfbTEyUB8jGhFnPr5qJK4JTTgc7",
  "key28": "L4MXsM4PUQDEm4NkuV2YuChRbRpAzcsBBtLYUCawAbqRGSjEM3mVp3D4aMnGb9zmsqhmUHzxdrbjTGJ3wVzKNGd",
  "key29": "2SKfNsFPqLviSaZ2oSCV7AbQWGLTcz5eVRSRgCY6uPmE2yp4rxumDinscg8fDUMUtNhSZYzXDsvt7o41Ro16M7j2",
  "key30": "fLiTZDXWTWS5YaDt9cJj2PQoqDkKHXWZD9v92xXu24sXVc1N1ngtrPkagtJu3y7fRWcjXGqhtYrejBwjHxHDGs8",
  "key31": "5RnE8d1q3GQfRd1d32hU3HRRUVLdtJiao2egcULc2UeWDgkcyL4z7PDy1aSPiWDZYET8rnCEvyu4gHbNsNwHpSKP"
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
