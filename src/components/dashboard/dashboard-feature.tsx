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
    "5NwmZPYCrHsAviRQhZNtVM6VZxLcdC2CGiS9L7pWm9TUkwcvJ7Rvo6vkpwjUibeAgonKA6WUa7raXrtQZQ49jxKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dwmQW1YCYu1sUUBCgy3aUKGqAZZeiujVTqzMeLfW1wLzSMWyz2cATizq3bYRny7pynRih2JshjN9mBGZ95EpLwT",
  "key1": "58ZhPVMtQzJQV7iPH5zBzrzgouwyeLivKYcgJVtgf71htjyyDspZRAg3fA7sQTDYGwAM7f1mKutc7mE3Kyx3n7e5",
  "key2": "42w7XoyeYQLsp4hkW3PPXi6uMEhrX24E8cxoH9NTGHNmvt9zULKEiQUZm38B8b71KAMQq9B8g4qjGUDFEsDfYSKi",
  "key3": "3DmsrjYy3PhFyjoZkTy5X5dhHGVuiy9uc6t7nYEMwLXUmJCRkyYa8ERHcbW62gxKngA924XcBxeaxW27wY8jWQQt",
  "key4": "5JMQnBgBuda3vG2scJruL29Ep1cu8Sgjc3bqCJv4AZEzqgos8UyCbsfv6G6vvsh4iR7jcCXXeREbFRYMDdch5n1Y",
  "key5": "3cHs2FjGKLYjP97RTr7GZ29rEKHuAE6hntcvp9tZj3jwp5TXTmTepyfXsznKLRy65bMhqtVXZKTngqPnNFVKCEAa",
  "key6": "4u8vHs3a44H9XLnmBa7Y4danoiEP3a46XuqvfYzyqozBRgr8wYbJSwZLn6QESVfEvw1QXLbykMJjKhwCqjhp2oQe",
  "key7": "47ChJax86kcyMVUo9REEHLp91ZLhqejEW6LsMeA18S74XDU9Mj9sADN9HGPhbkMfxfVazZu4FzswCRQ2xg3wGV4X",
  "key8": "2QwWmLqVqtr2zeyxpcufXc8ah67WJ9ZYxQ3syi9mYXZBe1HdaHhjR8PJuAKpxGrypgxqNuxVrEAfLXWrjM1KakAX",
  "key9": "DMhWkeoeoFTYdi6VHTYa5YMhe46hn159UUh2WqFEnoiXy8Fh5XyhsSLTC7ow9S6KGi6v7i8qhwadN63eCjWS6YB",
  "key10": "ci5TfWS5tXkdNqWgzRS7mrrda3HCkDuE7syFn7aFHuXrpk2TS4QWwfHP4AB3dJwudRY55D8NY3vfgEsVk5ZRSCu",
  "key11": "26LCd4yMnhQ3PwnWcZfxYC45qXNChht8sgosEMEBEMxPUFEp3XyupFPDG7qBCwTNFjEWMetVLFz9euEAawh5q7R5",
  "key12": "4sCP2tMfVyTS9WadeSyQ6Qkt3jZ78VZztUAh2vP6wGKMWgT2GNQY9j8uq5UszEXqwacWcxaELp337cuReaHb8NGF",
  "key13": "4iKSnb7TkBpf1gmZi53e6iTXapjWU8yVdJ9VWBVqdWY9guV69mgiksLAsEwPSurG57g1vZ6oaVEAaxfh7Kq4oNRE",
  "key14": "DfTPm2vTuAzWYd4tLbEv7C8j5PaQ63e5cq3vpQuxqHCLMjF9eSsWvtWkpys3td7FPCZNAeQPBL4psX9HL8zv4MY",
  "key15": "5UrAJXRFdvuHU4v7hvyPuzh9J2FdP13DF7k8fSyJmkP7QCW73QksiPYcwWaDAZeTp58p1uSoPPMmnyPy5Mkq9RiZ",
  "key16": "3aqchc8SrVxdgAFWTcHHb8RNaZvsBpzrUsmPt9wLokbp1cpnjU2Yp17RsqWwvUYAFAsPNAXEY6psMvdcZ6W2thea",
  "key17": "22Yvxu5yKJAgvfxTDx9AMHESUKFd7L4FVgCfjVM8Z1pHmV4T5BaRCp5XJVieLLuicBFspSk1Dt7AKuuXzxKFPhFt",
  "key18": "3BXofe1HV7RsFo7tEU4x18JN4NeKfUZzw1jwUojFs7DYYFfDA6XWpPnNDrxYHmrwmGkTpDV7JX9depMznUKkcUJd",
  "key19": "334kUVF131VbzGhimqPmxw7Pu8qpj3dvPxnYEdM9mNW8GThS5xSSwD5bgtKvkEsSQ33v8BPrUYNzn95woUokm3tP",
  "key20": "55q8kQnRJkVGAWLPuwpgStFhfMyCgAGyJYjC1HxVdNoGVecMhxR4sP1GiZtSmzJpm9DdQRgNisyMWkL57URSCdzV",
  "key21": "3ictUZurbytJfDbW8teMvJnTK6yg4NzLvC1VZQrHmeZxJGRruhmCbLwGwxXr1LHQiQGsbuP5SRn34QcQeGw7sSdr",
  "key22": "56nQwxMQVwf3pgW3zrCcK3naxRKJyEHkQV6o8EUfRpdP4SMRTkxVL7zTiv3qArgAvdxG3buBb8yhaU59YaVDRAGe",
  "key23": "3ZE7rLtPbSGPfSvkXrCynLFHMKNiEMAcMBbnUZMmd8nVB7GwaefjpwQD5pDE5gCs7xWAS6GKJhf4oyDgUYSaVbqu",
  "key24": "5CDFeVd6XpdkqXwaF7TVumxHhBSdn4FPXhQgZWnFTkC7AMDLrJFX8PeswekrEUxgRcF1bBuNK8G1ZrgrLk5AhMcw",
  "key25": "5xa5DP2VCtdMX74howg8eJakdorMDQanDct4nUcRi116Nt97vQthA1qAhku4MU3d3g47PqQuEYFBVWzNnjZkc3Yx",
  "key26": "3c5qKaDvun7ikxCuKENQPtPJhDqCwZf3316J8obQZu1g5bbhfC9Lsy2UkazUxYHpRgJFHWYEPaWsqpuvG64E8wLe",
  "key27": "3pvFSbMtSrwsb2AaycppeTcsbceK3nkVRtyKz3Xr4vaTDYoy2oEYXPsmwcyeVFrLeg17xYiZjHyfpWEbsx4o4cSS",
  "key28": "2dNUKPMdJEUdXRg3XswpaVvUJD5Mv93ZPdcjwpkU8x82RReRERQ3GNeVwFbijMxohnkjzh4VzBXaLZupkFkRDG5q",
  "key29": "5cEfRQAqzq5KukAoA6GrsTVrjxFTVCY38NWWtaLKKVNNR2r6qkw4RBBvdy8Y5GPPPmSThf126ohBx4sFt12ay8mg",
  "key30": "zncdLpLRwYL9uNs1Sro8XEcCJrHrrNNJRBMjJ313VKoHkmGgvCciB8mSHWKEdDKABSZanuSHAkXm2wLVa1Gpr8g",
  "key31": "21meUfAFCXqEeWV1TtGF5sBf38hyfvpn46z5r5TQtUjHFnMFL3LAwDqiYdoTYiuf75AoKzZAm2aJuWnPPPs1gc2h",
  "key32": "4KKti7YZ5GhpWbk3TS1CkmNRRvXhnoLyuj613GxLYbaa5FpVgbE3b7ZBdGnXc7mS9beLXgkw4ro2MqVHfXipRhi1",
  "key33": "5ccUbQ1iy4wn8PikTeTGkDPwPxQzHUJCGVrYTDthCZ5NuUkoaHMydgdoHibVBBJJXqLyXjVXTg5YKC9PGtX3Nfnq"
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
