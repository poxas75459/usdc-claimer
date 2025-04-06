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
    "5Juc7niEdQ5SMwaJRkh1HGuZN6Gd8RNnMnEy4Mkx4AGspXmPUAcdV6LQ5Bj9gDoz9uwqSLSDTmnt7zmtHdo57ckX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zVkPDTPWpi84NS9v91Ns55K82p5RYnDZrQGUkoFB8Tgu8GkRrhb23VvM8J9zVT4iAMN3Uirmgz8AMLzsmhMQazG",
  "key1": "5dzXa3eg8oNcobspxF8kdU7HJM7p26aZ2aK2eYbpswo8oyv4ay5HZC1kWpJ1oEj5dhCMnpv3FTeXwkba4Jk6VXeh",
  "key2": "4byJ4TWZfXWZMNJLbpebt5syrXvvHjSLT26PYfimGH1KcTFeyCExFAboctVYMGszupCHMg9C5LPyuedYZFj2J2yu",
  "key3": "2qNLnoiypPE92H3QJBVbRV9Kr15qss5P4QpDC44k3uCrPvjxzw3Mc2LZYZjJBCVZcMmjvUVx8HFoQysW8oBmDYvG",
  "key4": "4hefmrgohX8ZoCdtoboukyv85uUUFpewMHJQHBFXpsT7Vo9ZYUXZWQwsz5KbYZEbovGfrFaxu9qJ3hBCL4oP41pU",
  "key5": "5Gt9eGWmivzuHavanUj4wbFX3fykdmaPAG9XGt3BMB18fT7CZ72VgqU8hAEQNXn7Ctssv2KkdHZPUt7pfbKZYijL",
  "key6": "23SEpb4o2GHKvnTycyse5Bkvrd4Tpc213oxrMUrzfwJHQopdvmMzgqVEjKmzSjyPvZnnGSZ6UaJuRNsfXfuafmoj",
  "key7": "5HC4Bz8ZU1wmwDyzBZ9EceSDsHC9BAeeJNYfzDkUSREDTtNDRqGT8iNcSEn6fKaZ36MBFQnAkktuN8PvQgt4Cm2i",
  "key8": "QWVGGGbBGdrgxN7MgWTX72yRFBqT63NF8CRCRQnFgn4SVDprTrE8qrn3SKNLpjGuKFbWV9Ws8hrJVrHXBM8E6T6",
  "key9": "4evfcfmtYprKr7v4DDMaB9HqQUauVFFSaHVU3fwo9cP6dCrCEQprfN9PE2hjmBsFc8RpmfmBN7QFquJ35pmg1XxE",
  "key10": "4xinSxDM1R4gaJSf2e9bKZzYZSxZmPk7zjGRZzSKNVSENxtbLpn5URGsYbVGrwVcSt4Qz8Wq7Zu7xsfdjrviDmnq",
  "key11": "3UXtUty3j9Wtqn59J2MaZ2QWRVJY2S9V43T8KJ15WNEHZXHWYpUdru8QxUT642f1EzA1MygebzWVQB15jgQd8ukh",
  "key12": "377S9TEuysAN535vvdoqeSRBjWhy7jzCUv9g47y8Sf1dNnDLEUuJwNc6cJEgk7WjeEZ38bz19pWZtXbu7qcUSevR",
  "key13": "3nHRwTzzJokZAHHiv33kFUMPjwRMvZW1WLAFiHMwxy2867mXKfuxNZmeTQe8VSegSWRbb9ph4BrZmGjLX2wydWwc",
  "key14": "2LKp1WiTzxcDvt1px6qeCCJp4m9zNsiCwpdz75m4bNRTgDhTm8WAhac5G783YnakVNpWDCWPiFUYemEc16htwV2J",
  "key15": "41AVAqXUxGgqviBYK8zegm2NGUb67JssNZFQCYo3i4zeJGSDqSU5VFaJRV9z23g6Hgn2SGTRbxodNvAAdVtzc2hW",
  "key16": "4Ms2b2bJ8kJEKDaeV4ZpU6PBLsgfndf55KucUx7vUWNHesmCXzBM2kbAneocsHSLbDUSWAPQsN1E2RynxnqfbFgr",
  "key17": "5BgLb8pE7WcBjsBDagMkREz6pBPQCVS43P5Yh1Zo4GuHi9wmWV8qSHCtAyBivKTBsQgvdpumED3Zu2djXnvKKicw",
  "key18": "4zEvwn3BRKeCoDywsZeh6B4BNP9rNH7ppw26qQ8jrJ7vEeXajqcgyDRhCKoiBCY1rNkKNqSn23mykvKajMtJ5rxW",
  "key19": "2W5RJ5mUap5eyt37RUq9uqK924Aptg7Q6vfqszKQ41PMDLgkPM2v1g45FmiUrkPMQPDXxL27rvaCpWeU2JTH5YKV",
  "key20": "4Ch9kZPS9PmxtKihb9jFddzRU1taj6ig7R5Zre9ALcde7wnVzB8UybUa2RPzP6Sn5ExK4DjeyygSpH6BBwuo5Mc4",
  "key21": "5ZV6TwmNC3mbVRUMu4ikDuQZRsYSLZjABFqSKXrAX3DYGPmzArNiVJh9oc8NXynsCeWVB6XAooScWtiMKnoufFQF",
  "key22": "ZfuDp8Jiyfe9gYt4xGQssunUjUu3iph69p2T8NQmiQEP6YwwHXB7Kvh1RdGcfYbVw38inqKgVn5MvGVCuf8dBpA",
  "key23": "3nkciyFr48B5sPB7cHSxZ3NqzKuUy544YUtCTPr21EeZGhCJ68Y5paDc8YcqnNGHcjD9ndojLQputTzQe7cZZxqi",
  "key24": "3jTRi1H3vQPyLqcU7cxL7g8hWKV1ykQjznEG48FHo7wftfhCwpqKbT6fWPeyDuhVtvNU7N4zGDDtUoCrQHfVwnHQ",
  "key25": "3zWGK4dfbbyHiK8Z61nJuzGhgbS4VE446yrRQTc5PbR86tkZgXuexGzKBkFE7BRx5iMJZrYP4rvReBxs3qtWnsar",
  "key26": "2JLRYV5eHCtmLVZMGmkmss48Yn9yBJpWrchMZfL7gd7zrYy546LhqUBKUuXZ7bMRrjVApkcmoZTFFb9aJpHtfXE6",
  "key27": "5PQdYxMRSGPjinWLSbwo7BScgnn2w6R56tbondAa8BD2EP34VSPCvnzsLywagN9fe778oAqAAzf9weXQnfF6fLP3",
  "key28": "27Y4oFiDsmVXetwEyD5LKmLjr4AB7HhR2pcihGvuVe6YynUzPBvDCQaHbJYTSA6vsT5ShqUjKnnSFVJi3tA8nwXK",
  "key29": "5NUapDfa8bXGQnDkztFAPJvMkm8fT7ALqySEq77e3qy156j78YfKjgr8cqYLZaxrGxyUniw24mv4YmppGEWSG4wC",
  "key30": "hvR73p5hWk3fHdwkeRkkqj9EVyXt9BAPffk7nLgyfhhPsgARadD6kDoZdUvvPW2N8mzibp7RQFKtMpmMwwxNQ75",
  "key31": "7XKMvPaLomCKjPDQHm54WCHNtJq6RfUbGgbhcU71dqFuob8Zof7U8zomyozVwN8gMV1aoahpVUHxQGEE61gWUvJ"
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
