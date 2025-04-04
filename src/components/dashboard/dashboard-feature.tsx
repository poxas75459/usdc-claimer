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
    "5LFm9GK779KRwzr3quta7x4fdsMGmXoD4WV4zVbzTf8g1UiFEjJi1a7xMhRhJd3fveZy4X7FKtJE5ifBJR8FeM8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jCfKwQsHu1pLAoZRMwj6gd1Tjk7bB1ZT4Yj73ywpqvoQTR9QDi3H7udR2y8fwYGkjFe48qBgbs34q66Pauk6tTH",
  "key1": "4JnBYd49CMXymMM87S1EqLDWGwLZL2ykK5FyBW3JqHTix3P2EBUBUgEwGY1aVCiG1UGNcvDiDaKNKVNje1F3FD3S",
  "key2": "2GRRfAJUrQ1xJnDEQx5fhLPQ5hkWuTEDHMBN9ZztHwcERRaHNTEqQRCYp58yfFuQjHpb6XCH4TPRzKZ6yrZy94oH",
  "key3": "3XnqwFNTzxphdNXAaHJoyJaHgV4iif2wgj27S4CEKyFZiYpqMxypd5pFyTZHQeisU8VAmVCttcZzNFEUuNA6hxJ1",
  "key4": "237e7zkQxQ367X7H1mAgQ4oENf4JcTyUus3E3cWRGrqaSQERSuUNn8qLECmMUpFqKsgbLFJ2vsnn5iQLFKnKZnZF",
  "key5": "3ibEVF9rUnZMb5sQdHtNeBPwtmpQDRkQmUYVNN8WXAM6NMz7PFezhhJRLfBts8kBf2V5E1jAAhRLh27ZCxE2wPpt",
  "key6": "3MaEm2suwcsNiXzzJiBJ3QTfkN4nC8BpAxa1pymc49cQpG7n8yE8cyUWVRttDoByo1eFyTvUUk7qkSEueVt5RZT3",
  "key7": "5JCfCawWAjesijv6XYs59GVuruJz1oWPi3cZtH7UVyTnATpRSQQC7uWkxjrGshAt3HBhv4jsH8N3xFiLvqWRJ47x",
  "key8": "3nNNqjccR2np5QMFP45WGuh6hK9uNRTmionYN3Gpe9u1c2FEXpXuEUGBLzGJa9k8GjQeP9fvvPzgFMJrxyt13aGa",
  "key9": "5fgL9FQEwtVAXAabDVxBc83CUMcYvvXquE54PXrdGKe1b2PhvyJtMvnT8MYeSxsWkwSs7SYiJSwanQDYqko3oW5z",
  "key10": "2GbzZstS23iwUMKuGS8qzMyjpKMkEoUfp9DJdhRd4pEg2WydH6eskmtHNiU1xnByLcdaDrWnqiDL3B5LUMRjtQD5",
  "key11": "V7fXWEwHsxF1S3sVutzYopaaAj6sLjvCStEBjZWBcskpfG5BswF2MYvtE3iZucEnGsgD2rSShkzsJexfo3Nxxzs",
  "key12": "2kG6MXYcXtvaiuNQi3L8gXGzKZqYbAm8qvKYgcU9woCDsqHM7dTaEoK3LNsSwJhEVKwnQZ25gYaX5RFq2uhLfVYw",
  "key13": "4qLMjpxd8mnH8jXr4E9ooUtxWJ5TV4Wo15cLeKkYiqXpsBB6WwdHkWUXCk2VxFDkmDUqgZBcCt6UMh7JratBqQLc",
  "key14": "TsK5hEQM6KJgbvVrDhrhYJXLZca3ToJCG9jkUCth6S5zKHR5vbzmrUaJZCe57fq1czhpLFdm2wWU3haJ6xiyj4H",
  "key15": "4pmwU45jcSMMC7162Xj8G3kiAzCs6pUM4kzxtmKi9Pqz1V99KSfpeVSDaXZH9MFfK3wQwMzAeLi8Z7D5Q8SZLFy5",
  "key16": "3dtDmHvMbJMKAMeJCkn5xminCga3VPL6ULuLzsdGPUqMoscM9D2YnYNbr6kCw6CrC2yU2gdQp26dDRZr5mSidtQv",
  "key17": "5SpF3JGWsZ1PxExazAD1xW8hBQyWppu6skv4Kk4iRkcdtCDfXF9f9YKy3dwUTKoVertfzYPTreVjdmVYCEe3ybN9",
  "key18": "4kgR3RM8fqEwdwRXB36yBodH4NTdR67LZRyoqAw2tB2w6rr6sdh5KqKN9rHUa6HpQGbpKhC3pcDhrovTGd5EpPtG",
  "key19": "2buKcfJ7wHYdpUq2W6Ev55gSTnx7VAEJPBd6R4UDTws1sRAy8iL4ZLo8b2MbZpGrbpxiFLJLnbkJPZDaZyhWEMoa",
  "key20": "5SyC1xUmNJyu5Lgxr6HjFhbBzAyN3jHg3TuZuFgdgUBjK6VCFZz5eEdZ5RVYFtJEGgTQVAyQ2wB2AdzVMBfRnRER",
  "key21": "a8J7gs1783RX95upao6QBrXf7ABQFs7DcKeydQsQZcEgTA63BghUKG3qmeEN4RFudSocQuk8pjjAyJSZcCnjnis",
  "key22": "EfQ3DUBtecUAd63GizBD7y37UwjSQTmszFThew1dpmPPSh854V6VtbskSqfnV36LXicQmbFUpxaLcC36nZtjSuW",
  "key23": "4gCNoHNXKKyeLRWwqf261DMPvFe7sQ834qwLJqF4C2YxFd95Y668dKB67YQNx6iQK9ogDSW2rVCx3F3pvk45Vntv",
  "key24": "42g1iBhb7zyqbVQZXpZvD8xskEGxNZJK6VRHyjePKQWvDozE27j4RejY7myYuSLgqrfWhrkrHs5niMBw4YKYQRiK",
  "key25": "4YBnkX3fmvySJHKhLa6n1x72LkzzS6x9L4nXLy6143Ts5wKz4pvo1FvfeUMZnUfKQ6B3UWRSZBtdPtY7RoTyqcSR",
  "key26": "zEW1zfzvmHUtqQWSkZpZZxCh8HtXeL2ZLRox8yuugrFyHmJ2WXKQEenDAJpZJyEHG6ETHrebf1vnhBofkruFw1T",
  "key27": "hnWGCD5fe4tFRKFKShQUCavoS8Ypb1yZyVJEvJvzWQXdMicUaTL5qNuD1kmvMvVArz3e1ibxLGnbEoAuZ5WtSBj",
  "key28": "4pn8JufZwyJJW9aRuHWNTSaxWHofiMdXh7fsDpFRx1M63AmAr2sL8w4hmqqH1TRzY38EQRvkrhDBDSKKjKY3mjDL",
  "key29": "495fjpBwhwRG3TPUNZpRtRa5BG2FfsoYF6F5Mw23vr4dsYpbuqZG8tfCVRW5n8Udud57KaCYiUFUo3aAvgbB3UEw",
  "key30": "4C5HrtmzZjCE4oihGtuEVPHKnT19TurHtFAb8enHCKuxA38vkiapjrbVnARxvMJyqpnZ7bjhNe5jTgKg5qKe3fGD",
  "key31": "5oau2WB7gXQC8nRdBukpGfFd2Mcm1puPojGgBhQZoazhPb9tDykQCqDLpY6HD2ReBe5JpWAzaQdoYc1PyX5YDybS",
  "key32": "3oKFpF7qwsdWAPQt9yNcTKJv8Dpn58aJV2uBjDgqnqq5CKgwFRXRhbErpXJ37VdMcRrY18aFvVkr4snH4zErpmGn",
  "key33": "5AVZcaxuHoPTY5SCnmCrSRYr5w6GYwCnAyYYYWP3hmg6njfbMMyEZSmsgV6tEc6xFz4EKDdc1MwkAL5LedqHPJDF",
  "key34": "2kLGBhXiU71bupEdWPEGBtetdB9drY2GeaCBnAUFjvCZKTEf33HF56zLzDmCNcXMKXg467nN9so8vbxrg6LdRoN4",
  "key35": "4accr1Aq7QvXAgpjP73kEuDzdy7APmfEvFXtzUnn53z4SRhb5pbtoB6KE4qU59m3ApMZ434sugM6QE3fEdF7g1dA",
  "key36": "4yx9BTEQCQ86FzRTacTktWsvniGkv9vNZctoqSRgDq2Fx9oxmvPr8W2TuEGdEKSwhitEHcswHFAZT1CucShceqgS",
  "key37": "4SHUTP2BUWnyrEg5DxwL8NXLG9jP3yitcdejD1YvgoG5xQTyj3rdC1SiEjVYaaJRW9cFxzcMWRaeqsK3zTpik5gC",
  "key38": "4eCLf7JUzHjyJKvLKvEe5quvM3bw6cf4E44XwVGgG2YCLVC6wN9kQZwAdf6ZniUFYRdZNtoU2XCDPgtTBAyXZsPr",
  "key39": "2ddTwcZA1eacZAktZaoLU62bZP7q3MyGUjG43c4GnuX7YpkGENrrmEYzBAvM7oj3KQSnBKfBsPQjgi2B1ULH8XmD",
  "key40": "53QMnDm43My1Vn9Bak9ieaJEnj5o2NWzkrGwecRVgzQJPWwVAx3Yi8Pqk8AGHL5Bx3s2432BeCBCXKudeb24zxkY",
  "key41": "kZRLEA7iAAMWaveoSoRYvMeNY4p7mwvKTZTPWMZDXbBhSZWa7sKzrciaDGHqnQSFCUoUvEtGA71VbDYhkcr5Kfd",
  "key42": "bSaFFrtQaoq18n6z2zyy8gBu93Y39rXjEG879gbqtJ6Uwoby6TVeRuetn2XHrc1cVLaybn5uhs11uPUbhqwbLbn",
  "key43": "58gHLRJfgMo5pzEZaNiZhc1UW1aQ2vfuNbnta4egNt3Kn9ERBNr5s7LyqWdVZckYucHZGmdyqH6cojhmoAUAZK6x",
  "key44": "5vpTzcFGz6Pm1d4Vb86gEB5yBW4G2q4H8BnRUBRC7Wd2zg9T7WcqNS6Tg7xkjPeTGH1jZaknJY6Ta5BSL6uHLEzq",
  "key45": "2nd8GufmtAPbHjyUihfqdgkjW8e74FBhShePVj8HZAdvKa58QG9C6REKAfzzbVnVT9zmskgK5f6BfR4Ro1GURuKd",
  "key46": "5TuSrLSGkU1fa4tXKNi3GWVH1dPo8o7XBmffaKmBYnPuhp2rvJnzN7hWxs2ipcSnJi48myku6f5gxSrwoTuqT6Py",
  "key47": "4Ya7ZvXYKk6LqD74hLRwHGaSWLPq5BYD2dBnShAk9MocvUANh2QdxpFso2WiWpSqJNwhwnhQ5MNT9H6t1WeoiGWj",
  "key48": "3rtoxXSXYfkMutDNynYjt2VNxoDvyeVB9oK4EYjhuyiCAth2JbN9W2yoDaSo444j2hoNV2ne6gH4Qc5v6CZhV2GD"
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
