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
    "3vh3Pzo3GEfd1LaTsYNRSQsAoNaqrF6eN2PvHMLEa9A8nsJiNFdM69eiXsNErvgb1hUxUCU3tRx2S3DYwKWRwGj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ViUaSmhNMrWnzUkk19T3Q4MzSehDMCP5CnQmm4aVm7Gqa5LbE1Hh22bm976hdDLx34VYsGXUBWtSQtZGumzWBMA",
  "key1": "3qLZRdJJRsgxqPmvh8BUoyha2Jc3Rsb6TR4prLW3HtegdxY6wrXeiUx5BvtPUEXkWBhhSAtrFeZDTXwdghCwQGib",
  "key2": "4rXuiZJ1HTD3351KWzb8agrdn9atTVndVK2UKFQ9ApWwK88qS1TNXV1Zmyr6LP7QkyznX7FeirgTkKUUtkJX9SJc",
  "key3": "4NkQiZV5KpEU97fwjbEJR9bhkKm8cGWpN5oqoNeqsfmCj7ZiaeyQwGVubwxwbVYTcqzW7Bu5sAx7dojxiPpMB8pN",
  "key4": "38iSpFCw33Vw7LcWF16tjwqGaghY86xfAUni3EezZY1WzAKgY7hjh2m7KmW5Z3Wyzm3S8HiVTKvmA4ZbyEwvqBcs",
  "key5": "4mLgdgBcV4JcTZ1bd4CkSjuS4me2azJ98LzDWYbxP4zTQE7vEC6sSW4vy1GqAxPjPZnwBkMNNuFg1Qomp9SAtz9i",
  "key6": "5E5BT2bBTBWkFbzF2GTf7HV4dPkvJ46yGgDdmQkenGnZBknHRFHpYmvjDuxUiqxvxC5rPncybUM8dMG9Z815yqWX",
  "key7": "qHbGSYnVPGz5WmqbBzEiabrKPUJ6fRCtFU78RBRTr4ZJxKAqayMMUeE9d6eWs2ahY8jFxX1v2ZtevNKKecDW9Di",
  "key8": "3Vp9FdqucHRYrhACGoTZuz87cDBi29L2DsxUJhPdECcGfuwHf91j4BzA6x7bKirqoj1vYxtRUei5EQqV8RxK8nWU",
  "key9": "53yF87ZeC5GGrexsrweQsH4YTF3KFhsjHRQF3KQmp1N6sMB9p6MTyeUxsRnG6YQSKa424v5FEsutvP46jQM1rBPm",
  "key10": "6r9bXyUAagdoQRVVERXEEVjup4TfRKsPtoLCdBBJbtHpSrhP2X2QiQz7S6Jy4eCwWuQeTKgXXXUdCo9zmNBnAPv",
  "key11": "63MqyqqxQ263A1evoKUYxhzfHZZYSjRvHmtCxsSNrGRthMUsY8qhC9fUKWV2Sb3y9XV3NnZjYo7SB8JrzwGvYtg6",
  "key12": "2FyKeV3dQK7tz8MV2aQSKrC1ywDHTpbW9d5xyG1CjGNWQTz3ivMKETadaz8FPyUsnPKM2fQUtj2B9QoB3sqa64bx",
  "key13": "2SHqShJJX5upNjFcqBoyUSpuLC8sUDWuvteFN3A1JU1VCos3xpdp52AU4C8c1dgWGPwyjwhVCsLzdjWB7mjAHEaF",
  "key14": "59TscKooFGjQ5Zxa5XkSzTDsj5NtR8YDEsttCRX3jHYCjW9ga7bNyv8eLoaQz26k5hAZNBtD4muGjZdpmh9NpDE8",
  "key15": "58jn7dHv34ZAtQKbhWsq8SeDSGLNjzFKee6ZtVnLd88EeuGfzeAcyaxxwyfpaLzyzFTpza8uqahZkXnPpGennFhH",
  "key16": "43Supj3aHkMF8uPCJ1Dq5LtjDntL89KFQb33n8JBZ75gmNBxPxGtroFgwYe5KbPwgMtbdD6Umey4PUivDVyFkUnn",
  "key17": "21J6if3ocruyikDB9tSwdpc9He4LPDQNfhDm91EZ4Rw2Vmx6TvNKBg9489nVu9shntjRb4yktTvWdELHWP1Vhr7B",
  "key18": "5vytu5ox4mTERg37yxM9oaZRQB6bDdezeW69mshhqS8zs2sX1gZ87v7dBbEV8FzcPrFmUDbmDLaVxzo6w9jcQLsE",
  "key19": "1QK3mdyPoructP2cpsDnjobvudBYfRd5EKh9qrE92Bvv3h11sFmfoQRosEvZuWCWznytBAqbDwMXbSmwxSqwtBS",
  "key20": "29kC54fqpwh2Qc3JnRHZGeJjKCVmSDsbTuyppPmZaGbFx8hEVWixK6KH2EL78UHQweP3V6NEY9oUkxrZoPW5WvBL",
  "key21": "2zAhWNTRrNvv5UriS9qZEnNUQzXrfvBgdnDiMjCoxceKqhiJxyeSKjCQJF83MztB4njguhcPWYEza67fSeExjyPq",
  "key22": "4UUDQENiSC2nb9y3eKW4HiUiBxh645K5kCa5HAkzpKGLcr7X6zagXL9guhXr9e6D3hKDPBfuqWkEFjdrzgNUejuP",
  "key23": "MHCBxV4VCHCf49SDesDZzQj2VjdY4WW2eH4GXCcDLVbCb1wY8q9WChGejob3Tzo11DMwKgNVuu1ErhSjDHDWjJM",
  "key24": "FxBsb1FnDyzDccfzdSDdp8gTkcnb894axLTuJaqqLQqUn8WDttC1JsMBXX5jtvi5E7PxA6b3xJAUyEAuwSr6a7H",
  "key25": "3xuSahzrnBwYVHrxTdeEiG9Zp1CgPPLh4XXtq2LeYzMvrF8NxXxrKH9qdbCZHiAdobofCDVH9rbzivT728FzaLN",
  "key26": "4t4FEXPUBBMvMMHSGQJhA9s2v61iSctGczr8VBtBwBvDv5AotKbYXG5nYizbRowrEKSEHwsd91Jdm9UA4RQSqJrs",
  "key27": "4JKFthUehBVwgpD4TSTLoVvYwZMEodePRxWT2pRHri1Mmi6qRsAWWr6a4WgdBohrf8yuAecHbpG8yW3CskBanCXb",
  "key28": "5ddP6DTfxurTzJg5B22a8WoK46hHXpbcCRKLpqd3iEVe7pr6F3P28TBLHeVf4beiPWqPN7uGkEtHEYBszKwfuFvK",
  "key29": "5AMefgmRSfYiw2upRgmmziQTeEhskFnBMzi4qmieXLupXU8EmKZ3YGDgaRb5f39RjAaQf4dG8vZxHv5iMjgYcGwV",
  "key30": "5w6aZm3VxmE5eS1DXRTAue9BW5FX2oCjF7mo4D5bVxtobsmGdznch8eurc4pST27UkcPhybS2FLtJMfUowiJX3uR",
  "key31": "5L7cMX9vCL5YgpJy17V4BPCe6TvhWqjgrqwifwJt26EUnE2A7mWdzL93fJ98zjh7LULBEdkh8qUmKXFAbfGhYA7G",
  "key32": "hKzEgApk4vPU7Bzzt4L1nb5GaTBhCChQ7Vvj1HAkqYrickZj3qQthgxdFfBFMixx77oqbmMX8zzwZEtQ1uFsLRn",
  "key33": "QV931fC54EVDSWMQC5yrbiLsoqF9TbYRzSKR79SekS4jU1NGBqcayNa4fSQRhpLwXHGWcDyw1GT3KxKbGnZ2C37",
  "key34": "3NxjZdGhVDPoBHgh2YZXVtRzpW2DCYpEj5q2dq6kZkKddXkpGhHEg2mAHKJWC6FEMWBMQpQDBHW3oN6DzabpVmgD",
  "key35": "vsowLxJeQ6QMbPTWNy4zqGQEXebWBDDCGh59RwJCTkwc35cSkWSL7roCTdvmJwYntHA72kpTT77sq7FVDMteJcS",
  "key36": "2RG7URz4qK2GUwzk8agxV3vpsNV642Ra8Wnc8DZgY41gT9CHNXXA1vgu5vUv7Yaz1tCpkCRVZq6TmVWpMXCrDdad",
  "key37": "3R4hhd5JpaJ3YQTNKRzu1ybHKdDKbFG2GinVLrqwhaB4aKGbQFqkHPDke71fSeGWZShM5WsptUVn2XaLhRoif29L",
  "key38": "64xjH513yRmBy9fmUsHUEYgjEZZUR54GvzK3owNAS9H5ir3xTHzu3efKDvDMm37KBhwn2ehZFbXMGSd4CBhgXMSh",
  "key39": "5VhM1p9QNMV8AGBQU2zXHvwT8PS1m2UbKiNLuaqLLLsUami3fZM1L7YCKUs4JGt4eS8f4XpwYjXobbPXc3WQtVUK",
  "key40": "4xn3RfbsgD8XqZc5Cc8mETigtCVNGRo33gXuqrw7hpkomjXhnxVkxhaJqtoxJhdVE9GGV1QUh3f4JhBdcWpWoMdz",
  "key41": "5SHNGwSxB88D17JSWwAezSZhp4cET374XBwpasuWwRfnR1ZGpkbSbqkBjcqopAXPPAyqLqDdJ339fLDbCmTTFVcP",
  "key42": "3PEyabzMPt6Z1a2mVQWMKbETK34CB5hukw5dGVSR4eBhVyUhME4jPwmktcdJPdrUynm3xp8zpmWMefR5aHmnQ9Vn",
  "key43": "LL3gxZbx9rKm8iyZ1y7ZQcZVyHREDjwijzpuvvtQnP2gpiECh9HQWxFin6m6XLnQY8xLDkTJ1w8VfXFVkV8Utx1"
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
