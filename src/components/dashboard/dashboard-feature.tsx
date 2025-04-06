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
    "5J5Dq1ioHR3rbFVWGSbPDSn2AFfJB9QQUsnPw29SjPeWtfYuW34uiHcddmrc4sfYiGXvkW68Pic3SiYKrij9A9sc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jbxVDf3Cvnhj4T7qZCQvYxdX7uQKQeV2MndDoUGggEMUJwUMkCMvWSn2TMUT1GFuC6WC3DvNGzC36kUckVtPNiZ",
  "key1": "5uqB31oMJAye6iKDAmsViaDczyVM42GUV6P3nzBBoqsvQL7LJc8i3U7izoVxhNEn3kCAtxc7agceSS3s1FFXJJtw",
  "key2": "5uSdJFmfq5P7g6NwjKtv2PfEegeuQKhbYwxHVJqtBE5iRQN8B9ofsazyuNB3dpWNB8pPRQuM8s4KDzXBq4f4KpZo",
  "key3": "5FvA2gzneKBBSD4asdxqG4Ka8RA4zaemQfZTXN2QCTY91bP2638meugM7FDKPNjuXeXpYwKnN12CngZdFbqZMWxr",
  "key4": "5L3x9vgNYJsmRruTjmDmikeSQPgfHmKmuUqygZcHnPtsmErSPAjNBtv9USZHRebdk1BrLoXXQyf9jqety1uTZb72",
  "key5": "2AsdHLu2z7JP35uQkmpiZj4RiobweDvYSiqgCZ4vudPNCXLy9KWprRn7jSoEyzk7FvuXpmapUZWv2QMywH2nPePv",
  "key6": "3y4sasRPYQ5NdGuV3GK9ivDFYiuZp1dsTRtC8rTU8jgHZutaYJrHs54Pu6FQhx5dqUWRgKBdKkD1KLYwQwVagJie",
  "key7": "ugPtrwfgEiTBdAQMB64NuBMUPS6icUAuhzTQkj9Dq8wDLYrLvx5WVVjwFwQCP6s35uKZp61GnauFbYw7BhxZjuR",
  "key8": "5LaYJ4AsGfkHQmC3D1WhCpS1uPhsKRzi4GAb2chzXg2NwKjbwZMsLzbsU7jpatozAjLVk2KA2Lxe8QzoxGaRMoUo",
  "key9": "5MxNakPzDzekpKdDyPQVnNQPbQhN6oaLB9xG7dQGzzqwFZTN7tGrm941gheEY6vXMP1kkrLdAvvhVJasMBcWo82W",
  "key10": "5skRUtpJGig1pfhJMGJcVLCgtMxifzVEpJjkVHt6UJsktn5DvJ3wy2bYvKewRGC8qfTeBSjxCRRQgtJNXrABASJP",
  "key11": "2L12McJK6ctekpdSeW8Ycqt9owaLTehGyqGUjM7e8CR8HVE3jvGc4kmdT2XtuskS7syuN5oBvLMknacWBzrkW9VP",
  "key12": "3mJHANAGmd1sYVd7g5wBiZ4ZfFztZLV63514nysQACHig4ZjiZYodbfmid9bPkdQjGdz4YHA7kN5kPX5HjQhtxP9",
  "key13": "2XQJqVFU9EWNrPXLeTugvsaGZdBBgcdfVnxKbws46MDgKujhnhPWPuWj27wtA4CxTL3f5kGeUPAex5cUZqKjTfL7",
  "key14": "6V6gvi9DVXFi7BdrN9otDHz9fAVgdLQzEScskpk7uEJy8sWYwAqJBszp14JKKsatgxsbGbBXfuwPFqLhfjJndzR",
  "key15": "2s8spPGnjaPD6WdWwSnygzrotpJzXtJPKkLqSes4T1NLwHRPTmN26KNcors5xMMgTTfLCcPqwmdidj94KFRGSBC8",
  "key16": "5rDsmjfTdfUApfHHnG2fyhGj3b41asifwPvEYd7GuU8dQ9eTW86ZodY4dUoL4ibFrunMtY6FAby636CkDJX2GuWD",
  "key17": "3DQ34Szsg92PmVZXkKGZr6MZo5QadaaJQqX3M9TceTKtDgK858ZZL2HfgWvMoN5aT7abbrUc2BPBnTvxYBPw4qH",
  "key18": "2bPogDUP8m66MCcxZ8hQzUXbrY1HXjouf6ojgM4ivddnt8dPKy7qBWTvuRD5Dosz8BN2ZGdYQwUdQqPLy8c3Nv2X",
  "key19": "3WWabLvfzXvfW1cBNpEiXQm2K6QjvaGHkZ738YNYdnGQqQDjE7GzQ7ja4MNjSY2rzjTt9PVV1zT5mUM4rEpVMcs3",
  "key20": "3deZX8oXSsZkwLroSehM2XSqaDuqUsCsYryZTeoUqPCdxtGU3JSEzBm5e5NccjxkkSGbknqYwv7SzzAruDtwhnAT",
  "key21": "4481vKojGT2ivQdJTSnB4gzC9jys82tTtpdpH1kvHAC4oh4SUjvhQoCw9XkDDxCZvVJ3G52CRw7CGbXxrYBSM85",
  "key22": "59GJyVm67L1FnWzf13mj7UpF2X558YuxMNQpa7vLyrbN3DA4CCoAsvQhAKwEdwpEHZQghQBujxywgQsnT2RmjD2V",
  "key23": "21euXDvV44X2R2LBLqnK5mbsgCvaDV9jbpsUcHi9sSSnLhH4YUgF8wRwJKranpoVrguEMeJEJd7TBNpTVcaohhkz",
  "key24": "4REG8h6vxaedqfnFyyi7Rob4qzL2MMqgSzErFjxmV1RNfjfKowpvVTPzk2ciNbQacfLDSbbh3DsnRWAeVGbHB3ji",
  "key25": "5iHpoWKZbkikygMxF9yDmjhY3juXQXjTryPPoooTY4EkpEDc1CFRGabRFTwxn1xH4Z2tsvqo49V39R2WuGRvjt8D",
  "key26": "4zCQEcQ1TFuzd54u2UWrbDCqbnhdttHtaDwuBKyjHooHGgww3sTECWvbLk3ZPVGqiXkiuP5bZB7nQXqdbtMX7PNJ",
  "key27": "W2pp6HB4ay72fXceFHDPUYjpMY26RijFNiAEG78aY66aMS7myZR57bkJmrBaVpDKmPavmsy4cHm82m4gJpv4qkV",
  "key28": "26GM36xg2Q4diXvpJtd44RXgEKxEAtZBrdq8rXNdEpRs2rcmAGtyUfNLaVKsyYN5LJdyJjQaYo22eBbLAe54Z55S",
  "key29": "3WguVJdq9SHjqcm1RFR6opV9Z5uHkFfQqBLXFEgQvVmPB6hZeUpstCRkBfPJkguo6mDkZUj6PnaRhVLV12ezexRp",
  "key30": "2maW63RANtDQPXZEWQGbzFRdyW1bAEv3ksVS7b5D6LqnqDhQbCDYS6ajvb4MNUubAdbLRfdEVhMv2VBU3hhcsdSg",
  "key31": "4MDbV6Sv36P1yVEspY8Nvs6N216zxTaTJcfo7qozTkKP9kqUhUNW9nAWX7dENHpcXFqcwqN4JZT642WDHpH6nSDV",
  "key32": "RCoQhxqf9Y6zveXy6vgspyP8mh5r1sSsWbTRhCQQnjg5Nem8ncWEn5LRHkZevUNKgYGYTbHe2iqHUcRpp1bWjt4",
  "key33": "2QJaWr9GHK15xrdESsD8PpCUgAr3ZZjHYk4G7FRnPCKXiqeY1BaRNAXHc7UT5m634offzhmwiwr5uUuFgF9GxAE1",
  "key34": "Vc5xjcdrhsrPfN5e9JGzEhLvFkSPj36WvN97XX7Y33udyNn6FqDjdUjj7nmNh9evaJ3YwBDHs7b5PkdLC9xupuF",
  "key35": "5Bw5HUX9FPxWeFXFhS1LmpWMvXz5hdrxTkNrEo3vv9dQ1AyBnRXUmmiBus8hybJrz8uk6GrXT4baGNW14CAxnz8L"
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
