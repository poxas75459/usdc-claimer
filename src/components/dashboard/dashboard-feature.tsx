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
    "vRrsmqv1pKKv7NJHZ68RyXcMe5pe9sWFxt6jY8cY3KucCKGPr3Jn1Pj864dC9tD4AHctMdy8mPDEGJnfaivn8aV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MvwU9RNY5ERnnj6eUkbA9krDxhxwSSobDMsBZ9yvaDWZEYNfPV7RTTDU2vGDMAQ7pb46zayrNPfeuwu3szVZyUA",
  "key1": "26tGnazQoDjRTgzHHbVqkoTFjj4MXv2SDcDY8ybtGbXRv1VKD9vPUfYapz37MdbeuaUiGzRKiXgeEvUfbaVEEes8",
  "key2": "3o68HdvS99anrKnJZgvdjZzrbahsd3c6L9jJT1UmzRBQxerxPpXmHfBdHcGyruajkenFRJzjNoc2jn2TTVAfb6He",
  "key3": "4ozS9MmKVqnck7MxrnRSZ8TjCHe75WJz2JTdTEHTtur9Zfk8A9CFpSQ6StXcKD15XxGRUDpkG8PBiwJWKhYR1Rgr",
  "key4": "4A8NgmG9M553oUAi7xFiXxxPZ7zQ6y9nRxoqZ6ceyUhGnUhmoR1hV6CcEQpERy7YyXiHJWbbANTf3E66wmhD2iHf",
  "key5": "5JBgLeTtTx7DSXi78sy4n6cJa7nSazgpTM9sPEyJtbsBeV674QZ2xWVuGHiKvjXiSdnxh8DkatYaJzEcujmR7FXY",
  "key6": "46GyoMsP1HRrJsRHAZm72yteeqtVPMqLg9AZmcu8GvMkG7jSJxEyFYUw8X4UKn257zM2MQfHApnoT3vxiddsFrFc",
  "key7": "2SSVZMrHjhFz4f79hrinxMRr1sNwX2Me2CNk8Fo9fhkLD5asyFMgqkxcaceJVkDEWvaDXJ9Yk9A8PpAdZkfkHL6P",
  "key8": "2oJsnSGaj5YX58okhzBBUWZti4hgyXqkG4SoLPXMDdxdMPWvAz1RTF74Z3x1EiW2pWxjxXtdo8ZUXXbA4h9hpYuX",
  "key9": "3pHZqp2cSUyk8mzWp83oS15pvqk3aPQKcUMQ5AfdqDzJLXqcnyHy1BCWTtBiU3kBFFXGtBbMvHinR45VsDgUKNkw",
  "key10": "24RcFzHsnASb1iTK8ockd2pYcsUVs9kCtYxkbhGDUR7XABbP4vbzjRkmB2RrzDyXeyPf7Xt9yaC5EMtHJm1FQAa3",
  "key11": "roZrt6C8ycYvTVEdwA5yVtaFXw4qT1wccuPNtLFRcqz2hiquFE4tUSazMLYvH2L1uPy4gkpmGsw6xqsuBB28Dob",
  "key12": "4YPUqEoHnLmtS2Yp7TbFaEev9JfD5YDnnNUCbMwqpdxKzQY4zcSZq1HKznBsmQEpBkFEGfBY6MFxrtBAQT5MXvSD",
  "key13": "4DZ8nER36g8Pd8PzUvqx72VrJF7WYzND3QX2BgS8feST27pqboyVjqo8y6xRU86TKkshdRb44EXVgV7pkDeUz52q",
  "key14": "4ntMzycbk1oiMghJctyLrZW8334y1grLYkE8gr29WJRBgEgaw5ZZ6SzDj7bfVXFftJuZnGPLb9MVnd4K1iPzJMQ6",
  "key15": "S4573Tj59omrNv4LWuMTKWgbpypfBhWQ8WwptakBmjzAjyzuevzLVtyZAJroVrsyJMysipdiZKUp9sagpYsPXdh",
  "key16": "UoZpDRMPqQrEJ9pBLHn45Taj7v2TQTyzMeN4iWttWczwiaqLCMhkxdmPArJxwm931uzfLStf4x9ZrviSJHeZCRL",
  "key17": "n9h92etGm2izw2R5CFXbgMFEAGP1kRfsiVFb8NmtLqaQDnKeHH4SdGHQRa88XxKQBUfsUZhoDuVV9HD892yiqaQ",
  "key18": "5vUyisFKysnop6QAvmoRrXk1wDotPJTs6yPeLgViZAQeq7PLjnQqnmJ2kU2xnBTwXwwuf4QTDNbTM8xmermhdGNd",
  "key19": "4FfjPSXM1dgkUygj7DBt1QhroX3Zjfv1oxbSrLvZUZaWDQPJQ6S4brkP3UjFSAmeDaSLjUvS6hgPpMLwK9uKm7uu",
  "key20": "5QFejW2eARJzjHd2gdA9k3dPdyYDqDgnaPB82Rzpe7dsh4JxRKnbRD7uNscVmyKesrBnny7sNzJc62yV4GfaPE1s",
  "key21": "2jYeK8gppDMk3BBW9icxRvMX7GV7zqevUgLXBDS82GTeYMUkephEqjCwmGPPeK7EH5cCQ4i8BFdwostHTVKsxuP9",
  "key22": "4UXysspv6MTnoWhFnvVebP5h2vGnj92UE2HonkuwrqqMyH91RYi4Ac3NYs4YE9o2tdyjTB7DndWVUBQJ8o3ThUS5",
  "key23": "37BSJShX9sjw1G3HeSunm6hoGW9yWt8Hu89sqAePNMmbm9v3xEwcUty5RzC8QsmH5UXJ57WQkvAkDMBpUyXFJ195",
  "key24": "3AJiYKEnydbNKvVoPJv6vhreYRFyuKpmELrgL7SME9LzovaNk7a7fX9GMwfzXJyP8V6efcUEZe5gHsXHp3sQMKKy",
  "key25": "awGpw4dLn4jyxDMcq1xMPMu7Yf2FghPzpjN4VtVksBas6hHkfbr1HKFirqzpGnmxvqXGBYB1uk9GyKLojogfQYV",
  "key26": "4mmLPT7ZPXF5xVZxVBk6YYS7vbvPT7tQUWUVuAsWfMVXdTwcxm1V4euL7oUxHKJUT9MUMNaGEvvQ2cfQQNm5MAev",
  "key27": "5kHNA14R4nPRGwPVsE8Lj5ysM1YdzVts8qZwHdWpSxnqxe63qJggkVBv6XJSaP5M6HKrSiBySzD82bBxSUyXSVSf",
  "key28": "4YdSoynF2xfZHALqBeAasqrxxiMdupiuiAtvEr6z1SgmTf2xCk1hDXS77cBbwsakE2YH6tqxTtwKjhmBprbXhZ5p",
  "key29": "2XyUzTP3QxCdinmQC47HAZrhZuLudwmiJE2nj5vPnsiAQssEHYNy4Pg9BY7ZTFfb8pY4FGLF2G5vxZc8gsdTAF5q",
  "key30": "5Nmgp23LgTJkU5VgP7Y1oDiTANmy1h9DSDAYw31rKwfjAnTos45JvDhoSjN2cAt9YrjZTpWrL3KScfuC1zXe8bQ",
  "key31": "3HzfEjcJQd7NzfoJ8qXwCaLPSB6xXKavRPWQ4gkidPG4f1DY2kdT4xSet7Py4yMAFWbQkmsLGEgNFLZmvkDkT19p",
  "key32": "rBJm2XN2HZseBNt1q6TsWiUqh5jUTGDvAwZZipqBMH6cnxwGFbvYJNKzr1ATZxgfp14DPLgRDnKsihsCTDzARyf",
  "key33": "39xHQKzojSzSEZetUCVNRdeHrX1HXJEHna2Fub9yEt3GauCHtZQ2Ukyqwte66ZsvW5QFo4MvdJtwNX7ZZj6eMjcL",
  "key34": "5S7hbFBWyfZQP3D9qc36rFhAHDCUbQpqdsLaSXHLUJbXfPD2c5esPWA5Lb3he6BveWMvWXYXG2tVYX91rDZ4jRCi",
  "key35": "53En2DBBupkGrQ3QJMDfFLZWywfKcAvv4oLErEASg7zRkG1oDyzZBRuT2zkQnCJR4NeheyFnXpQ9dactvD7hCUeq",
  "key36": "3KPbKPFk5dx3spTG7qA3Mkynn1MuNfHiCpFcYKHziDRs1HNfUDpQRQ73PjjWe65HV3xgidYTK7VDCVawakndWsH1",
  "key37": "rLVPzTPb1rySmcLc8kjxEVu8akbcrZ2htiVoPFmQuuXpjwbtnqBJDVG8SBJHHE4D5oReN7nJFiYSaA82YwGSLYD",
  "key38": "3enByapMJDfF1NN6f2YAicWGLC1KPq6csf9EepwTARDL2ssGNNBbLkudyRFWGT7xRWneot4gBg5bX7AgMiQYmmHt",
  "key39": "3s7FPHXcqBXnpexW85NJYxJrHQdkLrtmN9szenqraBC4AK5LBXqMmffKmnehqh3NthdAz8sW9qyAQaSTyZfLaLdW"
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
