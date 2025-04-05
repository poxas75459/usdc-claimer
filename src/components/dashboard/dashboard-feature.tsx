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
    "3jJurDJKSS528Z8ZejYa8JWdFiVpdGKCs4WyQdDVxVcCeoM8LvFACzWQvWHUXZUUQeVv8wGwrJ18chbt5dCiDdxn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qxprkFvYVhgkTudEVGf2xukJTobJgojj6mDBhtQizdtta6rjN4CjpMR6bHzjxKqQbDdb6BYwvr5jC5yxUwL9EhU",
  "key1": "3Cfk5FHzE1xxbM5X3wzg9yeAPDcZe9z7oweXmMjVXhdumNqt1cjvaUwtz8TpEsjS45qjEdjQN67XWQaZTWM1qFpq",
  "key2": "3iHcYywTeSVJCyikv1QopAx8P9nNAc7vnD5vfof2FqPSvnVsv6cjGowXMY3YRxp7bwJksgF7JPxhwYKvUCV1N4NY",
  "key3": "2esKSaXRrBbzKj92tkHXsCbGyGfgiEMB2tzVcJu59CH9pKTEtc51mHXSYzig9F9Bu4tNUFc4jQswNEjFguQ5wuS6",
  "key4": "4KWFf4rG3S3znRMw2QfP2kfPypJbvBwzL4eCTcbCAqSVEhnrxDoN5EdzKwed7fHcMmBY6vMHnCjMXs2HAXj8ig34",
  "key5": "4LLf7Zmk4QffSZGUyeXU5mwEXChob5cSqS7zF8V4Lh6uHbjQkV8eka6uxwardy176sPDs9BX4CnbSS8BUDH8qdoN",
  "key6": "dJ9PtpX33ofZC2crfz5xRXmFUN3ycps8mmNuk2jauSqBZUtdbvWubKYKLe2BXshWtgKCGycYf57GvGWHGeYx86n",
  "key7": "4aELStY8gtGTxccScyyYEcs1uQVBhPxbjRHBzJNxJr4Gkh7nRz9HJC5tGovpKEzWxyDnivkYLheg8z2CJqNgmygW",
  "key8": "4GBPEBWiFbhMxbNNsJuqHydy968vXQax147vmFc3xWUqUA59ZF4pZw6vwyiEvxBcdpdN6Koke3e8QtFvnD6SLrMV",
  "key9": "3NrPPSDR7zN6Y7iBkWLEC2FXdeYLYAjDwXrjPppBKssw8W7UgVXbCoVvuvTgDJCVxgjMrFrSR6MnkKj3pnvsZZy9",
  "key10": "64T8tCPkWjh2czGZkpxVbcQo6uozUvuKhkxgY5LXReEWpovdgEATerL8Gfb4ksqsZFLD9GCdc3rcDA5BdF3Hgqf5",
  "key11": "8irynhCFZBANBSMy9yyPuXzLYapDowWgEF4jTXM1p4mycvtzPgTkhsXh2FWxSUGqvgfWgHhBywM89APs9ttRYhn",
  "key12": "23XhUK33eGmWuGAzHn48NEgHbRyYQFXcGEqTzq2kjexKvmC6yJgF1gb5PrUAXqkZMX8aEBr1oMi6dzfdNXUxo6kS",
  "key13": "3Dynxmgj1i2rZo6eZV79GoM8637ctaJ2Ac1SreE6jh55UD2q2xsTWjKMS1R2Z6sU5Ychj4zkSrBNBs5kijWgThWk",
  "key14": "3SFuvQ44St1n4ftkqs1hW4LkomRfMchRemnanLEzEnN4UoTSti8AYFxtgBcCH7DMmcmwpkscebwXK3UuNF6G3uUb",
  "key15": "3hpB3YVa1m95qg48dvK4m34MbXC3fjuAXYnA77sJC3mcBoN3YD2yGGh9UKUgidEdt8TNHsmMiSje1No4QB1rR6J5",
  "key16": "Dmu8Qjw7Rp5RxLbjs5nRf8YqVLQhbujz5pKpU4HcLwEL6b9Wyr7ZkXEKQTSCvRc247poDUgNvoiuijkAkBAqtcb",
  "key17": "55Yo3eV2doNSiUdRGpnyjEBkeXMi9C5xNRT14UZEAGydTetDgDu1L6bdAVLbWnKsZQnLwNaQM8pvKQDaaUvPZzbn",
  "key18": "2r5CbGajdhmf4wSzihBpUcrMc4wUkg9sZ1tm24mWwnKMgW4smAwonWFAzkgCtYaQmJCsugrdB8X94pbepEXEen3m",
  "key19": "2GtthgeL2j98eLx3D2GzQwy5Tiyg1BMvp2qcEQZNabDeGvvQyLHLpKWhAkTj2DQ5kPRnz4hXV1NNT6xposUNM739",
  "key20": "2gdLbv5SYfYzh3NgyMEXcBQ7p5Aya1ojV7AnQ65mw38FBdJUkkjBZNeptFjzjKn5aThKwvMqHJzUPbXLBtEcPKnb",
  "key21": "5zpXiamn33rcBAFq7MNYG8f2ZqNbb9eULUg5vH3yRUpmjxCXWaQT5gtHoyU5VDnB7zbJrB9k7cUWqU6LGC3FcsR2",
  "key22": "2fw8SMUxFmHTXX4Eu9aC9GC3bfL8f8HMumRpJac9ud1aoBbUAdRPBVvQ3ATysD5kMPt56T3xnW94WrXFkHycTTzM",
  "key23": "5NEEqTpm7Pwfw3oQXN7KKeoZ2oWNsD8Sv3nnAUNYihiXqdUFJubFHgXNz5rbHge46sXhk573miN2RvnFhMrsK29F",
  "key24": "WAgjMfkcCcqZqH55HQT2qsMPFD87FzQATShcKoi5qU4FbddRogLdXMbHiC4HWgwR7VkM7b9w3CWPVAJ2LqRCJY4",
  "key25": "2Fjk2n7c92hVmPDSzApztsDSVuCiprB4kfBA9BoPFxpqLosR1t4CGrhdoHhKjnLEwuGi65PAAFZnVk7Nk1aQTR7o",
  "key26": "5hnFfRU6GHT9KXp31eGt54NAvG58sV1VKURU8r3WbwgMsJYDkFXJtMcLbch6mzq13VheUsbqz7uMMEN6U82UbjTd",
  "key27": "2FAQ48jRbPRNpWped3jus76qJfQewt94S3u2zoCM8uiTh463q5ZeLo8RgNgR1cMSusDtGV4L3gCazwisDcenRtWS",
  "key28": "3LJZ9cwn9Vq9kdrY2Z4MgwufzrMLoFuE33gYnCw88Vg3j9x9hg4TGVmK3ocaXdw3KJPeB2PawnRPGKVcv4BM5BTn",
  "key29": "5JYdzHVg1oQjtJbrGge2wbS2KFBcZu8EHjsBykbNtXhze2NVGL8QcdnixVJTJ7TFf2zowCrKvHRvWxmZJFDLk4ut",
  "key30": "pYbKzqY9AJTVDoHQWEruhCAH3XFoE4Djyrfmox5z8fgkS4o1ebmUd9yLqKCxP6UTj5A3wpDCAxQAkbgefTnE8ox",
  "key31": "tYsuV7AtXxVNGhy992uhhTpjoSTPRkpsq8jrScHEwBvPoDsX3crcgYZX1t6upWyTw1eAcoCA9XgdRU27DcNFm2K",
  "key32": "5sxahtZkzP6yHqsykizah5nqHYU4oVQcrBQt96b9oJ8RAfpDX8PUNXGyXE5hnGsm5EinHpgDJpLfx33YWmgJuHgU",
  "key33": "kbvNFJvxfcHpHQMGoE74phjni8rT76svR6WYxweVUnK85YxcXndiX4L9BUT4uajRhDd54b5EiR5xAnYMuCqcQHP",
  "key34": "yLPjRazrMtQcEjEPZjG3a3NifEie9cP12eXeboH5h8eVdba7mxmB7P5y8h5SV1D4ctakhgM97a1y9K6hh1BaPDX",
  "key35": "4GUtnqQtUEXzobz2z8CS6UuNWPAR94NkgZVL6SiHYXaG3r7JGpEA8C6fUhQsXXiZ6nGhMgSLBAydT7DMZbnRGiPh",
  "key36": "4Gb8i41Dow1sSFBPfqtcLfUWnYED1HZhkGWyHseB1RnQwettH6qWwVPUw537HkyPDbqP9Y7xUQGjeeySGnGexzDi",
  "key37": "2UZr4VDUbRczd74vCWZU7bZJ7ZXn8gadGBz8iWdDGMjrRMCuTLHrAc8owiD9aFBVTNF22c7ayRyGD98YaAbRMJXn",
  "key38": "5GAXB9WuwWURpkxMzPVXxzaPmaDGEm14eqwTfPbbjvV7nskvVeQRmbAP4fTMKHVxRNi2gXzu35mYagjyiLP2Ym89",
  "key39": "5sZ9ZzmYBsGnLrLrfa6zpFAFNxAf7MDWq8ZLT4wpjSybb3QqdeuUCAZT8f2mQDAUpbAaJhPgGkJ2XxT6jW53sHmE"
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
