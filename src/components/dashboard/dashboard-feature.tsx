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
    "3S8tz6uU3pLv7sxekwVtndHZbqP1RoWisjeakWucTLztMiK3g9Nmgs49J9y8yky8nZaCbRL3kZ2Yq5V2AW14ceDD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jHAqCzvwjD1mEuaqRCessph2tYTNuGZejBhrcbMTwfYxXpQAWJwUeQ23guTTn3AAsqm52yQ1UPRf12UGBj7kFSK",
  "key1": "58dpo5sGAEj5zuozAgwbjrrFiUiN4Hg9Lo9iHZayEXRAFkJvx8H61XJiR9puL5uGoHNzxSqBnoahDtBqYHNCmKRZ",
  "key2": "4XXR1MLZNA2dLfShpXDdjjPmXr5RdVL6Jak1KgEMSZ6u5VzRXyVzjcn4aewBs9oGjcSx3gaXxZ6PGg1PRCBnjtgn",
  "key3": "2s1xWiDvWrhBRfWSWBMnQuZZyJVjRMjbtzp3qUA8CCrRhE8JVAzXFanjr4C6jPwjQDhYS21TvfF8oRGCw9wgQuPh",
  "key4": "278oAAP5wABzRuZp2ZhygrmQH6cWWNqKKhPDBJPHvR2UMvc8ceaLtKBVapAjFUr2s6pgy3tkA3azqRXxvuU7n6rv",
  "key5": "3QsSFq2285T3d2xXBkY9hHXqHwrBcMJhYwxNf69TiRe8rbN67S5X4EjeGf1pSxpAPZgp5wnJC6mBkpfPkqKncjoT",
  "key6": "4Zcx5ePT2N2qYvtsBcUVrVMf9fKxnEVZUMUZTGSJBK99gKutUQ4iJKdj8qSPGwKhRuyYAgsLfqr1myxUvyGPgVTJ",
  "key7": "5GKo1o8DqGQ1us7LN9GUAmsfSnqy1yBrJsiiU7tJjTAnXy2NoXGu3EWozVYY6sr2qUG62DLY8diQJzQptaQo2bQp",
  "key8": "ysD4UZtqPekMDXgTGawgSF8g7ZkXxqWrxXuytYid3yTdSqubyqpT5peTjWguU5b2UGL2FYKYk17LQEzGi5dRYbk",
  "key9": "zNUwXLGYsPVXR2DAU8kPh12241WZRvRf5Y1Ar3ixgK8SD8aENkYMLJhuSJvC4SoUdgugTZyY7C4CDfD4tnSDzNx",
  "key10": "3fDKkjbadzj1Quat6q7vXy6KR5q2mQsQZ88H1fHD4HiAggFSvzFtRbJk1eB6s5eCkFZZpyTGqxALCLqbvhrg3cs2",
  "key11": "2igsDz4zfbWtMKrGNt5HgLvuhSY71LvXn122LhENXYRj53ixM1dZ1dJeoWfvu9Tdqt4DGPs1tVMvwf3Lw5HVBdNV",
  "key12": "4RU1kaRu2AEpvsyCWRenj61KPehDAreMgPy44MnuztYrviKZaJqYwgdqgijsq95qpYjHmKdmYgqqfK79A5cRQYUu",
  "key13": "63oRbEc8cjjjZV9Kqc5DnarNUk18BvjtXPJjjEoX3Aps73f6g1m6m3EoQKH1tULPFJWBioApugwkHP6aisXMZ8YL",
  "key14": "4HWLDThJUSz3N72Mow9VCPc4Qc4vtfHdC37GSPc5CUZ6is6iRtBbmE6eiXAVfXc8vEG6sNiFMTaWRxpL7nCCJZjs",
  "key15": "5LRtrg9QNFA4HpbpDq2EvqYt3zL4j8WG7xx1AsXEbPUvfr4qudgYbMPiA6zCqRaJ254XmQtbsLJJsz8Stp8T7xHU",
  "key16": "1SqpB1QuSfQAjWgc7XbzWfc7Dpj8qaoCHN7xwg1ctGsNVqL9aoMcVPpUMqpSzFGPkNzjYWAnYiChzeZnwZymsoJ",
  "key17": "3JV4gVwnJeFP1qPmakFxd8Nxd8PjZaxnfqRFMZ5SHD2zDFbuMEqBHqz9otJyaanejF6M6a3rdmBgNkj33DXWEewd",
  "key18": "3Jo7fpHYsur3LMEAekL5i3YqQchoftf8cHNPVEozLCb1eoc8syYKXQ4HqMBgyuA96rPMKwKhU28hdbTt5AJus8Ew",
  "key19": "4KHQDcT7EXbU3LTH1E8XnyMaWtUeWNz9mU1hBF7pJPNNXW1rLHr8jAGHYm1LJ1HVNx7rkRW8SnzJCghk8gkP91VS",
  "key20": "2tSFAZCxNTd7BeB1kTaNoasR9WAnc1ex5hk9RMTSsUPe8co7u5YrcV5171bXxf2iVvBGbiqXWTwVv8tGDXC8mCfz",
  "key21": "2pRSWFJxuoTgWFep7mXmML2ne6AzBHACghEGcSP9Ztqxbojez9G6eBYSdHsFmHEvtV7Lwz3Bxq8Wfdy7p9xbRtWM",
  "key22": "ZnymvXD8q5QLRUFskbKUdW54NLFzfyTkBDsgpBRqGYb4XnUmS6mHxCFAWd2Tt5s9znMEAqSjcrSnrtFFEDkxA9Y",
  "key23": "5GXAc2VsVan16X8kEMZxWYaRpcewgRacYYzPkqF7pTGAGkZV3zTKREwzChtANzZK7954isXbeoeZNc1oZys3M9Zf",
  "key24": "4dajwtoJsb1khK7fXbttjunN97sRP2zLphGkpVa6iMtMmAGxEwbJeY9rckEzj4MLPsLQe8PtSyyZBXEpsNR8ShfN",
  "key25": "4shNfVPrthHQyK1GPAGJJLqzdf7epzWuxBnLvtaTEHN8CRmF3opKCLb7kN8nNqQUN7Lwa2a2uQxvPHh4WELjRvaK",
  "key26": "2r67zhcmzjwaB1FnqKyjWKTgh7TCPq3p3oQxucsEubQ8VbjTbNssAwr9dtyJHPoKaQy2YAupMsoS7xaJgL4pq48y",
  "key27": "zgZJEaMJbSfCh9mBqRKTVrWaF3oY2qSCTdZQoDibgedmWr18atHSDJFWkLDGUVEEjcPiR3tDFwcGKPBft3YeGPU",
  "key28": "3ur1wvFmTbCkDHmnKjhrnSE2mB6ioogpZYp3ZnmwPGKMQ9jcUmUDSyymevHipGWgXqRNMD8UbC7huVp22orUhpnN",
  "key29": "3u4QvgTxFymnN5jSK2mfiRdTMzX3gYzbDLqX5QYRrxFYaEKKi3ZA2Ffmge7pafiYdmR1itc6cPpCXWVcBUEgcWoQ",
  "key30": "5VzKfos1HqTgpzJNZjrBPdCC7AHi71LdxC6FrWVGBRXrmcc9RFnWduTJ2zGr1d8qZovyPw6KLjEZoUXgintsBkaj",
  "key31": "5b6HiF9vopsMkNp9MefXminabeeUbprP4LaAdpbH3Zy2z6S3z635uFueotkho8ZG8u7C2Mx7ySTTBjsVo8cFkTWC",
  "key32": "2poCk2USjLZ4Urh7c7cqNETyqqu7y6foLzi95tDguDnoy5V7ZqzDWXVWKntNohHk14cU1tp9ZYhx2xD5tHfxoqfj",
  "key33": "26DrVifWsHHhDSmzH8KLkLTh8nuop2cyaR8371jpUzKZXga3qtqbGxzkj4ropjngD5Dhq9BHesRVXNRZfMU3JD2H",
  "key34": "4sgUZ4vQXhFJ5EnvaJxK4VY5NkmNy46KGNKryHEREH6V6NMdcvLmT5f6NgvZn8aqj3w7agZ1qzrgBJTFHsMLFEfH",
  "key35": "2FxrTHDZAxr4cEsr2Z1wFfy4abXdZK1yAASe9sJC637WHugTdyuof9wJgSTubCLsHPiKBsVFRLbbTfQwhPHSr57z",
  "key36": "5zx7L4nX2BfiVqegF9sb6oqGgX7CchLosty8fQ8gAeyh73ScUJc2WjB2zvEK4hCwnAQgNHtvosEdXn1X53ULCneH",
  "key37": "22DAvMNWgxjJrCiBLAMqEpbQqt4W6USzs96MYosc6sYbTME1S3XkJAyQDRB2uipcTrUQTw2ZnfgmKaEYHMYkuqHS",
  "key38": "5tMMeix4KUEt4chQji1XCdkGKR6i7wM9zFsyT4ypfrXoPy8QWtgkaSRoonU2Xf6zaREyryuSA9W1onmymYnVu22P",
  "key39": "5tqVH6Cf9zaintBcGZRjsqcnZa8NVPxC4vaXBpfkiZpTTaxEaFC6EYsfsbREoZ32gqgkgNhBQTEbTVEiCsRe115Q",
  "key40": "5ZD5tc47t3MrHUHcmgQMdfvyC2WD8eWp6TkHcxq1fDAFb3GU53J1nuy1tiVRsLVsFwmPP4xnwV13uD8855t9mLqu",
  "key41": "4upESYSYdF28omVKHvvwvSq3SUbMBxcoKbTKt7k4LbRvEsBucbd6Bnf4DX2TE7TGyAs7kfkvmtYxgPvBMEzMyTFJ",
  "key42": "4yDj2nCgmfutSbdknpxpBeqUEgbKhWU1aNZ48MHtoaLafdtskyfWX9Qx5WEJ2s1jqrNoJvLrBrb6Q7TLYC1MhJ74",
  "key43": "5K8A5UgWmtKhzvqBNd3zcEYDVv1PZbcwcSRPeNEGHcs8TpJb37YwNB1EDZ9mPmsTv2949h2xKBvFpA61UQ8YDqKK",
  "key44": "4AVBKqMa9MVWgH5ruq23tCG4SGK9bibfTprocNvoqSEmgh5x3uTjwG76ZwcCDNmP3wy11cBhghQNSfBvvUe1LjL",
  "key45": "3EjmYDZxXYyYbLd8ypKrmvuzfp2TeTM92cjGp4fUDnA6JJMQLwj5HSQvvYM6MjEdbLLXRT6xbqam4iJSafXUmbqn",
  "key46": "26M6ScdYu2ZgWvsT7F3ooU1NRLE7gGp2gm9jE7PMbSNKj6ghe4wwk4MzxKbsvd2adGUQfJUurkgKb8zv72JZSXG1",
  "key47": "5CdVB6M4ey1kXxWxuididKW9fjSGuqjyWxP5AeMVhHpsbR42bBrJj6RxQhSwYDnBY9vZH9JCMG731R3aknrtXgn7",
  "key48": "26Q5pUtp73fxWcay3EYm6Pmx62ErVag45niekhsVeFuKz3nGQZh8NoCC7AKKqW9B8jRDJ4qYRo9G5hZuH5cQrCzM",
  "key49": "5u64qdP9jacNxtcVqhKBPesbFraQVPcnMR8s6dku1Jh6QDoWPaUzoUNgow66nQAG7se8Zs2g7BPqnPNghLLEW16B"
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
