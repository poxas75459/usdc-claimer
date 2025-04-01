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
    "39KCV3vCHDPz52FdE1gcoaLDF3GkYXbC9skfytGEjuq2TubLZSxncixsDBHE5aAFT3dkGcJ8KihMAhZCwydqMbbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yP19HUkMWpyPFyySqyP6Q8hTouiFfjHoB8wjcgYRWK8sAJG1soPBzPygXWoastS9zBwUNSRaUj9JMZjWzvNM2MY",
  "key1": "xAumYEELGH8yTvgf5qHfhCZH4VHokFzJd4Cqpoen4tF2LS5H38tebQ8BWdD3XpmqR6ZAddZbDA979V5ayQwAqME",
  "key2": "2hUzac7xkRxoi9hQ45Y13kmngHSSuxjRo5NTEJWVSnvb4XLeVUnZbrTFxWW3j2GcHiUbYgnDv4wrN5WNUACKURip",
  "key3": "4TbSw8zYjiAv99RPpFB3Z5gXVcWjxAsrskApUYHR22aCpwDXECwp1RkxZF9ZhEegXtVtco2pSvmpQpgF2QgUbYLm",
  "key4": "66Yw52XaGx4j1HmpyUQAWvGK5rGXmTduvsNr4YtSprijUnVH4F8RtZjWTKjWbWC1YSbWwyvMP53mqNhwnUjZHjtn",
  "key5": "5rJCEVpVQtX5sTpMP4feV7eGiJ75HMdNLkjDeLHc6dcLQ4Sp8raUKAtRgAd7oMBuD61uiMS6MK5Gzms8gW8kvDxi",
  "key6": "4kxsJPoiqtNgsCfebXGmvf4tXpiGKdwnPWyXCzHVLMEUuNChqxC6MQVRz67486xqGtuDFCg6wHuMxa7ZhfKEeGad",
  "key7": "4HeTqfGdeNaqWr5MJtS8yGEoZtTSWpkC5R5t34AH1vhBAaWPpmeUDnU98Nw5Q7kEpuyzKhkUiXfUDqCGRaR3fsUe",
  "key8": "45Fc6GT2cPoknsuBXhNdP2bkqJQfCGKgymR7jJ2zUqtvCYTQHSpFQyfgHFhpYqCqMtteoFRfNb5cCyAjJ9Ac4JDV",
  "key9": "5XosWWLTRWkKzgCfripfeEpbXjMNb8iqmr3oyLZ9tW2dwPv4qahzfgbdf9KYEYHy5b711M8RmqnXBJ9yXDeDiXpT",
  "key10": "6iEiWmN5N5Qp49KnEd7BwkPkyFwoP823uosyVk7ihT1GEgvGqvRvBUg5HxyE5782TvgZjRrWrbyDN85FTXukKoB",
  "key11": "4JxcAH6kbqCMNfjNqUUVFdNAFX7Vn6tKzFoo6KawfzLEuVabMsmQJBc1gkmFRJcq2Gy6XZJVFuWut6458Hj8oaWz",
  "key12": "4hceBJ3bB3kZzrhciRYNMXLYFXnffTE5Uw5Gem8Gqze7fqf1ee1dexmXRAmZ716tZJvmT5F1SXWcTXjVvsG1LZ7t",
  "key13": "441H1XRW8Pyf6LWqEzMxRwKA8wRaJCAFHZd2hQdk6yow8muFXEhDEPfPoG7c1QZjQTYbfEzXRjfnwmBU4fzJ4W9v",
  "key14": "67T5bd82cqTrjubjZiiuPgUd9FUbYKGHxpk3MU6X6eR3fmHBGGLd1pSxFoMGATTP9fzWusCZ4V5M4iS6CRPQoTrc",
  "key15": "5UmbTURXdBcJhjcSrmcDszn5fVuWPPXX8vdcGAfAh4cdmGCbmRW7JA7cqvkUGTgvxfPx6ocVoU67JLYzfH9WM83a",
  "key16": "3D4aTp7he8dHXVWuusyyTDQKKm9i22m1ggdesLpJp6mAiGm6sTgZDE3MYDpfFk5dyNcTLAPzUnxV3ZH85QFwm7bU",
  "key17": "4NWNQPYcMu66zG9GbxofnPB6eoAWzbK1TRRSvzyomnapQPJ1WasXLd36oVfmb6Lwz4QE5tsbsDyYNSasxU4TSLYK",
  "key18": "2CWWbtwSKs7kpWqMjYtKcu4FgsYvpzrZnAziicRfy6RuQVikHW5WYHZVUoXAHPB7d6CKj4sX7wsCPWAkroT5jKnA",
  "key19": "CVicS8yGUVeDBCxTWU9awQFVCc23n4zG6hiGjVNB6Gevosp69dsV8mhMXXKns8exrgnKxYiX6z2ADjemJWVrDP9",
  "key20": "636TEL98u1v9Dny6Ft2wgLgYCgVoMi1iUk4CtvhU5sM4J5q6NsR94qE8cuudJrN6ZvKU1h8TwBka1WkuVBcUVvxh",
  "key21": "49ZrjCVsyjqLw2BHqzvvfZSqNgFiBBozZh6EZnJu5andpqzvXcSnA9aZKjx53n6m1ky8sp89mFnP4PznZdQbcSZT",
  "key22": "2H54Zx2urGfLtso7pNE8yVYrj8k6At5CsxzsKQ8nBEizCPtuvuX3jYRu7GxXTVncGzAX9JsY4CqciiAQtDW3Zc3k",
  "key23": "5Q5R8drLRj7puYZoBPYXxjL9qDtnnBDtPdzMnjc3hSPunAGrqG6pNP6wvFAt8DVaqc2affXjcDuw2MP1LbrJqByH",
  "key24": "4rgyYNzEFyHPJzUXoiupzK9jqY43WwZMjNk3KgtCey8yc5YKSQKetCBfVpq9LekrzrdvvhbVUwLh5zw66M3Hy8f9",
  "key25": "2wZGxDyBjbnPsz1E9H41LW8FpjzmKu54rgBUCFf2Gsb9CPEKRoXLNZEwRQvVPPdmrCvBEfdXVYk1roHpf2ZcJMDa",
  "key26": "5Kiu88DEDSbNPZGoDcadDTH6SwcDVVN2fzMop3pvFnrCGbM6TL7jWHeML8mRfrtZ6umLFJUCnBm7Hgyi7QENzvUm"
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
