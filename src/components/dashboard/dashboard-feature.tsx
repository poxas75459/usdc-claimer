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
    "42aytt3oh3zAH1uovy3sCJfgL1P5MFPMdcMTctdfx2heTCackwoJQP8HAdpgBdUhWApcygjSPq91YTKz5UjCSQhQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BmoKQrJNTiuxVZYvjTSyDoxzxsvxtz8hxdVyyQkcZydkiMdANYKgVkW134jZYF9s37sv2QM5XHXAMznQoP8bnmk",
  "key1": "58am5j8F7wdUFkPWCpde79TthRAFMe8rE9TB1XKh9g7HHDs2AhRw3gdG2irc7YpNhzTfrLVN3CX5FtTkydkwLdeC",
  "key2": "3k7YYLetwS8i43vgn98odDwLfpjd1qvXDzUbViDLWCmg9nCSAsZksThahoTohHberVhhFVXhwQizXhGsX8bKRdKH",
  "key3": "6Pj9BfK9ZAKqjUmyedFVqVXRE6yHUkQaEYDgecDMN2RLGi89XrNspf4nV3TkUNNM1Fw7D4rFYuYkchEfSFXqzNH",
  "key4": "2qqZo3UWy3YLYXJREEpCuHMhTtWvcwRGX8qTAtfWbtrMXBSQzXTS8t3EeCKsKyq4ZjmAm4mFyVTuW76bRFvcEV57",
  "key5": "2s1YSyRZrdLnosWoCwzR9xHEbjdKtsK5JPtg7mWajJp8xU7jWHvY4i6Ajy1EeycN1fmo5C91H364KuaeXfSxEwmF",
  "key6": "xYGcZdHrv9gQNYLAWJnAGMNBn6wFDnZQDaa4wUY2prKDyyb2BLVVUR6Wgx6BVm4cnUExMVp9bkXe59Vqf4jzwnM",
  "key7": "q3N7DumTCSsAJb6Fns9xA7KFaPvjvVKWp3g5pQnWhqPmDXRBNkdU3yE5YSGFzyecbjPN5t5MR7TKq1vmsKaAEhg",
  "key8": "5DjJ5E9sRmzwECcA6h1k7xESNMkovLDRoSSAmnr7Wy18ib4PymvUtvpZDmocPx8VGNaXPVqZtULudP8yu7FdGcAG",
  "key9": "LsQWkVmnRpdYw99RD9iaZ9WMn1GKjbiKTAY1YhBvjqo6KnDTiwaikV89Z2N7LKQoLUPxgWwG7Rn4QU7us82hhj1",
  "key10": "4CwLiTToyhouVzqnucEWrkBN4VfLyDV1F7PDmXNuY9zE1ftRZCQoPgVBxoF64qwoWo5HtencDfJbmqyov3Hi1dtV",
  "key11": "5smXGbbhSSHWDb7FTLxPhuAuLiCwEXCwWHMwvAPkTnNzAuxoZqV7fkTx4cE1ji1QfCqpyFXxmKoU88piSGuTdmHo",
  "key12": "2XTubATpLmVZzMwpA7u6tUSzCR2B3ZDMJbWWxrYCjNRrcJdXA1KBjJf79BBgVtxsLVTMybGHgPQXzDvXpetBohrG",
  "key13": "31Qa46jwXWzRwEF9B9WutgTAUv6HFGDYZ9qgnZnTov9duqDMKykkcXabXUGqfBt3dTeMeiRdGdctdN7PEanh7cB5",
  "key14": "371HQgyRnbqgXX2hxA6HRBEdTbxAj43XxRY5QSx7WGPLt5Deg5oULETdn8x7Q7ihnKyhrhDqxCLJcs2tDJ9Vm6C9",
  "key15": "2BAvUp88pAJstVyNRpFd6oLRAQt68PSg44TfyawWvRfvsVd1kTcUa279PxHFXnYA7DVwSGsEqoVM99WNYZ6zN7ZJ",
  "key16": "4eRqtXnkSYN6uazFNCFHozBGbQE7kZSpymk1dN6pniPEUKDuNpvqwQPjpqF2gZbVsWq18BzJrLeoL8BUMWBwfXNL",
  "key17": "2a2MZ1GiiCR44i9HEMDqT5ztWmrFGsGiZnC2zyCLZ8UbMq36fQpEQpntBnT2Sw65oRXa2jHvEkZkhZRTn2w3d3vN",
  "key18": "37iiQXRbmfLojteZVMJJBjkc72pSNGjqzwmArxSu3N2WWSPg9VSnPuSEeKyeD3kScbah8VKewXFLep1juAWkCxEJ",
  "key19": "2Pw8jsbcWQ17UAT2aUvS5ApWfZCVGrutGzjkjMvwyUawMydT6vAotKtsenfxTLJkxg8XHCTaA9eJxnAvKeN4KKDP",
  "key20": "4rXYhgrPzSibHPrtNJg7hUvRe25e3W8tTDKs9DyBEj6u1rx4mXbYtkJEhNC5LTHUhD17fSh25q2FadYLQ4io5XvH",
  "key21": "3NUtrX1v2xMQvKjEgk9vavYUW1ojsZHu7ynwj8CMWKpihoj3oAgW8kjScUhmYeDpAXpMZ2nHtw286o8jeouKkw8J",
  "key22": "54QkhEnAkgCyThMThrtyN4Bd37xPVAqhsTVfsnZS5LePQHEBptyDWhZ5x59HR1PLtF23YAhHa9PhWmE6tKT7tCPa",
  "key23": "3gVNGP5cDJCdbqmokoHiVhqNjZ3n8JQvJyShT3FareygzTgtsF7adzHVDZTqpXHSWGoSrnq959tbHvRF8uphtTbC",
  "key24": "5USibMWVkpYawknQv2N5vtuD8JAnT4ttVeEEmSH1N4eGnH3dh9PfsJktqkjhumWA7ffd2SDiZh4t1KKXg26Do5L8",
  "key25": "5MgWwvLazS6CcdECqAdbfopL97QUWPnNi8U3joaphWoiJdBiA2emVthi3UB6yo4yoNKvoJsUf6HJsLb4f4s8BEXb",
  "key26": "2nsdKTQxEzivgY25scpVR3bDaNHDfEBNyq85JXbBTVjA94eeDho2V8T28TyNySrFeXRbjsQ6e7vNw1QekeUrRhKe",
  "key27": "5VwZHwwjGMLx7mhBaYkTtbi3wzLsrwdTijLEhgpZLoZrRT6HUdb6NnoTM3D4U3p1vDkxwPw9CPV4np8L1M1UkHhr",
  "key28": "2wMoEUF4eNmGduCm1zGKthMZ9gKmDhFSgH5sbnz88DcFNcfxH7JP4JQa154pU93JrNrrqwfEYYTh12FEUbPVU4Qy",
  "key29": "3sJpjpWMKhUvS3ZToWYVym1tFF5w3qMjcsHDEzRMCVVCULt6HQitJciCW4rb9536aCGk4ycm5tohyG9nqpk3vch9",
  "key30": "3yn1Gqn9NiNndzNGuKMD5Muri5faqPyvL7oSu2d7ZUpSSsZLZrDr2jjhhXJpN6bdumZQrNqjGjEoN7w7GbmXUDD1",
  "key31": "DRRHZ91y3aQo9X2KazBCsnKxYq7gMMPzz6xfRUwwAR2hk3jSCwXK3PWwH68wy1knfaBtEXNWi47BvqPHDVrfSnr",
  "key32": "3YQDfUYe9oc8JizZWefx4ZZvkETVu26ox5zcMxg4DMGe7DdcMZKPTDhcRTuqGz2TQG4fo1oWsPd1nJSyGtr8cE5u",
  "key33": "4v51FFGx3gnSz73FotyhncBt3tkkoxPqmCt2whiADnR2rqBDtwJtXZcphYg6zP6FTCCCyAJcBmj93kc3EGBkrYsc",
  "key34": "3HVG3vwfR7xkXd819ZEuyj98YitSBE1uuCXFyZubb2nwBAYUWEpDZsHJggYJE9hdNGyvj6gZwvga3gqH3VWLNasg",
  "key35": "4bdFeUGtQAFy5tYUWmnNqkBhjVfDcj5QjB7wFGZWjgRxzcT4txjxFi6as7ub86WDz82wA8ZfC9SBXtxeJVXTNRsD",
  "key36": "5J4JUaHi9ih32j1p2V5WdQNH96NMcxHW7WuJC2zeV3hac4a9RE3aTBHwbE6N1ZWQKwLHNMyYw1tKhUW5Y912JocP",
  "key37": "22rgHKcTfjKgiXomehkBaRtgHqENgfWex4S91uM4RaWN7kHon4qCZnJynHuN4ijhe56H5LAYXC7v6BXV1ngyT8xn",
  "key38": "5CiHtZw7LbKuKZtZUwWQSjZfDGeovL679bCKsbmwyNG6TuVyUKDStkPZCJdfGrKC9L7FtdPYiWqAAM3nqF3q5bNt",
  "key39": "5eezrXScBnVvkzXbMe6TYXntoxyzPRw5TDmMHEEwco4yF1KHn1wnS7Kw9okneZcMc6kePzdKPMsyM1TGxFvd2YfH",
  "key40": "4ogGEZoB7aFi4W4bNBqdnqJzmVaQMCBTyLhkXu5Uj6ANbmCNejYudo6AMU6DpQ4krMLPhgqLpbWDHc6N84dEvDH6",
  "key41": "4hQ5VDVmfBNYFb96AwpvRnwgSM7tAdApz2xn6xuYKaHoh6eFyQWW8HkNmFXiBEARCmV59DMPqx8B5YjEBGUZ8sd8",
  "key42": "3YuGmmtVww9WZ1ENkQp2FexoEa8VJ6sFEusTJdsysif58ukHHVTk86E2NktVudAz8WXd3fZ3pEZYXm3ifkn4f2Zg",
  "key43": "62p25AuhdHbMun5rm3axG8DD1zrbdeexSvG6JCLcx2guaEq1J1ip3sYCGYoLLo8m63khqEL7qEpomHDwAAe1Wt8R",
  "key44": "5UxRfp4oVYKCj2u1RRqHhr59ERDJ9zSBaUfKLPzxVu5hN3eSTWnyU9tCWcLW5SNS4Cb7LbAdWLMx81Pkmgri5qFG",
  "key45": "2ncvfrAXxouWcLMU4oFSCd6cBUYFxt2x352UYq7axKGQQUYCYKdZoY8oTNWQdGBirSim1gdudoQij7inok2u1vHt",
  "key46": "ofcXfZBVCAYtvX17MJtqi8ebF1Tgg6vDKG47DJf4EWkmgCJkwcr3LKs7rseQUXUPcaMdt3exjwb6Y1NJ6b7KyQD",
  "key47": "21Rjkj6yuLLcjr2AVZE26k2EKDW93RpiW5V8Qco9W3H6qGQT499JrZVNr2JKa6bomq31Lzo1jmSTqQprkAnCxgLn",
  "key48": "2qp3JNwt8uEx8p83k9Fs5xtqRo3UoTY5e8jzAC8azyGdUrxb164E9peuUcKzxhQ9J713bhYXtzjczoszbPpQdWta"
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
