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
    "3Xv55BwPz42aBwNzkx418iKKtWe3XYmdCkDvqXwnb6n3AsCqeavzC3aXzzVYtaAowf1LqfkxPuNNTn9DkkMfiNHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bde5avusBSEgx5gxPadGZQcB4w5nNLyszodZBS2vEjiZ7DnSULtHrqsqv7tcLL2ZzLUCUHcTir41aLtTqxpymZk",
  "key1": "2hCxoMc3svSB9rxxNR9tzP6iLWDohP5ogj9ByQeJDaY1iBeStR8tp2qh5neuNCcyWx36J5KEqVvifE9UTLe8vrt1",
  "key2": "2JWcdR45xrCT96QHvekjhZpahHYnAM59gAUVmcLDttYcNFKUxXE58sX2E5pswfCAPoSjKUrSGNUqmmLWVoNUAqiH",
  "key3": "3WFGzH3LMqhzEzBmBRXj7ftf8iHiAPBsSz9tBkCYKjkdUKht9EZdnAEDzKp7ZVGBtZy3UPw8mF6wXeCo2VBv6jfZ",
  "key4": "59b7DgcUCbkjRpSwMfwHyQFSGjjWPZ1382Mgzg25TC6QDxpKwerN5FVL1dsk7rqfwAmddKDvhvxvjomp4Hn5HBXH",
  "key5": "Jnds6Gx4rpgvzZ3sG1zcLH1NcqzCB3xuRkLuq5urLwNi2Kme7bqQR3hgfzWXTCZj3b74UDYofwDnNAu1RegjUid",
  "key6": "5uMz1qYYSm9ccgyseoip1ScsqUNr4tgPSH3NHj5wrX8Ya1nSCAnsVgWJ77uaGyYDiZZcDpFTF2NpD2Ydi965FWAA",
  "key7": "5qiAhuG921Z9qfqpQ8UuyQ5vhLCFDf46ASqbwMmMvMFwtC8qiD3xc5TK3SVBuauc1AyqgHvrAJ1B3oHCRGyRThwy",
  "key8": "2rkcxyeXQEDDuz38MVyUtM4dWdTnjfS1T2g64uMRXC2fown8SrPW9LmBLvCtGB4T3B7Tf6Lb6Aw4euPUP12CqDQ6",
  "key9": "3ZspKzVuqHVmx1WJ7V7B2kNegEDrodiwDVQeT5s81zTa5vsDnvdLZ4Psv2gtH5utDNrDQTiDjiwDq3R6itZkCmqQ",
  "key10": "4G67a835poV3vzThAUb13hJUSdzpQoqiSk2udqtHhchDz8veXbz3ee5yXbmZHcRH1kF9jYRyXzTscdUEqS6ieL8c",
  "key11": "3a63ZgKJacM39vEAEuX8RJM6G9KViG7bTP3aJrkBZ2ADaEdAerbYCDSvvLhRGKAQ4Fx2tmxJfx4erAm7fDn9RbM6",
  "key12": "62fNskfhdA2PWWNYp99AWb5Y1xYdxNoEJFJomECog6bmU3MVpGdpXm7cgd1mpkrUZMy5LCdW9Cwcf6w5mSpSe8Fo",
  "key13": "9y1YVjRn6kEWPSKmtsznq8x4hQPSNHTAPG6FfJCDE55d3wHBJdnktgKvMzdvB3SS8MPivVqRBh28KnoqZuU7H5d",
  "key14": "e4i3CeEX8MhQvKwgM9xCbWj8qP7mRhjZ1GDBu3Hir1wnr85dgYcwJ9xKJHuvWyk6Ajyx1uqiFp8zRzCwQcauxP2",
  "key15": "9Qqn4vTuFZRa7JjDv5PzHFkyPHBYPCj9BWn1BARvwGzmRgEJ3p2CpS8Xk78kHVpZLNGmoLEN6nm8Kf8b7hgtRn5",
  "key16": "5nNjZPCF6ZLVaRrRsEbCFnK4cWC97Stf9vfiFjoPYUpzVCu1kZEzviwyAmKo2sYzcCiFtdmCMBLHu2FYPAVtAiHC",
  "key17": "5819WFkCf7fVcvWXBaifu1UVXidU23EodQwH6J7e4JMRnBYNoAwbWqND45M6WoPofsgQynatfDpyq8yJp4WAQAAD",
  "key18": "HxcpLUGi8LJzMjgCGBeGtNSZwoCeBcpM6uWu7BkF6MnjNBxkszn9pG1ZqJWcs2QbfacUwvd3jnoJ3DLphMAcjzU",
  "key19": "417ELdnvitoEjyM2hfWNTVKTkPAaxwSkKC3jNGKDJxmNBPFnsUyZLpg6LJqrP2L2v3Br8gLpM62JuGvSH1Mup3m2",
  "key20": "64JFZi5839F56rjLpscFxV4bRRR4LU5jWjy3Yf4ARReJ1qWzT2oAnCihbNxKCuM6hwT8aPv3btQDLweoJyEnCVbP",
  "key21": "2Z6hrAqkZxuzgwKKQFtcHxwfTSsHw154UcyrBrbQCXPGseHjFZwny5GWm7jFPbPYWbxwRqZHzYKwttBAfUkWN13D",
  "key22": "5B8TUNiZD6UyxjbEe6CJa29c2ZsN3hj4sLhmAQHhtMNfybwSyWqc3nQv9fjbAHYLJGgfZxKbT5bij2ky2poQfGT9",
  "key23": "9gxGtu3hrWiKZ8qkKVAXdpSKXQ5YoC6WKtMpR7J61aqEtw5TENGmzYNMjqssBXKNFFf14k5h5aive2RLRhtFtJC",
  "key24": "QbXgXoK97rhpLHYvJcqpRqsjdYC1JJPHaeVyywNj9aHf1LJshTZFaR21vTcM5vEyrrJdekZbN3eDfH8VJp5x7TK",
  "key25": "3zxqP56UYQxrLvxnV1D29eow9CShuRZm54mjyBLnBUL5RrsJwYsutVHWBXCfBDcg8DfvbqS8gi5XVsApY8Yn37RS",
  "key26": "2gmQc3WRLWBbFUqKRfDc7691wbrUGURmnYG3g4jrmW8uYfdJ2eFRZcRMsEH82qKV3AY3UriVMLhN4Yk4TFDvTBrq",
  "key27": "2ByNWMJNpd8Zg89fDesodzp4LHV5uUUZpXoAvD4Ke4oDh7nmrCmvuYFDg2mQKFynzibJ8yrf7u25C2pncJ2Azbzs",
  "key28": "2vDzpk5cs6ngjtNfA6YPdkTcwL5kUHS8y4SaQSYpNkS3NFsyfCvUoCehGZCVXZT1DSFz3Pc1shKG23aUiWepZUyx",
  "key29": "5yGqJj9UdbqcmoP5NpZ5G7QogJusEj77m7m5ecugTgdVSYb3CcaSgzsr8GnDjhc4h31fbSpMHoPcT9bxi5F226br",
  "key30": "5VuvEdFD4fdox74WH3RDHD3wYWmeSeYvmYLDTpkHq3zaw7RQB4BZae89yexRmLPk449Xmj6DtKXaRvCSHXjU7kyM",
  "key31": "8EpbzheNcukd49NRMCM7KTY6fmto9UUyg2pF8VRwspyzJTvXk38Y7rLPsVDnec9PfxA5ntR6ZqCn3J2tKgQZhNR",
  "key32": "hYUst63RfiMQfknNrYH5hRVT411nr19Pg9RZHvsffJ6WcW6pmguszNoyzmrf7RUJR6Q32Ya8UWXYdvJW9stUSBv",
  "key33": "5Afr6aUnnxe5chmeokCfLWEcydzeDWcDxgCQwYcDFdtESxGFC2cQk2fMd7UcYCxMMPmEbd8Ydrbq4iX5VKYsLUWS",
  "key34": "5vmqEbjoKPaCdNqvA136XMRrBMNit9AfNdw2h4fuUXtUKQHAoNepxGCbY5wu465adQ6E9UL5Meo4uu1tAfQrsTeg",
  "key35": "3daNCEQGGqV9DsVpRhs1mLsQY7xjtL351HCsWWk8fuyo7o3RjNbrNaisPgi59uH7wVHnvez7H5ewgLS1qqQnfhJT",
  "key36": "5W3GmVzUcaa22eJ9WhXHS8cfcohSNFw7LJUGFBz7e7khk2yGThPZgt9BKQPUPJpRT2NKJEya3DiL7bAiyerHiJj9",
  "key37": "22E6RxFKWHWv1gcAPozyWdRZvgZFD2HKvnLe46pvbLhe9Xd9CW5QiMcbBDcyHkBzjSDujpFuY4pakRZ7bfGdHd4c",
  "key38": "3ops3KDTbZHqsZBrYMPczwtGdnCV414J2wmsRvzt6fA8ubho9SR6FNr4MDW4bvW48ZrWkqB52yJzE7nZAiy9z1UL",
  "key39": "4Lup3afatWGd8Hdpjcir92G3NR5cJ77bKaWTYxVnSaAVfhw5LsoChddQLFkfzPZeY4rAfScXZoDwBiBiGiLkziEQ",
  "key40": "27SfF6Zk3UPiByKTg8QmgQJDGegRyvsZpnUV7AhfhpG9JFSz7crQ21xy8deUuuW6pRRVXNQSDPHbjctm7Px9VGD6",
  "key41": "5NBqztcLmiYbrTEv9DzV6znq1tcWMc57rqK4iPP3ggU7jy7zgycbshc42BXbaAocz1qTeSEzGytMvpfpRm8FyXvT",
  "key42": "46uPEjWPvU56AVGahTY4sPNw7FC4VNPbgRadQn3QT7iSgpYWYS1SVtjHbCTDBRTD2m6jpDEWYFoFw9gcjcuA361p"
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
