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
    "3stBxMVREggq2Bo34srq261N9hF1dLMW2knhpP9wBan2PCnqZGdVHKzA6EdkZJKgXHDqh46usYFogZ2m9KGb5ACc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qrPZe3cgRksSEf37naztRH77zDdcESbvsnoykJvYaCwLCD5JnR9WCphQZkcKuabBx7EMmmKg8cNPq25B7KrESbh",
  "key1": "2au3U83Cr4E2zLQEGaYkgKdDjE5y4TLi32R5pdJhUr2EChhYxXyVM7BE7QHJ3nQdbzj1eYs4FnGruEd3C6FDxgGd",
  "key2": "kK5sSJQGgKp2sW6upc7rTisX9JYjcFdBPLuUVMMdeHvF7HnyFAik8jyvuKYSYEjr52KVbKm2A7pPmBDgYxrMXk4",
  "key3": "5uXYwk3KJzzwshps9W75Tve8xS2pm2ieNeGQX8qs4rwywH6s7tWiFHqe9SqFL6SyBtJjvZd48gNrb9f8DgMHouN1",
  "key4": "ZZVdEQZpkcqPuPEeAK7spCrF2umHhP9BXtAhk6xndn1u8FQzrFvAqtiPHwKdSHHVLY3jmU5Ed1Vwa7oEVqTw6Kp",
  "key5": "4fsskmPSfnbLJwepTrSLgQLuhfUYTaFqFiwxVVqnPigczAZrkZ5qAcCkmzqJcpCQVexf5shEQqWc33BaYwTzXWQX",
  "key6": "5xdXJas6G2rVhopFBrNQLzeFH6aJaJmoBmoQ32uogTdWgEfTGnhBYW16J4zKpkbfZV1mxUFxEhaDjtkZBG5Dead4",
  "key7": "4AMB7njqePp6K92jXnQ8U96QAHbs3FKtpiUwsf1G5HYZfvpnB99jUKhCPsbLEehC4UYsCahLr9U2vPNPRhnzLf64",
  "key8": "JESggmAAfW8ZS3rCKAHGCc7TDHUJ3gcP9qaAFZHYhswDyQokBBaw7KMm1mbveTbteZHav5aiNXkD3wwayQJxkmz",
  "key9": "41gdKZs7YfhKVmWLVdx6uBLTqQScpDVLPpwdSg9eLb2vzHquxKbMMRs7xfgW4sWPhvprboQywZJzLa37hyK2w68K",
  "key10": "51hMSCHDVxbKyHFBFXhZeG7VNyCnTJbXsR6ngud7QJTaaaxdJjrtrA92wyJi4av5Rr1V9vJLFrDFMjn1iP5L5R2X",
  "key11": "3BfPvewCLGGJaGhp9Rp64Kh8HEi73ZonMHMKwLMZ7obJa6tSXj7bR3VtZchGWm9uAQ3BAcKgLDxgK8RkfiGNHVxr",
  "key12": "3x2vRUVuQFiRKmPYzz4FkAoTF98NLZJmQjkpnkTA2Ku9BMFeeXRmmy1g1vwSi3okEmj1heKRxKjNTHsyTTZQeWtm",
  "key13": "4uHKZdwntBRurqWQ3bcRNtmShQj7jgx8QerUPGjMS3xBJQfyM6jcrR1TjDesK1tVdsq5BYkF7nm1qXg3y4BAwxUv",
  "key14": "QTgAEf4rzEXRoJmYdkvvuQvV7VPZswLSyAJVfLJBzPifJrNXqnjqj1MMMYBuiTArz6S5Er6NEnaFeC5MDySwyqy",
  "key15": "4n23RyMVMVyvweisgNR9j2kS7PuXsoN9PYy5hE9eb7rZpcbD4VWVSV1yAzhTaqp6vxukYas3GFeZjo6cvD9DqsYY",
  "key16": "4gbV68wsWoKctmHHHTVgsaj1VuemBtnoibXgKD3MNFedPffNA2rdH954eYUeJ12VgyxouHzdHLh2gQkHhQoCQcWs",
  "key17": "5RAFw7fGd4nvFK4i398nwLJzdbiYKtCdA7rwQHQ6ZPeUH2bir9W66v7c1tRG9XEGQKFNLLmPu44WhsW8fsk4YfTR",
  "key18": "5Y2hULwEmLyztysHarF7VPYYeRkeWhSBTWgSyYkwa9mbE4CDpcKx2qAsphgUD7L87XQkKkY3yKTWtim4N283qYMS",
  "key19": "57tTfnC5ez8RYmUxfKAEUMqFz91fLhRLni7hvb1wTyNUTauHAaZSRYJUGjcYHpStncceaThz57euHVeW9rh841yU",
  "key20": "3rReN5hiGjj935SM3CbFbfYXSnqj2nowX5e2PoUBdyAPLgJFaNtHhhQBZzwrPcqa6rAoirJUvREJusyjMY8eqgFd",
  "key21": "5ksQor1nZiR4tgpcWsetaKZtrDZ1o8843FE88rTjjhb1ZPFXMGvYpSoMH7j8X2bWwWW34ERoGiFu7neXYgj7cfmT",
  "key22": "4C5HV1xZdniFLNS5MZQqyZHjjH2wrNevt86TeLycaJCoege1oz36TWLT6Sap7ZEbmxyDthpQJj4KfZR7A9GZEf3T",
  "key23": "5cZC4QiXYzg83gyp7tASmqx3hmzF7MAS3HhdLM9KoYDFnDiAL3cyPrTagvWosvPisjSAxTp3tn9968JxxZHihECY",
  "key24": "2kjXEYHy5pSToTyqbkAax18io1ob3YmUjBnMZm5ZNpGupyzda7JofS47vTgw1AYKPx68XaDfdG1KisoUGwWksUgW",
  "key25": "2jQaKXuxEvLoyV6Sq7FRvHS4eepq5PVsHJobqKEAXok5oZEnT7ZJzPkiNnUQUffECvJ3SrE5LpQJXnsGa7FpLvaz",
  "key26": "3uyo9bYWAG7oNpurVFsjphQRxYeG536Qf2n7FTT5DFkMZeEvnHXMGwvGUvUP1uF8kJHcSiKk2JAkp4yEnDQzVovk",
  "key27": "5cA7cUmcP76egGH1diq5bij6MZsh3zYmJSfUozWZFdR6cggZwvfQHcHETzQf4nm61EsFdYXojAXqd3KBhMw8D5tR",
  "key28": "29W93szgynwY9ySUGmhRWo9SrfmahboBfSMCNxF3S3qjeUoaUacP8wto3WPXbHBd7aUiW9zaBQeMAz2wHuX7Q1du",
  "key29": "3bYNrS7yk5u3RPfMgoKuD5FRob2nj1iiy3aJoX4AZpZ5sqyAuqT8rt9keEqxZi7AN6B115t6wYYuruzhbqqGcxmj",
  "key30": "58FVyuwytbTCvtz4SjRwU436GDGmHwTqZPYaXFZWeabkt7YNsmiA7ig8tMAzGWekgoVmrbattqfpFGktPjTAo6hR",
  "key31": "3aC66qogZFDeqqJqNdhkutGnwMkibFPCGXz4AFLrTYmpShE71RrqbKNFJf1ihKNBpn5iTUnPebb1knJaAN97q96S",
  "key32": "49wCJH16RgqxRfjNvw8TfHEpHn8YkiQScGAphqnFBtjQGvU57b1iAtS2rrSveR79QXJiSZ1unAsEpTHjLyxYTrYo",
  "key33": "5yD4ivtBbpug7J8FMWBLaN3csokyzXUujxVufq9gCM4bWNw8VwLNMwmhFPcPtJxWEB5qJTsXJvNrtxz4CD5LBY14",
  "key34": "YDYgzc1CKBp6wqqjXZuAH7kEKjHFQAC1d7H3cESZdRpA6E2eNd7gFvNNKywSnwAmudsRjjs2z9GZ4PquknpmSU6",
  "key35": "2YDLWUawEvKB7B1VQgRVVXaP6EmCKn2cF4gtgg5dPAjXXne63v82aqQosjbibSTJpyJm4UVrZpYdxuxePeFyixdq",
  "key36": "SHEN3dFaU7BSaq4boEq8hZp8sWKs9CFjTByWhtyAqwGjNxBcJe9jcQFVtiyB5937ZZdNdPLDFsniFyt1xCgkNNH",
  "key37": "5VGY4nt6xMykYZdMwwot8XnGs6TeCQLkgpzZnfyA2vrHTn1YUCq2HQMyKFgo2JKEAxvjZqnyBuBmxVSmG4SdpY7N",
  "key38": "46R3NXgjo1mxx2XQREz44nwtUdrxPcrJD3RrUfQG8puuEPR5poHNHotc8wHxYYGNVsZnxHaZxBdjKEgDGmE4YxBR",
  "key39": "2C2nLDxCNPJRVGvs7jv8jtHeqAMxPjpngjgbzq7cMC932rnby8j7UcZv6Mqa9eWmLi6ytmL5hct1wWwFXmrCLnUk"
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
