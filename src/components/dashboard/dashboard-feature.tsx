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
    "4svesZjNtgGyaxrHHiLPzwT2hTQC6JH1K861VdBV1bAMyxby3Ma8dDBhWrpcdfUnciTrSRxR6WkXkyR3zxc9meXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DuVMCU9K37DNd6eWyLAKxHiyej1seUWtiPhDqWxCbYGyPdxhBvQCKKewwzmeZhyzCW7FsKEKQLKx666jgyVG2bc",
  "key1": "2L7rCfGW1busCQMH8zrWTCGsDP5aWPzbxcjVtwanbRPvPCWosmx64Cpbu1aZdH8D8iYKmQ69aSq7YRiDQ46yEviR",
  "key2": "2UWj9EFSG6AAH8D7hpLjWrXmuLStF9qCeSVVqQ3ZS4tBFtxTnYYa6dqP9gLiMs5yTiJK3BhhfsRRJ6w9JHfv5xkh",
  "key3": "4ANecp98EceBteJGDtzB6GTL6xbyvLaUEtQwoSWVE8pJhmajQywh9hneSUeeVRq9GiyZmNXdj4g3CnVRpWp4dwNW",
  "key4": "4Q15NX7zPXqEesSNgmJDmgs7abKP9TiECyUeAsx26h2fJnm5wR69atsWXwSJsVqoWu2WeYgQoKyW3QNebNQzMygW",
  "key5": "UBqSJSSJ7Xtaf1KxwirhdE78q64MbNs11mPaVm2Be4xjU1et1qkgTmok7aagQx1fWtc4kQc6JgNdk1Wsh3T4XjQ",
  "key6": "2hqM8TdwTtYpM6GoriqywbPoCyPXq9atrGfUDeQMzuU4HzdCgcoCtzFypmf8ZyCoT22a8YMmYvem5GgAgupxFLko",
  "key7": "3soxS1coaCM9qaRKf6Z7DZ2YzEBKVVz1ARnsmhTfFzKtU4kgRkEtmRqQ8isT7g8sWjDRCauNrYxiJAc7WotRJtYr",
  "key8": "dhz8Sa5qPULwN77cepoLEUk4NhEcGruQzhhwfgvfCXYrRdqdTyZ9y2nUmzShWiF8dKvHYKhsoL98NfxfbREanT6",
  "key9": "56EfH8FKaUEGJR3osiTusiMaQvoSE5NLz2FGcsGcu6EhVecYdf66s2nUsPvBjPYk3JNoH2dMzs1qP7vjgoxnyCgu",
  "key10": "2x28esxE7yURVpWzfJDvVg8XzVaSbAdyNnXMndfPx5mGkkNg9xaGn6k8QNTUAStS3zyKrGAKqXBLXHtcnoGMyctD",
  "key11": "5jk4vgoMgJXvrYYanFkwpDQq6CEcJjQK55ZJ4LeLLzPAkxBeSkL37iy78CdyTioMd7gP1Nz8N6eViKFgd6A3sErU",
  "key12": "6468APW7Ljr8pGgn8viZ9BuSEUjwH12ek8hME57VkzKRYQPeaN217YmE8XS7zCHZ6iZymbwovmVq1SZNL8VsDfpk",
  "key13": "5aj8YqJnSFrvKmTNNmK33TeHxcFmHW91fhy7v8aKaQqe8Ehfh4Hrb6Cj9TW5ume867GP5pVW7k92Yvm51bv9ELYK",
  "key14": "NczacwBdqPMeif791btBRVziS2gFZ2WqFwDRQnBmXXC12twPF3PAqiTnVQiCvyh3PjAEh1pVurdUDM2sdb8vomn",
  "key15": "KHqpDjqZ9qtpNpLTeDtAStduM5RUqJ7fwFDiLhBRf7bqb1cMDEzMYHhbqciPP6faYLJCUm3PwKkEw6o8vTzCxXB",
  "key16": "4Sc6h4LAHUFA1vxNMb6ow181Y6vPLkETmhad16m3wBFCorTmKrc2A36srcvvibnXZYgaGvnk2vNW4e6xTsiE8ubv",
  "key17": "5dbBoVUC2iNB1XxrwaxkJEFTWWkVX45f6TAhrpf7Uqo3YL88Nd8JxjSq1SkaTAvcxjNQH6pereRiTxKYWrL6fsVR",
  "key18": "BSRJKGwpzcXtBpsk2HxG89WCK26HMgyUJgfBFRg8SPmZDgGxMhN3zK8n6BHe7g11hq23mTxtv1Uc7Uk3CKdoGjN",
  "key19": "2wWrGGsKqQEhXEgvY4oLk2KAYmhvtPTwSNSnzaJeyKS8WPh1AuWSZDsU25nMTQ756Sp95JwdLqUD4nyS5DG98Cdn",
  "key20": "4UKWUCsWyDy5NrEx3Z295pN3MCK6EU9PR6ufbKthk9RyWGTPH7LnnJJECjZB7P1GVsv7QBnjpa6D1C8JQ6sAUyBM",
  "key21": "621y9Dy1qGNCzgAT6Vd4Zw19mgN5ZTEtGs1dGxv5w7y1WXNsWLYJsqZQTBHFeoPdV2wV7VDWMQTGCf9BSGypuoAn",
  "key22": "3efZ8dN5wohxTkjKv1vATvqVa1RJBATwiny25kGEdNa1bLYJxgjAq7A9f96gA8Jpi8jfAexJ5rabRqsevEVUoeS",
  "key23": "4QHccdRkFGDPsR5xXgFRNJ3QmtoqTnUuAvPgjkHYCcyTnSzHMrsUYBHfqV73CWn9YJZwUJ2NaYdN694CrvTG9WsA",
  "key24": "2jUoGG4qESvfMbebE42BHqsvnwqMi7WTUvLsmJHBmRDRPLFjfLmUazGCxA3F5HXaLuuHxGcCCHCq6ZuryZJcLCLZ",
  "key25": "2nTdn5FkejUXPJHMuUt6AKt419Ntj3KoyJcYZ8gud2MA6tq6RkA8i9nv6Jcf2voz7SRBA4r8t4GaJ6wnzKvL3rtA",
  "key26": "2zcBGW9qYM4YoWohye2Veyy8dNyof5iXQoyP68vG3ATS33wGw6xSReWJidq4o27VoxJvP2ANvfFLacdgBvZYbvs6",
  "key27": "2r6zFSGcLHFJUYqCqNeaGDFD9Eu1rue7MKFNgBVXt4T5kfJvMGz5riKWSkcMRzBNSYFCFK5zBgFPdFhAd6h2PNb6",
  "key28": "35S63fxxYqxABjAq5g2B3ass33bYnekzhL2b1xUPHVKY5zak8dvtRuLsRg6mehHqV5LBZ9PLBExEkffKxVeVGJh9",
  "key29": "2gseKAiRuTYSZoC3tW5o96aRfgm1sudXZaZQWxiY3hnByQtRe2ZRa1PsSNLZz9FrvHfFRB5yxyfETep2JkZm8SXj",
  "key30": "4Pa9yjv6fnyimeBk937p9uqdep2Mw7GyZshu3URsXCwJcx1Hxsef6bCkk2C37t8yJX5heZFazp71jqkUrHXX1Jdg",
  "key31": "2hHcT9RaNuBRVdhkdbBxPzDjHTtjMMpSMBh3mqKQCemTiKiYw6nFjUTz1sTHguR3vErGnUYchV5dS65ybXLKJEhS",
  "key32": "YvoxS17M1q661JBcB49yMzmmi29yzp8kQJg7fAShU825LKhKyjwdBK9fv63xCkpB1jxmW1WytCLspyu9pgh4vGa"
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
