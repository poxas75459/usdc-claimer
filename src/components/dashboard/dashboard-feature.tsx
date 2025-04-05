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
    "4U2a5rY4qL5nxaXvsrFAKfY8xZEn5RPEYPqXTQ14RBDRwTVdAuKoBh4E5pPw8ayA5vfTVBkvrrRKkFjpovhiYki8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "471pCDqmzizPhjNvB96YsGQpRUyDsaf3LXtkXeP17HaJJTwk6ftfbbnv8tBAtPZjSnKTjZJuAmT7zXYwxtxRr3Wi",
  "key1": "45wtmrMvDQXs1Qao7qKumU7tEiYbR8om6bYVeFu4QXp9BBLVavss7ViENENc9gZSeKDY74hh51XdaiUVQRcrDRRd",
  "key2": "4VY8VWbKwv38E1cm5i3WT62SzCS3TReceCKUT8opbAvdoz8YL34U3BNLxmKsTQhvnUrWBN8eXDswTfVaqLSXT3Aj",
  "key3": "5r8orpCHqm3krHxVhQ3x1gFHyZ9tSovqGyXeDAEB3nLAn7Z5T6ngkTyMHt5RYG9FuTvigBquBg9t7fCBenwEMzFA",
  "key4": "5eoX1rHLyDk9UsEGJZ2ytKMrK8UTU8SQpaDJgUAYmqLoQHqnUGzHfyuxxiwU3ohFXJ8BhU6xk8Y81MXg94XhJsS7",
  "key5": "5rb3RsqnZuRkeT8VKB55XPx9yY3nSgdJcJuNNJKXJmU5Ttit44CPWSLZKg9q8Yw9con2JfWZh4ttVLWfp9NQueZe",
  "key6": "5NWesAjJVB7K3ZnquS7SJGx7TxsV6Traih5xtJNFiSW77HWQtcPu7M9Sp1GAQH35G3gxFrkKySWJf2KUMWr26kAZ",
  "key7": "5eSnULWawVKv358ACSkQRCW9zx8Bq8uzDzpSK3EJpKgokYPcT4P5vD7BVew3842eBtNCSquGWFDBxjBKefeLbj4T",
  "key8": "4fsSy1BGPx132C1NU2NzhonG14174fDebsfE1s8uvUFLxn2jn96rJsDYjsdiNjsFg4ZysvkqB4vj8LsfSXAkvQ42",
  "key9": "3eSLY3M555HK56PyRn8t8FebvC7we4SbbQG993AjMovQWjaa3WS8JBadgS2n6PkcGasyTAsd6jZiszFR4yPx6x9h",
  "key10": "4fYZTvrRMRPzyUhpCHsgDk5Li3AqbGmXNeGR2e2dxpHBEQxpRf4cwg8HACqgYpDmL4XeReYXjgxr1m3bprF547y6",
  "key11": "3fP8LWcnxijSAqh1rQ7d6AHPbWk4GykHszpVRr9YJVh2wE7tPkMrCfCyMb1nFnwiKUQQYGodBBWUwip3dYyvKwAc",
  "key12": "hZ5fzeucsHivTr83aPPBqEYYgm2Mn8QWqJGxe4PASNUnaGfpRp9kVB8mm4fove2CUc8AaBbA7XFxzt2mJa8Apg2",
  "key13": "4abM4ggdfrCugqPUwykoiUBescJvj5491WHKQcMByw4ADSxgV6sKzdtU8nBB1FEQwXrjiUvZmrKhpyLkMH7nnkPS",
  "key14": "3Ygx7FGVumsN6xuAg9dStNuJjj6MhiNenAM3mLTsR5ePxyy6g4jdmyyqE2Hu5c73twzbJCwigcoQSNWidRKPm3pf",
  "key15": "594f8RH8npfJx8jhfSPUQB9Sgx1jVNDmcgsvsb1WYx7YVpKo8zTni5dECGcqHZrXjTkyUq1kZdh2Xhbj7jVbV4Qu",
  "key16": "4cwwSCivRpLEDV3XP6t2gPtEk1etDwkKxJDk3E68PFgER5Hjtvae9dgUwRpKUVhUfmVRWzDWMDD5RB23FyQxE9zj",
  "key17": "3QKgZkv5oVGivH3Yagr991PrxwAxcfyZoomsS4y1CdEMi6xTVQQBNkxykuXHFPksyzxmW6mjmp8kLtAcCYDtq5rR",
  "key18": "4vqXMBsnyRAxyZfqk5WfLa6Qwne5RmoRVefGkhvViQKke8QmQYE2W3oZ3hUcXYUgNYBeXoYxrsyYcmwbPBfKdz1t",
  "key19": "Vpwb8JkPs8F6bSh2Rk9dbc4mK1JCYZUnF22tyN8rspZCG39WjZdMVwCvgMLPLYLkTFDaKZqUxmFHdrzjQhgp3vJ",
  "key20": "qsbyKNWJMrmpEhhEs1XX5iak2QKriDQetF9Pfcdm19v7koZTYGiKKapSLdwMm9BXRyTmi34D7ofeiq88Tt57oHE",
  "key21": "5zYiaD57mup15CURG7rd97sjA4DgqNAGWuo5JCdUSSKgWSUFS5bfyXBjCmWj5jKbpKF4dbJGEzm9EdA3r5JkcT6Y",
  "key22": "5vFPeCzRfezM4nzJk8CJfCDMPxNmURc9ejJfrMgjQWMoNY4xzXbWuihK4S2tLQbVw49ZKwhZbxqxBetSfyueo3XX",
  "key23": "3ydQfKJAQdq6jUeVnNbZz7tAQFPKHVq6RC25sb54iMvYvi97CNzFJhTDasUA8CfwDSdjDMLd22zbyb4mRkx3X951",
  "key24": "5TqDC9a3fKCBi3Rbyt2YTYb6iTvaMvCAjzoFFA6VP7GH9QBKqmQ27uLmaxt52YBZAxCpebKKrEEHx5zFoCM28AwU",
  "key25": "37wvhrRhBVVVXHyXy3k8GpsXMYUdi34f6J5hMoZa9SJUbm7RN6YnA7NJj6GQf3XH3xDHJD2Qa3HS3KXn64b7q2zZ",
  "key26": "2Scwh1M6YTG5D6SJXzA9Y65jTn7zUjXn3pyiTpPzqPTcPpyTZ2riv76hKK6mrUHQgdGsCfNkVnkJ8LuKbp9vrzMn",
  "key27": "5yVQH1rvAHcmznxQyX9TgHohktEwLK4ZHsig9fFvPq5rfDac4ZE2oN69M1cMbhtjpCKdM4yYQDSLz4PsPH4bP1hc",
  "key28": "3bwPpFYkrvXYpW7hJzYjSFAAVbyU1cQAZY4xDBQkLqQ241otSwZ3RMQmyRqRwfZ2Eih7PgQKGQeXAhhtwhkRgAXs",
  "key29": "2QDqTmmAYgoxNw36s9AgnKHTh5nw6XCaZt6zQFZQdDZvkCEweHTGXUpPHTy6r7ja23BSysepTXmD5TfQbiq6ee3y",
  "key30": "4aSSdTxvAfZm2SYJEn2drHNiseCYUyn2bstRaFxq6M7T2MS6EQhZ8usumTMHbDxVfkkQB24sRTHPGR6Koqq1kdiS",
  "key31": "5nU6nxK3CGLWbKBzRX4xGa6LXpd1537Kbmtmbu4ZVYLjTNZxqrFPN4g28eUtqT5zdYMp7yD61heh6oxYGfbRPoHu",
  "key32": "oB5xryrL6GszmZ3baw8TUb6SZRXFko235PFKEP2fSzkppM94kdfJZbMbDdAbrV49sq5t1kY9en3kzY1qLGTykTJ",
  "key33": "41CRJgpkPBTdSTuPucJoznyKQn9nZZGFsRixfFQhDAUmkEzrhEcd1uWqm4zhVSXfkFpqDQ7D5dLK3fQQrYcM8gT3",
  "key34": "4zWobEAHg5bG5wEJo2oWE8PRyTo7krmLwT1zQaAUbqftxgxv7UesmZUqdheGeJQ1WqJjt5pZEwxHE1d59BxBVnpM",
  "key35": "3eKKxNnKF5kZsU7sFJLtJPu1q569J4Bbiig11wYz9TS21nNVivzmMSRpd6DPyMxJn77BJbAcMy36YN1SAWCqhfKc",
  "key36": "3xFHXV7Yf1TMPHdpMFqzgwvMPvXTHLJzcMu4SzEKQh9uLV6rz4hhuhWecHjqmdyNz7dT5t2xuxW6k3YzQGBPGaBa",
  "key37": "6b92qXri85S7uTgcbHmjSWjmzQ3gibVk8qbWQsScTaYaMNRGvj9ym5dvwadggVpuYMukdgysBiFZt8DEPPPHGSy",
  "key38": "ganRDsPgmL5qyvqNnHmk43biLgjZqwk44BzGBD4cB2BkRLKriBLKDfzShp577WtYx6j4NFMBpYsLUMT9R6r9zq4",
  "key39": "5MGMYw1CCyHXrehM2YjeZAgryF6Rh2YNArHoE5aGKSCjKarQ3RMePiBX4yEFKtJRj2PLZ6ZorUin8oWo75jqW9Ea",
  "key40": "2YZ7T96t8PjELGUkWdXMpbURhhMxk4YeAhjJ5Jj88foyMd2dcmbRdvuGyLwdjTJyNo1JEoXSxaNv1DBjaiWZoRQZ",
  "key41": "4VMKcMqm8DWd8PLScfeoM9YnSrE8hGWTceN3kJaDTfVYoAgW4YWaKupbgJ2EmGnDEBhbR93mewBFnEQ2FxtznPnn",
  "key42": "3d6LFGPMoGY3sxkb1wiX54Eu95oUoL5yFWHej2EH5KHTD89cttwGVmVcVcUnadkYmTZo9oY8pELLxrRaw8Gzjjba",
  "key43": "4E1bqaS5XK3iHSAAZvCsyEnaKiVLTEkbiUpfY6usmU5m3y7VC68e6vLMFBTnm1FAJYjFoRJBk6cCmWJ9CBa2hCtF",
  "key44": "8f7HgGFu7ApHZfgg1dKgFcvY3vWXzvY2i96VzE74BqEmxd71LXps13brZaMWeAQVxhFmhmHNn4rfnnstHLKKtuC",
  "key45": "3JusW2BzVM5wNkEQR1QAr7SEyQLchjkDN9T1iB5PG1nBU5N8cJKkuWh4g1tR6giVVtuHMKmSDhcEZLApVvdmbC12",
  "key46": "4w3L376n5cFnFnL7gspVypcmhoyGNV6FpmrYRch8vu6ojxryqNnmBFjrMbJTAn8m9sfngzPbxQHmtYCy9kMZZXzn"
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
