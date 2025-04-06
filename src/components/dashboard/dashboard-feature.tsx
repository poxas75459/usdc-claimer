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
    "voStiVucJQ79dbVq11FT5FQEEDTMt6PxUPb9cRJPPwa7hwVdZVYidUek3vLXx7c1x2bZeQ5SfJtoTUq9c7rsLEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ma2U1kU1B8XWzgaQVRGwRGkG2ZfiBCj5NwUTgoYMqCBz7MXKFYfV6ZRQ3Nj8A4XusR9qFTvBpsufypthGYMX2KP",
  "key1": "3rg31D4jCNDrnngazxx9Eb2vRJUADHaKtecNuCTH5dbGGXjuyHt7ta8jUd85KZFynuodPkCkHp2uMM8x1fFWTaQE",
  "key2": "5BzR1cVXR1Hxe3LeMGnBxu9tfJ6Em7ywZZ7a3xcuDs29a8Z4sELXh1ATYXPof7EPePUXPkXVVnmwnyhq9z6Wn4sU",
  "key3": "vugbYuw1LJXrJZN7P1fhxPAzgErTd7otL9hQU8gH49yHj28ocSLV2qNVAdEXxJpUftiFG9jpuxsZohF9oRsEyAe",
  "key4": "StTNXnkaZWqkDn2opCJJh64SDFVDjBdrsvSD8nEuScDjCbVVMgpZBxcxtJhqtHecG7cpT63cqkpkUwE7tVJMtRy",
  "key5": "3izn3bKb3w26o7eKKqHPiBDjnGGaFMzVKYQPHM38cTET6HHBauQ4fiezjVZbEaqYTgvkFjceVEgtVdu6BHC7U3U3",
  "key6": "4GmUe3EK8LeZ8NnmuVU1RJdBJnswhrSTJutogYSYhS3389zMJLPE48j2358RUVwsi7fW6xJk9bBg3sSiQzwc6U2y",
  "key7": "2LYEHhwLxeUtzDGYRkZ5kUy5pLYvyBAmSiqaZT7bGE1DunxssVyDug6t5sx11rLWFbjudi4mCtvAwGC1QvVFenvT",
  "key8": "3eVRrJh5qd3Y7EoDrFvEcLo9baYeFv96ehntret2JNmF1HJBryHS55sRQmpQndSd3rMSLETY2QsJpKBbgRTndkFA",
  "key9": "HCxdPbr13PFP5d99f2dbFNfG89UeXvh2YYUVDSAjFHNTXotyCFynXmmJMnErXzPaFmwB1VWZ9k6GLc11GLASgun",
  "key10": "2edsBDW6EnAF8TvTCEZdLcMJkfHwcJKuGaUVRNNKfLmfVj5bNVw3ZbNYbaeYN2vZ9AoVgjZH72mWN9geSYAajSR4",
  "key11": "4ZQSjGgLXk4kaeNpcvTnK1PpP2WDJJrPz1Y8qaQMFyeDDMRcHxdJbAtcRR26CdT2bJzEQxph7eM7aGdAoFnddLsv",
  "key12": "4oQfkmcuBotoXQWKP6HqQzDrmpZyhfucudjCHie3tv5JrsuKd3bK2FNVobVea9QQuY5wxKXuakzJ3XnrVZeif7X2",
  "key13": "S8JU3uDLw4KuKgaMegEQf4sKkAPsJc7SKguFN1fj6CofZ7nHXAx1tkrVKeaq8fqtkSr6YQPccmCRx2QNv6tPqjw",
  "key14": "Z4RDC7J6oXmCiUKFQtxEjVBpNzpwArzD1TLs8zTM9CBecm9HPJzTPMwottWmHEpChsN1pZn5QJfKoD3dkFKRBaF",
  "key15": "5EXjcUquzdeDnEZDovn3ag6jESfRFbboKRY4TZsyySVGDRj72ShjgzhxMWZ3Qcusc43fyvKZrUGCu6qjS1XRMCmB",
  "key16": "5MCSGQzFvzwYwU7vZv5H5miMq2QhgaRr5gsEdMEiAEYmFdotfxKiQTtb6s3z21RDXoC99phpPF2HQG48pBUcr72U",
  "key17": "swapbgd1CrceRExdotT9YdQWdZ8Nk5jXCECtSpwiu8VKoKVCjpj6yh6BX4GyMFt9srvNVrBHmjLNd1197oA8dH7",
  "key18": "3UK3cJQ9knRqzFyQosMLV64horWronZbcJVGfjPvhVmkJDyB8j3YBSXfJesWeNqC7JdzqvhX5jX9Bv6hHLF8XSQZ",
  "key19": "2SrSyeCHNdhwevJcd4wyU3WyS5CJuBRUEuZj6fS7dS6SqPPRLkAeSPMFhTVeiUocoEP2Afiv7KPvsf3vRZ9DjmTd",
  "key20": "G8vTiwNJh6GET6i4MVoqq4EmNyBNqU9kaGCWx4FF53UGVCa6NaVaJtTVuZvQNbtLxf3fyXy3TP24eU2Jdi4uPZc",
  "key21": "4UeEG6aPnPGN3LFyteT5hVDjgEXLugvvEAAs3EBAfZPzjmRAHzxGHFajGJXDZZ6fTJvcL7HU3UVR7uMoCpTFqPFZ",
  "key22": "3aGmvis78Fe2WEzzEBvqwQFrZzwTYwdaywSYgfYFT5YtZDM3GjJYXo2ViKYu5v2ykvXtf88xEzUyY4Vs1Nfp4VD6",
  "key23": "1LYZkdhHES8w8z8vmw6hdXeoWdCQZcPS7pe6eZZaar6218c84SbZEpHx5m6i9sa5MDwbNoTyKiJXuCR2eEGWvhN",
  "key24": "2L5TK8yPndABx92fSNrj3rpE27zKbNj7cX8SeL5RdtFM532V3qw6yfmyv68GTk3PD4jqgj8BuvcjjoSJ5RwhqDmU"
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
