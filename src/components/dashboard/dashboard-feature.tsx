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
    "5eBEv6Wx2T4yRGhxtjXzrmpG6U4wY1aHQBk1DKTVoQNNEe4U2MKEPoVnkRFy5dw1EU4JRjiy6aS3jerw6Afkuj5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CHpE9nBoyohNrd5Sa5EHYmH347JHqKeFtiYNWXjzKq5nJid8uVdMp1HRoUSRYLDJDfThfeXsP2FcvAPnV48uJrg",
  "key1": "5VZmfEvGAgGxxtZCm4EHpsrv9H8yvPHxDd1Y7vUuUEyU8eM3sVAutu1VgUPxHAS8outr8cBVkuXikSe8dkW1p2Kv",
  "key2": "4qEPqZFRuK6ngcFvMcj82a71RJXJnuMZkQHieNixopfN2wbCA1HfPdMowEhVJ9FnRVUw5SMZbKYWvvAKnohy4u8v",
  "key3": "3vimBp8Ajgv52rBEvrkWrKRgCVDnYfrVidjDoHCpS8EUybW7tH9JX8U4ALBaydabM7i7s73fLKPgnHdhVFf8jB7j",
  "key4": "3reEdVSizibpzH759uQLhETumKkRCJBJsGxpWLdcBHoPbW4NQ2vrPyZQ5HbjnyCvvYzsZ6o4ToAwokk5c8MeY1cg",
  "key5": "XQMi8jWfy31Y1wZMmqKNvwZyDxhd6mzepaA9AL1ZcVU5iXAHhyrn8MwTJCDNUrMgtCaT3kpwaVcykcV1kvEr91L",
  "key6": "f19jAyFTteQpQzUeDP4qsgzUfY1RqxxEZv3EzvVzg88uDaYaNwRsQvBzoGDnj3ztkBqSwiDAcTMzDMrBESEYK42",
  "key7": "42erXzL1H1A9HD21hRRCDPQ7km7AW6FDzeCRSCxMbNBaeqJcdwit2x1Ad7ndCXdWfP3XN6FgN9iYYoGDaWBNUg86",
  "key8": "63c1s7ofa2cZ7cQ4a8SKCUVsMLrGsYuLtGbDddwAE3QpWiHSWCRRb2bgxaxgUkvPqgJUcTtXW1otzMzUZwBT1ma6",
  "key9": "2YHLhLtg5uUz7nwTRerAaoh7CHeeaZq4g7hrkf3VpUbYVsCNG4R6ttvq3Lyeozfsph5mfPDotBAnNW4bCJmXtvAB",
  "key10": "4Q1bkehZMnceNyNi8SEXbcabP5hdP7bJr3okwEbrkThcwkMwtbRptb9oWrq59z8UXn2t1s9iskmSDQvuquUBryXo",
  "key11": "THUzdDNFTtbifMcpigq99zedpFaqvQ3pKCw6Q66gRxyGtxoQzifdQzbzcvnbMno8o4ocwEA1m17Uwjw8ci5vmNM",
  "key12": "2SNwgJB3fC2oPSB33LLyQaYSBzAewEng35ZU523dGYshofuPXMdwEwoMUCjzy2KxVXtGFCQZnMoMQibqbo355wve",
  "key13": "5WdMTK8RhiAXNbDYs9z2szduCUgyMh737X3Z6vFjK3fyWbzJkTWd4eUuqCbwMHLe3r72Bf7KKP3f663eMRcr7Jqf",
  "key14": "XVEBPdXJJKxaQLSzkyVTP3wP1u8MJF8G3zfyBgdERepXaAxGM7UoKBYLTr5yPKiaX2qcVrGztW16MAeTSP5ofGa",
  "key15": "2UcVn3nxsqGRvNcHP3eQtLQQSwfmDCijvS9HP8ZNC8JhhG7LxftTsrSd3g7pYmqryKeHabCYS8XbQvmRrdF9ttxR",
  "key16": "4LpCsWiiUCx62kuLePg5MV2Lt7v3HHpr11yYGun3icisqLHtZBxiFd8eJV9fYSBUDbnQXrJWVM8Mu9VRNLp3aYVv",
  "key17": "2eCENHAWtQutqWHNFCEw86MWgvBLRY1rg6fSdfXgaaZudtndrYJA7yx7me1DLm8HJZFWUiojaeD9qTRYFfLtTkp3",
  "key18": "25bEruEc7sPquzakCVQ1584ygGYhaRxXBowmp1FQCtf7WiC2PvftJqsYNwjkRp9gzkQcHp6QSGQxrAT5EckPsEp1",
  "key19": "5fw6wciFtD1muZ1avfJmpM92SNvVAdVeNcDATLNbCA4ru4JykmbSQk68wGpKP7BT9MUnbyWW9DJKxWTfkMt8rFVY",
  "key20": "39dVsfo3msiwT8WrqzcNtFTng6WbPfCaqph7Xf6GCWMX7GGC8H52U4YWSZeaCcNsa9gqWb5abUSDria2byET1JsE",
  "key21": "28Uu13a28JFmh6G4rhti7Q2UXMs1zyPEGweiyuLKPVgAJ1ETgr463aK7f6snzuy5yaYhMifC868GuVtUy4mGh8Ux",
  "key22": "2TLM9wqZLaR9pK5p6Nr4Aog9pNneAS1qtBdRhL41XEdfsryz3NdBbS1dh5GnzB2cuWdVGfyx3co2Vw3XdFxkjeRM",
  "key23": "MnfJdPNXADj3nbVqRWQUDwUqvfKmFizKePYrUhJ1JN3A63qkS4NMHJAULqujPB3uLnVkk3KDS4AF2FibNeVpi8s",
  "key24": "x28mCAtZTanV4Hy2xgCgQtkKGo7XqMafDFVjDxsvTWCXmoE2Se4SGS7Umqh2nhFAhk43JyLKWp5Q1KbY99S8TXr",
  "key25": "5QGtZDCNUC1Msfrub1JSKdwyFGWBy2BgxQP9DFsusXhzFsqcY8XsDDS6U8L5VQr81UyxrG6xWVCZW87NbhwrTq3y",
  "key26": "4KuLrJX1g7bsiCvcebCpqJss3yoS414X36iKhesYRPiEhwwj1d1wE4eACcevzv9vfAjo64UChzPKN8k5oGGFH6Co",
  "key27": "2qG1FoMqHdT4cZfvqsBqPaFepAU1s3f6z4ZgXha57gb9WSZ9KAz5ad7H7NyRSddN8imyAFUQafwdCQzo9i5XXGtv",
  "key28": "3P9fQJdBGE5745bYYy9h5G8xrcAEZzPEAkiFLA3aKs3hNcfP8u15H6YiBSdBJbYLhQQ12kqixWcw43wXPfiQdsyb",
  "key29": "2UrTVmy53ps7qUzQmL8HsDr3LqBnPNdcRVGk6uE5LJb6nfg7NpnssFzQ5d5H19q1Z4rg4z7tGMdS21PktpXzdvwc",
  "key30": "1u3SgFtMwEjBrxMT9egyYfWqTsTx4qSiyJUTn7gcf6TjqrQpdb648QiWuJSRxApoxffXGnhZoFgC2ttLe2aCuaH",
  "key31": "5gouA61UJJ35dw3YLRqgjSraGBptv9rjoUcjtu2iVrCN957oepkWQ9ZGBfwVGMR4p4X5AnTd4ReaWQJ9Yx5k71Gj",
  "key32": "54dnLKBxFrAGdhDfXzYcikUKiarHQgb8PtSDfgNSCm1JFjqmQNfC8UuXvg8HZQRgTA8edPy6iSmLXvY1pBd9zsWi",
  "key33": "3wA5L8q3e3BgJBzMUMGKPXZWU7DNwRdyp1WfTmzWTWN9X6HiTdrTRBRWHiPbKAhKkYy5o5G7g9utZvci6GKZ3MZx",
  "key34": "3z1mesEa2zrG49Pzgh8s6uqfnpxcQcwMxCVWLbqN9fJo6FBuiAiwXzMCh5pGdhEgdgtpZ493MmxyxXDB9DEoUvng"
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
