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
    "63hax3ZvbY1XLtGSv9Ze12xBB3UcMa5GkD1QS9owMtQysArQGkaujANxkczUuegfA8mfGmc1wSXdKVFpPJKWtDS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n7s3zckAvpKuCtaaRjBq8iRKwX1RLxuUwCiPJ53CFJwzr8aLD81Nf5pVwLDwBmH5RHg1edDrsaBJQut63ud3F9A",
  "key1": "3i6o8c38KYYnmuZfp6uBg9ZVc1rtdpphz7zYAZC13Q3neHA54P4xUhYubpKmf4VVpv3CjKiM79MmthrL3QziUE9y",
  "key2": "3N7sk8jSkDv1AAyTBa4vaG3deBAUCNzdeTJKAkEBC2D7Z6twfVYjakDjyKwscxswjJomJcQpemrVd2i24VvY1hYc",
  "key3": "4rRSWXrtaEdEqK5a95tSqU5k4SWb29nm9xZpQskparB4BFSiyx8hsV8ZBTfCNEuHoeJFZn824v8AtB9cHZZR1V7z",
  "key4": "5pVQW2pUo1PfDEFrM8VP5xUqh5rrH2LiNT2853BqbyxJLxCJRqMR9s1KRCfS5Yhe62kyeCxXkYouptBMUiMskZSk",
  "key5": "2EzGsMHMps9MuZ3CEFvjsjJKWhiZeVdN5BW2NStMycewbjEJazHJahApVjzV1Uii5Fhitn7Sgb4rju5cXE2Y6aBj",
  "key6": "3THTsr8DN7JUEqHhsj4y7AneACpMM1w7y8K2Y48XsZEVEz799pipdm1A9dF429dbE7ygLQH9EVcnZ5fFzF8uD8UG",
  "key7": "4rkhxkcyD9fay6Whpadzw2yUFSRBLHH2sHw4QuTUKtSatJkEso6VD9M2eGbd2Y9Ap1dmgFHWYGk8R3pWd3nCqTXY",
  "key8": "628SFm4ewgkdpugQ5pgqCZepsghEN4bV8uqtT3SVskzFMPuaDAEczrkorhjrqce8NdctskciXVyAYDyZnEYgmJV1",
  "key9": "2nyv3M1P9tG8mTVxnvmGvnWr9ds1nuMnz7QqchpigpBQEeovykeCTMHZfuLdRs5A6o1bJF4sVyAp1tEmi4fnghns",
  "key10": "wQegzHYc7NKdePLbd4v1qZWD9vp5bicQw2eTZHMLXDecTZUiWHjNrBeFMfqr9hHJCwav3MKVHEhG77DWxo6sQQt",
  "key11": "4dRCBAtQ8me2Rx38om7Bw8oLrF8vWeq7Baxw9EYhiJNaMLkY1PkqTDyB9E1GmB3pT2girtFpA9LUvY3DFgjRM6K8",
  "key12": "3i5fkUo97sNNQD9LNGwK8AJ6XSiTLnNuW2oSB4MpAwjSRngw4PSdDTK9iYZyFsEof7TX7GxiMV3GyAaLA34tNJ3E",
  "key13": "mcjwimKaa2vmp641aW3odVVDBSug7bjAe4btAFR3ewW2pso9uVNEBR1rcNHVXx7KZVBNYR32pyPgJyWEpzLhvnV",
  "key14": "5BaRwgaDUeBCkDYgUBM6UmyTkg8PyQqGW6w8sp5nSPgQu6eQj9YcyUfZoLRwxtfb43dxuzkFCbvWtX71mqBb1phs",
  "key15": "2znygXiKChcNmb2jcevLrRJtkqqQiAuo2scX6mEF9M6ASNddX3HKzF8vo6MPjdvvo58joR7YdwJ5qax17BbzcMC8",
  "key16": "MksTG2EzrAzrMsRioZSwbfR4igYnh11NaE8jWM11L7gLZZCmBWAD4XZgwPf4D4oYrR9gZYzknPtWBixPVvqKUxs",
  "key17": "5HrLd6XEUtuhxBkaFSF7YLjEDedpRmuytrzentDzxrEnJb6WXv84Q5fZRp4Sp9P4UvFreUpGq14Ew5ydFGLnfzX1",
  "key18": "2iBwcjdirgaNwVGbSZQv2WMP7MVJ5PxRDfchMkys8oyxQGPV1DK3jr8XYAX85rwUuWULLerp6QWHpCdVjDrG5RTV",
  "key19": "y9vJUNcYTAG6vUSPJ8Xqxf7NzqUnco22qTGXbHnadiubeFGY4orH5a97A7bHoKKMKWxoM4rnJYMEm3pdVExQpDm",
  "key20": "4oAo4RSYSV4khSYfnFbh1idzcKUxXrWHLxzUvZeCTGh7nA1SoMvw3FaxiuEiSU4dZo25s1Sa8uoHD99mh81Gn4pC",
  "key21": "4yffYkX8cLDcxibA6QpQBNzGqakbUaRp1hRTLaSaohkTSUZqdzLCXJx45y7UZQsSy3NvoACxowHmK1adWs4UmmYJ",
  "key22": "Du8Kw46Xad7wFro9Rdxxsj3k2JRZEyHBLwkt4odXB1PXYNWbDe8KkCJb1EEPesgTq8ontSnUNbqASxd1XMjFKEk",
  "key23": "2baUkbxDsg3TH94F4fsi9DkAWuFLcHNZKyBcnC5aXiDCB94gQR7CZ2dSEYsBmYqNXJEvkFP5GN1FPPadSF1bmxcv",
  "key24": "5J89r27b95UvyFXDP37reSa3K7UivHrCSifBHHFy9NtHvVR6VELPBzNj2cKHRMDot1Q2sTJnAeSargCSVp6gGz32",
  "key25": "4ghodFDdmdjbeeEzVe4yPppn7ebpBCBpUrcfXkmCURFSbepqqYyYw9YHwfuSRbDuaN8c8oAESncWWKivXLpm8EMV",
  "key26": "5z5Azi6HPDhHCdUtE7oDC6zzC6vdGZ5RiUFWK6otnCWJEQ68wRYeUqUBMyjZKF1pvgTPiWAZfKFVKwDDdBeWQqba",
  "key27": "3VMbP7SzowwqhExNbr56VPnymZY1iwnvWNHaw1cPZqLwoNCwwWHEmrVV1k4jxT2SpAwNf4nofhxJz8KnMhxYk4ya",
  "key28": "q6bn4oyBEdhqTYYjHRcsPEN3xwAvHUTEQve7NvGGbMQBvMCDk1MtP88LAEhqSnAEXzGYCHwC3ooLnyYrbXXT8vT",
  "key29": "2GwTSZzRjeGYA5T5No3ePpGtnamqoKyo7wGKgaqnv5v1s8vUKW6BhW6nAi8iVJmA9YetcKxXxDQsiq3atExH7rxw",
  "key30": "534n78s16WqW6mFEeNQWPYzzzPGCx17vM7LuFxKDQNCLrWtWeznPTYW6oADnq5wjdK3e8AGUXAg3PUHKXX5dZQ3V",
  "key31": "4mzrF8nHG4YPGZyKVxYq188oBGcnrL46H7mmChTtenxsk2pidXBWoHDYzsCuiz3XTQfSoVP6itrS4K7AbfLH7DiZ",
  "key32": "9vm1KTqEUC3mygZjL4yMfunpHKBoc6aExQeg5tBRGxeDzoFbcHqsW1N7LKY4ppygyAfbukdxTwBPtHnmZx1ohtn",
  "key33": "4YFaEx4Ri4UgDfsLBcZoEzCZ7bmtYMEN44UvMCHzkNq2kPALXjSNud1NawA8hzVoHvtAfQGDAXX1tKubt1Wacyxg",
  "key34": "xqy23M8p35WUvjqSAZknayzzeeSG1U62ekwBnm3WLeXc9Qv58FgeyuKhtUf2nfAZaRZkMgQfWemY6WVk7NrdjQN",
  "key35": "4DV8Ch1YuA7UTfhRLuGn7TunZXHHs5YAb8BjtotCiw8QBUxFrHbuHKSjXMnGfhQRbcwUYug66ZHVPNStL8q4okqL",
  "key36": "31rG1tBnFib6yrJ3wm96FgzLPvCTLfT727BNEYsdhwUUbTjnzhdNywG6WTvxVU2CDrq6MtAgeKcBrExo3DtAnFtn",
  "key37": "65kmZHoNrovkT8xEmyzxCKXUDcbP6E7Gi9XVE6SJ1xPWpSpX4X5iqugKCncEfbo4dqhahWQaUMS9MmcpQHyBCoyQ",
  "key38": "zkxpK5wbnTMu6A26Taf1Q3PcsThfHUKkWHf2vSUAtcC6HoZ1dPof7fARsptGpz4RKNn3sET1rWwLo2kvLiBCHpw",
  "key39": "wYrf7iS1gKKFA2rHVxgGE91R6KvUKykDBMHcbKCupjFATBpiVBghpW9yPNuwBJU8S97MuHuSCExpsG3T89muHDb",
  "key40": "5JgHgXB4NdsoiD6xCwNQvgUvDX3Jo3qjQ9geMv1gR1JzbT2CaLhs5Paenx1Tdt2RsZckWJn6gjUteNZVtsxiYPaZ"
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
