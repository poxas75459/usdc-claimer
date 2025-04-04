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
    "4iGREoXshVTiZnDny9F35h5qSnKwMfUThDNhTZXyXr5j6c38E2k7nGcM38KrQ1KzsDhdZaVnu5EmqaUFTDLgPgTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G2E5RpUoakjzLMLeqG3NgfdWP7H29bD3X3vpg6ireUtmeHmkaYYyf67LPHkU7ATA3AARudiqte5BxESSUkphb5Y",
  "key1": "3zKaXQN6cPMZjbE6pBWiKeTJGUkg9wV8L9rbXe8KFP9cHWcSPGxdQFwThkPpZfKvxEm7xwKDWUutXUmCUAyBXYNT",
  "key2": "2g96THe7YvocQ7YAwLJojgVnJ8yDngbLFHv2yoxwvGFvckx7DY7tGzFfTwKFTJRmgJndksAexSn5w6jUErxQcQEe",
  "key3": "3THQYWfYaNQeMQsXTzUGGZBNjummopT3F32nLnFEPRTCtjGVzedSx8QA7E1ndRsAAu5MVdHjksp3GGeivvLjNDKz",
  "key4": "4Jbyd7PzmVkHhR6T8PbVkG7ShqpJ6LhUKhBoiiDE2ZzV18oGXHyGeL5f3q4gEK7CAXoCv917eGbRRMm964BRY4ok",
  "key5": "52oC2fJf8xFx1fiQe28RRKcPB2iUuke2DvAStnKwvkn7QD9TGGcZ3EfceodvZYWcFktFx2Hfkq5TMZrP4VXNNxRP",
  "key6": "rp5V9iuSqcKgN7qsUkdCurDoBpN4ewxjJi9WtJUqZncMAoibtmcYECyimJB6MDQGBYqU4ZkTTN4xMhoDQpsrvHJ",
  "key7": "4GkfEwS3u2NXSexPgNnsjspA2VjV4dwMzB1i4Wk5L5LCwjGKn82f69dNCpLeTiSSEUzegiE1ZZUk8Fj1moXs5k7z",
  "key8": "5ks6HufgQ61ddDsYtipDLRotdoimLzhvCStptAYfgmzGPjEencmKMCEPDS7MceVqb1nhjWnd9CERB83j2JmHuLJW",
  "key9": "FArdQ7kUX45FF66eEPFq8vFq6z3AYgWfu4uoWYMKTTo4nFzzgmeBu4f9X9WJid5BJnoyJg98kxN5P6aguCSw45M",
  "key10": "WoBUEcF3SP3xQfJPmfQrS4r3hPdERJBRqGxEqH71ur9R6zYkHq3v73bBMuhcxeG2VET3nS7A1o35UsyNPaUmhWS",
  "key11": "4bnWLFePdq8prW6xbHW557LiQ4No1VsETWDz3q52ScrxkJFRtZCbuD92Y1QcvvbBmybmdFLpmSkAk7fQHrimBKLD",
  "key12": "4KzdWsyBSUYS3baKyCqCAsFgF3xavKKBALGrQyXvXmfBLTtRHXnJju8ZyJHTTk1zTv3PbUGTq9bFebuJ4UHaWWGQ",
  "key13": "4N9KYSMCQXzRgLwFAZXmwArfZBGj2oURhhHeaVAMCo6s6CiSKFjpZVhZizUYiVieSpxHPM21ruR2LbKucZp8JbZS",
  "key14": "2Yv7PX25y722A8k2KwkJ99ZNC8FRJNb84kPDQvMfD5cwg5E8LnvixLmV1kQqhYwhGgnKeysrf3RNYLqCZA2hP4zj",
  "key15": "5hD7f4zPoNXetJt91xnM739LkvAc3rgnZhNmuV6DHV3R4zbmbnudyWUqnxgpZGZuinf5NGkEknHEb644hR85bW5Q",
  "key16": "2msbFhoL3fQpBrh59RGJivvTnzPcwwG2PDMEmL7esH1oGwKiRMwMgLjYrt1LBPbfeSAFyx1KLaLiYBykUZoChfFk",
  "key17": "5QYRm6qqNnoVC1etLStsWKDaFAR1La7FdUC2hgMk5myFMT9PveCo3pH38KVykYym8MuTpQ19JjHyCYPFFjHdSTUF",
  "key18": "65ijSTTAYNTfQmmBjy6qYQPwGVmwPTHvmm1DmirnzX7symhPdYUmnmaadW22NPGyEki6kFbdFDKP12TtrEq8PzEE",
  "key19": "EoQWEMZJ1s8CGQdE9zYKB1SjQbct42cJv2YQYU1wAC1zbSZyUrK7iYrLfVV1DGh7RR6CNyKN4ry9cR47P82nntw",
  "key20": "27MLxQmENW5mRgkLAuRxWBzkfdR87QfaTXvPbEjoy7t99as8Qfno6XpQfPb3LP8U4Kr7DgCZ2oR8sSdcgDDLvaw6",
  "key21": "UKgzhC9kkSnoX9ksGJMcWJydxZxAEGHeey4Rz1nRYnPP5VAQcbaHrtKxHQGNJBfGsUXyMQp7dw8TBmxeh9mCif7",
  "key22": "2ePRfSnwaETcMJvSMpUjHBKsuiER1bsaJ1kcm3UvaREyY9i2ezKkGtsurwwRYpneEVPYULc2R6Ho8ALGnib9r5iG",
  "key23": "5hgYG95ky84skbzHLxcxjpD9EMBuoVHUSgqC22vpX1ZvUKysLXgfDR54Foi567tmhYfsv3AF3CLmGuW2XR62x7qi",
  "key24": "4CqwBz3t8GcYE4EZcr7TtPUfm1ykNTyPW1nn7VGJynKXVW2gdJcb6vsu9F9FAP4FtW4C48WJRTqXi54TDVaMV7GT",
  "key25": "3o3a9bJKatCHGxtR6RZ26WqyQxrr5cCzFZXfge137R2P5oy19avmiRW4QsqCkw1XPPgEdvtFPiNUMS8c3uEnSKNk",
  "key26": "2M8kHjnnh55xEwEt2qH1Ud5K9KHDQbS5yjNK8fJEJCPcd6Ri8J44NHpxkUJg2pSmeU9Mw5SFQUrdcJ1tyLzet5Av",
  "key27": "3MKnkNK6wN2VchXbZFRWGb4qbYo58iZm4ywWQbepHxN5jau1BNi94STk8AsoHHXJ9Ty4yhc4kgmjJwLK1WzJCB4r",
  "key28": "4bKGzkjA1gsmYKg9dLbanWjqMk3fzYQRz5kQ1FK8new4FTsPMhLXpDs7E5J5m8cpxM8DTE9KoCMAJXCbn655Quw9",
  "key29": "4AkSVfQWhjUjwTifvfXdpAMEVNEnBWXMkVvvfUv3DPwuAWjXrdprjJyK3GUnGALBdr3LsCFdrP8uSaKx74NjSXut",
  "key30": "21CVqSWBh3PpNDWuDjyYBSSHLE3PHv8Phu122o9ErBVCdbv8JBgHf4HxmbNZhaDNCzBkrgQ8X9FqbWEZAgkuE1BP",
  "key31": "5cHyXDXLV4f4ZDjYMHi9WaNXByCpDLiSN4cSHBwgnJ3HjE5qSqi3Grk244d4FAF6YuBuyxuZAsSmwWGNA4Ebcfg2",
  "key32": "3JCQdpSG7RxQcmUdZQ4LtAo7HJrckPVdcaYefK7DYMQqm4jwSXVeZzNukkWHTBKZ6CcQUHVQjBTBuCotqpwc6ZEW",
  "key33": "NZMqu3yUfTN4o6D3gjHBKxS6LeeFHo4AvgJiP7ybxGJk22u8ByvMbAJ59vz2rvEHDJA8cHToxKXSaULUc4HPb8q",
  "key34": "3uWjxvYobXewPaCzmmNZWUj3WReGKG2JioeQPKfCU9B1ach8mNtc5SPJcx28oXtACD5zewtcRhTF8X1p6GZWoRHd"
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
