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
    "5ZkdYUFdPs723Hyx3A8xQndBhh5q4FdzARzG3my2njmTQSuPke3n44wh14acjE6ATQAFuiidx3pHYipbcV1FvGpj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z5nxV6ymqmUwS3hANAQueKYkGebZ3df551v4GTrdRBu6t5jzr14SARCfdaeGtUZaWFKFvtrXbwfrxs9zXty7y5x",
  "key1": "4gcPnnUL89RMK4tqaY8iSmPv7RzMrYNgggkJ4diWHjtXaR1bopwef3xHbrvHNwp4aMLXfDfpmXokXWxcXnsnqWWQ",
  "key2": "2iuKTrCKWaQpSyoXvcET2ZE9vTuFpoMLF7zZQpZJVCe1JnrsgZYKakqPVutrwDNUDeLatP1EWihcD9fQ7xABVjdK",
  "key3": "2TPcfd6JjjNfjiaeF279ok56aD5UyyDiXXLU7ahgFuCwLBteQ4E2zWzKGDABb22EVCXz5uAFfFB9cg7b9ch7uXdA",
  "key4": "GzAqugUTfsdVbgkZkGokEhGkLAu997Y98yd2JRaVEvcb5pFWxhfM4ye6RCvr37QCzKyijL348FZcyN5c5ekAeiq",
  "key5": "3hCoFPwGxSH7xsNi4ps5cuJZMPkt3h2zUhzU35GDg79r75JEc9eNWddjbavg2afSs6u5pKjmysrgZUkA6vAX4dtz",
  "key6": "5doetefHypJiJde86nABUvSUK2hQMV6ccFsAgai9KLfPSqjbfkcStA1bhFRz1e7crupFiTaNpCftNwU93pgxzPSP",
  "key7": "3hyhjuE1afx4EUgi2vQwm4UpCNx6E93dgnsYfQoaA5LCSBWJ1KsPRSJbeVy8EE4CLz2nYruAwJebBSBXUvA6dvMc",
  "key8": "4ExK76sQ22f3wAqvuE2sf52zwEEcUGBc3RypY5rZfyS2xa6PNXZcMbyAxuuzVtFMvuBsqCj4vtVhjP3RsiXQAq8G",
  "key9": "5FETfBaWnM6SAkYwJ2tyJi353PpXqNo76GyCAnyvFg2ySf5hYxvdfhS7xunyLPUuPRnanwgBx541zrVbeVrPwEaK",
  "key10": "22RT4sjuPy84J2uaDKBRHjRCvcUnPpRBWBjeTXaSJSc1YknseuPwdD9YJv6e5Z984cEFQkDhTpViUvptbAt3Ten6",
  "key11": "5ojWuGupo8Cq68d87rgbz7L4AFdozfWCt5ife82soxYuf7pNp9ia4DmCxg21bZPAEV6phR8a1PDFmpTTQgMzyk3J",
  "key12": "32R12mUgcUYCLd53notXskX9QS82imXZ9cZXjk9rXKSkMpXzGf3Q3oYcoWxjiLUdqdNYTHgaB4erv45XUmo1QMvw",
  "key13": "3SDJ3qKzaMgLVaJodYwM3Z7LtDkPHEnuPwDQ2qoGLrHBCK5vfs5wPHygkSPkcALaiVevXE6yUPi6HQJYd72RZeHw",
  "key14": "4VJ7eFBuB1rjzjduCi8a8LKpqQ5mzifSuC6tVoEPEo9ap3wiMKkES7J7k2oRsGTGS9MXwmv3vuZaFMQHsnFcGi6S",
  "key15": "vg9tLBuwSHyqyd9LGQhXmmTjHrC5uxXrfwKK8DXCxgrx5HKDN71zZj97W6e8G3XtEt4GZnsrqbBeiuXLDVmowFZ",
  "key16": "2cngFD6jG1hB5myDE5Pt5jH1YuMAVVNoywJuSYcr5SiajZCWjYU2wrfNKjUj7A5qS96ryR5MFMoH9RpeZ2cBHARW",
  "key17": "1u4Gr8obZHqyXYxNeAE1Qji1gq6n3bAtvdD61fEcDr5i44vjSZzC7v8QayRfq99hANm33KX74GLZWmrS3EYwjjc",
  "key18": "4Et1e4EfCXKWb6ixSXqht9EMA4eaZzAfrzfH8FBzFWNYckbTW6Yw2eAuQPiG7dvXR4FEoxrjeWbu75RHVxiRLc71",
  "key19": "5exL3ts4YsQgcGr9if2R3wb7k3Vsbuy6QVBuJKnHJkoz1g5x8LHCRNVLrMpYWkAjtjm6wGvBhm92LNXgunGmowzF",
  "key20": "3BYAqdsgdTzzY791tjCZ9PMUB1ofxiRorQzwBA9XEeQj8skoWJnZ5ng3haNFgZTzPxZaGtrRHXqEzMi2oXirbngS",
  "key21": "67Zrpu24XfrJ9uAmzyZreb1Kpcu7d2zpj3PfYEfMmpqZR4zCBFEfVHL1ViFmm1sqP3WjD7LMsMjigoyAEaU6gooL",
  "key22": "7DK9tSQRCSpt1gXQVrRDAJwKdSUX3KYjpFGaGZNYQtFmgkfurLKEHCGNhVgvMVbFrVZaSePEoLeWWbcECNsDAxW",
  "key23": "4PeBUxahv9ZgkEizVwn9DVcLndPyeLHJvdZX2RApSKvCx12eyc8M4Zb4RnA3r3r2XAUb7SvUSmunk26ifd7rUrUo",
  "key24": "4SsWg3WvVm1mDWD24AVLKvwLePzLG57okTcmhjk8xT9UnNocg1iWRdRD6YioiQFBLxnHEa3uZxQwcQhXZM63nbZu",
  "key25": "45j8EgaJP5tpH8hnJS7Ybuj4bjrUss6zCg1YsVjXAr4FvGKX4Svn9UADeYo9wVMe1VAD5KVS1Qk1FVD5kPtcFNpH",
  "key26": "37QsTQCkvFYT2Momaip3g7Mo32ygxrkDvCYsshAhsbqrFYJxSFL24XwpCEpRDBa6hpt2LzeS4FtYPv1kTzbhsdtk",
  "key27": "3Qsp8UpuVJ3ky2by7RizCQdJ6uzW33PuXG3tGENzrCD7uaz5RQJEZRz1aqiW5KMHri8n82CRsDu1H9E32YmEJemt",
  "key28": "29SAtHmQa5rAGZeaCobQ1Fvhfp7tNHUwYW23Di3XEEDCezxMpRkxtNmbyMdhEkMC2MGM3JkmScEQx25NwscnZSLh",
  "key29": "5WBin66xY2PeWSdhr5UWFd5MvAS7bxsGuvhYAhUyRrqTqJwAbKSiA2RuniQ8v2gnrJmHtdgu49ScTCf1ty9Q2P3i",
  "key30": "2t64uqpNk4VxY4JgenHZLDHRJTJp4EFovygMyR51fqJnK4Lp4aNHjHaaSC7kkC7GG8MM1JAUP1LjVrYZxXLWxtQy",
  "key31": "4VV6Dj9cWShyNPRHYZnLVEGqWDpzoj9EXe6bSF6UXiiNuhM83nfTQPdsK7TMQuzsuzJ9jSbe5HDApBULu7sgfsuc",
  "key32": "TWPsfDM6nQm1rf3z7Ua6FKdwQRUunbuVHV8mFbHEHRrruH121uyKt49TN9CY4mLqtKxct5cfB7nqGQsjs1dh5eT"
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
