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
    "3z8zit3crJA7PD932VxTqhjMzSz5xpjnqAh1TGaGuZcoar66tAbHX5GjS3QwK8MdvC2T2Yjk37zBXd2sjH7czANj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FByMfmiM1b3ngKUqKbbVHz2CeHnXcgtzCvCripV5WFAX4G7dAkNXh11uMdcjkwRCxU7TY2T9PFhbuJBxLM8Xt33",
  "key1": "4wbRteMZ71MWyn8zo9L1kNy1A7G6nMYFoDTiy7tdYyCVE6vdzVmMJscnVWWox45DxGZQUUMBPCByEsiEBfKM2YYf",
  "key2": "5rJtan4gSi7X7k4zQ1fN1uoncPVVcbagWhp2TSiAiStbqZJtMnjPyxdRumRwPFsMqspJgrw4fwNo41BZDggn5NHP",
  "key3": "29Thj4xhiMHb4tkzAjbDm517QWJdqubTe9inMS8WEqYQ2q4vP7yceW3GK8ZsN83mdXeA9fp9mnJLcf9XCaedXVKc",
  "key4": "23G8SimDyBzeJmArxHUzLGVeaB1UzPMna4PAjZpnQquaztwhkeZhUzDk3GfbwTeckdcFKeCTqf4RJPptDyycMx4T",
  "key5": "ogYYkdds8mZQRn98JKj6e52a6UNTJKrKYkuGUMB9z3GxtVtaSNHXgWdyUarsTYQYpPWWBGCaNT3oneD5sWB7FHC",
  "key6": "21ZXkGeMfppCeMkpDEk7WjEk6B32hx19eB4AuNCovV32oBzDdtLWkMjqs1jr254vJMnSbDyYrTGRdjcrx58yQZzq",
  "key7": "45R3DKcjBKvJkpbw4H1ucDYUEVP8G96dsHd4NTPLDYYaZPCVytiQooumJUxCvKKShj2r9TPEdZHcEE5WPifWKxTc",
  "key8": "2ya8pmDDUY8Y5CLTjsCr8aKAsGdDD7AL3wVLrwd4xTFCaQGhnq9TkTvcfPvKvoKo43swGr7u1oXhVDxGombcGyKF",
  "key9": "goNXXT3SYKPyHV8Qic28KMrQHvRKgDHjEkxusUQJYPXUardw8XWYBqxaWzeTR5inpbBwTTatdQyrxcqJi9YoGaf",
  "key10": "5CzUoY5StP9sxCgq1TfrPMA6QVGSLthMF8cnmGppmh6VDKZeCnqLxHCtWGU657urk53mSyA46RfEupFxe5eg2bxr",
  "key11": "4wywu3DQ2TrE8FwukUsxEJfZTWg4PaSU3ATQycmnLPhherxF9M9ZKTmJ39Wq8DBsscqbpUFmCZY3Rh53ULfqDemq",
  "key12": "2HrbrXBGDyxctytiRnjRFQQWzEgVPvL7s36jGTe4JmoTX1wLGz6kc4iir8DoLWDZtEKuBaxs4QgCqhcpZjFV7qnx",
  "key13": "5oPnVy2SpKW8rbeotsEdmP69HXf4u7BTFTqwcrDA4yM9aejbCA2RDsU82MkMKLX6KvibrVMGEhd6T9dU1m2Q4yK9",
  "key14": "3mWUmM6PurhKumShYoZxeNYAbRaNgQD1cwrS8KPGEY6qSNvsXUYWUQEBFp4PbrP5cWiQKhKTRiopZkYWftkRou8M",
  "key15": "3zFFpXrqH2wbyE1q28tNQfzaEvbjRgTdewQeJotd8iZEMNnmbj4Y4hFW9y3KoBzmnsjuGCM87nfwVspZZoBGTEYP",
  "key16": "4ABAQEcbsdP3ekCHRcxwH4cUdJapWg6UhGVsPk4Q4KrEd9MFeUgBfyxgcgU6zdF8qB4TKfxBHj8qvCFN3WnupaGA",
  "key17": "5wTCrXmUHb8ZUwTioCJ4LFoEXSEvEWSrjvQevKgzZ3HNHqm874tm7hoYnqBmXcQjZCwu6UiP16ApavUmVsYCBXY3",
  "key18": "4WwSzvXehMJeDihrbTEXaMbGDSyyuxiKZcjVa9NENH7hUnQwhzFNYkGzo95frWT7TZzQoGcWimLDUrSGHBC1UQLM",
  "key19": "5Pv9oeP9BQfZgaH6J7EZA2QCm67znchbzgPZvHXmNjDx1FATcJwHJPHKziGqem1P1xWsbm6D6ZCGrNWy9U8eQ7D1",
  "key20": "29w6b1uN4FCtchAtjKdoeKE3f4UPmTpZ6xDt1ZEEJY887iw6izuCKacvcbuc9T3yNQm8Nx1ww92eJLQd4Rtbd6yb",
  "key21": "3u5GkgEDWhWteTMa1MuUXfYQe4pRWERALmJPCcTBFQ9GwE3A2yuDjHMtZ1VfzDEW9L5R8Dk8tEks4Pp94rG8XcVh",
  "key22": "3PFQbKfE1WjfUmVk6qifvySDgpRPG6Tk9AoT2EkGPSnbxWTSSJUE1bqyjyc8wCuabccbJJUw6qXYf2C7ZREhnkPm",
  "key23": "5oM4Ch22tYcX2Et8WN7FQs2BoVThgXsadmoH5PRDoHZSXsAhYEvjHEqKdAnMX5DyNp9BkUvHrtBGRcvdHkHKf3rF",
  "key24": "3VCJLjUd8CJ1RYz1Ew9aPnQazxYgJN1prPPV15DuhdAguDa3B1fGge4zY65gnJgDBYETcet79rR4yXou6yWjSDB",
  "key25": "3kiYmcvNeKfkbLiScd1SFdUMKWoD3VhKyaKZ3Nait6272BjgUuaCQCosrPVRtqJWbtaBkzrKGZ9zzRMJvusUrHLM",
  "key26": "47v8L6DUHkgdDxnfFuXBqSmjy7rse8wpsueCa3nswsYuB1RckdCiHUAAQTzkyXrVY6KX2p6AGwQPSneQhnkWZHqu",
  "key27": "cL3vS5SRwEn8xqtHGdhR3vWxJfoEvP9gRaPFvAEd1k38uDgTHxzxofty7dBMcZjXRLQCyJFEMqZTe8gMQXCU87R",
  "key28": "3nSJ6ecxVEmRiLqdGEstPvprAF2QyUCtLRZnwnsb4b5xsG67L1ika9VbXf3ESTQaDLwL66GED3zbKtYLYsAnxaGF",
  "key29": "29MmNxpJG6s6R8nourg3GgpdHU3RW6BjWRW2AagnwChzvrNq4RcLdQTv3fEzs31Wu5D7ncTwimwsz3D1yEtkNfEJ",
  "key30": "42XpDNa6bhLPzGJ1MKQxTtsTh8sC9VV3XrQHcMotSJDiAN117xvHAwHnhTPHnqwL2StwUx9k8U5TzC5NZW6Smtr",
  "key31": "3yqo3w5D92gBFXgcBRMnCjnznp5BZwyKvq7Z5chhTXHdXfd5Gq5XW3jhNdQQ3q6CDhMMNpdaU9bNwUcJ5C7Laetb",
  "key32": "2DgzxcJZx8H132yhzWsYKamGF26QJVQ5uiRYnM6vTd7mgCBjUpTUgxVLbBDt37z6d3XhrvCTTiaA4MTuKF8YJza6",
  "key33": "4HgQD71FrYrxbZypeT4o3CofL9ovTgQezE4WAZmxsYVhGVAPs4rJwAt46uQLbYDi24aVYqkrAmXNHwYWwFGbKQSR",
  "key34": "3jaAR6nZk73xY3LPe6isrcYwekc9U8itt4vRQwmWYgSWT1jvK1GnDqHzG9prc1fR6awojyWeUKad2ndLHgjBRdAw",
  "key35": "5nD9MkKgmmXyh5Zg4fBijx5BWPgKvQ3w4b3E5TVN5SUbMKXSE4AgA63fGQZkmFaMyjQEzJwiSB6iBp33P23GAtZ",
  "key36": "2dt3xa7PoyG3yHNz8q8mVJrFHnbGEXvAi9u5xrwvxVbYHpQfUj9P8VM1pG2qN2EeKpDBfG6su2QPtvuWvQBTeB2x",
  "key37": "4Jj5KQN1QS7BoVFv3QqzVaqtRasZKGtRbazMhivxT7ByGqr9NRPhPBtVxp4D2ZzJ3LbtBuwCCL8gaW8vXoFRodXK",
  "key38": "2C4TP6PYP9gHQKGfRKnFqUjmwSPedrrNWdfEhCfEfJN7LGVBeJxbAPRpXCWvw9eySzJN25Pjp8aKA7rzeNJmarAA"
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
