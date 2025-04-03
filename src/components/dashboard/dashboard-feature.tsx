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
    "9hmjVZT5fd6hR9qqSyaQFF7CzhyGzNUqFh9QruVGNoCdrzA9ABBTTvh4xV2TNDrJDTya3K3P2xoUZLxDALTA6kx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BdivTLyZZHyBVrM4iVAnu8ewpfMsbzf5vWtDCWgGevJ368Sea7E5Bvd3UoQxumd5idL4HgKk7UCdtpx9mMg85q3",
  "key1": "5Mpnvwue7kt7W89omzQvekn1wghD3ErNf9r536Xw6jawSZo55gTPC17YRoQMSE1auAQWikLZJZf6oMkMhB7xyc5k",
  "key2": "4tXx3u8bRxBDwVeN9avV8DRNkGUQrfPmsrmtpyw3gYwBufLhvTzgNg52fFqL1pCnTrtTfi79mxkx975VUdbKV7yQ",
  "key3": "296CcfbCcc1pKfhBCqRm6SvfFrxTArcbiPYupmMXD3typGVAQZwt6Uui7Wy49zh3UAacE9qZpUJKEKZCp93ScNm6",
  "key4": "78Gtn61mrrMMKs9MWcqNVYnFuMVWUu5WenSgSDMRrxDQmY7mhQTtUiFpN5fDZ45WCt6GUz8gP5uYCwUBrx3hPU7",
  "key5": "2Gf1uh3771DHoaFCxagXQFkQDTs5S8aEtSaGDZ5PKBurRwYo6w7Qr5zVHsjDPJdYhneTT5mehAu3Qzj6xyhUhpvr",
  "key6": "2HVpQQpkynwWbrXh1tjEggGXR4KP5ZtZ4xkhesC4Kk1gRZFFaM7rFaaUNM6wiXQVXbmCzuoGMhAfvThSadjeYcrq",
  "key7": "5y2maCmmFHqxBuRJoB12TgMbXS1MrYp9qFSZdiAbH344iFBUsrmvU7TuqRT7PX6bgB5iGChWy8uiWGye5YxmFkPw",
  "key8": "2Pvi6BVf1NFJjuFBF6EcL49CFstntkNfcdtmQh7gMJa68eyw1XdYCUr1PUJtjBneGDr4TWsSCrDLEJ4JVZ6WmfRE",
  "key9": "bKSrWX7dPy4k1dbRdhgz5wqVQCgBSAK3hQ6xgYHTSDB13M3wotQFfgKkF5L4mHSQUCsbWjEs8FoGoCVnJnC5WYh",
  "key10": "4LoHFgCEVt2upuPMFq2sCeFS3dix6CirmGjtXiSJqPG7i5AKvW99hgCk4b389c526ydVYb6fdbkFJmcfHZe14XSp",
  "key11": "2LQFAvUadReTLfqLZ1AGX4iN7t6G2A7WB3MtBdsvRwKYrPsCmkoyXKBUc2PED5ZQhmo9XPnsebgwjj25uutAjGT1",
  "key12": "2sMydvSUCrFGJ9NdRdneKZb7kJz7rPwFAANdjcYpFSyD8BxrJvb1YTkMAhDqUEBFD1xKYCUx64rPBiYtgtCmrTbP",
  "key13": "vjHXBaYZakxGDNuVnPbRsJfND1ZHn2htmocaiMYA7RcM2GSb33pYs5WyZgnZEsp6u62oBYW6ZFtYG43noYqn5Li",
  "key14": "2Dazxtf2waxmk78Ea1wMC1uDmjpsQR2QKk5wxKf4PYrjiSp61NYNQyB2epQcsLNgwjF4Hr9gdhcfLhSCuQMqRin6",
  "key15": "125UMryzkEVvCZC2JJRjtTueu1XbgUVH2qR4pQJMZQwZNDvvSbb8XuzQSsx1jpECQDru6cBGw4VnyT4PujGMLKbT",
  "key16": "57augNYaRjfCVs2sp58WZ3q1LQvSZSjEvyAfBvSth9eSchNG69cydrg7n826USB6SZGvx6i1dTTmdj1CCUMqaLvi",
  "key17": "2J4UAc2Y9ZT6D3mx9P3rqrtjnizwT7Vw3gjgZQM7kDZjetTVHbndpPPm3fx4WQ8UhME7x8XUhCPwzUSZyGgfqtY2",
  "key18": "5XZSDC8X4ce6G1chDULYEjKV9ZBzY2V2uVmzXDf5pnoJFAMV9tHEhEsqbdpeKD7yZw2v2MEcMwjkTSu1XYD4zhe3",
  "key19": "3xonffeb5VrtEzvxLWW1oZ8soX8idPV5MpTqrm5u4HTVoqdYnjmFNoSGWJe9C4oGvkVeSjEmRt8FN82XK3QXJS52",
  "key20": "67V9p74BhCTs7ux93T5fWq9Lpt9SQ6ecByTFRdZmXshcp7JLBnUEwECQzaUH74D8jkktQNhgHET1xrGDoKuh22NY",
  "key21": "5AWboGgEAhWJ68PPoem9vbueVZHMjWVVz4uNh7NvShk1pVdRjKcoDa1GFRU4B9YWoGjZj7icMsPLPxk569QzK3bX",
  "key22": "niz2QdirEkUjcA8tjPjHAA1EMMVXrLZk7twhymnmjgeQ31DWLeHbMTA5Q2Q42ZjiU8ppJEVhFVzJ5C1hdCjQhoK",
  "key23": "5JiSLErPo9V5h8EUu5LDssvtsfN6u4gQuzEiha8ZFRax5Bj8MBDcPGGxE33rCVSstUr7JqAqgMYZES3kVeK3W1qD",
  "key24": "3F922tRsnTd9CcgPCXTpcno3mvDiz5izVfm76zogyfmrxUVBtN74ByXSo25YNiTYqXDbhYS75Ttbrihi868uMedg",
  "key25": "5gxvy8Uh2VrGf9WeQH1Q3sGKf46fiwiytAG1vs3Zvw6vJmpCN6iiV6xbADtWRyrhqJR7J7hh36BZX1DgaWfNTn6",
  "key26": "4HvkpELtQqmWfUnnhL8h38Bg157PKAex1b92WChQiqQeWtKFAfpBMxW7Wbm64FzhVDxSmtRTbvYuxYZ9MYMYDmVN",
  "key27": "4kXCSrLyLvr3XZTFMV25MoFy3xAbnvMeRbDrzc2qvq7m5doAQJudt8tJYPvjCDDrqrD7rSv1zmuoF28sepsUuSzs",
  "key28": "5WDv3Won9Vkp7mopY4E3Ns7XZkwbvop63Z9hRUQ5RMVE5v2Dx5kmNrXtsFt9nUXAyBdAyh22h3BoePjK7wrZCsdC",
  "key29": "4jgYDu3NmNgCQh4uRbLwmqmpDNrmgqXsHhfriHusp5yG3DrCp9SnBoo7W6aUvZsdkD5jtLxQtdcAwCiabTVtUuYS",
  "key30": "4wkwdNdMeHvRsx6KbwZnCssgt9PGe9D8N2vocVEEjwyN9N1KWmxsdTD76pCRFZNC4TvYHV5TXWmhm4CTX25Mdjmp",
  "key31": "3QYjwSq1jVDN5qrJw4vGcQLTfy2fpH4LaRCdVXWL8ygM6DH8oSf1rKVbKoXjS2X7CxXpFabaoRuEFjbxRLDQPytk",
  "key32": "3HNRaZJchxPw7xypCNNyLKyPRGsNFg73aqHB74r4gxeoLiRwHLFH8Yk926cK49McQ27ppXnpp5jSJuhswDCrxYVi",
  "key33": "4CBpC6PuvKkwq6BqhzNAyjZTSskPoa4j9pXwo6W8hiG4mjPjFmHwJr8XmwTSjwNz6RohrtRhCjDk3xtkUAxUM26W",
  "key34": "j5XuqBRLXMAzeSoNNQnXozdGH5sG55P88qXaA7h3YA9KV5en61NSSbFXuft7jLSFzqgb3td2vXNTFKnyym1Nj9p",
  "key35": "572T6HsdSpDY9QcLSYBfQ9BjF8g3ceqor24HAGbU8QnuQUgDQubmJmr62fBemVZM3qxsiAzChuvq4MwT6Fjbcpsg",
  "key36": "3zfWW1YeHrD8GKAkyabK3yTM9nwMZv7BqM2BojKXrPhfjEqFkcqmfn4dKXanL3Tjm4mwZ8JRZBsSzXr8wfurJDGo",
  "key37": "4C5UhMmf1gFoAgQBdFqev4WjF4MG9QzfGpRJ8ENwoTgZGoc2jYKbQCigZGgbuD7EcwfsrXVPSeLkmw86LwUFjELC",
  "key38": "67jeMpsKxKGBmfw1UvEfJ7uwPEY5r7SteCUX5s8716C5U48NF8iymcqpG4VoiQbotwD2MEV3MYvcmR1VcTMR3Abs",
  "key39": "spkNMDmBWNcGX6ft7ArNihPyXqFa6KXuDY12meAWKH8XQvcNbeeM1iFbKW28BoSQrmqo6Uwm8xFjE3PeuaiTcCj",
  "key40": "34L7uGowofSpQh6qwcDy6cKCawEA7WuB8XBjCAUskW5xyBuTEz28APdMzrtTuCguJJivELkGNVsPpKtY6oyZBnmp",
  "key41": "47AUSLsPntm7Q9zHcKrBqGBirCqWUfti2TdZirUXfxLP1Z5zV3rw9Ak86pznRuGVW2QNYw6TQ3JR3XwkRJYFzUJd",
  "key42": "5N52d1z7EuHxkC44F6s2Gs3fs15VzWY27E76CC7SoJZyfv2Pe5AoJfpRS9ANw2EenatRteyPKyJai2XA9x4B2huf",
  "key43": "42Lpdqh2yEPH6DgjjnBgxMmTQDpahWNY7oYJmgULa18PNKvtJRP3185qPBWF9sbX4mv3BvDZ9AUMXk2r9pozk2jR",
  "key44": "J9KedJLCiC1dYBhLxGeWYDbjGEsaotbaX3GUoujtttaGys6Wn8QZ1pDVLCGWAcG9HNWErLbapAWEuYshBgY4jvH",
  "key45": "4LwYBxu5LwC4SPb3JeeqMsFsQXantvfzRagDMsYVgBuiaR443AkyYqJpifaz9neLFdqaua2yPJ5zZmMCHbTZVB3y",
  "key46": "5baCDYWxR54EbrcTmAi8ZecAfGaK4Mdc5cr7cLbKk57K3RuLKPrtWQm1sgUbtFSVLHwiKkXCTR5Tka9mEiiDtZ9H",
  "key47": "32oqpYDN56X6U3Fk9na5VWbcNpKybiF3Fzu3ix26rUeAXz31WKRF4yG5zc4NtkGXnzRoR9bgTKdfELeyg4rPsPwG",
  "key48": "4SguaibB26WpV1LDwLtN3RQD1JyHrY2ZBmsC9BdAhTLzVJarbU9Bic3yry1xvRphUpqj14FTqfHDgu6PqW9P7QL1",
  "key49": "2gZrbDWMrDEdwQWrayd3TqHdQbmT12PHcf1iZTSLbUKuSmNtyzLENnMm6UAjhdAahpYTYYopzGaYzN9U82AuZE9P"
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
