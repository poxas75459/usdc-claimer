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
    "3bcHnV3kp4pM37smQa4iqjFGGXgT1ugL3Wh7EuqVwExSNNurzgSwYPhf1f1C33KRNGDiUb1kp9VrsjdS8fdQGPsM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y5ufRfd5Bah9VXHhbpCpsQVm7mNjyBSjHpjNGTiGKebSr1WmrwTrC1oiqpfo97CXtpBE3g61cVN8xUSY7JLvUW7",
  "key1": "2jst4yP9Yt8bmya4B4t4sGc1in8AS9SXEcnTjwMsKgpwzviKQwScLmmx6y4zaBvixrJfnHEU9GCckebYjLyZJF2Z",
  "key2": "2UexBB5MhuKgJA6DFNZmceFhXFuzqkSMJpUu5iGQYovbbhkEgb1mgn5MFBwxp9MR5SAggke1xqfm9Hi4aFyVM3KZ",
  "key3": "5YkY8C9Yj3QiMHxoduiZfeWhkagL5sSGRbP5VFZNkpL3j1SLKx3mRufKfjhab6o2RTWd2eaepfDUsQjBd9hypZpZ",
  "key4": "ZznP4fcXme3wswL3zJHQszgAns55STdrCVDtKv4cQ3BjVQ3pdaiqyPifrj5FJiEHQ7DmjVzatoMppFcCvc7xP9p",
  "key5": "4hoUw2Vmz6EEg6u9wcg4bq8ismgyf6uvWVmHwEHN1HXbxkwtXfZDKydQCbRWqnJRt9FycdCVQnC9ibma8Sh4bN7Y",
  "key6": "31mQg811hHY7bbJEJ7Z37guJafYheiUp9pLCw7V5RZFEjDKYXEvvHvuq7FvqM5C8vaFDXXbB81Bg1e5njJdWQWPQ",
  "key7": "28nsKGzD6MyKCTN4mnpUxAmNhHxAgRTdfdBkdD9d2CJDVVARgb9XfVg57mAVjU85nsE9kG3aQo6s25doo816YTzX",
  "key8": "3kLP51eWzJGe6W3Jfq9miP51W2irFEofapZFKRT1D153ehhXhws1BeKPb861AyWjo9ZAgUZEEfuSzwAmGzFZA8mJ",
  "key9": "5fMjVZnKXcSGr5q2taDQ4SNbX9EVFcXL4W3waCCojpoUu1a2HWZnJCBnyNxa24CPFM5yHoyAi4a1aomKVTt63iT8",
  "key10": "46ALpiCGEjKtrKdb8HDtRrZRf5oREb8H1ZpvfgEQzxdCxtuqtuhKYT2wiGF3qfq4xfdtBcCXVMuX1M2zERZRhED3",
  "key11": "2fguC9HDW9f9LGcsa4Y14W82XhX1SCobM6hrqeHBvf7y9RM4bo7nJTY8KiQcRebYivW8KQePtm9VfxuqD1APqhTF",
  "key12": "4mqXAeYyr4JDzfmvfYpDxxfUbLbMa7B85Sck6nofxkvNfipCzAGypK361GAfCssspNjfZyF1herd3yVyKjHf8SMX",
  "key13": "56s4Qb7rQiSxUJhpYLYwzo19SEi1WQXtTagJ5D35P6ZPjpTGtnobSxLsiSF7j6MripXEtQ8a1F8oLNQKpRkZasmY",
  "key14": "4o7tnZ3aot6fNDpH3GoEKFBU1ZKCv5cNN7gio97CdRXrMKDBv1S4RHFporQvajGVu6feEPNiJUYLmriwMaLThjLw",
  "key15": "2cSAAaqqCKuJM7PYPps1aX7NMnvZ5rpewjExz6W5abVL9jcUhpxKwVV6LHEc1uygU2a2P2q5iVEU2pXGnWeT51QD",
  "key16": "4GGrMKhWJfbGPTAvUjcaUZGUnXajcVXzW5FBCoTMvis7UtAnM93YSxhcKMZJ1HGqtUHR6xsa7pfJw4p5AjpmtHvu",
  "key17": "3ZHvFsApheEDo8TRr1WLZFTcwjJoSuSuhff7tj2N4GNK4sAhrYB7jyYeXFfB3mqXtW72YeUHmRc84gKkRh9mERGr",
  "key18": "5FrnLxgLYigfdzXDRHV1hTWig3mtwcCyWAcZNjrLoj2kLry4jmmr5CcbvSw1nkopQ1AZo835u4qqKkpLTaZYtWv1",
  "key19": "2Mp3Mz5C1XfwSxx5ftEtg7vowqr355wLA8673V9XH5qHoEixx5C85aNs5s9cFi3Lag72PRQxJzkrCivj7fHYCvRP",
  "key20": "4ZChvTt4cBShybGJGYFzkqQFfeGQqB3VynCPt7xafThja15EsBY957w2a8TV531av4tNFbM1qaaz1fSsin34MCYT",
  "key21": "3WgGE2fX5CwZQNGu5pTDX3PPc9ZDanrMRPspFoMmpNuLNdoJrwEjrpC8uwyt5YxR6JbzXa51v7hiFkZPvBJ4werK",
  "key22": "2eSTqZqkNsWJN5Q7wnbHmS9NBVkhvrqLdgHFyL1x8d9QwUbARQu3UP1szw1df7g7LGVjbghqrmtTQAhzWCuw9Hsd",
  "key23": "3k1THyEvajwj4FbzQDH4qkt19XKSs2Rn1kcpuKqoEoWmanYKeuGm4zJR5ftmbrqiobsXHApuGnrw6goBYnnqFvNX",
  "key24": "2GfZ7h31z7iNjNcohXpKVXczZrQiPqEeBDz89dEsFpaJgFFj21YTDfkwZeyK71Dk9j9USFs7xmb8Yoo5Jc554FL1",
  "key25": "3QNrqpuJ21y9jB1rnPDnDxhQGANjdjizZVQ9arz1mx8P8r824K7yaBFiETUDYrXLuNAiLdccCPA5YH8FxX2fsarD",
  "key26": "51YWWsYvDXDyhV5YMzYegXeXW9s7NkvsTpGLDNi5QwEkLyxU4uc85bu7aYxD8dPLb9zo8TgBn5J9yJqeZw18kSgj",
  "key27": "34k1NrJDMsZkQFoK83tXqpeuFwyphNLgoAmeC1utvfoPW8rP8gpQkkG6qL6bt4qwcTCYtHNEjyFVx9WaxmRWj7Re",
  "key28": "4rSPCUW7cTEZDszcdLd5AuSzZMwDLqyRFgRLarK11aGAEZiCjRBjSvmHeQKN6LwoDEuKPyd2Bz1QmvTuZBefeirw",
  "key29": "5XUqTh31MrDTVEANHNe1kpw8VyUCA25srBkzYJCe6SWAofGX1QUitEUisFXd5y1bhybE1YQR13SnaCneHzXba7pi",
  "key30": "5j6h8tRYo2y2YL594ffD64i6cs3DV2QtSmg1idAC5ATREP51u4xGyrdxCn1smgtgdpyxRiStna35vcRYWTh62uYn",
  "key31": "5Gi9Y84jW4WSmBvggkLhXo3XxwFrhYQyRgAKJv1tD2rcvAMXS6nUWKv1KfeEfcHzi7pCFXgxEZXEhPq3bqZDgevw",
  "key32": "5ShxAqubQt5gdZJUvHuSzJxHUTb9NYHW3QRirM6cvRnJY8fAxPLrpwfmQ52sP12auMuNQAdZFna8hNTGMkcQh8g1",
  "key33": "2ptCaxzJ9uF89J1XFUkWjnJUXT3suqDKajcvQ5kPqJ8qUMatb9zDPqyGKXUT73uXmnJQVF6sgBnJWQh1rNJYco2Y",
  "key34": "EgwbBo97He63FBpYAadZxxu6o85ZjCiKkfapKSVJiKHkRwF5rhCrwRkegYP6zAqMcmMr3xkQNwHSr69GR58g3oh",
  "key35": "2cXqPD5vVweqAUwYtwUBqoTWqLSdpAhhPjRbXXXaKf9YTwNDwF8okU9xRKDzvr4iMjYuurw8UcQKA2qERV8pjbB8",
  "key36": "5ciUWE1Bto7JQUgf7V4744U8gw3WPqGuFAcg89kguis6jYpSfJGgPeYJMuYiYapUr6wfsKYVyYHx5qxq3QcyA3Ph",
  "key37": "2Bq4wAUi8iRUJ8D2RXCZru2WSYau9QiHN51Vj3AFWP5kW4iDphzvSF76GjJ7A9eRAobwr1mhhHsWQykrxtetRWNZ",
  "key38": "21DwY9Pttc3W4khukBij2RWu4dLjY2UVb5KVSRDGGqnBAtGAU4xrkRdEfR2kLWZT8LroHJstKXfY2RHxbT2mV1Ah",
  "key39": "b66mmDFMiCxuNArbNTEY1MeGBSAmwrPiaeNzcUrUAqGQ3Sbtts8S81JKpzee82fRtaKpJQ998sCM6zcKLUDu9kf",
  "key40": "4gxyL2sj2vv6zz9tTJ74GN58kfp8wkohJuhsd8pC7wPWswPWLtDxTdGg8FCou1H9xnJtZPnXWoHEfGDgaQxQQrU6",
  "key41": "5DwVUfdqvxUEJUnEpButszSt132uWrJSPnK89W7GwYSkY2imnHHw47CVPWgYdgCRdwfDazf1uewKgWCVYUnvLixt",
  "key42": "3witNbzWq5tMABvDWhrsKFjfyeTwkCkrMvcxt448tmUE8i1PAChWpXAqZNn5hCebeuvB4Uk8SBZVuGVqwvJ9d2tq",
  "key43": "eCd2FqBSLPKnQekF9u5pCEZ92SQ41cdJtvQoVPpFpn8Qns7q8odw7PMzBsv9bzLw4Fd9KLYoHn4xbJxP3uvC4eQ",
  "key44": "U2bprWoGma1JrxupJx2FbvykTniLieTDV2k8MaL2NkYXPCJaZaVeRtjV1V6ohBcr1MFWrudbnQKgDMMGCu17w1p",
  "key45": "2WP5oz4WuaSmxzn1QD7TSjr46SqfGJkJ6DNmAeR5oBz5QytCvvy322oe7NnvrdUhYFDsRZY1BzqVD6oTbkKEMVFP"
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
