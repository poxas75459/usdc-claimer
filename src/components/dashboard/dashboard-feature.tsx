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
    "3H6Hrg7BrMSVNkPNuW7wYaSQwmfaNFBcSQWNnJnZgxPQphogfkWMn8pigNgCoHgigstQj89x2Fz9Qrs1PP8qT16K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GKWBCraAS78kaQMa2FMcj6exuY53YRF22DsUmQCtiqSc6f6p7PwYiLmuUJT9EFo9x1xTVHnCLiP4QhwoBrVrVZi",
  "key1": "5UDnb7GruNVsdH2ZdtzqaHKVehcrV7pNCGKUMq536fo8V2SsjyTmdxfrKK2FpvhxDGraHs6T8Ng62GpGwwKsVPP9",
  "key2": "2avieWEcMMHwUGFtCJsHHgz3q1XwxmXksf1MWNNeyE8jt1FzDkpqtCKu4RpRHfE58FpfxeLqSUGb2VEBDCaVTWCp",
  "key3": "8cwwwHBwvPCeidTTAL5Wxm1mZezNhZ9bEm8GvFYKmzRwA5eec6w9xZufB4bVtifiLyoj8fRSmbcRKEPzu33cPWG",
  "key4": "3LvdfemeGRRwkCn4rhc7eshb1wxiqXFDmt55MYHFZm2BVhP5wtbSi9sJoyHBZ9G8e5xzv4nJFk5rYgXJ2LnbZQNe",
  "key5": "5rzaXfYJBrASHgiYyjuM78SXt3ZhLHW65GEZDEaLTW4EsMrwzkaFgFn18mgVbzgbCWt1qK5xEFpVytngJNUdxBm",
  "key6": "63jNb8ZEDY45FUgDgDkJzuRU9Z5WV82LPdWwDeD6SUy4oQVkZuJgXE4N7kbGHeQmo5Zf9ECr79Du1aZqzt3HmHC1",
  "key7": "4heq2mBmKkTJHfdgsdjTV1rRTSqChnCiKt3c9Y4HfDwLTQSVncRhm9d1j2u9aJM7gUBBqiiPzYuQmWVMSTwDHD3j",
  "key8": "4eXH9mi44gmR5Corx3CsnPedEc47KcbSLinh4E1czcjA963mZG8D9izzG9uPec8P5TYmmvUsNM88u9RcNhCmUUfH",
  "key9": "2Y9rHXxZhJ4ApTCcpEBdjwpaVv6k6WfGcn4d4FTMTYzW79Yc7PkopfKssV5p9CXLYtbWPWiVhFCNjbGWqcrntJPH",
  "key10": "2pqPgW6mEMJAtvCs7PA1qqUCRGAfBjPUm4a7LPBfzswhdYSSqsoKk7qCuD6wZJ3LfScwDfMRXySr22gAKQD1GVLT",
  "key11": "4KZYf1pkKkw1xVbVDN6fiGRzSuwoxDYScEzPcFMxvFbJSuWrSG3fcHfozcvGYPGr7q5ShFYwPi4rKCBV7E1g7jeR",
  "key12": "2ikzqcNSB3CKfbotaAR4xbkYJFWqenVVwNwVut8W7pGP2wERK9LmPpPP9uUbJtuoeLzGfLhFitfgqAvgCMjpn76Z",
  "key13": "v1x7JpxuPX2FxPL8cG7STP9NjMzfPM2msCd9JevoWeiqn2yzUvAhq5VWpKG6Vaoco49nBDxa6ZxmCG9npXEgAdd",
  "key14": "4UQDwim3JB4Lt5EDgRmTrrkFz8i7tnMNQGK4gE8ARUk8nyCQwLAHT6ccjhYRTtgk3iKb2oBDN43vhr7UehBPaY1p",
  "key15": "5iJSEcHS2CN2BNoHMsVGo5iqpQCQXbKHwSbxSBiS1xCh35pCUnzv3eTVVfnVpbmSijrvTjP5UcsVLsbAmVQaUC2N",
  "key16": "3Rv5zHYq29sToFQNveDrJnhSHqSRotnXzobQpEq3h77f8yStZZ8uZQYSub7sFzrWUwMyQAzEywNivj4uLGKjxLiX",
  "key17": "bZcRkkM5w7DCnonwxU4WHayPnXjggVaTCUDmFuNNJNeJhbrLFTEGFao5AWN9getuVt3B6E6PtGXKtX5ejBpF5at",
  "key18": "3mkM6xzZi9UtfhxgBjyoyCPMYNf8W6K9frLxCRRzxFVGoLFvT5fP9CMH39WjTFKEfmTNrVNEtMRCCXpznozrXfpd",
  "key19": "8vJC2XzW88gXU6qdgRfkAB99uBpHTjxmZXZ4bAosX66LeCGR4oh5NY8VRs35bNPM5NfxAbtNc4H5oyGj3KBQPZE",
  "key20": "22EPpJ4dM1aALx6bNrUpAZ2gms8MczJiejm2DCHkun5J3XrfkoARicFQo2z6K5hzD1SDa5acCnpLCr8keCz38nBz",
  "key21": "5MS44h1tquhG5Ak9PArqXepAR9EVPhdX1UGmAjjW4YyZNdQknCnvdeKGpsNU61TEv5hWHDG7fc7xBkMBES24912o",
  "key22": "2vGJ5FcXMertDAy5bmXVcoQqBw3Y3maLMQuQPS8VTPq5fikxC8JqzpMFcCtB14v535FXG5C1c5snoyAqBM9xez28",
  "key23": "fpwNfahy7GFMEw8gND3SrV2v3V9ZM2eVJaeoLYjUCdqFRPbLMcQWhGVPKyCB6Hy8wnvWfN7U7k18AjrjXvCeakX",
  "key24": "4937RNenirirSZGWqrc95XUD9UsDwvd9BxGKLqVVRxfv3Sz2gHyH9ckbqB9YMGD6NwU2VxPQbJ3Hpjy4gKUpuHdp",
  "key25": "2W8PftqTedwSnu8jDBu9eRnrjMo1tBBsgB42FbN7Gzbgzct4BHZcPPyqYW6Y5wNW4ZXr3B26P59nyoTDiZqkbWoq"
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
