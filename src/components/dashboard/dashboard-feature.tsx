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
    "5bpay5x25zuqH1KppDaMJRGiEkNwr7VM3AP1GUB3wYJjxTGp9Ff8RwiXVhReGXeVXpyz6D1nbL46J2btEDyKfnTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ohoZzMXsywaYCrkycb7HFuqctS5MF3STbV2v2ccwLJJz2bNEkVthugKaenU43Ljcs1ogHnA599TP3VFTefcAcbH",
  "key1": "268g2LWYb9RwfAT6edKedEuUkRdn7yGK2EfAunwRbJSZnrkDBeFpwrtHog9njy4u3oKeTgGuUWvJAqbmTazFK5St",
  "key2": "26GL4n6MPNKtAeqdDerP1BuGNSEw1gUDFZ6xVzQ5kgteNoGaJwmgF2aCMV2Y6fMAxaqSK33Xdv4mM4j5ZdtPEbFj",
  "key3": "2VFeRWKsjVaxqqzMQJSDBH2V2MLUApiMzD9CdwhCafRm7XT66HfPTfYUgsqsrFrkYU8zPJuVu3K1YFQLnxRZXZyX",
  "key4": "3xcGkoTPFJNPRk73teH9kG4hXDQQyKojjAxKcfh5y8Z5FRszSowuDmzxJqwjry9t3uc4xM9TgRSiHoiCgbEzXyre",
  "key5": "4HLuANpBHEwdo5JYzifY4HpLABvUVogVkMQwqPjHKWzFTsQRaA5DpFrJ8k4qTh7LppBZavhga99qs3sMqGTHWWPS",
  "key6": "2qyheeXoWvrwxXsfpazGxZdy7dLcAb2gns19GWGJxdpqDDeh35tUhXTiF9isGG63KdmyFrAPJmjzbkZKTPvLMz3L",
  "key7": "3ugixfuDMDL5QZsTgzyqwZusPdKzaTRXcUhnwD8mAvjXTQe4kLTKfpWguGRt6tZnm98K5UuoTkhrrVNka5jCJ38w",
  "key8": "9kbi7eLif4Fu4soscbzvnjcfmSwXNoBTc81rxqH7FJmqzuGjcBKnyj1grn8hw3eavvCJSs5iFPQ2Pt3CoctCezx",
  "key9": "354AcbFWEHuaMxyoJhdqpASDvey9DABKf3hoB3PcKSnwZB4tFTLN19pQqzhHpUV3pERFPmNNAZhcmjpV7zQwYErb",
  "key10": "2vcqw6uxiSN44uGBLiPwmcVEfaLSQxSySuva4HeBAVtV2gX7Nx2BH88QQEbbezWeyYhReZcZJpByjoScg4aMHrQo",
  "key11": "LdA13KrZPQ1NPkZxUHDtw1SeQt8UCN6omYvrwhSs8SmwgqDnawy3hX7owmr1ojQA6NbXZztyeTZmjjuGSN151mM",
  "key12": "2uFYLawizE5wyjgAUXza43jAmSEMxDzRYYU1aT1YFqtnXJjzajAb2SCGc5GA1KVEgEscYsgye8Hf8KeVw9VWxr8Q",
  "key13": "4HqX6TGsSHJQ9QaPxMBT9waMdXS6wTQGQuGrUYR1ZA8Hwc5t6gqWBk4cVs5LnWddht6qRv7pseXny9Qt72sLCX67",
  "key14": "2VhQQpnQygpZrVq9hrNW6kEKHNWpKtUP4riM6PDKpYJvwWRRbfiaCogpMksFUrD4bLpkwe1Tru7jjad4p37uwEzy",
  "key15": "rH1vXf9dkw3Tx4MbQ4ifSsN3X5sDBahTGb6MzCGRQ1emuuTtRDwkhoKbgQHgL4sZdrFEXDbvCvQU1evr4r5GYuP",
  "key16": "2TVM8QY8iSwiq13Xznvup9n9Lntg21Lhji1UWB3ViPg2rbivG7EuvwTvC5ufrNTsd4NUZB51VXsqxM62zMC2zkxN",
  "key17": "5WVEGwFBTQxem29cWkqkoadJdf96HXnehULSY8ZemRXLXcwhAQpQ9gc3seQ3uK4YFED77tNK53vQciBVm4WTZCa2",
  "key18": "5LvRxh8GUCZ8oADou1TaEJ9S2GWRbFTVteF2y2xfVUokPTkxNZ3iEUDD4UcByLPFzuB2jXxzKWZwhjLLcukzHYjG",
  "key19": "5kvpNPxhTig9xAokAkz9xjGgtarHeuZyPTUgaaD5YHQfuDG3XcAx3dcRAh1WBxFjfpgbRsaAvQsDdEsyKRtR7KMW",
  "key20": "5ScaGhgdZqLZjd6W6kS69tPfnNFoM5icJeA4ZDuzEwJuPF94FTKRYgTBcvKhmZPbsmMm9EYEcHxeBnVH9JXCDePs",
  "key21": "3KQpvBPUQ52UimQqVgYgZvxk7FGcCURDmSEyuC6YUHrj8pKCnQJjmB7stjJcLKaZG25JRSqwXaVt4hhxS9KJjxg4",
  "key22": "4ggJykKTw8B9r8zFGb58VdBvirbtZFktQ3TLYkQEnzrymCvRv5EekQxGAQ8D6rmxEUdx4srwwV5PjdaHdfadTQ39",
  "key23": "3r9VMiv8y5VqmgQgt791WXzN3PKecfecucVDMZDedjAk47WfRLRABfTf1G1HbZ5yFXxzeafioJRMuRU213tv1ujT",
  "key24": "3WV5jUNFiScq8WbQim3HWS8cEBJeDND1zq2Z9ydD3esABPYyFFrAGTEDK6kRiRQMd7mMTbWCCbJjUvdTjPUuupoF",
  "key25": "2e9tfgn1Mxto1PGkr82X8FzLCF8DkS5YrAiHXwdQg5CX9n3Xa36BhV29A6NLM3ouCTrSA5vjNDyK8Rkd3snJQ1qC",
  "key26": "2J2QT4V1oQPHUPHToA4tKTEBf1jcjWYmg6cofneGtBVV8TBZdFAUhcC7KBt8poibvynPDka144Vu7FKBuT1gJndV",
  "key27": "4bterhFwBg3GDRcVyPucEuzCbKBC3m2Fg5q7NkqyRvWUwGXsabdM312iB5Hp4h2RjAQb9274TX3kJN4NhoQmLGyG",
  "key28": "qyq35uZJ9WVWA7LXm1HSgiKtUwXGsVNcPxQQeZ6CexyVkNqGGHkxooHjxsLiwCuc8p8mzkKBE23XLzrbQokjGVp",
  "key29": "44PBUUH16kV59WLhmYuDwgPhgDM2TQkz3dxYYnQm2rzo9qcTbWwYYgdmufe5K5yVmdUjJzyoVDAADdJje4Ax22p7",
  "key30": "2oqPBSPD613YRE9tuK3qEyDvo3nR3EVThwVgVtizY1vJDbVBZiySj8YJncPuRCTb2nn6sPLFWrCq1UDJ1RqSd7gi"
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
