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
    "2c9wGoXmwbSySW6MnBJxaqAJ3bBaKZSNYZfEH2DYGavPhPZptQ8EiPHvmxty7KPVtuTa2sa9utpt647rcyx296ss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4quqZmdbi9rmiNUwH6nr5dXa5kokn2MvhcL4y1BA8G4DGZFzNzwveNMMDGvHx7NEKZUiVooAWhHvnW5cZPFyh29J",
  "key1": "5jdzmP9Zo1is2NvLvEjTs6woaY66utzoERMBPP5jUEryzFDpAjXrA3M3ByfyzFsFpBi5H2bcKguNuVVyvGLiK86Y",
  "key2": "KPPfJqvXy6EEk1UVf8q68q5Sy62xpWHVkWXvdptMY14CBtsvynB6CSi77WTh182DARcc55zNdKDCi7Ht4JyKRyq",
  "key3": "56WZrKuUjR9B3oo5KF7jk5vigzf669BSr1GT6a93sEWAWsFALtowX1rgmm3PBLGRrxWLydMcC9hB9WUh17HRCchk",
  "key4": "2Nu2P7q4UQhYW8yZmwq9eruYDp5hJ5LVRaNMHoxWKNs8xnSbSzw1R8eZ1hNAgrJ6L7NkRh2Y5eTSzFJ8guW9GXp5",
  "key5": "QToTZZLmh1TuD5oUd5ECrcaLvuBseFJpQuHcPQtFgWQ6iaNQmiS2RutuGMW9efgsR3tSTiQp87FYPqTyGEmGYzE",
  "key6": "q4gfnzKs2ajhxPZU1EuZN5qR3hVUnjwBnMrb7JBV5p5zbSBZDmXCGjiTwoUQJpGUNkiRGRiVThzqJi817rMzk62",
  "key7": "5TVwbsmYsjatcg3Q2wyAy3Na2eEwmXvTW3JZq1CkGYqMR5CDf41f3NX91TUrvBVofAZsjLA4T791UxXg1ao9QbcP",
  "key8": "3EJwzNhGk5jwvXCFuDhSdGeMyLeCkVYhfZaTpfJj6xsdWq83ZQFgXLVZoZbGrSFddGrCWLk529iZMVKdoGNsDMCe",
  "key9": "3y1YxtoVpA69ygYH8Z4yzvmx4zvdhxGS9ix2Kw3b2DRdeC5Gxg86HSt49hFdktxwVEQRvbRpyps7CXM87X8jcYHo",
  "key10": "3mq4SvVHBNMHm6oFukHtWmVJLfRywoADNP8NQiz2LyP6eizwHkSYoqQtqKRCaKN3dy7Zkkyw1NWCqVBa2nCJZmrQ",
  "key11": "tN5hj95huLPcXbBzobwS85z9cgwzeTAD7FicTLoXnDhA98dPU43WA7sQu3DG9FACnyBkz6KWsjpE7V9UV4oJowy",
  "key12": "5C4QETmgZg7tR9xDD87bHSjN9BwGmjKPCYSkY8T7Z1C5oCNRLzLZXy58B8paywDjEzYR29p2VwkuTn8UwVgthgz",
  "key13": "4qNMDA6pkf6zLuVJrc4RfA9Hd1s2T9GRtyoPHCjLT8A5KnQM3tAE6uUvC9GPpvDZXHqPYaVHT2ULkq9PSrmtwi1o",
  "key14": "42Upp3fZBvuBN1qPwZ9KJizgzqFp7AgaL211DZJZAzC1L9vD4ce276Ru3qnFkxnVCL4EhZZSHQJ2qTH9XbXKCrV4",
  "key15": "5H3DCg8P7ek5LV1DUYdDKN2z5k3QCV3ZoCKkW275GULriY1h1dtRwEggUbtcUJTwnZdegK5UxNZ3GD9rdeqW7sW2",
  "key16": "61nnwrikagV12YpZJGMSCiioTkYD7hjDmKTMegcqpGchEW3mkm2w4fo8vhSoaexEHe5nC6rJe7u6o7BwuFGsi5YH",
  "key17": "4iHv6d7fRpiobVBZNTYMk1WPgN5yQDPnHi8ZCd3uRWRUYkhgX2MtD2R7PbkJqufyD7mFjyKfGEjVXP35nQDmUXxe",
  "key18": "3smXjNLoZTgkgsDJAfgqZHf1KHHZZSTpAwKQmdHNr6mZp2s2PX4eMrqvMF1pocyRL8E5jMBdyRnq23PkWQsChvSf",
  "key19": "51EMRzn2ob56iMTaYTcy4Wx8XZrS9esBd7j5BnMrNRJYZ4J5nxyWF5hZaFoaQMfkNoZK6u52vViYcjTfdLMo6vfC",
  "key20": "3MSchsbAxUXeXqZkwod69aLHRNKVe5SRzZcv32qYdRfy1zxCa1PaAKnYkCwnKTZ6EcXUc7EYWGJGNDYyjJ6J7w2G",
  "key21": "UeCvrpqfoqUaQAMhEuRfS3fm18ezfjKTQkzcQWt14iaYrQmFeJS5aVZe7hWnB68SPS6VoURyNNM8CkDjctPCWH4",
  "key22": "5AVguret5omkUYzo5Q9EwAj3n6D6MdJ3naQkzUf5BaLd9aUrYTaMRmEWaD8qJNGia1juJKpDQRW1FjNJxBknZFwX",
  "key23": "4iQttrgQHWfYYXNgNycxVRzzojVNRha6B1Tz3d8aCpYjGzUDCTmX6ub2jP3WWX4FXxJdUXwgPuQaACFqZmVocGsR",
  "key24": "bc5KgFNBsGqunadkLqW6uAjVhvZPb3Zsarb1xu6s7yGtmywbHTMrLSMq8okQaJhX7QFeP116VHDXGp4Hpi5WrUZ",
  "key25": "3DuXjqwrRP5xDwqgqDkj8moNDE36LfyV7PrnUoiAYRn86U5B4Bq1uh5ukUbYKTjVRsRAwSFX3brcMYz1xQ6bFrws",
  "key26": "CbYKTJkiM6kddow2b8yXqH2vjZFzumZnq8oHkpgKAMXuzLZjWUu1sDvrkSTAj8w5kQ64fBuwRes1QiTaVPEyj6j",
  "key27": "3JbE1iL17GQnF4hoHeQH8DT3qqbjn3fysdAgbU2CkHaYgnYPZCh78NucBZgmBK6zz1ocbuaCyvT5yvZ2tGyBRfXx",
  "key28": "5d3iS8QR57CT64kaQuzEuKwwV7VsUEXTKcL3X2WAaGfEgHexTFBenWJkHUPScEEfx3w337FkWtw4AQ3uRwY9hek4",
  "key29": "5XGx2mjMuERYfB7wC3L1LRXNk75VP8kp6mvbZJFWFnrzQdTPNAeKgVfeVvLcUNpbBSZfLQ9o99vSs4VbdWbiYLqh",
  "key30": "3SHNFjpfTU7UKg7jv48TLtTz4oeXNJ7gwiuvMj5KbQKeSK92gfsHaLZruULiXyQpQBfgXK9AbhWR7iCFUuQBC7ML",
  "key31": "29SwoUv3vxNAUpwT2ymeC3FM9BWbF51KwGCRjxVxSKQeiXZKG4dUx1zpUDXGcDUi5wnVUzj6agmRoj52CZ94hqjh"
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
