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
    "5mKk7Bvc3bn8y9aexF9naThpiniqdxHigGGeMgUDeabWC2f4rYzvpUHDMBYxjDZXYYwPQ32L6uAaUafsbu9dzekP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41F1JLmjaY3V9u1E5y3iK6sscBoRxvokJAt23gihd9jqYFAApAUh7ZUfMw4F9WVCUErUvxzhksDtEZSjgiPQeHQH",
  "key1": "2UzCpCD42FWuH9HB59YfR5s7Z7pAVxXTM88MSdcTHYidv8kWc8512Zt6r9byd5fhv3Fgy8w8SFcGnY94hSbEdUkZ",
  "key2": "4L9taS2JhbSLmCfY2orpjb9765PT1E8DkudQMdAdZarCh8ueP6GZp841GLcd5NFcyaYxUsTPt7mNM59ERiasNinT",
  "key3": "3DtA89MJkgkRQpDJsgGYKqhz1hjxabA9d2PWC3fLa6LajJWG8FaV9yfeXasAQ4v1p4QGPwQFTbSQ2f1xbVQqVnsv",
  "key4": "3CWmNLZHK7qfMWZCJ2SAk9BYxjyWhXvcUMvd4ok75Vin7dBJrQgB8VQeixgSsYt5uBDqc2gdiQxA66Bniie3j5zN",
  "key5": "4XBxEQKza9NPRLA6FdVWnQbyskN6caZ1tNwjYqGsa1Kkjgv1ANizDnb36qw2YhPkn9RWx2s3EmwAPX1vtgFp7kdk",
  "key6": "392KfcGSLEBArJuoyMjVgYbYiEcmpeeqUjFQiaAmzz8pnC3rhrf42wKja4y3zbc8MZsXyjMUywA1xEbtEW57dddi",
  "key7": "379WPGmqhLLgUKAvQKsgPszpouz6xxTKjq3LAxhx9EQ1XxpaR9Z9NMEibMxoVgnzEnjp9PPvRjbDewAWWAM3BN2g",
  "key8": "W8CDrM9i1xQUQVT9a7wBGg1nZCuUA1awavMkNNLY4dDPCma3jowuhEZyM97o7reqdeKtkC6UPPieZZVt7hzhbku",
  "key9": "2xQFdurZjB8UaF21hpjcLajRgv4d4fwGhJAvhPb8T7BjvzYNxuWcJ85HxepDYTsAnWWAvMC1Ct6Pju6EJfEBYuNF",
  "key10": "37je3JhN43xKUgvjHxTFA79gcySshkMWdZ5T5CBFzYRYmYkN8drxM4XZsfe44gs4ia8LjMjEycZiq8eQsVFahw7j",
  "key11": "5EnmV42Dop2kmz85cHMvuDbGheYp6SpeSVxnrmKL2fc5XfLMum2M2o5juKKm28WZWJDZtybbYdT39P3euLhxjW9s",
  "key12": "2errQaYmWAHUGnWWrxmAtepyVe1mhqUR9thNHMfefJzzZgckG9NvfQUT43wnZXa4nAZqhHqXV4GhGXnKidMbo7YQ",
  "key13": "5vKr5sboLudjRhFtGjRWX3i1gGR9ChvK28SE5AqVNk1XbV7Js7HJQyFcCzSDQbVGeyQHfJreyLzvCWFq6EerH3C3",
  "key14": "5KsAuaRy8Td2Wf6b9gYh9HzxRKKJfEmUKzbjvxUj7bX1ikFMSiNZzuZPoyuasMJpHTXzMqXzPy8EPSrsBAD9vkoM",
  "key15": "44B1tohfhCYyCNwECzectD8AnS1LPa8ya9g4vEv9oZ1KEoKwgcJH7U1ud2ZoQPtSca9jmdzjEM71pF4yCiqbwvfG",
  "key16": "5at3YZqRFZfNKAPQ7tKF2DwifPzzVXntJnqaVGbmV6BEeddShebVeaaMDDe8Ukpdi4ByAC4GgmH15xz5EMwYYwTB",
  "key17": "2HSa6bz6tDGq5B1QWBJHjnuF7WN5MzfhfDrqHnxjtpefvPqerw9JcDpRmRwCetpR6o4BUxG9yRaeyBWHLs2N3Dje",
  "key18": "4cy7KJfdTABYLap2a2ix7hPm6hNx4GaEhmaU9tyArrvjRPYuof6dnXHEgP1HLshcPTio5eNrYaEbgQLLU1vQsy7T",
  "key19": "45bf4QR3CA2cDrPrYKV5d6d9auwFDFTTRXDEowQd5XY4HropX56prVJ4jTLZ36V1Yx6n7ajAThsLofjxpVpw3awo",
  "key20": "2u6ZV17GtTNNG7iNhkgkYh9B7M4U2ENrkX21e9kKN8FcvvJa9W9P7ZKc9HyrVdMv2B2jeXPW87TJNuquAJHVKhCu",
  "key21": "5nAWGr5XfuYc2ss4Mnpmhm8Jme3NHzw8hW5HvWeaUPjKiH33mzupB4RhJpsmtEv5PqS7wa2Vy3y2gHGnxPKmhD1z",
  "key22": "43MRD12jpQUga3sjn2Bkby6BCkoHi5GxUABd1ACuCLjJfsmPupXEWxseWBDVJ7e5AVoZcwYm7mJ8Zy1zeUhkAhdu",
  "key23": "51zKUDbeiNGFqeeEeHTKi1Sw6BDxELn9JtaoGZbLNX8c2yVtyhCJu7WDa6ahxePyYqrMV9XCxmSWi6pocZZyBdW4",
  "key24": "4LxUn3LJTeLNkNfokukrV3Wu7u2fvEmeVarR7DsA2dgBmUk55P1UcqMM4iGW97WEP2CJY6epXLZ6cJ5UMDUmhSjy",
  "key25": "31euB7PPHtx1KwRV5epiuW8qBE14ZRXqSfYcsGyqhPCtkaBpUENiwMw7UzP7FJ4GSzLYMj6N1t3GBYiJcbc3Rmc2",
  "key26": "2bfnBz59vx19xL6jDd41wJsvNJP5jxgpRHuSpuENt76HFoKc8Vr9iFQKdVqmd2AaiiSGXYV24G1mDWsBsW736GDg",
  "key27": "3z9dCQFDWpGBdke1tJ7nEmhvJEXPhs55Z7uhFcn6koSo4pDtExfibjgPq6grjwSj2nGLnxUFCUwKD8c4TxUs7feV",
  "key28": "vULx58RXVDq1RtitHiA4jRztYsGAy5nJyWw3TS5S5ZmHnXcr84NoBc29cjpikjTggPu1EZhYHMsJTTyCRzKjAnt",
  "key29": "4w4KbWCPWX7DZfMRW7K1TFE2wGTg64Ne19TcBKeeqdW7Amn8pLEqdvMU671ejUdUDTBTMKyUSU5tLjJ1X7qLPEuN",
  "key30": "5bVS5aPLVa2ZQapixmRn9j4FMpUrciEpVa9jnsPm11BNWB1hSXRtiX6gyUYEVNbGCubEKe2kXy8KSw6WHonqQdqB",
  "key31": "i5cGRfdFR9kUTDhjYpbbmFQKh5fDb6gqXnE1VojjjSxgTwVz1KT4aGVVJdZ9jLx9pdMAbmAFnLL6d6UWKZVt9Qr",
  "key32": "4GtnGP5g1FeSiESmXiJ9hPVDQswJ9wwqXQS4nMKCD7uFSDG7gD25WpBBLPuAxMYZVcw4L1egz9hUdBb2MFqiaKJx",
  "key33": "2Xw9k3mhbSUUGYnd6Cg3phNJPq5HgQGJvBYdj4jEbmghyvEFZG6gd32NgANh5Z3aGb2EY74rJQ23Zqq3V7U972Mw"
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
