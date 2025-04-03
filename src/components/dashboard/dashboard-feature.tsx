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
    "4xiUENKU8h9YWTVXusWGtN4x212L5Mx3Y3z53kKskFedJU8s3kveksDEcXUyHubFJ4C8yN4BpoYQAkBEDCC7mhHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oSpwc7jbZV4nfVDWTR7EZrFcXcE4p7AcP86Su8etEWYnWho8HQiJMeJ5qfzDz3m3KSZvSouFH3GtMwG7CEP8Ugq",
  "key1": "3CFi9VrDnthePoheqcDDuiyYeczRs26MN4aykzgUNegdGCUdQLcdrSs3ww8KvTFFvqpfJBXC8xNUrk6GV7HMFhTh",
  "key2": "2hy22t3gVVdoUwRv4xi2s8Fqz4TCyeXty8XeJJnmuanDt8R97zW5uMFrbQzTmPCHivaBkguhA15wBasVNLVuFz6R",
  "key3": "3RBbz4s9xTpSd3Jac39YWxDaF399u8bc1rFzdecfyqSW77AutnToJSMeAsKuN65SveUfMMixUWC8W4jt4vBzybHt",
  "key4": "3U1nDTeFvxWe1D2trJFmDcKydsjygMTWVFp655hS8tboHGZTAroegfKRuDiVnuFqL8saFX7tFSDC7Dp228DP2aJL",
  "key5": "2Sq2TsshtK5Mqqoue3SrYjYA56NBNR781Jpin6MLaiPsYCxRrEiUfKUDvYhirpsUNyhkStiwFFjGcB5vMKfwkFBN",
  "key6": "2rfguvhoPH2BxCHqPUdkXTLAZ53qMSHYavyEst2vqk2JdnmrUda2LsvetpcnbgxN4Vmg73XAzxjCyFEmzE4v7yPJ",
  "key7": "66eyJCLC9ncmgwf9Mqv5CpJ9kcHQj9xrMTkuhNsAGHWAHz6M8ypJebbN8VwfCLWDoYjjrjvYzq3p7YQZ9LFEJ4im",
  "key8": "5yqWdKkmTLYg412y1ut7nqVVG65CHn9qBCHnW2ymYbDZyWnMwHsdE7J9BusrFp6quPnWDvsurUifrvxE8wyhFuiS",
  "key9": "3nh3jCa5GU9DjX8zsc3kaDdGDxLxqtMht4kvKzXxV6Xtam2BRG6nmwp1v6Ju3EjD8QXi7MSTaUess22E514xvLex",
  "key10": "2Nzd2KcrzkZm9EetoQXHZWBo5DWNBLR42kEhwbypNracRpRnPQECABoWasAGEKkzW5HRSGx4xd2AaLnd83hTkMNu",
  "key11": "4KzJV8XiyvTe4mdJ2VpMWzCYS7Gy36c7x29iopedqGaptnBZrn2Rz5RRLv6gRX9NoQfeH2k7fPFoaisEurYvMBcU",
  "key12": "z4jNb4fSmDdMGVEionrSzaYJyJPc1KS3HUcx9HhY2y2qV6phBdGPota3LsD7JDdNCCCizqMaeHEAmKm7HgdPxMo",
  "key13": "5Z7zLh5fqo7M5S5uHhM3EEzbCbSfEUFjBPdhJQ3sm1oNpdWfSWE871UCZAp7NsE47BLGKwhr8rE4raEfjzh3tWQD",
  "key14": "3UwmpmAT6btP2WFAJHxaPaZ2VM3duymnKNsjKQ9r6mfj7am2RWLd5aVZZSUYKvyamfEvANqhVLjXdhkZFbwReVQP",
  "key15": "5g39TvaCh2bJu9WBTozvm53i5j3KGPfrE4QD4SqLrJPsLxybApapi9aqoaqbnyNi2Msu7HDnrKnMF51qndRHh66E",
  "key16": "2MsDDQcKRoKbichXa63yBY3aP2Mmb9NSVg2twQ88WhaR93uwsS4R9H1DWEQD3N6iEdf13cFRPihLBiUviK73eDrH",
  "key17": "3wQTFiZmGsCr5LhEKs6Za5MyGkPQQPi8KZB8bAwdZLCp7496m6LGCQ2QnnNxwR8KDdJNmLgiMLLSdRK47JyeSYHZ",
  "key18": "3Nn8WDXs5CNwoNwVEg81YokFKRZR2ymoB7J4hoAiFi3UpnNBiM9pqz85n5Q6NuGaiVWsCbnm69hxTNfQPcopWWsz",
  "key19": "4gw8DoVHD3dyJk19xzF542M8gTHkRYTSY3StyJkAozD7peZhAen2rDJLiYsVqaBopySwaBfYwhiw5sHDvnfkzvHc",
  "key20": "3twqWvg5n46sguDneRLcHQ9kjSnEwx7uQhK3SLcAHLZoFNHNvsi71ptSm3d5xV5mY4qMygun3sZcBSgDTG3p5Fiq",
  "key21": "5ngnBzSZzHEacBhZBrTCayHyrTefdVoQhVb1nWFcYUjXwr29Ez6XJC5dxtYopXQzGQoR1S4XpXQ2ntDFQ9ehmsRj",
  "key22": "2vE167MxCtnofo9dSbrFq1EADSfSH9f7XuyqWyM4zyL136txin9x2tRz2JLr7MHz9nGmEQ3AoTt8XDEjGWeAeA29",
  "key23": "4Qp1NTBEEUcnJ7novrf434bzMA8TW5WpMeU8tt34hES88HPymXFnZyyhrLkoHESRxvFZpxJiHZwMyA3bEzbZmCaB",
  "key24": "2a3oUeUpe4wa3c1Ju5hxNApk8h4huQmFUAb6YH8TynEry27DfPYVx6Tgpegc1zT1iVQ6VWwpxfK6hp9DMpRyxQNn",
  "key25": "2rvvkciE34dSnPi6k9z33N5DUxUxyAd6Eo7azqp72TdxivvijTufrfxkeqvaqLr6KsRMmiRZMR5oAguXRGHpo2YS",
  "key26": "3jZFVmZzkTavnvrvfTFneoXfYbDHoQesvqNoNBecuRzY7V5LYuu7AsuZBMG2Fwe7xGMM2QagoLnNNJTMuWsN19UY",
  "key27": "5F7obhaPoQB8pRgVtTUzKukkpFqVjcPBBMvQZNwJSjxpvEZgYM1LivqjX8TNmo14NZtWu83Z4JzAsCqd7oxvJwGh",
  "key28": "58NHXVCVELFz6iaUJhH4VvXqn5tiYgoj55WkHT2LDoniJnxUBx29bvHgsekFriSKxpAVs2QnfdE5hfpfiVWVFFMp",
  "key29": "55cwwyx35bD1E8uaDMXv8jcYU6tJJUgGYBfVY26c7b8q3cAcjMqPVwQnSU47Po6s6bcw2fSp9rA98gbVLwJYRq31",
  "key30": "3rQGAGZLCajdtj2bezT263GkRAei4Rk7bL5rp3NTarxLsbGN6vdJ3gqKn43qUTX4AHMQSPi3R3zP3Bz4wryWKvQW",
  "key31": "3cZ7xC7ACvr1oavkiDPrmkGhs7r1VVJbVCFtL6CqWpiPHCgtq9ezgBWm8wRdEgPAanP8z4PhAz7oHFQMHNE55XK2",
  "key32": "8GvE8eZhGhCevNeaGV4MNqvVBnEas3xE5P1omGqq2boKMnQTY44DTCuSF3pAMd5rnELgCSHAP5FFGbfbiY8ob2M",
  "key33": "44xVBk6hx2HygSxP7rNoEQYhtkbAkkA9oCaPN5fMoRh9VyHHRJSsqHTnx2Vpnp5uqMsCDaQMhAf1sFoALjDjR5K7",
  "key34": "5XJnjr6VmKC37eisVcqAXwv9uDaTR4vHigN322VFnDUQN8yUregiZErGn2J7zpegaPuZfmFi6gqLf5Q5HdSasXjf",
  "key35": "3RjBjbRSke6RRfxuL6Pt7bstfugDKA2bBP7URrEmvJ6Sbk2WyVyJVQEJTToMk9ioGzF83spV1annALwWopgJhYAS",
  "key36": "5hGnqzmRC3FGJ5bz4bhstp3C3bRpK3xEis4SUEZbtPJUV63Nfwo859gtZhTsjekvNeFJNswRrmoPzAvULrXdhEg2",
  "key37": "3BK6WcYsejHwXmJyRVT3VKMsqQfBi1uDnWmYQpFuJ2VHc9ntaKXwP4vmcGfKUFj4fGEvnWEUAAZGi8UUW463epDd",
  "key38": "2SSybkYGjj3TiQqhzc8izvKHfhLon2A5gUVA3JAafcgoQTBAo7kf8iMCydYFxRZ13EryaUATWbWXVjPKFoK8B84r",
  "key39": "3XkmRYJtBBjsx91GS7NuQy28Xjv3ozLqe5ntoj7ZHNjoumHiVwaQ6aCAmcQHi85P26JGjhSRyLpQMjyWUKUimhNG",
  "key40": "5M4vq234UYJC2f1apY5sUytpsEZf92JGNP3DK7aigTMtsxn62TQZgDF2nPGswnyLAKammQ5oXLyRcWWDjgCjQhBw",
  "key41": "4skXzvceR8qEh2sHpQCJfqQznxHHNhoW6FQEy927mGtco77sUgoyWyLhAUxvTGu1yTd1wuEd5TXAinV1x1npsCNU",
  "key42": "4WskaGFYRC91GdsmDNRr1KNwX54jsFGkhEiWgN7ddWx7VuoS61y3GyyW9wjM9d2dvyp43nFQ3nG3EkawjceaSj5K",
  "key43": "eHJ1rVe4ccRcc9oyE5iPiJ9chtXBosbwPMyDVwTeReqdDV232tLnV7M6JKHY9LkGJFYtcdJDteVekm9cFxHekLz",
  "key44": "3kf1bCfx16FCL8uXmokzJBTjAYD92wQXoJ9AwKXvht1Ag1MsVuA3bYk66P1BBHiAb2FAwfA82f4u4Vy4ez2KCejG",
  "key45": "3usvJZFobocdRhLMYKBYZtrNf6tD6ssMTtqFm6xukNhpaAoic6gaWYuaWuzVFv3vQ3bvVA9TSvbmEJsRaVY3UEyo",
  "key46": "5nzAMXHNgcYNkjH8pAnQtRcNhRcCqRC18s7KeVwkQ5eVHPGjKyZoH72fMEUSP2xW4Eo44ZVS7ACwSxbd3HvWykmJ",
  "key47": "3HUMAxr4X4khmciMncfeeeX9LbU15e3RCwpuH6WQsYGqzMTDPd3x4oxnsRQ5tgg149zTSbhAY92zttMbf7JrYe5v",
  "key48": "3NSqRLgtrv5zHscUEjiky5E7iyP6tH8JtNCA3FpmvRVrdxjF9oNYn7JArVwmr72cTZAX4aZruVMPscVTb7KQ2xQ"
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
