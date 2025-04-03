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
    "3VtRWNJqM77rsyvzNUYgSM62Z8qk7fNMc91FUDvrJMsp1dYmoJzukaiU9YmBqcqtaX1q55TTasuSSWwUkX4egpo4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oa3ds45vXDHkqwWcNcDt3MeEWjn6RjtzA7pDSx7HXFyTFT3TkyEpDWyEmadV8KXuFWAwGey2j2WRXASu1Qyb244",
  "key1": "2cof5tkMVveK7pBoJYVF6WGhNYzZmsw6ataea8tKx44CuYS9JxyYSkLR2bYpTRgrb1EkMoZYHTK82rdaN6iLvg9j",
  "key2": "3nyex53KsSSYkHXsNJYN8UfQG9cGz1cwzYLVFGys6usYDKY65z7T844bfpByQnkznYqxYnt7sSS4Kj8No1yha8Gy",
  "key3": "5cUM4duvwTN8nfa5iTFNSY8jeQpU4oFGCkmXT7YBGt4GsZxuex3iu5EL84AZAFngWkmoE5PCns4jfQpXQdGdzZ8g",
  "key4": "4ishF1GNsap3P22cALXonubeJyNWM7ajeVM5mSTXaJeheN6dUwt5H9BZvcNn3P1o1UWHBK6pqWdC2LZHPnn7EpGh",
  "key5": "5kqcibLPLNvdsrvFQpxWzXaSVHRHvis4XK4J4CrdUd8VR1MfkTYUYr2dv91KM9HyH25Jy6oT5wuxVqwQX7PRXSjN",
  "key6": "3ufez1Ac6XiYskmRRaxX44QLL8VJVEiNTmpJduoAv1avShbZavSEqxWMnrdUqCEG6U4rusTSyKp2Ksp2bv2SfCrf",
  "key7": "4sZdH8NPZMBbt8WpzJF8y947nCrn1vRmDnuBbBCAvKDQXkzGPXt8Dh1MpFWEjAFraGpCn7t1jh3wmbpWq8ZkJ4Zw",
  "key8": "26xmyDWgorYDSyFGjsuG4hqhZVSYvzWjsvVNsKsRwasa8co8aokBrjatc1Nr8Q7ETey2ZXWFSJUkvJpTeasSrrFU",
  "key9": "5JBF275nobNzMNVFaHdkwri8dakMqRPooSwqLftEjGjDrjjeiEEHwqUaMjxa3i1kJCMzpUjHx5R7oEMAZtqWQ2u8",
  "key10": "5zB6HKMhRbipVT4vS7zEXLC6C4oVDtJhdi3m3uCQ3Bu4pPvC6Dn84d15uWFgxrQZ4c8iierUqUrtbdJw1r5DGdio",
  "key11": "4qaX8jX27fVEwC5kXaj7eq8VYqBcbJTH9RFy6cwRTxnHNK1HsGnBb6RaSuPyGmL8cJfqx9ireWzLaNBWfwBm18bw",
  "key12": "VKzhDHi8mzwzrhtQSmRdC1tFKFtnN5SeyR4YXs1VDgSeMx36c86fTcoQ5XYruBkHj6nfKEiKo7wE8qWNU9mJVKA",
  "key13": "3mFSvtEwpCjFNDo1zmpHh5SpemGWxUJbhDVMRgRqy4cQ9ormAGk995kf521Avb3k3o4Nsh4Az6FdQVhpWS1wL4Em",
  "key14": "4rSD5hxYHJLH9sQZfRL7YHmXBP998JD9NWAku63jdpoZpNzc7csrEP1eb2paPmN1qHp8hysGnHcoGqf59jpULQbC",
  "key15": "59XHpMRiZrk9NyCp8jUqhmdrvDLZZ5Tj6iRPhGdSyqKwRypgFUaqhxXbxMh6PTS7SBpiKY1Fn58Jv7PF6towHBGM",
  "key16": "67m3n3jMUnEnpJdqdj4154q3pJ2UZCKazVvqrTd8KV4VaUWMsyJrM7DLsAfKZZiyPkMKhqiVn1dPLtKsnpUXphnk",
  "key17": "4sjCDFpezFDPjKSo1mA7hrFD5FkGGhqq4ME3cVZZvJ2UKNKQB3Je7YFVjwRvzjdcrVtMkhZk2XWaRqUhmrsSmenh",
  "key18": "5QVWVhL2zrhrRQB5hY84BVwGLhdQCxv3PKJFsPx9cmkLttGaKgib31PnDMs1qLuB6QncsqXHcHiQbvS5jcdeKXyV",
  "key19": "2gKv2qZNKUiPLmEMLJYHSiAnHCx9Cq39hz7df9uDffJpU1okFrJXKQpb4hcsczseiha5Gf8b5SMJ7S8yJXyTNfNh",
  "key20": "3PkPvHW8vXZFNwQxckcU5K2xgKZhp9X2T7Vo15PWbDAWSA26gcoBLQDcSwpozBHHxzvengZxaq8QQcC9B25S8jod",
  "key21": "3VJChhXetRjxAehwnxXJGtKS2ftXHyBUPsivoZLhMXWpva6qs4tiCJSaa9d6nseG2Zd2N4CnLisEndxWY9W72gBY",
  "key22": "3dcdHrgAAFf9ziaZBW5PXRvPUhR38UnFjQiHMvi8YEEr2rYnxfdhQSsXBkoBPL5gcaL8jti4VjGzeDxv2jED345X",
  "key23": "31pGwPc2PyxW62s92gtVPp7eSauJAkgUjXFF1UCExxMGJ6SZBGyF1HB7jzTKN6BqbXkUZYJMDvYNgPDjRA2UVqWb",
  "key24": "acUW246N3F4x36e56BJxJXSgmAHXWWmiEBAm7Fc1NMgC6dPzfm3Hoh4ju1ExkNxNiFoPQEzCwB6sBGuDoAJRopS",
  "key25": "4sawq4rn577FgLrwqg8Edmdt2xETzH5mXLwESTWvzR76qzskzgYZq6kzyczarzqvPcr8rtBbMF5b6C8R7Mbv5n2z",
  "key26": "mHdnbwy4mSkUCLks4FAp8At5y9M865pxNvuaXaGdimBmdhTu6oeaFA24BFcmKkQPv8tcW8DvZfALm4zGYqCJLg4",
  "key27": "4hJ7kJLim17VujtZuGVzVNmmNpbxPHbgS7TVm2cDH4w9ycUzr3QmiTJTat9NzHHirfQPGab1ZPuabfgb2GDPpkYS",
  "key28": "3AbDB45uoAvuqn3MW91qf73urzruWCFcBRUc1LjXDZ5MFC1Dmm2VQLVZYujFA84MbnuFiiuD2JBMrybtbRtZtSGc",
  "key29": "3oSastj6L6AcDhnXdikqoZhe58KFMMN7hhWjZk57RwfVtZbNgShRqXzyi3LTjXW949JJgo7Wa5gQa26M6eMqdoCY",
  "key30": "2xXYXnU742gvm3qoG4kyS4brppC7kKEyBQsAPJR7UYoDPwAD25vBK9uHSrVgQSPAgxZb3FascTyMXKtV2BUe3nNR",
  "key31": "26RjbHz98aAqdJXcAMEjoP8RCdxrWu86Qe664txY4m6U28t2L7xxyPY1YKwEGEWmmzwWNPL9qTJLXHoMPk5WXYfS",
  "key32": "VTERabp96KxBvdPLDfM69hFqFJ6MhM9jZENz2dTjZi9pEYBp6ydmmQiz59wjMnkjn8CGJdWrrPQbGyJ9UENsD4C",
  "key33": "38Ex89FD28YSGs1msZxNrxaPyUejEQYRR43Tg3XL9eUi6sbtW1KSdKMuMY28rr6NtE6E2vnSQEfEsGgc1KSjbJih",
  "key34": "xjjuBK74SzEjM9ogbjDGmVNeRsSxF5RNFuybBySEjWds4E5rYbJNgPobuany7zYP1HHu2Tsiu15hYVk1wa4Xvqr",
  "key35": "2L6USaUXQ45ti9AdEwRpb9NtMnY1gYvSbUA8D5E6EnzC6eyWMzaeKyQzaMtvahEtoAaz9VaCC7UbiJYe3Y54NBUj",
  "key36": "s4jDZcRAzhoFzQ8N6rECWCERY2tu1E9z6t63M9WdmsD7hhp7FA4w64Jh4Ue2ABhoccXsiQUjFRM2H3DMmRN1jbZ",
  "key37": "cF974whqsTzq1uEHpkiffhYJiV71wyxAL14Y1sJCmNZ1fTNNqaYtQVNmx9XbjMhijMqzghB7qDdjfGA8DsUW1AB",
  "key38": "3F3LkZysoSu7c4djSbVu3C9dkT993UTTBGncwCguacRHmSfjwtFmqNiBwNzQ4rMGcMdMjs4oRKCVrWfkYg2GaUcL",
  "key39": "2UB6TGWZrt2X6BvAbEVr5mTvd3FjgYjZtNhmF3YwFNzmbRJZBKNzdN1xMvzRcmqsu6CDTaf2JNtuk9dNn7ShcR3g"
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
