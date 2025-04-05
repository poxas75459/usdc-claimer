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
    "2ijFCZtDJEbYnNqpZ957eh6yYzCB2VY9eXQ3GVWDeDbFo8rba2VdBEBXXQedehuSe2Fdn248Kf3rMTERbRhujtrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wy33MrBxj7892ewmGawamuBhprG29dANs5nT5PUZYxCaxFQe8hjGkENQcoAD3aNifrWCCMxqZjHq8RseKN9BE6P",
  "key1": "4e2naS4XBzkGmaShzvVAucLEcgH3attXSwmcs6uqfeM1aCBAuez2tiCiDX62DHNZp3Mg89iPmfS8HQmzGjUFxmSx",
  "key2": "5dM6LQXGsCPeRp4b4dKobWVZdJKQnRLc3XSMw79q6LDhDwqWekC92Z9JtToMQAMv1UTDJf4J1vYtKBsZBW8AkH5i",
  "key3": "4YmXTrHWG11mtP1iyUUna4TXR9WYxXXA9ERNFPN34VNBPoamnnSKD4tDNQspobtani2cKbFFHCRNZoXw5sRJscb7",
  "key4": "J6n4aSTJub9tzDigEdxdCwsg4eXS8HdYQJgU3foy628YmM4uA7GT6WjjhZr9uVTmfNZcK8SGVvrGapgG7B5duJj",
  "key5": "3mExdcF78BUtDgzBstYdtTNskU4wg5hXt8xX52h2DXb4EjC7iQhQHoUQN1rkcTwE1m8ejqw8iwqxrtjStTdgtus1",
  "key6": "5oD92Z7Et66cbs9iXuANQqRw9k2B4aFCYdWEHj3VVgEPV1emVVtYb2YTp7sWzDGWFcMqbjoST8UneSe26miXLf4J",
  "key7": "2MV833UvcCkMpFiUhzAhtLbw86Fzz8SKXqP4n9cEfgmL9jvYevLw83AkLHjGBztxxb69bkVRU5bkbLnsZce5sc7V",
  "key8": "4h5pXvM6Uf1FaFjdvP3fGTpHQncWu9ky1PAhvqJXHFF9uAp6xxfzG5CU5z9TdwgbjKD6geFZYZuQNCoakQQRtP9G",
  "key9": "2twQcgHJHDfRHgLNbgKnrohy5s1mzBwvpSb15ZF24udtkH2URzL9V5zGRJYjtSyZ4fnptmYHrzPEJWav8nh5uC94",
  "key10": "i2ByA6FYhXw6uSNV7V3ZvF6UqCJs4hLsCfgvoc9mPeq3EZXp34T2ATs2MVyDyhV4xco8JzTL4Ew1KGcHu7k9Jn1",
  "key11": "67EjCZz6zBZRirvoraM6BKECphovRJjHqTEfMa3xroMYJiToAhpviLxWAJDebVZuV5ZfMZirz6tg7BYBZwt2A6D7",
  "key12": "dQUdTbRX6vUCjuC1R78AaPGVyEqaqc323DVjiV3DzXdnqrR6oKJ8CBXn6WdBAFTFBDnKZZC5u6eJfP5NGBywxaa",
  "key13": "4EcxtqVAcssrBzePiEgDQyffNxJjDhj5viY7S8EjPswatMmSGuoiDeHKXFc42ayQRcN2YdBjAz2sSuL97VuTcaZY",
  "key14": "335GoNLPctEmCoACzpPwaQSQ3nATG9R92xoiHFj5RbcX65gF3aX4WZkC9BtcMvESe2wcefZbPrFrJvRBQ6UFvWqM",
  "key15": "5vv2YkmNaUo25tDnzD2ZQs3AtgSTXCvKpde4fbL1NYBL4mDJuYyK57At2eYCTT9hAwtA7ptqxq7mpk3Y3wyrugNC",
  "key16": "4x5bmDSavxEtqCfQw6c6xJHVvfCNm3pYtygMz9Q5qHetekiphYAprHnZtEtLksDGYUuvdS83LiHX7rYGRqnwGkP9",
  "key17": "3aaVj4D8o54RcYN2QVihU9t6bh2RXPv1ckNqoJfDFqYtvKYmk4QgbrXwu5UdwDQNhKLnFPVArNp3LvQZUucxqR6G",
  "key18": "4Cyyo1isRRiSESCBucN5UwyU55NfZj6oYAkFgmCnAvEhmFgxUXWtkWNQuAdQgsLkw6hYUkLt1Myq1wjJTUS7y3U6",
  "key19": "47jpvfv7Tsn3Jd7WA77gGT8gzGTxsn23Cjo5UruJaVgK627BnVW3YPuP94cii8LoPeWbPpzCH8CD5idRfQ5Hn8mR",
  "key20": "57PSGzb3Tng6X8Mpb9np9PLmMquomrReAVTR5UUqPDQNNCBRtTCukcGbvSfTyFsn4LY8wfzMW2Z1DxBhuJpw7BYL",
  "key21": "tuXNvrF49azhP4hvrdSE746ZpBgC8Wb23KkQy7NywLWZr2BxvSSo2fN17Jgrp6mRtaXUKi3dXz22RUTB26vN2wm",
  "key22": "1QmVLyXEzAwZhcn2A76mi6RvGhX5oFbR2rZEqahVqSHsdx4D1xvHvTNXY9tXmp92Gu1bYN6BZGsbVcrswVjJZNV",
  "key23": "5C4dDSkT3SPmhF4P4vTTctgfHAX5WKQiEGMhGfSVGV8c1J7DAN6Ugi7NDV4syKpuVqX4cWeXJmyYX668Nks6t6mT",
  "key24": "3dpozQsMKCWwtkvrTEdNizZ3jdkCrMh6ruPGfsn7CwpBvZ4sk29N4uWubXwNC9o8p93rAUfJaAEvZpBZfZdsKPFS",
  "key25": "3jUBi7B843Vps13CBpAQcQjXdViNekpFjUEGYYNEWsG8VVdmwNXwPbgHBsaueTTpiVhkfcDT9FMAr8RUp7wuqPkr",
  "key26": "3hExfwZkcdX7dweWpRF9Y5pE4maLq3RXmSPxn2eKtLJr5J8332rUgmSWrPuWgfhCWcK97NHpY9xzR4z1T2qQCkLR",
  "key27": "3xCLgd7eLmU9TdfQYy5oBymU3wYysWG5wvrhV1pahityws8uDj6V3VuivxETrcPdxHjeBJFprJZBrJoHe1bfJm8D",
  "key28": "WBBec9QN6MhPWVVaxEPQuknE8JBAFzGfpCQaPtBpZpbHCzatz4CDbouTFZoqaZs5YrFctUk4gvSbHBrogseA4Tb",
  "key29": "5e7faaFEjxcn8GDKjV74c3ppUpW22SuNK5GTR18ejHqmoKGCeHTrtwF35pSVqezTGncUQQZixpijPQheb7TYgCoK",
  "key30": "qNo3Hm4uW51XRqq5E3C36EQbv69ZQYJbSTFQ7JAhW546LGYeXdn3is7d4y8BwXNDnhF4pSoEou5QzErr3B7rFVR",
  "key31": "27pwJW4R3k5QYS63acrhRfn87yh1RvbeZGC7Nioe4A5LAmcVonWzPwU6fU5WHfCjaCu4K6CsPn7RAqp2M6yMVfUg",
  "key32": "5XdWqMJfoKyQ98ryBXPALcQBqDUshYRxfh9urYPXdbg2cGXRxbhzx4NK8zCxKXsWzYDTxTVhdWFWgyXdzNsVR9Ye"
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
