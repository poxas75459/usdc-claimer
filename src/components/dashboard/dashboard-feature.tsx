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
    "vMNWXufwaGdgXeueeTbo5eMw1ca14G6dGRnBj59BUBfmmQXTSC9ksvo5whe7FAYwhxJ4BfVatJyXApEBuR7pucw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zt1GkjiMP8hAyJmxZX9wnBhDbyNrRdEocLUJPoakdZDXfz8r6PM9uk9nkCucVV66mEzN3EtdvVh9xzkjaLHe9ou",
  "key1": "29PyAoZvfEtHvPNqHdNKqf8Xd8armFwyLiz6B2d9ALeokgXmWLvWkiJUNg4p9RW5bSWG37USBHY5qbscVrhwJU6m",
  "key2": "49Y3SJZjj6H3wJkCiK8G4Wmc459tTE9SQJFxcx8ssEfVkX93HTfckGdEens76ZaA7SKSuHmPP2dTsePsjkKuU4p",
  "key3": "4TCbNLKoXLSWfHG3mzxrCam32kAhahbmawgsj2u3AqJMS4gWPpWhDPqCn1uuRsxgSRm6yEHooJXFqYM6P8ADNxAF",
  "key4": "3DCM9df7Lz815y3zESokV124c892ToTC63f9njbrKvQYZ6GqT8W1nyR3oT9Yjv5Dy5qdQSrS7xka7AK7KMeLsPMb",
  "key5": "5gCKtotJLUZ94Cu192xSZ4nwhquE1jgprDqmJwAE2pGCFrD5mAAAKUCtF2p6GutLaShCvGemYngQ1HnV1P8SQscb",
  "key6": "4dEMprpK8o5pAtjq1XvMqTcBjG8XzcSPrd8rMDCLbFLaNENCtvKfyYcAvUMTcUCdLWpP4M8AxydAcq3DRwB1Cffg",
  "key7": "3Sf99vKeU63du4TjLW1NHKaSLWTtmoiAWEWPoEA4VkVHwY7p2bsiVN5VgJ2NddpwZAXHA2EHUCxs83EFKMMmud9S",
  "key8": "vUCHhXQm5W5vEUN4UFRyT7GgMafV6198ig67iprqPE73n2gDc34qLbAgwBUbfXAYH4fdcwaacSEvUGQHDEVnQwM",
  "key9": "4sUPxEgF4D7njaubAjdQSsj7gDjS5jFnXeZdox2jYiThHisBrgefBheirCWYf47nMkPaTvdC4PZg4J5sDEJraZK6",
  "key10": "PLUP4P96q89SUMEUR8KZjNMLQwVhfywBxh6tzMBSiCAoTXai8w5cj5vcFxYNZ2kUZn2ej4cC1ZFybLhpUAMA2hy",
  "key11": "W1QRoXLYu4mWS237tkaKS4nc6YWHs4k5HXSKroP9Tq4hpt1CVEQWhgf1ceuMoHw45THx9NzMj6SwTKaeWsyRdky",
  "key12": "2b4JjXYvt4J8f3jKiMPsraxEAhQzdKgFzengZJeLCJ6bNDHTBARuVGLpAZLkEvqnwuSZjUp2iFrcx5BbpSYc5xvD",
  "key13": "45VWqLFrR1fwuKdv2dRC2gYsEGuHBBDseq6gyy3zpYLDo4NcLHw3ed4wU4NodMvUHCeF6GakajBGKnde7KbM9Faw",
  "key14": "4emt5mhJs5EyVrmD1ZF7DWVBiD26NUzX2RocMWQbmD31aUA8zcqvfG7HFY2DoeNXj34vhB7RV99vYDPdT5h6mQz4",
  "key15": "24qW2n5MQ7rkizcyJDh2HfGHLMguZHGqNdLgoLPs1LtFhF4YQhfVY5CU5zDv5RkxuMbXxGmDPch9cmzbuoW1pUvM",
  "key16": "4iEhoY4FiCzGfan9L29LW8FPUhtXDrRKrdFtGui6muGaxetbunttcQU2qoGRtavjr4rA9nubC4kbiAKRrZPqQQkV",
  "key17": "3jiJaQvyJdmPDqBAByu9F8t9pB7ADBcS3aon9oEqjpJaNfKnTboQLjLCZYeMZzpXTbj9YAWTRxAbfh9AhqQZg1G",
  "key18": "B5e1t3KtsdH28kDsgweawL3JM1dHvUwz3Wd73NU7ZWVa8W9dXi71EKfBy1Es1ZtPh4tiU5YXjQdTzhEfmS5jyRT",
  "key19": "WepU58pckMdL9Zn1nu5oWp3ECzkH2wfb21AfAEGNky6a3fM1heVEKNQmSF2ejipjSEtiMFrwD2TEZchzDpZrRXc",
  "key20": "pLGKTN26AzgpTq9Ya8s4ECg31DQM74qhZ7fM1w4u4Lg7CbT8cs3jXp6CrGbw8CnZenkLKHAchEu6iTHqDJoJY7g",
  "key21": "5RNGMiDmxsKwYoSMEij4Vpzf4zci5Az295JvoaVLAcWCopXTse9FZaK4bPXQDbGj2kuNXvZ3XkswcurpaHAx2Z4J",
  "key22": "VFHsWAKUM45PVZyeqZFhq9Q6HsdC4rHqbuAFKaLXfPrKiXCaxPEfAMcL2ZYLgf2NCPYTq1otJnZx1sNS2bMWT6P",
  "key23": "7LDt86WScrDW27DihvHmx1owZkHr1uHncHKNjFSsCDihYidVemyFeJy8V4qnTXRQCKMxBKCNLybhcT7rqB2e35m",
  "key24": "kLRMLbSnSJrAb42TNobEW6CMZt63TfME5DYSRT5qVuh96zUga4jQdqMPS8KctCJ8NVJhjQVTLcjBCxUL14iEPDJ",
  "key25": "23wCuwWgyowSZ29bPqE2XQ69AcuEHnvuaSznPLfDMmGg96cXs8Ho5cwhLDr2DE9gDNZXwUEZRWd4C4owpwbFu72P",
  "key26": "4z2qzV6FxZGFkixcGQfSZnQeSxw8PwKMnzh2E3kGjoGF6G8apBSbti7ThkrCoLw9Fy7s2uZBywHU9jXZFZ985JWN",
  "key27": "5kUYA3BBG71tZ76cxuUwKtMgPsNY5kWpehkHpfsA1vD7BjMxUWn8uUq8AScYTZgL6UZTYXnXdmaaPSATLszbBdAb",
  "key28": "KQac44csPMdUB5G2EvoRHVyctdEzNJjVFB6AbnwwcSf9Qm2jhoZXmitzyeYRzguyMEbSPFnmEXUJ96ZQ7dENFeb",
  "key29": "4hwFsXYKb6WUcCAK3gKiJcBYDn627mtvA2nh5vTQGiizpvAFr5Jweg8JgxgtpSfpLH4TUJZbsrQwrHmawrpa3Ng4",
  "key30": "2uktX87tojtbLe4auKuNmzFc4TFNJuG1ApifogD8VUQtkqgkX6aFFApkFHXxKYfLwzRs2AVU4hKENoBzQvbJxs6k",
  "key31": "5pnNEKBMrwNqcoJyKf4zW96X75oRGc3SYDVbcUwaf5D9ChkwWxNTe7cT7YWna9yRAKAvz3X7d5j754LvfTT72MHm"
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
