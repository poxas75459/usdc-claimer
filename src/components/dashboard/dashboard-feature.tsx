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
    "5hcff3SfaGC5EV2YxFqzjpwGDqHevgLW8jmxviFW2S4REfiRqCJCjRAc8wwexrjjFuiF2eMtV1pvTVyPFCEX76Rg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oKc1sQQwJqKAT4hkNHJ5AfJkFnXrKDaTLE2qDxN7mopV8PvfFXA9CURoKVkYzEgftG3GL8hU1wef3nkKJkmD5J",
  "key1": "5jribALotMK7pm5PeHCp6pJPFZHSAJf9UpssEVY5A6U3CcmTZf5DrgsfhFLUnUTkfXGxsSAHTNBus96r8xFB5Auf",
  "key2": "4neALDgsRauunadzMkaTGsCWtCKvRudNqZsXvnkkuGyjKRmM8APhRBeYPRRPwroUb1YxT2ypuqSzqWPY7jxeb44E",
  "key3": "xHLPpjxKyk8GDLLCrj7R59dB3ZSxjYHkBMz75p93fLajeGdPQDaayPqVsBiCyX9vEdobDkkzBJE5rfzwoByhpU5",
  "key4": "2ya4aCYeZKR8JmZdWykhEfsKzU6VfFcfS8rUKSMkzTpVUt7PSU1NYkCdZGJMp4MuQNTNyNpxxdFddmdvuFZL6xfe",
  "key5": "4vHXN6KuSea5Np8kbBmh6tFYKzvFvFyLpxvANiKrduX2kFN8Q5QDpgeyaoRYMybhXqNHbofDkDu52pxJCRi6pJkm",
  "key6": "2tHdeMkT6W9zT8fNkTS7vSKVhgkYo5gJRri8vGuuKcoNg3wfDfCtcV2c1AMhXoqNoYtAakVjwbBp8rJEUHigg1SE",
  "key7": "5wg8y8daygj9N1QNH6dw1PUmy59g3prnFZ55ysMuqshtSh6abFudCVTyVfbq6dNJbUY5dmjtR8879zKyewAEqbKh",
  "key8": "4a7zLVr3qAve5zxwPaKgSpMqBaq81jTLCctnGTZjJfyr9ngxc3pGSyWt4oq5a1JgpeZUZo2SDCLQj631DXS74ZnV",
  "key9": "3su8Zgov2mhG758inM7VHzPJnFWJddVUdJGf2Wxkd5GtBft2uJVPVSN44h5rSLdMFbG9WUUJzs34XQdNxoGUvUb7",
  "key10": "eBi3iFBrjQRUB9W5tHdzsyNRvCaQhQxk3qis8PfRez1J2CNBjyDe88JLbTJotDFVD6UuTChPps7rCEAZpUMpfih",
  "key11": "5xm7VW8T18vYvdqcXFWW8EPTyYqng6Yu4ZAne1o7dWhtkPAj4NsFCAuPcB5dv9tRN2QNh9cUK96f6Tupn82uXhHF",
  "key12": "57R9A1MaBez6PaNMyY6z7cuLnFAH2yuX2ovr6voJejmTjjTG9Q4EtwBQtA1riwu6wEL6DjzfCybeUs4S4JAtLzNj",
  "key13": "4CGN7N8cqayWKrE2yW4bRYzbcEEAM8u73Nkv9QvXrhtPAKRgRaBMgBa4eQrybQ8p4t7JusT2F9rfVaSW41DRvqQd",
  "key14": "3qFqPqF5Ngp1UoQyvygV2bXrpbzpGLuVbncZh1VzbW5HgCgCxbjVAWrzsLPr2XRwyXRpiYBSpmMJQduZFvieiX6C",
  "key15": "3cWGAP8rW3LFs5rDRQEgDBeuwmPMcWUPH1fP1HHoy7vNziSUjwsBiQNMQGV3UybRMXqSuhe7u54JejUYNoLaW5pH",
  "key16": "5dfirXLyzV9jQz7QZNf1sxhBpm9h8ofXR8h8aFkbm52KuDLHsMSr332oYFsDvEEJ5Rpz6Hk8QwUeqxUUsNJKSaJq",
  "key17": "2CxSUBc6JoPuqPuW8iScFDyqUMDFVgjSaWxpRegpzSaM9UAzf9XqYNFgAyAvoQDLQXRWpH5pEYrbdK4iNyyHoja2",
  "key18": "33HH7ESBfyFq7QHp7RVu4B6rX3cBP8cBW6eb9BLQ3PTmMnnxgs2RtGKYg7VywVyxpYnjbaQq7qHx6Sp6ZzeQdfVD",
  "key19": "4VWV2f1Lc7d1qhabssL3WuuaqNBtNsHdL2SFuJoSnzsJzukiPVi8xNGD8bxhFfaVdPfRTpBPVWpb3T59pQNNz9gy",
  "key20": "KTsX9YNcwmwH9yiungWk9NiQbcmwwJZuQ8PTyqZgskhY78xduAZcoA8dRT2o3MLCurUDrygjNe9umS8RLkGvQur",
  "key21": "45DnuiLUe5bDkWoexcqC3xvcCCQWpex4bjqJqMTmxKGjGqoBXM3QghJhkBXv2R9pdVmye3verz1P1gD5YrV9kbmD",
  "key22": "36HWL5dGicWgwgpq1LrcHWArQWBEYtr9D1UhmQ2CYz3j2o9PCwZQe9U5kp5nnM2YBY2NPqT3MESsgGQETE6jTNVU",
  "key23": "2Yeen4saQuiU3zmZkBR5MEixPfgZRfSS5H14VJWGsBCaZsLYzGQ9Dgnd1o7cq8LFkTk8yRuf4kYwjv3MW6GsK51L",
  "key24": "4p1q8hrfpzsARhR9ckKwexoZ6mut3uhdw7XtWfeLSMJdGW8TVnF8uXV24n8dgRLppooaNKeda1kcgAdPgWpQKBqo",
  "key25": "5kGGP9SdqKjztGUcEY2mckTQFwDVC4cVQbisMi3b4RGXBZi9brtxCWHBxb12nKme9GX6WnjFNL4fvFrgUu95hsXi",
  "key26": "3d2AW7rbPJvR4RCbZvxQUcc853Dgs4hnxf9B5JMuH9AQEkLeDmzCq5CamASNWPtCkBV6edb5NKVDkzBqLkeBVze",
  "key27": "aqmw4ZceDJC4otoqxKRozS5hdbSpGPPPM62KdUVUqPR4SjigiHzaQbEt8feJvWJ6p9qFbw2rnPXXHzSpC3SwWi2"
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
