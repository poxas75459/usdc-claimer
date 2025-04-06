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
    "4onwduFBZPAXwPhKE82ZTPLk5AeJSTpoJhwdTa3DrGHwBj763DBfDvMMe77gk15iThKMqqkd22eq9yw9qDxhiPHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LDaoKQzy8Jzs3GAVbBVbPMji7cfgycnXqmm98jDkFB8BrtUCtg8TF2YnNqu2qnKLV7K16d5orfSSGUHR97KTtt6",
  "key1": "dc741AM3adP8aGS23WH6wqSTBB5SQWF4W9JZzxwJA3u8d4h5JK9FJk14rw2BAxeoWCo5qZkrEwHnypr86D6pWy4",
  "key2": "56o9diQLxsZnPibvBUWSp1RFZ2mCyBajKADQsxxBYQNGRgBr16yT5pfbtNYKTuu1WQ5ELdY9CcjZDPUFBsMX2guz",
  "key3": "5iaByDdYqX4hX6mwANzo6LBLEHcoigqCor52fjNZbrQyYz9LfMFymY5gy9CbkRiW9XJP895bqJj2jWWZPbo8UFgy",
  "key4": "2Sd6n4wNR8C2fNWcT8uTZHLbEra1MJXPxnSyuSey5F9kBz7jQXCePZF52Zd2ZRVVc17Z2qPBf6sr5GwhoaZ4r7c9",
  "key5": "3ML9aSiB4w7TNs43qavp9KU4EDGpHuBFCnxt25wNwZ1niUJZ1VCU66uPU1JTcVx582G1QQ6aGoi3dW7ejBt2tiAv",
  "key6": "3wyAiKsptNVdi9d3tG51nAXiDBSnpao95Zwru5AWB3nHjV7om69VGBWdSiYBDr9hcebaC6mkjTJdnxYhfq7fmvdg",
  "key7": "67nCLm547KCq3Zk8xfpy4tBLoDnCWq8BH4JwVVrquCwZaNQq5RnruSUN12eYDMGTfFuSzvvMtGi7MQYiPBw7FehJ",
  "key8": "5mdM6Y7mgh2TAXtCkThGxgaRjEwsKJQuE7umBu4DtaHCjWwUr2cx4argq1YDLeN3kNFeKXrwZdE1e3XWYX2RwyKh",
  "key9": "3Zt9dtUAgnUrrMA1SFRnKi3PXcLfme4VragsFbFbtHuT42YV2hkE5YZb8U3HwuaGzpeJaoJJuJ9A8X3hk3Q5qM1p",
  "key10": "2GccnyakjwnvRtvmwyfGfzQ31kXTnZJp93ReH2RGxB4QtBB5Kte7RyucbGXiMaFSR1AxiDm4jvE5x6QsHsN8uaDa",
  "key11": "5SUc4CaaM4FpqxABFXiWPJdkszYFjEQYRFivLY7bZEaiRJFkmP5aVd11q6Uif3siTCZP9fvTKaPdTwdfVzZCvLy8",
  "key12": "2MXDp1h29e4SMFnhTdyVk1JXmCrcPbDGqnCndxoLbKweXZYhP4WRwvpvp4NMNPGwedJZVp2pPNzEbKaZDA3Sijdx",
  "key13": "4jPqjKjXZsfPJbRkahc4PtDXWXWcH8NyeqUAMvpftLHSGiavwn32NY54dSGUbVjFJhpeuTyHevJNoNvobncKUKcS",
  "key14": "JNnmF1nbomRKbCSxxfR736Z4pB8r6ei8h2U2fzujN7J26a7Pq82iAczwKGj8iaRZAUR7yFUk3sp9ugXn1tqgpRd",
  "key15": "JHa1EqQcCj13L4JcQMvdTz9MxbsGpx84RTEjgVoLGxTWkj48uQXK5YLXs5reUDoZWfmDnw2xFGPQTESU5JTk9yS",
  "key16": "5WSdMCK9qvUzyisybBGbZMz49Eao6KmYtLQgfkL3CWzHQ7Rh3Jv5aq7okK2utBSFbujyV5bGRPhCy72C3VQzpH18",
  "key17": "3u1L3Bnhmfe5vpZx91H6jYegYsa4afrBCwZXwQaSpVUhd9mjdUEFujsuVbep96XYWzpCtRSNLwoxdjuGea7aJVqT",
  "key18": "61qrKcqAhpGGxXZz5KnryZPFVbxAbnebxnQBUTTK46jRdct6UFvBVhBPGSsTtdmvsHfzcLDWoNW4Bu1r4Cv7ctPU",
  "key19": "zUB8L3EDqcQayd36sWQR6VUBToFRkoerTBJV8omzTJZHLsfrC57J6gWkgoGRaMbVsviYABF62jzg3JNRgYUdVbZ",
  "key20": "5B6zmKkHXkgcpeU9mqADyMZLLdyvVypg4PrrhZDsc4o2FMCvPvSip1nq4GcYvnQV3MeAEdWBZvWQfgzWETHmf4xT",
  "key21": "5eUM2GVpTG3kzrrSTAvfe9AXmkuUNoHa6uoSmnEwiovrVQF8Fcd1z7EWV9wGDzpvNCYopdEJGTXWAc1FMESww1PJ",
  "key22": "4xCpD4U8E4MTj3yxehof2fqju51HVrnY7A5hxx6j1BxejZg8hUnGxpgwFPXWehd25Y1iSnRuMhEFo5apW8eKCFdu",
  "key23": "wykVphU2WEQqzfmXeM11RGiKjoTmMBR4XFc498ETFSEc8uU54yRp8ktcS5VE1SS4e46KVeu8dMLTqMKAfEgKNWj",
  "key24": "3ywdrWLUmwKc9tXjBBAAhRoYw1mojkwoC4M9MbNNXmSW1928o8EBHBiWKP9K1WhkPWNRbvfAZK43sGrQmsmUkdQW",
  "key25": "3r8rtKQ28yY8hjhvd6Qeaknki8PyGQmtNK5Qri9SF24n3FRuj739pJyyboy9VH3dZkSCcSfXZJaacm65SHmNf7jA",
  "key26": "49FJdQ8H9q4g548JfYVD8C65fThKZ5SykWpvGjiQPKkuQxLkviPYNMbhYfjzzD5aWjg3TpMkNBC3FtvJdav5jzZA",
  "key27": "8WztcYSDHeVrhHrrL3TaYWYoi4A4mr1TJYLLQUg2dy48TxGdkmJ1xL9TDMccdNf3DUF7ypt67r3mkRjJvSatir4",
  "key28": "3w7w5exbhMQSJDPE7QN3aJaoHLqyfiYGnnsiPtSLxiFNCdM7MSxZkC43F6WswRuVJ8oaTbCfcby2TNCinb6BZgv",
  "key29": "4rvkVbrxFSfvJF9fJ9zsHPfric46tQbNs5SoadhJbdyR96EuoZpLgVVfazFmbmucpir4nJ5yKi3oHbmUVDLzHfZm",
  "key30": "24ahY3o5RHSJjacv5GzFiVXEYjYnsCHqjmqef9iCPELAa8HJ3JyLXKNbmStWsTFAa4BwgXDoncqQr5o8H3U7FnoQ",
  "key31": "4S3GxqH1e9iXhxWMjRAS45GGCZGscC1mzJ5MHK3dzErcR6EeQ29DPQXjCqbGgdKvMMycheowscBip4PpJCGQ9bNK",
  "key32": "2zn7LhBw4dFpNBnipg4ChCAo7kiBeeaZieYpjYa9g38muirAWHz4huYx4tQv5R1U8qj8dotCj169mQqgSSzwEHKZ",
  "key33": "3YtqKdE7tmzV4ZpmdhYLmTJTfR8gKZ3dCkmEuJUEWznw2UJGj7hVoHUG3FQWjHneyguUbCLKiLkvnJC1c7CgoU7q",
  "key34": "3Ps7nakJCeJS3zSUpbTko5TcYPQxKgZSTdzyonG743BZA2uzUi3a8RxzWwsbxx4t3X28DTVZrDmTf4ohMVNpVXwR",
  "key35": "7e7qKcDsmzww4r9DVCDKXrGjDMY6t9Saojagd4DFCVB1KUpH3sAEKosMdVrG43KWjzsYdiLvNgNDSHitj53vNqC",
  "key36": "3eqej44hY4E8SxWsi4oR7S2Q7PX4zHfGz1PLJ56djvL39YKa9azBfCWbhugKr7CuZNFKJNkbMYrxyMmwsV9ecNVG",
  "key37": "5R9yf7484sZ288tgkz8NCQS6YcgXC1debFJZxvaJkRGAxgro92CvXKzgp6qGWkyHdFocAtnPpx146AY3vBAHwLh6",
  "key38": "3P2v7Bx1ejksRnQtAN5ThbqWPW8sfv3GeX4ma7bp5sdVy1cQzz3nodnyXRtvd8EmU7bDBKuxBVyqgawscYs5DBmy",
  "key39": "5UVt4qJBWSYktJigpV4sbBmLXXQDnFES5Sj44xhMUrWdK6mNdV4qYDcVgZezmVQb8gXE6au64CNJkddt8d1R5p3L",
  "key40": "4mLHUawcJqoTors34tLVbNJM5JRJgBz6xWAfBhJS39NmQqHB6iLVeMSvajpH8Kz1vgDQe4mXvhp89CdhevtzxGQv",
  "key41": "3KHKgNNGbbRnSz7kzsYGc3cpz7jE3dpYajVKRcCGf9U5BE5SAH94sMokwZjGUKuyyekhrLG7wxrDXqL1kpTeRXTx",
  "key42": "v99ET1FRWKBmD4hEMzXegiNYiwj9pCJG5ZTmyCCxgUSiR9YomFtRi74z89x82rPWxXdpKdBpg5HUHDwd1vd5jEQ",
  "key43": "5ShZMnLzMNbwJURYkAyrntUnwU2G8VYqJ6BcJMW2ntNDG1GiHFDQDjEESh7YhiULyh3TY7hpJMUUny5guei72cf1",
  "key44": "5bRaWE8bhGMczjHWB46bG5Vxa4aGTRHnP7GHNhdhLtw321vGwvaTBYZbTSF2DSpzCkRTxTgNxesGFD6NgXkud2TP"
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
