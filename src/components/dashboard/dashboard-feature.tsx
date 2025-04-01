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
    "3bTzDEvqxW464yHDgGimTirSAyM2sHsqKWyNMkVm9gUUzkTnUqtw4nPknc7oKDcaz2GxR6srLBLiHeqFmw1AYuvp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c5uapdNFKnjvo8ubUrKcZ3DVCrhpTz4fMedfCwbJ3PpR5XCvmzN8SeKNbjJmPzFqn8CUXBQyY7Gphw8jZC1kU1y",
  "key1": "2Yfu5TpV39EgaAo79iJ17zNdwxUyQbQKGax9RWoscsxSnFVvQMHp7LSeiqP2WMUrAySZfSvFeeqej8eH57eJaWob",
  "key2": "4TfRADTmWZ9vRkHE7unveypRAFa1ikMDLPyvCKLZycyUgqgToMZPSkNpy3GRsp5AxdSfFV9gZH3MJNQ6Nq8qRroi",
  "key3": "g4tdmrzgCP9JGhxNqagzcR3VhkRGAoASmeULTT4B2q7ESFQ5xn8atPQdaWyzQc7Dff8DVQbGVvChJ7jqjE7qnuB",
  "key4": "5C59MwbBCgKqC4j253R7yUb65wnZzW89TrwMfT4USbLfwPUbPC7et1mXNpmKEzamqYpDVeL6K7QQJnsprmiYfrCa",
  "key5": "4JgHi1xiRLo5eFyyTcau22q3cFABLMAosn9wUxLjG2pcvZHxchcUb7qq1wc3DTFqWJXHnYcmVhiCCHezshTUx2ek",
  "key6": "DBqJeJhGM4drcz4Rq81bHuNJjswkdLwMDb8Q8FNLKj68hEb649saZjPjELvzPcSNfwWuK9q8CQ2cAbyVkbRWUrv",
  "key7": "5cspe2umXG8G3c1Vh9tCpGpysrwUNqW7wf8rhGkRu75bm1dM2NyphtbihHfEL2s9vWuXF16qYu8vuSrXuDmbRGG",
  "key8": "5FLybjjh3kzDdY9oAmcC5jrF1vpnV8i1QYe8Uneu4ETu8JyfLWdd1hnTj8K51uW3569k9GQw4mnzXx7B2dUiLP4n",
  "key9": "4xWbwjVW2gxnrm7mGfEvhXdj6aM7gYVnNfEhr2FTTqsdcDayKGK8M5b1yyKXKMkESZwNpqv8dgiHZh6RwAG2gGrz",
  "key10": "3EWh9NmpB1Qv26Ws4JQgPt1rQpAaNdRHg8YJkmqekDmD9W6Ldi5vUfU4X4WM74Qcwh3G3WagLzDQW5RXHuraCAZM",
  "key11": "35S7ZPRT6o9rMRCBVPRWd4i253K8URKaPUtjUimShi3XpxGY9tGkbdB2QU9TTD2Hi54m95jQuVCXFVshk28npHtu",
  "key12": "32UMZbZ4kb7TaM2Tej4JgZbHXmWWCthCTfCTz8BfHrg3SeVUyRAAx6EhDu1GtRCJkpqTgdyqCapqNVVZbd8JerjA",
  "key13": "4nFD5xaZd18mGQSy5Y6zTPcXuwcAgiR2A4UzkWZei3ydPaf6F7H8Nyy2VSTnYkXRenrE5L9FfD8J5MRsaYv7CLCq",
  "key14": "5vyvn4Pnsjph5qSk1yaXEXr1CdoPv6C9THArAZowDdkeq3YjwZwMy4i5TnjQouz3Ed754ChjKdARTC96VzdCg7ia",
  "key15": "3492RvWWTbj9QuxLFLA1Yoq93SCSNJE5SAaThv7Dwt8Nb9GozbBuiyYRSdDwAHzoGGDkdajpj9XkGThwavk3FzvQ",
  "key16": "48ZZvb3qoeHM34StgVVBPHMomJeDVa5qebp2srtFgqauhQpZNDyHqntarZNT5oZg2Cmh9S9P5rdNYSPmXwAHM1Wt",
  "key17": "3p8JoW7hU9AsmQ3Twg7Wuo64zbo7JCeKkeiFq6ghrkLYWXTceEfwpHr9bkGFv7Tvrwm2hWcSoYzxfrR2e7kGgXjS",
  "key18": "2umtc9wFoQA3oJDhS5V9NnGKWpUzCXEdUJg2koeFoMDqRtkxyWB51dDvriR1hFRHXuJS5kiQceEDyGboB89U85Ax",
  "key19": "4h9miaFyZcisWCoEKTmgs9CmawouGHocASBXXmyKQXvBTGkFXukfUtZrNuUbmCUc8Cerk4hN9xca32sXmw8YuhjY",
  "key20": "4im846sJKGPDT2BQAqxTa34SwdsUGGYyC3fBgTFK7E8HZy23hTEPnj4z7gGcxbDrze9WSSSdZs1cohHS7ya3XffM",
  "key21": "2Ud57CQbnBJ3EVSigQ4qxW9QwKUx2LCmvpHdjKS4LJw4CApTCNZs6jJ1AwuMikiBe6en7JF4uqh4ycPQ2oHnmNEz",
  "key22": "3gGSS2vnj4GZgHgQMGCfNSYVxFRxx5J2AKppNj6dwJ1mdJb64kbjkurmr1mH4cBM1qAzzsw4sFnSTCYZaczMecK8",
  "key23": "48fj3AXBvtpxnyhT9wMqgawaEQZh14v9Zg1BV7sypPHjA5Qnvy6suAowhF2mhtbEmFZ3yps2DHqtrQHyBBsf9AGh",
  "key24": "3FwrkjVNCn6m2trYZPYmdSKvg2by1KzZpQC7JgEsCJ455zRuBxRBiATn82dus8h4Vbscx5T3Dv6yyVhsuJuTJfhE",
  "key25": "5cxtebKiHJAuUaWd5ZhNbzCVzEy4ykgjY2B6Uwkw86GiPWPMrQaJ84BM9fpEertXrXzmCiDGFRoKo7JYezTp1CA7",
  "key26": "4pHPPeM7hmeSkwXZPpJJ6zCcMRB6JqKLrZmMzz9oVFSqL5RfXs5cFEcXJGKA7sDnYzqeVaeDHNQEb7gF32njywpC",
  "key27": "5tsPqhXooCQNUbKD3Aa2bitLaMnWNkB7P8PRecbzNqkz8MDbD7FozSU9aZaYLii1bvxzazdhhvtLYh3QTJXh6tnJ",
  "key28": "zmeKx5qQMvpiB44Ns7ug7yMwGJ2QqqxwLmLtjRM5HjqM6Q5M9Y8YMDMkrW3tTD7zEUvQ9EXun9Jd4oo4xwkx3Dx",
  "key29": "547GofGjwCUQy7cKt5mYDH7qhv95P6gsYLBtWc3w9iRCEVp8cd5yNHA6Pk2sjWxN6hmUSy3XJxaXeXbrGvJS4nHb",
  "key30": "2TqQ533tM23fLYvhdQvibBAPHzvFtuS9pL747328caSqgdNkXGiRBRCmCnnreAK6iWAjoj5toyFUBguXPnoSH4oK",
  "key31": "21c87M9vnFa3zqSx9xkB3rvwYVu4aiMVEJK2UrqCQj3JRowJWzKDQgRnoit6Ajg1vNJNzcqYMrVkqPDpbFDGLbhb",
  "key32": "M5hxiWZNFSX8Uya3KGmKgWZkmdNMyUDrWRuRpZSfG8gC7oG2TDQQbG9SVrGAwjGG5UcsMEkKqcRY9fs86JEgqsj",
  "key33": "5TcEBCdhFnjNB4etppB5grgsZ395mgBvGYbFxukcMyTBCAUATXTEwTADLH1RgNd2a6wpYMVfyiS6SCpQKsmNtTAf",
  "key34": "9LxKtiGFsb2rLxqL2b45wQK5DoQBArvgMqto6EY5ffuwJVaYczx3ef5ZtELVR4AykazssUHCRYqABB2RLQTnQSt",
  "key35": "5PqPMmo76pWw8zBih32z3aDdQa4YWW6JTs5tKU3fuwnHEZTQR5b9AW9SxzsAYDJZnorJKCj68iQ7n6ksRBA7xzDE",
  "key36": "5qc974fZLNxqmcdNF1UFZ5UF8e7n5CdA1ZirKJa3eguBMwMEVr44Y6qoTNNQyN4opGHPeL3dBn2vg4hjB5mCri9z",
  "key37": "xHXg7isgyNXGgSZLtY9yMryq15n8R8r2vRJWPc6XRvu7t9fzz49Tq6NbQA8TMZKVN4WzCLfxRgoz8J5AN6XgZQV"
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
