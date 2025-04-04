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
    "2WQPmBLgL1FiyfBUc3EXDzChWRvnfbgxERBhBb6cdYumj16G2VQGkUxD8zm19wwrmFMXcaBuXPzLrHh8xydwVcPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uUTEPoqhVRMYtFXh9ayxKEi19YYAfMpqYkYUL8pPduvwsdDtKYF5mc3qjb4GmqhHYCxSUcDVGcyn6h4Y7ow12qu",
  "key1": "3WjYGL58MFV7UCdGm9TJxBxU6oJE34S4cHbN2xpcpsMMLZUYEGTSLMS8aET9t9C8JpcLU6kZFPiYXZLgk58F9Ps6",
  "key2": "52kEBSXB8sHVaqsAK9wVinZEZShy7u51UHLLMvkc1husJxAkkFWvHS4kixaJTPuYwn9BaV9zSnApdUnUCoF6TqfH",
  "key3": "5tjC6xS4ZwMKkV8hr6r74y7KTevSXHRy8FnH7Xx442JAT4Lqd3HfmRV12YvEBx9VdCs4mJgFRsodZxjBXn5SfV38",
  "key4": "5j4nsnjW29ZjfAL33W7fmMy2XPjSDFyPN9q3PsztkqXedfUCFaTjeu7jLBSzs7E6ou9CvBJRFmnz6Xtdud7X7oYv",
  "key5": "44XF32vD51PP78JawQkmeB1jrh6NWynu6MhGVihdSDD1yH7DeWS3M45N26FhNKGabKR4A9SepSTNSq4Q8tFyeLML",
  "key6": "4CPtkvSw6jPnzW5p9fXkYP3kJYCK9qbF8ZAHVkJNG7jDgXbQqvGDdgN8rh2rnLdVjJJmQQUT8CeCXV4dCQ6KqNS6",
  "key7": "5orGCYX5HJ9gcjpHFmymqURyq5wPRzFMuJHZpKojRc5XuqeAU8MMFicGYrr2dj1Kky1jzgL6fith1rBK8fLQAi2G",
  "key8": "3qhv9zVNCXv8KLgugQ3BDHoMB6M41mHvthfDnoctTW1NsnoceV3y9q5zWdbXwV2NQo4pmJWxD9YwFu9PaWcE2PPR",
  "key9": "3kYA2k1yVwyziXjwtxuB4BkUrTJ732VmkTUrDf69J684kkeAWhwQwyCAQRsGYgQjeQee69w9SEp4XrJmxGzBQ7G6",
  "key10": "4iqK7CdLAMNFUAMXxBi6UkhNa4cnsGwAWp8wXkwCS1uUqVodG97wJ1Y6XD9cM977M5ZDsaWXFG7W5GX4ymwatrNQ",
  "key11": "2MZoViES3jajnT6eLKPXBi7ur42QavYM3EoFcTeBVYp14ESzXnMeDj8gs3quw6R4B4w17DRxmsudeb4vqMJ1qKTk",
  "key12": "dbAwVT1k7W34SCxDrAYS7oTtVNpi7ucqzamcy2hyG4XE7VubgZU2oXwqYsc4SwGtG6N23aWhk18oSKG2nstcy7r",
  "key13": "3VGhaqGLfW8fsqGhcUDHKdw9poyrV4NSCUV1Ezprc3k5C8aoAa9yfc8n8QzA9Na4y5U2azrKC6sZbbmrZ7NysTMS",
  "key14": "2V29yhEsse82gd7CPM5u4FTxA3L8UK8BkDYdMSqhtYGiBdEPtwS6HDEmkyhdXz4Rykbw37hiKADMnZtLq2NrccEd",
  "key15": "rjMLYVt2zE1XLSMUH3hfG7txTPbvKK2zgrJVgtpeCnLLWmQ2MucNGwCpvxABMv7M7J68YJ5xjEnquS2QfXsRumy",
  "key16": "3bRumwkfvm1ge74TqvyUWNoFZYEaThkmkxzqSXdT45Hqf3xc25HkN3o88wbkYukKVocxdhm7SwZR6CuD9RVb6LAw",
  "key17": "57XGXToDMAENTYvFYZP2EHLZxsXKb3w9jsP1nFJWPyeN1dgdwHSo8XVG5oe1TmR8yTxiFdZ6bfka5DHwBpZjoWsC",
  "key18": "5WETQZYeG3P91jt1oK6iMNUpaNNg23xx4SXXiwMYaJgRYwxyRwXc9xY8mXEb4CdastnVn4AHPn2jUxLtpX2K39ME",
  "key19": "2vM4REa8mctrS8JBJCj6vBrjwQ3Xt9ngHetuVpWrbyN2TY7p4aRiRFoHyArFGJmwWW2NSQjdGmm8SmAAHtZh16FX",
  "key20": "45dmfZEFjzDVA4Q7c8SqhMMqiQsAxQJgPpQu17BHpCzoMrzhky2cyWB6b1mULsbEWw6uJZ2Jp9UWbM3uxJ1ZjHmP",
  "key21": "2HmqkmCf88Y4DH6fFCCCjy9avVjDWWP62NV1m9YMHhERShL93659Fepyha2Q7ox3b3q1uGVAvAma4nZLHodeyWd9",
  "key22": "4ymKABnKDEuH9HE1ukXYyCEsmmRYEwAjw1cY6j4NAg6RHWem52D3WtjKdJqfoaUDUx1aJ4nmL8VBdshH5tjafkFb",
  "key23": "5mJTTTJUytDQpr7A6bTXWWM6o5f4JnWYKhbxMFdMwt34sxSh1aaT7CzE2jbHQmy8MgUVfGd74nHSa83GBmvQzTdP",
  "key24": "2BS7jvy7ktmkYcpwWB9Hc9PcQ2zaHpPW47iyzLVjLyrYrG26zX6FEc2MNvESj8tsZUckdRVMTYLG3LohewtyGYsE",
  "key25": "4ZofN4SVVQhDt3VtP2bErXtfzYHAP5MeC7RhP9HPdyQprgM96LRVtKpxuTdi6xFAPuEp633izkamcfy899SMp4Hv",
  "key26": "5dJq8LThwpMCG3PCUohstW2991FLy5CH2ahTetjqnonCzJXAWtqhVUQmsLpzycmi5KLETydjX8Z7mhPzVvHwrXUM",
  "key27": "3HYcD21Tw5hYxY5ReLWwS6FpAJUsh5xy7bcvzRMDasu48mTDjxkUKpgfKxxPKzDcUiP4uGX2J33hDfn8MVmgvVm1",
  "key28": "pN4UBixRs93txxVTJSTQS1WcUxUTdBjPdvAmPCy7spLA5DQGa6f9bH1ZzaSQLQJa9byvbTnat3WkLJ32scjqjiU",
  "key29": "4j155ufpA9QEM6su8cpz2eHzr38K129nCraTvRkYVk4N8svfMYDPLbXqV3zQWKy1gPmpRjgmfsUacHY1RcexHf2r",
  "key30": "23sxL8c3pbaDeHMLqPiMPYLuYCgVUH3N7TD2TDKs43QfZSikTCJew4Mt5S1RtBxiqHJVyEeanhLjGUChZxE4XMzZ",
  "key31": "2GjgP7XamPej4PrxKj9AfHD4tfVXFK5gbqvH5z7Q9bkemS3gYHJUAT9vkjjGV2wx8PMM6mpPP79HCTYJtfKLvBo4",
  "key32": "AM8RNEr1sJ2ECezU1yex31CHhWN9MyJd1bWq6VafqMaaw391vmCQWzvSTJBd6KMETnoydcfYSoE1m86QifU78sE",
  "key33": "FcBWGfNuye9xiDNaVVVY4QtpkwY5HN5wj6hBMA69zxPMmxzG6pDB8d41DboZ18CRyb6ZSXU488T1kcEW9Zkm839",
  "key34": "3W4BwQ7mtff5KPTsQVREomJi5bBMAcziNecD2PnZaibrkENnR9vkRudiACKDJBzT6QfyW8EwAvzgt47y8T9rzJQG",
  "key35": "666PgzVT2U7Eb3pVdqexiPpkjbdbWzvKsYddHm5SyQfYNpU7UfiLFYqJiaLQYisrbzLAenTyacJSibWgv9WDMQrw",
  "key36": "nz1ABd1LzMxCJa7JFvUJSXyP1LQzaF7x1aqzuxNnMPwCJEWNXnP7o8pyKkNyprXcKuKwMyfM7PKxBFchdcioAKf",
  "key37": "2AYQkzTZ2vsRzLsV7Qio6jQJNiGmm5CwRyXNabkxznDdzXtr9zNUY5ZdFELHiUWsYUSHUgsLpYVKpuCJGbcNUJiG",
  "key38": "5bF8AD7vLmsJhXfj4K5fXpb9v13bhPAqf2uymbQTyuXTfnXCtc7z4t4U3EKiHJpdX5RRXgUgSQDx3HR274HesbwH",
  "key39": "A2pTPppNv7VUhfMfxNpy2sDZ66fHkiwa93UwsCWbECjydMDKMadsffRrTymXMSUNwiknm49m4cCf4N8uckyCr7q",
  "key40": "N3gB2UuN4jMzA8V3Z37m4mBh8dMJUgRk8FPvoN2XxyXq8EFex2B2rbZhVb9JYxzRUnwhteu6ssNJbayWkm3hTcQ",
  "key41": "4DYoCAvCDzghBWtXSn8zofGRyLmfenVpD85G8uHWzvntevU64oAwMej8uerhrMoYAuR2gYgqomxii5qtAiNWq2NX",
  "key42": "4AqTfnT4yMhKnRApokYV4gVY3LBQWM9X1VrtcmbrZZzfDvAoPPeJBQctqtgQoZfn9gez9Y5zDueZ7PpnVH9VSqyt",
  "key43": "2jad8MuJxTHAEyQpmT2mtRWKvXg4HHFqEZ8fi6xxNNrc1YNw7xLJfheKuk8JqGZyP2EgwnnA2jfAAYtGsRuQCEM3",
  "key44": "qeLT6mDeEdCptLWBNLZJb4782H1xUjaRstevXg6VjWBtGayHuhYSEE3WUopkrryRoCR45g82Q2y2PN7X2R1FT6b",
  "key45": "bmQ4joMrodN3sMRkeD6NZFUXaaReuGaCrhzgd7BRtBzwsBCdDPjYb2u7SdEhK4BMTP7w7VzobUF959YkWpF4YRo"
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
