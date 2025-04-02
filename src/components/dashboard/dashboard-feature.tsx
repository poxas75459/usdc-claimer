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
    "3bX8Y6kJk4xswNvy3TgJn9fgYAkn324prekW73MTL3YLnjj2h4pfhiyZxRMEqkcyT8E5M8ZXELbma8EikUrGtcWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sgnjZUSE32jsUgvCgvxHn7mXjeQ7vqjs9AFZt1zrGZegkScn8n43Vk7FsHVG5vuQLNeuuz3GexKxaMuQCJSnkx9",
  "key1": "2YLqKEWY67f1nn5MFJ76BMUpqK99kcF2RcXckK46GBCKn5QXsBb8fc8NcYiMtDBMdR8FNNsMPoh4F2E2v6QbMZTh",
  "key2": "wpgE2edqudg8MPtCceA49QjnGaTf4CWEPjEqVnvHBcZVEB3Yw4WarMPG6E7mHKioWgQaD8hf2RKMHy456dpB449",
  "key3": "CP34n2X3BbFyXY9t4wxEmT91dsDCQrDpVGbuecjxEZyKV5Nj6MX52FfAjTt2dCHRs8zbKcP68HkFzipCPakWr5W",
  "key4": "3iLUx2Jt48ssfymoS6euyR4tDxAhdFxbN7oQod5oQofeoyy8PFi8ayuN6z3tioE2TirGWufpJoxp25bZAhgfFVmL",
  "key5": "2vj2ZAiJfv7ccydsNQ7oMuDfyAeKnhnhjvGAy75Gjpmna4srNcPYznTF4pL3kSp1VBGau51kRXVhKGU83T8FX22m",
  "key6": "2ovkk4LJ92U9JWs4YfFJq9fyCxe9xxTDtNewHFCvTXauShVN1f5LeBdNhD8kbT4mrwmnRrV59YYwkbZ7LfqRMHFa",
  "key7": "5CCvkRNNTXGMVTeMy9TuddiCCJZdJAuc8atPunFEGUaE1oKmW6eNR1VVnhpGGP9jEbyAfYtLr16k1HJCMNNQNsyz",
  "key8": "4mrYPFGhd8cec2vLK99AuWMqR5Dt4b6Vzgw8N7AeHRnhMriier4DRbiXhchVsBxz2WnJUwXaDpciPJ6CdaCDh9HW",
  "key9": "34nfHyEe1JkC9t7KnddBT7veRrurAgGvCdnPteGsvLRvwmL7ZLgV5zayXem7aULzsNqDGTYQ9jR9JNgZHuoZbAba",
  "key10": "5pWuLq8s8ysfmDdexzr9kmbi3RuV8xyUvm8byrHSGBg6oVZiyesfxqiRDP44mvADHcHgdSnNWUtdBe9oUXJztmPU",
  "key11": "4fnpSzPxiAMTzX2uVH7gvcL2e9iZ1bejk9Ph1nR1X3fjR6aqPubSqvUix4S6oQ78M4C9dnY7n5C2J43oJ9KqDJeo",
  "key12": "5JMmHciR5waapXCKzMyiSFAES7Dz7sfLzHZAbR8kmknvmVtQXyRs7uNCc1vFmXFmUj7dgUFAH49CvaxZ54wGzsE4",
  "key13": "2NwBVjVaFzAZFCNrnbv4KaGCkEyKjSH4xRDFqDT4pXKkdcpzDx3cbYJFB8FB2ftFfj3WgjdZ2aU2HZeeprov7j3o",
  "key14": "2CYsAj6VP8JcA15aDxq4wVRamRajVP2RpCKNPKFYYnjMsFRxNGB2x5fz7HPJTdgo2EGfAuHVU5Zx4wp2X5fmwUpw",
  "key15": "39qbdLEor6H44dCW85rAvPU6rY4Xv7D6hSr5Vnwjs8QZRj2TsCrkfMUhES5dTR49KUhpMiiYmcjzRRh8Dm2Bc4Ei",
  "key16": "5KhAxpzVqhnvp47CQQZMHHF3rb4nE19hMW6ReG8KT2PrfX9iYz8iN5GRVydhGoMh75E8mQNnEQG27b9wFq8aGn3T",
  "key17": "3brsdjXg2zaEeNiwGe1pD5t7sYnD7qj7pdKT8ZKkarhnsBtK1DPPLQFqB5gXfG75fUfxKKgkPBC2Y5TafY8yJ73N",
  "key18": "21ZzmPCnEsrA1vQHGWfR2r19QnbKtcwQf8PoYk9We7ejfeVLD26Y5QZwgvHv2Vg6JZ62bommx3XaG9CRn2We58x4",
  "key19": "2GY9JgWhw6dEDghfVxmo2scSJZCr4puPEuq6MUgaHiSX57rAn1LjfP8nc51CibHfr5VsxvP3KptKkS97DNq6JeW9",
  "key20": "BMAGSXUBshbkSCx7gK13q7r5ABYBzQvuhHfaef28UNM71woNyHQBPfyj5gX3pKH6sRNfdRiK5Pf6qHQ9Pw3oDxo",
  "key21": "4KgmpUASs97s2ZS3e1aRouaows1bY63suEE7ihQhTTQF2GBg8Cy68Vuftz4sWWFxz9zRHYMBFu27D5D8p6QeKsDF",
  "key22": "623KbxVEjxTi1jUbebeTSCJYobv6GdxRjLRerHrhcuWtiwbPr3jwwpZR9FVg3t64c4jAxzWrUjyYkAQkXn9x8n5D",
  "key23": "3QEMyrkeidS6E1mgSBN3pmy2YcpWLn6Gi52LRmAiz8yFeXtMfafH4qEgZovTV8aC9tuCTPcUBQEtTsZWkcytbqRR",
  "key24": "2Z4LPXp2SUgqQj9LJvJFgmfE8jM3SX2XkpmQUYvq5HqXjLVn119cg1EXTrrtdy9GRQFMQeoxrga317zZQJfeEfyB",
  "key25": "2iHQbyNj8ZctCCKscFeKKrGfEHVzmZwirGmrqnMYUsCFJNRokxquqRbnituRinf3ndhJcMmkPLzDTqkDqPUwpYo2"
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
