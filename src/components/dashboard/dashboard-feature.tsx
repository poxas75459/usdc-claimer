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
    "tCuAFtL3TQPtoZv1AZwFXuhaUX37NCcsjwoAix4BhQnRkwrDFgUzeaveaPBCXEaTLACW2Uj2qkpGfcecihUAEkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "572mHZAGEFT4D9MRJC9zMcpM1LRHvT8LatfSYRGm2raPjNS6HjQCBAfpQcgTwHvBoqk4omRy75ew9bznqUuEBW8N",
  "key1": "3SFeuB6Wmpd3mVdcczsXzQ7YXxVFnVPkbanFKaLghggBYvohQvWGj4SbwLVVQFkaA4CzmKcj2bsomyhdCR5TuMC3",
  "key2": "4WFdLWo2NxC5HiSNaAsPKo3pewDEHSbM1SDhfjjQxLCpwUQ5TeAWX4PFggk3smr5c2bHbdtAskYKB6ZRVYdJC5QD",
  "key3": "5HecoAWKvhCbhXiTTqV1A3t4ZXHKAiPGrKHYH2TFnSde8eqVjcWwGbgJVo4k7CG7Mdi7N2WXEeomxX9GDWYHZWhG",
  "key4": "5hPgeyDNiqTnNDt3g7DgjBszkmCirPc7oCCfmqfSPdVtsCNXnD5F9yTgWysWGJxmbDdwP3RPsHZmpNgdQiMB4JTE",
  "key5": "2E18tjuyYnWL8juBDrxTT5NtXR5RW96YcMEjpKqMGHTJ7LEEWXpA7H1XUkWKh5Z8Brjm9Neotzj9drj7kEpSeiyY",
  "key6": "2p35iibjQutjZ2Y1WBGbiDTuKrRYetrBYSfac9Hm7siZE1FxrXUDYAMYyV1Lrc3e3uYou7MRBiH5qQVmdDU214QE",
  "key7": "2utv7BEZtL4v7Ykpw2WgFzGi5mUSkegsxiSHBCp2MPq8WNSEVEQPyKnjE7acVL3d7Hkt7X7t9hA3uvsuh4Ssj8Mn",
  "key8": "3UmbbrLokSuh7CXtXmWb8gj1P2gk8nxbyr2GgiBmNR16MzuvRYMDfVw3ovcLwz8MsTh24tKS2kvrB6MgA4ZdR4pY",
  "key9": "4kvL2Nv34amvtX4awHYts45mtbTfhv4cVpcZsPFWxswfN5mVu8YMuPa98o1yuH4x68nPwrkhiNSmBrPhsDYXRz5b",
  "key10": "5BtnamPwNmz5Z5UVDoNvuVpxAfsf2Xm8oBSG5hWUmVHjnUuAfKRSaYTR24fPSEZT6Byyrc8X6tjrBbqjH4oF39FV",
  "key11": "Cj7CcComA68qfMjHwVCNj3ahG6nkyraqy5dfhBtcEew9xrAPxuPsuQKPJDqWn3G9rziHNcT1eGn9fpVDMZDK7aG",
  "key12": "3pCpN71N1zFgpCMLTuyMHyZG9WAfHJYojkSTCgr7YEuhwzrojJv5oNSFrpBaqM4cECefD6KzWsKE8yr99kG2bR4n",
  "key13": "oDHEzkoQufP4xpYeumaupBFh6FRs2HceJ9Ns9f1gPMkVG3d7fUdL4cbXEuKBpTqSWRVwZpwVCfreP5Ng5uGHPu3",
  "key14": "s7kSKp27hktuB1n7Dm3Q23iQXk6aS84HpoQMetBJ7RS27po2kcnTNvE8pCzZm6d9TXqctQV4tEPWDJJQ3Pi87Yy",
  "key15": "55SNmgVdpxZi9xy5gaYeQ41u8zq4keAofs4J7waGJ4UU6bsaLSiPrUCwYMwsi9aCnCDfvheoWqUBkXd4N8knaefL",
  "key16": "5Wp4CCG2KztqqVAwJ6PH4uVroY1WiFeW2NE9LyvmsRtHfLSdVHnyUWtu2X8oq14XSa8k2DJ2cWj2AyHUV23T1cyS",
  "key17": "2BWzX8zCjEteUjfCGVUwzKuZLvgxJeKasxgmNEwrhZ6MsGFTVYhBuvk5F11QisyFoFYxtuzhywnNh1xnngfscJiM",
  "key18": "2KVLV2VikQqycKQzFWwHiSnncr3yF8JrKfstSAPeRTkfJVYQqsHVAWso4qyTVzQbPUR12KbPjwJjtMjrgmFYPCV3",
  "key19": "5b71dcGbzwmN1sZvW8BZJsvBEnhbNiYjA3H6iQcU3djNAFjEzNZo5ffdvZNMQLHw1dzF6hogYqftxSQ5mdVJ8AZh",
  "key20": "5NhXuFeHgwv7nkcb2qseiiqEsprRVUrHP1BDFBkAKumpev56DjjDz7Mk5gLyMAHDNHbU32sFWWbTgsyUYpHUVqLS",
  "key21": "65h1qezS5vSEpD5m9t8W2iXRtiJ8hBXap4eVTFhNz7TW45qFvJtAA4Fqp1dLFBHaYuCYgetXBqj5uYBo56gP8Xue",
  "key22": "34bDUFnWubetP8w1Ch2FF98TcgvqYn1aiKFTNDbcHSKLda1UEcgXDFB3J4424GXj3kxwMyTsaSWhr9QEh87Bp4k6",
  "key23": "tRQvhcsXk7DR6aZi3nQUKJb5dKwNhGkKgb8ux5g5auGdLViaF9eJUgk6aNGcvKEhEcTPfb39Tm4PpsUqpwnzEyN",
  "key24": "28SyB3e28MU9Bsrh19EAYCDVbUMSRkiZoz74AnFmXgoccuqB2MzKnM9WpK7fFrGYk9tYsgqPLeJ4ugH3TZEnY6em",
  "key25": "Qd1T9qTwLFDbjnFw4B5napGgSAmmW1ENAB5DvWeWuFknRwxwAZMB496UKcWe9K8PE5cxZ73h6yRraE73JbAcSDS",
  "key26": "41J8axh8sb9gJBr888hM9wa7FgVPuQazzMJ4QWa7GDXjyLkzLKwTq4KA9k2LnYLUsoCea7cLJ7ezKYQhKDWhvmzU",
  "key27": "d1oN2hMgFC6Aaw2HnAceaHuMBXEXA4Ngkie4p8MHqgadcXJ16tK2p3Ud5rJ9B9c97yKwQG1kPEUKT8xi9Xroq68",
  "key28": "2XLZcrtKZYPmm837YHYvDzWW5bfeDcjWVJxuxaokdookK9BSWhQ2peuq7kVtaG2rLpLpmRzGDL9Y5MZwSE1pbmLy",
  "key29": "3tW1ADVYdnVYt4dqjSjGogAbocu7qAjo9msy9Pnh95nxfF2VbSGDNG4RybWwiHUmsjKuz5HaLy5JqjjxPgtz16Jy",
  "key30": "3c1pPuttLdDf7RwV9cJ3XJntC2SmpgJuyVtszvywaT6U3jCGWFGT7qpAi4n18cMopPDws1x7vgPvMtBFzPBRmvgr",
  "key31": "23t59MFunFwRJ18N5tGbE3pRFNsDNBWv5cwgmufS79ycrK2QnM8VRSwCpkJ34ymePYXGw7NV1Ra3koCfJAjToXh8",
  "key32": "ipRRkJkiYawhimbsrTeNryNjf6fCrDHf19rZeCuMZQ7mUBobMLpvAvvCn1eWDKnYLGaEtYVJFMVY1TjubMmKcAX",
  "key33": "22RDMJ8SKw38kLvwbo73skNDcEj1RrpkjCs5chEfwEpg3HkTRxjG66C8s3k6sGrARQmwbGwckpQAVETXS1GhGat1",
  "key34": "5xbZDrVgfk9SupmdXAiR12hBZp8EE8QcLbx85yQvyWmgajmgb4S8WtXqww6VSuGSPovvNqeLXKia3zwVR7UXdgSs",
  "key35": "2CRcRTEfQrNjGyFdPJZt2NfBdy9XaiEkbfGYmatZqdjwLk1TjBs8U1AHQj1TQd4cTnuqVZnkMxuQpeL5hvQcSYUC",
  "key36": "rZ2WpLxmDWVdfyP4hQFuMXhpA3L73tH56h7TBFr1nuAb8ogH8hrFwnKCHxueRcShT8aR6vjRgEjjFHhfi4h2Sdx",
  "key37": "44CB58koFrhnfZd7MadCFoLL8gfrVpNh4hruyzgQktvUSTS6SY92ah6yJhqXz4oc1Ah8QXN1LGu1A9ntt719pSnt",
  "key38": "3cuE1VAV8s8rK2KKKZuQdyZcHotMxkqapCPRMBXrwbQFkJrABSzXj2Ni9DCvYKAXRuiLDjj5utpsTLMkgV3fYst9",
  "key39": "xvxUCDZxEiyWPopcHqdmyRc6mzfvE2fdFxYTjbRqYvtKDNfYS7CNyxRoaxpEJTKAco8gKb9pwXs2GuTLMpMiFTk",
  "key40": "ujMgfDZeRKTVYT3vUevjt8XY52uXTtdbVuuwWCvVLNWj8sQhnwnywKxf92DQM5KvfVGbJEGvoeetBQXaUwAMExo",
  "key41": "3aURXhHGPuSM6zxEdK4ajrvARP5xw8rsuNnNuHqj75ZfSvXrci6bV7t9n15r9aM7g42iAZP2xRBUNS8Nyj18pxqG",
  "key42": "5qF2jeuF98AwCrdV4KSiwBwQNVowWoQaKXP7syoCAzG9JPsnLkfn7knX9JbWH3ydA5Eojo8t8am2N6oHZfRdVRiu",
  "key43": "5BW1rcqEfhaqNorhayeqLRheJveTinvVPPFfFqCPLFmpk4wMKtG4j5vqFnekL8tm1FHggNNSMxtbPqtAFvtYpCcH",
  "key44": "3rKSwYWYMTTtXEerURKnXhAyWLSs1g6s6UN87BFZp9L1CCuHXVVkFT1vaNqdmbGbscuJ82Pfqn5b1c1dTvy19E94"
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
