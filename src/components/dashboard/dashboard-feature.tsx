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
    "3hyfceGxAPmyDANx1MVu8hrBVsMScKtSNAE2DG5AUEgYwCjFATy4x75GFaQoY4c8xAUSb4yDeK1LXWzUUXq9byCA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U6DfAM5PMZVDrDewng8nhmkoJEeHWEe1GtxSF8CnH5zQjccjhWRjsSj6KGSUAZVPrdDHLSEGDGpkJZwVe8ugGn7",
  "key1": "3PF5Xwp33TtZT5jrNJtMfcHZsrPj2CDRoxtb1VPP6FEBUPQAsmPLWQZx3mJvEQev8iMBFnt9EabfYMAPfXNFqiYC",
  "key2": "4naYFF8o2iLJfESeK2njNm6D6aitLREpucvWyF1W6ATkuceYpuP1tjNgjNQjJKZv1Qmw7fYf2U6wkg8Jy5eiDk37",
  "key3": "4DwnUqHoVKUT8VoU7wFZiqAV8zoBQNqD18FQFRCdsJQAuWoviZXKUwXJEBt5gTbLjzd3CaXEQLUj6PMTmsimsQFQ",
  "key4": "sPpmz7KUd6o3uAShG9oceaSvvjzTFsaFq5pCctJopEJ5Ws3NfuVNPx7RRPS16DdZjYnk6ttCh3ELzDfVaybDmJn",
  "key5": "2JjePYy6u3YziHN8djtSTGgESaZ7KQNMBTvUPEBqKHouLqVaGSqU5NQuEfsrFjaVCJagTDMPYup1q8C3ML271bSi",
  "key6": "XxKHkcakaM5bjASZy2RuSdmAdWdnsnkCkqfBtwMuZRyPyB4qpdtFyfaePcteDTestA1YuHTY4Q8rstKztDquEgo",
  "key7": "3RxcaCfbVc7Ej7B2wYCSmAmPsD8phWWRfPyhj1FZDuyssJvWi7f6HrsRtKp2WqekQMFtDJUtZb8gLN3ZMrt5Bryh",
  "key8": "28E4M3bnaZmWC7v6RYEUVHhWgLjFQu1YFPi9oezkMVvtC532PKSj4zXHarJ5Hp3eztPUxa9naD8d9J2Cq3UjtEh3",
  "key9": "3kAtHdmvkbrG8BtueXU1QtESEBQppzwUbJ4N2krRd1q1Zk29Pnw1dtCyb3JKT3VyL17ReRAQdq7b7FFRteTvo3aC",
  "key10": "2t6H27qascVumCC4wEn66Nz8KhCXpCEPPu6JRJb3xWXXM1KzcnDwa6EXX61tSuKhEMMt1GunGuJQDN5M1jYK8vPP",
  "key11": "4zMn6CJ6gKanxEHhAQYTvxmhQbKf8ohUps6UeSZ7k9sJknCVKL7T4Y9P5Y7GtRkuMMbKPPntLmZrVaXicf7UYNv3",
  "key12": "3Tr48oBGbvmARDuNG3PegeanaEXA1HiNRDGdiAZwQFgfvxXheooxij1MZ47hthcEBuYJDnRvmg8aXGju438kXtun",
  "key13": "H4UnaDKNjRehV8KGorfVyWAcfdPmuYWmS6zXzKzCry5Ayf6MjVvybdJkNFKMzMEim47JziWxAczn9Kmc6zMHVyS",
  "key14": "2kS2gx28UPwmdkcq4BzGu4WgVQF8p31Ge9m99bw8TA85SFS3im3RGGZHRxa3GTPtCCYcLeHGgH1d8wNE4UyvnTVJ",
  "key15": "pYrUTgx5eKTdHiJUDQCxSdjcs4aYug21qXKCfHJ3pYJa5Wf9fFKrwZosK4XNBak5fWPedzuZeEgjkyA6D2hJGEm",
  "key16": "4ZwsK57G3KFDY7PdhsMsEhun1ZYm34xcPQtaFwd7G1yibakmCvcTHBtcYcJX1PGrSvSFFxw2ULnVteh8TGCiigd",
  "key17": "24mj7W5ArNZSLXrhozJ4cn7QraNiGWXLxMsjB8Lt2GVUjvAVpy1fiT71985Dsw75r27Pg7aLRnTiJdZR6yhgB23j",
  "key18": "4AJJr3m8T5xUxborYhycUUxuALd9onLXzAnPTvRWtojCd8EEp2aZq6bcdAiaLwFbMfuRVt1Bzw3W5v2ZJdkBwaKo",
  "key19": "4GMBeT2shMjghxtxaLf7JvA93JNzoi3rMHkB7wHRCzn6QeAGxMj5Z9s7wcVFmHTNforPWBKcp6n9rHAMSFxE7jzj",
  "key20": "5oQAwivJ9B3qYxxqUPbr7qqmn5dwqZmkWzYKjUmdZM4vQ66R39Tgdkxk7yhDx5rKUSMttuo1TsE6uiR5q6nCecB",
  "key21": "2gTxib6R4cNuPka3uFTkiigtiAAjAe9L5FQkhYWBPzuMVtEXoS18331Sugm2JTLvR1gnpgfkMo2dXhzM7QRHKTGE",
  "key22": "5EBT9Uvej4cmvRGVwPFiLn2VKnKMB4UPFZ3wmY2VxGFiHJGWLr3YdoNHYABg1Dq8E3veuEzuVEDaPEkspuNFN2a",
  "key23": "676WU3fWoeFkQvsRH4wV466FMKD3ac8R3Hp5CEXgUy1NGErNsh8SXKkcVjE84XunxeUKU9bUABxGip8jTNWmRTmb",
  "key24": "3He3WonPfFucXXkt1KsKAFeadj8DtptTf5ZnJJ9KrxobyFYcZM2RahNe7W9Ktcuyzm2S6FFQ1wWrbiAp1rE32UWz",
  "key25": "48BpbfdnoEenUka24woFPYqUS5NZuYaXNmg4WY1RSoqG5UK9aTeEZT1m1BinoLtiZ3KTxd7icQWb9QHSCZcVbrcC",
  "key26": "8T438we14oz1Su1dSKFB7bE6q36i3YZTfQigqzDxtkGwU4Pv6KDEB4LioeDXeVBEE2opQBuk8XzLNTmCsofnwiK",
  "key27": "2mZoexYJfe57knq4WWxbcNRg13gMRmy7tA4Z4TSwGJeVbiLXmUymHqNTYwbYwSo4pqNk1XXsjvRsBeyMWwZDAPTE",
  "key28": "66GxiNFFP8kKrDZhV6boMmDKdQ3JRpbtxU5HAoMcpiLa35rms6sKWVtt5qVvmQGqQN7v4oTWitc4qEq3kRLoWDsJ",
  "key29": "4An5RNLWnM9Y3iivS9m1xoMNMRVxt84BWbqyW6ZbpBV6pdCTCJfG3AJwb1bNibQpL7NxK6jY7xb4jQKBfzHnAaT5"
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
