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
    "4xN7jQDbcJBgitvUP6Hr5nHi6GB5TyTGebcKYZHPVLQrrb9tLMBVhMKKwfLcutxk2xHYHeXBfosoxp5BBMyHwBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bBeNrpN7NHyFvB1mtJhonoxCdygRR1U7RM44NE7qZz89YN7XKq4ZzwbmEHXCBj5ErbcYPeauLxQ2Lpad3vKhVpk",
  "key1": "2thBWDY4wnuEfqMguVgYfhu677Y3rZDz6erWVeRWN5V4rV5bn7GoQekivNMqUtwk6RGgr9kGyPyrtiPvKFZCuDiC",
  "key2": "36Rv6WousqSrTgAMSpRY1LMi7vWbRB1p2nQU8z9HgXYwR6a8HdT4fj6iuuz239eTZY7NafdVm5w84vbc4rbN6QA5",
  "key3": "5wdmeBWpU6XgGMFCUXRKwD185i8SjtSCckT9LSVWZQnR5jLKMMUE1Tx6LPDGyrjyey61ztRGe2zZ31ZWdLJSEd3o",
  "key4": "4wH8jPzYHVuZFcHBsP57p73S1hCDB8ep63WCUJ1qxkQBt2vm7aggVWgDB7QT5yv4WRRv32ZDVLGzvwYayC8jCb5b",
  "key5": "Qt411ZW5YKWHeyiJ23Z66pmNPD8Ue7vKomVcfC9mVbGF1oJMA1VgbZrcq4CfT9Z8DkJ9ZiBFeyPzZo5eZXaQhaz",
  "key6": "ENV4V3TBYoEDpHUaHTUyhhEcZ5wX34V945fUtBFDQ7EB83VANcHSBfAFbWXv7Faur1gUkP8RxhSfNnkkgWuHBMs",
  "key7": "3wMqb8zahGRThR4wiNbLSDwZnwdFL7ymdiGKPZxnmYezmUFLE66MrrS1K39RrZyeLGCE96ohA27yS3tzpHXEjKJS",
  "key8": "59X6uUqv2apLhz6RQowPSJ4NEGhBXZufRqJiYQomeqLgDWzANv3yHD6oJY7iKddmjdSpXPasYx2mSffXrnWt4May",
  "key9": "4GGMjc2K7kLT55m267ct8wqG2wwXEDyESSifVWqjjs8FsRCus517G2sAR3tEcJRTbGy7hr7mX9KMSbRmDanF6dDy",
  "key10": "3gMCWDRvDRNzwbHK2PzFdDDz1CEx7KRdaryCT4u9iExo8p9Hd9WN9VJ898kc4279Mqbv92gpM6jLcdsjTFyyEyV3",
  "key11": "2TNte41KG2wHrG648PUBrL3kqUWXH71GqA11sCJ7J4z5LVbCJzVdEGq7WYHSz1W5gHQSSL5Bpw7yzBDu6mNNeebs",
  "key12": "3TdQDhMbgVdUYv9JnPUbRQvWFdG16hfBbNNSGxAGF9UsNqUwUWZUj3eKyauFzmGcDgsY8RoA8sDJR9N7Rs51Y4yx",
  "key13": "5mPC9c4mnJE6bWQFv1Egidss5kbbozvPZesavoRsNWrEEf9uKAnSNxwJuKRdYZ1Xnqr7iZQ77qNLuGj8URhLexqc",
  "key14": "5DfeA3RZ2msiCjgJmJRgrciMWb9HWYFTLC9e7bn8mfvdAHW4gb5q76VbFrpxpoXP5HTkZ6kTMma7gwP4t1cvNfkh",
  "key15": "3zzoMRKi4vcBf8fsh3Y9cHaxndrvNsv6UtQbzjxebhkwNt2zk8d4FeLm4zxsWVTKe5LWZYVewTjpg9Qe5S7dVK2d",
  "key16": "3dGAScgyvNp3ajx7M8Wbmeuy7CVTioFYzBRYUhFn8SoDNgX4UNYAac8ybgApuPJFjYZi486maeuJPr5pVidbmZxQ",
  "key17": "45r1TScZLVNEcRSDfWYwiDjK6s5HpdK3BxAqVggaMhtmfLSu3dUbJVkBjkkt8wuukR4VyqbNXdcf9aSEZqjfah2J",
  "key18": "5HyaMizAAxgCqnGn9UfHXiS6KrJ39HWbXhNmcehYZYrpgL77LKUyGGiDCPMESeZ4XuWcj3EazdNxj9kiBJtXg7Eq",
  "key19": "2PtYn8ZzNQxEiM2ZgBWuSVEi6sezVLLUQQznHgw1H4tvCpokimbGWJXn7WB9AQ4DKctDwh8jnRyuAec4sd9WVFyy",
  "key20": "4JmfrzR6EBLTf96j13hjH8cnjy754AMFE83BeTV2G8dNy2qZsk4h2k4oDiNE3is85sJvesL2STJUMhYGzVYBZmwg",
  "key21": "x1PZXDyYubaWKVgA8FjTrHdZ3nxaziHxJrjUQr31hJb9iVWgWnFpej9tTwHmw5vK4bSeBGRSSGficomvmC3axGj",
  "key22": "52JYQq1exRfYgWhsKzhtD7L3fTZdAtzZSjUxCgtNmUfEniHYn94zASCWQhXP3HLg1xpDxWUGNtn2izUQLNJNeaM9",
  "key23": "HfyNfKriyGeWm14KEeqt9SY47hez6hgHRASzZQznFHtjti751qU9r3XepQZ1NBuwRDQd4Qw8UkwvAAAuyJMbGC4",
  "key24": "2dvQK6dMZUSMDCUUKN8qLCrAuxv1G2kWyUjsMeSRaSWspPUvKU3zaL348C3u3DMzSKAbeDvMd5JXECW8exEqisJ5",
  "key25": "5G9wzsMufJmmETWFFKeCEPLR9bGKt16ktnbweZJTbZVN1SgVy72yuD5bycwaqvfLjmWeiyZpxCztNDcjxE1Fva2N",
  "key26": "4ivkCtJeoFwqzwDe5oZv2QAtUmiLAb2zgAsu3G24jAinES4R9UXYkS3VMGnghWQShtLr9t9quuX7kG8fufNk3hmT",
  "key27": "3PdWc6wfu5WwuKxTWf9f6HqyG5zKspMXwZxtWmmJghh34wv3BakepxbagB5T7DAQBswKYZxe2TC7TtaUHEM8Mii1",
  "key28": "6EeF52FskVy7bThCgq3Roni7jH6RpembwBycEtS3k6FNMvijHZRtMbqPyAaUq1LN4qxmfDVvUCcY1WyZr7sijze",
  "key29": "65FgvbhiLTzExsnMdh8bS721QA9LmgNAe9gNqaJvQvkdS4uHerrDQ8eLtj9jLbFhMjAkKJR6da3DkJdaxKinaUSd",
  "key30": "5QhWVrNbwRKXDBWhGjwgQmmX6CAUmiGHU5yS6rbosEVFLvQQ955JfThHXPYwhoQh69pmdyNK3c59NsDbN1sMc5sj",
  "key31": "3qhSjvHYgV84PVrkMABtEKCxaKag6NxjRTwe92Z8Fnx2ZPVWALtoVAZ318ymHe7ZcdUiuhzpQ6X5ZtvJzXL6AwTT",
  "key32": "67aGdhB8mzBheVusK8g2hgXzp8eMgQbFbUVooefeD4fNwXYwP1unjU7tqMg5SUU4x4mv3RWPExDunxNdznrMP9Wi",
  "key33": "4hTCS9tbC1VVaYf63qYxYaHzT9KGUmrfRddRkW9e8guiJ1J1T1QLrYJHVgJbDGE76etgjESj2yxfuvVajkfxiWuh",
  "key34": "44txFiWGhiK72DHwLwXPdJ6DnyqNjrEdJnuTXSw684goYAWSJCGScQ3eYWUWtowKeDXHUv7SzzWjV2WRZGqEUmmr",
  "key35": "hqoJoGgAiku8jtLGmTrqELXVAVqrnwoTtHw4gj3qprh4W1VX5BFwopSPSMzWKvTXSryJar3qD1VsMsJBZPUq3vS",
  "key36": "5UUQ1DZjgqwF2Y5bWNrGW1rxDwZMrhEkWo4qNXnvFRDzf7AtMjPkHSuj9zCDsoM8jSn8zkGJczkqE2jqn644gmRT",
  "key37": "27kwhneJjPbWRTQ3nJfxkbkHMMTogXb7gRY4VWVj1d7EEUKFeVvTBD9Ztoijmb7ami5UkE2vZW9oazZvvzYCLyci",
  "key38": "2ysVnCkBnprs3bWKiW6imSnCBVWiMSwFHAfDv1Sn7w8dRFeaKirG6ke2GgoyEBLjykzMiPuNUmA6pwvcGzHBHZHm",
  "key39": "2RsrzTL5Ujj8EifUmczTgzDJvhFNwywotRjjFw6zKd2Ne2RZzwQKJgqtAVJLQEV7obfgjT6KNXsMoGhBJ3fTYefF"
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
