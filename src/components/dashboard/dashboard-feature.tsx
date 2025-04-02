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
    "PT3LUBuB7FR3ngJ8Vpdy8L1KPegkano3jg4PCE22kFeacUDdnwbw699vFCHhcArVpS14b2dzh3sytpCdU93NRQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gR6acn3GAKk9pYt88Ch7SXxXQBbmHXhvrMpcn2qL9yeYakR2LZFevN4AWCAt8Wys5z2cvQdVDna3ocwd7CJuGBv",
  "key1": "3mVZui9weZUATyzrt4uhz1nUnNcBvaxKS2WsGoMY1XBnyf18ooLkCB6vbBxQXkx8NTyz9TiMCLQaTbu7rPxgAyUB",
  "key2": "5hQsakawq5NDjTTvhHrrxug8bYEUqr1vb8KfHrGsQpmCTYii5LKNXK4fkacuNkbN5F9vPT41cmG6hHTtL9zMKRy5",
  "key3": "4xLXWQrdMrEDQJnjyaBQJ19CNQp2Xw6tUKy4YjDsSX5Hf7gBEJTc3PbX7MP5DDVibBsAMHZjt23ZaGqXo7eiPj4t",
  "key4": "3r365WotRnjw33MSfLwyJh7j7avRHYZ5LqW5oHM7fRKJRoqCft7mDWjGXHiKfZNksAXNoJvjBQahseePzhFQZNJD",
  "key5": "Kd92H7m4uzzGSR85p86SfLqeQYHU5J2oipLDphZmVmjg3xcu7XjxSxGsoXK49i1JNPeKvd7oAkbr6L5Dy97aVhf",
  "key6": "5rzdk3wdxhC1sw4p1LRkYga6YwVVmXkpFc5oyc5VL8UmCVYU3QQVGu19LgZAeCwiqSRPyUWc3GBRAoAghyij6Zyy",
  "key7": "3qdtnWJShzsAJnBAgbV3DEchCEfiWgtJ4M8BuoQdqAJFcFwLus6QVRX99nwbwkKzupkbiQf9y1eQxcurvbLefyT9",
  "key8": "5zRmG626gyNw6n3PhLU7s4b3ugW7u3gqT7wXrPFdVGDahd6tNUxmYKAVqZCp2kcK4uj7rv3p9LbTs3ZkSNov9piP",
  "key9": "4KAAmAcjC9d1s6tg9FRmVNJs4Wsm18Ngbcbzpj4yB1p4xrHyjzm5B6TgJQ8aQ1pFboxp5pAswfsomhLiFikbJd5Y",
  "key10": "nnuNWLiafo671zHeQKJAFhtWGhiw3PBrGjoPxpTAcJ6RCQFX6rtt4dzc8xTa2gAf5qPHt4mRWnPi533fHEfSp3S",
  "key11": "ib5WLgXh6or5RPUnbeYMzUHYQHcrxUp4bkH4S2gDTgSRLFhhphKVB22qG3BT1aYbyYxcu9z3o7Yz6oyvD86Vnn5",
  "key12": "4Db9Q5EqQuXseEUgoqVY9CHDc4eSqXEmxt7BtwYCEv6vbGMMzXGu3k24Eny6Cjx7eZuQFTuokFRZgKgNY63yKr5z",
  "key13": "5h6XFSbfMDXDopmpVcvTxRo9x9wpjijob2dvbvrgbvB2U6MU3waWkLVWDoyVi8Y9kSyRH979Qdrv1MpfYdz5qW4i",
  "key14": "2ioRf2SbquH3BYGh2Cmp49L4SQtUYpUvQ8Vmxio8SfXhCqKfXfW8RZWSXZ4QESZqvhQE1MqiH9N5kZrP7aZd2tC7",
  "key15": "nxA4bANuUHdYNjDJhdryMZBwEnazBZnBXDacgNdGis3oC4ttQybpKtRL53PRA2C1V9tnm25RmUb6iMZa48iN5dp",
  "key16": "PHPjWirAQp8TrQV1rs72YkC7cnSWBitLpSJZ24A2JVxqQdQs4ERt98LAxamNhTtYLYvbpEWkQYX5kA4piczBmWL",
  "key17": "2hMk6ecLAuCA3jpq4f2SJWt23aRpyNbQnDsmYqFNnxTaJCCGsYRGuwbRxLSfM8Af8fo1toDCGEzs1hEaGgfqigoW",
  "key18": "44ge1Ar9SVdFNpVza6dF7dgdmnTAeFZAnJEG1hNUzTbFRYc1MtCaWTUvzGWSe1JpCbeA9LPcyfj8gfK6XaCtSrNq",
  "key19": "3jheNzFUbMC8PyK7nxj5aN4LQSH4MYR5nw8TDQJC9HkpyceaCWE5VS64pvj1T9xZNztNhMJujFoHmCK11DYkBgSa",
  "key20": "3nhD5QNBfXVxS3JSgD1pkeYsqwwpCsqaQE4MTV1hAgt8xXw9Ne88FfEJngNi9CPL7XGKEtnpPuSardw8atYf8bvT",
  "key21": "3dL3qzm2YDUPA1VZZpet9vi2RL36RPjGnb7pB4fb9MErQcx57T2sHcrDHHapycydJhZLb47EAA2MEdy973NnjqVJ",
  "key22": "5gCeQzyi2yviPurKx7Dfbty62azC77ixUx9U9uusPZdrnxHANQTPU5V5NRD2EKZ8kpYKhgATmoU4xCNEZNXZ9swC",
  "key23": "YVeVWMcQfCWV7NUKLr4zYs5SPuqeDrv19iQmshZWTTpnmDSsXsC453BGm7NJgrtP1KTmrWfRQ19r4dKpkP24SdU",
  "key24": "2sngv2pC1DpQ5s44WVYjwhS1zQ21YhCcu3VVUtMnJKebGJ6nyx8WDV9XbN16GeryFMcpooMhXFnrbegqHnt9yz6Y",
  "key25": "4EDp4sNxHbAZQAwLVRiN2z42JVjEJZLeZyDXiYr9sUNKi43RGmvrL59dC8zo2LdJhhH8rD9o8s2QDzxrQFxs8iNa",
  "key26": "4ULTXKdo3KdaXiXxwqvMMVi8ebJzVJVzRhE8DK8xSy3qckw5G8a9k1RBHFsjEW4tW7EfktnzWdShb5b8hpXufsGV",
  "key27": "4ts8wCKqHd6r7QDnjRyVHNVSGqGG9k6ZmfHzBvdF8fzfTrw6WyZ51xniVSeCK1gHNfA1GV6zNdYAb2dsmWBWWq48",
  "key28": "syaAsUPuksiUqVETBLzDTzUhRibUm5dqXPrbPv4C58dtF2K6JxQx4xeHkB3Z5gGtSYvjjZcm6k3Uou3TkkzFRDr",
  "key29": "3oS7nxGKvxz3wjvPjPrgKnLds8h83PqpYYJDxoaw2eTUd1JXkyrgb4jRA3vRABuriUkkERWfrTJw93P2Z2SVHC2Y",
  "key30": "5FG5MmszBRhMEYMQihGncYqwBXmZh23KLo9USefp2XeBa86tQnVKmXUbwZEufXjjPyT8Qww7Ujd272LZhqrwUNoH",
  "key31": "3zETHhGk38xEdanW1jkANAtCKN5LC1moPG885a162e6vAsRkeJFU4CxfjEd9qq5anghRA3iN4zLwSqg44ZXeitBg",
  "key32": "5mmbuCWvB5hh3ssGf77ykRifPyihJUv4zfY9VofvNPMcUukUSEBVuXcLj7LSZTqxvKcDwQ8BeGgu8h27XMEQikoL",
  "key33": "27CpAWWWrFFSaZThXSQQfwDKraK6qCaxRuxes3HZc8m8NnMynzeUtKwpjr2hKbk5Gtkw3JDrstQS8ZX2ePCgNNWq",
  "key34": "57vBWGaZ6DrUvrx6gnsMQpfthPfkAq7zjvziFLwuuGSMdNqxwBP51t2uGj9x4aBkqs9wVvGWK2rYg3HZnicqJgZz",
  "key35": "44WTJKLujSNxUd3rhr52UqiNJoQ4ufN4mFyc5ebdngM5nFM53RyL8WuTjzR8yFHfd8fwT4pzjfM7Bj9Z3B5o7Stz",
  "key36": "5SFFbSEXNkXxEhPSncqwDd95URtxEiKbxpUy43ksmiCJ1cFQSaGT6w19zc4VyCZ9LHuzD1AymdgjPW2NU1xNaQEt",
  "key37": "2tYbB7DG1YYGrYDH4uF6J9bu1uqm8K3cjAtsGWQvB5gU6C95JF2MktNeeVsgow1n2mvW5phAh1sygV3nmCFJYWDt",
  "key38": "5itaxdM9S27FaDYrNWsXz7cr3zYtVvfcnSAKvDzt59pHtAJr56J8eHtfedQTvDgMQUbdwN5tCkHu8sGZqpfV5PUB",
  "key39": "3rA3ytXnHaobWa2Zvgw6PScSU4QFh3YhHUVqEm1Z1nP8i8sigLWRPY5TDgzRQabZ3D7apTwkqGrTJ8sXmu3D9Q9F",
  "key40": "2oUw4oyQqYwfvpXPLvvzxJzyFMA2WGe5XNmEXUDuuf35wjnTwhmfXhxiDdq2WMVX2wceR1HrrJeizjq6SP2NnLip",
  "key41": "iDEuefs6dRovRg7uWi8jAxrAR4ky3LPd3iy6WfAmoQE6kRNvWSkpKgFcFkttKU2TuPePx7DwYzrSGCBRQjfVs8X"
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
