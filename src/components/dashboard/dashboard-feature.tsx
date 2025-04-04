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
    "5wGPwags3Ac6nZjx6syFCneShycmdZENEwQxaRwtyJm4hSkpuytKjF8W1k5PRYvx47ZwLuotQST4h1yN8URqtvTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37hdKe8dnHv5bQVjETPdxo8uvhYaFRa5oNTeGJUatwC4WkjK1eG6NxoHe4kTTp7Toh2cqf9FwdFxVX3QJrX251B",
  "key1": "5biCofaRtFXm4XY9H5qMpQeum1oweYh7pU3ZKXuGWdvqfmcW5oWBBy39BwhQts1Nh3RjnmuTmxC4bAJ55oRxBz1f",
  "key2": "2qJcjtZyPyQhAhP8SHqf7RAPFaMGp8xYyEmEDxdFpxVzYtuL9pG7V4pyyYM7usrxDzYeZMdsz9BZnD1xb1ptWQvH",
  "key3": "PNUH6ohZ9nkibFKwetEKWV5PRHhzFVr6fhFcahypaYxyDFiaWGQRRQa6y93bZj4WP3GMRTSj6GDpKWDk4NBAiPd",
  "key4": "3NBLnwKVfvjGbtkWbRySqcWfD4nz9zuRUHdUtBHUJpTKS5jeDFNR3FVnJi2F4exuJZxZeP2onDUQC4tHgd8WKK6P",
  "key5": "6pzKWHvvpfH4V1jqXoSA7m7T2hSquzvuZASrTRuWzjDcZhCwMuBm1THGdt4MU3erapddP7ac7yQ9faN9LYgwQms",
  "key6": "2H194Nasg2Bt24JVAF76R7JiimXsg54LRPKfM1GyTJsDhv5TYJaXyzG4DEmfyn4iGuLqE9HUzKem4a4AASRQUAU1",
  "key7": "49RnKQzanJxC4H4eLSeKo2udxhPo9qHjXvLqs1gcM3hixePGiiPdbAKqgDTX2PKQgFTPdV1Upfs1CEKRQLoX645Y",
  "key8": "58P2k4ACTqbGhJ7zh1pcwdSXXAmzytEeVF1kfvqPtt5H4XYpwQkpe25753auVnWmmcBmuQUNPvs8p3XDHsPRxRQA",
  "key9": "3qenhPqYADzKRpwdN59qWBqAzAwWrtvbP6Lk4fQEoKq519TAiRhe2aP5mLUFk5Vb9RreW7bsjMqKEqVqmMKaDzPs",
  "key10": "4tnGkzA9R7fcyXW8y1xgTrQV26idhxv8kBWGsK2Q3jnKReYDJVuR9NE2THVcDq4ReAZ4kiW2CxyLdfzJBnEy3N9o",
  "key11": "4XjC5gFTiPTGD7rrPibr97aDSXbSRTwbgPzCy35Vemh6NFJUmKoUfq8q7pj3bQwJ4eDfSWxEE8yPrRAd3RPPC85q",
  "key12": "62GcL7oSTbtFGpnxYFVTMqGkezoiAjX6zZfLWU7vcZ4GSVc6UKmLyPDTASeKoQdWGKgDraKXYACDXf5vcgFjF436",
  "key13": "2BbhE3SbPbCGS8opyTL8HjkQ1J55VbkNcKWCmW3APRr5nP7LYQNLwe961Aj7n6fq67QZ4HYVb6oPSkQs4x7nKdbN",
  "key14": "3p19v5TKArqy5vS37VpqxjodXCFGPtv8vZXVwRh1XGft6WJRELnpQ9XaGpduWcswDAJf9MFrPTaiFVseDSunb4tA",
  "key15": "26EPiuedCu6VsLvcGe4hp5CxoSmA1fwSmHsjawYiqrZkzC2FAmc3kWYQVCJCf4hAgySbQbeaZnmeTJuVVH2MFCyH",
  "key16": "ZY97pqzvPSq82roQd5ssSjf5tAhVUmNN3NzdQdVosLWHgJRiZR9WcmFyXddkNzz3ANwrV587UpQGresACFpxurF",
  "key17": "4MoXJ8jj1WZBYh5LTtVabZpYjfFAJVLBZKYoqaUYYTLJccvqr5yaqLc7gNYsK3QSihRCXnHXV8rmbZLoq1iMJuf1",
  "key18": "XgYeZoJRK4Az2vHM3zLoBbUo5RSbotkuB1YTCrtG4SMLZeGqBhsBjxeL9WDqC4Zo4rWgL5jvtLdRg2fAakCB3x6",
  "key19": "4Sit1FDcNqV52PCbJCjBCKHLSkjSoApheib3LXLVwzjQMisqpnGwFAM3RdZpcYcSPavezMx1tdxDRkorbZQxruRG",
  "key20": "5rph6tPW7sfnztrRNN3cCJnCNBvv1PacB86hb7CTK7GnctNmjVGAVDygADn2hSPoLbCa5h54dvMWUtKiE2qs5iRq",
  "key21": "46m9W6pDdgSs9XL3yreQB7hAWDtW2YQbsbvoTszmnB2ErWZzvh1f2cgnXj82PeFUxbkx1RSSSrGyK9QUqQgK2qBG",
  "key22": "4AtJYYAFEUzzbeGK7Qop8gA6G4U6PsogQoAejFCpfZWWd3K1drLpV3TZj5JcFFnUFSmdjW8q4us7VZLzSMQ7zNyS",
  "key23": "2wUgQWW5bso5V5Bt97KKxDX8rzwRMKJGxZJzo5uZT9SD31Vt2U461K8e6c3jpezsVAbRFmEoZ2NnJkfaggqnr7TT",
  "key24": "2r8goS2ZZmjmgn18WTae6ToCcUscpanLoJdcYKoYsCkyhxMmtmKRBWvqdXnX8AKYtwmBUADTNreBjBuLVaQshZJ",
  "key25": "34sMxFZ2LnKCJas9FN9vsyemkShfUvPpArnf3FEDGepu3N8RfsYgYQ5pkaKKXpahPWJPtmdE8uUAcA93DMmuH1gN",
  "key26": "4QKNS5bm75mUzrFUii9wXJdUS1HaBk8Pm3gS5Gq3SrY7xZGDR7StTMUMB42yBz717eHLH9op2hNMW127hQtu8qDn",
  "key27": "33R2qMgb1WrX7rapP9KqRz3ZkZ1ZzbzepPti9fx4oBne7ejMHq2rzNDz4tq7afWjDujs4zP4ZMM3v4xBnnHV22sE",
  "key28": "4w2xYq4qVXrqCFMELF7pxfiuFZi7eBzS1J9g3QU7R5KXUNF18PGbfj92B4dfMbNPiLybk84unECDaPSExk3AAVQM",
  "key29": "3F9cbCiVfAHyxiUiguw45uqwRxyUF7BXDEr7iMiYbzdnifcNQe8tG66295vLK3qfPg8zYRidw6yXdfgBAX8b6wzF",
  "key30": "22bSKQFBetssCr9HuamGRMX8g4Yw5YxwwqcxmkpJPDsGi6krPEdBnyFVYiAb4FsnGR5RS4fCcDDTcNxPdXDi8rWn",
  "key31": "pepcy2kZTxj3sKxgzG8ANeJw6AcWC1Z73857qc4brpvXsR5Z3VMDth1bWn92zaYWdox3q4zZuHTW83ukuACKaw2",
  "key32": "3aLhNhnd12FCJuEaxDs7BXm6vZY5QvYhTEbTsTFcCm3PLhQ7JSVX6N8KM5FEHBHayo73t1gBKTBx3zS7EPXUjpBG",
  "key33": "Zwnz6DCqm47Fke5sf12xiVAb3JcoqHkCHysMGZat8xbDuePU7ZbmwC8F7xM83zrRK3HsRTRRHXjJLMzgferyLk2",
  "key34": "qrLuoDYkfuHUKSAsodxXnKfvf2TYRsJCCL9coFScrWQ4knu26UHBED1N5X83nTvP1no6kjBezczoXGmm45CENUh"
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
