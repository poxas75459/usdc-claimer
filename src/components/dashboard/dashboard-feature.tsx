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
    "xX1yTKH64QWDzTXXUGuL66Ppcgb14qmqWNSGi22vKfzh3t21HuGs1BbfSdFBqgzUr4fNGETys75aibm53qSSJD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27eYEQTCJf6Hfxen4pj2LPJzpbTnuhs7gRYf1FDmpSaU8PkDyJX1eFiyvUKbUsaGGjZVVgAUDVDKfurjBTmqmsji",
  "key1": "2L8p2ebYiTRLAimc724HAvQPpsdp9skKWfn9a8sQECTpbGPHwsXYcMPa1qNnyrzJSX32ztX1VkgJuDKnk2AkFraP",
  "key2": "3JNp4rhf6kYj8xYGWKas7arTwtG8L9dajeo2JaKQYPfUBz4W5XCwi2teDmwkwiRrnwFHv1exdBZMLnpsmirCddL7",
  "key3": "48XaLU5YGXLbTvoCDkPBetLjvBShYrMaYSFt7qhVJaTUwFGBniyFhfUZnqZm45q8AQ91JdhJNWouR4vrBudexZjs",
  "key4": "3vvJx494LYQPKccAVNjVm6kpvTorP1DjKjkZTtMvqYzEBhRKu3idVi1KB1mekmC2Z4D8hNCZ6uktuFEwyTkc8gvo",
  "key5": "Arz7NK8ix6uGvU4UrVDuBDuarqMkkxnVsRt3qSWLkHzvAQ9ZPdfT7gRNKdrt5dxVjXpKSJgMu45iNRkDxtzdF6h",
  "key6": "5UCoAzFaLey3yVzZwPbZqaYnQQygMZiLAVUV3SmQgzvALf66r3FNmoSdVY3FSvMW8kdhcJchfZDQgeGgWAyvCsvw",
  "key7": "4fE51MZYfZVVAMAYwKYwEni49GDQ65B3MTKhw6x6wPYD4zbXNUv4M8ZzuRYLZ8tNA3jgFAAuaxDhhWRCXj3knhZb",
  "key8": "4zrfmrAit4mPjkYukCwTembmY7GGmwmF4p8YyLmU8djyKyjYFh12zqCYS46sRoyp5HnBtkXvMzLo3LxUqybPd1zB",
  "key9": "2k7W68oDiYMNU1Apzr2FNGT5sWioSFJvAafBw8VMiV7gjuQgSWkLLtS8p8juo12sawQHp9WcW7RFbiGkFNHmKAFV",
  "key10": "4c8kJ2ccUNFsiQhE9MigYV54yQrHeSMMN3YtXRBNys3xkEKrZqjMs7J9RNSoGJqCjbirS3k9KLCZe8UbSygAkpwr",
  "key11": "3YVT4fYnCm1E5udiwZ2gm2NmPdrAssfoqNyvz9KCHEJMPC54YnJExmDyEhCyjrzPQh36vd8heU5tJdjm8YVLBpSN",
  "key12": "26AkmjG3vmDtQXfmY7ubfxWRnFMfNLdTwTbJKFNt7EMUsgGvqUb9JWzG6p8J9aUhTv4Yh3cyKPmvieXn6jjhtrcH",
  "key13": "5MPrYaHtxQ648MKZi5kMYmj3UwPpyJ8dvLm1DdCQP9YpgqRTk1MpATDNgknxken6Tc917oL29CMBbniTo2n9PZxi",
  "key14": "2ivhppExnCKUmBBYnKGXnch3GJrwrffKwMR6DU5GCttcUSNKooHhDfz7DbD3rxEs6zwJDG5c1ydgJWHx2qaedZh",
  "key15": "41cYhqFPo2Y3rGcJaQey4Pz1SXKtdoYim5fBVY7BujJ1NDv2SYLfySQcDTLQ2GMXPpTggxyunay5ye1X2ivmqzLw",
  "key16": "3HEGykZgHiZwZdegnVh25zyNHgu5shTg3xJW954wTt5p7NStFUcQEQa1LZVfwdPNCuM5eYvo7Z1QefWAp6dFwckC",
  "key17": "22UjU9M8aL8pNeuLLoyD93SSuwywhmiK9YFtZ1Nduq8fwWpXwzken6gJccdoRjGHDZk7xXckZ3Tc4RNByZp83vxG",
  "key18": "3r2wwDDmSaLpyRb5nwYoCupG4TjyYtFUSB9WbogJcEuiB2VsZR1j5bgqRCtChCu1gT849XPwHqT9ap1Ep6H6EMdM",
  "key19": "4foCXqZ39GLnX2mkHFrhbru9A2SuPECwzTpZeK1gNQtNS5126zz7pbckvZa3vStrAsUimdM3G1Hm7C4ZXpcnQ97c",
  "key20": "3UQjYfkFhGAwxenp2usGeBnmSfhWPaKLK84Z5QjnuYyV2NnB85Jy9A2xetkDWd8jHH2utPBtgMRDKNAEN42daXTu",
  "key21": "5cTfz3sHUWTkJiZbhFPwr8o7E6Wr23JQCNWUG4KMiGpuyGFWDYUsK3yFJk1N5M1vZw52H1w7nuvkZcjZnXyxAtDm",
  "key22": "3FNafuf6U21rKU6xLYXYVmUWhcEZwPUoodYcp7GGeSg5hWUC1a8D9NGLReida6pfhQkWU1HPTwivZQLaXKNR1Yes",
  "key23": "5GJyYWR5zxJLjLgrPMnXQ2GsvjYgW8e9WdiP1AHLfYSieY8ut3sPCD8BxZUxvJvBsNR5wCc8Gub9upC1miBP5oq9",
  "key24": "3jENgcB9RPeDeaysHQ6xChzDgRpjxKBZ2XG8fG1gbHf54vQMNqmNbERTNW4idA2JXWECcAv1rY3nVzaisGYH9cjN",
  "key25": "4wrwUG5hEAoQFQ11mPhWUrQiCQwdRiwP6s61v6UYXARoNCa7rN3WJ4QaQzjHBWnd969PsaEXrcbmAaz9yvLQP4BQ",
  "key26": "2GwpApdavtWt8xBtB8uMmrF5EyepKiweRHjANAYGTEitvRhYsGx9mBmfGeQm6ocnpXK4jVRaVCJ3DSYVaPzkfT7f",
  "key27": "4V5ucfXNv25Aki2seiPdJZW21NCwMEXYuR3w8jJBWkjtWKu9aUd943DaNC8u1tGWCJt1XpYVYTwca9FKJiHz4qhF",
  "key28": "2r2Nj8ApWAk6wqk9cbUbigFwNSp5tMFAnVtxoQmqwRRwC5o4wuwEsAm2f85SBMJuMxGB85XMMngjtBWksnGiskLG",
  "key29": "2vSzw1qW92B3AQd5wftYVUoMVBvExqujmhs1cfDY6itFnpgr8JP1HAUwp7EBBpAMC5A7FuUdUu1WH7rf9yv9tCSX",
  "key30": "2cBJ4j2s4dfoowtWSfH4msMaAFTbLawSKTPk741tYSF3ziyfCDRjL3oS59kt5btJvczrzYyh25vTnMseLEZzwrYR",
  "key31": "3KzK79dDgFwB55Twf9ZfVQed34aRaC948ymUThHuRfMuf8neXZcdGobMpHVUG74Ady2LcdaturcoRiWikjVd9kZk",
  "key32": "4DZdKY8aKmGP9NeuYys1MMpshRtcq6x8AodqoeYFCaGxcBzXkgvo1gR9hNZWoCr3M8fj4G2gEzJbpXQDghfprvfY",
  "key33": "52FakYXzLXXGPzVgVnL53doQi9w68d4tvrnZAAS7VEyNu2VWwxv8a71Q4CK8eDsCiM38qQWWWonvVS3pvaNMxPg8",
  "key34": "2XuLiLJkif141921MPdVM93K27orcYyvvL9Bp5V4CJKvtRXJvajzUwPLvXXHvpfPbuF6S3UMYddvhfiaFPAi1Nfd",
  "key35": "2DCpi2kEEcJ5mYJgqLFv1qLC9cv49UMQQafDqqhrybqThN1FxHqhDSw7tytzdgFPXcUheZyGr24mAgG7R8vLfeEy",
  "key36": "2eu3AjeYmNgD5e4tG7R9YJgeBznFnsD3RY14mzpTW91o12RW649nsUXt3y9Kfnk8SoVYvehCDj9xDQRj462eXo7a",
  "key37": "2CvYR6DR6FW7yUfHkZMKBZDe5iccTTLZXqaCVowGHcuRG6mp7LRXtxh6CEDg74MUjAEAgDG2MkLDPNn2dMdWjFPb",
  "key38": "2xBkvnW8jYckjQymomm7KzezPpPcDmyxgm2Kjcf7c4sivCVabKo7gWexXS194xtyQouzio4BN5e7MfS3uMp8FzVx",
  "key39": "4LHaArUmvq62giP8ZHjwjuAdnHJM6wJvGnNrUHXBLaou7He2TcaSh683iwF8eYJ1Qc3jsXnSiFV5jv7vdQTx3Y76",
  "key40": "6wMfhTZ83uBxvaFBARymCyJ2JJe6zfKK5ChbSCy489nfgbNsSi25VLauygt86ipKqemjU64ZHs2jjtjWbSJJ8eM",
  "key41": "2hC4eScYGBMV838vH8peJXHxniqJHrMvFPHadvobAvtRSDAfn9nsYAmsKMwSruk95EBPhKdkDvAWqqhAKLPUBFof",
  "key42": "v6royTZ2fAW6NdRFH8MEi2g5QSu45ArcA19a9819agSZuLVivYPRAmSCx5hGx6XUULiAgXXH8r8MRA5t8eqewio",
  "key43": "5k1EejUUeTJ5QhN2cBMnZ7s4kovJTChxsjG99LVtrgRkNp5WGjjxtCmwPBm419YrRJsbWP28oBDiQt3BzN1JDJjc",
  "key44": "66ZKfAAmbpccCtBj48b4d2YcCyMrBsZGGJf5qjdChLDRgDS17vXqfFhMepQCLRqrvoDVs4BJ3bs9nKRrzMYM4yYw",
  "key45": "7dJJUd7j94XTeEFS5dGyapV84UNPyVTYLEvRi9CT3HtLpHqHJpNEY1VsvHmE7xzQKyADnekiEcmwwfc85YVsXoD",
  "key46": "5fgwiigaKS4xz5xjyNedxh7aGjr1fim5ynqtvgcddsHBuq4AjLWyo4ui5eWkQCKrDtQGHEd2pcJPRawF79FCyuzN"
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
