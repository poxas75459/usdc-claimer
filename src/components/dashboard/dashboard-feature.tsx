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
    "4eKNtk51zsxDTaBLuVB3Tqv2ubX6ZkDhh45GJ1e1vSvnhh6azuX8m8jgWaD6iAJeDgZU3FtcLg7QaF2beS2bj2ig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fz8sw7ZpsBcfwX8bgn7vYtAL1V4ANn7qRQugd4HKyYJySUFiDEWwxZTSfFfHjP6QYazruC3SPJYCur8BAoYtKRw",
  "key1": "ZDFTrmJn9QZW1G2E7ggSp8AJvCGMJQwm8UdzWyEZoL86Tvqm4h9b2SzNjq8RpDHiyhWy9Lh2bojtP219jFVr5Uo",
  "key2": "rwqELsH7hqcQcjDaEPX6KMQ92cWvMUD8yQ8zhGozhYdaP7XDpcj6DX4jFQ5dtTWpWrc46bGY4r2vXizVyX82zpk",
  "key3": "2egbwpW1LTjQGyeY61s3Hmwx1Ef6P68rQUn1rgBQCNTvPjPPV4DtUwN3WHp5Mk7HzpGL4RRLcUNXSwxDqPkqYLam",
  "key4": "58CEPtefDB2bXfycuBoNcsvcKHMEnMYhgB2gfQHj2cJX7U2o4TJc4xeESo8mYxecGomhbAbvem35LBeyPfbsn1S2",
  "key5": "2LfdkebFGkAHjr7LPTAwsxLsJbWdrYtCXQE7YjQ9YCVi7gZuEnYS9PVmKCzHCRqP7n53nndGGssTEszBSxfUETX5",
  "key6": "4tQsLaQb5zJoAM7cQQKKpK5v6kcJwgQ1MWiCYg6LRUfcER8RnXDokiLtCkVwCvp6MiNfhWhEXrr1pQX2SKVo3Htj",
  "key7": "56iJR3z7UpK6LTGBdqWb8BDWzgeQrvPA1Eqj4WEongiqZHT4Ckj3hXzBfgcJXqvVjc6DayMTyDyGMRymfx9uxbge",
  "key8": "3L8eMdc9osVnr33KFm1udjmTRYjjgr5ed9Z75FKaxeP8PWmFw38Nr87xRjM3PeZWee8PvUrNtzPnEoAgBnUEnAdG",
  "key9": "3N9Thb11zkP59iqJ5GRYUvBouVrVR9VH6UgbDcMgaQsEwjsaXqduKJAXdsxCGGHpPsKowaJuJBPZaGT7dC5vYfqd",
  "key10": "4ZrmLm9CqxALU2bRCAxF4hUHZjcGbMLB5GeS71ejqSLHvXtHoryx4aLmXQvRny9M9vE3a5hTBjNiqfBNpNxA7GxF",
  "key11": "4Jif4adV18Cnycbaoqq5Jnm67k76fz4pPJjztrVBVhGNPyzfpQZUADs6Y2vygxjNHf6z5UMqrA4KGcz8yun3ENwE",
  "key12": "jfCCJD6j9TownceJdtYFDqgfCAMLLFfBJCi7ELnejNdMfZUhd1wWNuC7uUorvLn65yqBXGgAzmNBMRG6Y8rHytp",
  "key13": "KNQAGBHqTCb63aTZtzHj5Rgg8fcfJMiE81ksdVkDsvcVAFx7hP6P6zobHTvn8cLXS69Tc4hiWXzb6beGQXFzuoF",
  "key14": "44Mz6PhqpJqUBkUWpGiGeyBwRbDt5MymJbDDxCxXuY9KqnAuQRcCLd9tqdBDCACcqZngyckqxGTCLQ7ZFn8d3eKi",
  "key15": "mFLsycVFAoUaK7FtZMWEjza3r5qQCsLFMuUarofuYX5xGVYNWN57R9HtDnAzfTV5evrR3vvTMwGF6eP9ZHp7YJg",
  "key16": "3hE5zDvBN2FG6r66YkxkiYhe9e19uU6DeDJpg4URFD32WDUT39sYZ5CBYPb6NYw15saeam7mXjZzNLDai7mrozU6",
  "key17": "4FeSaY8nUkjsrNFcVmHDPd4pfr7KbM56ed6QwAq1qJwXeKW8E3JFAuGdmXQ235nYfp2Pz6ppmwbw4ihR7VD1FsFA",
  "key18": "qdZ5CFowNxJeXDhi4cZVTa3iF1n9Fbvt6zNZ7FPF7iFQSLxCpoF21QnE8Nsr7TtvN7xVvdEWq13nwmCGrFuSBHw",
  "key19": "3gfgp9yw7bBw8XqnC2tRSSLkRLBFGmWhktEK2Dz5ZZd46QJVZmdToivT6MjrM5bvRXMm13eihxroSXZcpz52YTUD",
  "key20": "4PwdpcDKnu93Qn6AGmBawzmDtnZfTnbKX4M9p2iiuduAPbJNTkyJmQMonTcw7LKPszin1YyTa1mkNzZSiUnpQYNM",
  "key21": "49NNwtmAjmBhsE5nFvwkBqnoByiNageSGfxp2zW45KXtt2F7hV28NRvnS6iGzth3QR22dnJzixhRjskFQjZhxjsc",
  "key22": "5ssug3pzdeATKDcCLkt1A9hn8oad8pzCzM3hQvuTsjxZPT2VFmZjnKzBKeSgjB9qj6KbcvMc7NeGAZiKdpYXMpst",
  "key23": "5dLecBHQKysYYMxfoSiyGair7R93shbYdWyuL9V61pmrBosub4xaxJUvJL2uREpXynSnBARhH4aKNChW4eqQmq8P",
  "key24": "4SwccNSwm96wZ4pCtd1QFcrCA3ZbJ65axy9qAa1F1y3wx7FZx32gzYRvsdRy4tEauTE29KR83YjttuhduwfrYfax",
  "key25": "22LtzZJHvdDrfX3tK5QSTkRZqmPTbfxRTr5fPA9oQTveF8hQanTbGB8p4yt8CaKHjNwNajPyCs9fLbEMULccwyHj",
  "key26": "5EmNzqj8pNN1mAGrZbTfn5AXsucBgAVzHMU1VziwjyPJFDP7LwBSgMk7gFPZNVPXfbf62yoD5Q9VDs2dLJ4oSiLK",
  "key27": "2WwZbqZNJWCMZLoMCkQwMn1vMdRzyRskfFr6nuu8mbktpfpRkXBBz2Ctvfw7GXKSZaGAoJHygxJNpxdvcm5TDmK6",
  "key28": "9KBjFAb4C3DcbJzFZ44y2Fx2aTeFev7XtifHyM62whwXhyy5gjGdNticiZeUVLBwZZFBKEjpwKYzmgqqDjmDT3G",
  "key29": "47ATdXy3AvX5p9rNKhm49iqF8ZAXB2Kj6z69CjthcDza8MiovPTnVPTbFmC2EzB22hcgYAKwLCJ1pGVqYcqszVjC",
  "key30": "e9tYRN63or4zc89UfyF8RuYVPKzZXrHyPGewRFe8Pvr3gJCC1HWgBmdSGfroRCZ26UmJFTjdkcaWCK6jJPJ2TKp",
  "key31": "27Nv77Q5z3c4wF85GWV11NE27FGizWApVGBn5MNaeCmybmSzAPfE2ceM6WQxRkqUWVcmKMeERN8mJpSr9JAKfo6y",
  "key32": "3iks8fKDuNESscQ3dWdL3RaNwWssK39CUMDBH7enVbzWKytCV59fkiEnUDpw5KUa21QnqMhJWZEguhqwFuqtVmEX",
  "key33": "9a3u1bJXTmf1tbcktWUvZA5mZwHaZ7FzouTz1h4vBMG4dCVhQisbh6SPgTEJUNEnVYJUahWuj8C5H5wTtj9PKm7",
  "key34": "2VKPt3UrFznDmboNaUDHcy9e5wEMt1GFN4jLjqsAZACB94GyLTws6VZJ1bXkMK4KJnsPxvZVrSjBQcdckMJyaWhS",
  "key35": "5uLnqLWXnBmVEmwBY4FzT7uWTdDwRC4NdXbrRrVWM3gL6UtKKMB3ujTKSUYEBdXrDk66NXo5Td6aFsirperj2skF",
  "key36": "49mvgXZtHDGArr8Zsi2SsWs7wbmeDAxpeWiJ4jusPexJdVCxXM4PGcK19mxuwPrFfvrPaoySLpncnSXhpKeHxVND",
  "key37": "52DsPd2Vt2PFGMbcLo9UJ5D3UuMLQGUmMg3d5FHN9cJvG8a9UD5Grcg1iz4cKZEJvfD5gy5Z7aGwxEDAB4yA64cT",
  "key38": "67TUfUCBb6jUmLDY8tfAaD4jnZRGspaqNJocQkCARr3MqyDizdw1dKWLQ15UpfBoqQncndNCd8GQ7n1MCaJ23sK2",
  "key39": "3nBt1q1MRV1WHSHRCFqBFTGq3CaqjrqveRaS2Vv1rW6kVkPSESN41oxdu42qbPtJ8cbQfGyfqJnaPZZWv1ncSKsE",
  "key40": "2jidA1WXxPdsYsHwGRLsqJzPzzuJhrX5DvNwHjCuTU2udKg5bZVDzWo9jsEVd3UxNujMtAgH8pdz6zUAbPGXUNvB",
  "key41": "45GE22pWWKcv7deFF7rxJmZ4btwJekgWuRqHu1hLE1cAWjCsTwVXssqjt6pG1gELaEd1vpfpfD1kGDMKdGWs9NE4",
  "key42": "4CKSdgCUiTWghBNzCTYkhuZ94oFNU4ka68fwhvGhnVpps6KZQzWvWJ2qDJiEcjMjKxvetQftmBmVTtvDhJjiAKPC",
  "key43": "37ZFuHafe8uUkwGMXS9T67rMGQkxDML3irxNDpbF4QBqFBtTk5GGtXzfRNTdSCJddHoajpYpbDYrY3kXU4MKKSer",
  "key44": "86sR3ts4WqmYJpvAL2J1uspBnGB5SbKVXxpmabWqosUwJ2UKC1HBjR16cYBetbwLNGBYvH4iCbNUMDur2LPPT9o",
  "key45": "4jegowyanW7dAHKJuCjpcvZverL3v5FDW11fBoiMUnPbHkoxh93T1Tu1thhwkDFZ5gu2Lg7aMXzexPbe5dTFDDFb",
  "key46": "4atZDaX3NuiXvisZZa8PsnZVYi56vcb9FbK15onKHtwMrVrmejWg5hGJzhysejsXGvYattGBALQpXU1P187DqSCj",
  "key47": "F77kCgCo3RixFojbB3M6eVBWaWsGDZKw7NiCbgkwfPsvKSKgFUd1qtLMcVN3j87Z1P2dh3dbUw6TVW2Pr5B8XRL"
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
