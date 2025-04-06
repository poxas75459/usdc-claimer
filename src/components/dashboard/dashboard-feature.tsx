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
    "dEcn8dX1b78ejneT8RegNuWJCDLsyW1SbZkre31P8bK1Skkygw9KgjKQL5gqtBFDF2mbgZK7o65GLN5pZciPpv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UXWEdjP2NuWCwXEnxzJmGbiYXZVJYokrZYCiZbgfDQe3SFsEcwxx6f71UEEprhHWsvV35pLGbaDyKMCJKgegh9B",
  "key1": "2xRxs7qemHNkGPBN3a3NPwPARajAA57wutpyrvNR2EwEJnSKR1vw5w8iVcMtatDURnDdQJ6rozJaYL516ScWnkbS",
  "key2": "2UEeFXU7cu5a1wyZZSxrUEMSygmFWwP9g1ngxgmEs7gPQvZkL7NRdcSoDmxf9Et27cSBNmqPm7FH4i6EsjUfeybK",
  "key3": "61Dmh4YTRcFqnutbAhKrrSArFqGLx7MeVeccqP6kLwe7Z8sSByYLrfAdSYwrNj4VhtYv9x2s4zkCrq2R3vuYXqs",
  "key4": "32ebVF1tdg3B4SaM3v6EXoVT9nKMpLPf6u61V6QVWWgh58UqD7H8XPxmuSMyLUvV4zS4P6piwAW7dkmWbw4WjE9A",
  "key5": "2F1hhMXDRuitw2A2Q9Z8oMo2992cCYi8n12bXEia16fEKPg5j3wKLKVps91mVYmcG9Wo1kDEstw54ixGCezZRLtt",
  "key6": "5sAE47i93MU8MrQw1LLcdqnEdDKn3qb2wRSX66QhEVbr7deLoWWQ9SbDN1aMHnuZDZBydR6kQie7fmziqCHrb6R4",
  "key7": "Ngg5BKbxvixq6QoCddsQQ1baJte3ppDZGNUVgteGmm2Yh4463H7QdKmw6fCkwh5kgvuqEGB7sLSC4EzjRTPthsn",
  "key8": "32f1hSjXT8kTuTw57vztkRUb9RShksvzANcK1YoJCu33jPJ9WsnLgVLZ7tEHwdXg5nFwx7VRvvFiKWVVfdByc8hh",
  "key9": "Uw9Z5Z3yjL5vs9F3Vmv2oJ7cWJBtbJq5xytb8KcUcdrsrfGz66fj1Ph7mRUdxKECFuHN2kTUrCdTGfmp3vun9cx",
  "key10": "2BBim5CBqpA1mmZR2wBFZC4tN1AwM1Vv6F64JsRijrf3P8LQXqvrwUUTMXHzrNKaZqP59QsJaBES6Lmwprw3d5t",
  "key11": "34eya6M5cCAEffCHFBRqajHoeeA1SAozJtBVFB95T1Go6gK37MqkcYUmCnhz61UQQxAEAZAE6LSPGUkczf87eAaZ",
  "key12": "5Ssv6P7AQF81CqKtjkFHWnMJ2DxygeEF9bxXSsQtTMDg6vMWc8F5Q6YheaZZ2tMP6LMGaJ64VfLfgjL5vEpAZdEw",
  "key13": "gL3586dV6qwQbQKqVEPECMBdgorVzGn7yNXe5duri7jdXNnA1ymu75ksFx2JTcVxufNnEKpswDQda8NeHfg9Jfr",
  "key14": "5esMKwcSCkJA6LqjdK1ZZnJK6yZGfhqr7xd5Pg6VMZ8YYeUDLdoXoH9z9edppQPUEVWQpQpkcVkwxPuVhXpQ8rp5",
  "key15": "FVXjrSgfz4SMU5jdjHzFtcDycNgua2yCB8fPoK2tEY1DmSgqyUx3UpGACptvcDD8AtoMfbJGFxmVE2r2hVTBwhb",
  "key16": "TwjtzDa4mCt49JDPV1eUzENhm3shiJgdzxkvbcWcEfDKpb3wrVFU1SZLi9aEA2sSFYncfgmS6GN9H5akSiPYNys",
  "key17": "1sdhQWiHuvWQLqTBxDXa3Hbg8dBJM41auP5n9d2ssYCvbknACwb6aWsbbMquKTzcWazspBVj9vpYAM4owpntAKi",
  "key18": "mUTejSr2wAmBSKsCRuVZCc8TyE4qVFZ2yMpZXoGFyUoHdypuCWaMf7K5BzhG4hbBG6x2p4qRNDwj6tJ3nx9h4Er",
  "key19": "5Sm3SwxyQPA392aFcF5ADVP2D2KqhXFu99wa3XVbZb5K1cqpmKos1NY3VWE9JTEx4qbthqTruSgjsKxopJ9HmJZ6",
  "key20": "2xLirdJSDez4fu6kGCwy4xepnDh9U6VYrPGMx7YWLo2eJmas3xTN8SZWxsNkTqqyCWLvJZJHuk2Uv85pYUyzLgoJ",
  "key21": "5r78xuCYNkhW1xwPn2di31PUc66xFBa9YHNySFvDKRUBigqHyvCKBNTqnG2ykqb4ZMTGUavF432B6oQBzkVsJGEn",
  "key22": "YFRXopHSqiFZvqZ1VJiMUSump7sar3sGLv5363wgPyDhWZBPqzns1BVEkkNDmXkXDgG7TrMYbZzxthNcH9DwaWj",
  "key23": "ve8PEyA2uabxunN7cDMo8vBkXweC7F5JhTmip8ZC1RJLSUn5K2NrPhx45FCnrxHRhwgMwAmZ6FaNciNBwz5HADk",
  "key24": "33ZKJiLtseHuqX2kjmXbTseRL83R7LA2c6xnQdRuYRuwGtPpRdzKYZf8K6bWvVx2TpNndyrheVy8ZAASJGAV4jJe",
  "key25": "MFrJQbwfAyA3jGGRQtFUjLF2tYWGqnrwtvCTJRhNG3nFDPhyrySBK9euNmpxisnmxkBo93C9bz8bQ4QX62gRbYA",
  "key26": "2FuYThxPvwnYkSSXZ9qnk5ecQxAQEyrmxhBjnw2dBKRvqLpB4MeUQ7UJxsirq1EqqauSM2XgRhM8ubFSwoG7NYLa",
  "key27": "5P3LNzXbDxnLzNbHHRZ6ChxNgQPDJNZNtKPTZKe4u9k5GVByCvia7zjLS2KpYTQbHtJ1vQ9MAX3yvmACELm2o2rB",
  "key28": "2h9RF8Bckzpgs8LsZyhydrWXgNepuANrMU7yD9V635QHfmhgjhgqXdv6UKBFE2p6uicXVy9GYuH3RpChjgEpn2vm",
  "key29": "2gW177mbnuXuZVwCoPt5SZY94z4i91FwvXjJPe6gY9DpzLeSMzKhW3UomVHjxQaUj9fiDk73mkyw8DPVY9YgWAkG",
  "key30": "3KEt4gzRcVRQnaj21dzPC7CxpKmgiStis7ZZSjgZBLqQM8RJJPqwHex2gPCPNeN7QnR9apG9i9kwptqngivwg6GU",
  "key31": "TAvZ3pBy3dvPXV4J3g4WQqZpXjrDGFGeLMtSQEBpnGkKScMySvYxizv2fQU1tBnB2DKaWU9MgCTFxv4E7ceynJs",
  "key32": "5LwbFS1z3hfMTF881PkHzZQY3hHSdMYwRzt3iC3zB6x5ksMrETFTKSJAKbq8VumA4KLdgGqP5xXHggyEYjkKitZU",
  "key33": "33ReLTTFowUJHCAzJsDsPvghyY8CeUbt25odVDp86QDGHYaSMJAhDThPpRtSC3wU1XAgR9ermnJ1y2tvrZXvGwsZ",
  "key34": "sQJW3Hu3skVv9iGDzc2WjBisiCr2L9FPFrL9ssWCNPJiuJGjqU6jQmeh14pnG9Vs63zNymXSF5M51F3okup3v8f"
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
