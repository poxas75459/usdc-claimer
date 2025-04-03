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
    "2r69asq8GxF77Xn8nNL22dt9pYcSQstkwEYJ3M36FHYND9tuAE49DrgdDy2HMDuqAuHapv3MhDTggknA2pzXCxtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QuuyCKeWDetkLqHdFwvZCyWmMVR5f2pKCFnXjRgCX57iX8hszrHG9ZhhCfhFVb7NxmSTXYm3DAxpGcc5FuEmvGY",
  "key1": "4BskmQiXs1rsY55jnHzjQD4SH78PGN6b6diYhzyLrKF631GZu2kH8LarLGcknyhFVYhCrN4RhoTGs9opGmaAdhP5",
  "key2": "59A5mu5U2QQzqUC7R3pqc5ZkvBGaBjnk5DxbP5qGfMMsbTXGkqaxftynGMfYvvehZfWmY1tqgs84oBHtR3WcRQwK",
  "key3": "2yCyhLBs3oAWHrXWbX2cbw6ZMjNcRfK2wGHnyqoGvkWi9xL6nEZv9PJ32W7oqufza1naaSEvrirMqtFyG1nAhNaa",
  "key4": "4WdY3S92msakGK5PJUaSCRFo63TLcasXSs421MHp8PnsnhVnUJEhRaA7dTatX5At9i7U5X4ceJ6sNjUyEqFTmnhR",
  "key5": "61umvxNGhhEii8oYhFF2aNqwNquzDrt3V5ttaP1bbfnhK6ncJgZT6JPeeHpupW9NRknN7ptLonfXgzBZ7oHUGBgd",
  "key6": "4NByEj9fup7V1LLLfxNcpsTSFh3wSTZk3fVvqL5Z6BKmRmoNRKrNpGyD68Z1RuhuUcAQcPzbLf2gFM7WQAcy7rdZ",
  "key7": "3v6XhDRSsfqXhEn4kYqvzinxnyL9qrJG6neZeTj8AANJRo2jopgiuMR6cmLxmuXhW6dbyaP5BrzdV9j6LRRbCUMG",
  "key8": "5s174QeY4kNMY6Am7t6KXmcg6e4sopi3hzykwFTfSbHBaMxRjFosVTs7C3Kv1n5XnsnDPwRrjLPs6JNKXwiD5rdG",
  "key9": "3zPsBnFjUng7TueQRuJZXF5Mthv6Rt3xzkgP4huPnmh3agAmfYwN7hfrnmzNRMLqdikFhgJHrrUoDVx9wo9tF8qT",
  "key10": "3JPfFJBcjsq51yxuYRjGJELWWxmMFsTKDDvpy3tv5732kmLYQx7L4sUxeN4Mo2h8EP5zRkjzTiPFzMP9sHTVfjqp",
  "key11": "3bE9u4v7jwrXpBaMyRHFtnGZdaorhiHkyv6oeSxAJt8j1qWtcn5bfpiKUjsPPmWpjGPXZ4pPnG7xY8Eug4aRPYAK",
  "key12": "4U1e2cMdQ1iNE8nUUm4SBd7DMJGLquY2tJp5fMGQ19PWXii4LCQtQKqCj44vfkSQUb7dp4f9M4pKu7SwjyHK865H",
  "key13": "4c1sR4852Mh8wY81VLkqfoJpUDhuQC3ZWKobbUyfpqRK3qbEdkD6qNeyU7YMuzxfXRh71ZCr39VGgNoFjtxbrdvf",
  "key14": "3L7cipsBcdCZHzBawjGZE36wyE9wbut2T5aNKdcBj8RoE5UcvqAkBQksqBku4cbrCfN9p7xwfiCbEb4KBNfLxyvF",
  "key15": "hFeLsPHr45Kpeek5eZihxfwcbmDk4BtYFy756DM4dsXwQdzmiK3CFQCm4Dop8LMS6pz9nvsMKgtYTGKLQcjUqXN",
  "key16": "YDuMPqztXBnbXHGvPLcerHoqYZCE4mkqKxo2UefR5zUPeswFLYKdBZpuZaetukTue5zxHKUfGSrjEawen3bZsp7",
  "key17": "21cA9fUfvivqjVzMsj3QfGjXdvTpp9AEo45EcfKnu6YwEpmNWc85veDP7VLwuAhu9yzVZwt4ycjHP6w6ZuyD6TbP",
  "key18": "UFJcBWiV2tNnjQ1KzcoskwFJSSYL1hE8CEV7LdAmZcLbZkodPP9afqHK8wKRkynwNkSQJiZUkXMPUiRSNyE3ZFC",
  "key19": "2diRp7cfCayjYr49FMDiFXoGkrB9kr43CmTKWZDEjLsDnTCAdWjMGzuvux5ESd5Pj1zEitJW4Aa2hKwxP4fDSpdp",
  "key20": "24VLNKJJQ5vwWUDDaN7VrQfdWDuEuHzMfVwmGRh5LGX3Ew3ypdb9dujFjGquQS2P55Dup7q5nz5JshWnyiNUDv6o",
  "key21": "24gcNeV86wVqFLzN3sJt1pjGAXJZZLXDfJPwnSEpHtUZ8RS8kyvxhwHzTvUzDey57QnFEkHDqdYJLRZb7F2D21RR",
  "key22": "bsJ5Q2UGnUPk52aoiXD1Se6UA5cov5oLR241KUMaBj6Gz5jpeuQxTVcwc3USLT82JBtMnHzLNDjAHPqiVTn32Hb",
  "key23": "369txayHW2UH7Fv353tkyT6aNEGrepPFGEoZK8V3rKwVGTfgohLL7FytMdTDUebdm5xFe8qihxyE7zQY4M39PDMi",
  "key24": "4sZNw3LjDvjvGNTvMR9cXgqJX8BCCgpCJZKtuMfzwi9HbwThG2SWAKZX7WN8HrDpaDAi5Nc5EQSrrKk9hK8KArvZ",
  "key25": "5UAeu9cPMavuV1RpHWCwSdMe195csZBwwMFFMhmAn1MmtHarsnr5ZWPgKW7XXocNc2atmcdC1wNFiXgk1r5myBc8",
  "key26": "5NstnH5eqycBbM341yKQ6eVwHzukmfWcZx9wgFfHe91cxgPrBRXPFt8Zdsu9MbUDBYXrdGinYnoATmHtmrTfhe2j",
  "key27": "4g3nUE5F2hepNLKPgwi2xo4inHxzD8LrKRPFYcfhngarzZJkAakPpyNcJYfCNixRU3VgwugqqexRKpzcCgcCLjkD",
  "key28": "Yot9SqHAqZpkY3XwENEfHd28pcGU8FpaTnZh78YEP1iSr4wcmUctf8Cn1Qc9TRCpxM3enmLftuyPWWm5u2dGjX2",
  "key29": "kLhaSZVVvbsYkXB386VqMZLi8nJhaAmQUY64FQ9LC1NQQmiZhe15hWmFfHT7Wm8X2PDAPUBNStx5Ptr1bDXf1Kf",
  "key30": "65Hd8L1KyM5yimzj4sj2fScs8LHEDUTB8FjMmdTkCDgeuJZq6PRo5LZWQiUHz5YXdc8gfLaNYYdNFiaw7kpwEXXe",
  "key31": "uBrp7WiLaiZrkz7TT4GUoyAo4vMA3TfsiBEJUBatsJqq9tR34xwnELgDmrNbCooaYDGMYdxdXxZCmKTxK847ebq",
  "key32": "4pNSzGCZV1j3FqHkZCTvkMLRd8xEiG25wPtn1hfVqQEfvEhgEJ9rcY7StW3o137rthAq9yrpf1zBtMooGTy8z13w"
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
