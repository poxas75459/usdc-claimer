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
    "RwoAxwX4DU7ESdpV6Qse2zuDxx4437BnktSSQZ3jpuSb2R27eBLogMNtMEJmhHVfgH2oNEAHFK6Ns8DgvPMa17i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RVR1o1D5d5JRJUsXxjtmQt79cZkewfQR6sw56DdMyvSj8pWB7PekZ7kfTXKg3VJ3xFUtGdNTG1vUa48gpT8GcaF",
  "key1": "58yCEQtfHM4miCg9xXhYSEsti2xBCDQuRipyekwD5AL59QXQ1hVcvHJEJUmViKyZcLrsPgqpe9JhnkPMNTex3xFR",
  "key2": "33B4XK88haKC8BpYkTvnG4CNSY9apdBzVxT2Nr379N88KCQmkGfJAuKCLjoQjvYkamA6aVHLyp7kvZvvxPxVeCxj",
  "key3": "5tFyGrebMHDCgoSohUKh5qLEawQ4JP4npAhX2Srbgg5MH1pzTPy51Xkr7r5FnwUgNNtWbghVzgqYDznu2HgM5WPP",
  "key4": "23kQL1K8tQHpbxs7q4jjDUWzj1fmfipDvv5BFVJvyPEzy6zm9869Erbm279n8YeQmtqoYKNxMmcNsWGnzFwazyFz",
  "key5": "2N8sN1MH52byCSVxvafXXy6v9TqhU9YLHst8RCiFyzHRSgt6JaEyJfjC7MkAXTTctRi8SbK1cb5mz7QYGpiyQN3b",
  "key6": "o4dy8eS3cDpimnQMJqDkCpFFaaewZDbsumAN6eP3cwSNaCFKS4exWBcwVmXskm1dprJ533Myvxiuv7E9xnecQMo",
  "key7": "3d5JqnX2n3xz544kF2r3AAABn2Yb4tUKNYi5jKgbTQ2upwsr8EczyUjhBtqfx7dLeNq8FMRPrME3zs6B3T11Qu6U",
  "key8": "rdj3q36BB1GZARvarGxn5EpsSfVqYgjCJKkcobFzAVW5p1DEM8HeKivWr2kZF1GXpg7zdNyE5jHhukWf95eCyye",
  "key9": "4CxECpKi1UXzdVwV2xGVRPen61tKY4NXf6zWdTVH8X9vVoUqzLus1aHrT7TeGMdPUTj6cVEUCPPtA8SgKcso1C9x",
  "key10": "43UTc5kz1uWrNdZ6W3D6piF7cLbQPH88JKNJjDoM45Cg8kdtcLL99qADVf5SgPBbszYj2BUDbF9JzXC1xSRi9jWH",
  "key11": "2MSG3b44KYWRhtXZdzY7V2WL32RWoQ7jwvrfMUwMGBFWdPavUSseQN8Sjf315sbL8SU4wGZfxDsQLfMkrc8xuRoa",
  "key12": "5SAPBG8HU9VYVx8raRrAWM8RD4oRscrT9RvgCh91W2NxYKd6sWFGPr9w5LZkQscqjZvwqjP7Xr8PamZivTZLZooU",
  "key13": "NkEQtfvYQ9ucc4pAGnUtLVN6AtvskRCUvJSXSCWE2bebePv3oMHxNxYBtc9TrAkEGrfePjcDJfpSuPKRRh15uoz",
  "key14": "4ixjnZVr5LRVA8RydGJ1xyFM3kJiFvdWWmSQgroGz2kDqGgQK2MeSdfK5eDvJYuYSidn2X8MTwmsZBs5EPwBvLgD",
  "key15": "2NTsbAMQN3ZN8jHBvN6q24iXPvNi551N4rrRyC6fxbUTa511rKYwL5CxwfJNhshYyJFJEibLmza8qp2Vmudt9Vh2",
  "key16": "VgMXcn4D1S1bTH7SHwKky3fQcXBNyrrTpTkGvhpS5khUjzwWpr3qeuR5kerMHcmbixoYLZdfxo6pcp3bUJkCfy1",
  "key17": "4D37iifVjG6py62NT3tjGdo9vo26niTXPD6ex6hjnKs7vY1NsX642ffqtW5G6FuxDt7g5rJmH69gJ4KVzb3wiDvF",
  "key18": "28wyrEDewQz4PYQGRn1nNi1nyF9MFgviT4dJffaZmzyvLQWW5vvcxpniduSZCP9nGgWR7EuxQHL28gm1ZdKuXNFK",
  "key19": "5MBFgBgraEhJ2tSgrEHbTNYDGQD2xQF9CYqPDLGVDS8vSakrnrPZreyh32P4uitrnzP1g6RZqzrXK6g7JgQw3vvo",
  "key20": "5ESyDfEZWgqDFMvwJMZ5UXVGWFx959L8ptZm9qZHSrND5z59xnK9ahcnZ7Um8sUqrc8tCiEqv958Q9YZs1fJTtH2",
  "key21": "4FfEgUrh8hqJoGxMxUrXBzFmsZuF3WLKsvmYdFdyYxq4WDhmBxzrurZRcuwX6kFw4zBNuLLybG2iJN4u33TBsCcC",
  "key22": "4FCfxo8t4gWYXDZXuDtXGp4fLcyPvfx1U7H7g2d1QqM7op4ExitE1XExRtMVoEEvonAVSaFxTSMYd7MP8s5vc5Hi",
  "key23": "4q7m4PJfJZFFPt8Ux3F7q9uyRjUqAvuLoh95pP3eH6kr2b6T7GrkYoY5WPQU5gSZyKiKYHhAmDmSR9ySMdsYMdJZ",
  "key24": "4a7jhMvhMnnusAnmn3TyDCk8ZHqZgFPU8JztaimbSNfjVn6kDp5fZRXcLV4HnBhQ4BXdmVvDWZBjzWc1ZxTTrkTb",
  "key25": "3ZZdZCUJ6Wje2QcYPZaiin96Te3JhxN6PeqYrHShizEgoouD4d12U86SHhSEyDfUJYMJgZBCPiCbkJiZwhCzceZo",
  "key26": "2N17HSXHGKVLiN4iNwboy4KLYqPrwC2zuJsfJZt3psRiu9i8Hk8aos7nFhHvi2UPZNmkcRYRcZFdfFVENDwYbSsb",
  "key27": "5ib6SirRy8DPEyx669wrXaUmDRkpWw6m9J54gEYwyy6NwRDXTsXvywk7UHqsKTaEAAUwByv7pwsaZZATzA6b3FQd",
  "key28": "22Ri5UH7ERY1rxcb1Y3MvwAJP2H2zN9fsXsgkTctjdAGmwXFEypR6Y59rRTBDayoV3bqmVWxJuiiJVXfg2hhciJa",
  "key29": "5PLG28c82TDDvhfFaApdPQfbFZp8LVfQKBed46B1piYHxGp9j7ndXebfUzRKPHmYVKFERwxWVXVUjwfV3qmHHxWH"
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
