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
    "u4VggEPtJZ63yiXfkm6X7yv9iC5uCNiWgPfNuZJjTBxSLGq3ZzPYSr7g6Qz1ej6moVkaH48dgvbLpwBZzEvTZ3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nDcX5VLqWgrZcLJz3ium1q11rjTehsyP4cQdeXkZeULWovexRFPBsWFK2BjMAgN58GFzGwUhjpvTPWxR3Lq3reA",
  "key1": "44WeCWEaKXNuMs3tpRZ7cXRBjaETdQq4z7po7eFoDvsFttWpyj3icuMZg1kus7sm3xxmnrSAj8gM2i5qDLB3URfY",
  "key2": "nF8RtKW5oUM9pLCMgjS1vBoBqzz7UL7uDdAYERSnMU2D8FiDbvz5PkMA8rEp1br9r5GD2DppYtoJSGa5pyEQZbW",
  "key3": "63Zc8xjuSmYhFQbMT3YQMvDC7uWFEp1sHtSapcNaAoxoXEVJTtRr5VaLGc3963x7hNY3wTptK8h5ej2V6Br2QBxi",
  "key4": "3C5yo98E8119acfGU8zXd1ygRbkgzWanr5ZucdBfcAfSJAPVyrGSU3QoYeTcfNCfHaHRgBZxnZZFVBT8zJdJwDta",
  "key5": "5vnh24gzf6DT1iZhjz1cGWhYbCNwKAVrA5oMyGtfUdYt44Q83HBQSWbi1Di35Tbx4qUrRjvZuJpmscFecnxt5iAD",
  "key6": "47SoK8TNEogPeRaBc3AGgVH4rgny3LoGKqnev58zbp4ftJ6CBM9vTuQ4z7DDwpRAQcepQ7uk6r2VQWzkhjEhCsV9",
  "key7": "QUJPWu2q4jQ8kWv9Me434HVsTEckm5tsKr4gS9pK3u3KusiRbE3NRChjMq2DAFuT3R1g8gX6JAeiEPN1VDr4R5j",
  "key8": "3WSoCYixduQQMGcAmy1GmLBFqP3iaASZ7pLdHGioXWQfkpSiM3qhhpAn6oXRh9YND15xNYQBQiagavw6AF8UNzN",
  "key9": "az3NsSXZx4Dwt4DYH617Pmztn53awqWHg7exv6iaoteNaKEm9SMBMLkxxnE5ZNDpgHr78PsuS9kk2e4S2nxvezu",
  "key10": "XkoEXZrzFxyRxeGawfjdrUdkh635FTVpdGwnaAmPrReUpc4rn3xiFzAR5misaA2ZZhx5k5x1K8Mex8Rp1MEnv6d",
  "key11": "5VqeUm5LPepjrV2BZimGeUQ6J2ptibnXvViVirRQz8cYsmjdx1Xd45pF3AEkgfNfQ93Bo5XpKfN9e5NQc9WMgdy1",
  "key12": "3SkqY7djdDnvqLUqFqKH5XzyFy7P9jcKw8RwxxaFZB7fW4Ho9vKurajpWjeiwv6UysY5YrgdRFin2Qva2MmaRqQk",
  "key13": "2C6sx7iqQR1HLtsJ47iTHGoapErHw5JqNhc1uJd4XGDzgnVKxu4dXR5EGxnRj3gH5DhHEk7B7nsQ65FPrar1FW4a",
  "key14": "5vk5dApnZxHdZRfnrfdqezXo8hZxaQndDgkwbcdVW234rj79Qy8hd21KY7gt3dtGBiJtiLRL9bjUMZtPXYMT3Mqe",
  "key15": "2dWEADNWMA3D5wAd7i5S1Na8ooD6amiBtnM2U2YNhPh7kE7WfFDvKjFG6gLDFPagAxVmMVPuohrCqFDX9YVZpG9h",
  "key16": "5bytr6tVcvYKRfZ5NWAV6Q4aM3SMsLKktCDNQaLWCHv3rdUNRDvzKbEyt96XZGZrXXnc8x7YTySizL5n7sv2GNx4",
  "key17": "5xL4ipobrtE2cJaAV69MXg7nrpYSDfhUoim6hW8yZrNq9MZJV6TwLMC2HMpLfxW153YaJjHgWYbheGqCcVnxNejj",
  "key18": "4WLdrRg9KvnUp14AoFPpFJgkszp6To2s44ixK23NfhA1AHJgBwhqqdPFxeUX4FC7gaHSqPvQjHjsJQPzxzxLLKe3",
  "key19": "4CwuU4siXcaScGBMwHG4gSWEFh3WdbgAJrpDFcUm2FeYEo5uHEJvosYr5L36aQSPge8DZWbwXxEizZvJ2FFj6FLW",
  "key20": "4qdBcjguyorrwTa6sdm2o7ZJ1YfH87km1BmQ5FfSWgAX7m3dAKjzYrvoEpSmDmYU4dKGU3WCgkxZLHLvgavE4yhp",
  "key21": "4P1xKbZRTiKE6oRYzP8pLU4jZevALCjGcQx3vkqHmbBikmxx2RGecDGq9VxhMnE2M7xpYKTzmzZzyyYMNd8FjDJY",
  "key22": "3F46NkMFqerKEAo9secUZsvCGHrgyYA98kNmz2Zg6K4GP9JXuUtGa9U2R3ncCbeW5UF9BQCnH4qYaj1s4Wb67MZb",
  "key23": "2g1EqEfGCGcwoLj4qsWkqejaGrQ8xnPsbtjbxahSa1rsGYw7x9sRreZzjeZNvyn9vHNZEBxiaWuNom5REtD1KX9M",
  "key24": "5KoxkXRQ9uLoryse1hZD9mFdegLu2pSvHFM7vfYd323sPASRX5py5doRWVhQoZiKrX1oc5UD1WsyfyxA4gwuiPpa",
  "key25": "6YsDLFkYJPV27TEynGNTeY3V1EuM5osmnuYQw1SSEY5yPEqHrwFkSret5Ruuz6dvcnK7RcCrUV8bZNf77zcGW3x",
  "key26": "3HhhaQTrdfntbosAm4bWBovfNWczxX7ojnAUeRxZzFFFN8n5uA79QtTwqEj5uJ6PersC49ikPZsuKtgQz6UAZsZ3",
  "key27": "4gAgeEG7pGwaZHrt7VjM3qaddoaM9z3PV1Nm9vh5TCqDbhjUwjoZFoJsnvVhQYVJBVQSTkQMf2mJPWwGYkGuM4b7",
  "key28": "3TZC7eUNjcKPfQGAyXX5Xwaa5ATZs4ayXfg5d5M4LkZSZfb77cX3NBSmXb7yx1tM18ggsGBC8haMYieQihFEYnNu",
  "key29": "3tSR5hyvN7KHKxnnhbgaLKeainrPvJFP19KuSTQMVxFSaFagjP7ucP9MtLCJBNqUFoQAcArVnbfUQFJbUUnxMuKx",
  "key30": "4o8bSSh5QsBKP1zkYWRLsJDa2SibVpoAZh4WYC1Bmm1ZyeTR441F3aFytfbz7jNzggffqtEkUP6VCYFz1BNqhaA9"
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
