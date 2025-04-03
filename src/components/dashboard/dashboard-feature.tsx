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
    "5CN8JvajEuo7d45uv9BAKdnJjAMD2BZN3SV5X4FRwWVsVyEtQu8W3BtU1ZWHNAZHzVPJbLvJcwgVS2atCWUA8LfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mwLRqWmrYMGm7TYJLXxCR4N1uxRn3LmXJ8Zsb4QHopBnDLqoKTHUjwWCJrujeCDdanYzjwbfnC8BpWFrd6FMKuY",
  "key1": "HK1rXUSb1NQMZpRq7afBFTAbMzzorUQtrJSniWqiuXwrnytcmiVEqPrHi93pQRcbp2trSv6CUKqMTeSJMEc7nVL",
  "key2": "LgWV2JoFzyD54BziLGYaKSRvPWZLVnc83qwuG9z8moaFXZmVXm1uZLcBxnJB1MUGcdTcGE9mFSS6NQB1czAZt5j",
  "key3": "3dYNaJPSNjatWu2kU84GZRsXuPBKsehsvNJHJZoVVsmdtoPp6dNhcWvb1zZ8LNRW9u6mLCfFqWf8EUFBso5vZwrR",
  "key4": "5oPTA7zSkT7nUSxZu4ATLhTzRWmiQDpKME3RgVTP5fqNxejJ8heVTJajpXNfunhth56oHGBT4DKdbiCLMpS88xyC",
  "key5": "4Jz9SUKX5ZcLFzhv7xcp9DukHWhPTcHrnhXarA38sZ3gEW6ViFrNNooCnLgXG6RgXs3LuCGEsHbSLACo1KKvUzz2",
  "key6": "3xN8TikN7Cue9P8CfNdybJTgPYdPMGwvNfKf71iDqv2okz7yruqyzTX4J2dzZvrthC9N9dFr9Fm1ZppCgsNr5eCr",
  "key7": "64oEjqeRPePY8qvyScxjYgYcjcUj6RJXQohdtWWHnPRjxqr8zdRXddwwEMNjLEnSH6V6b3LXsozqSuTiGZL47BNM",
  "key8": "qZKi6RLWtHAsVhmY4r1jKSmFJBGZmuxR98zQQmjFU9qB6tiwHG2z5Bh2zzQ2goRQSyibnMa7mAcWmEujjUrF9vd",
  "key9": "2TxpsuSUJavqiZ1z9bD1dyZXmqgBwbs2Zpe7ogQ1jrSDNduwmQrYQ6kTebUpvEr5vomRESKqBzBRtyDrQrXTfG26",
  "key10": "4mXcSgCdhWudjxKSXu3uvBdXr9ZbqsXMAajr3tbS3Vpk7QGRbBgW1RSRFXWsRaypFDZQLbZd1SqKw8ZhCBZwMbjd",
  "key11": "3ETqnnGWQth11npxF5EGqVMeKoefbyARSXGLxYMJkTh5vK7CushHFPTfvBmkVwhp5Cr2XhujZ53wJvfR67uAZVm5",
  "key12": "4GSF5V8XvDwBDy64QHCCDAvJ2r8JGnDhddzF5i28iur15fyNNDHy52oEHaZsSqEAmVZKf2hEQuebKgKjJi2NsY3b",
  "key13": "5y9ythQjDnZCRPTjGzHrxdKWgDZQNH5tE5xqZHL25Bfwd2gnRB4cBac8zfdZoJHinn2mWqY1UFe1XcSehmmgdNHy",
  "key14": "mtqJ9vgQXRr8JkpKyGEdoFUgo4WF2jmq78MqWv4NrMqUs3SzPN8yoYSwSN1Qpo1bo7N5qHQX1fzsnR53v41T5Ts",
  "key15": "3QQFZZWiNPKY9qrwC6tx8prLnaoTQsWfgnvWM6S7wWKwi7FcutP9PNXxxE1X6kkFS47jm4su226fQHvy6iXrSbVW",
  "key16": "5o5rk59r2Lma7h37eqyVeJpexQuwEsQ4zxRDceNzP4AeeXhQXkwbBTU42X3Yr38pv6bCtGm79ARHYRed2MjRiYre",
  "key17": "57pScBknnXH2LCv2Y6VrBBEg1WKXG437B9dsHJKw5bcuRQkgXsEzgoAMya7s1jNFL3pP1qY1FCeCw7S4G474yiwS",
  "key18": "2qMyrDf4paWs5ymJRDtKP33HrbfrGa2CPkCkpcK26GGXoWGcarGT66FrRiU5mqF8RiRKAsf9VmHh4UeVxBs5jL7i",
  "key19": "HdWrF3NconmezNksWLBxKo5vFd5LjaQabwkBxG7yVdZ5fbKDs5qdGqWZ43AtwJQHJfL1JKUNDnQUgzNBhQ5sMpZ",
  "key20": "2JQ6RpnpcFXrDCjmBeQorGyEVU2L64UuKPSuhRpWiPAnrYfqxSTVbHoNYcWu3TxEUwnjqbAHGghpMXW5ZdJstMgH",
  "key21": "3GdZ8Fq3b74CFNLknMusW1SX8v7de3rTNuyqud7fsF88LDrZCrdw6JZutP9w52pUR53Wxb9mYnBDU1Su5C1RyyYk",
  "key22": "jRCSJY2xvmsTGSyjn9jDXA7pbiXJJ12x7oNr5KJYFaDo76kjzPf3RwUgh13kvixoYjVoaGUF3g6zxszTEhtiyRv",
  "key23": "CnicCw4UYeUQLPJ2A5Y5a4ejinVBxCD3ZsVENg4rhEAE2stXCEWqYkcm68bvD79FXHg13rdxu5retuKVdBfwFeY",
  "key24": "8VW4GphE1G9euerEJa7bj9G2yXWeZ2YP158CoQqmn7xrBk19wSBFKVKAhNPSvsjKVD4vxbm4DYRSr1j8kCsgGp4",
  "key25": "2rNddKrg4r6UhbTTqqcCvWp8ofMxS9A6ii3rNABS7JZ4qDSrLoLWZ4DP5UdTr5RPd14B6jz8zsRvjb5zvmNMPzfF",
  "key26": "3oCDFVNkh3NhZ8yswm3ko515rS3DJtaiFPtNeHie7Zk46PLT2nVgH4DQu5A8y57DGgSKPw3VDF7ZBKVEdpLSrNow",
  "key27": "2tpEzwuZqbVisLRYVSh2ue86CnoQzYw4PwFe45v8Fes644jcjUu14HnsgvzH5j4SQnFHJuZb5MUdoYjSBBxh3dvQ",
  "key28": "4neBDP97LpPFZ4Fms8MVodf9tg2zJbEneazFJtUjuAVMFa7DZygWiE6EGvS3ez6LXyhiusZLPt82pMJp1ou9LTGu",
  "key29": "2VKMUmQWQzuSHvJhTkstP6GXer86N9mr4XiXqK1mx4So4EjV7QddJku2MnAjZjKqTcMCgzYHi93VqeP9Ak8KZ73D",
  "key30": "3RV4ZtGVW6rvJgD1dnqiRU8N3UHrpFQYWsnJwCkW9CTk2w3t59RXcZQDbTtiv8rM8uUJL9oTXFhTmXmAqvwiDJgY",
  "key31": "611sH48hXVexY7vEQzHCK8qV5eKq4XaUXJth1TcDm81Sf4rJqmPcKshJaf54p2kT938ihrvADBYHoa8u9ef1kRC3",
  "key32": "31koX25YW5Ftdshezs1LUtJmvPWcVeKAeYVxQ9ByPpZerQXYpSPDYUH2ZcCu5Ct1uu3yBzkHNXU1GJEtzcTtHRQP",
  "key33": "1fAeQTbo1uUGoQNvYsUvqFKA6Ujk7CQP8hZ9KHqr7qZuAtHdmCByBfYa42RD8KYePkdcwBnLbtNsPnZiNFur6pk",
  "key34": "4KmxJD1uCjk22P1K34CmKzifMNgFy4sC8N6qWFqfoLU7XQ6zKD78561k5DAz49dfyJFwydyeyMdqCvjYKCiV3SdF",
  "key35": "4aVEVYRMKzpxtfyYmDWhGEPVeSw4RVGEs6CohQWXVpce5E3yX3Wfr5rKBghh94WYs7AqjkFvSrL7iUto55BHFuKC",
  "key36": "3L5UwMNuEq7KWoWJjyMyUNcTzVZfPbseh4ZLYFs2GLzQMBjKZ6RuJtszYUNob9jsvgyidEpZmxgwK1EBWRq4stXW",
  "key37": "26G2KmSnaCRJga153AN1EUiRizWx5St7SCevdLyQCqV4J2sVMaLyyGnQNwszLKfLB9qqZyQSZQWAZ9SGzJ968948",
  "key38": "2Sb8E9sRb6AKe1yBDGHk1qM7aaQrKBT2QLe541cDS9wRMjjAJQ5XPSxcdkfqn6AsaMfq6FTWGatmZJWB9UVHpX7H"
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
