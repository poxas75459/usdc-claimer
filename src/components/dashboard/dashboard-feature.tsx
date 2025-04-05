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
    "5rE98vg4zW9cnvsUVagrPHTZ6uFdfq93iVzHthAsUCYCxpfGyygPA9YAZwJDJfen6jUZZ3ktZpKamd25o1hXQarb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uJ4y5qraXWa6bvKiLtD1itwopPeEXT7h1d21hFzYzDQwuGZYckKA4KcDfX8TqSLj5bWzDmheqAybKrA5KKWBNKT",
  "key1": "5PFhB27689rtDCMgM564SRyKrm7TuZPYGeqvrQpSC8fVFumC3SdeVBnEgwuBdCSFauHgC4QN9pAqHn5avP3My9X1",
  "key2": "22NCWSXCsEcaDTk9E6kumy9po9TrfvjAUu1RtW53QagBhx8MCEpZdrQZbTnCYrq4CVmjVrwGaqfVAnmALWKrdWeA",
  "key3": "4FCwZkK6rUPLCUjfFoNz8gsz2JkQ77BJKBMm7dn74Hskj4i46fbghgaESffFh6FH23DSSBbcSwwZh79hwrme6ZN8",
  "key4": "qyXhDviJ47XyEVxWCDqMNgViBJr2JoawRJzN4PmR1UgwMFCKeQSb9jPgJn4ypKyqfsnxHd3KVTseAVEHpU3RAfU",
  "key5": "3XTwm3B6x26nEdMLRVVUN1rENwVGxVkw1s1W37HR4D8k45jkT1WNyWHMywQRHGA7hNUrhCUHv2wSouU5YWMmZoV",
  "key6": "nXeTnA6kLLYUPV1HX18TzVWQJZbvcbSa6Bg1kVnRqw25QvMqVjRQiXdmbk4iLePCkze33447Nme963eFRNjLoPC",
  "key7": "5yF3qRfGMND13qJpNHVf1AEuSppMWQ8KvTexsEdfHZrZWBHajqhwLx5trtaur9c1BhB2984AzTbAZoo3wMNFuisP",
  "key8": "3U5yzGPaEbMPw9ccx83HVZQjWEpxJ6CofSZRTsnzcSiAnV2sa6Yy5VVjADna5MBRYSAhQUzGf6RqzRRCdY7bUxdf",
  "key9": "5vTouaG6YafX9peMTWjvL9j2NXTTRjRsU9zy859wFQFiY5hTwCrcJ2BURssC8da4RRGdnUCUxLaQiUhA9GPgmvJy",
  "key10": "4FkVvCGMtDuGeBRuf4AfSS4KyUFCePir3FN8gWaNQhh16UGsEWkX83qh7rY4ZtRsSTuLTzTPFyPrP73Rm7KMDmZ2",
  "key11": "62Qkcgoj1HN5gGr6qbC1gj54cfarDncZUysPoVGwBr5s8ptQHtz1wGtG64Tu51Ewa2h3XxPCzAW2R3eJFxtUQoZa",
  "key12": "4SfY2iWPU49HfAZGF9i7v4iyvBgrGssCckThZudhm2SfYsus4YY4tjGYaUsmLgNBEP9gesjDtGi8gTqiv5aqtVRd",
  "key13": "21WuVnKZC8Juzm8SwcsGbSmockWv5sNTTQZsXiVRxLwbvbhbcPm6jQoUMqAUwcvv7kurWt7aGXNM42Uon9iyrqeU",
  "key14": "5Sm35hwNCssvaHQT2W99kyNLdatJe8ywqRPEApJwEdw9ZZnxmQqT2xnFKNJ7EXVtX1DT81KFS1NcaxpYETKTQw69",
  "key15": "3C1UV7tcyNU6ZehBujX2jL63h8yRJoXWDmEeKs929teFDD3ECCkqsnaQoXbzDb3dawU3HuLmRkyyNiMJpakRZAh8",
  "key16": "24iKrUE5ehLRf685gC2v4pby47NvovC4vaG7ijCED1PatkxiNMbnXDoWdwHZVRsQNGNVBmjRWQdshy7SeWPjeRUi",
  "key17": "49wQiSDqd9vpZfwK9MhcCfdKbib6q3jpaSjekV1YX2Yd59TwYUsD7138HYRbKMwkXoQJiuGnyTg5dSVZ8PAson63",
  "key18": "3QV4QaRynQdgSRqzjk98EbN2XMtmZqdxxMaaFnCUH381LQu4jKrTeNCnxTXBKFxgYaCq3EiQVaQtx8dMCun36ZXG",
  "key19": "kkaraDPAEGzW9sohM4MoFqb2HSWmhnCuW4dKVBWpFSYEMQtx1p1zmukjG6ZN66kkB8bUR7oebEwBTNe8FqCD3Mu",
  "key20": "Rb7dHidnMrUKF9mvMGjJ5abjzej4VzaDoS77yijmh86yJtFbEFKztJqw4iE8hVgpYtGUzeyCPrna3eYQh8c1Cwa",
  "key21": "4a4QgqtZP3Zg7UPParNRutjzf2LgKExpN8ymt4NeGq9FgzBSLNBhyhENECdmdWpMeL5TFGDDJXTeoeLjwZNUDSJL",
  "key22": "42XnA1qnwbUxWoPFZTz5BxWZbymTzVB9vggpP3RZpuXUNZk1kQdLkDNfjSBc98udHebg7nGHSs3871Wp3bhfRT41",
  "key23": "XkdfTSykfawuurxyVd9ncBBVFe89DC1J8JQTCVoy3Qib3PqHT5AJAiSXFWEUu1GtXzqiMxUpF4tHMVb5tJZRpnJ",
  "key24": "4tRn8unZCW4hHTScLM4ayaS6iDdw1dagGQnQSSA64ddYbP6uJK7xwWWBgsavB1kpqV23T715EAAiU9fSfQ4JKJDV",
  "key25": "3RADcHEGo2v1Jnvfc1nSYg5PFpr1u4ocj9XxASWzDQ5uFQApQcmpBaxyNrsaAEvKm2yPATgMVJMAjpsScbpFHB9X",
  "key26": "LG3hTy6fWX82VLEjYnRxAz8NvMNyMEV8T6xiFLqSXihyx2LJT8oi8D71fxuw9AqPa55xP59dFKbZxdVfNDNuux5",
  "key27": "24G8UwTYa9NWRQaCR4KXkmdz5itKN7Mi43jZVazFLdKpexEU2dcWBZ3CK9fYLSrU5eq8r77YNem4Kwbm5D8jnNj7",
  "key28": "3xwHV5v9pVsTpwsmvkp19pR6SUXJEyUhRKabTwpbjTcHNdoZxMzppXKDnL1d57a5Lrk14pF9yTWczGTsxJpGs1Lz",
  "key29": "2EoCbMKV5Z6WJLnJLkt5XeHPVEZucRnQKfHqsszUoUGD7fKax7WCMWGK7EsD4iCoErtXp1bwwN29TMTuV32n5hg7",
  "key30": "4XG65wfC3mYEbmZSKdvUvP7M9ZLT3LqsxBha2KdgSFHeum6SryzfYPKVyD6XiPw6xTLqjLXpLdjaYrNd9xQxGkTT",
  "key31": "5c4z3kqJNV41ufCeTy7Mr6kMucPpp9e5sWiiw2Mgwg2hvFVdsvnwfydshpciNSXoSVFjXAYbodQtmNzbBTBcNY9N",
  "key32": "5XN2nfQ8V9srapUKPkDpcAKvBPLjCVUwUzWqS3JXZLj1ZhkyHTd2J9FTjx7EJdBNzFMnPBEpRYmAk8RyxL2TVpty",
  "key33": "5u6gAoSnz9abzv8rD1mcKwLfLKm2tfNaPCNGWZKuWv9TtwHCsFoUs6qkWNbPShri7wX3M4j4vMWUCJ8oeuJr2y9a",
  "key34": "5dY8S1VTdYBh83FKwPNSWPuw4j6W8mtNGXe3HF6W7xtaqy9EctpCv8SNHWGzk79ii4WDuDqeoTxkNCjByix37PfB",
  "key35": "671JKK8876P9M6BbWuzRFvPasCA8WB5ANoRMEBcPa2JNjStQGPGm2du5PLD3aoVs9KkhffBK6Rji2Btoqwyozz8E",
  "key36": "wzsSFzmzZvQVTL9e42UxcCeT8jBHaPBRkLnY2a6LtB8kZhKqix8xUczrXc6qryVVJBaNHdwdbzfY2twoS9KGFSS",
  "key37": "9GCuRXgYJvCNK1wPXUvziFjW5Dbf6YiYwTcYE1twGoy5aVq5QJEEoRAKerDkNrSDkcvzK9bNNsAKX1cMs4kFEHx",
  "key38": "23wX8NjC6fkymhCbREMDaS5WfAA1vsq8hqgoFYKdnaay6iPYtip18nBuxDGTrWCh7r3JXoznrFjANe2Kxb24ytBd",
  "key39": "J8gqC8gYtCEWAb1pjyaArKnHq4TzVDrrRDz49JE5ScPangmPdp21YWfs2WA3f8s12PtSxiue7vwDHfn2XbgnfWF",
  "key40": "36rFQhCBnZMXhGAn1qgry4V4CmunrpLDbMu1EK4GkbSA4xBwpgoMd6i9yh9JdndYJCfghK7xm4haBSLqK8hmDEyX",
  "key41": "5ASxbEL4LTvimimQJVMEYaaVQ4FzuuicDzwFRnPRBUUzZs5e4pkhQw59bbWzq5NRgBnvFpBCmQcFLNSFwzGUJNPV",
  "key42": "4xi9F15iXfcsgyDHEiK6FT7eqz1MbjK68uBtbXLWWMRJCf1pKr71fPFUQyPqQjrN9VxsAZAbjDjBZkVQbtDdcFVw",
  "key43": "5UXeutF2dmsaJxvrJJMf3HLUS4XMU1Jc4cQFG3NWpncWpM4iJEp627e47gQTUnkhopD56qYGUyhPFiXxRUNuYQ8e"
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
