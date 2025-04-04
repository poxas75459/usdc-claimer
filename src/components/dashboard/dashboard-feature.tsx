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
    "23iBfvvWmxzyWrREwteu5M25TnLTbEMeeZxd6Vzqx65NuzN4DR41FunmwUsv7n4y7AH24f7MqKwMWq8X1T2h9eKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fGwXZQRq96uVbrkc4TPYKKXVmqUQTbTo7eF3FrgfmjWWoH7hDGMwVwGBanzPi4hmXTcGSZiHzfZeD5XcVYrEHtW",
  "key1": "5mDXuFGaBavRQf61xPGL74rmXbT4NToKEhPeUWHVpvwwXPVmQjePfuUkE3mpTod9wEZiGAoSjCGbLqX7Cq15JUKn",
  "key2": "5qni96i4XDik2yM7TkE25p6ZW5ggGeKn7B9aH52rW7jv4DakF6deW42cv5nPxvjUiEj9gY4TiCxu3iVX59RS8VoX",
  "key3": "5ycSSztsZRKrHTa5RRmyae7cqegqRZQsKSDiNecGkHDuRzG1uopPywT5fW7m6o18tBPeZoxSTRpVPmif1pqD2o5p",
  "key4": "4zPwrXPn2CUhM8T22D5rtFcMDXjCqV8bfaEc3SrWARM1ydvhDuaJzzQkc326dqToUJ1GgjGrw5LNoSfgiPhsmQPv",
  "key5": "53YLDt557gkXHmdQfV7Zc1QV6Jf8fECXbMuYrS3JiNMCB1xEb2vtajLkDpt55C6zPPvprzSwdBDANWUy3Z3kzXDp",
  "key6": "4mQkJe9UsiaXiR4enbHFKzKcmn2G6DnnvwjspdhzA1gcsQUzz45rgVHkiL671Y3UdNhdyF1ytDEk7LQTAdPhqyRf",
  "key7": "2byDWjrsT1y2T1So33i29xifMSZXXW2wxa5mSXkvhcDefphUnguTYBv7Hqmwq3oHPycqo1J54mdrwF6pQpsaBZc4",
  "key8": "3ivreyHf4u7rdAEnAVXHojPmf5ehC4BDTnz52cyEtGKMdJxFJdWYGEvDAyCDEjxEpy5tWAMpGuFKWjH9FGyyqGER",
  "key9": "2sQjaomKEvng9QuVWB6qj8MzaCKdWeohez6HNbGSQYcUkb4mkCQSr3mCKacZhS6bZVkfR9iTdYGPAH9xX5XALwMN",
  "key10": "3H8UbGAyM3DuhyYxEUbz8FTWUH8YmY2YJUChvq9iTywPkQk4jkihNBuifT6Qfvo8ZQksHWZTGtqUdnUh4Fkj27nV",
  "key11": "5W9FBC5MVSDKX4q2dB1z13Hqz1y87eFFGTv9mw5WAvtJCm5juDGsu5gWUUBiKvpJynkLWvzP6JoTn46TNFN5g6da",
  "key12": "2DEsELQvvoMCDXJvuUrmoUzWPAznEWanK1axvJyNYo48o3AdBuScCYNFfuTGuJgzF2EkdwUBiDKQ8w1BB1X1ZN6w",
  "key13": "2vjKYZoRmqkVsbtxHqGtpH2bPFzUUuooai73iFt1knrug84p5ivS9mWhqkCiP8jod1PwX922PCKxkw6jhaKwvkRY",
  "key14": "2fxU2is62QPWCX12biU6vdncSXnQ9ba2tE9XPwvUQX3LLFw7eNMuGjoovA1GddBnXv7UZa8oeUiL9hP172FF8FaE",
  "key15": "596BoUDQXC73rQRDcKxa6o4AhftoaBfiBqZmXVDmhoPM6twq5jQQkQRaENfY7ccD1kxzvAfSDfdfkkE5WhQyS6ne",
  "key16": "2ucuyx5pF8r5ez7M59D1pxd5qJw71iDn5UAfpbAowtYbp8nakxxB6ps4wCq1zKjy8igMqeLFC7Pm6dTiUEkpUsFM",
  "key17": "ZYDDPn2aZa4ktaUaLQWUVkFsnymMbK6zAJ8g18p8Bpqp21fqYqqSu4fSRujrNLqftUSCNDJPdEwh3Tt2Bya7KLE",
  "key18": "2tMwD9EDQvudNGb3u2BfR1U8BPW7HQ8zbL5Pkjch595kwnXoL6QvRCDszmSAYNpxXpXXqo3vY4a4JekjpKrTEoLy",
  "key19": "2nQyjQ5efAf186aXynTtMPjVD7wsqAjSxNb3tN79x8CHjGm5FpxicjHmseQM8Z2FDvrvDr5iSYCcay2nybGWcobx",
  "key20": "dhPUbr5LKkqrx1aUaS1QaawBhCBBnhQUmEFxBBnHdMsqPhZE7H5jpFZ4Um9keTcTCkMxwdDQHXuXegLWFoSfH56",
  "key21": "4qPHjsQnfX1UostZLwsqhHkuSz8nyT5xypJNwTnoo6ee6BkcAxsES7Q7JLNX81kt3rzNrqTkH3foKpi3QDA4g3eD",
  "key22": "4pFLmVRvLADLb5Pj4jsPMGfno3T6YjBzJj1A5dncebppyoVss4CnaHUPEkRpLfWpASHPBKxh6wnLEbRiG4SLzD3T",
  "key23": "3z6Q6aPfeAuMgFqkW3uNcc46axXWeVLJaNqy3ePZ82xmLrJ2H5RUL9cDoy9eKdeCZ2ssjF2H5Kgcar5FNC3V4JRp",
  "key24": "2h3bcFaEYQzHkpJuARmXXXgvdGPCmMkGHGF8XrrKoNBTriphxAa9cyuky2dG1TkGYCWRKRYAavEdaSpFDC1dX8Xc",
  "key25": "1AkMAqJt8oKeSUwQ1KrBUrjjMxhGGPYnxpvi2BtdX3x3c4Terfj1Q8Rmk7EEEzhyp6xFHVAwNhUEmH52eMTkgLA",
  "key26": "5fKPyGryuxpvhAWv8ostQhp5SR89iEPtobPY3ccQbuYMPqVczrgHqb1P3LC3iSN7aWeX4ngHsgGvQhKfxNApeXUR",
  "key27": "NS9mcNRyhAY9F6ynhXuNj63sXrs5NEWurfCXz4DPjPTadC9TEKvTeBY2PF6m329wEsaKCvpFNUiL44n6Mz2xeax",
  "key28": "5m36j6yRkfbQfLyeuDk63ZVdHoPK8PT1WbWHMCg91wP3eDU2PYjF6BfSi86t8Z5h93uAf9x3jHnMBT47jBqfgimP",
  "key29": "5yPYjUj6zmL6neHmgsT2QWV7vFmown7UWsXTavwnN5AyUvP9H651z2w1Rv1E5yoQ5EcR9u6Xpc6tbCx6pJrJfqJh",
  "key30": "pBSWm17VcvfGRUqBJzuJEmzTWnZAUChLyC7BdguWqR7uQw23db27TiRotg178u9ZANuD584vfvMoTMSSdMGpqsV",
  "key31": "4d7EKXmuQkzuBf1PXHofbmQWBM4uFzy469dvYbG7h1hPM773UQTed9crJMsqS4oZC4Bcwhq1vbExjMYF5M4S5TvS",
  "key32": "wyn3b8KPTSsGQqhR3HDoeCS9hrsFASBAWk7QRNqujdBzvCrXhoEaZPLjvDYSjTUbhv7UrD8ivsQofnEKERVgJ61",
  "key33": "3C4TFhWjafdfmmp3w6wxVYg3P69eR7957N1butuVhH1xa8C9HUVC6EwT8FFkf5zGfG4h65o7dur9vqWpTRnRwyxQ",
  "key34": "3x3UZJxRGz3Hi3NvY7W1Ud62bxxcTXYvc3zyThVA3w7EEMbE9QSD5y5mJhYJMeDfEnXMY5jq4TGEvs6sXyX8W8Q1",
  "key35": "9yUexoPkiXTtT2429G12A9CvD7F9J4ANCjcUHyAmPYUz4dXV5x1Ati5onj3guCGHaNW7R4tYGM2ecaCfAaG4X3q",
  "key36": "4ufXwoawbATWZWC2uLfYPzSivj5328bUu8da6HtU6j4Qxah6AkM1Dqg2nvf6YrT2wEm6SS9o69PAUtt6qv4xguAx",
  "key37": "56ju1uQpymDu5Nqhnr1baFzwF3Hs3yrXdnzocqcPHqTum5BXa2erQSfGS4BrgEGmHwWzApNptikyzUKjaZ5Ej4Pn",
  "key38": "5k2DuRswUTjHWjPU9Z3xRbxMc6sszumVSkxhAVE44AgNTftGP8ZMq51hvf7Rw4ca3ZSGpStJuyXdq1RBfLE9RVR4",
  "key39": "2mQJfK8v39W7dtmf7K1tKKcJM4E87Ep8yJXKtfizsmuM5jnN5XRuqqAV6SohNgqN51kHBzVp5szqQrDFkM9wwAGW",
  "key40": "RZopELKcKgXz53q1Lg1Qocv2JEokuBPSngCX13xCcKDCsZQtAWHpbYX9mSf7Uta6DKcXycvBx4f6tm5ak8Q8iyd",
  "key41": "331o3wSmXSVdP5xWAACkPo8eZ24f6tag5wmQX73cMjsVcE4vW69d4w1oouo56WXFR7uS1tmXXbcRtz134FnaM1ag",
  "key42": "3SFK3y78P4TkEJDpVZswkPEoEnArHgQnPzTQTd2tEhU2Z4uCB5j2asUJm8WenDwFVYXg4SKbnQ2JjS6VREEMELUV",
  "key43": "h6cMKtznpqNPQmKW1NgL6SFF9CFBesdrauiHVGVvo5LUhs8Rzvagx7ywRjPxjJP2bpfPFmRNU92sUjVTTc3on6L",
  "key44": "xbh6ckbVV9MGDyxy5Ebtdss6zcXDLacVV2D842tNqA7msvfZVwQd5HtfCAgD27V8uPvFvFzVkvg1sKmw67JkppS",
  "key45": "3YNhjPaUmGbHYceU1JCGJpWk4LGaTbjwmJQhNPrS1r8eb91mkJ61B2WEkcjqeiCAJ58K193gTjMa19KScFHUMGaa",
  "key46": "3cCibQvjSQbZ1D9AjWYBHjFGqgTR7cTt7NpnDTLcZScQ25gDEozHZS64hbbs8UkDCt69YgnkHiKdwEauPskPX4k3",
  "key47": "hbJtUx3gH84b1ubEurQftvVjom3wbEZrGBL4wBNyvnXaks2o1oj1ZN2k4EeagUoT8GvwEdUqRvyoMC1dQbWQUdC",
  "key48": "2rGeMBu414WoAYYVTjPxhDq6EJtRXVGv2e144MDoET81EQjhXHabxw8QR4K2Ks528VUsq9z3bxu5hYdJw7nuW6xb",
  "key49": "65hctwMHKtPTeUYf9YZrJCrSqduunbyLVftNsS1f1mSfzDV4KKN4xnPSawC3RumsEgtk7dqsurqu1UwQ4r24d7DX"
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
