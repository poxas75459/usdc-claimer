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
    "2uDTw1MFM8QTG6rNhyAVaTsFGEvLkDb1NExqXHhgL7PyeQbaAJc4ByKqyeLY83FCzDDpknFGzYonoURDfCo7yJcK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EwQ5BXHERAWWECszjk7dFY3HM7hRQmLRN12mnKHT1t1ranPKLvfJKU4VcnKSVMy7u8kyLwbwxTTYcx9LPoPXB3c",
  "key1": "2NsUTJezwWGyBBDWSCnsTSUon8gZssGwF6EaJh4VgWLq4Jjng6vg8kFyFCbKqxJM1kcwHQSLksdnY4QFSPu7rFfe",
  "key2": "3CAbbshBvRgXD2BrwzuGRuDbw9gF3tFPoU7dxQXAWwUcL8eGPexxGvnJpvujgNRtnexfZdQgek2wSX4jg2U5qR4b",
  "key3": "46Fbnj1xYqKDDWf4wvBujSCKCFark8LgY8Sz7DcWMytv7ZAQA29nfBBaudpKesFnAmAppy3ZPmrTQbp8akBBK7sH",
  "key4": "5soPbU7AXmrNXpKXNc4bhdJdvbhEBy3qLukKqTRLA4DgfibFBDqhf6imVdKhgfSuzUkTRtxpu59dNWzDVhgSYZp7",
  "key5": "FN8Xbe47wxtETSSEoz2XLfTwbHPGMmjC7B1dWtP8ToX2Xc1ByMnTtc9nvDczy2kZ4xs4Vj23QWNeHtwUx6PVyqp",
  "key6": "66xdnb9eE4d9Cdnnvt2xZYF3Lp2cWZVMneJqVWCwuoMdHupfjsYBeqFCSR3913TivHEHH5Se5ahiH9W6NAk5ySUK",
  "key7": "4uXg5Lo7aWZeDCaHDW5uB6hmPiZpjLnrJpH5Q4DaxHGmn7fBvBy7A73tyymKAtnphktCrh8G4yZaX1ThSXXaDoNT",
  "key8": "z2kZZHzjMkXEEjdY3oCkRVQYwD5MFS5fZL1NbDuk3oTATDcX4V33aoHdaMwpAUVaEFLDciiDNrrAbSmD9h6rPKN",
  "key9": "3meBUkUdzre92wUHfcHfBXoarvsnhoNGCyy7PjNsCozmFtiUPtgHfHE2iKt6rhfjgtaUYpfbzojLE8wKWdccD5SA",
  "key10": "9j21nJskdmKxZ48vP8suwZj8wnLJJbFYv8XHcrzCarKpwMDdBqsqJCLwG573LFhXE84Gs4hT2g6xG4dV3YgGDsq",
  "key11": "3xQ224JNUssDJEs4HYZFfdUbCqJtJDuuGvEdR11sPTLkFXWVokSE9DMpZn9yxbxWiEVfMueNP2QKh5i7sZNa1ooC",
  "key12": "52w95fSXAY7oMPZKQtgw2on5dMeJZNyNWLvnDvWVa9k39vq5pEvaYSWpNTiK4w8Wfpd4RZcBt5dxRHyxF8hYP7su",
  "key13": "4XKr3cXNqG8q7EoRvExHxSacXqmn2rZpzzsjPmmbU7CXVXwRu47BSRYZAV9gaCF5pdmJsBZ7C57nsBUa7xWYrRGy",
  "key14": "NynFNLFVCcjswZCozv1JY6nWY7P2D1tyGtD6TSFdiYjkGcCmBZ8c5XwZ8A4DhW1gexdLozBjNhz84PAGVoNbhh9",
  "key15": "EPNcc46bkXpAMyZdqETcmtnhGtLZsPgEst22VPmqEZD4xNvWv7T8esmGWwxrNfcW4LKygfspgQUqVQQcghSArUx",
  "key16": "2Q9T1vqz4ZsS8S9WVHM1B63LbfUzphxntwCVR4uc7gvSvJ91DFTHT5Xhn5KQC9GjtDkit6gU9fuDrF76vCb8AmoA",
  "key17": "SzqFjgQ4VfgzejSuKzTr6t5cm8TgHGGjrH8GrH11PhGvTFsSYu5SZDjBqqcHLPMYnPnGaZZusHbJEndMBDom71U",
  "key18": "4fRon2vyVKka3URe6fcdt4fzS4otdHTw9H8JP1umCs4BxXVkDvgDe6pWV9ixgtm3nmRvZS4BXPwrWtA3LyXrtZTd",
  "key19": "49FUUa9eSQ1MdCLmmcULa2GMAYE8ekBv8W7BydA1D3dE1DQGSmYfZnVVMnPnbkAsYnL8z9bbqVJfm3TDkBVr4HQo",
  "key20": "29edbXkbXrKdwzG5NPWkTAimYKiFcjJJgu1znwpQYzc3tse3ewCxF9MdHirNtzMc6AUUz4vsxJe4M8P9egdesLWo",
  "key21": "3u6zNwB815pDdDDkLWzueiY51MP7NgKCRJDtXE2KuZ7bKbvcaDjcdN5qeY6iStoBMgugMJSDW7dyKXvtpJjKJQ61",
  "key22": "CcPDHmKkYYKW8Qm26cWY54m2gNmTKQEKAGGX1nrN88XYkYKKBvgsG2QBQZBbnZNPbVdzU2shBRnNSXXwLmDoab7",
  "key23": "3vBQ5e2gjc5JN5uwAVFgxWFwTijTAWDgmu1WtsfAZj83zy4rrhaA8zY3HdfSxF8FzQ6svciunVexQ3EJegZnKTrG",
  "key24": "4u8L4kQDrG2GvBMAms6hLLZkebkfGkxqywfmUyGfyPcCnY2DnEzxZBUre5uG6B2Gmc1kbTpSR4U1z19YqxT9KD8c",
  "key25": "589JckjnwGoSQscgwHSqJbU3rTun4tbrHYFzEg2nNYChHmuqVb9QWRUD6ssmRDcwSyFGTvr6Kh85kbbZcAEGd1TW",
  "key26": "3Ua1DWXvcCX1K4J5J98bZatk9j4yp4CXKNcpaBVXZXbopkox4ELb3AKZYyU9Q1dZfea8xvyLSwjhGSCtvVzFjy7z",
  "key27": "54d1R17ZUkyKLDxb6pvE9VQbp5E4Yjy7GZjr4e7cz6v3Keyt1BfoQmiNxwPzsUUYykcukurpcmZYpE33tKdck8gm",
  "key28": "3cLPkSAC1AepPkwuhPgmtU72j3HrerKiM8BLXnqVZifHTbP6WpAwvnuRckj7tVLdqw9QbsGqRuvFcMCG7XTCGnhk",
  "key29": "3k9ECr5aNPti1Ey5QsUoRb4bccfpHxC59BnqBS6pGt7bxpVTad3qD66ogaYqihjaiWcxNMoXVsVMDf2j4icRyBpw",
  "key30": "4HEiPFfAedh66Y6RaBgHKvqkxboEpLXBnyYwg5WaPpXNghUnLpjfE6zWg8aqcAEtr8ZNPRqo629P1cJpXFZEr7zn"
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
