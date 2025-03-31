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
    "2Se7ouY5V1717weEm3sbXf4R17puLtVxRzS5ij8iawcCEDgGx6jdJJR2fiCkE66EuNZw9YT14AjYqNSNSeKw45tU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "421J8iscTqZM4kfg6e6zxgwzuY3mhvqxzmDBcmEYGyxzBMV4dVw7sLrTzFtBQCPHtpSMj2NPojiwxcSUzagGYfHg",
  "key1": "5dNK6Cb7Cf73uzqfKyVDPvQyB17XTZdfxd23HUJaCMLsfnVwzcWCsP2xGE1iadzaP7yDWNGqxZxdaSg9tYZWzbF8",
  "key2": "TtCUA2JBJdpSFuStsVCKcX3zLNsTNyCG1cqAYtUfb9hyiqvx22y9fozgVeP3FyjdWn4nHkGXDccuTtrcH4dUtTJ",
  "key3": "48vFkzYAca1HjWfVCFrsD2jkPwx2Jd44SqJ9JnUdWJCEnyYWA1EYxa2w3G6r7jJdaAfoJLfpNBNP4sndahtJaX47",
  "key4": "4JqvmrUwZyw6Y48iCULfUJnWwjRjAe5WA3wwHe3WoPRL66kQ6gcZjyr3QHiit2PUCBsYbHQPkHWBUZ62rQYjUHRk",
  "key5": "55Ks9rC6zYAW9YKHUJVHQCUWLgRLRsPJr8oTYg64YgwCRa5RiFLTC65f6yWVsd2N72k5f5BNrd7VDiQGa6qCwtY2",
  "key6": "2i7Rf7ckjZkwSU4tdEznZkMT45bvHkAnQtaNHPYvSbuZRSgetAQNWDgGt3U5LjBxQgXMpj4wdHcEJxSoCDomUo7q",
  "key7": "3NpyeB9z5s5Pvgjj8FLeNFHUKZ1cETgjQZ8waZtgenKjev5JLBTqHwfpUQEvENccZ6YqZ1eeQBQ4Za8Q1GdRghvV",
  "key8": "5x6muCwgUSY5mJGAFjmWsrPCu2zXQdsSwBxdvBkeX6sBqTGdB79hz3naiv6z8EcGeeC7Xw5mQbq7n7WRoUECvixf",
  "key9": "4EDVibmr5ekhRQXmUw83ULdCLE9Jg1RLMws2PvKzRxaYkT2m8NsUZHfkKxpf2Z1sPJmNKAyzJ9CWeZrGQjVFjBu7",
  "key10": "4jfBvsLfLcCJ6Q6Kmk5EqGgtvGAMbFgC2p6YK8hNhwGZhybseKQp5sHfYC2nBGTPu7MhGKFDbLm4XATdsod9vdtg",
  "key11": "4XNgyHym2ay7x2Hs8mf3BDDZ5PkNxE4RKfgNeyDjM19qQfbCTnxZFiQThdCjdL9bukVdLU6uC2qGgeqGmPVSv2Ts",
  "key12": "654ppQ9gPNusZp6CvsV2ZXYdL7UdJp7wEPcgPtMLoy9WJLF5o4VkMCLBt9r1YzcZsXgJRsDWK8qANPJEx1urFYEG",
  "key13": "2WPC2tiUXkS5c9rLscipW4DhHLbyyUoeZPVbEBLTf7V3fVFaWCpQn834EsL4TmvHfh2APc65K9kfpDhbJDWAcQmT",
  "key14": "hJAeKFz58rKts6PWNNb2Cxc8PnAXWpP72rnKpoK6VnHTatbcx9HUypateTCotD96UzciPBzP3KdhibGJFzguS8Z",
  "key15": "2Fz4DPkb7rXh3rmmwfwqhPdg4D6CVZPaAmf5KA8ug2PnXNLSHfhYQYGV9fACALkNGh8CAkgJzd3PUX8kF2JCyd6m",
  "key16": "5ADtHsXGQuVKnM9bhkWrMpEFZTsrKWPeKZ49tN6k47QRdng42uF8fWPNVMvfC3FguirjmW45DnWM561UnjxsmvMM",
  "key17": "5AiLWjZxc2iUD5M88K4rE14DCt4nUnJJSYkYULcbXp1FQDbjHJN4a5sE8VmABVnGZr45T35b78P7CsU9Z8E4EdVP",
  "key18": "3oFJHVehYJhC9X7cfauMnKwmRdPYisVaQvvc5kscyRAiV3cMJfn6uP5UJXifmr2nzCBZDugT8zb4nwch87ZNySv6",
  "key19": "3Rtiky1ttxvWsDkcmHNW6tZKQkHUopCXJDR15LQCF9ZfYGKZCAXsmPfqQ9VfKEu12cCekkf24M7SBRge6NK2uAnM",
  "key20": "4PDbeye2XcBMkF68eYGgra7GGSyKEhbSSeHN32CWYJzbEGTA7xfu6MwY8mqZGpU1jcKiCGzLya7gnU8c2L96cG4e",
  "key21": "2juihvqjvepLFmrj8DDezLnRexeswGyC5kjMZe5oGrdNz4gecTbXdKoKbaxFQyD2Rnz6dF1aWeuEAzQZytr8CEK",
  "key22": "2fv7FmzfWfRUp2vzeJGxtYC5yhNyTYqNvhDHieS37vT5cdwE3815BwkTZwpjM6WqX92aLkTq7n2CBAE37S2gNQPs",
  "key23": "5VAyTJg5PCPCsEycS7Fhs8uy5B3Av2GvrTJoVsQA7ZeJXrRdXfxwyzeTVh43iseezT7aY8b3uxh3iQpo6Zmq2G6q",
  "key24": "4uAS91ViUcj2L5JRf7haWmurxM81PhHdUdV87sVxaC71UCkB68qG49HkyF5frF2Ytp2F8au9TJW1j3P5qKDgRBhZ",
  "key25": "5LDZHTtVydNCNpeAdhmyRUTjkUWpB2KBmZJQnneGi1F2h9YrMfhUzcjGAxAkj1D5Xm2uNVtaHABjiUECkCs3zo5W",
  "key26": "2UuoPHuRzrrxDND34ZGRTmauoEZUNdDdsQJpnd9qxry1fCMV6PZtu2EJTe5bmHmRKuquJW3firE68tBAYGtL998b",
  "key27": "2Cp1uiE24MGWZGwv7aieoeExnEvHGCKSawuzTC9R8c89LBvfpSqmCh9uW3fMfz6qHdCcbzrtF6PEZniP6wQ6HGUP",
  "key28": "3ygfXqmTKFWPC8fx3MBR8ze7kW1KiMYoZBCRVaS8SrkCgENPLnFYT8UXMxqd4RsgUD2oTp51eLu9kLQnfJF5hQe9",
  "key29": "4d9auzKPP2gCEDerJFivVWcpviKEeqt4ChJYexeufiht9tmNANfpuQ17PXeWukcfFM2WKL22ZhKSJECJLNyEBb87",
  "key30": "32VChjkGn4DuakgAAsymMykt8dwiS6zMA5DP1An1YMuRkeLWiwN3p9gZnYS4wDSWZHULsrZ8EQc5XNcaJV8DhC9X",
  "key31": "5Zpqdq1WTcKJWu8fuuDqco8T3CUBvq7oE1NnHZFbuVfd4aHD5KzhfYns1ax5qQyFL8ru1abnqfytwPfB5zsdb92S",
  "key32": "5Uur9g999SwSS3oUcGaiFfeDJHQ26Z7khmVtxSJcWMV8XfkAFfKMJB9sCuhJ1tP4eSqGmVQYUqXf7x34J4rQTULD",
  "key33": "4Uwi71s41FKogrPQPsdYZNxdoKsnizXtQ4BagzWjpdQztfALtdtptRw2VUFNxddcNGJ1TAKZ2X4yk3W8JXqswJ3C",
  "key34": "5E6eojRhEfbo5gRbZLs7NfnadhvLbCnkWP6739oWLHPpGx9RG1vAgjRrCxHL9meg5DwKt6k5mn1QzcZkz4zZ917k",
  "key35": "Wsm8fCQqkv5HqdGLNHDB1poPCkV1Gm4Wn7SxWTtspwPsSHosZYecw4eoAnLuNJHvr61m2atWU3uLPLBGQ411A6G",
  "key36": "3j9PvfwnVnM87d7G8CZfduD3q1vKY5KeqifS1AvbgP6SD39FJw5m9XeMjQYjyURFbXtKM8FvE8R1eBfpQ6EeTRCT",
  "key37": "2HNxMdQHviGywmAVt8TPTC2HcebWXRqvSctZYYU6ZY5Gg49VuPRm76BNRqNiJaL2o8akGLKk7HsGBtmhz3AkrPKU",
  "key38": "4pbvbiyXaLcWEUH37LztB1wetiqbLBXtsZKhrKuhMWsH7WsBwSZ2E95hpvWRhCqiqaifJB2D6dAQtUShqyQeSsTV",
  "key39": "4Puz86Udsuktvi5wbDDgh7UvjtRnmuF5BzAfon2Nr3LVFXhcVL2QrYBtFkgKBdJ7MLT9t1hk9Nd2Kt86xhTw5om4",
  "key40": "2EEmvnwojmrQnHTaZAvzPMhtmxtSSxFJSe4xjf6hot7TWv7AvGtoUQrwEdShPGVU9WzmkQNCkLXWWLPfqDzxEojC",
  "key41": "3G6mKSRwy7LEuYkQAsPNLd81cot2BiKBYJevgueTeoFfH9fH2b6TJwqGCMaNBHMgUurtgzJh9pMMka2JEa8BEQnx",
  "key42": "4DykNc41memG9gCoZtZkaevCSvhGL7KDaPSwJgSjzN7XQi84PxxZ1KkutibB1aafyMJiCN91YqjktwmmhF9DnVgd",
  "key43": "3baN4Rufj9E3mqoLXDeYJpzd7uvyac3paaXpV6n1GFsQxcJU2SjJzFx7vJ3rLhpg1Nbc1oyNeKde4txxbihoJ7zu",
  "key44": "NqxW8S2Vyquhb9Wbz3Z9mQ2xVZh99Eu4n3UnrP76zJ2B2nPZqLCJ747pX2xSJpsSD3dPJDdf5yTGWGhZN9kWJ9q",
  "key45": "2kWwyJcNQtynikLWjSMdBYC1aPvx2RLhexzCz5hdPA8haMDmBvXn61HLbDyBhFzX3PF7anZ8SndABYTLrL7e7k66",
  "key46": "4HVDoJgnQatbG8AFcULVWfWFX5z5DJf4NB4RCxVeCpTmh6xohG22x9zZMwvEhjHZnBLoX2aAC3bNU9m235drBQrK"
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
