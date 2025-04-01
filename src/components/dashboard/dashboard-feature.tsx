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
    "4mgdAaWWybmpKvwDsrxS9pxY63JpYkGgaskp7xDqS1WncgSxyWHBZfmmuDAvA68xUi1ne8ZnXa7qcPSeg3YDgS9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22hhEmqB7kZzUNj3eDsVLstdBFArB84mtNmC4kJuGwRJSQJC2RzPpBCBinSpdRozjnPg8aTso6Ut3TDZhZQ3d4d2",
  "key1": "3Ji2Av5rpacJEbQK916U5FekyrSziDfYEmZbDnddDNchccmt3z77GQ94cv7VBq792QisZSrBkfjqNq3N25rjwvLp",
  "key2": "MwFQNUFrftfGSMuW9aEEEZMwFDiGka1893nQBDfGzVf9wGmAUkyK3W9pd4awLJjRutb87T1smVQmxsRqsLP4m3L",
  "key3": "4uyxcnuS2GFd69ND12EPRzw8tSRC1GhwjBX5YFkeBYsCiLfaYJBsyzn1ST72MJALd7fjBLU4A6NvuvXr2pYx9acS",
  "key4": "2MDGCfkUkrNVxRCkZ7FCq7N6VNXUW277yCxAhJA7c1uyTmcGYM1bMm2SRJGNg6xSjXxfUAbbL6x3YxNG3bxsfh6S",
  "key5": "3QD6DxGMcEhE4tyGxbGW6HvusF6E2cJhMp3xnDVMJhe4ygqEdPngDFwAoqyYNNZ8iBS9wbACBdxvgyNwkYPBUedr",
  "key6": "2mGXfEvMjFzjp3nU7LguzBA1Nsdw9dEFtgFNMv1RcEYnd3PVvk4JXG6WyeTwbM3p4JdYf4MTmPBE2gBZpZdZqJf",
  "key7": "259qHgAt1o8q6tPyHLMnh4Kcw4Nnw4DPVY7BwpvxLwmJgf7S55TbWT9hV3Ci9GCbv8m95DqBvQDzgpsnqUQf1FnE",
  "key8": "5m3KjjK8gfP4sbffQ3SzvhqwEkjdtY4Y4kmzwKU4B4hixTceagxtnVku8tXKF1vvGFru2oTqjxoL9LBEgo2mpAv8",
  "key9": "2WPiY3uVeaF8jhhHrjmccmuTBWubc9b22GHEqQWfR2byMf8tw8nmMV7FexTvYJSW8VtxjethdjTLu1oDiyjYQUCT",
  "key10": "5uN847VcbAFtUHETXafTEHwjpRCBJg9ty22tJXnVK6QxxWMsoR8Z9JSc3EALjccBMz11tvvocoNorqSRVFp2dyNb",
  "key11": "4p5fpnyNfivmoLeZve7mbywg9spHq8Mryem9Q38vz1ejzTQqNNQvjiHvNG2mVAHqaXnkScg9GfLyBZsHShjZhqUu",
  "key12": "2dX91HtLXhMw9MbKyBd5Lu7wLMu9XbXcYw7rRuQJtZA3FZu53RTnVk3LULcNLnf2ngXVgVLXfJ8WPsydGjTFb1KJ",
  "key13": "ki1tTpvppE2X8m2kfB8yqsf5CQ8Bveso1wxVXV21mN8LqMkSQnJjsBFiGYjks2p5NJkVZroXQ3ymfBvaY7usrH7",
  "key14": "2reL6GnnXxtCanSzZwSiM7rBr3HNuNs6J1WcDXm16rQsS1RmLjJfXVtpNpLfNvFWCNPHpA541uHETcXYNcGWdN5z",
  "key15": "5RNNNw8Z6sD63LTaC79xecvsSUyEh3VbEGTvM5jywvqMiCSuR7hwFvnDV8H3K4mrMDJZCp573LhKPmhCEu7KEmM2",
  "key16": "3NWLCtbJkwCdfnvc1cJC9zy83k8miJZsuB53jkUsWEASkdz86Tjcyw9DcQ2deqL2xkURiJe2qWDTGt1teQT9jXZZ",
  "key17": "3biSqkBPA2KEb13iwzrG6BoM5jVG363sz8t3BZwSLeoQHrDV49J1d7kLd1Foo7Fp7Rgg7xPX8L6ZHKVLmzXAg79a",
  "key18": "3pKR6TAxj6PnjZ8qjEZv6zVVE6KYjvRkdcZM6TBC8ivo6Lcyg5myK5qmezfeyDMbrMswftLMa96Ep9uxo69Fbq7D",
  "key19": "2Uxeu8yupDfu4GaQaaA4vidXwxevaoCAw2papfzbUDjZAQWfJa64Y8cVMKGT5KvdTUNPSi6WyG9Bn3UomtMTTcA4",
  "key20": "63eiPnNYuk3XQvAKta5dM3nNKf9GshrNVzgQC78A2tJfT95r88smtCxu9bjEvbMVUm4TDBGea88fAfAoYDst8z5X",
  "key21": "49i1uiQUGcKvvn4n8M5akxxstKedgCBoAyyvctVdCMDnJgLyWizdFhoq2gYSqyPcwemz5kgCK942fNtQ99pLc6id",
  "key22": "3Lonn2Arsm9mqN6e38hM5uWBKrwimr7dnJD6cHu5fbtWBEh6kq2mbfXsvoETemPKd7VtzGwsmAkSELJzX2qtFMDv",
  "key23": "5cCMZCXqUbbi9FSbZbwnfA62MMZbgrPKAS2mKjZJ25X6potvV596z67N2rotrJzGAMT7nTsY6o2GK4JHTF8rNHEP",
  "key24": "4XY51DpzyVihQuCHUiNEyo9PH8R62w1DCTapYRQW1rVMgWxNFhLcLwn3TbgJiXPUxqhbz2ERBs3KJmMxo7maiZV6",
  "key25": "5gMRzqLnjgkJb2wJhqrNzyv8JEXa2sWAUwrRxMEzq1rom3jTrutFqno8zmocWLNJRewmi2hwqmnYd8ZzJh3TtHpm"
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
