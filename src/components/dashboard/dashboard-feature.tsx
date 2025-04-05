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
    "3UA5gevtDMFdkK4K3sbxq7oJW1TLKWv7TD39nejzMBKbdWKw1u2eBy2mVttd56d1LTtsU62TL773W92mXhabjGa8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zjgntcF1PdTyRjEm82Qc2VrtLS7P9zMQQP5csoVzif7E5tQgjBmjwpwsgTfWc1B95kUY8p7N33SnrmXgftGcsMA",
  "key1": "bFjk7CrH5KEBMmUVSq8cJREDxvACgJ52meUcX4YAbaUgFYQwiG9ZKsK62YdTfYCK7qsEGTWA9EfDZ76n1wD6Szf",
  "key2": "41PqGHjXMgYveA7u8FvJPAoFSxPoikQBxkz9nBuTVAn8YPfKxSKcicgmBRJQJQmTiL3q9gPCEPvj9EVwxLiG3LpA",
  "key3": "4b3ostPUGHYUSLzCa2pZU75tXPnCDRPyAwqGwXcU5iaYcjtWbmScffEcn3efVR7VEU1dqkczdgtpHVbDLwUJb1o4",
  "key4": "bHbkzuQcnrKmrMRTwWUba1JX46yEy7ak1XhW1Vx82JretPAro8hRRW8mmxtvppDC1kAtDm9unAvFHHC7nKJExPK",
  "key5": "4N3xUASqB1i2JD3SFEpwjuwXprcDQuY83iUsDdW5x73h2kRSQ9J3b9JfsqzmmpjUGbo3c2XCp1T1Y2NMq7K3Vc5z",
  "key6": "3hY6YbFCbWXCodUvZBgg6PyrdYXc3EMQbzSbhCwRn6YEQfGbg6x3yFgQyNC2UPvFDvWLXrgnPXhPH2jtPJK4NdEk",
  "key7": "47WmjiPXJ917FRJp9LkupyvMJubTE1ZSbsgCUm5KReW3VnHJEHntRi98TKZnQhTxkZpi8DkFheUbfrqQ1YaSo6df",
  "key8": "nTLGREgDAgxh7efXk9Z739AfXdJE6zZjGwFLtzJrjB6HgFwVt8vMyFwjYkyJP6apUZC62iqHY1ctTYhgmJBohyi",
  "key9": "5qPpbomPzBgs7San6LDb3xa8m6PfTz2qDTimSgdMm5pA32JPrdsuoGWVEcUyoPqbqBmCR68vDHS3EPisk7RTRNa1",
  "key10": "rob1AkJf6Q9AMXQ993WUaW6eearUYJstQ7jGVq2aG4xUz2SQtxjZAZvUxSXqiHVooNLZrAeTgq7nQruk5FbgPD1",
  "key11": "57jdfb3JbXQDg2A8g7xLr3n7WJ7aSUsokMDjibPWHKCr97PCU3YNLADAAvgVCuzDXV57efWmBgtnZioWZa6Bh1ni",
  "key12": "5CWYHQL7XbykBRYGHJnnjK8tePgX6d5ehW8aw1XU5Gba2TvXY2xzs6EByZYNvxPzCyTKW6htKo1oHDczU6XF7LFp",
  "key13": "2j9mKKHTfigCDNBoQkeSzuxGRBv2j9boT1AFNNfYbKzvyngopneDdhRcJVZvhUhqj2wUYnKAs4HKCUqoRD2iBmSv",
  "key14": "531bgvQHkks2wZefRKp5FpNCa18wUxkSVkn4Mchv7gBYyMqjE6gHFiQ6WjrzeQdNEaesgubj6t55ktdETA8zo1WK",
  "key15": "4WPXoaqFCUVwhcH9cwaomnGWTSAvSrbrqz84qZqNkzc9a3tG3vBjhBc1eEfPUci1NBgKaimdJ3tHKzBBDvkUgRcW",
  "key16": "PfcKpfX1UZd7i2o8iwaoSxM19xwHVc9rUCGSnkLjQJKcnu5ZCzL2EyYoYXyBQe1hQcKQUe9dRZ7Yq8nELRmcryA",
  "key17": "4SjjmYGbk4peGi899EL7jaGhD4N98fLKDVXpi1qk3fFfQNDGhd71wuXtaKkpYNVmBPJb6nmLY9JtFhZPWo5HR64W",
  "key18": "4Fv6CG4NumMHPhFBbq5kZKeQeW4LbjBBgUbPJuCW53fHgDCouG7mvXBWqFZ5q4zGU6feeAmQLd8eaoA47FJUvk9x",
  "key19": "2k4Qcid8L5pxziSjEUrDTYhFJY5J5wiGqssjFdJqYZB2Cv7AJThTYJQCjb8H1EqnLJNaCo2rFHEBUstRBUAscMVq",
  "key20": "2zc2cG4C81WAU13x7SVqMwPattJ9Cux7gA9szoAWwu4yB1gPLzAXZZuGWKGNDCPjaMqD7tkpk2X4kMpdgM4G67QE",
  "key21": "4Mco5FkgGWYwWGcrnRujjqUfrn1nLKXCAdYMZgnr8sPp22YtxdwUt33c7R3zR6woViZifBP5K3WB5KVW7sS1TgNa",
  "key22": "5nKmXSSP6xApptZEfd7xA2xcJRRHKyM7MswgD3JU9eCq2kifGP7Z9HHusLxsbce5DsP6vkwFv5L4oMcisibzRtqE",
  "key23": "5ZZBjFZCBkKgaMymK6DXyRfRtuRoEBSccVmeY9wqLKbRLwHcDRLwyLjMJaZtZ4j9oRhRFtJ2y5LoGs5nSAvC87EU",
  "key24": "5BVw4y19YDXsLMZ8D6T7BTF9Vygb24Zdx6GufFr47Q1G6ipr9p4EL2Uua836fqJzdCt5hV3Txp91mq4Ce69pHjtd",
  "key25": "64w6dLXXdZid7zm4SzbR59VLxeJ6EzBrGQQzsRtnrsbdX7PqvuPAAktdVekMc5NUdwsaDvsGRdYnZYSUWjWEBm36",
  "key26": "3gCMZsszDKEtWx1YEmNzZgFmzzhqEgdmUhjVitf5Tuc8Y2hR1LA2KBCy4XcFBj6c65vPa9jYin3LPaC3HJW1e2Ru"
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
