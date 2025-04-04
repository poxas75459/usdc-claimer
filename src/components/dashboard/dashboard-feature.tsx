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
    "3QEDNeZFQcGNohdkhtWRDEHHyJqu13XnV7iLCSpZmUgwRvRwxnhCwwTUhhYetivX6K9s8oena4iURsNzGjfb6GZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yz9MKRvrsiQYFvyXKqhKQmMJ2dqwbd51T3vWthP5fbRzoZ41xwcCfY1k7jrTYyPkoFeJErXyqz5axJCy3wQ2MQo",
  "key1": "2aSCzkFdyByZDWU5rN6yCWmFhQLbgwVAy2R1fzxKymySdtRnFCueQaTfqAmq3M2bUuXgaaE4xeCXA6FiBw4bYJs2",
  "key2": "4owt4m5tb7cs3idhNiCmcVJsNS3zc9sZkY9cEfV16gChLj7KLRSdDZLYqTBQrupXCVzTAYpzCWwFGStgiEwu8kRJ",
  "key3": "3rJEBzwwQ1EBzDxk9ykDFcPJ5y83oatQxcH46zHFwLh1E7unsVUR2Ytt9VoYBUY7ReUB8w7BWGscQQUTi9coha2F",
  "key4": "58n3BmYgpngwsykaHBoy4egrQPZ91G9ifWNgKUuLwrZk4HP9wGjEU41MYsX26ZVCEG6h3o3XK4y28qSWmAx3WBHw",
  "key5": "28JcsMuN8aDB9crLvpVsonDTgEZnyUkyzHo8FDoRSAoB1115jwBQvjyaNziFKdhNghaXGM4xjXLVFWabvqd2dZ8N",
  "key6": "5QA7TjmitSvtmHy16UMxKyHAq8mGW9oJwsYXcS2GXDP5dxJBCr2fKeXbKfdgvKgEa5J7SzW2YT8KhJ2cpqMxq4aA",
  "key7": "3eKjHDNQb1GMzzB9LLau8s1jnAWUrSnwmZN6qm2Nv3VMkXNXBH4GcmmJUKT3v1jLamrvkvQTzoxkz25Td7ts2dXk",
  "key8": "5CYu9it7MxBeM3dRN3SRiyaugTtX7AYLdiG1e6vJLLZMMkdntCD9QWTCuvm2oyMb9HmUZtiGdkgKtKyvRjHdpzTo",
  "key9": "4bLCELiZeNRLyRHWK5LsL7LBZUP1MuuKZnpbopFPntQJJhrMccZjao8ctZdKqZkKSrNLTQGUViSQLXMbRKGmEnxY",
  "key10": "pF6Q4kH8CGPfaUEpWgV6HEAruyaSQPq8XcFJJvjJg7qvZCr8tzYyazWkWnZ9Mbt5LtiXtJQESibACeYQ2VqhSM9",
  "key11": "2yJiiGd6A5p77H77Ykh1a7aJ5aGfhomk8aPmyfa6ubxMRvGUM64GLCoZeDaAybofrBaeK1V9ELBysqLJRivgt2nU",
  "key12": "4sR2Ahmw1wy8PBEzCHohypQzJe7Und6JJBm9Rd2CE3sa3avxaGuYMD17AXWXQkVWY5u9gq6HmVB3vjA5wcubHi7v",
  "key13": "24QVoTLH1mf3qGCpd5TiwrPyusM4M3xT9ESs2Aka8eNBDFwDqxVa6ANmb1XX8eUACMQssfCsn1a1TShbN8dfnQ5d",
  "key14": "2WfUmQe37mqzoiMDMsrS1yiictcENfs5vhiL7XiT3BCTmSV59F1RsFmk82DUFx6NVceDLpYwRT1AjWT2HyXX9NU5",
  "key15": "4h6PSQXDichcQnKYdpdGe1dic1EH1TLCUxm1J5nnFmDzENtynWrm1fPvEPPCWZsbhau9dtXGuRbhMcFzXGFdpZXt",
  "key16": "5FmUmCTnigWgFfhzHYQbYvg6Zpjhqw2pqJUgcvtLPNrptSnYsQFvZ3NnZKcnAG1ebbUoR8NJ3CCJ4oijQX6kkqU9",
  "key17": "FHLR3DrNFid3DKU3wh3GSy5yzHMkCPpAsF86s3NLz2Yb4YWnU2bj2Di8ddWHygfrB8qNJKF9mQSapxNav28GQU6",
  "key18": "41WUzaCNgfYQBUFSfG6vo7KveNHX5igyc23kUs3Py7etmwpA92PZ1Adu9MnFnVbzc8ccMupmypSwGiqWJA3NSEnL",
  "key19": "2BhQmygLETwkiUDVoHEYNQr5iwfS4QPtDbeyNRnbE4k2CDFUxJ6vPEQriuXgP9xjNxUHMkrdLqfcsEcJ3hkCq551",
  "key20": "v7L5LRK9vxuNxizkmtMuVPgrC7RUoWYA6MYwGMnxd2ExF4amM6AM7aNKKtnbPBAkqLxECjjuEpEqNusoXrWVd8a",
  "key21": "c4uc6rN9ye2NajXK4BwbtwMSeGdpLULwSqwHhSnLmF22kgfWdDRLYWvRM1Vwj4XdiccacemYmc8hvkQq77NVKwT",
  "key22": "4UaNgCavnEudEeofZTMsJWcGN4fTewyp7BpjKHPJkMtFbtikgaWWrA5312MQzoyuFyXRSwYr7kT8yfAczoXT2S7K",
  "key23": "QNGf5NTgrUn6k9FvuAUBKFziegP3ieKkKGXWvAsKJ9BRV81ccD5wbypKWd7FQj1zRSkDW7W2HUwKjz1ceSMjJFU",
  "key24": "5aSPCSMjmVnWTGQ4kMnuKCjQxJy4t3HEDwLZboLWAHhxqcerNRSZKb13XDG94ifuAywi1anHfphzYnaCeYfYMnTe",
  "key25": "4n1xhuk1zm3oz9J7joJDFNReCpgDpNuuK3okW6UrCVUD5MvriMtgoS16GqFWTqhykv8vcYZsmwSJwuCnm3338TAT",
  "key26": "2FzYy9f3UnnzAHmruiqE59LaX3PxpU3qpydtEaatp5U3SiWw7BT45vrEhYo8JccFad9t1dNdKXS1LDrLae4MDx7F",
  "key27": "4TxwPaFvsfPacstrBcwWCmeZrcBDri1vJnHukUm6ZbwxDwJ5UAaQqciUqWVuYUYzJNWNUh8LEmSPzKGKeQQYdBMU",
  "key28": "YsWq7FmizUb8LDdJsGwed8VTXLZy5wTRaeFSZoYUCvm9B3m99vhwNS5iBDPVSRLZ28sQd2s26B9LXvLSTrec4PD",
  "key29": "3VJCmHWcB6v27zXCudG1gowdjihaPYeHnFQQvB4hPe8EAGJmfAD5txS1jbSp1cr9Vu8hjFk5MQBS6caqvnMy2gQf",
  "key30": "2TnBvDJSfv1DKy6g7LX5hKtAfHSMhDofHHJG9228zU265cVFDXzghLTke41L2tkadEJDkLWDQ7TSEopkkEe8cgGS",
  "key31": "5aJYr4M9Fq5t7nPgM9aDktdtyHfromEDHfooKJ2prdZ98GJnSL7tuJoHNLgSM9oPtgrxR6zzESLFoHcFqpL3JFZc",
  "key32": "2DrV21jsF2iwphzcp6gcXYXbxrBPJ3YYuimov5GqSEuxh4fZYU1ZmV8o15M9jVrikFhbwXvtp5yrPqqymTvDFzYN",
  "key33": "4bTsuSeYVYnyt2msZd6cyW9K9GepzG3UAV7YHxWUCQrWjcMCSFr1w9FNBSHMpBf3pUtCVg7taVxLXwcqL1EEowPu",
  "key34": "2rSSkuFz6uZwtTFv8HJnaUCnnk684CkeRqayaKtQCnyBkhaigzFpARc85g1UxK2oWTKU1U1ZDuJkJAX3GiHC1ptP",
  "key35": "41wcbo3MZ3s1fck1hJtfsEp2q9JxPdEYRR578FM2rTLPkVxCNEre8QSpmQrqzMYnZbzX56EDKXbBqS2VYfzmqBgZ",
  "key36": "3DJwDEWurnXDekyLqY9gtYhLHYFH7kMUBdAimdnncTuXd78XMmnwdGSUWz4cpT1953EYCNf6cZW858fzdKxyj8vE",
  "key37": "4NKsi2KP1gr3PvWefwUZyHj2gJHy6Vih25VENirX9mpixuTyCuDgapHoj5Bdx1ydCUdiUZto8GdaWnuEvCMXofQv",
  "key38": "2634Y5WzeC2DTkuwf17VtLe7oCsj1xoqEteYNhDN27ruJXr558oGxnKq9BKQPnH1sAyamtZMTCj6Mvj67Zpp61GZ"
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
