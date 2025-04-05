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
    "d2oRqGF1kWpCD6hmuErVVnHBvJiT4PLHLHqZXnbuiXQHyemkAdFxK9HwgmhMspyz7wmjeH2TuQncD8y2BRU9BWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zPKhcJantvBVsj7ywXnHyaj9eFLPgcL7ma9cRh6JHx1KGxw2u23ShAS7brc3yt5oRivBorgNyXnLdM2WW7Nznsj",
  "key1": "5T1qHPn22ZxYNvsC9ArGaAd2WitBnQJhZfdmmrVvdBdZotzW2oMqxXaV1QvLYRoaqGry2jtvP6UGRa6mRXaiAbCQ",
  "key2": "3L1wasmvQi98ujssd7GFsxK4L71Jej86eNTxBBvkn9PQJQc2cmCUk19qmSx6M15tMwDztke9VFcnQk6JbDwfSaHV",
  "key3": "5oW8QmnXfEvpG2vjWQEXVL5Dg1odxKvdF3dyRQ716XUe9hmMe63gYhDZDV8adQBtCFNDdGVYkL9orN9T4Yxg1Fg2",
  "key4": "2ad4TzxRyNxxif2AGZprSxuCuypvv8tbDhcc2To6wknrbig4iqDVJQRReHWCrCBFZ2c2b3imgP7ChSD4rDcYVaS3",
  "key5": "5ZmMBSL8iB5VUDvy3W9NQJvtMJHMYDFsGkNroNHuMNiov5kPaE6hZwhdyeKxuKSvAj2F1nPYazMD4RtEdpSWvvah",
  "key6": "5ZvD2DuPCKuvYdWWvnVxGtmdAQcihU9KeEomibuEosTooLKMi1rTfY8QrtbgWkLbkoZoAuoe2KCkiWKoYrh66yu6",
  "key7": "4PRSKqptxC3LM4pVpkFtisB2qyui6hYCmKpa5ExPNdkM2bWzzgVjEhHdhREYxEFJ9L9dadNXPVVWwsNgytNRsSLj",
  "key8": "3VseaSDYxtkxsQQVNm6yowgxArhhwayv5t3Ekw1DJk66R5W2mefgBf7Dr6WPi7oLTtetJRLTBUWWxs1pPfd7yUfc",
  "key9": "5ak2nX8b1q6MLMrDmm9BcKK3zcFS19MoMPisgvSHpvoYAou5Tx3PpLExPS347ez243DhHKULLHBmH4qvzUXmrxem",
  "key10": "3RJ2Veq2f2GamtnU4mXK2hqbkNtCPNjm5NcKcevg81Q9w6qFYtq2dBgweJCQK8mNqQh4J2bo2EfTuudBtMMrDxAW",
  "key11": "2tCDUx2uV2JnzJkAB3akr5MLy9fvVDbbAi9xpp4EZnt1CLtYmxUn3XsBY1eJQF5c2stxQG3U7PygJ9VTuqZJP6Ty",
  "key12": "WJHABVA3Uen2U9MpTKvboYsK2JnCy6Leurvcnp2Rme8jiP954Lo9dLBqGp9Mhp9MgHwt7vywsctNcW7jS3PVn1m",
  "key13": "243CS3K2em3oDr5ZMKzmV8eC8iMxgUx9tJibYnqCdXDq5BBBkdPUADGYqikPThhtFdWjukkTv8wbgq1ut2MBZpMN",
  "key14": "3EadQmKaw2XfGUUqtHNFgC3eACxmEcKdFvDHb2cYJPNNXWMsdyrw9LbuLJRBuuoraZa93Xi3VZN9fKmFd4Ge4KGE",
  "key15": "4sZ3Xo9uhkLzwnJNUii7A91XtQwnfN63SxXunZYNB1ieoMeMuW4Ye8WmCYac9BDNAzCMjJZ5zaQfBbvcK88pH2t1",
  "key16": "2w9sNHvJeSJ77f9XfcoYrq8WGTpVjydLpBdEqfecuHQR8ZVBM6RMRG21h6NP3vCq8mM2wpZ9cmNRSdpwMhRTXwBR",
  "key17": "msFbKD7HUuUHdy8qds9ZJZGUaQU86xCo7ZHhN8ry5UP5gjHzVLgqAfNRM635PuCKPvaRC1zCCQTTteX1TvWGfMm",
  "key18": "5GF8Hwjr421JZpzLsrTqpuat525eMEmL9nCTCZ8QqV7KsDNrXEJa49BQb2FybbJzTCBt8wKrZZBGdohdfHVhkcWc",
  "key19": "2So34joeppVgfcwvkFb43ugHfsCeBeXbdbQpE1ZxTi3ncrriTBCN8Lf3JeWthKAnPgds3Vka2zjazjoA7GpQJm4j",
  "key20": "4neLRuUnRHLAYXGL2kJPuSsrRXex8ummLiFRfDu7zbfotsMRJ8RQccW3Wn6MbbHuPtCYpxg54xh6VBm5RWKh1yNG",
  "key21": "3Czs1hZboDCKfqDTFBSPLPiaDpWdCDKVpRT8pJYs44mrxa2mTuKNjekFHPRcz6qdkE5efewGJHknbrkXC1sqVev6",
  "key22": "Q2viEPKqiL5ioDsH8PQfwZ9KVZWnKEZfaDc3Z6Q9Fmu6hrgjcs1j1NrsrSUyAtjTXmRA9gBn5EVBmuLhMjGFuLc",
  "key23": "q6X9z7FWfLcvPm4pUFwnVpcqAozxnR8xKScabFfuxyoRsjDfGdisWjJWUG5s3vH5S6oP6siqXiibaHJm6sUvhTq",
  "key24": "5yUFs22JvQvNerFYFaVbNwQN6MUVME8KNKMYsZKhpuK2xEHxoN6woM3JjemwrkeTDnVp9jjkTSM8bhP1v3Bh9E6N",
  "key25": "ewkwheuN2HySV79pJTYYDa4CGar7gaB6KHqRfxmdeu1oZd1s4q7EgZKVYpu8B9Xm31zn8KhP6XRsu8T2WoMu8v9",
  "key26": "5JoXcjHGJhGp3j1fGg6cA5Q7PmHRjn4KkRb7H2rVwwcW3iuwarLh2Hjc3ceiZhBQ1u8VfxRTjRHtRgQbJQs4hn9z",
  "key27": "2wh3LDB2NXjTXXai5MAdsz2G8J6GKLiUt1zyVqaBy5CBjdRkjERKBL3MxMaSDjMJRxHcHszGcg3t8Yb8MuF5jKUE",
  "key28": "5PjyAJcrvjQqRatDGbYCRLPV2NT41MRGWjivFSTLKePoHaKdMqXuEsTcEqHEZ9jA3awLEC57UggamabdjTFN31uC",
  "key29": "hvvWncmj6ApyodYLeGa2KJd9vi1kJUf12PAztCN9kDzSLeisZ9ErBnar9w7nyhehBqe2qHJZwC43uoKr7vbcd5R"
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
