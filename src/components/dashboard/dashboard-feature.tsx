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
    "4Yix5i2qjM1H8KMu24xCy12mSq2jvsAVnxrn3zWRZj9dtQwj5fMguXeaCBRa9vN6JjaemEu7iBHYdEj2KNi7ZdaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GMDVYiPyTv74vsoVaeDhwJDtES7KQktFktMzaWtNPnHKtzBEdJyUpti5iUia819Y3H8wVEeT1Dh7NVuRdbmQaCs",
  "key1": "25FM795ZGXPKupDmpUxmeCSyyHogQSir2Utc64nRVNexPrT4MU69ZkzxXgn7fKNjzbrS8wEUKxzT7nkTZRRBzv9f",
  "key2": "2vU5w8YLmyE34s8dyvwnEuwnfHfso4SJxr4PfULWezdrN1xGXQHu7Vtkkd6Bhd2xLCWUzkNBmkTZm45GW6o7F9b1",
  "key3": "5xYjSLtshsB7SUJYJ2SmniZwdGyHwhgp9JTMatQ5NectYdrocEsnWcdRtRQVSAM2av9sjTiwSNnFLuVtPbyVqehi",
  "key4": "2KHd38dvSCWukpVuB3dFhmVugVFHNaRQJLYr7gEAM2x9zz3yZ2X6VDUKETtXsNrzfC6jneYdsh32CCjfc3fQxAGe",
  "key5": "2z2cGvx5ATpdH7CtHupDRwGxPGow7j4tvvxi318Eg6SXhCJnB4q76FMdHRtrSUsSj2Hxo8towcVdqEPkF2TepoVy",
  "key6": "5d9Yc9dM1ynB1DpHLacX3qYXQfU4feRgtGrZjS7xavZYCRNv1CznVZ7QyPBx8w7A8Ej224N6tmJfiK27ercyQbba",
  "key7": "TbTHKYuGorVhpeREFFxox8G1rCFtVNXuRrZMBQY51qAyzeJshYDj8yZ9KzP3Zb7SwpapmGSAKyWZ1bfACtQCoc9",
  "key8": "2GsrKkGokyxsp8176HXQmCjMckKNJNUkoMnrmyByxuc7Vd4c78iYGadacV1rMirkD1DZustr52fEnMCWfZueeAFQ",
  "key9": "3Asq7QC8TrNhcycTs1reKwxvf3g1FsLZLb75FSrUNwxuFzhu1ipr4xwAFhHwHLUcP1ttiSXNjMxhoCeX85H9kHvr",
  "key10": "2ijYonb7FQMCzoZt6mvL34GV2GUnfPeD3yxMWDyLSLSVy7g8jy6efBesEcScXqgueRXLheTMFU5pwUXf9Kx1RDBW",
  "key11": "MHLjN8hx9qS4ceuRSe5NJnektSwHxSx6vce8tywjERhFEjpeJvWZvzktXUP1ovz1zVCykRdM5RuahAKBghNkcYY",
  "key12": "41R3ncSDK3DL6TvupurVP34HjPxg8AreWcM3HokCCaneEuAHrh6vePKYfAg5h3STYdQG9KP2ntCuxzes4vitGped",
  "key13": "2VUrs9rRVHS3QVz3t9YQrshZKDhK6vVbjx9kNNcvWWewT89D95TinFUZ8hXLKLD1nXSzKP2VZc7xL8TwxBGfEhPL",
  "key14": "3FW8Arz7g2Cfm21uuaaq9pFGZzxxoRrdgpVUR5mqvxueUfVRVeqPnEAnmExpY6NpXMsRpPDQb3CLmpGfg6WGsnhG",
  "key15": "5StJM6uutxhFwXAe3A8JTgfQevV7pjWAb7hssRMjrBoaLo9fggUXgw17TeNPQH7fUPZCv2YhDcyevDEGJvQ5wt7z",
  "key16": "2Kz4xw4AdSHsC8uoKJxJFTTHXiEgzvXkbivCpXLQ4ouJ2KV2zBnQpJsjJ5qtFYuW87tHYW14fGSNqkNPcvoMr4fM",
  "key17": "3YTANzqKdZTFgNM6zpbZN97R6XV1EdHdVi8sNtZTpTVNGjER6yNJhqFiz3kjzsB9PpG3LsvZxH1wfxpPeBHqjmZi",
  "key18": "5KTfVe2QeAig3mFQBXwSjyMCJkc9izFkjsb1YfCxrK9NNu4vGvj2re2ucfWq63fGPjM8kUVJCxUnTymQRCKDZb1e",
  "key19": "3MQPokZWr9wDW1J46XeaTdxUsybWduMR1rMvEqvXgPhhvGz8RJDMJQwappax2pYitYXBvX5Bw4gde8nxo8b9tPve",
  "key20": "2ndSdKuWR2FhV85WfXdKfQm98doSVqCJifFumJL8fW5z9BDN5vsaCMDxf47TF6PX24xx3PU8L31GCqu8y6X1ePRa",
  "key21": "2HJ8giA32JUxeYzUBfLwW7djWNT2hP5tueEGGcLV1asM2kw35pkXTZ7T8zNvmqJi8SZrRw7fZhFu9rYv2n7kAmtt",
  "key22": "2eqw8vpuHw2vC7qXzSMyQkWxRqrqcKYSToaVh1zDrpB7M8ZRhuB4LrnVVu745SutHLwBEeLY9F7WVgW4CPukFTav",
  "key23": "X4JzRACJ3o8fgcN4MDC9KoriJhuWen4Rvd9onfJYQqhwe3z8KTvE9M6kumPqVtd5kecrBFP225vtQWppGjtg5uE",
  "key24": "3v1USJSJiJjVkH989jUgNhuGCPzomPbF1HzdDCYk8YWHtpCUFFtsuG5W8i2TznuYBosgqwZkjEdS7LYTd8z4pJVT",
  "key25": "3b2QqBAi8Kmb3qPjThm8in2S727wHcyeSBEo7rGsfgroG9RczfEnbu7eDzygdYjfWV1qoXge8UKXX8zTYEp8V4vK",
  "key26": "2Ekkh3L3vVspUBFoaNjFYUXdUbBfM1bgeDmSwLuBER7oRNZbwJu42j2b2wmvW3GwduBs9RMtoXrreGgwpcKFUuCe",
  "key27": "3EqttSw9HK5GB7xDEbNDRHMpaignjg12BMgxvXuSHTkxg9aGuRBw1MPrXRFTg5mfJeQHSNhpEUD928ZmZWBREoVz",
  "key28": "4LmATRkcBQm8kEVHAQmzPjy7iPncBEdRhGDBPSBA6VxEmgTh3UwisJZjBqikF4XzPFnU6NFyHxXq8c7AvVogNvjE",
  "key29": "wL5mC1zhaqGF9bM2Phnr2G4wJaPyVStdUqm97PWTpKVGti6ey9XCPMFACuJ5jXJZAR6kAZSGiYnFLDTjAu7HyWA",
  "key30": "L6np84BZTQ8vmX8CpDM8eHbVQGSVAKyhVYRgAeGX53hPsRatqqsjMhyApuM8KKQUHJTcWv7qLCdcWFJjfUSQ11N",
  "key31": "5X3FgN3wTLwLKBN9jeWanFdRW6xhwgNG4UroTeZoPuTzSLvAQ7DSVwjuZyyB7WhZgpetBXT9FfEcWrUfvaCQJ4tr"
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
