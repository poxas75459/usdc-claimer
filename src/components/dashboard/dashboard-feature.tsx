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
    "jUq7s44YsscJJvQLrDGSA8pcWC38My2Va9CRAEe1r4VDcFkrg4kv1sMGTtJH1jPDZ6xS1LGLNF4XoPhPvQbH1Nq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AVLhC3WCV2UeT2skkQV87kf28Z1u3arWBSVy25jHB4EW4nQiFtEoMezqr5RQhMWdhDoEBS5NDaR2dMFLAjaDUYV",
  "key1": "4SRmNGiDLsgEfCrGT6N1Jds5oUPT9Soe1wwsaGd9qEJ6DftDTXRhzn4kMKN2Ptk21PX2zPUWp4pd8MP6vvddB1Ft",
  "key2": "3LB2kafFTQA197vfPJv571VsX4JLTMmdW1ZzzsMrTXA4iuv5E3wWEWVDbLVNz5VtL8TouYR5ZmrhrPgMoYMttbqX",
  "key3": "5czL9noZqYpFxcmSDbesbQ67fAF4qHuKS2C1CD5vhDY5scYVPEEmt84ZUhjzSnSXF4n3BGtX4cvxs1UDz9WvCfrP",
  "key4": "2GCwo6KqLZRDRiC2wmSW85uJeNmDSku9KfGcCFB515dF5G6hjcUmxHdQRGmgHvjTfpFT9cirjWg8DgCpXwnwHZ8j",
  "key5": "3HT23YdoVYm656ws4g5C7pxaAWxw6L2H2yZUdRtLDKnEKzDwjNEfhkAZ7hKjHUVBCJjcYWQdEk1g9HjrYd467WTD",
  "key6": "QL1oBSKNSDpnMSN3TUZobjk4crozDbLoP8vCFNPfMjc8o1vHVWNfhbjofky6bvANnqvTTNuwFdTbw3Km697dtPy",
  "key7": "BpqZQq3AGG1Yf1mGjYvvfC5jrora78rY5ejUo3oRLgQWUpVogk1dbQJD2F7o5D3EPz8mZNjRr9FXubyLUZoz5gN",
  "key8": "n8c37i8UpWFNTDyGXEXLypL4QAgwhykF8gWaLUavtzhHD81VA7W79GVyHLAA5EFxUEzt1sbM9MKaGfPaTv93qxi",
  "key9": "5VKcmzMhvA4BsLD4KdvyEvrLKshSip99R3D4fPQ9didaSHSmy7xyvDVDcgQSMTWNgghcygKz2uW1C7G5n2CJ57HG",
  "key10": "zB9JsN9teG8MnPmqWNgLtKskLNavFnFC2C368NV62jyLqbqaDTjYeCYxjUREgPFxX1yJEHZSourYVu92ct89mZj",
  "key11": "3s59NjqGygYHXBeDiYfwrjkmu3vDAMgUX3LnPNHUnveCg7FcioDzMJiSwxkc7LnhPLEU9FJQTjtUkCa6QWx6JbvT",
  "key12": "5DyyffPKQAhifjEJAw82hi978b53duRth8TmMzsGbV2gnYnCpTs6pDYwrFKoXwBTbtMkRjfT5BDWwLW76Br7iEoJ",
  "key13": "4m45K1V2dXwFvANUAhw9qTnewboGhTzhW3aPudKPrQUXbBD1kv2HvApWJHVasqM7tqy7Dx7wCwAMSgBhJXZBxWKL",
  "key14": "4mhWJMjcjj1NSL9iYQoqQP5bYrXuFZvLckp9HQ2RmBHs1o2x67b9DreyzqnaVmfDue33jp5KbgPcjry5uieUxQVR",
  "key15": "3kGvxnqeU4SDRhXoqUz4zxyRLZxCABsNwj75A6CDppt7SSTk2iDLJvZL9pBiB3yo8ZDrRSi5ttvpRYp5k7GcfnqL",
  "key16": "5HxB6HH6hfDGr5Ndo2GcT9AaAYHcA5VtttfyQgA1DeF7hsnfvnZJEQzXkSZjquooZbF5czov4igJfbmFA9HgVqPW",
  "key17": "2qSne9qXznh2bctEK7iRCdtUVe8SvJUUeanwwUKR56obbmQMnDgq6UU323PpwnGYXQshGjRwiFFcpQhWDzsLDrV7",
  "key18": "2E1AqpT5Lsn14tjzjCtVyaEAPYLcj5TetzQuRjeFmWj9aiFAgnsb6jdaVsxHuwusoA5aoLEe8cq27ngEj4kekgfp",
  "key19": "4tFubf4hWxhR4puK3wWp7n14HLQvMqoy1HFwaEhy7Wjp79dMuwcz1v2qJ5DxdSBZq3sh8HTCiFKQ7UGr29yb6wQu",
  "key20": "sVVyEyrenKfcmEdrfnXcjo5bccZSD8Ksxzsr7cGXfUVU8YXeg2btbxtuHQ9qhN16bNJ6MFAWFsXYWhtzGx9r1Ms",
  "key21": "4PJaDSPgMN3xwT9fiRReuYX1WNj6QA8GLvezWzXuuoYekm91mqSApgCMM2bpstRxShugNRgDd3B7ComEfVnXUEap",
  "key22": "2jHqF5rcX262PhX8xHpZjF4PAntzzEke65gHu2Ry21KtT4t6puXjGh25ygQxJkW88K8yTSdx2DVGUbsk3Fu3cRxZ",
  "key23": "39X5bAcMrJGtZ2Y2FS9FkaCpvR1xCsuxMoyqUyiysWLLK4EoNVkdmsEgNeKoCB1DbtnmXw21eLwwDRcFDydUCXn8",
  "key24": "4a8EnBFMe3BKGxBqE8EbpRtMHbgAcLNkt6h5YEgeRrDBcWSPqcsCGgqTVtTEgmFp7Fqk5sCjEXHv2SNoX6HgF4xp",
  "key25": "3qakfxmbxqgqh1649CALAR6Bwo72PSsmdU9oj87EddET142Qokqm59joXQGM3KU7nDyVSZFZixgG9zdPSvttE8Zq",
  "key26": "24segbUBJLSgURscuWqYCSRDkiBQBViyd9TyDipFvcbxj8ZjQXBAc9XuYHTwVQre2vLiGkEYi3f3hdTyWvGCuy75",
  "key27": "4JZDpzdH1DdHhfAJtetfMLAKgEW2vsMmFh33vH53TVHFmgunEwdoZwBXGsC121LbGUNfmej2JWBbUswvVxGvsno9"
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
