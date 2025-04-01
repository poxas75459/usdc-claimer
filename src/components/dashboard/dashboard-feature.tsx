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
    "5N1zwHPBthSatRXcBJmKaiqWCnxuca3fFncTaYQ7sCm1XPZbvN9SWRep714K3yF6SJDSBgf3VR7c8DyvfEBhMmZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54VCQMTazMieUN3pxqB2QDBpjoJFXzmcBx86KwLWiJBxgzUTcqvtnqMmXzC1Gg3iVSGGvP1Q1jNxYjDoaaMqWWjJ",
  "key1": "zERX12DVdY2dnMqZCffxo6Kgz5tcA3xCd5Pi7UwS8dmcMh7okfCf3d7APN8b135mfqkurYSHGiPi1jWLdhUcjGe",
  "key2": "5L4QWjrZxwfU4HemsBLko384bB5rB8Td5pceBjNBPnrkQbQqk19u11Kp3yiS81KxY8B9NrsMLMHjQ4NQSjTPr6pF",
  "key3": "GYm5bcphnzr3D8G5rhntX81kQqSN4bgD9f1adbv5Ri44R3wNDkGcL1kkW57u21gb1C3vkADNMhYCtoymzYmUqLQ",
  "key4": "55MMgHXeQbojyxieN4aefFQnudnkPoB6uiuuygwEwfMstK7Q915hKYhGzkscoGpJhHaFE4GxBuCJYBk5496EAJxK",
  "key5": "3HR7MiHw3DEGW9Het2tBHfyxkJP1MkRXCrhmr8r2onpDAJTarggGpU92W8ywJmqxqfu1kH34tdQLBZFL478Je4z8",
  "key6": "27HwK7LSqSxu3zxmuNnJAuhSrvzY3EdjfRvEufia44MyVKcYRsLyGez6nYzyi9NaaxGNh69q8wUqgoB6JXvhJCQX",
  "key7": "3kVqd6y87jfsgUMtZAuMDa24SJFSmD7yUPF1WX5QdWBHoyo8Y7EaB8XQH7dgnrYvyo1ZYs57fRF6e1oZouB2ayd4",
  "key8": "61Eon7DXjV6HuRx8y8oaqjvnYncbWBJXp1TYwVXBiM3nRvujSNDFSRybkDaRUMARmf68Rk72vodP7nx2fY26HoN9",
  "key9": "2GbhaXYdxR7hkAQJuuM3Afa7BX3X769L9Y14szkFA381U5mtGk79UGbgb6FyupEQUZPC8R5wBDgWH87wyxcfexr7",
  "key10": "3ZwjtU7L464uq9LpLUKs3dQQ1Jt4HJew7ART6bYkQm7S6HURzAJMG4WcvMCCpQekfvTVpMvm9YPMtpbivVGCprTw",
  "key11": "2mrGQusDrywFhPBw1bfaVJFvMYNd11HWr7LgnKpNWriz44XPoNzwik7BbVAvB7dA4NFSpn9c9AC3x3LNpkRN37vE",
  "key12": "5KizN9USv3mYnqpmA8XzHhLi1krKGiYTwU7Pk7jHKkJ3zzCqGARa7vqRj6JydDbWHZeHtNVRptHXWm5UuNXrgJCh",
  "key13": "BDD9CDJiU4yETe8TJFvoDrR42VrGmox2cKBXX3sNuL8gNSdSfkzUDXgQkjBrrUQqfUs6p3HV8gcn5QFeDpEbMc1",
  "key14": "3AthFEP3LuQNg4VetqDhykEMcptyokKTj22cBYo9mDxfWJTs6W3kXkJVCVxV8bEcoi7VwBXiqTHS2nRrNZocj5mt",
  "key15": "3S8LyYcmtwaYZjEyMqrCJeE5gFgcnueUh5xjoWnK2eJFyCEJ4tzNmu2v2vjoDFiSPMeYbqdk5J8yg3JYo9pd5j2G",
  "key16": "D8D648RXuCgWDbczD125zWQsDt59jGQHVD7t8FaQdYHFENBPGzZrFTQgsaPrnfGR4DgJ8kF6i1TocMdP2t79813",
  "key17": "26KjfFVqHXbA8vteZsMD2jKF5BSQJHgoVAU7ueSGP1gnxEf7xWEtd4YcwhdXZ9xD64nwicXMQzZPhAXfTJsxJHDx",
  "key18": "221ykZirrWDQJQhbFYeLXtKhq1p3P5AgB8Vr3VoEFGFEtEaDE3uNNFe3wKbb3EcWWuFugnvgWSCm9i4qKWaEVCUn",
  "key19": "3tVbPLxMXEzqvhkrURTLf3X4eQ2xYprgJRy61PLCikyhcqA3aG28N71wmoyMUMtWtFizHGe46tyBQ1iwUUYGSEuC",
  "key20": "2KcbyjkkCX29LeurBDQhnVz9iUgB6EFmNrozm8c6qVYt6cnHcqzyJQykDkN4x1wnPmHYAyph4bqCHk7vAbeeEguY",
  "key21": "3SgJKuF8uUEa9w7S1G7ntt2QXHmxw9P6a8uBvnAd5FtxnDeWnJBz5P2b7DAD5zQkPSocu4dtgnY7x3UsjaWmRZkx",
  "key22": "3W793ujLLPtpgXM2QSMrwfWfKM3BqWbB9h3aTjcqTcQ5KwtrPgkdhFXXoAitn3zqRHKgM83mRvBfY6MuWH4Q2akF",
  "key23": "4PDD8KbpBhgqQdhTQnX6DEmjUfVqpikGYFhsfuey2j8xZcYpuAEPDViX8JW5TByBmdvkMEQLyfEpp3a8eXcP8ZvV",
  "key24": "5Tk21aBwdB84x16k884Qk3NtWbuuAaEByb75fdhWGgaqonQ4eT5srHeBypdtRndmePm4zNgTYBuRFp2zaGt4Xu8m",
  "key25": "2tJ22tgfzKsJ7ctwKSsWU3VcEYCyuRPiYicaQ6YCAyKfycxmeDJY8GHffCFBSXu6Q495LinSoifBtpPhsxTZBHXw",
  "key26": "3N8znaZJAwEMAjSXajR3WMfysyZgC2jRhje9waH3C11cthaiHeKAm2E4hSSLKtAspnA517kLzdZBLJDXL4LWDynn",
  "key27": "2T4KNdcWP6g1PVJDyjypotM2g3BoPyLBSfVuPeWMU2GNvwxJjqspgnCsjrt2jK1bUKvNPc6FzH6d229EbpMyPeFK",
  "key28": "4ZnBuT1E4Evb2ek7L1faAkey7KceWGPQxXY84xkuwAmuQwg5RTPSoyCWfWrunMeGWW1VSYNeWW7pBLnrtkLmTjpF"
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
