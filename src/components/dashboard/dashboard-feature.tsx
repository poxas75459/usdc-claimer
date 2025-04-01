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
    "2FjtTT1HdMup1m5kHYQZi8Ait7DVCRiCGVXpkDuGChaoB38RfEYs6LBqqtWQ27B4xi62ZpaAtPsfyX9DFRgZ7nJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c2bafhCmMJTSio24CFt7DhSVR9JBCexA74G9Ezvmh9X4mtQ4aBcYFqx2j9aT58oe5HXgRYV5xSfpU4shDeKFSFq",
  "key1": "2aMo1ukQVtNNTAjRPCYmfnNYYB5VwTFY35oQ1GyaF8dqWnG9HybWvHSg2SUcUMGE5z13ekAs8KD5vzhjNjZ2V9iN",
  "key2": "472TxtHWg2dPKPXM29Wu8LweEFyd4k7aie2gc69MjZ2jSdgqLc8CSBvwaXkad7AY9CbizSKscVWbVQFztAEYgee3",
  "key3": "215iZH4ga1zJrQzJ2hR6CRVFpngH6fC2729NusG9JrjvUCzvae3qBgDKukNNKHHLDE9Ni5sEay9UQ4aNefsKVeM6",
  "key4": "62cFkXQnDbYBvLvwveh3BPVpu1Ep2oFDq4UMas4UpnUtUdLNiuMDNX1hgrb9CPcRu1GmxJaQCtmrAdKjtwbrqEdu",
  "key5": "3EjjtGiibCgFpJKXdKvREgSXv7S8zPoFqiyjskWUme5S8XzhJwwirv7q9RLpLTG5tM7duLqGGFh6Gb4jQ7hj9iMo",
  "key6": "5zyr1JjN37iG3h8WtXEkRjwu8SQta5YZtkrPZSsxjN6vHHMFtysY2ofC3ZmLtv9bynVFURx1o7ikkjXWrHbBV7nH",
  "key7": "3SSyJ7GHZ5igFkhcvLdMCsmKHxkEaGQtkHecbpHd9foQWZdji7vPW31dUuU7wkpEHys5JAVRqwbgj8RfHSjxdyhV",
  "key8": "3rZQ7pS9ptqth2w3tCuSB24U5SZG7whU4rKtxekbeyevrsg5ek6wimMj8hj5SYk94HT6wBqGyqXoK2mcg3WtUGH",
  "key9": "5Cht7Aa8kwhyw31RQjxAkfa1EiXRhHpMxYw5rZwr4Hg6USx5EkKsF9sjExex4sNAfV8q2JQrZAaNyrMWUcG86Gwd",
  "key10": "4Rwj39z4XFyJLAifsjDxwHFizjFsGVNdCwpWTcWAaEmD2d6pwcdbUD74hkoC1pgjbFhRfqndCpJtUNqEJEBk11dp",
  "key11": "4pzZotsqccUT4FXs9FWerJtt57rUy6PwMn9E6W8Kf3KGefcYRzY7WdfqhWLDw7VnXPxAWbSnyDAx38BmfXX8wFe",
  "key12": "5sFMU8vtLkqBFFQa8JQvykzEHgjhreqRbjQWSdP9jkfqQdnhDVuyKnvxiL1RsNzVve8DQ1JSj8twhsUuKrgBfzcs",
  "key13": "LPBvKYBCkVHnBsZsZB2FX3s8nxneo1QVPtHnXLi7iXQvD3vtKnY7AQBP4qcqhGqTCAs431QNWoUQxgVQTMgbf5G",
  "key14": "QdQMXumq3nXLrDUmqFdJVTdyyvnVA8qkfAbygmgqxu9W1MvNmzVDCbrcf9QohM5kVzkvdCspPs7VnAENXHr9e5Q",
  "key15": "5Vm9pEvFJRVyJMov5i5KoGhZvdwja93zxFhrn1VUqh5geqW7aFs9F82Dzqm1vNPQNS9ZwsDzmGRdzGYpGiKcVjd1",
  "key16": "15qdC4fAU9CZWbqMvyAnPuxFC7LzdaPq73N5MxRVpxVsVLe2MwWniCWqwzdvGL5zJtRKfuQ3JwBetNBwuPPDovV",
  "key17": "27zmZ3kbeCFabAHokomQJMDswnLPAdSyo4Tt8PGWDUZPVDV8pcTYKviv3Gw744Q3zW4gx6BKfDevnZBU4T7pFaH3",
  "key18": "3TjBHWKpAAZjhPdgTRKzQ1ZbMCTNMgZwxBni1drXJXfbZutEHhZpGzzRk2JHNj7sQgYRUE6iWKXXm1k4vw39AvbL",
  "key19": "4Rb8iutHZuRNbuVUfg3wnhMirz6D25mCh1YLAc3i7LREx7mXnHUCW7V6Y5dhLPPzrRmphZdL8eaEsrwSXEdFYT84",
  "key20": "5aMNGZQrRFARfCYVzJgvWHfr3nxcxRWFvyeVwAnD7vH9y49EeUqZiuGifijHZvmUamPt9gcjEs84MwLdcqyz741m",
  "key21": "2qDve3PsJCiTCLuwcrGUEM8dzCX7S9xgVzH1EL98mLrKvfRagq8Rw3hwjC72p6ur116uW4taZ1aEtAKkixqc5Mde",
  "key22": "5SiPzABJwwpqpysptABCdCZf7DhFCs77yeiFpREnpFoSfG3HvQU151EsucCJ7PeNr777Cdaa1N7GS95D4LdftisF",
  "key23": "4kq42Q1JsBuQMY4DqiDFMakEk2Jkac69SBTA9onwaP1igBRaHsqzkxcmvhM83pszSjpVLcyxeWHexaJn4hDQNKkj",
  "key24": "5MRRu8BeUVn9ms4gVRdW2PbsLtp5YLMgaAPWJWWcw7APX4R3XppPHBDsETGM5z31DRekgi16FVCL5DYG2eNVW6Fo",
  "key25": "5jZcbDvEaxecs8uwJAkWsnsWJDUtnsmbz5Qj1w3cMyf4cy3L5jQz7ZC8VSyzf7umx6n21DWFxKBdMkyaYHaA7SnT",
  "key26": "zrkTNKFAoYgeuAMMvyugnTigJmhv93guCzCLW6KyaPKAcV8YQ9u6w7Dypg4M6fC7HiDoheb8vruvb7XMT1i5QsE",
  "key27": "31EEBCtUEDtmozzScXH3DNVkcW3JJwD371BQijdaidHy6aJxiFEyR1TrRNQNbZrppJ8Dk4cKVRGcRgvmtEduHPaS",
  "key28": "maai6twfM5vgK3f9setLDb2gwKAoc3LEv9wrWBAT6shTf8U3GBzJjPmfCubwmuUEuRViDwH2F9o6nXXrauqbdE6",
  "key29": "2tVL2uYQ6YRFAzLF3YLkZxf2EFiMJ2o9Hy3WijKadrDovWyoyWpZqZ8Wd48JdNDz7duNxzV4DLLLA6yMvLwGzo1W",
  "key30": "3xcfpUYEXK3z5h6KsqFFxFSkxypmE3ndKDFTTd7PMp5mBFhCL1qhptygxtxrmYHRno2jEWAJbTXXPd1KDfRypWN1",
  "key31": "3yZkMQJojZjofmXgpMCZbwf6SaeBndRSCW3p8MeMxGArBm9Bx4DPv71vCXNc5591A3PVAKR84sbAKAdZvQfTfkSA",
  "key32": "1y25rjZkJCUXHjkwqMARcDeaxzn3TX4fu7dS23tJ5tsbV9xiRVKD99KDhxTXsUtEtVSxRYndzbg6gExyd3iK6BE",
  "key33": "2TQbGy4TBXQRUqGXiixe7MgTmUtUnFHupz6g2hSY9QfFx7tW2ouAPmgEasDVz1Bo3mY5s2p3ZhhwXcVzLSJ6xk9N",
  "key34": "44cQsrP13mSH89FqZSy45nTtWQur6SXSH4FiDXLtx2oLet8quu3mAFYvctC7grqgcKfLdYxZo9xhY9PskkctzDUB",
  "key35": "qvaQDfy66XCWHL6KmezaR5N6HnKMFZpG45WGApeHc82WmR8hhEg32RnWcE6oaAet2ouY2eEzSKDeEWc84czcCmp"
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
