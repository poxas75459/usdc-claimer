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
    "2E5aUCV4KXbGMDExUy65gkqv2MfdQjf43KtR2gPc6auMJCr8z3YzenoC2xvA5Ww8TuAWsQP8V8zdSjfWzrWUcDZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58qc6L7Ek2Bz3MTkPBaRTDFkgC6xtP5rg66P3w3VZbkrbmYTBciqAoUaQeKD1HmCs4jyDoLdFYHL15wRHcvC5EFZ",
  "key1": "3fLFutaZnNcFFPxXRVRtRvqSMUVBfLo68PxuVEsJRNzhLMsEgPzJp7RLXXL7rngndKfFpT2R1bWndoHc778pvmME",
  "key2": "3jfgWGkisHt7CW84jfMTUZ1LBme9gXbJWVYspULxHqXQHoCpg1q9WGtj9otzYtcNEG9Wkbw4muiwC8pLJYi9Ursz",
  "key3": "2UXzfWPpQAAXKVHmd28gQPB5sSNbicP64pXvovQWm8bk1FnCvBoGpZhVbSSuE3Erc46ExdmRRj7Vm24JckZUnkwC",
  "key4": "PQazp7eVJkXfHc5jRw7w7ifiWBASYWBFVRWaqXh5eQjsnGAwHE5jS9XrDdndBLnBvqoWy61syq6d7HBcrAzaaGe",
  "key5": "66WmewrPrZMeY9WZETkr7aC4yDHAbBN5WfqfrbdmLuziybdq4MKhYFPS8HY3E1Wk9y3oqKReQmK9tvcyw8KDZQPn",
  "key6": "2P8iXgyHadvb8ZKxtf1qW17GkQfNEGphF8hz1DSudiiswy1mtyXAa614ygT8hPUjHeFgKUXQY8fBvUidCLjrhrDW",
  "key7": "4mZ64oeei2xL9CbLwkSuqUwSEs5fbxeANzVK5WAQBiF65mPH1SfjT5xXMH8F3z6fwqxFdSpuFLTgojoXNA7jmwKY",
  "key8": "3PbdLJ2oNSR9a5Buk6E5BXqUdSYmQrrTTCpQZaKfunu5tFST12CKyHZeXCFyQhvv2rE59coBLFREz3EdkrBV5VtR",
  "key9": "3kJNRB1qorok2ymw99QTeYdXRdMWmpd5bcsUcqN3B9sqZHnKZj9ze3biCZa6EhZtHKEmCvrLscsKXXvgQNyD6mmb",
  "key10": "2ga8bHKqocKDEGhzj2Acm7zDUu39cKJXmPVdbHc2MpquZfPDYoRax3APkXFxvaRqysrRHAFGdt9wFG2QNniBWnzN",
  "key11": "q2gc5Qexo6uK5xM8TZGJ8Lb5F9tS3DTMJ7ebggapCTdBvjhtPEvJo4rkm82WpUMUgMEe5SJGXRX1LurGEW2c1dW",
  "key12": "5HKuPPjyU3LRFoCf4K9hEVyzuEEoKnebc7kYZdiMVJLHVQ1GHcVkVaAYh8vWCP9jQDqY7dVKhAdkTrZZdmzUeAC9",
  "key13": "jK2MKqRee1kGckbquPk7hCU7xMduTrpf6qV5za377gRK2ecnURJ6frpgZRyq32jFGi6PmZhBQhFQ2T8yzGNWsQ1",
  "key14": "3M5ZQhECdo32HXC6CTLBbT8NkxzcXnd7TaMg8VphtAw7rCJj6fbjk4krtfeJ974dTKN9UhXXZ96fjnsYBoDBNjQ6",
  "key15": "5XwC6cieE4bpYf7AJ2f1hbtGrr6nZ8k7qRfNbT6R2Aq5UbzZNvMqEhNuPynbWa9cycxvTDASRCdgeJHNkmBpDMxf",
  "key16": "4PT5xBipn9ddtmvGiLnSQuPpnhncephrdqaQxejSLWsciBH6mB7S2sx5Lgaxn9zJRAMXZzeQ9E1NQ7gEL9GdSWbY",
  "key17": "49tb4dfhnCdVRSbzW7zJeyR7Vjy9Rs6dSxLaDnQJAsKgv6oQqkwmoVmUuWurPo6HXUXj5YDn545NuZn6WNMwGWDY",
  "key18": "423qayMT15nR8X5iZ7HJGXFkrCwS4efdt6Qc7YwjjMtGAL2do3eB8q3eKQLoW5pMLrZTWfXn4fXr2sdv56tvkWoR",
  "key19": "3bXdHXGPbeQ3RxRiTZ789YQnELQqXZ7ETts8BV73WibCc1xtVaVxYx6JrYc44TFduth692eHwTJm9pxLvTisacZA",
  "key20": "5FNexHxcJvk9413MHKTAKKwzoGMxQSxrsjD73E7LnM63LQ5qhAUS4ZH5o8vjiEwxC3cGRAJoiuGnPRuefKjfuDHs",
  "key21": "2fSkfEpxZkssg89XUbDZVo5ubeNVt53A2eDv4c796Mg1qtAkkEogG1sxJUcoVMNErSMr8ioBwMQXaL7amPvg2AR1",
  "key22": "3HQyYZ9yAouY7wGQbXqT6untadFfHnAPx2t1dD54itt8BhiUsbDDPyLF3p9t2y25S8azFVRUUK2TPquL4yLHCpAN",
  "key23": "5Bj4mWShfS5f6of5TwUVNKLCRaKwcSw7vw95comAGynU2Q4vH8LvbV6GKqdEg9LbN2Fc4eSYGkY5U37Yhx5STnxk",
  "key24": "tAob4Up9UbTb5z3WhG5UPwV5CcEM66cNNNmHm3VyV6s8FZgUobMKBebCteLvFfhVphBLBV9J8YoY4gFUMAevFWQ",
  "key25": "2NPCymRUbews6PBEepfs1quAj9c3eDQT1VZAeHkQFAZZcJyxiyuyZnzYjsoDTQ5dcaow7UrwDZvzbCsoywfK3ZRi",
  "key26": "4oCvuty4NZDpGY248HNqGSPtr69winFTngHJBUqcQw9nDCRPgWL5uw1oJR2a6pLVXssvGW9b5nrAGKAGZtkL8Bej",
  "key27": "3J3BeQnmSvYGfjUQC6k1SJSniougW5AvjBuEUQiWeaP6HjkYvKQ8AnDzfNxUAQgu4nEGbGCHe4kzyY43XbBmW1dQ",
  "key28": "4Ptcjbt9T8EFdFBhEV8xag8ouTsMQYLswKVT92NDWXgRtAGZQcfbcmJpVwkDECENS1mTZPPJRY4E66vxNxrN2pjs",
  "key29": "4332FXBUth9GBsgJ1gwdyxu1M3mu5kvxCaRqdeMk7snJHMn4mFqUc57fqeptBgLRpAC1pyyguGxeL6G12yJqSc6t",
  "key30": "5iQvDoU5Fmgf2KKkpkWxaG3B5QMghwyDMvZxKxFc5DNDv4FXTFTHKh7Emygck7FKJHwXyh3t1P7As6ZZHsp8dRpo",
  "key31": "2YVKMoTcuwnf33t8M99SUAFatLyT5oyqYyqVavSR52CFh4mFKsbcXzm5LYwYk8bkFdTLc4UXuFgmAckjPDuTDs4U",
  "key32": "5DwrjT1xsoGvoZB8C4EiYD18kx7DUh9fzuUZLk3J4r6cuEiVkuzfyGusEWE4RKUDAHyMK3vPmABUYVzsT6fijXex",
  "key33": "2qGwr8NX8ntQaLy9SbqTLtSE8xGcx5bSNFo1ZSxoJXYTTWuip4FBmK4kZBtJGAzNYP4mYZz1RPrMgZiwky6ru8bF",
  "key34": "3dKBvfNWFTZFFd7k3eLsvGXAS4EA6BkTocPhU2HRTgc5kRbq37U6LgBoP1neESRg9WyehQ6nJNiLYKuWa1fRqhUN",
  "key35": "2JvX2Np19VcMu4Vp6oCHC8KDRoRwSo1ywy9XbH5VFXV7HfLNvMCEpJ26UxCADMUsTsZ11bLZHLpkX6EnpMUuk3GU",
  "key36": "5RdSRLJJpxsgBZxWMCDL819Y7527Xqtafz4RuQ3E3kNX2ET8QG3mKa9qqsf8cvuPx7FAzGYT7i35bKXvueq4RJHn",
  "key37": "yTUa9eFQzU4aYM4sVW1ZF7CTFJzNHQWtjz8XqNayzpSjNRRf7YgGMREnKCX9A78b6Qn5WDdkNELihQA2otauGck",
  "key38": "5x1tuhEX7anKcKVYWvLAkycHKZHTk55FHJeXE2DmhucVp3284guKX8shdGSKfSAKfFPtcwwqL5ToGPcmWLPshK48"
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
