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
    "5eE4jUGUb92ijW1uWBTiPLCL3VtuZz86eAj3VWSoyRVNoMFpM18A28XijWDwyHx3B5w3FkCRziyDs9NA7S66eLW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QS2Tk3Wxk6GGTJAKhgaJRPupN5euXcvabTqyCsjruTyTMnY23KeGijQRhB7mjn2GdJMbasf73jk3jZemrHNW5Kt",
  "key1": "3CNWanJ51ZZVMjt1h42MMN66SjMom8R5jyoEy7VHGVdodzVgWt6vXv4wz7U8Lojoor6kTHRcS3VfScVC4ATRepv4",
  "key2": "2efpDrWYtJr6Pq5zqX7nzYG2XQ7vVpaRmhD3unJcApCY6PZVRYDRLp1GwzuF3EGy1RYZirCF1kqKNSiMqiJ38pao",
  "key3": "3GwdpcYbwjpo1iE7djkPSceuAiYGYKJExVJLFjf1NNjRjy4Z7eRjW94QzVdzBtPqb88fvomFh4qWqM5FYEnD9Pz",
  "key4": "3JxRSpZ26MykYqFwdWVk7m5P3BbC1mDYtPongovBPrSVUwuWLZQQqiVfcrftCAejekSvHRYLAAkXxi8YUhm1KTHK",
  "key5": "2pQsiktgNiFjKU97iC4NykseiiE9SADTyPcc2Y7wKhp2SeodUVG8v3xA53VU3Yg2fvPZ1Ydsto6d4j8mgY5p54gC",
  "key6": "5XPA85cZ2XH5E3ZV71vtdeqP4KUMK1rvFVT9dNU8iGsTYEyyAu5PD18dpav8DFjekgpkTtj71n3fv4E6EYpR6hDi",
  "key7": "RbcSosodihoHkrWvPjmrfzEX8L7WxBdZRqFHSJv7tmDjUUvR9unCajdBbFMdMDRvhZ3MoLgs2nF6R6wg5rwvri6",
  "key8": "31M9qHbFVSqEaXmveLHkctD9hzVbf1GqRePhq8jZNJdXuWYm72wVSNyFgx1fdkY1KytYZT41NCnKJxFUTBaQEmtK",
  "key9": "4wkE3MPtD7BquAAKrUZHw6nQB8g7rWJ7vFLKwacyQeuR6rXWgqjQyDiXVtCn3HRLDyUQoDM6yGZ3uoLDi9YYM75w",
  "key10": "gChd1fhYipChhFSKJs88SAn2q9SNKziyjUN9xUBhkHsmgKzwhsL5QpgXogCpRGr1T2qTUaAquTL87Lsv156AFba",
  "key11": "4GUSpsRzTYhaycAs35QrEjfkoPVUCXGk7NPpYKTwN3Y7RsBYcs51bZuXe7mBY8xwfkzSCm7f9vSLqQYmPf4YZUuG",
  "key12": "4BzYYqKM66MuXivyCxPKMnvAGmkGJFHjYpUthVWeJj6J9VmJyN2iLJ6SyLELL4DHFFi88JbzKoku1T94ibnjcs7",
  "key13": "4Gci84FVF3cmXvFaS8pUpwaxjJcKYTvKBRgrKnEwHjo5R22JzPE3U3gTDH3exF3LEM9tNn6WNnUejhoSCJUULe5Z",
  "key14": "2aDJATBDmZkCkJhhwm2RAqcFnxDU3vWwyozdsoEZfjXC3iKMVQgGwZbWs9TSZ7WJn1Cit5d26ysLvDADrc1Vkpzh",
  "key15": "3DNbn1bd6KSGKqtfAabdWihGQqzt2sLZpFd5EgUwVBvfjUR78qETw716T2U9idR4G4J4BBiPR2AMdMyG8zEKmtNG",
  "key16": "3yGxDYgTpYoyKTEEKkyJRDsZrP15W1hj5WJkzwgTrU8DjzL1ohcarCQ4Sd9daHWpJxLhky3uVi1NsdaQ2mxZaRT5",
  "key17": "4HVLvYEbjiWE7M3QqhJ2iW7WXE34m2Z8VbT8mpoXschgAxEwCk7FJ23Cew8S6WvRtfDvPsJy6MzLHUJ9A6XCTVjN",
  "key18": "DiGWU7AoZ3Sw1w9DH4qeZykRGt97JuZFJrbXyHtWVFJuVUuZcJhscfAxwT4wsyR29C2RXnHR28sQ9YTz1pw19c3",
  "key19": "4GKpcTot7BTk9P3eQKVDiD9ghinSa32wbJAJt3PnpMSKGuz6kcdPvVtLbYvgMVpVvVHMjiGB1KyNEV3tjeZRWQqR",
  "key20": "3y9HTUvFFX6Nw2cHtPtvw12SFqBYtMdowU1WVKjqv7R2LedTfg3qudkcEkGsn8G8aJUweNB4eYR8cxZjb1iVkVbQ",
  "key21": "5pvp5id8avDtd1BckP8RdRGhjoGngDWpDzBVK7nXjDUFpBArtTnpZY7HzHFYX2Pd17njxPuPibgDD9YXLDbDa9rB",
  "key22": "4D5uwNEiBFS1yuzp5rHNR8QYPgiaP6iemm7jareh1fcW7wAjsYvyV5C5mpsmSEpta6kMzatdJRY7W6SzUcuLxJx3",
  "key23": "ADnTCALkAD81qZeZUr2FSe6txP6bhkdfjaJgmidLG41CSveiQAxmCTyDyLRfk38SFDPpY1SYPgLAbLgcLDva5uH",
  "key24": "47WpDftXydxC4zmZMkBspcQC8mCaoBJFP7H6GZ8MNRGmi774he7uBMg2ZoMmr4wDDQ8YDy5T9HB8TPAebZB9c9FK",
  "key25": "5QmSjza6N4RQucCd5uwrFXrTKQrvU9Mqc7PwQBSC3nRdYtHTBibpvvdfpSyBpWr8Xin1BocaJ55xuVTUrSbABKpW",
  "key26": "GQh6mL4iaWCgJptLypP4UxBV7qFKsWSsj8q28hdat4x42zgzVozq1UKgZWBwsGmEH7MgxzWDQ37XPckutPZc3Uh",
  "key27": "3EkQiWinNNcFCXUPaP79mjxu3N1ppEmHgoAQJaaSKRXYAASjBLem6mn9JoKK3zRnt6dSRJV6K3kYjnV9AHj6cyKq",
  "key28": "3PYU1UB3XXihQNnxftnHF8mLjvnuDZpCGVk65DmQjLUgmmWYimWdy5wDzUYSThepXPBbwBmYHLtitw8Mnh8sAotr",
  "key29": "3oBwNuAUHT8fkd3N5jDKLv2S1fUSJawn41HRwje1HmocSNcANhDoW4oS24CMKgjgH3pczFUwwHh1CxT5e9MHkYJp",
  "key30": "3Tt7QZ7EhfnQt2LoTDPJfUPeBniESwuVacSghHEsgiXGnUUsUFp7Cy7cBgsuZjBiYh7taTDC8pPWUmd6TddV7BSe",
  "key31": "5DvnnZW3nuQHqGg8UGByjE6eR1zRVi6YSRVus3LdpUrViVwEqYaXSda6dW2Sxgqv132pjkoUeCz5LvgSNPn1aZme",
  "key32": "3MJtPbS4uUDK3bMfz4nmQr3arVGPdBmHMnDWZh91rnsRtVRFsyp4QZr2SqUs3wMH7GU9yhKJDvHp531Yk9qkgTGj",
  "key33": "4URW4svpvfGX7JhNg79yc9n4zmNMSA8pHwT6SbLhTc2ekqJdKNwQbhnXrbgU3up9o5JvRawzATAG5GX28SK8FNua",
  "key34": "5YuAViMUbJwK1N7u6x83PssRizgqKYkynEjHNwtVqWiTdNrtXpPcfUsFfmcaNW3b5Y3iysqEZbjT5u9Q99Y6DvCu",
  "key35": "2MZ2UaB5748WYFxigmPDPfTdvnnQntsAAjmaoUPjcUSV7NhX8eJDWSkEVPpMy5abH1CS55xVBGmzarhPTYwK2YHG",
  "key36": "7PVD3vun8DXtGQdjcwkxAKgx9TQmSuzLHVUQZ5WKrZeViLZu8nzai33UHojgxaYSyQsV9rmfPN8spcCQz6RUV7i",
  "key37": "4sjJ1DivghspXwjreN4HLw8ZSQYi8EP7N4YoibuQfoCVSV7FMxyfBXaW8MCmWUQcXumBp2MBDARphVP7B4mBQRH8",
  "key38": "5dLDmtF9WGKyZXQJ2XM7b2kXedgzMYv3LjxtzKEL8gPnmxXygPQpCpS3Zy6Tn5igCqbhDqRDpwm25FJ1GFngtEps",
  "key39": "2Aj5126GBfsmRW6UNfRBRP6EME7V3UbHC4nNDc8XE6An35XYFTueM7mwG6ffiW5P5kN7yHp9p9ANXf29M9gLJoKL",
  "key40": "2QqHNCpLrKxR9UrAybiRTsN5u8FQvGExFRJEFMyxWeTLdTabQw7twXNopuEN25D7VzekSi7Ea4rZp3F2RSKB2yGk",
  "key41": "4EhtBWSZdkgVPu8K3wDXPGeARKtc6WdwohS4xnE5beUuARd8LjurjERMQEMG53CqGuxUAQgMK1RzMDmnCgHCbyQw",
  "key42": "LqLUF3mLjr7rN3ZQvGXoBZ9wAE8o7gAaqfinEpC5riWoYwTdegL8PnvksCf36iG78XyAWHrEq5jyXvV7Emrmc8E",
  "key43": "4zaEUYJNaUkM1ZApxBH1zHPyynB9BYkGPqD9HLvDZseeuP1z7CPiTbwmBtoiZ9UxxoPnAfAy3FHhmXw9eR1VY4FU",
  "key44": "NNDUhMdp5zYWEv4wN4dLawWPzTJpQJp1nHgqhbQX4bE8e7vQHH7MHWm1rZNkCVaRXXL5THsJLubPRjScNNcLTqS",
  "key45": "3D3XBxHJaiwxkR2K5U8PjHQnmZYJN5MrM93PLwD828YGDwyyJe3bSZdYvqCj1FfN45a1q7iYmCtawL1QGuanyYfb",
  "key46": "3QuaZV3ostBEP7vibQFVNcdiDTgic8V78MJKBRwrGQH9tTt91GnycWGneoFJVxfg67gkQo7NEXscvSPiNj9dtiEZ",
  "key47": "4mvbW66ZDqNHwxQeTpaYgaNSdp3PLetddCa97MXiE5rUQ9ybx76QnGJD3kPVYnXBtszMrwBfUQys645MWDjUWePd",
  "key48": "5sFcui6Q5BzN3S6TnS3Zgcez5MK23NbiZLjKuLkjc1cBKNC6hanYfSkNWMZhFLXLLWqfEFZMsSWfi63WECr6uexC"
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
