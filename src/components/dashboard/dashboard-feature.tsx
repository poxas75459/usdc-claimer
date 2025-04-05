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
    "5HiVG2P59sewjMBAvbGkM5E9ZFu2UyqozFqEfHiZttaCpB3egrdK3DYVKq6mCRhUkVvHLjNPtJtTnFrfWsvoi1wo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KAiXTAT62rpjyBM1EwaK4PHMz33iQfgSGVZzUxEAAiMLKM3rXnA9s15iRxpd87neHjaDUHGT9oKY9zaGdYh31hm",
  "key1": "pvSkEJV6pDjY7dfSu1FsRjrxVQMZgvf2iM9VPhabNsh2K43MPgw12eXKyAgNTFBi3VkDSrGB8uEsPJH4pyF3aGk",
  "key2": "3QVPs1aQ962RhFaBKjrf1DkXkhXMp7iYhEXBN3vp7Z55Vdy3oWE2BSXQFPssNubmAeSdRBet61aDYCRanESmaM1A",
  "key3": "oe2QHSrGhyPhy17n8HEBop9sTZ92RQrukM2H5NKaSYx1zeYp7GPQTXvwU3CzFtd718ADuquXHYm4mBDNeyRHqgk",
  "key4": "KAYSGRUeGjDRiupTK1CZRjPtvZ6SdsEmJitnbY9c2tdatbMaU6Td2YQ6o7ewBjCKDvEDK2xnWchqdaF7mYF25wb",
  "key5": "3YqGFeN9jfUsfHBMcSruqgunWvVkkLDBaehnFB5gsAEqVzuzxUAtbJGhqfdgiPvLvAoTvvveTzi2zzWyunmkMrVg",
  "key6": "2jivufPz5BK5uBnW3Qt4TFVPoFC4B37m7HvD4E5tv7A7JMmwRfsmbfoCZEcdyd1aGvuSDwkiaYPivXFz6JyxcfT",
  "key7": "5qRw6dQTk6MsT5J4QGobwJ1fC52bScYFawoLoN6UWPAPTwt51wrbbkopBMTsehbgFrwt1hKqLn8BgfKjeGdShtZt",
  "key8": "27s2oBqCW1mfDZ5downEfdaMFfGWo8D3MnyiJsQQARksa3mK5rJLjcZa64kcTpdwFczSsUPJr9ZsvdLXtpTBtUHF",
  "key9": "4Zu6o8JBjpZKSqSGLzmaqx4xfVqh8SGDKowMi5czF8EBRMvV3gYpB9CfjP1NmMojqEmDB4PYLFo3UfKPMvaR2i23",
  "key10": "4U7sdfj9zE3fvW3pFYkFu36ckUEg2x5meqEEdxHV3v5mHcJvaihctnxn14RfkTReEPijrqtaDPKda47cyCHuj775",
  "key11": "4DiohW9UuZMnupfLF3Y8gyB8xN6Lw2XzxLBg8Efz86XaQfmVWA6AvSGij4MQ6TL7qdMqnajqr2KcHYfxbChFkQ1v",
  "key12": "67CcCAMSsHQBpRwGjx8g36bGDhjKE5pQFy2cvYSPc2SKxBwemTvjHa6yveGycXzz5YomAwRoc7weDGWkbReG4tNS",
  "key13": "2Zkvos9wDmsr3kUDkSGzaA71qQvXWZybD1LvoR81Uxe56ELhohnubhMT99vYssBgUxwe1m4wcLDPXiqCfdakb6uf",
  "key14": "2yRBayBBYzL85wcA1eVJNPjghDJEyeVpijzMGc7HeoiG4DqvejUWn2HQuqcWv3gCNR7svrJYsGLqp2mcrtXAZ3o9",
  "key15": "46qzMKuXoqRMKbMbeaZfNWRqhhuPS9oi8iTtPnSVs2wFMnvwf6sBqCC3npB87WHR1mr8UHoKPsXFufjuXNDt3yna",
  "key16": "62BaU48W9scYLm3LgJVgRSWx6vXF9fZoVZQEHkDYYdpxSx7FzyiBUmSuStPbZHS7dsZh9BS48ubeebBjAwsG2Ajq",
  "key17": "5y6wNZFSQBJpRzPmzzEVDV1J1ZtAAyLuvMpDZWeeZes5kjGjvBR3GYw7g7fb7H3baQmVNfjkdALrfqQjC8JKP3tY",
  "key18": "3D8rZnjEYB7ebRzzpiVhwpmqrBsHdPARW91SWxTKXX8NJyWpJTrwq8NcFaaJxwyZ7H3VxFt1vsoTnGdA9z3bhNGM",
  "key19": "4PrSDt8rCeiSmBYbXk92htuiJ2jtQ267KczUTWhY7TzaU7Cbpk5FMnCkYq7pBVAc78BP4dvaHjgrb2XUEyDmodsa",
  "key20": "2vXkLz1Hqmmcn51WaA9nTnSGgNYVWBnY3mDbaXMKDrA1bWrunsG3B3Xqiw4atbZ2dHHJFjjToNd7SjSKGfG43Tbu",
  "key21": "4TdLDGaEp8kSJJfSzeuSnNznScFHn8mgftAFnqoUaNjemRqsJ3edJh13mq2wSPC1BofUJ51fDeWxEDu8CJ81mG61",
  "key22": "31RxxxcPrViwPL6fH7nYF9QPfGHw13pTCQMcVYAmZW8BUy4BqHPBKWxcJtoLNtcoxiH7MDh7U6Qe65yJyhFWsx2b",
  "key23": "2iw8Y5kduCeT4pEi4c8qbBbxRrKSvYjiWZR5374wvfgFXemy41k3kVha1m4jsyUnMw3coGBPe5s9biiuSFMgjJVV",
  "key24": "3DEZEwd4ESjLw7LyqwbdL8Ehan8LBwLiKLKeT6cgMgAaZQGK696mpqKwwpPGhHdtsYDd2WdsPjrEpocEhf95nPGQ",
  "key25": "53SoVYSLgPcYqMb3o1qTQw1CLWwb5fjz1p2dVrVyxYSmwVhFDUnsZpnMdHj4wu7A8QmYwNdC2c2WFoawtXs6PEos",
  "key26": "2xCTMzs4NMtm7gBqXCYp63ZiKCKQwTJLyxEiLNLW6A1V4PhQFG2d7qYM9yS6BLvR3xf6gjEsg2Aya2sa2oANoFKD",
  "key27": "177Zc7bv6qNg1Y27CP8JVYdPUjwBrUGFzHU7Jha7hR7xV44XAQcNFupftrYBXQbYq2TuJMmcqt7u8d5oAX6B8dT",
  "key28": "51b5KY4BjKz6ZMVukzUiP2Qq5YvjT2oV36KqcS8awjDxD6MCc223KRKxcmZyHkReX66GuAMpaTiUxDLNyVNjvnsR",
  "key29": "27GvBvKftb5qBxhsY4cTTyKAw4i1NrRc7TYQTjTBDj9e5YMnDC5rMNjhisdfyjWNZ5L9ktj8KgA1mkokVjMEKAot",
  "key30": "uhoKJf3i5ebRaU4jntW4pCPvBDADAJWGVCG5M4PVvgoxsRo7J75wMjWa1QPgvHv13Pi3phS1JxzTEw8WT9xj38u",
  "key31": "3KoUfi1fQ8bGCtWwJd5SEYxZn2Nh5tubFi7WFrLVuShoJDLfwUCiUQpWHAG8FRekx5cYbQxzcrvYSNx1FVt91uv9",
  "key32": "5uEXU1N36vthE7Ly3mfjTRKEX3SHt2mMXMR8qFitZgcXFtaVM6D3S9wyEHc6Cqs6gFFmnYmwWxfLFNx4oMvFgFYk",
  "key33": "5Z2dce22LEjq5pCT1zg1yqSpNBZDRgFatPgqVmSxRQ8J2avqmWNPb6CpSk2ieiUBqRsPq5ufowXJRk6zX23QXHK1",
  "key34": "zqg6vpYrZwkifUbFPaewBSVR9mGkY4SWxKpVTvK9PirXgv6HySediUBhDhadgThQWTvbfoipsjA5dvRVibPXkz8",
  "key35": "4bNGan9eBRJCdPSi4ztTtpntVfyvB1Vze2R2PgwLhfUdiKJ1xwAFLHbncyDsCDJn1ZoBKFGkgYDoAdQdiYdzc6C9",
  "key36": "2iaRv38SogeTARZu7w9mM6hcBtkoQTZuhQDKWLgW4A6xB8SoN2JhpTwdNC8qrmZPrrBob9DCzCn9nGFsKH8CKZv7",
  "key37": "4hK6N811mVnvruJnkiJoxocbgn8MZdwWiA4VyLrqbJ7GatThSm1w4u65CSqTLKX6TJV217G1zwKe6dq3YQXdNytz",
  "key38": "4MGb2nrmzbnNDTp5b3TCVSVNhDpzfvZ8h9vd1vuHZ3XnnZWKEziD3pkoHAnJHzYSrL2mFQPRiD6wx5AuXjiq829s"
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
