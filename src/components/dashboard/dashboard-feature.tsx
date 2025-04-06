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
    "3DxR6mVkKxtPyTsTP8iX2FtBnuo7Q3AsLKbtB5RogsEtwHncDT8kBupGm2fMcazdNmqtgcHNMM7kpcySHKCBHMjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qG7s6AzJAFNjwYQYP4Ecp7pBKnzf31DGLJp45ThaueWYy1GHhs3bSqd88wwC9zG2e4xUM5T47T3Q7Kf6NVtGMG1",
  "key1": "2bQD4d8NmyadiPa6x7z5553uvxLLt87d663EuxYyMcF9XNXtPC36289pYKzukAyXv1aBCtFuUb5aecEGk6WEBnHv",
  "key2": "4hq7VSdUkiBJ4esR2J7EN6aQQkZA4aZupa61qg4fCZaE5x2ikqj2T4QdFS7dAAHZ19wuEFp8SkKzaxkaSku8WUGh",
  "key3": "3iZBYSRtLdFEH7pmDxJehysuP9tn99NjXikUi1rFyCJZxhRC6kvCUXShz6XeQR4NkRBsbW3AQVfwf9AcU4fWYDnt",
  "key4": "2xd1NDsP5oTgFcgqGboiLhiEw4iAqV6kkSCKWgYEVDwJbeLUmLa8dSE8kDcSsqks76NjR8ugdMNqEbCNmeSZEDHY",
  "key5": "4WMtYx79aiKbQmoTG3XF8Xx9HbPzqCnfDePhJQQG6BkkVrnJaKvkDU25DaRvK3QLEKwN5mD4JnUmPB2AGTun5npM",
  "key6": "2AEAwdXLs2B8gt98bcYZX3yTAcbWHP8bAwXY88Po3s54fZnhN4tFb3uAx9m6h5eiaQKxYT9Vo9Q8UnmCBKVAwc1g",
  "key7": "3VA3KgShiafi5cxerzCgFAvcUueDmnD8iFAknxPVFyWQWYKSEgHaBaRaJmeUta73HBQ8yqHVMyqmnykpzaPEaNFo",
  "key8": "RLM7k7ft6kC1xV9CoXGSxEVeEE3dn7SqfTe8JHHbvAYdU8JwT4egeFCdpv3kJyAgCc4pLAAcBtki4ufpEDL4M6K",
  "key9": "42NYJmzu4ZsNpC8aQM7BtijT55d3QSZbjtzf7mxs4Jw8g3fxYg6JbPyHd5DVr6QoyVudEqLRPmLzDJihEpZd26fL",
  "key10": "3V6Kyq7wQT11cSeRawF7PtJXhhUFD7EjKbHPZUNshYRvMmGaEANfBqCjj4SX8Np9Y6AsEd6gc7cnQLJr8Ne4hcQr",
  "key11": "2FDUgQHQVzXve2xk9NbZEZGV2XdCtadRZeGV1BK8HbMykY552MLjMdBCLzuPQ18M8auZpChhKgrviLrXoRUcYq8U",
  "key12": "65SyvEHooGFyTcHhaxFuh47fDeKjHS2HTN1juUkK1FLo8ZXW8vh2LTwPCk5bwRqWDrKKdT6gaYA238NeBY5Vs5Dk",
  "key13": "CaN4MuXaVuVVjmjJj5g1cCnQPVJzg8Yc6LtJtGmoA3eZLEYgkuYiB6m5TMJ9qMzNuDwZ6y6aaTkx28vMFjiBZ46",
  "key14": "3bzxjqWUtfWy2JxEM77UXupmE4LATgCYhQoFTMxRMYWHwcPTLNmuKkXtx28E6iphxnfZyCR4eCYaCRosj24SdBHp",
  "key15": "2oWjMUY4963cVyhKCD3nPh1SZaVCdTAt3x4QvmjWN5n5wZgxK8b3ibZ8mxJndHCwuUYD31XaZ9i2SEGhjVNo4RJi",
  "key16": "4QPuyCWFD1ipwCPChFnx2saJETg7hgsYeijcPhgcMkW2VB4Teeu2nRE7ZoQLS3QdTkAAmjdp6dc4tQQGFNtJbTDA",
  "key17": "5nAk4wBsV8b6yXZKWgZKtbD4rU7EDQA15ybJtVjGqtq3tfw9XT5cFK3S2hARhVsipVmS1vScxMgzC5o1BqKU6uEX",
  "key18": "2Di5dboNmAmzZFHkYvStGZzRiFvTWN1PdMkNuHymiGqVr1ihGoN4MCQ9uARraqUw6kzGr1RqET93a2TN2AsqVffB",
  "key19": "2PMLPVYVdndmh49skbjaAJXNFvM1DkaY6i4N4yp2pPn3YdwDJAWmRvD7Zqfm8FSgEihJLVZyb6iGwnarS3whi5Xc",
  "key20": "666JqR6qSBgdFBrDCAYqkiVLNuStA6YTaJJMGnb3oYWLrfAxMboE1deQPMbhvRJGKGVjnsczfh6bdpjVqEdZNLqe",
  "key21": "3aj34uC3VkrYnGFSpTMepoXjVU3fSnryuttmy4mUy6F5dXGc22Ctaa4bZLSvBnhsbi6wciW6huE3uqzgLEByMqHZ",
  "key22": "3y44rML1qAZcyM9cTWGKkS647Ywnj1L6ctc6nydkBKvhshhox38cRS7wPYG5VC4EvnTFDnz5JipGQuvYKSpFk9s",
  "key23": "2w7BFhrkmfa8uE17b46fiJ6Lu1G5QmVnPCs9Lb1KvzCD6VGsG5pGryXvw9egZPFpJRErV74G3wgXtmwiCDmSkZ8c",
  "key24": "2spaC7azrJAjbQbQZm2MdHmPz9tGgMFXXyxrX5McXWXXy2bais1izHYYkmDxC2xAcxfTt7HC3ZpovC5uohdhW2Ci",
  "key25": "676Jq7QpsahDiZvzASa8HpkK4u5ZKu148LWzjvDXzWBygqDMaWo4mHFGDsvysz16aHUZat4xfksQfHnbZAuCKDCT",
  "key26": "c4qE6nh7pot3e5i5Rp9r2rftCDPkCQDez4Hb1yu28v4rFkcLCNrSvx2NvzFEfcqjpWFKkMT2KMkFHzLY7MuGJvZ",
  "key27": "2xrGWH2GJVjnWZgrtK1ZaGfTPneTdWh8ihNfVvQCx52rj5497Tf85Pud1kEjtffUox9TqJG4TuuzbwswFkQz7yeW",
  "key28": "LtkRgwpEMDdRzButr8TcB35BipVXZB4n36JaP9ob4NiaYUyXjc7fqBRVLxk9QZPtpATT3HbJpSmoqr45AmUeXWE",
  "key29": "3hb6zAJe9aRt644wBSwee16Ai5652U1ja2BLA7kieZVuiv5woP75k15qyfef3w8Dd8DRFxv7NWfMTMGsFd4YgyxK",
  "key30": "2TU5TPnBeGxTTb5hgAeDxgq99Ezas8rC3MsvrYrwksM6cfrmKKyQLk9SwcN1YiP8srVk56Any8Aq9D5HdbLkSQ9G",
  "key31": "5wYwBJTm47s1LRiLXxbeATpL9ooiLu3JoM5wGXShJLszSfHNvAcmjs4n8GzqiMebV9G9R2sGrPoapfBYUix5rJgt",
  "key32": "4BL6qUFoTDd2o81JbRxxqZnGguEDY1BLSugYxn1JwwHNhhitu3M4cKZ6zNNftYFJncaKiQGxVvSP3tA8BWDtwamY",
  "key33": "2VJWiFiJJsuLYvDfVpEgNeu8DUuv3EBZ5epiXtGtGgSpcxiesog9y4PghmQk2MrMGsMxpUyXcTKX9TZxHDH2JHnE",
  "key34": "62AFcAfrVRgm34WkWTe6onAEnuCrRTPYQEco6nnERSH8a2vQfNuRjurpJKNNB8octZ78JLr7r9c5XHGpeEjVqqfY",
  "key35": "N2veeBij1eSAgqVDwz8bDZTXkGcGRPsTGSZe99WcoaDAXhhwfo7M6dQusizAZNK9YhqYdr81S8QKDJodyAHoiKT",
  "key36": "4uQ99WdrJpkozUrU3KsTr7YbtuNgyc7DS1vrNoAP3hkCwVsZN3o2GgFNZg5uh4ADK7TudBBCC14pbMtvKbCxace8",
  "key37": "3fiPa8JnA6q34rVnmr9SAEHkNmTefJvd7kpjjXgRjixnj35P7XUNrJYQCC7TcKE5XSGzbA1pu2A2ezkh9u3VarZQ",
  "key38": "SVB17hgYN6gHZ82rDy6FxW7ULtWto9BGuUn142ztYuwP22Jc6u1tTRCbfco9hfBbq2M9fRSo6KqReZwBVhpuJvn",
  "key39": "ZK54e695eN6dZsCtSS78ZxFv5cFMJBZuB7XsdgVSJo9yqzbBqoKGKf9TevSUBuJQcA594nb1cEjgzQsB1A3UccS",
  "key40": "3zAvZqL8vNR95XvFGiYZuYNbPw9VeFwhcuVGYbtCb2R1UzM13CFVkYB3Nru2y3BBRh7T6ZdwJ6EtpSVgupRZfMKB",
  "key41": "LFvaQBQwHS2qRVJJ5QfuUpTRGujarK6o7SZYYUVpNK4rcW3423yRhzwvj42gEKqwroUyGYuXLzJfqXcw9oTTDxw"
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
