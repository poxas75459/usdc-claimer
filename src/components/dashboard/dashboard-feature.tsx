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
    "o2J46ZaYVcw5oFyn2inLmVHMTSofEqtMs8QkXPfaMgPBtewRKgPZUetFCsbGTUTrVorqSnCgxqnHPAtCdk9WFqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MXcehmhNFmubQDuyH1ZsitMvc3WyH3xHnGx7emLQzoA6xqKoftfHyVrurNKfUSpTpg6xQ5gH2xtATW6KRKZqK9d",
  "key1": "2Do8eG3PRyCb3jbbMKMG7TF2PFdPptcRHQEkViC5CMXkjdxwkh6XGwhB8aHfMKDW8Bk34H7J8xrive6zUi9QghvG",
  "key2": "4hGaNr3g2HSDHxzcn1rxGJUs1FQq8zAePiHKAMDKy2nFjWDYJeyQfP8Ho8qx2FWqKHTnEGyZmT97Br3ePCNpvAdX",
  "key3": "4n7nfmkbVvdWFdq5hoDrTo7NdMQZy64Wyv5kYQCnYejpFnvsRTTzgd45AWPNRQwWcBXWeSD7KykacescR9yFux8F",
  "key4": "5kGEp5T158GYKtuZrZo88Ny4PV5S5eqQnRwdG98eaant6HuRtMkbpgLV5WerQMcF8X1nuNkWXLpCpvmoEGkCvmqm",
  "key5": "5ELFKgiHiM2rjN2cdZgmBPM1UfMXnKfjycBq496BSxwrEPpqPjU9HmWdDCvPtkUPRyuySR437hHxRPpdf223UNsY",
  "key6": "3Uc2cC7G6EHzJ8ysYaFJNoT8fBSh9dTQ5oRgFADfcdAcB3ZuHCxytNjL9hez4q6MpEymKCm7yHuhXL4AFcia5A8r",
  "key7": "2kSS6i9yP3EMPQUAgZ718xc5RCwtb2mHE4BpcowEpJ4Mdxo5eVXX5iUAZrYuprmMDqqDK6mCWjoCjFGw5zCLoCAw",
  "key8": "4itvooLL7zP6aSoyxekFyWsbQDJaVXFuUwYLoDvUfCg5onfAusycFxgesacZfQn3jnzUE53rh8g7AvPEp1VuwRcU",
  "key9": "237WsiPA9WmMQxELyxtvzQAW6txrAP6ybVP16ud441A9FdU75ppFGhVEszReoENZAiez3oJwMr9nY1rukynLkW4B",
  "key10": "2xQGUwGRN4MoD2QYKo1E3ZYC9SpGta38PZUh1ioeiA9TXuh8vRKBWeTkijd9LyAMtK8pExGguUzkNuBwzSWuBXqV",
  "key11": "3QScCndHWVjiZ45tTnJGGmRV6FYNzwmNyyBamzpxcF3JnyA1zAnXV1xGC5gAgrYPTmr329d9widGGTZvH6ReNgFi",
  "key12": "zswdJQims7u4pRX26rCTnAu8mThF5bfqZwcSCTV3t9C6HttfiowozztmewQTLhzD9prawGZMnQZqPbjz4wa5CRF",
  "key13": "2a1McrNSFdS79pdb5uu794677NhiTKUUvthtdBKLAUu8aEeCPjoDboDB9Kh6E9FLGVYS6UC9jhDGJykXxeeaivS4",
  "key14": "354z46eFurqND2a3iqiw8ab4QcSxteZbEFwN8gTqKj4ap5CkZQERLqxNXyVzg4DGSaaHHGTJ9gbvTf8gBRPLSUgV",
  "key15": "4NevruYg8hVoo7bhfbpHcNzKQwvFcz7WUFmgHrbfezxU3q6NvrycQnHZ49VsF9i66pPhrAxgX2wGcGZ1EbfrqLtF",
  "key16": "4g49WHmfGn2p64fFjKaDffd7ztXNja8ZbpZ6jaXPZ8J6Z9FAhokQESuAb7DxquirXX9Za6Lc8Y5nESuqUw7uHMEA",
  "key17": "31wDGm6k48Di4JrUewcQ2zhZFvTbifWqHPs9A5ttEc6L89FPQ1FijSPssXWW6SgfdS3wWe6v8vnfegg1CtEtf7UH",
  "key18": "kvDHzAxD63fbWJbmBYLUsfH1tvYmFc6p7xXK1ZN91sDNQKS6zxvXRqxcZ21y1gvGiAGB71gLk5h8PFKtkYv7QsM",
  "key19": "2sB3uaPvX5j1BYMKNiyPr25N1Bi7uY9Wtoo79CoYzZqwZ8WY17RP6Gfn7sy9xDcdMYj5PCboPK2sx6pXJyWy1Y5j",
  "key20": "3cLdAhvYMgHumUj6MVQNCLXXVLAVy8Q5QbDnUJxtUo1cQcD4ZLsjL9SvPgZK9UkYx4iQNUxru5fnekrg3uzPizZS",
  "key21": "2ASLDudzgbfGeSd8yE24soodUvubmY1KNkAyjTimAPKNQ8ks8PcSZcHjD6F23JKJwdEVmEWhB8sgTFe1UJqSmmHH",
  "key22": "3gZFP7Ek13SsVSjKTdVowJzFnE7euGVRY46NmXXCexjn661gzeAbhUxguBEw6fkoAQ4vSuqeSkCVHexB6fN1bU5j",
  "key23": "43Dk9F6HoWMsguNkrre43QQnDriKTVnHUVNGNbM5128Fu9sLfLkPLn5MQy6Gy9E6rckvkpB8uAeYiUr5PQnTqEnP",
  "key24": "4dp9aFKjAS8e9YThojfnWogayLnFpsJEw2rQSV2NF6x8ryMoJnv5iNw4jyyr8n2RYUHAZw7zWJAdPMARCsdA8zvE",
  "key25": "fAutrdptT9FY2kJX1ZFVDyH54hHcZgHB4wkdqiKG1eDkU1i7pnJNJeg7Ur6eHzjeQQU1L4iY8CH6QaKTvjM8FCs",
  "key26": "4HvDxVzF8TiFJyjNy3d5WsBe15FpdxVJsdFo329wAo1c7J3XkBgLLBrtcuNiEiTqVqPfUTNCy18kcWVpDR1E1Lc8",
  "key27": "3qZMGb87m4tbQaSh1G7wNT8EjXEz6HEP3BZJUQDFpsksQmwvGz8xLvdfzp66M812GV3r6tW4ekKP879Wz8fUt1rh"
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
