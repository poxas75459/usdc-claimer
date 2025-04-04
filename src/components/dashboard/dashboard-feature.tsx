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
    "Y5C74gBT5U2WCdQVtZZVLrUXZXprnkgb2wLL3iUDGPf9G9ugnbmAoXSf3YKUy7YF2cNpArFkDQqZ1HgXmLF8dSG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aji4HF2qgKEQEpNdKR6a5Yp4daAW5SJ5m7sozXkCgp3PxFqe9H6BMMK4h3wL1P5bQxctEKZUA1NUX2gPdVag8v2",
  "key1": "3wdC9YLv5j3XdiW4R6L9Et7HguNZcHrF651ADMtgS3tkvFsjnTD91nXPbx3RoixmoXcjiRtcb5rvebK7Vnww3ocK",
  "key2": "5ACsLvK2FodguW6BeG7wv4N35d2LXuk6wMQQCefTiKHaKi11Eb1s8DuZpdeMY2koRQZZjBSpfHnT9cMWmqEMD9fo",
  "key3": "2iFAycS7n8EmbjVqxVFEwNFq7uUge15WUN4D8SB2yniaxjgdvfQKHHD2c6kgEgLLmetHWffykSEsXDbDp5KRJBCh",
  "key4": "3uda2Rp8r9VAuWTRnCRioRncFjpeQECmsteHigm233tvJVCgMGV73U3Tj5QSEV45hBDaGnyV73fNs4r4jUwd6EUr",
  "key5": "rGwS6s12UysMkmNXwpAmsBQjWtvVsNbmumJP8uzfKtJ2AZ9MsKBenc9KguaXGUNFjbEzZwA7Xrq99ivN2dYK98Q",
  "key6": "4kwwrWdcEtDzjCDQt5rmGX7dtNQRB1C2oMV7hvvGCw3oPGwMAJPvquyo25zCoiPhmrfLqw5vxjpY5QM56f54GpuL",
  "key7": "5uH6o8HtmT5RdbLMsqpkPPFChyuwyfJNNWqq1CFDo49HeRrRDEp7mkJBtTYz9YrkkXiw73nmVTH5pQq6HhbJbK1F",
  "key8": "56nKtSPARKtVJB2BNuLzyffgjF9297Q7nFskzpdwfp85FuXoxhEzriKzh7UmHZsfngv1BmEPGzojKvvdf51oreoX",
  "key9": "2G1KMFDMPEVzYp5HhKVrJbJnESJiH1HoVqt9qowQDEdqZ1TvVtPdoK8bpjafS7Zc5qbHanUUG4VyReQaT5LxsH5k",
  "key10": "1eyaRFcpt5SqUg6cgCjBg3iCfQw8QNRdAdufXQHD5dEZNt8DVhm82iH3AHeFcLg8aW1bKdZKUXigKk9Dg8GBPPm",
  "key11": "4px129oYvymwdL4CbsTLGxF5YLG7pPM99XhTnxFQ9RG8C6YEUC5n6WXyPyXcxSgEKpcAFCyfeBPfMnsanjidQwgS",
  "key12": "5cpQkeYqFwNk3gEMqLixKfLP8xyjgMJxNzPDu3pNdQnsSGy2c2cyv1BYG6F1tgqcrQxirVPTZPEDKZqzbK9GYJML",
  "key13": "2ZFEG7pK49K3y7xkL9QoQgh4LkbfAB9DMeoNpxkR3VxrbLH32owooubhUSoTyKHQ6QfkoTBkjcZRz8qfZJvPLNV7",
  "key14": "2H7tT7wZ2g9MbF4ACjhvuqtYSTQLU57CaRP8t6xvS6nZC5U3F8RE8R56BzEzBaujfqg6wpNtDDPq6sqdtv6nPe7Q",
  "key15": "2sB4cqBRjWiYPphv6BAfW8G7EDNfKUbBgDwbx1GegA4r1QsPecgeSvUYMgSrSskeZFBMWv5h21EjjUxatpVncBpo",
  "key16": "2d2LXuBYb39nf1pADQm9fALsV6ZyRugkbxVxJUCiEvH2a34MN8QXzVWP3eA7qQRi84RuthwMa1Y3qCVJJUAxS7wx",
  "key17": "4fBG5gqXh1sQxX2Wzno3XSRaM6xc2YcNh1kH1LVxV2inJqQAJkGgz4LRbvLtJYn4Nmn3Q8oJR621GEGR4MKLWYEf",
  "key18": "22UbTRhXyA77LPnMFmXHdgBj8YMGHivwXyxfPMhYdDj6XwMB8AuiZkms5Lc89kP9vUJRy46dGMY6U4HearVMY9ob",
  "key19": "WcFBKUafMjcYiUQ4TQexF9166inGNx2JEDndM4U9YswvUkg9vk5qH5yqpmYPGK7vX2zCUeZLBU8aTrPYCyaq9w3",
  "key20": "2hdfNhAvmPT6x7jTNodWTw1duruooDQRNfSHmzRLtmjG7U7JY2bdX6npwh9fCz75fhCeaUv4Vmsv7e19TCYDkVQg",
  "key21": "4es6ftLJ3mHZiLE89ozXi81fQSH1LKzC2bCpJDxi7nXsB1ETUdnM7KWvsK438Q6oUFGP7So6QFc8nYbaVwoi8w6L",
  "key22": "Dd95CqWRXUeoE667nH14E6fmzBaiWsBkeoBqtA5TUKuRGDsTNFTAfSTWGJCpUy13oyQJNBQ1AJvx5nrta3mxjbW",
  "key23": "3sUj78DLxWGgeTJ7DfXbtz7jyskFKewNqwHNg7ouUJPmC2zTTpyCEC6F8QtrzFuujpGQumURMYFumHeR6KwFE4Ci",
  "key24": "4zyyNiYHhy86EPss41Xhp2BU9p2n2fiXjNDb2N63rwGMnFEmQY4PWCj7TbfKFFd8WvjQCcTkdawdD1xiYsf2MB4G"
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
