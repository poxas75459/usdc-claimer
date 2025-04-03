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
    "2E5N8XHtn2LgbiQNQVBrE6TVXA3hhu2s53FsBgVgKX8jXeQ9j5Yf5so2vUMYmNwokGYjAbs7g8da3z3BgkFW4gj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NnzxdZW1JtpDToismnPJhiBpBDU1TFfsARFgNTp8xrxyNYCcXiRygESos5ZEXykSKPfmjw5bsoLaXr6gNa5Rsjo",
  "key1": "2kqLzZHqNC4PJ2NDzNVDZ2T4iWpfTCby4vaKVTBgJFLQfQzy43zR3poTUiygGsSAXUF25MthQiGSgVJoHtAEQPiR",
  "key2": "3mh3MDnu4XLkdVdg3x3fiiBbpd4T57r4JEwYSd4fy8CQ1CmjSPDZsaMiCHqBZzZbdeyz8bTRM7rxZepzPj62gzfc",
  "key3": "3qZqPejTDgbJ9Mxg85QbHrHqJ8uXqcCtBQ568VQ2Va85S6Ywvw8kodxoj8MvLhkxkmh2d5x1ddK881MEnMTT5SnM",
  "key4": "5JjM2ZLSH61xgmUGcNVvsoe6yZzKQkmdxzfiPrFZs7SaLb87YLqoYP3rtbyt67uC34s6R2vzcpr7LfiZR1RPHFpL",
  "key5": "62eRssaGMcoxjqfwQgooHKEnpy3VJLW9emWQKwYtG8kLC3ALN6LwuxX2C4utCFSLghVtb4isJJc1MLbkgDGwqCTR",
  "key6": "2GVnwQ5wyCjjPwCvY5ZvDN2bXG1eLAsvrta6yVPLAw5fAt83gZmMz9uWptLGLeB5NuY46Ps7XCoHiFr1crFVoiKY",
  "key7": "2Ya4CajMFLPDLGL3ZCzE7cFCRoBeGRadE1FwBPiQouxcCtYDTCkbmu5fgGfFrSbPooSU5R2zgAtcnwsa3ZBjaagj",
  "key8": "FzYwGaxMELhcEiUdVQwi3nzpERppJziKgpEv2RNMvPvcpXfPcHU5yi8TX9AgvaDAF7z8YQAWYGrd3yte5DfAkm9",
  "key9": "4j2dY9nEcKvwMYetwKTgtar8o78ZyzKFEtCHLycbckLMPqMxVt6czAv7P79eUUoosvCbGLgeCGGPaQ38Xzomfm8e",
  "key10": "5bEXAGqcqzLX1Gp67m6iSqQQjB8SXnL3cy4ea3YXLLinsGzwCCn98VvJhe3JX9kehdtoATF1yM8oDHdNvv3m86UW",
  "key11": "5JxkGZuyoE4Ey9Kb3tM3Dn76D2QG1s4jcNEtDxQy6drzMBduM82KP4MECTPAcjc4cCTAt7AqSgrA6aUYiKW6Vnsz",
  "key12": "4fGatHL2mSCgwhAMvYsBBrZrhQEaUKmNSKtjyErxodxyGYEChE2WKU5R1pi542wCLXrmQYNxNEtnq2RZQB6tpTtZ",
  "key13": "wxvX9sSG8hqdEFNNSVyikQ443FG7VwPRnigMYZSDUjEo8Q1XjLtoAZoqJUviTT5JYVyFG3yiaLHvNbq2szVSHqS",
  "key14": "2ZXxPbUHC9da9HZSS2eb9ZJ2Se4oQ9eYbDbHjz8r6Wx9hcohW4jbYPRa9jbNHuLxHDpmsaztiUfMMZjtwHncEJkf",
  "key15": "2CcC7F7U33cxevPHYrEtJpJEEwftiYyMYFzTBoK32YWLcEobxwgLc1n5ygzCfBfkUE9W99ahGd4Rvkm8iJhBxzfb",
  "key16": "5Z1rQiwyV7n2S3F7wZ7q7k8WWkXj4JAKzyZ8sE7hX6LjZrwXxG1s3RPitq2wgkvs4X6WPydUBqiUJYg4GJtMLhxD",
  "key17": "EvEpeuKMfr6VGKmLZP5MaHaUfFrV6SHGNsd4hxsRN4rURp5LzaEaj7McRDDxD5vJGkCN1gJsQ3LKa36v1VVFnp2",
  "key18": "oGGoNc8MBFWaD4EAnSRF69rYcak8aV2XdMeyHfqoP1Ww5mZb43zKvmCi5Z2o4x2McArjC1ASoU3b243qHK5etTL",
  "key19": "3Y5orqyjZ1ZHLnGsbKCpu1vKkpFfFuAw974zKLhYzaPrabBWs3Qxtcxt3m3fFGoc7chFRnQpjU6TpLfWLPq4cA9y",
  "key20": "KkHyvSJMZxV5HefJUcrXscfMSM1JmbWxv1giUMXUgWydw4UZsQBA6P4rMyBgUmXrJtXMqCMbRi35TBfv4CHRGT1",
  "key21": "4sc49QnGUDeoVf1tAvdiaDmFHRim6nYWRvXi6YmcrMhbKLYLSTyTjEKD4ZBbbk6KEmNrbXg4659mXkvB5hmLB8C4",
  "key22": "4ZiSZKobupkM1fgnVwdGe6Ejgi1WG65cQASHJrbctNy78VXAqKMrvRrJpVFaJm2yFaCBRpajSnsJ1uYbfj3Bq2eK",
  "key23": "4ySHPyrFFCtT5tEJqt4VR7N5b47f7rW3FbEpP47JgYECHxbjyraYC5bxN4tgb8wZiXLxbzQ9MXdqURSf6NxEWWHW",
  "key24": "2XmW51q3SneCwbshXieMXB3D4xaMUrdGcck6RvvtYxKsH5HTE3bcNnkHdJQooaesrvem5BhbiTW2TsvP6fmzWjx",
  "key25": "Q27XrE3SXzoNBrZ8nWC6pHinphcq3fsxEm2Tuo9KxiBWayqA6A8j4FqjxqGzB8YPyYwCMWpgb88C4MpenSNLVgw",
  "key26": "24JmNEwy6aWwJNvsVC6R8h53EqxNqPhUFbRb61wK3uDsiT3a9eCfUbLAUHWxQVZHkhMWKN19GTmcLoMWw2cT64P5",
  "key27": "3qbWESV3JYDNdhftnNN7gaZyKzWTEtimQ6FTgbZpx3GQU9PBfUYT5gncDEFwexydkVr8LCSKQngr4yghU8bmYG6y",
  "key28": "42XNRZWXrbLLq5JW3h85W9mpZGbP5Q3ULWJsAfidW3fs9Hsttjk8B6sSh5hP1ErKMbM6DdkmNTe6SdsMkc8zgbTG",
  "key29": "3yGHz1VJLaCUfmuSioeQZgcU8B6JwWsAYiU9aNcRa51nwDJj7NFqx1TWPw9tepvZoExoKrq6knyX5MBUdf5rKHwo",
  "key30": "3sKV8p3DzJDpgiRir2bj3ppzDhwnhtifG9Z2Z1ExpY35CC3BAQm8S2yX8Fz2hdfMVG4wM81ftTowongGF2QR7sTN",
  "key31": "4SNQatZd3PjoUMufhVJ9ycMuFaPs1PBiqiKaDEcvz9Qbn6Tu6UjfueyWTMWKWcrc4HjamZLKgV8sF7c92D1frTdL",
  "key32": "aEV7mZZFzpxmuwxzFuTHsEahJtyJoJ8aSc2pjCt1yhSHwsiAP3pLc7grC4orydBMwiezJRmSRQHCVwTDrtzkiRC",
  "key33": "2HgUM6v8WfMwqRBoWrtzrUg9eXtZaHBRMy28Lq1twoA8XJEjsbURHPcnPqMerr1dV977FCmfkqsZZ3Y9coVsznjN",
  "key34": "2GBKvhrPfE41to6qaworKm9hUZoHnnoMEyaBnnz8fNAS5BT2Lnp684Ty1HFAkJzwADjjya9WePBSt1bVyWx2yy4L",
  "key35": "2HMxNDzW1vB1PvWJ4uLypPb2JdhrJdVHY7M1AwA3F9Xwbrh5EdrDFmtoDAWiQzX2zND9FSEgLKo5FcXvuRfqb5Di",
  "key36": "3Lc7QhGfgWPCw2vFtxFmgm87LUhwbKnQMjTNeeTSt1mHxKeChYC6igtRVCwHq7cRaMEJJL8bRjinkXm6qm4GmNRR",
  "key37": "3tZo2p4aGcaCnbWGZYkKjQziEr9KkHis14hmnpm2rtqmXqoAve4z62mq5ig8rArjX1yxgfmBbzER3fS3M9ceLwGP"
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
