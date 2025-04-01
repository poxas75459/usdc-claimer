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
    "2cf1CAxWiocmq3wGrTftSi9at1QUjW976XbKH4dTXHiPCbVy11UVUf7yKQR25dHCPUGQM82BJFCiTPLQT4kwdPzF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y58BZGNNy6LvTTTBFMEWCDzN77Q9S2eaNS7AuujyQaqkWSjkz864AS1f22S1NEffqNreoVhBRfmBY2ERNQ1hMzY",
  "key1": "3GFbUmyFFj6ZhsFiSVqE89b8ra2rJJK5CdL7nMPGwLjvwAf7nR5w21pnMdZc6CRgAPcvYUQcVMDeaF9bhciaiVMy",
  "key2": "2kX2LxUQLTmKbiHibLCZKsdCAxfRu9uHNtwgyfWxm9JWTSSvFZFBFyWiJkW415sPG2qujgYVF3WqfyVVKtWh7jtL",
  "key3": "FQQuMk1H9vSYmcMX2FqoZ3j28HfmoN58qAEdujxNHNqb9x6hWdCNjaqtAHWeKYoC5XDkR1qH4ty1djMsX19QVLM",
  "key4": "3BDhxBBmb9L5CaE5TzdHiG5TTc9ZNbMpipJaksr8NDRhEig3VXTGPtPi4i5jtaji4oCPtompYvdgTH9kc8yh4R57",
  "key5": "5cs5TcANCNBE9sjMzeGNPbhmSX4wXkXZbcbniu8WzftvfdDmB21RhCyhQWKMjdJhfu89SQMX6Suz3oMF8efDmDN2",
  "key6": "5gNurwBEd9WGjjUfZAiRdv4vWk151V7X2femaLW1naW1SSPYeeLgpSWnocK3fFqF7EurFEqKPy9vjZKMi9vCSwzU",
  "key7": "3qzmYHiPjXoN95RLjZKrJU56ERtZgHqrgEnoX3vu4NmcKy8DP7W86ZDMn5WAYCS7c92Xy2WkN5kW4HyaQbPBqdH",
  "key8": "3aq8L8TQiB1Av8RrF4tV6rtHKybMfNZwXLRDVVprqr79N2WKHCDx8eoJxRJsg9PvwAo8uT8o1XBRzXpxbRwLdTvC",
  "key9": "3U2ykkE1e8mKC1cWBEHpPfVqw4aArHjrK9P56e5jR7Jh4fh2DRQpHHXXmWNgTAMaVkBjgC19B2qAGdpNNAq5StvX",
  "key10": "CdCzBSR7r1wWqNSV7Q6E4gpC9TCJBYaBHPGPVLoLqZDgEj1ci5wRa1aCiPwBmXtTH5vHBoGEbMEFiDoVQTrY2Wo",
  "key11": "5EqTK4no2tbJiwwY5xBkGk3m6q9fXhcdinSyHAbTefdaWdRWtgEb9jzg5m5uM1MnpfUK6QEJf2zBY6LEoo2jRiG6",
  "key12": "5bc8Z4enF2uvLxLEMmnL7uqEXCzvM4PPuC7kaoTwVVeUuJeijGEbW97KMD6B2VSDKugpDc4AkQe3whtqpjjyAcNs",
  "key13": "xLJ7QQb5z7KZwfnM3aW4j93RdF9DRuusJutUm1qRDGPR6sm8tdsRT3ZPiSVvRJUEHZWwLEQYgc5ZivthLy3uDMR",
  "key14": "v75jXW1Q3v56FeZpkmero97WjxLZQpUxYbQhuHaom9YknByyhmVKDTwLDKTu9LTsUDA7JM8Z65qaoLwMYJgTsPp",
  "key15": "zbjkRNX1qGDicLvmaD7rK1wgdjN9vVxKHD8ht8CcsqDfvDy72mNraW4i5HJYkNisX5kzEhra8bXV6phvMQfjBpM",
  "key16": "398ybeeTuiqWxkdtgToiNSKKwJMig2DnV8Z9eQ9sRCP4BduqkFhGqCKs7cNMngyUBZxcW76qUqPgdz6ZeVbnxv93",
  "key17": "3TcJZ3yXj7469gmV2JwxkDvnCCBgNEU539RCk9aCZLYo1foMQqtZhRhETPC4oNEHUFEyZiftirDTcviF8bEqBy6j",
  "key18": "4Fm5SNTit519yH8poUNUCU2CtqzjKVd7d2v345NndL2bXWfdVES5rCJ7bZaQ1NwvuSApegNuC2ytpWfSwTjLhJR4",
  "key19": "287wsWddBYqHP9zusQGtWCiAefHsArCHBfWQuj7voYejTmfSASQh9EDn3i7KpQ3w94evjXNeRogSDrvpPqj2uw2M",
  "key20": "4t2UFeUGqjdzYMvBaTmAMLcxAumRLkh6XULU29mpHRZB7cTJCETwCWMwABwVkff23LtS8zQGud4aR88AKmRULEEg",
  "key21": "5THE6YcWDQdaQgYcFYXnnNAocunMXDjzoYiu6uULN4rRMT3jCb93qqXjg2otJzEdrEqyMtLER28FD1aMhAFd2XAV",
  "key22": "4Y2GwRi2HJY9CooNXwuuDDq7LndXMiDLvR23Y341YWZnU8AzmX21YuzLdahYtFTubHWKQWYgTureCMrBkTQH9txp",
  "key23": "4m2mhVUAhhnGUnZBaV5fuD1Yh3VLv3fh8LHvyNVinKKvrbDhJ46ySGrEMDrqe7rYBWandR8B6DgwJjv3K2zbaARc",
  "key24": "eiNtPqEDKyVEHwEtkZcADmeEWXUHkCvHG2xrXm8S5ryNyZ3hcWWKjKD4TgNHK1iANYYfoH4u5D8LVoNFbRytZAC",
  "key25": "3CQigJeaxr1c8pGZ4x332yfWGe5mx8BssmTPFCEi5dcJ47uS6FjuQJA6XASzV5TmtQUnQG4u1BiKB1YRSThD5ju",
  "key26": "264r4jtHNgGXTQeBdENwM3q1zaTv6u96PxnzzztXzmc29EHC3hBVwjhRhQiwJpnz4oRvidNoZYpjnEUKsLycJy1H"
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
