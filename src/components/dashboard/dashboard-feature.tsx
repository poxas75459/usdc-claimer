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
    "2A64UPb2un8wfUqU1iQJfHxpLnVPJBNBKDBkY1uhRFoQ5u1H4fbX4XPzu7pkW5yxR2q1TYYNrLEVodKdfmEDEw2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bWjvc7JtAxKN4NWHXvwzUVEucpYPZmuqbHfiShJsw8RHencspvKx83cXn7hVMWb72JUB6cb2GtMM4F2Z9NCFwoU",
  "key1": "NofLkyerz5TUAdx7xnidEJ8i3atmsAjN1ZbKh6dLfDXB2L9ixabDj5wShSyJANyuxodcyovKo1dyjjX5xnj1SSi",
  "key2": "4xVr4BwziYuuLdAyi6R1JbW2uVKVVAN1hqpvUKuqkq1mHyW1dKKo8ppiSwCBhevMBYBTaPfFk19rsjcRLZBUy5Rf",
  "key3": "51pVh7QzbmnQs2vM4gTfa7kmwDyab5JLAGSe1Mta5H2s3zL4aXAPNkSVauffsQAQnoHbwAC5uPNSLRyt6LpciEBS",
  "key4": "gZ9FTXV9dCepHoegY2tKHHWWLgndXDec3ya3ESYA7vNm2VUsGYGtEVvxbPQGcdPZFQAGjCUXmEwPtf54VAeHafw",
  "key5": "nYWQv4buKMoa4uXG4bTEtesvNReSygHL6Wd4gRNcMEqPWu1HY3bWA88YMcMtevbpcwfE2cTViHzavyizT5mQesh",
  "key6": "3FgLeHUVhkwCn3FnLFd9LBNLrXmWXFRfKRFu2q4WPLK3wvpg4Mb8h3ZbHvwUATbRZEe6JZtFS69fRzgzE3JUWcEP",
  "key7": "5VK3FqwUGiYUmaDEMX55XVK6bipQewFf84UsE9qzqYCCm8nLPoSEttAy7UkHvbQhPLWe1irVz2cXmaAs5oJFQrD4",
  "key8": "5wZrbAmXf75kGrXRD8cdovSqXhsFmLgvA1usWbP7TtFFY1da1mzqJV9Kn1pvHDLfsJbbfzKSkw7hnk9eRJ4k4Msy",
  "key9": "2jKV9dQkJtX4KBv3ABi6TCUWKCtD4T15dqzRgo6jxUVyj2weuRPpbiN8Roow65yhbysr9CZCUbBLYuC9Vms1FFrk",
  "key10": "3F9b5DGKcwRXuykGcAq2NTsXLwMUqrxvn2ToTe3gPp8ih8Enum5fo1k81T7ngrVa1tfcqgxcP9ChUVbXuDnL1en3",
  "key11": "BpxxbKNDamdJorr9TPRwKnvZPS7aZXDegNGPMFjbUtzBAuKjikVVruyX4h3CmtwUaTLhapgtLTkSrJhHVBePmha",
  "key12": "3moLQNoDbm9W1mDN1d5ugh2nr1KZaRXRvwdghzNfGFUHUCh5qXeg8tfJpfKy2VSvJz8tgNdkoFkBCGZCGUU76H6X",
  "key13": "4424BjAW23p4Sv2byWMA9mCfvXVMj2qkwiAP9RB1TPzK9YVw87Ko31827FoPvf7zvwQ9qJLdnTTxRaEaBnMspEwV",
  "key14": "2VBgpeZ9pD2WBZYESxQP4tfKqzmfnXBZkKityJAvpqCLWYfSVqRVVSqxWruCRdoAkNLhToHrZKcv3Bw1vdmp7wTo",
  "key15": "3UZJLeNuCT2vsYFwL7YrNvmonALBkjvgobgAWN8uVeyvZm2bfxSYvuM9RYVjjQBY7jtRNmde7m967SUJ2uaHNSP6",
  "key16": "byFZPYg4kzUeN4PGfTb9h5WD5U9zFX6Ryc1kMBaTYHtnqq7WChiqePdjxszbRJikHmNMUdtvDiFN1rawmdLiRwr",
  "key17": "34Yqa2c2xG8zbAp3UDTNxgvWU13DcJvUGuaXFB8H12xtkz4E7nDsRWTAbqkpR1X1A4h7o3uVitTReLvnfVUhTPio",
  "key18": "5pZbFEQxuPR6xCcpsQPHJEmkDjUFbBrQzBCP2ykrPmh83kP7599D1BXwrMM9Q8QfHghhiULKG6156kVL38nMdjzV",
  "key19": "2J1orK9LAyVHjnjmwNWvoKC39rFBnNJY2M4rFEtECz6ZVdQv461e9pvi6GsjTKC9aAXTt2BJTtoDZhUavohttkGg",
  "key20": "5pYf3aDfSXP62kvy6Zp1Xf5g9caA1K7xXcGsTz3oF5bJQYWATYecE8SEVsEgQYcw3wCowXu3sMR3YETjwaTKpyVa",
  "key21": "3jQ24bYQLW4A6BnbMv5r8qW4vnX7biSpayaDow5wVSzSHL8GA5m81SQzoErnL2xCFCon6tNoRXSxDe3NWYca7ZJB",
  "key22": "TS8oh47awaP7sKD31dmkBbhA5vLxMkitgeSpNhksULSDM5RR8ANGN65ZxZkAw3TtyqybVzYvY8GJAE4Anj7dgpT",
  "key23": "3AzQGXeDGrcGnTrHYWu2TsrjoktRXF3f7ehDFvxsTghtXjsoxehme1iCWWbaGpsxYBFWVuKW717VGGHHpuBLheUv",
  "key24": "39zxDrvWMqLiastf5NLiASNJuc6cohfFZwgGefudAhE8qZQJhMjZgvUpjiDfzD6KQkzrwEpyHbpkdf3P4L2XJLma",
  "key25": "5qcsxwvecThnFHLmyDPHsEML7MaSFYHyZ6nw1izbV3LUhCoVQyJsZ7m2SwerM3bNjSnDKRQbaKxzkDtH5RK7ptBQ",
  "key26": "4ovnsLXnoLsEApVp2ygTUAqyFhEBN4Sr3xQpNZnqEm3CsEtt5YaNnAJY1oCXVpd4hFSvoRUxUeweovFd5qPNeAFw",
  "key27": "2CdBDtRVd2RXafuAtaGoLW9j5MrB9ejFBrSGD34WMhtu6aHWjWa5nFZad5PrekWkAUavPLibr3iKeYX5tUJpvfXA",
  "key28": "3KdVXufQSbPns2Ye4EJaX77nu5NaQU3Vfj5g5pqVXwAbazT86rhtjaApojEZjmZiuNbhCtBN1ZXxyK7S5kT41ovj",
  "key29": "4EkSLprzdSGkK1i38aXsFNi8t25vbDuiULa5FWnUX3FNrrExhAK5o8aGgr4e7pUM4rwn97AhKsweuB4arEK7Gx5H",
  "key30": "5psZbZ3dNqZgTD7ydQztGHkpkDdzavyszXVmRGvxr17ujWjT8hWuknb1sSrbCRTLvrzywyFZv7DKUgpExFzAnKMY",
  "key31": "36WXGF5wHNQeUGCdY5uKPCSedod8EEWhc1PJ2JLz951eDWyqddmGyMDrKkWuh9eUT5zZoB2XDrcHG5wwxWZosnDn",
  "key32": "3xnJweC2Nvh9J1io2AWWy1m6KT12itdaZWxd1LyzyVJiGv4TnEEtcxbkrTVa1Hs7jTFwDM4i4yWtxdFQoeNwFK9k",
  "key33": "3fgYQ5PxasetHr66ceYGDQLXUN4ZVoHZ5P5U2TxsYdFrAf1mkJgArv1Q5rcsDN9uwmNdSr9vQXiwCpjZQrmgKUie",
  "key34": "455WDRcJQMssiwLc3bzF2kd5XhpB861FLRRVdpRX8FHtPuQTNhXLKcSBcEMEdpzygEjYKEKr6CdLLbSYt2UsvvkL",
  "key35": "2Bgv8rxVzqFhA7fNsqwfPWWF5zBfvEcTGohcDuAi1ZR2i2rZL4NzVnMwpBS6A9LtzKUd3ADbSczeVvfYg7P4pA8L"
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
