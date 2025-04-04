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
    "3fhreN7MYMHraePztqg9fCcTt6sSB6FxFuBhFw3LwmwEN5PvduNUSm5UwdYaoYmFWtY8EVMqzhEnmiW6Z2TEKrES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m6jQuBBpdb3yCgjxJHhn3yfJEU7bJ2iSkxz5t5eRDw5XePyJLRpwFNnijYXPvEuvaQJ6LmHGjWz5fW2T9ayf592",
  "key1": "4f8pmd6GrP8zEwhHfM5s3PPpKhGoGKQZB8WgBxLwsZgaxMGRzqx8BjfjSpJaEgKZcMRHffPLofPg5f9zojucnfbc",
  "key2": "4tJLEfHWBSCJ1QAr4hx57DN8zDQZvUi5VGaayrdZ6mhDRoLosGZbKySGWC38HNEr2KvxscxF2WcWyvmu8rxBkmAk",
  "key3": "EACqdnCq3BBQFrdhmcNNt2DfsvohAhVoVkCShYJEbcVuEWmuejdNbmSXwRhxfpM1ptnXawX9xksgj3Woj2CMdR5",
  "key4": "3x5qSLXtcYSc7zA15pgujwVxcGcMzK8bod923dR3CMhS5mNNy4P5TbtRZYqnMcQmpGQ5nCHkJmDiu4Lg3r77M3m7",
  "key5": "44oftNxewSnaiCT2uEpmn2g8BkPttM483kFnYbrnE7qBXHsSx741jp3xgzifvqnw9sFdsQ1B9Pi88yB2wiQ2jzmh",
  "key6": "3umdbXDshnPVrLFeKjoi33rb5epqXSP69BSQ8F1wx1fsQ3F6UzNMnpiEHLJQ3yHB1Q2czCKqjuSVB8hWhhpdUbQo",
  "key7": "4WtKej19p3qdAFbqWmnyQH1X8wxM2nmYogrYhBXHfvJSFW9Q9PitEXxVG6eKXWvuu7yhj5Vrq7gA1RSgpKTSVQQc",
  "key8": "3MoUeCPwZakjaS42eZQV9ayfktFUx9ebbUetjHbsAux7AfGbuuTeAMJuBGKiQR2FHA3j3AkiDMeJmUf1URLYqjKU",
  "key9": "baLyRJDNLPJc3tvEE5N7njTekUkm3d7N5p7Vk7Gu6R9YTTPr2KR9WGXNKRb8EDeJD4wzmnHqxAyajEnBCq85ki5",
  "key10": "4ErjJ6bxdpCV6kQ16PcmwvYiygCUo96R4AkBnuyKbzATmkmyHekpvUNekKXtHmRfosxRim67v5XQiGc5yPre336p",
  "key11": "5DhWWKKZ7QkJo9tXVisaazyK3VtSsdbMUiZdVUsc5FhpWWKjAzjdWmj4fSuW8kAp5ifzxdBw5FsKwzbEJuYRJhYw",
  "key12": "4MzBVPFKxi2mPYWd2TYedc52ngvMGSidKYuNMV6YCFFVSu9jTGyeK4HW9HSmBieWBuTeZ7dphu2UsvxdgS4mDZ1c",
  "key13": "3HxNhTRHC1esghNn1mBbyoSDgd1jRFBsin7NNLPgCdDJSx78jqp8nEYavMT2hdp4YsneR64opnuXETiKUe7p4gxh",
  "key14": "5JgSStBCdkK7ARHBmUJpAEjQNaNSpmR2zqmui6y6UiqbvQbZuJzzT7H5dqi7huhF6CJqkC4ykhq8Lz4NvZP5Nmv1",
  "key15": "5hFda9tfo3DpjengadFviW8rpaVGyMmD46MuvBZh3MTLYuuLrDZehiTaubJSmdCf2du1TeRYuNfQRiLTLgbA6sPY",
  "key16": "2ffyLXcpHLW4aQKbRtocmaLwxbwDQZq5N1cWoNhQaPRg1Rjid5YkizpJrJS6VdC288Vh6MDUMGjv1FG7qkuxWs8W",
  "key17": "47f8grVTAxyqwKVWtk7XxvzsRevJ2M5T6GoooSkvYX3VEPgqov1zY36yKf89A63Wdb74F1YfjsRvJr6YE66GMN18",
  "key18": "5isWL1dsRscQsR79tfVAFkZd4nYQXkWnfCqywUNn3TmmYmAgww5gvd2Ch1zYCMR2eJJLmiVjMjV9tU8dvXQ8bRps",
  "key19": "3vAe1h2kn2zcEV6XQKASzfkTBoXd9gnTPefUyq7gixyXx9megHQ29ZYskvW2Mwj2MsTAp26LEyHA5iwXkzN6gQni",
  "key20": "2ZwYgNLiyVxgALhhVPXkpUyd16ZdiZEkMnw4ZBcQvaaEeaJ7q4hj86XYTu6jxHYuToaCVpR6MA6SMtaJawq9bv5k",
  "key21": "53EXynzePMMhReBVNsKk6txuVG8PQrWY3EPMpyFbxhPgj82xgAQpPKhSnkpmN7diwmR4VCpY6q4GQJgcwpvJmFdC",
  "key22": "3xXdfYxUcfEQU6itqzt8N8PRdnvdnHDNrJHiYrRbGM4cPdzc815mR67a3bSU5xExRnX4bb9bpckcbaPzZunV7Uof",
  "key23": "45fqkjBxrGAYQ6cRpCvLbkgBiwsfBQzsyUDHoXvgrWDECmpzGBcqHXN1ppVoifGi1TEMQxGETMK1i1t37Ur1SqRe",
  "key24": "3rJL7YWvPUdNiRX6yQfo55VQ8bB4vngS6CuCkEM3hLTgrDeBvGbKekNpxhqfNT939wzbLRkEXvxRtEZoNAL4x5R",
  "key25": "4sAHVbjKCqSPcF7ZzbL9rjVVxABiwKhX9Kpz7TkvZDp1osw5fShBJj4za6Uuyt3e8gbcePoTyLuFqQuULeQ6h5MB",
  "key26": "3kvLtPS6QHf4XshAbcRqpwQ1Eby7Z3Rqi8Nfj5eKSK6rqjEYACqpcb3R3t1aw5TZoJEQ4B5e3PbtuoFsUs7m7rTm",
  "key27": "2QM8GJLn9jQ5oq1XZGcEy3rSGSSXxeRULPe8i6n9NvXLFrrTQngTMSeKUthkvtHnBwT3Q3rjnyzndCU7vXUd3yqR",
  "key28": "37WUT2UDd6jdWcAtMUvWBhzvXzF1SDZfn3Hwaiw28bHaZS45xgnd1WLXMcHy6fZ3DPvUq5NX9zofV3Rtz79gxpfh",
  "key29": "5W8wg9WHQkTYNoA234PktG9NQqzsvaYMrURnvkiTuW7v4TWrY71g9mAXBx4EX6NBiH9vwwcufve3EAzzGYUc5ybh",
  "key30": "23dYqCN95SzJcngN3JRUCnCXBckN5QygnbZcj8szj53ykbZgcPqDJWGynZGBejVedJ22Se9jnwfXwSZRFG9QL9Ag",
  "key31": "3x6nmuVXzcTDgWajM8qsEokgLYRUkK1QCVtHXMC1eayd4pQeip4VAUZe3HX2fDAFWjw84VYgYR4e4Ck4vfYZqEDJ",
  "key32": "54ezQewpFD2Q2QDTLLrQSV1WM4VdH74Uq7krRFnrD75t1MJy2Xsb7uCKB9bQYjtzVMqhG9YvsYfdbLGyJDCzMrwr",
  "key33": "2C78EmY8MaUmVa5xky5zvLTNK8Q9uzQCPNzc5556NQw8wSRVJ8VitQNsdKjLwFhyFL3KHifjrrV9v2mvrLkPwXsP",
  "key34": "jGsKDPqtnYdzQmvoVnM7LH74uPQFDXBY3ZAxCKY179XZ76DhQRGqAPWYhWZQsCL6EmnXM6CRhpJTQd9CoJmcZHH",
  "key35": "HhrHnk4tPV1bXkB46ZMtsqXaUEcnaSUSVBHb9Qhb36BBcVgBRx7FcWbaMigQpqRhTRxWzM6DQfBvXrKhukQyyJk",
  "key36": "4duoMPELkAKvuhy1N6T54gHURM4JpKbk7eSiF9wCwn8ccPsknSRF9JVAPEkrg8YtrPB4JPNQQhnxAgvkZn3wNxo",
  "key37": "2DojsTCSjf4yob9gki2BiD5fNmXUMteX5bt2ucBizRuV3vGccEaYFhL3wbjKcWzoybycLRqRWVuFmdYzywRqgAX2"
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
