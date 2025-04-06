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
    "5MfH97F4x8uviP2MChrCweh7NMT14xZKw6pZwzbXy4Cm2uZFvdYCqawH7RgWLh85W6c1kNxKiEnbQYTZYbjPgX3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZKkXVesoQMz7vJsBuvoc3VN4b2zvjqaTVTEKoeWzw1Md43SiTSD5FDRZzZHJtFx9nbDS6ttUWnsjdKzx933o7xY",
  "key1": "2xZyU7P5Ak8pHnpWQ6g2QUDh6KyHUs3jKxSUJXgGYt4qACratxrmquBe32rZrN7pZ7bd289o5EAq75mzMRDnRaDr",
  "key2": "3UEMFANG9TLznYvfNaBvHt2KLAYfJXVXVimvNgsXdpZJmMSUvRkg5fUmnVTriThZnBiq8kEruUs8wNhvLuLszMrT",
  "key3": "5c8rhHhvTc7NBz8w5ssgTxCh4a2CXMBGWqhUM8tfYBnrgoewonG9yqF9HPqA5Uii9YcvfAmCD8RztURXSXLQBD1r",
  "key4": "5iCiWn8gdAnuGKjaYratSyr8L37W8BkVGRBda6xNWxDs8d5e5JhjRRb5pGDBAvbPx9YYNQ4mPCQRW9KtyEdmN3Z3",
  "key5": "2HbKSZJMr6JGGjZ2GobVoGkynCnwCPcs527FWb4Gosk248jeZH5XpaYoJMcAiJ8fsedd4n5RKc7Uh8cpP2oKaiE3",
  "key6": "18HDpA73aJ8fhrjeh8UcHc6me31JJ3pquxZkWSxL88ReR1xNXt7juUbESAGTyo6to5kk67wYW1boknbEWyjcAUi",
  "key7": "3wSKyfmoaCpSNtsx6ctP5a7acre7fpUsajrh2e9dVYLqWdk5tNvFdDYgodyMMFKJXcvQNvWia9Q83hQUD8k86Lto",
  "key8": "5iYPtE7ocnFxkYtVMmK7F1zUpNq3ohnuxrfsarDxWCNpFH2Siv5JFFfrVaWHAJCrGniAxm8NcpNxByY2xAZUaQzn",
  "key9": "3m9HMXG328Jt5Uu5zdKmckmqNxeMmsqBtp8s3qZ6QbSrshvQ9HiXZh3Ccymx68zrkDjuFip6Dcg94cMg1vgKWx8P",
  "key10": "5Kj4hj3G9rx2xLj6HFEvazGtqu5HRHJviniSpmrc7PNf9bxfJVDBrRfQcpXsgMMMH8zGVjN4TUiqVeqbPyDPq3nt",
  "key11": "26JoiBsCGs2uySMLTWFoX9wxpGzsjorCyw2afaZSgqcKNFpKyVaHLxxm8JoARRt3qMGHixMptzBa96Yi6QT6e9DF",
  "key12": "36VkvzKjLjgBMUBK7jinowiqgmG1gw2mK5W3aUMNGAnHYY3KorkvBWRDhghTVGh3t2ZLm8sBFzfZhbLg3HcXzc3s",
  "key13": "4tpK74q2uycwHFqXYiJrfo7GaRrdVALn8dcddCsyKirKAEwRCzDVQetQ4ZSG7krHVqjofB34TZjggE547HdNS9e3",
  "key14": "3Arg2bC6h4AS5tT1RTD4AFzRbwSnb1rtR5Z2kCiGBiy6JfpFUBpG7CU8JTNXbTS9o3ic8uLfnaJK1hMjCZWzYbKa",
  "key15": "2QZEbnjgxnNUtypUfosfyBeyzBJHCSzscgyMAG7JDRozJfQ8PqNUepgipc7xp8XTuCQW9wfEdXkbSDEEBxzk4Zh7",
  "key16": "VYz2N5UzPhLWPFu7dc3HKGHVHUJ9F7GVtvWH9UDChvNwiExMZj5Nmn6grXX4Gg2PaGCD7PLLVN3qY4fNBggVWcm",
  "key17": "rXQyfQoAv4DgekxtpSUvxDVDoHiJGLb3GAt1Lpazy3TuWmbFs5L8CRK9XVp53rydYsCHdfSfemesHPJWaHPrG1k",
  "key18": "2WhERd926v1SFzbKe4yu5fnmYYtjUhfkv9seha7ugchELeUknvhwfd2weHKWCHBmNgtRR7tx7kEk7bKGQpZLrALU",
  "key19": "46ju4CBvsQxNVH46AnsxVxTaVWfS83GU1cMCB2p4Hb12FeoARoYuChTXskfB79TSFw8a6GdW3MYmiHznAGZfWwsP",
  "key20": "mjLMkZUvjqSA7wof2ZDhnUXJx9crBdsMdtNq5FcxmSQ5NpNgPaXwR3zzpTLCPNBgdvAsjvSqJdVwDvKcvaN6LPi",
  "key21": "VnURnraPy71btwtMaRKev9gAwRAdrbmF11kE5ebVWqKerrNb3WXvhv8FBJy8Ur3nH8PqALShf1pygeaorsmJxjY",
  "key22": "5AsRwUvtN2m5KsU3ngNZH9Q24t3kDoPs8CwRTjN7A4a8AFFTKoiGRwPJe3whJgXNaWzEn6XuZkrbNWH9QmHp5wdK",
  "key23": "2jT5TT5TCwFgT5fkzPFkUV7LUGMELabmBd1hEBQsURMTuQ4kiqvJYAeSHy6n4GYbPHCdJB2iL58o3e8mX8qmYhgK",
  "key24": "2Q7e2ejUNEDAW9zcEr79UbqENSAC7vyCH1MzxJfxPGfn8tUMRpTvn7xr7xNAoMDDgsfHg4pCRCDgc6gLsY8VMym7",
  "key25": "3HAx5tJi9PGsaQJZnjvFFud4qn3NuMfckyWfsBHafBV5fLvP4XeiVRRSRkXCSymuc5XT28ooyPVBkK1zBxB38G2Q",
  "key26": "4FjandKf3MgrFQTBQhwjtQj23ybqJ24xu7PgYajpWMXbAhMoCnBDHftxK4bMAPUH87i4B1eDd3oapCTsxQV7Uhrp",
  "key27": "v59D3TbTkmTrLDCg78385JpGZJihKsk3ePtkdJctq3e9Ynn6zjMyoj59vp6B2hZmYxkXPGDpcLXr249zqmKh8Qi",
  "key28": "4oeQXYAeJ7NAY8LXQgLqsW63Et6MdYWGsZxikPuRAnoXjJgpzHmsmN5hc2yV4j5x8Pb84zKPzEsuagHnMjpbpnRB",
  "key29": "GPKM6uDmJX6fuDcTTzVVAf3b3dHMKqVLGY3oFFNuT2m5jVGZ6SaNdvpaJgyMqBdVmTBn5uT1yEcuUe5m91irFDW",
  "key30": "2edj5P65KtYcSfnNUrPc5G1TscduCthjWP84BdGFJB1aQG6UcR1US5NKEf3AjDF7edvGrKnXoDYGJKyyDJuFEew3",
  "key31": "2wLqStnaextYMNLcBmN1AUuW3R7VzibUv8qMaPjJSoVqMRmhpurgYZchDt1ke3KT3vm6XfNZV5cNRBowXuC8Y1Fq",
  "key32": "5ak9WiugdUNpAQUhEx7tRneR4LXLik4afM6f2Uv7HUq77N29s3d33Fp1xBXoREfb5wcReerzYPvEAmPiAcof8xqY",
  "key33": "4Pvr2jWyFhP8ijE2kx1hGYNNF9Z9uSf7655YLVWosnnWGyyWSj7Q3FwesZZwVGrgSWA5kxqZVD5Ly7u7QvgCufwG",
  "key34": "EfxPmCTFZ7sao4dit8BQEQo1Hn6KSdkxTrftyWW6XjcUF4tXoTfHrEHqxZdiVUc267UuWYTBT4dPa38VETJBFMq",
  "key35": "5WRTqhWwadxFDDmQ7NGar8iqPgsVsKrmzwPHyEcagxCmCuPkoB7tymXxKDdTRRfisFijTc8T57moYQM8ciZtaNYP",
  "key36": "5HG5LwDG71SmAuAfDUKo8HQ84n8gPmCxDJQWvLAyfgKue4FGZFZHrN8x82we99KnnumyxUHFxk3cocKDXWDaVHC5",
  "key37": "5QCmJa8gFg2zGrUCBMP4TNNCFpUSzvkFHhw8cqjHGyWBeFFp4A9KJhwBxY5Q29DdkDDvUWi3Sg5S7nfcNePjfYiF",
  "key38": "BZBpCdXZEuznwzAGY197Tw5dCBQaDnnLNR52uKWktbJYEk5ewyupxeXwWrzDSSWwfYMAkxkVPpqCGa3TzvU1mHK"
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
