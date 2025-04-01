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
    "Ae8BcJ6ortNJDGuQGUeuzeAtHNSUHWmCnzeLYMyDbM9Y2o7rpn6E4U5HacT4oaXFTJdxxXZVAwCZFQEJ2jESAkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QS4sVEZqtBXv9znXkW1xaoUT6eQiaiDuvU7Xs3p247rYFLgX5Ynm94Y8FJ2Q7fbsQYhyKrfJLFkBZ5AN8BD1jHN",
  "key1": "2AH4MKQWRRo6tzrNADYct8DRBrK5admdfiD35Sqo9REcjevLs7TNsK4BRmNVM9wDixGkt9txMwbXs1L3ZxKYLJjB",
  "key2": "49WukY5bBnFbWs5EaF9thPDspgig7UdXWY5G9moK7cfGu8Av1PvGXfwPnqrWfQzCsifoXxrVugdbu2UQsTGMokQN",
  "key3": "5xiK3mWLBahVYpm4M1NsnGP2vChCNmMAmpz928kjiom7ytTCDnQ53YC1ccJLLaaZwRr9GyP7BbfB7etGrDgbCpaq",
  "key4": "21FMTd91FAFPcjucnvhidCjHBsPZVsPFd7XUY2uKPBo952L4kqSsNA6ZxzieyJEQXs7aNRAc5iqiArXXP39VRKKQ",
  "key5": "N4JugdwXR29Rqau8Yy5hvoTW6fE5xRE8hBgDxRrDb7G55BMqEdoUPjpjEushRFvPydovwRFS3YqbMyhFiTr7sez",
  "key6": "4SGnEQ4f1pcMsJiSKczWoLbwNy9wHeihkJPK3tNfCfBjnNAyX5rgxGVBXxToLMqy8Qy8H8XAtg5KXjF1hwQmUZ3d",
  "key7": "dx2kYpoBdpNHcVkwceFyo2aVhm5xnfZg7vaPo1Y8sachfVtRu9vA4pAiWiFBcZ64rCRq4BMh11fQ4g1SvyVFMGX",
  "key8": "X7knPXDiFEGRcZrAnYZYyHLhFmDrAhp7MWc3uhokwZdAKoUdcGg6Cgt5GCavmRWGW8zZCL8MUAvoBjD3mejkj7j",
  "key9": "gkyH3Bi6U53bZyEJ4CjaD8H6AuwThk62ZQKW5vMKtGUAsWgCGEaZytdxkGDKXeR45KZxxoXYGEB5CKgs3C4hBJy",
  "key10": "4bQoRgkZU2ELLag5LJr8AMNimAwjL5X4fGW17Kx8dU12zbN1tXCZVSUcnF3V5nz9goTAp8fPNCuPvhcHwohre7fA",
  "key11": "622dQZN1XU2H487qCeRGFEjzFULwHaeqFbUGNHLVCj6Nd4oxEXZ3XXmwBM9dj7kyFmm5urg22qLZXdNXqe4ExvVB",
  "key12": "5N3xtGGJVF7WNt3NLRvyycSqqQ5T2FNTmBpTP2vLjp5qw3UaRRxXQR3pUJYsDitD1ncZJACxQavEsCeodfRqA2PC",
  "key13": "2iGeAxJorks9i373P4ejQPFgzgujYHi5dRops8ewWZvJCiLqEDfUunBpuyPcjM7XNYriVaNxtHmELsop1pzkLi5v",
  "key14": "5mVtLBoEcRMRgownjfxdEkWDpz9NBKEDAHAzT2Y5FDVHqR4JydbpUdVS1EkAwX5rwGy4bynNd5NqhjDvCoWWUf5h",
  "key15": "5LDe7muLRrh9rjb9gfj7S2T4TzbEX8qXc8Kw4WrsYMQfPTojQt9mgYvLGXPCQZP9nm5P9ebnPbm7YUjvGrfLUfa5",
  "key16": "4QY7TKVxRGaYWwPAY5vuak2hy9ru2VGPGSmNB4SSW4ZDdMCPRrzjWjRxcGhgyg5PGdsLPPvXjXdhJiFhXwbPn5Vq",
  "key17": "UY2kkmacagLyoYQRPg2bxswzTLh1kogDKUUHSUAqyZpZMMCfvDsvVbdLCLr5Dex29b3pdYKd3oB9TXUZGkE9LKh",
  "key18": "39EAfp3sJq7jnZKVLMJRRv9VYaYtLFbYoetCBxDa2Tvz4bknoYdiGA4fJjqf2xWwdjTmm3rmyHfYUJwcMZ27RUM6",
  "key19": "2LFjGULw2ke5stqzcEuyoxNjZCbfchWSyixVSV2511Gqf7VMPU7zrHq5RJMDCHEniGuSfWRoARDDzRJtmjZ2kPR2",
  "key20": "5LkiZwCmdCgxCFLbpZLmKbV6E42m1fJsuReuU51VtXjXbbZvzeLPuvBvkEfbigCKkigjJdZhxATy7MEowtQb17Fx",
  "key21": "8AvkhzWugo826fmZKGen8F73CEUSKtDEDoY6LTPGtJYThu5BK3C8iWkhJNwbQm7wss9judmqZ4hqAvWVjTR2txi",
  "key22": "2kkJxPoDHZegJjiPPaMw8UwZyByj1sNnedW6xoPDThBjf1eom1X9p3XRyd7o1sqGR7RTBMsCUjB99WjFCBc67WCv",
  "key23": "izTDf9mPeSPyNeXaXMmg7RpLBhH2u8dvxnhiRYAku55eHhqQ1y9XXnxoSx4EqKVcBkTuKGNu2eCsQ2bTZbYibhM",
  "key24": "4x2PFXHk6Jdb4qmaMrWtWWgWdJqZeRJjWeE8zWRDffWYca17GUxtkMqF5WQ7F1VG3bQMaeH1EFvRA4s89kNGB5yu",
  "key25": "EByHVUFcnVrunprPdaWXGhVUnaunShySU2T3j9pzkt9ebaFTtMGmQ5GwJZLSNKyfizBM5tR8xWWmynZf2Cn4rqV",
  "key26": "5Fo1amRBG3E6naTZfxkjfUsSWR3xVQNPT4xPxqJLWu4TwaBhNReNdaD3tUuKhJBZSttjAbP7JEPWuaqDGKCLx4PU",
  "key27": "4aU95LLxSTkCNjcnD3kP4xxyoEgnz2fVoyyJgrbsDpCtpp8GZupz7rfopbWErnzmPC7MNPsJ8owzv5pr3aETerUU",
  "key28": "3nxGaJcM1gCUF1yaq4USL3Pc61wuKdygTxgvRCeSNF8H6VxFpcWjhZCWMqJpULWQvaPfyc3qFdu8ij6BMt6DnXZk",
  "key29": "1CATq9jiDksAMh9v5H6xWsNKHBnM9Ynng3xyQLscYfDnEykEdVuE5kRD33gXLPw9sPdNmtbA7kD14yjzYXBPRon",
  "key30": "27qAfm2SyhLtg3PuxwjMfNY4gfK7ENhTKtjNjWqTv9yiPups7ad4SpnSbCu3rTMxvkMULS33MEZkwiSnSBJoAN2s",
  "key31": "2Kobs5FgwbjX14S7Szh1hRugnfbuP1DJ3zapSsmvUqknFqq47KDQHQwi9SNR6MU9wAzmjsRiVZ9sZTC5XcaCmK5K"
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
