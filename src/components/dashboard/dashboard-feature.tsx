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
    "ssjdcz9UWgAXMTj3fLTgzzbsEG94HiJHPVfB6bgfNFyg3VxY99zvy7tsAstSLTeHGeoBiMMChcb8gFwNisXZvbx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "428XTACNTLgSW3DcTPCdEksp7kpJJLCgLAcp1NLjEnsMJD7UDd4X9kTrP6caApPHXPecjq6i1C4e4kWLNUJ1Yq2E",
  "key1": "29AuAwzEjBeJA1vQba1a1RjewFTfTmciQgp5uw96bJm8tJreWE36wkYDGyrg7VwrbiH5zWKKpcieGN8B7Lhep3v4",
  "key2": "hnhYuASGcc1D3Cw6hwBjjzguYxMoHPr4Hbsfo3HyNRQbCqfUisHs7nhKjUBVHrpKeMoZ378rSvrRPFCJ346SU7u",
  "key3": "3j9Xt4ZXu4rjygLGzP9tpSGD3ja67XqePjYXZG5ryhjCggfDmmYG7GXLvMA2DSMwKfth6pyQGyedMFxzPtgasids",
  "key4": "5x5kDM34QLDnLMZTnR8cDCGiytGRQZ4SXNz1cs7fMb3gnXQ7MGzSaVyoKZHvMZJdU9NretcEyiUBWcVuknAyS4n6",
  "key5": "4KsMnSw89KV48bXaFtWZVpC8PBjVB4g2x3iRutz4jTtx8sZ1uGRm24hH22khd92RdRnNrXWYLmW2JvmJy7cMMgjK",
  "key6": "2eLAoW9s1nguf2KGGMRjxxWDjocFRcxQZkTdf6Qu3pezmm5y9a7gTFSWVjuDjMz8tUmTDJ3WZRfwdv3zoPqKTq8K",
  "key7": "4wKb1wAGBhR33G9eK24EMkGJv9rvoWAA1ZC9345wRxU8SGQ4EmHVJVa6UUWcWdJee2K9Gvyjb8K8QJrdDwSMVPk3",
  "key8": "2wLinE2Ba5r5hY654mguRaYYBZg8VLtjXTrJ8UufFv48Kzfj2EPQtU715XJisxibMPMAKbVtZmw4vk2UNSUMEkvc",
  "key9": "5d5CG6xTcRNQNGb9JE56LmBJ7NsnqhiFbZVAhiQcLrJga7wkuZ3ch98xgEbK9pp95JjvMuhGNSJBzfQStY2ZYo2S",
  "key10": "rQgdsDYaHgtUXGqKDvu75Cd3eHrGJRy3khRfhSkcRG5T2rW5ZyBMV71XWw5wHLRio7LnAEoXVui9z4sfzGaoZVf",
  "key11": "3bCy5ZAaQsDXpctaKuBSz1rMuLZvuLcmr4Q2AyhsCHBXcx7E6YWfY7A4t7q1XvYYQR44J4odfgPuJdGhLy4AmpA2",
  "key12": "2Y1fnqmKXRFJ579Q1W1ZKcZ2emvhAoarBtFE48JeMQmZkquiNLZZYwd43PUmA2tsfaWNJcoYwhUFxmTNhuc8ztyh",
  "key13": "7hBC6CjW2KuX8mgDA2yFF2gdZEEch3Tb2YHkKQvszTbsYTf42H6NsP3tcw2unbQ4316aDfACBgDN7CbXiVGZ8e7",
  "key14": "2E13Jmmc18Sx7NrBT7zowoDp3QXzYgPJ56a71DaR7Cr5iyPQdV6uRRUiuMVzsJZRbDZU7zZMchQRcW6DTHD82Yp8",
  "key15": "5otBKrTB5xqtKBbRQ2GAcYHubQr2NpqUdJtNDNC2kXJyv2XKDoptA9nX8Wu8RX1jxxsmpVvX6ebuNNaqLUWT5gq7",
  "key16": "5kPQQDnjbUSuTM3xoqAoajbLRKEW5kSdd5Zue9hGwenxA51yEiL9fNpUC6TQ5cyAW9NnVUgyBj5sqieSTeyDCppL",
  "key17": "4VxbEHLDRJprQgHirPzZCeofFczGZLRAiNue6SuRR5q1LQuQWd7NjZCAQwwWnekuUZzTm4UrZT5mgUz5zTfHNjbi",
  "key18": "mGTawmaGBqnQX6UZbvZXzUK4Yfv53c4jtZ5752KeT3VJt2KpMp1RzHZZGZyXqipWZv5hiJGAJ4K7S3BQjTdLAbd",
  "key19": "NCFcL9cZumyJni9PyhMLJKzB3cqZR7JvJ36B7sGjg7cYvqymPUvqvN8KhpE1NZ4YeJTsEkYjTeY9DKYfqRpBkM1",
  "key20": "Soj3YzgiBx4FkmtrqEb1ZVTu7UwddcNLbHhL4AEP7Zr83KBjhwj1qJmtZ2v9R6YXHWB8NXhUz66yqUa6nJcfpSL",
  "key21": "5a3kdVBzhsMpun2YGuaDKotAEcXPBteFD6AdYhWyeoxiYFqWN7imJBpakkQ3vS93bzVFetcWurSuxtvhJi4S17HP",
  "key22": "5UM74VHzf5kyBHE6UmTGhWb6FApxFabA3UnCobg5qfeSRmNujKP4NYEwfa11bU3pYrZcMZYnXPzxoooXVmPkoRZA",
  "key23": "4bFTUpRws3W8nDdWarp5CF7JkRceRhKE8tAQFHVYqFy3WiZtKRtPx2LZeaDmttZGmmQXhGZsFJoC7smVxaJeSkWL",
  "key24": "5fwbkLw6rr5ZLY6joc6Rf9cRqpvyUKApap9FeDpeSjBMjdKu6zr1E64cTAKWnaGWAQwHd22hT5K4VQxYft7X6S7"
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
