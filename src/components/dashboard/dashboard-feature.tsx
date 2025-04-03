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
    "5yvnQAkBhwaKy8V8HxhJGGpUfyGGwS3kmWzwcRFFPE4G6obg9poCrnaDT28RbUxhdry7r7c6W2thrVXDRtsZNgJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FxtqvBXfdmiNoTzjbvv7BKP2n5dr3PiiDbii2G9mi1Rwjcj68tvnMW3UhiEDMNMhU63hAVBLnQndmCmQtaHHpki",
  "key1": "g8rm7QtteqB3s3Kyc9B8j893MWUpi5NFcbWwSXjzjjUyJCGirDrigNAKJjZeQN8YSM3e26j8XcuCFEgaj4fFoKW",
  "key2": "dT5SCg19uRHtFHoY2u4P8TFgQjr643nkGLdUGUKskeYynuKqWfyND24GnC4a6gnDVD1mHUXZRhZ2gUP5n5b7f95",
  "key3": "2ehNVWqnyH1zVqG8AQ54PxZ6wXY31vyvEho6QiVfArg3mPR3FkG3ovi7b5hU3vz44kyNnVscR2fnWDeSPdn3FjV7",
  "key4": "2SiZDKgBVHkkXce5rV2g8mHtvqQgJTAATm1KBpb4vjpjHCkmckmnyDw5wYreKVsiZtxUkvqEWiD4bHZWXCqJbBzq",
  "key5": "qTbGxQxoRzfgs9DQgMo4fnVhJBwMb1wQLMXyCmuTJDXrktmzyDnWkyV73wvg2u98UKzyS7yKEvsuWkkPfM2oqSz",
  "key6": "2bJbjNr7Nf1qMjnPWGa2grFpKfdDVXojtsrwQFdwohMzGjqUe9epiYcWDdYFY6VEG4K3qkrSq52tjiRWv1zd4N2X",
  "key7": "xLwTmWeSNkZKyK3bqpRVnWgY2PWE91wS4ABFK97eyK1s1emiHKSmntWUg1WcvHqq51D6AitURPc68ogwvidTRgs",
  "key8": "5oxppVNnvZUCFGx3cxUeQDzVUBchn8wmuYqVskPyLcWNwsr4kgufMsJaEvQgWBqhG7TQ7pcDTaH8pjCbazo3WDwD",
  "key9": "4n7fKPiZPkxiA38JgMDgSYjJ1CQefvp4nxw9RQbjfyuygqKiGaU15R3Es6iReDxwEknCsJk9zkqANUGbfnVzn4NL",
  "key10": "5x4HjjmTuWZkcywt9pCxrW9qwnz48JCGm8aCShR1CUFRyC9hU2QQMkwfnf89YhAKfocMrMtGa4abAmww9uUrgzFL",
  "key11": "tnt5HXRtytJXVB29R4KAeneZYu3geBcsjSDsMwPPdpYcVpbpiKnJU52zzCGasQsTpT327Z2R9Rd5zTaR5T9cnic",
  "key12": "57oFS6HY1smuV944eL8gxE2zVwQ1Fb9iaRjQHzdEPfGkggmWmegzCMTzdLUM4xEL58pmCnANXrCzH5zeYfMm7G8k",
  "key13": "58kUkBmVBofks1Y43yyiwQGUfotYYZYKQmixnwyM2nbR7VkVPUrwtfiPPgAFeaehN4eefbfP4jvsxFgDToEh43Su",
  "key14": "2cpqiSeFB6ubxYnabjrmskj3x6c8b49BKYeK37NThDV8VeCnbvwT75EmzdNAkEAqkXin7BtkrnP1ZQnNWXcdwgGH",
  "key15": "3kMsPJUJ5D81b2LeGtoYTxE7j32H2rpBYuQAaeJmxxpLmJRmZ1YUZyFqQK2RKe9UYR9iBfMzGGUpPCmKr91zGjai",
  "key16": "2et4uWu5R6jerc3ueGUKWqTj8Rn23dTJ5vZUmnqCtwxC8qL4nmqwUEC3n44nh24mnYhtizkGCjjizUQGcrK76YH4",
  "key17": "2smyL6WdQHyMNW99mWvAMy6nzkUwDQmPQFDtXTvFw94185SGAeE6CaUew2GX9fba28HbWwu4GFRLbnuCncnPJEZk",
  "key18": "BrqSiCn7ZfVX2381JKnn41ZxCKy9zGkxcCrg813xYX9zvPvYybSJHNFo7ztnVPs7MJgJSzW6gjRzDaF6FoeweDr",
  "key19": "67PVPWE5rvq5iYXzbGqZqeNkYFKR1vPakvbTDnBEDFAA5Q944NLLjmhaV2kwFTU9aUkh94eRn3L4MPBnD2mxrS1m",
  "key20": "4tLEW1aGmf7fPcQrzsTRnPaJiwpqdAYzvYd6iFew7JDjagPCUNcBQuyHLvhoEK6rBrWwFzaa9tmBa7vTfsWUdFEs",
  "key21": "679JhRrifHWeXU6SxzSEkSzf5FLLLWnei523pZW8t8bbutUp4zPLg9SANoBbk3oKmX61NMLyKBi1eqoxXfmW765Q",
  "key22": "5LbERiKXND5ZwMcZ6wbLrEhWQgSu4gLiEu6HTkKPdjezK4LfDoByLePAnMfaVjwBi3yM3Y4Lh5e7w2LMkh6XBwmA",
  "key23": "362XeQFa3YFKpDHtdng58e25J6YDYjaSXm9Ra9AQ5nR5SNXWRM9SAWHPkSgZEWpjJoXxPZBF9iK4wNN3AvzeF9YA",
  "key24": "2SJ8svRrFGtrCD4p2kdCteQMEaQz65UwuVqwaom6aSybhzvUJAjbey6r8bian4LGHZ7qjf5zzWE5nY6FtsviF7DQ",
  "key25": "44KR7cMKf1KbV58PojFqNr8e3sJdsJBoGhRxyMdK2gLqTEey6sHEwNK8QUVNK4jRFK8r6Supj5bYNt1MMxZ5RR9a",
  "key26": "3YjaJrLsUPeQSyBhWgq4KLVHPKhnEk1QApuiLgydsfTu61s7c2x8hSwQZkSB4KXS6UoisRiTsa7qpbir5K2ADJy1",
  "key27": "46dVpqcP3khL6HkmDB1jzpxFuXUf5HaL2AXpVwmB6QPm4hkaJDK9rAPaV4e6LfCBCZNMvEziWSfd4KQgabNMuGiz",
  "key28": "5MKLjX6NCPDPcZy2phyMav7fkQbk13Navm3k2dWLBYVaH5TKnFEHend1b1LMQWZLFaqD5zGeqn9LGaDmVB6kT3u6",
  "key29": "5FGWBk6rRjYhMPoV6iwy34gb27h7FKp2uJMoDLgtPqAgqHXGyyBZ2ebJLbKiNMRsSQDzsM54UgQYNYNCTg8xqumG",
  "key30": "4YDZ2YP1urgEQNUB5vN6CbJMAfgnkqaf3hwHKsh4DdRmVz1Pr4f4DQ9tbRgNgHFFbEzeSH7YNuGnPW3CcryLSDLx",
  "key31": "45DdXEAskm4DgSue3FLpdYcBqcGhsZifK5eUHebskXuywHZWWP4RE4cCDUvMJtnMYi5GDpkitNuaQcnf4gvYbDqa",
  "key32": "5Q2Zx56jeNpwHgQEjuu7RuFMc7gWZZQHtPoz2dDDaGNktDR8KEdL3dEJPK1oZFw1n379aKCLw4KsuKobanKK8517",
  "key33": "3WGmmkjN4ZC5MrwLNEL5gJUw6KqYXqq5SCpL3NVhM4vpM41oSvmbi2yEszfrJ3daLR4CL7nHMs7Ljxk5U1AWftPs",
  "key34": "jwXdcirewrDR4mkaty5UzcKaV7kvh8WkwWpgNK1FvsYFLRcN6vyjq3hGsMaJnVFVSYsLJWzN32txbwxqR6YTsYv",
  "key35": "5kDbTraWZfck4K6Z8wwCQBy8G6GA2D4MpG4acNbwHKAkzLsbwhBTJ63iGJGHtDv3HGUJKakm5qAdyLsKJdNf37S",
  "key36": "4bxbTpFm2LyHAxCd2iwyupdHnanm7TvVmpBydz37AxsZE8UEYHNXvPSPwxNFrCyS9StJp3X4vJZ1yxjKhvGaG8eH",
  "key37": "2FacF764H8wQmzopzTAJmcqKRcc3ZWyqQvKkjBqZ9AUwdPSwxhT2fabCqo5uvM2asKZVCxvcctRon7kdy3fHkGiK",
  "key38": "5jmAQ6UKKLe9RPtgxSuScruGmBJ1qgN9gbgeb6YnsydqsRnfmfXUe5XQmkEr2CZQNXtnLbE55E1GvpFBS8kkhVWG",
  "key39": "Uhe9U1DrdvNT5W9PN688h2eoiYrHPjSyehAAJzXGe1LckNQEcGw9LzBXvZjQkfaPP1Rta4kUaTxBgZp6kRSZSLw",
  "key40": "Ujmrhcw2xWqQY2zQJSpPAzyeukg6D2g2fDf4SsZVxmBWsPZmwYurAfgKNxLpYM6scPoJgDHHtCdpHp9wLC5JvLw",
  "key41": "3S4Nyq7FSG7DNwbjapmuLnZyCrPuGpq2L3ME6osAWaKk4RaY4RmsGY7LmYNkqtLkKY8D7EYMDCfe162qXhZhGLg8",
  "key42": "5yZsaduZasQ5BiV5BLYB5BsJMrDV2sAbAHfkVD6734ZqmhPrLfgUrc9NrhchdBkKTNKdfrgQMNmhPdjfSDq6vT7M",
  "key43": "339WC2i8xpiH2P6H8kJU2wvtJrFmxVJSbZZZyyaTPGhgMRi6b7UJgpycZBSSd1JkkEirWvcvuFFVeiMdQX9ZT1z",
  "key44": "po5srcB8mvWjP1C57JG8Lm4yAsLXcoeqsJabrNgxMMjtjX3TKZNYo5Bu2ovJhbYgeh3bbkTvpuLcYcXBnwwmVeN",
  "key45": "31YLDjDXZ2gJ1HRTYLvNW3sGB84PRGmTNDwb3WVxV3VnWwVf7dpaT9ziExWggxchQHv6r63U99MDqFCsWmjWeetV",
  "key46": "2jjuPdnhx2F5kyqhLn4y62Q2X7T278W5rqiWxRy7EWX7BRiCABajdU7kzyzspGnLeZjqj2SRnpkRE3LRsoVHTiAu",
  "key47": "5xw3cv5XrnLb1ZxcdwcRDRtHuJzdydCWPumFPhuQsfmKk1xnS4PEYcLjfBqsFjhMaaKHUBBdaKHcwgjWWYv1hZ6p",
  "key48": "x2EjZhwPqSB8ZNT9oino9EDZVrxN5o5ro7iP67WS9W5zamk55D7B5p3rXKKNBrYW2a4E185HXweMn3E1dYX15cK",
  "key49": "4J8WfYowQAxTFBXT69KzAD29QwzRcJbaPD75r7r2VQMf76Nh6dxQdUARHvBESRV6aid2gFysUU29JaqZbxguTKoQ"
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
