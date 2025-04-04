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
    "2XKWbbeQUNnxoCvxBFeoqqWqVpeav9dV17WeVPmryHuDQrz81jHC8gB1W61jEjiUqDLLS9vigjDtkCaM4ZqmQt1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "unYA3ouziAJucMy22DVKgUHPGn74781JYXWGQSHR7MQTJS88M8Zhb5kBKqdLj3MbP3aMQ3WFceuXVFjezEmqsHU",
  "key1": "4QeecyuZkqpU1bjYfnbDSHFGCSJmm6ntbA8eseNTTUvFgPmydvjPfpMH74RjC1xVw227GBbuJPzuw9QGrHd6p32G",
  "key2": "3zbh2ezdrNeU2o7PZNMGWxhvCo5ZAN4nVc1cDegYTgag4Tu2qynPUjCQEy1yzQA5NTNXJDz2gWXMv7ChfBz7ofxf",
  "key3": "4xJpcytUB9jqB5G33aMHAV6vrzBn9TVWsnb83TYTGdPHGrtim6CFYdv3wjYTtJ8XT3yPDhTkg4m9oiHzxytE3YHS",
  "key4": "5mEE8h7uj16h7RECJsim1sYgdPjqhNB6hLvhBzfuN46kxC6iK4nDCZJvfnqZpDdE7eoqcq6K4qfu2EwiD75yHRkY",
  "key5": "67T8wQEKybxrYmGtWkcRJ6yU58g4jadRa5G1dWTERHBEdSsaXjYuuUAo2C3ufN4P2gBLWU8W7wdKCRPAkLsgm1Ke",
  "key6": "611J4kzhDbZjwoUzDMi3kGCsV8C3m6rZt4UVRotnFacyr6AKqgeXtNRUt42gZWnmoaYJjD7yT1QpYjfKNXcJhPTJ",
  "key7": "64Xq72QZ9p4NMaME1sqMhxuYgKbiVgA64gnSdYrgzvTWzApfwMiny9tAAqTwq5u5inxpowdT8U632nsUuacnb1ft",
  "key8": "25MSmVS58hSj58gB4LAxgvXgT7i6siTSi6PvbmApK9RHfT9zw5TphP9szcqTiNgi1g8nPhMi7R8Sztk7JB2dcySo",
  "key9": "5WLqiZPkx7wxqtTvVZzsM84h1gqyDDjrgMEa8yG5LyBT4MyKi5ebRkzRnajAeDNcTPWNkqg21sMCtb7ddtbhVV95",
  "key10": "gcWQLjLbtz9B9pjCSMHciVzzz5XqYiRyDTj4GpBtmfgAVQn9jzwRWjcceFCanDG4VAmVXXrR5Mw5FdeH9A4Qzpx",
  "key11": "2E8T8LJN6BDQ16V6Lr9fbvvzSbaXHjz9b1jy9Z65ECv98tby9kqtdi6qrAKcUAaNJkx3ybXvjH7rkc3KE7UzMcAf",
  "key12": "2f3b1U9RbJKkBPVqwJXHzJ1yUwVegrpSyfDCcnaz2BEMhUtycn89mtgj4AtXE6mX7SWMhsr172S3tFwCQSZ6jfnY",
  "key13": "24TJPLMFTqwbrKEMn6jE3QpXu9kueh3V7hf5vU66BLxV1Yjr1FkcgqzdfqD5tExiLh6FMVjkoDR89TyaEGCoUW5Z",
  "key14": "4Gs55UdYta2TL7h61FnEGbXg51nirUuu6CwQgS9uKNh4tZRaMqBdb3976mJspLjNqEXjoruciHHGCgUmWHL99wFz",
  "key15": "3wjafqf7Mvk9HijivKC9pDs4ryZbZ6DFtH61tUUqvqhM87jKmVgWDMHxEg9zfKXMCenhD91tzycuMf1BrqjG5wmx",
  "key16": "2zXe5o3wPwk3AGpUbZYvmu8ugiDCEnycRa4wBHGEYwos64xteXzS8wGagvoKH4Ny6juc4pLLurpcM6aSaEzB7Xh2",
  "key17": "5EyThv1FqYhhZM2DKJ67DDW4HRyaASW9NnvRR6A5CGnnaJDnAwFQ41663hp4tsRfos8Lz3GUMGQKG8rUWixvixVK",
  "key18": "UFGyH4sd7MMTo94LSxSfF78uj3UUVD4eNLSPs9zQMwq64UUKXzUX9dBaDfvxwXBdXY9ZX1B4id1prFXuURt2nrv",
  "key19": "3MaE19sBbo25HUgZTjwSb27rwpEsSAX83EAMctQtqRtyNRXQYTePAUrHbCAvydVuBkjz9YFsfEQaVaVsoBuqHHru",
  "key20": "2aMXtQt2UZ7Q514gDBGkfy3Nc4tYfEFqdFZ82Tx24K3DTGmfSgi2HN7b9DfkuKszVGgLjrAwqdFD1cAhcDsbtRib",
  "key21": "3gqU7aCUMJjoR9TArRYnmbnEV5ZGoSXEE51F2xtQQFMHWmshXHfsKUtzcogczM2yhFC5Qsu6T6L5hvThGxWqUie8",
  "key22": "5R8VPFoPguL8J3kVmwJLzx2Mjauu3w3BcQea4GtBD6WwcGzCU8JW2WekAiZqPxfJxsKXdEcaXE9CeuggdAazWWoK",
  "key23": "23V7yHgTTkjdNY13MLC5X2pYnXumg5CMKkvrDUjZzUvwE96H7jKEYV28DSU7WWYBd6aSBhFiNSk4Jma1sbGJ3i7N",
  "key24": "3rKEwxwM37goKTMaYnSDnfDSy77g2t9hUWxBTpcefnW6YyTEeY2E1QXdzJm7gqcQ9Ce3ukBDS9UZ49Q6cxtgkc3U",
  "key25": "2NFs6P59Sdj4gDtXQwUsqcJ5aWZ6yWEyfc5FDT9eJW5r2tphThvY92qnSPmYGxyC2zLdW5Zs5z3o2NwZK75jgUyC",
  "key26": "JhjX7tsK9vt2BW1jRTdcwtHtv1m4jKb8isWbSj8xsV1YryfMXi2Y2aRtp2HyuvpQpqEwf13SmZG94XkqyhuuRKZ",
  "key27": "4GptAmUBq3Cjs2qzjjo5Jh8God1Tchdc1Xv6NWbCza5TmxotkS8JL8sd8affg7o4b456KZJfSedh6FRgoe7RSDZW",
  "key28": "2WqqHqh1K6BCpJ6RFTEeH8u9L1WzmeyhEvaJfAK2WuLGWZCPJaeevMUyro7vHHFqYE8kxtYTraA2dcfxaar1tm2M",
  "key29": "QCMji37CpTWtpd14xxE6MAdN2tzZJpUPiAyopgCJr7bXprdYEKqNWW3MfifzyGjEVfS3rLCByTw4wc4zMqo77Yi",
  "key30": "2JorcfyQzfe6kEagxE3RY1GE8XsfjnJtHxrwbGSLTqaPEY5VDXRaWbSsc2rufFA144DfeMvzZjBEyY3qjyzUk2jJ",
  "key31": "3qJER4EPprx9MWkJ7njtFnsVL1FX8SBLJdiWv84cSWmHLsZsFW6G1W62uvYptD2iEZZMT9U2Q7bqanpFeoUh73Vi",
  "key32": "5FEs152WDsHS35LFJtAypuQkVgKXcY5unnhDTPzxnhJDAQwtdw4M7p8kD7Jj7AR9qAfQ1hmNyo9QdsCb1e2rMqgD",
  "key33": "3181L3nrLdFPykBpzBDCeVwKiBWUzXzZrEcSZp444RyEhjtYL6ghBiGSiUFet9ib7KSVZH1sUbJxd3r9yXYuWFWt",
  "key34": "2717m44VUqfPb9GEk24UXChfV4YyQ8RyiPr5XBxjufPHuCy9bVJWZ2MUsquvR5uTYhdHCXZmCbqmAVPiLRPpMuMT",
  "key35": "fz6EjdGaMJ13xsSTJ6JZiQiKZABpd3g3jETTbWWfhzk4P3cxVBTbzZEWAKbsQsec7edxvgHXDwEMAVfgravL7W5",
  "key36": "3vFJjmBZMbTEfeCs8xdH7cSERu4barB48zy2VczGMDcUH7xnFcnkZnksPS9rRNhVArKFd68YgKRcQz74B3rDeedb",
  "key37": "hdiQjWhfVCCWpJh6J1WHvDRA9LLAHGi9nV21EWsmvAaA7BMiaYTGDZuorzyfKcKnfnQoZdNdmrMekMgddk8in9h",
  "key38": "3gnCFajJ5StAAKhghdJji3Ej9ZpWF72VzQ6KkksLmKW2AESBvjvFKbLtxGkJ3khZTZiDJ67VU48BPRg8VuZUnYLK",
  "key39": "5Prf7KHUXYMDok5hkCfummHYTxPaBUYx8AVHL32PTpyJSj9nBZG3wNDbeUb5nPixJkVeLz7LJxSKHQNZqHV8pmgq",
  "key40": "5wJC8kScsDH8z7J9ivZXsKaC3LpTH18sXrp2nMHM6VhMm5nVxW4BBd7qCVWVgrK5in9WzrWMZtxUynBwnqZHW9Dw",
  "key41": "3ojfsZFxaypvq3rsV9qep2kD7qDt5ag14szfuyD86M1xiuowcPnhc7DAxUxcbNDfEdRUHmFRSJtQxrTK4NdQog3M",
  "key42": "4XVUfPSCGFSXuNnEipxeetL2TQ2ZVhqNqMiFaRQEZaNXp2ZvuqMHGUF79dMixVQb3XXqeN1iRNjko2PBkx5bvr8a",
  "key43": "4kTWX5o2oAijkhUF2qp3qqLGRkmxQxVhaSbF9WNUjiqtkFxT2urbhNT2rGc2QKSa95LrM57VSouQMYdKTSJrDpF5",
  "key44": "3iRhzCruuD9VsqSxbCHpg1LJisijBMMnEGxE1vnPYy98ud7SJyTY5UFLfrbzZPN4hDR7iVZKNCaZxWDjUGSuzPap",
  "key45": "VTypZTHkt9p5xEsfpkiDbJPEvFUydxk8XdsSDqEo3tawv6sg2pYtRWgmcG2w379mkanSKHEijfEZjJPnCGW3pjP"
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
