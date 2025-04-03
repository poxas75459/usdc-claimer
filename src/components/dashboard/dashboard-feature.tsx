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
    "2D6spVsxJHYu6NdypNc1jZ3xJ4Qngx2LEqCz4fD95ugKAgS4mJAwAiiq5y3kC7dDciW6AqUqtSMFYm7D8e3fcpaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3btWGmKMjQKFA3zGA8bjDAPkUhqDQxpPXbeQAEAKWw4Nz78hmihCLivotaxkojdeeW1e5W6hJ9zAfHUpDUQBorET",
  "key1": "29GoSwSrmEbdj9mJX9WTWXrmdEuXWtFi626oCZix4myw1sQvLw9dWx9S5jShCazrNohYZjnjnfwezYJ5fMmMFcr3",
  "key2": "5ZZuMVAoK5vup9Kqs74bJ4eVGRZ7CySgnCtfxTqtSChb1rHNJMuDufCQCKhfTBT8hs6inRLGHtZzNebQbLojfcc2",
  "key3": "2Ur13hhE1YYYM9RCbaKkwDZ494hq9H7R6QuJJjTGSbHjf4Awx5QQjCPwwJhTtbRMgxTv2wANdTXaydkVwWQ9Wwub",
  "key4": "4Gda9FsTPouK5DPC1E9UA3iEcKsXe3tbz5jk8EJPykwXQCCKC2AyoiaenARNmh9ZbZeuwuaQkDf5xTEhBAefNxG4",
  "key5": "3bFF5dUfP6qioh84xK363cKM1qM68mRVVK4x7pjJgSeTHbKoBRgH4Z6yay3JLeLVLBbxFv9NhUG6hDgEJmt1oEgM",
  "key6": "5BAGoEeysM1yGfrrSfqEqKw4kpcS8iJTMaBYDANoM9fwnKCzbqd585rNN5ArhWZ9NMYXx6bLpcc6bU3Zi88QjRZ8",
  "key7": "3JYHYC84vQpk7pbTe6JhukML4uWYpGXPGtVpn1wEMHg9Zfkpr43J1E7Ty41qejnNegBBGnQuymzTNce8wbuEKNvq",
  "key8": "5x9mxqHAu62od6TxQuXbGzDgR5iiYic36c7W4un7d1t6bVqUBA7PuH31mKCazidvJLGGfkXedHP7ZV9cQMGkNJ3v",
  "key9": "2trR18i3RJizWTKPLLUXiD5UEmsjUEFRzU5wdmQxS1R6qgyNfHtvqVfFDtnnouH8e4LBaNCjbya9UEp4wWJC6xyV",
  "key10": "5TZKhjkhwTM35xNH81LnVPEt6HG6q3ei3kdnY32dfHCSyKX9bBaMc9wUuWhb49fcv1Q4pgtEMQW6KZV7FcjmjAHY",
  "key11": "5Vna66gY6dVkR1kUgMhmjDXJcLjkFE1aSy8PFA3vXq3PzCUsxUfpC21i7UCtTkK4cXJzVUBnHXd4hoUzgUbhS64G",
  "key12": "AHVDsLBxxP2AmR35DB2krTzxCpXjHwGcbbE4y7JAsASJyy8X66hAKHeTXNF9RC7htJXt1FiKoZSuX5crSMEXhL8",
  "key13": "4VEEt6uinvXNBa6kAkLWmruJfmp5VKAdcgWtnUn8AkSyDaKpRhWT7Lrhd9BzSLAPr2bPvFuXk9byywqeN8UJiBXF",
  "key14": "2tAWGgUxVHUYn2srJfSHTySzXhHnAcUPwZ6hqqrEejLizsZ2zTwkPvjtEAX49qy6C1GeWM2ku99TkzguDRSb6nwF",
  "key15": "3zNKf9Kbfhtsqdy1MiA8HV7a1poSiVtuabnisJqvgvW9DhgrXkebfpETmCQoiRoAjDTQxPDyUVuB1A1EUdJPzpuB",
  "key16": "3GhGYFRrf9Qo8Yyia5hwxiLuKZw2vDBVkj9GWrQjZfbTdZhWJy46egDnoiJ87Fb1AthJhh9hMLs2AMLCDo8ja1wT",
  "key17": "47e4QLqy9uXJu6Z5yWVr9JJyaiZL5iAfFP5NLDdjY7kEfyMZWXTTixeGXZ8HRLAvPLCZMW68K79oe15UmQbsQ9Yq",
  "key18": "5xKkCTPUdEfjP6sB73b9vEPVkk2xWu2RXxCgbEgMXkpY5GHrexFwgqTdWG55RN5uM2XharSZT8hTwkeFAHBL8RQ1",
  "key19": "373146DSJ3FhcmGqGAJqq3i7UEqaWBkrPw3vokx9KwxHFWt3Z3YmXMghZD5kT3NAM2riAxw16RbYTVMiYD6akdqo",
  "key20": "bKZDCdqnq9c1jfU9WnBx9C9t7639BKrQv1oox3esBitsYiYGfXrhLDYV2BKhXhdETesLPzAiqjft15SKW8FLQjY",
  "key21": "odvZEnRs2VoVE5eetc7kmVdXQCRjH17KvW8rYFoFcAj4HbUwUKtVkEDmCMUDv3cszs8Kai2YaXB5sEDp2RY1LmM",
  "key22": "2CmfYJCodv5yZjCV3pB8wCytizx2tyoA3z6mnZvJcRGjb2uwFNiBUG4XSn9jLC94nZutDJfhj5WMyJpwwJW1S4WZ",
  "key23": "25NCsr1cB8tJeqPrX41Qmw45L93qgeXk8KwM1g7jtWUjy5hcNetYby78uhmD9eZPcbMHuxsqo6ceNmr2r6bY56Zo",
  "key24": "4TaejwnG1RQVtp4SRwzC8J3xXepeFoRAWAyXSXm3NucvRaQeDnFytScGnwNN8G3otfLsFx7pre2PVXLq7wBT7Egd",
  "key25": "3uNexZj7rQhr1G5nx34aapW3zUtpZYNvkxmQr2iEGbmegtqe82Uk1KrjW7SyYLeGzxBCXsj9EDrvyQoSbLGa9Qai",
  "key26": "2HJs4nkC8tKFMDJzo6Jk8eKBYaykceizGMCfbntR3axQ8kEi1cwfHbFbHEyTKMZ8xyVpzSugogP1FnzVgZ3w3YvB",
  "key27": "5E28xTG9XAP6Ra6gifNjCSZhY1KuxSu8Dri6D2Roa8yvsmmp9MYAcVXwVyoH7pQNT6ehUvpkQHM7rqFGxvkQzeyt",
  "key28": "Lbr7jmY2QiT8gVoYhEvwKSgXwxGdTxFtiSuTut4kVeS7v5hcfgZc6aQKrTcKhmNqYU2W96BRPPHkghyCV3wDU3L",
  "key29": "2r1im3PzkbMEkPEN9omapSghQQTF4RgtWRsgY9kyt9EuC3f7T7q3uCK75ryq6czzgXs4EFceaNYU5AY5GdUXq3Sv",
  "key30": "45KUVX7PZt71mrtfMTxwVJJqXk47bBQF1BBNSztztZ9ELgvLtPJAx91YWpuzeYBmwn41i9P14qR6HQWJ1n18SsMG",
  "key31": "1GsjmRDaiiVWBXigc2sNBzu6iT74wuCD2t1SGJxZ2MLFupkhGpkPaBdM4rXH2PmVdT7KJAj2pBbjqXkR1qEfZXb",
  "key32": "2u6s7VVx81mXyS2cfaVJJc8Hm5U3utctdnXwoSotFsBSRfB4axsYLNd4s1PmBoifRGRjk5MGQbWZqEHwQp8Lm1wz",
  "key33": "3fNADZew3ATCmhtGo725bEtsKkFKg8jKAYLgiu6ETS9YXAwP2B1o2R6wokDd3bXNLpyEWgSqtQ3xvvp4vN1TYeBi",
  "key34": "3fo6NNkpSLRVYZEkzKV4zeTpqmc2hbVNEr6GvGTsK4bhW5FxhWopkUaZu9qyNWVNZMGdMfZjoSzNk5nd5nRmKNGx",
  "key35": "4BwiChnE1z5Wvwk2Hcv6oya8zSKCmxEN1gHBxFTiDzobTGystMFGew82D2vSkPbtxy7NP8qYkSFtvWpEkUZdMyJR",
  "key36": "2FPqArRKsgmdvAJzvPrmfsPbUceTWBAa1BzYP6R2YHQmxGgYFGT4aGa9AEo87Ca5D5jDLQ853CBVZxhKXUeiDN66",
  "key37": "5aKKwdVBp2aqiBffbiGSaCT6mAehPvgV5ya2MVhBvSfjhM62ec2tXZrojk3kqDzd1xhSst84B3SZBeoXESKxHLUN",
  "key38": "3TW6g9Fbvp4HtNVpdraZY9dQjX5JNcJidKhvuytkMphLgf7Jp2ouvEdPpxWsKd3ZyiPNq91P3PcC5MvdzNhrTiw3",
  "key39": "48zMvj2K5EHDd2EpZXuL4bmWS4kasXDvidRHaMbvBhA1w2HVLARYeyegNa5LV2qK8ZdhPmXpXEkuVt7ysUuqTpax",
  "key40": "5dTQdn5LrtWv9V4nEYsiG3mq8ShRiVMpzFHwrx5RFQqLoQzthm6ERjo8DQHmjDBjj86jJUHwdKguNAWRXtUmyMDQ",
  "key41": "2cKqz7idUaHt4VDvhZYtHmRER9HjQF7BrH49mKH53y8fdvXfeEp9WLyxJBCZsgMJAXQ5sZy4H9xHSNhMrNAU8jAe",
  "key42": "3ch4iBeiuZhyBayaJTVeJagM3XL54nhsaRmtdFGxyAv4SxJjPPK8AdCdACAd8Suo1tadio2JGw6u4tCTvPGwLMXX",
  "key43": "XmBt7dVFZZ4pn5RprPDj2ApXofP4F6jE2DHtxWd7B4rbye1sY3Lu9RZ6WbC9qCivwGNWXEVro3kN6r1j1sy28iY",
  "key44": "59BqX5uwLVB5dz4x7CkYJroPmVCcbSREoCFHKAYeouJoWoQZVuy2By7r7paNSiHQekLfF3okN2QfzgbDrahnA4Jb"
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
