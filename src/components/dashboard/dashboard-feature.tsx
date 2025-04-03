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
    "2P7zHjLVWzRFyMn5UJA9t28WNYMHo1sFwautrhPKZVLox5PygSLprdz7Pzdumisz64cERQZyKS3D9toDrE8JguAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W8EwgcU7TiTkGDDGwBEDJUqpTU8qVKAFQ697bFeceRAX3dZyRSgrR3Xa8GJ4Yh7qDfEv2ooaMRGUj43mN3LHtqW",
  "key1": "3V5nNN3oQ3apGfE4xYWTXDyWCsvXmWipYG1XgGZJxEfaDk4fMVgySRfqvNZwcnifNjzpeTT4oUzSpVFwkhQDMXLf",
  "key2": "34bdC4DeghrNux6orJJLyewbJs4x8jMfvzNYCaAskhCCkaB6dBztXyowX7K3vT4ymu2ChUy3Z9BAWQQK7xV9LUq2",
  "key3": "4kBKh7FMUjPgWHU15mSKpNX9kCzy8TEgJqpWnkW1XDeeJKVcTv3UPUidgdGv41EGG8VB5tahni2N6W6xC2D1H6Kg",
  "key4": "3SBcEeH4CjU7QZFiLzmJArGViTwPAMqBjFtQGrX7XhsTDG9w3gvgEsdpxAzFqARRyYwaFCWGE35VfeovgQh9GWMh",
  "key5": "5LH8ZaHHEuoKb5G9YkRJDdtJaNmHwbHeXf2gmRkvbMcuLprL2KGfEeumkpqsQTA7z9dfJ7dzqr3qf3gGj5hhcuhL",
  "key6": "2KmTY2ajbZzswyhAoLFXQ4M5qwqbbEE6RcVxHjS8a3vRCo8FPpf1G8XyvAdJVFyEkVmjxyAzrbcLB2ZnMeXFMk5J",
  "key7": "6ZyP12qzveGzjWJJAhYKaaqpMwtMcWi6ha7AzbMzayNLYQhep1EEh1za7WHbweo338zQsjaepcug1AhH4wumUym",
  "key8": "2fhUr8TVMT7RV7Cn8GynSYLTYrQAVscfg1dWj7zGH5iaanRgVG6JtEqekBKZrBboi9cr91f6KAXcP5ze5fgiCXVa",
  "key9": "3dgGw6kMXnArg6uPwZSKP7oaifujAKUcm8jNbGNTfKtdHVNbgSEy9h5iudTS4SfURrLfoy2EBXq9oQCU1TuXHXfj",
  "key10": "4v3JZ3j2SxePmhbm1vzWFJ7szGsceVzRq29vJC9PBWJVLy7mW3ub4rkgwvtzc9hEf1vaKJtDd4cXkHFLWDasBgG2",
  "key11": "32axQYYgtYdo7BXgWBj9PTPD66WQkX9UDTsLF7RPeB4mrDwrreYXxX9kjoSf99tBpan87fdKBBgDTsfMPrdUTf1a",
  "key12": "2jepz91pSWsQhFVgMXNGph6UmKMxzRZ461LLTVg2JXH7XvzUTKGHYHpYs9X3DfMAGr7vaBDN5m8ckDtxnk4bKiYn",
  "key13": "aXdvohAeSV5BsLEBv7FA9jL8Pok1vPFT3EuGL3SVMsacPopE3ZgPnh4jujyevUFTfCEtYotKLsVxrrn1xHpZ7CD",
  "key14": "KdphPZFHE3BMoD55AQmRBfucAL97dExapnc9Vi9Y6QcYSWuZ9VodNoohsTbaVxu2cSp17qWUpo4h7ZikHqrVKiE",
  "key15": "5QC8ZCSqD3feKkKbsq2QHVne293ix7vMy8ozVxvMgkafomnZh4jzYqXwt3K3icfejyYVHswG3n7h26x49bpp2wqx",
  "key16": "5rFjxcozQRi5uY1vTHXa38sRtRfufo9LiojGB6TXFSef3mPEYEpZkhwc6f1aCPbQrs5PsRPsNCBqTeUmzXw3Q3bC",
  "key17": "5bwXrwKdzB4FoiCgz46KKE9MfNk6rdk5qNjbB4Ta4fZjstCLPLKZ3hGNZBmEsG5oBZbM6KtDjz4aJ1vzt7yKX3FB",
  "key18": "3LZzbhPyNfDzUoYDK63qVFxqsxpM8EJicozXvQubHR1VjULA3Vhirf9g6wDRZC8xwXsjCFQm8ACehMoMT7veE8um",
  "key19": "LZGDVUqUKaBDrwVSTTs9SXjrZWVFbEwqCvFPEcSa3mXkWDxyxu6Ar5rb7TR6LdBU5bMAhcqnvBpxP6QVpL4X2nL",
  "key20": "4qPuXv3qLNTSd7uHYRXaLr1vNuuCL1N9JPhrKXWKnwZBpth5BzyhvyWxmvL2jjVbtcotW2pgWwrvdn57SnsBoCQM",
  "key21": "55dTLK5QwFj7jycoFvJFYg9gse6kdRDmrcEzjwLBx2i2scbwZxgQ3k3P9VJdXJ56cyDJQ5uNsp8K54GtXbM1PQvJ",
  "key22": "3uvadMfamXTsAchehBQheKZgtJgWV83pYPqE6wWHtunzLDx9gSvmaJ8UZQNsTseEU9LCY4LNqTzeq21mGa8DK2MR",
  "key23": "2SbTgd2dJUWir2JQxsR1f8Dtk3qEH2N69GtqM1Cu7QRkdJ2biQH3DekV1wB93dLBTHA6Bo27pQeUz2mcndrRKi4i",
  "key24": "2qMcB4Axvou2i5RQs4d3USwrkcJCShAAcdm5QUb71WffqN2kFzqQyCoBL1TQTox1dV1dgFLTjHyHENPubu6WWtV9",
  "key25": "5Rk8C5uD3eJJaWeeJgweMU3u336qbWgUm8kTYsUiwwg72Qrxycfi9PUPuzJycLRYjUQvgYQ9HcK2EeEmTU1gMGGY",
  "key26": "27GyKbJ4voS2YS5FY88i3ZyKb2XwZvRPEhtiMe2QyJnRkUAJSWZ3xFgqZiTieYVbntudRRkmVRuYNYvLmj9apF2L"
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
