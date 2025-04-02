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
    "q6S3xHrcsoVgJ6WrvMJCGyWHo6Zr87fedjs2okJMD3z5Z3wMCUHDzrEdPTpz9PxtdiVX7YFyxAUbQT9YFUT7jdJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BkYKwy9ohuxTGCMKY9rAan15JjSqMq8crgL5JRx2uzJV3oFmBwYAqRU2YojdFbxVVzrc6EgDojcpKgpubEVJmnm",
  "key1": "b392bcp7gw3cWP4aNVikAXWFJPauXtSTd2AsfPPpk4SNndoQNj1psMo5aTKCaWgb4wbSGvoyJC6AvN1DuRipG8k",
  "key2": "3T5EcW23VFP4H6e11E2keQHtyys4i7TuzxGGuxiw3GBYwrs6ypUp7ugLQXWt59devge89YtiLzd4MiJ5V3eZZWL4",
  "key3": "5rCtLdoPscCezGdbBKrgtLKtjM6Bc4XVLmRpJBgAHtnvhh2GRqYfFXUsz8MQFNbC5QrGzAM7xtBTwTjJfaFUhdzr",
  "key4": "Djb68jMMgGQERsALcNQNNbrqrPo1hiCh6D75pYNbVwgdAH95cxmD8m8v2BiauLmy2giRtzwyV7xMvcJa2ME2vAD",
  "key5": "2Y4NzmoMdUTocUxjx9HfKokar4rkfiCSfnvx8UNJ1RMG7KVAQonqNsUFrWhBaVe7joEjSJraZoGGDZbXJYT1pnd3",
  "key6": "4oS4UrF2KwKeELsEPiLPmpMswN3VWkWJ2CREJ1GTiCqWShNmQQPshJPyGAq3Wnt4jMHrM2NPsQMJ187SK239dB9v",
  "key7": "4tQJxqu3kEVHcfkxJpoc5Ljjynv1qyd18d7uhyoo7gdv4d8uxKJRFKAW1YkKmGDMPp77UuTdcZfJBimdCPV1spnA",
  "key8": "4MwhK3Pn2EzLKXZKew3BJJ5WPffTJ6vGZq86xHYx5avsQbK5CvFkDc5pbQbgE2kha1BTDZgkBSKxtKAQwvSCwHZ4",
  "key9": "57gPAyiVBiMMd5yMG9GPTyPUNRrbR4ytHx4XV9PUwUDV5YxSWBe4R8S1xuBmaA8wbVkMWSpqYp85mS3kpat4zpJz",
  "key10": "2d9bRaRWQXi8m6CeYmiBYpoe1Bh1xBE4DLMr3jABDtkr3vFipGfMA25TtMQSah4pRLXzhuBvQJZfsSH5xedfP2oj",
  "key11": "443mdsRYxNfxdDzcwQ54pyL4KxrxFCrhVWMpa8av8ckUTKxb1J8ZVjCJmtzPeGY43zfFvLCAvn2urRA4nYAqLzT1",
  "key12": "5zvd5tJuivwGRGmsLwdNgY7A7Zodf5V67cyZR3kTyrBo5skT6z8mwxTt7XGanWa9xWKh4um9LWkYU6sXiSgaVpf2",
  "key13": "5uZc9q2DF6fWtXW9QTu64yhbAAhPaVfoT2kFvy1aUcGaGGekuQBHWRSTSQ2SmrUSzkBq4ZM5TRqJTcF9Bna6HRiQ",
  "key14": "pYjXuXk6mHfiKeK8YuXiGmMrXCwCUMjv7vppiFoyi2e2n8XsToDN7ZLKRhWfZZcQDJvnSz27eiT3iQhRFx9xZSZ",
  "key15": "3GcWrGA7JXGrone8B68CyrYR9TtjeTH4JcrTChFQjoN9WBY6FxYhGjL1W1VBA2Kps4Ay9eMKU9DJcLwtr7Azj1q",
  "key16": "3VbHkAG29krdYbsfzcXEzszyi5oNiyn1wyy4cDpc1qMkT7n7YGQz9xVw1N68puYPFpKksre5NRSEmNnEsDBTmeuo",
  "key17": "Sg4SGhZsg558muB5mXzarKjJXi735xidTDdsq8s1GtKtdxf9x3J7KDjkf5vb2H3i2YMzjm6iU7r9tadYDtBiBoD",
  "key18": "3SP6GSwigyJL9BmuB6rpJJzoTWfWxLezkHTC9qxRcLuHEmsRpRMFPyS8BVTGGFpe7Sv3BgEcoj9ZQgEYcgPNqbGZ",
  "key19": "3Gre1sk3WX8Jue9kHcSi7o6rDU6tSvanw3ypDnwMVT2aJWF3KQ3q3TfdhrPJu6SaRf5C59Vk8UrgMmnFYPczFFVN",
  "key20": "4RbihBzB3X5SthV9Nxwd7o8vAL25C8577iTVvFRkqCmyXDPVAzobQWJHgJ33aWbAsdc1Cn6fJT8HbJyaD7Z6CTeH",
  "key21": "2GDsfU4qDhou9nNx4pJw6F8i1eVFipbGzsyvyU6dQ9u4uSY7f7YuP111DPxc2nrihHKu3Rq5ZqNojJYU13CHkNUt",
  "key22": "4nfrJgBSyV1i1VsbYtCQNNy7147VXuF9igDFyRvbEoBj1ajVXVm5TSoAmnF3WRhWSqfpyx3Mam76MHFLGZs2RieW",
  "key23": "4j4uCPwZH6SUTTX7hsHVWNh9gWx3ipGXVbayeddSV5xyAhgQJVFuLzuLvQKbTVCsB8Ho91V112LVKmaLgRXByNfX",
  "key24": "4iyipbQYG8dMzGeF12nZ7AgfXAXBHCTFp7U7W7A5eK9DAt3RYDE2GNhHftUidP3MinAxsDX4aRmAd3FNhs1V2DvC",
  "key25": "8Xust4gaPekUEXY9rCcw1bmZNuDjcRjut7fyE2UYMUUe7syFQRmH9wSPTE5yK9NFy1hZQc2QJ92MDa2e163jD9c",
  "key26": "2NsMwv7Qx8ZGohGcFi1gjMV2hVtz54rdKtWDN5BB8irEDx1fiVLYYPtEdD1VQ71jLRqT1nRjPd28LHLUFdzMfAEV",
  "key27": "3mNpsGCdscTuZLJyaGg7SSSaiZjGfkjHTmNdGmqCmCzvhmsqPdJMvPfkdQfdy9tkw9Z4qJh4TRZYW6tyXasgMB72",
  "key28": "28BhEYRT9eQbCQmUVrKX9eKhjmVKjtzhwTdrFJmFC8Urw7KepEec3KsTynu2rBAdmtWC2K3wqA1Wrgu77ineXS7M",
  "key29": "5wJMSnhG4uHwMs69hM8ubA9Xxwh57MgKQfJhYaz2XfWqdfK3A9fE5CYzdqrqhRgcCQ7yCsfVX3KoH8apoCyYjA7b",
  "key30": "36jBRFgP6cWsRRiytNCf27UbE5Khnaj6z4jSjZnY1LqA3AWJ6gE7yWjKmkZq9jbnooxWtkikrqvCDF2ZJqLYVCEe",
  "key31": "5VnXJLin9mDNsW58VEKPrEfHvCCCSLE5bFpqYZpf2yFNihVhucZaZLJjhNS7oVewzVJsWzVWaXvzQNmBGr2iLqir",
  "key32": "cU1rN2VT1r8XXr5Rqsb7aXY9oeMSinxb2X2CwSXycMssnKbw3vpeBozgNdpHCW6LV7KTvjFExzVkRqrG8ZXdu7L",
  "key33": "2nTLTBKXmirchamNDkHx7qzEwJysijTwTm3XZ43YXodboqfbcKuUFbSiyNAWEGzXVQh3YAWQqCjLczbphH54i3Ln",
  "key34": "5MGgm8GAoyvvNRskruHjwCQfxhcW8ykHjKXpWisU6cxjxZDgxYEwuZkPWKMnqcq8KYruDLR7x6SuDiuihwmAftow"
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
