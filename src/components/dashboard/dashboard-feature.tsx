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
    "5JJE7sCCyjsHvVcaYav3Zu5MsyTBE2Xi9AGJuMSoAvngAyJDah7NhTthGu1HsPceggghrLYZUYoAfzwY319qZEPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3phuYRBvQXde2nv6gKkA4rjWkqbgUcHpee9ZQ53Xt43mkXGAMauAXMJVMvgnW1ejd3kJTLhLk9k5eKQtaYosBYgr",
  "key1": "35e6YczyWbmSWwUq6QqG71K51r189Zmsyj3ZbwcNbNdCH5kTT16PPr2PV9v28hz1Lpe3rtQTgLDSRZGyxhXwJiT1",
  "key2": "2bmAVaXDT4ZcA7x7L2hJ81AiDpeRhNeszmA9YsSkkT2eTqKiBrGBngJHsSUwt2mCeT74WjcRGrpuME82HyvXsMJd",
  "key3": "3ZkUCoJ6Lv9sww6edMxhnrC7kAKXwEsE5aMTKEnbZzrpUUMnFWu4ebZuupWEqvi1xNb5gtccZHMyYoxUECWM19PM",
  "key4": "36fyNHfBipJoAc79PrMYciVRjKsqcaZj2aYypfA4ChajDpW6hXTYxRXF2TjSeNC3U1x1VNqZzJ4pZuVbPtrzX6Gv",
  "key5": "29WCwwKwE3pnowWLDcdq68NgYBgn3bfmNE1Xn4Ryhu9Ct5m8nbzpzpRuY9unnrtfRbRqN7V8C2eA5N9iQ2CmbkGU",
  "key6": "nh6RaCkU4sgY1WEgx8UaDDsHZyvNB6TEqZw9zb7esyGVzVdVX3SWCBBhD7b8c6PsTUDTHYL2pqxrA37xZR6TPsW",
  "key7": "4nAeMFKR4rDH1fy3s5rZsNWjaMvXxdFDr7MKewnt6QaTgHvqB4wXhpT6wKRQaawMYQeteNemS7u7SEiH9qX2KsGu",
  "key8": "2h75nqJVoXdBM2ezoSnsHn2DNkx8iNLez3jBBXZeEeWKdGP5Tvvx959e5ZNhVzrvwcbax9eTFrWp4b6VTJ1aNxZL",
  "key9": "4Wde1AvYCxCSAN8cdf4pmvHPeFboEJygxdLbD4MBHK4rJMMiULqe7rMPn3jEvNk5B1bm1qjF8c6uBbPfYCha8WAT",
  "key10": "4AtitgMTTuE6LP17UESkt6Hy9KSEgMFoAUQc9zxth4ViJnioDzuDpAPq5Ah83TJDng6k5dwcxWAQdCoz6ryB57Jk",
  "key11": "5hfJmG6sqJT4fUy1u1zywB9GVpx8owcuyaWqNFNrk2phzTQfA9PjvDffzcaYfDxyir9bjC612fKYE38M6oneCQJE",
  "key12": "4vYRXPry5nVYjTSCJuroVaGQ6ZJv2retQ268TwsgaUcMGiV9qhSS5kY3G6FWcmaC6vLwSXR7rVZbMkiux2aMUsXQ",
  "key13": "3DSAWwdqs4wnxHEdCLxgQ3BtJN9LobYs7g1YFcQbFre9FLaid8rTbLaEgJPULDJ8RA8ZJmvj5aaun8acD3qWb3Lc",
  "key14": "5Pchr62AW7TwVgDjG6zvXWj1JCAGvhoucJiESJLQcMFXzX8JSrPa2T5nNLRwUg4PhUKGT2ZEKskwHrR3uePpRZYr",
  "key15": "2JUdfnQTCRHQFfmCMMYtC2Q51TLH2cgiMXSNSy9wch9Yo2MmByj7n1zh5eoPPckNaev5jUPBBjTzxeJ2JPUJuYam",
  "key16": "4T3pons6DhtJerLaCUXtuCQGdfvqcdxDveMpQuLB3CbfCZvT7VGcvHB17JSNfmn83fRvhqJWkUdsmZvjrPPLdJok",
  "key17": "448vacp19SSQm57ihAeR5vVyvRBZG5wd59a9r7Qx9ysiqFH4HyM2TpyxD5jLJ1bx5hpHSxF1z6YtebvKnrxpheo7",
  "key18": "5wG28QzYad8iWZggutW3GJHuWUNNXvuvAbS2fs8Bw5qg3yUqVHGk7HRnQpBjwg1yb7vwygnEQJr7HzgWvucDgAJW",
  "key19": "pAoo8SAtaokAkT5gXxAu5ERvHpk1e26g1WCW2AqCmWqERZPPAc2R6QdK12AU52xphtjk755hYsor3VjLPZFwVg2",
  "key20": "2HRooVhV4i8hjdBGcqqeN6oN2TG8wnUvQysYgaW96yu3cjQjHdyhhpuCyGzZsddSEUy7xu5CRd4vMBfRsvJZykTj",
  "key21": "CN1FmFGmPK6w4GxMEPB99Loh9vsNuiH5bBHKrjp3VuMJh5WmauPsui2o4mAPWMgjGJ5GYnkGR2X9H1jxnWzqwFM",
  "key22": "3W1nukyLaoZWY9KfYQWgaKvNNcKKTMFxjsFbywrDe4ksrCr5nKq4k1mzqhct42K6ofKPH5tispKwnq3prvFmhhie",
  "key23": "3vPsqCcDfrBeMPhBnd3f2ybhZKNkyn1xRGMjXa8aeKBA9aUHrcGdrLXLN5a4TzHkhQKxPDif1NeErAGViDVYtE7x",
  "key24": "28nLmkL7nVkSVL8Th9dfQjPo6e34H1nukiwbuRAGhtYCd59gBVkfkZryUp5dCFLmnAhnzqhw1Y8WQsQK6UamTLg8",
  "key25": "Fxh2ATQYqbjWA84nmEGFi3JxndhLsgcy9ZXtM5gFBUkcYdFpxer93hYP3i94WTwpC71WrERm7WLwXchTSAwnnRA"
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
