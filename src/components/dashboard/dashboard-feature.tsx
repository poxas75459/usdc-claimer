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
    "nkArjkXx52ESKorsrSbMGt3bHzQGnW3jdJCZTLP7QpeyZLdEP4b2AwZhWoL3XcEqsUGYdB4oZXYowmLKNoK4mHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cTUpavFcLk2UrHo6yCuPQrCBVJAhpvbMUBdfVLB8yEAKy1WN5KvLd6ytf5dr57G4rHk4DwwNpapf8JpWNkyX5D5",
  "key1": "5L8xRn4irM56Nz2MHwDaWTqr4G5x31yF7cYmUkUsnXVLSno8WGbU2rsGX69vTQbAjYBexQxegtred9RRy1TzAa1J",
  "key2": "4Sk7Ev99rWeqRdpuPfSSghsQKQbqofRYaoA8xqdyvwCC1NBnjA5FTG5uNM8cK3UEJHVjApAvCkh2jkbuzd7B5eEH",
  "key3": "38ZotXb7PwYXTNVGhWZcGk4iLZjM8YtF4rB7mW87qwJhNRxSdfczcGoFTY6sLkYuMzHdroo6En2DdPRcN58RGfJx",
  "key4": "4q5Y2g7AAiDdcccS2u2VmQcXFUrQu6yDPDqUKEwvnBgy5xjN63ReYs1a3VarMq2HwTWBquFhUeJpooGb3Fu34V9L",
  "key5": "3G32b24zJKTzPAUjfj1nQdYUjGddRjnnMMWta9MqcXGjphXGUkD3wQDDSdQgshQ2nRfVZoYUvMVbCgRQ9L3kZ7ys",
  "key6": "5VctgFqSGJB2ZJSpFGX2uHFb4rdrbHsawUhhYkyqRjjszDLkDRhgGiBUwj4tcnT385zsdmQcrrPymossYgt3Np25",
  "key7": "3EgD6skHeQtV6TsqxDjmLKY3S5B6bw4JWkxowPBE9zVcQmYUu8NoAYazWLk39U3PgXDARpLHWihUZBX6eLfgn52B",
  "key8": "4EZRCbyWBDeb9hqY9sNnT1UQiVnr1DgyEFV3Wxqmk6YL22WUqfrSo2BfH6mDCC3iWpUooMnujnyd7hJFSNMt7K94",
  "key9": "5evZLTZWrd4CqqbqWUdZwVyrEpaXe1ky9bCTsTD4HJseaf4i2taZcq7X2oPPKyKa6jggPoxqUV7RjD5D3496aqny",
  "key10": "4osCxmi6716CKQHRNH36JhvNnazCz1AWXkpwctU3FkDvma122sQGozh3jrpRLUgr8S9hZGDE1FBcULCWqAzNdyyf",
  "key11": "2yWrHbBniJWLhLAyGW6gFvxMzzeKhNRbph2FBLEoQEAR5a4ureGn5AQfT1FgNiFCtEpL5NQMmt5gawzM6hifrRq1",
  "key12": "SY7ASdjPXpiciCgZM31Zi3jQKuan2DDqJZNakUogPtjF5iDzmvMM5fVBZc7JBjPrfD8YBjbxot8PUYiujb2vhQn",
  "key13": "4mro54banvHPvYLvXF8fhAWDp2ZpRbuBQW5a7qmPr7jiGHB6VwHuoSmU8Sbd9RXNXEshEPTU41mwGaFgWN9kREPY",
  "key14": "5uoorwmrZjHhNAd1c8JN1EusATTWxLyHH1baj6C1nP5WvptL3B9j2dx39wymajzXXg11cjQ56BYLQZNoqMFC9d7Z",
  "key15": "5R7Tr68Mtev446MG4GYRjc3VecnTEti9XDCPibFbdHMiH53DJrZAGZYzH5dFgnwZ1wwTcwyXvRHDwJkWf6dYkn7G",
  "key16": "3Xq67EeikASK4ckc7wgmHjxn293ix9i53k1g3gQWmMT79MM2TrYvxww18taExHSUyWRUdP2XNDjUfHu37Wxfmrs9",
  "key17": "5AGvinCB1wN5p6YwA7JtRFKcLXYKQoEhvU2N3kQ1hmcDFJLVSTZ6swiB58gX1vxBgtTD2w4chCAtbWhq8TvGt7RL",
  "key18": "2QgZq5cjRQ8PzPBmcQv2SgZb9vrxZqu73AbVqfeL758F5ixXNPkec6yX86Rjh12a2bvdpKsQBdwKHyE8jT5fNhrn",
  "key19": "3tWKqWFEfdYwv3G6r5haT3YTq3auZNNtrZcnurjinUqX1m3aCgYjXBrcJ8ViSiPLUMdnoFWtQhvV9972s4tFH9C2",
  "key20": "3tzx2pvRCWWH3wt6YoNkLkenEHtm2qupcLBcerPmtRuusGEAMDCvYuhpnSHTm6wooFYCNgDhbEbQJvdyxLEfDQKt",
  "key21": "5WWXvJSoX2qnb99CgU17YcrtnKE1j7ESREBGqaDk6xvL1ZFWzVSq5VXeEKX2EtegWzdu6HY7LvVQxTZig1UJ2Vio",
  "key22": "57j8PwBBhGJnDGikQgaZWrKqrLCWsLQnuHREkTe6DM5iyGKYbMouYWxt5fjnMjWE1xzbtxiDh1rQZz3fPPcZhqTd",
  "key23": "45m8PSACGxM8gtW2Engga4uAQH2zX8z3DpJHdivUr7TeudNFTapuSYoN2BX9nbFE8Syi8rguyScjfZ6d2D7opynD",
  "key24": "5AR7m8w56J7Zg8HLaR391YQjDkQ6TnDQg1qgdGZydMqQWukRNPn1ug1PiDnj8Hhjyqch7K1d6xJH6kWogHc9FoaS",
  "key25": "3i4RWHvZibfVAJwG6PUttqp8TnidTVqDuE3xg5nhsqHZg8RcxE5LLr8oxVszBmWo6hLDcwwqhy7G6bfPBU28j1Mg",
  "key26": "5nr3GUMMbnzRWTQmEocbB7j3hZryCbnx7gENUNC4MMapoP1qny5fzw4YbXFvL5yE3d3oVx4cdqt2JyxBkrij1f4U",
  "key27": "1fMvRi89EZw11tQwueKEGceUvdGm6or2QPZCmLQMHutpJAWHSQNq3P1Cj5tJ3nNieBpqrkwqPK2A6jr3BC98XtV",
  "key28": "48QAvFY5e1AJWiDudRfxKqQ8T5ZKXsRXeYmaA6MNcp93FpRbhK3adtErczr8kZUggVScW12sQ5f6cSqMCiL7F4ax",
  "key29": "gu38pUwWEBGNA9VZhhpmkiRGXmzwbqu7vJKU4QGv4X58mbRMEYaxibyj9nswcfHjmNHo6t4Zg7pQcaFsmPdfTJE"
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
