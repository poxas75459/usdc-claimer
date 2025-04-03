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
    "5tULkeUt7WLvx36GcyXgnJF2gc2NGqh4pFaeehu1o78eFMpEuB9A6qZCKTMtp5Aiq1MtjG24xPfkWZi7gK2D1tbQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sv1JAqRyT42BYkcGVHRGcQhhhD6UuC84gKgm1UJiVF7wddR2CeHP8riK44GM4rSEaWoG4HVfRSiPRTo8CYid71g",
  "key1": "5MoP5F2Ke3CxR7D67nbCAJjGhrFCWhKjPcyzf1GvQ21BGmTnTFBaVJ1ig58VJ5FBkkRHziQre8B4BRa5FC6AoEbp",
  "key2": "39do2iy33nN75msBeQhTjHT7GVBn7KPvqJ1kbB2vhD3EAnor5veLTzvMpS19EPj7wUvinSvD2Hf8XPvqvfiJdN1D",
  "key3": "5ofzF19P8k91Enz1ihxQ33jnKnVhzL8TJ7tT7UfVZsrjBr4S2LKaRdnDBsvTdcKhuxwT66DRQZeRtzvY6d2JJZeF",
  "key4": "3TYrxcKZrsHrfT5YEKd7BuX6gjSt8HqJHaLa8DWmEkPqDipKt4EedfFicDn2dfLKv3U7w5u61Ty2XFRZiWK48EZa",
  "key5": "4xt9ZFb5n4JBVLh8kJ9yixfGsrUmwTXSJ83cMwnFo7o1egE39EUgZYFcUeyXd6XQBRGN43QgGQ1rt9znnz23jUes",
  "key6": "N4SdhAdKCkww56eHKyjC7ckNbaJjkZXs6b4V3gwiF1185VSnQxJRBSuNzorQyYjRpvcq35xynUwMr1MDMH4cuQe",
  "key7": "5WmvsSsCs7hyLaTF2A32p8xQ1QUyW1hpYv7zqAiaHMQefJiyiVMBtCZqaCTAkA3uArJGBnCYUnT1i1Z9aJnJfUNR",
  "key8": "54oMhUhS85ekAcRCFFQ8szwL9dvxdtbJV2fQW1i78dGRuB4aeuza3Hows7oAZY9G9moTKNECLe5PVAt2WPiMP1uL",
  "key9": "25HmkwpYwKPCL8pg1tGu4N2qr6qzfe8z7EJUu5jGe6jbPKTcxZP57J5ovwUbmkTmPrzTAZmHAmHiUnPaJSXBaYKG",
  "key10": "2aDu7ZKoM77AUmWya3Tj4ZgxN9L9TtULX15Jw5sSHf2NHoaCBEYdVb4173TaBgfSZEQMq8ByL6cVtSXKs18nRpdT",
  "key11": "61n7Nuy3ZRMhGLD2FPCVzgJREohA6gMLioEfZkq4c7FvoT5JhYK2FPzmgudwv5SFudSX72gTSzwQsy5RXMrnWsE7",
  "key12": "21c5KPjJ3WiQDDv1bgr1JWx95jKEHdDvQg83LA6yUKBMbNLkvnp1Ani6ZT7hN7xEsTFTfJN8RhsswMxpNW3Rjtxh",
  "key13": "5j7mggHkHaiJL99MamJUSZ8VAe7CeLWrPTMPzX13ReSzNsb2WVrqrNf2YDkdkb4MHA7BZPU4SYZ5Civt21CUi1td",
  "key14": "2ZZbHGc3WDWBp9Nw2cBmprTJmBQ9Wp21WJwJj7NEyq64Jhj2sXG3p7vCCjPsDKcJb2pn5vvjPeJnH4VbRQXN6ZQT",
  "key15": "3aAXuAXbeFrLEkJ3DoiYDULCw5SUhJP4Ua9wuNNFpLSaLyW3UZtxUPMeiyY8Quwshwnr9Cu4uaNbnQ7g7dVCSKsS",
  "key16": "2EbJ1aHJrF4SDuA5bA1KHVLU4o3dcEmPcGhBkKNv1cfpESvyVA7pTjUvMJyoTypvmCDB54CgF58H6SbzewFWc7Xf",
  "key17": "2z4vLuf7vCC9rriY3Dxstx9jibKBwHVFnng7dmxBBbCtwQJE1iX653ucW33SbXBpubJbJDS3cs14gdANzCPo4jcf",
  "key18": "29mJsNyJk9AytTDy2UwqSQXfAepbAHtVczLWwmA7M9tjwVxSesesP8PR22jrYM2TQbuRyW5CBjdTDhw5jCDmm46i",
  "key19": "iZKFLY87LyK8TA6qeDWRaJqre8JSbVJxJcRCZP7YWZZt4Ag5nmPukAUxDJbyhS5gft89P7qDUjpEFNngGtwrt8u",
  "key20": "pPqHqmo6QuJiUntzn96ve9T8JqRTXQ8LhBdmrNvHm3oQ74g8y4cuYfLfGyG2FYFsLSXvcxBWs5STUMgDFKafQpa",
  "key21": "29TpyVFcPZGMrCdQfm9cs3nHyR3mugyRuxGfiq7vAhPc1j593TdjPf12pHnHwyAyDSJcrtczCCiNr3TXHHqT81hJ",
  "key22": "59shMvjTRtEJYrHVbFGsM7ZyYm5MbKmwy9AUYkg3gYxbVA13RZpPH8Ar3ZLmk6df92WcjE43qJvwUWBqKVsiA7TV",
  "key23": "4fqdhpEo5B1rDWm5DkU9wVCmAywbTuna5WSk6ANeWUKsSv2dqsxZGfDDtHNpxmMWLQJe9aKnJekWQMUm9g57PL5L",
  "key24": "25j6zR44aAmkm2Pb5oYAXkByggfz5xDzK2e2mdA2WFdPxH5BkgxNhu9uBQAxVsPzZHPQ1DuMN83Lwm4mxqQzZHQG",
  "key25": "5xa2Qn5Bp4FGkEPbhq7fvwkzw4AsBUP8uKCPwE85fLuT77MEkZQG3aXyqbznduMAEs3ZugWRGt7ATaeynTbU32JW",
  "key26": "66FhCdMq7xNvJQYRmHiCNwWoatGjcxumhMW989FpvzGcaJ1bpyzoVTPLHsX4shfPF1sQtqvD25KMbNFCg5Bz6Xkt",
  "key27": "G1kVdwXRstVUv9duNDwtvCyPGQbMM7Qr6LRVVkaCoLQp7gZbt31UBkzq5zioEgTJjhU6C8NyTDb5Q1o7S4f7UYm",
  "key28": "4Zh7EUXuAPZxGawARm8UVQyoL8Gx17aEEKnzFvHch1jkDsgsSsXAaysiVkuVaxPtK4RjuzdAUeeTj4jQqV8Ja4t",
  "key29": "41aBw4aF1m7breAtW9HU5anbjbWgKEuSNzwqSVTFyhn9AkNpRgLhzkL81xgmBMyT7t1Ffj2JVyDKwo3Jnn1VWL9X",
  "key30": "2oMA3WQPd5EfC8spEgY54iJ3ga75KaFgXhLMrVVLsiXTQ2hgfbSF9rDAKDdbNcdgRxeQSFPUe4XkugtHbqWHcakp",
  "key31": "52hxMEDBYVorBkyq8iSZF8PZcxP8a21yz89LYavXoC54SCJSBZkrYp8j1rUGHYBqypGtA51FCAeg2RRNkgnpoHgX",
  "key32": "2CgsC3r2N4iCGq2xWWoz5QMJfbGZi126qedKBumLB2oWmtmtN9yKcGEoQsN3uwSqicgFbDra3RtNmVXVPyoRQgvD",
  "key33": "3Z3Z1kpmu3nphGRij6UMvWBgFtX7SQ5pXgttFLg2aar5CNiEsT4TGBfc5AnPEW4vEiWiN2fMKYsGwyEQ8b8dp9Kw",
  "key34": "5y2gEGjNCUCsYGsVGhfXwFms12N1mpSbvpeUSEyRjfmc9f7RTwQ8KUMjWxNxMAv4s3CH34ffLpjXwaATojFarnLA",
  "key35": "4QYVGfzjQWHkAkddML7Nz6pQ5edXL8KuV8snr3pTPDYoHuKsL2LHurc98nDPQZzFYkF9BxGw3ZGHSJczZ77myRid",
  "key36": "4PYzDXK6AfamtCUYqe6P26KjSbVVu7ZT93GsjLxcSdYGYuojpL77aaq7WDvYG39WpEXGFvMp8dthTDH9D1JJudQs",
  "key37": "2ewLKoH7pMsAHj89REh91dEYWH6Sketcuajim7agpHE36Yyeiyor6V9Ykof7Lkh7iUmNnrhsQW2vpZDXz3eHWKin",
  "key38": "5Yaus2PY59y2K8KWQKUiYuUVYygAYkyRXfKN38SvUMSTkfy8TwXn6SisA48DTDFbsH69cjLN8QhgqsnTGjT1HRsb",
  "key39": "5tQMkWF52vZjkbntJ5tnCZGxhJykbJkzSfTWUVfJMY8xLCE5xyXcSHWJmWVTxGtMd5EmAGNoRZftkPDf4u8Atw7u",
  "key40": "5NYGdm1axeSNP8TeyJMXX2JT815eet7Q9wS8amJwVaJ18KA7mNhQ25mXJCpki2gJEtEmiNJPzEMCwiUi32TU61eY",
  "key41": "HaLvYNBsF8rtaTJe9o3mVqKqq2VRTeP49eqGJbo9mZkFxg4GZSRrYss6BqGLGCMtkVBRacrBzAPirawqk8UL11d",
  "key42": "aT1d1dLG5rptnvp44q87uNGjmbHZ9NmK6KsYReYFvXa1PBvjEuk1ykE9fhqRkHoExjXWGxCMof5KV66J7tCgqsq",
  "key43": "56M2wof7NhqDRYqbQUsv6KEczgnCCmifog6MNsXguR2QiHdB9Q9UW1oMd4YQqfgrewsXtNhqWmeMe2DtL2Kraun1"
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
