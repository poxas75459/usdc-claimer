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
    "66z7HbEcHGkr7b6SLkiXTzimnZjRynL7ckbfz6puN9fn1cBPK7gn4DT1mx1boPzAU5KmZQUc5VhSdgVYFGd7Aif2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QdktjU1TzqnjMnQ8k2mi5EHbmcxZGoomXcyMFJJoMTg8wALPBFg7JBVQ8BbW6EpHQ1QLPcDfPoVLEmz1SRaUR88",
  "key1": "5ih2yrKdZp18S5D73ch3wR9Ao3smKxFTf7zZcwrBtgccoyfz428W7GuQJPYe4dmKybBqFpu6s9ThrcTypmtSmKUx",
  "key2": "d5aZ3NbypV83ZPCBBpKLtoWz41zgCqmgqH4BsCTQ9ppZPJ9ArxEyvGU6z3nyUnKJ7Jq18tK9vd5Uch4NDftpoTC",
  "key3": "5yxWCEeumf88H8wu1JT6CztSjxT9HM7UbaRTRMZzysCdrThmteiYqafigurrsXVrF7EJu8B7rKyYRNiV6L72Yphu",
  "key4": "3ZrcaC1t19G8FiMqL8uu6C7JDhLwPzsyToc3QYXNJ8KqQd8asfo87QYwRBJbhEXNwY2veu7G8w8Yea7RtDtgQbD",
  "key5": "4mFEpyZLS4TJ6VqviHeVdspg3qHST5i9mu5sqYS29cS1BRSUfVn7WLNh5YTm3imsXooEDGHPU8KoMeoKpQR4gofb",
  "key6": "5RsURJg9BzgJNpVDgyz39XvHtV6o6f2sPbvWFTnxm88yyECZKMyp6PaeR1XEUuqU9bq2xfow1Bk8aMLExaZ1DTUV",
  "key7": "67UbqNY5KE3BKLG4KdobCAbtR6mzb68j3o5nLLUQa3xBmhSZfPAtxcNHmrPU23Tz1PmrS1cgYCGqKdyW4f794933",
  "key8": "2tYs7CvnMx4P8eFFTWyg17sTgpYLQpfDxB3SjmMnHhDC5eAsACCgE6vG7m39p4Su5mcdJ9om2RpF6tdNXForaQRb",
  "key9": "5qeJ1sSKEDqPXgq1DVktWs7K3FP3ckKATWrbqEEVWLRsxP9u2h5jpecPqeYWWJi47XRMGvCFsXaUVXDFqi65khaT",
  "key10": "aK1QFPSMc43DBKTMSmzLnHX6eCHZTzmDrddStuaUzgZJWNhfEog2VkXNfdgKmipKbZAu6ZZvVQEA9S55NxB2ZYJ",
  "key11": "66AaraAMbHhUoUdUbtoHCTcQrS6PcyLf3gb25sPMLd8EUbadPZN31n65th4LPppJCV5dAvcWV42dAvTRTVM1rbNs",
  "key12": "4TmJ3NucGjaQ9RGgSNgaxszJ7VzsLGAR2cfW3yLnHMr2cNYXozEmC5BnY4EJwLC4oxqr259HwsFGL3dkiLsoXfEm",
  "key13": "YNeHvod4KxuMxRo5JVHua6h9DRs86zAFQUDqUDjHPcMsGffF6acqSUvF1v4P6o2Ugd1rGCFyVMnfvJH3VUNDwMZ",
  "key14": "4yUPRpXwdqZyNdporJ9qWbzxQBg1XYXSt6WkcCg4SPfZjkAuUNujacXqioGpf6N5FYWdJmneqeDSKpb9XCPZ8c6W",
  "key15": "5JnQfSs54Y4TNGPovLxdbJfQg8XHzLZeXjJX8L1hjVtq3oQTRcwpXn1Umyu5GHoVRnZifKF2y8CCsVe5xG2eZsGo",
  "key16": "BVjevLPs1FgFEaT4skvJce6az8EPMJcd3KSMHhm28xJQ6rJaXMxqvz8QU5iuZCGQCrq5YvxczVbcpxtRhn3b3ss",
  "key17": "8cXGdCUidiW9Jn8djS191bVdnHF2pJtkMhj6P6KPbvjeRiUfY1LyjrfLkXq314Nfw9Eemg8xN4Ue3o774XADF5e",
  "key18": "4UJ9H7aK6AhxSxx1wVM7AzojihEmNJh7kGaN9PtpYCSQL68u7qusdquWwJn36bdGNkKyyqf6STAHtM14CYo4jRK5",
  "key19": "57XdBcV2emzdMGFHDxYsTyN9JLt8eHLEEgn8veszCpi7kUERj8uRS9iLJ94Jfve82W7PkHy32A3mDgygoBRnNjUs",
  "key20": "3NErYPwoS4pyFot1SqiuPb6cSe3Ux1QtA5kXTAfU81C1TUJohnLwE9V9chetkBY15S4ZPh38iU76J9d1LoamKrYx",
  "key21": "3GG6BtowWd43kbGLvxJvdLuTggF7vQsMxdnzstxJqMdHB41Lvh5A4fmrnNP15eQ8VktisdAfgAWwAmNenkqnqJxt",
  "key22": "5G3YeXF475NMNbTdqwyG5ZPLNEjQf6SXu7QEHwy2YAg7Y7m5QVjXeP5WonVfQXF2b2R3NbVWn7diBMH5yUFM5gaJ",
  "key23": "hWKB3HonNgfKB9jMNAQ1kbGos2yr42zU8fB1yXgVY7GfCN2quh4Es54KxgUpEbdVmM1vywuV7wgia4wBwk2bP9x",
  "key24": "dYmjcKTxQaGr1Xhiae7jEqQWPfmVbkoZN8HsHsWjUDCt63rRhLYWdizPqAmJECTXRzeCt5ryb6GjL8xHLFLUfku",
  "key25": "4VqgJDUAxcS7kDDTQrkcv3sFLyu6DKkCgpVnST8CwQY2TwGZx6pL7Exs8TyKnAXZn5q8Wb4Y6mTqBaDvJWM6ppRL"
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
