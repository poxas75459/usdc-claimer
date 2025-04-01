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
    "5C4zh2J6o2yi8wsAAark9b1VEUYrgRYmmYjLKL1N3TZi5SNb2T1w4F5sHxCN5uYoCzPYWzztWhfN3CJUmemszoVE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QiSqhHzCwtjpaAvGFEmCpUAhJJoPoQ9yJUNqT85m6UKsoyzuZ6ETNyyih4DEZPRJGRoMmf4AdZUr77LapQWyMSd",
  "key1": "3RcTEpv6PVkggJFERg58nFuVb8zR5mGY2eAmSrz3RDf8NAEfSYnFFgaprUFfMm7Ct9uuaNRynvT6gawaW3bNLDsz",
  "key2": "QzVKZjGQQ1DzZP8QNujpFSKPyW2EEcC3y23rYSxyfnNDHHbd9oJ826uTQyHM96MhnYkPr8KAXtfZikJ5Z5JnZUo",
  "key3": "QTz46SL1JKHKC3hQEuUQXRJftwLUQSeGRpXMDF8DVk9AxGmnM9yw7ZCCTPxutD4cHzFHYV92ibXRCxeG8kTpZVZ",
  "key4": "4hEnPnSdMYt71FC9NiSS91FGZG2WVXobqpiz8BRCFsFuWMENxdumuJc7GSeuvRejvL6E9xbdbRQuSxRXbxV2sVFp",
  "key5": "42jamRXznohZumqPVCJXku2KWgVMX3Qy8d47v8JSZ9UC2cCSFyHAuqR2t3uVGruQJ7DuqFchUpKdAoGjVQAAFaG5",
  "key6": "2aSkQAMLX46wsmwd3me9F2AeJJTZewMS4taZE8xfxkqDVXA4j7TLsRisf7JbEgU2eyRhnPmNF1gPdgAQHcNRALwL",
  "key7": "5gwMrBVpWG5AEm3PhgDZEJb7wYPq6u8qEwEgxfL7XAYPkggVkhCSPfSwF6JF5YPgTy3cfhPyw2XMKFv2Px34wK5F",
  "key8": "2js4RTPpawKNK1orXJdb97hA4hC54hXYRVTNeTevJ57gsBnSrByGK2Avbkp7Qvnzftzem5SWVSjdWBGu6BceMoHc",
  "key9": "cyDRJR9B9eAhcjmLZeKEzrmX6FhnQTXvCr8ZbHxwaCQPLthjJsTNo9pppg2i8zQRKLVthSvNdkeUr7pq2JV7dnS",
  "key10": "5rgWcNjNYJoBUWkbsRvhBSPoXHLrtzZmcuaBYNbPJK3zLKptDb8wg8pcK6yCDDzTb6eGGH9ZV8zjfTfX69ziqVHf",
  "key11": "8CDNKeHzoPGmFQnefFdzpHWdQUdMhSc24HVXCWn8XqhgKg5Q5EUSifHzaEAtfUkkR9BFXbfhfNSAo7d7h2e5zxP",
  "key12": "3oKruBaLLJY8i4bSfxfYjwUKdkwDAdJZ62RLTbEnL2H86dfMh3ziD6MBKSg4dYEDiD19SER97Rzyy5bU6YfrgECE",
  "key13": "2LRqhjS5yP4dJcyBNdARwTzEEXNDcXzLEGDbb2P6AmfDd28NpM2ntwMjQMv4mXNy4Y5xekoKyaRXE1UrDPKWvs2P",
  "key14": "2p6kKGNZ52xhNxEBV211AU3CW2hfENx2tEy3rSi1JmbZYJjkQQVX8fQyKVfsWwCwoaFEwEHRqikNArxmuobhzh1w",
  "key15": "5NsavGiwB1iWJBWnQEvJj1hjfzVWG2gkqSCPzfU5E6QFm13KWMjUAkZReBauq5ypZL5Sks1tME6wHG6ogjvdreAH",
  "key16": "58f8HXLTPj2fTSVCHFxkAA2WWD89vt8NxEdh91KnZLjJxxAiMRgTF1iYDJNBWWpJkBoa8wdh4ipEzphSWesySUCZ",
  "key17": "4u7riiAFKvZcP2x76var6Y9FfaAA91UgNGVRDjERj67S3D5Zz1a9mGmkstos1JRSrzfWtKGp6Qj2BcuA7ntjPdHY",
  "key18": "nGCVLCumSZF8hXN9yQVsZVVb58v44YCPLdggpMfWwi3848eKBfxVnqMpNPmxdzmEabetEtDoyS7eGDB8XA43SYk",
  "key19": "4NZBkHriMgMHJF6U7T9fijzqVffr52KL74UDUn2HVK5UVbGazy4zzLD29QhyFzrVYWMBZbZoJMNmi4kSSXx3nAKt",
  "key20": "EdeZRPmreHXxjHCnitdyKiFNYmASxf2UTQSJEoMrugCP2zCqEcp2Y6xNz6uvJYGZJWFxxtbMBBK2U35kM4ebUT4",
  "key21": "5pstmZWAvhmquEEeDRRb612MWwQ8KfhKiBYEeMq99mMcdbN13546JCmfTTZpVjhVyq44EdE6xFjgS9MWwDGn84HB",
  "key22": "NLqVPdawKFEBkG5kz42c5tHYSSwYpNsyUwxRQkJ8c8XkwCmycsBh4PsGWpdtRH5DzLVb2iyMEdXq2kX8XgrTKDD",
  "key23": "3XS8wgrke12m7YecNRMD3AqF26L8zsz4ZfefrqYRZWttVCL3tWFREDHpcqKfVaAisRPjg1XKcY2tgk6qxu2vDLgt",
  "key24": "5JVMtWVMLSPtNVYXezNhY4sb9LreLn45r4AwQ6G9x2inyPDY59yZzW48ECSA2EXqk8BT5NveFQoqUy1Crr2BoWip",
  "key25": "3vvkwLfyvtzxR8D36JhoPAHoyvSGnopaWPv6GTuvgLsqupgCV3kXi2G3JXDkefLaBzPHj3dWSTwGVs2DfoWD4LZb"
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
