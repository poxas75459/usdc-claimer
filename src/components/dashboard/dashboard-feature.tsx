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
    "3cLSev9hkbHcQMm17VWxiSZpLbsGUmEBhJvSt7v78vYJzRC78BQBgogDEpdFgPaR8MHaTNsH36wV4YDUNCb82uXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7HTbH4NxFWnXs7FxUqtBzK5Ax1raz6gWg9A9Cf3kByKm5XerkRSFxGDpLHDgrsxZ3F9Tk2iaJn5WJRzK1GFnswm",
  "key1": "3bcgwtrNRqYNQc6Ur64GTviAJS6XedqVT279tQvM926gLGDKKF3BSnnVouiyyzbMryDrNe4Za4G39mr6z4i1EJFv",
  "key2": "2x5LQjbcsEx4oawiTvpEtW8H6SQ5M3zQx92tehXQCjDeXNrzz64geEJPhdyCzb1LFP8F4gLDL6xeG4MwSMeFxqAz",
  "key3": "48kiFADAK6np6ejCNdaC2oV3C59narSzRHZpoFcjBCkurojGSZ5iitNhj2aPTAfVioqF6A9BnBr4WDrmuiEw5iSX",
  "key4": "2eaKpb9RxJdUMpLWrLw6GHcCDkuGkUcpVYQg9aDoEq55sKccUBAyPc4ofNBVgQzTmF9KRLGdL5dPzh55xCVy7niw",
  "key5": "35ZKiBBh436Gfs12agnEH9QmDsGdtahZyh44Bhdr5CsEtWxAN8Ya9qfVDEpyH5BYsLbBqwnJsn8XbwZ7x1GBVN77",
  "key6": "2mCgxqRwxQDpKqUHH4zMUkwjx51XZAEawJZZTCGhAhV2ddNe99XCypJgUh1Rym7XqUTTy6PBGpjfj3Mg7Et3vr6s",
  "key7": "3Mt7jWBK6VeCd9XmdDwaTqobQVkL3LnP7hztEaNPkUtMvQrZPQXXT6F1NTyVNkknLdUG1hSd19C3Yp4EDiGi2mP7",
  "key8": "nGNgU2wGhdppDc744v422MyEgN6bQBrYgKqj1weY37ZY8Qeukicmadfy5hdH1xPDk6gYWTpPeuXjiVpeLc2VGat",
  "key9": "3ghLKFMQQNgFP1vbcUEjPFxWL6wRXiGYVine2T4XaHdmkJstPLghJb3JGcquEGnJn7WwmpXt7X8Z5E2avUiPRWna",
  "key10": "2KaaMm8YFi16fJ81W6T4qKoPS9vMiWt5DZWw27mxRfXkp6cceJbKUcaF3jU51NDFyYgFqv2NcaLFiewDyaSqZqce",
  "key11": "QGYarUMXU1DGKPYuE8ifsnEUkwf8nBCpaWjjo9241QkT36bvjDJJPiwP8u1MfJ2iBZqiqAYUUEcPqyFQ2Q4KaYF",
  "key12": "F67QC4bBPHTzo5Hs6gnp2GSktkEnL13M8ytAZVBscm586xzprh8D1rLdyoH7GyP3sPvAu9a4rj9u65dCTjDHFeA",
  "key13": "5azf8aiKFCSfZHf4Eir6JtpCVg3PM6BhBoXQh8tb9wCSvJ3ZTAttGESjv7fr8sNcDH9RHdwXCkoQsT5oLxKhMcYC",
  "key14": "5CYBUk6HwKePxBEkK4noPVAtoRjh7nzivsSDYBQHvED7vRU2QZLp1jS33TQjUUUgBn11DsmVKPtvx9KfR3BLKyvQ",
  "key15": "5K4e79FEiHqdtwJqhdsxPCvXoTuAbuA4XiBEjCTMPsd9CCurutKVYeg8MZ573PNrF4rzrr9HmZjiTUPAwM2sRuHx",
  "key16": "58hgScCFWoFVKxNX2EkrELDZiDCyzVtVBS3Wf1qnXkDDSTNwhiLLFggoCQaV3TPHYFdDK4Cnr4TK9CxTJ66fTeFa",
  "key17": "3oxWwMKPUMZHJ1p6G7uzqjTEUcSTCj14LZ4D9R5BNFjFZCVLWmxkSGqLUXFgVPZzXWqTquvDKcUGsu2iwvxqhQFC",
  "key18": "kjcoDjCLMMmxmPdAr3unkmG4yxJvYtPmZ9EDKKKdJhkq6qvwxAWYBezPiHwrHCoTnJKJ1xeuaAHmwHJrDFSNWYj",
  "key19": "4vfKRoLAgsjr68xSXs5anmspbmAi9KRJpSbn7fPbkJvrGHYKrtmxwtZECsWCZqNm3443fcwpvPL7T8QCZMCTLaL1",
  "key20": "51ifxN736SAKvjWxj5RtqvkQbjyU6Duf8qaKgSqSRWkGiSJAYZyRnPH3YUGuV3sJRSrJXi6iLdbRc1jJgt7qroFA",
  "key21": "2Lz3cmFfivd4vPC6KNd9crMqiLoKqdQ5YtWG144SjkswUuqJ5DdbUNSezQDZP2p5tKCqqLZxH6enP1rSqjfYfGe2",
  "key22": "3qWU9Dr6txAVwhZpe7hdHnhnXcWEF7A7bFggfeuvzf7qc6KUSGTBKkSJXntpFj9hJzEbcF4GGRCkNdrV8wmWvnL",
  "key23": "4QZiXjL6eWN85ScQ7JP3SVFBwASpjMRVeGjfA74SD2LKMhqoK8tJvWNebZ1aywMqhzhRqfjxy9Jk6b5aeqYw6ALm",
  "key24": "2aWT2pytR7JVCcMTbN6Z6MZd17FXWWKdY6kLdtTDXiTqieQHs5FUisCzKBTo7Nd2DmoWDSS1XFDZ8qqjC9WYAHxJ",
  "key25": "3joW6uUudYTeBy9STYyF5KrF37QcwHgZRPwz41bJMw1sKePnt7fCNQuk5792jrJHStkxdUyVAcMapBid4MbEvKnc",
  "key26": "3DBAr8df9t4S4Puh3Bm8nZMN8QbwnWVFpSBsotFrEozQVeyKLreZW6kwyDYAK89WXsEoCW46L8JGauXpEhApGC86",
  "key27": "qb1FQQFfgsFFhn5d89CaWJ9re42yU7BM5SXxaCjUxhsHa8FPDEy1wdjx3gtRSwtG9vCQRY5L2mNZ7QJcShraSnT",
  "key28": "2EJD6A8Q2YWncKRTJjC4mbJ9eFBj4Z6DDLYgXLDc4Yxd1mkYZWxwJut1Hqfa1qcQaT7roXhKtUYsmpGYMj9grBBx",
  "key29": "5VPiyD235tGTq3NeTfW1EvR8drLrVTtRB4Q4KYASDiMbDPxYVHgyJTXnPkbRtdn7QgEpBxDYUHwAVgTMxquWRZ2d",
  "key30": "5PQKBgFvfiSr5c8ZjM2rSSRdZWCKGJexEQUQN1uk6KnQzBopETFjsbeRDQNGk6UePdSphbtpfmiAtqcb9gP6Z9yX",
  "key31": "41dqHVFbSF8rDCTLWyCyfZf2zUfyFNzP5cAAVy3SguRB84yws57mYuWZB6JvzxY15iGsSDoL45brwCbgL5oQ1GXH"
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
