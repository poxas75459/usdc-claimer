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
    "J15Uhp6vmbcqGrjvvxtjDBnoNyWNh2ytP2tD9qv2Y8KrJGpsb9nzUj65SxXcezpnwKtiRdY8DTB15PkBxpVHegA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58vw1X6ZwFyWyv8kvmKUCoYx9XhSXusve9AV2iAYeEjyvQYU48pNvoEcHRXXCb4fxf6kkgyMKfsNF7gSrCw2Nr7v",
  "key1": "vuEmGCqNLCpMPa1tWo1Kr8WARvCfcK3Y553yHaEixQRSnyqRygGVsNidFZndxjrfhWZPB1s6akFzkLdJ5Mc1e9f",
  "key2": "zMQph6UKTGW1fboAfP2J26jvzg5Bm5sjAEr5dzbDrPv33w8YLuiUQHGZ6eJZcWpDArgtntZUfc7Je8MsB6ykANf",
  "key3": "2PCUC4Djjzx2Ey7hkkBUJeMt14iQdA4z6AKoj3JNtZkg41SdCjWS5KMe4MNWPaV8NEm6y7SVR1AmcKjAy6FUQoD1",
  "key4": "2qLWvD4tGVtohuBLXPb8zqPwizLXE4aTtEsG6kduSZzgv92xs3L1vvADCcJKquHFbAUyZgt1iubgjKkJX2V99RsG",
  "key5": "2ZGQkW6AnM7XPSo7UabVfADbBgqgVqTC93Dw5PWLkWxqpUQVDNYudAzXFS3mwF2aaSwVkZqoMKuUt5QYtDLKXxPN",
  "key6": "mcbX12GeMzCGrPJSiv5g7jqQ8vfv7pgy9hH5K9a5mnEK7EnTTvFuU2EuP6EDjnf9PdJYSCn5Fq7MitvdLp6bjem",
  "key7": "4CjqcLxH9F2twkQdZGRdBWNS3pYqFc5MGkMqTodauo5NqsusXqXWYjtYSfqXh5mxfWZt1SiHNZGYfwZka9KxtPxC",
  "key8": "2juW18ZUf9ineExBgSHvJJ2u6MuJmXZc1fXZVW7KdTocznSkfGXuY9M5zTSZ4Br6dGgNFPMHRi5B2Uy3LeF5Weoh",
  "key9": "oSns2jLokPDz5w2Kap3Vd7S5PsAqbC3f2yYvLioe7rpTYZ4HsoGYdHt2PLp84FvKRFtHSdP1dYL5UghMQEZRBTW",
  "key10": "4TgWczcNzmNZM6UF1Pf25xLJdQoTbgeYUQRB9dzwmtC5x7zBFH36BznZ2CxwPrVXyPdxeTFV5Q4Y38F5yvUSeP46",
  "key11": "3twc41qnchjCXcAUNxLArP5xJChpBoqheQJjFk8HJAREZ1CfhrfKJTjoDDZr6pjmXogEbrg68fwj7DvjroRajoNR",
  "key12": "QV58ZpDGgbECzc3s1zMRJsyYufyddnLBFpViygGT9ycQzfcbdz865j5sCfkUPc3W4PmQDcM51hLuJYy78jrAsSa",
  "key13": "36gUtT5pszAXratcZ5PAmcDWJg1dAjcXDGj9behPhmRkuoRkpWRaEpu8dWhj1Sb6Qm2QcaeAvqZpMCWrRAmKCo3o",
  "key14": "3eRrEHXbjbaFQzL916YdbR6uhPZEfEhV2xJXHT6xoka3SL73BT8Xp3rCBXtmvdVYWFgM6yThkEyaVGPb2mgrnYPC",
  "key15": "2pndWxcZmd6R3AfQf7VbVGzvNWAgzD5kEQjCYNGJrCoinw84VanwBVB9mfDVTPjDXMNV2eWpdMQ6wHieErsGp6dk",
  "key16": "WLW7NdiJBK1jUGd7tS3Gim9sqcZzh68cgUqHTripEJzYZBYMNSPi5sHaaWrFCoXWqYgyrwTLPLQ9Tp7XjwkYKLb",
  "key17": "33SVKDZb98HnV4jbVQRE7GBgQdbX66XdwVuXXnWBCX6VqseZ4KzUC81YzFD35HQDjKFLsMqRANNqA8GGyXTqBN8p",
  "key18": "QjmKi6gvFpYJ8KU1sDSJd5gHyCG1STsKy7ozvjQ1qGLytgJtxgvAQrysM4PZfxKWx84kyNcc7ASD9rBAd7KJiTB",
  "key19": "snq14syeK8EHBvsuASwE1DfB5so94wsE6LqtnKr9pva1oWTEi2ETfTVqqY8m3PkPN3BaV7RYqck7pyczrUVWwS8",
  "key20": "4cV9A5hmgosM7gFS8eSsv4zaM8dRda7vgbe3nJGZ4H7TxBKWtUBXzcdQwH28gR9xMqGfzjdMbjHdocLYgVgNWaDw",
  "key21": "65HLz98H9ZsGaWJxoVEdQr1zr31zuVa2AxVEna2jEBtPqPrrqu74E2pNc32iLrFvsScLXqbBjFT6b1RkGidgSctg",
  "key22": "5UnRN2LMbCZzfgKw6WVmVXjg4vHFXM6hLFbnb71uydfuhCsoSKbRhHQ6PAPYcQ6eYvuxee1EbJKA3XakuvAuZQVq",
  "key23": "3Tddw1x6jjQrf6ype8hJFs4s8bcyPvM4zzRVyvq1NU9UVNPVsCXAcZHcratnTrdyEEQX8gbXPtYEg9X16qqGUJaY",
  "key24": "4gQsyZhtEvgHC37zBapoZvL9y4qPDPsXL1CExPF756mqv5RHuaj5uKU1AZpoxTFHHxCTZnTqHi2ta4vyuyWzBQFa",
  "key25": "3n7SqySbUWqvwX5vNrZrm5zf39CxU9JMtA8h4egwijdsnMuK7jMQXb2m4YS8NvKcstS4v3DKEL7fNd3p4tE1Bc7x",
  "key26": "5MVYjW1cZnPXsDWijL5HGYor6GigfAX9gZj2wcA6GgaEptLq3X4woTSW8PzL1HTKadgexc8N96kyZMEfX6ifR54w",
  "key27": "2id9CoikMqkSyJetxC3oNe61XXi6vbWHB8jBKHf8UJ6ZJ6FkSw595rYi4XkjfpexcFN62XBUicgberm41XUxpcJr",
  "key28": "5HnhSR2b6ZZgiEu113sot5aY16uEZ76hnp9mNEBbSsgTj3eL4nXniPRq7ggoBtiFf6nAYJH6gZpQAwSXWKdVQC3n",
  "key29": "qSJS5QziupjWAkQdnMqFMPtdBZvhdUDhnyX6CP2TQK1H9Cmx1z32ASasqvDdWsMQ1kCRG43dPQAAyEFxJfxdFCL",
  "key30": "56ZbXabrVQbbVaEyG59xbV4nhuTm7JR3dsYSuqSeafGgFYm2TJ6KH4DXSQcsjwhxtW4Hz4v8cCLZyJWm5G42jwv6",
  "key31": "5KxjTBUuUpba4b3CeNaXKXUxPCwLUop2B31vcsAaB9CKuzkZ6pYgmZdmnmzbbzCXtqucsBRGgNczkgdqYwXW9twG",
  "key32": "3wNJJoodcQTezBhXFYSdVhitHmTx3xnqX4BnBiyECm7Ejdrs56MaQPj4nAiH1ExuVEPW71AsdSpJv29WLKAkmvn2",
  "key33": "5pDQaon4zZNwujcU6nawmJykcH4FFvXk21VU9o8kwB8q7oD1DvigFgSkSU1twUjEnt6ZQNFF73keVhtg1JY22qRP",
  "key34": "aQbaze6fEnWMF6qDZwmaymWofz7pLEBmGLeMj5mr3ngvTcDV6bv1QFp3no8jNzaX1R1D7XKJP4uhtquqg8195ct",
  "key35": "4CzS9dtr2XHXpZrJKiDgnvfpT9aP29LaUZ2HFuKxi6BBeZwLhYcLrcUDmGKL7MdG9VY1iiphFSSxqXRUp8rnCdyL",
  "key36": "yDHhwrdkG5LnyhsQegzj4kV1r7vPXNNyNXKN5uMuMfNS8H6Bpb4KpxXJ8wCZ1jBnBZRLiDcy8pQGXDEtn7nwPbZ",
  "key37": "JKxNkSCUwcc7JzkJuvhq5LQMLtun8DFd32okE72dW7TWNwd5pqwGbd6w8AVCEx8Hf4cMWdEzEyd5GPAnWgq9ewY",
  "key38": "2cDouMycR82sHGhNAY8uaqiRd88z2KmyavPNowMPv4KVpp3ywQefVFbii4BD4QGB67x2RZf5kQdxEHvk3TcizRZH",
  "key39": "3qLnebTHW3hcaW9Zgv3N5PHDXTNmhUKBfmMCbvfvWTuC8iwJyJJ4Qt5ZcVF23kgWLVR87VSYiRGvExcYu6oiT5uX",
  "key40": "5NYUYfhd5yVpNbMJuatXZQmQJLfLpyEZqHXdSbMZaSnBRuZEsvLZR3FtcM3B37cQijX7JHhQJ6mnPVMhbS6yPxYU",
  "key41": "57Vgs6rvMGbAeXF56uThCvCVE5nYziW21ZVEWHa8mGvLVRSabnb1GUKid5QcC51gTtz1eNNo9FrkgH8e8tmX7VP6",
  "key42": "628BLCtQNAqToL93y2bXXhF4HjhCVzQ6LNkTnpSfJ7NqEoAG2USvXHkdXGDZ3pETdSZvdTsdscPpr4uagXLAsGjG"
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
