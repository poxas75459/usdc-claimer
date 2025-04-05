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
    "4nJTfM6R5DivZimuuV2BB1F89gvo3rRvSjmT9cbx7RHJuNLDD3DHuQ5ztfizdemYoxbvYvYXt3PVmChZLWMJhmgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VkXA2c8gYFxLxxt5RjpzAjgPo4kPWE7zJ9kVXCAREsPC6BMX6LBRVDZJ5ejJvYH3nzqwhCq7ANTednpL2YDfpbm",
  "key1": "3wx43DbjRyphF9r6KgwvoB57deGUoCmBC3i9fw92F6rHjhgknd3tGNxpLipUeQm5vteZwsySRCDvZ9riMDC7BeeB",
  "key2": "2qX5Yee6NwxnFz7JrFi6ysSra12yAQ2hpBBiB4g4xQnyHP1aSu4LuYFE6HSa8KApVE2swEovGpEJm4kUbtJHD2Bz",
  "key3": "33Lr4F4FjXjDKXUkMss8JxrtGkzdCGTYmpNKxNakZ1wQmrvK74bEpDfTJ5waT95aqtbf4wQL77xhPF8Z7K6jaj8F",
  "key4": "4TWpALtKT8NiZFnf3qF9MqUDYBcr2r2TEqBqU1dUnMPd8KVSC7jMgspFRgxXbXQJC8vqRxT7NGe8KGfriHhAH6Aa",
  "key5": "3pJ9iig9rFebFG6LfxZRadudUaBEoEmgmuVLWWM4yJQtXjCMNnNYNK52C9W37m2K55huVwppofFo2EUW7WgKCta8",
  "key6": "5ipZmAR5iLB4xKgJqwMJ5cKkD5JcSbNMBKddMHeUs7NHqy9rseWH67TrjPCJQ94cWVXz75A5Nzk7zq7LU6E6dtF5",
  "key7": "63eQsdNDgZWsePFUategcTqUyLT4VreqW29oCVwUWSPU4RTCNDVxPjmCD7qbrtzeGNZHeqRDHmR1DBBHuxm8yYdu",
  "key8": "DmcLFy9P6a28JZcFWDzMH1ZLxsTPnydEvhy2G9sY5Hq2rQhJECqQDFabt3HDxzaAvUbTdAx1LgrksbJUDaARS4k",
  "key9": "gLrrSUp9rvtDagNaaLwLedF7XNx4MYUtWfFc5WxkhSnGqxsTbN9BUFaSH1bUBJPvxsvZ4pBZ1vbAxS2UjXbAusS",
  "key10": "541eXLtZ8qsTtp4rdym8hRvFhnim1yB7uaJ7X1pa3oXxFCsjvNsiwKmrVdR7uxQW6Zg9sAWuKj5vt1vVD5E3G9Vn",
  "key11": "4UizVPSbquWq3Fa55pyKfA6SEQjnhjAysXKSDHirx4xjA8bRwNiGzBzd8fvCsLFofKwjKydjJGEejSDqYNn9wKoG",
  "key12": "61EWmYgERWTu49du2xwtm3UiSWVrj3J8u7KtgJqZtsLS9yib7hHZwFFWNjp37k3jSu7aFjfNHVr7EGbkJYsWCisb",
  "key13": "3xN4piZrFHzAw9wWczQEs5eyZ18fFmeksCQN8bCemKdCaBZWs8xG76BiYC2Xdoioa8KnFX8JvzUkq8XTb8VZVjQC",
  "key14": "63DHRevCegbrCqWefdUv1PbwvoWSqe8vo7tvheGvxTGbHc6CiRi3HmDFwyRiQejqqnig8ACStNYkgtfxdNG1Nnqm",
  "key15": "24Z1kTzC3g3QBRxACXPEnGLgDVmkghbV6CmCVk9FVEhaMDNudgaBNNSfZtXmKaqRZ7cJ4e6tULmDdLxpEyZTnpgv",
  "key16": "5j38zd2YNLX6ZTwwNTG5bShG4pjdHhQWxH57ypnBoEDjbPALRUAzkghC5BwrgMLb9bJZcQVxqFZkxghzB26CSN9L",
  "key17": "bCFCZKj1SK7UoTy921Hed9gPS6o2APYnN4VCpRrd88VkpcpVxYcCHVpcSKqR3nWakDQ8bQkD83D1pioVSjPKUCs",
  "key18": "jQz4tK2K1UJopM6ULaXHVdDnrdmjJ3J94Tp4exZRsR5n5gsPitXaHamK5pgF8WARgnNks4qezFz1hFu8KPsW1vB",
  "key19": "5wK8dpqGm54W7vphUpisCeHj2UKwSF7YY5S7rRhxN6zPe357AtSkYZAiTDWRJvfzTBozdJgtUGsC4KAAECjdLK5V",
  "key20": "2tGcobr4SfDK7zvdNbwjjL3444DB1TcnzpETQznekkrQuP6NsxSnZvyT1YBqTMNu51xLWzKdZZFZCQJNLtoq4gTV",
  "key21": "cAkvidu9mNmiAMaZU3phc7pycz2YdPDU6P7a2AhpKK6gnSMuartH4JmasWVsmhGsNKptKjv5AVoa5AMHGRRXha2",
  "key22": "23dQKQyfKtXnsSdimyoJAVmddhXorReAio5LcTaeEWQYkt3ADkwZJHLrcrLD491xqYNcE6pQ9FUpyLxT1aprdQ9z",
  "key23": "612cD9btDAaCgDRpv5MSooxPyMiqAaY4dA6z1FoGHk1Sp4U694Ypn9FAKTG4Rkf7bgPct8iYEu3Mi3cvX4e5Fb3F",
  "key24": "4fo9XtpriyV9LogAztLcHCdNthyT57qEEDTnX586P7pJYyERDHxvsPfpNBR9vvLbQf6nVCGnRasmbUtKpmivnunN",
  "key25": "iXpYDEPoN33gPVPity3CiDm5NbVGRBjvj2LJXawzmx2KCqfHXb5wGhgGW9kFWWgswzz8VWFAC3ChTPjSv7UomiW",
  "key26": "5m2fYJv2JWyiDkarYjz7dyYP6kfjV7vnTnx8MZjKoBVh8uvafepyZraMtzK9SaMP8KSBo2ppvLboER8jvM4pvXN6",
  "key27": "4hoeYwBdR1RWunXN4ugzWSEqzf45Wo7YH7GphfeFhsQLKXcHRvth1qTmbQ3hbCuGauNsVpTqAjh8mu1p3Hnb1fem",
  "key28": "5FuV7nAEEiNEpm9f5y178AQ45z2CHApGpppArSxXVRqo1qn1bEgwnXGfnw1VNnPFHV2GrD7665U8V3GBfAMf4ZdU",
  "key29": "3sWuv8wAA2rnWZHx8HxUD3R5fzU6rpftEcxKdXDpcRwnu3eA2XWUzGh9BbYWsrGgeLXhrv72N5xyhhKTxekjFVz9",
  "key30": "5cAzQ3emsCbgQ6mJGFTSgys4eZpNEK9Udigb8mNJEuQzJknupx133qj1E6Wj1PA5uiVb6yKVq1W7SsnPo3BGobcG",
  "key31": "29jVanjNAeCatTxR4Be2GbWsHYvMEKnxX5TW2XU6MMLdcb3ovsrbSbP4kc1YMiJfEH71RnHTueHSLcmxc4aoy3Sy",
  "key32": "5eEcoAea4GZEX6PF2rQyov5hjH8BCE3gH4J8P6pGxEgACHNWWwMhfNd5us49Qn5zvku2DCQgNjALCoLBTgfGntNj",
  "key33": "4gGyJuyXnj4oJMYmnQvafAukdec2xNBA7WEmtda9tAJUxnrzYE6JNJ44Bq363fhTUBbeaEwjTbkt2Wx4sFB6ph9x",
  "key34": "5QbgAyQgRoqQsQ5ZkPmYjeRfDcTZQ67yCswUyBBf5kVwrbYRFuLb7SrCqKVgPQWeb5sTT9e3i19tRETKq5iLbyW9",
  "key35": "2rT5RVmCDAvXnePkC241sjYXn4B6FLeQYtuBeDbefjkw2Tt35zXgGmUP3d21BvjoC6wK63xLxVR9Sk8rswLpZzHJ",
  "key36": "25VtSebQLABWUHFWFMN3JGLcxA3tHFCWovzUu3wFbBKrdU389EBiBGUW6q2wWuBqAFTRruCCHHJJBLbincNRWRbB",
  "key37": "3vAY8eqSzUHeXyJdqXRCExarniEzbVzBQHbqMB8Bf4Wh8GcmHfSuKStcwgKbGpih5yeNUFcPQbVuTPSoJ72eYv17",
  "key38": "4JH8SwrU9Y7L1NDmqvWRCRoKd2gZQny2ur4qfGVAgLy5SQ44MTUa2pVDTcSTomdJAxA9R527Bpd2FFPF2VZxUh2c"
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
