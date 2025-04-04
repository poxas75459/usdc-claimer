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
    "2S11ZvT9cKUVVfiJo6xvzLL5YeJagZKqQDKPwFKxi8ciwgBbRVtwDvueQ2qQ4fjyMHywiRHg8s73jaDV2u4EnyzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G8hYYmP8wt5fmVEnbCPzY1M5w9hH3WB2E3c8p6hr4TyTjxVT7Cm416C35VscJHJj4tKf4ogejJ1AyVBmfkhbVyg",
  "key1": "26P9FeWzV9dN4KhtGZ3Lk9PBosxZJNwUy9u2CGPm3zCjQXwuQo8fWbrhpfWv5HvANSzJCFRYjKLcDgrToj4JjtMg",
  "key2": "5sTUYXdENiGPE8RufMBfKtZyc23jTFSnmKtQRvwSvYCcFSZauwim3xgdwEWTt3KsX7Nj6Tyu8Y92gtNfMoCBxBUz",
  "key3": "5rTi1PJnKUBCqfPk6G5fP7toxyu5t7o8XBt52t9jk5wB1zFThDdSD5z3uZsAz5aFCK6mUTWsgK8Lva4qQUGpdVe5",
  "key4": "21dksxoVqskF2rVLCQ6YMdbXL23hFbb6USwUknKXmdWqb2L6VDksB6BjEYWNXUULhUyANaatU6GnTQQVhYEbnBgB",
  "key5": "2t8FrrjhQYzY8GWRbMV4nhpKmjUTrzA8nLgv7vN3tan6tCMqx2vxRBETSHhnF9co71Wm624vUbQnEQP2oizQBxXX",
  "key6": "JbiuPnMyA2WLVwRw9Yxk9h73EfcdFHADsZMvbakZCaHSxUvXgNgAT53oQQ6Jmxqx59j2Yn39RyEGEzAPdgx5D2N",
  "key7": "5x2LSjXveWRuua3WqQBjkuAAGaHHUcd37KiuAtZCT7RYw4StPABuGKhZyBRKfo9FmYvXBHoxxyPLJM99q729B8Js",
  "key8": "2Zm1RkkeDfHhsfKMeiJVf266XWHnz28mv8FeBxEBXwTZtri8XZK1e3nBPVq3EN5oXsSzMbN1T2ugRVjW2JtRNp5Q",
  "key9": "61QB4DCoJ4qfr75K13EWnbNVLa6kgtXVqUWwPk7J2GD2raXRdg6hqEP7zjGdpsESxLo2htjAT4Egvz3sk7WTq9ub",
  "key10": "2oLG8Lou4yULaKSDKjuGHR24imeSXmXpRudya5gpyQYayFoWS56baUCM8ZgeC9oemctgMFeRcXrMksw3bkvTwPLN",
  "key11": "64zDkkcqYZpduYicsHUL65aTZq6XrHwjJ35ME7NigGdyV6bYp5Bse4qYscg6XL2P4eghuELWiehG3fLw6h61ncUK",
  "key12": "2ugz36FY2YmLYQv2N2iUHYbSEDMZLKZvyHPzgz5qUo1J4kFhaZgGJ84tqTseE8ZWMyqfgd9Em8ZcSMEUmWTMTV9u",
  "key13": "3qKxjssHFJJWDfJvVgbyFS8FhpqihRRqUpppCFrZXJHvvXsfKr4odiC8pAU3pJQx8HaTdzbPmjJbKxtkZaHbTxQ5",
  "key14": "2oUuaCy74Go2zCwVW4WSF4qkpUo4awpZ9d8VzvvDLgaHEdKLGQXJnfxUK7uorCc4ZrWZ1DbcjYuu3h1y5FTqfB8r",
  "key15": "4EGjb1DXTN8oXD1Jc9Sj3SsW6SGAdVj7jGQLbKgGUhhDA9bdyW9F6VrZoZyDjyk8CHVC2MNTBeyaChcxpmxowZVR",
  "key16": "3KComxryVsbdRY86nFKRRnbTZpof9nh8v6vQcjRzniSY68RAGewE3yMrCdMyJbxMGH1w6u7U7W2bxaQ1JNX1Rk2V",
  "key17": "3PzdW7NNrR61jX8giqeKsdHmJDyDiwiZc6zYFAgjm4wBH3rBBhU4qH8gUPjnZ9p7MpVnXim3jbRhvb417bwGafrC",
  "key18": "46euQ3EwdxQLVcML3MMsygUpUu1NWEtovy7rnVb1MsykxZTvM6NaaJAaTW7fQSDNRK2wLNbR4iTXkJ7dpgtqW3hS",
  "key19": "3FjC5BoYQcecW82JEoB8UAvgGxxYc62SnGiMVXaXJ2ovF2xNuvDNMkhvi6axntZFyCGhLzePRcP2vPYWeCATwU1P",
  "key20": "3fPEp4s1dR4ocXWrQbV1qayDuvDyTAFdSLC6u8YoSwRAsJhfgvdBV6BewrFQH5vuvu4C72Ri5tksByJNhoKoWM3F",
  "key21": "3d5b1srQHGNnp57DrsSRJU7zSmz8SKxuksofSyEk96kPdvhbQxX1c1XJGd4Jgfe4111v6xtnGZhKxdr8B9zYPQaj",
  "key22": "37zv7rugYXNW7ERyyMS7UN6Q6nzETPkPdg6R1y9uTAGByhPD4cCBhSAfJvMBjt9Nh28Af6i7TNQZ96tP3eCavWBk",
  "key23": "2CQXQjUCRJBhdqc6GivEPz3VVX3NaLA8nLrUmRLsA4rpVF9Mgi9EqPoaahfn3w6gwiMyz5x2Y23eN7EQo2rDwb1w",
  "key24": "H9oX5tkrkiy71ztnN3AsHs2JfULAPzwU1tyBdr3eZPrYyG4kxuJ6oVY1jBQ914ReCr9WsZAFTngKyZ1DQgW4qEo",
  "key25": "4wLbgosuWv2Tr9NJJSnZE5cvea1a6r3mu6VAxGG6K7fPVBkArztCQ4pKx2VZMyDQQ7jgvogU465ZEsxiY8RCjNr5",
  "key26": "5wRQfjFJNHdq7QnM1UjcEcptZ5ZfiTBphh6ibUkohUwbTv59223TSJwGsviujXXvmJ7SLjk4VQBsXKMCsRhqb565",
  "key27": "25nJ2vxpcNXD93mdDPjKB2TzRczLUfpoJgyZTBg76a2ZBAAKEaNYMPpfY7r3rtpirP9naXRsi5dSbhnerrU33tGK",
  "key28": "s5PPgdhFN8hZNJ4F1AppF5XnZYvk69ihUKffEaiNmbjX6qfaJRTgCoDkgd91wswhvqNNF2XoH2YMTfpGUF163AA",
  "key29": "5btRCKFmysXyD27Lz9nptPr1eF2vCsiToBPDtYFNxWB1wTb41CpAJTLqQrMGy8Y5j5r74dT9MxtfUa6fQVhZmhjD",
  "key30": "rGYojyWsCjequdq7SLomzekDWtrarkZbwrdKPCa9MMuCtbneNDPBs5cAGtCBybiSZHXT1r4z2VuLd1PpshZFbad"
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
