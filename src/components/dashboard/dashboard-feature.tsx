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
    "2MagNeAWTSEzagrTU1PY7zYwxLyqA4PBx3KdkN7EjTswgyRxJwjnLzcGtAkJNgBfNYsgcxqVaw4zpM5EEVobrodM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pfu7TJpnsoSHpiJaw9SpSHdsQZ1j1iMfbJ7mEQtjRSBzk2Y3G9D9M1e9x3Fa66zLKSVcysyxsan5H31VuUSSYWU",
  "key1": "5iy8JTN7cTG7RTqcNEjSKZiSKWtseinD7MQ7Ywg9h656VkZ5XhgrgMyQaBNGRXbUawMPNqhshzQ7tcrCBh92J4cz",
  "key2": "4oPdvDPUrX18XU1y4LptE7GWHiyRJ6bYqAvMmFdLMgsz9bsrmWEVdYSZcRGWTC6pcyHrjwDrDQFB3kbAEeZrpism",
  "key3": "4XpyPhNX1CeYJoYhSXj4FNPqifyeCTnZqXFSnNtbutMb5HKbiDFYXMEBLmAHuK74K3WtucYwmEaaysBSkXxZ2YUE",
  "key4": "2DHoBK33QUeSRUys9ZWS6DiVFqs3ydN162BgHFp1fZ23NnRoFkPYaHtCadQBgRryciNXZdf7Gd53Wnk6toyEbWrX",
  "key5": "4uiv9iNqyzZE46arLoJ3CzSfu7fqzunDGa4VFFVnAckaWtH21V3rqEZ7NRbj3j7SpLsnMUFmt5bHcsCjBpCfwNku",
  "key6": "4nB3TTTdV9dH1DeT1nniRSX7dnQwTuvtDjfR2zwpBSmoSuQLVQWc3QjXWAeb7aiCUdoeP9Fk412Y1ej97kDs9oY",
  "key7": "iybPZk5TswtYYKvFfWRyqew4Ys2idcC2fN4373VuxjCjNw2VbGkMBetoJjHbSbQd2L8FNVqDCF3ArBNhSytJbMu",
  "key8": "4K4PFjeTLXCTfZTXsX119qTSaCUWDgsnH9fVfxaggJ3LeRrCBrz5A5fohgh8oqbh4C6fnyb8gcsEt5hp8JPpRJEh",
  "key9": "28FWSJtGn4iBjSQo2ojTtX6UrpAXMQ1dNqnMKdv4pp7KmCRPHRXdc5sPkXSgMBZ7NCbJkz9FnUfR6sjVd61g5RNm",
  "key10": "3z7zDeNAGveagqeDYou1DeuJTDsKhahawygueSDprbKhVMHD5idjhoLqbUeUiAAwEbeRP9nQfYv2XX9BDm9Gw2wQ",
  "key11": "4KSvehe4zY9DMXv4mQLDAdV67yHdYM7iaomuANi17s1WHfexfbvv3fsdmNrvgprWGP8wtvRH9mbWRP7H6haTneUJ",
  "key12": "39reBjx8AnH6WUYS2o3FfXt5t5uvcgYJTD3yWX1znVEWiSFhUzT1tEbNhEZdhdon9rqkYActWrLxrN4EoswHEWR",
  "key13": "tqg8rgFLSxN4qGqUjU8PrjyTqL2dJeSebX42oYDK6tS25rMFnX86zkmKPw2tSWev6rHJU1rtL3bFAMxxTUuaF2T",
  "key14": "y4jAkCcCwB1bQpHvmRP5VhedA9wBF8wxS8FxaprRUW91xMbZ4XKfvkG63a7j6q4P8q7MB1zXRhUZgy5fcp4zjdo",
  "key15": "31kzFSdVWmWnb231EDdFRkE1vvXXCeYro8uthJhScPVw63iwhEo9NBfnN4rFVePwknx1hAfRze1U57tKS8qwcwNu",
  "key16": "SFz4zDCARCEne91pcZNey4JXRkLp4WxFvwp2XKoYpL1uDp34QqRkfW8K9UC4hk2WCeCYPHjCTZkYjxayMmHjg6X",
  "key17": "2je7MpixvxERFAtVEMBwqGD1Rhf3xx3EaDpg9BVETBaHmq7y3nZFZThcUoMdZvw6jLiCTpauPTN4x72Mj4rYrXtN",
  "key18": "NzY9JG92J5v9G683cxvgB9J3n4xogpjBcygyDq4VJCfJvY45SSyf3SBtHwCqywLnmS6yFrUbbXrjuK9YPiLcpbR",
  "key19": "5u4y1WNHmQofEnVFji1zT1JzzjKXhEp2s8yqJ9o746T3YJQ2orobFUyqqWQTbRMrZGLquZ9nL3WFN5vkS8UyMgrF",
  "key20": "3n6AESi3XxcpndkWTEu7yuJcD3ewVV9V5eHPsVHv8MTGCPKSoC8y3g2DpUjpsFSjiJfbNQzsdkPjmjz6RzjknLYW",
  "key21": "4bfqRyEv5kifeqqrLjtJ23A7292rtQkNfNtBtBruQ7xdgdJEAWzks2XFf9VE9amoejv2RBTXW48G9WzR6Z3T8xxv",
  "key22": "4bAUCaiTPgKiwKV4egSTNDWKXGEeMskfQniya1bbdDGrSTaPRxVK8ryKvvpDo8PDfh4eBb28D2z4Cstc59fYUg3G",
  "key23": "4UNQLhvMQaqoQXijYghFg3fmrmtKMLWpAwCDrd4yi8VhGScmzHKTWctAV1HifF4RcBFRVKkSUBq8rPoK8QNUJBJG",
  "key24": "4yxuGuErZJKEDB6Ly2o2tXCHU8fZUVjtHLfpBnFMEey3eQ4jy4neDf1qkGEirQ7bDTFiSuCNaYcKsnLHnsMXfGDr",
  "key25": "2TdPbXrXKXtAQq8iWmHQCnSUFyuSy6kg7wcYtXC5UQksYZeLhooSeuCeuhVEXqo9ayvtpjcv6Eeqb9vYB2Nwbv2r",
  "key26": "4bvtcbs7wDiQR7YEA9vmPAG6BpqVZSrMpNyn6Z89yfXA6C1Taskf4WKikGcFLP2B5jtSgCaNQmHxgVoNuBmqZtWF",
  "key27": "4KMsf7uxuWAdL96QETK8CUPwEVGoour2Y24DWJJDjKGQi2Q4zTHbnzih3vsyjmJqxiZGBVU2ymAJjLXKLGGroPc6",
  "key28": "tFWzHddANB4RpYiChno4CKGwbJ3xTxZEwiJfpreTdf9j8wyVkTazxaCZQ5HVUU7nLx13sHyGgtVpg59wenf6gNX",
  "key29": "2dhhfX72gtCFQEhfsTX9VJFkF6wg3L67L2Z6RNzqKfh8Kn7Agfxr6R4s73ru7yF8zKsM7gdpndgmYp45DA245GHu",
  "key30": "5cGCYe7sETnApgVDhdr84jGAezhTbHtXnyjbRWsb2mKvxnkyv2YW6GEEhqaT9sjeGvhSXLry4vkAKGVy6tmt3uug",
  "key31": "3VVX57ZYSuDMbk9SS9m3WRYvdffnhv8EgUvyHQLZAFcuETug9bmMzJCENZRtby64euJqBmHH5VJdLVRhxeVna3cH",
  "key32": "24ZLZQK4UW4Aq5ZzvxbUaTYuXWytQxGZg7rQpTk4q6T2mxGGEXTsA5URJn94e9JG5bd1Fbyav3J6P1tQdyxuVayT",
  "key33": "4UxY9vfJJFfMxCsyahWnkwsxafzgDUc3bBmQ4bRQbTtCW8vcNdjH3AnnFoWqrFa53TKFsoF1xrtzHgSQAzQp15S5",
  "key34": "2igLQXrgZ4HSF53DGWhpUQhcPA5qU99oMmYHqMParhYkNJD8M8xKbQJNa26mAXUQFFrSEiM4UWATt1y33TewAL4i",
  "key35": "h147iJDmFHRFFxmRw5wekwFqYzeENhBmgnZRcgsP4LNRo4pB4pKL5YFZivicLxdYDTHUK6eGT6ZB2MMhRbkqv93",
  "key36": "5qhniUE7FKKqB7CpALWi23eHHdGoSZqn8HHMsn4hQ5axMhBWJeR8g4J9wGqHwuPBw7nNuXhy819tj3G9PRKF9vu",
  "key37": "vAwNskhaSMYnHEX8SxnHDXKyQ8bL3H353J1kt5HfHwaQhCTFcMrHEdYjJ6WnVPLKxA2UsQU5F4WLE9Fa9CxEe2v",
  "key38": "2YMBsRjAhB93YLrbWfgzxZy8Y7N4gejUQrWmbvJfCqUaAuPDHS9ugL22Dv9ZcQxi7gnjWnwDhAKzVkb2j2GU6mmH",
  "key39": "4NKvtB2yNDw53vWQqCyV96y7k2uETjpeoStdhhohNHUJuZmkgKDPVkDkoQTi9pMeW4jxSL7ByHJumBLZd1h2Kw8J"
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
