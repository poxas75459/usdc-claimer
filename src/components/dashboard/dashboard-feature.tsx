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
    "fs3EJUukARYqg6NEqctduNdMjva7LjeD1a46ZEtB7XiQQLGxp8BtxxryeUmSkinC5ZWnc1Bfsw7gjXoyxTPZ8Nh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39g2uYV6eWwMbarivdGNLvfjtDayYRxvDnUjk8KrW7sz8f2wLCjvG92A1tRE2i23pKkZYDZEiP4SaoCHHSnGRAW5",
  "key1": "674JMw2kopMs7N8ajssfcDjCavmE6LikJDwK8dSihpgHc1k71kCGtT3hgU1GJFAzC9B8HWb1Kk6YUncTCNuvfFqy",
  "key2": "3izYZsdzASnALpPWdDVdas7bDhnYhmBAmC78LHJ36VCU56Rcs5dYcZrujcJMmMQozxaTZWrauvCmTdLFRdw38doa",
  "key3": "2YCoa7FMq9nyptNPKWUvVe5ggPnyFKVwC9sf574ExWAoHZ8mSxJxNXRyEChJEhyiS3Kg4vNZ7i8wRn9bb3cAq9bN",
  "key4": "SzXwVWLaK9Xd2UEtmj9m1q6xrEEwpJW8qNYjS8rkkhF8rdS6tZuzQkrpViGHW956kVYZoEB13qH9raaNuJmFUct",
  "key5": "3fyNnQGL8sQzBdKTCGR9wYcRfaqDSZo5rMWQaXiDB84ME6N5JQESwhTsjqgdexvXeA8Wprx9ETdyN4XTRTxMyFQH",
  "key6": "4hh4ae1yUm38bnGyH1uvhjpGnmutto4KncJ7NXEhzepLoR1BgHv4VXbpowmuB1TfFUTh5bGnCPSuCouZ4Dj3RMPv",
  "key7": "5pr5phM9F9rb9fLkC7bkJJXkFEhAtsPvXRQrkiEpJKSZKrifq7KWgQm69ySi2w6QntCXyMusRyuYwSw8L3eaaQwD",
  "key8": "buMAD6qe1tMvfGihhkfzYMkZjPfAD27xikHtSabHccQCBTbW4EftrbT9ZmAdxFAWYWQyVsZgJrQ5gp9QY9DTyVc",
  "key9": "5SjDcknCv1kVmKTUs3GhSaeWCSaYjwSDSLMGCNxwZpWKWFRkoctoggHF692uGTuREzcxiYz2xZAn3mxsdCGnKzWF",
  "key10": "3UHJGHZ2F4zF4yxtrYRAd3Hf1js8FjcXb9LWjk4AQyuJAQAqA5GSTvLZqZdHae5CYm3BcExTeBCmJi66TiBpZCVH",
  "key11": "2U7MbnvSbPk5n2VTza2bZKtVGDCtMbNYWXJCjFWoPpf9inmmg7w8x5TqWS28wSYbdKMVuW3q7T4TJhqMWcmC4PrA",
  "key12": "2cqLukw7V6mBeQxtdXC9DB4uYVXGcbDFYJEoTzqsN2fbBZvXSEWoaPUeiNqZK6zUW8gE3UMwV8Uu3jFiXxHSFje5",
  "key13": "z3P2h34BskQQyN7tj735Rxt7sLAcCNuP1fFLdgNAgCpF3hzv4sTfhTYEgyY1wvU1UrVzMSwdA7hE92tVux5rD4w",
  "key14": "3C2aH6fagjEg4cRoE3UPoBjbRgFYN9pqf6fuQugpLi7mudiUmhnSKQw4exWRub4YoeRuqYQdMzMjqgCMVKLB7Xw3",
  "key15": "2AoDmBDwfgofE2ZwXrp7BZhZz3YMBQSmZThxGrpTRAdBzmtiWKKmr2R1P16V3KYsQkTcXmKSG3sUicn7b1g1wg4C",
  "key16": "4tHJjMTxVu4bwBiKwQ6RS8mMUKovoCqKX1oUcVfKUkg2UJDS7WQbvKTc4fNAEgZ9DKYH9WAvGqkQ1sUyNfQtSbz3",
  "key17": "2rW57nUff3wmSLj2Rqatff8nYR9GU3Cc3gC5S9pquQYBko3JfE5PqaAx77jfWZyhdS5MaLnJnLAGdLhewS7kNBXZ",
  "key18": "4eqCt39CkFiLvVDELPLAN396duyE7NakJUSfeJgDbAB1TNNcR2ohME3DnWEqDixCxaMBaGXWJmYWC7uY2KLRMMPm",
  "key19": "xReLNQXEdHspa8sVfZewp8wHY8LFxiKpLzE5mDYptnj7EM7MqAFxW2fCSZ2JnvrYcLF9RBmiwUn22V9VsMTyUpw",
  "key20": "cDo4Q3bWdT31AYugBk4iwtMknSK9JctYNoKU2kUWKGGB97RUcDeL4W4UK613bdhQVVein18zk37CKR9tczvBoGe",
  "key21": "FsfnQcmG1dK8iTrZdVm1WDii6kBNrf5DbaSDqtuivh6bDcKYfgwfwrogA7pdBkYes5ueTSaMBJQNxxjKbaVaWwg",
  "key22": "2tiKF4N5XMdqPDkHWATfN9J7abYJFmHJ4gDfPSyrZUPKtyaRnDCeXWGXbsyZzEYcBFC9CoHfpcoU4VyvZ6nkp8V2",
  "key23": "4vbbkrvyi8ZyBQtcKnw5vJqBgUKjFPRBimMobB26zYunvvAZhnzdEGBo5B9d6oyw4kA9ee1C7P3TXJmx95p6VaKB",
  "key24": "2vT2nP7wpB7eZPFBJhjxocySZhyXpcUUkU8N4D3zze4AdRgnxdLtrgkrQpX41FJid7TnsNrDgxHk4ZzdfabhGj7o",
  "key25": "5ugmbkir67LH8ej75gb66BFAuwFxvcc7ALyeEobTL5uFTDqjuin4JWhmcEB5e3qWcfuyA5NTT5MNSrQzmGnjzfZy",
  "key26": "2Qj51wk2Z3StbBuXMJJQwfv6VpJNTZ4uMm2ByYVPzNLhSTSjjLwtfsXsM99dKCt8hUdxVfsYVsEX1Rm1oykTtR7d",
  "key27": "4BTdy4zJyKcY6j8Cr7rAdGW96fx6EyE23Q4LRinACa5fVu4GF7x7WvVPJdBHatcZFqhsByHay9HABQgk9fMcqtqS",
  "key28": "5S9EvLS1S74euuMa7pMhyPgJqiFTvtCesA6zB16xDbBZ9Z5auqvjujrQGMokvLrozCyRKu1FPyKy3KXQupcCUyj7",
  "key29": "2wYMMzMjWdyEridGEG2xNrQgEd9Z8r5MhsMYfn4bJTwnmUbzmob3vV3H9K4BDUmV3vNfHJTrSaX94f6tjJgbrM7j",
  "key30": "4jorB1dJEhEJhDQGCEdyDnApVyqWq2HsUqyw4bVkcvD76CcukSGpR1D95gAHDcyMqsfNVnPPJErAkkRPHP1Gpw7z",
  "key31": "2uBcuDjGoCe667jePYUeUVUAm8RZA2GwFL1dgEL6tRJA7rwuDDHMJQe9nw4idC8BUrvfszf7tfAwWuGLxwGoebfd",
  "key32": "5y4RBxm9RRPhmTxuQrfQto4hkqoNfngVe6BP8vQ51x8pp118TdZhrKuVrcUo4Rjax44mfnNGFxqqoHMtWZE3wgRZ",
  "key33": "5hbr4vBE9bcYN95wbZ1guVXDsTgJuqXQsxAtmSj4G3sJmC4UuyToLmP4rfRcEAkPxgPVq9hC7YCDn4WL15ZUVkfT",
  "key34": "4Bxp3iJ9iu4Z5dDo5T5Rb5NCDScHTbre1u3HLM4ePdbPJPHvK9rWdw96GEMCH8wZXPyeib4EYtBGP4zaWBQdV2ba",
  "key35": "57dtVDr5h2fCG18XYM1Bk7YnXSCoMhHhK8LV3jQ8YwRAYi74UnZ5sXUQytmiE1KPh5wrmesxX33RVQjW8jGVQfkM",
  "key36": "5Xi3vN9pudsu1m4V7FBvMqFPDLeUYrpAdwGdnpGD1D7XpMzCRXiPmhdso3Hoy9biNSvbxuMkW2x3qZVzSXeHh4rE",
  "key37": "3hFDUHwejs5M8WbGsjJTN7VU5w8y1EvNj82vmR1hNcA7hmnDKZ7bP2GDqoUqW5VvjiTiwgp4rVzJWaHbctJwd9Yv",
  "key38": "5ChN3YLVyvTTc5sAdM8XRDLzqVuuiYbKLtGKQsGumeVJpBVZxnqwdBTrUTDv6FLMuE6zMtgJ8iUj1aqa2MwaESec"
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
