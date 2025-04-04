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
    "3C3WPjkEZBeWcQKPqqas6XR8kewE9bvRKAraEpwLpNNofLqHQ5jiXcvQRBm6H9W1pWarqF9PgwAGjeGvj1xeac9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BeaZinpdNKTKTRziPuuTv5pdmNMuyyBwVfixT5gDd5mEcqCXR79P8dDRziqTUoQHK8xBgeHkj3t49aLKmmoj423",
  "key1": "3PgnpCzXoGLzoZd1sxzq4QK6PZadK4MSUFGQ8egpSBKQoVgiYw9MoSHrhmuYADQrA2HWXoSvE85w5ffWC3tUvRSN",
  "key2": "5VqZjpYBXJ4SfrGqmAThtLfLj4GkNLiBeGnD6pWE4HWngWhwoEYQvwEATPEm7La6h2bCpNFjJhDbo7kcDx41gs9C",
  "key3": "2GJvaTfK7znhMNUCiwu2Yk8Cpap5nVXtzdc2VDPFtaf67PnKxokn7pbYahLrNDDzAHoEcLHuuikcXqVq7TQMGMbu",
  "key4": "3oZWqXhDuPVK64ZUKQmeu1vskS2A9xKXgz5D32hGtYNz86qg5UBYc1YJYfdG9eEMC6YyWjv7b5kxSvWRdubrA8EL",
  "key5": "4NUaMHiYdDb3zF26GZXz8VwbDLctSN3cWmPmkGGoxVBMfNLVyCZjKAmoYht7siyraayerCVqW17vUqVPqwmey4fp",
  "key6": "oarvqCHtW6KgV8EfQAKtFnxg3jaDBpSyhhn8CWGGsei5FBLDHQx81ZEZtzKXpquFmvSRmPVRTV24QTYiSqJ1ShB",
  "key7": "3nvkS2CV491YKupG3JEfMdwy79QCFTQmZZ4sfUUTpAweYf86dTA99B9sQDD88BeHLj524c56TsFFvaccGwsJgpPR",
  "key8": "3XsoePouWdyKppAm9JbP1UkVzTcDaGnkRZ5PYQYscns8oafkVfMJwZnf5AUbi24gHzHnQjwkw9PmqjPYhVziNoa3",
  "key9": "51CPUtkQGVubmVscWADaYpR4PWCzMBUsT7S3kwRYWwZirszSPHcZDBtXhpWWVb9uwwNrF4tGhJh6EKrh4JkVjkFL",
  "key10": "4CRJFKbxFE5xknpCPFSmQquEJwZoeS1icNWjBKNBTRWusw6iTrH2iTFVT6MPL3s8Xq7xNx1W1P76qQp2ey8nSs4Q",
  "key11": "49Q9NXmmXoJscqnkDdv8sBWsuWuPdkxZVqA1ikdkS4dqSbH76aufSiuWBmAE8Whz9HKF7T9zf2HgcwmvT6UGfQmd",
  "key12": "3A3fg4zPVCmB4zuRNaM4TEEjyXEapjZcjnFnVB3VWDopYcX1c2QBgWb7FoVRLcqeJWF9NEKu7Z8NBMr5Rn1a7cFZ",
  "key13": "63H3jvRgdEiFynq8eViF5NM4GmDSzwh5WYoFSSkMXiEHmRCeaVzs4vVxVkp7p2CvqEYsrvHjxKG4Sh9nB7ka6SMA",
  "key14": "nmXQrFajGzJqF15vgS1ZHwtNnjNcwcKisALYqc3dk3mWXBTBqD36wnVT3fdEQ3tn37n5RLzEE5stCRi67WajQWB",
  "key15": "3XndMQMNMbmNz5kTd53YrpcZLzCp3GFsg69moVKobGqimgAoDDyzWer5KUoWqa5mjLojrrobmNGrqeyJBLoewx8P",
  "key16": "629zYt5YwYfpymuQeoTYAZZvA7PVRdTrTXgtCYaPKxm8wwFqtNNzuZZXvF4qV3A8DcRq1Hc96QzPT6ceysnGpYhw",
  "key17": "5SzQr2AwutamCZk7Yn5exYNibEkzSgVdbmCF78cbChumPguaL4EJQDJSBNP1FnkiApsYVH7oa5kkRHcPWwGeHL8W",
  "key18": "48VoEjVZD1sikrMDbwQ6KPcbhDpnWr9a5EKcx8E7waE7ueCjmmWCkeGQttaCM77pn7qs3fGGgXcvrc1uBHEYY8f8",
  "key19": "4JHbNDWHaQkSiyrMsffqHG75p4FeuidVwcdJzM5ZMkSikV4ZLFBGRekJkuYYKetX51MVNv2ta7LkPmRB5CzLFrfV",
  "key20": "GMqnRxY5adkVdxW43PmMppj14e4cvCDeUebJcVK5dWgTLctfoP8Y6ZWTFU5UVtCDGhs3Mbmp8a5XHw54e5ZVDE7",
  "key21": "9qkGzcPk7oBoJgy3Ha2n3ZMTt5n6WKAVhF3DnLoVotAHnanj3nogio2ZYShkUwUwfGKENAEDJ7CDsaUPxbTpy7Z",
  "key22": "567VAW5CT3SGdcUGZmpEfENioY8SPr44hbrUhDQaxdTB15BjRYAuAsSKnFCGHwUJug8CuWE5uBtJ7tnwSr8XMpdu",
  "key23": "aUKbqBDuwJhxfFDh9iGwqXPtDBt5j1SeSmVeLh41jZBvdgxrjFtB2vASpvtmY7Ex5N6Ty1jrm4Egz24CfTAC1VN",
  "key24": "4rHFiSwgxDVRdDLdxWDgA7ufmB26QTa1MHQcjPZQK6e4EW8H55fPcDcELYpeCcKAJwHAdMGS7C1ojzGEsZqoxkkr",
  "key25": "5yz5RHWY8KwZjyfoELppnZbWGDH1xAECFd4PyqJmrLsCbugqSJpVJKiK7SDiKqT8dAXomwyTUhttfZNoeq2hdW5R",
  "key26": "48xYdJK356xpcoHwq5BTmZ7MCT4MNcoNpXm25DisVevaV71f6j4M3Bg4MDff2N3rqFrHTuhTU4fhzzLb3bVz6ug9",
  "key27": "533fnWQFHz6CTnPXTaFX3FmgLtcCk4AugY76a9St4yDLNd9LnDskuyJNuMD53YWCmagHMAqduFkvLaoEywm7KskX",
  "key28": "679DhynJrDxFkMWihXnxRZPWuoozHiCciJ6gBtfzMpPKdWx8sbSdV5TU3WzpUYyReUfFZgvwJX3BjkPYzqTPjxnR",
  "key29": "4qUqHodggm41Qjfj6iKWSEGJ8AG1Jn2mwKKs5wgJFB7rHgWMan7dFkzUSPX5foE6ZzfUFEGKEkGkET9m62BgtdDf",
  "key30": "52M8j4ydLHXEhPmo76xnvs3YrEaue6bmrdhfXyyi9Gr5P7PpmvbizuKt5eAAz5x3eVJVrhMoE5VJPFbE7iTCQ88q"
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
