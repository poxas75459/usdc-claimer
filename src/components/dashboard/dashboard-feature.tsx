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
    "4FE33Kf5pjcg6VeGiTmb6XrmySvQcLCZkr9eYAiuTUSQvRQnWbbrqzraG9TGGYBAERDMiQRKzZCMJLYYZ1cpYCwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52RCA4zQ8TXVEWutKYJJB5HUJLHgGfxxG27jSTa33mbHd1ufEF41HbjD4oQFSUSutn3gZm1pPRzKcDS8ztPrSesY",
  "key1": "61SnobU47wgNjK4D762U9NJ97KP7r9FCPro1ffp6rR1Wu2SxVrcMRdGPjwrBGYEUJqCKBt53UTP1XwLVtzoFLYkB",
  "key2": "5va8UMNmAjSgXZoYYnezZuzMooMH82z4P5Vf8X5RJfUSUycNSxV2das2EYUvzJ9ckxHYroeSzFTzVJn6m2nSTZkv",
  "key3": "5pyJCv66FHfLRPRvfJtQBhkKzk14dtgWFpCTpjozrjyC6pQ6VPmsHWqohV4JHKqhSU4eHD98QrPVvjvpNGJmhXVa",
  "key4": "4uNyyz3pZmk7eb9DYPCgbgPjskRFMg1EdcuKBUGp8wTqiVjmvWoVMVEcUrS7UYxrMJMtr1bWH1DUto4eTHPYxkQZ",
  "key5": "2ig2Zfkr8eTZVDsG4GuRU8637pt9das1mBjBqBA3T5Mc5zWecENzyYYNniijFEnn8DimU1WQWQzY8ZLHUszXSe1D",
  "key6": "525hZcGTE54FLZFgVP9kzdSJsK1gsTR53ZMtvzVdUCLgkzCp4jhkYQovdawp6SNmYy4iwpJPmUELcZQ4nVzVAGqE",
  "key7": "22RY6rQYr6CBaBGqsGnuowKMx1YMLj8jUmUq3oDDPsmYAXidMb4wRCLtBPpTQdE3VM5aJgoZG7PJyxb87vLEtx6C",
  "key8": "32Nn7zvo5hDvxASgF6Xc3ZFSHMzL8JWffgRS7nYK28z9vyX3CZPtMQS1DZ4jkCd4UtncC245gMnxadLYun842vYZ",
  "key9": "265CsQfUiQdJ9zmhAsTB7CZifiojPZmZqJHNLDuJpX5coB8L5rBEffgJwcVCQ1xJtXzn9fvVxSwRdMjLneptXiQL",
  "key10": "5RK9fQ1CHqkkbBQgg4mWyuRyeaTPZieWFoFHNE8M1tcFMckkMtfhFVF1jg44vZXMzntY3SiLBPV1VuQA3E42wHpy",
  "key11": "65U6d5KQTA6wHTRQP3vPthqYsvrzx5ifJznZPto3qPx3MyegAU8mbq93B1towCij9zmaSxvwFV4xzh6h73o6guAW",
  "key12": "35HqNkS2hWVzvCtmmkMxLx15hTyy6htNupADMbboRdBNuZkA8n9UCy1mA44WQ1WFtZgWcL8aZRSNtTVYj3zpVpgb",
  "key13": "ChuYZjrQGRWgrTt864hbshjBddYbyufmtRRYtaNTyRjBfwTcJNL8XQo6FgcejAc9Asq6msuwzPjNNnQn6SeedGx",
  "key14": "5XHsziThPbCdgo5FxcfavA7mXkmu9Xrr3quhg9uBrpMxtwMTtpvJp4SKJbNgGygsfCRyAPsFyKZYQyy5iHg32omj",
  "key15": "EEzh99YfwQxiFdRXzowPZPeZSZCtEetxfNARDjmRMYcDP4pjyD8XsNix9ajBfTr2fptWu2rWKWtrgXsuZPymXY5",
  "key16": "dGveBpL828mMKcykHXzS9h6mjPY1357TdrF2a9brQLK26AQ3cZ7LXyS4swJzQTEubrY7zSbSP6JXTZGn4RGmf3q",
  "key17": "3nkjwcRiEfXMLdSRAGhb1PvFrx4Z7zrAREiDAaMyx7TYHtjDciaKAWgktHUpNfxAzGeXUsLFAmoVQNuF1MJnU7pa",
  "key18": "2TL84vP3rCACmcYYWvXFQRHs6A6pTLYf6ZDGMgyVRej9tkeqa2FcFpxipuYWUfs8BJp47qJJg1T55NSPSxK3Ssu",
  "key19": "5zAFA1i9oS9KHT9BV58k3nLpHDE4EMymTutpt5RMfwox7dptwCtNK7XQuJbSZnj56hD5rXDXdwD7u894AbEDDLR2",
  "key20": "2RjRWsfrA9kETMwopYFPgAM8QmYASH86xcPEJAmUk6v7eRkGtbEM2WmaLcfBHQWREd2R4771XFaVSBVZ6Adcxc2e",
  "key21": "2q1Aixj2wHuzfn1N1nSRseXtAyvyaGj2aj2oZHY56HJ8mem82nceqUAfWEEbaU6i7JdU1bmgavQRxZgsyYRGWRzb",
  "key22": "5fpPchRfnvXidFJfx9YhS2fe8Ux69Ve2tGoMFffzecxftRDuXDQRPcPPFY6BGbCwK2Ubn6ovanRiupYHUjPRTUYP",
  "key23": "5f5GWXTMEaFpGnn1K3Kc4dgQmfyRJyYf9xSgEzhFC2dSPbCUaoBLjewxJWu5owSG2m4RKd73DX4KH8yTo2Drva4V",
  "key24": "5QwcYQSXZxtvzMfFiVawP147kinJ8EmNsRYjxsUJVHsZ8n3ecA8mByHQvVbkQ3rBnKhijs98KSCVhtyu39DwTpdR",
  "key25": "4ymxfAHZqFfX2uS2eRMqb8AvE47ZsXmqanXWQ4tvs7yELjXqjLc5CEidhpQEmMueEzzat86NYrZz32g5ENtGqWy5",
  "key26": "aEvwqLwfsZaNsJYbYX86h6Nn7Uo3ErzJatVEyvpmAotbXuBsTrds8J9htbQ6mDraooEjS8R1kdZFK6DGL1LZx6y",
  "key27": "5QAHGoeSC9frpYRzKWXKABVdBR4B91ktn5kczMY3uteGacMCuCBvFKV1JfZdUFaNpuXHJn7gPcMjHpJWmEXwg6ZG",
  "key28": "3E6PwsXVjPGkpNW7CKfNFHtZBWFZeoSski9pVwyXptLJesixbGDeDhjk8WyzrAk1PvZziLomqPWE3N1i8EVLumY1",
  "key29": "3V34VZ3waZMPd9tikSMBe6fLXesFdep3bgkm9A4rFQiG9aMM5NqTNDvoL4CrrsKBPTwtdQeyN99Lpo7sQHCVZ3G2",
  "key30": "4HXniw89mMf8DVKXdJzxow31jVA9Q6YHzy95zo7CRE8fMiKwwdGkXvsTVuQ79e6kc14nd4RR9paqzGwpeP6Vpobe",
  "key31": "8SiMqcckvce5C21fKhYzbYw4kHU7hELeh7cCCHVREXYJbf6jvYqEUUL464Ji2H7Q1GAHBkjnk8Nwgc9QGwsV85M",
  "key32": "3v6vuHeueEbTHxWTdrHzMEwee8rLZaUQo1QyeQVA4CGxyGqVEgJQ8GDJYKY9fbfUNvWybuxjo3Var8mb8TVBH56T",
  "key33": "sNsPnKMUhJAtAT1DR5fJdr2j5uSgViS3Fsu5BBQ2DMTbNZ7L8QrKt8j18xPUXaD32frPYKENnjCjKwQv5q8tC8S",
  "key34": "426KkBogXBdL3dhRMNeJBZvojBe9jnSaMbwf2ArVhRL4r7HveDaNZXiKVoUtSfRVFMUtR5CQdF75LLHSx9HxsA3K",
  "key35": "5pvQvYgJJfd65DRZYiqsPz6UtRYSfhY6hubkoqUi4U6rw3UxhUYPHogawZabnWmmGkFFWuEVW5H3YAbkQuR8sGVk"
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
