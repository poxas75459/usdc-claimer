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
    "2YPi5W88TndbHXZ1ZzA3gPSbNWFi3YbYsjzR4WkHp2SbXPgcWQtpLssXyw5q6PeJcixZHFKWZv2qeor5HC6toV7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nx3My4A8BE7DeKfXeMyaeUKEdCEfDyFr5StENRwThqrTTVqzThQKjWyWwyAaEJgVUUj25d7Exm5VShGSFrGD7mt",
  "key1": "vmwgdMB1GvJRbVRXR3XzzEcwHBWP91JeGKgkpju68k6cRSouxWe1TzurjMHYBQwod4os94n3oFrVYvTDYmzQAmM",
  "key2": "wgNufq9uSdsKro8ahqnwtXRoTAfkpiEXWN1C4AXuV4fW7bLi97tQ8zdtMz9dvoXCp5eyRAEfY3S21kRQdBNGLWi",
  "key3": "e1dGt6okLbTr9LFWHQ1UK2LWXpPqwEwUmFTE18nBBiqVK9EvXUYu3pBvFpSzHnazXoqHfghr2Jh7zMDH2HncJd1",
  "key4": "2QGuxpCbtWMb67i4CZpF4oi52BJnf3ndQ1ZM4V29t3xe4kdtPZVmiNjjXytoHzGKXrZ9DeZ1gJd3saLfiUfa6SVu",
  "key5": "2MpQ7gT6aG794UZxpUqAhKiGWZYLYwSRvVdzYcERnfsQ5sMayoEDtK52hUNNLQEjbEiQ3Vvv1zhmGZoDygcBHPpg",
  "key6": "2Z7FXRbMDiABkUZ95AK9S1Ks73v47pg4FnA3o1WUgwNsRFbu2geTftQShdTfJJftbuW9QWgj2gQY69xx6b2hZfCh",
  "key7": "39RZeswX6y898mvffhoxsr1wBe5nBmdMwqXu2WgbHuPWzih5jFtUrCwcHK1ASWDhhzw8isQG6Hr2v8ePFZCKLtez",
  "key8": "2dQN49YQKZHcLMWsLFrs6j3TRMM8Xuu5sCrE98sSmeiMd34kAxx5VzoBS6yakZgMntzzSaPwM5f6WxA4DCwrt1Dn",
  "key9": "2p3bnKhYQ2ArU6WTSj75dPqn15JG55Bd6LZ4DvMe6zuCA7qF7BBzRXDkqpKLjHrN7FHTzMw2PuX3U9PAActFV7t",
  "key10": "67DS73bNQJzaALWM3cibbLPhB6SjCyn6SSRMMxau3UD35ddW33ncFVpu6ZMfnHhiZCMNj6LVPRNS8XGQRhGrQgpQ",
  "key11": "4fSVTrpyT7cuzeRT9c52BYUriFw4V6VfhHrJDSMhpJ2ZZv3BkXbeB1abiKBPKdCLLqKranktFSVYWt7y1f5MXQSd",
  "key12": "B5tugZHNnyMNLLuXNLdsE1DXHS6XcVFUz32KShieFJ4fZsR5q7iHcgh4FPMRa57sCKSnj74X8AzstYKJT2BaP7g",
  "key13": "3jLnmHuJthhhvRmYMGqZqG7VfckjpHtAv7mNNHzXTG6LS4jDNqDQkz4iA5e9NGdcmDNkXKgoAxkq1Pr84cTGvTC6",
  "key14": "2EokgH8AJvrisGjKQQH26SB9jgaFzVkuB4DeHBUfbL4gqpJFctSDU7jK9VLRK6AWffKchdzkcKVimiqjhK7At1mF",
  "key15": "4s57YqbUWfenuf63uArNid5JmeYsLtjSueJ34FTdYAEx95vVyZpY8w7qsNKAf336a9p3q76A15YardzADjRG7ptB",
  "key16": "wWj8ZqzRm2FkxjLsrMyS6ViUpxdoRmAzg9XMd9weZfymvRx2RZxQhSsTiv8xarwLpQJ7geBu63KMhzpTVJRpS6M",
  "key17": "4QNzHN9fbKr3SytSVZBqu9rehLRgwfXUjb7SojSniFKqyqh37q5rzSENq2gSRvP812KXeYjboLmLWc2TUUNnsNXA",
  "key18": "3dTzd7s2FQTDrvnzma9hkMjw3aD6Cu26EeYXqR2f9N34VyP39BcvRk7zngzQdk13SmfpSWxSWTuABKayrUcVTxs7",
  "key19": "24jcWepvJvDGjZZMeSYvwe2YdMRKKVUuzHHtfeKrPfURyNKnDCVXdSc1MKEo4H3tB7fvRhqetHLUFJYZsZSJmVLN",
  "key20": "HdCmPXM35sS3NkigPUc77g8AVXE9jqinVDWvBSsSQChmdppH8b4xaA7d7JbLY435o1zdDNhYPvu2Som7AhBbGW1",
  "key21": "eoSTaU26Sx6WjpFBa9uS63PDTyv9W1KdeTUFwhnkMcDHcirZsUEbkDorGZrtY6heNPy9Riu2GfCkxGmQrWw7TxB",
  "key22": "5LNNssdEioPCXAum787HVF4VJZHv1vUKBv6UMU6CLT68JUEWSXm15PDsFiYacv1DQF2WBFhuvYJwa4PMTV4JuVSt",
  "key23": "3qQN6M9SFWikAjVbk3JUgibjtnydyicQpBCKTnNQESK3U5Lq3FxUpraQuELVXJJsMnwERbx1j6x3SXMBfBLaqzYo",
  "key24": "8xwsEjc86n6SPkD7EjvrCvvQn3PgSG9p3u5uMDqj1HYq1VjGwNv1ggMCyHMapLBwSPrdJWXApcU7jmH1oTU4H6a",
  "key25": "47Pe6FZ6oW86vXwefFFVai3igTkGUcW8cZ4RsvGZBu1W4iEaDy8eGsPC1MKAV1YhnLDfbGXjHcSFUa66CuiB6Kk4",
  "key26": "2XS6mF8jwqfGkX2UMHdwHWwTgWXgSJsFzk5iGXh7Zb833Sr84NEzL6MK3hMjyx7PsfhgGtbrMxuhwQwdTSjChtDk",
  "key27": "4sp3cfomC91zJ1WQE5vmmmxPXFR7yKSZvtuzK3Bpm5MbhrEEjv4LwtDsuM6rQ7fgpky7nXnzLf6fw7Z6RzgHG5hC",
  "key28": "3ik8irAdn1EvzxKMVEJC2Qkre4ZiYomucBC27eqwvfwucSLZq5Yw1ZiVEDX5UVjWcdZG9zF6T8q4fEhmgR93Psia",
  "key29": "4Pu7SVSpG5DpZnHqy2nCVZgGktVthPbaJidyredYujNoDokqTbG5Agc3ywCMcmtyfEpzqS25j2QtpETCgj9aVNNC",
  "key30": "2bQQzhhc8bJyyBwN2AS8ztkwY5mBaZphbMrWR1gbe6pUYzgSUi5ZzeqpJfb89eHt623iQyyuSXEqYTaM67PRAaf2",
  "key31": "4BtAK7YM1Gix6FmFWrxrY2pFpSmCVzpJc5wZ8qsZCPN7P7k7kvqQrrg14PhYuHZnBpVjVgc4XsX1944ceCwTnZ1U",
  "key32": "2FucQSFavY3JkKqMxpqQFx3kz22hD7uPq6mVNoZwJMFHosNL4kUTCyapLYoWtmLmXRGXssWgsCbd1FxAwsoQst1j",
  "key33": "3BHo4DE5TeaQ78w8qfYK9BnrVgZuVUun8kLtJk3kHPDq9L9tPLv2U5sazre9UD6CaFsaR4KH9LbWLuA689HVxYF3",
  "key34": "61WeR3tKE1A5LruL3vaXBWGLgRVpuYFmhJt5xiNrZx9qMgkWa6xwpGsPcwBp4jviWDmLQAdWWbQEu4qCu24U3Dha",
  "key35": "61wgKwsPAL7TRQeY9jcAs5jkwbcQJxpgFxTu2VecuLbnNTUJtUz6hxjouykA3jakS6XMNGgNzFP5PmX7QEyZkdb6",
  "key36": "3NqPesBBWvb7DXQEcXn584Pkv8VZBwAGnw34Tnou3jiUyJxxEEeBoGHDvKwaTe9Z9WshyTKMvE6k9YKwg5mCzHLw",
  "key37": "ypaTqRmMCtcdRPkbXu1tQ5CpBQc4QjttyjPyZjC88P5HaHESiDgyewt9dfwmpPTJ3hdNXrD5S2nYSftnocBXvKd",
  "key38": "5M8Jvw2UgL7pJvdSL3GfAp6eY5JUeUeQ8Q38VjRA3h9JiLYzmRJyXtZSN8F6A5AJWkri9PRxtixiVvDtRXqyHJr8",
  "key39": "61b15gbP5KVeFHd2R13dsoRAQftsBZGxUyP7SUKVUSrMHmfVFdDy3W811bB1sa2ju5Sdr9FqtNENLWXDnWtqdJEW",
  "key40": "3vtgxGurW5jM3jFXiUJepoFasyQdMYqLkhxi8XHzQZqyKC1obPvAT27Kg1r9wmcnMoH3jRmiDbLKDaqNuJUFnmbd",
  "key41": "YgG2kTrQRqJyCJmJEysYYMcy9wMJbcuxTxyKY1JKneedPWiL1JqCuAyLsbU5jRiyHbNfByYxBuPojGgzsTvK7AU",
  "key42": "2QCXkw1QeYE4dcusvaGP9xT6JPckjTihMvC5qht7M9z7Hqo7FPE7oB4gWEytkcp6W1thEBbwjgezp3v3JmeKuTQJ",
  "key43": "5zZBk3SMDAUpUyEcJE5pWAtcQLMLQzocFzSpbRHk9Mwzy72Gym5pyuFniVayyV5H6ZP4NGRdXJtZZ9PnGwxnByJf",
  "key44": "3sCgmA7zYLHdnYTu8ZZchfs6bSQe67GHXtfkvRi2ezbERtjLr5e43kRMuxVd8H5NhowoH7ftuWfUczP9rc3nbJ32"
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
