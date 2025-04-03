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
    "524ps77zj4BQdEK7WMzvGSa3PCn3Uj8q7SqPkPiVjPDZLHfFRhXdBivpWtWsZa3DsptwbTSvRiu65GwqF7CEi8QP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cgcZFh3S9S87Q9VKkeZS8232gZaRXq4t6hEbT1jFDLwi67Bp4251Wbn4m8NsSJFDrcCBGtpnvBNxBJrQsFMiq3T",
  "key1": "3BnjANFLYoQxwDHNcMKuzGJ6ksbq47GbZU7LxPWft8EiyQnJdCqN7FxtWVyRUL3ejUUNAJntVou6BnYskwVFtfEC",
  "key2": "47tCj7DLJuLFou44qtFcow6VvBoLwJiFamZj1S9AEmPA3zq5yotPpRngK45qyt1DP82MCZBPwd1BRQNJM2UPGC5p",
  "key3": "zRmmjMZKVNqMfo4kfC9cuCxDHCrt1z1gV6oGp7QRrZ8PfAj3cSNaAN3gcjutCFijo1uEx9CgcF3zRMfhQoBDxNF",
  "key4": "2X8YeCKsACg5Qg53G1XxJeiJua2gtbHwMFx9sCPWJH2M8FnFHhe6135wgpjYe5YuWz6Ykx2Mgyt95yr1Q2hXeuV8",
  "key5": "9d9Z4uwnQU3mXAp27r75ctxYW2CwfBhDNGMwPD3a1PUTDqwAjwXtBCXWiKNJdpgeuXDdMSEAUxvBvWfsBfA4Mmi",
  "key6": "2pCTwQSQTtqdsKnnp97KK8dKQcFEaXVaF2hgpqiAZgxzMDpKm1rxUA4uYZ6WhpZBf8e7SqHAMRVSnvPRurqxjRts",
  "key7": "2XTPcb2wpBwHwc14Rj6ANZni4gLjnusGEsEkJReWJeHewXeUQbRVxKt8NUYcL8yBMVUTWuXTySvcXN243t5LG1i9",
  "key8": "rzfKd3pV1E34QFBDrrqUpYSzLGC4Chv4MB4rJZmWLuwBT9enfeTxDXo96KjG2bDsNhouNyiUaFSN7SnLGoeaXcg",
  "key9": "maiGQwf6zVAhAUaYwqDpQ9UiG4H3kMYUaAjtCip4YpTu9UPoPtAhZLxCzBvYScskFqb7RYe4mZ5M5SyK1EcLov2",
  "key10": "5L6wu3p5TEcpvZdHdNSk8XQcpGGLavwrTRFiFekDtirYVR1xxRCzCz3DdCnaw6xCd51uBhpyAGSoE3HqP1Wrh9ZP",
  "key11": "2534qVvhm9pBCwmzVwPMRvY7FpAjxgJFKw1Tj6azDAdqP5uPm5gXAHjqrxU5mG64gaFvQ5rdWWgxG2XpCoVPsdAc",
  "key12": "4Fi2MvPK7t6UdT6TrMkAVNUjvSN9koUrAYP65Wmod4chBbu3UTpbWP61NtJgaMCo7WyDZdhbG52cJinJ74r3ZVcr",
  "key13": "5vxx88rPaYxpeK7GbM8bCtW1u2rkKBMzcJG6rNhDekf6uKQrN14DXZe3jRZW1qbhXMMxGTbwVrTv99Aota6KvWwt",
  "key14": "5XAeVKWjUGUmn7zZsSKdKdZuaYDFifEvuQioLEnBpvJNVrXms7sw1C9W8jk2Ky7rMNtnmz79w6VfQEjohJg2ZCHR",
  "key15": "2pcEav48gTCuLEyAwzcUmNjQikmKCtAU2sns5DKQxNBSwLmZPuaJqsH67W4m3NTKeCxHySSAj6nVsumzaXnM9zdt",
  "key16": "5F4CeXvCEmzq8fwZf7ST4yP7kUKjmjzSUo1txY3PUsUj38ncbjWbqb8oqecAaQHSBQifN3VXMeNfYkrJjZLYbMPn",
  "key17": "2EMLK8umozEosDHQCCb6vNhm45RhF9UQxXfFPxuQsRQWiLcGS3oXDsgdfjtN8zijEtok596dLosm21CTEJQcKcnZ",
  "key18": "63wTkbyKc6rgUgZrcK3ZMaUL9wqs1C6jhQi5qw24dPQy7pLftkhqZcLGgDsb6Z1SSX6ZgVsqjnoW16mdQ1L8wTTj",
  "key19": "4e3CfGDTCp8utTMmx6y2cTDeuwwBPmLXKT5pL5ihGUuPSaN3xUHXLppgCSfqDhJZuMDMkFSHrPvmbDZXbGGFz9RF",
  "key20": "2haNfWRBMDDJS5HmNgSWkjom5Ln85gUXMDEDAfy7wNkuQaScJTyEDWwaQ32TQfF9LpoxoNm37etW9aW6YRVNGkPg",
  "key21": "2E6gDqyp71tdouYfWdQtzDEkQeFVFbScixwveaCgUMeK4pVAGoCxQPekH9SUGxZu4TMTbNZ5wNZdPvaEvbFR6fGx",
  "key22": "4uYWbp2MtFaZsJZ1BmqYn1opocPbHkJudZeDsz4AgGrDWLDfS9VgEJuowPXZ8TzHvT9U3dq3aR1JrxhqhM8si95J",
  "key23": "VGJfazf3fMAAEDpLPh21yAdFxJZjb3MbEUXhtsfWQQS2VuzuuZcGJ8oH5VduRKabH8SDHGGzxuKQGooDRk7P9t2",
  "key24": "32Ad3E7rJaCrSEWk924oC78JjxYMjswRhVHkUAUBiyVAR34dgjfNme5PhbhAt1y9RYPZb5uYY86xYUE9ptpdLegx",
  "key25": "5CyYx2x6m7AYjLKsbZbqJexKQPrLH9VrXjLa9rtHQV1h9wGLFLbgtmu6C7g2HQGXmhDWPwBE9tPKtzegHbPgrLYD",
  "key26": "3TMiZWjXn6mjaXyMMLQ53Serzu1mWqB4AmTNqcpGmYMVzbYcni8FAqUFdTm4UrsSroEBcJZhbDpFD9tEkAfcHcpV",
  "key27": "5DU1qZTyVn5qqH4CuRby1Ykes76udVJhy3bv1BjCF7X3q1c5ZHyZmj6S87Fu1MHyBVae4LKU1ETMdcgpHrNmMcrd",
  "key28": "4e5RRQQEoi84zbHwLfQM7xVzjSzXJmTGD2niM5qhG7S3MgBfLjnAfT53KNJ1VnNkQeJGHt8E3UL389ptrgH6suCK",
  "key29": "5SrqaiP6TLSgkQZ8Uc4VWyg78BWfNV8N3mQjNXJWTMrhf6zbMTLe1XZvo68GzWUumowfgVdkWcKodVeKktc1vuSV",
  "key30": "36LoF9adHEp6wobVivHo848XL2K5wstkH7z1GSFmn1jiixMpVJoM8Z4Y6Wy62NRvMyyw88nfZCvP73QYzAzVTj55",
  "key31": "56Qw6fxrGkE9obgNCAh6c7BfnEKtHh49vUi2n94UHphzYPNCYRcDoc2WzpYnx3aP8X7UphK3dFWvBULeNZMg22Pd",
  "key32": "3jYRavoNim18r4ZBTv7NLdyrtkBHZAkCJMTHPyE1hhC3xMo2oUbPyaFjZAfKKvyd3dGjZhghyKyze8YMTiAngsSS",
  "key33": "3PCtUruPjLienDmZqZhM9rHwowpBb8vtqgLwBAq3g4xjmX9wtUSWM62AkaKEvRqGdD5NpY7Dq5GhAb95wfL95tut",
  "key34": "4PVEfMqPzeFfTiC2dq2zCLwNjZbqGJ6FXYjZrvz4wF1grG8MNu4Qt7edhMnSs3or9N87nF7nra81eoobWR1ixGNY",
  "key35": "saU5u8JKt64rwQ8XNAmFApG4pm3jvESNNPgdTKaxoAuBXuR9pER77XmpLRLCBVnjtkDYP1EHvwb6JYXTD9TuvZm",
  "key36": "3tSDSpQ1X5wCks2WM9fGR9GFDL7ajzUh7verr1kDvaufmE5BMLjVyJnUUBVjfFzC5QeyKA4BwuoDgevobEut9EqF",
  "key37": "2rdjDtRhASZygwk5XdCK4QSyMmnDYYP5HHqXWm26rFkr7fEnBAzvLUFHGdg1RDASuCkPQ5BgdDJCvUCaE9RLab6r",
  "key38": "4tgdhbUbf73vTqLm3ek9sXJAdiNwgyHfJ3ypm8Myu27nHphxjXbxsaDCRVug2VnC1gGH65oo824kDdSxd1ZykVBh",
  "key39": "4S64MAU9WExBavdkjYHb3tJDr5ffs5pbrsY74vddavY8RKGQTrxtDwNocqPfQrH8r2F4VA488NTjKu7vbPeX82cL",
  "key40": "3hbb4XMT1CwG7DDLZmojMwa45ZnwJpJ8Q4Xfy2XdN19GPuVXfnxmFNiSPrqApctkYMDXsJ2LHHKp8zvHV3kZSVRB",
  "key41": "3yN8PdQiiC3tJth55PMQdG3b627youKD5bcEVpg8kRjHVAHy25bYggRuaEHPQrDxwoytNqitmo8XjJcvtzkodzBm",
  "key42": "2fUk6XQoqcQFzPaAP5Hp8cbiSRd8hEZbSjDeQ6YqmtoF26k517JoEvojsyJozBF1rWaP6S6ciafLuNPSKuDXZ9V7",
  "key43": "Xb81R8rYxzV83YMTCujd5ExBNj4jvn4ThvLsZhEegYJvQi2pNUCnmZNyXbcJS4JX7NwqF4LQNBDfKxttRmFi34B",
  "key44": "3sy881qTgkeak7488uST1B2DCsAJoiPjquM3KD1sPQ8FMgMVm7dZpwr3BjYB2ruzoHikLpSFD6Wi4UKRe7DjN3Ru",
  "key45": "4KgD9eRi1CSb3cuMgGiffe8HcQ3xzERbzAroR8mr9R92qX6CkbsJySi9p2EokXWPQ7inH99cYx8RuscrmHuBz38y",
  "key46": "zHRrMfuC2VMtT8GvQ7kcWXwTNrtv2PdGXP8EqGAuxeQZD6fGfPPyutDUZkxcpiv42nhxsvH8ooQSbeuwFZWjcrY",
  "key47": "5M2yVJ3qT49LnhyB2aryXjkshvFuLQbgws92hZ2ZcTk5q7kVc8WirocJ5RgAwwkDgEjuMwh4977nyihYwr47cAPC"
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
