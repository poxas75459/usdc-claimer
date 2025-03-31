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
    "4VsZCoVXTxaDW9TYfPiaCzi5viXa8ihK8oUq1bKhnwpXb3x19g3uA9EGEM4T9r76yKFBxqyDnhdv2SMHhCu196Bg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wu7G6x1rxizRyGmQBCYXJqV9a6C672KzqFnCxBagVv8znKZkm2Jf8BNuMB9kkUsJ44qMz283nZacwkTt3SSEkQQ",
  "key1": "3w99yqb3UoZcbyBLcY2h67BnAfrzLuwVLR5vv7kK84SNpGSf8WCjN2wNRo6BC7gAAvJdMxaYr6rFEyubSaBVUk6a",
  "key2": "4JuoFcihsdX9T8dEWnxrZ6KbxidEEPtAG44P7zcCxhwoFKrJyphxNHXC9EavbpxXinCn3dFamzCpuktcYo4rNdFQ",
  "key3": "pnq7bzwMicMXCAwmPuYisLzxj6KCWLNpKMjcXyoY8PgtF1dGfxrmnf7mqGmxFPLW4XwLYRGurmmBbTn1yafeYRB",
  "key4": "4nGK6LMrWbo8bN8ubcCSWMXHKs4qddpEhoxcJ82RAYwd8bqeYXvETfYLFTPXhHMG9tja4FFa155bUL8xwDyf7j8Z",
  "key5": "5mDTQkwg4qsUZsphnsg6nsc4n8NTUDEb6J9K93QGdvy1cWJSJGZTHdS8V8A6JTLNa3zBaa2cGwAEoMRottwZgQ2y",
  "key6": "jsNLVZkUbgCNndyMtN8ALezGZsnhT4xmtfJSf5XVjgd8RtWMTPNEwbjcf2twYPi9VgftD8bpEYqmX7B8SEZS2FB",
  "key7": "5vwDFmwDBN7o1jPur1xhzfr1GThpnQ3WF68rnnXN1bGYtff3pMnbcnbKjiThSoFWymyjbLSVzeLDXKKLYgG6Y9VL",
  "key8": "3K79g5VQnKSyMmQc2M84mZ7hWvcodGhiedNDyR6yJj6KWMp5YHFmdQ2Ap5DS35pWiCRdvFdVjS46bQhnqxwFXRzH",
  "key9": "wkbVA8eGEJoBP4eHhZnCpoxE6BXmccY8nMUTdK6UoydWCdDXaGyeSqD68NRHEkSVFmbbsaGYV6yrJ21MnWc1ZkM",
  "key10": "mEykLwwzapgHhEVfPYsxWMvdkesmv6dwamSukgu51A5vkeW5qyN89EFbNepw5YQfyeGJasPt97QsBwj2819uosX",
  "key11": "CEtBJEcVwxMzh6VkD1Twz9eUVGxBrAxzUz42kheKHRMNLAodyYbPenTm7h8r54bzWYqeFodMDfVYFMNwnMRgXvC",
  "key12": "5CNX9oUa7uo4KwiwVR64LxTR9jCdXB5cFZmc86LpJvWujgjC6Me5XoVCXnbZuibvHHAYyjiykksoEQmpoGMbhV8W",
  "key13": "5eVYLH53MPaZg4XZJCRLngHeDURoEu5A6TwDT3niAegzxMNNeVKF3wfh4q6hjfcwM9AiFnKXqt1bTYH5NoLSpRq4",
  "key14": "4zqeT9WLM74tQQtsxmPxfF9PJYN9v1uLyTLbvApNXZonaN6Jj2q73ycSE5ezhdmkpWnvWpZSjePyM9XzgS723Brr",
  "key15": "NHV1BuJdq4C8SBzLtX1DXinrxyS3JZdotrvAq1h8ritTZkWdi5P6UTE3GqpdHfkXaqjkWzSNbK7aFgzJ7tEm8d5",
  "key16": "4Cy4z5AaCHr5zS1Wf83NNAeXCqf7xz6ZUNGed46Az8XRx7HxAk5UQsue1Pkp5i64sT23jafHxd8XrceqYbDwn8Lm",
  "key17": "67Fi9jxASCzQN581N7A1YdGLvGT1AJ66qS1HCTUANfiZGVgm376MSLo2zskNj9HTJoPwKQMz3dfhYa7T1U5q9EUz",
  "key18": "3mH2xhShA4fmC6zf7cU1cDAuZCXMbbJMiivZbtUSGwD9s89QCanR2xLRK6FLLsq9MyCcNY7qWxLJoa4X3EAEB1kA",
  "key19": "2A3ZtYeYxaUJSUDLGEDknUJQz51dcxtxB7r6Cn8feJEZDREpPXbDgnwiUWGaMmp9VNQ27Mcj5CqMRNxrt6bgXwEC",
  "key20": "51QLddjNXKj9DyJGy7ph5LR7F48c1hMLxCtiRswcvz5byrrydkiAGS1f6j6DgrmDex8BQGwMQH6oPVtyN4ztTRhS",
  "key21": "5wv64JT9QhiEFdXFb9B3ob51ucnd1H7vec9MGido2A66rVqh615fUgnG2Q48W6A86iywFJybtuhNh7AZMYMbWy1y",
  "key22": "62tK8B7BUp26gHqFsQaviiDYJK1guKkev15cmV7zPycZX5DQfeuybyuPDUTq4xkLhoivXqKJFFM22qAk85jza3Fm",
  "key23": "W9csfjg3GdqtsXgKHSFuoupQzLo6AM4Hjff1iK7dMgKuCLPsT2XNmcDSqBZziigEttUqoy5WXjL3Jyd7TzoYJ3S",
  "key24": "39UxUusHC4qbHCj5z2FEnN4YwdeUDcAqpEAeRZAVo4WJ1gj7SchRfTTiNgYT79vzQVMJpM6Yq4BNrQ9qSZCg4Me",
  "key25": "4MUa9ZAaE2FzgoTRPXLSDT5oqoRymiHFicmszpGPnNk9Y58m7dmPaR7CAQGy25NJfVhZHqpcwaxUTqroC6mzp6KL",
  "key26": "31KnVfp37PHK2G1CecvnBjfNGc6Psf2E7FpYCPhoqt3dYAJByLKzxmX57dWCM7r1rSoxw8UW5i6g2SCpx6qngASb",
  "key27": "36s4nv8phigChDkEEjSTumy5xR6X6tXW5Jw7YF6SMe7mqRCqVF26R3ZAqgZpkTkbQrbqBj9SQW9sEkCQTUcWcwZZ",
  "key28": "5Rcb2cZyeEoaHZt2a2AZap7nhq3GrG7EVgxQZZkyB83LRXxbPvaAqS2U3hAfkTHuvAqTp2nGRXzBgD4GfdprmmRq"
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
