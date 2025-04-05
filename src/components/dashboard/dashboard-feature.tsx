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
    "4oM8ZF59FgmF9rQB8HNKSwfSdLMd6qPTjDaQKnsgutPvzrQpUiPFmjuQGZJgh5DKX5kD5x4LoWEyN5b8KruWv6GJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mmQ77QJk1Q9VH1487kKSdnkMMXwCCN95BuZNM8UVcEASD8KySURBnxMbPEhFH7qK8qVMti8dtCrCzfiLjAkSN9g",
  "key1": "Hnm3okF7RfQN9xV95nRse4FwqggBszAjgDBfyp9753r5MCA74ip1WQQyVkBBEj5m6LJdh2xwyrBY9pboadrEQW1",
  "key2": "3m9MDcVDDY6bqbsv8w4fZJpxz6jyaqm99oYEro5E77L2vRp7VENr3CifqUDJs7oNCEeUR5eUsFwgWgARw3v5mze4",
  "key3": "25pq8qmKkFFKU8wwdqPkAvsxTH4rvdYRx9N3TVYaj87c86FoCjBxQjVgP4fMCZZ4Hpg4Euy7an5dmipjVzBhPT5K",
  "key4": "3KHnkyzs2s7xRUnh4ZEX1BtvM5YXKX3vtkbLapEcMd6ZSF4eMVusUsxDxAyNSBbxxf4pSG5def85NaYZT82s72Xa",
  "key5": "4REj9HSXSRu4pSDiMd8NNHfQERMghiGPvhdf4PjAzrDfYybZMGkzQdkY5umTafdnPif38LLS4xiWdDHXg59weowK",
  "key6": "3Zt194ksUiuycXxq9EKKSeYLcjeUuQc2q5ktPUB23p1HFF2GMBg8BvVH2w69ieAojvXY1GBwKgYJRfaitKmfaTNg",
  "key7": "3eEXvpR8M6uz4K5jq8x83ZJ7hdFXb5md1bGdhYhYdFdMJfP9ZgRtwaN8VKZkVmMxhhVeVJHsC79tM4CnwBDLV3gu",
  "key8": "3RNQPoYyDk7DiZnsEAjvbCakqRHm3f6xowVurTTyAs2XcRmApMZ366fry8stJw3AD7dws1kqbefAgEMbVDS7e5tJ",
  "key9": "3Ey4MeNq5oQK7PaMZCz523uFXvKxCutaBH9ADpcshrqKV21NG9PcQw46fPawY7eziAfUzMgrJMMjsnVXv9yGuXsx",
  "key10": "2ZZJa7YjXi8WmwySoCPj4EVPCRQ2QNc6mRd73oqQ3YhWWSyxXpC3G2LeiV4KDgpdrn6MMGa8TUsrSEvoFb59w6KK",
  "key11": "UxQupGcAAEMZ9CpUZHZc2QgTkUgy2DmikkrzC9B9Xhv3HJRjW1arvA5frhcConkwpGUDGHDm8ziCk5epSpCN3vo",
  "key12": "3mRQHDQ1yReMDX3iG8VDh8PGffTS2q9s3V9AZFLZnFSgZVLxRu2Ra8buC3cn5ZZSVCn8gFfnQAmiN7sniBeDUPn9",
  "key13": "4RDdvSyEH26xqaMt9zYYGpnZ5iXmhjWBaqcQR2whgM9pBqwWGBXyxKRKggabsVPAdP11x5fRzAXeV5enCHvoC6LP",
  "key14": "5fMe3kJQ7V8sgVFaDMnGzMEmdu922tV4MCtJ6R6ugYWBkcbzW6TTk7RUZHJWTJ7qKK3gTkyuQrYZH59e7mffu6cR",
  "key15": "4dBFc4vf6hhTTFTmugCFi1c1MX13j3f2yjrL2vaevKjeMxSR5s6vgwDdw4L5WUxCHH9cgWnMyg8HC1Vkp1fBwZNR",
  "key16": "4iDxFUEJvQvBqt16PDySzqCaSMxH2UwuVYiH5dH7u5q6VN8QHXA6q4VVg5r7dPWpAY5sX1dF8QZRxZSQVRMQbYHm",
  "key17": "3zRwCPMAds4YWHueDTCRpXBoLWnhm3sQ4Ryh9ggoUoFTbcjBrPXbF1ieuRr9WiAwjSsp9M4nFWexgQ1h746asj3s",
  "key18": "dX73wC31EMsbgzZi4xqgqnkbmMFkoA2eacqJ9R67wrNbuZ8GUvjid1SBps18GP7en5ppbkABjRGjH21FtAdVAbB",
  "key19": "39AhbaPuHLedRifXEarKpqJq4mzW5JVRaGHqEkkd4LQKfmMc6iRWrTuVJm6SWd4XHPasdLb9tdxPWfWGCYH8QYcN",
  "key20": "5MTHkpqrWLqEu3aeTjqPYoXUmcbL6QvbRXhYH4ttD9MmazyMu3yZnobaut8MpWtR4eD13AmsUYnHM43Bm4UuvJEL",
  "key21": "m9KVwo2tHGoCVvR6yqdbadV94JYTTXpJQH28wftKQVxcBbiKDEbCR6AT7wSRJQrCak5sd3a6Y1FEnsaAaBN8JD1",
  "key22": "5HfSbaLYvCkDXeemv2GBG2KsX8b6YHe2oBpFn6GPLGGDVgEgA1YnGbFUYfb3amQ1fDQcVNpwwMW2yfuwNTbzTeWR",
  "key23": "2A8L5RHjBJGnGf3MtoSAEevAWziivRHc39CfDinVSn22Q3w5tKmhNA8qkraki6xZc3TApTSPfGddDF2LWSa5HSK6",
  "key24": "RQsZH595Le3poWhampcEMkfzE9bMH1QBuBNjSnm8ABCyLMv47LmPHbccFVRvrz2icAHDCJV7x91spULXFU2eTEv"
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
