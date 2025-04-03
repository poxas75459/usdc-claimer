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
    "yPkqZi5NCWkbH1tGiXfNnHXgXanuo5TDWmJBLYmCbcF4CszvFUZZpY19GZMqDhRatTVdXZY79rKMdbxkUcXfyaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LRQJJgojBYny9rbwnNDyLNL4VCM7fAZsWJ817QPoVfj118p34uHW4cMzJKJRscCdCe5kpSzGwT7JGVHsgXEJpT2",
  "key1": "4etReUbzX3hS5wSs954YoHp3J5ogwEfXaK4BrT6tvuJgeizgQxwGMYJTMRRghDkAMAx3XKZ8kVGPvWC7oSsZgrSF",
  "key2": "4WPbasrd7q4BVqxywPVQWB4L6iKJpp1ePUogn6yCMGrSCcaTJ83DtFjU24vEqd47RyS7NifHQEeRjUHnfTSPMM3n",
  "key3": "5ZbpUadZWitJdJ8gwyRRxNMQ16HNcvBbxNxEgYEaayGywyUTThVDF1VxmmUq64SDFxNPaad2oEAKKuYVW6HpuCK7",
  "key4": "3Pdcy2mn4W8ermpoAvHaecNZ67rmKayAypwGueHTFyaDn8pipB7PWnFCV3ykteQ8xMiC6bdRuNYgeEaQHrKdBTVM",
  "key5": "5aLybtzgzDsVdsHGEoSNvk63QiCAU7n2QWrgEKozWnop71ePcxWuWcEDpayn5yY7jEsvwDXxF8RqsYTWyxDGieJt",
  "key6": "3qq3WyAmZsW2jdDzbo8EehRN4fAeYYM4CfR9isE2qokXWF62GgndKYN6YTgxWqmuL8PLGGN6mi1yxrWqfbJPH1AG",
  "key7": "4tUq86KGMmuMwYz6GvpEBmQgLbhiMBiQfbNaXVAin8uRufKA6MzRKZQna2rc5JaFbYTPdxR3PbWCFzcq8ySnw5gh",
  "key8": "4DEURswHjPLQaYPnQnD8CDg22y93aoJtWjoEdJxRTmmoCN2fRScQR9NqHGVMVqgPKDqEySfLPoUvMR3TpWo77Cm6",
  "key9": "NWjpbyCybU6FtqxfG4whFYZrKb6Rt9HqGG5Wz3i6DynAMdVXM5MyP3iQULYGDD1YE6oRtkDaEhUDpMP2tqzEVec",
  "key10": "65KeB6LfXZLcFZUNuuNVc1dwnKPUuuznvkViscUN2Y8tymjXUHSXVEq5jZmYevwBbAp6RGwxQgainWH6JXTnFJ1x",
  "key11": "2XzEPBbF3L5NzTpZQASBkLG9f3dBxAAHVN54XW3FXk9uwR4ob8HDfvNoSmrF89KZ4udExdqThDSinZFDZyqJN2MA",
  "key12": "5BXX3sgDckFDcxbbP9upnxyUWsXasLa1kfFUuvBGuC1WstYFpbfoUdo71STdLFcy8jQiT9r4jfZMSzATFyr64cnj",
  "key13": "5LzA9ohEWDoPFJFiBBWSmF1SGWFJ3Kz61BjyMgGWUm1Nv3jtxQv2o7nvRMzn1o7jHfuaHg26NS5aGwVkXV1syVwX",
  "key14": "MDdMJsXBYcj4X54DYsmvtEWFibA5uBZCSEiCSaBhqyCZpThByxQtX7ksPPk39psgitH9yABnb47mFhbMbPQw9er",
  "key15": "3PdVPot2SWYEQjE64pzfwoUFxnycGC9NAVGetx88K74ciPDX5XyoE3LkrbQqw8f4uWSyjnz4qYmeL8wtbc6SSHLW",
  "key16": "4yAe1KHXKnHtqQ4AnJMisLLbphpa13y31EDYcFwfox6R6N1TKpC6FYbXLeYfgYphGrW8YsXqLoaU7ga9dvbUBAUY",
  "key17": "4WtBz1SgdCnN6eFwLhfHnrb7LnN1uPx6BQcKAnjAqwP5g7upDVJLU8eMDrLzubBz43zbUtgXqMDU8BFNom5UxHuF",
  "key18": "4TKT2g6wVayk8kfvYEtgUmcX8xMqFKGXVemgq731rHAAvCFdwVQrZMVCTk881m5VsZsaBA5JAQE9zXDKTP3mnEug",
  "key19": "4vsMsFPxKWCvHXZE9aqwvo3QdwBt1gTKYnzUwDMZMJDQckzdRom3DZh2GLY9fdXAkBJrCcJhgBpBpthFN4xSTTQn",
  "key20": "41mR55qH3sYP3c8xJ8Sq8VeTSvdDLgiPoJDjQZSRyDA5HBkdqpeanrhKK5Pg7x53YpHscP2zKxfkESEk1gqgDQAN",
  "key21": "DzFJ2gKGxKms7majUkgqw5jFqFSFAR1JK6kAzVTMfeM39S4c8kgyNrmDJMA4JQ7pmtM76K9Kby9dMxNkjqH8j1j",
  "key22": "2NSuJMdcXUt41iViAb5Rcxh4tBAotgjG7snLZ7aZ6pEMW72GtLyr9GELys8GFvd3V98VQEFYiW9UJEnYFaxc8NkD",
  "key23": "phuPPMpjxgBvfXU5LCjc6g9KqAmADFp4fLFujVtiSgxmsLSXMAexd8Gp8MiZUjCk7iBJJqjuPq7b7BtyfzwdJUe",
  "key24": "4qdvAZBN8odaZ819cKU6ce75StA6aGjz8aamxh97gUrXeTzkqf3nuhwGdxCiGkp4J9DAjfWQF59uUoXt4JywRLDH",
  "key25": "m7Zc1nwp7G3o1aPKd35UWcK2rS1zy4BAD2bdAFAAHMDKXb82JsKGe3LzUKTP6jJoUWe3vtuEc2jyP7ufcZ4ztdD",
  "key26": "3k1gT1fViAiA1gNWZRxDhLdxND3WCKiqNXdfJsrSYyADn6mjRWte9FSa3nNA5tqcLN9PLNLAup3BDukHXq3usfvq",
  "key27": "3ngiKnpbJ5uRRpGCcaVJPkrxBW5fUWhaDgbWU3h97eVHfwE2GtTgpDiKFHExS6URivPU7UKd7wX1aGBUPojmqxHT",
  "key28": "WrCBzrsfrgg5TPSZYyRHdZjUHr58E1DCWnXszXRiVgn1BgFAAuExE5WL6EvfiYLMEvHgeC2dFk8Ki9hNYqz2TrY",
  "key29": "4k8CMx4Bn5wrExYT3d5nGKXV6PhnqEomN7iGCQtoKxTkD9huMFc9aVGwnZ42KYV8rwcGRJe69Rhu86wyLV8trYY2",
  "key30": "5oz9FuSsdzTp18Nj2PG8rUvp8b2QGQ47iejuxkU8GkBp1Fs1nDqndDjJ2w39qZYPXSwxMMMCTUcreEj4TJA4ovav",
  "key31": "4dLpVEDyLHtkgFq7j9c7eZPBdbcqVKRfTNNrVuqyRqGA2nFtLiPCUHHNqLpRDTBHpnzhgJ27YnkSBzGEytHQ92c4",
  "key32": "3iCYr1sVePDaVPsPBBf8tXJnX4tAGii6nj3TrbeTAqJwiR61W4X589Vu43zPK4iLAyUhcL5sgQ86vW9f8KQAkdVF",
  "key33": "pTHT4pWWoC1Z1B11XJPcYJPDmuFRr3mgtbZwQqnWPxnQumm88vcQzXqJF3EyETLFtbrxPe9sgQvpfTJuYo1VLmq",
  "key34": "2DsB4tEBTxHv3PhMYGrboJbKn7XtWL4UU2hej9jiQ1HRdkmZaoyWfCdsb8WMtUpaKepz3sk1CaNFQw4gRs7zyPLu",
  "key35": "62tPxRXyR1KG21C1yvsRRPRRb8fWkRYZARSXK5ZvnXKfuuxdNjj6NibGKDX2FJ5nJD9WVD2iZ2F5y6pmRyyw6xUQ",
  "key36": "3mqdgEB7a9inHJvFUWEATZAzf5JAoge93NFZ4yQNPW7fdnPYjr9S7iAP9xCwsNgWanrJcwGu9j7P3X8MAawLe4Uh",
  "key37": "tTXZASi6TF3b9rK7aeshnvJHfNd1fJEZwrdWQttVyLdaCKLTcMkEJgsxtwhC68hJLaayKeKTNYegstxQ7HeFX3v",
  "key38": "3iSqPe7zteFVbaDpMzHSaV5BPxeHUATrbYFjZEWsvbKpfnjZXYAJAtJmVthLcqJtXmPpP5a8KWvZ4ibQskAv6UiG",
  "key39": "MtVPaRcChYrE6BDFofuE6ozxQ4jn7zgS5sXUXaLxQYFoXRRQSHTqbZvFwCcu8wXNBGcragoEW6ze14TE1noLdt5",
  "key40": "4NemYQbJr5ZAAZ3q261DHyZjeY5tTzja4gwKKcdZGFFRxxV8W2k3JdB8h9zqoXEzL7urKDVVc8WVr6uGnhhH1p5n",
  "key41": "4KEyDwe4b72uERCCVLykEozeafw5Z1BoFeREWT4AvjnGx7Z3yA7MX95qfvPQDUqqnGinKrQCXwirowCzFDG5VF4s",
  "key42": "5xdf2FYtRobG4zYUcPUyHFejB9x2JbgbAFPcKRXQtEsN8ajLA3A5ENwk4BXpL993ULeZCU2HK7ZGKWAhjSycHDGz",
  "key43": "34z3x4R1erbKnM8foAxeuiuhAxQ7msShT91CtUuGaUbRhunUpiVKqDoiR7LMDJ2YrHyBAqvfMFy7r8UxAGqug8DL"
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
