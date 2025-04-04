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
    "2MDLUiUBsXDJTCocK8EawTxaK4Aw9af68P3ikTo1DTPVGzTmMMTsuHhaFcYDNJV5PVbaqVX1UGPLhkd6n8ymW1AG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kDXD76r58TbPcpMR7GX8SyBBs2udb23Rd7UyofojvbyhqeurwK4Q62J3iWz6m3ECSov2UzHgnw9hJQvZKFUkCZi",
  "key1": "M3C2D2B1RGxB8tPCR6J3rd1QC1ZKxj1gnieehtmk83CraH1n9bD4r7Z4Z67isxdR8XTaWHVchkhWgj7uAqQUrg2",
  "key2": "3g1vhskBTQ3bnpYnCtxmvDHbrRb8hwuZDT1RprCMQDnm4eeMBkwDycTMirn6nYDGW26nV2ETqztykqeXYv8a9P7U",
  "key3": "7aJZgCsjbU35ijeuA1TkQ8cXvHyzpYatcPTFsF3rZRJvNouEMWJxsyoMVjfjx3tebTioim7pDt6bJ5H1n9UX6zc",
  "key4": "63xTsP4BXX4bKYKzcQN3RAwe2BJbqTcn9vCp9ZUfio1KVkVdDNSpeusn6x8w32uTXyFAZL59FNZCoq7gG1Er8dn8",
  "key5": "yqzAiWfd9rTGNBbhKHo21srjwFVpQf31N3zzFmB94x21xGHTxey6BDTd6nJdbS6vjTuPXqHi3mrBtXSmgzy2YWa",
  "key6": "4WMUrb2PtuvY7CMwoWnhr56uaa3hBshxYSpCuzjuhfCKioz7tGTbogfmhQihGQd2PcHVfC76gSMHQWBYDKbBRWhE",
  "key7": "45dd9Xw37cPK1UbM3HuFPnL2P9NeiDM8WEHCBh5whf4NS1GQp1EHkQ1NBLkvLpfjs3pVK9KSe6GXnLGfEXtMY82D",
  "key8": "5wo9E5j8jfuh6raoz7iCnTGpGHAYJL1mTWrSdftruEAyBGQ4ddZpEP5xhGVLVTwvGy1P3wK2b2E3YipRjrqRzjd8",
  "key9": "2TzV7dCBCTMVovxmS9Ho7WWkeF4uAWkUSzJB4RDxGLbcbcVPyKtJ986o6MbjZfKn5NPjxhQyfeeYtzZ7cEnr9NFV",
  "key10": "4zt8uvy338MxGEHRMbN65wg15Aa2EQwP8zoL4j5rrkWuaENuUex34YrXWFU6GQBVww6NwRLRGvTRnruKr9zf3wJ3",
  "key11": "2tg62vfj4Gx1AkiVhfBnQ6gZ1R9fSBvd5y6vnq63zHMxzgfiyK6eAGgAAGXKdvSSJvnNEAginTd31eYD3NRN2wzS",
  "key12": "36PTp1dfypqpiKx6hj31aPy15BxugDfQP8csPD73SZhAV3ZEnFrfKMieoaTLA1BzmCsJipfq8rQ3ed28h8YuqDAE",
  "key13": "2SqcHrPNX3tHMgu1CtaTMeY9ZdzSmXeY9wSm46WfLQ4w7aV5GyAGBaJ23pn7sDQN3z8CdqLXhHuiHCTiqz3QLFVD",
  "key14": "5WpcNbm8G6UQac5XU48jW6vnvx5s7LDcLk6FhFARHgZd7hHg7xj6RahDjonB1NFbEGM4vHLeiTMXmQojjoPXHMRQ",
  "key15": "3gg21ggMMgRRzmrRYmcD5GiKYADDyCwxdhk9XXwMy1mbcgK4ZXqte5mouoiLSfkJ2VRrb1UpwoVZZPdMKWDbfMS7",
  "key16": "5EohMsMJgYL53EHTB9Ru25vDVUdyThK2Q3YhZf7CDJDERP2VLJkftNyrjU4BDQLeBzE2tUZphYzhVKvz4qQqVTSP",
  "key17": "6edPWisVy2157yD52BR1PiT9Cpk8msaSnW4xTXbCPVCbdpCk1T55egArBLLB7XRRxePvt4aguuZjzD8GQTcNopY",
  "key18": "3xRGpA7tzwkuRRj4oE46ku8fbQaS8wnmza2v6t68V8wfmszNPqAc1LFrwpV4RHuiRjigwxxDQaYbcwWwUVkpi2hN",
  "key19": "3Wcz7iLni4pAPddw8yfEJcYXvPqnvq6crhpQwA4zCDnG92Zpu7oeUbin4FS9suTGrB2yxQjYpBUhFQ1aM3jJTQ8p",
  "key20": "4taLeCjaNNHbfwpNU7zU1JHP1iE5cbcAHH8sjJ9TUm6XFmqKKmxrFqMnmccNb1JrhC8DAKVvKWDkWN7tahJ574u5",
  "key21": "8LHUyDbnbRPeApcoFpac5cnjZpNDopPxc2ZXHCea5PqR4yrvE8TfuktQYbfRJAxPsoswWMW8XQ7Zkzbm6YdoRtn",
  "key22": "4SJFaUxkZW4L8ZhmFJue17ddJJCXkUQsuzViLBSUEDK3CtcJYZ81QfKHGPc1HQST2so8ZABUVeM5GckeZkAbzHPU",
  "key23": "3VYd3j1b5KKcLveTMQSa7DSJUaw74pMSwHuVLNKZ3UrEB3x5L5Kvvmk6scb1vqXmiFbb3xCe1tCHfK9o4JzeDpWf",
  "key24": "55FdcdaHyW5uQNR2gPNg8W3AZUpBP3PUDC4f1mXhR6Q1ECaEr1PKNkGVoJDi9Uzq4UYSnBECdrTCjsGHpLBGZErK",
  "key25": "2nSaEmch7nEHL61GjCMmqNnF7L2SKSR2Lm2G4UJ9XnEzi1bgmb7QBCGpBZZpKxs1FfFgkyX2p65N4WgBzm1BWgvs",
  "key26": "3Adrs2F6uUQmKxE28pyVE4DEY5W9b9veJCN2u2R2av3466RzdJZsU7Ey5ePiEvFyrVxFozV3EquhXzpWcbzAc8wP",
  "key27": "2GRbNWExkPBfbNt4NpXGy7GQ69hpPWjiuQUGQ9ukT5pVzwPtUYjASsDhiMGdSZUdPWXxEsJG6p6h49PrirEndd87",
  "key28": "2M8BVf7yufaRRR1ChRvYxMdy9nnDp4c9hUwyzr6oCvQm87vnNW9enqWQubgc3Bta9hicsnRh8V6XtEtYb7zHSeir",
  "key29": "4Yc8HvLqSaYHzAbDXYz87FrcRRowge2ix2WgKXAE7uDKqcH69tkG48F8UxptY81VhEwX5hkyWtcxGWGTBJ4TQVWS",
  "key30": "5QmvGZEJTAWsGFngLSX1NWQ5r5ZEsen8SSpUjWymmgRLM1rPP57f4ibBSzzSDtWdnZVQNxw2K9iF32osju5h1wG",
  "key31": "2HXvrPukBTHcFH9LcJfKvFWeP7qhat8uXj7U5rY2WCYXmDBCwA8J2tb1zgfKJZAmKXaEGVELxFppNYH6HN6g7yRX",
  "key32": "655ugUMFSm9MSMvy67FEHwY1vRtYsEpDbnzDeLJYsStKajJ9Y7G9btAJpR2HUUNEsaquJcpQKkBv6k3thf4XPfC7",
  "key33": "3RpAirVuz5Zxay6VZpLxQm1r1E7FJjz9ZXhjvzx1rLPta4F1SMGVi5kfv1W5Rv3YqZabc9m3ZtKakRM1yEQARumc"
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
