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
    "5sgKxBKwizuPUM1p6KSCEY6YF1CCraFDxSS84UiHYiLAfAidJTatyHC5k2x2dPacK82it9Bp4y8b1vtp7iX87PpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GXxdNLs3FokiBbGMi5HGsLUutWKueg9GZva8Gna1UhwrL37rAzH8RrMFEm71TpS4uNzAupb7MPprtKS5KEjFi91",
  "key1": "66G45jinhTxVwYRVnnyT6iFYajzFFCzf8NtpiN45Q57298qBMtLZt9Ja4bf7tGgvEwhtFhPZ8vxVTZ3Da2rizKko",
  "key2": "Q7whHkteovbbAAUGtcFGivjRT5DHpeLNNDE1rfY9KkLRcGGDELzcuZyzd9SR3KGUSwsoEaWwpn5BsgsSQNsZ4Fo",
  "key3": "4UYTiEHBBtVdQt2f7Gou82t85tCWLTvVH1EsS5jHEr8mRuZHuAJZM5WmyuuQ2GmtCQV1rEz3DxdmcFJAPXtyF6D9",
  "key4": "3ciuPEUfhD3j4LmH1REaJTQPeVULrtqk9crhBSnqKzmUtB2wjqv96aR6LZvhsP8JCWJGkLxnbCkWsqFYfCFgRZuy",
  "key5": "3QSUME8zDqwQnvJKtsCeyh8kq1STVCEv19YkgRCht5KnJh3DiS8Lz8yEux789sHJtn45y7H1WaBeUF11HmGFdCUT",
  "key6": "rgSUrT2T9xnRLBQyz8Yif1d7p6j95mWz8pZFH97sUBgcy9tDYLdiqMf5poeiBAVeFtSb2eRtEmG1cEdYQRsBNGc",
  "key7": "2J3zKq2Mkb5rLZFMDi8L1kJsbR6w2YXNrkvS6xUHjTXkmYiPm88y44kLsCttf5UrzNp7YuVRRHZ9pybU854fi5dL",
  "key8": "4JtszEWg2CbGyVojJKE6pMHPSnyqswcRHJbcWpsyWEKrm3dxsDSJnV2zUGTRdP5GouWZVvftTuKT2nPC1Ex5QpL6",
  "key9": "5yiTq1GLHGqDmRXDZWfLzSBAm6xTYbYujBi2xxSzg8KZR2cY7mYv8dWJDc6KNqFDQaVW9Y5GZ2vjf1yAKkvEwd23",
  "key10": "26DUXYb5XcaVwByc5uktqHkawn2b3rufL5Dv7nh2Hzj3wu8VKymB1JkptWicNRmM8Yhh3HMSsrGiZi9Mc5fEqwEX",
  "key11": "4AQUFx8JcdKknskdZhn19DfYXQ7f4pJzLD52vBomvgWZCvYJLgr6syGixeECReW1WBkzNDm8qvJrAcecb5C67HZw",
  "key12": "5RoJKJg3ui2rZaUkM8YSygdE1Gvs3R8nW4EWGbyebaBsqcL5xdekyHk7R7kkvva4uw3xj68hnjGPbC12xLFdJvHb",
  "key13": "2JAoQt5EvE82vsxsCSJLuSf1Yc2cd4AJ88GesRtTHg6pcZdYYW165dQuCAsHHaVrn1G1JsHtozxGJYGhMWjjMABq",
  "key14": "3CXNr45QaXWBs7WrpHdkSetNZAWcAso3YQrFnjbYtg1nwuzWknqskD6yTM4yFZ1QfttqmWMxrd9ntiMUZSTwXRkB",
  "key15": "5ZvvJFz59bdenyoXtaeq8gcrxEWQ6QuPZHCvn9NQYHianL2MjLnyn28Lfjq3VE2zBoDC1Fp3fhN4NdDr6dfjvvoj",
  "key16": "65zgm7NnNUhYziceqKAhNDgF35BQcDYVU1YCdyV4PEoXrnoQngzNxKCCmghJLUm4ECumASMXp5QKZjktFfACFNsJ",
  "key17": "4ppGWZpGnHgV3eBkrEHdRx68tJSdNKyvWcYUArFcLGevji2i9HeV19Fo5itRGnkawtpCEqDVGKk9eZEoauRMuxYo",
  "key18": "4nAmneg7qUWcR3Cws4U9ASerKdKhLCHAxLemubJdKA2jwrg3qfjmqFmmJZhGSCCvhAtATUFSBs3jmptbh91qwBt4",
  "key19": "4J6YaAanYhC2hSfozYWfkU3aYRGjPi6LTHGCB8aWdFRvXTGgkKWvBN3SS2taTUQPgsnkQYF21LyEtiosZvTabd4A",
  "key20": "2cBxu32v8vgMYUUy9LZYTjccNnjy7hnk6R6HHkHD2HJek3SeAouFHocZKHeD8ZEh44zS5VZEHAKHxGjsWr8Ugeu1",
  "key21": "2k8ybQNqxngKeJo3BwXZ6cznTtLDckXJcusge2vB1yKnr8BwK3KF7bcycCpuSWH2Fqn35hDmM1rFBng44U4N3oz7",
  "key22": "3xmhgPatYghrXCqWkniXvv9pTHWsn2LPZpSTzhHj2NL8GCYS2bM8GxBUgPTpNmQ4oD5wwBNiny5RLBtcevQpm9d6",
  "key23": "YgBTyoetbimTNxNf4w4wNiqGwKiZn7YQWpcqjDpAo5g8VevVAAtjr1WyMh7SPHQG1MFREKDTAtVeWb1i4yfKWHb",
  "key24": "4JS71xiDu57BkkToATksym1JD6oCZpa6BDpntu3fNxWf5YV9UDQKwjLv2T9TdPHGnfmPYWz3wx7rtVJKNfPKZqKD",
  "key25": "2S9b5ukSUjZCMvvpk8EyXuoCWR1pnEESxbKbhqJoy2C7dNmKayJwPVAXTbfAB5umyqpvVhVccr27K38L5pjqL59C",
  "key26": "3fQZbHTEU4iR9kaBVokWiuhnEggzoSpjidwr76bwmtkDV4ZeNhVVzYGz8khvBo81MMbu9ztaMsH1NnTZdyH3wyZ8",
  "key27": "4MUJZwd6avFyGmmCzeVEm8EdD71vhhdu6zwLh6Q5Rfehc4q8WV4P1CQgkHkpyAeASym7YKMgCWgYEVexjRLTK1Ky",
  "key28": "4F7KFY18kLd4MjpDSNGAQWHv8Lcgt8Ef79WGf4xKAZ4GkP8svSZH6wLZvh2ZzH2th8JZEezNcXLB5Qgbh4yfX3C5",
  "key29": "2pwq21ghtDbVYHxbJ5u1sdCCFX4LsXXrYHxSVBHWHwhFrjZPUQgzk2D94jgTj9fjospymHBzw6FnYenGU7vgaPM5",
  "key30": "3ggSMM8LA2oZXdsdLDvB1zP4fpoJepRUpp7KjdcdVpqmKP8wafW6BCrZPwsB3tw6M6znUMbdyjyhyz1sy6fcgwcP",
  "key31": "4f267EerejqxUUeJwQPAhD6SBP6ov14rjDhCNnhDspVbhhevoKRhZpjx7hpgRMu6Aj3UJbbuEKA72WmfYJMhKs65",
  "key32": "mn1v8zwhtdSj2HcLz4wAcZ3hFu2WnAizkqD8YEocUdk1xpYkSjTig4rs4kG8xR6mTpGXXuop3dU6VEFN8xm3hKG",
  "key33": "4TRBpqkGNa95NdsTqKZjLeYksy4zehFq9RnYeVHuCRFx52rLcTjdCqcprz6x7zbp2huEia1BfN7j8b8C5sALgSNV",
  "key34": "4GfJ7h4XW6oskyzwE9uyRp4oPs5QfvPyyQMn4y2GVoh3ZhujTZxKgeyRDCnj8XTVFuBknSa1rcmZJ9aeqsuWXLMv",
  "key35": "RZUrrfu7owvhnv1w9J5b6ar5mYG5FYmP8Hrd4wnW96Xbokj4Z6cAAXoQwyExBFMz6tMK3PVAsoay1o8x59AJ3Qa",
  "key36": "5GszmEzyqoXCDZXkhrZCxoREsNzprW21iYnYXjNzcH7Ew2GxNhScUTYCbw3SpUr4VcMHwcN9mBfQwdZg5X3ANVC8",
  "key37": "MpU3BJEapdJzWhvQm2YhcSa5Kvh8ny9utAfAAbyiNp4Jg48v3WR6TV1vSNhbmBXo5vcMAA6qUiRikZjL1iqFeT6",
  "key38": "3c6HXV6ReEgKFVkrcNrpq6roRURMFzeEubVaPfzVVjdaEWZNDn4tnmWzwuU7toT15gBwrtGfDFYxjuwW9n7pEsi1",
  "key39": "2WhBvNLtFjSanrS4QHLHQrmd8js9jRCZaC1wptHrKDvk2We4dFQyqdSjBWjNrEwETzw3CiEvAxSq314YSMVkAj44",
  "key40": "3CvUzpvgX7U6SmtD6GESR35dLhmW5C1FbNUffxMgkQqMKF4uNLkFZujKRUwvvRhcAj3qRhychUbsVB9tFogwJJ3s",
  "key41": "2kFCYXojiZF1kUZyMtLLq9GVddVnQpZKXG4ZKCA6Fgvsg53327BTxZtzMLWV7Z9ybQZ16PhxpNSYVuTmg6h3SjoT",
  "key42": "24PcaJ1p5EZTBuc21g4KVuNSoeiCpPBKAVs2mfCZKRGKWrEjY4xQmh4KXzSB9gF3U4BUug1pfQVkFYAXNCT3ZzUy"
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
