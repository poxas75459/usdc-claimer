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
    "2YMrxpz4yoYeJPtzrvt4WdrRFRSNAqjidZs2LMxzy53ss1guMYEoLrkRTdPZYuS7HYrbqup4CFkjMULqv4RY45Jb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4opgvy41t6EVmyWdb5bKELfp9tjo4rg8ExFsaSW13jFu8WyKZT84uXLKzdxar7irW6Qa8TkvkuPXi3qcQUhjx26C",
  "key1": "3anU6ZPVtZYLr8UutLv7WsjjNcH563B64ANCX5S4ewJdKSR87yBmw1tDnENJiJD5GDtdGaKd9PoroxG4NwHSda1f",
  "key2": "2JV6JLMfJajQbmQ4Reg9n2Fqve2FneB8SEAPumKcaZpaXwYRVCRSDDkj7R24TThdtVaof2tGYcMyZJTdjZZMnAAu",
  "key3": "3GC8XN3N5FqgfEkFq1QMAMkQCfDB6aDkDBvDLKJ4K3GVaEBMjqjy1dPx2LrTBPVvd7XHPZP3LynwLtqvjnur7UJX",
  "key4": "4DKauFmQT6sTrNhZUCbHnhb4DwMgxcVTnukYoZBdjEPtMpALo3gGmP1bDgiNWeRNWD5wreFmt39VtmuiBjYmrVBG",
  "key5": "6264DMNzUubLr2qAfMySqSdgKMGmyitvwRM8pbcfoTZLnzeUE8vqEdCVm25rwxKkKCpXU8ny1sWgenrtUar2DVSL",
  "key6": "2bsfbcxzk9vms77GxyKW7zAqoSRLne8b4YryCvvzVqVgbFAe3QZHe6B5HGMXJzCYinZmgmt9tsaAXKttVbe5TaKm",
  "key7": "5rFU8rf8kZwZyGcSTti6NDBnDK9TQ61EWxArhEnzSMDMYSxH4Qr9ddPsrW7n1ZGxPwJWKZTK2wnEfr71UjgyRLxK",
  "key8": "3LzBNnYvaw2nSr8ALZsvWrjL4e7Lih7QQYsN3x2MTHTnyaPbtw7NEwXxxKDBci9cS5KF7n2oeuw4vTMQ1hGTdtTB",
  "key9": "3tMizJgW6PYVTN3r3GWZXefkUy9uxPgR6LQ4wbA4seH4cWUxDGE6vdiBESW9PhmfUBUda2AmMZ3dMEQipMwNtckM",
  "key10": "3wrDp3rYuPCqBJRDA9TShBn1GwRUy2iMCBLPUDBfFR3pSGPch6WA8ajuiKQaSqwA5wDR9AsPJ2skireQ1BhGLmCU",
  "key11": "oJ1pU4JYJ1icCWjxA7fjzHfcsHVYZ3tCJowLVfsct1fmDbD6yTcDHvsDc8s3ML1cstgaLod4qnkq2ty6PN9B2y8",
  "key12": "38dyESQvP8SJTfB46jDfsLxeFKUWsbWKTftWKUP4MCcJaVjS9e5KUbEWw4JUxTiu3bwy1T7h8ZJCMsvZ39JVajQQ",
  "key13": "3zT7HgAeEsBP1H5Qw8v2krepsu7YS7wKHCZjMpAjBG3inNXMtP3VaoHgSfRtjVHoe61PzemvzJKHH63RmbYmAAyH",
  "key14": "5ABiGWPNeXDWYMyzbxSVndk2YNvyboaHBpD1BWLPWDAxCM5WUcRRG8Rhjn2zmJaVKtG7s48bwavHahPmqTMfoMQN",
  "key15": "hnhDLyZG3jWrWqRscG8dAoh7jZ5dYC9UU4pgNkSZsfHV7E5UDkfg7684VLSDTJP2ojRX4q7Au4hCkKD626rthZc",
  "key16": "5HhBG6yz7VBLfQ5D7QWZygBSmLZ1icM6jXSSbHb2g764LYE2Ja1yi5JYD2ayxVr2L2KRdh6uFHxPppzAiERZiRGN",
  "key17": "5q42MXakTRxUBaJT4VfVP4dkv5RUxhNfTqGvNV91dKEwt4nM2Uq8fTzxbWqmUAVgcbjke8kqEQUBbT9L8fizfibL",
  "key18": "38qye3E92mFko6492UBq7RtbWSU5i1YFFWkTW5QCjdftareQ8xAZNLBTuqpjpfyntHPUw8n5xGoCnjPddyqfBjAX",
  "key19": "4Tffh8WJ5UvufXMoFdmw4NVd3JCRqcLxXT2NbtcSPUqG9pMVV77Lzf2a65g87huHZb2pKzVjZtADGNY2UfHUfZd1",
  "key20": "Zbe1st2Q39MGh8NpWUoXprpnXF7MyFrig5pZfa4rhbgzR14Y2sxgNtohgMLtnmgzW8en7REnYGA9GUeFdXtVWfM",
  "key21": "8TQJe2icqizBxndx7FR5V4cfonro1xn6XBt4qMSWrrmAiUvVwpusW2toJ8oXcdZLtazraRSJSTShGJ7mPFpopJA",
  "key22": "4LzrmBu48rmQmFF28YJj2dWgiBdKhvjYDzLPybtLhbT69oqJHqzxT5r88CePyRmRRzfLSMpoTXtGXpurff2kdokP",
  "key23": "2hxUoRbV4cUBGmtm7T4TPztTWsdtg3gqMLz7tCnQL6g91ADJ2htp8Uhn6rmPCJUx9kEebXcY1qiPQfwXo2kLqcro",
  "key24": "52hQzhbce6VdhwumxmMYQdLpMXAw3D19Fmx2XYuymheQUTGWkqa8hRqyHqKLhje4Lenrrx36WShFSyPFdnwHdL6V",
  "key25": "2QganwXCE4wSxF91jfgs3nZaWbucgg2VYXenFvjN2DBGDKW2vyVDtJNPx5YrDiwn6Bo2TpvGZcGwSz2z7qoNUvYk",
  "key26": "2CLYMd2hwU5QjJbTwLAhYzz2BCku3utWWop3ggoBjfNqfvajqXJNj6LDXPZHgR18mqaxs5UfqnvbkVT1V4yHyMmK",
  "key27": "2VEhaz7p73TtNLMwwWCpwNW7kHdTx7rBqBLjvsWmrDPapNXGGyBAedDUGcunhPrZkQnYqqjT5KJDfeMRTPsTV9EF",
  "key28": "inXBanSyoUVRJ7qfWm2s6nYfEp1QUUT1qf7arkgUssNGpVwJqLAz5v77ioVbnd2cGazFY8WWq9RdpPqXHgDefk8",
  "key29": "4v7iGz4YaAQZDo3BqDKvSt9V3LKB71CxfCfZhULrMndq6AJAbJce5ahFTSXVz9PByQQ19F1YWmdD1enatnw365Xx",
  "key30": "28Pk39NZ687Y9FyJAeb1hwhvuZixTvYnfuiUjJzb6g7rFnPqqJTYxeoNoKtDPeC8AwyHeqHegztBFMvTivAFyPaW",
  "key31": "4Qoj6a1GKDh3ay4Ba7dZ1XWomq71k9cVbPgge4QHKggg4gay62ZqKFEVDcAzphn7gMqDnXkChTWcSQz1icXToECc",
  "key32": "3yodErCds54CtZ9WxhkCQX1MkF9xx1k3ffudhtgxvHVNM1NPRpnizvukNEtVMvjpEbuHjRXcUaMv76HCFHWbjtke",
  "key33": "Q2gCvpyfUasUWdo8TA5g4xziypAuED8BBu4cEJ6VwXJiyfPqJqJicpGAzJ9W6UTPfNm3PfjDdj5YYByv2oCbqNW",
  "key34": "3D2DKFYSB6gTRTqecm3hZ3QpeAD2m4xgcGBNedDhJjxf5zA2wzoftBrrtUPTtrVyFwmMbEoKU18sscva6di2vCWH",
  "key35": "2L2PTK6Jp6ac3BrfZ8JsDK1Gg9tFgr6wy5Qj7mHXbnqKCbaDhSsCec1w7k9W6ZABqmGCVKLkAELryTAsV2TXiHzD",
  "key36": "3z7XE8zcf5QidrsY9qs5YKpDGHMqsdshdzCiFKaBp8oMwmqzxS9tcDbg5StyR1ssBStvEmNcv99s99QknumUiJEf",
  "key37": "2XHVztjDeDML4Y4v4Tv5SAddr3pJdZUooCyWQN8oKchZhH3FUKbmBvfNAH6U34nHYdTHxXmKswCpSMHdLUD7fZ8",
  "key38": "tJQQVW8Vo4SkwYKkfrnat8bPa6RN4iHwPhBuVdC1WEXFkshrNhscarWuV8uonGHKwxCDrqJCuT2Aq1BiZ27C5Ji",
  "key39": "4711KtgRKXBVgkHAdNwai3wxKtwd7Zzdb49yujs52vH72iLtn852FMi6BaVYKhAneiG4QNrSnYa3NjLq8i5yNdSA",
  "key40": "2bo7ZCwzWvEoMqDUp2AVYBoNQuXgUs7qPcvguMF7wLmVQ7bF3rrAZV9sewWEpwnGA9UG9mqG58qJAX5QiFnYvH9g",
  "key41": "9wmbiWewbZBDrQpvcYe8SYYa1RGpfS4d1zA28JBYpDZjUw49gxxzvisy8gWpzscyNZU9ajXbCJ9x78Tt3k1KNUv",
  "key42": "4tmotA5uyhedLk4xiEnac4WWxqKcCubH1XWumEtgGyMH3BbknQmHfKVaBuBTcNJnbCLqJyzaAePvLRGNAvaqyfdU",
  "key43": "zSUmu7jrYBAQf4xgyDQTVitvbBF4HVxVkXvR1YZ6c6CJJf7u9NrJPiDFFptyuHeiiSUYR5xNniDUpM3zLCfMNxB",
  "key44": "EkTMEZgXjECjHH8JgXygaXafrBLaH3Bgwz2SDaCMjRizMA6UL8J27TPDbNvrdX1inLEHsp99dHa4S64WC1AUAK2"
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
