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
    "5WPM1E1FQ6bN9k7ktpWPQXhtkQDyPbBV2baqPhDYc7srRtzwbcyRbc8xPoa9fUqfzZe72D7FdDiGV5t5z2mEn5Dc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UDRWTZ56V2NRPZ673sfzUVWi8cjcr2gpFyazVAxFmVNinLY6HvWApHw7tCJXiwGnAQaHLdkYHYRTBg2qwrdH6XM",
  "key1": "3wXWz1J3ARYSesiUDGNiDvcpS3WMdFKwLr2K31FygnsZApyicchJ8GzE4ABWqaJYQbpZJhjjYdUY5utj7gnQj5ot",
  "key2": "4tYc8hR5bEwaMg6TTPpPqDibMPzDaFJcfvUw8JyQtHhmaWuWj9zgX8oNJSLYhm493Kv6WdMiEHA8TZq4X7AxYJtB",
  "key3": "5GHTxJL5UkYdjuoCy8G6qN81WGKU11Sv78RaQjS7KU54Dmwspo6Zt32FjHk9DiK6Lsy7kjvYf6QtzouDk9sUWZMn",
  "key4": "5ryxtEh1482VRUNpYMnzSUDctn3yii4tbd61W2Qz2fHbnXkvXoy7XF3A8rdYL6pTDxBD8J9yxxaGVFk5L6bnreR7",
  "key5": "4vKibHAyu4PxDsrhUaPsxqrsD2k9NkJeXoU5BY83n9oKt7mi2zdL9g2XH53grRhKrFZoYJzZzt8HxLU1BxZWLvbj",
  "key6": "61xiB4YA566gJdsgQCZiBu5xn41QxyQjYXFdiEmyBtkKwMnVnajwx2JaVoEFtchkmXx9UouN4nHCBMpRrUTZanrx",
  "key7": "ciSgZt15uH6rweyghM5c6j1s9bFgLR2zT3zxr2pwRV5U3ufVUyhHZBv28Jzp9rsFsKrgYPtJjE89ZZiifQxqYWj",
  "key8": "sX1L3XrSeQ29reRhDkTQHX5J2kriNvoC29hBiu7GFo5aC7ttLqWfB1ue9RXBqZkEkJRJ5ZofrxkuZvMmtcvSW2W",
  "key9": "4WJEHJZrThqrtLvgtaP4QzSQv85FoS5FSiBZsqKdRM83vyG1zW9SHrDFdeTzgSpfPiDe5d6wPnA9KuDJtPVeSgSQ",
  "key10": "4kiFmLAfFh5HGcsUBvxAUvrCbEZcUgP8JSK2UUMGap92TQHQ77BRwuXR6pApMKjWE8oYUurdLBLnGZGRr5CX5ifa",
  "key11": "53Dqp498B4SBuPYKeebSfppXSrEcRQ6aRCofsNZquvCLZRahiHaaMcAFCNkGM8SNA3wcXjcFkQkxe7TxbwnChkMb",
  "key12": "2Qq8wuBzEAT8HctyhNmb8uJnFWa7R6Fp72Pf3RMbVH7pUUjAcfyPmLGvFRuotNXhCz4xtyVW25EvTGyCQoGy2hnS",
  "key13": "5omwT6rxBKhXofAV3FmH6kuncBT56QpFt9yinPYkHgB5Fx1fwHzBcUR9AvLggSUyyUfK8bWTMJfYe2PcykT2We7L",
  "key14": "59e3d4Fxqujw3bqcb6UPb8hmKcZcLfyr4JWMEzRcKvH2PcQtvHmt9DVu57LayTqkmiZUqrY1HSrhcRq6Cn6WfZaq",
  "key15": "LJR6AV1ELgfSa649K7ycKvkzs7B6VEtSkyAV4F7XtbhDk8sDy5Xs78ePubU4bouVN5ZdvFGTocH9boesSpEnX48",
  "key16": "4qu4cR6gVc4fomArf7qbY1BA1TEQf1RAmctPhoVJMoFXVEFmvQWyLyPwdJQ1mYWydwnNX6f8UJsVzzRtGdGKfYDU",
  "key17": "2LgLoqg2nEKAJaY7dUvx9x1yeQrvJydQF3PcDR6dkY9767wVSbikYNLTcGV87DqQynjDju7KHmEqWpnJfaj4txgf",
  "key18": "5Y65zSiRGA7RjzpH9yZZhGsMP47b8LCbbiarVuhSZVYkgJE6itTVuBCvqDjqTnNoAVdo7dE5Np14u7NmQuRLYAuJ",
  "key19": "hZPZYYtcQy1DDdffG9UNrhqut3mS8QeB4nG1h57AZss6vALe2JKCLKJcqXJnXWaGLmdEhAJ9bfLNAncPLU4HVu2",
  "key20": "2TEHmtEy37XBhbCdcKsiZXF8d7XnQ1uBmwFcSc8YPkJhB1MnKfbGYvbcJWBgZyv4b7Ga5zhSmKX62Mgg4ERdiDpe",
  "key21": "n2FPAQLVTMRuDKwSfYG5hke4ugWEaiTdBsYVDqqPQrX2XJfyPgkzKRXpeGVYCwSooLwQQ3kdE4MrUW1fmE9TrqA",
  "key22": "2njZBGroLMeVSRStUGdddeMw9hAVJStFwjYQfFw51hHnbFp4u7WmPSvW1x4QnHqwxBFpJ4joZ64KKhVummX26u5z",
  "key23": "5e9MqveZ9jsWdzeaMRTL69znH6wWnV6dWrDJdnXAQ9DFb7zkFRbLQB4HgPyHwgi8BsnresvNMDgtMH3gkF5ZcV2r",
  "key24": "3PSHQLwjZHq5HHTtaWhibLzZeJxRzEDyTUkH8kXdcZqeUVJs58VB6J1mCgjrQLVUzcpEwPPNdrWii1wAh8gkYJnu",
  "key25": "3iAHmNuEcwZr8TBAwc9FhQbBdxsy2NetJ2oMwdLmQrjFm48suWRPMe3muwdRo49vXCfZ1enDRPvaTFMGWnHrpuwd",
  "key26": "XLHHnLA9jBteo6DEW4uzjJh64A7jyEvTr8PeWKPJWguKx1a9ZBmtdXoPkVv3VVxzEthGPFcHGV5aMNur3S4CpSg",
  "key27": "5UB3NV9gNy6zKUzTLdjMcQszAi5t2sAYBH2HZMFXDEqnYfQKfseEc15BGXtNSkcnD5Aod18JPC3uvXZ8m2WzAcWP",
  "key28": "3pbLDXfh7Yn1KqcAwvBVfLNJ4sb4PJqhHN5DMzeMK5na5f62WCRncd7rT82Lsc7aph2vvb3gsDgBUwWDcX9yyVPa",
  "key29": "Bwh1vuUEPUSYfVGbh3L69R6ZyviwLGj9X7U5QuKsCLq9KU8NwbYZF1GkXUeqwK6NgvVh728AbbpUgEYYtNrQQWW",
  "key30": "QsBFbDG1MgoXLRkHrKJzxKRLn1ignnw576DGJxokS82QdaUZG4Fn32nPr6SeWxFt13dAZuKgc9Yse84p8jBMFkz",
  "key31": "4mpPkGBQN4RmMSNQk1QXR2UeQiK4fCDcwQMBLbi4CjtKZm9FHUEExhF6Te1Kh4MJoPTctDLtehDiDgsVNWsfJ1Dq",
  "key32": "64bFhiG7D5KQKzHAhwfb2mzvE5SmVGxrZ75RRHL9wZ6JYTuXtqgVvihzwoKRu8MkVwYeCsDfoBpmhqM9X7n6Uirj",
  "key33": "ZyykkLMw1JiJXY7ZqPeRcbJvoBWct6dq4HnX3SZV6amJrBqX8xL21y3uXTpUK3CXPDZFYRAVKTv2AqVL1hteK8C",
  "key34": "55AjLPBPzWrJ27YnhZkVyFsJ1ozXygd3yHZTRgeKAT9Lh8LDqhmAHvtj1Xa6wR5i2zKNBwHqofsCCYaCZgWqZawN",
  "key35": "4qtB6rPcre8SwGTYrMMq4WSwn4iaxu2yrbf4YVj5ZXo6MwTyFZvUR1CePHBtLezWYSHDWycK9H7AbrueqvtUdmrw",
  "key36": "4BGVvzMfj1XeVdW8fjaPr9rarfpEK66149MUGhzvB5RsGLW5424ESBuBVTV3Gpc4jhwpzggYR2qDBXRdtBTHSEby",
  "key37": "276PbDDcNpWuDJBYGrqk6kEcZhi8VQKgtWsEwisYfJmzZF1joJM3KeRZ6iXCLhUk2mTB9qsQdYgko2XYUueNQUhj",
  "key38": "3CRoH4Q7iCBuSGkj33uop822DSA9f775iKX9TH4XV7om9JRWxYVGt3x1itpbGLodjPai8CjmE97qJ8eQW8eEyTXy",
  "key39": "3Fe6D6bF7jrTWHQvnbvqcHDkvTnuc7HuzGuWNh9437gqHkJuMqxeof2uKVZDKVLqcWdjEAiTaFPgvLQXu3XB7aNF",
  "key40": "4r1BX3gvKeUE7R3iRgYuFCpzEEfX3BJbRsB369grREhXdcNYMofcjzwFeNWCgCWdhH6V6ex7by7QbjVZP3kmwvUV",
  "key41": "2wvzhtejWDLGo5gpcsAs8B647yyT9iFyC5m11KziwUiB88CA2C7pL4f8iyPYQ2DEApbtxC89noserBJiF3v6bbXB",
  "key42": "5S3BDpzQNfceRuzVxUh1Z2UDQAGTc6FXkee4eWw5KphdcAA1TdDKbWYrModXRN2tTWceyCtDUXitsR9YeRFunNZf",
  "key43": "3R2J43RX3Rgwd5AcfifGc4FnywGEcSJE2GKAGmhXfbhYhsX6L1pdaAbcPYTTbti7kMHbAzKVXhvUJnV8hgyJG7SE",
  "key44": "4KAns2zhuJzp75yP5JArTWVWaTtGnPxFyLmfEwbiUmR5tua2U45UWL8agbviJHKNt8uBLL3HG3P3cf8Sbs6ERQT",
  "key45": "5iWPWv9CQHC6oeP7ZmsNg7XQUNv1QGPaX4Xs4TPWkPskq4bRNnxcDCYSGjgjqkPpgnJjzwZNF4GPkBgG7ZWHdy21",
  "key46": "4kAjFFsKcbs4NeD4pXSUJDZELy16oQdtPcKGYYiCUt9i5SfT1y8fo5z2DfSDywr1QnmyqjRzR9qDBaUWufoBmX3z",
  "key47": "35C7N8C3uQSxZaqTT6gBxi8eShi96Uv7N9pt9ookXV6TUzab6QzHFZVckGC5EPHQdvoWPpzQqbZyQdEruGX6a6Qz",
  "key48": "5deV78D2rk9bA2SzPDpiKtmZk2MoKhwH39tQetcCSDtfXeVTfrkUxr8qvRiQAnAxqmy5x1bnb4vRz3JY2EWKAwDu",
  "key49": "3wedzJ5mbqZC6ppehDzbnkxBdPa6Ft9BwYPQggvDBgKN2MZ6dipTGtaykVs6GAfmja1wwbyywPjMKC3XjdUSoC6t"
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
