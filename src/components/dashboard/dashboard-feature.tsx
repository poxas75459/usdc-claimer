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
    "5UjZ7zC69d4AMQnq8KwDtMsEE2JQux8AHpa9eb2tV5UwVWoS7j21h117TK2YRRPy7PHYaEPnWXKzhnnzhDt9GLWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hqwDfxwwrF2AMvzNT3HtJoF3QXTPJ6caFKxJX1uvki8NroC6RRkuYdnYkP4U1nuxQn6GzXYNxNgMRATTEU4NWMQ",
  "key1": "WVomxvvpd7ALDA4XiPgGw1UoE7pg4xvNaSEopKRhYkHUq73i4G8bFoYerJgy4uuCFW8L2DKpz5vv3EQ6DxhU8Yk",
  "key2": "29c9FQzq2c7ekwjqtXduHM5P1NSdDfhHakJiHSY46SX1DavwJsxnHJaHf6mG3aUsGHL6aAzHPuxzq4fgWgJMuvVk",
  "key3": "xvdKbeYV1t3tYfnyNeYFDgNj4NzYfjtA15CC42i7nb9dyYizTUp9VFWnep8Bmo3uxUPRz5G3wFVXp34Gr1awk3p",
  "key4": "4Dw5wpASZhZLXzqUviZo4nsrZF9WdAcYb2syM3QDYyGPecxYd8gycUaR6Xqjorb11zK6KhEmECz4cyzd74J1scFL",
  "key5": "5VJH8q1TPWyuwZDeo8MV46MxNc75ua2BxcQDq4MEDvJbanJcq5zdp7UGnNPGZgy7vmLKvuviCzGSDWzeE2P7Rh75",
  "key6": "3rGyHdbNaawk38gnBFtC3wfzrYS2B2Ax8V42UXcxhVpZHCQn5AL9a81iH7ozJYrCt6ThTe9JrZ7bu51tm8yJ6QzN",
  "key7": "29SddKDsu6Cxanp8jnonf7rcKEVPwfqzGyq86ALG3yxsvoB5tvmggp9eHGm6U4yweRyvyDuPcezP6cWgAg4wqxrx",
  "key8": "2k6nvtHzQ1jnBBVw1ShXx7vAr4zsBkH9Qv4GhCBRDfruBxFbQ5WBTEAzEoTwzY6eVnsUf2oFZ3UMVQCiycnj2L4r",
  "key9": "GchtFHHLpkiTUM1bYFdgPJitfzgPGhSVmdwUXsbmA8jxfNMkXthLQte1fUusZLqoytMzstsFDUv6SYVVA7pNbHB",
  "key10": "3MwmVqUxAV9aTHBo6AKzoJNW41wugXnf5j5x9hNn8XkaECKkHAG6nmeJ9bvjEDq6kmhP8ELKimkiThgRVcBRuM3u",
  "key11": "5FiRLm2vWYC6Fow5C1Ly4NeUDsUVEwh7yAaJLXbMazbHPGygVZrfuGXQicnaCoAAESkxmjDfdRyDMtuiYBYDAPbU",
  "key12": "MwzCh9VNWmaiT1qGVsLfghEi6ComTsYfs1wj8eohGpiwZeohRhUUZduE3zCq1yUrQgrUfrqFQJDSZWTZyabZLq5",
  "key13": "MCkckbJqbk2QKP4iUiCaMKTKLomH1mpMiShXcfiJT6Qv2bc3f49j3Z1Rhzq6WN9im5LGwuQfWwykK8P2BoPGxAV",
  "key14": "wYA4Sm5ddukhViypoRTyKvZEpTimb2Ays1qZ2CxB1HAPi965LWSRQa4rqCeCV6ScdtqTQ3wGoe1qq4ZX7xqaFSY",
  "key15": "2TjsE2bgxYc9yiq6h1hMshocNMzSqP2wgEXsDo7V5mTrtFEYZHyvh1FoTf5Vn3VZdcX7zQeS1SkDbTHe2UwVn4Jm",
  "key16": "5b2f76uwuik9uDB59tAbMLUsk3EibdxNhqWXvr32gmwrhRAiUCdgnTSGCopUEqN5ecTTT931PwSbYxk8RT9uytJn",
  "key17": "5CiE6RZC2yVgg6AYzfALMBMsSv9FwcDU7JypAPVUgG5mTS5ZC2jgGj54p1mqPrFfLn1MQhJXz7Qe18rHDH2nGgB1",
  "key18": "Mxpn4t1rLnNQP1Vn5bT9z9dYmbeDcKjFqvQSVUaVMgciFDXtjN4BvDn2i8XHazZne2BUsvJPzjPffx3fmBKMqhb",
  "key19": "t5hjZXeZkpspkvirUFhZLb6Tf25abbKGFGPKL8oteR3uCvBYdf5fGC6izN9gK3LrEguYRHW59PsWpbyrVmtPt7x",
  "key20": "4dk2TyPVKhKfxfdoKFzGt88NRBy6LLaitXmWus9gD1x7yqZvxxDMqBhtzW9AiLTBPHKGaZhC1KVgd23aFSDPzzsQ",
  "key21": "5s2wPQM6SunQPQU684SdkmcfzyKZvh5JUsQnfeBSoTCtd5esG3tNUUNfkfS7JtsZVg53obA5ZYAu2uBoiM59EAh1",
  "key22": "3ezkf3BvtFf825gcB9k4oCis6ZReo1Ftf1Q71mX9Jjk12SBv2Tj1FJChpmWzo9A4Wj64dWRYim2vQbk4pYSNKSrW",
  "key23": "3anPDo3YyAPBJgP4LoHyo8uvpd6pTprgoieRwAnA4MbdS9swwZJMDtLyLFZwyEq3etmHSKmrESNyx4e17xm8rZiV",
  "key24": "5L4XmC7DAGDGCiEUAHqvM2YT4N5bpNCM33TFLqck9DaavKSyuSmHQvzNwaVc12q15d141MXCoiyyjDitHSMnRCB5",
  "key25": "5ncomrBemaFJ5jDMH7LvgsPNdVygdvAMaA3QPmqF6e9uHNZyTAwsYJo3f6cMjYFfJnuXiHY83ruP8zeHKL5n4Pdh",
  "key26": "3A9LxxUrj8qfZxP44SyVRW9qvkZmf6iyQHTVjTtWEGL7HSBAENC39mUYGVDw6wxvwczRe7GpWrSkNiwvPxk6Y74p",
  "key27": "sDp1apLdWNnXZjaV31Lpd4HoE85YjJr1A3G36VsvEuunQ9woxEZD39GtUh3jpzZk9vdUF61WyBMcWg4h4KvsWKf",
  "key28": "3VnABKYTypZ59vog6TAbPb2b38HuenSX7YUBCs9T3bo8uhD9BoP3tZfzygkK4U2UQjzBEHtszEKwGiNUBdctrqUk",
  "key29": "5iibi9FHxAs97TbiTiYzNcTYpX3KhyyMy3QFXn8rQKea8Go7ArZPuWY4PFLnhnigBsCNPvMsWfm9LkCrxX4KZEWd",
  "key30": "2dxXbFTr4Z3ZKno42PXRBsQY6Trtw58ndq7o4HVTEvY7eavXYSFJeP2h1fpfPuDp1MvGdiDYmBqZ6n1De6zCR3eK",
  "key31": "sNYAeuxJ1BgFAUcFomC87okXiZunMtpZyNZvnjwsvKDKHGXkqiScecv8GvWK1c6hQwaqiuBxACx9Pmtsw75PY9e",
  "key32": "2eG4cU8dVhWJkXWb9Tvfhv6UZG8Pm9hpfpCQ2RAnhrXi6febQEtks6sBYnnF5Ldau4ixNEFzzsBWtYtfte6JX3FR",
  "key33": "5bWwcirkG5SVLV7AcnNawwM5jweWxvef1gtuwZVHFt4gJEfFzy5QaGnLpBrLe16QKZon5ecXnzsTUNYkry3TGEsf",
  "key34": "52YgnDNbVMbJbB5BpSfkqWdkR9o7QJ7hAGbHwz9AvFq94eAX8XK16fAqEZSxH9LbgEC9YiuQpq3E7fHe7id79vKy",
  "key35": "3NR4ZwViuycaYRSCP5FdhUEnra4zJvArWhVaTzjkBBbKtbzN3yvsaK3oe4GGYpcpZVyntKLEiibHrCv9HzdTxnHL",
  "key36": "45SHNuzdrEyFQ1FGDGWazdYjRQuKuhV2FxPPAh6dRmUwMZH7oUowrV6BPbBRFTvzhiH49ktu1RDtzT3L49D8MXqK",
  "key37": "58T3NYddGYVFu4pWyLBHx7kTcdv73oYmKumB6uGhrHkdT7gtRWqUgezDPFrV3C8rjjpFQHMKcn8ojxRrS8EXLZRS",
  "key38": "2MSWsaReBaHmR6Up9sP6S63Nju73VunqnPeKyGZihF2VU4yFAZN1JCy4nhYqBwTHB8h7EU66yeiC8qVpxfxGUTFp",
  "key39": "4FD2N9144fMiDTUMF1yysLxiw4vHDdRi7xhkSn1hgeXaGoUGbbBtyT4Jt6GdJn7t5SLREg5XW4SBdvYPK1kUAgTv",
  "key40": "5gfBLsgiyZe4mQTWUTJiC9b3UrdxSHMUoyAbAccnRfjihXjxpo1PV4YDKtaeuxZvR5RqMWh1T9SntyMTSX5xsTmV",
  "key41": "28HTZ7nd77z6jS8wVshTQT5KAC18Zjrnz1HSQCvs92vWM9Ua8qox71upCCqXKSuGYJrNZ8BeZ3UdLKB1MjyEPxSU",
  "key42": "31gZQDs3nKw5PFVjfVynXy4QwrKd24d4v5xvCykrvy5yDxE9guVBw9WA7586fNdBVFwgcmYhgCH5NTYBRpAVgw8x"
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
