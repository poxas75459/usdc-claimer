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
    "3cgyZJMd7bmth6RCuvdMYyP3y8XFuXkpSsQzXdtdK2HAF6KtVASin79gXmbkSxqU2vSbRUmgV36wrYBv7nnSghb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CKYDqtN9zGBddQVwJRe2jzM9netBAD8ZchC3qu6dZZEfbDSDeveHZwJV8G6uG6KUS4ezTkWLfGT6uyRRZoew2jN",
  "key1": "3cCxsT1CQZ2S3pzeLeDru9MJyNXgTDDdva8owd7oTHBt4EQBSoUuC3zekj57TAbKncyEfUjrdqnTMNhBxU7RJZec",
  "key2": "99KAbcgabc42K1dQgrzTGxDGwkpJjp7q5fEoEbenTToAAPFKTERxdBrBdoCXmWcMxY9QULXoM2GP5y1QsHtgPtN",
  "key3": "4YjE4pXHnk2TJpDBXDoctgYJfubnMCfLzBTE6ZYWQjvZSZ48KnnFW99nAStSpjBZ7o3UmYHyVxUKnYnE92f7CGTP",
  "key4": "4JFbMAMLK477sxUYYtXhuqK6Nt8SMZ52mzi7qFNEWfrCmFfcHWJ95oLt8w8Wza5a3dgBZoRAJDH33MWBCAdcqs87",
  "key5": "5giDjeE1HRZXcrUiZ6M97WkhEtZDqtsB2nCQNEys2jv7XWbPTVkj6y2MaSbQ8Eg3zVMtkHemMJgEyXJwtph6ZqMW",
  "key6": "gpzcfW2eaV2MKMJ4bXQs3MRC8HnoHx87FyxVU4ehJggTC27XHADhf4eykyZQVvkTTAhtmKWRQMNdqhi5aB2a8FF",
  "key7": "3sZTDifU7483qTKmTVvr1N1BsxNQ3Fw8WY7SCMw3Sct2KLifv9HcjzrkdkwtWgRomb7B14pvim1vJsD43vPgc6Q6",
  "key8": "cGA4dZiqPNVd8zVHkuWb7yfY8jzBb5ZNVN9brYTwRUaqmZ4GLwjS2hCdGXigHeJ3G8KPb1UaGCYgEUFSGp9aoVY",
  "key9": "5dmfDFxG8QxQuLmabGcvhDvxD33mDEcbDs7yHsZR4ia541nbVzVnWdPedbSk97DSL5FsgTWHAMdZiba2UgZLZHk",
  "key10": "2VnzejgjWPreb6T8CzwgrVYZ7XKduuQMrJgeEZMnAhHMZvmj3BxFGjrjJtLc1HJEhAeorqsvXYn3at1U5jPk8qnt",
  "key11": "2g917d9AHKpi2sxb8dJyCJUuccwzs7aZToztPuseasC6j3gEDS3WsFDMdxwYXD6qXn5oMgfjE7jSz5YoxEGLYEa3",
  "key12": "2SiE1aBPLeYLcAXqemB4JvYKSjHR9rv5y1nQkgkA9uGEZcDdjtwd6CGmfRRNuKkbbRBdt93YnTwToguTGAnXtCk8",
  "key13": "3tynHESmtRVp8aMJJnFeLZh3HNtP5NMiKtvTZXhUS4to6Dwmu39fWZdFz5dV8YQGBmK65eATn8UD9uzdo9wp6TWJ",
  "key14": "Ka7ukh6bjfGGErC5SrTtjaj6FwsTQ5K5CEyfJmXac3KpuPHAXzmE1euLkUva65PbQ1ZoQKLdLRAEfYFtEpvFs2J",
  "key15": "4cUTCgFTvd2NqFHbAAs8KoU8vU6Yd7dYNm7ZCHJbBhJ8oGGt2ZgPyxw2hzk9i2SDguj592yU1EPfp3cqz7763Cbi",
  "key16": "5t2vgKobmSngJmtxHU76YN9h5Cy3JXHWM6KVMbhy3An61S9WEESkuXa6Ve7kCgMYoyXnMMHvjt3WcdQ1w28QTW5g",
  "key17": "2zqC4C2iDa5QWDqRqgirFukhuYN91GYMDSzZoWUEwaSo3a5RkCoxK7jhZ4fPotbR9U6qvnm6ze7vTCxsiFab7n2S",
  "key18": "3XVWFtrC11WA5ZMqY93sFkqR5vzTzvpfiZ9KUuBpzQEqkn1qrANYK1szYwfN33CuPqVda1BnLCzGRmSb4HzzshNY",
  "key19": "3c3Vk9nHAsrFqqr7DeEez1sPjYdCgscY2icy7iBkgL2kPg1TFwstXhNKZ2py2jqnszqok7kP7YQL3uxNYRBAjRz7",
  "key20": "K1y1Dp4cSXU5G1tWvrJZ61b2U7FuTstGp8cqbeZwJTK6skJ2XXxxptLaPmS8AoMrQbxbtCoBHgHKgDpWvDQnPy4",
  "key21": "3d1UZSCRCajFbKUAJtuSjgUeydrgzhgQbwArEzWCG7Fg28kT9CUjXL6cMMwz1xUgHz2GCW4TMjxnR3bDbtuErss8",
  "key22": "5NHW9CzDcLC5AkVbZjBPTZXY8kZNtJoXTojZrgGoRrkx3WqJ3EFWGh4SbeqXTUeivpZX1DhFJzMNegrnU4S29ZDn",
  "key23": "2gmTQddTwNJveb528KZQciJTQeAnzVfLsp6ZGYpX9ec54WSuY2437oNRhQtexMzWq1JpPdaEsSS4136Aa5eJXegR",
  "key24": "3imxCkSAW7K27mevir2EYPLmqxnXBetSefyw3bSbYwdsYYPqfhvJTCUexNbDyeutQDhy5wmtubPtKNYwAMmLbVfF",
  "key25": "2tjhfX26hvQsXHkKP7pco8wc5i5tVhkBnodX7PZ6V87TyyovQGAqCPpSJGMrc4DV8wzAeyER2DWqZwGYxLwTo4gN",
  "key26": "4tYqJnWwCfM93jQHTivNcYF3sm3p8ChS8UpqHTtTQ3oMs21b6iDYGqstGkrdm6MnyqYdmGsoE1HF7z187VDG6GcT",
  "key27": "2AWjMJgZbth1kF957mzy3xBrRRrRytxF32fVyRnNUy6hQ4CzCWwarqeYfnaWeJSAk9GiAVgrrSNeXAKTxD9kdn9a"
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
