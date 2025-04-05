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
    "5GTsCuh458rL66VHZ9uVa5H7Y3hvBwDKnmGZbpvgpCYUcDFKGdVbP6ZLg7bq1d4KXHbMEzsvupxQzQHFo9jhTCA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J8Us28w6UwRiQn54NRaKZekrVv3yqUfNtwjPNXVypSpyUU8x8US8BBiwMyoBxRWdYqW8khmQzr6TmRP1eoBcNoE",
  "key1": "9MPiUydbpzpHa7Pw1CMBkxHnFgMN9Y7SPvuxyoFBesSemYZU7pcrXR2FsDT7RsQ5eiv9EUyR7YofGvwpKv3JeZY",
  "key2": "4dWktumKchAVvwssj65u5uuSMzbhBJwkCqqywW83gnGBRV1s56fcVjBJ3dWiaaz5XTHBT2MJBDAyrik9DWPFSAUp",
  "key3": "5jaWiBmHWYs47mtnC9UdEkPmGqB7EVc1sBR6UE5WjmUKy1KkuMV7oGw5QMJq35bDui3X26Xgdych4jVzSGB5vtxc",
  "key4": "2wdLLQ7gownqeBK9BusmBQEnjPRRPAhoAWPT3t6fgyttic8DKEr6RJLmxpaYNdRzvqxe2iXv15kDN8n7Tqs9hZkb",
  "key5": "5GqZsXccKtsT4NNLobvdVSkdJvaZmarKy8FnRpAqabLBVrSAe2xUTebGNVF4oaWk6DjJia2DYKUEz7ecCqn4V5Gu",
  "key6": "34RN4BTTv2aXLtXTm3WsLcHGuaxLWoJpD5kAT7ncAdBxdrPUxbBZVYJLWhoFLgvkH1P6D7vTwiN2bUWtN9u7Pd33",
  "key7": "3SuWrqEGWvoozHFNUoB73LCtWCp2L9Vze9SKK46sFYYbEYa8PzzjN9u6ZBASKg6193fSKqkfKroRKGx4kK9L4EEB",
  "key8": "2V5BSkL3eFNjQ5MMi9aKMQkQ8VcGC1YkFnyvCgYpCjiXoHhKE5JpxCWbvGfL5KDnrbH55FAqhAGQtnENotpkek9V",
  "key9": "24fET7dm834bDp1CAwiPxKZA7bsXpGfLAKbLwjgZqW81SEySA9hrzu3vhWzrgbJodGuYjH98xX7seYh8U8znENvB",
  "key10": "BA7uiRtPMpVKWud9i6jsimtr2unaWKaE36BhLJ9cJCEWhSWk2GcUCJXuBEmQkAcnr4cU7hXBeYsArhitUBZmT4S",
  "key11": "2VCqWTbaawSjsT1sVpQ7frbbxEyZq7Ct27fte8GswJXr3m9Ju58ntNEs88Qx3XTq2vpSmtxdGamDmtXjCwJ2MrGh",
  "key12": "5ErbxNxxJY3PKkjMyg3uQdhAbfz8o3Hd2SK191CNBwzstGeZKFtnSxdoLtdk7ZEmXa94yb4Tt2A2cmsa2K5Satty",
  "key13": "32qfSp9tQw9sHQuj2XRXwirKyzWMVv4ehXmJe31QQ2oxhvDcEf2pTBgaMGC9vcyUmYxECp8cec4r4z8hfnWawFox",
  "key14": "4nN2faf92uruvC1b97QPmGFjYaM3Pbj5i7Bk81XXmXkWEmKW8Q32puCijzbmA2WRh52tTLMVE73XnuHEiSRHeRsd",
  "key15": "4arUmKEAJZX2S5QG99XMBh6sANf5Vguc3xHQLyHnirQDYTTpHfki2bUKaPpPmGbnQ1afVUU9CYQBsQqrVQqpnw5X",
  "key16": "4v45u8e61PCb6yXARfjAUz8WSm6GN2U4pCDU54r8zYzJPoJQYW8ENNC6RCtZ39WL9t5S5Ce3TiCextSML5duwQ9P",
  "key17": "sTPDeKs4VD1hvvhRtRbSVandDdHduUMKePs9b1FeKGRwy23ncdXgPNNtFKURsz3Qgc3KcYLFWFvraPa1TZ2dsvS",
  "key18": "5F9s1AwZ8XqL9LMUsh5nHUUMK3YMn7JjXD4ggRDf93VvSodSWxfNNjvbwyfcmRdGp54Nvh9tDNjMNUjGnr5Bf3VN",
  "key19": "2bzoaZTX32Rcaz5FoLigK1s3FjyW9xiTdBzf9mY2v8kcw9BwLudwnJQewaMGdwiUQX19WTLgpSxTp233DSvBiKCW",
  "key20": "3UDaiEAFxuwRiQsV4h1k8zqYVBrm675tZ9fCh7xrojseoggEThNBfu3rufWPBzxHeXkML5YgaDLPPRTUs67M3uEa",
  "key21": "3q7KLrxrVRjpPi9w5h85zTY4tA6qYxMFRPVbn15NirYsDDgtUNkgidcgWLpmfEwf4okh62tA8jkxLEhjYK54uFMk",
  "key22": "3H11Bd5t5eb5Si1UL2c3hYaMiirZwJEWodmCwgZ1DLMu7r2Efb4gM1eDzTZ85JcDytu7rJdTgMSjRtefqRXi5apt",
  "key23": "4AnWEaMZ6t2JDmkLEoGjgBeQqgnUtRKweLL4gfGxk9jN5nkhRYirfH6Bo8UQQFfByesDczAoq9uyWe7MqoQMcn3M",
  "key24": "5J8yxH6pXKC7cvzPWbU3fVGGzEMAXhqWxVDWnz9By5bwK4u2GiBpPheUnrCQ3dCLzLxvyREUxWQzeyH8otunEzP6"
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
