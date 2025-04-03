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
    "2iUbqEfDGXWkk289KgVGciiTMhCo9MMz2jAyBrRa9pYw5hmfT9TmtRhAeQKMoG7LwM3m74Zm8a4bj5EmRa65keEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42XTxvgAUxCE9VZ3VEHzc62yZSAWMC8s1ZWsFvRAfB3vW1NTnNVGRpU75LYj2jD8NHDMnj6qhsXFngpxrydTAKD4",
  "key1": "3tQJLpejodmpYZLZ8KL7vHDxTEqfFFiNnzTCZZNEz5DAQ9DgSedpa1DZTKB9r9F5inUKZGdTT6Qvzt6GdvyVQjtZ",
  "key2": "5EVeZT6HAQukZw58cjEiF8X3hyt5Bqr5kyfXvks4FHZvSKZsdyAyG45uq2LmR8tqUqnsU3dxyr1kkPDDu3rUCrv6",
  "key3": "4Hi7VyhPUkAPws94qxwSun9rmRmZ6LqjkLN4ZqbPoLz8ab1oiPdMTPiPh21V4ygSR5d4qmJXdV8L3ESG7bE5z1MA",
  "key4": "4XQYnQJBHSFbR2o12mcYeKzzwzGAUSEtdc7AJH7kXWmXbUBFKgd78LPp4djdhrFfauXyypn7gvk1S7HDm6pQaS7h",
  "key5": "3PWnPzHGtB7WJLC67nTxK8Cj2QGs96mY3gxNmNmWtX9SCx6XrHktDJePZkN2NA41MVh35ZuhiM6xPU8gyyCAQcye",
  "key6": "3q5RCWFg6vSq6fR7jPYH7xs1BhdfWJ21rCJNEXjR2C5cFZy6fRiSdjU2Z7xXLG2Jn5hCnzmDnpPSsZkCMn4E84Rn",
  "key7": "3PjxyReBUF1JTfLvLPt72zoBtUrowzwnwzpsRzohbZPwp6otUTmQnbKHsUnHGpyYV26gRM9nbnZ4jQiDPwJHVqfi",
  "key8": "43WnDTvGnqzMgX5z3FyHwUnns4Dqe95zWodqs3i5vKCaeTddKhGdU8og6XTGBcfhVkgMRfp23N3jgfca1HG1hDDg",
  "key9": "65afRPo9RwKpAVKRzBRHyEMWhL5YuxXxr7M9SysYeQi4kdSUfnxXjoShLfFFhreFnyh5gtSshS2qca9FqWDEaSL7",
  "key10": "4The4ZoUAFK32drbfm6M57S4TdC94rzvckwjSEbdYEEe6HRQB4SfB34T5UehFNiBetMVBNXeMu7buHfjD7q8YktN",
  "key11": "3cd3MWvPCqzuDw5DDUiWNk3aV5GcWSVPXypwy2N1NHFESPjYaoE8spdF57pH3M9Xw7EPr7X2dYxXVCvfB5U7S1dA",
  "key12": "5cCTvG5Zki3Y2BaRv7QDBA8tzTTDnvVS7NRWVaWRadSEH37Pctz34fj8VWQ6RmzyW4iAuP4zvvZFrqM6FS2Q9hAM",
  "key13": "51GctAGMm5273kUaUYDRJG4YSBKbX7TVGUM2Yn7MdAG6XT468yocQB7u1SXFEMJGp8Bigkhr2yfaTVZZWTpminJG",
  "key14": "FXhdj7REm61JGdqHtV7rYj5Ta1kToU6CHrZ7xZMVMHWMGzxSeqUcbowpmBxxQbC3sB82BrocnhNYTqZg5yrcded",
  "key15": "5byjk1DJGe5dbb686Y18Q5tB8ZDxcCvSrChH72uRBH3fQsUDCdrqPNfA31MDnxvSLmPcBSgJyjLdL48mpptg849g",
  "key16": "PSsGVcxpEWo4F93Vqh1rjcEjiGwu7KZ8tsAXkzsvn54i2pPjQXDK36dYnZF8FYVnic7CzGWUZeiUKXwfLRdoaGs",
  "key17": "33VmH1G1bhUEZge1p6RibXAXNmemET3rb5qX2afmdiQ8HY6bwB9NNR1z8qwbLnU9wEjeisfPJmqLySQDhKwVfRyZ",
  "key18": "2VvLaxkEBtWq264CuzbRcz8nMNtPGASvogQwNEr2EuAQyPcQLsoDjA9oEiAZxHNr3q9D59beoKw79UbvbNbf95Xp",
  "key19": "sdvYzSCfF5aZQZtt3Sopx2YJ2J685adFYBEV9RQWRdaA21F4ejvoxaxDdqjP5ibUGroSz8wcM19fHGLS4WhvtqP",
  "key20": "26BxhNmzBLt4c4WGsv3F4XKn7jq9NG8hD3vZwiYRgTRPBP9YqAb9gkh2LGQuGnfDhwyqVpFEqK224Uimm5zM6Wcy",
  "key21": "2K4MhqCW9sgbCwV8Tz25xstszJaGssqtR6XEvhjY9AhaLoCD3pojRD9UtjoTbhYaq72oceg4TxgTYkbaL8avSgQw",
  "key22": "3KiC8jC8WFRMvBKtpgoA2HzwXsaWQ3Nqcz2Tm5r2sfm391UGdUj1A1FWMD8ehz2RLCkP4Tsen8DjiBhtPP5EsrN",
  "key23": "5FwoKiw361tcfpaPDaXA84zCEgqeB8AgRPfk9GF3fpFtyfycvKRqj9d4yTvCF6ySvZqGoFx6mgr7Qy31WXZcXSa2",
  "key24": "8Ctd546KrMgodpT8e6kUJxmbqkHUfvQFAXKX4Uq8aEVHii4EsiHihe7jKzde7gDbkf3tC6gLHJmoqizD2KMAAfu",
  "key25": "2xA9ggVEqgEi15uyZ3wTf8BzQjjBduPmmodPuQ9MN9QxkgE4LS3AsSjFWPN9LAJhzuzkCVatRseZe6JVyqhxmvat",
  "key26": "2CQoByecu5bBTpojh47csuMiyTcjoR9G5EJpvbfqNRdzSkK1EFkvSeZzbWps2jY7g6KdU4LS3HLw58a9hPs9sV7H",
  "key27": "5saBx6jf7LUYPjm2wjNu4mDhNji2tLxfbuWGsQFCmDD1uxwbDYpnKJKvwfihDLi6BMpBhDi4AXKCpJzu9mygZr9d",
  "key28": "3ze4GJsRU4vJ43jiYdzBeSkinbcg7HbrDQubdx7aDSfoAFa5QcD4jnRoQa5rhYMQrs8UY6SLarGoCXC52jnyS47t",
  "key29": "2eAm7k38vHXLBWBRCGJKrn9xgBDdWwFwrVDjCwSu71gr63v2Zfp87KJYUcDDv9XUsE4ve9vBZ3k38AAnsGVf3C4h",
  "key30": "4tiBEraDcGWFqTn9gVXt2qLYT2XHvPdA75bnxZbuFwu3Y9PMxbwPpDasRm1heS6XXu7KeoV2F9422CNu2BBCc75U",
  "key31": "1m7TvwuRhLQQGJ9nAAG5XJ6rbWotr2Td3XvmscG9FyzsFXVydBPPxCkUrDEQ6mvpS1A2gGQvMiS3pMerLoNpMnn",
  "key32": "2Ys8k7pWwDJgiEw7xcNX9LYDs5jjpHUw34fTXWwu639yrriYyVNTJRGatXgNd6YYurN3xTsd8nUNUSeZTnYTZ9x8",
  "key33": "3aocEXnZ1yPBcQy91XPEBu3DcCJaH4LH2rjYNBCtHX8KVhh67wo16NsgCvvcwrEUGchMYvM7KMRFNtqR2jbnFEsA",
  "key34": "uLYNvrBkEzZB5d9tFfcwfg3pbubcz2TMFU1zdWKrSGp5vtgB5qf9h26Ns7RurJBs6mfW2AuN7U6mg8qtRhkTRey",
  "key35": "34aKQUqoC5YaCwPcugjBDtceJaDXNfaHLufx9pq9Do7qmumAM8R6SAedejjUvvNJ7LNHa49Zn9jnHqKSgL5GJYrF",
  "key36": "2mY3V4hEwhLkHmsN8MAkEiSSiKXUiACzCmNzq7a7fkeVjn82yo1T2pz2ZxZrR8YvhaLPPcNQSwynzfEU1BYXDYLz",
  "key37": "3L2sCmwWcmUa5Q6XDWfv6eKwVFVTiPQEVmpYx4AzoN5BmQnCMHAkNr7xijeEiNEvDzq7KPaRyzuPXmAVKJor7vUp",
  "key38": "2nzurXNYEeRbuEa4XUqnBPdcy3sc3TtV3JvGvzgLc1xGuay22So8ZFQQgXFqVCHu2wAu5DPdyReMBd8E4bKkueSv",
  "key39": "foPwjEjcP1XeEiwvMkE3L9sLqeceVFWXKAAdT5FsrFLfy4cvRT9vsmWS9h1evfS9JePsX4jXmNSHrhti7aGEuYN",
  "key40": "5iBLzA1Pd87qqY3XcJ5va1cENoRg8KY7R8EcwEGEkqMzna65BqA9Bps5Y5mqfHTj5HxHpnaaxeUeQX6BNgq1Utox",
  "key41": "3oRRePcf2QH2CRYWEgdKsxDzrtKCiDNBadSXPV87Ji9cTSuGWhvX6cvoZdqBMf5TbcPd9KEszHESwMrcbyejFqMQ",
  "key42": "56egsFMZf5sqAL97m3jaS9oEpxz8uZUWfmW6uFSMxCDL4p5UPXJvSHe3J3DuHpJNMHwBNbDnKNvyRvSgix8aN3PG"
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
