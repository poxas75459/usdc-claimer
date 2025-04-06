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
    "34gGuhPpvhuqumHFqRTGCYH5vxFWxifJJMaZQt9wCWYFMXshSJHW8jomNLRWY826GpZyutt5Y7Py84m7i1AsgeT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5quKW9zDAuU22vzkWoCqibK5ip3RXPgJ3FeSBicKMbXzecueYdUsNs5FHyx1oCxWu64qduFhTCFXZVdYLGuBUE9v",
  "key1": "3RR1WnReeHD86umLoykmBd1ixidk2jxRCXK4dMuv2HnFu1VBDXvTpJRfpn9iHWvWpyhhXPz87h1mpg19ReiQ8uSM",
  "key2": "ho1f8a4J6wPrfR3sncJYMWyhUxLP2D3uxzbBWNJp7rUtWUyGLKbTBuzYifb82pHs7v6y2xacavmVFSNx2oKUWRk",
  "key3": "4RTbL2vKipU3G3iyP4HszrEK76s7s8Kq6NAbFsbHmoyPRnCNW5bbLdZp5Yx6pscH2a6cdXc8EuRmDGDnYqxxW2ox",
  "key4": "3c34MUfqfnjSoi4RZr4LRjS64ZP7Z51xqxHXewH2dLqZfNqwFpJbYK3sku2aHmrcpymjBiaxKkBM24p91fhsXsUX",
  "key5": "2sNoHf3HsGugf6wNhmytzKYpf1kbQBvo3gbsxEQs5nDqRLrM3NcGJWyxwwLghpSQv2Txzs8tVn6M6H3uhaS9JVu2",
  "key6": "H2SjMANfqfzrpAAkqTST2rmSYvLMSEck5bQSEuT9Sur7Q1yLkjpNX4gsL26x6aCFtwJjSRkJeodXXBU3GeY697n",
  "key7": "jGSbNL8y8YRcxoJrF5s6TwWBuQYgJ121yJZiz262USER37oPtJzKo7AGPJ9ZTc48LFPuigNcykFXaaG2HLLjtA3",
  "key8": "E76S7maeiWTbo97ch2ZhC97SdEgH6m8rAeBT8LEncHBPDSoEsbCsXtZ1dmA8wFNBMxhrHjJyYsuLDppuGkFdHeW",
  "key9": "4V1m9U8ZQEQzEBdfWPu2wDgpnXCHh876Xa5zSF26s9SVDPUNd6RbUD1AdJmemaNCyZ6PTojVaRTdnBTyRWQKyTH7",
  "key10": "4YTVv5bzj5ZENNvmthYP9zXqpxfCLaE6k8J4dU7E9xBmyPTxsff1Ct1qGrgZYR6myL4JQvxPQtomgdX9pV5ZYVzp",
  "key11": "hdJo6hmhvkRyscctzyWhzbqoL7WpH9kAV2YZxSh7ccCzgZaBKhv5dZxZyXfVo9JU3ozQWfED1gi73y99jSSRh3n",
  "key12": "3SstwxbLqRm96XFKUJZf3q5gPou8EHzd1WN7aKqAhNNAuQ6YXqmCkTmFHSWeESEdaVVq6mbN7hGQodYtT8drWcK1",
  "key13": "5VnFTqFrHrnQJbATjoWvc2LGxkpuSpiJPYqEXtF3CcuY44Tnsc8M6ntmSmhGDNEXPCmqPNnxN49jRL6bjyJTm8p1",
  "key14": "5osSGqWq3QSGypEvTB4AZyVHwB1UiX5YaJ2HFhrWWTod1JpWrCk1XpHpUwU4zxuMefszFMx2eqmuG8kC4KULFbAZ",
  "key15": "2o5DP2yPN8rr7Ddd1JiAiu6naF6tTMZCSxAeyqiFHwy6PHr3yL4TaCnbTaNeKKVpwpRTn8HztFtTGpg4ixtu1go",
  "key16": "gLKcmMGhuesWx1UXz6XWJtoSqKRrFVmW5o4sqGNAVAfC8xu5KqpxygmULpiqJFyaixdYkLj44R2nNy7E7WnhpMS",
  "key17": "U3ASdbvwwjae7ye686yHnTLxWDu9z6q1nKqnQdzGgNBuUr8Jaun12fHH5n2szZ1ph6qDdotfB1nWbWAth4TkN33",
  "key18": "34h522RiP3s3saekmwTrdAUNDHAcUsHB8zrdkfGbBJK8og6t99M77dMMyMHK3XZ5P7rHXBrz7NqHZFyjhjCZ1xSN",
  "key19": "4TmGAUypEschQrg2xDByBkTA2F8RynNGMKk4cqExdnfgV65vf1wRDA5cY5SQuYMDvJp3UkF78YpWgLN4YQfvBqzK",
  "key20": "4JKfVBpbbmB1oxPj6VPK6CTUFHzSKesWPV3sFbYEaMe8cn8L59HtsLhnvRLmaP4LhHPcbqKb8RaT2G6HUJgr8M4G",
  "key21": "5X2DJ2fsvY7ccRRZ6zV3jiJDt4eT8t3wyqFsh11tYHuzepE8zAoGxq5xhsJFka6yZg2Nx1zD5Ui48nSvCwJ1wLX8",
  "key22": "nUzqgPnPUASzAzXtBnX5NQk6sho2J4bk2TVCzBS4Nn7QLjRNWxbN6LXRsHBKB6gLfjwup2d7koGQFubYsfGp3iK",
  "key23": "4Lhe3ryGVtuBdyF8vucCmQboHdLuWk1ynatCJ4eFQbBQYggURtaiBcyb8yk5uD473aTrcsBZ4iRMMeD2umyckK49",
  "key24": "L1n5TVpFhgfBP51RQiKRhgCYRWFRRJntZ3oScR1DpDnH1zCeyBV2MbMjqhUvAfiZEeUDPPp8oocrfqzeenWUxBh"
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
