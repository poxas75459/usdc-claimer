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
    "4BF5oWrVokPSS4UupykUZo5hxzwqRkiS9iUpHvb7uXZac3zxxeJWfGe66FLHTbhUSHYRcxaGaxwq5BokGXi9G82E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59uJLKVWXcqzPjXdZz5MdxxXzWV1jyDQ4fiPsRwZ1VtDdwq63RpGv8A88ADHnaRSkB25g6XcStggsft82V4mW6zF",
  "key1": "5wGZe4dFcQR1fJFf7CCLtkJmq1pnEF7Bd3513awajFMpcoCiXNqei6YCopGELtkKfXGKu3zzXp3J5XVKzW3Xojom",
  "key2": "5gS9QtQ6WnYZruYUeUVJ4VnMaznMxc1PKygRXYVuYTzMntcfwaa96vxDJnkbRnaJADdwK5GicuBRs6uyAnpBDqtp",
  "key3": "3J7AnYPKnRhd9emmeEPdcQHuz98wnPkp9TrvKfZhvvNXhaHJF5tMKMKhb2ekdmNTPzdq6qt4T9h7A8FcwttZmBHk",
  "key4": "2QJGKnSQ5ZMJFq5KnU5JMq1djmyMdJUfZAummbKHJAa2PeFpgiK6pFJ8Pe6GbAMt63UK273PzFpjjR8gV6PPLeZB",
  "key5": "4R7wK4VhaWM4QVtmeMHfTGEtkZGG3TLAy2wK35nJb5TWosNFLoaBJKiQo2qniWyumcLE9oLz3bYTxNffiYsAnGj1",
  "key6": "29MsyAQjihEpD2yC471DpNNeqx2Hm8wjmsAvWARzN219apDFLnpLjPXjcKvXTmBkt1SRd3UZ8zmnznJHx2ckJWKy",
  "key7": "2niYyyzSj3KwAmQrc76KgUqfnSxhrgBxJu7Am38EsB6J4vjJP1KfbFGCSx3fYMaXwPGfxDAx8VFTSipwZJPRyZMA",
  "key8": "32SUk37BRJ8K51be6udY1xX3YGNbVhAmeSX54PBxFEr4wSU3q23wGcqXMd8hFtoc6NMWy8tz6HPgrerztWaHvj1b",
  "key9": "5Bupb7dp6kiLHfV4ojBocRdyjy3kaVVK9NdW6Xf6VM7yY5StfpVyHg72p4PF8noLRGNy5SJvKAWjQ2Nw4FpT65LD",
  "key10": "sZPDBBbhJsPXH3sC3DNkHbRGRYzW2EaSCAR8JsjQN46186oaPY6cRdr2pvgZqroQ5TnPLtn2Hrutu5jLbJU2ppy",
  "key11": "4BTL94dewufxQ7FDWjNfFeDpRgsJS9qeq8Lz92C4voR6NQywSfpTiqchJ3DzjQMeGvHFsuVzBg1DnWYCXqFyQFh6",
  "key12": "41FmhyjVAeVoTX95Uy349Pty56qiNFbqpdAKW2PFDMKC1Pd9dBcE2cnHwhyVWSjMVXVYE93j8wFxF7vSxW4jQ5qB",
  "key13": "5uc32dqfHCRjn5Jh5Gq76ioS5dsh8wV8Pn2gnPp9QH6pop2KmwaAko8mfb4A9DrjuRczkUgPFpFbVpzB6Uycb1hD",
  "key14": "vKaxRQnHFt8USMiU8VC1ueizEuyWRFVsEJVWHzXnTFYdEwkVmrEupWEUSqnfxb7ynNqJTsStBGW6cJo9WtDWuWX",
  "key15": "5sXwVeZEqzU567zmC3K3Luab8udabUCbpACkrazUEuSgN4EZzKvoDA2ved9RUagFTMoQZu86juheaJgMx2yZcqQc",
  "key16": "Zt6rwKiY37KTGimorNtLNunqtgutahon93NuFSV6YAWM2mE5D6vU7ifRptjBKRfQLCsmDYCvDkda4AnJxK6kpuh",
  "key17": "5Z7A4VmS7f6FsVUtPeam7j3df8vmUSciicRgQBoADcjAxVrQitPLjy88zrJMaGzge7BzzQBjVoXz9txnjESqxoeU",
  "key18": "2CEPtk1KjAqFViJESjvUpRJEY8Yb2Tex59TtRzbUwjLkTq8zCxKnEg34cbSx5YRHG3MawpbKW5QKVHKW7rBnnKqm",
  "key19": "JjNsYscDAtkQni73ScJJA97jmJbA1UWcB8Yw6p59N6YWP1WaE39GvALwFTF7WYNzXgJwSEWGDq25MtTccAPG3pg",
  "key20": "45NwosD1274RjysyQZ5Shk3eH3Zd8mDjMCSoRj4jxVdYGvjn8m5zsyc1Ht6qDnpmYRYwoicWuUFbATEzyB16Z46S",
  "key21": "4od8AhLsYFBUKNHJXWsZgF1m2nJ38qwjj3PN6bqovwJR4WcAMEgQgqRua4fejrnku51iRZXEzP6ode1fRYZQG1uH",
  "key22": "3QaSXkvGS17aXgtbpaPFmY1QhzrbJQpeWtgLYrjxFRw4GFybwBLqSzEaYqybzFaj5fKuUUzLWqaRjRhqBZkCHze5",
  "key23": "2vXPAnJU9KdtDt27rJwdaj4umYEL2JxFNt3tv6C3jsJYV2f3TNiJ9Vps89mvaTxhEeuw8xaYfZFJU6p7cN8p8Z3i",
  "key24": "3eCSKEAgNe3xJmmm5VSMtTCVFoDwKLQ121xduZGKUqGJ8qENVRxrBgfj2m4jfpxzKArLs27Zgw8JJRp1CSbkuRQr",
  "key25": "4YSeTv4UJJuby1UtQywCMngi5BtcpfBpwKTc2wjdnBAJ1b7YHQybW8inyAP72UuvRqyWH8PmyGvYcZykR6Uvxcjm",
  "key26": "5VM7YAJQZjchMZ4n3quxThzpJCiaFQ4szr2xmtNUJ2mWXS4isnWbtyttTijMXHhWTY6486YqvyRc4E1dDTdKpnHX",
  "key27": "3HB7ALiwnX6DmC4DzdjDJJ8pGfUAW3tPAbhKGC5gWGHbRmnNq9auCVMyoQe5N7MQ2UUuoqFhb9YkzFzuCFnJzb1U",
  "key28": "3h4tjmivhEcnNhBWuxjmjkjZf8NHhZFcZ9BnTWQvjbfr4WnhDfcxcudZgZiBu5x9DqRU8F9P6RcmqqVgmeNLTRgW",
  "key29": "4mvVNp3WLemtjEiCXT1gJ7MbefSNSodyVMikaPLkPgzbzRJCaWfBSSXVeLS6nXcwEe27N4gUDRhg8VYveARAVHU3",
  "key30": "2yW9eaYrsUotu6Z1KK3SkaHVCGgHqyKXpPb7NWnmQq5tLJR2WnzYMsN2t8Q6j7WTQCLHBCggJSZbYawU4bdSakvd",
  "key31": "37BhN1B8tFsECvTc5z2N7RScttjt2qhHkn2FUjVDczoj9uHRxnJpS62KeRVraJVB3kDW5oBd3FVCmZTq8jtjKkjc",
  "key32": "26hcdwfbyzQ4asrBqZeej8FBeH9trZjzaFJNSeuzD8HtJkAMBQmwsjeAS6B8mJd7k2ng17HYizx1avNBSFtq7Cuk",
  "key33": "63vmb8TwcTmKPRHu6YarfSNfg2h8Lu7mfvRYiQP6R9frMYbobHnpBXZpPzLe2Gm2NY4F5h4ETu76qLUeCW12fJkH",
  "key34": "4N9GWFZfu5jhq66r9q3gDZyuxG4rwkjvMyJ2eCDBpgRxNFZW4G2BjVALWsz484xcNCXjJNMBAm6HTuZKKFjf5gQV",
  "key35": "4HpS5Jx9WzqcUqZTA7VThxkm9mvePCMJ5qqVV4xWFVg6F52B1qG4gT4pmeWwpLoMhVxaVh5YsvvDbdHt2S7od9Vk",
  "key36": "2A62EdyAGFkZ7SY5b9SjV756FXthFysztqDjLqmFDPu8A7mMhrXR8cP86ta8NMA9cyKscdzZpr9NzfwpWkR2aj5S",
  "key37": "29aiEFTJj13JaTFkZzAKoA5sNT6wwNH944mCMHHERaoBbBjiZsX1Dz6sKdGUgsCVRTEdCcEXMQPJsWe7BcnJ9ztG",
  "key38": "33pxw1MBmdxYA8hrCZxVeo8u7rc1S85X7LZX4FsBwhHnJQXeV9kDdUsykhEzeG2xXa526SYXQttSYYxwdyqHsptH",
  "key39": "34Bw1wUj6Ws99GuTZGet4rS92MEYxsmAhnigc7uhNxfDoiyzQttWhQqTK6MTgPtsf8wKgNpK3Y2zPWERcUGjnTjc"
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
