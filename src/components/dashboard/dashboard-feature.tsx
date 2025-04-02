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
    "2qXbBVsFSEL32TgJn1yiyiBctJSKA7tCL9zXkuj95oTi4kdMchyC1fuSGNBY9E4spdgsz8kYgUMHMx2VuBc1hKcz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "THygmMaXQ1zrPqe5qKe29zz5fseCW5SiEuqngSCycveNqNveTCTiWpczebMWAE7F2bfEoudr7JUuAD8NvHxMxg8",
  "key1": "3reULKsPSotBKFNBFe7PcMn9qi2rSnJndZKqgJ7bpwYvrgvPAd5mGCgCvr5zBjo82qijBQe2ctEkvfiPvzL3Y87P",
  "key2": "52YPLaP9AGYU32CTxnYBpvEDrnd8YbTP28Kvpznbzfezz6tk9hyFeQek8gXgU8yXstBW3qVTUrQG24sKB81kkQ95",
  "key3": "34ncSu3Bs9KQhAJ1BysBskCU65DWDcHMLMgYLHR9DY28K3nSqW3QQpLbZtQV1FssW1JKd4fhu34jM6g6Cms4TRKr",
  "key4": "612mm3tnjRA9UuzzLiKVzLWmAv2eny76Uv8KkpCCAmhmb2uPEHkkQXjD86ZetGsynZvMJ3dyMiitJUmT8AEiwasj",
  "key5": "MnQL5Twc4q7fGbEBemnnuDrkqWnj7kRz3yw6PE3H8fWcbuF1Dm1MoMA7mQgCdwCeDe4u9FyWKRp1qu3byynDUkW",
  "key6": "3TEJKz41eQjjb5m8L9cn6ExHX549G436kpp4cgSnVbXNTCbAcbxBnVhJeKEPVXZ3Q6Sw1fQ4MfjLmQhBMF7wBegW",
  "key7": "3rSV3V8CJ4ELTLNAvj5wKBXmzwzXojRigRzaft6heC7H7Ehv9GGzg71dvEi2wpCKyB6DFPqm46ZkyhBWZD4XjYWh",
  "key8": "2TVgH2ndA2jo8Eg65RRNSoMC59GodJGHKTvi9kv8b83XRntYBpmPQ5RhamfvevJ8SMcPTjgxfkFSLsQhYpjm6eCT",
  "key9": "3Eiy72MjFcJSsJgXR1GpTLASoSZmuXpi7nFwYDm2V7Gu6zrbrPd1eStZCrBu6eVrkVviEUg4bUxjakc8KweJovj5",
  "key10": "4E8DCs7nKReSXEEdZNwE4S9tAt8qT1xRvrXaBCiDgXGCs1Fff8YQPqEgKPZEpoEbmHUzJfXbUYpBofkkw5q3r7Kh",
  "key11": "5CsCXJEJcgJ7fDnZHfpQF1ogyoCXQETnwJns58tsfdxyRAM3rcPM4AEbxN4VoWcQnTWLfDE5LQ2GJNNwLNSATRox",
  "key12": "3acXdf46MASuYLeX6M3FkoUwHwivLoyMn7578LGKTnwN3aX9Hubxmb8vVAxhERFXrQ8Fg72DZGDv4Pd8mjFMoEj",
  "key13": "5HKhkPo7Vz1vRrWJ3FEh8azU1GE1BT5hdGHMMFCKmYDzSknFamnsgQG1EMBHCe6iigXUuYLZYGxeNvvgMUuUVJDD",
  "key14": "5RL3947U3uesUGxbapfqsuq6nTPjsvNpLv26TS45MtpXcDqnm36K3HxUvX1dwZGCJnXAM9Vc6sQaodgaAzueww5g",
  "key15": "34Vfu82vAY1LbVPmYX5LKa1zLyZpRa8upRxijdCxR3yQAHTwSZNg97mQtRjcu14pq7YfL3EKry46TXcaEZyTb2Ta",
  "key16": "39fMsiST6v4rB95MpEEwAZNAtorS34PaydFh8hYKrzCjqwBk3kc3teonrn2pA3Rforryb1sreTf45cF8Qx6f8rwB",
  "key17": "4udavd2LkVRynou26rD4W131tuedgZd5sb9Y6SbSRguDGMFAQ6j3kF5BPsuUS2Hya5uxeRifxmHkGgNjLR3GNAiv",
  "key18": "5h9GUBp7h3ZYgkHhGe6JCDrCZSz438fDmHBxep3yMTXANZioi7cCoQf1Ahwtw58XikR1p68BiCcwZkUSBvvVLVZ1",
  "key19": "3axBXCDC1kaCD7gVrD6ztQ4Xx43CCzpTgwMKwNBpKwjnzt5qzvAgrnjyXZitxQJPfzFDMQzgYWUsDqdt6YGtgHr1",
  "key20": "4GRciKGu6oMMM5fdEVMnXjg3dY4Z1GzzUTkjGvg9woGT3DrsEAvhwDyvDnTck5qov9uwrsTJAj5Ld6tWaAp91Pnf",
  "key21": "4opj1TC6j7ZEuv8mAvGF1Qnmr8ac2SwVZzpTwgEXFWVWgf7p4CnMkztiJAkZ2UZA3mgWqA5kU8PmR4wPBjsyzzQQ",
  "key22": "4iS8sxdwx4XsXEFBiw2BQpcU2jCMMgwfzEmHT4hEN6DQgvRtTgxEebBVbqnVFFZz1YpNFXcripUvTwygNoN6mWuD",
  "key23": "4YCeyAnTqgu6giV3pMLZFUFp46eqYiBPJuvqxW2QbsSVQ5nHhuWHi1toTUDmz6XnBiX3g7C1gCo2Z3gvVkXaro8K",
  "key24": "2KnA4YxSZDhJj8iLuo3y949mDDxHvBpHmed6qP28SfG2xC3C8cPoi377tvD8uchqaNvkX7umTSZjjSRHtoFJFyaG",
  "key25": "3Fbf9bEgpeYBhbn4orVsCr8t6JXyBmqoGBXSJPVm3HiE77zFEPXcQUnT5b1H1bPDkcT6Qvg5bmZDunykLmB9BYZR",
  "key26": "4DTBia23bdsKuMpuEEF33UnDK5TpFcDuVxccJUHr2T5hWYD5DAzN2rpyxYPJmmQX419vGAV1HyUyrW9MDZDnyK8b",
  "key27": "2ZvhxhKsRzrD3YEkd8kwFPUsNxp9eeUFJ43EDisZs14btdKiZTCvsT2fRdZ4tu57xaWDdA2Z4xAR7cgiMxj53JPf",
  "key28": "4bCPnCtf8ePJqMJJGhRaKpqK6LCZwZrew1nL9AiCGKvfxQBbRaKri4XV12PBkDLwQigUho27uYgoUQMUVL4BYDUF",
  "key29": "Ec6swDvGCn8T7no9Bde9GDBNhv2Yeh3TYnpChZKrjLiUs2m857AC8pmPm4SrXzdSDMUHEEZ7BYYDCdsmBt6PvZL",
  "key30": "3hTLuPXjASMYcjTRbzp9E21QTtWmwbX6rPRuPNAE1kCkp8ehFCoSc7LzKU4jgsJNJpcHDUvanSmsZSMuCmVnFk7W",
  "key31": "66Q9d5uox9nutkvqH3V7XMPjX1qHzHgfMtgeL1vcD4H26mGPySacnwNMTnzyzun1gVarXAj4WP3gcQD9TT7PS22G",
  "key32": "5utEjNGeFKpLnowuXf1SxXgY7bXvQjyz99NEwNmdBE9bGPSpYW9KohhqpjZnw9B1y3Y3fHQQq1TUg2adXmDueupr",
  "key33": "5Y3GsGaimcfrFEj8Myks14tvRiqoRim18UgufAhqfrkmAxQZzj2U9v79JPzu2qJFPokdbejxi9MDQHKz1tmo7NBr",
  "key34": "5VHxNCwGh1vQt8YVJbmXAZNpJqkkv2hwDzWCm9ysfUx6AV7JWCks3Rp9das66qAPxShSZkqUt2Ev2XWJY33Y85Eh",
  "key35": "gycsvM2BgAU3tSBmswjxBbL6Zkuab2fth5smP3M9SMNPwtwB4bXWWSkeUtokrMzDizdrWgg3rZgz5dfNnD4NrZK",
  "key36": "2HYm6knN5CR3iSxqaQS3Xa7jsXNyAkUQiww3xnU2ZE8gv6zpG5wQjdaD2mcTSYEtTNtMT3i8vbWuLJKTaCojV3YK"
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
