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
    "4sSW1ez4sqfCPJVy3rUWFjaeefdRvqKXKH6JZ4L8FFNkWvrkB8MsFBXzPMwSw6QDSgHq3m5WkfvsjZV6WLghXwHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54WNfWGgaik5DYneWCybrR836TLN21RhXe3wPZmqwqV4Gor1fnnsFPdTL46kpuUgh4Wsh6JGvxEpXmEY4RTzUARr",
  "key1": "4u7Wzm9ApnEBXiWQzrSaSPpLeHUNgYdNg2tJJdKJaGvPEadnxu7ZT3rot82X5XtriffYRNq8VzcAH63uMDnCirsJ",
  "key2": "61WnXwq5FJyyEwdasz3hpcaSfmbqHBjQoQ4fQhQtk1C38Vgje2mhf2eaNpN5aKxEAVzfiVyWRx9u2BAzGLcyfw8A",
  "key3": "42uj9JGVV2eMXY6j5wXYPs1xgTiBiKDcYv4fF6tPqJn2Au5SbJepr6PY9ywL2YN42jFahxumPgAmBypxVishbVjn",
  "key4": "2BN8vzMAgpmZsiV5BHVAizeet1xnZjwxth2F8vynmA7Uum3BWygJED2bvP3a7pNdwZN7oV2onBBfy657AaZKDL62",
  "key5": "61LXqCWrXifSxbNaPqgbDU4si4pNFnZu67tATh45vBaYYrmtxDCFb7vPbDUoRDdDmZdaHF2PmRr2P7oawbDJJ2h7",
  "key6": "63Pg8rPeG2VKwuQfTR6CDA32Mik1YV16sjo2hi2oQx1cH41BUpFMQWBHjvAeg1Y5b6UJ8mHXMn5zTEu28qwGM2Nc",
  "key7": "3nps9iH5uP1YCwjWo8YBPCt6TEr7kqrAtJGDv7zxFv3fLrEv48AD13c6HW1wnX91V7bKUZ4hGBMaYLHdXhfy2B9Z",
  "key8": "5U5rvorCTN6qNdjdXiNfVgYssrG4BFjVZKMuTZQdVnnDbszUY4LukBJtQHRwugAcTHtRyGECq6Cd2aNfpfe3RFDy",
  "key9": "x8oQCSVGNhMaoPfe5mfTaUTguaghGs9T5KxokmmS3vqjBtFc8mroHgxEnvQpvNc91GE9kuSK1XNudd1Bo5Vi1Md",
  "key10": "3gG9ik5CL4gNrgjHPuUzApHVpcxjd2o6k8gCSDsXBbsGhR26gFEBWw3GZuWzw3eQCpyTcAWkiPDS3kEeNUT7UXsk",
  "key11": "5zETcXqtHs1XPzKQibaYdNxwQaieYw8E5fQb7Xpj5EXTqA8ComDwetqYgkenknXAa9cgNZuyTXfXeqmeGfq1Y9mV",
  "key12": "4ofz3shotu7jSgHsddRHqcwFLBz4iJYFYyjbnR95PczUrjVpbqNAQUVUQBKyN2vd65hv2S7x442PHA62wCSvfEZ6",
  "key13": "3TGuBdy7cE51MXeDXu5TTXErpzxkpvzBSpdDoUFZZRyg3hGLomuLPxsjXbpsmhR8sovx9xyxTNXJtpFFDtZsMaro",
  "key14": "2AdTb22vYH11mDHJYtZwgThSf1WNdmUvvWUgXhaTyRJS2D2DYGCNvkSJRiXcfqrgQmBi8gz8sfLi8B1svnw9Eekv",
  "key15": "4cD8CwfqibwXvLwhejGUUNnFtgYUWAwzKfdXXNwY7tQpLeV9mB7GHAdsT8aw3dieZQjCJXVNpF7ziTCSenmCkfTH",
  "key16": "5Tjnc88FgvP9onmhLbvqUS9WfJ8U1fyxAcBXSzLgV2QCbrFNbN5UNBjDhQM51ECa8MNnNFVjffpfTo1NR19cS4fF",
  "key17": "2YwBF8CK9bGDiB7S3sfpa52kvPD9ZU6eurk7GPdZgHNtViJQbv8kNV81yBRF9vJgoJbLWmWNPc2MtWHGCr9CNUJj",
  "key18": "5Vp5qwJX264p4v3vepcp5bUtVHtURWdGiHhn5DJYjm9imufmmyC6at9dKbjkf395sWxJcVsq8EMJptnHNSN1fux",
  "key19": "QeZznkH4znU5aaWne69TmavUC6shmpf84xng4HZbuF4URQzDAr39jY7BG1oZaYF2MUiPSf8H3XuZtUNSottRVCd",
  "key20": "3achZkdz77s4KARppRn4mAXorZJspEPoxebVXeVD5vSjHXei35Qp6Qwn2Nrnbdw1cSwefBDah7CihQUXCPBAWXGJ",
  "key21": "39eu346BFw9nGWV9qFQTu4q6vhjzRAyYE7b2YY3M62jZPAqp8UMNUvBsys4j1xWKbya5eur9sqSJCxZNXRR993VY",
  "key22": "46bUvMDCVp8PQm6LhJ9M8eeZDEKQej5c7bEf6sYQ5dkThPWGDf5YmQE7pyzhV1zakMnFgmcmuXo6n4z5b5qSvaMn",
  "key23": "3ttuumDUwS1ZYJfautJ5Rg3qQgwVpxbiawwJv2EoEH9DXEaQ3simPzZiWc8ytAHWSfQy5SFbh5kyG73gPCfvkDcn",
  "key24": "4uuHrxs9yHSBayfY7yHWmqpUmvu2xSXF5tiopbCjSYkn489zYtGrWni2PPmqhNo18pjsCFAEB5aTWB8Nv68RGvKA",
  "key25": "4NXhTyh4KAoeCMrATnJxdv8cwEZL1N4gufZ2BXnQDjJPyLNTUmnk2xzd2hhFjznbg6X7KDMWsDva6y5VjgMueRDx",
  "key26": "qU4qdnDPLrwPRmcmFqr5x24Du3vQcE6Ls3PB6RNneJbUJv5MG1aZJqwBcsKDqvwD58nADyh32KLLiQPWsz7xpcy",
  "key27": "U79g9rD4P5UNjawdAespHE3Rq6njDRJLmTX4DsueDEtKosbvbGSxvAN93vbKVQtcgs8JXsgYTPL8WVq8v2LHHZo",
  "key28": "4n757CbpqdvmHaN1TFBzM2em9eL8SBPJkJeCZ3MvMxhuixUayQrxX3giKfUw7XxHBVQwmDgavuqoACp1FvJavfCp"
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
