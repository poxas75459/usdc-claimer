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
    "31dWuTGzDHYam9ymN3P1ix4XZyEYkX4SGzqhB6NAHiMdX9C9snh44aCM6Gp1pc2uj9iCdAMRENBMz6zc9jzGGJng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xCeJczNDqhz8CGdcJYPipCnGzYUXsJ96m3kaQKJA7nvrtKwjrg7vu5cpfjHnkkzTbaX7gtnRwAmBsqrCpZzjXis",
  "key1": "4CM1a2uZAsfRFAhBsysspVjqQDMoDfjf2AukzmuLEFZeCDujM9tqitiRY5ZorV5iNiSTDa7CheUgubKHEwtZKf6Q",
  "key2": "5Sw7Y7NCy3TPYSTBR5Pp7SMpiqTu63wVtX9vjYqXQ3yUq24FyvSWEgrFLPnSBXWwp8aFrAabu4NUKqURS2xoWWBu",
  "key3": "3aCpRRnBsrycH5CfUwVSKphaHAdAFcQD4H86uAjgR6syyYMDDKtTZBrjBfHYvxRpn84buBcrKsGTAFq1YGpTNaxr",
  "key4": "4yVSogiRppAE32mkb9LoLTRBZmyHcyGAvvoXksdf3B9iRGbxCUg4FNCqBjh4gh5jgTsJhUs24U9Vv9TbUNiewx2p",
  "key5": "3YKWtk1NbfF9WjivY6ySEW4AcRY9L5DCXWW3ncJTKygEB2GyiY2eVjJuviuA2w2FWH32dF8pZg8sHYYBuZ4TUyDD",
  "key6": "28xisxMjrUZsWtzNtewTUuh1nehakLzxJCVjQPc1fn6exXyW6gccuYofkwnp3yK5ZymzDdP8Uh9TghjS6Yv6H6Nn",
  "key7": "26QjnWnet77RkkmNzTHDpbmnBioTEMyFFnCJmRjcfinJnCDbwvVLLgNUCrkdzBz3rKBwL2oL1jpWpRc8cdcinGNv",
  "key8": "4sfnXjdYewQgfs42iTDX5VfNw4AjBVysA46gbQ4eKaKkaZmhTEAt4iC63z1JyCFfYXcKs5CMF4AvaXh5SVvGVjSE",
  "key9": "2dpBbFxudEcmmc4WLYr2rXBFs17qCfQQsj7PRReJYyZJkQe2zqa8MaCWe3hgXFajdEjksjWbFAwg284SUGEgJrWh",
  "key10": "4FxMaWvQSHKvy9h8ZHW4TB97CTzLb7oppqtS9M4eFwjFgHDex51KBfJd8R4o1L4iQdT74BEezqAzELciPXvWqXWS",
  "key11": "4eWiCoC4X3vkJToFrGSj7QH4aifrXKFd4iFYDvnaMbaqZ2qsMLVLhPQAZrzd5TDKHTVoZFZRjLEkhv6Xghb1nGSZ",
  "key12": "2RKvfaaUCoaK3hxyA3m5Cesb2SwgQgzxUX3sBoPdq1JWm1fkEzNxGShLFN2T3xwVkGnQwfU4ExYXnwS7RXqNrEV2",
  "key13": "3hh3R3Nos5SnyHSHdZjUXRc6B3q2Frg8R8NmR8fkqy92hRVww9JhpgmddCP3PVRWjtQ8UjpiAbhT1GkxPpsdPvSv",
  "key14": "2ta6JVABRpZNvWWzNcRvziwL3gqyA2HAYjcGrwjTxv7c3y761i3JXQ9yNEcMjohSP9p1jReHsJn1spCB4WNcZTZk",
  "key15": "25KGTERLBRseYPA2MhxLcPg2YsTZqLSxqvy8UwPSVADXkbo962cqNvbfBk5pmnPnS2hbY14UAMyK6r37ysjztUHY",
  "key16": "5hr6X6HbFDbUD6hbgR2LDZZrA1NzgrShZwzzxSpRd8eNePjNezBGfwJod64Y64SumrvWeRZWNj6f1i7vNiMi3BxN",
  "key17": "4yWKMvX3hcDoXYCVND5RXUAS9qGesZotvNADJnf5UhZLH8AGQ854dtNpCBuAZXvP4e6wW9asPEqusAJGQc4Q7wvV",
  "key18": "jFrS8Ga1Zz6AqBdpY7WSUTYDX9krFu59GgYwkiKGTuWVvpyGUkxH6os9xeC3dSon8Mj5VoGzhNzygsKpjJi7FXT",
  "key19": "5ofkoVvZtv4KSxuA8on9GWHs9S811YsKCrSqS7YgoibHPdnPB4hEyo5pgxbgKtVgi1B2mUtMUS8zHqkXTPQ2HnhG",
  "key20": "4yKQzPL6ofPJrGf4bz19A8fK79tv8W4LXCDhGCyPV2XfimHDpAxWUjL1grWFaZ9xS9mHuYRKQHM9mmi3RxrNY1yX",
  "key21": "3BUFTVjHnicVm7NCGnE2PyswUHCQ3vpRKGo3rnf1L7q3pqdCM115dAbYJhKCK4FRYSPDJXPL9atMk1SVq9aW3h4p",
  "key22": "4WK8AdtxdqfK3p7s8BuYEudzopYjMd7wpyUEcS1UTDhETAEVqZk4grruSpgMHJHkDN5PgSgrC8WDpDDuAHqBdcX8",
  "key23": "x4dyrFiL8d65St7h6bskJWNcbxmaqBufEWpAnLtoWC7ru2nbwUoeyUoHeU2KcS1ENmY6URufBVBM6kzQLEgGNbM",
  "key24": "3KVZHJQJctiWBv411KzD1gU2pwAhUKFHr2ESKmydbgfb1wZHAxarX1xyNG3zCUCJCPTqDpdHXFDNZZDznFLiPphJ",
  "key25": "63tBPpguBLKdefWkJWkyH3as9YMgzhEVbHuVsqD7dJvGxWjLac4UpoZMQrpwwVWmkPF7a3CZFKpukdnXptn7zPtp",
  "key26": "2xN4CDyGy5m1wBWomcWQj56VJCmpoV5tkGtK1NZRSYHnU9UwC8exUW8NPmAn3sgv47VpKkP7pCW5syzQXPFVGzec",
  "key27": "j5CxBThhkE3gVuZXskE1o8gipbv3GLTyBCygjCTWhfHc9b2kR6NNfGtUabk1XEeywNudkcrNnT7LB6hbZr2pg56",
  "key28": "jjiBFKMAk1kKsJSr2rZGUh8SqaEesFaL3gWaaMwh4sE8S2Dt2BGVMHKDohrBcUVpNcmPWpNMLQvrt36K6Wncmih",
  "key29": "2yFAyFtp6JEKjH4ipjy1a7ko7kUMXQdC6ygN13dSbVGSucLFjgUxgYS471uxiBuMwAA1YfSA9cA4whaHRgC7JvPU",
  "key30": "5pLCMCnkwhVHQ37Kpy1wR5w7zSaj22HNe7croWMsR1bNbvzWsxQe33iJSe7s55USUKEwrec9mETjo7px8bWd2A1a",
  "key31": "3EchPwTGyR82GcRVe3qaJb5vSzmaNiiAea7hfZsqwTVqpJJ3hE1MdEYWKGJj5fHo6p8aHT9PvRYyrkdLwazeknQv",
  "key32": "5gfTYuNHMYQEBvxHuwomBMbyQ5kRaLaWof4bsYGPRKPgwo36Lzcfqe4EpnALzfuTHJDDaUUGMjrSyFumi8FQteZU",
  "key33": "56sSWA4zEGHDCXnPT8EoUFGXsqf9PbNyaNbswwk6HVru88aLgdR7vSxUVXuEX1d6LEwA63i8Ddnp8RcBMQgqKjLo",
  "key34": "FdNWcCmboiJJF1hjmQTEUfRnqvLZ7hMt9dbv11SRzY2azCNFTnkRRT119Rdf5gJTg85QZ2zTQ7JjmrgypcF4Sfp",
  "key35": "3gTETxrfnk5QtCHVLGybTRMifK5vd8Aaxod653AXpXRTBsFWjFwQdaXtTMh3hQxTzRCq9xKn1XGxEh1qN8SVjafs",
  "key36": "2TpJcU36gFMJfQXLVT16DRyRXXwbSQ6XUtDThVLsYaDfFkX431sDePewHiqa8BrNP7yZBuxvf9DdXmsPQT5nVPXc",
  "key37": "5AaXASubo8JG6PNjR4vDRhFQc1C3WDPBZN7xcgwz5r8Bozbm3uc2QQ8fsvnok22weSxnUib2LYt2mt1h6ALSND2Q",
  "key38": "m8aJpWZ3rP4N5kcsRPKjKP3HxE5PJESWSvJXNUkQW3apAJJXLkGpxSY6Esckb9VDtYgsgiU32u7Jgve2aH54weD",
  "key39": "nctXjeWiAq7wNaMxiYmM88es4LCeYsXw9RLhwUro9gh62pUPErbdUK65v6HysoEQSv6Wrm2Ti8Qg4WZ4tVitAmM"
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
