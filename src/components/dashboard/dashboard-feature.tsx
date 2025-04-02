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
    "61zBGGbPyBcRtWkhHdGvCnztKomBQ5V2SiG1oY4bSseida45NgTzUgzynqBRHWJYDvWUZptdJRDp3JazhQUvQ428"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H5ytD6d9HmU4Kszzoo38FovVsv79FqKB49hm1cnBK7tKffVNA2y87zATceYdnVBVjpQkN55CLspwLGjLT19FKFn",
  "key1": "3XnUkrPYJsrRxvmBW38Kdg7Y45HCiqvGWFDEhiUBR9dbWmTDY9HCpws6yw3aAgMDahvWCFjRAsLtNvDJdDfmBuW2",
  "key2": "3dxkKnhpQEuE7mZQHtmZKxjUFmvehkf6WdZ4SuK1tv5DVWx7zKAxHTiAnpPJYsGvae9JKkpyap7oydzQBTmVVhjW",
  "key3": "5Fkw3SZABXELQwhQ167Hga3aJwthZiztJXyoSo7NEcSM4G5cn4QgksNe6krzpSagA1BpAYijLjXWB9US3uP5qFwT",
  "key4": "3hres9ey5nq6mWaRJxsJBsjoS7wDEv8tvqGySDrWpYnJoZuKpKDNenwJoLoBvSwHq6BSAzquUMoki9xu3w9R57EH",
  "key5": "GrvgpeSKpgJv2Qi4V6Vt1LPaM7B5mUeqnvqxzs9uD63Sba2R8BLiR4uHya3sXokkoNpY9ATb4cy86sZcCeZABHG",
  "key6": "2bK6YNEadkFVSPBWu3ErjxrPPU5cQ9WEgjRds1b4sNnUPftwFMCqWNdRyRbh45odqVnBZ6hUjDRjqoFpWFQVYP9",
  "key7": "3osFvrTJvNYBfPoZv7Pch2KbyviGHDSSHAYK4tTqmKCkK9UjrQC9wtkvLJVy3HRFTw3ykQFMttH4ycUo1LWoK114",
  "key8": "3kAPo9uVEidbFU62wEibKjqqcHtm7hwtRuiNqoJMCU5QUQ4eeab1k9KtLrBqqHa8iFxSQqRa5zosgcBpnQctqXL3",
  "key9": "4jaHDnZP4W7m53kPzMaC18SbtcVWQJGDoMmnxGQXPXnYGxKaWPDZhFP54G2vZxVrs9swQDzDfSXexTkaWWqNzrVQ",
  "key10": "WhBocFppq4NetmDhUi2DS3QSzMGmHX64GRAzPAqMQDsxndCbKL1L3zK2WojBismeBEkGB9bz8PttcP8tg6Vd4y7",
  "key11": "549b7715qGPaVfJvh6vJuyv9268k528tumAbPDgTUxhtpHbyLg6A6pMyTJWcPawit9ekDMEGuJJZKyQmGUwytqxH",
  "key12": "2L3xL1cTSaqRaJrSQZUMecFsgyfLHhuGRa4dEkmZ3zzd7fGye3qdiNwxZQBMuMxxfAWbMoyG2HR72rcDQSRHMUFJ",
  "key13": "KSWSFvMcs99KdAoRjcQsasQqoA1sLnxNRgBHF6UwQi5nyiHu11WoYhe7djhqUXxujfZqMmSocZbn7YMb8U3A5W1",
  "key14": "2eJNNtmQXbD3creKCqfdn3gfE9FVo9HjakmCfhhNGiX4JZzJ9ASynWbieCL8Gqd13qJ1tCMuDKdvnNs4MpL9b3Lr",
  "key15": "4rWgo9TwZ12BZXmf2Mr96wxEJpr9pibCn5gQ1VANko81ECbBG38C9vn86Z38u6EL3USgUUa9KSvoSFCPFQvU7KH8",
  "key16": "5fgHYSRWyWUMhoWf5vQTeGQsNxnN5Mb7fGd7WdpVJFHxWbU8xaog8Jy1HxiyyjV7HbgKCL7sE15Pu9GkK1GArczM",
  "key17": "4LNqdASY6EgzedQS6cxvCnkUe9huGNcNDqwLfUeQwNA8qRqAdCiaVXeKdJCarLJWLTnxFoAqfjziFLkUydk7Fo6q",
  "key18": "NvVmq6vU5u4vrUcgKdd4jp8ctqBFJhuEoy22ed8WafkpQFU3YLkWukQF6Eq728kNit6wXNV9G5Pe9nJU3pZjgJZ",
  "key19": "4bLuMux8NKwJoVRg3wLYoJDXJdxeWL8npPL3k9kb2TXagCoqkZ92H795626yqDNnhYhaFhkCZyBSc8R2R6w4LbVD",
  "key20": "33p2CSK8CxZYDjsgfm5TPUzv6g8aWUSqsupNdK1gPqjUdGGQj2SjUoUHthGKnq1uj9fWKoX5CbvFEJKQtBHbx9zi",
  "key21": "hwM3heHzb8yVqBmF48R7DNWVFYa3WKgKQT4hzCYaaR1CTD6pPxucrqxt9TaAyZnp5wFXzKhSKND8cBWAvgoHDUh",
  "key22": "4av3LfWgHP342iZ4XfTiJrHxQt8sjfQuy1UjMzfcZdEzYNG5RfBZjGk2v7rq9dTZCyAKxwK1EaoLktJ3ZHstRBrW",
  "key23": "2KJwW7ZXP1zXLg4c7eepP3YR88L79kw9JZvjZg9zCUNJ2zcoCzTEAKxZnYrpgFznH2WMe9SNQVLWmptMBLgcDD3i",
  "key24": "5ftacqG6dYqFQLe3QJpCacRt67oDxi9aXWZwJPpPjtBmoFQZt5NwdUB4te74iqzr1cr62mFAL5UXrWt6tqrAcc21",
  "key25": "5R9rkkgtvQURdApSqmkLnyLTXwiyDGg1KTWwPQLkpqkT9gB5CU9FtMtjPAvMtMGdMAQKsxZcU9Z7Nm6JNiqNS4VF",
  "key26": "4wXhhmV9ir36LJ78JFRL4AKAhEWo1Ufk5yqZ3KExuFebi39io2tZVD13sQEMM4uNgb1L9BxnrnirRZYCtjfcWkqE",
  "key27": "5DxpJwsiBXY8cLWwPbaVQkKcbpSTRASvYhUupeRZUWpiVnTrPJugx8UHUf8NBBoNiiNBeaA6rsN6Q2DkwDmmkeuN",
  "key28": "2gNiyF6PTFcN3cNvjaXAH4dzURrBecJGGc2SfzW1vpvPcA1CwAfRsdxHLYgWNMMcn2F2smbU9dcr5XuZYv1yDQpa",
  "key29": "57SwpaPGAEPsfEZ1wUKUQrRfx1v6LPxh9vbyqvRhkgzuTRCEHYqCdEKYmwuFsyv9WXqpD28W13tWGcoyqbWb1aTo",
  "key30": "3mtqeV3iVHMe1HNjKmrEM3wUM4qhUujuzWMpYrdXdhCxFug1FNruPqJ5SFfRmSMrkS3eGQrZgfkXtdD5tXFMeP7Y",
  "key31": "yAjgqQwgXLvwEhgq8uwjqDmuZrQkgr1PvDUuNndV9ZwRKMZhoCuDgBdRAiozB2dWniZPD9vZiwv8vtd9jhfTkyq",
  "key32": "3cybHKZc8Yp2qn3pwenekZCzvkXX2EyNskYpTC2mLqNGufkbZBfUHLk9N6FVo6Qn4jcHCpch65rTEhsQzZeHjyfT",
  "key33": "5mpXLtvhXs2LoWKUNXskTExc3DVKyjUCD7jWthcqss4HzQLmmbxaFJNxbjD2aaAftwo8SvMVwLE9FyMGQgTuPtuH",
  "key34": "ucM3YDkuvVn1VLuSG3AJRejHBxTTz5vrNccB4p3Vi2HyYV215wWXb21s9NJVq8hzaBRMjQYtVEUfX8JjbgCiXZT",
  "key35": "3BbNndN433cHmWGy9ii5Cj8Pk71xdGKkwXF24eQGaJ3TE4FhkKQSFsNv5tVGtKyLU86eWdAEbYT9VwyNfPjMfQhB",
  "key36": "2FeV25rkKzgm3WekD1fNzXRA4nCTfM4TyjwKe2vJSR4aexty3HHnCqUxwgFMXaB2p3JhqWUFuWEtZ4aq928x8aYF",
  "key37": "3GBL3nPaVSYybPWfZzXg1gtquqj2yjDfmZ4FnVrHb6zRyZj8eJaRmvUn8Sc953KsaSRcgNJ21giDMCy6agsM7qVd",
  "key38": "4SA3wG8vRrWW8qhWfvJYPmLxVkXMp4J2QNj7BDNxCPfxTgk77Nq6PYanuJqLEM1Zs5Q49afUCeWcxTWeC5LRzD1d",
  "key39": "2wsqgBDX7ykJF7Rku7sJrpBHTeatoLq5WVQnoENcPf7YTiGkgZirVd4nBjb8GJfhHCYQHZWEVuNodHVJekVhNuv1",
  "key40": "2cJeLPE7sXhr1gzBvDWC8gHPPA58CPL1sxudMbUoGVDF8caBnvhzexxNArP2Jt1yytSSHcmpMqFkSFT2cYQoK1Xg",
  "key41": "4ab9FMGVwEr98cW24Z2xhuAdakSmPLd1fYYJDt8AahA6zwA4PfGAM8k2JA2QeGwBnTKREpe4TfuNYP1fqeVdFRWb",
  "key42": "3B7mHXeqyYbSVQoB1AZ1TmcBWDRf2g2KXjTTBwegvTfcvfH7qLZBUcRm5fdChZ5QfSzKaD4Azm8TGcHiPgGx3r56",
  "key43": "3LptYr8jjSMkSZRuooNrFVJqhi1a1dYchhyN64rAeUiSFXxQvFz1NwKekVt6N7NfqyzWQP22ch3s6XuHwZYYdba2",
  "key44": "3Pv7TXsUttQDtpXa9wDg4JXkiCVvtcY77KGcTQekJg9et54krgsm6xN5JKZd6CHaKApG7nPJCaso5mEGzVLoJ9So",
  "key45": "4ofGFaGbntT14wN79iGTM5YSvBLeUbHmdGmgx5iC41PkDUF11fLUByYfpK3ZG5caw2xrDca8oYbJEcZ3xmcXhZhu",
  "key46": "3L93GLyGksYRKTtErA7YoYPRpULxBpvJX65ryh5JWqyQ2PqngjwrYHi7dnTufZDg11KfeKLWRqy2UonM9Wn9LDkJ",
  "key47": "4wM6KGgGLL32NCspxNbfUQdjVTv22dnHvLqfkdRVnh7aUjGTJmLTjgj36D8hW3ep5xf2Jp5gtq6Dx1Krfwmp4AeB",
  "key48": "3wouckpuGsncWmVNQvo1NyQ5wS4bcB9jwMUb9rzN8t1Jc6xNuenSfBsPXw7GA499C7GgcsnnpyiYkMWxkBdmt5oD",
  "key49": "4Uad5WEP86tUVR77ddDmm1U2SZinLdJwhWRZH7CuErXGMmZ255xPknR7ebEk7TjW4c1B4wRTqFrfD4YTPTBPK3u5"
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
