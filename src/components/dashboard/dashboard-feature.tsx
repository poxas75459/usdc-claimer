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
    "3uCn6q4ftCLFG8drc4gzQRxzq5s8xE7QujXGbCoLENUt71xwFYzN8W1hqHUM25whZeP6BUG8SEpJmi11wbKPVfPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QeRvL7KHeSt2aHrRTSWmaL9pYBrxiJGgfA3AbnNNUYPfQuhBEcCdDNu1By1cAh4YeYBSWFcno5Pd5hXWMbigA6i",
  "key1": "3ZhURj8kvVdvWLU7a3Z5PUM2TQEEhJae4zwQcmyjevaawiNLSCrRARkSuYUmAXfPjLXMXBfS7YKUkXYvvqSY2ZGv",
  "key2": "4tX6tpQLCn1eJ7dnBDaaRzebUrspmqSHhTydrrRETeQpWSsnnbSMwh13tPfjQRXab5HsN8DQRjRE3CAefTXbbHB7",
  "key3": "tBZJNVXxxetFUmsZYZKrAHC7mt7njUanZtzHKs4vJq3tYcVTgBKD3CCLJkAZkmmdRGdgsNk5gdQVW7DVQvupWof",
  "key4": "5d25njxFwk1625CFtyMwWUy6xQfDaqiqxHUmDoshDcz3f8GXvFpJSy4HmMaDLkayNadenPhrFkVio1PFn3uWtATH",
  "key5": "4YtpBStxHkdBMbiF68zqbV9YJfxjuQ49QJX6JuoWUc7utmwDbdYBqU2Qcx8Hy3PF9oyj5f1yD49Vsv587uPwGu8V",
  "key6": "fcrS1KAcgFtdpry3YWX6mHzJjyr2vYXuXniayvDJCQvy9ajgbngde6t1v5EZ6an3osESoNTHBym6yHxVspKCXiX",
  "key7": "5RZz5crZemsT3MFgxZAvRpgSNQSjgC2vPYcrBz46H4FxT5S7TRsc2kVoYTnYp7X4eP6KDZEgEuhWH4p2nMXhsbqj",
  "key8": "5x8wtT4d18jNv5BzHsF9YVeuEHhvokjwj7v5UGsfXM4WWjnKJ8shuvqqELcDKE6JXei9o2u4LCje1LbmZWmF8udL",
  "key9": "3NZSsGKcqHMJdLCjyW8QJFktLmprFBfjhgykaA5ZGa7fLQdJz5NGnKEabTLFSoBQKMw6Ke8jLEGp2qqczNXbx4zo",
  "key10": "31a9Qe3ho1wLcTug2tWrYUzM4reHtxpod3k5xhmQDq2WUiFWfLcPDkwmLwEUHGyp5rUNmQFoabtUTo6x7yV7gM7t",
  "key11": "4U3Q5LKipJqEt9QwUW86MCUXbb1SpBhTe7PuJ3vz1i7Dx8tge5rem6VpDmEyvStf8AVbZE8c3NmJQKtgrj7YUp77",
  "key12": "JgUCnGvoscsug4EfPHS3MWJuKLMe9eds14AiwhGQ9HKMwAgiSxGQY59BWHzxPtZEKBrBhJ7rw6dDWGSH6bimGAG",
  "key13": "5xuAMuQDsuvs2KLmcvDkEbak5JKLRG2WK9VEVbPBLUDcPkW15XSWJuUf2nxa7gkkugjRL6iMfpQWtkD5ZJ37Ts2Z",
  "key14": "5UqH1EV7FHveQt5o7CicyHbcpax613R5XQe6YzFkuoHBg1b9SqHbJGswjdDyXZUsWQ5UZVcHVgRwu5GHBrdT6C5p",
  "key15": "5m8n4pk89iPLHsPBe1zYmeXTErTKaXT38jBK8NNo37XFS9U5AKehLoX17AQSg2nEPjBm5s9JzrCHp89nAyJHToan",
  "key16": "3znoZHCow84R4ayLFugbwUTp9stHdDpdYoT8Xt9Ba99DQc8DvRw2LcfcD4zyH6ndRpBv1GtWPx5kCvVJuhvTNeHp",
  "key17": "41tkGbz7hTVihXsKDaAR4wwWjYLYvo7DQ9dSwRTkUthnbgSqw8ozEJLjUcuY881EDcJZJCoA9TRFTh1wipgre7CN",
  "key18": "3UTyA1ooSGdbzdbBQd8hh2UntS4B3pewjFvuCELJ1JgzPiFU1Pk2BPmcLhvq5hxyMESJzty6KYPY1XgMZqjDp81Y",
  "key19": "56tWZoZBpGDdFWZrwRZzFtRGsMUB4HX28k3YJfcNgAZ1sPWFFPVUf2dAGW1dZtHUb2ay1gtMdct3HQvJ6zyE8c2k",
  "key20": "3EE1LYJJ5t8XFbKMVbZu3p8fwzG8rA9Wd5ne2ARJPk4YK6CEtMMFLGDmckWgMuGQZoFxWbkfzzWK3jZ9rtSw2in9",
  "key21": "51BLhKQyRtH8VNKwVgkCk8Y2mV7SMFHYx7VkTKwkTKMHP6rsLVZB2WG8ZLGX5zGeXK3zVoW8H4jqC5rPLxSDLtE8",
  "key22": "2jWQhE2g5nHYyK7Y1ytHVeuh24rEV1ALmHjDY1Vja1fZw6RobYtwxNofkShDYaqo32EgngEr6eaN2jS6kkYwiKKG",
  "key23": "37DTbuPkzwCGUsqvyjuaVznhHjJcTvRUaaHT9ixChHfkZYrZLovYMLJXdXMGrCn6BmDAYnThVZrAa42KVJqtVFuL",
  "key24": "4h6sm4fYNRPxrvPWjtH8KAzewKKeMaGMkMU7XqSAf572XDViDRFjWftcmX7HKbFj8JrnqRLE9xZTV9h9btZex7sV",
  "key25": "3MDsFyFWDZTVrLVSyEWTLwWbWsLUNsid7Ur6uKrmTvuJPDvd3H6N4ojX9YzwNT4EHtano4ATWcmr5AQZYKSgurzJ",
  "key26": "2Yijm7H12aR66DXUXg4dGNdYGgXywDsRVzAuTMExZR4B3VKAy4ARFJMX2mUAmggrD79zHy5KHDWcRdUbjeNahoE8",
  "key27": "5Gp85pjNmxb7V412vq4tNDKcbZ3TqVKJByuyn9UTjqJPUZ63NocTEGjKVPqKRi2egnwRemgw7EynRD9tboPNPC1Q",
  "key28": "4sdigcPFSubYzEuCJNWEfy4XWF73aXgo5f3a1m8Fk5CSjvFyWancpAas1LaNF8Fuu9aXL8rF4vR3sU9XbyPJuamp",
  "key29": "5rMB8vp273iWtgBfPqkKgM6e8Hh7EcQKRe6hxMPStnf5ygaewP1c2VokknfbLtc2abMLcqXvAfQHL4o5d3wwhYKa",
  "key30": "2ev1He2pYfSiPdxo256i4qMMf6FZmPfjKSFJKB8cTT1BQM15zbQdnickGAZEYh4FaLxiGX3UDxLVUyEvd2kaEuAg",
  "key31": "3fzyFfHaPNZ466kzic6sqgkDKLrzL2fbXHPK3sZqyo4jYiKy4M244powx4po1eDk2dQDT8kGi2VfYHAhddPLY1Rm",
  "key32": "4GMzXQnSvQF1LGQQDb4ZqbLYCwc14kPzuKo27qKkBhPZ4dnnR89zTFytmv7FSBvjk4aCLecvormk8kamtE5XB8xU",
  "key33": "V7EwZdrxcmrgq4mgZRyFP4QzovYrwgYgCTZUSbv3PyYFmtFfCRRh9PWmqXvRKENHioqBZykj4YXRQSREgTnv758",
  "key34": "2tTp2r772uKQ9SzKTzc4v9c9QdSr2Vv591e3ybYLSFv1dxPuZabgJ4hvpCHREC3RhxM5SfjvVQG38UWVjAG4bEUu",
  "key35": "5Spv9vYwCfQe47WpCpFWQ1LA86w3j59cuf6dwpjGjBfkEybr5azvBUEe2B3Y6oHdcP7eHeAczWTNJVZQESxmupPi"
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
