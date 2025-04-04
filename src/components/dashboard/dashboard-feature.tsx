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
    "4hjWMPcEhiAxFCi3aj5VGSDZD9XQYWM317mxAWKg1VJSbFDEoGXFZ1Zi7hDQ2VUf78oQQQMPhJemKZyfh2Pg6yt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SCdCZ1JjMnVLL5ACDajyabBq4TLch5HaDcuE3xmywc21MNhzfgUdGRM7p31RM4zrMzg1WM5SAA5KSLi9TyJDLZu",
  "key1": "4a5NyR7ua3tMLHYAKU1CCBHMoYcn9tcGgtDySReb2LkMN2nqByZp8uo44tn555R8NQoAqRKPYSBN82bkU9uQfWUL",
  "key2": "2cHuMSpooGisQaCmxukSeifm5pB3mwp7gJSSowot9fVExhJXdV2utA2DDCpxGK2hbrPGjybmFmbnBE3w9kwC8uXd",
  "key3": "3y52qTbodJfPNKKsiDiK495KHe2xzm36JVJhQxzWXrhUobcdatgF7ecET1SML9R8KYr3JpFj6f65FcYxpJbzax2X",
  "key4": "4wwwd1arAAryy3p4B66DSL3apWnHoHBkZusc4wRaVqfGiWAEb17qPdnAt7U4yP8ADUc27u1HBE44JPQKAPSZzwPg",
  "key5": "p7fAfCSKRggGJNTobLkb7riGY2gwZmHAfG87sz9ahjNJAd5jiD7Rv5UM9iC8Gzv1pYwrty2Mm4U4yGYVj5FNZfe",
  "key6": "2VjnVbT5ViQDYffUyxCyux8JcbHvDJCw6sJWdgz4ZuTsXUrYDRzQrirvJiXW5dmyJprEVg5HH3UZWiSqJzdsZG5Q",
  "key7": "YgCQVX6hKTBmWqKsU7ePitEMbKwTgHRfJPNdNzM8G75joumfJVP8ECaqJm39pGKiD27qXGfxNTVQYS2NyFNjjXx",
  "key8": "5xjaHkT7PXCcC2RqdQVLVrdAcy7kfVTr4aWYWhT3Eb4AeAEKAdUhXUPJo7yWBo6GLNSYYGPCDPQjNLHQkiG5r8eq",
  "key9": "4n9AMgc1UkNuqP1z5PZN7p1ChFiBdCR1Tg7XnUW6QnWYbJsqhGNzJxfGC1QKFyr8798sJBL6anLAzJZAZ8jQtLBk",
  "key10": "3gF3A5XdDEAawSar8kdWKPc2aKdLySi4FcpyTb2Z9S5FzW8CLTick1CCsVad7jKzKrZj6SjNJAzY5HHQjPKjHLG4",
  "key11": "5JK3wkWqP4M9X4CJNq2ws4Y51zT7QQDpxfyL7kBZ9fDZH4WToDkLifG9NAUhqcXR7fv4zL4KG9pdNuqid2fEV5RQ",
  "key12": "ryNm3kuQPHmXbSM3xVrgXYiLX8zMDKLyLEqpCCcePyjLqkgdyZaFo6iKwCui3ECdQFTE9ZSLYBjUzyurida5n5S",
  "key13": "YQN66gwzT7ULpWPqv1X38Js5AS5UrDUim3UoMacf4NeXUg1Uv3oiUxWSpAG3h6ynqJQw1UmhZmoWL1845B11WVA",
  "key14": "57UT9X2jjD85j18ZMiRmFFoJrNPJXbbxdbM2owG24XYA7ij43mK9Cb4BjGumY4ZAJ4eyKZHTUaB7Z6b8414UFo57",
  "key15": "4wDYKgYJYZyNd8R4ihARtwdDcewARoAewkE8xiFLrPM4Bsxu1tApUAwMQrP4gJPwnAzxorGKaGdqifLFArBDUNSq",
  "key16": "34q8qV1muxfWBjYuNwz65w6k5xYLYaCjokb4PvLphLE67XBpUndTkCdADsJY3K7yoxGPzzLvKjXB3L3u94WeUobg",
  "key17": "2Z7n29M2zqJefBhGqy1PmGn9trR8K5zmRWG4mLtco5vbpBb3akoAxcfFBtPNJcr8zAvXrFxSau7L3NPxEBxXbGvm",
  "key18": "3nyhnMzSvkHjQF27BvMrkHM73iMReVqKEUFUXbhG1Lb4SBTXMkX1ck3vAZLjyESuHoZATyNC8sqXKAA1QQHdSx1P",
  "key19": "3oBX63dn4Ni6js8wbXkJs49potiD9KCessVEbkDH6RPXSoRUjjq9hcYaKeS3sj6LYnRLifh61QnJY774habSWx1R",
  "key20": "3X7A42uFHETWkD2gmWViwtmXk23Qk1EkwmhdggLKyeYMn7xS38wdnqHJLrSHtv3D6ffQZYjKWWK18n88wypV85iV",
  "key21": "2kQvXXC1uX7mYV5PgntdasSQ8fXxVjjet8VstfqRNdB2xnjRzEVdQwYttZJPJGREmhpWQjbgVokQbTxsB5iK8RPX",
  "key22": "aJZGYi9XMu2LoscErBhEpHUtNMMctSJfRNWKKEEWuqw9yWcWMAvVFYdme7UkC43hEm2KTScrWeSShT1VgjBCtAA",
  "key23": "5a8ojGMSMUN64NxRSq2ULMAxE4xFgHaNvurwY6YtHNVYmU674yzeY4ZcxxYrVhisfj1Eng94xi9gSijM212aM8Rt",
  "key24": "fFd9PRefQ1cENAenhQn7sknohmg4rQeRJCwMf9zi57aeF2DZmfW13cyeJUc1KWSRffYXHonf4cggxAotTo4z4az",
  "key25": "4nni49f6kFM3bJhg1BPLEyf9uPFZDZXVjEW92Sk7JVULCXiCjfgBEbQoJVxYFCizAmaKRY4qt4wkLrSzJ9eXrPNA",
  "key26": "2STAU3xesTXqDrKDHBaUkVWxBwEswfnRsZK366vGns4gkovfgPBXaG1tNwW6ggc1P1L7GZjbgX4jtcbk77eUaoyZ",
  "key27": "PpkRAa9CzhRQaMnCFdZieYpe3Wh2ibftVQkcTdo6oFNaHTKVfiRQCdZJh4dTndRruXPNjShaYBbhyCpkp2o43eZ",
  "key28": "3EFfPYr7qe7B6Ntp41yqh2iWGSeAeqiwsp8UofNWm2fACtFPqGteMXqzJh5stFZUYc3CmXbtjmbriVrGZQ1XrGkm",
  "key29": "5EpyzMjAquLiPtLVmaeiCytX6X2woKRfaH3D45rVDWu8zeT9XA3CArSCotqDTQZc1qJ1MstZEygYVAz4E33Fyg6m",
  "key30": "2NcUsmWPb53upzWfjiRNLejo6WSnZPxZuh1SN3Thy4rX2wRFwu5Q15eje3tG4D4Ljh2nS1svRH17oLd9FCFG132j",
  "key31": "5fk5Qckw8wHK4WYtPKesJRb5SHABKPTYtVrmi9nGGyCApAjBt82kZB5RMwp4poDnVmB2nttLLoRybS61bgu1EJdz",
  "key32": "qh1iT9DpwJYJuYZ1fEXhL3edeuvndUsp1VcvaFRrGksXjHJ5mXwGNvfuqjh9T2LXfecaFh3cHkWHKy5zp3qmTXD",
  "key33": "3X8akN7SJxB9sm5GKmKFDJQx5YPKTM15nUGuuXFvKALQBFFbuq8M8WoWpntkoGKCh81wj9anEG5LcgFqa4BKh5dN",
  "key34": "5ZSgHaNe8fJzJTBtNQp6cEgBEwH45MsQE1juMRYCDFuGecNVZTWjMbrf9hdLXLEQhsrqiw65obUa6gkjfh9YuTcB",
  "key35": "2QdHQtt5hDccQiX4U4V2o28EVsDMLG3kettqhfY7cj5r2RNRdM5fWzZr6nox25TUpMc6iMd1TgmHjgE2rrdiVZkp",
  "key36": "3zpA5TD1jE14QjQq6cPAJxbRJSVFkkUYpTPY6rSzSr51y4YVQmHnfKCxx2KrXnwSg4g8o8486krWsNY4YDYnwmxd",
  "key37": "3QNFgJ6uszg3tSVTezKDSkYBvoXL7h2ivJaC7VyHCGYnFQBXgkPHYSDfaDzN2uPPTYwBboGbFi9tK4kXf15tw6L",
  "key38": "5WxepwwWaQbcSwqf8RCwceHt9YNbptWwkvyYR3DGhtBSnJd8xrYyx9XEPjEf83GovQ1HhJrYBgLkYvuAk5AmERuy",
  "key39": "3YGHDGx8mbmW7aXxauhCbqQbfUbDdvmf1YkKF5BXdUEC9YcgAiTPdNgCpaMMQQ6uu9wQeufq2GFMEJ9kmNKtHdfc",
  "key40": "3nN8DnazGfZvpnQezvHY42UiG395wnSZtv1VxaSNwu5iSCHYB5Tr4ST1dBA6doW1hYUQVYZuQBXLtm593FieMM4k",
  "key41": "5M2YmeGSUiLczkpzT5yUL8JaGvxV7JH6rEVpgPbXqkJTiycU5N2hdrLb6gtHP5MZ38BqCMiCUEBCiqtCigQhf4ZD",
  "key42": "jw8331XJKeVvH21XmcwqV3J8ujZGzAjGz94WvsSyXLTi2McycJy33SDBKAuL2e3R3VH4xopWrExmSbZtZUTbdw2",
  "key43": "4ouA2FHTh38zvhkrXkEaNmn8i6Ba62sr14nK59V9viMhF7U3xEL5sinwyZoT9ceERC1spRAAx8M1quiaxfNcXysU",
  "key44": "VPjzRgxS3KPuWX7bJbRqnYEk5uCVG9AAqLvzxMANaKzdzPgWhJRLAXFM2PbZ95ucxrc4Wb4DXJjHzaDE8CxofJX",
  "key45": "4yD6V3qquaeXF7H5LSu7LmnrP2uZwbvrfLFuHRuBZrFhpqJ97ZMG1cErAis1jbvrJjA6vcqSYkhE4fGsv1Mt8yNX"
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
