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
    "5LQZP7X25MfVd4m8yrTBen9mxcwSiE7dMWnRttJVQzjuEJ19C5txFh45EHMkYDpBV5LkTAoo2QsoxjYEUpzfRNjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W8g8jDkBMJQHLTRBnMPTGKyF9iphtLTVi7XYcVAt1Mc4yHDEYhWreKc8FxxUhBrLtHLHZZCHTsNV89s8ncjrZRU",
  "key1": "3y1JH5wXokgNhkvr1PhPr5aTuAaU9F2bB6zqGtCTuA93jJ8iPLtKCZZb8UFnUTDfVFhU1PsErMTxQ5UqoQXXTAxk",
  "key2": "59HFghsnwTXpCQQYsPvMY2Gqzxxh3XDVyxnAxwjtB9kGvR2J6Z2iUSFvnx3xG1SREfLgryf7KUcnxBdVkykERu9z",
  "key3": "3SGRGWufrPxX9knNj2t8B6GsxEFHUfmY2gDkFEj7oZSJUxQQfJoAbNALcMPEQ8fDGh6uaAGddPHkG7YZrmPEwEbE",
  "key4": "4Brbb5z7xtSfMd1XB95DqrY1rNZq7pNCprDFiUKBxfzaGBobsZ2vMpFWCoKNFuMCibt9t8m78vcJN9a91wutWoNX",
  "key5": "36EZrsMuw9u85Dbjswpq9x6XHDN1NcWqETm9SMMzDYqSg7HPFoYX5oXfv9qib6Ds4atvTEsqdXAzHE5exir3eJEt",
  "key6": "2b1Drqax3sgxxYMPYLPkqZtwWwDrb2Xev9Lt4EFL64M8Q1k2tbjg2TXhSrMw2Lc8aGEFGpjhGT1eJadgAwvcGdMr",
  "key7": "ZWEQ5tSE7ugH1ZBzNKAusgNp1Tt3Y9FusP7G1rjN575cEmzQKVTcXUWWmyQNzfA9EQuPQeHLav5ATBfZ62SaZCQ",
  "key8": "4RifAaqTAyKxddpHhgyujq7tDKWAnJAvQ8VaES45jXmmPVbSWYxpqjJq2g7BSfH2tU9mYVzLX5c8nLiLDKp82A49",
  "key9": "7cn7zGUNdmxHcMqkvyknBn1urgscGoUVna96Jrn2WdNjsW55xDQigRwLNJamwVyPkWLpzxcWpXkKgBJs2NMc1xJ",
  "key10": "VMbaAnYQapvbTPK7U788TB9rkTVVTKan54t3K1jfqC1f2Fjx4yrYLW7Tg6bBWkpAJPbXQi5J2QsiESJL9ZfG3QZ",
  "key11": "45Qh46hYiSWLjhdoBteyTDcsQuf4Vzz981vkmkxN5dVZTHzTxo6vNwVKxWDv8ef7UrhuaRuHZCPxrJAv6SrBu5sS",
  "key12": "5kU44htrAMNDs4Zukkc1xfoGgU6if6Y2vUX3EohuU5XD6UQMYMK4Fut9kZcvX8gfHQQFewQojLjaHAruiNhoAoT3",
  "key13": "4eMbq5wdeZ5wmHuqF7HHHPovu6cbxBFrzDsP2pHycbQ2r7UYAPR7UiNbLFtemrcTvfTDPtfTDkJzDBFY3RLwUcU8",
  "key14": "21J5hb6huAsZp6MznFX8g4UvdfyadAnMzHuxbA3F8oqnSNBoiymxgZ67EHLNzYW8wUe5VAmmn5RSAD7dQh1rmXhg",
  "key15": "4KUNGERfh7eZV1LbZ2TNGRZYDepk7Vvc8q4tGEbmnH6pCTT3XLQT1GPCpKWYk3HTkaH9SPEikuYjsn9Y1hzDMNHd",
  "key16": "3rUkDatb9rEwdgknG8Dhy8b7iK7pvqTcZBsNip4eiwLJZvntnk8nKQehKVnFCHLFFgY7MrxQ6WKR5BmzHVQ1k95E",
  "key17": "F5By9BT6zHZ2rSPnJQ1d4UYtRobXJcCRasMCB1GnWDquijERatF9UQQyUvHb1ESGACBK8c4zgKLjHku5xEFMxGr",
  "key18": "29SoKxP7BVnrrEvUjuHwfsKJxTvVKg9Dq9Mg7LYKRqu2eKbrr5wQMihUL1vdhC6W5rwxPkictg1Z9qnE45nesjYx",
  "key19": "646cTcz2S9cCWt64UCvU9uVvCMMMbUejq9HtihppoNZjn8MioHzq7zxU89pyurgU7getKpxcRnQSLt8NtCEopZhk",
  "key20": "3PxPnL13bNBQdfCoC1dbozrh2Vj7gUjHPn3LonjFQ2gdQTeGq9PSfaKRe3FWS7ZHPTVaYpushbFPDWRFH6agTZMa",
  "key21": "5nCwhaKAQHWu7yekpwzBP4feqexrjrfsRR2KZXQdh5RNoxCmsVSsg1D69ffbRxvpXkYaB5LWD6Kqwj3FtgQYpeY8",
  "key22": "2zMHym8SPPJrotCmVY1PPpEjqerjc6jd3sesajfWZ8UkVR4Bkwit6UxqkMs8ZPXeA7yqotARdz74wwxRVkVP67Lk",
  "key23": "2VXi3JrvDGt2NrTzCxbVmGaTVmwtRvoXgZVuU5ATJjrbdr24KPJKUK1KHuxkpVgck951gTJsGfxeL3SBz2we3zKp",
  "key24": "kBse798pFR3K6PvpnhoRuVGguRVsoQhx6jMjFUtorisH1tVpoxJcASjfCAWTCdbASyaJVszgfjm73SofWZuaN3T",
  "key25": "2vpuDGmRXSeGZAHn8YsvUr17wJevzAoXUitgMicDtG7Pqetw8zgTMDbWHZJ8RCoWMjA9oXzgdt4RP3KfMhSmUswC",
  "key26": "4Zx1uBxWnq7fL84wXNdaetGbd2dd5pV9fBzv6f7Lam6z9WgWenvv1aJ1V469rv1jm1ksLBc1JheTxBgPGD7iQ3Mu",
  "key27": "5QW5erwNqCSmUo7XHSR91u2gxE8AZx6gzrMAVHyM6G6kcFWYmzeaHLo1rptXSzrguaFwxQi7RiYSNP8uqJYDm9ap"
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
