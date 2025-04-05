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
    "3ctTJ2oisMrWbpkSWb4YKBFcHKQaE62c5qaXSmuFVS3dmhf7gxPGNyxSbFdtf8LQsr2LREh9FAP6Vnaqn9kpxsVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZApfZcQruRrfvpNPzDCDw7JXZoM55R9m2i8oWwnyeaWZQsocUo5Z1ZXVZrHxUHzupRHgSTLnwMY3x9Jf7DZpMeb",
  "key1": "5SYuzoicMFUWFUFWGM8MajjqpnCxTqYSjAddyd9n5NvJuHpqChRew5jxeY75yP5vkMf3Rnp8zK6dy1aLY8A22XrK",
  "key2": "5cJYKtKeu57biFZZPtaKXGz5j4vNYnsPkEWe1mgZJQMjMp7BiPkJyQucWbUDUsnpSwHHENZ4Pgm2ajJHamMEyVMx",
  "key3": "66T9sP5N1H6rumxjwWqDq3qeRJvHAkCyBpmjuTCE5Km1E5b38X6y2Xbqs5QXNEuT5JikqADtNGdiaFbdn7sNoGip",
  "key4": "3ywTLnV8Zt5trSqZ3CAykjqCeVnPPHSsJ2eZY1whrCMvCpbeCvfS5Q9yQXihQkvD3xFbJQx3jZEtNVgZATScZ83J",
  "key5": "2CovfcHS4GTcrmiNg9RNVean4aoodmJyWgCKuUgGr9jB3K9iKirTqYXWo1vcuXDkayzbFjf2hZxik9sZ9mvLZCiQ",
  "key6": "3BeTKrK9iwmBEdN39bLqLktrWeQu7f9US9KM7Pg3LkgbpzfMXysbJokfUpjVRr1BnBift8HHS1qpZ7XKx8LpsGE8",
  "key7": "4R4uNBBEyAXf47js1fXmvnyyko65JDy6rGrr6oe1yE8xoiC4reGuuXx3E1tivruEidRxU4AaQmGhvcJ352W9pR4w",
  "key8": "4j9aGxSumVUgyeo4wJ9CnCJs7ECzGrPj6oKbq6nWUkeDTujBHr3Aj6DfT48v73RRjFZNPhSN8KFCXjwgxLXBjgya",
  "key9": "MwtGJ8p6sbFmeRmwcBssy5zdkUyjimFEjz1vsG72HyoRbTjRJ8SX31oohhBRQ5x4L58YJnFrw8i2TtfB4WuejXF",
  "key10": "3XSvgexjZZ8miwHrmYwGnecXgmvnD3mVf3epD6SugTCy3nCAvLSn6Ji6sTZWgpJetYiX8dkjsrRohtMzeH335uZW",
  "key11": "4Qqc7ggyD3DhTJkAizi1iK3RWLEkpJUE17mZQShtHshETcCCTntMziLp8axr57mJmwkTSckVowHm5u9Ey8UpcMgt",
  "key12": "4GM43gkJ5kExkbgQjGs2v1i2KZN153vhkFDsPPqRzLePoxDR4bmVbTVLSn36xDARer2aXEJhXCeTncSFhRu51m8f",
  "key13": "5JpdPTPVHx9GCU8xGFxkvXcTujebMoEMEF6JhpAtjiR7QZQXsTZR7xGHsBYkUDFbAjb6cL9LoZaSNaMEyudusFvu",
  "key14": "5XZKtvKLn1q6rdAGN5yL176mxmqUbaxredSy6BTzjDv6nJf9ctKqdKz7RCVwNy5w6LzfHMXtDe3rwygseUNWr5hB",
  "key15": "5WwqLtor8LoB9xotB2et2ptBUQB8edPXxaxwvzfJ3rQfHEdpKwYyHEng5ZCuPUQuMvPYmuWeZrSJ7FXgpiAqFRhH",
  "key16": "Q6FtLksGLDiNpwvVHtc2PFMxpUFKsHnUFeBCXVrraRX8T8BEMhSKmC7vHqqZpPjbi9w3JtxAy1ssNXk9gELUL34",
  "key17": "5RkeCNRJWKhmWsEimvUqpYAVh2nGtVfG9H39vCr67SKwsTer7FhYcdJAQUWUmGwnnzUq2pQ3A3oCPXArj9LmCiAo",
  "key18": "67HLPaS2RLRfnB1m26gmnmWCR2vQFVE8DkxBsCEP2oEbv9uzmBF3t7B7EEy4yoXrvm8A18ccWzmJiGGCc57SZSHv",
  "key19": "58U5bq8kPquVCzFCzC4RFfLJLPnVsBzabNpR7hRGPXK8bvmxcy9mQ6jsKg1TS6bTVDoRp2AsgTAEgMJzcuM2zsan",
  "key20": "3HaoXzpQXvamqQhjNwz1MEq2Q4dBvVeEe42p7YP37yn93KcSxTXnbhbozZEu8HYvu6W12uFFTup3cpD8oroCH6JY",
  "key21": "2E9EDuxBiL34Z9PMrnYqYwGE82eELgVBThg8cuyG4tmHYjfnE6kGMMcp3LBUuRdyviAG2aNiPXSZRJRtqCdbbK1e",
  "key22": "5kknB2wZ6FRg5E8iE756cMbUKAEnLbW5JMkjEe7WMJ3GwjgC6mXLkX3VHpdmu87BkxqKV4d1TDkxwRyKwi4iP3dL",
  "key23": "3c6hN6hQJj92QoxE6uCCrBdYNXeiJ2qxD8tEhDi6yZueUGrGNNQLUvMkPg8EsC4LZ3mSnKkbrs6BDiXjtx9C5eCU",
  "key24": "jLJ9i6LBqW1ZJ72yYKhV26PxNcWpnZUKKWwUcDDEwRuWgLqZF22uRdw8GZDWMjJ1emr4WZ958nbmqTafXkE7LdC",
  "key25": "5gRh7rceFkmhYXc9DEwjQFw3dmCPSzzjwRqmGaNCedriEfEvyKqjjpF3tn4KWFYntSF9Nczhvu1deojwpJ2G8iz9"
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
