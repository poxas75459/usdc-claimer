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
    "5U4qZhVRG5jNVRbQ36GMWXVg3ocPfQYQSNDc6uzm7PLrssZXgrdFmsb6EXoi8CQoeCmWDhcQo5VHMcmknBDHipgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z7bxycCKEqqhRmw645qJgiMakyUXfU2PDSGeqzrQ9aB1JXPbYPC6CCQ5XZUNagQTsVyXxXdedzcN2xSrV2Gz9Ch",
  "key1": "46f6bnJ695reyaiKwG78UJRiVXoS68GLo5wFkp5EWkVj2Vn9aj6BFnYXVUkuer542X7sHgjBMBtTnNk3xyVcHD7x",
  "key2": "5LvGjYv7KqomhNQ9kdo5MXjRebPSHywearkonWb6rdUFD24AQsydQuRkygisgHhpmi1j6KNd8RyomXFW9GYGrCiv",
  "key3": "3rYsiH2WutsYrPajZePughoy7Dmp8p8hx1NP2hMWEeosMDJWoPURcjZiFUDSniktoEkNjDCdbmdg3TfScTZ52FPM",
  "key4": "63dH5LhJAHM17jcSxPDvwV359z7tLNbBCwPh16X6TeLuVRFvsjeB5vX1TwMhA4DdfxBWwEF9UDfufinvDGnAFfKo",
  "key5": "632bd4hd7r4Cg971VAQeWccdghrLuVMGMqp44hJgVQq1ygcqKtvyCXHHTvmkkeU82SnNi5xj4eTVBBthmtnmizY",
  "key6": "jrjbo8Bqc8rGXMJH2z4gXGDmwvpYk45B4ZM7AcYUvBAGACqdLjToJwVfEnk6FYvrpW6GrHYkFS7HVtFTJVfF7W4",
  "key7": "uW2yZvWC4p5qvXxQA3bqguNYJ9r7jM5ZynQjSYm27dTBY9HiSinnHvcgQsRosRjq7Zvt2tkFchgrbwHm14KSDtm",
  "key8": "KoBo9CKrYdnp85vaSGaCajVmTDZWTVpGkptCJwLN4kM96uBGQ2VMVFjhB4yAtsZUcATDgBfnQ9p4v6YuV64WAEm",
  "key9": "2urF7r3N4L6VvgVZva5eHrt44zgBQHpCinWR5sG6wuaw7dzHonrwQvASBA4ZZwurKZJ6dG37nSMmhw3CZ53U4ove",
  "key10": "57e8ExgQM9p2dRgajwnjfYiqQ45QYNC1JHBwyD7rd9rx33DarpGusWpssb3F1mXKN3s1QjnUPjDQJR71vva6JitL",
  "key11": "45tHCTRpXGxrgyqDGSRe5QZTVEQ9CTJJKpW9HSrzqAUzGygHWNtZHhhRbXPiKWP7nWXZqqVeQ73fm14NoH3mqWH5",
  "key12": "5WntzApPyKMvQa6ycgSbstJxnSdbzKVnYLSUAEoez1Y2KSyy8Xy2KC34JtpZ4CE5DDsa29f7oeMTvNop1RkNgNg7",
  "key13": "xVdiPf2baTkcCewuCrjhjFbCtDpa8GstfbkVjaMK2cP2p4vCeaRRtpT9Ncv6mHbTk5KEaLxQsVMHPfvKCJvArJk",
  "key14": "5dFP9v7zLFG6BSK66yfWiUNMCoNvZx12mBs9u8ZNpRoEEgxUyjbhjAr8BFZDEsqtymjv277aTqrT8vdtVbdNJacS",
  "key15": "66u1tnWsxM8CSn9MFNzaXkZiRUTKuBpQMbo7rm6mSdTztEGwfRrXF4sj4orFfi2yehuFho3VGe8QCCypPBwcrg3Q",
  "key16": "5HHdBTibFcb9JdCyJaAfKSjnb9YobsPZoJU95YyTmzdZAzWDN3bBxYmEXmKUJ2j9tA6CKxfh89ck5yHBZNJcAPTC",
  "key17": "662YkwBNLciD1Vj2FPpYXWbvTRT4Vb4h4d6ZrE2L8uXBHuQcL1Vykfa8QtpRpnq737geW3Vya1MQP3zBcCkgj6xe",
  "key18": "6VyncdH8qhvb61Zz5eT6MLihKxYSzYAXZzgg7fcV21MUMV7ZGDGG41EQp9A3yrJJqLTYT4niWcVKCtY2fZX8fwg",
  "key19": "4w3oBXyxLVKqL1HbeYriiemRHDAKu2xExMuLZtLjvGaj54JsKYJ21nd3YYi2tJUTevfWUkjtu4bEzSQ7EENsmTek",
  "key20": "5L2WS6McRscv5VRUZdcZLp7dxFafjmhTdd3o4b5tj5mw2zxdjjWcZXBh1CdtLsdhM7bjuMjrZY9VVznu5reWqfm9",
  "key21": "2oRMGkRjmvXJJQScPFrSV2o6GV72TvysNURFdT2aYtXKTiLB3VPvRfa77LNG39oSjmdoFeWXmZdzoqUnHwtP3GAY",
  "key22": "56YHVSkfTAgH9TqcpymDoXVfkFRkgwVJp1KRb9YfkZHzzpyzigvpvyqddFpMfAARB4BU9MdYwRhrSCpnJYr2rhyY",
  "key23": "KxYfszNeS7ggbDsUiTJJNxt4fJSRPm8q5EsSmtasRDSfwYj8bsrehVRAh5LoGFKn9onewApaKYMu3kRpaHSnWs2",
  "key24": "4zY5j5HbKMK2njeAqjayGMb4BRWrDvyhtpsRh1X55xg8f2614jrUt5pBQppEDu8JHismiFYVgiXDfZyYpGkpiNpG",
  "key25": "218Uu3vD5ZHxnZxzQeZvUK9BEqQzgX7H2GCHbApS7ynVHiP6ck6E4jAnSsUybtrnHeGGEUox9tbiMtEq18x5usWi",
  "key26": "4DTK9PxCZsQgJwFQEHpfVGYCgS6aQ5iy8vJBieUQWT33LXnyzu7rgFT7ceHp5JhXBpRmpJBJAB16g2CRLMvH6w6R",
  "key27": "UBgGYxjgyfryd66erTkgvFe8ZthviAGnBjZ7og5woBYsM7JtR8yMdSw4GWAWJLy8cDNbQtKtv7pjj5pcHp1Q9LB",
  "key28": "5M7VWJ5ffQwbXYh2xdmzRhEKnQvE9JvCYyWTTDaGaAS2FTTzaaXVpeQQ6wsebjBbrxmDexZ6QzoXSDiZa999VKr5",
  "key29": "3SkBQNAYEFjUA4xX75b2WPg4AhkhCBg3HFkGD2tRJg4fTiwYZhvvcu2owaUozdSv5JhChCwKhmDwxFSRwfmExhHE",
  "key30": "3WPd9MnAXBYEALmZqnhySdB9k6xAAfSnJ1KQZzQ1PfFSXQxncxu3TPiBURQzsyTanF9N1rd15XSRvq2PKVfuULYf",
  "key31": "3huct9uKF4PdNVN4vskGU1vbZCqhDTkVuXA36o8wGSdTJmKWR71Wa1tmzRzKwHfdzsA6Ck2tmoGT8pcfz6bmburc",
  "key32": "3YuHWC3zeDx54iviHXX9HU5zMsn3M9TuMwEVaHEts3AKWo8mPvDKeHwSuXX8XYvc1djbnTZg2rTW9KVJa7FLT1wj",
  "key33": "47FimmBQT1aVRTdr8ffwrpoY7cvT58sMqwY5fTsapaaSaGJ3i8yP618yroioruDotQYoXP5mmWEXdm4EVoECkT2c",
  "key34": "4S12ppYrKsscUchinoRsxGEPQbZtoCGvjgsYB1cU5a1x9CTmuAbrP67rUobv5pJdCnfTumQdCrQ42HY7B3qfVqup",
  "key35": "dDWgNTxHKpC7E5TFU9kEG8CuDFX2ahHzqk5x8fTAo5dbnuaiEYFbbHhEdZZg9nZuD8gcLmmmT9sQPjpQE3Ew5Xh",
  "key36": "4wA8PZmB4jdGG5hDPN5TL8PKJYkEkCZ5UVWnmHWAmHtvzwvcn75yjGqQASYJWfNipPBCyZmu4z4jxmXgAeyrTP4e",
  "key37": "4aNb6Hwv1NH3YTuQeLYEYHdxwR4nifywhJQA21rGXvjoHhHUupvBiqxyYa699iKpLPJ9x556cbtzBeNTLhoF9vmf",
  "key38": "5ac8fqdzhFTc1ehntJpQhS6fYP6cFYWd6pPeXiquGbTwGXAYjqkRVddZVcRxw3MLwNfdQfwhDR9TsS8m747WaKUW",
  "key39": "4dyUT8znnkJqSZsvFRvwzEEu5Ym9JJxBbgXzoVpDSuoRPKUJDJkuTpdNusDNNKsnXxeebXKjSthqff9U8s2cCDgc",
  "key40": "4bYwmERrheXYPcDskatqUFCy1yDvfaKrAaEYfrSGNoLHNMzAWmBfHdhAs6rKzjzoLELHLK3rMW2VDpbRKJ7GjXqw",
  "key41": "2LzQEU3QhPqJuC2YXm9xSpSZ4Fm5bUKtYCXF8EMR8uqoinz5cCDGSmXhUpfxfziP8MxwmJUWo6hoNWAqhAeZ5pJo",
  "key42": "2exsGDi4AQTs2GkKoEWhqAJsbnod96TftHtvhixLf7MeeB5FBuDRPGL87beCNHzifkdNoHtr985bcqjY5A4ERNH1",
  "key43": "iJgjNXmTb3twk3exoF4dWYsJGugTkXxg9BKkfjKWFUDEP6k1nCjr5EPre26f2FY3cSjNRqQy6ewgPvF5RLzZ759",
  "key44": "5amkXDJ4XfFoxqwYke3ZS1yYG29e3gmbwBjMiDwYBSzG9CtRadXmMikfw7TYvJLefFe1Co1FX8oEftuxRM3j9Fzq",
  "key45": "4gxuBYfGf4CuHx4gUPgCJJfxkPiZrwcRL6aNTs9KCpNgqajTLi5H12U4XwtdfPx6pmaSHaegsJmKdfGGqa71DUwE",
  "key46": "36riZTuRYiF9cUEFk42VuGKwvGdivYkcMsSbn8qLEEtkegXAoNKwak8oozGy2zghHzkp2VFT2Q7rSWrbnqwcnAe",
  "key47": "5iXzBUvbn1x8BamWwbjPj4xuGpcXxNSpj2U6YUuoFEoaUzL9JmV2i7YY6WziJMHBA6oG5RBbMgjU7QHynEqHzhH4",
  "key48": "5PNQwF9VHx6PqaSHryaUsV9P9ELV4vwdrKQFZZg6qUR232j2UgBZEXcYwc3E8TvxkGbHQDTCm9QFKg2G8y9YgLkm"
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
