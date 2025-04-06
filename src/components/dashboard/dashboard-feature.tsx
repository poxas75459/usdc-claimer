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
    "4CF1xYkqtmY62mHhvLD4z2zCU49BVc7qZrzhrrbCCCJE8o8QA5cacp3tBjKmKm6pQ9W7HCMbCzYJXRgKKmnWCVfh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aPfYJn53dpHbXriytpYWXhJs5zhVBcQpm63jJLtdMmvSmC5Nb1DtwmcihUzWL9rJa25GXm2wJv85ugtyXn7TUQ8",
  "key1": "4vepXodpFs7UZAH2YLGFccYCFskuSwFydKm59Ky2B2shexJyJF697FuvbaZYEndWm1PHneod7zyiNMy9w5hRob6K",
  "key2": "nnof86ncYKQBvyN47PUSMEHvSRiQuVL9krKuCbFrGnsBL581XKZbm2nMoBsSSjhsUWZ64XSF48dSZNB5m8gXzYP",
  "key3": "899KuFt6RWikRW5KRQqhJcxYYVDGLpJKWc4zs49G1Jt3f63cqffiVL7EcmsyavTZVkkGfVLEoDbq9B7SyQMyjf6",
  "key4": "3VE2W4DxYvZeV5APvfCqp97VwJGhammfnPWBt6KFVePYwLkyPXyzx1MmEFHSsfHxYS6TQSq8aofHrzurk67dK7kZ",
  "key5": "5v6pKBGouCxrp6sRx8JxLwgwScv8Wn468eKXRzewTg8HbZaE6D1RV3JoZRUqfbGikjGZscDcu2KjDeCf6kmWyYB",
  "key6": "6jC3uSgMULdQrWfYqZ7bDTuopmk7oVdmbxBvPZNdMJ6moR6Gd4xrvCVTmJg7YctzXDm2tRVMRRVwR9Q9bLkivdV",
  "key7": "dsKxyo2RQXJEtt7e795Z3eiM62zHj6xxD7J7VFtf24iJFPm6YLcGmvi19D8LRXcRniy9LnJg5L9eftipLBT3ehX",
  "key8": "QTt4sQc9zszQeTx5SK4tpLvRiJxGG8rDmw7sFiUjKdBUDMLYRGsybtoBNoGmiEh2WP1G8AmjXuBmKDzqpJegACj",
  "key9": "5Y7QecVyVi5KPiGHpiEhPnFYUW14ooKwHGTCru9MjdZvoyo5npAtoSnabn4gxPnQSBgjmLZrRYjsop6u9c26axh9",
  "key10": "4vDQMZUpv3HAzAkr68jSM3zP2rzZabD5wRFuiCSDSDbtTURStUfKH9edthRc3M7BbED7jgN2T8SCpXzDC2iZuAiw",
  "key11": "35LjE67BXetFH9neE4Aa4kCrcToTUXToAkryE8NQyQJc3tFJcqPcFmabckhDYz2HMEzXDkFNUhzg7p1pNEeHf8AA",
  "key12": "5qhtAwWr9RC7eM4YT3BG8NLEL9nuKqn3GNqCp6Z8v1c3mGeRJichVUj6xM2yUvjFF4LCLDoGqRYiLGXbYno5UyfQ",
  "key13": "2iX2Dvs5jtZu9g6mSaDvqHAVwp1c1MCPDA34ip8q6tBMPumQajxAdGUMcbuVURKTyETBQDcYkfercm7waYQzmfxW",
  "key14": "25HnMbDJJqTY8jmc7PBjtEew1h2hbYoqji9g6smefRes8wHC6oBaaQnC5cFmRXbuNZD8QJGuFkAc4VACqPFsrSca",
  "key15": "4PxCiGPdScT9tJVVgqHMywZuRHGCcLntdYyyDyWtmTsxLxi4pNFFDeWXy5t6vURWeeTbykRNDgrRuRe8YcK1Rt3c",
  "key16": "624xps4kB6hg2JLnuiiX9kFz5biJnbH2xnMMSV8t5r46bGbxT7VKR5J6cwUR8WsGqCDjdLAcd1CWrSzavunjd1Jg",
  "key17": "4ybjXY5xqMjWtLVQWA8GgzWQaHzUrKK5K5D2wErPa9nz1EGFyB1d1T5c5cupTgWw9NG1cS8N5qn9bErrzc8pZWzb",
  "key18": "4eNhKQ9Z4t5tFbS9nBXnNpVQoH3qGamJvJeHWVRfHGrv5Tf1pdep2s5rQpmyCxkLhg9JzEzRxTm3qGgNWuU2NdDU",
  "key19": "3m5ygBtiFD3w2LxYYiCVt94BHkbN72nZPqBCA8VAhnPTyC3UeqLjTJyRuHoyZEuCGEp84TdvxTrUzLfaP2A4X1a3",
  "key20": "sz8ZrXSxv3f3cEKhhfq7GWVhoEi2nyYrCaVwMgzde9EeZ6UeTF1FUeQd1Y53RJZtKzEgHALzv4418nJDMQ4RYh8",
  "key21": "K3CWNpJXvxMejmNa7qX3YeWz5LhrvKWaqnLRkZB3bcQ9UU4q7xwGRYfMk5UGErkzAD31ts4uk7pyXMTTwUNocxP",
  "key22": "3MHGyLgUd3kssz1USMeCXSDn2pjxTUCdiCWjE5a46V8HTEu2e2QSBYrqT4SG9exuLqt1wHCnSF7KhJ6NPcwC8eeX",
  "key23": "2bcN6MWSNn1adq7tXnFjc4dhDXWM7UPU7z6PmKNARykUSwG5pEkxDQHf1kmkNn9d4K9zWF82SEmq9qj2cx3ca8Rv",
  "key24": "2dxqA3s3hhJUXpVqDcD77CbK1j8CnhHemCgp4XbzVXRuY3pqcUvZmH8xf6gURK1UHTYn6ezeTWXUPgVPKR3SSxfn",
  "key25": "4zL1qw1DtVbt5pu8jHKeqWEQHu7c2EEcdfr5zvJRCEZ2rhvRN8JDHwjAxdA1nHnL1mUeZK1JWhv9uTDgX47DT6Sm",
  "key26": "3wEzuKgC5irpmnSTJ2irp44eDsXL5f9kPmBxyzS1J6NroJ2syUfmjPjmRqhiYCgxQgN8SeyP4khvhtwXCgh5kPJR",
  "key27": "24JNnjNQ7YMcpQFtYdQmhDT2PmeBzEnbKwHAfxRYEi94JqSrmLejCZDcotXWedVTEh4axkP75aNCP6i8Mguva5yk",
  "key28": "55C5cbAUETyEZQZYYahTVVA3qRfiDPm3RzR4MBztba2pyBj4PkKS8KCWZn5ye5g69MCmKSU2n52DrSZzLqVxBBUH",
  "key29": "3ai9JPmjj1sgJWVfSrbPZMZSeD2iaoFVQ9tarnmzU66TvmhPwkWuSoFb47tYp9xp9i57ynBFPqBZbEfH3499fx99",
  "key30": "4qwskJ1A3G2vpiUqjY1TqZG7NR5P9jGCoVe8tadrWr4eefkoyWBFzvLGTUnFLpQ28oPRdeKhZ2WCThYo7ALoYzzw",
  "key31": "5S61UPquWrkaqGKBB1xpQEyx2zWeKUAvgUjkrgaxMShJN2AAVksZ4gRwCDr2Li4mEMJ1NFVRQ3q9kdzT2oEUFGwj",
  "key32": "4npbFtfZmx32ry4rRFBVcmXD3YUg62oRhRQF7CD6Nr3KJdBERW9GHXEbARVS9cN99WuJi5wikdawSA4TdcwZj1wn",
  "key33": "3pfWPsxfFbpAShFzPhG2htL8VwTr3i5SL8Kceo8FW92ZWCodNaDQ1jhG3B6YDUGeK78sHW5kiPdYCunivCUHqiVc",
  "key34": "5Q7GN9Sz8kTTJBwYkBFTJxkFt11V54zjoU8NC7coDDmqYzYRtPbspSjHxP89HrtLpSTwEtm1vPbT4vXY3PQqQxNm",
  "key35": "3dFHA64aya8jmz7zbCDbtGnKr52F6AsoB8z1VujZjXTJ61hwgrHufebtcqZchX2nqHJ1pKwSYv3acpqKTrMgFB7e",
  "key36": "D9ifJzwrQKFknGRdiH1gRuhDoVmCEJroJPiSt6mi7mx3hu6jMjapGZz777pTDsKqRJ6epa6qoM8fZGDDMZkk189"
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
