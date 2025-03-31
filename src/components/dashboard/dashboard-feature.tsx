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
    "3jAoLXcBWHJbCJW5Uq2bx26BT8KbrmN93mzC4jxqJLSBjSZYXbom6d4VdtrXLhiE3uJsUDZ83yXmg2k32N7hJCu8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e1tYUmkuPbTvnwX6hLkapeMqLsnkhZuaB7YseGe4KjML2Lhds5FMtGmtj33VBbVCX6wHvG7Kawu71sLDg387o7g",
  "key1": "3hX7RcXFAfbxKsoacK45LNUx8ZVusLP3ve35vhhW5DBHJP6ARUKGTs2kBMHZ9DgMfeBb2GxYq4ztPe4xXRQtnbDe",
  "key2": "4hnT4AEmWYhyA1JTXqHsQnaWGFoA1aUbBXz998z1scwXZTu9YQg5Da3j8QTDghrQPRJK5JZnRigLZWN9BzhEXoJT",
  "key3": "hrZ2YSeNoZgkoh8V7ZFMQYUPqbt7sadett6oNfawoYoEJJj5gCCkyXFFK1QjnMcW2eBbTwTWM3Cku9Hfx48NSKY",
  "key4": "tbKyXqDMWo4cagSuBtLZDBjcr7xvEDKjF43nPo4u4zWyYoG2MMHQbAhiev9psvrPwT9yDqHPyBLWY4KVz3koaj4",
  "key5": "A2Wgei9Q6VeeSEyUEuYXSvp22dmJKkDnU1FySYg2V7KsZzQndYWezMiXVLooAmUngdUzR6qEpLZuUQtJZ9NTBhL",
  "key6": "3g1rok1kZdLoA43jNgPGYfL3u22hdHXALdioAuKzdRvGLrrjgUYV6Ari1g4QtbheDKExsqSGJ2YybNmv4hnSBtFt",
  "key7": "5qsrC21rVaJqako8yLDmCpch5YSkbeU9ZuYvmVyhapdHUscqR6W24BHRjjWbVPTXZzZzdcG95t3eDnc6hX9NN1bh",
  "key8": "5NURXHrF2HkK94iBV1HbsXsjikVxKY8ywU6Fh1e4XLGkYwQKB1rV5u8wQx2NXopBvwK9FDZYXoH6s2zF9Q79NEXo",
  "key9": "huRXnkCGdsBrG62w4R8kzbR1d1XVUNMUist6hLVnMLeYXkFj2aUV1oHe5qGsJUZmncCYWikMqLbHRQAxqWqykdB",
  "key10": "5pEcmYncT9zGPtJW8GifqsASLFtKwWFLDRxzFGkefYRKg27DEBT8uBbzdpjS1XheQuGP9Sj23AYgQtJcphEc1e3G",
  "key11": "agddRYoLFMoHJQ6QtfqPHrAkHyxGLnd5ssTRS7iVifFumikPua5ityTBLHjgmVe7NrMeHRNRpq9kL5gG67svCLe",
  "key12": "4otLLHfJbriBGMk2JMRRzgVLji9Q9aYbAVCaMzrivFNUu8yNMo7xYH1byRsSRFjbxEHRtouv2DoyjBjiaS8et2aK",
  "key13": "k1oGpEYZcaRQ9PdveeiUb2sYZk8rJRxqQdA2nrzu9q11KCCj6CpzfKtHPP1aUiziqyC3Fq8ffoYRVZb5KrbHXmT",
  "key14": "4H8LXDoz3nYSXV8krGaCCerkQxvQ1MFLQvAEWc8aJ7yvu5N8CA2GfDZC4Ku5bG6QU9YCAnbapmkpVKUcqRnNZ1iT",
  "key15": "zdYFdNADsTPUKbDuREExD4mk6YaZQaAoS4G21jDiVaBpTLeou8cogtV5T5eEYEwiVWdMjzmH79ETg3dVhHvGATT",
  "key16": "3bKPTjKcUaaZSeo9RBSn5zKg4fjNuYu4T1nm2URpZrY6vnkWBe3966n7WSmEpLb9KP7XkbmrEQxxH4NLAWgfAea7",
  "key17": "3hCvi5sYLKqT2BZRQGbFTydNBffXcve26VgT7B6Vft5efWGnEF6NrwmF7xQk9P7YM9uXyisyfoCdWCBgQ5MBn4bD",
  "key18": "41d2KX1E1QKMxoBnhToZot71Y9Bumd4SwEEBjQrZyNp7hkFicpfYkGdmij2Dc5cvoCUhktLAmNvCARtn1VtuXLrN",
  "key19": "2agmmhSTb2dWrrhGcB1coce3UNrBwAWq75Pr2W74VKmVGgA3ZgnwmFhDuzEoHYWEiuHgYSUkGp2tdiMh3Sq5xUuG",
  "key20": "4uuCUzxtFxzezkTQnzxW9yRGsC5oGudBcwh5pffQFMaW89M5kTaFCyxcRSrFyrR84VBq5a5Rymhd4otqU3ww9gg2",
  "key21": "ENi5Sy1ZyWqQ2urLUH9SD6hMTQkPK9dUTV9HCYb5LjyAMqwg1ikZvwkj7j8UUNGfAwnEdjJGm19PKK2DpPfV9TG",
  "key22": "4U8TvpKF1XAQnydgwcQYpqWk9xjtpFr5jBaL8897uUZqikiNgqvfT1TcHC8U2aMYNDkNo1FFG2hmoU1XbPbcJXXd",
  "key23": "5LDDf1tVshNYPkL3VLctFn2mp1CwYyt9cPoXcW2c8vg8PAsPmgMfPxgtDjscjFNBNagCFZsqR5e7uNTyATF9Y67G",
  "key24": "5DBZpimzKg2JqPqvTUWxNceue3gafgjSVUw7PJnwQcAWWt1yE6xd3zEYDPuCsHdHmudA5kLKwzVnGGG8kxxy4GEF",
  "key25": "593GRpbEskYPagFBrmuWEouJy7qVUCxZSH5U5uYVixjaZD26gypmuJPGzVnTBWhMAtF14Lp37Pj7XGebTSHWGSPr",
  "key26": "fZL55MXq1whgwLJ8ptdahzCGTTTJJZhUXEJ1FYTtFpMRnEQx9Te4tDh4Eq4WTV4QoP11yyGyABTn5K6J7Ci7HEo",
  "key27": "5q1VgyBe3VGYg5ibBdF8emtuJGKikxQLjzJ4bjatPeMhcwiwATd36zNbK1Su8CVZVgTW68iTZFw1vB84CXC2XP3k",
  "key28": "3aUsfcF9d3RiqrxLC3B3UwWt4Qsvw3RFFp44SRRRcFE3yrHti78NWwK6utBatX2ndhRtKfz3f678yN2a5aWZV6bD",
  "key29": "4Juk4tDxx38ReTGuQoaBQW28v8pyG7b25hNMBYmsVRPY7r85Z5TR6nBSVFppKLj6jSA3bmTmJaNfPbXeF8dW3RdJ",
  "key30": "C483o8D3oJjM1fKy5KiF8hUHEYc11gyuvuB6EMkwhAASpJTvevbqvJUh7oRiuFPcyokVzY4R2AiXt3pEtjRpkMe",
  "key31": "2SfAffeZbF951jnoGfJvPjHJDo26dVCGVRWq4DMExBsuczP6fh5j9U41umkYLHgZtQ9hDQhAb4t8XjS8hTSWQWXt",
  "key32": "5A7cUxny3Rn4tWFxtkGzNPX7ojL1VDkKGwmDUDGZ33ReZMhqETWSZsaTE5Pfy9w6RrfG97Bp4bUeaYy8ixP3WLvG",
  "key33": "J9cybqsck8jK9yeTwEbthtyRkfjFwmmK4bQ1LeiNLQg6p3SyXhERpjHnA8Ta5c1Lojciuctnh8Hj35tmcmjwqL1",
  "key34": "34VzpLhkqByRjWaN72E81KxRAvNqJU3NQkUqQSJBipvwQCVX8qAHaervLymzWteKNVmUZ64BrDAV4drLUKhSpVqA",
  "key35": "5pw1XrBq5zjMhQQ6p8VNNRvdWxourkk3U5PifkwYFqsYYUFFYBMKGD8PQ8Cdj8zq6QTuRhkxq35tv8NFwvtgKrxp",
  "key36": "5GzDZroV2DuviTKYAiVBmUCeFpqfJK8UDCebKtTa8rvjpBU59JMuC37CkT2jSVsyHhFFqJNVP448Z7eX8XsHap4L",
  "key37": "3q5ALQai7tEzgaMepqiwWrRqoyA97MYMeA8RiEyiSEN2tTHdL1Q8tFDQ7Zh4dYgxBk13ngy9p6dcMzgYeHcCq6w8",
  "key38": "5MwottV3F6YbeM8L6hvjV41XbwTqcbMRtQ4CUjShHiTxtHwdqotEv2mSgekUCFTbJ6VpLgv9WvEcSsKpeMYhaV2b",
  "key39": "5p2GT2CzyG4pezTtWP6axKDULJtEfFvVxhvax8ENtnY51AmmicjT8cSPTzpjGhu6X7CFZgcxkwfwtJ9MYuq66bQC",
  "key40": "4gVqoT8CmqmCjBof6U56HFUPmfVEHbgdQtH2uqDcoqAUb54teefjgXszHWxrctH2kBsbfJ4V5PHZoBY5qGd7f24q",
  "key41": "65btRZL4TbFJKdRAjwmrGkxgXHUaUrAARmSFQGetijHGiSWWseyjJFYktw9yXsdoSqFYK3Uey5vp6aTSuFCbDRpL",
  "key42": "3xi2mKX24LG6z2h2tjuTVnQzgU6ceew9PR4ok7JwpJDJhYjVrjURxfLrBjxkeKNTqebb9FVLK313WCjwTgwbtYkT",
  "key43": "WQxN3nouejtKCSfxBBgwEeMrDXAWGP4hZmYPTS8aMZdRcNepC7gPboHVYwyWkweHzYWvne1pJqs7vP9SjEam6oa",
  "key44": "4r8tY3tYRXUDEyFWaJysGbWPnySgZzZqztYRJdqFzYvTSKwMQ8DArcwCodURhLvEdKtSunHbiLmebyuUcZYFKeJf",
  "key45": "2ScQiGTNvzSJnHpJzwRdMoCc7ahUVSZ34ydPe27atxxrndvo8iq7o1jKyKjoBC7wYjqXyFkKXgyMtEkKAD9gnR72",
  "key46": "B1Qne7JoHYA6o6ZnjkfT3tTWumQBu4exenJ1z7HZbBxN42hb2tSLggg8yW5hbubJU8C6m3wR6Y4jiAZqJDQS6tZ"
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
