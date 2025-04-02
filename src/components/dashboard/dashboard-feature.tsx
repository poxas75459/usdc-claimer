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
    "Vi1prXsjw6BenptEAupeUrtjaNXqrXoCytmpuumruYAbAdYTbkoXpDG18tvXutGG6kX1x9MULxKnkQjT7ThEhmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CBjVZ3C6mdkDmcx1BwCWJ82wrgdXH8d1oQAB89ddzf37XYhXZxTFPbHMsZoxWtGdfGaMUyf8NXAcY8x8CcXJvTx",
  "key1": "32N9VnskjSoNCdg2g9DxPEN1piUV9idv3WRSLBtgmEJxMJVAxno9hLZuaBAdTo3xh2nLufV7MBUE8gXXEgA573xV",
  "key2": "24AuCNnCnYci5iDZuh1dFUxhHuaiN8SQDM53jJmQfr51RQSX5mkEkdTZyygScxv8b2KVAQD7fTt5tUvywkLspo1s",
  "key3": "38tAtjkgxno7GL8tNjWQBUhvdp3QobvShHGRegNuxFGfnjCuxxgDKyc6S32yB3uVBQxZxrqdoykdMUs96tzMqLAT",
  "key4": "61GtaeKkswJFjFGZ86fhxWKnA7jTiJsjNxDuYb5savicohFiAcVAVRxD8uduaXyhkEyycA9imXM3sJcKV2Z8Y79Y",
  "key5": "3ersPFioG7ix1yGyyGFfBrkeke2fuGSrQMvUJEVGTXBtT2Y9Xub6ZZ6bJAnRnxypEZ1cV9yrwtQVNFg2nTw3Puxq",
  "key6": "5ysFWpinijYZLY7uc5gkAo8YNLegny57busNzBhbmJehryqKQEyUJ4iyxnx167YofpPkhQX2L3XnZrVPaCXGDb9R",
  "key7": "ETzK4bZx8paKRBspAMv9krjvDsozT2EwEo9GGKJeMxEUwaWZYqe1bBQJbzCLmXZsrLSq2kC3wC9kzLPS2T1HiFa",
  "key8": "3RDZKk2pRR61DWKE9cw9DJuzgyaX1Ha1hjpxypzBFug6KaGSPDEXSb9TiJbHDwuw4jXHUQSthKnVpEDnixGJgcRC",
  "key9": "uBVhCwkHBzRQgGwLcutixRbS9hUXARLGVCeT6RkL66pSZMojZnZ9A7fLDX7mXAzuFwyGzNyhaLV8otNtWosHcYp",
  "key10": "5tH7rXL7yW5C6mLHyay4BBDhuj9qy51D3jCVupft4E1pLWhPnV4NMuYn2MwMfLt2MyU7VqWiA3BpALnYMaM3fggw",
  "key11": "5aoxCvZbDdaz57v4tBrkxGtqScihwoYG8EtvxLtmj1soxDtC9RX8ZnvcSANxzLVR7joSenzi1FR5PSE35gy34BWj",
  "key12": "4j576KWBrZHGuVUi5kDZY6yyVvKU24wHifK6BK5X1ParxULCERkPmvs9xEBoHTUBJqi9g2fJPcJXMokpnrjJ9zaX",
  "key13": "64i2DaKgkp41LiNJue428sxWhBeu6tbzJgCvJSeYwmNoqERC3n11DWtTcXrRLP7diaERMvjEMpXs9wEk8M84ngKX",
  "key14": "uzxpi1m5FAp2KtkfXQammR7yn91tJ1AkgaMN4Xxoqmf7uQsiHCoV2oozwJ2CkEwE5ySMCAdk7Uk2g3nt4yifnpD",
  "key15": "4iDvYL7xqoda3djhjoUJS9k2jgimRWJM5BJxRPR77184mkmm9Ykx7NgBpPDKdzabcwTHnabgdgADKrBTRZ1NXABf",
  "key16": "4pTHyXTPPumPRaXqp9cg2agP5uNRdWK5tfFpzrR21V2hDBfVt2ERKQY3R2KWRGVoFeseXujGVhdkotY6tqSpmtMF",
  "key17": "5X3ukoUGtmpMErJg6L5vmchmP8BULeip9AgKh7cJRvBEjBJxDYqxWg5xmbMq45E7spRBZ2LGeV7rvJyhC1cjpdAX",
  "key18": "627CewMjds8VcoWEjFvrPKHYnn4xZkCruY9PLLJifgoP6xhsGCWgxP5qyqvH7X63jjCzSXwqHX7K2C3KmKMQMPz4",
  "key19": "2EDXtuVoW9zPQ81h6kYwHDP7ddGypgZ2M5AVzKRWfeKXeWiQ79Qz55aP7QnAXfyPPVxx3FTj5st92swDUmuytWT9",
  "key20": "2oYk4YKRsfMjCBnZ9pz3vri7L3eSfh4W4teZA3QhBv816Er1jP1XpPiK6p5cp61QYi3fMXy8WFhy3bc2q4SSKY13",
  "key21": "5hNHTrhBa9ezixrwAdFqsqERGzeEBWBM7n5VTAMJQ2Md5nDPx64nwr3Q7bsazBvKzjV8jndkP3W6mEWaMqjduwu9",
  "key22": "2DRUsFXPtSaQYWubbxSW8LFpoZ4MBoWFZjXLoE5fHFE44cWjo5TcjhiRZeQqpFRQ4CNVDyiTj25hGPga2M7pYWLd",
  "key23": "VGF5iEe9wJwnFPmr3QzP75gE3MtwxWvGGMnNpy7ec3buexRftgUjBHr6rs4hKaaQvKaFnWdpfn2hhKzFzFc5D4W",
  "key24": "4z2Ei1cpUeRQC8hxZUisQRVVCysFEkQhuF3m1NdmL5Zfb4KiXgfGqdbEu4drsbSJLmGwmLzF36oJCGYMquErHRrH",
  "key25": "KhzXx2kdAWSwUPL9BiZYZZiNRUaciLuRTtArquaZA5Y4sUSYSw7iytBgBPxD29fhR6gRemzsjfdwLv8oXH9nEk4",
  "key26": "5rLUjNZEy3hDXjZbVLGtmZuxmuCYh4WvuM4T3RZLLLqD4B3kKjZ9HzFwAd8HHzS9QLsXaEEemVRrAooXDcTMaLpq",
  "key27": "nssT3nttsnV2hbj3Gc9nAj8GQgfYoJAb53k8y5mL5n2xDsa8bGXvrBmuvske6FmPfkirPrcasJTEbpcFkSCvYMa",
  "key28": "4THEzYiNd7ETikDY96faqG4YYvHGpcSNBCZ9naHW7VtSEcbcXvjGv8YXVZBq5DMM3h6Pc3ozhMD2g1JPynzW2dHs",
  "key29": "2gsTaQ79pdwAAc4GMQy6QFg7rTPUAEx8jbAzc53wTwKFf6yawq9NzRDfjFgN5jHGsWj19Hq82XiGVkLB1aqjLrFR",
  "key30": "2MACV6QEjyLtq5L6t4tN6FhvXBurp4eezfggp36WyNo9dmTvKnLfZpKSSzjtabL8agPwCY6BghMbHAygpuN6B1aX",
  "key31": "3AvPre4JzqSxt6wPTCceJgJXGncxCFHYrf3nipJ4pe7Lb7x7vVriRJ5xE7FjeLtYDwnp9GyzA4vxWNTUeYCS4hdv",
  "key32": "wHKEc2hcCaCp84VUwDi4rvCWJJZYurxtzcjCeFXkUgmSZQyc6nMhtkWgtfKqB2MgWU1PXbKaxKER3j4SPg6aRng",
  "key33": "3Xyfv9MMxrf68gbaF4hWthUw971YzeN6zpZocvF4P5LptKjntEEdnnzSN1FoBBDjEJMvJCpZwMYM9vxsnRh2zH6t",
  "key34": "4qy8N8UuYUVtYmeav3Et3oZFgk1mHkpC3K7rHn6x2dx2H9QLb6HEvzGnwFCCnqfZeQtzxtyovjwums8cCsLtkLn2",
  "key35": "zaY7rSmiD8KzzYJvgq8YgY2hN35BqxZXrMNeW9w2yeDZoeYuucJXYa8VY2guyYp94ntY5yZRTr9P9DTDKUpB4aQ",
  "key36": "46KukRL7hwLJ3CVQaZEC3CUBs5bCe6NWS3uEHN5kgqRdqPQMecbkRRNENc6LsjbX6QKUnR9sj7mCY4UFix7bgvRH",
  "key37": "avRVb4mr5xXEzVV9ZzUSw77kiz9oYMHWxrY2xWqk1dSv2bygwTd98tYUrGWT8ZmcuKvTGv3bithFbWi5vXCFEia"
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
