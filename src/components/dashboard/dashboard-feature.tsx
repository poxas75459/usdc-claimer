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
    "5sorba81oGwNBAcBkDWnudMtkjKaYMT1sbckfkYdSbsfGZvvEMmfEWC9PTga5cYdii91Qu14DtPDXxhVjCMdr5Cq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PEknLNohwHd36qs3v66e7bNWWL3ZP6T4ariJd38Xknkq8B1X7Q3MNmx9hUycgLz8ESrTCcvcqyJWyhAyKhd858V",
  "key1": "3sAZsn7JE1w7UswS3UmAi6cXzRfX1rkjYJXq67YFkq1nrf2UNmvzATkW3BowzSoGsmvfDALbmV9aikRjrdbmtzfB",
  "key2": "3DcBNWYA45DgkkchFbfpDxPiaigy5WLsAHSHJfiU464RRAP8qMAz41eippkz4pgEDBTwCMurMZzfzWuNKGsJ9CxV",
  "key3": "4pfESYuN7VgKNJbM6ym61WTtRZV8kELsZ1YA1eTkA45ru4QtVAbEYwg3abZu5ZEv7H6beCPNW7vMSQxJ3u6nmCZH",
  "key4": "53aypT5xUVX8BGrVtWBpcz8AV4NSKHuYPqF1KW25gZ8TkMjueXBPg3VhH85X1mJpNNmMp3GBnBqVohLi7wDm2Ksp",
  "key5": "5BuyXnbi9VebxEncBxudNS3bkQpmsDYH2Enogo3ReGWTDvdtp3cNfoybWWfHXT1UmHda1aCQEFuLpGenpjwyWhZb",
  "key6": "2Y4j1mGmbXrgjx7LKyieaWidkq6cjDmjjGt3yfwqyKrmcT9w8QiHNxU2GVKjeyQqPDZZn9jB6ct3CAUsqxt2R1RE",
  "key7": "pAT3Au8pVeSf5CqCPHvg1WR85mSJkeZ696ozsQWvcCZcd9FAsR6Ea9zFCFXwZ2J9ir3NU8gCm1cFPux8E4XAzQ9",
  "key8": "5fAmnE3MKiTmk1poKynYHCCx4Dx1GXyDtvxVgMTGK4LZokGHxwuE5JBCwaJyvbqU4KUmzBxDMTCKriDkHFY8J4aT",
  "key9": "2W1ss77LJNuCHkL2qidB1Yz6E1tJU4rQYSD1ofMZEfW4X87XwSojzJJH4fobxf9jN6AWJr3vJqjP6MMRf5DsiHD1",
  "key10": "brTdRAZBQzFzYU3398HojqGRYkB6cbcqFtXc7uBmGJdWTXNu746CXtAxfcgf3kPtzkWJogqbDcFp8w9zTmtAt9C",
  "key11": "3KmXqyFwkPFZ5WN68TsZcKoygcUaZP74gAvrSxK4bWiYhazrPukT4NSeBRswUzxgfWHt6joUtdiq8HJ2qY7mUQhj",
  "key12": "21zTg4orcEt1qDkYEatoaSaTaE7YpSrG4NzCSc1acKfyvFRVZLnnopmyjxRUbxMXjQxkx2UnVnkoAUWtitpX2k1P",
  "key13": "RWuXwgVSw7KDUExG1xzRiRVppcAa7k4d5yHKJELyeBB2kzdP4qZyetEC28HHTKkHx5i35q6mQ5cRJkvnx2T46se",
  "key14": "27SS2tsPtF6WKpj5c1weTwsnxnEena9qtksPWJih2osArW7ewe2g4gFcp68N6CEUcsp2n8yVyNsbQVKp25u78Luk",
  "key15": "5gEDoCd6jm6mYmMT27sjYL1ST5RJCxyk8uGPqBZeZGxwSMfpBKHLs8WFxKkRX4JgxjkLJ9CtaTDu6E2QyV91gNyG",
  "key16": "3uy8GXEoWvwzmVeBaxSnSUiQsUKvKLkKz1BhmoH1geeCTvHgwcj5bjfURSGV59jMif1tGskzcRCC98sMKiVKbWWH",
  "key17": "49vHy5GW9EJiJKjSHL8tvCVBA4XU8FwxbrzZMz76epDzGpWz4jFLgY2vjVvXrGzwETwEeviMyQk35AC2LE5GwFZm",
  "key18": "3jC8w46ypkUzNaHZsjpYxkhtWNdMrTkYKQZAmUdF1PS6v52FP3BtzFS4ZS5KJPVVG9eCFzyC1NCUXQPHkkkzi19b",
  "key19": "3k9TBT9i2TgF1kvFPDvUSabKgrTkbXwhPcDeJ3WLjjoVEeKscT6VgffqbnrtANPkx9dVf6w4F36Xsz2Hcdg76RMY",
  "key20": "3Ns7uzHtYThpu8hx8jJaF9aEsoeTS2ZXo4J6WBw3o6AvTug5Ve57KNQMRVsD4cfpEAmWE4B5gywwTKfKFkzCF7DK",
  "key21": "2nFoU6cZahz1E4oVmwSF7vSJ2Ghyejbxh5YqR7KmULu4LF6WVohdgJtECct5cnXsQ1P7ypFuwLkDHbGvJzHt79y3",
  "key22": "2EVW1brpS5VidTt7TL78rHXAK1n5E4e32awSt5kV6qPECDrxRoxz95hVJLe49xZaTZUW8p9DBxo1orvCF12ytrjR",
  "key23": "5d8BGYPKdREeAMQyrUwJu71FQrdZoBiXtApDrSpKounBBKM3drAcqmneAEmPYdNd2vut3KRtJnRDi6jqMJujjpQG",
  "key24": "48SCm6VVPg9Td2SpPcVmZLRRVe4KEBqjZpB6imagRf9Q2BS7133AdkZBidWzYrB2FvRuWgC6ihQ8oNm4b3KiWS8E",
  "key25": "35aAyZ51SyYnrABVsmGSBEcLE7aQJtwtYGyiYcFoT22QRAF5Jj3uMUPq4yBZpC3tcAJYBYyjcR2RgQCApr6FXM7A",
  "key26": "2bVNmZggyoBHTUQBaDhWGb6X33QceW4H7X9iypoYhkPVYHRsEpKQBeScEprrBskrhmUMC9GAXddL7RYzg3KJ9Y15",
  "key27": "5UFGxeVvpX71gZJD2KxogRwcixxS5ZVX7J56QhZLNcswzHqSGJ2LsPtAkRJTmLy69hdsTkT993TybwD89HFnSLPa",
  "key28": "aZG5CKz7BNoEyVBGhYvJVebkfATHYuvGD3RrigKHwLqiL97o8nBHAPkf939VJ3LcsdLSMXVQrSkfJSbnUqSYL7u",
  "key29": "5kkajUCK3fXDt94ptKX596nhCRnUxpb8Na72BahCmuPShrieNwZFxBH8facFYqqicbmcc2F9MYyHyCinzivVTGdQ",
  "key30": "3U6VaoT5wBkEaVA1z5kYdCsBGCFvFKfbHRmULgBdV2nGRUR1QXzDTyqwshnZvsZV8hUhbGYt9FeUz6yqZsS61rAT",
  "key31": "3g9LbZ9o6rcn9EhKWRctzJh1uy65WFurrmmot3FtcbkE39anr3ekkrzPs4cDh4s34nPu4nskhnyeD7reiWncpC8W",
  "key32": "2vneu6uw6Ti8GYYc5N9pBEVbdxASzcrJe9u9s2hNKdquafRcctugkQuupo2UfhYqiSLapfNjPX9t9FHwWRPujzFa",
  "key33": "67Z3HUsNsHhiBDgc83fmWXAuCDUaSAE9jYFchhbBiZjAXG9uzL1JzJbMso3pWkmnJwVAA4jhG4GShChALnrUPknG",
  "key34": "2AVxwHsfcc9FV4UMZqVDEnie5PfGq6cuofEZoLSQ9ztCGSZPaJSJfGgUKVWmJcWYXeoMEBiHd3cCA49VxVXW5BKH",
  "key35": "4qFStV8YWRTq8bSVfbAhHKcRZhBhQ9maaUZfxbhx9UsYMPzdmpGAVtuEze1wowvgtT3MBkhUEdRBe3AWBAWUBzGH",
  "key36": "z2KKdCsmeFTsbByJ46rfgfmWxrP2CN7ppoAQYCDD1s6cNH6TPXFD2vme6RNP25eavbr8WcStELJBZuWqzGBGXhn",
  "key37": "2bE9L4cwi3ojWJ33KjRMb1ofR2Xz5Mq8piHURAwWvC15cwPQjsV3AxqqbUnSfcnshGBypk7QN58uzsRJd26eh1pX",
  "key38": "5neW3guDMv1wq1dq4y37hoH5ShsciWHFv7nqbEyhRvdNrogvUT1v4fGKRwDEWeGBcGNLUoLJ9H4EY4Sx9U51SLzZ",
  "key39": "2onT5KCtneE5ePdujdQ1j72k523KNuQJEmBimLUGduaXTi1bgqXvdBy2k8XFHGCD4AmKt6DQPXjX65TYLhzFeA8r",
  "key40": "3U9RVEW426TNXCy2pjDyWE8EAo8L8L2igsus5Liysdbb6kinB9iQEtMGGZ89fDveaYj655AMn5QxhQexyj2EHqaG",
  "key41": "4y36BTJVKbos37LFkjBeRgbw8QUkTLp2gyjk3LuHcSoWMGPVizEyRaWCEEaDMorJ2wf1PLqZu41BH1JwCzLCq1rx"
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
