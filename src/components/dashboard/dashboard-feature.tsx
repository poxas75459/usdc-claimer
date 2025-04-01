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
    "2njd6HokUS7XmhoPJkPNcmjeiPTskVdognCnznuMfoapKUjgf5eaqXRHtKcxmdKtDBuuDXE6hZdPHbVdfx5JEHoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35P69LLgGg19h7fduP8f2BrMr1CCRVYQrB1hus5b7t3u2uqm95WzWbPbYUKTKaa4qqbeNrfvMaC3MtZXAF4pV91r",
  "key1": "2mRQc1tViWE96urGHfbTLKEcqvvDCnzJL2JAvAu3FCxsWos4z97GUiQx3F1Kr6oK9zZ7FThvhwXbAYAubEZ7D6h7",
  "key2": "9xBQjKugt7hcBWFdfyAUFE9EnUhtJyFSgybYF4LwMgUG7jjRKq5bS6z7iSDEGkwLTdHL28NEDHaT5ne8uNXHnv4",
  "key3": "tVoUSrJ1Yw9BcuxxgPPYdsqtHHfr1eyhTjN1w2tnSWBfdqj8oDsy63cBEKSfKcHSJkpJBDNSWCPUwgegCxehXA5",
  "key4": "24KQr6dSuR5aeQAv8GFJM3jjiRPm2hQJwWzrVYfr7YtkiuyAXXiwBus1ACt8KtjDxi2axfTWMmEnWs6yWuS35vxX",
  "key5": "3iWdXa2th2qVmYBxw5GQByDcPzwsvpcNc8hLD8p2T239Bt2BVDmL4ez3eHPjYtCmQXaCe3JPK26EphPbjghaTU87",
  "key6": "3qtDiecLFqFRMKKnXXDhSeRX5oQgTeKzh9wMycdowbpWqYkXxbABJ8p2PQaHSRnNemEkVPkvGALQf2oyk9xShSCi",
  "key7": "FLoC75nYhXWSM4kYDrpKy7XUiwd3Jj9dZQdpKxd3zDX3sa7kAUgiMPk1bc72hpX3EuN5RjLboK8v6KHxffDVamk",
  "key8": "2rnZN8kXu2SZbNed52CaREStP8W3VnRkUHJC7yNpnwG7zgQfMhzf4AMdLkmmWZqtQGzaQkoGPQB3m18KHXxNoB3Y",
  "key9": "xSytEa47xWWn8dnbv2oGqRNnbmS3fFtyS3Nj42AtutPVBKzBSeerFYxctpr3iXaamWCueag6phkB9XVKbNFA6NN",
  "key10": "4hzNtt1HFHo5G24kWWGR1wH9T9KLpmegyXGzKducqMWDqC4mSoPkJgYUS8MmWqDD1KrC6eodm5C2eieTWnLR2g5W",
  "key11": "5FA8YfxSPXHiDCh6MPs6aLDcGWZTtMdauv4vk137jRUpbH8AqzwpApvBc3PzD9mPeD8i6Gi1ou3dKMSc6HW6Cxye",
  "key12": "4zwU2MKvviEni1FKDccPnPPheFJfxWh2EEbvymQtR58ukQRhW5TBS1eYsBQAfCrf9m2ZomQZzUEwKHbqJzXQ9NE1",
  "key13": "2Zr9vXSj9DHy9cf8TZUjdJygZnGg9yNKryVdfFVskhBB7yfEf5kyALmk7i4bjxza45Lv7aFaFsNHvsQhEFY6oBWh",
  "key14": "4ERkZ2oYe1FqjTQ3gjZJuRB157szhjcEKtVJf5xVr3cGZ7UyGQidGKErvrHHWeQPXvcujN1DTARCUQE7QL7j9q14",
  "key15": "5jjtG2MmnDrMPwvRCNctHadk2tdN5rUnee51be46eME4RG1zrGz3ZXQ88H7ec6wk6WAJSso1fFKX8KB2upntTxMz",
  "key16": "LzW2o7pf1UVzEXLmwejfQPwMScMpuXxEme8sYiFj4jEPU5KUxgmPXojTmZG48qzgFRMNTgqfcqonrApTY4mH1RR",
  "key17": "2dtKhUnygDLbtdTzifee2RAhM41jatL5mvyUKTpgpdDNPxGUTGRZPMnxB161o9gA1WrpLHBi5VnvSTEnveWoRHJ2",
  "key18": "3ZmAqEmCDyeRg5kbun4CrMn7f8SgMJBU74St9gwpZAxsjjQnoLk8PXBxDGWMzyS2uXk13vyhZ9uF9qAi3hGqZPPq",
  "key19": "3Udx19TW2TWkWdUCAsvwdMh564dEVRDjfeLt6hHMQe7MWoonCko2PhVRs3KBCb4bHntEp1HPWhSuD18zZhaQ27pC",
  "key20": "3Enj1cGoDnHUHtWAx2QbfyNoTFNfmPidd6GLu9XeV7LnMLyRHEWg7vJEuwxYCseDVFe3hRXV6ZA2Rhbf46Xe8s1t",
  "key21": "3tLdjtE2yDHktnavZfTvXTWrFTe7YMBb6HudSuS83zvvDXZrESuKAsA3NF3HAy8iiNg8VDBVWybi2c7K4k4p9LtP",
  "key22": "3AdBLx9WYkhSfxFWMcw5VzXAV7tvP4gddXU6ehqtjPT8sDjm5spppug7Ak4Abtvqk3Q3QFJK8DypyECqDMa3ioqD",
  "key23": "5jcrPkFxMRNFdTqaTn96ywniRcyHMLQzewmoStXxGXpp2zBD8EeMDXFJK7e1eXNSieCFcv3idTSbnPdKoqHmLzZz",
  "key24": "5HYTLPAeaSYpEyB236uWaq5c1GKJJk4BKb8F57VXNi78wKA5p5s7H9hN8A4gv5xYS6yTcp1XJy8yow5atDHtbzAM",
  "key25": "4xGSKea7f8rDJ6mQkWWVeUH8hvRCxn2jpZDGWkyZkheBjfnopNeEBWvoGSM6mFkrJi2z89xGfShJ3WWG1NDbdP5w",
  "key26": "6H1uj1f2fxz3Rtc5ChJUjbW3XSX4JeqbPdc2hJsdvnJyGTbgC64LqVFWE4K7VqJptRWytEzFbzCoj6gboHSnqcK",
  "key27": "59vPXHJZY1QnULrEzbfwmV4N16UzF6DEaZZ4PhbJtZEm3N5iKHbx6Xms3BGL41RcarKSWPk5hwRM7hx48RXxTum4",
  "key28": "3EArcyBbLwnTLppho9yqZYPfiWoisbRND4qsY1hmxudZCYigW9Bp6CsRNas4UZN53Pgda3EwwTzh3wPJgiQAV4dA",
  "key29": "4ZDt9PUNBjKtuHWThie4hvFZfzdXzX2641EvrDcFktb7dVjLCxV91V17UVG3WD9xttZS7Aq2AvoFc2PmpmVAsBXj",
  "key30": "3gvsmgsbNLRag2SHdqvKmdyHifEbL9zDUjnzqLy2UXyptdZrwPKSKKgjd7sAAAX3jmXC9Xw7Et3mNu7cy2VyfCgU",
  "key31": "3288eNZqELckKCggVs2pzizSvDGw55HM9EnZ5u2Lgnsc5YHAumDoiyLmQdwVXJWZGN21YHb8Y7B2TJVQ3cUj3ZgR",
  "key32": "2AYf9gmUZo8BKMGpG9Ld8BhvACXXPeEqz5dYPhQELjH4PNts7zXmwB2LZWjwRinCHEXrnpAktE3XFxfLMe1rtrBs",
  "key33": "5ekAZvkAcKX3AqrCehVRcdwMEtFyZ49JQbq6wCfPSrgcG6BtiX96T2Jy7ri2BrKbwn1ys66qvPG55trVRmoTnyju",
  "key34": "52Qshz5DQqtAMJNdyuDQ8GZrzoDS3cM2SfLf3JKDiJeT1c4tFyathNioumZ6cb4hGVdZLZcJL9jWMV8z1HHo5FW9",
  "key35": "2fDaxYd7YzjuWb1aEjTEGwEQ8U4YAcMVCuUNMDZuTpGbNiuyVsfpAgwZCPseGVCz41rFg5ZNBpV6vvMjiMLDj3zt",
  "key36": "536CHP2sTre5q3YeoSbjYx6aZnon91K2HUdSxV3tK9NySb2yDbCn1WkC4h8ZNZhqKJ6CvAeUGfSa64ets6QKqHwR",
  "key37": "2XHWfGFXsEwWJEatzSpx8pqwvkSeKdRfbp5KLFfm6Yjok2BxXuFsWkrxgXcSU1WTteoeia8bpSPj2oN72NHskLXm",
  "key38": "JzRjyKiKniRPu2y2ft82fhDrB7W2R3sL6BfLjm42DCruXezewWvAgPkWx6pEzfAJryS67VGMMfrun1KAqRRgMdd",
  "key39": "sEBrJ35QScGp5f3QmVbAKVPsYDi5kcq3GVcfFQDRrksWsPmy9q2sCuPtyuoY3XxuwzgMrpdFzUqcE8L1rBCbqrK",
  "key40": "4K5ptjgzcSCkPR1TMa5KW93zokcoHE4Mk5YNPeQFwe5mDMwxNNZkRc4vV1CaTY3yxqLCoEZ9L7U1tCvDDrB36cTu",
  "key41": "3h3VE9RqCAHbreq9EtiuhZbS2g65SfikocMuQfTkjfyo4uHuykjYoUXqTsRsFmBLr3ugnQrH8iNZkQg15jhSYzPb",
  "key42": "bkCW2XQf3iAmx3uzCzw8j5818GFtxo3sZ26QbBjUMbverGjT2U3MiYhyDdPHEopMyfj4LyudJkecUWYSRWQSTMv",
  "key43": "xkipAaQLY1EfYYY9Ed2qDaM5z4JychxKuGeL48W7RJyQQDCEHEGR8YwDLM51qfXk9Q4XT2YLYbJA4duQtuyaQTy",
  "key44": "QkNN5yjrdB8ewwnrxcLNvM6n5TUhvjQtoM8uvE3kXYqQyshSp9CAG6sPH2aFmD8za8UntkELPsp4i8EZvVCpDRd",
  "key45": "23UmyRW81ooaHSQnadyLZkbgh8FAe4ArhZFjNivo1fjNnSyvsaLPn5i4rqGcXhYDFNaQTgLTPrDgFoPF7xYtRmi1",
  "key46": "2M5mCdGMBcWG9kdZR8smJH16jtkYwQhBnm4F6rnEWd2TM3kqk7KZZVcw4Si1v36dzxg3wMSUFHbj8L2Kh4HH8TBV",
  "key47": "5jtqHq7iH5avehxhjzdPyg2vDF9mZR1kwqKEsqjF4979P793sDXV9Lspo45ALC3WnUNApJacV2UKw3kExk9BykhK",
  "key48": "3k7aGnbMJKPHN45bpTtGW55xzVmaXqBUosgoJNg5SawL3vc3ECoiSdxK6WqmkWfgwHm6Qmdp2StCF6GBaicrSX7b",
  "key49": "4w1ghv7gpCy7i6yaNpDqutihhqNz1GqFqV6Dt8nMw4cMbeQyFihLJxDRAUy2U9FzV5xL19y42sHBQZ3Da5weCdv8"
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
