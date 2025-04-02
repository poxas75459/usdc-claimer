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
    "tsXyDWUKa9DbAM7fjq2RjuGiAWdsgrKGn2nqX8gk5ifsf1xpnrtezLR3D6Z55ZhvxKsFzeUduv7mnx1tHzC8FfJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53vma8WrYmsoHAGyFppuXuHGuQZWoaiyBckDD6BWgYtviYHXKwjzFU1LpeB288xvR2YMFGN5f4vf8xmVbKqnCSbq",
  "key1": "xL7Y6oqQpfbfaKH4FgWzyaTSyo4rxS9jrsSwAKZyeQkNabPjpw1AeR1fmLCay8uc9wpMzZ73QKXkstwoHCbTyWY",
  "key2": "5PzcWvYza33EdSP5wFea8zXbTWRYubWJRUwu1qtdJEXuU1JeuCqMx34ip5jyXxdDRKe9iL67ipmewMwWAmFGYCTJ",
  "key3": "2iz9R6Fj7YsoLB27VmUMUEMtcwY82MLzvrnsLCGjoTTnyc7xgZnQanyMmV9pTz2ysKThLDStbyPt6mvHCFS29J42",
  "key4": "2miV5CcfjfXgecqePjyHk67zEJLmZFqERXjv9YfyuC36nk4HEe1SsvLmuFrvvq9spwqAC8DVKfaKhbNxWrBM5uFS",
  "key5": "3QLfijyvy7LP4ckC7tvVbpd7BYoLp853FviHuH9a2GTse2V7H812Hisr23F1Ms3GkVT2AjqmwhjYbsGdUqe5CBm1",
  "key6": "38GCuY6GuF4sDCuW4xXVYpJcuuZhqurL1grSo4iQ7k43hUPsG8XtBwUxpXuyzgFxcSMWooeFT8kAjyHqywV4NWYk",
  "key7": "23gahJznJ78QfQYfzqXvwUKNBe5ytunFcQTiYDbifepZ6xYYJz7a7D7BRyaUaYZkWqSDPRSyKcrxrwHyMF1pBTKx",
  "key8": "67TA6Q8bx4Ts4D5Air9RecbLmq73ZiRLjmzncGDBDwsQJtdGiiNCnd4siJ1zdSuDjaxHhSS5VBBKovR3nzzReuvH",
  "key9": "SySsCiJbRJmQyTh4Yy4tDmsEggfaYPZXTzqaFJjSp4gJmTBeKqcQMzW7B67UbjiNVUkcJxUfRfvT4BPpZVMGjSW",
  "key10": "7vauN6E3Xf4wxXR9CCSFCmHyoDQJLV8nUuFvA38hqQdzJf8G9FafMBABwjrumXE1MMEeDhnfoCQJyAnjCtCHwrM",
  "key11": "2eSoLG7k7ZtrN9eDcyTgh4iM16rR11XWK8r6sVhAWo8mSAHwp6sKMgonVbzdMbfqEJWqYs9PmiP7UueqGqJHU6aG",
  "key12": "5hiLpkKNeV3G9M9kj9QNymEfcHaPoJfyWPBRfkZBpRXiLn1ZfCTkLCufJYiYoNC2M3WHmYSipfmhr7p45Nj4T1hC",
  "key13": "41rA2qEa1Zkg9eutbLQdUgDHb9aXWFrWXdGRUai3UmjgKLZ5kmiVqFZFVk8EWvz9Cn2WtWvPyRf8CSaKTC14SaSp",
  "key14": "6Uxf5cfbdfW3QFBYcZLQQYaiLwt9opFrZSCHJyCBvkrKwrW7Tfygg4WYQCXLMgJwp1BA3EX6dxn1Pz743w2z4BJ",
  "key15": "4u5TDoahX4eeVtPS7M97vCUzB6uPizSy18b8g8whJ38brYNjPFsdqYoY8tPax6WpDWaTaRCQd5qegtfuy3fHsqc6",
  "key16": "2Lbg2vbpcU4yd8HsQadaevVexGZzNogTUW3cNo63ck2RYxEzzSsJXukKMGF7TmJW4kuUsUoTPw2yNKW4yBRNgSh1",
  "key17": "4vVjxSQ1BjQSQtWNYfmwD2B4e2M3ESHQpKZuEbppbDocRaGfXd4LhDfpQyna8dGhPwuzzQsCgFuPwZk59UWbTqLH",
  "key18": "5kg4BVztag49jmvwhpQNsdCz9puuWsMTus8rtzSKY5CTM57BgorLGEBkEa8iCaaUaYkCSSLStUr2zy6T8Wa5q5sN",
  "key19": "4G7Bq2CnWXEJjZDb5ubw7EmrJpT4wBLqPeMprefYo5E3B2vQiV4ksPqssDDiYqicS6GB9bZBYSoRU4XarftkdBLd",
  "key20": "4PwTECPodMdn9u79baaCvWBCp5QJFELFSgixaK2X8qf25C3MeYmoyMkSiFupcKr6USz4FR7yRc8c9Y2XrVjkyykR",
  "key21": "4c25v9jnWAjWXmNA5Ft45R9wf6btimCqPB9HLhZQXMuQoKXNexG4vxZbUsJNupe16uRWM1JJZ8X7HYhvDUi8rovb",
  "key22": "5S34ZPLPPCD8s7Bnmx3WHFb6s9XGjPTPfYbrKXcUV9uyGBroG96JKwVWhXVTyxJxbs1wzCSqNEwpBE6UjMTSyj51",
  "key23": "2r7juvNmrjgT8Nqo8TrRuePZs6iMhZLGDVymap9MGVKbfaiwJs22Uzvexo99TRyTV2fYuUFBWiQFop26pMekB5AP",
  "key24": "3YGxTqJpmXHAb59YkzYrGYkjUyABA4nBrZTUusq7JhG7EMGa3cRK6DJq2kMZSxd5AB2yCRSmiRF9jVcDuaCLQDwP",
  "key25": "5S5JFNmaeVW433YsfLuZYGiSf6ReibDbEGZh9TjvhgSuyqCSpsa4Gn7vZ4AVnShDmTcAmyUCPWPwfZPtiMHjeVhD",
  "key26": "3hqTwV2akN32aH2nSqbmCDAPGUuZCZ4KsgUWKcaP8h24yCCiGf3nAMep88JMdUyYTDda27uaZQjdv96rqDtSwxqd",
  "key27": "2BhcS1X2yzqMAXmGTdq9sBnFEWD96V5XK3wmzge7jGjj2m7H2Yw7cP2upP5w7UdR1fe1Q9BJ1a8dNvdquzzeuiip",
  "key28": "5crqgejMh5bvp8eLRDzvjHhSmzfXbiYkvUxujR73bvixS78ViNeM6dck8ys1QqhQEddVUmtcH9Rbyaq7WZXPWVcr",
  "key29": "4a5PLDoma8wrzjU4fpQqvDKjvpREFhb8Gsk2uNhcwdvSC3zmRZmF6pH3o4sa2NwwipjyS8RKZ5oierVbmHb4x2Fh",
  "key30": "5MupLtJQ5d24QKtmwHt9knn3UsRzY1EV546jQfsAzgivQPwd8dCjF3uGdCNPLoCfjxL1xLYGmbt6xUtTS4psdBiN",
  "key31": "58JLRENjKcrMt5ta9m9FqiHq8oMmCkSAJS4LSyZWBJXRyCXDdqBzEpUREKeBoQkTdjgpJC8j7oRjBUqhxmWuHNDL",
  "key32": "58SRTkgMvv6hs3uVZ3iisyeYAYbAuMsVwneFuRDt9VBii6SPZFkxFyW6DqupvVcgsyWrTnCSPm99KzeLYe14V8ap",
  "key33": "2UV3UcRqWfNsuCLXhtWbXHsFc3sea6Yd3urpXK4MMLvAB4F6E8NRNYwpa1fz5mnpfb5HpCq4kvUxFBWhRzXgy8sQ",
  "key34": "4mYRGFjhWLu91t64gL1JcG38xqCiE7u2FT2grSYtmjQz8zb5EW55YZBm8tPZpvsJDcfsiwCgUBbtdm6Ku9pW8rxo",
  "key35": "2CjoFBtHvnqPW1mMEa1yJNwFnXujPErBgjpGTDzPaVUFbHijH8vq3gWHqZDDdkLvWYLPn6H3dvwHdNxhFGv8LrjA",
  "key36": "3FmyABtc1PEXcVu3LLr1EJerVwP1a1rJo9UxQcdvP7ZQLHkckr2cTms9bCwJzeEuAFh2E8tE3MjK2gBpN2kz3KVo",
  "key37": "624vzvz2n387j3UdsT3RmY8g4VDQtiNNcQdZdxV9rUtsQh2NSvWrY9VsZimkh4mHg7jkkBKD2v2vcYrSA74s3414",
  "key38": "3aDTTvtpevDPGyAjHQJPwHWRV6CMVuArGpBHHevmJ568xpa6C8QNERBjCV8bVqJvvhfLP4J7sKwy251GJxnjDxnh",
  "key39": "3GsCAWxjFtqmiwyh3WpCUXni4kFs5SnazLabKSwApAo8yA83Wbp8ApoSgbjFRrLQvYG8sRXDNyV9ZF8tYYNNWYNL",
  "key40": "66pMSEosjKQy745fRihshYyBHjwBnymS4R956v3K5vdX9Rk99fmpCRaAbZASYLaPftUkcTESnbiv3d8SEyAhNUUJ",
  "key41": "46mG6uXzuxRGJvEpHHUKHNn4QfLKS9DsaWZ1w8a2ormUohbtEGkRiRR47gLjFPAJFp5sTeipMn6Fbg4QV1YwMu9X",
  "key42": "5VYLoZnYKR1wNa6ypN1coPPkN1ztAbzb8wjwVkkk9u745VZTcv2B1g1X4XayiGRCwckgS6rcu6V9Q42gEttFd7Mh",
  "key43": "2YLN99Sw9VxwsQwWWCG5AgdEjknxUmJpauEymLQPbV3TEPK1CKoqqxWoYCW5ZtpgooX8MUuMfua6wbpfFz1ZRAyZ",
  "key44": "yADVLR1ncpUenZHeFgKS4aypbo9cMVbkJh8u6kPgZ8zczyo96sZPc9MsnLzgES5rUx5heL5xshq21gnJYpbbkbj",
  "key45": "5dAK5rTsmh19qVZVBpVYSBb5tDPjbKuKZJpgveQUmExGaTJp4mjXHiNnyXDabUJbkmuRvHoFC6obdMtrmXAuGvFa"
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
