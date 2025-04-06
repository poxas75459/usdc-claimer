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
    "F4PyMq4Z6n7hDAn5U3qtJJESbTrRgQPhsyK67jfRT6ytg17yZzDR8J8HyPyJeVXAdzktr9YxYoYUnm9vdA5prQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FWKbgtzR69ifH1iu4waCkWSteRdfacthFM8FCnBfABCD2SA4wuV5MLAMu54tiHek6A7VPtLnApvABqQZLtyDjhT",
  "key1": "4AxTjxiizRvkshtZMRQnBpxv4YgrUCZx8zFMqGpuva2h9oJGSEYDSccueqFxqAmCCqpgvGSAVQCe4A8G7r6n6pR5",
  "key2": "3uCPamyGs5i8DzrN7TDoz1vYZNfncATkugJxQTeCzbiQ5RLtyhmHwo8bnGtuP1dKV3K3pThvZzSKX5ZCGLZuWumN",
  "key3": "3EEi1Q8FDFLVd6X68B7L4KT1MfPrKXAHDYUUETVLCrjnEPFF1VYx2T8gHkCHcT2KTZysXr1UK7PgTdFw9oUeZJbB",
  "key4": "2aVqB56LMvcU9ZwJzeCr1patdB1x49UH4kGY1ztkmxsn4kxqK86RtU7neFvvj2pFBKGQLyG1bb8FzVuAHGK29dYu",
  "key5": "2yfedW1aqX5VthzBzQendCASgrfuZPmqPCd9Di11sBBSehrupe2HMrf1PwJtm177CDG4iQa61wxL45F3JG3YfStp",
  "key6": "5ih1KmEextgqKrKzBbTRomzZfbNNjHmWuNhJX2hsWQTuaD8qnZhB3rH4kJYHwZRbhz8UtgJEvtAWdDPQ7pBmnXqz",
  "key7": "3U9qEd67htMjsdAMruqgk9CdEwf3rkweQmTaS8BF3cVePBKPBw6yG8npm5PppyftjHug7kY7HN15yHGuMNJgNpub",
  "key8": "4EmSyXvLkQuQsrH9WjiFjiGxed6ZKq7UEyYuB27KymxSjf4BYa9YGhWoMzTncJfot9UX2sgKd4c85qMQxE5zDdxo",
  "key9": "2WDGaFDmPXtyvXi3oRNnM9PV8odjnEbimHsNomDbAEQRKc4awv8mV2BHjPxaaAmk12r9TpXBJ9DcK5zWFU1fytah",
  "key10": "3TriKykjCpN1BDxa8g9dTwsHDU535dXDMKhzmigDmrdbs11cTWFVs8tYgqB3x2RpihPGXgvmpW9ySc7C3xgpHqts",
  "key11": "AqidZYvUNaJdt541jzAQbnpkrKZnSWDHWSGrSR3wNrihwvERHdcQP99UqafGbLVT8abp5qkKH3VW9P6XJVN6W8R",
  "key12": "4zJSdNzBf5Ki8Neqn6hrSLEPqG2F8CqSgXP9UjqDdCNe7Wa4yrVSdBKs43UMBdgBbFBxofa299kjE9tcCmnzLsxU",
  "key13": "3emds6y1UYce19rsoQXaAuPKmPUakzcUZfPDqq11oydcoY66HrYaKSeNJ7zABzKYRg6v7BLbpbLucnkFWXPAJGXA",
  "key14": "4DGySoN5fCrNSBipJeuLDoXPc3FGWDuzgjGskegtpYeMdkzbS8Dxssm8dLLZfqe3zVADscjPbHQxmGWFswxUdnjV",
  "key15": "5vDk1w5oAEp9YsJfaQruhjdqkUwt8NEQfNSgR48D5deEzxSciK1Sqn4Hd5o2ohKAqKjBeXvrkzUpZkZAGWs15Top",
  "key16": "5dybz1VERkNAkW2NgK1VbAzZJUtMRXbtSqAoGHEh5ijsdBHM4PgzFbFSbbjcPrM6zSwYJno6QrXgHUZzuYrKXPuk",
  "key17": "pBNhpMwUW16Ukp9HiVQHFyqoYFKAmMxxeGN4vNVffTN4c5Y8zaJpLFN5CoLdo6Y4UeoYUZKRVPk9XWdJv1bPdjr",
  "key18": "3WkzNn1g3js8dA2UX6WLr4FPteCNcv9Lr9hU5h35E6zBUYMLWkGKgkgiULtxob3x27hBPLNLM5eXfAwTWtn5Yfxq",
  "key19": "2s1D8d1WDywMKv4LrAvrf3CcuEdmchjCbVicykjKs2q4RDNffVzLEUbPzSSW9qLSRHajmfXezEcqsj73RKnfKydM",
  "key20": "XCQncrmCe41Zf5zgJQQYnRKSNiEx49byyd78XvdeMNjmtskyb9rcC4dgvEsWuw3noM66yDH4Sjj6bSNhLaAFa14",
  "key21": "2wsp7V2sLQKDCrW4wgC6R5zsAR4yfmGR9dRgAAGTAapiZpoLoH876DjAJjYYp51NsPmS5XqBrREeobgp5x9A7eEH",
  "key22": "5WKT4xfEocjkJ3f3R7vg6AaejYVzQmeXHsf6mnFhrTQrbyM2fH5LLvGMVQEgXQ7qTHNw6ZGWdBa5GaSNaoJB6E1b",
  "key23": "2K6Z3typVJTBRCf7XZuD379TENEzR2peXprxdJpEQ8JYZJQsEJ9GTCu64jA34BV3Qmo6XDgki8HWksjpKni4Zg9E",
  "key24": "3t9BbQzUy6o8t9JawUw2PghaRP9dVudgaWZJYvhmgsHFjgaECqyKzZ4odFeVd5ypG7ufVhBqL8sxB9XArppyZVQC",
  "key25": "2oaL2aaWYxaf6mgWpES4SN7GWf6vYMpppE18Fjk4HVsFfJpQ6qDR2DYokP5xnuPkowxmjE3NKT8ptQub8WkTvhwe",
  "key26": "CEy313NkvSVp42hbLxie7hGxChhMpPLHpFRHk7pcVtDUcSvxcYh9YUCsmdf5kKiT1nBvEjwiGfTMpSXTFMTyzKh",
  "key27": "2rufpBZHyPSvLuKpT7PsehRx38q5RsehAQjY1o4SWanGMaRzqs9sxazjazxch92goDpJkZEicNwq46ghA2LRiSXz",
  "key28": "5yxL1XF7DjSFuEZsyaRKQDVaGd3NWjSSb3KGm2ZQo7Ro2mQqSaFh5M516rakUWkLkt4khNhnAcQQeVnE78MNxD2M",
  "key29": "2qBZY53hJg512PmMgThrWUY39XLAuLnNJGi14fdisoxR6wGnw9xfiyi9ebEYFxjo5i7wPmczLwjU9SYCifVr4vjD",
  "key30": "8PqaMpog3WX1Awr3oNEDPPpwMBNeLaiw4shWNVhDwETotAPVzZ4XSG75A9TVWaHydMevSMoejDF7kQQnKsbQDoF",
  "key31": "pLBc3HRkz3ftakgWKSx1cxkPk3HoVWcdYYiuzzvQWp4S5fP7ezRkgmUruDpyxjP3X8dz7dmfQjPxiVeN8cpTbke",
  "key32": "SCLEqcdqEeihqHCMRhq1LvT7U6e2pg1hXhYKNhMwV82hFYPswS1gWJkcvTJV2Z4DMsrRc3bSWwmRZzUP3Znwri1",
  "key33": "35bnGQ5LiFtUWkxRNnBZD676nZb4USimpa7nqPn4pVAMYrqFfUr9c2WGrGB5f7t1uXFq43Jkj4kCGTW9QjRKfZ7a",
  "key34": "2XzuQEXiWLUmByKqVH8TZ88HEqCrKNwmBwG8kcNHMEihUrhWAmfbAddVav6PJpQjC7uDaVgsZnmmRgzpL7wq7h94",
  "key35": "5ZxdQw9ZE31tgJYfxxo1exbUXkKfmFkty2MsJ8sbepJhXA1ZAC3uKzZAVbHNYW7pojuRwZfHN1vYQGjASz5L9ps2",
  "key36": "4hvPYoEgmJD1Sq68gvqseX9CbyPgkWh5DpFg6gNsviA2W4M9KRCC8z7x7TxZC2h4tCwZ7gbjkCa3UeVZhtupGm4F"
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
