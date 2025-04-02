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
    "5JzStQ9yYUuEtX1FwWgwJLeMxr9tNEyHRvqFdb4oTrgaLxp9tKRCuMHpL65LMpajjweAN9VF7wqkavatHRWoE1Hh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TGz8SaS4YDhzpKUd6GXAEUxgZvvgi99rQ6Lj3i4vjFQkL1r2GntNVKWbU5snVktygjKDkePaT8EkEVHPd9WrGA2",
  "key1": "2bZTfPV4Xf4QzsBS8KFCvVNzbhv9F1CSHvB6J7JgDhNCFCUKDfjwmgumhdjwrJETjUcgL4HFW4vLXYpfpfzdmtKn",
  "key2": "2txBisf95TFgJnBhKo7ataLtKrAcZS5rTqZR4Je4DxDQHRZtnwUWRekSxwu97rfUZHQW6XPxh6vdDWR53yC3CCkh",
  "key3": "5gPBkHdfbhEnWQcZimWEAjmxECCDka8r5n6JRBWAj77BH5wE2rsSqEzssSqXMB9NQmzFXMwMqJM19r7U8ET1PZUf",
  "key4": "3Js7QK2FaQaLDHafBKuWsmhaEAEoTCssLLRSxivkz3LzgdZdX5D9fbo2qwqLorfoSamkgkjVqdaC1Ndpo5jpkK9Q",
  "key5": "36BfixZaPQvbnuo86jfrCvZzSGTg1m4K4kTkpNeNiq8SeZ3v29S7K46oP772VSQdqaYyYhta136vnSHF2wo4XZdj",
  "key6": "2BHkobkpif6whULzuQUsFtCSXnEsFLw5sMzC1gu4PkKMFwJxX9g4jmb456vqizSqfcyv7Smvc43jyiTqndpXJQCm",
  "key7": "4ByV67rGkb9eN1aS6M42mTwYkTXEyxW5TR1sgsoxb4ecH46rPDvdh8cJh5FuGLxTgXQQXo8w3apkcsX5LqeYAdgZ",
  "key8": "4t1o8tVsJnURzewq26B71bx2YvTBLcXzqKmbxvFZSwxzzUGXfL7p46YSF6HFVdSUhGGN4oNW3HtDfw9MLFnSvr3",
  "key9": "5QYfYAij5Dvb4hFteY6vkpNnqAcN5FABcyoDRBjSRrptXy4PrZVzQBSjpWJmdTYV4YKFA7xvvAB5rUWgU3Ns6XAe",
  "key10": "3UtNbvaxfgXGkVWixDz3xgzKZ3qdYXYPBCELU7xz2WSLH2ph6xQDfLcSbQs8DQf21Qe2CGChYMogrqTGjDjSGGzQ",
  "key11": "G8VZqUDkRovMRkzEXoRNDX5WsSjurPFMPqnJ5BvW6WcueBPxQj8vZKXynsCxHnt6uo9PLRtfUZLnmPHzSQGVw12",
  "key12": "3E1ahkLydqUMeciy4hB5Y2A6p4tKaVFRPrFsztNCuPFbDuHKj3rkbLd7ZPDs9bJSah3zniAwMTNHdGsazUEbJFmy",
  "key13": "5fm9oxkqWFXStUCkDgS39vD9Fj4Z85Hs12unVP5quRoVnadzsfYgh3twMGSvfpGxkRJF4DTG3fNhPUbzdxw58ykh",
  "key14": "EAe7bB8LFwuReLvJSQDBTCPyPU65JNFuD5rnYY48PFFKBsX8Jn6r1uphMfXTVcsLFukRgx18e5XHq7drkPNJtkx",
  "key15": "59KLUKvyMhShzF5zTFzQAPYPYiMKBiadQkfiAL7UBa8dRZRVnx7QQpz11o3A1gTJd7WzjJb7twbgVGPu1iDBwUyT",
  "key16": "426UQPioMuaZKBsPsJHrAB7isPhqCrgoj8xutjr5c9Z9Qv2W1DTbonRcFLK2PZuJ4NosHkYCmtQedxCkJCcs1gLd",
  "key17": "41e5RBynhsoqr8vukGqKhP9Avyuu69jtjzTbH6YRpdTPUvgEMnnTvUqadcTrLzx8sf9U9wrkfiibX5yA2pCFpA2B",
  "key18": "y1ZR1R14VG46At7S1QxrEysb7zmq8wducMmCvfpNFtD1PCDRDuEafABZ9jGAok6hwVGL5zYDsbjMPFYrktDxDdV",
  "key19": "2SVYD4D8SuK3dk1CpVdMXUUopD1eaHqtkA3puDbRDMdVXryku7rx5WBzKV6dCq7WvNWFPffVxZrTdcJC3q3XgdyR",
  "key20": "5dAb2n8mkqXv2KEXnqMbYGVybu5NZxkZm2W3tpGRoHs7YUkvvoqmG8PXqQ3JBpLSdw2REHtTQPjBj1PxV3yFUWoX",
  "key21": "2HcjcHUZ2RcVaP7ETpDbxafwCBPD3V2PURJ9TgJJX6dtZqRcSQ5QcMqB19sg4YZGDNJBKM5yCEFguPzQ3oJpXNz2",
  "key22": "2MjNMFMAmnQhb9AuGvmF9vaAXDqXjew7fVKZu2zGVHv2ReXSSFZ5cxEHJBASJQbmNUNAqPTFzvSTKmh6A1EnSL1i",
  "key23": "4Bvx4363aqCY2Pagxgvn5vEAa1M372QzWb8N3DvQr6QpvJoemQJT57mzZJuLLY65qZj3vTFebZbQTcidXTPgCoBB",
  "key24": "5oqJJ7o4xfz1wP5WPAEtqyjuzTnQF24KkGYbBnnLZ8XqKJKC2TNN6XVxhKB7pV4akWtQFoq1EHU8B4836kyGN8Vz",
  "key25": "3urq66TtJ7VVKsvYAvMyG644kruuo3KktvuDPS35HSaw95MUZyiXkp4ZWZu1ZCmK5UgfKmmyCodJc3XxBMxdMgHD",
  "key26": "4ZmPZZDCPymhzWJtwB9pMAxu62dr8iLAYD9A8JD1EGSVceeS92cQLWZ9UAXfGxtKodXRPTwpB7LQvfMXe6embqcX",
  "key27": "4VijdrxspuZm7VAAJ2QWf89REkRFGvbBDU91xAnGVpNAi4abkxLcUrCGo1y4JQgZvwMfEqPNnoon6DgYi3R9bHqL",
  "key28": "2yKbHskCRtXe1SXg1BQF7NknW3GgZ6LXr34MhWCite2M7LQtuU4oTgvhTE8eqa5BN81VRwk68Vm5a2GQRcrqgcbg",
  "key29": "VR4tdagG2TdP2Rnkc2NtvLrYPy1b9WycAo44YTEjmYK1dMkZnD6zwpHE6BYCDNHCoNN1HcEHf2G9KesasS5wjLy",
  "key30": "SeR7NC1mHAoJcG9EnViz46xQbHSfdNAxxU5g4eHJfiaJ3XrPkmu9yxDLC3asYbD6gVggxS7hapVbZU4KL7jmjtx",
  "key31": "3xYUXDmoZMm3JpFWxVjcM3t2Wof42Ri4tTSey3zH8bV4WM2XD4LinRuYe823rVno1fYThMpnvDP1vURFa9s1sytn",
  "key32": "3KyBHAnU86pRcMmtYqSF5vjsaTqWzS8gWcdaK3ucy4fFVsYLMXLNhgFQkRw1nR4835Lm5kUc5L88dteyFqQzjnLC",
  "key33": "5xkgr8J6S1SCKKPmJHgQEiagg6B5yPuERYgxkY2WgeiuSV6eSssvYBfG1LH1xzN1SKkVu2bvB6dyekfVhx7Las6d",
  "key34": "4RfRjGGcvoUKnfijD5jdfeeAW2QK637tSr5C2xotzVVi6VPFji22UY7vdkYVtR9FGBkEPfAz5QZFLMwZJYXWj73d"
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
