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
    "2hF2zoTa71wTJaCzbV48FqMpejBvG8ksS7XdSgZUzPUnfofnGEHF65rWmaR2C536x6cC2RHC2xy162fN9M611bcS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43bDTHz4YGb8DAgK8pcyefpBvGndB9VAAaX5buvZPQJ1Hgr4qwXvSLp1TFm8g92Q6BW1s8CT6ptgVHKymotgAcv4",
  "key1": "2vNRpsu7VGX9sGocMXQQ3U4yaZ1JE68aSYfqykuDgykQs5E3qqhvPQgZU7EYiZyQ3PjH8GcC5LSApdqUgj2uyMrV",
  "key2": "hHc8EQUxM9meJqJdt3Aaafw2Ve2y6iyMAEZ5poskMTywujkBjja6dWerRv7MomDTEh7uianfsYLuH13RwbwSA8r",
  "key3": "5rMzZPRetsrVvvCgtFn9Pahp7VuaJGVXkUGpptUsuTesSosy9LLZg8zaqC1uT8FZVpoyue15C767gNpVpe3cdWdE",
  "key4": "2hp9GymY4Sxg6FAdWD7tWP8ErVNWxU4kSx3SdMxozc6a5zp3jAL4vns4XJ7W7ambSHn4cyyhHHAVEKTzvgmRTMHw",
  "key5": "2jh1qoBGDtrAvHaLMGp4qbSEkXd4aqmq1ga3vXqMt5kLKujr6pb4ywHo4kScQQTMFQTzG7dUvV36EWKjfAoPefvs",
  "key6": "27XSa2W1oCb7AdUMFGPrXagyJU6NDZ63jQvzEE9CFBFzAPoTJRChvHvPHmQqRVUhDpYWLC4sK6NPQ6GGxnjTLdwf",
  "key7": "2p3XQgu2Ayh71G82YoEnQ4XzFxLUFNfLVVFBpKLaytBE3gxDjpFYHqBzvUpRkPovHT8vxMKXGAnpbwnRV2ddfsgA",
  "key8": "4mgcPLCTP3WNSHdWQ6uFkbaeHEBGPDkQiR9VTbhEDE2Jf1f2d6SLhQdsefT3iKdf8gW3y9oKXU4RjuJkaJSyqHT8",
  "key9": "dLzEVpFS7gSdtqF1bpUhopcVhqGma7JEVKBLsHBndyoMLwAEcXTGGCXxJhLwkVYqpDmreaPkZ9rKs9K9PpTtjFN",
  "key10": "4k5c9JSa1pj8BqHsEeeqPheXcx25Mkk56GaMxgq2rhGto7QYz9snXj5KBpZen9u5zMRMuzA4Li3oph58RGe1WByc",
  "key11": "4K42MD4kKPnBdQZeCGHcxdk8PJmzy4vnRoGVg91AcFhvRwEFiegiGD7Z6nMQpQ6fszawxp8o1dPcHvPMRDRiRcuu",
  "key12": "3BxHksxhH9V3vdqyyZwrgdxE8jh4M5M3ZpXknxfnFwWmpRuJ21keroVyVQA3tXQt5jXp5XpMgVHBXKvpgUHdrGqW",
  "key13": "4fE4E2nad8HBqz4s4g3yNiontnz3JHLuCtLeQEcsy1W7wMc3QsV6vvPi5jeEqkM6G6vXgU2etAyBkijr3yVmqSZp",
  "key14": "4uEpqrMY9tYThXromcn4kJusMtHaTU7DBU1gLx9zHcGz29sKaUWV2XjN1ebi4CBGgAKTpRLUwDDRHHcH3yYbmf4H",
  "key15": "23GU3s2ZeWg8mwMQWx7UXhBAE3hUBDG6h3gj8U8tX2Lwpyy4TLmQhUa4YRoe8McthfDHfe1GTtXYWP4j4Jn522JN",
  "key16": "fGQWtMpDJoc9i2BNvfCSoBs4zxgUYU3xdbkrwuficqWg7sohyf83wh3wxe298FMuzAL3PLSJXZFcee6oEDYqn4f",
  "key17": "49PGNJwRdQhhxgAQgukPuzxF6wYjruNxqZ1jCh8SL2rQJCrN9Zpf35oMkciYRkyQrquL7qW4BNzGDiPhZS6LAsmT",
  "key18": "5ao8bHTpMSDVMxCh3XoxEZ6QYy7qKGCqMmStnV2PZAp3a9ShHm3eNz8RkXExr7b2sof8ayd3cV7AMWas2E2FYMw5",
  "key19": "4nS8Xj3Mshwb6HCLquMewGfS9SaRATQohHVNawusAuyRcRxF9ah3my8eGoiH4VjepADVmhMBZGcTLUnu6irfrsSU",
  "key20": "4LPgF3t9j2FURXt3ngSUqDECsnJCHNuG3q94VZ5h9guJCmytGZAkKWwfobRSzF2x5kJhkExE5DPEGg8336TUfYfk",
  "key21": "53tziHrSWvz6He7zLpEZhe8qp3ZqnSPmGJf5ThqwyLB5miWu2vxuFEBgiAW9DCmXLeSGjXXiLJjy1szuDyAYtJP1",
  "key22": "9CDfymtqZ9QnJjoRc93rn7jgzHVj2JhxDWvspRhUJUoeHtrX3WyuuVVEhDssXjDgLhsb32aBCrJYFSLBLgUfgUu",
  "key23": "4S2wmxjBsn29f2fBaXeGXDovPDp942Pi1QHzq5mfHCkQj8jY8XaWmWBPEx5iuvFKBmfFogRF4dJGDsDBCHwv56ec",
  "key24": "2f4k5jziqfncBBsxm7v5HcdQeJurZUFERCM41jJB7GLAYbgErki7JF9SzBGrfYq3eTCZq8sZqNHrEg8kgYhdnXCE",
  "key25": "5sAYPf8GYFkvrqSbCak4f2z4jAs34UHj5nwBVK6tzwCxAjDitGvhLeLMtj69RxTxGMhmWskjbDpWUPdSweze8rvW",
  "key26": "3asqR5995jU1cvSsDje9qpw2KUgaq6VFQpPcF6bHaQkrsfB2gvjDpEL2sVFp84pKc9KnTJ2SUSzLNHg7yoiW8k9Q",
  "key27": "3inyfvctMKLFNr8N4ezJgcBw3hxxvVei8Lhe23nLcGES6AmeoP2NKNVfhYT485D8BxYd7JmjgMDUREzurtaPoord",
  "key28": "4rPSNET7ALTPea8BiksfcCEcwSVWEX6SFpCQ3JxJymWyKZd6rJGCpxSxg69v8Ybd3dTzVvEi87u3X5YfQd742uwd",
  "key29": "n5aZ8S5zSgZpgUDWk9SiQcWA1SAKcVibnJmjbedxYLh9roHq3yQdPRYzjK5E3SwokHi7W64YoavJFTN5dBZK7F4",
  "key30": "23XPnyBUo7XoEvJDyUGgMhTSMeeJEvNMqUJ1MUPDZPDQQAQXa9jVh88ZGxbnRttRjYqBVcGQsE8xPDrvwYxFwPfw",
  "key31": "5QvuZdGhRrnAjzakDCubVAVgrrtDq6HYB89d53BMCutksQideXsKHUdvCckFv8r2biagig1MMJLoPo28WLkpcAop",
  "key32": "5r52Q9B24j3xcgrXp2JuEAVs3AikiYpLFS3LA6r8oaR2bYAAyXh1X98zTShMaTwQTYzWbKuQGTBJCPNpGyTVYRfa",
  "key33": "5FJTC7TXXuuUhac4GyiCXgJQ432y54ofQTMYPLGFHdvGBGSuDnM7yib6qYcER7jz65GaDtjuiMoFagVwkCw7uGHo",
  "key34": "5VKdHPNBwDXqdZxzcCBtGQedGkFT3v5q9Np4KQhQZ3WBdjQGunDUSn6i5YYPfwVMMN32znT3y5gigGrDLe5Zs4NN",
  "key35": "4TPeCWhArCzHwYGZSNumuvNyjRUo91QFnvi3nXHtx4HoPQqCsBULSutrrSPaRRnk1JS54osZyqsJe9acoAXjEmVS",
  "key36": "EjvyTUEp4b7xToBjY6GMZUUX1GGDF7gRBAwe8mgDDC6dKX3pxevBueqNHi4ZETpa5K6Zzeic7hCTx3F58v2mVSx",
  "key37": "5JFNwxpDpAVH1tQFiAF5CVDcRkH81wCA4cvBDTsrpemZS9A5YikdmznHY3AM8Lx2EMWSRsQMbT6KdFXPgJWEoEA9",
  "key38": "2GBr44P1EhC7bNajWHviBvEDCrAy3Fhct4WZoWdGpsTaKpEEw7DZEGx6mLVDvoE8wSXsd7z2qhtyMmLkqLZ1WJbP",
  "key39": "2ZcmJp7i1DcfcDP3oehEowog6EUXkuLjnKpzFb2iKDZfEzwgQSMZWajjxMCo26LjEkdPs4SoZDSV3MwqZ4E1M8X3",
  "key40": "4z7q6FxrdXudBRPZ9px57yVtZWThByreoFP1CSJfjb8rSVHdotWMGphstLkfTHz251WD3JAiZer4yM5z7jR6QxuM",
  "key41": "2z61tjAEqdSS7hGk8ZeeKQCekVvKeZkL3GdWV96YJqYeabp49ASijfbE8veN1pTDX5P8zc7zcSLXXEhNhT7mHczj",
  "key42": "3j3zNx8DQRJsbZ3A6sTjjNLXEREUiNCazvDR9XqNiH5ZwrMEoRKZvstohkWYHiYrENZK4p1vxK3wMRMeUe8nqtWN",
  "key43": "3HugS1wMPsRufaYA6mbmNm4PG65AEYiSF389Yx45n4Y2eWebGFarXSGwMqisEVptjTw3pqaNGS1kQmgH6dAErsSs",
  "key44": "3RGVSAoFwrBWKJWFxTnm77Hwbch6XihUxhDFgw4jk5ezGmMLMkxNc2YH2Lh8bvQaZbxCrtAFYhHicpgnVxYe8iv7",
  "key45": "3UJQYmcnCui5TfVLhfGcaQ4LUpiAvQQircaQYARs5exGp46Ddigj2KWUVTxsxXLYpeVyGpQzkYNVNCny3n74ppGT",
  "key46": "nr3xRFsZAh9BWuAvS7w1VNPzUufddUMhCqJVQgUnsKTz1pxC9JEVv4EHnNpxUMpAbaLdmUKVx5T4Cvy2mgiZfd8",
  "key47": "2zT3tFC6T7xCGVXs55zDV1dUuNCSZGaxbPoiADUP5VQEYueEAX8SRrj6iPLMQdkL67wy8j8W2DGaRnmrAZczCzby",
  "key48": "43szjDcoT7rBbpuCzChFaAfMGyVsVTLs2GhUb8XtwgUK8wHkMjYRcRprLgUomSSb9Mg5GASv1J2jArHDe3TcNzZ9",
  "key49": "47o7mGjZLqhNtu6LL6grNF7Cb4Aposi5BdZ7XRDcWcUKJE2veu7ZjS7zwkAexJ7QuVMZSX33FHxoVabKrhRzFBAn"
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
