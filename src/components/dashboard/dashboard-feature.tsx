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
    "5P1eop14g87QypGTaKCw4MdWnnwP6vxw3QjCvcRDZ4eF62fsmDpsN2QcXPTa4cEvnfoz2h51YTUuHhME93tG7fap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3np2bMi36jPJgK6f9D7ZFKRxqbLdVXgxeAUKykownkt1PdDm4okbJBMNoM6oUJiNNi8nwpa4dLLR6ghSLeXgaBbU",
  "key1": "5BJvsVhiiJbr2vQMS8CkVkP9JsGTYPVrr4unmCn8nhzBEmvxnXcqfaKwxoMKcg2Rs8JTrx2m8dKikCuhwSa7eNJp",
  "key2": "2yAkqwtDqE6UkH6HRyJosLPMZ9ks2EFDFhCNPbP8wXz7wWy7m8s6VjRNXTdHBFEWjWBg16gzHr1PjNctZikdEQcG",
  "key3": "etek8MTdFhisLSXMLXEdWiwsekS5E9gKqfmvGgKsZC34jkARPPCDrppZASJeDzfyyTucMz6eT3jwNjyreT6iCRu",
  "key4": "5koZgibYkzTZcVRZJ5zmATpmidLDjAJDLuFpDf6BqKydnJJUru5dq52s5qUzPEbYf9dWLc9psAdG4z25PPp1szcj",
  "key5": "2qkR469g9hKCkC18582bYG5L5rB33PrgGSaHfLWAbXqLnk6ThJ6vdnrUcSjLeqJcVLJeLtLQTgMBKDEKdoApzJM2",
  "key6": "pGZYBqAkAz2iSB2AYEfyF3yJQHs6pm23cusRRFtxs6KT3HtNVY3fiKx8yKGvWLJ3bXdv3QunXnoxpwVKEGZA8KU",
  "key7": "5jn9otMEGFpUyG8o3ABykT313qvqvVYpBvzPrCHFJuXuBuKagxDzBZg6L19QUKm92fPeHSdQm3vo8ApbURwmBa7i",
  "key8": "33EjHsYCQ9Qv9Zggp3BPSao5y1G3qdLa22DDMJPsmHTsWz9CqKJHikvBGD2EssMamFayzT7o5knQno9B2TqAf24u",
  "key9": "23nHaSbfV3kAowzin3pFbsM7MxxQ3Lx63SQaVgSxjM7UhpG8K1LozSJxF6vBLQecWmR1qgfFvYjpUNBDR7FBUBrU",
  "key10": "5qvFmXrgMyAn5GA7yKeC7V44mB5xYCfG6Yj6pV4k1AHP6o78LDLaYodCXSYMfhdvk7e6S8bxVqrC69HEboRtZzYv",
  "key11": "5rKfTQmEsvJLmCSztr1aQVz1QDcmkjGqknDWN8nwEzrBpozCBpshs5Xgdp6QXDFwY9d3M6YswrDaoZwCiCi7uQAZ",
  "key12": "31pkttwnqgzX9cgYrLqZMi6sxYq3dmTtfkxceqRgRoTp7L9dhEZf2JqBpgiLPWhMHfpmbsdWpjKumijbaxeBMRpp",
  "key13": "5t34ZmLR9gnec9DLtFfjEQkMtXWWYDXwAdG83fd5WoaCq2o1xnMMiGkMfkF1HdiE9YQL8FsnPdZZ4GtpqY64eA2E",
  "key14": "3HJMCz29R7CiEzrvcxQ21wsfVwQ3zps1G8y1dS64Ti34StGiEmn3Hbq7SQVMVFbjiV5xKJnaNe2V3mBMmuzYUgP3",
  "key15": "34oUwB1UUbFPMubD32BhXskB7wX6GauNrGGVWuNbGNDrHzma1fkf5pJPgs7LFN6PooH5bTj37YDk57Q2qY6tnCdb",
  "key16": "2wgwZbax6ExYoDUXBKNA83UPHojRv6R6zWMjhodzHDu6NcAfRtAL3EBR8QqZEcArHfv9wjyJphxJciPqJn1CitjD",
  "key17": "dQwWoFhUjFv3HjTmXgRinHbpwnfGwJUM5y2mNaBBPBfVfGfALVjaGQiCj9wPBcQXUWhuC4F3iK4kNpF5edr2zSc",
  "key18": "uhfyKDvqd2A3fBh5hURtfHH5rmHPMRANUcGy1VP7Lykfagg1ytDmbaSgWsjyT2Pzk66NPDLL4o4hJyVEeJFkV6g",
  "key19": "5oPQUW5bCRRReuu3To2QxAX9YtAaKYzhoiZP1zrNhdTGSZzi57jCMktjC3k7i2EeFiUMFCrXchh1t5GG6kf1EfGp",
  "key20": "3iDZPdr7twumQ915MdboCv3qAFMbo9tZBoEC6RJ6q2XrpLc65JfJ895ypRDSnN46oQLzp5uGwdkHZ5H9G7bVK4x3",
  "key21": "5y4E67nbQUPmmUvkNJdcWzN5ZQLAH495CTKPikBxo5B1TfaKSQsDMDLKVS8rNxvjm5oLCU6x8cnNNozmVKdr9Umy",
  "key22": "5HirkjRA16nFzCxn37uEH8ZsHDfAJZkGoXbxBBDrtzBotiJkEMrFqK99wDYjt7Ao4BjGnCjdBxKkFWNcmB6s5nVt",
  "key23": "2idZvJUSrSdbgAnMiz5HTvGchcMkDEij5sYphRUFYowfFmcTRePkutd5XEuzf5qAth6Ui7iHhHmqfVQqHou5BpRN",
  "key24": "5SpMUrgY4u5yx1uij2bckPDWHrHTFJ9bfcruC6TWWYsustyKcY2JH9kbPnAvoHiQd5hAt1CDNw9VEgwEsSYBWFPu",
  "key25": "2RGcjWZb428RJSvWMyMU7tyc25f1WZird1op5a3HBtqKSQsRNDuxNeaH7sNxHHD42DZpnQyLfDkt8qcSVXFZDKAq",
  "key26": "28SBVEEnYpxfeWaCZxwtTGaxhR7AwAHdk6Q8UnkhTsP4FCq1SdSRZ1wghyK8nkJ5YgpYTjVhR3v1NCknJWmDrzQE",
  "key27": "5aX4G2ajqWnUyXviCpdRp4czJfFcirgv8PVEcUgtZdwUNbSdthXcDbzcviceKRQXGCdUu7DoBLjCy8pkJ8jYw4nL",
  "key28": "3XWFsAuxQggpc7zfX5TeUqZf61Bb5ZyZe5N8y9NXb7MSGgWP383baEXK8bYUehBR93wmmJ5Qom3Entas72gL8F26",
  "key29": "3HMBGsfzCz3FuXBFy9iWxkcLcHCxr1NYyJnMpAjKPfDRgTBtkJ4qDYMwt8Sk6fY8HYaguu8akwarWD483VE73FE1",
  "key30": "46wkC64hBH5i8JahpcAoRcAaqzQnLB5AkFE8pgz3XWJLC72UsugpzX5hmecqcWMPqxied2nYUS5WTeijkzty1mFf",
  "key31": "4dTf716WBFMa8QpmQqHMm1oPpBB1H5dCXVJLmcG4viqVvRaDK6Sh7J6WM7vdNa7o5EHX4gYGhUsURLpMDddkgvmE",
  "key32": "zA44TqxjQjRYe5rkvk8H9BQiCwPMNMbnDPsb99VbfT5aUUnsMQx9TNxoTsbM9Qva7Fg4y4CuzevRdvzhRpxwGWB",
  "key33": "2hPk2bnfVPu5YCrxFubQEArE6QY6jkc8cvXR3cDsMFBzzB13h9fWdDyfGr5mGX3XFjnPa6dFC7wWbte1cYbyRdAP",
  "key34": "2sW6M2Ryr2hPxh7ph2NgZ6wAjUoCkSaKFYa1gRzQtviGMpaNEj5k18ACq7T8nFQjkrDgFYreFv8uH3DmfJEtDPiX"
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
