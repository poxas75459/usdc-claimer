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
    "BJ3SJeWVZ5Px2LqaXg4myasSW4UePahUygqv5KBeMe2NV6XuogVmByh4U5zdL3SoncQbqhR7isi5i8RvNdrCS4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K8oAYi9ek5PxuFVHKDFCQoiEQhcDcdVGGfFJgKxkhWah43MA2d7GB9Bqc4h2mn6cMk2wL8YYr8PAoWG1g88PYdh",
  "key1": "4YVHHmm7ypQHMhyFRms5b5XaX6N5awt3ZZn4PVp7ne9dR2RjLXLPPmGfPzMrAv5nWTRxagYZmrC7gPBzW4aPaJRb",
  "key2": "5a6oECAzLbvewAWUaQPaD4PsMJmFrTcNcigEjpgz7m4sM3QzNABU3es6ZMu8srbGk9fuvTD3YBYnh78QcMHdXvNV",
  "key3": "2ziJtRHSzBWgTU4igb8pzdTPrdG1tLUtDgU5HpptRwu38F5CWxbrH7cFvvXo4eh7a1L4TpSWy29ZmLwEn2sNMDs8",
  "key4": "2RPEj4UWzYRKkrNAm7S7YQaPYbWiWVtWpLarELa6KjKhtzUMeDUDLVdYFw8FNGhysk3KgEhedpv6nHj4XTDokG4y",
  "key5": "4qRLUuRhhLrGqC46imxDrKWykhjga4swyhdW9XDbdvwYgXC8ADeygBqQU9epsWavdjoSdLGX5YKaMUwiznk1BKXZ",
  "key6": "4tRTPTrEL2M6MKxqQHdRP9tfTgjkpCn3uWGr3zWt1kb3cgbTGbfbDzpHTo6pWQzYNJAZd9v7Yc4mfVmieGhavGCs",
  "key7": "4H2ksCnvKQZxR1vK9km89gT3cGu2XvU4xcpkqsVaa1A6jjhikJu7Z9Jym2YJGXsMv5oh7jk5FetiQkBQL6xA1qgk",
  "key8": "Tt9V4UxH3KqnBEoJmD1ZyXX4ZEyboBMLZazWw6JR3tti8NhMy1Ckj9PokY6AbXupGs5JXtN1CLck3Qkn6NZYpF5",
  "key9": "3Ny5urPAQzkL7HwWyBkTiakrfynvXnF9F4QhfALNd8JHYaHaiygtmxjEeC7vVAKgjByKoQyfK7AMnurirEfY493s",
  "key10": "qFdE7Du9geqxuvPZhKs4VHeoEq7kkuK5DPE5AvHSFdUcb9unrWTtKCsdA2Nkq4sYBgGa8wea5HgAv7gvbH7jJ23",
  "key11": "F77z46TT5ggSuugWY2qjf8uc2x8eSFr2oky3naBuJPGhKCAWVjqzvCqMe4Ze3SnCuPvByMeFaTwgX3uDwESVX6g",
  "key12": "s2TDCkZPsQNxPkvtZTs9XXG4fTddqBPCEcxLEBHAaDe2VL4WwjzJ3j9PSj55hF8fkyBp7HA3UxBkv8aPAvvpo5L",
  "key13": "4BCC5GTT1G5hf1URPAbM2zAUzZUx3guyELNtuNAsugwMhM7Tt16TBzE4FwKfyzxzEEK7w1dj7Vgv687sAhUQL5vs",
  "key14": "26MXzN6bEbt3SRwvRY356JBErLg58VmvupP6TXahna2LMuS9V14w2rPJUcwFW2oDGT14r1ZRdjTudGy2L1uPgaw3",
  "key15": "2F2NfTq1gzKNpFRWMuvzd7vAD3NV4z8ocsjZqK9j1zjnuMaSHydggyoCKuzseg4edJeJkTeYMXefyWtBaBsKExYs",
  "key16": "46R17EiJa4oWFhrne7DopoXDY9PXa4XkeqwxgEkAQghYeq8MYc1TR5Rw6TidJXGY7NG3Sz3FAxnGtFGGa6dcxJ8f",
  "key17": "4LiQEQ7ogLmnP6Y1pndR1WNN3XWUwzhYCbaBaXHEUWRuAdev22oe7fa2jCXykk5u2QVtPKXJVaPL9qXyjX9e21a7",
  "key18": "5o5b29iLcQj1dByVFd3opF6FYrkRJQagCZFmNZE3s2M72aJ5BKSo1AWuzrTx2xsYxLJuC24YHky5hcaiPPQGWmrP",
  "key19": "5demCXNkcW3XoRpfrxbVX9HkrQUAEyS55WYPxVPW5KghPi9NfcLHnBjTiKSkSiod4M6GtqV4VJghT1hX7YD4EFFp",
  "key20": "22uNcjDTgg39vWkLtEMzmigs3z6XWwKJKzf1LRu6xNT3vrJFVGvmY6n9N2h2GeEQ3vigdCYS17g2dXazFHxjVbpe",
  "key21": "42nqmUWE8oQUJ8dUHuFYEe6anrEwcpv1TLyB5fLqips3yDDK1CfBVf2chQgDRSwqT2yarMJ7BMFcxUyHitjWHrhi",
  "key22": "2Tp5Ev63222qpHjAaWhzUk5KjovszBVLoWfzGnsuH7GahDuxnzFmFjR6kXPGQCkw2jFopAGeLZKN3is2ka2zZ4yF",
  "key23": "34uqSmqsVd6RGTFRD5zDFrH2wZZPfRhGD7FJanUxAByAnaUWcvK9XZNFTbb3dmTCNQS5zr123fth62wUhSobMzQj",
  "key24": "4fw31Qi6rkdS8ww2SEfX4Wbg5eXHyYA4CRzgnrwRFKHXk4QBDVMmvCTTLX9HeoCZ1K8MAduS8KBwxnGtQCF7Um4W",
  "key25": "4WuGB4ZjFQjChgm3NfQzGqxKLu1hEn4XUhPmdUw21Rg4hBYkhS5RP88KRCibRwSNcFrzSYXjq5rXdRf4XD8dKax9",
  "key26": "65GMr6KM5WAN8PqsqTDrf9JHDQgELQrwnT5thQLXjxqMtjQpsP8zbp9F1LrCiYzXZ4zuUpJJ9KSzj23zeJjgSAgP",
  "key27": "25Xta8GzzW53MWnGRYtCDxzg7T81zBGHfPCmUNdhDYNxiUXtxHzjWsUNDHqq47RNAqZNtH4mjP8d4jefRccdYCVZ",
  "key28": "NGBZEuVQFhrhTdYeeewV4Hy9Y726KLcMVkoYpdNvthAodEiZM3V1fDeyJquuv8nutnYVqQ3UGL2wtnCvP8iKn71",
  "key29": "4ojzzM7gGs16Ak2sEDouWNLXdmskaTDk8NpNZRUNTijcCnWKKHw8W9o4t2XvEBmNwPrZksdo6rMsTyUG1m78PBAm",
  "key30": "24RUzXyNPHdHpr4n7VDSVYzFYekKBDNE2QW3jGPf9FDstb3kBSRMSRdzkfCkxCijHhB6WCqixhzk421n7So22KzZ",
  "key31": "7vXZJUdq14gA5fZ77Lgk4icdvDSFVZQbk9zgYJNUdgLc4mLJzuiVaKtP8ZMfPZkgKVmNRtpwFECbXuRnejKTCgL",
  "key32": "rzLM2fHHBQ5wG8pnoxgnZbnMNFd9CHQjY9jZ5D7YfY8dJDLkPRCShYFcTrAkgmeoXxbs9k2akjXys7sGzKmZEYz",
  "key33": "2MAM6Mpce4DeDWYbSyAKghcyeA5peTqr1ydJ1VMV2nFGDqNpvTs9Rcta46WXSSri1n6de7EuewFrhn1KXCsq6fAi",
  "key34": "4pG3Yh96YvkBXDEJKFRTuSbnsqsMdyxh5WquZbMQCfsMRDy4F1MZcyA1dfuUr9L7R57jQNTDX3Wh1daHztAzE6JC",
  "key35": "rVs6QQxEKoq1yhMK9dF3kRcrK2SJJUg6BZqLks4Zsu89Jrm94rXoKnyy1mxTcniYqMccgGFHpkZEUquea9BuEE1",
  "key36": "2WGB2C8Yttzk4fcPafxdumHLZGqPjNhf5RzC98ZWme8cCkmyBK5Fwp1VZr4Qd8LJPaRj9AMCFyeL9eGtfvTu1BUq",
  "key37": "3552wFesVWq7YTWfMdMJvyGm9CmqUCkLgAEuxXAB8krYRtMYoRkvgdktZ1Pa2aHin6vfjiLnAF2D2CtkfQG7Zs8i",
  "key38": "5QdgXTqKv1CUETQCQHNugRwcyCBMz98hA3PJXUm9tfS6gLJE5AtVawBAXAt9YowSCCJoRY9kW8eEUvTzbtqnVQae",
  "key39": "3PjRW5DqMzA3Z6wXAtzwmvqXsefzMpPf77ZzGCL8BKkQ146athFyp9QEoiWvw8uHjKfZi6sVbCcnehmU6SgobjdS",
  "key40": "5HUAYEJhnJJLG4EGSDB3WxtXpkoQbwQw5HhVbqf3XoEEJrokcLefGfaEwKxpeFvodqEHojMKrBAcNFFWACFx9Jx",
  "key41": "aj8qdF4JDfbphTGAuNDTaRaNM3MXkPEv8yLStGurbKDWdmwiiov5cDAD4bTjg52Nsuyzharncs24jaDPm55eXn1",
  "key42": "w4irp35EApZmxB1Q24doxSqCVXYyUFUTMBvqEA1phJzqapyKzX8F98k1Td89fZdLvM2DJKZ2xa34RCofk6XRM4E",
  "key43": "4ddbuygUWFpGi6Ekmi3wE6ucUro1rTtLes331PiESivsScs9uSt57EPVMXaugcUf8uLv7dyoAB1xgCiStp4xmnJX",
  "key44": "aBJNFbUHWg5UigEtk1EeVUqvMQRsLsjrkFBHUa62QjmWxNCcKQjD2qM9d4w3DZotmNdQEqgPfq6P5NZTf4Nsuf8",
  "key45": "2tLRFVUL44FFQPnQmzA4QdPSyhTV8HcGA4ujenw4F2jakQWYxVRNkv7djkfmjEjmD67JNMnPa2Ejqj4GyjReHyiD"
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
