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
    "37KmkHJUGsCSAR1k4yiGWxsLw7xDo7dwzjjmsjaXvzJvCKNL72U9sb3DYF1u4rq4RdvRJT9uqvoPfnjhqqX8wqk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A1Nxz8VhSLBuvipndztzChDaeuheQT3nhe2yvuP6WSmfWnwxRKxZua4uWQrJoiUGze62saSFxho2kQKPWhxXWpp",
  "key1": "2mK4JvJ8Sr7bEPKTgtJ6qidQ15A4ftjQQY945tqCXbSQQfChw4B24fiiGRCHmUcdeCeZy14EyaWZQeQZwXHm12kN",
  "key2": "5C6utE7GTgRUPRGR5DHLEnd7Cu5YYC7Z7BjqS3PPFFTcs5er1iSwFwLkZGN2EAEnUoyvLgwn89JnU3GSbk2MUWnJ",
  "key3": "4UxW4aG5vvuz6hYe5LyboiepqSkxFSUKxDPAmuwQ1rQ5TLtg2rHeuDCBLXSh4NpDp6hn7TNrBEAB8UJVBEN1tXRu",
  "key4": "5JXzASsfxgdBKtWt8gaTHYpB4z8PVVVWwHCXiQ89hKTMjxuEL56c1TGuKNTGTeGspLMgSWWvGWkdamKQr8qzAkj7",
  "key5": "2Qj667onkUomYhuyUUgR8f8rojWn41cHDqq8Wuj1MP5nYhcsV17YyzARwcUJFPpNq7VYmcw7cM3zzRt11ivmTxPc",
  "key6": "3Bp9yHYEecdPAPA5WNwCNV3gAbHfQcqVL16ssYUTgwwRTJ2oQJtoeyTwrrPgqdiG7GMjkqT5wRjAAmESFeAKPMPq",
  "key7": "28BiE8eiMXbjifH8zpQtJWGJJ8zB1KZ3w98W3qgfFvgDvicjedaDjJ8byk7Q8dfiMu9BmLXTYfd6P3yLFvUgTKb1",
  "key8": "4nx5svYhNRy6JdT3to6vPqL4aGKjosFJ5EwhPiuRmL1qzMyDG1HsG8VrMcJegnLJtGXvuHJyWFjSTbxNkUSNo55E",
  "key9": "2HeH24YxwakfuTA117UrFg5QxZmBTmkyAFBD7cqjZ2NmZAQdPeN1hofvpHNT6HaohYnYEDB6zRFpou9P3q33Hz1j",
  "key10": "2exzXktdByuuGCnPoEwoCqrVk3svQugvoN9GJZudABTzh2NQEkF6VjZ5Ao3vQe1ZBquh2c16Vgnueq8hEUgCR7Cx",
  "key11": "Ck7FEVAStrQmaThC3tRZk1uPoebUohCHfFxTyJfhS9WUNiEy64Gx7LMJDtTNrqG1m7pfLS2LKPWLNvYrXow1oQ2",
  "key12": "4Z2qVhaDzfKkdYB3MtrHnsJem1zECHrq33bf57UkpTc3bdSp1WkNJGrY4Qd8sRpBi2aT9CnuuZTCCrbJzRnFTosJ",
  "key13": "52vffWGvYLFd7EAfVEpmkFgixdX2SFXFbUzjciw2yYSgALcU6GZdSj9WYa3Rr6vioEgF5Z7HPNg7m6UJsuPEocJH",
  "key14": "2r9yohh6vEP1fJ5eMkt6cJK5nFioxHyYxDZTC2X9cE8x4hiRHvw35rQWhyxcvVxzT7CYqj5q6Nq9eh7Gif45hdM1",
  "key15": "4vaymjXKynKXrftAAzL4bxFE1eLNYSanHJs6hG34QoJnaqdyR2fEfNcSsftALCiuiUinUWJXbP529rGY9QVe8XDa",
  "key16": "2XoVVcJ9PTWHAFGLFVcgQQgcA1JnsaeeXTQhxWkcnBqFzqYLtXfa4ggcqusEeVDe7JgDg9c3NrtGq2eA1jdsjsf2",
  "key17": "5N7RmFpnP2yMeJf6wghpuitQsywAJruzqHtSF3uDKeEce6RgT9mURr6yLTDFxfLyaedFKsb47jdbqxUfrvKhhera",
  "key18": "5NbqaahbBafNnuFe5GXdzhL1drxRqgfhLL9s6iXmNBK2Z5hZe5jmagL9jufEnRFApoSq1zCXf5vMgcrVZtQoJYd4",
  "key19": "2QQCTxezhSJnEmf17p1rzNB4isSNviTgBc4Zr8neN42tgeRA8T1arrphwnfVQCq5Xd4Y4rVVgFnr8wSFZYyEx8EY",
  "key20": "3kzvGbZWe5167ZYeffH34eYbrueMFMTtF3dyLMpqoEx9oFNxS8M6V4dDTAQs7QrMyVPmg8XouDUNLFe4sAnb2xXd",
  "key21": "3WuAezVhQUF19RXujbtmB9mCMRHhXxMMNAr6XfN8H2fXN8xToye5n2btDymxiMeM65TaZXVECLF7SUATuPnbw2Gu",
  "key22": "2VyFdA3KJKybKMiJCTX9AoCW1qmaVC4CEh2xqfzYA6cffwCTapZZ8BMVeJAYDeqFZ5r8WSLcmaZFoe4JnfXF385r",
  "key23": "o1WYbv11vd1YeNeaSvo1kzCgFfN9hQ7zSFUweUh9RmAp7EJRQRon5xm4RVnJuaVpTaFoYqC9rUvfHSGG1oS9bno",
  "key24": "3AEmHVZoTmp6VUuhumsTHBXSzB6tLujg8pzci4sm3a5Pk9hGhUzJ9cupMWcK3834z9Qux2H4EQyeQtJkGiT5YiGt",
  "key25": "5Dtk1aLJ9NSR7m8ZtUXhY8WdLEtCLV7yxCjYYnoysgR9o3XBXYbiZDWEjvmdp14dLvY7MgeaGWUmGrQFgrAbYpFc",
  "key26": "526kLanxdsPZvLFZCs8kNnM6ZrjSEY2xdTGyRj7eNjQUrAZmBw6bjF5AH3vfbyLQojTMnBqsCKwVSG3ZNjCsRfMj",
  "key27": "53socg6J9doraJgr2dRUF9zBBnakcpAijncxKDTuRz7hQcFkMuFftKouYUB6Y4RokcxF4Bk1jMmgxc2Mt8ekNU6t",
  "key28": "3vqHiUPsE8RW9M8rDGQwsTVmPvhXUsy83ysktvj64viGEkpYaESauCPxaVNK8mG7nuA3LnFnnBMpbMd2KweLz5VQ",
  "key29": "TZ83LgVCYw6eXnx8h6MfgWCjpMkd3fhKRu7hMJ8yQhYgN5x2eDEkUsL9bXh3RweEYZp1bjqd7WeX5bwHhEDZ8Gm",
  "key30": "4B1C7jzCQtjs3znMSN3X4AxnZKKeed7McAMLv9n4kLANo37QHgo8UunLuJLum5CEPHbBXPaJbBfK4dYwniukk9dk",
  "key31": "2sHXNPnYMAS9N5KEkmcWfrDAY7YmTeHcV2KmaeQnBkEAwJamWqssTqxHsxDaKao3tu88yNDJBxczD6SFsbQe4Brt",
  "key32": "4tZ3CXgRkxm1ZEZc5h5X6HBghJXL93FhmkLtA9gUWTQyhCK6sseb8JJMSFs8Bw3JziUWtxaZZ6cSwrvspHuWnGh9",
  "key33": "2pNsKQaFmMdMrUc2jVvr7q2XWk8YxC3AfQUMcWqonoomfPMFyW6Gwq8VV6PvCgexTLZM2wAvby5cPKAGhddcFgFe"
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
