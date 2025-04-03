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
    "3c5X7CFj8AkXS6tAxMHVytcdv5VNx4qJ84aoEFjahSgQNVE9uSf9zZnGHt4SxQCpj7cNw4ZrRRMj4pycBVxx9LdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JyWz82A7zBwEAA5nRkcGuz3VmMaee2g7hAdtyEFGHGHaPKHtQLQG387X1WgBBxKGhFRQeqcrPAUam1zXurKYa2Z",
  "key1": "38AkkxX8p7YUeUZ5quoD2CtYFFoofuTsJ5p6QT9McCnkkfYjU29UKFdhSAzRwWLrwFb3e6XviXfG9ZhmEtKUodbH",
  "key2": "dXuapBJrLCwn3BJMhrEmst5AK5RgurXbBxHHNG31478TQ31B74VMer6fWBuS6jb26wtgAoL3ZUnExHyEH5nYP81",
  "key3": "zbXT9dqE6LZa1K6oNre4No9uXENRSKHvwsRemV3YVJmC5W14RWes5PmgxWUraTBw6pobWFjhggX3zbTXMRw4H6V",
  "key4": "2A32WRa9oekH6ykYENY713J2os4koaijWsdsrKbcNCLWNUu4BobtTmBzYxdccbwtJHBdTQVfRAS6zQ6ZdkVMKkWV",
  "key5": "458zFQ5vYNyHL33QWuZAYbEuRGJN8q4if4YTgrAHU3bkKapjqfbQxBirdTFq4hAzeoiw1JR2qPDR3rpBumvxZQTj",
  "key6": "VL9Mi2KkLRrHkAzVAxRSvEajdHf8W6rui4HxeeEDFMDZzNwxnX5FwpyCAbSMAFsQrWTgT4y3A7oWg41rnUUQvcD",
  "key7": "YD7ft2cDj7TgVEAe6A4AXLabzHg5Yo5XQ7W32EV5ooGgnuwXAt4fuJH6eeXyzJUVgwrcTa5kshwwchA4BDpdYS2",
  "key8": "3KYtfC8XjDp9XisKkzGPKfYeEsFH3n3q9XadVW42K7CiYBFD6Ww3dc3msiGT4S4pECoRCq1cNDtgXTXe95jqHE7t",
  "key9": "2QcCZxKFfuxoYcLAMoTr6d5A5UYPKZAjJDba24KYqp92rfnUuHPR9pi3UM1C1atmDvt7yKZvqHPENarQML5S2w8N",
  "key10": "34cjRQtt2r1Hn17v6HogxiiGUvjiVbF3jd3zoYtoWnWkmLD1YJN3GBVn673xeWex7fyQVtxoJAKUBBK4dCBPBoTP",
  "key11": "27w6y8N826UNxJTa61RWMao3mHV3nDnoYc6StALL6W7tToqWAMAvjTU992Z55PFcrAscvRf3MViY1g2sLJttx6FM",
  "key12": "5QfTDKD1aQFNykr4opSWQXgP8jH1QcPZv81HcSTeXr7k3Y24tYXCQ2BDuVth7UFww6b5aAAiAaTSgVadcQYd3RZ2",
  "key13": "5s8GcstcQ67sZVsysKZ51Uo5tZJqcrdvNLC2uFP7kcdnise6Zvuu5iaCE1tAaa8CtWYLgaBWg3FmvKZcpBS2xjFn",
  "key14": "4hR5i83DndRAnoUQSinpKb2MEqtXhP8nNZR7RmrTh5jLYDFknEpXccXpxCu9LTKHCtF7TWz6Ta3rGqtKPnryJWZC",
  "key15": "2rxBrb3EyVBg5tvv6CFyAZjw5NeGpvXBUhiSkdJHPDgzeqv8e6MZg3q5s5iN1tGRVd7irGRDpX67nWjLZqgGy4Jg",
  "key16": "65AqumQH5zXVRbzdEbSkWckxmUgScRAK5BypHtxSFcvjNhZfAHTkeKEDc56MtxeF5cXGKDRDJ38RADW4JPr3GZqu",
  "key17": "2MzPCc6H3ajEsWcMaUaYCRoHJcpMrxJtpijoUazeNnB3XAetvfFYAHnHGdbyy9XWW5icBGjGwBxwBNKEr1ruQDZT",
  "key18": "49KSwgqDbVkr1TBG6G98rNTxQ9S82Y4SfP57oBvFLhr199HqP45vRd1E2dN2aWW9Jsav5i5889rCzLnBQ8nVTRzf",
  "key19": "4EuAPxEjGJHof3m91bxLR4RgTE8uMy1SjTEyQVGc54UHrVnvsCctzeLqzxCBxxaGDTjxRqKWUXYU4xDFGFCBaAv3",
  "key20": "5GRUaZ4gt8u6Ca9Vib2hxNxphBfppDfm3Ai3HrkxCxwFguSeRYPB92HuBoE6zMef41FAAbPWMcUQKvgioWmzAwPq",
  "key21": "62oSqmDqR93mdmQuU6GzBYbpjsU6vYsksFzJwJ4J6dYF3wqzsUkzdfKz2RTKnMpDZ8iezuwaSgBZeAbGGGCTCcnZ",
  "key22": "28c1ia5hbfHPTNKwXMtSnFapHPhNptc4Gb9tnoJwkG1knESQEBqRN2SBNQm7KS4i6WsduoXwoq6mgkGtekk13NwD",
  "key23": "5JBSUR54ZgKSV94DRWYBvywGyKaJwwjM1s3FecoeMtuY3xEjU5tmR5i23sJkejQ5wohgoUgphU3paQE7UC7eYb2P",
  "key24": "4uuXJAsAJUJpUJ29s6tFeY6BUaXVcsmLykkKtB3X5mg54UJxmZPaVkn2rV5qiE6G5wwyWEvpmye2SJz5npq81wRV"
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
