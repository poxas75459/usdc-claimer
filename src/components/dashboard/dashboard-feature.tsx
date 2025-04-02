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
    "3SH142eg3CqJFcbj6TEtXPMu49jPG2tcpMsWo1rSsZhRU2wK8FWJcHN4znpmxf8TFi6RU8TfKDWEsRLNthAAgGQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iCUrzH7P13cr3zfLX4Zv6ekHAj11XvwcqH2J8KmX7hDvpc9mRocb9qfa91933shBSamSeLxHKZAGeqK493WEYUB",
  "key1": "4WNSaUx1G79HPhisAcPhPKFM55uMdd6fv1HaBayiMDeZyyz5wTe4KTyoGa8Wtjoe1JLDueRgPy9iVDNN8bZuFEqq",
  "key2": "84WPWJ4ZE2kY7ambgNRyJM6zN26rBR4e74NsULsDwXqdxjszjWR19VZCN6dxtggV1oQBssccbqLaWNLua6SeB6H",
  "key3": "2mibDM1ftdxTnJ4U1tDztq7HPVV1FrVESXR84FxyBEsAz3ctqmQrFjwirBPnSsQM389iZmCpR4eUaNuL29zoKrb",
  "key4": "vg2J4jFMHCEs1ubq8BoTAgnbqWDm2vQ5vvhzEEtKiJ6sMhrdod9BC9E9fbjXJ5BinyGFWoc1Rap8BkfAc22n5Xg",
  "key5": "ayzZEM7Rd9gEmW91teuddC4Avt6Mk4KsqwES96WkjCrSbiLsZpD47GPmihzQShjw1ikVnEZrhrCpspBxRSNyEsb",
  "key6": "5XLocNqHUyq5zHqx3KZDpjsmLgKoUXNApMgqwYeL8VYDUdP6ccvQkkEbrpftU4seWgLZcM9Hbc8ZHADyDr87MuLg",
  "key7": "VhnMunur3NHz5EbVotMcfYK6UDDocPQqZkHd52Z4Xoc1bD5YRuGDwGJWJJPQ3hmJe2LqggNeuspQjP5VRoAdLRu",
  "key8": "5FGKLPjDH5jK43oFLyuJ11XjPfWTBAKM9eegfTxGsRZeXrdpchZYsuTrU69GHK7H1VDcqsk8xPoooiiyWx51vAzv",
  "key9": "39j5W86QZCJbbWqWykR1dsEuFb2ogzG5R6sWT9HXg8ppPxhJxdpNcQf3L5iZ34ijdwba9kHFZpqM7Dh99y5Fvm1t",
  "key10": "5f3tAGSxvJyxQH54Fs3eebbJ6TMtiTmAMo3j3mjgvzVHzAW6op44emsAzPdogxrMhkTyyYqbqjgFRtTYFnbpktoi",
  "key11": "3ozdC6QKjakyPrEvW6nVof1RkuiMcnwBL9BYhhsKLstWMbMX8dirHECEZbNLS9nLh5GqLESM3JMzGcjHorheozWc",
  "key12": "5HySz6ot4rfpacKBHFSj3tk6XRGjZkDp1GEsv9KzzkYJK9XVBF12QTGZNRJgHNz713zGQz1v9mm9pPkh2QtoMaKh",
  "key13": "32espewBSqFVHRiiVUnhWwE3h51wZ6P2n1N6WzgMqYFeW6w1DtsJiPnetVYhmvjhu3Kwm33kinq5fVbkUnBh9itc",
  "key14": "3VwJmFUtAZvSRPxDAzabff4Ys6UpxQgymaVwWbQnLpyiqXVd4pofdDGEZJ26b246MQ28RCbntBudA6cgP2csYa7U",
  "key15": "5aZDJ7Erg5HqTF1R6zcH3TvE2Y45ofrR36yxRQnqV3u885p7314ep2gUq6JV1EZxD5sDDbL97PTK4DjxY37wDGiP",
  "key16": "5nkWfmzSVHZsFBBmkWYh4Y318J3947pK4Czigk5c3YSfNmAxGrAVHwuoNZTDwDFQZkvMvwqDxkBWzwJWhZHYUyr8",
  "key17": "4DTx3ALvCrKeBfLZVKKX953EWxEUy2L5PU1WHfh6KjGiajZ6hgGuyfq22dYZkhmjFyL4mxKxzuFzwRrcUMg5FNbb",
  "key18": "24VjtLanfWDBFJXeKTFTcAbtDfAJc75zJP3986VRvasmnB2vvMmEYWZLdzNikj9L7irupGFiZ4h3f9HfiinhPH7e",
  "key19": "5tANzKU83SrR22pF3JMYkD8as86Ux2pDm81XV7RwNKL5XY18uMWNvjkupz4WxXzsSnhtw6UAjBGWtH9EtMFFxfnw",
  "key20": "93SoK1ZYYkJrKouCdYNYhbLaT6XVVch3Wg2rjMrRjG2fTvUwpPgYQvngMxSVLXFKycVYndd2NSVqxTsiTdDSACV",
  "key21": "62WT582NK8yp2adykvuv42hckvQyGohbbx4jxr6K2wVcR1EZPPFGXc59TLFrvowtjT2bpqpjT8iPLjvSpTfiCi45",
  "key22": "33puxeeuN1eV8B7tNwa8XL5x3drPYwbcNaf3EZWqeyKtbbypUTsDVhLtR1HrWT3frymoLoYYkcvE7KzamuP5i7GC",
  "key23": "3VLnGZUjw1eKzLfKF6UfWdtHz5mAmMEWRFsrH4EGJAR3dxUUdBM1B8P7WUFP8YocqEaxZoN9bExvAqrXm9XZdnPK",
  "key24": "JZAwxfJH422CaCUfjYFZR1Ebg5xrLWQavQPVM8T4rAfumHcccBJZCCfAn8xTHgv9EAqEYiPe2aFN7EESwGTs8Mw",
  "key25": "2qkCJP8yC4MGbkspzT9zSiwFE8yaFFE7rbUedUq7zDW1kus64NB9t2CtpK5eHMeTmESqndmV8vVgFmxejWcCdCYt",
  "key26": "2sKcLAbuoN2mKAT6whEneRsz47vtSvzgbWbxvJ8rTzRosnGwTykN6EF6vpZZ9hSezLdLVNRLvtsLM7RU8Ms5zd8d",
  "key27": "3LhcurQC9Ginw24CtxukyqgGoq5EJixvdbAvSsQ9uVmGEKS1ghJ9ztWGPwLVAN7LC34jFymeUr4unbKv5oHB52qH",
  "key28": "42bVAQVBnnDPK2PdNunxJ8qcZo3KkBcP3iCDXNToXQUJ1pYziKJGGCnNQ29Di8BZqm6ZxEgnB9mQBCuvLbFUDnp5",
  "key29": "4ruGbkz5Ep9AVt4gHuDjysX3NB2umSfwq8eoBKzfsqxjH2zH5iUdTFmmJJdTAYwhfAAvcjUumXd8ABx2NqFHXY58",
  "key30": "5ywXtEnGjsoFamQjANDTRJ4oXcNfQNrSxfSYdTufGcPuqpnnvhSgevkpA2ZcmvFsDgCs9i3Vti9ppxzyVFcnTTTw",
  "key31": "2a9uEFj4zGtUC5NFRRCswVowCXYzayhMTnSGYkLTFNiivbpFTBrF9FGeFXM8ngWxkxmikbSURCeSwVNoVTxPtCM8",
  "key32": "5Q9qaKEH9CRfTEaNkaGp7fAwwSh4wBEfmrwgNtMUYkPcWn8hsyQ872XhrwaPoXpCKZ4GExsqciy6EZrrdW92JjEu",
  "key33": "1uAqwMBaXpGwQrfcpN3CUJZJWCSGqg7FJdB1cTMCZ4WguWmrMbHEQ7wPwetWALWFWck4V1We19823o83UdA6irF",
  "key34": "3FrFmYe2QXLWExwVWFdA979G1UsrcH2kFbC3bgXfs2SkSbTLV4ArcyNbL18gpNwoD2ij3uJR9fUmdwTDp4xiDEU1",
  "key35": "TvJ6UH3ATAPVvrxywPY2ucJ7ZubxQDJ4DwU1fDBW5bDNctLJCR2f2YnwVzrmThUeA5WmN4wnpRUShu9ZafAxT9J",
  "key36": "37xYtT92u92N41FLsPYwNvzyE5L1jmP5J71vTaRBtqcMZE1asuovbWqDUDjR7fyoGGThz5YxYRH5zpG5ikYjjeew",
  "key37": "2mN2VCWfQ8R6g5XcdNVRt4CRZvYgYLKdHhkuyxR4oyfQfw8kasUFZxxeHLQuALC91XmLJh9F6bJDd5vaqBA2v7K6"
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
