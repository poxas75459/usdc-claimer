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
    "2t9cta9dQkmZJsdvKSjwYcBbLoP4tWuo8PXnrrmx7GReyXQwoMyW8qUGpCQnhYsVpHtjEshysP2bteUd6dTjWWZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52qc7XhjXtciGv7W7Ez1yovRSooTP93ci3hw4FmpCjoMfWj7r9YobggcNgoootUELZCZPyjHJyahSoKrbJBsmD6m",
  "key1": "5KnVvhgqk4FXyf5EdKT7bGmzLLbYaGzKLt3Ltz1AEHwmMdEG5UTqmm3gX928vaAzgzCMXfCUeUV3StgLdg6DX5pi",
  "key2": "2GpHjwT46Uyypjf7KbmykHbEZHGBAuRgs631siUbCUuZgMG6GUM79MkStTtCPkqXGSBLiDZcoPrrjdv9cXoScFk8",
  "key3": "2SFSLSeehgoxSFUoUFBpx4y4tyyf4wt9AHVpfnY5Hn3AzUUKYSCYsDLJE3WJLTXRVqxnGmvaYiEhDB8dftjbR7Fb",
  "key4": "5uyJJ3MA2iZfofiu2ELiMz8dovrya6bTCXYoXFPH8fQCCfAkspMzuLpNRDcv5fTeu76sw2mQejJiczU23s6f8iu1",
  "key5": "3P3rD4HQVNBoa951uto2rHa1sLvDmN7f9qpPAy1HZRFouV8cVKdimYwgbUJhf4z8GrfDvmdQCEoBeXcKj2CWs7q7",
  "key6": "5x3U2paUmatejbBtaPaY5KTJ8JAFhzWYHNV72mUUVa6Ex9LQTgg1Mj24CifLtiDmvxFCFM1ZPg6ceWJhxSND6q2j",
  "key7": "3odqgne1T4FjrmUX297RJRt3w4AzRg58cRiMhjPj9QQKa31otjH9ZPK9Aj14JrRJ3YPs6MqbZPrh3FC4TAXdKTwW",
  "key8": "FhQumJoQTXNdw68NQ79WzQ1DbDKRH1nxEjDCgqz5k4a7MF1PJu23VYTdUQmjEmxSUCFWCtGfiwXNxx91BqJUvRL",
  "key9": "LUHeX4TMYBxEeZLZw1hDvxyfRViiJtAmNnDbyhSuAsg27jzFqDxUQSVWrNQxY4Yjz1xzesUTdvkzQX7NjfNS79n",
  "key10": "2Bv1tR8Jg1hTVsFqTPi3BVqmRNXex8mVMAr48czbirSnRgk3cMLyUMKD1mJKdZNMQADTTZuy2HGGXJFmGBozEZBf",
  "key11": "5F9VwBHC67htf61gf2u77Yiuc36iJHwKSXdbHSMzptthLFhM5S1CQKWTLix7aHdfXQveA8EXMuwsEYLBYKekBeii",
  "key12": "Av9tUp6vCMigfs5f3wxKp1pxweWqE7LEuZaQX5QxnVRfiFBpMrnbNzQYikgLxhrA3FbgUd2usUsaemFFZvgd2nC",
  "key13": "5ZcLkuTwiAU9VnsCWVdnB1Li9DQCL57EJEYnTBLCidA4UUVznpxJ4tfx2TBLpES6XVKbWTfzVm7d92xrPUKxyqkN",
  "key14": "3VzPtZPDuCtYNnrrTS9D2Y3C4SG1QpqpQyJSRN2jWfaAq9zarAd9LBF2umE9XoxRe76x5e8wFkWVbGW2KkU94LJG",
  "key15": "4nwCZNngXiLLK7cPQcpcwwphmTjuk8v7WpLFPgbG14A2vD3qkxWn1LWBgPXuaWqkJK6NqiBEmcrWjQCi19RjKyht",
  "key16": "4aedgwdQ1Ws68jMUhDSjDUq6wXspRKS6yowbYnYXzVTrpYey4jqkXATK7T6Dc7355eJJgdU7kfeDSYBZzCxgfHfq",
  "key17": "5r7WkDyXCXEQqa9ZfaCiqGWpCL8DBjrgJnN5fUirhs5FGo26FFuysr1v8f9uz4N9jcAaCtjfkxkkpWoCPhj3tQNN",
  "key18": "yojCTcM3xZtsrZp4rSexxnw1T9jJUbR8JigFXosbN6oGJwpY3WbQZfK5qG9JdDmFYtmWVARJLKAJ13yUNioxfmt",
  "key19": "5rb5kr1Bbgs2Kd9ZsprJXCS65B9xUKvQNF15xjcH3sQy3moiwxYYqeNLBzgeWmQDCQwGGNiwYvq2QiMeuL11Sgjy",
  "key20": "2n3ybBXZdGUrBmuDe7n775AdRxQAErXQFwkopgBVcjDRNArUEuTr4VBT6ejifwnNSr5FnDmwxDtBKagfi5eDuw73",
  "key21": "3x6Q17XqbsxXh5Amus6Kmt6c1KBdVoLjppk6EdNwYdPCfo3Qv8g1Fp6i1ye7Y26nYU6VZCumqrr7qkbeNJ4uPBH5",
  "key22": "3zduPdy7FTAM8LSNK6sn2YU6Av3LiE7zVP2qpTFAbZ8Gttc2YgGpmTeW3pG2Qy4S6NMPKmkH4ekp2qERjgrmNiEN",
  "key23": "NLQm31HMkHhoC34dMFgRAA8NVxhjRkMmByTKYmwusy4kEpMPz2hXR89Lv3229aUinJcPzwn4Z8vVKWfePUE7X3E",
  "key24": "2n1AG1W5k267oW1bFgyatNXgBVPKLCmd6SMwPU4DhRQseCRmb8z9n7fuVU9jqsVvYA8GciqNHTcPbEUrn2Se9HYj",
  "key25": "3Rdto8L6a2eWv32cu2TMnC4JMEQXDBwctbmGWfmxkaBzRT2XGs3qx2YzWFVdSi5YvMd9gehFR1hewtMZmcvvNWPS",
  "key26": "3kGxUAkDAXkE99TkH79bfqm9fM2hRFVCiBK3xyVzM9PacEto3YoU4EuBb4rY8EzixnZLKKWEsbw288ZYtk8ZqQ6q",
  "key27": "3jnKm8eKEJ5GJwG2mJJ8zejEDWQGXusVUZs6KujBM1tpG2eJT1ybm4GCZAQ6o7RxPYWWfHLAUhZk2nczwG7VCt1p",
  "key28": "2JYperDPixhtS5fFHkTd9oQV7R9DYtS1Xw1geaD7BwagK8DNcuQfB38CLTnL92ojkJN14eaCyp1D2ymndq9mxyJ1",
  "key29": "s4tDwdfojRJzfTSQFaxxTSh2nf4wyCAQrMf46kRnfWpgBGPJzq1kR2xMVs2Zy2gj8JNXffGn1XX8uC9xGiTRt9G",
  "key30": "2e6326ixP9pYNeXxdaKM8bnJco4BKLywSfKn7Wf7csJeMxH8TVzaJopZ2qKUNQhGWs5cG6edwTdLy23VngYR8vmV",
  "key31": "nh24feNWMQ2ajJUEGPn8qfyj5EiEY2Lf4EfYS49NKjZhva8NCShvMoQyAZqm699PUXZw5Es3W7FnwHZzdKTXUre",
  "key32": "34YdehV512TQPKyXAVZpgyoCuTyd7xCmLDMKNSL4MtKjbLAbSfcMrjb6ipG1GFMTM9zH851tXSAZqtJb2aPWLygs",
  "key33": "25EFjbLLnxTYwjEoWXRmt9AyhoZjt4dhxHeoCTLsH1afWJ7sNTrkpP6nzJ8kPQJhdgspquvMBqCXQfnUmTTsFbLU",
  "key34": "4ucnyL1Bze3z3v3RKqqhWA7mqFzDw1Bw9NHW7Kp6detszQTQ6s9aTRyFmFenUWgfvTpGkbtR2zZBD7e8CmvVZqa2",
  "key35": "4yJcNoZGoJUtjRUmk2Mok7yfNUpvbZ6gLLJuVVvUpuXRbxb81om8Ry5di8upBA3VSriVtSLZpDx9BuLmoUBEPoJH",
  "key36": "em4VVAPH3bNGWxq3HEFUnbTBk4dq2FS5CzPATQfa48bfPWBWtH9KX9upYao2qD6ppCXwutajmKnTmuBxZLCGMZ3",
  "key37": "3a1s9z8PiXfTfVyohG6AfERhDWy7HuxGjBFWDHHR8xec9cfAej6xudNLwgMGAs8V5eCPDg5cgqi66jFVTt28xpQU"
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
