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
    "6RwhD7KvpNkLnYhnWGspLcqVpLiEtXK6aMcCPtzi98Cebw1krtxcvdgJruZmBUibDR4pDqe4ospuGCVUvaJQwd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46ej1nyDaxHCTFXRHcWZzEe3hw4Az7EgBxMxydxyQp9k6LDVHqN2KyCK5SkL7Cdw6YAgagfZRZmWyzTaADtFJnt6",
  "key1": "3u6WyKG6CGNoCuEyKUvAujyYde9aa3TcnpTg2teMzWR96xb4iE5obdfkHw6jEmxNCFHACqexeY7bgBdMCBL8pJJA",
  "key2": "4xoWyGa17CHR8R3HuaXkgF5paorVunKnEwTzZ3xiqTAo4tXGRTDP2RA2EcU29wDSQhYXiVojXmoC9uyPkkAfy5ET",
  "key3": "67hM3SsKgM4HF7GgsU5HBBuJzN3MM9u4pyy1aSAXkviUCZBmi37W7vtoGTP1A5b1jmci3wX7rQiRvUGWXWMyvhfy",
  "key4": "4kRP2TptowNYYHTuRVdEGS4hQNCfNt6jLCe2wFhrLPk1Birbbkif66pqgV7uw8bwNDh3JB6ypzo65GW4N5n5j8qZ",
  "key5": "xG3sqv2k72ZLXx3jYfpBUnZge6Uk8SnLtHgNkNcscfiW3ArnFK5nAZj4LXtMCkTbr53rom4supYRZLi73u3wchF",
  "key6": "44XJB4z2waaXtU4dUmrHAZZkbrFu4L6LtUySwcD5fHTgyJxryZYn24pejs2eu1V5UoDQoV7cHffY8Yzsy3cQeJgw",
  "key7": "4qabhVVyMSsXp5fyKQotreP1kiEZG92o6TTcdLU4ZKz92e1FNgt9kw99S4FRQK45LL42rhzo73oQLYcLxsRXdpKc",
  "key8": "4GBQWBZZZ9cUr3RDfyKtGN5G2qd9zc6z7kzgEpE2YyMo5bPBSwuzZg72Yiv4mAXixquD3bq39jhrNTGkADU5LHLG",
  "key9": "4FYK7zHFmZoKxuBm3GCg5NJ6TC9kef8qqhd1RKsZFmKqGqhSSDPDJgv8SUqUtUTcfQm1y5hntso5AR8NSDvdRRqx",
  "key10": "4hU2vaQYqzPJBRaZkycXjoSavZvjaL6CwPgD2vLLihrv8sbkWn6i9YUSZY7kyrztZn6YuQ2cZq33Ga6HH16hyvQU",
  "key11": "2vHM4445jh88G9FCE6UZ1jFvfFJximgAPuxTn7NyuLfi3f1cYovWXKakXniZdHJUrP4eepDm2rADf2ghZtfLzJck",
  "key12": "Q5hciMV8DTdBN1RN58d1LLfrLJnrK6TDLyvFb3sKDs5f27eQSo6148t47QomwnvKBBQ8XpoGZ9bpKDL87d2WSBj",
  "key13": "3gLU2ScNMaeU6TFbBuK1Lg3iKWzStzPj8sdNG2effMifbx1Zg8oQb5bLazmwCQVDmL4JzMk47TtM2xF7BKTy7Xg3",
  "key14": "2jFGrbD8DKXwNyCatHdbXHcFhfdtMDkqqC61undsmgxcdBRF3tjLSVayZEbXtTwaTBNv9bpDCUSHjZ7DZ5xqq1AQ",
  "key15": "4eB4fyi9ZKZmESvViuBjQCFRihN9v6QLuJcpGbBLYnhuun8zXPii6dLXEMXmx9PLX9SKcpbhjcrW9bq7fCqzAYFB",
  "key16": "zZiyVWRicm9VTzA1SWnSebAPpFBxjQ7mfyDRsa1LoB3QqNYD1mnhYBdPyuQ91gUCaax9MMjo8rR5GcsLkQVgWUQ",
  "key17": "5wCdR21HARNfCjpzC9PsFbVZwKbnx3Y8yzCM26BHd4LJbuu7hDGXC8LpbGnJcwGevjUvREdERukFkgAA7NyWXVz",
  "key18": "42tSU8HuBQcrSo3Adb1wZzN8RQMKiCR65sNxmXsdjCqqCiN7gVEaz63E4vPGiVWDXjiCkAopZL1gKUxfDS8xH7sn",
  "key19": "e2ZzDMq36CCDRMACPwCGSE8WKgSqG7WiGAbNGiebRsdYWA1pUCN6NfbdnK6b5tXxbdyYtvNEArHGKm3n9VbVjtm",
  "key20": "uWck57W6X9gHgzx46CUZu3LuyMaxJgLX1PQWasuGnjL3ebGDQWxEjeQmt1fCM9FKZAgJwtfvVpWEzowCb5BJgXL",
  "key21": "3xCPSyfcvk2PFcTqRGp6MT3LeEcGYqMGhEwMvsb1rQMFAyV65MtCKfdvvZCMVGKumew3sEgmXmVFrweYxZZUFxne",
  "key22": "3CsjpT6D44jDXJGK79vuMN1RnwZ4iwCGjS3GhiMwdJcmXyEVL6DWeM1MkCKu4ZxCpniRtipQwpC7NUaQ6aRQPVeL",
  "key23": "3BwYiEzm1miSsAZ1jNxT5ttkMNPS7Hg5jWSxesAW3bVpgp5vXGB5JCtUiRgetN4mp7PQUAFdVn47JZTU7isKK6qo",
  "key24": "5Mv67w5WKryo6KaiWurmyikeAuV3JztPP7x6BxAgii8ZactkSPr84vc8RrJKfrbJXSkvjfCG4AHHzB4PsTHigxcV",
  "key25": "4LUPgZvTtayxYayRszGrT5v3H71CHkVktyg5hwCf9iBMGpqK8jqSJmxzeSFfe6DqJ3jT8X9UELLm2pWtPtWhv9Tk",
  "key26": "4mVHJPLw84yW7PPsDpddcgzk1BBaWjHudLkAh1UjLEEkzmwiXUHqVBjAbQJijZwmKytifes8dtQKHrh7TfaTqkmQ",
  "key27": "LuUjJmV5kRq6tQAdEv7yuCTEcZfP7BMfcywY1Efxn75YFpx6BzWG6yGtux16gJJ35ma9WF6fGxcCcnZsivc6pbi",
  "key28": "2HCon13bW44ZzndDmk7PYFYJHbAk3VpjUcdXwxuCHjNZQsNybHjSAt8dNRbo6FWLbpGHbgTEhsA2zEBKWj4ByTmh",
  "key29": "FmFmthThw6hb7eD4X1zgh5CPXUqZd95b2EAZqeYioMNoJhGfSKQ2yLKoBTEtkPcyo12bqZuZdaADe6rXMjy6M5r",
  "key30": "2sioN29zAmVoTXQiuWBQATHUkvP9L8GwEmwQQV2ix73CxuKynYG7MTmQGs4bfBGBu8b1ncksLjiXGFT1WBE3ScUx",
  "key31": "2vJXtNmGF4Ax729WZLeQqWJBAy1LTq5tWtyAhkYNMw2q3xTX4H6gHMTk2kQKdqutQjEmhMWX2z1bKDxfasvt822M",
  "key32": "YezAzaCeRHNUejTYQ8s1RMwaz7v4aP19kUNeTRmAGG4K5Xz2dfHkKzGJajfVDUfTgopmj9hEF47eyFvRAjjQsuk",
  "key33": "2FJPKbiSXwvnoXp63LR2XgnpXeVhF3vLjFD9WGL8SKiTF8QeHQVFxnyKJwbQt9xXDQNvMQckNkeDyyUtbru1Xzai"
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
