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
    "5s8SHS2T28D5p3bU5kyrzKDrQXNTA2t8YsxhJJZ6LbhtSCrtRrz5z6BZry1gH2b4PHzrUSc2b9RwAToD5QgRWFRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zSwZUYz7aq4HQyEcS7Bw37FGRKcct8SxkBfpvaFLXntUpWEKM5yUc76YriuQ11jexsgbdJZkf1TUargVWgEn2Vd",
  "key1": "46SbxcevaAZEntmxcDiFPXTasFRUu7HR3Kh9aEdGC1u33KQ8DBJgXazRMvCdnvM6mkv5o9Q1x6LdqgNy41PC7suz",
  "key2": "4ETR9grgbehJi64A4Ju1Dy5o3gYnysCTUbVtJWio92Wvex5mDSBsYqT4SSziomsbt95Aprtuaj2EcgejwQpPFbvP",
  "key3": "5NPnQTUK78YtW6oqDRpD5omozCU96gHJutW1zwtadz4GvaKPrsiUc9m14P8x8HxwCVZmX9fhwSJzrssHJAG4BxVS",
  "key4": "4a8RkkM9noXSvALq9BW5JyFDECew3Ck2GJcbPMKA8dLmwfKJEnUJEbjdmmJUWUNwE7PpZP6wTt32WERH2CkXnAUE",
  "key5": "HhLacayTYEaQeQBvLX1yebVjmzNVhWJZXrh7g43hVUVdJCLCBbVnsn2Y38dyJMM8rCxF445XKsPpwup4iP51tFH",
  "key6": "52rksNEymW5is67WqNM22WWSBWvRapoSpKdFP7gs4Kmm1NWwsZQgQH586kGvZgiuKnxwgg5PA9JtpYAgP8j9DwBz",
  "key7": "2rsbCqHJkPD61A44Tw8siHpvR3nH9zVZphf6bAVnSPyfafCV8AN1zZfd7LVU5xFsTcB7vKVXCV84ForEwvUo5LHt",
  "key8": "3QbsUCCn7BaR4AJRT7xjc5skh5v6WtAqcSGZwuHrpP6ujZsMPe2NRwmJJTcfGM3yFafpxJxG8Qw6wS7Tr8K1fXaX",
  "key9": "23kMTuJAAAJqn4kn9KANQmYhbeSKUHkd1kzVPWZFKwXR9DJ7NdteSSkkRtyTTYM4QwBZaVEreLXX3BgNqyHFFNvM",
  "key10": "3kAtbtcJebcykB9C5gFw16eHe5rdioJhAj5Pfb8pUREG4ADBsfvBr9izseucZ347DLEMGSFaxdE7c6FYTdGe9kWD",
  "key11": "3dpo8MKd16EaxDL8oTRRtsLvjg3r5pG3m2KoV87TNC79r1LZdhDcyNq1vd6aRnW7E9xfMGrGJ7nKZwWNYsMLu3r1",
  "key12": "2ofwpW2zDCGPXd3Mf6p2hZCYAKjCyNELyHriwuAAyG7J8pi7t8dkrGD9ZRFReVW6VTymRhjTRFPYZWXhNuypLqiA",
  "key13": "2w5B6rfsEay9KWb4BW7N8kGG57WPrtBKrn66tW5i7bJMS5zu6aGqvToCPqNcLukvR4dzy7HeSL29quDGJsBK6DpP",
  "key14": "62K42jtDEdgLLNWGeZoEG5gTLAHpngAvBx3E5vbnoo9yJRJyVCsdBvSaFyKoECZfjd2jGzCuPR2knwBwspm36XXK",
  "key15": "41LFobmunSF9WSCVdmnN1kU1US2YwTdLQfrLYtBBmuEtfw9Z8MftFeyM21xa6G9fb39ebqrmTQny7cQ4FE6624nQ",
  "key16": "5C943n2MQzEiZse9xWkgFnU7J1cwrXpHLTTzFDyrQmbUHQ259VUth2vBaPv25hcdsiD3d1zBa3iAn9iYD6VU2dLS",
  "key17": "ETEFeLNschPhdMTvGc63am62gaQw8QY96eHzVW23Du7shzSdjk329k2xjJbsmrkLondGv8pvjQSWiBL2yYnHv16",
  "key18": "4CVTcHC6HMMtP4WNsNCCq9NkaPcrXB1b4ZcH3uURpK1G9u52WMXbbuvENWm4QTTAtZLHidQDs6zgV2Cy5Lik25nd",
  "key19": "yScUYLo1x4Z9XFkonukWty24xSt8ff4vKayp4nF4scNMo3tqg6YnyMFaWmy4VKA5pieEMZxXfppmsSjXkJkuqjL",
  "key20": "iTCDm6yHtEa8tnaEqeGNVxjmQprZH3P7F7Zosddz7vxuXCkWWFkTVXWiQt1GSCQRN5mwSYjHGvL2cWuuV6YHkVH",
  "key21": "2gtezX2D3sh8ngDNy17JReysx3MwwsU6aYyE2Pce95Av853BWdypk9M4S3wUVnXXKPgSJURX4uRHR93A1tWGb7cQ",
  "key22": "2zg4P4h9q5LuosEyaSrK1jrdvtP2Cu5PseNvnHBdfN7UrSURsfsGykw5nisRTV4h4hXSio9Rc3kGkdFXBcbTrLP5",
  "key23": "28nehkda3bepJR3uHzbkgy1VLorXiUs2i7bHYbmQyWL6YVv8wKJDj2YFa7dbUMCPagg6d39sF9cqK9HpFCTkDhhf",
  "key24": "2ZhaUdsknA7zDEt7RdzoLxJ6Zev8kbNUtyroJrV19U6RUc1MHXJcdD3ARf27xnWanC82rNhZ2jLxoygivfK27pJD",
  "key25": "2QcwrQtMgg5zye7YMtohNueca8pnLxcNWG8PWDSv7BztmDqdnzaoGRqjPWRD4cVMQGnz2PfbasK2f9LdNRFA1bAQ",
  "key26": "2HbguKVFAJGVfLckqBPnZmqybJUXkWvFSP3RjAcdmKPgpvCMCGC4aedyhUq3WER4aQuMerQL15JtBKeAjYtHUgsi",
  "key27": "4hmF4d5ffKE6wKGk6siHQfEo63VHrDJkFRCwmMTx3ukihMbjQnYWepx11BT49GHmZsZRsYFH1cFkLb4QikHnMmPH",
  "key28": "3Ny6JrC7sBskMeabKXpr8Qr65UPx37PYGJgAP4htApDxmwbWGDK7PYdDgBSLfSNUKSm1tVhXHAbVK6p9BNwLy37L",
  "key29": "4qaD2Kz6EgwTe3NrVXPJip3SqxRLoijT6fK5USPXjMpG6h1ztZ5wTLMqrQG2BRavRkMamy1ZifmYdMExGdApWmoo",
  "key30": "4HEJCmCgxxNb1V49HikRQFdxoqeXaq8LS2Fxn1BwZbawqM7njGpdaQY7ppz65eXBRoSScCuWbBy2oJCPbn5rbvtB",
  "key31": "3AP5dMuJYstKsBRCNrLS48bBtZ9HkvQKguMuSPG1txfUusn2E6ENN7qGWYq6kvso6jkHepsLqCtzociLUEp7uCv",
  "key32": "5ghuKwhySJbUtxZLwWBgAvn6YHgEgdGqGijypvEreSSPXjV47wHCYYLddGVdGWuopfueMktw1ut5aGPGsHYDW2A1",
  "key33": "5y5FzLPukFrFKBvejX1NAdc66NJBHonwvku2mXP6jKza3WsbTxLeeAam6nwuZHCwWhLyKvbqnQB7QiodMK6Ayibn",
  "key34": "2xqFfya4miMU4PaFPGcJvz3APVBA31gNGwNU4KDjYcQhcZdosEjms3iGUrFGuXsfSUEakV13tgRtjDt2fGURRozt",
  "key35": "5ECv8jqZG6ci763TD8S33CPVUyvDwkf2fLGc13Q2D6zSDm4uJeaSTrj5DjouQ9KpXybW1ALz6zKRamaCdKvEeowT",
  "key36": "r9dJSw7u71R4c6Dr9quux2oAp29qfWH55y4M9Uti6wiHkuF9xrguRYwcFhw6kfZu5ZCJXmUNdKfKtFUZ8GTHiNk",
  "key37": "5v2XhuCKu8R7s1rEsZSH3QpQprSKEa88V1jmG3KzxED9f4LY8FmysmeMPFMikR1iqCdvS32h8tDRgGdM3t9ApSfd",
  "key38": "29rBwWwiaoQQuvGDD4o9kjQsvnM1X4hc2KJsMiVFivX3jRRSkBUpjmb7fqNPRnzn4243kFsfV6jeYS2Q7BwmpWkX",
  "key39": "5V34rfyQY7qK84CCTfbAahvd2p5KXALEX7daEoqaxCL7QArmYPURzgLbhSv1YAAXeKj8zicHUrPCrtMomqSmwnu5",
  "key40": "AHP5Md1TTery7CinMRt6bhawWK9bAy1ckDp1bphui4djPrJWV6d451DgLSox9CeFNTbJkiu6MwT45fd57wZrWkR",
  "key41": "4huejgSJyfbSMmPK5mQHKW9uq5AUUcLzdkVFTHetS3Jz6GNbjdeQntva3j88cgPwvVYAUrZfsL5s2Fga7TB3RjYs",
  "key42": "FjwJXkN95Z6CUddjz362xvp8cCwsqcs9PDtaJyhxktA76hmhF5LyFoHKFvjXmF9V5HUQ2jijVTBQoiHnDdnnYJv",
  "key43": "2pLvugMQnDkByLEQCQjfRqPW2L3aJLnusyXGBSQV9aGyncnvgCGH2xiYyySyE9sQqcge9MpmEfGEZH8XKTF5GG7C",
  "key44": "2WGsDmj1WXcZPFtNukPzX8m2vuCt7KSZLqmm5oYETJ8e7ccPQPNp6idRSBue2sCqnctExNbyWeYiWzxReTSWmCHf",
  "key45": "4vBNm495GedxX5ETKypbS5cWQfe9Po25zxr2vivXyepRSw84Jp9KeaKyZpZdFqv5hdLzg4pMuwkjGpPs5FADY8Yu",
  "key46": "61FVttP2xcuhjziVJT2kbu3zEbMy36m7zBDyQ5RHZfnREyu8vzhRXFnADGTbcyFfftb4MknS1EEM8wb94ysayK4h",
  "key47": "3hAiHv9SaiNZnMFE6cJbfKjy2R7JEKSKU7CiV4AnQmY97gWaFmvJaXCiZV849zQZYZdfMJrbGB15uBDjs78AVPDN",
  "key48": "5F4HDz31JfG3YawY2jYj8MHeS2pCDdBFAZkRUgJEU9XXe9PZZvbSAG975SVAhWKq3fHkQ38s6vt2SUsTkiFK5Xea"
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
