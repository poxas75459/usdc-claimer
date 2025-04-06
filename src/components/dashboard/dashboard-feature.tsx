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
    "fKfXa7bp7sfNBZzX1NEsKxmGmgnWCsfc37c2CQGvwELYzviJWeDBDa3N2YiKzP43RugEfrvo2W2EK3qCEjPhJXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pauqBvhDjAfpPe3Er3GeqDhMmhWvwXkUq33pEerhd2Buarq2E1GLF7BokFwjbNfFo2eXu6h84tR4fiLSS633NoJ",
  "key1": "Qt4AQAbtoGz6hUK4xDqVeGg4xV3Bdg2XgQUULhHmMEbSFp8cgbPboNSWRzUaj6etUgHfWwY3gZZjafgFwALnFgZ",
  "key2": "2Yb6ViRQrxcjf5XQj4aEmN6M19xkY2dKeo6k4JdnjX7FSNmuQoqdPqUZCZ5pUMSLMaVe1e2YYJLJsMLSSjW5N2bK",
  "key3": "w2DDr8x3dzLHn5C7ZuT99uGDUSXusFJa7gLKASrEfsH7Nw9k9xvSjnVMnvBEojQLTcp7HZ7bidE85AjJ61D9apM",
  "key4": "tVKYZ1Fwj3bV3RvZ4MnxQxAXRvkoc9qpLrdwF3wW5QEYegGWBbe8ViNHpRjxCKRZL1oxetonZpju8PRu9j3mhmw",
  "key5": "4D9dyr75AfnoXEvstvGvgi3eNjKjGk91MYorePTycqwTkghUAfrZ2fvSs9ba8Xerzzpsi1TaBQM82tSk5X9b3MPu",
  "key6": "4F6ZspryN7BGX7KzuVvYB46dPoUVN8LPq19nT26G6KVoYEMtskGXvs8QFpEPim1Zr5GUkHr97BQbynj2onwEukAD",
  "key7": "23a2iZLjLhp4A2i4i6Rk35tcapo6cegLPKuRXJP4T8G6j7bm9Swfeuy5EsLDn7QGeRorTEVfVe4yWKXnceGehyNe",
  "key8": "2PLNaQ4pK8E8czr2tmVasvz5UzoGsMUiL2sFNP1oXRfoLcgKmNhYjFicAjJig3anX11uftoCtGHBwgu4dkA33nTe",
  "key9": "2Y4s8Kb4Mkn94F6zuahrNHpQDKtmWHsf2ZD5DkFe4FnJtq5u4zaifpxsZnBwr1ZNM92kqC86zhduXu1xYpq3FkzS",
  "key10": "4U8FY2VZES4DgMax3RSmMAJxEZ12Tmu7PFYdo2UArAfqA63qxQaTnuZ3HoduE9fDQkqeGGsVzFiTVgk2Ypj3XUTv",
  "key11": "1hdLC53ZU6kSD4xC5qFkejZrZJsyudGADtCLK531pfXXHDTqqAKkgtiE4tdahn8oDvVPyhrm1cGNcG1KisbaCpC",
  "key12": "3fsJH9gYFKh1uaKiy8epZTK4KoywXmkUgAEuPVKBufXDFwqcEmH8vYM5g7X4oPQZA5ixT7BiyaBYk8VTJtzJPx1t",
  "key13": "4GGkDBZkBiqn8xm9WoXg6zLAXxRoLb9CDFygdJg6PUP97C4RruP4vARJWjhKcg22nLdGtPepFh4VVLo1LgrTGKsm",
  "key14": "4qzhpJZGr4DEqNyeqGb4gSTyTxyZiuxhBSi4TEv4Q7HyLcwHWGv5Q5KqwwyZKgyxe2y8MDucqMKRsEsKUiiEgnaX",
  "key15": "cg1e56pCrZKZdTVaasntqqiLNf7tewr5E4SfgmGkRMzqx53a7gwovCboxJzsZTJvzikZhYXj84ggGHc9vVuGMSq",
  "key16": "5YMMFxXozpPGpK4fgu321pUyifUgMfcBRxDQvV617A1MyQXqYVLvYtk5oXkWnArYUFcPwFSeQD88xgSBtXFDWXvn",
  "key17": "5eYdbeqHnMNNNHbTuSCijsDawAJ9CepBBSAbhhdHn4sQiBiYftbpxML8y1L6zNyj5xg14asN9RJXzhaFgB9VsAKh",
  "key18": "3DD7tSB3Ca3uWZYUuEf18jNT2hhhbKGq9Eu9ueU4fwipHZi1Qjz2wSYZCmCMmVUQTkb6jYARMo82opSrSTPaUoUd",
  "key19": "te8vuhwAXAWEHuCyydwnwm57x8hrhJGrAQz2M2PaMRmyL7SG5z2nAY5mXpZqWkTDk16QDbUNNJ4VVctd6wpq6Lk",
  "key20": "3JirEdVR3kDE9iuxixVryhiT6uDLFKXW2DaouphQcq8y32wXoKetfZpMAkAWa6992Hq7aQ9uXkNvXA8wMWHgejUS",
  "key21": "3zv8j9d14vJx5NPUgGWsAuSseSnMaAbyhowcfdbbMjN1cJ23HbMHYeLVR2jP5GRhDueK3qrWXQqWp5bXnfc7WLBL",
  "key22": "4qrmwkUvBcbcRsHqkFtZJA5HiVTdofnY5WPAyxzL62yWDw2BnbEX5hUod6LDsKRZRTW8pNET5jCs465oE8xx47P4",
  "key23": "5oAkRCPnEVDZonhAaJZACGwT7VChxWJT8mriEhdDqSBcXyusbd9gvycm8UnX4MGjet1ZK8ZquR6Q1D9ok1uhZvUy",
  "key24": "5Biy2X5ZM7nPDjNyCWEwXhzpogsfJAPJJvv8ESQXeJzY1WNvnvXTX4HUHqsoFYC6JbnFURPUDw3KGBh964mKpUcE",
  "key25": "GToQZd7LMPQhbSLDf5TB6Wq1Wz72umTY3aG6yYKMYUS6HDjtfsuzGrszVpjgFzHjEsmT8J9HjNth5sX46arxrVq",
  "key26": "U2HrjB4Ng4Kg8jzcP2QUrh1iLhMKcfTnZHkaTyoB4AfEYT2ep8mEsyJ4Mo1Zn9TzTDdKYvYt8QYEAU3wHwWeSSn",
  "key27": "2ThKjoJ4gaXEz9vL2xRbJ9Eyem8B6yrF4GErcPeCmZZFa18Q4GdyAJVirU4EwnwQjRmU9MsdXwPLAwqi8fnhhh46",
  "key28": "4ZjSQnGYHrYc2wMGUUBxAsWZ8xe4hsWdJWb5nDczrYE4zVe8tswqoPhiFUFkpfpYYbEGX4UVmEZTchmujTRxdo2R",
  "key29": "5TVN3EVGFa8YaBPNrRK6eR5CbT91LMZedEUDo7i41LiX8KgV93pVMqBsuyx2rY5A54ckDPuKQoEUBBuweBTFB8gf",
  "key30": "4S5EXF5t9DnWf58yxAAf5DGpT7aPbzoKvXRsWQep4LxTXc7nPkbmxEqkRe6ZtfA9MfqeQeUoe1GFySpWEW5pFf6v",
  "key31": "QM8E1izv5rRW3ENkCTKQVULX3bzuWv7qzzht2L6rg9rWYQiXMmqbW2S4JKPFh1vgVAPSd2sGDwmPHTvF6vytAYT",
  "key32": "4ip7PPYhD83timDX5egxvHMPMGMjrFr9bmg4nUNVT2fnnGHWgCsT3oc5mo7NkVvn4uZg4aGk1LjuwqrfKtvTV8gx",
  "key33": "ftDhWcGV3SrC8pqrCpW4p3iECDMTk1k9EeLG7hdBfcLTuMZVRAbmPMK4DcF64Frg6XuKQhJqoW24YLinaDTnnro",
  "key34": "4UzDPx3rx53j23jFSKtzw5F571WfAHf6cmbzsbKhwbJo64uM5ZzcfQnznfysGKFxtRGjHU5oaTbaRiLJqDtfRAh3",
  "key35": "3KymfbUUzuiYXXpdyBdDAdWCWbPaPqCbYuzRNPMjYEWbWL5Cze9DNt56yToAsBcpWHURQeviRNmihjqgU12a5AGd",
  "key36": "2mAkEA8i9PyhEy1S46yniRw7xeHGKDxZPuP6dDqwS3hXRMKvUUChW4rdf1TmvFiDFZ8Y6D4676K9bKJi8qrqEaV4",
  "key37": "5EzKDL9CYuEpMunUNHYZ5PWzPzFmStygZQb5Mz6piup2MoX7NoHYfzVavnFyuCjX44iA9V4VZcCAi8ewGettZDfe",
  "key38": "4wDtGbbgfXvBEoUxRaCL5j1sbFL6JgyD6tsNFvTCGYBvdXGxYsPseyGdAJa49pMf6JcrxSYf1rgWHFarfMrk2E82",
  "key39": "7pdENUyTkGj7pZB1UqCiJvj2dSncNVxqFzWtZCXhJdAfCWyBJR79MCyk6jX6WNSdNSWHrAyxXL8JfrF9NeAw21o",
  "key40": "3hck8xZ6jRivMZ7MY3Yfo42UNNLVYf7RaeECuh2rXMujfaZEya2nLEVEPbZ1uDoxwens4DCwYJYgSoUP1mMDxft",
  "key41": "5Z5fk12CLipH9Z8KTUJa3rpoPBhyvJUTcQNJnsK16CWMKWW7nnt8Q1RyM4LK2VeqreEoRdRMUJ3WqbD4v4HZME8b",
  "key42": "3Yynur55WCbtVhWsoiexzhHiheQLJ4z61c4jBH9dkZu3wXqN5uyKKD9em3hvccZperKRAECb47G1sEqNZpbtcrPc",
  "key43": "66HQ3SFsEWyYvbdoQ3ZSRK43uDf8EfWfFGswESeHK4zFbZiX5ZpNBoaQzmwiViY3nj17gaWwNM1R4zjXPbHff23A",
  "key44": "Vyi24MMiKJXLWabQAUYW88JSKXAzsLDcBDv6TXx6vDa5QyJSgCqt2jSiTiR2178zHuLPjX98CSjja5YEHNgfkwN",
  "key45": "4qeHk3BeCjiU4DPT6FWrSAN3r1SnCxWTdw8x8kG7PzccHo245n8h18Sdm7jqhDQeDuB8TpgpUKk9Pc3VxKAbvkJK"
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
