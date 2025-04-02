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
    "ywxdEUTVRYU9NEiqQSMWW8JhEG3naSzvj3aNhzSZ7sCezJtEKwUkAthgoDhMAEwbZR2riTbMaPr9ziJtXN1PhRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zZRYWnB7wZaTbic4CmrwMHwV2DH17sPjaqYZdMGiYJhvyRHhF7zhoown6acedEVJ9msytL3H1j8g2LbsGy4tD7P",
  "key1": "2jujZqKSsNVaaPz65Xg5xhSH9SRxwSepGWADo6jT5cJqYgyALZUnQJMDJpaFG6Atgw6cc5yY5sf9ax3MR5TfHwZR",
  "key2": "5syXDzUMRBw9vRxo6WDDaMAZG19osgWBRPaww7hodE3JFd62GPweo9VnypZ9BdJqP85z5nHPrP5FdgVXkJEdhr3v",
  "key3": "5pV5kocZvrCahRxnBRwmR9xcXJ5h97ifiKzHUUT7hMofCbiCnsaxNQkDvbK3YHaEnpmrFce2UA6S3Fyj5iM9FUXn",
  "key4": "5DUUDaWNWLW5rrqEh7qjEAP9WJVfEcmKfwfymmm1B9BX1qEKzGDKhYQwqxarmPHTY8XGUXd8UcEe8m9Y4ksezK8G",
  "key5": "5wPMFtZ85zrbtAdNgLzjTxL7vVY2BNWWrwxZbsXGudbENfBYHJ7KWgybkrKf1nicJ8kCm7FpWFZfdRtQkugpmBmo",
  "key6": "5aRKGGGAh89w5mkDjxfNPXU51C4xgRFrbgs1LirfEX5BDcYuJJwRcgJETfTquQ6MKZnpRxsQM9iUBY5PPaHkKscb",
  "key7": "3eydcT1hXBksNhUnh9Qig9cD8mpfg4tyf2igPJJFbwFoAEhv8acNg9TZcVqNpwVtQFAym3qXCfNkAHMvf7mpszQd",
  "key8": "2gp7UeEzEzRm196Zg6WYwSPdk3tcenqZnB1QytQBsctsjatfTNTWA7GLBQHQyiVoZpCtwESQBCPh5aDvMy5xU5Wp",
  "key9": "3fQBYz6iGHLLXba7XMcEg5XAQ1Vqxgoz2iE2xoS8cyEadB4f3defZT516QWNc1X2o64pqgHgvJ7ZgEwqXRg48ZJC",
  "key10": "5u9QeN8p3LHjR5NqXSYTJaMcXTeH77iUYVM1wEyWD6dCCDb6n3xLi8nu9gf3ipscBgjBMGAxhx82gkQpM42j76Kx",
  "key11": "2emmNUKmmjy4GPr41YXBzU9abn5PS35qTwdQL3tPBArNj6vkBKxvL9k3QdfC7mvGref27vsyapCfWSEqSFLtENPq",
  "key12": "5uP8qaSMzjSu4i4oJseneH39Aeu6LQCNEwCF2A7WbQP4baCaoDown3GJU59UU5vumUd2oUqNACBMqZ8qyJRWSMAX",
  "key13": "3BGuQDhPtihfGGhiPu1spzNWuiMhxDbQkUxtdFqDAuQdnxD1FqXSRV86VDJ3gdiKEdxYcXeh9nwc1vG7f2xbxwMF",
  "key14": "5wr4NTycAVnDGkXDJ1gVeDu53GL5DEUku5og256PcuZvyW3oCsAMzpzaSHsatPwYTLokaoFKpa75iGHmnKGmbmiL",
  "key15": "34S7qPoBgJYtwrNkp5TDyhdauHSbDXM1TMoPGHVJrgABjpkRahhwbdQsJgogjdMatAdiM48RMvbUD9VVieS6PrTp",
  "key16": "kU4BpPwymjqHb7q5zGCmNg4PKSsJP6wjT3mZ3okkavXZnThkVQafe4GvtvyU4dgH7QsyfYa9XGivoB2E4PiUCHK",
  "key17": "5v4Pm5dCMupz6pf26x6CUJxAEf42NCcwC7qxQfrZmJsx1tys6DvcFsjvujvdP1Jsb9etx4SAhSpH9RUrAoBFVr9Y",
  "key18": "kqG14BNStdZBmKE4FJpgpptRuUjBfnXjomsfnGBPsWF4iq14FKqkjFYzmcDVa1eRokoa9JWm39sTyNcapiQ4awL",
  "key19": "52kxCgAf2RpMcz4k8otbUUbM5HwzrnkC2niVqQiQe2gzQVwSSaWfB6tq1RBpXMeQYRCVDHerDv536tYg6XqKXN8R",
  "key20": "2AnJ2vLM8JR9GAiMipijL6VbjKYDi4gCANW31CnBzHanks1LvevoYJ6v83AcQ4m1UPSP8zTeZWuZe6Wr1YBNoNLK",
  "key21": "63U7Bn43VFHSKT4rMpM8yKvvicymWsnZQAQhzMWRafZV85Wi5McxrrJMnoP6x6snqwecjwcS6iLofV7gyxyofv7G",
  "key22": "2nf9h6Mnt4z8sRoTG8sbdVHANfhpzi2KNNVba8AgnsvFHo1BZgDV2DuZpdJFq6fpkTqS252TQhv9w1uaEjcoZepu",
  "key23": "3xEn6BKp2xjcE17myviUQLPNSxeo4tCAqBNDLcWnsy9BDVaR19bPpEb4ZG2QeUDwyyQivUBGRdntJcAbras7NLvb",
  "key24": "2yb2HMY3msCFVY5FRYkqapHCcypfSU1jMBToX1ftptPvzGa58i37rg757wzUqw4YvJF4FL64tY5cPaeY7DvR46NW",
  "key25": "4c48sRqER2vKJxnLE7xWGSwTTGXBeTbxkbJcggJ4TCaqqzx8s2uvoVf73fdRtTBza6Wdf2kqhayC6knCCgRG6aCK",
  "key26": "VQZBcUg2PkQV6ZcBmoURjFQ5hvYcXxWrPySkzu8FfbYUAXmW43EjaKf18trJp5RURnxgbZ8KmkpE4SEp1f1TwZZ",
  "key27": "22T7NDULgArWT8SB5bUyCJvtMLtQi6W3Goc9noVs2vzLU9w74JjXVEFhENTUG8ndtN9z4k91dHN4YhZr5dP7XnSn",
  "key28": "3oq9Ri18z65aPHUaPcuN8VTAr9E9z4Fx8hgDgHfLQUkqYh3Qy4kbaiHxB5kxmv684JcdikaJpeRCiwq2hwpFfkX5",
  "key29": "vouYcVAtJyqQgcJZdiAL1KcX1Rt2fDASDZuiS7npxFn1oy1uyzLeJTXTf7nwTfNt4vEgsDDHMB7qk9K3NKGThw6",
  "key30": "3NM1K2dBQzxG8qLP77C5DinEdU6jiKMQfvETP97mrbAjqL8qvh7MUx1NWj7yAonnzHwG2jxKxk2QMtyJq3pXkR75",
  "key31": "3V96tD9xkut8CgJSUwsNCfyQyZaWtF1fen69Q7DhXGrGQamAFSaLve7KHN4JRJDmUkZfyGXFHNxZaKzqDMLkSzM6",
  "key32": "4vKdGpodyhA1wmqkKL1Wk8UvntBVtkYMZD1rMimASD7h3yRjT9WfsxxvkeQxVxL8EScncUnZDjyuGPnPk1pVrqfm",
  "key33": "2trfJVMaEnyXiXVwpBqQizXKgMG7FQmbYDX6ez8WuRz3prFQEGYJFGX7zcpwNMY313yVT8ePfXx2zE4icaDEUCSW",
  "key34": "2ZwjNZb1afNvNZRCebrXFsj4D4jcVoh3yGDkDC6nnvVombyJQwC1RHP4jJTR1NbZgbXWic7qwPqY2Z8VtNZuYnJx",
  "key35": "5JeZiCNYR9iLZYjYesqqPHvUcFaTwoX958gU5PYMmubDvBbrNgjS33QHaW8YskAm7RL37gjbffdPQ5UeDyQoqfLa",
  "key36": "596isVQ9ndXyLZupAEHq3WBsdxrKxAfWQrhsJ6j6e5gUDdzd8VJ9vMu9YCj3E2tqEqp2wDGCr3jBtvxL7bJA1Hxd",
  "key37": "2zbgQKxZHcWjQRd8AttKJnaWcLwjbnoBaGXvDr7zNhPfkACNuSgszAjGPNydGNVVHAKiQ2sxU798QLLV6qotHADN",
  "key38": "3bFSaXwPGfigGNtL8p5DZs46GCZnBTAzqAnrXVW9wMJLUcGq4WrdPnTs6qLkpSe1vMpizjQzZ7cL2Dtn4rBffANT",
  "key39": "4BPZEwpWqKKWiquUUMZjmiidJLWuN74TrCh3sDLpFCSRWai8rxXQPW6FLNdFnDduCyHDDjA2pBXJPr6pac3iekRo",
  "key40": "36XSXwY1zeDqhvTUj4fW2S6jExfYmcWy6Eq9hNzgLmqXtWSYXTvZnxYHXgWQQjYKjMQWSpF7CKnWnhWCdNarzZBV",
  "key41": "5SUjx1MX6VZnKKP8BdDk9BFtJBnZq4BkaAP3K7p4qPtzvcp7DpxQU3rhB3HdE5CrxYGw24Jw4QQibUupj8esPAC4",
  "key42": "45XubmjzLoNAQGAMjro3Mb8Hh6XbsA6v1W51QuCbjx2qR5gbdKrfEgn2Myv6AFzpTPcGoHFADxvrLdXPFFhwDvon",
  "key43": "TRssmRXMFtmsAZ8bZvswz2rC1TgHsQGtoHxCVSmtueB49tt6EtVaQtDC1jmi7mwz5rrWecBTeAvzZvGhN6HikSM",
  "key44": "5iKjdfhdMbPweREL55XwUf4TSnDSvzevUTJdPPTReALGLctx9j4RWSwhebAeFjqQrxE53VBQaQuy6mWXJCJBiuyf",
  "key45": "4w1HQXMDPYDzgz8wtwWBZn2Uc6dPmCRo9QnnFVT3Uzy5hjQcnmXsp68Ech41zZzQoztpgqy8tWakfjKc5F9i4ggv"
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
