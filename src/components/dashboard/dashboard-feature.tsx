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
    "5D6Pj4rHNBxqHv96zoBUqJYkTHL5dTibrZeNHNfoT5WXRr9FPLGcaDAmwvGAHa6eKQEius1fXHD24opnpQDnXAEB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rdbapdm36FK3qsMB3CygrzecfQFTtEgoa8iMXv9hn7oWiYnAKyYmNKC5DvU8sf1W2GahRVXoaZdSwWghe6AfYEQ",
  "key1": "2yqVgbauuqofez1iTwv1hndxaiG6NMx17xFGMrB4CZtFD5Q12msD5NU4v7nMZksG4BGh1nWzEzy9zKMviQvYmZyJ",
  "key2": "4bcKRDqsXwgSKurt4Qye9frTkG9cJoR7mpbwLfM9nocMJuhHZddcLV8EuEaJZmfUGQGfvwbagGyHi1uhKEVoDe4Z",
  "key3": "5duF1T9MGTD2TKFHuHbsCvMH6U1wysmG7567ZV1hMvwrUnbi6m7Dq5djYNy7QoES1bmgTcxfMGp6HMkxfZLs3nJi",
  "key4": "4FgfsMgiqyM8D1kx1PY7u455v6PeJUFiAex6idNxj755TcAgq4VwYuvW2BWX6LbkATCUJwdH12yi99CvaeuApASW",
  "key5": "3x7kxAFAAuMLzaxnjf4G9EA2TQWhw1xeUyFhPJdX7JzXKWUQ2y3uifTxqyfVeT775BKp8CZuDCgNrgLobVhFkzA6",
  "key6": "4tBYG58z3kfm6svgiPAEUjxh1gtLgxWdNFD5tdF7YsftJGd3s6B85J1o6TkViQTCMmdbfCTCcNK6YV2Yn3YPfLLj",
  "key7": "54b7S75SirKFwGwhLDrnfKwhiXyUM4GHAV4V18XMdNPqjtL4GUsK2Di5SMviFWWYu8Wp7v2yBRtiZ8uTeQpBYQmU",
  "key8": "2PWnCiFwWBNmRiZJknNKvBfNnZ3M6fLEf57tDFDtqNemPgQ42dRV89sU735H2z9bB48vy3jWPQihBfrbRNk6vAeq",
  "key9": "4Qt1M82hLRpFUJZAANKvoNkQf6xxuu8yJQZzaEvaNxpB1AGVxgVC8smmjj92b5PZ7MUxepTiajmDjRePZyLpyVvU",
  "key10": "wRHQSeVETeKhcFJYGCE2UzeR33K6Est2UFXz3YTGXzWKeXfc3dx565mQAYGa2hj9LjxR48H824r7h18XukyFgem",
  "key11": "4YymwAXR4hC853xyH3dZEZo9rkwxLG84J6mhd1xPTdSBzjfa3L7Nc1scACQs8oFDUYmd4FG4RFQLDtqLj5xRJdrp",
  "key12": "5BgfyZA8bs6aLGAycp5PXeQMn4ZjS8cp38K43wm7b4qL27W9RPr7WS8Qa26wVyuGY8eiXgknQF8Zc7NZ2n5RfvVL",
  "key13": "3ytYnpfQPeLArRva7ifXVYvXZes6ofhk1w4hvpqmjFx5QtAHeonv7Q4LRFkkyGfi5dgsenav5S5SBbNFmHxBwmwk",
  "key14": "4YtJ2acnHgYxKurUSzoBEA6hkS4pxHyLFZNofcVu7vAzqXrnyUpd1zznUwhcSpzqnauy6g6mj6x8dHWj2CHwimnF",
  "key15": "HpmDf1KiqWbAdvTprVjJiZqGTCKfz3fHtVF6b6xmtAaiZHDq1Lwj6X6FTbEpGB95vsSXN7HxftdtAtj5TKpoWRU",
  "key16": "2DRjg4DAoPMA82Y9jCxXiJfr9nhKtC3tqDDMorssqTPLitxeKm2R4e5kQZGbJbKnBZeTJpyRKyMydxNUk7xwich6",
  "key17": "22hrHdTVBPcq88ZGmJ9AD1XzfxXJncRnkfSmNTmBYJojgJUWgzMAdpLE3Yow5sEa7RmDkWsWvr9Tm85NTkxmdiKB",
  "key18": "35kvWvN2uLMxtpVN8EuyCz5ywxBvD4G4VWorsc6v3UT7WYxC1XkSiSUuSDpnf4toCJ84MyoknhpQECiQB5A8wMzi",
  "key19": "4X1MErgsz5kA197ZXUoNgpGq6f98FMCxFEMRwtj1hEXr5rKM4DZJJSSfCpzTaBgjreGJpeYeFMtWz9Xw17DgBozk",
  "key20": "5yd4SzmRZNJjnEi8HsChr7S7VtBmpx7eSGdzS8Uhw47YYTmHtqeDJTbs51XmUufGxJGcgxxifcQrrhvxPgpgVHyL",
  "key21": "pqdrS23GTRA7nQATD2jiszR8feHUrgBgyDYs9Y7cqzj6HamP4jEuAsKYmPFusDbGJaBLSw5TtjFVexkUsTCjmgw",
  "key22": "cEJ8XjMwHg6aa5rSK6L9UdaKaCUUM32FX5z4UxnTqJsQa8Qf2g41ib9haTLBQnpqyNWitZUK1daCjhSKfgkJrNk",
  "key23": "yLo3Az5ZkTVvUp4E7L4g68pNQHBFEVEk5z3rccsgCWHyazUAvm87Ah6rdKPX588dLNpQb9yJFCy3Kznw8PtLRTo",
  "key24": "3JcAbvRDU7pjxZw9mnbFGVqor2cD1odWHXsjvZyYLRz1MPfUykiQo3gEvjuannLsLa8DMyf9c89xQN5L5eFsqC54",
  "key25": "5kwLDbrfyczDmvbp3jfuq25KWfqFGvxsaUmSFXZiN5KJMANyW485uLqX4WbH3mTjz8EH2f3GfFcjuhpxeiPGRbVZ",
  "key26": "4feJbTtNZT9PGKrbbU1ZWhoNADUw6C2WG92KbHrRUcedQJ4zZwULi9SD2aQZzVasirCcHNNedLZVDuzAeSb3XsKS",
  "key27": "5uTPtJTk3XYVvsWN3V4Sqh3X643rTWcTP3zUgvVtze1CoRg6TwbXGMNhuCppXhg7rViwgKyZsAsSkRPSDvhT9LQe",
  "key28": "4U3wCMVEnYgtheEhYChTSXYV8R6f9nXivnnU3BuvyU7aZoduUCrCemwef8tarV9FrpGWQDLyrUSHQdGu6ZcqFizR",
  "key29": "SDdRQY2Q2UDUrmvYS4momp47pcPVbLYhvaaP5MrVbWerW6U4JB4UbBfy7ySS1VJABkr31RLupqJHp1na3XrJk4g",
  "key30": "3Argt4NQvXamdoQPk5EahuE9Qsex5nte4B8on3fnXbMiAfo4jHgdegy7JUF6LFC3qj3gozx5Cz6VFZeth4KV8mna",
  "key31": "4YMet8Y6g63JeSuvnE62JnUkx8JY7WMhz98VHSfqwqAKyx1WUryFwdBnhmTgBgvcNcS2VSRoF55kVWcrPWgTD1fN",
  "key32": "3ZN496gedfTdW7XE8ZYoayTMHaDKYoVT9DcLFAv8MuZGVCmV1cffr4eRHSBDAWnPo4mibCk2uqzFjt4i9mEqpM6Y",
  "key33": "5GBkTMquM1MgFVeXrxwcUPcbFXKkCpVBaQmVKKzDdiC8ghKj9XbuePi8x44mnZDURu3FX1JQ3ZcHpH1tfXpcCvyD",
  "key34": "WAjEEFeDpxH6AgPVyScQfKsXBPVcnM6uD9Uh1qNieFpnfFGYKURuaukAC68vuB7BQrBcrYqvQMf1bxSz2bDipsh",
  "key35": "PeRQSZMDJBvieixMBoyxRSKYVegMp7yUyugBubGzQVJkuPA3PzngKJiCX3DxVeEcf9K8hhpf3xBfuedq6HknwrR",
  "key36": "4jXfB4sQDWv8qQ7sQi1f3GmFBwdThEcaHR8PZDZz2ZjKeBC7eLXL1RdSgZiHE6Ks8HBgf6hKsT91f8jBD72fhjJy",
  "key37": "3bEXfWgxtUXMuiZw2a4ueQRDFS7PmhdwmtMVmqF1mp9ogzYn4iofswd7cFZQK1raQp7oT8cyoAepK5xEzkyU8KEA",
  "key38": "aTXf9kHSwPzRP7i6fv9zJdTsLkASXpYkFhT2aR5jQ4aMxmvez7HPFPvB9cVNopYsHtEQUBdChCnUwXUhbyBTixA",
  "key39": "4BTh6hJzyt83UqeHwVf5QEdGDE4TydPXGtKBwsoDdd2B6iPuC67QCMo9U1vZz6o7u5ahqLtc7sp5yxJHatm2xYVU",
  "key40": "2qaX7A1ziDqRgCrU7aUnH5zFhpFLpDqML9pKvAD2cDBdtF1k8sirECMTZUqRgU8hcji3ruWAZfVQspKZNSyX9M9T",
  "key41": "533N23A4h1dtpWk8XejSRddQ1ZfEdM4riZmmVewfDVcwt739umsgdTvteJ2T6vpybfd93dUBFmTiZP6A1HsyvTf7",
  "key42": "4VL5t4Zy9iqh8Txi5qBSyiP4eVxYzigvwvpKh87JqUzrfwyqt7xiSsbK1vbE7gWHwkxj6J53q5yxtuzSQ2RYnFXo",
  "key43": "2wA7sfs3CcYnGuj9WDnanbp41FBsg5AYnppJs9F5Z2tc7gtxHQP4k1FG5sipqM6qFCL48F4gxim2eFRCTSPubpjr",
  "key44": "8Evhbp2H2qBzhDWacSRQmRiFc9Q6tQua6Dyheottf7jB5F1unjCFLxqEbVJzNSEbMMMf6ixetJ52MfhEFwWTzfD",
  "key45": "3CDqNYhaH5ubrVLVkN4gMwnWKySq1dNb8kZg1bXGixcVrtCJVyALpdHcZ2gP58FKd4NVvMnTnUKPGSsxnmp1y5sM",
  "key46": "5hFjo74cedGwMHqy7AqG4ggiNxmeYa7N5jdqAAofnNQVnT5Y4tmWbUenwFuMycV1oAmSPt2Hx6mUTgucdtmFeUAw",
  "key47": "3EkFnpqdYcQ5poqDWtTRr8dyh5wzUuC8zf2P8jZUnV3HLEEwyNUdYVGmj8cRZhQmiFbqomNMFwSMbW3D8KjxYd8P",
  "key48": "3xBrcrTCgkDdUYCATsiTvS4xwBicyPs2MhHFU7AS1q8zQxCpyPeH5G68GBRWN2eG9fGD6ywNyC7LvSvuASx8zAEQ",
  "key49": "5pz24SJ3t8L5bHGUBsBna2kf9tF8JTd71GYqJ9CBiLnjLaSsjo3pCoisX5ZXrJqiT49V4HE1Giodo3ppCv7AB39v"
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
