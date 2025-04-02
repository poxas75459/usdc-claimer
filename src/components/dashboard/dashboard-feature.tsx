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
    "213e9dKy6RGKUUnSrmf7JJ1wAzNfwujQZ41c68jdcd2UUEZGQVgq6KKfwve8eLfzGi7Y5XQRpV5pf93zqFcd1EoF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P18GoUjdipNHavzcyEscqb8kktx318LN6gejfyB9tSKwVsrRzHL3bVajSjkxLsrNQRkJ7sBMSPW9Z8Jy5JfQ983",
  "key1": "2ncwGjodamPUn9JqDtuiuExk8PU6fAiWaF7t4v5JP1k3SfQPw7kRsVhJQxHpNxmAoqos8gnPkn3zjX4Z2ioHXoh6",
  "key2": "5dV9Lndbv9fpuej9VVmqMyx9SLtxFnfNiAZUWTtDMUUDNiXHF8qi7omWy1pGac9e99rhEH9hXDhNeXjrR7kzoKsD",
  "key3": "R4TSLAViNtz2yVsZHaU95pwy8rLp6PqEJRvQBwioU9QKk76tCmbPzp8fS2PRd66sM84Ws9rRZccFZDyQgYYu2vx",
  "key4": "27jAYcuDtA28bNDFV2J4L6owHLNNVHuezjxmLLduNNzjRUpxofnhkh8dayDN4cbanCCe6nnoBbTq5QmwEuUaAFKQ",
  "key5": "342CiweyDCLid6zXZ4RYp32yV1tFKfF8tC2qRo7ki6TLkTEcf4vNyBfmLecdqBoVxhh3YL2wcxk6GfX7Lqhso3yi",
  "key6": "3WbNanc6pD4yKfCtAP1bA2jVkPbvYfWpj5pAiqE3XjhU4ShY92Jby9dHKQf4VaV6QEfstaegnKgzwT53czMPkMA6",
  "key7": "bUKRoQ4tyiXy8c7X1VUGCnDPi9F5cqs7w8CSU54mK2FXxyoXhLRyCiwYWXbLsVFuggdANktHgL2bjdDZhRAxRMU",
  "key8": "3NUZ2DDBm3YndHzrsiwmAe4pEBLpGDKGrh2bR6D3EyPDSdAbfXsdaek7NiB8cRpE65X4MdXph1DTreRtoC8LaXrb",
  "key9": "64tBehT2BpMrQgiELggmeDjpV8wKgK1NsMbZAwvGdwJ6L3iBco3xQHH6aiKXCqo8FqHp7Xrwx4U4ARthPEdzu9yq",
  "key10": "2Z5FvVZRrYNHFiMHmB3mW3tTsXBfvXaDx9K3sk3gZK9Y3GFAwhoGMZJqUoCnnsRczhA3yY2WgXojcSohrL5awqaD",
  "key11": "oLUnYd6v74RnmVoSMZ8zUDqiCg8uiUHXi1KDH1gdmBwPhqnTvKeWGLM1PF2HZbDXWL5D3JyRqjBQMymcXPyZttx",
  "key12": "3pxVjv9N1x81gLPcqnmhS22iQLh24ZLDQNizqzoYnByAS6AuvBiztyJGrgUcMzQepo8TNxukb8juTW5snLb77wyC",
  "key13": "5nKfvmxnfgqpa4BMQKpZReHQBSjpicCSyzhyfmVU4yFJfKAJxARngHMaaenb1XFTSo2HCmH6PKRzNxdE2YATdKYQ",
  "key14": "4xLgj9x9T2RRBg48JYZ1sEhcSRE8WGA3NimKcgArcFbiKfX1fWForfsmBVgBMohgTCfr2NbrMFLeVdWdFeST5VEu",
  "key15": "4jV814fmtmdDvtuoSeZw7jvkYB4t4oDTgGFy5P3mqsuwyLJfRaVD2dqHPLs8aRkCCigb9dRMvvbNTp7J7ecbHkhV",
  "key16": "5SMfv2Npm3tha7HawmnV36fNQvPSpfsPKSqYNJegEdx8MTsbgm5CrndCJKbknuMt9Z8P9LYP7aGA7SHUohWHvWiN",
  "key17": "3teKxNMCm7DhoDUd1V3P8T6XGJJX4g3RW3fQ9EaQK2RRv56QjEBhFV2LcZ6QDAB8UdBwPAdhoGbh3DUSg8tA9kaX",
  "key18": "3Lc11mHJesLjVNSHdxES1PhRo3qoT13iqWyF8zaEiWbJzd57Ppfp5RagP4xfEfi8q6GGZbjeuvkcKfuDZcCHxGHn",
  "key19": "3zaELsLLnuKK7ebg3pikQFcH5owmXSQzCE3QRPE9qL7mYNWR7QcqQSwJw1tpw4JQFUZ93M8hThMMft68GW58dboY",
  "key20": "44UquKRAUoAC2hKuTQc3162N6rTCmXUCwebeF3yvYP2UrcVjyyNEwnzguoN4bUteZeuWtzNm3aKjh8wKYD6WTtQa",
  "key21": "MuQ86U4hT6VTmhr8PcAmDk6sm2ohZhkJmmqZ2AYLyrk1By3GpPEUi27GYeTZJxFy9f8UR5gQZS95qEj5jaNYkuq",
  "key22": "XypzqeszthK3afVPjQhEnnRJBKkrFa1D1SuWLekLgqwx3xZAaRF1nFbpyxSvCWrkL8YEqw7j8R5X3TMKdtjhkfi",
  "key23": "3sf2YcBsFjkzKuXHs9KQWj4imVcTgZiwiPsxh1ogwLGcNqM98cGTXqBzDgrzH9BFNtLnzQf4V1GEnByGcvb37Wum",
  "key24": "4ZAGMSnUP8VQHn3sm4nDakaQhMv4x1BwyaufP1SYFHvgswcuVQETpPcWPTfZxu2mS4FZYJkCBgCGoojKRuXkWRTu",
  "key25": "p6pFE5Ye4tKcC7AniSrX6d1KM9wqbgaPYHqJy2HbKw3tphi1zvAvMebQ3cKA6tzJY5sFTszCQZgkoTKLAqvJjqi",
  "key26": "xgpKqqhdmyTpgejMXsaRe6iLfjeiCi5bXs2vrsCY2x6LC93ikRsUgvxiiSN8k4oKZ6kH3D2SxR855n77ba66dTs",
  "key27": "2VmsUxH3eTQAbtiEdSPA2S5MxHKrcyFV6J38nLm79uRfzkjGaijWDQEmpt6L8YX7hh7FrdRAex8a4ZSKK9STXy7U",
  "key28": "32ta7g7xfG1JuxYmEpDXKHw3V3dvuXsCJqE8iTrRenWLtPaURxfHAVepLRKuqSH9BEg5yuEECybLNVML3iVato6o",
  "key29": "5WGsAZZa7js7tBxt8oRn6L9FCTLgpc1RB1pfctA4jhh7JuMqGgeh9b2ESAsGHCZ3jV5CaEG6mL8qiLEYRkqcnEgP",
  "key30": "52tMxr8ZqZTehMsj6z6AbT5JhWqerqzbmU9xjaCZLBaPryRmxuHYjGK6mpgXVv6raLJQTtugiMRLWkannTiJ36N4",
  "key31": "5pDJETVnAGYuGwdriBJXX6hrVuLtdsT4KXyxMZzqyRCytPWLbiH11YPVxnzY5WyMxqSzKJyAyw4X66HEf39Yb68R",
  "key32": "2P7pXsxSQjQr8ist6sqpz2LGuD4m1X9tu8o7JjbYXbVeVR48xUDjFJGPTXpGn9FTqeECVhEtCdM3bt7wzTWKMVsf",
  "key33": "2WuJ2ffdUnqqUMmDKPY2QnzLNVxPY95Nczt77xHErcQLA8USkj5wJPVipVaBcSdEuCzDY2KuNVDM1a54muY2HG5i",
  "key34": "46gqec9Vg7g4nrA3Kt88QJNRE94DKVU2teYsuBWbH97pt7BCKkgHSNTh8A6JkWZ3PhwBuYU923zctzQKPhfrKdU2",
  "key35": "4iBh31oZQM7dsXQmqjVoZrgzAb2BGU5NtgG61cLshiNqLWijpLtJc2daKaCYWQZTrmV61aHkJGGMpHG2hXZwXJCN"
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
