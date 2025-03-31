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
    "56ioEfCugZZpDgWPTMSJzYtGerVwM9MbH63iruYkXaAvaMbPKKGkGB69zE4TEEA7MbvRJH6XxHRjpqvgiAtsnw85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GqAnRP6ZmanQBZ4zGY8s8gnpdchPi1W6xjgHwqFYnKQkModWsi3rtiDyjjwAYMAs9memGgcwH2zoMDJkTgvVHo9",
  "key1": "fxZzkMtyuz1YfbV1ZpcZuEuFCDkG6diNWHmqU5wMEX5J4Q6BjyXY34Wp9YLsJv829dJd58w2SFDa3cYFJM4TKuY",
  "key2": "4VYXyFgSVF8C5Vw5VN4Zoh7rxuFBsCk7V8yvQf5QGPQr9Y7zowcFYv45x1MoyBEbZ49oj7D81hboBTgShgKybqWk",
  "key3": "36p57GRi7E2hsuWFtyBBCdDDrYpbwGS7u1nXhE8LdyYKCMUoMr5JjpAtv7UN74uTPFn3ZXHw8n9m8atfKJAPFT6c",
  "key4": "4z1Q3aMoUKQxYYW9MY26YCxW5NJnaVtjNmUHKWyyt5oc2XFT458C47d42Jj5hgB6nUvvGcWh75jPmQG7u1dYzAyi",
  "key5": "38aCqdhyUxbNqndzZEsFtkUcQCL5gL7Pr9Br3vBWoSXxpEjsAGy7mvjHyksnkL1bTeDVZvLzqZaSKxG2qCPnajoK",
  "key6": "5iaMNstK1yH7gc4V2Abhu5XB43VArrnw8CCPrA2J9eRzYYhaVtZTpkQCMffsf9EXvi5VuYBqhMCQfNapXFt3zmiF",
  "key7": "5DRXH6RagcQVKUBmmqmgFQG33EJsNcAzd6ZEiD43rYtYd6Co4h9cfFrfpFc7QzUbfpEjFFpJyTszoMLM9d5eMnWp",
  "key8": "DaJhvx2fd1Uvp1V5mYJ2SjPawKqScCpmmFDnqQsuLmccXGo6JrM7XGiSv7XXKPUTNPDqhK63vw9yCZb3J1NddF4",
  "key9": "5CNAZ83ADGxAzoPurfYRpN8poXqLCmYzF19omzwMNAnPkHWkXx5apDhzw6mtAc3rPNn46phEvHcxL2DYyVC99cZV",
  "key10": "5kmMgmNirqrbWT9VRSoxZ5KYEA6Bqvw87GUohtHS7uiKp1a9TSzBJ3uosdLeZsQtFZqVUP1VERaFJb9XCADHcJoK",
  "key11": "4RHdcv1yBfKuP48wLumyN3cjzYaEaZdDhenJjs7VaTYQkSJwQ7fUytExQ4u2W5MrT9VENfqvqLvL9DZXFvG6Y5UU",
  "key12": "2ZrBoBs9M4bZyHpGeA9iDGJ5YCdRTGFhcE2gGvWpbhWQcK5hDXokXvUjYcMsQAdoNuQo8ky644hWDXKpVNY81aDB",
  "key13": "5GPsfhFxtAjamHZTkdPSoBCv2YQdhm5nAwt8vT18dQMoHKW9Dtt6vACqpsSz4yWNYzee9fr5MKoK65zkmXfXQgLZ",
  "key14": "EuRjRKxbJmdrE9wBLt6p4PAN6H9t8pCX8CgiWPNZ71GPBzs4nM95L84WQKejqMnMR7QSFaxfqEWJhMpDv5mzQCM",
  "key15": "6685jwwQGVueggc6TX4bucwSzC1TZdGJr9CnDM5VwT6vQKxryT8FNErBSXrKRAMhsxjJQsjspx87HDriVCY56mTh",
  "key16": "4dfrwPVeeNSZK6YuEKiV3W5FDiPUJkQZwmNPPRvcLAZKYTcHEigjex5c7ZrZ4CiRnXgqvfgwzC4X3RyTcP2fEUDS",
  "key17": "2i5hhkgzbYRZW2MGu9CXevJunjdGqpa2LDoP3CDmWjtG5FxqswHQXMXoqSspuU73uMUmWiHfddxwxwo43hcxj3os",
  "key18": "64mgvaMqsCKYb3XJYvA4efGxo5LHwdpwD6teTxoMqaStMDsy1JgEZCXvFeNdTHgervMMQoBzbohvZ1t2ufbC3fXt",
  "key19": "5jkfnq4CZwEgQnQrBujpFHFTc2CT8xtKkETVFVSZMstzFt5249DADp7fNg6Qdytx7JsbA3ETdb8QPjLYzic55kqL",
  "key20": "5P9NbyzLN4cBG5GLNRSQ9AJFLpKYDhh9xnG9RM9gQPz2VVmMrFzUwDmzfR6FyL6sEWXdsvjKYBcwFAbaEZEm4fMZ",
  "key21": "41o7kLU2JnLrVbkitEnZnPzXF7b9FQdJWZiAfDe6HkDYBfTb1SBVreK2FVZF72v94W8fNE6Sq9cui5dTW98eeSFn",
  "key22": "kSiVbLPbj3Dj4kPjbsmPTy4HQii4pX5U7HiLyEhgy4hMoiASACqERhSKq4EiEsTMdJKF7XWe8Zk6UnvL3uSWi3L",
  "key23": "2wESwSsKEGdVS14AuFL9rHPmazsid6oyK3aZw3Jayhj3wUKZFmy6wJhhaaD5mMdkhK9N3dcEeRsyrQoA7jZM49Pv",
  "key24": "5QRQbnjdzNBqvjXxq3WdgYVjfJYXgF6gFfb2vdBrQnWuo1dLWo1HginZwj6Tm6sWb8wkpbBsKdpgf8xz38pPAaYx",
  "key25": "w5992QbqJ2tRJRnvzWAVDbDbseD7da7MTudwkK8HQWYNmWHLkNcjVAHj25GfbNgm4H4Hbnx2dP7v3bcJeLePsA5",
  "key26": "4X9rGbSWsvhhfP4VpWwiLUr7USku96HssxSZi9vdwxbFFo8QDMxi1SsYT8E525U9AUVB9qvjsbiNfGvDC6NbWg27",
  "key27": "45BXLUNy8h1fwZMabwG7E9VesgjfT4uQ94c2r132qzVg4zEjRxJ3K1Hvgp4kH16Mm3Hjtv4LKeoMAG3RLygNrk8m",
  "key28": "2HbBb7bM46Ee4YbBHaFjNJ9E3w69o8HttbcTmj1PtjKZJuuDd1dF3bA4rQ2ohyM1PRsrCh2j2NKhGbudGH7URCEJ",
  "key29": "3aLrB1HN2xSACZJQmvqG2Rh7UWs49osPG3Sta3oBU4vKp2dDFXsvZUnATgwnpoJRm5rPa9WB2G6o8qyaUhgRtxSz",
  "key30": "2tBxjt2Q94LYv1yBnnWJxNE8ncMXAPfMcyH7mp9zGSGsUo6YnE16ooTQScjFnxRKtYRJn79YR4vp2TMjSURMgDFv",
  "key31": "3W4aLMwuVCyBXht4uFjT6Vrqh6EC7JM7FS8BdbmKTiyifZE7LKN4QkWNRuif5kmXPJmLxXEjKH6LwiquLkbTGJnb",
  "key32": "Gbz6Dyaqsc3Z5xQoahKEd7BjYDjT2ZGeePyLda9gvydMKK4n4BeN28brYchTTadzWMPzAVoXRwwN8HnVVQpa6py",
  "key33": "2wXHbcPEV24vWnujKaPPjb7BYRfpZFrYYvDhhFzBobDhRB3bgXMR3Xj8cmeDytZZ6AcCTKCQeFRznUz8M94bx8B3",
  "key34": "63jzCdJKQHiDPeuWpowSwUA6yeKxjv1R4KPWPojb9DqBr4aetJS9s8jsqiGTXVaJW1RNfoms4gXzyojhNLdgyyKo",
  "key35": "2ekkGPpqK5TneUU62vATFriYgo8N8wSV5MdGMSeaEaQVcXaPyuGEcSto7AfcLbEfQttaaMSg9VfbfTiBvpMgpZ3U",
  "key36": "PQFkjcAPZekkb2EzKYV2cBr3dbuZSyF62c1jAvQvCdG54DHgScDvGmMxdMM2JSNME6fXZixvsi5RokepDVVNXYo",
  "key37": "4nu5bLQ7zj2Abpo7uiGH3JCRBJtZH6cuBw3Sfei42MR7ep8i7cKQmgMXAGjkthkiasvkfqWCZzxD2YiX43U2HxXz",
  "key38": "3s8MDQdTRsYWgVVxn2UUC71HfHT16q2Uw8sVi9CPExxt5FhNZL913ga5PihNqQ7ZmcyQ6PqE2MtAsKsWCXk7JsKG",
  "key39": "3P3qqom1P7ih2CVuuaoDPdDyL1ysK6evMVPinLfw42RxkuyFiYPqPHwLJdgKpSwuQvgZLzDUrBrZbUdduQEpmMgo"
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
