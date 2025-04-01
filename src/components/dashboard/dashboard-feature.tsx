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
    "vSgq6rsGDk9Tmyt3BAR4o5Kud9eyieJZKG8V9WZP92w8SmN8edq35ha6CkZxKSWynsLpFSSAr3F7QBQDdwgy3Tp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gr4qEAjC4rTaDcAT1fS8aqj8BGGqvmvwYBvBbYmZxERSUJhRhC1t7bCAWM1NUNurD6LQKLfB9JLdhH7nLoGMk4T",
  "key1": "2igETZkXuPj1Ssv23vsrYDAkLVCKCkuLFTRezisHB6x9KfEsA4EYmSnZtwoNN1Mheqo9T9tc1hkuqsfWS9jEFTbe",
  "key2": "nhbnYi1gXpdCecmfBXqkZYEuJUx8jJE5cQY7vR15JhMTQkfVYnTajbpxz5jQ5yAsri2P4qkLgVNzvUUmoqc6bwe",
  "key3": "4wTpy92sbodoANCfEjRNfVbGCfdK9oRDGBZjS3qrzDznWEa8fw5VBqfL3FZB3VmUPv6ipt3gPNkbnHhq7KesaXja",
  "key4": "pCghpwK19tQbQ8XsN1dZ3vQcp9tRdjnTESENQ3VKGPWgudz2VcjRZ3jZERdsMBR3S8mKDeSWV846jALcmfCrA8C",
  "key5": "erG2BFg7HEswDueMf4w7p6Xoh5te8wpHmEjUhBEuFfJrtAJt2wEnAfgpxSMrfZ56iynd1izibWdHNrAoRPQvbre",
  "key6": "5D9gZYb5GCeo8kxNrhFT9bH3Pm8fMw1Z6fBGpvXyZqGgqWVPmaGuuHEyH76EyeX9diVWabJxXkqXTri9P7SuF37e",
  "key7": "7tKFzTKVG3uWWTXwkEMu4gZzq6eJLcAxjLsaMBUYm3PEip5SDTvrU1zpP52YYRoatojBmYmtM2cm2mpskc5pDfS",
  "key8": "3p8B6635bEnME3Sf6kmqZcxsqhg8KyEc89oBCUdry72bc6oneGaa1NVLWBZo91Wy7ksW1kBV5SEmo4PbVFEjhW7D",
  "key9": "WZ7poSU2rQwwBBorCp75L4PwN5wFRTR4Qx6diKVPa2ccZYSTjmvS5hr3CdDiCb2dyZUurxKzstzowEdniE5wmSK",
  "key10": "3ZLPxoQPo8xumrM4y1t9gnPXKH4UrwVoMqn5kxTnVezQDvgYQysWQMrTbVLaX8x8PrU7qLPXz7P8K6mo5kHsdsvk",
  "key11": "4yxf1XfW4XuRVUEnimXCQt3LVRC9A4Q7J1NXUXWkeM1RVoDDRQMxa7cT3uBpGrR7t3q4EMKQwzTrwfe8c2j3agT4",
  "key12": "4fLpRWHKinQ7hLTmJCJSfJuD3KTTwTrUBSwUangGSLxmyU6XV7LVJZcXrRKr7peRh7vRwAycZiNXyFNEKgyyRu8h",
  "key13": "4opmBnm9SiMN6fhQZgp9JW6uYMbrXz7nZ17NYpwrvg2WLZ5LtEMFTjFezMRXC24jQZTKCoL7V2GeqwKJt8CZjxEm",
  "key14": "sdcSdqhLitCmoZSskwb2DXhxXgsb5vJfLS7cyK46pSbM1WQ8yFWd8b6PZHRtzg1spkrkXQeG8bwXu4YoRhx4rXT",
  "key15": "5M9bNCFvmUTq1fUp1SvGoRawL3Q2iPxEiNz4UfLCLkUJoWUGuyKDoS5857jBcA15siMzuqdshMQvYoqebVDv5zbR",
  "key16": "38cVGaWJVuTFjDJ57BewxGk9vk8v9G8N3iXNzTJuyyjCca4Hrd51TjUrrok5VbGqsonSiiojkWigbcW3s9hDnE2d",
  "key17": "4VNE8gPNd6n3NneQSPfmzM9ZK8dykMmPNvA1EoFVB8TgbecmSfotiNQ7pSGQMidQoHJLYAuNarUCrWdTph39mGcr",
  "key18": "oTR8bn8BZYKZy8fz4Yc2QZ5Tzm5dXDdqQNDq8FWifTcN6m9WTicYnGMoqth92XjqZ8dFVTzE8aNs7UCmZEVW5gb",
  "key19": "nWJ6jKBxTwcWytvEVLZUWfwfcY6ye8vVMKwrdPmCgFXzNSG5vfgjBotWhTXm6pe64NLpWN1S4x4pf9SbpjXsokX",
  "key20": "4pSXwWpgbLdikR7L54fJv66ZoS5mmpNWi6pxP3CXv44uhZBHMGvKe7hfJcu1s4u5CgjXjKh5S9zgDA1EGRA48sbi",
  "key21": "3GGABMKTiumMqTXLWkqkc1ZjMfbQJLaqigGHEH2i7jC42EFXnvaanKXtgAt3qq5kacKnqKBPQZgkXojzPRohxeZr",
  "key22": "2Bb9pL4zp3RhgZHtKREoMYEdPzMXWoD1tTXn1tBSbA4QLqAGEKMWjsEzpfU1vX9Lpsrw4erZEcMw9updb5ZHVt2A",
  "key23": "57MEr9LDGqgVjhiZnTYJ4rzmcaGfXBLpzRhc9Rw5pFcirCpieM8bqwVJ3Wtrgoaa4uefGNDqBirZP6qseKqHg6j8",
  "key24": "25dvRbC932NQvBZ937bmMCkomts2xhQ6vAbwf18Zucnvf6QBkDaXsRnd4yi5BEpE9HSd9bDSo5QvNe38kJqk5uxp"
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
