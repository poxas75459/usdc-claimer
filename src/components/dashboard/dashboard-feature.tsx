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
    "2oJ4ma61qBNyUHuUM4obYtk8GQpmcYxiA8gGCqajwzNzZtS8UyyRaE4npFfgAX8WainonCDdZ1mbGhWtbszVAX4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "246M9utNh5xDgPQQPzPUJuq8AzhkZmF6eWvyG5PUL4XbWa6XmAXXjRcxsjKoibR3rC5J3Y5txVwsgrZTDKpja3LP",
  "key1": "2S9KdLQ4pXJmxuGW1r5TiMuuasZNJuKLysRy4ECLmq5h1gYBGpkaWkmNwNm8eRVYk6mMWHqFxDmQAL6kpGtfvQgr",
  "key2": "gFHwvwX3GcEJf8oaKKntpbpGAt8A6JJi9tEaJHpc95DFsGUdNP2QVSBMyhJLBPWQAZYj3jJBzsLQUZqP3nRUrqD",
  "key3": "4aE5HebjcAAZhKDx3kfgD5rbeEbzecGU4PDXhCoyitxrfUXQEjnQr9Cftmtcy7dopFZ5ttmGJxxokypYK2tLsFmn",
  "key4": "2HrX7nDhnV7ACzVWUi3S2z1sevvA1EijjyaHE54pBmtt7wyXChgfXQkGMubWTT3wyUSSr7D6Yjk1qfPaazjbB3hi",
  "key5": "246TjoXRgHdoDfkdXRHRBjXFo1uRdQ1nMy3ZfABo4FdrKJnLM2ZWCuwkuJeieAwJp255geRRmmskwym1FjUmCGRu",
  "key6": "4D9rvAgLaRrUaSsB1qgmWub3hDdgRcDkCkTBZn1YS5NkRyQZibXuWZjaFSwBUqcavrtfAGCHLYiRwjemGFrcJWtf",
  "key7": "aNfw6rF3BGKdNffrpxUTLnUq6Kq2bWWK5iMMjB1dbuijZU5LS23MkWRXRnw2tFBKb2CBAieCD1g6vtJK7PtV1oU",
  "key8": "61QLy3q6oano2HhyA5fWUkM7UT1HNbAVoqH3hdour7XYaWioxNd1s5bFuS6mv3HatzgLZvfapZ6NrpWdshkFzfPx",
  "key9": "Kr4mKNbRMTs2Lw2GY25iyaiwGg7ua541jdbKwp1v6UKQyEjivVJiPecbiGmWZcHndZG9Gs56nXfCXk2hfQkk8LX",
  "key10": "3tGsknkpV9eBbvYQ7wTrnw5T5RncGMvCstxr2omuJJDEhZ8b3u9cyj5AHDSoBhmT4UVqtxUs6457Lm4tCFn6ws7r",
  "key11": "3nv4FRzM2RCmygYA5wJJvwCWgKKhhFYT3jGtPvLkyDaWtVErAbejthr4SxNn1zdMawuYRdR7vZ9twc1ooxbAyYAT",
  "key12": "23U8pBMuekoJchBa5n4LLfUqMQJJmKZHxWqruwghy1fUDm27od4DQQVXQTSPAbU6GRYJsspHngttStDeDu3BSbBo",
  "key13": "5MY1nKcS5mC1CkWXS5jFMs8HyPrd7mdV6MtrWHtpbgNfikgJiHoCixgDYR3ZtyN2SccCbD8wcrKLivAExpSjz6XA",
  "key14": "43xpXmKei4RCuSYcBsGuc7fHjdCrJ5CpPu8nQZXnLhKGjBTrZQpSciSsZpUv4tapBhrCijP3Eu91ynUXokfXmQ8L",
  "key15": "3WHghzkgyQx5ngGtTw6sX5xYkSJAqcLcELvN5oYgtvPjZyBQjithjdCtnHH4NSx8WHyVGMAkfwWf8oDaJfxKtd4J",
  "key16": "3Cjhe7EjefJB6CmbBEXMzfq5qqPRJL8hFaG6kjDxaByNDvMBp5rdFcDHDmNRYp7M8ciiWDePde2TzXuCaH764fYK",
  "key17": "2i4JBjmMxuNv4W4Lo7L1usoZRkszNTJTaVFhvdxAELiDRqj7W7n1GgkfNdUPU9T5eDcMpbKFJaXuWW3LTox9mMte",
  "key18": "55ckVBZTyowuLnfpQEUzxhM6QTtCFTuA2RXavv2GCuS7mXspBgq5DWLbjjHqBicseKsoFHgdUBqE1dt6XB4xMDSd",
  "key19": "2fqY4vJs4RtNF6EgLg3MvFLgMoj29LzH5NH5sB38j716JpmzPiLzCsuvnYYhzTWDwPtVjLmZHApYTWUX8hJk1xci",
  "key20": "53gVShj2ogtkrTz2NysLiZMpR5tGXwp8P91eefioMufVhLqKEPtaLoCD8e4yKkQYyjDTtkxpqfv79FP1fASF9cEr",
  "key21": "5bjJwCkt25kSx3YHrKa4WLnRDukJPVzWxQG4MfHTL7NaXyBhocEkYKQ3bjjK2Z1v2SLDMfEgsXs9wJhJHvt3hUHA",
  "key22": "39guG4JTSbxTiHEQBSxrUgRPFKknWhYm17KGEbBYskWtEFrftTYgFTCmRv2TwP6voYSmajeWD35qDr93pFeu7vYb",
  "key23": "5KdheqR8CAeV4LASkojQTauuKbjrjeCsq6G9q8R44kX5EjDPvPBdDxUoh8QXN65YXPemt1eF5mpqDhL4XDGZHp85",
  "key24": "baxK9qUnoT1NixCg6z3cwXxUMFZutqY6Moh5Ea39DQp36niSF2V5rDMR7Eee5nYvD5iqbTMwFWjuma43NEoJUVx",
  "key25": "2x96CLifheG2Mf6iwEJAAbPihWEsjj3aoXhNZtsPYJUUHCojGA7T2sADD3RpbfwzpFFgxYP76pib8XsuG6YM3cSQ",
  "key26": "27CxcsV7aLgVJ5mR6cnEejQ2qn2TTsp8XSzySH4uPuqcqd6DUVChemyeUVsfARtX2vNnE68X67y4SXTRKJeU6Ec3",
  "key27": "66au7N3VxxgwrjgvAneqhMZV16pbLRqtQAZ5QzDfLi6ucR8cp4LHpJakgBrrxjJa3eu4BGhsoV896msJ8cm5Voap",
  "key28": "372LWxTxS8HgfFDnKCBbrBercV7mAXpLa4YB8TX4GXEqWgoxfL5T3iYmrUqLz7ZtTughd2CVPwDT9wEqvNKWP9Ci",
  "key29": "3LJp9998DakMqC8KxBeVi56sC7qXZ5eFzYhYPjoovHH3yiRkpkPHnwQ4898VLTwfkuvdfMaCsWb5YHiV589jhFHu",
  "key30": "5hyh6AYGQA1C2ARsEV2v7FwTPb1GEnmc3VVpcv1n5zub26Wt4171jmmPkvDBHSSD9GCmTXyCgt2WjHdZxFm2GrhV",
  "key31": "62Fk9JuQbHtYoEQ35MS6BM4biZwRrLDjZ6147hSGcQABXhjJgV2YmEgzP3XASSJYbxM9ND6j1Lmqg6J683kqCJU2",
  "key32": "r3ciXNyuFi8FkKWMX9bbJ7YzDFkD8tutpdbqWAQCdMwqcNUiHLah1iJad4qvGwxnQQR4j78KXQ9XwchaM5JEqR3",
  "key33": "MzCNrdeAPgjxi3y58jrjuPACgzMhZiAdDUAtpLHDLn3SZf3ZLrEi1Epafe22yRiDdNYGd173gYpqbHchTbCvPib",
  "key34": "5NChCNLa5YAQ1FbpkVLWFZSM9cE1c87Fi7q2zKiHWadx1cfByXxJWPPNSStryz4rieGqiMU5tjjPZtx8Dh7LzF57",
  "key35": "2vYRpPEbovifWheKd7irAq2Ryy8YorhmGZFmB1K94RRqMwypF85YW6UkSL9F7U75FCVgRYswCHJjLLPq9qaw9dSQ",
  "key36": "2B28pUwjB6SLSUPxdfKXPtJYZet5TtzdHiLzgw1k3E1SqUPishsvJ2fdRpPLL9CUeNvQ3wXNd3Pu6UYdwTz1JyTD",
  "key37": "5wLdubtgjdAj5UBpPWTM1KLe8LjJVvZGqroboAhXuZLHBRLswv2bYxG1EvMrGkiLSnCfWRxs7RDRNPkVBDQGByPx",
  "key38": "z6swuEwFvwsxkVyGMuK3wkJzXCHPYvmyF72NWMSbXWzE3jX3wVRpzm5qTJJE5TFCvLCbR4gFqsFt8W2JZKn6fTD"
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
