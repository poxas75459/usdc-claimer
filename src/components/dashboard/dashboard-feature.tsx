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
    "5ggewYuxMMAkYT2CizcB5MfLKR5py7VvFmDnEnbeAULtV3XGH9FEgkywNPzpoMUEnabENVJ5ExsiZS27Fr15W36w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27aCWUg2LbjwCoG4tH8atBUY5ejBp24bBH5fs6xwpRHubybf8SzbPXDgYKS8TswGwrVGaspJhQ8xRa88PNppc1SF",
  "key1": "4gwkrycuSWoj5oRm3KcddhwHJMo7s5YEFppDdTgQMPB6NNRzBMnvY67EGxn8WW6bYUWVBiBNr44mm11zBrFwcwAJ",
  "key2": "3zmyZoz7vp8Q3mnwpxSnNKuMUSHprCJt8Ekgfyu1ZZX7RRyDVZaGPpNGfHTZ24yhWcUwYd27PLGw4UBBBtn63JGQ",
  "key3": "2fHa7ZaWivL8D9VCgarjggkgC9HxrTphsiijXJQApayEFJ6YJB6oinYfzy3UGvHUWT1AbMqZehcvzqx3nSBqfuXK",
  "key4": "9dKwKjfQ6UsuwV8KVjPLSKg1nZ2mQ8AJFkX8BGrG8eCzQWW5FEVH3shuz34R1wWGvF1wPU1ZQH2kpofsnrZK3aZ",
  "key5": "41xRhBEdZrD4VrHSM9ua8sg5GAzLmA1HmH4Dh6j6NcyiK7uQ9ogrZLm2vnxEQdjNqE4zjzQxUxaaV32DJwQtyedP",
  "key6": "3i6tLBmvgT9T1qxwfDqdfTb5fNHxMQjWPnWSTmdsrr41r8JwtnmTamQo4bvVNpzpUoMY323pPmiSpHv2RUKmhyAL",
  "key7": "4pfgVvCiaoPabaBZCfcz5kQyNN2pmPNxMDc2awcwpxCqdUAr9XxBMH3jC5DD6V1ao7UFydY27nAzdfADLqxhxaMD",
  "key8": "5sDgpXwcuKMrE7ceuvoTVj3mdR5z61krwqHBhF4v7kVi5BGF1HQAz3Mx4FaYsFFPAiuoQcXYQhiPEaKLCVwnPNJB",
  "key9": "3Jsc66gJwYqpsKU8USApdEy3UNXe8YMRyj943961WEH6QjcdiNVsMDwbrVMoJbwey5Qvx8qVJDQgnUCj9HcRgZHb",
  "key10": "2oHcMt1wca4R3kCGVkmQQeCELCRZ2TjVd1SkuswzpPGT5sFswAGa3JG8RPfHj4EgJMaP4qSyfD5VvhvDx7DfM8ET",
  "key11": "3MDDt63xCsE1j8c6TsdkEB28WC5W767RKmQAwAY2azQvuLBqW1D3rFURHJNHkQvfrqaNUP7tk97doSmE4EF9BjcS",
  "key12": "2ET2v256ZvYAqSdGNjTuxbEUBSz6dqYQEuyvhReieVBmUVbWNXeo3WLoWWcAfSZefdwSGeYk2mXHB7ZsnCLAnzvv",
  "key13": "5V39W9pEUqomvijfJHxjDFYkednyvuZTEAQzFVJKNDyNrqeRfGcTEsL37DGCiJuaPRn1XVRpMkkwo75wz41s9yPe",
  "key14": "2QwwatpPuVCM5VfnQ1psMKgZNuSgFG1EHfDseB1ZgRq31GQLyZqNKW5H8rAxuPYg5qtXuUBH2kev78UxxHEwCSkX",
  "key15": "3MztNN1kocrnvGB1m1P6tDWRiaBMZG2G5ga9W9dX3HkuexrRBepWKjA3fMyGvbYBn8pVasC89szfXGfRXjNvT7np",
  "key16": "3wUfQG5Jox5r24qT1CpiSmeyfquQgkvpDBY9hojcSHBhr8ALbba4jTXmFgnM77MNLyJE5jSZJWL6A3q8t4xb8ZKh",
  "key17": "5nc4rpvpN7T8gssVeQKuwmjgVAAymmNrJy73j5TDTB8b16hveunCPNK8McxKHXTEBBoCdCPB21o15AbY2Uwuw6Ju",
  "key18": "4EWND9oCPJaHMBowjgHFUHEZkGJMo9MQwV6Xpb2CqxhqkKD3o29L3gbhkgL5mQqgWui3jHy7jt9TCmideX6k5WzL",
  "key19": "3vpF4YfyMQTwmmhmZkcYbTsYAoEQTD1LoQGcaUwbGWHvfBpJG45pSoMYuvSXvLJGRLjasWmJHkmm6E3RuAQbXcr4",
  "key20": "4o2XZow1RPUhFhhJXDw6yWg4wuFiMCKYAuEQjinyb516FWyPccoWvdYhDFtNpRGT6qgSbLqNTmVP2ysc5U2GyzNg",
  "key21": "4y3LQph4c2ydiGbR8Ja68ja8WfNvwmjbzkosfaEstuXcR37JNRswhd8Yes6zRjfvFqPZoBzK7Y4rk86fZ7zpJK58",
  "key22": "4xGDZJtvDji2TJ7CBosd7WoU7WNQrm5YgY4bda1xgt5JaSotvGRSVPEunPnDBNJwCftsUfZTxKZsCvVesCavZvim",
  "key23": "55iVpmxui8iL2AtcUxoGq9BKMdRahNNY6eUpQC91sneu8rCfy3mVwm6A7zrjyFbFmSMKnEQjaNsK3i3wivh6Ynzg",
  "key24": "4tiDfuRNf8HYYvXJxVS6DroPW6inF1yEhBppK56wU34qXzCo3bAC5eGp7nNxf5adaRHKuMYaCKzXrpa1XG5k1wSu",
  "key25": "jDrxNw7uiroqoXA9P7NXCEkzjZVJaHXHXRLV5CU5nPDLq9JQHe5pW6HjDStfj2NSTWmaYGvM6qewRt5NEr5qGaW",
  "key26": "5QhkhKPSGDCMzSzXnsFgwqFAnNbET9y2XKpDRxSqsoSPjetevBYmjXDWk4C1PME6n6oUvZCFY3weH76u74G7aAJo",
  "key27": "C9aMyd9L2rYHE4av7uKGe2rBReSiSui1LbB2LxvJYGqDJVpQ3CqwTSTAH4rDw9QueMBx3xV5dJ1uY2uSVgmBN6v",
  "key28": "PCXnmPL9svBnyg9fn3C9MsseJTNP4qMYxzAv6qijyJLApV1YZqvXiaFiFsV4xAUCXdKy3hhRH8yrEwm9kZQwDdj",
  "key29": "4zCzrd4oSDEcSkvhRVs4hyczhYcTYGoitPeSnEHu3mYuAcSaypEMH25QfZRRTFu19hGuxSkL1uq18Mv8ApvPEbb6",
  "key30": "4Sxx8JkxMeG3Uwuue9Rbth4cm1zgGtLSAKhKwZxC6cnUEXiKsVp8RnowsF8LDUjzbzFcnPT88eVxhFWbFU3ixNTx",
  "key31": "3ETgDUZzFPgVqqJApCY7YWFX91SN6E1pcr4XrQ3qVpg2JDYEitbD2FtALw2ZTuXp15EAJJNVdS4EaAdgzvNFaoHW",
  "key32": "RkKf68GF9XYcwAo1cREKZCZzshtw3niaBW22AgE9AzUKjjfqBMkhgmYJJVV8poWAYnxA4yahThwD8c4WRpirkPF",
  "key33": "5xaN9PWCSrDsZcjG2eUALagNFV6jGKu7n9WqWjd1KZ1TY4PMLCbMkijSjZYRGw67Qiu9MzQn1dYP9Cjkjjdww2M2",
  "key34": "26fR5JNCcRL4gGkg8CM1dATAhAdYQm3fnsjqp8ymmpdMxPy8nLcGqrSsF84FEgk1g9Rnx13V6MdWENqTdatTyTm6",
  "key35": "2d55CTeHW58zttyuT7TNbjNM2FsvLsnUtAA1Mt3SRsoarJPtzuvmUwcFpwicoLL6PjC3bG2FSNo1zBrJtyr8Cn5d",
  "key36": "3cd9xxBig65buAMTsWnSvpypNhGQ1mwRtEqScfUSppdan6McjNuLXenq5N3ccCTkK7BqAsX9ZTWrH2ZASX1rYWxg",
  "key37": "2HBHgsfua9ieLeAWRhk1EA7Ri7chemov2SgMmYx294dt8s95w2WupXFKgQEy1H8ZwjXd3X7dY8wDFvDdSN7rcani",
  "key38": "3pqf6oF2gJh5RE9xJdp9rYP58U656S5qMSYJ34d1UgfQmuUoVaExjP24i3128YNKZHvPbDkKJyxrdxMiFRadXojh",
  "key39": "4oGL9Ti8tc26neVzPBn2dxXZPnE5jC2nkStNRWxS2Hz5yGgwoZdjW34roAPpC5bNDNDXsdwGBttmmpP9GBn3f7Wq",
  "key40": "5TuXDNRgJ8LdSystJpW4eW5tS5EycizZDKZQsT89CSxjeJqzWAwvr2tyt331of2zLJLAcHjGxht3EyESuZ4y3drL",
  "key41": "A75d5vUEEvmrXKGFbA7Bz9zd7nsLVvXY65Z4WDaGGRsaBWzA35spwd675vcyzfx6cw1meHaC9vmBxp5xRnvVZYa"
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
