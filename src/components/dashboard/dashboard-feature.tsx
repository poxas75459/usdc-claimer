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
    "5DoEthcbk7Z7cq4fkUqK9cw9d3Jvs9ChYSjc79YhkJB6xJ3nErhzeNbZE4rYnLhxHs6ToeyFvMgj1WDW7wWwFkmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "324qN77JS6uH1CLghvmkzYM8ATUptjAe6GkATqojwD3MbZaKNLfpoHUE4gmyLJjfTNjYF23bQp1weMJTjyy13EVE",
  "key1": "4CdkmTTvQ9DtHezVaNmmtcwZcPz3cKiraPKUtytmFX53u7mQ8aXmNkmsShgvofiQA23Qcowy7ky4cjT2V8vcktCw",
  "key2": "Do3Pr1knWJ8zbVQdk6jTYdVCwyrjjhmAVr5cHXJ1apCbiJhmY9CT5Yur7ebPbMQ7ZsxcRQ3GzrxaXX9A23K9JqV",
  "key3": "2DvwVjVhV6q7gp8HRRWJuRKbhpxh7b9PmNP9B7qBaeiVoYYbsTj2VrBK3hP1D6e9YFG3kaV5dMofrU6efcy6TWAa",
  "key4": "sef9qSa7Nb62Q4U9QMgWghLb3wavKP9ZAjxqjMtaBCgThJszxCU293LuQt5XDS2i6WPKnveWNfa1Ye4dLdbY2EW",
  "key5": "2d4gbGaXq2ZaxjWQK7qXvofDzpdotBh9LTETdiTWqtLLWg6d4UNRUxKuwPS39a3PMKa4LuXZBSEEQxsr55Sk2DCs",
  "key6": "AgiYLy5gYgKbkYqiKqSAY6ywYwcPjvwxc1bNnAhqyw4bGD4PwQz6nZYrCZzJSnTCgT6WKm4xssx2S6YsLz4gZfk",
  "key7": "2v3puhDzXRF9ryy6qUADune6LvNMv5FxS1qKy2faQZMhoCCVTCBjCgNcLnp9SskXTE3Uk6KQ6DLizpm5JXajA5N9",
  "key8": "3iFp3Xts2pmWpBfbx5cYLygRGcxQhdyNTM73ANDZrEMeoeSKrJp89wYiW1s1gHEx1xLRa78GfzPXdr4wVXn1Bd8K",
  "key9": "4BqVrzKte9ntUt6Ts529XfwM6bJ4J7WS8rSTBRCN3Egobvvg99QoPeXhkdzbPNkoCb7VJjgnhaot9BjPKGe4VbkD",
  "key10": "2JSj4VmsB9RU2cMPKUdU1KbZu6YH129onHGKHcEiiqTUhxbUAS6w6MuF2tR9LMF1Kdqe1pYYe1SPaxSQ498RYP62",
  "key11": "2Jd1mR196vdbuMkCPuDAa9eNpj9r6nAnofEJeTSPX1EJmuSNF42f8wKnvTsgiu3tJJrMaPuN5moje2g6X7rpuHxx",
  "key12": "cwgchBirxmZk22n81UN9YNzEAmveRzaHnWeYRrwqmeEhdUrJmm8ea5N5thNnULdTvkdjGi47WT838NhTq76Jaf5",
  "key13": "5grB12aPzEG89KFusj2PkRzfg6gyyR8Gayh7zUiFVZV5AvUUwBXgsGjuNoUwJcG28k5cRt3gWM8TzxdmsLFd8TBo",
  "key14": "5SdtdES67B4zvCjUY4TRHhbAJcfSGJdStwxBBJcVevAK3kFyWa8WuncziFPVsQMKbaFeuCv9MK7CwYUYSGZhzmup",
  "key15": "5UT5iEG9f9TG9D6BBTYYBK2pZRtaPkEhK6o6vMoMYRAxdGJg12C9RiQEYSzW1uNGP8MBNNpa6tbc2CGQcFh9qh2a",
  "key16": "5nLfdDExoeiGyzjVGLtEF9fgjRZa1jnRHgEaGGFNwWX6HzWcv5bzsXf31jFZrcT4WMAAK5nQ4WKMyASFFfTiAkdG",
  "key17": "2HLphPiBvVZ54mw9HsjMXyfKZvFSfYa56GPg9VoCaFGYE7xNx23pst4Dn7te3r7dQiKsKkP421AkAq6QrR2PuWtq",
  "key18": "2GwVgYWszws9pZf2HJNEdfkg2YPVYE2fYqkNxYcQKcGTkGMsHB3QcLWW1pfKJUfk34QnPaG26GXEn9M7sMvYkcfd",
  "key19": "5TajM5y6FMnZbwU4dXqYtHbGwtYv2jUXC7wXhFPV7acDmini6cCvb6PV6A22dFjztZwe4bcnNE8MFybixdBiBTR",
  "key20": "2qFXxEjKm2JEDs6je4Y58b5K7vv9Ny4dH48CbnTJTcjzMM4MDvTbShQLnmP7ZPakyGMUWN51AfATeuy2W7AJJ9i",
  "key21": "2CT9jEhHCvb6hkhiDFa9oF1T4R1BAF7qb3EevzV8NpxUfVpRu7fnBcCvcigBuDhYGJ1naYTkSPjSfYehnoLwBhp8",
  "key22": "4fGhj3Vot6A5dM9LpQKwYNLQKRaTTgJGjsYTJpKwfq3WxHBPbNFHefVgs8h1rGiHsTWtSXkDCL7uJJJzQ7g8qoeE",
  "key23": "2FrhBEhPPnRMC4WgNpAvi2M7DZJXKBugvJMNJNe89LuLNTeRkHEpDc7pQcCFT9Tr74Dvkbbc3cpARKcemEkCALyg",
  "key24": "LKi6xfZuJAXcEvX6F5KuuSjT7QiVoiyXyg63kTkb9x8XF2tD1KUPZjZhh5KL8u7mrWYtHvRH28pCSgt1WCZnieb",
  "key25": "3GE78AyANe5wmwChugEm7jMgmvVfV47EeJybMA4S2H4cJx2C7jyxr3cGqkY5Ys7nb4B7ayVneNcNm4rWXUB252fP",
  "key26": "3keoPigreh7dhEaCcjTJ9AUbVhQxVEJcXK4dRExCZxVw7fYroGUVSjLQxVTqYCgW6Rw3QCEV484n9HjBGic5hRYc",
  "key27": "nEKhPXuP2fEK68MCC8ddMEg9CzvC5aJXD32xN74AxHzrvh76mXMJeMhvaUwSVWXDRoTrNSYr6x9ow1v7jFEcifb",
  "key28": "4dhmz9r2byWq3ed5HbySJJhD5AgYRjBh1BBxPqkEh7s4QB5nLw4Etqr5RvpiKCFN8rBiXhqWnVhXgLB6dzMk4wgN",
  "key29": "aLSPrVCBhefuVCaHq6vD8nUaHxErRz1NTgDmhbEVDStsZsaD8RHsSPujbaoCa5YeHqRUvp3cGjfdQQYgcph2Psf",
  "key30": "UNMWWV1kj7qg3hPfUBjTKEco9kDGC4KoZvrAiBzDBsyeaRB8AdNoM7oFCwwWx9ypo7W6m2bQAc3Ay8YzV7NJDoa",
  "key31": "FYTaTBVWtKrajRKZNPJ9BEJvoD7GFVeyam6Gapt9tU4d8vfW2SYphAvkfYCs9UkVXjr1dW7kgJtfxe9vHo6hQFF",
  "key32": "2rrajuctpMMaA6yZ4TzwiskxaYrHNnE5QmUMF1i51qSaqPn4PWWP6Aoh6HS9QCTzvLJ6NhVVa1zf6eq4TaotwZZx",
  "key33": "nkGDebLyQ4vhL8sAkMiXUC216CrB8h4U24AqTZJLxLJiTbCkBpWNPbvDdctqSLydbiSTSnKoGEYggMQ59DXg8Ti",
  "key34": "qmNt73V5dA8STnVE1B2MB2AuLy1mV4gQ6fR35RLFSo3tVWnYonUcguAF1ApdBSiHHqtZg9X5npTPaWmCx4FNaH4",
  "key35": "5iXhPL5c38ksA91jXyX8W6y8aMgNPtVUbXN5MECuvR3jnm2yXKEDbYgJK1wR7XGpHTmhyhrTfmSJypsxNKPPwFGQ",
  "key36": "5BuBrsxB9FSGENfkQYkpJhrs6S14xSo2FuUCqhhcupYFFLxXPBJzgfV2s8ytQrWSEqvDejykDQ7XqU1yJiy1AviL",
  "key37": "3GARLd5geCaBEYDx851JtwJQeHQdQPgSzZ7h3Ab1qUuuFWu7H3RBczMna6i5ncafRwX2Mok5tTfzMoo3zNek3DpP",
  "key38": "5FJBdH9JRzqJmuGNXRPzbay9bjecU6hUAcRxeUuaTH4mcyZDerU6rwzKuTo1R8ujGgUsguoBM2YDxkiQYxCjh8Z",
  "key39": "34ido3SnCMj6nzBsemjjqJ2BmNRP7v97EfuknuCS93dbw8Zvh63aJXQnMx52noGnXUx4oZAw2KqDCySnSr4HNkvn",
  "key40": "5Di8AWxPcgviJmmUvRDJN25aDixkbcscrwN5CjYinMJJaYTNtbh7yaCKpju9wQHfWPiBiQQss86D6ELgm9T5Z59B",
  "key41": "4vE8isa8HF68AcUyAkvdYHv16KxNP5EsFkSCjt38EXZxs789E9yvLCdWgEYkyE4WPULRDE9Gnzo5ED2rC1LyafQF",
  "key42": "4SfjCxDesgoX1aaFYufTwdxRyf3dedys95TQjiUo5DzWYTBvV96co61jpcDN9LtBmqZDVKkgryj8G4nGkBGgQZUa",
  "key43": "vKYxUy8VWesXLeLN5mVawoLxYgdj1fLBQxCk5HxseFqhP585ZfBcAtmtGGdw9WfWC94KvQB9zqzN395eiyeLsyv",
  "key44": "3DX29XqySUeRKs9sumXkoBzsH159huQ5Qx4uPKGbsrJLobLtNHSgZDVE4iXVvKBHm3WgU1qHsMKt9kZ54zgPxijQ",
  "key45": "HvMwDgfP2Uw78WhyfkzB4bXfV8keYSrFq1MPqMonofAQbEUmz6wAbEBJJkczmD1uj1YS7cF1RGr8vE97QiuzkAN"
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
