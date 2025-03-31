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
    "4MgH2ahFD7gB8CnostquW18HHGhy5GiEwpxQNXwiP6fUvjz79cBeVCTmLxKisMpGpnPphjbfPZCXQf2sZJeTsvtW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5odASi8uVCbQ19rqF3X1XxDZrg9EAsJw8bZPVzTuZx3gwRoppjPBPSGhumCnBbxbPJNumPZtMrB1iexxBkQH7cT2",
  "key1": "XjLfJpnwhWti4JJ8Q4ChhL5LjqvCWtSMauzMf24VvifqspBfs67WdmXqrj8bqdhFtHUwnmfRoqBZXqTgcTMUegJ",
  "key2": "47RxNdCiF8J2GU9TK4AVgww4LBfYGs1mxrHVKAk1ug6drEDGGrDFQ8XEQDB9dSKmam5JfNJod4r6jgASTddUF33k",
  "key3": "3BjXAbT5tywzHCKVWDMV3Jn6XcB2nhmduhMnuWDnXEav1WKYYERLdXQsSi4hczLZS9sjtnb7YunT3RUGz6DiWFfR",
  "key4": "2WtcqgbqFHQqQTL2j1179C5jiYW1NNTCf7sbQoDnz28roc2iQ1rL7YHpBxaG1xxoRLUxguCX3GFmDW3Y5sNYsFFD",
  "key5": "4YNpk7dmCncWw3ZeK857aWycP4cRXdoXvXvRFs1GCrgyW9TdEGG6tvUfdqi2xgb7bEhFcaysDB4N3uBVmjrff7Cj",
  "key6": "38QFNHARfYgPW3C1GZQ2nBhEutFHgHCcQZSKfe6NZL7KBR3Yu7tRgKVh3yvh6wbDzx8tiUVCE6oHjdZw3bzpQQAK",
  "key7": "5hHKAohzc272GdTxLDxSd3E9jfnLxeUqvtdnMiyHkGecpFkyCUYxv2XH7KWwjnVggaub9MMd8EHJfR4nCcdqnSUr",
  "key8": "21yNqRFFqn3FjGHtZcDgf5GM8F3iUwp5r3RKRgVEarzFfUQNKnF45wajVhrGHrE5ZuAhmFciSX486p7EZRkR6GAm",
  "key9": "4VPJT4ZcMfxMTa9x6srGTj8mLwumFiS8BphZAggfoYHE9z4QXDnxiMKCBEcgHWwUtJrj2pdSGeW5o3xSnKxUdmrT",
  "key10": "42bKRWGUN2G73eMFwPvCkLmWX83yBhyVUU4NVEseb3CLSRHYoxiJikpcxnXRGai3ts5yRaRjvezvKGmJWEtbjXJt",
  "key11": "2GtJYqBwPNHBvCJNu2bCR9Hf9yHmXtTJ3A6cSLW4QD4SJtcN4NsyBaYayi8LacHHbSzNEJrsXEg4pyfCHii3mfUN",
  "key12": "RA2WsEnxAQijEWHKLsd55ZEnKke9pEAa6EQzHjj9pbhNdMyvvwNwciHisKUREBNP2YZ763y3SDLsBNc8NkFXwtN",
  "key13": "4T3iz2MTWyTw7pq7xBG8bAYYxgrRkxtUNDVTbLvG1cVXCjoVRTPs4jzjTyhwooJtsQyzLfC4YuUXYhvundjZQB4d",
  "key14": "rEwxPV6tuUGdna572KJ5M5oRsHW48aMVaYVxmakBVFdSMusA7jBH3WeqQrFHPGKf9PK536gF4x2ob46B1U3p4r7",
  "key15": "5o7D1qykzaab1Dvi3Yh7eKDPomXTVA925NjNzkqhyRMdw8JKvyfNGM752dva5DUANFqiCadTR4XmM6E8tdB8DAhf",
  "key16": "4ngYvUbRFbBBiEyy2LrQwNzWMzU9RkaCP2axpCPYrFFobirmQ2DSmGANB8bdYfSSS7Q5TKJcQLvtaxea6pQSNCeb",
  "key17": "4wVZofTsVEgG8ogHBRnwwPBHQhLrFzspuUQkR8VcUwnxgzqGZZCbc9FwfJkyfw9a2UPcFdeScR6p2CrxXY2jLVge",
  "key18": "3ACCKstFpuUHbYfnYJjTPk8uWPWqYkVBowh37wmjZ1J8ov12XBuzjFBgS2kqbw9JcyqMBNA3aaagiaHjLaK1T2SF",
  "key19": "2UjKGABv8y2X1x2qc6vTXjuU5gHFKRRb2vLzMWBF74ULf9w6mkUctrCXwoPYVu5a2rsrhA4tR3gVsdamzW998jhv",
  "key20": "J1kgeFqc5XwMtw78N7WoAsyah7Xf6g5qAosMS5ibYYKMi2EiBs1nNmu5WFH5yooKBiA2viajQcjcJaoVRh5o9e2",
  "key21": "5FqvEo5cGToNGjm6iJcGfFKNx5kFrCQKDvpjrPjaMQ2ByB69dgvzk4iENR8QBvckd81VEdAPqXHvUkvktDyEV4Y2",
  "key22": "63owEw8LAqq7vuYiTBvDndrZGjL2933BicuLzVjXDYAi1b7nATsSP5uSc7Y6AZdEtijUc98pjJMEtbNXEoKR3oTy",
  "key23": "2JNotsjgHMGQHeMxDsNnTvnrtugcdCVpHeM4mtLifhwgnUbgoCUHzJyntoa26dcjUan33C1WwConMujnyK6h3ZDG",
  "key24": "3PDA4sVxKjFNg24iVLLVSxTjFiChQiDqZd5rLdV4NZmXkbjeseCidDSR3SffymnvbvbyQwjxF9hWFoEYJe2Kt3RA",
  "key25": "22wJKpJ1RTaNzUsZmDkh65gKyetzhAYxZF5GeQ3TW2o5D5YBiL6y2hBhsa2A2Q1pDKZUmYPnZcEd6DzEyDTSqfPg",
  "key26": "3UpyBUENXHtRsPQ62RtFfkUNUZZCPL1Z9ciMEhZx73ijEWELEveGnFhcEkNX82z6Kp62yreX1RShSA9nUMLpb7KW",
  "key27": "5SG6hctQ3zSVRdo7J9cmM1abLdriq4GSAtAESXv1DsipbzVB47kaRwhhFJooGsU9MpovYkcj8itMsj5wsj5g6DJB",
  "key28": "2Uz5BaRuLrptTbwCHjegHnjAupLEBNrYMdb9LEPvRkcpSB7nojzDhwbV9z5DBoFwPVq8vdPrS7Ba6KQ6gF9MVWXu",
  "key29": "5m43KEAUPWMKdHAvBUQ7i8vg7MqoDbAReDB1NbpBxSBnnXJaqVzzx7Xo1kTdAaK3S85jCf1tBwhWHWfYKZjgD1Dm",
  "key30": "3D4p3UrhdgAFDpsiq9uQ6fkoZ6DYqLFuMMPDEantBMegCpLf4x3KpwUkcVRSA9bmgiRBDBngzSMF1LhJfeDFXuMQ",
  "key31": "3durixr8Jdp2J8oJgrmZpUMibLcHxEJcA679QXsPvybLZbgVcVa6JhrMQHRqSU559aFCrk8AbVwKM6VZRLXgdMZ2",
  "key32": "5Ef3gsGBwsZjU4Sg4mDGydoKmX8HUGoKck6j7ejUCVvgD3e8HST1m7LyoKtgHGPEqy3X7k76sfpwEzxi4G8N2g7Z",
  "key33": "3oZFbdkcXCteTPAUZ3m5wAwyDRkvLSQXTLx7DqSELBxmR81bQ9XH2WCxTvQcXVQuBrnxVGib6FSXCzYAw5WACbi3",
  "key34": "2DKHEApTnS6Hf7gywX7xrkPCLVrrZkXfJN2eB1Mvb3uFyVfaosnAPcjbqcMb9NdCndLqmMbaBThzQ3pXibJ8XXKF",
  "key35": "5ZWP7wm4B7Svt6ENnb6UVF7JWWRtsoeLbNKcyP1hpLAWThDWzg7s3B3KUM5yTuRJ1966srjd2aj9WhDgtypM9Mcz",
  "key36": "5qmju74NPKjNAr7i4GvAt8jCU1acJDUKWX9BQUV4tKsrXwu5iL5Z5zTqzKvxztAAHuZbiVWGuQ9KWwDgcBLRsDmc",
  "key37": "2xcXVnCvG9FBocEpYLJGCYqbDhqF79bvv5J9t4ofFZXmmnCGSeaGgFMnwNE1AJbn9wDfexgRzFZF5CxKpV9g5goM",
  "key38": "sGEtrq25VuT8zS4FyVjnAm4pMv4ShbLp6ABqUqrXtzWJu2URQoNhNaq93GsSaeb2nsBLJvQx6KqZrDjJhgm37xt",
  "key39": "35BuLqZqn3KRdGxLjcUVBN8crZn9dNc3D5AWvCBPQgTW9pTCyvYg1zp3zhRdSMgYfxen2QLAbLKisFmAoqfc4Qs3",
  "key40": "i5C4avgdFCmhh2HS7xT1FqKV4SxdetcqoYAGabrzgihWWhbfDTKQ22zAfvLSWpRDZgn42P8attfLEwreU1znpuo",
  "key41": "5zNgKv4o7dySCKXcXFfLuZ5VTsvWZU9GAxBMBLHyuruYrvMsLyqQxN9DSCGBE1eoMS8szgSsdw4Ek7xAfAapGSXM",
  "key42": "4a1YpgZyZdcMxDaAWHC1uStyC9rjtMtTsUSjrLPbDX8fo6NPLRzq7oN99Un7mAAcDhdPxenvbk5CjAo7U5bRrGmq",
  "key43": "2rBDqCrHHjCZHFm9rdCtpqmGCqb3WEqw1YDLoNWDqR7XMs635g1rE1LN7YVGHqdm3YfwcfueM6R56CvBAaxnTqCc",
  "key44": "x1NXVzESxqbnwx77Jg9TsNnHQqHFx2ke8ikp5c4T5QNxjWggPDmFCcDcJJKjYLYTUpBgq4DXnoNYytN9NJDXvkx",
  "key45": "2fPi8saZ2ZD5pUCrduxmPncyLivUGFmFW3BqtpyNqmwSxyGocGrXSS5tWYXtiuGYnChtMTSKiBEb7dY7nB1EKgPb"
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
