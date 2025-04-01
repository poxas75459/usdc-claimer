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
    "4u8w62wsRzk3QEr2GCrCeP326PacqESKR8zqPqC29P6ueqM5Cwe5w39PT9ciCZhuhredfL38bMK25sxZ1Bg9aBo7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fZ8SP4CmJggvds61vMNvJSAeUps4Y3VgemjciTK4bUBa4vAvobhzv8PtVNxFC2DScmHdCu5MdTj2obPhajChmzM",
  "key1": "F4ms7hXmxJvauaaqikqN2rxNnit4zTsTDfS7rD6twRATKVmZWvGCHBHgrW2rzvs5KpRFUBAivdc2C3WDbzUo8FE",
  "key2": "2Sv65RvyNL1Mo6jdFiTCEMyYnpMo7bjY8C8p2o7kUBWGGjjx59H87oJTD38CEXUvst7nh8qtEjCsfT9jsBs5HHq6",
  "key3": "569SPaXE3FPtE3bydcPMCFzQJ7nBJBpkRxx8F3epgfREeZfbtmyFrf16wMzdE8A7VEiFG4nntq9o19jGPvF1r14L",
  "key4": "2hZJ8uNTkU4yBU892R2cm3Rj1UMmXYrq6wgZxqQZMh9ra98uEhtvt6RPf1pW8ZXiwxuudiP6v2HWWGV1pVmCpQQH",
  "key5": "3cJussM4yTE6v25P6Mq3aPsCu2Avjxc36kezm5S7ibFAZfYMo7MtF1aCswTR77Ybk4dojj7S9PLtNqyvoQmAJ7w9",
  "key6": "5kfidFRDyKqrzWq6LA5hGeoMRyEzbGm2notHmURbPL4kGojCJSsQx3Xuyu9JB7whyG59SgNW5vxaixNegp5ZPmty",
  "key7": "ANByUg3n14Ls6b4tB4NELC1hmHL1JJ7SuTzrWWg6rB4t8MfMcPerUNRevZAwCDEEqsTde3iykYHNN3uiWhW78Xy",
  "key8": "5RygkVzxzfUp8dfptPkGKmPveMbyemYuozQY25fUmTQL9QRYt6p1TvhPboyG6U3YnBYEx5pinxUqXsx8dUTRwSrT",
  "key9": "K2AVedHc9WsQ4HnS1XwMVyeV2zWTnmQbAjG66evAjCbfPK3hNkKJMVY9jpAZucHakLXD1TgSBFQNWRSkygrFBHx",
  "key10": "2ZKaJeLN8HCFTzvVWkbTCp56oShZL4CKSzp7iAGXoiRKKuWNe59uS4TaRBPgcPmkHgoKA1BcSwmuKUzXAquiiKCy",
  "key11": "5W7jjWgogaUb8QNtUMCbYx6FUw9k4wmwWQzCdVhH9RkjwrRsR9w6BbYNdjZj71dfB9BQD77xHcTRTBuQzahsfAJL",
  "key12": "2LUoAgef2rvArP5Tx3SbRPxJ9YBaAQEHmN9A2J7idjxGy8CHZAtxam1qa4NN5r7SEuvBuYs4bdQ6KvxUJth2t8v5",
  "key13": "3NMZgQmKFVhdmSgsvxbqap2HPxBDGwFQfaSb7DHMuKvxPBDaM8i1VAfpB8jAST5sxx88hcFAQxMAZnNd4CG6Tnfn",
  "key14": "2U1xNjSPbG7oySRYcAE6Rm85iaYuqHtoVZ8LuddvPeEF3RXa8MadC53sxY4WpvFLGDPvzoWwyHunz2YmNLDUcccf",
  "key15": "4yD7MbEbB9FN8hnDU5sx8rwQad8tDedrfwsCL2XWHtpt3EihcHY79HTJR77MXZwUX5B1DF3EKVuEDhWujW7wN2Lx",
  "key16": "2jGho58LUwXADjdMpAwYm5nN5ga6kaANnZLW3aBa126Woo3qYhGRwcoN8q5cS7jVDLj8PtDq8o2WjCC6KhXGkXBz",
  "key17": "31rkqsghRbUxW9vJafJuAZwsUTtRut46EGCnSp5VzTF4iD6oN82JRMC5prNNxekAL6YKfeHVBQfQWyGHTstGoZ39",
  "key18": "3zyT4PEJvY3cr4HD3DycWjdgYB17FQdM3KbnzkX7j6NgLxWBCswSwEuhm3AcAEHTohEWMEkS1M1JErsGGSaUNHpY",
  "key19": "5a5vAMFNPbs3ZSFLmirExRGzotRDLBzXjuSfLYUcPwagYrJ1PxjqUCCGGbeLHUx34x1ayEVC4ogoZS6Ftne3zcuL",
  "key20": "35Z1zpazF9DgoXUGPuuAUhFRNwE47JmJoUyekoEFL7xhfHmQwYjmof8TCXWMWqUyXNDmLu1qoc2JrxBwXhiXka44",
  "key21": "2biBSiVhygWQSqcYATVGdgjzPofTSD6T5U2cM1WndQKk47FhAbYbdBoyY5YWkbjkkmadugA2bJVi9T61NNQBWCtx",
  "key22": "5BcYU7VtD9ufX5mQrHPQfjxBjnUsRCnsPjPTMsyWqoKYTtFhatNs2v1y7gTZd2JWfVkj4JTXVJPkwpVCRPEc4UGs",
  "key23": "4Q2LknUvXq6W1v9f2d1pdK3AN14sVhER5sQ8JZ9TfGyqFkxb5L67MNYpM3a9F1svhpjF1wRY6nFWHtfC9r58LjRF",
  "key24": "4ouT4PrPzST7fy12iisUTNwWdcq5PDY7ih6bdCeteS6MTaNrwXrJsdgLjEne2LdBMKGuH1HjuHV6hfFmvoiT6nn9",
  "key25": "5S4gHHKRLwTSM4BJAP5kdRofRDfzCXtazFvNDnk5YVFz7askirdYok1vZFQ9mNdv3j9SVau65HMRXZ3VaNzBuKgL",
  "key26": "NHS93aY5S1QCc8uGMKjsmb8siMPJA9VPVJPvRAzgz4SwNoAewUSHBrA1Ua5iHyQAgnQ25QQh8TB4XqZdfGBA4Qw",
  "key27": "4xJizq3ytZQ8auNrSD7X9FmfqhCsu5DgkdrKi4eivJCtMtF4M6SnkXfUwufrpUJhhZ9FrSNQYcHDyNPRNKwVBmXC",
  "key28": "41PFjTsmawvSPgirnZ2Dy6amr2VHxbfVKN9ETwVJV92SkvD2msykjc351MtYnqkme4xFySRHGzAFZaoDLrxAmGJK",
  "key29": "4CeVCw389xabtAoZ1NvnFpggcvwht53rGLvnmSp6Ct3KuS4itxAgYemEySbU6vsVhR6kswxepXmP9JWzSRPqVtQD"
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
