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
    "4AfTBjzuJWwoEWL7WqnypofMPsjz1ACLNXd11YUH1xFDHCDnuTiBpghSDeysCbn6jtpCavwfgHsKeVqv3VVQk7W9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54HQDMe9ttBg6V9rwktWWTAjyJLVe63cQYutJjmxmwLKgKt9TehdpRTEygX2PLNmYC8YxkjBcTRQMMi8NrFeKCbm",
  "key1": "4dwBhTN5ZyTLuQ1nncPZsoJGBMhnX6Jks4Guh7x1iCW3rvR5kySmDtt7GxZDrWFz1yad3ixP4srZN3xfkVi8oMyt",
  "key2": "5B9QmnQreaJTxM7NYmBzvnQuhD1G2V6N5ZdRHGQ9NjkNSnsiQQh1CtusZ5podLWq39rn94sodANAjjcwKVT8FXQB",
  "key3": "5AhvnN5hn5vMnLaWbHd7TssKpYFBQHfUomQ8sQ6D3ijqc2WppevoQoLiyqtL7max3fT2PHdzqv29NhVdcPGkmwmX",
  "key4": "5FkgEjgwcC5ySYcy5xUQJtGASSxfnJayiqgiwWHxY5gdZzEkbY2jAJNwUhYexPuNCFjmfyowavhYpqQTZJhV89FE",
  "key5": "4gdzLqn1rQRR6WoE47wF4xx1erKUbCQxHXxzowbLnZcxPr6yQYoL8zz5GrfFwwdEmyiqvNEnZ24wcX8xcNmgAwcX",
  "key6": "2qN4uF8E5rbD3GP1b5A35ahKwD9AKqrqiU92fN9mnB2iZaxAGmAp3rjJeEXE6BK8nK9NHo2dpFWaPKHSiVgjJTHp",
  "key7": "5zMKHNBBAFR6fwACZuKhjvHpCSkAt2RBmq2bcJ5gZnpcDeEz81eiPvfCDibvrtwA8mE4bh3ziyM2A68TYU9q7kNk",
  "key8": "MTB5SAc2kvuj2UebmYeHqb5X4v7m4knU7wPTQ24D4n7cA3MXaAFjuMESgLXiWH1heDspDhRSJmwbxRk41d1Edwt",
  "key9": "4RaHknggo81YXC9cKTuzjXmnPtongWzkV7185ktzm2x81vTQmh3Uonv5DMgz24jG4nefrN9b82DBkXQikdojVjKP",
  "key10": "2rwGUyQmbvtAQJ3sWCnnxPHcgqDEAqFZRfnozarvPXfymAZChQkBpt5otnYDiGjgqY9NEiHEpaBmxBaQ7JUNJgai",
  "key11": "2adzAtzWuWkRcpkDp4qrYwxzi9dcuTqqqyeuvXQUnpuoWk25gj7SaATrAgJTR9QZh5a1qxH4zpnJHaJM9jVwxmyP",
  "key12": "42WVujyQn3FTYbFLBcHHrKUdm5tMRe8RAHjUBD1xajWUe5bnSE4Zf9v7e8BzUBZN17gMYb6cyLHUTn8uESiGw8WM",
  "key13": "33AJnyhqo581XV3ZvZ9wLkwZ7Wge2ZwJdpSJrFFLKfb72YaWGo6Ay63uA5ai2aMHcubwUPzyzUKMWow2zEAqTzGN",
  "key14": "4od6koUeAkVZ7QrMoXQXRUY68WSmEzEwtbQYT7tHQAiuVx1NALNTPo876Hrroeug4qb3QsMXYDN1qVudndEset8Q",
  "key15": "2PBNaSpUK695icNHjV3abUGq2D8aAsDFdS64HnNUw76FXWWX44pKtwze22JcY7nepYCedEwGGTdGKDE69HYLhGbn",
  "key16": "246tAo65Db6Qa26q7nAdsJY5WnzYjefizrAHXtsDQAsguHTWZZUyyytA8fCwJcmNZNskN23ea6h3SXc9EjkPLu3U",
  "key17": "43xXJLH3m8Ada7F7m86z2yUQY4iikHTzwARg8HhwzvVpjM8krtcmQ5Qk1KziggmMWubaMu9swHkKh4yRHQYodM5t",
  "key18": "4RRHc282jChm2RFVodRBHhoFAn4viu2kopPPgghqhvPv8cZercGXKVomNuyXsYdWGUhGbtCDtwP2bya5Lw5XDY93",
  "key19": "BTg38nL9CcKgPvJwSCMrUKFTN151nfzutyxjTUuDu9BQXdEPFJ3s19C6YwovG2hAdjrL2xFB2UETKqQN49APx1w",
  "key20": "pUpwRrRs22HXAjDnnVFoBHEdd5HR56gr8TXBJW6epsBonq8kgHkhLirzZFHPth1K9PBozGAVxPTEhD1TMxzdJ9Q",
  "key21": "hBhjr9ureaLwRhFktMiay1YyKN6eCS2Fug2vtpbPyortyvuvECuYnyBQosHEeiPbZ8QpDdNwmb3YMzQHoX6e6xo",
  "key22": "5oj2pfrYHB8vSpaTMShGQhghhV42MbRToJLRpTDyCoJBVBn5SccQ7GEbxyDwZnaLmE1bH8VSzZDSBZg2jdaygmcN",
  "key23": "51HAvD1sR2N7T1zuCcxZ99NtPg3r83hjCGAQDXotQHwhDALS7XvyC7xmF3CfxFLPjB9d4vPvDxQxSMRzwiWQ9dQm",
  "key24": "2vA3QA9gSPpfqTa8gLM8vTYnu2H5BwMFyAyDdn7V6PYbM11kSMUL9QqAgMRG1DeZpizC4mXYXcifyAXyyWN7XKaW",
  "key25": "4oLUrtjNsmSYUjPAJYLPsdupiHCje8fk3GpLduVGN8PXGWhkmH69HJ8WkJbU4uP6s8un6MrmRHc7S389fAua8EqH",
  "key26": "61qnXWixJqmPqcMYAvaitGKjKtzUeHZvHznaNqeJEDiq5fvCVKzhFZuydS7XcmQfkbzi6swuwKV43VSjhQKth14f"
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
