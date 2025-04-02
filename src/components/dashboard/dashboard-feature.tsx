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
    "ExQh4KgYzaEEGud4BavG5hiZmpzxQgSz9KEFYaiQt8HAXV5VNXa793bEjZrsbYYpNtVsA56oGo9M4opcWXh6SJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ooYiDHRrCovQh393PEHf3vmzMM9Ky6FY5xhVzytdNmoLgXvq9qs2fnJycAsM4tmZsBx9n6x8zgwU9Dc6XpVQtTj",
  "key1": "61fAhwnvR6wQEUvuLAaYJ617MRxrtArNe9j8d2TgrvfjboM7JNmmAV3zK4HNfCdeuSnrMH3yJ7weXCDiPRKMewVr",
  "key2": "5hzqEJVELz4dMApX7NVHFwwJtQ1DwbGLJzB96hyRPwRpNX5MsRwwxoMzE9ZgfH4nMjt3v1P7w6nn3nYqa56viakW",
  "key3": "3pcyXnKYfwAK4vZwibQDotnBgtrD8uev1DCDoz4M9L9aupoMdN4k5ZzAmWc3g9R6uXkTNvShrVsDqEZyQapu8bZh",
  "key4": "5Rv9seRG3SCHjkAhHfQgNoPbBpVVUrt3sDutTrXk2AHTyf7BqoSRSKg9JkDBuHCbK76XACKX53cxj9gy2G8F6Qwz",
  "key5": "3Jm2ruurdeGyc7oNixnpkT8xiAW41Kh9kNKFMn9RFmr7F25QuwsKERhq12esgWskgec6uXGCRJQCwrLEbEg5SBou",
  "key6": "pgdve2vqGFUzFhEg2fNb6UdepydVPuVh1NtfiSLSxRt9c7LEWSGDPUujGhQUYZZUTshGR3iicU153hMBQdKjjVV",
  "key7": "5yEHZRdf3V45FLLyhoqmRnmzUpJ5v87XX6oxPT6iDnuC2vVcj9byhsNXRVJcczfKgSBibTqGkUfEPQFvet8Gq8AN",
  "key8": "G3D8AHAXj5NKyV544qBWx68xkNmvZVSEfsh7zT6CPxKyQdnCbskHnMh8Myh7G43StwppdQoakufSXAgzPUp9sqa",
  "key9": "21JnHq7JqEE6mnPm6zSs1f7c5k8CZSaDikc3K1GJkKdFN7Cicj6AFRjftn2Dubxy7znffzi3aCaauQeREJAthhUi",
  "key10": "5ePQXtw4UW5tKm5dK54qAj72n8GEYPDeyX7ZbgWcu864s6ZsgkgArMKs3Xp3dVyXrWugGJKK7J98kGDy3SVQgrEA",
  "key11": "LJ5xj8RcNaWMSGZdA8GXg9nhRFJAKJcxA565fPQtjJKpZm1niP4cE5TSjFYqNM3RCMMQ9ZWAK3mBRWXD6aPxtHQ",
  "key12": "5BKjqpXkZHMdgnGPr3NFTmxYNtPgM47XTmfCpNYswTq23oiiv1oDNBDL8bhxzCNhwVpitQmmqQoWQs9qvn4T92ph",
  "key13": "54UYrxbzEwMe4ngy3u56moNRq1EyTpnFKxjxBHhguKWQDJKiRvXD52EABQm913Xn752bEdGn763zuwm214nT13eQ",
  "key14": "3AUjomEuEhaLEAjZmVau1gZLq5Ge8hqcJ6uA1dfPDUuxeGAxjRzJucB361P5cVGCnMJ4jCkLDwJWZ8G3c6u3Rvbf",
  "key15": "4rixvJnGGszJ4JFnAW3RWpXRMYpWXrZhmCcqvkL24kGmxu8hRqKCDoAxie9p4yyy9JfbxUCBZPgrEfpbm6FGudku",
  "key16": "3kMRJN3cLJU9M3WKBzg3jQjhqJLxjDs51FJKU6LUPMJ3Rfm76j4srxJM5z9qfYJZDVaA1UgCfNAi8CZhmUSvrkdW",
  "key17": "2q7Fqt733EBnKy3dapjRsFv4JV9Ek75WUBuk9SfG6whLYDqZuphw1aHVjiszMhQ9wux15SpTERAHpkmxHwfPbTe2",
  "key18": "62hdEUnZmtKzdkPUoGkQKdHw2r1pmS2bgSLsSHC4vUw2tiRHp8gfdFfJZxX94QLPznZWKcyehdots3G2ffJQe4MJ",
  "key19": "4RWfsYL7BC5FxdmFTiSsVKFt8ucW3xb7msTnj3LKEV4ohPcGM3ej3UoL3tan32Lon2hboZXiDsZfNrZ43PK11vSF",
  "key20": "4VAc4DJSVVZfenLm6s4XyzWKHTbRw4kB9xgDek97nj98JyqmXwd3i2wqv4yM2WZMJB3MYp6XLU1dMcEHAgzEzXqz",
  "key21": "zMLEZaRALW197UYTxPMjbLYJaZSCYVYrikUzrCtcG7h259yndTxPLyWUY94T7vFtka7wWsoKSzFWXVFhmdB85mr",
  "key22": "rmoQqwXTi3MxzsNef6vKXoJAU1L5hTKTdEDNkaj6dQ6hVLQKX8JFLnviGmPHT5zk9xJDpaWEb1oxp432YhEAskR",
  "key23": "2p7MT3DKmKQKwuF3ojibEDFyVUwXAmpnkD9WFgApmgUzmHxdfmmKBdbbWD5u2sF4zHVdEMYqhkUNes56k8gRZ2wx",
  "key24": "aP67xDqA2LvanLknhJ3MQtjzM3Ntztc6J64ENWYkxkK2kWqnP8LWvo4ukKdKKMBJrWxqEcwhJYPXLZQLFLtBb5o",
  "key25": "3z5Gm1VFBQ2YM6ZkzK3AgrTf3GQhWkAnuwFHkXhLbxWu9Eza8FHj8hbkxfo6CYgp7B3kTYCGGBgyR6sWKEydVjr3"
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
