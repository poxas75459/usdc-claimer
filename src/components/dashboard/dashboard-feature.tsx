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
    "41Zutp6uUFA9Fs6eVvgPnXToe36TD49vMRhpDzbsVnkhy8qhNofTmstgYAJ7JecvTNJEPDMboLuh27YYcq4PUrmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YruHmqHrtA799DdagSEPfr2678FvdACwCtj2E7nxhiWQquwrKg3DdtxTtStXLQXQnVNe6vnJYhHmUmM4L8KLznH",
  "key1": "2fhPCk3FAaTvj9PdRzagowhs9ztdxoxBqxH58M4rzEyBPs6tTKcx4RpKzzgkJ7HssUzMUVZmnYvfRvwqCgwKKDof",
  "key2": "4bQVwpA9EVZrqrJkTzKopd9SHvArPC5EgdFZ9BHRwV5282ACzLc87bycapx9p42SHAV9D4g2dYw3PLZSsxox1LYr",
  "key3": "5THwSkM55N8nKESro4esyDdNUvb4228MnnP9wr4Gin6xMX9DcqQJcv9kRqocJ1Uor8q7VeJk1uYwmU8ZpbotiXGE",
  "key4": "4RtXLYGmH7AmaKms9sc582ZQ6denYLBTMTo3i6oeTUYBZJHESSaeyp7RATbYxDK4uha2PDDcb8V3p41odW4HHUcQ",
  "key5": "RoRygPqubJ4DjYhnCqPoRJgT2TP31mcAk9LkXkgdJn9q2bQ7gzJAfgyZwhSKN6pojjgmUHBivsSaRwUBwpqHsMa",
  "key6": "2g8uSagnXu6s3sUeqxfgsvdD6pSPL5Pxx35WBQTj7NqPtMh8uqAT17NJjBuEMBZPrwpQ6JwwmWzTyeGrNJe3r5j8",
  "key7": "BDP9xxYSzbnhRpit6m7fV4jcn4NKcoqNznw2Z9PvDGk2V2mccftxFkKBzzjwDEV1mtyyFjEN1H5p97Zt7eV9s1c",
  "key8": "GqXAuS1pjM3g2deYumVEHUn1A8rDW7kryHeaa1M1AzbG4sjHRU6R6CGLddbJedSfTNNWaApz6pns1m2t672djtE",
  "key9": "5z7us7k6iWFMLSeBamCZSVCd9PFQZe7c8XE95QnuuykLRR1tmozyXiECAcnPucUyMFPcj92SETH5rGmtvD8XskCD",
  "key10": "3FAZxS3tCzRNdgY1mJ6HSYJ2Bvn2LkGS2sMa1C2pjCst2USNFCKnfF17g1qzKP5kD5YaAGZ1gmsjzRCKKZ6pXw1M",
  "key11": "2HYeQUQV7KBsoHED45gd7Ciz3i5dgVsHaC42nxBRoXf4dBRZBfH68KNWpFbtLJiF6cYLWFxcMp4rR7EB1rXJbufe",
  "key12": "28Ad4oqoBRz27f1LZmAzv1L5KHTDfCNtPjHGHcuXFZQfoMhvdbdDY2kjq9VRW4DpJcJiQfxaaCaKuJnKv3vohSMQ",
  "key13": "38Hr9ym1QY3ujSj8e9Z3qCZiWUaBtLo4pqRUx1AimvUyCWPh5Q1jT119FYrZ4TYTmBPxwfze44DMHFWEE2dvTXfA",
  "key14": "58qcaSm8mDpSbvtdVxwwBqVbZd7boKw1iXGvjGv8zV2teC4sZb79SzTvRxbQ8iL9FPh4oqngsuDVu9aKnGiXixd2",
  "key15": "5nH7p3c48S2KgfxVDMyH2PWN4nuW8pWoJw42RNKNR8L5fMisTBZXXDz17NETqVoMRGhXfMjZHWqY3CAdAhmYsiyi",
  "key16": "5DnDGHiHU4ECkNdEMwt34LKRrVABZWNEBRyiM7rVxhuCxoDW3SN5d3y4EHWtE9eJBjVckdUtfe3RgtJc3xEkMBxG",
  "key17": "2mMvqoQ8MTjEU9hQ9gQ2nPzxLwZcqXmLZyWEaManZwgJ1cBz8StWha8zCotABxVFiGQmqmq2ERKw7Hhd1keRnx9s",
  "key18": "vbJeNSTxHaSJ7NFAwxXrVobf6JYfibiF8WiGXczYHgKDer1fJXbUQYNAjBkSEZoTkcuUdiPy4RBSwLif26puajT",
  "key19": "kuizWVJzZVxbm65JyLtCLZCFMiRCYYqPhGkjB6WBgrrcna5otDCFE1xe2qhAJWBXcEgqxtreae6DJMEK4JA5azM",
  "key20": "3XiLkF8MSPJJLFpU4FqGp7ZCKdJPQCcW4dxdxPutWRgAyZHSHk84bbS45nMjry7xjUggVAk8RfjSNaxXDFCeQru1",
  "key21": "2Wp877h9QdDHd5RZDgxXwoTP8VirXnPokngHGWprxWL2VmHLiJebREnQTKErdXGcPZhL4epANG6RonZTUQsSznu2",
  "key22": "vN5hjQCdg1N8bttM52ShmR73FqKSZx4oSjVDkuyJM7L9AfyAxfCDCpy2NjrUQhK3f9S1SULQbqWZmVELKstJRGh",
  "key23": "euWB2hZZmfMQPbxzd284VwND4qiwo2mUo2rJwHYYhjpgRqTkfH75moc1ZwDQLRCmxLF6aPkJrmpb8jrNm7DRyZK",
  "key24": "4Jh6RXzMJwSRnhkjgGDK116qkQWS1neDYGBjrYJVessAUjf6Cz7bhTnMMCbUYBNEM9DysdS9YovU6uqnkSVqWG7r"
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
