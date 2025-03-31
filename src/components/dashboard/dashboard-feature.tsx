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
    "n6GgJvYpCVx17nDfhgLwnTX5tjYSrQfbzNuSzVW9CYtMGbUaefBRUBeTGWuCTXpDowV2Qq6YVMiuAw3Zwoctv4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mBC4XwvSDyH9BGDEJw18qC1WxMJciZGCw9SSpdNfSywqEuwUvGihKBTNmXWZCM1yW7RB7TPCLAWUZksjmSskZfo",
  "key1": "4q3rpiGzT7nCWzCur6VemRnrGzKjd88u8psz637UVe58RtkytPyk34HH7knjdkAo2CUn7G2Z36NYyVVk9pManMQv",
  "key2": "4Mz6HVVcp7kaN8sFQFkxnGc6mKjQs5vzvJtKRd2pM9FALkGwt3R4u9FtqtZZovZMkfeoaU79sGcccQ4Jpx9czWXP",
  "key3": "3X9JB78rpSMthSeA7TqUdJFwV5MbsYpigzRzjVnLJZHq3a413E9cSoTK3VHyt4EGRCQKB5PS3Vv7BACJ6czMH1t1",
  "key4": "3u7ypucYvkyi8R2ycr5hWq4xMtu75ZhVgKYG1QtrZrKEsaPTd7VLojbY4xi9Ns8L4uBgBTf35EY5L4qyJx2fR2Dc",
  "key5": "GrQSWa6ggfUH9mPW4VZjB8ctXAqJJbbkSAhQ9542EtpNwyJ8FWviJDZdodva2FMXSBuei5n9ESLKv9eomGkrxJT",
  "key6": "3sNrLRdyJra2NqaNXiAE1cyoyqPsHyJco8cyeKfTnCjdnuinpRGizXo1CfJqpmCXic6n7v8smf7quVkcZceTyDaH",
  "key7": "5A75YZXnps4zfgLmRAshapzm4sH95hoW9U8drLbj4UsfAN1ivx2yusGaW3cuc25AfMjsARdpAEhT77NfKAeAerS3",
  "key8": "NSe8zLVv6i4a3fC7QeudE4PNVBp1AYwKfwa3HfCAwfDiTwcj8Nh181QXSxbsJr3rkNgAL2KDf4auVKhke4kDRvN",
  "key9": "35oLvDUFnkLcxg4yhPM5f7wmFaz74GoDNC97hDnBhRagssS5Lx3TcfP9GeBfwee1E25rjpgM5HZAcUrPcpH4kFy6",
  "key10": "5qF2yurAdoFza8ajQDrPvXiYXzkXuqFDr5FH5TLbSYUzAHPduSc4zWePLTczmW5v53iZNCz76NFQcyCDs57W5s29",
  "key11": "AzkSt6PHFwKikKmAtaaNVoykNczwjtiwCMKKTRxYRDwNiriBUcxh7GQxVpw6nXiWR9xaTWfd6mBpY43ULaw2dvv",
  "key12": "mt6vSbubNiwRwvmEek1ZYRssE9xbcFJ7RLD1jTTjRdxVearzJLSs3X38mSw983foVYHGCfGiZ3BPaAqDgGiE8CR",
  "key13": "XRjK7PEQzb5BQMAaZHBf5MYmU2uLR6bNHVgYiGsMQ9WTHPqBWGuTu4BHvtrSsBPP28HjFthDuLfVWy4T4rBCXyt",
  "key14": "25BqnACosH3UCtATrVtieA2HaU8Q4w7wWMRyNATWXdsLRM7LuF29aqZSvgjFtNidiPaF9iiwxT5XYvZqDrU9k9AR",
  "key15": "9RNb5Zto2FVnmUsK7w7WF6KMBw6fuomW8YURBhai9gTLpi2h5qX9BuA8v29caFm7BrzGc1hxEyfGpHe8fu44T5D",
  "key16": "4opWobUDyKx9rW5srK1pE3hwW23DVZ8DVpR7NUzzz6Kga24C5JVPDAkMmQ2kejKL9M6egWEHEjL1hDSmQ7ZGHiut",
  "key17": "4c23ntiwtnEcLcKzZirxdXtUU8jfCMWnBL28Sy8GoBx5dWTYQbuMEoHDnJFbcyrefKXrTsZwgwBYfFmtexBJWtNe",
  "key18": "pTyKX6ojBqAwHfmJgRXtyd63ZXAQn2us4yvfDdt6gZNHypC9q7jNY3gxFDiL2VnezZovAQA7UFjcFk2GfzJcviE",
  "key19": "7b3mcfy9RKEeQDr1aT8RkQR8r7e3BgcTFbTojyKu7grrq27c6ni8mvKx1drJeEYtVDP6yCAwNiGTEMF8k7ooB7A",
  "key20": "3msGDh27HPC2XCsoRU8ibMuHNU9RBywzifWJtjnCbA9C4xdzpHvS9UnWKgsQydps8T5zrqRXsbNxTT4a8Cd2TKVw",
  "key21": "3MKyyNwRTUzQqz28i6a6XWpVJgYnZp5mGfx4bJhbRhwv1289g83viH8SM9As2mTApz9VVa5giHnNx9Xj3zU3JWbb",
  "key22": "2mZYgtaAiDt421Rm81sKziTmsX8yxCBvqRwFKtMr9Q815U1rQXu2TSJY2V2EfWBKHQSpb6YXVPZ5tbVsKRHZ5h5",
  "key23": "5M65j8LoyxNDQogZc8EswFPFXddxBFg6votsyCwe14hgZt9x93agdp7r216X1tK5pt6e5qhoHqth8eauwoucgLTc",
  "key24": "3ZxGQTJ6wdae2VGLjDw3PW7NyewppHxj5sWWzreoPC8UV12hSEKSMNsqAbmtmS3WHdhzsgMG7VHdqwy9miNivcvU",
  "key25": "4wbaT2A25XBojQMgZErkE7CxHexUjzmbKwtChywywomsR1xVk5crtpHZkaFLm4sGwcDm9Dh9jZZFT2UBdNZm1X9e",
  "key26": "A9RN1TKfXUB1Zczzu9i3e8oVGp3CT1YCUhZPzikbKbAhaQ6AbPHtYWMYPQPQVnKPPE2ya2was2qA3B5uZurHbY7",
  "key27": "Du8Q1wBZe5BHbsUh2R8xRreEasNGmnULRG4Fct3FWbDfcUHT4GX6XSLM4jBskVc1AEU8k8NBQVe6XfehaUpRM7c",
  "key28": "2csqGGGhpSpzgAJwb8L2Tno5FAuxWMzucbmx7HLdUv96YTiLdsZCSsGQxpnPJWMZMvk4LC3zHs77dC8fskZmHprD",
  "key29": "5EoC49cjCqTavVUUVavwGuv2SgKL8oay7m1ryvWUbSzmax1fqMwc24qPMEAGfcUcdry6AjPnC9t3r7ewGtqsUKYR",
  "key30": "4vqnDhAsi3grJfZxTzQBdRNCJKAkkWts6UcKUuNAp3A8TxUDEwVBrDUEbLG3kukrQo5AogivbborA4e7ctpGPQp2",
  "key31": "5T5HEztRvSauTPQrJFEHhCqzPVRVsRV1U3WSLtryjpm5AasKSuurkXF5chounAZnHJZF1R4vnxT8sX72Gw6avBPy",
  "key32": "415td8FqpHxeeRnF1wLQBLmtie5yoQTtsBiykZDvHSemRNMziJGfc3HfSVTPnBQ5mQSgG1Ab1oE9PwcVJR7NHmdJ",
  "key33": "46L2KR3FsfDRv11WVCQZWkjMc9qBFZL9WG13pQSHFCLn49AiTnd6r3YCN9Ugg8GvWMhLpPGYy6EaiTxVJS4XVAk1",
  "key34": "2n7NwyxzqRxkfv3Dufr2Af5Zfk9UqANRwxSATDXpzRQmsyXHWknaZer7BjyP21ZoYyXu3WCv2o9azVcewevb4Uwx",
  "key35": "2NtDwFXQyhWv4Lf3ycEirJpNLjn5CioD5kT3MdcW3HrdxaWYAp9ZHD12ZHyViRy5rjuCHW3RLRbbErU6anr5hJYf",
  "key36": "7ANUN2NZ4xmQcchkZXYiBVv1BuAZHRm8EsyuNAaApeG7ka8zVPubC6WDCbJHq2uzTNXQDUbbnnUDXLy3fQbJNkV",
  "key37": "5VW9749XRw6kVuNZGUu6TNJMikDwGzwWTvW6S9qFGTxeHAkDKtXc9rvUnWTq4eX4DxSMCjwKs3oEAJEYXKKC9Uui",
  "key38": "2gMaozx2mbjWrftpMRkHZ6EquTgM2N2kU5XwB27F7LXqbHYMzUbR83LQbCKdNGkEcaFaKbxBgY9fFHM1Akc6FJFh"
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
