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
    "5aRKxmbpqTzHdQ4rW8xkwiyP7MpRWpki5rdLeydEtAj1ncS5zHeoUjXWN2mLzk5TyynZF98zNCyfW78j5yee3rWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZeBcvX4KdeMpaKbrrCd8ju8aUr5r3TdDKS2P9t4VMV6qsZVtrZF85eCiESdefF1GtHEkekUdcgHM48AJH8ug4By",
  "key1": "3rmczxUMvZgNvp4MLf8nN2C8zdYN9x5ioQ4B1qbXQhXsB675BG4JBr9bq8d73sGbapaEVRgr7WsNhf2Pbpvopfww",
  "key2": "57ALJqCZvbW7MiasGJbakfCHMGVeHBmmam5TP5T5byMNkLnf4bDkrAWjYQw9oBzufYafcfX5iJhix5NL76hKPvqS",
  "key3": "4K9YKCYSqGGjaef6PBxLXFkx4YcPS75fCSj29jNzP2fiHLQU8nHEJRuNkXGs8z6NonB1pZDyTSj5SvyZitFP6jh1",
  "key4": "5BmvzPBmqDefS4mk1Hr6Gf2k1EqYpM8SsUibEXvpGuFsNC5hWyr9d46ajaRKfBPswwRSHPWY3WDMHXCjLarXz7bj",
  "key5": "mzwkDdnhwNZiCuhniKwiBWJeCEoH7SKrs4M5ndYFRhch1jyWD2hYpvVgFnNmMHH8Hp1A4x8UTgR481wBCVpet5z",
  "key6": "59DoG5bfvgEYHqDG1sYN5fbShCdJ594kWAVoRD19cuvpDdwFsBnjb32ZcQqwZ1ZzeX2aLWFm7ghh79WWy8hMuXzN",
  "key7": "5MdnEcaViakCaeAAtj3Ccn6fFmd683zPKNTvgRkHHjWyAaE95gFuTAEGwpeHyCAfhGrc4YAmBtYquteTgraumtb8",
  "key8": "4fkQXYgS2toF3nummzr1TgRTCfUt1cK7JQkWprzFP9YMq6d4peU4xnHX4g9u5UbhBbcYvN4Ave8toAFcQZn8JrcD",
  "key9": "3mbTzdYBKPpUDCxD26BeHN8dCqgyZJPfdLSz2N9vymhBeNMt6DGhCFqrnWiS2ksvTHNDpy5w3hPh9mRfgYy3j9Lz",
  "key10": "5tGg351znnd3s6zJoTAWoWiqegJCnR4EchQQTmJJSYBEgkyUZhwVZ6x2qc9ry7EYKjsiSezp7TWTU5sp1xHVnLkB",
  "key11": "5fpBLFGHEvk9vHLkLnE6SVYDop4ka5xPnXHbpfX4mC7xWMWMHokbzJgyKtz8xbYaGTHis7RnmuBfFmBsWX1Yqisv",
  "key12": "5Ha3EaJXwjexCZ6qLAAFZ5uREPDprG3yvifuXW77jikwXkkCfS4a85zYuP6Eu9ShbbZtxQRBmcmKubpdfXjn8RnP",
  "key13": "5TGRzHGwLZAsVuuNUMp1VoAsjXkWB5zEQZAYd5KQg9TbLvZkrQudUBEkJLppMcGzdCNXK4vSxGBvTfiZFeNFp78q",
  "key14": "5Hn8nmsveq2QNaAXF5U7DFDVNgCDV61w5RTxwyJkGwWPEQDVoKMJhzdpxNBzDAvg75Qf2aB74zTq6heXfDSAxqMk",
  "key15": "59pAThCgzZpi17gKaRj1qUdDiXEMdQSJA5JEHqUA4BbWKUo5yGJtWrN49npYUwsPnEc7dTpAsCymCpmtcpLUosLa",
  "key16": "4fhEMyxmXe9TR37fAzF6JtvzDLNGs338J4hmFCJGybfGGSQPebT6WwYRxASZKuyXCHD7UpcJqdzBj6U6S31mXuq2",
  "key17": "4s3nyk8GgVurcL6ijvQ4epRTR4wM5Unb7HupEMaR4h9xFrhYRXJXM9Tg3cJZvNuMTzCMbwtvtrFg1Zr5Jv1xNJCG",
  "key18": "21Yxv3AJJR3CaqcH34GX3wWqmhTWvwf1iqZUfD6bLBG1JpT2xpPd3xpFvjbM8E73JVjsR8KdfHeZnAWrJQQRgTuA",
  "key19": "4HRdBJmyKK1XaQzpdJVFzCMwvLGpE773tgDNdBZz1arhRhDmByh4eRyLMyRgDyWzzUfDReGXNLsT1GHKYh5aX5ri",
  "key20": "5WgenUHurXtjBmXs9bN25GtGmQnutC6gKLWHUHGB7RJ3VaVb1siRfxpv9W4E6g9x7e7wGRHUZdTt6QoKbdvJUDPx",
  "key21": "3ib1sKJdUnF7CtLgaYaKt6nL8QT4P7vAu7my8iev46wNotvwKZAA3s382U6crust5dxN3J9UJjCotDRRx3Hav34X",
  "key22": "4P8hzw61g8SRez677uRbNvMctUcWsfexv5338E5HBVkpcWowVj3kKjqaypmbdULxQbop44ywzvuHtiXXM6UHE8dD",
  "key23": "556A6K4ZwFQGDUayT1X7WyA43qNr6ipWwPPUDQQw8QwUyqctA5tArru7y11HC11BgfYecamWHfcBmFvi9L189Mkh",
  "key24": "2oFn9tDxtL7zyr1ZUY9YQYARQmJ8MxGjr3whwNcbntBKX9LNQ5URJwhfwTqApT67rqJj3d1cFr69CiM6bYLE1yHW",
  "key25": "4NmXMWL3uzs4XeMt6EvinMhw5qhsTC6M5SrvyVLA45WiCWzm99EtJ3czdEP8hLxMzz8RJiAuyP13jzrrfJaL3y4Q",
  "key26": "4wQGH2ZBuB2H29ZdgRCvQrhHHmNQaDRYtAvanXSFsqPQxsozhvK3ctM5W7k4Pf7BFaosJecRwZE57JgXN7a2EVTH",
  "key27": "62iXNpiYpGqHxU9MUFPRS9WPkhye5qvFs6UcBgmXLqqWbTnWMXi5vgtMoQuMrhbXQwDmasLtBoPYNh6xEAEh2N4L",
  "key28": "4cKAu9bpHPtKc4LkNGgtEjcmcmbKCTbU8FBqsX56uKfQXdY4CLChSNyLx2cu5f9kWeeFfnsxMZEc4QU89uv46C4R",
  "key29": "5scbkz6M2Fbc3m8gdRiihjePp5ChC3QVszCsfJXthLxrT3B9MM4u1PNRB7kokZGv4rfjPnssQKxYAtnFEz5fK4dg"
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
