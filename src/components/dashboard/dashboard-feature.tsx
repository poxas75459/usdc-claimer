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
    "2q8eQAfbKGRkWx5cjaHkGqNKETzMiPbPaqSqsppYboeiRxL5yFg2kvm3xFFt475ekYzJDUg7cqhhpYv2nVi148CT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cy48bC6TtDmCrz9pa7KSVfMw2mknhYjvGaHRnG6Two2SGKBCtV7crvrtxPSmgymccwEEZiwv7rikpzcaxNcCkMK",
  "key1": "3kYHjkNTDJhSYYuEXA3nB5pVFn1VSjFrRTfBFZ5Edur4rT9wd5i2wJRXQQV2Uc2QaRNc6DqYCnyU9Fqaj8x61Z2K",
  "key2": "3V3HM5YjUuDovLe6d16mgPMRGkRrWFezZVUQDjumBRP64MrsxmKLxJaGE5YwnwtGiiWDNikR5s6KXvabZwiMpSMT",
  "key3": "4tuuSaVEPDMsWWmTkcwN3fH4PCY9DhwPUNhRnG8qZqJve2q1A3Q815JjrufvawZ8NyTww7bXsBL6kfD5cHZgh53s",
  "key4": "3ULbkvPu28xV6YiiSYR54NjMriVyjXWBVKBGZX3NAqyMTLQCJAKd9PU1vq6wev2LUyxVzLy92emk3NAAv5XDw7Sh",
  "key5": "4SMXaqy4xyTFe9AidJsPbj8rqTxVnWrXU4FvAvor79upxuPjybg6BBYj8NvvzFdm6nr7ggSJShrAhNvmK2q9x3uQ",
  "key6": "2McurDzVWMu4ByCF6Us5MNGBBy3qDArccxoeB7ugJDY1rQGTtXFVoU8FRf4xizxWS7wAKq75BYLHv1SNinfLYui5",
  "key7": "3GESMbdxeGUJr3UdWYoDf9YX8FCyQe481uB9JoNx6j7DyuKe1TRnStoKtd4du8Q7FxdYeAqVx9FX4bUFfqf4QRnN",
  "key8": "5uhyXqokk9pxRs2us8JkdVEVHL6q4sfCCUY93Ug9LitxF1GpZ1pEJjB5dv2zS7t1LUogptkq62qmjqUtsEVHijwT",
  "key9": "46Rdi6grhELKV5GUyCjQcrxfQdQBXC8KiJNn79atax2mJKxAB1g82iUff264PMgw8PekWRXH523ygfMf6JgeYsgF",
  "key10": "5qJMN8q8seTsdVrKuBNomP7AXbmkseWt9KzZHXdv2jEaiiXjxHS7C6eXXYcncysqGaJrNaEw7XhgmGGphNnPwuRe",
  "key11": "td9oRTYYbL4JwHBLF5z45jSbHszgccZdc8GnHRLHbTJ5ttgmduVk79rBpSU37X43gRSq3dNJVfkwYAametxSUVH",
  "key12": "4A9QPWU3McseBbvQHMxnNTFkXcJvT7tL1qemt3Ja21pT7hofmEvUdcBbGmEFvoLKUxmM2xxAHNHyFogeMDRXkPGm",
  "key13": "16qFbdrGMSp3AXDhnvVnQumKuSwW7oZ5NysspypYLYwudhcNa9cyozj1RS5GsotYZSYkuvM7fUHrCKcrqWZVpWQ",
  "key14": "gnJqw2QipgWxULLaRJ2xen11RCmU5TgMedzS5YUeGvMtyHRDGPQ9BMoGrNjEpnbwNBdBiZaGoaWeM6cPi78HRhf",
  "key15": "5CJptxHb6cePwT8ECnPQVxpG56qmDrdcbGhxjcRrdQrvcDcdWLZwJG9JYeQwKyBGRT3BgWwxENMxfCGv742oenCE",
  "key16": "61ZgRtrr4yrmVaa8bmZxvLWZ3wFqHK5m3yk3oBg5mJV7cQYD1xtnnuXw7aeX1YSXmugGsnS7wFp1H1Qwa6zuseRD",
  "key17": "3E8yUrDCndMwhsN4CDxyyPmY9NiwrBrDiWxBDHRU1HaULouNA2TcBs6H45Y4bnG95wuy9wRLfQ69Tkg9o7Yn3uky",
  "key18": "5a1ravRAGKWMxU5oxVHjC8Nio9w8wgcLrxAahXx67MWUr9djeqxAMzf4Bvo1PbUSPGrMaVp3VRwKbtM5BbHPLLB6",
  "key19": "5Fp8ijR7dFekucmKGuuaL7T3og1p7JnoCqe9UCznSxoQ2VVahzHRugvycZkJb6SfSNjJ2NqNasAdXGjkJx58Kk9T",
  "key20": "34ie5A6GSwEg2xHjnaLL7TaTmtWB3ZBCMJTaEajHSQShQzUsDsiiQVBbQZCouPtz9F5rKE45Btnna2rfk3qfg7S4",
  "key21": "2fHY1LLVce6pEFPMJqvXQrhzwufBhbQ1XjADF2EsnbCLjVjioXi44Y3MpvUaJdfqdMHmiVDhCEG1nHzuw4hC1cEN",
  "key22": "5MxpywXzEvCGzNweyYgdQiacqs11jGnzMXBnGeJq3wgKKgw61d7onuisJ9AkrWsnVS3fxsoNAq56G5wqpy2xJzeK",
  "key23": "3Exm88mtcSJpr9yE73aJXct9Mq6hxSvbvuJqPdWD4SSGQRoKXtWXwn7AAEP8VsXSXijhaKXaZwvAizM7HdA9Fx1R",
  "key24": "4ZYX5jRMDscUMQdWWTH2AstPkUE9YTSNUZ3b17qcCZHCRLDkv9LrpuCBmPUbfC1v3pJ4NmgN2dfTP5TKSJKLTNAU",
  "key25": "3AELVoNAmXi5tHpbgdV6qEGjkp3t4iF4kTtKuZM7n99AEDjL3D6jJnjG12MAQkER8SHme5VVVG5PYJsEbSZjFLL7",
  "key26": "3kQ2fPyCP5p7AcPVTq72jnuCARt8RhCE5uA3PbKXihbU34njP5jH6RGYCYe3GbdCgQoxr6xL1Q3Zp77P2aH8kDHc",
  "key27": "4xBJwWRq1xx8wMZ2T5xE771kuFWtQmJWkRzusDCBwiZHe4eUpSgiQS6Asi6fdmKTbfbiqBkHd1hgBK3QhSVuCuL1",
  "key28": "4d3K7TvN2oGWXNjSNLWQdP8Xkpw6ojVZWaa36QsxSwVL1LGDo17eTunEWoksrKELE8v4EWPHFEahzb2tp6DQNbDn",
  "key29": "QzUXm1ciQK6GLiGZsbRfGV8w8Z4KYeWstCfay9AwqieBSEziu4RteJZbeEwbFXQDWBgC7jZrBmzsqhbt4U4PwsC",
  "key30": "52KwE8s5A2uiL4s96oxniLSkTWpnzooRbJQnXyA4KFpmQGCKtXUnnnRDtePWcVxyh4vUHdG1ENCZmqwzUtKyo33d"
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
