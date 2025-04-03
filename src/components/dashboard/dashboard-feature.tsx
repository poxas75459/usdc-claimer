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
    "2DLqCXeXPLuDJJu5uB91NYNSTaRr1Fa81UwRXBoV7br4ziqkqurTsbmUhctGHVzXr3ymgFCQHojDxgZKrizkY2SS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CuSzxeYU3cMn1EgfivyZitWvwseShDfBKYQodahEpBPjivDnDSbxhmSFnJBWyTUAcA7ndMqCeFJXe2yP9g5AmH3",
  "key1": "59VPcV82HXxg4SBC5MWZwPf6LapvUxm6kwY5JkQHeDRh9VWYJCoAGV8Zu6Cz8UavHB5bnaSRyjMyVckSGTX9SXg1",
  "key2": "5KiEkksREZKFo1wG1LjbzwyVcnWsqpDHDtjnNER1g2ECb2BqJCXbRB9DrPV99gguYLYxXfD22de6UE8z36mqV1A6",
  "key3": "5FFsipC33zBxU8X3cSfZ1yPW8TUktq9JC8qhJbATcMuFzEoZtYAfvahis2zhGkXLykGjs1kf2fB9TCXL27pApm8W",
  "key4": "5a7VwByF8wnksEPTyJgc9a5HERn38d21VpXxm51KtsZpvcZa8X6B7bYYkXiVfPWVvmGPUqNF6UYXwDX8EBMjyvMU",
  "key5": "5kGWZ1dNSCwqw645LWG6T4qNmUyPLikgNdTWWwxyLJ475R2RnE53fhsP7jgpE5ToRTnoWNDuLzkPMdz9FCzfBdSd",
  "key6": "2KZN4ZLQe5h96Hj9A6hgHYQMiuzEsGpWBUX51YXntFhqpTYtUoJwwsPaSUYbTjko3yaov8etRTUNsMgeDDuNxLrK",
  "key7": "55G5C6nADDeAdbZTCYszh5ECdmJzgK7etvwzk3bhg7CcyexKEG3ufRhn5BtsKoLAyHUDQwsDxTy7EnvV8kJiv6Gj",
  "key8": "2pQDp7ULyrVT25X7HJ84S8MEJHYDP5FfKDng1VQ2c693rQ4Ppg2xmny56vSENk8hBtLY5M4wA8PZsG9CHbbSDgHi",
  "key9": "2opP2GQ3QUQY1JHPXJXFGJmggyMVufZrzMSnEfqnDuM2mybrFrdvd79m8n6MMDMyLKkJR9iyQNNXhpFu3pefwYnw",
  "key10": "4gXn1uJbGghrnWTTQruDJ9csnhKqTnbZ2CT3WtkD8NDafWNb4pykhHvc62EPE6mw8Ei6AQ8MgFZxG6U9gpngdf13",
  "key11": "4rY9SbpHP6LwHsGm23YxW26EzFTjaQKgozwEtiGLbCB5Nu5NYcEk4BdR1PhMQXEZ1CpgQ4xciSY3AaMrELjejBdP",
  "key12": "rAsVpGHUtpuBTwf2oN5Z8qKaJhdaVuQMorG3KkRs9f8z7nH9wuSsC2gG7RQasSnXhe7ZpAhWqt63n6RkQ4s5Fpv",
  "key13": "5FuFjp9jEhJWwJJA6kN6CV4DVTDgGERRtwSwgLEW26YWDGxxHRPNKAyxWRSgbm6oEoWYDcwkavTLfSvx9474XuPv",
  "key14": "suxVTJGiXwvdac4iM5jR4yQiEFWTNwzHsJxR1ku3CA7aYM3pV4kxnXMUWc1ewkGCCHNp1c6zs2YMxEC3nFcn6D6",
  "key15": "5edmzBS76GbXG9mbYT2GQT8PMR8BeQLowuHWhqs4GuFAX8zKsVTire3ucjmhAHaKPZYFuSwUtLB8TsksKb9Jr8Di",
  "key16": "5bkeTP9pMcjbbRDDxpb5jTBD5KMY5BmgiNMXmgoeaQsZaLNuu9pJnTb4bizxnJim1jGJeyhd9oyp6PCAdp1nTyWo",
  "key17": "8Af17r1iyUFtLcoaYw2mU8h12stDwAyLdr63NAeiTEp98hvumK7xww4j5FKNrKew3GDuDjenp1L3N6dA7AoiFzb",
  "key18": "2jMRKYKPmcA3E9v8g5XFpx4VXhgs7x1Pa3HFGj1LTUuREwN67frPFMFsGFN1fhpZhAmWE6chtW4PAMv5Bw3A2oYE",
  "key19": "u2shtEMq6izWS6XwiqB3iUL3UccU36RmSoqRHDfgUHWXAEHVKhrxPv4KSFMhWLMQ555CdQcegX9ez24w81YuYEP",
  "key20": "YUwdprLwJZ85z1Qo1uErTsZ8j7TSpix9k5ozRZMmcsfAAfwXigyXwVfFZhw6aHBEYwXN5sbi7do8XuJRttnC9wB",
  "key21": "5tvJ99ibS5DfCiDcYhtu6Nkt75s18Xtzm16a2VqzzFNazx1JXMapNdEfd51ZUgCSLcQqvH1qAWQdt9AmKBkZf1f6",
  "key22": "5X8cmkjpCBpk4g19Qy41Qa4XT5e4BeKazFp6BC2tv44dDvr1QqKqdgnUXDJZ6rURo2jhccMAdcuYFdLxwBs5UNRt",
  "key23": "3DHtJhS8F3GYinHZUxduhd5HkubX9GLHt172qcjVUCFoCgu2iu4iN324K7h8DkBMMfCTeuoCk6AVLH7WfpF2RnrJ",
  "key24": "3hwaw3ScVwBn8z2h47YE8pDi35CvV36wjCkqFfsuAbMwjE2UhbkFicZGRmP716wjn3h8TdxiAnXhg4vKGdjcfcvL",
  "key25": "2krMnRvVd8BPC5Pbuqqmdhf9YnEiTKtLwy972eKdx3V8nNdykccY2sDYxaoTtATmaZdLT4LgcQiuArepnTqZRDhB",
  "key26": "2jfrYESNK8BmYmDjY1vQUyEafMFPnvKyecQrYWLd1PbiZ4ct4atv8otMskMBbRQCxLvqvTm43xRtAFVYBLnhoeqa",
  "key27": "3kxZmfhmuAb6geEcHhLk1xPaDAgEA5gcpqbU7BRK25935Gibi95HvXfTr9hbQdjefdXm88mfGA6cQVQ47rV8rgCT",
  "key28": "2puTmJ9e8nc5eoUbEyPZLpgLcNzTaxtxNFUK9pk11y3DzMy9nuT7kTknX2divmXSVPncUc5SUF9E9y7xT32SCs9Y",
  "key29": "29WcoenJ794WGYeukUoPvzHNKCFWNMnz3WiXccJv2ewWLsW1LqUg2P4vTncuSfWa2ccMz21z2k8WxqYRnDeNJw5s",
  "key30": "3jBWAQxQkztvfQGEn2K9wnSm1yhrQpfNGHkn4zppgfeXgWCAE39nfi4FYd7bnN2wWAtLsqamJig4DZfgMm5YVmnu",
  "key31": "124uLb2Tx3CGV9Sn4vCfZqrU9fSbjgqH8DWM1iCTM7EfDaaHjfE74PDXGzwT8VvyrKPu2at4BF8EMTC7HNf9Y2Br",
  "key32": "3Ddku3cVZiCqo9EtfRRvXYYLF6p79jaDZi6rdaWv3ftGNRuKN2yYHVuazUa4wPX1T3aZvEwHqbMhBT3xjUw8tvkk",
  "key33": "2ULEhuvQExAPRhRWqzhJLKzbXXV4BQi4mWW8fW5VS1jUJWqnWUBUgyJ46754LJbLzmJ5WbBiM6upjXMfqeoehhWi"
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
