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
    "4YYQNVncxgx3hiBQM1AXY1QZ16Xb83WnmbcJmpi3sxHoqH6g67mYjBDx6iHuxHQDBS2VWcjoDddwPgLiUw3tmv9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qx59ccqdQNh1oXnSKDGLm5gQiftejiSTqsjfAARKsJavtiskQ5QxCFHWpsf73hXy5JJL9fGWKd6FHWUhmzUAAVC",
  "key1": "3A7juzvv996BDkUiKzDUyQ6QR88KdMTrWsJbeCHWnTB3L69eHERfGoMSJmtwT2Si8k4AnfFLR5ec3QzSz4kntYHd",
  "key2": "42Cbk26qLVRTvKgjBnmViBpnKjbRewDBuHYbo1uz4VHVFtyr7Z9JdrcXGDy1tNrUZFpN7L3VPDtj3vceHTRUBGj5",
  "key3": "fr76sSgweRWT9K17Rn4qJwNfjFXqZ8omAjRs1ZHMe72skhbRNxfqrtqjNVXdNf2zFQQLjAPEZ7fupxpvKY3LvPC",
  "key4": "4md7Dd23295LqSD9M1GyUAw9w4yEDfcCfZjUoBiZLfoHDGnT793GbtmxAt3bzthxsgK5yt37EHhtpAVdZMCRsgdU",
  "key5": "3rKKww8oJrYR3XoYTg4LvhvL89ZeRpokXYj1dT61UrjLG2GNYrwqWuNxsEk5wtBBEJ1Ejas6sxSyo5n1do3YeitY",
  "key6": "4V57TotBxAdbna259zgcm3h2iPB6Q6C1rUWPq9tJ448Vj9XYo6fpwLp1G2NpTGQrnGPi77xZmnu24CdSrV8p3bJp",
  "key7": "hbJRc6wEAqkyurje6cfTt5HKbuSH34VAW3rnC7CikUCGtkQsRinKrt51s1jUG4o9mQLkpKGdPQ5c6P1FpDi32BG",
  "key8": "5QqTkzWrvWf7JfY7LxhWNbaoEU9XU7FGYVwV6xPws1xhDMCjjvUm2UEDgUZG4wYRVtYPmF2zUwHgsDn5AkZyvydv",
  "key9": "36FPmb9TuFamqDstNa2ze3moj1nEVhrZ4BfFKfjT7rUz5HaJp8dWTQapwJSsE4wTYPRU6TcvALJXuZvKHPsvpTbT",
  "key10": "8399AJRpq9CwyxMcCSzpFkmyV4PzYENbwb9s6vCUi78CK3Jyy4UkJRtJKPE6AWnrsUNvFaSqwgSfyurF9F5b1na",
  "key11": "4eFXnrpx7TRdJE2Ntfh8fpQbp6xtbespc5hmarXobMNHwkVxssJvGB3SZbUoRSs1cNJgnFR89Vz9tAWrhgmdLVuf",
  "key12": "5LHwYfUh5nAeD3t5fpVJGM2wwW8Z9H4khGjRyo8eSZtkCWY1CynM4cjavUdCNt8hjM16cgu8ju9w9MB9SQ3jD4AX",
  "key13": "4qgTBH37kChwXSds5Mep7fm4imuw38nDFDqKA3erCcBexpm2uEVSvgdQhdJqHXhUcJ5jAeResUr3zdCAeDgEAep6",
  "key14": "3bK5C2DGouNk2z2uMCjRXEz2E6rig7CgB3TRmLfGxqQ27ta8mpPyz8HTCxEv3EJz5caHTq31kg5krEa4TXosWCrU",
  "key15": "2z8L9cTtsqn2inckqYXEuGAMKUwncjQsLgCP423y5jTumQ4KkEEbUUEAiwYwUdZyA4rEySFEAHnsTRwYFJtTBNKR",
  "key16": "2cYBGrRbFn1peLstieG6XpqV84gVMvQYTsPpBnqPxxZyyVyZ1h5v76bLBHL1SApL4ZtNYzQ6BE3x77ijmMWPMakz",
  "key17": "59gU1LdGzCpscVnj8VmSgBtFHyCoeQ5gFd3qMRKrPESpLR5eXy24UT5MFAEXtu9f2pLL3wx7VLAVoGBrr8SJkmeF",
  "key18": "4V1KVXvHYzCKxpYiDtfwv9CTvSmEhgNjuHJkEEBS4743AJHRVYfpCEM6ghuSh7S4AEsWcH343ZgiHq6pcetmmYbR",
  "key19": "CeQPsVzi4PsuE59tVUWcCM4obnNc1HjAVvifGGsubZ4mphLM6wi65cCbAQyUVazVv97qad3C5yR2Zb7BFdM12mK",
  "key20": "5i8EEY7Sauq8h7sFUXHUxXL1m6ev3knBQ2p2fhjkuhCizF8oDfncddNUW9a1VUiRor5sjqEjco4ec3dRFyhpmq5q",
  "key21": "5WsswphPHcEu12E72GaHEYx9GafQkLzMKHEV1KRAeH7kZexMNgJGZn4j8XB7m2oM2oeAne8DA3J97NT7UxYTLZvw",
  "key22": "bMvU8TXpjPNtnZATuq2iXgv37VW64DmV9Gt76djffEM1XS6WPYjzBRqGAbmUG4aCyAiaemWWgJeNtN2ioBan3LG",
  "key23": "4GkC4t2eKwgM6Wx6BYQ8NCyh1XJpYwX1XR1zoCTKFdMxiSRE46cxfmsZRMSLJoUi2d2M4zewZwHHhAbSit8AZa8n",
  "key24": "4zAEXEGMTYew3LNid2gYU7edK8C5FVvi18SYMR9XhXu8CFM1SZSbE2X933PZwXYG2PQ9p1JCLK5Ca5LM6WLysskw",
  "key25": "4KbyyApc4AkdUmmS8K4LJTYUHJPLPyRdB7DnxaC5co5KMj6JUiNcgrxSErTUtN4ftQEgLFaVrMYCeQuKjNgtSU1U",
  "key26": "5tn6De5BqAtjuU9o42kqrfC3PRTHpjUFMXWZHejfhvdDenQA6gTCBuNL5YibdPzsZCXQbw3P9X9QRkwTPev4NRvn",
  "key27": "4gGish7Y25VoufBRjEwrfuXokR6r6ajz4MYSup97p4WJ96qLpzR4m5j1iTCQ9dUnPiiw6o9pehe6FJ19HnsAqQKY",
  "key28": "FhDLVC5q1cRR3dzrMi5pMJMpL7KNdKhJU39jW71j2YbLswQ1dEWW3zM7basvHY7dTqvbkbFXNKkccFMjWjMRRyJ",
  "key29": "fUQY9jjo3A8NJSfMmHsxviRCcBnCch3HviWx3FqYxXkmJzXL9c89qZ3oZns78L1hfx2hE73XMwAGTk7qomRjm1m",
  "key30": "5AM5ktzFbo5ymNguFqXqYS6FSn3d8pYA66dDSsNVQVodLEzz96R7kfJG4oH3TZ32woGwnjYWGnJLZANkCeJtJ2LK",
  "key31": "58K8mUFZr3X28QWZ8hChUp4GP7Rg1bj6gxHtqHTvnLRbSa5tHfXw6BxKQkTcFctapi5Jkvcov52Trb4w9wzAjkUF",
  "key32": "4kEctiHkfLJc1Pr6gajGnU3f9W613FRme6MkhHAVdTsrEnGvpJjZ4NioKYPVRicAGKXTXTnxmXtdGaRd3yBzTiky",
  "key33": "kL3vb28y9Z9hMZtKHzbLwi93aaZMtyguqyi38VhDBsWuEaoHx8reHrUYefv8bGuPfREwUKSQF4u5DYvEGVqEdaw",
  "key34": "quUBU8PevGpvGK6gUVTNqrm7Jop1zmairsFc4EZ9wYSj8iMTJ7jiLyLxBoC61FPJ7UbTWve3AHcxirSgNCzbM7T",
  "key35": "4yDebNjASgZim12YqeanUjzFbD7WzgUxeJehstrwfuVtE8hSDfk853XAc4hfMyhx3XQuygSoFktwTvL2m1GRjHZ5",
  "key36": "WaQfynnE4Ldizsb9QxKVSMugeSuyuiG5iw1F4nJsNPkCnse1bFgKXdjcTRwWYXPATChxP2D1347iSUVtErQUk8z",
  "key37": "3tEJz7yPixoKY3YhVGj2JVqFFNCEU9pE3wR6xW3jqSktPjgY3da6Bvk911LHrztr19hZw1NjgHEw5P9EJxsuC6i7",
  "key38": "39a4XkMdTHGL33p4UJrFM43HCRSnhmis1jKpXFLGpKHwzMTnSMgesiNa4spEb2yM9JYtjauDoKCjXmXSfqHPZsBg",
  "key39": "3FUPn9mjTQ6A9sZhPoUBYwzKSa2d6cQKqsaqR6kQsDqs2CshnttKfX2DDMEyv3WRgKbaG4vBzUnfXFF1CpxbzoXL",
  "key40": "4tswrxjohYu67xKTnxD5XTJBJstmpAyormhn1HMxeTpwDBBr6ZdvSNuAY3wKBdQLsR9CNiDioYNRVMP1ddmW2qhP",
  "key41": "3rJ7qooZyf6gLsGizvfxZnyVf7v3S8bFCvMzFjyi9HnbgKQ34HQwPXMGwnjHi3srx9jnYDvJiQSBrpxFQtpnjoWB",
  "key42": "mhpcVx2ZdFNnkD2H7TcebMvuN5fnzJFUX4zTJnmjnoew2pWp2k3DvgTPPmeqM2ka5VkRNVBBjn6kjjpnwunxe5C",
  "key43": "2WDvvf9AY39NCXRsxEDnpZVGBaimUisjAipN7XnTVCb9VmAM7VbjVghQcfWKdCGAE5KysFBRLEfjBC5XpqBRYRAL",
  "key44": "67n1S3ppRFBDH7LJLRY1bkDhPTyfGAkiefHEzqNPZ7e2c2ZEfLs5kswQsbRmJVmDQ1VBQfEgnmmg8yYmyrA2xAV5",
  "key45": "a6pBdSXVn66hmCH1ZuJ2zdpe91CfGvVApV9BjYvo3DWdDCDNpdb5oyNiyebXwCbtGn6N4vgu6XWm2b7mMWquxmt"
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
