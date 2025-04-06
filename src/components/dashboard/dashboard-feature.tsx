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
    "rrj1SiSRYpZoDGmTNt5cf6nejpVfKgyyzbcVisskZvh6TFvSXnSemg7zSABnPbyrLDgGv2RA1aQQ2UCfu6pd3sE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SJCsSTP3YvJRzS4AbguWsgKV6Ejo8tq5xn5BvkPJNQZ8GBrWWUsvosUupot2MDvN7HwqdVHxZL8rHZyrutmSryC",
  "key1": "ABcpiBUpQRdW1M7oHj4eKybhNWi6Uu79bcEE8RmmP9JXzmgXhctu6sWCzLDuCSi4pKcVXxHpukREMxjrmrukEUB",
  "key2": "MNo5qHsgwJDBstPMxrtFCLabNG7fmUKvqeNCNXDgy2cqq2i1uoXRQ9QqDFisJqfDnDsDFgtmX1CTyfDHjCKWAYP",
  "key3": "HbQY5ArXsnkSHr9yJwE2z7ekxTvr3cKpMAZBuQofvw5fMKfTvqvSwR3e1HvyoYSbayC4kXb2cSD9h51mMdQVw3W",
  "key4": "4hCafBFyZFMY6Y3VpKQzD621DBiRBbQ2a61MX44euqxTsnhrd9ma7xDpRQ6Qcf9Y5XBZQWJLQe31s3RNhBnC4HZ1",
  "key5": "4dbTNGgfhMaujF4Xh6xLBjoMMFnzZGFMLr4hdAxNffWXhaxZuD8Usmi2bZU68T38GALTRrXCagzyv2LnZxXzCoij",
  "key6": "3LRAH1mU2egauvoWmvszbAENNWwPgCbdJdsBF4kZyJ4Bqmw3d89Xs21vmfBCebFjwYHfj2KUwsgHGrV2HbveQGgU",
  "key7": "4V5URhF34cYckgDDZ7gzmRPtPaRJE6z7wkCq7z3hdpkyAgMHy2s3vCwB7UDPqepKkBxHR356m8SQerJXGN36ch39",
  "key8": "4NwAsXMbU2jbeLwp98guJbkMAviMfQ1CLMwVDwHHbWNfeJNcTWXTSyN4hjvkUL1TpxnTtT3oeqaeE4cCfeLX5Et6",
  "key9": "5h7g5HUXjWaAA2ToVp4uHayXVKoEKjXijVR1RWTeBexL4R7hfRF63FE48AK34oFom1Yap7V68oF7MpBzqBfSNKwF",
  "key10": "NyQRV2M2LJeo3je5uoqvRLrJ6uJRKYdPu3vvxHK7XH2oKFnWPixLa2W9gwgRkLurKn6BCpJjsp6be4TT8UHqBT3",
  "key11": "48EgKzTd4nthGBeb4qENGGgqHNEz2ceMCNpoqEaxTugjmAtunaRpS8ncia4QkVSGCVh72wYX4UQiEKeCFEHeqqTh",
  "key12": "gwWqVH8L2Hi2H2gCAuWoYiQiJz7dEzKfUJ8zjsKrKQxceK7j1Q5W3S5c5DepLpLvgvpaQ9ra12YCMVg2Gn21aJF",
  "key13": "35rdBr5MoWMj57sP4zyEmbRcqBAgRL3yKtt95qjXdqLijjFmCi755s7KEKRiaUac41eAfPyMScWqepxqfzkG716Z",
  "key14": "3gCe6eMT9ad27VMZFdEHb5epJguc6VJHr5Edur4guXH4PFr3KByeLaXFuenJR3itVBpdrxL3ZVrmYY3Xfan8Kgg5",
  "key15": "rDrZoQnQBLzyguk44dYcHsXWEzJ49XJjXKecZWyZFDngN3Q5W4zVPcv5bVFdUYng828jQChufCQBKKCkR8w8CbE",
  "key16": "3wMUqzFJGG2rHmVqhZncv39QtNCrzxiCUxzLAo9WJCvKBpXxJULRdKxXtokDYznoF41GYgkARKi9M565FAJKicA7",
  "key17": "34uGkyq7YwJu6PmaWLcCQDuathfVvUfDya46cdwHhyMoXieGiyou5SRrTKeG1sym7X8CbU5aghn5gwrBEX62xS9x",
  "key18": "3sVHtMgEhXgtC1UPKCCy1sLftJb6xZqei7bEjJS9tnGy5L3iuMfFoZwAF3cGy271ATRSSuwkWSTRuSGb9tYAdpFk",
  "key19": "33oBBiuMhV1c7rq4sAB8FokSnDdVMrgEjk5x94QfiHtatCYGouBEvjLoHbHkv7zdBT46JJ7RVAddZX8AWT8E3Fpc",
  "key20": "36UsvutbHVAqRV7ATHcbm7Fh9zC41aGgPvf7c3Q1ZHRKFMevbdSXpqRVeuMHdsofqAAFovxgPXrdFsPHGw3aea1k",
  "key21": "2vN7TbavakWaTikZnT44NaujQhvKc5xbeGKYobi7ntm2KoUj8bypZ9F3dEAYKvPVjrwAqgMZEMXaSPL6faZj5sbD",
  "key22": "3ACUfCitWTSpuzdUuL1H76r4geGTnS1745uMS23rHTcB96mQZGTSbB7jUZRT4XBMa7LMGzhAigHUmtmDpxrnq9yY",
  "key23": "5xy4JUGdVHjjd9KaHQ85qay6miH8bVtn7KiSrZxnvLKQeAzkwHwCSWQewo5o7SaMgjrrQNeFHP7fUhFQty9vJT1o",
  "key24": "EA6TVDgN8wQR9ubBxFSeBBeqrNa21nzQBsrQhTiCGWtiAnXtpMYtn3XNTzmzYSwX86FNuqQKa4Dz9P5DZ7xRUaf",
  "key25": "2uxN8Py1ArHtF7G6JedQfcTNt3AksHtL3Pum6htVNH9YuqPYeBnJmSDPD4b4DyY7tGFNCbmbSug28dAHxxGyyhNR",
  "key26": "618gKXuLnzHqKBvXgPFW3JcoxeU1M73xF4QdMvttP1bdv3ZcvdcWikpL9iQneCMjCizREfSEkg2WEgeCcSRWTqa7",
  "key27": "5reJdi6msWoyVziCJeHFcrTR1dXNzG9hMZyS66cE6P9SQEuL81JjhyewiuxWWG2F4FmWn8W5LJ2rw4bvF7CPbmZL",
  "key28": "377UTAo1mvAkYjTzpZ33cuxiFRpTz1XfjCjaQjjPCeSG6G3iWRcu2fBZyY6ZNqsFwHPGAzaTr164PKHZ9EimEnNQ",
  "key29": "5GBfG2VjecTFY72dyvmB2ZvKoWWvBGPqPcir5hCYY4oBK35dMtCUxW7z7dE4PQ59P2ckrutsz3CohiDt8WJzJMvw",
  "key30": "3HYoGDoVPkrYqTm7hsm3YtQbcButZfiaKUgyPD6AfsCtb22yAz9DYvxwCmEWaEi1NEp9auYraiJ2br6uapccjHps",
  "key31": "5bpVL5UgGYPFzD2WenKWesG7mUfu9oKWaboPRVewwbZKnBK8957q1BLB1M8xS7XoH1pEE73Tj6pzCw1aV3MQJMPY",
  "key32": "5648X4YhUZ7mUSrADAjHSF4HBFbjmDHtNcCPi3CsBh8fPCvgzAyTgXk7WhEFBs295avdGuGzxEhkka3rSnHfupiz"
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
