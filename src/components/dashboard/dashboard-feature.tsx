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
    "2QqvHWunrDJrFfXyE8dDYtFhr1TdzKqsX8cbZeNMkp21PLL1E2JU6EH9GBFxBWbs6dwx2XPaRVZega5XmtMdMVi7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ezRjUS14Knx4uVLEoHZXqttbxdA2VJLZCYhhh6edPERPESzgXNrzW7Hk87TkWPDjtkUHLtVhQtPvxTuXpkixmNa",
  "key1": "2asDnntJmp3Aq9sHdFBuVxAvgjHv9iM86DsgAqGZaAcRuyvcibYoygxYPqdQo3ntJbAyzDquwGN2qpvvu9Cpy9J6",
  "key2": "2tyDYDJdYRsU2HqQvM8hKosK2GEbDQJnyBqv1jVee5uNoxEzqArFjnKeqJkzYhknPiGnK3ToCWtgqMpeZ85xxCcu",
  "key3": "w9FViMLfSNsAYUfiHpDaMHwzoqhr2gHFQaqAeZXCN7ufzWNkfqY4oGhePgYwFPgJqQHYGbfpj7TVJZ3Mj74Cn2e",
  "key4": "yHFPavYDJk6phfyDR1peBSDGZ4Wuuod6xshQMJC8Rqo6snXpQUkEWTpgapiYvPcVGxEJi8jRJWdLVAM2fgoRcUq",
  "key5": "43AX3K4hNtA7dvnf81gUE4a6WqpyrgLxkctwDMNnoLu7851zxgk2YPH7Kwtc5QJGjwyZHMRtMJwXYen4xYLEi224",
  "key6": "2e9KXSY8tYPFaKPaD4TRAfvXJ9zkXyDzQXXzZKDHFwWfzPnGCJ8MN894dSHJL3VWCJvddRgdgUyD5XpUqVB6uKaP",
  "key7": "xoxBffCKZxeg9e7oirAMxabz1E8gQZNWsBJsE4tQRwYAXzAMzPpKhMhsERrXJfWhQnTKTPvEztTXGLXSSmUGVDd",
  "key8": "mV6xndoCjmKYRf9nXZrs4VxMhTA38qzbhVxdyCpKbsaSQR1vFCJb1HCPXGHuxh8RSG1wnD3GNftMJRwM73LRMNV",
  "key9": "qRxHY1gU5Tsf8NheJPQjr5HJKvTskqBCLf4sYzWdWF6q9aKPN1SYm7fsHkgqtmFkaz8Rh8dXwYbZADqEo6ChnMP",
  "key10": "4yJLMeKgB4NVeumXzSFT4j8fRCmfdxrmWXo5V91nrNwNGj3Thod3ABWyb77Ls2esE9YeNAkD8svAk71u4ReBAw9u",
  "key11": "3wKRmMeHr9kidZZpPssY7LmGn8sSedGmGe1zqZn7aP5AqnvqWZbw8i9DZZyeczVwUKLLsQXqJp5h4YiYA1iT7HaN",
  "key12": "47QK9x749ULLEW1mdqoETksgge5c4kYfR3a8vJzZr5JnvFdcGjHoVpzEjsZLrfEs4vDzGd7JkS88t4Cs9qr5xP5s",
  "key13": "pPLaQDSbWykF6Tqa5WSitbqkmD9ds5mxR2ipnJjyYzMS2r7zWem3AsbRspVmxqx9C8KjH3znGJ8Y7Qq4P4Pd7aA",
  "key14": "BpL6d3QZsMERykUbcVoEmsa6H3V9F4kAc6JpH3ARs2BygaMRshd8ZQ8ZUmygmMm9zXUp275qo8ayU7CSkpr1pDw",
  "key15": "2QwSYJcMdd3tKTmwj5Gvdy3EeMyNewpfnhfeR2WA1Y8F7RWb7tnoo2onYqtgh25FYu8xwvycxAvUwei9h323xw4h",
  "key16": "4qsA2pJH51nKSwnKAyGmjcF62McjUxB2dcoMmzDYzLe79GXmVBsfXTojpk7wb4gfFMhw6nrT6GpPfZ5bPXC6tsPR",
  "key17": "c1Sed5RUMsurmrycrxA2diHLvW6LPCsTCEg7gaMRmhoVtN75PeBfjFgeJXwPMdNPnFCFwV7j1pj8UkoKCkwZrzk",
  "key18": "2MXx8CVkAZp1GHLf2TikDuGXxSgkRyU4cX4tFDwrjKkiUjHQ7eRVwXi1FuMyHuyKoapr2Xj1TQfWdZ6enzg2Csri",
  "key19": "4DtffizmLXvbgyBEAD3B4Z19Gk3HxiwGk7iSLuFcdHHAYs3xNaBpsDYD8j457z1BoiQ33mE9hThzT35QKzieJjX8",
  "key20": "5HKB6HFWAsuZXn3eFUhHEtY7Nuecsb7tjGdK8vcpqndu3NcbQ2sSEVDvez81KRcYhPrZKgzHCPPgJS4ZTePMcqFj",
  "key21": "3CaWW3zpDY2AYvBWUdm1GNFkhrv759ZkQyVErqKtZ23RW6E1sS2zNLF1kMSaw2PT64GLDE3vTk7f2NDJVMXq47sN",
  "key22": "2NnZxsBJy7BXY7aTTMV55z5UNAjEo4V4hUQbbaZME9NkjsQfQRGkMeLzRrBxaLwn1rEEGPYMtMSQJqbATFLg1dfB",
  "key23": "6vYkFuGEWz3KbypioCZ5B969CZoPvaBBrhFQQk6itZpGiUC2iWwfbAyyhXSX2TvUbZ3ssbpUmduDrA2sJ3YZMgN",
  "key24": "65MER2AZf6Pfa6H1XVXEBtq8boSXiEAdEMGYUBLR1pFpXkQFWVi62Zf84dARG3EyzjMx1S79dgkRK7q21ogn8BYX",
  "key25": "3AFpUdULMztXS8dBDjMP7jrQM3DNGDmeMCEkHir1DLx3Y5fnEjC2JUNx1zv4oehmK2J67C3oFu2s1XAbZ1aMjgaM",
  "key26": "4Mieak5DrXvfEuprPhx5YtcH37YZrU1nHXEs6jfnsxWMk33taHWfXtTsJ3rXxur5wh8DFHDsEpVNSUx6hziKic2w",
  "key27": "4pmaQWtRK1G4g8Bp6W4DfQRJLAEA7fqfRQnkwXiozyCHmbasQvaekLz1aGfC6KEhK95MJJR96CeMgdFWYYNdc519",
  "key28": "3juB4NqUcFja3bbuEH4zayXLEf6j8ZKugRb3NmgsRFghQ92uM3U8B6uJ99rhPwyGF3teAETUmFF5pa7q3Ji5iWm5",
  "key29": "3oB4s5PZrMiEua59RZFajWY8AxLNfp8CBQfV4XU3MKHJu2JnX6atXiuH8iXr7jKnDP5keboz4pdLFRJ9qS3bBnN",
  "key30": "u9A5QbUAVYxggSK1UGpQqnVhU3PdPRXAcpaPKnmLn2uQzMWqiYAemvUM9GtLx9vRppgnJnTKPBaQroysg5baxou",
  "key31": "2SfHYzQPA5nMxbcTZZAU9BjVwT2dRohAEaPmrGQxdVmp3VK2sso7VMihgn3kHr6kPDhCKZmk6Dz9omeE8x5HpQPv",
  "key32": "5WW4utfm5PjAASLvrvG79xXiRL33HuutFRfw3XYP99yB58WRhw3CDD6crC6GveyVFV5EUTTjjcWdcrNsrv2p8pD9",
  "key33": "5X5XHPapCfGSByWX3RnfHqGC7rc6U2MCE2WaXiTMp8FwHA6o9X6TdtJZ7Dbt8b5Qfi1osdrtaLJwNKh6Mx9NdwiH",
  "key34": "5XEQYMtARbBJqCvF3jPSEt73LKNB9vciEeVFqp1iNcCmxmCqG3g2QjqWBET4Z65WLGaXnZZQkhPPHQ6DH4dgTTwF",
  "key35": "5VK6869iAUPoDB3ncUwhWWg5SsqB2GeaAHFQMNwFaPPBxL7i5hzKaq4Q2N9YYpX7QwNd4uhEqTpzLwYJEaW321dm",
  "key36": "2iWr8McnqNjt7YAXiTeHNVde6suGWhM7UszH77S6mgzuohWDgacEMMtMUNWEryDZfwPcHdxHsHzsUpRbWKeDpUrB",
  "key37": "3Y8nUyu5aHfGMRWVbtiT7oZvkPTo5A3yuGqJG6fKkxDV3MnTcBV9dsZkHR5yV6GaKnEB2rsduVF5snDFkTxVkNFp",
  "key38": "3edYF1utyRncf45zBxiDADiLi8ibHDcHkCPLUr1aaZQ1Wez2Jt7KVodTUMxf52tj6hQkaFK4b6xG1UhjwqW3cjge",
  "key39": "2p6bUyYh1sGjQGdFkxsdeM15ouQsEXVhW1mKLgMk8sjMrmnKqsrmUcEBruBLoPWxPtmNnU1iCdKNoNwMkdnLh45P"
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
