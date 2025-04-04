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
    "5bMtcZwmnmdCZioNsZXdxTHXwcssM1d1Gaj9CHaFd2ubuq8Y9R53rBWyE6R7ppyqwos2fB4sqHW6F1qKskQQ5LMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "326B5LpFjjFgMzk9YwX24MZZo2ubpXYrRtPu3V63Ycp3Bfh1V6fmfN367K5411b8xobFvLyPJLm6iS8cqygyCLPn",
  "key1": "23ZQ1tWQqRkWxARsifwHsNsnVQmcTob86LHzYSmPh9gbczvQHMTd3Ad743Z6xNvQymDCdFKuaw1KCM2QxjfuL1Kw",
  "key2": "3qXvC95W9oe1pv6Wz6cGxxTC9846CAwhcyFBbogkhkFoDikws268uhGb8X9ZZ4fXegqJX5mbUseJYaVGYV22ffUM",
  "key3": "25FjPh4CZKyfHwxuQ2cfCoBJBmyR3nZUuHioy23KCB4AgdqUk4792nFaZVfj9fJJm8eeNc1zfvsfqyJiuavS1KhN",
  "key4": "3SFxNoQBrPv4jhGP75uMDwMkYyvUoEyfFtL1wV7pB6Hq232iTyCpSghHTR3QxdQuSvRg7bTjAjVjgrYTBBNitaSR",
  "key5": "5CBF3eKRJKQwwyxbNRVThYXMvM3wwT2HPeKPmWrRFXmpD2GjDBN1p8vvxsrGZ4BiP8Ud1FCXAAJQrJ9Z2HaQv1Qb",
  "key6": "2kMaRfTN13hotf9j9MEjMK8pYnA9qdFAeqr9gTDku6sgG8jU5MUr7V5FiPxbXR8gutfhEezm2HhygbFFPDVhUjPs",
  "key7": "2jTSkxkgdULQsNCoeFbQX3EkKFwV7maJQfRmvPMhwDhbmZU5n6A5Rbg9cEnVRhq8yyGDUsBqr6t42m7Nc6SSBmsn",
  "key8": "3XsdaGswmLehBDm1hHkSDJzsrbU87Vd2tAfS2mhY8iP2cs61CL7SAnSpcKSfL2vHW448Jt28j2ZBi3UBUa2Vp5Pm",
  "key9": "2MfsXnBs3YoU1cdhTYDMwJJErK6Qe12WNcjbXz7j9VgtTrBayS4uWFDuKq5bezAdjuQ3oKLH9gt6Zo6nEYV5x2qa",
  "key10": "4kViShbSi2tRjFyDjVkcctjyadfHiTGhiWAt73gsX9HR9XSJiy55t5pjuPLhbQXKs2oYd6C3T5QBkiDTYAv5DYqG",
  "key11": "2wRZGWcWDDSEVP8Ej4EgjY52Z9YQHzLNWyQ18kXz8EE4vgMxBjKKth1t1Sb4oXHqMnhyjobM5ieAyK9CTL9xAFSE",
  "key12": "2L4pxkdPAuSpDJcYUkiABfGq2MdtyeqozfKkejzbV18RaULheDVPNdvCkoJ39CHayxYhjFH3fJDZwEMABzY5zfWr",
  "key13": "3ueniUX1a9AMNAapCitoajEuPT3L5pWrkgSUjtjBDo6zdB2pinZo3pA3tQQKZQUNqcruHtqsd1onWNh8SzTfvSTy",
  "key14": "3swCs7NRV9FFu9dSkDKJxbuRtgzTBM344VQx45SHF9XRfVXBibLk8nU83a1LcSY4d8NLegrMDVQeAvxQyt6KsjbU",
  "key15": "5FXWrpNdJxSbgnbUYayaxZXLz1j28vWFLYkijnyBmFmisR5zoDmVQVx5VTmHFgJp7ajcHwYMW3jXGNCd6b8YDQER",
  "key16": "MqrgDLFkiSmWMwuwgjcAfYVjaWs8KYm5UK9fte3kxRm9K6PwLWz3dvUxJHBR1mdZ2zFRyfUd6ujPApTXotu3cbs",
  "key17": "3EKBUcaRkwkp1FStzqgBqF8338tjC4N26QKb7HtQH5LtjPmRo2TXuBgeo9hedxDo6cyDrfkFo2tAbF34fYKA3EJD",
  "key18": "5GxA58UMWL55D1Fi1Ku6WAYGXPZyvC6Zow89RcQxbDgM1voFH37fKkTFp5tw6Hbi81qjScmupfcMu6ZodCLxxcpN",
  "key19": "2nZ3Dv3S4oJSNss6f17b6HskzmL97JTYUPsZEkjffkGwPzhTqFDoZPB3eHNdes55dQdsqgcB6dVD32BAJp42EjxL",
  "key20": "5mupV2s5H1PGiQAcZcEQsZH14Vi7wrAmdvifgGgPMoahgmnmnUSLuxJUh1kJWCGYJmzch4pDQg8eX5fuXnf9V2fz",
  "key21": "3v9y7jGBCU9354xEpcEeN7f5oVh5kEKyNn94eE6EdigNdPCTaxyKJXnvPL2oVcL3ryd2FmiBXQqCUCUzYmZ9fhky",
  "key22": "2dfSoucA7zzYmZD899qTmNxw4etyRgxwq1NMMFP5snbaRNmcVC62PSYD39bAKTs6zJqHzbLrxP8QeAythNZEARdH",
  "key23": "4ci5Ta6NKfVipbnZR3gyeVW3XfX7bBi8jQ9o2R95p6EtAub5EHciAD1ygtCBLbqHm1pFn6jeAZTiPU89uU4tFGms",
  "key24": "5XFkFfKZKM482LeW6T64vnzZ65fEw654yqZHuTTstHjADJqArt6Y8BfPho66dfiddDwkEdo9H9gv4Xb2dJPz15Ve",
  "key25": "dZ41UP9pe1mkqKJEKGdC8RK67D3WftMXJRYnKy3H3H7ecNqnouDmE9wEF3jfjJ3NWwVPHsoY4NYpUj3Mk23qiVK",
  "key26": "3P4XPRtMKB9sz5RdoRjZ9yAjXngb9EwGdooZZaR6A2wJ4egBuuQ9kgQfZWzG6SjmbZr4E18i1C2UzqNCifb4WZP2",
  "key27": "4ezuBEEmRCu8bvoG3LJrv5qHcv7sQVuDirLEPtXykQ8kpyK666xyZQESv2S3G9jDJtx2XUa1BhRyGpEa4hDFUgzF",
  "key28": "9LsQnaQDkRwG9ytGGT2zVAokka9C7n6QBxgQsB5j9xWzxaMW7fciPXRPDc7dU6caGZBFoh9SN6NQz5NV8QK9V1C",
  "key29": "2DR9YxPC4HVZUg2qAicenvefvjjo8g1LG1ARjSUwZfCgcgkVr7W77ofkjaSAxv61eGn4BwHN4Xzv48GZxJ2djDDN",
  "key30": "34RSpMJVTBSzVSXZGLaU7vxusidXwHztjY4pREQkbru71C8HaN1SuDtSYswmCCnWHBoLh3BmqkgTvtBWiByaaXGN",
  "key31": "5D8kjNC2B36C9jEkrj4mHmTbHhMQzUyFhD61nY4kafre6ChzaMiXJGm11zEp4BqS8TKwgGJyYNSyS6i2eMAs9ASF",
  "key32": "4tGUh3kvgWSNzBRbiQXVf2Z4QRo376zgtbXFpjCLpVpssmnZKkVLNDo9W2pd9PNuTJt6HoF2jebG3UXTwXKXTjJn",
  "key33": "2SDQi4ASYUDKRb6XtyPFN4sF1QX6JGJ726vrserTeoKM65BDQiG23Qi7cdDnXzJM8QeKzVPT3wKzUzdnHqR6ipo8",
  "key34": "44ruyo2dstZE5G4oM4o9G49Y1hkDh6GPwSQ3y45X7cKv8bhK5KsaKAvnermNd2LRPWmEpYMdBXxtBMjh19jbNnkt",
  "key35": "2EFDghbSooGfASxXRMzgVnVbVgqQG4yBBiVXEtoHGqDHVfFgFmRnE2HQWNC7KEQbdmbRUngBdg6ViThFLV7dbJet",
  "key36": "4bQUqUXiRwwZbzHdfp2aEWP3mMjRCyfB6joiyb5S6KpBHYBb5GJCkUuvcfQXTbftzmH9ZoDVGCNcpx2ETtrW6r6t",
  "key37": "4y8jfLcYbGSmxw7g8eKb1Kb8T6TZFGpEtWXv1wX5yX1FQfBM7KqduqCB4HJCxYEZVjf9BeAMpSE6mnyHK6sM5nV3",
  "key38": "3G6245MBYCoGTpXtdZXTr36kp5d4xViRMhRXqucRiWZGhGLapsFCXtJ5F21aH65Wvec6M161Z8Zf5A9a8AXiw3TG",
  "key39": "2gDczj4z6K8gPYnLBXfSbGtGT8zSmrVvj5k5HYxZUZj19RzDW31Co7zDCkTFUvhMznkRJdxz4AFYzKUFw24iobep",
  "key40": "NzvzNbynXEMG94jaxUHSyjHon4Wo7iXhCzybBoJpqQBvcE3Zr4Y9CACR37SmXRnyMc4nA5HrAGeuooCpCg9ZwU6",
  "key41": "2HJYXFZVCNimswRrhnrhJN4SJtid8MmnBeZZd3F1uBbjP6tK6KkaVmaznu4kR96zqedfFVgEeobUQ3avm9DN89PV",
  "key42": "5q8vdQS5g7v88VzSDrRXY8PkDNsHNjo767AEXbzyNVbUj7WpqQoyW4Ms4mcHhFsPqyicUFgez9P874173Yt8KSbF",
  "key43": "xwoyaGQbG8CF6uaeRijAbwh7TcmQko7zioySvHANrDvuXmzbwrvawB8ECs1gUf5Xn1eExHANi4kpPrX45skX3tN",
  "key44": "43uqEubXNWuEH5SCQJ9nSZcFFGukgT9SxitaQ1udMYrEurFuaBxK4TUe6azkUY5prxpYjiDmFdQFviXvxero8nTf",
  "key45": "462SmFmy981LVo4xsmCG7sguWtuYxvkL4Kh4RV6WqYKtuWQYSXUNQyVto1HppYNrz5yVQ8Ssp5wQ9hdkecxDosRS",
  "key46": "5iU3hW6v3kpv4fUGupfSscwqQBKHNdQ8zzd8t2pQboo9PDQPuqQKgZdDJojDjieRWqEfVe8creEkuSMQebMR7M6F",
  "key47": "4BGwyAqps7ZXFt6gnsm5JQeX1wyHLZqnnYyFyCBxhtby1t7gXwbLT6ksHvB54fJmQrvWVxvFZEUbu8b3nFy3Tp4t",
  "key48": "hUG2VxmS9VyezeNUnbjD7HKPpQcaPpJ3No3TkDj1yTH7cmNEVrnAtiEkQZG5gFcYCPBKh4Ark848xr35Z32RnnP",
  "key49": "55v931TRtWThs7Ly1hdCww2Jirz67HMHPD66r9kcKBmuRrpkKjNdoZHNvpAZyQ2ZuPtXAV57TG5zBaVuHhQc2CLC"
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
