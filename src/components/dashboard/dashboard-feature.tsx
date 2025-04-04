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
    "2dJKnXwkAkrApkuarYgVPTayqkQXWvoUZbnVfpPjkvW9cudwmTUs6fnwzZMVWoqFjZNvtTjfy5LFwhEgnwj5wAyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LyxGhgcqGwutmacHojJEAuB1afuHidYXgBQgABQw4AHSE7QX5dBk8FgxHsT9kvrxRwxvPcXRx4uc5SLDhZ4oYdU",
  "key1": "2eJiPC2vegtFb31zBusCG2HJijmwq8Fm4AKkz3nfWM7edu1N9H5AuxFTK4V7pHLyjcCyQvHoCsPXHusVuMtdyyzm",
  "key2": "oySazBcfYDxM5L3kjsaEGwkZzmaQbhUinecMktBipV42ZEUQSTZFCJJFtj47JfDPWo3hGkDPi8r3phDuHSD2cYS",
  "key3": "2PDqnZvK82EMC6qfpmdNEFPuPatPQHktQxKe6PXLQ7CQFSR4sSuG6xBeAsgfwe2BhsDH9p7Go7MP2uyPMWwk6Ai6",
  "key4": "NVk2bBuuxnaN2zaBy7kJU5cKcf7iARz3gkKQWmDDzgcsVG16nohQv9FtVGkLhxMMe5mZ3Ynv3v19g536PTdMTYB",
  "key5": "5HLqg22rw9f6HytQ8W1zDW9cDMiUfawn4gXE8bFBKvuqUXJKgCyoL11DWB4UDPiX4syDn7ACBNxHoaBpo1NFwQRk",
  "key6": "35PE73owQDKAFA7UEwVj4ceASa45FUTf6WK5KT9PFgpSBWjgX8UBGDocmtFgbeK6tMbP1ccA1y73UdpQtgzZbBXT",
  "key7": "27NT8BUvFUJD2FhMeVBb8oFSPNBRNJHXcLxaFr9m6CtAGrBu6A2f6MFEnwwxMiikjkAti4crPUWsTgn2K9wCRW3o",
  "key8": "67GRX1gdhskD7zdMsMjaqu991S2SWRubkEUAEDRKeicAAusmkLPHWNZZV1wJpzzaKrektMZH4JxuXbc1nCgMqoFf",
  "key9": "4j2YWW2iZb2ZrqdsysQp6TBKKHFswnXjKkdEoDepcTVtKQaSsfoEqjQ92Z9VZxfoP7b4TKL7SdSZoRXUgnoma4CR",
  "key10": "4gDBsaUhbaF6HDjykD1qo6EocUzXjZaLGAQG4RbVWsyBJueMPF1hMLGvnCnDSER7R3wAH4aFfh5WPMJJDpwzBN5M",
  "key11": "38e6UgZ6jPsHWizCsCnFhW8bmwYnnwVTk9kYpCtA7tNuA3wN3RbCSqZr4qWYqNXPVHFWfrNbUMFJF9j87VyJa4wr",
  "key12": "EugFiSPuLbLAfLBjk3J4kEjnpUycKTfGCDrL4j359EiANcti33mnMzni5Du7yqyDhhtbNonGZf9mnbA867GYzW6",
  "key13": "3iF4zD9qjnMeaAErBoeSdQpMkm63TyFQLtZgS1hetnvkgRTW4khBr1sXRWsTSE2PSvSD9X2fbi8fxjk1f3t9sw9e",
  "key14": "hG541xfPDMueEj4C5HpFcivkV6p8qEXov4dAja9fQGgaVWUiM2nCkJZYxqkmD4SAkCo8wcp46KxkAPVyvoyYaQs",
  "key15": "41xN93YTakhFJTeprKp7SidAQVhKwiGNS6xUtzMEddtNiNqHMCR2CtavqeJmgsfwTCQAvTAQPJ58W6PNm4rA8mu8",
  "key16": "EGiCGPhp6uvVvvHaKqctt5bu9eYShX4oTFyhPTFbhqRKNkk9W5YZ12N9CiGhxj3mDuchr6yqivQsy7aVT7Kr5SL",
  "key17": "2n9RCX2YVTuXEZY1KLQi2v1DUkrhDedkMtHUKJ8N2QsWy46WPwKet3zwJcAodRDmYMp8hz7Ca81QJXx4JVCkrrUE",
  "key18": "Ngp38VGdEBW9AYvw7dFE5ByFgTj7aA2EJMMs1sqpDmsaR5DRH9hfy5NQGbXBpXSHVgW9NBh3bH5fAiQyjDDK1sB",
  "key19": "442TrmFtB8iGq26idEjqjHwYS9SSLQp3UXcdsseSREbMTo7wm3j1Qnw9svaDGtMoJPzkiLGN12WTDnGVt7vQT8oL",
  "key20": "4ZENPourpqSQBWXR8HNBDZGqsezusC9nqDgGCnVmEPLxWD2EZ4NqsvyAdoMFyJoe7kQTbzZM9jaWEABwFWJZCURb",
  "key21": "2pQG37KpPjkWP4Y5XSes4uq8pTerg1hJQ7URNjGmXzcGLmWQofuuKKjcPCnDsd8ypxLvsQTfVuYEBzA2MhFx3Tey",
  "key22": "4bchGrXhmhxbgdseCzYygSPc9KdibSZK1cFttQaeEK92BB2SHFTsnbZmHvSTQgKGzg7r5UGifCEUop93WEZTLSNf",
  "key23": "3AxqNfud7o4sFcfNXzDeGxyqGfQivnFWw8HQvqyUN4aN2mKG8rL3EW4E6Ukmb3AQt3Q6DEMkHWKNVTy9H8v4Uz7e",
  "key24": "xRHLPajU3wZFkfF19kx1bTSvCYhqCKQRLwbod2tq3RhFVwCSBidRK2FHcbzU2ZZEbEqvw9GFGuZnyLRJPnEF3ij",
  "key25": "4goSS24mPBjeNkivKu9RijBYQ37tPMyd9s8YvdNxBBYFXCE8WUNeTLLFyNqt7248DU45aN2mXfEJchDYwwh28ek5",
  "key26": "5ZT5kdJhHfUMawdxPjnpcj1EvgBxNdSJcjHZb3P6tgREnuKmV18GMipSNt8SwsqtvXXAzFkDfBJnT65vpNRfXsNM",
  "key27": "5WNoUqAMhrHQ26uzZcMmsUk1Kph8j42zRqKZVCDVHzTzWota8fQAMLqnoQfZAeWz5sBbdKYKGapVSxZFZeiLceEZ",
  "key28": "3WWYo9PcuSk4194PXuxNZn9VLNEipCPVGyg3f2WyDi9XLYqMLPdq4xgt4tJ7Hq1qMbDRjZdbJAx5E2t9dVtR8Ewp",
  "key29": "5NdnwA3CLSCSG34Q7hdQ5WDv3gzu4SQCiqa6PFWePTzHpdxmbmahN9f3J1tUDaALmMXTRsMgGb1gH7cP7iFnBW6d",
  "key30": "3gYBRkZWi1BWsCUxanLuFqfDWk1tNRaHSMjLRRNh4YpnkYiMVLwr9ffcnN1V1sySaVdbpyVbkgqPetmhkiz5f7Sj",
  "key31": "5ygQChpuYFpBzRzNgbXR7G46xsft7bsoha7P7LScABSutu5FJhdSQMYD4TLfxEmevzxq9A1CcJJMSy2Ub6PQtLE9",
  "key32": "cefoHF5jiHrWoRJMw97uCCU6unL4baYATkvo4xLZdr2uEuczGrMtcjQVC3hpiAqvFzGsvzUswPfH9eQfXs2Dk4x",
  "key33": "37aopiGAWx18ZCmMfosuNXX3U4JVazxcvPsXw3u3ERDkFuNKEZ6TrEEWkivDCBmRqAEtnCqvxWKzxTKC8kixRYFb",
  "key34": "54dkmTuq5zMsghBUbZzDepCKnzJoTXTczuYEvwnu2eYfooasnbUVPZMj93Z8UAVsTvCSWwFGLXvrG8MT8A5QuKeF",
  "key35": "3FPHCmYKtUZ5uZdNqHg5x7o1i1TnTRNnHPPFXUK1WVNkidkdPnL7J1rim1MrtnmJiLpPKbfEHewiH3C4AUVUThUw",
  "key36": "5wuG8Yd53d58tcuaLtbR9W7TExfS99myeMHgHGjGWVgSpKjKGNedpic3AM4LYtkemES9zCgoxmReATd9PM1AKeQM",
  "key37": "4VWgQNnLar9JEZiphWXTp9fYNoBNi33fyRsPbmbmhicsc2c3GeSAWMP4u1oHQ8RfRXWVZ9iUJxMTWEmScwXAmcz",
  "key38": "5xgg5qb59if4Q5Q8Re8gY6xq6bmLNqznHMnNoyCGVuhT76auVv3hKfRgJBbwg3bpBoTeqHB4aQYkzz8iHznyoPeB",
  "key39": "3D3LqBFvvfvGgMtmz1ps7qzeeyDYHiFArMnxrTFg6qH8Zpu9PXSfLHGikRv4Bh7WnH89nNn6F4dhePUsrZabmpuX",
  "key40": "jRrXWrMFTiy2Y88Gy7HJuX6tSmCa14GU8X7wso5SSEQL4ftpbfN4D9gwnnyDF8GeEwXE3Uqp2LYNMUnBkEmQ61R",
  "key41": "2Z8Nn4e9ZonV5jV7zDFysBKicu3TzkdP22fEm44R7b88v7snTCn8VHLiWQ9NhuYZdVyvXKVxsaThsuqpFmSZPq5o",
  "key42": "2wnaXeDPRXKhGNzrcnK2jw9Q1JJycvnupa18u8R59eaqaLAodZjpVMe5cAWK6LuV7ayRYNBa7uJLuBbMtYHvCmHf",
  "key43": "65gDVAKmpeqhbo4S8MPzDZLS7kPgBdGKn4SThzeZqwFNQfzRwJccZgLL1vqcEvPPwadSSCtUFVZny4rEp6B9szVi",
  "key44": "3FnKKSE188ihs53T7uGQqNoNK4zqWpWgwZxffqEU1iRUSscqPLmpD6odZYsYvj3LtR16cWzCVSm67dGxJUHnP4GR"
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
