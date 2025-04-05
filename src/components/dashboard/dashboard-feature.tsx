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
    "2JUUbibx4Gi7c332zg9afrh98mWgceVWjHnBw6btpQqxbAZXCe7Ru1nJHgmtFQYxhxBdEahLWYaiakp2RQwuTRnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5idLiverozBPypp8dU3w3X2xXhhnEJsMHboeYj3jJHjE1o2JVEptU8Q5dtr5jP3fixHbk4QCtbBBoudfeFWCA4w5",
  "key1": "5VJgGRhWnAh1x2Dwm9PzTkA4uv918fcpuz77qeVxqGb9oq5Y5zjgHEARLqTQGzERbRgRyaJ5h6Mkc12Nx7cCsnoH",
  "key2": "54HLrA3RaPC5MVPFcxZQq68t187C5KdyUV9WwBmGyTckhECoMqK7PU5jNSNepYjK4brzzkjFiy9MvbhV4BM57Wdd",
  "key3": "3TY9esKD2tuWRevJDvvmqTwJjR2fEdXKzEQWR6UL6B5QgvJoxkHTuNcq7TXX2oKoJLqXgAmc8ar6ihw8FzfYYYHz",
  "key4": "2EpGhwQ55jUyE6utifY6XdwyCmWBAWfRYUXWkNgSvfrSiYf3myWzUmEtY6Vybq4yDDPnXyj1qUJdi2kBAj8REWFq",
  "key5": "3ugiCzZ5KjbGvZJSFVxRhDL7bW5LALPP8k9KxtFTzwMzsUxnvChLegz8F4KLbkn9dgXH27NfPBGHY8g9NKYMyigx",
  "key6": "4HwGbuWUUFj9wc3dE1mNkrNzUVWPUfz354iaJusXsahEiA9egBjf61vvkMvQpLRvLVfMoPZHNTAddzH9Arf7bzc9",
  "key7": "HRmDSsAfzJufKG4z5KDmofbfi2RwrkVjBbnZ6Xi4dxbpVvwW7PT74bnoaxJKjpyS8fPfD8emxwYxLo4E4EA44Gj",
  "key8": "41HDRnfNb9BPam461y5mtrmyCd9A5L3preabBWicbQ8BPhizPGXjF7M6vXT228DK95mhXdCvSXy27ttddVYak3pd",
  "key9": "2uaDfahKwS62rSN1h6k9ESWsiTzBWvziJMjn2UTf68tmg4nJ4Ys8DLncJcDXdzif69nXt3aJhZ6hEDWaTy6nvD8Q",
  "key10": "3tXvLGWTt7D5q9oCFPydGT55ZGLRZs2GBvLP2UCzUT6SFzJkD5SdjkgiFRoxNp1NVk6yLoUb4UayFMAfBcqkWoS1",
  "key11": "5JhvtpPqCUKmDokuC9x6NJZeqtuBtZzZG7nUQ1kcM2e6ARnqeR1weh266ttCgrWdYWVjCmGm4i3nV4P1m9t2Sygt",
  "key12": "3f1BTXrMY3BfFMk5YXJmvSFsiSCYwLxh7RHoSGbezpd6FaSSBZ6AzxVNBCyzZ3K7ECWFxzQhGMtHXAVo8YBxP3MP",
  "key13": "4jhvtv3f2mXvcPnzBnfuSSDK4H9wDd9CeHhNZEnxJpXPBMZLjwkNvb5mqGi5Bx7bwrYqFbu83DDH37LMUVDjoj34",
  "key14": "2jnddEvBc8CkHvVR6x66GMALFLvyz7NFxv8tFzxBvAJRH3mo4xZmbhGZWXfFNNCqWKy6uavfnHoV1Y3j5qhg4AHb",
  "key15": "2k5xZmHsnd63SHrhEJ1aWZvHTdYeN8DLwwizfDVMHj6XZvqBH5pZU21GA5rj4zBoH4NDTbDNasjPxQ36SbJhFFWf",
  "key16": "4zyM6qryjmagSxXJzEuyoqmi1bjqvyRCeXeoomTsQ1hi3n9imhpeZjFP7PP5zh3B9jVNBhL7dXKKdJXohufAXLHh",
  "key17": "4dQG8TeMvtceTebwR5tDKKZ7cAsqA9mr72YtwqYCn9R2aGpmLeG9z1fgvpUNaytTdYYWAKpdVTUKJ2UYv3mGWpZi",
  "key18": "3VQ9rxXEFzrGwECUc4JosU4EmLFkjZjx6AJPjeB13inKhuFtsVE7cCzRPrWi8F5UShKFBm5hepMeytgaCfg6bYJB",
  "key19": "23QLAB8MtQSLEyCDdxQUJkLEUsSewAongQendWNU2DmdEzSQEjCEmQgFs58HemF6rHtnvqYayjPw1J7j1VQmwwVP",
  "key20": "3YuBJNcC9VKMFeiPPZPbnTgJrJxYdqEPLX82EBejj1gKWZ8JS9MqDxfPVUGHnXueB4QaL43PwfXwGoWTSmsA4jCT",
  "key21": "2QvXu4KWoZTamjyoUmJrjNj3D9b6khnPfyWqRqeRp6A9Lj5T9VnfdHde8yhikx7VdKy9XnayvnXBv16hDyHE51r7",
  "key22": "frRx9nMh62XxWtfHoYme4QUJV8a265BQBthuTeMPfzm7m6Zr52W4C697KyKjSt3BGUbAavgLuSt7DvX93oHTpu9",
  "key23": "5psT6bmoQHUgeSdpuhEYhu9aVek1E96Wh91aLjT5iCMj4KnFGwbEC7x7kBMuBMi8xsXsvMNDDwXDxaNjamb4peXM",
  "key24": "3ewcFQ77CmSfSfJtAe7b1b6J1u8kJqQfppQ68W7FjnnqTYdsDfYiWVtqD7wprS5J5aTFgo1L6KfpxkzMTEhWSwan",
  "key25": "3n1A1HDnGziFPGaRLXW5vAjAhqgGx2UVR7orKMSWZoZi686zgwcs8dzQDUAqAUUVsyCq5xeZicYvnEt6AiYx5fmx",
  "key26": "4SLPrFiJQvFKygMJ6w1Q4xreBkaSfAKrm7mCLMJEy8WsMKeDuQzVEXUBxYc3zSncKdXajGEpaJumyUkikW1vFSF7",
  "key27": "5Ud8oFEpCMZ3azbm5uqX9tQ8KL2DPYmCjCTeacwpZ2q5UhHj7vnuzQoMXZ5EQHsp2W9Hz5o4qyewjjckQDH5af1T",
  "key28": "39c4MmQ2myodR5YZnmj3AxPh5TNSKJsraSMk5o5x8sM14ucDBbxvqxLfiSYSBgWHSMtKmhJKzA6mxaKY4jsz874J",
  "key29": "35zyc2MDM8RBUhL1vcxjCNV2446DyhyofnFh3iCanTH6NiQRfgFAmHBWtuK3WoVSFDmwkVRuhE15ahy4KSAUpnsT",
  "key30": "5BA5xwsTFjFQwDji897kPigJX1i2dgN8UVYKz7pP5Nd9Aty1ifQnpNZpm9gbL8P21zv4fVFnwtvmBNucWojRfNbq",
  "key31": "2iTCaxsFoh2FpKnPvomqRZkecTfnadQgJUWkbwWZ4jvdBWrg37AM6rNFqcafyo2ojY1H1cUXbi1zB2dUZS4JZj9v"
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
