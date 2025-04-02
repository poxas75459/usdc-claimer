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
    "oA8V8f6PSEbyDFfodqMjiFwUGeSLPfyyd1fxmSoAFiFB646oybo7NnUx6PAfBUG44sduCjPZmvxz3Y7QDADhA9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sQyEF6Lm6BmJFnL43f6pzgSyosTq5vuZtRDEiCdAH1avCeMvJTbXg61wt8M5RRh49by29jk8Gqhc7XvkUgDjESa",
  "key1": "4HvdYFydcEc9N1gwYnaa2PW5mHbhRt9nuzhtfYXzpGFg6PD3T85ZDXVz5NFf786MYWsQsu3emuUKhyGVFQLjBTUb",
  "key2": "3aDNoVXwe9tyfqtXGfaa1hCTWmvkDrvWzH6UrH4LRjpziy5jxcXh8Zq3Xs3feJ6XBoFziZdNBBnzHP7CpBJFEAf6",
  "key3": "Z6pBc3YpvVS66f6GrQ9UfS7zr7oin1fdhJcJ9XnWQFMMpHvzWxPvSd4eJFr4V3EJRBVtjfoZeDAexq5mmH8jUUb",
  "key4": "2HDFqvGD52Vr9Cpc1QGoarbq83K1Q8WQM3Dt1hEg5ipG3fZPoFrGu1iJYUzHGJ7kQp92N1imWFbZsWvi5hHQoBex",
  "key5": "2HGMbVMJmUEThwHWWVGPCWSmH5xX6tcSGkcjouEkDvwrZGRP4dqFq6CDrgvYax5K6UZ7pNuUpSomNRGsSdTqJD73",
  "key6": "3MmsJDd5H2Nnzkw3rpsfdV8bZHmyuJs261LiP4jMVe72huxTM97Y8QtfFfDeYhC5eE5WXvyfzRBD9H4M1QoZyGRB",
  "key7": "4uWQtzBY4LAKmpgR2sLoSAMBZxRZ8Lfps4PYcMKEuV5oFib2rNLJ4tAQJUfYqToZMpcBYcTgivQ4kiDeyoff8TTy",
  "key8": "4U1VCAD5SJM7Es2QNB6rfTXJ2Csek4ZCYJiijVog9ztTzJtDg4zhujiBZrMKyvHSgbZaMjVXKVhmKhb2Xb64fKJS",
  "key9": "3zjzzfsU5XT3Mq1Lqo7SKW2j45V1W72n44Vt9YAFqVDQeCvRBA3tS94XNK5wduf6y39FEuZbuxMvFnWkKneUYhtC",
  "key10": "4Jb42hoajnzDyEEkQG8ae1oHMbZhUrQvcqWQdhbBftwktvVYPdZgtnQ2PTe8M3ByzALtFSB8FZymYZpkSQvnAijY",
  "key11": "5YFRxfxRokiCrqqjbSw5SMC73CpLFRMtB7dEeH3N5XqXxDYvF7qzJbnPtpqLhibtTin2Vrm1EM4tkcR9HbU2cdFV",
  "key12": "67JgsYsoBySbGTm8yWNHjAHv1zL6Dd1ygcZ8sCzTWhTheXZnSLn2nKYAmZfvq9WfKpBG2KJkNvcixmXgD3fn4eek",
  "key13": "4qHARvsrxCdwN1QeHJCBSCgRkSEMEymXEqZ1rRr8wbWrxx2jX35LPaYBsVv5gVZTQkSgzwkrvymT6wbSWrLfn9ip",
  "key14": "4W1Y4QpwiTxKmszjqmXgs6CHsJKbVBsAs3ZJVzYpnf92T45H6NmJzzvxw1ndMQNeDSDtrABfSCeZnM46s3LqiqLR",
  "key15": "5m9TwPPJzd4WZZP7S1gAyP534JL3b1rxN721uR2YkQaPYU21dKBR9BshJS1Aj2iamcxPqg8sjZwQotXdVjDN3ogx",
  "key16": "2BE7uGLJFK3bGcJhNT4PZ7LQrfyAUEJytcCpPWSivQdRP4rhbnajHWDaqHT1N2JvQ6tcGbZNGkywDmLpWnbtW4x",
  "key17": "3QPxe31cSNn7RWWgCneHJTfX7cDqsKgqk9xgUmmYE3tXETahK1s5DVnZQ3GNqpRZqVmJGQKJxnYD7gKzUz237BYG",
  "key18": "4dCECR6Vzss2QCwGEhXVSV9drxK5yPXnCvWDoViPGw36Cje9nHesuPWoJ4csBzmDSUBH4s7XYoQSKZrNYrXnrPCY",
  "key19": "VfbTEHmeKckfivtqZJEJBnetm57f5N9E2FBvgpFDekL4iuNUYcrUNT4eT1HY8CvYNAVsuru86LvFQSewENs5LGp",
  "key20": "5777KWAXZu3jb5dgZ1YgUWFQQLv21mCBCVTFze8wc7MkvShEYGuSMG6EdxBPZseybdqdF3zZEvuA8QmVKLX9GjNg",
  "key21": "LQYHLtLqpwsig5jc7XjDhheCeVSLLBdti8zyT3xaVwrE5yyJMFuRZf3nA1jVysrkMGrBMRT8UMBS7wpjscw8UWs",
  "key22": "4tzXsLCDsbsZ6H3aAgTizkrHdzdGHUEkkBtuUP7munSgu9Bewim7mbTu8UjgtuVZE9gGLzhNnHd4g6ZmzVfUfUca",
  "key23": "4GQsEyM53osteP7bUmH9LJhfGy7MQrLCHj6m9dkXMTAPDAGZZEeG3BuG93jN3itpgBNbH87drbDFkYUqsN6HSmmx",
  "key24": "5LqpAbMyv1WBHQCNyTMNLFLj6U1ZFbE5J8B9g4PKJej1RP1MX8jv1fzWHLEfXFZDxLmmzuXsj3pNpHEuV35KCuY5",
  "key25": "1XG4BZmyTVH54wtV2FWDjLYG6vQJXxHzFfDeVWHzTDktLKo8M9MXGFSkdaU5qanDid7epy61Fv2SiiPPyw4fBRL",
  "key26": "4D1cLhcwPrJFTEY9PgJ6wdx8rhAcsPAzUFFVkh85Ep3dzvqDNwYwS5EcJaenMggCBqqSMM8gAMizT3CCbmRv71yf",
  "key27": "4sMLmnxKeyreZVuWzkziQNR1n3EB82zEBmSdbpS2MhkPdJRqgjfr169DQS1i5ehbzoLNxzoSVmL1eSoaFbhdwHhv",
  "key28": "5bYa6ZT2We12RaWAzBcEV9e3mBUsFZ56kzPeqDvEJcEBLcNQEBbgQZZmFreQerh8C8wh15gSDTquqLQzXVNoZZDv",
  "key29": "4TwZKyNkoXC217PGFYqn76Jq3dzeWnmXxYZqXrBDnvXdbap9jS6E9dCGDUnXPTNhRUzr3WFjiNToCgRc29kSVVmc",
  "key30": "5oCwPEFGxdocaRUfB5qEUMPkSu9TyjRusfnTotGJKuAXZQ33b3Ddo3jvrGsuWbwCPYJCSDMegAEJd8rJ4h6BagJG",
  "key31": "35tKiUZsfSRFWhTZnX8htm938xyqsd2hFg3r3ngX5S6ivn2pZ84WZhKM5mo6fq5mAoUZnQ2NXaxnJXcFQK7BHegi",
  "key32": "3F2P3AiUEkdk8oaWxfBnPNsabs38vULngjSD5t87ba4z1Y8ZmNJ9shmxeZD3FA6DyT2SsJCM1ENHqZWkkPooWNSH"
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
