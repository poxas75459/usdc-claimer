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
    "4SxjRUuquz9AUiqKSeaXh3biuWG5QfuKBd6FNSif9Egakq3xFj9QtbE3W7qafn2Bezxjn679BUbKBNevTqNddZrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "369c88JFJbWLk88WEcVUKyNzR9dnvauoUMtnxu3c4YhhkuRCi9rtkweEQZ27cyMWKrxXB96WYB2qNCAWvoTfz5Ze",
  "key1": "2ghYEz6xw837Yk7YeLZVYWv1avd134cH4YvEHmkUtsGewTm8pzXg2iAEdUQhARrXRjxnHRdzynwTqiH8spsGuPZK",
  "key2": "3TcCjBk3od7jyvSY1JU9ZgV3ryGQXkKwP98yfvUqZ6YksEKryoUV6tgz5qdJt6JmRzyGN2uqjV57cc1iHGXHqVc5",
  "key3": "65zrF9nCH3n5SQ48zLjCRpX2qWBXQMpu1accJdGFYqgkuuKbFaDvyA2xgMJSNDUjxTroPDrdGsnvVYeW53CoqgnZ",
  "key4": "42DL86AVSWYqjF5xHDgYHZnMRhj2UoR7DyuX1fKMb154hGHu3p1KtknugiZiXCQcsGyNHLR7gG8dPinDorveCu3w",
  "key5": "2EJfW9Ho1gDvfnt42RxcBwqVctUXypgvzDYY28dNMcFzgdZm167bkG6x8KhQcGVuUH5Wb3xJLYwB8XjZMXtpi1zM",
  "key6": "574L64KvSrHfQjMUPZhqm8aYPmPJrTL1nf6kXeqMnzxc714MWayw27AfHrD4tB714DymipQa7o7ZLMYqDaaGVKaT",
  "key7": "25wbP8tX5b8pReKka18Ufv7V9bK7Excon1cNDyGjLiVVjPzX8tVHzPhW3QqXtycav6xmuxKEw9hBvQA8HXtufvpU",
  "key8": "5LdrMcGYN6KBCiRcoZghVPuLEvWiAQvi4VBqqaXYSUGWvN74eyrsGeFiTYVTZzKA37CRoVjFwcineP5GdauF1WPW",
  "key9": "2LRG61xgn6Pun7tE4o5R6uaALoWhce7zCMyeh28pyGj4ANCPD6Lr5DGHxLMUkXUg9MadCpLUWa5o4YH7WHVLaCFS",
  "key10": "3iyi75YYX6yDGcDyMbkty4GL6LraXLZNPhT16z8KkougxgMAifAGnYsQLfsR8Fp2ZPofJGUh8FTgsEM83txuyxq2",
  "key11": "czsWskMrmhrX9auccFqFS8FWYfkK9iWJsr5YFu1bJSik3cj3DiS8eyeYmT8ZumqTaiPMiF3aWs1secWAb622tcg",
  "key12": "5Ni8k5n9Dy6kkaDi8EaXBr1ma1Q26gwwuKpUv6fgGN8hedYLiZpACbmJ5zhufEhBajm9B6Xux31pPnipHYfNpiPb",
  "key13": "46puJ7JC433tcgkU86ErsyGZbeBerGBPSMSzGqVSP61jH6p63DyNkYGJL5eMrYUDEmJonxoJAkPDJpqQBDPtDpe5",
  "key14": "YK6ZYnDop5cTVieDVH1e3CXVzHf3BhKHesrF5yrTWJpL91F3mzwsjXi8VxctMrQ1YaXn2he9nNWd9W4Gp4hj5u2",
  "key15": "RhnbzPP18TPJFcJYFZkMJM4rsiZALtJsZTVi9urFsz6EnksMv1SC7C8R8w5pSsxzh44LSV9T2S9QVjhdwzRwNRi",
  "key16": "23X5hvF6wCUyBLorWqgYDQ2qYihYuY1nVrMazWExBJfHYq74YqdFYA6CVNb36Eido8f9yF2pcZbubryc9dNvah2y",
  "key17": "5SvdcKJXz6Am9uC5kF6jCPtk9fwzumu6YDpqNXkQ9Ybj1BrUSj6tmKPdm4v4TLgAfX98fLxoLdcTwarCLvZ8YqRF",
  "key18": "3cpYjrfgDaJk3S9rctsnTw2RCejavh3RytoK2oNnngmbBVAg9A7Yv5j7sn1DWSgykGif5Awfn3gtpJReot1nCqDG",
  "key19": "4UxGqf1z5aPrvYFpVgtmhsQKenhMNTuHKeA5tw8iC76auw8qQeF24WMQJ6xVj9GSiGuGRjU3Bw2bvYWMtLCMkUuX",
  "key20": "4CrCyh3zD4YL7RNQFBvTnRnaagieFfvDb6csgmUPcXd7JUTt3VXS56nFfp66oFRg53DQYfMEYUjZiNGbFpQAV89k",
  "key21": "2McebNVr8L3yAVkT58EiaLvj7SNrTBVF2K9nyNn4YxTKKUy39REujaBot8nPpqTH4qKcAPGMJ6V2qRVMzRBkj2xm",
  "key22": "vmzCGpqYfQxmwoP4JvqQzPRo3DnYo21WrmjnWE964W6DKfk5AVEeNmSUZ5noU4XowwnAMDyYV4UQF7TbENxXhCA",
  "key23": "2jpkUMWeu9UMRHggs8wWmJp8MwJG3etWXY86JbKfr4FKCyLRY55PmpPdNTGuoGADD7WCvxmikVv9fEpXomu8WMMa",
  "key24": "3udfxqbfmTBpz9A6C1FFmGH5B55x6hNXSXVWZGKLuXZUKMCyRZEVQ3Ax3Rcx9ob4a2Ax39uKa6hiCuejZeE1RE8o",
  "key25": "2R26AcAK3FrcWiwHAA5a5L8UhYPGswu5RfP3V5PXtfz6XKN2nCbGMYLM8G22CvHmG39RG4zgjweqWGanxdNPJs9A"
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
