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
    "3464vjw1FD1x538asoe2Z6fxpUY1VE7QcEGaHW7kZdCcMFR6zw5QhKre1CHwwoPSmvxm3RqD6UQGtmVhZHpdYD9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VhWfi2fxXrtQviSATJbEcHbjHJsSo2cGhuXVPaF3oRLsTAC6ppFt7wsBBGN2jMNT9kpBi3ucTGcNVNbwiQnopuH",
  "key1": "5sZVAzgGe5Hrn8seKShJnJRU4EeompW7PoFuwBBDZ6f374Z4XbZ6WaWqqgL5ZcZ8xaYyYKRrumS3CSWtuJXJ7Bcr",
  "key2": "5tzrHtqwrhnAk1k8w1mne3mpMTFeHnT8kQzrDniNX8kdKtovJFV11FUZJoXVEiuEdZDvEkGzdC7yjfE6dmeUtqno",
  "key3": "5agZmitVydUsme4rpCoTchgzoKfV5KebmSnXQfGBYc6PsZcHgdgGFbVrLLmHMvUoGVeXguKD36KMLQ2TX8Fpd9Eo",
  "key4": "4Qe3VDWogx5k8p3v5t5BMiyjFtTxMeoTfiDN3oKszh8LUnvgcmE1jXSWvho1GfhZVSLFikYcG7v3yxJLZy818eWv",
  "key5": "Joh5vWPNRnc1mJZPk5oa1R36pMou3GKo5fu1gi3HFXtL5NFRNK86VNQbXUeHBhWjvsW3iebvJUsVHg19TqQesCg",
  "key6": "QeeQVMf6BtF4d7BhYkaDWzzY9MCvLfQiQWqezn7KRDUsbxkEzxdvyQeaQm4G6EBousnTQnWrNvivycNP1uwrJQV",
  "key7": "5XVvWT57K6X9v3yFWsCRdsEAfGUi3N88FoX8Sixmbu12WpR1Ty3JS6YGFRnnWwH68itTwqwJErrE4rNA1tqqV2T",
  "key8": "2MxBXvVcTTGx5Ye9D962WjDDfBEkqsoZ48wWvEuVWMPeeQrEMHf5f3kTKBDm3mCSHAp26BB42GrzexCS3XVw3fkw",
  "key9": "2Lqw6YzczYNmN2jJ38mpAhGhFDxaG89FYry5C4YeBEhsK5jaDX1UdG16gQgecnGuKgshUr31gs3Qz1dKnMhwpr2S",
  "key10": "27uWEYVJ6mTm2AWuaGACj4ipUGxXK1UP1m3DziRHhhzG8NmYxVE9D2geB9CiYhoHXiu14s85vu86imeqkBjZYwds",
  "key11": "4ZkqnACnCvPDjnScuyjQm79exCCxHJfLpM7xKnvCHi4YbUKUXsVYLHg1mVReVznsP9qTBQTwkXjLMjmFXp1iAksr",
  "key12": "2md63QjiJNuLf1KPZHWso9QYEJhTGpnKhQvCVHjz4PFW3gBwdPzbtysKg2SQG57Qx8CnbNBauzVAmZ6RwjZNMhWa",
  "key13": "5s5eCW3WVxaR5Tpwfh8A4A8iRHqHFJmjz6b2ppLMhEBqrTX4ysFzYAENLH9sx3PUUTYsnpGZHxLnKeVU2J5xPZXB",
  "key14": "4qeoXm9BPdY9akmWRqXjCQbitcTohPzAXc4GSqu4GAjAWaZBj3HZMK7oBcagMY25sxGDhXbHTXHQHeBcaRAAPHpU",
  "key15": "64JgPDBtGtRnXteicBdZNBNKyrFvM24sweszyQSRWikwtvsogYSaTkfisRhCFunYoHutRnhB7Zj8ST6u959UeJuH",
  "key16": "36EfRp4svMPx9CsPJWm7FztPaHVibxjzSKSFwF7CP773bXSdxzXcyjLCCwAiABhMwQYHkgKRKruFMQgufbVvmrDA",
  "key17": "5qvboKetM6gye8hbhE7h2qZEYEdgZoUtwUYpkvXBuZDnXdG9imgfmTQwB9bjeb7TnMhamYZ5yPP1WSAvxrsVi2od",
  "key18": "ZpF9z7NALhrrRcLLCKUp73qgzXBPnaCQrJjxYebRv3M17eC7meZhyejjNiH5ru3fNmVv6hwHVx3i7ZUg5n49VNB",
  "key19": "3sTR5PUZMbGJy5dDQAza59Xd7eHjA4ifP3XQ5jrStg7Qj5uQZKxWcn11pzrsytmNutwdFfVMnKDrEwVEnPeKvZ13",
  "key20": "5DF6EpqqjNV8m3MzzgqDxdtBT9LCKRZ6DMcLyCWDQuAT6zbf6wceerRhxx8eTCv3wgpKRyqVgGR5YEcK4jAMBJRH",
  "key21": "2BsJwkxUKKAGM8jWmzfYeE246BSqHWF9WtX4dDW2QzFj7712QG7b8TVZE1eZbM8bTsLTDECqJ3abTevEYRKnCstR",
  "key22": "nijFtVBJpnXD2Y88Pk4aCewFd2kPV7TijwysF1DqfznmiP3156CbAoM4JDL1oZVY5iXYNgi42m1Kw3bdhwxsiBY",
  "key23": "3WeM6K4SvKXL7igMBaSPWr24i7Ewzm1xULLMjSpfJWmj8pBCKJxYxJzZethkyy1gCWLbX9m4YzfoooW9kJVtg6nT",
  "key24": "5Cy8YMWZh6M5aaFbdvJaoDwbXh3LWneyqYgutVgKREtdsY9kKdQrchXK2KjRoeRvoWgX6UnoQnBzZF6R4sTactyM",
  "key25": "sdn1qf9wggggHMepbBgeXYF2YwSzeZGFi2tM66tXu34qj92ZuDBPKUMSq9QX55yR2Mo6xbsQjPvSjKqasCqoWdv",
  "key26": "CoNBoEMcnCZgqZgcnYarpPFazZmA8FKei74BjwejDbgMobq8HuCfZ4BL7qezNqNcZRw8CYewAKeGhLG5Q7XD4Qs"
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
