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
    "4goXTMnHAC3eMDnJCoVHVTfuyQZcAghgDsV8ESr9mt4GiRVGbEFqqxgsCbq52yVkFNYCxy1mSWLitiRLVtwuSAv5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J1vjUFSgJfJPovwBti4texnbZXLecx9d9VE6UuBMkDKmwyPSCx3ABUibxTpPzGo5LWGzoMNJrxC67un1rdHqb6V",
  "key1": "2Xvr9hfSB12dwrEw42pLagfBPxNt9MkdA2cMFhH7bj9yxdHzXsgbSFyGuMdgyYCxhApDGArdQVYJeh4iKaZ8jcry",
  "key2": "35WsnvHpFav5HpgKYQ56Xx5GHidDYWvw18yHn6jx3dHYNg5DHVyVrSAwWjEx2q87HhYYSbhbLqLMc2ncdUFSHBkU",
  "key3": "wfJemQSmtKY6jaWG7NsrBAe1Efc47dc1HUbx9NZkhsg4rXE8sXb266wmHoWFzHVpF2FadxRfp2hZoVQJ5y1WHWK",
  "key4": "28jKDp1JbMNnymQ2Rx4a55i9Ze563mq9EstHaBiJJNLM1XncRANLy5pT9Qwj3ZunfoWa7eqcx1QZVxdc6bLEyD9p",
  "key5": "VPS6pSddLD85n74EaZET5LToTwKYUcs7tAbqRtgqeAqyquB4BBjyA7BKELbfziXaG2LRCRe43tqj4RN4uDVzuzK",
  "key6": "3gMdDctUEe56DREM4NdamQxDnS1gmFW7tFwVATUU2pJxTycC7XPGkqFK6RcUAi8n7QBCrv4iwfiTuq1LNDvDXsi1",
  "key7": "3p84aJRDg5BKVnTSrwz8rcPUhBsyUqpFugLGzcCvRoyCA1SwVwD6mkS4c5cAhmE3qErxr6QFVeER6jpwmZpdWvUQ",
  "key8": "25HiXtx2WYPhysAzaHFvmeXRmNUzTaDRH743gA4ZwFKuhKopbShLGZZQwMbLHsD7KSS8SJW9haPkpffkDbxv4fD9",
  "key9": "5cwifDYiRkGpvGL14rfaTd1xUM94BbYKahzdHmftTHSVGss6uRDAa7QvYVZr9hbBNQFRaUiHbRdmUcRibCEVdjYU",
  "key10": "5iSZtMvSgsZHDrbL4TBsV7grNFcYQKWSacEPo2E6Xp4AvGzJvUtx3Zi1bQnP1wonU2Q4xqApjxLt2FUL5FXGcyqq",
  "key11": "p8UtePRuNaLDKw1zByj8u1k163kGY2MAfWL5duEeDoudTsevueRdXzd8opkcxNFLe4DRNQVz3UcFLgAAFauNHHj",
  "key12": "3nSN1MESYeERCqYZUZA3wyN88LDVwfPbzkTSaFf1LnJ92yxCfcUxBDdpnvv6Ezvy3UwFmxryHXb71h3hfwrqHJGN",
  "key13": "MUszWoqxQwVwZTJdrsTkfZnBam33PAub57s3SPTHVUaf6woPeTvAehaeuAN4rraFktynx6nqgHpNYQ7quXcTVre",
  "key14": "3yrzGKMVS535UUatZgcTKuURcMrF32TViDePWwhEJSSAtddnPA1H21BUukiigf4ZLY8zucKAyKpHTMX1hTNmeatt",
  "key15": "bvN5qyBz4Px2LBExQYMtER6iCzRonmk1XfNn74VbpM7xPgiT7tMY6mkzqdtbfZfCFJf4j6gEjQw38iaLz8AYWo8",
  "key16": "bSYuKTVGAds52jbTydAb7JY3fmEK6jxBEepHYWwKvUNbfntdsrtQJVzyPL7CG1MF62dNCAVSEvpRwZawkq4hHws",
  "key17": "2gpg9tdfAQ5pcoqGqhGCjEnUGi8KhaQPX2N1UfGLEPNAXQReBHGXWifNLKZG57FsNb48EbQg6wS31KaS5tqe1xig",
  "key18": "gJYQcdD8odXNhNSi4EZ9eRx4RauSnznGfHmsP2GCWc6G8tcroAydmT7QPHB5KAf9cQbGTpeSDoMESm9p6QToyyc",
  "key19": "NVgt9NDQtnrudcPqRSjccfghN3JY45vZEkqyErtsV43S9moASJ1JL8WQG95AmQTLydgB6wic5vNuw5XgWg8hedf",
  "key20": "2rSmT1SS2wsLi7cRqVn2yXYBgUD86sidF3ADmBPfKp7RbkCzwiNzkx1ZZg2Caot6qNX852Vs6YRT9qTq9efU4kEV",
  "key21": "5AgtKQdDJyiL1AKA6K1d26tgfEpnnYvyQeLrSXHzXBCpbVPt8yTzLT5Ty3X269awdYj34aLC7uU7d76KMbZRuGH8",
  "key22": "2km3WJVDmXut5NZYbiuLDhqm53849a2JTGrExMfao4FYqtjgpCNu1UPUozaKeWqaba64RJgEQMFrrXhvjGknK66h",
  "key23": "4U7rxRyCoFPZ7miMh9q4Xt7tr1iWjHs8bzCNvVxLkQz7w4WJyURMjCPjzFsZH3THpqjow1WS8t7pjLwaxoTVbU7T",
  "key24": "3B6GUTfFrE2hqnZZyYPZEv8czve5FdEfiahR56KXsQkxqoiyRP4MyqKkQHvS7sVrzNNh46rUMCJyJCpGG3jcbp32",
  "key25": "2C3Fwj2prk58S3qjrmnJ7H1cVApybVdQqT2G1WvfKsMEUWFaoJjKDowvFvMifhx6UU2mz9tuyiGMp359RBZ2qfgc",
  "key26": "3RRDMTYJqoRxDVgTiSPDyiPupPV1vKTViSwgHhF8dRWu8FHYPDZMpMXD793bGRPRxRqH7w14E6GnExQnYzqAt5Sz",
  "key27": "2t5Py9TEdDTgcCeJfqtMA6gc3riJp48Q5VYnbEd9M9MRueGqQfeQQZmQUM5hArbRHftdHJHW8yJyXvawzZWCApPB",
  "key28": "5S2PLgkiMkLyDHuKcfHcrVxq6mh8TpDHy5ZKPU8vvDaxK1eKaHu3ccbcqQ8ZTr7yP13SMYkdWuxSP9qdwVMs5x3F",
  "key29": "418jiVM6we4f1TrgxUCmmnnRBNwpvbRtasaXPFp1ZHs3WcAX891d6F1dJsoocGMoqYK96D4UP5VLzZhhNW6pb8jh",
  "key30": "5Ci2E4e92wDVJ3ojK7jLvypJNfM6y9dBcPDZCtDNkNkirxxqqRYPz32R3YNDcWLyEu9AQxrkXJSARqFDpKAGs4qC",
  "key31": "2R5kQF19359hU8YTRPKmTjNo46rN43sqXDsHsWXuH1Rao1iiiN2swJotXRXyoEYTHEycJB7Xmd1KzTEwuAowaZFy",
  "key32": "2ctULRXFFvewSTaThXMeVkKbh8aWdyd53LWSXVRPcceD8889EvqHVRHq5p5rt5DMeLKpZw1GBcqtGPAujLwKt3Dj",
  "key33": "4RLJs9Vh86AWHQ7Us1P4o6m9PoyhpYA5jGY9hW2h5QuhBtWUx8jChfg5H4X8Funjut4WAz86xtsZKLcD4Auyw1De",
  "key34": "3WXK5FXX12NTzZc5HctEx17F4Uo67AA6zCeo7Lujg2vftSeGDiBztRxwaNphAbW4XCTYkQjezAbui6pyCfabU3Ur",
  "key35": "3i5UvNQ6WQhBFfieK4r3cMaKREA4CKuBpUkrj1d6kLA9SjdwF4zF3FeLbAfshvYa5RdCa5MNyahnadwMmCrpJHNo",
  "key36": "3Dnatod3vhATnzwbaCDTDJkUANRvn2cMUvSrbHZPQUQcA4ouDuXVz18Hjh1qR7wcSphHDfSsi3YnZ9mc84abngzn",
  "key37": "4jfEkdaMHJ2Dzp2DsH8AxcN7izHGWT8X8XBeQQVMLjCzpWPHYUyTJ9Bj1Q7w1bSgfomvpmkrUfL44aGVZTaxLDnr",
  "key38": "4zmc2Ne8HczqmFTvKPzxEE1dmh34VZ4LisK1xoh2XxiRLbhmWgwJZjmTS5ZKG71jUsSCN3i13jshT7g697Seexec",
  "key39": "2Vxaowni498puefjZPr5sH13BJx827zWwkU9LAzMWxrN8BUXRt2dZ9JzX5pYcCkRD1u811BpziBgeXxvNwZ71fjP",
  "key40": "2NEFEzYDFwC29H8pSdcMnrLGxRY1cQ5BHwW67fn8gP41THmLpS94zxi3377rRbAsd1ZUy6qoVpGDdVV67Ajafw6r",
  "key41": "4QYvmWWFomGHVSTwD45gYzNbY8bKFutxcYEkZo51kAnH4MJ6uBuhLRnEdUm8mefRdkNf5TMHywSXxuMTWF3twBTE",
  "key42": "2N5MRLXXqR7KqGvnpxa8nLyG3iSeteMpegomScHccMwd9HcSeVw9Y8VV9VAeY1omG67P3Mh7s47z9sEWB8Qk464f",
  "key43": "4jB3LbXZt8KUDB1g3C3hMxCM1FY3wpwdECzLG1FtvKQPKvwFdN4B1kfxqkrDBwSfZDULsaWhLWJRsggFd5UNtXUd"
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
