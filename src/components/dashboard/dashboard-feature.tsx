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
    "5gx8ariSaqR2is65QcY8LmX64E1CAGNsEPLqHMD2qWCb5p17CRnNoh82DTRaoNArGSieAimzEbPH2dP1NnPPbDhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u6CktjyeoeyBLYuH2LwyMao4zhjXHwFEjuP9U3YYgeb1UBLwHqEmFu3sRc72CF25ugeSCcCstTEfk8oXrDg6bpY",
  "key1": "3XcHQZu5sgbqV6eg7wYoGVdzmQjbDJF8KwjK935UAXLB9BvNrKrhErQP4q36D2ANj6jJ28XKaMuBoDVofiwzGrB3",
  "key2": "5nSXJ61oVZUz88fRZg4PZrFiTNGrUth7Rm6hwf7kRAJfXj1kaJEeXxZAmWYqmxJSc9CTxTts1EtbZ7rtuPd59xeV",
  "key3": "67Utzs9n8R3e8cq8PAxJACohCAYfeGwLWXwMwkST6RRtVLAnvAm958h5NT16a1tecFYFGXwFZGptMeB3bUKEv9t3",
  "key4": "jwo8pKmwm2Yw5KZRb796jJKAHN5Lc5Rf22Ve3PZDZ13wDUWhQnxDPxhJyrExVKGr1KxqM2NGDW28HEmzRC6bEWK",
  "key5": "3qLQXDiTdtw8tFStxSoh2gDgKpmRoNsVHMC4Lv48zn6ohHewtNp6UkLX5qtXfh8r9p6Mp2cWxgnHNjQgWutwpSV2",
  "key6": "2UGT7FohfC3G5ZropqAMDK6zZjTBYicDqgnUCQE8XC3n1WiUnkcVtUS4eC1iDY7CWwuSytgoN8Me44jbMCfo3P5P",
  "key7": "diN9z12WeXAbhCvsV2eWqBDGTwpMD1Rt5gsRWuBF32ucuoCE6bfnHK6DtGvF1vdxsMoCPZ71BXidsVdLnyiYgas",
  "key8": "62tF1ZvZZUjhCThSE4eRK5nrgjiWoXszRd1ZWT1MWZaAxEkRMHgV4bG5wzCDmnWFcAM8zovgV9JUE77deSCybn2m",
  "key9": "4n4PNuEzfbhoSn3fdXSNhrV9LZ74vP1GeqjvYapjkZ6BTSQeqL5o5ofT6jvQ5jzcbt8MSVk51HTDaLnMEf7dkZu1",
  "key10": "4DvifDqo9YZJcMmzvJf6fYmeCUrZJC8cVRh1pvryGKtyjxgNcG9S2disviPonbv4Yvzsz8NZduqMbhfQjjJ9zj2i",
  "key11": "4G6cNku3paUmsLCVvq2eN5dgNDRdN9K7bLAEdzwwGajpRWQUCw9CHNu5iSshBoiurasGAztVdXotnmX27d2Yj7Cq",
  "key12": "4W2yCt7HEk3XHAxgKRXfyECfk51pLjAzaX3M3mccWdQxYjaUF4Huk8UqqYLHU2dDS1G83eBzMi92W7TNskMboRc9",
  "key13": "5a7HSfuegcCSZhUzKUbgFo63LW7fyJqvRF65K5pzT41AtxggBEA5qaP5WY6pDACiTE5iAG46azq3t1jR82693jXr",
  "key14": "3UafEAiof9nNwWf6HC4xQq2Ysm7werKjNx5imvhZ5xhskzHx5n9NR3W3jpxvprVWLpYPTTQLJC1DCaFgXUhmnLd9",
  "key15": "3u2oP6t5k3R8PC4xZ6uzbvkEngWYwz65n8uagpKNqVFzEVkUkxfAMsmBLbJbL5F928u177S7K9oc4mHVrDdpX38r",
  "key16": "KdBVSVGNTWycGhm64Jtd4nZBP8BjGvWU8myrVNHhiycB4Sr8dV1nPNsxMY1ErHWCQWQm5XsMhrnmJCufSpfFszk",
  "key17": "3vGDa97GLh9HSppNWz2PCVc5AAnWdasNG5ht24VFB9w1JKLYyf711vAtQfAYg1jNpnAxoE5657gf6t3CCCX5F1E5",
  "key18": "3YrqsQ7h1Shdsf6cZHG6YFfryqnMJM71yfaMxYYaeFMB6XETENUiSDRyNqL3qpUYoX95T2pubNC73ocNQ4SgK3ba",
  "key19": "J5MunxmV61gkyiv5Jvh3Bpry7DKsdbiBrNfHpZyoF6mLA8QN4b7Bj9QD6koAtmJc4V4wmXypTPEFKowqrsh5Szj",
  "key20": "e673kwBrThaNNDSexy1SNtVwXWmt98WdzySJFWWc2gUnxw8zgnq9sn5ZYh82ZK9mV4RPJWXG6cQ22gHajUL937r",
  "key21": "5qXpa5NoQ4Q526vMsoBJzKQgUEqwZjsxnenufiUeWXwisPKjE57VvKHbk62jpKQ2UAV5CwM3wXDS3Pf8gkaawrr3",
  "key22": "5AxgbbLtJdmf7yU8ad93hi99ouDaatweuxYMqUXRHjJZPsMqjLtkP24DPStXMPWtuvK5f9NGVBkZW4jNZqKyXY94",
  "key23": "3AyoawG8eS41R4SA798PLidtcWkRJRkvCfYA2xeZfaus1sKXwrAKU3n96bGoaGPERWgMz9rCZLp7qqXbH7P38LKe",
  "key24": "5BQPUgyFEEYiiZ1yacutfezPj6aivMbiJz3jhL6Lj59HYw377iJRd2rKAw7bXVJgXXvGJ11rndbtFy6qN7oQjKUg",
  "key25": "5GBN9Sg6p6zJZQoKJQvQcVDExxaiAjK51TmxQQFT9B3AfW1wwErXP9gxqwo9ibNvK3V9XsYe4u5yAUL2ZMh5vQ6T",
  "key26": "5YPWtoAVxuvVNiUj4kqiZvrekgkUzRew4i5XNUeXV4Gfn5Kt1w1v8YxDPPmhvzDZNqce4EddnDMT9Dmvo8SGyUa7",
  "key27": "2S6UGiJtrZcPbJXPk3uGM8P2c1LfRhPKDfBFjGXffg48HZ6tobpH6KfdCH58kQuRwj4L8mTRoUm3ywwQTpUJnCKT",
  "key28": "49vkGEZ7uVvsZaD9qJfDkWjbwK1hQZx5mwzng7ZRnCQsZnNm3h5VzKL987Q347U6ZosrN4aohtbrpVz68RroJ1qt",
  "key29": "4eRXnLK7tsskAxkErwUcN6zQkaqJpBW6DuvEX96FtHLrnJfrdVzw3v2k9Zs6LdYxXmWLojXhaDwmvotV57846QHm",
  "key30": "4vEs7BADSEhKJjJRMN7V6Pv3wypJ2SMwLXLSkEUfY1qJ7QpyKUbNDdLiFFjcrVSfXXPfJjHxRBXn4KtQQvY2sWMh",
  "key31": "4nXsmnUhbJsnFZhXb2hz9HfiaDM1ov69GpMVHMWTLBPdEvsFm8WmBTQ5SWniUBM7KJfVCh4fCgA6y5u6ZVyBZpgJ",
  "key32": "2pTQeKnxZ73QDeYAV1Wv6aYwKuYoCudMbLZKMk34tQttv7mNdv5MJkbvcmkSjBn2k5BuM9htXU4tspAEfzx8KEip",
  "key33": "2ZcBHLsgVxqURbP6y3J6FbxsfH6V2k2FLrUWx6ocduYnpX8NzQreWLNNEi7RADcaBK6LCCVP4WxtGA5p2DGLW7SN",
  "key34": "2dX65vZ1pjWQpDGkTVWngWcnGnqrMNeUoorcHTf7Yiv98PnZevPsGQz4Atyri8nK9RTgwNZaRdVzE3ozWgFtgKxT",
  "key35": "4RVSQYXFecNCkFEsyZbHXTB6dAqjAHXPR7G4atY6qTakY1i6Mz38LwEkZjDCBDCH39aD4yM9bZq2WMsacCQ6gw8n",
  "key36": "4saKfeGSRQq8KXy6TY8T2GeQfaHqtFkjrBwBoX2u2TieYKdkvVX2CwxHhewYd4ucN5kGZ9syV9RgrMWj1Gqcenst",
  "key37": "Vtk6EVQcyJyof79CztQgbRQV7aCJHwHyuWCYvohUnVQQ1c4eDbQ6DoCmHLeXPvxmkc1MLBcxZmXRYdPjcSSUaE8",
  "key38": "s7wRXMZtqVSXvckXjNj5ZkoZmBHWZNJXLredu6JGLomGgsmVBUvXj4UtDHMyGUMv8bvHUhadjTqwV2RguhmoAdc",
  "key39": "5go3AfQvNspYZFKB52paTYdL424GGa5ULrHMxsnN43ZZgNHQvFPjpbd2U6MGXeP6Rnfw5ctoVe2zFbMtfYr4M6xy",
  "key40": "2muHYvnBVsZ93oSahbL2sQ8UaxKz4GSptKPW3WDAJyCr2kncgiG7mxj6DCnRA4sCTiAHrYGTnek2Wsq2xJanLUg6"
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
