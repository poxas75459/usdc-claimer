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
    "3SK5DDM5nxi3NvNMGiS8VEjfiV6aHCgJ95eq67KazQ8tzTpXwYRSjdgSDj8GgjsDhKQn218bhdE3vuqta3Q1emX3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cLTY2qdPyo7bXysQB75biqercamaNVJj6hLmZqvLj7QQboqCMA6qqy1ndstYj2gVDALmRQRkQLkSDTN71X7byCG",
  "key1": "5g3daZk2jtRcq76D1fEVk7yPUksL2PTETEewrxWJ97bJ5zTkM3LFJQU33cJScR4PcWv7QmwRzpsPYe3hmVMcpz9x",
  "key2": "2FfN5tfSSNC97WH6e6g38kLRmyTSECdAGyLfXBeMLLC22nNqMjjQ8aiYL1GjzaJYM1ukUPE8gk2N2ekTq52xpRPg",
  "key3": "3F9uyHxF4u74FVev9cbXqYNpRk5rmVnYjPV3fvHPs7wdR5uu5M1w3wwQ5H7FrXcVwtrRyUVr25hKGQ1EmPPT2y37",
  "key4": "2Wo45FtY5B2K1yMyUe2tNWtNRMGmJnNQRuKUipNWQgSqRpkTrFhpGmdVCQZjemT61cse12ZbUjBz5b8eDwhWZyEU",
  "key5": "3NJrmSa7iQrdSgehjJwX7HZ1Z2BLEMZWacqbh2odfikGFJ73RSCfeG81xZdXu2jdcokhDoQ4YFHP8LwccKmVGr8v",
  "key6": "5gojv54FFtZkE3n37LjPVVpBhj1ED3iFTnandk8esYKxVGwRVynorgcg7DDknjeUGs99ew7iBwqEqDFgn46cffAN",
  "key7": "4BbzcSMLefcG9FYcerp4t2PvqfaWZNDBy5NHfSrqXGpudDHWGmfQfsdqEYNfEzHCqC4zoonteDUgABoTqRGrtdzv",
  "key8": "qnii1hn7xaWbuaRZDiNVmKsneemi3t8WfD8z9qkJsj3a5fP2z6NCqfGMM7PmPmoBoLNJyeqQsphiBacHGzCV4Ud",
  "key9": "4EvNeux6RG4KUwji6p5raMi1fouXR8yPJy9bdWKFWuuu5sCbAL8qn6a6XoJHakcTwmQnS1cLAoid5RfrCynnYPPW",
  "key10": "5pjHNuiE78VzjvZHMBJdN8HFeU81M8t2NQe3kzuBy5L2yrkpdBvWSMDeifigdrTFZ8Bh1Lw3HattvFExHK3x64F2",
  "key11": "3frTkD2HzEYnw44Y36JgnMUJme5PxurcBEturo8MujQPmKW4vz7ogcBkDprv6h1Tv1FjP4LSPHARmbaiE94z5iQa",
  "key12": "221VGm7LL2bpKuzWrm1iT67cdxqvC4pP7t8PJnujMNrct14ZpNW7KYdpdR8tJqeiusvAxocnwdNXYczG7eEp7Fnq",
  "key13": "3cSdBzg9eLy3mad4Hhx9nTBCWYKTv5uWeHnsE4QJLmL114PW5hofWyYFPBHKZFw8b2g6VNvVzjde8dH9L6SbnFcM",
  "key14": "22xgyrzRTbJydw8HXbHH8oRekYJogSa3a81rYwBpEZ2f6yh2cpF6GEVAZ3a1gBvD99mYQprQTseAkD7mB7GWpjRM",
  "key15": "56nqyoVGCFxXME1C48aZQaNzQepQVVeh4mR6pHvUmVo4gFsFfDN8ktZAukc1uNvMEGJoTrFC2sqt2JdjpsVD6Xgv",
  "key16": "4eKS9c3DRXpLwKJ2k8BSGVhFyKtxw9onvG9fUyBxxUEN688reAHhKwRshVmwDLMSaz4tQa9RB1shYb22PgQNy51y",
  "key17": "5gg1TfWUzqDKwSNd1fN5ohDUuGXD1kpzEd9xJec8YRxgmb5bK41X6P1gT1GnaaxtkEKVmGs9mz1q13FiYzHpmRjn",
  "key18": "oZQP6BrQQsjeQRLLvrLTqsR39W1XMkMJeuyGeApV1UkBvm5et5Su9qk27CEgRWThGS1xowFtbQa2BtK9z93VFQS",
  "key19": "48neL7bWr5rUhFSzqAS6ipWh1CBBcvXTrcTsqqJ6qB3KXmin7NGeqBmcyxZSx3GtQkZjcqfL3gcHyG25dGY6Av3Z",
  "key20": "3YnFCwUPr5UN2cftDDvnYiCsjCMenxwVk6Dr95cgLukXrjBxexW836p1L4ZPWC1ZjP3yNREsh2xPS2N61g7tgKg7",
  "key21": "3t1WccqmhrM7G1vaGaNosC8um26MjTgnP5mqYsHS74kAzpH5R6TYDhZKyBFQsngHzF2sdJBnJjtp9wb5Xbjqvie5",
  "key22": "2i2eVo2fTqTp3V1MDy1epVBgon4mRiK2pE8FSbPA5NeRvQEXhy8Em8jTKjyppakv3jx9C3p3NwvEA7T4QweEbtV5",
  "key23": "5phnZsBT5MxLMuBjSX3znWQQzbHVUY42nhi64QMYMzAJViuQG92mFkpYavfWLBXzjey5AjtfD3UABShChByNgBDB",
  "key24": "4Gz6YTpa2ajYGjJpco2X6Hmz56fYbbCoqxbR9tsrUFZ2baCAfErt3tDhpBHVdT2vmciBC6frZnbtANKHKbAWX6zA",
  "key25": "26M5SbNpBnTC4R3hYioYU3bFFqwc4uUUD4CSFqK4fbKhTfVVtgoNcKGtXkUzH5FfQUEvnB9eR1nngPJLk9aQgWDU",
  "key26": "49Wr7d5ttbiLZj1nuJYoSTFdjuw3zqqfFbDMWJJHSD2LAWZoBtRSUZVyZx7m1gG9S5jBJwVhBfMtuFkBDcMoEudb",
  "key27": "5CVLrB29pPhN57KVjSZ7VtJ1rGfNX7cPebNdS7eweT7dd83vpHYCSo6GYXZmejiAKGAYVrE4ip1hyDJzFYHoihoA",
  "key28": "51ZwQUJK7Hb8iLyExLsWWnQb9MQEDSXfZTkGaGBRZvPfHvr6NFdsP1g2NjF8LjCUCFeKBYmU4n4zEUDq9iQ2CBM",
  "key29": "J34a8a3gAbq5MxePCrsV7gVhmEKZ2gF9gaBbmV3mRFAwNjSNgLHMfrewzhaZobhrwAxhuNGAovjSRUWQ6HyUCC6",
  "key30": "64wV8rsnT6EDna7jRxMWHQa64Eu51jVkvmAQHRehFEyWr52Pg6d1rcLEoW8pkrAxpo8zB5oBDydw1LtRudznDXeb",
  "key31": "2hQiSEWCcbBXCo4yveKzsF5J2ekV7CHYcYn7n7DP1LWnUGRvwNAR58NNpRWawMKRyU2N39ffxtr32tiz8W8qcHKc",
  "key32": "54cVUqTVH53f8BDtfiYYCnFaNWu1ByiS27qR4BBTZfAYTaSHLzdXWa1HR4XdJLqiifHebQUYqamNfnEZ2McpojXQ",
  "key33": "5DREo5Vzg5EN2vXbAb1rjrZjMZQ4mgkGb4PQsucFQZgShy3N5jbytgBkVtUbvPXs9sojin3dhGWrKe4ojUyfaJHm",
  "key34": "3yEMUc7G43CND481Axj2ktuVhxC4Cqhy5m874AuWH2L1i754MFyMjvRpUik9vxXMqTbvnHdm2D6At3LYjPeVJ18k",
  "key35": "43CtdhBMwb9JnrJSgeX2gveohZpDS4wVojfREQSPyW7pcRSESPnHnP9VCviLqaJn1RgSh3Kx6AyJYdtQ4hLnRCKu",
  "key36": "2zUwwCsYn7A5XXDVUngY1HNW5qH4VVznjuNDJxXEzcQaaXQVLDMEwJ4ECuispMtBXRenbYAaBM1WrkLyQx3eQNaV",
  "key37": "396p6Dk33NjnqqCwoajdJ84J5RJ6QmE3xtmQjHJEhZPyEFdxiik2s454wG5B63oo8URYw9PzaP1QQMfHXY2UjVT3"
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
