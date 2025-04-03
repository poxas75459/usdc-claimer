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
    "66P4L5VQZ4LbZThZb1eg97Cvew93VUdCh5GZVnwqjAte2TF2BNFgjs6A5DmfotyDHVEKMFm7hrCATmDQJqgYiDgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E6mqKQGfkG4XdKDFqNSxf9RGQg5KNNc1eS516SSUfMdYZASVjgWeMGM9QvExFZfuc2LH2sjVBD1G2aJ8EmzNLNk",
  "key1": "35U3nsn5BBEhHrZy4FceNgMm3MGWwKAowYhc8uunEvCtN5RoQipQ37Wd17aGArpAkUUy4RmVA9iZpgEcdvo6kujf",
  "key2": "3LrtWbEyENRhobWoW11K7D5Jqiqjsk7GSC8c9FR8K44Dh7vmwybAo2PsdpPkUCzuxjhFfykhSQ6c3qB1AcU3Rq1a",
  "key3": "5k2YYCd7NYvigjmNF6uQBjgvpRi63D7SAbC7NHx9x2QKqJXPAYCCRaCVFmUnwicah8HUzkpf86fFoj6Cdu3kV5MD",
  "key4": "3RT4MH9pn2uzCoWuGYZkaP6UiPxHtsDqoawz6BBizy1B99svdb4bespWgGjhacfxNnLtaSERmzPJhngUbdcqrhEv",
  "key5": "4NroZ1frrknUfxo5653c7GckXTWAZwjqVfavd6dmk8rq7D4wmuGmL2jYisNSgAat6EJqqPkzUegTnUCnTJrF9F4o",
  "key6": "2FL65RfBWVk4qS3zqaqTvyUnDtUxZfuG6GprU7vm6gk2F5wTycokwjR8aPjzG2zyPAU2MxB8sETwH5EFUthzPunT",
  "key7": "y7JwXWA9YjcaviyHuzGzLqn5vAsCXGCpHhbGb676qwwyBFu4jZAxZwDLhJ4Qvy9H6fm64oxmXnbKYHco8ANnjKL",
  "key8": "2zSX2nMbMLA4mXrwBekCNveosKj4pLA9KJ1qcMSnVYJDxbMnU5yVYNa1uErW21Yjcr8CWf9A17hDsWB2f3t7bsYn",
  "key9": "5knB3ZTYvRsRo2wFyXHMYiTRergLo5T8sGyHW143UdEbY2UGzC5Mv5nai7uS75jHPSxEoPjAmC1YhvakmcepjgKo",
  "key10": "319vCvonWn3RNPJm3u5XboTdUPhhJRikFJVb7KfG43VPtmFHC8Z7Mck1qBUJyuLHgQpFuNStt5icMNC8KimkbPmE",
  "key11": "2kCNRyLaZYvS8SmMwSHXaa5GMvUmyAH1RQwbptKCRQWUnwC6GZnjnKL3FPuTSeLeXJ8agneNT3xbm1oJCA6beDj4",
  "key12": "2oSgRfZUjRZ9k8hjGiqLmpZCoZiDsAJcQSXNwWWWTDbLMxqTGetzNArtiSN2VYeFyMZ7bcmbYdZngJXoL7mpUn6t",
  "key13": "3NsdrW35sCNHCejZnbdk39BX1kNXCB5e7JDZAkUGaZJQbeg34yDRZ8dFVfQXdYYgRAehsKEtNxPzVARd2aACYxKm",
  "key14": "tTeJTgTfQHeeX8fxs6nmkU4pyo8QDHZGXeDub6vwEurZRqm8YpF9dGxjdPqvBLXLJpB94RrNomUMh2dSiLjRPb5",
  "key15": "4vx4aN578Ax7kC9zpvjmsc1CjJYFaiMjY7bjH48A8KafFs9VYVRnierUq17Ln35XTxvCJYWUPYuHcZgKEStrX7ES",
  "key16": "292dhZMNuqcy5HmjzMCaizbfQqk54nhUoSr1Yu1YDVAhqPfh1tusoMo5NDgSAGLeK8iLjUF9RSWofpYpqNQfWF8z",
  "key17": "4LNDTds6reGP8jdS6yRu3vmfofq2CrturRmkj2URAU4bbQ7QzTPKj8T7Y4yapSpyAPVSTizKiwLoGfxraQbbA8rb",
  "key18": "V4HSDkqj2aqscNMAUrq8ZPg8njw6ovMm5yYGBX7bJhFi5BU7PchYFjUCBMPkAm5hkgNEyTBMjtgzg69gwUPzSdW",
  "key19": "3qu2EC5pYAbrdyV6KJuSNQqJ8R2zvwbe7zzSCbSx2pTraPa2FGUWr3mRqEic8AwMFrvvq8vDcca9NbYJQVmeYtAQ",
  "key20": "J86kV3PaciJJqqQPe4u6v6ABezwCBw32JTcVyyMpzeaN98tbDT8GVavDEkiRrAFziazkVGWZipPDKw9AkdGc1xx",
  "key21": "2GCvb6hSUZcqfJmKKyAKKmuJ6x26hpbdnRkQyzsWqcX255CbCwaszCQ5jjGgKu65kEPF4eGyQ1d2D3hbvhqJ65x9",
  "key22": "5ykcuC72S8SyCDDExz3gsrts6W3srofshxe3MQBWaLf9HyUCPbipDaQvGXLd77Et68rzqCGH4EeXpxkKsKMCYBWc",
  "key23": "2Stub2ehteGaHWJMXBYu6wd6nfcSnYtUkQgZnQsjXUBvjuywa7APAApUPfUCcYnP9oeZ87snLyjakakk55ADXxFS",
  "key24": "3JzadkPmtTvpXqrbEcnP7p37WkDU5eKyQ2ay9aPWfzihRAXiJGbH9kMkpmtaAX5NjHJVkzWVFM9mMdL1hP2tTHT3",
  "key25": "4gg9DLF7NAgX7PQEuFeYFijW8fckFX9SqvgJkBmivPARm2FVuK4F8LKscqZrMSTVbLKEhgWKJcsvMxnjMV7wCunU",
  "key26": "4GbbqnX6Rw2GAGNQb9FDunxu4EA9NhH4sxuNUsL66spR6FK8x3VdCqXxNYJvZEK1gU9PteajVr9wcchhDYaz9Gyg",
  "key27": "49ZwpQbHAzc9SE7sFm78G2iJfV7Jtwb7sR99R3W7pQDqMQe3fbavJwpErx7wbFDHYEwNUzPWSK8aVTrgwFCfN8bq",
  "key28": "quVM4UiwbSqwKKEgCFF2SwTVLNfkETEPoiVELWSwzTMgTCZ73DWbEbQBbrft7Fr7CTgtuLxAQA6VJrMVuwzBpCw",
  "key29": "nu9Kj8ohQAzEx5P3LFgC12MdW2UhJWCGLVXNCUzEiUYS9xdjKR2AzJJrzPrdiL4FHv3CMnuFT9CkhELopKw5jUJ",
  "key30": "5rD7NcrxD5yFCe398dwv23yCQwWpAoTgMP48ZmzwRCUVfMCAjLRFipBoLBY1rk1NpqZbxTpietsEQ1KryWkGjtKq",
  "key31": "4d5dkKtiazHWZXfySmkHtocDFJfqms1JCuViKsht7NensZjBUFhfW7RCdNSZoFTpd3jJhyAdtzX2FauHnGSWKaMo",
  "key32": "VtXUx5LQ4PPb1qz58QHWPSvWjrMx42rHo9hpvD5E4oN4UhNsiF2RhP1u7Bs27W1aUYPCffQDHZ7a6hErpKv1cpE",
  "key33": "CqmWNvtB43qHY9p8ZEVoYFzFrpM3zzDxR1AiYgx3Y1BJhAT6cVijAqYR1psFW3HRzhtZvsNyb8paxFphP8B9Fbj",
  "key34": "3wYQJY7ZUFwtiUJw28YCAmEYJrR6Tqy4CtK9LaRcoL6fj46KwDTg4GCDo79qW6x5u7r6xWyaZLyMHougwjtpGPw4",
  "key35": "3Ke8pbyJuJ9p35bT7YVneaF11RApJgRHb2z2MYy4gwf4ZeE6FcTXVanua2RkxJbzKHY6otm7Ji9YiXet1uonSGDD",
  "key36": "3L39Z16wh3RaKwzP14LyYekTiSbmZM3oy6WZnPFczWmgjwW8N84BdbFhs9tdgVZy57mf1Ah5u1o3rchWXV4VrwMM"
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
