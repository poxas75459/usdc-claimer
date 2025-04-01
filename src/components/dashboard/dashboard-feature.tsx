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
    "39SBWDhqbjGrepNGgZnuW9LRRXC2cLUpYCVD53gFkbGyzGrbKacxjwW8GRg2U2JW3wT7yTid1htDXPFU7c7p1CLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57E6EXgZSkqyDGVBQFiNwEuyoK7vA8mFTb49tKrzr3gybeUDbn16xHJgufYqQc5cWF3VbSyrGqJ9ie8jCQmpEhrz",
  "key1": "5ULxBZqeEUNHP9afkEDD8rH1cMjK3Rs14bGKoj2WAuccJvRDxNeMuSEFFCPVFrxXT6qxVtuYDdR2Wzp6g2mPHaUo",
  "key2": "2ooqvnVkoVnoQWYrrfo39wBnKMe8Ny6os3Vz7aWeiFpUyv8AxLq6XRQEL7sYxso8heQpetYcSEUjJ7pD43MWBKa1",
  "key3": "iW5yY7siDCcHabKExVeHyB66uJkZXT79pc24WG7AzaWSjDxmEvYtuPHt3cBeapbG4sqW3QTW7QB2NPNm5Be92to",
  "key4": "5mXzuodSVCTzQ1bfHW9NDNb57cVLeVfVz9vgRNcy57hREr53E3WJ9jqDh9EDpZLaw9d4kY7CSLdM7KhdkdcJuVkf",
  "key5": "4BrurJ2xL2VfFBkdUEeu97uWazFZUMGS6ZFhGZKsfkThiZgiu3SGExDZJwaEP13Yy85C8HAr1Auizh5AaHqFseWH",
  "key6": "5fk2DG5xRrap5CdnnUY7J5xc8bcf5sXgAUWTiVGmEo4fE8zGgyByVfuGze9c6g28aUUfpBBCDedcPd9Z2PxZ2cVK",
  "key7": "4i7Mqt4Yj7bcQtr19jKCiRd2g7N5oDDXDdMmfaAi9afFdJfN9wazYGC74rXDxrkxo9WdPvnRVyvH4S2vecQCjAzi",
  "key8": "4LahMAgJP5XNuESafhmwinFfkgqgVFmjBbXzXa8NdENozSLgExAZiN8CdbpVBV7QHgY386tNvtixsBHD36iwFsF1",
  "key9": "aWFnnky8q7CkB2PjWfSrTCPWwW682vVxjnZckihJnZ2GsEPW4n4VmWJ61aMCPmfensHuvZZ2pVk27uLaHKro5c3",
  "key10": "4k857tnLzsaQqMG1svGUiMYB2KWeNUniqHzn14BjBrrfPJUuc2X7sy8cFmmv9WXGSc3p6f4bN67jYDmf3yQQAJWV",
  "key11": "3v97ycu8QzobZ6eATnbiFmksetANVBNxrUp3YWJwzdVKHnHNw4q586HbVfu3kUwymG3YizU8tPz6PMiafAANreos",
  "key12": "46DxfyVj7DvGPU6Jy6Dwo4U5ZqwEWaRv6aCUeAoGrRuTh5wvnnushmF6cEWbv9GcpAtZ2aTttcTXyWoAxTTLGzZ3",
  "key13": "J5qVD8k1btAcmkqs5nxASrDyyMkUofU6fLt4yRrsUYM7YXU3FQxE3zFMGpUe9Nuu2Dhk35DZMc84RciNHQb3TJN",
  "key14": "4qZoxU6pCNW81TVywE7iGXhn6WQeJoPFh48avu2QwbXnTRSbs7S7aPf34M66KPgtB65ydgFxE8y9oFWshsTzVvgB",
  "key15": "AyMCMx1aejUK9TowNWTC9rQJJpeHs1SJdx2y3VeETz3XpzzW44Dr9FvTrRxHKeFmt8fnYiwXnKrNxGca9J25TXw",
  "key16": "5aePxX3PGaWUdHoHXczxCiS74idLAHfBSEUxygMCfH8pDYE1r4TJrqtPMBpgPnuAKZmqJMWbnuYoRf8aF8zo6GQ9",
  "key17": "2zf9km7ngJ8SmgxVeMMs5xe2pjPEjWz6aQbaj3pUm2eGA8dYknk5rqQheA4SfLScphzgbmGSUYSH1CCmyZBq3cWd",
  "key18": "2fsLzVhSdRb8WKmMN3VrgvSDWuMyANBsArFGwA1UpvvoVKM7w4TZobaY7ZGC7ozkZVESPc5ZCfMNNEEnNhM2tsUa",
  "key19": "556baMuG7po3GkAt83UY3qZLR4vhAgxQJwNDLVzfdGsTKqRJR3gpmGMFaEkEgsX4S3hbbfzRQhBwJNLPyALzAJTM",
  "key20": "3pDdrVVMqp1ehFspG1nsSZFpKB79ZvHbVAUUAJqQ9E1T8q1qWp4NXsKRe7KSNZbCE6GCZuez3nXPKprX25xGWapy",
  "key21": "ikXahsvhvqgStYMh9NEodV2SCZk9BCCESp3gLepiV8DhzFWNCznZqSF7RKc469KkU6PFiuWnkrSrTVVyU1jpaGa",
  "key22": "3mYqgdvdof8WoqZw97A1ptxDQeYneix4zmN3nvma79TVZJDsyYnEiSHiLNQLK1F78jXH6qsMRuSJdYygAqonyzxP",
  "key23": "FqtTrN2yEmqN73wHNme4fxhc5XT5Qp3eheikMcN6RwCcdrSzjwvnGPcSb2a8bFy4YDU56hXFsdJTgDWvdVdrM3J",
  "key24": "5fMpGSoA4wnRStj3mTbH8wUNTAXybjMftojC44VitwWThmQy5fNUdzeaQGNBTsNpdpwNnuXWsxRKvW1oTX3eXQZ8",
  "key25": "5C1KCKD3xjAndM3tPzkRk21sYWrWJRbdLAFFhaXZp9ik3pV8LmA7o4Jxii4DvCFMvtA7xwTEYpo7sbtC3xVMK91E",
  "key26": "2vgwmnWhtEGj2M4hZ2vyvtktN6VAk9kZkiaRUC1DMNvNAS4Q2Scm2kHF9tfs6DPdECDqRGhSp1pANiPAVgFDPT8n",
  "key27": "4Gzra1bM2iixjAqcERLiDgNDfUouHdwNiAqa54uBcKcBdBKFaH9B7qNy3Yapu6uEj66CyNyBdGKQ4rjjyrFEYhqF",
  "key28": "62y7dBGqfJEJgfpw9PPaxWtBuh3nvwc96zmoNsiDeq1RDjw5rop7STXVcacLCsdAxugL9DeV5ryHtvZLEvbw8uwb",
  "key29": "4dkzJomV5H7UrCjz4G6RRRNj8tUDsJ3pJup1g8tqeHZhhuhvZKSuSD1N39Xm3SV17i9cExePV2GvigWKkotc5Dc8",
  "key30": "3RZMKZAeaE7UvMSVk3Zob1obDbYdd6XrBD8pM7HqgnmMzZ36ti4V3fybixUFhRD5oWNxv1aUisYh877SA1wisPqr",
  "key31": "4Q2J1ejaCfAroFAJXc33EuVnxEV1ngYkc2DTpPysjGaMDnGiEswkDRhWBy3e71doFkkeCJGzTypyAG2mSTD9nnhD",
  "key32": "2329Ve4MdRWAYiLkU7AQnpd9CpTgV8Gk9mqLhhwTNa3DikJe668PrVai9yicZf3SBsmbLcVGKsmczAtcaGpKm8w6",
  "key33": "3gGB23PK96Rj2oGq4yRvHo9qwZuV1uYcv8JPotuZLKG5FgyDKCj8tbrrmQqL2mVnvxZCAGqm2WKjzVPK71ZaUmCa",
  "key34": "3XExua5tfeiSqhf2FR62uckfFHaf1arYvnQNm8AhxKfKJi1DitfbETTWqCgZK3BYHbirrZg1TFp9zcRb9pSczXtL",
  "key35": "43fZojjsDN8idis315bZWpZSj1gsp1UBj6bTcQ7UFqUak6oN5rZsTEHDs3m5VY2NogoFbfmoSid9RTqK4orLbs4e",
  "key36": "3HTkgBD2nbiWcaC5mDP99TsK3ijmpbNwGsGWWRR2tfCCymrb5Xe8KZp1BAmjf8foAr5hWUaFSHM8BDJnxxVZfSp2",
  "key37": "2Wathoc7JLgM8avGgXMwaxKZNP3QR2wwXAJKRm1L2YFLi3hbcN6Bmwn6aFC7mCyYEkisT2ZwR6BUa6y8LE2qjzhd",
  "key38": "WEBaEKwp58t9BWzzCfj1HxEaA9YY378he6dNkAdubQcSZGstxmR9ehCed7m8tMmNYXFjQxc3qgVpS5Gcbxdy8fw",
  "key39": "3k8auWiQADQ5D1PDrAxd1eTsUj3U778akVMk9XkprVYQdiagJkWzMV1WXpTPQ13oGNneqHGJQ74z8D6pbFvii9TT",
  "key40": "2cU782M86sgxurGGy9FRmNZUEMfLiG7Yig9TKTG6se8ndFYZoz54xWvyB4gcVDeK61nvisD9YE5NcwUcP844SSmR",
  "key41": "5xTEe93KrjhtQJtXjtDXXtT8Ghu4R6Uk2qFd1qcWLRYu2bxxoRc1PZHTaZ6ZMK4BzdtRPPBQ3Pcvr1bQnrJFkUze",
  "key42": "5VmN8XzbrVqfMoEcMxDsZEAc3GNpPr1Xmh3eQP7g7QwRhggd6PMQkWQFbf19nAvK6bS1TgSTzPjSSbgZcFAKs8kR",
  "key43": "3GfVKwsbP22bWuEGuBsYP2wn4CSBe6ncmLgS56R6KfECZGDaMQy1K49ibRGv8K9LCQqNmdzu57bJ6gq3wP5YhgHT",
  "key44": "2ZPXHrTNMULTULDDf9qHzAE2AKCZkkWghX3usd16xGmKhpRoRvLvGfbaeCtWWHoz1a2S9N32NYV5oaDJ7fEVr9Bs",
  "key45": "3b1YXXHfkWuvyKXtfk8jyEmzS4E9ezEGWoYvA192GZTvAqwCVUFSfQfjFHharf3MiH44TSYpkyEyb77Xw7z3AM6D",
  "key46": "3RauDkeyuvAKTSabem45c3U84pLaboJ2p6gxtTPrWGaaDBdv9EUTPCMVgHZpA1KRcs9D2eC8ZzYC8TWDMFYdmnbP",
  "key47": "5Ckh4938iUdz47VuqXLZ2qJrZigb4LZmcoWYRMJAFpzaVwbftB9QyBkHTKdwxkUwTuJf41cFwh8quUhXUpTaktYw",
  "key48": "3Jpvk4kmLmXvEcppsTGTmf6D65JRr7FiLW4rnusBK4VzDVhhF6gA3UiN11YoTmpMT2yR1Bb12ZMwqixwoFSzJyuM"
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
