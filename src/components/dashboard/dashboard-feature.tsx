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
    "3cqyrEXFvXUdYzaqmKDW7bJi6StpTLxrXzHTw8AxdZQjVk88goaZGL6eYwf8LzPFPfJrdW8FRSdrZfs9VDHHU6e4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nn4micJPmwC5t5u2tNYfDeszEAqNGQGY5w4ng8GqCZ7Z9vBtASi5k1UFkRTaeHP9xMv99q1GGE8ueL39KTGMLaX",
  "key1": "2W8mAi5hknpLZqd8UHybMAwWvAqQ4TMhbZGURwGJvoBdqu69ZgQGrFZJ5hqjQVofniFXtfctZ6ZSEoUkV71hjK5c",
  "key2": "5EMKVsLWHd32zNgxZdhEpz2raNiyFqDvvMKVTCVL25tPWBnP4V8fx4Bm1YDuQBTfEeLUYidXAa14XhESLXYcmC9P",
  "key3": "36v877GNVcaR6x9nuoARVRGnZDrTwkS3vd7b4gQdotT7koVK1iUNgK6whNXmCYtVXvPMqyZzYDnXDZBm7Qf2xxdC",
  "key4": "5svbQSyDmr1nVoFmzAbRvy3UgYdgoMiYF8i2ynuHhgafin8ZfCz8itap9Fy13kwD63sFUKLGieyReNd1yJpWrSkQ",
  "key5": "W2REznkrrkb2HCvqcoTUBXsm2HZrV9wPGrtLJahuCGQD5WZRDc7i713ZNxFnakxyasSJkFfJ6XU9NZgSNvgp5ev",
  "key6": "4yoYNhha3hMugqR3K4U4pYZFFxLU7Uoc1ZJbdgFjQxam35NhYiApK3Xc2WFMiQkZ1VyV2iYLbDD5mbxW9Jbppdaj",
  "key7": "5aHec3LSnZsDZ12yW5bCTHfQ13tNs7LJBzapqw8EC7LFt1MTM7ixU1oM6TBEBrXUCDrVbEzoes24dWExVvcjzoCf",
  "key8": "3yCw3oBBLr2L81hTjJR9R3FSrHGJLTom8UWcUiNUTcFoj4aeuRuotj3Hm4BtGEMCnEKAtMQe2i1JjwqGo9W3Pq1v",
  "key9": "3jtxcRPbCE9ppeGjj6pM6zcVoHP57Y32Nr6bCkCnraoU8N3iHkAZEqN7CgsPzHDskTYReRUPxQ1ArumXHk8CYu37",
  "key10": "5zcA3WV7MpCQARQF3mPomEr1MxjwQSiceN79NtXFZLi7mcazjxsR3JjCDvz1U8MGT9hrsbc1jYQarrXLGYY19f5F",
  "key11": "V4pqmquQBsZ3vYZYeMLPWVCCZ4CobgTNVabPfSxtHbC7VR8Do1JUvoXQk4V1k8FsNtXkpFYju99geXtEuyjCCfo",
  "key12": "41jmvroJTiyvW4dPFjrn3zehwKrS7Ywmmbv7w33wobAaT4b7FnLR4wbvtZjZDWodJdWQUifHQaEczYa84fJSxiUC",
  "key13": "3fP8hhUCAZYCGUHhGAaXNf3r2Qqz2gYY8RABjYcEdxLrD5QaV1nyAezD2vdmr4XYPqNVFMTKBGyBodNurBdzS3e5",
  "key14": "iFSUKt9ykXi2dSrEGknbMSjRmcCyXXzLUxLTYYHdDeNQQjeCkjwZVsXXtEHqQ76BSDWU76hGeLXFRzLzAYXaam1",
  "key15": "5AfVmjr6acKtHM5abzntKy5udUsqi71U9g5DsGpdtdJgLqZYkSfN57eMxVHwUVUBZS7vRpbYCwZpSHfdBWK57ikm",
  "key16": "3tnm8MrU4jPyzWSVn2xYRpS5AtUiARp2F3d8yZdZbFBkmUKKjEY3NgiBpjXBMTx2734RnfvRbQnqunbtUV1Bpyra",
  "key17": "3c3ooLiNgBcjQaFZggYp1DmuEX4hzSNahArWudiakaEgBCAWqPhfJqny3ZTiYfKT4efRe4hT8dnKxsdCPR2VMW7C",
  "key18": "3jpnSfCcgnVH1gJCEcvP8rRQmQoRhDnRgdoW6eE3NcSGqLPvF6N8gsrdv7njwYJMN2LrjJ6hcfC1duYr4d3VQuXt",
  "key19": "PsxTjc21ckWD6vEMMy7LiEASyKfmiyPqz4s8mgiWYbPdW6r8Pw7bYxJaK19HxYEkPCWbpdMbFSX9JkHnPwqRSGJ",
  "key20": "3o15fP7FMYNR8XfozwXQVvpFHqB6mCsJ6mzBZP9Mbxzn9PivCKzhW6e6ikoZ2XJHLuyvFBEctpTMJhcYCDsx6J8j",
  "key21": "63hSiHzukQ2vUg5NcKnKLLzWnu5RYgoHhMesEGkLnwz2LQF8uGCo352igtQZPQevsgRNRS1qz3w9NnCmBWoqUMXF",
  "key22": "5pzy8H95Ch8VuiSQ9BrQKKUNVrc48XyGidqjjNAsBEtyaCtSHZyMkzKJV23TpK8dRxS8Utz9hRpdGnUhmb1cAvZ",
  "key23": "5zu4gHnWuGhYWyQXzKigJGoMbrSomyPaaJKnzxMBauk8YLmj9ZbngqTHHEtstMPBjGeTeKbjEdKemz3JJ4NmtmJi",
  "key24": "5LB7ktQV7zudKV1rnfJqbatpF5w4L4g2yvRM76BjCNWmtR7639V3kMaQRtzG4LkAnCVCmEW4NoDnMuVsNZnDQVRS",
  "key25": "22uUtiPe3wHgzs43otYd6y1vAy248D2ehsHYH2Gk2ZRwHy2vgBGCT9W2kjYX2LbrQ8nKoAVxe61LprdP1Hc6e8BX",
  "key26": "3Amie2ifc7Cznu5eR6smeqg3aKfK4yZ5aymg6Hsc7XTP4ZME5EazMFB96g6A7UPXfQwC5y6RHgxfGD7dwwJkbNSb",
  "key27": "4sJQYyGySFkocVqZ22ZTCpzTJnYUcLzJWNSyFij7C7b8RJv5HwTXjSFHaBco1CvTgh94KksJnCaj6uYmxe4iiiGs",
  "key28": "WGfyKkFZwkgKrBjyMtvB5th4J23AfZHMrg5sMzq8C7Cn8mtZ1bDTQDqtzqHuBizqdXfDhXgqkokkEfbUCVp7GMX"
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
