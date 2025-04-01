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
    "2C4qN86UNyexVVuY5YMr7nApUGirBiNUfxpFG1VhvBiJkc538Qr5fD9xfz5hAAayoES5YkU133aPcTJttBFje9iX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PqoRP63Y5bvB3Uyso52Joqr7AWwtgZ5iPQjT3e6jfS9CGNr3Qax6mdfxAC5HSYgQvBAbouxuYoeNmurdJB6SHKN",
  "key1": "2hHCVFpV8uNBw3n1Nor1bxZ4MWyb3LYsAXxiMZpCsJP4iJSxiRZFeWVuKqhhK52GqSHea2z1yP66Hmm31DimvfeE",
  "key2": "2ETBj2KrP1Vg3TbWhTny3ehxxcvuvSBDAYiaiSdoeoreeC4oJRF1ZgEjYshk327tPYcdox9bT75uAJCKCc5Qewzs",
  "key3": "5JHh4hspvAvRhp9JvE8ceSXfQas7JH9W5nYc8R7otWYunWKKmp6tS5cshcJEDMygH7fLdCbavvJQmazQbj3GtU2z",
  "key4": "5DgNKsQX56oq7yvZPWUptCrTSWHA7k9FzafPxEfEmUegChAke5N8StehE6AM4Guo7rSuG4yqtmgoB9em1WmrNkYR",
  "key5": "2mNwjDcbud9XVWCEXTXfVELAuGps1PCPfd5v47TvABwQf34bxgh9HD5jYoLuA5isCQRXoeeb2y4KdvjC7pzjZeVE",
  "key6": "5CwUzQFgCWNEyt6BFDhSMbWrgQi37sahyXqPyiQHbZRz3VQ9iwZHT2RjvPWZejecso2TnVti2aWEaWUFthznrP23",
  "key7": "2X4KXA8TkyMHgsM4YH8VVW5GjsZGk9AzdiAH3VX2MDhkQd4TdGtypsdBYbjY31Q8iFDQd9Qd1QfXUJDEM6yyujRu",
  "key8": "4bV1259nQW7CDsXJSSiw8CCJofAWBfGbnFpJXcBA9nDVN161HJnixMbnQbZpsDqnqb83YFkdLY4fdx39LZ7oJ9ZR",
  "key9": "4LTuFH768ovQq81oasH2WfAL7jXoT4b1shVnRAv1b81Ne4RbN8FFDL94XC8XEBAwaZWYwPw6SitYJh5ritt83BaQ",
  "key10": "52pymCgMUbCNVTuJsVP2W91UvwmU3j8wD5ff3cXpTiUeMcYH2R7tC9LU4CJJKHDtxBwnq6VQwHjXcPviohxPakY9",
  "key11": "UZ5ufLxr1jobYWSj7HY78p4ooY9qauob7Nh2YUUDnQvVyFgcetXxtkCxEfPDDsmoHmZtTh6friPxTGZc5MJXGtV",
  "key12": "3KpA4GRRwvEvdVG6miZn1THQoYnupqtDxNN4tBcAVeuMy3ZB9qKapTHVv1DYPqwgR6GUqo9hQ3unVHrFX52iyEo3",
  "key13": "4yMZsAzKpfGgiMLfYwatxX78ZosryDBEkfxPS7FCkz313yEsmsCxFpwSJNEg31j6pNRfXwUyuCHexYgS4ybxezhW",
  "key14": "12249Jf8Yjq3ocSW4FQgHeWgh5gWMcFcRNWPfVyLd5WHZmDWtGYLy4L4ojGkdfU9sWuFShM9hzSx11XiwpcdcGjc",
  "key15": "MhvkyLUnAY23NZzyzxcguy7E8ZskotkjcX4oFWZwjRmdRSjsHHPSdsXsf6oRJuDcQSUSnBsQnziT7LMNEDgGvcu",
  "key16": "2hwbiP6refJySfx2nyC4kWX8qygbJPPVjuBoZGHrYKwd2k6f1qM3c8Q5LwYea27xLKXSd19bXy7oSeq9eZJjfR6J",
  "key17": "2jj4Xh1hvDEQ7Cx425vPrxqefvi7tqqNZzPjeCeMAcU2jkYNgY9kyijyJsieXPJfLyAmUcBAVdQyxgK6uoMa5BHx",
  "key18": "pVbP5g9kMrDurm9TVpG29MtGQ7ZrizM3SUWes8FSRSuQcVC6vNNv4HL2yhaxxcfYsrc9GdyWCkPLwDtWW429cSe",
  "key19": "Gt9Pe4JfRZgnnn3txswutoPomBVdB7tQY9HZtL394p8BRwNh23zAgdP8v7cv11ZfBrbM7qtcGzn5qu1A4tuqZmL",
  "key20": "3LYobtNU4YrrSN7kJccbUyjSnycTBYBzdPk8PYRoJ2ukb5Sjuxe4tgFPXiP7R2rrcwEAqRkoNDXpbeTsQFJBpjzQ",
  "key21": "5ajQoyNfGYrnwdvt8dksFTvZc9ADrMyYXRPyhGdi9W4yN9fF4zXjzEXh78huQfsnttxeNDJqA53FkAqpAqWm2bbX",
  "key22": "4nd57s9ZS2ffugNHemQ9jUvKsBSwT9kReET7oXCTQTXhfkq16D6oYNhK9UbT9KB96vi8jbqNAiJB4xCfrGcUJTNS",
  "key23": "4xUbmGXhJofJHMC7euR4BwcSNEmcEy5EtHgYgaaeB6s7aCU3rmmKnu84abx3yYvaGstvZZkTeRNZiXHvdcUxFpB",
  "key24": "2ZyiwXzZ6VmimSWmFduCRKiZShM8cRQWpTaEHPQq3GDoyF6B4z1AEoVjowAQzeRgWNinh9M3qj8qaGSisoMPJbeD",
  "key25": "3M6Sues5dY3RGaWa48wz6PGJjncWWN5WPJhnvqCaRSfLJLE8Gddy1PCGUZAWXo91PDMuUPdqFkYjvqaRyrKUFxyn",
  "key26": "2M9x75aT3tNSMrK9boeRsPw83pqysbzPR1xWpJ7DHU8TbvarDAPnHJgU5DB6smq2ybq8GEYZwFyZmLdiavzVCf4i",
  "key27": "5wK1jAWDWNXp8vBsApGbnuuKmERZ9RHv5RKGqqP2zgNV1eNLbifsuwFWxVkWA6WpyRxfYb42KUBqS5tecUWPM83m",
  "key28": "2CtiHkTzGBmgptdQLSLeRJmPnpJoQC9fzD9c9S4H1uSz4PxwRrMhRWRUdm6ZqAgoqyksEXZC96WtQ5Z1FpbX9irw",
  "key29": "5nRhJHqJYTZqA7fKMFvgiwBTF86thoU58TvoxX6uyztmXi9vHD3S8LJSqfsW2uWCFBc8FUBosDNAuYdDrnzuVfKb",
  "key30": "2eT5Piwx8Pvqi9qah7joRkjq3FN76eLRxXtxWTzjTxoxbrQnKJj5rtxdWTquapwgCt9fvbPCpaNTjUxE3YwjUFKw",
  "key31": "386WeBaQfS9gewDtwGoaR8RqDajJtVbEWQKXyFJN19dxrLBh9wWLSLG7SPYKSBf2eGwfYEysSscwkdeNKqXxHDRW",
  "key32": "5vcE3DYKLFUogLDmEq28JRhH86Xi42SNywkhw27BkRqu2adksorvsHyaiz1TYcaBRMR9YtXmCUB7rQ5E7ki3n6x9",
  "key33": "aZLHqTNSzpMoG7BkVhVnnGSe6ptcQqZ1ic7t5FDYNTadJPDjCYWK1r1cEJAejAWTjLDD1Y1TESh2nrVJmvUHUid",
  "key34": "53KxaV1gwGXXGxtqMbz4AM96LTS7k5YkM2PZF8omebCkyWr2Qv97Kkd94wdnSY3zrpehS7gatVX9M8oCiMBo6VSB",
  "key35": "4HwtsFALCBNPpCKkDE8eWaxiMevAYHAiTMYx4YtzD2ey9MHEFgbUdYTx5rzbsaEADao1gWHEhQkj2S9hkESxrKmG",
  "key36": "5cfHEbtGDjGLjP9UuRjbtbFHsY7RgmXV7EjLdwvcGokdBMUZ2nx5T4ZEkKvhsEezQxuGg1CKg8kfmRLP2LD4GwN1",
  "key37": "61arA1weocq7uDnf1PEvghL4hHCeb3hZosx9GTS5aZyVjPAfq2bH7eAT8P2XCu6aWsgWEo8EMLxUYPUeBKyh2kXu",
  "key38": "RuR6chv2T46LEh5CtXBdwnCrSacUT25PkGTWtKBSZodYe6WKVuQ21hGsr6yefjyqgwm196FUwifetuRGt1Mmw2W",
  "key39": "4q1LGGSn1DBaXxEWjBqemgwStw1oyBe49kEqJDGEzvCKE6rKjpAYqdsVfbg7UpLdVnzcerzmNfUoBnDx6T1Ket7V",
  "key40": "1myT3jnGgzsvShPVCrsHCF8YAa6irFdZw14qWimNhQXZEhGzJaP9UZGcT59fSEYe5tcuXgRj4fN9m8gaxpcWGHK",
  "key41": "4YchhT3tMBex5wbzmxWjhU3HEcijubP4NEGTSBk8ZsmffjkUeiBD2vV9J6WDUgyQvaac6tmNmgqg1BtstXQqwqxt",
  "key42": "4dUZ4QbnKqaQt8XTAbHpapMad3YYNxqUAZtFMcBaE6p1iCxPZNPcGrLGwTgGFLzWJmW1Q2kjEy24TF5rFXYpNogb",
  "key43": "26mw7E4hMAbaSQQeKedkB7oyaEHMFPEzTuNctAA2kVhCmqaevwXVbP37ZS8Zms5gkQf5QDmMc3ANML8arL53Y2dK",
  "key44": "3gyEdzJSFCj1WMvJNcf82RrEyjdG3ATBkfkbqQZ2qcJj4EP8FRwMbMAkEWYoQcSCcruPHHz5q9gfYNkjdnLVx2a6"
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
