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
    "35ZjueZDdNB9uzZQiRRnkAQM5U6xWhctF8EXZrxvmqzmpYmeQMh6dE4MhBGZNoyNK4mo7PfLHpxLoQYZKumSkN9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tzk4m1AbgdrEd1zDHXWR6EfpzP998ctF5SNkHsTHKG3ndHpjFrP7iG4xS31AHeDyaB9mEq32FmvDf2wHsfLtmnF",
  "key1": "3mCpE2BmQABsbJoL7Edv9atZMQ2ekPCBBHVnMFa2U17kkEat8hzmG1u6pJJWQCY3sdyjp17hhyhmNhDQdQAtUr8E",
  "key2": "347a9qtmh5oRbVrzR466cwJG5bbfXHhkhiYQxhKnPny8EyLeoPXwhuYuyXQ699rF28eSwapWg9uoTsXHqETCxtof",
  "key3": "4FT3ZDr4euB8tUDob82U7WjroUKeAo1YQfxwX3biriw4U3eNHupGi3aue6pMCwRv6s2C4KUscDPo1qsVnuJEMh2p",
  "key4": "4HgxSENxa6kPS8F67Mr4DBdjFaq2okezxriBFrnZrZ1S6r2eJSexT6Nkh7vHijemuXYko3HDkXkhwkJmFP47dBhw",
  "key5": "4Dtgj3xPhdVhUVqDD79sULJFQxMqF2ckUvbfDrvStgMniYpkqXw1f7vnQUNwiGJ8k63ucvxPWogfgXyereNDm7oC",
  "key6": "4JUkNqpaXibp2nGiFbjmhVf2SPmJbRhnqbaLqF7TNp3N2opRjNG8imkaU7sVknxnrZsBygTGxdm18MARqNDKyXAC",
  "key7": "66hNGQQr1p2fzPrjkffweADvEzdpcC5Mkavzka3yfoZP4GoWCTuRamZLdsKAsyttX22bpTYKgEYKVYZLZtiUAJEX",
  "key8": "5oZ7EWc3LK6Zn1yr1ebH7bvrvYfpMHRE7dbgou1o7wAQ7ftLFo9oPHYvHRXfTK3ZCpUXNcpo3iCQwwJnhEYnKCgW",
  "key9": "3EWxbxqcwppuqQkJJyBUZdZBSi84FMsrxPiuB2wJnMzvSZeALbSoyZpLMi3Pq5PAyDcNbToyLHjAkCQDkRdckRCQ",
  "key10": "5EJY1uJ6xCgGhfvdLZci55HfHe3Y4T8N14BkomMWeUSYCERNRcwgNASPauroTZ8fJVX7VcApbGtpoWZ7gqMcfY1p",
  "key11": "G3Uke1Xq1rLzYUZfSSy6oSo2R8REi41WzRTbqfwAo65CRMP3h3B68e9SRPv7CYih7TVQVmhHvZK7AonYH1avknX",
  "key12": "4NW71eHjt9V5tFHWRmUhSqUmQDs3oveTB51xhWaVQL6RAmUCjeoEVeHPZSbqoECC6knfMARx8NqLu9BUGp4ppeHD",
  "key13": "2MtfuM5tNibtUrFkmc4hDS43S48auVuTskfgRmXbvo1Kh2NwUSv81sromo4g1i168BgFcvCF221kj7GTGAib6EiB",
  "key14": "3DYakkRCJGsLEffmLwSybFBmDcm47KXAFxVMjXNxRvnoVhJ9oDVRV2eenVuVKecQAUeKhC8UW8t9g7Qt4nw7UwYi",
  "key15": "21cJXX2vSLyZTB2nxq31dSuFgwdV4YN7YEE1imSsKGqWcS2N6Tb8eRusghS9HsT353v4nh58teFwG33ACrvuqDA4",
  "key16": "2fQnHkQBoPe3fGstrz1ucZ6F4tykZW6x815qT23gMAKM35s2jEThJomFF8h5Amp2cV3sCMmexqKfRbaEDM5aAqQC",
  "key17": "2J42TzLwYM6x2cX95aToXUKmhFZ96AteUc88j9W2TTr5sWaJkUWvMjPC8DErdRQJNL8v69NEeyQVbQrFLEDzEVmA",
  "key18": "5Nqw2Mm8bzv38Y1v5eynWoKqGH4MriJhQs15XPN1avhN9fdWh6tAsxnCDA4rroXQqdJTskQB6fT2nbq9LfQPcqUe",
  "key19": "2yTqpV6KQtpfAjDrGjYDfKeepKq3gXSxjZdXcfn6c6chZbXpKZCU5HkPdSdwQHc3Ss3vVEXLEkyaq927eEDTqQsH",
  "key20": "3zaHWyZeAZuMcS3Astmqiqowtvt4TcoEQk3uZ1TBQebnAc3bviA8FncdtN1aYPyA5q7znJeE7zD1yjLWaLAWtM9M",
  "key21": "3x98tprvRszBBBQMD7ZxJCvPiDtc3WDfUWww1jCHycqUTyaf6G4pUaD7FAqzneNLgWuN1GNnPKJoHZvdkgvnKkHc",
  "key22": "4UXzU3XA4ECn6Rf28TexDhoMaLKb2iHi1bSF5P9xdBk8R5rvTu6GdrCD5XymfSqbWkvquYuzj7ZNWRs2c6djrV17",
  "key23": "2QVSE8teM9Rj2ccqDwjuMypdRm7JTAGge23UZippWhbuPgcSiHBpXn5dtFNook9EgxFGMaJdRiiaSuddGEvW1snj",
  "key24": "3GnqUBSrWXffhkqbYA2ngq33PTtKmv3MdX8WFhoQfDM6j2wGZ2jV8f4bXBh9SwhFwoQTT2Cr7bVSQ32pzmUQ1jrN",
  "key25": "RmxaRD3N7NDxFEhgALAVAHSxpNLmuqYAXvsXq2tPYAJvnwtdaPTFDoYXZSkuEfccAstTGUv3SKU9MrFJoZ9cN37",
  "key26": "5GbgN9Pdy5we1moE5YbosCMBDrVWyCuy8BFN1p5RWPpTB8WTTkoGXeuVzvL1YKS8duuB9qEVatNrMh1j7WREftJ5",
  "key27": "65x6eQEZb46ikv9qjsVF9JYEaUQqbybGAnvDVD5gaVPWz69acZ2cyVLrMQqgvd5xH9QqeT7QKPpuW49n3gvSDwym",
  "key28": "Yyi1xFZzex11RMwkYGnmpBmJwEFHWCLRMbUowD6XtMD5Vi2pPLuQYEMAVJteMp6FN3fpFEPSgpfcArinuDWabYJ",
  "key29": "4cp3BGXzuej6snMQ9pPgzv5WchY4NDg2YWbytvsuQ9jyAmrjFa28xwHrqjViuvy93GGCPniBUSwZRbispqzbb4Nt",
  "key30": "4RKBZDGBu5ajH2HanVRiouXsfHUFBKwM8UrsWiCLQCB3qW2SposLJrKU7R2xjLmwUhWFR5poy2JutP5GPsf6XmbB",
  "key31": "pbSBR5ncr8voDThq65gwfSphH3BRFeZJ91q5qkisu6P7f9eatKebEe2bHcspnBRoyPZp1cQR6dHXM23gzrFH3nr",
  "key32": "5amgz8PhKjDCMr24d43yxxsSh4CTT9zfiusUYUhLeg2n3Sc9PLeztNFF76zT3C8mQJxJ4ECr3ZgWzQzbf5kRURop",
  "key33": "jMt76KvogxpDgJD6GxhsimUkTPpfarFAFEmdZU3dKfMagtDWoS6HpjT74SpkwVy3tbpEAHwpeDB8Wr7GSUEki7v",
  "key34": "KfWkTfEev9JjNKVqykVymNaDvtLTR9m1UMPrLAMiutjDWWfmGtNdfwY8JWbizEtfKipN6KoTYH6DLeBt5USdmG7",
  "key35": "3TndFXkmHGZ98Q6ss8f5d97pqM1GVnDS6XzDzyU4H3hnVh4jTfM44jiAPx5CFppwUhvF6UQT2UAHqbsUxK26Mn2x",
  "key36": "4j567nKLBXnrdT5AU7UvEtBAwZLWfLoRFtkdHMU9FFUKRQznn7vSH5oTf1ctTf5hdJvM3R6jDFeK2ThYohFwQi9M",
  "key37": "4TZjc2wp5UyCPjpvAH92THAePFJzTBFP9euhb2yieABcPgGtDxdAYQbUPPdotRpu486vqn4GQFLHMqQ1y8aPCZuy",
  "key38": "H2uLEbbJn8ttPkjjMB1Q9KPQQssLjuDfw96dH1p4s3z9xugoYZ5zvHrpTuTzP5kbv1j2SGtEBxdxLtWgVaP1tmw",
  "key39": "2hgeXLWC2h7r1CSd2ReXHX2agstSL4PfFMhyD1J6fhgg2FP3nS1MU1tAXSu3fksu4dJm13cNQ5ezqvwo9f9KQ4i1",
  "key40": "2sTwk4fgkkTzPD9S5tceyZ8o1Q7jv5j49iWvkJpxctmEMaGzMSbtxzzYEg4dqLwjYmr8q3VGJpXvx1Hm71L4hhn6"
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
