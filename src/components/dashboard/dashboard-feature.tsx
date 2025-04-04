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
    "4KiKFZFF7X7nMDhweP2jJY891md4awdruqVekW75YMSpx4Tau9XvPQuKr88V9nZ5DCBN9i8YWZsZYZHhU9wtc8C5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r3ysTudMMQnHxsRdLmtd2Kira1tgMU4ENMhmWNwXT2hoLCzwc87osXsYEJcdygh18UyAXzvfmf9YpiYDT4NvuWm",
  "key1": "2gTsnfoZvmfrAfrGUHaGS674xynq6VrWwRrmbFAYYDqg3VNcvU6E5DP2idxw7w2XnpfUUjbxv3HgArhWyU5sePUa",
  "key2": "9YLtyVhknaymHMbWo1spogngVQyBMVZj17j7g5d8dC6UuGoe82Ch7hWgjBa3CEAg9FM2DNuukZsEQS9ApKqNmSS",
  "key3": "36WPcBwt1RhvSy3u8qUrYiFck9zUsjJAALfxhqZKQgwS8Yg9Jki5NZCbvHBQLFCnUeSei91ycyXcM6nacsHsy4AJ",
  "key4": "3tkDb2tcNMZKuFsS6T3KKrqp7uyLVE2uefqk9PoQMxe7L8AYJv1seRL4Gmn8BkBkJsYZgQqjcMiUPqwx95rwQYam",
  "key5": "63UhCb1uKSRXQyg1XyoXTvgJFDC6fJke49E8LaH7Sn3CjWZkweRSUYLV5tyu2oSqdHnvkEgVFiX4soAmbcuBzkMG",
  "key6": "26eGEfWSFErZfLtB2xGEnu8kaCxVReo9oex5XGmX2nPSRFEcG2uAv1F4XRoxUKYBP2rUfW1Zzg6YPTKhJ6R9mZQx",
  "key7": "v1jL7xJL2XQhF7SkKjRY1kGa5tjb1rkvAfxSqfe5At7dtBjJZPzSsb6RJyfT1FM6ZR7skRbzjkh69d3b7PueN1Z",
  "key8": "btYz9FfPZzs5ATXAykF8GPxMHtaeamWK92YZRybnmx2AEUPwmi7J47awRdPZfBFykjtzZS5TJsqFQ4RKmzztgzH",
  "key9": "2TGdVE2s3YGAMVNnrYA3EsV1jz5Fdyk27gsnCwwom7finEMyK7oYAsNq3NSu24imtfwu9XjEtVdbin6nahjfXmNh",
  "key10": "3QbhSQAZAydGD7cYwwoxABWcEN3W3sGSbpJYuN1rnUSwUGdfoipDnCHzujYfDMvaGfMQg8A98sM9f3LKi3vJRkzY",
  "key11": "5uFvAFHu2yTqEtPMkvaeVQxvmeKtRGxyMiYYbTDBpfcHwPsXUbRapyxeStxNxehfuYD8xqHTxE9NhWq6Tn7Rj3wZ",
  "key12": "39FA4UwQAz9P9jwuwwvXV3jXzbmcpR5yHR2t9UzGjK8PMheM21P2uyRJReNZWJKuFLZCvRg3aMZMEib1RwLxZtzm",
  "key13": "55vqMRpwVW2VMfuB6rhBFpzsN88vSfWC7xZ5fJbRGyh9qtNWatJkxYPTUouhQLjw3WRnVyYAhfybbYRc1HgKmLEe",
  "key14": "4YUr7dXWtLfixfmDeS1t868TrVTVXDj2jLuBTUL5RD1GiQTawCeVcSXpRz1FLY8XNsnijG7ABDkG9upUf7eJ6nYc",
  "key15": "5qwvZ9WGfmcYBcHULSa88iwKKuNMfqiy7vpENwi9FLGaHkHZhpom4CDFQ1jsgaQ8XsRde8whft2NLkggVRnYgfQJ",
  "key16": "5rQSnkEi5MyxMvYiqXJeMUgaExk8RfGhkCCAp2ojVAAiGw8bPAthkpnMAGuK1f6YamM3pqBG7H2irV1WJkf7Sfrh",
  "key17": "4tjEM3eqDt9zKzFb2jzEHkMG53WfQQYzaoWxVj9gaKkh2sidD3UG91mUjAeFGBpvMFSYn7rwtboTSjrzhHkbnQAj",
  "key18": "5DGaTV5YqQniYwDoiGC37thGGj1vyxm8T6vRnduqpyTWS5RqqYuvoU2wFJDBEUxpT1TpSCo29Dx65QKKBKNaS51e",
  "key19": "ySQPzWrvNRCUgvUbnyASsUBZ7YWqo5E57jPjxLxoBtiHV9NA3a1BvhiMu9APRyCYWv5nJ9YwbvbscC3kVNduiBC",
  "key20": "3ZZvXL69RCbjTExS3SQKg6JgHuc8kcZCNdX7GKPJK2EGAdTCZPxiZZvA82FmD787Qm6peyjp24JxxTJ971McRMLw",
  "key21": "PHssookhbFteEKYAptxoTzyRKYDoPqEPpAAZMQVv2FyVZLGbw4B3VWRSiAA24LHMVGDjmkeo4aN6eNMg1P3Q4pR",
  "key22": "2BYyeDAETtWs5WiAPsPFYynti6svEzyqQzMDFo5P4NVcwYh1hVuqChYSHj4R8j3RZ3nEfxywYxQUKJu6A1zqJwCj",
  "key23": "2VnNrQMpJEdKbHoS6vjuRkoMCadCXhnNdD2Wvze7vMcYDmgCnbe3R9EYGG7Ggxu4yzZQoMLxyRQwr7Fk5pmS3UwQ",
  "key24": "2XoFNxLPXLQ6Mws4LfoZUW4v29pujMHAGiDj2Qz8oCUJiXWoT9bxPVLYebKe4KXxFjBdfy8mLRUUYUXF5PLZksq7"
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
