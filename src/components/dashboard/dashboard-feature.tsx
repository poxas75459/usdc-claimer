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
    "51kUJvTbjapqeZL2uF3cCDvuw3m5p5tGCEZ5z8yAQgks285gFZvh9B2hGHfAhkJaRHS7yrvNDfUy5QH1pxaVDufb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bsevdkozzVvWQ6JhZ7hm72JXudeeJSYAAELpfZxYPwkoPspcE6v9j82AjnoRdYJbznJchPR16wsUwdkrzz7VoY4",
  "key1": "4YB7o112tcXG3n5wicRbG4Ajv1KNGLKKHv47HLcvuNMpZGZkQRvMgC7Hwfq2LA6WcxRfUpS1xwbTULbcETSRmeQi",
  "key2": "3PLS4byxgxbEPRVyaxB5Raid5PCbzHE2gVJsznE8uPPhDeJzhvmoJQEmYQgvBVYLfRWZoyPc924P11CyKwEpzSbi",
  "key3": "iAzHXAwQ6rSPxs5Bav2vcuC7TMz4yizuHP5q3tZHwg9iAbUoNbzbPxNtJMUAnD2C33bPJGoBqEXAxPGPjd1r21R",
  "key4": "2Sfzk1etrfbEWxYv9G2rrpVaMLb8KgyAphtKz54CnEbaS6wx9UB8pVrbTHAovDHRBJB82b3rc4gujr5AKRqLV6TJ",
  "key5": "4kba5Dsjbr3emQaCjRNeUzdannXDPXhDwd3YUXDAUSHo7DeVAXRbf6BzkdjQ4VtbkLFTKfGYjRnu1jEvVbpjXwvP",
  "key6": "2AYfcAyAE6KJtLrnwTDqkx5QinCJsSjmdMZ2btbGUADn7YxPhm6rakJv5dgZD7SMh83KqzaShtNewezc8k4kgos8",
  "key7": "5JL7XPARfajc4oFw5VmgwB4rusLF7hEKsLXLymnhWqsVvLeukWGSMACWzse1FfoKTUsnNvH7Xo3P7gvczzntYj2s",
  "key8": "5AMRQeUc1h6w5JY1GHEoK8G3LCcGt6uy7C3Dhf2rhxrcCEwq9MznCCH6hQnByPUhBi7rkksvgxdGyKvSF86SXiKi",
  "key9": "5yLG6cdjxVtUoghrtYUPcjQSDvxmqXXZeFD4db6EzxEZUnfuicj6CdTFDsz13fvvPh4E9UmN3kzj89dVNgiGk7Zw",
  "key10": "KR6KCbn5MgFfn1ZKo6Rx2Psgj6vLrgfrDZMocrHyRTcL1WASCacVwwtTJgT6JpckNBMBfjM6SmaYLJzLBPMLbK9",
  "key11": "ZzrUb3GUGgcqYTVrK2baztmv72R8CA4Xv2qrFuFg7kXGZ1Po15h2NMnmACMfVriwr46WajMVxTAaW9SbwtBhXYf",
  "key12": "5sJPx65bw5fX5YXi7rG9EDhEFoc17iRvoyKA49y1qosXXA9yeemTeySbDEtZbx9pxK83WFfFcnDQwVUwBwWn8TkY",
  "key13": "3MRewHiXFwj8zXzWLav9pB6Sz71L2fUfC35ufMWuLR14TjStUEVx8oPSKNPKZXaC7PV26KekofBogQeD9Hscfs1e",
  "key14": "2mne3pQsopahzTG5LobdbtjnxcKU23LAZmDYsS8M6NJoDaqNK2pqwEf2hC4y6TqP9UxLXZiBACVCs4xgc14U29qc",
  "key15": "3GkqoYUfpAqx3iuevBnXP5VCZXZL4ACmry2m9tspCcvLf4RnkGrpxh2t19nPTSG4X7iQJ6x8boMQqJvo6TBXYXLT",
  "key16": "N9wDK3u49baAyqW1aAb1HnpUuANQnAzGNba8H7UtpqwtHb265KaUZypG6gWTe2BVYPBtozbXetvdFYn2xyyi5qh",
  "key17": "35NnHL3N4JuJ2iBo2fgM6yWCncf4y6Gz7n49S9W6b1SjRPCgc2wSZwizf4RcvxK9xHzp5tLY2Ryi5SmnvyJygPN",
  "key18": "61CAQ4mjwS9ZNp7yhReXAvaeJjykrxADFwjFFtA92XrCBzznyzArxAoJKnM48MVPax7ZByiZXfNMK81HfMru16bp",
  "key19": "2qhv6Ytwe8tLJUr8SMeaVdnnx9KB9LDgqRQow6wZ7V6xYxHLehdNjhC9MkT887LVt1osWUBgGk9CkmfrNHpQx9rz",
  "key20": "2KanQghhyRkD9xUH3cV6ivt963ymozpoVuMcYJcZMVArMNSv1nnGvk9DLnN7H5SHBBvziqH8sRhc1kSuymkFkW4M",
  "key21": "WZ5qLLg4zC9n1aWkjzsnM3kERhhZPZtueB9QHaoNZvtirsWD7amEowgCKmVJzvRpZgJn7Te5gkE99UGpNTY1oR9",
  "key22": "3CcLuqY9k976n8tGyc7piVYnfr9q6u88GPdymwDkhX2orEBdMTxWUhrJMVHmAB5SW94XMMVLoTBYWCKzD6KKHTj4",
  "key23": "4S9at5ihQKt8bnWUro659gy7T19u86zBR9NCxX6PXKbYYfpPbPYhyr6QqBqLN5ZtbBNUnAvBD1rgpJv6SWNT7uut",
  "key24": "5KK3CWns6QUVJ3y2pb8wqbJamywScRbndMQ2CUijb6jjzBUvEiyytZyQefw1oh5MAFqtemtdup4UneJTDwfieBJv",
  "key25": "2mkTpcoHhKMirmrz5wyFvfnhkTWZa4TqABzXfWKFYnTLJEFvnJYXVYHxzqNhLrKS2NNNsUZe9ga9wwacfFQUxmGQ",
  "key26": "5rcvwbquDptMLLZPmARiidx7wvbqTCuTNa4okEESLbRTuLcCzs1vUuvo9HrRoWcXu67fUx7YciSWvnWHKkjn5BF3",
  "key27": "S9FPKzi2P9oqmatLeDjr8ZSBrb4a4K5GMqwTRbjAbCGCd6M2rDxSBhMuqWbgP82xeathx2QrMA79KkWzXFZTdXi",
  "key28": "5c5jv38oTphhF4WnzfeNuUF98yT5Zo95ANZUnszjp2Q7GzEhFhrNApZr6TBhwZ6tVzoHKdctFNhLJ65sgEusMP9d",
  "key29": "5J4XNoA1Zs3iT92Eo4LYs15XUMzS781zQjTyvk8q7WmHjGxLwPVc6A2Qvaovpq9uaoRQNUVNUwyTeEfXAQpC2qef",
  "key30": "3DUQncKuxFBtDRHnm26CCfLLUnuBNDTrmjdHBpPrZoi8Y6a1j7kDVaMQG8cXYeiZBosaBPW8XH8m8bGvtQ1jtRbB",
  "key31": "5oqTWBJG2K74rhyiHFYHRW5zubxaLWriKLWqwvVSQHzAMXLh5Bjv1o3Mby8B1bjWgBtkqrymsDmeutEh6RqkrxRs",
  "key32": "5ZSdKqdKQ7oLShEvAacCbeayk8T5M6PQ5YpkuBvpGcpGmnE2kuPuHx22V3bhFKxLG9pQxB1ywmveyUipqZsLejBb",
  "key33": "2NTeKwCBSy4ttLjVEbzcncA8s187ZdNShYbXzMXUCWRGsYe59ASvMfeYJuRUdpCknSK6J7deT24FWmUBEbufcx6C"
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
