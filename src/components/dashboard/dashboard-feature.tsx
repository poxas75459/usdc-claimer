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
    "oAM8o3PsB5C3MUifwNiniyQfS8LK1dSpMBYVvnXBoJ6uBn2kGxnUWB9v1mrAMivwFbB6LB7PAUuVgytdqyxqmRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8nbANkMsZcLF565jbaizggFB6gQiwxaen4uN5jWPVWDENcTaVNnQ9Q4uZ2rfAAYwNB9d9ojj7cnMxGNn3eTqUFg",
  "key1": "3zyanV412gqP4dMatx2VnwHtQhZnCnk7fAaMYHVMiTVsFnGuyR4qeFr8EhVzc7DsWPrJaXEA9MWFg7wmfbj6fLDF",
  "key2": "5yfMYE7e3PPZ39dw8ci4faDBwhuKxDbTq3cw2NkAoRuAg3ZPELQsseiRKKkHBWEpoXpfhAuoui5ADPmeMJJb9uQ9",
  "key3": "24AW2ttexXSQx2eEEif4jjUScdqtGfcYLQdui29jJwHRm8abvufZ1mHPUbpZmkHbSHkw1emTtfWXMpCCFDeLdmq7",
  "key4": "5PHRa5YwxEnzPFTF8p7TN4tK8FeoJGforD9oKF91YByy6YtjMLHcQFNbWWbqvyaJHtQALwc6p72xAcYSMVYATbgn",
  "key5": "tXPFrTpkAUZ53ijRBm3uPUm5vY2996Yamuapu9tzYnwDNuUuNbkVLDSenKiGHZeTcHr3WpGogCpN3Uwf4UADyKv",
  "key6": "2mNfNqUGNdz593NUA1dHKSo3TPjPgAgHcNkPh93m6DVQxsxkcafAiBDubZTAHDTn14qpmhYoNmCPVS3iTyNyZrkw",
  "key7": "3VEoJMLGFS6hR7sY6H2kE8V7ZA373ZX2nYrFYnYvmYcfs8VY8ZBDjnndUTaSMh9X5fmABkGFpMUkAAHFkWtz3fXp",
  "key8": "5zU1yKFVG8d9axCtYHX1nTMgfqRkbVDSfAoQRJHiFSBV56JmTsUp38v2rnF9M8dDJVw6AvJMqUbu9AFp7Gd8pkAi",
  "key9": "4gNgVUackb6rz8oZgfm5eydjCidrn2WaqVsX22qpiyoyqFimpE32Npo2PjTYQhkcH6BgtPLtmGNywf8t5T8e2FZY",
  "key10": "61UCAzr3GHoznPeiwasnoEdxQRrA63Jxy6Ws92ecsoChuk9NrqpM9h7WSMBDf9EFTfV7WMwqU6RwC7fvxEvk95Cx",
  "key11": "52UsX3cqMUkJqr9HmZefNteg6vQcEukmDkmYPopaKfjBzJ6rFpD7nvbZt2ktduNPDgNHmLaPrTMdxBEPG7WeZ1xH",
  "key12": "5LvqNT4tqinaXTLUqpPo333w9xePrLcDpwH7TDW3G71TZEM7mcxjBVpFL9HorNcnPSia1s5sdZkLzeWT94sErs9z",
  "key13": "5RkxpCx5k2UuxFvPSBRX7tZ9Z76Yz9cgHLuMmW4WftjLWQVdSLKMd4JW334NNNC3mxCogjqzR2LA8WSokov5qDSN",
  "key14": "5at9uEmQSmvtt9uyXEJN4ccpQXKTsYxcJoh8cdMMG3CyjJReZ3Zub72GfqAKh6nqofNgVaSsExUxMTN7UkXUSt5f",
  "key15": "4ojMAyeH6jC82zGKBDQsDLNyReYBHPeWmDWSPCaZrqHkNU6ikxeZjEUq5BREaocW4P9QGNLmMoJsNry6EHQjB5Vi",
  "key16": "2rcadaxTJuChVoQzQzXECDCH57pGoomCMAVemVasrNk4GfFcQREpY6Zbj3vF4hTLu5Qv8zA8EdXXSkux3UWxqRoB",
  "key17": "3196XBoJNUVBrNyJ7KNZm3WBzewRncNpEsXRyrRswaPUpt1rd3rdGyFr5TJSTDzZsw9oVxf1rVquVPHT4FE4gBXC",
  "key18": "4phKXuiZu4KxQXKqjFT5E8DGuR1YEAqKRzfvxPyzCaUHpU6pqvcL7456HTCugSgSahMwLf9hbSapHTBAVXQyypMz",
  "key19": "3LjBJqJyBNKzAudtQMb3MaY4P2T5rzc6rps9uawgfB5SFSbT7LVH1yKfJZZTRPCn5JEcm5X8Y4WNziskUust1o31",
  "key20": "3dRSHtRPeznq2h7ZxNQ9BR3oE3m4Vdoj11F2Ywdo5yHkEJ4Fr79PSpQ2pWWfsYdKEjvzofm3TjgXWoGJHAi9VtMM",
  "key21": "2NAAKtnjqP4sGry4aXghNK9xS2tVAyMH3Xpsp4YACGE4iaaZWqxRg8dijmod3Px5PuVviTFMJwqivvXNPoXjrsXs",
  "key22": "eTvz41m25bRqVDQj3GzeyubsnSJgvjeY4QBCi4Kf7q1TzoZiKJTpdZShBsHixVJztgyNdjXpDH3LLxofk5DopKX",
  "key23": "3QeqtsvsqFKyrktTes64p6XPPhFHjeJaN94XPPKS8mpK1DyjHcZbLCzP3qgLCcsohQmpnTUYddi4TKSKkDHK1TbE",
  "key24": "34fmGo3SL6fpp8zR2bpScgB7Pk6baWrAvZmyRbj9LEtHHisCcoSeJtR3KsyEyMDGhen27MkcRkpkQXfBNMcYLMkD",
  "key25": "2CY16TKtbRnqH91JBYuAr3CgJr5wsRJJb1hUQEg9ip4WaGFwfQqu2Ds4yezKCE736FcML9myJ9YMhEVkmUSQetpS",
  "key26": "3SZf2L7LqTfdpYhUsvpdeTyocMV5434KmHcSPf2dvsjUBbAt5FCRjcUgRnKQQwKVDFQiPByhzeSpABiw5kXbz3qG",
  "key27": "4N7NjerDGEccQwpBiN8smkyMyJ32bA8SXDFsMaeXrpPqRBqNDC3zCzudtQG1TAC8eJwdt68CtMXQazXeRFpVF5yb",
  "key28": "QghKd8gTDDnZkkgvAymgsaRSkc24ZdzkDRczxFpK9JCVyBLFnzhtDSdPxtZhC79QgKZpAERdEBLxFvFGZ391CQg",
  "key29": "2qA44C2cktYYqYGYKhABZ2Qhsej4jCNK77xbVLSZEC3GJT9HQWVNwSskJovMa8HysL2A7Y5uHedHEvoEbbXF2ZKH"
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
