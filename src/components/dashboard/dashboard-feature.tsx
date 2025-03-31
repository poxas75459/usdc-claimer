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
    "HHnZyGh2TLQB5cjCCLDe92mABJpgHx25mSDMiLcjvEY5RvSiaZCTZXvKSQQggLMCVk1VJujRb3g8B8TuiJyU22q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r8WqxQfKuZiAXECkHZvELagzGDYvT1i2e7iuWVHVsJt8rbgLieZTghVEkPXAotrbE6RdTvpjTGD3vBpMxpuSCuf",
  "key1": "2nuSi9gbP5V76xwA1J2uhpPXHqbWt2L5ZeXeFHeQCn55cTntZa2g6ZQgAZ7REUJXTFtLztgicP82pwJWumiXHqT1",
  "key2": "5cNoKBGjHutLU9bfySKmXdgQLK7nXApDmHc5UAba37uCNrCj9bekLRi7139U88KghqVUeQbPmZferGhCBdHXcKiF",
  "key3": "25k8YLmngtVT2Zh7dNUVxu8KC16NXW9b21bymSeda2HTf4BmVEwJDVbP7eu48pAt24dTAdhoeCdRbvDdCqjYDJuL",
  "key4": "2cdpLUXdUkKeScCrsco28wDgNzMk7MR5NSjBN8iwgDJdDvK3jViRdw2o5pNrdRrAvi6vcS4Lz2bNzRtE9cmMeXzB",
  "key5": "2p6jsyhv8znWDscidiDpA6UeAfmNess1AyNtcFcSGyxhRhx88zZPcam13UTx6j3aARm3R3npPtqYuwFnX1AjMfiB",
  "key6": "5FKLZVgGyQQRogRprGq9q53N5PNicy8WYcihxtAEgdP6gDm5FfboL3tLz9pqiPgaeBKQeajfwJziHtMYyVoDcci6",
  "key7": "gHZ6Lx4eLkK9Y1gd75Y6JaF69SyfoSMPSGTHo2PCK74omJvLLMX5c2N2rSmFEd5uXYimJjYZhzePFmgfXRVcnNC",
  "key8": "4PDbr6a85q2sr6rsDYnWeRYAsWkgUyuSgUrfaASQkaZ1PdVYRmoibvYUj7ZHt1EK46Sfp1XCUbLzWsuYb5Ck1EBy",
  "key9": "597dHGb9Cb8kML63vWZoZfgnMxhHbM6pNWYHRwFqwdmEzVMDbg4Hv79E4o7uvZR2pMoZUYM2VcL5xDQeg2hqHxNk",
  "key10": "3qcAFSa6Y74rJ4yakNhxhWLKje3WqoGM3Yr8RpcmDBmbKpT4DAsgjALhryBZGFi8xAqfdAy6RaTnhNYWExpGyifR",
  "key11": "2QaSJNjFWZbEjaATcqFFZXqvhxPt5ctzE28f8kugwYdQVEGY2THbaD8qCgUqKucC3Jg5h3WNfsw8DXvtuhq56vCg",
  "key12": "4mA5VadSHRDYAcftJG7usfF5nemHkDQqMRDCoQHLXv1VrzAz1u6H2DfJcQHskFqN99TbEUzL8eFSyy1ijDR2pHix",
  "key13": "3NkYVkh3Ud2u1GQuzSvY4AHbKKfwLpJSu22HPv5jgaVEgaNmaMK8HjG8tv8osSbuB14i7a8sBMQ4HUF8DUSMYZSR",
  "key14": "4wJ4UQ9yzgqA3g7Jbx2rvy963f8NMDL9da5txKPHysB6uZnXj7RK7SxPmp3wgnFJ3yKBYZMCfNC9htqepGgieYpQ",
  "key15": "2QDJDjXKFMyc74Zww2uB7BoyAUJFnkEaYp26nvWcAgbTYK71hu6bR8kKQX1L7fnnrnrHr3cXftsQZesrmpAxDnLE",
  "key16": "BGcQNxpk6gZXUsrcry5vdb4vALZ6mXYitWmZsghs2Uqi1pyGJad1Foor7Leug6yrsVUv4YcttKDE8BW1iSj58Li",
  "key17": "3bEj6VERRybVLyxqswmsy97dz3v68HywZ18wUTNWitQYXd8utf2N7jEcTjAjLptwtLZbxV5yhPeSLSa44F2nZfCe",
  "key18": "5qNqDD12xgWbmFxHSPJZiaiPLhzarHYjZMouZePshEZQ8UPo1Zd1pAWZ5nuzvXK59QxAnWNTkULB7LvmYPBQD8We",
  "key19": "2LePEwgVmmBK7BjyTdFEUsKPDueLN8cZuCHfZVzsBrBevFQ3gr9q4WqpCWMygNYxU7hHfd4XGgWesyeFTc8kVoD8",
  "key20": "3eq31Kdsp4avPzo1FrbE6ndhvNHP22fJMu4Z67gLgizwxqoYxjH6QniJAwPhnuMm78gndTT6xN6mWRRaW226HTRk",
  "key21": "43mAHk9We2ADr6EbVnx2QSFCWpkB7Z2x2rCDmKjY7J6TWhxcHhJ558LLjRnn9umkisc7WuvJASYuwLNjaQ77PAfc",
  "key22": "e8i9uzX9qr7VcziGuFLxBqbATPDfD9WnQT8jCrTt6mco72JG6YBecZcPykT7UCQDNUAgFPpgfcohndxWEcVzg3w",
  "key23": "5NQGJx65wfx5f6zTyMCPXNJE96JjP6GAnJt9cJSG7xz6uYfiho7qtTM2ep5VMnbonfTwkisDmTgaThYt4x33WzYj",
  "key24": "4ZbMNKhi5oCs5pbX7s2eFsMHKBNMGszwWcQCGFVkHjqhE9o5dNh3EQPQ6Rv2VanYnk993QN4dYpj4kRMSest52YA",
  "key25": "SN5Y6pMYkAAFZ6rrUB3oLJetLrBFvPW8GrtaKePbaJJieFGayQLFoLSqdaKMr7e6j8opsH7BEHqpgSdbE2ZuXdK",
  "key26": "NTMjk6uFKWwCjtiFc3XkDSXBYRr4ApWRMxYvVVLSSbjdrPccPXyKWe2iutwcRZ12vbvh2ArstMhdNMYzPsBGdAV",
  "key27": "4QvJgdAg6eRymMCcBTqCtWT5SPq2rCzGpkGwMn7rwUBvW3xkxP5uirAcRu7KNnc3Cbh6siax2yfPL1jJ6E4BBqLL",
  "key28": "3D1yJ1nMYPTjQidcBt43LibjGoT3qoKGWzf4bqX8EAY4fWTYkhDCNWbU6svsErQi5nF87rKxhEpxYe4ertU4FbTh",
  "key29": "3dFDqdU5zVWayKLSX74Xs6dYeqMBtVQxRKVPv8eNjtk7tiZVhg3vd4N8rJ6hVKcY9noX9Jdj4Vamq2QMWrCrcvTL",
  "key30": "3ovujow7YYwV4TgsajRDWFBF5hgWcjtsEmKSM6qBSe4SekprBHFR4PQWb6yKnBmQoBWU6X5WWhj8nU4yJdQZwkA4",
  "key31": "4FK1TDf4tkBbMjxBY2boRkbYitMR3snZhkSefp9uaaRZHza1xLH2ZcC7Rg7o1okbXw23kPsBjJZTKWnmAEK2fPXd",
  "key32": "6fMXv2c6itWYj8MTjPL3HhuwPmwyq8cHLywsTdXpEkUVMqM4j7rkmYnZFUG8JfyfUACgpKfFRavxppwvgoG3KaX",
  "key33": "2jt7ooy4czneKzoKZjtzsom2jvL18YPo715ooY4XQ29qWq3G5xsKSp3DS7prtw7tacm3PtWrropqWw8wd41SBzrt",
  "key34": "2VqH8u7uRjyP1aKEam6Ai9hUP6QE5PvTx7KXmgbVbCJq7pmgwLF3twtBNaAP7Qv27JdkL1r3js6TMPBXi69bBuyo"
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
