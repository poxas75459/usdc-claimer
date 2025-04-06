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
    "QEu6Kv8r43ZSKUpaHFKRSV49YK2MCxQGE8owumjwabeZkSPnDA3PVNsEykACWou29bL3CBDaTgqkxSqREFBVyRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bMFLJ3qW9vHZEWjMVRecQTkpRPzF44Bt6LfbmrWyqhhY2AMXk4DtaejK6hf4E7VtRKHaUkaF5pvMdKeNG7jhpfT",
  "key1": "3XagL2ZgzLZ8A2qzjT6kX1YCFYyXqmRgtYXm9L5myPPUJMZnrQdr3YZmCvndMEUNU7sUcCp2fVtCHcMeQmkMBa7F",
  "key2": "4gviqZhxG4Dyx48CyEoqiurvXG4Hb25wAadxxvH6MUHUouw6LTUhvNwQ1FdneUTWaeNSn43ju9bjchs7z4vncTVG",
  "key3": "i7fxJnmc18yih5uno1ytkGWBu2hkWiFNrFqpHUAt96RoQ9uphL6xv6RAxErmb4sm4tfsaeSt12XB4kh4FXQB33A",
  "key4": "5f1rMQrjoiFMd74S8urahFHhSdiwBtZSXTz7ken1qUa5HXsUb3DhpCQLj3nwLkang1DnHLTFQoUDQEMPcFYapWT2",
  "key5": "44j7KsUvcrZcwLGYcmf6JDt5Npx4faKSj35GD6juq4FWfRcCE2GsiKhMtBnd1EJQR7QWAfoHh4u5SADWVUD8jBtr",
  "key6": "49Qcy8yJqATuygx4pQCsTV9F56HRo1gWSNzMChPhdBqG4CcHthAterZJfeMV7Q6GhSJyJHzmb4v8yEheTRiDDHLX",
  "key7": "2BTCuHi4T8Y3oNeJQT6h3fMtj2LGvYQ4a82C9Kv1BiJAL2YwmB8mxQk9hfFkJwAfCAPqjbzC3oAPjyXurp2Tuyk7",
  "key8": "4Ubv2u6FvBNsm6oSzxdLuRxi4D8LNuNEWFrXCY8DPvqhvURQ1oXyobuCLBtBu4yoR9ZNGFDb8Sxjebn8gNjZBkeK",
  "key9": "63cGNyhDqJ8Wd5tSciQ2EQyBJ5CfSfy57fhfAqRNHpwQT5fiFGWHMx6jY86U6UWZZt4gpmKUZ9foDzCsVLgW9aU2",
  "key10": "5FVzxaet84TFhzzPtVRDRv3sNt4jsApdTHVPtA3wqEn9uUv1ZhU7BmMNgz6UKojAMZDHmAr5wYz3vQNHb1fnoHfY",
  "key11": "VekRt7m539PTXgiACPgFF7rVysHCYM1xmagmgm3ijNNLZdQFVf8dEVD5AvWph1CFC5niqSiteXrjgMEgukwGjL5",
  "key12": "4bwTbDN9agkyNi4YrLgiCrz64koueYpej6kbEzfG5ENsLzHm8UoMnbQBtNMkoBH1zHDYyd68kyM2NtnP94VsSfok",
  "key13": "53C7pf7M8rYuw4hc4wX2TojzAjcs3gVyoiRCaPa4dThZpit7LAnqFHkGx9jVJpCjDzdF8Ukjdue3sGuaQgqVnM2D",
  "key14": "64MaY3BhE61VZ3B3fJd39hhHRukfXEezxi9JMkADzzZXHGjDVcG1s8qBswDZsG4PstEgosUtK5tWvsmTCrWDm1mc",
  "key15": "3vp3kPrNo4r8vHgMhP8TJzCna4LeBHAnHPXWGB3KiUpJwPJ2fTNswpZ3hDhCwumw8a91eyRpMqDr6GMxqekVptz4",
  "key16": "2qwz6hBGerNRQKdcxnmYXsqeDBmEjsc8RVSM67RFe5RXbxz315d132xTyiKstyvKb4RnTU5a4VUbzHs728iGfEQB",
  "key17": "5TQAT11iZC2hLEf2vb3jK3aCkdBtPCRHZFDwzvTieFntC8ffVtV2uetgr37s5QFJQ9yznt2DQ9bfSU9Lcws6TywN",
  "key18": "5BcUH9ynf7rum8ShW47sbihB7dGz7sRHPpAkovbhRWrV8rCRouT8rEoh9p3X2Akm66XvrpTccy6fHWmoRK4m9TQ5",
  "key19": "3GrRsvYS3UVWMm8uYAdT1gCT6fSsj3Fm4FLshRM9uttFn3sEEK83bcWXFoTaAqdmuhteSUpBiCDJBVbG9ogKJmja",
  "key20": "acyqGD7H8khbeuNKK8BPmVutru6oBtMVkAqA3Rd9HFgXtbT3pgtJEVWBMwkpiQptbMHSNCQPHP2NDxLy4eNjsrf",
  "key21": "iMESqbrWVBwqgPKaPN5ScH5FnAoUYEKzPXJDHPHWtAUqtixrdYsHFmn6mMxm28EHL6eYUSYRaqfogDMimm5kbJP",
  "key22": "3bzcmPCLrP7MuWqv357sK1WqnHZCTj4FUZcWdPBNeN1JS6rV4GhSpPHtEDjK7dzLjeAiuz6gCoR81S371uYJkri8",
  "key23": "5jRt7YtHL1PvpzE9Fy6RrEC9uXvczrjfViHyAsp7kP2dQZtmvjAAP3rHiitXcYBuYDPCmnYPn2ngpthG3sgBQKhB",
  "key24": "4LrBaiZkcgo18jCb3z6tzK582wjXp28tw93JDPsZwATGRRhapA4Xy6Pba9bjbU6Cwx8TiDDyrKsTSPEerJpjwzV9",
  "key25": "5Aw5pfiSCs896N4FeScdUnHw4x82bLBPVoduoo77isENKoHNe6M6qEuo4gmXiK9Z63ZzY1m8j3g6CoZEmaBx6Wic",
  "key26": "3tKeyYC63Frep3t2E5EYxbgDVmUjxeoqAHP4FXsx5vDkCRvkYZLwNM91Fg6rPzJRpsZtUeaiyBG6wdyFpduvMoPk",
  "key27": "5ALEddwFxAz8uLZxbpP9iu5bEdrZ2vXJ9G6jBL7PGg5hH3Vih3L1zn6DyYg3uZJDp73doKMYC5zZxaxXnyWrpRri",
  "key28": "1kvCZfLCQAvv6D2cK3gmaDMZCkQeZ9eCp6MNtYqUq969j3HNZRoTT3j1EdJyCNTyAKts7tc1WUxT67mZdGjzjd3",
  "key29": "3mGWoWroga49bz5ju1z2g2ZeeKLBKvhz46yhr9SYXs65FtVtM8U6XDBYQyhfoaM117RehEwiU4WUeF53s7DifTUS",
  "key30": "2XWRbM6nyTbRELjax2siGGkX65XM4G3vV6ZwojxpwdhK2od6fxRFGjFQ9DZn4i19QR9NWnFXsPymAEUABNKFtk7D",
  "key31": "3xtzVx4Dm5qXjbUXpejLVjQqp3zt2YtPzLzYFZkhQDPNakSad6cK3SrvqwbvfjJgLrKdtbiXttChHiLKPiW2Jthf",
  "key32": "3acXuyq1peFegRrSfp4b3ty7JNAqc3F4mKT1QRy67VacbXKXBj8K8arqXKJ3N7dY3XCLrfiRiK97kgmend8maoQG",
  "key33": "3AqQskY9mgT5p4oaryq1xZvkv1Zh2iAnpTYV2hukcnE573HBdcJRgvurLtwqN5TMuZKe9s1p3GyPsaMrDAFpMXpj",
  "key34": "3sz8WvYEPZt1ACPBQXKf7ny7K8J7pF7KbYm4zSqHfr8euGrmqyrV7kkQ55x4pMp2B153qBBacE2K2SYbx6UVbQFy"
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
