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
    "67Fe3VDfUtcBuVXs5xNAvvFsRsWcGAinx7M2J6ga552vSEGJkNC2vYeurmcoPVyAWiZFJcNqafZf4JxuC3dBeaEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kb1SWXsJhbwyZtv6idhKfPzy7srMXcU2YoNWuKJQXMYTAbjBg5cD1CkFpFYJcE4qLbKbeYkg6J5BhDDxHAKg1DZ",
  "key1": "3HihcMsRqiJ6UxAE53R4aTjgEwzyre4x9nqFt8iMyfvbqmxCswXTFcCGTPCpa2rNYzL3gY3zLcTXz4k1oP4MXxxs",
  "key2": "3ejL4EZgYsGscPtZuVk7iD42Gf2T95a7ZDaGM1Hu63MQriH9DZBeL1z4f4xgENiTi8dPHZtcJ8bxUMcLEoLqCZYJ",
  "key3": "2uGTxTw1cSj2zXtDyBkjnR1d7kNWCVkHpCp9jsJbMm1frAjRCAuURR8MinxcKj8M7jrPC46uDBvkkTapmPJPzyhs",
  "key4": "5bv1D3QNGKYmaQqSAvZ6KMty5k2bUgJwMSQktyHYH92WYbLECrPXDypRj983sFDMG8c1mj5eAEfp9UkxzRP2zkrJ",
  "key5": "4h1rFsXZwLGQa6xR44Y6cEvfjmQH5mtCg6fTiuHALJCB3A1Zq26R3HeLrjnUaQ7FGF6bFv5FcV7Hefiv5y2q1UMn",
  "key6": "3Zpig8bFmRaYjRnuSrEanX64K6McMYFYBgSLKQSSKS61GFF4L6JosnuApRKmZnKbCQzwVpiY1TKAfHs6DaAHeJnw",
  "key7": "66o9g6cjGDj58d6TXkJadrtNyjcYmdSgYKXX7J8388joZc899F2h7443LZyanXUNMmAvQmo8Dbmw1KF7cysm6tZk",
  "key8": "3HUvfQrPPTGr8jch5ukXT7wgoZ86TiRT1XxxLExcpuSXjodAGXGp5Mfv6KVjBxUY26amhFVURXbpiUxF6nzKmoAf",
  "key9": "2cNWgqTdfgK43kT4Jia57Ua1G1jBqgXtLg4Jqfj5jN6mSCxUgSn1kz9HuCgnHf8889qKrzgtERTdsgJnJUvR3Z71",
  "key10": "5fDrcuNdaTPjzUovuqYuYUZwgaQ64mUzTk9L4BpJrsAezhcAPun58AejsbYCFyWewjztQadAFbZpeeioUGyHy8Vz",
  "key11": "48wDFSmEqcXqsVSPExHRV6T8pcAqXQc1ni7eoktmtoPqztBMkFu4DsiwKWxPh7sJRB26wB2f15oD6TkyYBUJXAPe",
  "key12": "Ub2AT56NVcSMzkgehnKEyAmfaoRqBVLN5SWp5LUya43FMpnvcosvPDvChaRAC1E2w6xP65Ydty72kq94zcrouJn",
  "key13": "56oYYSCP2QEFq4rvr5fBzSvHP1H1WHZoGCNPb9msuQY3AC5utMN1LtGg1Wkj6q8BRNJjr49zgjFLnZDPujjfcX6t",
  "key14": "AqgWBxxPkagrMoB1diKrqM8uigrmXZXQ2wZykEb4xnaKG7CV82a1QwiSREUgMXjEnSQqi5hZjNPFhF9ZUEkYEYy",
  "key15": "3kg5kUqjBX9BLaaw63cfMjcuNnHBtiV2vEZQUneAC4uKbquT1exRXjMG1e2ZggLNfEw4a3EpA16pRodqxX1Xy3GX",
  "key16": "3weVxyekn3nEqUZqt3DUcjUUr4WTkPQPMVyJ2fD3WqAcVieCo8UMdRKQTeqJpXYbJKjHrjuN6D7PfXLwAqQa5oGQ",
  "key17": "4yxHiX6R1gcKbaydBWPB5NXRDkfLA3eF6HwZmS2eKY1ikydE923nQfkqkxAHxbaaSjgWstS6vxGhNa3PJ1soxeWq",
  "key18": "4Fv3wZWDRj2HxbXx2UKVz5QktrDRGH4auSHNZh3FSWPpkGz7rm8AUHgHWLRc7owm4yqq6NgMaUk3JHTVggkD9tZT",
  "key19": "4tZbj6C5NJc8oRjmLUYoWwRRxy4WxockntuwfZUv6kxxT43NLqf7QwYwcynySkryzDMDjHYTQYraTyZ6Lc8yDSH2",
  "key20": "5XkcwXjnYCCL1EcCy21iNuhmqaThoAA54Jz6xnmDricKRXxqQDV3ZRMTEnF5avr3rCcUgBsFpuYbccq5xCvvhAVa",
  "key21": "2NjgD7eTuB9r5A7jLXjZd4ipVBGX6WYZZwF12AsiDCR5QeFj6vnDjcznnJ9scmBgoWUQHfmfPbYdhd1Hk35RgJJY",
  "key22": "5ndpp8VtFSj8RUeEKkrwXwb6kKMY2uvRCoFHak8pEVFPFazK4Ed6ubHZTMoo4kztiqCacm1h5ZShbxUBeFd9fXKX",
  "key23": "3KSACicGC3RS5osb8b2DpvWeBrunJEkVw9z53PwtwfsduPcUSoQF4iVRCMCc2Fdz5nLezXs71twFmNfUmNf9arcP",
  "key24": "m8qyYq33sgjq9tTf5dYqVHFTKJqxZhSFCwaB1uTnYEcSueSXbHJir2ypiEr79HxG147Q1vfh3JeTk6MKJ2SwtvJ",
  "key25": "4WUUqmywXx43rLLiu4C3hGbetxRe3KxSe7uhyG6dwJpo4HK6JvG1oQq9SESqWxhbtmoTJDzhMmovYdxvycycHLkM",
  "key26": "5DryBzBKnnfonUsaaR738RBAkooKtDayumi2VsY95p6uj6QSp7DE4hGBFLonc7KMJUapAsVx82XZtNZZdTNFeQ8M",
  "key27": "3u2nZPbEtBoNogjaaAys47gEZxtbobg5sNAmHX5U5ezkBnayQkRfQDmGhyehz91Rufc1t2QCuMUPcnpEPgLEByLi",
  "key28": "5tLmJV2FMuQh3c8MjWXc6toHyqZhvA7Te2GMJNw8mKxtfLUefwxJrga5qdpKGq2NKGsomKd5TAJM8518rCEkHeCs",
  "key29": "4MHqMQjeqGhgJVwqthWu6JmddRQzuEsikkUjmvBggv7eRy7sC34dAwk7d2DhPdXRmp3XdbGz4xknQyiHRNFWE9FT",
  "key30": "7TKgteiJYjdnsQEPHRHLm51hbNAuw4X7pcfx9zfaVYJJg1S52B4QkRVYAydEaZd7SCsdph96kkRuzp5uQTrG1Lw",
  "key31": "3Qr8pFSA6NhMDyzSpoMo6JshxfBZjcwAyyXccNErAukK18y98naDCNUYSxsahSgNLh3pZexn9eehsyapZUHfgod1",
  "key32": "3vpkN3FmjVm7RCUeuV5sXUqvjpydjW77a8Zjtdx2MXhzKwkP1saB7jrJNqeQjcmB77dsSSLDsasmD5ttmHsLaeCS",
  "key33": "5GhTRWNYnxCWNbFsyFX6FtW45DuY6AFM47N1bC61neURMawWumbH3zqZG2WtqqN7X6oWstmU2kDBQJGcuaQfrFee",
  "key34": "5R5Pv6Y5Xhpovu6165T4JYAtFsg4CJqu65HnshAXwuDRS3BT7rRBkHLYEL2x6tjKzvnQCUnxzPiDn7mUL1DRgune",
  "key35": "Bp5TwKBmFskSeC2z37w7EFSJdgvKs2NesKdBLA4bVvksL3HcrquXxReQutTBSEyEyN8u32TYF86m4eYST7tnY4K",
  "key36": "2iwTM32poT4fy3nhVDKwDiYYZ5PZEdxC5rW7SehHoZURHzfidPtJ7g645p75uyXkSizXACuM7boKsuUJn7gXuSvw",
  "key37": "5me2NuDdo5CqAtYhq6EkF7qbWw1zJ1aNUnbAHmzeZsipun1J1sRgDoWqcZgvp9r3a4KXLVvDpSD4haGRQt8QewXp",
  "key38": "5wrjF6kqgEkf3YG9TVuJ5nAiJc9NS1p4ubgYg5Rk7fcGvvoAYZY6b9JcYBT1VhaSVbxVYuFrQbHkLrW6htDJsZNS",
  "key39": "5TPmFaaziVeqPvsFX7XZdTwLf8ukv8YEG2mTXUdGoEEixdWPcYTuZf6FUsRsZo7Nq44QHRYCfceg7k5dKP2Q18gN",
  "key40": "2D2vJRsK2CTtP7LhaBrxodGipUkGbnYStiaRo7jSquzG15kBH4seCe6wJJdQjYpEiUH6BsBBJ8dCpuqBQkxEkL3U",
  "key41": "22uPfPFDPhKEHcN14n7bKKFSv6WV5bNqGZ9vVxTSXAugV3wnmSUaiV78U75vzdiFEh3MTGyLnAXBUL6cqdt546GS",
  "key42": "5Cg6H5n4NypzrF93jvPEJWpgcbyrRXhmyVQZeUEoukVQ5qMVL2LjB2izSQQ7tJ12wKAo8hpiSenQjpG4EcQgnWJa",
  "key43": "2qaiwxSRYiJEXP2dfSwUHGrp6qJnW7KCdp68vNvG8BmGv7dtGtYKTr74CkBibm2Fqma12Kuz9U4tioVVejredcPM",
  "key44": "2jvANCFASAkBPf8wpVefDRJVTaSGiUXUYzYaXyLPEneDESDUbvmoxLf6JEJpZBeNkue76kTVXV5MKNrNcra1TVEp"
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
