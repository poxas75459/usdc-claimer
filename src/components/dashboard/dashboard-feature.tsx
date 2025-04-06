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
    "2xgx57F1SBEBZ8de8fQ2Cx4StkHfKRXs46bkk2fctS1Mv9enZ6qpT7z1oR27wDCmcsCs2HLACc5xVUGeW7xSz37U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41tu33H98S3q6X8QVcVKqiBAyhFA3Jgkppgb7F3hPRdZm9irmz7B29wH94msrrbVGupKs5rbyxM3RVoXF3uhTyXX",
  "key1": "63TmZ81MRuwgJoBZgFnxNAko94sRB6cvzeMfBYMeV16q857RhPdp1wSdQtRqYkG5mKYBFWNnXmSACkYZsEcj9tDq",
  "key2": "51fpkMNoPQ3UCVaFX8nGDuuycJCQyWT1tECqJkh76eJHYKsrBwYzZ9bSW7q1UG1PN5czJn1E4Bhoq54tC4uhdYxu",
  "key3": "59uXAS7HC8ys2wuY4AgZ5BiTwVxpLseoqAXm5tfvoJjqRNVWTEquRiXrhqv637QUCmub8PAJitfJVDUyXPXwxeAR",
  "key4": "3rQkubgxGW9cP5cSGxBAYebxcC6op2QkrL1AJNPJSXRJcWtwmyMGs9p9xMJHqSeHhpE119ADaKiDP1ceEcG4ZoCT",
  "key5": "2hQy7bPMLo2KecqvkG5gu2rVZpuUpErZzcRUpnLvh81g16NLCJBXhXfvc2XjTdFxRYz18scwwHbeUc9oYAVoWfVR",
  "key6": "4S86sX8dFxCyUCrtsHjkPx6q4GjUNn9MMQF2LGVesdPmNhfEveYHzhxQ2DmnQTMdFzGy8aB2rL7roxzx1cgpU7e8",
  "key7": "3wrzF2YgsKVeBSbVhbJP9w4n13zn4BpC2Siyog2xaF3NtQqVaDNy13i9gExHiCqrypXQTKLJsbKKd1q9Spb8WWEk",
  "key8": "4vfj8z7EaHiDpWKvispMnSXcM8VZRfwFE13cWZL2VCHwYtWyRwxK5FUem2jSkm45e3UL6PTDfaVXdf2DfuBrB8FB",
  "key9": "3pj3yK5vZuAqAV3hd2g8QZu8zXLxM1LuBFahBCGR37ZgQmfgvZPfVmrtd9kZmkHSQ3sUKngcUaxuHLAUcVvzsZU3",
  "key10": "zEJMR7vfYeHcJdqXXxZZKW7SuzFt4PFzvsnVuLz9XYtYHgztBJb4xmX83a2J4GQvwsnEeXNgvKbYn3Mwkz88GTa",
  "key11": "BsdQmuNuUNhzPitHMsRKWrmDDzGxc7VdM7fGSrNty8yxuhEQFAPd7cuN2pzkadqeaWwXZMh9mGh89v6YqD7bJ2m",
  "key12": "5FSrfqJFVMkskZfaFKfSdRsFor4duUeSfpf9obv4wJWAmDXpvcXf82nvKUaBpnuyBLF8SLfniLUYATCsQjp1CZK4",
  "key13": "5ECaz8hszXAXdYE2BMmvg9in2cqKfJurgzQFpSvUKB5MNoznUdSDKLjFAxQDj7qq5dCwQdU9Vztan2ibvwQEFJaM",
  "key14": "5rCN73t9rBZphuQcLyefDc89uR6BGFjpKH2KA9bP9bh7KftiW5NRpG9FZyUY1RfVUGpeYpHEK8Ek5qmKLzDRs1Ma",
  "key15": "2LrPXVDNeyB1dP6Bb8RBJEoR4GA4zAgqDW8BVZCMtu3fX9B7LpCasp5YKiixSEm9fsGjP4ap4SUPDBAwHS2sZPyb",
  "key16": "tZMLdatmVKXz6WPcdArcMKZcLNbeNkohnskSRG2Gwy4Xz5UfhGMkA79atbowRoq6MredfzMdf8C9T8bmdp1tRLF",
  "key17": "jsqZzXBo7ikb6Rdjg97NxEMST9Vs1wjdd2JdGmvkdgGbUFdTZX43vfd9QtoonBnDNSwLdapUjGhCMtBm8vF8Hfd",
  "key18": "Xp4hTXWYN6UdkQcqDXGSNBtC5pbAXfYpirEfLUVCRjuYdVKDM6X6eNCEemdQqW8DZJByoSbAP5wmjMuT7t3RSkY",
  "key19": "4XWDnwUA55ZBCr5LpoYVq4sV2DDztVqGkkWq5AtQMG8fjxqY6vo9KitVp6W8eyuhKofAES4osgBPs6Urz6SMa3oo",
  "key20": "4jSGE4Mp3MXzuuyezpULf5fc72X1jFL7nikSDfAnwvUqs9F1jLhWXQEdVsC1kyDiSRoiE51cw82jsiZbKJ7WUTp1",
  "key21": "hhgS98DBGmhXv3X59FLCvf2sNiXY7eLNyxSM39u5WfvEgJ7JH6ZTLLBAtzmhqv7UZk9yegkJiuqXH6ZCea6myHx",
  "key22": "sFLLTX9EXquf3avzp5y7RfSkhmJd9CDhC7mWmShaBN6fBf2gRbY8B2q4e1FxiaeciLLbHiDuGD6ZpjvfLxor8Rx",
  "key23": "5B4UFupgayVVKREQBx7BctiJRGMDmdJN3hS6SAMDDBtQMdM8KLcCQw7i5tYGGe8pUY2A2wbXXUefQCC3mJT1DNMY",
  "key24": "5xTY7Q1ML5eGJPxJ7mqCZdL27ceJ2SxFxKrdU5AKACVykmrwM135PskcRNdWFAcJaTbAAeDxJy7QMm5fDZZVeh3Y"
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
