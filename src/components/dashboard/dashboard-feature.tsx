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
    "5Ye8KrBUzzJ1WrUQKpW6fqzBLubDwiVVs74NsJCCZYwj3xDeAHXN7Rvku6nPjSPTzQREXruYVU5ENvobKqzvRFmo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mCNasDFPyU5Xu3o2Nmexj9sqj4UxgtRfgkcxXeNh41AGdjS8BvkKc96QZSk6N68T5VT56NsXiBUzuytRVQamYHM",
  "key1": "23UNUqwtdVipJnGx1FF62KdFqCV7XrctDRc2kzuZmchaynoLWxg7ejfXbM8ABsRPwZFXdCZJLxpN1FxVGx1aj2Lt",
  "key2": "4wHjJ3vBjPg5wSG3KohtghZPoPoSxVmV8a2rySxppQmc3CNtZiEDBLKQeTPNGs1EYwoUuBpxRTfmaL5yYRYJ96zb",
  "key3": "3EsgBQB8gzDTfsvb7Bjqo5xNhhw5CDu6VBR2dAguMeK7UghoQSdv74GZWjHteybA52zcBQXhuvqdbxS6bKVoUiVW",
  "key4": "2NsdTGqfFS8fu1mQDRpe6hnTCDtb5pdDgWLsak7riHo963TSTmCDS94fBcDUbXwLKcckDpXqtY1H67mJFbrxAaZ8",
  "key5": "4ioKMRSAV7Gvmdb15p6M6xx5VBooVwbRFVhgvH7v1SwcoNDEJx7wXso7S1FrgHaN1Mj2wwmSYTaXizCrxfKKv915",
  "key6": "xoigZufNtMD6SgRjvfdq8oGbV8nRB6WCSxyC3PrKVfh27HZnU9QdKjTqQNKBB5UooFvC53RF3zwanRcdJidxT3s",
  "key7": "4fokd3CBq9aJwHa5kRCUpVaUeKfAcmNQZ41CaSsmM2eNSwNec1EToZN2bhzcCrXckZ4KMdknQPq3L8TPrdvMLHbE",
  "key8": "4thnJWAmMCJQdevSFKwCrSZeG2gopXMPgf7MCsb77HcnXKKskujY6TW9f2QEhqYAqw3nqMomPEJQqU4Dc6yLwhDU",
  "key9": "4YRj7VS23mevGxKZ4kJ6MxibbedyGHaDDTLcQY3Y5XfReVKA3imzNLq1jfhApQZb2jpx1NxAnuHhuQYJS63V8ezx",
  "key10": "3mbrDu29Szoku3mYd8rtHU8QC667YqCtcinojowZXDEStjJu1NNL9DtAfVttEEuasAHvPF2um5r2V8aRSXdL2vk4",
  "key11": "3zuqbZ1uqZLC5dpfoWE3zQCy29NaS5JxbrGVpvm6KfVwdrxhzLw6mWdNJiadjkeRnMhVS4LQwfi4ryUuxH67ZASM",
  "key12": "rtY6QwbCGeLwXh8gqWQHrkccXkYhZjdXWnV7zzA1GgrLnT1VGe2noqPrCBzuR4GYzPBSpzaMfu85g7fkoqBWFR7",
  "key13": "AMdPWBQXavBUBBkMZ4c9cBmaMvJPxGbn3K7JFZne41dn76Pt7NXhtc3HHVd4GWWagtTFuDrnabKQmumWfZvqypv",
  "key14": "3HYvrSyTpY7uaRvhmLwy2Bm9SNePM2EAa8ShTau8WDcJGJ2gm1zN17Xzk1m7DBpu5qy3fjbnWZxKQLuM3EfcqZem",
  "key15": "aKf1m5rayHUYLem8bR93qpFAzJik33M2u9cfzqQETkf6n81anDSMu5Gej8gEiGCx2KpTzrXPMF1Lrbb14kXWju1",
  "key16": "3nU13nxq7YuonEPFf5FPCEWEU9FqhU77ushrHEtYJTBwzJ73GX2fMQCwzAWQqJTNJxP3ujeMYGVR2t7BA5Ds68X7",
  "key17": "3v69KB1B6wd43owBkBAbSLx6kJYYrQWbbpTqaYEAyTCoYfFrTw8GDPxeYEsLdoZUtUVBjTtkPqR5V3AWXhNJ9ejj",
  "key18": "31qMn62zL2QfhDUakBeD6TurRDGhYMnDsohRrfXjGBLax63c7F7YeumiP2hyDmVfPGMHnAsW2PDT4V99z9yPXtyw",
  "key19": "26mFzeCp5JqqUiQzwi8BAtSsFwnrArNKMc67TX2QyKHtvZzxBNSKZKqwuor4LjQEQT5npczTZ85kV9FDxDMiDsKw",
  "key20": "4BgWhvXa5jCqxWYRmU1t3dDFvo8Hn9Ycvt8yJYLJJ4aK7YjgC6HdwEN4jJDM2ZAU6yDBpoSM3pAdtMuWTYTpYiaT",
  "key21": "3u9MpGxzKZcvLDuYFANxw6iu6VHmxDDKw5vS9L3VbwDn3okaycCQaYQ9kDWRgKiJCFwxAkyfXyQcM8Qe1f8TfFUk",
  "key22": "4TvBwf981Auhwx1q1DQGMACiWVeq28KQfGPgdhdUB3wVgxcvXCkdGGh7LkUnP5avT6GNct48ZXacKoWH5QR887WW",
  "key23": "58NzP53RwTHWTRP2QkYtLTA3DAKFJfaBfZafYKP7WyS2YFA6PUEDewXMQLUVQwvzfp2es93H5Eos1BTHA9H1REvG",
  "key24": "4UfS8aFHtQMZ6XjzndyD19rKJDhExqgqannL9T2MDfrWAW6CD2CZG7VuYs3eUVWLnaU5wweL3WyNSfEyDzCV9H7d",
  "key25": "R7rRseSVAJ62ZMgrEjerUdgBEfDJgkrHnn5PWdNeVkcZyST4o8yVpq6TmJdmY2AzERVEEZmyL7BqxPnyfjHSEJq",
  "key26": "66XuxD2xzNXfoFp7odY5yuZm4fVEt3vcitzuq2EHTdp3m3LziweyctEGgyHkHK5oMhT7JK2txzK7LtLh7Lgpjb1Z",
  "key27": "5WsbtXWFfQ6ZqPGeh83UiPFJkd2txERryWyVDqhxin6pQ46yH56Mq2xVTMAKKxY7dWnhi7sdsumeQnDwSipmEDLN",
  "key28": "qQZh61fnaWRbfvajcS2Q4htKpfePhSFRGQ5HvCMDx9yhx2uB9qKNn9tq84BLPEhjUN7RKSquQcEwPw4ApWQfgRB",
  "key29": "391HbFdNjatY8TJnXEvAgmLnhRp3cFhTfFKcdu7jy5bSo1rT5JozRG2bfesiN567CwV7frnTiZmWdpvPJnGq1RL6",
  "key30": "3BvqEkMK718N7Ro1gm2QEYSL3Thve5gvtGY2mjv5b5xx7rPLjYcahFeY3cDrCTUiA5LWZ52XVfqDStB9UphtbEzi"
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
