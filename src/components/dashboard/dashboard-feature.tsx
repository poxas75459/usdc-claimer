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
    "WWtLFwEhPqHxktDNMkdNEyrCWxmEgqDrV6bAbG2obbe8vcyG7i88E2mZLC7QcVx6SUHDnxrAYRLM9sJXGL12r12"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QwythzJqWZJg9xmgzyUNUeYKkeaRn3fi8cfEMxYTWDngS1XtJBFXDhEnQVS5pcr586LKDiUAsouAu5den6YADFP",
  "key1": "45DFb2H6mCd4Am8m54DKLnD2YJVQpnaWqkmGbEWcEJkcyex6SLZkbedsJbJvxK3skjL6iE25CmtfYX4gzd2n19vk",
  "key2": "TRkS15moAE4HicKnsquhhb2oCpg7w5rNBxihYv72JAxeVhSRfKVmcvbmShEzxijjV14NNpPdB4ayG3ai6ifqFwq",
  "key3": "4sfQ7gtBZPsM3jEXpF5QHNKAZu5rsqFs4Y1aYJQ86frv6eoZdkmbBVti7AoJLfLj2AULdkRhLWQsaBUCraRRXC9X",
  "key4": "63GkN9JTbxShSPEMGRUQxgF9LPLWfnfhyCKisH5Yz8xXjjCPTseDnm3TuBZ9kWZBvkMF4iz317v2uhtHiZfXXJuz",
  "key5": "5bMZor8jSkn8mK1subE5B1nZJzFKYXku59ZMjiL2HomtjyeayKKtHUoZCmp662kfEdDyKsHVXkUAtKz8esf18qh5",
  "key6": "3FS4viTA6f2WDRPWhKkmhww4NXVwyhiwwzFw8VpSCdYwEcp6mLw7fEh7BidnKMAKeWvBSSZigRH3M8TurgB2CwaW",
  "key7": "5hazTs6mNNqLJeeDxzp2SYt9KCcn1wQx4Sh9pCVfKPEFFmntPrqGc26nrwvUKEdRsy3mn4m3AHddcD75dVaxuSao",
  "key8": "4XFYA4vA6tyDNwdDhtK1ziiAqGsgn82MV7fSw9qTAMtvv8v32yCpzaLnKDYTB2zuaL8tUV3ch3tdvJQTTqf9M7B2",
  "key9": "26rPPPMM2m9sA4D2ZnJEBiioVcNtqi8989FTkFVAvsyY373JhbyNmL637yMB9DVsHssSzEML9c4Y3mr9SBMXJucv",
  "key10": "2ATXrzycdhZLeSp5hrMhyweEKmEkyTxxta9dtGQa87CWNzEV1iNGxqCjou1W5roBFEStm4DskoSvbdKH5funtvHw",
  "key11": "x7R9H2CiShGJApkoj9KwAB2ki4MqhHuCDE4Uj28P1GXfqaePRo6SboQXdhhkj312cbE4sqrUsrv39VGY9BheHc3",
  "key12": "315ZWQPzagVUePmdEwte3kuxbaUjPN2dNLvH4LvJg6PkgSGYe6pnoNHbpUcMfgfLhu5tN5yQzBs4wQ2sSMX1aRo4",
  "key13": "62rtinBBdqCDBFThQkF1QmNBsjEE6n1FpFrkksWgfZ89qN6vDVop6TPAuSqey3jwJqdDAck171DEGGrua5rQ7i4Z",
  "key14": "5P7KQXS82TSdLwTyrVzLXek2Q4BniZsf3E9J9UURv9KQy1e9hFvQHaXouU5EZDELQUyutjRUY3EjHe44bvJ2Dx6B",
  "key15": "2ZRnDM221MBXWdb7NXbKuUTzmk51n661GuJjCj5Mt7LAmmprDnD5WuSXScmoHW1mvD4wVUvbAg1f9kpzXzmteqWy",
  "key16": "Sfaudaf5WeVDhCamLVFrq4ywz4WNTr9BdQ4Dzm144ocwnqY2nwmMGgmBFsnmHXfUG3uKeMWStkdQXcB3MnGu9vs",
  "key17": "5w8ULAToKL7LcbbLKEquQEQ6hGNWDc2jdvjRMeyGvziq6MsUyf4RVGnz4jMXX8TnjS61PegcTv2ePjHyx7FxVn5k",
  "key18": "5myPwHne6QogD2Xz2AxJxXWCSMhkycuzpUsB7SVqXZnvoFESVf8mDcfvCjYU2SR7zMGvbJjh19xgHWt1jmpG1kh2",
  "key19": "4rvszmB2ZnnD46Q3qzGqMyDb73uLKNwdzNKNSHcED1gYejSiE8c9FqWZuy2om3jQmMMr2jijfZ9MN2YzyBiNzzzb",
  "key20": "o3zB7mPeGRMttz4JNW9fW2VTLSikmJpzjkZdyWyxRaXs4XYf1x4wWZmgYkJZNrMmtX4kSpw23KfChWsxLntAWtF",
  "key21": "3ypWphBmnhPmJFQN2tCFf1ELncLztKgtyzegbsa3iWqUtibNPWVWbeaxdus4cU8zJtvrmoxdqmpqSWnXuJEFFdvq",
  "key22": "2sgXnpCjNK7mvVJMU753QFb1vworyFmsVn2wji8TT7HJLM2adfurQoXphMHm3fTF22mSau2cDZa68gdbbaCgKaHL",
  "key23": "4xTzXzvxzbZUJ4yCQuAoe6tzTJ2JfnTNYxrjMvub2i7XWKgRaHp6RC63M4F1WpQ718FRCiho4rGn9idUEa2cNH8T",
  "key24": "5ZieA1rKYC4pHHPCTqppHyGApE6x4CArqTr2VT7Cx5SWKE2wcVMPpAKb5EC5KJA5JFU1Eqxrw7oxyE6ejSNiTQ6C",
  "key25": "5FuXG5yjJM6edfkCQj5yXn4iEYJJCbxgGZ4BxBnCKp1DPZn46bgMJnxwVeRKJVAWwE69NNqEHxjZmF3jHXNzYUac",
  "key26": "54tX3CJCKXbfMfwUeX9uQCYPdwzF4ktDGFjDpcdKMg5WQseHmw2z8rBFcE9Zaxd1cicC82oRu64ncJqkSEUci8hw",
  "key27": "3BXtpBcX5wPGDyGGGKg2aJtXgXrQmCkULrXwVZ1MoQiBf5TEsdvPzGHwzUKM728Db7kMueHnrydhpsG9rkm7o8H8",
  "key28": "sfjScUoLkPZApQDccKBAkg1mZ8dazaTDvtw68TG6tamB7tPwZt95SF7RCkzyu4oFfLaYf1bfPt24YBpU7ugj8Eq",
  "key29": "pjbpHHEp3d1ZR513vpNuoBz5Nh5b77uDDZTXh3pwpYUCaEL2ZAU2xzpWfuNmu8jtEmdfTePpTcno6UR9bZfsTgW",
  "key30": "2yZcidAycvFLAnZPoayvMHC9Vayf6RWiLsm88wNNbi5z1R5urbscTUUYtLRFhkQYKVPjwbqNTyusQV5qnagE78L6",
  "key31": "36AqhoWY7KKD2Y67GZrN8AH94m2xz3rVgPXCx1NbAp6H1fg6Yxxvnoa7QJNLuYnfZ3dvYmNVJ6dVFoW66QiF4fE9",
  "key32": "2RQ2BAhHMMEtj6EgLjAur2nfbXMjhoEPmX3sytMt7oKARyyEQiY82pa4pDVNajiP5G2KBKwApjWQmUXNiHVzZ3ui",
  "key33": "qDS6koRvxS5aKkEvS8qjg29TUx2vqtuqjBJaN2PTErBdCMJzLQNKzmV2bXAqyCzy7Uw17erXdvkWn2KjjrqksKs",
  "key34": "3hAWb1nxHXS6ogV5Wk1DTqkhD4mzaph7gqS7GnvnfSP7S6mLoiJNDqP5paHuxUpKSvY5T2F9RiYx82o9xD8X7RZD",
  "key35": "2xmVzEH4AKVC3NsinMZeCRDB2cWpxNpMd8yqfmuv2P3KEJFGrqYHanfSJBdjXmiFAz7jLVm9awvLMKmCUD2BV4xH",
  "key36": "4nW9f9QN22cE5h6C9hhvxP9Dgox4rWGG3DyGDgmzWqittX1duZXQWzJQsL3ncQvLExNBfEgk4CfdAvYNPxB38yCW"
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
