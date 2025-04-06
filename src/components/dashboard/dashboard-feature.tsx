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
    "3G3Qy761rDmTLyNTgniNHiuFCYxTHba5z3jsoDHuAuTWxVJHk8qXEJem3CdSB6UMiZjzMzfDuDwxMhVxkZYZn96B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wi6Gpp62sVYFf71quHNa1JAs7NKxvDy5wmDamoqP36BVu1dwLRC6mRLNztBzBBLeNK7mLcwX8sDHadgreEirRdV",
  "key1": "4ofbXX3WC5MYJXDfwSHYAQtxuKEuf6qUJTT5ogbigjSmcxbEbg5mQhHEgFLVQrYvqL4mVkfFvvi64tfDKnLRBeZi",
  "key2": "3tw4hHB8JeivoRyrq1DLd5r3ix95db6S9Zf7k2UTbwfgGS5BLHMjBTB7driqW5tLM7ii6C3nKNHjxLjonVKV4JJn",
  "key3": "5c1WsQ5DC3QEde3ee7v3xMLTtaNjR2ikcx7bAEP9wCQ4hqDcaDTcc5MaFEa9xhycsstwsa2VVymCzYbxYxwuJJzA",
  "key4": "4AdijDtCsCAjFJnbB6Gn39wY7PNCEb1NMaLinfRHN9X8Rhu2De4gQNexh36gN1YEUDmtVauTUdTRwuEtMvAqXECd",
  "key5": "4NL37U6F6AQc8JqTx4nDMYNxAszo8bKGpJY3f6kvFj4iAZ2i6nKsbvK4HnGdfMyCYhzMsKbniMxFvgcWL6tQL9fC",
  "key6": "41vGUXNL1gU4cHVcSojBE9pc15XHagQDctgoVYSwoYa53TfGpDS84UNn2U9LoL5sVe38gzxaCH3U41HqLSqcevef",
  "key7": "58cs6znoi8XtyFKiCMfwZdCrixqpGaFEz5AGCXQ7qr6gyZPKY9rJdAuM6DSmofMsz48SE7AZ6wsxMN8bCJujTmaH",
  "key8": "eDKfWsPXrteftXhV8Lvskaj9fG2nuo5v5gUkz3QuKSR4wqmhtNN65kQd37c8LoXaxagijcajK5mh5q7XZ68D9Av",
  "key9": "21jddxFLzpmh3FmgUZoFWgBzDszM8Vrbpv3itM5gusEmYzErdRJndaiXV1uW9HykHCJbgrBDfKRC8D5cBBGgwUnd",
  "key10": "8cDmSxgo6wJZ2iN7QWhhWyn1mLNPAzDyThrek1qJw9HpsxK9J6dVNoGycixZx6pE2BuBGGQgqmFCeVPMDhi6oaQ",
  "key11": "5Jy7EwPUEoX2CvHeFDoYdpEYFzHavq6LDbVDBhVWEVj6is49LXZQRDQWFvomeAV7DV4dL7mqgksG8tY8seKKqCFA",
  "key12": "5EWkMbq2neGbQg4fBpQFcpdYVbq893dS62Y7RDWqhYt3oMdRSroJnEcGnSgj1puJwfNmsswKoZxXyKwCyikQmpb6",
  "key13": "2ng6dPd3orc4929L6qe1FYsP3au1urgb7R96cYo8A4TiLxDhH2oLCxRSDNgq2woKWktPkvd9KFNTMLxa9CE4pA7S",
  "key14": "657cK5ruhmpYa8jmt4G4vt9Z8Nfbf4vC8WtdcRoHVFVrQaKsVYV7hMQe32jCt4S2opRqqFro3Bq4c57uMHHymb6b",
  "key15": "4JS8tRmANsKYSsb8xEF5CFeexG2vBdkrnz5W5TzALJ1jrBF4vxZY1S3ZKf6RLCKMdmxwSmMU5bqgYhQoZCDfU5Xq",
  "key16": "2jAFLcc5BECxqF6MpUB9m3HUQ3XvTMJtGuFFVC5CxSWka9VeyhSw9tomBSrxbvS1wBU8pQfqGVSyxhS7bxZ5KdV2",
  "key17": "2YL5Lo6wCFnoNZJVFkasLr39LD2cxihrN2u52gQZX2m73sNHZwsZBT1pFd3eXt2EELJSrsqWEWM7UqpToXbWfok4",
  "key18": "21GGPZwyDEERZteTRpgvLjmzDeNJA2sbJRtGKsLLJKfXaqYtCzTgXkTk47d55nQb1Brbreyrhs1UGbLt2RQrQCSW",
  "key19": "5Lvhs8yGMT4G8mEZmq7zUhzDJRLq3HsnDK4y2psZGoNjF1gXhWmhnXVcRjVULo6pMHbYiRikDJdfafz6HHXyGNnN",
  "key20": "5j94mo87LTnoZ6MXnwK8mqsEyNquUbQP3HFWTiGn29vrqohz6fRRBhjhgoPiyJP4ZB19EpmaTDppBKKeCmrnT1QT",
  "key21": "4CSeuxeEsTLrPTCTPs75KhJ6VacFrtQG7LVZt5hycqKwLSC5NJPBdNU958MUPRxqWBLRERYfSxrByfSZxtm1zS8Z",
  "key22": "5emPxUgGoyNZ58Jhk69Nb4A13N3eZKXeuigdZti1NKvqDYBrfMiNEAErggJvCXTTbke6iBRhByWd5f8L2wYgStSw",
  "key23": "292mZ59ALZkKqE5wXfkJmtxmXeoZMYyjW1DAoBwVTB1ZS951UbiYq1veaYHB1R3LEBcyFgvr61MkAR4ZyLG36iUu",
  "key24": "5VUX358MNEYVUCgvqSDchupMpxcnDxZCQKMzGdfTDptm8wvz2VXxdkNMJEBpiAqSAqipzJyfUNGz6N7fUg4iXgi1",
  "key25": "3A7mjtCg7H7wkBUKHAuYR2YsaHRMiHfDFbGa8V69Q63BcrpRLPG9PR2XmSwC7oSA9TVo5o3rKJFAYCpeYudnHyzB"
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
