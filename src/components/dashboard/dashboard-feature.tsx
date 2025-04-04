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
    "4gorojbmjYjtjMrRbZY6AGQmEcjPz7qU73KsRGJEVYVCpASK21m42eC4e3qj2ME2fujDnK37mca24grwnovR76gB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ofWcbeYHjfQgN7oEvVJeZ2CyMfp5BmtJqsNfpSNudA2ksQ6pAvVWs9sL3Fmx4zK51Uk4djg915wcQWucsJGPAqa",
  "key1": "3F6UgRaWjhVcrzZCsCqE3itHq4rncXwTxxzhodqqWLyKG4fD8uGyE45LUbkr5cZqGzZsXN4ZsaQkpcn9YuvoiRQp",
  "key2": "zHqWWK3iKURwGfX3XsVMjWahWDzgjhEeC5NRnUfj91A5Ti6vETsJA6YecrLWSrudjX3Co1RGBxtpWZMxrC5cm6v",
  "key3": "5eskUXYUzGjrqVrhDvDaeqJoGNGTzLNyy7BCHJPUXY8GrTw4sve5Y3WTShonH3sMD2nr7u6Me1LeATWoyRhiUdkw",
  "key4": "2H5PPbXSyUSeTu6jeg3xVEmBzPEJdX1Ks83zd5inaGiZBdfpVaVBp5pHU2a9qf2ZLsPhRGswkNkHiAS14FfVDQ3i",
  "key5": "2CaorzDDNgZQkp9kBcX33MKeBfv69VAgm4n2bQfG8RNxYCYtJFJ8YcDYGuPmjxdRudS7jDEQVKUK7ACV2oNLwoHC",
  "key6": "oy4j7U6qVXb3Nkgyayfz4soW6eQD2CjdjAm9Tj6aNNvsaeaJKTkYy6rWXziKmeg2d3sxL9pmSMZA8CiZTXk7EoB",
  "key7": "4VqhhY935pQZirky1HbF1oCwRCWizDoqYzRBtTwEPKmnyqMmQPkp2U2RCoLortq16HU7JLMVQn9GWW32FiiMtEEN",
  "key8": "4M1nhVytoG9mSszfndBLhAx2FnTepkFBrdSae1xUTHMssqA1iZrdRQdkUGVHynrgEs4ffygxhG282MjerzJjRAzn",
  "key9": "4oyYxNzKcYVkS9CxbzQmk4xnpkK2zq4ZCZRggfUeQY4xVLExQVfhnqkG3Hc1Njrp7gGoaQQG4UDotvonYnhTBw5z",
  "key10": "bhmFQGeEPcfzqsXyyofXDBQ354VKZ5KL9zMG2CPLSAvrFPbPvDZS776pPymRPboZbWcdjZJ1eQoCLi7voZCBm2X",
  "key11": "54B7dpL6KDHVke91XnZmcKhVDeHnoEdzKWCGEFBHQndumFYs4E8Py9pMumP5DFCFRmEvjGKFyBY5FVqvmmo77UFU",
  "key12": "5U56kz7QmWdDxERdTb9ZsU5uaYwqYwM1qk1vhUY2pwgdPcyU3XcswSNJeNn9khJtbTRhBxehCNjGqcLiLhbcVsk2",
  "key13": "23GaHuNQteQCaMPrQPfMoCy4cCAEfk9VqrHHDJVUpGTDqR4nwvZC5B5oqnbYW6W88dkTLFmAPB9pqNPN6gKSrMRE",
  "key14": "5obkqktbPSkPfuCiMa72RWPSaj4iySCxLL2yi7LXrabY3RLbbuf8hron8BncByKiUP6Y6jnSBZnbBntAvhx3deFX",
  "key15": "5e3oJiBusV22xQucFJiptGhQFGtAA7VTmsne3gmFgU6nCoJMGqF1aaDXDrTZQdWhhwRVXJaeo1k2w2fdR86gZ494",
  "key16": "5mQW5MSQxWgKqhEdwxtnzewVq5Ropxb3ozZgmt5qqXPwYkfFuor6o1sk8wkNMyrHAWwceVueQR723RRE3SdUVZA2",
  "key17": "2MmQC9TSmm247TPbPofeU3pbbcRhYChttAVZ8wwWxMM1SV1gjf4QXK7HC7EB1EZNbQN2aRQctkHNDmdYrAGC3tuK",
  "key18": "4XNYkZNXKkYFKu42P8GqrjZYvNiC5em6E7zPVCvD7sA3PkutyY7L22pozeiTSykkzp27RGEVDE6QZG5QfcMTnHG1",
  "key19": "3aH8akTeQVRpV7EMaAqxnDiyqoptevvapwrjamFc82qLwCLtaDwh561hL7mKQaTpdb9Dkq7N1yedNiuKQY4AuHL8",
  "key20": "c2i94KKPFknKHUHHN6m3DEmeDErzkTRWCKtYyg6dvjHoxQv1i8y5MBTRyf1KVGKYRSV59h6NpM2oiuDotFbcJsP",
  "key21": "58xR3EK9PRjGrZawqga1zPnwDfhDxFCzXtE1TLQy31CC3cHC6i9xN6FfzQn5pVbQyybcUHkz6QBSkMAyhAwXnpfm",
  "key22": "3t9pBeMcfUJAs3CWChgLztD9QCE5ZvpL8w3Hb3BwkDN2a6jXx85vPioYCscJcA3ZfrUkZQapFSGMn9yba6VDorQn",
  "key23": "23zzr2mZG6GC576oADs5uJGp4RTwcpRtspq8e2bwk5ocbtKQDvgvGKXZhNuhPbvVXGFuvFSWhPrGnRAhqGTb7GHV",
  "key24": "5eLgJ1Tkk9VuYgkRjaAa1CTXtzvv3zPxarpzukKTRQSk87gd9toXDP7jYYK6tQ6VrWGjNBFSUUV43Yvqz3aegna",
  "key25": "5jj3s1htsfq4T4ULFTBrwCg4RJRDjtTHeRKW42UkefNLs43x5PxeKXVdfP7fvhaexCgWEoYDMotJRT9tUcdF8j4o",
  "key26": "61wMJFdUEoKMjK1heE2uZLuawUBhER9D3JfFK96FQK51MqDVYS4ZdghonZHssFfDMogixpfxwwSWqU21dn4bLpNx",
  "key27": "43HY9RansVTCj7rRbfpsudFvCzYA2G9miwUc4LiRjr5XZFnEy4XEqQYVnSKEWYrzmgdsDkwXiunahWfX33RYsUSF",
  "key28": "4RGCiNRj6sFqLC4ADfQHbi2XzAufPypmCiZYkznoTM5Lt7SNy9USqCcYnEHQKqvYjgaTDQPssZYaTEDMS7PaTJaN",
  "key29": "29sTPCe3K3qr3R35awevuGs4m1F1quUnhqURsyiXc2aiKCwXSP4wNJP3kXmwSz4HfYbSHvHLgT3hDswYwPf4r2Xg",
  "key30": "5zPKPYztyiLcdUqEgGqqdkhwRbU2q6ysJbQBUHXoBNZCE1qyEs8GQugrfYbRMzKiwCBuHDa3oUAWD33b4CrFdiu8",
  "key31": "3wh6SYqGKphoDv3JaXfF3ixB5DubJToQFjcDYFPfNh7CaHwMxy5JcmBBw76bFLxcsGewu59KETEUdg83ZQ8nunpc",
  "key32": "4zNmLQM82KC66nabrTh3sLuMFjj57E2prGBxVNW2hdBGE9n4wpu6H5qQ7hZVUWeCz1WeifA3ZxccNrLWfNScmPA6",
  "key33": "3G7tjWELyckEpETC7Cf8HN7Lush7vS7eQbowB9dwJcKYd5RHtWGBCDfreQg5pq3Fe1zG5GrYeAP7xsRVDFPd77xS",
  "key34": "48CmGhkn2UyXm6rcBribZ7jCk6RwPnxCfzwkXbTStENRRmpLahXLJufHVjiRWCcouBiaGs55uVm2UGYmevKjXs4K",
  "key35": "5KhkVf3L8JEVpUg4iJyNbNvNDoreuYp5iV8eNQ159UJGc4SsiQv5zZjY4fKtBSBScRnjESe4UisoEEwTTkAZfCZQ",
  "key36": "4HboMF9qZJNGfpjDgYRCYWk4vHtYkrRd3NCP75QTUGYWmajAMckq6wg5gFpZzBePuTTm7zFD4Pfr2FjKc84mEm47",
  "key37": "3Sak4jaLbtebJ4uKsR6HYP38mYtuL5BmvET4MFDkkxXz9Qh1GTtXXr7UxHhjJxLTRTsYG6FkT4ojHwyoaap6MmKF",
  "key38": "5XPsJsS8ZsLstTjYJQwvpcnAxQxGe6gH43VnuSGZp2wwekzUeVU1JCUfdfmPUPo2KxTqQZpEdanki5RoRRT87pBd",
  "key39": "2FyggXYtBvJtVvkYCmGRFdgjT1y7nx74oVqELpcB2MQoadW8Azc21iz5SsUDpb4x2UFNjnASxyfFDbnwxgMQFYsa",
  "key40": "45W1V5EPT8tZ7cdSVjPTtuvffw1jaU2KBLAaqfZURzwKwTkfnTWhYm2QhbcHTeN7BBEPsc7DW1SCFWNBaKpG8cvV",
  "key41": "5N2VqHgXtdJ2nRAy9bNUtswDVDx4xp3MTWmGr5aUeLGadAj1cPtVKwaFyfkSUzNih3C9m6HMxrmgfYksmscbtMis",
  "key42": "wKeZUNWKuLNgdWE8kU7SUnZ6Nc2HUPFLkhFY7i5qTGTtmGAP7km3GRRAMaqbnTVcp1gCZTDCXar5USc7KbTszRi",
  "key43": "3kDn9t68f6A5pAxTVJkgms8kQ9pLCXdhjgMgD9AzDhXhQHbECjt9hB5e8DpWmAQn87ffdWRpydwtJBRkLjzCbCx",
  "key44": "4knWU8GnUDD65q3yRSPeWjnvB2mYKWjns8qzJZyL2q1V6q4NhzGW1X5pFp9mGypuHEzFEx4ZBGBKbKmq2TKAUDPX",
  "key45": "4DdbdMP5sDULpdaWypqzNVRoqDwxhcRW1X2iBjRbjN6E4gx4BjtfB6k3UwhyhcUzksPsHBjZZseZusE4rVhtJkA6",
  "key46": "57mjtUfRTo9M8CtHbucvMeGvVds1qC5YdUEuXnUaJeB9r6pnQw1wQtJikv7NJU882JW5ESTPxRYJdjussRTHGWdR"
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
