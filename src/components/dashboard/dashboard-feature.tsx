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
    "nr1uxE6rJR8X3F4o4CdLTRXecAdKhfovvPTr8MJw5mrgDGH5ppQ3jpkiTbcdbsx5oRcVVaMV3qqvvzyoLisHN4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sg8X9gbPScvvdo9LCympYdTUCpbY2xNtEuEuTU2XTU1M7krxpcMMfyJuDZVQQTQc9QWyCYUEyzFNTKRX6emj3Tv",
  "key1": "3JyhSUksHWshyCzDfyTr5cvjGLW3Fo3yZ7EcqoRxH8suULpAkQ2Te867ugzm9c6M8avopeku42pvFfxoMas75z19",
  "key2": "37ezg9RKjTtqqHhwzbsFc5JjD268WEMAsbiEhYTsB7ppBvLAAF5taZ8aESdVWGKgjugrXEV1noFc177usTYSV4tW",
  "key3": "5uGkPuLuCZ6rnD87rfDz6c43MXYLeeJi6cy2DZs96n9qYzDd2MHxcfbhPnqwkK9YPrLe9peMGrD1BP4skARwyXbH",
  "key4": "5N4PWH6yc3ZHqQCTFBw2x1CmfEMuqypvUMiXPxCKpKwTE2bgifWe7kw2DbYTqfutncpPq6QVTQfYQyXq2gQbPera",
  "key5": "2g6uwFWvzP98YHDLA4KDLEjz7RY9uy7YZB2CQG6suxqHYqyvE5DQDXSkZdcBF4ydaMqWPkaYVGwsjxhKcBVFBVZd",
  "key6": "4LDN61XU3g8yrNiiSC238Ud9DybnAvuC2WxDmsRamUGLLSY1jZXrMbX5vLsqHgLbseXj3vrDin24gYtGViUBBAAP",
  "key7": "3NjWjtPwyyRk3ztf66atmWFJ2hx8b4Z8DSHx17KCVq8xAdVqbtfFFjAts6rp189SU958wniChdJXttfkGjJkHhsp",
  "key8": "4doinsq8Q4zUgTP56675A3gkZD21w7PqstJpgcU34EKWZScc8d9CKdpx7YvXXqcVxeBwEX8D5NtBQPiwdxckEkTc",
  "key9": "2Wf2eWig5jb6tCyfheGrg6n5oNhGCiJuLbdiT8F3v5JX5r7a3bBnvS2mFp2VrQ26B985sSZWRbhiMb2RtZihZh3e",
  "key10": "62JfobB36HvoGXqyctwXpXWxoMATfwEaRYkvXFAa4PdgE6JKXHrGbx9CuzcU1J6BVVLRijb9GNrJ347avKnB5dux",
  "key11": "pC3ErZSj34uQh19YJfJn6GrFiAzme7T8UYWVykh295YW8AN7HUgrKjutDZCNzKHrPZu1c8UEx98C8kwS4NEYW4s",
  "key12": "2SuwM7jng6qMVbmwN1xWPLfvLvQEsZC9GNtPUBkJSLMY65NezkKYJ1bhwr63Ru7yZZB3BqSfnV4siardyzuZ9i1p",
  "key13": "3kcNWXiUFWFnKNgqLqfRTHLs4oaNymzACb6E6bp3X8hyguGniwdsMEB7yxn3fpZpho4HQbFnWTvieWJPs5E7kf39",
  "key14": "5gdyY87UrgMuuTVSD3wYk4ezpGo6RfFCXWDSAN3Na3pdm2Dvp3s9xRist1JkPQkHhKfpBemSpZqWYYnARYkEdVJB",
  "key15": "4uFb4oH9ocjys6hhff2uHpZpLeC1EfGi3ca4kXuRiKFNNpQgocCqBunaqznhYMZyw9maP8uKkwzQWPj5TRS8WZHa",
  "key16": "3UghY4FwZo2Aai8Zo1L7tXvChVoE6LSmzHTUqFKypFfGoQwCWkY84EPuzhpENc8xuN9HGJXjhEGbrKqaubygR5y",
  "key17": "3xrnfWxUSWkvmLXkc9gEQN6PuUJN9usNqGWSgX53FhEqUwDSE7zBLPGhdNn5vvx8AHzrHo8rWvuPoSmvYGXCV8Fx",
  "key18": "5aEnKDzxuHhGQMtdnQP9tiSuBGXkADfou6vuwx6rxjXfTcEBHfqE48tJG75CZY8JXeykbsxgjV61EQJGh3KVwCxw",
  "key19": "31eq4cVHiCE39MXsyFZS7Msjgei5iKhKGxiF95JJQfu6n5M8YFGGZCvjuH9wWVZr28Bbk7ydHV1u1NFEwPGrKCn1",
  "key20": "4pCHEca73YpUqHUSXFcRrkSd7z12nXJT6nAM1DbwpaeazbkL7ErgpQaDjsECSJhfRcGJPDikMubk7Vu2TSpj4UuN",
  "key21": "5sMo6fgFbJcZVASbsDNNjiHfuFA5xrr59R4CW2dKNZQvTuKW3sh4dahDNQszXXNd1KbUb7VwK2rfTuwwsJRPnbYr",
  "key22": "LXTdUk32Q1CUZUqniCe1EGuLqaJDQ8ZVGdwZ4EE7MP2EbFDYAmfnSWCNGYrQAuEUQ5d91LbUmxwVfmAdZx8op4y",
  "key23": "3L9AgW6KNVQZAL2DrFzhd8oAi8n6T7oWW4LqPrHMoq1EXcJdGb5hQtgE4rN9bmhE2TEFBNcoVANWgihgvk4nmzDY",
  "key24": "4eEqtKc1NjA1cVMwfbZTV7q56bp4id7toTMW3jG6pao4UQFoQjGFrF6iz3TdGav4nQxGUcWn58ZVYfSaYQxC2ws7",
  "key25": "22vFdgEDWnWKrGpLCUe5zAYjK2Cv5urMKbWi7mK1AQiU25ZdTHGsDgDbJDfLTpqqkxQN8RtdL595sisxHqaHkV8F",
  "key26": "5Cz2r4gn1Czca3fj3sUe7bFMKj7BB5z8GHmStbyDFEkyK68oa9tcc2q7KanAPtMT3PdunobGxqovKffyp7UXcBok",
  "key27": "45VCFVsoXMqL6PnyQh2S8pX1MhG9jtVao2uRxa5948YqT7AyG5iJGGuf5TiuBDL6ycJiQD2oZzeqXmQKsjom7xAF",
  "key28": "26d6vjv6Cd23vSZDhVvG3qZMXWVfosq9F35x4r2xAmezNM9BtQ5w3CFbfkqPMNeCZYxDZHc2ZrtiqLNXdRBztpBr"
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
