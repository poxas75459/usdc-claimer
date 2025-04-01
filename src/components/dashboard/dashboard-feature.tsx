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
    "3XHQTRM5yuNTzmWeu9dhxTFv9rMyZUWs91kPFXobge2BzGrQfKa4mmveeat5P6KhkuPzvm6TbcEmTyyj722vCQn5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rTTRoXFT4onsGjSGY5CamAgJyeKTjtKnhReLcCJmDYeqvB96qnLVLDvBJqT3Wb8s8VUWLHAHLS36mqA46JWVxWP",
  "key1": "4pzpoi9Z8t1xbmykJe6RkkSRqB29f1b93VErehmCcWGsrzJncbRMqmH6eT1phckUiNTnnJmAwtqgz4VrVyGGXpxU",
  "key2": "33apGHz4YZ945eeR1PfNWrwScCMqhpAUVHaApuXWDnpg7Zf856E1aRCWSUXVy9dBT6eUh5uXrDnCVL9iDGzGmGxZ",
  "key3": "25QiqG5wGGY7AGfJRBXHHwHkzz2Z4Yr9yxHr981ovdsdb8LB7rHshestZ65kpFNTXXb5z4tueHWX5yGao2suuoYC",
  "key4": "pyJLfZQfma2kYRsYaBSDxqP7NV1gi6vtrEVBJ6nt4Dc3KWu9rkhk6tPBfQvh3hJ2KFE36Q1Bi9AhjR1EyyUhwmR",
  "key5": "4JqD61jwtktMH78HpGp5QCCv8m3vL2MnTAK7KycG2Rhn6pjLKiRHP1BcVaWxVmHoyy9QbG7qwWwfpS6CqJhq4Voz",
  "key6": "CkNVzXVF3AnK4cETL46pvxDGK86X3i79mWwzi4uUkZaAq2AwhQ6ixNaFcSUBz4jAh3Razt6RhuyAnkTYSBtEgc9",
  "key7": "3iDJbiY72X4gZFzVRtUY1XXUmf1NS9wouSk32cKW2xh68tX6LiW7zEX6ZTxoPgtcGvgxjeoxM3SftwtqjNMzrvk8",
  "key8": "3svQso3adW76jLAQd3zBQ6ZEuBqXx2vSYw24j78bVspLKm7nq7hGeLhMziEBeBMJHCzvqJ8gzVVp3hDDZnVfBBq9",
  "key9": "2DUyDxpgHCoSi5mmGjVhmevJzmCss6WQTTegLAFVCnWtRy5rWhkDGbn8dBweP8wfq5XxFb1WRjyP4ys2CEadsrZN",
  "key10": "5tGtGGVZxDkpNTPGA3CjnR9snboDdLvWCcKj5igC43H1k5uHBjEitv7NPfBfXBojAKwBWbuY74RgnY18GCyNWrQR",
  "key11": "39KUZpbi9zmahgFNVjyb8fd9PoRQ3WNm9cyEviZnrm7QjLrzhA9aSoDXUXJhYYFPYTq2AXYLV84iCvMhn76HfCb5",
  "key12": "3yDyRoRvcfQUQjxHQMrp5SxXsarbx2DwGtsQx6rzZ3sgVWXerrDn5ri9CLUWrkeswvMkCsMz947uGRxDEX5BHE6V",
  "key13": "Vs5P86vfe4VSjRM9XKZ71jJQ6tkQjp3bt8c1yahQwHQLGvXPFx82qy5qmkvvhabxgSDAVVZBxRseFmhJHQd9otA",
  "key14": "q593Y1jjfyAJcB6Yqo4QnEcKdvgLZVUNmc4cvh5kNNiGVJ2G2WaVMsNNXkVmaPkbWGqe4Tj5UA58hf4guJeKDsp",
  "key15": "4LZDXcyfUGEDHreNK4yiXBmtVQUK9PJbEQzDroHMEsG65tQiutPQ44WqT8SnorpmaFrYWCAqSSjRbAfrsNVtiMjy",
  "key16": "hUf7g2x6X47VYeTHDRk9HwyHuq2K1mBUDSvfqD6hTmouv58YLrVFs2hc5BYcCmyHX1K4R2xoQWYWAy57GwN7vwW",
  "key17": "NjyHVP4xvMpEfY4wi9F8NT8TQkZr6BXEYjZi69kucYtHnMTkxgB6PTK7vo4fFAm5tEoej4m7RtqCaGhiryVqr9q",
  "key18": "2qeU9bWftj59xhA93EWMwCdPotG8Qik6MaCQbrA3Hd2NLWLdXvTf3qgKvzPm1jFtXy13ZfUJahrB8Yk8HENzYMbG",
  "key19": "b1yrNp2NzxM69ex3HtDMcSB9zX6yErPrN7dgH3FwKqRkBFp5BbkNmMAap7KoZvWbg4NwSCDNgE8MZVkqweyaN2j",
  "key20": "4uZjFyLmzXS6woxSCJewUr5VfKeir3qrwY5jSAJKLhdTXqVvg25qWZw1ssgJfkmWuMkAVEyoknd9HqbWTB6hLNDL",
  "key21": "kbF56p8U8hsjsN9nLqyzqBbM4o15EwyozoohajmucmovPpQSUjM9y15VN2cJdim93k7JyLwbwEV23qamuwUVqVQ",
  "key22": "2sxsVgbme8SubmBi8zHjvG8a9qXyLAnvjAbdbT5rtdiZsR5DceNNk79TqVkTTmE2DGuZgNiGzgxUfJE5BtE1ibAD",
  "key23": "q5ozh1jQLg61TUFsadQarFRjct7xtJGFWozvPDA5RYTahauNvor6G2CpU1Tsg9FSsDF3H9AXEDCCz2VVm4LURnk",
  "key24": "5svbWH6iFnXY22Y48fj26xMkjBYryBSC2ahoazGXMPgkywmV2XK7y7xaynC5nRjqcw9koPeLzSqDRQHJrRSL1r29"
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
