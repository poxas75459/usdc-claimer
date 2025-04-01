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
    "3G7mPLzNoCsu1AS5oaJm4Cf9LKShkBbwPwWuiX6bFCqib4WvKKz9GsWx9QsQA5ARGdDNdEWtTEEP5tvjaKUXvLRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ngTaCxCTmU5koaj9JXRhCoVNvWJqGHCs4p79eg19mw23mjY5M8NEfeQvf4KseFyCzbyh6XYTd8yJNzj1nu26sdk",
  "key1": "4ZN3zA7HyQ6sddReqwo6vtNNMrTwQYh4SDAMf4dqzZKWPFZjoZeQ9fKUZoMJJxYyyLZ5bBCiAyR7cmcJPh2bEajt",
  "key2": "3AWnKHHyk3MGcNDgEAk27F3xKvW5ZEv2Qg2AZhw6xPZt8HiZLJtEMKkuxnfQFaYDHx4tHqefr8aU53nXicLE1WoH",
  "key3": "3rXZ6SedMbLumbzhxvebvmkwYfohiHx9HZC6H1UcCLQsM5LrzirQAaiqgTMj4qEFwuPWwX9m6V5gukVaL53TPQgo",
  "key4": "SHKjvzwEhD7DTgkuSGvLCnY2nju9kSzbAtsurU4QGGgJARNxJfNhdxFgYGWCKAgxdHttFWZFXoBrpwwEkiRtSSq",
  "key5": "4tftP1cETfq2as5fD1GfD8PAGcZ8DSaMJx2ijuYNmbo4aUSLia19kpPhspEZzikb3hdwVfYSaqBnihLz2Zidxg7f",
  "key6": "249Fm4fbUeGeiYrsGxCbeyaMW4qRqhzUZ4nURQEfcruRz3WRcXr6fvH8KygjNwjHe6cFssgH8Ea4DXVUwGNV8qTw",
  "key7": "GzypjDK4HH5Rh558d7JS7HD7cDH4mDPgr79uGJqEPLdq5KEwchjkqirSixB9e7V3dneDgA1zBsA281N6DEwfb94",
  "key8": "5RCRAkjAfcRm22jYcV9dzx43uVB5XGQPAgura2PdCR1gWkFKCP2tf8WNh7De5FgsfUAmeQagMToh2qkAmvF1MnRo",
  "key9": "5Tr3J9HA98onRGqZ7d9ERZq1qny62BRUDdwzPBCXuBNapzWouM5Nt9PRnQDTWK7VFbghc9LEBZSd8g72sG2Zmv7F",
  "key10": "3BP6oA4iZYtqKnjz1sjjT4nhPNeBvDNLEHdogsotSbKPFCaGoSMX6r5sBKbwGresbUuXYnFjkytbsXTdWGuJPCR4",
  "key11": "vboXw4R6gzU9Zd3t1uLnGj99UuvamKav6iAQxpgTY5gSNoXPNvUqXozSbwJhFW3AdxraQAi39X6vfdjCxZvfjQV",
  "key12": "2wtSgde8iSpR6A5vVG29oe37BWFScKLSsiVaqSFGmqgWEGBQeWmhU4ZUwUAcvHw3wMYqmsfMm9wk8Y8UK5Vop6X7",
  "key13": "2QB3waHgBh9kq4VxbwFDajGTx1MRSVJrti4WKCHLcrFWrteokDtD8DAkuXcyFfqAJnbFTq2bmTKuCuCa3eiSE6HQ",
  "key14": "23LnRBGDvVLYueUTmBZAW4nSoBB4HyFXiXReNuwgMaFq6ubx1tn3UEy6y3fnc1ttYFpGNfFh6cV6PV8hESUKmC7Z",
  "key15": "4rQhrmRxCUVm5ohtiYW4ww9kZ28aYUcPf9dK7NjYv5E9LSJmcvd7z4WJTBB2hwm5x3hiWjRGUAj1bUnXdRjFKZtm",
  "key16": "2PY6AxtCQ5oDNCZvP61AZaCGiVd7eEyyHQdEqQq1VTn9q6Xig8SUz8tmn48Ey7zk1e5XonrPkspNFmQ2Jcknm5LX",
  "key17": "4uxbTDNCdaYarehGFdc4TqP1ZkonebUq19jfVRpcvEjHRgKCAUtpZVPuRicPNnzXSGx5gwHg4Wk17vkzGkzKJCvp",
  "key18": "5SoAjKfWz9feA11BK2tSU3hXwgSH9Hqcb2TiUq6qiRV7ystakqhQ6xz8vHHLhLwMtFYfYsFmTtCLuMaMAic3jRkJ",
  "key19": "3k9ZzVhRCZ6QtE6v5yHbLJLUTNf75UsxRfUjQQh5Fj4RR6o4M9iGLA64u3XS85jZdBFxoVEc4BtCVauU8k4Es4c9",
  "key20": "3dPcxH8QWh5jECs38dk8zvCFL8JK8BHyqPG8EabBy79E2qwFfhZ3D3hnkLt4R8LfbQexvwAnUaLHSKKK2wvBWqPD",
  "key21": "4z8tVF6Vii5ZzfkhyKrne2TcTjvzJFfhZPAxNEv1cRGgeVaZb7cS9cKySYA5NjodgTGrDV9dARC48yFMcnbJtvuV",
  "key22": "21XQZXtTwqMR9Pw7wNnN8Mcu9HELEkgoPWMv1JMgfxuqsk2MZUoFVkVYm854bVZyG7d1xs5fikfJQNveCcdWk4Tf",
  "key23": "5iZvzjRtVYd22AYdwwxEHcCNkAVdJuvaQ9mtWWEfjMCGv38apj9n2s2TzqhRK9gniZ9TN8W8qnh5kDdkNn7YAH22",
  "key24": "2ALTbNpkPytnMmb8rJzF9CSqEJhoFPiqpPS21Uk8y1yuVYepET3XDQFEaJJ2TidLVkW9pvVmJy1qxp5wFXudZpCA",
  "key25": "wHdDnu8ZyDJELLb1Puh9Qu6XmumFs46PSJ2wDHCK3hwbefx22mL4H8UfgQabkDcDsNseGPpLtTckbveWMXQmbVt",
  "key26": "2VnVNT9CdyqotbvFH9nWkJCb1xw6GLupzt45DgEzirZ9hvSvXF5SR5S7SnCzbd4yut6WL8CZBMpVqGR6uBwrAVmf",
  "key27": "3uQfDKbZz1G8jKPLfnDT1jq2BASMCvAqnczfPRL9Q7wr5WbwcaoacjGZpgNB3o3h36z6XsmFuTVhnqp7jFAd6N67",
  "key28": "5dA6LssACVzfrt8UTgtRKAbef1ggqyzgkDqavEgoxFutycB8HfA9NZeKdedPJAXaGEmvdV2jwAPpt3zke8qsXeKH",
  "key29": "4BxuZf45ShvheArhDfkXHtBtSW3PzerckiDBWZPbd2jxp69WcvfvJzQhWmNKoVeAEAC6Jugu8AwMFVu2pKtssu8A",
  "key30": "2U7tn82YgsY2SiuDDVBq99mPcbzEYbYqpGoJZx9EHLnu5psGRFfa2TE3FFNCqN24ErbL3qNoxXrnnCM4j6mm5dxi"
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
