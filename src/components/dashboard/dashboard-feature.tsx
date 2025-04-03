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
    "2h1mQh77RhvZYCWPaYBXaqKuZNRQKATPUnLJZcpNxX5VWVfBxFYVkE8f3qNj841YoZF6n7zN8qQ782mFVxjzTq6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pUq7nm3xqnrdaSPib4L3ZVvCKxLvGtdefwA6tpb1KFyPCWi7Dp1yVd9kPMNviA2ZPuphphKfvrSUwwQiH5y8DmW",
  "key1": "26mUK1M9bXj8uqYwT8nAaDnctXcC91fmoLwP7JJRWZBw83NwiVtmNpBCt5ku8ij2CA2agjMKg7GUc7H1aymdM5a5",
  "key2": "51Cm69uj9ptrurXvX6TfUH1iEJmRsEspd559NJMFJcTD6aWCSkw3bMCkpi2JxqUy9Xi3vcV5mntoT8DDbpYq5VQe",
  "key3": "2inS4XHqUrVHN6BwFvs1RxTn7Y4TNra7u7LdAKkMB7jJF8jHvc2uG4L7aUYn4Mf3RABR5uvASyfMngzKpwfDE4Pc",
  "key4": "24qjdjSTuCtfCY2BV7hWuEjks79QrdWJW3NoxHKyMHyCidZ5rm6ArGcgwCmGzA6pU7cG1QxyDViZT8kc7TvoHtzP",
  "key5": "xofdVy87sxAGBjjFjaRYDcckDPRPi2cde78wuVr5tdivcRwSCjVXDaEn4sCLfaY1vuLCAS4nTUUneqy9jWJ6Azz",
  "key6": "4xweUcqfGXnGwxdVvkJJjDgtjVddtEpbQxi8Ksc5pC4r4LHj9pXgGvGzp1J6z2qzs6R93p7H4cbM92SoSiQ5Wejx",
  "key7": "4RHhHNS3tp1pnxShRYbphkoQoYLB2iV14z16HGeFojXA78vavPQ1kXsT3v4VVK5pmLA1x5W3ejt4wCgRqT5nfrea",
  "key8": "JRsLXXLv7FbMaxo6HNjMEAGJ2DfF7gz5s2CBtVPsRoLUr2FsPBzQMSoNKynkBQ7AmLE43kBSjn37ySMdhRoWa1R",
  "key9": "3Be8yJSu3HB3mqbxAKvsYZHz8SRJ4yjwoQfpxZCpMHFbRuQp8pjEUopbu7sLmabNGUwp4tjQqZdCLKKG7V6ucN9T",
  "key10": "25n2evXLyAW6H1KhvsmdErLwpS8DkpRZ1xDrH1F64n1W5PDAV9VdnXcNPGmGZZVo11PKdAimPY4kP8JXreG3S9dJ",
  "key11": "4tMvrcDBcPvDcQR2Z2SJfvMhJMTNK6RQ4VMo5umVVsWTQ5c9phrriG4cNwX3XHZBqWCss2LYku3LqffM53CtVTtM",
  "key12": "4PK4J6PU8rRfNk9NbcaYmWzkCNNNUNhcCWaZHbkosW8GrqtePm1nWTPkA4WE6PtiZHnn912wMpzTZ8rd6TK2DVsP",
  "key13": "2W9jGfF6wpqWndG8E52fGhuNHU6LBCRb4JLArVhuiUPwncsHejARoCm6ZemCC5C4ezjybDbTatVfQsszs3RrHtww",
  "key14": "EAxqvGy9oeLhRg1K6qPVMxvLsz1HiUSVTFHr49vwHEZ17RpajokhxPTRuzCcoW1q57y49dgMGzJ2F9jVuTzkYCy",
  "key15": "3CnFMNchLhxj7ycDiCrE1axsjpUy9AceNybMUfKsokCtVeYyULWNuuXPFfzHmhkKcsLahdRnGqneNkDtxf3QF6zQ",
  "key16": "DQLJcJkKx6rYg5EDnJCtCLcGH2sHthH8xEK7zQfDyiRrVsJawLipHLfBePtxZYPB29PpAzP1rHPsVxUB7rZzgfW",
  "key17": "2h5F5JZ71wELotQCumRkK9PijzNCdQy8BCoggnY9FmvBQsWFjZm5A7TfPZYPUrVnyNfdxQTjiQx53NSb1DTbzeUT",
  "key18": "3LpVbQ9oCubnB88kbzSdZCRDcp27n3cs8pCkn4JuG5YiGtQ4qLikuJz7Nxte7h3utKwrJXUAs5Ne4UBx7KMM3Fbd",
  "key19": "5PTtJ4YjszJr8bHKZTm2spm9RrR4FbMfZ2bPdQ7gBHxLcbXpj2Wt724Cj7pDEFBQxeiX87BYofdyDQPw7u9EE6K",
  "key20": "3NEdyD4swLqMyAxZjc9F4HdSjSYbdMQLohFJm2Qt6fQnx3m7AQE7sVGEmhLsUVyDhnVWbnV7FqV5n1asd9ZxrvTh",
  "key21": "2BcLWDXQ1akSHFkQFNbV9f9nGLWhkaSJBgc4ZCSNX5kjkmH1ssjahkvys67Mh2NLMxzpbij6Gfoa8M7JxbeSKqbr",
  "key22": "67mSfv4iqxPEgDQ9xor4uUaRuaS7YKnA3ErhNZ6rTxaeMRdiHs1H2N9tBcWdrDXrSM6iiMHfesYpQes8K1ix1tQV",
  "key23": "2tEaRup5guiEgmmNEtJKHtXagycc31FDp5QWo5RSSyevMxYuMpEpVVPvPq3aKfGRbp6Rbn666GbHLCseD4WYBegP",
  "key24": "4jD6PYUGfqf5Dt7De155UXX9adBLi6eNtvsQUoGJjdQn3hqkfUPD4qQBEiVvSszhTUvYxLxQ65gJkerqccDbrBgC",
  "key25": "4kjEWmyCmivkYEZ1GTvvLH7HoKQobwNP5uAwTcvvLd1bohodUE7zcPDp6dAgZCRP8MM1JQvavXhZu1SvtkkCCcZP",
  "key26": "37qmaKmCUxp9NoFwLgWd5ai2VEaEipqQcFeMcZxw824aAVx2cPVEVSwxkTdr2V9zBpjAziQm8fdgFQQFkBbEjSSX",
  "key27": "62ZLHXMWL9hZDQM6tLFb6dhYJUbexjJHvnxaPW5qeXbv7pJzhFwuzF1F2dRHegqrcdgNdsEPugR6V3u89wfoRSRZ",
  "key28": "3HbnE7m5F7VrV8ugKYsmbiJcD7BLtTnnhCTi71Fw4AZow1E2VFes7rnhTE8qEZmuYEKNwycDFofFhPK2JztQMZbH",
  "key29": "4z5JZRSWnfW38vfjipVJaZQ8qkMoxyzbuV1NPnPpWhaDjsHokXHvG2PQhJcZEJrNmkXiYynnj7BUesUGDHve1kxf",
  "key30": "5YQsVMqAg6ADwd5DAF8y7u6FKTuWtV3BjpTYmgjx22CgkS26esQFQhbg1znxdxoq89FpActigBDVyRT2w3kZvgzg",
  "key31": "2JMTtgnTFdmfMJJJHxnV3cea4ku1nGM4Mo6SfHfzftv6HUBNiSyqHtTdYdDvjYq6wMhvav6dRuozqUoyrS5pYth5",
  "key32": "4UV63uAwc2GbSRVnhozedE2HaQJSNkBYbbLBqAHpiAat3KwgD7k3UPpsVCnWYEikzXDYAD9FtgAAGT8xghPbgZSc",
  "key33": "hPjAfiCbNPbbGtxft4PH81c9tfWKHJSWNCT52ZuWVwkarThqdDE6Q76YxJVmfTbD1eXfLAmzb33MNYpaX7sTXUr",
  "key34": "FxumdAbJdKGH56NLMNTyeHufQMZ4SWmGgQqyQN1x9N8eg1sL2m5Yn4hgDqcG2HHgayokiL3amcdCPjnJHiquQ2n",
  "key35": "sLvxDaY3whQfzjnzbKHfW6isZSpTR8EB6EpV6CNywJm49zXZ4GeXjaxboiUJqtzDaVBELhTPMbjLdUtyJ6m1jAu",
  "key36": "4VgCTLhwGA6XMUgNM5dVPi1vCyLRpCSaYo4SSRR8YNbaegdNDCdsAKdZjWcpKj3dU4V8a9LWWU3pfGkJ4R5pwU1f",
  "key37": "4inShWpxVXcKdYczeU1mjnm3sD3WgXjq7TTg4Q2PbfxVG1Je5DNX4S1z7YTTzTJ12Qd7w7dHcpcwHdCjGuosw4zP",
  "key38": "5XcjaXJ6mGsWK5n98XQQaKHqqLRLWiBoaZfsqEbd7FEx6C6xaVTZWCuUTXqJV9KWpBK1RiXuoA469V6vSCJVinA8",
  "key39": "4sgD5K51syeo7va3GUPyvKQYn64J8gd76ywC6JSVKpSRN3KPUgoG2jq9wLTHDALrW6nS3RDoWVss979dYPCowW6"
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
