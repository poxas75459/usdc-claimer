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
    "4P3cFxD5hKKDJ8aS1LXdG8TYVRfpjBiDrDtwKXmCMgFq8GgFmmFijLdVDDALszVwZHJw6gsvb9JhrMGtYEFt4DF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32dCUzaaDGRGdrLokNKETkvfHLL2XL4SCNd5nJEJps9et5vcVTGVrKBSVyCvqLEcqC32Uo2rxy8yd7DgYkfSGKan",
  "key1": "4yaPCyvNnCyecoYjg58izPeQz9qtrryQw29kiy9Rwisoi3AByrai6YcGFA35M27tnYzHW1mZkGoSGbhagkj5wujP",
  "key2": "2ZpQAQhrVzsjaXTVDQMYbkyEb58TREBPaRvbU19mtenMbUunthhPo3dDBnr3mX1YSqGGVVKYsk7wkiSLpEh8o9Ac",
  "key3": "3sTT6GewjQngFkpCa4GEnWSwsnZDkKe3MzbXkbjZxhvPt5Am8oQA6zEzmmC2jo7DE2vRTfyuh5aQunhwQnESsbCp",
  "key4": "5i39GuXkEgKhKuJdSGTgc7v4isrpsGhukTsnwrtpKMpoNSfQ7eDJtNN9DWGdTNUu8vyN2wJupViUiPoz5zP3rUMJ",
  "key5": "5foohomMPo2KixUK2ZpqRADxR42S5eeUJt2Stg3RgeWRXz7evfvwhtbysW64pdEdEHzExbQsuKn1PahZK2V1CEGE",
  "key6": "49AQDF2qmtjW9NgkKbLeTkpnkCz9J7yibZv4dUQiC5CrBD6YcdP1iUTCYde7FHk9HHw7khEG3Wvjpv6ZS9k2XYWt",
  "key7": "61AhYGDEvhRbkE2KKcc56KqiPy4ctwZpsW6Cs4QD9rDFNArGEnbJidRvYqwSqn4v3NHkCzrpNASdzitfPFepyreG",
  "key8": "3vaeBqdPK3Qqj4X2g1dr6cgYZoKa7Po6jnFkVdks3js5sHQrR8aivgR11U9m3JYgTbS3Qiws8UubNPfuDPwq5S5j",
  "key9": "5PV8tZPTk4w8x3ZaVhLVWZki8AWTXhJhq7cxnnprMMXBoPiuZx2GcdaFeNdcZadUY2bjQvNGheFJZJzUMbJc9DVC",
  "key10": "aXPSm43EBWB5Ao92ob6hz6MacfrAUoWpgNyVCq3fumiCgTmaQKXHRTWCBEWkPziE1hccJmjgrXUuNYD2RMhXNTb",
  "key11": "2tKFuabdfi3UZq5chhkBNgQ3JAWpMtHjsmMY1yFtTaVt8XyYG2JNiu2gz6dZUUhnde1yYpXDGd29teqtdN6MH4Xq",
  "key12": "22xBqsfzS8cFeNpYuZ7WWtrJTaJN5HbNDi3yByFH1YEZwNLtgujCi9yvbURJRxPSZHqyHxd9Lj5WgkAHYAtg9ziv",
  "key13": "2jJnx2qNbZ6YdUSgfZFuvdWr3sX4DagBijp6EqS8D5Zodk4xR7udAjideqre7WQKQSN9P7T8YFxwqc7EDJMS12FF",
  "key14": "62PmkJNdfj7n7qEhYQzxFtNXH1dnTV9YQ6xarH9YwizbV1ms21wtbr6gcUvkKNGvHTxVxtNZdqeUF8rrptWyGYoK",
  "key15": "2QxwZzBH6ZA7NcrDSWVa4ouQZbA79j8X9Rnr2YzmL48yKiETAvnU5ffY2ATrSHAcNMBHRRS2Yb5JYazJGpkUhnCa",
  "key16": "5baKAYnRrgwCp9TT6F8zBeXikHnV9v1wopoJLMFY8htKycS5Qx4k1FbYZfp8tdaHvUjugxbGUu2aesFLUk4oYch9",
  "key17": "5xVst9dZcsrvHwdMS4jceoKoVxtgXmhthpkFVRu2ViUY1FY3pRebistwswUaccy7ac5x8rKgABCxRpv9hYA8Hn9R",
  "key18": "5b3y9Ani1MBV5NnKyoB8g9MKuRHoJwJnmQoBy3e955UerqMq29kSgY5pfSZxNVMqsgPCZA2iZMaN8cjDZJ6BS5oR",
  "key19": "MDyrNLcGmc6owTwvgHzPk6zW1Tm8Y3VVkd6fEdVwpxKJ82kYxgzuSDKEmXgJJZCMQZQbMBGTvGZHVDc9ttZ9bcw",
  "key20": "226ziEsty6vkXKWz3M99zpv3CRWWwdCxsgFDFEfbYEoKTqsc6BKCkbzk7AAdzxhzr6rz3hYituCjM3tjb1MgANRU",
  "key21": "5WGuFQkDGfqEVSHVC8ALLs9hu6ptpfaUB3x2CwbPFJU7bFHYDCCf3ySAK4ZUnTNYiBe6jdqMscsFD4ZF1Sg7CJFV",
  "key22": "5D8moMmyRq8GaRo7pDpeYsNxsF4u2CvbWiPNnNSK7ougBAxkwTvpYeWK45PegpXncvB8UDQ72Hey8H9fJNCiGQao",
  "key23": "2PMPVhBaY3mWpuMTHWxGjWF7mCZVEA7hbbrHJZLyDYN63Qk2PbqNEMCzmpTZg3xJ1sctUoT3mYFRL1XtF2YT4CoR",
  "key24": "wMzPjzDu6Kj2BGkiaeVFhhyxmZMyppgPwyAZfuh8moH9CRbq3MENRuqV8wEEsaK2jReTTcvsNh5V45ey2a8XAjx",
  "key25": "3jfn9iccqTqVNXX19rVAYRLUnLZvQKhw4CL99R1hPyTidAydU1gr9JJR8EtdouzDBdFjiRCEKJSHpZZomYnwWbRk",
  "key26": "5o3QgEdAaEAT57g4EuN7dHQH6LeCe3LMK3NwCZNAsfgvLKHu8MiQtPaiXS7vUxWQyG9gNTGtcVVHQvhWr4ojmotc",
  "key27": "4mUqDukGzJ7HHLjCixpi5nj7vd4yh8yWVXvBe1H4fmjrtNENyGW6e7qcFRYjysi58nuxXjRQPYX15crLV9jw7vuK",
  "key28": "5ETkDuj3nV3XtGC4u1jq1zu2AmxxxqeJqHkAXTKtvWmeqXnunB9XFfFN9xo8D5Crs7jXjpCqC3FtRHX7GTS6T98t",
  "key29": "3ufKcTHqcy2Qd7UWbwnHmCiKCEJpCVw13PQsDP72cbCJrcRV3q3cWK3MpusoJb6Gt878itRNMYDiQNZaS3Ehv8zY",
  "key30": "roe2nMbc2KdYJzwLx62X3THdcPdkKoehSENG7no365Fhy1e91K1cGkXMPnyr6yiDutNGQQqWcQbsTzMrhsfAcHM",
  "key31": "63qaR1AgbA22KuXFagcMzc3xsKqD38FdVMk6a4udrEwKdWTY1KjkiECBXw3rjVsffX1k5PABPxzTHp3m2yVajr5U"
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
