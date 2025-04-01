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
    "5tTQekf1yWWsMobPiMWXqi9wbMwXw6k7Z4YVjEv2H9CK1fEJRiGmwSUG8REACxuv3VsxeQDVpvMVb6TmBsayxHp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DqMA6NYaeVbHGvoRFgUceC7FSJ4BLhX7unmViyMtXt4uyrw4hEjW8VeC158Bc6n5eYi91dnnACwWB5vh5zRkXmP",
  "key1": "21vQjUR15pZsteu6U6JPemVEVqrFFuzuepQQDVUnviTYcYhtjoLCQLBiSUkEVcz9shKdJechFpLA9bh1YgRfnE9c",
  "key2": "2o7SoGMWJ99Y2D3orozWLmz3vkoGMSaSgJfdRYtjek6Qd3Gg4rYwJL7bYNnL9sqMwszjpEEvqstnKPPPadkmL1FP",
  "key3": "Ch2HtAW4jaMZ9pvyormAsEVo2wnE22PQckHgvKLUEnaLsDhJ4RTZWXxWn5TBEWgtJSfTS7LWee3rCdiv7admmxr",
  "key4": "3SHKvVy4yYaVswbP7bP3xEG4MeuWcuFdLEcwZukdth8dtFZxnP3gPmAgvmqPgrBwD1KWGfJJXStSQyjo5xzsMymK",
  "key5": "2H8rhh7Tma96kRENZcX5dDfsmiN8Ane3ZKfLR984sYCxN9n7zA57cghSDgr35NSe7iFck8HVrCfSi38q4jNjaPY1",
  "key6": "3zQnoq7oywM6yZ5r6qjLntB2NPgXDomFk6U7vRuTENdGtRDxAmR8ccKgARJfdrQ8S99y4yKHE1CvHTQ61joDX8ts",
  "key7": "zJjwsdBHtKwVyG8RAq64SiuqV7a65b1CVAFSnWQ3h9EQoN9uXoHxXDrsqtztrKadhWTokfdcftt3ANUCS8NrAMs",
  "key8": "vKZHrSjFzFjxrqkPXKodRDoPLMpwu4iVJAWCNYLdw3Azfe8eLfbCS7cM6FBMWaaVAhqWpKKQEbLpm86Ram5SEGv",
  "key9": "3yjHVhbAiFn7H4BBVoqgB3LvjNtjWwrVzXr9zA32jHPtZC1wWfPThmQ6wnTU2hYGgsESk3PoSssxs5JkP1zh7tr5",
  "key10": "3y1Gd9HXXUneaRMzciCmzXN2GWXaHd6hQ4oszTUaX4pQhzXRq5JgN4YmduMUN9KyNJZjsq5BkQNU2F5gYTBUZNJS",
  "key11": "RF5irUtBxiXZDbHKkLnViuvGVmhRHU6CyUP4mksi9irt76i6AQ4u4c7HDzUacPXH1fEEfP87mKF4RmxKuvbNrKp",
  "key12": "4AoJ3ob5EG9paCrYZFdqC3xAUBhKvRT1qm7fVp57y4dfGveH1EqEjX4k7kD4WEsQBG892T5KioZPRteDEibjNnrL",
  "key13": "5qPDj7dv9F8sMWqJuCiK6XJHZKGD1E787VJDKx31ivQ1aSNVtwxJPhjXi8Si3CyyJLfQMQfU3wW2TxA1KuEdad24",
  "key14": "4ykVeKemZf8oApSfYPend7tEYr88TTjdPTKZhVYNr1hfrTEp9VsmDJLXEbjiu7A5dvJ8TpnuHhfML5XpxeYM1dHC",
  "key15": "PxMtPNqJmABNKVsqkrK21J8kzXNrUuPVeUqrJuiW9WnfYaUSLnFTAGwb3cCSDQ9N3tDBMwZmqaDTQoC94YYobLn",
  "key16": "4wQMYLFo1keuc6gThh4JoE88ith2rLfEMLyh5m4SDYb95L85e7GBe1duMbrPWam6ye8N2PaLfH9sKzPYtfeFmWRh",
  "key17": "25eD1YrK2pCTBeYZPUNBDxcNiRTva7pu9uhpxaVgeaLJgneh7hNWTehD5nTpgCMUj26BfaDihW8wHJoXsQBJAg4b",
  "key18": "4hLHmzJKP5Y7m7LgqnF59hdGRza6FuyKryBcAP3YUSPRC1AE1fJv5aCvJrRKstWD2EaPrAvEhV5Y6DhM3xVy5uKj",
  "key19": "6335k4Twz1oLDoaGnjd2k2XgtGddz2FpTDvRCjAm3RhcUh1pG6evJpK91yC8wtnLB7k1cGFM29ryhzNJknVdvZU4",
  "key20": "SBRhGyRRbkEg19DJ2wamLuFkKMVCaV31FR8qeC1jrZ2n5YkZb5URgZooYqaGHvk9fgiMa98QxnbTC8LpFcgzwQ8",
  "key21": "3CDwLDcmKeadCYTcPJyYU6uJp93RkQ9kArYp3iau7PWHZbT8F82u5D68aTH8bQQhAd2YMP3pXwTrTSu3pKqXhU2j",
  "key22": "4qzjDwEgLbP96A5JAjCHixtYAmcRBbJUmr8ChWJEDWjhF3aQGGJX4bz7Ke6k7GXoE98vZbALTocRtr8iwPRbvfUp",
  "key23": "4WtpMQXkCkhM3Tf7S6yzqJ3RQm2HWQZNZfxBsDTAkgCYeabFvhQZjFM27prKsyA2cLN8vwsHqf7WCtr92AKf93qa",
  "key24": "5Y1aaaZdFozWY5gfVnFf33F44HwToKWnBQVuwLc41GkQazTpxbhGrJTmwLaZnLy81dFNQHYyJ9VGrKSsJ84s8e44",
  "key25": "2qg3sxmHefehp4vRYJMnhzMmLGjcHhyHtrLWZcV7599pLU4mGrXgjEQVS86DqfwA2NsWsc1C2LopqVC4vFARYRwv",
  "key26": "5EXCzz8fwnF4C1C5XV1nHMb3XCKsgXxPczqbr77jxPjdSX2vTfgBz7mziuBocaRrq7DQ6TqboBiZCgZaax7w7bEx",
  "key27": "7zq65JV55HefeVVt6dT5rFYHhkR7Fuz2b9sTxcpvr992zAw7oJRn6TXXVCM31uPe5w6cTGkN5gohAJwhbts7NjS",
  "key28": "5vQ6Gk9qx9pPhioDmAWLqtg426tPpnKvEhSAUPcpzLWcuFRXJsc8QGsbSHEiFsLjmYBvbjjytCMAcY5DfHafKeqG",
  "key29": "FfdKjh7gimSGJnTpU8nMxVGtp3sc21ok3EGtKqYL3QEdLrWMSdUDik8TpnBiJ3Wh5Fd3GCv77KLFs42uhs6eeoT",
  "key30": "26EGj17mxG8VbUhNhzuAK93JjEaLjXg2VoXTDGQxunDStTaAzsxQXXAVRwKojJRNRNdTgZ3hPxRpxif2nsZVtgew",
  "key31": "5mS94U13oQUefCMQB3V5iSxrHS1urfy53GhX1cmAKAMMWmDAbi3rmSp9xhS5DNYnrg1EXAEjg2ZLJfgRjfY2fm2i",
  "key32": "3PaULhTAmXoCdbNbFv1ewqb2N3xubmDcZPDJoB5wJy5EhRg3PuFxCFhUVDgVr1Urx4TBhGL3Fn92t6pRtQCirXro",
  "key33": "2L6cAkwVBiyBk1Wd2eYZHATK6Jk2mzY2NS8FwUWvZ2fBz1cZAr6AuzW14HugZzaEaHCUpXheVSK9gnHLNishUB3s",
  "key34": "3DKRyPSNPz4k4FqptwLdSWnGvVE1uTfu8ZKZ2i7d2XZJWiD8Zv8vHvmNJ5ox8uFtRFmzM5pWrW6URi6SAWAK5se7",
  "key35": "3MYbk4EPxh4MhNVjfPXSkWJ1XCNH3EjUHinkAgnubHH6H5LcJ953Ex7mHn2eYvcHHoGvTuYrwBqcd4CtjGFQ9oh",
  "key36": "rczRusrn7ArTLy3Q8RdMwXu98Hj1x7q5wNM4B3k6s7u33h91ZGPnjocHLVtopNdkQMRDXu8bksMJ7fK53KcpNKQ",
  "key37": "5LFiEYPMwH1FrhRKFxzn54pKTvzSRJyDjEZFK7RfNeC7LE2BSaJsPRWL8mwMZbaTLRubWSS7yehhfdTuCVCcaJ9i",
  "key38": "4PGqXaAi65uowHAiLoMNkEhzbUEi2bkaey3FHdopNjCYJFamTf3rMAnDrYxztjRNLCmRNEU6BygUsLwHgcGvy4yd",
  "key39": "39PmA3fECzmMggAenhe2LF6t4ncjQEJU67qK1RcEP2sgcL7gwUCgiBhCxK7kos2AgKyiVVoYDKjxYvezo3kfURJ2",
  "key40": "3CUVej8trNaCtu6izeE2FL8eygnUomop2Ky65U9EgeLqyiqRcu7qzXdmXvwY2MSd7woKQHdToBXmWdsJGsqUBQPp",
  "key41": "3RhGpZ9NPzumbXjE6NuFzQBFGhjVXhZP3WdXn3jez2RULhfLPKfkdcQZL2aSmf3Py7QmAraFrLuxms4kJTbuYuBF",
  "key42": "5CsDg3RcfuRkyxPfwGFCSMzDY5pY6nRD416jwaV6kmhXhnBTpUwMsCxMPzvwbpqRWfnKLxhLjTXmdUt8ihcm4LAQ",
  "key43": "5WdcbAgJqCd1xRtEuhcExS4s3K1AZLpRuwN3V3J2tFBHba7Mbcm6qcTHBCVBLGfi2CBt11qKkvygiQxzA5LyCrEw",
  "key44": "3Ss2NQSt71akGgGWj6c4J7aYZQYLcLi2XeF9AG8NZPvi5rhtWQzZED3ztoeaceQaHJCaeH5uifzLXYk1BGDL2HJE"
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
