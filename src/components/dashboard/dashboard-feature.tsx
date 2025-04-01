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
    "36DN2UpViNnK6PJ4JmEUs1KV3iS28CnGot1hNfbPV2468gZRxstnMB4hjYqGjpyMUs9dddtYf4S1kr1YC9o7R96w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49ARpN2zKxDpp7zM1t3TFN9RGdQM58EteCGMewfELJtcsMANF6qtdqXQXMHcK5ceK8xTjrbmkuV2ipxPri42swsi",
  "key1": "4hMkXoJ2q2VZPARb4UFyajESdAum5QGtWwcXMvqSzgvSVKjBTNqiiyfWVs7s8keSJwrQvEL8meG7ygkWBtBidxJ1",
  "key2": "5EuEN2D5PfFJuZAe4LzQ8TmvW26RuxmjSj65ebQzXJMcDMeHCM32ZC48domC2YkzmiiJP68Ur2RGJ7De46aop2hy",
  "key3": "4AzGKBHkbEKC2cRvN1HFHVjF12Kn699jBxqYseyYpgAegyRj2ChNwCWHR1sVtZurr6zxXbmsuEEjf6wLkBVRr1a5",
  "key4": "kmLigYFP7uxAufDkzmZL74ErtF7tRdTn5bAdxhrkKRan3GxPGUReaTGiNxAPpu2XtgPoLDNtNaigiXdHXaptLFA",
  "key5": "4gwQYGsHthko8w4x7jLw6QupgFoW17pBRD6QbUuT1bi84in1C9coD1XcoETYz2H9CMwGYoJbjKW97WPM7ne9uuww",
  "key6": "2rCMorwghVBBJtRu9rJfiqTTmyq6kextku7oK7VbvToj34y7rp7Bz97DmAXzjaRtc3GnX4fhS5QBtm6VFp7ma811",
  "key7": "3h6dMewvsTi9upuZivmNT6oG1Jp1wuUGJwfYshJoi3qs4QZ84Ce2LNfz4oQfoXzo4JbF1MCD8vGoXPrzqi47LeTN",
  "key8": "2mAaQsdpS3kFycwKqBdFxVZp7VoQizVQJiNRFKcGGr4hieU4RQvEooZ3xNbw3RGvdrMQrbgNVweYfXYrrhmFsHKj",
  "key9": "4zjm3d1jxEnYBv5SMKQSd4UndirV3Nr5Ddnzhx8kK6mSud9cTvxRdqtFGQFqoWhAQwZRPaR9sw1Sa6AA7kJgfyDk",
  "key10": "4FEdcu8jNbDe7fzuYbyvekoz1G8zHGLTSc6CBCS9VQDzZSapifhaKnNvThpg6wrgrCQphSQK81Kdi8tQ5H3LUFyF",
  "key11": "3aq4VkNpy4WXPfK9mpWaSyqR1G3j4Y1WrGv1QQCZaDQCFcDwXCma2e52LrLwLPDVwvqKCmj2N7SR9jUNiPJeN79y",
  "key12": "5HRfqptoH2z1jTzRwmREDdpxaPJLCc2eRaABXe4S3RkhbAuDT64j6RMSpxkuLChc4uYNUUVDDh9FZubvji3EGY6",
  "key13": "4CJkTcb3HnqgP3iYzZm1s6LAUkTca2zeCdR2feqPGzgpRzdmQ68Jsk2RpHttV3aMtcGJxcDUqutDEuZMvaY9jQMJ",
  "key14": "3D7SqtmJkk3Swqz4NRdTaLB9qnjWkxQfCPRpeqH4qYKcqPL4X9ke1ZWRR48pnxy1kWouLDfVopXvZ9ypsnEnXzWs",
  "key15": "5pJorKv77rpRWLrsSFQCXhADCTWeQTrXuXM9567mAQYabturzpNcbxJYcRshequBnbMkkP7tdDmXcw3jufJb37Dg",
  "key16": "31jupNSjFE7xpCk5fGTAzrZgCzEfGLRfyaSQhVb6g2zPAYxz2Ln4HtXRjqAZD8chL64UrvMV1DYmf5zyGR4EGhWM",
  "key17": "2ZChfTVjY3hMQ1c9279eESqML5EHWAbuHotSyMRagF7Tw2najbgy1D2Syw89riKYn1v5wGPJwJ6LZ65yTdBvPT15",
  "key18": "Eqkn53FCKsR2FjfZWCjescmXKY4KRd6NTYFQ3w7CWDhpjpqqiHYUgJ4YQLikkCRMDFxB6wiMBfmV37oGwuzNY2m",
  "key19": "5PtwWxbTkFnNKU6DGLakznAUDEFCEeMCwGK9z8feRzUjzBZYC1DzyvjZP3B6REnUwFEqbL2NSvDA5PmMxFtHMeFH",
  "key20": "Pgho2ce2eNjH3CGNtaQSYWL8KKD3V7zhHBAC8StXZ9JTZe4wpJ5HLCETBixNDZrqNChdfDVkfrrdX5dPKqzVHtd",
  "key21": "4Ko44coz9TyqEo5vp3rrSGHv45eDd9f9zqzwiYJvUoet1jgVAYL48V3wfQyCCC19KwHy8JVsa3ztou8kb4cHkSPR",
  "key22": "4umCxM5VFJFaE2LGkNuv1MnLjecER6jQ5SPzsUdS5gYo2qGrbvoGrrgYjbi1NCFhWDVhj5nEzvqHupX851pSxtr",
  "key23": "3ocLcPKY3prH6d7PXN4zJmcYaeBYCp8dT8UNg3J8aaWiobzjKrM2DLhyyCZdzK2Rxv68puVbrGZVjTQG5sEwRvZK",
  "key24": "46TtP9mkij2mcWhQ9HNzzKaMej1wkxBkuvjf3G2GcD6CvJacsHr58i8pv67pa3319LbbWJNJkhjCz7tKimGSkLt7",
  "key25": "2Tu7Fert5jbu9xxpbR5aK4giZ6gAaQVEv6FHXYVGRGYBuMPQMvm8H3cPRGZsr3SMCLqoJ5HQ3tP1fs9eUPHgQEg8",
  "key26": "2bEWtRuVENBNTgV49CxrP77KwDiuG6zeg4ZnrzD4a7ZyTiUjMmyC1rNo1ypD2Jy2a5djwKHsGEg5rrEsaLuZg6Kz",
  "key27": "54hGg8cvXiQXRDKwP7tt7s4VBDt6wLpUfBi7FFDH2wA2DHoMVxGAD9wuovQ1RbSh4z1LsEqErrCLfKRTTWDsnPJV",
  "key28": "623qtX75BGLPuGxSSt8GREFaFApd2T28GW9wMp1dCAgzci5L9GmA3R8rkmEv1jQ9ZespSgfdBMkShSwfPasVRwtr"
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
