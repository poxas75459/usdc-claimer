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
    "bu1B7BHmDSKquCRdRvCRGfKHkMYmXdxvcGRdqP3N16MWTwPVPvqmNyZmoU7mFQL59Qh6nzmFJrTGRJ5jSB93XM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sMHGzuEBUkrNQSK2tAyFkuPw8igAzfLbNHTFV51BBjXPAF5PVYaD9uaM6BzWZrMcg5zD8goxS8qFobRKkCZYHYG",
  "key1": "5ciyLVaKuLsUsEjpdEGCmBfffx8G3nLZBToKUSqrwuEf4wzkpvPHzQEwjvnqNzRu49TPdJxcHnsdxdnasxxfRbRo",
  "key2": "67HS2W6obQ4FkL3HjxsN11waj9ou1gJiDF7AjLBHjKzN8jLGgYhRjXzzVetoFbkbbMfug2FBKayqe82jGLvgifAY",
  "key3": "3pmyutkHCG1ortHBUJgsx1ttDzzU5AL1Tg4de4j4Y2ykDjXdnWd8SpUwrVNH3wS9VAnzo34FKsoKhawSnXoFovEM",
  "key4": "A3JCd2VGWuGpycnkrGyr6uwpNZ6Yg268GVDiABgtuVkzGmj13VyTwhdWxexRagGQA8d2t52ihuwqk7iwEfkL6ev",
  "key5": "uTTueDGnkigspzhMie5b64UiG4ybSnSWxZ1dLXFHhgoL6UzJikU7tmP95YzXytLmjydD8bTtqgbWVUiWqrWTKnF",
  "key6": "53qmK5uL7xxtCXrJqfjUYwFfq6csEiiB1e9Dgsh8QFEJT5QMMX64N2wiBASgGnaTViB42tVPGKQEpm3o2KjoDkh8",
  "key7": "5vqzQRmVJJ8c9FDnoRae4vhe8wjneENjWrCpPxdCEFHVQEoYBqNMYAjQUGzaVZnYtVdQXBsRUX1dArsyxxfokZsD",
  "key8": "63aZjgypzbBQHoJSxHbw82WvRQ3s4ubpmG8VfxCH6m3YZhJaWaBQrsay39R3nThsbo6dnhaVJcqmdBNGZJHyaunn",
  "key9": "2vz3fFCYAf9k9L3AcskynD6nHLLqgue7uDvoiJ3UcPj7TU1ehPix3JVC5e7QyvM9YjTj1RJJD21Aa1BgosKiDrcZ",
  "key10": "4uvT3shGWGzgxLU3J9bXDNPZHU8JokD6YFWghpmUeno975ucXfPnBiQVvtwz1dpGhSfLrhs2NgqC1CrsHspxNbZX",
  "key11": "57bfgK6cpQWrdBA9Y6VcRgrUF2yMRnfQdxwc3RXrG5BtDd2fb23oXCTWw2kjJ5C5s7moJMeJqHuzb9ycRQ8WH8eb",
  "key12": "58kZ1W71qJxNDkved6A9XNeVTZxMiFjETEHXHmp34qLeQB94uAJurNqPhDBEgut2KoxSjyYfdYrtT2F4ks48qwCb",
  "key13": "3ZEn8VtDrHCD1iJkzPLhchtx8LJHLGZNVrkxM46xXZWJobSTMxHrwXmVnotiCsdPMMXeofJeDA2Uk9XEukc2EytU",
  "key14": "2gLgp1CeDG2DnY5KFkTsTiUT8wZaQVWdSzTfoAPhqQujtxkbAc8Lnw14dYXfCmT5Bn4xRauT2NM18rNSpmzUr9Xd",
  "key15": "vcEJcrpfsqMTVRjdsQyDmvKb65jjZQs8sfTbtdr4jUnfydKLVsBRtNtHdQvNTW2DkQXgPbjVkEjypGpiCjbudv1",
  "key16": "25GEbbbTiD412tmHrwzETQeJtQfENUNPukjSDsQME2cVNYgEqc76hgWExHusoXsk1WhrDK6VYaBJ3qCGGtdE9xoF",
  "key17": "9EeCAVJ17QbqUNoWAya89fBnKb7jb16oCFRFdWmqsjGCNW4g32AgnGKD1gCARvC98HwFcHvEyqxkJgLtyz1qxxF",
  "key18": "A8kyboo5E2PCHYAEkXZC71NsiPriNyVvc4JdogxH1LK2gFWggMFa7E39RbiM8ZipL81CPUKzTUFbVCyREDXbnjW",
  "key19": "24QmhhNy5j2dGKrRV57jRLJuSsLVyxECYwvPCNmq2MuV5KPwpkvcEwteLN6t4heRDNaLS7z2npb5Nja2mg7C67os",
  "key20": "3yFcC12zeXziv3oHfRbKRrdobru5S3jyfGxNPjQ1F2uXXokfvPtgWHzrtQgoGsqMDuXY7zd4iA2GjU6gLMgEPXLb",
  "key21": "jxYEjrqwMvHF1HeuTwUBsW7RurXTyiWP5wLkPTCdBrYSF9FdmdW1TKSzVuThHMLt9BBLnfzDPrnUnYFrKfDq6W9",
  "key22": "5mwwEkahTKeD9aJuixmVeUPYUaXdYyeayVj8UDwibT81pPj1dm6Adcd6NMqRtaViiRJyCUoSMwkW8SGXxFwFFgbE",
  "key23": "P5TXXpUVDqi1d2muYPpF2xVxSe4253qW81wscUTfvbsEhSbHsR2Vc8BVKG6yho4Qgq5MTGVSYdjcchz9Yoi4CTm",
  "key24": "kjkGiJxbXsPt62D795j1stBpK9yzRoykVJzsNazrUTzpmQcK3H2G1aHphRcwGT23d9hZRhPEtm6Y7J4SdHmth8K",
  "key25": "4Wdy8QpS4FbyAfuNDjJCuW2Uqbop4dBauHwfm8PQW4Y5iRftfh9D5QcPoMC3JHn8Ur9SgQhZBttRbTtVwx8cxp4r",
  "key26": "muarECqa7H1sa1NMn39jtcEJdjEXy1ErrZ4FgpioMyNXZ6sf1ByNdxiQe2HHatKThhkg8cryKm9vUo9xC3F9gCM",
  "key27": "64FgJFgBbSDdd43b4EeMLxSz4BetWDWZ2cR1wHgyig3P84fnFf7kKrBas7aeEM7DAxHRBRYVXbLR5WPiWC3uhsJu",
  "key28": "u7KWLDcdvLDmWNB7j9yWfXbGxoBxaiJBT7jirbLqsphDHV4rh7RPkS5eh9XJ5DNBiSk5N1yWDMJphYN8Pss9aX5",
  "key29": "5Cr7Q7PAUwbKGkDguTUNPrHX1MbSkXibmknf67A3geQEU8Eqg7jSC1j3GHonDjv51muNx8AenSmA8ytKvFHqiMMq",
  "key30": "5svs7ub6qcvbgHLMDnocoKyEFo3FeEkWrqfCicRC98km6yyeM5gJNRqVFM6h2Y12218VhpyBHcpZSG1jV52tmy5e",
  "key31": "8dUS5DqDiWoh7wESep3B8LY1F8w4JTUwJUws2AuhpFtSit8PPFBoWgg8jajbmdYWXAiNyCm8yfv5Mpmf1a38nMS",
  "key32": "51K7ktk2PynTUGSfWX4Dx8hgA9QJyBZ8wCRck1CWV3k5id7ptq5LJepc7XwSfvh3jFnwgTkXp4rsKJRiqbLYCHSw",
  "key33": "2YH1nVAN2XUoHeLZfQryqaZBffLzcvGLb4zFzu3jx2DiPgh8uzdFo9w3qhjFrqptqhHveBU6oRHaRsoQEBrJ7iv9",
  "key34": "2y3J6w1vNgmZDi9BfxakousFN6F55yCbVVcCpxE5QFKzbY2YbsaL3u6Pn4jYxqR5T4aZZTovWULFyCneYKSQhn5v",
  "key35": "6TtZJM8t7Rco7h2WT1SWwRRuuovNZE2oZ1b2AjcWHNKgL6Dyg2rXE65vYiWNYQwdkMLCoC1praX4phs4pDJTyBK",
  "key36": "2bnjqvjzqtUm5WFC9WzZviRwBefCrnLLCJbAUeuMHwNMALNvY4FsctUPqVMPEawpksFM11SEsaLYQzuSCZT13NDb",
  "key37": "4WsjPCWiphPgjiQmcddFXwDaFjYdR7KggZjNb8J9XurAE3724HrYfLYg6M9CLrXxkp1Xsktx11MfbHnP5SXfbXXD",
  "key38": "2ZNWb2aG5fSouu1NG6hGGoenJ9oGesqGMXE7qD9PceAZiG9EhHbmnWviPe1MqTHkn2Ys2ahzNAC5JctQcauj2hfL",
  "key39": "41g634hxmhR7jvvAWYNKwUNF35u5sC4Z5PYTRVyzRqqNHBTKnhWBTAwpxiWCucFewyZS9Fyn1L3FqBNVG6yTEYTp",
  "key40": "3zQfDT21WDhvAup9XPJQQKUknXDn62tkfy2ginNyzBtUWNZHKWJhkaQNa89GrspJmz7bFCVfdnaejrfzgQyzEAX9",
  "key41": "62xNYv7WDr6kPT5Aq3RTzkKgKSRsxH5zuWTY3wFxc2mcf97zoptFEsgtEsQ2c5iWR5wwT7WWFDXuvQJSigX1Ytt2",
  "key42": "25zZBbAZoFUrofwX36zhEouZaUh6WWMRF6NF1iq7gwkBG5awQuPM3edbYsRkStaXdpN5BUtT8cBUAte3vMPmUBqk",
  "key43": "3WUGTVviasJmAt72mdWDggz9HamkvzqMTdmTW9vF5LzTVA3GRjyYsosJ6GeTjTUJGhQuTsDCkziUvMBY6nPostia",
  "key44": "5hXVg6bCYy6ZdxwrzA2aSWmyS2CvZcC8nsjFDgXKqUdMiMpECsXkkREihzGjbKrPTwLYoUg6kuzZAtBWCnBs8Qme"
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
