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
    "32of2WFFhCDcZHFGtiDsmrPc4XsVyKLkWr3NTuwnxyUhc9bAThuspj3mDPPRTUvxxCmDqbKXqm9EkreFGScz1z7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i1ySVtsFgwAkTQD7fZSSuRLNLeu2rdhPbNgWAMPWEE1hPjJnhMttrj7djyGT7KJ3MeFDnW4PPrimgTbPESJ1xpc",
  "key1": "41L6ALT9pL2BzdPsNJgj3tWTkmfeeyRTf11dtnFrnafhiTwxmq1Yp2XuUhqFU7wHizefXed9YmHPqxGPgZixsBd9",
  "key2": "3ucF4KiUVMfxMkfo8tK6S5kSL9yfrjPEpVNKt6eSsdYy3uPVqDceEceU3E6bRaQwYjKQ7iCptfFAmdqojgDHFRCv",
  "key3": "4NtP8b27rKf4HHpoWYAXophLR1219Bd86CeN79trsB1qsDXjUr4PXc6y8EMJDJZnPQcnPHRbd7K7csPaLy3y52ny",
  "key4": "qcMr3iaBU6TxBXLXZBkJ6hBxrYEpoLvqMSXi6iRoE3gKpnpCxuB9ADmXJAyMFh33hQNkp2uNhK4HgxKSeLvTMD5",
  "key5": "2Q8G6TcesHM42rACw7KTqgCMqMHmeV3RpVWaoEuuq3LwRAT23TxeFgTR6FC5cQx2vB2BDZzwDbm2zuEbvzM8qhWy",
  "key6": "2N43XaygBAXphvxEvZP7ajT6mfHjLdbQHC2EmxcdPTY6nXg4vGKWkuKAtMVSDuy5XcGLx2pY7bcujCbtZVxAqvQc",
  "key7": "55N6FHk4Qugckj92gEbCbN8kGtK8QEEoq4o4KGN2jW7zhv7aPoYsxHj7N21uLcUyTkP8YTuwKeJ3N6cCukncYN1t",
  "key8": "3mBitAUpHav7CLfEuZiAboVu5T4NhabGtTVHUNt3XuBaQPeg4UK7ARWmPWNUEDrMAbwTr6sAAxckNdfhEP4Cq4Lr",
  "key9": "2HgKG6UrwSyq4NcHdoo9Yh8HvMYuYmxvLQ57nkKydhhdc4Wd1V4FSygq5MmFvjffYkC7Z635fZ5AkT9U3GFWw3g9",
  "key10": "5Kc5Nu1y41nrS17KH3rYsZePRVjb9ZgCZWrtdsMQmPpJhB95ToKZxFTFF7nD5ASmbMCj3apqDFzv84cWZjkMzJJG",
  "key11": "4ykp6VM2GBH6a6uaorabHMg4F7zK7rjpXNLNYz6mmjnYLkKnwNd55h7CS9bHtk7rQZD3ZN2fHd9fTCSBFoq6eA2B",
  "key12": "4xY4T1FGVRaSKY3B1RrGRxHCvw3xCojNRh1UTaPcz4aE1NMfqyXwXnwG9wneH9N5Y7uxSPqgPt65Be2rCjfyxCv6",
  "key13": "2TuSEcZgohXhdYSU4D8ormNHmS6gcSHnfdh8C3RLYxnw1PFjSJgUQWaS2XGFp12natk5AiVvi5eDKPD9R5rjuAkY",
  "key14": "3uFopCrXWWhMX3ow7h2BLWiGhAXfTHbr4r7KWCdXJ7ENPWHGcjvR6mc7RzazaMAGS8iuqYnFca5Sc8xhcq2XFjN8",
  "key15": "5rJSpkmcn4eRcFdeQ472h8DpvwND6ZAYroW1tTpP3CFuuwGZ15JEhMsjZcKuBbqFkPSDAPTn7qD2ovxr4aLzpur3",
  "key16": "cs6ji2VLzzABhysexLhbMwdNi4x8RLxht4Y1REtVRRdXhcd2H1vduUVziEc884bEK65n33iMN4Sj8PmMxYyLNXp",
  "key17": "22vgGKDDrYRcZhprkgnMkZM3KoH2fZEkAFSk5G22tNNowTsx1SVTuEww6wdveepZNY9vApZczZpSBKDfacL8mt6U",
  "key18": "q9vyDsmMwyXmBLyQt9tNW9d8pKmbUkZmoUsoAmu72zUfgDHhtMYiqhT1xcyaqHkV8eQrB4jFvPZTHqKnY6ZG2je",
  "key19": "jbLCCnXDDcpPuEffebafL51dVLqGtXcAc7tgiFv9RtThAmBcYFcfKXYZZcpnf36ykq8nQDWkxuH7zumDvRX5PMh",
  "key20": "5h4WszZT45scVszwfQASKAbbwAsDce4nqHNLE8MbKBU19AML5ta1zXztUMPHwk63Cqd671tMFHfHyJEhhUuAeC5N",
  "key21": "2gthgrr7BRF8yUP89weYNXc8PGCodNEv5vCtrkdnbwqw3qtcbNfALPKhzF3xhomci4nsn3z8DwVoYUHZrgBoD42U",
  "key22": "4N6d46JCcLy11yrzfjH63h4RsD8GrmjoD2vgWFj37o3cMjShRUfsR4A6bP7GVUFx5GAaBjHAFh63xaT8bTuDK1Wb",
  "key23": "4TryjfiRoRAx2afCrTQqYF9xaAhc87LJrb1ZndhyMXbnzLiSdS838Exxee3TJTgkkEvsBDAyhCK9ZmdEM6wpHqUg",
  "key24": "487epY1wB6oqtwsdMzwaeiq4VZjMC1FGML3hpZoFBt1K2PqCcVaMZpHr59vuh8PXQBmW7L6P1jTGCE3tDXMpepv6",
  "key25": "4buzkqVLBQ3RcJ6NaHiPaVwJXsJ8VvcGxUPqr675QfjkAj4ZKG98fdptMjesMXraheqDHsEdHGzkUJbothmLfXEY",
  "key26": "D5Qw4RqVCDdkFhWH5p8VF3pdjGjS55HgV7Wb6KisChNaBckXrPeJAK1PcAyhxYArSYir2gimtUHZm2eWbupU6n7",
  "key27": "3NbTSNCue2dVK8CDfktm8puEadJFmzmwMAdbTnDK8dXTGsck4Y2AQzjCUZ3nnTfquoauEXDzeBND2b8DEvXzTD4B",
  "key28": "3kzPzHPDzrUWAUE9zp6RnvWcZxJJvSf4qyceNnozQAQ2VWFEe5qw9TJM249EuavddjXXYNxzggXGPTSUpEENkmcR",
  "key29": "4oeKQhnpeYBRabkWQic86kgBvk2ZhvNVn2jH25EzMTJAcnub9iepBAMXmRf6Mtid5VopaSFXJEGoX2xoY2JdLWuN",
  "key30": "3wJe3TLh5fncD8NY8a5SUFEXAP5YRzM4znR9kCnJWXA7EwPasf1xjCzT3PpNMmQbo2eKREZG7qZENnqubqcNpKtF",
  "key31": "3R1RcrEwDs7Hi9hRcZ7Sikg5quE4u5chsZmyJJDGSxzG39Ea6XnTDzDg1kZFFdfrk9433xemHopvdLpHRUNKDDPi",
  "key32": "5sbKJ5AZzz3GDDXCwW9K8cK7xyQBACgCFPgfZ3YuAxejDpz7Pn33R8ReyEt3CMxpmrY6YG6kZSYhkHNm4UZKPRrV",
  "key33": "4tamoFsTMPLVfJXzSQuK6dPM2eVRnYhEUZro9fe4aLWFQVzWDx5zfZfU3sto9F5Dxx3o4K8xN8QYm5M9qYaGJpaA",
  "key34": "2DxTpzSPGs1i919gEwRTqb3wbxb7r2ApAoP3ZeKoyvzCWBHnKqrNTPb8kHS3afqvvCxPhgqXcyQMef5YfYuW9QhZ",
  "key35": "3Skz17NymsQtK8TsXrWE1LbwgjX3fJFCQTaCvs1iHWnGDFvACUCdEz8ogo7TT6XC3T3eF79LCB4jEa6kKh1GbGqJ",
  "key36": "4scPdWM1y1EMz7EDtEysnzKTsSF5rzPzXN67cKXbLPgXZwnTvi6oKzEjfe15fqNdEg8YTjGKjzyko8Jk3AnZH7ot"
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
