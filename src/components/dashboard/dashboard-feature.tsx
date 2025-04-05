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
    "5sxAYjE6kSuFmNuaWm5rQjhx9SGk21SiD3C82vUeDyfyVzusSsyBRqXfgVKDofd83oG5sxkqZmokHjsW5JoemKJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ob3aPndZjgW8DfqihmyXphkvGTWdPs3C87v5BPpiskuvrJUm7HS1htq9TQ7nZbTr6TqiS6qqRfrr5dF6o2khCrH",
  "key1": "3JPDTQbxiKzcxhHpbxB1XSEDTAcUcwSX3GWK5vsLnMn2E5ZbrQU1wfz6tgJjTpHBvGQNCAnAwMNDZHzYzLZeb2Ey",
  "key2": "3f4tgz25DY2Q1a3KYAjsgHKsviqwgmxkqBCzKxt6JFkmjZQNZBuuMwaycgBuSfU2nWZ3TPXenJ7vstwPQ7h2dnru",
  "key3": "3SBdB47YajZhZMsy22mZMCmyxrRyrumsrX96xEHhtann1krxcGHtpzAZPhFQFHqiyFpy7Rm3xGSY7Q33Mq3FwW7X",
  "key4": "2Gnwf8FtQbY8wUCLihrCxg8KpFetm4oqwr1XuKP2zU8LZMcv8BzY9ANkCTGR5EF9QddwPtqjszjZmq5weEUfuRvu",
  "key5": "5V8V8mpTC9RVWFPn6NQS7Y6EgY3ZEQWJAUR9NbkrfqDg48jDhkNTQvFB8hwL6vaW2ery8XUM6oUnBRxys8PUvxXa",
  "key6": "2FTSBm8rAyDZGoKqq2KwgGc98ovF4t6WfiBdiGKeH6JBzSyWn3ipTC3UyT3Z4EEzim2xjE1kKkuDAjppV2KLwbJn",
  "key7": "2qebrBprhgquzc4SPt6miB9iA4mCLCCYNXPQZ5FbbjVESRGQMNb7UqycKbcGnREvf66Z66zZ6pRsDs3rQSd6ci5i",
  "key8": "49UQLwXwPnHUMFdtpd2Kpvqz8voqNcNthyDs9unVM2qyDhyB159VRUc7oDMsgnHAupiTT2KYTppurE2g944vYgK4",
  "key9": "QY6p9DTDFKpJvCNQiPgc4Z3GYHbKBeL2STxtNs8uVQQkYxRdwUfXCFy2wJasxfPiZGti5tz12e7VywNSjCXTKGP",
  "key10": "2EJkFziaQ9BmdfyfU9RVNqQqGKCRujPc8BKQ3CpEfBYNrWcCMT62NK4R4VkA1dgaiDWbQHGV1cHYyAndsGCBKpRD",
  "key11": "614ao3xk2yc1XoNe2nXhymsMJ69CDvdSr1rmbypY26cRpLZJVxMsMNT8owsMQmZ6zVgcsso1bU1mvkZbZRM4sJT7",
  "key12": "636pUZHourSnnmX4qtqYTATezTdNh1AFy2mR8kw3dQJ6Z3AK7LSsAzRyvtGJWAnC6oVEFZqN9WbwBj4nJPsqXHMP",
  "key13": "5pRqpA3GpQeYD8GFtJTWaSxKRxXJn8ANy8zvGoMuZ3E4rDCSGDspzJZ6bCjhgwsRJJisB88VoYfPF2d2WmJLe1Cm",
  "key14": "KJVTDKByhoaiRQfkczkaZ2BG3EFZJofpQFWwaUyk1sHCB21m7XXxBBXmwXjUVNBmjB5LCvd23cR3cYanPGwh7fE",
  "key15": "3aPC3uZVKVkhvwx9s1eHBWCGDjWTG1UD6UCuJpH8HCtw9n8U8FzmFe3sRCgGLEuvvSMsv2WhUHEFuDfE13qoDsv",
  "key16": "qRCqyZDqLZiAg2zstXjPpuYaKt6WMb7Lqu7KhbFbppwGH2WZ2Q9p5tq29Yqj6vHrgN8HZbbvaQXDUwfFPCjoVQh",
  "key17": "LkuY1AD2MqDcxWwvBYzvaV3Tid8mxeLfgGxrxWAwT2KejUoYJR7wNrxEFJ96w3RhFk8zENp2NGwvABQA2UmeB39",
  "key18": "4t7oCKQheKGTA2nRfEiJiJ73D2B3w5axRV2G6GGeY81vB8k8UtPk69YE6T87Sq3DUjA6Tshv58p9kMTUrtjfG8aU",
  "key19": "49NYdPxg4G3XAFdn9UTEfEogA7sJgpqrWnQTwoqQBrRFa4PDXcKP1Kg65xvf6Umm5B1o4yfuvD4MS7rJ8V1QDxRs",
  "key20": "59qziV83x41j4URhPCPPWpeBHvSKUBvh6LKvu7zrBfKro6YnkzwVZq9H7GBcsTSzgXELPpxZFq7YPEwv7WVTzcau",
  "key21": "MRhvwinaLQLjg4c2D4thNhYUQnS7DZbot1vbAEDtWfe76yDpZgoTZ8eANWzJfTe6ZpaMKGNrSaKu4N2eaf5Uy5f",
  "key22": "3pKBuhSot7sBoBZ3VVKJPsqbX4F2xL4eQKRm8A57wp3z5mo45cYD3aWeAzqphFPyEuPNRUWEsCH79zdJvBG31bd",
  "key23": "67SXf4pQkKJ5ZQEYMD6qPvbnKWkpx3S2GYmxwxH7WfaH51Am1AmYqbHpVa9gxKcbw2kmRx8f6FMB84SDjPc79rcw",
  "key24": "4oJY8EjbgddrTZwNoSB32N8a7L6aiBAiXikAzinXNrHuhJY4jMVS2Sa9cAqYq8GRPE6X4cg7SMPw4eQqqTLyEk8j",
  "key25": "3NBnznPifrBdMz1643pGUf94ziwsnvEiUzQtQYedHXn4eNfqFRpCTQj2PSadANQfe5WGg1qE1wHwo1Kx8xQrKoow",
  "key26": "3yrgZLytkxHnANYqnJfTegDox4BfLGHg69Yb5ZNrX2nDQUHntzbxp3xcqeb8mc6MrLwStVQ4KDxeP1gDUwgFTsMN",
  "key27": "2GP5QrU6tngJyCnAtWcjynpiu8UigzV1d8Kf8SAkEWeL7xcMEMmZqZnbrsywpn7xv3uNF5q9LppiVZr2mGqWFsbx",
  "key28": "3XB1fzTcEBAzAxrAy7mMgrPijSrcpeYKQ8V1CjK6hQUPhdVAKKiEbCrGqZvSp9DuCnvV8UFd23oNSB9XoN8KDVb2",
  "key29": "5h39JzdrmtXwK558xJm1T9jb5d9qzb1XEchTMDdrGQ5gqnrQKmFrft1mWNAAuaJ2ZLJk3y56UGYFYcUvpMHr4mJv",
  "key30": "5nYSfQdMYQwdG3u8KsJqueQdQi7d1gMQyrNrmKwUYmdYxUfmdFKsxtMHdpqvjCfgULoMuY4hmku44CoVuUHTRc2o",
  "key31": "4g8MD7bLJSa4Ag3qLcRX7mg3qHpZfsfynvBfizCHMoaZjG9fDXM2QWtL2NybvoMZ7Zx8Gw46466FsKEzQB5uFQgc",
  "key32": "31XDEzQRHwgGtV3gnMRunMHbPGDa9Fx6dU6mV1wsocdfhnSWe4AvhWgp3QhQ9Nr14WGcBCHci7kEAhTzodDgcJyC",
  "key33": "R8MUttrTB78MEHMRzvB4P2t7Uh749UnGLXzgFGyfuwB17Vnxn1z5A26oZbsbuG9RZSSEpdpN55Xr7FJZjdCkFfp",
  "key34": "icU9gLXp21UytKi5xFXm4HD2LEvCoYr7VTdho6tyK2fn3YEhTNfYbRjeb54YqzTupVNzaqaxci8P5Tz6J5z8c9M",
  "key35": "3YFBVvnZ7REN6GA39SqvXQcDKhP5FhFvhxXj4dUH81XBVfUwCfB1bjqHLt2qkdqoQVtpG9XpbbXLExWWycVnrvcz",
  "key36": "4waUUFcRdxVGRcEQnee8GFBDiVk768YKNhEubnMynJsX6G6h13BVeBVjxar2WNEYgAYUP75TxA4b7MhctrNM4EtE",
  "key37": "2UqAKdaHthZpxYLKxc1gfvTcn2x7BEhpGn9SiMqG7LbvVYWLwJ1sD6ivb1U9rjz7JHUGFNu91Yuet5pkG8AKzYzr"
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
