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
    "2Xg6epi4xoZL2dhKcC6VWaCfSpkTeu2Dz53TTPhqA1kaUaEDLtSQX8SCXRZa5oYi5EZAA8tKGNwuv6Uxo7LHgSBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31q86QTJMkvzekYiEBR4sLqMrybGoZtaRSkt2AKMEs2PLrwDnbSAXiYmLMRSPirCVWyL9is8oMpApDUJePUWNbAF",
  "key1": "2Ec4BcCaSTC4jusoph3swG1UiYbp1AF1CoUY4Lv1g8qD15u1vg2UAs6HuCeVDLvNRhHeBo3xn24ioBRvmJ9qj2Y2",
  "key2": "oic3CgjKB4UBfmYseZ7HMrLJoSL92oaapAdfpmSKV7ZFMJAaq5nP7DFSoRYuRL3boBCr842MUwkmF77RwC6Ejfp",
  "key3": "UsjaUo9wGnKkquLZSienRaBxQYZX2UYpo4Z3zUm2Ak65msspXDQHdErqEp6FAeBnLTjoZ1T9MbnWazGR8sgn8eX",
  "key4": "3NDXgTX5FHM37VmB2tLEgF7whpa9tmnuCp5C4KapNEVppUqdZzvXnyesj16QHHXjej2kwtAJjzBvhLeBvjeuo5aL",
  "key5": "mm8YA4K8YH2hvyqGo4s2PFRBK42iK4vWw1UXYBUbKZnHhRRw7CFCnjLguUPguX3ovWRwDitpVWmEuv7feUjLaQX",
  "key6": "5YR8rFibfKd3ii6AEYqv8CZoi1sz4bk5zpgBxKJf5c2PnYMQH3NXbqfCyt8jnMD195HNv6u27igcjVhnWNHngC4D",
  "key7": "5fa76D5fUw5j2BWSVrCWWpA1hrfyhJ6qcTXAL74AGJfTpXX28z4mEc3YNtvokVZErMbGN3ytMvumYU4eYoxoVTxX",
  "key8": "4deiP2rAV8Q9mxQVNTWvwvnRH86R6WgLuwvA4RpfFJ7pCa9g7QvnBeSE1QtzEWcBiLSVgFapKe5kf54NYXHgvKtZ",
  "key9": "3q8NHLZUkkn62MnhnwvS21zSecgyRCv6cskFRCw3FmA3xgsf92r4rAQH83jP1LSBt3kf5dYhDqM3MUYatLR2qAfo",
  "key10": "4MoyzSrCjDQbSvDjMgSMLHVPG4yeFCGZDFHvtULqQmUBorzgBHrocffd6wKwxEC3FT7g55BFTyVp2nU1hD2Mme6J",
  "key11": "57RdBHtt9HXBb593zj2JjzHugy9Cede6EBQmdJmDi4DHheu8ZAsi91b2tQfFtZwtmmqrLArRCFNUp2TyUMzgNxLf",
  "key12": "3zBaRk3pX9RSieTA9pUTdi4GxArkALnECNaHg3mchrkRZtytaKisTVACfYLinBkTD2uGLhu54JokJPknWfGWjSKq",
  "key13": "3pGB7tRNcXm7xVgEgDdxW4T4s67s6VmkamrJKhveiUWkDd45vJfaeSdtABke55V491FiLmZMQmxyqV5CHvM4EzVJ",
  "key14": "39cdpHZM1XuuT4s2zGX47fCmUVPpV6o2gHcVhxQwUraG9iz58eaEf7aoLRodyG8A6mmScaP1cw1GyVTUZSof7Khd",
  "key15": "5EdkYVhjLHC63FWgYu3qeQbRLfAwshRi68139iNeKc2DtvzUkBbdXMao6Xo4gECthogAy8i238iieReSAxcej2jL",
  "key16": "4fqMnb8NVrbq7sXst41df8tbycCkzfvBPhpEkyYRnjtt3H7u6hjFxHianDBjmNRmumKi6uZ6Fp3fXjerUKJ29ooJ",
  "key17": "4yq3nd6Cyhyjy5VVcmQkHiq3KtBbmmQyLRwjwXR3cMKUMW6jxicx5AJs6LZi9PxbqZTj4WFbmCve8dcNykbBhxYS",
  "key18": "3CYVYjKdwfKiv9n6xPShbHsk9KRXyh5frSQdnhEWNVSkcZWmTuQC25Kd9imkiLWoSotQVe1Z9aJLd2pARXXBW3MK",
  "key19": "5ZPbeArZE8cnaMFVnzCWAaYPjiLMZ3YrH3FV3MQud7GuzmVD4xFGyDjJbuCe2RYhzhjxWgWHWFuTMQUu32gEDECf",
  "key20": "5U1NyCfaae4BL16SgEtTPdVpaAoEuhECTWPDeZCvmDsn5HW2cpHUk4Kt5pqaPabW6tfFZj4Y3Cp8bky2eyxeBeVn",
  "key21": "9H4WT5LP1wQzXEN66cW5aGpoayg8ND5k5pjT44g6RPi61HW4ixeUbAQHkt6yi4f9Z6vrxsuT7wkTtPU865ZHU8R",
  "key22": "55d1K1SwA3iq2uQzN7hyANCbJ6tCMdYXDhBfHFbtrfwbJ7oF9BRTrRwWALmEL7LnyQhzkciVM7vEKesKJk33oJo1",
  "key23": "2d38TYhLdhTSnGhtngybL35QT8phcNg38mYstaVw9kkknKrjxW8bmq8QDAL4A5T1bPhFKe2fpv6J42RAP48G6F9A",
  "key24": "2dWXehTp31fLK73x3EMAEGHdJJ9uTEk1aM2CWXdEBDokQs2vpse38JUtfat8m4d6TuSJneuWK8t3UhdLsYB8Zm3R",
  "key25": "4ifiuV2SjfgS6E2EXJLa3SJXxCQP5sa2PoJ9B8i227dHvj4rrqjwtAAYNP6v8RhqF4rcjKQAbWc96TngnNEsSYrT"
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
