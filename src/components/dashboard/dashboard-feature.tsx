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
    "Ln1KVtDRQuzVf1h7dPB4o9KFY44ffgSM98kbBaYmxkjvnbWVLS1TLaEmF33uHcQTcXZPznaUssmFDLAr7ogfaDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aX1E1WTnPeatQLZNMPR7RUnjkjRDw79LHKjFZUz6a5byRP8d3c4ywEAYbbUvBzZkVKmMQcJdpFbiSwqnuejhMMt",
  "key1": "u95LfSZWLYZ7poRFKuic7Qh1Dgf4mJHPDDAszMTM3rFXBXn9dW8n9GMLkztAg8NrbcdJv1AZkoMzdMXAxPnWHsv",
  "key2": "S1E4yE2JUDcqYnxPLgDvz7ney6jUnBzwCi9JCXgXnbXW1cFpAfin3zstV1JQVhFuDKcuj3YhueMb89nfRn318Uc",
  "key3": "64f9nbFqNY3DMut9hrRk2JTBdJwdcmdr6TQJrEX4TR53zjCSGhJrLj5GQssscNbmw4UFUYawZD7ouxdAhUm8Wgto",
  "key4": "3WGHJ3cChz79unCjqPWPFWEQVHdnuYpi1kUiPAAcfQ78xA7C9bfDDGMebftqwTP1ABRhVT9StHcSEF4N793cv8zc",
  "key5": "3JLS93G2naMtMXVS9TsXDYYfpDv2bdLXtdwkjPNB6ucNQimZQLqqNR1zrf7Aw4BKYtPNW3M3jSwxNrZzzxxJhG18",
  "key6": "UdhCSAT3x2RuVLAykSi21a9mAiNwN6giPC54E8PpTHcd7QhU3DiTNy15qX7jJeXFKTP2fEBPpqJbsE3a53yCTb2",
  "key7": "4Xi9mDGrcm3A1sEqxGkV26AY2gq995xDi6e7tLc2GQjuwwi6uQdJrKKjWAan3y1gJQodoZz4tUqsa7Ubb6TQBrKS",
  "key8": "aMEGk4HJB1REV8ugsKd9tEuT7hKAuBnU2EiG1Diis4sNRvdEdSEN5ax1ASKZUorEE5YE1fRjshav1yvffeNKTZY",
  "key9": "55FLtHWnyxz6QiZJotYy6QrX4vrXUkLZBRYFwWFkAcM8uZVZary8NNVRLEHzwanZRN1CP6QP7mPmDL5fwNgL81U8",
  "key10": "2CzVnhU65EjpigBYn8MpTGNYoMLx1jHKu85V7ft75bU2e3MMziwN39kSaJvdDJS3svLwM7QfZ1s2Rhgsk2f4ZMCc",
  "key11": "5QhZzR7WhWmke2xUiyY2iB8u1HQ9TXaQP63GPj7z3TiuCQEYnSLFcSPBstg7kQMKUZUYkY6sNEhpWGJVxt36ouM4",
  "key12": "2FHLceQTc82NhqRX7AcwjFMCc8onZcdJLWht62Xjensn5HsDqmPDEYEraTXRxJaNspU3GJpi9S6nJZeibhCR6w4",
  "key13": "2yMDy1quUZtfZywkrgThisyaBLyy3TyeBkGwdXTKJxegR51DAmpr4Xf427gi13TSBza5uPvyZ1Xxd6RNHsnKigUn",
  "key14": "3xys8QiHnyzicVArVAf9rYkSHyDmaapcJU3ACwWyQxzSacgcpM44sFdijnK1h8wA9fzxMH8REPMA7Shb62hoizmx",
  "key15": "3VvKWhqrLBrjpJ8H2ko9795Bdjv1rvPqk9AVWJRypZUGSuJdyfsHhDcJFURokU6TEaY659oKApY6qBkQkJ871ME",
  "key16": "518MXZ5FkVtqz7uPaf54JWfhQecGqybNfijbGMbbvAnjTsrYFXpTe8g2J2QZ9z6aspgJtHVueFqz2vh5MLKaaHgj",
  "key17": "2rA146Js4Qk6f17fzEaV12p4GyVvQtUipAW7rtj5vXS9PEhpgu7NP83D93Bw951UBD2n1x1MXfai2LwYkGYYQeoW",
  "key18": "4W6yW3Vc1NJsXHuK5KEJ9mK4oq4BgErukkH83AMJnQ9p9AFkqV8BBdQrFWeMQFBNXpuKcT5zvZz51HqgU1BX5w5u",
  "key19": "2QtEbgpLKmhAk9k55xZxg4WMhq75Q7675RPD5wDYNiyB1maqqpnzAV6gDPuKLPr7pzDKqu7CidDvFKGVaLbvLUZJ",
  "key20": "4w3FtynvUcaqMhX86YQsTGkt3yAoXZCy1fc9dTFoK3XgThFpPgMDDfjgBTUYUwzceueHWDuuWdabZE63CtnTEWdM",
  "key21": "4qRzLnAityTrJtaZbUfey8mwgB4tJU2hbJYojTahQCbhsojfzF7vJZoarrFNPWf7kM9xmWjUkS2427fQqAqwJZ6W",
  "key22": "3Ba3CiLeTrujPTUncDbfFeCqGCGxEMk8aopSnSJVdmvwBLiLS5baFtLmDsHMv15HJLzskDKk9ki24Vr54P5gzBF6",
  "key23": "9wokdnjjz2oYBY2xs8vQDy8J2DAux1jRWUJqCtFdHMFSTamXzYhXdGeiyRjxEkvZaoru1PhvAuLxQJSqieouLkd",
  "key24": "2C3erzSXwradE3LySiWAtV1eRhTLf2514kanNuczwk3Hs9UC3PUVuztPDLkNqHdSHkqC6BCAqoJgPsq3PkHFVVf4",
  "key25": "5duJHZFSnehm4SdRopDxDf5iXmcQKdTKtQLf1295DaAWeNoVPsZUenjh1VEpsHkty39JqepWDDMTpKSizkhKWZa8",
  "key26": "28xK5yfjj127wCrkDWRqJucx9bQM3rpAHDG4HovGB2ZdK5uEmk1AZxpiCCpCmbkrppHHn324cxqDtxpaPgua34Qu",
  "key27": "5m3vXVkcMmJDWPVhgyAedG867x7mVkXxkhjxNb1ujVhZMpWbY7fRAd9h4HqtNu2vPWUeV4GdxShaAqhPyCBmifMd",
  "key28": "62aMgx8TQCuu7BveYkS1AuymMbFNw1yZ1RjEDeAWfkr4WbqrMQnvGinaRZU59Rn75NihWQmxYojMLJ1k42rMEiAW",
  "key29": "2T2A7j1XuR4UMgLP9VUDkkyepNmSqiqeRZJEBnMidgRLQhii7428731pGHKMCo8wo685VaPoGj63XDSbpkzedVSn",
  "key30": "T99onarYyPUsTz8gnBMc4c3xucmNsxfsk7B2FLVfusSF3KRnRg6sWQa6AiBJfUvvjdUKFNYnz5D8sNSi9xT56mG"
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
