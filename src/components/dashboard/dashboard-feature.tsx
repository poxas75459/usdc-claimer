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
    "Fp8YmUUxA7zqTVucgxUwf7u7ky9a1tNntz7kYDCvKgrf4YojwJzpxCV2qMRSQ8YYx9LBiWUq5BLJRCDEUXxH8fk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FjWKTrNY9TuV44oLrbRiNKt2sRzfdANq6y5soYYL25moLF2tSTeFSDus74HNTWrtdKMnyqWscDXFaCYCvgWngzK",
  "key1": "35fqEGiaPRYYC38q1h3ZDgkwnLbFASvKJs9GUjmusHeXxXrf99HSc5L6cd4DA3LGC3hyYhy8hT6MRC8gbaJDqvf5",
  "key2": "4XZmJRL6vKjMMMUXD31gxk8VvCkhQw7GeN4pPpfvuKGvcKTQc17ttdwtw7rHBXmH4sznCNSgFb3UQFpJWtyHBtfQ",
  "key3": "4DrdWVqQ2jw8JwpqjENg2WL5uxJGybhiFf2num42snkudULjTpEZWYkoXrL6s9zbQA6o8qv6D1anqxpVef9aQun6",
  "key4": "5dg8TBQrpVMjsGrTktdU1evBPiEsQRruFMn5ydPdPYnwKCZyLy64k2G3P7FBmbxEMD9XYRikJsxDckhV4Jch2Nq2",
  "key5": "3x2RM6voy3PxZYwSHrip7NsZ8NS1Jfdrs4K2LSRWZNauakH9A3VtcmEDJ9uUiN6cwpo1GS9ercsqzXeMEVPd1WhB",
  "key6": "RRWpN4mTVc9EyTjrDYoTLWhGwiNeNfMp63UGLetfZm4kDdzCADRHgvGAA1Q9ZVKiBXi7jLnpM2nPck5Y19gxjfP",
  "key7": "1aFGxp8mjG5Pu1vinf3SekaaDAFhvaE7GWsuSNCXd9kTSbiEwwE3KspLwjxepBaE1BGZX5BtisxJP21mfXRMoDz",
  "key8": "2gm922NMBS3AGKQNWJ21BdE9Ne3dXnCCStGxGgMwN8Wnq3SrqiUWuGHUvjPDVoL8YBwJGHTjV5ZWxbZVyLUrqcay",
  "key9": "4AsNH8iFfe9EnkvV7hT7Z4wD2NYNDZjgzcgoUJYoM282LbFDhQcQFjsFikAUXQTHQSfaCXswedu9BiKgvL6325L7",
  "key10": "KFdhsc3xGS7acoi2HpxzqDpCZ3dbcRExpGJGDHjLZEqzXqsf3yX33AUDe2wdVdf7FVV6zCqwxifchRGVocacsqT",
  "key11": "2CDW9tkv5kCTP22rWffyYmQsew2cf8wXmj9khDRbsEoJM56DRWGHy59L8P5iykVpo3m7mnrYKduBUKcf9Xwgjh4S",
  "key12": "3rQarpwpxsHfVVEdTuFQztzQjQuQ97n7r323mZFqM4AvUpE19yXCgN3SFxghPXfguknXx8785ZH527rqD88D3U34",
  "key13": "2ZN98LRTq3BvebsVtft9193r73NwQBc9d4Bmd9nTFHaamCHwXYFpuoEj8dcTS7LzH5NugdBraVC7Yo2Fj874aLY",
  "key14": "3G7p1j7qnYSivke4bJ7VpbWXMB16QBt7xoSpyQgcbZ6JSRivhPR4gqxiN65joBcKRagSLAYBcLqXKZRdE6Zy88V1",
  "key15": "2tbRmWe77hhMXZWmyX2YSak4tZoRvDq4ZDPgPGx9ZK76PxjVzGxditRgjit6TEECjEC5xpLutTt9qzswzcm5TVZ7",
  "key16": "4BijQXDxfgmuLZuUSwQoKyKKUuK9a2cMBxnoFjKRWh6BtwMZiRt2inEK7dZ4jSamcX8gUcmar5DfmggQDSH97Gem",
  "key17": "2b7EnNruMC895hGxa9zTrPvtoa1JHvjAmc4ax2m7948EUCs82AeLLpeb3k1qmcW5UMokWJoyF3nTwJW3mwpt9afx",
  "key18": "qtV51x2o7tYRdbfvZjFif3ytwzJyeTjVbTknBwsf9Wr69Ndc3LX16jsYU4FRubc1opkKckFqPUXvaYEHRDYsZdQ",
  "key19": "4WoSrwD6LzSpTbcF7CMV7Wh5fTsiTbTGpPzKdT5RPtY7vBTPU6KvmybzhS1FeSuydwGMxod6gBZePEEuDhjZj1Mv",
  "key20": "27oZzWmftTVg8Ba6M4QoTodfKLS2rCPtbAYtZScdfanT7KBtVvCWP4WEMYTjBPyz3qupDzv3YsZGdmBRUAfrv4aY",
  "key21": "4roRYrBJejLLVKKDB2p2mghSiwepzzSGVRYVK78LXhMf6cwa9snqPPTHpv9CfaXYTTBhRbXAsPCYnNzyEUau29qN",
  "key22": "3cjA2kfpsyjUU5gkp2NZdaFXP15KZVYqHi2RFfRrVKnPM6nyQqGGLCPyXRPxDtyouXLZZNfWQuPJ671G4ymWJ4vW",
  "key23": "66mAYFPEr8Y789JF2J6HdiqsHA7kDRBDaxoMREUhdDtACi7Jh5XZcjGzGwt4TfT7Ji9Tb86tJyTrujsK6CgieNta",
  "key24": "CNNYmbqbBsuTAGRB3yDuSdEHcmeou8UWHnfe9JgLP7yP2yS4W9b15uZWT3waUKeqsBQcWpVNuPgXjqr6yQkydUp",
  "key25": "2SCuXHoXEaTQ7yFLeskcnezAuEtvdSAsZBFaqUTruguG2bVX7LHDEYqigJ4cHSCLjurT47JQUuquBzJLYDGx2D4m",
  "key26": "2NaLypPMQvVkjJ5Ut9sqBLPn5Z6J3Q3ZK2A3fujsbQ3i2gxgDsFqW2syYCLiLG44KgmQwUikBtbm8SWVRm5CXBwj",
  "key27": "o3tykmjr1pEKkS4ynjWjH5bArqeRS9QQRbu5yyVgu4eNRxMYBCSjU16hq8voiKQj1kv7u6vBfHbGDwrE5LzcDK7",
  "key28": "41sVWjsZqGYT4SYJ26W8akGyhsqmtBK9AAUhLV97PTUjhxyeHC9L3vdsLLTCkzU2jRdWvh6a485EkLotTBGNuee8",
  "key29": "AgZEBik5MMN95xNFZ5bAZrrWQQsppNiTmkWtLpLhEMYDbV3xasQ39VuLmGpnhat9HrX3EcRQw4ARRNGUtNreToq",
  "key30": "3suswS6LAXURUNgx2h6fQVprJ97aGiB3g1UHuDbEyz4QDXGNNkF1W2dwnfnsBERgzh8sPWsocKAAJbeKgF2rCSnR",
  "key31": "3trNXByd2uHFVhqxaUVn6dzTBjM3SS7EGMbNH33Hn6JjFYuKSteqYqEi84xgaYo5t2rGhNd8XvDKJ9NdbApNV9xX",
  "key32": "65iF27EAg1Bca4swdJHMSmRVJW6vUmHDAqfVs57E9WGtKKkQQAvGVZ37v6zERDacP43P1PzkJEi2JoAZUWDXkSdU",
  "key33": "TrhAL1McPp6SCc4eKKae1ekuStmwgN79yEaYd65hcDoJMWVhWritXr6fuWT53mVvixayXG2QoeBGqx8nLxfHNhA",
  "key34": "33xjs72841Fd4mgd63QLQP6wxGKbLKLu7QQF6i8Vzc3JnKX7ufjuBuj1WpFVCJ7d3TMf2ANnGTDUe2om6FXCqMvA",
  "key35": "2icPgnuuL5AZ5kZgwCri1btQ7oj8fUobUax1ueaiMypotWr35qtcyAfEmw72GzAirMtcDSz2azUonryiWVDFFH7V",
  "key36": "4Azooabm8md2dkiETBBFge9QR4CRPkzPSLKcsdcSXbGRohx122oxQ4RuNRgsFDYTHPft84w9WrE8XXJbk1XfUivW",
  "key37": "ijjpPv8b8XRUGPKxu3hV1WZJdiz28oLkvaHdaYFrwkVpA2GpZVd1E3Uez4RJmJR3HvpsujTFwTcbd6GEtk1q8JA"
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
