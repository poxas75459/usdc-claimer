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
    "3rMw9MRdcGBy5Es3arknTAbY9AZZAi9WiMhGB1hdNof9LKQve7Axun8euLFx97iF6g8Gk2BwXEuERduBMZQezqDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bDGd3f2LTvsiXqPKYsRYGgqqnzXtJTwMdEDuf7gAEUjwaXpfszuNaj4RNUWFgpJAjjbvckhRFiw7fQzR8Q5kJ5y",
  "key1": "PptrQvBePxDEAxJHLs5xzoLcRjszMAEVmbmdXdx9AJTXxhyFmRraNULsscJmFZEwph2P6YGXWQFVjo5WwnzRF48",
  "key2": "6suu9eU95Umi68Ryk8Qu2ST1b5HyJQSqk8oh6gVaHdDzehGJboz9ZFZbQvWZfTntQnVSEWaJvGLeSDZ2MzxQAkX",
  "key3": "2htCJGLrbZcfHL9SwWgYPXEM61hA2b9BwpqHNQfAmsuCLKorMishBVWDbjtvXgsBRix6wRjSQKdzBQopwsXykhrK",
  "key4": "61NAwxeScFvXESe277yzqcE1is4yp9PpohUEkcTUhzkwqT2BAes1eAFeafgaf2tYoy68sdsosd3RM8vA1ptKsmXo",
  "key5": "5x2sMxnM4A6XVVKtRqeLyoZhLYj1roagGNsKWqFSZr6kKGuXdbXZxZ6dFc9cwx61fKpKi38rc9FD9vWvX4VukH49",
  "key6": "27RRynM4D9g6iTtcqxycfsVZi73V9jPaENUQeiPySSEubcot3oy3kXaNPp17kktRvZEqqd5cwTh7WxBYd1faAiwF",
  "key7": "4VdXPN3ZtQxSzTbxWnDiym5XcPcjn4P4ohhRftJSUQs1upp17x8K7Fs8kwNSyD68FqjF4C8aan57anphDKgyMYjf",
  "key8": "2ZHZqXM3muWV7Y32PFdncP9XqEcZe2jSFfE2ibLuHhRtjK8jxn3xYZ4ezGs5CF7ANQV4aXpqHrHLo4zStXpLXnDL",
  "key9": "3xyAco76gKGNZNN1cG6AtanvYrqvopeo8wQHjJwhSZZQYc4TtxiDJPcqkHmRS2ZsgpdmaC3Zz7qpRQP3xa3zoNpQ",
  "key10": "4cVUuaoY5nV8Wkh2ZbT3sKnVwMUuDgvyKL4o2w7vMziECmuW8GqgkRSsBd2xXSiTFatKLqsbLwvQtvXu1RZsg7RZ",
  "key11": "A7WpxRodGRVkDBSsg1Rj3e4GpPhjBov1jdVLSt4K2FcxUUyxeLPrbFPU1vbV5X4dKk63ssDEx2YQbMystRYMi8n",
  "key12": "3ivG1cXMptYw8fQ3eUDGqW4TwUbJNphhDbXfRchBSi4MPGfFueWQHvTzjLXkztrdX3AQDuZGQTCTRXPnbPFVocxZ",
  "key13": "5PLNKoDBbeoAsF2zE9WzwjMqTXfXWec6ikf8ZPcFh4japJBNsRR87vKHXyFSuRCJj4ieqVB3N3gqZAjCpXiXK5Md",
  "key14": "3nBvfmAqV3zLybKMfMTAk1GbZrWMeK5azfsQmvJe4Gxfoc7abmtU1n9n9GfVDqth8WUsPRU2osgj5Li19oimyC1o",
  "key15": "2FxYW7Li4qZVLv9GKS44XrVU9W8pYq8BzCxdRypiAxkZPJwam4CeSbVycJNvovDJEtbrmL9ktUJzHJYZmuZAArRp",
  "key16": "2iNV2wnfjoT4SWgyjvHRsskR1NiwYZgnjVvnHeK3k6e5bEngiizuuGfZxKtJ51EDnsf3VZNDaP8HCSbVgwXA3jrb",
  "key17": "6Zgmpekb9ipTgnJqHwTYJzXG4uenjqge2CmoR5NnBes6iWpTxRATHffEK8tr5iTHwVTrkydDp1gUHWeVqWLdXf7",
  "key18": "hksFg8Z5tSf6gtqGMoZzmpJwqRtNkXaDWumPv7d3raYHhkY7ZQoZ3Xq31jksPRRp67R2KtpLBvG4cwxEjdZdzqN",
  "key19": "272fewcQmLALLWqrmKuiyDQxzN7bAZ7b7MyhC7SUCQtAS5gH6QP2PWX41aMPD9fzojYBJKBJz4cW6LKci87rqsam",
  "key20": "nH12MvAfGVmZKzwRA4D92YLRPGaL3ZELTpiRSNN4kTmNUXAy5FuRcV1WrPJ3mRNhVpNh4C2agcsuFTyUBmYPhpH",
  "key21": "4KggiQFr9V5syZpkPQJM7n3YqxhW21mXGeFLNSp3XLWdgvWx7itqiJ27CBcYa3KACCtpzHpPjVZVWdRZuJqb5hbN",
  "key22": "5eNZVnw6A6BYhm5nxWkvkGNcnWjodh4ZPRsFqBYhLiuVaKVCHfuAMwuwVfTeP5xCgfDQmY7AebQPzKzytppfbqrR",
  "key23": "27wXHoFm6azx5osq3P218mvwPCDE2DBdHcpLvVotkFQndp5QYjwWnQAUiyMWShEAagpYxagfcGSYUHwsN4rTNRQ5",
  "key24": "43KgRqwSSsXNqSH66vmA6mMqt9KDskiGFr1osLt4x2LYppU5dMrLirADtXgvQuEaRgvuPuD6RPafnMR1BV18fDHU",
  "key25": "3a7nHWgX6CDrUdcNvnJiTzCRQ6Q1VoUw3G21bGzDtVtCEgAiQcMt7M56KP6RuWamhMSgPg6cYx2xcoDj5U6Byss7",
  "key26": "5fK4rLQsvhXLUYjotAcaYPxmw3S7hfAHd1uACBHJXPtAo8PikEUHYkogEsmghFFKbgeNA1ypaLZ7JHg6ug43s1io",
  "key27": "3UJpJnJjWkBBLHVZhc5wrX3wsLTUU2GiawcZZu2eYiD49RM7C9C29gUAqeN7yfv54tkHaDatcjbqhUsMgfmoAwJr",
  "key28": "kEr6juzNQU2d6HNqcqCdxWrPqc4D2Tr7pVwXgbw25VTCCyiQNnTjzxpnSG9k48StX5t7AKkrXA6JLCXHwhdw8ri",
  "key29": "5ci7yc8T7wVfjgGc9DvNtzSptsx7jDvpUV9NJCtgu5pQRKXGDTJEATG6xZJwCWKPiehJzpLraVPkqG8Q1VnDMTZG",
  "key30": "3i7JZDdbB18c7bAhudUUYpTiWiQxoqhwzu66phY2snzAyEW8oXnt49t5pJz6GeViW5zSoyMyi1LuT7aZEZcbctKF",
  "key31": "3vfAWMLtkwBw3vMXrch2oDNUXkyjr9Ftwd1Piu2RRDuTkX8KYczVDcVTrovU3uAXPbexg944FGYeAbgocyRCkR7U",
  "key32": "3bh7kPys4TGiQtmD5F3Jy7w3Stqy5bgTFeYm73xLtKA9Hc6Vz68zJwVoAwAjM8gDpMzyHvtXtMeVvhWkLDviqJyY",
  "key33": "4EfXgE5LEHSr4kAjsQ56RHd163pvPfYhVhGGZc6UAtbHGJNoz5XJTbEpEjkar3iPfJmUSRC3mG25Jx2gjPfYkaJh",
  "key34": "5FbJA7eeJqCqzbNWpP13RtX5eTgnh4bjwpgzPuwffEjKXRohscFgdrtBkJgSWjg5LAbQpRdJp4hNA6uaf4E7ziEs",
  "key35": "3JM8xGqQfv9YZQiKJGwUA6ksvGgx5MBDwAfPZZdzyCRnC89m8orAKzHgrgqGHMPWDiogXxGQX9Z3MtSnpL4VFb3T",
  "key36": "517neYqFbEgwXsPLEki1XddJ8f4wGz4bLzwkR54aYN1QmUsDXREyFomje9qAge3hmkocDjNX5xxKk26e9KuAHxcK",
  "key37": "5pEKmmoyzZ5Mowyuxa9fxnX3MZMc7B22U3qLefxgWZeP2jnCSjwLTNYxFY6reBDQbR8m6QcvNMXq8LD37yxvrDjK",
  "key38": "2vkYM7a7mXmRX8uMrfG8kqfnXVbja6PtqCYuzBoYQdYCNR36dQpiFDtuG1RJnHyWSe6z3jxxjtopPEH8xmAfEURM",
  "key39": "4LtSxYZfjcKxS8CvdJVFawywJyYySc8GLcqPDm5x3drkc6Ek9tatofXPKYLPWexL7iYEh19tXcWWxTGTBBQNhecP"
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
