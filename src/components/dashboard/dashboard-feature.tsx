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
    "2aAxLPgDf3jpZLSuSyVtvXqM1M7wGhmCBhhVfndmD7hZBipYjkCNxn1ym9GyytCQFdP6DCyT4ZS2hbfuZVf67q1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eEWzZu4EvbrubpXG1iKVWWw3wzA8SH7e6EKrjYL6wZ622khWULLGoGh3SXYR4J8vp1xsgRJ4Ygzteh2HB9fDTbo",
  "key1": "5yRYwZJbJU2bgAjG9BtDCwynKoDb74wcUTyRYR44nhjNiHrKu4ha4vgKs5CJ645E31uS36j9XsDGZueeZeH3w8Ns",
  "key2": "3HGjCkwppjfLxMf3NGEkENs5yAxUDZVUwWNa4R51aCq84HgndvYAKRxHWFUraep7HQLv1Nms2CGtvaNWGFJj4f1x",
  "key3": "41FRR1whg91XnyrQtm2ssEV1LVT8iLXBmW7pa1V9vycqJywu7zkcruyu3iCMAhAAS9Et3BQycuCuj4P6q8PKdYvV",
  "key4": "2e3Gyk6WPbGYgz6RZnDwcaF53ZgjfN6HgE9FYG8huaV7TGQBqw7om2akMatc8tCRYhGXk7JyTGHhDt9fJyy7L8pH",
  "key5": "64F7GHqGPzYGVGmzhspUAfNRGSXsLAc2tf8PxM9259VGr8nuPUsjZxSmFJiiHASHrgrBSVwQQWNKJ54iQnkvymsk",
  "key6": "2ipbG3PYYz9sYEY8zrPXvLEpt8WDouU2mNEBpDtVhdffLHyYFfMrLbKqDcoQsvpb2mqradHFUSN8JK6AUugQhigM",
  "key7": "gcfn4HfZnJrq7REpNSMUzFz33nfLwebvLJWDdZv3xM1wMpsECgZeStMvReQ6ebEzGnYCEnivG8DYjnSUHFzqQbj",
  "key8": "3AJSZiuzXHQbQPkkNu4StWt5b8ZAu1zVMEBjUieXGXxKhA5KZ8dqwG2kgb1u9h39pNt1Nv81oUGUiGPEXwMgqEhZ",
  "key9": "2hMXtGfn7ZtkN2NY4YibVH78uFpYCqWCBf5gM18MK5WUxbuLuVN9rUz6YABe15Jdf2eRQgUmFFYPg4uUSt7wLM3a",
  "key10": "2nchDBebg3Y9R3j4GSTdR2jKehchzrUmF78PVh2unPecu72EZnPWpSJ28yoKPYXT3teTg2xnEaWGs4xoYN8UzA5w",
  "key11": "4nNfakKtR4Tb14aB3FRtzsHYHPFfca7GZTHceGhKrm9Q8RQr2jCnbqMBSWTyfciuF23L7dWpqfah6SY9iKGY4j9X",
  "key12": "61fUGC5hojemuLBt4FsiQtJttfs2pirQU2C5T7gqBGbnQm1AMZ1cnzsiZwvgoXRDe3vadRBLkYhQiNGHT3SE3tJt",
  "key13": "4YV1Cnps1h5NhiPmJyyDtwnBkqJxjyxuijhNkh8ocLt4jfMZcrh21yU58XjiAFpaRS1WA6KNo1gvTUyybrFNvRyi",
  "key14": "62fVj5SjHWYYfukZ2gQSScydrN8QpthYFh5vrF9HYrxY4cBRcVmBcV9SmWkV6ttNvq2cLSDby1Xp7pSbxcvceneY",
  "key15": "4fapBa4qQ5H52YKGAdVBQg4HNaowcXPGo31F1ChndAApa7UWZKs2YViQChcquVrnjMfoSfgyXRDaqsBKvm7W9aEL",
  "key16": "4Hxf3mrFYPs6KCMrDdQ3merdYb5LsC7GgcoH4B926XuVvi38KEb3iHFxvTZBebEceaT5vwmmjTmWdZoSDKEPE2qV",
  "key17": "26TFFF3MjRCPCo3AEX6RmF55yeF7jpXMGyb6RAeqqY9uLK3F2Eix5GuJ9Ab5KsgTbbZdRN3KD7X39g5k3ctqfrJ1",
  "key18": "49x1qCjrG7SyM9k5bSvffyCKKuytp3i4TRWCXHnhi8xbF6D6arDzQk4iiiRuFw2P3SQDW48sVYdq7mi26Stkjc9z",
  "key19": "3SfpoozRjY7sqqM1pACk3AiNims4kMAFR8CkUUWBQnii25vcee2fr8k6dYSvE4aTqvmec8xoWemVPMdgumB1wFKq",
  "key20": "5V11pbAtDDkkJz61L1nyGxLmWkrArRYvpoQeArB8ub1K7okRGDcZmTBiPnMy6HNFg4Px6YeS1cKRqsq3LdetDm4T",
  "key21": "43ovqYy3DKNhyDNhLzqh2fq78gj2mbnrzAzQ6RcjtreZcGhXxuwNLrwgr967e9kABSchy3Y2WnjYx1zDbWpAzw7b",
  "key22": "3Hhc3HYiQPsb1sxJ1RL8KfArywp7faguf7gEaNbMPVnY5fQ4n84x58atWTiftsTJ5FRfuquPxmZyi5rocpdSm1FT",
  "key23": "4V1oHZEfK62MNgALTKeoYN7ZE7hdYvnagHGxaL1kMfQHUHNzJfc1BhG1HWjKPuYSxdFusXvBuEqq1YiK1DhhY4RU",
  "key24": "5KAQf3JWLYcvftR8TCGWFBW4AGJVyXB5nhxPx4McmUWEZDK9dB5ewWFWvKBcBWuvCBTF7vRQRTTAobDJfpBhYQoM",
  "key25": "kGLu4VWRJ19yhrNNHtih3yAYiyxkuyPgTDQahBq7wRKNcQtnM1MPkwvWYK1hKuyeaKpwYZBgF7LZq2XZYiXVUYB",
  "key26": "4taKGUrxvSXHkdTKMumFEyCkD2fRAV8iFXH1pD9ib6a3bLzZV2moBKjiCm2SYgZd1KbWQzRnDRXSRjDysocQPQvN",
  "key27": "4gQheCi9QgHYfxcPvXjqVfQf3ER3yvAD5coXBuWCQJ7iXCJNFkVmgTChuuomci5WUFfGL4oaQMbCHViamzzKDG7y",
  "key28": "5m8cqpLtaRPYg1rwCbTUQiGEe7rNwH8ECHWK3MjWHQjnE4W8aQPCnJMCvdUoCx5vtkbL6YPShjUhJehHb4kkk6t1",
  "key29": "5brwaYug7ZPGfdt3kjjDkJyj1CSQ1NzCXGK22LU3mUU34y29gdVjSL7nciCdmemgkoufiVAf3H3YaQgTCx5jCyzy",
  "key30": "3rg2df7f923ys1CqEzV2mXBHT6PWXutesdhNXNMGTJyzBGqURDEup3SqsshnYTEGATeXpFdwBZtNopMbmu6Yeesi",
  "key31": "5WfbcmLNrgr1r66RbKiuLYuzR5GK4dHsVhp3uy8Kur4FSswoQuXHnZEATYWMr7N9HxP9RFwhrUX82pbMkyFEn88c",
  "key32": "2q4LaNMJU3uiSkXaLqSAPUXWJi3PEmTwDdwp2QEFrQL9xb4kLbRgnXZziy1tLzJm8GojoU7UwsPEZLnT7HAKWAm6",
  "key33": "5KrHwuQvgXhqhJtT7ryuw7XnH1y2KLZZwx1V9JDYEa2TWEdL5CBJ6GhjqUQiJyHkhhuP3sYDr38PB4kJXgqjVWLw",
  "key34": "3GBvhPRHtP96BZZvWzcJbobyLU1u5gpT2jCPwemNPL4jidhAH9UtC8zZXuUoJjs3jkYhkhLzMEzUJh9aNLZyvAj5",
  "key35": "2TVbcKG72TKrHawR1uNyicbuNGqGmuk37KrVUekQvUM3BczG5vKenNq4zbWfvpFJwf1TQ3e43RK9Jvxo8egvqsHX",
  "key36": "3Fc3wGtnvphQRRiQEkLa2iuu1wM7WZ9TzVyC9FPXX7wFnxytKCcn4J1ZUgEiHJu2waztz6kjHG24dFdK2DREM6Qm",
  "key37": "JziJUYdawU9X4SEZwpzGjrzTYc4cUJqvRT2ayRzdwZ9JtWyfxz28kJcjKHakbH1K5D765pdGmpeCgCQwVeaEcF8",
  "key38": "xcBxnbKUx4f5kcCSwLgJHR56yBYanxv56SqYF553QkeKGysz8CBgnS4XKQZR5N5XZE5ZnYpw8YfKFn4EM5pzunG",
  "key39": "4y1GCKp65389WhGUMxLrUvKX67YhsYAaipKXAHgwmEU3hV3zX4cg4YCZdhrgsDxF69PTYAZdLoXEEgbxcUgaS2KR",
  "key40": "26FU1o3apSSJosbpE68hz9P5YCmuT66wi76qBeMyReLgUtYYxFK3jkUNdnzza64xCN2fqvzM7bwc2zjUVUpFW888",
  "key41": "5sxZz6MR9Zkz9Gd2LMhpj4rcZsNVC61SEoLyVRdxxpzXJx9HpWVKBza65cnLnr77p1xYmmi8MMgrBfyzULEfVvgQ",
  "key42": "2iZ7RcuP8oRE8nfsGT58BwjD9wXerr6cMTaVeRSygR7YEr5Mn7UtTffN7y2h4jFf3JRbT48CLE7UU1kSKaMvBH7r",
  "key43": "53bpPaHVr8oDxDL5zP5wLpmpqBjw6S7eAdRippMEiEnhq77Znd8Hhsx8U1PNcRP7Mz3b41VeLRLckHCWz7sw5ASj",
  "key44": "YpezzZkvF9TVhgDwB7kitPy4x4cYsExHDFL1x2HgvbH9Jo45t5EXW85HjpsxgFvNeAAzLk97DZ7RRWkzT9jHksp",
  "key45": "4ZLL6VwwmWzwGkvhJQmRuF95GveywPXhtuBQT1rn4pK9FCBmSzpc261ogZApK5GTACNDDoGqbXuZ5nYwbXFtF67A"
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
