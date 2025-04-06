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
    "29s1oM7tTfE5YxAfnBN5JY9FzNUEy78bN1SPxqxeGj5SBgiD9wA63NDYswnvxJeniuVogjCZaNLHVW6kpXDAVu5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D6e59PaHoAm63E9aKr1a5J9w1gKmDRrWjx7g1Bu4vpUivmKegxfcP6X5DxJ7PrEMJ6ZEa1qFP6FSqGJfcRJwHwd",
  "key1": "JJmnPZMpCNNL8qHJTdVK5BEjoPMLybrZh8VLUCVS7q4W7H1M54UqinDfsXmjHhMPnvaZH2zPvUmkra1y7PzHkro",
  "key2": "2DthZtYo5dkZ1tcrj2RMw7asoqmYfq7wm2D9bAcNQ87zXtNjfX3kfRckNxpwSN7uZqrJMTV5ACsABvTdp4BfZ4rr",
  "key3": "4X5v1bGA6VxTChYLZcj4F81741DJWj8BocEXMah8QgFJusXWkgC484B4GgcGCwsrz88jWJvqZjojMXwdftvV2FHW",
  "key4": "3w2wgw25gSQAXzCHVJtBddWCHPcCTyJYn9rPFHv4MYmnZMUGLar8iTVNa8F1Etw51QunLieMi7DdYXjcYhKiToeb",
  "key5": "so7AZbDVX7rmsh8Qm9DSrsaCroyKSejur4kTSNccRTbYNZCqPMX9nUGaA4voc1DXJPtZCEG1QQ2jkF4Bs8savD4",
  "key6": "2VMFYJSotqdxjBuKP3bPWkWeWjn7EWawNMvBouWVgtmQ8hbjTrVrgDD3bGw1yNCuP2foJentMLE836j2GYFUoLft",
  "key7": "5pDR5KyqPbZCcRtCMFcR2xjYebt9YGw5dpgCqHtHfdQndVHpeZhgkA4iSrD4v8qpChApKnojMmT4Rpu6BdSUJa5k",
  "key8": "5n4CyuAtQp3FQ8yAm4QHnVTcWhv7jjytzXcnwZtFAjVEPs84um3mEwyA5ZRWiJL56KqEfUeeWw3i44x6DuMRjayq",
  "key9": "4HAYoEb92sGewMo93gPW7bPUAByMqTwaBQ1d74W5iyRzkqfC7MBZkrvuaZmMUwosGTERpYP3sqhAy1fWG2s4g27B",
  "key10": "5Qu4civxguYTd49tpg5g7B4kMijoi8yuFg2kr3aiXZPAVWoLmeeEaaLqE9zcM7C1zDEL5QTpgJ6pm5ciVqk2EVhT",
  "key11": "gFN4urSy561hKw2ZUBnTUNyvWgmKDkgi4rSQCucQgxHUV7TuaXuFvZ3fofshPsDn6L53jMKNyWBoByGb9LUWEEd",
  "key12": "eaVoivJmtWmNGJAzR8qxEGzFgWGhkUZBrk1EMwYJmAhs9aw7mntb8sDubfxhACSC58LQYjgrSpDN3ccwWj5BTTo",
  "key13": "2AVaVixpX1HMkMaPpMXMUtTGRpPi6PoavZ53iR9Gcef517HrK2EgNykhEPnDTUnmpFUWp9gsGJMyPgqiYtRqYPfB",
  "key14": "29KotSJwQvNEPxf4Rds7VC23mcjpLTKiRnsbMa1bULSytTCGyYhjCPR7Yhzrw53FdJi6AsgZL31GxVbRveTx6G9C",
  "key15": "3rzX6uHrf6sxFfM1PirL4dY9hxVyJpaKhhFgobXBNQt51tvS2teA96EQtXvoqoqnRmAohC8t1EKsqJDktyJ7gaty",
  "key16": "4nDqzA5HhXPPzGyL6S7S1ZTzVty8bugECLbTvEdMxaWNbj4SUrAhnhzMxStxNSG9N4FarKwM2Yu6kiE2tgAGbpiD",
  "key17": "2XP9qhgPbJZ3SwZrwdZqtsWxnw4otPpD53jkZKC1vcU4wKnddotDiPc7U5EKivQveUqjFRU5qzKbBdePf8iAzJhk",
  "key18": "5iBzmw1SaGAd8Vgrmt71ipdrvYhimJjYm1fJEtNjRKAxHo3nxCYwuLPxCFQFzxFHf8ZChqhVmwwZbLVEgiPR2zvZ",
  "key19": "3WvrNdXBaP8UKbWqB3zMLrSXA4mRhqe3dcaS6NCMHQzwuKT9kKLnFMMMFwdS1TXDuY1AezgUJxZXB2Hux4F771cB",
  "key20": "26hpQHP7aiQEQ3CMSExhb9zx3iaigTBaZYQG41zyERhLyJqZpbRoq9rcHPGrNJvmB17Kt54G52znNkoLNLBx23TP",
  "key21": "YZz5Lu5xTvPwpLcCoTC8NPHe9B2LESW8AUfbHqCM8DcBjPjeWTro8HasNWxjJ59aE5yTRnNrG1sHAGLS36xd8Sc",
  "key22": "4nJ7m64758PmSd7z7LiRvqsRjk8H2y9c6SYSVRug51JpF9zJK9dBVC4vNvLekn54a69Ra6GfaXoCc9P91uqDA9zb",
  "key23": "3Z2wkyMsr3L15cyk7achrSAjVnjexx8CfNhRBRzBEZZW2JD7RiyRS7bfPY7kENepKQSkFriiGyPyABGTodVpJhKv",
  "key24": "4CbJvTckiN7TSqBodEC1Fez1kgbJVDQcDM3P6JYhv3S73mgbi8pGVxvDxusSVMcGfA1wRB3CVc6JMsaYQVLH353X",
  "key25": "2MpPKwpJYGkk2HTzLnQwc4WuC7Hehqp6noAUGZUJXqX9Njb22G2LS3jxCDWYgSgh94fiCLK3ALkLzqYq6AdMxrHi",
  "key26": "YtA7JWWUjZzdcGrCGd6HQQNLAPafXfqc6FerPRRdMchr1vAa2TuMWikDhnJEjdVkExBuTrpaAE6jU9kvFUus75T",
  "key27": "2VTycuuu85nZyXJrKYU19HAVY3BhrHm2fHGL2zi7c8htR7qZzXUsZ4t8AkD6qQvWSSLqVoFmPTWHRtSHinYm8TSG",
  "key28": "7hV9Kegn7qoKEjWxSdfALfrPRvm31nq98VcNKHzUUJ2UmZtvWsg4zs4H9WCoR9KDi3jBXGAT9hxoggjhrpzyzyR",
  "key29": "3YgysEwJMgGMix4v6JJBtpwmquhPpZ9yRUhCbUeqn92ybPG97GgXJkUGs9fsvvmPVANzT1zka5JjBFPBGAQaqwrQ",
  "key30": "5tLnCNctAwtVLUb21oaYPw2ks73nrLB2h1KhAbSma2iBpyrBYek2PabxbzEBRhTAnDpU3m4G85Pk7Nv24aTSvHXc",
  "key31": "3yrUaNxGG71GRxEr8ZddnUawTyHowcar8jHPMA5jLKozwhTZusLxq8q1nnVJhZEW1kyb398VmJwhX6qBXVQs96FG",
  "key32": "2aGhud8uSKQJG9EsP6QagfooR91wQpR46XZCMYVcto52HTr2bgG9xgPFUwEYE8SuD3pdMFvc2xsiev3rEPxfAozc",
  "key33": "29LK9oqz499dxAPcDuvfx5HoNuTM3ufWpzHjzqj9E8KZpQb9hwNvBFKJsGgdBsSVoKSp21ZT9dQMcvzovbiTivDn",
  "key34": "288rdhXs2cmHFSh2UNiHN9R2qApqE72Sb9FzvaTwYhbu7FPspg9FxmLF1o29F6RQeJg7Qejzu7TGN7MYCxNbCQNX",
  "key35": "4K4w1XydtYzRVBze22YeKMqyJmm7e7HFipyTVcgtq45EgCC8kwRfw2f5iCtnac6RMHxjUWFJNyutZQWvjAAdSMNL",
  "key36": "3AzU6SxmmajM2Kc7MhH7Gsomgdc5mVEpydihJxwgfeDuugeKPt3XQvopv5e8XQHbtTjuhpXwQmHk7vchSMZVHtwR",
  "key37": "QFuTsoUFFpwvFsVYeAUsbp2JL3kcnm7HYpu8wTDGxbvnvsK54biG38aZg3G8Wxzpdg99MH8hDwE9NdQubx5HPR3",
  "key38": "5RMRGzAti22VF1WL1RkjRQbyAf3UCUgsmE6SDiw4XzfWq84KAnBr92wyS7fSYg4LhpLLL1vFfqauVTLp6VkfP74z",
  "key39": "2jJn1L4g1ozLwxJ4NDLz62BniuSYAZnnrsGtiN19e5Jbs7rMxGWXPPXDFt8etsUW6po1C6xBJfHYFYc687bHaeWp",
  "key40": "35118ZmXKSwDCQ5zv5Xm34abvzsvjQ6Da8YmPo6A3L7J181wC2CY68BQ2mDVRkisQU7aJLsx5CG4KPAdfKEJAGwE",
  "key41": "AQazWsc17ctPMUNuLLXoSgbSyTDFSrdysBc1ZxYd4hfRWdcnQc71pKMe5vc8Dzyh4mNJsGVx17xSaVri5jeFZjz",
  "key42": "5b5Hpfw7ufRLfdYX6J99PhjvA5k5MhJZAoxM9ujaUDPgHdYn5sMvnMZsyZJDbbqzfEebuCzS1GwUCyPF6dLPDBBH",
  "key43": "sBNE3VtEhnVcpskJ6H7ZvgirDGYjp4ENpWy2Tz7TkEY7PTawc2DgqN2rRqaCKcnQUcS5xcPW4BMZabJG8xxBBqJ",
  "key44": "3CP3FevgEFGHoikUPo2eYRztEaqrzeQQw7vvRY3rHAz93nsSm4aV4eSgrX3MuZRfaZRiXHTSKJEBSA7hVYRHg57C",
  "key45": "48Y3QGi9HvyMv5MfxUCo5t1E58ew7cwDvBQTwNbZ1RKoTjauvScb49rPvhyuWMCt46Md7SVFP6iWxshjPQYBEpf6",
  "key46": "dU4GHryh7GzFaat4LKR1J432QgyQDRaVNBBN6LXnGcZyYxAa7pDLVyekYX1iCGDijFDmGdqxKr9gVTTHpb9uX5M",
  "key47": "2DCLpxQbf2wscW9isp9uyBYsLZNoGDroQJX28aJZaYtqPy3djvzwi2GymY4f9DzGHhMw6W2F5bEuE8FQyMcsfCWo"
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
