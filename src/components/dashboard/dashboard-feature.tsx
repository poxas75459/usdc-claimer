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
    "59pJxDsDhQB1QZMMXzwcPKeQVEc9TRzzhtA4m8KhHZvFTE2mpsXfAtn2MQXQMpvFqC6msP84GnM8SsLJBaeVsj4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ws7KVrWHATgHG2FEjwnS8fgpqbs3YG8qnazA71qFGJJpvRP7o5H244M73FNvnn87VivCDJT7fqaPZHL3kHi4mU8",
  "key1": "2MrEVK9MnJuaYbZ8pjsX6RPCiLfdXWZ62Yqwrv89Q815RWPEvYEdCtbHgNGc4ckz4NrkjTprStLRNDJ9xzC8QsZ6",
  "key2": "3jXpmRoiVc4wkwgf5fw5ZHQEKS9ffbBqXkQiatKTKqEYUaXBrzPe1orV5NVGpA9BcsgrAfqeqFVRfc45h4UziQcw",
  "key3": "3YVH6iMgk2mJESFwmc9Bc7URRXr6BWBYT8hTFMkQZjqvXb3dPuUgagz3UKTHSCGEk4fH8S9Zqv7zCJSNSC7amsMv",
  "key4": "4YwM5dkmsK9mNUNeUoqiQXM4iZpx67TrGtrRAMdxkgyLnMwKMvANkiatzpsdCoSJPbbM7Lf43AZUoFyVvk9QxKUW",
  "key5": "39tmEL2A1cCgSujG6m25UB8uckZbDeb8Qp7qCkyKHhhaUJfL1CkDDyk6r4u9TeQeq8dxEFHAyoV5ZNFo5MbjMmed",
  "key6": "TRkxWruMRE63ZoocyqcDmsmjuyNtUGZSjZvpH8odGipPRcabnVAmoYA9UXxXoezQA9bmCgtNzqNxADnbHPaWfCq",
  "key7": "LnB1vKAW7UCbFywee2fJYGJD7TUvz1hiVQc4f1LPqeRUssjTmvX4jRMrjoqqt3SUycKxQBnGaxgXBAHTKe1UNbE",
  "key8": "2VDuHbpMq6m5YNKw3HskUuqFKPHjzAeLY82PP4pNJBVwkdCybrmsFc7MkxXn1rUdfMG5J6jJQttudKwwYcpbvo5y",
  "key9": "5nvUcvaLTj6oKgk2HXf29FqQRWuZRb8TnFgidqhAmz2dL2b2915h7FKfdrWzyMxSYJfyyWojyACYWx3dk6BjyhHF",
  "key10": "5CdzHyknwGLNbRaZetJ2285gJJHPTRVQ8jvUF1fTLHntf4NRgvz29rh8zDnLhrej72TVu1i3MrFvWc6Tei6s62u",
  "key11": "5s6xxfReYztzbbB9JgNWELj66G15JGmVYPExYmzUXDrZmKxrgHMukR7izhBrgaeaFF1A4YsL8eiRYpA87nyAi5ft",
  "key12": "37sZehe1K29pb2NgNprCBndD1oMTDz6J1XPWawEgY6PCBMrQMcLow3wn5Y9PnnfGEiUzLuuSHXG6o2hBSKKwzC99",
  "key13": "4StwByXRreZksMHbBUaXpuRv94cfsEfVPx9YmDfqiU4W7Bh9bMmLQNdkKeG4nemEQhuhnsk93vQnQftJThoxjpUb",
  "key14": "8Gb3pn39C6kLpXcsTyMVqaYgV9mK6HgC4MxovbjRU32giCYqudxp2VZMqCKKC9G7D5pM1smZ24vmsfUwp6j84St",
  "key15": "3pn45y3GZz4DEM42K5Rgwxz1aCt7ctm8tMkqfS6qT5df53NWuNWY4XtdPpo3rMzKizvdEtJgbSzpU2SFnn8GAyMK",
  "key16": "2MooJe5B4kz3DVuas1ysBMBDcZiUAoRra8RTFY89zK8g4ZXNheknK8jk9UimCjwMfPRmXi18dAdHKvvF1WpYM9o8",
  "key17": "3jiAkB2ccBsAqpSdDqe36JvAy8Cx3Vt7MNwoT1cjwYpdgKS6bdVEzZ9MyRDcZToczsXm3X5u8nQhjzLxF1bdt1CU",
  "key18": "4CKRCgkZfKzdGY9kmZ2ny9oXfufhFeTX7M6JaY7rr5hrGfzj1dvK9UYQoJZJF1pbt2JS2FfXyaEnTaTdXiuGRYpj",
  "key19": "437xmu4wqAhFGxYwVoHHnPepsjnk7vH418vGx6aJDdwu5883P2knx4PhjJiCiZpVyJF7vviedsZxA5SPx4fiekck",
  "key20": "3zoahGrGemyj5iaXPW1cwCn1NsM9gYMAzd7KaUjRN29wSWysRSRPCp8nEWhTWKHfGVJBhuDG5p5ag5M9QK6qaNjS",
  "key21": "2pJUxa93QVfXN3AbnCqUzfEcyJC8fiYGr9EZhyqMUDVg8Kz3pNBNfm9EBAFMQiP9dpPBGqyfcSfdx4MCMYGuDmsL",
  "key22": "xRgNQN76SEcR2G8ibcaCfgiD5tkb68gJ4UMw6JRRWqWSSN1PSfiaeaHovenN3F7yFKiAitETJxwCbRRJTGPEJ6C",
  "key23": "4GPP5yZLH7HZrc76fxtFXjVzeo5XYNjvoC7kR7WyouTCVDqZFygDnrBUCmwMT77ofqNwptb9Lv8Arp3nNrqA6EWC",
  "key24": "4Snrd6c2jjHC8QvixS6mz9JRw2FUbtuCEYGpwoUnfdzdhCr2BXR4dPnMDqwHpGzKvrHskNwhfoLF3mLKRYKrmK8J",
  "key25": "4rsEmynVVwH8uY313S5gn4n9PGPUb6djiRRUwHm6dnkdHdN6x4Her1vCnTNPXB2EBusQioRx7S1je4kaqH7A6CXY",
  "key26": "34TrNyn3tQeshxXwn4C5xifWsSLt3A7EM5c8rrcN4TDsjPShQ9V3R6fh2iFSk6ejrKhRN1yrtoKG7gWtq5vC6jrj",
  "key27": "6yG28ehfVynMcxNn3RbChTznoAmyciYzQYqAaku1KgquzCsiuBH8gbw1Mh1XaKGp4Vz7jXniccPFj3TNN7USri1",
  "key28": "4DWpkQhjji44hzjvLWSqWahuQe9PVpmXRiohBCdkCRYvQAtsoBbC5JtDE8pGNVpqjNbGcY4uNkfKuVxgGwAq1r3D",
  "key29": "513uXxe1y2wusu69U8NUuWRjb3gGgPjPhU2dYXHVtSwaUVbp7RzndehfXmCmjUNkFYgatBaJ2FdDo7GgY3qsm93J",
  "key30": "ae3p5ekbwPix9RuPSbAJM8Tu2hBvkNDqGhF3ovWdFjdVG9A8PpyPLUQc47upo6MdXrxnGQzNVXh1rLRV7AwB5E3",
  "key31": "4FWEQrYBFG1Tmnn9JTugRrbYaxKwG1YwUXXm6ApQupEyR5FetvhS4aQmD8cP1YcgMSxAjUDDvw3WgvQ9Zup6VLu6",
  "key32": "2uJWzyzthMFmDqpDuwTqY21PEbDhrgQe3bB2R3TMDZ7jvnj9dBnUxPwkyVeXbQSJ51SVcRaXxGC9dYjivQPM4HVc",
  "key33": "4bxc6m15Hq93pZuXVEZUwK2Lyr1hug1wEgEFyNoAtxt3q2sFZ5L8ed1rgtEe3MR5qRvTV8ZqMny24ky5iMQfMdKZ",
  "key34": "25KNve5cq9pxbJW67cwVkntS1aaPwZuvUQjtzQiXSW8vejFYQovqzaECJ5KTr9e5xU6K22h7113XCKLheG8SDzJR",
  "key35": "5K4WJmsd46cR4Qakzzo4zS19F7ry4ZCscJeVxAHgZGWEXgstuKfGsZ5wmvkvXy3Lvy9WT2qp1YrckyYGvamVd3Kv",
  "key36": "5nw2DMxBpmm6qkC89CGu8kiJA4vQDojw88JC9UJjuvtqmukMKyBAsZTvvCeb28QYdE7jhRfqMjB2ZRGd5jPSgTgK",
  "key37": "5PX4yvBShmhgR3Ez2wMib3sf9iJpdarMucYLwC61MJewpgh8HXimnhbo3wHZFcNJRd3Wr25eLcXU12DBdhFkH9DW",
  "key38": "4vcPBb6HSzp2zAcHLDuBsvG3miusDomSJiLgha1uxh2isrQa9XBwYrRrGsz3TBQYg7GWYTDyBq7ibNUFBy4tQq28",
  "key39": "2qCuw3ArQADU8sSbL18KGzs1B9NxCqxYyGyC3hiiogF5m9LP6m51LHg55UQMt99jvbDAfan7T2DGRUWoJbWzWeJo",
  "key40": "5tdc91Phue6DvP9CXumh79pUq23JoAAMRzwmzVDKRmURsGT8oHhTRKexBganhJMAjJAVz3BDJaqgHNGJymiFouLx",
  "key41": "5hmc6YNUktexvdSyYJq5XEfDzhye55PJ4H2Qy87c9VKZXmtCDzfPMxd9ELxZV1xekooGrzp8AQT2VB4hNim2UeMx"
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
