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
    "4LT4ma68CNZ7uCMpqGegzFfzWpCJEBTvV1QfdBhaNEfjycHJ26eVTLCH9HzVh6ffhjMeic5rxDLM9y5t8jNyECh8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KC8rJRSxnXVTcRQCuxSJsGif8SZWcUFPoeTQe5YzAEPCbR4zXJ4CVVRf7kXjH2sZ7DjJbJy4ETqpbzJcnaN58sy",
  "key1": "3RiZ3Zr65qUJfS8uRdnymhjPTBB6jegRwBLv1KEEkzGLJBHiAo3EaXSfR8koy4gmxiCBwMwBEQFVfcmPQmP1PwiJ",
  "key2": "5Y3SEu79HpEB8MCm8MkRxnVaQef2E2ZbpgQ1DLBrNc73mST5EdsUkYcn6hP8TX7NVK3hPzerXELvCysQmps843TG",
  "key3": "3vnuP7pQdZakVLQN4WypEwzy2n69edy2i4dAP69RRLcJCrr4FxoYktSGU2RHih8vwxYL816gAErZ4CfxHNMtUXXQ",
  "key4": "2azsLoqs651BfdTDjF8esJmaZTCBteQbMEtbGyA7Yn73xnR5XYHmVR8jRGcrQahcxGj4zm9JJtcdi1aYFvoyFXXD",
  "key5": "66prVMtu1zHP2SrUxCW3JyEEYiWspiERUrR8eqxRrfynYhQCtZRVxwBuY8W8LBe9e8rJpzbkFoYD2BHHydC1anRT",
  "key6": "48zNDxWyExnrmq9gGWvWe1UtxTcfra4kbbaChC5kcXM8HbZa66WQwS7QCyWG298q89ikrvca9QhtXULYMs8zrTct",
  "key7": "5hYJihLZ2n2Bzj8vMUKBRDVMRnFBPY8bzCLQaw8tFd2ead6WivZGeMa6qdfM8Uvv8otZBxSwpS5etQufdKfdrH8J",
  "key8": "2jW4RHcH94HRxcz5KsyweGawcCGpZAZnsauf7vV5Nj17HoATGpd9o9rsKzQNdviibARn5MiykyL331JR2Ksr7jka",
  "key9": "3jJQoDJbWjQHkxrSADpDSbwrJFVCCNwswVu8QZoXJEGrRk7AbNvRtUcyExi9EV4xkuYKpaZCEuSaebePWfEWhi8H",
  "key10": "rCh3DMvsiyHSZnnCtsta6NCAxJPUmnTDM8nMgBPQ7XCZQeT73qQzj4VwAqqtPFBSqzc2syo7EtPYEDLAio1r9Ng",
  "key11": "3kRBwg9XyKnrTwVoK9nwm9X98nNpzpmrnn5LLbXGpk3RCukfkjKYPk3sCcf2htxPvBC7Q7qvfBDcBrHKUt2zxAg8",
  "key12": "29Jc4PiSGkzJALchvxhnaW4WvPscxKyGFhrQnqsqv1euYixvtQstg1pyZR4s4XWcz5udD5zXwxdhzaXUwa882Fqn",
  "key13": "4kxdRL1A7jXCMitiUxreKCqxFWW6VjwdCe9qA9SqhNLJQaG1Va2yZQZYZbVLYKaFm1F4KQ9oFDRSP2HaAb5pK6nw",
  "key14": "zBSZS7hdaqBk8x8PMTZn67TsmaBFuzsYQw4a3VJHo1qrdn4NoSxNPc8kTnK1gyHsLt15BhKpuhsXjsrMpGaCatq",
  "key15": "2jNQdvLgT11RUZ4S21WhNNnNn2J6VxLyttXoNpmA2Fv1tr84ftWB2N5dtoSkgDKt4bQ4KLxToiPixxfkvX3cURqe",
  "key16": "w1oYHcPfLQpgxDnGXHYg2WF1GGYtirE74JsUAoQySG8MXaXEsXfRkKuiSE5MRmEurkthiTrxrVoXBNhx7uoLcV9",
  "key17": "2xYC2guM8oNo1ep7rgY19tJbm31RcCerMVDysHAbnNhicCPStsCLMjTe6S3fix1tfagfTbeHLDhsC6xbPisEBYxz",
  "key18": "5Qfgj8sAeFhKuYpjXGCAb5TTsJ61Y5s3aCr3FZ5V1AcLpY4ftcE6yXFwVP9YfUkAnYb7AkyvXYBAqECDuoYpiS71",
  "key19": "5cr1fsWNKEfX2aJy8JkgCpeuGuciD6CM2CC1RX4MjGL5EoTqD1aD4EwH89utrmPiCG3VbiB7bFZf4CwXaeeXrXD9",
  "key20": "4jejQjse6nkDYxjRptQZNXZF3nRJNLbA5rrZHWHbtsB9bFbGS1dt55SxhmHNtC8wYe2P2F6z6oJHS7nrMm7XaT6E",
  "key21": "4NtrxigeYotTKsWA7rUMuxzRDqxZndJJpukEgscSmUufsU3JfwAuy6pywh7F3B4gGmHPR83b6NQM2agx7ey3CKL9",
  "key22": "49fhSQnphT9Pi8fG9vBgX7oT51NL5CXyEjjs1tteJokbFDNBjg2UQvZZrHXKVGVTvhuJUL3xSMv3f6zEU7q1YZPb",
  "key23": "2sEcqwFbmiURxgVx6ytC6sDjpYTREg12CoaJKzz9iyvTD2u5r4Bc2a2eWXHnVfePEE75iab1VbY3np2BSdyj8uwM",
  "key24": "41gk8r3sEXvyxPcy1CEXLkswhr23mm29uGpfZGkZrfDMzAmTxb5aeBkaeiegFWbhMqZtF16SEEP3zmeXnbqRXhG",
  "key25": "5YYsV4csTnsb4bdEUfwNagrcW399cxcVAmPnE8zKREUcgBNrr3UPCvvfdTuD4eiKCjcaDUHeWnTVwW4WgJHykJRz",
  "key26": "3fsBvGCz1He8hBhmq2TycG8hCJs1fTKWYMHsTnbnp2DMaJiuF6Ca7uz4vNxcrQZPj6pJkprYqf2CunwScbCSVtnH",
  "key27": "3MdQNTApz3UbqA38wU6oZD4DAFrwW5YetPdXg89EE4WU8PtMnkAgnxpMvTV9ZCMnSXcVYVFdBz4EXRMFXig6x54j",
  "key28": "5saHot7PWWFZV4dvYwmH5Cz9QxpPnbCHxkmhWmQD2Qi2bRcmywRQcsbDWB2XQu78qUeUdyBhiiD3CydpdF4x8T75",
  "key29": "5wzPJ85qajaS6uNgdraWfvPqKi13GFoWeEjpWd7gyc29WtbGu2qDcGENCFDSQdRvVtrtpbQg9qFidqoXEHA8TqCV",
  "key30": "c8E3BzpD5Zq818ngnVzRnAJjqJkTJ4Ft3NxCcAUjhwWu8BgKEhWRGuRsj1CRoGVhwxppYA95XaHw1cZjrGjUe33",
  "key31": "2zSTrknMGCC9ZaPYquZgcVcmr9n497kGYxbqy88Dm9D6vQ2nM6qCBYZNyYXWQyJ9EB2EjHToWVPVeDNdTBWoVuPL",
  "key32": "4SH4CZbBbvrTkwWv1p7Zu8AAoiaThN9AVqb6tyMFXg2dN9dvm8mSnvaWscdmXcDG57XAEJfXcECxusucfg4VnCex",
  "key33": "5ULMQmNYZDhNnrJRjwgj73bWQqRH2Y5hhh4Ay5YFWrVKb5b4Y1rJ6u8MULtZTxzAcs2iDukEdqxYzH9rHxbmHtTw"
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
