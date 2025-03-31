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
    "5MpZwTSygrvuMEwg4e7LAN8uCywcrsUyyGm7NJjdJGCwUKBn8GPngYkx7prK8U1yTxCUPawbeaSE6KpiLogQNL8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QpvER8YtuvRCin1rXcrdDbJEE3f2kh3ZphEGj1R5n8Km9u6ckXTnqvpN1TGkNeqkDnezf4D9qAGvp7xSY2kLG3C",
  "key1": "2ckPikopwiZj2hbMfxpnyA6uiCdbpFiChYhBp4jsHh8eG2weo4Niour6QzR2bCmTWAJw3kwXwTqgR9suGfzY7cex",
  "key2": "3X6kpArPMB9oUzmr8JHj3b3P8FyUaUsp3XwxGVD5zGutp3U8C4nRMC9M16dDo8E45QedUxwsHYQScyr35BzN6avh",
  "key3": "21VdqGuBdGJhRWhj5cGWGRvaAzKyu6gLDHPyP166jWhVTfpU9rYoA7Zdfb9GpL1Akb2NCB46KbKXu9PQVLhJTkeo",
  "key4": "4JQj5xrmmAbgqLDvyvm7bbgi43LuMXWLeQS18RggKDZgpFJ7ze7CW6Ft7HxXnDUdi5M7o6x1Fu3cRgZhPHyDW5vF",
  "key5": "5V69ji7XmMMF8imTUiv1Qfgg8eQ334e1kwXB3k5xg4H5gyisj6K16Y9GmVwjuAKHYHFUTvMNEA29EuAKEkwxhgLF",
  "key6": "4XzZ9ZnJ1BSCusNcpfbzD5AebSauW2irgxgwVSZhrv8ykqEh7GRED1BDapTVwJe6wuM9f7x1iyWedeaLJLcNLDnk",
  "key7": "2D3BkbvxjxYnPyE6QNokw8qMKzR7xaBRFc8eSMwxtW5r9oJYWPywa11NysgUqRKgYnYtCdfy9vTJYgdxEFkajURJ",
  "key8": "5MCLdguCpwGMtzKH8RoWFmpQ82mdvY9a4nS8fWKCGMK1Zowk3VxZ4W9GCNwC3hTNGEvTKtRRiXBL51ytQb1PAitY",
  "key9": "2FD4br9zn9L5ytGa6bFeL4rn9kWXdXiUd6z9nMJCnjvUoA5g4QNUg27vp33aQRPJ9unNg7RbEGTBh4PCXSCeMuVt",
  "key10": "4Ldo4wHqBk3f4Ts86hj5jcVqjcLNdhnYH95oxThC5C2ozy5tiEaoXcMvmU4d63Rt3mXLygcSvWByY9Ym1ToNpgZH",
  "key11": "g1otPL87Es6tzw3RNRuQePD48iMnpGouvkbEVkr6jm1RqNAcE1r9nuAr3C6Fh8LRqVdAbuXLGKEkWLpANfboumr",
  "key12": "4a3GqVWvbVnp68BEmsGNtvBS2F4qGci8xfQ8Dva5T7hHqMM2xskoo51ExkduKz5CaiBWAxphr63GNJLvHqL5N9tq",
  "key13": "38Epi7AFuXRtheU5ac8uVwhFkhuLCNtJUKE7Ba8ccMwxqpE11UByRKZ857NB1UdXFaVeUJnZaehPbwP6KsqLt8r3",
  "key14": "4V9FTb1qqDqCUZY9kDjFrmKDkWgy38KMfVSj6mPXWPnqBbzyCBjq9UvhVfo1R4dXuCPvdvMyFi8EQ2w8wRy5sUAT",
  "key15": "2XiZCK3eNuZs6ZP94PordF8aJMdh7ZESDMX8qNhzLWz8msTrmHHMFbVstJgyyEUPk5MUmKyvX4SrLZRihETPReNx",
  "key16": "3PbJFQzaCeSgHRY6v69gGe8gqqURiGJBMosapTS8CYhKUrXWFMoDnWW5Xj1JC1dzCTNAxm7H1byzzhSG5wBicgeN",
  "key17": "383SiXkMxKb6btjbSsAGYg3kV7DG3ahFrMpsFt9eewh3PydUt9JH4iCUvBSKyXgF2oaXnFE3466nbZruKHPLK5c8",
  "key18": "2FM4uz3HecoVjkK3duNhw5svTvYudiTuTb36j67Sx6SFHvAM51cyQMyxs62ixWYQLzHyEhSFTxVGnSWZXbd787im",
  "key19": "4USXZCCED5grWrJ19f9X5k1h9FSLaejv1wAVxsmFGb5DtPx5LDxmXow9f2q5iegvDjSvES28EWzoBSTAJrLNQfLs",
  "key20": "4BqGbXdnaDF45T8L7TjvgUTiP4mrpCd4mqyKsaALRYMYBfBicjHxucjMv8B92NSYurFDcLoenBVpTpos5oE31XZs",
  "key21": "56nzrx8egLu7NBsq4kRVHbBaYpXLZwq2rAPgTvnrSVDQDUAXjM8rotWCG8BKkRZMqQugjvJ1rq8efcUa51seq7Mr",
  "key22": "4UWkP8F7ijtwkq73gvKBNRtu4GTCAQXnKUzS4zHaX53PwSyxZEvVnHvauymwJHNNxNe4U8fMwXSj2B8vXpMud9vx",
  "key23": "4X9Ev3pLv6itMoE8udfJxdHUM6ZEYS3Jfz2wAjCz98XAPZdw6TkCP6hDcWUXxyNU4iGj8UFyLQjkK4Q1SzDAGaoY",
  "key24": "4c4DSWUQ6QJVCCoJzZ22rk3V8FH6cdGonKyFTJp4yHEBAtaNV72ahQqdLUpU4b6hbCYGS1svXKCQGW2dDE7W9XLB",
  "key25": "E71UY3MH33noLVoUjU4WFDVw3ZADvKXWEQeULiSG7umaiiedbDC14g457wv7jwbgpFcohkePwy2foCW77zpk2f4",
  "key26": "4CZpQk4wwwckLk9RgkxELQRj8ipetFcCBHQAjF7WxyaFE3MDL7Nxj2MPDhvMPbm2oc1kjjV13GYqGBXtY1obaf1v",
  "key27": "2gDgqfc9k6pr89kW9nr7GJSEF5kEKEXaVzVVsxGvbAzu3KFBugf4E6R9EpJEpfSosUx9Zw3fF9LZpayoduuxemkP",
  "key28": "3y4MHww2A2TTbzPvo4CE5rn1ZLDdk5gpEzEHao1j7CU4z8D2rFj5qLnTXLXijNcyk3PTWhrL9UxPRGaA9EWGgD8n",
  "key29": "2D1gNgwYnFmmVwt7gfgU8txjTSHUkkophUDc8DXiPqEZtjsSzFM18WsbHa6M6DKHnr4mcMifwXBRssJMPdu9qJm2",
  "key30": "45wuuwExBhd7UJ3wujd4GGbPhWsj6s8eoKEn3pxL68Di9tmSemoiArG6owpM4iP6LBUHPPbfvjjWzcghgoc8L8MV",
  "key31": "2Zgm2sGdG1Rxigk3dyDswMLGuE2gBmDFhqZ7GVp3X3cRf25rb6zZD4VDTkzU1P8ojo51aDB4jvGbcZwGtCwR5Teb",
  "key32": "4rqQyg4VofFbLHVurJs5XFSkQfSHhJJFUiqTiNY3gejsfNWoRXmeX4xfpt6S8oArtg1WWoqtQ5KWrerMR7E77B16",
  "key33": "3T6K1ppfT14cVrHYAWDwzuAD7qqNLbQTAPK4UdNF9do8QFhhxmeqgnTdUP6v8hshxc694MBAVAqTrsw96PPRYmho",
  "key34": "61csR8GWRfFXazA9mSVuBqNzAKWa7SEegU7Sh5cZFiS4VUKbjJbbE8idxHcgBqbfjoAxGMYKUFT8qNUCmrGYT9NJ",
  "key35": "62WJX5py7kGjn7ZA59GGUJfFDernchtKf1CpKsxYf1mJpmYYAG45D7HFbWHQqgzAD4zDXFb37fPihMmRmTUcc85x",
  "key36": "2cLgXc3xW6sPU7c92QELELynyms3VaQhoeL2Ewdt1mQzehcQyQzbPUqeAN4MhrssfvrLLBnH2Gefd3y1AHHDybww",
  "key37": "o39q7hi1fCj9MfrBZsnf6NQPTUHAmhyxGJ3W9eSmpyqLKBkxCdJAdT7yJM7K8JV8FSm5mypwh3mcuQ3Zc3JZFrR",
  "key38": "61fq3qgnrG3yM6gwoocSEpHDphtGeKAyDJH77neD9i7JKBR9A665R1RcXaAbdVN7ZdL9Q1zUoCTPxCKSiKBJNcGM",
  "key39": "VEeYBnx6cuJwC9FURbTu3RosWWUJuMvJU9YGvHCzx1LCN62d1CgXykkuZLCcNpqJg5tpsBR7oa3KVEaJH99DsDz",
  "key40": "5RGbh6pnWUYc16gaqwsmrn4AyMyTG7hR4inKi8PnViTxTk3vyn63tgFYHr2QBV3PJVR2TY2CRquR6WWSHRBCsoAT",
  "key41": "4YkhxdvdYTfwRFraeSC6fiyeZQ9VzU8XB8B6gG9VYopCakgpCXLW9gYUP3Yr1QceczcWZs49nDhQprA8HKQxcEZa",
  "key42": "3N9JVi2fhf7vJ8vScUm2uM8SouUCqJvvjSqWpod49h31WkL1PgqoarrTQjtyht7hh1ziPcV8VsPkgs1Q4RibdsGK",
  "key43": "2R8kk5uY18rYakoSGxZSjtUS8ZoLYFwAgmUoX1rujUaVA5qi9inmXVTY6yNe7CKJcoJV7XXw3FN2apr9i883wEQZ",
  "key44": "4Krt6ECMsakWgVZeV6fUkBWa76pgYxxQtFB5eDjihUufBPxPBdevaKQm2ptare13zrAXJraBdaSmDstrBvHRzm7m",
  "key45": "v8h9zzz22Xq2nZpuhBVeUX23swDuXQVpBMTzSoZqm6yY5ADatmseBCssnCVozS6hKUQg3wt6euMBdMjUyEwa4Bp",
  "key46": "5pWdWTot8c1uhaHjGhCcYkjpXv1QbnctqJS1fJKLRcQKEPSrdy34ia8mqrw3w3nU2PpvZaau4y3QSsEveGGp21mH",
  "key47": "64q7EGPmrY8KYmwxeBe6PjYQ2oEBcRgZFYwCEMKnpQwYJ2hwomA7n6141opff9RLumhXwGGpEQFjfNnQADERpxbn",
  "key48": "4s9rbhAaius9jg12f9p9dM1Jnzbuyi61KP9EsoJKBWSsCrhJ6m5WdLfnfqb6EGBrUMidnFCDaMGCMGQvA5Y8BkhA",
  "key49": "nmiHyPN6pqLudr3Jds6rcCoMhn3BjX7c12gzq2eCoQu16QPTRmzk7n1YsTLr7vx6L32EKnHXT5NvKLzZVFAeixS"
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
