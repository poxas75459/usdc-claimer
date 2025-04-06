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
    "5UJwpUh3CTwks8UGsM3qZYVABtkJQd3MsoJp9kZYZr23TdXX3VSTc4frLVoWDsqvajxqhkaKDiXneo5BRihaHDU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45egoMssA8868auzGoZj5KfCcBjijsE3VsLkUE7usU9ZG2A38zdiPvtJAsWZjETqhUHmT76QyJ4dtCWE56F8xTQ7",
  "key1": "KGbzXRXeUn3hVpuRvwSpauoSZqoSdByRCWio4hk8iKyEYF9T6E6eBj6ujM4HJZCQWfuG8GPmFUBE72MEyNYj3Sm",
  "key2": "2yBabi2J9JPQDnm98pCS6uaL2fLKGYKtvbPDtebYhFEZxod6JcskQgRUWEce9ynaX5LXrVkjvpZbJqrNpXd5mutw",
  "key3": "3E1DiW9nKUNdTe8KrTCN73Xk8HWF7PFgPSVbPvNPvMLEj3XZomVoCgNPUwVYDRMR4dxfrfYUFrKjdZh1PDSo5kRX",
  "key4": "3WN5hfZZZkS6edbPXKKzEyPVTZQQtR8rbfgsRJsY4GR6t8yJ6yTud4Jafaie9zZ3YhzhkdHZv1Nz4ni2wSq2HRjR",
  "key5": "2ysSXuhWXjPKcDqYXZuyL9WoeMYA6RCX5FzsS7zBpE1YtReVWD6VSvk1UQAtYVQbcLzwL53uS9uqJhHrgoSifRUn",
  "key6": "2MCG99BZDX4W8Ye9gCBvUape8gCyt8sFwoo22zWRZRQreiMuVraE95VGP2rapTKfoED4dJKe5akJiJoYpNqHan1b",
  "key7": "2u4G3hhnCFnRiuV2VZDs19RsLCnJ3pG4dmZbYNMW61JKmezTY2jNG8hPUJ3ZqxWWtyEcoEWrNfydB8uXH9Tc61YT",
  "key8": "VHp3miLF4ha2bZuJnjeNqkG7u9MBoDSfyMwuUVqzKtSp1fqrBTkgxAe7crvVsrhQcGhhdkrWJEYo75H96skJ3zM",
  "key9": "35Pb26EVfo6DGqsC2Fjy57nEbacHvwu4frd3hrQp6Mk2JWKuDAJQ5SyYsQorrDc6GVd6VwBYwA4sRaynUbUq5v6D",
  "key10": "4DX3JKgFh9EgkjLya5KDrT9yPR9a7s6DnCgihqCWLeb3UYdu26Dxay34dfHBft7FY1ycFSaKSgNKamYUDJ3oYp1A",
  "key11": "4mewCxwwzkaUdzUGgnS7dELMfMyDPNCkEhUxVzD58HhBEvSPiKhBgdjB5mFNLXoEv7nC3969LCYK8KuXZ1gNgcMW",
  "key12": "3YCZJ6EuH3hiDcKhy2W7wafMiemxJZqQhdcQcKEmMWzx2LhFZzBPkeDsQ2FvGm9V1NxqBe8RunBncfYhhrRMxn3V",
  "key13": "33FnpZy3XWND3aYxjAPU7Lp4GzS9Rd5ED9TYTxhP5e3rNvknFECN19CUy2kUBvTdDNRVAZxMMWAkXyfNzL7DbQCS",
  "key14": "4coAWyA7JhuUvGQ8SGxyjfoGWmW5Qn7cYxwoA2i3wHWrf2i6yQBoqNf1uw6WrNwzuLnLKxnBpXTug6hLNLctqnp6",
  "key15": "47K9zQ34SQhXYW5UfCvh3JWWuGdF2YSuCQsCSGBQg9raeqNjsccLJDK7tApYCVaUtoQt7KJsx39nmQ8HHi52BnPE",
  "key16": "4BGMMZHNEMCm3ydBAZRzd8vNRJt99hLXEFudxV8UQNLgrjfVKMBxe4TXcv5K7EJwaciyLudzE9hhdqugQPVANbuC",
  "key17": "4uvZrxhswve2WrPyRogKiDQUT9Gr1t7JM3QFxUpE4mLNhh9eKYP5iygzYnx1aCqukg4CtLEx1iFGJHn28WtTuYuK",
  "key18": "ieTYJk4kSci4eruqfcpGLWTUHbkFKKKcNUudTw5mLNAHfhj1P3Hakef2zeQQAioEBgVFa9ZS1w5YidwVXpSaQaP",
  "key19": "4r6B3gL5eC8cQqpbU9bFqofKmsCqHnCeZuKjkJSteD6wCofMk5X6n6T7RdYfzJw4uhPDHE1BxtnV3bybaY2LM5zN",
  "key20": "4nUbnXhscyy1mznmAc8Ay5ctHQiugR4PozeSUijccaWXT713Qy1b7LzV3LQYHfQDvijft8osW74FXChCMBYrdYKc",
  "key21": "34ea2ZJDeaUvteyFuJDmEWsoUEUzUmimDUrJSttVrGrAvnahX1TjC4ivrVh4k7FPZUWakLBGac7R2pSfTNJpgBUx",
  "key22": "4MHRoBiWnLU7DpTPQkM5p9GBDqNYjXL1pZq5YsF6S5TdPvLAgg6HKpBRXBNaNiHNxEGdsA5uXWbRm45mVkuAqX7u",
  "key23": "2mmdDUrzd1CX7AhVdWUtfEAZzfLx32VPni8z6PfCjiZAkYQ6qDHrv1m9C9Ga4fXeCuNPEGRMjdoCM8dotdcUN8pJ",
  "key24": "5oG3BNUVgTTHhtpkEogKxKNj5C9KcvJ7hEuSLgzcz9NkRTmRafBryCpz12KFJg99c3qVeTP5BYK23wdVNwDmc5PG",
  "key25": "3RuMob5pkaJe13MfiUH5e5xPGhXUb6qj2PkQvCX9RRQen1QRULihHiVjT9nRv8vu1NqNCMEgtm7fF6guuymz2H2i",
  "key26": "5KunHJhEXYpXVPz6eA2JsJqvWGnqFWnDALrounk6tNQ4g18M6hSSZMz13PJ48vkMsRaJe4NvHenLP3Z1YdVfncxv",
  "key27": "3QquZBwKQCchGWhXFDR46HoBY1rR3MinyoS2EPeuXDxXdxw9kFnqV71RX1W1XLLu75Y1USWkrnR5qRR5BJpL3xXC",
  "key28": "2NCZXYtxFwZK8cXCMkV2Un98mxvaYZvRCsUZMFjK8QqgTCq9T4uUsCQvDh5D8fYmZ8PsPLrSa9hBi2fXpqnD4LxX",
  "key29": "4TUS3GWgefcjyCgjbvKio3xE4nE8mYxZ4Hzd6bRPuaN1vFbbSoSrqJo25f4HkyqFjaLFMKmYoPK76eyy6yW8k6Wg",
  "key30": "3XP5pn1KhQXUPUSgFy73ZSM4ZdPL5P63Tct5R58xssYFhjJUFKYsonM3nqGkg7pKHSkinX1Vg1kEW3igAKD73cb5",
  "key31": "6JjRjgvMdwhaP8Z6EcBWfu1NwPDJdQ4WHys5nq1P9ZmFB4XbaTQsqbaDgfKXdPqtDxEmg5m3hNLaE9FFeRfm5vk",
  "key32": "5Uo3e5Pa88WVzvRFJQuEk43wmPU4CEyHfqfx3nHuEdHwviRgE12D4kCEmMaxucnCi1Ucv4HUBSJfucQKyzwEuk47",
  "key33": "3s1uth74kbHFXHErMbGBgU853Jc92yUcUEBbV6ZfywZjjDXmMrxgzX8dNcQYnXH1qnbxx1DHAvZt2sDRH33HHZ1V",
  "key34": "4xGUGT7uNuL71LoaszASqUjv7wfHvCg1mWoZ1jAKU1R5apMXdfd45Y4xyuNsS8FRc2C32BvyTieJTF1K1wVyd54c",
  "key35": "2oJ8CL4CWPajAG5z1pscXqhXUHjFQZH4U4pYr7kEAQ8dG6YzJraWq1YqemVVaetA5kyCEHN7RYN8wKD5YYxs7xzD",
  "key36": "4wPGBXYctAVXPzvhFmzbvErupJy9tZG4BtYB1GZj3MvywdJBL6CNzDK2Yhs1VKRf8w2ekaJzrE5nFNtMPEdgf3TX",
  "key37": "4L1ezm8pyqsN1TJDH4q6mh3pdTGA5KZL2YN2BEmZBLx6uqN8z5jN21JMk4gdbZk9stHBj26h8r8BsWxES6X9Nxxz",
  "key38": "5H1EKAFdCujFNF3Uu7aBQT6X18yM3SbJg7k5b6ZLLVDuaHnhLdi4YKEgaZpfzcc3YrgS53GTXvzMeFhmnsLqa9am",
  "key39": "3n37e6wAmVMcfdSWn8ZcfVnBJx2jNbNqTQ6jTuXcjyTjiz8AY6m9sH27T9VLvKDwn9E5vVre6Be1vXBnssWhmNe3",
  "key40": "3vaVd7niK984KNhdytpuQbhauke7pNoj5iKpZrm2hzbeMQo3MvPKqVZGRds5HLSHK8PJm7WejyctHWjvmNRSpUG",
  "key41": "4dUKRHgv6N77WVyRLn9qdnifyEHhhrwFwU2UvtwcrzAqENnCJsJtQXCsjEYkKAuKw4r2PFUp42SfnqKz7oCuBphj",
  "key42": "FeU6KnJUfm5YZSswKJPdq3DkPDrvAxJGcCoBTbSit7zPv2rGuyyL4GLw67sc6c7NMvGbMz6YrBQGJeoNBzVs5De",
  "key43": "2SHPcnexY7xdn4agxGTE73soaGM8cxuXBAzYAZ6mDhhH9a4Gta7sfLMGh8znRnUZEBVYA5ZMoC2NT17p4LJYXD8K",
  "key44": "74C3egiJuqHG5EGkTNrWhuPCeKPbnQcKFhXd4P1JnQhWib8tfHy67odRNp6vMQcN2LFqSm7kULA5a5tPuG92Y2k",
  "key45": "4zqcgbcgTff5K7JTKsi6Xg3NkUQ9sGryLL4cc9bjeYZgPevPVDey18nWnWCP8QmmFEN9izQhhq1yf66WbmhVSrd5"
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
