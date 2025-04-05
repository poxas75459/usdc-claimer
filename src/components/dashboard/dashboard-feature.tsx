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
    "5836zKtwFAMgQovUMR3B4Pm2m94uJDB8v4t769FkDU3fR7uYnXAva48Ux3DCGT61RLr18BwUJQawJWh1RbtkDtAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28UuneRRe933gbh327mHwyRwG9SJXC7M4BfvytWP34KGMyvapnDtKyGxa8WAWJ6HZRD7B6nYZPQcszwriLp7zXEo",
  "key1": "4utUnwBbka1bQwqpsAaScvFTpX3LRbbLj2QKndRpq4K1mf9YEcy49fyoLrzvpJAvj6Sge85mNbndtioAXXwTWZ8s",
  "key2": "q5qQjSeBwH1Kv1QGW7YzpWcswyA3ZHLMm8RPeQXPLBfxPnLTzov6woXcorYPdY7RhhYfd441pdFEsptxoPEzqMX",
  "key3": "4zHvMj2QN9WWjdYvXEeUuVjxEDXBmNazEqBLzGSSaCWA5H9CxXCrfUCHRAym4Ed3dTu2h6fyRsrz2XHFTTnRCJGP",
  "key4": "121xumg2GoUbbDQ76S4QJShYz9keGAHApN25h6u7eSU1ufRD4qwnwZRDCRryS2AEd5nGZSptaw5p1i8KCvirHZhi",
  "key5": "1KMZWivoznJPLftGMJtmHzctEvqmfmpZDwZa2MinwKzFwjMX8jGyLYcyLmitP3kcSzmxfV7cVRLcJp6dtwzXpv9",
  "key6": "2bHMebEsfXoJh5HNnKx6QGcKGgpTfYsVnYBFhiSsYMyo1qyorVnUNiYJ9a5J6CmpgFepoZPpGdNAoTah4VrYTZKh",
  "key7": "3NPY81wYZnrYTTVT9Div15Rj5mRjXFz3AqpeUr7Pok7BN3dAHJgLFtYiTE4Mv2omNR1nPewFDAHqox9bTMK78HRp",
  "key8": "2rgkoigFPee9LU3U2fjR181Lb5TBgsTgQuU7VnfGcQEC7MA2zDc7pr6VGbLasR7EmNRzX7aawP3RrdrBKL4CDQ3D",
  "key9": "4bgES1BvUVCbob4cipjYw9rQXaUgyd3meyU5ooxfbCk5PLqTQvjFszRPzTQqUN8FKZUNHXN4kvqyTPNbRoAkYGgK",
  "key10": "3HkDwd32znyRb6dXzimbK7PvjdexsaLEkze12vwmBRaPvwJsC52HrsnyD9KNBmDoR53Aw2xStnKqhmUbtSQey4s5",
  "key11": "3uqQm6ZpMQgn3a1fgRmp5WM3UY1zHWJAs5UtGSxB7kpirGnZpUcf3isZHr4mryJDH2J9P8wMbbA3bjZfSY7si9Cm",
  "key12": "26Lacp6jUJ2YQX47NNjpKea4HvqU3UwFsqHp1usa2v8GNe2a7LBeKpyc2kfYY4GTaAtd9B2RY2qUp16T1BsuzKoK",
  "key13": "kxpexYF9HBBurn6KGS4Kvh85wbg7NWn4qt5XSUkd8a6gBvtcbZKUAmD3LQ3tK9fW2QZzrKx48uAT8iQU9q6JcHh",
  "key14": "2b6j3WNWrmtwrTF9NYzgye65GwHHdJmaR1ST525uyMr6eM9rDDfyitpihJDJS98LR44qtXGEcPV5bNkBbbW2cYwP",
  "key15": "2PLKzmNGwV56b41hm9rn9F1wFt9QhrL7T5Fz23mfrRHWpkDcP6etwxd7GX8cgwwUzQMDrffcMd9F5GiE8bJYZpU",
  "key16": "w7RhYuVt5R17vz9K2KSjmUPboCBcjGhRWuLKzWQkxY3bzxba8SYdNo8Xq6RD4hzRp9HSCwgjQkmXeAi4tqr4vu8",
  "key17": "2dsC3veFtiM11jqqFimVuM9PB9ZWkqgTYmbhZpVDdNSLHtgULMeJ4Une5XiKkvnNmp1WKKAgWt2ZMR2XVPnbqc7H",
  "key18": "dMtkupyaGun1a7NkBkTRxbHQkGD9MKBjEdMKjyN6VsBLEgps1feqtoR4bmugBUaCYZqcsTc8Ac2McF9yUCNDJZW",
  "key19": "3cLS21i1pXFvTCrmFozkXHFBdRZc4mQuZNXdR9dJxRd8uzcpJYcAm19DutZPvN7yEFfjB5Z9mEJNYjpjbzTh7GYg",
  "key20": "6Sm4abopnwjFPoaLvASRnLYzZhsfrpZHaYWuQEN9dQp1RJS99cDe5H2egSEM1cjmsHfxaZethkkdMibQ6afFUMe",
  "key21": "X33VyUWpgo7UVdcAjUMyiCvLGFWG4FXs19LQQhs73C7HzYer1jJ8zCeF8f1Db1DB1WszMEdsVU4yBL2eLZQkVfw",
  "key22": "vUYLLsPEeoqWZf55NgkeF2Csc3xdK5Gwd3Jwbqyi1gHaogX3Mb9cHFZLCBjuKWHaceVrUSpEVuYt9mbLtCYfmXZ",
  "key23": "39i1gAo4FCA4tV3gvVT18AGTh64YKcGKTC4UPXuFMfrC1EgYTCrcxf6YxQRPrPWGC7QRvmkgwkGKoDRuyR2SkXse",
  "key24": "2CoE7FEQqT7Tgx57ND8kJwUsuLm4TCd5EA7gw5tCn7bWJKEboyHkdpkWWuykEziM4Msifr9S88ePJUH4zJJFoGGQ",
  "key25": "3zkCo9ZNfZPJHzbs6gAtk1JpR5LVLKpFpopRLH6g1QFeqiPXBe3tTsDtmoBxPycuh4jtuvA8yQPj5e3uyZAvu6nL",
  "key26": "Z21eEohzPAai84zYR4z3QHnDrbe3TcCS2kWnshZmdwnk2dyRS5fFHxLVXt8g3AgvvcGuCTrGm2osqsLBGmDXGfA",
  "key27": "2Giu2bQLRV25JY3oWxBPEurDksGfqXw67czyqsAahTKsDBb8nna1721MmfeYEfseY5niexv8sGrV6o7nQaQ3R8R9",
  "key28": "3LYJnHM2nCcArP581UFPEzH7nAZvBvz4hEuRahwqY2BnbihLtHbHEA8obzNnEeuQ39cUU9oybJXRuu7hMiH3GeQv",
  "key29": "2mKxVXbReE9zpvTXRJF65UDX5NuASASTkjv4uNGDjMpGMc2ffPws78CwBK2kDuQA9DB56HNCpSvC3ySjaGLSvCTe",
  "key30": "46g2LkWhhrHYAsHhdLVXfwPsgNoR2rFMyTrXRHFSuJJb1QFgVJ5KqMpEuqHwqbqRxutAepgcLpZDFhDoVAuY4uwf",
  "key31": "2fY4hRMXXXAvwC39nsdHZdEBGAdjDvGRK93BHNMiEZ96rrwHZrRVKY1ffYRXJyQy1aWH5yYo7SuySKzV9TwdYY5T",
  "key32": "2KKErB8iGg7kcyovwxpJsag7gwKZVvbYYKv14r57h8fdnqu2MpS5rAm93jWqygGS5AXvVPsZ1HgY4qsMWHe6s1m",
  "key33": "3jadq8XmrP6z76DHYasTLYc2tto8GNkvxeZw7HTXFpMPQCgX7zhc5cz9zWEif5Dm3jUM4wAEy9mPyePGJmYvm1YD",
  "key34": "43EHzMnBiVrRPcXQdkWhyiTv6qwtso7EoNpTJoGpqPqbXuPiJeFiWj5aXEv3Nm9z9gJqWcz8sC4DQCmbtbLGmc7g",
  "key35": "4MqLukhqaEmLrheGEg3yNkvo8EqqAJ4QihFpJzJLJDdrkEFJAKqwXXr7McMBNMu7KXUpyCrXYRLvQ1wYAZSCJ89a",
  "key36": "2BQAJxStLApQrAB8bxUCC2dGN2CPjQcRWdgnXy9P1WpyrHhkfc2gSxghX31LEc4unHQCs2cgeN1vXgtYarTieq7v",
  "key37": "4T1zJaJdxmEcXCWgTjNLUSKUB2getmPW94DAmXqdnjtzgNSwa2y1fzbVnYDQn1UpHZZCHqBh9Qp8EwaiT8H7GCuv",
  "key38": "3oT2PmbmGgQvtjbRWe6WsuPzDqzTXeWDWtHNQNrW4wCZXhnrJX8PcmUjX2SpnsPtU8UTtmTENyt9Tex7jcQMcJBW"
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
