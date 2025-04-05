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
    "5Dp9A43Cy6h1yDRTipZGgxyLQnE2v25VWPr2oxc2krxiwZL3DcGjDUHbcmGp5TGm9o2WTfQFoQ59ShNLn3xwYHRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jBPXYdeWXYmtknhZDB7jBrUKVr2mP3Bra8Xn3TYb1mrZMGq8xuhhRNGMdkZKoE8BLPxfSyvvkkVzf7Sj11wAwVm",
  "key1": "FiWJ5t2DPZJR9WEMwiRakAC6VVXPkPt6pCqwPS73c63UqGm4qnJkujUBALmQXqtmH5SVX2EnNGWDk6ZrbiuTvRr",
  "key2": "PMFxcEHRCDje2TX4pAcUvUoor2ny6HWUJeh927qHzinUM8sCJFamwVoECC2VK6mrpxw1t8pBJj64tV2MG9q41Tj",
  "key3": "3YprcxL6wqD3Pt1LaUvfsbGwepUMZGsBF2FAmHLT9DqFH1dawztd5zLhJGCW2FAhi1i7wVqtkUR46mzH4ao2Y8HX",
  "key4": "43uzYHhtX9ifkD6VVS7HQbhvpSK6jEMvspHQHRXTFGNa1bxt82xjyK8if3ezqN9GqtL79qWxuFhP5b8sjKStvErn",
  "key5": "3b68M7jEQaidYyio8n4uaKHt5SfWLtg2HnoVnKCVwPSKhiBMEMW7zvcPbbLYnBBBzy37u216xNhnpY9vpJMFzVzd",
  "key6": "L7PKq4grgHc53cRrhuDfeSUQPg2Xz5j7YCQsCZaJ6xwXe7Ze6Cx63EV5Qkvp75R2wWcWhwN5kyoLQSkRY9ESg6A",
  "key7": "3C91Yx3rTiNGa37LPSmKhpTYhR9He6wtXo2QK8M5snhKPcNX2w2iFdr62UCejy2M2UNj5jxhvWuWibEqJuNDyd8C",
  "key8": "653s3JaERv2gnz6BpRiDXnj2ncHDEfVa6fiDhzEUfiAX2bC17umFNBq3m5o6D1tAkah8cYSNGBHNeU9Hkt2RZqQM",
  "key9": "3i41sjsajgjJdJSRWzQfQTiZGiQjqJn6Ay8Wjwk1XK27LazSXhdv72V9wbTGY3tVwHPwG2g52EPaeKQokNEHMsnz",
  "key10": "57K5v9uv9rZACittHTM6Cz29qrkWnnBc7WKkfk42BiD6UpcwTVyhVVYZ1V6fwFv5fJRFjamzyPVW94LhLQ6ULVzR",
  "key11": "4xGKoX1ebTsNjufrx2ke9L441HCxRc6qwyyRwGCbqj921jNc7BdzEbfHvoVUZDD4RfH6z8Jb5Ch6uHYEsV32tAfw",
  "key12": "3jn6S5waY9dZo9StkU1XvpnVhnW3LWWVsBJyhHvds4ogAQvB7UzHbcTGR5EbSMbGVXY2wxBuj1Xgx7jdM5z5ux4V",
  "key13": "49A7RtNurV3f6VFaQHCaExc5wACAVYMytxbotrEVmygNcVQx6q3hEc8ofEWX1cTF5H17Q15tCPc5bwpNdujJ1zec",
  "key14": "5u2UKPYRc9Knd2YTXvQ6ebrhqJYfqJm15yATUyQxDTeZiEXxUPxW9KkHkLXwWmY3U3rLWcxmPbKkMHxzbTx4twxR",
  "key15": "4oN9g7MWHFmmKTJBV3iN362rNirLe4Ued7nAroC8WY88ECx5vyTd9dsD6YXCjkMAJ1WEsDpCuMPQW85Vqusgz6Mi",
  "key16": "2qqkAGxPJBwViDzyqZmRkWteVYXaLUeJiTNdSXg532sVGMa9hVyoLQ1LpeeYb2CVZiiGepkHnFFZJpg9T5xXbA9A",
  "key17": "5K8133Vc9cDqGGniARchKKzq2UYTc7UvCPJhr85HgTu7BPbPyG3d6gGuQP4MdPUc2VMwXtykvEFx8qLD74xoBz4K",
  "key18": "5naXA1EPSHUF5UUd8ugsQTr8TxNPQdEDhu2GyVzkgi8Dwr8jvDXikfV1t5oNzWhZtdepS6jow6AMKEgcACeBZcbg",
  "key19": "VkabGb5uMqMMGfPrFiSRi3aBC4MBXRbzSS3izQ3HYgfp9yDaRkqmDwzoT9dsQfnha8ZXqDk8aFa8Pe586eZ1y4S",
  "key20": "2fU5RbA2SXc2D7hT5EDhJoukverQEodm7k9GM8rfGarc6ATkeX5cMSxH2Wh7VEz3h1yNVDCX4U8PyDLkjXQwMyuo",
  "key21": "2w14UEydLxpiVGhLjS9sQPG5Kq4AJtYSbswkuuSmsavXfUrTvck5oXNceAuahhS4nwjyT4LTLK6irk2zVmM2oDSS",
  "key22": "2G819VSCT7FNp2ZbdwmPwy5BT66jdvyFMBWL6kww5Vv1f6mfuo81gqhVEhSd3gTmUMsDH1WP7CB4jaFiC8kBt8KF",
  "key23": "2iw68BEnKzWs3AawsPwuHLxPWjYjzN8rrn28T9kDsENfAgkNqQBFHTZmvzcXjj9B9DQ39Tt4ojGpf9wJ3iXp8Aw9",
  "key24": "8Li8manZMazbRGMAbDExc7mH4Bqmi45Vu5wmCazM9S5BVZ4R43QKHxnaRJepLu2JAmym3BDwPKzETNr8BDBaxnH",
  "key25": "cCnWyHabN1t88k8C8Yr1RJpoBarojb6sZcCQ3EHMYdjb2qHfn5z5SHNdYYBXzMAT4uWPxpKh9AxNX8SHabGazs1",
  "key26": "46rpPNQeZdg1AXZoEspNAnYPZDkZDXAiMKuxFiU67gfsKexWmvFHFRCWhehna9WTcwoXYZcbzEkK6Rr5MeNDcFyj",
  "key27": "2otvur3DMEXoQM3ZmBYCK8vfwR5cULSZP87g7drNvh5c6iSNHgRu8AtcM69ssaaQn4NfwZfS7kbJDAMAmtDyodzd",
  "key28": "3mbKFkuVntFQVQQNFTtG8uCn19Rhi1KApAA281avWLtT1Mv3iUCFu7JVdSsGBnQX9k7c7SXjdfSBHrWcNgzqL8iF",
  "key29": "2jzcVCVV4unjUHUdWotZTXrUSvfJLsnQi9ac5PcGiuRjUAaCq4xCtD1Hg2A3kxCjA9er6u2J6qeb1xYFGzNZxXEW",
  "key30": "27RAwkHYQuXWeYvFe4WYFps3akeg9JtjMgKwyxP1SqAqVXS3bY6Mu4Fz2PSrUUqqBpJcuVEYC36snjdPKVUqqzL3",
  "key31": "2WLw1DFjzgmnRLXmVGKiLrzaJYHXyy3CN188hnjpFppx9SqLKFPyQQLANnM3AZTMcRe3QC9ygvuFCDAZ6YosdTwZ",
  "key32": "4sfCJ7ZBKqvhgSNaQJshaA16Z93uKirdddenKpahu2ey8NgqPLfM9UkpNq2bBF1M7P3Pwor8XsixKtmYAwoHgd1i",
  "key33": "5bMmxzyYG3wz5G1iv9LEuXaj7vMEwukYngi5b1QujzNUExZ5Tu5HYYm9rbiRtYNSW7HYYvex8ut2ixuAgA11LxAm",
  "key34": "PpXwMDkmeSzTUcs3BLwkjJJ5ck4FSkPbdDY15ayBiLCVP2crY6hx3zhF7VGGaJo7QKmttmPKAFxCewLPDF1t1gR",
  "key35": "5NyH5qXKFdUeCWeG5gfQG5kntz9naEwSxLFFnL7PWhDEqZx1k53svxBBHYueJqBPhRUDau3z212ctKGJgTw8p5MB",
  "key36": "4NGBgQAzBxqtAd3oQJuWZv6gSTLGTkTZJXrPeeFVjyptHEEAqydeMW3oRUamxoth5HWyzrTX3DaMB1SoPFNui7co",
  "key37": "2sMj1WoanUKYEEMeSuR7TyjL3KaenMVCgqnPMQnURz3ovrGn4HWNiraHa8JzYKAaVdaduwMqhAME4UGeTBQf1hbk",
  "key38": "5EVANfxdFgv9wPem43H2L2vTvhUFWnL38p1osQLbLr8yPLRGS4J56bB1huDcHjZ1qD1QzRNC6ALv27CCDExrVZ2G",
  "key39": "4rrzXu2aTUkrPemU8F6ZMfyjY5MszbYferxEbKbnvt7KzpXpXvJ6xUuxFbigUPQaDpdmXSnQBFqBk9cSkjQwcaMh",
  "key40": "3LbgT43SBfSVdMcmW9zJZJzAY29J623Pbs1uJk3t6Wk557nAnvGtuLj1bPYbhQZy5Qy9HMsXpEmi8nSc1J1Axg2d",
  "key41": "2nJeqWijWA716peSdZDSYKKbPRWsRt9S3zkHiivbEyxt6HFNfKGhmJvA1fCndtCyPjiNrUakJNtviaYzySJ6sMwP",
  "key42": "3zSbMUXqwfvLn46pSyucVruzBbM5WoE4EPtJT1nwiLqf3dahc89DspaLACSQgabqkAmUPzGtaq5QeE1tWsWGbaCn"
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
