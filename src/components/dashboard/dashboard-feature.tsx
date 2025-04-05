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
    "4L6gHDBtdns4ofDwcRXLAi1dY5QoRoVhFTAmiRjMfJYvg6xyQLymFRGoRgyetaiyz41ZGrtTWK3iAayVaUJ5fP7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Eaogomr3vjWzgHMyrbzrdZact95c3v9DcEDAhNmC81YekNuP1uLyd9NnoKcJmdHwTpPvjqJACLyeWxKHPLywcgq",
  "key1": "4C2roYtfCbdaSg1TShftkbNbGGeYoSuRp1QsoCvhzbC7cmV2G6qHYFQwJU6CfArShR2tns4oWBAfKEc3TnsSMKze",
  "key2": "RdgyBbU3gzFooWjhAFjX8zSN6RBQjzoqXzPaJHFBgNhyYNn83SczYjFHsMBmQDWD9HaeWJ9dexwkDNpgfPVEDj5",
  "key3": "3TCsrWNrZTDrSjexdbXB5zqpiysrfBicYT8FeqQwJ9i47FFganQmnhxDCh5v6badbMBBj6c3qp1uV8KBanCaNoS3",
  "key4": "3jM9n8sEkj9UjiigAT5mQ9i2EJegGF2hYDtVMTg4AdzuGPJKJHf9k7CyJ6u7GizMM7e9BN3WvWyR3VHLk364QjZW",
  "key5": "61zESy2RVMW3nnXZmGrCAWMqTzFR8a3xaRoBCiYfFqT8PwasqStyLEJNMVgjhyDUBg297fQ5x85HJGLo42L5VgNf",
  "key6": "5oySeWJuwVedQikjDR1ThR4QweWtpGxdUza3DwB2NwEcoWSXESQGvQycZFDPUHzj2qXBisZdcCVEL1NxwDCZuAhn",
  "key7": "2bYu3hfY3kKJZHgWYL6jzFuwwZnsfuMz3Dtu5fPbz8ibdRXCibmrAtjW8Dom378yoSmVqKRL33ANJ91BaCzMLMem",
  "key8": "3JPJfQh1bCRLfwah8kir6wYZVnUwZF6PuB1S4kmecjxTrdFvwo1vTQ5hwJTHsVTJ37iCMPxKzagwGUT9h9YTjkDm",
  "key9": "3eM4fp68t3kt8gZELsmqW2ynktXaWhfhJWsMQMGsVWzqmFMJ9Jk3JXYWsdnuVpqw8GhBjShAtYEPvp6NWcWGQTZb",
  "key10": "xo4pVnHySzq9FdmVooYJFQycsPTtBkuwdsJVpojEz4nHLiToTxR7iSCVgjwAaS5vg8v4vBZatdGXA9EMwqUX5nU",
  "key11": "5DuoNWxRM3w1WMoTvVHLYURphwmz1kW1LAgKYevtzXGB3WkeU9yNbTR88TsY7476EApN38x1L3RaHhjV9s93vwZG",
  "key12": "5TroGKVUUspWGCxFV6hrZ3yQf9kt7Eq1jKG9joHVrtVjgUQFqq5vhaofhEZNBtxifz4xVcFPTnJhQWvaFWoF1DuH",
  "key13": "361YECK8PJa5dC6bWYcnpsMbfZRQJF8BYCWA4A8hfznZGYn9YaYE4iHFgdT6uMLMUr5iYFjTBMjAo9JYfdnASkEs",
  "key14": "4u3ChNYAc8Amv5G6UH5zmMiVPdbe3E81Qss8b2gLzRQxZbJTQzUVD7zG3c55gM5XvLumjKbCCp7WBrqcRk1xAD1N",
  "key15": "v9tsgs5aWQNEAP9AVPugmjUAQGcHKJo3ci1eRsTdk6qh5mwjvXKqbUyoUy9if8L9b6uMKHEqz3s9x9tsDSkAGt2",
  "key16": "o2AmKYvopERidTsz6eftYFPDsUaNpo9uWM7is4c2FCB9Q4868XzLGHfLzx5is9bgSv3GBhe2fcbRj3vysFxcTnL",
  "key17": "5gRHcCb8kPk2AT4MAg9JSQfjEkwf3GnTWd3d4KivbP4EadCnFVA6rgPowBsDbqg9ijMeYkccN3MuiJj1fxuXNfTi",
  "key18": "zWLA7Nsqr8iqmpD5gofnn4qGtf4NdVaPMiu3GQiq7UqGP6q1hMT7bJakwV6Hd3yzZjpXyTfFJDBeyJrtaAYyFQ8",
  "key19": "dCFnrDvkcJSdTZzcStQu8PXJBPsQLkM74bVCYYMi4p74x6VMrf9YqBFKHr8mhT7t76ZSNp8JWHsKakqhyFQkmdS",
  "key20": "3HQNxiDgU6qUxnK629tPoC8LSekUoP68SHY5N7yyVgPFTJrywUPgj1kvG4irjgFanWrdeJ3mF8C5vcUkPz91Kfit",
  "key21": "3mqyKJAuTVnjcxJif5b9otH47GG6EK8yuQXusgHpcM6PMwhjG4YcqhLPsv1doaW7DT5JJ8NSmkcCZ9eLnJTfJq5q",
  "key22": "2DeQPNmTsDocJKt2vwtJLVysofdSg9F4tCJwLifdMv18CUjV5D4va7T7u5ZPGr4m6LktPxhHf9XfeuTULhqujmZF",
  "key23": "GbmPXnmc3zYuBA2zk3xjAUuE84sMwpnY5myqkARGQTiTP5okrLQxj8mj1H57h1ZGq2hG7Enb7kfsxsqbb9uhsHD",
  "key24": "2JPLsMe5DxYHzcatCgWx16rvYUAxPuqzbAV5LEadfmw3diXW4vhDPoV9vtAi1jpy5pL1cEgWvwZrcBK3F2k5FayM",
  "key25": "2fyJ8KPvjQNzxFEZXLtc6Hr2bYHbHRGCfvrzom6WkP6gJcFDkFMT9gEqprCTBQQqnujf2cuy9PdAn93Rdc1UHvin",
  "key26": "5RkvxjRBqmZmZHPtmxzRWFrdKBc4FN8NVj3wy2GeaamkxqwE6B7HNxCW9YeMT8TXHp2y7x5a5rGZheWoh6yLFJr5",
  "key27": "3nj7TD1mxgMDTc3S345sJutRLieqUhb9ow8h6bKmv43KSWgGaM1VKnLzGEdpT8U5dEEqF66Nq2JezVegCVbYKr8"
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
