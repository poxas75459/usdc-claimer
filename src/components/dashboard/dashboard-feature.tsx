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
    "5hadpXELVisTeAvJAyMXfetVPo3PFRJf9FWvrYNxgavqzsHgEhBMjRZYinGCsgPP5QJU8ro5cQKYkYXugZeG2vGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UsZYrcd945c3fPF64UozeNyaK4h2AS4HFEokZBebiTRXAGV8T7AFtzXeX6X6WTsafmG7EQTsepGbiEP7BjFyFFK",
  "key1": "YyFifxNvdDSKjPJniW7aWwt855ouKi7a3zXj8En3FoF6paPkyeF5CWL86tNfKSqKBY8H4KLZE8cTk2qCzWrFdx9",
  "key2": "3nAjcYQtKaRJQWFMKS68y2vxUtGLWW8xqQTXWeRxAuaQHQAcdgKReec4sorWC6HaYpKpkibrEjLcMVFJsvhRoXaY",
  "key3": "5njwjwxvhWKYnyPWPK82XhUPMhKtxcb9AHVXu9GruYwbgPNeQUUASyMdRYNdCpx6mReby9P1nxXjbKrbqpQW7GyP",
  "key4": "2oKfWLwX9YNBZrWwqGeeRHJiBqCy1P9rEkEXBKE1FRkgmLFjF2HQvTq5D6khqhKrbrkAUs7TAFd7Mrx8YsCnxqcR",
  "key5": "g6E7EnKMy3bw79sEm1DtmzAL2NeBt8vBiDDMREJ2Utdj115nTBTFrfnmn1VQq8ES9eYXgY9gafrxqd1ZtYNYHTd",
  "key6": "5kF8euYXmymFhbCrvjHKRaAMSLAuFWrztnKeAbrKoXZYuWponsBHtHYxL2fa1oDYq4Sptr89xVHWu5sWNcvgFXjL",
  "key7": "38fEojeLeqXZ5QsYoTH9aBuir4zUCNnEFaGwLwAkV5meEn7RqXvWuqp74iEvFxor9wZwo4Zvf7S4wFNyW3fbRq8P",
  "key8": "2NRb6HFH8PFMj5pvZbeFWtxiVE3hDCF2BfcYfJTGnRPa8mEGJtRcUyNw3qT2vT9hBh2kcxbNL5VSmzguVquE2K5B",
  "key9": "5kqabcs6uPagzurFifKntkcWQiYMhu8onV6go47Bs5eYsxYsmgDDRrC97ixZcWxuXh2PLwBfenJJKTndvRdDhSyU",
  "key10": "3Cec4ampoj7rBosuD3PVeHsMaxcfdbY7n3FeJwuXmAfpxPbqNQM42PkcwsAVQcuGujmCQyY1TpEZnZhSXgR87rR6",
  "key11": "5gGur41B7gawo6C2VGk8qGiQjKZz75psLZCq3G6Vxw9hApT6mCvHtfKoTWaokZj8eBEsh9JYSkDSCmnuCbEUhCg",
  "key12": "uWfDxTzf3YAkT3JZCLH4DTUFsy9oNFSCryBWohG96REgHhLmY1edV8mqMxnHaYA1rP5kvsPznBYAPF3LqDJqeC7",
  "key13": "61dp3hbGCuiKcrwXfdduDN8SPSRPt4KwiDdro2ybzJC9sNN4YbHWjUz4jbJCkWuc4Ny3AFL3xbYgG5PnjbnskDQn",
  "key14": "3QAUxdShHvy46vcsR9FTKnKG3QZp3wMfDxBoHxc7MLNjLMvYZrne7SQbQkjFsTFih3mfaGWykYjZvwVaqpFa19Bx",
  "key15": "2jC6GWrokTKvEF27fYRiNY4ZM8EvbvuhTic4eweb7XZrNJUVpi1gPzBjRpC14vbRuC9EAMrY86dtWZQRjMwNQwGC",
  "key16": "3ybJtER9Uvs7NfgmXDsog3HJP9Hjv9jgGajskZcXxDaRRYLmWZ5xvKepnrtpZtqKMuAoYAmPYd3Vw5tywuff6aDH",
  "key17": "aqboxSr14MVgpNaKMD69qV8xm1x618R8pFfwQbQLzKu7WC1e71oBQNyiwVtRLCbtk8DiURdWhVz7LyNbcz4mFSa",
  "key18": "TDYYQgAedCvh7tdzTXoXoPRHWf7PuaCiL3QiCNLymn8ZiUtujT75DhcD9qQpTN44p5qr5RntSaCmL4sqfjmoyMi",
  "key19": "3LJ15N7yEuJfdDs649GYhT4AyaSBveDmGEHgipz7gDY3okkJkZDwUxnqLhg3QbEvG6PhxVkjajF96AWu8RAe3hoB",
  "key20": "3yAH137dSQnFyP4E54RPtSH5fLUui9qVhFPXYffVx2QVtpGy6LjyrdErWJ2y64iBe7eZBKfiC9Rj2RWGNus4diwn",
  "key21": "3FPJHnVHXP1vgToW6i3BjwAJkFaBNzf5x5RYjRkiVEx5m6g7z9dMgeqGxYdH9WtVYSq4gbL1bspxVHTfhKF3ZPXt",
  "key22": "65mA3ar5xPYKfhkAF44gAxVH9TXzyhCgX3h8k2UL5JxNsQq9zrKNXNaVSrkrNb154bSFxB4PEtNtDUAEvTSeBSF9",
  "key23": "3cxyWGgKikjb9jkVSFrEqy1EUEGkrbv9CjKNgNW9jFuC5Mqp7e5U5MzikVjjwJ8NBigWNZrvTHcvyNE5cS9Cy6Yy",
  "key24": "4Lrm4t3BtKYvxYTgb8WVJywDPEW8E2UWW1F5WiAxo9E8pjFGL95HTUrBG9P24akEGQBgY7FocSQ1YEXvQN9LDjhU",
  "key25": "2pCf4bwRkoMB9vfs8RGwC9fMBqQd8gvxmyod86zNTNzS6uXkuQtxRBzDPfKjsWHefEpXtdTnGrvZVs5mNhrY9VEw",
  "key26": "5NXzosvc9ixYTH9L5yXG6rb9FDbwFX6iMpwWG5faazYnRBrWHPDwbZzUoDBhPx5E6REtfkh4Gb9D2w26NRtYFBWp",
  "key27": "3Ns27RFTr8qambpqBegtWbbgU4AVyh8aus25CvR5j4wBqhF2vRYT5kiDyL1d1egGHD33rmaGXFByahQdP56cAYWM",
  "key28": "5hy6BbVvYKed5yvk6dZa2pyRjvmTPn7dEVXLj9qZ44Y8XEgKGff4MxzPGXyneYUNQJxL8yVJmELymMmbHMzocJJu",
  "key29": "2oZP7maGdZyA19jpKPKBUEwJh26y47amKpSAB6Xo5svba3PyN3zzTjKrrHdde7dKixL6imUiPWPvi3yG8FFEKVTs",
  "key30": "4EfSG7azivUFw3vYKBNDPvMfnX9FJNoKKBra88zjpmAhzt1Q9D1ruKPCdRB21hHDju1Cm6TQAA2pefANzexwyz7L",
  "key31": "3Pbcm2X6tYU2w1Kn6mcxMAAfVYXQSbAvJx74pHUXzgqJaKi51C7XuvzS8st7gYXUREPNVzf7aQHa6pfxvMcAcFy9",
  "key32": "3jPhCokAgbj5vxBsYhyxQLdae2BM6pLnpViDBRcrfbKfwScB1AkmxMFrSHyyFwwAtpduFcaJJ3kDjr4ZDT5C5mxy",
  "key33": "5bbAmXZyuU2jkBPg16PhNHAZ5ewrf7Smi3VsQjEtLow3vryL2tNVCoE9qvtRF4pLRywehXwSjovmwcAQw8V9V8Yt",
  "key34": "3wFMsukCKHotKXeiZVCCKyTKfgwfq2Wxn2qWREM38UTsw8cX648tFVrEwuK9d89G5ex6TTMA5FjvkYRrdJ6rtL63",
  "key35": "W9MqeyrUp3U3aFWXB6R5YzZ5Cnd3F59zEVFJtvynDADaFJLf45wxeeYu1mzVxX9MjHDnyvreuFjsHnZucyRHneY",
  "key36": "33QvKdXR5aJyidy6qXAwNXEgtmCW9dso6MdughXE9oN5hR3JygFfWUvbBvu21MrR6wg8JoLxZhECgHZ98qWuyQUw",
  "key37": "2BZZJDffWrza4t1swNDEqMDodbNEahDy53u2iw6HNSNwu7NUQ2zzWp2aBK1NucVE2QUUGLT7DsXdNjiV6jZEN7jC",
  "key38": "4jhcPWYj3nvNoxxkCEnYLmLZ2bLdsufM3KvEh3xEYvE2nL4PojaFvHP2aRJZNc2jxojEqfBEq7dLZ6pa9vwHgqj5",
  "key39": "3WmJKBBEAgdacdvjF9oPf8F5RrV5eHqmG4cqGnzkA5qT3YZybVi7xoVPF7r3WRUPabmUy65oNgBubQRpt7NFh1kr",
  "key40": "62JC8dYjD2Lq4V8VSfnUPmNdHmiVdtj3uiJLRVHhZ36rbJGrvaqukqvna14iWQVw4iTUCPzcG6nXKEDBsxz5v3aA",
  "key41": "57pKWzZjdKstWW2kj59YBDgSaDtSq4yT1s7PRjwHy4bJiD4DX9dFhgMZyj8SKYhhriPtvD6rwD8uwybFgrUrPhwR",
  "key42": "5rvsvQPjMpkBwqeubgxNHcEqdxkvZmaaBXyKrfGrJW4RS6QooLhrfzc9xPNHA4oYX1dd6uBR9xF6QioPL2fXPsBc",
  "key43": "W8EjMp4SLt2sVQwTcQFTqevA9UftGsYgcyFVPuxPxmcrYWzgQpT8WbK5sn3BSZH34BxNLFkeBSQRJohga6uCpUU",
  "key44": "p7Cn4JXWP86XA1vAKNs63w2qBoYNJvXjNiMZMCeMjvu83EQ7dQgreTV7mqzcZmjCoJDTyJ5RCA5SsfTNnomGtAG",
  "key45": "5VfZuNYCCunpWqXmsZJzo4BPzLC4fWQaqze7q831Zkke2Sk1DPzukfVtxdYJ4X68K5Rox82AxmhhS31fqQQbqV9r",
  "key46": "3cW51ktrRVBvy2RcwJMqciBDLgjEV3KEVwSBQ6MBdrGxVHHsXTSSaF3kQDkG2nTLEyJXXUwdoM84SaZwEd6Tr2SS"
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
