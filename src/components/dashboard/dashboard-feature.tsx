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
    "3w7nBCPwuBUoUbKxMbRhapGrTPJV8zHcfxooiWUGzjVZGg2tadeDQta3WGWCyDGbeJCLUnz56SR8ggYw7hakZjfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KH3YRZga83HHH7CnBVJnoGLP9WUm8Y9s5yDYQvPDpn4qkGLMPBmsHRMkBpBr4yUdG4JFFm6D1QMyuxiNnSpMGqo",
  "key1": "3vZR4u6x798W1gL45herGAmhiau9LQ1xYKUeUKEhfVuqybGWidwsa5Lw8znQehJfXZ8rbgdYJ7TSUzNGpU9B29BN",
  "key2": "3TTsEqLTheuhcuUerDPXHAPgeD39xoxuBqfC5mHAtYQB5eCEdw8cqLUKT7ZLKEGaBYzNYmod4vwX6dW49vhXUC4a",
  "key3": "txcRxe5cQrHMT5ypBgAAwCGrjWEZWFPYRuVfYxA7qHDY6HLseHBkTSzrbmLwriW5s5KiksuBnDi43hsGadUewt5",
  "key4": "DzTAeNnX6b918T41T8KGTU3AT1zFJujs9ZfD56KVYMZaFfdVndHM4pU8vVChRKtvx3ajF55h7wGDxNK8BLZPiTD",
  "key5": "216G3zHcaQfXjVua6A17iQ4FZperkCzP4xjhXrDFTyaMYepS5RafGnGJqutXRZecSajB2s34yTue9fwWFVUzThAC",
  "key6": "29aqL9UxeccafRQKJ5GBGFwm4prCYW6bqBXXbVvnWuyPhvDEM1d32JsVSyGz3Ycmw7SsFu4j8vFdzEYkHW735Efi",
  "key7": "43UJWvt2jba6zwS2LXPMFJPMAjzeUqxRVitd7a46ZAMLH4qLccS2RUGJJmcGjarMp6eUg7Rad1Bto3P537BiVvr6",
  "key8": "2HbFPCbFokRvcz7sd3iFTvbbKkN3wxitbvXfvdi5G6LhiowkCoXvtxitP8HrPbTFfbjdyEtv41QT7YAUzfaZLQJU",
  "key9": "56H8zDmNWnoSjXtjxbrQXtjMLEBQKzgwct7fUENgMmQQpRFAYuKqSZCtkR4MQuqh8qQrcxMqcnT6fZJrGBZkJE7o",
  "key10": "rvWnEkk2yonyKp3SfbxB14M6EvSCGaC2Y99pWjxzjuoYK3rvmjJ75H81HQTtwmwWC61eG3J3jArRKdqeTv6gMd1",
  "key11": "4znfnqttW7KRD1qCaeSMNuKCHxXiDRYacA5fYVcrzosbzTZLGoXdTijt4gHt9mF1yeGzKwZP3earFFJi3juvnLZL",
  "key12": "4eVirdL7EUuAPaaGLc8Y8LNkyRmXKv1qwJAn1G4uXZE7nF9vQbhAzfZFBXd87RBLj7nHjbMYxs5funeoYp2LSfgW",
  "key13": "3GPhBb5QZna826TMTjxFUbXgKGQrnF9njw8sfFXoyW7VT7wTfCs1cAX2LAUoU295axGT3WeFvqLtpCfwRTnjBN4o",
  "key14": "3PutTECTtdi4HhgpcYZ4YKVdfKEju49WmKAyBJJufV9tX1HwoeNEaNSzPpmEk7jgPJkCpvD3TxZzmgNjRXS7hXbS",
  "key15": "o9xYMzJu7cVhi8RMvn4fPvGYAyTX5EzXa9X8xPC7DAofPoA7iXYdTDdNhyoVSWXL6XRoaBjGAV9Q88k8JJHjS5y",
  "key16": "3RdCbuFLBmo1ELUy9RRxVN6RL7xBsuCzMDRkJtqqZjsS85TCq9yhcz136bxjPaJd9DxJ4T83yrutwGTDccJXmYnR",
  "key17": "324gWrEeXFnxfTE3kF6nQ3ajsF8bsq4hoXUnggKFt1GY8YDYbga998FJH6JuxR2S5KqkMEHEwJCnoftsu34qguGk",
  "key18": "42JWm9SttY14n7YYZj1Kk8nedz25gzWLjuKzxSusbEfVNhMufXdC3whJthwxydjEsUyHY7bqBitidG5Ame3HrG9d",
  "key19": "4MeDy8A3AftnorD7PE6cf2b8xqjXsP2YQ5cPLKLT3iavNKnWsdtf2njzFLJztxqpKwVj36N9X5ayvasG5Skyn3nK",
  "key20": "6iTudCyMVxXjb6cNgBymJCCGWxXBXEu18t4bKh6aXMv5xHBfj4DaYHEgBohcjYsCkfM9QPYj9q9L1V4bqr7CoDM",
  "key21": "3VczY9XvixKZrWtqHBxoCidh7EVG79a2TNzZVNUWL6mYW2UXqansKz95FJjZfsjCAh8oiGn6uzfT8ZtJd48ZVkCH",
  "key22": "3op1KB43sVetutWHJ3AfH47dFHcCw5dH6dAxYwpFDUAy7R6B5zw9q34iTH2PbfxZm3Y3vGbC4RuBUqMwqxHQvZG",
  "key23": "4E8rP7fmJzc2EAz1pF3TvLfKodp9hGPnyBbxeLoFecVPAer5CWicy8RieckH9BF6FkZib5iewzJDewk52tq37tcA",
  "key24": "59uW1C2mwqeDqB7GioHMJP7e2NBRtg66GUHKRxxUiAeHTD8EiHMH5T1yGihkZm4N2W3u7a6pcDVDcPPDijwGEtgg",
  "key25": "5y6qU5Sq17CxdvRuhejwuw1RQyXeq62eybPFKpS6NDpggtKnqaoTtBD5pxX6HGDBtivwv3bSURchJYWPCtAUW2QU",
  "key26": "4ukiJPfw9W96Hr9ujQGUhGtSBAQti4dGqJjHjkk2ZCv8N7dVbvYk3xgTVoshX9B5zthhjbKR54P7KMbweGRgFHew",
  "key27": "2saTRpH2HwoUVF3W4GTYshoqPFMf1mHo5uz1BDbvgjZrYk6oL7uCs1tBZfyZpZCkFViCDGaRDHxc3kmeXtcyfbcW",
  "key28": "GD3DPibq8NhLWyHKRmbBLpYiN1wzy51BxV7LLoZ9p4skEv6hV6SpXeWshC7zuCKofCVhgymYGVdbWWBd13byvb7",
  "key29": "4f6ywy5ANMzXno9oT7tgACr9zY6bqmvnexgcacKjxyRgnpsiFRo1Au4Mf6jwY2oxw3AYvFdmUfAFFAY46HT9J1yH",
  "key30": "Rvfbj4x7TQBPRbRcadqGojEys4HQFGDJ1ewpFoUYHx4mCmLcezzcHNx7DrcmBGW5pRAv8VLa3ouva3ydQjNVQb1",
  "key31": "4fg32fhCnvzeaEsUmwR9vb9oJuDeDvX7bjagThWmW4TfPfhmGXGD4T7iAJuu2ig2cdCZ5sVpmL4Df2JpwkJ5dyzM"
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
