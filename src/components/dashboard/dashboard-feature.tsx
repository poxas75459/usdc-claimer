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
    "2k1zQ6vn2GMVGwk3jMkC6Zezeg1pnqnLVLDKFPkU4voNRJS6bn9ZoePHV4ha9TF9g4MmFJPmAJry2VysAMUZ7dLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jyyTofM8sp6LCRpMdCRhx5Cem1QUhjcEtMyUnExrQ27V1nbEdx6A61iqPx452vJb9SvZ5ExiYZHM8kejqXrfCy1",
  "key1": "mpJMhH7jV85A411sTEFBwcqn6o4hvJaUBLCCPvkNT6SJdLTSEXbY1NCXnHVAfUgjhGHa9qmSBnsrDdpY4aNKUp3",
  "key2": "5nv7iwxwZejJXPXustAkQwhzcwX9mULNJUnwQJyTzdNCJZb6Df1P1DiWmSds9azaBPhZAH6b9AKYFcJXURYVnmg1",
  "key3": "3pbFcb2uDyziFqu5Av4kPe7jU7y1pwUgMht6BpSUPz4d8Du5iduzDua4Px8c1TFdpFQ4tYJggDu3TAWR1sWrqWdD",
  "key4": "4N2JwDWznaG6WL78WmPtAJBzEiQHLs77Q7KKGkCDbpfLBiZ1ReGmEr51y1PZLPrsWwwkAJhzSEs2DuQ7xN4bD2n2",
  "key5": "2B6mJL563KiaVe3SmfLyZSD6eY8JxDR53VwyAmRwaDWoLsUTyM7U8Dv5Kzqv8DSrbGiJoLqHMkLVyCWKCdnTQ7c2",
  "key6": "3JxVmJgaZM9UUGH78qQfAbG32Zgvm5PECpBiSUdskce5qzUnYbKVMyPPwaZSGJsMS6yWQJMHEfv9yPgsQ8NycG9P",
  "key7": "4A96qeEa2UPEsZFHu7DSCGm1fAdvkgSVnWLCvJ42aEGjYge8LMt89dK5wZqjg1jagcHjsn5g4mRiU5ayRizDYGdk",
  "key8": "4GnFYDq9EcpqaTWZgs9wPCbKzxYPaAop9HoiEh4LF5iwFx5d1v6LJXMnrsWGwap5Rtj1HaRLbAuEa2AQdp7uAbyS",
  "key9": "4WTE4PviMgQwWsdgxiAwZZ8mhMdpsvTeX12zKpJrvMgeH21TK5MSfAEnGEvvxyQcxQMJwpEYTvz6rKB61MELdhAp",
  "key10": "5jJbD7WvVn5tchcWT9NqVk5MXvHnEEgS89JHBPzQoPMTYnLBJ9f3hooBMgCFPGLgnJ6QrGMLGxjVdza4Eed3UGWf",
  "key11": "58xibaEYB5VzZnQifuy1R9XHZWt68g2VjnYtXi14DtzWGF6Yee3hb6J2mJBfnywxPjAmrB5ShbGX1MmmEApbdGBg",
  "key12": "2t5zbaTspLeMYFs6cjauSnos2hULhbCtcwenGTvF8pzQnaevtgRWEDPNN2i2YnpqsfMhP4GthKPouHm4VbM1q5dJ",
  "key13": "4CHb4uyhWd4J5LBXuysNbBdyNGZdxPgRbaBMmNha462ziKPPiedi3FHDVDUb6HUbofZzJApjrNQ79QBX4vdmJRVT",
  "key14": "5RLNyDGceWEfPs54L98aMdD1AcZa54PCXZ3bwravV9nfGr252GiYoCQWPVeYBH2JMjkYsWpkuWzyDYQdgHGBXF4f",
  "key15": "3BFd6HyjsoxFx3hLeU15Bzk6mXbA6EE1ZCwgCuRjnsTUoP1WQB7264wgimZQAazV4a6aPFpoZabbQaDPfBGhor8m",
  "key16": "4yJzfCX6QyXQJH2SHb9dACvkgupcFxJD8UYPb9mNqDShPJXrtQsKxpq9HJsfG78SR8CkZozmwP1PBtdbduB7J48Z",
  "key17": "2oUDRmi9bgnXiF5sbSW54YrVghHdiQZM13iZEoLRkpAEy9yu2VUfp6QRP484x1Dk6xYUB2zny9S33e7x9bNEnKow",
  "key18": "4g5wdMeBhPgPy6FWsprZJ8PNHAR8bq3wTJjcCwQsAoH9wTKL5qkdwH3MEsfnscwdCmFCtB5qph48Gp9E5tW3jQJH",
  "key19": "3FDApTL9cYfbmPncdaBPsz3mHDzg3fdX3ys24vvV6LcKYi8ZHHjrrgCTyXQqFuJpD7tSTgocgpmbRuCmCqaHbfFB",
  "key20": "22Sc6h2fFKvLRdijqWqBxFhd61cm9NGjSE2z38zHrNZzM6RqkTBh9yJ1ka4p8SjPifCakxZE1pwHpXd2vqAcjisL",
  "key21": "3mGZiT3gAztpvWM3NWCgtuJx66uSskwx4bMUdmBGA85neHD9Du3919ZVfqsuGQz2YAiawNBtT3vFxGGd2GDuUPCS",
  "key22": "c3YMpdScVuqeJyWNu81F1DcEDui1EY1g8Z2cccVMGi2kDaBFwhSemXX6vpa6TgVTgYcUSJErsa5sWA9MJ8FqXtG",
  "key23": "S4KAGd9oifKJqDQFJgsBk2gCyqaNhLwLMMUigRWGEyhcyu7LBd1Uo7tHzsTtmQPqYjNhymRaxKKPzBuDBhibX7m",
  "key24": "5MSzBMfvuJR2acZFZsbDSdZUSBApm4WRq8rgJpsDHq2nobRApfenSoG9nyT5sxeGwDTWWni8H8aK1zEtkoPgbqJw",
  "key25": "5PXGndLAAxqojF8Le2jBeVFTuSArAWhm7QRVkHjApDsUhoM7H4QCi3nVRpGPqLJkDj27x9B2yhnNYDj2yEgLTU5o",
  "key26": "5Vn9fukQt5CrsNdfHV78DdcTzJgkAgWragghDXVBTkEw4fcpFHG6vZgQMtp2AfGxeijzdRQLkRzvGXsA6mcbR3gQ",
  "key27": "54B8fSYr44ucA9GzjHfTY2bspxLf8LCJdvApTK3ANkgYVr3eZymSzBuV4HYVUnuxdhRQJLvPRtiMCt6LBfNqUYDu",
  "key28": "5F9aHF1G6pPQEHcFCyfLdStHb4BUKpYwUphcLQE3iUQusKndrzdzRJukCTQvcQWqV3TX6KqsWEfCx3s6qyE875qJ",
  "key29": "3mUeHGYsrU3bssJnJYUb9tL78gaVPjMh6TpApBqioLzVdWC26h3WGAm6fQFK8tPkDfR9uww2dgZV9yCXcouBMLKQ",
  "key30": "57J4xdrDw3WgwQ7SDGgeVpiVqeQKNehSioNdwyn4cbsK9QRRJc8rtGHPzAnHJK3kk5wMw7937VKe75LRAvwcEgHA",
  "key31": "42ptSoHm7dCr32KcT8giJPUhbJh6278pWu1iqErXmVoiErMZpPgqeRVkZMRqseYzCxnc5ZgnVPEWsWLxWhiFsyKU",
  "key32": "5Yj7q2pSdX9NcMGejGHmkmKVheNXsJ6iaAcGWXcW1d59CPC8xeKurTMYWdJSkjbZ5CWPiZimSMNeFYDqVpfutvmB",
  "key33": "3pj9UrA8VhfYS4xaPBpasEXkaphnNxQ139kqoM23C1ar6eG8HckHE9CBazkHuz5miqeHT6PXpA6QUBt3YXe6EbqB",
  "key34": "3R9rea9neVZBvXgE9rbjw6Pk6GNXc6zPZ7gA4nJnywyPKDEPQ5uW5Ak4h68SU9p2ZJuDmk63auP97inN9ndbJ3LZ",
  "key35": "rGasnPUJ1Uq1paSRvQt2Qbahb9896aTYGTBrU8wMhsa1LJCYVBKifryLqEK4nUEsi4g5fDuGcBa4bAAnUCc4iMF",
  "key36": "66eNXXw6PngvoCSGkbocCL33UNqxhXuwW7b5kki8SEkYeppShAhpmB72Q3HN6MphbVRLpN9ZvSeu59f2y38AfLLp",
  "key37": "66kkzNudZHJJCXfrcXgwYFPscnwDxRSPLw6XYXbci8CoZ3yUjPe25CpNuioFpyTH9yJDsga6aVei3EusfNcDWBNw",
  "key38": "XWV8mBrCV93Eysx61tUznthvDctqWn7yLCx8gFFkkgtAbUkNJRY5uV4pHDqc6DoxKedPMLtSY68H8fphrJ6VEUf",
  "key39": "4umPATrk2pJxYGTQuhYRyEFW1CvcN8aKfW1uu7fBAzEq6rWTwkmxRjZmoT48j2Evn35zVRKxAvnkoG9bh7xDNQ6y"
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
