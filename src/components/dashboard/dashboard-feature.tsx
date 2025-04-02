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
    "5fTZpEmpzXEvaL8Kt5KjXszYqrdR8NxBFWDZ2y41AyXUUA8YKdGBj8q1C4sCN6HpzCWiMNH7tG2NzSeMmWnfXWCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SsNWPH9DXL5u6KB55Myo2cS3LR1rs1pxyN8yhCTCarPKn5hH2ABnMwLKQJUdxp3zLKyBPKMQtj93sb2aa7Juf44",
  "key1": "3g8mwqJbP9xMH3XPh79SsTN1aGfog7s7WJi4pmed4QwLz1CKsFQedcUNSE6DoySyDTcLchD9nnsDAx4MwagMrWzh",
  "key2": "3dMvtq48b9v5J9TkiJfBQMU96vFZZ3xoLvUhM8QozspsoMvEzGXZgQtsKdebx4YsHx9oM5q3JQuaC6JAyutPtQC4",
  "key3": "2aEbYMarjKbt4dgbnenLgnrvLgKv7oYt5UpPTYt7b7qJcEk47eDBKiXxKsPAveCQcttqr3N7Lqi8j4gzd5QqFyL4",
  "key4": "3QNr3MqkcBoKk8sbVGsurM46QXduU1hUN1Y42JoKuWyHRf2h9LYypVC3uFg4SvrA1ipLKQFRujqMCmxSXnWSdhJm",
  "key5": "u7FQVetF6xTKLQK6Jyf6Km2enAEHdvCYMpbnw68RdArwiNkAsvPsK9ST1nCigi6NpabuVgavVZb2Cc9b9B1VDAn",
  "key6": "32hotk4VpdMGFXHNJQxT2PhZAVJcNqDazYBF9qQHPv6oCcc6NyMtTWWuLgm2yn93xibXS23rHMrE5Q8ciV493a3u",
  "key7": "4yo16m3TTmn5H7Zhh5GZGEDcDSMwoBijUb2y2k8dMi5BW2sYMvtAcUNzE4vn6LRmkWTdLf7Pq6TMLZQNyULbn6Ju",
  "key8": "32H2sNn8qoH9cJNizfKL1g5gMtgSWFQWTz65ADXQG92tVWJ17quyVWE1Z87Unzy769vx28KggQ2zRPUsMGvaeh1i",
  "key9": "2g4daUXQiJ2VokwtdG7shxzYUDcAmyFd3KxwgZjvwqPRELKVoPgNZo3enCzUqdRqrnfuRWED5ReJSavdpCp5Bmnw",
  "key10": "3aWVEBmpLGuHiVutLU3zBA3mLtfvzBXSuWHHcjj3jcEXaZvtqaz5AEW1ofYJw5JdVzSAfeLCE1GUjaq1PbLmew4u",
  "key11": "49RcemvpRQHpDviW2VdtEybVQDU9Fj6VJBZvebAgXj3U3CjjmRk861f2JrGbGDidUE7XaDPC8dsvfaZcAD3fWxbH",
  "key12": "44jHWx76jE7Uj6852CkNVW3cBXE5ccfQT8xzYn4qXkYXFYCrJSUKnhgWRVLoz3cgHuxBSMicLaDnHrpkPhPkrMxg",
  "key13": "5BfrXdMZc8zu8GN9sC6c8pNC5Mv28EdYf2azSFk32EKNfkCCNkew9EdRrN5o6j4Zmuk8Z9EZLxNcogku2WNBBqSP",
  "key14": "4uKYxjJ9e6SfHhxg1DEdGYc69H2R8EYZpDz7xncJfth76k2zsMcs9Dep6sUpd73Y9uQg3Jb8tWc2KCRaRH5FKHsx",
  "key15": "iiejPKKZ2CHQcJVfrhQbX8ngtqvSDRfL6gSZr4zUSNnWu4nUsKsk2s9oMsEUCvfZwwbmk3n8Jx6qUzfwwdG3HgX",
  "key16": "2j2xK7CJFSn7N9FShKioqXRVYBv3WWGGWbEYQsdryZmQJBsrDmSc4rp9nSLnyCqDPacZtCBRXWHJkbSk6TmDowwL",
  "key17": "2Trse8PjiiCZ4Bjpn8ZW4Fg3ZEHaW7QkjZNsptZxpaojsjxkh96zAxE3uBnPwnWRWB7pHP4UA469Fd98ZGsCqrdR",
  "key18": "kLpnK8kxYqH1quR6YreHBxuviSgph8md6E3TtvjobZPhagkLvbLYCRcagVSDfDEmJjpcKQy4E3zqwe8uYNLsayQ",
  "key19": "25iUrevZ5Dkjqg2s9XUi1ZDJmgaPUiq4dfRPKQPmhxxLYdVyQsnDv8UQpZiv2rxsPyKP9htCrab96qX3ErsTwAq6",
  "key20": "NYubQchTfYaVR1YNHq4ov9QuryJmpe6kv4eLLRnCegwxhj65Dabqeqw5XHcKRMzKAWdNJVMKWYYkkfJUWvZUdyS",
  "key21": "5yopminWynfXkK1gT1LpnWn2VDGvi7cisWBkctkFTuE4Fxfcb3qDtngB9GLFj7W16MrHJqPhexMaWXEZtDA8CkSm",
  "key22": "fVnk6cPpRBJNGXS5CbMfxh47PnqpKdFhfQ67ibEWFjzTMWBjK3rY6XTi5ZH1cby7ySYJ1zYDDYKN9MkSnpw78KY",
  "key23": "4xmhqhxkNxKxBnJvEM1ZTVKNywCFuuM3UtUpCBZF86i3Va2or3uYCVjQK6C6bktUBzrDVCG6DDNR4xFX2D5Trx7P",
  "key24": "4maixWBrer4RmUjyNqhAx9XpHJRBLnNendTMeoWq4vMsUcmRzL6maF38Sxac2idoGCqZ9xdspf3EeDcZZbecwb23",
  "key25": "4kuyZ23poENvtMhy2n4kdcu9cpXbbEVhWm4xHngeNN39BvZaP2sri5MeNV45Vt2pJ4YFGZ7PxJf6eBmZnaSLT59P",
  "key26": "j4nv6SgZiFAQZSpwmzfgEBwh5WPjncuuZx4WoAAzWeju2HWkM6NkAHKTXLSWJbLz7xZdQV3cFiPq46kqoVyredm",
  "key27": "64G2qDP19X7n5WDU2u8R966No1XJa1VDe4QrgJAnnRSmeveeY4CGhNTsHGjdoeqUPkoo1gW7zSXVeVPi97kvG1uy",
  "key28": "4ypQHE9pzCUfrVWT1frKrdw3VtfcNAR47xzvoWDe6MaLvjPDaoakP22MGdX1jCoeioZCPzkHpNpZWJK7ueEXzyYw",
  "key29": "4p26brY8qNKAc4ZYAkCPttEUQV8Wb5DpATVhyx3nCdJxvcsmakiP4AXbeoMvgJCSYgsycyfLBSscwPWN6aF1Ryrc",
  "key30": "doS1espeTUywJVQBd9WSF4zyxWjwYQhdtfcQaHxiyieePubU5A7psCCE9SpsspkESePZwr8QgFYmwLMZzBJdT1A",
  "key31": "5oUJMzonqKj6BQS1zEoMw28DAZoQDNof3J4bDCHt3YR88wiXndhvSYv1aVEzbhN4UQ3P5xNqgoxqxhVfCAsCX7ok",
  "key32": "2y6TAp9mMyGv8TSRmgxHK9KK4EDJU3KDD95D16DiUQQTDbQ1fajHBmkYBLVibeCiQ8SkDdg71nEZMN4o3RLvHnNa",
  "key33": "5aHvZeNxaCH7843uy2D8gqtWc88pntqBu8B54rrnSgv7EsRTt1HoxLSGT6qhg4r8cFWJ2eFhK33sb3hMYJoe4P4j",
  "key34": "44n9YTB2DLCnY1Uugnozqg2Hu3amUhLxFf6gF27kFJjJoMuH2dXpSmy4HoCctVjUq9PYMyGp87afSjj8Vsq8nCmZ",
  "key35": "4LmjpYVoGsPtcRuJHwVdNjGrLs9fCMYBaCznVCN9xSDtt7TjYj4dx2wn6pMje5nA5VKhPmBJisPP2xWkSgaJ4Q2c",
  "key36": "4Q3tqA65Z2c2ihCgMkp5FHbkeVdPtiBN741DZU9ZrTXV1Rkcbg7MssdrAgLf7hwtpW8dgtPcNYRBn7hNKdWSSaZw",
  "key37": "4d5BSSNELX1M5c2SwmBFeajzNnqQgV8zYwhxHwRNywSca5NH8UU4MyqJSMyN1RNparX3KMrwnv3W2E1jfbMhZHi9",
  "key38": "3d874GjQhxmfBF2xF8hsWhH7McMg2Qcd3yPxfMTjJWXTQsjzYzjhsUkqHnrbNboUtP4uzXZdZ3hVxTwwZYi3RUhb"
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
