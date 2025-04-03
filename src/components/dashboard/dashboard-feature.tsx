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
    "5eRXa6HAiEuscYWiFqLGWmgUNdieM6wWWCJJxgG8KGHyv5juf5yaiVEssmipScShGZ8iGkMcj4ybno3zN6v3svdJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36DUsNZFUqXzWDizhwy3xMTLnNr5PkwNFKXHWFzsW8YUsTBAq25mXnhCEvv6NpLPqTvxGyzsuhZzb8iYxJLWgg8L",
  "key1": "3sTFweqvdmRb9fcrZH17ah9fdtcpeZbY8szQuuWMdYNGxH75V6QKwzMQXRx9kpVbhUCrsuY3oBcME3reWn9F4ZiX",
  "key2": "2v7e1aRCL1gRC2hqPLafQtfyF7eFfop9uqRd4hPsdsNoL6yAfMWkDS5t3qq6QT4RVbao4XatcnbMVhBatJLoEAEK",
  "key3": "3Xegt3uyk818H8D9KMciTyhR55y7Lic6yYTTR4g7vkN4aEHUnqkLSz8nWux75MFyPTNK2Mj6ZAMKbNBWvgXrNWPV",
  "key4": "61vc9imZ1ecEoD6y7Qt1gyHXY1PSCMqvojD6BsNoFjVeYhyGswqPHDmjWAEVuMwCmB8fcycJUBqY4U1HwbYFCbAS",
  "key5": "4qGtiyhgxcEGqpNFg8BMiu6Hd5n1QbULXz5sBvV44ZqyDzxneWWCZt1qY9vqarjKQJwXePBe1VrpVZd4zY7tF42V",
  "key6": "5aDKoDiPjnXhnm7TqgEmv6HkF4sP32qst545k8eBoXaBFvJ6TUaDMrzfyZofxQdMzJ6KEMxoqkeTdxNaBXANt1Vu",
  "key7": "53tM9Ucd6keMLhxwr9HfJRLacBRXkdQLdotXYpXBaSHxQ9ZceJThAtxfK2uMnJbgnTx7dJonfCmvDjdYSfxg8EmA",
  "key8": "QiQvWAwqnW4G3Kafv6hoNst49V2YBD6xTqvotov4PkyGKqhzr5mG1cmMSvq34b77khPA9ubJCXPmAE3qnjsp7Tn",
  "key9": "5CLe3aTqZCgbfsvUcHi6QvgEp6Dwo1qzDVUFDSC5EmSUSwgjwe6xgDtQ5qgiDF6ywDfjv9fJ5K6ncqm7Hiuj4YSF",
  "key10": "uzH8GMjV5JQPXz6HspyxWaFVVQU9pe1VNo87TQ6QMcPpLL8moJidH9ipStkE8MWZiswrgShXTPt5fpDxbDGZVBy",
  "key11": "3eWeE8K9u6RjAidoHfwkyT7oFCQpNSkfAThwVBkMQ4csED7bmC1cTpxKYbx3736LAxEKLjzQFcJAX4kHVaeBEY1f",
  "key12": "3JjKNFHLuwPYrtbSLrV95oqQubpQGD9NHAUDWZ4hhDuPfZySdTHJGmCWQLNPTyZAdmJf15Qj8dFQXFSJun83CmsA",
  "key13": "32ZTEGwVZ5rBZ98hB9Wf9mk8snWTExDybcc8KN5HWkZDqY4tCg9HZ7ymqbRjS5th1gUFXc83EcnYi9vpRLcEzAJZ",
  "key14": "5w9pFzhr2eCq4kicNGwwt537fJobgB342AbWUesasTWzRDmBA4u7DdU895jSvjyrQ2wDbpCscY5jWpE6CT6xBqFT",
  "key15": "2FfhbKE6ApJcAvT82nhxGHLxU8XykwT4g3pPGLwLb2trfSerduWuxwtWgwDFDAuJik6gFdbAHzrJjA7L5ypGZVer",
  "key16": "2yooQhewgYN1FJXn7K3FjsZo1dcZPywMJhwK8bAucUWQ4XtWZp6TQuACR73uqCntsBHGWd6MQTATVN7fjAKUwLb8",
  "key17": "2MNRwiDho4mW7ZDHa9WmkgpqTn7eU8WKnZAb8H6czdxQwGa7Y9X9nUnai1hSRF95xzZX8St4e4KFbBwKQxP3sL8Y",
  "key18": "3CaFxSbRAkva3mLT1mQ2ejTvJsvDa3opgZPtG2oZdr4eRmWaYs58JgTVuHb1Kqnb2yrjAWNRBMtJCb8xu7fWskvt",
  "key19": "4pTyNCCHT82gSLS5PftPiqqr4NnF7QafonfLkz3z5SByoaeXg5yEE1JmiEjh6rSwChrCHKjFNrvWPRMAQQbxwHbF",
  "key20": "66oJpWk1ooDXF97nUf2g5oatLDyH72gGweNXx28KGELVbkdAYx419vq5REDiXCG6DKiqKweBEna9bn7eiHbvRJG5",
  "key21": "5Db6zR2cgV3jmbcaLczH78EwB9MszemY6CDJEdYYPV5v49uX28HEkU8EmL4utBkDpi7P4DNbigR7ctBCU5MWumSp",
  "key22": "3JhMk2sZDGVeKRiVZSMALhwDVVgW71NNYWfKTa1K9BoFbPkt6aJm54wSa35AQc1YqQdNni6jtPYP1ZJjB4uJRqZW",
  "key23": "3zH6NisohzBcD7uS3eU91hBQcECkjds1mHtv295RsLLn6PUCQ9CFzWAXYdxAiV9mg6hPAiXtorSDLR6a6QRa3mgu",
  "key24": "3rTtiTGs5Rem4KJBSrm2E5zsCJwfYoPaTV4ptRhkGvmynxbRALQmMTd8EaAsgWwgo9uYLFTcsDK5DWBAwGmhoZGh",
  "key25": "2nHyDzQ3JZWjncag8KCw7DyFgZ7RGzvkU26Sws41y6fJzPnyiKwZDBvGaQJnF2bEpwZa9S9J5QkXZyNV1RTr2Dkn",
  "key26": "ah6FabtwBj7LDU3RiScdLV3WNNuRiN6qNJZnrRxcKawpXqZW8NivAq5ge5ZvvKgRmYHV9AsKW5n1YY8k15m95ro",
  "key27": "5zgjYsBtRtiWfHntT6NxF4JkWeDZfHQF2xE5V1c8Wojt7C67gWMGEYGxtDnANAuc3K9WwfL4GZqhY3sREUvBc6YL",
  "key28": "5WAm2h8Bq1Wf3guVL8xWKtFwKRLTQTzehyL6CGXR6dauT8Et2tfnuFRyijJRefMWWHqGcD12HCPeZQvhsa2oqmSD",
  "key29": "PGMMCM9adMWqVFqJerJCPYiyYasrFXJg4B7CLHw9yiupeAEPRtAcnGuieQkyUiNrTFJGRy64jBYHBQw7DM8sjHg",
  "key30": "4YJRwDwX7gvqti9Y7dyLUNPaUzUPNpfCsaMUgqikPQv7wahUQrsy7HnLGujHJfi8oifkLmFPa2QZWN1RS7wujaCo",
  "key31": "2FM2rvuxJ6mZneaTUePy7iTkaUgie2GLhUKzaSXPFhqMgynn7TXG31CD7pS2QJAvdAQyjbHGHf8JPZD48ds2VJ2F"
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
