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
    "oCjRtsm9CQy2YR34vYcRHntYvGPpddzTC5UhTKs3BsMXnA3hNDZoRwj418Y56MdzK8pmw76h7oJe9ynCxg32AeY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jUbchpzwRQS3oHzvPKWsux1wR6pVRsgpUEQ2ZB6DL7Cgx52ZFVSFFKxoWXJFVeyTmnwHdWkzt2y4xZ7MDCJAzpZ",
  "key1": "65KdGLWGdiyEydqPjBmj8VbUiZvkwcxNWsNs2ab13nL2wVAy26XZ6rNuxDZxcmr8coYQJyspp3t8cToapYKJ7d82",
  "key2": "5avriY3o25ZRBBq6vrryi6fURASeHCWVs5hms2HsHBtTqsSh1C4KUhPHKnbnv5mouw4mRpxLCiENYaVkR9sj9t9t",
  "key3": "4THgA9Qio4LEcgnpWDN11wkXpuKzYqRHLACk5QCgDyGW8r5WfVizMGJTv5DwbEYxC2sVEPcPq5oYT4Ca88HXMx76",
  "key4": "56VurSbPd7v7xPSpz9GPryTX5Fo9L758frkVw4S4ckx9HiFo4W6eR8443Mk7VbKsXnFym2UQtWrs3b1pERboDjn7",
  "key5": "5Jv3DmgMQ3BzBNnQ7WJwqgD4EV9tTywp2Go8JRVmrAsthjGGx2aK1nGZkA1jKzsHCmeYQSZqJf5cpeZQYLL3AT8H",
  "key6": "4TjZYRZnkwU3bB9vHRhqCfMUNheC2quxpqrUwa4xeJEoAvwcU1Tsr7bV1FqWfZLC4cngvUEoshPVsX9B8s8XqjER",
  "key7": "2fx5NVHpFsT5fCK5pPaf5RfyeBx9ZEmyhUGrZdrFmt1q2E1yPLy5a3T5ZZGS4zRousbHYSyY2mZmQyZMet7HSkz6",
  "key8": "4LQddAfHqAfPd43w6AL6hr9gmBEmSoey8a2QaXr1rgGZ2v5TEsd2tmcPb8FRXJ9eW8evt42qBrBbvUm3veiBVNBq",
  "key9": "47VwxdMZirEjgKGB3eqaxPGdhUkEcmageMZv9JPdQqgsJb97Lz3kbZeJipnCeiymQUe9AffgnxX5c7qHNbC6utNu",
  "key10": "3ym36msdbSU87oQKkjKEttTHccufaJM2EgYZqJjW6DgrUWQie5psow1sjSashrJQgutr3hv2uepFjErBQ6knWSfR",
  "key11": "8QA2xfkBeMoiHiE6zYgqq8WMA3bY19iVeVfvZdVw3MxHEUCy1um2TwXyLmCuWpnVBHnVCGycXSuehoqa51WJsbM",
  "key12": "wCjiFjRQnwJ8FCLmEAxY94ixDFmL3FUm6YERtYnmrJ1jgcmaRGzRLCCUSYkcjk3dKsSzpeS6PTncGrcAGWryso1",
  "key13": "2XP8qAtDf5aS2dGJihCRNduxfweTB6V7KSyej4YLz6NToTormbz79EJvEpyhcEvCkVXzjKF3ekagfTgvsxEdxerS",
  "key14": "65pckBJQA24fZh5hf51cvGteXW7FoM6qkhTxtF1Gn3oG4b1GiqpS9ngwUVF3Gj7m3YMwgyBxgER14as8Yhgvv7kg",
  "key15": "3LoywvMb1LF1SRG49P3DDS3Fy3tGYnukJF9v6mwcYYZ5xKk9xGXJpQAkSwp68r2Ufg4sKsFqHNPkP2yqvapKH4Ti",
  "key16": "2jCNdxpAx5ocHPrr3yPtiuFFTS1gLRqmXoX8oQhKcVg8FqJjNCPg3TQzfhSfYpni5ynBXjFTWyiHH6ZwbP5JRpS4",
  "key17": "4cgk1t11jg9XL8TR5DkFD1mMBEGMR6gHDndZqdaZuyxeoeYzqsBjR7dyKXGnqjmcWmEmCkwXPXXwcb4HLFzA1cuk",
  "key18": "TFwA352JPy9snMoe6oWLdk9k4w5ZVYN1xGmzJ2jqqS4fUngoyM9tB7MgjhJqiUBXw39cknUoZbMUqCroL1CvR3y",
  "key19": "3AWvVmYw8uWYSmgoXu8KB19DQQfy4JqQ8gPvaGwDen58Gt4Nk8FcJCg6JHcvUJ189TXHvfPCvh2gTfdSEAqnCzBN",
  "key20": "5GmutPXzNjKLUs4sx36h1wniCuRNGcexXvicDC5QkW9urckXfrWAHNp9F1A6qpUueRbPaT4ZcLsfGXX132EeoFcn",
  "key21": "2nieqcQSzwZEEvgYDWLiXHXnwVPvfQNzb7M7dd14xvrUmbA4tWwLmLQ6SUYxvt4JqDX6fVzAhPHA2duRPHLRTXd1",
  "key22": "3b8Lo5sEzpVvCZH5Bd6xFNXfuBX3b5ASAeyo3czTFqGMYCoYWT1BZ9CUvNaeBneH1Nz8VSkBqm3te1TjfkuTBLDh",
  "key23": "24VioayezXTpD6YsGpA3rcnVCL8M7vbYuY5y9N7jGRNCnQ9uWLJQn69ztkUaG1Cc4546PvscFhyRwEaas4LMZN3P",
  "key24": "2eA4cb9yviKPrSNny8CT4k5RsEotrhHtw7hSYYbyU2rpvGerhR2zqvCn9f9qvwKSuzvwNF2HDQyg77PqWKD9cKMq",
  "key25": "397vA31M57zHn8wKUYbaTxUVTFesQJBQMSHDu6gb2oCBGYJyt4a8YZwKymSK3PUzrQMdPZi8wS22wGo9UJnm3kh7",
  "key26": "5BAVNFWbgWKGCAw4ZJRcjYYtepHzbUuVoWGYQPKd7gerEtYkMQtDheeZFABrdNPJzhuGynxmyCa4QeMGiBigSqjt",
  "key27": "2aeNdVNw19UmKXXjvRJzoVmnx1AypbFrt98SWBTYaXcq9kA6D2umLQXq1BZ2rYWP6bk43B7hnVNJfJcgtTPnhLDW",
  "key28": "aH7uRdMNAxvRExcENXtYKjCNDCis7vfwr2E3S2yEJKb3mtxQY8RaTbmgQeX5rSGumSiGTGHBP2RYCxZ5jcCf1eW",
  "key29": "21RTBqHfVuFz3BtP9NJbHY8rHyb8FHCBwSPRmmoggbrHWdVQ55abgm9UuWagdSfEVrLvnkfMKTFBuQdkAtqy4exR",
  "key30": "21RV7V7rJzniGW5ZBWfZVf8FahJsRf83d3t5CaMteKi1ewbY8RoSGcWkHUApH29X3r9mA9qkoCwF3Rxz7JGQnvY4",
  "key31": "36eFFneUaLpNoqurdJPtfxgt7emLWguVqAgDakcn6GXDBxaxeTpFMY3VvrgXcRiTsb3eY8UbU1LSJ8fzR1aGxx99",
  "key32": "5Y1eeXJYnGbUPNafeZTT2vv73FhSdeCAw2qD4cXSUE3Vk6Ut7QM55kn7bjj8SDx6vXfucKVYz3SeFHeGBGu4QVQJ",
  "key33": "GNV62c8oyffi84kJdm6LonR7owppqkiVw8uRcMvkRi5jXxQWdvk44ut3jtAzGLYibLfiu8gsrfN7Wafe6kTtbJd",
  "key34": "2gPyJDp6CMxrDmRkaou2oGmGgTeNYMhyf16KXFeZRMXFFXRgWgPr67YnVFtTdt7aGzMq1uegtcVrquQyaGXTn8PW",
  "key35": "4VtYdX8BxqL8MGUmLPGoGiD6RysFg9grhcLEUFN1uH3udLv4Km7BEEmDYECM6zvE8Lm4SmsGBdSjdZHjmjCQH2hd",
  "key36": "5Xbw9cj6JdfchYFec32jDctHmvaZMmFRMVKNV5qW8uEv8NYyWBUhMD3PoEq5jgucVhyGr3S8Vr7Rdi3igKesv54C",
  "key37": "5etawgdhXQzarxE5FGhJSoG3w1Rfta8NdPbtsswh9fLd1jR2H1b5BotMBqFgFjTdVQuwhM2oQDoMVKuKNNyZ3s5M",
  "key38": "2a8sULBcRycW3eieFTSJx8ZKU4x2rWXBHDxiiNe5R9PJvV5gkb1i2SHhrURdrXwafvdY4hUAjpUXbAqzbc8WfUuY",
  "key39": "5iTRPTfnzKMYzr111CKohfJNuTgD5KWz5Eg1QrEC7W5H2yT84U99sAgGQewZhWHhCWQXuNU26fmnjQAnbhD1TtpX",
  "key40": "y1euotNbhFJByjNEM26PMRXRUTf5aZirdD1w4DvNF9uvAPBmUQusT86GsqKZENmgByPscNtiY6HjktVrwy6Gafe"
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
