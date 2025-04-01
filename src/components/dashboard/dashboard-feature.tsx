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
    "3Ee7MDd4H31dttgCRruiWF1qqw62hJ3PwY5QGGZek8mi4oHciwVbxM84vPawNQNRg8Vpfe4L9KBEdwTj9wYAZGPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5szDH9qXurrdaoYL7SMKCGxFXX9SdJNyc4h6sXBdxCKKy1V1KjBcYd7tYrZ9cEf2XFqnX1zAV5Ebs27rVE3dQ26n",
  "key1": "4YDRrb4Ln6DeR4wdEHWd1ABfvBuvS36XnyMmRc5KY33EBxTJycdxkfdfdTUjmqoXzuRTz5UVCrqhXdoaovpiszRS",
  "key2": "gr9hWujJHbWXogR5mtwhKvKm2pngCfbyoEbioMNYU44JcKVyBfembMZZFgADLnx8MAhhLCvuDzMVaaUgfftmoXi",
  "key3": "2UvmXPukvHUMK8eLpfWPjjPTHLi1rwwxAJfyiRPJNWkvT5vXMnMA57SHtgMcAGLNZ4HdcPHzrMRnBb7GGmLT2AX2",
  "key4": "2s1PpDnoTwR27YX3rdZshFLhJ48zxRp9ehRjNCyjMSAHo6k87cGEDHr7rQZfjFddAa8PU7FH9JL78Y47Puen5s2",
  "key5": "5cvTMMNENZXpCXEDEFV394X9QGcBkum15mMusYKnG5hEeGokXQ5jok938DbKgxYyi4bLJsgRvUZkkaLxtDqXD8aD",
  "key6": "3nZ88X41mybtK8ncQmBgyZRVgRdz7o7k2Gp92RMftH1dgCt68JB1Pz8y7AqfenjnbcSNCRKokZDCoVJp2YinFbrv",
  "key7": "5FsNh6P5DUKTmskS8poFnLbbZtaG4qzGTEr7XDtJNHxwrB9PvAd3twwxUmsERunH43qJj5gTPDwPbcyDyism4qPq",
  "key8": "2g74RDVQ4aDx9af3oVDYkLzUQyMDTuLbfHbxvYCuDKquvHiNvZvxaF1SnbeqT7bVBYL1Cqb6C6XFEGGoqyKJN3wn",
  "key9": "3cpm8E9n9rtbQdrV4RVgbTZnBGxvv3b4tgYaCMYs8xXZsJupQsuPf2t8UPYKhN9TCiFPAGzHCLWuefTQWY1WUbcn",
  "key10": "5SLfDShSk5cTpWUBQWdRGPsr822vN4A82sKbnN7zqGJSDDXY2nQsCzKBa2XG6oQUfngJrRqWHu1C3qYfbbmy8umj",
  "key11": "5Dsv4b75e51H2oVYqabtPM3hpuDm8Q2XWR7MA6p5RQ1RXVXDzgbRGAkyVMGvwVovKWT89uJ3Tb3ajkKsHPLeepVt",
  "key12": "4nAndXDJLyt4oDnUDUxGf2Mp93x3WuKNXoSrZWXUqg8QyY4g75HSGc9wWZ9H78siVQ8xfP6dtk8BmuCfjFNLd4b2",
  "key13": "pb5cGED1tskQMaSsXNXTaxKhmsNF1QHpdYrPwK9rr4wXVvdVSaEx9F69PeZAfCwB5MUL7D5L1LTVK6cHNwHyaYx",
  "key14": "44TSu5drumFmTSubYmojiLG7dGdmnnQsvGduZkw3WnM9NXojT77FpWDdnuPg1eMEZJCFrnGafD5jJYR6xBFpeR5C",
  "key15": "5wXhwgsZVvySgWxQU7LoVc9GRosTqGSffYwmLdpqruHPWv72UUKJ5mascmrGomg1tmGcBh8aqtiSEtq8iWorznRU",
  "key16": "C9bsYStM49yzyNirpcS17ifak84zoZG4E55uq3SQURwgoNQRcvWigV9dBBgbc39uRjE9ur3PaASHQx42pBincUN",
  "key17": "2XFsJiBfApiV5A78Q4bHV5nsnY2vK25rdNhbLVQkjMEXyX2Q7ZyUqYx5nKtro71k9txdN7bNJWEJ4F5UNRxaaUXy",
  "key18": "64uVEa5UVhPQPHwdnTiVKSMqYiZqLbXf4vg5jp22q81RfBTiHgRJW94hqbZoZfA3AHZDXiS3nCq8bgE4wUZXu2hQ",
  "key19": "2KPH4MfdFPbfKwsn1SPAgzzuWMNSpWt2i9DmcwUfAe1GRELjNM8FRWo7yHoQjrBGtwywqQHC7zzeKxYB3HQKBgoi",
  "key20": "5jKxGK9zPHvAxGD9DAnGnfuAUaEcNJDH2uapmQAQgSL5Nqz9rEBYgeMPfE1bS2LpWBnhtcsgPVeZj7Fi5sDRzZrw",
  "key21": "4VBJeiQkrSXASJb9gtPdwSwFfCLaFhEweyJPLEhPkVgKispSixxJzJSNF3vwMHVipzFEGuvu7fdGkCCrLmTcurWX",
  "key22": "3S4pcNjQfd9apcxWrFGqxxJ1aCmTd2kXeybi77muMuCTTdZ95xfSTNHMby6MmSags39euR5ytHb9CYFszHT6rjWm",
  "key23": "sAkGYAmjbGenZHfBMkSa6kMWqnvsH4euZ71FKjqMMyoLxvXaqetbrK9fwcxfGyeQkwqACMt9g3Br5xeqixv8jp8",
  "key24": "4PrmUeKSj31SGeRiEw1KHAgwMPidV1a3P3sbq8Pbt9ANx3pEBBS3xwJbkvJqDPpfR5YktshAs8ATHssffdx4QNYx",
  "key25": "4gM3ULrLD6nRpnkZvoctqQU3vpuRp6fzxaprfHjHgtLWN4262fa76o2HTuiyi48deGvpH9kUCRsugSByWgDCTUiP",
  "key26": "2pMaV4qqvQEnUe5brb8QWFRcuLUVkFEdUz5WdoP2rjfYQ4AA4y4VPJhnvTcZcXSm61xqvv3KjN9havW4zvM1VxU2",
  "key27": "2Ffbmag4aqawW23dcbsmi4GjK92CSbxL1vi6evgMHdAnyZMMMhTMKXYYjV9XwHgwEpDTsGR8Jp75iMFNnNkpcx7v",
  "key28": "4hgjhQeRXQs8WHaCBPSis7piAAkkryh1AdRrvUErk24XwJVLunhiaHjMYbdEGPQTTd2g6Gt2uwXXaci9cPPyVdwB",
  "key29": "Y4Bs9MRo6dw9b9oJwHd6iaymdPywBizwxKxT2RPfG5mCntPcgWHWt4SejNZkjpSvz8B6q137dmLZXQSBqnKkDx1",
  "key30": "4uaBxaV4ZZGM33Nhs97iXphWw4x2KES3YF8CxXFJ7xL49TDWG9QWyxAGxPidR7kykf7hoWFHoqxfBKxbnD7ACGrw",
  "key31": "4TP1sES2JcCQovfg6wJTeyX6ewptXraaxsxzr1yeUSsuG2Lg725xx8cgg1dsiyFFKJyJeZ1WoFDZdzQu5kq4nynb",
  "key32": "4u7kMSAZTwefn1G3G2wBSJJDpa6qS5VGF7TjtAicejHkmrZQrLfVgRZEKcxpHgHGy3ktUcz91ecaXffWrRZDw6mx",
  "key33": "3VWAh7MMNw6XEsVGf7He7rMnsTJRPrm3ukDP7eHT6PspKMFCC75Rb9mzAN1G4EPJwkyrep5pwf4mCo8pDvoLPdqt",
  "key34": "578FCh8pZybFQTDj25ykGFacViMYRa6NaUVajMZCAcvv2MKqim4qLqA73f2zqbYxkWtTmqEAazgDkABPMMNuXUvn",
  "key35": "3coQHHThzFYTD9LqChUT6M5RMJfGUTQMetxzVcbb4xGt7YMCzoafCky1JaQtCwHmsz233ZUF6fe8NLKieiTu7FWi",
  "key36": "121jM8ChudxRsQrX2yYQw6ai7Ae6zooiG8zT1vkMjGzcRhuQtWtkV1H2Wk45iVc6QoTaQLowXoZDv7DoJY4UQva9",
  "key37": "5gdk8u4CQE1bvYEaf4fkBn51avokMEHQFvtamW1vh5LKwgx2Epo5MDQgZmpcTZkULXQVvYi5GH4RCbib3jT2b9jG",
  "key38": "4hpRKQkUhQ5biLtH3CTLzFRdDN5LHWC7Y9tV345Gc4hhTxFiqU8dC2SHiCTe1HJxrk4RZohXhQFEAZ2GM1WwjzKw",
  "key39": "pwNbCnCs6tfpdeideWBLSGH9HKKjQGF1hVNVNydmc3UMT4v4WXad2HyD1VEdwnZWF21UW3ee1bU7ifuUPNbd7BU",
  "key40": "5dd6AwAAEcS3dgJG3RC3YME5inCu6WB1niYgonoov6umeyq68LfSZ3M3KCu2sH9V5JCvoJzc3dmmREbzzf35c4ZH",
  "key41": "3UumU72JvsQy2cYm23MaDmNThpLaepKcePLxBsCJx26mzqnfg8rr9az4a3f4kWghVqK8hR8xa6LkH1SrJDhvNTwn",
  "key42": "x5Bvgx3hGTgQtCw7tu4wUUfsnnGwvzQa8isJkmALoNif3nEdzLtRDuNL7f9pG42wdwtvWDgDzCafLWpFbWCCSKg",
  "key43": "2JJhae4zihustLmEM6uBYDHQppQ71pfT2iTEmyDjaPdCMzWQKJ2wavNucjz1mi2hEWN3Fu81mHg5e1rPVknai2uS",
  "key44": "4Vu6bi6kHNZvG38Z9HxJpbKmWSYkt3UhFiEwroGB7Et8MMBjpx1fVSiwc13hNcrFzPevFMeAtyPQbZtKW1kA7eke",
  "key45": "BL5iWMkgAoFcBsRWF7t4mL3kr9xSb8y6gko9Dr41PnoUhZ5Fhzw7cVL3cjujvcWCA3CdJGmuLQvUm116d5YUj9N",
  "key46": "5Pwjj8CCLs1Gkc9dbq12sCxvw3RoMFes8QAvW6enNCqwHsVDvFJJtMGPs5oh3yjV92JSz1V7r4hJufwWRdm3RjAa"
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
