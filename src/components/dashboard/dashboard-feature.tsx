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
    "cHnz6y3t9Z2dcZKDD9nqTCjLKGMkrQ9yioqkpcGHD6UhXWBE4GM4AEez3qqGtjLVW58p5PzTYbPZYJ7cJiLYxbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LvRhrbBKECYinABoF54vDkciSuoxw53GAoSWsf6Erds2poydRZMeQ1QZgHbXapWFKqG2wzhTWeJG4XRR1yKoL9N",
  "key1": "5WKaH3HFywKmkEc31BmZCdoxU4PnJM3d1gkS71exDV6iYEkDbc32Bd3bRcJPht6B2T6GGnAt1WAv9KBbhXmB2LEk",
  "key2": "5h66McL17V5jMw4Vi33XyyWzWN1RRpWpT9o63SYBk7zW7FqwVRBToc5CxGSYuY5aoXK4qXZvNSbddq5BhMhm6NHM",
  "key3": "PEZuPofRpwPtNRGnBrFkBG1S7TWDGgJ6pccgCHHCTF4eBs2ZVg3a2b3A8LY5rQbJT8Zog2kwDCnCGMNqB3ttpoX",
  "key4": "455eZWvtM454ueQH7BxkRxLu4gAZa8aJJDwxdZRuaoJ5HcvrBuLp1WLmB7wNCMmag4iXCUNa2N5RBiGXQFzwZyhM",
  "key5": "awQe66DViuwSgecBGiaSs3mn4uVEMR5Adcdg5acocHHEELSKq1gW2oahytzyChPZgRhnqx2ZPtPbisFUWyMyjBJ",
  "key6": "DvivRUK2jrKwTMc3sTUP7yQm3Wa7WQo1JXq3nuaBMuFmCDxopiujzqRXfTK2gpn5ZvgGxRSb1Kea2yCpJsKYqhb",
  "key7": "65hW4Ya26E3aD2btCHtn3NMRi6pcDRfiLvmwVf9FaJY4BuWtNfjh3Gpy5q8dETaF8Aoj4J4YX33XbhJ4cXYrwtE",
  "key8": "4YwX4CcLkrgmg5CnHegdjefcL5kY3KF1T6uWSRsrcLFarcRrqRikTriJeMSkXZzrie4QMNKF54i1shrcZf6d6X2K",
  "key9": "2mBXmmhSQsHzgBuutkftv67UCctaTMyCPZW8DD9ScQk7AvzAp2uQsnJQAkAMWWySCcWuueHo3jcuDpDx7D5qWw1E",
  "key10": "4GCztAdA9e9EjGX7mJAVMaUJFeToF5fqaaKYnS3N1SVTucbwMW12KXimjDgCWnsL6JqWazeFGKuYnNVb9zq71nY9",
  "key11": "3s3F7e1Z7LGGJmoeNtggqB1T5f8JfjSSoYJ6HBEzXVf5BqBfTJvyFEXnXRDNSgiCQ94oziiLFGF5oBeaWWQ4KXNy",
  "key12": "356d48od9H2UoamZrg7p1JJNFazCEjXSfod9xxqo2hvAdY3vi4vLrkRGVaBEAeq2JvyQNu8CFWLa5VVkfKssiYKa",
  "key13": "26GjDDomdDzuyTyj5quJD3W9XExmCocCirTqCri6weLR67uF4nHKuJJDhR2UGryRHKCzctFG1hUa8nE4Epuz3nE3",
  "key14": "3d3N3AFPg5Di4bwbb4wZd2umWwXVXhdfiRQWVGN5vNRXMqgzvp8Ldd5hHWQciF5bnHGZtrd1Rb2yiNedCCACz2R4",
  "key15": "3TxTCwW7UgxA6NHNyATHABDb5uEcEf1VNkPfUzfz5eYYnmkmJWfWYwYEq3ZHDPu3fZopCJtLYa4iU5b67kKZhFXD",
  "key16": "3Euz1SKMUADsfiupiK7rqwfPppKMm4oJac2aWWWQyNbgTb8W8gMNpuzmyZxqBUpoE3RNMRb6oGzRPzZxqkiwxN7f",
  "key17": "upg6Q1rxv27CLrSTgE15KxaBYfSGsmuFxbmvriLMzypWrqhVG2PmfQoKZBrUyfJKBVfRzoKmK4WkGUbYgZWEENy",
  "key18": "2p9XjDTfe9W6nJq8jLgaRjNe8zkdKMj7SPBdJCHrZm4kSQrMGjFA6ft7b73wC4w4Peja7nwajKJsQiDcFZK5RE9D",
  "key19": "625JHLHyMbqLeqiypK6KH2mqSxr1cbTd4jfnCJVJWd5EyUv3uAbHLN9UcYWRTX12Te69UA5DYyRayaCFhFGFECZd",
  "key20": "5SJ1vjYH75VCik3rkYVcs3PJBW1q9UWYcs51pwV7Fv3cCPZiCE6555qhM2gtWTicyxfiQSG6WAQbn3qyex8K1pjD",
  "key21": "3u2Bi2PHCr3i9qxCoAGURxaeWL2YbdJAHiBeqMFvAK3sfbTULMVgGcgLyMbQSLE76CEfS3ZzaZGzfa6SGY76XnXR",
  "key22": "5q9sp9waVwK6YPBTLxPhu2YCjj1jBV8xFe7MtcEMUWd8z6QjJshgRRan3czLgpJgbF1EkyvDgwkMHNMfTnRTVAhU",
  "key23": "48yga1rLbYahnt9GdDzrGvsPadkRGwmYmV2jYHBxeMhmL6NsCcybCZXbuQi3P8B72zVHmUsBavxHm2UpbJvsZYTW",
  "key24": "cMjaGxVDPrwSeJcbjog1ncQpFQFn96arFVf3QADHgnNKVACS7xq7Futyr1ChGhuku43oWtQF8mt45W2XQywJ1B6",
  "key25": "4gq9v66rWBDFsSaTNdfQ1eBrgruscNA5vMttNEKNepXVcsmWBPwEGcEMe3bV1kcjLxpcJyo5m1RARENVRsMJp3bY",
  "key26": "4XCkkfzkQ8kLHuyup64TRF6c9BLzYbgSHr2VdLnGFP9M3Pj36jgmuchjy6wksTVm29bqavM8YRRetA9pp5NteEMb",
  "key27": "5hhWNXFiLdQNAfq6SPbTQT9C8D6HzopQ9DVpmAwYPcitoQFxwh7L7nY6GRnhwnFUyib6U2DoJD8VRtxRhFqmDUr4",
  "key28": "4Rm3gY5UXPupY6UG64q7VJKJeygS8iEiehvYKwxpVDsc6PVYUgi63fRPcmoNVbmQNEcMaZ628roTJPhi497SwWfK",
  "key29": "4jGcq8ZBgepsodW5GjXPh6vffZ7YcSVb3gFDdiKHErL6kDtLWZrCs6H987rqWk8ySX7Uu5Bi1TtkipekPfuqNkMY",
  "key30": "5hQPUVkGxV3XZsL18sDvYrqTLvxM8K1tnB4ptSPMceq5ihe4sxC5zvDYqyCVSNgy9Pi9PcbfhET8RSSrBzjtDNhd",
  "key31": "32UHsWZ6u8v2n7W9iQdGFkn2Ws6LmknpU6goivpb1bgxvMu8SA5eN195DAmBqktf65iyCj2yDCfAPb2hXksWefZB",
  "key32": "4QFF5eZqhHVr4ZSc8tEnFMbX5rsF9RxkrL6khPipo23DH4sLXzygnbE69GC48zFG8AeXAvm4jrs92zd8t6184q5H"
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
