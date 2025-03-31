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
    "2DHjB63rovdKWJEMZhvAHQdQxjUn6wy6WVLDDyoT3ptxjUSJpNvKKYcQFBXBMTCcfC9qe26epWeAFyd2aVu46CAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QKvS45S9jUMuTpFPg4aGH6UzZD2QjDj9AQQvYLwYfhSbJRcLyA4gMQfDNGfVw1b6jukjJfUK9BCrJ1YcQcTeWUE",
  "key1": "2GrSQ84XYdrDvq4jKQ1FkjN63mYo1CdjoquTrkm42dtqRAuvue63NzYjnLgnHioBBYS468BeyijCK7Xtp6HWD8eT",
  "key2": "mdV6R1yVKq36hqKUPz1KCjLUKXpEF5FKXkrdB8kxJBuP16zvbP59C2wHWdynmENW6Eybbku2LwUYH8k9cMe5kby",
  "key3": "4Ybk36g71RCduyDVPJQK64fiCv93obSkgsMYv2XH9yNKP5wDvN49uMy3thv56kd95B3r6s56URBYuhMfX9PU6GMN",
  "key4": "48yAPNnpgyeyGakEiiEgygCxLxjW1WcFQzXKGK7NfB2fzKoMsGw7J8jHs4qZp2MRbAo9iSsZexgAcdmndGWyoEAu",
  "key5": "2cPfXpV7R13gNCWRCgmYa9TJAqsA7zCe4tMSWb2sQoXJJDio6zaDV4eiVuRvUcWhif5Yu1j8pgZimE8XZ8vpQpv9",
  "key6": "5MSjTwZDJAXnBzP3b41wyrDBXAFSFvg93nCYn9AFmUYteR7mP6u2fHuPh6XZ6VU9mtorNyU6jDmDRBigNsMWRzcV",
  "key7": "2utUCGVCo2cVpLkW3YkmyHAR8BsTWRYWUnLMTTvkJoavk64bQjTGNqERS2CGaPVE595k5zhfZDP8ATRHxdKLeDKn",
  "key8": "3GpwCzg8ZNJAMgGWiEczyg1LTRZbg4i76ZafBfnkZ64TQ2ALxihmcEW7jS1brGsdHx4NTEK6hugNnLQMQih8m9DR",
  "key9": "5Jah2En8bTioqYdPwaVSsEJB5A4ounVkLgDxJMFdCDwnArXpNpBGXfDQYGRPdAeBBNEeqDWtJWMgWF1c8o8NG5E6",
  "key10": "4Zy7A6DBNZ7XoKq9kVrxaWuZxontfjWNsMji7E2DQD8sG7AhhTaN4jsVmA73m9hi2xS2a8pZt2xux1AiN5V35F2v",
  "key11": "4NzUvxzmjdHSb5MX4o9Lm393cM4SLbA4VkLfsWfkTXwmTKPfSzupiDLwwdX1jDD7UTi4XxGHxJZc3uD4b42wBTV4",
  "key12": "4rXryca4X5sMW2UF6KWLxFAgDExj6ewSMdRwjkZGZyUneuwKKfAKbPTmmsx98BXkrcb3BVDw9gy1xMM1pYiuecQx",
  "key13": "ZWzN1t39QRxj4NVeZswbQkkG3khmrQxDSGm789sTrjpqynhQDyLuUZAfVWNXLj2NU181MWAmvhoFmuqH8smLhjd",
  "key14": "5KXx3btW46m2cBVhPKZsyXRMXfYTnnxBBScL7nC9jEsdPtTNdMn6SAP66pCmVeyjENvVNDEtJ9ZfKXjrvZDZRpRP",
  "key15": "2vjfA7QgjJ2sd1hNBLTox83nDrKw4KdG5jseokUN2oQpyKyq4wkZWzBjsMJhu8d3zxkqmKydeubVA39rypm7LSzL",
  "key16": "LcYXnVkCRGHw4gj56LWwJsemM9K6myw3ipjPmhHtUrbUgniVdgYoH6V4kUHB4gchjay2oKeFaXcaVG2Ke5Mg4bR",
  "key17": "n2uRcDu2MTNLHAyzB5CC69s5BaNPUJMvzpjisdyTWBcFMnJQLTkyM55kCiJ6EQrrC1vB8RVasZnypod6j6HcR9n",
  "key18": "4ErR29XtUxzTGS8wTYJMqSgJziBBwgL1NUeLzwCkb16k89uudXjexewkd1y29BKLgCiu3QdAvvAG1hB8HnQ3H6q4",
  "key19": "3fnsQGJQ5b6kHtg2WZoqajXqvNE8Pqm87pCt1jsHJbBmzELBmyxHWo9RU7dqpStJnRnuxZjrkFu41g8VrCzc6qYN",
  "key20": "5QBsptMD8Wz7VedYBTdDw8fccwmHvYgGgiivBEQbKzjWzYs8VAPCuqgXyyPLZaknn4YW2cnmQWgpbH2NsugLvBP6",
  "key21": "j2Yr4HQ6WD7dZzX7T7EfW9FaqH87XJu1MxwaqULhCGfjd2ygHmWMVJG6RQjZ2h2jvbwmkGu5mMxqbdDdtNPC543",
  "key22": "xuMVqZwEHkfyGYvTNE95c6SKjShNq6FZFjdP7KhZwoJ7aJ7LoK87vXdfXLDTUi6D3GdruPtzYwnbTkhNFyKisn9",
  "key23": "3LCtUudgz2pSbWW8TeDnvJYHtd62wBGuQqsSnsjq7HQi9ivnQpMuLhqWidyoywRU9iX3iKCaHRuGmQebB2GFtyKd",
  "key24": "2c1pHUHoQraVGxn4SzYrV6Nfr3qKeYtyxFkXEC77SWR6U9cNgSTEaayQrcg26ew1MDuhQyYqFi2p8Lbi7hHFUyGg",
  "key25": "mcvnWsA4wPazzn1fi5Zg9a3y47knGSfHGUAC4UBG7LxCrCfqhqJEmp1ViU7hZUJVEe9Z1NtsKpreM3PPmY7mp4j",
  "key26": "4GitvdDWb6mtXgadLhL1pfiJtyDuubL4gPgV24NPS34qSZVm9nmvSREMXL2chTGHUQkwV48DH9hMHBeMeSL4vjQY",
  "key27": "5cGDejeH7vg1NgMRRoyejRAAtmi3W2VQW2gjxvnfG5qAU3WfMEAafCkvaztq3RSKnXpaZbENnW86M7QU6p1VRG4s",
  "key28": "4M4Bdg9AqBBGMxMXJW9iea8omH8fyksq3toKaTVa4ST9b3DoRvQf3jnofuzNaobtLoDxAx9kcWoAan5ngcxX5jNj",
  "key29": "5eg6ZyiArzhTMqsQjMzuU52r2iyPaGMhP16rZxUoJpqP6kcQZUTfhcnny2xQow8BbqreQLvdxGk8a9pB9U9svE89",
  "key30": "wuQ6HH6QjXLxBQzrJQL5fwznWhXmm3TKaoZh5pvJgL3WuoVnUuAS9zkiXG36d6VAz62aT1TL581ddj2o7siutja",
  "key31": "4x2GrS2zVSzLNcu4GjVxuBtotMpFJJAjB4o9DuZzWQc8fFQ9AdawX7GWF1DeWx5Xmb4bBc6mJNizxMpzbQHHY75r",
  "key32": "5DcY6c8VG1YbkPGaa1hXuk1ja4C4xdnvRcg548icogTanVg5FQwZsJiCA4g6iQzZqcyVKU6AMYWrsTAu6C47XTEU",
  "key33": "4hwysC9sdD4EjZjoxBrNDXgUZVpnRoNAnhU9CLiaUAaCvKcQvF1UW1rjbagLKwSAwGxP2uA4kW3uEFhP5vxDwcCa",
  "key34": "2mQdRe9wR76yh5rGgKYLKLgySumGsRmXVWi9jzdcAtubBjrHYbJJbXVA17YSLWdBKjQzdaekr5ofddjejBpHce1o",
  "key35": "4ryizQCuw53WZZbboxbiay7CRReELUcYXtfVKWspGDKTMQos7ZCqv531ezUuP5wvajRUaWXwVry4jDTS4yAsm5Fh",
  "key36": "udRhkCe519jh76ze68qWgC6CNDo8bTrn6uw9Xb3SEMVtuNYJZyte1SnrxW2m2zkDvYAotJoFUQBMZyzXfsFZx7d",
  "key37": "3hc2VPzNqXUgVCHdxSvKUUyRWRvYfr3qhaX18WUEakmAwHSE2q8LCXdVCb8i3dXc6o1e528bj4sYfrn47KzVThcX",
  "key38": "5vH45N2ev3N93k1CrASpaegSdcXq1RCZVvYmxCroAvH7A18mZqVpTof8H2rfyTA2xpoLfDRie4kSpJggKJmyLy7b",
  "key39": "62PDKbCg6kfzDzFCGyEdgqdhW6YpT9NNHNBQiYkyrtJ6x7378vRCaAXfnF4JmETgofTqsqcWqV9kaTgQ7VFkHEen",
  "key40": "67Ed2CYrRqmXkT6NqVHS1T6j85orSQUPj3UZX95a2oxPP4Ca7ZRqnKsgRPAvZca7vxd31EFK3BMjBN8CgruApNjy",
  "key41": "38WBLyMHTXXJXDf6woTA31yjxyKvQMsgAJzUa8pPfYyGGwWbDxRhvbJYBQr9XMwsiHuQGgBLAGtbpybqW3xoRZTA",
  "key42": "29vhDm22cFce6ajx69L2d7mbHfNobGwZvzED1ihg4Ki6rMhVy866KiQeGAtpHj59MrjqdpAZSuZ6x79Snm7NTYRr",
  "key43": "5Lj62A2D8qiKcJFR4f2SCdSwzBHTzZ6quxcE6gvh5ACJziAYpxTKXj6qxuYShoenQRVuuDhTmDwFQbE95gUcfXAG"
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
