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
    "5hPYLJmpmdR2qtyEwsqqBkTPuMekhQ8y67kBuzFPL5U7EHXz75o4LTCnuVDPK7jnq4xxmJckaeX53XZiyDiHf97z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MK88bo13YeUne4oytr58i2WRvg9WSZruKWHXbhkQ46hKdBoRojov2ZEGNAPSgGzx9LBjFasmBNBbTXGD1FLW5AF",
  "key1": "5XHbZA7GkNNo34mbEtmEbXWmbA9bwKtPQddPuSvj68AiFcpQtF7Gu5b6FAurNRcR89JhRX1aDdCXtfcBnmqwHof5",
  "key2": "4xxmfwB6JddJ5QmT6hxJY389xKBjzs8Q33qH566Vi1WqCbvWnvZXXFyQLVCiAAzAQLezRaT7X5YLEi5vyTNCtZH9",
  "key3": "eC47eYBvKm9wWjm3qKjhGneTQBfaESpBuHYHhtsCHLMXkBCRZtDrLfbD1YgKnJ5L7XCc5qhMoKKuDepaFX9d7pp",
  "key4": "57vztmkqx21dWfSBq3aV6v5XtwmEsNMhxNgmoXxAa1YSAcB28JoJvXhQ3WBsaxafXc6Aft7ceahxs6pW4URMuow",
  "key5": "2E1wPUwKt7bMNndUL9sPG7aWGPKm2MEVC5fh64AgLDhvWnXcvzXTUDpDkggKv8smzKdx8oaQbUh1KB1b9rvXe8LT",
  "key6": "2ZSGoPiwbpbfeuGWdTNEVKQrg9ygbdMd9YfePpn8jq7cnrXj9u7ZEf5NthDvdnT8gE7QJJXYVxf6JaVhNvtQpTZu",
  "key7": "2iCyY5TYuJTY16nUvQXztzxjQZ8rQNw8z7kLNBCcyJZvyajE14Fx8d6rD5cf8XTU2Ed9kCiwCwtakLgQke5EM1z1",
  "key8": "4iVhamasHedF3puRwj2GXA9Mmhyxpqio2tjCo5o5LQCtPA8Jp4CxKRpeZWMENN5jS46mqAzh8QUMnEvkTJXHNKuH",
  "key9": "6725k8L4VNc26Uy6GbPPFsytT4KFcHaHzGMY8DY8we2LWFkF4Cf2tD2YiTko8Cn8Awq8DuTABrBskpMDS297zvn2",
  "key10": "4qqh6ShJptzUiatHejVKSXzjxMpMYPEuMCr9bigwgSwJa1A3VkDL3RauU9f8Kw4bYRBRx7ZvKZTiNDV5YLKs9TYn",
  "key11": "5Df98SBXP6jJXNiPSdVgCcQwm7j59d2JwVGeDpkKL4o4tjWcN4ZTqxBYSxqDxnZ2r8UcUSVjU4QA7ENjrcGTfmSG",
  "key12": "5A1fLPH1fwpcph9H4bz5GB683CRpTqMhBTvwxWaiuE3X1TswVG5RhoYpo91Qqpme4vgxoWbjX5vLzwuZwX4srzLN",
  "key13": "12Ly2t7LtZQ5YkTKytWnvN7BQKYaEaHLYRi6anbfXkSRRBkGSVyc6XosrdfpMdAFkuNa9SjQZyXrSvEXwZHw1QW",
  "key14": "5Joh8pUYSk68NgT6PQRWgp1Ar7rsJnypcM25w9UvHXcjD2zXYh8gP3ARNTGZRFRUeQi6hbEc7ZHFkVTs65Hhau5q",
  "key15": "23WCPZTSgVRosAWyi1ybp47gBX3Myvf53i85VB9W4yTwZeTusYqY4Z3bGHZ3HPD8wixUsVQgkAm3PX3Dah87E4ZM",
  "key16": "3WsEiCNXbQVqX94bzKfPcLD1xpuqFbfeVYtotdLa9BMCs6UKBNydNiT4zfAGvZQqcLcFDYo2Y1So3ZvFYjB5Bdun",
  "key17": "5sr6GbuxS8nw1fcpzq7vUUMcfaqronx1HeBmoGJD5JC3aPVh31VtiixqZsN4WtvWpVL1VJ5uShK1fRwqU4QYLm8D",
  "key18": "2WgL6sbyRPoZd535UwVrxiZZ68TWWBB9mjL7zV2CCugKZPrre4YSwPW534mvBXJD5VxVszdrxDWZf9JjyKqQGwZd",
  "key19": "3zuyXzBP5csNwzyt7RVckVixk4z27ZACzS4ncWX8KyYoCvxqciPwCahE4jznUWbkAiBKD5eVsA4mqLxmvce8ueEF",
  "key20": "zXjWCSNfjSR3Z76qMTMewDqoNirfF7MHw6Q6fwY5FQ9apSgfhC5oYm7HPoYCqvQmWRTWri1NTRzQ4kFgY6npGdy",
  "key21": "cP4un8ciSAX5Pb27Vzyw9MaP4Lq5dDy5SXqNooQbotAKPmdoqeE4zbUqKrN8MQpiHkxmar9XVBvrbotWYuouvNa",
  "key22": "3qYuqawjNKMfjoNVFuDReHGKNWiFugaT3u7HiT2x9KRdS59t2EjodtYfrawWMCv1aHKwJWaHEkEfE2ThMnk1AbRi",
  "key23": "41XdPhySHTBkn7G4Bn7vBFMxbLDLmgHnhFHHNvB9PLGqv3SW31oyGGzzqf21mx1Mg2vCnrxVTr9wsq2oxpeoBGm4",
  "key24": "2QL1ZbM7ciPnr43Ek1hbuoz9RAQHbzVNZWsjxEV1nzwWx34JL41Cy66hq7hF3J37nntQ9jqgPtBBTrc9dGCqKbuu",
  "key25": "2UaKyromMmChGEpn5UCYWQxmVmYQPymbSfY7y2cstmiXoDstw82CJnmwpbbeHQYryQ9RY5274AXVTX1Q6yiPzzxm",
  "key26": "V6mcrBiviaxNWnzZgooq6G9YnDXcQudkdevQQhk2zKPipWtEjSKY8CYBMzj2J3gsvFuqa67xEfFDgLiP16XZeqK",
  "key27": "24EG4zJmR1ah6PAE2nNm3vDykqdGQeKruVm8wrdcQjMyS6t9SKWME56HoeU7jCLjLPE2pKS918CRBSPqdJC7huS6",
  "key28": "5T1TaeWpLCndkpVvtzArcuj1zM9vMUDvPZ9f3LgYfgrnnZWXXFJ56BfQYzrzJ78tXLcBku6CAhNRKJjPausHkyNM",
  "key29": "UoEPWgp6WCUfeg31a96db1haCc2uChjVorfGZpzNQMa9yVCvJZNb3DXB1k94oPv8JbAsyUExjgn6dyvamoxvSLa",
  "key30": "3AJ5chfUwyaXqBfCrXDJYY719YuiP2bThtxf8YheKe9VAsWPBjBGehKdqBQ66uAmWKi5JsEKj7WCsjABHfPxnpA7",
  "key31": "2YGM9jHmtMYJ4ojoytQFEMZqvgn23JGhuRyo7CFNLLyqFHUXK4LeDvgeeYjU3FMbvqZLAS74vwH1WShXMdLkWqxi",
  "key32": "2jtAEFpkBRw7R1gpfzumAU9UguSakkjsGyKKSd7nATfz8QJi9rJceus36zLRRwX8ZpGvviho6x9W9ocUUiMmBghk",
  "key33": "3zeg4M1z6aK9eTuD4mFb5ySRPrxJ4Apa58anGmjf3asjjG8mfhgMbpysLDRyRVbE7xZ55F1GjdeEBV8bSj3KckCd",
  "key34": "3fhse5BFH7cngShcFgQXj5PZd9J6baLAWJh8yNjhg8wEZVrtGqcAzs1X7oEeJn4XLJJsD3XVTbs5JVfYfs9wcB9s",
  "key35": "4WuyTiYP3gbrZm4CF8tCdNqeKa2GqpGxbCABaRb19H6A6jdQRZVSYDzbuZyUp5Yjer2ox2fdK36UcPs6Niv4yUPx",
  "key36": "3HQokh9hn5DBxt2U8snVNBhWB9mpr4JKpSpRHr8TsF5XY4xLZVzR7t3WjNcKR78mVerPgnSVQPAEyFbNRR7EVesX",
  "key37": "Aw1Yh396PbVTUahTekiEWt4a36Je9EfRnq2WCNwaYk8fpuPpM4JB9UksqbMPMbomURhSyS2Bz4hz6azyQ8XTtzw",
  "key38": "3yHLJ5kYhhro57MkpPeH2fZDGUBAXt5c6UtPo28bPre5SBEbbAr7x93Kcant4JKxfAbeg49yZCJa52PxfJGYCSUT",
  "key39": "64VyC6vcgEBNw287QSmBvMzzAYsG8AFUJKTYjED4vJPfBZbUU2Qx6XLaT3K71AdSFTHG93eyyPQU6E8YUQj88akL",
  "key40": "3kYRL8azWkhK2rmwe29D6J4Xu5He8CzZJzMDoFUiofLqUzYJx2hAYZ6caGLgWzooGyr34NCr1m61SwEme32rDtRw",
  "key41": "4vzLerRjKBoWvfb9Hcpy3DWi42j3rxTD4GVQcKWjSZg1MYtdzsQcxAPHQLtDCE23nPLspxJn76TPT9wwWF1XSAtC",
  "key42": "4g88X1vum54cceGzE6R63732uPCE6PhRZmixyeNynKz5HJSg37jBE1Bd42bcZuXKjwmvANum28jCiXw79yaCwKvH",
  "key43": "2XJ3KZiWxKgEmH4UrMk1T42af1Tqana332xmVR69NWkH9RQMS4NDjh6VGGxMJppYMbQPYgVNbo5NjwS3SrXZXJQy",
  "key44": "2uRdgUDajFt1i7H3s6KpaAXwq7Arm9nuixT6f5rBwPw3azwjJj5BQJz8kgoj9J5z3Rej2XJe8he9GYnFHzLByeaa",
  "key45": "66n3P25hsKtXYmK9mXPdiVWRYaqaG7cq9h3GaJS7pPxffzp4GZQAVuhQyxw2ARLMHHFHLR1hQJ2RTHG56dhYByy1",
  "key46": "2o6wT1Zyd4dzoyYVdaVUbVf3WzVL1Fhpgbg1s9th5hQpzK97MGp5aX4ohXtnkK2hBGHrhoumW5FymaJegUuYSwzv",
  "key47": "iRVrMUPNrFUjinj4F24oYNMtzDb8iMGn5Nr1jibxoNZu3pD7JV8tYgajr1gi6eGfT5kwMqEvRY4vTqq8ATgjGCp",
  "key48": "2QxPxSQdmWLySjDKqqUCJSHVqzGn38Sn7kAjEGU91HQ4YoDHNE1zXHHQkG5sgG27xpbrJo7TqXwzyCs9fTMxK74u"
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
