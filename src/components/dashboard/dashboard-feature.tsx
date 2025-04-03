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
    "3NVCF5Rp5pmoRf1fsKGRacL6829iUTdQB72UPDGSCEdTZUCipSnBFgan3J4VQr7mYALWdVsnUWjzLTALc6ScpJTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wByecUsqS2oqdj8CQXPs4JG1c5PLEXnZsf1WLBUsAun9oh92iuKiXTSUvMKsDp8cafqxhfLP9f3bLYVnHjkAmHR",
  "key1": "5ySbYxxPcUoQFQU7294uouvsBA1sHJ9q5H5TTA1GPdWxxzNW59DhYgtZitBDVtCUkeehRzLWvYvuSzkU1MRMnfFU",
  "key2": "2gxXuNaEztpnUg6VQp9K1qViYf6Sg2dkB937zWbxL2EGYSDC8zokcqd2Zoo2gYmMTp1be8A4jDmfUEZMXbXkCwKB",
  "key3": "38PGzCcuTu2vJQJrjanBTqzQQyBtieUe54dQx7mPLRZsTjZoVf86px3nn8aD1zu3Qo86xfp6XSqsoDc2NPAM1UtX",
  "key4": "2qTBahTX9BwZTjEruwq9exDK5mqgVrTsiUeW7U1xar7ewFuiXsdy6EwmYwL53sYf3gYLyGuivmBkeTVGMPikn8gA",
  "key5": "49cwdaHLWXcQRygAKfqQQP5VH4vq2mxkNEeLGeUmpiX27CJBoanU7hoDVhuuZKduvnSeD6FryicR7f9H9cqsnKzu",
  "key6": "5uQXy6W4BVtaFbFUconqqGnAj5G5pbK71arDJLWEGUQjpHuTHurKdRYauzHdnJYMzZU6gEGSdvwUnaZyZG7DuNw9",
  "key7": "53Fg7eGNQsauy1Qk7zPtJ4t6y6wNdtVT3UCARRiBVSVYqayrfmmmMS1iT9bMnDVPCc2hNXDmrcFFRcmr4qaDdm9Z",
  "key8": "3X9H77PrdukMx8b1hT78Fc9qSpkV9fpi5vWrbpoECoc4Xa267keTJeWo1t4h5T7uynEnsaN4Sd44NM8kVv2uBPGV",
  "key9": "5gd3u2QtBnNUnAEcDWJuPGs59wncbWMPPHL1WpeJLpGQCE58Fks3HYzfSFs8BYCCH45R5mpp3i2FvPvgz6Y1js7k",
  "key10": "5xsexDRzPnWp7gUkCavVr9xFFhQwTXqdBV4324Wc1LPcw5XHy5fUEdTjr5XktQ2u7b6iWZuujmoAgJqSTGcGkMH2",
  "key11": "ET7DJTRFMkYzfY6ZjHZd6Cs9LCYDnhX4xKT8oMSapWfoN57XAHJCkJs8rV2mYUfPAsyT1wFiF41ehUaFb9oMiEK",
  "key12": "55VPfZ7vwwfpFdh9ebfrvZyPSBs6CFegqD2Bstb6swFEnRENJs8uUsYBgJvphTtoVrvx1aBs6nzjdWYpdmiQsYz8",
  "key13": "2QJopARuxdsuhwwKvBvYFUGWwhPsmNEJpFzh4cF9LSAMJVVTD2AMFXHMaTkjxDJZr8BdzMx4b7BaBKCWyapLgUaj",
  "key14": "4ktFGAPZnGJn38jJVojNZhYu6SJedvzRHuiPYF5q7Co4XgVinxePUpkhTUbKWRUYkRnuAsevGdmrMZjBCbjbSkeZ",
  "key15": "5oGD5ScMh3PgoKn9DcmkHvpUF8nt7VAE3UNXfiKsPNeEhjwgESAqvJ3wmofajkNoMC1eHiRPveQJso9CRW4bSfgs",
  "key16": "2pKg5128sucp1yX7nZTW5AusYEy8Xyg5Xu4V4AXwUZJjAWNiLfNVX3M8CXQsarXYGFBFkyibQykcv5MYgWXUXTo1",
  "key17": "5hsBiWKneAUHPA2eGJnxqs7nwoz4Zwd9akf1jArLhSH4wQhpANQfJEtRrJqah82sScNzWtEuxWXFt7gtWLEKVYoe",
  "key18": "5a3nMvR7uCpeBw5stCkuBrkgVGHi1x2Rm3pJAVGnht2XCooKTpueqbVgqaaXzA6bQYmosPkGDAsFhZHkzekzijHP",
  "key19": "5uxWQyffttqLMwuaeaFohADww6jf3MNQYaKXqQxSCRFzjnLgVetFVjYMWq21ZdoRG223v83GeueSYHYrZ2XUEMRc",
  "key20": "yzqtmBU3171dWnu9yU6RozDzefB6dUCqW4QvgSFUm4kgfEwknaHZpJAANXFQJBGKmh24hgF9eq9XUWLmF4u679b",
  "key21": "tvnfUAhP6417VZeVzZ2VHnfPZcwizZ9zcyKHRNSHDsQkA727kGegzCFq2oDRYpKWuTasdB3y4sBhxsuWwdZbA2w",
  "key22": "2XU1ro8oQjt395yo3Y6bkhv1ibxHjhv9hTDMHfbgdyQtRXnCwbucMeshyW8MPfXRgQgo4qVd6wwAdTiwxxCEBLfy",
  "key23": "zwsX8FC794Q5Pwt2JUTMFpRD3mZ8tNDNRa7x4APxPoCFkuGR2q6WvpphBvTkU8ZcXiVQnRNVzvga9s332KotyDz",
  "key24": "5mprTSRWTvzXaCJWcsdUtiTuAstFTjtB7BDwLnu4DGjnahZ1TPBu1T8r1apLgo4nab1WHBZzPyCVNULdLd42Hur2",
  "key25": "o76segnT5WyACyCAH333jrYndhv6hgRUpYU9r3KzUewHrnuqe2oy7EDv9K1X2N6Cro3S1CdHdHV3Uy3cQ48WB3R",
  "key26": "EhVoQsskESmqe78T2c8pMEjT4RoJvT8kM8r1pQgYzdMptDpGuC3KWYoD5HmygkuA5DiRdTKpuccQNZhYwchcTP2",
  "key27": "3w13q3G1y6tZWAZ9CEwBsGjDJULFiAQf97gYER6rMnU3HnEnFEXs1zE8rwyiVyREYQhcu32m6EEdXnd4cLj2TwTK",
  "key28": "2vUQ2iYgyZSCM78q8EAVgc1gaaatVKgy93pUR52dNMGcqcEm81dzVPZSqWzp7RKYP29R7KCMhPfotGrnSqRfEExJ",
  "key29": "3C3VSES3hzY7LirijQ3WAcPkeWt8cMuS2U8JWZmqRVb2fyATXziGtro7zjTi1RSTeDzFZWEA6po3a4mVX38hrNcE",
  "key30": "UTXPp3h2xQrg1GucQNFE74A1j7MkDuFJWeGJnRkxWAi5yiz3maBTEU3PjxNDFRMh7Yyc43JW6pNhDGx6M34Yd27",
  "key31": "v8mibURhgJ13HrhH4W3vkWrLzGRemM5LzJwcKZ19BKJjPgFAVF9DtQ9ywMxcabA737kypUBZfDtQVHrMebRnsG5",
  "key32": "5KWa6uALkUYiSJ29d8enUcKcamfV9EqwbBPL4E2sHF47cSvwZxQQRYFKE18NGsPns7Qjryeest8dT8Km1dFNeodc",
  "key33": "cx5N7u3KzavNbjvtAxQu57ZXxuooDvgF2dtFo4vtpMRDQ45zPfPLxTUrzQRr4i1QV8fiDSf6u2yc6evy2Fi83BR",
  "key34": "3nNtwXGpKunFVbVotjVxgPKZrf94dWJQ7QMXz8mfTwe8WR2C9wVZdKkrToeM3Z1LEZLZTg5pg8RU5TRFsVaaxu5u",
  "key35": "3dznWhijgq8oQU7us9MGrjr4Gp9ceezoSYjrToPQEzgCKdtpi2XmSEfdqMrHFaywXRw8rwKu97zyzK4JPYUHGdj2",
  "key36": "4ctvVW6DQHHR24S2jzbk44jhENLorFq9uqMYymmqFRqEwyf9NWADpB5sNunTBszaPgWSSwHrs7So6NcW669tLjv9",
  "key37": "xdjv2NnbDih2XhxnMqWnvPryFE6FHqsWhDotRUPzSzBPJu8gnZjaVb4Fs5ikDaAkm5tkkp9fubkw7fqAQ41ErAd",
  "key38": "h2XF4NGZwA7TdFmEqTtGSmttzdRbnvLEYHemZ7vJGgLenknZMteuoMBK3UFFGCb5R8fHnQknxkNCxKS8QHwjHvk",
  "key39": "5Zkewa6tGUAoVmCSXwTWTQPaNf2H33gMUwHtvEYhG18eckxRJmJoXmh7WYVhwXAYDpQvYAHes8tgDinPSee6xYgX",
  "key40": "XuWfdQK9Nsdu3ADQ2RGMBpFCymHVdgKRBL6Vt8wTZxaBaiU1qA256DRmmr8b2WduZnR8qp88B2aCK5e6cw3KZ6G",
  "key41": "3SY7iRh6aBboYjcauB7hyv3qcxJWhhzA7jvFwDMoc4BPPRcWF7wayq9E58bZKwTjFxDBpHGhsUsjjY2h8BUeCerR",
  "key42": "5FZq4b86oiZfkWC4Nj5vNWjv2GwbJkVX7a3KcuYxnejBqobpoFGCUuZhRKQBiBzjp6kGu4yBcHhN4GBoXajCJ9s4"
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
