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
    "43BwCswaXRacSv793L3AHcqzVWrBbf5nVRgx9Ssh6MPej1JfUhJMNjHh9coo7oRPCMmvJ5jgmsxR2wTH2p7o4E1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dGKWRuk64FDTKrso8ayVANdmJJiRUr7YbUM254tcuLmmsTThmU5mYPRodcA1MDB2SQGCG9djbijVy9GCHFCEoc8",
  "key1": "5qeXyb8S1LnizqmyaucRDHW7j3eP1kh9yr3KeXDUuWaT3oz892bQfr1fVcur7wNni43AkTSGvWnWjQvVDANYdnDo",
  "key2": "5TWxmwH3DCWJuB9wPHoQbVFx3cM4stWcuQcrtXWcB3RQ2CNtdnoTHu4irSYm1fiMeUtxHpMwhuKkcaQK94XEKHNS",
  "key3": "65iUdzvNx2yShBStrR8pm65AFAHNNaAzHHwF299pKD8DTDD12Gsnf8nRYhTXMm2ubXBq9ou4DHE9RtC812AiyYxS",
  "key4": "3SqExZqp5JCsu22FCwZBy8tp2dueMo9RkbvmzZnCSgZLsvLv5gBefAi7Jwwqtt52cA23gLF4Ye6RbR8Bpwn4VuYG",
  "key5": "4MC4wwHV73LNyqoT1NiXar669xqdphjrW9sjZE3t1GHrHj4JjCL2maEADQpNyYCh7ckk9kkNbqRLxV7itDfLEPYJ",
  "key6": "3DqKrdu7RVKBVxkH9rXRodvAsbnC39Vz1e56fFL1RHt38C4jUCdiZvVxMoH4LRHJeZAWUsgPDPqjsudYDa7q4wMS",
  "key7": "3hLyyduhaMrDRpXaCqwh5LYgXZk2zqr5gBWSwKaUPE7uRn8ncgFEucxwhRQmhDdtUVE58M1aBMoh9AgnVrt7CZrp",
  "key8": "GbuwH9aWeYec7gH28ALBP8DxXLwZFVtHv3vdiLCeC7dEZURWEZpG1iL9jU8ynHAaJrqqaoH2eLqN4jV2EycVEMq",
  "key9": "3PYFwxebyfoStWAGh8ZLMSrBsrwrNguZTu8vXXR4ETy8RaqWoJkwq2vUi4BsJwPiHS9ozPV2x9jB4ThBNSFSfHwW",
  "key10": "5VVrs5QUZ35Htik2Msm7jpXn8awwRj95fm8UenaJMc5n4QxHm2Hy1HsYneZtEGaF1gbXRrHTFhfjBtKhoSwcRCWj",
  "key11": "2WsALBqQ6LefXUC7ngctgLQi2d4wMsQXhgihRJYjhDKMvikh8gbzXYXq8dCwueicrkt9VuNWsH2MqG467qWRLhe6",
  "key12": "5DW5WxHMpYM1qDCFX5n48P1YoiED2j6aMVekKvDZiD6psXX2eUZe6fTSizwkNUjBuaZeTfHuvUNL42giQCgtCwxq",
  "key13": "65csaPBPYtpuzi8iUWPDMSUJKZUG8KEGyUBWzqhqv7aAkN1SwKX63pjZvwmDvR5Z6zzFJ77Dd5QiGGbnvGrKJL6n",
  "key14": "4khmgnrbHAjpwamZjpjmsjFh2vA1pN2W4QLgBbGfFXkLg1GojmcyqLmBNSTax9Wup54gCh9374mDu2wHPG6Zi346",
  "key15": "2iwyJ4FJNbvkFov8b5nHNVXj8FV1NsFv6ytdBesLtYkWrwMvGGBpUoa6WTt1PNJusbzrSXwC6qSy65ZvqcPTGyL7",
  "key16": "2Cp2uD7QxnjoNZsDvBFxUWKArJyTE5ptTkhXbYk6JR8enjgAGYFsxhBrVoauUmfmDZMDVnryWmxyQQnW8zfKNUY2",
  "key17": "5zjmN4wawHop6XuruHiqvYScp9ZRLJsqWyeHbJzmTqvmDEDvZwj9WKYoUgJkYGqvC1JQxZ63SLM2gDUw3u7LMC5M",
  "key18": "48ApkUJwQMYwiwbiQE3mwFoh1bzCVWMbLhnrqpNp5kk4DhSvdasUzS9DcfrVHd4ZEu3BcHagbm9nVsPCU7U5hcLn",
  "key19": "3Yzo76TY7nFw6vpZK6qQjbmBStq7FZY3x32ZFnM9u1H4CwNWM3koKnkqPB12FHwG1GcaKYacFi4i3K7nQkSsc6ya",
  "key20": "2jC8tsXoPHPFwgn1N2SY1PZkUhXDyQpGaZfd4tQgscLbdUSH3iBbHh72sTMUNWNGFi9FnCRZAXuT4Zr3vkFYGxz9",
  "key21": "3HFpFkWRtfoKzwJrYK1JcAX5KUciG2MDsKxJqQoTByWTqLmMrBbH2cnPB9F7Wj9UQFn3agiNh3JuyYEP8SdihWyA",
  "key22": "3aMeukQ72aYNUV2wV1iaBknSJ5SWpNyiRW9pqyQrxr6PwHqwfY3K1DLPA7r57iWgEFCFK5Atd9EUCVyMWTJqi5aH",
  "key23": "4XkZxfurQLhSYQHeGHWGghddZbjEhwTXsUHHZqcTXpvssxchkLBUgFb17itqhVEEqqSEmdk53SYN7j3jpBaGWdb6",
  "key24": "5UgFyY8eWWzbXEtxPwYVbWaczViRqku6s8CDBfnH1xVesHX4trAWfAXVF8FtW7zJGx9vtBEaszaRpXYegXvopyUx"
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
