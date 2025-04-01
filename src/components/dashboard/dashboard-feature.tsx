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
    "3ADoGEKtozoG2X6QKFBh7qoYLcM4SgkqqMAX9QxzfYccfyDHapU384gmNW2hoRsQ4Zqea9852cdyrohkEyRcdCCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yvFutS8vTfGybvkJEukVh2wPWa9BvFD2Whdro8fjFh4ebqDwRTKrM78hXUbhR8jizPjPbY4uwvhRVadkFhLLkC5",
  "key1": "2TWnGVYqkaSzmQbrkFiMSScW8meVmt9XYMVo6LVWPVKjvxVpb96kCsnN89e6sTgcft8dYgYEoT84WZE4YAbgN3gM",
  "key2": "3JLBhsnWAtRKPrtgtZpKu2EsYNp8Bpfme9DNowHbBrbcRAArNCABt9j2A8h886r7K4YhqBPcPRNmsyDBbkmMdPsW",
  "key3": "33wYvFjgCx84r6PHMCHBiCQGR7LW1vh1h8ZAeui1XuaSCseMorfCZdsM5aMQVy2EPpxcLh2BYUpq1RqVDryiM4zZ",
  "key4": "qs7gYmre8bMtXvqx6QKaDVPm7syKLTf388qfWBjWj3URjD4pGRQDdDLCwN9sZ4fRn4tkTdsz3UpbpU9fvzBkTMT",
  "key5": "4P8zrHnQFBb3yHsPyiDkBvqiW5HCTyTWuLV2TH6nb445Jxbm4M6fcTqhsPhvPyyX29MF7sMfCNNLqGns4vMjR8qR",
  "key6": "5MzU2Dr9Xrske6zTjoaknxADDPMeLr7coGqcpESFodqiq37hD5BrRUknVmBrf5PaEzE1yHajGufpab9sANd8BF7W",
  "key7": "5MtfXEssaMACQwWhaaDwKRrZox7oZDDvTjmphi4nwhcVV1RhAiKQ7pyV3nvooRcLutVquJ4GpY2hzRGyft6fS577",
  "key8": "3N4pvQRMqECnayvpo2hihvPDCmY2wrCtK67WCTRjzp8cRoYozAycDXeMVqrguwyvytftbYuzEtjXptJeN1NpuSZx",
  "key9": "4UkRLZAvxLYXw7WpsaHsfmhvgZM25RpesQjFgC6Eos3UESZTSMWzPZG2zf5L86FGWaixQ8v2qrcKHNmHtkj3Le92",
  "key10": "2X52esg8uUpwiet3Z8vHfKBwKEKyWt2KeQBrEsfxtTuU8fpPfymv9gDEjdr79nxNXFXExWkQbLhrFoxtkTwpqXnc",
  "key11": "4ckxNtk1Y9Rx5nHkj9U7cPEC9BP4KfkH4AQdtjAV8h6fmrn6A4WHyafnF2xqiJvKzPfkT4N6JXHhwj7FLJVYL2xT",
  "key12": "5paa3KqyBz9Lhe9oXne5JhHR7tAWGm7TqGKKQaX5ofxyaomgVsPtFUzXPdgz5Hb3jJykfKiEe78F25eWB98xcng8",
  "key13": "Ta8rddUrGBtsGN2Zmh2GodtBueddNFjvyBAvVf4n4WcHtJ2iQfzYNdgZeKvuqqt6eLh7hMo2CzRXcG8S6VqorHN",
  "key14": "4n2mRmVtXPRb1YBbRh2oujj7pfiCz2G6uywZkHeNtbyTugahJZtRRgRaUcbDd4aYQd6kBgWRUzKhbTRJPcdWjKv9",
  "key15": "5taFC5jyuShjKvjWKk6dvCgK8fF69grN1WWMA5VnRAHZqFshpRPmGHJTHYvaGgES4bnMiApRxtgKDBSCR42mDEgb",
  "key16": "2xAdLUsyr66SpPcckXV9bXQ2mEPCyCUENCRUsJH5CuL7nESQtXwMdeatEDnajRahfYMNsoPkxZCzjWXGm8egepwU",
  "key17": "2aWk3a4vepLEZEbAgHo6skPVZU5h5PgRxmz9oRMFM1KtoKCF9FCe1NcCCpS3yNwzEU7pNofQnzbk9fUn2uw5ujb5",
  "key18": "5zJUE2Det7ZAwJjXsjsM88grQX5oDfAAdWmszYo8yCV3AkhmXjLW7T4AjPdboK6Ko1rdL4WZWU1xnUna5JQCZRi3",
  "key19": "Hw1V75Hg51ZPrBw247aTQgipML6dt5UNZBjXdDtNrxXxcUKtv8MFhncdoKfqeASuMKK21XxR1hZpGms1NukLjwb",
  "key20": "jiNVovEYR41BmPjWemzTbdz19z8zkL9f6SbE69KLKgsrpeohfGqo8fXutbYvJh2ZJGL82sBCfecA6PtaM89fJfy",
  "key21": "SaJm4HtvUiPT8bQsbVzJqmRncpJospcEHe3cYgaN76NgPKMpWCuQxta9vYvayi9vEpdMnrZLVV5AhGLMkXe1MMg",
  "key22": "6buMUwXFbLsbkPmeNwUjNon8BcgWo3WdnVNYeUG7k6kiWqb7tzhuq5WndqzYXa528UwWnCxo9whcrYkNBvaadmN",
  "key23": "4UhyJaMorTcEe3T1pDvkvr2A12muhGKPks5syPvbeWyNyUrH7YKYgxGYcQ8j6o5yK3ZvovsxBn75SCyUbXkjD4jC",
  "key24": "2RPvtQWqx6ycn737bXmuyEshzqWG6h7GV7TnPQ66QJ1XXsjpCbU1VxLv6vxDsQX26KFxMCUajXNTX1X1AVPxt2qH",
  "key25": "2XAAtssPuFG6Dffx12BpKTc5tW5Q1h3KNUWKFkNCaJXw1JCKsMxMtQLWwLohAnwVSm57MoNDMAY27eY1LJVtKDwZ",
  "key26": "2RYtxpdKR6bUfUDCpCgqSz16Ng2wc7kiEwbSum4cF6TGsCLoEUKibxgzev2MXELwDh5v4gXyuomRNDdfaiy1ZqTe",
  "key27": "5vh4wsEp8XrMazoajMfDboZW4or32vuocAjsgi9tPbZJYCCWBhAx8qrN6kCuS6eGVVJFHySzL6uy32etAU4P9cDZ",
  "key28": "4WQn3zULZCFHFxQBDAtr6H98VBNZCpMm4ooNuP6spcXYLQ7GXuZjy7YpkAQ8fpvrNVGNE59E9QiaBbDKV2ferrWN",
  "key29": "379DFUGQCMQ76NjT1kJjGV4V5S3EXXyqgQweoebNRDq3Hw8QAPnmsTpZb9Xe7pFdEXGn4ftehNrTLLz7B2VAAZPw",
  "key30": "5WYxctzfUfNBd56KB87TPb3FexkNimjbU1sNGUGrL2rZMHiNkx7qQrJyxenokYfM3eQ8SwQyQYkiCMjknAKXi7zZ",
  "key31": "3u3BP8rABXCzHLAknh98ztCCJvp8hsaSUzS81cHSzYG2iYZmq9ZFbsYaaXfhFcb4LZJH26Dm4JPWJgjGxkY8EWZx",
  "key32": "5nPCRv33XwfBSoPtuytiMNmYYMz78iLtDhUuHf2sV21T8LDXGgRMHJfkmXbuVBKouuipuQPWg7jBW68TiDTN4efh",
  "key33": "pP3r4u6RykPNGdUCfGHBAiLPMLEVzNqZcQcBXD3LAxY1mKbYsLApsJMmsaR4Gz22gKZCUwN2xNuxNcdaXkDbE57",
  "key34": "3NZjjs2KPsEuWNC7g4KVpwtoQxV1Kh1MQrvzCHNMEGh99mJ8x2rxzonQKcz1bYjkrmaYF7VVC8CQWBTp6njgLZFV",
  "key35": "2bgWSKQZgH9EbiJCJMZPagr1cvTP8TtMkrjxd83kMmPC9hecRQ8XgDE5yA8e6WyyKq2g1GaUJWrF68udmVUqRWBs",
  "key36": "KHPTaxQdVQ65DKNVtWJEXEgiTGVEFJaMAcz9EiiqRGpmqwvcXHF6FqExttsNFrLrBKwZBdKabdNhnSevt3gPhop",
  "key37": "2qP4vtMDbompRfEZ9ykkgjb3GdQw9TSxUQEx1n7ZLxgPVTNMG6j5Gvy7kdBHUGiEV7RHavBWuLwN3yo3Beob27uc"
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
