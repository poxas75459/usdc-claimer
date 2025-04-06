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
    "R4RhMY5zZsKjRUiCsAKrzoCyiupXNjS82cKAH5W2NU9d6EJ5RjLLCs87f9n6SqyZC1PmNnjmcFG2EZBpkc7X6PD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qEyatdUUctrbXkBd7m3Sj8tzHebywGw6WTcmBfsKDGJvWzRS1Vd2mgcK8DDSwNkdyXc811UTKg7EdTBadSqDhbL",
  "key1": "5NebPbtEMLd4CwBh9pcnAnBwajzvZG9ypmV5zfxKHozynW5bYKAzKXpY9o22ZirDY4sEQNjSqDuDZRVHLMmbmM4E",
  "key2": "51UAtSUgyy3pxUArctheazJnWXmQySDABRm6LfxaK2r8UBwdXE5d8EsakDvWdMonjPH1FdwjzxNb8s7nLZxpVRt1",
  "key3": "2Ec5WqzuMxzsANQsEQhT4n5pzcha66SMBfgS5apvPR72ntB7jWP67EeijkeFfuQggDH9jgjD3Hk5UuHkVtfm2KzU",
  "key4": "62Mw17wj9MoxfHc3ziCM6k9So2g4szHBwJixrJH24pK8dmmbJer97iYz7GeheJjBLZG6tn5XhXu1kTFFMzLGwK7T",
  "key5": "ZGB1yrfCeoeyk8e3ndA5fuYG4TWWLvSMP7zhLCasuLMGZi6zXMAASkwuD8kVhmRqiZKua2DQKeMe55nyarsCFDw",
  "key6": "2hxJiYQgDyW1jRxmqFqS7NUPAQQMbwVMhXkqdPZU6CVSwe8MLMDHPwBhbqoDYd2Hmga2ZpSvqYdNskZifdtoqNUt",
  "key7": "CDvdFTJxREXASKoEhMARHZ3dqqMWuZQkTzns3J9L6j3FNNVhxjMmjtCP8JwrNCGTAaTRv9EtWJErKBPp1MWyX5f",
  "key8": "7M7jkEsjXNdGWkD4XZ7uh2AL8WnkMQhrzWGm9CJJeBgx9UTxMwtHu9fZ7nJzcTEDiPCNyWseVqP1pzRmVpsKBDp",
  "key9": "47vCXeNrCHJznpL1Efpcb1RqzMwD7FmTsizPYUQaprejCNATixWv9AJTvrewVRc6GfzjP8vTsfmsGTNynZffjnkX",
  "key10": "3yQR2DuzhVbNPvssoSM2ovyf4rWGQeTsFWZp6SMYFjwhR7S5joDDwtZ3fzfq1F4EtTW2HYb466Ht4x7T5x819K7V",
  "key11": "4ve3hwNspQLXvggBFPDRAgNUDyeMEKCDbHXcvuTDuUV77pTfPY2Sk2XCaNWEb4KjntDakc1yA2MjPPa1qFxrqNfc",
  "key12": "2yCgBTpe7NgHViakkJdusv1HBZUQriumDpW9w6xXUAJYurQFtWv18q825zFLX5CmaMYfLhRbpVLCXwPJ4rzPignK",
  "key13": "49avpJsHgMEY76sYtwKQRbU12B4L2W7xpaQZA7C2AhrgxovYsQjp2VCAG5j1YgYfxrRvr5ku8ijBcysWhoURMRZp",
  "key14": "2Zg78b62GJxCSMMkbm3AAjg9TwpS59cKHJgXrRaGVDwrL6Ncmjz4v7Z3prQXWvNpiAE24XUDvBn59Ab4MRJo3Ppe",
  "key15": "4Ab2wVdFc29gff9sJDG9FmqAn7ceqx9aMW7jcSiE9YkVY92LeBLGTNrCVwRj6EnzCohYTjKbRuWPz1DMhgmv2Q1G",
  "key16": "4W7vCCQ9NXmkLcoGj7NFRZ76uxhcTb7JSSMEV3yoYq8JEff2cSUxthAQA1zN3X9ZPg9WPF1c44pYWeGJK1YGqUY1",
  "key17": "5NfgnFsxFkzqnNDDdra8fFaBmCRPJGZR3xdozEHGDdYVieiM51DACfmxf3U7yqnb8nVWwYoQrUgJYLFmaF59Xw1V",
  "key18": "4ExJi6eXkKEo1vE6ZCSQHenBCmrx9gV7WRnRhSEby7v9L6Wrrrwvcpn3EeJCvhZrA77M6diRHyD1n3UYdZ27WzYK",
  "key19": "4tqBQp9g8Bj5mi9PETncPj2gdMobCJ6qrs5tNqa3BL6FELohH7arwsRVRPKbrBJenVvhTRjAuHGZCZQZCMd53G35",
  "key20": "4Ac9wicY12Zs34GsR23khmhEhSzCgy7QkZ1NATdLUDLSxDvunc99KwKZ3VYcFjMnwqKQe1rKrzQDW6sdzCiqFN39",
  "key21": "XT8AY1iXDNJV7LvasSprotisv9f5onFhHsdnEV9tEvAQ2svqW6uKCGqHA6g8oUTx9nL8761trLYpahDuBYx1j1p",
  "key22": "5MSfRCkxghh87oRv4Bgmdv6U4Mgn51nJzAfBnAWwy9iCi6kUpPsDe3hBtsXu7WLvY86bns13LtYdA1UrVcuJE24Q",
  "key23": "3Xq9wKyQyR2LeED5zLKUWfJM2y1zSVF7ikm1Xk5EjXni34tT5Rp47Vmntvp6V7YcQUZ9WUjP4yCaeCzdesqmAQzB",
  "key24": "3e9RkQr3TwwaR2eSpVCprNPQcpTXCe3egvym9opDXhrDDrhwWvmrnQFyv8nGPss5vLtLSu7HyxUvmgCsKGu9741Z",
  "key25": "64sjbYhniFxkUZpqGLfhxbChoaqNKLbNbfPKVJ9zVwMZtmBLPGNFTwsBvNc9Yvu4aED779N6vCJ3FLyRFBqSzkkn",
  "key26": "4o1AcqC8okcPhRbMHh5zJWKLGsx1NA5szGUYR4KUyKkRY3DELMAmg7SSxEr2xEvgmz1adTtkwbpiFWeLjC6pbukF",
  "key27": "3NdC8xYmKLjiymMUM64FhQpze2ZpUEUDM85hvnouPe2XZszzKHgdL1akUvAXcWEhT3TByKAcGsuSkkuDdepGQoqN",
  "key28": "4PNzWoLNr2TXgQALk4oDuamKj35nCLQqDqgBswkFp6mudDPDmh2z2HCRhzkvcf2U4Lut9TieZRA4rEyB5HXy7BAy",
  "key29": "3jGL2JHzLs8GfNbE9ddENGaGwEDiV2Pdf79SuhT3VbjC8NTePRfThQkQkbMYi3qt1CPDLxyG2eb4LuqQrrpHchuz",
  "key30": "4kXYj3tuZRY3f2eAgCuQga338mXF4vcLdRy3c4oXxgLkGfcx6ZkuW5tSqqxoRUsmvpgxQiLCeu47SaQZY62exPNA",
  "key31": "8p7VjfQDvzUGLD8D1m2PJJMStU2NhPk6Ce5YgAoqgUe7fVvkvU5nVSBH8LGQ2boU1JSSceyKYk72txUzLWVAibG",
  "key32": "4xN5p45M4B9CzTHGxBBKZ7Uyd6m2CiRiCcFgmfwiveWqNZ1D62eHY9G57KmurYr8d25xXraJGmWM3i68KhEYh5K1",
  "key33": "5U88bH4qx9TJwkf1RMKXqhRbhhQxFVztBYJsDyE5iUHbGcBqJs4nka7Qdy3hK3JiJU5amHauCQkECoYX7tzGSbZ8",
  "key34": "2NEJnqV2BGYjxY56cS8hEZbVuDjcTdrV6hN5y91P2Jz3DBrf4uMnAQdibravRggnY2UVgayGNPpSZXYC56zFdyG",
  "key35": "49EAD3Agd2AWpqQ99W8R6wvs8m66nvDcJwDjArczGM64dM7gYQahmtwNTRtE95WZdRaFT7CSq1p7Z6Co5syEybLu",
  "key36": "2DvRdWYKHk5unmLxu8B25Vv2CKeUyafNdG8JGoBoEanAwmAtp52jUgiMxzzjr41AuknHfzvJQxj7N8ktHQhiyzBc",
  "key37": "5oh5eRwJL6F5FnSUdTqruQxuWN9Kp6V5BsoKVqh4KX9PByiwaonxLHPVK57h6HQq592bBmA3VB29GY3jsx2eVS1R",
  "key38": "5itHWBnmsiSpwrBFvHeEnA8aA4R5S3fRi3REpTeLsManBoUSrafgYYniwvxNvEuLKW1K5kTvwtHjjhrEmp5f6V9c",
  "key39": "fAT3YmCmiyT3dycqt5a1HeksEQP2B5jn3w3hc5JaH3eSkGDfpaJvQGoirLXNfca5BoaULeHma2ohmVFro6o12sW",
  "key40": "2JdL8vMyfmy7JPhLfTnaUGBkNv2vTzMmkPA4VdPaS1qiqSZoS4gcsKZCfQWQNiyh8Dfpw8FKfjqPhSBTNgAdNv34"
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
