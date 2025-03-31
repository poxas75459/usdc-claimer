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
    "2AHkMsNQYYJew1eLQd7FnCDVHGR13rdifjthWyaKMZ449o7VueoErKX5nAPs3VrgFryLzxAv4Xe3EueUmMKMSYmz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SN3mRHQ9zr4RTNGqASauagdT1xnWt92AJCxYjzXhUXpeRp76626G1TbYv4QseADBASGsggJJ2RpeUEB4B85zapG",
  "key1": "2nfZT8jqX5SoLhUNJYMktxnxRJLUvmDFx5nSGWPfYJWuZzgkMnP2RGaDeaZGieK5hDm9E1dX9jzCikqstiMPqqmx",
  "key2": "3h5AmmsRg2wnAUrLnTMaqRtMxkyukx6T9WEZeiXqSVqc2GjcmUApMvCeUrSpz7TgDK8A4NDj81AywaFKUDfRo59g",
  "key3": "2yE44X8Qr7jjmGsKq32yFPF9wnaPFpwLU9Jrs8Gd5iCs3wXHzXDaqQo48ttUyqJ5Um9KMYboAJpmFmVxTt7yYUpe",
  "key4": "3LkHaRTVnKKKZbZgW537wr6JeGUCzU8oYU8ZCUe6tjf3kPdCRhrL1JCnQucTFsqqzL5BM4NDZh9jfEiQTd76vCLZ",
  "key5": "3vTNyJUe2tCMDnH7SjV65Xi4ffWyy3FD7pcyrte5F94UFuFhcnt7vbeZXmjvwecE4UVrvVSrViHtgaGdzEPmD8kP",
  "key6": "3WG94KJVc8bV3WrjaC4GMP1VtdLF4ieCntLahYtSikV55QHBNJ28qb3miZtqymVywqphc6iLyKoDzUt7MP6JpfQ6",
  "key7": "aEx1ctjkvGLvWc4EBL9nhMzQDtvwZq9DL9ZGqUXHGAumBQ5mYhqQ2i93fpXxTHX3xz3UoBNazLSuY5Hpmnb4nZz",
  "key8": "4tk9UM8KY4k8aDXPRHr3wTy4NhgCzrrEZE4DMabNVAWoseDmzGeHQFnsH7YjrDbxBkM9aws7jb1WuZN6Eku9zqM6",
  "key9": "4muM6E4XzHtSczhL86R3vME93Vpy3gTAXamXhrNAzZviQHXchYj7e1Y9NpKZdWzb92kjzANWVibMNgM4pJT6iDdN",
  "key10": "3LH3zxVvMWaPVSUcFjhF2WEXQ4rQRMf5eWeirHhKU4kBSUcipyXco8sGH1Ps54iGoPRLLozgg5yo8DtCxyFwJHfW",
  "key11": "44piZqA2uCWzxyM5R6hvLEEv2oWkxC5p9eeZLqpv1hpS83xjomNAgWB3DkGnQXfWzo4nMVZc8rKrtWnHhYek9LLx",
  "key12": "44Zded1XuBpcJm8AD9skNPFCSjM8T53NZiJWmz1HE899swkXHELhLEeHuRMcbY3q4JjGGvcPjJhJFggCy1S7DaPp",
  "key13": "2vRYgAzbmTKBYJnkAxUtimywnxj3Eqt7wkTrvJjNxK3bQMoPbom5vtfSjxN3tLTHwUkna1equUymitziSyM3XUwh",
  "key14": "faQ5o2dZmqdPdroGNYu6gW7TzKZ3QzpuCCFxUzFAsaKLRZ8qJLUY8FW8HLECPiyj4TJX99MA6JSoR1yrdf8gSkA",
  "key15": "47bBXXCactCyzkknhb9tnngQQcgnLG5cVGgS98hg24ynyrzQbP7qa8gMSkyyL1Uw898eHsgSw1LETEMMafhGaqbV",
  "key16": "5qYuuXioxGx2x9njV4diEzkSmwfGJ53rP9ua4UWxwYM1VS3HpQrYUAEb19suL9VYKsvuKCxMvRuCo2RBPCgJh2cj",
  "key17": "5bZdjza1Ae88fwQyHheE8ZEg6P47Ds85dndcbvgvkrzgb1DiTX4B4kAb8oahxFUKjJLVNWUonAzSAgdDmKvEXrSk",
  "key18": "2MRk8UFphyZQRzwqqhsHz8MLY3RvQyBsKzsVPyxqB8d2gZPKFx3ZAg2J5D9jTVY6ps89bNkKCpbZ9JvZZbtn1t3r",
  "key19": "4Qt8Hd2t8jo9Jf5S6vy1HfdrAvU7vyXGZRvX4Y2yNrtBpTyWfFxakARdnSJoMBtz5fSjjuafbMu2N9nMeH7ZKbmG",
  "key20": "4Zd2Ha6ezgTEgYBzC6ommvqzyu4xtia3PF3Gt6L2zTGRWvNFq3oNefm8TDiWTUj1BmgamiLb1YYFAKufY7ogpHJP",
  "key21": "5kJQLYX4bzdZCy1mRo61HJvRPnMaMFrxWFB2yMgv5iujYku9EfjcXWsfWQx9sfy21qyGT1cxUmK9bBwfPuCNXvTd",
  "key22": "2iXRNo95i2EEPhwHtBzxfBDehASH6tMyQ417FH8WzGv9BRy6FXd6br9okjkY8GdsnQq3m3d4XWRpTSYMsf92UMYN",
  "key23": "5D6cVSrE3M7rYVoAi7nmW8fvZRDZZvHDtMatW3fvcazCJP8YaY7DnWYZPAVTMnNaVE4f8Kya7jczuXNwP8EEZ4Vq",
  "key24": "CurAf7GFAhwzMzKYxjJBhzB3JFsjnq1A3sthTWbt5H1K9SAVJG9d7374EyRK7DBWZGTc6KTUk71WAHBD9RCb1sT",
  "key25": "4STidW9HXv7sfmbni5Rq3bJsR5aaPMAf5m9anjYb8bnN3RV3YjofjsfGp2LNMBARnMJLG5J84v7xKcXw45fWX4kv",
  "key26": "3ecmGaE785RxCJqWWLVWUy4we53zDM2TtiiZyq11UBb8XA52F7RScCMjQ4bV9hWhA19duM3JDpRCfqUULgiVkH9q",
  "key27": "2f2vbmAahwUMBx6Y1rRD61cxUqVz8dowHncSpvbdX6iE9qVyGcbUXWAb7iyDvmZL3Y3JYhVhicMGeRVGEgSAZCmm",
  "key28": "47XbMj2PPg8F7noriHJ8ZhEco68zNbnsayw65Jw9EJ9nSgpg7YUo7mWN2WALMwaN8XNhxipv2yEn2coDc1opt1YL",
  "key29": "5HKifbMxBYzq716pXyuYnEXDMi2CmbH7u731WuKjT8ur46WqmqZ2Kk68S5aSEyfJFY64UBEsx7Yh8z1e8UQCjJ5n",
  "key30": "4J1nCVwpX75g75soaRguNVA77YXx7X7YuK4fVM8TMvk4BXPHyQUpw1eqVj74PyV4khuvrwrWFTMGYFAqK8dXs57y",
  "key31": "zuoHqGgsJo4AZq8a44TaxKLF6AV57uLsJXc7gCJeEosum3BxaPnYdXxfKAo12GCnVaQZZiLQHxgMBgFHATHWAn8",
  "key32": "4xsBiQCamQNKYHn7ZNNzFRLR18rWSxCzzRNZ6i8a9gEC1yDC4uERAqxkFgg8kU85anFDnkUeaBBhW3xC4hXatVyW",
  "key33": "2XEM5jfwjXAkzwjX5dikLDzNvZGVBxHjhqrfXnPFyT3cjT9BHj6HjSZoXxSMKMzZ8ZKVdqWMdxDMzKfiUb3pPGfu",
  "key34": "cXuZ5EM1ww9CxV9H7RYdPi5sTgJXQtxHNgjTfsq4fjxt5WbNiE1kA3xQfkG3wKfoXv167HRHGDiQRWX5Wpbudbz",
  "key35": "2TipQ2FRCeezbXsbsLFtWUXLaST1hza8LH69onrSsFWSfrBsd9YvswYXYy6uUGPcmgGpsosov2YgQwdyLK7qsNwA",
  "key36": "yhyEm8BwMBnp5ZppaSxRrUK4QCWoAh3q957Y6DdoowR6EL2nff9TVxBf1sDy3DjG7v8EZMFkgERtNjr6YvmAXxs",
  "key37": "YBA1qb8fcurvjhMUvPg8SaWtaVDrpFMLCXQi6vrEBL9dwbASErHjLsAsUHkFQ8qUchZdy2daoFR72sWMi3k2A2M",
  "key38": "tThQ3gqfDQ6pzYfTRL6nFM73ZKmrxGzo4LD8eHVMF7NP8n7LwgQpMH2xYn5MA2ZEumM9qENg9G45RGZAXf8ry9w",
  "key39": "59eQRxSAcAPcK4GtgETn8bvcKN6VpoBR3sBuxJiTUYe1rcKQSB42fayTyWMocq8oYu3avdwHUREPfL8hbHo6GQzZ",
  "key40": "5CVQEebdtSJDqwAkutowSfW7P1z4ArYe31XNoEyc9jzm3GvqKj1tRnzuzkP1WFmJGP9Uijp5YKMHctCUUdVdxY4j",
  "key41": "2Y7pg4Z28rbsFz492HuCnsSgkEfCzJui4DhTVf6toATCRPFY7tjYS6rK7hYQPwqW59HpZaQKrZZt4mVjfj3bKHUW",
  "key42": "4xdCauaEU1W2JqoMywN9sjzxHnvUHmCBoKeQixEujjkrWaTcrg2zGt439ZKepS9qbE2Dx7KeMhL5kUyqo8YBFhzV",
  "key43": "5uf9J7rLXguT2m6k32Sw8SXZSQcTFs8vitTKN9y5PNHb6jHMz5exjYGPMujqKYCJWJ2krS6vayg9zPepYSTbwzdX",
  "key44": "5V7mvfsVy6XTrE9EN2dx4e5uNTWMjWfuaUWXwb93ykthBayUqm5DhaVovudjayonUtxVGvjPeX4N4DrNk5p9hKi4",
  "key45": "K8UmhuZp54azxgGm8ZqpUU13FzGnFPbosFRYNfY67mjz8zBMTcq8Jr8sPEBXPWXN1GEg7y3Km5N12WxrY8mtr9h",
  "key46": "4iHHo3Vw4MbgYaD1FKHzGTnrvL48H7SSWeMKiJmcZjBYHiXzK7NapECVsHJmYpCTyF6L7NU2D5a4YK7PQt9M6nYi",
  "key47": "2t2n2FvCbgyaq75An5FMUrHs24QcHi3dQ2VvEsjUuNQMkWUUNTMCSNnf7TiLDNGC6kuJnQvKvRs74DigZEkY4m5U",
  "key48": "5nTN4E6i9nRe3v14up9qgdmH6xhiNDFrGdm2tKd8RJtyhuxLaWEzFkuCaX7nPn4nEKysPCmQo4HvEFjvdhwET3vH",
  "key49": "UrVL6HWi3hHfyxiYG2sdwUvGnfN5BkJfbRDC94GXuqMzRmwj9CxpSzM2b3GKdDAtTXyyXrLBVEy8dzZX48G6GdE"
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
