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
    "2eQzKA2jSBnbdnzhKxX5QBbBbiUqFT6HpYK2s7ToL9PrHjtNEFQGpLVxFHW79H5JAGUAPQwn2CLLo1AAp7qk6BE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kbg1VVwoJ3WCDiN3U8Yyq36zmY5bADyGyqz968FjrkFYU3NwWUdzbLinZjEhJLJL7v4m2Eyp6dZkGHEEHDr8QeD",
  "key1": "4kkRDx6trwneCnJCtKYxzQXBpuY8xz3tAT3vGYnEVSPuiLidenTs2ZdkhHSNaERZoJaJg46e56g1KaScviU1poxB",
  "key2": "5JcWBmanrnd17gqTVS46sn8DRDB4Uzu95mViUscNR51dGsTrQ9rPWBx9PN2rgvGV94fjD9C9GXJvHYpeQqfxkEJf",
  "key3": "5SkJkQE9MFsPRznVbaFny7KHUjbJ57hrx3Hu2zHFzSTL5nK2QxgKxnoWUg9bmGg9qtg7Zoycmtf8freCBkX9bF9a",
  "key4": "333pSgVkZXZKmWFzxV7rWZkC3guQKsn6Hr2HdYCUgeksqq3BboxhjqByESLrfvCgWJAj4AZDxx1t6abP3yvzvi1e",
  "key5": "4dmVzwK73ahbwxnDhXkW3LStaxNYSW1b5NRt3XdmvKtVnrR8EqEJmi6WWtPJoLjPY9CR4NZWWz4zKwfCEkLyJgGK",
  "key6": "QDmzDSueCKZagXGCv1GjFCEzUNkcj6o7tdX6oGYcRAHPUcaYaWW1KdCPgyD8XCG2RaZd56AqqUquCYGiWRjGpES",
  "key7": "3Qu7BNVft5uHr4Gw81dgmLJhCZ9ra1Kr1k3RwYjoDnVbS37ZLtrn6nTXp5KzWDPfbzBig1rHTpk8d4s42SGt97NN",
  "key8": "5fb3CFtJdfESF3HiVYoxqkoXNGhEtkXZsSU4TTnWjw33sUDF7LUaAFYjfUg6TJx3cueJVCmBBBWNDBtmjT1LrZui",
  "key9": "5zvzihAmcwMu1CmxwHfSPrHeV3AYHY2GQLtvzLeVLZ21yqUeCXoYhLLL9fRNE5xsXqeb2dBZTH77rX2V6DXVd1pR",
  "key10": "2SuD9BPBrWD9WCj5TdiHFKAfFC7KN7VijrYmwQTRZ3MjJUZiQjWC5qf4J4aYzwhK3p2YbRCN8yfDFwj7aC1tMgbD",
  "key11": "wo8e13p19igX784tyVXVYZNz2u5Wx77KVGpFwqf8a21dEhKzNPwDZ1Ch6XAoE4Yd5XtpbEFRLnWwW3vhicNRT83",
  "key12": "4vk7mzJo3AfXiSwJM6uApp4frZ2t76XeheQTuXjeTQ1iu3tJ4xiQfuPAVEz8FwF9xJ1SkjJdV99XGas78mvEi3zg",
  "key13": "374c768HKZHXXRytcDujoEc3dGJCnaUqbcJ3urXKbt3yXTvrQ6xRE54nPezNddaBKwQzJREPij9txGji6eadgSUM",
  "key14": "49NyUe71wJGhv8TQWh7td1eMWMhALrKkVdFGqS37AAotzDuh69QKDhDDHwEJWJQ4nVgZwdq6NTFxGwUaTh6hZo6t",
  "key15": "3YK2g4PhJQNSu9SUUy1BUFoC5v1tAQQZRyhRf7Hbb4apq9SoyC4R2zTpg4G3WF43WfyayHgoaxkUYoH7i4SCxR2h",
  "key16": "42Dx7nn4HjELmjs8sWJVx9JNDDarBzLd2vFjm4pbb9ahBhxhJWLm8Hh2UTQ8wMskebMPNvRQkBaar1eubMMYxd61",
  "key17": "3caNjueygqMBkLzbwvMzXrDu98ib642FXCmea7ULbnmVNaMs19YzGcjmwJ59suHtuVW53r1EUKGYN4ubxKvMSRvy",
  "key18": "GPQ54DCrJWKjZDHq8bBtA64vCYUhoELKt89kqp1jXXm3ZKtBMJL9rgpm5yRhj43vCYu8UUt3ZYQUk6NqYEdaDb4",
  "key19": "5oW4iNNvRPuixi2NkGtgWUwH2B8nWr6AHU9fttouxGuqGsJvEmhC4JpraHTd2ZRo2XWaCSKDp1ahJhPj4VGChmVM",
  "key20": "4KqFnRDW2hHJep7tBEuu9cwX2wsqBPibQoNGMfVtgNfh4z4oBsgX3wqSSLzX3WANVzsSvTW4BtBBXwXj5xTVf85z",
  "key21": "473GBcRdKj7j7L5pNcfFmQvQbzMMD6La449EwfZ6pGeQyo4iHHwJcPn3o9zCGsnUK8AZxGKobNAPoXWGNLK3Rncb",
  "key22": "4asqKAYFk5fW5FQEiPcCzNqYMFUcunkEpKFF1GdeKPkf59VT5jF4BYrpERy5mCe54dZP1nSSRShK5opC2f9VSLFF",
  "key23": "3D3hj3RbUBouR7p7EMNWhJFLL6jFSnNYYdctq5bPXzAZfpv3JT7d4E3ZxtPzavmybmUY1TR6uLGWgVDTRKRgVD9y",
  "key24": "2uZo7Ve26AuKQAK8kHdeAX4Yop1YdmguDsrjR9NcWRRCXJJp55gvDWjVpa2LocheajaeRraPT1jAnFf8HhT7ARuQ",
  "key25": "2kf4jtaW8gEqc4w7PeXDanhQpwZw4NaHBQ9BdZGVDfMXKLooJ8fSABx2MNPLPThBH6BALKD4GiFJsRE9zuVYboHj",
  "key26": "4EZpsLirvYma7ZKDcBpq8STnDGsnVSrax8W16uBY21WwHLGFuCMZNYAo6CU8HP7oNw5PkWmFN3ipL3T2d2MxRvuj",
  "key27": "58WsetgG8Jw98n7NQntdmctgYXpFqjSS7oN1f6b4urmmKCodGbe4mGuoV37AvJgyTTm2L6eBNxD7iFxpwikQj8x",
  "key28": "3ezJVS8iGop65dmWUowMeSr4FYAHLFk47YrZWemFbkUkv8zot1xLuS6S7gK1eV29EL8XHbzJsy9k2QF3PW9D4cbn",
  "key29": "7s3shhjCzL2td2z1BkahmvYaJ8bN3AjBmyLEPfWN4ZEerYqW9dFjtPQJh2aT5qauB3jwtRRiBVccBr6VLHydPeZ",
  "key30": "5GsVparCWLifpsvkWKQcewwcc2FpQAvfDVq2wgUJh6ndTskvHGiPN7Nf5dWkBw3rXXBj6zmVUvHsFNcpjrvucEEm",
  "key31": "42ShBjqmUKUdntLyK6s4b28dC5CoApbCmnL1bYrV8rS8upE6ByZrJzE7pYaHcNvtLifNHnTyxnSVMC38R9ic3keG",
  "key32": "2veTN7UVdr7SdP2odZ4ceQW4cMMxudiySKgx9NV8dtgSuFR6eTAJUxH9QEgRhyMpG17QtEZfDdVYzJBc2D8b44ux",
  "key33": "261L7RVG9HWi1CR9aiRAeBQTNQoE9yLRJfUL9a4khm5CZxC8Bjh5zYBhnmZLE7kKsyFfPm7jRPVRoCxMiwG6Derc",
  "key34": "2WLwVigLDTB8qKrnaZWYyvqTk4JUrgYwsss11MYa7k84gNbvy72s9XgZMfRTqERhgtWmuUYvB64gEe1iVrgT6Zkm",
  "key35": "2DcmPxa8ebL5S5V5dmKGuyNDHR9PoujpHv3e5Z64Tjny9rnPtajTQWGu2poS4vN1yqHrvzmiuVJ5KPBCpSFhPPFh",
  "key36": "5REyK53VsjZweWw94W2rUUgQn6tXQubUiTAzPXenS8UhKZU9cSxws6k1Fk3QBwfJGJjfiV1uhuUyJyxanaCHkDGw",
  "key37": "t2eEKRGS5hFokeXdiUmCkWR6HiLu78jk6dJ4Wac3jNdfsc7qchYmAiCQdPDvYBRcwMkuAATa7Pi6VnTusPVy3Wh",
  "key38": "AbVwWzUwDLLPrtF3Psrq1KxBK3JA7nDUJ4Pg2gtaVohmj6AbqYrNHbD7ZEPFMnZyy3KuE8X8hig9YoH5vdgLPyA",
  "key39": "4bfWvrNoVSG6kHCszifna7MZYUjE4JTET4c1NPHVR7X62PpUTn8KjsRh5RBsCgrvQxoeNFztQKXqCXff5qQVrgnC",
  "key40": "26AHTXcdTan22Q5n5234ZWKhcdob95A1zZa9B1uKd9CJqjSRYJsuosXRZmugqv3zoJhESHT5cY6jvicWXAkpxaWe",
  "key41": "2M8GF1mUpGc2i8UXkmXkytVYEbvuhY22ntGoNk8p4h1tUsKLNmaN5wXW8qzrvpUjWbRt6dbvRszWP4GxiMyu9wzW"
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
