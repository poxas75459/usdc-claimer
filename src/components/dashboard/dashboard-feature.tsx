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
    "Xm1pbx3e9xVcKCoGjfLfU7VD1n3JGyK8ZGuAzDQ2MYDveVj3HufzY4sGXGgrbdKreGW45L7SEHdwEagZDbhGwLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UG7izNhALViF8ihAYzchT7oWrffuiTFBEj8yFGcVeqFLs2HL1K3aoeZUGgmWamDRBoo2fTkdnRJgC7qAWDAVsmb",
  "key1": "4xgiR89CPMoZgzYTybgPdYFtBUziT9jCq9rxjoQ5syuCFAnX1Htrb5sRwESpEVg9Xc19nK9UUhYm7ru7LFkt3zQy",
  "key2": "5YaPk2q5LRqGEFEsQc3GYQdAgXh2suWZR4G2LSBYMi32EDx6pVSRUr25g8pvYyx4S8RNgH57otFEcEpnRErbEkMf",
  "key3": "5qx9WRQRnthAtktJTGvXyp7g2N1eYMefP4KwPignfu58KgLZWMJBXVWXvEfQ6faPfY9Ecfuf4s2nqFfrqcSVp4Yc",
  "key4": "2KWVyYcTGqfRHpm3t8LwRjS8t96GpWLNo1JFjCN8FGhodG4RoppJrbAbh2zovqKTeEMrZQzeA7EC7WAFFs9ADmqT",
  "key5": "WVAwaryLKnzY89mdUwmEihsfLfzkXn1ikfunieX5LvJzjhf2QHz9r7e4GfpB9pfB1C1KhiRVtuEMzZ8q6LWDFnA",
  "key6": "H59sXbmyoR1jUeYZq237W7KSYmurYHhCUwPmYcEpf9uVVj8phT4grRuy1YhAasJ622yvE7kqBr5bYcQrjMPk6We",
  "key7": "3K5o6i2apksDcqKCjHLjVLw2NJQ3XQHFuRyhaAz66bewup4N4Toy8YKhdkKwJ8ShhogV1xsot5boRxjcwTsMVbyS",
  "key8": "3RXA5LpWWpNjuVeNY9BUapCNUk92nbGJgMmxFtP4nKyd9zM1VXYmPbm8gECUppp6SDmVArT2v3wEMJfPGaW5t4s6",
  "key9": "5HEskrZ1Vz2eTYQTuWtLksuvAqZJsnuXAdL1XTDNDWTBDfDoxb5iBkmFrkGWew5Ex8o6HzmTU2ARHuzejP7iYvyh",
  "key10": "i23gm3AFaWLmg2t6GrMNPqwCpeZNV9iiLJ1cCgzj1sRHsNizvBnRttqtcCwNcBthorNEnRLiY6Hzo7cMWwytc4t",
  "key11": "4NtxmDc6B5Wp963Pzd8mmgW6J2U8RB2QAnxTEgPtEW1gHPNE8xrD6hJVYUJQG39oiEYAx6ZPsqe8B62iGrnLn4aP",
  "key12": "SLw51JeLLigt1LUchXeuZ9jgeVfgJw1t5omn2fiDKbtkWwuF2kKjCMFPpQKRnz563HdBTXoHHs7s44kkXbN5RFy",
  "key13": "xStozKwpWHcfx6rBg1LWEc2XKctLXkrHBdy7jEJkgAfSV296CzkQvEiugXvnGaN2vfqY99b13LeZWZMKo6iRR5v",
  "key14": "3R6w4hJeoUrH5M9A9bxa8bCYfTUKiVPneH92D1BDymdF5H2K9dT6ATuUJNxrhrW9go2zrnZ3GUpanC9UUx48E6j2",
  "key15": "3RqjzVTn3jKJwAhVjuga9iJu7JWd9yiRDLCZeu1DR9PPAqTUz5EWesauVisLXriPRzFo7mLLgjFXTbdz3RKvMQnQ",
  "key16": "nK9xxFw1wKgXAEj669JrD6BDKNmp53KctMsQLoSk9GEYefqabaJrJ9cQWkCQs4jfpPa5Q5xzRicP35QbWaTYSzA",
  "key17": "4HKtKbMcy4chiD67fqozyHNxyQ4vSLHBcL84Fa51ub6Q3t7gbzCk4RipXpW2NmQUuJMh9kyn7TGKrGhzWTCcG7Cr",
  "key18": "2kzPJLp2GSfWNVbMjvt7oun8DHBDsDCALNerkf3YLD3zgVABJdUH3eHxEMXpuYXYCxTKGLQy1w7N4h9KK9AWGrtV",
  "key19": "3XusZvNzSc6QLkvvYhYbrhYr379H8dmPLzo2yaL7MCmJ4WZ14NGHMnwZwpjs5worwCrHKLcgXT9GnrZVCwdKs928",
  "key20": "GxGQUjLwo4K9SCEjEYk5FLzhzDs7pxdqKWavAMbJgsFGGTEqUzHaUH8XKcDXrNWiEB1ie7TsGDEFABgdW5XwSMC",
  "key21": "ffMyCxDXwADSiodiizwyVk2WbNkrYUQX24QmxM9meAS5B5NwbcU6EQVKpaom8s6Uh6iovaod6FuCQFhb67Lyx2x",
  "key22": "RhXpeXp63643DCHBh7tkB9euvosXFcYktgLrs44LCE14Ac9geCe77Vaw9uT23tTZzPWSt4VYTYdzG2tXWRJyRVb",
  "key23": "4Gpgip7xkaX6uHDdCNYj8zBwahJe1QQt7Mx7taDH9LKmB1WPARK45JnXRk61ZCi6umzc3x2gcYr3vyePA7DKNUk2",
  "key24": "2JTJandn7fzZsbH4UQ72CGLXZGXtjAbnW6q81y2A2QyRSMQtMpmJ73ECCRyTU6QutMJexpQhqpKfwdcsCxihXauR",
  "key25": "tQMat23j8MGNPWKvoRY24zMAWrYLdPpteDuuqv2teG2d5e6a4pF9DidW2LVwK19WViwVVZutPL9wefTAiU2yYPn",
  "key26": "4HePxb8sX717VJr5YyKRgbEhKWt2DTXrjxeU7yMNLcxfhUutFR86BfnMR24fLCSoQsd9ZWuoqyXe7hSXuQffgk8G",
  "key27": "2ANaxdqb9GjBxrs3C94vZBgiF9CRPPhEaxSCpNYoHD2RKeJYTTMsWr5SJT5mieZCbnn49i44WVY9JvQZopduLzsi",
  "key28": "nqjM972UV39vFPSKXoMp5AhKEyg3Z4Bi3Yv9gSzYLJUPa1Q4whfjP72gdBqhHpwXQAZ4kUTMMe1c6S2KdhajqMa",
  "key29": "3mRUWE56PuvNqQEB5dEhwfqLqrNoLXrQizoGEbD4d3W57236N4JqqMRcq6h6iw49xDfStKfZTs7YjxYKaPTnjCPt",
  "key30": "3EdxGqCLrumbgXwJfSDBnQag1ykDq4QoQfrTHzp3V9PjWWfJRARVC4Yypqu69ZghkvxNDehCrkM35smzwNb5yRZ9",
  "key31": "5ettPyqNRyMjx9bAwJjGFqTtsrD5znuupAvHhVkDEETfrMmb4eEtKRidonFijxRiXowboYaLTJVyfPxVRuDMQ2zN",
  "key32": "bY1V3zmbZGdA4QNUokhCgWQKtAoaNieh6ewt87Zqa2MTiLRTzdBvNKcL8bVxNiGyFLbiXS1fnQB7a5cvFKkEm3z"
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
