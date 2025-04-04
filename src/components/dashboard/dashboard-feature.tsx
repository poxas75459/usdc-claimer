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
    "3siC2M5WFrmF4D23dBEZaNxyLQPj49m5TxwLnfJM4fdMXBw3fH979Lwa7rR7g8NQkQAtLQNXGXVujpw5pMCXGt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cWA2NNt9zsHZx8xnXKEWTMy8tsLdVNNrQiV9GECLXwNvXjty9LV1spVVzcuZXfroF674sfwhFd4dJnKLJm2nzCZ",
  "key1": "5tDKk5eJpBxkdGHtNYzaEyGF8959C3L2apYFRXL4r7wsvt24VkCkFqmBwsdy971weVikG2g8oKJJqc1GiipsoYSd",
  "key2": "2p9T2FohsihEy5iKmz9Zfj424uceh2uTuPmY8sN2DamXYGfXhuNuCFUo9gn21GmkLWKR5mHKKD43RLpivLgsUyDk",
  "key3": "5Yg7nBVyjMKGi8tkrYTsDpgfeXdoroi1SxPBZbhKqxKcH1qirs678y2yVJdWYvUKkG3PVuUqsotQ9wgyVepngKVW",
  "key4": "2TMMzKywCrK2yCgR3rEchptEhJxAF9hrjGxj4szGJqm2Js4vdKmJBEBMFcktHyJLzhwSwwz8MbRfqjBXKhM8xhox",
  "key5": "2KcuhVrTQyCcBEf8zmmsHEgBzBCj49Y48c5QPRMqQzmAvUzksp9cLeQGcGHZTsoFSHzZJ4NMMG1pLvmH4muGj6de",
  "key6": "5Yu3uoQPp7nKW3wfEr1EQdBraUDvmD37ShyNJQBwpKrz7BiyCZEoZZdmCa2j5KwjFeohFjHAcLuwXvytvyQpFB6F",
  "key7": "5R2ibLJykDejU7WqsF9Q8bXy3A4A7ohoEJGznXX9EBibM41L9KpscDVn4Ju4yz2jvTrn9NZQCKdJjTYnqkvaZ9dA",
  "key8": "5YTGMCHNPSPBQtA6q33zuPobyHSQ3GHi1WNWuy59tLMB24J9ZuTjk8VccSUEJ4rK8j5vkVz15oNb9JfKFyUqLzmu",
  "key9": "5bYuVCpnuFu2Xu2AAZFmpwkADd6y1MN3yfqHyX692NAa7XnhmQVRAMRrHayMtn4d6quoFBkekTQ2m2RbujtGqkyw",
  "key10": "45hXtNCJSsH29PGnEF8DxBHf2RakJMo6dChLNe4638LLVcqhDzapJCc9KY3a6b5UE6c4knMMdoYi2bkP3CzmJe73",
  "key11": "5cqnmo4AUbRbBgp9XkLKBBJkMCedvRuosSTzxYvsChE66BLitQYBg13a7kfCPRNxzgku7WUf2qCwzQwbdq4fpQCz",
  "key12": "nh3cXuKG697tY4zPYSTT5bXxDgZtjP94ZSHxGnNw8SDsGYytwFEgAiGJxy6e6j64Xf5EtNPV6pALrztmA2jJNCs",
  "key13": "2Nuw1FEqD99aUAunBrzeN1AN3iNPSX9r3h7xKFxP9hVvMyFKqefcYEAXJjyk7uKdCcCQqx3eyXSK26e2hsEgSmsL",
  "key14": "3fen3PkubTfUsQ7yfBxvnUXEJfnM38AV3pAYhTAMsng8dkJTBkWQxUzMWu8QrcSDUTFHKgoiuVrdvbhYFbaUGP7q",
  "key15": "5YJf6NLoZ49wUhSgquCCUsAW5HbAYh4bBQtGHUdc7P2toSgv2QCiaRVH3aaU6tuXXRehmjQRzCowUQUF83xtNfBZ",
  "key16": "4s9vaBh4ufJ2tCk4EULZwX5WX8TFUePmyNihkKhWKFpUjsTkuQriujK8HqwB3inwe56d1qoWx4aAgyZ8zcWrFz3k",
  "key17": "2zMtSEZd6L48HqrdcFqJKNyiouWvNBbDyevcrK2MY6JRPqNZRm3mhj6N6a4CBdNpeo2pMq4TYsSuUTPRGmR5hWSp",
  "key18": "QUYErbu3TTNFX3kmtRtFzHTvyFZnG2tX7fTPfK8KPGJaMsf6yxYhrgoEpHX8rkMEgjNRsg7WkpeGeP2deMGLUMd",
  "key19": "2kkeby6u7rBH9thRc4PC8GnZcc78XHYP9NaSQxrZDihCEuEjn67LVzNRxbNQjCGpuAHpVxCEoBVcRvMSZmvE21VL",
  "key20": "3NWhK6JvPfqUya4NqjM7VZtkCJ2eHf8R7YbNmtYB8xU8fUvpQ2EMRe9ALkEQxVAXD4c6KdBevbYsfW8CP3RkuZ9y",
  "key21": "472TTQQ5mSfhFpJ4MgsAh3pDYjXNvKBKas9T49ggBzx4NDE5oKfdJhTRztqe1SHmH3qSqCpwia89roSbxEHotY1X",
  "key22": "2xTni3QZbFASTk2khyxJNKtvtwKWJMe4DtUzNt95oNtXqp71GLJQTqbMXM6RmKfrckhibQggrtpRDF7CuXhBpmAS",
  "key23": "3nrwKSuctsA6jUez6pGniuihrtXqv6QJw465Jh4SNUWnBiJNoPMFaygN6fRK42VwcMpTRUgaYsgrhE8H3mKazpTr",
  "key24": "5rrhaHtW6vbatZfoT3WQ7GEcrnYqmKrRHiVq582kCk1ivyghtFJX8kfEKQev3es7cgoHqawHL5f4MDhATsd9U5Z9",
  "key25": "38gRx6kZuLv7jcMWLQZYQk5Rh29V8BWy3LVQKQVDhTLi7daPSujVHe3zVSso9APaB6fnbM9ZbwsDEMUcDrq1UGj7",
  "key26": "3sNN8borYePh9jVjhQ9CHrNWkybQHq9pjUWRqbHTkPPwyqLFUKWboZY2Skqwp7W8biboLoCebaf6aguMUXbJ2rvg",
  "key27": "5aA4vVD5jozXi8SAJZRoRzxH9jnoQLtY3QoyQXWZ1aXHSHxm8XfMfPxhQXh8Sd1mafFTvJUWWGnKVhbn811T2kit",
  "key28": "2BbcQcQAg9KC3YMLhsmyREvSoSYe4H7635XLWoibw4xGTrUr2XcDjqbKA69VfsGyzGG2EiS6Js98KUmdxFmadHZb",
  "key29": "34UiYM9XwBtwJA1ESFZPenCGGPV2ZGPTjsYYnDH24mp7H4QzPgSxMms6VbrP2znjiFJbWQkoRTToG2xdfjhAnKyN",
  "key30": "35zNb3vYM4cvy3Vv8BYJXG5WBWRHHYXxeiR3grdpJatm9MdsxxQrEnBJvpF2t8xoHJq9Wn6KMbX6byaWon9FFWNF",
  "key31": "5bHUv4RH6Fmo7H2VBfzrKtQheBEGTjuuoWCoVnQKxdAFc17PrYotMCDqzxEsYhpck41NPHzSnzSzq9HatG3BJ4o2",
  "key32": "4rJFyMRbT2s7DZ7iSUcYtA16W4pxV7EDFHghNjkhLwaNC7WgRdcRgVHCjAyUf8HUDVxMK4wvfBUtMGyUxwz6ihw6"
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
