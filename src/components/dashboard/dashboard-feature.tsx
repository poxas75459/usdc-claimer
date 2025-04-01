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
    "X2AGudsHkHGYEfkyttyTnM1CMh6y5eu2QTN4Ks9J4rYPnQEidsdb9XAddfYommwymSczk3r1NPrTinEK61NtfHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RKBFweVEXeA2pKc4xr67hDTJh95Bq2yBZCRv39uR9ziFd41CVMNMo7MKXMGjMu2WoVNLJv1mTYANLU5jJuukWZE",
  "key1": "4onwDhy12PGsM2D1VoCYkrrDcpD1k745fRPty8msxSH5Y9A3uCBp89s4uZP58e2gxddnCW2ZihXzcSg1DtabZbo",
  "key2": "4kXGJnngDuB8AoqesnTKMqMqLMoDxPYyQnYpkZfEG4A4RwX7nvkQQbpMZF3U6FmJxBxzhHUozSrNJFATqVCFnpJB",
  "key3": "4bTAPkBdPAa4hJXy4wwxei2HiLDDEFccifATKaazdrJg5nQ6szRLGYJdoN1MtjxAqKQw9P3iKCBvKb6adpFBM3GF",
  "key4": "3M5vBUeLx8byxstFicM86WdT6o7j3Cf81LSVZNYfGrHJoNokKCwB5K33rfq5ng1isWWpiZDEFeukyMPmjRKwrfxi",
  "key5": "3sxEV6sWEETamJowpp9cMFx2qkMb7zike562gwuUfwkhPzV1884vpmVWathpx9iALdwMhDQdcsppsvXBA8bS2ukY",
  "key6": "YgPHrWdnXo5DUWLc21FgFmzCtUGcpCyTpcJQYDj3VKGpiNcNCAJE7kmK1otmmj98xChrBRae6WRpZ3eps492qP3",
  "key7": "4EMF6shAF41coN7Kbnpg6NifdEXHgmwFQNWacD9dA9qFHwyWkGnpvv65C5oqEq4QsPsAefeKfznaH6EGZ6u9QHsQ",
  "key8": "2mdJuRWHSK4271APGpsM4ySgJ4BCxWGXG2pGtnc3EFmNPkJGjAKMPXJazpYtWsymoE8fktkv3Q8CFYWfQNPqeHbf",
  "key9": "d8ra5xm36thQSGp7zhe8jHgYfFSwRnRTcu2u4p2uJzjiHx3SehkKomWJWpLD9P9rFp5BfoVE7pFszGgtmqKYk1G",
  "key10": "55yjftEza4kZF5imfpujTy1nKVSXL9JXuPLRETBuDyDP9YZS38soh22SzkMDYNzbFNNnziRYPUeWjzEd5uge5aeB",
  "key11": "yz2QGVJYdNX2G5uhW3cg6o1RvJwf8Fo4GgZvcSdKyieqszwRxF4PWCb7Uvn4YMteqNjiZQvJXH58qC5BH1A1YtF",
  "key12": "251xMq85jXrzW9wejgCJRkm6pTHxwX2UCko1EtQpZykAWuPUPoog8HMimq3aKH1271ydHi6Ffu3szpqsHBtWJvP6",
  "key13": "4xYndUMcT2UAxn2TfpLBVgTw4AngJoENgJuCcpYyxBe42Uo7uauSRcqBwWyXnTbYrquQF6vTHzn4u9HDWncyKNGq",
  "key14": "2W9zafhnYtW7wiHeNsXK8vCLxYnxa8JxLXg4hz3GNPLRkWwTt3WcTXZwejQeNL5QxTLPXJFd5MmCjPvSwam94yFb",
  "key15": "5dVQWBQzRXeh97PKsNJCtY1MqFBJgJLUo6um5KoB21NTDqAQtkQW9KE2rJnG6tyGZToZ1y5hPCAjXLWtVBq7xH82",
  "key16": "2sAWo9jtNBvukNiUp7DTrJc3xZBZN7JcFQyM1ndaTgQLYGZQq3Ax9JqR9fQK8WJwUiNgGnPkov6T3J6WhLvbe3wU",
  "key17": "5sCDsmLYJjuMLZSjf4BTkf46CKKUvvZP43TM1BmQFhh7dc2BvGcbzqkMtMVJbtzRjBjVSCZCiU6Uvwcnv3qEFRV7",
  "key18": "2pBbhVDQwBnWj8dfzSBd9ayw7WnkRg8h9SxBzjVmE2TAt1XomNmmxNP9nNMpgQCX1wvV8AYyBhKzXZdsPWJgxx2B",
  "key19": "2LJuLHMFAC3mfcydjaN3nNCPn8txnQSK7pzxPnukW2dLTdG8spXJwTuXjbNYKrPRc7q1NvSY6wYxvorTvNcgUe3P",
  "key20": "3JZ6yLqzRjoAMGzrXypQcQxH3x38G2cQhQVqLYJ83jGtrhXZwewoGXyqCQiFuEmpMnRJS9MBSjYd5PuDbH8xGYuL",
  "key21": "2E67N6JLXYuQsdkfioQQgVVj6bqjtYTotMzPyAQzuxoLQJjh4yZ8aF8wRhTGmj32XkA3NdHrfoLhnWkdDun5a1nW",
  "key22": "38Rj6ZzAFf5zVGM1uopqMJn1XMZwajpimLcyz8z959wppZsUrrj61NMfVVfethFapoexEZhdPNnCD6zKs74UK8eB",
  "key23": "4xhaA5UzNQBWPwnpe7U3FfYxNyxtiBQZNdmQicbiBqJooJC34TSeq4X8MVugro6cD6SJmA8Z1H31uhxt7CvLYYP",
  "key24": "2bUzt1eNiEtVsBb8wT6Wo6BNLq6o7p4dJTKFoAPTT7CPiK4qqmXA3GVfsQxF8ZTvQFhwpLgn1tGgrEYtitFevVRA",
  "key25": "3acUGnMgekcuAtT11ov13G2JN2wG8VTvAY22DBhkarfFt2tC9UXxkRdtgr4As4vgFATZzn2fZgNSVVjioDP6P5o7",
  "key26": "2SL5V6HjgyZRppkPU1nrJPexHDpUsVGJgoCAGhneELc4mck5oDbXPgi9YheehtpGxvZ79b6eMnFDkCfzW7xdzLTD",
  "key27": "4XrDHxZDq8TmYt2r36gFicQEDs3ps73PYhXx4tKAGjm4fkmdKYTYAj1pkEQua3sSsWJnf3HNEa5zFQz9kPt3hSVM",
  "key28": "23EunJpiz6qjeCZzaUaZPmgZ6ieJJtyTxeN3yExYBe8wGgWtTRSeX8xXwCpCzieLDJfC5JAP598exgsukMQ4vNQv",
  "key29": "2A9HWeY2WKojF6ayTeqJ4D5AsYCkeB8vgj4U5kzXTvreairxtLmAiPb6vgXuD98CpaTdjyXU6jgCCZSY6oKmeYjL",
  "key30": "3wjzBG9e5auoRKyxum3o3An3SpL2S3c5tsFAZtm7WqqxnWQpEXf7QbiUiReebttaN8ydXDUknYnLycvPaQZAz3AK",
  "key31": "3AgGh39ph6DSxqEVzAqyZa57cLKA3tuTdPpH3a1i6FQfcaiMCZBVQBrGbTU9TvauEm6u3AT5JSHXWaVbLExsshH8",
  "key32": "3CEupXwRtuSajT73VKYExNL9Xx6JuDc2zeAmp8gZ7dCGJ9asJQYFYoj9sEnzmGf6f6NG5s32VTYApxfoHxL1znFD",
  "key33": "3KSHroySQcBL7ExeqRcgmqZthdCh4kFgWuc18ByxtiMAULqC2dvLhDpwLuZwMamxbX1fQvkSuM8VYC9byaDqkGdL",
  "key34": "63uRRdEaBrpQjRcDt3xiqKWd5abWp9gfL3H8Q6y3o7XhmaSWcufwxfJugmDAw6L9ADmn8YXr2a931pMynH6ycoQk",
  "key35": "UCf7p7dvtvfuL3mrGBUJEqSrfeW2RaoyCErBduXmjcDnXpsTzypsc8AGFnTfxPiMk6XDqJcaAitweXCxz52me8p",
  "key36": "5Sj2AyB63PNi85rN6ufPkB12aXyrjgQ1nQ73EU8wSsb8cT4KeUaSSmRA1YiqDYLPMgmX9beiF4waAMNRDhTeMWFf",
  "key37": "B2LBactb48Gem3LiEDtibZj2PTazhBhmTmtxbdbP3Bf2HSfFVsn24ZKzd8Knn9GeZfY4ZhiCMzX1icSaXA9yUrv",
  "key38": "3ipLDT3MCAcQ4gER7KAcbdtLshjLGCuULJsn2XyGG9s6S5kBfYkLUw9ch8tSo3fzPDfYd3jFPDFmmqro5bNM7Yr2",
  "key39": "5HzxTXMk8NuhhQMBCcPufEmNNh1nAfU7Fx7LR74dux7GB2LMCAT47nfam8WxiTGfNM9e4V2kyCztiC76qDkbG2md",
  "key40": "3mYKUATy9vtoNsSw94Y9b4Eu1Dk7KpAFBxvMsQ5sC3cPerJJPuktXmuWjqFjFqCGJYKHKgzAbjkRVzEJAj2Hed8q",
  "key41": "9ocP8p1hLUE6VBzaVuUiwFeUviKE3XhV6FY3wYMcAc4HPeX15tMwXyDBcLFoUduBAfxeggUpGNRzKvYTciG38qU",
  "key42": "27wdGYyZBpgW57iUCsHsH3LtNPcjDVRXQDLp3LpJdk1SePPwr7Smk8NuGL957VsA4JFmftaqmaqUC47hW1UBWJvy"
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
