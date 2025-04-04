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
    "4g5ddtb9s3QGvxNuaXfQhntLowwjpKshEyLoN82uciVJxVPsu6G8AEQTm1aisZuW8r1MMnkKUVjzXA2F21FN9q9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gKq2Met42LWBZenysdPVEgV3TMkx8uVg35ZEsb3ojhvMwBp7AoidYsyotWqtnmpDUQ7qFD6tqG34hunRSmmxPqk",
  "key1": "4PxBfyefQT5eDPu84D8w3h9ECdk3kC3Ry7ZAXScbtvTZafCLszFxseXnu9maXbtgWE1bUFfdduBKBM8WNb2bG9LV",
  "key2": "2DQQdPZVpVAuThVSS5X67KB8fXEtykXsVk1chE7t3qVULS7mEgFEPhss1HjRTwZYycfkzS9MjVtojKjBwPx8sDu5",
  "key3": "46v4iHHBfYeVYeFYPd2NngqHLrruAN7NzdALh63aC9yAFSwKmURfofFm5tPpVqrYUMLy7fEYFNh4GqzgBXkVjg93",
  "key4": "5fAzJxVNaG56nxUnJz7zvsr8k5aopQMkZd7ZuqMfr9yFGctxySwQJjvYVDwJiomaVXsipyqp7R5rwLQ6S1qReE6Y",
  "key5": "2VypAr8tBLWCfp5YvGQ4JEHpaU7DPdRarYcc2QZWNZveZxus3GZ1xwQQaAvfsRLZu27jLMA4T4Es2iG3LYd4MxqU",
  "key6": "2aho2Q7Jwpk8nr33gTGmyKVAFVRJ4QJA1Fhhfma4AFkZKoqtmrCksJBoKxJvzdkfHZy7hF8pTAHTbQjtgPrW5S9J",
  "key7": "3DRqxnPWhLXLHLvrr4aUy4y9gSpykHFfN8rYUyLd1rzLq6hHvSpHSAAofDperCBF9Wti72Lz8BHfyceQxUSeLZCF",
  "key8": "3Cdr7jh5S28yJ4Hix6K7pxLm2QKr8sm7sgxT3otmsnvHx6Z8nYN4G616qBGTMBUQSQeZBMqWreZpRtwaiZJ9yTFi",
  "key9": "3y6Yu2x34comSPHJaJznRJ5ZTy9saCnCxAjfvmkrCPbYyB8t63CvmCsBhsok1DX5wViQJyZYj3xwxHHzVda3jK6L",
  "key10": "27EvXMQHtzFPxHcSEfjomAaueP9j71UyLuxwspft7Vr566C2BCe64HCVfYkAPPhUt3US74Tx8LNHWtAP9xT3DCWT",
  "key11": "45fm9pbbWHL9rKJaunezbtErhnrhCC4EQFtrSWLdtYFaPTotxuvgU6B3fMdiHxhu8TFDsnmDUVbognReWjZa8WPj",
  "key12": "2fe7pcEiZjbB8X3KJRHgfW2r84K1fs8dUXPwEu1i3sRTHUuTKjPp3Yjvf19xF2ra8D6wsPhMC1MeNSatjqdqgtXG",
  "key13": "2ixM7vHDQxzBp4NywefK5coLnrj3WaZaXbzagMMdPQfw5Zq8QyxdtLf7jUKNxGGmW8Bt3jF5RFEbgf7Wwx7MJrVU",
  "key14": "644s4iM9oNuXCtgENbw9F3BFErGJsdZzHBSVELTGPxBae9cdTcPoAq6H6E2MKHTdQ9mRBrPnz13VJDXHRnBsmjcs",
  "key15": "3AoquFmv39LBH7G3E22Mm3QuPxrSLELZzKA1hqG4rFP6k6VxVtxsnhEqft1R6Gsp4mmntFjE8jeXGtASbFSPk533",
  "key16": "5U2CWsCtkBWX3pRHbs5URMW9SYiZCZbzbpPN9cd2qCUqKLMoC6CdXQAZKt37R2qzfGg1p71jJQqpFPhPi9aoREX3",
  "key17": "5cttYEmbboogDsXhpQAVJFZFjhpRD6MGMih49qoLgdFkLkZGPrMDa32pLJnEgua8A6CH56N9p1CrhSn4fEBcgW8W",
  "key18": "4gVYRgmo1aVzkdTru3J4ELzjRUCpK2LCMGQEWdzB7zvhdiTJmrn552Bu4xpKmtQ6yQ9fgcmBsKBonwt929XXMxiX",
  "key19": "h9pggkNowiXH2r9tsCThuXT1jyS9s9zLUwCYt4hAy9rWT3aDU2tVBaxLPuC6PR6A4uFMwnQPBcvDPYUa7SgGmjb",
  "key20": "3AaMbd6NaY5CupuE416m9aDgJuHPg4WMnrnqU7uQsnYvUeWFK8vYwRbty79m9ffffD9uPMpaoFkLdxZ2fdjWffm6",
  "key21": "3eCHAE8JegcskbuHwFAhNv57KjkN7GrMBDwhJ7w9ya2HVTD1e8hahP15H2tPLLnU5Jn7869qrv8nMcbisABFkqSr",
  "key22": "5vPex4FJoSxvrfs3Nr3985ZneBdo88CuysmF4xsGT2KAmzcHEtW5ZPaFzHeQKxuaDB5Jf77LUxHdpKLSFjMssnuh",
  "key23": "ZaDhjNwtF3CJHD7wMXctXwJEcBWju2wfGimn9mYXtipctYjgv4iTXB5BFFpRkJrT2HNo9cWuiUjmU77RNqUGv3X",
  "key24": "2LDmZE1PrFyXE9ur7e9gRRLqxkJPRhta7uVdoMhYiHjN7KaphZ4F5ARzkKS84VTiFgfSehmK3x9NBzjbQUTzNhdn",
  "key25": "3BCM8UCoz6aFwiYSottkjrLWDRwbe9QnzKkaUNWBb3iFyFigYnhpoBZasF2adB8syjk5NpNKjXZftmaHKhrhzJcp",
  "key26": "46XEBWWVDrqtcNiZGGBCK42NeDgTvrUKommRDQzmHxTnvH15JzMUgJgQajjetg5LnzqnvqGKsuxZZ93b1At4n9jH",
  "key27": "3Z7J77yFvZaaewsDynjTgut3oWvC7JRVHbUNL8aUUfexUXriLqbTGtiXC48siW9ymWKYUZMvjr5kmLnHy4craYz1",
  "key28": "2VrH78NEMf4zNw828pKWz6qwJPQpWTHLzYxY4HGGVXTv3sBYrYyrQMhnSJVQZg3TbF6gW9jYH7YnEayauqsDhY35",
  "key29": "2MbcTGoM7zspKkKYPHWTwYC7maDc98NfwSCVzkUBKmF5YP4LRu77oQsPXJeoGhhZvgiWeEnwkDfRsf4zDp7gdL79",
  "key30": "3qADuGkqFfC3ixwu5KrhGdhUdRTY7K6vumByz6pmtMQPYzrPfEetwJ2VS1GMksX73zVeQi1avbCkeGt5mxieEKdt",
  "key31": "3vgFs1fAcAyP5xgNkQTZB8175n3g5bXm1oAy5CCzKSXRN56zsrJmY2zvxuTv9GYrzLuo3jLzAryozWmrNZSYQz5E",
  "key32": "3df359Rcm7vmN3793dPrQ6BDW3VM8mNaFAxavYvL5EKLxXoXpEANB3AnkkqJnwpeb7BMvMAVJWNcqaVyfXCWLNfB",
  "key33": "5T69ETYUA7WsiNoakC1M6MqUjCBJXchvA5WNGzrRHenGTEZu5aZeYgXGQDqd6W7YUQtWmWdJUAv8cnGfRxqxh61Z",
  "key34": "2R7UwQRT2xcunwUN8839mGchWnWs2LAE6eVGw5EU7fSBcMpo5kdGz7q8U6HeY3FvqocA4gjmEKFMqHd1pdc5tV9B",
  "key35": "2U28fQ4efSuze8Vgsv9k8mQn3gNiJuvXjQ93JcksaBC9D1tFW2FdAfncibyUbMwJNZCW6mgQ5xmDLwmZvzNadfSP",
  "key36": "2CwHmazC6CFJGHVwsHRrBHoZ3vnoJmRP8mVBiBDKWryZTysaYY3AAVTL5epV8dUJgBbn19fhzZgMnKaPUsdYcZ9W",
  "key37": "45y9heeV27pN8TZQSxB1CJfsLaG4ZA8sVoniG6SNkFSPfv21KBsF2jrc5MKuqGhKUTTmTeFzgmXTzyfMqBh6N8ur",
  "key38": "3Q9prRJr12bTwmRbLAzjrEkHoxWaKgYnAou2Bjo5xY18C24m9f9tXX645CECWCMJhE58RZpB8NZiuWLkSZPQwBvX",
  "key39": "59pRkuc8Qp3LbDHnzGZqZrSjc1TVunBaQYinJdnFLgrCDdpQKpoGiHCM1ncFFkHxyta1czXyqSM8nPWfMkfDcmr2",
  "key40": "2bwfGgBNuukLcggkRLAUrndXib4VyiPHPFxidRfrk7BGc4TvXZS28DMqscb5TDprgakiQc4Xk89Uepu3uqGQYCqJ",
  "key41": "5WzsGf57zJG6nXScC9h62KmX4SPHCqpUFUoqNDd1rKsQshLweFqTDEtYZazzXFGfVrEuWw17LZWxXVU5gyTQLfCv",
  "key42": "JsAHDBvVGD3etdZCcjbJijT18xg6uN6hwhULRZpSytwmiTzPA4HgRPR3q9NgV3bNEmMZUpGdut4QiLY3ohf1QXE",
  "key43": "JNNVh7KFCcqoGBEGcyvb3GwH7Vt1PyMfbgNHRnyEmB6eyhvDkD1wUsaNDxAdihw6DFgUAizfYrfLRwxquRGbipt"
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
