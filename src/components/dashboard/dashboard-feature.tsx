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
    "28E9ksqC4vV494hrrUEKJrrwNJCM8SEmdG6pvvuqvZnyRTJbVu7dc7szuSDJRmT3jQt7ymGoHCPWgdfM4BFcKEo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T8gDid7vymw1mTi4uf5Qin53qriprosNf27zk588PBgo8eoU1amM4r7cvgeJgPJdNy5ijeWnEia5VNhi6GJwc1R",
  "key1": "3ZJNoKSfDno7K8akE31mgnXdJG2LF9BZ9pTUN7jLHxEdc6KKJiJ6Jw6hmTickbRfoViAPW8FJGzoAJZ5CwLrUvpp",
  "key2": "2v79V1JjCg9wpepwnJiLXu34cegj9sdLnzfu9sp5Waznrm1PYwGE6DXiyakR7WcQNbFZD3cfscjQMLbkBZyKewpe",
  "key3": "hGsVC9RdEYAbhe6VhNsGri2pGmSJnx7bkr7xS36ZnwguRoNuNL4RwGU5RZvQsocUTNGs5AL2u68FTsgLDHY14Su",
  "key4": "5ea5nrzyQF9mcQziLidovtQ9sCDnHfN7rJGJnmFrKa8HCz9pwRuUnRyKWHSG8RQtAyAAnSrEHuWNJR3xiqHr2us1",
  "key5": "efRojb94kZqoajuJqVGXxPiJ3L36Sa4TFMzoZpkoCthgUKqEC8qjzQj72xY6t2rW35k2mi9xKod13sZMuQeaUN3",
  "key6": "5GcUp6xzMxupHpGSCVGFSsX8TMLoFEVG4Kqj4T2JZxRva73PFw3Q7QZo1JJxWiiZUvB9LDsx7b1Hg71X9ykAdrDP",
  "key7": "Rw12MugwjDkKoRUbLmzrsYZvb2K2d7fxM5N2A6xsSEvT3KkaGt9eT7HX7fojWmCuy95JDubC2JT5xa6r87SNdGE",
  "key8": "5PTPtCVTEpMqmjFUydJF2nt2dpHoMHBEbXt3cpf7q5B4rCp4wdLYhbrfMmN5q6ns4EZ7k6pvF4wvC5X7uxQw69R9",
  "key9": "AqCRiMdbL951wm4H9xKAu1YJx2Da7Xa3HJNpEA64LMsSfirwpPeUBwJ1L3ZeSSu4pUCNAyvUngnimczT4srGgQJ",
  "key10": "4uPXHBeYJbajJUxDaoSFemXXJaFannyiDUhVUdhenz3gdtCmRecipfnNzwQEJtLHJ9JKtxGhHYeMAPLJDGXX5KUe",
  "key11": "5vAbT8CEUduiEZQYZCEQXgMWTh6xx488V6pKaBN2TgT2vS2crrgAaG9unE5JjmqMLXV8ycEcZyQvgX9BRQTwZb1y",
  "key12": "4dfPnDDTEkMY6o3GBr4in6pbDmnzeZWKxxA8xzMW8tuk8q9YDAYm84BoxdV6KbP7MLy8RMSbeioNHAtHemSsKq1G",
  "key13": "4rFFaocj94CMD6m4g8dVVpfSTc52VgnqDtMpWxWg7i8tiKtMgjFMZsMHm1mHEJnZwXEJjcoLPaL8aAXdGdpfHJrU",
  "key14": "fMrnwmr6k2LbcRouAdah6RurzCr4Zxmt81kQywB3xYBeihhXUxjJHPS1pzSoAFjkWDJaLHSpHsJnMqpxbS6vbFs",
  "key15": "4g9NC2iqwJYmneeUmsHQSrP6XYuH3DywRVbUhbAn8S7Dfn2azZbkM1Ae6RpoGsHNrrpn8fN7KKVDMb6Drp4gWoML",
  "key16": "5LBWiwrEj817C15EokgdHE5TCVHMcUTwd1Ed6E5RKU9SgMQP5UNZo1QZCzdK5xxqcdwd9QxUMC3t1JZfxmxAvWK",
  "key17": "4LhBPJKed9j2z1LYfhjEsLT5ZdDPsqG8HjhfNbmFaa2YE1YzZkQhCL147iZiJuLHGXuN5oaHhmH9yxYMLuq1zYEh",
  "key18": "4djzywu8uRGVx8EybHBBPrXpGnb9bnwmSaEHjBos7CeJrvpQUBCrvY4V9ogGGZZJtfPGMo3bSGnqmKhkhZNRYGW3",
  "key19": "3t2STvkV1Mz2w5NELkjSSdeJP4dYGz6ESaUQKNvJDxco9q7pQKDX7vpXkiqoT4dH3n7kG8YSvxh7uPgfJN6EjQ5L",
  "key20": "55mQTaqML6T7sFBknrv5bSaTs9XKrXkeC48haTds3LYJiTYYGUADjJNWyahL6mDaN23gHkWS9qWeYJdV5TuTRFiZ",
  "key21": "5pnN9cSXT7XNz7Ub4XBeTRWYbUd27GpesUvRbSuM2t8ZR92PxFGi236TkbwAbEn2xgMAodhpteFQ6NFGXhpud9Tk",
  "key22": "5xP4xQcSQ7WCD3eKY6cPZwdE8ffYK3pRcMYce8JweSpbAqEYs9A9ybTvCcZTtmzbe9Un41hem4fHXmjJjXeyrCiM",
  "key23": "3B1XtUphQbqgYBRe2qAZmtvvqkUY7SJpSLooiLswGirekJ5aA5bRQoU71rsM6cQXbCfpWeiTFzKSgAQhGK3ghQUn",
  "key24": "38PbwKbDrdfyMS5Hr4DFWQEF45JbvC62fqbgtw2AtXtADFCArgNeAaPRAwFiC7pnnBeMzV4RFKCwLpvxJfDGNYw8",
  "key25": "5Po5p4Xdv67xRHbSDtnVgiyimrMt3moUYiUUuJqYmVCbEaVRHyzctJK68G2EzTDjfixvrn5MqBgqR83hfy9d7HSj",
  "key26": "4tnZrSvzG8MPTnSSTZTkVwgVMDk93RrtRim4vMA5ZMEV16kTjiSwU2jiANUbXFA6gDWnpaFM7M1uqjCcbttU7WC6",
  "key27": "55rkkW6G9bsVFRjYksoiyShXu2wqLN8GHvdA14q29xEMqZUeqCQiCtSh9zy7W7g2EYq45mWNRX5VWYF7xB5CuSR7",
  "key28": "4977xJ1ysLhxju57asXWE8aLpQxc2ccHxGWY8TJ9cBtdHvjaakDVTbg984HZoi27myeT6TQWRAr9FRomUKMV4jDm",
  "key29": "3qYCaizE55ZuPE42NjaxzULZMYTZ8mufhE1sgvrtbUnKuvSACyzM921c9xN4GgQjAKs7N9CyQXgvqtLKierWT2o8",
  "key30": "APN69aWjMgxvjMRsjvFK8HufX4A3C48SLx8cyCYkokBFcjWveCUm7quwBL8nemXtxNB4RhAHwjBZFF6yLaqqUWc",
  "key31": "4AJYrtmCrEQ6zBfnNrtv1kUVyHaZCyBwavicSWRJGzvoi71o7VvyiCZakeNktFMemdAdkjTqHupFj1B5zzUnAAt8",
  "key32": "5zxTKbADuBaisoEzdTMqEZmmbBdEE8qBq8u9riNvFcbje2uYhqvFBeK5R6jY5yWYBJokSgP3tzFqxb7YiGeHqpDG",
  "key33": "5J5gwS8q6hPApZTcKMcHKoeT3kkRZsJovezHvSj7fyBFFBnrgdZ3UPkX3KFhWRmtbyfRQqCx2uWAMBN1AWtNQRkg",
  "key34": "RVLFEfgz1EvdD82tZ3iDY2udZkrAiSTuWZdxoso1JgRTqeD4pcbqJBiiRwc5KkJwiU2xsRyAn9GpadCHw8TY8PW",
  "key35": "FvnppS7q7g6oBdbsdo4zUSvcZmwfrCpXjdReeFb3L4Hk4iYv34qFAfXTWc7ZrKCLUCg8VPUDjcT3zGGCQLt4ZAU",
  "key36": "2GYBMvjuD7Xwyuwdp949BVZ8hdqHaeaSG5NDKofGf5RkgR7mjmy28xUaxvko5rcXCjbPVuV44mGvhXvT5f5mDxuR",
  "key37": "4H5SmB76asyQ6SxcsgbueQ4GS6913q43nh6HiZQhw2E1YXnUKxB9nnwNteYWybpoHVnsWQKssRswUeVSFFnQLEZ6",
  "key38": "2nJBRhiESghcERyxaEt2qYmAyh8bx3cQEJ31sc6n8idDsCbNuSqMFExVyFV72RhkAZcMSAZqP4DH3Zm1TTeq7g5F",
  "key39": "23VmXimr2KMZCWSVGJzv9f6kFaw4s2bZSDhtLN6VqCMFTj3sWpPePdzB3UDW82x5noHzNus8UJnb9DWPDAKdMs3M",
  "key40": "2wuv3dscExoZVKp4yS2ircmeoUYLbcEiGrYJUyx3NgJ7gih4PQ2coFzwzXwQLcfeDiQnp6brdFaWEuMUXhzUT5jP",
  "key41": "4ioVKkMvzYoFb2pwtCuwoRsaQy5XffnSHqUSE1RhnjEUbwQHXHnL521rGgQXb4FtL5sKC4TAMQBYwokateQH93wr",
  "key42": "2xnpcv56kpmVtRFEtqiwKuad7d1bPUWcrmLmstUCYJwbUJNiSTZ6vuVhiJEVc3QhPFkEMEGtJVzUE3zgRHuoqgrR",
  "key43": "4HRkW9FwMUZpTAk9xVzcVTNaCytgd7LpGRJzp5zsAfM5w9C9FpXr4uah3NRHW8Q3YReyjz8xu3vWkwVYznGoMLpn"
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
