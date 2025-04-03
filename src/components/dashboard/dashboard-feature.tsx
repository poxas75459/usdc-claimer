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
    "5RpwEyqeDuL26foLpRhvyTSd4DtxV527mgCuitdoPC2E41xz4JMbS8VfFacPrE2uNECfazJmSNrQ5Db4n6AR54iK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D5WTKbjNDHTh3mVDPUqABpjduswGXamUrbZU74m6ejMxctBM67SVt7nwRro3LnyhR6TH1zDX6QHhQCDAaHydtGo",
  "key1": "4Eamz3thGVfbYnEh89h6ijkfZdLR7UwPXTPezQq7pKL6icKFNsx4izZ4SsJDmnYVGpF9oSFUvTNgmreARFqKDjPt",
  "key2": "4SGMxwjDuBrrAGpy6UFTDzDzZZMu1UfQLbHqJN5dZTYS3h8BbXfDsZYnuRGV783mnUUYiHjJKKuupoMcfb7VJrKS",
  "key3": "b8pJYcC9Jwt5MP477CVUdwgZg3nQxJ3LsE7BDv28v52Eh2CdxFPorPVjvPqTXAo5gTqb8PcQGSVH5sNK5PV5cm3",
  "key4": "33SaqSSjymqankvA2C6joZZSwzVP2kHKnXKtL1Xyi2Bx9waVYE9dTQC16ZSnYGrRh4voer7yw2LCWk6P5R4sw2TS",
  "key5": "hjo2E7fbxtAuxtTEV21DqZZ3sJdp9a3qMvBBrghQHnom3tcpby66PdsYBQd1Hhenu11apCUQFRSLWUFqp7CydXT",
  "key6": "4BHjP7bCMte1uJpC9WY7prye86j7zgSqTjmpKAsueKEDWNAQaZcd64mUDiaWDsg9fKUofy4DogYemypz3eryZwud",
  "key7": "31Te4tTg7C9t5HgmyFRHdJje4xDYRTwBtiQRPx87c3J41JSfN54sTqdCp5QAavUs9R6HsC6m9TvpEsYxVzuAmMdc",
  "key8": "3rFVoyBdLcCUYoDczNWuEHGaXU9NsacFDS6G1tiyds1KZuh3FB4n3uygG1WnrJn3AhCPSGBRA59Uat9wAfukRBiY",
  "key9": "5eWDvtLnSiDM2tFgtkxzAGuMZh5d3rjtBPzsLDUBJe6RqPuR3Mb5XvvRiDT3C96zVzKQVeFN7DjPPdMKEbJygtiA",
  "key10": "5UU1UKLM1CsqDxogoGpV1pLF7BXp1JBSFV3VWMVrBXYipJRe243Mkw5KvGGMQvzW3K1Z4JPtjbz1kyQDM6GJskX8",
  "key11": "434kCaNamHh8BzPudimqzqNGP5epFJcjSaXR4kwPjiBmuGkWH7E28wsoRcCtwST2cMYBxMnJEEbkr9PcYj1RYCst",
  "key12": "4vryrmNu44AUix4b3CN9VpqRdi4dgFgEHSZVzBhLMNDrLMXUDqhB8GdkcVRnr96w64ukdYqYmEaeBPEGDNs9vM3D",
  "key13": "ssfBVtSFjAsYv8Y8aEiqsLsF5TBV2NuRnjPHJ1qc3Nug5dKGUpzto4khqJM8s5LWa9BTwA953mbzgidBQZXw9HP",
  "key14": "3sgaPqR1FMeWwvdzFy7u5K519byRbeufrSBdjT9c6Wg7tUNDpiRnGRZjdNHaNKdwojQBVw2uCcpaaqUKRAn2g1jK",
  "key15": "2KohpyGTbxW4BitM5nCoZm5NHAzZWSTRMSUG8eAS5cvwyj51WF4ieNyE6Qt5DsNUmLioNLgbpRB4L2fXCrYoTxgc",
  "key16": "3bmsoSHRZjUsiX9CrFEGLypDFV5kCw8Sc5WHS16avRsjD7HEydcV6PizZGVKTNJYuPqpPnRTWQ1Y12tBMzYFvyBu",
  "key17": "467UX8yRqDqXTkF5JLymayRs1PGzyXZ1CduCCZ3Reyzh6XqAzqdRhyRVjTpPs8kGqoaBBxSWDeLDgBHsLWLeUtgm",
  "key18": "3NHDvoakLJ42NSDmjDXBQ3ThoUcijK9qKZX8e1Cyjrm2qgtooSJfh344ZuvyRtjNwZtgZBk6FzihwsggzZfCwzj7",
  "key19": "ZQN275cM1iYKjtYjEZv1cZ4dmK6dpH6v4chu7WmauCxd7Bgq7arVXZEerMNAoNMWbQpa8ovS1c2VBxdbigXe73A",
  "key20": "oShyaprWvwiQmkAZrgjkjET83CEJXQyxWhuL2xBejyrpeTEQtVu3kMXFvwohHUSyDam2rS3FxTcc7pBiH1xPv55",
  "key21": "4UYkT8GiLZsnzEeFhunbTw5msFprMR6zZQKeGFo7Awffe7HodSHtJysDf6skLh5kSn8h98JHAg56VeF97rH1qgiW",
  "key22": "2CHxxY7UFYve6L8ydGfUESNEeYibazAG5BCnRsLkmhByex2j2VEJaU5KhRY4nQWEPfgoor3Mm76TD1hXhZyjSUj1",
  "key23": "58q3mxTJACnp8zVbFnk3rNSdvUfBXu2mewAtzihqjQWS6n5c4BWcdzT9ABzKuB5eBEWCaQn1mRVRNvgq7AK4wZBE",
  "key24": "4vjFi7tBEj7qxfGF8bQ4LTzMir9UviwvkRZZfbuTMCULcNeKxN9L9T3QpWVV9rEzF99QhXVoCDSq7ChuvtemAmEP"
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
