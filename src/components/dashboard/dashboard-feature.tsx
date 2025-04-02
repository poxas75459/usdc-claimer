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
    "b73BU6TA6dU3Fda4Ufxu7w2THrBZhZogwfkJzFdJR2toWxxn2uCzyNM1EGayHBPmPTNcjVzF2EBGZqAXCqQJCXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37ruFj8rrvWy1GqVU5nfGMgQ9FsBUtHTQXVHKUXNAMVKTyyqeDy9waCSTyNcESVcp9aiUUiauMqCEmyoECYtc8xP",
  "key1": "Xo6op5oUSZSjDjLtP9Cx7X9W3k14Z8hrZoU36NmkAxExKeScyzbSKZ76ua2YCAFqKqu5mtKWA4hQgkiMGgN68FK",
  "key2": "3RrdSDnwKXWpQjyL4Y2avQ5BY5zEJVXvK8YUFHUiPridF6VzXqHjowd3romRBZBbntJfJrxsjHGBE9MXtMf4s3ZU",
  "key3": "4iJaRF5UqJYTE1VwoFgueUeet4jhZqq1PMjRwTkAYFFwNVaWbeArmeEZL3wQ7jNp6ehmEcVSirQkvkK9T9PLMKj",
  "key4": "3166J1xQURocs3L8TpdoqhF11bWAWqUnU1cLh2FPj5F93ARUsH9HUGja2TwFexqsNMmkjNX7cA4nHzTnHR5zF8X6",
  "key5": "4vwLM64MjHVc9uVbtgaKU3yDbcm7tHDVCnU9JjEAzKHSejgdnUGRqkG839QA8atAr51cgP2KQeBwMpFpHz3ffAmk",
  "key6": "4FnbtzKuiRm9t8QW8haPehriJCQ1NaSMGHTMruT5cnV2f8DNDYhLqgaoZYe2iATNochNNCGXrtdJKSjk6h5r6A7U",
  "key7": "284UZRRRmSsMAUV3VGZ7NAkxELXijYTLN1p3rLVDrwCz4pguwBv58PTyYB2DLTAzdoQ8iK8vJjmnCCnZHWmX7J7U",
  "key8": "32DdRp1fuzpu88pyCvZwKPeQDpyhQMFXccv4Z6hifiBdmrFehezDruJz9b4fiLvyaHDaCZaYzMRSrrBMLDnHh7Mg",
  "key9": "3ZicoHpgWtp6Tv6hYxtg6vwNVEBuvWt5dJ8aDu5VpMNbH3YXgAncZurYFGLFfv5Fao9HjKD3VxzLhfVtXQtdrgYB",
  "key10": "4QCqwYMQmDTwix8SegZik2NuAc5Jx4fvQnpuszaBaK12L3wmYSvTbPg7DDCNNZoyMMLku5nKmQvhzPRc8zbEgqAg",
  "key11": "3uQy8Rs6xpFpdfeZhQjK1gPiWNCR7QS7xfZ8mquVWS3VgYoFesHtko7iW3f2CFhik7saENt8qRmoj1PzyLjpFYw8",
  "key12": "5brqWFs2nBxc5pE2dqLKTsLVe3FK4UJe2N6ge6hDwzxCAcquRQzmoQa3jbXytpokEnhD64fgzKBmiAwhJENAbTXi",
  "key13": "2WjWKCjfJdAwuudpYTPTQVHCAFx8CkKDCrU4mP9sKxuJBiJnjAQ6ZpTafCbKpFXNdgZSZNXqLVVSDz6cvtsT6H2o",
  "key14": "634rUXxagvVw6zLRkzAUmFnVtAL7bkjuhzSFqRaWpRb5dKgW7HVXdLPC8mh7D8S9P4bwHigrq1vmn6fLfL3ErfNR",
  "key15": "21GeMmmmHG5WjWuiy47cMBUrtdBS1fST6DsjD2VNfEexPHc5iPP9gYvbyXmVjkJG5uJeGMRUrGonzPhbD9w3jwCb",
  "key16": "37cjsxLnDsPFnCrP4gByaVK8FbGTqMjDk1L8X9o99mHhtztRQcwfkFSnfWN2b4akwEu1GG4UKymowgzfFH9xYRsF",
  "key17": "2Qx9PpAv4bLuyiDT7rZxy6aCaLQeV9o7BpNncK6u7YJFFAUBnueDfUBuypgyLnSkEKNQR8NuhQedUDAHiFsHTvdY",
  "key18": "xpECvwjwV9YaVo3RhbzQvRxjMSsJ5admqqmBSBPXdzzHK6sic8SkZDqctR8ocJsry8QeE4fYxd4Kup88hKYnKYU",
  "key19": "5GGmXDBvR3reXP3Y34uiX92Gih1R8i7S3UDDLYv4aXzrEXcKwPoTTS9LocZuw4uo821v6Qc2m9YviLq8BkLPwX4t",
  "key20": "3MEHME8ZRuPmad2sDor4RvfAe2VYgEvAmz7c5PjBtEpy6KV8qVsLUEummW7cqAgRc9tcwMR4vWHviPr3TpyPXvjM",
  "key21": "5oE7aMb6UiGHQbH1GQd2ShW6MoWscfJX1qvjDckkZ83r7yCKRVgkkdTjGkFvgNX2T9JJLgVTKANxdbZF7usdFAK1",
  "key22": "RuqrwBK6SMH48suGBBJSjT27nKfLfRwDozkY91gjtmuCyBoN71PQDsRj4jU4nzCrYidvrHpu5BShkUKxuU6dFJ5",
  "key23": "2P8tTLNxsAExVKfz2tCTvmTa85aNRSPqjXzSKSy6S6NBL9R96dWaFzF3MqEFfxFeVodwxusVSKKc5mLrZNJZASuq",
  "key24": "5coE8a3rddJz8TjoJQMsuskoPKAzEygFQpvmJB7uiPMPGXJGwAiu3AcZmv4vtTMfCdGtUcVVCF2K1wY53BcGqEc1",
  "key25": "5RoweYWuysLNTWPaV8tix6L9vAguoBrjScigyLmBrS2hHeEuKfKaQNu8K6pS3Q4bo7zE2ExhNjg9PqjweQCC7WSB",
  "key26": "5D6hKAETdMmVAPqM3UgRP9e8dXy859pap62K7eS59RLKiKHkJwPhft4xV9t4pyQcydirjfjWxmHttatuFvswF9mn",
  "key27": "5Kn4sij55J65zFqGnJf12LJDJxQQuKNff9zh5kRasMGaAKfkWZcxfVa9L8G6iLrMqjprayGHkbrqvrjQ5SvmcqNF",
  "key28": "4cmyzD7btmffQ6Vq43JqU7yGWih3PcJp7TMXm8BXZWS59RosNHjuwbpymtuQp6kFzyBxpV2hfbSUnAi1hJeDKrTW",
  "key29": "7jjKBF7KzQhUyui4RNEoyJs49JVtmAd4ELHoozjajAzh5Hxpy7ogP7Af9ZyjUXiLyuEDW1GncT64UCLpWKkWNBu",
  "key30": "zYv3vG7AbXyfkvcu2grfbaXavnKRnm2DhAnRU4iV1G2nR7XbeYShA6PdCjaAtjdPe8CbTENK8raQcYvkpdVdvkv"
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
