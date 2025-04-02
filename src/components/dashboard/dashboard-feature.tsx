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
    "CLn9233dEZMxJfydaUw56E4wukMj3Wr7qM39WWs9GhWiEAza2WdeiLr2geRgTDSKALxeaZQ18aqqrfXtq9WtSZe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AU9vFKNHg8W2UmHPWaFtEgVMcTKLEwL964zYMTAf7icU52VgabbHVHbVwry89W8D2MJo3fMYbvyS8HE2kEzC77e",
  "key1": "5mseKq5xgF1cHQdMgRRjh3wFdxGvHuvkHwrAQdSV2iRiTdBzFTQE2H1MiFeigr9BwRQdWq8cCXt9nSEdBg8eQz2j",
  "key2": "zakGsFXEHQkaXdkBU8cMKNRRByKLEvb5ZJSjzXjyJDgWQFhtfkJWwRn14Xrictx5MSveEZYguGW3gZ5BvBrkxy5",
  "key3": "5zz47KcT4DWQ2hh1s9YTbqUSCLiJisKsmX77UdGdUamEeks2W4eLNVMEGpZJPDfNNbZS3Kaw26A4dyVSnj3SxpaW",
  "key4": "3jUrbV56txVU4vDdFKRkhF8MeDjqWUh7BKSGvRHdeitxn7TcQTHpQVb3w35XwkyzCDV9FovVaPkUNuQiPDaGEU33",
  "key5": "rbZ8CpdJ5KXfjrMFM5YTXQirNvfBKDg4sEEB2U4DAnFjtqpdSynwXSog145AUYBhBeX3fccTPDjxTFQbJFJ3L5G",
  "key6": "TvWGS3hPGW3VBEP9CfaASu4HhJ8xYHMHYmVzAhXteGpBMWj3kLwhbdeYug4epCdm5srpJWLwscTLiJhGH9Dji2W",
  "key7": "3CWed7y7KiMbA4o3KCC3WQaKnLgyWkFoZAsBMA7Cw6FKqKHv9cMmcLp7KqcTesXQ9usycWEDmpQXK3he4um3Z1Ef",
  "key8": "5PHBBtZmcwxGAQzAnfFUPzLNwnepwrtoazqiMZpD4rkbxcXymS1jrg6CBGkD6JGfp73N9Xfx2gUR2oTByyjbaYUi",
  "key9": "58uxfD7bwrS2eJMwSCq5LJ8iQujhajqc2bQmXX6UPDYQ8uN7x7EKWUekWvvu2R7zfLyY5yVi3YR83pArjL2euF2N",
  "key10": "5xb61SQRdmALcbVVoTTYMCTJuVycTtBypxv44JmpCKu1hU8r12VtXhKmkttvLqQc9SnuGjYqRjrEAE7Jhj8cCi22",
  "key11": "3bDwiKnCg9gnUwrvhokXYqkdhUDrsDWCHiBXumA1hdyUDrfRSkhKnFig5yBcGJoxbTAi2ARwhAByvMUwoD49VXSf",
  "key12": "3QiP2SAHr9SAzucAenYHyt6aCHrmwvAUAD7ZrKtLfhaMK77apPn12HCdxKFDTGAYKnXZDhCvABzfn4Wh6Sp5UvAw",
  "key13": "5FvTpPNbL1M214nnYJAUckdWpUtMFYBAYbhzruavFRdQzHxxGJSnay984i5hciJLBysjnLCUpdiyQ3uvqs6uHqFi",
  "key14": "5zyt4nvMsbdudmk2t8ScE6eh54MPH5wvA49Cu3jJaZYzGzwap5GbvcNckN97P3GZmSwjqLW4XNZpQayQpCaL6evA",
  "key15": "DwowiurUU3eKn6acndvGDd3ogVXPNm13PJyCH1LhtDLTDVPjqEKjXWHziCHYudoX4PnCZiCCoALhoNrUu8rEgbo",
  "key16": "2egEZmxyKkZCG9bS7Da4GtGeYJWC6MEYEg2wQPcQUEBKQibD7mj8ueJ5kB2wannaoydYjH2doQNLaiXtGFZJAmfV",
  "key17": "yaehFxBqjKR824uP5PZGonhz41Ck7snXCkbBqjhM4st97Nj64kP6AfruiKBMua9EwCF8k9nPaXERVzebZznM8do",
  "key18": "5r3Hg2CBSTWXw7NweQYrTwHQqt1MWjXWtN2C2KKJtbboiTUyQYLE7rCCEzQzgCSrLsezjB651b69oFJZLKNyBxLv",
  "key19": "39QqPNpF7eviMiaLMmj1UmDAiioi4ajCmYdgo2T3YK36pmedTrYXg4tEkhk4QDdL78LN2bHhm2haP4ZRb8VH9oiT",
  "key20": "4KEbWcfGH9D1oAJCEBrD99PdFKkrcnFQddihwnULeeT7xFykWfX8qvZ5yKdX2tfMqR9kS57NsoCiXz5qXYjDHBRP",
  "key21": "3u9pghRmSpSJERUXk2fxbU4yV67v3eggdxM7i5U232GFNCsxmLHn8dr2LibMYvMLSTLN9jrK9Aabc7bwLGjeUGUc",
  "key22": "4mZ2o3byeF8fJwuSqPbr3oGkwauwBiu8AoBEnMYs8D3uuiP4z8WHb4ZN46aQLZyus9reFEitYgEfGwpxx59YF4T3",
  "key23": "cnVX63aqsXeUfbCLy6x2vnH91qbbESSzvEYXgVgBLCgmrPrf2JRjEJhifKSGyXCkizQxkpPq7ZUok99w7kY8YEm",
  "key24": "4L27Hdy1mx6ZekTMq7Y8nzm4nC9MY9xttLVNaxi9CM5qB2tgYXjHLkD5yQtsU8j9LGKwHdSKsSFehcyJsCLtXAEJ",
  "key25": "4CSXC2PgqzjRd3nGexz9TjEnPVVb2bLtKZHe32Nq7gZsNdHYTa1emUHwWwps1dppn7UiCJ3AzM6b84A8wVVeyKxN",
  "key26": "5vJxYHK9h7i8xDxLeFvgxbviLakZM7KgL9oyigQ7HSFG3WdwZh6dL2kaqbc6pwADEL7DCXDZVRkzFTsPtL2iDYAM",
  "key27": "4NStkeBzHdGBAxB1QPeGhQEbfmxCn6Ym83vnvQj9nXkBsrYF4aLKQRfvLnno1SGVsvU1eQ5eahbQSShUDEqesGup",
  "key28": "4G6EqpvZwKSCF4V9LqM1ERd3NKK3WJK6jgEv7ohHfbnnnKXYVxoyTRkzreNonb8cXNHCh7CEuD3dmtX147JRsf5y",
  "key29": "4W9FQcg3a6Gu2f83AUVe4zGmWhv8sdtfeeTpR8tzRtpRcqnMi78v8HdnjE8FShJ6pfWZNsQdEbwV5d4ePrYuNJmA",
  "key30": "4aMqENPFk39sFFEC2r2kj29zVixc89egBzRbtNZkQPuCgFai1EqgxZH9rVJcwiYc1vUk898czTzPzrj36askBbrD",
  "key31": "43Ep6XGGu8fyCXzwz1WSrqsvArGMBLZJKYez6Xktb2L5czzeMq3m1VmUwcvyaHzxhZxcwQQoJ719CKCoWPVmEXRN",
  "key32": "28uFXoDWdVziWjdBviizkZ3cDg8vVcB4BN21BArZxAvS25cBz7oXmcrzb8mXZRZqo2YwJhrnNaLSLoC5YFS7sZCY",
  "key33": "5e5RF2CoHhPFte3noKS9RSoBsUqTzV4uPjsNcB5QSeeo3cQ6TJPwuCfoHguCBryqQhGtfgGTHpPww1S16kKz8zec",
  "key34": "38KYo3g1RjacQRX8t9qWqjZL6QW9RMvJfRgcdPeBs42HJXvg4A4FuzznYGCxK8wenmymLxvq1L7bWbQeLKELQ3zz",
  "key35": "2taxwqViSTLA4WawN5aqazqChaxhrcPfqMUQpFcyVNq4b5eRNZJMRZdakFV7D3fNTcKmzoKkyKKwYqV8JdTnQtXc",
  "key36": "4nrna5ji5sBYSy6kVwJo4aNdGVgKt46C5d1msnPc2NBXTRVn9nmhQznr1BqhDNmnWa2RkYYPw4bpuBffC4KQjSto",
  "key37": "4kkrdrVmw8WjudQbBFYDQGCzFdMzVf8JE2DCmSboarLPiE6GJ6eRqNEiPp8Ppyv2DeGXouGjWzrnZL8xCehVA4gQ",
  "key38": "FJ7UgcgYf1HxRMARLsJb2eS7Em236tfZbvSpvWTyWN22bQVA5QqWhLAzqEDzk3TsWx3FsYAijZqHsA2Q9YvBznn",
  "key39": "ND1VHj2dep5mzbBRWjJoC4NtSc5WeJJkRqjDR2wCGavVk8nFnMoXMMeGeNAGSngWxQcXJYGnNTyG8HC5st9rJWo",
  "key40": "4iFEYVAx5FnhoZb3VXhHRoMMBMjVvwyiYPwH9XDz8ub8zmSzkmAiWVBETFaULjnxX3qY1EeUvRnqjJNa7ojHmHbd",
  "key41": "4wu7w4jbv5Dsg4bmoWLh17SV3948md8VnCDp7gGrW2QH564zKJHvxvsqP4wU5UJbeFzCAw24s92hX5hYHsksWkYh",
  "key42": "28jnnpwJZb2WBf8UXRnyxp7N7PPwHLvQDGxYuvQ9TMsa8QsfZZSpphZjGNG6aqhh8nw5Z4rgUpSQzcKUndcgijhc",
  "key43": "26GDd8cuabhGgnypbKCYB2cg1WKCSKgt1peQdUJiBh7nf5ESiTcVrXMfHgfgtnGknoKccv515S72eWzu9qNAHDt5",
  "key44": "2VgJeHcwQruVYm96hqMqB8HSDdBLSnAjaLhb8VDia1JyxsZTYkAiMZg2mPmkBp9MyLFxRGhmnDWka1hk6QbQw58n",
  "key45": "2LjQE4vJcWNmZ3Rf1ebSCzRMGbsLKYZCShpnwffYH5Qr6xHNDMrtzYJ15wKACzimq1fT3GZcUNZV7XpYMXqkwc7o",
  "key46": "3MHHCXa76pfoDG7H6dcGTXXm8RgTiVUdvW4pWjSiPbY1MkMZg2vRSxnRrDRQJqv8B4UVtkbE8YGuFBxvHxz1NERw",
  "key47": "5JcGyj8YVXfupHxaw4jzVAnk1rsEyGyMmqvna4W6BYr3e7SWTsKracSXzyAMUS2xsKzTBjmAWFjH7faL6nbHULEr",
  "key48": "NG8Y1yZm3fqw3A3iBWHQyN1q8uGQXrzFGuX7dc4oUugm4hKa33PmqVtx4pYk1EQvjZVqjEQKFBrT1S2SPz7KC7x",
  "key49": "5o5Cf5FaWYXv1QGBzuj9yjhe8aamqEMKS54NJVMt5aBV44gsPySMmPoqwu6ueHvJhoCzX8REQYYEsFRTLFN3G4jz"
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
