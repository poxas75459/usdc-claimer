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
    "xoqo8wqrnXS2DhrrWfRGkg83tp85xTfKwx3viNcrJ8rPkMZA5M5fZVsB5HsGHEywkGr7e7wBWnP2dLSWHzhoyoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wfwuP61HgRYHEjKnadNLjCsKnW7F8cKYHinUyK5NhAJp1JjdYgiCnKp4a2KbgUPLSFYBpheQH3SDKn38fWnESgA",
  "key1": "5wgbg3ADSHWD82nKMiLWR7F1oP3evGnkGkZjCfAoEscPD6FTkm7dTFTYjAcoxEHdb2BNbSdsDUhsKzYFEjy8pou4",
  "key2": "55RBgN2mkw73ZfgJNEf8pqv2p1g63mRD1DJ6xgY7fHNpiPRJEmN615LeG3edoZZdkfP5zuoCbmVuBkQbGbCaCV7f",
  "key3": "jmz8ybFn7NMPZvY7EJrdZuAeqnDmUiT56JF6V9ZKvmU8Y4rz6FAHUaaS66TNfhZD2sjk3PPcXA8ij3KbHZA3kUX",
  "key4": "5KPqbAiN82P7RRDaAM9bhmiebmN6bX6q641Ts274DmLi7T7P8n5FSNMxe49oJVnMtbTEAGeRoHHiscDMkWKmdnCx",
  "key5": "5BFbcc837vwW7BhorbNBDKwWtswJwmS49i9tEzRigQpDs3yRW88Bpb4kRiP6oTqJ3Papbz155owDkZrzEf2qf1zK",
  "key6": "y3iLomVhUfUGRjfbKy3iJxz1CBqrYNYBJ2rt3BGKCKktQDYYQWTVc2m8hfkbA8pjfRNr3dmygoXnpcmHy1zXr1J",
  "key7": "2VXBTYmxEL95s7GbeptWSsNFGiXj1JSfePK4qiCXLLBNubeuCTCrPzTMUmNeJmzNjcL3BfPW2rri8PLMbsv9YgYB",
  "key8": "52o62MkcgZQDwHxQsaokbdD2wTZqUN1CvRKuhvSvMQKx4h6AVwbCxLTMQGL7ubj9D4KEaB8MDvkyST6HV6kmUKSM",
  "key9": "2e9BbNRUdGnUkKfZMR1hEcYpUvfa3cYajmYNRCDomSmhYELiZmZofFBJeyRZwitMoGJQqQtb53KUNbew91M1sMoq",
  "key10": "4vs4k1BN2HgPgwWcGCt7uUcrbWS5q2Ay6XiSQ6co4K69nBggutg4aLzyNq6PryPH2mFWghcFpaD8fTCkN3axPJmS",
  "key11": "2pcfAjZSyumG1FaVpBSxczUJALbFbrDD995XXN3FmjMCy7gCMpXpEtiVrxZSVQuCkauaaKt8RSrq52xFM5kB8Ryj",
  "key12": "3hRqyekSruP4sGQHsnvWBeZU6JsWG8MzFWcVq45dUF7V73o8exosw2v6M1twB11EUZctpPYZD97EWHUs8pgMNBYo",
  "key13": "3jpwaMTD665VsQYvQhN5aSXXpyHH8eQbefvPYKUqhggoRssRmZ1z9tYF9J7dczTNddyRML7yG8ZyQAN8YgY6gaXf",
  "key14": "24JtigtmzZNVDmF11ThBVKb24aeEXWVz7ifn6HghXEw2rdxUYYMCfXVejDY2Xr2CS5Fg2e2am8YnG2Kz99eL3sKw",
  "key15": "aHEqfJhL5x946SssjFwwsQ9e6EYuFPen3m4V7EWFe3wjWCZ9NT3kPKbjpvyDBg32r1BJHRi7prvucRoYy7kbqYz",
  "key16": "41mRS13CrzkNQKY1w93vRA2yDNDvbYEXFX4Zpi519ZZcAmWaZCe1giZnywYCvAboU1Yk68E9BbwCNZ4tLuZNFBiA",
  "key17": "5cXyfQZkb4aFTakntjL7pqCj54UUmRGR5PMBw8fdMT4JbJCrLSCAVFsNfQVbFcSdJs8aip7tfzk4rjpNp6PeQcZs",
  "key18": "4qJotTnkCgiMS5ZgjFkTa4T9SVWFpffrvi5Q77wqp3q7dJe6U7VEuTKSa6gHJKvW7qDLxSZNopaFvQF2bmDKvWr9",
  "key19": "3HkUEogqkFGydWMkm5amJRXQta2seCQat78AqtMkUfwNAYnPSBLc8v3AGuERizvgXVPUcP8UvPhjyMN2hEHdh8me",
  "key20": "5sfYNuafXDm92ZGTgMqQoC46qTV68j5LsNn5ujnDVnq7LujeVrPHPHEGoNJM4E3A26XNa7oa892PenS4ew5Ct5LV",
  "key21": "4RQ8qdVuYjf8vLeNk63rDqMCPPbFwQujZNwnWaAyotVxZ97AZ7A5Gr6tmymxfk7oMN56Xo7cpAPJrBS8s7mZy1v9",
  "key22": "4tpBSynEYgxD22DEhbHmad1awNudoXN9sUqTGQGKuBaGBsu4wBVsW5jJq5WBQHLV8Xe9qcXSNNDAAFzBebjhQt6r",
  "key23": "64Go2vHPLkdMXZdNGru2AKii2edzgyGHcEgU2muZvuKZsKnEvuLbWgymKPEey96pDp7KqdcDRtSkpsxo5xek5Ujm",
  "key24": "5yPdBop4bpQ92hoANTdvctjqcwbNmUjtaY8uZry7T8au3VmLWs8JbAqL4UaKPswzR6cNyfYYH4qW7ssBowc7bwMx",
  "key25": "5PxgZG7RnWdQEXRUo6kQK2mKwhe8yrYMpu52CY8NyatQQv5Sh7t4K19n1Hxk6XviTWAMVUu8E4iNZM3mNB1hMQu5",
  "key26": "4Zf1v7WmyF2B4tnxjzaRD8aDGKpyyCYZjn4ZFhxp8rLT51etiSqfEUAuYmAxV7gsrd9turpwym9C9H3mA73qYZTE",
  "key27": "4KfV8yWKy2HYRmqtNv8f6WHqGRo1eh7EGjNjZBj5oKDHyZPt85avrmAkNEroqiRx28BoaFjfnDB2kFZu2krLJta6",
  "key28": "2Br2MfKehFLfoXdTBBiamhkitBCiUwGwibJW44EmQmc77XoFEn3mZeAW5eYHUKwf98JJYtppZbFUGUztEzs9thLo",
  "key29": "2dGW7gHmjVb8NZXgRk85aGuwqRDmVYAe9WrG5EbfCzzs8FNkbXdmPeJdhA8kjnWEduncKFwXNQEHxshYuYCrjp7K",
  "key30": "jgMMN3zNc8Uhz4fLtXX6XAFXwfbcwoM7bS6GXnDsBU31z6HeuzYykbMw586sxeKktusB6YiuSuui3X9rkKmwmUZ",
  "key31": "4xKqBjLtMVgZq9ZnynR2j5XRSvwLiYzCTuxuEdoHzG1ttfxAGgrSnqyv7JDWqoWwrCaYmU1Lo9ao95by6puKvy8Q",
  "key32": "ApQd25TXdEbEt6v4b7oTqoqeFqYZjyehzfYCtoNUDJCGM9UzyQhv46CrXXYdXDmUE7VzarFa1MvZPoVBeY37o6C",
  "key33": "2dCFitKTvaktjecmxttUfK3woc1zxt9D9hRkJq1Z7hq4DPzZnt4woMQoZ5tfZ7EcCTtjCJ8VkuvH4YZ3fAZZ3niv",
  "key34": "2wdt1K9PEDTCoukQ47tjHUE1EpeG5DtMVLTv6U81C4sSp6Pq7H6453SnBBk1u7mCMVobidjQb87DDBXobpYeydpv",
  "key35": "5E749c3zuy2VYFbwHHDHR511iCPg5XN3yTnTajrPLCkVBsYXowy9RQgM9K679h3rd1G35jsoQ3EUbBUW4VmM734D",
  "key36": "5dmKW2iH8qoCuJf7h5cxAxCC271tyBDeGeGSnfDzVtaBhiDq85Cye9qSDatu8Wbc85s8Z84yUcJyv1x2DtiVyCQ2",
  "key37": "2j8DnBhbjTZzXn1cPhAxorMsfBxKmcvKndvDTH9iDdsZx1aVnJadftrv9xXaTEjxUc3avZcWif7znmawoucY4gsx",
  "key38": "4UV95wqKXycDjkvFwN1GHd9WVJFqGkvKqQ5dEo3iPG73h46MxMLNBxBiPc2s4uxkfBqNALkAKJHpYmWAdNJeuEtu",
  "key39": "gYFn1jz6Rj6ZjNiDbCfR3H9kL22fVQyvaTzE2bQkeF3ooYebUZaH85itxQuUSqZETT8x9WMFY3nDtYTRVKRYAc4",
  "key40": "3pMPgNGAhbY1oHBPBM3jWhNVtyR6Kw8UYgZEQPPF9MnTHdHCipVZXbUW9ogN3B2g1QUMFLK2RmY7KCpgAgjYy2S",
  "key41": "2S1CzsMagmwWaMRy9WMLaY9jqNQpBNEJiy1r7XWqBitk2Shvir6hXNk957spHbwfXcvkMbjsyVPeoW1qVmBomgwk",
  "key42": "2D9u1AGhBdbh6MUovnn7dKhFR3iCXbpmpB3Fr4uiSdjVJ16vCRBY64FDXCSTZc9CXAtD4spb7vbwkvuMApRhcGyy",
  "key43": "5Qoxr4FAo5BYwsjPhiMkWoc9eW1E1AJHUY4B5snFQ2wBXJZgJ7Jfi6fKVCb75FfSLysE6x3xrwq7Ma8kt4f8Wc3E",
  "key44": "5ziAXn9huFoJsv1FkdUX91SgzQYCX8wVSqRoEDQLGAm9x9zuMqwyXKU8rTszzCLhLPYtVhsShEPn9QY6vrUKek4t",
  "key45": "4zdGZYSj3q6XKpbGNzeZhYNnhTpcKM6aTPoMNinP2r8ACZXVCbQr9niWqvpwdNFebD7BEay95QmSPRJwwqaLiauU"
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
