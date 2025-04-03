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
    "2dtUBKCv568g8SS9Um7uvjxmXVdmCEpbs3LayLT6ScHkCafaRBLqUobwAnM5jCHit7cJq6khUCk9JECkeeqb6b5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tjiq6uteCEZqmTRvFDRqSutXGobWwDvR7ojw2obHHHSJqC8xKDTJHhV1w6uwcNAZ5k4LoPcQ8cdhghbtfGKxWFT",
  "key1": "4ApM3bZDV11LMFQLd97gQj9Vkp9PUJC2oWVQUpVtWSTeEXcVz34jw2nLazns5VqXyNrcjsLcdCvhXf7zsxc2hauL",
  "key2": "544ixqrhqJdBqEv6LjWuF8cZSUHydVpUYdFFQFdRYVy1myCF7f8kJZ54ebeQwL9bvpdhNVWax1Psw63o9u7Y4EAG",
  "key3": "4m4dp6n2XVEq9WnTkabgrGBH41XyqusjnFioVzsRAyeXFomXZkscJBwAAekU7gPt4936T7iLqFghUakrnaGrxFhA",
  "key4": "9xywFGGSHci4hLwU4JdV6D7Wr8RgzKdeZwruuPJSGmqHnkfYVpUHTpHg5nEBK1FUNLGRGXAuxYJ8dvpmH7sbJpU",
  "key5": "3AsoJdeT7NbS49k9SJhYNhxqDFjuKYxZ8ZE8gxErvMEEzsYXBuZ6LRHjkCgtXh4QNTwEJ8MtDb2CWyYWNUQqyrRM",
  "key6": "fHqiHy4MgvgNzTCC7pyhNuP9chHcjX6cePfTBRTxQiAd21PqPXME4NVJTcMJmEWWfvveJKqtbphhbpzHjYuCKDA",
  "key7": "yhVpFPXLiuTp5qs996nmmnQpgebjCMikiPXQ8mud7XUCd4558CRubPt12aN47vKTzTSDoULJj8JBmq4VKGKQN5L",
  "key8": "5HieQX5Q9PiD9xJ6o5EwFQWb1jhbCNaRaVpZdK4qrmffd1Cgtc9HJHGLHQiQhFCSBNA5US27PgwwM3imdT9hfGkR",
  "key9": "3iAfKT3CJDZBY81NDDW7roFXcFrdJSHT4BYzMbgEtcweEkeBCNvsEWXBQELy53Cyjs6xucGpLmScHozMRjGFvBr1",
  "key10": "5Z8UYFcR48oCPPQMK8Vk2eGtKc16XhD2rEb9BMrZ3CkPhjjTTQoD5z1Sufr6KGQ6zi4BMfyc9chghd23qypT5nuP",
  "key11": "5Mvf1CBH2M5Wj31pXfE2FEcySEtRt3uDVujQad7jYVJFAepUTLApqehaaNHGdnLVtFf6zesHMQ8hSsHknWi7Z7Jj",
  "key12": "GP3CFqPVxA8qqVH5eAC9NzcsrKPG2HeF4QsiDQC3EisCAGkcVn9sGjDX2hTkADYCksTiaubk9MutERzPZ7MveaY",
  "key13": "4rfJxQsMt9Nzn3W4iv6x3wSyuX8FxYhwxo6nmWxXGuSvWm8RBwAh9vwbZkD3bvrFraSVknm9Lb4FCQUQAdmsf6Rt",
  "key14": "2rPjwHkxmeHhbMLPuJYSCEmBYKzMkofacz4UuSYhuQuie79vdFQMSVX1Xh6W43wB5Phq4fzCE8xqohn5Gc3Zxn4d",
  "key15": "2Vapohdmzcy6P7NaasSp4SUGgBvkukXJVDFjkumBHhrgPLz7N7Vwf3CdG4PeY1YJ9kUptT1sWrUeuL3T9HJFVruJ",
  "key16": "5Gq42FEtSMyxCZrUjBFJjrvDrThNNWM87zqxeqSEHEo32MbzZV5EUaNejzvESNu9eL79vVM34scuseJ7fCqjR7G2",
  "key17": "Q6Ly7EWHUKQpyRwyDjuhb6UV28L5h3nsEBo4NUqrnGyaF5eG5qhMKYRyWpf5VnopHRXjhbu14K9tfwwrggrZkgG",
  "key18": "4xv5gfbuQ3APD6zEn7yuTkqwnGHqkHYkX5YQKW9BYkgBGPRMWFENzp7BbrSPQ3jtBhcZzQKfxd1tBop4q83W5TAo",
  "key19": "3bmwu52EQ4svJThUG7PfKWCcXJmPotZv1fuxA7VHx3n6JW9iGwsXqL4araDZmJeCVcydtZCJSTHvnxZEsnKQZrUY",
  "key20": "3FC91FucjZMxbNSkW7U2CqPVtUAUchqrix9ZbSLasMkjfv9WZPp5oNY2ekN9AzbzXD9KAZbLjSwkvCpN7z2vv9ui",
  "key21": "GD2L7gCf3Ee6xSSs3atE1pfyg5KMN6SYbdcRufW6xcon6aTSitYH7YtgdihoqGHsqLkLbxwtsaCC2JTjL8yCFkU",
  "key22": "5HrYsMTpTF7r24Yx9urU2qoeUpVqu5N7BbYhVMeQ8Aq1dWWCTaC5BkzA29PXhoSZR7B6UrYdkwJ6pFey1M4aVJpB",
  "key23": "2y9hjnu7T2s61G4Pwkft8dUNbmivD3XqGcJLhpTYkn7AwQiSciuKuQaGMAxLicGtDLkdqr4GmB8FHg6UQt9x4gqK",
  "key24": "3ynKaMNpzHNuBoWapSPBMc5ZdG3ftDdrqcVxF5BjCsJnZVzf9n9pEVGUJqvVwYe1e9MnL3VRSov9Mmuipk4wsQuR",
  "key25": "3SYv7mu1PPPi9weoT5B2bXxXynzp6rdiuvVUGYcYaThnZjNfShD6ar8RHaLnCnZGhtjfigygkiEGxTNRLE4VMDFm",
  "key26": "2nbuSJxvo5jrrGRNEPFFdVgyPuEz6bL6rrJKQn4zXsWNc7NmoXreU1xTzt5xgwK2ZcNuRje5hHBN8jMMvkePQDnM",
  "key27": "An6jiMgpqX1iNohTV4nJ7sQYSWzK4pGzcyKGo89padxpmApGZPju7XS1uExm2WtqJpmyV3eyXSCLmYH735HkP3z",
  "key28": "2YmZeUVgkXWVedZwp5prvfNu824zUpLHskwJCAUYQTqLZx6UgwsuSKjDdZR7xzq1NM32sKEUWQen8unEkAGX4ym4",
  "key29": "54GYippuwoEnbJ6iYFDwqdkQKjCL2Ua6W1L33pAmeF6RbdraeTLNMzZxfbKkRb5w8TbWK5V1Er72wEz4mekpS8Sg"
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
