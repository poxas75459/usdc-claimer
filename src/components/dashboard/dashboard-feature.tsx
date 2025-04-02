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
    "5gQczxcFN1vP7j5ZEprEhFV8FvNrd1jg19cocAjRMVvzhxtd83mDuufmbd3N7rDGWjnKUZTJYNb4UtrCm3vLCNmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R6ZGBkKQ89TKt61rKf75Q7BPfnEpE4NAVgHbZj1boEaAkBsRQ9GhLDLndWZfHvJmqbPFj5tX4QqACU4aY1aGnD6",
  "key1": "2wBFeYtWqvwzwLQZtPKus4rgJ1VjZemenB5iTqgrvCBiSbkcrmuGpBskXSnMeDMvoFoBnDZQpDAzxF5WD4h9Ygeo",
  "key2": "5AjhwtoPeKZkn7RLziUQArCVCCNDvN6aGKZBfjuRzBdCs4qs2XwY2sCTVhg5jAz67uN3APmrEFkBHe3F9z79HsNd",
  "key3": "45w3HMbV7QZk7pdpvdbeiNuxtE91sGkbaqtgkyUnuMw3fvjn77YBatYC4iVP2VwbAwNhnZ6Gs6wD2R5p7gGSzmdU",
  "key4": "4fny4vXhvKtDMZYRBuSPWhWzpJCxVKXuDme5nunZYgoisGKSczMXsbCQocztYGzNZm5saydQSidh73LYNggYvhPF",
  "key5": "2bzu8YfmvoEzeRue98vUg1gJRQf9JFZocDQCLvBc6gVzZJZXsByvokjpkNGYk1ZZZXfAQo7SQowDCqWh1FqdCTwm",
  "key6": "eWBLLxorNdgchUvEUKUgZVFqz84hNYCJWW4zcLQCLsufHewzHQ18ZFEGg8g1F2ouVuJh47HjDSSsdqFQ5JzFyV6",
  "key7": "58oEWXM2zBUz5DSEaQTq87Zj7Vch3CsHvgjR36uRVwXUWJwGASXfhkqy8fBWTAMDgHzrgKsKvUXEd2D96djHqS3F",
  "key8": "4KWQeyKUa1MbGuq6Z4BLajpB3Mz6bKxGqnBb2Y7fzhDkbeP1YQyvoE5AG3CxA62JuGAmTRafGdg8QZPiuCHLyTrS",
  "key9": "2nr41CJmRHEEcfH45RfaetSJPoni5eDLtAgiRUs9y4FNx7Y2cWPkhvXQNkTdvr7FsAwdu8Fx7BNDw72jXAxJjJU1",
  "key10": "TemHZWjxSt8eJtPhGiLQbjHjAyFUYWVcssqMhizqCua5mfofsb7nmVksqG8znM7js9zKG38akE6yG6rw1C9hcSH",
  "key11": "4FJLAdqvVRwbbvjMK857cPnX58yYtU4nYc9vNy4w74ZFmWnXSxMsmiSCCBLGgE6ZcCARvGca196abRhfz7MPAShQ",
  "key12": "2bovjW1rz2pcpsXFz4j9PojtDfpvdPmwWkdi4BNp9G13rDmjtdHxadFSZWkT2w3oaH7WgBG2UfFp7nr8se3Bka9B",
  "key13": "5BcpFX4UGsgwSgfBNVrGTdG3j5HMFxCwKmFs7pDD87bdhzW8dUP7S6PmC5FJ7HJdGjbUJf3dmcNYfghaB25FwZZM",
  "key14": "9mZBCzCUwthiFu5BXXVdHyzJvy1oVQ79H18PUv3pZ9s6eKvTnnnFBSavzed5k76rszA9See1sQ7CDGvidYHMpHH",
  "key15": "4sSYtPfA11HgMePtJDJeJuy7Cw9XUiqfT9hbXGenJT4SRH6GrYLmneVu2AG3rp6MT8uRi7caquE6FzfB2M9DSFFT",
  "key16": "nD6434jhVtERmUwBvtR7JHSHKZC68FXCgSQjYuzYLHbDtxPbTVHW3ZntYRMHbgeanurx75SnkEkvD3FwgdixL7Z",
  "key17": "5EUT2ridX7csGNfXVpejpzKT2E5mpL9kgdv3qcwSszmWMPR3q3NszWG4ah6xRQqVU9BHzH7Z53nqkwpNPaWSk11u",
  "key18": "2vthtNCYxEZ1XDHJoJJ3eoGCamzWAPvThcNyKGJPUQUUQd3xXgwwPAxx9f3aPBXmbadzWGAxwoU2myYTFPVVbPs6",
  "key19": "Ex5furvwRmPxQY6jzo1YGWfHUuPVritg3KCKUt7B8KWy11iRnbMcrLdKUhPPqSpitnH66WMwD95opjxuQGmiaQP",
  "key20": "2oTGGmZYuL6JzY9Dfw3YrTWot6cfJNZiGtCBnzdfPJRkbR2Mx6RwUxe8Yb7H5FbpCMDeKHNSxZG32BCf79RYni4i",
  "key21": "4qZJsBPvUtk78aT87Jp7FrgYfXGf11khHBQBSbpjQpegyrRXJ2NYbYGpQFjczaCEL6X2K9GdAidd8UJuyXmnLtzn",
  "key22": "3yboygirgzhp7qDnrMVpXMYwb1PvLsRVjDQUpw4CMFjJYwJqikCqEmFbCdcEbtDHyWBVCFmpKxouiRU8ecwtnJra",
  "key23": "4G8pjnBi4NaqEiUcPbgP7QtJdjs56EwrKSe7KGbhWFGXKCHHn1mJ254c7SjL3yJps3T6m7nNWzUYwRBs7FXfYZE2",
  "key24": "cxsoTQDjBBDf9nQArEhCx3N295DN7YoE1sUWY4QSKxh6WtG2UWiAWGniaza8AJRtB1WE7DRd2iRkNdiZX3YaBEc",
  "key25": "44Z28UoMxDCxpzu6pQdTZR4Wx5CRWwJnGbE3kc2gdgnpmEkzmAwbu6idNPQPS6D1uGWU6LzjkiTjoYtvE2tRmrHo",
  "key26": "3ehuokgkf9VLdz9RJJS2hPjLHCJcWvPDbNLnAT6srQbn4yVLS93CuyqXGsrdZpgStYFJ9Wm6TAiSEgiVkmQQgo4B",
  "key27": "5MSRgdwSWdZLqvQ9GjWJaRmtMUKdVbjfxqUE1wnnfYJ3YMtcQeo2Q7e2VYWCSAq2598NxNXT2hxpFQBprEPG1WEa",
  "key28": "5yWyiptxUK8D2nGGV7X55m35FK3DRgHm8WAUUS6DoGg6emnSTkyj2FF4M6RLW2VcMAq2kafrStFqta9UXj6dtfLE",
  "key29": "5qDHEm2wJEaa5DxNzffjD6tUAhFwbKWhd9JPFtMvFVMgXbdEJzqNkXwcLRPZqtKEuYRauH9cwsRKN57nAdefSPTL",
  "key30": "2WzoDu2uMez4unp5xUrnCPBAvpJ5GYaqiM1Ft9FEQXVGEKMvLmSDAKVey7cC8nTxc8RY9sRqLbNCv8tsP4HsSUqC",
  "key31": "3zaYWPyA9QScN85WhT9phYMWLh8R4TaugrtRJFkAjzW8xzemxZP2uS8cAe6fXGktwqfdZzUS1NGRjAA7x36kt7Aj",
  "key32": "44FpvD3QRbZG1wkDQveZXT7sRcqir2G57yn1MRCM4BXVgFhM8izZ6eyWQm7P9nGtaRkq9tLK7RGFLWmYU4r1g9nK",
  "key33": "53SiAvACgdDd86ppwnbJqaMD6Qj8vpHVZE3dvTe6AyAhh7x9HeCMi5Cdx9YLQDzNagqdZ3QDLWjd8h66x2fsQg3D",
  "key34": "42UqFrHFdwbbFm5Bp1i3DVRMqDqgRSoGCvP4XUsJeA86VkZTyPmtzdp2dm3UHDZ1jfavZhLJ1yUb3GFiYuPnMAgr",
  "key35": "59S6caSPgEh4W4aaHdC6eLVjECDXSUnGXNpz8hTB4oTswsCA6xdHjHmJS3ifYZS8dX2seGHTFE18hQVV1S8SXMWs"
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
