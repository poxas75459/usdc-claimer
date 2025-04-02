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
    "5C1fYdDkgqk92UXeyunS37uN9V39WCbK93PtGxhQGbfCBcREBBivFuQPgW5gwuSsDypTB6FovizUjA25NLtG1TqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mjmpyf8JkVrzikvGJ3phjj4ZbSUyzZ6EV2QhRsyN9cPM8yDia9GJ3wS9HSLLPJnhMqrAzYxhDbURT8vMBfWkNja",
  "key1": "43hzSUU49WFYDBuxGeQpnNtLosMwda4dpLXU4WYtAuXWuynui9Bx9jy28xzbJhgc5jKpqXdN9jPDcQCvyJxYiM7g",
  "key2": "5rUXXqbanDHhmCM7dQAG3TVbzYwEFfw6FhWhUBpxMsfA1wAAZUzgEr37H9GaAvPKSffvYYaqRaq8AqTJueF3zP8g",
  "key3": "5h5Hnv986AXdg1Ymu1G89tVLGVBrHpBVaHvZp6EdsNNQmRdeWJpQZWVZ82LtCpYvZLGhzLRSsrNGtrPqEH8Q2NWV",
  "key4": "5cDkp6petbwGnFUTbzWJ4q6PxgRC6BqpBwC8L1WVeRPx1oFAdaRGR6uzYsVZ12ourq1DczBh9XhaSTm4PDN6rA8n",
  "key5": "3US2CRQoS5RyrwfoKggKU6i78CoCR9UGBH15s2Jqjf3LoGfoZ8L1YtqPKVSNXJKx6kJjVQDxZj15Suw9RKvH4si4",
  "key6": "qC17gYQFwg2Uyyq4urkGUT2r7XdxQfR312FpJUNpCC8yBpLXvuHFDV36u3VJw8u8ETJRCt92e76s4bGA67o3GgP",
  "key7": "RCx9bzVK1wuvRUcEoZCXPTFzbUHF8CLCd6ZtjZsQh45z9hWAjwqScn1mz1z7TP6c4LbgR863P6NekpbHimK17Bb",
  "key8": "5wTNx3koHJRbkj6fDV6invfPqkXiNTiWYBkXhgnbCMc4mePCEJ6PjboPFQ8tAbStG3A9n3Y8grQWMnZQnSSWsS56",
  "key9": "5RgzYqxTCDqXby2wcgsWtvHmazXcXWsVgNQepbe13XPxfYeUbQcYJSYtWvHvDNJ4paXnc4MKxzMPgmbdKSwXmryx",
  "key10": "536MhQFnXbgVbBr5Fr2gf24nbxmfp5nuxhhWiEnkHC5kEwhtAkPNNZeEHnMqHkhcZTGh56Y4CVSYNVYRaVLYVrvV",
  "key11": "pmVg9ThRw6Ay9HKYjU1RiJCdb4R4mWYW7JB9XkrxKE1K2wShnJaBDyn8X99ZuQWZDwBErMzffAmg3YeoBcyNKD7",
  "key12": "aHF62sJAN8WF5uyPMfioGWUVivtrKShq2UVhJfS5WQHFYL9vL4aa84mFx25qrN1TgH7Q3Fji5TxSMtoUt91gMqC",
  "key13": "2Q8UAXKNo8j9m6k8cFUmPjfK9DRD2UjHTwvcJLHnmduyMurdgfhbSSJKdokXjUxQh3wGDdRSvieDnUpbFuBxQDFn",
  "key14": "SHSsAeBPHb1oMK4Jmyrt4m73RY8t8dRQgLiQbM6qjicumeLWPNgzNZB2oVgJC61bHNVWtiWxubpsAW1L273boZR",
  "key15": "5F3NfUNj95X63CFF1CHWDdToK29sUVs2aYV1uGorgZSL46U5HD3SAGWXcT6jC48WdfYTw3qe3mvzzd7KTWFEVxaK",
  "key16": "2HYQaVgM9PuAAVydMHAUbH25tTFvfPeXjyVT8Dmj74eDbBcb9AkH7n71LPyDJRMMGdncKk66LSD8UQsAxhRrMhj2",
  "key17": "2N3aqqMzZM6C59BE4XPDkmfpFLzqJjXQruBaSpotNvpr9RqhEDToebUkAVLLJEMUpDDKpf5UpvWcQrRPqZCsuceJ",
  "key18": "45pt8DZWdZ8qruAL29mBNrifzvjBh7vX7RED9dfMT5EmBVfqyTMr4WuSQUYHq9JVaJmNCZKT214LWyQzkBEcUhDR",
  "key19": "4zDjU1AA78MSNzJEiRHoRaQpftK3muTCTerNXYCsm6cA4dCU2ma6CcDPhCcWKdbH69FGXMCKmSGnezd6RWn4W7wp",
  "key20": "8Knuq7KezyUUmPBmhJ1tuYXCydrxXQ5xfc2ZKtrm77omfGyg23UN3GGUnetgmZSnknL9ur9iyfXrWF85MKz5AAV",
  "key21": "tQCsZbx14oUgpzbKmAWweWHafAwukZVj4B6GGTYRJn4Ps9zrkTzCwZCoc4UAXibjCsJPHgMsFdcTe4DeQC2rjBv",
  "key22": "4LYPjE6rWxJBnJMUTeqqec2Ud9JEdBGxiwVEHZxDsp28mxDzKYo29t1vviJ9QdvbKNmT4bEBY3upGmnQnzWuscTd",
  "key23": "22yQSLtTpmQRWFbrw9iyVvHtzzRcNgkDHSihRPXbFo2ys1J8NyySvyn8u6WFQNcSWpX2m6H5D2WN9ZxAejdbRvyR",
  "key24": "5Ac1rLGzpYEpPVRbKuBwXGSr9RidgpaCc2gLeXis7CciLG1rXmDwKgg8jUooEnzEYJ8LK5VTnhsySgXzGE4W5qT9",
  "key25": "34z2PqWFF4xWabuExgA9dTZ36ffN9sEeA7HZFQtmHSPQb2YUygnsmBWgkUVGqmVSruX955aEAAoMRa6ZpoMDgDo7",
  "key26": "uWjULoWzHFhs232uMF7ybeQh6GFtF6pM6gLJSUPeUYzX6ytDMkxQjJFb9KN2T5dkQmy7atfFYLt8hdMvoKrB9rD",
  "key27": "5wx6uW3bjbsS3qu2t81SA2QNn15pymjX27SibHxNYajbgrNrqU25DToRR9D5HM6jyxEdWMMTkJefWCaqT5Fjwrja",
  "key28": "3QoYYYpaHQ21Z3UvLhdm11f7ZnAERiHQ462JV6SQn8PXVJxXSveDCQuEWjpuM6SgbVTCHzW2VAc6uDbk6afQokfM",
  "key29": "5HzjpjC3m2CAL6FcXNbBMmvwWi5DokKFiAh8czPBirqwoVyK5sMGDAhfdoy1tJ2RRWNtytGXgLarsMpAG2dNe22t",
  "key30": "2xxBmCzWdmG1Sg6WYG9no6ERGRCSR21byDPqsYGQJ5xczq7BBb3pZhfuNeFQoXFtc8rHPpSCwerKf37ETpmudkN",
  "key31": "5smRfM5LadbY1AL1WGY4wNHCkySGXGt8bX3vZAv6wMQwbSgUfDAeMJBKKjRxQY8R24yb51yUwbexD41joeTepkHN",
  "key32": "65hH3d2cEEFEboXaf7qmadgiQbYRpeJk8719DXvRCwmXPHT7qStwsBD66TsHzmHQFnAbUUpu27w9rxSTxjmB9ftG",
  "key33": "4ZK135khmVbmjZkLLwxwXoceGnWLEvanic7Rm3WCQgN9uRtaK2qfBRovovto28fRPhwXVUvBJyk4cr9CaAusCqs1"
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
