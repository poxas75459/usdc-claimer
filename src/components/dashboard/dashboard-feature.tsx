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
    "5451wqtDWhbVeWdpwK8DHtaDF853EkFCvBvHrivmYAiy9czgUp92MT2fzj7u3FJUm2RRqCJmWGFNAqG2QUvayxon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NgAPtqv7HNfrjGTqLgCBDs7CXJV3Vs7GupeCy93spbS57PRaWt4hNsQXopCE4t4rGsKMnXGek2ubte8Q5LATVz1",
  "key1": "3V5uw1H5c6YpmZ2XdUnm6XsMcL2ZyC9nbC97ScgsashMxqBdxKqHtZBSPk3RH2mbdXF1NSeWD93vsJtM5HGc4vqF",
  "key2": "2gjzfJhLAP6CR45Q2hyZs3CgFAcbi19aBa69YPZnuEpyd5z1H1dHTUimJv1ReZw1HLcby2RJpKvgPSNgYbSc48S9",
  "key3": "5vYfwoR9c5Cux77LzVBPJTfNuXW36sXg8VXn7aU1MeYCPuMkiP9ig4KBxwv6o78zuJjesQAswsnBKWqzUvhfnqM4",
  "key4": "4hgUvohyNsZNAdVwJ1kFq5qa4JYhX44KJqfyKgKPrMacrtK7nrVmAUCuonpvjYCcqVLNRxuXVFsvLSzYyV8EjHz5",
  "key5": "49shPwiUjZvKBdhD7ZWVsu6tVkQ2xcwdaVXLS1mnSis93MGtN9E2qi31bMojQZPAdRtyX2c1446s79Fx9vVRr6wy",
  "key6": "3sfWczvxf71ye26yXMU4NXi8QjSmG55wSfP5MnybycBJznCbXTx899mJnqQBH4F8ZjUGTuE786mn9zby2fgQJ5g",
  "key7": "Y9hUt1LnHo7FRS7VLHCKC3VqawCqYbkrEAdrYz3qPv7uDxq7cycE1v1VWxHD1JErVS4o4sZmpE2VkYRqf3im8BC",
  "key8": "3zUmopJAhnrKjkXv7YShKDvbmyyMoSeqPQEZjF9g6rULc86h7bb6BMmZyrTq8JsFjTP4LT6fxiuRhwWaXbkTiasu",
  "key9": "27Rw2XDuivUqtBRFtKBWi4YXySaCPKRn59Z3xR3ffCQHctxadtoMd4bTzk3gisTQ7VZzbdzhXhPYzARao8yQ3rXa",
  "key10": "yB5Fq5meqmKQjYhXQa9ecuCAmLTqSLCPkNGnDHxe119EVGhcXfGPsZZsdznnZsuzMEYoRSCy7xcLybTiXm9RHmy",
  "key11": "BrTU3nwVvKtrqfnn6BsR5H8zAB4cXrQvxpMpKQuYEDfF8bp9PuL6dCeGyf7Rk9jKnKnLfgkeptjUuXso8jyhf8u",
  "key12": "63pUjS7JGWuJC8tHcpGGG7Q9AeKMjXY8yzCaiD92GJ8UrorMUQyUAKigA4woVfu1gcidLBrzCqSaMv6AH517GybA",
  "key13": "4e2FQKGF3YtvffKfD9DNywb9tkcAoivYTmZJ9HwvMNp6nvEJCJ7ZeiwNZd73PPzL9PHoGg5Rpqodn1GpJZBs3NwU",
  "key14": "KbC1Kmq37X8mH3of3yD2jvZaz6dGmjxn1wKATzGjPWDYYwGrLRKUh5qKnXSgDSTBTn7kisBQpJJaTnFwt9JCRYg",
  "key15": "63wxa9RC5KXKvbxi9x8vxmgynJ3UKdCVWK7fMheNYsoRUMzzijqtQxkY4dEGmARgu5mqYsVKx5uMaZvUpmGhbxwu",
  "key16": "5sMQ1jrrscxxdduot9UqAbxdpNbrGx9fZMwYPha5PJKgDzofWqRhRVHiDFNEfUC7jykC1ajALAqoFaqSz6U8sEvD",
  "key17": "3bezPj6nSeWieNL7xo6d58qyMqMTZ2sQi2GjR2UpNbePtX7YRVtpHJ5hxcmFw7e8kVbQYMyCgpAsNHbedxoQaDiu",
  "key18": "28Fd91bTpv6YMatr17DCMUjeNgcSPjnshKkaPmxrefoUBcePkxbRAziMZxag7M7SVN4cD9HMsN3mBvSpURJ6Q6xP",
  "key19": "2RTGgyu2WS65qV3saCJfFPm3DCWF3sW5fyQj36b38iDGLGANTzDzsGLyp9j2HSQ21zUg6NpVRdbQSJzCdgcF5YtC",
  "key20": "2q94DzEPE5xceEp65DBpyMiiS1iueXxzbf6MYCYqvf6syayVcwm1PYYnPfHQnuUKyAhEH416cRF2Kt3FH5J4hwJt",
  "key21": "eBiaVf9waTJRQhN4ZuxMdaRuCU9L72X91k83FPYkY4k9tbAhTVEVA7VSugyESfxZAHXQgxVotrug8cu8aPb4Fo3",
  "key22": "4f8JpyB6i31jA7dGbQcP4PQFULgjFkfNDjtxiQRWcHXytQM7a6Uhe89U67TPpXaEnexmcjEBE3mYACQxM51Yfs8d",
  "key23": "59qDsdXA1WJyq8SMxTJBLX76ciZXStcraM4djLWQZXAbRtt3RZhT5sDsunYqqjJ7SP5YxjobDwHsAK2TkhNzNrZ",
  "key24": "23JM5ZVWgEo8jpRkLKM6HN7wk7QKmxen5iY4pqQnexuFXak9rtTBe5XqLadYtDAHUfnL6bdb3q9NT9Nqi2zCHR1K",
  "key25": "38XSAAMEfNPS7FzBkW9w2fydeKk3yCGE9eHbTViburphjwjFY9kBDZKn1qTqYBgo4tGDyozqigopZKebomnff9Wv"
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
