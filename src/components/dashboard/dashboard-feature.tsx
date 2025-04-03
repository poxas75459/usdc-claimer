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
    "5p1SHtJ8YFNhVEpbBkKkTNWcy9SRgrcSqyaYXC1tQ9sFJuBMVbCLLKiC5in8Cm7hYFU8bwni9LbtQGiKcEHC66z8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xjQuA2zufJUudYJn58Exuxx8pk1antmqCTZbNBb9r8ZRQgCEU3Y6Pm4UkaRVAXrmzV2PFuJ5YvJVTR7s9KxQKA6",
  "key1": "5VwYH4ViuvswYvXpZ1w1V1JUP6EPh3882MRsdkuhf7smVsf81bRbFiWpLNwcWLUySG7nV4AdMBMMVtdtJrGY9ZAC",
  "key2": "5xtfaKzqXRCsny6kS3uTYSRY1r8pV43bjbenhsCpQzGHQL3vWkaj7G6J5UUZgKeU5QHo3Xxsv91rcNVzJpLZ6vHS",
  "key3": "356nGR9FE3iMAb2YwtPogWRqJqeCWChaWm27p81ng7WC1CQARZhmtCcsSNyHusa697RSh7P7pRP5w9Ax9cWTSs3M",
  "key4": "4J3Yvatc1CKTZAaein46Zqzrf1VNGGyH8SX6gvXccDRjCoq2BTCUdtEhsKT9Q2dAiJEKRFL9qVSCqbUuy9ACrW5b",
  "key5": "2xVD9fVSNLcy4o9j1NPZTa9mBJSingqkJe7qJABEZRJfa5GRZJZPUfbb8a18Qvtc3X2NEaqwtRP6D6SxLc7vMZav",
  "key6": "23EXsSjPLNXhLpWKUr99EZ2gMJXoL5RAeFJDhNAxsAFxVfHKmoQQAj5jNDjjFGWkm68zVMN3EdfmSNLiUQECSn5V",
  "key7": "2abapUzZyRH2ZcJ1xLZBybrJjpfbtPqGre1oTexvZuxPAQCwUy6Ps5zBBPXKxuSHZ7q3o763ZrVRqXTErCxU99dU",
  "key8": "3WFpg97uJfadUHFUoNJSrW5NCThLuouGTUpuRTk95fTPqpcno95hxh8fZ6hDcaFMcJSUH8AJpxpzaHpR1etjAhB7",
  "key9": "5aKx4nRFBYmACHSH3JkNMQGops3ByNKDK2NbRhad5wJX5NM1j8CLKpkqwDvviDVJ4SWaakQVf3G7SDVkJgemVZZF",
  "key10": "R3xTP1nXs23nwwoagAoRK51J8JxbprT1NqvmegikV4eTp3moDcJ2ERmgrf5tSPxJ3H8NuXtu7kmRrDuyB9VCXVg",
  "key11": "3mqbUCokgpEQQcWgaDZSokDoX3NfipecsmgrCo7ePspW5HUTMN5X5YLoCgcf6bQt3B97fw3wnDiCNtXc7hGE2Dg5",
  "key12": "2nZmx9jjgeQWK1bnZvunX2jREZ12g2kwDqRUJhsWBEpAn8uvRvLK1GpCgDqeQfghWjCxXMzc7ZpvsPE5x1KD667W",
  "key13": "3bj5yaqheZL6ZyjDf7CiXcUVWBop5GcDDTgj1BRJ6mezMQk1aueBL9XHqeBRYYGzogvFC189RCEXBVHa2ESaNscm",
  "key14": "c571S3padmNyjSNUVsYsmi1RZmYLqvm253888PK2mFkJicct916D9UWTfqNRbY5ykaNuuscPaLHKCni9bLCEyTt",
  "key15": "5YMDxz5D7zuJeZxXxQLz2wQLRXEe372P5g5RFh1sBFbiE9frAzTD1H7GQwoDY7ei9v8Pi8JuYBbWu9rqBnZMGcrC",
  "key16": "5p4uQTShx6d2xXdJyQcgN9iYEgPR31qW3mAJ6QnQkVGsd5RTzRxw3Lxu55mADCDhE1Cp1bpS4JMxEncHhxzsVxfU",
  "key17": "45dW4MroAcTEwaUprhrbS1nD66Q4sm599RW2xz8dyzAtWtPciifEXLXEPK7Br7gc4ia8trixKDCfPBz9d8j1zc8r",
  "key18": "3TDX1XBNNJbj7SwXNnULMz2kt9RCDrfSQDM76ucTmgH6rAzYYXZWGFtfxPkGXDLhjS7J2LaDGR66ToKf8pd3HD9C",
  "key19": "3GJJrjVpa9yXMoKsq1CaYtsS3cxVaZUGFS6aqMMQC5wwFNKcdAFFZ9hUKA4F8XcseQ45DkT6Vrn88cpPULa7fjMS",
  "key20": "4w1a385qLWGRmEV1bbNFu6kLLaotuSVC1f57MYRemTQSBYBWMj76FLSjEXFzHu7bwe2Xd6KGxeWQVa842boUHMRo",
  "key21": "52dZ5fNNrVE7zbgNTzTetU32NXbNawofnSnCLSyqe8j2kbEFc6TFPmcwWfEayYBtCbi1ogSkECh9FyA7bYD63W4v",
  "key22": "2qaL9ZrbywvbYemeqYr1njd9JAzPrxt46BGQXrjMy6zu17kXUS6rjut6cwAspuhVwavVgoYTebdkwcQe3YMWt4Sd",
  "key23": "5DdhdqX2dctogozs5jFyqMVVgaRtGxYvVxpRu7PFQroTZxzMMNVnCmWe1F6R1sd5MSHcjREuhUzTr7KnDUePXF4f",
  "key24": "5qcJHvJVKLifGwqQS3TTo25YZ1ZJ62veU92BmiHUeiYPZdfzJ3zin6maawQCbCYCerYGCdaNWu9nboj69tRBUoNN",
  "key25": "4HhYx1eEqx1TsYiZL1AoUo9o554945nXDkHTap4XG9qG8GPWnsDEHutGDLLLhEu6KyQcyYNFiHjB5VPKQejHKU7Q",
  "key26": "3mPtv7qM6HeRtn9eQGu5wbhMps43NEq2G1dnEg4SDxN41XzmXVpYcT7z5u7Yy3zr681rei3DUujnhXTgaz9mfBTn",
  "key27": "3YQ6XCPxjSJwWbBfKSjgcxiGa2kW4WSmSwavrfaKSZfxSC7sfcjxzsyhKF7HdXU7zzDM8Th656X83Ai6Gf3zJ39k",
  "key28": "5cn8nYXTkMYSN6DT8RQx8ErCXTnXURFdstcmKX9U6j4352UGaDapDK6P2i9reoG5giubeakWvuLQ7ZaB9Gop22d3"
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
