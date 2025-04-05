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
    "u1AUfdDB4MrCnqNcwnbYhBCaQ6FQLxFxz4xGBB2FgGGMoy8HVxJ4kAKeJ6qZnehnCkXivvAbY8QZoRsmBbtCzVN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4azfpQCcRoXrGbe2v7EWL4zWH4Rw9GLHGd4VLx14Ho3nsFn9SLF29C1n4W91zDhyjUoqQYvp7Z7HGFvEJo5182gi",
  "key1": "5JeQBqhsDehzFBveGyPbRLzSFocpJGERQ5DfcCJVwBpbC9jh3A7pozJJdBftLoSt3Q2kpWXtikAFmS93oncS9iXB",
  "key2": "4mamJ6WWoWAY7p353caA6d92Uj8G3vJyqa2xQPs6RYFvZaQM9EVpBr7DVvguqMhwWcF2zLsG3A9CBtmkAPpgfofH",
  "key3": "5C9iWLKsT21nwhAn4GM5HFS3HVekAErz7jFPqf6JAFaXdygZUSk8rxLhNtiwfT6yJtvdZUf8yJEvebjUYVzWYHQ6",
  "key4": "3N6VMTDX9oRF1Rmonv1SgDvDVedTyxhmuvUPmSBpPaMEQwiCM2nGBPEUNCXU6p4Wk8F3qiTdB74b6GpY4kdc2h9T",
  "key5": "4j3A75sBvyipvqKXvycgaNvBxpk4vSfJjDp3cyTxpDpNhjzEHD3mdnko55c2K9KPzEqhqhrpLwmupZLtwHFRwZK5",
  "key6": "3zdtYLHpx7ZHy1ZubfG4mEfzy9jJnSDapaSaDDQxsB3UF5pgW5UCDXkxrHnF39wqiD5ENBDN2pDv6R1pzKUxCRfh",
  "key7": "3E4nf4gQji3hAvtpPLT8SPZ3hfmy6cuuSEBcN56vWrzWH4AWzy43TrhHa347rFrAseeXPhxRJaJwarbgioEx96NS",
  "key8": "5ddfah79nUVZw69Ftjs4p3HRcfaVoJho5Ma3HyPpKHUMAG7J2KrQU5aMWsQ6ZKtF9SKHuEmiY8YmdmxYnmSWPj56",
  "key9": "4BBsRWiYrrXpod1nGNDta1kM42FCjHBdd4BSv61b6toQqb7pP3pCzkMQyDQxk7Tmydc9cgGuLPvS6qAF56RM3JQJ",
  "key10": "4ksfe1kBs18KhsHXEPx1YYw4f55RTqK6k7PErnfKtVBhpMAoTBxCkyXib8f6WcxN3hCjcct3QCef4DQL4ixKUoGN",
  "key11": "5RjRwGfv23EiSWYiUKV4tonmiv9SQEQi32snWS6rPCSHFg5NA5NgFhDNaAvtgr75VPfmTuksG9UzfYf6NBYJbRHY",
  "key12": "2ipaf9Fh1JovtHSt74LmVkecQcd8anXLKrK8tMNoJui26tbUtj1f3VdGySXokti46h1YQ3nCJYG4yq76foFXzts2",
  "key13": "2ty1xVBdRbBsb4Q3U98dAzg2HM7WYbYwbQgEMMnaXisFYKJHUzpJAS3pEnwVcrWnDcHBN7DEFQ7VqvTW39uv5aw",
  "key14": "v4i7ajiiYASPqfnLXeM4PcMQ7vHuTJioRM9j8NRbC3xwwL7KZ2vmqJJG5FV3fJxm2PkjpqV4YpLvfqMiEw7mTpu",
  "key15": "41dAXoCuf6ePuGbx51xg22dposeypRBy3ZUhnYZZ3bPtq7Xp6HYTUoJAzh9F36yWYPi22pEoya6GG92rHZWJVfNB",
  "key16": "x3kTVu7eUbioN3xUdm1MLVcnPpN4zt37VVs7SXhneZhiESka6S2zskwyhj3zHG4ECarKCARgac3BHPTjw7yXPXh",
  "key17": "4vbRx6SyReUnHF8DuXXxKJcP5br4pbroYwAyTW9CBtjNZMk6bHNtbrhS78mB4cBt37hLQZpoaUXDQw6AdWy1bhLV",
  "key18": "3BZEcnDXjypJBcddLPUXjjXq9BRKoFAzK1AZuaqcLkdb5SiDCAUrMGbMxxx8RDQJh81rvCxDCinnPLEMt5HuQ8xi",
  "key19": "4z9LfPgrP7vfEMSiCofxRrX4evUVktE4SpV3jJuidBis6js4QELMb2hUwSsmwecxBRKsBXy4toMuGtFFK2TgaRqY",
  "key20": "5n6auadhkZDoDDXr5b5ib3nCEdPupdNv5aRq2Vo8zVBvGACc5n6R2rAXZ3BXiYm5KWKDGTenTB1m8nCbAjYNxPMz",
  "key21": "dWF9LbQC3HfHNJ9fb8JXwahuwMdhWgtRKMggFry9UEb6baf17x7xun7vaHyoE2SvHsQQ1TMrhN56D6XtiEBiVyp",
  "key22": "5zvzgqTEJodoH65XHKMgb4XUcKhmp2MYJtzhfB3nEyz8kMVguHiKvxHVwEyjY21JtiVG8DCNbEiASeURsDVvEimH",
  "key23": "5gA36P7oGECdCNRCDvZisyLUxcradR4eZkcj4o4qi4eehHYsAwGKeaVcDumgMQXYvHreTjSA6QL4Q79kGr7wWCUT",
  "key24": "2ZsqEU11VJpDBK2QiVWKzZU65zHPwFNZv5xE6vALgY8BFmPyPZsn2UFVakvJVhXcL4pA2B6QdbA7Bj9rFpgAH942",
  "key25": "MTpoAfCyXvrYhjEbbjn6L7aMVFRC31aFEpVFouWRQgWy7gq6C2vagCGUqJBdMz2BPUCYbKhbsKhqrb9rWRvPVsj",
  "key26": "5bx1yXBgu2iRNkqdVT6HySST2nSxdeyo1yVF5KrcHHMJ4mBw96PA938byeQK1oQQUX4j5KbdTs9GiuTXTHRE6Pnu",
  "key27": "3b5XuVozfd7zLEtYuGieQG29KU1XZ4EPyJpuaFiYuu81QAdE2N5sS3L5AGWSngcszfpcPZ4QZMxnHWTVdaDLuACQ",
  "key28": "32cnH55xRuS6JmQEdacSv9ZzzW4HnRbFr84tFW1LfVbv11jm2DpxpJzwLg1yzLLwTm68KFveLRsgq9WkmrUWLPg8",
  "key29": "3J97yMdwyxRTzZBpGJTfzr9dAF8WcPEzkbxffP4FNmZ5CDXvNqa51ohw6TgBLmhmi4CAFVzsc5mjfhGrptoaNGcR",
  "key30": "26oae5kGz6ko2h8o7NGCu8KFEQhs9HKTWij1xQYZXE4r8VcrKaR4Tb5PisQfcojjS5K2rgawgVdyvDzW3y86PR8o",
  "key31": "3xT5d66KFperieRBZULTmSfLXWoQ2Q6MoPfs6RfedTVh8V6tUSmntomuHqYxJFhJeVuH7kaLTFhMUbTYPebvjtvt",
  "key32": "517aGfFspJM9p4UH9vRJvqLZXTVWXvnnMxNTVzmE9RaY92BN9XT6KRDwHU6d5RMfhuH1xZttZ2LRRiBP1dsw6731",
  "key33": "mQxMLdNKwU83jiNLL6WiQSQDFnTZRXFELwyHkj3uG9nwSJvm74BsnYi8NfmGoDn3LFzHGLYXKLwdUo9GoTZWYpH",
  "key34": "3wtNZ8S8DCjAKoiUHwjtC1wix6d7MKCyXaaKQbW6mNT3P19SGDpC1ifSyYbZ2PyBeQqoJVTBMDkf84XejRUVMJ4j",
  "key35": "3Wa36L6t6bgWCGwhr9fHPxDi71RNWUAjUW1ZJmwbjw1PPMnZB2uEx59UpDsjgJ6JbBbZRj8ZtCRo9kAoZi8pT4Zm",
  "key36": "5WYHjMLRfq66srXZ5Wc1wJHoiKH5YmKkynK4dq23iHKMRf4vJPSSuMxbDq62rfvrdf3LxNpMBZc6xn29T7mdqxWQ",
  "key37": "ygWWbkSvfZt8YHvzKVB7atJCLPLN9mRWuPNisPmUgL6QrYxZ6nJ6NePVXkkttvZPK4kH24NE7cv4DmQPra1KoWg",
  "key38": "ydx15WSnXFw2eREYAmSNSNtsSpVMey4zdfp8prN3LSwfBiUPHUiZ49yFTHwTtffTMqUCmxfAwwYtMSZ7uvAffSM",
  "key39": "4vkxLkDsYPD27NMTqmVSF1DCnYKU8oax8pvmroDtvjjcDrbty9RAGZucg6kzU2jSijG6LfdFGggBoxfPEaEXu7C5",
  "key40": "2VuePxWAgdH7HMyeDwZmGQ9TxnwRgCEdYrJXCee9f934uVwAkaB6VGSp6pZZeJRQTyQCmpBVa46kv9xju6dwBagY"
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
