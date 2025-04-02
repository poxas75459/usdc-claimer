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
    "37RHK6LFfoF7qn6VBSJx6bTK5bMGLWpoWgWMLais8GwTDUegB2GrN3wyt6CSvuGdXgpiRVhKK9FFdH766yfYjojm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p86WvBVuf2dNp4fa9CdV88AGqT1WZ1BktA6LQtBuGQu8EfJJ6xu9WaN4kKGJP3Gb4jpjMFZpNKyMMQ6ykRVEfYt",
  "key1": "4HUZ2Euz7zrL4XAGRDpfx9GRWWWPcVFNuzCSzkUtDjf4cF9vWLCGjALJPmkA177hrzntdFcjShR4YnbMZqWV4aQm",
  "key2": "2CzFAtXutxKkEkpkXdHXeipUHcmsryQTa63THkTQj5dKH3L72Xkb7H2fVZGGDBi7SU2cBygBfefxC8Ju1LQswErT",
  "key3": "23HyukKp6xDewDta8DjENWmuW8igRG8V8DxbGTc64Xt1Qe2Jtgkd9J45UAX3kkfzrcabK8Bdy2LiKnz896S63GC5",
  "key4": "4khcBWLLoRtp43a8bjZLZTUdH2QMftMTWTjkZLYmCfrZSb8KmAAjkRo9LHdVPqbn9Kfd74AsbuHjGHTjUCzVtGWw",
  "key5": "4iWSx1ghQSNKYrKiN4847nWyzrP4nkUx2EmTVSdVWwsrBgFdLx1Y8jEAPPVGsAmd8aCDPPPW3TYCEFRgv9e7Pwee",
  "key6": "2VLFi2uq8FZsGLB3P6ZbkgMPTeMxT2CjB5619EtkwgEihM3Y5v1YGCGWkdPHurwDLPovKKzymfivggoByaDfYw6S",
  "key7": "2LpVKj9JZA29YVA9zudGGAEWbrjgTxsnsxfnBGcotgy93mA7VFKRacjpB8XAasxGn3JrzzxYtGPzG7pQJEve2QEB",
  "key8": "3LPwgnpBLTvcUhAasdpKFRptCeKSr9HRZ4jE9CWjpCuNfcnU64XXMhj3cUNScD3cjREZfp12mAaW3BB5vm4C1Hsp",
  "key9": "41d7aLGfze3a26haKjNMV5XFpqAAWNSVdghVtCML1Jk1yS1KcAjaaVCFu8NinuBcQhDbuDwrYM3jHsqhn4w6LXtd",
  "key10": "5A4SWPbBuGuLyx1PPYDy6WNpnMNzyzFDZzET8c6piofXTuE5WbrsziqxPswDyw5oqzKMNZcdYqt7kPYz2oGKy4ee",
  "key11": "RCL4d4tGTusbTDUS2PoYTXt5mss1JNoHdY2ZQzDqVAaD7P4E3LdELi5oWYjcrT5ivPJCAkzEgtjgkyZwxJH4dU2",
  "key12": "oyo9uax6bjbRqY13uT8LrenuYqY9jqhATsyrRBFPeYKCik2TFvw29iMf8Ek9N29g9sc6Gz4aMgfpWNd97FakFKU",
  "key13": "4DBARs7ntbjLWiEjMwaykHRtREtU7ydnXzupmR9VkVin7X59GL1tATy8C2QJPqFmanq9hSx6bzqv83gPpopgbK8s",
  "key14": "4TDFxioxFJea6oAqXWMRnjb7zx2kB37oicB5XyV4CsVUBDWX5keHdmEJ54nuenrTzbXU5wqeLMRYU9CMspvebSa4",
  "key15": "2Ue55m9R3pi9enNsZvdkxLw14quUnGmBohTqPwHKzsX9AkAXpCRcQeSDBuA6qHzGj3gagckfRJE3gTdgwckyoefY",
  "key16": "44PveRHgMTWb8rfnLt8xD25hQPSLTQc5WZtCt9hwFvbDmSWFDuUkoG16LtZ2Zyy5Z8CKjUiR8Snvq1GHXTKLmsGt",
  "key17": "5mSNApqxXkkS3HHXzfoSodc762nPvoLGzSP5o5TGjm1xK7ovQ1mjk6Riexhhem2e3JFAf2irqQ97sg9hUXpThwLn",
  "key18": "CUaD8d7xboCnpd5LWYYgY8jVQh45rEEBEEhzUFYKmG6tELrK7SYnmZcBSJS2hUWVhbHTWqiE88daLqtJ7B4cLYG",
  "key19": "3zWHqFsivwzciN4W22ZHUDcQv3efXKuRdxMQ8LU3b8iciuGSkTyqFadXfqbhjM3GMduU6q5ArEQqGM6nQ2L7aswG",
  "key20": "3KZmsU83dbmZxWQe89UUqVULS4nfchLP7sMUPxs6tVFRF9uFBwQT1gmzSvLJRYx3JuKtd2uCZ8yLu3J9k5rfzxDz",
  "key21": "5vstMbQGDTWBK35ta13mntUZhoE4tFU735DaivSH2wgLtv1nMAJRasgia8BmNeUP2RsbhLSKyjTzaZe5ND4GFYcz",
  "key22": "5aRdj58RwuNZDwgej8GHB4HRwfKUSh8hw5Upv2YfDWFp8hNKtPtsVHXddaFziuizYVDJxPW1wWLvk43W4bkD13mo",
  "key23": "2aFvUwW2KQZtHwXgSiWMxcQFm2QvuPcsdf2iRvraPFxwpoqr9nGn7XbX4J8SyeQJVK7T3CoJ6V9hskKR5yKECvaP",
  "key24": "5q1k8wbMJVMS1VgW18eANLCoSw1YzNT3FXDmLhnGh7qoNjwAd8LC6eFiw9wUuoYj1vfAfGQWY4QRPkydJN2cPQog",
  "key25": "gLCkkwNMbNiXehGzQ125SP1czL2gCzjzePJRo534Lb9bAkEQyfeyWYMxDRQt1fBd8mZaoMP5HByhzgKTfmeWSND",
  "key26": "513BV9ohJdcH7NnTgBDNdHcGpXkpTvZQzQsNpgLoCTnXyjCBhqNfSYFshrmj3na1VSNuwSQDdbZo9zhqFYR93Bhz",
  "key27": "4aRjvEkeDhiJZtgryGSMrYovbeyQh8xdRuQZZNEX5yaU6yqrMbDMMGQqBg61kB8pVHNMUP6rJZBzh6nvJQKR98H1",
  "key28": "f7H9tkgkA1N8HnB5VwBsS38K6Goek4KCbJ5REqHgwg2JnERpmGCGoLrc2Zvbvq73WMCtSe7yeg2Wp9B6dfG1oiq",
  "key29": "cfdWZrH7h5UxTPs412HHBL8ER7qm1S8rvZMGWthRTdfqWLNWairmQAZ8ZCqbaE24w2EvdKg6YDgYiqQbgGqsMep",
  "key30": "39ha4wye617m8NZDeeszPKz7zNuS1SAMdW8qp2GMEcHpDf75hiRMCKjRMQ8SnbxzpXZYUND5yaDvuu7p1sfUupHH",
  "key31": "3K96tgvqgfd7EVYnFiLb5MYrcbs17cX4UZqeL2Hu8xpwNX9bccT3o4Lwjggk8kMiWbb7YJTb3qJVZWMKDP2QJgD7",
  "key32": "5Hr1PVYHok1hqBr37jxdgdVhD9r3SDV8QyE71dwo8s3C5Fd5Ng6qd36WVU38KfMEn4kMvX5UinyGe1NCWQXVmASK",
  "key33": "3n8at5ujmmbAY625ZKA8tcDafFuY3KALEVjVcPhYGePJm7uHni3fVioUWeA3VV6Nogkoa65rnhKxrxSehmeP3jXy",
  "key34": "2AZuGYojEbtdN3rxmuddwL4BUZfpos1Mh86taAnLS6Nvzqr4pXrFBKKLEMKwTLWF3j8yvhPeZVryHPXMnApVNrqs",
  "key35": "4uRMByiV4j16e7bHeGB5ppAyBpBvFQMPEcC8oQ9gKFdsz699LeDErsAcZom3vXoBepmZSLKzmdemuvQneCDgPAoi"
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
