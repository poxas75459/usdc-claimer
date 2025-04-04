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
    "5RLZcqDByrutrE8JcNQciPcqopUxdenrT5zojs5V8AgTvM9ktE9cgzUhTdmFgpzzrBAkTWD7k2QvNY58hUAcaGZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31MLxSeZuMiNhQx82Tdp64dtfC7M9MhmF3e5fJtmTf5fc4aYnU8RCMeaPQvFAu61SNjPKsEMzZKkt5cFsHa7TwoV",
  "key1": "3zGm8PU42XunjQFBWfxvkKkEt6upuaXvotQezGLRUziGV9a9gWJWJT1vQove3tKBK7TAKd8rapsuho9k1n1eDAS6",
  "key2": "SKUvHwYLJHgQW43Le6kX68hEAbZ2sCuCTgyKABeHSCbSyTy4ui71EUCHM6wvqe31c6fjZDGQJC4aZg2pKj3JvKo",
  "key3": "3aYwmWTAHVD82Y521rjJW5QUKqfenTwzg8Zfd4mnYUjaRD1jfPJLwvhnavC2SU8ud3dnHbxNX396ePpq8ga6Bz8x",
  "key4": "3D6iHEhMVHy1mfhXWqgMwqtWRWoZ6aKkGBPnWyF6ruTj2wZBG4aggdv3MeLGXiGYZa6K1awM4Jo5drTjeohAFjw3",
  "key5": "5s76JvctiqhZHB4pbSinV9dPYhJDrU9doh4hqonrmDTrfgSuMqUaAnbeSPa3aZihs1oCK2pBEFj5yYqXxoXPGnmi",
  "key6": "2cHcVdnSnSeReRbA4DxGKyVa3sRXQMA5B27MSLsL4SSVAQp8b4UgHHk77cmkwiPFNHNStLMs7V18Q5p8uGUAFsLa",
  "key7": "5cnU9cQX7Nq75MFQ6g6wRZD1vqgNzWdhyCLwbTk5qUtaet2K9XqY4hhrh7LW2bWs3eeBGjfEWnLpLtpv9o6yeJEd",
  "key8": "hCo7cZ3Ywo12QPRXy6Jqg1BwzvqHCBZVDX2rv3knh9Ax6q3LQiiCgTYFvkBHMwYDUjy3zLf4TEMY5PfF2gC9yG9",
  "key9": "28B9fKxe6xVncSjFfZU9R1meMngCmx7z783XFsdWtjMxqVuLEHKejKdYohEfjrs6oGW5fypMP2jbvMCd92HRQhVN",
  "key10": "3w48zB6zPejCmru5S4TSYcu2PpxHSirCXSpVL1T4wV8cBAKApKpZdshtG1aRTR5pHrfnVRgDYZN5n2tiUK6xy7Ax",
  "key11": "4T3hAFSxSJnKziekAa3CVeDgVQQLKWqxdq2X78TKDxPEvRs3RNT5BSGtCmKmvM44xDEU53y6NyXg8ddE7GwGWGS5",
  "key12": "3VH6cYR1zmCrt1T4mj1XHqt5yjGqV4ySnzDgvgsDUorGCA2hhdu5NoYneLbDHybBR5pjoc4jbxrDhyPx68MAQfWR",
  "key13": "35AsBHRdwjnX6yrCrvXJhiTatPH8Vq7cbd4g61R7P3kFBpwoFDuoNjQWtNwvyFLXsinQzDFoCQwAfjXcbQ2L5VhD",
  "key14": "3KHRMiAUszUCidt9RpdMfEhhkcvckCUdeCSfRL1x92KjQ2MuDKgVR33iJA9nPWSeBr3nf5C1sUdftC7Kg9tkazdy",
  "key15": "393MuRNHJ3AfLv3tdgdMmijYxu9YkrpsD4hVXieFRcRBusGyzfrbQVY9cynbk5pC8keDbFxW36wiDJzuFkSSGHfN",
  "key16": "cNo4sohRrcvg3DrdPvEAeo5hfRfJ5jUqC9YntUaLXVkhciAHHLBCM652bfZKnce3QFRt9aqzcUxyD9PUaZsRCRv",
  "key17": "2KUDHJHk4thKTBtdSEs8WLmpTjRQKD84C25MCA7pATS5FT44Zkz1jN5ixCtLC4g8AMagYLfnR2XfDfYpvsFEYjve",
  "key18": "aT9BjeoSEn7u8XZg61YHN837v2hefQ18Earik7c3h9mBx9wK3wVAZvckwhRomLKCesEF2yJe51Q4Wcb4BnM5Kh2",
  "key19": "2CVZJtJbgtS3r7CLBWAqLKCVmi3tXV5iM7y9oEpi4Y4Cic7SvurKZx1RjQGEsfYr9zJgYt9BXq7DKTbsmPyC5ZNt",
  "key20": "5MrasVS9QGArk164V4L6h4vnyuo1HykmVsViBqDoSfBNo2pAbc1uBATinSK6XWiLUWCjL4o8uLiuQ2WXbwsKU9t8",
  "key21": "4kA66ctKqD7kAXyv62nQGA9YXBJMCsPZmwTtmFdRVsU49iuqqApHWtnBwroBHA2X7WYC47K81N1ZmsDbQs7QH1qX",
  "key22": "3MaTZm8gbDEckGHGb6eT9Wo4LjbBWwM82zUKhbr51E41wibBu9JSosuMLMmeMSv5Bbovt5s4rV515UKnv3obzEnd",
  "key23": "5Fh7fgWe1sxnHs663SmeJUcnkLN8uSGEmnFVQe82X5WbFQx4udeXhn4dxghsGbBzGLd6Rq3YM5HLxSFjagptuNyy",
  "key24": "PhqvhpkNGVBDKRkP1GuA7zywmoB5HNoRQXfVsfA93urgSbodpzGtJPhn5JGPwttrFHkYAU7HBhR8W9kGZqFZA2D",
  "key25": "5ZTJuyk7f3zQLQL9Y63Soi2qzeaarNvacGuEygHNmZZ8pdBdcrcY2obLcKDXqrcRmkMdVCZovexVaXzBiGFztJzS",
  "key26": "2orA4fRMTUVeXSWsppGRJ2vLLKXwWV6cbxFF5ajivLtJ59D8iHa64YdW27A4N52AinLqcNpa2AmR4b7kkF4w11ho",
  "key27": "3pNygM8pMjYssbvcg4k6K5YwzjQqigdPRo99JkMLUaDBuXCjEMwafq61JLxkuCYyDXrxKVk5c7mDzegY9YQwSfsm",
  "key28": "3Mbo1vkru2gHV45dtZ5MDGAr2zQ49GdAC5rVt4uCBNzHFmPCVaYz8jHaCc4VLtHuo1i2wMytjtNeivdVKgFWNo2D",
  "key29": "3ZpBEUKQ7w6Yy6B8w7eFdaZtKR6Sq5ji4iVxhs72N78WgEwGEts6U46cucMTUuL5cLVFLaZr2jhG4Dmny5bep4rc",
  "key30": "65i8tmxpYZHVrqsGdVK9GZuHCo2C75TVtZJiZGGgxgJCWeiTRS3YsUK4PbV2mRbjuB5wz6o129jcZob4ynCBpoTF",
  "key31": "2QiAH4JbGEWQENUzcdwQXiJMrFVNsmWPHi54VqVyQk7c36HUUigpasozFCQTmSAsTcYeUp6omje6WyeXZQ2QN3HN",
  "key32": "3AzrKtLQ4XXXrPTS4mrHA1cbXYd3hRbCbzJohcni7Ca9NW5293kH6sMHHLKh5DV2jmAPhubQCM7nWvfnZaSMpuwC",
  "key33": "aE1x5xdY9RUULeZY2LGdUw1aE469u3avbtAkfSBCjD75cwjmVtVAfVAwiAr7KotAuJS2kSQRna1mP34G5dwdLjt",
  "key34": "2qSNFBQ1qx68kPfdQkfLWQLAUGXnnk8R4oRdh4xtUHGd3RXuodvfjRiLxWGjdBN9en9qKHuRWJx6Q2uqVLkkBtyY",
  "key35": "2X1CvSU3q7PuqWnT9pZ6vwziWeSx656SfUjHsM2erLTT5ggvDQnJaqpFpMH8kys2Q2e4asStTHFYNwyqEfJs9fQm",
  "key36": "YESEf83ZqXtfz4Mof2DV523vJcURSVvknSm5RH8xLqgGR1CJcVPCPKLq7nbSgR3RPv5Ut1Bf8EccqpgCaXdCGX1",
  "key37": "3KKckVuLktAmMX4xrPrsQZAkqDzysuc4T5PNwcXZHySsZsQ4XG7rARBzzzybiYU1w6f27WC1E11zdLRKXvou73NH",
  "key38": "2v21Ggtpe258zFNQ36X6pe3YTZq4j8fRo9XL9U8tEpBSgjmdMLwL1nRX2RbjQBJSZAXbWWsftr4rAatCTaE75M76",
  "key39": "T4zsT39gT2UVPj9bfogJjiC2aVFnA2NgsxcmtUvPfKf3zjWB4zjpdMGeaVR66YndspttNiKGNvsLmaA8pXGkoJT"
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
