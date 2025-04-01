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
    "3seMwnGX8uKKa2ac1d9Tz88xSmUsrfUreVRBP1CPeLGTcYFf588E8uN24vCyNeeYWEyu3aZxv9bo8yYcP5169CzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3deHkvba7os4GG3seDQHVgxPBCLCxUm8Str3fdXMEizoixyDh61pwsux2bfDBzYKDTjKPBqXhuRe9j3sR3YZ6X4C",
  "key1": "4PFZAqhef1S3BEVQ3hTj8mQ2WcFnp7r9SgeCBPgwVNnGHv8FpRS8qZnPbyqbNvofAxvtWf8972oDEA7vM8oE3QxW",
  "key2": "3NymDbT6LLHkhNnSc5XJmqugUDHZSRapQNfPx6uhKQRcm6bjBc3jkkZG9y36zhknqsxfqS8nDTCrAnvUfUTAkhbJ",
  "key3": "qvbzubQKDFMjXrgFGdNSYptoks8qFEmHz81wi8qb82zzbct5LnaEWyvLfApthZaABPgiYHNTU7kfCg1eZcMzUJn",
  "key4": "5ub4PagsddpCrzcdNbtxj9cjfc4NeEJshSuYzYrVyAsFw2hLu65RRkX6io3ZGCfWP3v1eYdY9CFJEBzzshciB3Qg",
  "key5": "4XxUuTweYfsCQ2LTNWe5UhYh7vo3nLsDTfdxp2SZC5PjAn8YkY3GUM6BBargt3Loih8FPau6sXNuc4iLgNsEHLnj",
  "key6": "M7dF4jJJ7Uh2XddtCmiPZU6ru6LF3WAJGAVFsLvvrL3wxhgUG4t6FYorMT21KG69PQVbPhoi4D3XGiN7KBz9God",
  "key7": "cMgdAc3Tv6p2yJpjngGkoYujmoo5VYRTJXG3GVhXTygaacNtsR8DtMeyhsDAKX3p6gy58XqdNTfsmhnzv2oDPPf",
  "key8": "qp4fbFKpxoG6wPVPWT5BgCqZd4LaqfMxmep9yAyNLHRgy5zDPbrLHUMBVieJTveEw2pfU4CjtEtBd2oY4m4YiaQ",
  "key9": "2zoML7JKp1qy3PBQ1UVrxg9k7rMSn3u6vp2Zr4F3fYyjTHhrpS7y7KFjjZXXBEH4sRMFLGsDiqvNPqM6nRvqWHBy",
  "key10": "2Lw2QXYKeuDXXLxwA7MsWcw24D4pUGiveoo8edRUWVnUyrsBBdeb4sR2qXcnijb33hAK5Pg1iw7T4EgRqbwhS3NG",
  "key11": "3BNfcarKhE6Em5XT75djQg4AVQA8kWsoMCRDB19Lt6cjE2aoTfV7D2yf5yK1WvBrTc4UPGHiUbv2FRQUBNd2b2Hg",
  "key12": "3gEK2f4s5p2dtWdodDduMweKYivStTncigcg1cW3oNmWFADYmySeAKdbhnNVuGQu2GJibXbcc9DkV1dojR5hCcjo",
  "key13": "JxqsqJpGpuKHmV8XJ2LH8p2YSnXgKKRiPZFAJJFza5MiDAq746Xyipx4d9f6ijqFJQWvSDKN1vX8x5W6nqqg3gT",
  "key14": "5HtiMqiUdNrXc57DAFJXSKeSSPdaNHCqCn5h8Y8hLWXb8wu6SB8ni4rtiyKCBNREBdkmoeEnhUvi2rz4vMu4Mwk8",
  "key15": "3DUi6jw1zCTBxtzDgdrZNRrYAECPpRN7uonzC1rAodjhPGYWpuETMJKkjMJyfqNZzdJYT9AJDeRW6mkjypSFAKom",
  "key16": "2SBPR8x6u2sDgY81YLHQauiH4RZdfxZ1gEVxbyxDWZK2aB1nZpiEJT3a87ntz6htAoaTLjwRosb3kqGLhHxAP7zF",
  "key17": "4Ey9vqrVzHp62p4DphKCwj1SMq746QQaxwFP8c3Z8LZHcJ2BCgxDDQk62HeRvedMVG3HK5ptB6JZnPkjEU82FzPf",
  "key18": "YWapdqpuqAuhD2PmyBzk9rYp4RkX52JDCM3SqugreH2AonNpTtRjHod4bS77grfyVVWCsa6bxaU7KPivyaU2cdN",
  "key19": "24m2odWgzKGVq2E3rn49Efy86TrZamEwiYChZhh4RqjWwfdkXTtG1L3WEZmdm2oYXapweUoqGP9UWSLoX34AkrRB",
  "key20": "3bdLzZswbfqt9cTbLEbTMdRKy3tsvoQUEguXgTzLw5f1Dmi4HdMXozzyhnKwscXssmjGdjp35Y6k346dTnD8aTf3",
  "key21": "3DZLMDuS3cNgf23GMFa9JUExSp7bq7E1W2wH3wuVeUh6LPQ2mrXfXd2W2GN8KBVGPTPuY1Yibiio5zy7HKUNRYMK",
  "key22": "3jes98xdeXT8rsstPZ2qPoQRHNSpVe7kvB6VJuzAmv7Hx1MHg8kfdjZsFpDG3XkfbpVoDWQs8ao7J31UqgJxHJ4P",
  "key23": "i3UZMch2aNbAzSW4m82Wt9VVeMhPYTT4NiqmCSBFKkWMez35rhTnBwzy4XzVyTR6puo5udqCaoPW7bHTSxVfCtx",
  "key24": "4QMA8uFiBHN15KqsWbhwg6VpiFqZyn5axNxrLYeyZVnR5NkzyCZGxAbgqvivtcuLqWaq2GBsBQL7vYP4CPoYrYJB",
  "key25": "2X425vYkQv5nVGXJ4nBbtgJx5pZKpcgXYft68Y6zRiX98qLEmbegZEV1ahnJN2F3kKyjePyCXmEvWaQ3vVvPGFkg",
  "key26": "5Fq3dwbqtLSeqWta7uqHTSNC5GPZknmXWMeJsp5nGihRUCuzcdpk4KQTBRKDo5arY3YADQKNkXAQ4EjRsdKAa29f",
  "key27": "4qixrtd2QvUR4UxoHc3qCWyWZ3FXEs9TRVULzEhuZ1y8SKF5MWKwHnEZajhTHPKUNirKSM6DtzE19inZQeKWCtc9",
  "key28": "5oHKFjVPUyikJPJoA6MvnGStq1RFzdJxaNByhPnMXg5udtBextnRTZyECsB23nfrFrr5bHxwrmxY3qtSztreqxqG",
  "key29": "5cQVYjvDzAnhAYj7Tov7zNHiRrZuaz4W34A5qKXjDcSAvGKqJPWm8hrZfDLbC3uBPBwD9FU12nvU6FdwZahQhJGD",
  "key30": "3W7JHcnjy1VgkpFWeScCYgPH3P9gDkzonBFGSu1ifSYQDGM9m3Xv4Xj6vB9Ta5LQcSLrZxVMcWURAJaftPZWv3A3",
  "key31": "4JA4oeb8zZYKsUKKYCjrpH83WrbD9WVJK7rja5hj8nzd9eVJc2FXaqirkvVppzHzdnmUNkY4ZpUYYuySu9jBQrjh",
  "key32": "nreyE625TRte3LyWW1nEf4njxUmgoQFbiE1MbGVa2WXEijPKVFA6TPFnVGQKb2vTToUdocSFxcagFyCEpLwzEXN",
  "key33": "3MBFgLzDkbXkUtHKBT9AvsTP2LcZ4Er2TM16stuTN7YhLYu2s8CgVwPsSxKUyp249qw1zxc89FeLqHHt6cNzs7Nm",
  "key34": "2gmkoHX4LofAENwGdCgnvAvRREc4FLjnF6ocNJXjeJSGVgC1hmz77Bc9co3mTyWMMQoUkcrTcjwkGpKcRZB6XZYr",
  "key35": "366WTvdKTCEDGtxDqD93RVgfjjV7M3KdZkufjmJRxVg64Jv1m7D89Z12UKQTPJWg2C3z7rMhGkPL1TTex2eJGBGd",
  "key36": "2YkUWuHAWTQHEmtKgH3BkkFXgBfjsyR5HLGHBAm2fXve9NLkXmJpGmn9peG6F3EL5ZBkF9JNrU1Un2BPDoRic99k",
  "key37": "621Hat5LGYsZjSxok9WyTPESvVKMVWGgtttmeXYdm1h1XbJsLwRCKFPtK8XR6uowySQuTzYs21mA6xP1xdX1qJji",
  "key38": "3Zrgj1Dw3yraJbTvsWLfGoyEdgyYe7c3GJa9rejjFN1E4aejuizxxf9vhzB5GzSMhCgJAi8Tha3TgjiMtjyLohtx",
  "key39": "4p7XxpBBeryhxh3J3WE81EcLrgawios5zbntWbRyvaRckhg7zUECMx6X3NveRhkuQLqLN4YeJdjh1RvMR6MHD3uj",
  "key40": "4dXDcsgw6DXBgTpCP1sY3q872zADAWL9fvaBSGbtBifYFXXfxBGEikxtDhLtHLdYRADDXpWTSz3CrQxQi2cxaTYw"
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
