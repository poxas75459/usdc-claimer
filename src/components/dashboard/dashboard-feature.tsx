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
    "3f9jppQaFNCNPqE7MHhVtcnF2K6bMwgrekbvNqSBL77VQfA8g2qiRR8cQw8f8mxFrFUuE6dyUhHWz25ZsfFw9evA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TvDPbHZMasv2fJwc8wW698d9vn87rHcknARHyWy1c1CxWfeGdkMvFLT4FvonJkpUSmg1MBrRRux5t379BDCcCW",
  "key1": "91ABdELksPrPXCx1eMnhDzPzbpAS2eDVKBzowuVA8PC3pNQN2XnXeV2A9T1CDaTCsr2wJBaVErdZ5cMcVdxgU4M",
  "key2": "5rwTjGxLih94zYKW7GosuoGVnAwBRUdkuw1tAzyavh3gjWjHmnX5d5R6NFV2rcdWFPAT2p2LTPCR5zzWuqPhobr2",
  "key3": "4dfUjbEhf5ZL8w6qqMeDUkUufft5Bcu5DPB6XtjxgR1cRkC34GB54iYWpQWzTLeTdr4bN1Qty7imDfTMs4H3eK2y",
  "key4": "2KBBiHAKC36Jh1qwaEW8u2C8BubGdPEUqHQDcsajfrxrazzfHsZYiECqBPbGiKKHA5tUnewEEoihaM16aS3xiQbV",
  "key5": "248yj5AUNrcoWG3MB9MzX86hkewY76ohZY4RCn8CQzPsZGif8KudugAcKhAcgdz8RY65oqYGGCNUzvdPqW2ZHbHa",
  "key6": "BevMY2XDYjWx7Rta3Fzy61sVnxq1MDL4pcW9pUth5jDVsGLmLjMZ9CxtVjJdB3RxGbLtTrnERJm6GTDJaVhxurN",
  "key7": "5J6xaTkH9sam3G1HR4HAdYg4EqBMVELycPeA91yiBKGGrJzjHW2rn5ZGTU4pJpCQ58k3tzEdFf24hLKVZ8wmNxTk",
  "key8": "RrFxUx1JiF9f2aZKF3gcxVbXFfUYygqkoKqdmX8B9nWNoFccG1gqoMXTDQJGz6TDYVBygNnsRX97ErvFqqwygSm",
  "key9": "1bgRpqseHHChYKgiw5ivqvLJmgReJUQVjKiJV2WF95XmnKkcGmEnC7RuHQCFKRUoswc14cKVhd2pKV4i9dcGuH8",
  "key10": "256hedrKjaEDuZpSb8CnQJwpbV2Wzy1zYQTjDjZAjGLYDRiTRTWiFeqDm2haYTyrcgR3V98vTkHJf1aZUePnoxtu",
  "key11": "28Ta8CsQFmeHDRYWWxWcTwKQN2cLLcKf2c4Vu5YnYntVcXTdWtsHTPd1GDGoCELPoByye8HNgFbb4KNmoMQjYPLX",
  "key12": "4Sd4TF2K5BPxLPSrfhNnhozL8MF3MMA6UmjJXUiwcgdxGXu8cwJ9rn2Nyz6fvhyjjiCjpNxjpbPwDDke1A14Dn8p",
  "key13": "5vVio6dRC5dkPw2WPJpXVpBLdusNztZscuesX6NzQmVd1ShCGLnBcqmDxBsTU1MVTK7WBVEXKU78HxyYjcG8nVXR",
  "key14": "53TftksFRftWFyzxY1Mtss8cozvRJJydpsnn7qDP7RgJiUo9W1odWcjhxeBSBJ5A3Ft5oxexkqapoZ8Y85wMUVHP",
  "key15": "3yBENT39kid3NR7zqNHRwFE2JumA9tUp83pSMj9PnEXzZZPvDb6t6BreEMxuv232CEFXHq45EGngjbvtq8FGHyV2",
  "key16": "3Syg7zz174EQnHSNzNkfmuGRtgpEcZeyZ5x4q4vUrnF7bjzQAREKC3A1dgzLYvdDhqfyv441kmGYSCPKKUJZN923",
  "key17": "65oukDRypxsbZaLTbR5tGkiA7tB6FHdSa2MDoqEmgq5YjGz75jNujEMdW3ebDkbG6mH5Xg4ASxxiEQVfpfhTKUdp",
  "key18": "3StxhtMvSyzauo3prnnoQ7JRXTmhHgFcUoD9wRBekCPre1BTBAsBtgfZde8B5xd64f3fUwJek2di3CcFWzWHFPV2",
  "key19": "2AMU52qZFeUz8SbF4E8CfoohTDvc6AxKsDiwK81RwrDpFmytJNSZLd5zR9SVyoLaUfpiQFTodVFYFCS35UmZyVyw",
  "key20": "5TSXoL5jw3r8N7Lf17f1t4dqN9sdEmXY1BJV345XxF75qsTkYy6ooL9ZgQYvkRAtgSGw6kvtx6Vy5W9c2dpBUb9a",
  "key21": "5vdPF5Sw88hYxRSFKEvfcJnEUWjTqcvCBbGrAWhJsm8z8zKLMiA9HQRXJNqGfeNqQ23YydTRb5MJE7SF2sQVTgLw",
  "key22": "3YoPLUZJ3zigoxGZhSS1npyYwa1x3cfeY7vk1LjAe11L34Ha9VeWzAYi1gvR4VE29ioHGFx6XB2vBQMLouKsThww",
  "key23": "3Mwmh2pGSVf66Veno4YDKyxhnQKZnzWwrruDkxhrL6zkoGLxXdoRSmXRhYRWFtmX4N1hxCQcrMZZ1YG45oWQhYzw",
  "key24": "5vfL59rjB8B5jWUDkksFxbgcEHt52GNDXnz3m1FdTdBYKJucquYaoLUxUJ72Tff7TgyAcxxNeKn1RXNAHQNZMXZA",
  "key25": "dJ7HpYvWfCQah6ySRwbWWujmDHX6p8675vf9eQmQjU6MNqKVE7BWf9bzzamUZqycNijBZqr5FBYo5ptPnjf7qTN",
  "key26": "42RL1yvatugY1giFH89QcBEYW2KGXweKqj3GU8jqmPvcJT3QmsR9c1YZcVkDogJQEj3g3kkVs7nV5zhvJnKWB6ai",
  "key27": "4PuQq354TWY4gr7ukwrNXkfJVknuvJ7yrRbLG8ARupuHHCs3Msb6HoMw94VirggW3cgBkmTno93YdYnCvbF491w3",
  "key28": "Lga7qdfaUmBrfrrHKHgQSWtwSvzEEz7XjzTzZ1NgBiE9Rr61E2H9aEyoaPWUryvChSxKm7m7XK99pwbjEm8c1cY",
  "key29": "5CzpQeNg9DeSsDqgZ23wkJ5VtLLKwHNdJPmrVTAioYA3jjvuJ8pGUnpbx28gEn1r74a1nfkom8kgV61s3AvxA8JW",
  "key30": "oqFfPYuex2WvEkAU1e6KdpH6epN4VwM4rWrM1EDUQA1mrsxYQyuGufX9TGDiZAMadKoN5ggjCFDctc2q33wBj1J",
  "key31": "2QbRmRhkHat7b8E6rQc578onKReMfo8XUY3x5TweifR2qdZAcbRJwP5sW8R69T3sVNwjMgeA8jVXJGroEKPmjVFy",
  "key32": "4ndMXs4itq8HDRHtSFVXTKTbSbnrUPhLREZgsCxxXQKtzCVmua5awu1vQHdx6dJZ6tBC43Lq4EtFxpe45L81gqnS",
  "key33": "3n97kRZZ1oUqGFanTVgHYF1cmPNFQif2HPm9adXkQcr4AZi3fs87Y2A2pgYWiCQA48DE2aoogrviFET8RxJLdJJ6",
  "key34": "2x6Df5bNnqpm3gjzeUw1LvkeD3imZFmaUJ9ZiUPkM9suX8WAMuZ9miNZxr9m5hB8wrFXsF8DUihELhAsgLzEV4u2",
  "key35": "fZknFJj1fsoboWMpAKoMWoqjUHkTnhSN5TmmxrZRhijDM246SNqUgynCUSNK7wWR2TUEAMKEsaLHCANoDUhEj34",
  "key36": "GQPRH4URABy9a4n5fC1aY7r9CimGJQjyeKaAzA7vGL2apzANaigvBdsV9H7fp5NKicyCjSxLHrvddQvMTxfNvqb",
  "key37": "2EPXbEUKUK5fa86zBbGkoYom5LmANkk3hnPWotDgpDKQcTp6zkDaZbx3nAvFH6Foq5W2VsC8Poh8J3CCijNATzgJ",
  "key38": "3zJqPJtgYvwNvXwVxbrgzRe6XPpVSSgtMrg13dDEj72ANScX38QeFxDDbJiRgThZRPsi4HGoAcibffJHYJ1aVGyQ",
  "key39": "4LZqnpZnmmQqXzRSTDhFqruxkE3DtcKKEgMBNMDyuqAU8WUSmgqChvvcYUT73L2GUzSor1L9wfjCWnSMEeNJvoh5",
  "key40": "2cM2jQ7xTcbRtG29kc6tiwn13xbZzvxCYqNcQZdigpoqqKhb7vA48QFaSDXyRCVJ5BwDwWyj8sCw6ZkRFgV5R6QV",
  "key41": "3meBuEE9vhxmEAMhFR6eaJCKRPitSVYX2AAjRmGTNukauC37bcNN8Ebsp1M4wehdXbK1EDqPQ6So3ATojaJkR4So",
  "key42": "2Ht8gDqFS7U8Hvfo1TGjsMSkHhjfLrjF8keRZK9QKu8hkEPcm1QQ1jB9ktoC7oX3hVwo6C45ug3bAN3xcjd1Vuqc",
  "key43": "43hWVQCXPfTGu9towc6PQkRFFtMPBiqbBGhHNZwbjSjEmK69Gzq8e9edHgyKhigUjteKUEd46T2FjjtWLsjPbTog"
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
