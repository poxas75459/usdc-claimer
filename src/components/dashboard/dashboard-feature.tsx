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
    "5UciWWsYkGDDRZVqNrhkjv1nGEKr3H6NavR3HEBiFnGTz45ry3JAGEAR87pXheBzVXgscA6ngLHWS4U4jBscg8TP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e4MWZfuBCFaJ8REazm4Dvz7sgnu31XppDRq9eK6gdB7NQ37RoX2qSjdnePYRPuWUeYnjug4Nss9AGc5ZMUhF1eB",
  "key1": "2TvuY9Gr6LxQdfTmnHitCgxU4hM4rZHL9625YYwg5BbDZ79Wmsfr5qYF5WamP4S92UnPA3NQ32DhNtRmqx4og2WV",
  "key2": "31TktXqpvof4cnPhxtsWxL7FKgSQW1gGXLBtxc3zgKhQhnoyafVSNcmy3qATE4bqLxXJS9fre6ZnWHoPhYw5Q8k9",
  "key3": "fRHYwtGiqsYEyp8vtExwLsBVroQjiNy2g7883Nt1NsXgbfsUgnwRw312f5o6fJwGCSchvL3ayLiMG6oe4x1rQEa",
  "key4": "64UeEqwR5cBE3nq5YQAFvhPHA3pV4azkCw1hF7LB1zKDvTFtiTTrohctzNnTmzd3ib6ZQsJZE4NGYo4WcLQBVWjH",
  "key5": "2MnBf5uSLKqSMRkgfPS6Fmr4PjTsVmZBcxqZask6U9ytosfNhAYDpNBQaJMNE5y1iDQEZP6qjuinrDuZBZkYvDZL",
  "key6": "3aFmZXmwSqqNAZbwaVkGbs4wm6HWPJXsxuL3Rmte9xGKwmrQNj7sjozY51FkpbSH4YJrebo4653UbyaPFLE96eLG",
  "key7": "66os5KWHAkKMQyMXjvDJYpgPEWUdsmMbQHZARLfu2nTZBvnbgt33ev1uc7nWrfZdwi4uXqoKKiQfCZJPhSBbb7F3",
  "key8": "5yEfNH4tfcLKuqKRgkiGRMG4SLzCfbidKAwpRPGkB4rpp93dLMTBKiKKnmXxG11UwzEEdX7U4a4tXiqJDL2yfwma",
  "key9": "3hkKU2bYRAm8F1uypZ253wJQNufCJKtzLRDKdMvkXctFZd6AhZcD33Cj5cTeSugb8ePV6M5zDxsYV8dQzSas428K",
  "key10": "2wxNPr5rdqj4ynjLPDRmKQ9c5YvaZs3CEsTj2tttyaFV37AaDwcYR8iGdRsurb17hy72jCUUyKCVeDHNNB1ZbTeK",
  "key11": "46NtUJRPF6oDsfSyjvBaWxPWfQBZzsfPmGEHGc4GcuQkE9e4SU3CahHxHfXWzBUiSkydGsrgLAos3an2JePC4n7i",
  "key12": "2iSDmDD99Pp5chRdR5e3H9Tkz84PMhfgrf1wXZF3q4rJPPBg9ZAEiMsBLt4sdMY1BznZPpzq36T4jRUynVd16S8x",
  "key13": "3gQwypXq61keXKEBohkHgQaaRAkxdWQpG4nxT6F35EATi2mcwkCnWT9XTDjjs8gRr2c7ngaQrYux8CNby4abPBgH",
  "key14": "55J2s3KTB6kPa6abgEYpz43HkM5xA7hzPRfuetwFFx682cBBhgEXm4SzUeZQjyadmYz4HM2xcwpPhz5HB2xbbaXX",
  "key15": "3Yc2wNqCsmRDF1eke2j89C6Wp2UguQ4n7z9SucV9N4LaBjhwTntf3411yTkADLSquJ32ucbV4KEzTwgE3VQ2yCHe",
  "key16": "5i88fVtkqmr7pP7cgpeBAq5feySwyAYYvDx2j6PCg95kWTcNUtJnxPpvHMAtfkY9CCow89YpTT1BsKdeEzBzN9Fo",
  "key17": "5ibcaoV7iaKuYwuDpd86iWoQAM4TCSR31Qv92KKKkng722S7j1DKNUD2brRg9DA8ChihyiVDL9BUMerypMWEgZYT",
  "key18": "54zsVTGrDfAy3hxnTscuWGj1AQhUGdxRjfyxbgbvFZzU3KwcPugk29Pkmm6uGeMPGo7VUCHgK8hL8kuqX3ZTCq1p",
  "key19": "45mVJdhEXceDGp61hqssK1ujXyUHuCaFFmUru7EwEFs4Nughk25r7a5Ad26nhiwjSXPXKgKxzWe1WuCCkK1YUDyQ",
  "key20": "2W9XzobfeTMnRBzLuTNAZQZ1LZjz8UEPjVyMbKEL6Td5GRHx6zpWuhoequFwkYuThwT8b5qqF8ETKyHhe3mkQUYT",
  "key21": "4FF7DbtE4PRySB332Vb1jGsGAJ6ieccnCMibVRmBnj5F5i4rmFcEFpZTUVV9NXx1gw382X6Q7hkGNxTzDvs14ehp",
  "key22": "4xaRAPLnQ32EexAdbLKzz3EWqeV1bKXxFFmZgEh6RpxCJmbVTGbNG2HHZkergxLxgs761UFg7QAgCkbsCmiEt8xV",
  "key23": "64F5ZLBr5bKGbD7Y967QMiyYvatAXA2otLHstds8RaftoK6b95Jxvduq5P7Uy2cK9TZTpcSRPwM4p7EuWZuWSfDr",
  "key24": "3HqhG4pDvHLyALvTMCsnaw4eM1DQoGp63pKrrhf2G1piqVFVRbytmstV21rhr9mKsswmR2kAvmeivru2gDAN1RXf",
  "key25": "t9UT8FfHPw1kcG8pK3q9gG8Ep6dEibAdb2kyR24KqkJA3hRJxrkh559G4aZMFdsdcdx4FQ7B9pFRZa3kGi3Rd1n",
  "key26": "5FUfC5N7XfnCSr75UfC36QNbWSgJWkthRMA2o2B3TDRZDE6T5eN1rSGtRNnmuBJanYY6Mz4uuM2wa6tb97BJTpfD",
  "key27": "HeN58EuY3VYNHub3PT9M5pbezV4tmn3S2S67yhwZzUcMhHko4MuA3zAMibJnk2oMZvuD8LhNgwytdxK1FtU7kxd"
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
