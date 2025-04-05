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
    "3CpvHjxtfwXP4fHQcWXHdzYioJ7R3wmGHTx2QkJjZrSSeUKcjk5QjLi7ftQp9cPkf3kRDct3sgBhDYmqd5HYZQPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7Tv94zzN9hqENzs7KQpRjFHuPnrwFrxU1dGBXbQQnFkGPwgGvwZFhZyPvuEnJu9LJn8i7M8krZGC5yQtPDDBa7V",
  "key1": "6uh31mxcaTUk1rwVnrzdV5cUpUFP3QePsWkBezkEsvc6hAKLxqwbuccJRQnMgWfBwKX4x7dK3fVex3w1K8LT3eo",
  "key2": "5kyBNrE16wXwzpBZmKFuFwetFxs6L9mw276kWRMoq2F5KvVpwbD8xGTmgdh31mbu1aojgu6F4t9ZGhtPQSCmwePv",
  "key3": "4dNVb6XmnByH4xCzgMYSPgzPyrMPRjbASdCWVdg1GBii6RjNVFpdwUprryyxTBAXaHwxhDN4Mgzg3tenGJoX6ja9",
  "key4": "48bQXfB18N6wRoGQBARCHig9bD9JA9ouQqc8ehX4PPvPVbyzLDWpkgT6YgDUkcw74S6oH29LrxSNcgo63VHFWWwX",
  "key5": "mVQsJ7wAv43MP4Pp2gs5zVpfm6UvvPWKZ9AWVJWqRaTtDbZsaD9v5gN6eAKthCdcCu7ALGNUQiwJTS8GdrJbZnc",
  "key6": "GVRdqhrHgThKShgxVHj3VPSj9sevU7eEgbuMEZmNPx8PNZALKo88V18rwEXEurCutkQwz1h8AipgXbupsQCMcDb",
  "key7": "F3PxgiN5EjSAch3sRQe39K6EkQD9C2BAo6PxUVxAbBcfSsRoYQXoqtqMZNi7SgaySpSztHdkJ7sCmKMRjZPgiWm",
  "key8": "2xSthXoYMwMhVBWWL455nRDh51mQyNy8aaGAtm2c2gycD1ky3qFtfcjfCpzJbZreFoqEsZt1wf3FAjWsr1AAKgCz",
  "key9": "4SSuUUe6swEzb5ELPusHNb7uw1LEAEVdsfLgWY2eVzf3jTcacQspfJp6XhMDPUwt7tuTCaXzkZ67tYQmqJmVm5Nb",
  "key10": "4hCq2xCSEnVVfJA5bRgryD3BifoJvFfZWNhkTMPQe7VxasJBuCbg9q4VCCQHU7ZCLeJoM5ukcs9ZG48JEhJrTkka",
  "key11": "4qruHSGn6hP3TrFKv2YuYwdmbaNiGydeZLUhhLF4x6ve9wP2rcXqCbxmxUxWcFfHaAVY7yg5TXypeHPAEgzw1r5Y",
  "key12": "WNxEH45osuTZPy3MbzbL6wGGqvzqkLNx2esAk638N2uxCVWeXQ3i4ZzLPtomN8BTq8iao5DMV2qGRjimQdbSWow",
  "key13": "2X9e1DMMRdBdU3fHRZFvp5tj4YRUqQr2AMV7jpnQGgA3Cx7EP7UyoBpGbvCTZmhSB5GhUNU7hGN76vjkdYXm5bgt",
  "key14": "59sQtUrPqVHhd9yD34BbQBGAwCi4JuzJUfWRiJp7btwZLvdkRdzptnpv5VmJoa9eqByuzuzytoUJjVBhqGxdRKJC",
  "key15": "2JKzG95PTSspyiPGeLYf775EhviE2fthuoRn8Lh3Z7WuycwmJcX1NbovFM1AjeiWJR2h1ojjSGf81tPJwfs675xr",
  "key16": "gW4dbX5XFXdRMhwUFf4zmcWhkZwXLgHVj7TqoNxXhpG2cmp9brZzWdYUbGEcEyERbvZs78sUK76cUTsQiwv1Q7M",
  "key17": "1xZgmnrBZMBHMJEBGU4M9Es6mxuAvUSpbQZWiRdFyDPTVwqwpGQ4YnzPeGaCVZjfRktpyYLzVq82pLSnTBw9grN",
  "key18": "5xPc1r5G8r2H7dBuYVnfs6Ln4xp1Xaqj2BqDu6HF6aDcVy5zwVSos8FUV7rxFeEpCyxdftogPDTWyCWdawBB1EKW",
  "key19": "h6smDYDgb6Kny2bftNiUf4rXuo27vj2tNSC5sztQLz4TCtZfxAuJ6HdYZXbWpEV6qSbPyyaUw9EDSVwuV7UEpDh",
  "key20": "bqAEX3h45jgxFvGNzMz94tyP26HXngyy9XZQzJ3yDD7QndbxjJHbWccMGUGNmrDxURAfmV7GGp21YiwcmwqdDgE",
  "key21": "3g4zYT48tPWFFmBNt96hpJn6TCaT2PqesB5k6Fwwxeu6jTZcMNvN2XeveR7uEUAMdcVcc6n5NASCQmBjJ81TAV76",
  "key22": "L4ruyRAfLkMReyf6drK1tshZkEscBzUHwTRXfHk8ADi9Xk5K4ss4ZaCnewDHbJkbKHqZ73kxtcq4zg17kqhVKTy",
  "key23": "31yqaykWwNhuMRuVmypXP5LvocAnQxt9PnVreWTTE9P62ao3M2n9XVJQKefgdRyLeyY7hrBzCfaMoDZMJBWv2PqF",
  "key24": "4iLZ4M6E5DTVW74RiwDZTi3zZAWteQ5SvkTDyGjBpZT1QUL8Nqgf9zuD1UBn3RgZ7cqfdLGWtFm722ZdB7EBt8pe",
  "key25": "5seUsef1CmAmztArAGv5QSVHqsKaPyvFbD6qXnYTbZHJYhY1Est3awnTEGy2EvSjQrpbQM4qtMzWXsU5V2K36ixo",
  "key26": "2guJ6AndFhm5HymJUixYrcLdibh5YtcqJSqeDWZQasafgDEokFZQVb2qJNKgrr8XK1k9hPGCSFnvJKjCGs3zQt7S",
  "key27": "5ArjVpjsZzVdKyM4DDhdoyfjnhjqvBvvJPrVSj4yQWotmeh9BW3Pvmx3zFuvLdBFpx93dRpY6JB4MYCi5K1s5aKW",
  "key28": "4HDZ9njS9WBYe4WffTv2KfDCUeDgdeHfuv3CAsMMkskz1znprPDFE67C4c3vwZa2ew47D4LKGdUJnFKsWEf99yfy",
  "key29": "3FvScZRnoXCJCp6XuGr6S3pA8X6H9SFF7N4UHJfBuom23yse1nUwoQJKEyiCXhFc3wZWxxLDBkNNUgMY2oag1XzP",
  "key30": "2jWqhVaznbmKrPBxqAEF7nSXFmLPjx7y6GgnfxGBs4tHuhhXRQcpf1MiRiuUBBdnCZxUXUzjn3jvxr9vHrxcUEMQ",
  "key31": "uk5DNQ2zQceeueEfT9NahdQc64u6jUANLZvqkivTjXEtAYkrbHyFdee1j4YkvjpWEghyqqhK5xjoy9VkWagXwMR",
  "key32": "4EJAAjm85wUnyhHgef2ngy5cBDFBvtgCLRXtyhUSHc85RaWAf5M5Yi4njPRmRWkGBPm9CMCGXx9RHhUX686H3icA",
  "key33": "2o84Cmjcid67JzgV29mF2gJ4E6RMBjjhNX7gj56XWodox43xvs1Nkp4quNpxoZUZTNrjh3sPhUvvqnLrK6jKy6Co"
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
