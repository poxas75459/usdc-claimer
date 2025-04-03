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
    "4XWjAhYrm8pSGXfQksS4LZgAVu6aKt8CW7kkwtcnSfdyU1e4yvu9u16L4xfeahGmoeVtHecwGHd3Pd7MEeNcY9wi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mXQon53ppMvSLkmVJxW1tjjaRHovcCgBVZrkHxKa6cgtkWh4gxKT2ozxfq2KEmkiN663WcpFUStgE1fCixDHcgQ",
  "key1": "65Zb1zCfDBQKdDWWakd9AYAkYEuVFTr8VqBVpXWA7WEQyqSTie9Vhie7PKxFuFakEVj8j3vvD2seSPy1QXUsnQHG",
  "key2": "AoBGVnqqd1TgAMkio1jgWUAJagmhKaPexLhwUrcmbjW44bvVryf8BZyYWMn1ED1VVG5dHLfLoxhyTSGaHtXik9P",
  "key3": "5S39guQ6CUTNRHdp7zHRajz2wcQoodXQuE7b9E5qiUmgzv46svXvX9vUAoA7eqk8rMb1uJVS6gCJs4inDsdF73QA",
  "key4": "5KS5msCunnrJZkLNzxQJvDU95CG29JiSYY1e365bcxJcyL49gYotyS1RuTfRYtVV1PnEzajpFsWxR6rLi8PfWs7F",
  "key5": "3Lezrh3tbTkTdhmcQV6G58f2DCDRPPZFaW8im5jvA68MMWZKPoiPphr7cTEygTj2YRvhhuWVo57uSFXX2agyy4aL",
  "key6": "5gnCkuDfnWHAK2bYbAyYySxzFEBN2HpviMM6zEHvbEkSzbcPR3C3y2BDn3M96fNKB7DgvnUgQJyAe9DurVpLXVof",
  "key7": "4K9oXnfsBjqCoYBHgyeBxasAjeJyWs2hFhbg9Qnw566cX43XRAYsthjnUKysPzzAfPdvg1FqwdnDGTRk8dMcyghy",
  "key8": "2PmDSBKtJGGKSbNxTukPmtrAh4PhBngKA61KShgh9tK8EjU2zAb1MTWi8cdHmFTqWpx7P141HPzhfBcAsur6fFfV",
  "key9": "4ySzBrFe4TEmsJUaQS1cEQJYPHNP2GGDiZGdePxPQHzkGLEyvVa3SYNi9zpDBK97GaLJhp1LamQgHfJRYrXFVSs4",
  "key10": "kJKezukM6DAsv1jrEyiA22k7WzfcMvFBQ58otaQ1Fay3Z43LTfmTpmGiNyFbLh5Li1tLBTBtXT68NV15rBK8ygS",
  "key11": "3b9rLjNSVyTNCLoVRkZbCgsAthp1s4XAHcmMRSdcQmzqZi4tKRpzrbvqQadhfnGjNJGF5DmW2GJJzRJYwrbpRVGj",
  "key12": "2XCFACr2pTb1SKjW2ycrBc9DQTSQi9XDgPLJg8MiyJnFtkiizTEioxQz6QMtCXAQVDKenUUiRkCxLshWjCjj98JY",
  "key13": "2vt3Ui6SGP7dDnwUN9EdwSsNmQmobXD5ZNjXrzmvx5xcEZ3HdNmn4ad7aogzoNGsyMPq4rE3ZTxfAMxh8Pko1h3W",
  "key14": "kLEgn6uaQD9AnMEjkbkPTyk9JUMKiTNbdu86SELcVSRkAtzAKHDH9zi7jsvJ3BAhJK11WJQLsyCsCcio4XXBno3",
  "key15": "2JBPfvyqY9KmoTLL88A6YNgMm5mQxdcNmCevJuZnqGb6JBGni5VMWYy8gHCZ3doTpjjVqKpb1XigTTf9hz16dVy",
  "key16": "3cwbLyUsenhoELGp7NsX3Nm5inWsKxnt4akXYr2eR37ZFLpQizDHJxcZ9vWeG81emDBLqhQ2s1C5YyzkqnviThFE",
  "key17": "5SqZyHYZCcp3HN8nkPaVWuNZLqj12wByNDKC5VnS8BLBC1nVriz7Qp8iovRa3uUfWLk35ipZusz6UpxyWAquF9VM",
  "key18": "3hDpDiAVv5of9MEp2pRFXkZknttJVVQz5EUW2ZpthnT8AVMv1TaQBeZhjHkLuzriEZHoTGj9RALWuoLvQ1Pe6EdH",
  "key19": "3DdpVV25LMgwxxfUZeGUwTg5ruQdT4pFaPnn9aRJhZSiXvrKU3n264NiZtVDPYfcenZyGvy2NxNp9Pc41vhPvNLA",
  "key20": "2SDNj2QCUAcDYBfbHfgZei5SiCqiDcrjaTQA4pjDcT6WwtQjhWpTLj2YkaaaP3X6xyPYvSMsC3FfsA2nUDkUHwmD",
  "key21": "b69TinGkGbY6aKtKY7gjCq1xdS2a32sQxYNc69KPxcY6iPU4Xv1yxrfhNzEkczimpQTwA77Q7tvH6hfwpeKL8is",
  "key22": "35qWygs3DhvNKBWHYy41LEEt41rBs9TfEW15D4zqZM6tEHibVHcnVeTvRy8frQoU2giK6DU8hKX5M82c3WehT5Qw",
  "key23": "4MXFX4pqvX2JzWaReeRrt55T99iKAKCn7LumfF5r8vyc4X37bDwX6fR7hV9rkG3CPbYho3uw4k6Mx2Cf3qwso8Kv",
  "key24": "5VDWbmUvQTsKFmh5BwXw5rZZFQMqHEb8MKLpLa9bpbbn1LrdMUXUQsu1s7dcUdsu2GWoLJFqTCsgDZvZAjtCn5b8",
  "key25": "XNxM34MXPth2UFDQePznVXLFnm4y4zLcNPvQ3BJt5KdCAf6zKeu1UesNe3rrse8X69Wv1LXD9NuDRuRtK2cTprr",
  "key26": "22QxZtUnrVvpK9okgrUsGcY2oq569NiSAKt9XjRJqHggPuSs8zFfnVHxxkPeZwfkBVPdrLwfDQoZc55kNyJFDw1h",
  "key27": "29UBpmKMFQcpAoTdj4qTuouuUNSGaH3m8i6sKSMAaapDkfokLHWxn2xvLt23bLL8q9YEbUcNFWHwcv1EDfQTMVXZ",
  "key28": "4wrkQgcucK2QF2NmG4JxLVSGdVfHBzNrPff16zVGGdrjdSauFRUp2dMjtuwzg48Eyk4LCDRcHaWy5xBSE4aFiaMQ",
  "key29": "2vG45a8tv8dLBdS9vbVBpFNJB5BUFUpkpaBpNWct2AqbLpenu3nA5TfuzDWadXG37UYLGT883n8Ke453HbFTZeMA",
  "key30": "4ck4tBrYKCR8h28r7MgumxnZjK76qcyCDsTMZqQQDC8pgVpTi9QsiQEKLbSdCk3djn4hu15MNdtsXXp56HeFEerX",
  "key31": "4gdWbtdAsAPdoGffdcvUqKPjTDBdC2oohBjngidkFSBFPa8cNQekm7bYMK36m5LzYYoh2WqVvvbFps1Vwy6nNhBG",
  "key32": "5gGgPz2iYjVAL61gdzUL4vfZLkfBVS7q4B2PYBEpui2APgHEaBfvaFTr8Eyka9bPwWJNxsxN5LXGksf5vB315S8k",
  "key33": "24woPiyHRDwwoQsZfSDEXmDMxj7cQ2qvQGQPBm8ztLXLw59LK3Jh9Fb266nHZsatUnsS4ZENq59ttnoWuYuE93bD",
  "key34": "AjTw3D5WnMRborqrtFNAid6h14env13cPmgAQtBRaDiVNFhkHrzhexfiWBaRBEyDGMpwXujE6LTRbyzmmagGsEZ",
  "key35": "2FWJUnQBmdaWpoXyKW7jSy7vokAWbY421qF8541KfaVbRGSZWXpDiD33zoesCLbHtDmcve38jKtdF9LBC934aCNX",
  "key36": "59ie73h9mHqpEiL6xhTCJgTrrZ38PPYkXz1KVE2D1E2WPzfvnTQra8zq4AG51YZt5fXhW8S8AjfBceKGypLSy1LK",
  "key37": "34tVz8Vy7Eexr1XqcfVGVr3BV72BqiUeuJaSKtwK5FePykAjyXnNiADGKDfPGV4bDo2tUCseJovc8c5cDZfeWVJE"
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
