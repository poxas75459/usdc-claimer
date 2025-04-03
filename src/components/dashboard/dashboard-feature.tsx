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
    "2FYvJ4xk3YxFdSj3yoh6LuMY8YVWZYwNNhmmKfsPFVmLRLvJ1Vp9tSWn3fVRB9TPSWdrjJDaAThfgYxVfehvEZ9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xCsZPH3kAm4qVk2Q1EGjRnwmL5NrRxNFJNxneyoDhhg1zsSJEVdAkeHwiAyD9GWKXqdDg8ywEuJocXNLUbwpHJD",
  "key1": "3QSiC9KM4x2o3G1t5t2Ny75fz1RxjKx8ZzvTq5wE6SaW3eQ8LUjZ7QCUNaGVbkDFk36sBJWvtSg9z7yGe5drfc9Z",
  "key2": "5wdjPV8P1gZt2hGfoXX2dZWyXGqvurS5vjzgeVrjUfdrc6XdsYJPaW3PSNcEzwSQ2vC9HyobnTNfoXb1aDJJRLCP",
  "key3": "PuBBw3f61icvFYW5i1oVkFecKDZbszM9UWS1q4vXpSUaVFuGaUTeALBgXgbfHhbPthDfoFfc2V3KqRjGYBRqWWm",
  "key4": "3nTzv3XGU668jYyrwd3jMN8FUwd56qgZpcDc57bdr9yakmmQW18sGvQNxvvg1i1YispAKTBpdin9g3j6Aq9CvtJT",
  "key5": "2oZmMebU3icL73E1pLJfF2neT2KmAUbJFaDLbDLvgSqscRGc3p6de2zQX5U4NFLQZxrBBnbYrecW2mnoS9nyf58E",
  "key6": "4axP985X33pzEDucuM8yE4YdjHQz69aBvT9SLUqBCm8C9beYPkhKZQQrpGK7MPtTCJMfsHmqvPQ6TjmFVbwHo2BE",
  "key7": "8thyUPVWv4cxezBhjcULmMrN5gqoWnyaqb7HZi14VRya6Z8jja5FyhU3TcnJMooJWEUcFwz7k4hNTP76jtKGe2R",
  "key8": "4QSKbSY437BhRH16zvoPUj6hLoSB3EbdZ47zpPJfBgoUjwAG24CZPpXq9CLFEGaWG7L7m839P9ouqTxHrbHaj3wU",
  "key9": "Cg4z6z1cZBJQF2YJUSxPFeCUVf3kXdsQWh1woX1qV5PECqnTt1cLKGBXJhKc1ZG5cMx9giQBj1booD4v3PWptR3",
  "key10": "4Q3Q5wV1k9JKMDTxF8BNvpzLAbERUvSQGxKM3pwZXTeE4fbJX9UyZCDdtunfZvnZJZp1QzRzWNr4ocQQtg72PNnH",
  "key11": "3roZ8fwRgGp8YDHCpDVkmrWeBbnvpHBQ3vZVJ2zgX9ZgJrLs6Yq3777u2HSiv42rVXNQSF5C1dc4B2RFrQWyZR25",
  "key12": "3bmHkS8jXiJrWkUbG16xnraQGPKgYwYTRB81qiXgwA3MbhPgXbXwnq23H5PpRQ4QtDBeHog8HK1BKUo66w87VXEW",
  "key13": "3hu8Rsqh2RAGouKB6GrWiEzZRuWRYafcg91HejSdW7uvR2H99Fj9j1A57LWecFjRmWFNXAx7t9oR8vUrRhhyiVeb",
  "key14": "54YBQ1Pd816TmE3XoJNDqtTyq6GLTzfEkrRnJiLSxpmzQdegCHWt6u18iJg2M3FHs9QF9KDHPtJTTz689yxwHTM7",
  "key15": "GgMMBWzdFTDJJJKUc8m4uN7Kf45THfFndmJXoHfHVL311CH2V68gmUKmr5xeHvmiNyhDm3cRYz2rf4iedvJSoBU",
  "key16": "QMXE4PmMagcRwt8PbwrYoDNaT3rzo3vAzGCnfFGCWp4ud8tsEwdGKBeqUKJHBrrBvbU55nYFHH6Tt5vPhDg3t54",
  "key17": "78jiatzVXdTU2WMHB5d6sHV4jgkWNh4ngW7fVKBdmGCFHqMUZr2KLrvrTMKvbBdER24YkKPhEgNoTt9tsyMLhUe",
  "key18": "2oKixNdjnYVZVtQQCkn7dRBgHXo9LkEQWLQZU267nf5jPezk35HZwFGfV3mjFefqDXtEehQY6esGEygVCwDALoRj",
  "key19": "LvETPu7gKzPRVgoXmQCLCUC1pg6PPNnsg7cuNsvaJibXpNBDyfJbjFfnJmPn1QHpHii6ixUis3rdPdxHquP5NXe",
  "key20": "4UdBZV5GATu3B36hybrHFponbiYZH6V5pjA4u4AUqAA58v1pGLNR4JEUt9qhC548fLmqmK4XhKaFzAjcBafUgiLx",
  "key21": "4YZjWAe9nfQ9oEgojJtGz5wfLjkk8ezyMH9SYiPNHpLP36f5spcbxni9BcBxcPjUPwWKPDAUc3LxjkJVYCNxrp2W",
  "key22": "2A4jV2MAGhU38CmzbvgTPgo2zp47mbTZueCoEksYiUFpu4EpVnuxzGEMtz46nBrQ5sEHTpceesB9ZaS3nMJiKQS5",
  "key23": "5LXExSYyCTYQ6HcyDfLvLYrpZWHKofNuLmCHPdsFgnDQ5n2sjFEX3PbHgWcYpkviSk2dR5kvcKi9d9NAdkySjcYE",
  "key24": "SEJYxzMTmBFj7RzvenqAon8rKX5FdyQzZJqDjnkP9nFQLbvnGHi1vBd1oAWBgfqeBtMUPzXVHdYMF8mfnZnSoFv",
  "key25": "4g8hYoQLiMuaNr38iUniiSnpy7oo2gJtRo2eo4sUpeYRRtp796fxMuwqKiexK5scqpNTyg4TUehiLqWETRkq2CzB",
  "key26": "295c4akM6cQc7QkmLyhnouXgYsHF3V4RTJHNGKwxQ9ZZSsFKX6Vcf56WqKvJr7fMyzA9ThkkjFXXZcT61LYoQb1D",
  "key27": "fFrxjQRCfFqzampDaQrKpFKAaP8FbnoxrU77ERVhmqWtoXFhtBGMRcxvhRb1DnNxhm5p6HRZuAzEwQ4ccd1aDEq",
  "key28": "5G7qz4sVNrJjP4Wt1dJB7xexDFVtdMb9xCAqUuEMbPkKXLCPGX61NaLuEeYTziaXTPdVs5hoA7FPVVX2mGYLoVAB"
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
