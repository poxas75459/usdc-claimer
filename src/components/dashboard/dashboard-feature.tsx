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
    "4mkABtBQo7WdJVnTJpJ6AtuJefe9SfkPY3wWPEZTkKePYjfXh9KJH9QAQ8jj4W8stKVpyQscmMVj2WiV3Fn97tY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "356cckouRfiRvnBCaThVJ7eh7q2ynKq3gNM31XccTs1rBmMpkVKAbSCGvk54g2Vu2hVzoBqi2ZkQF9o7mBMeg7iF",
  "key1": "61Nb3E3ioXhDQBqTt9ttu1RuefLkCv3TPyhj6ypdoA4KqUBhH9bhB4xAQao4HkUVsjYmzjzuc5ZnC1ZdACPwNxo6",
  "key2": "4MhZmuVVZCdxLvhb6CnEwkqNUBwSp69Qv9mHEMFtxFZswsHRByjyjJiS2Yt16vc2otR4nEFGZ1yBRLyWfRyBGZs8",
  "key3": "2wLpEkgxNds1LGyNSi3nAYkFTZnW9HPK1RUpdnWGkH4ng6L8XKi487HEjBPmSYpAensCKmA69NoBdohQiTd4kLcn",
  "key4": "4WrP2EwkC4k7yFsWsDhdd7ozP8Gy7SgJ6iUJFEVfrhwya1EhpW6QmZaPp2hBn6rdvTqUau6C4xLjr44h8FaEz2Qb",
  "key5": "4VoMuUPqEheR1ZoZkNEVNP6JTD7jG9mATaaWEnLNXraw1C3FgftCNVtGKRzVBPgt5tbujHNfKw27DX55k8tHoRSK",
  "key6": "4qQ5UUdihkWLTfvyBoMpxBX4QPdEiLJRqToxiNJ8bFk8RprjZbU2bjXWvBrQJ8vSzxhgzKoPP62o4SwBWchjsJqm",
  "key7": "5qAuXfY9eyRbePCrf7uZH5fLt9RFrGC3MH7ogTnAgqKy8tC5mkjfZjGMRofsPQTameQBpEerhMBnPPFbvHzDhYtp",
  "key8": "5Lw7SDRPBCMTqTbuHxKrtNFE3mLYAirLjBrbAM873h8bFedQqQ3NJo2dwKhL5BYRKSd4M5eQduAmBC4Z7Uw49Kpo",
  "key9": "23bg36vavmpZ6zeKqqcm9et3cZdM7zBnCrF2gEJMrzqFRtv3xApSjq6vPYSovX6zq7wrRNyA9efMjqDyrmqAoB1Z",
  "key10": "2DvH8M1NKZWG7kP5S1pQSWE9SUfFujVhobicfKgMHaWMiT1NkWQrzWFD6WfyGcpJ4iZ9tPtxUgmTSUwLp6fEJA2K",
  "key11": "41uUEB3rE5EbC65CrTUW7Tq9W5pVgPmsoQJP4wzhU4p1ksb4aMoQAFTmoGYcFWTcTAqoeNngcgMPDnXbUzivGhZ2",
  "key12": "eycCVhH9htA4d5o7U1T2mxaeT6vm3Smf2a5f86fJ71MCvqm1aTyn25ktE2WQWkxqxUP7zc8tx817Nwj9nPjfUL6",
  "key13": "4mhhU2Kw2aurXWjuYETzSbi1uGv6TjJvvShHVRLd6Tq8xyuPW2tksAxk3cQE1XLEePC1RwWGBLR3A1bwYzEeCCLV",
  "key14": "tDjcoodF7WKLW1dQCmcbrRU2xSZcjmJAEisk5cZW2wgAaQtGH2KZjjqJufwrbJj7NnMp9QtCjZHofe3BDmWXXuU",
  "key15": "3483W2qL6zaq3ixfmJkt3Wcjam9vQD5EL4v97VYC8CXZyjLJBhsgc52jptE7mBjbjwU7DQx6iU8sEmYZVUq89Esg",
  "key16": "4C6L2tYydvMbiyjNu3gJcNPGaLqxsapwUNfnpPz4bb9471o9vqRjkJAWyQoRxGowxdkZsym8akWtpwv1CyCo1U1k",
  "key17": "5HTXrSGwMmdF95Gt1V8dL2GRCooV7x2rYFAsTRPvLFE5daUpZjHjwhoiZD4H49xNk3uEn6vEJhoesk7dFeviQdSw",
  "key18": "62j6rGJLbUZCFcibJWctSTpxwea9htcab23YScwBcT2keXKz6MzQVdFo8h5GGGSe2kqQUGkYepRNYWzLnM6FVLbz",
  "key19": "5ffYc6dbWyY2vd7oTTcd4E8WT8seeQCc8t5bundHM8xKTp7YEkXVKxwAzWTYtPsi3Q2LzayBDEu1Z7EMuwqGdmGy",
  "key20": "ZQ6LiaUR61qWKNUDDTmpLNjpZYGxMQcWsEJzwkyrGn8upms6KorKtfiLagDzqWYqhRs2BxXFV4NxDa99mCv5qNC",
  "key21": "3qJx9PDVEN2SkMr9cvp3rAap2HAQmUKyofpLXwif6obGMyzpPqXYKDwkFAz3AbkUtyF45NRwd3NS37QxNHgzku2H",
  "key22": "3C5yyYdnHTJai3ubK84c6uFqW2yidwTZo8SZ5iT5UZzquawWkgSz188n6ESDLkPZ4T1SRQMYcfqWswnmzTzCQd5",
  "key23": "kd839pyPrZfinraFEcHwq9FneiWdokUMD78xAjMSF8WN4yZWNQJA9GrbGPgKamjhMaykAgFXcmJEMfkT7dWGRjZ",
  "key24": "3U8rLGomPbxFv3G9Rk59GujcMuFbbJdHFfUYELVsQneJVjcoYAmHHuFGSpSH6DAJVuJAC6jA37sRVvLjDRVr5Epq",
  "key25": "BhWVnDiBGHi34gcjr8oRpmPZdAR5fPGvjcm1ovwnmjS83WStFE5gNnPaUciv5Pc3NfYqXe322z2U9nb88JzFCN3",
  "key26": "38skoTxowdzvV2fjkZLBfeGvSPD1qPBUSomRRx5nU48TetqjWBqxzWjUsrtNhpbsY5AQaTQZtLxmtLnbU72rN9UX"
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
