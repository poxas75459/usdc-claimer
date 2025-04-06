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
    "pPRE9DqJL8erGfc62E2L6ayMMkaPHzpRS58CE2WexRsscXAFx9FJ8Ldj5W99UUoFhnwmfxzA4mn13bw7hnPRVTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TgFopXwtkKykQfihQY8A23D9gunee4QwhkFaGN3HJ5VBGhC4GtoCUyEPkzBFNWDJKAx7aZVur35JpkJBQPcWo4z",
  "key1": "YfijT9PRNoQ3Jhcp9WYvs5KK1pXsQuJCECP5WNLF8Xe1nGSrHqDRqhUK2iExWDMoT8bhjzdW8GWuMKRf34D5qUB",
  "key2": "3jgSzjd1NYASUudB4mUsqjBaH98ifq81T6WpdBkrcoj9C38qQCkoMdetooxGEMP7VkpcVYfCLvEaAzkJ2isrfCkb",
  "key3": "MBpQJaYc11bYMZPmMwUaV4vamFBDdbAXxhy9EivTFueLuuUFUNUhDAS3GjD5SMGjoQLA8x5hVq7HqcrB4nKNZ65",
  "key4": "4s3H5UzDoH5jnWHc5rQAqBRoduGkxR7sA17SW8VaBvSbmVYweHzG6gdVrxSJbKyX7b7Xqf8WUCG5koKPWMTZvvG7",
  "key5": "3nUTzhkEfE9bhd4gp29pjp3UHhm9dmxnCWfHDSJeHypVb9qgcxW5m9HXoqRban6NsLJy7AmMbEUGwMXJ3PgYijCJ",
  "key6": "3D6RxBh3tST7peAZ7usjfxzd9L3kAvQSzNzt3Ft4coHdXiNTaihDxrxkWgosam89jt661wh5VPQPochf9guxG6a3",
  "key7": "4EPhiVzegi9hFpcwGjyUZRZTEjJaDnAsMAC2kvgnvhpkgw6hSiQooMeWrYQmRWnm1EYC3GTLMQa5xB8jnfhi34j",
  "key8": "5q4cVaNyjGCw9RcYa17WpVtoYvntdkejMTqWC2eJd3FGQ9AJDGK72jGcNzDw3jSMiEcJMUFbiX6QFVMxpNtVzUeh",
  "key9": "5u9Ln5m1MJ7ZnEjS4N2k81mkQjZ3WNgtoMNB8mZFvFycUVajCF9cNRj4zDXWDrLhNLoc65Y5a4nNAzVZSACrjQra",
  "key10": "3Vy9oWEPSwysHioAa57nAcSjKvJMxpUoQYMhTFUTSMBhBTf7suRnYdiDkHRmLuQb8VARQCBPreNiURzZMQnZoRYu",
  "key11": "otkNApSpr7snHygyyLeYViwnWjftxkCZBf4JnRQZVrYBPmV4XYM1GWsWECz4WgLpMYnDKJEs3kadEZJTgkKKMjW",
  "key12": "3DiUA7qvctTCHvUHZ5UNaUodeR4StgnEUxm3NqKNzajPQcBdqNo45e78Xxr9mGVL3KvGJQA6Em21EB6KEDq3eWVN",
  "key13": "3fBCMfVpq25etso5SsdBsCQoXzUEvTE1djW3jfn3zL9de75nv7Z6XzFtJkmFW8yMQndaf9rM4uA2fWoQdMYVTjHd",
  "key14": "2GCNkqZeCP4k63KpKnr2heek8X99NFgpNEJJF6q129EU7PTygtvjCd2tajtuYtpZrF1tsyo5Z8Q8HmRbSC1xNdWy",
  "key15": "5kNeLEzYnHbTVDqhtKZpF71XKJoaWo1k6W95hBE1nJg62NregG1cDU9kauMJfYytqcSwZGT8oyrWPpheT3godWJi",
  "key16": "2G7EGzua96DVaPtr3WufaCzYq81f9B23e4DrxWfqCpRvV82gfQUFGJwKAqFmjFACewZc2biZBgcGPTNrDgtFubLZ",
  "key17": "2A9QjLj9wNBudmBq24QhYLccX6exo1DHqxdjCWJnyPwLVfugW1X1P7Z7yNCDYRprVcc1nyuBd272GRYzbLJA2wEL",
  "key18": "2565byVhmFzCwntbxqLKymRq46Dx6cPfApU4T5USSe2au6XpCWm8vUWBMcoqGUZKD2hS234D96uhWZvpXA1bah8n",
  "key19": "kqCk1TDU4A24DxLYvxhyug6CZ1PhBFwa8dBzA6UAdvzf2iFqgLSxpAYpXVc5jYMT5iLtXL7bxXj4fDXfnwZeGXR",
  "key20": "5gHbJs74Axmvptb7CF2ZPeuvDUYUtrA6ipSqxYQXzR5KQUDSMpNwLHjZSvdpW4t4jQ8AuynSFdPs5LPJcisXpNM7",
  "key21": "y6fMfLh9xCDGRDfKAZknfCzxbgxwXyJ2b3StCpdE6hQjPM2LkbDH2mKRLrLwUB93pHoS3fo97WdmM82dq4W1etT",
  "key22": "H6jZwgtwLazabRBqY5FJc6beE6Rd7rDNqymcWzKf5wDXgEvJCVdfvqwjx4BJdvdSKtpqDP9wm3ypo8Jee8Ztjk5",
  "key23": "536EAaZosjhRE9WbfC93TrH47gge7M9SNKqNmXDSD3tm8hc2Lq3HziVWrS1FZrENxJHZ4tSgChwjnYxkUh3paqwD",
  "key24": "2E1YjZoh6edB9zmMX2XARCN1acTfqWqP41Bosvz4a5Ve9pBDkfDa3FkEu8HfNbiBZ8dKVkLLbRpQio3oKeQqFVr2",
  "key25": "3V1UX7HcZN61bWnMqqZksptpVLW1G1Q6QZGP375zQhq7xk5Hr5khGozap9PvQfCxLtjpXYWZGXuTk6dzQvy9rXsm",
  "key26": "5qRfhTQXVGjdZowkx7KJye81RTqeBTkgKT45THmVEUTqMYYuFRDJFs9rLPfuKCfN3kSR34tyYswdBHFL9xe4XNd8",
  "key27": "3zLZGdLbNLcVpKxTaLcAMjJEAgqefchPgr95zFXn9n2ehvtcggxrXzfJxg56xvFSv5Lf9tVLaNY59zLXUTcf83SD",
  "key28": "42nJmQh6im2kVqrKAowTbALdddvA1bNEuQmye8KKSyYkgCgrwvMaF4ByoAXU9hEJrP48Rw8pjfggLA9dPzwW6WHR",
  "key29": "ifZdRUiTzZZGumtVq34nEu972qJ8hd5W3oJsymbN66R8RxDCg1fpt4CHcgazy8rhBCeSwM6X4VgGVQcTEWiNuNo",
  "key30": "2jkPzByscLEdjXXYxWgWrAq58PMCayPAz1msAUvqzCVQhB3DL5yrbTeo2FUC9siBjqusXqSsty5hnDm63pfenU2t",
  "key31": "3Egouy3pSMtce9ton1pcuLomTu67zeJufDrZeuKVccMjvEsMLujpsCaXoqvTL1oXd8uSoFoYm3t7t52rwceha81q",
  "key32": "4L9edW1g26qHUjc75BE72uytgVaMGzSvi6fMjy4qtmT5aVYxc2H956NnvYaC9zWtKsD5d12AB2y54ynjnFEXzdoD",
  "key33": "JHfcoEfDXKyxTz8URsPwN5uTdg1c1KNxGb3GHUC5B5kD9945ac1JwNWPZdkxfG9Tuui5YoHefetsnbbcGe3syn7",
  "key34": "zDKGytH7c2RtSzRaipbcFif6bkTamnsDVKarfNkTNPSWJRdUw5Squg52sY8CM14t6mQb3Q3iUsa2ns8epsEqZ5T",
  "key35": "3Tz1fdrdKfo8VZGdts2uVLjbBcRHRKvNodcG6muq9GwfRKxr8tKu93UM5jT1TdHj5DfL4BpRGfiwQ3PQfdJQh6D6",
  "key36": "4RnyRzN3Mr965bcpaJcdDdtxBFcVqHaQYV9aizykcoKtAqd4zfYZpjAHy56VGdsYJti9fMFPc5BkJ81wgoMDWsY",
  "key37": "59cFt3pny6aD1w3MwLqxopGurN5UXuFV9KVxzoVPzUxTM6ijZ6i49nZ3xchPsLjLwDZZxWuxRgmX1pbivYS3kRey",
  "key38": "2RrW7ZK3QcQoLVCN8uJxxrSrajxQxq1q4goz4kYJxaDQew5gTEBzYMvaVLyK75MEHpYLhQmdwshjpQ3JUhQtiiyJ",
  "key39": "4cMfZQQkLxANu6bkLfc2CsUWaR4FnnUYMxPECdryJxXR5BpfPTjkQoud8Xm66KtbmFyXCArXXcyb9gJubvJLgdrH",
  "key40": "4ZgQceLJD9YTUhoqyxBFPV4LqLhkUiyyYFA3no1w3Vr5Fs3ppn5LkCicE3rJJZ7PEV8uJCH9rFMDHYFEJAFBkAri",
  "key41": "3vPs5nMyAjtqZ9ysvmcU7u7vmey71ab9F2G4WjB5iYGL8MDNiJJXJpt1ad8Syry1tcYS6WrRYbqyZQyU67yuHWcs",
  "key42": "21GNVgUa1RdP1QPXKerM33j6tSxmTvuv9NFWdy9XRWaKnEoTXfbhgfgBMb3Hi8HYzyUpkSPSPtXtAJtD7rXhV8r6",
  "key43": "2VxwsyBmSbtwSgyB8C65N6ptGJxyZfBqR53FtJpfNZmTKxsagEdVGMqRGNDM9CuvBe56nyY7CMZF5B19svHw3EP2",
  "key44": "4fD7Pi3WRFKqXrFb9ny782CsBffN4gEuexAFcTgHa4TwTFZ1ztjDEG2ExtqEvZPj6F4NobteMTNY1xcKcZ6ikxYV"
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
