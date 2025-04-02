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
    "23AeooYSy9aiQ4cpF1uWiYYHKy4HJYQTYLrQAMwRm8roKhxT4dqqWgysQGTw9z3MQce51mbBtTBXCMW99BrSfzTL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P5t3Z3mKescJxFKJwhDRqp7f3Auyc9ud2xUgkpqYAKGa8CBS42BGHBZQjhLZe9PRVUBjBKdWUEaLaittpCQGSXk",
  "key1": "3qX3yYCug8XECKZEKJUUzUtU4Cdnr7NwuJzxfi731UqtFur8FFAf8ayWpnMpTzqJQz7zQ6ceTaEBBb9M6hSNwJvk",
  "key2": "5nCsYp9pvfsb18uBMFa9q56Hbg3hsLxCQ3tk33CjpW1zh4DiQJxzUazUvm6PRz5vNd6zvWmK3qDdxhxdBSEeH2Er",
  "key3": "y6jqECf4Z89fUnnjDazKwSsiL9J9DT5PzmTSnocDdQLm4qEyAXeMv846DiXfkGidFtWrCwcvrDbKjPo7RQSSdwL",
  "key4": "4SG9WLVChHfDCGWmPLHJ252TrWw1BBD5EcfRxdwgoxV8W8C3xXWnHh2RJua8eDZ1nDcjs2RnCr2RzzzJWHCt74ng",
  "key5": "2PHk75UrWB3aMiHQh2GYTcqUjgebBULR2U6DtwKSA16B9K3qivuMFopxe9xCiWb1sq1d8cVdNjkbr8cEQkdLYh6u",
  "key6": "5LaVS67ArRaLBHqsbsEg5QRELEUtHxwsEoJ5qLSDH61BwkKNKQ8V9jj4ea3WRMSNW5XtBcDL8dSZdrJqNH6MmcwB",
  "key7": "5pSfjHDdpmVhyrfttqf5ne6fjM1bvSStGpfp4q35nxNnhLKGb8HvkjFYjZ1PpdGqxUa888YzHwvzhN8QdxexsSKM",
  "key8": "3xpqvUeoECRUZpFG1khcXuGUrM2wPB3cRi5XfJwLUfmhmagpL8kdy61VJvBHVNSGk76ThYDBBx5z6zBCdgKbkpFE",
  "key9": "3aEHbcKF9eZeBthm4SVrueDoi8xUXJzGbw5QhxT8Xve2CcD9Jx7yYGVBeQCv6b4TKXZ2jVFNRSpLAiEdw1EsCoPY",
  "key10": "3oBBzwLbmXMuX5zQJ8zHtjzBDwB7wDf6umJhx2rmzy1QtNrcTqkGP2eryVuNQrcj2wYUXPWWn7KfMQ9NenzDzAWb",
  "key11": "4Xjee2JamWr83ZnS48THQfxDeMcjd8w9fP6cK7ewebSevPcbGJJSX9cZrVxPMmbckxSXNWCvEuawshfCD7p5s3sS",
  "key12": "4oTqqRwes6rkirRTuP3cHWS1T6QRc8wqr1QhbKqq1YCRKRHBSLqjE8uvUZ5fcEr6EnPusHjYxsizP2tRS7rGQ2x6",
  "key13": "2yFNyfKpLZztMg7yA3tRZDyawESr9syGWzDxh7PjReZyyMa3pGhGi2mHkgJybDZm6bujLJgiWXM8AWMsT2epjDnJ",
  "key14": "4c4t5ADzUNy7tuUx9qqMBKa7BEgn7s9zoAbrX2gPxBcw9vBMeoUnaRc1K5VfmNGNLb91fbZSKYmUUzhTRdy6TBZw",
  "key15": "2Q456SETQjL37YcCEzWVVehgQw4hXuWvkHNbxkoY1Vu3PJU9JHtiZduGm98Jo4JMuxiB36MVVqqU6XVwtMRhkTgx",
  "key16": "2WiePSWkYsiLNhWo8oTywQiE7DukeJXXMrKsSbmFpy9AUhqntAxAvvCsvSgi4aRJ6cqT2wdWLiNoPgJFcSucXfQp",
  "key17": "57RuNwUkgT7FDfKammH44rMHuhYXERUn55oFLs5R3fTMcM8PraptpoiBXMjEjQaNU1sSw8zWGgi2SWS5Vya1PWpK",
  "key18": "4PNKJcreFAt4Q4XHx1tpc3ChLem5VrEMYaeYzut8QWc2z92boqXTARNpxEGNrvUK583YXrVvpcG5gbys5N7uC64P",
  "key19": "2GbxTuBqo6LmyixEGvjfGV7EB9dCapnQYTTC39k5Ex6xhiK2dvcoTLT3VrUgZfvFPaMvZWwo1GV3vtr4NvhN9d8F",
  "key20": "rZXgk1rdXcWQWZsmeagcHnP9bMRqufEusWt6j2YL2rjnUmRpbN9VZB8wjtNkwfydTZmLVW8uLErKpDmsLKUDVA5",
  "key21": "DrMgVhrqhb96S8AcDWgyM81W8tAP3YKcDytWfYkUUXiCtVhhcYhHQpm8rYihTUThdW3vesXWbCqyvc2iLcyZik2",
  "key22": "4aD3mCDPDP1owY9rn6Y3hrPdPx5RV1Sb62xCxsafveHu3QsAQNkJrz7hnRDnwxPAtsJV6L3kK5unbSdjvnrjLwWB",
  "key23": "2ds9dTnHxz5opuCKHkenKnCB9cDJWB3kNAwf15haY5Ba9phoytsJg9DLtut2WNZVEe1JNzf99DRBF2gySwMvm5Lq",
  "key24": "5HbweoLurc9mCQuyL3GQuFZ9A8dvGxvVjVAAmWgBw3ayHfNMA2GUZNtrJiEkyVx38XizpNs4C81CibordreRevij",
  "key25": "3RKGjy5PMAyjHTUAAFZpP21UWCiEEgXDENeR1tRgYULTYoEKSf3Kn2fPBxMqnLScsKimniDaAWXG1WD9Cx7mvPEN",
  "key26": "uiAWK8aWvbp1nmASu8qsPNEKHq1y5KD7RZuACRFvfZ2KiNwMoSwLo8XEboLAWRahFJv5xvjedu9PgYE59WTx3cH",
  "key27": "4EfBWpNu52o5cDoobNmoiU7yY56s4kqVQGSXeg8UP8ZHamu9XNTKQj86jfCNwsUU8rMKUvr5Njs3WDr6TxZ4RTwU",
  "key28": "55WgqwA46YDUDWXk6hLHZKXGj8HNTsiG3eJQ6HFzV5PSd3LLyZx6FThYTasNoqeuT2bMimwjhRBufC4AcK9LuSrJ",
  "key29": "3Fk198DELbHNYE295Qu219ssMWzppJcJn8bhKrfPZSpqwxeb4RasSGkf8dJFGfg61QZnX6WZnNJZVLjDoouoaUAN",
  "key30": "2TbtgxVMVYPqWD6foK174NgThUMp9T7J6uGqdeY1y95J3cuaEx9DzVEcnveRYaESPzbco73tTW3Ys1mMHCUWqf2M",
  "key31": "2FR85raw9ExXH5qqyYeDziJQD647xjE2TxHbaUc96Xz6Qu3MsC3EWpQaZwmEw76nRVBPyBv65x4ma1tgSUCNJnh5",
  "key32": "ynWHthtWWyA8ehepqiazvWH9fuSNDJ1XkoP7fu2rTY3s6psenZEi5moTS2crqBTBK7qD2g8ULmJFzk7iMDMpuLZ",
  "key33": "3LHmZYnippaowdUVzb9jJmjdQhQt9D1FdUCAmJH85zk2VnNbVrU6nRXbDrpnxaGe59RAH763qZ9hWx1Dsq3eJeUB",
  "key34": "47riLYtEYx16fMhU64TVv5mY219fmQFjSPpwoeR2378yzmX9kgcSGNVy9dy6hRmQixZQGYKQ7xCMqeeucX4nGjQU",
  "key35": "4Jst1kVZn5f6PJskMi1xiH5zNK8tHwbzNqLPzfgke9LZB3pX65qjqQ5hn6FSJA3iQDVHZtUTtDYGiPFRbA6BeQzo",
  "key36": "65QQ5A1yw9MztXHqajP89xWvBaML7NGQoypSFQjzgZhLNdE6cevxDbc8Uj5izpDJucJkkyzWW6oAz1NMsVHnCXKn",
  "key37": "3nP4XQo44kuxN8ykvhV3Ymj9ERBeYLX8qbWjFCaQiAL3hLov2V6H2HLBNoqhqMV7RDZqgVZPgH6N6KhTarwarN7s",
  "key38": "52r2KAtV1zJNxLtsSdzpXUAYJnkRsynU7JeFF8i2LAD5KdtwE1AehNgxqxngPrtKo4NHTzc4JkFDb1MznncMV8SK",
  "key39": "5KZBTfw22UUZMcRPi2ew7nMrQgCNEKAe6xGioTE33znEQXrjoi5xmBj5F5P4nhTzcxRriswCJsLTKTLGQ9MJZLnY",
  "key40": "417NAdFa2C3ZZ91P6efRGRhJu87apCGWaZmg1XnU2nbiuu8ERRgrqaVDNwcfzND15vFC2c4fETpUogVKsJYA7uBW",
  "key41": "4d1eKLqcZyemV7dCwgx3kcNgECEUMKRuK5WF2nCSNUMdHhbHs75PuPxFBLw54WGtm9sH15dGx7cxwmaSbp7Wo9go",
  "key42": "381JJruMPsWksgLRYeBgQK3vYyHKwtZL7bTSoM5Jg9FrzAcrmB41fc5eEXhU9crgfdt7JqGTbm8fhPYnezaSnZea",
  "key43": "5Lw5EWgRGqyS7DeWmmNcAeHH2z3trqWkfwESpVAwWhLgAUAj5HN6EvjgT8MoV2DyPFRNQwuhvQaPEwvMaxRaEq66"
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
