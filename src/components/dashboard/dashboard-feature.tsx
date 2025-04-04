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
    "a22HckAZoN7qSuJBkCCAhXBkV96nN7bcLXxtq8hLb1Kt6GjnvhVT67ghjM1YfGkhGRC882w2E4M62uVBz1Yy8Ns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y5K1Sc1GX3uyduHwGWy3phekboSY4qErhVNFST7SWdB28rKxqmw63B3EBsfBSCY6euJJUhEqTNDfds9s7e8Zu58",
  "key1": "2z1WHPhEeAMf9DwK625zYjofxdwK3ae5YBdrQPEbp8waniURdFuYNs3PF4ZZsqDx9ho3FLCysJUmRUubCC7cAid9",
  "key2": "BqKVMnAbP665EVnorZTYEfQDG5MS282C4sgpzyrqprSo3aterJcPJg6aw6RBCApkmMgQJSSL9r36vmwB45moguR",
  "key3": "2YbE8GM6J3J9GuKqk7asopM6Er5u6gG2Rb3zvyfaA99hkyC1GZC9iypkeynWeQ65z8KfhvzPaH946DqNTUtjLPgz",
  "key4": "3Q3wF7DWMMERFf3QkWRYKkkr7QphLUGJaCqVmFUayDFTWDWAk4o13UkgX4bKtMXF2yqHZKK65VzxjHJLoVvoE4TH",
  "key5": "2voYnB3MytmJ2jufXHox5xtpmjPGR8wnFrj2omefTe7cTSQXoBnFsc4ZXszzZ2y2ZtacPpK5iHCaUHKa8PWwURVv",
  "key6": "5kT4NQy9zYoXJ6vJ87Pz2JTJkTcky3c13uYj9WSJQxTxT5FywC6br9QXJLKtSnKtkahYKfrz25yDxVNXj2gMU7g9",
  "key7": "4i9LhGai9PruwF8ayos7DfPnSh4yxLj4pJxeJYHhHDfqxCGaHL9jBMJC5CoeMr2bvfoku6aXNEtV8rufRXKcnud8",
  "key8": "2ap7ahNxHTrXGLUSxqvqA2pq3kTUjQRYci4Ss27RBUB2jgHb7V6UQAPMgLGUH35MH7Pd6kQmTT5L8p9VSwxPc69X",
  "key9": "YebqCwSaXhoyGn92v4kQmrQxwMwereEsRjYJiz6JGFYhLkJ37gAVHRhgZYmNgs9rh9QbSkBfCiTWfZ2uPqup3vg",
  "key10": "M1UHNraVzHRWz5DTY6WUWCUkc2TiiBMUVs57qEt95tHXsp2xbHD4ZQ2PiB5vuMppPtKJkHQrhYw7wB7faq8fdCq",
  "key11": "5FWHzpmMzi4xunMu1N5W7mp1AZaa4zxpANYDuLM8nvnngrqpkd3GWTe8Hjn1JEYY4DA8S84sPucNAk5T3kkM1WAB",
  "key12": "5wWbNezdKyz1NJiF3PqA72RHu77poEsUc4bBKNxGMXkejtpVGKTaYGA8dsEdHH8P5cNX9eoJkdikTq3zLVj5hkLr",
  "key13": "2dXpgWJ37BbGVGw8eEKrr5JQdNt2iXn287ugN5vTSrUj1oxWakZ7SRrpgxMyChVZBQuukag3PzcSJbtsp7dVHVsy",
  "key14": "41vfim5rsMQGgEsbijEELRecui5J7tzehXEL13qGySGStqd4mXNVv6iQkJyqNjg7SQaXPdiFQaqCMSPPH9vSmC8C",
  "key15": "StCiKshMuBPUB3T2RPmyDBGCjDRNqt5iF8Te8J5YWukrUWWsdrCS8rv9JLNn6nU3pT5BMJA61TE1GUu3CtdxeD8",
  "key16": "39z2e8JyDkhSzMPP17qmZo6YMs8ytTjYA7mcfb6qLBZYJB2gbgjF5MR59B5urzkRxzQvLFC3wS5saYWW6ZdLAskD",
  "key17": "2ohuH7tCthMmotuNSt9Hbd1LRct2GgVTVTE6yvrVd3PVduU5Z4FJZfqNJe9jPKGhagssMbqZBvTuQVXpYPqMms9U",
  "key18": "2fmqjgaDSE3iWeTViZSVrazziP8QJbq4nXC8CMS3XXWdWT3FZNxD3zoRhUa1cMg6F9cVg7qCdh5dKBXyfBkCRxWg",
  "key19": "5TwFdG8wLPX6MDduCnt92fnnxWChDNNoFPKQYoK2BE6za2XazTqAzLURZwTgq93XYrJWTmy6QMyT2ZEKuJx2rEPr",
  "key20": "frrgfWffrGn19h9wJo88eCj4wkva3dAbNrDnbpitR49qU7hnZRbM3c6cCQGmBzropQV8nj5yLjPGyP2vkTQonGK",
  "key21": "4QrznmAt5TvxuZmHcJvMzGJdFMc5UKr3ToZdN3iB6ojdeDtZX5qEW6fCvWRvS6XneCvm9YwVeBvWzVANEPDfuQqd",
  "key22": "58wqWiFxgikYXyKMYx8JvDzBMGStDugPwojyWMCzWzmK9TjEV7DkqWSrfKCDCSvbrDgjEyPHqDdEaH3jgHYHBbXF",
  "key23": "AmLxr9ocB72xbE97SyMXj4D8YNmNMXAQSSYrynib9JEv14PpqHbcMrx45xFYRXekFxyr3Sp9qcAsXbcJEuxEgwy",
  "key24": "5NEBXG8XabGtfNx9tXurDTxqSHceYqD9hWXYqufaZEKeD88FNK4pEcSZyMAs6FLbKVSSDJaJYQJWbYw9obJG5zFh",
  "key25": "4Z22WcHBrhDg5LojQbvox1kGqcERons58S7VdzDaWC7xLhNaZxe7o9U252bNw51k29WSXiM3vUNi4nshjz1qcToQ",
  "key26": "H5nebYMPMEvFXP6jBDCRXceiDqbqqpxDmPUhaEHmFEkd6bc9dBjFre11j7Y9y9qzVUuyQGjH9fCyQAXV2XBbkKe"
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
