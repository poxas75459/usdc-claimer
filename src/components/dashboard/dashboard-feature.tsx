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
    "3MVgEHwADQpAWTGRdX82wX56K8gX4PgWQcZcnY1yzVqiPn9wst7TGS3iiiGRFMZYQQk9VYkUjkvWgTKrMeAAtVcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rduQsoD5e8KEkFM2EF9ZJGmZpoLWgztep5Ubwgpg6DpDaKMWaxXQr98qpAd6MKFd1XdjyCHRYvh4e2sruScnDoy",
  "key1": "3HydZhLzDZfEbZ9mybybbfXWcAiChvQY1ueahrSVKpkTcK8HFkaYDtRua9U2PmQ13cMMMQwbPBXAt9i4LBkCBsj2",
  "key2": "2AyLtbPEjpE5nAYvDUHmwwMSUXekvshZ4mobyasAzcGKivv1jbeTfWd7s6C6GcFWSTVPL6TrAtUqyVai5spdsD9i",
  "key3": "5YALnUQp2niTeWgwgKUvdehMNAitPEyuLgtwN2HBKRZqFv1CNr75Ar2cNKYTK6csgW8by5pg7CE3poWjUmMgUK56",
  "key4": "2Tw72oURHGC9w4MqqgckHpWJXKs9kEe6e8EWPUwSYjBKSY3fSFeoZoyjQ6h9UgSwRS9L5LZxQjxqULv9iXdgfgz3",
  "key5": "4fg77V1ufhkfFshYY3cxBgiYv6hj15QZtrxD6554AxZQeGP8PJevapXCHwKKzrWtVbW5nzrJTuEhgSn3J727u34r",
  "key6": "56EykWmBQoUmg9wQqPWW5PrRskDPmazsw2MPB27RRiBYRw4hDJjeaE6AX5fKXFtmmEkinQyvx5nYk5gLkt3R57Kv",
  "key7": "cNtGHejS774N57ZNW3ZFkyDAFsx76CdbdZSMgDv6ex65SxDSHZiSVtz27wUpog86j9RLnnmegNoETZwBeuJghcy",
  "key8": "66ifegZKgz7fbpfmjn5W9KwQ7qTGUh7U4122jUjAEt6sF2A8h5yHSa4JRc36prsh5HT4bj2jmRmRpNhPCsw8KMNh",
  "key9": "UGWfeHBspYFobQWF7FQMzUi3ocDSMebmuWuDqs2TnNqiLXAbVRXfqL5CX34QnnoxoZrAyCi5LK9r2kmHLtRAs6s",
  "key10": "2mQZct2rPwDw43QHtV6GQa2omcmiAjMYTFkznvbgWCn8LZ1iVh7iHHWKCm7Ym7ZFLd7dYhHy4eHeNg3MzbtDmvP4",
  "key11": "2wvd87CUg8Li8HwRhoYJ3P4Qh2BZ9Fb361tje8eBEfCTwKSUk6AgPfdfqE4PHKkSiHxw3FYRSbN8Ka1nE1aUfd24",
  "key12": "2ar5UYWv3Fh4btBg7QPyquvgN7bhQAjKwAKmySGL4ioa1oxa7DMAZwfPQmJ6fQ7sGwHGyC2TUgKLFpKirWiosZL6",
  "key13": "5EZXujvnmBkyByiaUwPhSNWFa7sWVb4P7X6SC9b4zFEZcgixudgkNz4XzaK5j9vinH54AitJYz2eArrn4c2DbweH",
  "key14": "KEd1pem5wu7s9jPAWfAPSPRKEHjoybpULYtZYL9iyex8q2khSt4Vrau5h6rgYF4h4L5WzbBviCVxQiL7PYLpay4",
  "key15": "2uwcPuY1GTsuiHGZ35CvtWo5BENKe7oN69Qasv45Q3hfUDmuxhUv5H39kBMzhhFf9HdJ5sMu2Vu1y3HX6WDpj1mr",
  "key16": "5F3L6Un6MvNw4SGHXbYRcCgDwGvUmwYQoyJbQC8sbZU2526cugnQh1pjmgKwsdZNtZJmr9tpCJuAtvqVVueihkLH",
  "key17": "513y16JEmg65w9RRp6nJ6USMDR16v53SZEW4kLsMVwJaLrszc1Gco8GQPAy53dxvir5xidwEuooWyRSMPBuYS5pe",
  "key18": "2iSFwZFDjntFfjAhC7JyT9nbCHYSk8mi4dt4t4LZfVdtogze5xXfyohbDvU8HP6XeEDQCW9c76Vtz2kQfzeuK64H",
  "key19": "2oiS2xbV3Fkofyd4TPVpkyi3kq8andr9fogf1YU2hNEGsdwG9V1U4EBEgY1JL8bYD1ndDWsoTXkXoPUEqnh7heAq",
  "key20": "4xSPhAwwNho9ET2TqvnstBPY15vsM9PYCwnY4zaTTVop6drNfS843pvgptwjSPQFdBVmvc91gWVReSq2uSN272m5",
  "key21": "5pGhqZt4HowZ52xmgvetzZ9fbPWzWGMM3h6bZU1m3TAs5cibjQcCJbz3FpXTU2bWKfS6jCWjgobFRGgwktSHqPQY",
  "key22": "2ryjq84ViwtGn2zNDYPTZSoq1mSf8zJAFdBQdNgzMht8nX3YNrgfecq3E591uGoknNgGRmZEuKmEkJjdFBFaRWE8",
  "key23": "28hKg3xxPLyfoG6SWpR9KiYNi7ujJe6MEBmkWCXWGgkJet7xAJN3KVsXUhzgHe5TMvuq2JbxxHdKiGMzKso5aX38",
  "key24": "eMumdgJ9bbeqP2HQvE5MCMPTBLmkUvziJRBHmABdHqiZqdvPxtKKczAE91o2F7bKZNbzafajnSvBjCCwKZDvRJs",
  "key25": "9Y9VtAEDF6fEBV38LCqAD8qXiTtb52PYNk4WCRiQ5uM42CfL5WSzoB5KzPPzWUYR88vyWieuBr8nyJ4uaTn8cnX",
  "key26": "2hAzn5dByYvCWf7zGMAjzGnA5m5arrPUhei2sjVks3yyxfLQ86HqShPMDdCr8qi5nNguVAgh4BwVpmKsDHEzYvKc",
  "key27": "2V79UrzPo2sjJeMX8ytxDqYSLTmwUDtwSRTfoMAsvH4wKNbUvmVqMWSVJqyRAasZBsfULreTi9nKAf6vcYbrWmrG",
  "key28": "7BymzXdjrNADMPc69MvUgtGKVjM79RjjXs6uBW7E7AFrMqYNmaavQjf5HJn7wSx6HapEoCVQFuGAPrXGors2Zbk",
  "key29": "54cgUzck211u5VSxZrAXPND6BywJHn9ytfk4g3UD4t3zsUE5qssamsb5WHfAxgP5n54DZ1JuBWAoNoMPwKreNxvX",
  "key30": "Gt97P4A3t6g3HSmqENRsjubHNLfAucoPH7KpBjQiZT4UmYZ6DfYRwzHYgfp5YEV1bfRps1N6kEEZXLcM3dpdVvc",
  "key31": "59Gn9DV5Qz62innfQZyXQyxLhoTBWLAuZa9GcywBdo7jMdVQ91TfqWG77z99iH797CidVBUQdXZSUhK8tNMEUttx",
  "key32": "2iSb5V4A67bWL9iokJ21P5pv9A5MKBKB5zKzD1adta6fvgPvBsqTphht2ma6nSqYzqdJtdvytzbVVnGpVV4VeD8R",
  "key33": "5Mi8VnighecsPxrTAxhjahT1Xw3pw52ZBwexVQc27y44J6TFKYTnDjTnxqnP9dbJegjHpPoQBEoDjanWKk6Dn5vG",
  "key34": "5CQ1nsLf1x2rhcKMacEmg6p2vfCSvNqLsXX38cDU6dje6g9m6tV1LXQjFgnC3mJfDtyH6ygxJNBkgedHF62GJexW"
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
