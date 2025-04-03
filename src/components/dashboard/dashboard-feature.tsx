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
    "5kkXXBUSkUq5wQD97YTgLkcW2GruMvYHYNkwieLtn9zeTu1QXF83nox98kvJthSUCYc9pdjQCS3TAZakZdjAjJzU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xTMSMb5h9JY5fXxcdB6VFZ4uB82u3JsmwmJMCKyUqG9wo9wZ3DcDDoVwzq6BHVTnAaXkqGtzmUAeF4kwXfbqErv",
  "key1": "YrkWHcR1TBqUXEgg47ptqpYR9GCxAMarr8cqTVWvd5mdG3g2LmjiNCGYMcR12zo41dEnScpmC7ApENowqhjxhrz",
  "key2": "4NQwkz81SBd3twofbhpzto14vytvM4zti3KdDZJ1Z1XoYiZQt8DMnMr7bkuR1QZ5dQgtjXuV2SogN28XjWwcbRpr",
  "key3": "5xKcp5raktGpQLbUxpUK2qjiYWR7PcoWuwpLxNnweRHZHqGdwZzgqDoWChHfLioVJez2rUtVLGcTREM6zabLPX2k",
  "key4": "3acUTdB5SHNWvwwGYNz4ASgmK1Ypyg9Atsax8rhryVKjzJ55TFY86KxUDKMRGRzQm4fJZXdeQSW4UTLga8A8BhZH",
  "key5": "2ZQLFYPFf7pHJMsK26nLGrAUcSZjnbuH46pFWh24KZKNajF9NiNR5JVPXQi35SZZ4E3hfr8gU67J4DKHQ4J4L51r",
  "key6": "4kZ8pxm9meZ6b7C3DQ7VC3BqkGQCkZdwfTwASb9nBVMDLWUJhiMx2tQ1uxt5aRHuzvexMYNykU75A5fa7C5znsaw",
  "key7": "2yMR3cqW8ehfWFTwsusXaxpghqeQw6q3XpxTN5kSEqAL57eMm9y26rFB5bRCvWj9hD9cCkaJnYygSKPhKUYh6Y2L",
  "key8": "4PFF8Tgi851shSXyvhgMq5Mh4ZYbUwiP5WqVGmqRh7zVcNaQkihSWLHv24ymgw5yvV7aYVNjX8Twr5t69JdH6aA2",
  "key9": "taTntmmwwWT7oKH7YHDuXLN5fmySB8HbpQW4xvUsH21H4yFzArJmwFcTmKgq6msBEhNx8rkSniJCTxb1b8jBTQE",
  "key10": "2k4zuNZsSHRoGGivCFGV9C9bx9fNPq5fjvfAqLMCAvXjm7jbwbEuCw3sBgaLCT5y47Wyww5kQTGxzqewqoonz8Px",
  "key11": "3YnshaXZkZ56SxWkrrwLYKFG6c2pwJBtgjsTiLGJ42Y5iku2KHJXpGi2kqb9AvHHDozP3562S71gNk188K2AQYbX",
  "key12": "3UqZv8edqW5QhPD9dvR6oo3DXNZSKRZgYjiPJzgXw1SAqzkMyuv2ucEcU4mdNV2utVxPQTViP2HrL65gQoGggfHV",
  "key13": "2M3QyLhwcsriudT7sYMDpuNGSzxNj5Wh2oswJXfygtA2U7aB4GcVKbR2M4BeEvtwgXS3gnAPvKnagaWMyYY5aBi2",
  "key14": "3uLiaPtaF1yWo6ZKJRNzDjWFbh8jfRvVGVEGwdLGuGhNdaZgxQH5msxsy7hb5z1inTB7fQKtxt4eRkzSJhKN1TS3",
  "key15": "2rFEW1C8HJ9FtEM2CVJoFNRFEwGA9yvHSczoVTfPF1brN1mhfKqkeJ46vsRcceAc4PggKyzfXsVsdpYiazK98ioz",
  "key16": "2QDrbQn3jW8MMYF41YSds9ZSPiqvSNuxgPByFCQjk6swMyBRzEDh5XSby4aW5Togn8PjD41E9savdsxXdMitZDqm",
  "key17": "3zHX1uGfWg8HowC7VEfYgxyBPKbsLedgEzfqsu1VzVSgKzCuaGvgYRhPMnFWVNehPo78Y2GasEAHztue9nKGsDra",
  "key18": "4UEwnPQkiFJEZoRRJhRsjUPQ7ALc3fTwH5a3BhL3x8xPcrvYuWNJcMQSKTZ9idttbJza5xzgD8YfosZ5nNewc6Nk",
  "key19": "4o5FkcCxamdQovWqSEJUa3HfwgpEFaTryPmTjTLwze8Fyk7R9jXxhQC2CGEEjcco9EAG22Aed5JQcZoJp4mPChzT",
  "key20": "2npP8wN8NNAUff6eGDWc8uV5RdGcUXQFRpBwTRw7eHk55jHqekWePHDDxT8rYhuBEDbWewSaN2oC3MUXNcWgiZje",
  "key21": "iWSufvDZidpFYbPLfSw79RSWtxEZ66z3kMU1AZXoxSB3jhT4sa547oiDEoXBWCRhhs8GV4EqF7iax7jr391PW21",
  "key22": "BEAFYKoFBc2gKwUfNLetACewib1SbYKHoDk4ioKXz4ay4HvY6EUoaQcBnqcf7uoyYkADiVpAcJFVtoyCMudHndU",
  "key23": "VvQeq1gf3UBCwGnGgiLSKkr6mNQhmVGATR5ZR7rXJ4Gwu8pQ9SQzLBQDULMcUuqznHSmhe3FJDruSjQGgFQ4bf3",
  "key24": "3e8XWjiQGnzjRpt8J4k93GLzQgz7LXH5KhaaqJXxcBSRbY5byCbziYju66pwRg7xwwVo4762Wpgc555BGqecryX9",
  "key25": "3DsgozFdisdrrZ2zUrCHaivBECs4xmqH7aRae9UX3hkF2Myi7QC4Zdu7JQhSzCNKHe53tgjn8w3SDAvUvLT5QUGL",
  "key26": "2pgE3bnDdc7LnGYmemrkpjfhtkM777dCcreCMmM6pWZoRLQqAU6UZ74G5c1q7QEExttdtdMXqvAEJ6RZznkvDNcd",
  "key27": "2FHvywHhrpVR4eHcsU1BZFvzCAbJcFn2LGZhA1QaSqzFJJrScH9uxFXTBmaXc2pVYUxRyESatnVYvqgdHKCX3Qwz",
  "key28": "4Mc9mGDmFCHuBEMNpASMdHncyVQQAaAym9Qj3dhyHdAhjJqXeutFeUdD8712pemHD3MTdkbdzC21dLfWti6Vvnhf",
  "key29": "67j6Jnx3RbskXrM4MJCtAKVBhnUpDucHoF2XGG4J9TKe3c8fteD1r7PCS8p5yykEQ5BKant8ynG1iuQEGdgaN4oH",
  "key30": "4bEopphj4yHxkTdCQK94jLcFDMNy3Gu4hYV4DmxkeKnJp7x9yByJqnGnYgFHvHT3ENCbdK4zshWviz3VU7HfRy6s",
  "key31": "4PLgcimppN7Lx6PfTATPrHvvTy2cqC2WTGZReTUCc53SoQdcDBt3LbuGSDYojDR4nfitJx8uKzGdNgJX336owdeW",
  "key32": "3kJ5EVL7aTRqGjE2QRjtyQ4YnYtd9xueibWXVtDtMMt5yRVZdRmte77E78dj56j5A7i88veCff3g9LEPHgZvHHFp"
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
