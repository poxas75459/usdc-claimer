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
    "NuYY5B53kYPNZ78Rn5gjErDBtfK81CDCn538PVCzf9Ed4zSWAbURVoDdg1pybkqiDSccpD1JTcQBNune9Yk3742"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UNhpHf2QMrwFMK1EiUknr7b1EGtEWH9LjiBiiAMKkWYmHXxvx3Vai4k28eMiMX3QwUMVsXLezbswBtR8rQsJyN9",
  "key1": "6DcV2Eu99qwhL8QGNaNcYggjbb74MK1h9e8zKzhGtMsc14cL8PWyXheoRQy5RFnTieHaQMRrimFbqwY6DQafnJL",
  "key2": "5LYtZR8wFiFycR8yKc1BxLmy1WqK9LUtqeroNVS6jd6t5hMxd8fPwwcaYqZiiou9cXzsvAhfqv7qm3yPtW1iTeke",
  "key3": "2Ux8NLn39CDk4DUG3F1SfrpqZgjC2HLLHQiGVj5hFXv6DFVrqqJ2JJN1GdF16fHnYubpHsvhqL8NMrmjooJ9Eoz4",
  "key4": "VsqEw9yY5etK5QuUQkdFHcGQYdsjQofaNC4rvRexVcnPgrLFHbaQLRm6RRTRD1W9MK8rFMdZvYMqyLRTTmDouNp",
  "key5": "4cx8hU6fitzo8U26oLefKEDic7eRMqQsKcSRcebfejreLgWUV2oVqi5S9jCuyAk6qZox8rTHiuJvv7M8HZkiWzRC",
  "key6": "2dBZ4jSsZ552T3mT2wSExgSsMrUDKtkYxwkPGUjNQqTf3rWE6ZNuWQjNQRY68H4zR4zFLPYDJE2bRH2LzadQx4b9",
  "key7": "gXSJy124dfLPokoqjjqviVhWJt8MDetiT7LAiUdETNKantrhYZ1C5vwsk6EbEsA8jYjZC3zgWLdCD3wU32SUaCs",
  "key8": "eaEK9D77SZ3G97YVw8JHr7x5LrapPpgkvh1hviuH3fNn7rsJ3rcF2N4DC7ZPdubUmoStkX6qC1K14yxgY24M3d1",
  "key9": "9zvWTR1C7KUuj4yWRrkrKvFKXzu1fZcmWPVSPhKuwhRUuWmDNk84BDiGMaSoqCjz1tHkoVqbcnCipNoZEXBibZR",
  "key10": "45dtB6Xf7P6h5pDYXC9r2fdyg2ukh3vcrLjpYLS8HonGXgGfgDoVY9iFLNVszfMpSmaPpNaT7S823wZ37pyE6RGH",
  "key11": "5n6YwxMS9d2gAiVvANjC8UhPNhHJrErR4DuDLqzfDQ61wy3EnL1CZpwURjEeEkV1ikaAUNdwicFujZVn1Tw2pFcv",
  "key12": "4FJSdZ6WMA1dKAweDcd5GDaaQqcTfWJJpaxdoZEmbHYms5rRgDwxBdcpfWPPQnZx1CVL3DRpVLWmXetcJi8yg7yP",
  "key13": "5p3aFco8NxnoTv3MecrYHqkUDdXTJsYVEbzbq2ZVGtaTPMb292j3kppvWgnm7PX7yJWXGkAWsKSoTWjwqMQf6g6N",
  "key14": "8kwX4rrJhqd4HxEYJXnVaQCg9Pa5nsbdkiFYfcsBDynE4zhgjnMsv75BxKpfWZATze9ZcxxT6QgZjgnHxkmqeS1",
  "key15": "666eATNptGa19FcukdBug86P1LuntCHSzhHsxeGfCKxxJ6vbgktyxhNnx3ziWQS5p1MuwgKgnjQ9tu751soiK1eP",
  "key16": "3toi67gZtKteNv6WvTg4RaN56C5CPQdmpvc7bEVY4aeYbcPRKe6joHKRM9iYE1r16aMifyiXLvqrDw2riuuFy1ew",
  "key17": "3xmfYsgTE9NB9gywKj2wR7ju3fccJsgK21UKgvJcJmWF9VC29Z68gJHaQWvFkwt3pJc4mWnZLna1P1M1uBdYwMNg",
  "key18": "32RZeoXprcRNVLYYJaoyPX8Gv7xfLFGqE7dy4JRkyq4kjCrFCS6MfF325ddfc1AhRRa2TSYbQp6GeyCinBE3UuXC",
  "key19": "5ga1AXQJozq4PqZLADyuSjDmWYWNKsUTMH6StHPeovUjsGuorQMq8sZLUk5HW9NsDFcPSTMV1mpqBuJ5NUmGEBoJ",
  "key20": "2BtEZstYfcJjhGn2nCTDj3JAa9WmyPct5Kp12hxghbYjjwqQ5xFXTpS1PhpJxX2n3xMFXaK7HDu5YXjy3ig77WAN",
  "key21": "5eX4yvUHbyDzArKWR4u4RyCRuNGBxKX3YMuZYfbD6sBXoeT3hnZiThRkTfh75Zb1bW88EnVA8w2MVr353jNcvkjy",
  "key22": "2pXUpssctvMPB7pvG3Gsg2JqoqJizpEsmQ4v32JiBLAmGV6VAbNRCKYeSRjcBD2oWp2CeGyYj1u8avga4C9zzHdj",
  "key23": "3e4UEKruCY3Dt7vMnddcgHktn4AJZLEczBgTf3a7qcAyoqgRHwN3zPyromsH2pMDidG2dLSt87uGvAH3w7yXXjuM",
  "key24": "3UqrhwovRh4ktnBpb5NLgHApph7aGTnTQkbda3p1sKm2yrsrVq11dPkxxaHT2X2w3sPu2PXkVveJroKtyYUJx6yA",
  "key25": "3cvQELTi4fn7P19SW4jPNGYSVKNankrQWeRMQaKGxAKx1HxdT2rhLXg48MnEhdEzZ5xsBjs1YujWZkVQCXzarycC",
  "key26": "3oprxngGYuwTR8WRM2zDvNUEtmsDmzCkjJ7KrCH1s3pNxqpw7U7rc3esQuEw4sskKu8kVeUzqEjHWAyD2Yy5EaSR"
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
