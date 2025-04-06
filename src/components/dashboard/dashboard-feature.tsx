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
    "47UdMUKkXGNCYMR55boaTtdhzjXXVAAYu745AXcrLTjufdShe4Xz5PWCHhQT8SgsS7w2Yb1JmhstnJvikSc5k1hU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TNDgPXorGNgCHju9PdEjGkMdaeRUwWaxw8dZgEAJ2Y3NdzWhWRkJKhMoifB39eJFqVBBWxRRtEbeqS7hBSHiG9o",
  "key1": "2Ke14Cor94JQgCY29iuANqreBQvAT6xNo3s3ekQQm4Tb2BhPLTvZ3pSHraMrCz8Nxg9QuZKmLQHEPFeKqu95kVrZ",
  "key2": "3T8NRiBrtKCQfSkJpxv9N968ngqg79qmgYiPAasqtj3Sa5qjNpsxTQVXzDZMqJNyeL8uQoN258sVAYGHiicrKgsD",
  "key3": "9som3kdU2cLdT52L97DM4XtiVN7Wnm3YqpxtUMUKSjw7cWaSJrTtrXpBvw5ieZsYPURp4vNmk5ZBJhdhvxzYTug",
  "key4": "8W8NVRiSLYGEd4oKWDxnKXipHqYmydCjSd3S2aTGTYmmrwNG5LS2JHBvxDJDc3RFGyVi1X9se4fbUGwd2uPSRTT",
  "key5": "5vaNpKwXBLciuynMW51fExtQ9dj1jFjYdMPdZvndeo89WqYfFmmPjMoGt5LfqQPt53p2KMSdggziAxUaV2oBSQ7p",
  "key6": "2LEziGPG23UFJpUCDL61TUnE5ZiLJEt7vyVBg1fToe5usiEg2rXtLi2oxjwxe1Lh3MumHr1R8nf8Ua6GhXUyjMJ3",
  "key7": "5n2gA5MXNy6cQY4aPAnFUQsYeDhR679Ee65V2iRu5YXy8XSn8MVJyQXRqQ5rHFjbhGLYtZD8MzQn7mzmT7tTNATL",
  "key8": "7qEgQtRg5f71u2gtS7v1bLHbQdvnjZ3ajyPPNHTKeExm3YX4F5Px2gwn2MfQ2ibWEkemL6nDb4RjGVXzw4hzfWt",
  "key9": "oyy7G1Rnfe1chxtRcFbhR6EKih3To57C1pmty53jEmRSTjGvL9AjfXTXEYpsKUeraxjyYgfJdEcNVtr8iytH7ew",
  "key10": "2GJ65u5qN2i6RZqq9T7H4BqBdbXKupxZgw7fdPjvSJWkQnYzVqb6RgwGRfffYEfpa1guMQYPxf3ocZ3J1okpxjtV",
  "key11": "4CZJCkG3G3QKhYKStjaWCTdaJBi7AFgXjWuJEB3jMxgU8gnEYxcYKGaDXMhz3hSwQdVtBioBhcjcDmguywrHGN9o",
  "key12": "5ZrVgiaKNKB11hVVyb7CnT68MKq27cMRG3h9SmCD7kpF9duF6ZwHzuD1LecRrddW6dAwPsysAvUfyZ4MNRZnusqo",
  "key13": "Pxp7Xxexoc2B2PVff9Ah9Qq8arNTnwkR5xpqtqW9N9PMp6D4Za62an2Mwhzzym1YGxQ61Fvy1PavdcuMxUxFrjm",
  "key14": "RQ4Db5diZ84HrjNCzKz1NL8AezGjcGKQn5z2vaitvpzLaDf4u8TVf3tVPHCHwursG9PGh6Xw8ddsBMHMVrqCbxv",
  "key15": "zJ6F3LAU1eURMjeipPxu2urbRMWGtevPoRnFJUP3tbLcNWLbi6A4iiM3FPfmtCra39DYaqjLutZ381u2HNzEw3J",
  "key16": "2CjBDqZ5bfyq2QmKXL3CvVTGcdPp3WbfZDR1CBB75VcsGtBcfZucXBjAH6VVUx3rmiAJWdyPMKq9EPvgoFzx5vgG",
  "key17": "61PoEsmcfhDcG8T7mEeHixyt487LXRdkSUHiB9HwyLATFtNhfuMpT88HthVfTNrg3Ukpkwm2Z3DihSaSU81y2EgY",
  "key18": "3ntRmpnEApHS7wvLpJ5U7ea81Nz3hJu4KL8btUL7Dd9mkYSkQ4dPSdt1w6uQFEjiSwgxDMnyJVioS9hN5HkUhYZD",
  "key19": "2pcmpBSacJbj8J5Ya3zsuCmjHcqeHRrZFtw7qvCo6eZjm8PNJAt1UvfQEwYKuiXddx26ySdHKukwnaUwLLQB6dgA",
  "key20": "K7iMyKoVKjpwgcNQiZsBwE2h86wrfGa9QPNqYPYy6uFBnrYMjoUE7yjrkuwwekC11crHi48zEtr76gkmTvejDMb",
  "key21": "25UtjPXcAi66kGa75MJFM7Ctm6YGVKJ3dMrethh477C7zH9gt12UsF4JeCeCuazHn8H9QUX1ucH6e89uyDzTvYrT",
  "key22": "5cE3SzqfdagoXtNsMbKTRepVEF3omiMHmSGAQi1je88iFFwQz7H68f4kQq3A9jG22XYHceQkUUTm9akaDa4qtHds",
  "key23": "LCUWsbypLjjMHqgUFsWJ7HexfJLShMuyfyeyv22o5GQ71j81fWE9ApCCRsdy9GcNFdXgKamqc3gZ2DBMxrXVwpn",
  "key24": "4of5KJU11F9kD9iEYwi9QKkd2M7rrTyUN14yoTYFN9UoSUP5Zjvmy2f1mBX5YYnLLTQDq7gf2MRHWcd23ZLFyccc",
  "key25": "C2Gn3W6LAnmVM8APydN6RShPV2Wdfzpj8CK71Y7Z4N8Gm2CCqT645s6zhw77U8yZJeYCbW7fHfkbGT5mGULyLPb",
  "key26": "59re9g73XYY9rGPe4xg5jDQhYzTsrpAs3Qh68nAv1PcGrUYR5oYq6QQ56RK6gNE6rtbSamabNxzeEbVbgVbx9MD8",
  "key27": "2MfjG9pZESZWPzA36uhjYHsZBeuY1jeLemWAiTisq2CCCiVDSTePBMgBds9j1fQEyeZG3QkX6366vdtAmkrLw8gC",
  "key28": "49BGkhXJAXcSky1iKhNy5SkHpuVswiuawTton4DCU1kmCJvbaLHANa6P3Y1B39eZzc4t7uwSeXgKfzG489AeWSqe",
  "key29": "QkZA35qCn4wANxChzEh7AKH3p4dSo23MopiNU1oq4dBXxedw63UJrxXGtFv9Fnk4m9rtnJGaTFKYHHcXCdXv5Hg",
  "key30": "qUfZCzunNLN8Px6c8tAv8J4urFWdKvAm14HxQtJ9Ft4pTpxitYz8XEUDWAhfmkzoU3xCimsNWNcYVCURfrtE7gy"
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
