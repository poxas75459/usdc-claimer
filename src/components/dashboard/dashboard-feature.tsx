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
    "d5NaDRtqHPAWkyYhV1VzQXeSKXevtXx7fXuo3EF6Jmipd9kVA9y7nQPUupWLEYoyqKPbdKK9X6N8FUaZc8YwgNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41uBof77sqT2P7h3D7YguxwB1mXLYRkC8KkJNGe5H3897EPFnn4ZS7m4wHZtQHtD7wnGhWL7GzMqqAvH6WwkvhX4",
  "key1": "4vsfYtnC3k9VN1kbCk677CDdzZtB9Aa1mtkQ5oGnRgEF3jLU6RZfnhCzf6gsLbXkDp7XRMiwcVpWtK2t7VjGq6Nh",
  "key2": "48KGF7ia6iKYEc29MmqhC9e7wtXrvvCaYTw66BrZuidTqowFUekKF2Ro8sFXSjfKTETRJSjeREcPrnnuVNYbSFew",
  "key3": "22bYwmRRURm9MfX8U5q9BNHQVDaEbf345sWxcQezeVDwnMURyfP1Ae3DMZiYA2RXm3ajvQ42epuearwH9j1P4fp6",
  "key4": "5gnfJFLui3RHuHk1HEmTkJ88nHhEniqoQdx2dAFmJW1ZbeamW5qBjomrwnE5MgacPCe9DEcc34PEmXHEw8nBLJtk",
  "key5": "4nfJieA4fY4GFUxKP3oMcqQQJsoHYRA5BAwde3T24wzMnb1JaxbtXkt2xGRZeyMPRZR88v8avNpsaV1uUDWv16HS",
  "key6": "PJX2pnZdzpYooZh1dFPJUxVUmJZ4vSvT7vrRg713bB1q9jCcH5GXc7HbUVZaJG1eyW3kkGQ7uEKUX8azoaTRiuM",
  "key7": "5Ls4bbXrFFL2bN1fmmX819UUfW29bgktfJXkX5nxoAbgKAfifkdnoM8vLNDJq7X46Gu7W5njHqk5Lm5DGp1KR2vT",
  "key8": "3DzLqkd293hV5na8fYbqiudc8aqkNrQ2Rn52LzTyASCQ2QtmYHx8VjSRTXSGAaJNzgPmaW2y1XtRUPZotzVRHZ9r",
  "key9": "327TkfiuBtF667K1nzbAsw8TXQq93t5segtdg3B2jFcAGuseZq1SXdfHBQozkf6JM5ZHSiqcy3ynRaTBSi1PdN85",
  "key10": "3CbcXYZXssN13Li1W7HgsSJaVGZc6wRPFKrW8B1a5XckoTfq545Ab4nifs4bZXWT7h6kKJFruJdcwDeHyYdSTs8u",
  "key11": "4TiPrkKU3sJiw1HehiSBZBArKrqwRZoR3MX2mMPutMEejrriVXPexuGf2hKJiWP1vSzNh4r78CkALcywJpvzeTLb",
  "key12": "s1qQZwrb48cagsdZvU3SEQJGbwRf5auZ3RT97GPuQyhR1pS41wsGKuDAqUTNTg3PRQKhrN6PAAVsXZLJcdhf6Tm",
  "key13": "616G7Z5acF7seF9E3t1gzyjW17pEmNx3BgEdU2uCDSRm9rjxHyHpPFCDtdWPrpKsRXafJ2GKe1G97DYzaDd9U4fe",
  "key14": "3i3N6dLDWwsTEHxP82v4WCs1GdpdghyzGU5PGSrtJ7xjLNoCYw2Xy3EQVRzMeTQQAFXEJ32CYeRpYsrzVny2y4s2",
  "key15": "5RgvJw7HqEPd2dwvzKWMjKgDpHddNWdYuzvxDkxEaSyAwLuAzRR6Qtpvp8pLw1hvdY2JXgvz67giRoQwnT1n26uo",
  "key16": "2t42cHUxt8ZJXouN9iNGL96oWotCsjv8rQYdaSydja6Nw37HdDpZYHAnVw6KbcLUy6iPhnC9AR3rVEszMSFfzHke",
  "key17": "3mMpsNGCabuw58fhhnHxwP62P9WJ7zzj8CrSxyoAP7NEzSaGcvoKyHZBV6HAkGL3Uj9BYbGvcKrYHYK64mSHnYQm",
  "key18": "mAXBJqhnoXSCtQXU6TjFc6weWTjpgF5yC85BnRkmA9CTdLWxVWyri27wBTSkYJUFARJzCPnn2tknFkm6Z93Zpyd",
  "key19": "4WQNsRtVfhKhkmpFrTXG4yBXEouNDhbNnHFQydcDauWYwyrSt3Wx1PX3tA6yfncztSfTdR9QcZpoDv1DhKpesct2",
  "key20": "32w62RXWvr34Dv856S5SwLMjxXfUVmwrvbCh5wK9HWPBdiqxwT5Hk3hzxFtGPACeux9CfzzvgT3BaohtmonhX96z",
  "key21": "5KysrUEaWtS9YqyLGJcNhuvk5csCFmQV51xi1Zyp44arWPhnwN4sof2mLfnbCPtBEvBS1Qg8VLKhhQ7DuKp4ijHv",
  "key22": "2KPbEq1ovy6sUVrskgWRy2GgMSFMoZYgTyqZ4tBGsDmGamkMxHebRqkKMdpGUZa92cjnEvayg51we7Ek8a27bzM4",
  "key23": "3N6As1knFcseCv8FvMrauJC3UbCc3rLZRhCErTxJfWPWPp1rVTSZnfcKs2yv2yuLo7X5DribhFRSPmzivvrDwygV",
  "key24": "4TpzZVhUsyJqtLKeiFwVb2osHLoFdJhBzrMjRcvsbN4d7LYRbSHSfgacXsCik7TXTwfbpqsqB33FBPHrDSnPhjR5",
  "key25": "4BVSGdjeAvRdYwhEjcm5vMzcgWCWETHxHi4pjbdrPWc5wcvmLLyCFkMznpLEzwHfJ7kSf7LxWaKogaA8ZNSfxjzF",
  "key26": "21LmJV12k8crSrSYgyVVPEKsVv5sS1HHkyf9ge9ha7yQr5t49ThidUTuZqWgJfVnigb8jyWjwDk6m2LL8Bqrng75",
  "key27": "2Y4RsDDEzxxdLKehzvmc9sZron9BbgVaBJVRNfHQbdGN83baYQxAo7gCFpJ5jr6bJ5fsJktDiRu53PN4HhHUKSZf",
  "key28": "4RzWMdmFB3HQQgzD4hRDn8EYTJ9GyDv7gu6WT4ccG6zy4ABfGwqwWaxUk5W2jFBzE14bH3nD4r2DP7qQ6yPW4ChV",
  "key29": "5yfGEsgddemFXACJt2vcNvBTNDCu5piymDCqbKqwoJsAiHM9czMWn6Mm9VKL9jXo6o1wMZiizfKBPzbRd8tg48Pb",
  "key30": "epV9a3oi96XtbvwxbM6Y3zX1jU5U4LCUHePhANGTD7heevdrPTB43CP8LumnFhB73fFFi7sbknpScdhkNcYuGVu",
  "key31": "48iv3WGF7THLTeC1ibjQuCP2g7bYobQMMAkyGJSnfvZsKkQgtxPUBvgo1thsMnrup2ovzntixAGW7mdGnWAuZnQe",
  "key32": "25Qu6VdRnF4fZ4suzRokWCNdWYV8CULWNGUdusAZabhQ3VTEZLbZbd9TD5EKuQAj4LZ2GrL3JiLjSmvWATSjN45D",
  "key33": "3Btp6F3V6GsGeH8qFpeJ5BrFfCM4HfCJ6qVM8m7qkKDgUF7DkqrTLya8i1rmXA1XGa7bmSozSwpzRGpUEPguL883"
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
