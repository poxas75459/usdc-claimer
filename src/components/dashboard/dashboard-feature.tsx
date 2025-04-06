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
    "33H3Nk3dALNbrrgc5uycU9J3Sp3yXNb7C3Xa62i4ZaFnQybSZar4rN156wnmP2HBMw9ukvxem1G2ndDV88uJAAoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sGtfczKfPgcWvs58JTbWeKS9nY7veeJuLpxAZM6pVdUCUjk4rwSSkESA76wGc8y1tAh4ntCCxwu4go81opkyHzQ",
  "key1": "KJCpapDipCP2uNsT78JFchJARCHwNUsFDsBNJy7X6wTyerMqqm5tee9y2f1yT67KaXiaNmq5dhCukuNJDE4FeLC",
  "key2": "V6Ucr92Y41htwu4p7tKKzYx8CgW9bR1qjQg5Nvg7PXo5ebSSdrGVnVWZtRLTfxakXjyAVk2W8SutVBvtWkjtjzS",
  "key3": "t5boVw23V6Ug9RANTXD15TZe62LdB7Vc2gkrZzHEmTwVzMUqnUxaXYean6SmJZX8FHxfD3go6omvNhEN8yRQu4q",
  "key4": "5C4Yio1k9NWBAaSkRP7CJH48TQBPH9P7T8m7qG9rbT6zfNeEmzqMCJrumWPeo3WfgVBVue3TNXX251TBv9swwSdB",
  "key5": "3uqJdamA6bafyPVUi2k7Vhh3EzUnSfBxc7LQWbQ3wdS2osannv1j6ycRCM6toxFbsCHW3iPGfKw5a5ZEAkaeirAT",
  "key6": "THLFz9XJ1k3s9A18ETWRGGwiMQxqFeL9LRAuqDUKx5G5N8XdwKgXXzSm3NmWMRLM3T3qAcuVGCANSNXsFsU8HD6",
  "key7": "U4M44fYfH7XFsuwkbm9wMoFXqKQb7qV9rHFKxDzL4wnnQcD57b2nJn9LdqoSeJ6VFWwrHakGKzYwD6sEpXQoYZV",
  "key8": "3Zwm4AyXUPJZJyFkQaSxaMdigkK6XmSadCgcVsLo9H8X3TSyXZpck27GaHgLaPHKwbaDanaiZjQc2Rhq7T5cRBer",
  "key9": "2KH95ywDG3BZLigftQboAEXoF1aWV5v2LFx7rjJZghASQiMnneC9Mnfj5MFFQ2RGV7SmeotmWXLmgGyQaFt6Pj8d",
  "key10": "4JZTrXrTPaAaiqcfM86NRUUcntRose4y8KEQwSctQXkiSexPCUbLAevLcYB8ywXJiRo6BGX9vbQnBCct5fHAbaEi",
  "key11": "3wbrCTr3A7DmV1PGdCxK2ZXBA1P7pc6i6prxZq5adwC39j4x4zcw9cvh6Zg578VQYNqK6RCMjjtigJRYvB2QgRpk",
  "key12": "4uyLPpJhtrDf57PzyDwtQb49ZBxQWvtM7pM4Sg5uLrdz9MXTZ1Knd9LYNbct24C3XCjS2TxrfVyN37sKtXPAEHQx",
  "key13": "R3pBmBpQJEMr6D3LQX9iR8oEAHo4ckEGEaJk2bDEKJXjMJRw3GZXNSKf6EKZyyX9Q93hvY8jxQZYHqC1dEEcsLM",
  "key14": "5u5srLUBSkc2tmEuDEwJsmnFz6PzPGGJW74MxjCmJdprejW4qUgJHrW61bZiaj8VMACgP13Gr3ydoDBpR681covp",
  "key15": "4cw3di64u1WgyyAHebaXbm1yoNuPy5RyoYHQKmGnHGA5TXVHSWwPLkg2AQU7ELHKRMCcZPJXkCHPKPQ6n6qWUT6s",
  "key16": "4bUcodLDU8wxAZnri83WT2g64zB6k8eJ1JKQUtr1M52QoKqHWgQJBSV8YN5JMTyez4evAY5gG8FknpgzQCCqwFTB",
  "key17": "4QXotcQGsebtbShu2kjFzuuYUDm3VUZJxhda25bxBtsErP5Gj1EvZAmVmLmEp2pyLMKNJSsbkzqKPmEhQvzBEiNT",
  "key18": "a4ua4LY7ioCfTrv53prZFCTgco3jH8BwLz7aKN18VUqLBEAyrUHhYY8xbzdJVn4pCZeYaY2a5hpXfCdP1skZDPo",
  "key19": "2kGKNKNxDmZ2JvmezPK7gKyboAD8fg8G3cNT3KiLLu8kNgK42Da3si6qpkpZZC44jYC48Q96nGHsX8x5fbWJWpjV",
  "key20": "2hDZ6YMe59ozVbvtd9CzAXuxAbVmbsrSzDDbqetsrm7d8Cy2v17t5c6WuZuARe3p4ZtgUbV9XAjAaR5NgNfUNvV3",
  "key21": "465fq7LEb8Sy4szkLjA5rq4jMDB2rg2bhm1QKmLAKmU3WqATyX3a6cwq6P8vWwXqfnaJrXqKNimHF2Kui7FEeRsR",
  "key22": "3SkXpkxfdhgNgyRS39HKbTHoupWnZSbsFvJ8kx4LhcVAKkvFWuz4ghN3K9p2k3RoT5QTKwMBp9S9PhAe8v253FzP",
  "key23": "3thPc92A9mz1rj4VWSZvyG6LLNrL9FyLq2445Ux2iBzju6mhM7w8tuMYUCdKL9XYq7MX4R8KSKeoSrVp1XTeYiC",
  "key24": "R3ojfZFEDmYEZ2kcR9jTAdo6TstusRJNyTTNpYLjkBVMcHtY8cmz8pia3sbvn8wsccvuH6799n8c7LWryioJiyj",
  "key25": "cP2hzZ7dxYyL4zk1UHBFoKJop2pxiGYsPCAcf6njoYjpr4wuZSvwajeTucvhuS3YDMjCf1GixqagZN1C4zi3NQf",
  "key26": "2yaCcU9Q2jHGy5rcXouhVodUr6NeyNiCuTdWh2GedUDkNxEMY8kKshoCJ76kf8LpuFqNDnF7bnXXvri43bDCoVQa",
  "key27": "3DjrnbtdqVFc8s8GFPSfnUAMLE35oR2AYiQPKZTHiT1keD7Y69j5teLnN3UPTrHDiHgUJ7yTkf1HeLUaUDGGbxLp",
  "key28": "2zhmbx2txBaoakgDcu5e5u78o7VLT3vnQMXfMMwuy2XHQXTucdepGrmqWmC69ciYdghJ5ERaBGbAa13xZXupdQyv",
  "key29": "5kr8XHW6Uuqemz5q8sCoS78NY7yARtrsuksCzz4xZj35a91QbDGEQWk12U8KpPiA83heCWqFfD7KLydJuEmtvsL5",
  "key30": "3UiXyRjiMpYwDWyXWY67EA5K4QjvNp4jSzLFMXZdeFVRxFG9V7HNyX7SDoCdtveF7W7R3iqMQQFygtwTQHAEqVA2",
  "key31": "r2hXFf77BhgYZapQHeA7JdhyFDZ1NsCuMNUY5FfWVN5GDL3idNSMMorjGC2YPWNwujrTjxTuo68G63v2TWXCh6J",
  "key32": "5kkSVcXVrqpoZ4qWFUMx6q8euv4kz3psNNwBNMhG2BBhDixHvUQCLXXrKZiAtjJwqCntqFuVbDDJ6bjdYdEJSjbL",
  "key33": "4EQVuW2KFLGRJ2kz5RHBNk4yrdHnL6hUYB4cKsP1xVR2yjun4LTK6kNuE5jr8AtnYCybZHh84ZDDaXub8sg9uU25",
  "key34": "22DmZbZwDn2jXpfJanotHWFRnurE1iMH3UC2XMVQnbrVxh8ZZWCNqBDQAjrAjK8BwHREveDscEudDnEF2UgDEPHN",
  "key35": "3S5ZZPvXAGdLMWgCy66p12Rw8qm8nXXUUKzU2A4sCJRTmZ4NdHAfSXw9NjXnqBUZt7SjfvRF9WFw5SBLvALw7CKQ",
  "key36": "4afswSD5XXJq8Zb2Md5NZFTA9T7ibWuXCavFYbASCDaQXc43VbNwkkNmzvm8PfSLQN2ajw5Ei19DkekDDHSRKJrC",
  "key37": "5WCBzYCXQWMijJJQ839D5NtAdL4n2qwEeiSxAFYVZMh1DY4xir4Y8QyVgNz6Q9rSoFpfxqzjepaatyM6XhuFcf3Q",
  "key38": "nvfWNYBMdQBParnb5eYEvppUffS8tmpugu58ZhRzFtjXyDGD9UBGUuWMwS9TgcyqVvEohRWWvxYAs3DRyTcro7V",
  "key39": "2YHGL4PVSm3Gi1maRNHYFJbvkr66vhAjE8rf2mdZ7cugjuLmvSuxSmfNmPS4UxNihEbMyiL2gbtzRX3ptHdK1sF6"
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
