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
    "3YbjB3dq159uSYPCMHTTzbdVs8fbbM9UkAw67QfgYFx3cmsGaK4BN6AeejD1rPRD6XbgdyPtHTXEdsaW17WBxsmK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31uXtYQF8VhzsXRd3T95SkMaVydtgsYzjuTND2GekKsg56wKFLnPJUdJBY9mzz6EL8mFuZiuD35h1BTXsnUAtTrR",
  "key1": "5ibyuFyNxKKV5msA2526KYeCuu3Srpe8yFxokPh1j5FVhuWafbbHE4HVo4c56djXdrEP6ZJhqgAfeeuZg7SdLnNC",
  "key2": "4yF4dwto6wjVzFC4ZzRqVpvhGUj27B7yqdYpfT5uFMyHeAi7LU6x4xQkNykUFu78K3K5Fmk1Ap5M7sfWx7MMw3pq",
  "key3": "2YAgA6YgVYzPFWiYyUf7WiArsGQ3oYS5ppiqyxVPNfRhFhdTaCkbvr8CYVGwyaAsSb6mG7XX8SNiDKojagkGcM1x",
  "key4": "himY1m4kUDiFd9s5Uz42fo8iapVhbnML8nNGU7NRjiysVzaW2vTJQuqgKa8i5czpXspxhrbvdNriPzbWeogZsAE",
  "key5": "4PkGBgWh4LFfzAFg5BD7QLTsL6d2Pnh3kZcUxb84XLYtnBUf5xRCvYd1xT2nAmzaNTY4mML2D8xuGBbD4rTKgtmm",
  "key6": "2idoRcqBfoYxTddyLY6imKHjBfD5WtTVza8ZScUyqZgeRWgC3cyY3nDcH7FpWMNKDzbQuYwujPTafKkDE9egYq8K",
  "key7": "4oJDLAFKJMPcp9AwGGa9nSSn94z2VewLezP4WzKzmJ3qU28ZvSyxoFwfMsqLm1pXkXA5JwtoGTykghp3arD6JS4W",
  "key8": "5kpbLgNLndS14QEVeZdGeswvo8DAFoGohFLZLYYdKxTCUoHbd9igWgGz7gNkqZnXoFPeJP1WJGQiwxmNoTUWbhGL",
  "key9": "5pFGms4Zs4o9bJJPsrKMP3JHXBZEDV1hLbo4c9oVa9k9R9L53WYGFXpJPhUhknqcpJDdivRPtMKFH8TUqXXzf3Yi",
  "key10": "64rsYU31BGwrbcBJt31gTLLrsozzfCJUo1BCi4e5Ax82cPdFRmDdrPdAbSnUfqRe7WajRgMtFXVPU8BRUK1mAHwH",
  "key11": "28kCjN3g6UHWQC3vZQA3V3nvMbY1HRW2AW7FWFAemvNqDHyK5sFSZxEbp2fSE9cHiHW27qGVqiqgwkdGcyzAWkeW",
  "key12": "2HnQHyadXHffonwu84tKYcPECfQUsChTa8icGovV8ZkGYiv7Tag2KcwfSdXvJfriPaPpWdNDXGvQmiksGxV3mVUK",
  "key13": "XbyRqTeRneBZjsAbQbR2pSgWnnxH7xzMxZYB6Mo82Tj1ho24pTCEQuqQvUnLuvJCvoxZ1F6bA1zy959UgKZidn5",
  "key14": "59turdWc9hdRTFav9GfSrgcPotq6epH5QdoU2kCuYqbkbUR7Pews2Rg3UXryLoKtvUgxcA6cWeRQjy2vupQTvtEj",
  "key15": "5qSkqygWJs8f5h9aF74q5cvipkDs6Ys8Eicc8XqTJzxM2pu1rSBe7iYM5wGxyHmUbMsyjr41o589WuSL9nKccQkM",
  "key16": "5pt6VA4T3EAGJS86Hu2j5XE9GW3nUyUNviczA4bSaKdqEpc9T3wW7WhPCxXse3CDPzq8BZ9K7GhFQjgZRx5j9oYh",
  "key17": "LD9toZWuqydNTvUMJuQrhuwV4nj43oGw9Q9Qw6E83b2qL8diG8WMk8wv13B3zHALzZX7t12osJx4yi5SxUypQw5",
  "key18": "5VG98DWNg2wQfg6W5UTz3XwDXKEmfTvee7t1jeqD3kGYMwDAkt1GSgiGCMeVfay8LZg5N9Uxsk2MW8egj33KTXff",
  "key19": "42vKdiTWPikw4Jm18SURaU29k9u3ouDWzLPoGUt16HXbrZtab1kLxteZGgrqZgsBtFNuyodnCQknCaXhCHqWAnJK",
  "key20": "4YTKArsegCgbCGPqrgMzVhYsdZ8t7LcjfXwz4NQdNwzKFaPvGJPc17Xd621XyKiVymni7dskoctUTp16Fx5dR5KV",
  "key21": "kY6QbzCpK4ptz15pSzeor7jPqwoPMsBNvBgfHEXCXwo4UWM6SAwMtHuwwCnmqAFJVKYPd4PeDhrZXyCaewcrzaz",
  "key22": "4XfxWFrNv3jznFH4NQhokozmcsvuqBzxmPtrUx761te9mcDRHPfQwRkyYDnWdyPmbTWYsTHnqjG6LCGL8aQzCNVJ",
  "key23": "2EBt2QK4TGEPDHyKQVUkcL2wSpaBsLCMc9pSk2rDJQhdQ5tTSgpcCZp9QuU2AyERrGVCHtzLGqdGoSdkDDQnTFz2",
  "key24": "3LNYPQsBSmzzYjUFwC57kcrkf74Pu5zCjACC4J7q83mH9xBWS9ZCqkGckC7fJhPKSsPWDD8rtpqXFkmGdgu19Ztp",
  "key25": "4vf8F9kQpXCkHaLe88PfihrUAuaCp7pa8Xa9fVkZBVxtB19yaeBoQi5sMS99ByvAisBqgNmY63Fbbsv4HJBYP8nm"
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
