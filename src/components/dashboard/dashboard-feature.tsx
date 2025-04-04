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
    "J9iDdVkjiz2C18isu43hRtXefaMgXSbbqkkVymLem6GyTUfWyn5X7J1y4MEBZtHgv7AuNCxE3Lih9UAvaRSa4gG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U4begpNDDsLfLLbjHDZryn5G3a5omUu3bKLFs7KpnR7wKN7FoPSTrGFd3SzRGtY214Dxn2QG1E2U6z7N9p8aHrC",
  "key1": "4UjD5UjMm3CvoPTnxxE5bJfeBkmTYhJcx1U4QSp3MeVXBwvK6vuyCPGoXVZVWUuZjsH97P567TAFwsKAeVBWfyU5",
  "key2": "3uBiaMyF2Adik77Ltm8PdPEkmRkBNw9G5j2s6mqbRjBqAF5tfYMkAyk2zyRf4xsvNM4C31LYwKF11mMK9Jiix2NT",
  "key3": "3eay1BCe9oZjm7Vo6dQCWYLBzdsLpWLzdvpNdhqcFbXhXtRapxmpX23hs1czrWRCnq9P1KVYWrw5qM3dBuN7EAu3",
  "key4": "4WQeW8UMtTUBGUU2chZbf5QDz1NnjKXTz3G2s9KVk96ssyaA1zGryykrKaCQrKHtcCgDfQACC5Q4n8R2DVjy2ZJo",
  "key5": "ackVxMzS8e6AaPjA9CCR59NLQgqCTYq17WwHECktqGaoj8ZsHLu5tey3cvAAtMcnuHsR47H5hQrXHH3GozAUQVk",
  "key6": "35b3QGgmqj91rw4FaTDgWJsW9CdUy3sVcpbDA28oKuD4DX3KD898Ge4cuZJnJhHDV2qWGzsc8zrq6CftUfEpbUav",
  "key7": "3fRacHMCrfchyKVDmknZUT6JpADTV59BLi7pUNuJzsqYH2PFWT7hmKjBcgvRfyjzYSg7jo64sWJ6UG6P5AFB4xdz",
  "key8": "4tJH9zqL5yitg8pquL28iitVhqu1c7b1YxNpfTqwaSNWx5nXqtBxwiSSpbeXPv6ENCfkC6gbh2MM1P8aqAJVXjQ3",
  "key9": "3PbZn7rvGA153ur3Sbn9SY8wJimdAHrrUjP28DK4RNRBurttwCFCVnW5HySayxn4ifb3LbVX7EeV8Abm14XxTnda",
  "key10": "vK9P93EaE6qUwtFTzTQgHSSmqqWPPbmqvjy1R6uhUNy99pg2nxdjbWUE9GWhH45883vhwbvYjgpb2vWxN5BwxLN",
  "key11": "56vrhjnSKp8qHZD9tXLpZub6Xzics2Rcs7viTNTw42eRPNpGPFJSerg7oFTNwNC4Yccj7iKpwD53ELFMAENmttF8",
  "key12": "rgcB1Si9oGsuK4i6vWM3LkPEgFjyTkt1mKaY8AQHUcdbGzePrGef1sG2Tc3A23ovUvApzWjQ5q5Uv9XULGY4mE7",
  "key13": "4mqkkr9hXGE8FtFE4d5CLMMFuMPBn8WzcBUDis7rVUhfktFVeR8y1zuxGjhz3eg3D3FXke1xeipDKsF3FPP1AoAh",
  "key14": "4aUV5qkEbXazHcLVobdPf7rNadcEh6TFxRCYERWAkKm9nZaRUkznRCu2XdgN63mebD5haDXGXZFvqDY9CWkSXTQg",
  "key15": "5YaTmearcGdbMBgJNrDo3stGUH26zXrj37MbdKbkbR9AuLRQRs4cyVXF8byJXEfVYS3SuPXRu7jfPJeTb5q2Fd5B",
  "key16": "pMPuRLoh736N7osmDUrvcFrdSPLSjmW7xWPb3B4mUxFxvJBzSbnFXYbyaJnUiX6sMoAD9Ye1mpz74CkLzbAZnj7",
  "key17": "5Z18S7xkHHC7zSgcMXWxFL9z5gAtRxsVcSHXLJT6Ly7u2g4dnB4jPZF8pXsrjgTJJmu4AvMuzy5ree6HDk7KsTJK",
  "key18": "2UhRYCpRy47KAm4L2nAQ7KUJPcr5jD8Toz1BkNWCoZDbR6LjMvGdqTkJSGZaqrqWTeUBH6tY7CZw1nvPYsgrr1Mu",
  "key19": "5a6hyqmTzQg5dXxfdKxfWz7CTtmnRHWiQGksS7nyq4jyRnPW7KHzgx8yA73uLfiA8GkqiJc1GkvYKFNx7wT7Q5os",
  "key20": "4KJrr5ATGkS2rx3tTH2Qv591WdD1DjSs6bYvNdeTDcKMKuRp1ciWfKJmTZxujx2Y6wLLykoY9vkPhSZnsKinxMo3",
  "key21": "2KjBqjwfmei5aWcRH1itXLfB9XiFnQCZbtJQSWjWCXXFcSckajfDbXPc9aLSKkvdHw78rUZ84dXUEgdtSbcwHYZC",
  "key22": "5zUtyeHWzqLqkhDdMp8nXwDApaU1ohvSZYoVX4rQ17ZriKqDXgTzLmvcPeBkcMhKNNQpmuX5PG8biwDbvR9SB9X3",
  "key23": "5JXueMYiHd3hU5TCZXyj2mpUTSqLkGAouschZQtexmP1QZnAJkowtXyCdQBqvbtEdYQmM4E9binDXoonSa6sbbYs",
  "key24": "adGfPAQCAVthwtXn3fGcWFxcHDk7cuPKkkbH4fbFmUZodgnj6xhpUGBpFp3KQ5ZsCppEMH3XjTCLAuh7zsJmNdR",
  "key25": "LH8BcD8q6wMnQu7oECad6F69caJuvBUaJjRauuAVa5LRrpWo2YBcKe33VAxnLFTDz7hCjQBfGvKqhZwTzCHJtMq",
  "key26": "4KmCwPEMFn2BMFgi6ARX6Nn4JxpXEk9WExuDwe4HR7QQ8bmMDuvUJYY3Z3xV356deMDcwjXH1rPDxBHbSVDgHgfo",
  "key27": "5Diphjv8LSWHmWqyiGpeUrrriuCeRefh6B2rBaJwLXaL7CKTvQitMaSq7F5HyWbCYmANkNyBfTCVjMvj4Wixk5wV",
  "key28": "58Vqo3mn2d7B1HWbRGixrfBMEpVLXMs1KBTEbPMQEzkfqXCXATWHNkQamqDCKzdv1EogCudiLL1iH4UtnAhc4q3v",
  "key29": "3bgZBECmhqDBxc638aP35dyZAWC5wxPPhSHnPBfDX2KsQWiBTFw4Ta5EQCvHgykLPjJCFD9Tg1tbfrRLecmBdzaD",
  "key30": "4CFpk4phxqfBHGGHLYjbSfMneoDsQHZBCk8ShdsoMiueeZp7bqgSpMrfU3iADwKVVChbDa2817ah1JEFp7tmWyt8",
  "key31": "45g8CAg2T56nJ9nfeweGBeKV9nknnaULfhDexpHqXQDiFY5jJayPZMvTjB5Kgr82CiNpfrdrWSr1z4s4FpZGjN8e",
  "key32": "3jNREhVJCyLvFZoy3unPhAuiiJWpGxQUHisAUWYsRmv4Hn7pfYPhfGDTTJ4S7MDrnFRkeFPsjbvSPA7eevwMj3ua",
  "key33": "45abyBrK6bbkJUUVYdrUT7Kbibq5vMwZK7rbf7Q36rdT1A1s1fhcfVMYtQe9o4FDW55yxzPx2ReBwVDSYSYARpur",
  "key34": "7mUQdLQaA3gMKZ6MXCP8sMea6Ufysr2pqhA1zxtx5NU1n7tLMBo6FirxHkMnQ67WEYgWGeaqpMtxuuVGa5V6eFD",
  "key35": "5xBL8gqpaCPGYAZo3pgZyAcXNR8Ei5mzTV972dfmCojrK8xzQR46p6bLniSvgeaThEHi8Egq77oDdbpAXHSf3AiG",
  "key36": "4whRf4rhRbMDaERsoFXyFEfbbb35Jz7Th89BJK7DTHHLFVzsL7oDZaNroKW2nFqD69x6u2TaWRP6b68xN14R49BJ",
  "key37": "XNpiT8FzpmqQ1n9AePP5AHWzsRZMo9w3ufkQ4ZA3DMWwZEsChVdScWczVSYoypQj6NCvhThXLhCYN1f3zLyWfc1",
  "key38": "3A6wsoXTgRPiNJcwp5VTUyF4wo5kxCDQ7Pmujfx4JZYxoR6Sp5kPAmoycR72yQ4k4gFcR3TZK4msiP9H3p7p3dcm"
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
