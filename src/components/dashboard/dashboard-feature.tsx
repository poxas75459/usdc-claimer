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
    "2iPVEwv6zVF7GRV38vEdsBHuVJX9Ko5GMG5zZt2NrWV4iVANXF5k8u1FP8WhCxNqhYq6oXQZaP4Jm7FzGBVdztMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hb8kdCMMjYL8N1RFWmEtVDxuf95Wu2kqjHiMkXDrLohRZXF2nUT7UP1eedcF4kcWtvTfAMirRR6T2iYDtiEBhuY",
  "key1": "74YDnxopVC4qG6qeMSnDKDAjxMPPVJZFW2S9TM9soXTwvkxtQPDbAi2vJgoFdxb4HoicVeKJjYJJhqzv6WV72z2",
  "key2": "57WGkaGQN5F22k2Lmj8AwfZ7fGJzqNH2U9U6wohH4J5eF9QmVjHjNHSCkqcXhgeXAYumrgQe7obB3SvoCQHUZ5c3",
  "key3": "4pSfGrvYwD1vNc7A86Dn35hej6p2CK4xYprEaw3bocBoCM5eUxjjQXrEvH4d4tSRbhmTjaK5dGtSG1aj2h39u6Cu",
  "key4": "JzXF5kGHudZGGGyWkorHQQfZM1Z4u6GtsVtJe6jqWpD4VR5i4F5tq7LgcdLLpFhVctizN3C4TdSvFnZ589AJ8pF",
  "key5": "4U87GrR1vfQHa7Fs8Y9rkNw2CEE66ekQWd9xxFxPwezmjtSqbrUF7aNsy1PPXzdxZzehRBq4Rvo7evNANSVM1Gi",
  "key6": "4pkE9cDQhCkEMbezHQDn4D3sbAS6vigd137tQLopGbtymjdW7RCHjkYK6ttrMkNy3rK4cVjn2tBBnU4ddsf29CS3",
  "key7": "KG7QjpMv84EoXodvUAi4qoZXcmy9m5ran8sBcZXCMPa4PsnjQTuhmC7s1gv1PHFa3XDRZZAntvrnueXtCEm1FNz",
  "key8": "5hH7mTP9dK8SAfViJN5S9ZeFg5NkfXiAMFsxpo6GsGpZJpaCB7nRDkvhbNa3ZqbrAfjVYXUN2rPfNeXjqWAfLPtV",
  "key9": "4PWLgP3nFy3sLB46PXBxY2ticS3N7AznJLd5naJTV5MnLG5fi9R1NZ62UfuqmzPcvgy9CY4QynhiYjkKeEs1oVSy",
  "key10": "2vNYHB1dPxtjxWzsH5Uu2ZRrDiECV9BdHfQvvPN6cN8gGpUc8jeKqYx7PfS3YUdVDLyVEX2fZT9j4hVUejgs5MrT",
  "key11": "2gsxSkWVrTk5FZR3NZJX1f9qSWnayd3ZfAKt9ei54cyuP16GCX68CpvgnvgTMoM9gTZHea398gL4CBwnzn29rE4w",
  "key12": "3sje9PN797dTqtzYuJgbgEPeuZDcWGyHen8cFn7KTPqLPWnsJE6MHi7oo9o8xmEtqWWKaSeq9e2iFLXmF7STVh7J",
  "key13": "2U3FJi1dUXZiJmThYNciKa16SfjDVpi87QLBzi2zQqPsT3kYnAKWoe7vcWEWoudNNiXRrNpkgkQMZ3GFJtLn3L3X",
  "key14": "3RYhidKfW2QTe3tXZDK7k3Xv4q58Js5KcooZCzJMUWATEzs8LrsFa6FsJoxDgkcXuFsnnoR1w8PqvJyQWSM2ojMm",
  "key15": "td9v8oKp9MSxpNjMCizHj6wBKJB1kZYkjBqkxh28ijLVYWcDhJ5ASvLrEWbseG6kLKbvUA9GCzp3Cv3YzTzo1nd",
  "key16": "drXmzNRPPPvdHnYYagAHS1NVdJsSZZ279R4dAu1vJLUuL5QABYK4jUMPYGT6Kg8brcncUrCK7Y6MjgVLtQrQfkY",
  "key17": "3stwNt3Sn5qWHqiYrpNpwrXr71StmXbNM9ianiFacEzbKZLDjJvnjLhccSk2dsLVPNviiHq8iNKWhtEN1NKuw8EU",
  "key18": "4SxKVvX26LZizyskGsScxtXVGY4X3SZzSKad6FMD2LPrzhDVAyurwrQait8JXSyyGtfhHoZAEWhK2oPeoTA1anBm",
  "key19": "3MF7nMUKvwxZW8CYzHQtLr5ZYBwFz2EqMCZz997nKu6iAibDaXvMhacipMMvg58hWM5y4thY1Z9XDUYeqoLfZR3E",
  "key20": "2dE93XPXsmDSYfR7bPWEysLUDxgbVZQcsp2Kx7V4uj8a7XsCWmGJhMLnKe3ZtryQcf67bVrCGvjWeeVTcvkgXgWV",
  "key21": "35kheGygtfeodfAm4pocsRWzpTwvd8FT41PDyyLSDHM48BZMtqGUobDNLx1WRHfQ5bmWfHwhJdzbhjgNcgrcyTRi",
  "key22": "4gGz4TYYjG4MZnrDdrBrLm2fcbeZxk5MC6DF7rMMG7SJiy4P3BEUe8wJtdWqEDNRvc1wLKPsQt32Cmqdui7WtBao",
  "key23": "3n5KP3qSjF9NkrgcW19rzdpii4QPtySQ7pB5Toj66Emh3nQzxYxK2Js6G7P2ZjWS3qsehH9ENLShP1ffVKNgYLHe",
  "key24": "ncSPzd4RCbb63iCECe358CyT5atC7EtPDbNKbn3XARa71yR1TaoWjTPGG5j2gFTww1SAmeo9vaoPKPrmrPBAHj1",
  "key25": "5SGYDv5yBrX154MmC1V8n1mEbLDwKJ2wQC9JWD26ZXB5M5sGYDP213ZVxiQaFju2HgiS5bufhqFdYx9muAuWonjR",
  "key26": "4WVL51p6oEe5tpVn7RgESbqGCeMY7N6zno9C8FdNH7uHvYAaxcrsWNXxSkcgEkNJTeRSbnXyh3m4fAN1bStmSguR",
  "key27": "5g4vxxT1pK54hTsmHEortoTcK2HWUv4vmgznPKuT1LLVRHVn51PiT7e2V2wJhYE5isUqV27uMz7Pi6QeaQeifhvb",
  "key28": "zF2LficoAHMZegTtPNvX8FwPxnkD6eoKLdEzCKoxwpohfJzt9MA3iX1GZMRsP2o5KhrPBJykz3jGfc1CWuQytdc",
  "key29": "3EcgcG3Qur1AVXPfFAS3aNiGnviL94zjcDfikbUXcCKoBJQP9M3hFR3XjbVCVA5E66hpYSnEEqj22YwXkAP5m3fc",
  "key30": "4ybrebpvPhW5eS1VJXh8GRh4jJqmejAfDQCD16wyBn2bgvVdu6dsba3YrmgMh3A8z1D8xz4apkrCKE9rRgNsD2hu",
  "key31": "5ihNijHRmZXgE52Ruz4ZEYudLuSncf6gjSwZm8jSEQyJEEgfvhrwT9LVyffybfJEQ8Lvmx5RGLyACV4uTJVkQtok"
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
