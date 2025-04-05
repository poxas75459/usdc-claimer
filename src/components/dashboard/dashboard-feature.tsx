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
    "2Mu41yMsFYFE1svyS9oE3Ci6suesCX9yaxrg1ipQ2RHpnbhh6wfs4Vi39pEbcicbTTFLu1pZzFQmrnY1GNEv51s1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yeGApEhuGrPb2nzozF3jpLSkrhwK2sJ6EVzwqKUW2oeesw9kdbKXFJA3qk4vvoT4KRYsxRiwGet84Kf8NDNkbzC",
  "key1": "4ihijmk5WxM1Z55rQokPrkARbd2sKENHyKNp8g6V5A7VjkmEwascedWvyYwX5c5Mbb7WTEA2h2mCJ1kEYsWiiCJc",
  "key2": "33UWYUxZSgtPs8a9PRux1rD7mXpn7eyLViRHGHZHdpwYoJiCJ7HVdbcuXwHXeaApmhgvdV86fNVnWzpSk41t6MUG",
  "key3": "5QeMM18o8FTkYseNCz9w6q2GmfVhTcfVAJF5Xwpow8VMWWpSMAtub8b5VaMorJhDzVpwqvTKXpvZ9DzDc89ajoys",
  "key4": "4QbFH8P14hp88mZ2TEuVjy9tNxkMWYcVbY96yZdJ2eGpdWyXqgRuFj5rePztBX4uDWZiXUq5xpQNNiPX6MDeJC2S",
  "key5": "3znz8eQeTQyGJSXG3a8B9itF48byXsoMNRJVh9mMT1x9YsNiWgDojiv8aXDy32NwwyEpafJBAwx8W5iT6oxggSvh",
  "key6": "3bfS3ZpG1UqQg7CpDhgfB7rvwMCDXFJtE54hZaYnLJjRmWoFck7LXB9c68PagekgNdrU2Y7GsFeAPTSJ2LvzHQXD",
  "key7": "ZxqaLHs7drrug4Tv1uBU34qbP6U6qaPuc5iee4Z9A4CYW1LnLyJe7P2DmnZwnF8XdWeLzceD48bsTmTGxkVhteY",
  "key8": "miEUALHV7ZPBPpSWZt5FMSZkJXkdNGWfSGbSWCqZxRnG22gmKtqkqLuqL2V6TSkjYaaceiWVuSbySQsDwnF7d61",
  "key9": "V4qNbGE4dt7d9tfSmU7U61wPT1KwKhw2xdnGMj5TeiiEDPbpkvf76db3LQrDSDFqzSrfhQK1MtTrn6xPPx83nEn",
  "key10": "4uPsbwAEm2Ah3Jb6mGNN2P83W4M3Q7DwPRupEatU7ghJ2ANa9pG7yXyBkPDMbZ43WYzZBJY8ky2JjGaEBFzkV7Ca",
  "key11": "5FZgnHN4VEsHeAKNYiatficSM1QUxGcErCTo5TQ9yAfpTHVMmyJ9YofA9pETDrcvgfdPpwYCvCPQq1v6oLtn7QqW",
  "key12": "5RfuMWMUKay8rBt182FyP3G9FEX6MDUrmexq9Nh5gfkjSgcz68L5FkBBL9MyeffcG5812T5QiWkNkx4xaxLGaV7i",
  "key13": "4U7CqwFwJXjW8psnnuacb7d9DiYG7cte6nNaYa6XZt7qw5XHCC1voDXEbVs3FrSXJVhWnXP4FuTNkSsh7Z4uhoP5",
  "key14": "j1kQhSKm8Yk3tS3EiQqPVxbpeQnmpytagrA5nBqG7bhZ5FZFViwq6pRYhYkcCgMbqKTEsPUu9Shm8EQpSV8p6V3",
  "key15": "5DvVqMY3Ap1Ft5D9YNuHn7K1MK1zy6GSyNUXgQgTAEgLSPhPBcswy3snh9e7qSAy2SG3Ga4TQnCK7NCXYeDijaZF",
  "key16": "5wdmb33JHEYRCcnDAMnaBRQhWgqUjMESWehD4AZrFxyDxBSrFjMaZSHCMAWBGoSgak4seY9zyCqKRmfy9fZ7azdZ",
  "key17": "3x8g6qc65QKLMedLLqeEgmz1jdFGhutg1HCRfPfa8LZKS9K93Hb2vo1gsGovxuT7JCKJfJ4V7VPdgWGC3JWhC5vS",
  "key18": "4oz5Jr4oQY3BaCuVYaZWSGpcHDQqv5EyMvvHSrWS6X66vzND7ycyfJdmuDyTTpjVmEkLhuLq67QvRZbs6FAYHExs",
  "key19": "5756xWGMQtNDzNKAvvraiLFCiQqvXB56L3KVwvFEYUUnXjH2wXWsyptCZd5uQPzqEYug3wEamYZEt77TnnW3oyGr",
  "key20": "2HLP3QTk1jbMv6V6v3z6Yv52k8M5TLXjeEqpGi6kd134rwefkKrzhhwBrhzxXkc2HnpHBuQep9W3Eft4yQmVXhm2",
  "key21": "4vgkhpptsCP66fzoCiQN8jvnZUnHDGXcuxeDLULEYGEJsmRmQKHE9HAtS943pmqMe6ErueSDskB5eHmkcerYBUzt",
  "key22": "2VfSdQYpYTigshWpoHmTweptVuwm8YLaCKhzdXYPzxNtKSg5kPbsSSgHADPQwESYEnHxRJWuPKU7utBVkFohxyB3",
  "key23": "2xqovHYJuvL9Cfio2fEDFUrW8CFh1XWkNFa5mJzq22F51q6sbAUy8SMkD1Wr2d3in1bujBj31EvSKsx8U9bWWotj",
  "key24": "2i1eaFQ1BssFejTdnT8yV7c8NqX6ezq7oUuPfNwf3NWcYsufhjGLTPpkyLgmUPmaDxRjVEYP9c6mssHeedKgfbD8",
  "key25": "46mZVHv9hcVgHi5NQr3PejSA92uXPEkWizyR2ruQZK6KZczwgu5xojEDYh7iGfkuqYt6FrsTh5r6dRAECdW782EE",
  "key26": "4J4Gwoi21N39ww4mvybqZhCGJKgQfALwqBZiFxtcs5YAgUmuToQfiGx8s29vj8Qw4CDFL8LVQkZSJCHwyxpCojyd",
  "key27": "3GaQjYYbuhjitpTCJNPoJ6xdCQ2k7ULsTWQVgUMUGNchSQoGqoMvRsQKczkFMFDjqQz9cxiwgD6BYiM1i4ETVow1",
  "key28": "ZpLBQyRQZF9nnXvPV4h2c49PFVHwm9ANGfYxc4tjTwzvFpgZqsx8YbzcgPXt28wdtqfKyspiojSPz3uE41h3jni",
  "key29": "46oD8QW2gaY1ksko2Guw9qUrb7W5u9qiGz4AsgcXyT6gFn3huJH5DiFWVpvD2ERBvTCwbNSLiyfaLhqRUdoWexHs",
  "key30": "41UViSyXwaYkkzTtBaEedDHrDJABM38YpqV2NJkCnybPhKjwFjFKRVYQHDjxHFY2puD8tEVzJJ7VEPMkw7dJV1fd",
  "key31": "iVHcNXqnjDmvWv8gvea4QPiW9yQitbWvSRcjifdsinMB9vDqwgWhbAJ5F4z26TQGkomGAy81BLxvWTZEZPdsRhN",
  "key32": "3mxa2kNH8grJ4oXx6us9u9Zy8GqfpoiBxvgd9uZKUbt11k1aSkceK3NtpQ4L2L3V9ofZ1MJKZTpcuWh7VGYbxJLA",
  "key33": "bhrkqdWExedsij5SjGh4XekMS89uK49LX7DZeTxUEBcXBMSgqtub9WU1EXCQ7DdShsqbXgq4656thUwre155tNS",
  "key34": "3NjfqZs2aJ8qqWfy3iti8JNd3mFHhdjVgHERBvn2NsaYriY5WVc7s5b7crLVgV2Miok6exU5XmbS9RnuWAvEpLdN",
  "key35": "5duaZYr7y8VkBGJv3EHBSkLD431wLVvTDhhLS7fmggcK4sRUzxpnFQEf41Y9dc7ViBKpRdceotgGtsiyrNbGJttm",
  "key36": "GPCQjhoP3EvczdBjdUQCcxzFdnjqwiGFSUpvMvbaYLgrYhH1qV9HMJxXwdiDqVMzfgLXpQtmbidKRksCV4Gs6XG",
  "key37": "Y96E7F7qP2rmGwTviTkW4wvJGsz6iTZNbuUd9ZWjqTBEjfPpXuwrgzckkvGdtPLNvMzS83FEHBgsMD1qxPd87kt",
  "key38": "xU2dFgUKVCPV93AV5RxoHMe2NSv55DaT49vYvECg1H98tHS5eghLpkZnu9MMgZLBBozww3ktZxBF5Cgfjs1s5ve",
  "key39": "C6dyMt7yZTyNsd6uZwL8pf6YLStxYMvS769qpkzTE4XmeYA16UwuXzzsbLR6BhL29fjumEdqzfcmMUduGbhhHQE",
  "key40": "2AHBUGTdLEcfKPwKZkqipUzCAT9a1XuqGmN81seuuPadErSsycSRxdazaCeqiYVLdgC9CjNdT6eQeqECBQ8H8nSE",
  "key41": "xHvQB87oXXWAwTy5Q61PAm37ZvG4KEmVLaGZiKsTdDsvSgy1ZRjKB9GZoPjqehMQEnm6mQYLhsNjJatSVNDWETH",
  "key42": "2E7Xyc4JEHWNF6u4sZT6AwnHkfytzpht54SdNQMK6Gg1TqASQVm97mVkoohJ6HRr5yU4wKS1575F487WQboj8g3t",
  "key43": "5JrJSptM417Pd4FNVGcmALHrB5gs5twecWSoLh8AKy5xutCPDZwsRKqi4NkgPSt2LBPoA62jHXZXfBLvHvBT96p8",
  "key44": "4V81FDmRmqMMCA87vwz5jyeZsZjCcAjFpih4tNbSdrChdejtE6rb1oGHcJe5Wph9xF9zTpefM4tZAboDP2i59zq3",
  "key45": "4PDuF9NEArYbxhgYRfzU2RRz4TiiH6oE3bRHR6acqAvWmSZToey1AUPML5Dh57m4wHvBW1iYLVgXbpbfsi3CGMVa",
  "key46": "H52exqWmRTSuoo34mFBz1shWeUETmXvLuE3pjdsfKf13s15biEgY7dFDJMxwaRyuyVACfxiXZ2xEamNJtMUN2uD",
  "key47": "3wgLHUGUo2qDEgUsQDMTsBSDkxmLRGmppgzpgw91g6W1gSFMWVh54ZMZcgPrX9NiMZmvd4DmA5hdMCEWRzfSd5v8"
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
