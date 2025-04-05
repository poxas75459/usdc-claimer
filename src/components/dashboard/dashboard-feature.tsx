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
    "4etL3iMYq4AJGqThHzWQjuwVnTCpFm28ALVJPCZpzNyHe3JpEyKFZTKyundAMJhh5wCCSieg2rzB1u2DQ29XPR4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CDNKWx6tgi4vFWiAkR64MES4on7H9FGd7G5XxuqFRxG51XyKjRaD5HV1uNg2nudCajcM9pVbUcGCrM1jeoEkFZk",
  "key1": "2buC1dmg7UmuNvZ55ZYmwW5ef2kjdh3fVyfbqMn1amjpz2oLzLGw1ezarFXGXyUtUNBdyCTiWfSxSnt5rUaCXNux",
  "key2": "38gc1ij7xvewyjZLsr6b2eHE85UekdPA8xQrvd8YVAbso9GmratcB3oSvTFdZFwPZgJuaTnrjK4pDrMkmcbPKRuJ",
  "key3": "2oJtxp9B4TakrMYpQP2HPTtoDgjGYTxxwLrGpBpjd1Rb4MCLYQdXTTuKCvscj5fA6gbxcQYKNDKKcnZioSDS4RfJ",
  "key4": "3JQJSUiH7CyuJK1DpjTmr66UNNp1hhkngbYgeER6FfTHeooCi1SDpHWikxw19B8qDgWsNrAKFaaDnLoABvK8mJrn",
  "key5": "rxtMxTMkw9g55VDjveSMNRJGSwix3pZ9pDoeP2S3s8pZEgHKy3GgR7Gunbgk2kgckoJz6dkbfwVup7djeMbqVVz",
  "key6": "28asEadG5qRvCmcqZqohtHukxm2q3GxYcAjdXXf3KuAvtZrDyeGc1v3DQMZmufenKka4Z7C7tpYf9TKgnGUBzp2J",
  "key7": "367ogb4guTqj5VHuhCyjrewURPb45tbhHCqQuhnubKQxahwnw4VsLPb2rtX4xdNJrWgp9fVwpib1wstQS1qu2SKj",
  "key8": "zZZxdvzcnGZ1gpkMr8VUADMCbMWeSGaHwheGs4FXscxgPiNBjMQVeQoSMEEqL6hXjzkYEpc4xU42B3DELDFqa9C",
  "key9": "5K4X6FXNtTjWfBQjvfCGXM2B2c76ufUH795taydCrrUfKcjsGJUqFBEPu1gmSMrQASWoXVGB9m8xvipxB4D6M8ex",
  "key10": "ZixbNJ3EhYdYb1rxgM3EzG5cLzPz4rahCHH658pLeRogNRhaVdem4MJnLsQkwgdj5HpuQbPNLxHph8Qynm2cerJ",
  "key11": "4qRAds5nwKGP8mNpnWFoCPJcEDbuMTbGrt53wPMeax4DmoVro6dKWAytvkWWyk23SVPGhZF52yNKQNWHnPxvdDFn",
  "key12": "4ZXqydTKidsptgztbx9y5fy36YkzbMHzS757FMrKBnvg2CifnrxtBLvoaQHFAPZH8Upnz9YD1dT9ZcyEtZ3p1BEL",
  "key13": "62n6pbYwkcW75UjNdVZVUiwJ3wdo48RbMHdEEj1Q8QRLQZi8jCJ13wAZRpYGNJ32ey4JfFoWpzyAvscVThuKFcYe",
  "key14": "8XBqhRYaLYVqewBhEAo3TCYsvjYJcgaNtvXwr7dx2UyfAgXspRJNgRTvEaqtSiHQzir99nYYa9cVYSjdsXh4Rar",
  "key15": "3VuQLaynfR5fB5WYD8hVc8FGBQXp6yDvDLoGRg7YGQTRvdCvLADvA6yzE92RYfRE6hJ1ndc5wMtkPNDLWFRwHzyp",
  "key16": "4rLzTporAhLJxhdvAS3R1466UewZ4e1GpKZb8Hdxtmb2Mfapdz4D3H5DYayJuYbfbEMqzsewj5PRbdQX6vN8dsvD",
  "key17": "3kFUsoyNer9xoW8W4GoTkHGSR1oAqbHnqtySpGPkQGd3gmodncD4pyPfYoUCGQsffvDa5sWjfc4PLF2EircPrm3N",
  "key18": "gv4M6aXnETKQe9st3MrQksEVVSRyCe1syQmumxaMYqfcy5FDFmYs2FpJYW9dsBW9dPY6SUwuuB2x8JBbYxQWeHb",
  "key19": "b1KgUGKdDK9r37KSCXAc4xJ1AWmhhqHL97Qvr19FDQX4WHTvseFHpTva37e7MFYq3CL3piz8ktrzsRXn2hLewnD",
  "key20": "3mm7KZkHmXX94iWQYTkMmqKDjh31Xir9wXu1VAbr5uWtyXyWpB7A1UN5ma5aycJTC8yZHKCcmd3wnvasC69DDa1G",
  "key21": "5zuUe6M4kxYo6drASd4tnCjn3PjGZjUjpGyFiY6h1M4cgdQwAAaXvpd85SxRKvBjrLJXkKxcJUmZo31wehqqy1o5",
  "key22": "576pHhUjUrmiag2uMNZrb5BCXUbEs5nE9khShQ5oRx3ZaoPUffkr8B3D28rPphm7cnt4r28GjbrNbndPeW1M2WDL",
  "key23": "67Ei2gLcQQhnyfbcUEkavZ7zrHmdRgoTBi215EJGQgxcFASBFDUzQvZzSgMWPsrWP9j3VohXpYFoGymujDvy8MJd",
  "key24": "dqVY2kyaFEeP22PG18wemvU2y5PxwE5gcawgbAQxdXoRb7Vv3iJBvonmRUHyYUWTS24VfwYrBZk2Bxvnp1CzmU9",
  "key25": "KbgJgtofMCbRDthfkkwrAPzQk5dno6TBJLiRz4KBSMx84638ovnn7mNAfSWMpV5dyAtn7rHHh4Ws5rSoxrzyE5A",
  "key26": "2XsNG3CTHFyi21osGQzxSDQ7HK5Lj3PTN4xpAAkxmqogCw3c3LTW5Bxym5eawQ1YEhy8Z4PjrPrSHTX49ShDXhzL",
  "key27": "5Exi11MVi82MZ2wYHvqbvAFNPWYmdVoGaJwATgf5u5aXDXHecHhRD6YB8wacp7tyodwzXq7ijdBisjKdNGfwgiY7",
  "key28": "5a6PJfYUiPobaS4TSLtTQAVwiv3iB4ZQDpDG2atS5U5QZsdWz4nwTPUDZFGxeuGh3oT5guCH9c54sowPJexDh3Wt",
  "key29": "5h4yeZumpKcm7ZYwNCWdhP3J3R4Tmyw1iH6bNUgCRjqR4Ce4iWRFjmkg6Q6Cw9GtNfBZFuNYpYBkRcwSnLW8VYeH",
  "key30": "5sjEqGwiojZ3qude5Hmknh3g38HKXmEVKcQeUYS9K9gL5UuhWzxU8FdNTfDVfjrkpvaG5Hvtk6TWHWkgyrNXHAgb",
  "key31": "2nugNPbwMKtoFGmbQvgb3pgGQ5amJe1r6Z7gXWB3kpQTDyRvp7LkCfBzZqni8dDTX7AuNY6W39UbY2hMpdXr5Dn8",
  "key32": "2XGDUVYqU52Nq6GUhj1dwdNwsLa3ukh62cmgZShUVP1Tkbp6rhvxruTHkNULYtmL6pScUVcsXfyLq6TgjG94j43w",
  "key33": "5iJSVKstC6LnEKcFyC2S5nBNsWrQoyibj2LpanqSnNM4jngyr6yPyi6YePUsU3neN2vmFJmpahoA5cuousnQ7a18",
  "key34": "2ZvVzNUtSSKk1ERKVPGp9Xq17GAjwTiJ4TzZzYoyQFL1xnr6oUmftYrNQaVxuqkvrGV3TEvGVjo1iUTbKG3S5PbE",
  "key35": "2A2TrxYyPRLvv7i9dvc1MeGmZCVGqr9S6tSTmmGZNzSH8rgUqkQKK64Azc3ojhSGtaem4rQ7jk2hBGPape3ETw53",
  "key36": "3EmD6hDEpAkzU5LvYvG2MBgEoXpijzYzk6Md7kskNHMpfyce8A5hXviRBKfExxxykdPmstvkd8cEcm1AjWpL6VAg",
  "key37": "4vc5DrBbgmJ3VmMp19QyTLuepPkcUVC4XxX571BewZyvj3DLFnytshAx2tNfRm4r4eX5S9U2XGxpu5tm1dKmGF5B",
  "key38": "2jbnqooGCzf4pAoBfeJy6XYXDT9kxRAqwV3xRcx7kwTQgWPqBAdhYLDRCu8b21RV79vPRb8KnmXtWm8ptrPB4JGW",
  "key39": "3nN3VvKyKiykzQTa21DhAES5EypKwuwZy3azVCh4pwfk1r9PdMyYvVEFznoL7VE9WujX2NV9nqHJAcu17r8R6Y4Y",
  "key40": "4bDs7RGHXZSpAb5dsE4ktkTVtpYA8MSFXgH3gSk1V9v1X46N5MYWVSBvcWqkyWNP2H57Uxn6h5CeU9chLwKmxJki",
  "key41": "5d8wbqhR4mMJdbUbHjjNCQmsyuBvSMKoLVe1TuZqe2v2KLBtmaiRNm63D4FaAxdus8bRnmY7usE9cxRDpo7SHBRP",
  "key42": "2RUKxuMBHQ5jGztxCxenHLLZHgtgYiK5LTijBMfai9WAfR2FagpCe6xmDwr2eE5QZnL3GHVBrABGLpJ5na86YkYf",
  "key43": "rvvp3rwHzb9KDX3MyeJJNXiz8W6W3XMoWrzrvtKW6BKzahSK7bj7vdL4GqktsMgAgnFGhGkmzevKiDngujMJthr",
  "key44": "5sV4UQ2BBw9wZBm6WtegvejZC6RLkKSru2XQ263hGrEGNLkycpRMdEBfDbejadPDzFWQAenWQwE5fRiEoifvtKWs"
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
