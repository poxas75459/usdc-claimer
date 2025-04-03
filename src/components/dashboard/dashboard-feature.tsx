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
    "o1PtiAyvu72cYGbvWM6vgt3syBAFrhxavDnWqiqrrqRLxUP1Zzw68U13A8ddZPKnBjxPzyN66tWfqdjaHhw4pPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Uyy691VPdygdE3oQRAaG3FAnnTntYyus4pqnVV6AT6pownNhd7V82U4nam1zZEDh6ayLnWtWF4TU344JNZqmje",
  "key1": "2LqgrYKgVoc7Z4WaEGBdUTVTDae5ZFcddUpszfutxoeGZgTyHAum6DfEnZSS8d8fXvpKcvpb33mHQDJiD2Z5g8XT",
  "key2": "2rdt3DTX7z1wbi3og52pmXsNo4gpa9bmh17exErRhGxXfWZTqRdfn18czTYTLBnLLG5p8hjxE1zm9ehafwGb5nE6",
  "key3": "2qu7mqR7DYMAc7XZqtWKr4LWGjD7kpKg5biEGfXiMXMmvSi5wTQ6A15QyPuX7EboC4WPynpxnmvK7gcB256KAYXB",
  "key4": "34ZGkKBnuhCYrfmRFxasJszt19XU3AxAdXFfGNWRPsdwAT4DdbRtF4ShTKEDNPSqDxVQcH5Qhn9N7j4PRKeevjrS",
  "key5": "2odNsw2DprQQ3eN5FNn2kPyrW2cpXJccJWVJZyPPD4F4EdubJ1gc14wEGuqRgWPTSYtaJpFCVqpNbrVibmraHsPa",
  "key6": "3wbTSsMuzVbCkqcd6s41Zc9QGAr2KAPdETdvNafTJznQ8L3hwsFW95sALvWm12iy9qdd8YMzR7TwAnScF5U7PvqD",
  "key7": "5ZwBf6ZQT5pqHW8NG8qLAeGkXGyXUM3EJUeB7Xdd1ybxKXyvhcFnyjBvBYidB8kTu78yarEHfNyJriAPqfsQWQsj",
  "key8": "3zRuVTJdUw8DRjSdns1sZmayZhDZqTgy3HTrtuZdprQqMG5uFBMx4Lt677cDYw2SBwHpLE2AWeHvCNu2bHRsFtLH",
  "key9": "4rFFub5hbYfmtchiUFrNehY1BpD9b4G1zRcSe1Hdj1mCLyHALNfFKi5N2FGNP5CzhXDurZK8G72piDPqojgFsRJv",
  "key10": "uV8XBqrx9vaTaXj5FMJK4sDgNtXqmDMa1wUZvipnyLG6b6KvUTaKDchgHQyaiAdK7H5KjHRscFZzwYsSbnDmSau",
  "key11": "2jSjaAt6JBf3KG13A9iyUtJeno1qdNqztpHbCjhQvG2a9wBnFmBvy9tvdLqQJkBp2qhhzj4NJX51egpjE5xPN26",
  "key12": "5kFam1Y2RRPCxjuPUJzsSfgSd6UiH2i3y6jVXkKNueoLH5qyNSEFNoS6e4zoqXbguePLnYpWjWNhKF8XJBZiB4Pw",
  "key13": "4o8vE1LeqnMQbi2RVsF7A2hDpY5xmZ9zJtUYgKCUscC8WyWfVSKpkTLJUC3g6EZnrTxhPCyuYYkKKrtux8TMSitD",
  "key14": "27SWR4KQGKx32j3uxbUHm2t6i2FuDt4Tz5zcA3dKryqjo9nkH4eGRHspNG8JhQKd5LZtJim4kwHjdxZ5cqWe1sFk",
  "key15": "31M5YiZp7qKwbQcCdw1eGf5n6ndq7rcueaEE6AH2jbRWE7sTSYJzDwx957sY6o7k6wAFTTbJqNk4HbhQA3RL2C34",
  "key16": "67mtkhUumMMNME23WqEFXRgijVbsvJ3WxxJCQPwDCwJkUUc63Pj87iBt9HU9K4S5inUk7zpJuRb9F7igyh9J1fQS",
  "key17": "r8BqWpP1LXCCToDXxLWk18QEqNB3iVitD28PAbbryvgkHpnguG81ncqZUB77xsJyaz6HKUwNbACFubMuJsJNcMz",
  "key18": "5ekijwtsGUQi2E1NK42c7PNXqBy9ESw7QbPs6TJnQjEMDFueTSB9xcE6DA4NTVSjBRiyMhPW3bPJNvxqJoAqFLXB",
  "key19": "5So1kJEWRHkjxzAAy54VcABmaqUSE5mN3WWZBR4kbvszNF8AjBHxhzDdWJvb2vE7MXAf5yvK9N8BxdXHT1rcQYwi",
  "key20": "4LX6rUnE3FbWvoYvdp51xu6iUxyjUdrNPo6d3G1m3SaVegVKE6xWCDbX25UNKk79M7JxaHurteEgHJLQXPeukYb1",
  "key21": "3byDEj2ZQpVQUt7YTYkMWE1gBWudLDSbQaw8MpMfLHz4LL6or6VPpJuyjNwdS6ADhDSZf6rSRReLvgiYudXh1BtU",
  "key22": "2w5YTaArnTMvuXHNKazh9w3BuRKx5A37zqY8SZrNqsuvm5eVW2SpyMZrYvmratuVb9DjipdJfeXry4svtHc2cSjE",
  "key23": "2UHzy1UjaFCm65cLrpjDFjWRQj5ST4eh4wobGBHeT9zD4QVN3spoHhGnuDVHXjuZPW7MEUpLRsHByxxuneDD5s85",
  "key24": "4z3jFxjoxPXpf61dmrqAGGZHigsAz7rSPYvg3hHZ1Dpcwkwo7RNgmqRFt6PyaHvrxU39ChoFDm6yHohMhhaCJSQP",
  "key25": "2z1j7hSLzGKaaFerHMhtLBNq2n2FTG9bFhGfPT4krKpmQ8m6v9Regcb4MsbRCysBs4F97L5ARogUwUR6jUdo5Lm1",
  "key26": "44h6rgmSY1ut1PwZZNJ4F4u2FmKMwqtp1PobVAZKhkx7wRad9Bz9Uw2ccLijPknF8pdu5F1d5rzKSqAzwSWm3jJs",
  "key27": "3AucvDSeT456sAnarH1pshwunb8c8y88uXYgzuiDJs5VdcAFeHH6zxJCebo3U5u41455cd6WRBWsqG4XPoKitNmu",
  "key28": "41DWustxUxXgKg7UyBhcEMD5Gz9Q9WK49zzaERXmoaQX7ACeiAavqupDfGVajEPgxGZqaTRbnc38JoFuSKGP5uee",
  "key29": "UV3MgskGreNx256f2ed3R66GzJmRugxMASh1UApyn4qeYykxNMf4LWe6GpucdZ1Z2fvo4B6BDhMgXoyyTNcfeyr",
  "key30": "58DRibmQqDGEtyBcatxZSxeupENoY9LGGU43omxXVV2xjwGocQvR6NFM6PbwFCEwLjmSyRDqHPB8EW97ib2oK8ri",
  "key31": "5D2Xm45mSKv16GS4Q7ThTga84npYpsZ1bmehzeS195CcAJPyH5YGQKByjiL1JrXqyvKTu9dxXj9TfHoDZVPXnaLq",
  "key32": "3vAYRtUUuW3Qcusz8HDibTV8tMHEvVmgjWeS39AhcKxveQAuVm6K6W4guE8bqUqU3t4AzbWHhEZ1tXDnjdyHVTiz",
  "key33": "VwbLDrbW5BweJDekcRreprfnchj8fM91LQ2pK6k41ba8Nkht2mPn85FW59kdYu897MN6H7MDGWzLobyJQ4bgdiz",
  "key34": "3Ypg4SUd8AUVrGqhdUxfchAyjwrE4Ztn9PM5M2qjAQx7ozdZtm1F1DNfq4mmvTCs9qPNcz3winx9NoFRrh7AaKgT",
  "key35": "3iAb1BJNbFcFCKRg9sEahoyYWHf9DsuVH4yGzNjr9kM32ZX9SxKzEMh62VjM6JQcbmoFXTypu1n3du9gavMBeAUH",
  "key36": "2WLKVyW5vrNkV6Lz6n4YUv782fRz8rFFiKFCnxPGxLfx41iaStPFXkMRfyqnnJqN7P8pcJKaEErYfPPUrEPvYFuB",
  "key37": "55xUci2N9Zo49QLSyxWi5JxKs7S7GzBJaktcbbepgD2ef4Wcsa4ft7DGFz2LNMD6XNGVnKbTRS4VP6cLXPDRTqVs",
  "key38": "66Z3m5pQdV9QcYZpsKjHVdPjHQP9LShDBpFbzmFyJHecMeGTDM2cE7pn5JqJvBb5xWH5NXwNnTeX3RARpnQSBz68",
  "key39": "5WP5RmHGwAsHhziok8vJE5gjJuarNQvt6x78f3EadXx7hmGw9X4dUxAJzTrEyZRxCU5uhgDTCaAvfMCGnhXKAGqg",
  "key40": "2yzUbbDoDT3ddkhbevkw2WJ5fLE1pP57mvAPcvvHx3P6HGJHkbgpziufyGeik9ttsEaRqJvnL22RreXpwt8ARBjk"
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
