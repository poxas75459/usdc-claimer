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
    "5G43veEhTFT6PvG5zZLwWb4wAMtVdr3LNZSuP4gLp4YKUGhDDknSrP7pdw8cQbcTuZE6yLc2WKVXBvLXYAMK9Gzf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uLozKLNKgMT77ccpPXg1fucygAYtRK5cqKQxxPqhpS77HnuoC9cvhsySbLQLNfFpi6k7MBUmTzkaTcEiCLDNT8T",
  "key1": "5n7GqzFBYG4JcAkBeawauTGhtWHqJchHbvTHEyCRgv9WsaJuaikMik5FbySGxpJ5twGpzHfgTfZgBV2ntovVPsBU",
  "key2": "5Ucoza14Px4wMatPWhyVYjvNg9qYm8VB4Pm3eqc2LTicAaHtGSLBpWp3wcqkmRUDcxQ3dx11vMsjRvGoeGHNNQd3",
  "key3": "5vkhSmHYbe7Tkh8vU84WxamUdK2VtTXiaQMxtdm3mJFkke2sRDfS8osv29ptMcwpfyWZq9fYUqTkZt4jsrQyp9va",
  "key4": "7WoQJGGHZedkTAtp9otctJe8jQ913Fu7M77xzoBwpCowNtkbydkKrXsbfhbwLVDDj1AAr3QaxC8u4e5t8nhVrvx",
  "key5": "3xLswQMZASTkwHnRk3pWKAkyd19yJEocNTX2fDLyuQUVGthhCJFMfmdwQHrvNoiTkdXtALrz2HtZpJtTk4qCi4UT",
  "key6": "46gnLvm3qnsmTGKp2QwGFWiS5iQbrZuvrDk1u2KEnU1WZtQrjwgJ2JzawGpw4ua63C7jEtRDKjHveF3e5FS9dNr4",
  "key7": "h2HDGv7P2gWfQUf1os9ErPAoo2bonZrZzvdKfVxwX6HDncZ4FLLwpk6wf9cC6WWogvVzEYatrbwnLw9BVUXxVr2",
  "key8": "3HJxcUuV9vFSyqcRQXbMNM7HvxYbWjdqAcFMiw1QsTBh31hVkyhpxh7DYYsjBn1RHekEZWJGZ58bdfnC13rL4wCG",
  "key9": "kdTeD8pMAkM4igmFVKudugPih4j5d3jFNdUagFW4n3dLPBmi3Rh4w7B43tvDoh6YyKipSw8UHysSuaVkc4v5uEH",
  "key10": "3QT8WoQiYeww7WwF4GdbnTwAcxBhFQzsDuHuszshumAFZh7DZ99aXmgMNRcaTSXA89m9uJ6bLW2piLPsUW6mo1fE",
  "key11": "3NmxtDQ8KcWSKqiACgUy9fg23mqzP4ogJhWstR3HHMG55hgUXLn69MM1Y3ZfRBmVzfrhXgnhBoax2uMEYEaKSZyD",
  "key12": "5YDKsmH9MUDvQ3F9K2mr4wBg2va5A8uUfhynigda6dJHR6pFkWpZjGWhTyJcVhThjj4WVin4Ud8uZpHX2mo3Ec8U",
  "key13": "4H9eqkknw3n5QEcwMcN1n4kqB4e1xHdKWFg1x4pTprSTLQrds1RPYU4jkCXEdCPtcAvdi5KbSVrmZFDyASSR3a6x",
  "key14": "4Kvj5eKGHVGHtP7aYmDAcrJVcbp7VnBYjeh78AscmEJfDqcsfYUNvJazeUL2PSf6Ywk8ZFCoLkxLgigr8mkwzvw3",
  "key15": "3vBmM4LWeZZctAND9ydju4azEjgV6DEUnudeHfo2yNaCEMQLymDAep2LztVULNFVCFctLzVHT6TcPK97UAHXiqNK",
  "key16": "3qdBerELr5pSmnz34t5dFRDFhv1w9ZjxtbDdCpRPbF9pp1aT3EjB2ezJW75hyDipnHrUmfsqaqPkDt7rPvrvChsZ",
  "key17": "32MNQK3vDxJ1vUt8gHWmcRRo5n4K9V5cBaFRRcysFY3ESxM42eevyMMYvMbPhawBEjcyui16K5ZVg85Yj2fUM71H",
  "key18": "2BpQ8Tduf5BTm8PptPNjHLw3T4jbTZPkogjuduJzoPrCQViL7PfZSDC7yHD4YWAxF9yYKefPh4AhmpnkBqpgk6eD",
  "key19": "53h7YbzzU9wppBBwXAh9FbgE9JrvrvgcSoNjDVAspaN722E5wn4ZvK62VHQn93mC9DhV1BgFpAijDoV7Antmy1C2",
  "key20": "52ZD2FVcJYbTtCwNksJfZJQDtXxMsQtWB3EzNvhvgGfz4eMVN53VR1mdXpMFqAoKCBMnQwP9JQ1XfUeu9diFDqwb",
  "key21": "Anyryucs75hYnLoiTXdLxbZzrQWGWumXHii8wG9wFmVukwwgMzQP8416i9dvZZrDdbLkJZpCt3acSCHaVZ8MLFf",
  "key22": "2Uoe8cmmLU96gFJD9J2N5Wp4AX19oHK1JjusHbNQvXYaSaMaMQbGQqQc8y14c21vHZRvY729UMaVvgc7FFVzgPjz",
  "key23": "wzM1E8YiLz7Y94Hth6f7N5H1fTdfwKxVN3gFChd378YMmNdJJuwpud1PTVY71AZgAeNVvM2jmpiPwVHCUXKmppS",
  "key24": "32AJF1mbMC31ZVjEciUcRZHC34CFWWJDpnReDNj6xL59FWM8yt8LqSpc8MjkbuiGmGB4A4b8S6hzeoHqueLUuyHQ",
  "key25": "3cKwFtvVPwi1KFvM5ppKUpH3k7jidyKG6tu67pwooTm3BuwSKq9ZYuuq1f9ctq18qinFzqo7FGH2Je8otEVGvg1z",
  "key26": "4c4wCU6LHA4FwKdJbZ7YWypAFjBzCtpYJotySAJyUGyd22jLFcisHMnnZcMp36xRkGMWA9Mr1noaXMhRnKpLe9CK",
  "key27": "5zCiM96ssayoe8Et2Sx9EFy9LCw9xxrQmhhPbLMGRtMRPuHkB7i9cYww93GP8gK7Bn5grNLY1LqfozoP7C2ziykA",
  "key28": "36rMHnUmUJKjqHWTypkMVwo2hueKr6znUNvWBU7x5oWRAf3Hevh81iWiEM7xSmBBfpinVHFpcsj4UK1Bw2KSxGxe",
  "key29": "4oXid58bauX2yam9B23wREfqciNYFU2giQG6FqrZtWQP7D8NXHmijeJ1sSbmj9sjBn6PxJJhzqfuWGgufagtWSJK",
  "key30": "5MRUq8VYrJx9mmHwUorprbiM9YS6y85fmFN9Sjkcd315aYfTDLwuFN1XvmQC28TMQR2jmH54ymya6oS5qz8gRnS1",
  "key31": "3CBsUZ5P3quaoyUxPUHGAFT36Bo5KFtRW88t3HKpX9Vd4hgHbtPcye3EQ6YegM4Dh7n1gogQw5Hzs2XfQNF2yVAA",
  "key32": "5cX1RSkEr425wWGfKndGhsCwbJKXXf7xATeA1LBf86uRTfFJXx3gtV4E695xd96NG7vx7LmY2CXgduURWE6sFvw2",
  "key33": "5ZwU3hps4bnzcci2GkbsjmUN1PaxPNrciWv9pLsdxV82PQTTgkdwfLwo5gS4S48H4xNd49yJQyQzQT53yHavnFmq",
  "key34": "xzwcnpsQfUnqPdTx1dJ8Z9grDKU4KZ4oitVs1DHr4eehxx6sJu72cqGY3aVL31bURqqUG9Y4m9ieac5qHdonkjn"
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
