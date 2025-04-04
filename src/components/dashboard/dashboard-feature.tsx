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
    "xRUUqAPYBvnrKECkxVPkHoKfQdUHWwvCoveUUZQ9g1Zpz497H52APRvYWHLmfG88pzRVuWUYSpM3ZFqSUr1genE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RuPVdzL9aEJsqjaDjSr6DCUwnNk41pyYDmQeNNADwvUjUj7aL4n8xhtjUAAWAHLoqcFut73ReG9N8HyRdcmUic5",
  "key1": "4BXNADMrpprtjEeK4eqxw3h32Tct1nS7TwxmDsHtQy8Ea6uTU74ST1BsaJrMJFmNNLjQb3ovdM8djYGqGSrf8wP8",
  "key2": "3vXgCKAKWBtTijoQqrWqBRfpWBRhqnL7NHyXadXRCNBjcmsi2eRF3aZd8faenfMNBbjvn8J1cX6mRq7BiWim2zEH",
  "key3": "pyjwBXMqLLKwDGMDeuRkVX2QQKynQ4KbKPXsK5wfoiAKcNRDLjmSBnM6LWrhT6oMStVTvw1bJk4qeZMvNXpzPQS",
  "key4": "5rmpZdxGrVaDtz6q8KePPB58Lv6HpNgKYeSwQ1mnd6YrhKKs6XNysWwaUDjcA73WjwBqXMXaAZFiEj84e1udJdGG",
  "key5": "5SSUwe6cMiU4sgyr6jD5fLAUBcpViAg7nJe7wVg6rS3imG87Fd8mjbvTyX2ch3C51QJZh6SB5sxxoYFE3HUL23b",
  "key6": "2QBqwyg2QR4BZfPRJg4pwSVDnkqHAGJrtuTgmEF1K6NVNHhpkX2DoVEuREErHDWUEv45mBdy7mfgRB7QT5PBkCjv",
  "key7": "2a8DfdQJ34CvMPEGghwfGyjBoMRHNcVRWULaTknYPThxk7npxWgxw1s7nKTS11zgzLvxL6JnYAyRu5shmJmaeUGp",
  "key8": "npE5co4KBdaynQKM5cWr68NRL6iTjHGRzBsQddueCo1XdYRbJHw24FSopVF6FAJDTTHVJoov59Frfn4JooikKs6",
  "key9": "W7X3i7XQrN2VvTBkmbijwVs4xbYnTLoH6WPH8po5KAndpzbYijrWqGWCQioCuqe95VRk2q2AWeCrz7if9MUamFh",
  "key10": "B9PnHAoEBfwURFbFpqHdowhDRVrsgS8siXxTRQpa2VPTTzuMHqoYEfHcNzriY86aB7Rgwi3n96GJoS8o1SUb6mX",
  "key11": "4NrXkk5P2vxq2BHn2LMwq1ghJrTpZ5BiHRcpadUW2FrPkqYgqR575HJt1FDrCQmCmQvouakeAmVjvbGS8tBW8yvD",
  "key12": "3GHkhPPrq8UxoRf1WTab4MZRHWEqkiK9C7kP8Rwu68DpjTGEzzGMHnpP8QwgBur7JwCafoaWr9zy8tFXaRgvns9i",
  "key13": "5ws742ZVbQbzYpXXyeU9i8deN63X58GMXRC3qwbhpYCeMG8A4yxfFVpMgN9L8DrjFtQwYJEYkKZuKCd6qDEndWkB",
  "key14": "3Te2sEsfoNoXSP39TJ5RutSBUXCs3ygqWSDYj5MJs6VeyBpk2KfhRpudPPLmiU7zKmgMpWbvhX5RSydNv2MJ9PLP",
  "key15": "4Te2YhSy8fnsqzSGsTNwpf8rah4r5JgvnUFqtwkUFZwhWsfxzu29bxuySETxjXb5ey3nWZkJRPsy3QJMnTse8TUu",
  "key16": "Uij1A7K8ABnx3RLTDdEfepaxDHkigGfb9PTuaxdquT5tqUpgBNwyfh5UMJXpYWeYou2PDzDQUXmirrFuGnJ8ZE9",
  "key17": "4BxgbzWSnARbnziaGRhybcjjDgGBGjwnhBWtcoNoJ2MtBkCpT9NVRFqoYTAURPKHqit4VvQ4CaXshgFQswLRE3dG",
  "key18": "hMyCjVAQ3SpgVFLCZwp4Mt1LVQm55FYC2Je6SaF5C4W1knPyebYuCB7ghWF1Npc4KBGZLgjzhn3igDGUYu3qytQ",
  "key19": "3xsSbwveciqTRwvwGwjMRPAcvHGvEu1peQLFQuo12cDS8ipsrWJeEygyQyZgA9jtTVeHfs5ohYeC8EvmbjqZ4agg",
  "key20": "2dwfWyAHBcBLdpVxz66bAB1cTHmeVg6ZfoarrfpiXVMYCC6XwBBxEhJNgk2vEFXbVvE3Hg9mvjtE2s8Enc5wpteu",
  "key21": "3x7Md1LFT8NEDqNABYzmv5ggP5kNYTR1xm35q5yjn4GgqqjE4ccXT7Sxaxt7BTwybpySfP2iDtSTJwe4pJo8NLT5",
  "key22": "5Rx76b4RvRZUtS2HJS3b1g4wezFFdQLsgLbimERV9oczBjxwHJadw8ZQFugRr5errhuYFjGaphx3Jyjn3uArPGiQ",
  "key23": "52vVnoZ1BQLVERWdnNTKVfqPWEyARUKg5CXamS1SaoKXfRkmMoCK9gPf1HgKW8NuY55RYECrQXtiSXs96RyKivof",
  "key24": "4C6EKmhFvjbwKJNQsyswk2ytAAHuZPyZYJrMcZW4zjNJ9n7nzfGUTF4Wf7M7UB7pWqz65Y9LWYcinaLR6oP1GukC",
  "key25": "QpUnbv9os3J9NGQqahqaCbuLFompMv34zQoCW7WsjJNAb5oR4Zj7iXA6JLKRfMStXUtNPAe53vjAwoX5kskMGhe",
  "key26": "2ocZZ5EeqPKBZi68H9P7NhpVtgXuarUH8P3stKLkW2P9ULRbooFP3tECg3AbyE3ahhTxMnxpYa8zxFUmd8wbFtzz",
  "key27": "3HMzVZ3yNzCuqNFG9XQwTxUuWunt8F9wY9k5MYuuNcSCPtLPm3g69eaRSP3bSm2Qzo3WcrhDZMyf8Loy2dntnKgT",
  "key28": "K3N8rmCp8knde8npRvsB9hcXG9cyDjaqPwUWCPx344CnhA5tHvbVZGZUwu6pASG9BcXPf1xtuxVdtR6eydh3A5t",
  "key29": "4kQRdPRakpwErfWebQaMbRzh3cxzSGqDXdrcDA7qyJUP46wZjYowT3acfPxBRrDV13niqczsdn3cMoWCNgtvfUQb",
  "key30": "Uf7irAUydqgycMgGKMkkQ3CfHiowUtfdGJYJvY41o3By53XWDek5iuXeYzqgDxsMkzB674MboB9TGowzEaZXxr4",
  "key31": "4Y4d4hQVwvZT6ea1soLqmG77hKNxmpFfTZUekJ219vxVLFseWm19fDL5FQNb4EJeCJ7xJurq85SC6BCp4rzV5766",
  "key32": "5qrXH6GZtWoVzSc4vFvGkhsZmHYDwJkoG1t5A1RE5Bvvm2ieD3aYGKwB7USEnKrgX2RDbJnYQtifpVny1wge7UfB",
  "key33": "2bTo4sYcdJV6TK5mmrYzHXsk8YoTgtU5n4qXcdGk6E12GBSwTv1TPD32gkwRfjvmQ5kKHGpDRyaHvxXXRHLzVufg",
  "key34": "5xSU4BFygDyUtGLBcRx1JNVcN7AqemwnKTi2zcNmz2FERprPLgTbCzNsiWajQT55n7ZSBLHzdcxXvNocfcMeuuhe",
  "key35": "yNwU2MVowSxivo8zb9siWURAg1k8JcqjCZB2ASVRbDxd23Gu9DQnYewPpCgCUiZEJ53jR8YyBriJU4kFyWThguA",
  "key36": "KiDBR3YXgsWQKELHDdp3TotRsQoRQEo8KU8E29GfmWoQZbeqrUwDS1y1qBXchPEVfwL7rQXRsGjVkExRBzrafL9",
  "key37": "3ErGTNYy2VBspdVQkUQUUpYyUitPpMGmHobVZM4PS6FnPcrcybu2LQEzXikKspErqQC7xYVahTVCzAfhH5jikHRU",
  "key38": "2aYazDzWrixabvbSTCdXpdfDkBauYujJdBzXaxmyEnETLB4Jich2eAsvnjQ43eM1rBk998rPYdR1vCPSNtqpZ5VK",
  "key39": "ADEPxrLWJQnMFvLJ1uBh1damhkwpQeuE13KnWp79tgxsaNDhn86tSe3ArEu78pURMBiJMTdj4ZtMSYxyLRdD8ak",
  "key40": "2NBA2DpTWQbqC8T2WvKDfCMNtGDXvmqoGT389LsWGCx9XgDDVCwPbepmsPFbiecHKHU2HMmBJgUafCYcdBqgVCk1",
  "key41": "aeTgLnhWjZ5TdVt2RVgD7esw9g21eL66dL6vXYGZBY12CJZv6WESjW3P25yeoCw5BSQExSTmwttaD2C9wXj7Tbv",
  "key42": "4etjvpu1rqdz49FyS8epHpEtgTbwwCf7S3cFqAtXP2agBEqhHZYLB9M3WWV1HwFc8ajQG5TeP6jG2hTp2NtR96iF",
  "key43": "2KVmb3C6QaTwuRwzMwyHH3HHuXfaBuqQxirjXwhYBxDQ8MvGy3nrvzT2KsikBpJrQWVWyDqvka3cKqjDqHSrLK3o",
  "key44": "5vkmVZfnTnfmVwV89HxSE2vKCNxFYygESdnhKDfsa9VNSuuCPnsTU1wvraZ1EKEUKMyUtHnjhJaDaz4fmpx4hU3u"
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
