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
    "4RuYVeKyX5RYb7r3meqxUkgkvzw6w3WeX9L9hpX4QZHsDVvUVTersSLB6HpJtY2Wt2XRZkkTsAVZtTeQiiuTAJi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "McKw5MA6k8CAp9kS8FDoMJ29zbcMj7YQ77x5bWsNZQNNEY3CjmMwAdX3nwfT4VJL5xNFRV7JVt4DMh1kaSf313R",
  "key1": "PCgHKFMETKS2rNVnfsCXy3x7BLoHTSkf71FE44awibRiaNE4A5UvDbzvC3UKJ4fgXBnQoEvUYksrg4JEdGhXB7w",
  "key2": "3WCDg2NptwEuznVnGTrAE4mM7cgWdNfy7Rbp8WPBQrwgcrHGUaxT1VbntoCnD9Qya6XFnaWoX4VZWfoDitESq7aX",
  "key3": "4Yg5QdrXENa6U5H7sHfguw9kXnyTQaQQkzWBU7hvcG14MyhUi2H29dZYMNGC1NMnFHTkwASVZk4rrg7V5uej6oeL",
  "key4": "5z8fApDfhZQkU7dAEpncvBXptJEyX283vRu3fQtgVmnVZqsK2N2dduNqzXP9Sp4waRL93uZ8SsCTEWj8TG5JvSu6",
  "key5": "5oV77Xtim9dYkqV7WN3Z2TfFHWLBCYQWUFE4vKbZZQ8aveB5iofo2zkKns6Cf8SDyWWBBFjAhZaVnnqRWCNtKyiJ",
  "key6": "vBy97bVwpfTftcgQJyEAFYxHyYm8rToLj5HPu7uxDZwCzo9Y6btG1nJPGrK23V5AWjVkRCFVKv9pHvDJTnkaDph",
  "key7": "5Kj79b5VqLwJPFGBwHmejJaucraKDF5C65UZDm3H7dXi88R5jnhVT1TUuJwamaB4g1pAPqtiW7jYpQFZ1rVpNYKY",
  "key8": "2ToNo2U7r2j4RxeKvicYW5ovqCts27R3NeUnGghBX3f5xzninhPoi7bdW1cX98fUeh4MMjbfEpky7z2V8VSZGvfT",
  "key9": "CcWBxK2fQHeudMfS552KieKxWAxRcee3qVi6p9Apwi2xFGoBGWvCEYfVQuBxD1SKv95G7Yyd4qbrPYGPUnTAcV3",
  "key10": "3VYkF6b1t7aiPmTgSUyQ7GapdC4oTrpmQXpx2Q3iC6fZNp1QbtENyxPzwmRpj5hLXziF7c33qBcjQsxhz1pPyQ3Q",
  "key11": "39EyPD2HvTrFLtfCaHhJ1iMyE6S786AdqdKGvqMXqJntBmAoPhfJfHPRLmmtAPKirEixtLK1KU8BWVy24yVkyWx8",
  "key12": "3tNyH6QJwKDhLPjUhNg1UzrjakAvrtwaec9rKNG45uaJGvNPS4KhENCuMuNXFZRsysh8VNDRHqK56GEEqzMoMyJi",
  "key13": "3MhwcHddHEWgtFjQtPorqLdfaWwceLw4f9A1h8Utqev17FbBmUtyGfNCxAGA8f3C3tqSBR6DmWivVxNt8ywYngKk",
  "key14": "5JVqwBXQ6ZQ7xY6Z85ykKbUz2DhJGQXvHnb2hHfNagvuSMHpJq1uWJGr8rZ9HMfTkwMJKrrTCFVy2STjS22Y6PjR",
  "key15": "64SHcWfoyQeTZeifdh2SP1ZeWZ1vh2LHv4LeoUCQenpfe74wusEFYdwCK5s48TtTxm4PY9GD6d2i6GcZg22Pv64",
  "key16": "29i74kkCVv9eBSHgusxSCay1tSKpPQQ63AfwNTD4mHwCxQCiHTgArERLk8Xr26MPn1o3Q1AEZ92jkMNXVhc6jkaT",
  "key17": "3J6hY2CHumrHxx9z8a7h7DuadjgdUMoAX33Gn5cYHDHrwSWockQD3Ar1TCNTDYXvyjFqVkQ4uV2FZq2prL5yGfuk",
  "key18": "4DGPcGRcn6KA6HTZ34uA6yBE4wLnHBKp9cq2q8XppWFCtYBkNY8AH6huwtxXbV4hKJ77u9VCXpQ8aCLzZiVb52J3",
  "key19": "MikV5tKYrojZbdMuX6Jb4heSP9ByeozxYwCTFWaLsueBLSbqw3SwEcj5h9d1YLK6xMutNDBUYit8mwQ92TdJYRG",
  "key20": "62xpd51TTyaC9GL2UDrpHCFLNSowDEUP1ugAxJu2GDB58e6fpNtqT5kCtgqiLTATF9LfVJD2je4XUeEgb2rsF8me",
  "key21": "3Fkhv26akwrjUHa6Qpyah4bHqo4tKD1EFVap55kouYizVMnr8MUZjr2VVqHE59b7q2oGpDB3c1p1bp2jPxiAHeWj",
  "key22": "5jAnZaRgyVCV3D5jqqJ6iXPCjz1kvZTz7uz8UUUBUtpR9aeK1AkjS1W8wZx5E8s837WbKocPQujD1YKB4APFzGVo",
  "key23": "24ZmgMiHRnzWQrbETWAcBB4y5tjwtNY3MQNZAtBFoHTXy4QbFGvdkfzfXEQERGTj6CyPFMMeRi2J6A9vdYp6boE4",
  "key24": "2k6aU3ucFh9mAvCB7Lga1CNWKjLLDNRzwfuW69PuKH1MRJKcNJbRaSGXyGGKgzB3pfkgXGtboF3fi3zLsB4wiG8D",
  "key25": "3VNGxBiL75Gfim8t2m6rvPT4ta2A9nt6YkLxfK8rBqEYzeMyEbLMHR1MtjR1n6qce786syjjj1a8SWoDEBR4379m",
  "key26": "4rzaJzbLthYXsSFw1jNrdjb9cERZtHn9j9Zk2T5PzqjVyL1gwkMt5iEWeRjaARA78sMNjLLJcY2gLCzaRLhRZGKk",
  "key27": "CrVGDqjqvGLZUTXU3vcYHspM2Zv2S9NiYVnCNUzBuGb9mLzVW1MqrcEaAbtzJVCnwGrDQQf3uqiN46sqyzqhi94",
  "key28": "2ryNHPtzFtmPgqDh2CYbPrKHqDgVn6RKoZxvJXPqdvgN5DXQgLkr2RB17cKWpAokzi3Xma1ojxGs6C99Tb9tnB18",
  "key29": "T2Swxn2UCJdeYYm4xoqFC6gW9i3T7VEHtmmZ18xwpKf4vmg3fcHepnhLSdWdhw8jMtRbxty8ssdjqujH7er1K7S",
  "key30": "5G5GvCFAAt86yM3RhJgdyDD6Roe5qZ82uiHARjw4jGds8ZhtrY6NYHqBaoHTgFWwmywkGEv59KfYs8BPuZVJMPGf"
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
