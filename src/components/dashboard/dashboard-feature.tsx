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
    "2Pn7uyfeWpCBc3EojBGVmjQybG6peGTud5JKxXytYcSUBuaVYYeTjmvXFUVhagFbiFMwyn9SBQ7fjoerJriYyGfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DXWT2vXUR1a7L1KzFR3st1mieHbUN7JKH4uaW414kEFMxXBNbZtWtJ6iJ858PV2ugUGoYz8cyCcdK2Z58RGRJet",
  "key1": "4KSjFVkDWjgyKAxRRTLQ9XLn1LFTUmaYmUAbLuC1QaHUbryDWvtbQLWPu4yhkjJDfknUbk8EPAH12KPqKF2qxisQ",
  "key2": "47piooxUDyRsY25HQHiSF9kL9Y5Cdq8CEvDLSQaWstL7kSxX56V7LfUsFqbwyVksti5MPqJhAwk9KYg2ptzMNun9",
  "key3": "4wvt7poexgfVYVSF9548QK5LKVEaGReJ769P9npcAYsnBQS1TuxmPsj7qVht45UwKVQLYJPabLQqzkTjeqDzhoaG",
  "key4": "56KNsb3rdANx6GLNwcMFkKo4q31AS42x5bWSLvX3cSmiHPBGhoezmckeZ4qA11xfY9sBNENcNjEfidcsL3JvF4km",
  "key5": "4Fd85mRWHRpSdt2uBdMjot9DSfg2RW4VmU7B6TM1pSpstt46TNe53op1gUe4LkcgKgTkmEvdiMHWRM3T5Pta6pHQ",
  "key6": "5RMYUiAvjxQDzufH4WNSmG7JtPH5MR3La53ofSdqfY1FWuNZwS29oM3NzS7Fi8rqrVXf9e9T6nVDhxNxVND8RAG9",
  "key7": "2ze3xZgiyKvDJqNHhVh5vHW2PfeUxwziEqwR4S86eG7zada3uWbeUamjiHRHgKrxS2ZgHiLfVLCzwc5xhoTrDRLU",
  "key8": "4VZeJTzXnHHcoKHrUjdvL8VBFLfJ1ZKhBX2NiUs7kcjDCAnrksqJfmbcMotSknoUUzzFXCZhzadc5D1EXkAirDq3",
  "key9": "3uHLaeK8MgffoDMoywBwmKqt7krS3kiF1Jyb677ySdMAXv5RH3wqXm1kqhdmgREXVN46XE1USMK3C6tTyocLkG3o",
  "key10": "677n1sUTd4poncdUMgoPWa2LgABc5xDdyjwfpYwVLBCjzS7ghuWbziYo2xRTMFUaY4xecKBRF3qnYdxFJdpfKztj",
  "key11": "4wV2wfaPMCNZyE2GDN8XYjpQ9PNpWq44n9iS7EWai5Maq2tz12jpx7vMRSJ2DjsN7mw9VyGkpd6of1tZrvYLHmhi",
  "key12": "3ghfPxsoKHqHRT5guhgWZXRDFtGbLEb8myZBHSWUoUiAAMJsvpju4NRwUVoD8sJm3aQjFTrf9bxbXT795EJe7xJP",
  "key13": "4cQNkZPzEfbnVGUgJnSbjtyQZkLXckAEyinppnKt3V4iYrbey8dT5yWHbBpzHdjz4dvk1sYMipWpaZuZiw7S1wUS",
  "key14": "3DPXvZgsSm8nThwqY6szvN5YYgZVkx49tadjLTvzKCCg3kHkZp2fM6AfBWCASFWHx5ZXoEQogrhKYvmQSgXjrMbW",
  "key15": "24h4qdNE42a7EEqrhvWWNDVyZQ7yer13vyVM9co7QiRHeU5tGJC1A3MggVqRpmEwsQs1j2PYbpL95J9w9TwZkGxM",
  "key16": "3AFVdhPkTtvY4mjH3tj95iDA2uKjjrQMctFQf8soMJVAwkeG7AZ3E63J5ep8hCEZwXvrnde77qdJMSj1yNokNf4X",
  "key17": "2sbMZTE377Pwuf3SVMtEayQxAkXhTW5cQUcUZQFkQijswtYUTTU7ERLA2HNPAT1bEWZEZLPjcWWzmUCVoHX6EWQU",
  "key18": "q5SPMHgrJwCExqntzxLDybnxM9yrqFg1BS8m1dYBTi76sKJu47fmgGeKGnum1DQYvxG4fqdKokw9UBnwnfAupn1",
  "key19": "5DgQSfYrLnYneDucGLsjYV4GAqFosqqqWmcYSqW3CL6TLEKQNmawZSTPzTpydNc4c5L8SnByhQW2F4iFkjp4C5yr",
  "key20": "wadpEJB2M84KwUyHuvwMQnT7Tga5LUqhjiYaAp1bqkpyqxktRyrZZx76mzM1ijtdnLiw7U7mKAS1hHTdUsD4dxR",
  "key21": "j8GrckpLbhXNgEPyDVx3k7UxXq3eXt9CxxWW9SFbhR5hDhWk5m5GCbmaggjLBYUeVUyxzFoWnG8WC33XrGVQjPB",
  "key22": "5V3NZXwQCyoVpHkH3kaVushqPy4GxMwU9L1Rq2uXgMfR55ZhyKNZs9yxh28gBG4169BpzdHuegHCPDb9A5emaNrV",
  "key23": "daXuymjtxVo3gGJGT325WPs96u6SCNzJFyys3Dn78D6iKuDpAMqKNqEMj6ExoufcRr4HnGPWJCq24PwZT4L4nSo",
  "key24": "2wGHZRGCA2FMiUediDL7Bds3DHeDW9gzyfVAU92T6VtVkiuvRD5WbYMryJ72N6X2TtkwEKuBSkvb9Nu6Ve8HWfWd",
  "key25": "4SnhPDmSo6PZLiUcdH9yXrqX6t7K324AWkuxbPKnWDLNjcwEFQLQSznUwZL4Y5aoKxmKN6WzdJviQGuUh96Lam7E",
  "key26": "42XnwczEcVmgeKk4jjthsEhdraF5iKxcFTCnosp6HMYANqo7FmJi6EKRhFb6BikPgHRnDrVfFKE1t1sGUzsNyog3",
  "key27": "4aL4nrfSocnp8qfnsf3CVEU6JrmZHTmXYRfSBL2jsxKcT6ctTPTHUVSsjsfEs72PEU99kmzUYBJZcqDhmgMHQWYZ",
  "key28": "vnkAWCUCB8v3EpFmAzF49H67TM4VRAhgpUwjKATeX3bGtro3Fw6egKrXDj7vy7NhTR9hKZ8N1VRNQikDsGL7Zda",
  "key29": "z8EBDjFFakGLkBfrNuJroFwQ8Y31FCTxsVynCzvpwzWrT6hxVLVPtJUX5pCWo4kMrLPPRJrgH1urzJdcnAV5Qma",
  "key30": "2quoNrWwQLWAQzvsSMaQzuFqSk9tMQfzBVc69steJfbSoSGJqTTXMvBizjDdnj9X8V6wu72XWePmQbzDnBT8qQQr",
  "key31": "2WW1scojSyfu3Cp6mXbTgEhxqRMkVU4VB6mckQrCpcLp5dMksU4tgTJ8JftB2DK7qkVivT72FLoLA5w5xh7vZdk",
  "key32": "5TEH2G26AitffW7nQtnKdWC1KZub3DcAx7NJA76ByLEeMZVuefFoqPZk8LRZ2fGWp4Zhdbk85tUdmQ59uy4TT2Xe",
  "key33": "seB8TQT1QcoFj8afTmmSeSHXTQzes26z9SxR8EtBC9dfK5L9jQX9vA5Pif6MhQtA6y3U1uW4DdD79H1Bq6enRtV",
  "key34": "3nKr2CSfoDUpaMtGmjQsrcZ3iADpfg8Y9ZYYMPjNBsdrKUjDHMMudYtvhxbMD6hwtbA98MbqgWqUtdusWz9h8HMY",
  "key35": "2GmtakMp7fF51WtjNP3pq1DhkUvkKFGL19dgMKYyAoNWf66HtpJCHsG9UnSjrJ69WmKxzZt7r2VcAmNCF5HiRHLu",
  "key36": "kGK8K179VWWeof6ejBmBVLvmxfGaX1sQkYkgS5VEeK2RoxHcmrFHJr7Y9QMLGqCqcUyXgUAA6QTJ5CEbBHfTtA4",
  "key37": "3h6UKj2bSe6HTXTHJsAehRMhZL3Yg6m43nnNGzwJ16SHt581qW5hKENyR5w6fTTb49s6Xt1raS264A7v9Ry9YygM",
  "key38": "oGrB1hPYJuXunTxmeqA6dch9TZY7HxtZeQraFURTsS2dStwvbfbWu5NYjazqxTM7udAhKc5rMHHWJmdCfHEDioT",
  "key39": "35pkDGb6X11ngWYHce7c345SLi8wJrH2AJkrAJt3cQqDvKKnXEpXB9o7ND8nqHKGHhE8gkHQS8pBXP1o98z1vsFp",
  "key40": "LSUNyhVoKQ2uPSD8W7tXGt15WMPUZCyAvT28tkC1uNygmnAP4bWM5QjE4cw5uUjMwhCkJecQgX7CbE5xUDMsw8q",
  "key41": "3PBBEroRG1TcjppMpNSXFatHUuL4oYmCfk45xojUUrWSwghEyzWNkxZLhNSE8LspbKoRE2qnwEHU9UaPjh6XaWT1",
  "key42": "27cqyS9TjmvTPxsd6oo3Y4wxoKUZUbvbBSVN65tCp2eM82WdbiHEM8ayTHAt8hR2qdqFbYSKZd6iHu59vv3HSB2x"
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
