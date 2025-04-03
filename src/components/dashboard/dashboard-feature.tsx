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
    "3zEdZoCEKDXm5JzTm3WAPjaw3wH6SFiawgBdSgpCNxKsN2Chf3tLrKcSmpaugg1vrsdF4KYb3iooz42ve9H3zqfo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AkyLTsKZ3vdsExPEvm8vgASg8vWEUNkjvbGDeun1ZyXgFqe1d1yY6usn6CTKceQWtHVFXqeUqBiqDmpujbdZneV",
  "key1": "MmBtDg28A61zwnAACTbCFotTatNj5WBFt8xR7VSGiPb3JHLJzNMiDupCReZWSR55bKyYUwUFzvkpn5q9rQDgg8e",
  "key2": "4rfpNYtz2m2gbVRbY5umN3oanDEc23aMfJSxbYXLg4o9cV2CzCU1tgN2xzcb8B6yWESAZxLixxyvQfESLtK9KzF3",
  "key3": "4JuztfJug1hiEdhP1We9VSzwYRB6D3m3Eq61my5viDZDRrvCUVC33MwcmfgjQ8gRrhQ3qqRAjG1jwxehwSD22CZe",
  "key4": "4iEz6LYD4CRqkJE5BGvS6JQvef3cQyzUqsuW1GM7fUkxLeE5Nu1kRK9KbeT8ZAEHW1TuJ7qPWJiNJjoB3tQKprYe",
  "key5": "677iDapPSFViXx94hQ3C2ZTVzs4bvGKZj9xBCczy7Wzaetj3H4KsYgefJguyGbyHVz4jRHU7UCRkZkmoyZ9GHppy",
  "key6": "QeXUrPyvEtAtwRN3GJgRPrribMBLKgBF9VKHqp9ZXZ8YkAFKkr8ZfLvW3nSonsDX4ixrErNcyLPbTkwCsY9Swmt",
  "key7": "4PbdiG3n1HXwVpwXmhG7zBsDKpW6Gnctk86piCwb74pYKc9L2akXy6g8eqDbfHFFkhbCPtg9V5P6tvtDYj6HHDgS",
  "key8": "JM6PFLXfRDG493pvY8ydL1VNe8JTb17r2Q8Le1hk8VtFgxFRpsnTrzYMXEPmdz7LXPfretSK1AhjrQvuX5NP4X2",
  "key9": "2QzbNXCWpdDUXkKb5EfFrvYVPvKL2xo31ewZ8mjMaQKQyyspKLc5fAHq1KzLqMrWnXdpmbUVdDwuyChcdLQ8gD9M",
  "key10": "8Zgofoz4S1BSimLr1s7UpXbhGV9LVgAYHaoT4x4gviZZsEpKhkmnVWDSx9M69iqE37AiG6rRJwRiPHNEnMTic5z",
  "key11": "44ksT4F7VRJZDzq3ijAfLt6EtKYvgkbpZ8qR7CTtDhcWBGiKGQhX4tgF7ULXNvMpUvDJHJF4Rhp3xkuVBPdLLcNd",
  "key12": "5avzzZqceTBzHsCTQmMpe17n4hPKT4CZcoSnyRUhwdEcLYBMCNaSNAdibXRyUtNanWRFzQE5pSJHGznEKoXtmgj",
  "key13": "57aJCSXQeZLgCzWcjNSKr12ZaYLVGaxFbwakmF3d3styfjtCve9Qu1fA4NJkSu3PXHiWAzkdXf2R83Hf1bmN79Sf",
  "key14": "2ufxpzqDRxHyRL1UUDA46boRNEZ3VCWsptRaWAftXd9EonHW2F88gtnFHe2xK34K2krcMpm1gv1KSv4Hkp2dtDqt",
  "key15": "3Zy74RDrd2F6NoAhKxygYEYp1hmaEHptoVPV5igURqBSEudXisbYQg9fZ2g5f8oNjTUcUkmrk6zTZjPwUpcZ5LsS",
  "key16": "4wsXZ5DGmebCBLg2h7kwgJPerTq3XaLQ9ADYNn27qPaZxYcEJQYkPJggU6FwRrZL7bLbzpJAyy6rLiiAErSDr1yt",
  "key17": "2633iCLgNd1hw35Du8CCz1f2hNcmwPE2pfvq1zcj3NEgnMTEVSpaTS1KYdJAg2rzKA9xawKfb3wi9wrbYjS3bojE",
  "key18": "eBvkfi7KHJpo3Dop56puR6UV8xk5V5Lu7FcY9NeTB9ZsPRs39kYj3v7zTAvbYM217mvWtHbGZd5jxB6vEqdYDaU",
  "key19": "4qJUnvk1g3qf6Y83YzzEV52QDeJsE4rTzHUdRHMxUAVjqwtFqhg6xtds4wTE41WK6BNstrFN3hmfsvdMk3oxSxN6",
  "key20": "46HhtJLJyJuy4jgG5Pq21UiTqFJrfCiTwECHZf2YcfApmdQCNE2Ns3ETdiv2RQm3NSZ8jYEcKNKjZUuqYE395YWo",
  "key21": "5vBjdtQNFsSvanaqvB33jantBLoQ61m43mc4W3e8t5T8S3yZAYBq2y4NA61MduVgK9BLRnBrxsB7cGH5obg5jAX2",
  "key22": "3mmhsTryk3838dPk6WMwawKg1sCmbuLJeqrg7yh2p92Ezv3TmrSvBmcLyXfv22Wnfn4DgXrhbHYVbtiqEGVayhpz",
  "key23": "MaRxDvPoDk6xg4D4WKeWKor2y47xjx4NB67TNckVptd2azKKSRVLfBYXjXvRMNzZ9e47dhXQin3ZCNWVvy7Fo42",
  "key24": "2tqbdoEVCTYs85d2WDe7zZndHjPBqnW3VtSDDs87bJmPGojMW89ydsuvWwaMLngM9v2xsxDbsLV4yzUyNMi4FLiZ",
  "key25": "3rLnZWGUPukRUDFeSUC1jPeHBrpbtiLNJWRq5w7yBcyr4ZdcQjbK63sTzsNJWS4aomXNoTbV8YYVz4aR324VASSb",
  "key26": "5GrCLv2nYmcqcA24qKgip6pQdFnq28kophow4uy6hRVusitb4wEEZSeqD1CLH5G8iRDweHcNBjtP3q1WBANv5yV7",
  "key27": "51PXTVP8EVq12SD49pLEwDZYKTDRgC5rLFVu3BxGxrxSqc7tLPPw9bh7RHSeQcXHwhRCFTzGYh1oCe48ThMud9By",
  "key28": "5CFEWexs6pvCwD4UDjJdf6w8WyPSvPXp4u7gY6RXXZSjyvQ1jRJw9jSEmmVpRJ9yrby8c8bpdUumZYveAgDrfnSj",
  "key29": "3LxrVYkt3f8yAhwRg1Dm9ruGxnerWEXvxp8TbSNUgqFguUpiq3nZ9RLyngCCnZ1KNGT7sQYh9FQjbLeuoXFXcVeu",
  "key30": "2gYv86HieiWtbSYujaSsVr848kS5KYsnE8BCMU2dF8jUNHwsEDY1bDAy3hLtYQMhAy5H8YfnqPQSK3n5NduvFXBA"
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
