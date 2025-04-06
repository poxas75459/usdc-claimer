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
    "2d79vbkm3y7QSFWytyyYDJk43bNHmoCJpaBqzkHy5JxBL6D7U6WaeRsaNV45mCoWWmVJfNpn23fsfZCW9GNCuNYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gq1wgK8NugjLh6BgK96ubsTP6B51r3YxL8TUTkkGExEgc4gbswuU5Qe9LAmdZehzqhRXUKDKUFgPYEFZYh3kQLS",
  "key1": "2bsLe9kXVMGoVzmAdvHhZeoLpwsgrzjchHVJPuwPYQ1RkQbL1Uock7cnYQwDFANrP9H9j7ohu9TfXnzCdwY6mpAV",
  "key2": "2hiE3jVjerhePbsHch99dhVmwx2NX8D1sSXvNMvsjhaD9on5MpTBsr7eXiwyRqmPBnwzM7fyvPGUS3SMH7PPEqTC",
  "key3": "2QmnzhWtMGN9WEr3PpHogCnhWQyitBzZ3UJpVP7zjdnDfBFbZjYcHGoXHhumaDViaxs7JkkfU7MUGSUB9mwptEvZ",
  "key4": "5q3bG9BE8fBz1XqZt2EbQuy77PzASDhoexwo3ERQVLe8SrrWL5kfz5LAszZjLvdXg4pNGT3Lkzp46NCtoSLdrwXF",
  "key5": "LNkaxn86FaoYCznRSpP5xGY2NCaqWzhfSc88NBuSTXfRHaYRsbw4iBDdVbYPK3aFLWGhd78VkmuU2NLsefoKxdP",
  "key6": "5uGPXd3T7cCmt6iA7A4fkxrWEtebtezerRRbRbHx1VxfkfpvJQMv7hSUNtb1yHHdoQzSLF2wceUcXs2sJcmh2EX7",
  "key7": "3bgPF1nrAPWgnH5zFSsASSipNwre5YpQJXcP2Sf2vB5pRnm3RqhZvDN6QJTciUXhqTfPBWDgNZKtNe69cqop427V",
  "key8": "26tsev2y3m9vGTsapXywTRGDkYzfkT7AEusGaBTQi8ZfYd2PU6rd8fYr3eLphNgXY5LbByesiuNBWUGHtZTSTbar",
  "key9": "3Pnmz4f8mFNEY8uyJNM9SpGjosbcmatQv7okjEoJSqGmoDs6MSjt1QniozYZmgbWCULQJGX2zr8DSoAxgPZSoZCF",
  "key10": "5rjB6KcdD4BjBsyc4jCvndSHfbUwZrZ4Tb6dQFW8LifcwrNJ4XYzkuE4TDSSAtkneovwZWRFxf88GuVyVS6CvfB8",
  "key11": "5XYDBq55HtBdK7A4GhcRGsGxCA4hvYFNcTDbR3yc5BLHEWvRXhY71e9KYLZTnfb2JDmfashQkBo7awnjsqPCQzTW",
  "key12": "38SpLWPi7CMEDbUGcpEWdu82qm1nLphafzwMxe5pPL5qdJ5Z63k2X9wVSkYgKcyKbVJCW6QdnKVtTTmN24TqKSVu",
  "key13": "5vjWTcDrk4J49uP5P2em6DUmzARuP12vZ84gFZBJnxbA9fZN9K3H7ciUoGpRJSGPJTJCM1GqFneZJRSjvz6mMLDk",
  "key14": "5Wq8Xn47gkyFkZd4dJBPER7KXsU8LrTm4brFwfSe29Lkh3i15TkhXogpN4ZAKgsec8pJ1xxDh1jxQnw1FGyPXPQQ",
  "key15": "27A7WzCcrmyQp9hKeYCKq2fa7Whe9zHDDfBiHpKZLGJGkTwEBDV7ZwBoUF7Cyrk12C8ieHDRkuqY3c6hFhSW6m1k",
  "key16": "2zgXcaEzetRVaustFR188me5wjdvrcSeBtQa9gd8yAuWrTAT9uaZ74SHGFToPpw9HghyYZzdfPNaC4n6htPemoqs",
  "key17": "4beTae53iT21ES5oSV5BvuqUAubnMYgarUWwKQT6yLUxJjCCWZ2aTweJspXGxDpKq6wTja5mXzgtmtFvzyd5RfDX",
  "key18": "3sYcTkTrVWL3eEh9gXY3XBJ7R5zw6ceiQtQUP852vZvRmpvAkemWcyGkFr6hFC1R4hxB1YtUmW7PZV9VjkSP3FP9",
  "key19": "3h4pYhSJWjAZTg6HZR7HgXRKsia7HB1EYH9tjMZn7PJo4HKZ18YxUaoig7oCf62nkj5HLZpGU7nKTcXY9168HzpJ",
  "key20": "5N2SPNyQBw1gQWVGijCAWJZdF8hCCfu1gDXzDeSrgR5LcfwETZ6qHdm3Z36z5SHZeM3jS1cTWXif6NtZTjky3Ws8",
  "key21": "2HeiKySn4x9UqqKbdaTmksJpfJeYHUqMpou7evzznpsnexUEYBEtojgqgi52kCnViEF3a1yo8aXh6CbiJbPsznBc",
  "key22": "3Xw6dMrJJBauyoDeaLREeE38EHeeenTZg8BU4LixodwgHe93RHshQXUfEYfjdcCGasLevsQyfNAjj4HDRKF2hHfT",
  "key23": "2dudvJv1zi5tvWXmhJgVpz3M83mw48u1obrjRrCF5SAPEgnvuRBZGF2tY7gdPTvArM221uBDxJWndqahECpWD4CC",
  "key24": "XPw9b272qH3ZF24LFfDZrYxu94wewmSdYSdXX7CmxajiPwfsBjEGyJqktp1qNVjUQBJdEKJbtfk4Zj2qv8tBrcc",
  "key25": "bEqjDjeGxhRRu4BkMJ5vt1RN5CWDfvaNYe9EA2xSZdomg4BmT1QJnRzLnHnhk7QiZQuTW5X1YPBkyn1JRoMC2zf",
  "key26": "XidPPLHdAj1PVC6YdiuiYcTxQ85AbHb1rgdP5tqjPYtXUQ4cp7LT4Dee6EaFLHhMSwj5kSmiM8jtuHt76AKUnB7",
  "key27": "5iPaGg9TnDZAgrm4LFrnGhLJERsR4jqgYvPo3PrJcVjoz1M4DyGVtcUGXvnwDkZwA95YyEy74HzweZJfdw8N1pMJ",
  "key28": "5y5JSsnf3oDC8ikFGQDdD8shTGXFpcDnVmaaBhxw4KwsF8hot1p7xobSgQz5PcywqnRjv4yjSVMmbDsuZHNCQ7Ha",
  "key29": "4ZimsDmx8u8v2AZAqWcgiDGtFLGCq9eoA2usC3hJqMTpD8X7D2dwmJCzMiAeqLJyYwjY4kqdW8cPrv2Mr5bYFN9s",
  "key30": "51y3SZbJkt2HG26opix4gxorbShe2DdDynECfn6HJwTMLiuJzgjwDtxX2ouoaykR1mP3PfzmXK4gYYdJmJvmkDTw",
  "key31": "24Ke7HmDY8M79aNX6ntGAmB9VGeALQPg6H5YWcur57RDi6fSNrcNwvRi5nSegP19ENWwMDrKjzLjqE1kV6PFx6D3",
  "key32": "P499vUfCiZ4yAMvWyYxTjUXAcBGiryivzBPwt3im35qtXtgdTZFg2J8SvVfW8yxSH8aDMcbvpTSxUGKgy33M7qW",
  "key33": "2t85g8RxvVvrPBySUfgvhZ4J5Xy9FNbT6Xh6NsShrpZYNjekyLBP6zTaZMxbEszgbCHv9fag24Niwk9q1MuKRaV9",
  "key34": "4YFW3WU7cHPiHK83pBs66bAjqA3g6bJqQYLvTEDaYJ2TJ9AYf9bQn769wzL7xLGMhWJDNB746hLNsGSxn2CiQyus"
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
