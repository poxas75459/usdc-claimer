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
    "5RmTegqrxWihtd6SgUdjt2uJ8rgs8uz22imAwuyLFtshhxfbBZZj9pKhEH2P1QaRCWjrTtVcshRkXAKRsG8xJ9P5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ki9hRMjcLFy8B7JgGpE5bkvdvyTjq5NqNFAQa3y33xi9Rs6UhWXs5joRdv6LLkdWNDVtzLccDTBdVmMMYD1ENT8",
  "key1": "uUCH3CWmo5xncJc1mdmGheEscuhLPUdX8k1yQ9obwStsw9uYFBNegQwRzeXompjHdmFhUKfDrLEfki7UK2frh63",
  "key2": "2o9SmWANAVFkeex8xdKb9HFM95Xz53GU7vqjwax5tU4R7D52QvNvfMVtihMtBp6LpCpXBuw88ZtVLoRzwE4WWji9",
  "key3": "2DdycdDSPZjdk62ST8iV3BocKqhShvyYJs7T8CUpwtTzpLHrurvzcUD8XGeMiY6ZiTKx9Y6Chw7VXKSARKdqKdCx",
  "key4": "2hz5TzbfMY4PSCsT16PLhvcHcd38QdpcYhptLRooQkgP32yU56kXw136JCrmJv8gmUG6KSP79aaPMg2P6skbHMDk",
  "key5": "EJF9o24RDoz4smB2oN9UWTEhNowiLx3vVa4uiHnQpzBf94J3TjbXNx1nSJWgyUgenbcjfkCuGwSQXHbW6ydYz4A",
  "key6": "6E7rFmHXgtrjRHc4uFfiCx79aNprFfTx2GvGfLD5pPpLqba7NuMJXZwr18BPrrZShnkh5REj6s8Fbz7K1oEvvhP",
  "key7": "2rNVynj5gjSEpEbJAEdungrzVTiri3Ysqhy51kBzXH432bgNXbwNBNipXtwsqVSEJL8i1whErf1wijyUZW8ThnDd",
  "key8": "3YfG3UZpjAW62oxXMiYgw8og465ehhdkDotqSajn6goxW9aXGcJceR3T9J1WqfRz5kzAdNMzq4v1xjByqTxDntCF",
  "key9": "4M95RdAXHwj4h6RP7AuoR7N7cinMhouywwvdQXqgWf3YvWmMkMCBuo7vRm4h4RQXfxQSZEGw7whLGwjAHwoMttrR",
  "key10": "2hPqU5RgVq6JWT7ipiMe4tMzhinUP6vj13HeEETrKcRXm58SdTaZQShMuqgouEhdwjSSU4cakVfeCwQ3y4PZWLkM",
  "key11": "4yn7LUzSmtvEtRhvmrNzdkUNiAAaHWkMKUmCtdFvEGoxDF8AjYtGGjzM3gB5HxgWhLp4w6yfWjR2QdcNbPCmHfte",
  "key12": "2Rg1bhnnF97jgwRjBCpPQrc5Z8zTSUePBik1FK6gYhNxHL5LByWhF5AotSnkbAA7vaCWXr8QxEwUzSzcEqbzNaM7",
  "key13": "2ks4zv9uEvyiG8ZHXkdjJiAGkkVo8W71CyHVLnWvRYR6u4HZcT2FJSFkJQEFpZiGCBBE8wyiURqCuiisgsigTJVr",
  "key14": "2JzYC4yLS6GfpRc8N6GHWqkE7t9f7Rj4nnKYZmRsWdLGuhD7G1AFRYMrPRHJvTWzAdWCmYuNTqo5J3NDqg57TyNz",
  "key15": "3VRzqXFmcRzMyj2KudybuNaMMFdKorZf25mpcrz6Ursao9FwHvQ695xtR4oGR9EmArfscPMHkTftUFUTrq7tAwnK",
  "key16": "BKB78Zh7ETabSgoTghTUrKM678YTAL4JfC7e4VkXeyXRCZWjdAoxuadWE7qi9ot4HUjeKPWXkCNYu3qNsCL1kyo",
  "key17": "FLEuHzSSiAXbQQjUoVvYENW6J6cNP8Taw25EFy1r3DhGj69shACG7AetbFkaHARiM8QRpGoFuMy1th5ujomv5Ky",
  "key18": "3DDs44QS3wxgYNMHGQD5C6vZNBgRk2ug7pFdHGBG1oGa9kqjXxH59kV3FcQsZo2sRX13xDiop3PRrnyTMWz2Ucad",
  "key19": "3Lds4wnsYy4C8jrgeBu8RhqEWnHsMtj3AA5hxFMBL4dVTx6vE3pNLMVoSRCSuAX81fP7P27zw4RJXQ7sczkyGzpU",
  "key20": "5BGWUZR2d5qWXnHrvn7dTueFRRUwZsVoqY7xvBm5zLx8AHrrNirmxfzhZo5qVfRUpcnwdvU61TKYf5yW3dxetVtR",
  "key21": "58d8rCH8XSMN7VnnissVhXoZmG2RGw3gbPdQcjmJdJFjBby67MFKdgARZR8APf8w8TpnGdZ3dKZcyfdTmB6k8CiU",
  "key22": "5duGMSX5XB9CJSHNFgmMNDXyBPHerMeE1R6dm33LAjFQg4PHL7oFrLPsWHxwaWT8DHDuGKRxt3fZJHJA6c7E7GiV",
  "key23": "33k9gJKbWP9ZbX2GgXNdqifQNUnMbsWeYvzQtTMHzSRLubLyg1fpjrKrsUxHa5UKCpZVLYWYx5aXH6HK4zEtnPeU",
  "key24": "3sXwwy4DwiE8K4k8ymA7rWkLLYuCG9AVgbBZFPYKJEX8XPrn7eBvAKZPGmWTqqwXTSDCs7Mka9cz9Y7j1jPe1Uup"
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
