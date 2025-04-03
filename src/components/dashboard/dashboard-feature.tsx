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
    "bUv4rq5FkiYcb1ngEwGcHgXEbHAxk76sPj1GjN3QG4KmEjYv31aACzXa7o41DpzKu1CkTbU9j2Lzmoh7Bhh8EXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QjjqFLqfwjjGjMqQ3cNFyU4apZuRKCKfmZ8NV8SxZpUHQiyrmAJ1jCetCgGugT3NRvQCpTsCNsWgU1DkVgVNDPi",
  "key1": "1zAoUGibxDhiAEQQgkcv5oXwxwJoWmCQFjdqAYcGpHPzL2B6QNZ5BEEzw6ovxqAKPryNEN4MuGL71rE6CPJBDC6",
  "key2": "4njFZLmn28MAvG6NBAB4ga4yCdYK6a4mfEXYXRHxgGzjVmTu6BFfyebd6gdEgpaSeXvFwd5jjP4WVF57KA3QYmeV",
  "key3": "51wvrNE8eGK7KGHR3fibx3oDLFrAfw48XEYRknoJ83k1TWMBaLGcrb3osjwW974Lr4yXfuvmKZi2qBMHEGT6H14w",
  "key4": "3y3qFrv5vbCNfvL6Mb8eTmeCTExz8srQhRsnuM9vf6GdocX9WJiV6YY5McYGRyR8H7ThEgH7fuoYSHoJkezijL5f",
  "key5": "WVniHiWuDHgu86jXCgXur6BykJsRhboCokVBGzYhmhUe9NRfig7XQuqecGB1x9tBuXe4edN7t91u1rVBonho4DN",
  "key6": "51Rxr35kNtHvk5t4yTC6Dvf1VhEqFfHHwPwr9JpK4ETFbrqav7Q1atyyQPH9YjBER3wJPqCXyNQ1BbGkFm6xsLj4",
  "key7": "2xptUR9R6tFoGgntDa7xNx43FJxfi88Xtit1J1D7U9nRfRV6bB7CztbYqcNXhnS9aboYWBLbDFJpm4Rhap7M4137",
  "key8": "jq9EfcThNDMC29viF8kTXXjVP1SfdJaXYhLgfCKHBbXxWYUWzfpfb2fbcdQ1s7pR5BKB4HJqYvnEKoNAjhG7ZWz",
  "key9": "4e5tf9FQ99zTPtcc2DmdGAVeniNVq3hpBkXv7juh12nTUxZUZpoEdjXct76qdVVyi6zgMNeUTxTyLgnfhoUgB7gC",
  "key10": "4FNJiN3vVp15c8ymrKQygu2CaQpbyw8mkfWe7LvPtTUBu1p97Niud3uv3vyhs8hZ9sRU5i4DswG5FBG7rG3wLsNB",
  "key11": "PDH3ctUprrHavbXREYMvBebGWJo3T4hd3zZbuWQAqpSH3WaxUCMhBoHsFHFQnUTSecBAGcaW8Vm3kBGuCShoD85",
  "key12": "3pYhnyADSf3UVKWUZLVsDShuMeb77FWGMRaz2nmmLdvgsFn7rrQWAkmYeDr5PfMYvzUNQ6a7xTHHwsZdZXPXG1WC",
  "key13": "4uEaCtqPgQqCLBg3yuzWk8G5m11yxVxYjAGKWoYEB5P2ewxqsd6hyYwT5YZMmfJcWk9BzkkyTiMa5wiuVaUZ9d2G",
  "key14": "5DfhiZmtpcPw3mRK8TTYr2twxpBVgZJtg7B8gL1ahmtoqBhHD9xhVSyww7grNNZPpqGCrsW9LxKpB8vYZGw1tfL5",
  "key15": "5hDp6es5yzhMP98PJm67VktFsJ75EGJ1BmyYcq8XdT3hwYN2abrWhLTSRYSToLxg5S5WFRPX8y6KsCHDCE8B9nGC",
  "key16": "BPhUUCBGMMiNQeDA4TeSSWhZYidPKuHdnSiipKXeQuo6UnmX3EGY5ntpfgXAxNRj8epSafrZ43Hj9eLcEyTCZrf",
  "key17": "5Mk885SQMzxr3uM6tdgJsEV2xvNNzx8wEBd4mp3YSJEPRHmy6t81sJJSUzd8ea62RRcHHYGf8KAxd7bPwYtPMNei",
  "key18": "5ez92uNZWaoR1ATrcBkXg7gNvSYokxBxN3ZsNWnWoSN6YQchR5AztGV6dFeW87unS8sjRJXE5dY1Js3x3AHKFdWn",
  "key19": "64tkpCUnhFgCZUAtuxnfYyJz6ew86uYiyjtLHWMuDCFvsS5oDEvpfRmE9Nc6hSapm1gfp46dLDRHfTq3z4bgQpwC",
  "key20": "TF7pNc2J5Y94RWi1HBMyG7qc43Si3tW9fh7UR1veQUR4qa9hAJEafLDFbAf1Ti9VsEkDKoAe26e8ue5DEwqbQmB",
  "key21": "3zc83UVwLG66yk8WMs5PRoWStgbtSa9gLc9i4e3hTDmEVbL5iibko7DFq3hqV2mRoybXmtoXaDt957YwqgSheFUH",
  "key22": "5at92z4Zq8yWcvJmJnVSoXZUfAsotJVZuvohv5K3VWRrdn9o9YukrfATDSKrFWucmGMe3oJ4qcjSfN67EJWnvqtD",
  "key23": "2Fouo1DxrqXkaMMGD3b7rh85p6sCAj5kw4DR1gPd14CfXcpkR3a7vBNrQuyxgdukdyGW9Nveo77nYgagoTnsBxzM",
  "key24": "3mcTfE4uQHBXQNJhtWRs534hGxaLR6GN286VrkeAaNJps2gF1bC9YvEpiJQhGQ4L7zBeneUp97FsCPtig4sDtTee",
  "key25": "W2BMYqpnd6qppT55fX4mAZbzsYGWsJxg4zKHa28Lfkj5ipati2UAz1PoreXBVSCRdXyMgaZv4kqpWCwmqTVa2ye",
  "key26": "3utYgEyAd5vE6GnvNK1RmUUT4hsWx7T2rU8nq3yB7CS4s35tAt853soRBHMZj4tGt6HAiRemmSCFNL8DxnoGfFR2",
  "key27": "5v3etV27S2VBZ8evStNnuJkxicpJ6iC1vSqu7wDR3VaPZCRKe2R3ZGpHqKi9BsDMvuWocWVJnAZMpQJT9uLTYWxv",
  "key28": "3ZEccGiX3zpBes1BmuCG2KQHLMJ3CEvAtmwP2NHRmwoYm4GaJyhrMH6u1THsRV3H8wJMW6o7k41XD8oBZvBL8AzR",
  "key29": "NGzkmBNwD7UdGUpKyfLkQF2TJ7pwQgcj5YtDaG7rgk1W3eU2wz9qiJETi8b2tTWg7PkYmPCLHvLijdBULzvu957",
  "key30": "3yscsekwhCdUMqRuX55N2zcMY2AVAP7E9qpvRt1xqcwrHuxRAzveWJhMsc11Hfcm8ExUjMNACJfdK9FKbAvpPssB",
  "key31": "a5p1UorgMb799Rf8q1yKM9aaF3XqfL9WZ2eJ491ZQgdt2Uo7wXX8t5j685n5LBdpPLnH4QPFBNsBwdEfcmNJvg5",
  "key32": "3ezotDQuw34qitays9xyYVw6jfpvda52qRFWn7t9mZmh4TvKhHpfiSDUm3BJfTuEUVVEx2RLhwgESszBP6owdqzG",
  "key33": "3k7ufn9y5DDBCnQRgdkNjHaKT3Zbxyr1fF5bc25xoUd15LuzR1ZkxiXuDyNiKgMQD4dQTuPJbFYv6Hwji9zwR1Yr",
  "key34": "2BNAZ8XGMwmenFXT5X3wK4ZosnBBx4beV7GasfAJ3D6aQrVT9djMnqE9KEYBd3xE65jaat3e2Umt7TtCgmfvoszk",
  "key35": "Ktx2oMnjVsiZBxNtc5qXMhDgvYyMmaykvUDQZDPkETp6yPfxacDmEHJVvYfsBbWWUwkvEX3zHMUo11XTqqmXqaC",
  "key36": "2UqWuF4DrLBcFqu16fBgo5iA5pnWg3reDXxVc7vL1NTwBomsu8Ye5SqHeTMpeDPujcD7BjdVAisLYgpBzAsQaMXr",
  "key37": "2cEMGw3i2bzA4732N4HsBnPsuWJcPAAnQGFq4mwNNsJYnvPy97rU5shJxTShLZDSopRAotPobyDRoUyJ47GDwnWj",
  "key38": "4XiYZjHgUzYSDRE2dKA3ARVTMiiitAqshoiNJGSUTHb8mosSgavVGoMphckYKC1pniyAK6NZogf7jBgsXGky9GBB",
  "key39": "5b2bxH6VsRE7sPKvui7E8B5C4iVgEydDaEwEjhd6Vw5pnGVuFkP2Ab7QhtceHCcpqKVcPUsZfreJt3VCp9uFFMke",
  "key40": "2fYr9M3RBgA8Je8Lsschoq3BRgtfhCRyVtWqLgz3rfe5mUFxzkg8fcf79hXR81nkRrd6ieWDrf6YSYLFERQysKjX",
  "key41": "4eB4LUsF9pgyvAMC5p8y4pn6xbCMJb1tdFfpNptjY6JT8am3AMJNzDT4qYStWSfrVHKx5XG83PKBtG6Rvtyri7VU",
  "key42": "3YphZYGUQ5y7pFKdjcTA4ThMrfBGKZjDbQMQjUpU7KkG4rCV4dpsSfjacY9GqAqKSo1Ys1Z2i711KLgEYGZ923aA",
  "key43": "43NjkgPttE11BWZgzSeqKjEgHEnnnkr5NHhh4x8aJyDQ2p9uzxd9RArQowFfeJL8rmWa3BExhFZXCu3BxkjhoRUj",
  "key44": "4ryxXq2Uy6QnPHHVHaLGd97UMpSdpXq4HmVgCWi1pfeBzrtaDbV1opoCMSeTsrVsdznUJjDZEs4xAJNCDz8BjB4h",
  "key45": "LL4RLCfM9jDHordqn4uKwGcspg2V8R3GmKnQ5j828m5kscZQAbL9Agsv3nqLZaUwYcHvd6avbFBA4vyGx7Nme9r"
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
