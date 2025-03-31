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
    "2dUBgJtWwtVoi1AiiFE6t375sZE7C5XKCdEzbQYwpf3G7B4oMQfY8V2ceCUHbp5C7u1pNMU3jvLQRBB8p3p7Hprp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52MnYS3LAGWtjoafJojkErixqN4fHMyQdPmSyp16UcXbuQdUXagjtdZYR5zvA6vvKSHqxgjUkZYDFSbXEKa9Grn3",
  "key1": "ZxupwTb41wsqc8BskjGki7P8CNGD85QCegqcj4p2GJMQANozmNdbNtocjhzNbNkePjgGRzUgN97h4FY6xm4wF4b",
  "key2": "3daYLBHgm4YmWfukesGMUia1KHsYjuB3BsiQnxrLjGt6VJJtY14MSQ8zfzfGF9oMQwcyfNkwd6t3VDB25n3oG1aX",
  "key3": "52b5Ye8G4fR6L9yWfPmiDd8BuB4UTi8PeApEDA5NGkXxKAxzUZHLmWipNopNTpDtfb9F79TTQkqiv6jefBjnSHMy",
  "key4": "5NPmA5GduxMfMjhmDGY4q8BpAb22D1NtWtkT7izudfQa4ZZMpHx2Gr97s43Yp2EB97iauHqWU13qgSPwzhAtyydN",
  "key5": "3zzPrJCYUrCR8ZBBPsV8i2kFJR7BomN7hGXEX2dAC71qRtw6AtheVVTJbvbeXuwGQc4uLh8JjhjmRDucMoHwFfVg",
  "key6": "2xgyWYapXvMS85TC6RV9cwbjC2ZdfVpudoVM1rDuNg1hzAQB5y3pDja5Feq3s3rb5V1GzyWWmx9Wq14Rgo2sAaaA",
  "key7": "4b19w4HJLcXr2cnPu1Kimhv22FnB6TzF2TF4MFQC37ZdrzNAnw7BXDUFgRUcCWQTJT323k2JiRkQSpUY1CXJjkwE",
  "key8": "PyyyTnoyuYPRH8reM4iwYzA2DugFBxujby7dhYB2aecqENC1kA1gos31oqb529xMD4PzqU96rY3NzKuGtJVbiYV",
  "key9": "KiYpZkmz4W2CTKnp5StXUMq4un2x9ngCyNHPb1qN1pKzZWkrBPKcL2YiPKAv8rJpkjwRUw34Ku52xzoHmYaHsM5",
  "key10": "tKiry4CM1j5Qf8AeKV2aXLWu6knENAiU6yhwMBGC4UbxL4gQEFchfj7426YVcDy5WHVut5UNC72EQGFatnQBrPo",
  "key11": "524BzGyovpQntbiwktAAJSc4DtyKDaL6JWGuAN9nrAk7ZRz6mn8hpt422VynuYwzXE8j93q6R9xdX2LDnjHiY3wb",
  "key12": "4Zow7c3NvEJ62eyL43zsWze4VoDmoLLnQpguLd7DuLKqLHqSuxKWHnM2BfxvzdRPnn7r2T775tnfubKjs9NjgdBm",
  "key13": "53GHoi5MebWySBHmyFubus7yQZdbLTYknqxuvEv2QujTBoGpYZjGuJ6YHoRR1Kj4sUyw5BqqurBLDUfT6gFbNfWz",
  "key14": "4GHHA9P41jwYvJudTzk6SgBzZaJ8itjDiaDcb74fVXyAnwxgEtAcs5VmhzE1tBzH1jSt2Svm4LLnjjgQRhBWvag5",
  "key15": "5NyJLsY2gf93hCm9C4EuMtd7uc8W3qKgbLakt389faGN7h6KSC1bkLt8pDukkzuYqKRF5DRqU5rnAvX3mdo3T1Cy",
  "key16": "2hpDbbKvYGBYXikx7hU1cPBPc1tR51miYeD8fSBXQvhhAd4nCPxJEkaDuA8k5YU91P2jC56MwyrZeyvSi1gVwkzH",
  "key17": "5B2b7QRkLWG1eSTctvQDA5Nd3wnefhGpRWhNt4Ar6M2FTbu7gGFKK9fF7geqFg8a943vF3oRLLrwpgHV937GLkcq",
  "key18": "AMYfnwPxdXVEhLM3L24BSVuX3Hat9T9edSKzy6dHrvUUeEaotcj24dPyHncrAyWiKbUD5gFjLLew6bio8N2wcLR",
  "key19": "49GqpZvnE19Rt6h9bEAYHtTUGdq2tVV2oK369MEum52bAi8BS3XL7ZGFZyvBxTubMQ6vM4ykDznLj2kDvCYcG1KD",
  "key20": "k6GhTN3ZFaQFCwgZHNzxhCoLaErF24WUCmjbotL6DZ44DcPyRTzMrndFew1HdssRUeY7y4k6dcDn24iR5bKvT15",
  "key21": "3nvEKicqHwS8q6LEsPZXH8N8KzPVcMSoUWqfuqyC5LZHkXKmaMUxWthD1RiQSJcE494LmKapfVZxpADf6bUwcAHq",
  "key22": "4AqH4b9X65qJzqdckvkhRtgFChWh5zCQ1dt8mLMHuiWgYg6gJ4TN83AhTr2cUZTRCvrW5hxBqEMFQhT4orhTSTte",
  "key23": "3cLenpR6BfLoWRR9XBYHeqzsTANVXkDo1RKfNLuSpX2vq7afoejmFYznacEztig1gyQ5BQuPStyRrKsSPquPqENe",
  "key24": "4yFScCKB8ZWudQH3RY6XkaePPVy9fbazvc1Be26XgB9Mn8bRxuiSivv2jLW3tYBrvAfDxpaMyFSTWE95w469Up1v",
  "key25": "66mCaEY73mFwoS4A3x1Srp9aCQkKvf6x9orTw8zhAcQBsysTgpyGQsLDkn1yr4qVqD652vcJjoT4ifB4jbXQRZ3h",
  "key26": "66yZX6MbBGF7gphBnrt6A5JcjgHrioWiJqqbFrGMpjjGF7rEmuSjKBVPRsKsAzm7EssUoswEjKCnCnkbNriqXhUf",
  "key27": "iuWrUHfKQMtQgtQkQx5aqhg63xDNLcqmNejBaUnEX7dK7zKvrtSFViUkdSqBdraG3ojjYhtye4p5eowMoEiP8Ew",
  "key28": "5Xqcvw8RXmwWPpz3RJoBPbJxBEiGy3rQAUTo5pSs6ppBwAe2JUVMFNjwHdN1CQ6y2FGxzLcxbT88H4zumUP56Xw8",
  "key29": "4ukX1WswviMcBoVZywwhgvNGzYFx9JCx82pVH9iMBoxaqH7ECnttGxfNmWkMy7SyeHKEqnE3ryMik4d1Hwa31aEU",
  "key30": "29YiQRRwGQwftYih3sjQdgVoGyQAT8zCo2CTzXEAhNHbJSCM3mMd65qS7kx6BKBoW8xTWu7iU9YQXgnfQcj4cSb8",
  "key31": "38LuEdqxuTVEi7Y8ZSacfiuhakwWvrZ19Q9UB5vHizbB2gsLFbJ5wCoGUkGDBaAqAbF4iZ7Dk7f7NWzRs7JApJqQ",
  "key32": "3LMK1bbbhP3FHY7Kscd1gkse6xMC6PuuABZaYpUFSsQUhtUeJP9cue1Uh86Hzc5rVj34yUGVBUgqXGZ9Agib9bfv",
  "key33": "3TaLRqwhZu1MfsPMTRXMF4JcwXqPz7deNfwbpUYPyv972oVA1NYdiLv6FNKbZmCfdcxqdB3XMG9VPHWhnxkkRdzX",
  "key34": "2MDZJudv9Zh5Drz4vNhtXjT8Vuh3bM9uR5wLVZWjdxMMufqH8EDHpUk6bLh9U2gjG1amNpYgQG6amgW2vbXgk3ne",
  "key35": "XVrsFWgPs4Da7e4szqaoJHZGZBgAXgiJFeiptFHtx5grkbi1tpRtxoju1AXHC6DCfPFzfQSgj9gUUPQYfbTzfEs",
  "key36": "3MN3SYEN8ZzL76WY9tJVABhJnaiBH1MQ958xfwsbmE2yc3rMVrquU36DDF82SJKNu4ioLvv4pTbC4SEr5tDuq4qZ",
  "key37": "4bFGyFHkJxiAzAbUZ8LZFSNwDurVddnvRyKh2BRWkxF3f2LwsHfLJLbEW6NHWDJGEzh4ZDUQKxoJaE2nDEDb4EaS",
  "key38": "5fZSSjbnVB4p4J8K1YNZ1Bdxh73ambJT9EVtb75fRwDhiRoeq8LW8jvQCcYCqtrBX1unhT8iknqjB4UfTbc6Z7dK",
  "key39": "2MR93yu9AjV8AgTvwh5WCxJ74eXyyESYTXthAcaE1LvuCMb7Yhy6FxJH4Jp5KsJuyAE5PUTFeuMrAWwqgp7SNDo"
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
