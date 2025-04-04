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
    "472YtViSzARfHrbQskzNevDD3kymRoCouy6ujWNidcUurjkYgUT5FtJsaboJmdTfhRX1rRwERTv4b5qxQLF3yQux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yHBc62YEpYdLxbqmkRz1egczR6gqk4Ug6sfurNbt2AwndpgXTJnaWUZRWxPmydwbB2qXromBbrxEfsX7i9phrVU",
  "key1": "2Prt9q17bNvctdeyFvhie7GmxZ3mdYj6rqEDB2BUFY3LoBaEAhSaZr47tGkkKrjdcb7ghE93LAyhMYBCRwBPQh5x",
  "key2": "2M4Rk3pYoTXBi9wyKaVNbHWTUxKFFZNJwWg3zTDexyAtcsLVEaVLDX16ivn5wAxVFPyBCFTtftgDj7k2iHHfrndo",
  "key3": "4msjS816eEWxXQubcMAWrAzSUHhPopUBzwxjor5MaF6FR3L1civaPRqRMJeANXYUkpxUiLt4SWUgtSSA9CEqBrMV",
  "key4": "4itiiehyyugN6NU6EGfrK6LrZRAMRUEXGGHSKVX3xZD7qq5EsrQ56WsFUx1CAo8sc5LU5NDvXKccGmDAeJeEeyTi",
  "key5": "5zPP5CtsfcEGNvrj2QYZJ1Arg3UA4FmWPd6gA7xyVXLzmQbbJszmcZ8WZrEJv7WtNUepKZTmqAuPJYUuB3oeNVdx",
  "key6": "47JJLjo3DCuAUrcJSVSmyRarhPohnfZYZVpfhGM7Btc9QnKH71FAaEX3R2UehgYgo73Aw6diKDR8a1EQvWMgaQmp",
  "key7": "66E259q7b6p6ZncVGscdNgaL5zSMZLRTo7gHt29E4rW9ZpQnCjd5xgUm8byW4JEAgRSqzrs7EEsdT43U9XUfG9i7",
  "key8": "4LdC8mGX757R2s9pchsroL2FugEGMy7bWiD2GRKxmK82WsSZAEvEgYX8x3buXFy8WQ7Uu24gPahj3UvYMsYHd3RE",
  "key9": "tSJwyY156voB8gNvUm9TkuiXufD1WBZbd6wCw5shsYB79TWRUMQYsfTJMAQdVtLXiJatwprBceVnCxQ5gSad4Rw",
  "key10": "3HmCzqdyVCrYhjXiGNNsxLjKv6pT5DFhaxb61A7nDfM2xFxuodkd5XgJgXtMZMsD2snVmoKLKXZtnrmRtrNViZju",
  "key11": "6dLMgnMgYiWoFKbmFKmG4nzrXx44vmRpYstnrrfS1rzCjctfKyWXUysLdjTtSkMPAhYPm8dTZVrp2ncpvsJBwYK",
  "key12": "5p1VayF4adzC8m7ZisgCSELbhqE8ij4G7EB5UdrQAcdsx3cHtLEcjgsmL3YhnaLqDcbBweSF3DUWbwyqmKTeUaFh",
  "key13": "2P92LJE8VBnKRsdFFmEcixZoE9mpiNciCBuc53uYH5GJx8JRCuF6qvX82ozgNkX7ju1frMN5mV9gWqJjxrXXj3e2",
  "key14": "37qPsn6uU4rm8uppxLQsDeAUb9QTBnwHhGQ2iy3eJfCTVsq5MtfEwM4jmxXi1pnMZnSspAe559Wyx7gL4Te3mHyY",
  "key15": "3UtePdGNsiDsPXN8ig3xF4mUu3LWRbkN92nGRFe96aojqazbZgfJiDAHVM82hJ4srH9uDab6p7t7XEgga9BwfHsA",
  "key16": "2V55koGmNxXJxhbmLss1iexbfqQ6QmHW7y9tLcQvGtaSDDcVtrNE4W9Ymh6mFyGsQrFwjQJvi52fWJWbAaEFShYc",
  "key17": "3XR4AFgWZnVn16P9X28VDmzRcGHfYv8UhXbpjSaEYe5HAskk3PR1jSCFopzsNJRxFdqWo3WksSha5PShf21veWeu",
  "key18": "3XkGbYKDzkFXC9eZUxqc4Jo4eUGeNAm3rWma2QyFjwiVs8aY9N4nLiBAhh5AW3cQxYjb6yt14ynWC37gF5aANzyG",
  "key19": "2MmUWf7FEDP72jcJDJ4TnWJNDrnuz3cpZq4ofDKqjGUDsTJ5148qhsEwdGCRyAeCJpzSzXyrbrYW4Z9iJD9Xghsh",
  "key20": "UX4vefGxH8s14DNsDXNmyAkVzk6ywxNRDJV2i9v1dxpKJsRASNcPEMqVn4jMK2SpXqpzLS17V5fzs2rXkfUb7Kg",
  "key21": "3EgCF5jds3ehHSvmKkC15yUp1HtSxAHMX8zCfpaHeYmXLfmKd8Vjw1KaR2kS1tNuACadM45swsfdQuSKLNzs2BWM",
  "key22": "5wpTnBUjsFRE7eBrNZTLFpRLySZp2fXQxMjV3a4dDckPH4cxpBGQajBgexvztBb3jU1jFB4pBKQQ3r8bysQ8FVJN",
  "key23": "zncFeGFuBFAzC5zwfJm81P9hDn4Cxkm15sykhDAq384cttKMML995ez4iomdwfM4ZXztu6avkJniiPbVwZ9SdEH",
  "key24": "3NxJoSZajvyFq4w7qMdtgpJXBQSB8qhkGoCACpj6aS4P5KbkuNmDBuGmutvNL7YBgf6zvqxVS87iDChzFSq5dSqB",
  "key25": "48LyibenyJeCeC5XmCy8WSkMQoJ3Xb2gDmUe6LM8mqaotjbxsSLdE45AhW6CoGsdrukWK3a4oBBkM1jaswHTcuiF",
  "key26": "8KvviJWefC5XqoK6Px3Wu4SxZWGsh9z2dby5FAeeYnnrfgmCBcdpqPj2NepYqPXM2FGfM6zRPBiMSJTZBjVHV4X",
  "key27": "5rpJ2zoUcyXJcxxrhgnDDwcYcwLYhBhoQebYZh4DTurD2L5gQPAKRTzZ7UPwaNUPxVVszrL3xqXf3U1oVy8PEtDA",
  "key28": "4RFMa2ckJ8qAgQ4gNbzXEFZ5CCzsoRXijwXnXZhtvQgtC7SFuh7PXJkjUAiJCGzbsvuDrgj7n3sQyUGN3ncVBVUq",
  "key29": "3sCvXLsAHiw1wGXNDFcjtwSjmECXDW19V7aKZqQoNcGyC8KXWKpLL2ZuU1BVF1pXUVZJoQiG1qMKvF4mRfrJo7hG",
  "key30": "4urNSARZbPugTJZdW4K88wgQGx1p824YYvRjV5Stp5BHvNzDrwgrgKrNFT88rA9Mp58ymPP86hhU9yWgYjQCbKK",
  "key31": "3w7wdsA1fGnivCfYZAdsr6RTgQZmygs8aUdHoUqy7zEC6Kp2W8mzcawvu8AfqKqNugoigpcseN2Q5tMZU4UwY3L7",
  "key32": "3ryY8zsD1V9s6ToFTaEgWWzEGLYf5CMrC69FCHoxoYRyKooiF3e8yM5wJ21P8Us2sBGHKkXtdcCG1fMRd9Tmkkx5",
  "key33": "4k8vGNUADea9zhjgSSjN5CBp9Uqy5YbxCh3TKJDqC2LcdhUAL6ENQ4unrLdmpDar7qJF2BpE4hH5wtacvryce9Yj",
  "key34": "4K6B5dE7nxB14LHQw2vdRZ2EQFYBcXCDUYFx6TiTXmYrz3LTotELYr8H4EcRgfJtF3q6cXRqdY2Jkq5Bzcn4GvAh",
  "key35": "67j4MJUuP8qsZH4KAik1aSPpj2pSC7wsTwiDfFTzSuJGwYGu8KXENtTYQ7yQuHj1mf2QDBB3u9Q4tk1abMt65a1o",
  "key36": "4oGogDa2DBoWX434sH7zahuuXbAfh3GCyLHouHhPHCpLb7xyJ5mRajBQp9h9n7E3CCYSPYEd9uvxw8q3Qi1PxFqf",
  "key37": "m6e2DUjYTNFzTE1Fh9aFt4qCLv4cjBFaKmjRkHLHXBtjYSGt3gGmPimRSUjsziJikBfLWsVq1seGroDYvpR7Vh3",
  "key38": "4kyLsxeGftRsVHrK56Ah3eQAvoPQbNBwvg323muGx61GhHTAUSDGhzzm6x79FSKQqmP9xQXZxugttcB5o9xut9Nw",
  "key39": "3b2WNCJSoV19SSX8yx1XqAy4SaWYiUFY5gNB5MdtVSJ7bFCGq5q8Jkt1gLPdfey3Y9rYmXHiJM56VV8vntuoXAHr",
  "key40": "5RPreHc2mxCJ6gJ1GkCHUNBGH3aqLM3VykB9Z65dxXf9WH1fxGgWd2FaZKz9nJ5Lb8BtEzz7NW9SobwLrvd8iWXh",
  "key41": "hfgUjqZGrfjYqNqd77rF9PnqaaXUKdHDy5eQhmTzi3FGJeFJNeAxFu59woRvsthJMq2JBK9LEwNR4mAYvabzjbH"
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
