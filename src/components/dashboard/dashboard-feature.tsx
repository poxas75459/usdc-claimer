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
    "3nLBfTDi4aAtnx8ySpdVYv9E2G7pKDxR1z5LE7VnE4nBsNX2ozBwLiDMcf8UZQ5iVdwGGNCCB2sFh8y932WfxNVj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JLbPdKf6mFXmsSU4t2QQbfGGuvjHcpx8LuVVwKM3FJkbEpteHPw6JAp9JRCVjHP1JepF5d8ajsZ7vhXtxTkUkwB",
  "key1": "4T2neTTb53NhkswCgayjhXJT2uhLqve8WBBL6KFmk42br7aCmqeoHo9U75W75UEEh7D53DyasR8fnEXadeLt1nxr",
  "key2": "2Zu7zC8jc96fHPkaFZqQwC9BRhouz4BxvzZpSikqqQED67XaUtHnCuTVLpEtKcJmH1g1CmYkyt4RxynMdsxoqgww",
  "key3": "4fKALJEkzJGafEJdW3gPdf9JvcJZP1cUTvoiBXGLjDs6SuJpYeLnQ8yPVpoxXx7BW3F3AXXPDKEBPXjjvLp6T35Y",
  "key4": "29UrU48FK6tkjaVxX1GGA4KhfQwhaDrWK888xkkZMDB9QyTgQ1VfAY5bLQnrZymJgUS3mF23cAuvRQS493y1zqWJ",
  "key5": "5A7QPkZCmfDhHkt7n1DiEkETNHpKy6iUGMLvuYTyoNC42sfjCT2te59eA42EtDC9vbmQj9CsDNiCm9ayVWk816th",
  "key6": "3iwBnGbDWMDuNinMEph45qyLZWjTANAyiZBygtkXeuGbSTMPDmREab3TCxZyzsag1iWgh3VA1XJ2e2aEhNak7VXr",
  "key7": "4kn9XbE5k2CtXUpnF4QvL1SmK7uxWEG6ssriTJt8mEdMHdbnScps38xSorppTPfNrT4DEwcAas72tYUsgpF2mjp6",
  "key8": "nXdgMTPHTefwAH1pJ7ikUJKMXtm7c8MtpPX6PDGSqpQq6fnEo7evZGh5t2QzPCjGRf6eGqiMqTz4yhxYfHDASyL",
  "key9": "3XK2WcZVbkKHeVCVRuyg2cas3kdQfsH33Y3xJPDGN3pd12ZFKjcCQR1PMbKPzawrcfMjr3DreSis6Xqe4AkRsuAy",
  "key10": "2Hn29rbkd8aWeDKbM9P39m443EZQ75m5PSRDnHauTWVqj5LWt1ujaxtZaf1t1J4D8pNz3wm2KoTgAFJTBMfR2aci",
  "key11": "5wXFmJ9NGhEmVd4FqpAcDqP8fkQy5ZgwvmzrMtYYwHG3bxKkePhEnZbByr8QA5PnZqbjJ4bEgse9xecwV1iqMuM8",
  "key12": "4s2EAe83wQ5js8CaGTr1wmyjSwDpZAjCZmtkSzUM22exLizJjzAsGgVT6RC8LcMvMYcowDFQb34utcnDYC6chyia",
  "key13": "37TBcnswexyGwXJTZEuCJ7WRW3b7k6ocoTwjeJJrFaWQgqDDpM6wvmd4QakJzbZW7i66z1qaSxpLWpFUZLv9256p",
  "key14": "4ueCy3KLPFMuGE9Y9wkY9sagyZG6ijV9xwUP9SC2NBBp8V1YXTyBS6e5fP2ueTyDbAUyJjcPssZsEHcrQ7D9QABs",
  "key15": "J4x7aLBvhZhL8W3Ru3akwicinBEt6mzj3NDzfvharXPYtzrqmzMVvNURnguHbPwra9K69c1GYHXaFtgyqVstUEk",
  "key16": "fdfcVRuYUpw9Hj48kzFwwhN2Gguj4HNaCLoUgt5dRLuWPe7ACr4x8sPoqgy1WEvaCBRga5TQgtJEgvznGdBnQ3z",
  "key17": "5GnAxeSW6oYgxErd5dFM7oLwwaPb31bqRoXQn3gqJu24f2QoAPd1jEWKpfGDE1XrzP9XnFvXSoCZyG9FfAGjs5L7",
  "key18": "3NJx3MyqtvBVxtib2RKELewVsLCZGmoSHYsaSaQz7mtC8z2NWXvDJwHcrLurBq7U2CgnsRP422huLrhNDUf55grv",
  "key19": "5wcTAYZu8gthjrTPYSyj9sGr7sFdgzj38VuSi7btQ4UJcxXD9SMJAr8s9pPvTR1bCYekKCNNEPYQ2z9tPoUX3o5t",
  "key20": "NfX4ypFwcrD1b6iC3NfXawuy48wAzNPe2fDJhuca6qdft8vRVE9qMzTmC6UirpxzcqMhAjt6bn9MgEY7xA2hbPq",
  "key21": "ZTo5MZETD7MNuHUMPfCUUtni7xbbRgSo5dPJqUAaJJDGk9TbrRvQbJj34WUfNcc29Qc53cK9LsDVrQ9LtoJr9KT",
  "key22": "dReABfKdjUWVF3pMCqG1E8fRUJ1PwuugJubTymCnj51skyW6vEnsBBQHk7Qtu45fwmecAkSze87GEfuBAA4rTiE",
  "key23": "WrfXUuzEjsJiC8sPf4iz4q1NGMda3epUAfxWr4sdm5JMrZG4sMVZpj5tcW6VVw2DVGwTWhzsh9SPzMDkAsmV3qs",
  "key24": "fGkpUdngQNFp8RYksYaTCyXykTTE9i8JpbXA2GNSVFGAYXDGK7Lr51eZmeFDRMqm9NACQsVNH4Pz2Sws2aBjheW",
  "key25": "56gA5hjLUkLbmWrHjypqs2FxBkek9M6NAEq4bbymjCctbhWnzpvDWirXn9Nfp26x9m45dnuqWby84GRvWs6F6ZvQ",
  "key26": "3fLvzzvEWkntH7kkr5F7Ud7ccD7nqEjxAE3nrzvKL8ebxAMFzXBL5P8S9HxVsSM8dTUseVXenVHmi84yq8qqR5ve",
  "key27": "HVMxAVQqaSLbBjpiKR966jZFSf7FqoirJmqkAh2a3Sh4fw1PzhmWR98wkdqjA6eReXqDJueFG6WMF7GJkLwCnQo",
  "key28": "4CyDRSoipUosx8oSDH6GSugzNB27jVE6htobUBhcyvo6ZCqJXW893BVpi3eLyQpKNjRhgjAkHjmsWxqZzD3Fa7BH",
  "key29": "3vLvnAQWNBd8QJTnTXusJCgs8rt9mbsDZW4dKkq1o3n7v2cE1yrwx8M9aEq1GFYaqp6bcvv1hv4Vshzgxc2ZG7Nv",
  "key30": "45qPnnE9gscUQCJDvw92gpHUuPdSTeumMJg6Y7LicMvYrPYKojuG9ZtUgyp48SWT9yfTEhf9D7PCAobAamBDwA4X",
  "key31": "5b9os2WNrZ3Bdcfid6jpzJvQwsJtyc2JqFZXpKbEkAGTq5ibyRkgEvS65iJ5KUyexZJ2sDUT7CDX94QdfkTJHQeg",
  "key32": "2afvGgaEYLjYtojjwpv6MsTjNXpEePBAcTkmHuBw6ThBCP83u3e5aphnn8j5xPYZG7tixWCNfnHRfB3YCwo3Nv2r",
  "key33": "21ci2A6YM8diqitnFy71tSh4DxHLhuriKnRZJCtVC7E9iARtR6W5LTEcfPL39F98ewKBNGjxan6YeK2fJEbQWVyb",
  "key34": "4tk2V6QxZ1yDxpyZTyTkUziJKvkSuHFFiPb2YT78tcyGR57PMpHkxNyZfzJuB3jHdyhNBQs4UTvpq3bafcY1tBEs"
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
