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
    "2NuGV8cUnPYZiBftY4ReU44jko1e5oTqyedgLjF39v35JrwASM4moHwCu1RAtmU9rN3DGWpLWWHxuqR9Dikk3Rut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qwo8WgjfrVA39caDKhZzMAuUjigZ12gxA3WFiczRJfrYzgpEQn6eBkqa7X3vk8JELxuofJUvdMkcEBYHBFiesum",
  "key1": "2tm94Yv7LXyu9uxNPcPvSjtdEn28SF9Ge5eXKJsFjaH3KJEg1wHMLMytiX1vfGbXvJp4WnJFcDFYKMHddsyMjFPJ",
  "key2": "5Spm15KCBDi7FvcmYLUGUuHJBEK4YbkLnQXsMcdKv1A3i7RTKTGmkhGJ56Jy1TXxZdN4koLWLjxfJvvjEUDYZsdw",
  "key3": "5gMbbKSMHkWmAhgwdWJgHM3386BuFU6P6ijYdwVrZTcrxo6KZB5wtRU7LsLYVV576vf9RhQg7PfvxPYnc1FjBizP",
  "key4": "58ZekocPgv2TT4CAPUvSsfKgt1D39ra4dVbLoZAJFt8oyajiLLbJnj4C4RoRyLkxevRv4b76Up28n7TsvfXWdZaH",
  "key5": "3Xor8Z2xk53ovR2KCh5e4RCejiwhRpddRH5vbBkfttp8BHTmg1sZiotzssxkdrh2Gy5GPqTSxUtJ7GDWa6ir3gHe",
  "key6": "5dJ8w4HJ6MQLHpJ9rEJFfqSFJ3LN42HnCfzd9F6FSaUq37BKYLLBRUi7DMZVmZ9rMRG8ai8TD73dzZAsjSqxfhW5",
  "key7": "5TxpyZhP5NMwrfT4NVeqfb2LMjfNuif64gwa7wJbgxnBzVKgRgjoW76XWsjpQt4ykzcKmsb78x6XvUQvDtxRRMZX",
  "key8": "5eQab2SpL4mmWkt1Bow1CnB8E5RThHAW4oWWK98bnxbTg62tqDMHjthzYhzJcFhDHVCzmRQ9Prv57EV8yAQstYdd",
  "key9": "97qWe5ADkr85pngREFH8Bm1kTnKmDuGuTAUWX9XMr5ZyuJn6JADWHB8DcPDrtcxUJyaTYVyVq6NXcfCUnskS3aR",
  "key10": "5LsBMAEFghkWbpLR44iSqLiWtaVdTYsYuXwdAnV5xa24L95FPG5JMvVzbAo1zadAVsttWVp2QNdTB5xBuVCVzzeR",
  "key11": "54tA7TTEKTivYw9AX9vCnaCE8BdVX2CuVPi5KaNgRDtoan7NzVLx5QEUisCE5DuB3LuPmyoAZNt8seoq3hGXEXX2",
  "key12": "4xpQdfBZcLvX3NRgyZLnfwj2XBWB6ptNxEJUJy8dueasG8XRL9d9WhrTEnx5BezxUsopEeQr92qQesWpDYLdS15y",
  "key13": "iBwpMJgPPCRCenGqXw3ptTHPY8eQScwG6z8S63gP3tWTtVBYpX6vuJS5onLAgxw1wXdV2VsTPKB4vVyrFDSwFGt",
  "key14": "412uERSH4ZbJjRJSESR3RMM4yapUHj3WRUF2rtyZ2wztG7MLv5axp8FVRZ729qku76ZgYdEtDxdwaaxJ2vYWJcRH",
  "key15": "3sUPzGMhqgRmdC85uJAAHgVFoow14UH6x5n94GPPC4n22PQpDjAMRLrqzKoGaMqRy4hjgHECwUss5W3TGKx7Ydxo",
  "key16": "3zeX3h84EmFKmT3sJp3PzSeMHmvGwtk5vMQMTnqsZ4x8MFg5rdogJbUfQXfkThPYPZmYSygXwNBenVyFdqD1kq5p",
  "key17": "4fWpsAgjVboKM7s2CSGqtnLn9SQS4wxi5x4PBkTMPfg1Vi7xUx4aX1ZMmDWsxuzKVTBxZRhM3m9w3meRPQSDydDk",
  "key18": "3CGKM59gU1YFbmELZiq9RGsc7T5RFG5GskHrAqZ5rVixAJMghxvWNxg9FrGzNoKH9w5D5KJqZBQciyY1E4sf7u7n",
  "key19": "5ot6tCDtxqXovKM9oS9rJDZpBLSBtw4bjJr4y58HNdx4T8WFbCkAXYx9gjXZY3avUzDjqUUd3RkjNALaTjhrUAh",
  "key20": "nqUM1rt9dZ78sVdjPZWcoGFgMQGYa6EtmwfR5xkGt6rVuVnpxMzkUejQfXwc9x69ZZHPgsGx3R4p3e9oyVngTtt",
  "key21": "5EXvjjgqXRoimq86yYPx6ZHUAmkAykXEb5eT6YsFGoeedptgC6H7gSvgJtUZq9rfSp45Pd3yybqppZy32kxHfu8p",
  "key22": "QPh8may3qJ5nFZU7LSes6epvmFAhUNc3e6HhePzUAVnXVjiDLnMChq7XUdUj1NfCkTgrkPEEXLABxb297GikJtd",
  "key23": "5FqG1Kwvdjm7YG2wpqcyPBYy7KskMrt3aQhUjHYzz7DTdYUFxrCNz3iR3TypgsLEYQpJj4tuTLgwrDg7h8WdNgRJ",
  "key24": "2nZjmPmEKYLXahr6DiGEbvcfuNE4UGX6hUxxD22VmqWvuR3UUNnYiY24ZfTaD9rY3zk67U1CrWYLajnuNJTzrU1C",
  "key25": "4bCRTa9GwWbvnVC8cmPtwgWZqHihugTqJrEQ5sUtvWRTSAcP8EW7u9rWp9fmqt7vDt6hjY5gtG2vSAjPGyQhJoGC",
  "key26": "38cWhSSEaRK9ZBPJUmGKCDTRPVdx5rPFFT8AXFuDn2ZhMNMtNGCR2R5xgMwbeCVCCy7NxtXDEkBDwLiCQvvYtyAz",
  "key27": "Y9oLN8z7HkL6oVgCyM1GjGXFPPEjSy9yRgqciY9tJTovediAGxQLsfpwXhRhDYZhB1FJDbxFqL6JCqpYE4qdwFD",
  "key28": "4BdKxJLpyw4w8Q88FwvYfKnzyJyaYVryv5G6Q5qiNNZNcF2S6NtZhGFzktFSRygXSzgMaYRTxf1isRPJPfTGoRGU",
  "key29": "43CYTr77sagHAQZH5wwcBZUkh6tHzyrsKYSvaBvSZJ3QureeYtA7LWKS7CRJ97GaXYCKyoCheeEfCNc8ovWMk1Vr",
  "key30": "4i97eJexc8aTcLWFn4n8cHmqzeb7yuen2S7dVF62wAfV3KLDuQG6C43yztFvruc9FKMeFsQ4y2L4h2KtX3PMbfDm"
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
