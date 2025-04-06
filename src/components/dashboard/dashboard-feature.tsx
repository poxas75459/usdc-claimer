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
    "4WjL3zRhZUHuMk1REHBsoMFEj3JD5kxykBz7KzyYXjX6zRwWLCoMcZxbQuxPz3PKGnYZAe1xE8wyn5mgaKBXRwJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FhgrRHFzMM3p5qNCCeqSFYF3WFQN7ad7uxh9QbC8dEjuUBNy92ETiVWDhFZQfgPqnzhKwX2wVLKnMBdWhDA2MuJ",
  "key1": "3JfaEYzTbV8oCw959hzAAkRmdoPgecb9TvTKyJWn6RVuJwB8Ej5wzYaDtYZBP9Fiv8Bghto4qX6ZXXFW5GGY9TuU",
  "key2": "5tJbDxsNLgLnWkWqRi3Ykd29QUwa3g8iup6q8W5wmGuoexZXU9EQMd8gRB39UPEmFZR5PoGoitjqB51mtnxMyccL",
  "key3": "3undBVAstYS1iHXmoLdR7GPpQAytdhNHGHdEDwsqh5agyJNAUqXYniqBWourKYm5J7qmUaSwHqKUuvtW7JS9GM36",
  "key4": "3EXxHagY6Fv8fqghg9MZ77iNWZe6gddYDoN1xhDr4gh3mi7PQcrFX6rzNpaRrEh69MwVCugQLY8EN5pUyLci1oJ6",
  "key5": "3Vqz9fAEUb4qvSmn1ZgyuNmAxoetCrLqQtJjQASCRrZznfcbUPyYpKwyVfo2yfLUwmN9dbtojCP9egaHy8NuJEVG",
  "key6": "LLUebDqfi1fzm4yhzkbNGbrqBKWY3JZxEe2iwBYZU2bMZsyqfoe8VY7ZV13wHwaQr7g2gHtnr4PFmqXBr2BvbxV",
  "key7": "3BWizFETrYhWJatt6hEr4dBe3Sm6sBs9v86FJTe1rgpC27vR4w8XnqVjvPBfpTRvtFxrRbnQZE541C4PKC3kHo9i",
  "key8": "4BNCNan8YcUDJcoBfr7iyPknfkN3nK9vdb6nnL6L8FB5C2WH7WPqyZ1YGiwitr8UEXzMuzh9GnHss6qR8xjKHK8A",
  "key9": "5T4QkmfJnpRFkoSrL89zRbJ2b47f8mhFa5Tt7stPWZT47S7XhBUGdvJLPq4fezohocKpZwoMEJCDf2xqmLxvhtov",
  "key10": "3QJpEkJfKmnknqEVeEcVjrJmhXYBMrcnVodHsPWxpLGksBkTDBn2xtDBcLyCkUrVg6uiH1FcP4RVNXuw2pNZzwfk",
  "key11": "nievnjzUY8mSxF6kETnwZHVLsZLwn82w3oc3v6zekrpJm9h4JuhikgYoZWE1qSqP8Aexa3FAPLBkAeaMoez8htU",
  "key12": "2CqM648Da9kkyQi7ZpJKfH2HfoZC7w3ESNSA46dXa7d6FxBeHGRvcE3VcDqq1assEnS7YxozyUkJWke78iiV5Kjj",
  "key13": "VfFP46hb33KBuuM6337D5Ek5iupAzkLMWFxbvYmCotEnf4eKWsXHxJTbBhQG24Rqzf8S3iHyUJApkNwyZ4UWiqn",
  "key14": "48ZwiTiavboBkZ3zKWvKz7QJrHoASFfnAX7iH4t33DWPFhkMLiqYkTiMRBbQNcrg9nLcWQHtrboWJ4GV8HbnBNyM",
  "key15": "2HLJ1b9VzhHkKWhnthbcJLuWoYvXUdK6eMDHWSmFKr6sUHjA2SZu6Dy75wkeHubZ1VeFTPcmX23RagjyigD4X1tv",
  "key16": "zSJLerT1AYEE1DKdpU3XHs3MBhgQvazPp77tZNgMLxQRt1osndXf25C7WHeVUfRR2WLrEpFwae4htyc8NyR4yKC",
  "key17": "2c3HwRp8DRLpu8xiTj5QTcQu9V4eRsRAAMvq6a8FG2juYSNcSwpLTZuJoNT5Y3CGeSkHMNCAW3rve9RhRz3NPVr8",
  "key18": "2DrevmHNp1yzJ9SRbKxrYwa74dZ9s5JFTVvANiKAmvkLm7t98nvAWLjfrQyZRVbfzF911jwdqSMJNXQLjurJ8mW5",
  "key19": "3bAgwzWeD62wKbeQSdpAQ39wQhYBni53vfW1QzpKka9PAaV35F8SG6BMzugZvsnPL5qCU2sqjAY7d4bsY4gZWU2d",
  "key20": "2X8KRo97reWJp2UvxLcmQRpCTRRs4CWeqP7tEWxPRQaLhQ4bEHixhYuM5StyFdA8jjwckUQkN2wUDTkEbSHHoFFy",
  "key21": "3Rb9D6PfLz1CuaU1DvzzTNBevEWNn6QZFrtfzrCFWFRMSB3nuecmHGhLh4duq265fKcxECt4Nj5gsVgqt3KMjHTJ",
  "key22": "4SsWpmk891mm76naHJw475xDijgqpKE8nR5eqnMYPgTZC2LgD4djk8WSNNawCnWqWtjFFRk8r6ef2koG5ZtxucQX",
  "key23": "5b8Domj14DMuas3wtEHqrY2zxcPnMkhgaBQnUatKRzaqHKdJHugXaBjH7TuRdxK9we6NFbXk7JG9YBoN55ZBuQNY",
  "key24": "4bdxWdQoHjPMpGVPRRSYWX7nw93zgMUiXaZspHY5yrSSjnPyzbJ4E4wetQVyQLtHWmBrbnHn75RaLiDg8QjYvgNG",
  "key25": "3TETJHvpmt2w8WLsUaDnQNFq45YWbE6fiKCvj2iojB6Yd4KUaEnPMTkRs5yEumMg7XnZAaEToE6gbBoRCosUjB1x",
  "key26": "M93PHiVBWHpvupFibNvxcMH3oMCxQdZmqwu4eu8tjMLbmPQtifRZhiFSE8MmPLEojEouEza7aPHEHhDyY99NvT9",
  "key27": "5sZVFYoKZawgWydtKrNnbq3N9RR6FFuh6nbtsk6cMgUz4oPuhoFuwMaVt6FJewAU7sJCsmzsvs1tgZCjS5TpAAcN",
  "key28": "3ySyrwHZQyxj9WthXXJEogpuSDtP8XemhVV9rfauVwtbb3VWc6pgyuSa1AZDMDKmNp3M1JjyLyc5Kk8KCVwiXnCN",
  "key29": "65KrZXfshdQ6qWBKEGyw8nvtocvTAkPtGZDbpY7eUHNVxLXDeMB5pJRKoDo86EneSZrCizQ8ve7j5tSSS7Xiigxy",
  "key30": "5b69zAF9JU59tjmxLaSK21MtnGfFptkv6suxibzWe7o1xxiqR8tCjAAF6Z2Kmx2U8EyYaTPJ1iZJUkXTJ5rMJzyv",
  "key31": "29bZgfHxYwrFs1YTTu2aruvLbzp5ixS2mQFDTNJjAcyph9sShF4zeYHPVDrKrH46rFiTDpzA9nCveGvMhkt79ssT",
  "key32": "5LbYUCinofqUksBXis8VmhHVtRmrdotuWJGZ1L5X7cPRxUpkBcefabLhr79QVErbR7esSVScosv7p8wDERqDxPfJ",
  "key33": "VR9uDUwq7ByVcrgxfC89ez7fsfTAr4EkC1SznWDH9MrjXCgsQXDLXGhJoHDS6apv31grqm9WEB4TgU7SEQcLKsX",
  "key34": "5ZxbAHNTbUb86MtxfFvtxyumdDEnXmJhknwiWweTtfWcthwCGbvGepuw9KXYdCtHYXVukNd3q4tepWstgh8jMkyT",
  "key35": "5taj1CTXg5jWUD1ZSPMGdhihEkCfKfV2wsiEpHE7N2LdyZQBXBZvg1weymZFXVuS3hoYwQJfwAD7wxXEeVRKCsSY",
  "key36": "3x5yq5YwnUK4gUrvtZBEH2MZtdV8NqwRYAHNtG9s7sSH11b5P262sEb1EG8pY1WMkGid5yNgvmxBcDQ9raiKNX2M",
  "key37": "2uP63q9UjbNJV5cE2H9KpkyryWmAN6Xcziu6XvAQfGMbFWbKenbuBAaXqAHjycJVjZo4HgzQ7i8HPMtAKDQ5D1tN",
  "key38": "kGgddW8xreSuu7ZS3Yu2AXHHaGUe3tTztdHuLDSSW2pMZUxu17ZpCckL8yhNfQ9JgDY6Vi5c1VRbZBLHmCtm2TB",
  "key39": "3ScFCnzzrmNCh7siQufJGXtNdJnWP2VMz2ZN6BXF8vdkBH6F4bjh3b7urPmqK2NwRE8GMdthYaC3qnsPb6jr1EXW",
  "key40": "5Dr4myCNWaLwPWmbh71wtTyES1GjWam2gr1oM52Ahjh9Bx8V2GYs5B3eqZnXhEYSjUxxXyh7gxQaXyE2YzYWVRn9",
  "key41": "ExKg6tCQXxrydvN6y6ttE3e81zrTVcLpSWLiUexhRmHnENDes5VNVMTzxWAfCPGEsxQX91ZeePqsC719qdWG6f6",
  "key42": "43Kwj89zH2oyGkz1kf2UDiueVjW6kZjhc4HNpHE4nr6Sz1hgEUD3YCeTYB1ng9P5j2vewesD9xZhjBojhmGHiJqv",
  "key43": "4odubgQ5ncAhpGNycuceAG5yaywShYzfRu9RDaQH1T6vxVBdAqHFC1aidsDuSPLB1m3CT53fHCrrhKtDBn13XFYR",
  "key44": "56EWVZ155RASKB17AUaTJHfoPB5M7UiW5ekzfBvyY4fBZYdmBmKiv8MziHVhgBcVC8UssWvD8TokbFKA6DZi1osw",
  "key45": "4NQXsekdE55SMDQJwv6h4nLWLsEHnbiZRnfmxxqiv41uVK5ft1eLk3nPhZz4Nes8S3PddpzB7AfFr4fWiJ48Ku7i",
  "key46": "52aus3hRw6K2J2uVdhgDdzcSi9QYh6GjcHXXW8BnGs562LRPPZ7s9PNSd7j6AN3Gm55ca9x7SGLVvWCGmbAFRCX9",
  "key47": "3QFtun6QnPNcMxocH3jWkue8L6zPLAAPGurZ2UCeXKmpxcCJK1ok4Rk1gJVSXdWBXxwJKWYXxRvF9QDprceSNvx7"
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
