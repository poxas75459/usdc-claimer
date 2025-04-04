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
    "RbZcJqJnyh8GTTmQ2Lvm5YF5PZkLvNQuo3FoMCpdcT2DC2fz8sktx1txYGnHiVZSiU65K8zsbGFd1gEm6tHasRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64p6pSfnRFRR5XmjG4rJDr3jeyVWvKQNaF8AKjDqssteMWXCJDASMBNi2XhM6GLwHdLRkxFzaoSamGe5nV6QmikX",
  "key1": "5LzSWZVqtnpdjV4Xz7e8JvAjjTphDnaerpFbEfL96wp12t8dUZQRMknkjWvAYYcpvezE8M6UcUeRC7AKmzC6RZjR",
  "key2": "2h4hLgcYZhuc89FYbr4AsstnbRMkdKVERitEZb5WWvoPphbZrAykPFem3VCxtJLHVhZ7sWwD2Gxsz2RR1Le7Hfgb",
  "key3": "58qyPrUsVc5SNq1MEhHU1A1M1B5Zqvor3WSKcxM2mybK42KuyKb1kxeaZJsQk45e8DAgB8BG5o8QQ6CUKsoWyRKX",
  "key4": "52S1tF8rNS2AaPdcwpZAhH7s7KLCXU6Tp846DMzRMdYKh8QU3ijqtV5CNtxPfb27Cw6zbDpckEDhr5P7fA3cWrZk",
  "key5": "A9YBnKp8xBPfzfUUEBNSLehAs1nvLitRiV5hCG5dxPuzZdY8ydCLMeXrUiKLwNsXk5zMFcJM6TWnP6Z4hn2Sjk6",
  "key6": "oio8bK1qZ2kyxGjmhxTA4sNXJDyEUvEcLSuC3bwcbxqLdqJH2VTsc8TmCdn2zGTgjWVERK1MwFe6TZBbxgDCf6q",
  "key7": "sHJbiBaSkBEzBfvojz3BXFaMb9yK3c8WBJm9iU2sKZVTZb587PRgiMdLhkqsVijbTWaaFmKVy5nkZvDsNBccych",
  "key8": "YPzMRida9kVx2aDEwS3qiLAKpfBNHjjaeyfPvj7SxsNLnc79QD5zfngHg1hpiMoeDenUNqLU4AsWX6kz7jdLiJE",
  "key9": "Dnqn5zBDrd8MyJvAqTmrB4JvoBoudFJdc6EAp7Xg9DtfxkQS739me7CSuqQT5gZfUKdCnbnL7r4amNAbh3GJ6pH",
  "key10": "4LatUdAAWUwf7R9vyKW2iKDKzrDJXa2XZ9n64hcFZQ9xPHAjepNXpRHKA4eeCZcL9hMMfMfGwFrw5qZpDqgPkWsB",
  "key11": "xDp4YDgkuWB4cBwGYcNKqgg9r1wjqbYYYkuJ4QKD8RnR8FBNkssVrSoxmTy9AahfAsp2gaFWPZb35ZCcyEvjkJf",
  "key12": "SesXEL83YQa8aUFQw4sMtH4qDvk9B7waT1j66gCfwpnm7HVQYAZxJc5koTvbTgdGbwkwD1ni7y5hzKC2GFFTKgs",
  "key13": "6731gr7FM98SqWnC29g98joYdxBA6LdDm8Zyfhc11KGvj7yFVw2GyfDsuJA1ejyN3qbWDkX68WHTjAKMe4TTFRVg",
  "key14": "39GATvScq3d1WVKjBFumWPVLManW4epsPiRipp8wJd1MsA4kaLP5DkdErGjEHZfNurcFUcC5FZT2cpkjoNztTdVA",
  "key15": "4pDHoTV6TXXKZWHWNcwaJ8ppjZmxbYyMYYEVUzM8xrqmCWbpZZgyTLeXcFLEcPyXTWAR6NejEzmMGkJe8i2rtnoZ",
  "key16": "4vG6qDoWNRQyxcPvrTYQ6BV5871FymtsGDjxsxT414vXXYCBTHbrQyq1teTkrr9DWVb4SQapgvMwj6FqAD8suuXH",
  "key17": "2CLW9xNDYceuzL4cAK8B4TxDe6to1GeBHHtvkkDDHjvnuiR1BxF51vL9CTYM1emHAQxQjSsD6rWt6Y13fb2vGXDg",
  "key18": "3YHN3bgCfFAN2mg5qtz3RoB8vX5vbJ656YvzpEYEHqw4kRLZgXbdwrN3PoU3cHVdaae22m2UJDM3hd9maJLfrSrU",
  "key19": "44juorRRZtfSchBaVYxnK4nkogdqNCxAgPdShEBrwdd2v7gqHZr8mYSKncZEzUNhi721dcF9FBqXxzuZ75kqigsM",
  "key20": "z33SST9T85wqHgmGWayCiLhXq7Ys2FV22vt9n8L9Z25JKLLq8pbsr746gMbyCtGCxC9SPWC4vxTpCXbtynXRsY1",
  "key21": "41fLTpU7PCUrXbdgiat56dyNgT8y8Jb9JbcTP5SHQAfG1jTMWvANwwxdDXbizrTgojJ9EZZL2wZGDnDUhY2QCZxq",
  "key22": "3h8GFNPkJmhyz1iuzLN6wk4nEPnVVhtfDEhfgVqnMLuwNmYwqWqsV7XTz977CUWa5KZRc93owsknRC6xxrcX4uPu",
  "key23": "2L5BxLxhv6c3Z7uNdnxRRc3JkstRJ37VideSy5ovSyN1UvLGbp9cxrjxTpxj77xdmZidnisWC6b337exiCBJci4q",
  "key24": "62voreg2nsPeq7u5pC2HuBrsiv19uHbr1S1hJn8MZwM7CCN3feZ7VHj2V2Rwwi5R32yPrXKb6EmYmvZKyktBwe22",
  "key25": "4bK2LT1cHJXhnkn53vULG5i6JVHZfUqEqzpJhXRubSXVtpJWQYMSqRGYVu965iYGgPcstJobNjcqJtYrLVM4QhDt"
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
