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
    "sKpyDsmNtyCk22aVppeRCfXALgvkc18fcuvboY97d7tFVvXFPXvroqRMiH2Ww5HxFXPB8j2piHJXTHF36Sv67US"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HH34RvFFGWzWVnHGckAnQCSyLjM6B14mv2fau49YxDWwv9Gezjais8iJNPj2VEiYHZYxW1ue7ubWayhKCzVvqkA",
  "key1": "2sK7RUC77KUjxDDg6LfRo22kdDTK8WjifL4TMhQT26Picc72CzZGKeMvpE2ErwzGkRN37j8Rr3GpFj1W1JgRDfWh",
  "key2": "3Fkwr9X1r7vDN4cTCDkbmnXPv1h6yFYBcns83Fzykme7CAvFMVDGhozofDVj694U4C5yHYQvcT81yGUtYQDvFCym",
  "key3": "4FajqeZRkWcqQiznZZAeibSmA5Avu6GmWDNSmDpEDV1wyQuD3EkoE5CDmVEsUh5ce3eQgVav6j3HmTXryDUE3rPC",
  "key4": "Dx5ZYa1Dx44MdFb9YubMABok1YgPN38mXXpSLSoYFv9dCUpqZoUCAF5TTPuUzPPg7Xm3wnzBHNEq8xk7vsnfkon",
  "key5": "a1h6s8p4LWEAgd8r5TNiH2VmNTi9yEQE9dRFWgpDRqcHq5aASqGeUqDrdJDooWvREFyc1apkSe8oCRriHmRxquJ",
  "key6": "5Y3hXDC85TWJVSmFT16iMYtNHmAqzEEsNAh5ia4vjLJVx7nWYKFVbiCF4T1PZsexx98uDBMqojz74u1fQL856Hsy",
  "key7": "Jo6VhAD15tD7eMAbeQEwjgfcDCR9ehbHLYQpCNjE3q4E6mgqUPgagSMiEG7kPg2uFUULSkimSRVixgyDNgdF2wG",
  "key8": "474NjsEHgoeMSXk7QdBjDapWZwtKM7PSkkWnGszmd4CngYBaouNin9aGZtmeqBY99bW3Q53kZgHmL3feTB1Us4iY",
  "key9": "4XriLjNc7iFDCbdciWQhtrjG228r86G7UCHb1ZB18wEZNfVrNrSpJabop9WAQgfbFbJPV6kRwYfqWBaX4Az4gye5",
  "key10": "3AbGcyoEfAZzGogPJzuwFnzG9oFqqmwdKyyZrdEh3PSin7rZ3daSzakDuZXEuQNznHBznAqifYeqNQ1VrvVVGPb7",
  "key11": "YHtgagorMiaMLejFcFzEafhXYcoP6DUZj8tadXZ67vG1vwzzddcZPZi751XiM7RU83niAcXuZgyCarm736pp6UC",
  "key12": "tUJBo48QG2Krhb7kPfq7ZipkzpW7BnYZHq5rWjd1WadU2uNX3xGf6T5ahvbGR4eWzUEeMjx3Rn6xAofckN7uy1N",
  "key13": "4D2bKBn53KGTAJgiuJ3FNddLig1nJxv82zb6vMUD8JWuNhX2RHj1WbDWymovJbtEcqiSdnP316ZKF5DfnZ4UG5X",
  "key14": "3JNUH2uBLx7vkxxjdzRaXLQxMYFMU8GUrQ2Bs64A7GqUvE2B4kv4YkQxNw68ZbwRi6ixCuUQdA6fNV4sFxm42j7F",
  "key15": "2n5PEDEgDUuSj9VpeJFft4gRsKT8aKphv272sck8uehWNrqiPFFE9bGxQyLmavXW1C6NhzPtaa6FjXP5F4ABwG1a",
  "key16": "4ZcDTnpWHcopVVMbid3ivYJmDyJhiefLyx28ZM3fNa8n4d6ABygCumm3tRvUCz1yTTDEdqQXzBJeACUYopEmwG4o",
  "key17": "4avF9uD8vdmF1rmrVgFkjin3QgKi2TeybJukpRZJ6uv6UxREyxU8AET44raFrkkbyMjb6YeAvD5cg1W9WwdkaXdD",
  "key18": "5YLPH2oP53UFAur8r6YJHwT1XJivqbbLSWkoDXUXY25B2XZeCBfQHJrGc6AzxoCkm5J4ezGuL4kj4Jjy68T8SkXz",
  "key19": "5FkDCCL97hTwRSfJt7sjayEsFjQ8DphTF8L1wfN4kT8a5AjdHVtHLC8vSFydSMaxX7WVHq2oisEbeuKvqj1eZfg3",
  "key20": "wCfxJQX8eJKnjpkd4XBrFceJvtMQMwXPL7AyVMrnGm5JVgdKroUABefVqCJWHeCE2rG9igBNFei1WwaiE9mzmua",
  "key21": "45RpGkx9VWcmnBe2ixyJXMYhoJXyPHWdLRLKUVnBGuTQ1RPG7QwuBZud6YrzQZh9SNp4GCQnHSkAVRYrkbPemGgT",
  "key22": "3rC48zunAgzB7NtkUtUSz9cWrGAjw8qJt9a1MXpepYYhTg6CSPwGdKzaVfDobj9nibZhxCYarUH9FdgCppHCGmDX",
  "key23": "63SdbWzDz1BQQebLaF7QjhS9TLMRGPsJPSrv8fQYmTbUDBUy6bLc6rfUxZ2nHhbteVrsTVDZYQTyjtGfqLtC4rLD",
  "key24": "BE8tuc1tuDDph5JU6apaAVoTAbGVfYsRjizZmBmHRCVY88JBQcVLV2cHdyYxTywiTHykQZPf4WCD5byENts5qhC",
  "key25": "C58wJtKBsf2EJadCUtrMQbmEQ226BmrRCEbQsE71v41r99RuvHYq4LqCjdFa5LoB6KcTZL4nNuynEDh8wVP27ZG",
  "key26": "4rPwpwY3PeZEsA7Y5pzckrYhSkzrfpw1ezu8XbCRBSN3AJMsiv7aYku6kVA9KDVmiZJSeUsW2JpgZXy7CYVRWMAw",
  "key27": "3VbWSNgHfFLLWTHBj9fS41DvD8Y6M2aYh9Swc279jMVHGrte5aaKMrqDhRTy21ASdCQ2mwvuXtPzenfd4nj6g5Ya",
  "key28": "2KtJM7mezutGyArbTyQBBdQKahjCNLSjuup7xvq7W9aQQMZi9cguQpc4nDQnrSMXuNYQCkDJRTJ3bcbhQEtbHbqG",
  "key29": "27yvAGZiorgEg8ZFqGULAcCvV1oD1nE1f4hJUhe6MSi7WySQet6pyHG5RZax6ijBjo2VbVVoemmFNbAvjCYopW32",
  "key30": "22yfJApWqJJab47nUWECkDknxsGAwkJfHjGF9oGHccg4cWqT83qsTTSjamvG4xr4D2y3UCVxmLSs4RaZ5m57ijaJ",
  "key31": "4HgPQV3Go6j2udBYA5NBjjVHyp2vSppZmVqRmNPjm8Ke5KqTzqYhof7Vms8E2qc53RafN62VAwkzSqJXbJqYpqxe"
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
