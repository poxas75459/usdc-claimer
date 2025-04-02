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
    "4pU8K6Ajc9Z2LbigWbEUQ5Nacdq6mdqMY9mHvbqonutkrSghDtyfobwMUjmzBWowtss9qF4fwVz2tQwrnyxVbZCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wDSVQddRLdsg13TBwjF9SPFxZuV29UEKSrWtGYLHRkxtguu8WpQZfZqiAJy41BGGrP1GZiDz8ZeXaTHbdhJNcGJ",
  "key1": "35mwNxu5495DhSuTNQRaXHkMESKWVoUvPjQonkSd3ThSkBrisYShX9ebMu9Fa8FWXJMwMTXEXhPJk2Xb7jixgDAB",
  "key2": "3eJqJmweiCSxLca9Q3idFPRw2BQLwgbxXFbvQFdHBiifD669N1rtotNjpavjEmzQV9u3TbV8SG756D9HpuyxoyFF",
  "key3": "46juh4TTxPk5pVpVxN9Gr9Y8gR5rAN924ZLB6wWWRB7GhwFh4mhE86sY2qYxnCXhdFR7uk6R3soTgcG4VSDSKpad",
  "key4": "3WXG9p7aWxUWCTRTQWspNDDFWZsdQyXtddWxGcwd4qPomDRAyPsLvmJCijUJRHed7tegDmgNz6sVNzW9EAxJ2FxH",
  "key5": "5PVQF2GrVQ74qVHWhiPRC1s4rDWeXUmJ5Jy464RbrncSt8BA9TCAyRCrXz4VjAnPSpg4j6S1wHn8YqpTw4RokeMg",
  "key6": "3emfEYjx1yCswhakHVt9p8Wtr5UwQ6jGyEkzXftUJXUJFpmcXKzuEW8nceiRBVeiEce3yZ2yjki5YbM9gr1C5mTs",
  "key7": "k5N4iFFkGCBPAo48KdLpJhq3HYptrgvjbHCdH1wcuQq4WoctdUYVRo8FEhGaxJTq5hTi2UmHB9VJGsD5RnqiN1M",
  "key8": "5S6vp4xCv9N1jM3PvK2ksCUfDu3dpvT1gbhp7zKz6Mz9nWv5WeHVSFxEAHxH47Hp1GdpiirryMD7P3CSXqjk5scj",
  "key9": "3zBhyPMLe8WEDcCBJ8j5TMegaVYKsaSBCeWmCMvvprc4y72tJftAz9ccDkrGYV2rTCeF7uTsFMDJdt6KkKX6UMZM",
  "key10": "2eA1ijBLvpGudZ2oceJkDznjE4ATBtCArs6BV8dFivuTRomKLhgvuR8aQZAS13UkbrwYuDfLMvt2eBirpvJKyGTK",
  "key11": "3cKUp8mztrQoCaaf5dro4n9Fo4FzYpozRkEPNQjucpoPuwpdH9CYTdmC7canXk6X7tiiyZHbcAT8Jy3LEVPiw9VS",
  "key12": "5t246gfW3RnyMXnVNxNRbAtvuNPPqZeJ1eKizCxTvcZHPPCV52QpZ33XHegFe1MsgqJg5NhaYW6jmAXk4LxqXiCk",
  "key13": "4BaNitKP2E9hj4kTUHPV32fwGTmESGU4pu5WJCHdYDdinM7zmRzkb8nWVazFbpuvsJC2KE49U3KPPRbeyofkff27",
  "key14": "3a9vsCMgoHMuT9nJ9H6Yz2baP4gYk3ryNQM9WuYRmBpuVEqvB53UpjDVsgKaQRFbdw4WCdpcJ5XdwSmHWp7fQq3X",
  "key15": "4ZGHDqCbThSABn15swoaEjj1XsMayDmQsTs8nqgKKRjjvhXtXPLTP4c8FH3d3tpHzF6AwZbqn5qJEF33bwUvuyRD",
  "key16": "3Ha2HMmCAviLRp4bempKUzLChyye5xsE3Gp1ZDQSUMRmoJdB1W9yVzPByR7GvptMMtk6sXXVCnwvwJMEQzxMTcaM",
  "key17": "4VRy2Zd2pt1LBXzdqgwka1PLmBVn8kdP1dHqcAPkx1QBHfdniWxW3Wya1Gf6hAmVRqH8ws4cP2gWpim23og75vPb",
  "key18": "h75NTkTPS4pzuG31uDSdi9QmHNpk3Pp8KjLVKsthbytAjJpu55vWCTEnmjpf9J74m59swJPeDYQ2BtmLCUg314p",
  "key19": "2DyUBXTmXWbpHaLdiTKTLQ3ZNy7VnShuXpuhekVCB4gtoYggnDxaE5nG5ChC546PLTWJc2sEcTDF2EsCsmXQ62Wa",
  "key20": "2rWdBw2UTeA8zwA64sHGU5Q25ruhMWEcPuuL9NwxipoT8PNiBt331BhkQmHpBdxS9mh9Bex7U61ujt4EUUqyFX7f",
  "key21": "5AkgB1jhS4GpRwLzc9H6eHgGbaNMqEjGnYsYsUhdEH9hiQkLWGvGTPKUAHauzAURurM1YVHaNtxwqgrErE11xx6",
  "key22": "eXkSAdabGh94w9o2JKC2jbwSXYce4wYtE3xYQY2kyuHEU4CMyAa9voxYwBNegn8XPXua7YE58XwZ4jSkC1HiGjm",
  "key23": "2U5AFLAav1DYsgufmcgFW3kkJ7rxgKmBJf9iYw12S6MPGsuQyrTmjMz1p9kpBkYVVFHaXhaCpf7jQFaU3LuLeuZV",
  "key24": "H3yez9HzAZ1matmxyHtxWinVACVmyX4sSLyWYQPpZ7ajyiQ6tSa2XHyXsNHo8C7TZS48bQYaN156QKCQysueWaQ",
  "key25": "3xyT867JF7QJ6c3FshqLE9N13gYjLBpKDEnQRZ1WvKVWDEQqN7CHfwWqxEpem5ZV44F8gr1xBe2UsgcWWP4Foj6w"
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
