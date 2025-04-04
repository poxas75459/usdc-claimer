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
    "5ciDZrUbDVfMBJvMKCmKtWpUpCUfNs6pCW8e67qkgqT4iyHbnLrdCgAsvazrrsFBSjYUFqfeBgajacSbH8oKjJ7U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jFfBGTcPp14LqLo1xtozCTJQJQHpRv162HjHFrZD8bWNLMVUUF1QKSSzRDY4QUF9BidCyLk7diMuMhnGLx4dyRo",
  "key1": "5bcDtSCGiG8dxCDKqDead9cg6waFGWQEkG4YpbUDBQmxZHMPT7EiSBD5V4NyNM8CE8rFA1TrBYUrA5byyYBp3rj5",
  "key2": "bqyu8idoWuoNSRFGW4E88cgsEmXDpJd9xCjA6Xc2QWKMLFArUEd6rqTnrLNC5EWHAbckg92kLvJ9qCMZNiUD4oh",
  "key3": "21u1GyTFLs2Fa4rhzxjE9fTfc1sA1YLAReZqgzZp89abYRwXytRTQYYnxUCbJU5CfnsXkS2rwhHgoBDmiFpFUzpn",
  "key4": "4Bowp4Z157yTTH39AQY6zHZhEFKf23RdoiJVPpL1EKZZkuLYXJJYd5eVamS3tkw8bNLUP7L3SHLWkEaSLfx2C56w",
  "key5": "57i8Xbmxjonw6xQH9wkoZAD2d4EguE4iQENuts4bkihfKTT7XscQiL2G3tRNpgnHTUGaVyfhZmag1L2HuSFW8BZB",
  "key6": "2ZQrmwDLUZHr8sXv4rTpDXbgm7oYGj9drHUzFCnjrTEyrRNVGCGQJqqhGv3GMH5nEfxDg3KbUJjJKQsK9pe98DXh",
  "key7": "2W1RydLk52CaxQGUovGTLNBcpEKnqagdhX5bGTAtfhZ1pTsjmRdBNK3YJrfGNZ7gxm5Q9eyJApP67VqWryxw59Kh",
  "key8": "4acdMf3xbPBjmVLSFBsSeefvxd6L372SSUWwmRvwhXb4WDyP1yHQY8oNxdw7K25Fy5ShCxQrYdYTATwXdnYa1fhU",
  "key9": "4vfEcfz1dkue9TcToxTtHeoNwdh2hYNr95od4TpgAhamaKo2FFi7rnk45f5FmPNbc3XGAeogbJZxFZW3wkwoHQwR",
  "key10": "fWNsakzdLigWw8yPYYBhybx6q2reCdCFaPaLdtzX23XnPTawrhwGwAdVPNUDDxqQkqhoBSmfvDgK8ASHZpP3NWt",
  "key11": "3UqezdEMSETg1eoPAEApobWsMSUHiy82KFJjkgLfc3bBEjoAWuiqgRtCCL31Jv25k1FTrXLHieBogd1zdh46PsTd",
  "key12": "5qGYKd6iWU379v6o1WShJgEWzRXXt5p3qkoLR83EjW3ZEoCMupz3TWMbGmKaDdsqEDo3dZAfZWm3uyGYNLujb5up",
  "key13": "5a9tyaYsd2Qski3HDHdDYGPBYYQLeCsSTvyK5mNoJhVtL5uMRmh9boGoTgLUNjqERSK61L3i7nGYnxAd6phDnWks",
  "key14": "4vRvf7CwBii2ue62CEeDqfbuG1mBywNWxeiApmbUH4g4cpmgVL4y9tm76zDikLdoGUiStLsPULRP5nJiKobxJZmY",
  "key15": "63rC11EwhLjNgc2o8W2HxiMVzhsC36dtmzUn5QEHWEiNaBLQaMjD9RuKFPGMGJpp2XySy8pioHwXqTdnVmPkVrFu",
  "key16": "GxVGPufphetTjafmnuZXdpmMKrHN9mVW4GXqvmGbjT1w9G7kStGpy3MsCMUTHwJGqNbVpGuXBMEV9H94xFXRLxj",
  "key17": "h5x7ULxx9MesxxRhzMJdXkTMD7eCHG7twWihg5t5HzzqxzPizuEbvFrGGH1Wr7sa3frScu1ST36YxWYRqXzxR8R",
  "key18": "2CC8FHxaDrE4TMEVqdB8hd61ExWHdCm3MQgUWxYNb4GUegwNP9C5jLVJeaM4dwcPCDkG94NpsXagfAy2kzRWgaBT",
  "key19": "32uzNBWGrd339eUHoVeNHv7H5ry8CaWS5SewXfBCyBix9P6PVwf6qX7ZePNB9hzcPvPEA7UtQB9rBDrnieG7EYCf",
  "key20": "3LMAVyM9WdVXyc8w7DjZ2DZKCs2heb3MfacnWAKSkJER154Rq7o9k6zZEoKdhbLAWYZF5vGqNeCF8xoXCAe2ADrk",
  "key21": "2B1ymsFNj8LKCAHUrBeK22qnMvSHhQtYzRLbbkSL3FPHLGsPuV8CJHrXHnYeqK9jwLMbihbYR43KkGMfxxsZkTyA",
  "key22": "65Z9mQMozRuJ3BS67gE3stCxniVRKxi1q7inEszwE5gkft68oU7vHUJf53GHkutC4nPzUvtDtcNfoyq4uwFiszf8",
  "key23": "3pGZUFfxCGNcUymGLkFTpQ9RJzyETEcC4SfAqMdA9oy6M9gMdeCoTUc28TMmpwEXmBm9Pn4CeJ6wnnNM39kLGNZS",
  "key24": "51be2oL2qRQYA9TGA617mpTRNsWZNCKGgwppvWc6rnnka3Cxw6GvP21GUQe3mWhswCedW5XKTqRvUnhirDsWtWtj",
  "key25": "4NJEpoS3fd2tv5V5zn5XoUbsBCRshjoHEe9oqzxEcLCG4nAMHmpNr8qTiVxPZbixAtfnuVmAT8YSb4Q2bwtoUEcV",
  "key26": "64SsrcLjUTiMxYyPKmwum4bjLdrtEyKYcNyoyfgvKiA39VALWVsGBsHUd5u6kgFaa1YZGax9UM5ciNQtv5bfr2rx",
  "key27": "4NW3S5f6bBLRBiyF8DeP8i9F16EGcgxz8v9rd5RRLrmhbPqEQd9N3vg4yqmppomgXLSWEDmnWrgqGwgQaRkba8d6",
  "key28": "5HhqbMMUMoVECypKTQRS9SdhduyD28iC3oXtYCB6ec6XX2CcB6K1i6fTtKc8vbsJED8GVoxPN3RgLwJam7xiYPqw",
  "key29": "4zEwQibavZgTDYLdjvE7kJD8rehWaAcZgsm8Yp6CrMTMefto5VvF9LwCgiAj9HHV1WGXQaqWU5BABfc8QuuXQFx7",
  "key30": "2SYr5Xq9iVeogdZftNHQYt5R5UoyW4P2h6ZfXNqPybhLQKPHZVUC3CjTSu1dNvqucMLDWjix2C4CSpeXrCtAbqzL",
  "key31": "4u2xHzvjpW144Bztjd7mDK1r6dBipNPz3FrcqPrk3xVxTFNi3Hu9N9fNmTDAocHj8VpSL19qdyB5cvW8tpqBRXEk",
  "key32": "54qWuffXZC5eaAaLdgMdUFD2opTbLjk6WA4GUJLWth8cKuFN3JScqeXVfxwbud6KQt7h3qDDaGGWh8uUvrkd5duu",
  "key33": "5UrSNWs1NMwspBNsoE1tuxjP64fKaNCvKkhjaC5kkhfmWcfwJjjNrZMzBjS5edqQRtMoHpdfcAT8wCbxHepDnZNq",
  "key34": "3tY51RfTRJegCYSApr7dFuDMVCzxzxGt35Yyt9nnBfLYfB9nU1mKigf2ng8Q5VHbxqSt7CKiAj1zd6VWbt5tNcNE",
  "key35": "5MRg9iympwaw7HGND8gWVLtMm7SEUMzonkVZ6PJJ4wEgbPEw9oqPzvVktoPS112afnNXog89oicN6s3W3EtLZYg2",
  "key36": "4dPUaS3LmohYEnrkANE44cQ2qTaXMEzgYmLWmBwxUuwAdPmQoTy3s4AHiCKwvSpVAJ4HsrLFXY4ciCeqxN52JYwK",
  "key37": "4aX3Zy2wqPBCdfVyGyot8nmoPJrGacU9WAypLbKub95QpjyE61NW3BGqHGoSZWS2RhKoWtkgXvnx7wH4ecmqqkzL",
  "key38": "4Ks8MwgAMF97572SgeLd4GDDKUeJAZXdZFdFK5Wd4HK8quK1cFDf4oCZ9fucv4KWaETet9MZKkrJ3ereq8RDq3rN",
  "key39": "3vwkkRA8SeHuokZUeDGZqZ8XBBQcaFwt82ey9KZCqxa6C6azDjDKHLDmQKWALEpkvvTca3LPuKLGTQxxeNXV7iFo",
  "key40": "5kf4qPrTTSR9UZ2GGY5vj4DUYC5g34z9t7rD8e93svQc6exXW3nTvsa6E1isD8faZeSvJsj6yZZH18JDEHz5Cb9d"
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
