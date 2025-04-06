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
    "5BqjRPmeB5755hjt9bZKpA7DKixqFvNxxLwh5BqRkrywoyDPiKTnz5Nie86jRN9sstjynrVCiTWmL7JH9BTdpL5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mUigZJRw6nWwFYVB7y9rXDRUxLkgMXwx2sMerJpqijNzfhiEWdWu6j6uy6fTUStky115eHRyrGAxtovdyguZxFD",
  "key1": "MnUQMRxstR8gKn4ZPMx2MFZMjZBWx62RdVnQigwr3FQVTRhvzTJQdh814MWqq7rrwcjTxXm4nSQdvZ4ZSNEP7YE",
  "key2": "GLu2i9qMeBLwmmzvr2mSMKLquCdtFpRbnw1uwhwwviCzdXku7SNEsZYPnURFoLE1C8x6UY2pKWGsezU6Dev6XF3",
  "key3": "4X8VeibXPKCgy2azg9Q2XhCnmPa7B1ekDSFuMWigQuzEXU2DNNenwyvE7j5LEMySuUMRwwhCw9gmD99yacnP48ST",
  "key4": "vqfqStvEUaPn4jLy5Yc4DAo8RqcZAA5w3GKHeefPY2Np9rTN7c4HTDMf7AKSAEmPYSv1jHS94PRkrupv3AmjxUV",
  "key5": "5d2Y5KUauCbCjYSWnzm6y1HKt5TfK97XBryarHxbEADFoU4dbQ3oBkZZQjmG4kbFEbFayNwYgV9nSQr7GZy6opBa",
  "key6": "29xR6fSMjTf7rTNBKWYtojr1ZEoF4fMVvWnshcjXE2bXNEKrfF6tL5vvbUJovtMgcw8y2x1S1SJYy9CPJUmNnxfj",
  "key7": "4aHaPNG25hLbV35248W5Zf61LU8GLiDhzgpBws6Q9cgoG4gL8Et5q9LujssazjzFQjK5ibtJyXB2jEdpuAYTe64c",
  "key8": "2FvTSXRT88r99faGNu1i5b11YYJgY1DjdxrwzNvNWNHQ5MzvHX1C6CsJErnB5eRmuDkr4ABEeDzZwhQf9k94HLvd",
  "key9": "uriE5qkfDxuKrjqnYYaVsGCwGujcFNx17381fFCGd9KgHRuT2Eq65C4rRVdhQ8xFozq3MfF6nHxMk8DSPdeyAQh",
  "key10": "g8fvegDZvPsXp7pUAAsBz2h5VGyhfBWuwTSMEsL6TJGXES4R9S1h1SD9xPoLgiNfZZQmdkMdb472WHKwVqVvvdn",
  "key11": "26hyRXh1JtLBjvDhrzwSRFi6aMxiYGx9uqpo2S9qyZNuJaDeVaj6JhJyztH9HY8awkzZDNnfaDKS8yZvr9eA6SYA",
  "key12": "2HMrfpyp4NguBR3FtuygsiHWagEqnshp7CCJKvY9Rx6w3kDuygZVfeK3S3f22vmd5hHJ6BM4sbHb5mD89rVUVDej",
  "key13": "3piyeDTys4hojW3U4UmAnb5So2X5niS9VgegwREBEzDsY8GCS6aGRoSi8VqYccSBbULiFMvAbGQcXH5mBPvxeBVm",
  "key14": "4UYawqnjJFDzr466iESxZSGLEztX4fdjLYp3XPRuTQ9w51skd9Pz6pZ9W1AFQriPtGL3rymEzcPpSBaK8z8GTHuX",
  "key15": "121VhR2wDu6ft4SNFXbC1r9XeCgcib4ZkbiEKCsm6GJkQ6iWB9pS2xKqdGCM1o93PqdqPcoEuobzJFSUj22XBnXK",
  "key16": "EJWwzFNRafDJu7bWce53p625Btv5e8JqQdazPZFdQas3iLfGshdBvfsTMerJ6GsK9ocA3TtfYQa8RH5ueJJKQm9",
  "key17": "4qNNE8o8Rj5WbsaVChExVvhUfW9hGidCAgab3iDTJQVzzKR25qDaHUQiL6imARQJaUfWQf377L1oTwh4pUXjudSS",
  "key18": "2D8QpWWWs9qeEB1am3is46kDuCZf5LsbK7KxTBwnGTEm1JEywLr5Upo27AkdXxyyrpbJbvuo3KgKKvE3P3AW2ShP",
  "key19": "47121eV1zaQ4EA9p2tcsxa5u8Kxr2PKycjoLWpJuSkyr6a1kQ2rF9NzLcDTagjX47h3Xzcpn4faYJKZanTAgHodH",
  "key20": "3jeiTTb3EtKkgBUPG6KE7HTHkFwJJ3t9ceTHMuQjo9JnBEUHAxR1q2VnG2pB3wPG7renrNk315tFg1sbM8rakCKz",
  "key21": "bkzgGbXc3T2yqEgZVLXRiXYNjgaDTYJcxE2KhD6Pzc2w9e9vHJw6HpxoGFznxZ2mvBuRCqeHs2DfDLCShkBuVrP",
  "key22": "4FDZkE4Tdzm6G9ZuQ9nZWtsV4LMhYkbRFTp6GGKtvGGKfriCPd1SaATh6tEidqhpuxVfbF4H8E3kcioiuiehfiJN",
  "key23": "3StnvAfjc8M6rQYKBMbmkYqYc7PmhwpTd5rQQ1xn6vBp85EZHC4sv3QE6hVbgwBQeDTPEJyQApGzuGkFXLzd9njC",
  "key24": "3M5hG7zNbj9VbT3YKXVR9cqhUYCuw3dfv4tvaJAqWcKHNGobV9PfvufE9FfgSGt2ZLrAstGtoVMBkXs75WeCKRZP",
  "key25": "2egYzziAseRsbjrNq7SrdXq4PcwygfSMwYt66LLVjf7j9YHyjSQBrY3vKZz5yMjBnrcugKaBZUneLkA48Zg7g2b3",
  "key26": "2p8zNxWKCpRyTR9oniw43ZmepNsUgtvSC7qcBGotNc5V71Mn2vUZjyEEQPtboANab5rBa85nhabvaD9hVdnwhqMt",
  "key27": "5LdERjgh57uiMYmbtWaEAYCfH2ExrMH3JY6v4xEEGfur5wDXn7eeTqtFKjjCP6nKmgkAzJ4xsHisfCvT9hcg9Q9k",
  "key28": "7UcjMLe67gzeLvskT5dtp2zinczP4Kh6u9snERgQSTsvvqigx8N4fS4SZ9ua1wesVGNrmBtCe4P6hiJq2yohYTq",
  "key29": "3zFqGQDCmf6jXEUKRZodtRwGDNKPecGSVVzRY7pMNixLe1rocXGznPVMLqLvbPq4bFjVRnEEmxxTqacFMSTc2MPc",
  "key30": "2SDqxnNUkD99ztPfWsJ4VKZ9kwtnnWhnvS2Rhxmwgc2XSSkAUWXRBhPFbuKrHVLuYuhqc7HBw4UUMMvT39KwVfgR",
  "key31": "4T8zVHg6M8uARCZZKdF2gPcWgqG8nCUMat7Q3c9rFG8VXyqsXSwqDCaarqYdCVR11AFFygEca8wT29JKFyPirchX",
  "key32": "2fyU5CueNXjM7bz7A5unVagJyidCmDkQsp7Kw6NDuSfGV1GcZdJdN1vfkatYp228GXJURnrP13KhNHKYifwzcpiQ",
  "key33": "5h5agzUAm8KcKoWxsd8kq32frywTWitmxHYJDwrhoUz1bpQnVV8aCXcsHbF87uTqa3XUheQ5du7NdDWUBQbs339d",
  "key34": "3pjsi9HQxa8mB9z3jUy6E1QJb6zXcEykVYAL1wZ2Nqm5ELAquSjfxfGf5Ngw2BnH5hUR4Gj92jEmNUrNW47npNJP",
  "key35": "AZR8tRXNu1YhGTeFmUxVsfTBpqH92v5nFEgatBnL5VePM5hVnVZZ9DguH2FR2Kaa4WzgcBbQ3rkU6NvN1AitXun",
  "key36": "2KrMUp2h88dXWrQuzKt5dj4dcHUXkx65nxDyBKPhmZTCeLqDdMPGacpGNEW7EvzZWWhMQc1QBhZYgxR3gGYpYNG1",
  "key37": "4YUyPkUHsLHHTrgCVoY1jqE4qqfCXTRFYWdovpXb4J6fjMmQEoDKgDTqH9ZkGrRD5gHqtqAqUvcBbPKggWmH9kdu",
  "key38": "5jAu6eiwTHYaqvkppZNrEAtLLezhnNgbtp2yruoQqZoJp6aeq5cjDLLynqq8NmfYW714sm1M8pX5huH1juqoyUZb",
  "key39": "WSQXJhvxWZuLqvAjzUGCVQjFV7PNGptJuxVtY3niGT7MFm2rVapgXwuARypoHxMPjD6eKNJGkWQbm6fCcvmgDJC",
  "key40": "3JwAGD5PwMwkKzMjEyT3YdWNMbAQwzRcrWBLeVZerFpTGWJTpu65pscGbCQxCpCCBgkKdQevZPkxSsuPA6V1rxfB",
  "key41": "59DmQzQHfbS4QxpSrUqo1BPzDp7oC3GGjihCHgmRmVAJa9r56CNcMfvDCZsxoPeQbp9JEsjD1nvshc8tS8LVr9a4",
  "key42": "5rjkomW3qLBXdovEDcRK9LAqSrhM397GPuEwkFXDzTBMBg576nMsnDFmvoPq2SBRHKGo8SYEGZTLqn9AnHfLT6vn"
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
