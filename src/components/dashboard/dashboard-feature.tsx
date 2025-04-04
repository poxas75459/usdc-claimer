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
    "4QGQ9mq5CzmQRzStAiNxfspq4rYCF7Vt8mQgd3CdQ5bSz6H2wfU2zMBAjM44mcrmUFHfd4pG5qTtouPrFbQysZQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oMDn4rfjbkQbEfEXFoPKtfBSDqTajod8iqB3u6uDVpwJvAgoYtdbhfMDLjabjSghQMGqevXwcLwJJdEpBPpfWw6",
  "key1": "3qbCZH7jgz2NykN5pvT2bfouTLirpi8dLjuWugYeboRTWp1CpnrynNbXpKDejihJ9KqJgQfPtDadWwHB8KGqzhk5",
  "key2": "589SaZd5F8mwhprEUisMCLDuiGAUEHQ7KA1bjSfTL7K6i25tgv2BwwWoqy6EmBBhyoy6cJQ7RdXga9U1Miz8eBxB",
  "key3": "iBF6FgFmuA9eaiBhZXd9M3eLhBXh29HD7jHxJajpdGvxgmEwAJESSXMhfzrEgGPuurfYRoFxcEDxHw4AbvE3voi",
  "key4": "2xxJK3RPR4StPse8j8Cn1Mys4fxqLVbfeGubgjoCbub4NjT8LpWuc9fmL44FsBfC86u3mEnJv8qbjEKyiQijTdzW",
  "key5": "4BQCK2AenFVwAt8rn2LXTCbnBdSZKCwQyxdc52yc7wnRa3KkEeEsKKegxP1nGvXN64idjU8Fpr1bJeJXJpbGWaQq",
  "key6": "3zNTSkJxFFYNwhiGquAzSHUie2qiMeZM5DHfUnAaRDWS4t17oUzNnnnmbYWA71bMfKzmcZ6UVS2k1UkCH2iowM1Y",
  "key7": "4Zoog8Jbc43sJuXzvzfa6uPCAtPBMjwYGP8PDYHAeHubb6eqb4NhzxNToHnWAeyJ9TmSDjTuEg6ZTK6TGkFVafUw",
  "key8": "3fvy9BUF8NzbEb8TSG8Qrhvv2RX24xixNHbh8eibLqTuQXqKAtSwiEABof1FGA2TPJH3xpE4FbTGsmpboZGyUje5",
  "key9": "2dbqfesCDZ7VHWp3DtFE8xDEuhEvEdqD8BWy9HfWRihfj46tBjdEg1SEV2FMGXhai3PyTWdGMd8UtY6MrxHSnycr",
  "key10": "4nRWJ6pq8BPBUwnfCjVqa7Sd7GHpVcGu5tFK6Mw1r5pGMy5L642ZDeAVd7oVFvG8M81R9Cucpv2WjpBNB1s9wDe5",
  "key11": "3R9XZ2nXB7vQp7V6nZp6DN9Y5x5aFaNYPGthRmPNrEH1XFYY2wjbJhQaNu7G4tS1nXP6icTvByWRAhxUgHkckiKR",
  "key12": "2a9SUKVWMvV1jPkiZ8i7uhxvw3XYMSFDFV5sFWQFKBNqVycfK32DArZqn8crh5xJ7abcNkeqVHTYfhSqmTSVDGFY",
  "key13": "2srS2ZxXb3RLxdxXkngWNsgxkt6izZsx5spwdSxBKYxBbV5TpALqeLXnTAmWtp5PohJdnWHj3Hms7NAXoUW7nKEV",
  "key14": "5NwCKXhCUgmBsGj6D5FsmcHxL5Feu8bREpF1DUAu3MgoBQu19TcsAPnvPqXpFb1x22wqBJ2CtfkJ38XW5YXSDbYN",
  "key15": "svp3cp42p8sgqotaBkYb21hznEZnPPjJXCp1HBS3Lh8aC7KA3U1QJTEM88RqccyooB1KhamUJu4a8LXKSppqSZp",
  "key16": "4LZnmBWvtuVuUU9MAcPKXjTFubaKR8L2TnNTuNjCK7kxt2gv7tLWKcLSMCHpYseJBCpRiMDVfpJpDHBMoaVk4Syg",
  "key17": "5p4Rfo5hD9TpQ5jAzjG42SJqUJmsSoN9nUBGsbwyDcQJEajLh2RQkabPQiUUH2HEBhaBe45hfaY35ivaMgv2FUDp",
  "key18": "245ikWeq5w8VgewMtrYRmHMVh4uFwSYt98ZE5RPKyCeic3FZ3N19QJAbvAGeeeqF8fEAFh7DsKfBTLGkzXdjrvS8",
  "key19": "52ew1HhBQBYoY9662Tj3ZVHG916tR2QeSLWfVHtV99ZUbt7aqpN7Gqgxu7Wjtbk2hRu4GWogq5qkEoKhArFUkERS",
  "key20": "24dMfeHA7HQLzv49WToNP6jLiNnExxuhWLoTcJeFHeyBbuYgPLGyQLWMZpfnHXj3Z4VN9RYPgnTGZ64mSnmGSDdu",
  "key21": "3qXnzsS8632UQg2trsD1X3ZmcXTN2GBfMUHoasH4YJcYfYKEc5aiek9jeW9WP3CJqri1aEoCGY7MjnR1arUpBqRM",
  "key22": "4F6V71WsuubxJ7qvPThe2XzFkf41gSo42ftRXJFCTa1GSmkS3X5jQU2MjjUMfetKjh1XyaMuWtih1ogWxTHqQqda",
  "key23": "u7eZx2pZgD5qDotw99bgUTCv16sqX6YQuCkiTsKU7JJmGXjgd3kvHuooqYjtV3zyQ32CogyaCsa2JyRU5VKn1qs",
  "key24": "4t9SkP3DBHhLUmwDDCShCYKtustvUJ85iYii5JzMh1vnJ78F62z7bQedq4hT5xuyyWHHGeQL3SdxhnAnin5HxE1w",
  "key25": "2scLrTD2RMD3n5sFQC3D4xcNbvNju8Bii3une7x9tgnV2hG3pkaf5V7RH8qCNJRo6cRebK7puNAKk9QWNm9wqzVQ",
  "key26": "TSMn9TWJxnp9H5yM4HBxxyuhFqDJJysJ6kkieaj8LT36kJpxCug7XD7rd6vbeDJGgox9i5QkWfVPgZiX4vWPfQw",
  "key27": "5613ZU13VkZ2pFeh8MiyKa2svkZGiQ1sRNfRd1RbtU9jEsC4qXbRUvdK6ZiPLm7oRatqDKyMQdpU6wWnoR1asU5K",
  "key28": "AbZedBXAw5CdJajqoaZwJzL9fCMWCoyx8h9zmA4HBnQiGGrQE7zEV5yysoYojHYEvjmAHpW9bsBcabhCYDosHNX",
  "key29": "2aJUZENNH6L8MqcXGZwc7ydyqq7aKvKMHqwydBJ71W9GPn1e6QJx76io8kCxtdiix9wsYhoTyqrFn5kSpgTcizN9",
  "key30": "KmeqAyczf8m2wQYjSB5k1syufuxYS7MvUmoPDkZyUWeCSwBU7ZpwJ3du4tfhGEbEFUceWBSWAUKJhd6cEmiFpD3",
  "key31": "QgVnm3975afZysYxP5GCZReFAqxkBtbwfXQrVrSX9hbcqHTG1b4zjA7yWiSzCxTTDjY4sWYNPQqRcidBk9ducVk",
  "key32": "3BF9icEbSfJYa8G921te4o2DNYw7TkHEcJhG2HDLKvGjarW571SAdFX3pryK4wzPGzQZzFL1vqXrQjbJZpPN8Xv6",
  "key33": "324VQ2son86BKNAErn9uXrXyZzdd8fj8Ykf2NwfnWvfHtUYAfLAARL9K6ASeTeBJaJqyitGG2tUsm9bKkfN81xfD",
  "key34": "4J6TJRH8DchCtkp1oZY5gmGfgv1HGFexZ8NJHLYePT6UR6CAKDv8xk48LjcKyHHZH9f6sT4maTcb729kRAsQWHhU",
  "key35": "4PZd3TfyteJ6pexV67w9VPYzvSL1AMD1oHwhhkf6jzqkq5oVmcg2Xfe9e8CFrdyrMzNeSD9Kh5oyiqj52HS9M77k",
  "key36": "37Ns792U3CTD46jEWWMtqu8iBDoi23TRGLGmXYX9uWbnnZW6tMao6W2WXcZu3GAk2wSCssn4iKoXWKz6W1ZM2AyM",
  "key37": "2robUzUpvFHDDwPjQb7b1EQpLstUzXdqLDPfQtNGHfTiZC5JyR7aY1pqrfip7rm1vLpH4qC3QeGyMSmZoS7XQySB",
  "key38": "2MTca6CGDLuNJrCyVs8Qvvq2twDFm25EDBto1P8waJKQ9xRgajvWJ4HVv9FMB6KcLSDeP3kiMFYF3fR3YQC64nN9",
  "key39": "29zMzuMMB65jCwsu9Fh2sYcgws4uof9M4Duesa9gRJuuAcGWpft4rWuWqDPP4GgdqDsLsNg5rUt9SGwgbomzjAJD",
  "key40": "44wDNVXvua8hqfvxrJ5iMpszw3Hh9mpkopB2XnoHKBuKnS6M8zD6tFTRthDsd4nLDj48mnhJQW44kBQnHe3YXkAW",
  "key41": "5w2BHFjCE9nRtg6MKTWxanqQh149eDAuccZovj3a2W2nrKjSay4mTPN6Ckb5DE2wNLSYe48P9xjj2CKdyeM8ACwZ",
  "key42": "2wthFdSWURhLNop74Chxtx9Ly1bFcgBAQ4CbaqsnU18qVx5yWTgBAZrLhez6bjaqKH3GiadaQh1JQ1g12bYZLjxR",
  "key43": "2ji59MJ6z5DzvM1CMyt2BgqK6j4qptMFGeW7JbtE7GuTiCophKN8JRpHLCZkiiqAbHGxsZwLc7XeDiGAHT4Kwjd3",
  "key44": "4fheoFWr9ojBqSHwwJVyAEumiqnmygdBT13jxYMVbjCHVyqfSs9R4Vw7zV9AJNvn3zWZgnhfGFVTUcpHr8Q5zML8",
  "key45": "ei2kRjDDMwiFdZgQyhMAq1xuAPZ2zmWorWTD8qW9ryCsU7DnKwGXAjEPEXiCE7MQM8ZnJ8fP2RCG2ZEMTdqTuYs",
  "key46": "4YVdjFbNsJCnqrrAZUtYDnHRWZSeMZvmn2GWNF6YMKhfw9cygJ7i5sbCXaCzp33un2DvYouRwm3gRLfwCPgwyVMk"
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
