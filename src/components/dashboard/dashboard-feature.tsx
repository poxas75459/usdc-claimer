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
    "ZzGf6o9QEwu7F1jhmCMfpWWMuZiYR7SmzAXwnWgAPKZiikyTcGhFWKJY8V5e8RYm7t5W1RKfSrJaWEHJkGs7MqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z6hZq27duJ71mNwQ6YugA3P6Y1tBf7dLT8nAEaup4rUBveaT1fQDLhRNbioQGnd26N7bLLMbR5yshhEVBjWwYXk",
  "key1": "2C5cSBbA2NQiR7cQnutGMzFet9uegFWTKzvLugoSdchvNZ5nc8Psx8mxfM2z497xFubSq7ZmH43GiUFFAjxTqaD2",
  "key2": "2LpZimKNs6xfKMMwwLbmYQFjZoZBp4nBXetmduzBaVBD6CaUe431U8DaLANeB6E4thqvXMk6xAxeoFqWow7yCvBo",
  "key3": "3AnEvqUHa62MgtBcBUDC9pip4CvTHCU1xLyqBLrmPXdm7j7MEmY3hcnEep5d1TwqoytpDHnToAXk4fYjFdHTKVYS",
  "key4": "346cK3td65mp2X1b8wiSxF4k7jV3boKnXyWLniW1TXVNz5QmKLB7hULJXxDQfjWshApxL8XT2MwV4iS2eUZ4SouF",
  "key5": "62o2pe6aLEk3UsNNYBiJf6geL7sHRSahD81ePzwxj2sVaf2eYMf557BXyyXtG8wG6HKBCeZQUzoaQiXDj6oXAxmz",
  "key6": "5cMtC8GHAbRax5PSFPkHnYexaXuvFa91o5d7RyrQJPFsji2LZBUidsEMQZu2hcdHseos5Y4tAJRsrajy2s7HJ2Nq",
  "key7": "vRGCsSFaqroxYfGwgEgZc6KtGZVVLwTRqi2SzUoiaUK62JcobTYkP5oc8mDHHcG6QBWzgvf3wRfUWP4VdRHhU2n",
  "key8": "3JTikfD6YhGXV16mBoggUWm37GLodx1G3UteWudUZykz1SqWoWbimatumqHjwkkYx2Nnrj77aoXmpGHdsmnbkQyt",
  "key9": "UowZPybHU94nNYBEijVGa6wXSCAX2ziNcMMAghiFbLsNbpaNxU8w4j9s1yD63WCwaxHPQQHL3f9mAnYNLasv8vB",
  "key10": "3wgJoz9ZzfnDypnaFn1ginZzi6JP86Z5YmDW9PPGdfmUVTSpdm2bfUhr84rTmeBamqNoqzUm31HDje7pUG1Dfbsi",
  "key11": "39wGPWubLmaHNDdJPAJHWrRLFCFnRScFsdBNHsSNDiygkTYcoms4N2VmpoaGJrkDVbJ1TYt8gxwfLnGY5pK3HWMm",
  "key12": "4b5k3CucdHnS2VqVDrmwXLAT6bGLx82xD6MpQmuDbpZp3SsHJ38YVLv1qMEQSEeP2diDfLNHk2czxyCdBaPhqFoe",
  "key13": "5D8jj5Takv63bVUNmYwtbXP9jEJREGzXq7dyTAKa3TcjCJfH34xYoDmbe3RJc92L7YkNzegHhoeW89C9Way9dN6i",
  "key14": "2ngSrWMsay3DVKRFvaEjJDL2d9WYByW9mtkiafueLtfokc9Gj7c1mNZdWNRCtyke7zJwXXKb6HyEDCPSZY8Z4ozT",
  "key15": "5dT9i4ZdyWLFeeRz7gC8MMszhPNWwTdDzqDrV2nVch8RTUBasrtN5TvyWBAuparSvEdH1tQajqKSK3kJWFysuRqo",
  "key16": "bpDr79sJ9uuegHKV75DEaKH1fLLn5fcWGQ4e2eMP1Dst7P5yUdErUgy45B1seWDRcqjaJ81mEmwQWg3WAFKR9ar",
  "key17": "5brTfCsoBbCSWFBojwu3BtJzPtGdgABqs3EzrtKzDuNB8P1HMRgRo5LKcgzVJtD7vbd7944Bkn9mP4UjCMr3Bzwi",
  "key18": "Wp3PxRVXadL6xcqe7JanAPmeSGUjfdHvXeNx1c278jnuJffoB2SN566u4VZodw7ZNPGubA8Ctdb2W4A2EHWZgV4",
  "key19": "3wRF9CNjkdFutfmXdrMdLQtPV8Q8RE7SEriy6no1drU1ZnN7x6VF4m35c1vm3LJ2Xrv73kJwPLF7CCTw3ECqyAz1",
  "key20": "5rge4gimzh8miUpLcjXusDNx7Xi2JEqEtidpo4hGJaKtSxAu4cTMttp67oULt7iDsanRaNcjppzX2wtNdszktQRY",
  "key21": "5Mp8YRUcqezvYnQ3jsdP49ybub32H6Us3wpiu1C8JgmPMqSegifzikHZuvLnw6Zec8sy1Jp3guDMnr2nikWWGw95",
  "key22": "4MHTCpUpDw2NW9Srz1SC2eKcMXWaff7H6x69EDQ7FwRzqnjB7xpH9QQHexGY5Nen3Gzs9hXK8UQpUfxRgvMh92td",
  "key23": "49RbJZM83wqM5hgWKWbRVDAYnNnGCeqoNa1ZEQSuCCYBPz4XL5b8g2jedCaZ9zQxZEj5BcDPD6kqRDtWGcMDbgtF",
  "key24": "2nWarRvqa3EatZw6Sxg7eCLLBfDqjpzK9b61wFHDdNFfyjajiY5Xbn9jjCKwKytq6eTD1QQuN3cFYJbq5ZUS1BHF",
  "key25": "5nsAppGCL3GrMieJqi5bbUJtBtBKcjVYLQaqqGFUFrmW4AUppgdGEd4kBDgA3U8tKdWgW1gkXou3HSLASa6o5p3X",
  "key26": "5wzY5kNimFmk2p4F85641wmeaAPyPiTmqZJJVb5mHa898HAjwoutkbDjNcGkZg8bMhfR1YXFnMUBDvZxjCuGKbWy",
  "key27": "4pKDwXCc9RitCMwwVjHAB1rDhKKGgt9rjtXCZ9we8NZh2iKvbXErcqsawo3G4q4YuWmZmY5gJXYQFzUKJt5JTVeZ",
  "key28": "5UrPhZ25HuUEi6ko4MH5HtdPMFQsErUr3CoQVimpuZAFcvCSETrH8b7ZnmwBY4GkCjVrh9x6E1NSrS9VyTnd6Gi",
  "key29": "44yvPercLCZL7e8Cw4WAY2erkSdaFWHNpSJmWG3FyMk8g8EcBUBHW3YpeL1dWfForpy1StySddH5mxvGG7jv8SSK",
  "key30": "AQY5nJBaxFY9KxpD5Z2aesnivZwmqQjZhMd1gVswxT1Yti4uBHjUbVMBz35b6o8BngQjRb9jftXcEb6Fr6e8dUA"
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
