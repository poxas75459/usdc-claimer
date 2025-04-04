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
    "4SMmjjvBwAp2NTS18BJNzhZGgNZmpHEGBK6P5sAS767aUJqWsQqriBybBr4dGJTdQ6tMEqsYsHuu3kTkV8MraiaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42dDHeLyhcNGwmmjtKVvyzbbuqo2wW9qN3xDjZ6zen48whLTq3nYxWQwZ7GcpfHxxXNJYQM7fhqFwnf84uAimqGh",
  "key1": "2KV3wPU13juStqxfz5QZuMdQJFnES1b1BUT1fEjao6nKPMivbTncEprMKUaH4x9ydiGNkeY35C9Nu3FETSkVpEfZ",
  "key2": "2RXr3rg3gaPWjXU87vLzQhUjnhnKtxnvLreQHCxMxXhPnMFsBPo4pFgDLq7vxRDnvQMATBhfqRUQcHafRZdpUdT3",
  "key3": "ShFoSbBJFA2QW8w14axWrNTfbfF1ZqBgoZbS5Qy4uv7DuUh5vhHGcMXK7sY5a8A12gwPL5jgB6xY8YXUD1THNCk",
  "key4": "mLvqR1SFMfAb53DWpf92YzcAYLjmp93ZEScsS4s6HxMbZ6caW73CQHSxGp6HuN6X2Q91qDW9oDT3iLPpygi1zNn",
  "key5": "1drtBLWLiPeg2Ykgc9KC8LLDH2YbX7yaraUBEBJRRi7ws9EWFyb1Qv3EQHQ7soPo6qiXRoTA8XbriGEGeYg11rh",
  "key6": "2AFHyzuKY1oY8R76rsEmvAdpbaK5nK2MUFcyr7XH3xgaZWwHPXDjPtGKWnSzUeJWhkqQPf57v3LTqtpQ1Q1VKiud",
  "key7": "1nScTzi2JwteFyCVbqQNHc7AKKvKXnHTccfszR1iokoyu1VvDCR2ngpPpiq2agz3mcHECnNaKBkY5Mzan6BzWTM",
  "key8": "2VWSFSQrxtWxSXoPHYJZRmCx5CqwmbFvXPeYm2JidvCLcPrnpQRANWAyTjjSF4L7iod5c7UWEkBgPTzNr5rdGYLN",
  "key9": "2QspyHBMCidU4F1d12t4vtZzhFrNsJn2iRxwyVTC1JxGZk8YgnTimeXgXmU5FWqrgEcwKYxduk6bwi4rygFfvB8A",
  "key10": "3RJaUmwR8n1GkKCBD3xJferY1VkuSQdcHTmuVdE2xRhD8CQfXiXX6DEPwW8UwhZ3ZpCXbgnSDZ1TA11DqfVXRSo7",
  "key11": "227uitoHHKUjwUDnwhDb6gGiwb18q9jsqVh751g1rhBvvF6biqnLz4NXobTaiXCGiXyQd3WzPrLpDLRoycYZ7V45",
  "key12": "2uLVoZwzdQawCyAyptKqyJqAR2hJpyEW1Tr7MzxpCkL9e3Zqf8ZCGTd8k1wgyGrjFcNtnYvy81BgZ87XoRJuXgUL",
  "key13": "3ZmB2Y8Jg8X5fHkj9FRmZ71bWP5aszzkPCoyznmAVztcm7ErS3gXZRJhvMp8cxsh8gSPZ7L9rQde7ZQ56brmck9r",
  "key14": "sAuSg7Cgbd4PDbAmsNK1JvM7UAGqPMqcDNzzDsJuA6FEVnFtjFJPEiNWyQaBzZ94bsDw98vgw8ZHHLycCdiivLn",
  "key15": "4wUzWoYz5SpKDY7WQKdcfBGhiyjQhCzsWVgedEnrAwomBH6gDqoaRLeshQpvKq9tpSpJd1dQWEjm9RNUSPKT3DSH",
  "key16": "5VngsShaEn3miXAEoG556E94vX6eZXaMazYCjTg8N8oujSmQBDPHk11wJ2DpyS1SwsUqHzczG3yfD6REKCQTnRSB",
  "key17": "67QftsypHc7zAHbiK16sxZtFYTeN4a8BhGKYUdTdBv7xfYbU4nNTnCvKzRNMtdSK8xjEifBE67gQnzUDpzzuAK8H",
  "key18": "4VmGQcr8cfQFxtrEjFBZaPKjwcWjFReYWUNfQLJNFk9j1jRyMCqkWcRKWzgSYAvbEVsGtx6G9ytM2EGF9Z7QAmyo",
  "key19": "5p1uEmfLsmiTPvpq1sAea5jBagGyfaM3Gsm5wWzhmmgnUtWCU6pPGLusm5DDfvr2qFc7LJwUu6PwvDuZdHvsjGZZ",
  "key20": "3D25pwU6NaYBjz3DRcL6B2sQpcTSSyUnSiz2KC9WJw7kMjYdBd7XurjaBw1fET3CjUyfMzKwzRXp2ZStGpRThmzo",
  "key21": "3godiTK5YVmaMN9pbjK9P68tVAqiHbhnK9v7io8FwPuwQ1x6pnTKHoD7mXF2EcuHhGGCgmWvGc7i3GYSLJEpdDu1",
  "key22": "2Hb389gVDG9M12dDHNMFGFm1eHbYD89DMnNmGaKPPcHop2iAHv1dBfyepQiv8bRbpPhwsNihbousX3kypFFgUwVE",
  "key23": "5G9ofKHa76FEgR7rJS5Tzq1WwF96AHXzPcnfNCzSECTrEM98g28bzX93fyknZfmbfAvCVom1PuSBithcHKJScZo7",
  "key24": "5qRXvdobKkM9GzZeXyYF6szYrS79wWiwYHvCrrWwFVfkRae7rNrxSZD5xkfv8tNfid4KjuydaDeaQLwbLyReUWsX",
  "key25": "4zUCuP6FdgzW847hwWDAyEUueCcVUKxuZW2xH5ARy5FFGHFPGU7d6CpYTtJx7659k2TLN6e1dGvHemmFS4oprdTV",
  "key26": "4HQtVVb4AtBETQteDXKW5CZ9wkSXV9rSx2afafE8ac8XzTgJrH1a2JLk6QtaDLWEkMW8M5c7j8ZK7k2tftRiMp8c",
  "key27": "ARbBnT1CFsfgVPUwwkDzYUERUcgheehCvC8cScRh2jzexcJ4DMaYj922mCTquk611ABz1AhatWdY45mWD4Qu6mE",
  "key28": "5PY5QSH79Kfd4Ktqua4J6kCW9a4vjdHmfYQZHPZCYgjx6Z4s3EJTyWvRR14zzqYAcY8cUvRdnQrxrjX6E8t4k5hR",
  "key29": "nTim7HKrbguRJoPotbPCLX9yTm3PjPPqXdoPxVZDYtdYcBpHCAsg39Unug7sudxQvCbVyP9CQ7fKfy7FKBRNQdJ",
  "key30": "4pg2SwAGibmED4A3Ypk6uJb3YWmS7NhsHaTxzv8Qzan3YCmaRZNjaiV9TgJkxDeV4gPkBUModJAA1Qe1HtBkV1Br",
  "key31": "4kXjYtd6JAxjQ8K1Y2xLzkfdG3CXXpQ11mg1VKq4Q6od5d8JkHCt7HmDqxFr3dBV2239mnHiGruHyPrkEYi2uYXx",
  "key32": "5oCUPX7ZRNcQ6yb6U1Q7F9YcbHAk13wnjn6JTHPabA2rRMoxny6YLcqwL9VuCMxX6vtjz4g96txRMLovRtV9wv6u",
  "key33": "2hjeebjB1LHWw1UxxZS4WmGoVrwbM5B18W8C322T1dp4oJvFSdXUGWs9XBc2t9vbAUKwELMJ9L5vBGzKYJtLFbgU",
  "key34": "3Zj72aRjNXj4VPNXr32J5xirYcTkyYwMKVWngabByXWUpEzVY8G99zumeDJixxPHn6jhdX9X6HeWCtxPkU55UYHd",
  "key35": "jDMRT7cuTyFkXeUBHA6Kv3H3vkE3t4vk5VcjE7Qj5NtgyN4tUtRGwYe8tChHbB4YrF1mzAv33W71T8x7DWtumMb",
  "key36": "3ffnFpo3KPNiqCguCnRQRgXne9Ubvtcua4x81LqSZp7K3phjvvCmWaGQ3dawAKgeycG7SjgEu8D6qffLxpKeeZYX",
  "key37": "47F1FBLm3uqJXYP58QaXWYPZFpBfRbKWW2AUfqV3YdLHopQRGMV65ZDqmG85Cb3bqhzvXr7oS4o3jqg8i8wHdDi5",
  "key38": "7NZRscHCosJHhSKezPcTgXbosXKygKjDb8fmVWzxy3Us1cu4yWbbVEFZeVUWosdLGJuDPBqp3ai3TXqAJLxsXzm"
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
