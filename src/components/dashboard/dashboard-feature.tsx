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
    "5ihbVXYRyLSgUKybGbsZgWET5kLrNQPgX9z2AGJ8Kd87v24zNqAp7pnagMYmeS6JBvLdSoaahAez9vz8kZ7S2Hw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aVrPXz9aaBpv7bm4nMyyayRh5FgGFxF1NeCEMKuK29E9YYDGFgEJF3T1jhMXx6rqpZQ6XbtEiZS2F3N83DL5vBh",
  "key1": "5hAAh43PBHvcvxDJVQdvn9qCnW5BSoQX8JmXo32jKdwhCbXdpT72jBpBkypcvrZxe4rtrL2yYa2mU7RPEhG3TYCs",
  "key2": "5unUQFp1M2fRh5G2j3bH58NZYhdcY2SqTh63BT5Kc5m8Zs6Md8GpJmfDdqP95W9p4fViJXgQATfosCicvomDyUGG",
  "key3": "2Xq9VKvQsKiMk3kQP8gJvGLN6P9kdUmdgqp3SAx36En1pTE6g8HN6yqvimi519d67TBaTEbmvMuPf9ZcRrvKYPTN",
  "key4": "52NYFviGBZSKBpAmj3MqGAjbnbesQWrgKDRAkNUAq3suZCWG3iVght7M8YXLMfG5vUrgN7eXhuDYamo9wuveCKsX",
  "key5": "5FhH3LwqQ7vhLcPo98c4bCa92wZkSjnFJFobdZgE4xzmPYEtR4TrKVsPW9bvonSVK6srCjaDyyBWd9N3GSQH9T8F",
  "key6": "AXQe564hoLcRE6e825tYxkkHxQ5aiAevRoUXyTqwonQBNLf8jeGv6At6JBwR4GmmQc4BMtb6RiiyegUjoz56bh9",
  "key7": "2hXjSPtDnGndxDSw9suVjkG2TN4q6pfqP4HCeizQvsiSRWBABYLWwQTxZqHDcbguoBD1HAPpHgnxMzqM7nZbAHBY",
  "key8": "5jFXn21g35uYJ2NHuscKYoWmyk71AUMuMxyygKJiGNbvbu3dTWdPx536NFtGab7axPtjaeRg1m1RmVzNJRnPr6J4",
  "key9": "5AYEqM9ckg1Q5Pbdw2LHNt1EqGapBLVAoCWGL6inrEuumEkVCwVPf1TxbxASr83dq22NydFcuiUop4RbpmCH7i3a",
  "key10": "2bj7VYcCxbt7CpBmbUs2gQXAD5EGMNwYdWPiKeB6BaJThuM5QuJyFepfMKTTJQGiwfNFTVvU1RCF3itHsjfobN9j",
  "key11": "sXtqsK2tPN7NZ9C6wbk7tixPRYw8SD1vwUYgQ5bQK6ckbzdemXpnx2unZJ6rMwwUVrFKYLjamePDRuUtcyRjDxR",
  "key12": "Xwy1JjAU4L6f33iTbcagvfg7hZTtoAbpzKq5VkTWYjE5AM5VJi7ejmtTokuZcR9X87JERSF5QqFfSfgECPzX7iL",
  "key13": "34T5u42DeowMRHrf3oKPJASwrtb7r5Vrwb6ZqjcP92Q44tQf3BSC5h53mN3kQYfFbuzgcDXTvv4SmPf9gWDtCtf3",
  "key14": "54mNUU3s651tqbk16Xm1UjHz1tz7dX1ayJcy7R4rDWgU3XTpQ6ugyzupC9vMFcS1oejbdbjJR54TUZJmHPp914Dd",
  "key15": "4yDD3AtLQcGiZr55pejfxUV14gKHmzuRoVSboDNzDx9tYwWqtesjG2hJfFUwEKh3N1Ur1igVhaaSngs5cUTheiXb",
  "key16": "mvW4pSgtphzriVx6XsB2cVfrRjzjraRCtPJK8xHofumGNcSpp49ZNbt7NoMt3zTSSz8nspt2v1JFL9L6L7UicV4",
  "key17": "SQ3bhxzDXxbkwxV3ceNPc1gzk8BZHSvxb7vz1zz1F6ciSR2VscCTJKdn1whdAHqp5Ay8v1QJs4hC2tU84b1nv9k",
  "key18": "4bsG3wATMAtiBPYWXJm13eYgQCy9okXjZqbCnDNpFe9rUZEYhSBNvtiiMe3v5pEBokida3ofnKnSFwoPPQZPsU2e",
  "key19": "5WZeQMUq69TGQry7eiQTp5NSsU48T6EVXPLNKy3KK6qnRhaLwtWkMzohDDdnJ9jKkxozodycqptw5i1HzevMbeTu",
  "key20": "2DdN9hsv8SfjJwskvofWKcoZCqCFuPorcWeGDB99jrxFSEPt3b9nYdpVt6JD7ex7LauhREiptdzDkCmefABktaUi",
  "key21": "2KzfXdApcgHDTj6qVUbw2E9bARy9BKwZ9Ws3pmXRFhbFCwiopGg4f7miAHzpt1CvHNUJfPNkgwQDqKSgaFzZ5MVm",
  "key22": "3pCaQvwSMiA6RDYxqhCw46EZ62FYL8ioAaiXKsQLxEx3mcWCcM7qhtkBRQXDnVyMVS2Xfo6qeSf9GqEwRaNXFtLT",
  "key23": "5mkL8U1LKyxtYakjpm4i7L1XTCD7xNobJEnJqitWFfZ96HHuynaoGNok9vcvRfACUqNR458AHcFznRybwZM2YDwe",
  "key24": "4ux2H7tRdiJYUh19tiEd7Z7g8d8u8JFU2JtZBthXTc6GL5Uo26EnTBnxj4TRWj2TMWRompMhYo5RZFjjQZno5jot",
  "key25": "5AqYZK11aYTzG4H8FGiXPgxn5dBXyFNg1hWaGdjkxfW6xa9zZ1gL6JaaAzNMqWXL7CNpwF55LLjRgGjySBeGnUkr",
  "key26": "45EyYqJ6eXDRSNJRsmTf42PnLmV24dYbRPGReMDEMdNeBGrVT3vLQiALMhJdBfmHDTaERGykKw41yNTbFDfYFTX2",
  "key27": "5b9b79YAkjuqwGvDXnJbtL4tuVptsT8B41XJsnhvuWpT5kBZdyAbu7VERp9kTDUqz9mW1QcTxMZUcxapQmeZEfLN",
  "key28": "5n9fJ6B8mFAtmNEMiCRS6pVREC9mLxyWTZJzJZZgdxQsseG1aCzKLp9vPDqJp7KSaA8ksJRq5GPCU3UjBuUdjyLp",
  "key29": "67RBtewy42s8mubj68fGpj9D5XxynvvsZedtWuYThapen421WfaVJZEfsHsGZLhrNPXg2W7V2x6pQW6NUeaUEuAC",
  "key30": "2qwxyybSZCqJgtC8L7QuAkHSFQArsp3qRypg1zGMAu88dbZVgfAAaopH47qmE9m88VKNt1woM7LJdDuV8Fapd6GV",
  "key31": "76J8Bd5BJ6fp3FwZj4r8pmJnkdWe8997r75FAxdVefmacqgWJuVcsDQE1ABqjGqw788w47avwB2wavr7YhqNcwG",
  "key32": "bPMZcwBkE6RXDTnjTwj4J7p7bJdaHhTQHoiKALEBQYrLyDuMAx8p4c7BRj9xEC22NejkLhhaFouLncMBhoWAUBM",
  "key33": "5KDkEH2dUaYvTvFcFVD6TwczdNdhd2CQMJ4bKm2m8XMUDb1tqnrZy5TbtgnoN6UsjzrUVmHEVxKdvhFrqCMvA3XQ",
  "key34": "UX9AaK7yGjWiqdKSaWVFSagLBX9PTDU3FjWJwK5X67piDj1DpV8oBM5uDiejzcuopSpM7ptR8b6FbNngpbXNhjN",
  "key35": "28Tt3umCsUXe4xkKSWbkzePi6BvomEMm9LibTskv2598aCAj9uE5UHEkoARtwZherxthofgo49Cmt9AmosVkfkaD",
  "key36": "5wDHojM9AnKWiwjwuGisSRLCn47hkQSUa8zQewY2w3v1f61WnWPMcCDATWRappCkJdU9MgvzCXciarAKTTnVhAsM",
  "key37": "2qF5QynS2XJEGcmVcrtzVo5DfNJf77ejqR6MVaHKqgdvBPP9iiAz9Lyngou31BMSuSaZviVLhyT8u1Qj8YdoPoo8",
  "key38": "5vuS6SXNoGwJaZ9n68EUNtx34UPM4HmZ9uYLYSd3yTGXVPMTPJugFYcHsxB2p3ue5G8cBCQD9Q2PFMT5TxRsjqwA",
  "key39": "5pmLYC8BrRPVS6quQeNticWvMMnLSAEPAAgPv13zeUFfjao2KWiTnYkpw9MjVp7KniBHxkKZwxSpN2wJRck8mAKz",
  "key40": "3qdHdqFLjafoHZmnx8VQoqBSV2RmaWUr9WazVWUC6WJukbYkzLS1x8giVbZfrRDKr9CkMgrSEFigJdxTdAM8iYa2",
  "key41": "4qiAaozXYp293NgqJtrjucVnrVHo2Titwxnj3Vg6sMzJVKychudDAXUXXztDhXtgUtfZu33JzWtr7K4khmcrv2je"
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
