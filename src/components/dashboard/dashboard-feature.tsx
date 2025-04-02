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
    "3v2bMHTGbDsBjW93RUxJtHuP7An6qczXHnBQfkAmchFEeUnDcG8nc5Pi76TcAhWCAw8rxr2youjFWPwD1yVUfySG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gmMTFGSdV9pLZ7ieHjp7RkzuxofteNzBuQeqLKn18ddHf4B3CFaZu9dioiK5Y9Vq8tMADzhCNmb6Vk3QdH58ERp",
  "key1": "481Mqs5YiRwdnh8c3R9g9i1H6rx9CBFnQdnmxLTV4yjcKjoBUkQFpfPUhzrzBzwpWdyWtpxWzHx6DcLrAaCYFvbL",
  "key2": "4VX4mHZrKupCnwzdTwYpe2DRjvxWKFX4JCZ2JsN2EonAWYRWQd7TtiuGpPoAUabAC7GD4R6KuAMC3k4Scts47PmV",
  "key3": "2mBsPU1qv37Yah3kUaBeuTqAEQKUjZHoncMPf5SS2Rs3p88eJSjzEY5yREfTHpG3df1WWvFbFSGbEL79fnvX6AAq",
  "key4": "5cFiS1MAcDP9CyXfRGY3skwubnvCfTRaNAxaVjZnhhvdwDeWnY9G56d8TJ6ze6pgZA1VRUTGA46NSVUPXQJHGGxp",
  "key5": "4gnc3F7sMNtpKWLZYnDJTZcrR5hZ3usbZK339HjYemAdCKXe4xuBeyeLg7uDYFMBDR3xEnofav9tYyqbUeAByQnP",
  "key6": "3KYJfBw3bR362z5qopJkCX56mxjv1wqQPxJ53bnvtBfgzgrWHsPTCA3RmBVXvwuC9VEHnHAceSF74GvvKgdcg3qA",
  "key7": "2ETbjLjBxuFCEuomVvFRhPqFjXuqT5rcFTz95DyoJRFiR6YkWN87nKW7GCu6FjhZUsRkgJWPYMNMHW8ySBswc3UZ",
  "key8": "4Nsps4Ma4sQWwM7Gj8a1PNQw7dEgu86Say9RHSHp24a8KT56L4zvdu1HTBWbr2Jhp4gx9suFJtApKe5HyaPb2ney",
  "key9": "phhnKu4eSzCEKtnk2ZpeYo1qympR4hGf6kxrGRXub19neANh39DBNCbFp2DBFZGv2mtPoMq1JbWpx1kpoEt8aSA",
  "key10": "2vDxnFEH9s334pYf3Pi21atz1pNnZZ1EDxywew8TPa59AqZRfnmtSpdBFxvMca6P16CouvU4p4tJwceQMFCi3h2y",
  "key11": "T2b2NV8NnyoT8kR2YhSz6DyBKLAwTV3jRYX5pBfSi3ggEDsU9xR3K6AUzcCJENAfbem18KZJMjgiPtpYNDPYgei",
  "key12": "dVhjd5YpGRQH7hTNvaDz5nK2vLqyashNnhwtKnwjdQPQ8haJmyvs6vPz2nDJkn9gfNzSMujKt3sye8C1Hhs4hmv",
  "key13": "57zVmcqdcrjxmhy4Q9qAb2aGxjGbSDwYKuqDccuj3EiVezKZ9pFgPmparR27X9Rs3TbTYPJ4VZCBPpwy7HV9V8M9",
  "key14": "29sXEysSb6nMQP9srB9Gu3oY4QZjdUwWPbtWf3agKDLk6LPdkBNq4YTjwKKcFz5gEMrfCAohSBVxQzqz1qjFqdZ4",
  "key15": "2gGmhswri7DhW7uwjVacKXv5aVNUCJnGEM8XxH8UJh2SPLePGx1MxjoBoFxU6YTMdFBMdKshkvDs73ycPBc4D3SY",
  "key16": "4QZR8h1sY4xee38FqrHFW6AiUbggP1TWJxTUxEHmNsXUNG6xyCSKQkpzB3X5nhvTd2fDM28tma2fxKQninYesgU5",
  "key17": "3pyj42CXiQqN5aniGxjFGhxDyWXBuN2UcT87NpfDJvuUu1zjBKt2DSxoe8uzLbntZCwcCGq3bLJ9qkzJTweVmFfw",
  "key18": "5bQ1DTbu1J3QcrV2ZdtQpuwuwMFL1AC7KfpdEmb3ZZnpmPETFc28eLSsPcvSoTqCKQScv6oCS5KFaGrrPFBsEL7u",
  "key19": "2mzRm1LUUx4WkR68VBpDiq48GBw7gPbCnKWimEn9Dk5oxNzkQv6FkLF8GrXTeo24wYv4hXXzRdvbKtGSULmeZkER",
  "key20": "4pcFwtgBDukY6rDBu8dh5SdUHpW96B6SecGromUBqpt5fjJ6RoaZxJ3XGQvdcLBhLNuWr3DEsV7hwyojcYpjmfRn",
  "key21": "5Qe2gbAt4pW4ZZpCEif45YtXUDFz92PPJHcX6sjcRfEhJpMzYqoriE981kVaQrefmNuhqPk5KZYfWEKKLsZqBg8N",
  "key22": "4jhyyXcqUGCDwyVVkVDbHNLb6ZjQGfVNTt7aVbcWWXLZDif8iro8N5WXVcgpFgtd5cHMKFzc7NEVD82KX8xjAM6b",
  "key23": "65R3NQTcjiRFsTRtCEoDQMjuz5CqVQo5xF1EDJ1ayEMznYjKn3A4Sf9DU3K8tqw36ZF7VMkwXdyApJyYrji1Qp9X",
  "key24": "ai2S11Vk7iRgjayrPDwgurkHR5G9uhotvUvqQmrnL7gwrGJCgh7rzxKWz4eerpXvL6syQSeyozNRtWF2tqjUULa",
  "key25": "5iibp1TcLVZX1AWS6qqCCbkHXo2t9T12rmJ8sXyWgoTA9a7mjN75zvkm8ivedyQhbcGFNxtUmBHEqii8mzB8iyY5",
  "key26": "AMYXtMEfJZwFwqa9fhAKUbwjrnGKP1VfD34M8jmQFusPVXLpv2PMN1TuFSEsozpWeg2eU5Qc1pgijyW2Bosv6Nh",
  "key27": "3356f2nrHgu6DiFcArLZKfUauMywCgkb25FNqdpm6YTBkWNUFMd8me2dRwBsb47WuGAzaySo4ELUhUVJYJdsx3sB",
  "key28": "Pkwv1FrSJTFDT1DbjfsAnBTdtk3bNZxoZhBttRf88k2X1YUWwEmPs9mXMjXwMomGPRjV8ThZ238fTGXmBEwDDzm"
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
