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
    "5ASSbqWCsGfhuTzCvFex8piX2Yv1eCfzTnCDVtXuSksnPk6eyDXsnnhTiGFDJ2m5rGChYuthEmt59KCrT4BvqtiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "unuJCvKrSXcb3kNb2AZBtiP4ustmcWyiWwRJ7Ks6Fpiooxr6suFEkQnQxZdEFBpABbUtKZfbmfTeGsLbwkSvZFr",
  "key1": "4pD2JyyzGK5BCRbaZhYi5ZLkpEuo6EKZdd3bvFY3MttihAyxqhoWC9zv94ydGqdj2a4ptFTS9coFfRcohaynNZjJ",
  "key2": "4NYkgnRy4hmjLshRuzLaGjFvApoeWQSNnMZijXmjRFvmCHixyMm3sKXxJ3ZzbwPiRqAvJzHbRsf5zsT2VB76NcaY",
  "key3": "4BbWYTPWhAp3tbeh5HWtGvdVku4jCFxhKDyg3FEqbQuHwsyLGCKs6kQXQTdnehBu62WZzZBkVNGjCMGEpBjXbtW6",
  "key4": "f9GmtoSZtGThKLdHNUDwBG4fnuzkxY356W46QZYsPmGBmhKS2sZbArPeWNyo88vWUzZAYtSUKJqT4isCbLLvBiv",
  "key5": "7CG7vn5dFzmLkK97BGT44PRG6dgJ4vfXCjWSkEBsrEof4o83sjR1HxZnXvQgBjdqd2Tc1brpdp8wjWPNzxSdYpF",
  "key6": "4YJv8U37uzHddBz28mVqJMB6UUrMtY8vtMrfMTL6DWQJqQ3adjpwLxMGzeYyFmdeHopVoKMBBXvBTMasba3ERLz5",
  "key7": "454zFYCZKJvUFrgZxajNy1js56hv5TBLBy7i8wVQZDfdxvtHJohEV7ETc8WWEzRuPe6AXAbtWrwqXBe4PbwWZG8w",
  "key8": "2C3LBV5CMw2hzZZ3uyZrXzNaFGWNwLgZjLzw3cxtpLHnPukjimUr2MM3CSFQ5jbjSvQeBcJmRAkuPmk5oA3xMT7f",
  "key9": "3HSV6A1Esqb7KsfRJZ8736L1bLA4RVpqBfvWPYEcu8L7AWivd184EmLJcKjjUWwUGPdw2YKSJ83iQAK4MDtvfRrz",
  "key10": "52txC2cXP6SQqhfxXHM9jHfaqa4kY6P54HJQL6Rqb81j898jQsgxLibyZSajHudWLpSQcunpGNuUPfZFw24ZY1rJ",
  "key11": "AovAf5rXaL8ddSMYk83rwLcjptFwRkzfPZnxR8ZWSKRXpnuSWeNfftMUWVvCpeCMEEXb19EPY6ZhEh9aEJvdyzR",
  "key12": "3H6KVqRQTRyL13komv5kHoK8k7Ce6Wiy49vnmse2JmaVSvJgJahr3aPc8HvwcYWtzrKtAtzmDHSGuzL2vtfEJ9i9",
  "key13": "KjTauicsjmgRhP9WrkdYf3ww8UgvjyW6vTEJYnr5RnUviQHFDqWYQ3akjgKFxGmguqLB7Fjn5GjA8nNqyrRw57u",
  "key14": "5EHrUiZ6GXKMAL5xbMrWHvHz2ryoXwqu5L2uccW7Nq3Yw7m9fz4UiYQSTnZwCzhRMTX7CT3NquE5czgBvbucYVPb",
  "key15": "2DJKApkN8NFv1e6xWs2RDq6HhyYGDPW8vYLqxRW7cr8dPNKbLQbojNW17u44rctwTrGAB4us6ujCLbu2zWFTb4Vn",
  "key16": "69XZxfK16jp3fKkK7XJUsSwRcckjdHDanYYzuyPwD869mjsoCpV4XC9V4D8hywNsTDVYWV95wZNSixWjat4WxiE",
  "key17": "3qUa4jd2FhjGNjH7cSNxkRrjr2MPwHLhhXRiAcgC8yC5Zmvpzw8ihjVwGTz2RLmLg6A4SpYXMDuETvooNQDVDntX",
  "key18": "LiS2MRhu1MJtZzhRAVSVcu89cbW3CZunUBvkdWkLcfjuZ6B2YwZXMSb4fiamowF3155vB6M6XRLN67DhdprZ63J",
  "key19": "5LGUd9AZm47fou8mD7zxufairtkRLqxeq48DBB5GvUYt93URRBptRM6Moc7Xvre8i4mjkdwUCLAc1hF4XxxUYw7w",
  "key20": "27Nb5TkXfyGPsoB6KzERaH4UAJn9LU9qCKAUWCyMw5vL8usU5cKXBRb8EzmPJ2FAgNiGv3hewyK8dpYSe3bRsTuv",
  "key21": "4MHmhTsXjA9aJx1YzjdGLvKBtpSCqJ8kUgr631SvDfmLPXYAkoikfTUgbn7SeJ3qMAuMg4Nz8uf4riHSChbkYiCQ",
  "key22": "4fqqzHfpJCYTLRzHQcuDPgQDgsVA8u5W8j5CRoGYAh7F6Y3WF5iaEXJN66ajSG4scn37EtAegSQnpP4nHGtqwZmE",
  "key23": "4iDEBmc1Gm1hjiNenoViHiJTXfNkgggazpkxfriZE3TVHmXp1tedUNWeEPf88wUZZaYa6HaaguU5PtYYxBCXMWtS",
  "key24": "2VZxnX2YC24TzTUR1cNfggRYjyu3ZjxrsBVSHz3z8gQQZMmLvLRgthH57cuAyUcHySUv6JC62jjZGxNWr6TpDcYD",
  "key25": "y8qhuBJeFgLv6EV8F42wXcBkpenApwVa3jnAhebiYRcfVWLqdT2wn4JSZZ2wvtecz2LX5N9tkb95myQnsuba9bS",
  "key26": "2hAxAUorkYB9YewgpQvSE92WZkP3Wq3aoc81kB7rhMBVwfPT5KCx5cHzwYXDj5eYpjYWDi9U7sNHxDTgc521WLCi",
  "key27": "5k39as9AKiZBQadMoX5pqBYgUEUsgAkdRmrKkWpRuL8Wu7sfAVhGFiqVPDguiuG9uUyoRm3MwZvPvJvjQohRYRqZ",
  "key28": "5sJPg8CemsxBpNf6dqgk6hZb8Vk6aAnt14NE2M7GXbbGvNHhA6Jrj8z4mFs6KXarjpxtUqa8fAuKvmHfQm4geKcy",
  "key29": "hKqzkWLrkc7XqBEQgPvYY6HZKCoR6SVKMfNiZdyXp4jkwASZHFp8YriG6qqiDxHhctXpqGP5aNZQW5vR9sqBzGN",
  "key30": "5iT97LKjYAFQ51u1bdtDF2sbss1VM6DAaQig1DmLHr9BGAFwHGBntiRCASyRHGJM9ybEvJVMB6QTEQFJN2w1irGs",
  "key31": "31h7i3tWftUDAYyaK2RHyJgVTrQFbn8TTj1P3MxU5MXKSu7p592xpVLxz79NK8m8jDeqGMy3pskJq4Q4yshhnvPd",
  "key32": "sX89bouJSW7sudyjENqFjxysSxeniptowzrGNZUxMwmuBxnn4bxwenRubSpq37ao36C7b9jXMEZh6WpgCbKGK3e",
  "key33": "3Z7iDn4mJLP5tnfAYRFByJSt4Jnuvb9MoJfhmph2YcvM5a4FD5MbqZPPTBRKFF3gutkCU8EHGVx7aBBfTNmrKvxk",
  "key34": "4Hz194kXvU2hXQLmTETJmrbcgQdVy8THMzQYjBsqvzbX7qPii6mwZ5B7d3YKkAetHy63FQyuYhEsRt7XMk99CHEm",
  "key35": "2YiSstW3hqYVzBT1mjnQyUoc5u5mFSp7iAnL2u5NHSFNBUdbMYnd7zKyAEEiWh9eNHwNxtFhcFTTT1gQ6ab1GBUk",
  "key36": "4dmCRQDfs5m1UTgoprC5WsULgHZkaEU7uEcHBU9Aqy665FHcfacNpfn5SfTDyWzJjg8nxrYokvAHjcKin7uwQ78U",
  "key37": "4ZSWLmZZfjRu2pGDNz3XQoQFg52JD3nND9mpzFVrfYSmvdjM2m4VnZ3jBYV3rVF8Z6woqBa4zQQ9gCy93dqDCKC",
  "key38": "4EysWqDrW9FvoYKWaWuBgSaJZmwtVr7hE1cxSxwqicPuUNjzKpN7ptMW96XLNryFUVj78vXCQN4z13RYDeVE2och",
  "key39": "4QsafUxXKMnb1DVwbJhGxH316Sb4J95Y4H8EG5JaUhR49ibt7CeJg5SGkbTb63po8VLunnBieo5XFWhxyw8uxpcK",
  "key40": "4vUUaMMGExU6BksbcZxZBfv3bubbzpHee7DfsvGqiK3gPDHYkMj5ueK9QHXDKmDenTE6Jpn11Xo4UPD8uKG1JW2a",
  "key41": "5EZTCgLdKMhrrZ8tCCHzz6wsiBJjNAbyXPZha3zAgQgivR8f5kgGpuoHA4M4nkt9tpxWVnV9vsb6RVaHzsqZhWQX",
  "key42": "3bvD67rUtubJCUX9quC7BJpnNzKvRPx5QnYw1Sw6WHQABDxCwpUSReFjy4PiCTxjfBfdsgq4X5aaxBtH268mFu2P",
  "key43": "59T39z5zsx1zpDfpTjbz3b1NQA8CSFR4ANk9v8C1s15rnZZPkk1kzvVKtRbVmGdnbP8pcUywSphp6zaSA2YKEtG4",
  "key44": "2cEMKuZFETtYeLKoC8DtYEeCVZjqp5rBTDvpBjQBo4J8Pa4G3qCTHCiRLK94rurGeJfRWCX3pVg5JtbeReZGksg7",
  "key45": "3RtuZ3pmAgHPWfXGvQTqokg4NkjvnGyzCC31QMdSN3ktsMneK9srEvTqsW3Jokz9k4yR7bWK1FdoFQWKWVufsLQq",
  "key46": "5RvwBWhhZ9XpkhQspiyFFw1N5NYwDYxKJpykD5yHPYaoUtXr76tiuRSYXTqvKyQfLtoB1Z3mKos4ch3KhMUk2t7S"
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
