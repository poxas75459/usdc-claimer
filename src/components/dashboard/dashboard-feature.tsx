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
    "qQ49Mc3txcn2eT5BJjvMTYveT3d1k42iUcwNFxfPWoW9HYWX5WLRCaskrGQhf5Zm66SZi1BbrnaERhrkA6DHi5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AYdpFh8UGPiENDotpRxviZSUDGBWeiq2ToeWgASsQ7c3J8H9heda7AB1thKHbj7p1ir4VLnjXFF7PUJvB3xGh5C",
  "key1": "pQNrwbP8hha9h1rM8e9odQsDWKMUJDwTAep5JqMgJzpjcCG8FWWiaX3djKn4jEzqJU22mzcEvCQeNkSuvJNd82V",
  "key2": "8aM6YRCrwtxAvJeEaWqBkZGKmiGdztPiYPEgbwpKVibUrSufbBa8hZLZ8c51kdpD9CAE1mpeSDbnZ1GXA4q9mkw",
  "key3": "2PqinzrwucY5jwQZSZueNuYBkVtghB16gqawzBaCuJeGFo3X5FS6F86hxUJmKtPkAKBBWHhHdjgmc65BP7tub2TR",
  "key4": "qyoD2mbtp9QTMFnkxrB2iWNqEDzDouXnej6ptugv6Vo6396JneGQ8NPTv7gBVXQuJDDpwBoNnpnCxxsbFgKu1eq",
  "key5": "65eANyGMay1YWsvSaMdSsSsMZFesGDzT7CenCX551rT8Nfmwg97tXmS2TGpeVR3BG1NWSJ8xhCRcnC3rksnywZmD",
  "key6": "2fA6tpu3HVgd8rg3H6szNweYAtk6EZdcCVUaQ5Sgofzr8xSaUzCU6SnCYrZ5E4o7m1rtzv4tNXpdaDYPVmjWvWhS",
  "key7": "5peYKJXUn7LobhCZB4fcsHuHad5xXQtoiHs44p1CRpaXKbaRsGA136XgJQeZKYZbRVPJpdgwMFyJqexAVRFaxK4q",
  "key8": "3RHDqwq2x5Y2FFcPiZSZtHqQj5tfqtnj3tDUmg8n14oywyFEbESMK323H3cYvT82vZnGe5PiyPkoBDz2rhHWSya2",
  "key9": "3nNtSgzMJ99Yb2hxhxma3TqBpctQiHj8qc4428o7Apqx3EDDfjNr69n6ghaDwWbhuastqq5P8Wmcr8a2Emc985m1",
  "key10": "49oa6hCPP8CzMfZ1EfcHphtyVUFW6Asgrn6pLYAon6CD8o57XjroNbRYMKXQh3iTVPzPTPFowgEnDKQJVEKHZBdE",
  "key11": "67RHksVesbsTYsTaJdy1Q557G78zqvWHJ5vHKjF9Gg136S2WJ9XYFkigwSDF1T7z3zWKWY7Yyr5Rnya7NFzGUh3L",
  "key12": "2nzfvsqdntCSHMh4c9DGDrWvAAuFaK1tYe6qrAumSSpHX6mCx6N8rtZAcLbx9Eism9TDi9rw5jWQHBN6coQsdzzP",
  "key13": "2FQc6WoztDRNH8P3177HChbH2xMGipf4KyiBqpnzrT4RT3111StigcHFzQU2D2gr5KGRJponaSgduM36DXMm2ZdR",
  "key14": "4F7ndka5UTGRGDX4qaQaMA2fhJFNuRvEggwaH5vME9o1zm5GfofunyjnmKEzyBJ6zfXS8QfCL7rcwU8t43VEnXc9",
  "key15": "3JHswK9BQvVQB47RLUZuE7urZFtQKK6u9qsuBtHnNzxzQQZumsSyr2K2LJvCNqVsg63Vws7vePizFrDC3KTobSAZ",
  "key16": "3WqJ35KgWpVxVAiuHaSgv6MUtJZEqRoz8jG2Tw1Wg45aeWL7xRKXBND53zWR4T6A8rwbbtKpA7pV5B4XWa8xoKyn",
  "key17": "48pkb8hAehzH3sQKY2hvLtN5vsa6oBbHg9yChgcrUYWHuAq3sKY9CmaopaJZMLw6ACfN8tj94Fbwkbin9cfNKCyB",
  "key18": "4pzydZ6kf1yocg5pNZMwFuAiLDeVVsrCF4ikefLCrAKrYNanFi1hMCUmeD15D843JQWd3osAApJMPakVgNKELrox",
  "key19": "22hX6f1Pftq1cLgHk4TfNL6o4M1zBEkstQ1iRqX3MVxQasoX5e2F8TjoFwojt8z6Q3CqyaomHrckWe7Q8B6k2Jca",
  "key20": "4mTGjnbjdnxgygnP2eSNuMUctVtU1NCrBFQUyXazBxUUM2Z7V6YGbkURtRCtXgL44rgeMbErgvRAiJpszQ8b1xsW",
  "key21": "3oKSd9JVhbUhTzLEnNZB2tEsrE1Hu4Vx78rQGbJsH1nLAwLko1RH2ecn2r5JyzsB3xWgtLEzEsyvN1j4X5JpAzuj",
  "key22": "3THSnN8vxwEHbtKzvbucQzpELKBjXiEMYuogS8iGKmM7VtsJaTT5i5ot54zeHR1cwiRVPSKEtRjfcRrmJESSexNB",
  "key23": "29YS2HmwQRyFdMTwjGkzvP653BjwK3g1VKrCWDNRYZMmEE8epiQaQBsz3ianVF7B6KcumwmZnXANWJ3urDnFXzht",
  "key24": "27b2v8dgE7KsuyZJWPunheksvZAVXubVwt7Uti2C9L6JNDLWNJjWKKNDp9DHHAi46tNb6emkQMUkm5KTt5izT7he",
  "key25": "KiAyemGXohL6w66fnyyVxZ9v6Cj8iUANZjdxiuqdetT61udzPJgvZeUDdhquVzqAspyagZgS6mGW8Qt4KFjx4Nf",
  "key26": "5i4rui2degoWfZpJYPinyJ68ysnruSGFFhvRUmkU9XPnokuPcnq3HdG21m6reUWZJs2veajiNhEjS5LmUSDbjXjD",
  "key27": "5bNnzixJAHkwYatXFWBKDsDhxdJmY2WPEWBBNrMxgxK33AqrECkyKbQDFnHpJ6Z9M61QNKQYfXeuqUvoEXwPWTPP"
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
