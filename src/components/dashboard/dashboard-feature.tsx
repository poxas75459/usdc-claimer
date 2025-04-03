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
    "2iNnhzNfYGAMQnRYccUufQ6VAyTUaW9qAswQ2KjDN84J2DsTNb6Nj8Ufw2f17YPGoy5FCxvEpmASvb3Nkn6DS5nH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bTDZMCLzpPXEeo9zFEDjnWFq2yz4Bw29UKptGfhXF3CX9VN5ok3s8YGd5sZPt8s8mftXQq1riCyY6r4SXrGaJUN",
  "key1": "37FZTuY3WvQefaKCmbkye3paWCSt3hXT3vn1nLg2HFZ4Sm9upVCUcrcHonrSED7HUNy8bQnMjoHGTghfS8HCbjHE",
  "key2": "3Xbp1bjHPgcGVZyQHZdtmyKDyP8Wr3PKrVMPHxRmNED1uZQugiCT1NFutBoU3fxXyHqtf7SM44ie5njyDaFQZEx",
  "key3": "UuDoSpa1518nfwjMThhpZgC2Pq9YzPAETyXcRL1pQxcwiM5DZmuF4X1MHCW96aSMPZpeogdi1oFGNnjQnWNy8UJ",
  "key4": "4yRVYizn6zaUJLSTAVnbJGMJDDoaTiFeewBB8HbssZ1ees7jSXR4V8bUa7zVW5GR3HWBCQz1GkAnFKXgfUDoF3mG",
  "key5": "62NP4LN7K3S4k9UxAwpLosAaESEUyo6dhiYKoD7AA2KB9pL9NH8dqL9KEom3dG4y5cuDGpmZWAwNN75i2yoHdBFS",
  "key6": "4Y9gfY4fYTzzYjio2NXikS5aj5i51z96RyBFhJLSCqENcsNtpEMotYFaQxnsaXo82sp94Wn5PqGQNGp1aJXQqgM9",
  "key7": "5wEsJdhSmsdU3hrrWLFFM8DYdVywfr2UeCtvXQGkYZAePHMpZTy6GerJMVR1SQJV4mQuHWxZpyKD4Bk1B9kNjhwx",
  "key8": "26A9j7d4HHq2k74MQhzkxiehwJVXPanptY97hLzRnQGvGMn5hHVeMXPKbpJagHtQaT4yWfAEhjg6ACktUD9cofW4",
  "key9": "5m51WxC21fZeW3aJADjs1JBFccuYQPuRiYgP3Jqx9X8KbiNx6r8HXPtP3mgLMg4FTQurQjBerqNXvVn1Tf9x3oH9",
  "key10": "3ZKfacCP2d8bhUpRvm37pFEdz2XjVn2Bo4x4eUr2EZKyJ5YhA7RZffAsRRThjeaoksFFm6y1hdUkhAeqpkFNfcTk",
  "key11": "3gLdGSbFgK6UiAVC8pVhGMGsi93MzSZo3cvGxAtNNtARBYgtsmEp6xfjQMrbsfEyuV7KKDJ6586481E6M3oKTWkE",
  "key12": "3K7j8DugvGY288ac23rH63Cp3JDHvUsaGTR7KzgSMarL9Hm75WehwrAqUTq2CdMmxcJ7Q1zocnJQXpaGfZgbkybp",
  "key13": "47LmCJ4NxERZnpatydyMjHtAQfmQwd1UUTFs8XFxDKDKCq4bUoFoNVubDQ6ncHFhxGr9uwpzR27baXSh5dMx8Etg",
  "key14": "2KYWoHc8RkAJyzg2rKouuspeyu3FRs3NXuUFx64mZUSqPdRQ4dQQkbfWzVRZnAgQQ5tx6MPGoJYub43poCG7ZhKN",
  "key15": "2TnTXdW6WXy2zdYGNumiXtMVma6v5H2mP12YpswewJnZxquXR3qWuZetp88o3Eg32VqxgLyPt9512U5BcNHvHS6",
  "key16": "3g7niE7b2LL6SV3CzXbLjkaW53Yirb9dPjdBKuJE25iztGtsgfPeYMU6HV7fu4Lt4X9DhFMFsAVRjD3dfVh12rEo",
  "key17": "5pGCCV5ryKWsNBmmi5JCPBDQSmC2DuKkT4dm7uhnMVTxof9VwJS32Tgsjfgfw69dk4WbfGmZTLLqC4ic4RGWGj3P",
  "key18": "4M34o4xDfYx8fZ5saUd6A5kwpbDZZTve8je45QkzgA4Gq7vXAPDaaTsYbCpg8Q3SoJds2PiryzwfPjQGXdC9xmJi",
  "key19": "2NkECfpXyaKJhwpxrAS9i92Q78Wc7xemMUQD53anB39ZV2B25YKVP6LuGbwzTfRrxUkDEemtsFvNpHSzQhmhTmk1",
  "key20": "36ekuGZayEbJjt1f25ybFEZ5wAu7EsAsBVHtZwJbjWdKWuUwQEucGFvDGC317yWqKzjXajWxoWUaVAF8o4vxzHcr",
  "key21": "2xGQVSkCkLYgN9MYDPqPu2rjkJ8YWwWFrhoCXgPs31ufH4C2zeKm2LdNBh6GU39nP9CPFHxNJPaf4kTRVucxnwxe",
  "key22": "4ERcGxvVmbyrNsHVt6xYUb5yNd64peaXxs4B4vPQogutJhg2MHu3jaALXbDJBja35fpKsD53RTk7UHeRPfCt4o3E",
  "key23": "3RbRKYMZKymrrrHoEvUsf2QoodxSdpzm2JKVhkQ1qytiNAe1cEsGDox68VtR5XBAW7wvkiNDQcrYVznAbmZGrucq",
  "key24": "4tToCYwmSBwNpA3ZeUyCTJBZYTzAUceJi7zbSBftw21mNsNchJtowHNQp1oHL6zd1qd2LHiHabaatuqh8TvKotE",
  "key25": "3kFRVbwnszg6mmMNEJumsjmV8GgEVjNPY22zpLHh1TrFSrMUG9U4J4DKyK9ewFwkFaQqNT73veqL14h58sZZPhhL",
  "key26": "2Kgej82xrMsbAuBUz3juAV1JnGdwMNbPnQmJtcN4fGAFNhUndk1TTEeGWKnMhsCkNsPcaFaGcwwgCKZooUUSfxv",
  "key27": "2WEC5SHDe3d5HVVKuZSrowmR6GbubVtS5r3vbY2PzeBQjN6gtcvTr3uesH3wkw1miehEKV29hPxi9oeuo4v7GBsb",
  "key28": "5iZqFUbybhaYaFRjBUQVV8kBD2A4CxcZvi7uP7DMhEW64SXeiHxwAztEoimcsXdgYcWXFZRLASTDtTkivsdHrUHi",
  "key29": "5USDvAqQ6cW97i12kY4j3QBfDaYHpzHi4FWXzQRSxFvo2hsXexqqErxt5ghWcAzmDXb48wMqUi4Z8gBetkciw2ep",
  "key30": "HetJcUYL6nXoXeR3oe2FemJVmJ8RfsfDryLj2JSnu7rqS8mH45yHo4mTqjGUWHcz63FWcFWJ4jfb7HQGZszhdot",
  "key31": "5hTBuNm1Soj7FDFVMb2AdtkheioRxtHvWSH6DDuaBoMJod3uRZE1Stp8h1DGeoeHidj9p9NLe6ULqsSdk7pVKZLK",
  "key32": "3q1oN5aS8S3drhiU6TfRrxxH22yGZDjfzF7hPPUNcMTBKEtPC77sBziAQBTBiJuspnd37bR7wdgCZsgqzPcedtEZ",
  "key33": "1t7rN6g2MfAiQzS5QFb7Dhoj7w8DUAXrZz414w7p7kcpksnLP9KmjPFLsE68j9yfnWSpXLNAKQNoxeQMjgEHAaQ",
  "key34": "45S9XZsphoa79NcKhyrQaPv57rniwEMEuyEhLecMNCTKMbshP8ycsNtATSJ2fzZA6LPG4HskhP3R7FTLGtoyZddf",
  "key35": "2uxayidhrNAcpQi9TEnpXoM1Fom8R6MEqXzJzW1F1Wjz5dhUGYu62arQi1DNY2pNuQAJYc2aLemyfm4ebH6TBkgx",
  "key36": "47MRGLtMzrQKGnHtrDrSqLRr11AYL26bZwXcUEvqRiLZ1WFy3X4NkLp46Ur6mfXyRtVGWpFncj8BbLVFbAJMgGqV"
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
