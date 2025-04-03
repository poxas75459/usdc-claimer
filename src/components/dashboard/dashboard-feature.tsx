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
    "3sBwUzdTHFLE3ShBRmphP3bCtYEaoXRvhJ7cyzBhtzqeXXvE3LAd2Kcf8rZaeAcJ9NK4D3pfBiaFKQycCVEDbUfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PKdX4xiZifSeuC7fMHhQ1a89j3r9ZDk9WHp5EuwDhii1N45UtNe4mP5nvfDst5JmcEiPHRwUpnw9QKuJdYAw1Bj",
  "key1": "dmbHuaGdr82hNLiLHiU1mm1FdbyhYpJzKAqXradFCdc7ujkg2K4X4DJmeQAr5dAnVX8GMvfidwsGH3f6MQHuChT",
  "key2": "64LztJQpzsemEzR8jNfW1YBfiM9gdqds3buNWfZ6cfrHoCb63X8ixvKLY1JxP5ykcBiyJqyu34jg1jzXc7oGZtKj",
  "key3": "3JvLXDtDhmosKpgkFrHZEigAfCwHmdRjQxjDa7ypHHWfnRhcQo63n5XSMSWd9Q4D6wycfDwQA4kP1AovZUz2z2hR",
  "key4": "61mozn2UUzNQqef7hoXnBtosd2Fp59RWePsKCdMFoTAnfssKBxzQH9xEQxV5yTLYP3a3pWzWgvb43sW4x8u4KQpi",
  "key5": "2ADPdftSZbuYDAEmdjAAQ2RridhjmfGgA6h8HLrYCJYHf6ksGZdyNmCRKm2vJjKQxcA5UY7cLD5YujSymfnU952d",
  "key6": "5sE8E3aBpawm13eXyYUnN9B1KAfefaGAUjrcH6gAmgkchyvM65oYBdEXtZftbwBUwtGchgDjCgE8iX9erWPsXFWz",
  "key7": "5QbuvGMm2K5ph5A7dqSLeuLHxPePDGoFbRmKRn5ujcPewCgbXytSh3snxHSX6ocuKXMS7xUYnnhjGc7Unsx7246R",
  "key8": "Lbf3S9G2mYSJ5RYNi41FG7jtgp6pUnN7UUKdP7wBmoaLiqaJiiJuaeRJTPrkVTLZGxQRZ7vDxh12o5TMn1CNaDB",
  "key9": "gnjUwhEbhDWaA21kBx9Ta8J2jLsQwu3aqKktZNcgSPXWa2Xc9yD8zTN65dxTMevpowsrcnUaf94RCqovfVQj1gf",
  "key10": "2UqhMijYVN1kFjnnsu2fkaJUx8nY1unmG2C21tB4Mq8xgJXied4WNFELQP6fbrk8x4GZjDoTMAt2WRdjsxqhJuSu",
  "key11": "46aeGXjKzyy4tNnKzjLuqcQY45EdoRcAqdoYM37A6zpwyotBp8wZmHp2DebZpYwqKkfH1ZbJTipAgaZ76rdqsA4z",
  "key12": "x8nNimumpM6dUvmPutSNV7MYZ3v1ajRU3YbvKi7ANmLVpxmY4dYRaR5cLJKJmNsLdYmhdk3FnRFn3UJyBpaDH13",
  "key13": "5XiUUsySV4hCB2A48Le66pEmbZYYe1Wz3CHk8oJdW7cytjs7DsxjJRbarmeaTcUJ7qah77PVW8qYGmaMCQxPbdJd",
  "key14": "2i17N367CFE3YswbeMbHEbT4XEZPL4ruJdgHDK5xnSomPjatCkWdft5RiDZpy15PjBC7CGvUE3si2kgVbpA1SYVH",
  "key15": "17pZGfNTb56fe8sfWeTafVkTbCwrAEC9KaiRDvQ6pjapRxtR4ErcUuqd8p2v49gSnhEL4ospBtTzAacWJtbzZme",
  "key16": "2tYPJxbrSS5dgRN8amykff6vZHjHh1YVp8tTCPYgY1fNswxzvoyjK3YuNtJJ1w6w5i3WdSUh5w5pbsbD5z28mCFo",
  "key17": "39s5otA6jKSg2exB4hNk7nAf18bvBFmpvRFc4RmJc8G7JqpyS5W8RdkRuV19WJWkAusQdcXHsex48J8hdLn5WvJY",
  "key18": "22gZ1JoTqn4kSRLFoFajJxVEzNZouGSEMJNDa4bKVaiKQ3nY1ycLLJscDbppCTdQnpZgpJACGJn1gMxSKc9PPJFX",
  "key19": "4K4neqgm669x8nQWgduZcjDjj9HvCXuJ9PL4govqABESyobRvct5sN6wS1Gw41fPjMaFUnKkFk2rHrkdEUPkXuyx",
  "key20": "5wte2C1ibXok85hvtLWcvwak1vCJmwXQpr1UAFMejBJFivsnD1ZzZUaa7RWsSf4FwXCVnHna7XD79rc2w5ViXEzz",
  "key21": "y4yx2hfTew4iMHGygW6PeqEAXLP6rq7z6JYaZ1DfNVVsachaJJUL4Z5uMMznMsuJ4eUeK1Wdzy3zNsqA1UxWcJJ",
  "key22": "3Pfn152ciVAzs2G86eWpHqwDSCoVs3sXFzn9wmfMB7zTcQKHuDQAvpCBBpC5LyU6aaMjgD3U3Uipw29PEfyP8Lsv",
  "key23": "5a6AKPUcfR8HyVXtxHcfyzvpdC8oGxDP6qu43oipdPr6NmNcs7dTgyfiiWekH5H2N67Tiyvv1xJc8HE955rsX312",
  "key24": "q9JLCZkRMpdUmnb82aePcHpbvfcuVoq64mckAscoZZ5zq3TqDEbWgYukqtvXZ9oYEB3LSw1EfcshUhyeneVr6D1",
  "key25": "4xXmXHJ9KN1XrRK3kT1x1oA6xzN9fcasn43fGUo2AH89oJwixQtJ2nEYnfLtZ74jHiZWX59ZVf7kaRL7faUxqsN6",
  "key26": "3KnuVceLdRb9sFJb3YFuEZ9SudYs1NyvpF62RooVuKStUo9V1SYvpExNAZnAVhVDAjDF2rRJUuJcK4bPpguK8FtR",
  "key27": "DGzCYYFq4CrFDM7zLpfNLS9GuHTdaEVdVcUDr8tLyDrWeVxPpA9mKufPJkG2YbPTx3u2SzYZkUTfD2rPHtE3uPu",
  "key28": "3fJriTTNRf5tyy8u6A9fUjDznDWFCmbJn1t9aMjeLM2zVg8EdCWUD1e6e5ANuNa8e21x8sy5xwCfg31XNbxTTLsm",
  "key29": "3UP4zgrWnNfuUzBCuAcjnkKJ3MihuH2V4cYEfTZuiQrLyeJ7XdSq73RxDfvqXStJeMGpY7xn9s3T6wAKzTjWv8oq"
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
