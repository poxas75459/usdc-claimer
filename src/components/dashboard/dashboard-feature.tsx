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
    "jwh18BF7yjtUQhbcuYP9BPm9pFcb6Y1R7hbx5Yp7NXLDYqdV6p6gGcb7KQHfM4CW3XPmnKCv4dSkeL5xM8gQPHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KTPYfwXGSMUXhgHL3jggcZXqK6Stu8gsuvKMbvE5itNmhbYEYS9jvHiWPcNH1QBMrEBf7z6LmaL8Z5rMd5bpbv9",
  "key1": "3bxye799yemD7fbgxabTMAsinNnqxFXMQyoFNyXRM1DHDxpD3fwtuUpsw746Uy5JBbEBmm7GEnrVunjDFTJpnp1H",
  "key2": "2JgcPtXkqgP7jQz6uf6LMqBn4qg9EZzvJB1LqGs1tez6Lg6oCpB318sczMJbNhiw1L7b4eyzFd6WgiLa6o7MFFa",
  "key3": "dj8nKGwkPpR4tQ6E5Qbg4gbuQKXrd9kEz9Q7WHsN9SrwKgFmZpHJ8yFueeuSpWEe2j37kGoN8JnhiRQRwz9dP6p",
  "key4": "3uKwbw2xS7KEcYUYkx7Q6q4otjcMxhksY83bsLofJ7HE99N5QRMt3FhaE5N8hh8AGe7iS1UtFAYdL1n1v9gzgBuE",
  "key5": "5g34yZGiw5N94iHgetomdB91Y41gA5FqeD1SiQocjG3NAKqKPTyePrGVCVaZS6b56anHjn2NG2bM6xJeYttVxZjz",
  "key6": "4gMa2JhkHjaRNQXY1g9WGzeLuYeuwocJJSpHcVwxviLvzMb5QWe5Gkv8zt11ZrHeRQ1pxi2vT49x3sXZZxL9PAx5",
  "key7": "55eTKJgkJo2gopb4CLnPSCLYBvmk1QDEzTgAWq9SSS18ze2gfnRsCvcpbZzR4GkxEV8vX3nbvs9vqQTQ1g7DSkPP",
  "key8": "o2vCUM24GXGXpR3SMgjhgEggBAKDujMXDdsqnAYG78mCSe9AsyAJshfEVxUbQTMGEVDJ3ki1jd1c1T54ocVp489",
  "key9": "5LtTSJnepx8ZtAL5foj6E7oF1QHvCq59n1ub52LYmW6ZigYpJ6CE4fu6Bvu7AY2DNbRd7XE7tPt7pDSmyTnnmmLG",
  "key10": "47xpRUYG34Kz1MaPKEtpMmvF1Zv2KuA5GcwfbZNrzYnNREJzNfTitr4yij5xwLgyKnPJU7pzfgUvTSCy6somkaHn",
  "key11": "4K9pKBCuQHosLVWJZx88vSMLDog9cbXL8Hs3sTYvn38jRjxvFQVcRGULrCByewzR38zYgJ77snjXhKaRTYvXpMf8",
  "key12": "61TLmX1nREzNunjYbLmZr9fZEhRAr1VxniypjK7GmWMXc9WivgQWAeJhNaSpKdpKCAK8Z5VVxZaqYNbYeKPC1ZS6",
  "key13": "Hu7Tb5FW4pEw4buRroWcLLxexwFNss6JLYAWwZYKxp2qiWhMHHESisAMo2KN8vAabjoenUjKu8S4uA5dzkYmE9h",
  "key14": "L9VnabqN1cDdZrmjncCA1TH7RA7JmoZwEpEC4WhzzeVVfiv2mkgPMLQLPMxWuWEHuwT2jWFDknjV5hNdLVyLYGT",
  "key15": "5xh5RbKHFLw3xKo3RDTk67Y4eeeiX2CccSu3pNToCBEgkoJDirgnHRibN8YUDuwRswC76DdffV4n8J3WGQE67zYi",
  "key16": "4kyKj1gnSNcx8rR3VyMe2W1fuhkH124n7yXSu5S28vvr9tqg6p1kvpktYjcdy4FduZTDdvMV7EaQQFm6SE7upiCs",
  "key17": "3VHwGiK6CMbSsanS6nfhHwZn2MNmoVaB1tSb2giW76C7KCwzWEXKjTPWcUTZzbrb9PC8GnigcgargwBvqBKSX11Y",
  "key18": "3Qih7ZuQ5xurFcRvTUsf8eg3bViH48wf2R6h29iM8u4BYfMbf7dezM4L17kE1BsgLTkx8NgfaJQ84o7Q342j11QY",
  "key19": "3ZmYexPXVnLgNdx1nLc825Fr19xJ2eEk4ueRRQytyYi7DBD2nUPo3WMYvzEpURPv36HRC1KKPNS1DP9Xk8z7tXeX",
  "key20": "5zhp3N7TmPL49gc4BGWMAp6GKvj786ZemTGnhfCTPK9gkCUvzwMPSX3Ybv6RP1uqHWrpfvAcWqBWNrDHy8ZWyvQt",
  "key21": "3SvPYzczD9Q5bftZmGLFeVJ7sBqj3DkgZyCNStn7TZhWcdvd46BPeWS38d5THuTd6aCPhcZbTc1VmzpxnfPzLAY2",
  "key22": "4BLEHxqWNoEVdGwmb33wu9D8BdFYnuZXgqB5vHkKjhDJGicWrH11GnrjpZTTEdFdnrjNbDizyvjuyX4BgAfaUk5K",
  "key23": "56XtQA2d25sxSKW7fojR4g6nBNzVNs2YzRdHYaMgj3qmREf9nZ6VXRsFaRpDchMtYZ2Dmmh9Wnq5rk4JyY136T2e",
  "key24": "3mHtkvyL4fj7Gy6xLp1QfYMNZ3PjUN3QbiMtYSjHQBr8CshcN4unLfmFJUnNnXv2R8fevxQM8tDy9TXDwk4VXdwy",
  "key25": "5bCx5GxV31zzANRccL8zgjxCawwSCac8xb3PEnSUNvTNwqSUnTCUKKYJapRh2eL9W95H4F5dtWzHUeo5JpM6CHf4",
  "key26": "2Yf7eUWFAkkgaw4iQL5hJfK8Kjy3k2cqLrVUaub39Qh5YmMT7Rmua1idK2U9gaX5Kd8Gumvh4ccBCfA8jm9p1r6f",
  "key27": "4Sk5ZubxA39DzDbuN31JahsEL3qgRZ5rzGKaHsLQ2xtStdBXePVCurVFB3JkTmw6pgntn9pFhgF9TpfuMyPbkjof",
  "key28": "aRgbA88bgaAvZU1kdF9vEibeuiRiPL2sCYBtTeg9NngXnEpQ1Aa9dbixCnAtDWsEQuqjCkW998C9mToqS7SQaJo",
  "key29": "5TjG79uH83tDWf12Emp55rT6GxLJxfh1XWW9ySDiyHrad1X1odaR14jyxQRJu65yspU67AqpaxreizWzc8MPyxnu",
  "key30": "Dnr6xgJkVez7bBYr2mVNU2fiKpWDekw6FtcFrPefg1HpAUxddAkwG3L8q2xcaJsLKfs4JHj8PzgpLY8z9wBp5mB",
  "key31": "5L8JJUnko6n6Tf3CQ21ugWkncYpU9QWkvnuNVgLSYqRGVj26KP6zoCKwDjnw8ztWCx7CVvePg4eHZy8gnmkSjzvS",
  "key32": "5HXRh5zNw9fcM46V94h7yRmA15Qm3kTCsnUAxYt9RGSvaJMVEst3ZpatEhCntnZDz5q61vwXKVWM2mbBnXS1fTHC",
  "key33": "zWQci9hPi9jmwxrX8ZktXifSoMMQggTJEWabb6EENUY2oxgUBgDFj6NrG8KXiBqqowPC7XqLePnZv2z6whhpD9f",
  "key34": "457WPM3B4q2bwgqLSRnJTWFxuRT74aBgz1FuXRGgXLh9NjjgQF7oidpf9tJjNhBbjg29e8D69fxzKpPnGNtkJJx",
  "key35": "4jFxpAY85NNVeaT6NC1Uaog3UbYn8bv7uSXXgUeEgc74bQHNH3q1SgHAbebfxMZ5mafR4oWgX3Mt9qPbKUoNT9ft",
  "key36": "49S3Vg6D9Ds6d54WhTymACDzqbfPKaVrBbuJTGA4CogrcTscGR35CfwkXHwCzTnPnu3p87Qvz1cKGFMrqGzV9Bj8",
  "key37": "4zHXrqQqsDdnobqLq48Bk2WXBTAkgNCsxSTasZ6q4RkHjE5rLwZtCGoohcmmwWbrmNDTYG1F2vDm9Mc12nCuowGQ",
  "key38": "cLCjCaFm7kwz4JDNdvAwMGFKETBWAVr9937kRE8d4jghAJAbANoiEoP5siCFBVyNfnJpJZsHV3pHw7x2L8GwmfP",
  "key39": "4v2jxsToXJdEPs19HFy8EHU8Rc9RPSzCZ3zEY8qMzviBoyFbVAW3qXX3ckTxm1zTKJ2KBhfc31tgiyAV8jGs3hFY",
  "key40": "32YqYK7oS6qbPj8L2LS1ykUNn4enbTh5Mv5ioq3zugoi4X2UeBAT9bc5Cq2nGPWZ9mRV5Vhh4fmwbmL5hszNiWri",
  "key41": "2QmwmcjrZZ3BxHfhG8dAwjusdK7XcEVnmCiBFyYbeR7zb22URMMzXmUnHDgmRXsVRRvRYK45wuZ5LMYSGmJMq7cT",
  "key42": "3ggfbcWiSnu6udef81TnheGvciQ3TWzaTaG4p9t9HPSRjWWKUvnzYnscZ9XF7aJxa9iYXvRQyhV3Q6mLFxCi3YRR",
  "key43": "3cTgojH17ajqb2KjSSxQboUqDbyWh1ZoqhF1QCmPBqqV5Tz2mfWAH1UujD4co1djrSCH89xQdfxG3yhaaJrRMher",
  "key44": "67GnZaJH4VG64ruQdD4ag63EfPXzN3AB3dfGof5NTg9edNSDB5mf7rWFyors6S5PTPW2tUthTHLC8KbrAkJTVyTw",
  "key45": "45HuBc6JLKajLVDqyLU9ZoH3aQhc65Cay6YoCRt6si4jpHpSAoj2tXBxbBApbYJ5uHc6ne8wt4jHVDr9RRPTLz7m"
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
