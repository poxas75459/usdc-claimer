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
    "4G6bU1i81CWC4TvcqDoFS9VmGjucpkGQTQUfEGdA2tpJRQdAWidQtJcEv3CrouKEPcrHSpNnQiuWZG5AY1uSQqGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FgEuTqUG3zSxRtbVxT257yxENfjdsPkRLUqWFWt1473GfL121U9yTokTuChhH4qdqkKa9FHQWY3GvowZVe9GAFg",
  "key1": "3CGLar6ZXuwhLRSUmH5g9JS4oVr3RJN5fQadTXL1WDwhFP9N1SP9AJKear735i23ykp6c43QzwzF1fWwviR34aDn",
  "key2": "4UQkFcwgHJfrVAZmpPFw7cZXALVRcu1RSDzN4Gy6eGC3v6B6cpPFPUjAANf5ySg2qbW3JvPwLKYYtXksW2oaVjHi",
  "key3": "4QUhLbFeyEHwf791xFo7Zvq5WPhWzcpzQCqD4ukfNGCpcXzT6E7LdbXcWkkUV7GhU2GLCQsftp1v3N2k6P1DzhgZ",
  "key4": "27cuvh7e1HyYXPoxLHZs6FKW2Tr1TYazdYtXzzt5eYjwM8zJgP8b8jbQmmiwHduWhANRtLsbtw5X6q3PYapbPF41",
  "key5": "3UwvPoftHmStyGWuhqRaa6exnm5u1pR2Y5feWP39b4obtE2tuZSdogdq413sWxd3iDzAJNuu8okVdjcGR6mLFsBv",
  "key6": "2SueUSLFWJ1kAyKtNMQp1j2dX58WbtLWaWfjRNL9ivqVZY5hYjxkQ9mULTUGLthVpyfTSmqfcMVWT5hU8oKT4YVx",
  "key7": "63q6sMMgfY2tPmKRyYDWa1wFDbBd8evQ66142kPNWdWSc3YDLD3EWwSrL7FWHb9KecBAD4n1gSDggg72WMR4ap6B",
  "key8": "5ZoLMPuHg67UunMzghmpbR64g7y2Wds2YBHsiF6C2ssEXByRS2Sea2Sc3K5bhs7TUtknckgwL8nYNH25M3qaMzWh",
  "key9": "386qGo6DFWTjviBCsDdv8m6MfHYRHpSGg6sZwMHG2g3R75UBEL8QUPp5n6hdhkGo9LqUyibfGmCQnktBxtLLw1MH",
  "key10": "29FHU6bSVAg5nPXpqWrkusBDbpn8dD821CDib9spSb5VFSgf3iTeRCoxTVMmjkEPabqTBvhMA6pUXHo4WYDthPgG",
  "key11": "5TMFEvYmBqQza82BLbYphwqJprPhf8aQkB1ykRiCXL8FX6gycs5iFBcvpotz9qPbkf31pMPQJS6e7WRDxW131794",
  "key12": "3AHJYwHnhKr9s6xdQo41NWTZPevQUREE6TzFnKrfmmSTLE92bvK739rPBsPUsP8Ru9prgxBpgzKEHnPaRscwjjLW",
  "key13": "5Z1ni9brrmyhAJ4dwk2FUWsF23hhUR4LFEiyXTvfJVTxmzzzKzdnq83faEqPQhZv4ynGLN7R6skXYTCDE6zAfJ8x",
  "key14": "3Z8Uf9Gd1AEw94tn5Vjt914h87Q4pPjTXdhGX93MKGxAHU9b5wEVfLCd6oHj566vaACpHXZkaHHLgRaeat8gCb4J",
  "key15": "3s3ow3YLk5E73P1P9tNkDqcKLusQEPnhzNXhhXJhb9c5MtMaU6kfj4rC1sZA8rLhZqeZHvS9bLgiShmYwuWqq2Lk",
  "key16": "2jZf9tQw7R9aRrVWDSPz3bTmfP9b6pLBiLsxFsDHgz1XSjt4wRzhmdtzGqb8P9WFsjug5EkdnC78wUrBnLgTDxcF",
  "key17": "3btkW1kjMNMvKicGczyVGy75y4CvUcNEhc5NrfkCSKM8qrU7dBv1ZXkJchMPobQdbVkyBDGENyDp5XaXE4q5r4qD",
  "key18": "4o6WyFeACd9AR4M8HmNsqqKZj5EGHKisW83DAYhFtRvJYr1TYeg2GCyubCt3oubbCkrmQsG3dtnnqBzPRGLVCn6h",
  "key19": "4fWQ3qw5fZGbudyJAgN92RrdUzhaM9KyjHJYyfD2vfs77dPHsNaaZYrt6MqM66qaxWWaBrxu5rfmr2JWxKHFyta1",
  "key20": "3UfESvnz2U8o2BQHbfofST6DyKto3MwJcEEimCa3g3SK4Qmq7wAxg4DWZfrw5Jp5RC5WH8SprYT6ZTUTCEMv4u4b",
  "key21": "3tXuCjabbvmFj8mWTibq7D8G1fQPE4VJnu76LEcrTg2d6tvD5kPtmqFJvKm6rA7bJ4BtAK1aNjKqexNGDgJaC2iu",
  "key22": "fDoj3sYhqcLkMQRb7g7EqEFVXXj2JXMTSPKvvb8YpCTwfhgifqhXbycCeXryvszMrCrvH6EWnpXYeLUCDsZkR64",
  "key23": "26M1VQ99i38j9Yjyt6Jv2eLFt5YraXusn8RndEckkUKTydmRBoZyTvoCAwgpNqxLL2p7qxxKzxTnWpxfY5iemhSi",
  "key24": "3cf9SPzwAAS1DvZJtX8Vzc3fDbqqCfxkwHTMHkVDY9aXniMXrzFz2kMTxSdc9fyKynqpAB85t8ZZUsYzLB1Twiwd",
  "key25": "FPh4jbm41biZdy3SmZgM2Ebi2iEVEsV1RQMn4XGJVsdS52BU6KJkPd1woasm6GrVMku25ZW9gQ5XLt7oXuRpJuK",
  "key26": "2YUcoQUXDuAR1VYuTHCWNpMk6aSc9YwiKEryc9oegFn6NZQ6mXYRuusH7nNRPEUNBgsNieVsqgnN7Hb6xmGyPnF6",
  "key27": "5qSJM5QdpYvh3eXXNL21HWF5KUm6YmRR64Rmq5crZurVFtTRRLBDp6SNqdAYxcS9sfGjYTaf9KstbWQKVmZXAwqL",
  "key28": "5szvHrQNUPtMfuwhz9Ap7L4iMf4jdkypFEMgi6vosaj3MohMzJKkZmYvtvYhuUQJ4aJ5YzYkm65j86NLJ1csPSAX",
  "key29": "5JHbVENkfDeUGmfS4TjKUTUgUv6ebWGp3CHhn4ETXWGu4HAXXidHUJzzG5CELrJ9E1oRxvFcRiimMxxHmB4NW4RY",
  "key30": "4xgJzmvj7PQAcApPhh3XrKACakovW5bDS1iBfcbTVf391FA5ge1DSLKzebHQm9pmKNJrmq13FUARTLoSG4c6d5tV",
  "key31": "5GurYA4mi2KuJAJPJNENCEQaTXpYGPSQ7YFNyDV462Fbqbo7BqKp9akMyqcTL5BBkt2YZarVqfHEvDj8tmQ5bd8",
  "key32": "5Xa2FEqqyQguAQgc9BfmGzQdXfkuHPLjMxaDGTRzvwvJCRKtY6SZk3t1h839Vdpa3S3oo9fEKKqiXFKWtt91aLSM",
  "key33": "3vZqoXngciXTBiQM1wUfcuTTCunyhdWukMYXp5gzdjW5EtrvH3XAMZ6up7feSUPU5X6uSeqABEhi89UrvuZPYbRu",
  "key34": "4XThTFRmx9jRAXgaUycBxSN1Fvzo3WDMJHSwF2dThZyTouDgDFZL8NxB94bdQrjY6A2SLmuin4pnerhXj356ufZR",
  "key35": "EG1dgPGx4Qba6BzkWFSxGx5v8oGdHkcCmGSWE9YEhyKmhC8dAtMvmHGm2QNYSvei65ZardoenTGW3rw9BEVRDG1",
  "key36": "4VS4bCFRkEfbFSqGeR9FGdG6NHikzEKSqF7WnWTYQZA9Qb5ygQKsTHvqTzsQCNpVr6w2bw2b8BAyB3tSQLbcdjAh",
  "key37": "2h81Do8cJRwAkwRSmebvRMHUfKtgxgEqRdKrXhYpFnziticcDxAV1bAvEfhCRmGewMPYJ4MfuudfUmdxDt6AtYMq",
  "key38": "4UF62ssExdrgH5vwYKS324W67zkc8PdmNxiKkPtVf3Xo8kUmz7vYztzQV63MiPN33RmuMG4W4LT5y2UJ82kY1guz",
  "key39": "32bbroX1wzQXYmhRHf3hAjdyQyoXwezUbJfN2XUmyitxJBbo28Bx9XY4APHZKVvRHXBpztXCUp3tT7iyry6BrkN9",
  "key40": "bXERAYDy28x6aRx6Y18HzWLf3JK8Lz9V3pqiJEqrmihF5Dh6QMPctqcxcQLXVhZccjq8rmAxKYdquLmJf9ebJkX",
  "key41": "4mXL7xduNr5RpSP1u2Stay4heW1KPPPG5biakWzic13xLZwythuLi2aAXF1Tk62JMhnmu7tabdFtLVy6yDoryWEE",
  "key42": "tr8kD16RmsDHRGC2mSBt3PybSBGEDtyP6jfLbdhWuzp4Fgj4pJhC66XRWavwM1tbCkKegu3Bqzc8XLYWmeR5Tek",
  "key43": "3BPr7t9Jw2w2H7cdDqV9Jgmw6LsgDPM7zmcPk35wsQj1oces8TFCuphBthgebekKdmWVEVaxb3LbR1i1J8zQWUJK",
  "key44": "GSyqAr9gX4JE2abbetRmMgunZMyN5SVpEePY7qYWzXfzEhsaXgqeJtRKcERSJsST7NSgdfBmpx1pRZLALgKjhkm"
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
