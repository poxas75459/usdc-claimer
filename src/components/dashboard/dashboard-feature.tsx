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
    "32tBKb7uZc71Wv89Q7WuHaaHnnUu7KnjFaexs34DXtKjZPxqDWQVA74zqi3dacbFB69peqfnsZabJuc2nHTCJ1iG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n8yvHUk7sKh6RYMsTdTZoVncNqmZPDFteb8ogvjmw56mwtrfzZ9YFEidjM7sTcC6GzdMdB3tKXAMGUm1wvtM6dD",
  "key1": "225V8zCyJuLXsyzATEhTyLg3L6hhw2UJmDbfYW5nxEgFsYLKYyWhSuGdMRkxjbA4sBgjRyZR86MgGYS7pHCBqzKx",
  "key2": "3jdUGqHewxCnMFryScY7UJLDn32kVDWUdhCiupw7LbFa8o7Syn7PLK26GcoF3MFyKQgAajHqvDGYudjaVRbcqbkX",
  "key3": "9wk52Hm2nVgocZDMTJSiWgJT3GGQdoTDooVcG9riZEpx4edRDGYUdFBmzDSVEsPn2FrB488BSprc2baKVzEnwtk",
  "key4": "4XwVVrqKyLZpAqUNMsGQHrvAGqNbfZ9Quyz2FxpPY2qRaGTErYnFzhZaXt43wvHkjbLBTZxM9qAnLUtNArvSp5ba",
  "key5": "34FwSX9xBfRMfhx8NehfGmFBFz69C2hA3ZQBrR8ekr6XpCDZmjJZ7JiUSe7KKwQRFafBfGArWqgufRq6nUD6arB6",
  "key6": "66Q2nCmAmzxe699wiP2GtbR831DEzXDGAHtHVmgFXa28ANupsmvmpSxcZD7cc5YLyxG9VBrrpxF4qPTYnoQMX3Zc",
  "key7": "5xEsHS4YkvZsRTM3mqsqjiZa2S9t5HMhWoa7LuGfUg8WiBJhziqPvreSKLvQ3BBT6vRZFJqf4D1MXUKQeydPjrZn",
  "key8": "3eVNoGGnNk1fZCpiUkKXba8Sb7W1SGAzB9VF4wynDjgXYDv15RpMb9iWoDyXKz1DGP1eLNtqs6hZp8d5RJEDXofr",
  "key9": "ktjx8RDsi8sohAei8pKqYWDDniWGezUTq6psCUkUn3gASgW8JKXR98KTVUwjc4L5oif3cz7HE82Lty7Ar7eGLYa",
  "key10": "5eajhNhfx9HVGNJJB8GYFLbvArugtK4GDcmHFPDfPiCcdwArvp8Zpg7jLYYQsdaSU3vWziMSu4GcF41BrECZVjSc",
  "key11": "51DGmFGPDhu6RhGSrhTKavpEmHn5Eba7T4iQHBRBjVQCFy1GRXGzpGbU8257cVqiqBFizQR8RY7YgU5VWhJrZASQ",
  "key12": "4cRyw62AYRnmGsYEj2FdzDSTGfM7NZScn3jJZv57q1zAYxUaE8gT5RVtozAWBRNFMnzJo9ySPi4Non3Fv1gXgNj6",
  "key13": "gYW2Mu8dEMMpdNKVbnjxjJG7fivH1gq88nhuAHYzXuAh1Hm9XXedrp7G4TPpuRUx11GpK9T2F9erwawpcbFkT64",
  "key14": "3mm7kiL6q5r37hvFHb79F1XzuuPtkZewPGGnmPgkLxLGm8ByoB4w5zj4Ug6nCEnDWk3wrtD7qiSVLwPosNJMAHjN",
  "key15": "2qE3NsRB53uDMT5eZPykfvU1QH9crh6BRkcHuWYrakHe5LhnqfZZLp9gY837bAm7ihMW7jfwFJBYsVGPLmEpSp89",
  "key16": "4fVLjSyoYiDGmLtJ1rFfVUqMmxH2MKRyWueSFeNoxLqkz34m7TXxMkzNsFGXvMQG9KqdUsJj29sQkoZrhkKbpLBz",
  "key17": "5Ysisq1zcw7xMPtJfs7E3gWyGHPz5mgiaa6JZ6PV1jmNQJGxQj38e2rNUizH33iPhH14et8xwMgmdGgmN3skuvV8",
  "key18": "2jRyK9o5WdKyZRux8qb4BwHmjRwCTKyWq26ozJE6qFq1eWTs8LeVxCJf2bXESCrRMHNtYEcji4uRGTQhK2t8c6sP",
  "key19": "2pig77cQBwCnGQ32sJVfu1jhT3grzgmPiDqr8QpyLBTiAPumwZhYACf18oB7xd9xZkzEdR2mRejeeBkGk1uwViRq",
  "key20": "39s4WvssiaorjifMBvRBTSMK48GQUFrjoHzgaZ4Hfha8udHBUHnXqCKVXPnppr1XNwYELjTaeUpbhaFVNm9VbxuS",
  "key21": "3HqT5YigqBPf57UMDgntCJmpwAryw8VAdBddp1cL4L6psvgD4eWtWBVDKiB5svMeXZyNS9vyxR1DGfhEUCfPAZ9C",
  "key22": "5aMvR2PQbafevWDR3m92KrqTuq9RPAwMPgDvqgKAwuGKpnkqys4qRtUjBqde8z64oPcp7bL2fDDSUYJuGqauykSG",
  "key23": "1cMypZMaDeJBL5riWgdwVoydpcuXW5NkwCcrkEZbJntePcs4u2u3gLPfgDBzdz2sn5cVYrhLsd6QRFKwezKCMPV",
  "key24": "3xzUwVutXFCK77YxPZP1vBPQKGXN6peYVpdYxBjHUA5cn38CUvxrfr727Ey5cKNDhjDDyMm9hiSsUHTCsCexnnZh",
  "key25": "2FxbASjCMW9yF5FBRbshn6pBUb5sgqBY6uQpPc7b5kEKA5xrd6vXq1krNczquS36tLxd3bgA48NMdLq8efBZjSLD"
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
