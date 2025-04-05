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
    "pF722kjQmKJWGNZdtnBHpHbvXyRXvmKYqXzvrYAcfoW4umxjS7SxtSYZyqNqTdYBMwTWxTCu1kMJPnFDHTFHiW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kvh2iUjk3soT1GMs8dgrJWH3H9GEQ2ND6BqRKCr9n4nqYW5S1pb8kxNBTAUzepMVxvzvtWcQBftCVJzdeyqdy9b",
  "key1": "5ZuNa94LLjBekw48YE8pxVrG5VNQpbuhGxjYBrdsqhf1LumtcLndKwsTsJfVnzfBA6cNocB86udZqQof6sYVM3Bx",
  "key2": "px8GBLYWzsHFVAqs6nURXafP1YCt6uHBrsJNeqjuJkqkz4SqGycEtpEeKyoePNDU1oytpkuyGqYY7jGEQbAtLPG",
  "key3": "59k5SP5KYFqimQJtfdUXk3Q2bG3YJE7t6nz4caayLC2Y1iY1h8YhTh8jhTQkeb28tMP5EspBRvCk158J9xFa22Wn",
  "key4": "5QuodxxQPErXsgCUR2uhpv6QbnZ5s1zeYTBvar3X2FytLYZs5aFiRyrkWt9kirJUQGX1HtRhGyBqWAUkw59Q3jiM",
  "key5": "bTV1yJEW9uT4q7ygd2Yfpg36pM5zXx7DKZQMvJ5KnYhEETxkMjXFi6gzeEfjcVieFuiB4F492jp5Kt1hoNtt6Vx",
  "key6": "3VRZfj11hgoaLKjGwBQ9EmUy41cYGiGQJLyr776K3hbdQmPYpbigFFvwkXgiViUzA3JFCDSQjuzST91UfLG7Wdgd",
  "key7": "2HtxHUn3fFCn92PRFryaNFa8Y4vAyy9bbTU9E4bNJozb3rye6QCZTDyo3Atm7hzUaeoaHoT4B4B518GByX12x6kR",
  "key8": "4ts8gmbEJ56q2XAYVHeQVzmfhzK51HmVZxkY3XrTna9zHmAWJ5Qkxpv9HHKVD3A9RiFbJad3JkgYLG3mWNNx7dvK",
  "key9": "2FZSimrwCFy8z9rDGcY8E2anjWGDBnJ8yGe8T9CrN71v8KrMQNFfZkGw2Lv4uREDHZbHEr51VQ31YCMsL5zyjvNM",
  "key10": "3TQFgChB1pK4zc9HHRMeisZdMAFJWwuYSJJ3cAUKHSes5quzbXvKJhjndesmxLSZiS1czdwdzcfurksKUH15CqDq",
  "key11": "2apo99wvx8PmMTGbSubNo6jJHsSoL6vHcBzHLMGc5dPqWvdYGJQY7vwqMTvcpsWLw1z291qwD4bMSgjPrG75fxG8",
  "key12": "42FTetJntGPW29jciBYwdUc3fY7o53hfiypqk6MBCLJrWcQT6LKtRWt3oLufL4qiosPCnGmCg3dEbKxDPc255svw",
  "key13": "5kfWzUdML3H1zoscD7QhchJwu4DLjfmYnCJKDikwonvXPgKZaB1PC7QgioGs729kgvWPzB9fWKrYuygJoEb34gfv",
  "key14": "2pffPkHy42BEGdfoKfqccJSCyHSBKFoeSecagY6sGREkNN4C42eLDSNHAq52simFM7Yo3zFAhZGvNnBnqmDEL7Vf",
  "key15": "3rtiErQdpxMK6sfFkUVwWRvPp7wH2bgLmDgdzEhmoiSXKmPcKagzrme5Awcs2SjgsQQUqKNHJTFMH45FvUX9LEwS",
  "key16": "4h1SCpPUKuQfMRwj5AjmtBqFHkdoqbYv31Qddda18ZXyFVmsajjQWuFvJYoVLBdonHy6mvXHgoxcugqBP952WV6N",
  "key17": "15hGsfVKAx2qat9tuzfTx1zGZoNJUfT79y4JpKYaKrsc7YgFLcE5RMhnGPxJAt4Mw9N72aJNwiQMSmjDFaoXuGD",
  "key18": "HoENVK8GT6xPaeeV4ymTVumcGsZgfcvzi5JGUjWnjZoKHWnUvMSY1GqcoVdVQwkgKNYAC3AKqrw3MvdxeZTzNYs",
  "key19": "4KUPPkgASVCACenPFWEeSJmUmBidvZUaGzoC3wn272nJAbFjdYCap4ae4qssNaCv1rtGUKegVmMU9Shhfk31pxU6",
  "key20": "5c3s1ZowhVcQ9PjRVJMy2radM6US6NpKiQNoviq8ARk8BZG32AVJiMx9pqxGaXAg2JDCwY97aMbp5BZ74Yhb2k7X",
  "key21": "4hmU1LFzMZ1YE3EjyDUanw1gAYD5opoHRQhMQWJcXvjYjupGunqKjJfTaaUp2H8fgMSSXQPtFKrGt684BzZMo2QB",
  "key22": "33N32crsAQfo323w4SzAoqWPF8tufuvQhYvTVi7K2fM51wGNaho4JwBfFd7oPnQSLQn5XSsYiR43G8v1DPX8gtMB",
  "key23": "iwPpuyjzwsoT43aEtNUPi4tMU4fHMZAzLizDzNAjvYeACsmfNQcELPahJRPwjRryw88ZfwNhKVafWuqTDatfGs3",
  "key24": "2fVnWVwpoua5eJf5irWzJXzhtVpqeNXsQgZ9Zxkhib8FXMXmpnqmfkNBUfM5729tWszCfXzGDWpPoHJTK6rS3fho",
  "key25": "5SF5LMhRt6ip6UiNh2aCv5bQiYrXAzUo6wpYCewsozHAtkTPErd9zAPk4NVjz7MBSPXkdvWpxukt88D35t2b2Sx4",
  "key26": "3eBWZP6MdRBQWK3pSiaVSTa82tQhvN4q3ugKYExQfnfKXtSg3ji7R2E1M7bSK8okySVGV8EbnavmrJ3WMhRNVdNN",
  "key27": "67MawN2sQXMenocsjYbwATPWhPPHemndLRxm2UcofFwipWrmEGxfsWFaWcXdy2zMcgffpXYReP8NxD4k7qUNHgTU",
  "key28": "27naCK7ZAdAX6xnbuseWDGEDioJVPZbWQz6Dssaow6CFq3xDrc9bMoDG1JBCa73SCLzGyoamRszXTZzxT5wScmjS",
  "key29": "54FBcfKkyrXG8eqTDtps6s2DqtrrCLsoU6qooNK5JFV9i6fD21cWniKhxcJHUDZNBb9f9gdrn3bZqfVBV31Q5e2J",
  "key30": "3P4n9gD11rt8DqJLg1h6bjeosN2CsUSc3cnjWpoMupaX4VBgxFG2GCuYq8V4yLbnsdBFjXbLYKnPZKNPn6BJVMdH",
  "key31": "3CF4GtGc9tksMvthutJenLVPzVw838E7S2Eafiz9CHfg2RarzZaE6VcsJWfxjUWbEqA9D9ZnZYUeTDA5zKw52E1h",
  "key32": "5oWJUsjFX1R1aGJ8BiLd7rtha8v7qZh4EtqbQSzENbsZSUeCWddDHxmeYQxtd1yBBYSuQ9YFLXD8q4MqWjK4i6vL",
  "key33": "526CDGk2UYV6thhNPmB38nyikjRaVeLCTv8V3kZegtvnpo3E4FXGk5VJvvDraeWe9foNfwNM1LbwSmu9vNyV3gpv",
  "key34": "3hmYH7YX738YK3w32MchFRsU9bAkPxDjq6t1NiW2iivPJgNBKcSj8cZ74yypPoM4RcSig78qG943pkXcJ4bWrYch",
  "key35": "5NnfsndjmEKoy3cbPALUCoVjGFnVMY38QmE91QQPr262tcNsPMP9dukn612dZhFxDC5Kp2FLHSc8zztVeKUWJa56",
  "key36": "5BD1AjeqD4a3AqNF5TVhGzhMBeXC4FPyqvYR9P1XnuXCQzZGccRNs951TFRMVYY2oYp6DMDK9WFqokG3QcmTfRqd",
  "key37": "2feaKUAfpbo3LDGaE9Z9RS55xeT7TKkEnycdCGRzTPZkt1jA9cipHVzzccEqFgV7GGKMdmYQMVeyuVT7a7GLd1PZ",
  "key38": "2y5xkdeCWqF9vzB44QxZFnXDkDA4CUCZJCP6sCiwsA5rR9matmAVnUpTqnGPryMuckNem2idnzutMuEksUZvL9E8",
  "key39": "3FN56uSPrf8qP2Smf2miQoyJGRqZuxoFwEPU8jAAKpQynYeAeeom4PpGV4e7dSv2SJUDrDqGWo5RNCWwBJbMqh2",
  "key40": "2FbxxqBEsu38dqiqpFycByw94uSprtuyzhHCuUYJZV9gSdx95Bs7mxev8aa2QoePQQCeuYtkf5MjNrdvKrcQydau",
  "key41": "bYZ5X9K2fyeq1crxtJYdU5XMWeiMV62yKuaiGVbUZe98tQNRBFrxMDkYePza2CTXyxnTR5NaBXTdVbJT6fzXFnY",
  "key42": "5bU3pB1f2nxaZvR3i4Z5QgPBWGgPLM8oDSj8kkoBNia3sdHeujLZYD3Die3j5m5yZkhwTFZxyp1cVNGV6xTtsg2f"
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
