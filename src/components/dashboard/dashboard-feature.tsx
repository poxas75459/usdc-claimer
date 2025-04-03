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
    "3hSwRT4THVfpDhbrBcLFncn88R1kP5pdKnjuRf9BPNxVdnYdqyVsCybyFDfJDdCiwWBtXEWHRG77SBimbqG1LhQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rQ3QhZm5DszZa9nU2WyTyomFcWyiFLtqfMSzaG4ghLjsTPHprJjBcDFbzZ9jPaNpWorVDiiJCHdjgcfQxVZsVaH",
  "key1": "HvyfxaMpkiDrhBacrd3tNhofDG3Q8YgmPvJ1KzToDBkDYUbm7ZLWxF6DUNNpk7fbYXcEd1pRX3zYbuza8vNZLp7",
  "key2": "bAeiWZtJQAFwi22uLiA2qT1yr6s3N7nqXVu3YpzUJRBpPLywqh5TBtjji1DvNdBVL2TjvL2xS51zJCK5mJaVDdQ",
  "key3": "3P2QZSvd5thopVU71Y55XHsNYWandwfSKn946SHS1BYYrr619Nu2NoxgGqwrNa63DyE7zbvxr54V83H4DCjg1p1a",
  "key4": "2jLEJqxDx5ygDu8i93ptErsDVWTv45L18rNKv1UpjbEPzRscEMLuaVjuReJZ8fxVF7xynjnwG49TrnZPPD3XhtKG",
  "key5": "444scjnjjq3VvswPYWQ8fETnoTqEEfihwZ92CF6KJQTUhUFTUUnFZzTzuPzBtBLEm9irHBdNGZRJTfiYAy5F8zMZ",
  "key6": "95giSDC3kon8mqzvDuR9xCtftRBQG1UXnnQefXkqwKH2FTt5SxmJRLmYGRNmn5Bk6nhoGP456zp6otfTRMPfdmu",
  "key7": "5m5Y3cengkaJfdRLmyVsfvNZtYtPqGKoHQaVXvbkzuHEXTDRrxpC59dNGEpmuVZgM7iZXX6Kyi6V9pCeNtG5J4tX",
  "key8": "3oe7t9hptU4Q61eZrFqFQm9mQvixL1KHMTRfeaZPPGsSTAGHB2FUKbKyzjNftDSVvbFBCe6UcdW9u2931BvAbWsx",
  "key9": "5ELikh4e1Sr1JZMjVJfNufEdEJkVkXQg32ieWtkGX1ZjzKJjD1aSqCd95HDxmkw3Ao7pFSb5czgyUtWY5X8uSWCB",
  "key10": "4TbwWiJTEsZq8k4DkLdCWz3nRoSvagw1TdLaVbuu3Mvmmmcd6XamvDu9qqpNtViJLK5ok7HRw87aW5zU7hpiXvxm",
  "key11": "5TFCvwapCv2TpsiWo78j7vxNCmrzwjyzeQLxpaLbg3MGgmehmQszg3ZCsLXLEwaDoQj3rhaj73Un1iGPLkWMpdiz",
  "key12": "5zsApfoCCrsTmtWZhb1xqE3LAYQyimrDQCWeLJPiZgrQ3ZHvk45TEt9WS9D2829Y9LB3MtdkAcBB4X6KGw1AXym2",
  "key13": "44AxFB8oy7rZEeyEUmcvFCqkZRpomw4z2yyX6sTHTTYXJp5xcYRysu9omxR1NTe8KdEjoB6AnWcwWb2u81sDkYym",
  "key14": "2Eca8bZ2pvHvW79Pa65Y55sFHdptwev9er7HZ8kHMkJYEFX2GKMmADd6zHkXMzW17uuajoCGDLsZDAu74prkQEZd",
  "key15": "9N4jFHq422fKd1yvgQUKG6vJb9e6ByaHmnSkc6fH6qVKFRDMzjmjDVLY8FDAQYp5c7QWPeBqdMySzwFkmCtsME6",
  "key16": "5YGkzm6cYBPcsLMvA4QxWbMrgg9gndyzeSTG3QddFz4p4pBFuhvetdQWg7wZB4F5DUFi9BonheGzmzz7c9nmQoMN",
  "key17": "5ZkxbRqrfdvg9ZZ22z7FHycdFLQePPeVt9bfXS3VRweAfBv83eWhyK6XTMiD1Xn4uVNfBp3oMapHVSZaaRyERFRN",
  "key18": "2a83rv5muovPeCC6HbhtihMiqZKqiT4EtbUxBJgQq1CghKSJVofUaZX5UQ27C6dKhXmPgRbhBQNPsyhjEfrNzf7h",
  "key19": "58RtopniVd4QE1AbY7XPT3HinfdPoHEvuAKN9AY6wC2DcuzqEftSLJ6ZF8fjepbD5fKEct4bHZJ12rvN5b1nWnyh",
  "key20": "DTioxS7Ptsq7XtkxtqwEhffceRH9n2hjQr7ivdnn3YJLKKT8XzqJYsptCbACDr6n6nVTZvKgM2uBBvxRvXwNnPx",
  "key21": "r1q5gVwMqxZ1Lac5J1CrD8FACdGHcR1PfyAN2jvCie5UgysrfeCUoH1vsDD8eYCPpsadKw6p6SrK176QzFVqoY8",
  "key22": "4Ni3yCtvgygHdmPhdiwRGnJo3e2QrgriA3phoA6rvxbxjVdvqjMvgCFP5hg1jVu7KHX1uVrMGw4eBLhuyz3arHKq",
  "key23": "4ubuZXY1hdXeDmpyxKFTUeKVcsZ4fSSgPHJyu1AqrQQEWaD7QuQ5QJ3RaCStdykanoDYovv9agSCkjHio4PRrEDc",
  "key24": "5BTgGj8cwXFacF84fhRCg9u6X2J8Sd4BDL1Kd4kbvk7Fw4JjkDpJuVhTL914i9AwYQZWWJM8acr3b21sLQQ68HFn",
  "key25": "4f4RNfgr8kA5dvjuLcy4KJQfBdh7mfhUUyJj6tiCBNYNSfv5hesrcJR2cPXdCpLMzrPVk68eRP2CWKvUt3krXfhG",
  "key26": "4gut5cXVAyacC6KdgaY8nviHq69cA8dHKMK3eWomuDzz14sVfNkakCvHVvuQHrp3gGTig2BFswwpAu3gorfP8MPp",
  "key27": "2tUy3CHETGQgXVwo9rTSy5UsS2cNDqRNanWBeEBqxfaykiUsAh3etC3Xjp4k3fBQ7UgrddqefoM1w7NEpeb4ECte",
  "key28": "K8EKmPpFLHfUP1zCNH2U96jFF9jGWYgnNKcYBaZLzzTBvwv7nDFRZ4U7caNqCcqmxjpP6ukjK2SxedzZK8tay1w",
  "key29": "2qkL7ssnmaR5xN86fAKJoH6oz6V6tzSSaPboyrVwmYJwE9Frmb6xXyyf7nGkHAQAiicCh4P3qFhBFV4zmyy5Y8XL",
  "key30": "CBCvKmxjvZGYoKp9vYSnG5gwafuSRwMZAug3WYKUiicjAtMRGD7DT14ZchitPpuK954hK4UPLA7oTgCmT2hYv5L",
  "key31": "4vm1eDZDs8tp8JMZnVmUvG2xpNanYdziC4TzAN42K9x4xhda7sQqZmxW18BKrp4gM7E51rPoL8WKmfjZ9T4M9BTB",
  "key32": "5UKrMozvnqenAnmb3TuwZ7eY68dBjVwtk9ZVGiT2dcgwDKBREdtVWGNqXuPNErZtUxzRbTW3FBcVwdhkQwR5vQ3r",
  "key33": "4CEts2JwM16ug2FoGD1hS8FwJpouPCxH6c4K2vFWBYdJaCcvbqs8yWm9RSVvNdXVUcDxTAFR8YSC788NAjERkTaH",
  "key34": "225X2HPE3XZmSjxj6ZtMHxQ64DjCYPS4EMfNEJ7ESXF3JEEz2JFyKH47kZbLsac7ZjWrWU5CwBkKVUPSkmeWonzr",
  "key35": "6E2ADRqHVL227bor46p7inUysXaCKydcfpEeDMJmksE5p7d2E4k4XGurPD6iTN5eMS29NbY5xh1bqiR8K3n3qNX",
  "key36": "2XaGkf5b4bap9jLnUfS7aD5xKmEUQ9wqQ8wB8SwL1UVapXFDRMADcaA1WTQR2bJvsvJqC6vmRiRSkPJDqAS2o5aR"
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
