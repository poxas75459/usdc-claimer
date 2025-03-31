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
    "48fhSr1enesTK2g8r3WsSZiSAogasxWnPDKXx5RrHZ19et2rs95w7rXhNJ5UaFpdYMV6mvj9ALsjGX8pSy3pYHQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iMCuTgbQ5miJVKjugh9FcbaEV8ymiq3kRjcRBK1TVLzNfrKf2psdHMsh61GCyukhB81dmbxyxZGFPfwqDKiRxde",
  "key1": "4rMDnmT6E5EsMgQQtDfThMU1D2Txbj67hgwwoW4zvXRphNR8BPicwJ4HX56RCJr39E6PSiP51J4LC7zJiLNptugd",
  "key2": "Eq3LaZ4X46vVyRxhLqM1Kj13mCspuz2cD8nZDmNHLCF6jGuABwmYMH3dLqrYJUB7gNg19JUbbAys6mMdmGoKcYQ",
  "key3": "2aeEvZX9KzKUk9dmwX5JcUho8sPvKnwskg22fNq2hx2kMFgbErJ5K6ZFyry2yab2JqZhxQriNf9Qt1Df5JtkQ5ky",
  "key4": "56LQw9wGDZ7dXsrLpTgQjRUKbxZYXZsypFzRCPqfF36kGXw4BwUBuMCFDHCJ54pcmqkaPmYiGz3qGNZuRJTmvZ91",
  "key5": "3SoBfP18X8Kv9wqvwAm6YaHtNozj3YA1YpsDxz9CVSSNxFWePDpNyVeSxATWkaCChV6eg3KFw6CHvWmvgwKMBLHm",
  "key6": "vQ1aL3tommYAbM3SCtQSh4CSrfwZNvU9TSnqk1tszMPzEp71sTSSaVVZC2wKgbBZoVgcKFSEN289jN7B7zo6pBf",
  "key7": "29xfDPJy1tUvi51mU3Z78NTN7AAKbjAKwwB4xnLJZeX9cJTUQRRbJ4r9tv9DEu3GF5LpKr4B2Mx3fcBAtBTQi1uk",
  "key8": "3syYJoeGT8RyMF946maiGVGKhG68EREA9H4R3mXuX2LzeCVwhdKmVufQLczXB1WVeSEFSNJUbZGfDgF21gM3K7f9",
  "key9": "kTLRUiGdQt8gMDZe8EXfmc1Ccfrfj89o2BC4gECrA5CtarQ7iXDZkKbBKfDiKuqeRwUaapKHMA6oU6ee6xCdiSd",
  "key10": "2HyVaCoL8a84cVR1kGPZ8rjeeSigysCQ6YD8bANEX1brBocEPJSABZrjQjZzeeHm3SZFG8jXxx62BHPhz7df7rid",
  "key11": "45dGNpQQP8GzGufjnC3rYUHizU4SirCyfp2aH3bDZRfndJk93xwkwKkWi8DZFmx66m5a5V7AmNJ5r6yCJhrgoRWD",
  "key12": "47YyZdCLSL6M634b9eZwFN4XkgBFWkvLfLqYMt9zni164ekJH24EXPooKADvYH48yqzYim1xp26n6SyNZwcnMWkE",
  "key13": "34Vvtg2nXA73xEL1Tjc3zpBhtWgZU38zA7R2pWkSfwCRDQQTJHoyWKGeqpvnLLViZSeg1awu162WzzqFB7imS8kD",
  "key14": "9ixrZhXRFKNsWjSmqQMLj1t2FrppHG72LUkE6tp3WU8oCNJbWvsDhphjyeRL4iSQURb6ugJLz8AX7b4onRmtwtR",
  "key15": "4GifqctkjaAJfBcZh6HqKrsX5Pbd7Yce91hftEJFaMLK4nPXPzaf2vKt4NdR6WMLaMSWk4RDpb3A3gMKBqaTV1jH",
  "key16": "316vPrg1oVdiXCkzT9uoB53R7QYJxTAURD6qxhPux5tJrjAwMztWiptxTgVp9zXwBSCnb9yeuYqc4wyPzmwKMKS2",
  "key17": "2NfmeteB5BfAkg6ryaebnpp4uNPoY12ChUKgLd2nqY78Y8iT537TYpnJwz9BipEvYzqUaRuk8GiFEEdUM5bgseWX",
  "key18": "61DM826HHz8VVYe5iZ8QpRsJkHJQ3j6Tn3WzW9RnTegRwjD4K2fX4NWssUtkZg8LaC1CECXmJcmYzCd6yjE7GMx8",
  "key19": "3RioaW5TH2m5ryGmkswJ6VnDZdcouVFJhR62htYxJabUUzdBanWys38w6EJNsxdZ8S7TvaKqKAmPACDiVBXNR7KH",
  "key20": "5dHhDFEZjQfzcEpyCk4zBUBPxWJDnADuNKmqd9TdMoum7wjU1xW7g22kchgu9zVUcgpqFGqJuQQ36j6nPggaTPVD",
  "key21": "5YyHcTApqouyHnSJyUfZ2yhb2kpAb74Xu8jE2VhDDeA41pFSnat1KN3txHXUE6Gz2u9MUQdz41nUm5NtL49N935X",
  "key22": "2fZfK9ebFLDSZwGB9Q45xi4vGDsRmdBKHrodQ8Zc87jBtM11PxWdkLowoXxJq31sEhZ3Bwza4sHeJnwCgEV5b2QC",
  "key23": "XL853MLLNt2EDmoyLRQdDPoMKbcaJuLbsaUEtaSLauDpcjN5ZQNCoWUvkZwnAuhanauCVDNRdTGCz9nCReCEW6d",
  "key24": "2Wp7g8HN7vdd8zNETuvEkUXkXTnoojC3hBhY3AJTEjKfytQX628w1wQGcigHagW6KxbqKs96rXBiGXL3uM5x5UuP",
  "key25": "4yWUgUaycp8HJrhKhpru8426U9SStxfVHMY3zfaCsnAAR3K6wZvPaVDmAjMnxKWUyNdbwNrf21YDxEbJWRcDpJK"
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
