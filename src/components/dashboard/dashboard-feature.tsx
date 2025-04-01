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
    "wZpadAM1jRYa8SY1hucRZAxvVVzMx4FC48SpYLN2WjDQkMNwTihHW1xd89RqritkYcYkJSANmmaQbRxBCDFNYiQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5awrfpwtkevS5GY7gzfFQmEhcyMhgqSfDyxaEp2oEQbKWqLJN6DKokgTTjcGJTQ6ZVeLPGqEdGyrGMrx3BK5Ew95",
  "key1": "2c3s1gnZeEyAWwKCKahLJ8TrHPLNsAqEnfskb3DDnrBwsGkCQaXphSNdoJ4zQeHkiJJJKJpeGwmkEwdBKtpuqJb4",
  "key2": "4fZm4n4Ck1n5rAPQbtywmmLdLfgChurRkSvU9qQN8DWqvEcNBZYdrcq3Ti6RLSCY5syGayraxtPmsuZt4cm4GPsH",
  "key3": "5x9rJNgAjuTgardPsH97rvoTWG9Rn96wrnvDuKincLbcC3E9Wxymw24myWackaWYPpfBZn6r6msrQtv2aj77GC8f",
  "key4": "4c8Afe55Ln32BHG7Rf6Sot2typppkRDGybAPRryY6TSx1f2aGiyzrzNTvDuUEog9HCEp2pfEXmVfZpWge5w4y4Jb",
  "key5": "4rHPyPwoZJFZLRoXRavJP35XCm6D33JSTRBvvFNKN25X58Lc9kDxXRy46sJU3sqANqEAS24DS2wxozEE6MEQMLtf",
  "key6": "JVhJU4VSnYwcYE99PUYcDkP6qUo6K5b3ZviUAxyDKH4PPmyLzr1sYDEvQpa2WkbjQ7ebEGQ1UzEf4p3fktdd25g",
  "key7": "62AZbc4TjjD1YCNRyhQrFg6iiJskQ2yNCaZ1CdCoCqpnjxzwu8uqsXqgupcFb4q5LRjJXLrNncCQzwF4VJXh2Lzh",
  "key8": "5W4xmDfpimoZYeLwHsj3rPzaLAMxq7SVN8w9VaQZ7QJ2ZWjoRVBkwwtBo7xG8g6htSqBuVMNYSHm9P8SoWZPVqoH",
  "key9": "24Xf2qsky6qJGVe9yGMyvAG32i4QYpUw4j9Q6Tt3VMUcXG6BJ2MvEDWb1333jVq3nK9TzWcvjwMMiUZnmZ6ayFL3",
  "key10": "phnVUJFyT13yoPS89dPEXfEyzgtwkKNFwqcxFezFVQud9s21ofMYFRge7aQTjvGwHa6Xp8nKiXtH8i5KS5emXPo",
  "key11": "3GWzaAM3N96mtNDYRgBHZSVFW8ruzTCezyEiPxev6jeNpNe1xtaDhkcuZS9VzEEi4GvS4DH72pBntkjE2FW9ugip",
  "key12": "4mCbr6Dn5fJmaZ4dKEt5XJMbeqDDwTZpFBHxjJc9pioanhgK5KUKrCGp8U9ZbpKT3f5EQPSG4yw5ZSJimGkAJdF9",
  "key13": "41apKAuPq3SL1erHMN2RC4M9sifCiMw8xEHxpahw9B4doC1hTMfqcpt8i1Kx33m4pKZdheFjTAUZmKwQQL3ncKGb",
  "key14": "2tQgtmJSczzwCTvY76LZbXXLRYsdkvTp4s92kyHyyJd2HCvztQ86R3T2VoFY3j3Tj9DHFjmitquLCkWQzgpBALaq",
  "key15": "EwVmd33wyeG6LhrW7CwSWxETKUMddNDoiRimEsdh8zwWEnbfdWvbuaMEqwdPsTRakVWJzj4HBesA1JoZYiQfhvd",
  "key16": "2L3JGqZciey3X5Xj9rhXn51osjWiLy51sxXqW8RwNyGodhfmroyHp4riGWAEzHMdeSj8yS1TXv1xwjTSWFa7F1iP",
  "key17": "3H1ZAymzsszVpMuwcAGfoE2V1s76gXj1ywpDa1q8Ya8MTMBG2XbkGzFFiK4DAcTRQ6aqkCY1aw94ahPRVPZfdWvU",
  "key18": "65d95C7etaN7VsTHEwv4rFsktxddh8AqAKjDCFE7sgp8WDBM5KFCJB4R3f4rjbjDygobtYWjQvYbegdnBEZFX3tz",
  "key19": "526aHXFZ7F9UpqW6r79V4XMp389Uca4uCKLvSexzxSvP5bbv5iqc414AE5mcTpKsQiWhoU2457f2UemUhSfnHFVe",
  "key20": "54qU33WFQeouLx4ErZGkMmZJSsUAJAMswtTpFMUfTgK7FZdFsAjU47ZBSENgafuF2M6ELrUHhQf5EPKckSutSQhL",
  "key21": "2D8ns9RxFw1PCHTjaVf7C4B3zw19nPWvsw5AGSL6iqCsxAwhYM3GCAbJsA4AcSR3NGm1sNit8ewHxdSajjpLnAmq",
  "key22": "5xDPDEUTVGANKEXY6nPG8hRaXSfZgo3yHcmAmGdLdREV8251v9wYk1PPy1Lw4Xhhzyi3esHJqsXZU16VvG4RWneK",
  "key23": "4R2qcefDsyYYE6ZCmaXVgeiwRGyRbF9AJjp9nT2UKv18MUgDxRF42GTwczgfB7ruQRFhqQNjTjDTQuwGrp7tZD7y",
  "key24": "Dj5i8tTBnVFWKHEjwB3asiBY6f1APGZHYNdfbmf59U7ph64i5wvbtYxYAEgdaXPNci7cJoevt4kGYT9g4Wnvkz8",
  "key25": "5sop8B7ofLQmgvVyrfdGPK2WUPVNEdAqKVqaUrZpzZVizg3svXYqor9kpeNXuvCJBNvJqVpCrGvN5SepKi93f3gG",
  "key26": "5Pm5b6kKW7DCvJ2qTHuMAEkeZw98TwAEeo83ZP4qUobtzPP9UFzxT4eY9qN4qsjE9Zf1aiv8T7fQxTpk4EGdxuvt",
  "key27": "3oyCbZTuVVG4TMVwV8mZsmZF5MgM133HW7bkZPcxQdcTSrakrDu2LDhQPj2XUrw43Vu6R2Y4vBmB9B9ZYPJ4xyYT",
  "key28": "5c94daFv8zva7iPYjXpZGqJgkjLVNjgbHYinqJY6YqAjHmbUATokTt3kfGr4e4hQEN69uitHTSWZia1FwXmPmyMi",
  "key29": "2naKPnxsUuHZJoZXxBuLCtcTpUoGzUTLGrCjAbH9wpgVcNwJk6xwzqmEwqbFXAcf3STtX5DpenE8dSS1o6HZdBAG",
  "key30": "5nfHNdQLC28g8DhB1ZAupjxtZ3CofH2ckDfJktZcJQtx3hW6Po8FgyywC7vnS6jYggr5ppP6KWDvGTp3iDaEWiq3",
  "key31": "3JvByqjtMKVifsCe7gzFLT6ru3sXKoJuL7g3WhM7YEd4h5M5F1s39ARqFt9S8SBMySU7Trk1Y33g1w8267n8ybSM",
  "key32": "2f16c5VXivYXWcmwksawpk2r5AuwA9y2Ahbho5Fgmcug58SvuCQWNXLnRcoAvwXeENHJJZczHWHJpBooRryESLCp",
  "key33": "5GUx3L6zCW9MA3wcJrg9cCSYGVE6CKatcWN5K2RpFJmvguNYcZj8c8dtnHcebgj2yFJRGq3AiyznBN1DKnRvZmNa",
  "key34": "MjnBBAUu5zteyUV1vdhFxvVRN2z8kpapBRrhAU2FLvDnn4XfHmgy8B92en9QEBrJ1cpb75YXg28oJ4P6vHE3jbT",
  "key35": "3eFCvPLyks2LSvoKXeE5CpsoWBQeZL33XffL5rFd6Xi6MXvtnAYATGHWrATZYDxiGhLysMogMnhxtYJuAQ2ufhdp",
  "key36": "63ytzQbNNwX2QVDAKHENWwDciFY7M8zKvmc4edNwu9mxzaGayJeFiVgzDyHzTi7kFYGHHZKLstXdUnCZFRxtp8MH",
  "key37": "4CB7gsbQYuhvXUH9Q3puwbP12y7PrgTHAeGpkGkZbXFveAi7qdyjRULH1q5tAuQjzMHVyFcAwnvSqVESvW7f4WAS",
  "key38": "77gU6JA7DSvrXcarEf3omkBdKZFF2dm1Y1LEQAvWPTuVNaGf4Kxgb4wT8ufHeNmJVzHbXkRVJ3QSnHYf79UEnva",
  "key39": "2YVBPctPzQRBoBVepE6pQVsHUv4CSbHk7VyDaEjiWv3wNagEVvnfB9RU2Rb8mXPwXqXnNLNab69iJSCqdfe9yxND",
  "key40": "37mGVjhUXnzU9eSuFjJ13snFg9LhYXjoj6NAffVhuXQqVSRkVfneGBm9CCb7iiURYTKRKpRo7Cnqtmsu486jx785",
  "key41": "bRKJjVpH6Yb1uKoEEQXxPtBJZt99qdJobE84BUtFJ3cyqsX5fCJrNqXvpMfZf1sCFCuupen5UTveMyjsJjsarjn",
  "key42": "FZWaj1QDtL8gyJuRn7WM8Q2g46kzwKMdak8Syp8ZWQx14oyPirrpq57jRuhCzk3ze6tLEatnq3zMTCZy8BwWRCv",
  "key43": "5278ou6SmtDyvsWjbYzpLJFbCeWMsxAsDjufPSNtmXhTSKUuazAG23DSmXukWaKgySVupnPRHRG48Y5qJLkW86aX",
  "key44": "65aAwfYE6CCSkAdx5UyheRcZn82ANfs2K148MYLKm7zTp24b3giMcerhBZbxgGGfw7PzNnusbwG9MnFCT89pzNwu",
  "key45": "3ZEUFi2YRKNQHtgruXKB6v5RYNp8v9dRv5SryaGcwsY9rDG4QJG2CjnvLfNj4bzkp5UhZGRcDdcCTLCCXHFSUP5U",
  "key46": "3pFwdFgjejwXhcw8rgCP2ANhDykcJVWzoH792XD8V3kE3aFzcuaenawX5rKgmEspgPhSE2DZJ9VwoEM6qNKmAqKs",
  "key47": "Tmi5sKMNWmHgkjMaA7EDWUPb8mDVA1Frqut9ET97juCu9HfMiByxJzs4dehhzV6FW3BEyKfECWeXFQw5XzGNCya",
  "key48": "25LCSVbFZ5T6sdWRwRyTV7P4yr6L3wdQHsSQmqfNEvJtmVknAzgu1mxtqU2xA2cm1HbpxcSEeHnEo3TdLDneKxP8",
  "key49": "3z1ajpJvJ3Ar4KpvdPgJYmeX5zP69vS73j8LUDaNCXPW6m921UgKJxXTcThUjX93akDL5niUcRrteCrGeB37aCbY"
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
