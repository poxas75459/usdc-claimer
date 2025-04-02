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
    "4iZQ27NWBtUs9NJmedmWT6EhMmCEupDpjcFPxQvgPXwFKPTqnhxyKfwjtNPNB2ZRZhb8ByLmbft6Ues1RRYsdW9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sb4gJy1BacjKG91DC5fkj9dkxXqv3GexEU1KWDiy6yv88eGtjcUWocwD8zAQo83TV7khQYGZxGEtePbGk9EPpUP",
  "key1": "57UvmtDFyVFpELd44FfeM689BFMDJogXYBLVtbV122JC1fQehUe5pL81QsQnWfJp9wz5A7jgZWJ2yjrpVQvvESyr",
  "key2": "5i8qcy9RDnu7KmAoBY6KCFcN7qJDANmu4gBWZ4tz6eWUfAJjCPLERAhFtYMt2Fcz9oGR323MsSsgAj7GS7NHu9dq",
  "key3": "33zGP1AK9KKBmYEn1r9x1mucGTWEWKX74yfVLhtnLdYwMvz1ZCW336BDa35LhWoSpSrZstv6Vu917niUZ629Xfmy",
  "key4": "4bWPnbpGTMv3PUmjyCC5sC2E83CCqYHJFe6YdNDnX4G875NNLuevYqNsm2GBjy98SH2HqVHz3tD3r3emxoeyh9CZ",
  "key5": "3gqNoJdfTiW87pCdJL2Nw8MZvmD198Ercjw1kua1FpvEd6Xsjd42oebeU4Yg5QAbFusaD85exrceagYqXm71gKHc",
  "key6": "49WTz6eKZxLhc6WMq3KEB9KZpWG2bavSxvUhcjT1r2r6GjgXCNodfDxWoQ8WxQ6F3MWNVQh6GWJixvtYidt8UKVZ",
  "key7": "4hS8ATjBN7NKCxQdJ7beA7BsEhxXiatLdC2WNLToEcxbwNLPEsRqjyLbBzpZ2SH7KTwAaZu5WnFoGeNn8u6aofTy",
  "key8": "2kcRJU1TuNcWfsoRDv4UFb7RLkztCWrwNxmYmFcWMfxZ2fgDTS5Xs1mkP5d14DqoBAJVXD1Nft6XsRe41HbbtprA",
  "key9": "5TC9sN3LxwQpYG5W7ZcHbsrgce8EoQDeBZDZd73aYPHWKHpVWnsZehzBKqqWoWKPMy4GeYLJKhGaJF7sTeCCyTFV",
  "key10": "4VY54Vg9Vx7kp6V1iscbWQZ54nWYkzBvkj4rcm6Tce6KxYPh74AezwrEhZ7pLqbA5C99nK6sPHLe5W5giR9Wbd5F",
  "key11": "4LY1eaj2X5tPFvRux5HRCoMqfYV51huo8sJjEcddXSt3vG9VPGmgDwb88Q4yhXQgy77SzST4NWRupFiLKmBiQ4g5",
  "key12": "3KiSrrCsi3XWXViXS27f4Xt4wydJqVMkwbNYpiEBjWUbm23giW9eDQfLJprQDhyLJvaKxnzgDPcKnrYBGL9wmDj6",
  "key13": "3nGxMyYe2PrCUfKuYdbvbKqsJptjiR4XHg2QhD7wXBj4Rn6YoahNPKD7CNtCkNKKJ9GZ8VZpEvfyqGVUyMEWMdXr",
  "key14": "5KVtgQkGEK3YGr8z6mPXAnwM9DLk8Qe5HDbowJb4FC1DD46t8ViZGNNxDk6QMuxJU2HLg9RjdcbP4eAAaadPDf5M",
  "key15": "PXoCKPEzvpj3RVwNcWPL12h8pAP1eCXmsXzeXQzVEadM5pFfDRRnyD52jTN7iUbk7JJY9egZmhjNecZiizXLSxE",
  "key16": "5483m3xPvPj43q1FUKa7t3EKVeGsGmiaGQYNrPanXbgMu1DUcbphAW2LzPBDnCnsMRznQWgpufRoGP8p1hvAHNkU",
  "key17": "5Kf42ooKyJHdbycEvHzKY6cWqhsJkB4Z3W3tK57kRPMW8LVSr3jBCiudb496CtaNMuijRf8qKMJY5283ioGDc78y",
  "key18": "Wy4fHNYKRthbZqtHQQLUhyPNox88BWco5ciQE1pwmxwjr5q2eAdKeMHA8pqKv6fGC4up6NpZ87E5Gbo9i4NctFc",
  "key19": "2m6uQ83w8Vk5xmt5VPfNqw5ShNUSmk3EYyPL3LapMEwyxF35rXwp6gMWwgZbRsF4ZhYsNQPRPvufLGSet7zf9fSR",
  "key20": "5L1LFo4riW5Qsrq7g3FwCL4To64mdSJeANQ7y9uj8P8Q9kBCuPXT1oo9km6jSuAu21VhwpsK6iZxJE2FJUqAtrHt",
  "key21": "3YVP8xShb6HyuhGroc2BTtucDFoTtUDmBGgbgM5Da83B7rjkhKy3WGapEguCL55mmGULHe9TfrbrGrpvVpyU7P8Q",
  "key22": "4sNo8SAfagWdseCoRjYcV71da6R88RJUxeBEAKk7CCmFe6wzDzbTBhMBV9ZrGGKfEd9MdCHJ1FpNiSHuDx4ESkG8",
  "key23": "62ci4UGcq5kdmUKcfJ1pKuF4WzbeDykjnR3Wdt5AAUzzWmFmXK4hbhb74oA2qM7mDeMo3jzWQkF17771CCypbuvi",
  "key24": "4q4bWrpjJtEvuiJizmnmR76c5AYH4fJW7CD1pLQE6WrorGRg1g5QZbwSnG5H651ifk56QQYSrFQpmMTAEhXC9Fwh",
  "key25": "3eUtmiJDS1pZfx7yVNomc4ZQdDeeGWTK1EaoCKoehfCmikqxFbKjnnG1okjLZyZ779sEM8Cuj9pXhr8ViYvtnzCa",
  "key26": "2Apf2ToW3dC8ywzRifywvA4yv5ozN5f6Vg85mjW9XDxMu9q6e8Seuv6JsYhE2x7rfh7TjrycHhqyTFzwbe2GHkwD",
  "key27": "2zRvPrsJYJpxkN7E5SjZwKYkbfbA5xcHpTS6bxYGLDSDqJW6i3JxmpV2FV6uvbCdoUGKg3VQRe6NFJpvD13i9nn6",
  "key28": "2Sa81h4yrWYWE4BK4XZD3L6kmJEnuQ8Qf3dVQq8Y45gS2UPwy1CNVJ9EiyZs343uvJHPxJjHwkhnL2Tt2EW4hJzA",
  "key29": "5WQ3MMBGGDh9aRTPsbthoeQkvZoqfvbsVV1bR4sDhkvMtJVfgxTes4BLdL8UgzeUpSBUTRXRzhNuWy8uNkiMduCs",
  "key30": "5fYQUcVP5FWEvXC8g4YZw4KCxNojycFTqh9TZqxp3uUxzSHRwkdiuCRJyji39v6BoqGkC6KnozkKMkMKxFcQSjxg",
  "key31": "5bhaPM1EFQVrwyC9qAH39u9kyUqCNYHYhdGHSiDQe3TZe4SeUEmvBLPzNVnvqVsZb5VdurRhACBVTfgY22hLFqSd",
  "key32": "4h25LraDmjSNvQSnR9CSLLT3JJSrPaa5nGrcm6fdkbPpxjVaTmuyCktSg5RJPg3SzrUizJxxL6SHdAViPkcsdL2y",
  "key33": "63rboSTPdoPmsSp5yCBdiqh88kK7TLeJTUAWEBNAit9CdkVxfAiapGX3LUKGAczk5BPcq7MMaQ1J6E9Brw9CpBvb",
  "key34": "2AwtyYjPARN3jurfWuDBnrDmTZbmJ3q5jDdgLqk6xNCtzwVtziupyU9WsGfomZpvTds816gPYtyzJeiWHJpuppUw",
  "key35": "423yyurLsunmsj1r9RZRkugH6MdLx6fkRvysvWrtiArohJqYQK75aieqxzRfFq1i9ddrPKwVx78GUsH8yWsc4JLX",
  "key36": "4CMvaSn6BFTSxpoUvg1wMagqm537SW1DtoqttDLu9ZedWGJhRu8scVtSzQ7fk4Xaqr16nSk2prUjUtMeLmj1PuCV",
  "key37": "2VyvvFaWBDTZkgqhKv9ANEMJUeNwUGW2kySTRQs5vTP9hR1kRh3ibuZBqNRUEHNEYCYHPVMGnpAWDTA4hNsPXS2h",
  "key38": "3r1sgfkMqXfgVFZAycCeqv4TEuBHfX9dLQDLq5SfY333Ucjr9Z3DTQCKThKtkHK5YpMrwdPF9VAyiJHDWiAaqBS2",
  "key39": "63vi8dSturQ83foprpCbhH9WjxnnbHSobnWJzws4NHiVdQ4MrjKi72Ei4h1sqdeouaMUu5ACMaBhjvPC2Qi197nw",
  "key40": "4dDCYje2x2x47NMsdVzJFicf17SrwzcNtiZSSRANHYim3VLqAzutUWnMmpWDGkxLYPqsdVZUajDNK5dXHJLqQah7"
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
