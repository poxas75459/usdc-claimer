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
    "g422gvZmA5bHwGX562h36Do4eMngZk9tdghZgiqhw1mSCVq52utVSmJc44C2vNgWJHBjgDfgrcZhYA9koxF16MM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DZrYFG9GtHZnFHder7ETp5YPYd3UqxT5KKaHY8RrWA2tZp8NTRiAoSX6bRUVSapL6scxG26x6UhGJfacfa9Mide",
  "key1": "x516bmHG9fBX8VELNrbMzjYXoCfLmioGTb97nzfGij6N9PS4RonPW3aF4xvyhF2TXe1aDDUHmRTG5xZireEkDAG",
  "key2": "3LE8gbJhrcZd6r6e1u31z9xM6xqpRDtfbNWEBaUSRdbE8aCismM52pQRDjSW8PCqu4wGeHXfghpWCnSMx1sPo3jq",
  "key3": "3PR4yGfSoYMWjU65DKWSvTAmhCEuvDbA9Hv4EuHeyTHwYuvSWUCRgTe9w8BCd3TyW5FP2L6qh8bJ9nimKFGWVwo4",
  "key4": "5z7CBgxv7qkvtk4qWPRwM5iZsTCBFSHB7d8MztV46rFee15spp3y4UXQVmvUV7ufkEeVJGySiPJw6PYrrkmAjrXt",
  "key5": "Mw3wTPCm1saq3x4PQHnGkjLcho4MCNB7J4cKdR8RduJY3MVqDWsBXhJRY8wt6ETfE2qJ2boBggWpUAufYeAv2z2",
  "key6": "3dpNS78zSzK8cZMeuDYyZu4tpgX2FBYTignVs2qL5FdVxnG6tGn1CNJobgDHDZLvBUBnErwJgZJGmzUdYu6Btwrp",
  "key7": "21ToMEYLhfFBM6xawFc1ZEoBdZK1eXnARykMgLCVcFpBaPQLyLec67sXv5G56tXVT9Y3Hv76VwxEodvqCgJcmSdw",
  "key8": "2q6rQS2LbnGBF8PxEiokzS5cMgy2m1ETo93wzaRrkxGCUN7UvzgMpkpdTA5feDZvavmqGbrozvEkEQggDvjitNTd",
  "key9": "3PCaAki2NZEkzzChttJ7oq5AZdZsZNzG8hC1rnqP64en6zTrMWKsJrpoHGkS5NBg48ghkYDn2kq65HFGX5DXr5yq",
  "key10": "5rsRfWZrqUZo1FBWf3HGot9XTpYVPsMP2oWSdR1Qdv7j7MRJ4xFNdvPTqXAqFxYjKs1Y6Hit1acrPkczjELFkapB",
  "key11": "3YagSzFps82MhkvdSvpfTGL8sZfGcha2EE8SMxN2fHXgLapfYFb5yFs2LseyKkPMStYd7NBJRn5MiR2EXvHt5UQq",
  "key12": "4HpRb2Y6MfMjrFHAuiReK7KoEvwwB2mCviz3qdjgGZVZL83RvSxcDEcEjj8Dxe8HdWVFFaetYVxtGVYGG6oXj6CW",
  "key13": "s19oZbNAXrd5CLTJjctt3Tj9x6eSpFNQcyFbAfMqbSvxGkjoj4ZgeH7YT9LfbYxHVEeSvsFqtGT3E7yq1WgQt7K",
  "key14": "2Yt2VZ7ZRpzAv8SMX9bLzGjJdXrct1AEFwMFys69JGnvDFhRZ4XvCVncvMVh96w4y9ta4ZhukShvFC77YDAnwo6Q",
  "key15": "4fdSc2RMgLnnSi94p8sCm1EuKmN9Zy25pca9gsRLDhvCyGEhygwydraFCR3UXFbL7NrrvjW58CkfBBYcM46t1VCr",
  "key16": "5t1JE8TZjvf7vGYqY39VKs1u6CgL8FATroaTxSUvh8chfZzEVcHBoS5PAEHN2A8NVo387UaKd7gp1q6KfAVPi5Zb",
  "key17": "bbK74QrVJ27q8h3cYa13WwsjVtv6jY99pe3PzhwDUSxkebAoPL6Zu7ND3i2hffwWvdyeA9Au4sTeFM9e26e7LQz",
  "key18": "3dXgt7ALBRJqzAzncYdR9vUK6aA4jCaiTAtnABgFV9NTCYYr7nh3Kp7VBJRj17rFphCugo9Nq72ytCcPU7hM4KXb",
  "key19": "5dbGAKaGuTmmS7iLWZV4GN1WHxGWhUKe7zGqPtL2QxRouuzfbSGreeWQejLPhnkY6iTPXV1ntzyCTYrnHCH2hNB6",
  "key20": "3bbBvodsRmEqTutKxEJSdAAyNJkQxs9Uw42b52CQsaX4SBF5aqGr148bWExq2EQsT6ofgi9HWMdxu3WB9Zh7YhU6",
  "key21": "3R7iXoTh7wmhRrsqgcd771ztcHyYvcniaECycXfABFm23ChMvD6gtPEDj4D3yoUdmnxjMVpNeMcyXQKFKUEBcFFN",
  "key22": "2XhUReMUs1x9VUjc68b9idF3wBF7YMepsqBiotEHzWiGcgFupo4jDTKzvViRmVzLZySMQP4cLYshReokw5vgF5fe",
  "key23": "4JnK8RGz2Ujy1XuSGU9Xn3KusWMBAWeCDvEqWUKscWFiCEpRci1DERDcfPByip2WRqon1JhLuoQU4rrCZc71bL93",
  "key24": "5mqTDDFjc5dHe4qqE8Vo4x37Rj8nqW6AU1P6grToLJMyit2UvtjYQPoGmF1Mhm3ewt4RPw9FXYHkUwFaq29FBAsz",
  "key25": "2g3fnqrNpZN1Gvye8RnmZxTkfRWjTDP3nowWwXFjjoFAEdmrRfK4EUt2wTLEopTHtBDt3dadEvZDPCkAFaormrWU",
  "key26": "cpEFzmRBWvmtwwi2VD6dStSmGXz1drGDua3iFTrhkwTBWnwj7UDrEK1GpRCb7meJ79dBCCFrKL99XVZC1ntzRge"
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
